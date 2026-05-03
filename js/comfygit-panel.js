var qc = Object.defineProperty;
var Kc = (e, t, n) => t in e ? qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var No = (e, t, n) => Kc(e, typeof t != "symbol" ? t + "" : t, n);
import { app as Os } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Tt = {}, Dn = [], Bs = () => {
}, Ki = () => !1, ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), pl = (e) => e.startsWith("onUpdate:"), Vt = Object.assign, gl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jc = Object.prototype.hasOwnProperty, _t = (e, t) => Jc.call(e, t), tt = Array.isArray, Ln = (e) => Eo(e) === "[object Map]", Gn = (e) => Eo(e) === "[object Set]", Gl = (e) => Eo(e) === "[object Date]", at = (e) => typeof e == "function", Ut = (e) => typeof e == "string", Es = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", Ji = (e) => (xt(e) || at(e)) && at(e.then) && at(e.catch), Qi = Object.prototype.toString, Eo = (e) => Qi.call(e), Qc = (e) => Eo(e).slice(8, -1), Yi = (e) => Eo(e) === "[object Object]", hl = (e) => Ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, co = /* @__PURE__ */ vl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), da = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Yc = /-\w/g, $s = da(
  (e) => e.replace(Yc, (t) => t.slice(1).toUpperCase())
), Xc = /\B([A-Z])/g, dn = da(
  (e) => e.replace(Xc, "-$1").toLowerCase()
), ma = da((e) => e.charAt(0).toUpperCase() + e.slice(1)), Oa = da(
  (e) => e ? `on${ma(e)}` : ""
), rn = (e, t) => !Object.is(e, t), Wo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Xi = (e, t, n, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: n
  });
}, fa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zc = (e) => {
  const t = Ut(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let jl;
const va = () => jl || (jl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (tt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = Ut(a) ? nu(a) : Wt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Ut(e) || xt(e))
    return e;
}
const eu = /;(?![^(]*\))/g, tu = /:([^]+)/, su = /\/\*[^]*?\*\//g;
function nu(e) {
  const t = {};
  return e.replace(su, "").split(eu).forEach((n) => {
    if (n) {
      const a = n.split(tu);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Ve(e) {
  let t = "";
  if (Ut(e))
    t = e;
  else if (tt(e))
    for (let n = 0; n < e.length; n++) {
      const a = Ve(e[n]);
      a && (t += a + " ");
    }
  else if (xt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ou = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", au = /* @__PURE__ */ vl(ou);
function Zi(e) {
  return !!e || e === "";
}
function lu(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let a = 0; n && a < e.length; a++)
    n = kn(e[a], t[a]);
  return n;
}
function kn(e, t) {
  if (e === t) return !0;
  let n = Gl(e), a = Gl(t);
  if (n || a)
    return n && a ? e.getTime() === t.getTime() : !1;
  if (n = Es(e), a = Es(t), n || a)
    return e === t;
  if (n = tt(e), a = tt(t), n || a)
    return n && a ? lu(e, t) : !1;
  if (n = xt(e), a = xt(t), n || a) {
    if (!n || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !kn(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yl(e, t) {
  return e.findIndex((n) => kn(n, t));
}
const er = (e) => !!(e && e.__v_isRef === !0), m = (e) => Ut(e) ? e : e == null ? "" : tt(e) || xt(e) && (e.toString === Qi || !at(e.toString)) ? er(e) ? m(e.value) : JSON.stringify(e, tr, 2) : String(e), tr = (e, t) => er(t) ? tr(e, t.value) : Ln(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [a, l], r) => (n[Aa(a, r) + " =>"] = l, n),
    {}
  )
} : Gn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Aa(n))
} : Es(t) ? Aa(t) : xt(t) && !tt(t) && !Yi(t) ? String(t) : t, Aa = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Es(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fs;
class iu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = fs, !t && fs && (this.index = (fs.scopes || (fs.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = fs;
      try {
        return fs = this, t();
      } finally {
        fs = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = fs, fs = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (fs = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, a = this.cleanups.length; n < a; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, a = this.scopes.length; n < a; n++)
          this.scopes[n].stop(!0);
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
function ru() {
  return fs;
}
let Rt;
const za = /* @__PURE__ */ new WeakSet();
class sr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fs && fs.active && fs.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, za.has(this) && (za.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || or(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hl(this), ar(this);
    const t = Rt, n = Ss;
    Rt = this, Ss = !0;
    try {
      return this.fn();
    } finally {
      lr(this), Rt = t, Ss = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        kl(t);
      this.deps = this.depsTail = void 0, Hl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? za.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ya(this) && this.run();
  }
  get dirty() {
    return Ya(this);
  }
}
let nr = 0, uo, mo;
function or(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mo, mo = e;
    return;
  }
  e.next = uo, uo = e;
}
function wl() {
  nr++;
}
function _l() {
  if (--nr > 0)
    return;
  if (mo) {
    let t = mo;
    for (mo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; uo; ) {
    let t = uo;
    for (uo = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ar(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function lr(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), kl(a), cu(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function Ya(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ir(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ir(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _o) || (e.globalVersion = _o, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ya(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Rt, a = Ss;
  Rt = e, Ss = !0;
  try {
    ar(e);
    const l = e.fn(e._value);
    (t.version === 0 || rn(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    Rt = n, Ss = a, lr(e), e.flags &= -3;
  }
}
function kl(e, t = !1) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      kl(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function cu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ss = !0;
const rr = [];
function Ys() {
  rr.push(Ss), Ss = !1;
}
function Xs() {
  const e = rr.pop();
  Ss = e === void 0 ? !0 : e;
}
function Hl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Rt;
    Rt = void 0;
    try {
      t();
    } finally {
      Rt = n;
    }
  }
}
let _o = 0;
class uu {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class bl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Rt || !Ss || Rt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Rt)
      n = this.activeLink = new uu(Rt, this), Rt.deps ? (n.prevDep = Rt.depsTail, Rt.depsTail.nextDep = n, Rt.depsTail = n) : Rt.deps = Rt.depsTail = n, cr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = Rt.depsTail, n.nextDep = void 0, Rt.depsTail.nextDep = n, Rt.depsTail = n, Rt.deps === n && (Rt.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, _o++, this.notify(t);
  }
  notify(t) {
    wl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      _l();
    }
  }
}
function cr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        cr(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xa = /* @__PURE__ */ new WeakMap(), yn = Symbol(
  ""
), Za = Symbol(
  ""
), ko = Symbol(
  ""
);
function es(e, t, n) {
  if (Ss && Rt) {
    let a = Xa.get(e);
    a || Xa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new bl()), l.map = a, l.key = n), l.track();
  }
}
function qs(e, t, n, a, l, r) {
  const c = Xa.get(e);
  if (!c) {
    _o++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (wl(), t === "clear")
    c.forEach(u);
  else {
    const d = tt(e), f = d && hl(n);
    if (d && n === "length") {
      const v = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === ko || !Es(w) && w >= v) && u(p);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), f && u(c.get(ko)), t) {
        case "add":
          d ? f && u(c.get("length")) : (u(c.get(yn)), Ln(e) && u(c.get(Za)));
          break;
        case "delete":
          d || (u(c.get(yn)), Ln(e) && u(c.get(Za)));
          break;
        case "set":
          Ln(e) && u(c.get(yn));
          break;
      }
  }
  _l();
}
function Sn(e) {
  const t = gt(e);
  return t === e ? t : (es(t, "iterate", ko), ks(e) ? t : t.map(Ts));
}
function pa(e) {
  return es(e = gt(e), "iterate", ko), e;
}
function on(e, t) {
  return Zs(e) ? wn(e) ? Bn(Ts(t)) : Bn(t) : Ts(t);
}
const du = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fa(this, Symbol.iterator, (e) => on(this, e));
  },
  concat(...e) {
    return Sn(this).concat(
      ...e.map((t) => tt(t) ? Sn(t) : t)
    );
  },
  entries() {
    return Fa(this, "entries", (e) => (e[1] = on(this, e[1]), e));
  },
  every(e, t) {
    return Gs(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Gs(
      this,
      "filter",
      e,
      t,
      (n) => n.map((a) => on(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Gs(
      this,
      "find",
      e,
      t,
      (n) => on(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Gs(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Gs(
      this,
      "findLast",
      e,
      t,
      (n) => on(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Gs(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Gs(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ba(this, "includes", e);
  },
  indexOf(...e) {
    return Ba(this, "indexOf", e);
  },
  join(e) {
    return Sn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ba(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Gs(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yn(this, "pop");
  },
  push(...e) {
    return Yn(this, "push", e);
  },
  reduce(e, ...t) {
    return ql(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ql(this, "reduceRight", e, t);
  },
  shift() {
    return Yn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Gs(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yn(this, "splice", e);
  },
  toReversed() {
    return Sn(this).toReversed();
  },
  toSorted(e) {
    return Sn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Sn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yn(this, "unshift", e);
  },
  values() {
    return Fa(this, "values", (e) => on(this, e));
  }
};
function Fa(e, t, n) {
  const a = pa(e), l = a[t]();
  return a !== e && !ks(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = n(r.value)), r;
  }), l;
}
const mu = Array.prototype;
function Gs(e, t, n, a, l, r) {
  const c = pa(e), u = c !== e && !ks(e), d = c[t];
  if (d !== mu[t]) {
    const p = d.apply(e, r);
    return u ? Ts(p) : p;
  }
  let f = n;
  c !== e && (u ? f = function(p, w) {
    return n.call(this, on(e, p), w, e);
  } : n.length > 2 && (f = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const v = d.call(c, f, a);
  return u && l ? l(v) : v;
}
function ql(e, t, n, a) {
  const l = pa(e);
  let r = n;
  return l !== e && (ks(e) ? n.length > 3 && (r = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return n.call(this, c, on(e, u), d, e);
  }), l[t](r, ...a);
}
function Ba(e, t, n) {
  const a = gt(e);
  es(a, "iterate", ko);
  const l = a[t](...n);
  return (l === -1 || l === !1) && xl(n[0]) ? (n[0] = gt(n[0]), a[t](...n)) : l;
}
function Yn(e, t, n = []) {
  Ys(), wl();
  const a = gt(e)[t].apply(e, n);
  return _l(), Xs(), a;
}
const fu = /* @__PURE__ */ vl("__proto__,__v_isRef,__isVue"), ur = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Es)
);
function vu(e) {
  Es(e) || (e = String(e));
  const t = gt(this);
  return es(t, "has", e), t.hasOwnProperty(e);
}
class dr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !l;
    if (n === "__v_isReadonly")
      return l;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return a === (l ? r ? Cu : pr : r ? vr : fr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const c = tt(t);
    if (!l) {
      let d;
      if (c && (d = du[n]))
        return d;
      if (n === "hasOwnProperty")
        return vu;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      os(t) ? t : a
    );
    if ((Es(n) ? ur.has(n) : fu(n)) || (l || es(t, "get", n), r))
      return u;
    if (os(u)) {
      const d = c && hl(n) ? u : u.value;
      return l && xt(d) ? Xo(d) : d;
    }
    return xt(u) ? l ? Xo(u) : Cn(u) : u;
  }
}
class mr extends dr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, l) {
    let r = t[n];
    const c = tt(t) && hl(n);
    if (!this._isShallow) {
      const f = Zs(r);
      if (!ks(a) && !Zs(a) && (r = gt(r), a = gt(a)), !c && os(r) && !os(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(n) < t.length : _t(t, n), d = Reflect.set(
      t,
      n,
      a,
      os(t) ? t : l
    );
    return t === gt(l) && (u ? rn(a, r) && qs(t, "set", n, a) : qs(t, "add", n, a)), d;
  }
  deleteProperty(t, n) {
    const a = _t(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && qs(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Es(n) || !ur.has(n)) && es(t, "has", n), a;
  }
  ownKeys(t) {
    return es(
      t,
      "iterate",
      tt(t) ? "length" : yn
    ), Reflect.ownKeys(t);
  }
}
class pu extends dr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const gu = /* @__PURE__ */ new mr(), hu = /* @__PURE__ */ new pu(), yu = /* @__PURE__ */ new mr(!0);
const el = (e) => e, Uo = (e) => Reflect.getPrototypeOf(e);
function wu(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, r = gt(l), c = Ln(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, f = l[e](...a), v = n ? el : t ? Bn : Ts;
    return !t && es(
      r,
      "iterate",
      d ? Za : yn
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = f.next();
        return w ? { value: p, done: w } : {
          value: u ? [v(p[0]), v(p[1])] : v(p),
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
function Oo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _u(e, t) {
  const n = {
    get(l) {
      const r = this.__v_raw, c = gt(r), u = gt(l);
      e || (rn(l, u) && es(c, "get", l), es(c, "get", u));
      const { has: d } = Uo(c), f = t ? el : e ? Bn : Ts;
      if (d.call(c, l))
        return f(r.get(l));
      if (d.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && es(gt(l), "iterate", yn), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = gt(r), u = gt(l);
      return e || (rn(l, u) && es(c, "has", l), es(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = gt(u), f = t ? el : e ? Bn : Ts;
      return !e && es(d, "iterate", yn), u.forEach((v, p) => l.call(r, f(v), f(p), c));
    }
  };
  return Vt(
    n,
    e ? {
      add: Oo("add"),
      set: Oo("set"),
      delete: Oo("delete"),
      clear: Oo("clear")
    } : {
      add(l) {
        !t && !ks(l) && !Zs(l) && (l = gt(l));
        const r = gt(this);
        return Uo(r).has.call(r, l) || (r.add(l), qs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ks(r) && !Zs(r) && (r = gt(r));
        const c = gt(this), { has: u, get: d } = Uo(c);
        let f = u.call(c, l);
        f || (l = gt(l), f = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), f ? rn(r, v) && qs(c, "set", l, r) : qs(c, "add", l, r), this;
      },
      delete(l) {
        const r = gt(this), { has: c, get: u } = Uo(r);
        let d = c.call(r, l);
        d || (l = gt(l), d = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return d && qs(r, "delete", l, void 0), f;
      },
      clear() {
        const l = gt(this), r = l.size !== 0, c = l.clear();
        return r && qs(
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
    n[l] = wu(l, e, t);
  }), n;
}
function $l(e, t) {
  const n = _u(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    _t(n, l) && l in a ? n : a,
    l,
    r
  );
}
const ku = {
  get: /* @__PURE__ */ $l(!1, !1)
}, bu = {
  get: /* @__PURE__ */ $l(!1, !0)
}, $u = {
  get: /* @__PURE__ */ $l(!0, !1)
};
const fr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Cu = /* @__PURE__ */ new WeakMap();
function xu(e) {
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
function Su(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xu(Qc(e));
}
function Cn(e) {
  return Zs(e) ? e : Cl(
    e,
    !1,
    gu,
    ku,
    fr
  );
}
function Iu(e) {
  return Cl(
    e,
    !1,
    yu,
    bu,
    vr
  );
}
function Xo(e) {
  return Cl(
    e,
    !0,
    hu,
    $u,
    pr
  );
}
function Cl(e, t, n, a, l) {
  if (!xt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Su(e);
  if (r === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    r === 2 ? a : n
  );
  return l.set(e, u), u;
}
function wn(e) {
  return Zs(e) ? wn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zs(e) {
  return !!(e && e.__v_isReadonly);
}
function ks(e) {
  return !!(e && e.__v_isShallow);
}
function xl(e) {
  return e ? !!e.__v_raw : !1;
}
function gt(e) {
  const t = e && e.__v_raw;
  return t ? gt(t) : e;
}
function Eu(e) {
  return !_t(e, "__v_skip") && Object.isExtensible(e) && Xi(e, "__v_skip", !0), e;
}
const Ts = (e) => xt(e) ? Cn(e) : e, Bn = (e) => xt(e) ? Xo(e) : e;
function os(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Tu(e, !1);
}
function Tu(e, t) {
  return os(e) ? e : new Mu(e, t);
}
class Mu {
  constructor(t, n) {
    this.dep = new bl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : gt(t), this._value = n ? t : Ts(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || ks(t) || Zs(t);
    t = a ? t : gt(t), rn(t, n) && (this._rawValue = t, this._value = a ? t : Ts(t), this.dep.trigger());
  }
}
function it(e) {
  return os(e) ? e.value : e;
}
const Pu = {
  get: (e, t, n) => t === "__v_raw" ? e : it(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t];
    return os(l) && !os(n) ? (l.value = n, !0) : Reflect.set(e, t, n, a);
  }
};
function gr(e) {
  return wn(e) ? e : new Proxy(e, Pu);
}
class Ru {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new bl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _o - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Rt !== this)
      return or(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ir(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Du(e, t, n = !1) {
  let a, l;
  return at(e) ? a = e : (a = e.get, l = e.set), new Ru(a, l, n);
}
const Ao = {}, Zo = /* @__PURE__ */ new WeakMap();
let gn;
function Lu(e, t = !1, n = gn) {
  if (n) {
    let a = Zo.get(n);
    a || Zo.set(n, a = []), a.push(e);
  }
}
function Nu(e, t, n = Tt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = n, f = (P) => l ? P : ks(P) || l === !1 || l === 0 ? Ks(P, 1) : Ks(P);
  let v, p, w, g, k = !1, $ = !1;
  if (os(e) ? (p = () => e.value, k = ks(e)) : wn(e) ? (p = () => f(e), k = !0) : tt(e) ? ($ = !0, k = e.some((P) => wn(P) || ks(P)), p = () => e.map((P) => {
    if (os(P))
      return P.value;
    if (wn(P))
      return f(P);
    if (at(P))
      return d ? d(P, 2) : P();
  })) : at(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ys();
      try {
        w();
      } finally {
        Xs();
      }
    }
    const P = gn;
    gn = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      gn = P;
    }
  } : p = Bs, t && l) {
    const P = p, U = l === !0 ? 1 / 0 : l;
    p = () => Ks(P(), U);
  }
  const S = ru(), x = () => {
    v.stop(), S && S.active && gl(S.effects, v);
  };
  if (r && t) {
    const P = t;
    t = (...U) => {
      P(...U), x();
    };
  }
  let T = $ ? new Array(e.length).fill(Ao) : Ao;
  const I = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (t) {
        const U = v.run();
        if (l || k || ($ ? U.some((N, B) => rn(N, T[B])) : rn(U, T))) {
          w && w();
          const N = gn;
          gn = v;
          try {
            const B = [
              U,
              // pass undefined as the old value when it's changed for the first time
              T === Ao ? void 0 : $ && T[0] === Ao ? [] : T,
              g
            ];
            T = U, d ? d(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            gn = N;
          }
        }
      } else
        v.run();
  };
  return u && u(I), v = new sr(p), v.scheduler = c ? () => c(I, !1) : I, g = (P) => Lu(P, !1, v), w = v.onStop = () => {
    const P = Zo.get(v);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const U of P) U();
      Zo.delete(v);
    }
  }, t ? a ? I(!0) : T = v.run() : c ? c(I.bind(null, !0), !0) : v.run(), x.pause = v.pause.bind(v), x.resume = v.resume.bind(v), x.stop = x, x;
}
function Ks(e, t = 1 / 0, n) {
  if (t <= 0 || !xt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, os(e))
    Ks(e.value, t, n);
  else if (tt(e))
    for (let a = 0; a < e.length; a++)
      Ks(e[a], t, n);
  else if (Gn(e) || Ln(e))
    e.forEach((a) => {
      Ks(a, t, n);
    });
  else if (Yi(e)) {
    for (const a in e)
      Ks(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ks(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function To(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ga(l, t, n);
  }
}
function Ms(e, t, n, a) {
  if (at(e)) {
    const l = To(e, t, n, a);
    return l && Ji(l) && l.catch((r) => {
      ga(r, t, n);
    }), l;
  }
  if (tt(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(Ms(e[r], t, n, a));
    return l;
  }
}
function ga(e, t, n, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Tt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let p = 0; p < v.length; p++)
          if (v[p](e, d, f) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Ys(), To(r, null, 10, [
        e,
        d,
        f
      ]), Xs();
      return;
    }
  }
  Uu(e, n, l, a, c);
}
function Uu(e, t, n, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const rs = [];
let Us = -1;
const Nn = [];
let an = null, Tn = 0;
const hr = /* @__PURE__ */ Promise.resolve();
let ea = null;
function Kt(e) {
  const t = ea || hr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ou(e) {
  let t = Us + 1, n = rs.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = rs[a], r = bo(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Sl(e) {
  if (!(e.flags & 1)) {
    const t = bo(e), n = rs[rs.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= bo(n) ? rs.push(e) : rs.splice(Ou(t), 0, e), e.flags |= 1, yr();
  }
}
function yr() {
  ea || (ea = hr.then(_r));
}
function Au(e) {
  tt(e) ? Nn.push(...e) : an && e.id === -1 ? an.splice(Tn + 1, 0, e) : e.flags & 1 || (Nn.push(e), e.flags |= 1), yr();
}
function Kl(e, t, n = Us + 1) {
  for (; n < rs.length; n++) {
    const a = rs[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      rs.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function wr(e) {
  if (Nn.length) {
    const t = [...new Set(Nn)].sort(
      (n, a) => bo(n) - bo(a)
    );
    if (Nn.length = 0, an) {
      an.push(...t);
      return;
    }
    for (an = t, Tn = 0; Tn < an.length; Tn++) {
      const n = an[Tn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    an = null, Tn = 0;
  }
}
const bo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _r(e) {
  try {
    for (Us = 0; Us < rs.length; Us++) {
      const t = rs[Us];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), To(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Us < rs.length; Us++) {
      const t = rs[Us];
      t && (t.flags &= -2);
    }
    Us = -1, rs.length = 0, wr(), ea = null, (rs.length || Nn.length) && _r();
  }
}
let Jt = null, kr = null;
function ta(e) {
  const t = Jt;
  return Jt = e, kr = e && e.type.__scopeId || null, t;
}
function h(e, t = Jt, n) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && oa(-1);
    const r = ta(t);
    let c;
    try {
      c = e(...l);
    } finally {
      ta(r), a._d && oa(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Bt(e, t) {
  if (Jt === null)
    return e;
  const n = ka(Jt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = Tt] = t[l];
    r && (at(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ks(c), a.push({
      dir: r,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function mn(e, t, n, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Ys(), Ms(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Xs());
  }
}
const br = Symbol("_vte"), $r = (e) => e.__isTeleport, fo = (e) => e && (e.disabled || e.disabled === ""), Jl = (e) => e && (e.defer || e.defer === ""), Ql = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Yl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, tl = (e, t) => {
  const n = e && e.to;
  return Ut(n) ? t ? t(n) : null : n;
}, Cr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, a, l, r, c, u, d, f) {
    const {
      mc: v,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: k, createText: $, createComment: S }
    } = f, x = fo(t.props);
    let { shapeFlag: T, children: I, dynamicChildren: P } = t;
    if (e == null) {
      const U = t.el = $(""), N = t.anchor = $("");
      g(U, n, a), g(N, n, a);
      const B = (O, K) => {
        T & 16 && v(
          I,
          O,
          K,
          l,
          r,
          c,
          u,
          d
        );
      }, R = () => {
        const O = t.target = tl(t.props, k), K = xr(O, t, $, g);
        O && (c !== "svg" && Ql(O) ? c = "svg" : c !== "mathml" && Yl(O) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), x || (B(O, K), Go(t, !1)));
      };
      x && (B(n, N), Go(t, !0)), Jl(t.props) ? (t.el.__isMounted = !1, ls(() => {
        R(), delete t.el.__isMounted;
      }, r)) : R();
    } else {
      if (Jl(t.props) && e.el.__isMounted === !1) {
        ls(() => {
          Cr.process(
            e,
            t,
            n,
            a,
            l,
            r,
            c,
            u,
            d,
            f
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const U = t.anchor = e.anchor, N = t.target = e.target, B = t.targetAnchor = e.targetAnchor, R = fo(e.props), O = R ? n : N, K = R ? U : B;
      if (c === "svg" || Ql(N) ? c = "svg" : (c === "mathml" || Yl(N)) && (c = "mathml"), P ? (w(
        e.dynamicChildren,
        P,
        O,
        l,
        r,
        c,
        u
      ), Pl(e, t, !0)) : d || p(
        e,
        t,
        O,
        K,
        l,
        r,
        c,
        u,
        !1
      ), x)
        R ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : zo(
          t,
          n,
          U,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ae = t.target = tl(
          t.props,
          k
        );
        ae && zo(
          t,
          ae,
          null,
          f,
          0
        );
      } else R && zo(
        t,
        N,
        B,
        f,
        1
      );
      Go(t, x);
    }
  },
  remove(e, t, n, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: f,
      targetAnchor: v,
      target: p,
      props: w
    } = e;
    if (p && (l(f), l(v)), r && l(d), c & 16) {
      const g = r || !fo(w);
      for (let k = 0; k < u.length; k++) {
        const $ = u[k];
        a(
          $,
          t,
          n,
          g,
          !!$.dynamicChildren
        );
      }
    }
  },
  move: zo,
  hydrate: zu
};
function zo(e, t, n, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, n);
  const { el: c, anchor: u, shapeFlag: d, children: f, props: v } = e, p = r === 2;
  if (p && a(c, t, n), (!p || fo(v)) && d & 16)
    for (let w = 0; w < f.length; w++)
      l(
        f[w],
        t,
        n,
        2
      );
  p && a(u, t, n);
}
function zu(e, t, n, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: f, createText: v }
}, p) {
  function w($, S, x, T) {
    S.anchor = p(
      c($),
      S,
      u($),
      n,
      a,
      l,
      r
    ), S.targetStart = x, S.targetAnchor = T;
  }
  const g = t.target = tl(
    t.props,
    d
  ), k = fo(t.props);
  if (g) {
    const $ = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (k)
        w(
          e,
          t,
          $,
          $ && c($)
        );
      else {
        t.anchor = c(e);
        let S = $;
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
        t.targetAnchor || xr(g, t, v, f), p(
          $ && c($),
          t,
          g,
          n,
          a,
          l,
          r
        );
      }
    Go(t, k);
  } else k && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const cs = Cr;
function Go(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function xr(e, t, n, a) {
  const l = t.targetStart = n(""), r = t.targetAnchor = n("");
  return l[br] = r, e && (a(l, e), a(r, e)), r;
}
const Hs = Symbol("_leaveCb"), Fo = Symbol("_enterCb");
function Sr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return mt(() => {
    e.isMounted = !0;
  }), Mo(() => {
    e.isUnmounting = !0;
  }), e;
}
const ws = [Function, Array], Ir = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ws,
  onEnter: ws,
  onAfterEnter: ws,
  onEnterCancelled: ws,
  // leave
  onBeforeLeave: ws,
  onLeave: ws,
  onAfterLeave: ws,
  onLeaveCancelled: ws,
  // appear
  onBeforeAppear: ws,
  onAppear: ws,
  onAfterAppear: ws,
  onAppearCancelled: ws
}, Er = (e) => {
  const t = e.subTree;
  return t.component ? Er(t.component) : t;
}, Fu = {
  name: "BaseTransition",
  props: Ir,
  setup(e, { slots: t }) {
    const n = Dl(), a = Sr();
    return () => {
      const l = t.default && Il(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = Tr(l), c = gt(e), { mode: u } = c;
      if (a.isLeaving)
        return Va(r);
      const d = Xl(r);
      if (!d)
        return Va(r);
      let f = $o(
        d,
        c,
        a,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      d.type !== ss && bn(d, f);
      let v = n.subTree && Xl(n.subTree);
      if (v && v.type !== ss && !hn(v, d) && Er(n).type !== ss) {
        let p = $o(
          v,
          c,
          a,
          n
        );
        if (bn(v, p), u === "out-in" && d.type !== ss)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, v = void 0;
          }, Va(r);
        u === "in-out" && d.type !== ss ? p.delayLeave = (w, g, k) => {
          const $ = Mr(
            a,
            v
          );
          $[String(v.key)] = v, w[Hs] = () => {
            g(), w[Hs] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            k(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function Tr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ss) {
        t = n;
        break;
      }
  }
  return t;
}
const Bu = Fu;
function Mr(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function $o(e, t, n, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: f,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: k,
    onLeaveCancelled: $,
    onBeforeAppear: S,
    onAppear: x,
    onAfterAppear: T,
    onAppearCancelled: I
  } = t, P = String(e.key), U = Mr(n, e), N = (O, K) => {
    O && Ms(
      O,
      a,
      9,
      K
    );
  }, B = (O, K) => {
    const ae = K[1];
    N(O, K), tt(O) ? O.every((j) => j.length <= 1) && ae() : O.length <= 1 && ae();
  }, R = {
    mode: c,
    persisted: u,
    beforeEnter(O) {
      let K = d;
      if (!n.isMounted)
        if (r)
          K = S || d;
        else
          return;
      O[Hs] && O[Hs](
        !0
        /* cancelled */
      );
      const ae = U[P];
      ae && hn(e, ae) && ae.el[Hs] && ae.el[Hs](), N(K, [O]);
    },
    enter(O) {
      let K = f, ae = v, j = p;
      if (!n.isMounted)
        if (r)
          K = x || f, ae = T || v, j = I || p;
        else
          return;
      let de = !1;
      const le = O[Fo] = (H) => {
        de || (de = !0, H ? N(j, [O]) : N(ae, [O]), R.delayedLeave && R.delayedLeave(), O[Fo] = void 0);
      };
      K ? B(K, [O, le]) : le();
    },
    leave(O, K) {
      const ae = String(e.key);
      if (O[Fo] && O[Fo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      N(w, [O]);
      let j = !1;
      const de = O[Hs] = (le) => {
        j || (j = !0, K(), le ? N($, [O]) : N(k, [O]), O[Hs] = void 0, U[ae] === e && delete U[ae]);
      };
      U[ae] = e, g ? B(g, [O, de]) : de();
    },
    clone(O) {
      const K = $o(
        O,
        t,
        n,
        a,
        l
      );
      return l && l(K), K;
    }
  };
  return R;
}
function Va(e) {
  if (ha(e))
    return e = cn(e), e.children = null, e;
}
function Xl(e) {
  if (!ha(e))
    return $r(e.type) && e.children ? Tr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && at(n.default))
      return n.default();
  }
}
function bn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Il(e, t = !1, n) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : r);
    c.type === W ? (c.patchFlag & 128 && l++, a = a.concat(
      Il(c.children, t, u)
    )) : (t || c.type !== ss) && a.push(u != null ? cn(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  return at(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Vt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Pr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const sa = /* @__PURE__ */ new WeakMap();
function vo(e, t, n, a, l = !1) {
  if (tt(e)) {
    e.forEach(
      (k, $) => vo(
        k,
        t && (tt(t) ? t[$] : t),
        n,
        a,
        l
      )
    );
    return;
  }
  if (Un(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && vo(e, t, n, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ka(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, f = t && t.r, v = u.refs === Tt ? u.refs = {} : u.refs, p = u.setupState, w = gt(p), g = p === Tt ? Ki : (k) => _t(w, k);
  if (f != null && f !== d) {
    if (Zl(t), Ut(f))
      v[f] = null, g(f) && (p[f] = null);
    else if (os(f)) {
      f.value = null;
      const k = t;
      k.k && (v[k.k] = null);
    }
  }
  if (at(d))
    To(d, u, 12, [c, v]);
  else {
    const k = Ut(d), $ = os(d);
    if (k || $) {
      const S = () => {
        if (e.f) {
          const x = k ? g(d) ? p[d] : v[d] : d.value;
          if (l)
            tt(x) && gl(x, r);
          else if (tt(x))
            x.includes(r) || x.push(r);
          else if (k)
            v[d] = [r], g(d) && (p[d] = v[d]);
          else {
            const T = [r];
            d.value = T, e.k && (v[e.k] = T);
          }
        } else k ? (v[d] = c, g(d) && (p[d] = c)) : $ && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const x = () => {
          S(), sa.delete(e);
        };
        x.id = -1, sa.set(e, x), ls(x, n);
      } else
        Zl(e), S();
    }
  }
}
function Zl(e) {
  const t = sa.get(e);
  t && (t.flags |= 8, sa.delete(e));
}
va().requestIdleCallback;
va().cancelIdleCallback;
const Un = (e) => !!e.type.__asyncLoader, ha = (e) => e.type.__isKeepAlive;
function Vu(e, t) {
  Rr(e, "a", t);
}
function Wu(e, t) {
  Rr(e, "da", t);
}
function Rr(e, t, n = ns) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ya(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; )
      ha(l.parent.vnode) && Gu(a, t, n, l), l = l.parent;
  }
}
function Gu(e, t, n, a) {
  const l = ya(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  jn(() => {
    gl(a[t], l);
  }, n);
}
function ya(e, t, n = ns, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ys();
      const u = Po(n), d = Ms(t, n, e, c);
      return u(), Xs(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const en = (e) => (t, n = ns) => {
  (!So || e === "sp") && ya(e, (...a) => t(...a), n);
}, ju = en("bm"), mt = en("m"), Hu = en(
  "bu"
), Dr = en("u"), Mo = en(
  "bum"
), jn = en("um"), qu = en(
  "sp"
), Ku = en("rtg"), Ju = en("rtc");
function Qu(e, t = ns) {
  ya("ec", e, t);
}
const Yu = "components", Lr = Symbol.for("v-ndc");
function El(e) {
  return Ut(e) ? Xu(Yu, e, !1) || e : e || Lr;
}
function Xu(e, t, n = !0, a = !1) {
  const l = Jt || ns;
  if (l) {
    const r = l.type;
    {
      const u = Fd(
        r,
        !1
      );
      if (u && (u === t || u === $s(t) || u === ma($s(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      ei(l[e] || r[e], t) || // global registration
      ei(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function ei(e, t) {
  return e && (e[t] || e[$s(t)] || e[ma($s(t))]);
}
function ye(e, t, n, a) {
  let l;
  const r = n, c = tt(e);
  if (c || Ut(e)) {
    const u = c && wn(e);
    let d = !1, f = !1;
    u && (d = !ks(e), f = Zs(e), e = pa(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = t(
        d ? f ? Bn(Ts(e[v])) : Ts(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (xt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, f = u.length; d < f; d++) {
        const v = u[d];
        l[d] = t(e[v], v, d, r);
      }
    }
  else
    l = [];
  return l;
}
function vs(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (tt(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function rt(e, t, n = {}, a, l) {
  if (Jt.ce || Jt.parent && Un(Jt.parent) && Jt.parent.ce) {
    const f = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), o(), D(
      W,
      null,
      [b("slot", n, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), o();
  const c = r && Nr(r(n)), u = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = D(
    W,
    {
      key: (u && !Es(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Nr(e) {
  return e.some((t) => xo(t) ? !(t.type === ss || t.type === W && !Nr(t.children)) : !0) ? e : null;
}
const sl = (e) => e ? ec(e) ? ka(e) : sl(e.parent) : null, po = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Vt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => sl(e.parent),
    $root: (e) => sl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Or(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Sl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Kt.bind(e.proxy)),
    $watch: (e) => ud.bind(e)
  })
), Wa = (e, t) => e !== Tt && !e.__isScriptSetup && _t(e, t), Zu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return a[t];
          case 2:
            return l[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Wa(a, t))
          return c[t] = 1, a[t];
        if (l !== Tt && _t(l, t))
          return c[t] = 2, l[t];
        if (_t(r, t))
          return c[t] = 3, r[t];
        if (n !== Tt && _t(n, t))
          return c[t] = 4, n[t];
        nl && (c[t] = 0);
      }
    }
    const f = po[t];
    let v, p;
    if (f)
      return t === "$attrs" && es(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[t])
    )
      return v;
    if (n !== Tt && _t(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      p = d.config.globalProperties, _t(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: a, setupState: l, ctx: r } = e;
    return Wa(l, t) ? (l[t] = n, !0) : a !== Tt && _t(a, t) ? (a[t] = n, !0) : _t(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Tt && u[0] !== "$" && _t(e, u) || Wa(t, u) || _t(r, u) || _t(a, u) || _t(po, u) || _t(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _t(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ti(e) {
  return tt(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let nl = !0;
function ed(e) {
  const t = Or(e), n = e.proxy, a = e.ctx;
  nl = !1, t.beforeCreate && si(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: f,
    // lifecycle
    created: v,
    beforeMount: p,
    mounted: w,
    beforeUpdate: g,
    updated: k,
    activated: $,
    deactivated: S,
    beforeDestroy: x,
    beforeUnmount: T,
    destroyed: I,
    unmounted: P,
    render: U,
    renderTracked: N,
    renderTriggered: B,
    errorCaptured: R,
    serverPrefetch: O,
    // public API
    expose: K,
    inheritAttrs: ae,
    // assets
    components: j,
    directives: de,
    filters: le
  } = t;
  if (f && td(f, a, null), c)
    for (const Y in c) {
      const J = c[Y];
      at(J) && (a[Y] = J.bind(n));
    }
  if (l) {
    const Y = l.call(n, n);
    xt(Y) && (e.data = Cn(Y));
  }
  if (nl = !0, r)
    for (const Y in r) {
      const J = r[Y], ne = at(J) ? J.bind(n, n) : at(J.get) ? J.get.bind(n, n) : Bs, me = !at(J) && at(J.set) ? J.set.bind(n) : Bs, Z = M({
        get: ne,
        set: me
      });
      Object.defineProperty(a, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => Z.value,
        set: (re) => Z.value = re
      });
    }
  if (u)
    for (const Y in u)
      Ur(u[Y], a, n, Y);
  if (d) {
    const Y = at(d) ? d.call(n) : d;
    Reflect.ownKeys(Y).forEach((J) => {
      id(J, Y[J]);
    });
  }
  v && si(v, e, "c");
  function F(Y, J) {
    tt(J) ? J.forEach((ne) => Y(ne.bind(n))) : J && Y(J.bind(n));
  }
  if (F(ju, p), F(mt, w), F(Hu, g), F(Dr, k), F(Vu, $), F(Wu, S), F(Qu, R), F(Ju, N), F(Ku, B), F(Mo, T), F(jn, P), F(qu, O), tt(K))
    if (K.length) {
      const Y = e.exposed || (e.exposed = {});
      K.forEach((J) => {
        Object.defineProperty(Y, J, {
          get: () => n[J],
          set: (ne) => n[J] = ne,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === Bs && (e.render = U), ae != null && (e.inheritAttrs = ae), j && (e.components = j), de && (e.directives = de), O && Pr(e);
}
function td(e, t, n = Bs) {
  tt(e) && (e = ol(e));
  for (const a in e) {
    const l = e[a];
    let r;
    xt(l) ? "default" in l ? r = jo(
      l.from || a,
      l.default,
      !0
    ) : r = jo(l.from || a) : r = jo(l), os(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function si(e, t, n) {
  Ms(
    tt(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ur(e, t, n, a) {
  let l = a.includes(".") ? Fr(n, a) : () => n[a];
  if (Ut(e)) {
    const r = t[e];
    at(r) && $t(l, r);
  } else if (at(e))
    $t(l, e.bind(n));
  else if (xt(e))
    if (tt(e))
      e.forEach((r) => Ur(r, t, n, a));
    else {
      const r = at(e.handler) ? e.handler.bind(n) : t[e.handler];
      at(r) && $t(l, r, e);
    }
}
function Or(e) {
  const t = e.type, { mixins: n, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !n && !a ? d = t : (d = {}, l.length && l.forEach(
    (f) => na(d, f, c, !0)
  ), na(d, t, c)), xt(t) && r.set(t, d), d;
}
function na(e, t, n, a = !1) {
  const { mixins: l, extends: r } = t;
  r && na(e, r, n, !0), l && l.forEach(
    (c) => na(e, c, n, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
      const u = sd[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const sd = {
  data: ni,
  props: oi,
  emits: oi,
  // objects
  methods: lo,
  computed: lo,
  // lifecycle
  beforeCreate: as,
  created: as,
  beforeMount: as,
  mounted: as,
  beforeUpdate: as,
  updated: as,
  beforeDestroy: as,
  beforeUnmount: as,
  destroyed: as,
  unmounted: as,
  activated: as,
  deactivated: as,
  errorCaptured: as,
  serverPrefetch: as,
  // assets
  components: lo,
  directives: lo,
  // watch
  watch: od,
  // provide / inject
  provide: ni,
  inject: nd
};
function ni(e, t) {
  return t ? e ? function() {
    return Vt(
      at(e) ? e.call(this, this) : e,
      at(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nd(e, t) {
  return lo(ol(e), ol(t));
}
function ol(e) {
  if (tt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function as(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function lo(e, t) {
  return e ? Vt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function oi(e, t) {
  return e ? tt(e) && tt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Vt(
    /* @__PURE__ */ Object.create(null),
    ti(e),
    ti(t ?? {})
  ) : t;
}
function od(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Vt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = as(e[a], t[a]);
  return n;
}
function Ar() {
  return {
    app: null,
    config: {
      isNativeTag: Ki,
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
let ad = 0;
function ld(e, t) {
  return function(a, l = null) {
    at(a) || (a = Vt({}, a)), l != null && !xt(l) && (l = null);
    const r = Ar(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const f = r.app = {
      _uid: ad++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Vd,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...p) {
        return c.has(v) || (v && at(v.install) ? (c.add(v), v.install(f, ...p)) : at(v) && (c.add(v), v(f, ...p))), f;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), f;
      },
      component(v, p) {
        return p ? (r.components[v] = p, f) : r.components[v];
      },
      directive(v, p) {
        return p ? (r.directives[v] = p, f) : r.directives[v];
      },
      mount(v, p, w) {
        if (!d) {
          const g = f._ceVNode || b(a, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, v, w), d = !0, f._container = v, v.__vue_app__ = f, ka(g.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (Ms(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, p) {
        return r.provides[v] = p, f;
      },
      runWithContext(v) {
        const p = On;
        On = f;
        try {
          return v();
        } finally {
          On = p;
        }
      }
    };
    return f;
  };
}
let On = null;
function id(e, t) {
  if (ns) {
    let n = ns.provides;
    const a = ns.parent && ns.parent.provides;
    a === n && (n = ns.provides = Object.create(a)), n[e] = t;
  }
}
function jo(e, t, n = !1) {
  const a = Dl();
  if (a || On) {
    let l = On ? On._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && at(t) ? t.call(a && a.proxy) : t;
  }
}
const rd = Symbol.for("v-scx"), cd = () => jo(rd);
function $t(e, t, n) {
  return zr(e, t, n);
}
function zr(e, t, n = Tt) {
  const { immediate: a, deep: l, flush: r, once: c } = n, u = Vt({}, n), d = t && a || !t && r !== "post";
  let f;
  if (So) {
    if (r === "sync") {
      const g = cd();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = Bs, g.resume = Bs, g.pause = Bs, g;
    }
  }
  const v = ns;
  u.call = (g, k, $) => Ms(g, v, k, $);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    ls(g, v && v.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, k) => {
    k ? g() : Sl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const w = Nu(e, t, u);
  return So && (f ? f.push(w) : d && w()), w;
}
function ud(e, t, n) {
  const a = this.proxy, l = Ut(e) ? e.includes(".") ? Fr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  at(t) ? r = t : (r = t.handler, n = t);
  const c = Po(this), u = zr(l, r.bind(a), n);
  return c(), u;
}
function Fr(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++)
      a = a[n[l]];
    return a;
  };
}
const dd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$s(t)}Modifiers`] || e[`${dn(t)}Modifiers`];
function md(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || Tt;
  let l = n;
  const r = t.startsWith("update:"), c = r && dd(a, t.slice(7));
  c && (c.trim && (l = n.map((v) => Ut(v) ? v.trim() : v)), c.number && (l = n.map(fa)));
  let u, d = a[u = Oa(t)] || // also try camelCase event handler (#2249)
  a[u = Oa($s(t))];
  !d && r && (d = a[u = Oa(dn(t))]), d && Ms(
    d,
    e,
    6,
    l
  );
  const f = a[u + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Ms(
      f,
      e,
      6,
      l
    );
  }
}
const fd = /* @__PURE__ */ new WeakMap();
function Br(e, t, n = !1) {
  const a = n ? fd : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!at(e)) {
    const d = (f) => {
      const v = Br(f, t, !0);
      v && (u = !0, Vt(c, v));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (xt(e) && a.set(e, null), null) : (tt(r) ? r.forEach((d) => c[d] = null) : Vt(c, r), xt(e) && a.set(e, c), c);
}
function wa(e, t) {
  return !e || !ua(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _t(e, t[0].toLowerCase() + t.slice(1)) || _t(e, dn(t)) || _t(e, t));
}
function ai(e) {
  const {
    type: t,
    vnode: n,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: f,
    renderCache: v,
    props: p,
    data: w,
    setupState: g,
    ctx: k,
    inheritAttrs: $
  } = e, S = ta(e);
  let x, T;
  try {
    if (n.shapeFlag & 4) {
      const P = l || a, U = P;
      x = zs(
        f.call(
          U,
          P,
          v,
          p,
          g,
          w,
          k
        )
      ), T = u;
    } else {
      const P = t;
      x = zs(
        P.length > 1 ? P(
          p,
          { attrs: u, slots: c, emit: d }
        ) : P(
          p,
          null
        )
      ), T = t.props ? u : vd(u);
    }
  } catch (P) {
    go.length = 0, ga(P, e, 1), x = b(ss);
  }
  let I = x;
  if (T && $ !== !1) {
    const P = Object.keys(T), { shapeFlag: U } = I;
    P.length && U & 7 && (r && P.some(pl) && (T = pd(
      T,
      r
    )), I = cn(I, T, !1, !0));
  }
  return n.dirs && (I = cn(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && bn(I, n.transition), x = I, ta(S), x;
}
const vd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ua(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pd = (e, t) => {
  const n = {};
  for (const a in e)
    (!pl(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function gd(e, t, n) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? li(a, c, f) : !!c;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const w = v[p];
        if (c[w] !== a[w] && !wa(f, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? li(a, c, f) : !0 : !!c;
  return !1;
}
function li(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !wa(n, r))
      return !0;
  }
  return !1;
}
function hd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Vr = {}, Wr = () => Object.create(Vr), Gr = (e) => Object.getPrototypeOf(e) === Vr;
function yd(e, t, n, a = !1) {
  const l = {}, r = Wr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  n ? e.props = a ? l : Iu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function wd(e, t, n, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = gt(l), [d] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        let w = v[p];
        if (wa(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (_t(r, w))
            g !== r[w] && (r[w] = g, f = !0);
          else {
            const k = $s(w);
            l[k] = al(
              d,
              u,
              k,
              g,
              e,
              !1
            );
          }
        else
          g !== r[w] && (r[w] = g, f = !0);
      }
    }
  } else {
    jr(e, t, l, r) && (f = !0);
    let v;
    for (const p in u)
      (!t || // for camelCase
      !_t(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = dn(p)) === p || !_t(t, v))) && (d ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[v] !== void 0) && (l[p] = al(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!t || !_t(t, p)) && (delete r[p], f = !0);
  }
  f && qs(e.attrs, "set", "");
}
function jr(e, t, n, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (co(d))
        continue;
      const f = t[d];
      let v;
      l && _t(l, v = $s(d)) ? !r || !r.includes(v) ? n[v] = f : (u || (u = {}))[v] = f : wa(e.emitsOptions, d) || (!(d in a) || f !== a[d]) && (a[d] = f, c = !0);
    }
  if (r) {
    const d = gt(n), f = u || Tt;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      n[p] = al(
        l,
        d,
        p,
        f[p],
        e,
        !_t(f, p)
      );
    }
  }
  return c;
}
function al(e, t, n, a, l, r) {
  const c = e[n];
  if (c != null) {
    const u = _t(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && at(d)) {
        const { propsDefaults: f } = l;
        if (n in f)
          a = f[n];
        else {
          const v = Po(l);
          a = f[n] = d.call(
            null,
            t
          ), v();
        }
      } else
        a = d;
      l.ce && l.ce._setProp(n, a);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? a = !1 : c[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === dn(n)) && (a = !0));
  }
  return a;
}
const _d = /* @__PURE__ */ new WeakMap();
function Hr(e, t, n = !1) {
  const a = n ? _d : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!at(e)) {
    const v = (p) => {
      d = !0;
      const [w, g] = Hr(p, t, !0);
      Vt(c, w), g && u.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return xt(e) && a.set(e, Dn), Dn;
  if (tt(r))
    for (let v = 0; v < r.length; v++) {
      const p = $s(r[v]);
      ii(p) && (c[p] = Tt);
    }
  else if (r)
    for (const v in r) {
      const p = $s(v);
      if (ii(p)) {
        const w = r[v], g = c[p] = tt(w) || at(w) ? { type: w } : Vt({}, w), k = g.type;
        let $ = !1, S = !0;
        if (tt(k))
          for (let x = 0; x < k.length; ++x) {
            const T = k[x], I = at(T) && T.name;
            if (I === "Boolean") {
              $ = !0;
              break;
            } else I === "String" && (S = !1);
          }
        else
          $ = at(k) && k.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = $, g[
          1
          /* shouldCastTrue */
        ] = S, ($ || _t(g, "default")) && u.push(p);
      }
    }
  const f = [c, u];
  return xt(e) && a.set(e, f), f;
}
function ii(e) {
  return e[0] !== "$" && !co(e);
}
const Tl = (e) => e === "_" || e === "_ctx" || e === "$stable", Ml = (e) => tt(e) ? e.map(zs) : [zs(e)], kd = (e, t, n) => {
  if (t._n)
    return t;
  const a = h((...l) => Ml(t(...l)), n);
  return a._c = !1, a;
}, qr = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Tl(l)) continue;
    const r = e[l];
    if (at(r))
      t[l] = kd(l, r, a);
    else if (r != null) {
      const c = Ml(r);
      t[l] = () => c;
    }
  }
}, Kr = (e, t) => {
  const n = Ml(t);
  e.slots.default = () => n;
}, Jr = (e, t, n) => {
  for (const a in t)
    (n || !Tl(a)) && (e[a] = t[a]);
}, bd = (e, t, n) => {
  const a = e.slots = Wr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Jr(a, t, n), n && Xi(a, "_", l, !0)) : qr(t, a);
  } else t && Kr(e, t);
}, $d = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = Tt;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? r = !1 : Jr(l, t, n) : (r = !t.$stable, qr(t, l)), c = t;
  } else t && (Kr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !Tl(u) && c[u] == null && delete l[u];
}, ls = Ed;
function Cd(e) {
  return xd(e);
}
function xd(e, t) {
  const n = va();
  n.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: f,
    setElementText: v,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = Bs,
    insertStaticContent: k
  } = e, $ = (E, z, ue, Ee = null, Ce = null, Ie = null, Oe = void 0, te = null, V = !!z.dynamicChildren) => {
    if (E === z)
      return;
    E && !hn(E, z) && (Ee = Le(E), re(E, Ce, Ie, !0), E = null), z.patchFlag === -2 && (V = !1, z.dynamicChildren = null);
    const { type: fe, ref: We, shapeFlag: Be } = z;
    switch (fe) {
      case _a:
        S(E, z, ue, Ee);
        break;
      case ss:
        x(E, z, ue, Ee);
        break;
      case ja:
        E == null && T(z, ue, Ee, Oe);
        break;
      case W:
        j(
          E,
          z,
          ue,
          Ee,
          Ce,
          Ie,
          Oe,
          te,
          V
        );
        break;
      default:
        Be & 1 ? U(
          E,
          z,
          ue,
          Ee,
          Ce,
          Ie,
          Oe,
          te,
          V
        ) : Be & 6 ? de(
          E,
          z,
          ue,
          Ee,
          Ce,
          Ie,
          Oe,
          te,
          V
        ) : (Be & 64 || Be & 128) && fe.process(
          E,
          z,
          ue,
          Ee,
          Ce,
          Ie,
          Oe,
          te,
          V,
          ge
        );
    }
    We != null && Ce ? vo(We, E && E.ref, Ie, z || E, !z) : We == null && E && E.ref != null && vo(E.ref, null, Ie, E, !0);
  }, S = (E, z, ue, Ee) => {
    if (E == null)
      a(
        z.el = u(z.children),
        ue,
        Ee
      );
    else {
      const Ce = z.el = E.el;
      z.children !== E.children && f(Ce, z.children);
    }
  }, x = (E, z, ue, Ee) => {
    E == null ? a(
      z.el = d(z.children || ""),
      ue,
      Ee
    ) : z.el = E.el;
  }, T = (E, z, ue, Ee) => {
    [E.el, E.anchor] = k(
      E.children,
      z,
      ue,
      Ee,
      E.el,
      E.anchor
    );
  }, I = ({ el: E, anchor: z }, ue, Ee) => {
    let Ce;
    for (; E && E !== z; )
      Ce = w(E), a(E, ue, Ee), E = Ce;
    a(z, ue, Ee);
  }, P = ({ el: E, anchor: z }) => {
    let ue;
    for (; E && E !== z; )
      ue = w(E), l(E), E = ue;
    l(z);
  }, U = (E, z, ue, Ee, Ce, Ie, Oe, te, V) => {
    if (z.type === "svg" ? Oe = "svg" : z.type === "math" && (Oe = "mathml"), E == null)
      N(
        z,
        ue,
        Ee,
        Ce,
        Ie,
        Oe,
        te,
        V
      );
    else {
      const fe = E.el && E.el._isVueCE ? E.el : null;
      try {
        fe && fe._beginPatch(), O(
          E,
          z,
          Ce,
          Ie,
          Oe,
          te,
          V
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, N = (E, z, ue, Ee, Ce, Ie, Oe, te) => {
    let V, fe;
    const { props: We, shapeFlag: Be, transition: _e, dirs: oe } = E;
    if (V = E.el = c(
      E.type,
      Ie,
      We && We.is,
      We
    ), Be & 8 ? v(V, E.children) : Be & 16 && R(
      E.children,
      V,
      null,
      Ee,
      Ce,
      Ga(E, Ie),
      Oe,
      te
    ), oe && mn(E, null, Ee, "created"), B(V, E, E.scopeId, Oe, Ee), We) {
      for (const Ne in We)
        Ne !== "value" && !co(Ne) && r(V, Ne, null, We[Ne], Ie, Ee);
      "value" in We && r(V, "value", null, We.value, Ie), (fe = We.onVnodeBeforeMount) && Ds(fe, Ee, E);
    }
    oe && mn(E, null, Ee, "beforeMount");
    const Je = Sd(Ce, _e);
    Je && _e.beforeEnter(V), a(V, z, ue), ((fe = We && We.onVnodeMounted) || Je || oe) && ls(() => {
      fe && Ds(fe, Ee, E), Je && _e.enter(V), oe && mn(E, null, Ee, "mounted");
    }, Ce);
  }, B = (E, z, ue, Ee, Ce) => {
    if (ue && g(E, ue), Ee)
      for (let Ie = 0; Ie < Ee.length; Ie++)
        g(E, Ee[Ie]);
    if (Ce) {
      let Ie = Ce.subTree;
      if (z === Ie || Yr(Ie.type) && (Ie.ssContent === z || Ie.ssFallback === z)) {
        const Oe = Ce.vnode;
        B(
          E,
          Oe,
          Oe.scopeId,
          Oe.slotScopeIds,
          Ce.parent
        );
      }
    }
  }, R = (E, z, ue, Ee, Ce, Ie, Oe, te, V = 0) => {
    for (let fe = V; fe < E.length; fe++) {
      const We = E[fe] = te ? ln(E[fe]) : zs(E[fe]);
      $(
        null,
        We,
        z,
        ue,
        Ee,
        Ce,
        Ie,
        Oe,
        te
      );
    }
  }, O = (E, z, ue, Ee, Ce, Ie, Oe) => {
    const te = z.el = E.el;
    let { patchFlag: V, dynamicChildren: fe, dirs: We } = z;
    V |= E.patchFlag & 16;
    const Be = E.props || Tt, _e = z.props || Tt;
    let oe;
    if (ue && fn(ue, !1), (oe = _e.onVnodeBeforeUpdate) && Ds(oe, ue, z, E), We && mn(z, E, ue, "beforeUpdate"), ue && fn(ue, !0), (Be.innerHTML && _e.innerHTML == null || Be.textContent && _e.textContent == null) && v(te, ""), fe ? K(
      E.dynamicChildren,
      fe,
      te,
      ue,
      Ee,
      Ga(z, Ce),
      Ie
    ) : Oe || J(
      E,
      z,
      te,
      null,
      ue,
      Ee,
      Ga(z, Ce),
      Ie,
      !1
    ), V > 0) {
      if (V & 16)
        ae(te, Be, _e, ue, Ce);
      else if (V & 2 && Be.class !== _e.class && r(te, "class", null, _e.class, Ce), V & 4 && r(te, "style", Be.style, _e.style, Ce), V & 8) {
        const Je = z.dynamicProps;
        for (let Ne = 0; Ne < Je.length; Ne++) {
          const Xe = Je[Ne], De = Be[Xe], Ae = _e[Xe];
          (Ae !== De || Xe === "value") && r(te, Xe, De, Ae, Ce, ue);
        }
      }
      V & 1 && E.children !== z.children && v(te, z.children);
    } else !Oe && fe == null && ae(te, Be, _e, ue, Ce);
    ((oe = _e.onVnodeUpdated) || We) && ls(() => {
      oe && Ds(oe, ue, z, E), We && mn(z, E, ue, "updated");
    }, Ee);
  }, K = (E, z, ue, Ee, Ce, Ie, Oe) => {
    for (let te = 0; te < z.length; te++) {
      const V = E[te], fe = z[te], We = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        V.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (V.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hn(V, fe) || // - In the case of a component, it could contain anything.
        V.shapeFlag & 198) ? p(V.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ue
        )
      );
      $(
        V,
        fe,
        We,
        null,
        Ee,
        Ce,
        Ie,
        Oe,
        !0
      );
    }
  }, ae = (E, z, ue, Ee, Ce) => {
    if (z !== ue) {
      if (z !== Tt)
        for (const Ie in z)
          !co(Ie) && !(Ie in ue) && r(
            E,
            Ie,
            z[Ie],
            null,
            Ce,
            Ee
          );
      for (const Ie in ue) {
        if (co(Ie)) continue;
        const Oe = ue[Ie], te = z[Ie];
        Oe !== te && Ie !== "value" && r(E, Ie, te, Oe, Ce, Ee);
      }
      "value" in ue && r(E, "value", z.value, ue.value, Ce);
    }
  }, j = (E, z, ue, Ee, Ce, Ie, Oe, te, V) => {
    const fe = z.el = E ? E.el : u(""), We = z.anchor = E ? E.anchor : u("");
    let { patchFlag: Be, dynamicChildren: _e, slotScopeIds: oe } = z;
    oe && (te = te ? te.concat(oe) : oe), E == null ? (a(fe, ue, Ee), a(We, ue, Ee), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      z.children || [],
      ue,
      We,
      Ce,
      Ie,
      Oe,
      te,
      V
    )) : Be > 0 && Be & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (K(
      E.dynamicChildren,
      _e,
      ue,
      Ce,
      Ie,
      Oe,
      te
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (z.key != null || Ce && z === Ce.subTree) && Pl(
      E,
      z,
      !0
      /* shallow */
    )) : J(
      E,
      z,
      ue,
      We,
      Ce,
      Ie,
      Oe,
      te,
      V
    );
  }, de = (E, z, ue, Ee, Ce, Ie, Oe, te, V) => {
    z.slotScopeIds = te, E == null ? z.shapeFlag & 512 ? Ce.ctx.activate(
      z,
      ue,
      Ee,
      Oe,
      V
    ) : le(
      z,
      ue,
      Ee,
      Ce,
      Ie,
      Oe,
      V
    ) : H(E, z, V);
  }, le = (E, z, ue, Ee, Ce, Ie, Oe) => {
    const te = E.component = Nd(
      E,
      Ee,
      Ce
    );
    if (ha(E) && (te.ctx.renderer = ge), Ud(te, !1, Oe), te.asyncDep) {
      if (Ce && Ce.registerDep(te, F, Oe), !E.el) {
        const V = te.subTree = b(ss);
        x(null, V, z, ue), E.placeholder = V.el;
      }
    } else
      F(
        te,
        E,
        z,
        ue,
        Ce,
        Ie,
        Oe
      );
  }, H = (E, z, ue) => {
    const Ee = z.component = E.component;
    if (gd(E, z, ue))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        Y(Ee, z, ue);
        return;
      } else
        Ee.next = z, Ee.update();
    else
      z.el = E.el, Ee.vnode = z;
  }, F = (E, z, ue, Ee, Ce, Ie, Oe) => {
    const te = () => {
      if (E.isMounted) {
        let { next: Be, bu: _e, u: oe, parent: Je, vnode: Ne } = E;
        {
          const kt = Qr(E);
          if (kt) {
            Be && (Be.el = Ne.el, Y(E, Be, Oe)), kt.asyncDep.then(() => {
              E.isUnmounted || te();
            });
            return;
          }
        }
        let Xe = Be, De;
        fn(E, !1), Be ? (Be.el = Ne.el, Y(E, Be, Oe)) : Be = Ne, _e && Wo(_e), (De = Be.props && Be.props.onVnodeBeforeUpdate) && Ds(De, Je, Be, Ne), fn(E, !0);
        const Ae = ai(E), qe = E.subTree;
        E.subTree = Ae, $(
          qe,
          Ae,
          // parent may have changed if it's in a teleport
          p(qe.el),
          // anchor may have changed if it's in a fragment
          Le(qe),
          E,
          Ce,
          Ie
        ), Be.el = Ae.el, Xe === null && hd(E, Ae.el), oe && ls(oe, Ce), (De = Be.props && Be.props.onVnodeUpdated) && ls(
          () => Ds(De, Je, Be, Ne),
          Ce
        );
      } else {
        let Be;
        const { el: _e, props: oe } = z, { bm: Je, m: Ne, parent: Xe, root: De, type: Ae } = E, qe = Un(z);
        fn(E, !1), Je && Wo(Je), !qe && (Be = oe && oe.onVnodeBeforeMount) && Ds(Be, Xe, z), fn(E, !0);
        {
          De.ce && // @ts-expect-error _def is private
          De.ce._def.shadowRoot !== !1 && De.ce._injectChildStyle(Ae);
          const kt = E.subTree = ai(E);
          $(
            null,
            kt,
            ue,
            Ee,
            E,
            Ce,
            Ie
          ), z.el = kt.el;
        }
        if (Ne && ls(Ne, Ce), !qe && (Be = oe && oe.onVnodeMounted)) {
          const kt = z;
          ls(
            () => Ds(Be, Xe, kt),
            Ce
          );
        }
        (z.shapeFlag & 256 || Xe && Un(Xe.vnode) && Xe.vnode.shapeFlag & 256) && E.a && ls(E.a, Ce), E.isMounted = !0, z = ue = Ee = null;
      }
    };
    E.scope.on();
    const V = E.effect = new sr(te);
    E.scope.off();
    const fe = E.update = V.run.bind(V), We = E.job = V.runIfDirty.bind(V);
    We.i = E, We.id = E.uid, V.scheduler = () => Sl(We), fn(E, !0), fe();
  }, Y = (E, z, ue) => {
    z.component = E;
    const Ee = E.vnode.props;
    E.vnode = z, E.next = null, wd(E, z.props, Ee, ue), $d(E, z.children, ue), Ys(), Kl(E), Xs();
  }, J = (E, z, ue, Ee, Ce, Ie, Oe, te, V = !1) => {
    const fe = E && E.children, We = E ? E.shapeFlag : 0, Be = z.children, { patchFlag: _e, shapeFlag: oe } = z;
    if (_e > 0) {
      if (_e & 128) {
        me(
          fe,
          Be,
          ue,
          Ee,
          Ce,
          Ie,
          Oe,
          te,
          V
        );
        return;
      } else if (_e & 256) {
        ne(
          fe,
          Be,
          ue,
          Ee,
          Ce,
          Ie,
          Oe,
          te,
          V
        );
        return;
      }
    }
    oe & 8 ? (We & 16 && Fe(fe, Ce, Ie), Be !== fe && v(ue, Be)) : We & 16 ? oe & 16 ? me(
      fe,
      Be,
      ue,
      Ee,
      Ce,
      Ie,
      Oe,
      te,
      V
    ) : Fe(fe, Ce, Ie, !0) : (We & 8 && v(ue, ""), oe & 16 && R(
      Be,
      ue,
      Ee,
      Ce,
      Ie,
      Oe,
      te,
      V
    ));
  }, ne = (E, z, ue, Ee, Ce, Ie, Oe, te, V) => {
    E = E || Dn, z = z || Dn;
    const fe = E.length, We = z.length, Be = Math.min(fe, We);
    let _e;
    for (_e = 0; _e < Be; _e++) {
      const oe = z[_e] = V ? ln(z[_e]) : zs(z[_e]);
      $(
        E[_e],
        oe,
        ue,
        null,
        Ce,
        Ie,
        Oe,
        te,
        V
      );
    }
    fe > We ? Fe(
      E,
      Ce,
      Ie,
      !0,
      !1,
      Be
    ) : R(
      z,
      ue,
      Ee,
      Ce,
      Ie,
      Oe,
      te,
      V,
      Be
    );
  }, me = (E, z, ue, Ee, Ce, Ie, Oe, te, V) => {
    let fe = 0;
    const We = z.length;
    let Be = E.length - 1, _e = We - 1;
    for (; fe <= Be && fe <= _e; ) {
      const oe = E[fe], Je = z[fe] = V ? ln(z[fe]) : zs(z[fe]);
      if (hn(oe, Je))
        $(
          oe,
          Je,
          ue,
          null,
          Ce,
          Ie,
          Oe,
          te,
          V
        );
      else
        break;
      fe++;
    }
    for (; fe <= Be && fe <= _e; ) {
      const oe = E[Be], Je = z[_e] = V ? ln(z[_e]) : zs(z[_e]);
      if (hn(oe, Je))
        $(
          oe,
          Je,
          ue,
          null,
          Ce,
          Ie,
          Oe,
          te,
          V
        );
      else
        break;
      Be--, _e--;
    }
    if (fe > Be) {
      if (fe <= _e) {
        const oe = _e + 1, Je = oe < We ? z[oe].el : Ee;
        for (; fe <= _e; )
          $(
            null,
            z[fe] = V ? ln(z[fe]) : zs(z[fe]),
            ue,
            Je,
            Ce,
            Ie,
            Oe,
            te,
            V
          ), fe++;
      }
    } else if (fe > _e)
      for (; fe <= Be; )
        re(E[fe], Ce, Ie, !0), fe++;
    else {
      const oe = fe, Je = fe, Ne = /* @__PURE__ */ new Map();
      for (fe = Je; fe <= _e; fe++) {
        const ee = z[fe] = V ? ln(z[fe]) : zs(z[fe]);
        ee.key != null && Ne.set(ee.key, fe);
      }
      let Xe, De = 0;
      const Ae = _e - Je + 1;
      let qe = !1, kt = 0;
      const Ot = new Array(Ae);
      for (fe = 0; fe < Ae; fe++) Ot[fe] = 0;
      for (fe = oe; fe <= Be; fe++) {
        const ee = E[fe];
        if (De >= Ae) {
          re(ee, Ce, Ie, !0);
          continue;
        }
        let se;
        if (ee.key != null)
          se = Ne.get(ee.key);
        else
          for (Xe = Je; Xe <= _e; Xe++)
            if (Ot[Xe - Je] === 0 && hn(ee, z[Xe])) {
              se = Xe;
              break;
            }
        se === void 0 ? re(ee, Ce, Ie, !0) : (Ot[se - Je] = fe + 1, se >= kt ? kt = se : qe = !0, $(
          ee,
          z[se],
          ue,
          null,
          Ce,
          Ie,
          Oe,
          te,
          V
        ), De++);
      }
      const Gt = qe ? Id(Ot) : Dn;
      for (Xe = Gt.length - 1, fe = Ae - 1; fe >= 0; fe--) {
        const ee = Je + fe, se = z[ee], pe = z[ee + 1], Qe = ee + 1 < We ? (
          // #13559, fallback to el placeholder for unresolved async component
          pe.el || pe.placeholder
        ) : Ee;
        Ot[fe] === 0 ? $(
          null,
          se,
          ue,
          Qe,
          Ce,
          Ie,
          Oe,
          te,
          V
        ) : qe && (Xe < 0 || fe !== Gt[Xe] ? Z(se, ue, Qe, 2) : Xe--);
      }
    }
  }, Z = (E, z, ue, Ee, Ce = null) => {
    const { el: Ie, type: Oe, transition: te, children: V, shapeFlag: fe } = E;
    if (fe & 6) {
      Z(E.component.subTree, z, ue, Ee);
      return;
    }
    if (fe & 128) {
      E.suspense.move(z, ue, Ee);
      return;
    }
    if (fe & 64) {
      Oe.move(E, z, ue, ge);
      return;
    }
    if (Oe === W) {
      a(Ie, z, ue);
      for (let Be = 0; Be < V.length; Be++)
        Z(V[Be], z, ue, Ee);
      a(E.anchor, z, ue);
      return;
    }
    if (Oe === ja) {
      I(E, z, ue);
      return;
    }
    if (Ee !== 2 && fe & 1 && te)
      if (Ee === 0)
        te.beforeEnter(Ie), a(Ie, z, ue), ls(() => te.enter(Ie), Ce);
      else {
        const { leave: Be, delayLeave: _e, afterLeave: oe } = te, Je = () => {
          E.ctx.isUnmounted ? l(Ie) : a(Ie, z, ue);
        }, Ne = () => {
          Ie._isLeaving && Ie[Hs](
            !0
            /* cancelled */
          ), Be(Ie, () => {
            Je(), oe && oe();
          });
        };
        _e ? _e(Ie, Je, Ne) : Ne();
      }
    else
      a(Ie, z, ue);
  }, re = (E, z, ue, Ee = !1, Ce = !1) => {
    const {
      type: Ie,
      props: Oe,
      ref: te,
      children: V,
      dynamicChildren: fe,
      shapeFlag: We,
      patchFlag: Be,
      dirs: _e,
      cacheIndex: oe
    } = E;
    if (Be === -2 && (Ce = !1), te != null && (Ys(), vo(te, null, ue, E, !0), Xs()), oe != null && (z.renderCache[oe] = void 0), We & 256) {
      z.ctx.deactivate(E);
      return;
    }
    const Je = We & 1 && _e, Ne = !Un(E);
    let Xe;
    if (Ne && (Xe = Oe && Oe.onVnodeBeforeUnmount) && Ds(Xe, z, E), We & 6)
      we(E.component, ue, Ee);
    else {
      if (We & 128) {
        E.suspense.unmount(ue, Ee);
        return;
      }
      Je && mn(E, null, z, "beforeUnmount"), We & 64 ? E.type.remove(
        E,
        z,
        ue,
        ge,
        Ee
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Ie !== W || Be > 0 && Be & 64) ? Fe(
        fe,
        z,
        ue,
        !1,
        !0
      ) : (Ie === W && Be & 384 || !Ce && We & 16) && Fe(V, z, ue), Ee && Q(E);
    }
    (Ne && (Xe = Oe && Oe.onVnodeUnmounted) || Je) && ls(() => {
      Xe && Ds(Xe, z, E), Je && mn(E, null, z, "unmounted");
    }, ue);
  }, Q = (E) => {
    const { type: z, el: ue, anchor: Ee, transition: Ce } = E;
    if (z === W) {
      he(ue, Ee);
      return;
    }
    if (z === ja) {
      P(E);
      return;
    }
    const Ie = () => {
      l(ue), Ce && !Ce.persisted && Ce.afterLeave && Ce.afterLeave();
    };
    if (E.shapeFlag & 1 && Ce && !Ce.persisted) {
      const { leave: Oe, delayLeave: te } = Ce, V = () => Oe(ue, Ie);
      te ? te(E.el, Ie, V) : V();
    } else
      Ie();
  }, he = (E, z) => {
    let ue;
    for (; E !== z; )
      ue = w(E), l(E), E = ue;
    l(z);
  }, we = (E, z, ue) => {
    const { bum: Ee, scope: Ce, job: Ie, subTree: Oe, um: te, m: V, a: fe } = E;
    ri(V), ri(fe), Ee && Wo(Ee), Ce.stop(), Ie && (Ie.flags |= 8, re(Oe, E, z, ue)), te && ls(te, z), ls(() => {
      E.isUnmounted = !0;
    }, z);
  }, Fe = (E, z, ue, Ee = !1, Ce = !1, Ie = 0) => {
    for (let Oe = Ie; Oe < E.length; Oe++)
      re(E[Oe], z, ue, Ee, Ce);
  }, Le = (E) => {
    if (E.shapeFlag & 6)
      return Le(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const z = w(E.anchor || E.el), ue = z && z[br];
    return ue ? w(ue) : z;
  };
  let ke = !1;
  const Pe = (E, z, ue) => {
    E == null ? z._vnode && re(z._vnode, null, null, !0) : $(
      z._vnode || null,
      E,
      z,
      null,
      null,
      null,
      ue
    ), z._vnode = E, ke || (ke = !0, Kl(), wr(), ke = !1);
  }, ge = {
    p: $,
    um: re,
    m: Z,
    r: Q,
    mt: le,
    mc: R,
    pc: J,
    pbc: K,
    n: Le,
    o: e
  };
  return {
    render: Pe,
    hydrate: void 0,
    createApp: ld(Pe)
  };
}
function Ga({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Sd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pl(e, t, n = !1) {
  const a = e.children, l = t.children;
  if (tt(a) && tt(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = ln(l[r]), u.el = c.el), !n && u.patchFlag !== -2 && Pl(c, u)), u.type === _a && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === ss && !u.el && (u.el = c.el);
    }
}
function Id(e) {
  const t = e.slice(), n = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const f = e[a];
    if (f !== 0) {
      if (l = n[n.length - 1], e[l] < f) {
        t[a] = l, n.push(a);
        continue;
      }
      for (r = 0, c = n.length - 1; r < c; )
        u = r + c >> 1, e[n[u]] < f ? r = u + 1 : c = u;
      f < e[n[r]] && (r > 0 && (t[a] = n[r - 1]), n[r] = a);
    }
  }
  for (r = n.length, c = n[r - 1]; r-- > 0; )
    n[r] = c, c = t[c];
  return n;
}
function Qr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qr(t);
}
function ri(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Yr = (e) => e.__isSuspense;
function Ed(e, t) {
  t && t.pendingBranch ? tt(e) ? t.effects.push(...e) : t.effects.push(e) : Au(e);
}
const W = Symbol.for("v-fgt"), _a = Symbol.for("v-txt"), ss = Symbol.for("v-cmt"), ja = Symbol.for("v-stc"), go = [];
let ys = null;
function o(e = !1) {
  go.push(ys = e ? null : []);
}
function Td() {
  go.pop(), ys = go[go.length - 1] || null;
}
let Co = 1;
function oa(e, t = !1) {
  Co += e, e < 0 && ys && t && (ys.hasOnce = !0);
}
function Xr(e) {
  return e.dynamicChildren = Co > 0 ? ys || Dn : null, Td(), Co > 0 && ys && ys.push(e), e;
}
function i(e, t, n, a, l, r) {
  return Xr(
    s(
      e,
      t,
      n,
      a,
      l,
      r,
      !0
    )
  );
}
function D(e, t, n, a, l) {
  return Xr(
    b(
      e,
      t,
      n,
      a,
      l,
      !0
    )
  );
}
function xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function hn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zr = ({ key: e }) => e ?? null, Ho = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ut(e) || os(e) || at(e) ? { i: Jt, r: e, k: t, f: !!n } : e : null);
function s(e, t = null, n = null, a = 0, l = null, r = e === W ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zr(t),
    ref: t && Ho(t),
    scopeId: kr,
    slotScopeIds: null,
    children: n,
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
    ctx: Jt
  };
  return u ? (Rl(d, n), r & 128 && e.normalize(d)) : n && (d.shapeFlag |= Ut(n) ? 8 : 16), Co > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  ys && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && ys.push(d), d;
}
const b = Md;
function Md(e, t = null, n = null, a = 0, l = null, r = !1) {
  if ((!e || e === Lr) && (e = ss), xo(e)) {
    const u = cn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Rl(u, n), Co > 0 && !r && ys && (u.shapeFlag & 6 ? ys[ys.indexOf(e)] = u : ys.push(u)), u.patchFlag = -2, u;
  }
  if (Bd(e) && (e = e.__vccOpts), t) {
    t = Pd(t);
    let { class: u, style: d } = t;
    u && !Ut(u) && (t.class = Ve(u)), xt(d) && (xl(d) && !tt(d) && (d = Vt({}, d)), t.style = Wt(d));
  }
  const c = Ut(e) ? 1 : Yr(e) ? 128 : $r(e) ? 64 : xt(e) ? 4 : at(e) ? 2 : 0;
  return s(
    e,
    t,
    n,
    a,
    l,
    c,
    r,
    !0
  );
}
function Pd(e) {
  return e ? xl(e) || Gr(e) ? Vt({}, e) : e : null;
}
function cn(e, t, n = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, f = t ? Rd(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Zr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? tt(r) ? r.concat(Ho(t)) : [r, Ho(t)] : Ho(t)
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
    ssContent: e.ssContent && cn(e.ssContent),
    ssFallback: e.ssFallback && cn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && bn(
    v,
    d.clone(v)
  ), v;
}
function C(e = " ", t = 0) {
  return b(_a, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (o(), D(ss, null, e)) : b(ss, null, e);
}
function zs(e) {
  return e == null || typeof e == "boolean" ? b(ss) : tt(e) ? b(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : xo(e) ? ln(e) : b(_a, null, String(e));
}
function ln(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : cn(e);
}
function Rl(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (tt(t))
    n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Rl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Gr(t) ? t._ctx = Jt : l === 3 && Jt && (Jt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else at(t) ? (t = { default: t, _ctx: Jt }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [C(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Rd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Ve([t.class, a.class]));
      else if (l === "style")
        t.style = Wt([t.style, a.style]);
      else if (ua(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(tt(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Ds(e, t, n, a = null) {
  Ms(e, t, 7, [
    n,
    a
  ]);
}
const Dd = Ar();
let Ld = 0;
function Nd(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || Dd, r = {
    uid: Ld++,
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
    scope: new iu(
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
    propsOptions: Hr(a, l),
    emitsOptions: Br(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Tt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: Tt,
    data: Tt,
    props: Tt,
    attrs: Tt,
    slots: Tt,
    refs: Tt,
    setupState: Tt,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = md.bind(null, r), e.ce && e.ce(r), r;
}
let ns = null;
const Dl = () => ns || Jt;
let aa, ll;
{
  const e = va(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  aa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ns = n
  ), ll = t(
    "__VUE_SSR_SETTERS__",
    (n) => So = n
  );
}
const Po = (e) => {
  const t = ns;
  return aa(e), e.scope.on(), () => {
    e.scope.off(), aa(t);
  };
}, ci = () => {
  ns && ns.scope.off(), aa(null);
};
function ec(e) {
  return e.vnode.shapeFlag & 4;
}
let So = !1;
function Ud(e, t = !1, n = !1) {
  t && ll(t);
  const { props: a, children: l } = e.vnode, r = ec(e);
  yd(e, a, r, t), bd(e, l, n || t);
  const c = r ? Od(e, t) : void 0;
  return t && ll(!1), c;
}
function Od(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zu);
  const { setup: a } = n;
  if (a) {
    Ys();
    const l = e.setupContext = a.length > 1 ? zd(e) : null, r = Po(e), c = To(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ji(c);
    if (Xs(), r(), (u || e.sp) && !Un(e) && Pr(e), u) {
      if (c.then(ci, ci), t)
        return c.then((d) => {
          ui(e, d);
        }).catch((d) => {
          ga(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ui(e, c);
  } else
    tc(e);
}
function ui(e, t, n) {
  at(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xt(t) && (e.setupState = gr(t)), tc(e);
}
function tc(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Bs);
  {
    const l = Po(e);
    Ys();
    try {
      ed(e);
    } finally {
      Xs(), l();
    }
  }
}
const Ad = {
  get(e, t) {
    return es(e, "get", ""), e[t];
  }
};
function zd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ad),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ka(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gr(Eu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in po)
        return po[n](e);
    },
    has(t, n) {
      return n in t || n in po;
    }
  })) : e.proxy;
}
function Fd(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Bd(e) {
  return at(e) && "__vccOpts" in e;
}
const M = (e, t) => Du(e, t, So);
function Hn(e, t, n) {
  try {
    oa(-1);
    const a = arguments.length;
    return a === 2 ? xt(t) && !tt(t) ? xo(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && xo(n) && (n = [n]), b(e, t, n));
  } finally {
    oa(1);
  }
}
const Vd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let il;
const di = typeof window < "u" && window.trustedTypes;
if (di)
  try {
    il = /* @__PURE__ */ di.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const sc = il ? (e) => il.createHTML(e) : (e) => e, Wd = "http://www.w3.org/2000/svg", Gd = "http://www.w3.org/1998/Math/MathML", js = typeof document < "u" ? document : null, mi = js && /* @__PURE__ */ js.createElement("template"), jd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const l = t === "svg" ? js.createElementNS(Wd, e) : t === "mathml" ? js.createElementNS(Gd, e) : n ? js.createElement(e, { is: n }) : js.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => js.createTextNode(e),
  createComment: (e) => js.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => js.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, a, l, r) {
    const c = n ? n.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), n), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      mi.innerHTML = sc(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = mi.content;
      if (a === "svg" || a === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, sn = "transition", Xn = "animation", Vn = Symbol("_vtc"), nc = {
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
}, oc = /* @__PURE__ */ Vt(
  {},
  Ir,
  nc
), Hd = (e) => (e.displayName = "Transition", e.props = oc, e), qd = /* @__PURE__ */ Hd(
  (e, { slots: t }) => Hn(Bu, ac(e), t)
), vn = (e, t = []) => {
  tt(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, fi = (e) => e ? tt(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ac(e) {
  const t = {};
  for (const j in e)
    j in nc || (t[j] = e[j]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: c = `${n}-enter-active`,
    enterToClass: u = `${n}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: f = c,
    appearToClass: v = u,
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: w = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, k = Kd(l), $ = k && k[0], S = k && k[1], {
    onBeforeEnter: x,
    onEnter: T,
    onEnterCancelled: I,
    onLeave: P,
    onLeaveCancelled: U,
    onBeforeAppear: N = x,
    onAppear: B = T,
    onAppearCancelled: R = I
  } = t, O = (j, de, le, H) => {
    j._enterCancelled = H, nn(j, de ? v : u), nn(j, de ? f : c), le && le();
  }, K = (j, de) => {
    j._isLeaving = !1, nn(j, p), nn(j, g), nn(j, w), de && de();
  }, ae = (j) => (de, le) => {
    const H = j ? B : T, F = () => O(de, j, le);
    vn(H, [de, F]), vi(() => {
      nn(de, j ? d : r), Ns(de, j ? v : u), fi(H) || pi(de, a, $, F);
    });
  };
  return Vt(t, {
    onBeforeEnter(j) {
      vn(x, [j]), Ns(j, r), Ns(j, c);
    },
    onBeforeAppear(j) {
      vn(N, [j]), Ns(j, d), Ns(j, f);
    },
    onEnter: ae(!1),
    onAppear: ae(!0),
    onLeave(j, de) {
      j._isLeaving = !0;
      const le = () => K(j, de);
      Ns(j, p), j._enterCancelled ? (Ns(j, w), rl(j)) : (rl(j), Ns(j, w)), vi(() => {
        j._isLeaving && (nn(j, p), Ns(j, g), fi(P) || pi(j, a, S, le));
      }), vn(P, [j, le]);
    },
    onEnterCancelled(j) {
      O(j, !1, void 0, !0), vn(I, [j]);
    },
    onAppearCancelled(j) {
      O(j, !0, void 0, !0), vn(R, [j]);
    },
    onLeaveCancelled(j) {
      K(j), vn(U, [j]);
    }
  });
}
function Kd(e) {
  if (e == null)
    return null;
  if (xt(e))
    return [Ha(e.enter), Ha(e.leave)];
  {
    const t = Ha(e);
    return [t, t];
  }
}
function Ha(e) {
  return Zc(e);
}
function Ns(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vn] || (e[Vn] = /* @__PURE__ */ new Set())).add(t);
}
function nn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Vn];
  n && (n.delete(t), n.size || (e[Vn] = void 0));
}
function vi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Jd = 0;
function pi(e, t, n, a) {
  const l = e._endId = ++Jd, r = () => {
    l === e._endId && a();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: c, timeout: u, propCount: d } = lc(e, t);
  if (!c)
    return a();
  const f = c + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(f, w), r();
  }, w = (g) => {
    g.target === e && ++v >= d && p();
  };
  setTimeout(() => {
    v < d && p();
  }, u + 1), e.addEventListener(f, w);
}
function lc(e, t) {
  const n = window.getComputedStyle(e), a = (k) => (n[k] || "").split(", "), l = a(`${sn}Delay`), r = a(`${sn}Duration`), c = gi(l, r), u = a(`${Xn}Delay`), d = a(`${Xn}Duration`), f = gi(u, d);
  let v = null, p = 0, w = 0;
  t === sn ? c > 0 && (v = sn, p = c, w = r.length) : t === Xn ? f > 0 && (v = Xn, p = f, w = d.length) : (p = Math.max(c, f), v = p > 0 ? c > f ? sn : Xn : null, w = v ? v === sn ? r.length : d.length : 0);
  const g = v === sn && /\b(?:transform|all)(?:,|$)/.test(
    a(`${sn}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function gi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, a) => hi(n) + hi(e[a])));
}
function hi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function rl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Qd(e, t, n) {
  const a = e[Vn];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yi = Symbol("_vod"), Yd = Symbol("_vsh"), Xd = Symbol(""), Zd = /(?:^|;)\s*display\s*:/;
function em(e, t, n) {
  const a = e.style, l = Ut(n);
  let r = !1;
  if (n && !l) {
    if (t)
      if (Ut(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && qo(a, u, "");
        }
      else
        for (const c in t)
          n[c] == null && qo(a, c, "");
    for (const c in n)
      c === "display" && (r = !0), qo(a, c, n[c]);
  } else if (l) {
    if (t !== n) {
      const c = a[Xd];
      c && (n += ";" + c), a.cssText = n, r = Zd.test(n);
    }
  } else t && e.removeAttribute("style");
  yi in e && (e[yi] = r ? a.display : "", e[Yd] && (a.display = "none"));
}
const wi = /\s*!important$/;
function qo(e, t, n) {
  if (tt(n))
    n.forEach((a) => qo(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = tm(e, t);
    wi.test(n) ? e.setProperty(
      dn(a),
      n.replace(wi, ""),
      "important"
    ) : e[a] = n;
  }
}
const _i = ["Webkit", "Moz", "ms"], qa = {};
function tm(e, t) {
  const n = qa[t];
  if (n)
    return n;
  let a = $s(t);
  if (a !== "filter" && a in e)
    return qa[t] = a;
  a = ma(a);
  for (let l = 0; l < _i.length; l++) {
    const r = _i[l] + a;
    if (r in e)
      return qa[t] = r;
  }
  return t;
}
const ki = "http://www.w3.org/1999/xlink";
function bi(e, t, n, a, l, r = au(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ki, t.slice(6, t.length)) : e.setAttributeNS(ki, t, n) : n == null || r && !Zi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Es(n) ? String(n) : n
  );
}
function $i(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? sc(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (u !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Zi(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Js(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function sm(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const Ci = Symbol("_vei");
function nm(e, t, n, a, l = null) {
  const r = e[Ci] || (e[Ci] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = om(t);
    if (a) {
      const f = r[t] = im(
        a,
        l
      );
      Js(e, u, f, d);
    } else c && (sm(e, u, c, d), r[t] = void 0);
  }
}
const xi = /(?:Once|Passive|Capture)$/;
function om(e) {
  let t;
  if (xi.test(e)) {
    t = {};
    let a;
    for (; a = e.match(xi); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : dn(e.slice(2)), t];
}
let Ka = 0;
const am = /* @__PURE__ */ Promise.resolve(), lm = () => Ka || (am.then(() => Ka = 0), Ka = Date.now());
function im(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    Ms(
      rm(a, n.value),
      t,
      5,
      [a]
    );
  };
  return n.value = e, n.attached = lm(), n;
}
function rm(e, t) {
  if (tt(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const Si = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cm = (e, t, n, a, l, r) => {
  const c = l === "svg";
  t === "class" ? Qd(e, a, c) : t === "style" ? em(e, n, a) : ua(t) ? pl(t) || nm(e, t, n, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : um(e, t, a, c)) ? ($i(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bi(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ut(a)) ? $i(e, $s(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), bi(e, t, a, c));
};
function um(e, t, n, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Si(t) && at(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Si(t) && Ut(n) ? !1 : t in e;
}
const ic = /* @__PURE__ */ new WeakMap(), rc = /* @__PURE__ */ new WeakMap(), la = Symbol("_moveCb"), Ii = Symbol("_enterCb"), dm = (e) => (delete e.props.mode, e), mm = /* @__PURE__ */ dm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Vt({}, oc, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Dl(), a = Sr();
    let l, r;
    return Dr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!hm(
        l[0].el,
        n.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(vm), l.forEach(pm);
      const u = l.filter(gm);
      rl(n.vnode.el), u.forEach((d) => {
        const f = d.el, v = f.style;
        Ns(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = f[la] = (w) => {
          w && w.target !== f || (!w || w.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[la] = null, nn(f, c));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = gt(e), u = ac(c);
      let d = c.tag || W;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), bn(
            v,
            $o(
              v,
              u,
              a,
              n
            )
          ), ic.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = t.default ? Il(t.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const v = r[f];
        v.key != null && bn(
          v,
          $o(v, u, a, n)
        );
      }
      return b(d, null, r);
    };
  }
}), fm = mm;
function vm(e) {
  const t = e.el;
  t[la] && t[la](), t[Ii] && t[Ii]();
}
function pm(e) {
  rc.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function gm(e) {
  const t = ic.get(e), n = rc.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function hm(e, t, n) {
  const a = e.cloneNode(), l = e[Vn];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), n.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = lc(a);
  return r.removeChild(a), c;
}
const un = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return tt(t) ? (n) => Wo(t, n) : t;
};
function ym(e) {
  e.target.composing = !0;
}
function Ei(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const bs = Symbol("_assign");
function Ti(e, t, n) {
  return t && (e = e.trim()), n && (e = fa(e)), e;
}
const ho = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
    e[bs] = un(l);
    const r = a || l.props && l.props.type === "number";
    Js(e, t ? "change" : "input", (c) => {
      c.target.composing || e[bs](Ti(e.value, n, r));
    }), (n || r) && Js(e, "change", () => {
      e.value = Ti(e.value, n, r);
    }), t || (Js(e, "compositionstart", ym), Js(e, "compositionend", Ei), Js(e, "change", Ei));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[bs] = un(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? fa(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === d) || (e.value = d));
  }
}, ia = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[bs] = un(n), Js(e, "change", () => {
      const a = e._modelValue, l = Wn(e), r = e.checked, c = e[bs];
      if (tt(a)) {
        const u = yl(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const f = [...a];
          f.splice(u, 1), c(f);
        }
      } else if (Gn(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(cc(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Mi,
  beforeUpdate(e, t, n) {
    e[bs] = un(n), Mi(e, t, n);
  }
};
function Mi(e, { value: t, oldValue: n }, a) {
  e._modelValue = t;
  let l;
  if (tt(t))
    l = yl(t, a.props.value) > -1;
  else if (Gn(t))
    l = t.has(a.props.value);
  else {
    if (t === n) return;
    l = kn(t, cc(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Ko = {
  created(e, { value: t }, n) {
    e.checked = kn(t, n.props.value), e[bs] = un(n), Js(e, "change", () => {
      e[bs](Wn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, a) {
    e[bs] = un(a), t !== n && (e.checked = kn(t, a.props.value));
  }
}, An = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, a) {
    const l = Gn(t);
    Js(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? fa(Wn(c)) : Wn(c)
      );
      e[bs](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Kt(() => {
        e._assigning = !1;
      });
    }), e[bs] = un(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Pi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[bs] = un(n);
  },
  updated(e, { value: t }) {
    e._assigning || Pi(e, t);
  }
};
function Pi(e, t) {
  const n = e.multiple, a = tt(t);
  if (!(n && !a && !Gn(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Wn(c);
      if (n)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((f) => String(f) === String(u)) : c.selected = yl(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (kn(Wn(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Wn(e) {
  return "_value" in e ? e._value : e.value;
}
function cc(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const wm = ["ctrl", "shift", "alt", "meta"], _m = {
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
  exact: (e, t) => wm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ct = (e, t) => {
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = _m[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, km = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Is = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return n[a] || (n[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = dn(l.key);
    if (t.some(
      (c) => c === r || km[c] === r
    ))
      return e(l);
  }));
}, bm = /* @__PURE__ */ Vt({ patchProp: cm }, jd);
let Ri;
function $m() {
  return Ri || (Ri = Cd(bm));
}
const Ro = ((...e) => {
  const t = $m().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = xm(a);
    if (!l) return;
    const r = t._component;
    !at(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = n(l, !1, Cm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function Cm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function xm(e) {
  return Ut(e) ? document.querySelector(e) : e;
}
const WD = Cn({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const GD = [
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
], jD = {
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
}, Sm = [
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
], HD = [
  ...Sm,
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
function Zn() {
  return !1;
}
function Im(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function qn() {
  var n, a, l;
  const e = window, t = [
    (n = e.app) == null ? void 0 : n.api,
    (l = (a = e.comfyAPI) == null ? void 0 : a.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (Im(r))
      return r;
  return null;
}
async function Qs(e, t) {
  const n = qn();
  if (!n)
    throw new Error("ComfyUI API not available");
  return n.fetchApi(e, t);
}
function Em(e = "comfygit-panel") {
  const t = qn();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class cl extends Error {
  constructor(n, a, l, r) {
    super(n);
    No(this, "status");
    No(this, "data");
    No(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function Tm() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ft() {
  const e = _(!1), t = _(null);
  async function n(A, xe) {
    const je = await Qs(A, xe), wt = await je.text();
    if (!je.ok) {
      let Ft = {};
      if (wt)
        try {
          const ps = JSON.parse(wt);
          ps && typeof ps == "object" && (Ft = ps);
        } catch {
          Ft = { error: wt };
        }
      const Rs = Ft.error || Ft.message || Ft.detail || je.statusText || `Request failed: ${je.status}`;
      throw new cl(String(Rs), je.status, Ft, A);
    }
    if (wt)
      return JSON.parse(wt);
  }
  async function a(A) {
    return n(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(A)}`);
  }
  async function l(A, xe, je) {
    return n("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: A, email: xe, password: je })
    });
  }
  async function r(A, xe, je) {
    return n("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: A, email: xe, password: je })
    });
  }
  async function c(A, xe) {
    return n(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(A)}`, {
      headers: { Authorization: `Bearer ${xe}` }
    });
  }
  async function u(A, xe) {
    return n("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: A, refresh_token: xe || null })
    });
  }
  async function d(A, xe) {
    return n(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(A)}`, {
      headers: { Authorization: `Bearer ${xe}` }
    });
  }
  async function f(A, xe, je) {
    return n(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(xe)}/revisions?cloud_url=${encodeURIComponent(A)}`,
      {
        headers: { Authorization: `Bearer ${je}` }
      }
    );
  }
  async function v(A, xe, je, wt) {
    return n("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${xe}`
      },
      body: JSON.stringify({
        cloud_url: A,
        source_message: je || null,
        cloud_environment_id: wt || null
      })
    });
  }
  async function p(A = !1) {
    return n(A ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(A, xe = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: A, allow_issues: xe })
    });
  }
  async function g(A = 10, xe = 0) {
    return n(`/v2/comfygit/log?limit=${A}&offset=${xe}`);
  }
  async function k(A, xe = 50, je = 0) {
    return n(`/v2/comfygit/log?branch=${encodeURIComponent(A)}&limit=${xe}&offset=${je}`);
  }
  async function $(A) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A })
    });
  }
  async function S() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function x() {
    return n("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function T(A) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A, force: !0 })
    });
  }
  async function I(A) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(A)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function P(A, xe) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(A)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: xe, force: !0 })
    });
  }
  async function U() {
    return n("/v2/comfygit/branches");
  }
  async function N(A) {
    return n(`/v2/comfygit/commit/${A}`);
  }
  async function B(A, xe = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: A, force: xe })
    });
  }
  async function R(A, xe = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, start_point: xe })
    });
  }
  async function O(A, xe = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: A, force: xe })
    });
  }
  async function K() {
    return n("/v2/comfygit/revert-changes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function ae(A, xe = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(A)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: xe })
    });
  }
  async function j() {
    try {
      return await n("/v2/comfygit/environments");
    } catch {
      try {
        const A = await p();
        return {
          environments: [{
            name: A.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + A.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: A.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: A.branch
          }],
          current: A.environment,
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
  async function de() {
    return (await j()).environments;
  }
  async function le(A) {
    try {
      return await n(`/v2/comfygit/environments/${encodeURIComponent(A)}`);
    } catch {
      return null;
    }
  }
  async function H(A, xe) {
    const je = { target_env: A };
    return xe && (je.workspace_path = xe), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(je)
    });
  }
  async function F() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function Y(A) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function J() {
    return n("/v2/workspace/environments/create_status");
  }
  async function ne(A = 100) {
    return n(`/v2/workspace/comfyui_releases?limit=${A}`);
  }
  async function me(A) {
    return n(`/v2/workspace/environments/${A}`, {
      method: "DELETE"
    });
  }
  async function Z(A = !1) {
    try {
      return n(A ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const xe = await p(A), je = [];
      return xe.workflows.new.forEach((wt) => {
        je.push({
          name: wt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), xe.workflows.modified.forEach((wt) => {
        je.push({
          name: wt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), xe.workflows.synced.forEach((wt) => {
        je.push({
          name: wt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), je;
    }
  }
  async function re(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/details`);
  }
  async function Q(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/contract`);
  }
  async function he(A, xe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function we(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/contract`, {
      method: "DELETE"
    });
  }
  async function Fe(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/resolve`, {
      method: "POST"
    });
  }
  async function Le(A, xe, je) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: xe, install_models: je })
    });
  }
  async function ke(A, xe, je) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: xe, importance: je })
    });
  }
  async function Pe() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ge() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function be(A) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(A)}`);
  }
  async function E(A) {
    return n(`/v2/workspace/models/${encodeURIComponent(A)}/source-candidates`);
  }
  async function z(A) {
    return n(`/v2/workspace/models/${encodeURIComponent(A)}/hashes`, {
      method: "POST"
    });
  }
  async function ue() {
    return n("/v2/workspace/models/workflow-source-candidates");
  }
  async function Ee(A) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function Ce(A, xe) {
    return n(`/v2/workspace/models/${A}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function Ie(A) {
    return n("/v2/comfygit/models/sources/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Oe(A, xe) {
    return n(`/v2/workspace/models/${A}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function te(A) {
    return n(`/v2/workspace/models/${A}`, {
      method: "DELETE"
    });
  }
  async function V(A) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function fe() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function We() {
    return n("/v2/workspace/models/directory");
  }
  async function Be(A) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function _e(A) {
    const xe = new URLSearchParams({ url: A });
    return n(`/v2/workspace/huggingface/repo-info?${xe}`);
  }
  async function oe() {
    return n("/v2/workspace/models/subdirectories");
  }
  async function Je(A, xe = 10) {
    const je = new URLSearchParams({ query: A, limit: String(xe) });
    return n(`/v2/workspace/huggingface/search?${je}`);
  }
  async function Ne(A) {
    try {
      const xe = A ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(A)}` : "/v2/comfygit/config";
      return n(xe);
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
  async function Xe(A, xe) {
    const je = xe ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(xe)}` : "/v2/comfygit/config";
    return n(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function De(A, xe) {
    try {
      const je = new URLSearchParams();
      return A && je.append("level", A), xe && je.append("lines", xe.toString()), n(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Ae(A, xe) {
    try {
      const je = new URLSearchParams();
      return A && je.append("level", A), xe && je.append("lines", xe.toString()), n(`/v2/workspace/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function qe() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function kt() {
    return n("/v2/comfygit/debug/manifest");
  }
  async function Ot() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Gt(A, xe) {
    try {
      const je = new URLSearchParams();
      return A && je.append("level", A), xe && je.append("lines", xe.toString()), n(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function ee() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function se(A) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function pe() {
    try {
      return n("/v2/comfygit/nodes");
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
  async function Qe(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/track-dev`, {
      method: "POST"
    });
  }
  async function Re(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/install`, {
      method: "POST"
    });
  }
  async function lt(A, xe) {
    var ot, Ua, Vl, Wl;
    const je = Tm(), wt = Em(), Ft = {
      id: A.id,
      version: A.version || A.selected_version || "latest",
      selected_version: A.selected_version || "latest",
      mode: A.mode || "remote",
      channel: A.channel || "default"
    };
    A.install_source && (Ft.install_source = A.install_source), A.install_source === "git" && A.repository && (Ft.repository = A.repository), await n("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Ft,
        ui_id: je,
        client_id: wt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", A.id), xe != null && xe.beforeQueueStart && await xe.beforeQueueStart(je), await n("/v2/manager/queue/start", {
      method: "POST"
    });
    const ps = await n("/v2/manager/queue/history"), Ht = (ot = ps == null ? void 0 : ps.history) == null ? void 0 : ot[je];
    if ((Ht == null ? void 0 : Ht.result) === "error" || ((Ua = Ht == null ? void 0 : Ht.status) == null ? void 0 : Ua.status_str) === "error") {
      const Hc = ((Wl = (Vl = Ht.status) == null ? void 0 : Vl.messages) == null ? void 0 : Wl[0]) || `Failed to install ${A.id}`;
      throw new cl(Hc, 500, Ht.status || {}, "/v2/manager/queue/start");
    }
    return {
      ui_id: je,
      result: Ht == null ? void 0 : Ht.result,
      status: Ht == null ? void 0 : Ht.status
    };
  }
  async function st(A) {
    return n("/v2/comfygit/nodes/dependency-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function pt(A) {
    return n("/v2/comfygit/nodes/dependency-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function St(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/update`, {
      method: "POST"
    });
  }
  async function Ye(A, xe) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: xe })
    });
  }
  async function bt(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function Xt() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function us(A, xe) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, url: xe })
    });
  }
  async function q(A) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function ve(A, xe, je) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: xe, push_url: je })
    });
  }
  async function ze(A, xe) {
    const je = {};
    return xe && (je["X-Git-Auth-Token"] = xe), n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function $e(A) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/status`);
    } catch {
      return null;
    }
  }
  async function Ge(A = "skip", xe = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: A,
        remove_extra_nodes: xe
      })
    });
  }
  async function et(A, xe) {
    const je = xe ? `/v2/comfygit/remotes/${encodeURIComponent(A)}/pull-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(A)}/pull-preview`;
    return n(je);
  }
  async function ct(A, xe = {}) {
    const je = { "Content-Type": "application/json" };
    return xe.authToken && (je["X-Git-Auth-Token"] = xe.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: xe.modelStrategy || "skip",
        force: xe.force || !1,
        resolutions: xe.resolutions
      })
    });
  }
  async function ut(A, xe) {
    const je = xe ? `/v2/comfygit/remotes/${encodeURIComponent(A)}/push-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(A)}/push-preview`;
    return n(je);
  }
  async function It(A, xe = {}) {
    const je = { "Content-Type": "application/json" };
    return xe.authToken && (je["X-Git-Auth-Token"] = xe.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: xe.force || !1 })
    });
  }
  async function Mt(A, xe) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: xe })
    });
  }
  async function yt(A) {
    const xe = {
      success: 0,
      failed: []
    };
    for (const je of A)
      try {
        await Fe(je), xe.success++;
      } catch (wt) {
        xe.failed.push({
          name: je,
          error: wt instanceof Error ? wt.message : "Unknown error"
        });
      }
    return xe;
  }
  async function X(A) {
    const xe = new FormData();
    xe.append("file", A);
    const je = await Qs("/v2/workspace/import/preview", {
      method: "POST",
      body: xe
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!je.ok) {
      const wt = await je.json().catch(() => ({}));
      throw new Error(wt.error || `Preview failed: ${je.status}`);
    }
    return je.json();
  }
  async function L(A) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(A)}`
    );
  }
  async function ie(A, xe, je, wt) {
    const Ft = new FormData();
    Ft.append("file", A), Ft.append("name", xe), Ft.append("model_strategy", je), Ft.append("torch_backend", wt);
    const Rs = await Qs("/v2/workspace/import", {
      method: "POST",
      body: Ft
    });
    if (!Rs.ok) {
      const ps = await Rs.json().catch(() => ({}));
      throw new Error(ps.message || ps.error || `Import failed: ${Rs.status}`);
    }
    return Rs.json();
  }
  async function He() {
    return n("/v2/workspace/import/status");
  }
  async function Ze(A) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: A })
    });
  }
  async function zt(A, xe, je, wt) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: A,
        name: xe,
        model_strategy: je,
        torch_backend: wt
      })
    });
  }
  async function Zt() {
    return n("/v2/setup/status");
  }
  async function xs() {
    return n("/v2/comfygit/update-check");
  }
  async function ds() {
    return n("/v2/comfygit/update", { method: "POST" });
  }
  async function dt(A) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function tn() {
    return n("/v2/setup/initialize_status");
  }
  async function Pt(A) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Jn() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function ms() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function xn(A, xe) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: A, save_key: xe })
    });
  }
  async function $a() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Ca(A) {
    const xe = A ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(A)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(xe);
  }
  async function xa(A) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Do() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function Sa(A) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function Ia(A) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/stop`, {
      method: "POST"
    });
  }
  async function Ea(A) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/start`, {
      method: "POST"
    });
  }
  async function Ta(A) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/status`);
  }
  async function Ma(A) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A })
    });
  }
  async function Pa(A = !1) {
    return n(A ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ra() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Da() {
    return n("/v2/comfygit/deploy/custom/workers");
  }
  async function Lo(A) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function La(A) {
    return n(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function Na(A) {
    return n("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Qn() {
    return n("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ce(A) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/info`);
  }
  async function G(A) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances`);
  }
  async function Ke(A, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function nt(A, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(xe)}/start`, {
      method: "POST"
    });
  }
  async function ht(A, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(xe)}/stop`, {
      method: "POST"
    });
  }
  async function Et(A, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(xe)}`, {
      method: "DELETE"
    });
  }
  async function jt(A) {
    return n("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: A })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: p,
    commit: w,
    getHistory: g,
    getBranchHistory: k,
    exportEnv: $,
    validateExport: S,
    validateDeploy: x,
    exportEnvWithForce: T,
    validateEnvironmentExport: I,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: U,
    getCommitDetail: N,
    checkout: B,
    createBranch: R,
    switchBranch: O,
    revertChanges: K,
    deleteBranch: ae,
    // Environment Management
    listEnvironments: j,
    getEnvironments: de,
    getEnvironmentDetails: le,
    switchEnvironment: H,
    getSwitchProgress: F,
    createEnvironment: Y,
    getCreateProgress: J,
    getComfyUIReleases: ne,
    deleteEnvironment: me,
    // Workflow Management
    getWorkflows: Z,
    getWorkflowDetails: re,
    getWorkflowContract: Q,
    saveWorkflowContract: he,
    deleteWorkflowContract: we,
    resolveWorkflow: Fe,
    installWorkflowDeps: Le,
    setModelImportance: ke,
    // Model Management
    getEnvironmentModels: Pe,
    getWorkspaceModels: ge,
    getModelDetails: be,
    getModelSourceCandidates: E,
    computeModelHashes: z,
    getWorkflowSourceCandidates: ue,
    openFileLocation: Ee,
    addModelSource: Ce,
    applyEnvironmentModelSources: Ie,
    removeModelSource: Oe,
    deleteModel: te,
    downloadModel: V,
    scanWorkspaceModels: fe,
    getModelsDirectory: We,
    setModelsDirectory: Be,
    getHuggingFaceRepoInfo: _e,
    getModelsSubdirectories: oe,
    searchHuggingFaceRepos: Je,
    // Settings
    getConfig: Ne,
    updateConfig: Xe,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: f,
    publishCurrentEnvironmentToCloud: v,
    // Debug/Logs
    getEnvironmentLogs: De,
    getEnvironmentManifest: kt,
    getWorkspaceLogs: Ae,
    getEnvironmentLogPath: qe,
    getWorkspaceLogPath: Ot,
    getOrchestratorLogs: Gt,
    getOrchestratorLogPath: ee,
    openFile: se,
    // Node Management
    getNodes: pe,
    trackNodeAsDev: Qe,
    installNode: Re,
    queueNodeInstall: lt,
    previewNodeDependencyChanges: st,
    applyReviewedNodeDependencyChanges: pt,
    updateNode: St,
    updateNodeCriticality: Ye,
    uninstallNode: bt,
    // Git Remotes
    getRemotes: Xt,
    addRemote: us,
    removeRemote: q,
    updateRemoteUrl: ve,
    fetchRemote: ze,
    getRemoteSyncStatus: $e,
    // Push/Pull
    getPullPreview: et,
    pullFromRemote: ct,
    getPushPreview: ut,
    pushToRemote: It,
    validateMerge: Mt,
    // Environment Sync
    syncEnvironmentManually: Ge,
    // Workflow Repair
    repairWorkflowModels: yt,
    // Import Operations
    previewTarballImport: X,
    previewGitImport: Ze,
    validateEnvironmentName: L,
    executeImport: ie,
    executeGitImport: zt,
    getImportProgress: He,
    // First-Time Setup
    getSetupStatus: Zt,
    // Manager Update Notice
    getUpdateCheck: xs,
    updateManager: ds,
    initializeWorkspace: dt,
    getInitializeProgress: tn,
    validatePath: Pt,
    // Deploy Operations
    getDeploySummary: Jn,
    getDataCenters: ms,
    testRunPodConnection: xn,
    getNetworkVolumes: $a,
    getRunPodGpuTypes: Ca,
    deployToRunPod: xa,
    getRunPodPods: Do,
    terminateRunPodPod: Sa,
    stopRunPodPod: Ia,
    startRunPodPod: Ea,
    getDeploymentStatus: Ta,
    exportDeployPackage: Ma,
    getStoredRunPodKey: Pa,
    clearRunPodKey: Ra,
    // Custom Worker Operations
    getCustomWorkers: Da,
    addCustomWorker: Lo,
    removeCustomWorker: La,
    testWorkerConnection: Na,
    scanForWorkers: Qn,
    getWorkerSystemInfo: ce,
    getWorkerInstances: G,
    deployToWorker: Ke,
    startWorkerInstance: nt,
    stopWorkerInstance: ht,
    terminateWorkerInstance: Et,
    // Git Authentication
    testGitAuth: jt
  };
}
const Mm = { class: "panel-layout" }, Pm = {
  key: 0,
  class: "panel-layout-header"
}, Rm = {
  key: 1,
  class: "panel-layout-search"
}, Dm = { class: "panel-layout-content" }, Lm = {
  key: 2,
  class: "panel-layout-footer"
}, Nm = /* @__PURE__ */ Se({
  __name: "PanelLayout",
  setup(e) {
    return (t, n) => (o(), i("div", Mm, [
      t.$slots.header ? (o(), i("div", Pm, [
        rt(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (o(), i("div", Rm, [
        rt(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", Dm, [
        rt(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (o(), i("div", Lm, [
        rt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, Qt = /* @__PURE__ */ Te(Nm, [["__scopeId", "data-v-21565df9"]]), Um = {
  key: 0,
  class: "panel-title-prefix"
}, Om = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Am = /* @__PURE__ */ Se({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, n) => (o(), D(El(`h${e.level}`), {
      class: Ve(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (o(), i("span", Um, m(e.prefix), 1)) : (o(), i("span", Om)),
        rt(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), zm = /* @__PURE__ */ Te(Am, [["__scopeId", "data-v-c3875efc"]]), Fm = ["title"], Bm = ["width", "height"], Vm = /* @__PURE__ */ Se({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: n[0] || (n[0] = (a) => t.$emit("click"))
    }, [
      (o(), i("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...n[1] || (n[1] = [
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
      ])], 8, Bm))
    ], 8, Fm));
  }
}), uc = /* @__PURE__ */ Te(Vm, [["__scopeId", "data-v-6fc7f16d"]]), Wm = { class: "header-left" }, Gm = {
  key: 0,
  class: "header-actions"
}, jm = /* @__PURE__ */ Se({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Ve(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Wm, [
        b(zm, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            C(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), D(uc, {
          key: 0,
          onClick: n[0] || (n[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (o(), i("div", Gm, [
        rt(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ Te(jm, [["__scopeId", "data-v-55a62cd6"]]), Hm = {
  key: 0,
  class: "section-title-count"
}, qm = {
  key: 1,
  class: "section-title-icon"
}, Km = /* @__PURE__ */ Se({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), D(El(`h${e.level}`), {
      class: Ve(["section-title", { clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        rt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", Hm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (o(), i("span", qm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _s = /* @__PURE__ */ Te(Km, [["__scopeId", "data-v-559361eb"]]), Jm = { class: "status-grid" }, Qm = { class: "status-grid__columns" }, Ym = { class: "status-grid__column" }, Xm = { class: "status-grid__title" }, Zm = { class: "status-grid__column status-grid__column--right" }, ef = { class: "status-grid__title" }, tf = {
  key: 0,
  class: "status-grid__footer"
}, sf = /* @__PURE__ */ Se({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", Jm, [
      s("div", Qm, [
        s("div", Ym, [
          s("h4", Xm, m(e.leftTitle), 1),
          rt(t.$slots, "left", {}, void 0)
        ]),
        s("div", Zm, [
          s("h4", ef, m(e.rightTitle), 1),
          rt(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (o(), i("div", tf, [
        rt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), nf = /* @__PURE__ */ Te(sf, [["__scopeId", "data-v-73b7ba3f"]]), of = {
  key: 0,
  class: "status-item__icon"
}, af = {
  key: 1,
  class: "status-item__count"
}, lf = { class: "status-item__label" }, rf = /* @__PURE__ */ Se({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = M(() => `status-item--${t.variant}`);
    return (a, l) => (o(), i("div", {
      class: Ve(["status-item", n.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), i("span", of, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (o(), i("span", af, m(e.count), 1)) : y("", !0),
      s("span", lf, m(e.label), 1)
    ], 2));
  }
}), Ls = /* @__PURE__ */ Te(rf, [["__scopeId", "data-v-6f929183"]]), cf = { class: "issue-card__header" }, uf = { class: "issue-card__icon" }, df = { class: "issue-card__title" }, mf = {
  key: 0,
  class: "issue-card__content"
}, ff = {
  key: 0,
  class: "issue-card__description"
}, vf = {
  key: 1,
  class: "issue-card__items"
}, pf = {
  key: 2,
  class: "issue-card__actions"
}, gf = /* @__PURE__ */ Se({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, n = M(() => `issue-card--${t.severity}`);
    return (a, l) => (o(), i("div", {
      class: Ve(["issue-card", n.value])
    }, [
      s("div", cf, [
        s("span", uf, m(e.icon), 1),
        s("h4", df, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (o(), i("div", mf, [
        e.description ? (o(), i("p", ff, m(e.description), 1)) : y("", !0),
        rt(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (o(), i("div", vf, [
        (o(!0), i(W, null, ye(e.items, (r, c) => (o(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (o(), i("div", pf, [
        rt(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), gs = /* @__PURE__ */ Te(gf, [["__scopeId", "data-v-df6aa348"]]), hf = ["type", "disabled"], yf = {
  key: 0,
  class: "spinner"
}, wf = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ve(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", yf)) : y("", !0),
      e.loading ? y("", !0) : rt(t.$slots, "default", { key: 1 }, void 0)
    ], 10, hf));
  }
}), Me = /* @__PURE__ */ Te(wf, [["__scopeId", "data-v-772abe47"]]), _f = /* @__PURE__ */ Se({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Ve(["detail-label"]),
      style: Wt({ minWidth: e.minWidth })
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Jo = /* @__PURE__ */ Te(_f, [["__scopeId", "data-v-75e9eeb8"]]), kf = /* @__PURE__ */ Se({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Ve(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), ul = /* @__PURE__ */ Te(kf, [["__scopeId", "data-v-2f186e4c"]]), bf = { class: "detail-row" }, $f = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), i("div", bf, [
      b(Jo, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          C(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), D(ul, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          C(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : rt(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), Dt = /* @__PURE__ */ Te($f, [["__scopeId", "data-v-ef15664a"]]), Cf = { class: "modal-header" }, xf = { class: "modal-body" }, Sf = { class: "status-section" }, If = {
  key: 0,
  class: "status-section"
}, Ef = { class: "section-header-row" }, Tf = {
  key: 0,
  class: "workflow-group"
}, Mf = { class: "workflow-group-header" }, Pf = { class: "workflow-group-title" }, Rf = { class: "workflow-list" }, Df = { class: "workflow-name" }, Lf = { class: "workflow-issue" }, Nf = {
  key: 1,
  class: "workflow-group"
}, Uf = { class: "workflow-group-header" }, Of = { class: "workflow-group-title" }, Af = { class: "workflow-list" }, zf = { class: "workflow-name" }, Ff = { class: "workflow-issue" }, Bf = {
  key: 2,
  class: "workflow-group"
}, Vf = { class: "workflow-group-header" }, Wf = { class: "workflow-group-title" }, Gf = { class: "workflow-list" }, jf = { class: "workflow-name" }, Hf = {
  key: 3,
  class: "workflow-group"
}, qf = { class: "workflow-group-header" }, Kf = { class: "workflow-group-title" }, Jf = { class: "workflow-list" }, Qf = { class: "workflow-name" }, Yf = {
  key: 4,
  class: "workflow-group"
}, Xf = { class: "workflow-group-header" }, Zf = { class: "workflow-group-title" }, ev = { class: "workflow-list" }, tv = { class: "workflow-name" }, sv = {
  key: 5,
  class: "workflow-group"
}, nv = { class: "workflow-group-title" }, ov = { class: "expand-icon" }, av = {
  key: 0,
  class: "workflow-list"
}, lv = { class: "workflow-name" }, iv = {
  key: 1,
  class: "status-section"
}, rv = {
  key: 0,
  class: "change-group"
}, cv = { class: "change-group-header" }, uv = { class: "change-group-title" }, dv = { class: "change-list" }, mv = { class: "node-name" }, fv = {
  key: 0,
  class: "dev-badge"
}, vv = {
  key: 1,
  class: "change-group"
}, pv = { class: "change-group-header" }, gv = { class: "change-group-title" }, hv = { class: "change-list" }, yv = { class: "node-name" }, wv = {
  key: 0,
  class: "dev-badge"
}, _v = {
  key: 2,
  class: "change-group"
}, kv = { class: "change-list" }, bv = { class: "change-item" }, $v = { class: "node-name" }, Cv = {
  key: 3,
  class: "change-group"
}, xv = {
  key: 2,
  class: "status-section"
}, Sv = { class: "section-header-row" }, Iv = {
  key: 0,
  class: "drift-item"
}, Ev = { class: "drift-list" }, Tv = {
  key: 0,
  class: "drift-list-more"
}, Mv = {
  key: 1,
  class: "drift-item"
}, Pv = { class: "drift-list" }, Rv = {
  key: 0,
  class: "drift-list-more"
}, Dv = {
  key: 2,
  class: "drift-item"
}, Lv = { class: "drift-list" }, Nv = { class: "version-actual" }, Uv = { class: "version-expected" }, Ov = {
  key: 0,
  class: "drift-list-more"
}, Av = {
  key: 3,
  class: "drift-item"
}, zv = { class: "repair-action" }, Fv = {
  key: 3,
  class: "status-section"
}, Bv = { class: "info-box" }, Vv = { class: "drift-list" }, Wv = {
  key: 0,
  class: "drift-list-more"
}, Gv = {
  key: 4,
  class: "status-section"
}, jv = { class: "warning-box" }, Hv = {
  key: 5,
  class: "empty-state-inline"
}, qv = { class: "modal-actions" }, Kv = /* @__PURE__ */ Se({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, n = _(!1);
    mt(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), $t(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), l = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), r = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : k.filter(($) => {
        var x, T, I;
        const S = (I = (T = (x = t.status) == null ? void 0 : x.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : I.find((P) => P.name === $);
        return !S || S.status !== "broken";
      })) || [];
    }), c = M(() => {
      var w, g, k, $, S;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((k = t.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || ((($ = t.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((S = t.status.workflows.synced) == null ? void 0 : S.length) ?? 0) > 0 : !1;
    }), u = M(() => {
      var g, k, $;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || ((($ = w.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = M(() => {
      var w, g, k, $, S, x;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((k = t.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((x = (S = ($ = t.status) == null ? void 0 : $.comparison) == null ? void 0 : S.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), f = M(() => {
      var g, k;
      const w = (k = (g = t.status) == null ? void 0 : g.git_changes) == null ? void 0 : k.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, g) => {
      var k, $, S, x, T, I, P, U, N, B, R, O, K, ae, j, de, le, H, F, Y, J, ne;
      return o(), D(cs, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (me) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = Ct(() => {
            }, ["stop"]))
          }, [
            s("div", Cf, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (me) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", xf, [
              s("div", Sf, [
                b(_s, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    C("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Dt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (o(), i("div", If, [
                s("div", Ef, [
                  b(_s, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      C("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (me) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (o(), i("div", Tf, [
                  s("div", Mf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Pf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", Rf, [
                    (o(!0), i(W, null, ye(a.value, (me) => (o(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      s("span", Df, m(me.name), 1),
                      s("span", Lf, m(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (o(), i("div", Nf, [
                  s("div", Uf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Of, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Af, [
                    (o(!0), i(W, null, ye(l.value, (me) => (o(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      s("span", zf, m(me.name), 1),
                      s("span", Ff, m(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                ($ = (k = e.status.workflows) == null ? void 0 : k.new) != null && $.length ? (o(), i("div", Bf, [
                  s("div", Vf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Wf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Gf, [
                    (o(!0), i(W, null, ye(e.status.workflows.new, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", jf, m(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (S = e.status.workflows) == null ? void 0 : S.modified) != null && x.length ? (o(), i("div", Hf, [
                  s("div", qf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Kf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Jf, [
                    (o(!0), i(W, null, ye(e.status.workflows.modified, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", Qf, m(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (T = e.status.workflows) == null ? void 0 : T.deleted) != null && I.length ? (o(), i("div", Yf, [
                  s("div", Xf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Zf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", ev, [
                    (o(!0), i(W, null, ye(e.status.workflows.deleted, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", tv, m(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (o(), i("div", sv, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (me) => n.value = !n.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", nv, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", ov, m(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), i("div", av, [
                    (o(!0), i(W, null, ye(r.value, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", lv, m(me), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (o(), i("div", iv, [
                b(_s, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    C("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (U = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && U.length ? (o(), i("div", rv, [
                  s("div", cv, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", uv, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", dv, [
                    (o(!0), i(W, null, ye(e.status.git_changes.nodes_added, (me) => (o(), i("div", {
                      key: v(me),
                      class: "change-item"
                    }, [
                      s("span", mv, m(v(me)), 1),
                      p(me) ? (o(), i("span", fv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (B = (N = e.status.git_changes) == null ? void 0 : N.nodes_removed) != null && B.length ? (o(), i("div", vv, [
                  s("div", pv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", gv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", hv, [
                    (o(!0), i(W, null, ye(e.status.git_changes.nodes_removed, (me) => (o(), i("div", {
                      key: v(me),
                      class: "change-item"
                    }, [
                      s("span", yv, m(v(me)), 1),
                      p(me) ? (o(), i("span", wv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (R = e.status.git_changes) != null && R.workflow_changes ? (o(), i("div", _v, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", kv, [
                    s("div", bv, [
                      s("span", $v, m(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (O = e.status.git_changes) != null && O.has_other_changes ? (o(), i("div", Cv, [...g[21] || (g[21] = [
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
              (K = e.status.comparison) != null && K.is_synced ? y("", !0) : (o(), i("div", xv, [
                s("div", Sv, [
                  b(_s, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      C("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (me) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (j = (ae = e.status.comparison) == null ? void 0 : ae.missing_nodes) != null && j.length ? (o(), i("div", Iv, [
                  b(Dt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", Ev, [
                    (o(!0), i(W, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (me) => (o(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), i("div", Tv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (le = (de = e.status.comparison) == null ? void 0 : de.extra_nodes) != null && le.length ? (o(), i("div", Mv, [
                  b(Dt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Pv, [
                    (o(!0), i(W, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (me) => (o(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), i("div", Rv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (F = (H = e.status.comparison) == null ? void 0 : H.version_mismatches) != null && F.length ? (o(), i("div", Dv, [
                  b(Dt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Lv, [
                    (o(!0), i(W, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (me) => (o(), i("div", {
                      key: me.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      C(m(me.name) + ": ", 1),
                      s("span", Nv, m(me.actual), 1),
                      g[23] || (g[23] = C(" → ", -1)),
                      s("span", Uv, m(me.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (o(), i("div", Ov, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Y = e.status.comparison) == null ? void 0 : Y.packages_in_sync) === !1 ? (o(), i("div", Av, [
                  b(Dt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", zv, [
                  b(Me, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (me) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      C(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ne = (J = e.status.comparison) == null ? void 0 : J.disabled_nodes) != null && ne.length ? (o(), i("div", Fv, [
                b(_s, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    C("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Bv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Vv, [
                  (o(!0), i(W, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (me) => (o(), i("div", {
                    key: me,
                    class: "drift-list-item"
                  }, " • " + m(me), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), i("div", Wv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), i("div", Gv, [
                b(_s, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    C("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", jv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (o(), i("div", Hv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", qv, [
              b(Me, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (me) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
                  C(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Jv = /* @__PURE__ */ Te(Kv, [["__scopeId", "data-v-e2b37122"]]), Qv = { class: "base-modal-header" }, Yv = {
  key: 0,
  class: "base-modal-title"
}, Xv = { class: "base-modal-body" }, Zv = {
  key: 0,
  class: "base-modal-loading"
}, ep = {
  key: 1,
  class: "base-modal-error"
}, tp = {
  key: 0,
  class: "base-modal-footer"
}, sp = /* @__PURE__ */ Se({
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
    const n = e, a = t;
    function l() {
      n.closeOnOverlayClick && a("close");
    }
    function r(c) {
      c.key === "Escape" && n.showCloseButton && a("close");
    }
    return mt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), jn(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (o(), D(cs, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Wt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Ve(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = Ct(() => {
          }, ["stop"]))
        }, [
          s("div", Qv, [
            rt(c.$slots, "header", {}, () => [
              e.title ? (o(), i("h3", Yv, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (o(), i("button", {
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
          s("div", Xv, [
            e.loading ? (o(), i("div", Zv, "Loading...")) : e.error ? (o(), i("div", ep, m(e.error), 1)) : rt(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (o(), i("div", tp, [
            rt(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), Lt = /* @__PURE__ */ Te(sp, [["__scopeId", "data-v-06a4be14"]]), np = ["type", "disabled"], op = {
  key: 0,
  class: "spinner"
}, ap = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ve(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", op)) : y("", !0),
      rt(t.$slots, "default", {}, void 0)
    ], 10, np));
  }
}), Ue = /* @__PURE__ */ Te(ap, [["__scopeId", "data-v-f3452606"]]), lp = ["type", "value", "placeholder", "disabled"], ip = {
  key: 0,
  class: "base-input-error"
}, rp = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), i("div", {
      class: Ve(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ve(["base-input", { error: !!e.error }]),
        onInput: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          n[1] || (n[1] = Is((a) => t.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Is((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, lp),
      e.error ? (o(), i("span", ip, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ Te(rp, [["__scopeId", "data-v-9ba02cdc"]]), cp = ["disabled"], up = { class: "dropdown-value" }, dp = ["onClick"], mp = {
  key: 0,
  class: "dropdown-error"
}, fp = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = _(!1), r = _(null), c = _(null), u = _({});
    function d(x) {
      return typeof x == "string" ? x : x.value;
    }
    function f(x) {
      return typeof x == "string" ? x : x.label;
    }
    const v = M(() => {
      if (!n.modelValue && n.placeholder)
        return n.placeholder;
      const x = n.options.find((T) => d(T) === n.modelValue);
      return x ? f(x) : String(n.modelValue);
    });
    function p() {
      n.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(x) {
      a("update:modelValue", d(x)), w();
    }
    function k() {
      if (!r.value) return;
      const x = r.value.getBoundingClientRect(), T = window.innerHeight, I = T - x.bottom, P = x.top, U = Math.min(300, n.options.length * 36 + 8), N = I < U && P > I;
      u.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...N ? { bottom: `${T - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    $t(l, async (x) => {
      x && (await Kt(), k());
    });
    function $() {
      l.value && k();
    }
    function S(x) {
      x.key === "Escape" && l.value && w();
    }
    return mt(() => {
      window.addEventListener("scroll", $, !0), window.addEventListener("keydown", S);
    }), jn(() => {
      window.removeEventListener("scroll", $, !0), window.removeEventListener("keydown", S);
    }), (x, T) => (o(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      s("button", {
        type: "button",
        class: Ve(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        s("span", up, m(v.value), 1),
        T[0] || (T[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, cp),
      (o(), D(cs, { to: "body" }, [
        l.value ? (o(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (o(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Wt(u.value)
        }, [
          (o(!0), i(W, null, ye(e.options, (I) => (o(), i("div", {
            key: d(I),
            class: Ve(["dropdown-option", { selected: d(I) === e.modelValue }]),
            onClick: (P) => g(I)
          }, m(f(I)), 11, dp))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (o(), i("span", mp, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), vp = /* @__PURE__ */ Te(fp, [["__scopeId", "data-v-857e085b"]]), pp = { class: "destination-section" }, gp = { class: "section-label" }, hp = { class: "destination-row" }, yp = {
  key: 0,
  class: "path-separator"
}, wp = /* @__PURE__ */ Se({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelsSubdirectories: l } = ft(), r = _(""), c = _(""), u = _(""), d = _([]), f = _(!1);
    let v = !1;
    const p = M(() => {
      const $ = d.value.map((S) => ({
        label: S,
        value: S
      }));
      return $.push({ label: "Custom path...", value: "__custom__" }), $;
    }), w = M(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (f.value || !n.suggestedDirectory) return;
      const $ = d.value.find(
        (S) => {
          var x;
          return S.toLowerCase() === ((x = n.suggestedDirectory) == null ? void 0 : x.toLowerCase());
        }
      );
      $ && $ !== r.value && (v = !0, r.value = $, Kt(() => {
        v = !1;
      }));
    }
    async function k() {
      try {
        const $ = await l();
        d.value = $.directories, $.directories.length > 0 && !r.value && (r.value = $.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return $t(w, ($) => {
      a("update:modelValue", $);
    }, { immediate: !0 }), $t(() => n.suggestedDirectory, g), $t(d, g), $t(r, ($, S) => {
      v || S === "" || (f.value = !0);
    }), mt(k), ($, S) => (o(), i("div", pp, [
      s("h4", gp, m(e.label), 1),
      s("div", hp, [
        b(vp, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = (x) => r.value = x),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (o(), i("span", yp, "/")) : y("", !0),
        r.value !== "__custom__" ? (o(), D(Nt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = (x) => c.value = x),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (o(), D(Nt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = (x) => u.value = x),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), dc = /* @__PURE__ */ Te(wp, [["__scopeId", "data-v-2fbc2b02"]]);
function _p(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function kp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let n;
  try {
    n = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!_p(n.hostname)) return { kind: "unknown" };
  const a = n.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
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
function bp(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Di(e, t, n) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${bp(n)}`;
}
const $p = { class: "hf-file-browser" }, Cp = { class: "browser-header" }, xp = { class: "repo-info" }, Sp = { class: "repo-id" }, Ip = {
  key: 0,
  class: "revision-pill"
}, Ep = {
  key: 0,
  class: "loading-state"
}, Tp = {
  key: 1,
  class: "error-state"
}, Mp = { class: "toolbar" }, Pp = { class: "toolbar-actions" }, Rp = { class: "file-list-container" }, Dp = {
  key: 0,
  class: "file-list-header"
}, Lp = ["checked", "indeterminate"], Np = {
  key: 1,
  class: "file-checkbox-spacer"
}, Up = { class: "sort-indicator" }, Op = { class: "sort-indicator" }, Ap = {
  key: 1,
  class: "empty-state"
}, zp = {
  key: 2,
  class: "file-list"
}, Fp = ["onClick"], Bp = ["checked", "onChange"], Vp = { class: "file-path" }, Wp = { class: "file-size" }, Gp = { class: "action-bar" }, jp = { class: "summary-info" }, Hp = { class: "summary-count" }, qp = { class: "summary-size" }, Kp = /* @__PURE__ */ Se({
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
    const n = e, a = t, { getHuggingFaceRepoInfo: l } = ft(), r = _([]), c = _(/* @__PURE__ */ new Set()), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _("name"), w = _(!0), g = _(""), k = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, $ = M(() => {
      let Q = r.value;
      if (n.initialPath) {
        const he = n.initialPath.endsWith("/") ? n.initialPath : `${n.initialPath}/`;
        Q = Q.filter((we) => we.path.startsWith(he) || we.path === n.initialPath);
      }
      if (v.value && (Q = Q.filter((he) => he.is_model_file)), f.value.trim()) {
        const he = f.value.toLowerCase();
        Q = Q.filter((we) => we.path.toLowerCase().includes(he));
      }
      return Q;
    }), S = M(() => {
      const Q = [...$.value];
      return Q.sort((he, we) => {
        let Fe;
        return p.value === "name" ? Fe = he.path.localeCompare(we.path) : Fe = he.size - we.size, w.value ? Fe : -Fe;
      }), Q;
    }), x = M(() => $.value.length === 0 ? !1 : $.value.every((Q) => c.value.has(Q.path))), T = M(() => $.value.some((Q) => c.value.has(Q.path))), I = M(() => g.value.trim().length > 0), P = M(() => {
      let Q = 0;
      for (const he of c.value) {
        const we = r.value.find((Fe) => Fe.path === he);
        we && (Q += we.size);
      }
      return Q;
    }), U = M(() => {
      if (c.value.size === 0) return null;
      const Q = /* @__PURE__ */ new Set();
      for (const he of c.value) {
        const we = Y(he);
        we && Q.add(we.toLowerCase());
      }
      return Q.size !== 1 ? null : [...Q][0];
    }), N = M(() => n.mode || "download"), B = M(() => n.actionLabel || (N.value === "source" ? "Use as Source" : "Queue Download")), R = M(() => N.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), O = M(() => N.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !I.value);
    function K(Q) {
      if (Q === 0) return "0 B";
      const he = 1024 * 1024 * 1024, we = 1024 * 1024, Fe = 1024;
      return Q >= he ? `${(Q / he).toFixed(2)} GB` : Q >= we ? `${(Q / we).toFixed(1)} MB` : Q >= Fe ? `${(Q / Fe).toFixed(0)} KB` : `${Q} B`;
    }
    function ae(Q) {
      const he = Q.match(k);
      return he ? `${he[1]}${he[4]}` : null;
    }
    function j(Q) {
      if (N.value === "source") {
        c.value = c.value.has(Q.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([Q.path]);
        return;
      }
      const he = new Set(c.value), we = he.has(Q.path), Fe = Q.shard_group || ae(Q.path);
      if (Fe) {
        const Le = r.value.filter((ke) => (ke.shard_group || ae(ke.path)) === Fe);
        we ? Le.forEach((ke) => he.delete(ke.path)) : Le.forEach((ke) => he.add(ke.path));
      } else
        we ? he.delete(Q.path) : he.add(Q.path);
      c.value = he;
    }
    function de() {
      const Q = new Set(c.value);
      for (const he of $.value)
        he.is_model_file && Q.add(he.path);
      c.value = Q;
    }
    function le() {
      c.value = /* @__PURE__ */ new Set();
    }
    function H() {
      if (x.value) {
        const Q = new Set(c.value);
        for (const he of $.value)
          Q.delete(he.path);
        c.value = Q;
      } else {
        const Q = new Set(c.value);
        for (const he of $.value)
          Q.add(he.path);
        c.value = Q;
      }
    }
    function F(Q) {
      p.value === Q ? w.value = !w.value : (p.value = Q, w.value = !0);
    }
    function Y(Q) {
      const he = Q.split("/");
      return he.length >= 2 ? he[he.length - 2] : null;
    }
    function J() {
      return g.value.trim();
    }
    function ne() {
      if (c.value.size === 0 || !I.value) return;
      const Q = J(), he = [];
      for (const we of c.value) {
        const Fe = r.value.find((Le) => Le.path === we);
        Fe && he.push({
          url: Di(n.repoId, n.revision, Fe.path),
          destination: Q,
          filename: Fe.path.split("/").pop() || Fe.path
        });
      }
      a("queue", he);
    }
    function me() {
      if (c.value.size !== 1) return;
      const [Q] = c.value;
      a("selectSource", Di(n.repoId, n.revision, Q));
    }
    function Z() {
      if (N.value === "source") {
        me();
        return;
      }
      ne();
    }
    async function re() {
      if (n.repoId) {
        u.value = !0, d.value = null;
        try {
          const Q = `https://huggingface.co/${n.repoId}/tree/${n.revision || "main"}`, he = await l(Q);
          if (r.value = he.files, n.preselectedFile) {
            const we = r.value.find((Fe) => Fe.path === n.preselectedFile);
            we && j(we);
          }
        } catch (Q) {
          d.value = Q instanceof Error ? Q.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return $t(() => [n.repoId, n.revision], () => {
      n.repoId && re();
    }, { immediate: !1 }), mt(() => {
      re();
    }), (Q, he) => (o(), i("div", $p, [
      s("div", Cp, [
        s("button", {
          class: "back-btn",
          onClick: he[0] || (he[0] = (we) => Q.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", xp, [
          s("span", Sp, m(e.repoId), 1),
          e.revision ? (o(), i("span", Ip, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (o(), i("div", Ep, " Loading repository files... ")) : d.value ? (o(), i("div", Tp, m(d.value), 1)) : (o(), i(W, { key: 2 }, [
        s("div", Mp, [
          b(Nt, {
            modelValue: f.value,
            "onUpdate:modelValue": he[1] || (he[1] = (we) => f.value = we),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", Pp, [
            s("button", {
              class: Ve(["toggle-btn", { active: v.value }]),
              onClick: he[2] || (he[2] = (we) => v.value = !v.value)
            }, m(v.value ? "Models Only" : "All Files"), 3),
            N.value === "download" ? (o(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: de
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: le
            }, "Clear")
          ])
        ]),
        s("div", Rp, [
          $.value.length > 0 ? (o(), i("div", Dp, [
            N.value === "download" ? (o(), i("input", {
              key: 0,
              type: "checkbox",
              checked: x.value,
              indeterminate: T.value && !x.value,
              class: "file-checkbox",
              onChange: H
            }, null, 40, Lp)) : (o(), i("span", Np)),
            s("span", {
              class: "header-name",
              onClick: he[3] || (he[3] = (we) => F("name"))
            }, [
              he[7] || (he[7] = C(" Name ", -1)),
              s("span", Up, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: he[4] || (he[4] = (we) => F("size"))
            }, [
              he[8] || (he[8] = C(" Size ", -1)),
              s("span", Op, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          $.value.length === 0 ? (o(), i("div", Ap, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (o(), i("div", zp, [
            (o(!0), i(W, null, ye(S.value, (we) => (o(), i("div", {
              key: we.path,
              class: Ve(["file-item", { selected: c.value.has(we.path) }]),
              onClick: (Fe) => j(we)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(we.path),
                class: "file-checkbox",
                onClick: he[5] || (he[5] = Ct(() => {
                }, ["stop"])),
                onChange: (Fe) => j(we)
              }, null, 40, Bp),
              s("span", Vp, m(we.path), 1),
              s("span", Wp, m(K(we.size)), 1)
            ], 10, Fp))), 128))
          ]))
        ]),
        N.value === "download" ? (o(), D(dc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": he[6] || (he[6] = (we) => g.value = we),
          "suggested-directory": U.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Gp, [
          s("div", jp, [
            s("span", Hp, m(R.value), 1),
            s("span", qp, m(K(P.value)), 1)
          ]),
          b(Ue, {
            variant: "primary",
            disabled: O.value,
            onClick: Z
          }, {
            default: h(() => [
              C(m(B.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Jp = /* @__PURE__ */ Te(Kp, [["__scopeId", "data-v-06caa551"]]), Qp = { class: "token-config-modal" }, Yp = { class: "provider-info" }, Xp = { class: "provider-icon" }, Zp = { class: "provider-name" }, eg = {
  key: 0,
  class: "current-token"
}, tg = { class: "mask" }, sg = { class: "token-input-section" }, ng = { class: "input-label" }, og = { class: "help-text" }, ag = ["href"], lg = { class: "modal-actions" }, ig = /* @__PURE__ */ Se({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const n = e, a = t, { updateConfig: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = M(
      () => n.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = M(
      () => n.provider === "huggingface" ? "🤗" : "🎨"
    ), v = M(
      () => n.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = M(
      () => n.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = M(
      () => n.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const $ = n.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l($), r.value = "", a("saved"), a("close");
        } catch ($) {
          console.error("Failed to save token:", $);
        } finally {
          c.value = !1;
        }
      }
    }
    async function k() {
      u.value = !0;
      try {
        const $ = n.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l($), a("cleared"), a("close");
      } catch ($) {
        console.error("Failed to clear token:", $);
      } finally {
        u.value = !1;
      }
    }
    return ($, S) => (o(), D(Lt, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = (x) => $.$emit("close"))
    }, {
      body: h(() => [
        s("div", Qp, [
          s("div", Yp, [
            s("span", Xp, m(f.value), 1),
            s("span", Zp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (o(), i("div", eg, [
            S[4] || (S[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", tg, m(e.currentTokenMask), 1),
            b(Ue, {
              variant: "danger",
              size: "sm",
              onClick: k,
              loading: u.value
            }, {
              default: h(() => [...S[3] || (S[3] = [
                C(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", sg, [
            s("label", ng, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(Nt, {
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = (x) => r.value = x),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", og, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, ag)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", lg, [
          b(Ue, {
            variant: "secondary",
            onClick: S[1] || (S[1] = (x) => $.$emit("close"))
          }, {
            default: h(() => [...S[5] || (S[5] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ue, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...S[6] || (S[6] = [
              C(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }, 8, ["overlay-z-index"]));
  }
}), rg = /* @__PURE__ */ Te(ig, [["__scopeId", "data-v-525ec64a"]]), cg = { class: "huggingface-tab" }, ug = {
  key: 0,
  class: "search-section"
}, dg = { class: "search-header" }, mg = { class: "search-bar" }, fg = {
  key: 1,
  class: "search-results"
}, vg = {
  key: 0,
  class: "loading-state"
}, pg = {
  key: 1,
  class: "error-state"
}, gg = {
  key: 2,
  class: "results-list"
}, hg = ["onClick"], yg = { class: "repo-header" }, wg = { class: "repo-id" }, _g = { class: "repo-stats" }, kg = {
  class: "stat",
  title: "Downloads"
}, bg = {
  class: "stat",
  title: "Likes"
}, $g = {
  key: 0,
  class: "repo-desc"
}, Cg = {
  key: 1,
  class: "repo-tags"
}, xg = {
  key: 3,
  class: "empty-state"
}, Sg = {
  key: 4,
  class: "hint-state"
}, Ig = /* @__PURE__ */ Se({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: n } = ft(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _(null), v = _("main"), p = _(), w = _(), g = _(!1), k = _(null), $ = M(() => {
      if (!u.value) return !1;
      const B = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || B.includes("authentication") || B.includes("unauthorized");
    });
    function S(B) {
      return B >= 1e6 ? `${(B / 1e6).toFixed(1)}M` : B >= 1e3 ? `${(B / 1e3).toFixed(1)}K` : String(B);
    }
    async function x() {
      const B = l.value.trim();
      if (!B) return;
      u.value = null;
      const R = kp(B);
      if (R.kind === "file" && R.repoId && R.path) {
        f.value = R.repoId, v.value = R.revision || "main";
        const O = R.path.split("/");
        O.length > 1 ? p.value = O.slice(0, -1).join("/") : p.value = void 0, w.value = R.path, a.value = "browse";
        return;
      }
      if (R.kind === "repo" && R.repoId) {
        f.value = R.repoId, v.value = R.revision || "main", p.value = R.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(B) && !B.includes("://")) {
        f.value = B, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const O = await t(B);
        r.value = O.results, d.value = !0;
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function T(B) {
      f.value = B, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function I() {
      a.value = "search", f.value = null, p.value = void 0, w.value = void 0;
    }
    async function P() {
      try {
        const B = await n();
        k.value = B.huggingface_token || null;
      } catch (B) {
        console.error("Failed to load config:", B);
      }
    }
    function U() {
      P(), $.value && l.value && x();
    }
    function N() {
      k.value = null;
    }
    return mt(P), (B, R) => (o(), i("div", cg, [
      a.value === "search" ? (o(), i("div", ug, [
        s("div", dg, [
          s("div", mg, [
            b(Nt, {
              modelValue: l.value,
              "onUpdate:modelValue": R[0] || (R[0] = (O) => l.value = O),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Is(x, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Ue, {
              variant: "primary",
              onClick: x,
              loading: c.value
            }, {
              default: h(() => [...R[6] || (R[6] = [
                C(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          b(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: R[1] || (R[1] = (O) => g.value = !0)
          }, {
            default: h(() => [
              C(m(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (o(), i("div", fg, [
        c.value ? (o(), i("div", vg, " Searching HuggingFace... ")) : u.value ? (o(), i("div", pg, [
          s("p", null, m(u.value), 1),
          $.value ? (o(), D(Ue, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: R[2] || (R[2] = (O) => g.value = !0)
          }, {
            default: h(() => [...R[7] || (R[7] = [
              C(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (o(), i("div", gg, [
          (o(!0), i(W, null, ye(r.value, (O) => (o(), i("div", {
            key: O.repo_id,
            class: "repo-card",
            onClick: (K) => T(O.repo_id)
          }, [
            s("div", yg, [
              s("span", wg, m(O.repo_id), 1),
              s("div", _g, [
                s("span", kg, [
                  R[8] || (R[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  C(" " + m(S(O.downloads)), 1)
                ]),
                s("span", bg, [
                  R[9] || (R[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  C(" " + m(S(O.likes)), 1)
                ])
              ])
            ]),
            O.description ? (o(), i("p", $g, m(O.description), 1)) : y("", !0),
            O.tags.length > 0 ? (o(), i("div", Cg, [
              (o(!0), i(W, null, ye(O.tags.slice(0, 5), (K) => (o(), i("span", {
                key: K,
                class: "tag"
              }, m(K), 1))), 128))
            ])) : y("", !0)
          ], 8, hg))), 128))
        ])) : d.value ? (o(), i("div", xg, " No repositories found ")) : (o(), i("div", Sg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (o(), D(Jp, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: I,
        onQueue: R[3] || (R[3] = (O) => B.$emit("queue", O)),
        onSelectSource: R[4] || (R[4] = (O) => B.$emit("selectSource", O))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (o(), D(rg, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: R[5] || (R[5] = (O) => g.value = !1),
        onSaved: U,
        onCleared: N
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), mc = /* @__PURE__ */ Te(Ig, [["__scopeId", "data-v-eccbf32d"]]), Eg = { class: "candidate-card" }, Tg = { class: "candidate-main" }, Mg = { class: "candidate-url" }, Pg = { class: "candidate-meta" }, Rg = { class: "meta-chip" }, Dg = {
  key: 0,
  class: "meta-chip"
}, Lg = ["aria-expanded"], Ng = {
  key: 1,
  class: "meta-chip"
}, Ug = { class: "match-popover-reasons" }, Og = { class: "candidate-footer" }, Ag = {
  key: 0,
  class: "candidate-context"
}, zg = { key: 1 }, Fg = /* @__PURE__ */ Se({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1), l = _(null);
    function r() {
      a.value = !1;
    }
    function c(v) {
      var w;
      const p = v.target;
      p instanceof Node && ((w = l.value) != null && w.contains(p) || r());
    }
    function u(v) {
      v.key === "Escape" && r();
    }
    $t(a, (v) => {
      v ? (document.addEventListener("pointerdown", c), document.addEventListener("keydown", u)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u));
    }), Mo(() => {
      document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u);
    });
    function d(v) {
      return v === "huggingface" ? "Hugging Face" : v === "civitai" ? "Civitai" : "Direct URL";
    }
    function f(v) {
      return v >= 75 ? "Strong" : v >= 45 ? "Possible" : "Weak";
    }
    return (v, p) => {
      var w, g;
      return o(), i("article", Eg, [
        s("div", Tg, [
          s("div", Mg, m(e.candidate.url), 1),
          s("div", Pg, [
            s("span", Rg, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (o(), i("span", Dg, [
              p[4] || (p[4] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (o(), i("span", {
              key: 1,
              ref_key: "matchPopoverRoot",
              ref: l,
              class: "match-chip-wrap"
            }, [
              (w = e.candidate.reasons) != null && w.length ? (o(), i("button", {
                key: 0,
                class: "meta-chip meta-chip-button",
                type: "button",
                "aria-expanded": a.value,
                onClick: p[0] || (p[0] = Ct((k) => a.value = !a.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(f(e.candidate.confidence)), 1)
              ], 8, Lg)) : (o(), i("span", Ng, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(f(e.candidate.confidence)), 1)
              ])),
              a.value && ((g = e.candidate.reasons) != null && g.length) ? (o(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = Ct(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Ug, [
                  (o(!0), i(W, null, ye(e.candidate.reasons, (k) => (o(), i("span", {
                    key: k,
                    class: "reason-chip"
                  }, m(k), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Og, [
            e.candidate.context ? (o(), i("details", Ag, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (o(), i("div", zg)),
            b(Ue, {
              variant: "primary",
              size: "sm",
              loading: e.loading,
              onClick: p[2] || (p[2] = (k) => n("select", e.candidate.url))
            }, {
              default: h(() => [
                C(m(e.actionLabel), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]);
    };
  }
}), fc = /* @__PURE__ */ Te(Fg, [["__scopeId", "data-v-329b9068"]]), Bg = { class: "source-url-form" }, Vg = { class: "input-group" }, Wg = { key: 0 }, Gg = {
  key: 1,
  class: "description"
}, jg = { class: "actions" }, Hg = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = M(() => n.modelValue.trim()), r = M(() => {
      const d = l.value;
      if (!d) return null;
      try {
        const f = new URL(d);
        if (!["http:", "https:"].includes(f.protocol))
          return "Use an HTTP or HTTPS URL.";
      } catch {
        return "Enter a valid URL.";
      }
      return null;
    }), c = M(() => !!l.value && !r.value && !n.disabled);
    function u() {
      c.value && a("submit", l.value);
    }
    return (d, f) => (o(), i("div", Bg, [
      s("div", Vg, [
        e.label ? (o(), i("label", Wg, m(e.label), 1)) : y("", !0),
        b(Nt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a("update:modelValue", v)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (o(), i("p", Gg, m(e.description), 1)) : y("", !0)
      ]),
      rt(d.$slots, "default", {}, void 0),
      s("div", jg, [
        b(Ue, {
          variant: "primary",
          disabled: !c.value,
          loading: e.loading,
          onClick: u
        }, {
          default: h(() => [
            C(m(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), vc = /* @__PURE__ */ Te(Hg, [["__scopeId", "data-v-e2610d45"]]), qg = { class: "source-picker" }, Kg = {
  key: 0,
  class: "model-summary"
}, Jg = { class: "model-heading" }, Qg = { class: "summary-name" }, Yg = { class: "summary-meta" }, Xg = {
  key: 0,
  class: "hash-row"
}, Zg = { class: "hash-value" }, eh = {
  key: 1,
  class: "hash-row"
}, th = { class: "hash-value" }, sh = {
  key: 2,
  class: "hash-row"
}, nh = { class: "hash-value" }, oh = {
  key: 4,
  class: "hash-error"
}, ah = { class: "tab-bar" }, lh = ["onClick"], ih = {
  key: 1,
  class: "tab-content"
}, rh = { class: "section-header-row" }, ch = {
  key: 0,
  class: "state-message"
}, uh = {
  key: 1,
  class: "error-message"
}, dh = {
  key: 2,
  class: "candidate-list"
}, mh = {
  key: 3,
  class: "state-message"
}, fh = {
  key: 2,
  class: "tab-content source-browser-content"
}, vh = {
  key: 3,
  class: "tab-content"
}, ph = { class: "section-header-row" }, gh = /* @__PURE__ */ Se({
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
    const n = e, a = t, { getModelSourceCandidates: l, computeModelHashes: r } = ft(), c = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], u = _("workflow"), d = _([]), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = M(() => d.value.filter((T) => T.source === "workflow")), $ = M(() => !!(n.model.hash && (!n.model.blake3 || !n.model.sha256)));
    async function S() {
      f.value = !0, v.value = null;
      try {
        const T = await l(n.model.hash);
        d.value = T.candidates;
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to scan workflows";
      } finally {
        f.value = !1;
      }
    }
    async function x() {
      if (n.model.hash) {
        w.value = !0, g.value = null;
        try {
          const T = await r(n.model.hash);
          a("hashesComputed", T);
        } catch (T) {
          g.value = T instanceof Error ? T.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return mt(S), (T, I) => (o(), i("div", qg, [
      e.showModelSummary ? (o(), i("div", Kg, [
        s("div", Jg, [
          I[4] || (I[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Qg, m(e.model.filename), 1)
        ]),
        s("div", Yg, [
          e.model.hash ? (o(), i("div", Xg, [
            I[5] || (I[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Zg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (o(), i("div", eh, [
            I[6] || (I[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", th, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (o(), i("div", sh, [
            I[7] || (I[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", nh, m(e.model.sha256), 1)
          ])) : y("", !0),
          $.value ? (o(), D(Ue, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: w.value,
            onClick: x
          }, {
            default: h(() => [...I[8] || (I[8] = [
              C(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          g.value ? (o(), i("p", oh, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", ah, [
        (o(), i(W, null, ye(c, (P) => s("button", {
          key: P.id,
          class: Ve(["tab-btn", { active: u.value === P.id }]),
          onClick: (U) => u.value = P.id
        }, m(P.label), 11, lh)), 64))
      ]),
      u.value === "workflow" ? (o(), i("section", ih, [
        s("div", rh, [
          I[10] || (I[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(Ue, {
            variant: "secondary",
            size: "sm",
            loading: f.value,
            onClick: S
          }, {
            default: h(() => [...I[9] || (I[9] = [
              C(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        f.value ? (o(), i("div", ch, "Scanning workflows...")) : v.value ? (o(), i("div", uh, m(v.value), 1)) : k.value.length ? (o(), i("div", dh, [
          (o(!0), i(W, null, ye(k.value, (P) => (o(), D(fc, {
            key: `${P.workflow}:${P.url}`,
            candidate: P,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === P.url,
            onSelect: I[0] || (I[0] = (U) => a("selectSource", U))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (o(), i("div", mh, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (o(), i("section", fh, [
        b(mc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: I[1] || (I[1] = (P) => a("selectSource", P))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (o(), i("section", vh, [
        s("div", ph, [
          s("div", null, [
            I[11] || (I[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(vc, {
          modelValue: p.value,
          "onUpdate:modelValue": I[2] || (I[2] = (P) => p.value = P),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: I[3] || (I[3] = (P) => a("selectSource", P))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0)
    ]));
  }
}), hh = /* @__PURE__ */ Te(gh, [["__scopeId", "data-v-e9633660"]]), yh = {
  key: 0,
  class: "error-message"
}, wh = /* @__PURE__ */ Se({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 },
    deferSave: { type: Boolean, default: !1 },
    actionLabel: { default: "Use as Source" }
  },
  emits: ["close", "saved", "selected", "hashesComputed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { addModelSource: l } = ft(), r = _(n.model), c = _(null), u = _(null);
    $t(() => n.model, (v) => {
      r.value = v;
    });
    async function d(v) {
      if (!(!v || !n.model.hash)) {
        if (n.deferSave) {
          a("selected", v), a("close");
          return;
        }
        c.value = v, u.value = null;
        try {
          await l(n.model.hash, v), a("saved"), a("close");
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to save source";
        } finally {
          c.value = null;
        }
      }
    }
    function f(v) {
      r.value = v, a("hashesComputed");
    }
    return (v, p) => (o(), D(Lt, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        b(hh, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": e.actionLabel,
          onSelectSource: d,
          onHashesComputed: f
        }, null, 8, ["model", "loading-url", "overlay-z-index", "action-label"]),
        u.value ? (o(), i("p", yh, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => a("close"))
        }, {
          default: h(() => [...p[2] || (p[2] = [
            C(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), pc = /* @__PURE__ */ Te(wh, [["__scopeId", "data-v-66614ce7"]]), _h = { class: "readiness-body" }, kh = {
  key: 0,
  class: "issue-section"
}, bh = { class: "section-heading" }, $h = { class: "issue-list" }, Ch = { class: "issue-main" }, xh = { class: "issue-name" }, Sh = { class: "issue-meta" }, Ih = { key: 0 }, Eh = { key: 1 }, Th = {
  key: 0,
  class: "issue-staged-source"
}, Mh = {
  key: 1,
  class: "issue-candidate-note"
}, Ph = ["disabled", "onClick"], Rh = {
  key: 1,
  class: "issue-note"
}, Dh = {
  key: 1,
  class: "issue-section"
}, Lh = { class: "section-heading" }, Nh = { class: "issue-list" }, Uh = { class: "issue-main" }, Oh = { class: "issue-name" }, Ah = { class: "issue-meta" }, zh = { class: "issue-reason" }, Fh = ["disabled", "onClick"], Bh = {
  key: 1,
  class: "issue-note"
}, Vh = {
  key: 2,
  class: "empty-state"
}, Wh = {
  key: 3,
  class: "error-message"
}, Gh = ["disabled"], jh = /* @__PURE__ */ Se({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate", "applied"],
  setup(e, { emit: t }) {
    const n = e, a = t, {
      getModelDetails: l,
      updateNodeCriticality: r,
      applyEnvironmentModelSources: c
    } = ft(), u = _(null), d = _(null), f = _(null), v = _(null), p = _(!1), w = _(null), g = _({}), k = M(() => n.warnings.models_without_sources), $ = M(() => n.warnings.nodes_without_provenance), S = M(() => Object.keys(g.value).length);
    $t(
      k,
      (R) => {
        var ae;
        const O = new Set(
          R.map((j) => j.hash).filter((j) => !!j)
        ), K = {};
        for (const j of R) {
          if (!j.hash) continue;
          const de = g.value[j.hash], le = (ae = j.source_candidates) == null ? void 0 : ae.find((F) => F.url), H = de || (le == null ? void 0 : le.url);
          H && (K[j.hash] = H);
        }
        for (const [j, de] of Object.entries(g.value))
          O.has(j) && de && (K[j] = de);
        g.value = K;
      },
      { immediate: !0 }
    );
    async function x(R) {
      f.value = R, w.value = null;
      try {
        u.value = await l(R), d.value = R;
      } catch (O) {
        w.value = O instanceof Error ? O.message : `Failed to load ${R}`;
      } finally {
        f.value = null;
      }
    }
    async function T(R) {
      v.value = R, w.value = null;
      try {
        const O = await r(R, "optional");
        if (O.status !== "success") {
          w.value = O.message || `Failed to update ${R}`;
          return;
        }
        a("revalidate");
      } catch (O) {
        w.value = O instanceof Error ? O.message : `Failed to update ${R}`;
      } finally {
        v.value = null;
      }
    }
    function I() {
      u.value = null, d.value = null;
    }
    function P(R) {
      d.value && (g.value = {
        ...g.value,
        [d.value]: R
      });
    }
    function U(R) {
      return f.value === R ? "Loading..." : g.value[R] ? "Change Source" : "Add Source";
    }
    function N() {
      a("revalidate");
    }
    async function B() {
      var O, K;
      const R = Object.entries(g.value).map(([ae, j]) => ({
        identifier: ae,
        source_url: j
      }));
      if (R.length) {
        p.value = !0, w.value = null;
        try {
          const ae = await c({ sources: R });
          if (ae.status === "error") {
            w.value = ((O = ae.errors[0]) == null ? void 0 : O.message) || "Failed to apply model sources";
            return;
          }
          const j = new Set(
            ae.applied.map((de) => de.identifier || de.model_hash)
          );
          g.value = Object.fromEntries(
            Object.entries(g.value).filter(([de]) => !j.has(de))
          ), ae.status === "partial" && (w.value = ((K = ae.errors[0]) == null ? void 0 : K.message) || "Some model sources failed to apply"), a("revalidate"), a("applied");
        } catch (ae) {
          w.value = ae instanceof Error ? ae.message : "Failed to apply model sources";
        } finally {
          p.value = !1;
        }
      }
    }
    return (R, O) => (o(), i(W, null, [
      b(Lt, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: O[2] || (O[2] = (K) => a("close"))
      }, {
        header: h(() => [...O[3] || (O[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", _h, [
            k.value.length ? (o(), i("section", kh, [
              s("div", bh, [
                O[4] || (O[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(k.value.length), 1)
              ]),
              s("div", $h, [
                (o(!0), i(W, null, ye(k.value, (K) => {
                  var ae;
                  return o(), i("article", {
                    key: K.hash || K.filename,
                    class: "issue-item"
                  }, [
                    s("div", Ch, [
                      s("div", xh, m(K.filename), 1),
                      s("div", Sh, [
                        K.hash ? (o(), i("span", Ih, "hash " + m(K.hash), 1)) : y("", !0),
                        K.workflows.length ? (o(), i("span", Eh, "used by " + m(K.workflows.join(", ")), 1)) : y("", !0),
                        s("span", null, m(K.criticality || "required"), 1)
                      ]),
                      K.hash && g.value[K.hash] ? (o(), i("p", Th, " Will add source: " + m(g.value[K.hash]), 1)) : (ae = K.source_candidates) != null && ae.length ? (o(), i("p", Mh, " Source candidate found in model index. ")) : y("", !0)
                    ]),
                    K.hash ? (o(), i("button", {
                      key: 0,
                      class: "issue-action",
                      disabled: f.value === K.hash || p.value,
                      onClick: (j) => x(K.hash)
                    }, m(U(K.hash)), 9, Ph)) : (o(), i("span", Rh, "Missing hash"))
                  ]);
                }), 128))
              ])
            ])) : y("", !0),
            $.value.length ? (o(), i("section", Dh, [
              s("div", Lh, [
                O[5] || (O[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m($.value.length), 1)
              ]),
              s("div", Nh, [
                (o(!0), i(W, null, ye($.value, (K) => (o(), i("article", {
                  key: K.name,
                  class: "issue-item"
                }, [
                  s("div", Uh, [
                    s("div", Oh, m(K.name), 1),
                    s("div", Ah, [
                      s("span", null, m(K.source), 1),
                      s("span", null, m(K.criticality), 1)
                    ]),
                    s("p", zh, m(K.reason), 1)
                  ]),
                  K.criticality === "required" ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: v.value === K.name,
                    onClick: (ae) => T(K.name)
                  }, m(v.value === K.name ? "Saving..." : "Mark Optional"), 9, Fh)) : (o(), i("span", Bh, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !k.value.length && !$.value.length ? (o(), i("div", Vh, " No reproducibility issues remain. ")) : y("", !0),
            w.value ? (o(), i("div", Wh, m(w.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          s("button", {
            class: "secondary-action",
            onClick: O[0] || (O[0] = (K) => a("close"))
          }, " Close "),
          S.value > 0 ? (o(), i("button", {
            key: 0,
            class: "primary-action",
            disabled: p.value,
            onClick: B
          }, m(p.value ? "Applying..." : `Apply Source Changes (${S.value})`), 9, Gh)) : (o(), i("button", {
            key: 1,
            class: "primary-action",
            onClick: O[1] || (O[1] = (K) => a("close"))
          }, " Done "))
        ]),
        _: 1
      }),
      u.value ? (o(), D(pc, {
        key: 0,
        model: u.value,
        "overlay-z-index": 10008,
        "defer-save": "",
        "action-label": "Stage Source",
        onClose: I,
        onSelected: P,
        onHashesComputed: N
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Ll = /* @__PURE__ */ Te(jh, [["__scopeId", "data-v-73fd708f"]]), Hh = { class: "health-section-header" }, qh = { class: "suggestions-content" }, Kh = { class: "suggestions-text" }, Jh = { style: { "margin-top": "var(--cg-space-3)" } }, Qh = {
  key: 1,
  class: "no-issues-text"
}, Yh = {
  key: 2,
  class: "no-issues-text"
}, Xh = /* @__PURE__ */ Se({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment", "refresh-status"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = _(!1), r = _(!1), c = _(!1), u = _(null), d = _(null), f = _(!1), { validateExport: v } = ft();
    function p() {
      l.value = !0;
    }
    function w() {
      l.value = !1, k("view-workflows");
    }
    function g() {
      l.value = !1, k("view-nodes");
    }
    const k = n, $ = _(!1), S = _(!1);
    function x() {
      S.value = !0, k("repair-environment");
    }
    function T() {
      S.value = !1;
    }
    function I() {
      l.value = !1;
    }
    const P = M(() => {
      const te = a.status.workflows.analyzed || [], V = te.filter(
        (fe) => fe.unresolved_models_count > 0 || fe.ambiguous_models_count > 0
      );
      return V.length === 0 && a.status.missing_models_count > 0 ? te.filter((fe) => fe.sync_state === "synced") : V;
    });
    function U() {
      const te = P.value;
      te.length !== 0 && ($.value = !0, k("repair-missing-models", te.map((V) => V.name)));
    }
    function N() {
      $.value = !1;
    }
    t({ resetRepairingState: N, resetRepairingEnvironmentState: T, closeDetailModal: I });
    const B = M(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), R = M(() => a.status.has_changes), O = M(() => {
      const te = a.status.git_changes;
      return te.nodes_added.length > 0 || te.nodes_removed.length > 0 || te.workflow_changes;
    }), K = M(() => a.status.has_changes || B.value), ae = M(() => {
      var te;
      return ((te = u.value) == null ? void 0 : te.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), j = M(
      () => ae.value.models_without_sources.length
    ), de = M(
      () => ae.value.nodes_without_provenance.length
    ), le = M(
      () => j.value + de.value
    ), H = M(
      () => le.value > 0
    ), F = M(() => {
      const te = [];
      if (j.value > 0 && te.push(`${j.value} model${j.value === 1 ? "" : "s"} missing download source`), de.value > 0) {
        const V = ae.value.nodes_without_provenance.filter((We) => We.criticality === "optional").length, fe = de.value - V;
        fe > 0 && te.push(`${fe} required node${fe === 1 ? "" : "s"} missing portable source`), V > 0 && te.push(`${V} optional node${V === 1 ? "" : "s"} missing portable source`);
      }
      return te;
    });
    async function Y() {
      f.value = !0, d.value = null;
      try {
        u.value = await v();
      } catch (te) {
        d.value = te instanceof Error ? te.message : "Failed to check readiness";
      } finally {
        f.value = !1;
      }
    }
    async function J() {
      await Y();
    }
    function ne() {
      k("refresh-status");
    }
    $t(
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
        a.setupState === "managed" && Y();
      },
      { immediate: !0 }
    );
    const me = M(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), Z = M(() => a.status.git_changes.has_other_changes), re = M(() => {
      var te;
      return ((te = a.status.workflows.analyzed) == null ? void 0 : te.filter((V) => V.status === "broken")) || [];
    }), Q = M(() => {
      var te;
      return ((te = a.status.workflows.analyzed) == null ? void 0 : te.filter(
        (V) => V.has_path_sync_issues && !V.has_issues
      )) || [];
    }), he = M(() => re.value.length > 0);
    function we(te) {
      const V = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const fe of V) {
        const We = te.match(fe);
        if (We != null && We[1])
          return We[1];
      }
      return null;
    }
    function Fe(te) {
      const V = te.map(we).filter((fe) => !!fe);
      return [...new Set(V)];
    }
    function Le(te) {
      if (te.length === 0) return "";
      if (te.length === 1) return ` (>= ${te[0]})`;
      const V = te.slice(0, 2).map((We) => `>= ${We}`).join(", "), fe = te.length > 2;
      return ` (${V}${fe ? ", ..." : ""})`;
    }
    function ke(te) {
      return te.replace(/uninstallable node mappings?/gi, (V) => V.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Pe(te) {
      const V = ke(te.issue_summary || "Has issues"), fe = /(?:>=|v?\d+\.\d+)/i.test(V), We = Fe(te.version_gated_guidance || []);
      return (te.nodes_version_gated_count || 0) > 0 && We.length > 0 && !fe ? `${te.name} — ${V} (needs ComfyUI ${We.map((Be) => `>= ${Be}`).join(", ")})` : `${te.name} — ${V}`;
    }
    const ge = M(() => re.value.reduce(
      (te, V) => te + (V.nodes_version_gated_count || 0),
      0
    )), be = M(() => {
      const te = re.value.flatMap(
        (V) => Fe(V.version_gated_guidance || [])
      );
      return [...new Set(te)];
    }), E = M(() => re.value.reduce(
      (te, V) => te + (V.nodes_uninstallable_count || 0),
      0
    )), z = M(() => {
      const te = [];
      return ge.value > 0 && te.push(
        `${ge.value} require newer ComfyUI${Le(be.value)}`
      ), E.value > 0 && te.push(`${E.value} need community packages`), te.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${te.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ue = M(() => he.value || Q.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ee = M(() => ue.value || H.value || !!d.value), Ce = M(() => {
      const te = [];
      return a.status.workflows.new.length > 0 && te.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && te.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && te.push(`${a.status.workflows.deleted.length} deleted`), te.length > 0 ? `${te.join(", ")} workflow${te.length === 1 && !te[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ie = M(() => {
      var fe, We;
      const te = [], V = a.status.comparison;
      return (fe = V.missing_nodes) != null && fe.length && te.push(`${V.missing_nodes.length} missing node${V.missing_nodes.length === 1 ? "" : "s"}`), (We = V.extra_nodes) != null && We.length && te.push(`${V.extra_nodes.length} untracked node${V.extra_nodes.length === 1 ? "" : "s"}`), te.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${te.join(" and ")}.`;
    }), Oe = M(() => {
      var fe, We;
      const te = [], V = a.status.comparison;
      return (fe = V.extra_nodes) != null && fe.length && (V.extra_nodes.slice(0, 3).forEach((Be) => {
        te.push(`Untracked: ${Be}`);
      }), V.extra_nodes.length > 3 && te.push(`...and ${V.extra_nodes.length - 3} more untracked`)), (We = V.missing_nodes) != null && We.length && (V.missing_nodes.slice(0, 3).forEach((Be) => {
        te.push(`Missing: ${Be}`);
      }), V.missing_nodes.length > 3 && te.push(`...and ${V.missing_nodes.length - 3} more missing`)), te;
    });
    return (te, V) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (o(), D(gs, {
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
                onClick: V[0] || (V[0] = (fe) => te.$emit("start-setup"))
              }, {
                default: h(() => [...V[15] || (V[15] = [
                  C(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (o(), D(gs, {
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
                onClick: V[1] || (V[1] = (fe) => te.$emit("view-environments"))
              }, {
                default: h(() => [...V[16] || (V[16] = [
                  C(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (o(), D(gs, {
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
                onClick: V[2] || (V[2] = (fe) => te.$emit("create-environment"))
              }, {
                default: h(() => [...V[17] || (V[17] = [
                  C(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: V[4] || (V[4] = (fe) => r.value = !0),
            onMouseleave: V[5] || (V[5] = (fe) => r.value = !1)
          }, [
            s("div", Hh, [
              b(_s, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...V[18] || (V[18] = [
                  C(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(qd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (o(), D(Me, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...V[19] || (V[19] = [
                      C(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(nf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, vs({
              left: h(() => [
                e.status.workflows.new.length ? (o(), D(Ls, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (o(), D(Ls, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (o(), D(Ls, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(Ls, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: B.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (o(), D(Ls, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), D(Ls, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (o(), D(Ls, {
                  key: 2,
                  icon: "●",
                  count: me.value,
                  label: me.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                Z.value ? (o(), D(Ls, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                R.value && !O.value && !Z.value ? (o(), D(Ls, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                R.value ? y("", !0) : (o(), D(Ls, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              K.value ? {
                name: "footer",
                fn: h(() => [
                  V[21] || (V[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", qh, [
                    s("span", Kh, m(Ce.value), 1),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: V[3] || (V[3] = (fe) => te.$emit("commit-changes"))
                    }, {
                      default: h(() => [...V[20] || (V[20] = [
                        C(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (o(), D(gs, {
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
                onClick: V[6] || (V[6] = (fe) => te.$emit("create-branch"))
              }, {
                default: h(() => [...V[22] || (V[22] = [
                  C(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Jh, [
            b(_s, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...V[23] || (V[23] = [
                C(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            Ee.value ? (o(), i(W, { key: 0 }, [
              re.value.length > 0 ? (o(), D(gs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${re.value.length} workflow${re.value.length === 1 ? "" : "s"} can't run`,
                description: z.value,
                items: re.value.map(Pe)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[7] || (V[7] = (fe) => te.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[24] || (V[24] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              Q.value.length > 0 ? (o(), D(gs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${Q.value.length} workflow${Q.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: Q.value.map((fe) => `${fe.name} — ${fe.models_needing_path_sync_count} model path${fe.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[8] || (V[8] = (fe) => te.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[25] || (V[25] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !he.value ? (o(), D(gs, {
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
                    disabled: $.value,
                    onClick: U
                  }, {
                    default: h(() => [
                      C(m($.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: V[9] || (V[9] = (fe) => te.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[26] || (V[26] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (o(), D(gs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Ie.value,
                items: Oe.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: p
                  }, {
                    default: h(() => [...V[27] || (V[27] = [
                      C(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[10] || (V[10] = (fe) => te.$emit("view-nodes"))
                  }, {
                    default: h(() => [...V[28] || (V[28] = [
                      C(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (o(), D(gs, {
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
                    onClick: V[11] || (V[11] = (fe) => te.$emit("view-nodes"))
                  }, {
                    default: h(() => [...V[29] || (V[29] = [
                      C(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              H.value ? (o(), D(gs, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: F.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[12] || (V[12] = (fe) => c.value = !0)
                  }, {
                    default: h(() => [...V[30] || (V[30] = [
                      C(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (o(), D(gs, {
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
                    loading: f.value,
                    onClick: Y
                  }, {
                    default: h(() => [...V[31] || (V[31] = [
                      C(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : K.value ? (o(), i("span", Qh, "No issues")) : (o(), i("span", Yh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(Jv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: V[13] || (V[13] = (fe) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: x
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (o(), D(Ll, {
        key: 0,
        warnings: u.value.warnings,
        onClose: V[14] || (V[14] = (fe) => c.value = !1),
        onRevalidate: J,
        onApplied: ne
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Zh = /* @__PURE__ */ Te(Xh, [["__scopeId", "data-v-bcaebf00"]]);
async function Bo(e, t) {
  const n = await Qs(e, t);
  if (!n.ok) {
    const a = await n.json().catch(() => ({}));
    throw new Error(a.error || a.message || `Request failed: ${n.status}`);
  }
  return n.json();
}
function ey() {
  async function e() {
    try {
      return await Bo("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Bo("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function n() {
    await Bo("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Bo("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: n,
    kill: a
  };
}
const ty = {
  key: 0,
  class: "base-title-count"
}, sy = /* @__PURE__ */ Se({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, n) => (o(), D(El(`h${e.level}`), {
      class: Ve(["base-title", e.variant])
    }, {
      default: h(() => [
        rt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", ty, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _n = /* @__PURE__ */ Te(sy, [["__scopeId", "data-v-5a01561d"]]), ny = ["value", "disabled"], oy = {
  key: 0,
  value: "",
  disabled: ""
}, ay = ["value"], ly = {
  key: 0,
  class: "base-select-error"
}, iy = /* @__PURE__ */ Se({
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
    function n(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (o(), i("div", {
      class: Ve(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ve(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (o(), i("option", oy, m(e.placeholder), 1)) : y("", !0),
        (o(!0), i(W, null, ye(e.options, (r) => (o(), i("option", {
          key: t(r),
          value: t(r)
        }, m(n(r)), 9, ay))), 128))
      ], 42, ny),
      e.error ? (o(), i("span", ly, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Qo = /* @__PURE__ */ Te(iy, [["__scopeId", "data-v-4996bfe0"]]), ry = { class: "popover-header" }, cy = { class: "popover-title" }, uy = { class: "popover-content" }, dy = {
  key: 0,
  class: "popover-actions"
}, my = /* @__PURE__ */ Se({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => (o(), D(cs, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Wt({ zIndex: e.overlayZIndex }),
        onClick: n[2] || (n[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Wt({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = Ct(() => {
          }, ["stop"]))
        }, [
          s("div", ry, [
            s("h4", cy, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", uy, [
            rt(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (o(), i("div", dy, [
            rt(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ Te(my, [["__scopeId", "data-v-7c1f5547"]]), fy = { class: "detail-section" }, vy = {
  key: 0,
  class: "empty-message"
}, py = { class: "model-header" }, gy = { class: "model-name" }, hy = { class: "model-details" }, yy = { class: "model-row" }, wy = { class: "model-row" }, _y = { class: "label" }, ky = {
  key: 0,
  class: "model-row model-row-nodes"
}, by = { class: "node-list" }, $y = ["onClick"], Cy = {
  key: 1,
  class: "model-row"
}, xy = { class: "value" }, Sy = {
  key: 2,
  class: "model-row"
}, Iy = { class: "value error" }, Ey = {
  key: 0,
  class: "model-actions"
}, Ty = { class: "detail-section" }, My = {
  key: 0,
  class: "empty-message"
}, Py = { class: "node-content" }, Ry = { class: "node-main" }, Dy = { class: "node-name" }, Ly = { class: "node-badge" }, Ny = {
  key: 0,
  class: "node-version"
}, Uy = ["onClick"], Oy = {
  key: 2,
  class: "node-install-queued"
}, Ay = {
  key: 0,
  class: "node-guidance"
}, zy = { class: "details-footer" }, Fy = { class: "details-footer-actions" }, By = /* @__PURE__ */ Se({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ft(), d = _(null), f = _(!1), v = _(null), p = _(!1), w = _({}), g = _(!1), k = _(/* @__PURE__ */ new Set()), $ = _(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(le) {
      switch (le) {
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
    function T(le) {
      switch (le) {
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
    function I(le) {
      switch (le) {
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
    function P(le) {
      switch (le) {
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
    function U(le) {
      switch (le) {
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
    function N(le) {
      if (!le.loaded_by || le.loaded_by.length === 0) return [];
      const H = le.hash || le.filename;
      return k.value.has(H) ? le.loaded_by : le.loaded_by.slice(0, 3);
    }
    function B(le) {
      return k.value.has(le);
    }
    function R(le) {
      k.value.has(le) ? k.value.delete(le) : k.value.add(le), k.value = new Set(k.value);
    }
    async function O() {
      f.value = !0, v.value = null;
      try {
        d.value = await l(n.workflowName);
      } catch (le) {
        v.value = le instanceof Error ? le.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function K(le, H) {
      w.value[le] = H, p.value = !0;
    }
    async function ae(le) {
      try {
        await c(le);
      } catch (H) {
        v.value = H instanceof Error ? H.message : "Failed to open file location";
      }
    }
    async function j(le) {
      if (le.package_id)
        try {
          const H = le.latest_version || "latest";
          await u({
            id: le.package_id,
            version: H,
            selected_version: H,
            mode: "remote",
            channel: "default"
          }), $.value.add(le.package_id);
        } catch (H) {
          v.value = H instanceof Error ? H.message : "Failed to queue node install";
        }
    }
    async function de() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [le, H] of Object.entries(w.value))
          await r(n.workflowName, le, H);
        a("refresh"), a("close");
      } catch (le) {
        v.value = le instanceof Error ? le.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return mt(O), (le, H) => (o(), i(W, null, [
      b(Lt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: H[5] || (H[5] = (F) => a("close"))
      }, {
        body: h(() => [
          d.value ? (o(), i(W, { key: 0 }, [
            s("section", fy, [
              b(_n, { variant: "section" }, {
                default: h(() => [
                  C("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (o(), i("div", vy, " No models used in this workflow ")) : y("", !0),
              (o(!0), i(W, null, ye(d.value.models, (F) => {
                var Y;
                return o(), i("div", {
                  key: F.hash || F.filename,
                  class: "model-card"
                }, [
                  s("div", py, [
                    H[7] || (H[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", gy, m(F.filename), 1)
                  ]),
                  s("div", hy, [
                    s("div", yy, [
                      H[8] || (H[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ve(["value", x(F.status)])
                      }, m(T(F.status)), 3)
                    ]),
                    s("div", wy, [
                      s("span", _y, [
                        H[9] || (H[9] = C(" Importance: ", -1)),
                        b(uc, {
                          size: 14,
                          title: "About importance levels",
                          onClick: H[0] || (H[0] = (J) => g.value = !0)
                        })
                      ]),
                      b(Qo, {
                        "model-value": w.value[F.filename] || F.importance,
                        options: S,
                        "onUpdate:modelValue": (J) => K(F.filename, J)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    F.loaded_by && F.loaded_by.length > 0 ? (o(), i("div", ky, [
                      H[10] || (H[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", by, [
                        (o(!0), i(W, null, ye(N(F), (J, ne) => (o(), i("div", {
                          key: `${J.node_id}-${ne}`,
                          class: "node-reference"
                        }, m(J.node_type) + " (Node #" + m(J.node_id) + ") ", 1))), 128)),
                        F.loaded_by.length > 3 ? (o(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (J) => R(F.hash || F.filename)
                        }, m(B(F.hash || F.filename) ? "▼ Show less" : `▶ View all (${F.loaded_by.length})`), 9, $y)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    F.size_mb ? (o(), i("div", Cy, [
                      H[11] || (H[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", xy, m(F.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    F.has_category_mismatch ? (o(), i("div", Sy, [
                      H[14] || (H[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", Iy, [
                        H[12] || (H[12] = C(" In ", -1)),
                        s("code", null, m(F.actual_category) + "/", 1),
                        H[13] || (H[13] = C(" but loader needs ", -1)),
                        s("code", null, m((Y = F.expected_categories) == null ? void 0 : Y[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  F.status !== "available" ? (o(), i("div", Ey, [
                    F.status === "downloadable" ? (o(), D(Ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: H[1] || (H[1] = (J) => a("resolve"))
                    }, {
                      default: h(() => [...H[15] || (H[15] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    })) : F.status === "category_mismatch" && F.file_path ? (o(), D(Ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => ae(F.file_path)
                    }, {
                      default: h(() => [...H[16] || (H[16] = [
                        C(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : F.status !== "path_mismatch" ? (o(), D(Ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: H[2] || (H[2] = (J) => a("resolve"))
                    }, {
                      default: h(() => [...H[17] || (H[17] = [
                        C(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", Ty, [
              b(_n, { variant: "section" }, {
                default: h(() => [
                  C("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (o(), i("div", My, " No custom nodes used in this workflow ")) : y("", !0),
              (o(!0), i(W, null, ye(d.value.nodes, (F, Y) => (o(), i("div", {
                key: `${F.name}-${F.status}-${Y}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Ve(["node-status", I(F.status)])
                }, m(P(F.status)), 3),
                s("div", Py, [
                  s("div", Ry, [
                    s("span", Dy, m(F.name), 1),
                    s("span", Ly, m(U(F.status)), 1),
                    F.version ? (o(), i("span", Ny, "v" + m(F.version), 1)) : y("", !0),
                    F.status === "uninstallable" && F.package_id && !$.value.has(F.package_id) ? (o(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (J) => j(F)
                    }, " Install ", 8, Uy)) : F.status === "uninstallable" && F.package_id && $.value.has(F.package_id) ? (o(), i("span", Oy, " Queued ")) : y("", !0)
                  ]),
                  F.guidance ? (o(), i("div", Ay, m(F.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", zy, [
            b(Ue, {
              variant: "secondary",
              onClick: H[3] || (H[3] = (F) => a("resolve"))
            }, {
              default: h(() => [...H[18] || (H[18] = [
                C(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Fy, [
              b(Ue, {
                variant: "secondary",
                onClick: H[4] || (H[4] = (F) => a("close"))
              }, {
                default: h(() => [...H[19] || (H[19] = [
                  C(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (o(), D(Ue, {
                key: 0,
                variant: "primary",
                onClick: de
              }, {
                default: h(() => [...H[20] || (H[20] = [
                  C(" Save Changes ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(Cs, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: H[6] || (H[6] = (F) => g.value = !1)
      }, {
        content: h(() => [...H[21] || (H[21] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              C(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              C(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              C(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vy = /* @__PURE__ */ Te(By, [["__scopeId", "data-v-00cf34e6"]]), vt = Cn({
  items: [],
  status: "idle"
});
let As = null;
function gc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ja(e) {
  return vt.items.find((t) => t.id === e);
}
async function Mn() {
  if (vt.status === "downloading") return;
  const e = vt.items.find((t) => t.status === "queued");
  if (!e) {
    vt.status = "idle";
    return;
  }
  vt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Wy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    vt.status = "idle", Mn();
  }
}
async function Wy(e) {
  return new Promise((t, n) => {
    As && (As.close(), As = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    As = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const f = 2e3, v = window.setInterval(() => {
      d || Date.now() - u > f && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(v);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, u = Date.now();
            const k = u, $ = (k - r) / 1e3, S = e.downloaded - c;
            if (S > 0 && $ > 0)
              if (e.speed = S / $, r = k, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const x = e.size - e.downloaded;
                e.eta = x / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), As = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), As = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), As = null, d || n(new Error("Connection lost"));
    };
  });
}
async function Gy() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const n of t.pending_downloads) {
      if (vt.items.some((l) => l.url === n.url && l.filename === n.filename))
        continue;
      const a = {
        id: gc(),
        workflow: n.workflow,
        filename: n.filename,
        url: n.url,
        targetPath: n.target_path,
        size: n.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      vt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Kn() {
  function e(S) {
    for (const x of S) {
      if (vt.items.some(
        (P) => P.url === x.url && P.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const I = {
        id: gc(),
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
      vt.items.push(I);
    }
    vt.status === "idle" && Mn();
  }
  async function t(S) {
    const x = Ja(S);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        As && (As.close(), As = null), x.status = "failed", x.error = "Cancelled by user", vt.status = "idle", Mn();
      } else if (x.status === "queued") {
        const T = vt.items.findIndex((I) => I.id === S);
        T >= 0 && vt.items.splice(T, 1);
      }
    }
  }
  function n(S) {
    const x = Ja(S);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, vt.status === "idle" && Mn());
  }
  function a(S) {
    const x = Ja(S);
    !x || x.status !== "paused" || (x.status = "queued", vt.status === "idle" && Mn());
  }
  function l() {
    const S = vt.items.filter((x) => x.status === "paused");
    for (const x of S)
      x.status = "queued";
    vt.status === "idle" && Mn();
  }
  function r(S) {
    const x = vt.items.findIndex((T) => T.id === S);
    x >= 0 && ["completed", "failed", "paused"].includes(vt.items[x].status) && vt.items.splice(x, 1);
  }
  function c() {
    vt.items = vt.items.filter((S) => S.status !== "completed");
  }
  function u() {
    vt.items = vt.items.filter((S) => S.status !== "failed");
  }
  const d = M(
    () => vt.items.find((S) => S.status === "downloading")
  ), f = M(
    () => vt.items.filter((S) => S.status === "queued")
  ), v = M(
    () => vt.items.filter((S) => S.status === "completed")
  ), p = M(
    () => vt.items.filter((S) => S.status === "failed")
  ), w = M(
    () => vt.items.filter((S) => S.status === "paused")
  ), g = M(() => vt.items.length > 0), k = M(
    () => vt.items.filter((S) => S.status === "queued" || S.status === "downloading").length
  ), $ = M(
    () => vt.items.some((S) => S.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Xo(vt),
    // Computed
    currentDownload: d,
    queuedItems: f,
    completedItems: v,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: k,
    hasPaused: $,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: n,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Gy
  };
}
function hc() {
  const e = _(null), t = _(null), n = _([]), a = _([]), l = _(!1), r = _(null);
  async function c(T, I) {
    const P = await Qs(T, I);
    if (!P.ok) {
      const U = await P.json().catch(() => ({})), N = U.error || U.message || `Request failed: ${P.status}`;
      throw new Error(N);
    }
    return P.json();
  }
  async function u(T) {
    l.value = !0, r.value = null;
    try {
      let I;
      return Zn() || (I = await c(
        `/v2/comfygit/workflow/${T}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), I.nodes.version_gated = I.nodes.version_gated || [], I.nodes.uninstallable = I.nodes.uninstallable || [], I.node_guidance = I.node_guidance || {}, I.package_aliases = I.package_aliases || {}, e.value = I, I;
    } catch (I) {
      const P = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = P, I;
    } finally {
      l.value = !1;
    }
  }
  async function d(T, I, P, U) {
    l.value = !0, r.value = null;
    try {
      let N;
      if (!Zn()) {
        const B = Object.fromEntries(I), R = Object.fromEntries(P), O = U ? Array.from(U) : [];
        N = await c(
          `/v2/comfygit/workflow/${T}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: B,
              model_choices: R,
              skipped_packages: O
            })
          }
        );
      }
      return t.value = N, N;
    } catch (N) {
      const B = N instanceof Error ? N.message : "Unknown error occurred";
      throw r.value = B, N;
    } finally {
      l.value = !1;
    }
  }
  async function f(T, I = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Zn() || (P = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: I })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const U = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = U, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(T, I = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Zn() || (P = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: I })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const U = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = U, P;
    } finally {
      l.value = !1;
    }
  }
  const p = Cn({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: [],
    nodesMarkedOptional: [],
    nodesMapped: [],
    modelsMarkedOptional: [],
    modelDownloadIntentsChanged: [],
    modelPathsSynced: 0
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.nodesMarkedOptional = [], p.nodesMapped = [], p.modelsMarkedOptional = [], p.modelDownloadIntentsChanged = [], p.modelPathsSynced = 0, p.dependencyReviews = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(T) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Zn(), await k(T);
    } catch (I) {
      const P = I instanceof Error ? I.message : "Failed to install nodes";
      throw p.installError = P, I;
    }
  }
  async function k(T) {
    var U, N, B;
    const I = await c(
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
      const R = new Map(((U = I.failed) == null ? void 0 : U.map((K) => [K.node_id, K.error])) || []), O = new Map((I.dependency_review_required || []).map((K) => [K.node_id, K]));
      for (let K = 0; K < p.nodesToInstall.length; K++) {
        const ae = p.nodesToInstall[K], j = R.get(ae), de = O.get(ae);
        p.nodeInstallProgress.completedNodes.push({
          node_id: ae,
          success: !j && !de,
          error: j || (de == null ? void 0 : de.error),
          dependency_review: de == null ? void 0 : de.dependency_review
        });
      }
    }
    p.nodesInstalled = I.nodes_installed, p.dependencyReviews = I.dependency_review_required || [], p.needsRestart = I.nodes_installed.length > 0;
    const P = (((N = I.failed) == null ? void 0 : N.length) || 0) + (((B = I.dependency_review_required) == null ? void 0 : B.length) || 0);
    return P > 0 && (p.installError = `${P} package(s) need attention`), I;
  }
  async function $(T, I, P) {
    w(), p.phase = "resolving", r.value = null;
    const U = Object.fromEntries(I), N = Object.fromEntries(P);
    try {
      const B = await fetch(`/v2/comfygit/workflow/${T}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: U,
          model_choices: N
        })
      });
      if (!B.ok)
        throw new Error(`Request failed: ${B.status}`);
      if (!B.body)
        throw new Error("No response body");
      const R = B.body.getReader(), O = new TextDecoder();
      let K = "";
      for (; ; ) {
        const { done: ae, value: j } = await R.read();
        if (ae) break;
        K += O.decode(j, { stream: !0 });
        const de = K.split(`

`);
        K = de.pop() || "";
        for (const le of de) {
          if (!le.trim()) continue;
          const H = le.split(`
`);
          let F = "", Y = "";
          for (const J of H)
            J.startsWith("event: ") ? F = J.slice(7) : J.startsWith("data: ") && (Y = J.slice(6));
          if (Y)
            try {
              const J = JSON.parse(Y);
              S(F, J);
            } catch (J) {
              console.warn("Failed to parse SSE event:", J);
            }
        }
      }
    } catch (B) {
      const R = B instanceof Error ? B.message : "Unknown error occurred";
      throw r.value = R, p.error = R, p.phase = "error", B;
    }
  }
  function S(T, I) {
    switch (T) {
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
        p.nodesToInstall = I.nodes_to_install || [], p.nodesMarkedOptional = I.nodes_marked_optional || [], p.nodesMapped = I.nodes_mapped || [], p.modelsMarkedOptional = I.models_marked_optional || [], p.modelDownloadIntentsChanged = I.model_download_intents_changed || [], p.modelPathsSynced = I.model_paths_synced || 0, I.download_results && (p.completedFiles = I.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = I.message, p.phase = "error", r.value = I.message;
        break;
    }
  }
  function x(T, I) {
    const { addToQueue: P } = Kn(), U = I.filter((N) => N.url && N.target_path).map((N) => ({
      workflow: T,
      filename: N.filename,
      url: N.url,
      targetPath: N.target_path,
      size: N.size || 0,
      type: "model"
    }));
    return U.length > 0 && P(U), U.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: n,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: $,
    installNodes: g,
    searchNodes: f,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: x
  };
}
const jy = { class: "resolution-stepper" }, Hy = { class: "stepper-header" }, qy = ["onClick"], Ky = {
  key: 0,
  class: "step-icon"
}, Jy = {
  key: 1,
  class: "step-number"
}, Qy = { class: "step-label" }, Yy = {
  key: 0,
  class: "step-connector"
}, Xy = { class: "stepper-content" }, Zy = /* @__PURE__ */ Se({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l(f) {
      var v;
      if ((v = n.stepStats) != null && v[f]) {
        const p = n.stepStats[f];
        return p.total > 0 && p.resolved === p.total;
      }
      return n.completedSteps.includes(f);
    }
    function r(f) {
      var v;
      if ((v = n.stepStats) != null && v[f]) {
        const p = n.stepStats[f];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function c(f) {
      return l(f) ? "state-complete" : r(f) ? "state-partial" : "state-pending";
    }
    function u(f) {
      return !1;
    }
    function d(f) {
      a("step-change", f);
    }
    return (f, v) => (o(), i("div", jy, [
      s("div", Hy, [
        (o(!0), i(W, null, ye(e.steps, (p, w) => (o(), i("div", {
          key: p.id,
          class: Ve(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (g) => d(p.id)
        }, [
          s("div", {
            class: Ve(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (o(), i("span", Ky, "✓")) : (o(), i("span", Jy, m(w + 1), 1))
          ], 2),
          s("div", Qy, m(p.label), 1),
          w < e.steps.length - 1 ? (o(), i("div", Yy)) : y("", !0)
        ], 10, qy))), 128))
      ]),
      s("div", Xy, [
        rt(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), e1 = /* @__PURE__ */ Te(Zy, [["__scopeId", "data-v-2a7b3af8"]]), t1 = { class: "item-body" }, s1 = {
  key: 0,
  class: "resolved-state"
}, n1 = { class: "resolved-message" }, o1 = {
  key: 1,
  class: "unresolved"
}, a1 = {
  key: 0,
  class: "installed-packs-section"
}, l1 = { class: "installed-packs-list" }, i1 = ["onClick"], r1 = { class: "installed-pack-name" }, c1 = { class: "installed-pack-source" }, u1 = { class: "action-buttons" }, d1 = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = M(() => !!n.choice), r = M(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), c = M(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    }), u = M(() => n.installedNodePacks || []), d = M(() => {
      var v, p;
      switch (r.value) {
        case "install":
          return ((v = n.choice) == null ? void 0 : v.install_source) === "git" ? c.value ? `Will install ${c.value} from GitHub` : "Will install from GitHub" : ((p = n.choice) == null ? void 0 : p.install_source) === "registry" ? c.value ? `Will install ${c.value} from Registry` : "Will install from Registry" : c.value ? `Will install ${c.value}` : "Will install selected package";
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
    function f(v) {
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
    return (v, p) => (o(), i("div", {
      class: Ve(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: l.value }])
    }, [
      s("div", t1, [
        l.value ? (o(), i("div", s1, [
          s("span", n1, m(d.value), 1),
          b(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[4] || (p[4] = [
              C(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : (o(), i("div", o1, [
          u.value.length > 0 ? (o(), i("div", a1, [
            p[5] || (p[5] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", l1, [
              (o(!0), i(W, null, ye(u.value, (w) => (o(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", r1, m(w.package_id), 1),
                s("span", c1, m(f(w.source)), 1)
              ], 8, i1))), 128))
            ])
          ])) : y("", !0),
          s("div", u1, [
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[6] || (p[6] = [
                C(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[7] || (p[7] = [
                C(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...p[8] || (p[8] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), m1 = /* @__PURE__ */ Te(d1, [["__scopeId", "data-v-4338b305"]]), f1 = { class: "item-navigator" }, v1 = { class: "nav-item-info" }, p1 = ["title"], g1 = { class: "nav-controls" }, h1 = { class: "nav-arrows" }, y1 = ["disabled"], w1 = ["disabled"], _1 = { class: "nav-position" }, k1 = /* @__PURE__ */ Se({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", f1, [
      s("div", v1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, p1)
      ]),
      s("div", g1, [
        s("div", h1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, y1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => n("next")),
            title: "Next item"
          }, " → ", 8, w1)
        ]),
        s("span", _1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), yc = /* @__PURE__ */ Te(k1, [["__scopeId", "data-v-74af7920"]]), b1 = { class: "node-resolution-step" }, $1 = {
  key: 0,
  class: "auto-resolved-section"
}, C1 = { class: "section-header" }, x1 = { class: "stat-badge" }, S1 = { class: "resolved-packages-list" }, I1 = { class: "package-info" }, E1 = { class: "package-id" }, T1 = { class: "node-count" }, M1 = { class: "package-actions" }, P1 = {
  key: 0,
  class: "status-badge install"
}, R1 = {
  key: 1,
  class: "status-badge skip"
}, D1 = ["onClick"], L1 = {
  key: 1,
  class: "section-divider"
}, N1 = { class: "step-header" }, U1 = { class: "stat-badge" }, O1 = {
  key: 1,
  class: "step-body"
}, A1 = {
  key: 3,
  class: "empty-state"
}, z1 = { class: "node-modal-body" }, F1 = { class: "node-search-results-container" }, B1 = {
  key: 0,
  class: "node-search-results"
}, V1 = { class: "node-result-header" }, W1 = { class: "node-result-title" }, G1 = { class: "node-result-package-id" }, j1 = {
  key: 0,
  class: "node-result-display-name"
}, H1 = {
  key: 0,
  class: "node-result-stats",
  "aria-label": "Package popularity"
}, q1 = {
  key: 0,
  class: "node-result-stat"
}, K1 = {
  key: 1,
  class: "node-result-stat"
}, J1 = {
  key: 0,
  class: "node-result-description"
}, Q1 = { class: "node-result-actions" }, Y1 = ["onClick"], X1 = ["onClick"], Z1 = {
  key: 1,
  class: "node-empty-state"
}, ew = {
  key: 2,
  class: "node-empty-state"
}, tw = {
  key: 3,
  class: "node-empty-state"
}, sw = { class: "node-manual-entry-modal" }, nw = { class: "node-modal-body" }, ow = { class: "node-modal-actions" }, aw = /* @__PURE__ */ Se({
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
    const n = e, a = t, { searchNodes: l } = hc(), r = _(0), c = _(!1), u = _(!1), d = _(""), f = _(""), v = _([]), p = _(!1), w = _(!1);
    function g() {
      w.value && ae(), w.value = !1;
    }
    const k = M(() => n.nodes[r.value]), $ = M(() => n.nodes.filter((Z) => n.nodeChoices.has(Z.node_type)).length), S = M(() => n.autoResolvedPackages.filter((Z) => !n.skippedPackages.has(Z.package_id)).length);
    function x(Z) {
      return n.skippedPackages.has(Z);
    }
    function T(Z) {
      a("package-skip", Z);
    }
    function I(Z) {
      Z >= 0 && Z < n.nodes.length && (r.value = Z);
    }
    function P() {
      var Z;
      for (let re = r.value + 1; re < n.nodes.length; re++) {
        const Q = n.nodes[re];
        if (!((Z = n.nodeChoices) != null && Z.has(Q.node_type))) {
          I(re);
          return;
        }
      }
    }
    function U() {
      k.value && (a("mark-optional", k.value.node_type), Kt(() => P()));
    }
    function N() {
      k.value && (a("skip", k.value.node_type), Kt(() => P()));
    }
    function B() {
      k.value && a("clear-choice", k.value.node_type);
    }
    function R() {
      k.value && (d.value = k.value.node_type, v.value = [], c.value = !0, H(d.value));
    }
    function O() {
      f.value = "", u.value = !0;
    }
    function K(Z) {
      k.value && (a("installed-pack-selected", k.value.node_type, Z), Kt(() => P()));
    }
    function ae() {
      c.value = !1, d.value = "", v.value = [];
    }
    function j() {
      u.value = !1, f.value = "";
    }
    let de = null;
    function le() {
      de && clearTimeout(de), de = setTimeout(() => {
        H(d.value);
      }, 300);
    }
    async function H(Z) {
      if (!Z.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(Z, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function F(Z) {
      k.value && (a("manual-entry", k.value.node_type, Z.package_id, {
        install_source: "registry",
        version: Z.registry_version || null
      }), ae(), Kt(() => P()));
    }
    function Y(Z) {
      !k.value || !Z.repository || (a("manual-entry", k.value.node_type, Z.package_id, {
        install_source: "git",
        repository: Z.repository
      }), ae(), Kt(() => P()));
    }
    function J(Z) {
      return !!Z.github_stars || !!Z.downloads;
    }
    function ne(Z) {
      return Z ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: Z >= 1e3 ? 1 : 0
      }).format(Z) : "";
    }
    function me() {
      !k.value || !f.value.trim() || (a("manual-entry", k.value.node_type, f.value.trim()), j(), Kt(() => P()));
    }
    return (Z, re) => {
      var Q, he;
      return o(), i("div", b1, [
        e.autoResolvedPackages.length > 0 ? (o(), i("div", $1, [
          s("div", C1, [
            re[6] || (re[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", x1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", S1, [
            (o(!0), i(W, null, ye(e.autoResolvedPackages, (we) => (o(), i("div", {
              key: we.package_id,
              class: "resolved-package-item"
            }, [
              s("div", I1, [
                s("code", E1, m(we.package_id), 1),
                s("span", T1, m(we.node_types_count) + " node type" + m(we.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", M1, [
                x(we.package_id) ? (o(), i("span", R1, " SKIPPED ")) : (o(), i("span", P1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (Fe) => T(we.package_id)
                }, m(x(we.package_id) ? "Include" : "Skip"), 9, D1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (o(), i("div", L1)) : y("", !0),
        e.nodes.length > 0 ? (o(), i(W, { key: 2 }, [
          s("div", N1, [
            re[7] || (re[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", U1, m($.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          k.value ? (o(), D(yc, {
            key: 0,
            "item-name": k.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: re[0] || (re[0] = (we) => I(r.value - 1)),
            onNext: re[1] || (re[1] = (we) => I(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          k.value ? (o(), i("div", O1, [
            b(m1, {
              "node-type": k.value.node_type,
              "has-multiple-options": !!((Q = k.value.options) != null && Q.length),
              choice: (he = e.nodeChoices) == null ? void 0 : he.get(k.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: U,
              onSkip: N,
              onManualEntry: O,
              onSearch: R,
              onClearChoice: B,
              onInstalledPackSelected: K
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (o(), i("div", A1, [...re[8] || (re[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (o(), D(cs, { to: "body" }, [
          c.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: re[4] || (re[4] = Ct((we) => w.value = !0, ["self"])),
            onMouseup: Ct(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: re[3] || (re[3] = (we) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                re[9] || (re[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ae
                }, "✕")
              ]),
              s("div", z1, [
                b(Nt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": re[2] || (re[2] = (we) => d.value = we),
                  placeholder: "Search registry by node type or package name...",
                  onInput: le
                }, null, 8, ["modelValue"]),
                s("div", F1, [
                  v.value.length > 0 ? (o(), i("div", B1, [
                    (o(!0), i(W, null, ye(v.value, (we) => (o(), i("div", {
                      key: we.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", V1, [
                        s("div", W1, [
                          s("code", G1, m(we.package_id), 1),
                          we.display_name && we.display_name !== we.package_id ? (o(), i("span", j1, m(we.display_name), 1)) : y("", !0)
                        ]),
                        J(we) ? (o(), i("div", H1, [
                          we.github_stars ? (o(), i("span", q1, " ★ " + m(ne(we.github_stars)), 1)) : y("", !0),
                          we.downloads ? (o(), i("span", K1, " ↓ " + m(ne(we.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      we.description ? (o(), i("div", J1, m(we.description), 1)) : y("", !0),
                      s("div", Q1, [
                        we.can_install_registry ? (o(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (Fe) => F(we)
                        }, " Install from Registry ", 8, Y1)) : y("", !0),
                        we.can_install_git ? (o(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (Fe) => Y(we)
                        }, " Install from GitHub ", 8, X1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : p.value ? (o(), i("div", Z1, "Searching...")) : d.value ? (o(), i("div", ew, 'No packages found matching "' + m(d.value) + '"', 1)) : (o(), i("div", tw, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (o(), D(cs, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ct(j, ["self"])
          }, [
            s("div", sw, [
              s("div", { class: "node-modal-header" }, [
                re[10] || (re[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: j
                }, "✕")
              ]),
              s("div", nw, [
                b(Nt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": re[5] || (re[5] = (we) => f.value = we),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", ow, [
                  b(Ue, {
                    variant: "secondary",
                    onClick: j
                  }, {
                    default: h(() => [...re[11] || (re[11] = [
                      C("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ue, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: me
                  }, {
                    default: h(() => [...re[12] || (re[12] = [
                      C(" Add Package ", -1)
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
}), lw = /* @__PURE__ */ Te(aw, [["__scopeId", "data-v-a85bb4b7"]]), iw = /* @__PURE__ */ Se({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = M(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = M(() => `confidence-${n.value}`), l = M(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (r, c) => (o(), i("span", {
      class: Ve(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), rw = /* @__PURE__ */ Te(iw, [["__scopeId", "data-v-17ec4b80"]]), cw = { class: "node-info" }, uw = { class: "node-info-text" }, dw = { class: "item-body" }, mw = {
  key: 0,
  class: "resolved-state"
}, fw = {
  key: 1,
  class: "multiple-options"
}, vw = { class: "options-list" }, pw = ["onClick"], gw = ["name", "value", "checked", "onChange"], hw = { class: "option-content" }, yw = { class: "option-header" }, ww = { class: "option-filename" }, _w = { class: "option-meta" }, kw = { class: "option-size" }, bw = { class: "option-category" }, $w = { class: "option-path" }, Cw = { class: "action-buttons" }, xw = {
  key: 2,
  class: "unresolved"
}, Sw = { class: "action-buttons" }, Iw = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = M(() => !!n.choice);
    M(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), M(() => {
      var d, f;
      return ((f = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = M(() => {
      switch (n.status) {
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
      const f = d / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, f) => (o(), i("div", {
      class: Ve(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", cw, [
        s("span", uw, [
          f[7] || (f[7] = C("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (o(), i("span", {
          key: 0,
          class: Ve(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", dw, [
        l.value ? (o(), i("div", mw, [
          b(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...f[8] || (f[8] = [
              C(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (o(), i("div", fw, [
          f[12] || (f[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", vw, [
            (o(!0), i(W, null, ye(e.options, (v, p) => (o(), i("label", {
              key: v.model.hash,
              class: Ve(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, gw),
              s("div", hw, [
                s("div", yw, [
                  s("span", ww, m(v.model.filename), 1),
                  b(rw, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", _w, [
                  s("span", kw, m(u(v.model.size)), 1),
                  s("span", bw, m(v.model.category), 1)
                ]),
                s("div", $w, m(v.model.relative_path), 1)
              ])
            ], 10, pw))), 128))
          ]),
          s("div", Cw, [
            b(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: h(() => [...f[9] || (f[9] = [
                C(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[10] || (f[10] = [
                C(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...f[11] || (f[11] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), i("div", xw, [
          f[16] || (f[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Sw, [
            b(Ue, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: h(() => [...f[13] || (f[13] = [
                C(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[14] || (f[14] = [
                C(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...f[15] || (f[15] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ew = /* @__PURE__ */ Te(Iw, [["__scopeId", "data-v-8a82fefa"]]), Tw = { class: "model-resolution-step" }, Mw = { class: "step-header" }, Pw = { class: "step-info" }, Rw = { class: "step-title" }, Dw = { class: "step-description" }, Lw = { class: "stat-badge" }, Nw = {
  key: 1,
  class: "step-body"
}, Uw = {
  key: 2,
  class: "empty-state"
}, Ow = { class: "model-search-modal" }, Aw = { class: "model-modal-body" }, zw = {
  key: 0,
  class: "model-search-results"
}, Fw = ["onClick"], Bw = { class: "model-result-header" }, Vw = { class: "model-result-filename" }, Ww = { class: "model-result-meta" }, Gw = { class: "model-result-category" }, jw = { class: "model-result-size" }, Hw = {
  key: 0,
  class: "model-result-path"
}, qw = {
  key: 1,
  class: "model-no-results"
}, Kw = {
  key: 2,
  class: "model-searching"
}, Jw = { class: "model-download-url-modal" }, Qw = { class: "model-modal-body" }, Yw = { class: "model-input-group" }, Xw = { class: "model-input-group" }, Zw = { class: "model-modal-actions" }, e0 = /* @__PURE__ */ Se({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(e, { emit: t }) {
    const n = {
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
    function a(J) {
      var ne;
      return J && ((ne = n[J]) == null ? void 0 : ne[0]) || null;
    }
    const l = e, r = t, c = _(0), u = _(!1), d = _(!1), f = _(""), v = _(""), p = _(""), w = _([]), g = _(!1), k = M(() => l.models[c.value]), $ = M(() => l.models.some((J) => J.is_download_intent)), S = M(() => l.models.filter(
      (J) => l.modelChoices.has(J.filename) || J.is_download_intent
    ).length), x = M(() => {
      var ne;
      if (!k.value) return "";
      const J = a((ne = k.value.reference) == null ? void 0 : ne.node_type);
      return J ? `${J}/${k.value.filename}` : "";
    }), T = M(() => {
      var ne;
      if (!k.value) return "not-found";
      const J = l.modelChoices.get(k.value.filename);
      if (J)
        switch (J.action) {
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
      return k.value.is_download_intent ? "download" : (ne = k.value.options) != null && ne.length ? "ambiguous" : "not-found";
    }), I = M(() => {
      var ne, me;
      if (!k.value) return;
      const J = l.modelChoices.get(k.value.filename);
      if (J)
        switch (J.action) {
          case "select":
            return (ne = J.selected_model) != null && ne.filename ? `→ ${J.selected_model.filename}` : "Selected";
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
    function P(J) {
      J >= 0 && J < l.models.length && (c.value = J);
    }
    function U() {
      var J;
      for (let ne = c.value + 1; ne < l.models.length; ne++) {
        const me = l.models[ne];
        if (!me.is_download_intent && !((J = l.modelChoices) != null && J.has(me.filename))) {
          P(ne);
          return;
        }
      }
    }
    function N() {
      k.value && (r("mark-optional", k.value.filename), Kt(() => U()));
    }
    function B() {
      k.value && (r("skip", k.value.filename), Kt(() => U()));
    }
    function R(J) {
      k.value && (r("option-selected", k.value.filename, J), Kt(() => U()));
    }
    function O() {
      k.value && r("clear-choice", k.value.filename);
    }
    function K() {
      k.value && (f.value = k.value.filename, u.value = !0);
    }
    function ae() {
      k.value && (v.value = k.value.download_source || "", p.value = k.value.target_path || x.value, d.value = !0);
    }
    function j() {
      u.value = !1, f.value = "", w.value = [];
    }
    function de() {
      d.value = !1, v.value = "", p.value = "";
    }
    function le() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function H(J) {
      k.value && (j(), Kt(() => U()));
    }
    function F() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), p.value.trim() || void 0), de(), Kt(() => U()));
    }
    function Y(J) {
      if (!J) return "Unknown";
      const ne = J / (1024 * 1024 * 1024);
      return ne >= 1 ? `${ne.toFixed(2)} GB` : `${(J / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (J, ne) => {
      var me, Z, re;
      return o(), i("div", Tw, [
        s("div", Mw, [
          s("div", Pw, [
            s("h3", Rw, m($.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Dw, m($.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Lw, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (o(), D(yc, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ne[0] || (ne[0] = (Q) => P(c.value - 1)),
          onNext: ne[1] || (ne[1] = (Q) => P(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (o(), i("div", Nw, [
          b(Ew, {
            filename: k.value.filename,
            "node-type": ((me = k.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((Z = k.value.options) != null && Z.length),
            options: k.value.options,
            choice: (re = e.modelChoices) == null ? void 0 : re.get(k.value.filename),
            status: T.value,
            "status-label": I.value,
            onMarkOptional: N,
            onSkip: B,
            onDownloadUrl: ae,
            onSearch: K,
            onOptionSelected: R,
            onClearChoice: O
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), i("div", Uw, [...ne[5] || (ne[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (o(), D(cs, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ct(j, ["self"])
          }, [
            s("div", Ow, [
              s("div", { class: "model-modal-header" }, [
                ne[6] || (ne[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: j
                }, "✕")
              ]),
              s("div", Aw, [
                b(Nt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ne[2] || (ne[2] = (Q) => f.value = Q),
                  placeholder: "Search by filename, category...",
                  onInput: le
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (o(), i("div", zw, [
                  (o(!0), i(W, null, ye(w.value, (Q) => (o(), i("div", {
                    key: Q.hash,
                    class: "model-search-result-item",
                    onClick: (he) => H()
                  }, [
                    s("div", Bw, [
                      s("code", Vw, m(Q.filename), 1)
                    ]),
                    s("div", Ww, [
                      s("span", Gw, m(Q.category), 1),
                      s("span", jw, m(Y(Q.size)), 1)
                    ]),
                    Q.relative_path ? (o(), i("div", Hw, m(Q.relative_path), 1)) : y("", !0)
                  ], 8, Fw))), 128))
                ])) : f.value && !g.value ? (o(), i("div", qw, ' No models found matching "' + m(f.value) + '" ', 1)) : y("", !0),
                g.value ? (o(), i("div", Kw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (o(), D(cs, { to: "body" }, [
          d.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ct(de, ["self"])
          }, [
            s("div", Jw, [
              s("div", { class: "model-modal-header" }, [
                ne[7] || (ne[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              s("div", Qw, [
                s("div", Yw, [
                  ne[8] || (ne[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(Nt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ne[3] || (ne[3] = (Q) => v.value = Q),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Xw, [
                  ne[9] || (ne[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(Nt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ne[4] || (ne[4] = (Q) => p.value = Q),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Zw, [
                  b(Ue, {
                    variant: "secondary",
                    onClick: de
                  }, {
                    default: h(() => [...ne[10] || (ne[10] = [
                      C("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ue, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: F
                  }, {
                    default: h(() => [...ne[11] || (ne[11] = [
                      C(" Queue Download ", -1)
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
}), t0 = /* @__PURE__ */ Te(e0, [["__scopeId", "data-v-5c700bfa"]]), s0 = {
  key: 0,
  class: "dependency-preview"
}, n0 = { class: "intro" }, o0 = { class: "summary-strip" }, a0 = { class: "summary-item" }, l0 = { class: "summary-item danger" }, i0 = { class: "summary-item" }, r0 = { class: "summary-item" }, c0 = { class: "summary-item" }, u0 = {
  key: 0,
  class: "requirements"
}, d0 = { class: "chips" }, m0 = { class: "changes" }, f0 = {
  key: 0,
  class: "empty-state"
}, v0 = {
  key: 1,
  class: "change-list"
}, p0 = { class: "package-name" }, g0 = { class: "change-kind" }, h0 = { class: "version current" }, y0 = { class: "version proposed" }, w0 = /* @__PURE__ */ Se({
  __name: "DependencyReviewPreviewModal",
  props: {
    loading: { type: Boolean },
    error: {},
    preview: {},
    canApply: { type: Boolean },
    applying: { type: Boolean }
  },
  emits: ["close", "apply"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = {
      downgraded: 0,
      removed: 1,
      upgraded: 2,
      added: 3,
      changed: 4
    }, r = M(() => {
      var u;
      return [...((u = n.preview) == null ? void 0 : u.changes) || []].sort((d, f) => l[d.kind] - l[f.kind] || d.name.localeCompare(f.name));
    });
    function c(u) {
      return u === "downgraded" ? "Downgrade" : u === "upgraded" ? "Upgrade" : u === "added" ? "Add" : u === "removed" ? "Remove" : "Change";
    }
    return (u, d) => (o(), D(Lt, {
      title: "Dependency Review",
      size: "lg",
      loading: e.loading,
      error: e.error || void 0,
      onClose: d[2] || (d[2] = (f) => a("close"))
    }, {
      body: h(() => [
        e.preview ? (o(), i("div", s0, [
          s("div", n0, [
            s("h3", null, m(e.preview.node_name), 1),
            d[3] || (d[3] = s("p", null, " Installing this node package would change Python dependencies in the environment. Apply only if you accept these package changes in the current environment. ", -1))
          ]),
          s("div", o0, [
            s("div", a0, [
              s("strong", null, m(e.preview.summary.total), 1),
              d[4] || (d[4] = s("span", null, "Total", -1))
            ]),
            s("div", l0, [
              s("strong", null, m(e.preview.summary.downgraded), 1),
              d[5] || (d[5] = s("span", null, "Downgraded", -1))
            ]),
            s("div", i0, [
              s("strong", null, m(e.preview.summary.upgraded), 1),
              d[6] || (d[6] = s("span", null, "Upgraded", -1))
            ]),
            s("div", r0, [
              s("strong", null, m(e.preview.summary.added), 1),
              d[7] || (d[7] = s("span", null, "Added", -1))
            ]),
            s("div", c0, [
              s("strong", null, m(e.preview.summary.removed), 1),
              d[8] || (d[8] = s("span", null, "Removed", -1))
            ])
          ]),
          e.preview.requirements.length > 0 ? (o(), i("div", u0, [
            d[9] || (d[9] = s("div", { class: "section-title" }, "Node Requirements", -1)),
            s("div", d0, [
              (o(!0), i(W, null, ye(e.preview.requirements, (f) => (o(), i("code", {
                key: f,
                class: "chip"
              }, m(f), 1))), 128))
            ])
          ])) : y("", !0),
          s("div", m0, [
            d[11] || (d[11] = s("div", { class: "section-title" }, "Proposed Package Changes", -1)),
            e.preview.changes.length === 0 ? (o(), i("div", f0, " No package version changes found. ")) : (o(), i("div", v0, [
              (o(!0), i(W, null, ye(r.value, (f) => (o(), i("div", {
                key: `${f.name}-${f.kind}`,
                class: Ve(["change-row", f.kind])
              }, [
                s("code", p0, m(f.name), 1),
                s("span", g0, m(c(f.kind)), 1),
                s("span", h0, m(f.current || "not installed"), 1),
                d[10] || (d[10] = s("span", { class: "arrow" }, "→", -1)),
                s("span", y0, m(f.proposed || "removed"), 1)
              ], 2))), 128))
            ]))
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => {
        var f;
        return [
          b(Ue, {
            variant: "secondary",
            onClick: d[0] || (d[0] = (v) => a("close"))
          }, {
            default: h(() => [...d[12] || (d[12] = [
              C("Close", -1)
            ])]),
            _: 1
          }),
          e.canApply && ((f = e.preview) != null && f.success) ? (o(), D(Ue, {
            key: 0,
            variant: "primary",
            loading: e.applying,
            disabled: e.loading || e.applying,
            onClick: d[1] || (d[1] = (v) => a("apply"))
          }, {
            default: h(() => [...d[13] || (d[13] = [
              C(" Apply to Current Environment ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ];
      }),
      _: 1
    }, 8, ["loading", "error"]));
  }
}), wc = /* @__PURE__ */ Te(w0, [["__scopeId", "data-v-28094338"]]), _0 = { class: "applying-step" }, k0 = {
  key: 0,
  class: "phase-content"
}, b0 = {
  key: 1,
  class: "phase-content"
}, $0 = { class: "phase-description" }, C0 = { class: "overall-progress" }, x0 = { class: "progress-bar" }, S0 = { class: "progress-label" }, I0 = { class: "install-list" }, E0 = { class: "install-icon" }, T0 = { key: 0 }, M0 = {
  key: 1,
  class: "spinner"
}, P0 = { key: 2 }, R0 = { key: 3 }, D0 = {
  key: 0,
  class: "install-error"
}, L0 = {
  key: 2,
  class: "phase-content"
}, N0 = { class: "phase-header" }, U0 = { class: "phase-title" }, O0 = { class: "completion-summary" }, A0 = {
  key: 0,
  class: "summary-item success"
}, z0 = { class: "summary-text" }, F0 = {
  key: 1,
  class: "summary-item success"
}, B0 = { class: "summary-text" }, V0 = {
  key: 2,
  class: "summary-item success"
}, W0 = { class: "summary-text" }, G0 = {
  key: 3,
  class: "summary-item success"
}, j0 = { class: "summary-text" }, H0 = {
  key: 4,
  class: "summary-item success"
}, q0 = { class: "summary-text" }, K0 = {
  key: 5,
  class: "summary-item success"
}, J0 = { class: "summary-text" }, Q0 = {
  key: 6,
  class: "summary-item success"
}, Y0 = { class: "summary-text" }, X0 = {
  key: 7,
  class: "summary-item error"
}, Z0 = { class: "summary-text" }, e_ = {
  key: 8,
  class: "summary-item warning"
}, t_ = { class: "summary-text" }, s_ = {
  key: 9,
  class: "failed-list"
}, n_ = { class: "failed-node-id" }, o_ = { class: "failed-error" }, a_ = {
  key: 10,
  class: "failed-list dependency-review-list"
}, l_ = { class: "failed-node-id" }, i_ = ["onClick"], r_ = {
  key: 12,
  class: "summary-item success"
}, c_ = { class: "summary-text" }, u_ = {
  key: 13,
  class: "summary-note"
}, d_ = {
  key: 14,
  class: "restart-prompt"
}, m_ = {
  key: 3,
  class: "phase-content error"
}, f_ = { class: "error-message" }, v_ = /* @__PURE__ */ Se({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, {
      previewNodeDependencyChanges: n,
      applyReviewedNodeDependencyChanges: a
    } = ft(), l = _(/* @__PURE__ */ new Set()), r = M(() => {
      var J, ne;
      const F = ((J = t.progress.nodeInstallProgress) == null ? void 0 : J.totalNodes) || t.progress.nodesToInstall.length;
      if (!F) return 0;
      const Y = ((ne = t.progress.nodeInstallProgress) == null ? void 0 : ne.completedNodes.length) ?? 0;
      return Math.round(Y / F * 100);
    }), c = M(() => {
      var F;
      return ((F = t.progress.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((Y) => !Y.success && !Y.dependency_review)) || [];
    });
    function u(F) {
      var Y;
      return ((Y = F.dependency_review) == null ? void 0 : Y.identifier) || F.node_id;
    }
    const d = M(() => {
      var F;
      return ((F = t.progress.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((Y) => Y.dependency_review && !l.value.has(u(Y)))) || [];
    }), f = M(() => l.value.size), v = M(() => t.progress.needsRestart || f.value > 0), p = M(() => c.value.length > 0 || d.value.length > 0), w = M(() => t.progress.nodesInstalled.length), g = M(() => {
      var F;
      return ((F = t.progress.nodesMarkedOptional) == null ? void 0 : F.length) || 0;
    }), k = M(() => {
      var F;
      return ((F = t.progress.nodesMapped) == null ? void 0 : F.length) || 0;
    }), $ = M(() => t.progress.modelPathsSynced || 0), S = M(() => {
      var F;
      return ((F = t.progress.modelsMarkedOptional) == null ? void 0 : F.length) || 0;
    }), x = M(() => {
      var F;
      return ((F = t.progress.modelDownloadIntentsChanged) == null ? void 0 : F.length) || 0;
    }), T = M(() => t.progress.completedFiles.length > 0), I = M(() => w.value > 0 || g.value > 0 || k.value > 0 || $.value > 0 || S.value > 0 || x.value > 0 || T.value || v.value || f.value > 0), P = M(() => I.value ? "Workflow dependencies resolved" : "No changes applied");
    function U(F, Y) {
      var ne, me;
      const J = (ne = t.progress.nodeInstallProgress) == null ? void 0 : ne.completedNodes.find((Z) => Z.node_id === F);
      return J ? J.success ? "complete" : "failed" : ((me = t.progress.nodeInstallProgress) == null ? void 0 : me.currentIndex) === Y ? "installing" : "pending";
    }
    function N(F) {
      var Y, J;
      return (J = (Y = t.progress.nodeInstallProgress) == null ? void 0 : Y.completedNodes.find((ne) => ne.node_id === F)) == null ? void 0 : J.error;
    }
    const B = _(!1), R = _(!1), O = _(!1), K = _(null), ae = _(null), j = _(null);
    async function de(F) {
      var J;
      const Y = u(F);
      j.value = Y, B.value = !0, R.value = !0, O.value = !1, K.value = null, ae.value = null;
      try {
        if ((J = F.dependency_review) != null && J.preview) {
          ae.value = F.dependency_review.preview;
          return;
        }
        const ne = await n({ id: Y });
        ae.value = ne.preview, ne.preview.success || (K.value = ne.preview.error || "Unable to generate dependency preview");
      } catch (ne) {
        K.value = ne instanceof Error ? ne.message : "Unable to generate dependency preview";
      } finally {
        R.value = !1;
      }
    }
    async function le() {
      const F = j.value, Y = ae.value;
      if (!(!F || !Y || O.value)) {
        O.value = !0, K.value = null;
        try {
          const J = await a({
            id: F,
            accepted_preview: {
              baseline_fingerprint: Y.baseline_fingerprint,
              diff_fingerprint: Y.diff_fingerprint,
              proposed_fingerprint: Y.proposed_fingerprint
            }
          });
          if (J.status !== "success")
            throw new Error(J.error || J.message || "Unable to apply dependency changes");
          l.value = /* @__PURE__ */ new Set([
            ...l.value,
            F
          ]), H();
        } catch (J) {
          K.value = J instanceof Error ? J.message : "Unable to apply dependency changes";
        } finally {
          O.value = !1;
        }
      }
    }
    function H() {
      B.value = !1, R.value = !1, O.value = !1, K.value = null, ae.value = null, j.value = null;
    }
    return (F, Y) => {
      var J, ne, me, Z, re;
      return o(), i("div", _0, [
        e.progress.phase === "resolving" ? (o(), i("div", k0, [...Y[2] || (Y[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (o(), i("div", b0, [
          Y[3] || (Y[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", $0, " Installing " + m((((J = e.progress.nodeInstallProgress) == null ? void 0 : J.currentIndex) ?? 0) + 1) + " of " + m(((ne = e.progress.nodeInstallProgress) == null ? void 0 : ne.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", C0, [
            s("div", x0, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${r.value}%` })
              }, null, 4)
            ]),
            s("span", S0, m(((me = e.progress.nodeInstallProgress) == null ? void 0 : me.completedNodes.length) ?? 0) + " / " + m(((Z = e.progress.nodeInstallProgress) == null ? void 0 : Z.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", I0, [
            (o(!0), i(W, null, ye(e.progress.nodesToInstall, (Q, he) => (o(), i("div", {
              key: Q,
              class: Ve(["install-item", U(Q, he)])
            }, [
              s("span", E0, [
                U(Q, he) === "pending" ? (o(), i("span", T0, "○")) : U(Q, he) === "installing" ? (o(), i("span", M0, "◌")) : U(Q, he) === "complete" ? (o(), i("span", P0, "✓")) : U(Q, he) === "failed" ? (o(), i("span", R0, "✗")) : y("", !0)
              ]),
              s("code", null, m(Q), 1),
              N(Q) ? (o(), i("span", D0, m(N(Q)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (o(), i("div", L0, [
          s("div", N0, [
            s("span", {
              class: Ve(["phase-icon", p.value ? "warning" : "success"])
            }, m(p.value ? "⚠" : "✓"), 3),
            s("h3", U0, m(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", O0, [
            e.progress.nodesInstalled.length > 0 ? (o(), i("div", A0, [
              Y[4] || (Y[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", z0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            f.value > 0 ? (o(), i("div", F0, [
              Y[5] || (Y[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", B0, m(f.value) + " reviewed package" + m(f.value > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            g.value > 0 ? (o(), i("div", V0, [
              Y[6] || (Y[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", W0, m(g.value) + " node type" + m(g.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            k.value > 0 ? (o(), i("div", G0, [
              Y[7] || (Y[7] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", j0, m(k.value) + " node mapping" + m(k.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            $.value > 0 ? (o(), i("div", H0, [
              Y[8] || (Y[8] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", q0, m($.value) + " model path" + m($.value > 1 ? "s" : "") + " synced", 1)
            ])) : y("", !0),
            S.value > 0 ? (o(), i("div", K0, [
              Y[9] || (Y[9] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", J0, m(S.value) + " model" + m(S.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            x.value > 0 ? (o(), i("div", Q0, [
              Y[10] || (Y[10] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Y0, m(x.value) + " model decision" + m(x.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", X0, [
              Y[11] || (Y[11] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", Z0, m(c.value.length) + " package" + m(c.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", e_, [
              Y[12] || (Y[12] = s("span", { class: "summary-icon" }, "⚠", -1)),
              s("span", t_, m(d.value.length) + " package" + m(d.value.length > 1 ? "s" : "") + " need dependency review", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", s_, [
              (o(!0), i(W, null, ye(c.value, (Q) => (o(), i("div", {
                key: Q.node_id,
                class: "failed-item"
              }, [
                s("code", n_, m(Q.node_id), 1),
                s("span", o_, m(Q.error), 1)
              ]))), 128))
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", a_, [
              (o(!0), i(W, null, ye(d.value, (Q) => (o(), i("div", {
                key: Q.node_id,
                class: "failed-item dependency-review-item"
              }, [
                s("code", l_, m(Q.node_id), 1),
                Y[13] || (Y[13] = s("span", { class: "failed-error" }, "Dependency changes require review before install.", -1)),
                s("button", {
                  class: "review-button",
                  onClick: (he) => de(Q)
                }, " View Changes ", 8, i_)
              ]))), 128))
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("button", {
              key: 11,
              class: "retry-button",
              onClick: Y[0] || (Y[0] = (Q) => F.$emit("retry-failed"))
            }, " Retry Failed (" + m(c.value.length) + ") ", 1)) : y("", !0),
            p.value ? y("", !0) : (o(), i("div", r_, [
              Y[14] || (Y[14] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", c_, m(P.value), 1)
            ])),
            T.value ? (o(), i("p", u_, "Model downloads will continue in the background.")) : y("", !0),
            v.value ? (o(), i("div", d_, [
              Y[15] || (Y[15] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: Y[1] || (Y[1] = (Q) => F.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (o(), i("div", m_, [
          Y[16] || (Y[16] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", f_, m(e.progress.error), 1)
        ])) : y("", !0),
        B.value ? (o(), D(wc, {
          key: 4,
          loading: R.value,
          error: K.value,
          preview: ae.value,
          "can-apply": !!(j.value && ((re = ae.value) != null && re.success)),
          applying: O.value,
          onClose: H,
          onApply: le
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ]);
    };
  }
}), p_ = /* @__PURE__ */ Te(v_, [["__scopeId", "data-v-43aa5999"]]), g_ = {
  key: 0,
  class: "loading-state"
}, h_ = {
  key: 1,
  class: "wizard-content"
}, y_ = {
  key: 0,
  class: "step-content"
}, w_ = { class: "analysis-summary" }, __ = { class: "analysis-header" }, k_ = { class: "summary-description" }, b_ = { class: "stats-grid" }, $_ = { class: "stat-card" }, C_ = { class: "stat-items" }, x_ = {
  key: 0,
  class: "stat-item success"
}, S_ = { class: "stat-count" }, I_ = {
  key: 1,
  class: "stat-item info"
}, E_ = { class: "stat-count" }, T_ = {
  key: 2,
  class: "stat-item warning"
}, M_ = { class: "stat-count" }, P_ = {
  key: 3,
  class: "stat-item warning"
}, R_ = { class: "stat-count" }, D_ = {
  key: 4,
  class: "stat-item warning"
}, L_ = { class: "stat-count" }, N_ = {
  key: 5,
  class: "stat-item error"
}, U_ = { class: "stat-count" }, O_ = { class: "stat-card" }, A_ = { class: "stat-items" }, z_ = { class: "stat-item success" }, F_ = { class: "stat-count" }, B_ = {
  key: 0,
  class: "stat-item info"
}, V_ = { class: "stat-count" }, W_ = {
  key: 1,
  class: "stat-item warning"
}, G_ = { class: "stat-count" }, j_ = {
  key: 2,
  class: "stat-item warning"
}, H_ = { class: "stat-count" }, q_ = {
  key: 3,
  class: "stat-item error"
}, K_ = { class: "stat-count" }, J_ = {
  key: 0,
  class: "status-message warning"
}, Q_ = { class: "status-text" }, Y_ = {
  key: 1,
  class: "status-message warning"
}, X_ = { class: "status-text" }, Z_ = {
  key: 2,
  class: "status-message info"
}, ek = { class: "status-text" }, tk = {
  key: 3,
  class: "status-message info"
}, sk = { class: "status-text" }, nk = {
  key: 4,
  class: "status-message info"
}, ok = { class: "status-text" }, ak = {
  key: 5,
  class: "status-message warning"
}, lk = { class: "status-text" }, ik = {
  key: 6,
  class: "status-message success"
}, rk = {
  key: 7,
  class: "category-mismatch-section"
}, ck = { class: "mismatch-list" }, uk = { class: "mismatch-path" }, dk = { class: "mismatch-target" }, mk = {
  key: 8,
  class: "category-mismatch-section"
}, fk = { class: "mismatch-list" }, vk = { class: "mismatch-path" }, pk = { class: "status-text" }, gk = {
  key: 1,
  class: "step-content node-step-content"
}, hk = {
  key: 2,
  class: "step-content package-step-content"
}, yk = { class: "package-step-header" }, wk = { class: "stat-badge" }, _k = {
  key: 0,
  class: "package-section"
}, kk = { class: "package-section-header" }, bk = { class: "package-section-title" }, $k = { class: "stat-badge" }, Ck = { class: "package-list" }, xk = { class: "package-info" }, Sk = { class: "item-name" }, Ik = { class: "package-meta" }, Ek = { class: "package-actions" }, Tk = {
  key: 0,
  class: "choice-badge install"
}, Mk = {
  key: 1,
  class: "choice-badge skip"
}, Pk = {
  key: 1,
  class: "community-node-section"
}, Rk = { class: "community-node-header" }, Dk = { class: "community-node-title" }, Lk = { class: "community-node-list" }, Nk = { class: "community-node-info" }, Uk = { class: "community-node-heading" }, Ok = { class: "item-name" }, Ak = { class: "community-node-package" }, zk = { class: "community-node-meta" }, Fk = { class: "community-node-guidance" }, Bk = { key: 0 }, Vk = {
  key: 0,
  class: "community-node-selection"
}, Wk = { class: "community-selected-label" }, Gk = {
  key: 1,
  class: "community-node-actions"
}, jk = {
  key: 4,
  class: "step-content"
}, Hk = { class: "review-summary" }, qk = { class: "review-stats" }, Kk = { class: "review-stat" }, Jk = { class: "stat-value" }, Qk = { class: "review-stat" }, Yk = { class: "stat-value" }, Xk = { class: "review-stat" }, Zk = { class: "stat-value" }, eb = { class: "review-stat" }, tb = { class: "stat-value" }, sb = {
  key: 0,
  class: "review-section"
}, nb = { class: "section-title" }, ob = { class: "review-items" }, ab = { class: "item-name" }, lb = { class: "item-choice" }, ib = {
  key: 0,
  class: "choice-badge install"
}, rb = {
  key: 1,
  class: "choice-badge skip"
}, cb = {
  key: 1,
  class: "review-section"
}, ub = { class: "section-title" }, db = { class: "review-items" }, mb = { class: "item-name" }, fb = { class: "item-choice" }, vb = {
  key: 0,
  class: "choice-badge install"
}, pb = {
  key: 1,
  class: "choice-badge optional"
}, gb = {
  key: 2,
  class: "choice-badge skip"
}, hb = {
  key: 2,
  class: "review-section"
}, yb = { class: "section-title" }, wb = { class: "review-items" }, _b = { class: "item-name" }, kb = { class: "item-choice" }, bb = {
  key: 0,
  class: "choice-badge install"
}, $b = {
  key: 1,
  class: "choice-badge mapped"
}, Cb = {
  key: 2,
  class: "choice-badge optional"
}, xb = {
  key: 3,
  class: "choice-badge skip"
}, Sb = {
  key: 1,
  class: "choice-badge pending"
}, Ib = {
  key: 3,
  class: "review-section"
}, Eb = { class: "section-title" }, Tb = { class: "review-items download-details" }, Mb = { class: "download-info" }, Pb = { class: "item-name" }, Rb = { class: "download-meta" }, Db = { class: "download-path" }, Lb = ["title"], Nb = {
  key: 4,
  class: "review-section"
}, Ub = { class: "section-title" }, Ob = { class: "review-items" }, Ab = { class: "item-name" }, zb = { class: "item-choice" }, Fb = {
  key: 0,
  class: "choice-badge install"
}, Bb = {
  key: 1,
  class: "choice-badge download"
}, Vb = {
  key: 2,
  class: "choice-badge optional"
}, Wb = {
  key: 3,
  class: "choice-badge skip"
}, Gb = {
  key: 4,
  class: "choice-badge skip"
}, jb = {
  key: 1,
  class: "choice-badge download"
}, Hb = {
  key: 2,
  class: "choice-badge pending"
}, qb = {
  key: 5,
  class: "no-choices"
}, Kb = /* @__PURE__ */ Se({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const n = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: f } = hc(), { loadPendingDownloads: v } = Kn(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ft(), k = _(null), $ = _([]), S = _(!1), x = _(!1), T = _(null), I = _("analysis"), P = _([]), U = _(/* @__PURE__ */ new Map()), N = _(/* @__PURE__ */ new Map()), B = _(/* @__PURE__ */ new Set()), R = M(() => {
      const X = [
        { id: "analysis", label: "Analysis" }
      ];
      return Y.value && X.push({ id: "nodes", label: "Nodes" }), re.value && X.push({ id: "packages", label: "Packages" }), J.value && X.push({ id: "models", label: "Models" }), X.push({ id: "review", label: "Review" }), I.value === "applying" && X.push({ id: "applying", label: "Applying" }), X;
    });
    M(() => k.value ? k.value.stats.needs_user_input : !1);
    const O = M(() => H.value.filter(
      (X) => !U.value.has(X.reference.node_type)
    ).length), K = M(() => ue.value.filter(
      (L) => !U.value.has(L.node_type)
    ).length + Ce.value.length + O.value), ae = M(() => k.value ? k.value.nodes.unresolved.filter(
      (X) => !U.value.has(X.reference.node_type)
    ).length : 0), j = M(() => k.value ? k.value.nodes.ambiguous.filter(
      (X) => !U.value.has(X.reference.node_type)
    ).length : 0), de = M(() => k.value ? k.value.nodes.version_gated || [] : []), le = M(() => k.value ? k.value.nodes.uninstallable || [] : []), H = M(() => le.value.filter((X) => {
      var L;
      return !!((L = X.package) != null && L.package_id);
    })), F = M(() => de.value.length > 0), Y = M(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 || Ee.value.length > 0 : !1), J = M(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 || Ie.value.length > 0 : !1), ne = M(() => k.value ? k.value.stats.download_intents > 0 : !1), me = M(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), Z = M(() => H.value.length > 0), re = M(() => me.value || Z.value), Q = M(() => k.value ? k.value.nodes.resolved.length : 0), he = M(() => k.value ? k.value.models.resolved.filter((X) => X.has_category_mismatch) : []), we = M(() => he.value.length > 0), Fe = M(() => Y.value ? "nodes" : re.value ? "packages" : J.value ? "models" : "review"), Le = M(() => {
      if (!k.value) return [];
      const X = k.value.nodes.resolved.filter((ie) => !ie.is_installed), L = /* @__PURE__ */ new Set();
      return X.filter((ie) => L.has(ie.package.package_id) ? !1 : (L.add(ie.package.package_id), !0));
    }), ke = M(() => {
      if (!k.value) return [];
      const X = k.value.nodes.resolved.filter((ie) => !ie.is_installed), L = /* @__PURE__ */ new Map();
      for (const ie of X) {
        const He = L.get(ie.package.package_id);
        He ? He.node_types_count++ : L.set(ie.package.package_id, {
          package_id: ie.package.package_id,
          title: ie.package.title,
          node_types_count: 1
        });
      }
      return Array.from(L.values());
    }), Pe = M(() => ke.value.filter((X) => !B.value.has(X.package_id)).length), ge = M(() => ke.value.length + H.value.length), be = M(() => {
      const X = H.value.filter(
        (L) => U.value.has(L.reference.node_type)
      ).length;
      return ke.value.length + X;
    }), E = M(() => Le.value.filter((X) => !B.value.has(X.package.package_id))), z = M(() => k.value ? k.value.models.resolved.filter(
      (X) => X.match_type === "download_intent" || X.match_type === "property_download_intent"
    ).map((X) => ({
      filename: X.reference.widget_value,
      reference: X.reference,
      is_download_intent: !0,
      resolved_model: X.model,
      download_source: X.download_source,
      target_path: X.target_path
    })) : []), ue = M(() => {
      if (!k.value) return [];
      const X = Ee.value.map((He) => ({
        node_type: He.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), L = k.value.nodes.unresolved.map((He) => ({
        node_type: He.reference.node_type,
        reason: He.reason,
        is_unresolved: !0,
        options: void 0
      })), ie = k.value.nodes.ambiguous.map((He) => ({
        node_type: He.reference.node_type,
        has_multiple_options: !0,
        options: He.options.map((Ze) => ({
          package_id: Ze.package.package_id,
          title: Ze.package.title,
          match_confidence: Ze.match_confidence,
          match_type: Ze.match_type,
          is_installed: Ze.is_installed
        }))
      }));
      return [...X, ...L, ...ie];
    }), Ee = M(() => k.value ? k.value.nodes.resolved.filter(
      (X) => {
        var L;
        return ((L = X.saved_choice) == null ? void 0 : L.action) === "map-installed";
      }
    ) : []), Ce = M(() => {
      if (!k.value) return [];
      const X = k.value.models.unresolved.map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        reason: ie.reason,
        is_unresolved: !0,
        options: void 0
      })), L = k.value.models.ambiguous.map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        has_multiple_options: !0,
        options: ie.options.map((He) => ({
          model: He.model,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          has_download_source: He.has_download_source
        }))
      }));
      return [...X, ...L];
    }), Ie = M(() => {
      if (!k.value) return [];
      const X = (k.value.models.saved_optional || []).map((ie) => ({
        filename: ie.filename || ie.reference.widget_value,
        reference: ie.reference,
        reason: ie.reason,
        is_unresolved: !0,
        is_saved_optional: !0,
        options: void 0
      })), L = k.value.models.resolved.filter((ie) => ie.is_optional).map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        reason: "saved_optional",
        is_unresolved: !0,
        is_saved_optional: !0,
        options: void 0
      }));
      return [...X, ...L];
    }), Oe = M(() => {
      const X = Ce.value, L = new Set(X.map((Ze) => Ze.filename)), ie = Ie.value.filter(
        (Ze) => !L.has(Ze.filename)
      ), He = z.value.map((Ze) => ({
        filename: Ze.filename,
        reference: Ze.reference,
        is_download_intent: !0,
        resolved_model: Ze.resolved_model,
        download_source: Ze.download_source,
        target_path: Ze.target_path,
        options: void 0
      }));
      return [...X, ...ie, ...He];
    }), te = M(() => z.value.filter((X) => {
      const L = N.value.get(X.filename);
      return L ? L.action === "download" : !0;
    }).map((X) => ({
      filename: X.filename,
      url: X.download_source,
      target_path: X.target_path
    })));
    function V(X, L = 50) {
      return X.length <= L ? X : X.slice(0, L - 3) + "...";
    }
    const fe = M(() => {
      let X = E.value.length;
      for (const L of U.value.values())
        L.action === "install" && X++;
      for (const L of N.value.values())
        L.action === "select" && X++;
      return X;
    }), We = M(() => {
      let X = 0;
      for (const L of N.value.values())
        L.action === "download" && X++;
      for (const L of z.value)
        N.value.get(L.filename) || X++;
      return X;
    }), Be = M(() => {
      let X = 0;
      for (const L of U.value.values())
        L.action === "optional" && X++;
      for (const L of N.value.values())
        L.action === "optional" && X++;
      return X;
    }), _e = M(() => {
      let X = B.value.size;
      for (const L of U.value.values())
        L.action === "skip" && X++;
      for (const L of N.value.values())
        L.action === "skip" && X++;
      for (const L of ue.value)
        U.value.has(L.node_type) || X++;
      for (const L of Ce.value)
        N.value.has(L.filename) || X++;
      return X;
    }), oe = M(() => {
      const X = {};
      if (X.analysis = { resolved: 1, total: 1 }, Y.value) {
        const L = ue.value.length, ie = ue.value.filter(
          (He) => U.value.has(He.node_type)
        ).length;
        X.nodes = { resolved: ie, total: L };
      }
      if (re.value && (X.packages = {
        resolved: be.value,
        total: ge.value || 1
      }), J.value) {
        const L = Oe.value.length, ie = Oe.value.filter(
          (He) => N.value.has(He.filename) || He.is_download_intent
        ).length;
        X.models = { resolved: ie, total: L };
      }
      if (X.review = { resolved: 1, total: 1 }, I.value === "applying") {
        const L = d.totalFiles || 1, ie = d.completedFiles.length;
        X.applying = { resolved: ie, total: L };
      }
      return X;
    });
    function Je(X) {
      I.value = X;
    }
    function Ne() {
      const X = R.value.findIndex((L) => L.id === I.value);
      X > 0 && (I.value = R.value[X - 1].id);
    }
    function Xe() {
      const X = R.value.findIndex((L) => L.id === I.value);
      X < R.value.length - 1 && (I.value = R.value[X + 1].id);
    }
    function De() {
      const X = R.value.findIndex((ie) => ie.id === I.value), L = R.value[X + 1];
      return (L == null ? void 0 : L.label) || "Review";
    }
    function Ae(X) {
      var L;
      return !!((L = X.package) != null && L.latest_version);
    }
    function qe(X) {
      switch (X) {
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
    function kt(X) {
      return X.filter((L) => L.installed && L.tracked).filter((L) => L.name !== "comfygit-manager").map((L) => ({
        package_id: L.registry_id || L.name,
        source: L.source
      })).filter((L, ie, He) => He.findIndex((Ze) => Ze.package_id === L.package_id) === ie).sort((L, ie) => {
        const He = qe(L.source) - qe(ie.source);
        return He !== 0 ? He : L.package_id.localeCompare(ie.package_id);
      });
    }
    async function Ot() {
      S.value = !0, T.value = null;
      try {
        const [X, L] = await Promise.all([
          l(n.workflowName),
          g()
        ]);
        k.value = X, $.value = kt(L.nodes), Gt(X), ee(X);
      } catch (X) {
        T.value = X instanceof Error ? X.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Gt(X) {
      U.value.clear();
      for (const L of X.nodes.unresolved)
        L.saved_choice && U.value.set(L.reference.node_type, L.saved_choice);
      for (const L of X.nodes.resolved)
        L.saved_choice && U.value.set(L.reference.node_type, L.saved_choice);
      for (const L of X.nodes.ambiguous)
        L.saved_choice && U.value.set(L.reference.node_type, L.saved_choice);
      for (const L of X.nodes.uninstallable)
        L.saved_choice && U.value.set(L.reference.node_type, L.saved_choice);
    }
    function ee(X) {
      N.value.clear();
      for (const L of X.models.saved_optional || [])
        L.saved_choice && N.value.set(L.filename || L.reference.widget_value, L.saved_choice);
      for (const L of X.models.unresolved)
        L.saved_choice && N.value.set(L.filename || L.reference.widget_value, L.saved_choice);
      for (const L of X.models.ambiguous)
        L.saved_choice && N.value.set(L.reference.widget_value, L.saved_choice);
      for (const L of X.models.resolved)
        L.is_optional && N.value.set(L.reference.widget_value, { action: "optional" });
    }
    function se() {
      P.value.includes("analysis") || P.value.push("analysis"), Y.value ? I.value = "nodes" : re.value ? I.value = "packages" : J.value ? I.value = "models" : I.value = "review";
    }
    function pe(X) {
      U.value.set(X, { action: "optional" });
    }
    function Qe(X) {
      U.value.set(X, { action: "skip" });
    }
    function Re(X, L) {
      var He;
      const ie = ue.value.find((Ze) => Ze.node_type === X);
      (He = ie == null ? void 0 : ie.options) != null && He[L] && U.value.set(X, {
        action: "install",
        package_id: ie.options[L].package_id
      });
    }
    function lt(X, L, ie = {}) {
      U.value.set(X, {
        action: "install",
        package_id: L,
        install_source: ie.install_source,
        repository: ie.repository,
        version: ie.version
      });
    }
    function st(X, L) {
      U.value.set(X, {
        action: "map-installed",
        package_id: L
      });
    }
    function pt(X) {
      U.value.delete(X);
    }
    function St(X) {
      return U.value.get(X);
    }
    function Ye(X) {
      const L = St(X);
      return L ? L.action === "optional" ? "Will be marked optional" : L.action === "skip" ? "Will be skipped" : L.action === "install" ? L.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function bt(X, L) {
      var Ze;
      const ie = (Ze = X.package) == null ? void 0 : Ze.package_id;
      if (!ie) return;
      const He = {
        action: "install",
        package_id: ie,
        version: X.package.latest_version || null,
        install_source: L
      };
      L === "git" && X.package.repository && (He.repository = X.package.repository), U.value.set(X.reference.node_type, He);
    }
    function Xt(X) {
      U.value.set(X, { action: "optional" });
    }
    function us(X) {
      U.value.set(X, { action: "skip" });
    }
    function q(X) {
      U.value.delete(X);
    }
    function ve(X) {
      B.value.has(X) ? B.value.delete(X) : B.value.add(X);
    }
    function ze(X) {
      N.value.set(X, { action: "optional" });
    }
    function $e(X) {
      N.value.set(X, { action: "skip" });
    }
    function Ge(X, L) {
      var He;
      const ie = Ce.value.find((Ze) => Ze.filename === X);
      (He = ie == null ? void 0 : ie.options) != null && He[L] && N.value.set(X, {
        action: "select",
        selected_model: ie.options[L].model
      });
    }
    function et(X, L, ie) {
      N.value.set(X, {
        action: "download",
        url: L,
        target_path: ie
      });
    }
    function ct(X) {
      N.value.delete(X);
    }
    async function ut(X) {
      try {
        await p(X);
      } catch (L) {
        T.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function It() {
      var X, L, ie, He;
      x.value = !0, T.value = null, f(), d.phase = "resolving", I.value = "applying";
      try {
        const Ze = await r(n.workflowName, U.value, N.value, B.value);
        Ze.models_to_download && Ze.models_to_download.length > 0 && u(n.workflowName, Ze.models_to_download), d.nodesMarkedOptional = Ze.nodes_marked_optional || [], d.nodesMapped = Ze.nodes_mapped || [], d.modelsMarkedOptional = Ze.models_marked_optional || [], d.modelDownloadIntentsChanged = Ze.model_download_intents_changed || [], d.modelPathsSynced = Ze.model_paths_synced || 0;
        const zt = Array.from(U.value.values()).map((dt) => {
          if ((dt == null ? void 0 : dt.action) !== "install" || dt.install_source !== "git")
            return null;
          const tn = dt.repository, Pt = dt.package_id;
          return !tn || !Pt ? null : {
            id: Pt,
            repository: tn,
            selectedVersion: dt.version || "latest"
          };
        }).filter((dt) => !!dt), Zt = new Set(zt.map((dt) => dt.id)), xs = new Set(
          Array.from(U.value.values()).filter((dt) => (dt == null ? void 0 : dt.action) === "install" && !!dt.package_id).map((dt) => dt.package_id)
        ), ds = [
          ...Ze.nodes_to_install || [],
          ...E.value.filter((dt) => !xs.has(dt.package.package_id)).map((dt) => dt.package.package_id)
        ];
        if (d.nodesToInstall = [...new Set(ds)].filter((dt) => !Zt.has(dt)), d.nodesToInstall.length > 0 && await c(n.workflowName), zt.length > 0) {
          d.phase = "installing";
          const dt = ((X = d.nodeInstallProgress) == null ? void 0 : X.completedNodes) || [], tn = ((L = d.nodeInstallProgress) == null ? void 0 : L.totalNodes) || d.nodesToInstall.length;
          d.nodesToInstall = [
            ...d.nodesToInstall,
            ...zt.map((Pt) => Pt.id)
          ], d.nodeInstallProgress = {
            completedNodes: dt,
            totalNodes: tn + zt.length
          };
          for (const Pt of zt) {
            const Jn = d.nodeInstallProgress.completedNodes.length;
            d.nodeInstallProgress.currentNode = Pt.id, d.nodeInstallProgress.currentIndex = Jn;
            try {
              const ms = await w({
                id: Pt.id,
                version: Pt.selectedVersion,
                selected_version: Pt.selectedVersion,
                repository: Pt.repository,
                install_source: "git",
                mode: "remote",
                channel: "default"
              });
              if (((ie = ms.status) == null ? void 0 : ie.status_str) === "dependency_review_required") {
                d.nodeInstallProgress.completedNodes.push({
                  node_id: Pt.id,
                  success: !1,
                  error: ((He = ms.status.messages) == null ? void 0 : He[0]) || "Dependency review required",
                  dependency_review: ms.status.dependency_review
                }), d.dependencyReviews = [
                  ...d.dependencyReviews || [],
                  ...ms.status.dependency_review ? [{ node_id: Pt.id, dependency_review: ms.status.dependency_review }] : []
                ];
                continue;
              }
              d.nodeInstallProgress.completedNodes.push({
                node_id: Pt.id,
                success: !0
              }), d.nodesInstalled = [.../* @__PURE__ */ new Set([...d.nodesInstalled, Pt.id])], d.needsRestart = !0;
            } catch (ms) {
              const xn = ms instanceof Error ? ms.message : `Failed to install ${Pt.id}`;
              d.nodeInstallProgress.completedNodes.push({
                node_id: Pt.id,
                success: !1,
                error: xn
              }), d.installError = xn;
            }
          }
        }
        d.phase = "complete", await v(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), a("refresh"), a("install");
      } catch (Ze) {
        T.value = Ze instanceof Error ? Ze.message : "Failed to apply resolution", d.error = T.value, d.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function Mt() {
      a("refresh"), a("restart"), a("close");
    }
    async function yt() {
      var L;
      const X = ((L = d.nodeInstallProgress) == null ? void 0 : L.completedNodes.filter((ie) => !ie.success).map((ie) => ie.node_id)) || [];
      if (X.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: X.length
        }, d.nodesToInstall = X, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(n.workflowName), d.phase = "complete";
        } catch (ie) {
          d.error = ie instanceof Error ? ie.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return mt(Ot), (X, L) => (o(), D(Lt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: T.value || void 0,
      "fixed-height": !0,
      onClose: L[1] || (L[1] = (ie) => a("close"))
    }, {
      body: h(() => [
        S.value && !k.value ? (o(), i("div", g_, [...L[2] || (L[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (o(), i("div", h_, [
          b(e1, {
            steps: R.value,
            "current-step": I.value,
            "completed-steps": P.value,
            "step-stats": oe.value,
            onStepChange: Je
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          I.value === "analysis" ? (o(), i("div", y_, [
            s("div", w_, [
              s("div", __, [
                L[3] || (L[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", k_, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", b_, [
                s("div", $_, [
                  L[16] || (L[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", C_, [
                    Q.value > 0 ? (o(), i("div", x_, [
                      L[4] || (L[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", S_, m(Q.value), 1),
                      L[5] || (L[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (o(), i("div", I_, [
                      L[6] || (L[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", E_, m(k.value.stats.packages_needing_installation), 1),
                      L[7] || (L[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    j.value > 0 ? (o(), i("div", T_, [
                      L[8] || (L[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", M_, m(j.value), 1),
                      L[9] || (L[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    de.value.length > 0 ? (o(), i("div", P_, [
                      L[10] || (L[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", R_, m(de.value.length), 1),
                      L[11] || (L[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    O.value > 0 ? (o(), i("div", D_, [
                      L[12] || (L[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", L_, m(O.value), 1),
                      L[13] || (L[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    ae.value > 0 ? (o(), i("div", N_, [
                      L[14] || (L[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", U_, m(ae.value), 1),
                      L[15] || (L[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", O_, [
                  L[27] || (L[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", A_, [
                    s("div", z_, [
                      L[17] || (L[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", F_, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      L[18] || (L[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (o(), i("div", B_, [
                      L[19] || (L[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", V_, m(k.value.stats.download_intents), 1),
                      L[20] || (L[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    we.value ? (o(), i("div", W_, [
                      L[21] || (L[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", G_, m(he.value.length), 1),
                      L[22] || (L[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    k.value.models.ambiguous.length > 0 ? (o(), i("div", j_, [
                      L[23] || (L[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", H_, m(k.value.models.ambiguous.length), 1),
                      L[24] || (L[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    k.value.models.unresolved.length > 0 ? (o(), i("div", q_, [
                      L[25] || (L[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", K_, m(k.value.models.unresolved.length), 1),
                      L[26] || (L[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value > 0 ? (o(), i("div", J_, [
                L[28] || (L[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", Q_, m(K.value) + " item" + m(K.value === 1 ? "" : "s") + " need your input", 1)
              ])) : F.value ? (o(), i("div", Y_, [
                L[29] || (L[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", X_, m(de.value.length) + " node type" + m(de.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : O.value > 0 ? (o(), i("div", Z_, [
                L[30] || (L[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", ek, m(O.value) + " community-mapped node type" + m(O.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : me.value ? (o(), i("div", tk, [
                L[31] || (L[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", sk, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(ne.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : ne.value ? (o(), i("div", nk, [
                L[32] || (L[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", ok, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : we.value ? (o(), i("div", ak, [
                L[33] || (L[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", lk, m(he.value.length) + " model" + m(he.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (o(), i("div", ik, [...L[34] || (L[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              we.value ? (o(), i("div", rk, [
                L[37] || (L[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", ck, [
                  (o(!0), i(W, null, ye(he.value, (ie) => {
                    var He, Ze;
                    return o(), i("div", {
                      key: ie.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", uk, m(ie.actual_category) + "/" + m((He = ie.model) == null ? void 0 : He.filename), 1),
                      L[36] || (L[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", dk, m((Ze = ie.expected_categories) == null ? void 0 : Ze[0]) + "/", 1),
                      ie.file_path ? (o(), D(Ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (zt) => ut(ie.file_path)
                      }, {
                        default: h(() => [...L[35] || (L[35] = [
                          C(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              F.value ? (o(), i("div", mk, [
                L[38] || (L[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", fk, [
                  (o(!0), i(W, null, ye(de.value, (ie) => {
                    var He;
                    return o(), i("div", {
                      key: `vg-${ie.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", vk, m(ie.reference.node_type), 1),
                      s("span", pk, m(ie.guidance || ((He = k.value.node_guidance) == null ? void 0 : He[ie.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          I.value === "nodes" ? (o(), i("div", gk, [
            b(lw, {
              nodes: ue.value,
              "node-choices": U.value,
              "auto-resolved-packages": [],
              "skipped-packages": B.value,
              "installed-node-packs": $.value,
              onMarkOptional: pe,
              onSkip: Qe,
              onOptionSelected: Re,
              onManualEntry: lt,
              onInstalledPackSelected: st,
              onClearChoice: pt,
              onPackageSkip: ve
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          I.value === "packages" ? (o(), i("div", hk, [
            s("div", yk, [
              L[39] || (L[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", wk, m(be.value) + "/" + m(ge.value) + " decided", 1)
            ]),
            ke.value.length > 0 ? (o(), i("div", _k, [
              s("div", kk, [
                s("div", null, [
                  s("h4", bk, "Resolved Packages (" + m(ke.value.length) + ")", 1),
                  L[40] || (L[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", $k, m(Pe.value) + "/" + m(ke.value.length) + " to install", 1)
              ]),
              s("div", Ck, [
                (o(!0), i(W, null, ye(ke.value, (ie) => (o(), i("div", {
                  key: ie.package_id,
                  class: "package-item"
                }, [
                  s("div", xk, [
                    s("code", Sk, m(ie.package_id), 1),
                    s("span", Ik, m(ie.node_types_count) + " node type" + m(ie.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", Ek, [
                    B.value.has(ie.package_id) ? (o(), i("span", Mk, "Skipped")) : (o(), i("span", Tk, "Will Install")),
                    b(Ue, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => ve(ie.package_id)
                    }, {
                      default: h(() => [
                        C(m(B.value.has(ie.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            H.value.length > 0 ? (o(), i("div", Pk, [
              s("div", Rk, [
                s("h4", Dk, "Community-Mapped Packages (" + m(H.value.length) + ")", 1),
                L[41] || (L[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", Lk, [
                (o(!0), i(W, null, ye(H.value, (ie) => (o(), i("div", {
                  key: `community-${ie.reference.node_type}-${ie.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", Nk, [
                    s("div", Uk, [
                      s("code", Ok, m(ie.reference.node_type), 1),
                      s("span", Ak, m(ie.package.title || ie.package.package_id), 1)
                    ]),
                    s("div", zk, m(ie.package.package_id), 1),
                    s("div", Fk, [
                      L[42] || (L[42] = C(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ie.guidance ? (o(), i("span", Bk, m(ie.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  St(ie.reference.node_type) ? (o(), i("div", Vk, [
                    s("div", Wk, m(Ye(ie.reference.node_type)), 1),
                    b(Ue, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (He) => q(ie.reference.node_type)
                    }, {
                      default: h(() => [...L[43] || (L[43] = [
                        C(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (o(), i("div", Gk, [
                    Ae(ie) ? (o(), D(Ue, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !ie.package.package_id,
                      onClick: (He) => bt(ie, "registry")
                    }, {
                      default: h(() => [...L[44] || (L[44] = [
                        C(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    ie.package.repository ? (o(), D(Ue, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !ie.package.package_id,
                      onClick: (He) => bt(ie, "git")
                    }, {
                      default: h(() => [...L[45] || (L[45] = [
                        C(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Xt(ie.reference.node_type)
                    }, {
                      default: h(() => [...L[46] || (L[46] = [
                        C(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => us(ie.reference.node_type)
                    }, {
                      default: h(() => [...L[47] || (L[47] = [
                        C(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          I.value === "models" ? (o(), D(t0, {
            key: 3,
            models: Oe.value,
            "model-choices": N.value,
            onMarkOptional: ze,
            onSkip: $e,
            onOptionSelected: Ge,
            onDownloadUrl: et,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          I.value === "review" ? (o(), i("div", jk, [
            s("div", Hk, [
              L[53] || (L[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", qk, [
                s("div", Kk, [
                  s("span", Jk, m(fe.value), 1),
                  L[48] || (L[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", Qk, [
                  s("span", Yk, m(We.value), 1),
                  L[49] || (L[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", Xk, [
                  s("span", Zk, m(Be.value), 1),
                  L[50] || (L[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", eb, [
                  s("span", tb, m(_e.value), 1),
                  L[51] || (L[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ke.value.length > 0 ? (o(), i("div", sb, [
                s("h4", nb, "Node Packages (" + m(ke.value.length) + ")", 1),
                s("div", ob, [
                  (o(!0), i(W, null, ye(ke.value, (ie) => (o(), i("div", {
                    key: ie.package_id,
                    class: "review-item"
                  }, [
                    s("code", ab, m(ie.package_id), 1),
                    s("div", lb, [
                      B.value.has(ie.package_id) ? (o(), i("span", rb, "Skipped")) : (o(), i("span", ib, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              H.value.length > 0 ? (o(), i("div", cb, [
                s("h4", ub, "Community-Mapped Packages (" + m(H.value.length) + ")", 1),
                s("div", db, [
                  (o(!0), i(W, null, ye(H.value, (ie) => {
                    var He, Ze, zt;
                    return o(), i("div", {
                      key: `review-community-${ie.reference.node_type}-${ie.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", mb, m(ie.reference.node_type), 1),
                      s("div", fb, [
                        ((He = St(ie.reference.node_type)) == null ? void 0 : He.action) === "install" ? (o(), i("span", vb, m(((Ze = St(ie.reference.node_type)) == null ? void 0 : Ze.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((zt = St(ie.reference.node_type)) == null ? void 0 : zt.action) === "optional" ? (o(), i("span", pb, " Optional ")) : (o(), i("span", gb, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ue.value.length > 0 ? (o(), i("div", hb, [
                s("h4", yb, "Node Choices (" + m(ue.value.length) + ")", 1),
                s("div", wb, [
                  (o(!0), i(W, null, ye(ue.value, (ie) => {
                    var He, Ze, zt, Zt, xs, ds;
                    return o(), i("div", {
                      key: ie.node_type,
                      class: "review-item"
                    }, [
                      s("code", _b, m(ie.node_type), 1),
                      s("div", kb, [
                        U.value.has(ie.node_type) ? (o(), i(W, { key: 0 }, [
                          ((He = U.value.get(ie.node_type)) == null ? void 0 : He.action) === "install" ? (o(), i("span", bb, m((Ze = U.value.get(ie.node_type)) == null ? void 0 : Ze.package_id), 1)) : ((zt = U.value.get(ie.node_type)) == null ? void 0 : zt.action) === "map-installed" ? (o(), i("span", $b, " Mapped to " + m((Zt = U.value.get(ie.node_type)) == null ? void 0 : Zt.package_id), 1)) : ((xs = U.value.get(ie.node_type)) == null ? void 0 : xs.action) === "optional" ? (o(), i("span", Cb, " Optional ")) : ((ds = U.value.get(ie.node_type)) == null ? void 0 : ds.action) === "skip" ? (o(), i("span", xb, " Skip ")) : y("", !0)
                        ], 64)) : (o(), i("span", Sb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value.length > 0 ? (o(), i("div", Ib, [
                s("h4", Eb, "Models to Download (" + m(te.value.length) + ")", 1),
                s("div", Tb, [
                  (o(!0), i(W, null, ye(te.value, (ie) => (o(), i("div", {
                    key: ie.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Mb, [
                      s("code", Pb, m(ie.filename), 1),
                      s("div", Rb, [
                        s("span", Db, "→ " + m(ie.target_path), 1),
                        ie.url ? (o(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ie.url
                        }, m(V(ie.url)), 9, Lb)) : y("", !0)
                      ])
                    ]),
                    L[52] || (L[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Oe.value.length > 0 ? (o(), i("div", Nb, [
                s("h4", Ub, "Models (" + m(Oe.value.length) + ")", 1),
                s("div", Ob, [
                  (o(!0), i(W, null, ye(Oe.value, (ie) => {
                    var He, Ze, zt, Zt, xs, ds, dt;
                    return o(), i("div", {
                      key: ie.filename,
                      class: "review-item"
                    }, [
                      s("code", Ab, m(ie.filename), 1),
                      s("div", zb, [
                        N.value.has(ie.filename) ? (o(), i(W, { key: 0 }, [
                          ((He = N.value.get(ie.filename)) == null ? void 0 : He.action) === "select" ? (o(), i("span", Fb, m((zt = (Ze = N.value.get(ie.filename)) == null ? void 0 : Ze.selected_model) == null ? void 0 : zt.filename), 1)) : ((Zt = N.value.get(ie.filename)) == null ? void 0 : Zt.action) === "download" ? (o(), i("span", Bb, " Download ")) : ((xs = N.value.get(ie.filename)) == null ? void 0 : xs.action) === "optional" ? (o(), i("span", Vb, " Optional ")) : ((ds = N.value.get(ie.filename)) == null ? void 0 : ds.action) === "skip" ? (o(), i("span", Wb, " Skip ")) : ((dt = N.value.get(ie.filename)) == null ? void 0 : dt.action) === "cancel_download" ? (o(), i("span", Gb, " Cancel Download ")) : y("", !0)
                        ], 64)) : ie.is_download_intent ? (o(), i("span", jb, " Pending Download ")) : (o(), i("span", Hb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Le.value.length === 0 && H.value.length === 0 && ue.value.length === 0 && Oe.value.length === 0 ? (o(), i("div", qb, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          I.value === "applying" ? (o(), D(p_, {
            key: 5,
            progress: it(d),
            onRestart: Mt,
            onRetryFailed: yt
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        I.value !== "analysis" && I.value !== "applying" ? (o(), D(Ue, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: Ne
        }, {
          default: h(() => [...L[54] || (L[54] = [
            C(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        L[56] || (L[56] = s("div", { class: "footer-spacer" }, null, -1)),
        I.value !== "applying" || it(d).phase === "complete" || it(d).phase === "error" ? (o(), D(Ue, {
          key: 1,
          variant: "secondary",
          onClick: L[0] || (L[0] = (ie) => a("close"))
        }, {
          default: h(() => [
            C(m(it(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        I.value === "analysis" ? (o(), D(Ue, {
          key: 2,
          variant: "primary",
          disabled: S.value,
          onClick: se
        }, {
          default: h(() => [
            C(m(Fe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        I.value === "nodes" || I.value === "packages" || I.value === "models" ? (o(), D(Ue, {
          key: 3,
          variant: "primary",
          onClick: Xe
        }, {
          default: h(() => [
            C(" Continue to " + m(De()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        I.value === "review" ? (o(), D(Ue, {
          key: 4,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: It
        }, {
          default: h(() => [...L[55] || (L[55] = [
            C(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Jb = /* @__PURE__ */ Te(Kb, [["__scopeId", "data-v-7f2255ab"]]), Qb = { class: "search-input-wrapper" }, Yb = ["value", "placeholder"], Xb = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = _(null);
    let r;
    function c(d) {
      const f = d.target.value;
      n.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", f);
      }, n.debounce)) : a("update:modelValue", f);
    }
    function u() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return mt(() => {
      n.autoFocus && l.value && l.value.focus();
    }), (d, f) => (o(), i("div", Qb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Is(u, ["escape"])
      }, null, 40, Yb),
      e.clearable && e.modelValue ? (o(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Zb = /* @__PURE__ */ Te(Xb, [["__scopeId", "data-v-266f857a"]]), e2 = { class: "search-bar" }, t2 = /* @__PURE__ */ Se({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, n) => (o(), i("div", e2, [
      b(Zb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: n[1] || (n[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $n = /* @__PURE__ */ Te(t2, [["__scopeId", "data-v-3d51bbfd"]]), s2 = { class: "section-group" }, n2 = {
  key: 0,
  class: "section-content"
}, o2 = /* @__PURE__ */ Se({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(n.initiallyExpanded);
    function r() {
      n.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (o(), i("section", s2, [
      b(_s, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          C(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (o(), i("div", n2, [
        rt(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), At = /* @__PURE__ */ Te(o2, [["__scopeId", "data-v-c48e33ed"]]), a2 = { class: "item-header" }, l2 = {
  key: 0,
  class: "item-icon"
}, i2 = { class: "item-info" }, r2 = {
  key: 0,
  class: "item-title"
}, c2 = {
  key: 1,
  class: "item-subtitle"
}, u2 = {
  key: 0,
  class: "item-details"
}, d2 = {
  key: 1,
  class: "item-actions"
}, m2 = /* @__PURE__ */ Se({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = M(() => n.status ? `status-${n.status}` : "");
    return (l, r) => (o(), i("div", {
      class: Ve(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", a2, [
        l.$slots.icon ? (o(), i("span", l2, [
          rt(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", i2, [
          l.$slots.title ? (o(), i("div", r2, [
            rt(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (o(), i("div", c2, [
            rt(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (o(), i("div", u2, [
        rt(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (o(), i("div", d2, [
        rt(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ts = /* @__PURE__ */ Te(m2, [["__scopeId", "data-v-cc435e0e"]]), f2 = { class: "empty-state" }, v2 = {
  key: 0,
  class: "empty-icon"
}, p2 = { class: "empty-message" }, g2 = /* @__PURE__ */ Se({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, n) => (o(), i("div", f2, [
      e.icon ? (o(), i("div", v2, m(e.icon), 1)) : y("", !0),
      s("p", p2, m(e.message), 1),
      e.actionLabel ? (o(), D(Me, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          C(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), Ps = /* @__PURE__ */ Te(g2, [["__scopeId", "data-v-4466284f"]]), h2 = { class: "loading-state" }, y2 = { class: "loading-message" }, w2 = /* @__PURE__ */ Se({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, n) => (o(), i("div", h2, [
      n[0] || (n[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", y2, m(e.message), 1)
    ]));
  }
}), Vs = /* @__PURE__ */ Te(w2, [["__scopeId", "data-v-ad8436c9"]]), _2 = { class: "error-state" }, k2 = { class: "error-message" }, b2 = /* @__PURE__ */ Se({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, n) => (o(), i("div", _2, [
      n[2] || (n[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", k2, m(e.message), 1),
      e.retry ? (o(), D(Me, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (a) => t.$emit("retry"))
      }, {
        default: h(() => [...n[1] || (n[1] = [
          C(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Ws = /* @__PURE__ */ Te(b2, [["__scopeId", "data-v-5397be48"]]);
function $2(e) {
  return e.toLowerCase().endsWith(".json") ? e : `${e}.json`;
}
function Li(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function C2(e) {
  const t = e.trim(), n = $2(t);
  return t.startsWith("workflows/") ? Li([n, t]) : Li([
    `workflows/${n}`,
    n,
    t
  ]);
}
function x2(e) {
  return e.trim().replace(/^workflows\//, "").replace(/\.json$/i, "");
}
async function S2(e) {
  const t = C2(e), n = [];
  for (const a of t)
    try {
      const l = await Qs(`/userdata/${encodeURIComponent(a)}`);
      if (l.ok)
        return l.json();
      n.push(`${a}: ${l.status}`);
    } catch (l) {
      n.push(`${a}: ${l instanceof Error ? l.message : String(l)}`);
    }
  throw new Error(`Could not load saved workflow "${e}" (${n.join(", ")})`);
}
async function I2(e) {
  const t = window.app;
  if (typeof t.loadGraphData != "function")
    throw new Error("ComfyUI loadGraphData is not available");
  const n = await S2(e);
  await t.loadGraphData(
    n,
    !0,
    !0,
    x2(e),
    {
      showMissingModelsDialog: !0,
      showMissingNodesDialog: !0
    }
  ), await new Promise((a) => requestAnimationFrame(a));
}
const E2 = /* @__PURE__ */ Se({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getWorkflows: l } = ft(), r = _([]), c = _(!1), u = _(null), d = _(""), f = _(!0), v = _(!1), p = _(!1), w = _(!1), g = _(null), k = M(
      () => r.value.filter((Z) => Z.status === "broken")
    ), $ = M(
      () => r.value.filter((Z) => Z.status === "new")
    ), S = M(
      () => r.value.filter((Z) => Z.status === "modified")
    ), x = M(
      () => r.value.filter((Z) => Z.status === "synced")
    ), T = M(() => {
      if (!d.value.trim()) return r.value;
      const Z = d.value.toLowerCase();
      return r.value.filter((re) => re.name.toLowerCase().includes(Z));
    }), I = M(
      () => k.value.filter(
        (Z) => !d.value.trim() || Z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = M(
      () => $.value.filter(
        (Z) => !d.value.trim() || Z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), U = M(
      () => S.value.filter(
        (Z) => !d.value.trim() || Z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = M(
      () => x.value.filter(
        (Z) => !d.value.trim() || Z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = M(
      () => v.value ? N.value : N.value.slice(0, 5)
    );
    async function R(Z = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(Z);
      } catch (re) {
        u.value = re instanceof Error ? re.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: R });
    function O(Z) {
      g.value = Z, p.value = !0;
    }
    function K(Z) {
      g.value = Z, p.value = !1, w.value = !0;
    }
    async function ae(Z) {
      g.value = Z;
      try {
        await I2(Z);
      } catch (re) {
        console.error("[ComfyGit] Failed to activate workflow for contract mapping:", re), u.value = re instanceof Error ? re.message : "Failed to open workflow for contract mapping";
        return;
      }
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: Z }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function j(Z) {
      var he;
      const Q = (he = Z.detail) == null ? void 0 : he.workflowName;
      Q && ae(Q);
    }
    function de() {
    }
    function le() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function H() {
      w.value = !1, await R(!0);
    }
    async function F() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function Y(Z) {
      return Z.replace(/uninstallable node mappings?/gi, (re) => re.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function J(Z) {
      if (Z.issue_summary && Z.issue_summary.trim().length > 0)
        return Y(Z.issue_summary);
      const re = [];
      return Z.version_gated_count && Z.version_gated_count > 0 && re.push(`${Z.version_gated_count} node${Z.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), Z.uninstallable_count && Z.uninstallable_count > 0 && re.push(`${Z.uninstallable_count} node${Z.uninstallable_count > 1 ? "s" : ""} need community packages`), Z.missing_nodes > 0 && re.push(`${Z.missing_nodes} missing node${Z.missing_nodes > 1 ? "s" : ""}`), Z.missing_models > 0 && re.push(`${Z.missing_models} missing model${Z.missing_models > 1 ? "s" : ""}`), Z.models_with_category_mismatch && Z.models_with_category_mismatch > 0 && re.push(`${Z.models_with_category_mismatch} model${Z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), Z.pending_downloads && Z.pending_downloads > 0 && re.push(`${Z.pending_downloads} pending download${Z.pending_downloads > 1 ? "s" : ""}`), re.length > 0 ? re.join(", ") : "Has issues";
    }
    function ne(Z) {
      const re = Z.sync_state === "new" ? "New" : Z.sync_state === "modified" ? "Modified" : Z.sync_state === "synced" ? "Synced" : Z.sync_state, Q = me(Z);
      return Z.has_path_sync_issues && Z.models_needing_path_sync && Z.models_needing_path_sync > 0 ? `${Z.models_needing_path_sync} model path${Z.models_needing_path_sync > 1 ? "s" : ""} need${Z.models_needing_path_sync === 1 ? "s" : ""} sync · ${Q}` : `${re || "Unknown"} · ${Q}`;
    }
    function me(Z) {
      const re = Z.contract_summary;
      return !re || !re.has_contract ? "No contract" : re.status === "incomplete" ? `${re.input_count} in / ${re.output_count} out · incomplete` : `${re.input_count} in / ${re.output_count} out`;
    }
    return mt(() => {
      R(), window.addEventListener("comfygit:open-workflow-contract", j);
    }), Mo(() => {
      window.removeEventListener("comfygit:open-workflow-contract", j);
    }), (Z, re) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b($n, {
            modelValue: d.value,
            "onUpdate:modelValue": re[0] || (re[0] = (Q) => d.value = Q),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (o(), D(Vs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), D(Ws, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            I.value.length ? (o(), D(At, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(I.value, (Q) => (o(), D(ts, {
                  key: Q.name,
                  status: "broken"
                }, {
                  icon: h(() => [...re[6] || (re[6] = [
                    C("⚠", -1)
                  ])]),
                  title: h(() => [
                    C(m(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(J(Q)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (he) => K(Q.name)
                    }, {
                      default: h(() => [...re[7] || (re[7] = [
                        C(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => O(Q.name)
                    }, {
                      default: h(() => [...re[8] || (re[8] = [
                        C(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => ae(Q.name)
                    }, {
                      default: h(() => [...re[9] || (re[9] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (o(), D(At, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(P.value, (Q) => (o(), D(ts, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    C(m(Q.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    C(m(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(ne(Q)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => O(Q.name)
                    }, {
                      default: h(() => [...re[10] || (re[10] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => ae(Q.name)
                    }, {
                      default: h(() => [...re[11] || (re[11] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            U.value.length ? (o(), D(At, {
              key: 2,
              title: "MODIFIED",
              count: U.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(U.value, (Q) => (o(), D(ts, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...re[12] || (re[12] = [
                    C("⚡", -1)
                  ])]),
                  title: h(() => [
                    C(m(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(ne(Q)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => O(Q.name)
                    }, {
                      default: h(() => [...re[13] || (re[13] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => ae(Q.name)
                    }, {
                      default: h(() => [...re[14] || (re[14] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (o(), D(At, {
              key: 3,
              title: "SYNCED",
              count: N.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: re[2] || (re[2] = (Q) => f.value = Q)
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(B.value, (Q) => (o(), D(ts, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    C(m(Q.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    C(m(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(ne(Q)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => O(Q.name)
                    }, {
                      default: h(() => [...re[15] || (re[15] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => ae(Q.name)
                    }, {
                      default: h(() => [...re[16] || (re[16] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && N.value.length > 5 ? (o(), D(Me, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: re[1] || (re[1] = (Q) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    C(" View all " + m(N.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            T.value.length ? y("", !0) : (o(), D(Ps, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (o(), D(Vy, {
        key: 0,
        "workflow-name": g.value,
        onClose: re[3] || (re[3] = (Q) => p.value = !1),
        onResolve: re[4] || (re[4] = (Q) => K(g.value)),
        onRefresh: re[5] || (re[5] = (Q) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (o(), D(Jb, {
        key: 1,
        "workflow-name": g.value,
        onClose: H,
        onInstall: de,
        onRefresh: le,
        onRestart: F
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), T2 = /* @__PURE__ */ Te(E2, [["__scopeId", "data-v-7bf48b3a"]]), M2 = /* @__PURE__ */ Se({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Ve(["summary-bar", e.variant])
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Nl = /* @__PURE__ */ Te(M2, [["__scopeId", "data-v-ccb7816e"]]);
async function Ul(e) {
  var n;
  if (typeof navigator < "u" && ((n = navigator.clipboard) != null && n.writeText)) {
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
const P2 = {
  key: 0,
  class: "model-details"
}, R2 = { class: "detail-section" }, D2 = { class: "detail-row" }, L2 = { class: "detail-value mono" }, N2 = { class: "detail-row" }, U2 = { class: "detail-value mono" }, O2 = { class: "detail-row" }, A2 = { class: "detail-value mono" }, z2 = {
  key: 0,
  class: "detail-row"
}, F2 = { class: "detail-value" }, B2 = ["disabled"], V2 = {
  key: 1,
  class: "detail-row"
}, W2 = { class: "detail-value hash-error" }, G2 = { class: "detail-row" }, j2 = { class: "detail-value" }, H2 = { class: "detail-row" }, q2 = { class: "detail-value" }, K2 = { class: "detail-row" }, J2 = { class: "detail-value" }, Q2 = { class: "detail-section" }, Y2 = { class: "section-header" }, X2 = {
  key: 0,
  class: "locations-list"
}, Z2 = { class: "location-path mono" }, e$ = {
  key: 0,
  class: "location-modified"
}, t$ = ["onClick"], s$ = {
  key: 1,
  class: "empty-state"
}, n$ = { class: "detail-section" }, o$ = { class: "section-header-row" }, a$ = { class: "section-header" }, l$ = {
  key: 0,
  class: "sources-list"
}, i$ = { class: "source-type" }, r$ = ["href"], c$ = ["disabled", "onClick"], u$ = {
  key: 1,
  class: "empty-state"
}, d$ = {
  key: 2,
  class: "source-error"
}, m$ = {
  key: 3,
  class: "source-success"
}, f$ = /* @__PURE__ */ Se({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ft(), u = _(null), d = _(!0), f = _(null), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = M(() => {
      var ae;
      return !!((ae = u.value) != null && ae.hash && (!u.value.blake3 || !u.value.sha256));
    }), x = _(null);
    let T = null;
    function I(ae, j = "success", de = 2e3) {
      T && clearTimeout(T), x.value = { message: ae, type: j }, T = setTimeout(() => {
        x.value = null;
      }, de);
    }
    function P(ae) {
      if (!ae) return "Unknown";
      const j = 1024 * 1024 * 1024, de = 1024 * 1024;
      return ae >= j ? `${(ae / j).toFixed(1)} GB` : ae >= de ? `${(ae / de).toFixed(0)} MB` : `${(ae / 1024).toFixed(0)} KB`;
    }
    async function U(ae) {
      try {
        await Ul(ae), I("Copied to clipboard!");
      } catch (j) {
        console.error("Failed to copy:", j), I("Failed to copy to clipboard", "error");
      }
    }
    async function N(ae) {
      if (u.value) {
        v.value = ae, p.value = null, w.value = null;
        try {
          await r(u.value.hash, ae), I("Source removed"), await K();
        } catch (j) {
          p.value = j instanceof Error ? j.message : "Failed to remove source";
        } finally {
          v.value = null;
        }
      }
    }
    async function B() {
      w.value = "Source added successfully!", g.value = !1, await K(), a("sourceSaved");
    }
    async function R() {
      await K();
    }
    async function O() {
      var ae;
      if ((ae = u.value) != null && ae.hash) {
        k.value = !0, $.value = null;
        try {
          u.value = await c(u.value.hash), I("Hashes computed successfully!");
        } catch (j) {
          $.value = j instanceof Error ? j.message : "Failed to compute hashes";
        } finally {
          k.value = !1;
        }
      }
    }
    async function K() {
      d.value = !0, f.value = null;
      try {
        u.value = await l(n.identifier);
      } catch (ae) {
        f.value = ae instanceof Error ? ae.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return mt(K), (ae, j) => {
      var de;
      return o(), i(W, null, [
        b(Lt, {
          title: `Model Details: ${((de = u.value) == null ? void 0 : de.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: f.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: j[5] || (j[5] = (le) => ae.$emit("close"))
        }, {
          body: h(() => {
            var le, H, F, Y;
            return [
              u.value ? (o(), i("div", P2, [
                s("section", R2, [
                  s("div", D2, [
                    j[7] || (j[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", L2, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: j[0] || (j[0] = (J) => U(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", N2, [
                    j[8] || (j[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", U2, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: j[1] || (j[1] = (J) => U(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", O2, [
                    j[9] || (j[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", A2, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: j[2] || (j[2] = (J) => U(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (o(), i("div", z2, [
                    j[10] || (j[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", F2, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: k.value,
                        onClick: O
                      }, m(k.value ? "Computing hashes..." : "Compute Full Hashes"), 9, B2)
                    ])
                  ])) : y("", !0),
                  $.value ? (o(), i("div", V2, [
                    j[11] || (j[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", W2, m($.value), 1)
                  ])) : y("", !0),
                  s("div", G2, [
                    j[12] || (j[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", j2, m(P(u.value.size)), 1)
                  ]),
                  s("div", H2, [
                    j[13] || (j[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", q2, m(u.value.category), 1)
                  ]),
                  s("div", K2, [
                    j[14] || (j[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", J2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", Q2, [
                  s("h4", Y2, "Locations (" + m(((le = u.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (H = u.value.locations) != null && H.length ? (o(), i("div", X2, [
                    (o(!0), i(W, null, ye(u.value.locations, (J, ne) => (o(), i("div", {
                      key: ne,
                      class: "location-item"
                    }, [
                      s("span", Z2, m(J.path), 1),
                      J.modified ? (o(), i("span", e$, "Modified: " + m(J.modified), 1)) : y("", !0),
                      J.path ? (o(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (me) => U(J.path)
                      }, " Copy File Path ", 8, t$)) : y("", !0)
                    ]))), 128))
                  ])) : (o(), i("div", s$, "No locations found"))
                ]),
                s("section", n$, [
                  s("div", o$, [
                    s("h4", a$, "Download Sources (" + m(((F = u.value.sources) == null ? void 0 : F.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: j[3] || (j[3] = (J) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (Y = u.value.sources) != null && Y.length ? (o(), i("div", l$, [
                    (o(!0), i(W, null, ye(u.value.sources, (J, ne) => (o(), i("div", {
                      key: ne,
                      class: "source-item"
                    }, [
                      s("span", i$, m(J.type) + ":", 1),
                      s("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(J.url), 9, r$),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: v.value === J.url,
                        onClick: (me) => N(J.url)
                      }, m(v.value === J.url ? "..." : "×"), 9, c$)
                    ]))), 128))
                  ])) : (o(), i("div", u$, " No download sources configured ")),
                  p.value ? (o(), i("p", d$, m(p.value), 1)) : y("", !0),
                  w.value ? (o(), i("p", m$, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: j[4] || (j[4] = (le) => ae.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (o(), D(cs, { to: "body" }, [
          x.value ? (o(), i("div", {
            key: 0,
            class: Ve(["toast", x.value.type])
          }, m(x.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (o(), D(pc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: j[6] || (j[6] = (le) => g.value = !1),
          onSaved: B,
          onHashesComputed: R
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), _c = /* @__PURE__ */ Te(f$, [["__scopeId", "data-v-cd808fbc"]]), v$ = { class: "workflow-links-tab" }, p$ = { class: "section-header-row" }, g$ = {
  key: 0,
  class: "state-message"
}, h$ = {
  key: 1,
  class: "error-message"
}, y$ = {
  key: 2,
  class: "candidate-list"
}, w$ = {
  key: 3,
  class: "state-message"
}, _$ = /* @__PURE__ */ Se({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const n = t, { getWorkflowSourceCandidates: a } = ft(), l = _([]), r = _(!1), c = _(null), u = M(() => l.value.filter((f) => f.source === "workflow"));
    async function d() {
      r.value = !0, c.value = null;
      try {
        const f = await a();
        l.value = f.candidates;
      } catch (f) {
        c.value = f instanceof Error ? f.message : "Failed to scan workflows";
      } finally {
        r.value = !1;
      }
    }
    return mt(d), (f, v) => (o(), i("div", v$, [
      s("div", p$, [
        v[2] || (v[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(Ue, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [...v[1] || (v[1] = [
            C(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (o(), i("div", g$, "Scanning workflows...")) : c.value ? (o(), i("div", h$, m(c.value), 1)) : u.value.length ? (o(), i("div", y$, [
        (o(!0), i(W, null, ye(u.value, (p) => (o(), D(fc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: v[0] || (v[0] = (w) => n("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (o(), i("div", w$, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), k$ = /* @__PURE__ */ Te(_$, [["__scopeId", "data-v-1aac54cc"]]), b$ = { class: "civitai-tab" }, $$ = /* @__PURE__ */ Se({
  __name: "CivitaiTab",
  setup(e) {
    return (t, n) => (o(), i("div", b$, [...n[0] || (n[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), C$ = /* @__PURE__ */ Te($$, [["__scopeId", "data-v-44948051"]]), x$ = { class: "direct-url-tab" }, S$ = {
  key: 0,
  class: "error"
}, I$ = /* @__PURE__ */ Se({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(""), r = _("");
    $t(() => n.initialUrl, (f) => {
      f && f !== l.value && (l.value = f);
    }, { immediate: !0 });
    const c = M(() => {
      const f = l.value.trim();
      if (!f) return "";
      try {
        const v = new URL(f);
        return decodeURIComponent(v.pathname).replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      } catch {
        return f.split("?", 1)[0].replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      }
    }), u = (f) => {
      if (!r.value.trim() || !c.value) return;
      const v = d(r.value, c.value);
      a("queue", [{
        url: f,
        targetPath: v,
        filename: c.value
      }]), l.value = "";
    };
    function d(f, v) {
      return `${f.replace(/\/+$/, "")}/${v.replace(/^\/+/, "")}`;
    }
    return (f, v) => (o(), i("div", x$, [
      b(vc, {
        modelValue: l.value,
        "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(dc, {
            modelValue: r.value,
            "onUpdate:modelValue": v[0] || (v[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (o(), i("p", S$, " Could not infer a filename from this URL. ")) : y("", !0),
          v[2] || (v[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), E$ = /* @__PURE__ */ Te(I$, [["__scopeId", "data-v-a6d21f27"]]), T$ = { class: "download-modal" }, M$ = { class: "tab-bar" }, P$ = ["onClick"], R$ = { class: "tab-content" }, D$ = /* @__PURE__ */ Se({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, { addToQueue: a } = Kn(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = _("workflow"), c = _("");
    function u(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), n("close");
    }
    function d(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.targetPath
      }))), n("close");
    }
    function f(p) {
      c.value = p, r.value = "direct";
    }
    function v() {
      n("close");
    }
    return (p, w) => e.show ? (o(), D(Lt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: v
    }, {
      body: h(() => [
        s("div", T$, [
          s("div", M$, [
            (o(), i(W, null, ye(l, (g) => s("button", {
              key: g.id,
              class: Ve(["tab-btn", { active: r.value === g.id }]),
              onClick: (k) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, P$)), 64))
          ]),
          s("div", R$, [
            r.value === "workflow" ? (o(), D(k$, {
              key: 0,
              onSelectUrl: f
            })) : r.value === "huggingface" ? (o(), D(mc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (o(), D(C$, { key: 2 })) : r.value === "direct" ? (o(), D(E$, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...w[0] || (w[0] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), kc = /* @__PURE__ */ Te(D$, [["__scopeId", "data-v-de2e4fac"]]), L$ = /* @__PURE__ */ Se({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const n = t, { getEnvironmentModels: a, getStatus: l } = ft(), r = _([]), c = _([]), u = _("production"), d = _(!1), f = _(null), v = _(""), p = _(!1), w = _(null), g = _(!1);
    function k() {
      p.value = !1, n("navigate", "model-index");
    }
    const $ = M(
      () => r.value.reduce((R, O) => R + (O.size || 0), 0)
    ), S = M(() => {
      if (!v.value.trim()) return r.value;
      const R = v.value.toLowerCase();
      return r.value.filter((O) => O.filename.toLowerCase().includes(R));
    }), x = M(() => {
      if (!v.value.trim()) return c.value;
      const R = v.value.toLowerCase();
      return c.value.filter((O) => O.filename.toLowerCase().includes(R));
    }), T = M(() => {
      const R = {};
      for (const K of S.value) {
        const ae = K.type || "other";
        R[ae] || (R[ae] = []), R[ae].push(K);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(R).sort(([K], [ae]) => {
        const j = O.indexOf(K), de = O.indexOf(ae);
        return j >= 0 && de >= 0 ? j - de : j >= 0 ? -1 : de >= 0 ? 1 : K.localeCompare(ae);
      }).map(([K, ae]) => ({ type: K, models: ae }));
    });
    function I(R) {
      if (!R) return "Unknown";
      const O = R / (1024 * 1024);
      return O >= 1024 ? `${(O / 1024).toFixed(1)} GB` : `${O.toFixed(0)} MB`;
    }
    function P(R) {
      w.value = R.hash || R.filename;
    }
    function U(R) {
      n("navigate", "model-index");
    }
    function N(R) {
      alert(`Download functionality not yet implemented for ${R}`);
    }
    async function B() {
      d.value = !0, f.value = null;
      try {
        const R = await a();
        r.value = R, c.value = [];
        const O = await l();
        u.value = O.environment || "production";
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return mt(B), (R, O) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: O[1] || (O[1] = (K) => p.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (K) => g.value = !0)
              }, {
                default: h(() => [...O[6] || (O[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  C(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b($n, {
            modelValue: v.value,
            "onUpdate:modelValue": O[2] || (O[2] = (K) => v.value = K),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (o(), D(Vs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (o(), D(Ws, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            r.value.length ? (o(), D(Nl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                C(" Total: " + m(r.value.length) + " models • " + m(I($.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(W, null, ye(T.value, (K) => (o(), D(At, {
              key: K.type,
              title: K.type.toUpperCase(),
              count: K.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(K.models, (ae) => (o(), D(ts, {
                  key: ae.hash || ae.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...O[7] || (O[7] = [
                    C("📦", -1)
                  ])]),
                  title: h(() => [
                    C(m(ae.filename), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(I(ae.size)), 1)
                  ]),
                  details: h(() => [
                    b(Dt, {
                      label: "Used by:",
                      value: (ae.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Dt, {
                      label: "Path:",
                      value: ae.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (j) => P(ae)
                    }, {
                      default: h(() => [...O[8] || (O[8] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            x.value.length ? (o(), D(At, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(x.value, (K) => (o(), D(ts, {
                  key: K.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...O[9] || (O[9] = [
                    C("⚠", -1)
                  ])]),
                  title: h(() => [
                    C(m(K.filename), 1)
                  ]),
                  subtitle: h(() => [...O[10] || (O[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ae;
                    return [
                      b(Dt, {
                        label: "Required by:",
                        value: ((ae = K.workflow_names) == null ? void 0 : ae.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => N(K.filename)
                    }, {
                      default: h(() => [...O[11] || (O[11] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => U(K.filename)
                    }, {
                      default: h(() => [...O[12] || (O[12] = [
                        C(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !S.value.length && !x.value.length ? (o(), D(Ps, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(Cs, {
        show: p.value,
        title: "About Environment Models",
        onClose: O[3] || (O[3] = (K) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            O[13] || (O[13] = C(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            O[14] || (O[14] = C(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...O[15] || (O[15] = [
              C(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), D(_c, {
        key: 0,
        identifier: w.value,
        onClose: O[4] || (O[4] = (K) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(kc, {
        show: g.value,
        onClose: O[5] || (O[5] = (K) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), N$ = /* @__PURE__ */ Te(L$, [["__scopeId", "data-v-af3ca736"]]), U$ = {
  key: 0,
  class: "indexing-progress"
}, O$ = { class: "progress-info" }, A$ = { class: "progress-label" }, z$ = { class: "progress-count" }, F$ = { class: "progress-bar" }, B$ = { class: "directory-modal-body" }, V$ = { class: "input-group" }, W$ = { class: "current-path" }, G$ = { class: "input-group" }, j$ = /* @__PURE__ */ Se({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ft(), c = t, u = _([]), d = _(!1), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = _(!1), $ = _(null), S = _(""), x = _(!1), T = _(!1), I = _(null), P = M(
      () => u.value.reduce((de, le) => de + (le.size || 0), 0)
    ), U = M(() => {
      if (!p.value.trim()) return u.value;
      const de = p.value.toLowerCase();
      return u.value.filter((le) => {
        const H = le, F = le.sha256 || H.sha256_hash || "";
        return le.filename.toLowerCase().includes(de) || F.toLowerCase().includes(de);
      });
    }), N = M(() => {
      const de = {};
      for (const H of U.value) {
        const F = H.type || "other";
        de[F] || (de[F] = []), de[F].push(H);
      }
      const le = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(de).sort(([H], [F]) => {
        const Y = le.indexOf(H), J = le.indexOf(F);
        return Y >= 0 && J >= 0 ? Y - J : Y >= 0 ? -1 : J >= 0 ? 1 : H.localeCompare(F);
      }).map(([H, F]) => ({ type: H, models: F }));
    });
    function B(de) {
      if (!de) return "Unknown";
      const le = 1024 * 1024 * 1024, H = 1024 * 1024;
      return de >= le ? `${(de / le).toFixed(1)} GB` : de >= H ? `${(de / H).toFixed(0)} MB` : `${(de / 1024).toFixed(0)} KB`;
    }
    function R(de) {
      g.value = de.hash || de.filename;
    }
    async function O() {
      f.value = !0, v.value = null;
      try {
        const de = await a();
        await ae(), de.changes > 0 && console.log(`Scan complete: ${de.changes} changes detected`);
      } catch (de) {
        v.value = de instanceof Error ? de.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function K() {
      if (S.value.trim()) {
        x.value = !0, v.value = null;
        try {
          const de = await r(S.value.trim());
          $.value = de.path, k.value = !1, S.value = "", await ae(), console.log(`Directory changed: ${de.models_indexed} models indexed`), c("refresh");
        } catch (de) {
          v.value = de instanceof Error ? de.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function ae() {
      d.value = !0, v.value = null;
      try {
        u.value = await n();
      } catch (de) {
        v.value = de instanceof Error ? de.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function j() {
      try {
        const de = await l();
        $.value = de.path;
      } catch {
      }
    }
    return mt(() => {
      ae(), j();
    }), (de, le) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: le[2] || (le[2] = (H) => w.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: O
              }, {
                default: h(() => [
                  C(m(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: le[0] || (le[0] = (H) => k.value = !0)
              }, {
                default: h(() => [...le[10] || (le[10] = [
                  C(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: le[1] || (le[1] = (H) => T.value = !0)
              }, {
                default: h(() => [...le[11] || (le[11] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  C(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          I.value ? (o(), i("div", U$, [
            s("div", O$, [
              s("span", A$, m(I.value.message), 1),
              s("span", z$, m(I.value.current) + "/" + m(I.value.total), 1)
            ]),
            s("div", F$, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b($n, {
            modelValue: p.value,
            "onUpdate:modelValue": le[3] || (le[3] = (H) => p.value = H),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || I.value ? (o(), D(Vs, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (o(), D(Ws, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            u.value.length ? (o(), D(Nl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                C(" Total: " + m(u.value.length) + " models • " + m(B(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(W, null, ye(N.value, (H) => (o(), D(At, {
              key: H.type,
              title: H.type.toUpperCase(),
              count: H.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(H.models, (F) => (o(), D(ts, {
                  key: F.sha256 || F.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...le[12] || (le[12] = [
                    C("📦", -1)
                  ])]),
                  title: h(() => [
                    C(m(F.filename), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(B(F.size)), 1)
                  ]),
                  details: h(() => [
                    b(Dt, {
                      label: "Hash:",
                      value: F.hash ? F.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => R(F)
                    }, {
                      default: h(() => [...le[13] || (le[13] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            U.value.length ? y("", !0) : (o(), D(Ps, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(Cs, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: le[4] || (le[4] = (H) => w.value = !1)
      }, {
        content: h(() => [...le[14] || (le[14] = [
          s("p", null, [
            C(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            C(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (o(), D(_c, {
        key: 0,
        identifier: g.value,
        onClose: le[5] || (le[5] = (H) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k.value ? (o(), D(Lt, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: le[8] || (le[8] = (H) => k.value = !1)
      }, {
        body: h(() => [
          s("div", B$, [
            s("div", V$, [
              le[15] || (le[15] = s("label", null, "Current Directory", -1)),
              s("code", W$, m($.value || "Not set"), 1)
            ]),
            s("div", G$, [
              le[16] || (le[16] = s("label", null, "New Directory Path", -1)),
              b(Nt, {
                modelValue: S.value,
                "onUpdate:modelValue": le[6] || (le[6] = (H) => S.value = H),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            le[17] || (le[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(Ue, {
            variant: "secondary",
            onClick: le[7] || (le[7] = (H) => k.value = !1)
          }, {
            default: h(() => [...le[18] || (le[18] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ue, {
            variant: "primary",
            disabled: !S.value.trim() || x.value,
            loading: x.value,
            onClick: K
          }, {
            default: h(() => [
              C(m(x.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(kc, {
        show: T.value,
        onClose: le[9] || (le[9] = (H) => T.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), H$ = /* @__PURE__ */ Te(j$, [["__scopeId", "data-v-9fca048b"]]), q$ = { class: "node-details" }, K$ = { class: "status-row" }, J$ = {
  key: 0,
  class: "detail-row"
}, Q$ = { class: "value" }, Y$ = { class: "detail-row" }, X$ = { class: "value" }, Z$ = {
  key: 1,
  class: "detail-row"
}, eC = { class: "value mono" }, tC = {
  key: 2,
  class: "detail-row"
}, sC = ["href"], nC = {
  key: 3,
  class: "detail-row"
}, oC = { class: "value mono small" }, aC = { class: "detail-row" }, lC = {
  key: 0,
  class: "value"
}, iC = {
  key: 1,
  class: "workflow-list"
}, rC = /* @__PURE__ */ Se({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = M(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = M(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, d) => (o(), D(Lt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (f) => a("close"))
    }, {
      body: h(() => [
        s("div", q$, [
          s("div", K$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ve(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (o(), i("div", J$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", Q$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", Y$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", X$, m(c.value), 1)
          ]),
          e.node.registry_id ? (o(), i("div", Z$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", eC, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (o(), i("div", tC, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              C(m(e.node.repository) + " ", 1),
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
            ], 8, sC)
          ])) : y("", !0),
          e.node.download_url ? (o(), i("div", nC, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", oC, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", aC, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (o(), i("span", lC, " Not used in any workflows ")) : (o(), i("div", iC, [
              (o(!0), i(W, null, ye(e.node.used_in_workflows, (f) => (o(), i("span", {
                key: f,
                class: "workflow-tag"
              }, m(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (f) => a("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            C(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), cC = /* @__PURE__ */ Te(rC, [["__scopeId", "data-v-b342f626"]]), uC = { class: "dialog-message" }, dC = {
  key: 0,
  class: "dialog-details"
}, mC = {
  key: 1,
  class: "dialog-warning"
}, fC = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), D(Lt, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", uC, m(e.message), 1),
        e.details && e.details.length ? (o(), i("div", dC, [
          (o(!0), i(W, null, ye(e.details, (a, l) => (o(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (o(), i("p", mC, [
          n[4] || (n[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          C(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            C(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), D(Ue, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            C(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(Ue, {
          variant: e.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [
            C(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ol = /* @__PURE__ */ Te(fC, [["__scopeId", "data-v-3670b9f5"]]), vC = { class: "mismatch-warning" }, pC = { class: "version-mismatch" }, gC = { class: "version-actual" }, hC = { class: "version-expected" }, yC = { style: { color: "var(--cg-color-warning)" } }, wC = { style: { color: "var(--cg-color-warning)" } }, _C = {
  key: 0,
  class: "community-status-badge"
}, kC = { key: 0 }, bC = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, $C = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, CC = { class: "criticality-control" }, xC = ["value", "disabled", "onChange"], SC = /* @__PURE__ */ Se({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const n = e, a = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: c,
      uninstallNode: u,
      queueNodeInstall: d,
      updateNodeCriticality: f
    } = ft(), v = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = _(!1), w = _(null), g = _(""), k = _(!1), $ = _(null), S = _(/* @__PURE__ */ new Set()), x = _(/* @__PURE__ */ new Set()), T = _(null), I = M(() => {
      if (!g.value.trim()) return v.value.nodes;
      const ge = g.value.toLowerCase();
      return v.value.nodes.filter(
        (be) => {
          var E, z;
          return be.name.toLowerCase().includes(ge) || ((E = be.description) == null ? void 0 : E.toLowerCase().includes(ge)) || ((z = be.repository) == null ? void 0 : z.toLowerCase().includes(ge));
        }
      );
    }), P = M(
      () => I.value.filter((ge) => ge.installed && ge.tracked)
    ), U = M(
      () => I.value.filter((ge) => !ge.installed && ge.tracked && !ge.issue_type)
    ), N = M(
      () => I.value.filter((ge) => ge.installed && !ge.tracked)
    ), B = M(
      () => I.value.filter((ge) => ge.issue_type === "version_gated")
    ), R = M(
      () => I.value.filter((ge) => ge.issue_type === "uninstallable")
    );
    function O(ge) {
      return ge.registry_id || ge.name;
    }
    function K(ge) {
      return S.value.has(O(ge));
    }
    async function ae(ge, be) {
      const E = ge.registry_id;
      if (!E) {
        a("toast", `Node "${ge.name}" has no package id for install`, "warning");
        return;
      }
      if (be === "git" && !ge.repository) {
        a("toast", `Node "${ge.name}" has no repository URL for git install`, "warning");
        return;
      }
      const z = {
        id: E,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      be === "git" && ge.repository && (z.repository = ge.repository, z.install_source = "git"), await d(z), S.value.add(O(ge)), a("toast", `✓ Queued install for "${ge.name}"`, "success");
    }
    function j(ge) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ge] || ge;
    }
    const de = M(() => n.versionMismatches.length > 0);
    function le(ge) {
      return !ge.used_in_workflows || ge.used_in_workflows.length === 0 ? "Not used in any workflows" : ge.used_in_workflows.length === 1 ? ge.used_in_workflows[0] : `${ge.used_in_workflows.length} workflows`;
    }
    function H(ge) {
      return ge.criticality === "optional" ? "optional" : "required";
    }
    function F(ge) {
      return x.value.has(ge.name);
    }
    async function Y(ge, be) {
      const E = be.target, z = H(ge), ue = E.value;
      if (ue !== z) {
        x.value = new Set(x.value).add(ge.name), ge.criticality = ue;
        try {
          const Ee = await f(ge.name, ue);
          if (Ee.status !== "success") {
            ge.criticality = z, a("toast", Ee.message || `Failed to update "${ge.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${ge.name}" as ${ue}`, "success");
        } catch (Ee) {
          ge.criticality = z, E.value = z, a("toast", `Error updating criticality: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
        } finally {
          const Ee = new Set(x.value);
          Ee.delete(ge.name), x.value = Ee;
        }
      }
    }
    function J(ge) {
      return ge.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ne(ge) {
      return ge.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function me(ge) {
      return ge.registry_id ? `Community-mapped package: ${ge.registry_id}` : "Community-mapped package";
    }
    function Z(ge) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function re(ge) {
      $.value = ge;
    }
    function Q() {
      a("open-node-manager");
    }
    function he(ge) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${ge}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const be = await r(ge);
            be.status === "success" ? (a("toast", `✓ Node "${ge}" tracked as development`, "success"), await Pe()) : a("toast", `Failed to track node: ${be.message || "Unknown error"}`, "error");
          } catch (be) {
            a("toast", `Error tracking node: ${be instanceof Error ? be.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function we(ge) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ge}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const be = await u(ge);
            be.status === "success" ? (a("toast", `✓ Node "${ge}" removed`, "success"), await Pe()) : a("toast", `Failed to remove node: ${be.message || "Unknown error"}`, "error");
          } catch (be) {
            a("toast", `Error removing node: ${be instanceof Error ? be.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Fe(ge) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${ge}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const be = await c(ge);
            be.status === "success" ? (a("toast", `✓ Node "${ge}" installed`, "success"), await Pe()) : a("toast", `Failed to install node: ${be.message || "Unknown error"}`, "error");
          } catch (be) {
            a("toast", `Error installing node: ${be instanceof Error ? be.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Le(ge) {
      T.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ge.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0, await ae(ge, "registry");
          } catch (be) {
            a("toast", `Error queueing install: ${be instanceof Error ? be.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ke(ge) {
      T.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ge.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0, await ae(ge, "git");
          } catch (be) {
            a("toast", `Error queueing git install: ${be instanceof Error ? be.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Pe() {
      p.value = !0, w.value = null;
      try {
        v.value = await l();
      } catch (ge) {
        w.value = ge instanceof Error ? ge.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return mt(Pe), (ge, be) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: be[0] || (be[0] = (E) => k.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: Q
              }, {
                default: h(() => [...be[7] || (be[7] = [
                  C(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b($n, {
            modelValue: g.value,
            "onUpdate:modelValue": be[1] || (be[1] = (E) => g.value = E),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (o(), D(Vs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (o(), D(Ws, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Pe
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            de.value ? (o(), D(At, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", vC, [
                  be[8] || (be[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (o(!0), i(W, null, ye(e.versionMismatches, (E) => (o(), D(ts, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...be[9] || (be[9] = [
                    C("⚠", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", pC, [
                      s("span", gC, m(E.actual), 1),
                      be[10] || (be[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", hC, m(E.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "warning",
                      size: "sm",
                      onClick: be[2] || (be[2] = (z) => a("repair-environment"))
                    }, {
                      default: h(() => [...be[11] || (be[11] = [
                        C(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            B.value.length ? (o(), D(At, {
              key: 1,
              title: "BLOCKED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(B.value, (E) => (o(), D(ts, {
                  key: `blocked-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...be[12] || (be[12] = [
                    C("⛔", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", yC, m(J(E)), 1)
                  ]),
                  details: h(() => [
                    b(Dt, {
                      label: "Guidance:",
                      value: E.issue_guidance || ne(E)
                    }, null, 8, ["value"]),
                    b(Dt, {
                      label: "Used by:",
                      value: le(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => re(E)
                    }, {
                      default: h(() => [...be[13] || (be[13] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            R.value.length ? (o(), D(At, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(R.value, (E) => (o(), D(ts, {
                  key: `community-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...be[14] || (be[14] = [
                    C("⚠", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", wC, m(me(E)), 1)
                  ]),
                  details: h(() => [
                    b(Dt, {
                      label: "Guidance:",
                      value: E.issue_guidance || Z(E)
                    }, null, 8, ["value"]),
                    b(Dt, {
                      label: "Used by:",
                      value: le(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => re(E)
                    }, {
                      default: h(() => [...be[15] || (be[15] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    K(E) ? (o(), i("span", _C, "Queued")) : (o(), i(W, { key: 1 }, [
                      E.registry_id ? (o(), D(Me, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (z) => Le(E)
                      }, {
                        default: h(() => [...be[16] || (be[16] = [
                          C(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      E.repository ? (o(), D(Me, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (z) => ke(E)
                      }, {
                        default: h(() => [...be[17] || (be[17] = [
                          C(" Install via Git ", -1)
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
            N.value.length ? (o(), D(At, {
              key: 3,
              title: "UNTRACKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(N.value, (E) => (o(), D(ts, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...be[18] || (be[18] = [
                    C("?", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...be[19] || (be[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(Dt, {
                      label: "Used by:",
                      value: le(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => re(E)
                    }, {
                      default: h(() => [...be[20] || (be[20] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => he(E.name)
                    }, {
                      default: h(() => [...be[21] || (be[21] = [
                        C(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (z) => we(E.name)
                    }, {
                      default: h(() => [...be[22] || (be[22] = [
                        C(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (o(), D(At, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(P.value, (E) => (o(), D(ts, {
                  key: E.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    C(m(E.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    E.version ? (o(), i("span", kC, m(E.source === "development" ? "" : "v") + m(E.version), 1)) : (o(), i("span", bC, "version unknown")),
                    s("span", $C, " • " + m(j(E.source)), 1)
                  ]),
                  details: h(() => [
                    b(Dt, {
                      label: "Used by:",
                      value: le(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => re(E)
                    }, {
                      default: h(() => [...be[23] || (be[23] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", CC, [
                      be[25] || (be[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: H(E),
                        disabled: F(E),
                        onChange: (z) => Y(E, z)
                      }, [...be[24] || (be[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, xC)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            U.value.length ? (o(), D(At, {
              key: 5,
              title: "MISSING",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(U.value, (E) => (o(), D(ts, {
                  key: E.name,
                  status: "missing"
                }, {
                  icon: h(() => [...be[26] || (be[26] = [
                    C("!", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...be[27] || (be[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(Dt, {
                      label: "Required by:",
                      value: le(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => re(E)
                    }, {
                      default: h(() => [...be[28] || (be[28] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => Fe(E.name)
                    }, {
                      default: h(() => [...be[29] || (be[29] = [
                        C(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !P.value.length && !U.value.length && !B.value.length && !R.value.length && !N.value.length ? (o(), D(Ps, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(Cs, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: be[4] || (be[4] = (E) => k.value = !1)
      }, {
        content: h(() => [...be[30] || (be[30] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            C(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            C(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            C(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            C(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            C(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: be[3] || (be[3] = (E) => k.value = !1)
          }, {
            default: h(() => [...be[31] || (be[31] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $.value ? (o(), D(cC, {
        key: 0,
        node: $.value,
        onClose: be[5] || (be[5] = (E) => $.value = null)
      }, null, 8, ["node"])) : y("", !0),
      T.value ? (o(), D(Ol, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: be[6] || (be[6] = (E) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), IC = /* @__PURE__ */ Te(SC, [["__scopeId", "data-v-edfa1c86"]]), EC = { class: "setting-info" }, TC = { class: "setting-label" }, MC = {
  key: 0,
  class: "required-marker"
}, PC = {
  key: 0,
  class: "setting-description"
}, RC = { class: "setting-control" }, DC = /* @__PURE__ */ Se({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Ve(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", EC, [
        s("div", TC, [
          C(m(e.label) + " ", 1),
          e.required ? (o(), i("span", MC, "*")) : y("", !0)
        ]),
        e.description ? (o(), i("div", PC, m(e.description), 1)) : y("", !0)
      ]),
      s("div", RC, [
        rt(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), In = /* @__PURE__ */ Te(DC, [["__scopeId", "data-v-3e106b1c"]]), LC = ["type", "value", "placeholder", "disabled"], NC = /* @__PURE__ */ Se({
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
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, r = _(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return mt(() => {
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
    }), (u, d) => (o(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Ve(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Is((f) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Is((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (f) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (f) => u.$emit("blur"))
    }, null, 42, LC));
  }
}), Pn = /* @__PURE__ */ Te(NC, [["__scopeId", "data-v-0380d08f"]]), UC = { class: "toggle" }, OC = ["checked", "disabled"], AC = /* @__PURE__ */ Se({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", UC, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, OC),
      n[1] || (n[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ni = /* @__PURE__ */ Te(AC, [["__scopeId", "data-v-71c0f550"]]), Qa = "ComfyGit.Deploy.GitHubPAT";
function bc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function zC(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function FC() {
  function e() {
    try {
      return localStorage.getItem(Qa);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(Qa, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function n() {
    try {
      localStorage.removeItem(Qa);
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
    clearToken: n,
    hasToken: a,
    isRemoteSsh: bc,
    isRemoteHttps: zC
  };
}
const BC = { class: "workspace-settings-content" }, VC = { class: "settings-section" }, WC = { class: "path-setting" }, GC = { class: "path-value" }, jC = { class: "path-setting" }, HC = { class: "path-value" }, qC = { class: "settings-section" }, KC = { class: "token-setting" }, JC = {
  key: 0,
  class: "token-warning"
}, QC = { class: "token-actions" }, YC = { class: "settings-section" }, XC = { class: "settings-section" }, ZC = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ft(), { getToken: f, setToken: v, clearToken: p, hasToken: w } = FC(), g = _(!1), k = _(null), $ = _(null), S = _(null), x = _(null), T = _(""), I = _(""), P = _(""), U = _(""), N = _(!1), B = _(!1), R = _(!1), O = _(""), K = _(!1), ae = _(!1), j = _(null), de = _(!1), le = _(!0);
    function H(Fe) {
      return Fe.join(" ");
    }
    function F(Fe) {
      return Fe.trim() ? Fe.trim().split(/\s+/) : [];
    }
    const Y = M(() => {
      if (!x.value) return !1;
      const Fe = N.value, Le = B.value, ke = R.value, Pe = U.value !== H(x.value.comfyui_extra_args || []);
      return Fe || Le || ke || Pe;
    }), J = M(() => w());
    async function ne() {
      var Fe;
      g.value = !0, k.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), x.value = { ...S.value }, T.value = S.value.civitai_api_key || "", I.value = S.value.huggingface_token || "", U.value = H(S.value.comfyui_extra_args || []), P.value = f() || "", O.value = P.value, N.value = !1, B.value = !1, R.value = !1, j.value = null;
        const Le = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        de.value = Le !== "false", le.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Pe = (Fe = (await u()).remotes) == null ? void 0 : Fe.find((ge) => ge.name === "origin");
          K.value = !!(Pe && bc(Pe.url));
        } catch {
          K.value = !1;
        }
      } catch (Le) {
        k.value = Le instanceof Error ? Le.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function me() {
      var Fe;
      $.value = null;
      try {
        const Le = {};
        N.value && (Le.civitai_api_key = T.value || null), B.value && (Le.huggingface_token = I.value || null), U.value !== H(((Fe = x.value) == null ? void 0 : Fe.comfyui_extra_args) || []) && (Le.comfyui_extra_args = F(U.value)), await c(Le, a.workspacePath || void 0), R.value && (P.value ? v(P.value) : p()), await ne(), $.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          $.value = null;
        }, 3e3);
      } catch (Le) {
        const ke = Le instanceof Error ? Le.message : "Failed to save settings";
        $.value = { type: "error", message: ke }, l("error", ke);
      }
    }
    function Z() {
      x.value && (T.value = x.value.civitai_api_key || "", I.value = x.value.huggingface_token || "", U.value = H(x.value.comfyui_extra_args || []), P.value = O.value, N.value = !1, B.value = !1, R.value = !1, j.value = null, $.value = null);
    }
    async function re() {
      if (P.value) {
        ae.value = !0, j.value = null;
        try {
          const Fe = await d(P.value);
          j.value = {
            type: Fe.status === "success" ? "success" : "error",
            message: Fe.message
          };
        } catch (Fe) {
          j.value = {
            type: "error",
            message: Fe instanceof Error ? Fe.message : "Connection test failed"
          };
        } finally {
          ae.value = !1;
        }
      }
    }
    function Q() {
      P.value = "", R.value = !0, j.value = null;
    }
    function he(Fe) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Fe)), console.log("[ComfyGit] Auto-refresh setting saved:", Fe);
    }
    function we(Fe) {
      Fe ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Fe ? "enabled" : "disabled");
    }
    return t({
      saveSettings: me,
      resetSettings: Z,
      hasChanges: Y,
      loadSettings: ne
    }), mt(ne), (Fe, Le) => (o(), i("div", BC, [
      g.value ? (o(), D(Vs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (o(), D(Ws, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: ne
      }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
        b(At, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var ke, Pe;
            return [
              s("div", VC, [
                s("div", WC, [
                  Le[9] || (Le[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Le[10] || (Le[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", GC, m(((ke = S.value) == null ? void 0 : ke.workspace_path) || "Loading..."), 1)
                ]),
                s("div", jC, [
                  Le[11] || (Le[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Le[12] || (Le[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", HC, m(((Pe = S.value) == null ? void 0 : Pe.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(At, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", qC, [
              b(In, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(Pn, {
                    modelValue: T.value,
                    "onUpdate:modelValue": Le[0] || (Le[0] = (ke) => T.value = ke),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Le[1] || (Le[1] = (ke) => N.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(In, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  b(Pn, {
                    modelValue: I.value,
                    "onUpdate:modelValue": Le[2] || (Le[2] = (ke) => I.value = ke),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Le[3] || (Le[3] = (ke) => B.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(In, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", KC, [
                    b(Pn, {
                      modelValue: P.value,
                      "onUpdate:modelValue": Le[4] || (Le[4] = (ke) => P.value = ke),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Le[5] || (Le[5] = (ke) => R.value = !0)
                    }, null, 8, ["modelValue"]),
                    K.value ? (o(), i("div", JC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Le[15] || (Le[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", QC, [
                      b(Me, {
                        variant: "ghost",
                        size: "xs",
                        loading: ae.value,
                        disabled: !P.value || ae.value,
                        onClick: re
                      }, {
                        default: h(() => [...Le[13] || (Le[13] = [
                          C(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      J.value ? (o(), D(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: Q
                      }, {
                        default: h(() => [...Le[14] || (Le[14] = [
                          C(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    j.value ? (o(), i("div", {
                      key: 1,
                      class: Ve(["token-test-result", j.value.type])
                    }, m(j.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b(At, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", YC, [
              b(In, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(Pn, {
                    modelValue: U.value,
                    "onUpdate:modelValue": Le[6] || (Le[6] = (ke) => U.value = ke),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              Le[16] || (Le[16] = s("div", { class: "setting-hint" }, [
                C(" Common flags: "),
                s("code", null, "--lowvram"),
                C(", "),
                s("code", null, "--highvram"),
                C(", "),
                s("code", null, "--listen 0.0.0.0"),
                C(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(At, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", XC, [
              b(In, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Ni, {
                    modelValue: de.value,
                    "onUpdate:modelValue": [
                      Le[7] || (Le[7] = (ke) => de.value = ke),
                      he
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(In, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  b(Ni, {
                    modelValue: le.value,
                    "onUpdate:modelValue": [
                      Le[8] || (Le[8] = (ke) => le.value = ke),
                      we
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $.value ? (o(), D(Nl, {
          key: 0,
          variant: ($.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Wt({ color: $.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m($.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), $c = /* @__PURE__ */ Te(ZC, [["__scopeId", "data-v-f1bdc574"]]), ex = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = _(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (o(), D(Qt, null, {
      header: h(() => [
        b(Yt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  C(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (o(), D(Me, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  C(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
        b($c, {
          ref_key: "contentRef",
          ref: t,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), tx = { class: "env-title" }, sx = {
  key: 0,
  class: "current-badge"
}, nx = {
  key: 0,
  class: "branch-info"
}, ox = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), D(ts, {
      status: e.isCurrent ? "synced" : void 0
    }, vs({
      icon: h(() => [
        C(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", tx, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), i("span", sx, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (o(), i("span", nx, [
          n[0] || (n[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          C(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        rt(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          b(Dt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          b(Dt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          b(Dt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (o(), D(Dt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), ax = /* @__PURE__ */ Te(ox, [["__scopeId", "data-v-9231917a"]]), lx = { class: "env-details" }, ix = { class: "status-row" }, rx = {
  key: 0,
  class: "detail-row"
}, cx = { class: "value mono" }, ux = {
  key: 1,
  class: "detail-row"
}, dx = { class: "value mono small" }, mx = { class: "collapsible-section" }, fx = { class: "value" }, vx = {
  key: 0,
  class: "collapsible-body"
}, px = { class: "item-list" }, gx = { class: "item-name" }, hx = { class: "item-name" }, yx = { class: "item-name" }, wx = { class: "item-name" }, _x = {
  key: 0,
  class: "empty-list"
}, kx = { class: "collapsible-section" }, bx = { class: "value" }, $x = {
  key: 0,
  class: "collapsible-body"
}, Cx = { class: "item-list" }, xx = { class: "item-name" }, Sx = {
  key: 0,
  class: "item-meta"
}, Ix = {
  key: 0,
  class: "empty-list"
}, Ex = { class: "collapsible-section" }, Tx = { class: "value" }, Mx = {
  key: 0,
  class: "missing-count"
}, Px = {
  key: 0,
  class: "collapsible-body"
}, Rx = { class: "item-list" }, Dx = { class: "model-row" }, Lx = { class: "item-name" }, Nx = { class: "model-meta" }, Ux = { class: "item-meta" }, Ox = {
  key: 0,
  class: "item-meta"
}, Ax = {
  key: 0,
  class: "empty-list"
}, zx = {
  key: 2,
  class: "section-divider"
}, Fx = {
  key: 3,
  class: "detail-row"
}, Bx = { class: "value" }, Vx = { class: "footer-actions" }, Wx = /* @__PURE__ */ Se({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = M(() => {
      var f;
      if (!((f = n.detail) != null && f.workflows)) return !0;
      const d = n.detail.workflows;
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
    return (d, f) => (o(), D(Lt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[6] || (f[6] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, p, w, g, k, $, S, x, T, I, P, U, N, B;
        return [
          s("div", lx, [
            s("div", ix, [
              f[7] || (f[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Ve(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (o(), i("div", rx, [
              f[8] || (f[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", cx, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (o(), i("div", ux, [
              f[9] || (f[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", dx, m(e.environment.path), 1)
            ])) : y("", !0),
            f[18] || (f[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", mx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (R) => r("workflows"))
              }, [
                f[10] || (f[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", fx, m(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (o(), i("div", vx, [
                s("div", px, [
                  (o(!0), i(W, null, ye(e.detail.workflows.synced, (R) => (o(), i("div", {
                    key: "synced-" + R,
                    class: "list-item"
                  }, [
                    s("span", gx, m(R), 1),
                    f[11] || (f[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (o(!0), i(W, null, ye(e.detail.workflows.new, (R) => (o(), i("div", {
                    key: "new-" + R,
                    class: "list-item"
                  }, [
                    s("span", hx, m(R), 1),
                    f[12] || (f[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (o(!0), i(W, null, ye(e.detail.workflows.modified, (R) => (o(), i("div", {
                    key: "mod-" + R,
                    class: "list-item"
                  }, [
                    s("span", yx, m(R), 1),
                    f[13] || (f[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (o(!0), i(W, null, ye(e.detail.workflows.deleted, (R) => (o(), i("div", {
                    key: "del-" + R,
                    class: "list-item"
                  }, [
                    s("span", wx, m(R), 1),
                    f[14] || (f[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (o(), i("div", _x, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", kx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (R) => r("nodes"))
              }, [
                f[15] || (f[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", bx, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              ($ = e.detail) != null && $.nodes && l.value.has("nodes") ? (o(), i("div", $x, [
                s("div", Cx, [
                  (o(!0), i(W, null, ye(e.detail.nodes, (R) => (o(), i("div", {
                    key: R.name,
                    class: "list-item"
                  }, [
                    s("span", xx, m(R.name), 1),
                    R.version ? (o(), i("span", Sx, m(R.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (o(), i("div", Ix, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", Ex, [
              s("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (R) => r("models"))
              }, [
                f[16] || (f[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", Tx, [
                  C(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (T = (x = e.detail) == null ? void 0 : x.models) != null && T.missing.length ? (o(), i("span", Mx, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (I = e.detail) != null && I.models ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (o(), i("div", Px, [
                s("div", Rx, [
                  (o(!0), i(W, null, ye(e.detail.models.missing, (R) => (o(), i("div", {
                    key: R.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", Dx, [
                      s("span", Lx, m(R.filename), 1),
                      s("span", {
                        class: Ve(["criticality-badge", R.criticality])
                      }, m(R.criticality), 3)
                    ]),
                    s("div", Nx, [
                      s("span", Ux, m(R.category), 1),
                      R.workflow_names.length ? (o(), i("span", Ox, " used by: " + m(R.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (o(), i("div", Ax, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (U = e.detail) != null && U.created_at || e.environment.created_at ? (o(), i("div", zx)) : y("", !0),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (o(), i("div", Fx, [
              f[17] || (f[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Bx, m(u(((B = e.detail) == null ? void 0 : B.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", Vx, [
          b(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("export", e.environment.name))
          }, {
            default: h(() => [...f[19] || (f[19] = [
              C(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (o(), D(Ue, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("delete", e.environment.name))
          }, {
            default: h(() => [...f[20] || (f[20] = [
              C(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[22] || (f[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: f[5] || (f[5] = (v) => a("close"))
          }, {
            default: h(() => [...f[21] || (f[21] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gx = /* @__PURE__ */ Te(Wx, [["__scopeId", "data-v-750671f5"]]), Cc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], xc = "3.12", Al = [
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
], Sc = "auto", jx = { class: "progress-bar" }, Hx = /* @__PURE__ */ Se({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, n = M(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (o(), i("div", jx, [
      s("div", {
        class: Ve(["progress-fill", e.variant]),
        style: Wt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ic = /* @__PURE__ */ Te(Hx, [["__scopeId", "data-v-1beb0512"]]), qx = { class: "task-progress" }, Kx = { class: "progress-info" }, Jx = { class: "progress-percentage" }, Qx = { class: "progress-message" }, Yx = {
  key: 0,
  class: "progress-steps"
}, Xx = { class: "step-icon" }, Zx = { class: "step-label" }, e3 = /* @__PURE__ */ Se({
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
    function n(l) {
      const r = t.steps.find((c) => c.id === l);
      return r ? t.progress >= r.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = n(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (o(), i("div", qx, [
      b(Ic, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", Kx, [
        s("span", Jx, m(e.progress) + "%", 1),
        s("span", Qx, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (o(), i("div", Yx, [
        (o(!0), i(W, null, ye(e.steps, (c) => (o(), i("div", {
          key: c.id,
          class: Ve(["step", n(c.id)])
        }, [
          s("span", Xx, m(a(c.id)), 1),
          s("span", Zx, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ra = /* @__PURE__ */ Te(e3, [["__scopeId", "data-v-9d1de66c"]]), t3 = {
  key: 0,
  class: "create-env-form"
}, s3 = { class: "form-field" }, n3 = { class: "input-wrapper" }, o3 = {
  key: 0,
  class: "validating-indicator"
}, a3 = {
  key: 1,
  class: "valid-indicator"
}, l3 = {
  key: 0,
  class: "field-error"
}, i3 = { class: "form-field" }, r3 = ["value"], c3 = { class: "form-field" }, u3 = ["disabled"], d3 = ["value"], m3 = { class: "form-field" }, f3 = ["value"], v3 = { class: "form-field form-field--checkbox" }, p3 = { class: "form-checkbox" }, g3 = {
  key: 1,
  class: "create-env-progress"
}, h3 = { class: "creating-intro" }, y3 = {
  key: 0,
  class: "progress-warning"
}, w3 = {
  key: 1,
  class: "create-error"
}, _3 = { class: "error-message" }, k3 = {
  key: 1,
  class: "footer-status"
}, b3 = 10, $3 = /* @__PURE__ */ Se({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ft(), u = _(""), d = _(xc), f = _("latest"), v = _(Sc), p = _(!1), w = _(null), g = _(!1), k = _(!1);
    let $ = null, S = 0;
    const x = M(() => !!u.value.trim() && k.value && !w.value && !g.value && !P.value), T = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), I = _(!1), P = _(!1), U = _({
      progress: 0,
      message: ""
    });
    let N = null, B = 0;
    const R = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], O = _(null);
    $t(u, (J) => {
      k.value = !1, $ && (clearTimeout($), $ = null);
      const ne = J.trim();
      if (!ne) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, $ = setTimeout(() => {
        K(ne);
      }, 400);
    });
    async function K(J, ne = !1) {
      const me = J.trim();
      if (!me)
        return k.value = !1, g.value = !1, w.value = ne ? "Environment name is required" : null, !1;
      const Z = ++S;
      g.value = !0;
      try {
        const re = await c(me);
        return Z !== S ? !1 : (w.value = re.valid ? null : re.error || "Invalid name", k.value = !!re.valid, !!re.valid);
      } catch {
        return Z !== S || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        Z === S && (g.value = !1);
      }
    }
    async function ae() {
      $ && (clearTimeout($), $ = null), await K(u.value, !0);
    }
    function j() {
      P.value || n("close");
    }
    async function de() {
      const J = u.value.trim();
      if (!J) {
        w.value = "Environment name is required";
        return;
      }
      if ($ && (clearTimeout($), $ = null), !!await K(J, !0)) {
        P.value = !0, U.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const me = {
            name: J,
            python_version: d.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Z = await l(me);
          Z.status === "started" ? le() : Z.status === "error" && (U.value = {
            progress: 0,
            message: Z.message || "Failed to start creation",
            error: Z.message
          });
        } catch (me) {
          U.value = {
            progress: 0,
            message: me instanceof Error ? me.message : "Unknown error",
            error: me instanceof Error ? me.message : "Unknown error"
          };
        }
      }
    }
    function le() {
      N || (B = 0, N = window.setInterval(async () => {
        try {
          const J = await r();
          B = 0, U.value = {
            progress: J.progress ?? 0,
            message: J.message,
            phase: J.phase,
            error: J.error
          }, J.state === "complete" ? (H(), n("created", J.environment_name || u.value.trim(), p.value)) : J.state === "error" ? (H(), U.value.error = J.error || J.message) : J.state === "idle" && P.value && (H(), U.value.error = "Creation was interrupted. Please try again.");
        } catch {
          B++, B >= b3 && (H(), U.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function H() {
      N && (clearInterval(N), N = null);
    }
    function F() {
      P.value = !1, U.value = { progress: 0, message: "" }, n("close");
    }
    async function Y() {
      I.value = !0;
      try {
        T.value = await a();
      } catch (J) {
        console.error("Failed to load ComfyUI releases:", J);
      } finally {
        I.value = !1;
      }
    }
    return mt(async () => {
      var J;
      await Kt(), (J = O.value) == null || J.focus(), Y();
    }), jn(() => {
      H(), $ && (clearTimeout($), $ = null);
    }), (J, ne) => (o(), D(Lt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: j
    }, {
      body: h(() => [
        P.value ? (o(), i("div", g3, [
          s("p", h3, [
            ne[12] || (ne[12] = C(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            ne[13] || (ne[13] = C("... ", -1))
          ]),
          b(ra, {
            progress: U.value.progress,
            message: U.value.message,
            "current-phase": U.value.phase,
            variant: U.value.error ? "error" : "default",
            "show-steps": !0,
            steps: R
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          U.value.error ? y("", !0) : (o(), i("p", y3, " This may take several minutes. Please wait... ")),
          U.value.error ? (o(), i("div", w3, [
            s("p", _3, m(U.value.error), 1)
          ])) : y("", !0)
        ])) : (o(), i("div", t3, [
          s("div", s3, [
            ne[6] || (ne[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", n3, [
              Bt(s("input", {
                ref_key: "nameInput",
                ref: O,
                "onUpdate:modelValue": ne[0] || (ne[0] = (me) => u.value = me),
                type: "text",
                class: Ve(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: Is(de, ["enter"]),
                onBlur: ae
              }, null, 34), [
                [ho, u.value]
              ]),
              g.value ? (o(), i("span", o3, "...")) : k.value ? (o(), i("span", a3, "✓")) : y("", !0)
            ]),
            w.value ? (o(), i("div", l3, m(w.value), 1)) : y("", !0),
            ne[7] || (ne[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", i3, [
            ne[8] || (ne[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Bt(s("select", {
              "onUpdate:modelValue": ne[1] || (ne[1] = (me) => d.value = me),
              class: "form-select"
            }, [
              (o(!0), i(W, null, ye(it(Cc), (me) => (o(), i("option", {
                key: me,
                value: me
              }, m(me), 9, r3))), 128))
            ], 512), [
              [An, d.value]
            ])
          ]),
          s("div", c3, [
            ne[9] || (ne[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Bt(s("select", {
              "onUpdate:modelValue": ne[2] || (ne[2] = (me) => f.value = me),
              class: "form-select",
              disabled: I.value
            }, [
              (o(!0), i(W, null, ye(T.value, (me) => (o(), i("option", {
                key: me.tag_name,
                value: me.tag_name
              }, m(me.name), 9, d3))), 128))
            ], 8, u3), [
              [An, f.value]
            ])
          ]),
          s("div", m3, [
            ne[10] || (ne[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Bt(s("select", {
              "onUpdate:modelValue": ne[3] || (ne[3] = (me) => v.value = me),
              class: "form-select"
            }, [
              (o(!0), i(W, null, ye(it(Al), (me) => (o(), i("option", {
                key: me,
                value: me
              }, m(me) + m(me === "auto" ? " (detect GPU)" : ""), 9, f3))), 128))
            ], 512), [
              [An, v.value]
            ])
          ]),
          s("div", v3, [
            s("label", p3, [
              Bt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ne[4] || (ne[4] = (me) => p.value = me)
              }, null, 512), [
                [ia, p.value]
              ]),
              ne[11] || (ne[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (o(), i(W, { key: 1 }, [
          U.value.error ? (o(), D(Ue, {
            key: 0,
            variant: "secondary",
            onClick: F
          }, {
            default: h(() => [...ne[16] || (ne[16] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })) : (o(), i("span", k3, " Creating environment... "))
        ], 64)) : (o(), i(W, { key: 0 }, [
          b(Ue, {
            variant: "primary",
            disabled: !x.value,
            onClick: de
          }, {
            default: h(() => [...ne[14] || (ne[14] = [
              C(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ue, {
            variant: "secondary",
            onClick: ne[5] || (ne[5] = (me) => n("close"))
          }, {
            default: h(() => [...ne[15] || (ne[15] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), C3 = /* @__PURE__ */ Te($3, [["__scopeId", "data-v-3faa3d9b"]]), x3 = /* @__PURE__ */ Se({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getEnvironments: l, getEnvironmentDetails: r } = ft(), c = _([]), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _(!1), w = _(null), g = _(null), k = M(() => [...c.value].sort((N, B) => N.is_current !== B.is_current ? N.is_current ? -1 : 1 : N.name.localeCompare(B.name))), $ = M(() => {
      if (!f.value.trim()) return k.value;
      const N = f.value.toLowerCase();
      return k.value.filter(
        (B) => {
          var R;
          return B.name.toLowerCase().includes(N) || ((R = B.current_branch) == null ? void 0 : R.toLowerCase().includes(N));
        }
      );
    });
    function S(N, B) {
      p.value = !1, a("created", N, B);
    }
    function x() {
      p.value = !0;
    }
    async function T(N) {
      w.value = N, g.value = null;
      const B = await r(N.name);
      B && (g.value = B);
    }
    function I(N) {
      w.value = null, g.value = null, a("delete", N);
    }
    function P(N) {
      w.value = null, g.value = null, a("export", N);
    }
    async function U() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return mt(U), t({
      loadEnvironments: U,
      openCreateModal: x
    }), (N, B) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: B[1] || (B[1] = (R) => v.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (o(), D(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: x
              }, {
                default: h(() => [...B[7] || (B[7] = [
                  C(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Me, {
                variant: "secondary",
                size: "sm",
                onClick: B[0] || (B[0] = (R) => N.$emit("import"))
              }, {
                default: h(() => [...B[8] || (B[8] = [
                  C(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b($n, {
            modelValue: f.value,
            "onUpdate:modelValue": B[2] || (B[2] = (R) => f.value = R),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (o(), D(Vs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (o(), D(Ws, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            $.value.length ? (o(), D(At, {
              key: 0,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye($.value, (R) => (o(), D(ax, {
                  key: R.name,
                  "environment-name": R.name,
                  "is-current": R.is_current,
                  "current-branch": R.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !R.is_current && e.canSwitch ? (o(), D(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => N.$emit("switch", R.name)
                    }, {
                      default: h(() => [...B[9] || (B[9] = [
                        C(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => T(R)
                    }, {
                      default: h(() => [...B[10] || (B[10] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => N.$emit("export", R.name)
                    }, {
                      default: h(() => [...B[11] || (B[11] = [
                        C(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            $.value.length ? y("", !0) : (o(), D(Ps, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, vs({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (o(), D(Me, {
                    key: 0,
                    variant: "primary",
                    onClick: x
                  }, {
                    default: h(() => [...B[12] || (B[12] = [
                      C(" Create Environment ", -1)
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
      b(Cs, {
        show: v.value,
        title: "About Environments",
        onClose: B[4] || (B[4] = (R) => v.value = !1)
      }, {
        content: h(() => [...B[13] || (B[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            C(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            onClick: B[3] || (B[3] = (R) => v.value = !1)
          }, {
            default: h(() => [...B[14] || (B[14] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), D(Gx, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: B[5] || (B[5] = (R) => {
          w.value = null, g.value = null;
        }),
        onDelete: I,
        onExport: P
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (o(), D(C3, {
        key: 1,
        onClose: B[6] || (B[6] = (R) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), S3 = /* @__PURE__ */ Te(x3, [["__scopeId", "data-v-01163d8c"]]), I3 = { class: "file-path" }, E3 = { class: "file-path-text" }, T3 = ["title"], M3 = /* @__PURE__ */ Se({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = _(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(t.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (o(), i("div", I3, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", E3, m(e.path), 1),
      e.copyable ? (o(), i("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(n.value ? "✓" : "📋"), 9, T3)) : y("", !0)
    ]));
  }
}), P3 = /* @__PURE__ */ Te(M3, [["__scopeId", "data-v-f0982173"]]), R3 = { class: "base-textarea-wrapper" }, D3 = ["value", "rows", "placeholder", "disabled", "maxlength"], L3 = {
  key: 0,
  class: "base-textarea-count"
}, N3 = /* @__PURE__ */ Se({
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
    const n = e, a = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || n.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, c) => (o(), i("div", R3, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Is(Ct((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Is(Ct((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Is(l, ["enter"])
        ]
      }, null, 40, D3),
      e.showCharCount && e.maxLength ? (o(), i("div", L3, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), zn = /* @__PURE__ */ Te(N3, [["__scopeId", "data-v-c6d16c93"]]), U3 = ["checked", "disabled"], O3 = { class: "base-checkbox-box" }, A3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, z3 = {
  key: 0,
  class: "base-checkbox-label"
}, F3 = /* @__PURE__ */ Se({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", {
      class: Ve(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, U3),
      s("span", O3, [
        e.modelValue ? (o(), i("svg", A3, [...n[1] || (n[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (o(), i("span", z3, [
        rt(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ca = /* @__PURE__ */ Te(F3, [["__scopeId", "data-v-bf17c831"]]), B3 = { class: "export-blocked" }, V3 = { class: "error-header" }, W3 = { class: "error-summary" }, G3 = { class: "error-title" }, j3 = { class: "error-description" }, H3 = { class: "issues-list" }, q3 = { class: "issue-message" }, K3 = {
  key: 0,
  class: "issue-details"
}, J3 = ["onClick"], Q3 = { class: "issue-fix" }, Y3 = {
  key: 0,
  class: "commit-section"
}, X3 = {
  key: 0,
  class: "issues-warning"
}, Z3 = {
  key: 1,
  class: "commit-error"
}, eS = /* @__PURE__ */ Se({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = _(""), f = Cn({}), v = M(() => n.mode === "publish" ? "Publish" : "Export"), p = M(
      () => n.issues.some((x) => x.type === "uncommitted_workflows" || x.type === "uncommitted_git_changes")
    ), w = M(
      () => n.issues.some((x) => x.type === "unresolved_issues")
    ), g = M(
      () => w.value && !u.value
    ), k = M(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function $(x) {
      const T = n.issues[x];
      return f[x] || T.details.length <= 3 ? T.details : T.details.slice(0, 3);
    }
    async function S() {
      var x;
      if (k.value) {
        c.value = !0, d.value = "";
        try {
          const T = await l(r.value.trim(), u.value);
          if (T.status === "success")
            a("committed");
          else if (T.status === "blocked") {
            const I = ((x = T.issues) == null ? void 0 : x.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${I}`;
          } else
            d.value = T.message || "Commit failed";
        } catch (T) {
          d.value = T instanceof Error ? T.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (x, T) => (o(), D(Lt, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: T[4] || (T[4] = (I) => x.$emit("close"))
    }, {
      body: h(() => [
        s("div", B3, [
          s("div", V3, [
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
            s("div", W3, [
              s("h3", G3, m(v.value) + " blocked", 1),
              s("p", j3, m(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", H3, [
            (o(!0), i(W, null, ye(e.issues, (I, P) => (o(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", q3, m(I.message), 1),
              I.details.length ? (o(), i("div", K3, [
                (o(!0), i(W, null, ye($(P), (U, N) => (o(), i("div", {
                  key: N,
                  class: "issue-detail"
                }, m(U), 1))), 128)),
                I.details.length > 3 && !f[P] ? (o(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (U) => f[P] = !0
                }, " +" + m(I.details.length - 3) + " more ", 9, J3)) : y("", !0)
              ])) : y("", !0),
              s("div", Q3, [
                I.type === "uncommitted_workflows" ? (o(), i(W, { key: 0 }, [
                  C(" Commit your workflow changes before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : I.type === "uncommitted_git_changes" ? (o(), i(W, { key: 1 }, [
                  C(" Commit your changes before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : I.type === "unresolved_issues" ? (o(), i(W, { key: 2 }, [
                  C(" Resolve all workflow issues before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (o(), i("div", Y3, [
            w.value ? (o(), i("div", X3, [
              T[7] || (T[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(ca, {
                modelValue: u.value,
                "onUpdate:modelValue": T[0] || (T[0] = (I) => u.value = I),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...T[6] || (T[6] = [
                  C(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(zn, {
              modelValue: r.value,
              "onUpdate:modelValue": T[1] || (T[1] = (I) => r.value = I),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: S,
              onCtrlEnter: S
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (o(), i("div", Z3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (o(), i(W, { key: 0 }, [
          b(Ue, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (I) => x.$emit("close"))
          }, {
            default: h(() => [...T[8] || (T[8] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ue, {
            variant: u.value ? "danger" : "primary",
            disabled: !k.value,
            loading: c.value,
            onClick: S
          }, {
            default: h(() => [
              C(m(c.value ? "Committing..." : u.value ? `Force Commit & ${v.value}` : `Commit & ${v.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (o(), D(Ue, {
          key: 1,
          variant: "primary",
          onClick: T[3] || (T[3] = (I) => x.$emit("close"))
        }, {
          default: h(() => [...T[9] || (T[9] = [
            C(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), tS = /* @__PURE__ */ Te(eS, [["__scopeId", "data-v-a8990107"]]), sS = { class: "repro-warning" }, nS = { class: "repro-warning-content" }, oS = {
  key: 0,
  class: "warning-group"
}, aS = { class: "warning-list" }, lS = { key: 0 }, iS = {
  key: 1,
  class: "warning-group"
}, rS = { class: "warning-list" }, cS = { key: 0 }, uS = /* @__PURE__ */ Se({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, n = M(() => t.warnings.models_without_sources || []), a = M(() => t.warnings.nodes_without_provenance || []), l = M(() => n.value.length), r = M(() => a.value.length), c = M(() => l.value + r.value), u = M(
      () => n.value.slice(0, t.maxItemsPerGroup)
    ), d = M(
      () => a.value.slice(0, t.maxItemsPerGroup)
    ), f = M(
      () => Math.max(0, l.value - u.value.length)
    ), v = M(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (o(), i("div", sS, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", nS, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (o(), i("div", oS, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", aS, [
            (o(!0), i(W, null, ye(u.value, (g) => (o(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            f.value ? (o(), i("li", lS, "+" + m(f.value) + " more model" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (o(), i("div", iS, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", rS, [
            (o(!0), i(W, null, ye(d.value, (g) => (o(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            v.value ? (o(), i("li", cS, "+" + m(v.value) + " more node" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), dl = /* @__PURE__ */ Te(uS, [["__scopeId", "data-v-11be310d"]]), dS = { class: "export-card" }, mS = { class: "export-path-row" }, fS = {
  key: 1,
  class: "export-warning"
}, vS = { class: "export-footer-actions" }, pS = /* @__PURE__ */ Se({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: n, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ft(), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(!1), k = _(!1), $ = M(() => {
      var H;
      return ((H = t.environmentName) == null ? void 0 : H.trim()) || null;
    }), S = M(() => $.value ? `EXPORT ENVIRONMENT: ${$.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), x = M(() => $.value ? `Environment '${$.value}' has been exported` : "Your environment has been exported"), T = M(() => u.value ? "Validating..." : d.value ? "Exporting..." : B.value ? "Export Anyway" : "Export Environment"), I = M(() => {
      var H;
      return ((H = w.value) == null ? void 0 : H.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), P = M(
      () => I.value.models_without_sources.length
    ), U = M(
      () => {
        var H;
        return ((H = I.value.nodes_without_provenance) == null ? void 0 : H.length) || 0;
      }
    ), N = M(
      () => P.value + U.value
    ), B = M(
      () => {
        var H;
        return !!((H = w.value) != null && H.can_export) && N.value > 0;
      }
    );
    async function R() {
      u.value = !0;
      try {
        const H = $.value ? await l($.value) : await n();
        return w.value = H, H;
      } catch (H) {
        return v.value = {
          status: "error",
          message: H instanceof Error ? H.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function O() {
      v.value = null;
      const H = await R();
      if (H) {
        if (!H.can_export) {
          g.value = !0;
          return;
        }
        await j();
      }
    }
    async function K() {
      g.value = !1;
      const H = await R();
      if (H) {
        if (!H.can_export) {
          g.value = !0;
          return;
        }
        await j();
      }
    }
    async function ae() {
      await R();
    }
    async function j() {
      d.value = !0;
      try {
        const H = $.value ? await r($.value, c.value || void 0) : await a(c.value || void 0);
        v.value = H;
      } catch (H) {
        v.value = {
          status: "error",
          message: H instanceof Error ? H.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function de() {
      var H;
      if ((H = v.value) != null && H.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (F) {
          console.error("Failed to copy path:", F);
        }
    }
    async function le() {
      var H;
      if ((H = v.value) != null && H.path) {
        f.value = !0;
        try {
          const F = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!F.ok)
            throw new Error(`Download failed: ${F.statusText}`);
          const Y = await F.blob(), J = URL.createObjectURL(Y), ne = v.value.path.split("/").pop() || "environment-export.tar.gz", me = document.createElement("a");
          me.href = J, me.download = ne, document.body.appendChild(me), me.click(), document.body.removeChild(me), URL.revokeObjectURL(J);
        } catch (F) {
          console.error("Failed to download:", F), alert(`Download failed: ${F instanceof Error ? F.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return mt(() => {
      R();
    }), (H, F) => (o(), i(W, null, [
      b(Qt, null, vs({
        content: h(() => [
          B.value ? (o(), D(dl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: I.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: F[1] || (F[1] = (Y) => k.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(At, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", dS, [
                F[8] || (F[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", mS, [
                  b(Pn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": F[2] || (F[2] = (Y) => c.value = Y),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), D(At, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(ts, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, vs({
                icon: h(() => [
                  C(m(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  C(m(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  C(m(v.value.status === "success" ? x.value : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(Dt, { label: "Saved to:" }, {
                      default: h(() => [
                        b(P3, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (o(), D(Dt, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (o(), i("div", fS, [...F[9] || (F[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: le
                    }, {
                      default: h(() => [...F[10] || (F[10] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: de
                    }, {
                      default: h(() => [...F[11] || (F[11] = [
                        C(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Me, {
                      variant: "ghost",
                      size: "sm",
                      onClick: F[3] || (F[3] = (Y) => v.value = null)
                    }, {
                      default: h(() => [...F[12] || (F[12] = [
                        C(" Dismiss ", -1)
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
          s("div", vS, [
            e.embedded ? (o(), D(Me, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: F[4] || (F[4] = (Y) => H.$emit("close"))
            }, {
              default: h(() => [...F[13] || (F[13] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Me, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: O
            }, {
              default: h(() => [
                C(m(T.value), 1)
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
            b(Yt, {
              title: S.value,
              "show-info": !0,
              onInfoClick: F[0] || (F[0] = (Y) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(Cs, {
        show: p.value,
        title: "What Gets Exported",
        onClose: F[5] || (F[5] = (Y) => p.value = !1)
      }, {
        content: h(() => [...F[14] || (F[14] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  C(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  C(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  C(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  C(" — Environment settings and metadata")
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
              C(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (o(), D(tS, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: F[6] || (F[6] = (Y) => g.value = !1),
        onCommitted: K
      }, null, 8, ["issues"])) : y("", !0),
      k.value && w.value ? (o(), D(Ll, {
        key: 1,
        warnings: w.value.warnings,
        onClose: F[7] || (F[7] = (Y) => k.value = !1),
        onRevalidate: ae
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), gS = /* @__PURE__ */ Te(pS, [["__scopeId", "data-v-6cf814a2"]]), hS = { class: "file-input-wrapper" }, yS = ["accept", "multiple", "disabled"], wS = /* @__PURE__ */ Se({
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
  setup(e, { expose: t, emit: n }) {
    const a = n, l = _(null);
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
    }), (u, d) => (o(), i("div", hS, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, yS),
      b(Me, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          rt(u.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            C(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), _S = /* @__PURE__ */ Te(wS, [["__scopeId", "data-v-cd192091"]]), kS = {
  key: 0,
  class: "drop-zone-empty"
}, bS = { class: "drop-zone-text" }, $S = { class: "drop-zone-primary" }, CS = { class: "drop-zone-secondary" }, xS = { class: "drop-zone-actions" }, SS = {
  key: 1,
  class: "drop-zone-file"
}, IS = { class: "file-info" }, ES = { class: "file-details" }, TS = { class: "file-name" }, MS = { class: "file-size" }, PS = /* @__PURE__ */ Se({
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
    const n = t, a = _(!1), l = _(null), r = _(0), c = M(() => l.value !== null), u = M(() => {
      var S;
      return ((S = l.value) == null ? void 0 : S.name) || "";
    }), d = M(() => {
      if (!l.value) return "";
      const S = l.value.size;
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(S) {
      var x;
      S.stopPropagation(), r.value++, (x = S.dataTransfer) != null && x.types.includes("Files") && (a.value = !0);
    }
    function v(S) {
      S.stopPropagation(), S.dataTransfer && (S.dataTransfer.dropEffect = "copy");
    }
    function p(S) {
      S.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(S) {
      var T;
      S.stopPropagation(), r.value = 0, a.value = !1;
      const x = (T = S.dataTransfer) == null ? void 0 : T.files;
      x && x.length > 0 && k(x[0]);
    }
    function g(S) {
      S.length > 0 && k(S[0]);
    }
    function k(S) {
      l.value = S, n("fileSelected", S);
    }
    function $() {
      l.value = null, n("clear");
    }
    return (S, x) => (o(), i("div", {
      class: Ve(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: Ct(f, ["prevent"]),
      onDragover: Ct(v, ["prevent"]),
      onDragleave: Ct(p, ["prevent"]),
      onDrop: Ct(w, ["prevent"])
    }, [
      c.value ? (o(), i("div", SS, [
        s("div", IS, [
          x[1] || (x[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", ES, [
            s("div", TS, m(u.value), 1),
            s("div", MS, m(d.value), 1)
          ])
        ]),
        b(Me, {
          variant: "ghost",
          size: "xs",
          onClick: $,
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
      ])) : (o(), i("div", kS, [
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
        s("div", bS, [
          s("p", $S, m(e.primaryText), 1),
          s("p", CS, m(e.secondaryText), 1)
        ]),
        s("div", xS, [
          b(_S, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              C(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), RS = /* @__PURE__ */ Te(PS, [["__scopeId", "data-v-0f79cb86"]]), DS = { class: "commit-hash" }, LS = /* @__PURE__ */ Se({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, n = M(() => t.hash.slice(0, t.length));
    return (a, l) => (o(), i("span", DS, m(n.value), 1));
  }
}), Ec = /* @__PURE__ */ Te(LS, [["__scopeId", "data-v-7c333cc6"]]), NS = { class: "import-preview" }, US = { class: "preview-header" }, OS = {
  key: 0,
  class: "source-env"
}, AS = { class: "preview-content" }, zS = { class: "preview-section" }, FS = { class: "section-header" }, BS = { class: "section-info" }, VS = { class: "section-count" }, WS = {
  key: 0,
  class: "item-list"
}, GS = { class: "item-name" }, jS = {
  key: 0,
  class: "item-more"
}, HS = { class: "preview-section" }, qS = { class: "section-header" }, KS = { class: "section-info" }, JS = { class: "section-count" }, QS = {
  key: 0,
  class: "item-list"
}, YS = { class: "item-details" }, XS = { class: "item-name" }, ZS = { class: "item-meta" }, e5 = {
  key: 0,
  class: "item-more"
}, t5 = { class: "preview-section" }, s5 = { class: "section-header" }, n5 = { class: "section-info" }, o5 = { class: "section-count" }, a5 = {
  key: 0,
  class: "item-list"
}, l5 = { class: "item-name" }, i5 = {
  key: 0,
  class: "item-more"
}, r5 = {
  key: 0,
  class: "preview-section"
}, c5 = { class: "git-info" }, u5 = /* @__PURE__ */ Se({
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
    const t = e, n = M(() => t.workflows.length), a = M(() => t.models.length), l = M(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (o(), i("div", NS, [
      s("div", US, [
        b(_s, null, {
          default: h(() => [...u[0] || (u[0] = [
            C("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), i("span", OS, [
          u[1] || (u[1] = C(" From: ", -1)),
          b(ul, null, {
            default: h(() => [
              C(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", AS, [
        s("div", zS, [
          s("div", FS, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", BS, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", VS, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), i("div", WS, [
            (o(!0), i(W, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", GS, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), i("div", jS, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", HS, [
          s("div", qS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", KS, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", JS, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), i("div", QS, [
            (o(!0), i(W, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", YS, [
                s("span", XS, m(d.filename), 1),
                s("span", ZS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), i("div", e5, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", t5, [
          s("div", s5, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", n5, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", o5, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), i("div", a5, [
            (o(!0), i(W, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", l5, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), i("div", i5, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), i("div", r5, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", c5, [
            e.gitBranch ? (o(), D(Dt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(ul, null, {
                  default: h(() => [
                    C(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (o(), D(Dt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(Ec, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), d5 = /* @__PURE__ */ Te(u5, [["__scopeId", "data-v-182fe113"]]), m5 = { class: "import-config" }, f5 = { class: "config-container" }, v5 = { class: "config-field" }, p5 = { class: "input-wrapper" }, g5 = ["value"], h5 = {
  key: 0,
  class: "validating-indicator"
}, y5 = {
  key: 1,
  class: "valid-indicator"
}, w5 = {
  key: 0,
  class: "field-error"
}, _5 = { class: "config-field" }, k5 = { class: "strategy-options" }, b5 = ["value", "checked", "onChange"], $5 = { class: "strategy-content" }, C5 = { class: "strategy-label" }, x5 = { class: "strategy-description" }, S5 = { class: "config-field switch-field" }, I5 = { class: "switch-label" }, E5 = ["checked"], T5 = { class: "advanced-section" }, M5 = { class: "advanced-content" }, P5 = { class: "config-field" }, R5 = ["value"], D5 = ["value"], L5 = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = _(!1), r = _(!1);
    $t(() => n.nameError, (v) => {
      l.value = !1, r.value = !v && n.name.length > 0;
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
      const p = v.target.value;
      a("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function f() {
      n.name.length > 0 && a("validate-name", n.name);
    }
    return (v, p) => (o(), i("div", m5, [
      b(_s, null, {
        default: h(() => [...p[2] || (p[2] = [
          C("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", f5, [
        s("div", v5, [
          b(Jo, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              C("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", p5, [
            s("input", {
              type: "text",
              class: Ve(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: f
            }, null, 42, g5),
            l.value ? (o(), i("span", h5, "...")) : r.value ? (o(), i("span", y5, "✓")) : y("", !0)
          ]),
          e.nameError ? (o(), i("div", w5, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", _5, [
          b(Jo, null, {
            default: h(() => [...p[5] || (p[5] = [
              C("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", k5, [
            (o(), i(W, null, ye(c, (w) => s("label", {
              key: w.value,
              class: Ve(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, b5),
              s("div", $5, [
                s("span", C5, m(w.label), 1),
                s("span", x5, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", S5, [
          s("label", I5, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, E5),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", T5, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", M5, [
            s("div", P5, [
              b(Jo, null, {
                default: h(() => [...p[7] || (p[7] = [
                  C("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (o(!0), i(W, null, ye(it(Al), (w) => (o(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, D5))), 128))
              ], 40, R5)
            ])
          ])
        ])
      ])
    ]));
  }
}), N5 = /* @__PURE__ */ Te(L5, [["__scopeId", "data-v-89ea06a1"]]), U5 = { class: "import-flow" }, O5 = {
  key: 0,
  class: "import-empty"
}, A5 = { class: "git-import-section" }, z5 = { class: "git-url-input-row" }, F5 = ["disabled"], B5 = {
  key: 0,
  class: "git-error"
}, V5 = {
  key: 1,
  class: "import-configure"
}, W5 = { class: "selected-file-bar" }, G5 = {
  key: 0,
  class: "file-bar-content"
}, j5 = { class: "file-bar-info" }, H5 = { class: "file-bar-name" }, q5 = { class: "file-bar-size" }, K5 = {
  key: 1,
  class: "file-bar-content"
}, J5 = { class: "file-bar-info" }, Q5 = { class: "file-bar-name" }, Y5 = {
  key: 0,
  class: "preview-loading"
}, X5 = { class: "import-actions" }, Z5 = {
  key: 2,
  class: "import-progress"
}, e8 = { class: "creating-intro" }, t8 = {
  key: 0,
  class: "progress-warning"
}, s8 = {
  key: 1,
  class: "import-error"
}, n8 = { class: "error-message" }, o8 = {
  key: 3,
  class: "import-complete"
}, a8 = { class: "complete-message" }, l8 = { class: "complete-title" }, i8 = { class: "complete-details" }, r8 = { class: "complete-actions" }, c8 = /* @__PURE__ */ Se({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: n }) {
    var he, we, Fe, Le;
    const a = e, l = n, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: f, getImportProgress: v } = ft();
    let p = null;
    const w = _(null), g = _(a.resumeImport ?? !1), k = _(!1), $ = _(!1), S = _(""), x = _(!1), T = _(null), I = _(""), P = _(null), U = _(!1), N = _(null), B = _(null), R = _({
      name: ((he = a.initialProgress) == null ? void 0 : he.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), O = _(null), K = _({
      message: ((we = a.initialProgress) == null ? void 0 : we.message) ?? "Preparing import...",
      phase: ((Fe = a.initialProgress) == null ? void 0 : Fe.phase) ?? "",
      progress: ((Le = a.initialProgress) == null ? void 0 : Le.progress) ?? 0,
      error: null
    }), ae = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], j = M(() => {
      if (!B.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ke = B.value;
      return {
        sourceEnvironment: ke.comfyui_version ? `ComfyUI ${ke.comfyui_version}` : "Unknown",
        workflows: ke.workflows.map((Pe) => Pe.name),
        models: ke.models.map((Pe) => ({
          filename: Pe.filename,
          size: 0,
          type: Pe.relative_path.split("/")[0] || "model"
        })),
        nodes: ke.nodes.map((Pe) => Pe.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), de = M(() => !x.value && !T.value && B.value && R.value.name.length > 0 && !O.value && (w.value || P.value));
    async function le(ke) {
      w.value = ke, x.value = !0, T.value = null, B.value = null;
      try {
        const Pe = await r(ke);
        B.value = Pe;
      } catch (Pe) {
        T.value = Pe instanceof Error ? Pe.message : "Failed to analyze file", console.error("Preview error:", Pe);
      } finally {
        x.value = !1;
      }
    }
    function H() {
      w.value = null, P.value = null, I.value = "", N.value = null, k.value = !1, $.value = !1, S.value = "", B.value = null, T.value = null, R.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, O.value = null, l("source-cleared");
    }
    function F() {
      re(), H(), g.value = !1, x.value = !1, U.value = !1, K.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Y() {
      if (I.value.trim()) {
        U.value = !0, N.value = null;
        try {
          const ke = await c(I.value.trim());
          P.value = I.value.trim(), B.value = ke;
        } catch (ke) {
          N.value = ke instanceof Error ? ke.message : "Failed to analyze repository";
        } finally {
          U.value = !1;
        }
      }
    }
    function J(ke) {
      try {
        const Pe = new URL(ke);
        return Pe.host + Pe.pathname.replace(/\.git$/, "");
      } catch {
        return ke;
      }
    }
    async function ne(ke) {
      if (!ke) {
        O.value = "Environment name is required";
        return;
      }
      try {
        const Pe = await u(ke);
        O.value = Pe.valid ? null : Pe.error || "Invalid name";
      } catch {
        O.value = "Failed to validate name";
      }
    }
    async function me() {
      if (R.value.name && !(!w.value && !P.value)) {
        g.value = !0, k.value = !1, K.value = { message: `Creating environment '${R.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ke;
          if (w.value)
            ke = await d(
              w.value,
              R.value.name,
              R.value.modelStrategy,
              R.value.torchBackend
            );
          else if (P.value)
            ke = await f(
              P.value,
              R.value.name,
              R.value.modelStrategy,
              R.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ke.status === "started" ? Z() : ($.value = !1, S.value = ke.message, g.value = !1, k.value = !0);
        } catch (ke) {
          $.value = !1, S.value = ke instanceof Error ? ke.message : "Unknown error occurred during import", g.value = !1, k.value = !0;
        }
      }
    }
    async function Z() {
      if (p) return;
      const ke = async () => {
        try {
          const ge = await v();
          return K.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (re(), $.value = !0, S.value = `Environment '${ge.environment_name}' created successfully`, g.value = !1, k.value = !0, ge.environment_name && l("import-complete", ge.environment_name, R.value.switchAfterImport), !1) : ge.state === "error" ? (re(), $.value = !1, S.value = ge.error || ge.message, g.value = !1, k.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await ke() && (p = setInterval(async () => {
        await ke() || re();
      }, 2e3));
    }
    function re() {
      p && (clearInterval(p), p = null);
    }
    function Q(ke) {
      return ke < 1024 ? `${ke} B` : ke < 1024 * 1024 ? `${(ke / 1024).toFixed(1)} KB` : ke < 1024 * 1024 * 1024 ? `${(ke / (1024 * 1024)).toFixed(1)} MB` : `${(ke / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return mt(async () => {
      try {
        const ke = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ke.state, ke), ke.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ke.environment_name), g.value = !0, R.value.name = ke.environment_name || R.value.name || "", K.value = {
          progress: ke.progress ?? 0,
          message: ke.message || "Importing...",
          phase: ke.phase || "",
          error: null
        }, Z());
      } catch (ke) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ke);
      }
    }), t({
      handleReset: F,
      isImporting: g,
      canImport: de
    }), (ke, Pe) => {
      var ge;
      return o(), i("div", U5, [
        !w.value && !P.value && !g.value ? (o(), i("div", O5, [
          b(RS, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: le
          }),
          Pe[7] || (Pe[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", A5, [
            Pe[5] || (Pe[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", z5, [
              Bt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Pe[0] || (Pe[0] = (be) => I.value = be),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Is(Y, ["enter"]),
                disabled: U.value
              }, null, 40, F5), [
                [ho, I.value]
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || U.value,
                onClick: Y
              }, {
                default: h(() => [
                  C(m(U.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            N.value ? (o(), i("div", B5, m(N.value), 1)) : y("", !0),
            Pe[6] || (Pe[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || P.value) && !g.value && !k.value ? (o(), i("div", V5, [
          s("div", W5, [
            w.value ? (o(), i("div", G5, [
              Pe[8] || (Pe[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", j5, [
                s("div", H5, m(w.value.name), 1),
                s("div", q5, m(Q(w.value.size)), 1)
              ])
            ])) : P.value ? (o(), i("div", K5, [
              Pe[10] || (Pe[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", J5, [
                s("div", Q5, m(J(P.value)), 1),
                Pe[9] || (Pe[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Me, {
              variant: "ghost",
              size: "sm",
              onClick: H
            }, {
              default: h(() => [...Pe[11] || (Pe[11] = [
                C(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (o(), i("div", Y5, [...Pe[12] || (Pe[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : T.value ? (o(), D(gs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [T.value]
          }, null, 8, ["details"])) : B.value ? (o(), D(d5, {
            key: 2,
            "source-environment": j.value.sourceEnvironment,
            workflows: j.value.workflows,
            models: j.value.models,
            nodes: j.value.nodes,
            "git-branch": j.value.gitBranch,
            "git-commit": j.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          B.value ? (o(), D(N5, {
            key: 3,
            name: R.value.name,
            "onUpdate:name": Pe[1] || (Pe[1] = (be) => R.value.name = be),
            "model-strategy": R.value.modelStrategy,
            "onUpdate:modelStrategy": Pe[2] || (Pe[2] = (be) => R.value.modelStrategy = be),
            "torch-backend": R.value.torchBackend,
            "onUpdate:torchBackend": Pe[3] || (Pe[3] = (be) => R.value.torchBackend = be),
            "switch-after-import": R.value.switchAfterImport,
            "onUpdate:switchAfterImport": Pe[4] || (Pe[4] = (be) => R.value.switchAfterImport = be),
            "name-error": O.value,
            onValidateName: ne
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          R.value.modelStrategy === "skip" && ((ge = B.value) != null && ge.models_needing_download) ? (o(), D(gs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${B.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", X5, [
            b(Me, {
              variant: "secondary",
              size: "md",
              onClick: H
            }, {
              default: h(() => [...Pe[13] || (Pe[13] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              size: "md",
              disabled: !de.value,
              onClick: me
            }, {
              default: h(() => [...Pe[14] || (Pe[14] = [
                C(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (o(), i("div", Z5, [
          s("p", e8, [
            Pe[15] || (Pe[15] = C(" Importing environment ", -1)),
            s("strong", null, m(R.value.name), 1),
            Pe[16] || (Pe[16] = C("... ", -1))
          ]),
          b(ra, {
            progress: K.value.progress,
            message: K.value.message,
            "current-phase": K.value.phase,
            variant: K.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ae
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          K.value.error ? y("", !0) : (o(), i("p", t8, " This may take several minutes. Please wait... ")),
          K.value.error ? (o(), i("div", s8, [
            s("p", n8, m(K.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (o(), i("div", o8, [
          s("div", {
            class: Ve(["complete-icon", $.value ? "success" : "error"])
          }, m($.value ? "✓" : "✕"), 3),
          s("div", a8, [
            s("div", l8, m($.value ? "Import Successful" : "Import Failed"), 1),
            s("div", i8, m(S.value), 1)
          ]),
          s("div", r8, [
            b(Me, {
              variant: "primary",
              size: "md",
              onClick: F
            }, {
              default: h(() => [...Pe[17] || (Pe[17] = [
                C(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Tc = /* @__PURE__ */ Te(c8, [["__scopeId", "data-v-72cbc04e"]]), u8 = /* @__PURE__ */ Se({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1);
    function l(r, c) {
      c && n("import-complete-switch", r);
    }
    return (r, c) => (o(), i(W, null, [
      b(Qt, null, vs({
        content: h(() => [
          b(Tc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Yt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(Cs, {
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
}), d8 = /* @__PURE__ */ Te(u8, [["__scopeId", "data-v-41b1f298"]]), m8 = { class: "base-tabs" }, f8 = ["disabled", "onClick"], v8 = {
  key: 0,
  class: "base-tabs__badge"
}, p8 = /* @__PURE__ */ Se({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l(r) {
      var c;
      (c = n.tabs.find((u) => u.id === r)) != null && c.disabled || a("update:modelValue", r);
    }
    return (r, c) => (o(), i("div", m8, [
      (o(!0), i(W, null, ye(e.tabs, (u) => (o(), i("button", {
        key: u.id,
        class: Ve([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        C(m(u.label) + " ", 1),
        u.badge ? (o(), i("span", v8, m(u.badge), 1)) : y("", !0)
      ], 10, f8))), 128))
    ]));
  }
}), zl = /* @__PURE__ */ Te(p8, [["__scopeId", "data-v-ad5e6cad"]]), g8 = { class: "commit-list" }, h8 = /* @__PURE__ */ Se({
  __name: "CommitList",
  setup(e) {
    return (t, n) => (o(), i("div", g8, [
      rt(t.$slots, "default", {}, void 0)
    ]));
  }
}), Mc = /* @__PURE__ */ Te(h8, [["__scopeId", "data-v-8c5ee761"]]), y8 = { class: "commit-message" }, w8 = { class: "commit-date" }, _8 = /* @__PURE__ */ Se({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l() {
      n.clickable && a("click");
    }
    return (r, c) => (o(), i("div", {
      class: Ve(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(Ec, { hash: e.hash }, null, 8, ["hash"]),
      s("span", y8, m(e.message), 1),
      s("span", w8, m(e.relativeDate), 1),
      r.$slots.actions ? (o(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = Ct(() => {
        }, ["stop"]))
      }, [
        rt(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pc = /* @__PURE__ */ Te(_8, [["__scopeId", "data-v-dd7c621b"]]), k8 = {
  key: 0,
  class: "load-more-row"
}, b8 = /* @__PURE__ */ Se({
  __name: "HistorySection",
  props: {
    commits: {},
    hasMore: { type: Boolean },
    isLoadingMore: { type: Boolean },
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout", "load-more"],
  setup(e) {
    const t = e, n = M(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (o(), D(Qt, null, vs({
      content: h(() => [
        e.commits.length === 0 ? (o(), D(Ps, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), D(Mc, {
          key: 1,
          class: "history-commits"
        }, {
          default: h(() => [
            (o(!0), i(W, null, ye(e.commits, (r) => (o(), D(Pc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => a.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: h(() => [...l[1] || (l[1] = [
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
            }, 1032, ["hash", "message", "relative-date", "onClick"]))), 128)),
            e.hasMore ? (o(), i("div", k8, [
              b(Me, {
                variant: "secondary",
                size: "sm",
                loading: e.isLoadingMore,
                onClick: l[0] || (l[0] = (r) => a.$emit("load-more"))
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  C(" Load More ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])
            ])) : y("", !0)
          ]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(Yt, { title: n.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), $8 = /* @__PURE__ */ Te(b8, [["__scopeId", "data-v-00efa121"]]), C8 = { class: "branch-create-form" }, x8 = { class: "form-actions" }, S8 = /* @__PURE__ */ Se({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const n = t, a = _(""), l = M(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (n("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", n("cancel");
    }
    return (u, d) => (o(), i("div", C8, [
      b(Pn, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", x8, [
        b(Me, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: h(() => [...d[1] || (d[1] = [
            C(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(Me, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), I8 = /* @__PURE__ */ Te(S8, [["__scopeId", "data-v-7c500394"]]), E8 = { class: "branch-list-item__indicator" }, T8 = { class: "branch-list-item__name" }, M8 = {
  key: 0,
  class: "branch-list-item__actions"
}, P8 = {
  key: 0,
  class: "branch-list-item__current-label"
}, R8 = /* @__PURE__ */ Se({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Ve(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", E8, m(e.isCurrent ? "●" : "○"), 1),
      s("span", T8, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (o(), i("div", M8, [
        rt(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (o(), i("span", P8, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), D8 = /* @__PURE__ */ Te(R8, [["__scopeId", "data-v-c6581a24"]]), L8 = { class: "header-info" }, N8 = { class: "branch-name" }, U8 = {
  key: 0,
  class: "current-badge"
}, O8 = { class: "branch-meta" }, A8 = { key: 0 }, z8 = {
  key: 0,
  class: "meta-note"
}, F8 = {
  key: 0,
  class: "loading"
}, B8 = {
  key: 1,
  class: "empty-state"
}, V8 = {
  key: 0,
  class: "load-more-row"
}, W8 = 50, G8 = /* @__PURE__ */ Se({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch", "revert-current"],
  setup(e) {
    const t = e, { getBranchHistory: n } = ft(), a = _([]), l = _(!1), r = _(!0), c = _(!1);
    async function u(f = 0) {
      const v = await n(t.branchName, W8, f);
      a.value = f === 0 ? v.commits : [...a.value, ...v.commits], l.value = v.has_more;
    }
    async function d() {
      if (!(c.value || !l.value)) {
        c.value = !0;
        try {
          await u(a.value.length);
        } finally {
          c.value = !1;
        }
      }
    }
    return mt(async () => {
      try {
        await u();
      } finally {
        r.value = !1;
      }
    }), (f, v) => (o(), D(Lt, {
      size: "md",
      "show-close-button": !1,
      onClose: v[4] || (v[4] = (p) => f.$emit("close"))
    }, {
      header: h(() => [
        s("div", L8, [
          v[5] || (v[5] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", N8, m(e.branchName), 1),
          e.isCurrent ? (o(), i("span", U8, "CURRENT")) : y("", !0)
        ]),
        b(Ue, {
          variant: "ghost",
          size: "sm",
          onClick: v[0] || (v[0] = (p) => f.$emit("close"))
        }, {
          default: h(() => [...v[6] || (v[6] = [
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
        s("div", O8, [
          r.value ? (o(), i("span", A8, "Loading...")) : (o(), i(W, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (o(), i("span", z8, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (o(), i("div", F8, "Loading commit history...")) : a.value.length === 0 ? (o(), i("div", B8, " No commits found on this branch ")) : (o(), D(Mc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (o(!0), i(W, null, ye(a.value, (p) => (o(), D(Pc, {
              key: p.hash,
              hash: p.short_hash || p.hash.slice(0, 7),
              message: p.message,
              "relative-date": p.date_relative || p.relative_date || "",
              clickable: !1
            }, null, 8, ["hash", "message", "relative-date"]))), 128)),
            l.value ? (o(), i("div", V8, [
              b(Me, {
                variant: "secondary",
                size: "sm",
                loading: c.value,
                onClick: d
              }, {
                default: h(() => [...v[7] || (v[7] = [
                  C(" Load More ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])
            ])) : y("", !0)
          ]),
          _: 1
        }))
      ]),
      footer: h(() => [
        e.isCurrent ? (o(), D(Me, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: v[1] || (v[1] = (p) => f.$emit("revert-current"))
        }, {
          default: h(() => [...v[8] || (v[8] = [
            C(" Revert Changes ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.isCurrent ? y("", !0) : (o(), D(Me, {
          key: 1,
          variant: "destructive",
          size: "sm",
          onClick: v[2] || (v[2] = (p) => f.$emit("delete", e.branchName))
        }, {
          default: h(() => [...v[9] || (v[9] = [
            C(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        v[11] || (v[11] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (o(), D(Ue, {
          key: 2,
          variant: "primary",
          onClick: v[3] || (v[3] = (p) => f.$emit("switch", e.branchName))
        }, {
          default: h(() => [...v[10] || (v[10] = [
            C(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), j8 = /* @__PURE__ */ Te(G8, [["__scopeId", "data-v-89798c86"]]), H8 = {
  key: 0,
  class: "branch-toolbar"
}, q8 = {
  key: 3,
  class: "branch-list"
}, K8 = /* @__PURE__ */ Se({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete", "revert-current"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1), l = _(null);
    function r(p) {
      n("create", p), c();
    }
    function c() {
      a.value = !1;
    }
    function u(p) {
      l.value = p;
    }
    function d(p) {
      l.value = null, n("delete", p);
    }
    function f(p) {
      l.value = null, n("switch", p);
    }
    function v() {
      l.value = null, n("revert-current");
    }
    return (p, w) => (o(), D(Qt, null, vs({
      content: h(() => [
        e.embedded && !a.value ? (o(), i("div", H8, [
          b(Me, {
            variant: "primary",
            size: "sm",
            onClick: w[1] || (w[1] = (g) => a.value = !0)
          }, {
            default: h(() => [...w[4] || (w[4] = [
              C(" + Create Branch ", -1)
            ])]),
            _: 1
          })
        ])) : y("", !0),
        a.value ? (o(), D(I8, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (o(), D(Ps, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (o(), i("div", q8, [
          (o(!0), i(W, null, ye(e.branches, (g) => (o(), D(D8, {
            key: g.name,
            "branch-name": g.name,
            "is-current": g.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (k) => u(g)
          }, {
            actions: h(() => [
              g.is_current ? y("", !0) : (o(), D(Me, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: Ct((k) => n("switch", g.name), ["stop"])
              }, {
                default: h(() => [...w[5] || (w[5] = [
                  C(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (o(), D(j8, {
          key: 4,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: w[2] || (w[2] = (g) => l.value = null),
          onDelete: d,
          onSwitch: f,
          onRevertCurrent: v
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(Yt, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (o(), D(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: w[0] || (w[0] = (g) => a.value = !0)
              }, {
                default: h(() => [...w[3] || (w[3] = [
                  C(" + Create Branch ", -1)
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
}), J8 = /* @__PURE__ */ Te(K8, [["__scopeId", "data-v-b24413b8"]]);
function Rc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const Q8 = { class: "remote-url-display" }, Y8 = ["title"], X8 = ["title"], Z8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, e4 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, t4 = /* @__PURE__ */ Se({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, n = _(!1), a = M(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const r = t.url.slice(0, Math.floor(t.maxLength * 0.6)), c = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${r}...${c}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(t.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, c) => (o(), i("div", Q8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, Y8),
      s("button", {
        class: Ve(["copy-btn", { copied: n.value }]),
        onClick: l,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), i("svg", e4, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), i("svg", Z8, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, X8)
    ]));
  }
}), s4 = /* @__PURE__ */ Te(t4, [["__scopeId", "data-v-7768a58d"]]), n4 = { class: "remote-title" }, o4 = {
  key: 0,
  class: "default-badge"
}, a4 = {
  key: 1,
  class: "sync-badge"
}, l4 = {
  key: 0,
  class: "ahead"
}, i4 = {
  key: 1,
  class: "behind"
}, r4 = {
  key: 1,
  class: "synced"
}, c4 = ["href"], u4 = {
  key: 1,
  class: "remote-url-text"
}, d4 = /* @__PURE__ */ Se({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, n = M(() => t.fetchingRemote === t.remote.name), a = M(() => t.remote.is_default), l = M(() => t.syncStatus && t.syncStatus.behind > 0), r = M(() => t.syncStatus && t.syncStatus.ahead > 0), c = M(() => t.remote.push_url !== t.remote.fetch_url), u = M(() => {
      const f = t.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), d = M(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (o(), D(ts, {
      status: a.value ? "synced" : void 0
    }, vs({
      icon: h(() => [
        C(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", n4, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (o(), i("span", o4, "DEFAULT")) : y("", !0),
          e.syncStatus ? (o(), i("span", a4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (o(), i(W, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (o(), i("span", l4, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (o(), i("span", i4, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (o(), i("span", r4, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (o(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = Ct(() => {
          }, ["stop"]))
        }, m(d.value), 9, c4)) : (o(), i("span", u4, m(d.value), 1))
      ]),
      actions: h(() => [
        b(Me, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: v[1] || (v[1] = (p) => f.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            C(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Me, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => f.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            C(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Me, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => f.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            C(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Me, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => f.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            C(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (o(), D(Me, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => f.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
            C(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (o(), D(Dt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(s4, {
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
}), m4 = /* @__PURE__ */ Te(d4, [["__scopeId", "data-v-8310f3a8"]]), f4 = ["for"], v4 = {
  key: 0,
  class: "base-form-field-required"
}, p4 = { class: "base-form-field-input" }, g4 = {
  key: 1,
  class: "base-form-field-error"
}, h4 = {
  key: 2,
  class: "base-form-field-hint"
}, y4 = /* @__PURE__ */ Se({
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
    const t = e, n = M(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (o(), i("div", {
      class: Ve(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), i("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        C(m(e.label) + " ", 1),
        e.required ? (o(), i("span", v4, "*")) : y("", !0)
      ], 8, f4)) : y("", !0),
      s("div", p4, [
        rt(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (o(), i("span", g4, m(e.error), 1)) : e.hint ? (o(), i("span", h4, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ Te(y4, [["__scopeId", "data-v-9a1cf296"]]), w4 = { class: "remote-form" }, _4 = { class: "form-header" }, k4 = { class: "form-body" }, b4 = {
  key: 0,
  class: "form-error"
}, $4 = { class: "form-actions" }, C4 = /* @__PURE__ */ Se({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), r = _(!1), c = _(null);
    $t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      l.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = M(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (f) {
          c.value = f instanceof Error ? f.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (f, v) => (o(), i("div", w4, [
      s("div", _4, [
        b(_s, null, {
          default: h(() => [
            C(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", k4, [
        b(qt, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(Nt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(qt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            b(Nt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(qt, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(Nt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (o(), i("div", b4, m(c.value), 1)) : y("", !0)
      ]),
      s("div", $4, [
        b(Me, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            C(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Me, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => f.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), x4 = /* @__PURE__ */ Te(C4, [["__scopeId", "data-v-56021b18"]]), S4 = { class: "conflict-summary-box" }, I4 = { class: "summary-header" }, E4 = { class: "summary-text" }, T4 = { key: 0 }, M4 = {
  key: 1,
  class: "all-resolved"
}, P4 = { class: "summary-progress" }, R4 = { class: "progress-bar" }, D4 = { class: "progress-text" }, L4 = /* @__PURE__ */ Se({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, n = M(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (a, l) => (o(), i("div", S4, [
      s("div", I4, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", E4, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (o(), i("p", T4, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (o(), i("p", M4, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", P4, [
        s("div", R4, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: n.value + "%" })
          }, null, 4)
        ]),
        s("span", D4, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), N4 = /* @__PURE__ */ Te(L4, [["__scopeId", "data-v-4e9e6cc9"]]), U4 = { class: "modal-header" }, O4 = { class: "modal-title" }, A4 = { class: "modal-body" }, z4 = {
  key: 0,
  class: "error-box"
}, F4 = {
  key: 0,
  class: "error-hint"
}, B4 = {
  key: 1,
  class: "loading-state"
}, V4 = { class: "commit-summary" }, W4 = {
  key: 0,
  class: "commits-section"
}, G4 = { class: "commit-list" }, j4 = { class: "commit-hash" }, H4 = { class: "commit-message" }, q4 = { class: "commit-date" }, K4 = {
  key: 1,
  class: "changes-section"
}, J4 = {
  key: 0,
  class: "change-group",
  open: ""
}, Q4 = { class: "change-count" }, Y4 = { class: "change-list" }, X4 = {
  key: 0,
  class: "conflict-badge"
}, Z4 = {
  key: 1,
  class: "change-group"
}, eI = { class: "change-count" }, tI = { class: "change-list" }, sI = {
  key: 2,
  class: "change-group"
}, nI = { class: "change-count" }, oI = { class: "change-list" }, aI = {
  key: 3,
  class: "strategy-section"
}, lI = { class: "radio-group" }, iI = { class: "radio-option" }, rI = { class: "radio-option" }, cI = { class: "radio-option" }, uI = {
  key: 4,
  class: "up-to-date"
}, dI = { class: "modal-actions" }, Ui = "comfygit.pullModelStrategy", mI = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = _(localStorage.getItem(Ui) || "skip");
    $t(l, (S) => {
      localStorage.setItem(Ui, S);
    });
    const r = M(() => {
      var S;
      return ((S = n.error) == null ? void 0 : S.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = M(() => {
      if (!n.preview) return 0;
      const S = n.preview.changes.workflows;
      return S.added.length + S.modified.length + S.deleted.length;
    }), u = M(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = M(() => {
      var S;
      return c.value > 0 || u.value > 0 || (((S = n.preview) == null ? void 0 : S.changes.models.count) || 0) > 0;
    }), f = M(() => n.preview && Rc(n.preview) ? n.preview : null), v = M(() => {
      var S;
      return ((S = f.value) == null ? void 0 : S.workflow_conflicts.length) ?? 0;
    }), p = M(() => {
      var S;
      return ((S = n.conflictResolutions) == null ? void 0 : S.size) ?? 0;
    }), w = M(
      () => v.value > 0 && p.value === v.value
    ), g = M(() => !(!n.preview || n.preview.has_uncommitted_changes || f.value && !w.value));
    function k(S) {
      if (!f.value) return !1;
      const x = S.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((T) => T.name === x);
    }
    function $(S) {
      const x = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: S, resolutions: x });
    }
    return (S, x) => {
      var T, I;
      return o(), D(cs, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (P) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = Ct(() => {
            }, ["stop"]))
          }, [
            s("div", U4, [
              s("h3", O4, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (P) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", A4, [
              e.error ? (o(), i("div", z4, [
                x[13] || (x[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  x[12] || (x[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (o(), i("p", F4, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (o(), i("div", B4, [...x[14] || (x[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                C(" Loading preview... ", -1)
              ])])) : (T = e.preview) != null && T.has_uncommitted_changes ? (o(), i(W, { key: 2 }, [
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
              ], 64)) : e.preview ? (o(), i(W, { key: 3 }, [
                s("div", V4, [
                  x[17] || (x[17] = s("span", { class: "icon" }, "📥", -1)),
                  C(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (o(), i("div", W4, [
                  x[18] || (x[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", G4, [
                    (o(!0), i(W, null, ye(e.preview.commits, (P) => (o(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", j4, m(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", H4, m(P.message), 1),
                      s("span", q4, m(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (o(), i("div", K4, [
                  x[22] || (x[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (o(), i("details", J4, [
                    s("summary", null, [
                      x[19] || (x[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", Q4, m(c.value) + " changes", 1)
                    ]),
                    s("div", Y4, [
                      (o(!0), i(W, null, ye(e.preview.changes.workflows.added, (P) => (o(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128)),
                      (o(!0), i(W, null, ye(e.preview.changes.workflows.modified, (P) => (o(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        C(" ~ " + m(P) + " ", 1),
                        k(P) ? (o(), i("span", X4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (o(!0), i(W, null, ye(e.preview.changes.workflows.deleted, (P) => (o(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (o(), i("details", Z4, [
                    s("summary", null, [
                      x[20] || (x[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", eI, m(u.value) + " to install", 1)
                    ]),
                    s("div", tI, [
                      (o(!0), i(W, null, ye(e.preview.changes.nodes.to_install, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (o(), i("details", sI, [
                    s("summary", null, [
                      x[21] || (x[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", nI, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", oI, [
                      (o(!0), i(W, null, ye(e.preview.changes.models.referenced, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item"
                      }, m(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (o(), D(N4, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (o(), i("div", aI, [
                  x[27] || (x[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", lI, [
                    s("label", iI, [
                      Bt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      x[23] || (x[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", rI, [
                      Bt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      x[24] || (x[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", cI, [
                      Bt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      x[25] || (x[25] = s("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (o(), i("div", uI, [
                  x[29] || (x[29] = s("span", { class: "icon" }, "✓", -1)),
                  C(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", dI, [
              b(Me, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (P) => S.$emit("close"))
              }, {
                default: h(() => [...x[30] || (x[30] = [
                  C(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (o(), i(W, { key: 0 }, [
                b(Me, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: x[5] || (x[5] = (P) => $(!1))
                }, {
                  default: h(() => [...x[31] || (x[31] = [
                    C(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Me, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: x[6] || (x[6] = (P) => $(!0))
                }, {
                  default: h(() => [...x[32] || (x[32] = [
                    C(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (o(), D(Me, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: x[7] || (x[7] = (P) => $(!0))
              }, {
                default: h(() => [...x[33] || (x[33] = [
                  C(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (o(), i(W, { key: 2 }, [
                f.value && !w.value ? (o(), D(Me, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (P) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    C(" Resolve Conflicts (" + m(p.value) + "/" + m(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), D(Me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: x[9] || (x[9] = (P) => $(!1))
                }, {
                  default: h(() => [...x[34] || (x[34] = [
                    C(" Pull Changes ", -1)
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
}), fI = /* @__PURE__ */ Te(mI, [["__scopeId", "data-v-1d633bba"]]), vI = { class: "modal-header" }, pI = { class: "modal-title" }, gI = { class: "modal-body" }, hI = {
  key: 0,
  class: "error-box"
}, yI = {
  key: 1,
  class: "loading-state"
}, wI = {
  key: 2,
  class: "warning-box"
}, _I = {
  key: 1,
  class: "commits-section"
}, kI = { class: "commit-list" }, bI = { class: "commit-hash" }, $I = { class: "commit-message" }, CI = { class: "commit-date" }, xI = { class: "force-option" }, SI = { class: "checkbox-option" }, II = { class: "commit-summary" }, EI = { key: 0 }, TI = { key: 1 }, MI = {
  key: 0,
  class: "info-box"
}, PI = {
  key: 2,
  class: "commits-section"
}, RI = { class: "commit-list" }, DI = { class: "commit-hash" }, LI = { class: "commit-message" }, NI = { class: "commit-date" }, UI = {
  key: 3,
  class: "up-to-date"
}, OI = { class: "modal-actions" }, AI = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = _(!1), r = _(!1), c = M(() => {
      var w;
      return ((w = n.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), u = M(
      () => c.value.models_without_sources.length
    ), d = M(
      () => c.value.nodes_without_provenance.length
    ), f = M(
      () => u.value + d.value
    ), v = M(() => f.value > 0);
    function p(w) {
      a("push", { force: w });
    }
    return (w, g) => {
      var k, $, S, x;
      return o(), i(W, null, [
        (o(), D(cs, { to: "body" }, [
          e.show ? (o(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (T) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = Ct(() => {
              }, ["stop"]))
            }, [
              s("div", vI, [
                s("h3", pI, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (T) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", gI, [
                e.error ? (o(), i("div", hI, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (o(), i("div", yI, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  C(" Loading preview... ", -1)
                ])])) : (k = e.preview) != null && k.has_uncommitted_changes ? (o(), i("div", wI, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : ($ = e.preview) != null && $.remote_has_new_commits ? (o(), i(W, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  v.value ? (o(), D(dl, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", _I, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", kI, [
                      (o(!0), i(W, null, ye(e.preview.commits, (T) => (o(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", bI, m(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", $I, m(T.message), 1),
                        s("span", CI, m(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", xI, [
                    s("label", SI, [
                      Bt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (T) => l.value = T)
                      }, null, 512), [
                        [ia, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (o(), i(W, { key: 4 }, [
                  s("div", II, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (o(), i("span", EI, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (o(), i("span", TI, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (o(), i("div", MI, [...g[21] || (g[21] = [
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
                  v.value ? (o(), D(dl, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", PI, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", RI, [
                      (o(!0), i(W, null, ye(e.preview.commits, (T) => (o(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", DI, m(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", LI, m(T.message), 1),
                        s("span", NI, m(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (o(), i("div", UI, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    C(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", OI, [
                b(Me, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (T) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    C(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (S = e.preview) != null && S.remote_has_new_commits ? (o(), i(W, { key: 0 }, [
                  b(Me, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (T) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      C(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Me, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (T) => p(!0))
                  }, {
                    default: h(() => [
                      C(m(v.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (o(), D(Me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (T) => p(!1))
                }, {
                  default: h(() => [
                    C(m(v.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((x = e.preview) != null && x.warnings) ? (o(), D(Ll, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (T) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (T) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), zI = /* @__PURE__ */ Te(AI, [["__scopeId", "data-v-7748bf33"]]), FI = { class: "resolution-choice-group" }, BI = ["disabled"], VI = ["disabled"], WI = /* @__PURE__ */ Se({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("div", FI, [
      s("button", {
        class: Ve(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...n[2] || (n[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, BI),
      s("button", {
        class: Ve(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...n[3] || (n[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, VI)
    ]));
  }
}), GI = /* @__PURE__ */ Te(WI, [["__scopeId", "data-v-985715ed"]]), jI = { class: "conflict-header" }, HI = { class: "conflict-info" }, qI = { class: "workflow-name" }, KI = { class: "conflict-description" }, JI = {
  key: 0,
  class: "resolved-badge"
}, QI = { class: "resolved-text" }, YI = { class: "conflict-hashes" }, XI = { class: "hash-item" }, ZI = { class: "hash-item" }, e6 = { class: "conflict-actions" }, t6 = /* @__PURE__ */ Se({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(n.resolution);
    $t(() => n.resolution, (d) => {
      l.value = d;
    }), $t(l, (d) => {
      d && a("resolve", d);
    });
    const r = M(() => l.value !== null), c = M(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = M(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, f) => {
      var v, p;
      return o(), i("div", {
        class: Ve(["conflict-item", { resolved: r.value }])
      }, [
        s("div", jI, [
          f[2] || (f[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", HI, [
            s("code", qI, m(e.conflict.name) + ".json", 1),
            s("div", KI, m(c.value), 1)
          ]),
          r.value ? (o(), i("div", JI, [
            f[1] || (f[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", QI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", YI, [
          s("span", XI, [
            f[3] || (f[3] = C("Your: ", -1)),
            s("code", null, m(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", ZI, [
            f[4] || (f[4] = C("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", e6, [
          b(GI, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), s6 = /* @__PURE__ */ Te(t6, [["__scopeId", "data-v-506d3bbf"]]), n6 = { class: "resolution-content" }, o6 = {
  key: 0,
  class: "error-box"
}, a6 = { class: "resolution-header" }, l6 = { class: "header-stats" }, i6 = { class: "stat" }, r6 = { class: "stat-value" }, c6 = { class: "stat resolved" }, u6 = { class: "stat-value" }, d6 = {
  key: 0,
  class: "stat pending"
}, m6 = { class: "stat-value" }, f6 = { class: "conflicts-list" }, v6 = {
  key: 1,
  class: "all-resolved-message"
}, p6 = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = M(() => n.resolutions.size), r = M(() => n.workflowConflicts.length - l.value), c = M(() => l.value === n.workflowConflicts.length), u = M(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = n.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function f(w, g) {
      a("resolve", w, g);
    }
    function v() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, g) => (o(), D(Lt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", n6, [
          e.error ? (o(), i("div", o6, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", a6, [
            s("div", l6, [
              s("div", i6, [
                s("span", r6, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", c6, [
                s("span", u6, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (o(), i("div", d6, [
                s("span", m6, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", f6, [
            (o(!0), i(W, null, ye(e.workflowConflicts, (k) => (o(), D(s6, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: ($) => f(k.name, $)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (o(), i("div", v6, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...g[7] || (g[7] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Ue, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            C(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), g6 = /* @__PURE__ */ Te(p6, [["__scopeId", "data-v-c58d150d"]]), h6 = { class: "node-conflict-item" }, y6 = { class: "node-header" }, w6 = { class: "node-name" }, _6 = { class: "node-id" }, k6 = { class: "version-comparison" }, b6 = { class: "version yours" }, $6 = { class: "version theirs" }, C6 = { class: "chosen-version" }, x6 = { class: "chosen" }, S6 = { class: "chosen-reason" }, I6 = { class: "affected-workflows" }, E6 = { class: "wf-source" }, T6 = { class: "wf-version" }, M6 = /* @__PURE__ */ Se({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", h6, [
      s("div", y6, [
        s("code", w6, m(e.conflict.node_name), 1),
        s("span", _6, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", k6, [
        s("div", b6, [
          n[0] || (n[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", $6, [
          n[1] || (n[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", C6, [
        n[3] || (n[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", x6, m(e.conflict.chosen_version), 1),
        s("span", S6, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", I6, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (o(!0), i(W, null, ye(e.conflict.affected_workflows, (a) => (o(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", E6, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", T6, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), P6 = /* @__PURE__ */ Te(M6, [["__scopeId", "data-v-8b626725"]]), R6 = { class: "validation-content" }, D6 = {
  key: 0,
  class: "compatible-message"
}, L6 = { class: "conflicts-list" }, N6 = {
  key: 2,
  class: "warnings-section"
}, U6 = /* @__PURE__ */ Se({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (o(), D(Lt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", R6, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (o(), i("div", D6, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (o(), i(W, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", L6, [
              (o(!0), i(W, null, ye(e.validation.node_conflicts, (u) => (o(), D(P6, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (o(), i("div", N6, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (o(!0), i(W, null, ye(e.validation.warnings, (u, d) => (o(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Ue, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            C(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(Ue, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            C(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), O6 = /* @__PURE__ */ Te(U6, [["__scopeId", "data-v-fefd26ed"]]), A6 = {
  key: 0,
  class: "embedded-toolbar"
}, z6 = { class: "embedded-toolbar-search" }, F6 = /* @__PURE__ */ Se({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const n = t, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: f,
      pullFromRemote: v,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = ft(), k = _([]), $ = _({}), S = _(!1), x = _(null), T = _(""), I = _(!1), P = _(null), U = _(!1), N = _("add"), B = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), R = M(() => {
      if (!T.value.trim()) return k.value;
      const De = T.value.toLowerCase();
      return k.value.filter(
        (Ae) => Ae.name.toLowerCase().includes(De) || Ae.fetch_url.toLowerCase().includes(De) || Ae.push_url.toLowerCase().includes(De)
      );
    });
    async function O() {
      S.value = !0, x.value = null;
      try {
        const De = await a();
        k.value = De.remotes, await Promise.all(
          De.remotes.map(async (Ae) => {
            const qe = await d(Ae.name);
            qe && ($.value[Ae.name] = qe);
          })
        );
      } catch (De) {
        x.value = De instanceof Error ? De.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function K() {
      N.value = "add", B.value = { name: "", fetchUrl: "", pushUrl: "" }, U.value = !0;
    }
    function ae(De) {
      const Ae = k.value.find((qe) => qe.name === De);
      Ae && (N.value = "edit", B.value = {
        name: Ae.name,
        fetchUrl: Ae.fetch_url,
        pushUrl: Ae.push_url
      }, U.value = !0);
    }
    async function j(De) {
      try {
        N.value === "add" ? await l(De.name, De.fetchUrl) : await c(De.name, De.fetchUrl, De.pushUrl || void 0), U.value = !1, await O();
      } catch (Ae) {
        x.value = Ae instanceof Error ? Ae.message : "Operation failed";
      }
    }
    function de() {
      U.value = !1, B.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function le(De) {
      P.value = De;
      try {
        await u(De);
        const Ae = await d(De);
        Ae && ($.value[De] = Ae), n("toast", `✓ Fetched from ${De}`, "success");
      } catch (Ae) {
        n("toast", Ae instanceof Error ? Ae.message : "Fetch failed", "error");
      } finally {
        P.value = null;
      }
    }
    async function H(De) {
      if (confirm(`Remove remote "${De}"?`))
        try {
          await r(De), await O();
        } catch (Ae) {
          x.value = Ae instanceof Error ? Ae.message : "Failed to remove remote";
        }
    }
    function F() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Y = _("idle"), J = M(() => Y.value === "pull_preview"), ne = M(
      () => Y.value === "resolving" || Y.value === "validating"
    ), me = M(
      () => Y.value === "validation_review" || Y.value === "executing"
    ), Z = _(!1), re = _(null), Q = _(!1), he = _(null), we = _(null), Fe = _(!1), Le = _(null), ke = _(null), Pe = _(/* @__PURE__ */ new Map()), ge = _(null), be = _(null), E = M(() => Le.value && Rc(Le.value) ? Le.value : null);
    async function z(De) {
      we.value = De, Y.value = "pull_preview", Fe.value = !0, Le.value = null, ke.value = null;
      try {
        Le.value = await f(De);
      } catch (Ae) {
        ke.value = Ae instanceof Error ? Ae.message : "Failed to load pull preview";
      } finally {
        Fe.value = !1;
      }
    }
    function ue() {
      Y.value = "idle", Le.value = null, ke.value = null, we.value = null;
    }
    async function Ee(De) {
      if (!we.value) return;
      Y.value = "executing", ke.value = null;
      const Ae = we.value;
      try {
        const qe = await v(Ae, De);
        if (qe.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${qe.error || "Unknown error"}`, Y.value = "pull_preview";
          return;
        }
        Be(), Y.value = "idle", n("toast", `✓ Pulled from ${Ae}`, "success"), await O();
      } catch (qe) {
        ke.value = qe instanceof Error ? qe.message : "Pull failed", Y.value = "pull_preview";
      }
    }
    function Ce() {
      E.value && (Y.value = "resolving", be.value = null);
    }
    function Ie(De, Ae) {
      Pe.value.set(De, { name: De, resolution: Ae });
    }
    function Oe() {
      Y.value = "pull_preview";
    }
    async function te() {
      Y.value = "validating", be.value = null;
      try {
        const De = Array.from(Pe.value.values());
        ge.value = await g(we.value, De), Y.value = "validation_review";
      } catch (De) {
        be.value = De instanceof Error ? De.message : "Validation failed", Y.value = "resolving";
      }
    }
    async function V() {
      Y.value = "executing";
      const De = we.value;
      try {
        const Ae = Array.from(Pe.value.values()), qe = await v(De, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ae
        });
        if (qe.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${qe.error || "Unknown error"}`, Y.value = "pull_preview";
          return;
        }
        Be(), Y.value = "idle", n("toast", `✓ Pulled from ${De}`, "success"), await O();
      } catch (Ae) {
        ke.value = Ae instanceof Error ? Ae.message : "Pull failed", Y.value = "validation_review";
      }
    }
    function fe() {
      Y.value = "resolving";
    }
    function We() {
      Be(), Y.value = "idle";
    }
    function Be() {
      Pe.value.clear(), ge.value = null, be.value = null, ke.value = null, Le.value = null, we.value = null;
    }
    async function _e(De) {
      we.value = De, Z.value = !0, Fe.value = !0, re.value = null, he.value = null;
      try {
        re.value = await p(De);
      } catch (Ae) {
        he.value = Ae instanceof Error ? Ae.message : "Failed to load push preview";
      } finally {
        Fe.value = !1;
      }
    }
    async function oe() {
      if (we.value) {
        Fe.value = !0, he.value = null;
        try {
          re.value = await p(we.value);
        } catch (De) {
          he.value = De instanceof Error ? De.message : "Failed to refresh push preview";
        } finally {
          Fe.value = !1;
        }
      }
    }
    function Je() {
      Z.value = !1, re.value = null, he.value = null, we.value = null;
    }
    async function Ne(De) {
      var qe;
      if (!we.value) return;
      Q.value = !0;
      const Ae = we.value;
      he.value = null;
      try {
        await w(Ae, De), Je(), n("toast", `✓ Pushed to ${Ae}`, "success"), await O();
      } catch (kt) {
        const Ot = kt instanceof Error ? kt.message : "Push failed";
        he.value = Ot, kt instanceof cl && kt.status === 409 && ((qe = kt.data) != null && qe.needs_force) && re.value ? re.value = {
          ...re.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : n("toast", Ot, "error");
      } finally {
        Q.value = !1;
      }
    }
    function Xe() {
      const De = we.value;
      Je(), De && z(De);
    }
    return mt(O), (De, Ae) => (o(), i(W, null, [
      b(Qt, null, vs({
        content: h(() => [
          S.value ? (o(), D(Vs, {
            key: 0,
            message: "Loading remotes..."
          })) : x.value ? (o(), D(Ws, {
            key: 1,
            message: x.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            e.embedded && !U.value ? (o(), i("div", A6, [
              s("div", z6, [
                b($n, {
                  modelValue: T.value,
                  "onUpdate:modelValue": Ae[2] || (Ae[2] = (qe) => T.value = qe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: K
              }, {
                default: h(() => [...Ae[5] || (Ae[5] = [
                  C(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            U.value ? (o(), D(x4, {
              key: 1,
              mode: N.value,
              "remote-name": B.value.name,
              "fetch-url": B.value.fetchUrl,
              "push-url": B.value.pushUrl,
              onSubmit: j,
              onCancel: de
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            R.value.length && !U.value ? (o(), D(At, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, ye(R.value, (qe) => (o(), D(m4, {
                  key: qe.name,
                  remote: qe,
                  "sync-status": $.value[qe.name],
                  "fetching-remote": P.value,
                  onFetch: le,
                  onEdit: ae,
                  onRemove: H,
                  onPull: z,
                  onPush: _e
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !R.value.length && !U.value ? (o(), D(Ps, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "primary",
                  onClick: K
                }, {
                  default: h(() => [...Ae[6] || (Ae[6] = [
                    C(" Add Your First Remote ", -1)
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
            b(Yt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Ae[0] || (Ae[0] = (qe) => I.value = !0)
            }, {
              actions: h(() => [
                U.value ? y("", !0) : (o(), D(Me, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: K
                }, {
                  default: h(() => [...Ae[4] || (Ae[4] = [
                    C(" + Add Remote ", -1)
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
            U.value ? y("", !0) : (o(), D($n, {
              key: 0,
              modelValue: T.value,
              "onUpdate:modelValue": Ae[1] || (Ae[1] = (qe) => T.value = qe),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(Cs, {
        show: I.value,
        title: "About Git Remotes",
        onClose: Ae[3] || (Ae[3] = (qe) => I.value = !1)
      }, {
        content: h(() => [...Ae[7] || (Ae[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            C(" The "),
            s("strong", null, '"origin"'),
            C(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "link",
            onClick: F
          }, {
            default: h(() => [...Ae[8] || (Ae[8] = [
              C(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(fI, {
        show: J.value,
        "remote-name": we.value || "",
        preview: Le.value,
        loading: Fe.value,
        pulling: Y.value === "executing",
        error: ke.value,
        "conflict-resolutions": Pe.value,
        onClose: ue,
        onPull: Ee,
        onOpenConflictResolution: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(zI, {
        show: Z.value,
        "remote-name": we.value || "",
        preview: re.value,
        loading: Fe.value,
        pushing: Q.value,
        error: he.value,
        onClose: Je,
        onPush: Ne,
        onPullFirst: Xe,
        onRevalidate: oe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      ne.value && E.value ? (o(), D(g6, {
        key: 0,
        "workflow-conflicts": E.value.workflow_conflicts,
        resolutions: Pe.value,
        "operation-type": "pull",
        validating: Y.value === "validating",
        error: be.value,
        onClose: Oe,
        onResolve: Ie,
        onApply: te
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      me.value && ge.value ? (o(), D(O6, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: Y.value === "executing",
        onProceed: V,
        onGoBack: fe,
        onCancel: We
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), B6 = /* @__PURE__ */ Te(F6, [["__scopeId", "data-v-a6651a66"]]), V6 = /* @__PURE__ */ Se({
  __name: "VersionControlSection",
  props: {
    commits: {},
    historyHasMore: { type: Boolean },
    isLoadingHistoryMore: { type: Boolean },
    currentRef: {},
    branches: {},
    current: {},
    initialTab: {}
  },
  emits: ["select", "checkout", "load-more-history", "switch", "create", "delete", "revert-current", "toast"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = [
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = _(n.initialTab ?? "remotes");
    return $t(() => n.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (o(), D(Qt, null, {
      header: h(() => [
        b(Yt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(zl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (o(), D($8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "has-more": e.historyHasMore,
          "is-loading-more": e.isLoadingHistoryMore,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d)),
          onLoadMore: u[3] || (u[3] = (d) => a("load-more-history"))
        }, null, 8, ["commits", "has-more", "is-loading-more", "current-ref"])) : r.value === "branches" ? (o(), D(J8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[4] || (u[4] = (d) => a("switch", d)),
          onCreate: u[5] || (u[5] = (d) => a("create", d)),
          onDelete: u[6] || (u[6] = (d) => a("delete", d)),
          onRevertCurrent: u[7] || (u[7] = (d) => a("revert-current"))
        }, null, 8, ["branches", "current"])) : (o(), D(B6, {
          key: 2,
          embedded: "",
          onToast: u[8] || (u[8] = (d, f) => a("toast", d, f))
        }))
      ]),
      _: 1
    }));
  }
}), W6 = { class: "text-viewer-wrapper" }, G6 = ["disabled", "title"], j6 = { class: "text-content" }, H6 = /* @__PURE__ */ Se({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, n = _(null), a = _("idle");
    async function l() {
      if (t.content)
        try {
          await Ul(t.content), a.value = "copied", setTimeout(() => {
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
    return (u, d) => (o(), i("div", W6, [
      s("div", {
        ref_key: "textOutputElement",
        ref: n,
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, G6),
        s("pre", j6, m(e.content), 1)
      ], 544)
    ]));
  }
}), q6 = /* @__PURE__ */ Te(H6, [["__scopeId", "data-v-85a537ba"]]), K6 = {
  key: 1,
  class: "manifest-viewer-shell"
}, J6 = { class: "manifest-path" }, Q6 = /* @__PURE__ */ Se({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ft(), n = _(!1), a = _(null), l = _(!1), r = _({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      n.value = !0, a.value = null;
      try {
        r.value = await t();
      } catch (u) {
        a.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        n.value = !1;
      }
    }
    return mt(c), (u, d) => (o(), i(W, null, [
      b(Qt, null, vs({
        content: h(() => [
          n.value ? (o(), D(Vs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (o(), D(Ws, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            !r.value.exists || !r.value.content ? (o(), D(Ps, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (o(), i("div", K6, [
              b(q6, {
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
            b(Yt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (f) => l.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: n.value
                }, {
                  default: h(() => [
                    C(m(n.value ? "Loading..." : "Refresh"), 1)
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
      b(Cs, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (f) => l.value = !1)
      }, {
        content: h(() => [
          d[3] || (d[3] = s("p", null, [
            C(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            C(" from the current environment's "),
            s("strong", null, ".cec"),
            C(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", J6, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: d[1] || (d[1] = (f) => l.value = !1)
          }, {
            default: h(() => [...d[7] || (d[7] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Y6 = /* @__PURE__ */ Te(Q6, [["__scopeId", "data-v-814a8fdd"]]), X6 = { class: "log-viewer-wrapper" }, Z6 = ["disabled", "title"], eE = /* @__PURE__ */ Se({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, n = _(null), a = _("idle"), l = M(() => t.logs.map((f) => ({
      text: t.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Kt();
      const f = (v = n.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    mt(r), $t(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const f = l.value.map((v) => v.text).join(`
`);
      try {
        await Ul(f), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy logs:", v);
      }
    }
    function u(f) {
      (f.ctrlKey || f.metaKey) && f.key === "c" && f.stopPropagation();
    }
    function d(f) {
      f.stopPropagation();
    }
    return (f, v) => (o(), i("div", X6, [
      s("div", {
        ref_key: "logOutputElement",
        ref: n,
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, Z6),
        (o(!0), i(W, null, ye(l.value, (p, w) => (o(), i("div", {
          key: w,
          class: Ve(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Dc = /* @__PURE__ */ Te(eE, [["__scopeId", "data-v-5aaf1b88"]]), tE = /* @__PURE__ */ Se({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: n, getEnvironmentLogPath: a, openFile: l } = ft(), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _("production"), v = _(null), p = _(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const $ = await n();
          f.value = $.environment || "production";
        } catch {
        }
      } catch ($) {
        u.value = $ instanceof Error ? $.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const $ = await a();
        $.exists && (v.value = $.path);
      } catch {
      }
    }
    async function k() {
      if (v.value) {
        p.value = !0;
        try {
          await l(v.value);
        } catch ($) {
          console.error("Failed to open log file:", $);
        } finally {
          p.value = !1;
        }
      }
    }
    return mt(() => {
      w(), g();
    }), ($, S) => (o(), i(W, null, [
      b(Qt, null, vs({
        content: h(() => [
          c.value ? (o(), D(Vs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (o(), D(Ws, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            r.value.length === 0 ? (o(), D(Ps, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), D(Dc, {
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
            b(Yt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: S[0] || (S[0] = (x) => d.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: k,
                  disabled: !v.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    C(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: h(() => [
                    C(m(c.value ? "Loading..." : "Refresh"), 1)
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
      b(Cs, {
        show: d.value,
        title: "About Environment Logs",
        onClose: S[2] || (S[2] = (x) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            S[3] || (S[3] = C(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(f.value), 1),
            S[4] || (S[4] = C(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          S[5] || (S[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            C(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            C(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            C(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            C(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: S[1] || (S[1] = (x) => d.value = !1)
          }, {
            default: h(() => [...S[6] || (S[6] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Oi = /* @__PURE__ */ Se({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ft(), c = e, u = _(c.initialTab ?? "workspace"), d = _([]), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(null), k = _(!1), $ = M(() => u.value === "workspace" ? w.value : g.value);
    async function S() {
      f.value = !0, v.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
      } catch (I) {
        v.value = I instanceof Error ? I.message : `Failed to load ${u.value} logs`;
      } finally {
        f.value = !1;
      }
    }
    async function x() {
      try {
        const [I, P] = await Promise.all([
          n(),
          l()
        ]);
        I.exists && (w.value = I.path), P.exists && (g.value = P.path);
      } catch {
      }
    }
    async function T() {
      if ($.value) {
        k.value = !0;
        try {
          await r($.value);
        } catch (I) {
          console.error("Failed to open log file:", I);
        } finally {
          k.value = !1;
        }
      }
    }
    return $t(u, () => {
      S();
    }), $t(() => c.initialTab, (I) => {
      I && (u.value = I);
    }), mt(() => {
      S(), x();
    }), (I, P) => (o(), i(W, null, [
      b(Qt, null, vs({
        content: h(() => [
          f.value ? (o(), D(Vs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : v.value ? (o(), D(Ws, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            d.value.length === 0 ? (o(), D(Ps, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (o(), D(Dc, {
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
            b(Yt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: P[0] || (P[0] = (U) => p.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T,
                  disabled: !$.value || k.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    C(m(k.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: S,
                  disabled: f.value
                }, {
                  default: h(() => [
                    C(m(f.value ? "Loading..." : "Refresh"), 1)
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
            b(zl, {
              modelValue: u.value,
              "onUpdate:modelValue": P[1] || (P[1] = (U) => u.value = U),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(Cs, {
        show: p.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (U) => p.value = !1)
      }, {
        content: h(() => [...P[4] || (P[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            C(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            C(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            C(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            C(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            C(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            C(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: P[2] || (P[2] = (U) => p.value = !1)
          }, {
            default: h(() => [...P[5] || (P[5] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sE = /* @__PURE__ */ Se({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, n = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = _(t.initialTab ?? "manifest"), l = _(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = _(!1), c = M(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = M(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return $t(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), $t(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, f) => (o(), i(W, null, [
      b(Qt, null, vs({
        header: h(() => [
          b(Yt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (o(), D(Y6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (o(), D(tE, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (o(), D(Oi, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (o(), D(Oi, {
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
            b(zl, {
              modelValue: l.value,
              "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
              tabs: n
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(Cs, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: f[3] || (f[3] = (v) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (o(), i(W, { key: 0 }, [
            f[4] || (f[4] = s("p", null, [
              s("strong", null, "Manifest"),
              C(" shows the live "),
              s("strong", null, "pyproject.toml"),
              C(" from the current environment's "),
              s("strong", null, ".cec"),
              C(" directory. ")
            ], -1)),
            f[5] || (f[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            f[6] || (f[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (o(), i(W, { key: 1 }, [
            f[7] || (f[7] = s("p", null, [
              s("strong", null, "Logging"),
              C(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            f[8] || (f[8] = s("p", null, [
              s("strong", null, "Environment"),
              C(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            f[9] || (f[9] = s("p", null, [
              s("strong", null, "Workspace"),
              C(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            f[10] || (f[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              C(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            size: "sm",
            onClick: f[2] || (f[2] = (v) => r.value = !1)
          }, {
            default: h(() => [...f[11] || (f[11] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), nE = { class: "header-info" }, oE = { class: "commit-hash" }, aE = {
  key: 0,
  class: "commit-refs"
}, lE = { class: "commit-message" }, iE = { class: "commit-date" }, rE = {
  key: 0,
  class: "loading"
}, cE = {
  key: 1,
  class: "changes-section"
}, uE = { class: "stats-row" }, dE = { class: "stat" }, mE = { class: "stat insertions" }, fE = { class: "stat deletions" }, vE = {
  key: 0,
  class: "change-group"
}, pE = {
  key: 1,
  class: "change-group"
}, gE = {
  key: 0,
  class: "version"
}, hE = {
  key: 2,
  class: "change-group"
}, yE = { class: "change-item" }, wE = /* @__PURE__ */ Se({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: n } = ft(), a = _(null), l = _(!0), r = M(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = M(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return mt(async () => {
      try {
        a.value = await n(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (o(), D(Lt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (f) => u.$emit("close"))
    }, {
      header: h(() => {
        var f, v, p, w;
        return [
          s("div", nE, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", oE, m(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (o(), i("span", aE, [
              (o(!0), i(W, null, ye(a.value.refs, (g) => (o(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(Ue, {
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
        var f, v;
        return [
          s("div", lE, m(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          s("div", iE, m(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (o(), i("div", rE, "Loading details...")) : a.value ? (o(), i("div", cE, [
            s("div", uE, [
              s("span", dE, m(a.value.stats.files_changed) + " files", 1),
              s("span", mE, "+" + m(a.value.stats.insertions), 1),
              s("span", fE, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (o(), i("div", vE, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  C("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(W, null, ye(a.value.changes.workflows.added, (p) => (o(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(W, null, ye(a.value.changes.workflows.modified, (p) => (o(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(W, null, ye(a.value.changes.workflows.deleted, (p) => (o(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (o(), i("div", pE, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  C("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(W, null, ye(a.value.changes.nodes.added, (p) => (o(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (o(), i("span", gE, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (o(!0), i(W, null, ye(a.value.changes.nodes.removed, (p) => (o(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (o(), i("div", hE, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  C("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", yE, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            C(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(Ue, {
          variant: "primary",
          onClick: d[2] || (d[2] = (f) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            C(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), _E = /* @__PURE__ */ Te(wE, [["__scopeId", "data-v-d256ff6d"]]), kE = { class: "popover-header" }, bE = { class: "popover-body" }, $E = {
  key: 0,
  class: "changes-summary"
}, CE = {
  key: 0,
  class: "change-item"
}, xE = {
  key: 1,
  class: "change-item"
}, SE = {
  key: 2,
  class: "change-item"
}, IE = {
  key: 3,
  class: "change-item"
}, EE = {
  key: 4,
  class: "change-item"
}, TE = {
  key: 5,
  class: "change-item"
}, ME = {
  key: 1,
  class: "no-changes"
}, PE = {
  key: 2,
  class: "loading"
}, RE = {
  key: 3,
  class: "issues-error"
}, DE = { class: "error-header" }, LE = { class: "error-title" }, NE = { class: "issues-list" }, UE = { class: "workflow-state" }, OE = { class: "message-section" }, AE = { class: "popover-footer" }, zE = {
  key: 1,
  class: "commit-popover"
}, FE = { class: "popover-header" }, BE = { class: "popover-body" }, VE = {
  key: 0,
  class: "changes-summary"
}, WE = {
  key: 0,
  class: "change-item"
}, GE = {
  key: 1,
  class: "change-item"
}, jE = {
  key: 2,
  class: "change-item"
}, HE = {
  key: 3,
  class: "change-item"
}, qE = {
  key: 4,
  class: "change-item"
}, KE = {
  key: 5,
  class: "change-item"
}, JE = {
  key: 1,
  class: "no-changes"
}, QE = {
  key: 2,
  class: "loading"
}, YE = {
  key: 3,
  class: "issues-error"
}, XE = { class: "error-header" }, ZE = { class: "error-title" }, eT = { class: "issues-list" }, tT = { class: "workflow-state" }, sT = { class: "message-section" }, nT = { class: "popover-footer" }, oT = /* @__PURE__ */ Se({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = M(() => {
      if (!n.status) return !1;
      const k = n.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || n.status.has_changes;
    }), f = M(() => {
      if (!n.status) return !1;
      const k = n.status.workflows, $ = n.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || $.nodes_added.length > 0 || $.nodes_removed.length > 0;
    }), v = M(() => {
      var k;
      return (k = n.status) != null && k.workflows.analyzed ? n.status.workflows.analyzed.filter(($) => $.has_issues) : [];
    }), p = M(() => v.value.length > 0), w = M(() => p.value && !u.value);
    async function g() {
      var k, $, S, x;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const T = await l(r.value.trim(), u.value);
          if (T.status === "success") {
            const I = `Committed: ${((k = T.summary) == null ? void 0 : k.new) || 0} new, ${(($ = T.summary) == null ? void 0 : $.modified) || 0} modified, ${((S = T.summary) == null ? void 0 : S.deleted) || 0} deleted`;
            a("committed", { success: !0, message: I });
          } else if (T.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (T.status === "blocked") {
            const I = ((x = T.issues) == null ? void 0 : x.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: T.message || "Commit failed" });
        } catch (T) {
          a("committed", { success: !1, message: T instanceof Error ? T.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (k, $) => e.asModal ? (o(), D(cs, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (S) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = Ct(() => {
          }, ["stop"]))
        }, [
          s("div", kE, [
            $[11] || ($[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (S) => a("close"))
            }, [...$[10] || ($[10] = [
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
          s("div", bE, [
            e.status && d.value ? (o(), i("div", $E, [
              e.status.workflows.new.length ? (o(), i("div", CE, [
                $[12] || ($[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (o(), i("div", xE, [
                $[13] || ($[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (o(), i("div", SE, [
                $[14] || ($[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (o(), i("div", IE, [
                $[15] || ($[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), i("div", EE, [
                $[16] || ($[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (o(), i("div", TE, [...$[17] || ($[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (o(), i("div", ME, " No changes to commit ")) : (o(), i("div", PE, " Loading... ")),
            p.value ? (o(), i("div", RE, [
              s("div", DE, [
                $[18] || ($[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", LE, m(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", NE, [
                (o(!0), i(W, null, ye(v.value, (S) => (o(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", UE, "(" + m(S.sync_state) + ")", 1),
                  C(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              b(ca, {
                modelValue: u.value,
                "onUpdate:modelValue": $[1] || ($[1] = (S) => u.value = S),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...$[19] || ($[19] = [
                  C(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", OE, [
              b(zn, {
                modelValue: r.value,
                "onUpdate:modelValue": $[2] || ($[2] = (S) => r.value = S),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", AE, [
            b(Ue, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (S) => a("close"))
            }, {
              default: h(() => [...$[20] || ($[20] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                C(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), i("div", zE, [
      s("div", FE, [
        $[22] || ($[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (S) => a("close"))
        }, [...$[21] || ($[21] = [
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
      s("div", BE, [
        e.status && d.value ? (o(), i("div", VE, [
          e.status.workflows.new.length ? (o(), i("div", WE, [
            $[23] || ($[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (o(), i("div", GE, [
            $[24] || ($[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (o(), i("div", jE, [
            $[25] || ($[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (o(), i("div", HE, [
            $[26] || ($[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), i("div", qE, [
            $[27] || ($[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (o(), i("div", KE, [...$[28] || ($[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (o(), i("div", JE, " No changes to commit ")) : (o(), i("div", QE, " Loading... ")),
        p.value ? (o(), i("div", YE, [
          s("div", XE, [
            $[29] || ($[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", ZE, m(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", eT, [
            (o(!0), i(W, null, ye(v.value, (S) => (o(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", tT, "(" + m(S.sync_state) + ")", 1),
              C(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          b(ca, {
            modelValue: u.value,
            "onUpdate:modelValue": $[7] || ($[7] = (S) => u.value = S),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...$[30] || ($[30] = [
              C(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", sT, [
          b(zn, {
            modelValue: r.value,
            "onUpdate:modelValue": $[8] || ($[8] = (S) => r.value = S),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", nT, [
        b(Ue, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (S) => a("close"))
        }, {
          default: h(() => [...$[31] || ($[31] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Ue, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            C(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Lc = /* @__PURE__ */ Te(oT, [["__scopeId", "data-v-5f897631"]]), aT = { class: "switch-body" }, lT = { class: "switch-message" }, iT = { class: "switch-details" }, rT = /* @__PURE__ */ Se({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => e.show ? (o(), D(Lt, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: n[2] || (n[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", aT, [
          s("p", lT, [
            n[3] || (n[3] = C(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            n[4] || (n[4] = C(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            n[5] || (n[5] = C("? ", -1))
          ]),
          n[6] || (n[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", iT, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          n[7] || (n[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        b(Me, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("close"))
        }, {
          default: h(() => [...n[8] || (n[8] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Me, {
          variant: "primary",
          onClick: n[1] || (n[1] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [...n[9] || (n[9] = [
            C(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), cT = /* @__PURE__ */ Te(rT, [["__scopeId", "data-v-f6d223e6"]]), uT = {
  key: 0,
  class: "modal-overlay"
}, dT = { class: "modal-content" }, mT = { class: "modal-body" }, fT = { class: "progress-info" }, vT = { class: "progress-percentage" }, pT = { class: "progress-state" }, gT = { class: "switch-steps" }, hT = { class: "step-icon" }, yT = { class: "step-label" }, wT = /* @__PURE__ */ Se({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, n = M(() => {
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
    }), a = M(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = M(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === t.state);
      return r.map((u, d) => {
        let f = "pending", v = "○";
        return d < c ? (f = "completed", v = "✓") : d === c && (f = "active", v = "⟳"), {
          ...u,
          status: f,
          icon: v
        };
      });
    });
    return (r, c) => (o(), D(cs, { to: "body" }, [
      e.show ? (o(), i("div", uT, [
        s("div", dT, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", mT, [
            b(Ic, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", fT, [
              s("div", vT, m(e.progress) + "%", 1),
              s("div", pT, m(n.value), 1)
            ]),
            s("div", gT, [
              (o(!0), i(W, null, ye(l.value, (u) => (o(), i("div", {
                key: u.state,
                class: Ve(["switch-step", u.status])
              }, [
                s("span", hT, m(u.icon), 1),
                s("span", yT, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), _T = /* @__PURE__ */ Te(wT, [["__scopeId", "data-v-768a5078"]]), kT = { class: "modal-header" }, bT = { class: "modal-body" }, $T = {
  key: 0,
  class: "node-section"
}, CT = { class: "node-list" }, xT = {
  key: 1,
  class: "node-section"
}, ST = { class: "node-list" }, IT = { class: "modal-actions" }, ET = /* @__PURE__ */ Se({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => (o(), D(cs, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ct(() => {
          }, ["stop"]))
        }, [
          s("div", kT, [
            n[5] || (n[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", bT, [
            n[8] || (n[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), i("div", $T, [
              n[6] || (n[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", CT, [
                (o(!0), i(W, null, ye(e.mismatchDetails.missing_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), i("div", xT, [
              n[7] || (n[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", ST, [
                (o(!0), i(W, null, ye(e.mismatchDetails.extra_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            n[9] || (n[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", IT, [
            b(Me, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...n[10] || (n[10] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              onClick: n[2] || (n[2] = (a) => t.$emit("confirm"))
            }, {
              default: h(() => [...n[11] || (n[11] = [
                C(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), TT = /* @__PURE__ */ Te(ET, [["__scopeId", "data-v-7cad7518"]]), MT = [
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
], Vo = "v0.0.24", PT = "Akatz", RT = { class: "social-buttons" }, DT = ["title", "aria-label", "onClick"], LT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, NT = ["d"], UT = ["title", "aria-label", "onClick"], OT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, AT = ["d"], zT = /* @__PURE__ */ Se({
  __name: "SocialButtons",
  setup(e) {
    function t(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, a) => (o(), i("div", RT, [
      (o(!0), i(W, null, ye(it(MT), (l) => (o(), i(W, {
        key: l.id
      }, [
        l.label ? (o(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          C(m(l.label) + " ", 1),
          (o(), i("svg", LT, [
            s("path", {
              d: l.iconPath
            }, null, 8, NT)
          ]))
        ], 8, DT)) : (o(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (o(), i("svg", OT, [
            s("path", {
              d: l.iconPath
            }, null, 8, AT)
          ]))
        ], 8, UT))
      ], 64))), 128))
    ]));
  }
}), Nc = /* @__PURE__ */ Te(zT, [["__scopeId", "data-v-4f846342"]]), FT = { class: "footer-info" }, BT = ["title"], VT = {
  key: 0,
  class: "dev-badge"
}, WT = { class: "made-by" }, GT = /* @__PURE__ */ Se({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ft(), n = _(null), a = _(null), l = _(null), r = M(() => n.value === "development"), c = M(() => {
      var d;
      if (!r.value) return Vo;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Vo} (${u})` : `${Vo} (development)`;
    });
    return mt(async () => {
      try {
        const u = await t();
        n.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        n.value = null;
      }
    }), (u, d) => (o(), i("div", FT, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        C(m(it(Vo)) + " ", 1),
        r.value ? (o(), i("span", VT, "dev")) : y("", !0)
      ], 8, BT),
      s("span", WT, [
        d[0] || (d[0] = C(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        C(" by " + m(it(PT)), 1)
      ])
    ]));
  }
}), Uc = /* @__PURE__ */ Te(GT, [["__scopeId", "data-v-4fa265b3"]]), jT = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = _(null);
    async function a() {
      var r;
      await ((r = n.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (o(), D(Lt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        b($c, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          b(Ue, {
            variant: "primary",
            disabled: !((u = n.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              C(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ue, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), HT = /* @__PURE__ */ Te(jT, [["__scopeId", "data-v-fac00ae7"]]), qT = { class: "header-actions" }, KT = {
  key: 0,
  class: "wizard-step"
}, JT = { class: "form-field" }, QT = ["placeholder"], YT = {
  key: 0,
  class: "form-error"
}, XT = { class: "form-field form-field--checkbox" }, ZT = { class: "form-checkbox" }, eM = {
  key: 0,
  class: "form-field"
}, tM = ["placeholder"], sM = {
  key: 0,
  class: "form-info"
}, nM = {
  key: 1,
  class: "form-suggestion"
}, oM = {
  key: 2,
  class: "form-error"
}, aM = {
  key: 3,
  class: "form-info"
}, lM = {
  key: 1,
  class: "wizard-step"
}, iM = {
  key: 0,
  class: "progress-check-loading"
}, rM = {
  key: 0,
  class: "cli-warning"
}, cM = { class: "cli-warning-header" }, uM = {
  key: 1,
  class: "env-landing"
}, dM = { class: "env-list" }, mM = ["value"], fM = { class: "env-name" }, vM = {
  key: 2,
  class: "env-create"
}, pM = { class: "form-field" }, gM = { class: "form-field" }, hM = ["value"], yM = { class: "form-field" }, wM = ["disabled"], _M = ["value"], kM = { class: "form-field" }, bM = ["value"], $M = { class: "form-field form-field--checkbox" }, CM = { class: "form-checkbox" }, xM = {
  key: 0,
  class: "form-error"
}, SM = {
  key: 1,
  class: "env-creating"
}, IM = { class: "creating-intro" }, EM = {
  key: 3,
  class: "env-import"
}, TM = { class: "wizard-footer" }, MM = { class: "wizard-footer-actions" }, En = 10, PM = 600 * 1e3, Ai = 1800 * 1e3, RM = /* @__PURE__ */ Se({
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
    const n = e, a = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: f,
      getComfyUIReleases: v
    } = ft(), p = _(n.initialStep || 1), w = _(null), g = _("landing"), k = _(!1), $ = _(!1), S = _(!1), x = _(!1), T = _(null), I = _(n.initialStep === 2), P = _(n.defaultPath), U = _(!!n.detectedModelsDir), N = _(n.detectedModelsDir || ""), B = _(null), R = _(null), O = _(null), K = _(null), ae = _("my-new-env"), j = _(xc), de = _("latest"), le = _(Sc), H = _(!0), F = _(null), Y = _(null), J = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), ne = _(!1), me = _(!1), Z = _(!1), re = _({ progress: 0, message: "" }), Q = _({ progress: 0, message: "" }), he = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], we = _(0), Fe = _(null), Le = _(0), ke = _(null), Pe = M(() => {
      var Ne, Xe;
      const _e = (Ne = P.value) == null ? void 0 : Ne.trim(), oe = !B.value, Je = !U.value || !R.value && ((Xe = N.value) == null ? void 0 : Xe.trim());
      return _e && oe && Je;
    }), ge = M(() => {
      var _e;
      return (_e = ae.value) == null ? void 0 : _e.trim();
    }), be = M(() => !!(p.value === 2 || Y.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), E = M(() => Y.value || n.workspacePath || null);
    async function z() {
      var _e;
      if (B.value = null, !!((_e = P.value) != null && _e.trim()))
        try {
          const oe = await c({ path: P.value, type: "workspace" });
          oe.valid || (B.value = oe.error || "Invalid path");
        } catch (oe) {
          B.value = oe instanceof Error ? oe.message : "Validation failed";
        }
    }
    async function ue() {
      var _e;
      if (R.value = null, O.value = null, K.value = null, !!((_e = N.value) != null && _e.trim()))
        try {
          const oe = await c({ path: N.value, type: "models" });
          if (oe.valid)
            K.value = oe.model_count ?? null;
          else if (R.value = oe.error || "Invalid path", oe.suggestion) {
            O.value = oe.suggestion, N.value = oe.suggestion, R.value = null;
            const Je = await c({ path: oe.suggestion, type: "models" });
            Je.valid && (K.value = Je.model_count ?? null);
          }
        } catch (oe) {
          R.value = oe instanceof Error ? oe.message : "Validation failed";
        }
    }
    async function Ee() {
      var _e, oe, Je, Ne, Xe;
      if (B.value = null, R.value = null, await z(), (_e = B.value) != null && _e.includes("already exists")) {
        B.value = null, Y.value = ((oe = P.value) == null ? void 0 : oe.trim()) || n.defaultPath, p.value = 2, Ie();
        return;
      }
      if (!B.value && !(U.value && ((Je = N.value) != null && Je.trim()) && (await ue(), R.value))) {
        me.value = !0;
        try {
          await l({
            workspace_path: ((Ne = P.value) == null ? void 0 : Ne.trim()) || n.defaultPath,
            models_directory: U.value && ((Xe = N.value) == null ? void 0 : Xe.trim()) || null
          }), we.value = 0, Fe.value = Date.now();
          const De = setInterval(async () => {
            var Ae;
            if (Fe.value && Date.now() - Fe.value > PM) {
              clearInterval(De), me.value = !1, B.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const qe = await r();
              if (we.value = 0, qe.state === "idle" && me.value) {
                clearInterval(De), me.value = !1, B.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              re.value = { progress: qe.progress, message: qe.message }, qe.state === "complete" ? (clearInterval(De), me.value = !1, Y.value = ((Ae = P.value) == null ? void 0 : Ae.trim()) || n.defaultPath, p.value = 2, Ie()) : qe.state === "error" && (clearInterval(De), me.value = !1, B.value = qe.error || "Workspace creation failed");
            } catch (qe) {
              we.value++, console.warn(`Polling failure ${we.value}/${En}:`, qe), we.value >= En && (clearInterval(De), me.value = !1, B.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (De) {
          me.value = !1, B.value = De instanceof Error ? De.message : "Failed to create workspace";
        }
      }
    }
    async function Ce() {
      Z.value = !0, F.value = null;
      try {
        const _e = {
          name: ae.value.trim() || "my-new-env",
          python_version: j.value,
          comfyui_version: de.value,
          torch_backend: le.value,
          switch_after: H.value,
          workspace_path: Y.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(_e)).status === "started") {
          Le.value = 0, ke.value = Date.now();
          const Je = setInterval(async () => {
            if (ke.value && Date.now() - ke.value > Ai) {
              clearInterval(Je), Z.value = !1, F.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ne = await d();
              if (Le.value = 0, Ne.state === "idle" && Z.value) {
                clearInterval(Je), Z.value = !1, F.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Q.value = {
                progress: Ne.progress ?? 0,
                message: Ne.message,
                phase: Ne.phase
              }, Ne.state === "complete") {
                clearInterval(Je), Z.value = !1;
                const Xe = Ne.environment_name || _e.name;
                H.value ? a("complete", Xe, Y.value) : (g.value = "landing", a("environment-created-no-switch", Xe));
              } else Ne.state === "error" && (clearInterval(Je), Z.value = !1, F.value = Ne.error || "Environment creation failed");
            } catch (Ne) {
              Le.value++, console.warn(`Polling failure ${Le.value}/${En}:`, Ne), Le.value >= En && (clearInterval(Je), Z.value = !1, F.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (_e) {
        Z.value = !1, F.value = _e instanceof Error ? _e.message : "Unknown error";
      }
    }
    async function Ie() {
      ne.value = !0;
      try {
        J.value = await v();
      } catch (_e) {
        console.error("Failed to load ComfyUI releases:", _e);
      } finally {
        ne.value = !1;
      }
    }
    function Oe() {
      w.value && a("switch-environment", w.value, Y.value);
    }
    function te() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && n.setupState === "no_workspace" && (p.value = 1);
    }
    function V(_e, oe) {
      $.value = !1, oe ? a("complete", _e, Y.value) : (a("environment-created-no-switch", _e), g.value = "landing");
    }
    function fe() {
    }
    mt(async () => {
      if (n.detectedModelsDir && (N.value = n.detectedModelsDir), n.workspacePath && (Y.value = n.workspacePath), p.value === 2) {
        Ie();
        const _e = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await We(), clearTimeout(_e), I.value = !1;
      }
    });
    async function We() {
      try {
        const _e = await d();
        if (console.log("[ComfyGit] Create progress check:", _e.state, _e), _e.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", _e.environment_name), g.value = "create", Z.value = !0, ae.value = _e.environment_name || "my-new-env", Q.value = {
            progress: _e.progress ?? 0,
            message: _e.message,
            phase: _e.phase
          }, Be();
          return;
        }
      } catch (_e) {
        console.log("[ComfyGit] Create progress check failed:", _e);
      }
      try {
        const _e = await f();
        console.log("[ComfyGit] Import progress check:", _e.state, _e), _e.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", _e.environment_name), T.value = {
          message: _e.message || "Importing...",
          phase: _e.phase || "",
          progress: _e.progress ?? 0,
          environmentName: _e.environment_name || ""
        }, x.value = !0, g.value = "import", $.value = !0);
      } catch (_e) {
        console.log("[ComfyGit] Import progress check failed:", _e);
      }
    }
    async function Be() {
      Le.value = 0, ke.value = Date.now();
      let _e = null;
      const oe = async () => {
        if (ke.value && Date.now() - ke.value > Ai)
          return _e && clearInterval(_e), Z.value = !1, F.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ne = await d();
          if (Le.value = 0, Ne.state === "idle" && Z.value)
            return _e && clearInterval(_e), Z.value = !1, F.value = "Environment creation was interrupted. Please try again.", !1;
          if (Q.value = {
            progress: Ne.progress ?? 0,
            message: Ne.message,
            phase: Ne.phase
          }, Ne.state === "complete") {
            _e && clearInterval(_e), Z.value = !1;
            const Xe = Ne.environment_name || ae.value;
            return a("complete", Xe, Y.value), !1;
          } else if (Ne.state === "error")
            return _e && clearInterval(_e), Z.value = !1, F.value = Ne.error || "Environment creation failed", !1;
          return !0;
        } catch (Ne) {
          return Le.value++, console.warn(`Polling failure ${Le.value}/${En}:`, Ne), Le.value >= En ? (_e && clearInterval(_e), Z.value = !1, F.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await oe() && (_e = setInterval(async () => {
        !await oe() && _e && clearInterval(_e);
      }, 2e3));
    }
    return (_e, oe) => (o(), i(W, null, [
      b(Lt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: oe[15] || (oe[15] = (Je) => _e.$emit("close"))
      }, {
        header: h(() => [
          oe[20] || (oe[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", qT, [
            b(Nc),
            oe[19] || (oe[19] = s("span", { class: "header-divider" }, null, -1)),
            be.value ? (o(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: oe[0] || (oe[0] = (Je) => k.value = !0)
            }, [...oe[17] || (oe[17] = [
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
              onClick: oe[1] || (oe[1] = (Je) => _e.$emit("close")),
              title: "Close"
            }, [...oe[18] || (oe[18] = [
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
          var Je;
          return [
            p.value === 1 ? (o(), i("div", KT, [
              oe[24] || (oe[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", JT, [
                oe[21] || (oe[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Bt(s("input", {
                  "onUpdate:modelValue": oe[2] || (oe[2] = (Ne) => P.value = Ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, QT), [
                  [ho, P.value]
                ]),
                B.value ? (o(), i("p", YT, m(B.value), 1)) : y("", !0)
              ]),
              s("div", XT, [
                s("label", ZT, [
                  Bt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": oe[3] || (oe[3] = (Ne) => U.value = Ne)
                  }, null, 512), [
                    [ia, U.value]
                  ]),
                  oe[22] || (oe[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              U.value ? (o(), i("div", eM, [
                oe[23] || (oe[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Bt(s("input", {
                  "onUpdate:modelValue": oe[4] || (oe[4] = (Ne) => N.value = Ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, tM), [
                  [ho, N.value]
                ]),
                e.detectedModelsDir && !N.value ? (o(), i("p", sM, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                O.value ? (o(), i("p", nM, " Did you mean: " + m(O.value), 1)) : y("", !0),
                R.value ? (o(), i("p", oM, m(R.value), 1)) : y("", !0),
                K.value !== null && !R.value ? (o(), i("p", aM, " Found " + m(K.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              me.value ? (o(), D(ra, {
                key: 1,
                progress: re.value.progress,
                message: re.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (o(), i("div", lM, [
              I.value ? (o(), i("div", iM, [...oe[25] || (oe[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (o(), i(W, { key: 1 }, [
                !n.cliInstalled && !S.value ? (o(), i("div", rM, [
                  s("div", cM, [
                    oe[27] || (oe[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    oe[28] || (oe[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: oe[5] || (oe[5] = (Ne) => S.value = !0),
                      title: "Dismiss"
                    }, [...oe[26] || (oe[26] = [
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
                  oe[29] || (oe[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  oe[30] || (oe[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (o(), i("div", uM, [
                  oe[34] || (oe[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: oe[6] || (oe[6] = (Ne) => g.value = "create")
                  }, [...oe[31] || (oe[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: oe[7] || (oe[7] = (Ne) => {
                      x.value = !1, g.value = "import";
                    })
                  }, [...oe[32] || (oe[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Je = n.existingEnvironments) != null && Je.length ? (o(), i(W, { key: 0 }, [
                    oe[33] || (oe[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", dM, [
                      (o(!0), i(W, null, ye(n.existingEnvironments, (Ne) => (o(), i("label", {
                        key: Ne,
                        class: Ve(["env-option", { selected: w.value === Ne }])
                      }, [
                        Bt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ne,
                          "onUpdate:modelValue": oe[8] || (oe[8] = (Xe) => w.value = Xe)
                        }, null, 8, mM), [
                          [Ko, w.value]
                        ]),
                        s("span", fM, m(Ne), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (o(), i("div", vM, [
                  Z.value ? (o(), i("div", SM, [
                    s("p", IM, [
                      oe[41] || (oe[41] = C(" Creating environment ", -1)),
                      s("strong", null, m(ae.value), 1),
                      oe[42] || (oe[42] = C("... ", -1))
                    ]),
                    b(ra, {
                      progress: Q.value.progress,
                      message: Q.value.message,
                      "current-phase": Q.value.phase,
                      "show-steps": !0,
                      steps: he
                    }, null, 8, ["progress", "message", "current-phase"]),
                    oe[43] || (oe[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (o(), i(W, { key: 0 }, [
                    oe[40] || (oe[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", pM, [
                      oe[35] || (oe[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Bt(s("input", {
                        "onUpdate:modelValue": oe[9] || (oe[9] = (Ne) => ae.value = Ne),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [ho, ae.value]
                      ])
                    ]),
                    s("div", gM, [
                      oe[36] || (oe[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Bt(s("select", {
                        "onUpdate:modelValue": oe[10] || (oe[10] = (Ne) => j.value = Ne),
                        class: "form-select"
                      }, [
                        (o(!0), i(W, null, ye(it(Cc), (Ne) => (o(), i("option", {
                          key: Ne,
                          value: Ne
                        }, m(Ne), 9, hM))), 128))
                      ], 512), [
                        [An, j.value]
                      ])
                    ]),
                    s("div", yM, [
                      oe[37] || (oe[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Bt(s("select", {
                        "onUpdate:modelValue": oe[11] || (oe[11] = (Ne) => de.value = Ne),
                        class: "form-select",
                        disabled: ne.value
                      }, [
                        (o(!0), i(W, null, ye(J.value, (Ne) => (o(), i("option", {
                          key: Ne.tag_name,
                          value: Ne.tag_name
                        }, m(Ne.name), 9, _M))), 128))
                      ], 8, wM), [
                        [An, de.value]
                      ])
                    ]),
                    s("div", kM, [
                      oe[38] || (oe[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Bt(s("select", {
                        "onUpdate:modelValue": oe[12] || (oe[12] = (Ne) => le.value = Ne),
                        class: "form-select"
                      }, [
                        (o(!0), i(W, null, ye(it(Al), (Ne) => (o(), i("option", {
                          key: Ne,
                          value: Ne
                        }, m(Ne) + m(Ne === "auto" ? " (detect GPU)" : ""), 9, bM))), 128))
                      ], 512), [
                        [An, le.value]
                      ])
                    ]),
                    s("div", $M, [
                      s("label", CM, [
                        Bt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": oe[13] || (oe[13] = (Ne) => H.value = Ne)
                        }, null, 512), [
                          [ia, H.value]
                        ]),
                        oe[39] || (oe[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    F.value ? (o(), i("div", xM, m(F.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (o(), i("div", EM, [
                  b(Tc, {
                    "workspace-path": Y.value,
                    "resume-import": x.value,
                    "initial-progress": T.value ?? void 0,
                    onImportComplete: V,
                    onImportStarted: oe[14] || (oe[14] = (Ne) => $.value = !0),
                    onSourceCleared: fe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", TM, [
            b(Uc),
            s("div", MM, [
              p.value === 1 ? (o(), D(Ue, {
                key: 0,
                variant: "primary",
                disabled: !Pe.value || me.value,
                onClick: Ee
              }, {
                default: h(() => [
                  C(m(me.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (o(), i(W, { key: 1 }, [
                !Z.value && !$.value && (g.value !== "landing" || n.setupState === "no_workspace" && !Y.value) ? (o(), D(Ue, {
                  key: 0,
                  variant: "secondary",
                  onClick: te
                }, {
                  default: h(() => [...oe[44] || (oe[44] = [
                    C(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (o(), D(Ue, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || Z.value,
                  onClick: Ce
                }, {
                  default: h(() => [
                    C(m(Z.value ? "Creating..." : H.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (o(), D(Ue, {
                  key: 2,
                  variant: "primary",
                  onClick: Oe
                }, {
                  default: h(() => [
                    C(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      k.value ? (o(), D(HT, {
        key: 0,
        "workspace-path": E.value,
        onClose: oe[16] || (oe[16] = (Je) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), DM = /* @__PURE__ */ Te(RM, [["__scopeId", "data-v-9a9aadc0"]]), LM = { class: "update-banner" }, NM = { class: "update-banner__left" }, UM = { class: "update-banner__title" }, OM = {
  key: 0,
  class: "update-banner__summary"
}, AM = { class: "update-banner__actions" }, zM = ["disabled"], FM = ["disabled"], BM = ["disabled"], VM = /* @__PURE__ */ Se({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", LM, [
      s("div", NM, [
        s("div", UM, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (o(), i("div", OM, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", AM, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => n("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, zM),
        e.info.release_url ? (o(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => n("release-notes"))
        }, " Release notes ", 8, FM)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => n("dismiss"))
        }, " Dismiss ", 8, BM)
      ])
    ]));
  }
}), WM = /* @__PURE__ */ Te(VM, [["__scopeId", "data-v-49562c5c"]]), Oc = "ComfyGit.UpdateNotice.DismissedVersion";
function GM() {
  try {
    return localStorage.getItem(Oc);
  } catch {
    return null;
  }
}
function jM(e) {
  try {
    localStorage.setItem(Oc, e);
  } catch {
  }
}
function HM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : GM() !== e.latest_version;
}
const qM = { class: "comfygit-panel" }, KM = { class: "panel-header" }, JM = { class: "header-left" }, QM = {
  key: 0,
  class: "header-info"
}, YM = { class: "header-actions" }, XM = { class: "env-switcher" }, ZM = { class: "env-switcher-header" }, eP = { class: "env-control-buttons" }, tP = {
  key: 0,
  class: "header-info"
}, sP = { class: "branch-name" }, nP = { class: "panel-main" }, oP = { class: "sidebar" }, aP = { class: "sidebar-content" }, lP = { class: "sidebar-section" }, iP = { class: "sidebar-section" }, rP = { class: "sidebar-section" }, cP = { class: "sidebar-footer" }, uP = { class: "content-area" }, dP = {
  key: 0,
  class: "error-message"
}, mP = {
  key: 1,
  class: "loading"
}, fP = { class: "dialog-content env-selector-dialog" }, vP = { class: "dialog-header" }, pP = { class: "dialog-body" }, gP = { class: "env-list" }, hP = { class: "env-info" }, yP = { class: "env-name-row" }, wP = { class: "env-indicator" }, _P = { class: "env-name" }, kP = {
  key: 0,
  class: "env-branch"
}, bP = {
  key: 1,
  class: "current-label"
}, $P = { class: "env-stats" }, CP = ["onClick"], xP = { class: "toast-container" }, SP = { class: "toast-message" }, zi = "ComfyGit.LastView", Fi = "ComfyGit.LastSection", Bi = 50, IP = /* @__PURE__ */ Se({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const n = e, a = t, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: f,
      revertChanges: v,
      deleteBranch: p,
      getEnvironments: w,
      switchEnvironment: g,
      getSwitchProgress: k,
      deleteEnvironment: $,
      syncEnvironmentManually: S,
      repairWorkflowModels: x,
      getSetupStatus: T,
      getUpdateCheck: I,
      updateManager: P
    } = ft(), U = ey(), N = _(null), B = _([]), R = _(!1), O = _(!1), K = _([]), ae = _([]), j = M(() => ae.value.find((ce) => ce.is_current)), de = _(null), le = _(!1), H = _(!1), F = _("remotes");
    function Y(ce) {
      return ce ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[ce] ?? "manifest" : "manifest";
    }
    const J = _(Y(n.initialView)), ne = _(null), me = _(!1), Z = _(1), re = M(() => {
      var ce;
      return ((ce = ne.value) == null ? void 0 : ce.state) || "managed";
    }), Q = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, he = M(() => {
      var ce, G;
      return ((G = (ce = ne.value) == null ? void 0 : ce.runtime_context) == null ? void 0 : G.capabilities) || Q;
    }), we = _(!1), Fe = _(null), Le = _(null), ke = _(!1), Pe = _(null), ge = _(!1), be = _(!1), E = M(() => !ge.value && HM(Pe.value)), z = _(null), ue = _(null), Ee = _(null), Ce = _(!1), Ie = _(!1), Oe = _(""), te = _(null), V = _({ state: "idle", progress: 0, message: "" });
    let fe = null, We = null;
    const Be = {
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
    }, _e = n.initialView ? Be[n.initialView] : null, oe = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], Je = ["this-env", "version-control", "workspace", "diagnostics"];
    function Ne() {
      try {
        const ce = sessionStorage.getItem(zi), G = sessionStorage.getItem(Fi), Ke = ce === "branches" || ce === "history" || ce === "remotes" ? "version-control" : ce === "manifest" || ce === "debug-env" || ce === "debug-workspace" ? "diagnostics" : ce, nt = G === "all-envs" ? "workspace" : G === "sharing" ? "version-control" : G;
        if (ce && G && oe.includes(Ke) && Je.includes(nt))
          return { view: Ke, section: nt };
      } catch {
      }
      return null;
    }
    const Xe = Ne(), De = _((_e == null ? void 0 : _e.view) ?? (Xe == null ? void 0 : Xe.view) ?? "status"), Ae = _((_e == null ? void 0 : _e.section) ?? (Xe == null ? void 0 : Xe.section) ?? "this-env");
    function qe(ce, G) {
      De.value = ce, Ae.value = G;
      try {
        sessionStorage.setItem(zi, ce), sessionStorage.setItem(Fi, G);
      } catch {
      }
    }
    function kt(ce) {
      const Ke = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ce];
      Ke && qe(Ke.view, Ke.section);
    }
    function Ot(ce) {
      F.value = ce, qe("version-control", "version-control");
    }
    function Gt(ce) {
      J.value = ce, qe("diagnostics", "diagnostics");
    }
    function ee() {
      Ot("branches");
    }
    function se() {
      a("close"), setTimeout(async () => {
        await pe("Comfy.OpenManagerDialog") || await pe("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Qe(["Extensions", "Manage extensions"]) || Qe(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function pe(ce) {
      var nt, ht;
      const G = window.app, Ke = [
        (nt = G == null ? void 0 : G.extensionManager) == null ? void 0 : nt.command,
        (ht = G == null ? void 0 : G.extensionManager) == null ? void 0 : ht.commands,
        G == null ? void 0 : G.command,
        G == null ? void 0 : G.commands
      ];
      for (const Et of Ke)
        if (typeof (Et == null ? void 0 : Et.execute) == "function")
          try {
            return await Et.execute(ce), !0;
          } catch (jt) {
            console.debug(`[ComfyGit] Command ${ce} did not open Extensions manager`, jt);
          }
      return !1;
    }
    function Qe(ce) {
      var nt, ht, Et;
      const G = ce.map((jt) => jt.toLowerCase()), Ke = document.querySelectorAll('button, [role="button"]');
      for (const jt of Ke) {
        const A = jt;
        if ([
          (nt = A.textContent) == null ? void 0 : nt.trim(),
          (ht = A.getAttribute("title")) == null ? void 0 : ht.trim(),
          (Et = A.getAttribute("aria-label")) == null ? void 0 : Et.trim()
        ].filter(Boolean).map((je) => je.toLowerCase()).some((je) => G.includes(je)))
          return A.click(), !0;
      }
      return !1;
    }
    const Re = _(null), lt = _(!1), st = _(!1), pt = _([]);
    let St = 0;
    function Ye(ce, G = "info", Ke = 3e3) {
      const nt = ++St;
      return pt.value.push({ id: nt, message: ce, type: G }), Ke > 0 && setTimeout(() => {
        pt.value = pt.value.filter((ht) => ht.id !== nt);
      }, Ke), nt;
    }
    function bt(ce) {
      pt.value = pt.value.filter((G) => G.id !== ce);
    }
    function Xt(ce, G) {
      Ye(ce, G);
    }
    async function us() {
      Pe.value = null, ge.value = !1;
      try {
        Pe.value = await I();
      } catch {
      }
    }
    function q() {
      var G;
      const ce = (G = Pe.value) == null ? void 0 : G.release_url;
      if (ce)
        try {
          window.open(ce, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function ve() {
      var G;
      const ce = (G = Pe.value) == null ? void 0 : G.latest_version;
      ce && jM(ce), ge.value = !0;
    }
    async function ze() {
      if (be.value) return;
      be.value = !0;
      const ce = Ye("Updating comfygit-manager...", "info", 0);
      try {
        const G = await P();
        if (bt(ce), G.status !== "success") {
          if (Ye(G.message || "Update failed", "error"), G.manual_instructions) {
            const Ke = G.manual_instructions.split(`
`).map((nt) => nt.trim()).filter(Boolean);
            Re.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: Ke,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                Re.value = null;
              }
            };
          }
          return;
        }
        if (Ye(G.message || "Update complete", "success"), ve(), G.restart_required) {
          He();
          try {
            await Qs("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (G) {
        bt(ce);
        const Ke = G instanceof Error ? G.message : "Update failed";
        Ye(Ke, "error");
      } finally {
        be.value = !1;
      }
    }
    const $e = M(() => {
      if (!N.value) return "neutral";
      const ce = N.value.workflows, G = ce.new.length > 0 || ce.modified.length > 0 || ce.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? G ? "warning" : "success" : "error";
    });
    M(() => N.value ? $e.value === "success" ? "All synced" : $e.value === "warning" ? "Uncommitted changes" : $e.value === "error" ? "Not synced" : "" : "");
    async function Ge(ce = {}) {
      we.value = !0, Fe.value = null;
      try {
        const [G, Ke, nt, ht] = await Promise.all([
          l(!0),
          r(Bi),
          c(),
          w()
        ]);
        N.value = G, B.value = Ke.commits, R.value = Ke.has_more, K.value = nt.branches, ae.value = ht, a("statusUpdate", G), (ce.refreshWorkflows ?? !0) && z.value && await z.value.loadWorkflows(!0);
      } catch (G) {
        Fe.value = G instanceof Error ? G.message : "Failed to load status", N.value = null, B.value = [], R.value = !1, K.value = [];
      } finally {
        we.value = !1;
      }
    }
    async function et() {
      if (!(O.value || !R.value)) {
        O.value = !0;
        try {
          const ce = await r(Bi, B.value.length);
          B.value = [...B.value, ...ce.commits], R.value = ce.has_more;
        } catch (ce) {
          Ye(ce instanceof Error ? ce.message : "Failed to load more commits", "error");
        } finally {
          O.value = !1;
        }
      }
    }
    function ct(ce) {
      Le.value = ce;
    }
    function ut() {
      return N.value ? N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes : !1;
    }
    async function It(ce) {
      var Ke;
      Le.value = null;
      const G = ut();
      Re.value = {
        title: G ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: G ? "You have uncommitted changes that will be lost." : `Checkout commit ${ce.short_hash || ((Ke = ce.hash) == null ? void 0 : Ke.slice(0, 7))}?`,
        details: G ? Qn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: G,
        onConfirm: async () => {
          var Et;
          Re.value = null, He();
          const nt = Ye(`Checking out ${ce.short_hash || ((Et = ce.hash) == null ? void 0 : Et.slice(0, 7))}...`, "info", 0), ht = await u(ce.hash, G);
          bt(nt), ht.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(ht.message || "Checkout failed", "error");
        }
      };
    }
    async function Mt(ce) {
      const G = ut();
      Re.value = {
        title: G ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: G ? "You have uncommitted changes." : `Switch to branch "${ce}"?`,
        details: G ? Qn() : void 0,
        warning: G ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Re.value = null, He();
          const Ke = Ye(`Switching to ${ce}...`, "info", 0), nt = await f(ce, G);
          bt(Ke), nt.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(nt.message || "Branch switch failed", "error");
        }
      };
    }
    async function yt() {
      if (!ut()) {
        Ye("No uncommitted changes to revert", "info");
        return;
      }
      Re.value = {
        title: "Revert Uncommitted Changes",
        message: "Discard all uncommitted changes on the current branch?",
        details: Qn(),
        warning: "This permanently discards uncommitted workflow and manifest changes, then restarts ComfyUI from the current HEAD.",
        confirmLabel: "Revert Changes",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Re.value = null, He();
          const ce = Ye("Reverting uncommitted changes...", "info", 0), G = await v();
          bt(ce), G.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(G.message || "Revert failed", "error");
        }
      };
    }
    async function X(ce) {
      const G = Ye(`Creating branch ${ce}...`, "info", 0), Ke = await d(ce);
      bt(G), Ke.status === "success" ? (Ye(`Branch "${ce}" created`, "success"), await Ge()) : Ye(Ke.message || "Failed to create branch", "error");
    }
    async function L(ce, G = !1) {
      const Ke = async (nt) => {
        var Et;
        const ht = Ye(`Deleting branch ${ce}...`, "info", 0);
        try {
          const jt = await p(ce, nt);
          bt(ht), jt.status === "success" ? (Ye(`Branch "${ce}" deleted`, "success"), await Ge()) : (Et = jt.message) != null && Et.includes("not fully merged") ? Re.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ce}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Re.value = null, await Ke(!0);
            }
          } : Ye(jt.message || "Failed to delete branch", "error");
        } catch (jt) {
          bt(ht);
          const A = jt instanceof Error ? jt.message : "Failed to delete branch";
          A.includes("not fully merged") ? Re.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ce}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Re.value = null, await Ke(!0);
            }
          } : Ye(A, "error");
        }
      };
      Re.value = {
        title: "Delete Branch",
        message: `Delete branch "${ce}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Re.value = null, await Ke(G);
        }
      };
    }
    async function ie(ce) {
      Le.value = null;
      const G = prompt("Enter branch name:");
      if (G) {
        const Ke = Ye(`Creating branch ${G}...`, "info", 0), nt = await d(G, ce.hash);
        bt(Ke), nt.status === "success" ? (Ye(`Branch "${G}" created from ${ce.short_hash}`, "success"), await Ge()) : Ye(nt.message || "Failed to create branch", "error");
      }
    }
    function He() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ze() {
      if (!he.value.can_restart_current) {
        Ye("Restart is not available in this runtime context.", "warning");
        return;
      }
      Re.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Re.value = null, He(), Ye("Restarting environment...", "info");
          try {
            await Qs("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function zt() {
      if (!he.value.can_stop_current) {
        Ye("Stop is not available in this runtime context.", "warning");
        return;
      }
      Re.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Re.value = null, Ye("Stopping environment...", "info");
          try {
            await Qs("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Zt(ce, G) {
      if (!he.value.can_switch_environment) {
        Ye("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      ke.value = !1, Oe.value = ce, te.value = G || null, Ce.value = !0;
    }
    async function xs() {
      Ce.value = !1, Ie.value = !0, He(), V.value = {
        progress: 10,
        state: ds(10),
        message: dt(10)
      };
      try {
        await g(Oe.value, te.value || void 0), tn(), Jn();
      } catch (ce) {
        Pt(), Ie.value = !1, Ye(`Failed to initiate switch: ${ce instanceof Error ? ce.message : "Unknown error"}`, "error"), V.value = { state: "idle", progress: 0, message: "" }, te.value = null;
      }
    }
    function ds(ce) {
      return ce >= 100 ? "complete" : ce >= 80 ? "validating" : ce >= 60 ? "starting" : ce >= 30 ? "syncing" : "preparing";
    }
    function dt(ce) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ds(ce)] || "";
    }
    function tn() {
      if (We) return;
      let ce = 10;
      const G = 60, Ke = 5e3, nt = 100, ht = (G - ce) / (Ke / nt);
      We = window.setInterval(() => {
        if (ce += ht, ce >= G && (ce = G, Pt()), V.value.progress < G) {
          const Et = Math.floor(ce);
          V.value = {
            progress: Et,
            state: ds(Et),
            message: dt(Et)
          };
        }
      }, nt);
    }
    function Pt() {
      We && (clearInterval(We), We = null);
    }
    function Jn() {
      fe || (fe = window.setInterval(async () => {
        try {
          let ce = await U.getStatus();
          if ((!ce || ce.state === "idle") && (ce = await k()), !ce)
            return;
          const G = ce.progress || 0;
          G >= 60 && Pt();
          const Ke = Math.max(G, V.value.progress), nt = ce.state && ce.state !== "idle" && ce.state !== "unknown", ht = nt ? ce.state : ds(Ke), Et = nt && ce.message || dt(Ke);
          V.value = {
            state: ht,
            progress: Ke,
            message: Et
          }, ce.state === "complete" ? (Pt(), ms(), Ie.value = !1, Ye(`✓ Switched to ${Oe.value}`, "success"), await Ge(), Oe.value = "") : ce.state === "rolled_back" ? (Pt(), ms(), Ie.value = !1, Ye("Switch failed, restored previous environment", "warning"), Oe.value = "") : ce.state === "critical_failure" && (Pt(), ms(), Ie.value = !1, Ye(`Critical error during switch: ${ce.message}`, "error"), Oe.value = "");
        } catch (ce) {
          console.error("Failed to poll switch progress:", ce);
        }
      }, 1e3));
    }
    function ms() {
      Pt(), fe && (clearInterval(fe), fe = null);
    }
    function xn() {
      var ce;
      Ce.value = !1, Oe.value = "", (ce = ne.value) != null && ce.state && ne.value.state !== "managed" && (Z.value = ne.value.state === "no_workspace" ? 1 : 2, me.value = !0);
    }
    async function $a(ce) {
      lt.value = !1, await Ge(), Ye(ce.message, ce.success ? "success" : "error");
    }
    async function Ca() {
      st.value = !1;
      const ce = Ye("Syncing environment...", "info", 0);
      try {
        const G = await S("skip", !0);
        if (bt(ce), G.status === "success") {
          const Ke = [];
          G.nodes_installed.length && Ke.push(`${G.nodes_installed.length} installed`), G.nodes_removed.length && Ke.push(`${G.nodes_removed.length} removed`);
          const nt = Ke.length ? `: ${Ke.join(", ")}` : "";
          Ye(`✓ Environment synced${nt}`, "success"), await Ge();
        } else {
          const Ke = G.errors.length ? G.errors.join("; ") : G.message;
          Ye(`Sync failed: ${Ke}`, "error");
        }
      } catch (G) {
        bt(ce), Ye(`Sync error: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
      }
    }
    async function xa(ce) {
      var G;
      try {
        const Ke = await x(ce);
        Ke.failed.length === 0 ? Ye(`✓ Repaired ${Ke.success} workflow${Ke.success === 1 ? "" : "s"}`, "success") : Ye(`Repaired ${Ke.success}, failed: ${Ke.failed.length}`, "warning"), await Ge();
      } catch (Ke) {
        Ye(`Repair failed: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (G = Ee.value) == null || G.resetRepairingState();
      }
    }
    async function Do() {
      var G, Ke;
      const ce = Ye("Repairing environment...", "info", 0);
      try {
        const nt = await S("skip", !0);
        if (bt(ce), nt.status === "success") {
          const ht = [];
          nt.nodes_installed.length && ht.push(`${nt.nodes_installed.length} installed`), nt.nodes_removed.length && ht.push(`${nt.nodes_removed.length} removed`);
          const Et = ht.length ? `: ${ht.join(", ")}` : "";
          Ye(`✓ Environment repaired${Et}`, "success"), (G = Ee.value) == null || G.closeDetailModal(), await Ge();
        } else {
          const ht = nt.errors.length ? nt.errors.join(", ") : nt.message || "Unknown error";
          Ye(`Repair failed: ${ht}`, "error");
        }
      } catch (nt) {
        bt(ce), Ye(`Repair error: ${nt instanceof Error ? nt.message : "Unknown error"}`, "error");
      } finally {
        (Ke = Ee.value) == null || Ke.resetRepairingEnvironmentState();
      }
    }
    async function Sa(ce, G) {
      Ye(`Environment '${ce}' created`, "success"), await Ge(), ue.value && await ue.value.loadEnvironments(), G && he.value.can_switch_environment && await Zt(ce);
    }
    async function Ia(ce) {
      var G;
      if (!he.value.can_delete_environment) {
        Ye("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((G = j.value) == null ? void 0 : G.name) === ce) {
        Ye("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Re.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ce}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Re.value = null;
          try {
            const Ke = await $(ce);
            Ke.status === "success" ? (Ye(`Environment "${ce}" deleted`, "success"), await Ge(), ue.value && await ue.value.loadEnvironments()) : Ye(Ke.message || "Failed to delete environment", "error");
          } catch (Ke) {
            Ye(`Error deleting environment: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ea(ce, G) {
      me.value = !1;
      try {
        ne.value = await T();
      } catch {
      }
      he.value.can_switch_environment && await Zt(ce, G);
    }
    function Ta() {
      me.value = !1, a("close");
    }
    async function Ma(ce, G) {
      await Zt(ce, G);
    }
    async function Pa(ce) {
      le.value = !1, await Ge(), await Zt(ce);
    }
    function Ra() {
      de.value = null, le.value = !0;
    }
    function Da(ce) {
      de.value = ce, H.value = !0;
    }
    function Lo() {
      H.value = !1, de.value = null;
    }
    async function La(ce) {
      ne.value = await T(), console.log(`Environment '${ce}' created. Available for switching.`);
    }
    function Na() {
      if (!he.value.can_create_environment) {
        Ye("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      qe("environments", "workspace"), setTimeout(() => {
        var ce;
        (ce = ue.value) == null || ce.openCreateModal();
      }, 100);
    }
    function Qn() {
      if (!N.value) return [];
      const ce = [], G = N.value.workflows;
      return G.new.length && ce.push(`${G.new.length} new workflow(s)`), G.modified.length && ce.push(`${G.modified.length} modified workflow(s)`), G.deleted.length && ce.push(`${G.deleted.length} deleted workflow(s)`), N.value.has_changes && ce.length === 0 && ce.push("manifest or environment metadata changes"), ce;
    }
    return mt(async () => {
      try {
        if (ne.value = await T(), ne.value.state === "no_workspace" && he.value.can_initialize_workspace) {
          me.value = !0, Z.value = 1;
          return;
        }
        if (ne.value.state === "empty_workspace" && he.value.can_create_environment) {
          me.value = !0, Z.value = 2;
          return;
        }
        if (ne.value.state === "unmanaged" && he.value.can_switch_environment) {
          me.value = !0, Z.value = 2;
          return;
        }
      } catch (ce) {
        console.warn("Setup status check failed, proceeding normally:", ce);
      }
      await Promise.all([
        Ge({ refreshWorkflows: !1 }),
        us()
      ]);
    }), (ce, G) => {
      var Ke, nt, ht, Et, jt, A, xe, je, wt, Ft, Rs, ps, Ht;
      return o(), i("div", qM, [
        s("div", KM, [
          s("div", JM, [
            G[27] || (G[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (o(), i("div", QM)) : y("", !0)
          ]),
          s("div", YM, [
            b(Nc),
            G[30] || (G[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ve(["icon-btn", { spinning: we.value }]),
              onClick: Ge,
              title: "Refresh"
            }, [...G[28] || (G[28] = [
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
              onClick: G[0] || (G[0] = (ot) => a("close")),
              title: "Close"
            }, [...G[29] || (G[29] = [
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
        E.value && Pe.value ? (o(), D(WM, {
          key: 0,
          info: Pe.value,
          updating: be.value,
          onUpdate: ze,
          onDismiss: ve,
          onReleaseNotes: q
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", XM, [
          s("div", ZM, [
            G[31] || (G[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", eP, [
              he.value.can_restart_current ? (o(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ze
              }, " Restart ")) : y("", !0),
              he.value.can_stop_current ? (o(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: zt
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: G[1] || (G[1] = (ot) => qe("environments", "workspace"))
          }, [
            N.value ? (o(), i("div", tP, [
              s("span", null, m(((Ke = j.value) == null ? void 0 : Ke.name) || ((nt = N.value) == null ? void 0 : nt.environment) || "Loading..."), 1),
              s("span", sP, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            G[32] || (G[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", nP, [
          s("div", oP, [
            s("div", aP, [
              s("div", lP, [
                G[33] || (G[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "status" && Ae.value === "this-env" }]),
                  onClick: G[2] || (G[2] = (ot) => qe("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "workflows" }]),
                  onClick: G[3] || (G[3] = (ot) => qe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "models-env" }]),
                  onClick: G[4] || (G[4] = (ot) => qe("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "nodes" }]),
                  onClick: G[5] || (G[5] = (ot) => qe("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "version-control" }]),
                  onClick: G[6] || (G[6] = (ot) => Ot("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              G[36] || (G[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", iP, [
                G[34] || (G[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "environments" }]),
                  onClick: G[7] || (G[7] = (ot) => qe("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "model-index" }]),
                  onClick: G[8] || (G[8] = (ot) => qe("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "settings" }]),
                  onClick: G[9] || (G[9] = (ot) => qe("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              G[37] || (G[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", rP, [
                G[35] || (G[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "diagnostics" && J.value === "manifest" }]),
                  onClick: G[10] || (G[10] = (ot) => Gt("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "diagnostics" && J.value !== "manifest" }]),
                  onClick: G[11] || (G[11] = (ot) => Gt("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", cP, [
              b(Uc)
            ])
          ]),
          s("div", uP, [
            Fe.value ? (o(), i("div", dP, m(Fe.value), 1)) : !N.value && De.value === "status" ? (o(), i("div", mP, " Loading status... ")) : (o(), i(W, { key: 2 }, [
              De.value === "status" ? (o(), D(Zh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: Ee,
                status: N.value,
                "setup-state": re.value,
                onSwitchBranch: ee,
                onCommitChanges: G[12] || (G[12] = (ot) => lt.value = !0),
                onSyncEnvironment: G[13] || (G[13] = (ot) => st.value = !0),
                onViewWorkflows: G[14] || (G[14] = (ot) => qe("workflows", "this-env")),
                onViewHistory: G[15] || (G[15] = (ot) => Ot("history")),
                onViewDebug: G[16] || (G[16] = (ot) => Gt("env")),
                onViewNodes: G[17] || (G[17] = (ot) => qe("nodes", "this-env")),
                onRepairMissingModels: xa,
                onRepairEnvironment: Do,
                onStartSetup: G[18] || (G[18] = (ot) => me.value = !0),
                onViewEnvironments: G[19] || (G[19] = (ot) => qe("environments", "workspace")),
                onCreateEnvironment: Na,
                onRefreshStatus: Ge
              }, null, 8, ["status", "setup-state"])) : De.value === "workflows" ? (o(), D(T2, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: Ge
              }, null, 512)) : De.value === "models-env" ? (o(), D(N$, {
                key: 2,
                onNavigate: kt
              })) : De.value === "version-control" ? (o(), D(V6, {
                key: 3,
                commits: B.value,
                "history-has-more": R.value,
                "is-loading-history-more": O.value,
                "current-ref": (ht = N.value) == null ? void 0 : ht.branch,
                branches: K.value,
                current: ((Et = N.value) == null ? void 0 : Et.branch) || null,
                "initial-tab": F.value,
                onSelect: ct,
                onCheckout: It,
                onLoadMoreHistory: et,
                onSwitch: Mt,
                onCreate: X,
                onDelete: L,
                onRevertCurrent: yt,
                onToast: Xt
              }, null, 8, ["commits", "history-has-more", "is-loading-history-more", "current-ref", "branches", "current", "initial-tab"])) : De.value === "nodes" ? (o(), D(IC, {
                key: 4,
                "version-mismatches": ((A = (jt = N.value) == null ? void 0 : jt.comparison) == null ? void 0 : A.version_mismatches) || [],
                onOpenNodeManager: se,
                onRepairEnvironment: Do,
                onToast: Xt
              }, null, 8, ["version-mismatches"])) : De.value === "diagnostics" ? (o(), D(sE, {
                key: 5,
                "initial-tab": J.value
              }, null, 8, ["initial-tab"])) : De.value === "environments" ? (o(), D(S3, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ue,
                "can-create": he.value.can_create_environment,
                "can-switch": he.value.can_switch_environment,
                "can-delete": he.value.can_delete_environment,
                onSwitch: Zt,
                onCreated: Sa,
                onDelete: Ia,
                onImport: Ra,
                onExport: Da
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : De.value === "model-index" ? (o(), D(H$, {
                key: 7,
                onRefresh: Ge
              })) : De.value === "settings" ? (o(), D(ex, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Le.value ? (o(), D(_E, {
          key: 1,
          commit: Le.value,
          onClose: G[20] || (G[20] = (ot) => Le.value = null),
          onCheckout: It,
          onCreateBranch: ie
        }, null, 8, ["commit"])) : y("", !0),
        Re.value ? (o(), D(Ol, {
          key: 2,
          title: Re.value.title,
          message: Re.value.message,
          details: Re.value.details,
          warning: Re.value.warning,
          confirmLabel: Re.value.confirmLabel,
          cancelLabel: Re.value.cancelLabel,
          secondaryLabel: Re.value.secondaryLabel,
          secondaryAction: Re.value.secondaryAction,
          destructive: Re.value.destructive,
          onConfirm: Re.value.onConfirm,
          onCancel: G[21] || (G[21] = (ot) => Re.value = null),
          onSecondary: Re.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        le.value ? (o(), D(Lt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: G[22] || (G[22] = (ot) => le.value = !1)
        }, {
          body: h(() => [
            b(d8, {
              embedded: "",
              onImportCompleteSwitch: Pa
            })
          ]),
          _: 1
        })) : y("", !0),
        H.value ? (o(), D(Lt, {
          key: 4,
          title: de.value ? `EXPORT ENVIRONMENT: ${de.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Lo
        }, {
          body: h(() => [
            b(gS, {
              embedded: "",
              "environment-name": de.value,
              onClose: Lo
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(cT, {
          show: Ce.value,
          "from-environment": ((xe = j.value) == null ? void 0 : xe.name) || "unknown",
          "to-environment": Oe.value,
          onConfirm: xs,
          onClose: xn
        }, null, 8, ["show", "from-environment", "to-environment"]),
        lt.value && N.value ? (o(), D(Lc, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: G[23] || (G[23] = (ot) => lt.value = !1),
          onCommitted: $a
        }, null, 8, ["status"])) : y("", !0),
        st.value && N.value ? (o(), D(TT, {
          key: 6,
          show: st.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: Ca,
          onClose: G[24] || (G[24] = (ot) => st.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(_T, {
          show: Ie.value,
          state: V.value.state,
          progress: V.value.progress,
          message: V.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ke.value ? (o(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: G[26] || (G[26] = Ct((ot) => ke.value = !1, ["self"]))
        }, [
          s("div", fP, [
            s("div", vP, [
              G[39] || (G[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: G[25] || (G[25] = (ot) => ke.value = !1)
              }, [...G[38] || (G[38] = [
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
            s("div", pP, [
              G[40] || (G[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", gP, [
                (o(!0), i(W, null, ye(ae.value, (ot) => (o(), i("div", {
                  key: ot.name,
                  class: Ve(["env-item", { current: ot.is_current }])
                }, [
                  s("div", hP, [
                    s("div", yP, [
                      s("span", wP, m(ot.is_current ? "●" : "○"), 1),
                      s("span", _P, m(ot.name), 1),
                      ot.current_branch ? (o(), i("span", kP, "(" + m(ot.current_branch) + ")", 1)) : y("", !0),
                      ot.is_current ? (o(), i("span", bP, "CURRENT")) : y("", !0)
                    ]),
                    s("div", $P, m(ot.workflow_count) + " workflows • " + m(ot.node_count) + " nodes ", 1)
                  ]),
                  !ot.is_current && he.value.can_switch_environment ? (o(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ua) => Zt(ot.name)
                  }, " SWITCH ", 8, CP)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        me.value ? (o(), D(DM, {
          key: 8,
          "default-path": ((je = ne.value) == null ? void 0 : je.default_path) || "~/comfygit",
          "detected-models-dir": ((wt = ne.value) == null ? void 0 : wt.detected_models_dir) || null,
          "initial-step": Z.value,
          "existing-environments": ((Ft = ne.value) == null ? void 0 : Ft.environments) || [],
          "cli-installed": ((Rs = ne.value) == null ? void 0 : Rs.cli_installed) ?? !0,
          "setup-state": ((ps = ne.value) == null ? void 0 : ps.state) || "no_workspace",
          "workspace-path": ((Ht = ne.value) == null ? void 0 : Ht.workspace_path) || null,
          onComplete: Ea,
          onClose: Ta,
          onSwitchEnvironment: Ma,
          onEnvironmentCreatedNoSwitch: La
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", xP, [
          b(fm, { name: "toast" }, {
            default: h(() => [
              (o(!0), i(W, null, ye(pt.value, (ot) => (o(), i("div", {
                key: ot.id,
                class: Ve(["toast", ot.type])
              }, [
                s("span", SP, m(ot.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), EP = /* @__PURE__ */ Te(IP, [["__scopeId", "data-v-addd093f"]]), TP = { class: "item-header" }, MP = { class: "item-info" }, PP = { class: "filename" }, RP = { class: "metadata" }, DP = { class: "size" }, LP = {
  key: 0,
  class: "type"
}, NP = { class: "item-actions" }, UP = {
  key: 0,
  class: "progress-section"
}, OP = { class: "progress-bar" }, AP = { class: "progress-stats" }, zP = { class: "downloaded" }, FP = { class: "speed" }, BP = {
  key: 0,
  class: "eta"
}, VP = {
  key: 1,
  class: "status-msg paused"
}, WP = {
  key: 2,
  class: "status-msg queued"
}, GP = {
  key: 3,
  class: "status-msg completed"
}, jP = {
  key: 4,
  class: "status-msg failed"
}, HP = {
  key: 0,
  class: "retries"
}, qP = /* @__PURE__ */ Se({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const n = t;
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
    return (c, u) => (o(), i("div", {
      class: Ve(["download-item", `status-${e.item.status}`])
    }, [
      s("div", TP, [
        s("div", MP, [
          s("div", PP, m(e.item.filename), 1),
          s("div", RP, [
            s("span", DP, m(a(e.item.size)), 1),
            e.item.type ? (o(), i("span", LP, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", NP, [
          e.item.status === "queued" || e.item.status === "downloading" ? (o(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (o(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (o(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (o(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (o(), i("div", UP, [
        s("div", OP, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", AP, [
          s("span", zP, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", FP, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (o(), i("span", BP, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (o(), i("div", VP, " Paused - click Resume to download ")) : e.item.status === "queued" ? (o(), i("div", WP, " Waiting in queue... ")) : e.item.status === "completed" ? (o(), i("div", GP, " ✓ Downloaded ")) : e.item.status === "failed" ? (o(), i("div", jP, [
        C(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (o(), i("span", HP, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), eo = /* @__PURE__ */ Te(qP, [["__scopeId", "data-v-2110df65"]]), KP = { class: "queue-title" }, JP = { class: "count" }, QP = { class: "queue-actions" }, YP = { class: "action-label" }, XP = {
  key: 0,
  class: "overall-progress"
}, ZP = { class: "progress-bar" }, eR = {
  key: 0,
  class: "current-mini"
}, tR = { class: "filename" }, sR = { class: "speed" }, nR = {
  key: 1,
  class: "queue-content"
}, oR = {
  key: 0,
  class: "section"
}, aR = {
  key: 1,
  class: "section"
}, lR = { class: "section-header" }, iR = { class: "section-label paused" }, rR = { class: "items-list" }, cR = {
  key: 2,
  class: "section"
}, uR = { class: "section-header" }, dR = { class: "section-label" }, mR = { class: "items-list" }, fR = {
  key: 3,
  class: "section"
}, vR = { class: "section-header" }, pR = { class: "section-label" }, gR = { class: "items-list" }, hR = {
  key: 4,
  class: "section"
}, yR = { class: "section-header" }, wR = { class: "section-label failed" }, _R = { class: "items-list" }, kR = /* @__PURE__ */ Se({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: n,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: f,
      retryDownload: v,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: k
    } = Kn(), $ = _(!1);
    let S = null;
    $t(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (P, U) => {
        S && (clearTimeout(S), S = null);
        const N = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, B = U && (U.active > 0 || U.paused > 0);
        N && B && (S = setTimeout(() => {
          k(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = M(() => {
      var N;
      if (t.items.length === 0) return 0;
      const P = l.value.length, U = ((N = n.value) == null ? void 0 : N.progress) || 0;
      return Math.round((P + U / 100) / t.items.length * 100);
    });
    function T(P) {
      f(P);
    }
    function I(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, U) => (o(), D(cs, { to: "body" }, [
      it(u) ? (o(), i("div", {
        key: 0,
        class: Ve(["model-download-queue", { minimized: !$.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: U[0] || (U[0] = (N) => $.value = !$.value)
        }, [
          s("div", KP, [
            U[4] || (U[4] = s("span", { class: "icon" }, "↓", -1)),
            U[5] || (U[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", JP, "(" + m(it(d)) + "/" + m(it(t).items.length) + ")", 1)
          ]),
          s("div", QP, [
            s("span", YP, m($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (o(), i("div", nR, [
          it(n) ? (o(), i("div", oR, [
            U[6] || (U[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(eo, {
              item: it(n),
              onCancel: U[1] || (U[1] = (N) => T(it(n).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          it(c).length > 0 ? (o(), i("div", aR, [
            s("div", lR, [
              s("span", iR, "Paused (" + m(it(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: U[2] || (U[2] = //@ts-ignore
                (...N) => it(w) && it(w)(...N))
              }, "Resume All")
            ]),
            s("div", rR, [
              (o(!0), i(W, null, ye(it(c), (N) => (o(), D(eo, {
                key: N.id,
                item: N,
                onResume: (B) => it(p)(N.id),
                onRemove: (B) => it(g)(N.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          it(a).length > 0 ? (o(), i("div", cR, [
            s("div", uR, [
              s("span", dR, "Queued (" + m(it(a).length) + ")", 1)
            ]),
            s("div", mR, [
              (o(!0), i(W, null, ye(it(a), (N) => (o(), D(eo, {
                key: N.id,
                item: N,
                onCancel: (B) => T(N.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          it(l).length > 0 ? (o(), i("div", fR, [
            s("div", vR, [
              s("span", pR, "Completed (" + m(it(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: U[3] || (U[3] = //@ts-ignore
                (...N) => it(k) && it(k)(...N))
              }, "Clear")
            ]),
            s("div", gR, [
              (o(!0), i(W, null, ye(it(l).slice(0, 3), (N) => (o(), D(eo, {
                key: N.id,
                item: N,
                onRemove: (B) => it(g)(N.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          it(r).length > 0 ? (o(), i("div", hR, [
            s("div", yR, [
              s("span", wR, "Failed (" + m(it(r).length) + ")", 1)
            ]),
            s("div", _R, [
              (o(!0), i(W, null, ye(it(r), (N) => (o(), D(eo, {
                key: N.id,
                item: N,
                onRetry: (B) => it(v)(N.id),
                onRemove: (B) => it(g)(N.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (o(), i("div", XP, [
          s("div", ZP, [
            s("div", {
              class: "progress-fill",
              style: Wt({ width: `${x.value}%` })
            }, null, 4)
          ]),
          it(n) ? (o(), i("div", eR, [
            s("span", tR, m(it(n).filename), 1),
            s("span", sR, m(I(it(n).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), bR = /* @__PURE__ */ Te(kR, [["__scopeId", "data-v-3a3c9607"]]), $R = { class: "detail-header" }, CR = { class: "item-count" }, xR = { class: "resource-list" }, SR = { class: "item-info" }, IR = { class: "item-name" }, ER = {
  key: 0,
  class: "item-subtitle"
}, TR = {
  key: 0,
  class: "installing-badge"
}, MR = ["title"], PR = {
  key: 2,
  class: "installed-badge"
}, RR = {
  key: 3,
  class: "queued-badge"
}, DR = {
  key: 4,
  class: "action-buttons"
}, LR = {
  key: 1,
  class: "no-action"
}, NR = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = M(() => n.items.filter((g) => g.canAction)), r = M(() => l.value.length > 0 && l.value.every(
      (g) => {
        var k, $;
        return n.queuedItems.has(g.id) || ((k = n.installedItems) == null ? void 0 : k.has(g.id)) || (($ = n.failedItems) == null ? void 0 : $.has(g.id));
      }
    )), c = M(() => r.value ? "All Queued" : n.itemType === "models" ? "Download All" : "Install All");
    function u(g) {
      return n.queuedItems.has(g.id);
    }
    function d(g) {
      return n.installingItem === g.id;
    }
    function f(g) {
      var k;
      return ((k = n.installedItems) == null ? void 0 : k.has(g.id)) ?? !1;
    }
    function v(g) {
      var k;
      return ((k = n.failedItems) == null ? void 0 : k.has(g.id)) ?? !1;
    }
    function p(g) {
      var k;
      return ((k = n.failedItems) == null ? void 0 : k.get(g.id)) || "Unknown error";
    }
    function w(g) {
      return g.actions && g.actions.length > 0 ? g.actions : [{
        key: "default",
        label: n.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (g, k) => (o(), D(Lt, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = ($) => a("close"))
    }, {
      body: h(() => [
        s("div", $R, [
          s("span", CR, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (o(), D(Ue, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: k[0] || (k[0] = ($) => a("bulk-action"))
          }, {
            default: h(() => [
              C(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", xR, [
          (o(!0), i(W, null, ye(e.items, ($) => (o(), i("div", {
            key: $.id,
            class: "resource-item"
          }, [
            s("div", SR, [
              s("span", IR, m($.name), 1),
              $.subtitle ? (o(), i("span", ER, m($.subtitle), 1)) : y("", !0)
            ]),
            $.canAction ? (o(), i(W, { key: 0 }, [
              d($) ? (o(), i("span", TR, "Installing...")) : v($) ? (o(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p($)
              }, "Failed ⚠", 8, MR)) : f($) ? (o(), i("span", PR, "Installed")) : u($) ? (o(), i("span", RR, "Queued")) : (o(), i("div", DR, [
                (o(!0), i(W, null, ye(w($), (S) => (o(), D(Ue, {
                  key: `${$.id}-${S.key}`,
                  size: "sm",
                  variant: S.variant || "secondary",
                  onClick: (x) => a("action", $, S.key)
                }, {
                  default: h(() => [
                    C(m(S.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (o(), i("span", LR, m($.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: k[1] || (k[1] = ($) => a("close"))
        }, {
          default: h(() => [...k[3] || (k[3] = [
            C("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), UR = /* @__PURE__ */ Te(NR, [["__scopeId", "data-v-ec7e9202"]]), OR = {
  key: 0,
  class: "loading-state"
}, AR = {
  key: 1,
  class: "analysis-results"
}, zR = {
  key: 0,
  class: "section"
}, FR = { class: "section-header" }, BR = { class: "section-title" }, VR = { class: "item-list" }, WR = { class: "package-info" }, GR = { class: "package-name" }, jR = { class: "node-count" }, HR = {
  key: 1,
  class: "installing-badge"
}, qR = {
  key: 2,
  class: "queued-badge"
}, KR = ["title"], JR = {
  key: 5,
  class: "installed-badge"
}, QR = {
  key: 1,
  class: "section"
}, YR = { class: "section-header" }, XR = { class: "section-title" }, ZR = { class: "item-list" }, e7 = { class: "node-type" }, t7 = {
  key: 0,
  class: "overflow-note"
}, s7 = {
  key: 2,
  class: "section"
}, n7 = { class: "section-header" }, o7 = { class: "section-title" }, a7 = { class: "item-list" }, l7 = { class: "node-type" }, i7 = { class: "not-found" }, r7 = {
  key: 0,
  class: "overflow-note"
}, c7 = {
  key: 3,
  class: "section"
}, u7 = { class: "section-header" }, d7 = { class: "section-title" }, m7 = { class: "item-list" }, f7 = { class: "package-info community-info" }, v7 = { class: "community-title-row" }, p7 = { class: "package-name" }, g7 = { class: "node-count" }, h7 = { class: "community-mapping-note" }, y7 = { key: 0 }, w7 = {
  key: 0,
  class: "community-actions"
}, _7 = {
  key: 1,
  class: "installing-badge"
}, k7 = {
  key: 2,
  class: "queued-badge"
}, b7 = ["title"], $7 = {
  key: 5,
  class: "installed-badge"
}, C7 = ["title"], x7 = {
  key: 1,
  class: "no-url"
}, S7 = {
  key: 4,
  class: "section"
}, I7 = { class: "section-header" }, E7 = { class: "section-title" }, T7 = { class: "item-list" }, M7 = { class: "model-info" }, P7 = { class: "model-name" }, R7 = {
  key: 1,
  class: "queued-badge"
}, D7 = {
  key: 1,
  class: "no-url"
}, L7 = { class: "dont-show-again" }, N7 = 3e4, U7 = /* @__PURE__ */ Se({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = _(!1), n = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Map()), f = _(/* @__PURE__ */ new Set()), v = _(!1), p = _(null), w = _(0), g = _(null), k = _(!1), $ = _(!1), S = _(!1), x = _(null), T = _(null), I = _(null), P = _(/* @__PURE__ */ new Set()), U = _(/* @__PURE__ */ new Map()), N = _(/* @__PURE__ */ new Map()), { addToQueue: B } = Kn(), {
      queueNodeInstall: R,
      previewNodeDependencyChanges: O,
      applyReviewedNodeDependencyChanges: K
    } = ft(), ae = M(() => {
      var q;
      return ((q = a.value) == null ? void 0 : q.package_aliases) || {};
    });
    function j(q) {
      if (!q) return null;
      const ve = ae.value;
      let ze = q;
      const $e = /* @__PURE__ */ new Set();
      for (; ve[ze] && !$e.has(ze); )
        $e.add(ze), ze = ve[ze];
      return ze;
    }
    function de(q, ve) {
      return q instanceof Error && q.message ? q.message : typeof q == "string" && q.trim().length > 0 ? q : ve;
    }
    function le(q) {
      for (const [ve, ze] of U.value.entries())
        ze === q && U.value.delete(ve);
    }
    function H(q, ve, ze) {
      var $e, Ge;
      u.value.delete(q), c.value.delete(q), d.value.set(q, ve), console.warn("[ComfyGit] Package requires dependency review:", {
        packageId: q,
        reason: (($e = ze == null ? void 0 : ze.dependency_review) == null ? void 0 : $e.reason) || ((Ge = ze == null ? void 0 : ze.messages) == null ? void 0 : Ge[0])
      });
    }
    async function F(q) {
      const ve = d.value.get(q);
      if (!(!ve || he.value)) {
        k.value = !0, $.value = !0, S.value = !1, x.value = null, T.value = null, I.value = q;
        try {
          const ze = await O(ve);
          T.value = ze.preview, ze.preview.success || (x.value = ze.preview.error || "Unable to generate dependency preview");
        } catch (ze) {
          x.value = de(ze, "Unable to generate dependency preview");
        } finally {
          $.value = !1;
        }
      }
    }
    async function Y() {
      const q = I.value, ve = T.value, ze = q ? d.value.get(q) : null;
      if (!(!q || !ve || !ze || S.value)) {
        S.value = !0, x.value = null;
        try {
          const $e = await K({
            ...ze,
            accepted_preview: {
              baseline_fingerprint: ve.baseline_fingerprint,
              diff_fingerprint: ve.diff_fingerprint,
              proposed_fingerprint: ve.proposed_fingerprint
            }
          });
          if ($e.status !== "success")
            throw new Error($e.error || $e.message || "Unable to apply dependency changes");
          d.value.delete(q), u.value.delete(q), c.value.delete(q), r.value.add(q), w.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: 1 }
          })), J();
        } catch ($e) {
          x.value = de($e, "Unable to apply dependency changes");
        } finally {
          S.value = !1;
        }
      }
    }
    function J() {
      k.value = !1, $.value = !1, S.value = !1, x.value = null, T.value = null, I.value = null;
    }
    function ne(q) {
      if (!N.value.has(q)) return;
      const ve = N.value.get(q);
      clearTimeout(ve), N.value.delete(q);
    }
    function me() {
      for (const q of N.value.values())
        clearTimeout(q);
      N.value = /* @__PURE__ */ new Map();
    }
    function Z(q) {
      ne(q);
      const ve = setTimeout(() => {
        if (N.value.delete(q), !c.value.has(q)) return;
        le(q), c.value.delete(q), p.value === q && (p.value = null), u.value.set(q, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", q);
      }, N7);
      N.value.set(q, ve);
    }
    function re(q) {
      const ve = `Cannot install "${q.title}" - package_id is missing`;
      u.value.set(q.item_id, ve), n.value = ve, console.warn("[ComfyGit] Community install requested without package_id:", q);
    }
    const Q = M(() => we.value.length > 0 || Le.value.length > 0 || ke.value.length > 0 || Pe.value.length > 0 || Ce.value.length > 0), he = M(() => U.value.size > 0 || c.value.size > 0 || !!p.value), we = M(() => {
      var ze, $e;
      if (!((ze = a.value) != null && ze.nodes)) return [];
      const q = /* @__PURE__ */ new Map(), ve = (a.value.nodes.resolved || []).filter((Ge) => {
        var et;
        return !Ge.is_installed && ((et = Ge.package) == null ? void 0 : et.package_id);
      });
      for (const Ge of ve) {
        const et = j(Ge.package.package_id);
        if (!et) continue;
        q.has(et) || q.set(et, {
          package_id: et,
          title: Ge.package.title || et,
          node_count: 0,
          node_types: [],
          repository: Ge.package.repository || null,
          latest_version: Ge.package.latest_version || null
        });
        const ct = q.get(et);
        ct.node_count++, ct.node_types.push((($e = Ge.reference) == null ? void 0 : $e.node_type) || Ge.node_type);
      }
      return Array.from(q.values());
    }), Fe = M(() => we.value.reduce((q, ve) => q + ve.node_count, 0)), Le = M(() => {
      var q;
      return (q = a.value) != null && q.nodes ? (a.value.nodes.unresolved || []).map((ve) => {
        var ze;
        return {
          node_type: ((ze = ve.reference) == null ? void 0 : ze.node_type) || ve.node_type
        };
      }) : [];
    }), ke = M(() => {
      var ve;
      if (!((ve = a.value) != null && ve.nodes)) return [];
      const q = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ze) => {
        var Ge;
        const $e = ((Ge = ze.reference) == null ? void 0 : Ge.node_type) || ze.node_type;
        return {
          node_type: $e,
          guidance: ze.guidance || q[$e] || null
        };
      });
    }), Pe = M(() => {
      var ze, $e, Ge, et, ct, ut, It, Mt;
      if (!((ze = a.value) != null && ze.nodes)) return [];
      const q = a.value.node_guidance || {}, ve = /* @__PURE__ */ new Map();
      for (const yt of a.value.nodes.uninstallable || []) {
        const X = (($e = yt.reference) == null ? void 0 : $e.node_type) || yt.node_type, L = j(((Ge = yt.package) == null ? void 0 : Ge.package_id) || null), ie = L || `node:${X}`;
        ve.has(ie) || ve.set(ie, {
          item_id: ie,
          node_type: X,
          title: ((et = yt.package) == null ? void 0 : et.title) || L || X,
          node_count: 0,
          package_id: L,
          repository: ((ct = yt.package) == null ? void 0 : ct.repository) || null,
          latest_version: ((ut = yt.package) == null ? void 0 : ut.latest_version) || null,
          guidance: yt.guidance || q[X] || null
        });
        const He = ve.get(ie);
        He.node_count++, He.guidance || (He.guidance = yt.guidance || q[X] || null), !He.repository && ((It = yt.package) != null && It.repository) && (He.repository = yt.package.repository), !He.latest_version && ((Mt = yt.package) != null && Mt.latest_version) && (He.latest_version = yt.package.latest_version);
      }
      return Array.from(ve.values());
    }), ge = M(() => Pe.value.filter((q) => !!Ee(q))), be = M(() => Pe.value.length >= 5 ? Pe.value.slice(0, 4) : Pe.value), E = M(() => ge.value.length > 0 && ge.value.every((q) => {
      const ve = q.package_id;
      return r.value.has(ve) || c.value.has(ve) || u.value.has(ve) || d.value.has(ve);
    }));
    function z(q) {
      const ve = [];
      return ue(q) && ve.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), q.repository && ve.push({
        key: "install_git",
        label: "Install via Git",
        variant: ue(q) ? "ghost" : "secondary"
      }), ve;
    }
    function ue(q) {
      return !!q.latest_version;
    }
    function Ee(q) {
      return q.package_id ? ue(q) ? "registry" : q.repository ? "git" : null : null;
    }
    const Ce = M(() => {
      var Ge;
      if (!((Ge = a.value) != null && Ge.models)) return [];
      const q = (a.value.models.resolved || []).filter(
        (et) => et.match_type === "download_intent" || et.match_type === "property_download_intent" || et.match_type === "not_found"
      ).map((et) => {
        var ct, ut, It, Mt;
        return {
          filename: ((ut = (ct = et.reference) == null ? void 0 : ct.widget_value) == null ? void 0 : ut.split("/").pop()) || ((It = et.reference) == null ? void 0 : It.widget_value) || et.widget_value,
          widget_value: ((Mt = et.reference) == null ? void 0 : Mt.widget_value) || et.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: et.download_source || null,
          targetPath: et.target_path || null,
          canDownload: !!(et.download_source && et.target_path)
        };
      }), ve = (a.value.models.unresolved || []).map((et) => {
        var ct, ut, It, Mt;
        return {
          filename: ((ut = (ct = et.reference) == null ? void 0 : ct.widget_value) == null ? void 0 : ut.split("/").pop()) || ((It = et.reference) == null ? void 0 : It.widget_value) || et.widget_value,
          widget_value: ((Mt = et.reference) == null ? void 0 : Mt.widget_value) || et.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ze = /* @__PURE__ */ new Map(), $e = [];
      for (const et of q) {
        if (!et.url) {
          $e.push(et);
          continue;
        }
        const ct = `${et.filename}::${et.url}`, ut = ze.get(ct);
        if (!ut) {
          ze.set(ct, et);
          continue;
        }
        !ut.targetPath && et.targetPath && (ut.targetPath = et.targetPath), !ut.canDownload && et.canDownload && (ut.canDownload = et.canDownload);
      }
      return [...ze.values(), ...$e, ...ve];
    }), Ie = M(() => Ce.value.filter((q) => q.canDownload)), Oe = M(() => we.value.length >= 5 ? we.value.slice(0, 4) : we.value), te = M(() => Ce.value.length >= 5 ? Ce.value.slice(0, 4) : Ce.value), V = M(() => we.value.length > 0 && we.value.every(
      (q) => r.value.has(q.package_id) || c.value.has(q.package_id) || u.value.has(q.package_id) || d.value.has(q.package_id)
    )), fe = M(() => Ie.value.length > 0 && Ie.value.every((q) => f.value.has(q.url))), We = M(() => we.value.length > 0 || ge.value.length > 0 || Ie.value.length > 0), Be = M(() => {
      const q = (we.value.length === 0 || V.value) && (ge.value.length === 0 || E.value), ve = Ie.value.length === 0 || fe.value;
      return q && ve;
    }), _e = M(() => g.value === "models" ? `Missing Models (${Ce.value.length})` : g.value === "packages" ? `Missing Custom Nodes (${Fe.value})` : g.value === "community" ? `Community-Mapped Packages (${Pe.value.length})` : ""), oe = M(() => g.value === "models" ? Ce.value.map((q) => ({
      id: q.url || q.widget_value,
      name: q.filename,
      canAction: q.canDownload,
      actionDisabledReason: q.canDownload ? void 0 : "Manual download required"
    })) : g.value === "packages" ? we.value.map((q) => ({
      id: q.package_id,
      name: q.title,
      subtitle: `(${q.node_count} ${q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : g.value === "community" ? Pe.value.map((q) => ({
      id: q.package_id || q.item_id,
      name: q.title,
      subtitle: `(${q.node_count} ${q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Ee(q),
      actionDisabledReason: Ee(q) ? void 0 : "Manual setup required",
      actions: z(q)
    })) : []);
    function Je(q, ve) {
      if (g.value === "models") {
        const ze = Ce.value.find(($e) => $e.url === q.id || $e.widget_value === q.id);
        ze && qe(ze);
      } else if (g.value === "packages") {
        const ze = we.value.find(($e) => $e.package_id === q.id);
        ze && Xe(ze);
      } else if (g.value === "community") {
        const ze = Pe.value.find((Ge) => (Ge.package_id || Ge.item_id) === q.id);
        if (!ze) return;
        if (!ze.package_id) {
          re({ item_id: ze.item_id, title: ze.title });
          return;
        }
        const $e = ve === "install_git" ? "git" : "registry";
        if ($e === "registry" && !ue(ze)) {
          re({ item_id: ze.item_id, title: ze.title });
          return;
        }
        De(ze, $e);
      }
    }
    function Ne() {
      g.value === "models" ? Gt() : g.value === "packages" ? kt() : g.value === "community" && Ot();
    }
    async function Xe(q) {
      return Ae(q.package_id, q.latest_version, "registry");
    }
    async function De(q, ve) {
      return q.package_id ? ve === "registry" && !ue(q) ? (u.value.set(q.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : ve === "git" && !q.repository ? (u.value.set(q.package_id, "No Git repository is available for this community mapping."), !1) : Ae(q.package_id, q.latest_version, ve, q.repository) : (re({ item_id: q.item_id, title: q.title }), !1);
    }
    async function Ae(q, ve, ze, $e) {
      const Ge = j(q) || q, et = ve || "latest";
      if (r.value.has(Ge) || c.value.has(Ge) || u.value.has(Ge) || d.value.has(Ge))
        return !0;
      Xt(), p.value = Ge;
      let ct = null;
      try {
        const ut = {
          id: Ge,
          version: et,
          selected_version: et,
          mode: "remote",
          channel: "default"
        };
        ze === "git" && $e && (ut.repository = $e, ut.install_source = "git");
        const { ui_id: It, status: Mt } = await R(ut, {
          beforeQueueStart: (yt) => {
            ct = yt, U.value.set(yt, Ge), c.value.add(Ge), Z(Ge), console.log("[ComfyGit] Registered pending install:", {
              ui_id: yt,
              packageId: Ge,
              pendingInstalls: Array.from(U.value.entries())
            });
          }
        });
        return (Mt == null ? void 0 : Mt.status_str) === "dependency_review_required" ? (ct && U.value.delete(ct), le(Ge), ne(Ge), p.value === Ge && (p.value = null), H(Ge, ut, Mt), !1) : (ct || (ct = It, U.value.set(It, Ge), c.value.add(Ge), Z(Ge), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: It,
          packageId: Ge,
          pendingInstalls: Array.from(U.value.entries())
        })), !0);
      } catch (ut) {
        const It = de(ut, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", ut), ct && U.value.delete(ct), le(Ge), ne(Ge), c.value.delete(Ge), d.value.delete(Ge), u.value.set(Ge, It), !1;
      } finally {
        p.value = null;
      }
    }
    function qe(q) {
      !q.url || !q.targetPath || f.value.has(q.url) || (B([{
        workflow: "unsaved",
        filename: q.filename,
        url: q.url,
        targetPath: q.targetPath
      }]), f.value.add(q.url));
    }
    async function kt() {
      const q = { attempted: 0, failed: 0 };
      for (const ve of we.value)
        !r.value.has(ve.package_id) && !c.value.has(ve.package_id) && !u.value.has(ve.package_id) && !d.value.has(ve.package_id) && (q.attempted++, await Xe(ve) || q.failed++);
      return q;
    }
    async function Ot() {
      const q = { attempted: 0, failed: 0 };
      for (const ve of ge.value) {
        const ze = ve.package_id;
        if (!r.value.has(ze) && !c.value.has(ze) && !u.value.has(ze) && !d.value.has(ze)) {
          q.attempted++;
          const $e = Ee(ve);
          ($e ? await De(ve, $e) : !1) || q.failed++;
        }
      }
      return q;
    }
    function Gt() {
      const q = Ie.value.filter(
        (ve) => !f.value.has(ve.url)
      );
      if (q.length === 0) return 0;
      B(q.map((ve) => ({
        workflow: "unsaved",
        filename: ve.filename,
        url: ve.url,
        targetPath: ve.targetPath
      })));
      for (const ve of q)
        f.value.add(ve.url);
      return q.length;
    }
    async function ee() {
      const q = await kt(), ve = await Ot();
      Gt();
      const ze = q.attempted + ve.attempted, $e = q.failed + ve.failed;
      if (ze > 0 && $e > 0) {
        const Ge = ze - $e;
        n.value = `${Ge} of ${ze} installs queued, ${$e} failed`;
      }
    }
    function se() {
      if (Be.value) {
        Re();
        return;
      }
      ee();
    }
    function pe() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Qe(q) {
      var Ge, et;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ve = q == null ? void 0 : q.id;
      if (ve && P.value.has(ve)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ve} this session`);
        return;
      }
      const ze = window.app, $e = (Ge = ze == null ? void 0 : ze.extensionManager) == null ? void 0 : Ge.workflow;
      if ($e) {
        let It = !1;
        for (let Mt = 0; Mt < 20; Mt++) {
          const yt = $e.activeWorkflow;
          if (!yt) {
            await new Promise((ie) => setTimeout(ie, 50));
            continue;
          }
          const X = (et = yt.activeState) == null ? void 0 : et.id;
          if (!(ve && X === ve)) {
            Mt < 19 && await new Promise((ie) => setTimeout(ie, 50));
            continue;
          }
          if (It = !0, yt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${yt.filename}`), ve && P.value.add(ve);
            return;
          }
          break;
        }
        It || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, n.value = null, me(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Map(), f.value = /* @__PURE__ */ new Set(), U.value = /* @__PURE__ */ new Map(), v.value = !1, w.value = 0;
      try {
        const ct = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: q, name: "unsaved" })
        });
        if (!ct.ok) {
          const ut = await ct.json();
          throw new Error(ut.error || "Failed to analyze workflow");
        }
        a.value = await ct.json(), Q.value && (l.value = !0, ve && P.value.add(ve));
      } catch (ct) {
        console.error("[ComfyGit] Failed to analyze workflow:", ct);
      } finally {
        t.value = !1;
      }
    }
    function Re() {
      me(), l.value = !1, a.value = null;
    }
    function lt(q) {
      const { workflow: ve } = q.detail;
      ve && Qe(ve);
    }
    function st(q) {
      var $e;
      const ve = ($e = q.detail) == null ? void 0 : $e.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ve,
        pendingInstalls: Array.from(U.value.entries()),
        eventDetail: q.detail
      });
      const ze = U.value.get(ve);
      ze ? (ne(ze), p.value = ze, console.log("[ComfyGit] Installing package:", ze)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ve);
    }
    function pt(q) {
      var Ge, et, ct, ut, It, Mt, yt, X, L, ie, He;
      const ve = (Ge = q.detail) == null ? void 0 : Ge.ui_id, ze = (ct = (et = q.detail) == null ? void 0 : et.status) == null ? void 0 : ct.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ve,
        status: ze,
        pendingInstalls: Array.from(U.value.entries()),
        eventDetail: q.detail
      });
      const $e = U.value.get(ve);
      if ($e) {
        if (ne($e), U.value.delete(ve), c.value.delete($e), p.value === $e && (p.value = null), ze === "success")
          r.value.add($e), w.value++, console.log("[ComfyGit] Package installed successfully:", $e);
        else if (ze === "dependency_review_required") {
          const Ze = ((It = (ut = q.detail) == null ? void 0 : ut.task) == null ? void 0 : It.params) || ((Mt = q.detail) == null ? void 0 : Mt.params);
          Ze != null && Ze.id ? H($e, Ze, (yt = q.detail) == null ? void 0 : yt.status) : u.value.set($e, "Dependency review required");
        } else {
          const Ze = ((ie = (L = (X = q.detail) == null ? void 0 : X.status) == null ? void 0 : L.messages) == null ? void 0 : ie[0]) || ((He = q.detail) == null ? void 0 : He.result) || "Unknown error";
          u.value.set($e, Ze), console.error("[ComfyGit] Package install failed:", $e, Ze);
        }
        U.value.size === 0 && w.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", w.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: w.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ve);
    }
    let St = null;
    function Ye() {
      return St || (St = qn()), St;
    }
    let bt = !1;
    function Xt() {
      if (bt) return !0;
      const q = Ye();
      return q ? (q.addEventListener("cm-task-started", st), q.addEventListener("cm-task-completed", pt), q.addEventListener("comfygit:workflow-changed", us), bt = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function us(q) {
      const { change_type: ve } = q.detail;
      (ve === "created" || ve === "modified") && l.value && (me(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return mt(() => {
      window.addEventListener("comfygit:workflow-loaded", lt);
    }), jn(() => {
      if (me(), window.removeEventListener("comfygit:workflow-loaded", lt), bt) {
        const q = Ye();
        q && (q.removeEventListener("cm-task-started", st), q.removeEventListener("cm-task-completed", pt), q.removeEventListener("comfygit:workflow-changed", us)), bt = !1;
      }
    }), (q, ve) => {
      var ze;
      return o(), i(W, null, [
        l.value ? (o(), D(Lt, {
          key: 0,
          title: "Missing Dependencies",
          size: "md",
          loading: t.value,
          error: n.value || void 0,
          onClose: Re
        }, {
          body: h(() => [
            t.value ? (o(), i("div", OR, [...ve[5] || (ve[5] = [
              s("div", { class: "loading-spinner" }, null, -1),
              s("span", null, "Analyzing workflow...", -1)
            ])])) : a.value && Q.value ? (o(), i("div", AR, [
              we.value.length > 0 ? (o(), i("div", zR, [
                s("div", FR, [
                  s("span", BR, "Missing Custom Nodes (" + m(Fe.value) + ")", 1),
                  we.value.length > 1 ? (o(), D(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: V.value,
                    onClick: kt
                  }, {
                    default: h(() => [
                      C(m(V.value ? "All Done" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", VR, [
                  (o(!0), i(W, null, ye(Oe.value, ($e) => (o(), i("div", {
                    key: $e.package_id,
                    class: "package-item"
                  }, [
                    s("div", WR, [
                      s("span", GR, m($e.title), 1),
                      s("span", jR, "(" + m($e.node_count) + " " + m($e.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    !r.value.has($e.package_id) && !c.value.has($e.package_id) && !u.value.has($e.package_id) && !d.value.has($e.package_id) ? (o(), D(Ue, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      disabled: p.value === $e.package_id,
                      onClick: (Ge) => Xe($e)
                    }, {
                      default: h(() => [
                        C(m(p.value === $e.package_id ? "Queueing..." : "Install"), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "onClick"])) : p.value === $e.package_id ? (o(), i("span", HR, "Installing...")) : c.value.has($e.package_id) ? (o(), i("span", qR, "Queued")) : u.value.has($e.package_id) ? (o(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get($e.package_id)
                    }, "Failed ⚠", 8, KR)) : d.value.has($e.package_id) ? (o(), D(Ue, {
                      key: 4,
                      size: "sm",
                      variant: "secondary",
                      disabled: he.value,
                      onClick: (Ge) => F($e.package_id)
                    }, {
                      default: h(() => [...ve[6] || (ve[6] = [
                        C(" Needs Review ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : (o(), i("span", JR, "Installed"))
                  ]))), 128)),
                  we.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: ve[0] || (ve[0] = ($e) => g.value = "packages")
                  }, [
                    s("span", null, "Show all " + m(we.value.length) + " packages...", 1),
                    ve[7] || (ve[7] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Le.value.length > 0 ? (o(), i("div", QR, [
                s("div", YR, [
                  s("span", XR, "Unknown Nodes (" + m(Le.value.length) + ")", 1)
                ]),
                s("div", ZR, [
                  (o(!0), i(W, null, ye(Le.value.slice(0, 5), ($e) => (o(), i("div", {
                    key: $e.node_type,
                    class: "item"
                  }, [
                    s("code", e7, m($e.node_type), 1),
                    ve[8] || (ve[8] = s("span", { class: "not-found" }, "Not found in registry", -1))
                  ]))), 128)),
                  Le.value.length > 5 ? (o(), i("div", t7, " ...and " + m(Le.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              ke.value.length > 0 ? (o(), i("div", s7, [
                s("div", n7, [
                  s("span", o7, "Requires Newer ComfyUI (" + m(ke.value.length) + ")", 1)
                ]),
                s("div", a7, [
                  (o(!0), i(W, null, ye(ke.value.slice(0, 5), ($e) => (o(), i("div", {
                    key: `vg-${$e.node_type}`,
                    class: "item"
                  }, [
                    s("code", l7, m($e.node_type), 1),
                    s("span", i7, m($e.guidance || "Requires a newer ComfyUI version"), 1)
                  ]))), 128)),
                  ke.value.length > 5 ? (o(), i("div", r7, " ...and " + m(ke.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              Pe.value.length > 0 ? (o(), i("div", c7, [
                s("div", u7, [
                  s("span", d7, "Community-Mapped Packages (" + m(Pe.value.length) + ")", 1),
                  ge.value.length > 1 ? (o(), D(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: E.value,
                    onClick: Ot
                  }, {
                    default: h(() => [
                      C(m(E.value ? "All Done" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", m7, [
                  (o(!0), i(W, null, ye(be.value, ($e) => (o(), i("div", {
                    key: `community-${$e.item_id}`,
                    class: "package-item"
                  }, [
                    s("div", f7, [
                      s("div", v7, [
                        s("span", p7, m($e.title), 1),
                        s("span", g7, "(" + m($e.node_count) + " " + m($e.node_count === 1 ? "node" : "nodes") + ")", 1)
                      ]),
                      s("div", h7, [
                        ve[9] || (ve[9] = C(" Found via community mapping — registry metadata may be incomplete", -1)),
                        $e.guidance ? (o(), i("span", y7, ". " + m($e.guidance), 1)) : y("", !0)
                      ])
                    ]),
                    $e.package_id ? (o(), i(W, { key: 0 }, [
                      !r.value.has($e.package_id) && !c.value.has($e.package_id) && !u.value.has($e.package_id) && !d.value.has($e.package_id) ? (o(), i("div", w7, [
                        ue($e) ? (o(), D(Ue, {
                          key: 0,
                          size: "sm",
                          variant: "secondary",
                          disabled: p.value === $e.package_id,
                          onClick: (Ge) => De($e, "registry")
                        }, {
                          default: h(() => [
                            C(m(p.value === $e.package_id ? "Queueing..." : "Install from Registry"), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])) : y("", !0),
                        $e.repository ? (o(), D(Ue, {
                          key: 1,
                          size: "sm",
                          variant: ue($e) ? "ghost" : "secondary",
                          disabled: p.value === $e.package_id,
                          onClick: (Ge) => De($e, "git")
                        }, {
                          default: h(() => [...ve[10] || (ve[10] = [
                            C(" Install via Git ", -1)
                          ])]),
                          _: 1
                        }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                      ])) : p.value === $e.package_id ? (o(), i("span", _7, "Installing...")) : c.value.has($e.package_id) ? (o(), i("span", k7, "Queued")) : u.value.has($e.package_id) ? (o(), i("span", {
                        key: 3,
                        class: "failed-badge",
                        title: u.value.get($e.package_id)
                      }, "Failed ⚠", 8, b7)) : d.value.has($e.package_id) ? (o(), D(Ue, {
                        key: 4,
                        size: "sm",
                        variant: "secondary",
                        disabled: he.value,
                        onClick: (Ge) => F($e.package_id)
                      }, {
                        default: h(() => [...ve[11] || (ve[11] = [
                          C(" Needs Review ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : (o(), i("span", $7, "Installed"))
                    ], 64)) : (o(), i(W, { key: 1 }, [
                      u.value.has($e.item_id) ? (o(), i("span", {
                        key: 0,
                        class: "failed-badge",
                        title: u.value.get($e.item_id)
                      }, "Failed ⚠", 8, C7)) : (o(), i("span", x7, "Manual setup required"))
                    ], 64))
                  ]))), 128)),
                  Pe.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: ve[1] || (ve[1] = ($e) => g.value = "community")
                  }, [
                    s("span", null, "Show all " + m(Pe.value.length) + " packages...", 1),
                    ve[12] || (ve[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Ce.value.length > 0 ? (o(), i("div", S7, [
                s("div", I7, [
                  s("span", E7, "Missing Models (" + m(Ce.value.length) + ")", 1),
                  Ie.value.length > 1 ? (o(), D(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: fe.value,
                    onClick: Gt
                  }, {
                    default: h(() => [
                      C(m(fe.value ? "All Queued" : "Download All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", T7, [
                  (o(!0), i(W, null, ye(te.value, ($e) => (o(), i("div", {
                    key: $e.widget_value,
                    class: "model-item"
                  }, [
                    s("div", M7, [
                      s("span", P7, m($e.filename), 1)
                    ]),
                    $e.canDownload ? (o(), i(W, { key: 0 }, [
                      f.value.has($e.url) ? (o(), i("span", R7, "Queued")) : (o(), D(Ue, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        onClick: (Ge) => qe($e)
                      }, {
                        default: h(() => [...ve[13] || (ve[13] = [
                          C(" Download ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]))
                    ], 64)) : (o(), i("span", D7, "Manual download required"))
                  ]))), 128)),
                  Ce.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: ve[2] || (ve[2] = ($e) => g.value = "models")
                  }, [
                    s("span", null, "Show all " + m(Ce.value.length) + " models...", 1),
                    ve[14] || (ve[14] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              s("div", L7, [
                b(ca, {
                  modelValue: v.value,
                  "onUpdate:modelValue": [
                    ve[3] || (ve[3] = ($e) => v.value = $e),
                    pe
                  ]
                }, {
                  default: h(() => [...ve[15] || (ve[15] = [
                    C(" Don't show this popup ", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])) : y("", !0)
          ]),
          footer: h(() => [
            b(Ue, {
              variant: "secondary",
              onClick: Re
            }, {
              default: h(() => [...ve[16] || (ve[16] = [
                C("Dismiss", -1)
              ])]),
              _: 1
            }),
            We.value ? (o(), D(Ue, {
              key: 0,
              variant: "primary",
              onClick: se
            }, {
              default: h(() => [
                C(m(Be.value ? "All Done" : "Download All"), 1)
              ]),
              _: 1
            })) : y("", !0)
          ]),
          _: 1
        }, 8, ["loading", "error"])) : y("", !0),
        g.value ? (o(), D(UR, {
          key: 1,
          title: _e.value,
          items: oe.value,
          "item-type": g.value,
          "queued-items": g.value === "models" ? f.value : c.value,
          "installed-items": g.value === "models" ? void 0 : r.value,
          "failed-items": g.value === "models" ? void 0 : u.value,
          "installing-item": g.value === "models" ? void 0 : p.value,
          onClose: ve[4] || (ve[4] = ($e) => g.value = null),
          onAction: Je,
          onBulkAction: Ne
        }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0),
        k.value ? (o(), D(wc, {
          key: 2,
          loading: $.value,
          error: x.value,
          preview: T.value,
          "can-apply": !!(I.value && ((ze = T.value) != null && ze.success)),
          applying: S.value,
          onClose: J,
          onApply: Y
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ], 64);
    };
  }
}), O7 = /* @__PURE__ */ Te(U7, [["__scopeId", "data-v-f0b1aac5"]]), A7 = {
  key: 0,
  class: "io-mapping-root"
}, z7 = { class: "io-mapping-visual-layer" }, F7 = { class: "io-mapping-header" }, B7 = { class: "io-mapping-header-main" }, V7 = { class: "io-mapping-subtitle" }, W7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, G7 = { class: "io-mapping-header-actions" }, j7 = { class: "io-mapping-sidebar" }, H7 = { class: "io-mapping-sidebar-scroll" }, q7 = {
  key: 0,
  class: "io-state-block"
}, K7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, J7 = { class: "contract-meta-section" }, Q7 = { class: "contract-meta-toggle-icon" }, Y7 = {
  key: 0,
  class: "contract-meta-body"
}, X7 = { class: "contract-summary" }, Z7 = { class: "summary-pill" }, eD = { class: "summary-pill" }, tD = { class: "summary-pill" }, sD = { class: "mapping-section" }, nD = { class: "section-header" }, oD = {
  key: 0,
  class: "empty-message"
}, aD = ["onClick"], lD = { class: "item-card-title" }, iD = { class: "item-card-meta" }, rD = { class: "item-card-summary" }, cD = { key: 0 }, uD = { class: "mapping-section" }, dD = { class: "section-header" }, mD = {
  key: 0,
  class: "empty-message"
}, fD = ["onClick"], vD = { class: "item-card-title" }, pD = { class: "item-card-meta" }, gD = { class: "item-card-summary" }, hD = { class: "io-mapping-footer" }, yD = { class: "io-mapping-footer-left" }, wD = { class: "io-mapping-footer-right" }, _D = /* @__PURE__ */ Se({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: n, saveWorkflowContract: a, deleteWorkflowContract: l } = ft(), r = _(!1), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = _(null), x = _(0), T = _(null), I = _(null);
    let P = null;
    const U = [
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
    ], B = M(() => {
      var ee;
      return ((ee = p.value) == null ? void 0 : ee.contract_summary.has_contract) === !0;
    }), R = M(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const ee = w.value.default_contract || "default";
      return w.value.contracts[ee] || (w.value.contracts[ee] = { inputs: [], outputs: [] }), w.value.contracts[ee];
    }), O = M(() => {
      var se;
      const ee = ((se = p.value) == null ? void 0 : se.contract_summary.status) ?? "none";
      return ee === "valid" ? "Valid Contract" : ee === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function K(ee) {
      return ee ? JSON.parse(JSON.stringify(ee)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ae(ee) {
      return ee === "integer" || ee === "number";
    }
    function j(ee) {
      return ee === "enum";
    }
    function de(ee) {
      return ee == null ? "" : String(ee);
    }
    function le(ee) {
      const se = ee.trim();
      if (!se) return;
      const pe = Number(se);
      return Number.isFinite(pe) ? pe : void 0;
    }
    function H(ee) {
      return (ee || []).join(`
`);
    }
    function F(ee) {
      return ee.split(/[\n,]/).map((se) => se.trim()).filter(Boolean);
    }
    function Y(ee) {
      return typeof ee == "string" ? ee.length > 24 ? `${ee.slice(0, 24)}...` : ee : String(ee);
    }
    function J(ee) {
      return ee == null ? "" : String(ee);
    }
    function ne(ee) {
      var pe;
      const se = (pe = ee == null ? void 0 : ee.options) == null ? void 0 : pe.values;
      return Array.isArray(se) ? se.map((Qe) => String(Qe)).filter(Boolean) : [];
    }
    function me(ee, se) {
      var Re;
      const pe = (Re = ee == null ? void 0 : ee.options) == null ? void 0 : Re[se];
      if (pe == null || pe === "") return;
      const Qe = Number(pe);
      return Number.isFinite(Qe) ? Qe : void 0;
    }
    function Z(ee, se) {
      return ee.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || se;
    }
    function re(ee) {
      if (!w.value) return;
      const se = ee.trim() || "default";
      w.value.default_contract = se, w.value.contracts[se] || (w.value.contracts[se] = { inputs: [], outputs: [] });
    }
    function Q(ee) {
      const se = String(ee ?? "").toLowerCase();
      return se.includes("image") ? "image" : se.includes("video") ? "video" : se.includes("audio") ? "audio" : se.includes("int") ? "integer" : se.includes("float") || se.includes("double") || se.includes("number") ? "number" : se.includes("bool") ? "boolean" : se.includes("combo") || se.includes("enum") ? "enum" : se.includes("string") || se.includes("text") ? "string" : "file";
    }
    function he(ee) {
      R.value.inputs.splice(ee, 1), $.value === ee && ($.value = null);
    }
    function we(ee) {
      R.value.outputs.splice(ee, 1), S.value === ee && (S.value = null);
    }
    function Fe(ee) {
      $.value = $.value === ee ? null : ee, $.value != null && (S.value = null);
    }
    function Le(ee) {
      S.value = S.value === ee ? null : ee, S.value != null && ($.value = null);
    }
    function ke(ee) {
      const se = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(ee)) : String(ee);
      return document.querySelector(`[data-node-id="${se}"]`);
    }
    function Pe(ee) {
      return ee instanceof Element ? !!ee.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ge(ee) {
      var Qe, Re, lt, st, pt, St;
      if (!(ee instanceof Element)) return null;
      const se = ee.closest("[data-node-id]"), pe = se == null ? void 0 : se.getAttribute("data-node-id");
      return pe ? ((lt = (Re = (Qe = t.comfyApp) == null ? void 0 : Qe.graph) == null ? void 0 : Re.getNodeById) == null ? void 0 : lt.call(Re, pe)) ?? ((St = (pt = (st = t.comfyApp) == null ? void 0 : st.rootGraph) == null ? void 0 : pt.getNodeById) == null ? void 0 : St.call(pt, pe)) ?? null : null;
    }
    function be(ee, se) {
      if (se == null || se < 0) return null;
      const pe = ke(ee);
      return pe ? pe.querySelectorAll('[data-testid="node-widget"]')[se] ?? null : null;
    }
    function E(ee) {
      return !ee || ee.width <= 0 || ee.height <= 0 ? null : {
        left: `${ee.left}px`,
        top: `${ee.top}px`,
        width: `${ee.width}px`,
        height: `${ee.height}px`
      };
    }
    function z(ee) {
      const se = ke((ee == null ? void 0 : ee.id) ?? "");
      if (se) return se.getBoundingClientRect();
      const pe = t.comfyApp;
      if (!ee || typeof (pe == null ? void 0 : pe.canvasPosToClientPos) != "function") return null;
      const Re = pe.canvasPosToClientPos([ee.pos[0], ee.pos[1] - 32]), lt = pe.canvasPosToClientPos([ee.pos[0] + ee.size[0], ee.pos[1] + ee.size[1]]);
      return !Re || !lt ? null : new DOMRect(Re[0], Re[1], lt[0] - Re[0], lt[1] - Re[1]);
    }
    function ue(ee) {
      var pt, St, Ye, bt, Xt, us, q;
      const se = be(ee.node_id, ee.widget_idx);
      if (se) return se.getBoundingClientRect();
      const pe = ((Ye = (St = (pt = t.comfyApp) == null ? void 0 : pt.graph) == null ? void 0 : St.getNodeById) == null ? void 0 : Ye.call(St, String(ee.node_id))) ?? ((us = (Xt = (bt = t.comfyApp) == null ? void 0 : bt.rootGraph) == null ? void 0 : Xt.getNodeById) == null ? void 0 : us.call(Xt, String(ee.node_id)));
      if (!pe || typeof ee.widget_idx != "number" || !Array.isArray(pe.widgets)) return null;
      const Qe = pe.widgets[ee.widget_idx];
      if (!Qe || typeof ((q = t.comfyApp) == null ? void 0 : q.canvasPosToClientPos) != "function") return z(pe);
      const Re = 10, lt = t.comfyApp.canvasPosToClientPos([pe.pos[0] + Re, pe.pos[1] + (Qe.y ?? 0)]), st = t.comfyApp.canvasPosToClientPos([pe.pos[0] + pe.size[0] - Re, pe.pos[1] + (Qe.y ?? 0) + (Qe.computedHeight ?? 24)]);
      return !lt || !st ? z(pe) : new DOMRect(lt[0], lt[1], st[0] - lt[0], st[1] - lt[1]);
    }
    function Ee(ee) {
      var pe, Qe, Re, lt, st, pt;
      const se = ((Re = (Qe = (pe = t.comfyApp) == null ? void 0 : pe.graph) == null ? void 0 : Qe.getNodeById) == null ? void 0 : Re.call(Qe, String(ee.node_id))) ?? ((pt = (st = (lt = t.comfyApp) == null ? void 0 : lt.rootGraph) == null ? void 0 : st.getNodeById) == null ? void 0 : pt.call(st, String(ee.node_id)));
      return z(se);
    }
    const Ce = M(() => (x.value, R.value.inputs.map((ee, se) => {
      const pe = E(ue(ee));
      return pe ? {
        key: `input-${se}-${ee.node_id}-${ee.widget_idx ?? "na"}`,
        style: pe,
        active: $.value === se
      } : null;
    }).filter((ee) => !!ee))), Ie = M(() => (x.value, R.value.outputs.map((ee, se) => {
      const pe = E(Ee(ee));
      return pe ? {
        key: `output-${se}-${ee.node_id}-${ee.selector ?? "primary"}`,
        style: pe,
        active: S.value === se
      } : null;
    }).filter((ee) => !!ee)));
    function Oe(ee) {
      var Ye, bt, Xt, us, q, ve, ze, $e, Ge, et;
      if (Pe(ee.target)) return null;
      const se = (Ye = t.comfyApp) == null ? void 0 : Ye.canvas;
      if (!se) return null;
      const pe = (bt = se.convertEventToCanvasOffset) == null ? void 0 : bt.call(se, ee);
      if (!pe || pe.length < 2) return null;
      const [Qe, Re] = pe, lt = se.graph || ((Xt = t.comfyApp) == null ? void 0 : Xt.graph) || ((us = t.comfyApp) == null ? void 0 : us.rootGraph), st = ((q = lt == null ? void 0 : lt.getNodeOnPos) == null ? void 0 : q.call(lt, Qe, Re, se.visible_nodes)) || ((ve = se.getNodeOnPos) == null ? void 0 : ve.call(se, Qe, Re)) || ge(ee.target);
      if (!st) return null;
      const pt = (ze = st.getWidgetOnPos) == null ? void 0 : ze.call(st, Qe, Re, !0);
      if (pt)
        return { kind: "input", node: st, widget: pt, canvasX: Qe, canvasY: Re };
      const St = (($e = st.getOutputOnPos) == null ? void 0 : $e.call(st, [Qe, Re])) || ((et = (Ge = st.constructor) == null ? void 0 : Ge.nodeData) != null && et.output_node ? { name: st.title || st.type || "output", type: "image" } : null);
      return St ? { kind: "output", node: st, output: St, canvasX: Qe, canvasY: Re } : null;
    }
    function te(ee, se) {
      var pt;
      const pe = Array.isArray(ee.widgets) ? ee.widgets.indexOf(se) : -1, Qe = R.value.inputs.findIndex(
        (St) => String(St.node_id) === String(ee.id) && St.widget_idx === pe
      );
      if (Qe >= 0) {
        $.value = Qe;
        return;
      }
      const Re = typeof ((pt = se == null ? void 0 : se.options) == null ? void 0 : pt.property) == "string" ? se.options.property : void 0, lt = (se == null ? void 0 : se.name) || Re || "input", st = {
        name: Z(String(lt), `input_${R.value.inputs.length + 1}`),
        display_name: String((se == null ? void 0 : se.name) || Re || `Input ${R.value.inputs.length + 1}`),
        type: Q(se == null ? void 0 : se.type),
        node_id: String(ee.id),
        widget_idx: pe >= 0 ? pe : void 0,
        field_key: Re,
        required: !0,
        default: (se == null ? void 0 : se.value) ?? ""
      };
      ae(st.type) && (st.min = me(se, "min"), st.max = me(se, "max")), j(st.type) && (st.enum_values = ne(se)), R.value.inputs.push(st), $.value = R.value.inputs.length - 1, S.value = null;
    }
    function V(ee, se) {
      const pe = Array.isArray(ee.outputs) ? ee.outputs.indexOf(se) : -1, Qe = pe >= 0 ? `slot:${pe}` : "primary", Re = R.value.outputs.findIndex(
        (st) => String(st.node_id) === String(ee.id) && (st.selector || "primary") === Qe
      );
      if (Re >= 0) {
        S.value = Re;
        return;
      }
      const lt = {
        name: Z(String((se == null ? void 0 : se.name) || "output"), `output_${R.value.outputs.length + 1}`),
        display_name: String((se == null ? void 0 : se.name) || `Output ${R.value.outputs.length + 1}`),
        type: Q(se == null ? void 0 : se.type),
        node_id: String(ee.id),
        selector: Qe
      };
      R.value.outputs.push(lt), S.value = R.value.outputs.length - 1, $.value = null;
    }
    function fe(ee) {
      var Qe, Re, lt;
      if (!r.value) {
        T.value = null, I.value = null;
        return;
      }
      const se = Oe(ee);
      if (!se) {
        T.value = null, I.value = null;
        return;
      }
      if (se.kind === "input") {
        const st = Array.isArray(se.node.widgets) ? se.node.widgets.indexOf(se.widget) : -1, pt = E(((Qe = be(se.node.id, st)) == null ? void 0 : Qe.getBoundingClientRect()) ?? ue({
          node_id: String(se.node.id),
          widget_idx: st >= 0 ? st : void 0
        }));
        if (!pt) {
          T.value = null, I.value = null;
          return;
        }
        T.value = {
          kind: "input",
          label: `${((Re = se.widget) == null ? void 0 : Re.name) || "widget"} · Node ${se.node.id}`
        }, I.value = { kind: "input", style: pt };
        return;
      }
      const pe = E(z(se.node));
      if (!pe) {
        T.value = null, I.value = null;
        return;
      }
      T.value = {
        kind: "output",
        label: `${((lt = se.output) == null ? void 0 : lt.name) || se.node.title || se.node.type || "output"} · Node ${se.node.id}`
      }, I.value = { kind: "output", style: pe };
    }
    function We(ee) {
      var Qe, Re, lt;
      if (!r.value || !w.value || ee.button !== 0) return;
      const se = Oe(ee);
      if (!se) return;
      const pe = (Qe = t.comfyApp) == null ? void 0 : Qe.canvas;
      if (pe) {
        if (se.kind === "input") {
          ee.preventDefault(), ee.stopImmediatePropagation(), ee.stopPropagation(), Array.isArray(pe.graph_mouse) && (pe.graph_mouse[0] = se.canvasX, pe.graph_mouse[1] = se.canvasY), (Re = pe.selectNode) == null || Re.call(pe, se.node, !1), te(se.node, se.widget);
          return;
        }
        ee.preventDefault(), ee.stopImmediatePropagation(), ee.stopPropagation(), Array.isArray(pe.graph_mouse) && (pe.graph_mouse[0] = se.canvasX, pe.graph_mouse[1] = se.canvasY), (lt = pe.selectNode) == null || lt.call(pe, se.node, !1), V(se.node, se.output);
      }
    }
    function Be() {
      document.addEventListener("pointerdown", We, !0), document.addEventListener("pointermove", fe, !0);
    }
    function _e() {
      document.removeEventListener("pointerdown", We, !0), document.removeEventListener("pointermove", fe, !0);
    }
    async function oe() {
      if (c.value) {
        u.value = !0, v.value = null;
        try {
          p.value = await n(c.value), w.value = K(p.value.execution_contract);
        } catch (ee) {
          v.value = ee instanceof Error ? ee.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Je() {
      if (!(!w.value || !c.value)) {
        d.value = !0, v.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = K(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ae({ reopenPanel: !0 });
        } catch (ee) {
          v.value = ee instanceof Error ? ee.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ne() {
      k.value = !0;
    }
    async function Xe() {
      if (c.value) {
        k.value = !1, f.value = !0, v.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ae({ reopenPanel: !0 });
        } catch (ee) {
          v.value = ee instanceof Error ? ee.message : "Failed to delete workflow contract";
        } finally {
          f.value = !1;
        }
      }
    }
    function De() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ae(ee) {
      r.value = !1, T.value = null, I.value = null, k.value = !1, ee != null && ee.reopenPanel && De();
    }
    async function qe(ee) {
      var Qe, Re;
      const pe = (Re = (Qe = ee.detail) == null ? void 0 : Qe.workflowName) == null ? void 0 : Re.trim();
      pe && (c.value = pe, $.value = null, S.value = null, g.value = !1, r.value = !0, await oe());
    }
    function kt(ee) {
      if (ee.key === "Escape" && r.value) {
        if (k.value) {
          k.value = !1;
          return;
        }
        Ae({ reopenPanel: !0 });
      }
    }
    function Ot() {
      if (P != null) return;
      const ee = () => {
        if (x.value += 1, !r.value) {
          P = null;
          return;
        }
        P = window.requestAnimationFrame(ee);
      };
      P = window.requestAnimationFrame(ee);
    }
    function Gt() {
      P != null && (window.cancelAnimationFrame(P), P = null);
    }
    return $t(r, (ee) => {
      ee ? (Be(), Ot()) : (_e(), Gt());
    }), mt(() => {
      window.addEventListener("comfygit:open-io-mapping", qe), window.addEventListener("keydown", kt);
    }), Mo(() => {
      _e(), Gt(), window.removeEventListener("comfygit:open-io-mapping", qe), window.removeEventListener("keydown", kt);
    }), (ee, se) => r.value ? (o(), i("div", A7, [
      s("div", z7, [
        (o(!0), i(W, null, ye(Ce.value, (pe) => (o(), i("div", {
          key: pe.key,
          class: Ve(["io-highlight", "io-highlight-input", { active: pe.active }]),
          style: Wt(pe.style)
        }, null, 6))), 128)),
        (o(!0), i(W, null, ye(Ie.value, (pe) => (o(), i("div", {
          key: pe.key,
          class: Ve(["io-highlight", "io-highlight-output", { active: pe.active }]),
          style: Wt(pe.style)
        }, null, 6))), 128)),
        I.value ? (o(), i("div", {
          key: 0,
          class: Ve(["io-highlight", I.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Wt(I.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", F7, [
        s("div", B7, [
          se[8] || (se[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", V7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          T.value ? (o(), i("div", W7, " Hovering " + m(T.value.kind) + ": " + m(T.value.label), 1)) : y("", !0)
        ]),
        s("div", G7, [
          b(Ue, {
            size: "sm",
            variant: "secondary",
            onClick: se[0] || (se[0] = (pe) => Ae({ reopenPanel: !0 }))
          }, {
            default: h(() => [...se[9] || (se[9] = [
              C(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", j7, [
        s("div", H7, [
          u.value ? (o(), i("div", q7, " Loading workflow contract... ")) : v.value ? (o(), i("div", K7, m(v.value), 1)) : w.value ? (o(), i(W, { key: 2 }, [
            s("section", J7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: se[1] || (se[1] = (pe) => g.value = !g.value)
              }, [
                se[10] || (se[10] = s("span", null, "Contract Details", -1)),
                s("span", Q7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (o(), i("div", Y7, [
                b(qt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(Nt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": re
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(qt, { label: "Display Name" }, {
                  default: h(() => [
                    b(Nt, {
                      modelValue: R.value.display_name,
                      "onUpdate:modelValue": se[2] || (se[2] = (pe) => R.value.display_name = pe),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(qt, { label: "Description" }, {
                  default: h(() => [
                    b(zn, {
                      modelValue: R.value.description,
                      "onUpdate:modelValue": se[3] || (se[3] = (pe) => R.value.description = pe),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", X7, [
              s("span", Z7, m(O.value), 1),
              s("span", eD, m(R.value.inputs.length) + " input" + m(R.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", tD, m(R.value.outputs.length) + " output" + m(R.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", sD, [
              s("div", nD, [
                b(_n, { variant: "section" }, {
                  default: h(() => [...se[11] || (se[11] = [
                    C("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              R.value.inputs.length ? y("", !0) : (o(), i("div", oD, " No inputs configured. ")),
              (o(!0), i(W, null, ye(R.value.inputs, (pe, Qe) => (o(), i("div", {
                key: `input-${Qe}`,
                class: Ve(["item-card", { selected: $.value === Qe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Re) => Fe(Qe)
                }, [
                  s("div", null, [
                    s("div", lD, m(pe.name || `Input ${Qe + 1}`), 1),
                    s("div", iD, [
                      C(" Node " + m(pe.node_id || "?"), 1),
                      pe.widget_idx !== void 0 ? (o(), i(W, { key: 0 }, [
                        C(" · Widget " + m(pe.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", rD, [
                      s("span", null, m(pe.type || "string"), 1),
                      s("span", null, m(pe.required ? "required" : "optional"), 1),
                      pe.default !== void 0 && pe.default !== "" ? (o(), i("span", cD, "default " + m(Y(pe.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: Ct((Re) => he(Qe), ["stop"])
                  }, {
                    default: h(() => [...se[12] || (se[12] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, aD),
                $.value === Qe ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: se[4] || (se[4] = Ct(() => {
                  }, ["stop"]))
                }, [
                  b(qt, { label: "Name" }, {
                    default: h(() => [
                      b(Nt, {
                        modelValue: pe.name,
                        "onUpdate:modelValue": (Re) => pe.name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Nt, {
                        modelValue: pe.display_name,
                        "onUpdate:modelValue": (Re) => pe.display_name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Type" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": pe.type,
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => pe.type = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Required" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": pe.required ? "true" : "false",
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => pe.required = Re === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, {
                    class: Ve({ "item-grid-full": pe.type === "string" || pe.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      pe.type === "string" ? (o(), D(zn, {
                        key: 0,
                        "model-value": J(pe.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Re) => pe.default = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (o(), D(Nt, {
                        key: 1,
                        modelValue: pe.default,
                        "onUpdate:modelValue": (Re) => pe.default = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ae(pe.type) ? (o(), D(qt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(Nt, {
                        "model-value": de(pe.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => pe.min = le(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ae(pe.type) ? (o(), D(qt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(Nt, {
                        "model-value": de(pe.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => pe.max = le(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  j(pe.type) ? (o(), D(qt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(zn, {
                        "model-value": H(pe.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Re) => pe.enum_values = F(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", uD, [
              s("div", dD, [
                b(_n, { variant: "section" }, {
                  default: h(() => [...se[13] || (se[13] = [
                    C("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              R.value.outputs.length ? y("", !0) : (o(), i("div", mD, " No outputs configured. ")),
              (o(!0), i(W, null, ye(R.value.outputs, (pe, Qe) => (o(), i("div", {
                key: `output-${Qe}`,
                class: Ve(["item-card", { selected: S.value === Qe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Re) => Le(Qe)
                }, [
                  s("div", null, [
                    s("div", vD, m(pe.name || `Output ${Qe + 1}`), 1),
                    s("div", pD, [
                      C(" Node " + m(pe.node_id || "?"), 1),
                      pe.selector ? (o(), i(W, { key: 0 }, [
                        C(" · " + m(pe.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", gD, [
                      s("span", null, m(pe.type || "file"), 1)
                    ])
                  ]),
                  b(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: Ct((Re) => we(Qe), ["stop"])
                  }, {
                    default: h(() => [...se[14] || (se[14] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, fD),
                S.value === Qe ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: se[5] || (se[5] = Ct(() => {
                  }, ["stop"]))
                }, [
                  b(qt, { label: "Name" }, {
                    default: h(() => [
                      b(Nt, {
                        modelValue: pe.name,
                        "onUpdate:modelValue": (Re) => pe.name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Nt, {
                        modelValue: pe.display_name,
                        "onUpdate:modelValue": (Re) => pe.display_name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Type" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": pe.type,
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => pe.type = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", hD, [
          s("div", yD, [
            b(Ue, {
              variant: "secondary",
              onClick: se[6] || (se[6] = (pe) => Ae({ reopenPanel: !0 }))
            }, {
              default: h(() => [...se[15] || (se[15] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", wD, [
            b(Ue, {
              variant: "danger",
              disabled: !B.value,
              loading: f.value,
              onClick: Ne
            }, {
              default: h(() => [...se[16] || (se[16] = [
                C(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Ue, {
              variant: "primary",
              loading: d.value,
              onClick: Je
            }, {
              default: h(() => [...se[17] || (se[17] = [
                C(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      k.value ? (o(), D(Ol, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Xe,
        onCancel: se[7] || (se[7] = (pe) => k.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), kD = /* @__PURE__ */ Te(_D, [["__scopeId", "data-v-13515b27"]]), bD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', $D = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', CD = {
  comfy: bD,
  phosphor: $D
}, Fl = "comfy", Ac = "comfygit-theme";
let pn = null, zc = Fl;
function xD() {
  try {
    const e = localStorage.getItem(Ac);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Fl;
}
function Fc(e = Fl) {
  pn && pn.remove(), pn = document.createElement("style"), pn.id = "comfygit-theme-styles", pn.setAttribute("data-theme", e), pn.textContent = CD[e], document.head.appendChild(pn), document.body.setAttribute("data-comfygit-theme", e), zc = e;
  try {
    localStorage.setItem(Ac, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function SD() {
  return zc;
}
function ID(e) {
  Fc(e);
}
function ED(e) {
  var r;
  const { ui_id: t, state: n } = e || {}, a = (n == null ? void 0 : n.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Vi = "ComfyGit.DevAutoReload", Bc = "ComfyGit.DevAutoReload.PanelOpen";
function TD() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ba() {
  const e = TD();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Vi, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Vi) === "true";
  } catch {
    return !1;
  }
}
function Vc(e) {
  if (ba())
    try {
      sessionStorage.setItem(Bc, e ? "true" : "false");
    } catch {
    }
}
function MD() {
  if (!ba()) return !1;
  try {
    return sessionStorage.getItem(Bc) === "true";
  } catch {
    return !1;
  }
}
async function Wi(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const u = t.headers, d = u.get("etag"), f = u.get("last-modified"), v = u.get("content-length");
    if (d || f)
      return [d, f, v].filter(Boolean).join(":");
  }
  const n = await fetch(e, { cache: "no-store", method: "GET" });
  if (!n.ok) return null;
  const a = n.headers, l = [
    a.get("etag"),
    a.get("last-modified"),
    a.get("content-length")
  ].filter(Boolean).join(":"), r = await n.text();
  let c = 0;
  for (let u = 0; u < r.length; u += 1)
    c = (c << 5) - c + r.charCodeAt(u) | 0;
  return `${l}:${r.length}:${c}`;
}
async function PD(e) {
  if (!ba()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Wi(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let n = !1;
  window.setInterval(async () => {
    if (!n)
      for (const a of t)
        try {
          const l = await Wi(a.url);
          if (a.signature && l && l !== a.signature) {
            n = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const RD = "./comfygit-panel.css", DD = "./comfygit-panel.js", Wc = new URL(RD, import.meta.url).href, LD = new URL(DD, import.meta.url).href, Bl = document.createElement("link");
Bl.rel = "stylesheet";
Bl.href = Wc;
document.head.appendChild(Bl);
const ND = xD();
Fc(ND);
ba() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), ID(e);
  },
  getTheme: () => {
    const e = SD();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = Os;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = Os;
    if (typeof t.loadGraphData != "function")
      throw new Error("ComfyUI loadGraphData is not available");
    if (typeof t.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return await t.loadGraphData(e, !0, !1, null, {
      deferWarnings: !0,
      skipAssetScans: !0,
      silentAssetErrors: !0
    }), await new Promise((n) => requestAnimationFrame(n)), t.graphToPrompt(t.rootGraph);
  }
};
let Fs = null, yo = null, hs = null, wo = null, to = null, Gi = null, so = null, ji = null, no = null, Hi = null;
const Fn = _(null);
let Io = "no_workspace", Gc = !1;
async function io(e = !1) {
  const t = qn();
  if (!t) return null;
  try {
    const n = e ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status", a = await t.fetchApi(n);
    a.ok && (Fn.value = await a.json());
  } catch {
  }
}
async function ml() {
  const e = qn();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const n = await t.json();
        Io = n.state, Gc = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function fl() {
  var t;
  if (Io === "managed" || !Gc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const n of e)
    if (((t = n.textContent) == null ? void 0 : t.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function UD() {
  if (!Fn.value) return !1;
  const e = Fn.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Fn.value.has_changes;
}
function oo(e) {
  ro(), Vc(!0), Fs = document.createElement("div"), Fs.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Fs.appendChild(t), Fs.addEventListener("click", (a) => {
    a.target === Fs && ro();
  });
  const n = (a) => {
    a.key === "Escape" && (ro(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), yo = Ro({
    render: () => Hn(EP, {
      initialView: e,
      onClose: ro,
      onStatusUpdate: async (a) => {
        Fn.value = a, Rn(), await ml(), Yo(), fl();
      }
    })
  }), yo.mount(t), document.body.appendChild(Fs);
}
function ro() {
  Vc(!1), yo && (yo.unmount(), yo = null), Fs && (Fs.remove(), Fs = null);
}
function qi(e) {
  ao(), hs = document.createElement("div"), hs.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  hs.style.position = "fixed", hs.style.top = `${t.bottom + 8}px`, hs.style.right = `${window.innerWidth - t.right}px`, hs.style.zIndex = "10001";
  const n = (l) => {
    hs && !hs.contains(l.target) && l.target !== e && (ao(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const a = (l) => {
    l.key === "Escape" && (ao(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), wo = Ro({
    render: () => Hn(Lc, {
      status: Fn.value,
      onClose: ao,
      onCommitted: (l) => {
        ao(), OD(l.success, l.message), io().then(Rn);
      }
    })
  }), wo.mount(hs), document.body.appendChild(hs);
}
function ao() {
  wo && (wo.unmount(), wo = null), hs && (hs.remove(), hs = null);
}
function OD(e, t) {
  const n = document.createElement("div"), a = e ? "#22c55e" : "#ef4444";
  n.style.cssText = `
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
  `, n.appendChild(l);
  const r = document.createElement("span");
  r.textContent = t, n.appendChild(r), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function AD() {
  to || (to = document.createElement("div"), to.className = "comfygit-download-queue-root", Gi = Ro({
    render: () => Hn(bR)
  }), Gi.mount(to), document.body.appendChild(to), console.log("[ComfyGit] Model download queue mounted"));
}
function zD() {
  so || (so = document.createElement("div"), so.className = "comfygit-missing-resources-root", ji = Ro({
    render: () => Hn(O7)
  }), ji.mount(so), document.body.appendChild(so), console.log("[ComfyGit] Missing resources popup mounted"));
}
function FD() {
  no || (no = document.createElement("div"), no.className = "comfygit-io-mapping-root", Hi = Ro({
    render: () => Hn(kD, {
      comfyApp: Os
    })
  }), Hi.mount(no), document.body.appendChild(no), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let is = null;
function Rn() {
  if (!is) return;
  const e = is.querySelector(".commit-indicator");
  e && (e.style.display = UD() ? "block" : "none");
}
function Yo() {
  if (!is) return;
  const e = Io !== "managed";
  is.disabled = e, is.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const jc = document.createElement("style");
jc.textContent = `
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
document.head.appendChild(jc);
Os.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => oo()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        is && !is.disabled && qi(is);
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
    if (Io === "managed")
      try {
        await Promise.all([
          Os.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Os.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (n) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", n);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (Io !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => oo(), is = document.createElement("button"), is.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", is.innerHTML = 'Commit <span class="commit-indicator"></span>', is.title = "Quick Commit", is.onclick = () => qi(is), e.appendChild(t), e.appendChild(is), (r = (l = Os.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Os.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), AD(), zD(), FD(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      oo(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      ro();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await io(), Rn(), Yo();
    }));
    const { loadPendingDownloads: n } = Kn();
    n(), await Promise.all([io(), ml()]), Rn(), Yo(), fl(), MD() && setTimeout(() => {
      Fs || oo();
    }, 100), PD([
      { name: "panel script", url: LD },
      { name: "panel stylesheet", url: Wc }
    ]), setTimeout(fl, 100), setInterval(async () => {
      await Promise.all([io(), ml()]), Rn(), Yo();
    }, 3e4);
    const a = qn();
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
        const k = document.createElement("span");
        k.textContent = "⚠️", k.style.fontSize = "20px", g.appendChild(k);
        const $ = document.createElement("div");
        $.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const S = document.createElement("div");
        S.textContent = "Node installation failed", S.style.cssText = "font-weight: 600; color: #e53935;", $.appendChild(S);
        const x = document.createElement("div");
        x.textContent = "Dependency conflict detected", x.style.cssText = "font-size: 12px; opacity: 0.8;", $.appendChild(x), g.appendChild($);
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
          g.remove(), oo("debug-env");
        }, g.appendChild(T);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => g.remove(), g.appendChild(I), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && g.remove();
        }, 1e4);
      }, f = function(p) {
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
        const k = document.createElement("span");
        k.textContent = "✅", k.style.fontSize = "20px", g.appendChild(k);
        const $ = document.createElement("div");
        $.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const S = document.createElement("div");
        S.textContent = "To apply changes, please restart ComfyUI", S.style.cssText = "font-weight: 500; color: #fff;", $.appendChild(S);
        const x = document.createElement("div");
        x.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, x.style.cssText = "font-size: 12px; opacity: 0.7;", $.appendChild(x), g.appendChild($);
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
          T.disabled = !0, T.textContent = "Restarting...", T.style.opacity = "0.7", S.textContent = "Restarting...", x.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                if (localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false") {
                  console.log("[ComfyGit] Auto-refresh enabled after node install restart, reloading page..."), c();
                  return;
                }
                Os.refreshComboInNodes && (await Os.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", x.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", T.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (U) {
                console.error("[ComfyGit] Failed to refresh nodes:", U), k.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", T.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), S.textContent = "Restart Failed", S.style.color = "#e53935", x.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", T.textContent = "Try Again", T.disabled = !1, T.style.opacity = "1";
          }
        }, g.appendChild(T);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => g.remove(), g.appendChild(I), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await io(), Rn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = ED(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        f(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
