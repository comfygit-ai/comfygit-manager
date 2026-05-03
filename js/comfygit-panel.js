var qc = Object.defineProperty;
var Kc = (e, t, n) => t in e ? qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Lo = (e, t, n) => Kc(e, typeof t != "symbol" ? t + "" : t, n);
import { app as Us } from "../../scripts/app.js";
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
const Et = {}, Pn = [], Fs = () => {
}, Ki = () => !1, ca = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), pl = (e) => e.startsWith("onUpdate:"), Bt = Object.assign, gl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jc = Object.prototype.hasOwnProperty, _t = (e, t) => Jc.call(e, t), st = Array.isArray, Rn = (e) => Io(e) === "[object Map]", Vn = (e) => Io(e) === "[object Set]", Gl = (e) => Io(e) === "[object Date]", at = (e) => typeof e == "function", Nt = (e) => typeof e == "string", Is = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", Ji = (e) => (xt(e) || at(e)) && at(e.then) && at(e.catch), Qi = Object.prototype.toString, Io = (e) => Qi.call(e), Qc = (e) => Io(e).slice(8, -1), Yi = (e) => Io(e) === "[object Object]", hl = (e) => Nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = /* @__PURE__ */ vl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ua = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Yc = /-\w/g, ks = ua(
  (e) => e.replace(Yc, (t) => t.slice(1).toUpperCase())
), Xc = /\B([A-Z])/g, cn = ua(
  (e) => e.replace(Xc, "-$1").toLowerCase()
), da = ua((e) => e.charAt(0).toUpperCase() + e.slice(1)), Oa = ua(
  (e) => e ? `on${da(e)}` : ""
), an = (e, t) => !Object.is(e, t), Vo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Xi = (e, t, n, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: n
  });
}, ma = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zc = (e) => {
  const t = Nt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let jl;
const fa = () => jl || (jl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = Nt(a) ? nu(a) : Wt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Nt(e) || xt(e))
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
  if (Nt(e))
    t = e;
  else if (st(e))
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
    n = wn(e[a], t[a]);
  return n;
}
function wn(e, t) {
  if (e === t) return !0;
  let n = Gl(e), a = Gl(t);
  if (n || a)
    return n && a ? e.getTime() === t.getTime() : !1;
  if (n = Is(e), a = Is(t), n || a)
    return e === t;
  if (n = st(e), a = st(t), n || a)
    return n && a ? lu(e, t) : !1;
  if (n = xt(e), a = xt(t), n || a) {
    if (!n || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !wn(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yl(e, t) {
  return e.findIndex((n) => wn(n, t));
}
const er = (e) => !!(e && e.__v_isRef === !0), m = (e) => Nt(e) ? e : e == null ? "" : st(e) || xt(e) && (e.toString === Qi || !at(e.toString)) ? er(e) ? m(e.value) : JSON.stringify(e, tr, 2) : String(e), tr = (e, t) => er(t) ? tr(e, t.value) : Rn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [a, l], r) => (n[Aa(a, r) + " =>"] = l, n),
    {}
  )
} : Vn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Aa(n))
} : Is(t) ? Aa(t) : xt(t) && !st(t) && !Yi(t) ? String(t) : t, Aa = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Is(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ds;
class iu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ds, !t && ds && (this.index = (ds.scopes || (ds.scopes = [])).push(
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
      const n = ds;
      try {
        return ds = this, t();
      } finally {
        ds = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ds, ds = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ds = this.prevScope, this.prevScope = void 0);
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
  return ds;
}
let Tt;
const za = /* @__PURE__ */ new WeakSet();
class sr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ds && ds.active && ds.effects.push(this);
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
    const t = Tt, n = xs;
    Tt = this, xs = !0;
    try {
      return this.fn();
    } finally {
      lr(this), Tt = t, xs = n, this.flags &= -3;
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
let nr = 0, co, uo;
function or(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = uo, uo = e;
    return;
  }
  e.next = co, co = e;
}
function wl() {
  nr++;
}
function _l() {
  if (--nr > 0)
    return;
  if (uo) {
    let t = uo;
    for (uo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; co; ) {
    let t = co;
    for (co = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wo) || (e.globalVersion = wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ya(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Tt, a = xs;
  Tt = e, xs = !0;
  try {
    ar(e);
    const l = e.fn(e._value);
    (t.version === 0 || an(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    Tt = n, xs = a, lr(e), e.flags &= -3;
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
let xs = !0;
const rr = [];
function Qs() {
  rr.push(xs), xs = !1;
}
function Ys() {
  const e = rr.pop();
  xs = e === void 0 ? !0 : e;
}
function Hl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Tt;
    Tt = void 0;
    try {
      t();
    } finally {
      Tt = n;
    }
  }
}
let wo = 0;
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
    if (!Tt || !xs || Tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Tt)
      n = this.activeLink = new uu(Tt, this), Tt.deps ? (n.prevDep = Tt.depsTail, Tt.depsTail.nextDep = n, Tt.depsTail = n) : Tt.deps = Tt.depsTail = n, cr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = Tt.depsTail, n.nextDep = void 0, Tt.depsTail.nextDep = n, Tt.depsTail = n, Tt.deps === n && (Tt.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, wo++, this.notify(t);
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
const Xa = /* @__PURE__ */ new WeakMap(), gn = Symbol(
  ""
), Za = Symbol(
  ""
), _o = Symbol(
  ""
);
function es(e, t, n) {
  if (xs && Tt) {
    let a = Xa.get(e);
    a || Xa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new bl()), l.map = a, l.key = n), l.track();
  }
}
function Hs(e, t, n, a, l, r) {
  const c = Xa.get(e);
  if (!c) {
    wo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (wl(), t === "clear")
    c.forEach(u);
  else {
    const d = st(e), f = d && hl(n);
    if (d && n === "length") {
      const v = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === _o || !Is(w) && w >= v) && u(p);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), f && u(c.get(_o)), t) {
        case "add":
          d ? f && u(c.get("length")) : (u(c.get(gn)), Rn(e) && u(c.get(Za)));
          break;
        case "delete":
          d || (u(c.get(gn)), Rn(e) && u(c.get(Za)));
          break;
        case "set":
          Rn(e) && u(c.get(gn));
          break;
      }
  }
  _l();
}
function Cn(e) {
  const t = ht(e);
  return t === e ? t : (es(t, "iterate", _o), ws(e) ? t : t.map(Es));
}
function va(e) {
  return es(e = ht(e), "iterate", _o), e;
}
function sn(e, t) {
  return Xs(e) ? hn(e) ? zn(Es(t)) : zn(t) : Es(t);
}
const du = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fa(this, Symbol.iterator, (e) => sn(this, e));
  },
  concat(...e) {
    return Cn(this).concat(
      ...e.map((t) => st(t) ? Cn(t) : t)
    );
  },
  entries() {
    return Fa(this, "entries", (e) => (e[1] = sn(this, e[1]), e));
  },
  every(e, t) {
    return Ws(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ws(
      this,
      "filter",
      e,
      t,
      (n) => n.map((a) => sn(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Ws(
      this,
      "find",
      e,
      t,
      (n) => sn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ws(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ws(
      this,
      "findLast",
      e,
      t,
      (n) => sn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ws(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ws(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ba(this, "includes", e);
  },
  indexOf(...e) {
    return Ba(this, "indexOf", e);
  },
  join(e) {
    return Cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ba(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ws(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qn(this, "pop");
  },
  push(...e) {
    return Qn(this, "push", e);
  },
  reduce(e, ...t) {
    return ql(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ql(this, "reduceRight", e, t);
  },
  shift() {
    return Qn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ws(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qn(this, "splice", e);
  },
  toReversed() {
    return Cn(this).toReversed();
  },
  toSorted(e) {
    return Cn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Cn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qn(this, "unshift", e);
  },
  values() {
    return Fa(this, "values", (e) => sn(this, e));
  }
};
function Fa(e, t, n) {
  const a = va(e), l = a[t]();
  return a !== e && !ws(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = n(r.value)), r;
  }), l;
}
const mu = Array.prototype;
function Ws(e, t, n, a, l, r) {
  const c = va(e), u = c !== e && !ws(e), d = c[t];
  if (d !== mu[t]) {
    const p = d.apply(e, r);
    return u ? Es(p) : p;
  }
  let f = n;
  c !== e && (u ? f = function(p, w) {
    return n.call(this, sn(e, p), w, e);
  } : n.length > 2 && (f = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const v = d.call(c, f, a);
  return u && l ? l(v) : v;
}
function ql(e, t, n, a) {
  const l = va(e);
  let r = n;
  return l !== e && (ws(e) ? n.length > 3 && (r = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return n.call(this, c, sn(e, u), d, e);
  }), l[t](r, ...a);
}
function Ba(e, t, n) {
  const a = ht(e);
  es(a, "iterate", _o);
  const l = a[t](...n);
  return (l === -1 || l === !1) && xl(n[0]) ? (n[0] = ht(n[0]), a[t](...n)) : l;
}
function Qn(e, t, n = []) {
  Qs(), wl();
  const a = ht(e)[t].apply(e, n);
  return _l(), Ys(), a;
}
const fu = /* @__PURE__ */ vl("__proto__,__v_isRef,__isVue"), ur = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Is)
);
function vu(e) {
  Is(e) || (e = String(e));
  const t = ht(this);
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
    const c = st(t);
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
    if ((Is(n) ? ur.has(n) : fu(n)) || (l || es(t, "get", n), r))
      return u;
    if (os(u)) {
      const d = c && hl(n) ? u : u.value;
      return l && xt(d) ? Yo(d) : d;
    }
    return xt(u) ? l ? Yo(u) : bn(u) : u;
  }
}
class mr extends dr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, l) {
    let r = t[n];
    const c = st(t) && hl(n);
    if (!this._isShallow) {
      const f = Xs(r);
      if (!ws(a) && !Xs(a) && (r = ht(r), a = ht(a)), !c && os(r) && !os(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(n) < t.length : _t(t, n), d = Reflect.set(
      t,
      n,
      a,
      os(t) ? t : l
    );
    return t === ht(l) && (u ? an(a, r) && Hs(t, "set", n, a) : Hs(t, "add", n, a)), d;
  }
  deleteProperty(t, n) {
    const a = _t(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && Hs(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Is(n) || !ur.has(n)) && es(t, "has", n), a;
  }
  ownKeys(t) {
    return es(
      t,
      "iterate",
      st(t) ? "length" : gn
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
const el = (e) => e, No = (e) => Reflect.getPrototypeOf(e);
function wu(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, r = ht(l), c = Rn(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, f = l[e](...a), v = n ? el : t ? zn : Es;
    return !t && es(
      r,
      "iterate",
      d ? Za : gn
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
function Uo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _u(e, t) {
  const n = {
    get(l) {
      const r = this.__v_raw, c = ht(r), u = ht(l);
      e || (an(l, u) && es(c, "get", l), es(c, "get", u));
      const { has: d } = No(c), f = t ? el : e ? zn : Es;
      if (d.call(c, l))
        return f(r.get(l));
      if (d.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && es(ht(l), "iterate", gn), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ht(r), u = ht(l);
      return e || (an(l, u) && es(c, "has", l), es(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ht(u), f = t ? el : e ? zn : Es;
      return !e && es(d, "iterate", gn), u.forEach((v, p) => l.call(r, f(v), f(p), c));
    }
  };
  return Bt(
    n,
    e ? {
      add: Uo("add"),
      set: Uo("set"),
      delete: Uo("delete"),
      clear: Uo("clear")
    } : {
      add(l) {
        !t && !ws(l) && !Xs(l) && (l = ht(l));
        const r = ht(this);
        return No(r).has.call(r, l) || (r.add(l), Hs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ws(r) && !Xs(r) && (r = ht(r));
        const c = ht(this), { has: u, get: d } = No(c);
        let f = u.call(c, l);
        f || (l = ht(l), f = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), f ? an(r, v) && Hs(c, "set", l, r) : Hs(c, "add", l, r), this;
      },
      delete(l) {
        const r = ht(this), { has: c, get: u } = No(r);
        let d = c.call(r, l);
        d || (l = ht(l), d = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return d && Hs(r, "delete", l, void 0), f;
      },
      clear() {
        const l = ht(this), r = l.size !== 0, c = l.clear();
        return r && Hs(
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
function bn(e) {
  return Xs(e) ? e : Cl(
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
function Yo(e) {
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
function hn(e) {
  return Xs(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xs(e) {
  return !!(e && e.__v_isReadonly);
}
function ws(e) {
  return !!(e && e.__v_isShallow);
}
function xl(e) {
  return e ? !!e.__v_raw : !1;
}
function ht(e) {
  const t = e && e.__v_raw;
  return t ? ht(t) : e;
}
function Eu(e) {
  return !_t(e, "__v_skip") && Object.isExtensible(e) && Xi(e, "__v_skip", !0), e;
}
const Es = (e) => xt(e) ? bn(e) : e, zn = (e) => xt(e) ? Yo(e) : e;
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
    this.dep = new bl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ht(t), this._value = n ? t : Es(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || ws(t) || Xs(t);
    t = a ? t : ht(t), an(t, n) && (this._rawValue = t, this._value = a ? t : Es(t), this.dep.trigger());
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
  return hn(e) ? e : new Proxy(e, Pu);
}
class Ru {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new bl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Tt !== this)
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
const Oo = {}, Xo = /* @__PURE__ */ new WeakMap();
let vn;
function Lu(e, t = !1, n = vn) {
  if (n) {
    let a = Xo.get(n);
    a || Xo.set(n, a = []), a.push(e);
  }
}
function Nu(e, t, n = Et) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = n, f = (P) => l ? P : ws(P) || l === !1 || l === 0 ? qs(P, 1) : qs(P);
  let v, p, w, g, k = !1, $ = !1;
  if (os(e) ? (p = () => e.value, k = ws(e)) : hn(e) ? (p = () => f(e), k = !0) : st(e) ? ($ = !0, k = e.some((P) => hn(P) || ws(P)), p = () => e.map((P) => {
    if (os(P))
      return P.value;
    if (hn(P))
      return f(P);
    if (at(P))
      return d ? d(P, 2) : P();
  })) : at(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Qs();
      try {
        w();
      } finally {
        Ys();
      }
    }
    const P = vn;
    vn = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      vn = P;
    }
  } : p = Fs, t && l) {
    const P = p, O = l === !0 ? 1 / 0 : l;
    p = () => qs(P(), O);
  }
  const S = ru(), x = () => {
    v.stop(), S && S.active && gl(S.effects, v);
  };
  if (r && t) {
    const P = t;
    t = (...O) => {
      P(...O), x();
    };
  }
  let T = $ ? new Array(e.length).fill(Oo) : Oo;
  const I = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (t) {
        const O = v.run();
        if (l || k || ($ ? O.some((U, B) => an(U, T[B])) : an(O, T))) {
          w && w();
          const U = vn;
          vn = v;
          try {
            const B = [
              O,
              // pass undefined as the old value when it's changed for the first time
              T === Oo ? void 0 : $ && T[0] === Oo ? [] : T,
              g
            ];
            T = O, d ? d(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            vn = U;
          }
        }
      } else
        v.run();
  };
  return u && u(I), v = new sr(p), v.scheduler = c ? () => c(I, !1) : I, g = (P) => Lu(P, !1, v), w = v.onStop = () => {
    const P = Xo.get(v);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const O of P) O();
      Xo.delete(v);
    }
  }, t ? a ? I(!0) : T = v.run() : c ? c(I.bind(null, !0), !0) : v.run(), x.pause = v.pause.bind(v), x.resume = v.resume.bind(v), x.stop = x, x;
}
function qs(e, t = 1 / 0, n) {
  if (t <= 0 || !xt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, os(e))
    qs(e.value, t, n);
  else if (st(e))
    for (let a = 0; a < e.length; a++)
      qs(e[a], t, n);
  else if (Vn(e) || Rn(e))
    e.forEach((a) => {
      qs(a, t, n);
    });
  else if (Yi(e)) {
    for (const a in e)
      qs(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && qs(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Eo(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    pa(l, t, n);
  }
}
function Ts(e, t, n, a) {
  if (at(e)) {
    const l = Eo(e, t, n, a);
    return l && Ji(l) && l.catch((r) => {
      pa(r, t, n);
    }), l;
  }
  if (st(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(Ts(e[r], t, n, a));
    return l;
  }
}
function pa(e, t, n, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Et;
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
      Qs(), Eo(r, null, 10, [
        e,
        d,
        f
      ]), Ys();
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
const cs = [];
let Ns = -1;
const Dn = [];
let nn = null, In = 0;
const hr = /* @__PURE__ */ Promise.resolve();
let Zo = null;
function Kt(e) {
  const t = Zo || hr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ou(e) {
  let t = Ns + 1, n = cs.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = cs[a], r = ko(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Sl(e) {
  if (!(e.flags & 1)) {
    const t = ko(e), n = cs[cs.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ko(n) ? cs.push(e) : cs.splice(Ou(t), 0, e), e.flags |= 1, yr();
  }
}
function yr() {
  Zo || (Zo = hr.then(_r));
}
function Au(e) {
  st(e) ? Dn.push(...e) : nn && e.id === -1 ? nn.splice(In + 1, 0, e) : e.flags & 1 || (Dn.push(e), e.flags |= 1), yr();
}
function Kl(e, t, n = Ns + 1) {
  for (; n < cs.length; n++) {
    const a = cs[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      cs.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function wr(e) {
  if (Dn.length) {
    const t = [...new Set(Dn)].sort(
      (n, a) => ko(n) - ko(a)
    );
    if (Dn.length = 0, nn) {
      nn.push(...t);
      return;
    }
    for (nn = t, In = 0; In < nn.length; In++) {
      const n = nn[In];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    nn = null, In = 0;
  }
}
const ko = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _r(e) {
  try {
    for (Ns = 0; Ns < cs.length; Ns++) {
      const t = cs[Ns];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Eo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ns < cs.length; Ns++) {
      const t = cs[Ns];
      t && (t.flags &= -2);
    }
    Ns = -1, cs.length = 0, wr(), Zo = null, (cs.length || Dn.length) && _r();
  }
}
let Jt = null, kr = null;
function ea(e) {
  const t = Jt;
  return Jt = e, kr = e && e.type.__scopeId || null, t;
}
function h(e, t = Jt, n) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && na(-1);
    const r = ea(t);
    let c;
    try {
      c = e(...l);
    } finally {
      ea(r), a._d && na(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Ft(e, t) {
  if (Jt === null)
    return e;
  const n = _a(Jt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = Et] = t[l];
    r && (at(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && qs(c), a.push({
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
function un(e, t, n, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Qs(), Ts(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Ys());
  }
}
const br = Symbol("_vte"), $r = (e) => e.__isTeleport, mo = (e) => e && (e.disabled || e.disabled === ""), Jl = (e) => e && (e.defer || e.defer === ""), Ql = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Yl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, tl = (e, t) => {
  const n = e && e.to;
  return Nt(n) ? t ? t(n) : null : n;
}, Cr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, a, l, r, c, u, d, f) {
    const {
      mc: v,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: k, createText: $, createComment: S }
    } = f, x = mo(t.props);
    let { shapeFlag: T, children: I, dynamicChildren: P } = t;
    if (e == null) {
      const O = t.el = $(""), U = t.anchor = $("");
      g(O, n, a), g(U, n, a);
      const B = (A, Q) => {
        T & 16 && v(
          I,
          A,
          Q,
          l,
          r,
          c,
          u,
          d
        );
      }, R = () => {
        const A = t.target = tl(t.props, k), Q = xr(A, t, $, g);
        A && (c !== "svg" && Ql(A) ? c = "svg" : c !== "mathml" && Yl(A) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), x || (B(A, Q), Wo(t, !1)));
      };
      x && (B(n, U), Wo(t, !0)), Jl(t.props) ? (t.el.__isMounted = !1, is(() => {
        R(), delete t.el.__isMounted;
      }, r)) : R();
    } else {
      if (Jl(t.props) && e.el.__isMounted === !1) {
        is(() => {
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
      const O = t.anchor = e.anchor, U = t.target = e.target, B = t.targetAnchor = e.targetAnchor, R = mo(e.props), A = R ? n : U, Q = R ? O : B;
      if (c === "svg" || Ql(U) ? c = "svg" : (c === "mathml" || Yl(U)) && (c = "mathml"), P ? (w(
        e.dynamicChildren,
        P,
        A,
        l,
        r,
        c,
        u
      ), Pl(e, t, !0)) : d || p(
        e,
        t,
        A,
        Q,
        l,
        r,
        c,
        u,
        !1
      ), x)
        R ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ao(
          t,
          n,
          O,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ae = t.target = tl(
          t.props,
          k
        );
        ae && Ao(
          t,
          ae,
          null,
          f,
          0
        );
      } else R && Ao(
        t,
        U,
        B,
        f,
        1
      );
      Wo(t, x);
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
      const g = r || !mo(w);
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
  move: Ao,
  hydrate: zu
};
function Ao(e, t, n, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, n);
  const { el: c, anchor: u, shapeFlag: d, children: f, props: v } = e, p = r === 2;
  if (p && a(c, t, n), (!p || mo(v)) && d & 16)
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
  ), k = mo(t.props);
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
    Wo(t, k);
  } else k && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const us = Cr;
function Wo(e, t) {
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
const js = Symbol("_leaveCb"), zo = Symbol("_enterCb");
function Sr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return dt(() => {
    e.isMounted = !0;
  }), To(() => {
    e.isUnmounting = !0;
  }), e;
}
const hs = [Function, Array], Ir = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: hs,
  onEnter: hs,
  onAfterEnter: hs,
  onEnterCancelled: hs,
  // leave
  onBeforeLeave: hs,
  onLeave: hs,
  onAfterLeave: hs,
  onLeaveCancelled: hs,
  // appear
  onBeforeAppear: hs,
  onAppear: hs,
  onAfterAppear: hs,
  onAppearCancelled: hs
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
      const r = Tr(l), c = ht(e), { mode: u } = c;
      if (a.isLeaving)
        return Va(r);
      const d = Xl(r);
      if (!d)
        return Va(r);
      let f = bo(
        d,
        c,
        a,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      d.type !== ss && _n(d, f);
      let v = n.subTree && Xl(n.subTree);
      if (v && v.type !== ss && !pn(v, d) && Er(n).type !== ss) {
        let p = bo(
          v,
          c,
          a,
          n
        );
        if (_n(v, p), u === "out-in" && d.type !== ss)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, v = void 0;
          }, Va(r);
        u === "in-out" && d.type !== ss ? p.delayLeave = (w, g, k) => {
          const $ = Mr(
            a,
            v
          );
          $[String(v.key)] = v, w[js] = () => {
            g(), w[js] = void 0, delete f.delayedLeave, v = void 0;
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
function bo(e, t, n, a, l) {
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
  } = t, P = String(e.key), O = Mr(n, e), U = (A, Q) => {
    A && Ts(
      A,
      a,
      9,
      Q
    );
  }, B = (A, Q) => {
    const ae = Q[1];
    U(A, Q), st(A) ? A.every((H) => H.length <= 1) && ae() : A.length <= 1 && ae();
  }, R = {
    mode: c,
    persisted: u,
    beforeEnter(A) {
      let Q = d;
      if (!n.isMounted)
        if (r)
          Q = S || d;
        else
          return;
      A[js] && A[js](
        !0
        /* cancelled */
      );
      const ae = O[P];
      ae && pn(e, ae) && ae.el[js] && ae.el[js](), U(Q, [A]);
    },
    enter(A) {
      let Q = f, ae = v, H = p;
      if (!n.isMounted)
        if (r)
          Q = x || f, ae = T || v, H = I || p;
        else
          return;
      let ue = !1;
      const q = A[zo] = (N) => {
        ue || (ue = !0, N ? U(H, [A]) : U(ae, [A]), R.delayedLeave && R.delayedLeave(), A[zo] = void 0);
      };
      Q ? B(Q, [A, q]) : q();
    },
    leave(A, Q) {
      const ae = String(e.key);
      if (A[zo] && A[zo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Q();
      U(w, [A]);
      let H = !1;
      const ue = A[js] = (q) => {
        H || (H = !0, Q(), q ? U($, [A]) : U(k, [A]), A[js] = void 0, O[ae] === e && delete O[ae]);
      };
      O[ae] = e, g ? B(g, [A, ue]) : ue();
    },
    clone(A) {
      const Q = bo(
        A,
        t,
        n,
        a,
        l
      );
      return l && l(Q), Q;
    }
  };
  return R;
}
function Va(e) {
  if (ga(e))
    return e = ln(e), e.children = null, e;
}
function Xl(e) {
  if (!ga(e))
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
function _n(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _n(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Il(e, t = !1, n) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : r);
    c.type === W ? (c.patchFlag & 128 && l++, a = a.concat(
      Il(c.children, t, u)
    )) : (t || c.type !== ss) && a.push(u != null ? ln(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  return at(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Bt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Pr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ta = /* @__PURE__ */ new WeakMap();
function fo(e, t, n, a, l = !1) {
  if (st(e)) {
    e.forEach(
      (k, $) => fo(
        k,
        t && (st(t) ? t[$] : t),
        n,
        a,
        l
      )
    );
    return;
  }
  if (Ln(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && fo(e, t, n, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? _a(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, f = t && t.r, v = u.refs === Et ? u.refs = {} : u.refs, p = u.setupState, w = ht(p), g = p === Et ? Ki : (k) => _t(w, k);
  if (f != null && f !== d) {
    if (Zl(t), Nt(f))
      v[f] = null, g(f) && (p[f] = null);
    else if (os(f)) {
      f.value = null;
      const k = t;
      k.k && (v[k.k] = null);
    }
  }
  if (at(d))
    Eo(d, u, 12, [c, v]);
  else {
    const k = Nt(d), $ = os(d);
    if (k || $) {
      const S = () => {
        if (e.f) {
          const x = k ? g(d) ? p[d] : v[d] : d.value;
          if (l)
            st(x) && gl(x, r);
          else if (st(x))
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
          S(), ta.delete(e);
        };
        x.id = -1, ta.set(e, x), is(x, n);
      } else
        Zl(e), S();
    }
  }
}
function Zl(e) {
  const t = ta.get(e);
  t && (t.flags |= 8, ta.delete(e));
}
fa().requestIdleCallback;
fa().cancelIdleCallback;
const Ln = (e) => !!e.type.__asyncLoader, ga = (e) => e.type.__isKeepAlive;
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
  if (ha(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; )
      ga(l.parent.vnode) && Gu(a, t, n, l), l = l.parent;
  }
}
function Gu(e, t, n, a) {
  const l = ha(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Wn(() => {
    gl(a[t], l);
  }, n);
}
function ha(e, t, n = ns, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Qs();
      const u = Mo(n), d = Ts(t, n, e, c);
      return u(), Ys(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Zs = (e) => (t, n = ns) => {
  (!xo || e === "sp") && ha(e, (...a) => t(...a), n);
}, ju = Zs("bm"), dt = Zs("m"), Hu = Zs(
  "bu"
), Dr = Zs("u"), To = Zs(
  "bum"
), Wn = Zs("um"), qu = Zs(
  "sp"
), Ku = Zs("rtg"), Ju = Zs("rtc");
function Qu(e, t = ns) {
  ha("ec", e, t);
}
const Yu = "components", Lr = Symbol.for("v-ndc");
function El(e) {
  return Nt(e) ? Xu(Yu, e, !1) || e : e || Lr;
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
      if (u && (u === t || u === ks(t) || u === da(ks(t))))
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
  return e && (e[t] || e[ks(t)] || e[da(ks(t))]);
}
function he(e, t, n, a) {
  let l;
  const r = n, c = st(e);
  if (c || Nt(e)) {
    const u = c && hn(e);
    let d = !1, f = !1;
    u && (d = !ws(e), f = Xs(e), e = va(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = t(
        d ? f ? zn(Es(e[v])) : Es(e[v]) : e[v],
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
function ms(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (st(a))
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
  if (Jt.ce || Jt.parent && Ln(Jt.parent) && Jt.parent.ce) {
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
      key: (u && !Is(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Nr(e) {
  return e.some((t) => Co(t) ? !(t.type === ss || t.type === W && !Nr(t.children)) : !0) ? e : null;
}
const sl = (e) => e ? ec(e) ? _a(e) : sl(e.parent) : null, vo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Bt(/* @__PURE__ */ Object.create(null), {
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
), Wa = (e, t) => e !== Et && !e.__isScriptSetup && _t(e, t), Zu = {
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
        if (l !== Et && _t(l, t))
          return c[t] = 2, l[t];
        if (_t(r, t))
          return c[t] = 3, r[t];
        if (n !== Et && _t(n, t))
          return c[t] = 4, n[t];
        nl && (c[t] = 0);
      }
    }
    const f = vo[t];
    let v, p;
    if (f)
      return t === "$attrs" && es(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[t])
    )
      return v;
    if (n !== Et && _t(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      p = d.config.globalProperties, _t(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: a, setupState: l, ctx: r } = e;
    return Wa(l, t) ? (l[t] = n, !0) : a !== Et && _t(a, t) ? (a[t] = n, !0) : _t(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Et && u[0] !== "$" && _t(e, u) || Wa(t, u) || _t(r, u) || _t(a, u) || _t(vo, u) || _t(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _t(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ti(e) {
  return st(e) ? e.reduce(
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
    render: O,
    renderTracked: U,
    renderTriggered: B,
    errorCaptured: R,
    serverPrefetch: A,
    // public API
    expose: Q,
    inheritAttrs: ae,
    // assets
    components: H,
    directives: ue,
    filters: q
  } = t;
  if (f && td(f, a, null), c)
    for (const pe in c) {
      const ne = c[pe];
      at(ne) && (a[pe] = ne.bind(n));
    }
  if (l) {
    const pe = l.call(n, n);
    xt(pe) && (e.data = bn(pe));
  }
  if (nl = !0, r)
    for (const pe in r) {
      const ne = r[pe], re = at(ne) ? ne.bind(n, n) : at(ne.get) ? ne.get.bind(n, n) : Fs, me = !at(ne) && at(ne.set) ? ne.set.bind(n) : Fs, J = M({
        get: re,
        set: me
      });
      Object.defineProperty(a, pe, {
        enumerable: !0,
        configurable: !0,
        get: () => J.value,
        set: (te) => J.value = te
      });
    }
  if (u)
    for (const pe in u)
      Ur(u[pe], a, n, pe);
  if (d) {
    const pe = at(d) ? d.call(n) : d;
    Reflect.ownKeys(pe).forEach((ne) => {
      id(ne, pe[ne]);
    });
  }
  v && si(v, e, "c");
  function j(pe, ne) {
    st(ne) ? ne.forEach((re) => pe(re.bind(n))) : ne && pe(ne.bind(n));
  }
  if (j(ju, p), j(dt, w), j(Hu, g), j(Dr, k), j(Vu, $), j(Wu, S), j(Qu, R), j(Ju, U), j(Ku, B), j(To, T), j(Wn, P), j(qu, A), st(Q))
    if (Q.length) {
      const pe = e.exposed || (e.exposed = {});
      Q.forEach((ne) => {
        Object.defineProperty(pe, ne, {
          get: () => n[ne],
          set: (re) => n[ne] = re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Fs && (e.render = O), ae != null && (e.inheritAttrs = ae), H && (e.components = H), ue && (e.directives = ue), A && Pr(e);
}
function td(e, t, n = Fs) {
  st(e) && (e = ol(e));
  for (const a in e) {
    const l = e[a];
    let r;
    xt(l) ? "default" in l ? r = Go(
      l.from || a,
      l.default,
      !0
    ) : r = Go(l.from || a) : r = Go(l), os(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function si(e, t, n) {
  Ts(
    st(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ur(e, t, n, a) {
  let l = a.includes(".") ? Fr(n, a) : () => n[a];
  if (Nt(e)) {
    const r = t[e];
    at(r) && bt(l, r);
  } else if (at(e))
    bt(l, e.bind(n));
  else if (xt(e))
    if (st(e))
      e.forEach((r) => Ur(r, t, n, a));
    else {
      const r = at(e.handler) ? e.handler.bind(n) : t[e.handler];
      at(r) && bt(l, r, e);
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
    (f) => sa(d, f, c, !0)
  ), sa(d, t, c)), xt(t) && r.set(t, d), d;
}
function sa(e, t, n, a = !1) {
  const { mixins: l, extends: r } = t;
  r && sa(e, r, n, !0), l && l.forEach(
    (c) => sa(e, c, n, !0)
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
  methods: ao,
  computed: ao,
  // lifecycle
  beforeCreate: ls,
  created: ls,
  beforeMount: ls,
  mounted: ls,
  beforeUpdate: ls,
  updated: ls,
  beforeDestroy: ls,
  beforeUnmount: ls,
  destroyed: ls,
  unmounted: ls,
  activated: ls,
  deactivated: ls,
  errorCaptured: ls,
  serverPrefetch: ls,
  // assets
  components: ao,
  directives: ao,
  // watch
  watch: od,
  // provide / inject
  provide: ni,
  inject: nd
};
function ni(e, t) {
  return t ? e ? function() {
    return Bt(
      at(e) ? e.call(this, this) : e,
      at(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function nd(e, t) {
  return ao(ol(e), ol(t));
}
function ol(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ls(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ao(e, t) {
  return e ? Bt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function oi(e, t) {
  return e ? st(e) && st(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Bt(
    /* @__PURE__ */ Object.create(null),
    ti(e),
    ti(t ?? {})
  ) : t;
}
function od(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Bt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = ls(e[a], t[a]);
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
    at(a) || (a = Bt({}, a)), l != null && !xt(l) && (l = null);
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
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, v, w), d = !0, f._container = v, v.__vue_app__ = f, _a(g.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (Ts(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, p) {
        return r.provides[v] = p, f;
      },
      runWithContext(v) {
        const p = Nn;
        Nn = f;
        try {
          return v();
        } finally {
          Nn = p;
        }
      }
    };
    return f;
  };
}
let Nn = null;
function id(e, t) {
  if (ns) {
    let n = ns.provides;
    const a = ns.parent && ns.parent.provides;
    a === n && (n = ns.provides = Object.create(a)), n[e] = t;
  }
}
function Go(e, t, n = !1) {
  const a = Dl();
  if (a || Nn) {
    let l = Nn ? Nn._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && at(t) ? t.call(a && a.proxy) : t;
  }
}
const rd = Symbol.for("v-scx"), cd = () => Go(rd);
function bt(e, t, n) {
  return zr(e, t, n);
}
function zr(e, t, n = Et) {
  const { immediate: a, deep: l, flush: r, once: c } = n, u = Bt({}, n), d = t && a || !t && r !== "post";
  let f;
  if (xo) {
    if (r === "sync") {
      const g = cd();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = Fs, g.resume = Fs, g.pause = Fs, g;
    }
  }
  const v = ns;
  u.call = (g, k, $) => Ts(g, v, k, $);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    is(g, v && v.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, k) => {
    k ? g() : Sl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const w = Nu(e, t, u);
  return xo && (f ? f.push(w) : d && w()), w;
}
function ud(e, t, n) {
  const a = this.proxy, l = Nt(e) ? e.includes(".") ? Fr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  at(t) ? r = t : (r = t.handler, n = t);
  const c = Mo(this), u = zr(l, r.bind(a), n);
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
const dd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ks(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
function md(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || Et;
  let l = n;
  const r = t.startsWith("update:"), c = r && dd(a, t.slice(7));
  c && (c.trim && (l = n.map((v) => Nt(v) ? v.trim() : v)), c.number && (l = n.map(ma)));
  let u, d = a[u = Oa(t)] || // also try camelCase event handler (#2249)
  a[u = Oa(ks(t))];
  !d && r && (d = a[u = Oa(cn(t))]), d && Ts(
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
    e.emitted[u] = !0, Ts(
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
      v && (u = !0, Bt(c, v));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (xt(e) && a.set(e, null), null) : (st(r) ? r.forEach((d) => c[d] = null) : Bt(c, r), xt(e) && a.set(e, c), c);
}
function ya(e, t) {
  return !e || !ca(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _t(e, t[0].toLowerCase() + t.slice(1)) || _t(e, cn(t)) || _t(e, t));
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
  } = e, S = ea(e);
  let x, T;
  try {
    if (n.shapeFlag & 4) {
      const P = l || a, O = P;
      x = As(
        f.call(
          O,
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
      x = As(
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
    po.length = 0, pa(P, e, 1), x = b(ss);
  }
  let I = x;
  if (T && $ !== !1) {
    const P = Object.keys(T), { shapeFlag: O } = I;
    P.length && O & 7 && (r && P.some(pl) && (T = pd(
      T,
      r
    )), I = ln(I, T, !1, !0));
  }
  return n.dirs && (I = ln(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && _n(I, n.transition), x = I, ea(S), x;
}
const vd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ca(n)) && ((t || (t = {}))[n] = e[n]);
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
        if (c[w] !== a[w] && !ya(f, w))
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
    if (t[r] !== e[r] && !ya(n, r))
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
  } = e, u = ht(l), [d] = e.propsOptions;
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
        if (ya(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (_t(r, w))
            g !== r[w] && (r[w] = g, f = !0);
          else {
            const k = ks(w);
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
      ((v = cn(p)) === p || !_t(t, v))) && (d ? n && // for camelCase
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
  f && Hs(e.attrs, "set", "");
}
function jr(e, t, n, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (ro(d))
        continue;
      const f = t[d];
      let v;
      l && _t(l, v = ks(d)) ? !r || !r.includes(v) ? n[v] = f : (u || (u = {}))[v] = f : ya(e.emitsOptions, d) || (!(d in a) || f !== a[d]) && (a[d] = f, c = !0);
    }
  if (r) {
    const d = ht(n), f = u || Et;
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
          const v = Mo(l);
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
    ] && (a === "" || a === cn(n)) && (a = !0));
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
      Bt(c, w), g && u.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return xt(e) && a.set(e, Pn), Pn;
  if (st(r))
    for (let v = 0; v < r.length; v++) {
      const p = ks(r[v]);
      ii(p) && (c[p] = Et);
    }
  else if (r)
    for (const v in r) {
      const p = ks(v);
      if (ii(p)) {
        const w = r[v], g = c[p] = st(w) || at(w) ? { type: w } : Bt({}, w), k = g.type;
        let $ = !1, S = !0;
        if (st(k))
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
  return e[0] !== "$" && !ro(e);
}
const Tl = (e) => e === "_" || e === "_ctx" || e === "$stable", Ml = (e) => st(e) ? e.map(As) : [As(e)], kd = (e, t, n) => {
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
  let r = !0, c = Et;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? r = !1 : Jr(l, t, n) : (r = !t.$stable, qr(t, l)), c = t;
  } else t && (Kr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !Tl(u) && c[u] == null && delete l[u];
}, is = Ed;
function Cd(e) {
  return xd(e);
}
function xd(e, t) {
  const n = fa();
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
    setScopeId: g = Fs,
    insertStaticContent: k
  } = e, $ = (E, F, ie, Ee = null, $e = null, Ce = null, Oe = void 0, ee = null, V = !!F.dynamicChildren) => {
    if (E === F)
      return;
    E && !pn(E, F) && (Ee = Le(E), te(E, $e, Ce, !0), E = null), F.patchFlag === -2 && (V = !1, F.dynamicChildren = null);
    const { type: de, ref: We, shapeFlag: Be } = F;
    switch (de) {
      case wa:
        S(E, F, ie, Ee);
        break;
      case ss:
        x(E, F, ie, Ee);
        break;
      case ja:
        E == null && T(F, ie, Ee, Oe);
        break;
      case W:
        H(
          E,
          F,
          ie,
          Ee,
          $e,
          Ce,
          Oe,
          ee,
          V
        );
        break;
      default:
        Be & 1 ? O(
          E,
          F,
          ie,
          Ee,
          $e,
          Ce,
          Oe,
          ee,
          V
        ) : Be & 6 ? ue(
          E,
          F,
          ie,
          Ee,
          $e,
          Ce,
          Oe,
          ee,
          V
        ) : (Be & 64 || Be & 128) && de.process(
          E,
          F,
          ie,
          Ee,
          $e,
          Ce,
          Oe,
          ee,
          V,
          ge
        );
    }
    We != null && $e ? fo(We, E && E.ref, Ce, F || E, !F) : We == null && E && E.ref != null && fo(E.ref, null, Ce, E, !0);
  }, S = (E, F, ie, Ee) => {
    if (E == null)
      a(
        F.el = u(F.children),
        ie,
        Ee
      );
    else {
      const $e = F.el = E.el;
      F.children !== E.children && f($e, F.children);
    }
  }, x = (E, F, ie, Ee) => {
    E == null ? a(
      F.el = d(F.children || ""),
      ie,
      Ee
    ) : F.el = E.el;
  }, T = (E, F, ie, Ee) => {
    [E.el, E.anchor] = k(
      E.children,
      F,
      ie,
      Ee,
      E.el,
      E.anchor
    );
  }, I = ({ el: E, anchor: F }, ie, Ee) => {
    let $e;
    for (; E && E !== F; )
      $e = w(E), a(E, ie, Ee), E = $e;
    a(F, ie, Ee);
  }, P = ({ el: E, anchor: F }) => {
    let ie;
    for (; E && E !== F; )
      ie = w(E), l(E), E = ie;
    l(F);
  }, O = (E, F, ie, Ee, $e, Ce, Oe, ee, V) => {
    if (F.type === "svg" ? Oe = "svg" : F.type === "math" && (Oe = "mathml"), E == null)
      U(
        F,
        ie,
        Ee,
        $e,
        Ce,
        Oe,
        ee,
        V
      );
    else {
      const de = E.el && E.el._isVueCE ? E.el : null;
      try {
        de && de._beginPatch(), A(
          E,
          F,
          $e,
          Ce,
          Oe,
          ee,
          V
        );
      } finally {
        de && de._endPatch();
      }
    }
  }, U = (E, F, ie, Ee, $e, Ce, Oe, ee) => {
    let V, de;
    const { props: We, shapeFlag: Be, transition: we, dirs: se } = E;
    if (V = E.el = c(
      E.type,
      Ce,
      We && We.is,
      We
    ), Be & 8 ? v(V, E.children) : Be & 16 && R(
      E.children,
      V,
      null,
      Ee,
      $e,
      Ga(E, Ce),
      Oe,
      ee
    ), se && un(E, null, Ee, "created"), B(V, E, E.scopeId, Oe, Ee), We) {
      for (const Ne in We)
        Ne !== "value" && !ro(Ne) && r(V, Ne, null, We[Ne], Ce, Ee);
      "value" in We && r(V, "value", null, We.value, Ce), (de = We.onVnodeBeforeMount) && Rs(de, Ee, E);
    }
    se && un(E, null, Ee, "beforeMount");
    const Ke = Sd($e, we);
    Ke && we.beforeEnter(V), a(V, F, ie), ((de = We && We.onVnodeMounted) || Ke || se) && is(() => {
      de && Rs(de, Ee, E), Ke && we.enter(V), se && un(E, null, Ee, "mounted");
    }, $e);
  }, B = (E, F, ie, Ee, $e) => {
    if (ie && g(E, ie), Ee)
      for (let Ce = 0; Ce < Ee.length; Ce++)
        g(E, Ee[Ce]);
    if ($e) {
      let Ce = $e.subTree;
      if (F === Ce || Yr(Ce.type) && (Ce.ssContent === F || Ce.ssFallback === F)) {
        const Oe = $e.vnode;
        B(
          E,
          Oe,
          Oe.scopeId,
          Oe.slotScopeIds,
          $e.parent
        );
      }
    }
  }, R = (E, F, ie, Ee, $e, Ce, Oe, ee, V = 0) => {
    for (let de = V; de < E.length; de++) {
      const We = E[de] = ee ? on(E[de]) : As(E[de]);
      $(
        null,
        We,
        F,
        ie,
        Ee,
        $e,
        Ce,
        Oe,
        ee
      );
    }
  }, A = (E, F, ie, Ee, $e, Ce, Oe) => {
    const ee = F.el = E.el;
    let { patchFlag: V, dynamicChildren: de, dirs: We } = F;
    V |= E.patchFlag & 16;
    const Be = E.props || Et, we = F.props || Et;
    let se;
    if (ie && dn(ie, !1), (se = we.onVnodeBeforeUpdate) && Rs(se, ie, F, E), We && un(F, E, ie, "beforeUpdate"), ie && dn(ie, !0), (Be.innerHTML && we.innerHTML == null || Be.textContent && we.textContent == null) && v(ee, ""), de ? Q(
      E.dynamicChildren,
      de,
      ee,
      ie,
      Ee,
      Ga(F, $e),
      Ce
    ) : Oe || ne(
      E,
      F,
      ee,
      null,
      ie,
      Ee,
      Ga(F, $e),
      Ce,
      !1
    ), V > 0) {
      if (V & 16)
        ae(ee, Be, we, ie, $e);
      else if (V & 2 && Be.class !== we.class && r(ee, "class", null, we.class, $e), V & 4 && r(ee, "style", Be.style, we.style, $e), V & 8) {
        const Ke = F.dynamicProps;
        for (let Ne = 0; Ne < Ke.length; Ne++) {
          const Xe = Ke[Ne], De = Be[Xe], Ae = we[Xe];
          (Ae !== De || Xe === "value") && r(ee, Xe, De, Ae, $e, ie);
        }
      }
      V & 1 && E.children !== F.children && v(ee, F.children);
    } else !Oe && de == null && ae(ee, Be, we, ie, $e);
    ((se = we.onVnodeUpdated) || We) && is(() => {
      se && Rs(se, ie, F, E), We && un(F, E, ie, "updated");
    }, Ee);
  }, Q = (E, F, ie, Ee, $e, Ce, Oe) => {
    for (let ee = 0; ee < F.length; ee++) {
      const V = E[ee], de = F[ee], We = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        V.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (V.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pn(V, de) || // - In the case of a component, it could contain anything.
        V.shapeFlag & 198) ? p(V.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ie
        )
      );
      $(
        V,
        de,
        We,
        null,
        Ee,
        $e,
        Ce,
        Oe,
        !0
      );
    }
  }, ae = (E, F, ie, Ee, $e) => {
    if (F !== ie) {
      if (F !== Et)
        for (const Ce in F)
          !ro(Ce) && !(Ce in ie) && r(
            E,
            Ce,
            F[Ce],
            null,
            $e,
            Ee
          );
      for (const Ce in ie) {
        if (ro(Ce)) continue;
        const Oe = ie[Ce], ee = F[Ce];
        Oe !== ee && Ce !== "value" && r(E, Ce, ee, Oe, $e, Ee);
      }
      "value" in ie && r(E, "value", F.value, ie.value, $e);
    }
  }, H = (E, F, ie, Ee, $e, Ce, Oe, ee, V) => {
    const de = F.el = E ? E.el : u(""), We = F.anchor = E ? E.anchor : u("");
    let { patchFlag: Be, dynamicChildren: we, slotScopeIds: se } = F;
    se && (ee = ee ? ee.concat(se) : se), E == null ? (a(de, ie, Ee), a(We, ie, Ee), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      F.children || [],
      ie,
      We,
      $e,
      Ce,
      Oe,
      ee,
      V
    )) : Be > 0 && Be & 64 && we && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (Q(
      E.dynamicChildren,
      we,
      ie,
      $e,
      Ce,
      Oe,
      ee
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (F.key != null || $e && F === $e.subTree) && Pl(
      E,
      F,
      !0
      /* shallow */
    )) : ne(
      E,
      F,
      ie,
      We,
      $e,
      Ce,
      Oe,
      ee,
      V
    );
  }, ue = (E, F, ie, Ee, $e, Ce, Oe, ee, V) => {
    F.slotScopeIds = ee, E == null ? F.shapeFlag & 512 ? $e.ctx.activate(
      F,
      ie,
      Ee,
      Oe,
      V
    ) : q(
      F,
      ie,
      Ee,
      $e,
      Ce,
      Oe,
      V
    ) : N(E, F, V);
  }, q = (E, F, ie, Ee, $e, Ce, Oe) => {
    const ee = E.component = Nd(
      E,
      Ee,
      $e
    );
    if (ga(E) && (ee.ctx.renderer = ge), Ud(ee, !1, Oe), ee.asyncDep) {
      if ($e && $e.registerDep(ee, j, Oe), !E.el) {
        const V = ee.subTree = b(ss);
        x(null, V, F, ie), E.placeholder = V.el;
      }
    } else
      j(
        ee,
        E,
        F,
        ie,
        $e,
        Ce,
        Oe
      );
  }, N = (E, F, ie) => {
    const Ee = F.component = E.component;
    if (gd(E, F, ie))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        pe(Ee, F, ie);
        return;
      } else
        Ee.next = F, Ee.update();
    else
      F.el = E.el, Ee.vnode = F;
  }, j = (E, F, ie, Ee, $e, Ce, Oe) => {
    const ee = () => {
      if (E.isMounted) {
        let { next: Be, bu: we, u: se, parent: Ke, vnode: Ne } = E;
        {
          const kt = Qr(E);
          if (kt) {
            Be && (Be.el = Ne.el, pe(E, Be, Oe)), kt.asyncDep.then(() => {
              E.isUnmounted || ee();
            });
            return;
          }
        }
        let Xe = Be, De;
        dn(E, !1), Be ? (Be.el = Ne.el, pe(E, Be, Oe)) : Be = Ne, we && Vo(we), (De = Be.props && Be.props.onVnodeBeforeUpdate) && Rs(De, Ke, Be, Ne), dn(E, !0);
        const Ae = ai(E), He = E.subTree;
        E.subTree = Ae, $(
          He,
          Ae,
          // parent may have changed if it's in a teleport
          p(He.el),
          // anchor may have changed if it's in a fragment
          Le(He),
          E,
          $e,
          Ce
        ), Be.el = Ae.el, Xe === null && hd(E, Ae.el), se && is(se, $e), (De = Be.props && Be.props.onVnodeUpdated) && is(
          () => Rs(De, Ke, Be, Ne),
          $e
        );
      } else {
        let Be;
        const { el: we, props: se } = F, { bm: Ke, m: Ne, parent: Xe, root: De, type: Ae } = E, He = Ln(F);
        dn(E, !1), Ke && Vo(Ke), !He && (Be = se && se.onVnodeBeforeMount) && Rs(Be, Xe, F), dn(E, !0);
        {
          De.ce && // @ts-expect-error _def is private
          De.ce._def.shadowRoot !== !1 && De.ce._injectChildStyle(Ae);
          const kt = E.subTree = ai(E);
          $(
            null,
            kt,
            ie,
            Ee,
            E,
            $e,
            Ce
          ), F.el = kt.el;
        }
        if (Ne && is(Ne, $e), !He && (Be = se && se.onVnodeMounted)) {
          const kt = F;
          is(
            () => Rs(Be, Xe, kt),
            $e
          );
        }
        (F.shapeFlag & 256 || Xe && Ln(Xe.vnode) && Xe.vnode.shapeFlag & 256) && E.a && is(E.a, $e), E.isMounted = !0, F = ie = Ee = null;
      }
    };
    E.scope.on();
    const V = E.effect = new sr(ee);
    E.scope.off();
    const de = E.update = V.run.bind(V), We = E.job = V.runIfDirty.bind(V);
    We.i = E, We.id = E.uid, V.scheduler = () => Sl(We), dn(E, !0), de();
  }, pe = (E, F, ie) => {
    F.component = E;
    const Ee = E.vnode.props;
    E.vnode = F, E.next = null, wd(E, F.props, Ee, ie), $d(E, F.children, ie), Qs(), Kl(E), Ys();
  }, ne = (E, F, ie, Ee, $e, Ce, Oe, ee, V = !1) => {
    const de = E && E.children, We = E ? E.shapeFlag : 0, Be = F.children, { patchFlag: we, shapeFlag: se } = F;
    if (we > 0) {
      if (we & 128) {
        me(
          de,
          Be,
          ie,
          Ee,
          $e,
          Ce,
          Oe,
          ee,
          V
        );
        return;
      } else if (we & 256) {
        re(
          de,
          Be,
          ie,
          Ee,
          $e,
          Ce,
          Oe,
          ee,
          V
        );
        return;
      }
    }
    se & 8 ? (We & 16 && Fe(de, $e, Ce), Be !== de && v(ie, Be)) : We & 16 ? se & 16 ? me(
      de,
      Be,
      ie,
      Ee,
      $e,
      Ce,
      Oe,
      ee,
      V
    ) : Fe(de, $e, Ce, !0) : (We & 8 && v(ie, ""), se & 16 && R(
      Be,
      ie,
      Ee,
      $e,
      Ce,
      Oe,
      ee,
      V
    ));
  }, re = (E, F, ie, Ee, $e, Ce, Oe, ee, V) => {
    E = E || Pn, F = F || Pn;
    const de = E.length, We = F.length, Be = Math.min(de, We);
    let we;
    for (we = 0; we < Be; we++) {
      const se = F[we] = V ? on(F[we]) : As(F[we]);
      $(
        E[we],
        se,
        ie,
        null,
        $e,
        Ce,
        Oe,
        ee,
        V
      );
    }
    de > We ? Fe(
      E,
      $e,
      Ce,
      !0,
      !1,
      Be
    ) : R(
      F,
      ie,
      Ee,
      $e,
      Ce,
      Oe,
      ee,
      V,
      Be
    );
  }, me = (E, F, ie, Ee, $e, Ce, Oe, ee, V) => {
    let de = 0;
    const We = F.length;
    let Be = E.length - 1, we = We - 1;
    for (; de <= Be && de <= we; ) {
      const se = E[de], Ke = F[de] = V ? on(F[de]) : As(F[de]);
      if (pn(se, Ke))
        $(
          se,
          Ke,
          ie,
          null,
          $e,
          Ce,
          Oe,
          ee,
          V
        );
      else
        break;
      de++;
    }
    for (; de <= Be && de <= we; ) {
      const se = E[Be], Ke = F[we] = V ? on(F[we]) : As(F[we]);
      if (pn(se, Ke))
        $(
          se,
          Ke,
          ie,
          null,
          $e,
          Ce,
          Oe,
          ee,
          V
        );
      else
        break;
      Be--, we--;
    }
    if (de > Be) {
      if (de <= we) {
        const se = we + 1, Ke = se < We ? F[se].el : Ee;
        for (; de <= we; )
          $(
            null,
            F[de] = V ? on(F[de]) : As(F[de]),
            ie,
            Ke,
            $e,
            Ce,
            Oe,
            ee,
            V
          ), de++;
      }
    } else if (de > we)
      for (; de <= Be; )
        te(E[de], $e, Ce, !0), de++;
    else {
      const se = de, Ke = de, Ne = /* @__PURE__ */ new Map();
      for (de = Ke; de <= we; de++) {
        const X = F[de] = V ? on(F[de]) : As(F[de]);
        X.key != null && Ne.set(X.key, de);
      }
      let Xe, De = 0;
      const Ae = we - Ke + 1;
      let He = !1, kt = 0;
      const Ut = new Array(Ae);
      for (de = 0; de < Ae; de++) Ut[de] = 0;
      for (de = se; de <= Be; de++) {
        const X = E[de];
        if (De >= Ae) {
          te(X, $e, Ce, !0);
          continue;
        }
        let Z;
        if (X.key != null)
          Z = Ne.get(X.key);
        else
          for (Xe = Ke; Xe <= we; Xe++)
            if (Ut[Xe - Ke] === 0 && pn(X, F[Xe])) {
              Z = Xe;
              break;
            }
        Z === void 0 ? te(X, $e, Ce, !0) : (Ut[Z - Ke] = de + 1, Z >= kt ? kt = Z : He = !0, $(
          X,
          F[Z],
          ie,
          null,
          $e,
          Ce,
          Oe,
          ee,
          V
        ), De++);
      }
      const Gt = He ? Id(Ut) : Pn;
      for (Xe = Gt.length - 1, de = Ae - 1; de >= 0; de--) {
        const X = Ke + de, Z = F[X], ve = F[X + 1], Qe = X + 1 < We ? (
          // #13559, fallback to el placeholder for unresolved async component
          ve.el || ve.placeholder
        ) : Ee;
        Ut[de] === 0 ? $(
          null,
          Z,
          ie,
          Qe,
          $e,
          Ce,
          Oe,
          ee,
          V
        ) : He && (Xe < 0 || de !== Gt[Xe] ? J(Z, ie, Qe, 2) : Xe--);
      }
    }
  }, J = (E, F, ie, Ee, $e = null) => {
    const { el: Ce, type: Oe, transition: ee, children: V, shapeFlag: de } = E;
    if (de & 6) {
      J(E.component.subTree, F, ie, Ee);
      return;
    }
    if (de & 128) {
      E.suspense.move(F, ie, Ee);
      return;
    }
    if (de & 64) {
      Oe.move(E, F, ie, ge);
      return;
    }
    if (Oe === W) {
      a(Ce, F, ie);
      for (let Be = 0; Be < V.length; Be++)
        J(V[Be], F, ie, Ee);
      a(E.anchor, F, ie);
      return;
    }
    if (Oe === ja) {
      I(E, F, ie);
      return;
    }
    if (Ee !== 2 && de & 1 && ee)
      if (Ee === 0)
        ee.beforeEnter(Ce), a(Ce, F, ie), is(() => ee.enter(Ce), $e);
      else {
        const { leave: Be, delayLeave: we, afterLeave: se } = ee, Ke = () => {
          E.ctx.isUnmounted ? l(Ce) : a(Ce, F, ie);
        }, Ne = () => {
          Ce._isLeaving && Ce[js](
            !0
            /* cancelled */
          ), Be(Ce, () => {
            Ke(), se && se();
          });
        };
        we ? we(Ce, Ke, Ne) : Ne();
      }
    else
      a(Ce, F, ie);
  }, te = (E, F, ie, Ee = !1, $e = !1) => {
    const {
      type: Ce,
      props: Oe,
      ref: ee,
      children: V,
      dynamicChildren: de,
      shapeFlag: We,
      patchFlag: Be,
      dirs: we,
      cacheIndex: se
    } = E;
    if (Be === -2 && ($e = !1), ee != null && (Qs(), fo(ee, null, ie, E, !0), Ys()), se != null && (F.renderCache[se] = void 0), We & 256) {
      F.ctx.deactivate(E);
      return;
    }
    const Ke = We & 1 && we, Ne = !Ln(E);
    let Xe;
    if (Ne && (Xe = Oe && Oe.onVnodeBeforeUnmount) && Rs(Xe, F, E), We & 6)
      ye(E.component, ie, Ee);
    else {
      if (We & 128) {
        E.suspense.unmount(ie, Ee);
        return;
      }
      Ke && un(E, null, F, "beforeUnmount"), We & 64 ? E.type.remove(
        E,
        F,
        ie,
        ge,
        Ee
      ) : de && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !de.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Ce !== W || Be > 0 && Be & 64) ? Fe(
        de,
        F,
        ie,
        !1,
        !0
      ) : (Ce === W && Be & 384 || !$e && We & 16) && Fe(V, F, ie), Ee && le(E);
    }
    (Ne && (Xe = Oe && Oe.onVnodeUnmounted) || Ke) && is(() => {
      Xe && Rs(Xe, F, E), Ke && un(E, null, F, "unmounted");
    }, ie);
  }, le = (E) => {
    const { type: F, el: ie, anchor: Ee, transition: $e } = E;
    if (F === W) {
      xe(ie, Ee);
      return;
    }
    if (F === ja) {
      P(E);
      return;
    }
    const Ce = () => {
      l(ie), $e && !$e.persisted && $e.afterLeave && $e.afterLeave();
    };
    if (E.shapeFlag & 1 && $e && !$e.persisted) {
      const { leave: Oe, delayLeave: ee } = $e, V = () => Oe(ie, Ce);
      ee ? ee(E.el, Ce, V) : V();
    } else
      Ce();
  }, xe = (E, F) => {
    let ie;
    for (; E !== F; )
      ie = w(E), l(E), E = ie;
    l(F);
  }, ye = (E, F, ie) => {
    const { bum: Ee, scope: $e, job: Ce, subTree: Oe, um: ee, m: V, a: de } = E;
    ri(V), ri(de), Ee && Vo(Ee), $e.stop(), Ce && (Ce.flags |= 8, te(Oe, E, F, ie)), ee && is(ee, F), is(() => {
      E.isUnmounted = !0;
    }, F);
  }, Fe = (E, F, ie, Ee = !1, $e = !1, Ce = 0) => {
    for (let Oe = Ce; Oe < E.length; Oe++)
      te(E[Oe], F, ie, Ee, $e);
  }, Le = (E) => {
    if (E.shapeFlag & 6)
      return Le(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const F = w(E.anchor || E.el), ie = F && F[br];
    return ie ? w(ie) : F;
  };
  let _e = !1;
  const Pe = (E, F, ie) => {
    E == null ? F._vnode && te(F._vnode, null, null, !0) : $(
      F._vnode || null,
      E,
      F,
      null,
      null,
      null,
      ie
    ), F._vnode = E, _e || (_e = !0, Kl(), wr(), _e = !1);
  }, ge = {
    p: $,
    um: te,
    m: J,
    r: le,
    mt: q,
    mc: R,
    pc: ne,
    pbc: Q,
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
function dn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Sd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pl(e, t, n = !1) {
  const a = e.children, l = t.children;
  if (st(a) && st(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = on(l[r]), u.el = c.el), !n && u.patchFlag !== -2 && Pl(c, u)), u.type === wa && // avoid cached text nodes retaining detached dom nodes
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
  t && t.pendingBranch ? st(e) ? t.effects.push(...e) : t.effects.push(e) : Au(e);
}
const W = Symbol.for("v-fgt"), wa = Symbol.for("v-txt"), ss = Symbol.for("v-cmt"), ja = Symbol.for("v-stc"), po = [];
let gs = null;
function o(e = !1) {
  po.push(gs = e ? null : []);
}
function Td() {
  po.pop(), gs = po[po.length - 1] || null;
}
let $o = 1;
function na(e, t = !1) {
  $o += e, e < 0 && gs && t && (gs.hasOnce = !0);
}
function Xr(e) {
  return e.dynamicChildren = $o > 0 ? gs || Pn : null, Td(), $o > 0 && gs && gs.push(e), e;
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
function Co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zr = ({ key: e }) => e ?? null, jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Nt(e) || os(e) || at(e) ? { i: Jt, r: e, k: t, f: !!n } : e : null);
function s(e, t = null, n = null, a = 0, l = null, r = e === W ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zr(t),
    ref: t && jo(t),
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
  return u ? (Rl(d, n), r & 128 && e.normalize(d)) : n && (d.shapeFlag |= Nt(n) ? 8 : 16), $o > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  gs && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && gs.push(d), d;
}
const b = Md;
function Md(e, t = null, n = null, a = 0, l = null, r = !1) {
  if ((!e || e === Lr) && (e = ss), Co(e)) {
    const u = ln(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Rl(u, n), $o > 0 && !r && gs && (u.shapeFlag & 6 ? gs[gs.indexOf(e)] = u : gs.push(u)), u.patchFlag = -2, u;
  }
  if (Bd(e) && (e = e.__vccOpts), t) {
    t = Pd(t);
    let { class: u, style: d } = t;
    u && !Nt(u) && (t.class = Ve(u)), xt(d) && (xl(d) && !st(d) && (d = Bt({}, d)), t.style = Wt(d));
  }
  const c = Nt(e) ? 1 : Yr(e) ? 128 : $r(e) ? 64 : xt(e) ? 4 : at(e) ? 2 : 0;
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
  return e ? xl(e) || Gr(e) ? Bt({}, e) : e : null;
}
function ln(e, t, n = !1, a = !1) {
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
      n && r ? st(r) ? r.concat(jo(t)) : [r, jo(t)] : jo(t)
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
    ssContent: e.ssContent && ln(e.ssContent),
    ssFallback: e.ssFallback && ln(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && _n(
    v,
    d.clone(v)
  ), v;
}
function C(e = " ", t = 0) {
  return b(wa, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (o(), D(ss, null, e)) : b(ss, null, e);
}
function As(e) {
  return e == null || typeof e == "boolean" ? b(ss) : st(e) ? b(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Co(e) ? on(e) : b(wa, null, String(e));
}
function on(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ln(e);
}
function Rl(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (st(t))
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
      else if (ca(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(st(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Rs(e, t, n, a = null) {
  Ts(e, t, 7, [
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
    propsDefaults: Et,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: Et,
    data: Et,
    props: Et,
    attrs: Et,
    slots: Et,
    refs: Et,
    setupState: Et,
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
let oa, ll;
{
  const e = fa(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  oa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ns = n
  ), ll = t(
    "__VUE_SSR_SETTERS__",
    (n) => xo = n
  );
}
const Mo = (e) => {
  const t = ns;
  return oa(e), e.scope.on(), () => {
    e.scope.off(), oa(t);
  };
}, ci = () => {
  ns && ns.scope.off(), oa(null);
};
function ec(e) {
  return e.vnode.shapeFlag & 4;
}
let xo = !1;
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
    Qs();
    const l = e.setupContext = a.length > 1 ? zd(e) : null, r = Mo(e), c = Eo(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ji(c);
    if (Ys(), r(), (u || e.sp) && !Ln(e) && Pr(e), u) {
      if (c.then(ci, ci), t)
        return c.then((d) => {
          ui(e, d);
        }).catch((d) => {
          pa(d, e, 0);
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
  e.render || (e.render = a.render || Fs);
  {
    const l = Mo(e);
    Qs();
    try {
      ed(e);
    } finally {
      Ys(), l();
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
function _a(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gr(Eu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in vo)
        return vo[n](e);
    },
    has(t, n) {
      return n in t || n in vo;
    }
  })) : e.proxy;
}
function Fd(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Bd(e) {
  return at(e) && "__vccOpts" in e;
}
const M = (e, t) => Du(e, t, xo);
function Gn(e, t, n) {
  try {
    na(-1);
    const a = arguments.length;
    return a === 2 ? xt(t) && !st(t) ? Co(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Co(n) && (n = [n]), b(e, t, n));
  } finally {
    na(1);
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
const sc = il ? (e) => il.createHTML(e) : (e) => e, Wd = "http://www.w3.org/2000/svg", Gd = "http://www.w3.org/1998/Math/MathML", Gs = typeof document < "u" ? document : null, mi = Gs && /* @__PURE__ */ Gs.createElement("template"), jd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const l = t === "svg" ? Gs.createElementNS(Wd, e) : t === "mathml" ? Gs.createElementNS(Gd, e) : n ? Gs.createElement(e, { is: n }) : Gs.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Gs.createTextNode(e),
  createComment: (e) => Gs.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Gs.querySelector(e),
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
}, en = "transition", Yn = "animation", Fn = Symbol("_vtc"), nc = {
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
}, oc = /* @__PURE__ */ Bt(
  {},
  Ir,
  nc
), Hd = (e) => (e.displayName = "Transition", e.props = oc, e), qd = /* @__PURE__ */ Hd(
  (e, { slots: t }) => Gn(Bu, ac(e), t)
), mn = (e, t = []) => {
  st(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, fi = (e) => e ? st(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ac(e) {
  const t = {};
  for (const H in e)
    H in nc || (t[H] = e[H]);
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
    onLeaveCancelled: O,
    onBeforeAppear: U = x,
    onAppear: B = T,
    onAppearCancelled: R = I
  } = t, A = (H, ue, q, N) => {
    H._enterCancelled = N, tn(H, ue ? v : u), tn(H, ue ? f : c), q && q();
  }, Q = (H, ue) => {
    H._isLeaving = !1, tn(H, p), tn(H, g), tn(H, w), ue && ue();
  }, ae = (H) => (ue, q) => {
    const N = H ? B : T, j = () => A(ue, H, q);
    mn(N, [ue, j]), vi(() => {
      tn(ue, H ? d : r), Ls(ue, H ? v : u), fi(N) || pi(ue, a, $, j);
    });
  };
  return Bt(t, {
    onBeforeEnter(H) {
      mn(x, [H]), Ls(H, r), Ls(H, c);
    },
    onBeforeAppear(H) {
      mn(U, [H]), Ls(H, d), Ls(H, f);
    },
    onEnter: ae(!1),
    onAppear: ae(!0),
    onLeave(H, ue) {
      H._isLeaving = !0;
      const q = () => Q(H, ue);
      Ls(H, p), H._enterCancelled ? (Ls(H, w), rl(H)) : (rl(H), Ls(H, w)), vi(() => {
        H._isLeaving && (tn(H, p), Ls(H, g), fi(P) || pi(H, a, S, q));
      }), mn(P, [H, q]);
    },
    onEnterCancelled(H) {
      A(H, !1, void 0, !0), mn(I, [H]);
    },
    onAppearCancelled(H) {
      A(H, !0, void 0, !0), mn(R, [H]);
    },
    onLeaveCancelled(H) {
      Q(H), mn(O, [H]);
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
function Ls(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Fn] || (e[Fn] = /* @__PURE__ */ new Set())).add(t);
}
function tn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Fn];
  n && (n.delete(t), n.size || (e[Fn] = void 0));
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
  const n = window.getComputedStyle(e), a = (k) => (n[k] || "").split(", "), l = a(`${en}Delay`), r = a(`${en}Duration`), c = gi(l, r), u = a(`${Yn}Delay`), d = a(`${Yn}Duration`), f = gi(u, d);
  let v = null, p = 0, w = 0;
  t === en ? c > 0 && (v = en, p = c, w = r.length) : t === Yn ? f > 0 && (v = Yn, p = f, w = d.length) : (p = Math.max(c, f), v = p > 0 ? c > f ? en : Yn : null, w = v ? v === en ? r.length : d.length : 0);
  const g = v === en && /\b(?:transform|all)(?:,|$)/.test(
    a(`${en}Property`).toString()
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
  const a = e[Fn];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yi = Symbol("_vod"), Yd = Symbol("_vsh"), Xd = Symbol(""), Zd = /(?:^|;)\s*display\s*:/;
function em(e, t, n) {
  const a = e.style, l = Nt(n);
  let r = !1;
  if (n && !l) {
    if (t)
      if (Nt(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && Ho(a, u, "");
        }
      else
        for (const c in t)
          n[c] == null && Ho(a, c, "");
    for (const c in n)
      c === "display" && (r = !0), Ho(a, c, n[c]);
  } else if (l) {
    if (t !== n) {
      const c = a[Xd];
      c && (n += ";" + c), a.cssText = n, r = Zd.test(n);
    }
  } else t && e.removeAttribute("style");
  yi in e && (e[yi] = r ? a.display : "", e[Yd] && (a.display = "none"));
}
const wi = /\s*!important$/;
function Ho(e, t, n) {
  if (st(n))
    n.forEach((a) => Ho(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = tm(e, t);
    wi.test(n) ? e.setProperty(
      cn(a),
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
  let a = ks(t);
  if (a !== "filter" && a in e)
    return qa[t] = a;
  a = da(a);
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
    r ? "" : Is(n) ? String(n) : n
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
function Ks(e, t, n, a) {
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
      Ks(e, u, f, d);
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
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let Ka = 0;
const am = /* @__PURE__ */ Promise.resolve(), lm = () => Ka || (am.then(() => Ka = 0), Ka = Date.now());
function im(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    Ts(
      rm(a, n.value),
      t,
      5,
      [a]
    );
  };
  return n.value = e, n.attached = lm(), n;
}
function rm(e, t) {
  if (st(t)) {
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
  t === "class" ? Qd(e, a, c) : t === "style" ? em(e, n, a) : ca(t) ? pl(t) || nm(e, t, n, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : um(e, t, a, c)) ? ($i(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bi(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Nt(a)) ? $i(e, ks(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), bi(e, t, a, c));
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
  return Si(t) && Nt(n) ? !1 : t in e;
}
const ic = /* @__PURE__ */ new WeakMap(), rc = /* @__PURE__ */ new WeakMap(), aa = Symbol("_moveCb"), Ii = Symbol("_enterCb"), dm = (e) => (delete e.props.mode, e), mm = /* @__PURE__ */ dm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Bt({}, oc, {
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
        Ls(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = f[aa] = (w) => {
          w && w.target !== f || (!w || w.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[aa] = null, tn(f, c));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ht(e), u = ac(c);
      let d = c.tag || W;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), _n(
            v,
            bo(
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
        v.key != null && _n(
          v,
          bo(v, u, a, n)
        );
      }
      return b(d, null, r);
    };
  }
}), fm = mm;
function vm(e) {
  const t = e.el;
  t[aa] && t[aa](), t[Ii] && t[Ii]();
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
  const a = e.cloneNode(), l = e[Fn];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), n.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = lc(a);
  return r.removeChild(a), c;
}
const rn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return st(t) ? (n) => Vo(t, n) : t;
};
function ym(e) {
  e.target.composing = !0;
}
function Ei(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const _s = Symbol("_assign");
function Ti(e, t, n) {
  return t && (e = e.trim()), n && (e = ma(e)), e;
}
const go = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
    e[_s] = rn(l);
    const r = a || l.props && l.props.type === "number";
    Ks(e, t ? "change" : "input", (c) => {
      c.target.composing || e[_s](Ti(e.value, n, r));
    }), (n || r) && Ks(e, "change", () => {
      e.value = Ti(e.value, n, r);
    }), t || (Ks(e, "compositionstart", ym), Ks(e, "compositionend", Ei), Ks(e, "change", Ei));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[_s] = rn(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ma(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === d) || (e.value = d));
  }
}, la = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[_s] = rn(n), Ks(e, "change", () => {
      const a = e._modelValue, l = Bn(e), r = e.checked, c = e[_s];
      if (st(a)) {
        const u = yl(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const f = [...a];
          f.splice(u, 1), c(f);
        }
      } else if (Vn(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(cc(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Mi,
  beforeUpdate(e, t, n) {
    e[_s] = rn(n), Mi(e, t, n);
  }
};
function Mi(e, { value: t, oldValue: n }, a) {
  e._modelValue = t;
  let l;
  if (st(t))
    l = yl(t, a.props.value) > -1;
  else if (Vn(t))
    l = t.has(a.props.value);
  else {
    if (t === n) return;
    l = wn(t, cc(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const qo = {
  created(e, { value: t }, n) {
    e.checked = wn(t, n.props.value), e[_s] = rn(n), Ks(e, "change", () => {
      e[_s](Bn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, a) {
    e[_s] = rn(a), t !== n && (e.checked = wn(t, a.props.value));
  }
}, Un = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, a) {
    const l = Vn(t);
    Ks(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? ma(Bn(c)) : Bn(c)
      );
      e[_s](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Kt(() => {
        e._assigning = !1;
      });
    }), e[_s] = rn(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Pi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[_s] = rn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Pi(e, t);
  }
};
function Pi(e, t) {
  const n = e.multiple, a = st(t);
  if (!(n && !a && !Vn(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Bn(c);
      if (n)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((f) => String(f) === String(u)) : c.selected = yl(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (wn(Bn(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Bn(e) {
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
}, $t = (e, t) => {
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
}, Ss = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return n[a] || (n[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = cn(l.key);
    if (t.some(
      (c) => c === r || km[c] === r
    ))
      return e(l);
  }));
}, bm = /* @__PURE__ */ Bt({ patchProp: cm }, jd);
let Ri;
function $m() {
  return Ri || (Ri = Cd(bm));
}
const Po = ((...e) => {
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
  return Nt(e) ? document.querySelector(e) : e;
}
const zD = bn({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const FD = [
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
], BD = {
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
], VD = [
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
function Xn() {
  return !1;
}
function Im(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function jn() {
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
async function Js(e, t) {
  const n = jn();
  if (!n)
    throw new Error("ComfyUI API not available");
  return n.fetchApi(e, t);
}
function Em(e = "comfygit-panel") {
  const t = jn();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class cl extends Error {
  constructor(n, a, l, r) {
    super(n);
    Lo(this, "status");
    Lo(this, "data");
    Lo(this, "endpoint");
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
  async function n(z, Se) {
    const je = await Js(z, Se), wt = await je.text();
    if (!je.ok) {
      let zt = {};
      if (wt)
        try {
          const fs = JSON.parse(wt);
          fs && typeof fs == "object" && (zt = fs);
        } catch {
          zt = { error: wt };
        }
      const Ps = zt.error || zt.message || zt.detail || je.statusText || `Request failed: ${je.status}`;
      throw new cl(String(Ps), je.status, zt, z);
    }
    if (wt)
      return JSON.parse(wt);
  }
  async function a(z) {
    return n(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(z)}`);
  }
  async function l(z, Se, je) {
    return n("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: Se, password: je })
    });
  }
  async function r(z, Se, je) {
    return n("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: Se, password: je })
    });
  }
  async function c(z, Se) {
    return n(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${Se}` }
    });
  }
  async function u(z, Se) {
    return n("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, refresh_token: Se || null })
    });
  }
  async function d(z, Se) {
    return n(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${Se}` }
    });
  }
  async function f(z, Se, je) {
    return n(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(Se)}/revisions?cloud_url=${encodeURIComponent(z)}`,
      {
        headers: { Authorization: `Bearer ${je}` }
      }
    );
  }
  async function v(z, Se, je, wt) {
    return n("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Se}`
      },
      body: JSON.stringify({
        cloud_url: z,
        source_message: je || null,
        cloud_environment_id: wt || null
      })
    });
  }
  async function p(z = !1) {
    return n(z ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(z, Se = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: z, allow_issues: Se })
    });
  }
  async function g(z = 10, Se = 0) {
    return n(`/v2/comfygit/log?limit=${z}&offset=${Se}`);
  }
  async function k(z, Se = 50, je = 0) {
    return n(`/v2/comfygit/log?branch=${encodeURIComponent(z)}&limit=${Se}&offset=${je}`);
  }
  async function $(z) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
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
  async function T(z) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z, force: !0 })
    });
  }
  async function I(z) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(z)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function P(z, Se) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(z)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Se, force: !0 })
    });
  }
  async function O() {
    return n("/v2/comfygit/branches");
  }
  async function U(z) {
    return n(`/v2/comfygit/commit/${z}`);
  }
  async function B(z, Se = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: z, force: Se })
    });
  }
  async function R(z, Se = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, start_point: Se })
    });
  }
  async function A(z, Se = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: Se })
    });
  }
  async function Q() {
    return n("/v2/comfygit/revert-changes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function ae(z, Se = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Se })
    });
  }
  async function H() {
    try {
      return await n("/v2/comfygit/environments");
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
  async function ue() {
    return (await H()).environments;
  }
  async function q(z) {
    try {
      return await n(`/v2/comfygit/environments/${encodeURIComponent(z)}`);
    } catch {
      return null;
    }
  }
  async function N(z, Se) {
    const je = { target_env: z };
    return Se && (je.workspace_path = Se), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(je)
    });
  }
  async function j() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function pe(z) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function ne() {
    return n("/v2/workspace/environments/create_status");
  }
  async function re(z = 100) {
    return n(`/v2/workspace/comfyui_releases?limit=${z}`);
  }
  async function me(z) {
    return n(`/v2/workspace/environments/${z}`, {
      method: "DELETE"
    });
  }
  async function J(z = !1) {
    try {
      return n(z ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Se = await p(z), je = [];
      return Se.workflows.new.forEach((wt) => {
        je.push({
          name: wt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), Se.workflows.modified.forEach((wt) => {
        je.push({
          name: wt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), Se.workflows.synced.forEach((wt) => {
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
  async function te(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/details`);
  }
  async function le(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`);
  }
  async function xe(z, Se) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Se)
    });
  }
  async function ye(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "DELETE"
    });
  }
  async function Fe(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/resolve`, {
      method: "POST"
    });
  }
  async function Le(z, Se, je) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Se, install_models: je })
    });
  }
  async function _e(z, Se, je) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Se, importance: je })
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
  async function ke(z) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(z)}`);
  }
  async function E(z) {
    return n(`/v2/workspace/models/${encodeURIComponent(z)}/source-candidates`);
  }
  async function F(z) {
    return n(`/v2/workspace/models/${encodeURIComponent(z)}/hashes`, {
      method: "POST"
    });
  }
  async function ie() {
    return n("/v2/workspace/models/workflow-source-candidates");
  }
  async function Ee(z) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function $e(z, Se) {
    return n(`/v2/workspace/models/${z}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Se })
    });
  }
  async function Ce(z) {
    return n("/v2/comfygit/models/sources/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Oe(z, Se) {
    return n(`/v2/workspace/models/${z}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Se })
    });
  }
  async function ee(z) {
    return n(`/v2/workspace/models/${z}`, {
      method: "DELETE"
    });
  }
  async function V(z) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function de() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function We() {
    return n("/v2/workspace/models/directory");
  }
  async function Be(z) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function we(z) {
    const Se = new URLSearchParams({ url: z });
    return n(`/v2/workspace/huggingface/repo-info?${Se}`);
  }
  async function se() {
    return n("/v2/workspace/models/subdirectories");
  }
  async function Ke(z, Se = 10) {
    const je = new URLSearchParams({ query: z, limit: String(Se) });
    return n(`/v2/workspace/huggingface/search?${je}`);
  }
  async function Ne(z) {
    try {
      const Se = z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(z)}` : "/v2/comfygit/config";
      return n(Se);
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
  async function Xe(z, Se) {
    const je = Se ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Se)}` : "/v2/comfygit/config";
    return n(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function De(z, Se) {
    try {
      const je = new URLSearchParams();
      return z && je.append("level", z), Se && je.append("lines", Se.toString()), n(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Ae(z, Se) {
    try {
      const je = new URLSearchParams();
      return z && je.append("level", z), Se && je.append("lines", Se.toString()), n(`/v2/workspace/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function He() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function kt() {
    return n("/v2/comfygit/debug/manifest");
  }
  async function Ut() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Gt(z, Se) {
    try {
      const je = new URLSearchParams();
      return z && je.append("level", z), Se && je.append("lines", Se.toString()), n(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function X() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Z(z) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function ve() {
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
  async function Qe(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/track-dev`, {
      method: "POST"
    });
  }
  async function Re(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/install`, {
      method: "POST"
    });
  }
  async function lt(z, Se) {
    var ot, Ua, Vl, Wl;
    const je = Tm(), wt = Em(), zt = {
      id: z.id,
      version: z.version || z.selected_version || "latest",
      selected_version: z.selected_version || "latest",
      mode: z.mode || "remote",
      channel: z.channel || "default"
    };
    z.install_source && (zt.install_source = z.install_source), z.install_source === "git" && z.repository && (zt.repository = z.repository), await n("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: zt,
        ui_id: je,
        client_id: wt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", z.id), Se != null && Se.beforeQueueStart && await Se.beforeQueueStart(je), await n("/v2/manager/queue/start", {
      method: "POST"
    });
    const fs = await n("/v2/manager/queue/history"), Ht = (ot = fs == null ? void 0 : fs.history) == null ? void 0 : ot[je];
    if ((Ht == null ? void 0 : Ht.result) === "error" || ((Ua = Ht == null ? void 0 : Ht.status) == null ? void 0 : Ua.status_str) === "error") {
      const Hc = ((Wl = (Vl = Ht.status) == null ? void 0 : Vl.messages) == null ? void 0 : Wl[0]) || `Failed to install ${z.id}`;
      throw new cl(Hc, 500, Ht.status || {}, "/v2/manager/queue/start");
    }
    return {
      ui_id: je,
      result: Ht == null ? void 0 : Ht.result,
      status: Ht == null ? void 0 : Ht.status
    };
  }
  async function et(z) {
    return n("/v2/comfygit/nodes/dependency-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function pt(z) {
    return n("/v2/comfygit/nodes/dependency-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Rt(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/update`, {
      method: "POST"
    });
  }
  async function Ye(z, Se) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: Se })
    });
  }
  async function Ct(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}`, {
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
  async function as(z, Se) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, url: Se })
    });
  }
  async function K(z) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function fe(z, Se, je) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Se, push_url: je })
    });
  }
  async function ze(z, Se) {
    const je = {};
    return Se && (je["X-Git-Auth-Token"] = Se), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function be(z) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/status`);
    } catch {
      return null;
    }
  }
  async function Ge(z = "skip", Se = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: z,
        remove_extra_nodes: Se
      })
    });
  }
  async function Ze(z, Se) {
    const je = Se ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview?branch=${encodeURIComponent(Se)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview`;
    return n(je);
  }
  async function ct(z, Se = {}) {
    const je = { "Content-Type": "application/json" };
    return Se.authToken && (je["X-Git-Auth-Token"] = Se.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: Se.modelStrategy || "skip",
        force: Se.force || !1,
        resolutions: Se.resolutions
      })
    });
  }
  async function ut(z, Se) {
    const je = Se ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview?branch=${encodeURIComponent(Se)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview`;
    return n(je);
  }
  async function St(z, Se = {}) {
    const je = { "Content-Type": "application/json" };
    return Se.authToken && (je["X-Git-Auth-Token"] = Se.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: Se.force || !1 })
    });
  }
  async function Y(z, Se) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Se })
    });
  }
  async function L(z) {
    const Se = {
      success: 0,
      failed: []
    };
    for (const je of z)
      try {
        await Fe(je), Se.success++;
      } catch (wt) {
        Se.failed.push({
          name: je,
          error: wt instanceof Error ? wt.message : "Unknown error"
        });
      }
    return Se;
  }
  async function ce(z) {
    const Se = new FormData();
    Se.append("file", z);
    const je = await Js("/v2/workspace/import/preview", {
      method: "POST",
      body: Se
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!je.ok) {
      const wt = await je.json().catch(() => ({}));
      throw new Error(wt.error || `Preview failed: ${je.status}`);
    }
    return je.json();
  }
  async function Je(z) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(z)}`
    );
  }
  async function tt(z, Se, je, wt) {
    const zt = new FormData();
    zt.append("file", z), zt.append("name", Se), zt.append("model_strategy", je), zt.append("torch_backend", wt);
    const Ps = await Js("/v2/workspace/import", {
      method: "POST",
      body: zt
    });
    if (!Ps.ok) {
      const fs = await Ps.json().catch(() => ({}));
      throw new Error(fs.message || fs.error || `Import failed: ${Ps.status}`);
    }
    return Ps.json();
  }
  async function mt() {
    return n("/v2/workspace/import/status");
  }
  async function At(z) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: z })
    });
  }
  async function $s(z, Se, je, wt) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: z,
        name: Se,
        model_strategy: je,
        torch_backend: wt
      })
    });
  }
  async function Zt() {
    return n("/v2/setup/status");
  }
  async function gt() {
    return n("/v2/comfygit/update-check");
  }
  async function Cs() {
    return n("/v2/comfygit/update", { method: "POST" });
  }
  async function Lt(z) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function qn() {
    return n("/v2/setup/initialize_status");
  }
  async function Vt(z) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function $n() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Kn() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ba(z, Se) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: z, save_key: Se })
    });
  }
  async function $a() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Ca(z) {
    const Se = z ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(z)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(Se);
  }
  async function xa(z) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Ro() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function Sa(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Ia(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/stop`, {
      method: "POST"
    });
  }
  async function Ea(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/start`, {
      method: "POST"
    });
  }
  async function Ta(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/status`);
  }
  async function Ma(z) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function Pa(z = !1) {
    return n(z ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ra() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Da() {
    return n("/v2/comfygit/deploy/custom/workers");
  }
  async function Do(z) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function La(z) {
    return n(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Na(z) {
    return n("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Jn() {
    return n("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function oe(z) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/info`);
  }
  async function G(z) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`);
  }
  async function qe(z, Se) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Se)
    });
  }
  async function nt(z, Se) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(Se)}/start`, {
      method: "POST"
    });
  }
  async function yt(z, Se) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(Se)}/stop`, {
      method: "POST"
    });
  }
  async function It(z, Se) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(Se)}`, {
      method: "DELETE"
    });
  }
  async function jt(z) {
    return n("/v2/comfygit/deploy/test-git-auth", {
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
    getBranchHistory: k,
    exportEnv: $,
    validateExport: S,
    validateDeploy: x,
    exportEnvWithForce: T,
    validateEnvironmentExport: I,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: O,
    getCommitDetail: U,
    checkout: B,
    createBranch: R,
    switchBranch: A,
    revertChanges: Q,
    deleteBranch: ae,
    // Environment Management
    listEnvironments: H,
    getEnvironments: ue,
    getEnvironmentDetails: q,
    switchEnvironment: N,
    getSwitchProgress: j,
    createEnvironment: pe,
    getCreateProgress: ne,
    getComfyUIReleases: re,
    deleteEnvironment: me,
    // Workflow Management
    getWorkflows: J,
    getWorkflowDetails: te,
    getWorkflowContract: le,
    saveWorkflowContract: xe,
    deleteWorkflowContract: ye,
    resolveWorkflow: Fe,
    installWorkflowDeps: Le,
    setModelImportance: _e,
    // Model Management
    getEnvironmentModels: Pe,
    getWorkspaceModels: ge,
    getModelDetails: ke,
    getModelSourceCandidates: E,
    computeModelHashes: F,
    getWorkflowSourceCandidates: ie,
    openFileLocation: Ee,
    addModelSource: $e,
    applyEnvironmentModelSources: Ce,
    removeModelSource: Oe,
    deleteModel: ee,
    downloadModel: V,
    scanWorkspaceModels: de,
    getModelsDirectory: We,
    setModelsDirectory: Be,
    getHuggingFaceRepoInfo: we,
    getModelsSubdirectories: se,
    searchHuggingFaceRepos: Ke,
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
    getEnvironmentLogPath: He,
    getWorkspaceLogPath: Ut,
    getOrchestratorLogs: Gt,
    getOrchestratorLogPath: X,
    openFile: Z,
    // Node Management
    getNodes: ve,
    trackNodeAsDev: Qe,
    installNode: Re,
    queueNodeInstall: lt,
    previewNodeDependencyChanges: et,
    applyReviewedNodeDependencyChanges: pt,
    updateNode: Rt,
    updateNodeCriticality: Ye,
    uninstallNode: Ct,
    // Git Remotes
    getRemotes: Xt,
    addRemote: as,
    removeRemote: K,
    updateRemoteUrl: fe,
    fetchRemote: ze,
    getRemoteSyncStatus: be,
    // Push/Pull
    getPullPreview: Ze,
    pullFromRemote: ct,
    getPushPreview: ut,
    pushToRemote: St,
    validateMerge: Y,
    // Environment Sync
    syncEnvironmentManually: Ge,
    // Workflow Repair
    repairWorkflowModels: L,
    // Import Operations
    previewTarballImport: ce,
    previewGitImport: At,
    validateEnvironmentName: Je,
    executeImport: tt,
    executeGitImport: $s,
    getImportProgress: mt,
    // First-Time Setup
    getSetupStatus: Zt,
    // Manager Update Notice
    getUpdateCheck: gt,
    updateManager: Cs,
    initializeWorkspace: Lt,
    getInitializeProgress: qn,
    validatePath: Vt,
    // Deploy Operations
    getDeploySummary: $n,
    getDataCenters: Kn,
    testRunPodConnection: ba,
    getNetworkVolumes: $a,
    getRunPodGpuTypes: Ca,
    deployToRunPod: xa,
    getRunPodPods: Ro,
    terminateRunPodPod: Sa,
    stopRunPodPod: Ia,
    startRunPodPod: Ea,
    getDeploymentStatus: Ta,
    exportDeployPackage: Ma,
    getStoredRunPodKey: Pa,
    clearRunPodKey: Ra,
    // Custom Worker Operations
    getCustomWorkers: Da,
    addCustomWorker: Do,
    removeCustomWorker: La,
    testWorkerConnection: Na,
    scanForWorkers: Jn,
    getWorkerSystemInfo: oe,
    getWorkerInstances: G,
    deployToWorker: qe,
    startWorkerInstance: nt,
    stopWorkerInstance: yt,
    terminateWorkerInstance: It,
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
}, Nm = /* @__PURE__ */ Ie({
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
}, Am = /* @__PURE__ */ Ie({
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
}), zm = /* @__PURE__ */ Te(Am, [["__scopeId", "data-v-c3875efc"]]), Fm = ["title"], Bm = ["width", "height"], Vm = /* @__PURE__ */ Ie({
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
}, jm = /* @__PURE__ */ Ie({
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
}, Km = /* @__PURE__ */ Ie({
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
}), ys = /* @__PURE__ */ Te(Km, [["__scopeId", "data-v-559361eb"]]), Jm = { class: "status-grid" }, Qm = { class: "status-grid__columns" }, Ym = { class: "status-grid__column" }, Xm = { class: "status-grid__title" }, Zm = { class: "status-grid__column status-grid__column--right" }, ef = { class: "status-grid__title" }, tf = {
  key: 0,
  class: "status-grid__footer"
}, sf = /* @__PURE__ */ Ie({
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
}, lf = { class: "status-item__label" }, rf = /* @__PURE__ */ Ie({
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
}), Ds = /* @__PURE__ */ Te(rf, [["__scopeId", "data-v-6f929183"]]), cf = { class: "issue-card__header" }, uf = { class: "issue-card__icon" }, df = { class: "issue-card__title" }, mf = {
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
}, gf = /* @__PURE__ */ Ie({
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
        (o(!0), i(W, null, he(e.items, (r, c) => (o(), i("div", {
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
}), vs = /* @__PURE__ */ Te(gf, [["__scopeId", "data-v-df6aa348"]]), hf = ["type", "disabled"], yf = {
  key: 0,
  class: "spinner"
}, wf = /* @__PURE__ */ Ie({
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
}), Me = /* @__PURE__ */ Te(wf, [["__scopeId", "data-v-772abe47"]]), _f = /* @__PURE__ */ Ie({
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
}), Ko = /* @__PURE__ */ Te(_f, [["__scopeId", "data-v-75e9eeb8"]]), kf = /* @__PURE__ */ Ie({
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
}), ul = /* @__PURE__ */ Te(kf, [["__scopeId", "data-v-2f186e4c"]]), bf = { class: "detail-row" }, $f = /* @__PURE__ */ Ie({
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
      b(Ko, { "min-width": e.labelMinWidth }, {
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
}), Mt = /* @__PURE__ */ Te($f, [["__scopeId", "data-v-ef15664a"]]), Cf = { class: "modal-header" }, xf = { class: "modal-body" }, Sf = { class: "status-section" }, If = {
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
}, qv = { class: "modal-actions" }, Kv = /* @__PURE__ */ Ie({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, n = _(!1);
    dt(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), bt(() => t.show, (w, g) => {
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
      var k, $, S, x, T, I, P, O, U, B, R, A, Q, ae, H, ue, q, N, j, pe, ne, re;
      return o(), D(us, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (me) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = $t(() => {
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
                b(ys, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    C("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Mt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (o(), i("div", If, [
                s("div", Ef, [
                  b(ys, { level: "4" }, {
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
                    (o(!0), i(W, null, he(a.value, (me) => (o(), i("div", {
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
                    (o(!0), i(W, null, he(l.value, (me) => (o(), i("div", {
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
                    (o(!0), i(W, null, he(e.status.workflows.new, (me) => (o(), i("div", {
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
                    (o(!0), i(W, null, he(e.status.workflows.modified, (me) => (o(), i("div", {
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
                    (o(!0), i(W, null, he(e.status.workflows.deleted, (me) => (o(), i("div", {
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
                    (o(!0), i(W, null, he(r.value, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", lv, m(me), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (o(), i("div", iv, [
                b(ys, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    C("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (O = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && O.length ? (o(), i("div", rv, [
                  s("div", cv, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", uv, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", dv, [
                    (o(!0), i(W, null, he(e.status.git_changes.nodes_added, (me) => (o(), i("div", {
                      key: v(me),
                      class: "change-item"
                    }, [
                      s("span", mv, m(v(me)), 1),
                      p(me) ? (o(), i("span", fv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (B = (U = e.status.git_changes) == null ? void 0 : U.nodes_removed) != null && B.length ? (o(), i("div", vv, [
                  s("div", pv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", gv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", hv, [
                    (o(!0), i(W, null, he(e.status.git_changes.nodes_removed, (me) => (o(), i("div", {
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
                (A = e.status.git_changes) != null && A.has_other_changes ? (o(), i("div", Cv, [...g[21] || (g[21] = [
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
              (Q = e.status.comparison) != null && Q.is_synced ? y("", !0) : (o(), i("div", xv, [
                s("div", Sv, [
                  b(ys, { level: "4" }, {
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
                (H = (ae = e.status.comparison) == null ? void 0 : ae.missing_nodes) != null && H.length ? (o(), i("div", Iv, [
                  b(Mt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", Ev, [
                    (o(!0), i(W, null, he(e.status.comparison.missing_nodes.slice(0, 10), (me) => (o(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), i("div", Tv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (q = (ue = e.status.comparison) == null ? void 0 : ue.extra_nodes) != null && q.length ? (o(), i("div", Mv, [
                  b(Mt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Pv, [
                    (o(!0), i(W, null, he(e.status.comparison.extra_nodes.slice(0, 10), (me) => (o(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), i("div", Rv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (j = (N = e.status.comparison) == null ? void 0 : N.version_mismatches) != null && j.length ? (o(), i("div", Dv, [
                  b(Mt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Lv, [
                    (o(!0), i(W, null, he(e.status.comparison.version_mismatches.slice(0, 10), (me) => (o(), i("div", {
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
                ((pe = e.status.comparison) == null ? void 0 : pe.packages_in_sync) === !1 ? (o(), i("div", Av, [
                  b(Mt, {
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
              (re = (ne = e.status.comparison) == null ? void 0 : ne.disabled_nodes) != null && re.length ? (o(), i("div", Fv, [
                b(ys, { level: "4" }, {
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
                  (o(!0), i(W, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (me) => (o(), i("div", {
                    key: me,
                    class: "drift-list-item"
                  }, " • " + m(me), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), i("div", Wv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), i("div", Gv, [
                b(ys, { level: "4" }, {
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
}, sp = /* @__PURE__ */ Ie({
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
    return dt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Wn(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (o(), D(us, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Wt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Ve(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = $t(() => {
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
}), Pt = /* @__PURE__ */ Te(sp, [["__scopeId", "data-v-06a4be14"]]), np = ["type", "disabled"], op = {
  key: 0,
  class: "spinner"
}, ap = /* @__PURE__ */ Ie({
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
}, rp = /* @__PURE__ */ Ie({
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
          n[1] || (n[1] = Ss((a) => t.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Ss((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, lp),
      e.error ? (o(), i("span", ip, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ Te(rp, [["__scopeId", "data-v-9ba02cdc"]]), cp = ["disabled"], up = { class: "dropdown-value" }, dp = ["onClick"], mp = {
  key: 0,
  class: "dropdown-error"
}, fp = /* @__PURE__ */ Ie({
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
      const x = r.value.getBoundingClientRect(), T = window.innerHeight, I = T - x.bottom, P = x.top, O = Math.min(300, n.options.length * 36 + 8), U = I < O && P > I;
      u.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...U ? { bottom: `${T - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    bt(l, async (x) => {
      x && (await Kt(), k());
    });
    function $() {
      l.value && k();
    }
    function S(x) {
      x.key === "Escape" && l.value && w();
    }
    return dt(() => {
      window.addEventListener("scroll", $, !0), window.addEventListener("keydown", S);
    }), Wn(() => {
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
      (o(), D(us, { to: "body" }, [
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
          (o(!0), i(W, null, he(e.options, (I) => (o(), i("div", {
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
}, wp = /* @__PURE__ */ Ie({
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
    return bt(w, ($) => {
      a("update:modelValue", $);
    }, { immediate: !0 }), bt(() => n.suggestedDirectory, g), bt(d, g), bt(r, ($, S) => {
      v || S === "" || (f.value = !0);
    }), dt(k), ($, S) => (o(), i("div", pp, [
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
        r.value !== "__custom__" ? (o(), D(Dt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = (x) => c.value = x),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (o(), D(Dt, {
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
}, Fp = ["onClick"], Bp = ["checked", "onChange"], Vp = { class: "file-path" }, Wp = { class: "file-size" }, Gp = { class: "action-bar" }, jp = { class: "summary-info" }, Hp = { class: "summary-count" }, qp = { class: "summary-size" }, Kp = /* @__PURE__ */ Ie({
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
      let le = r.value;
      if (n.initialPath) {
        const xe = n.initialPath.endsWith("/") ? n.initialPath : `${n.initialPath}/`;
        le = le.filter((ye) => ye.path.startsWith(xe) || ye.path === n.initialPath);
      }
      if (v.value && (le = le.filter((xe) => xe.is_model_file)), f.value.trim()) {
        const xe = f.value.toLowerCase();
        le = le.filter((ye) => ye.path.toLowerCase().includes(xe));
      }
      return le;
    }), S = M(() => {
      const le = [...$.value];
      return le.sort((xe, ye) => {
        let Fe;
        return p.value === "name" ? Fe = xe.path.localeCompare(ye.path) : Fe = xe.size - ye.size, w.value ? Fe : -Fe;
      }), le;
    }), x = M(() => $.value.length === 0 ? !1 : $.value.every((le) => c.value.has(le.path))), T = M(() => $.value.some((le) => c.value.has(le.path))), I = M(() => g.value.trim().length > 0), P = M(() => {
      let le = 0;
      for (const xe of c.value) {
        const ye = r.value.find((Fe) => Fe.path === xe);
        ye && (le += ye.size);
      }
      return le;
    }), O = M(() => {
      if (c.value.size === 0) return null;
      const le = /* @__PURE__ */ new Set();
      for (const xe of c.value) {
        const ye = pe(xe);
        ye && le.add(ye.toLowerCase());
      }
      return le.size !== 1 ? null : [...le][0];
    }), U = M(() => n.mode || "download"), B = M(() => n.actionLabel || (U.value === "source" ? "Use as Source" : "Queue Download")), R = M(() => U.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), A = M(() => U.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !I.value);
    function Q(le) {
      if (le === 0) return "0 B";
      const xe = 1024 * 1024 * 1024, ye = 1024 * 1024, Fe = 1024;
      return le >= xe ? `${(le / xe).toFixed(2)} GB` : le >= ye ? `${(le / ye).toFixed(1)} MB` : le >= Fe ? `${(le / Fe).toFixed(0)} KB` : `${le} B`;
    }
    function ae(le) {
      const xe = le.match(k);
      return xe ? `${xe[1]}${xe[4]}` : null;
    }
    function H(le) {
      if (U.value === "source") {
        c.value = c.value.has(le.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([le.path]);
        return;
      }
      const xe = new Set(c.value), ye = xe.has(le.path), Fe = le.shard_group || ae(le.path);
      if (Fe) {
        const Le = r.value.filter((_e) => (_e.shard_group || ae(_e.path)) === Fe);
        ye ? Le.forEach((_e) => xe.delete(_e.path)) : Le.forEach((_e) => xe.add(_e.path));
      } else
        ye ? xe.delete(le.path) : xe.add(le.path);
      c.value = xe;
    }
    function ue() {
      const le = new Set(c.value);
      for (const xe of $.value)
        xe.is_model_file && le.add(xe.path);
      c.value = le;
    }
    function q() {
      c.value = /* @__PURE__ */ new Set();
    }
    function N() {
      if (x.value) {
        const le = new Set(c.value);
        for (const xe of $.value)
          le.delete(xe.path);
        c.value = le;
      } else {
        const le = new Set(c.value);
        for (const xe of $.value)
          le.add(xe.path);
        c.value = le;
      }
    }
    function j(le) {
      p.value === le ? w.value = !w.value : (p.value = le, w.value = !0);
    }
    function pe(le) {
      const xe = le.split("/");
      return xe.length >= 2 ? xe[xe.length - 2] : null;
    }
    function ne() {
      return g.value.trim();
    }
    function re() {
      if (c.value.size === 0 || !I.value) return;
      const le = ne(), xe = [];
      for (const ye of c.value) {
        const Fe = r.value.find((Le) => Le.path === ye);
        Fe && xe.push({
          url: Di(n.repoId, n.revision, Fe.path),
          destination: le,
          filename: Fe.path.split("/").pop() || Fe.path
        });
      }
      a("queue", xe);
    }
    function me() {
      if (c.value.size !== 1) return;
      const [le] = c.value;
      a("selectSource", Di(n.repoId, n.revision, le));
    }
    function J() {
      if (U.value === "source") {
        me();
        return;
      }
      re();
    }
    async function te() {
      if (n.repoId) {
        u.value = !0, d.value = null;
        try {
          const le = `https://huggingface.co/${n.repoId}/tree/${n.revision || "main"}`, xe = await l(le);
          if (r.value = xe.files, n.preselectedFile) {
            const ye = r.value.find((Fe) => Fe.path === n.preselectedFile);
            ye && H(ye);
          }
        } catch (le) {
          d.value = le instanceof Error ? le.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return bt(() => [n.repoId, n.revision], () => {
      n.repoId && te();
    }, { immediate: !1 }), dt(() => {
      te();
    }), (le, xe) => (o(), i("div", $p, [
      s("div", Cp, [
        s("button", {
          class: "back-btn",
          onClick: xe[0] || (xe[0] = (ye) => le.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", xp, [
          s("span", Sp, m(e.repoId), 1),
          e.revision ? (o(), i("span", Ip, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (o(), i("div", Ep, " Loading repository files... ")) : d.value ? (o(), i("div", Tp, m(d.value), 1)) : (o(), i(W, { key: 2 }, [
        s("div", Mp, [
          b(Dt, {
            modelValue: f.value,
            "onUpdate:modelValue": xe[1] || (xe[1] = (ye) => f.value = ye),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", Pp, [
            s("button", {
              class: Ve(["toggle-btn", { active: v.value }]),
              onClick: xe[2] || (xe[2] = (ye) => v.value = !v.value)
            }, m(v.value ? "Models Only" : "All Files"), 3),
            U.value === "download" ? (o(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: ue
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: q
            }, "Clear")
          ])
        ]),
        s("div", Rp, [
          $.value.length > 0 ? (o(), i("div", Dp, [
            U.value === "download" ? (o(), i("input", {
              key: 0,
              type: "checkbox",
              checked: x.value,
              indeterminate: T.value && !x.value,
              class: "file-checkbox",
              onChange: N
            }, null, 40, Lp)) : (o(), i("span", Np)),
            s("span", {
              class: "header-name",
              onClick: xe[3] || (xe[3] = (ye) => j("name"))
            }, [
              xe[7] || (xe[7] = C(" Name ", -1)),
              s("span", Up, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: xe[4] || (xe[4] = (ye) => j("size"))
            }, [
              xe[8] || (xe[8] = C(" Size ", -1)),
              s("span", Op, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          $.value.length === 0 ? (o(), i("div", Ap, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (o(), i("div", zp, [
            (o(!0), i(W, null, he(S.value, (ye) => (o(), i("div", {
              key: ye.path,
              class: Ve(["file-item", { selected: c.value.has(ye.path) }]),
              onClick: (Fe) => H(ye)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(ye.path),
                class: "file-checkbox",
                onClick: xe[5] || (xe[5] = $t(() => {
                }, ["stop"])),
                onChange: (Fe) => H(ye)
              }, null, 40, Bp),
              s("span", Vp, m(ye.path), 1),
              s("span", Wp, m(Q(ye.size)), 1)
            ], 10, Fp))), 128))
          ]))
        ]),
        U.value === "download" ? (o(), D(dc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": xe[6] || (xe[6] = (ye) => g.value = ye),
          "suggested-directory": O.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Gp, [
          s("div", jp, [
            s("span", Hp, m(R.value), 1),
            s("span", qp, m(Q(P.value)), 1)
          ]),
          b(Ue, {
            variant: "primary",
            disabled: A.value,
            onClick: J
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
}, tg = { class: "mask" }, sg = { class: "token-input-section" }, ng = { class: "input-label" }, og = { class: "help-text" }, ag = ["href"], lg = { class: "modal-actions" }, ig = /* @__PURE__ */ Ie({
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
    return ($, S) => (o(), D(Pt, {
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
            b(Dt, {
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
}, Ig = /* @__PURE__ */ Ie({
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
        const A = R.path.split("/");
        A.length > 1 ? p.value = A.slice(0, -1).join("/") : p.value = void 0, w.value = R.path, a.value = "browse";
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
        const A = await t(B);
        r.value = A.results, d.value = !0;
      } catch (A) {
        u.value = A instanceof Error ? A.message : "Search failed";
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
    function O() {
      P(), $.value && l.value && x();
    }
    function U() {
      k.value = null;
    }
    return dt(P), (B, R) => (o(), i("div", cg, [
      a.value === "search" ? (o(), i("div", ug, [
        s("div", dg, [
          s("div", mg, [
            b(Dt, {
              modelValue: l.value,
              "onUpdate:modelValue": R[0] || (R[0] = (A) => l.value = A),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Ss(x, ["enter"])
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
            onClick: R[1] || (R[1] = (A) => g.value = !0)
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
            onClick: R[2] || (R[2] = (A) => g.value = !0)
          }, {
            default: h(() => [...R[7] || (R[7] = [
              C(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (o(), i("div", gg, [
          (o(!0), i(W, null, he(r.value, (A) => (o(), i("div", {
            key: A.repo_id,
            class: "repo-card",
            onClick: (Q) => T(A.repo_id)
          }, [
            s("div", yg, [
              s("span", wg, m(A.repo_id), 1),
              s("div", _g, [
                s("span", kg, [
                  R[8] || (R[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  C(" " + m(S(A.downloads)), 1)
                ]),
                s("span", bg, [
                  R[9] || (R[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  C(" " + m(S(A.likes)), 1)
                ])
              ])
            ]),
            A.description ? (o(), i("p", $g, m(A.description), 1)) : y("", !0),
            A.tags.length > 0 ? (o(), i("div", Cg, [
              (o(!0), i(W, null, he(A.tags.slice(0, 5), (Q) => (o(), i("span", {
                key: Q,
                class: "tag"
              }, m(Q), 1))), 128))
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
        onQueue: R[3] || (R[3] = (A) => B.$emit("queue", A)),
        onSelectSource: R[4] || (R[4] = (A) => B.$emit("selectSource", A))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (o(), D(rg, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: R[5] || (R[5] = (A) => g.value = !1),
        onSaved: O,
        onCleared: U
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
}, zg = { key: 1 }, Fg = /* @__PURE__ */ Ie({
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
    bt(a, (v) => {
      v ? (document.addEventListener("pointerdown", c), document.addEventListener("keydown", u)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u));
    }), To(() => {
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
                onClick: p[0] || (p[0] = $t((k) => a.value = !a.value, ["stop"]))
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
                onClick: p[1] || (p[1] = $t(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Ug, [
                  (o(!0), i(W, null, he(e.candidate.reasons, (k) => (o(), i("span", {
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
}, jg = { class: "actions" }, Hg = /* @__PURE__ */ Ie({
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
        b(Dt, {
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
}, ph = { class: "section-header-row" }, gh = /* @__PURE__ */ Ie({
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
    return dt(S), (T, I) => (o(), i("div", qg, [
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
        (o(), i(W, null, he(c, (P) => s("button", {
          key: P.id,
          class: Ve(["tab-btn", { active: u.value === P.id }]),
          onClick: (O) => u.value = P.id
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
          (o(!0), i(W, null, he(k.value, (P) => (o(), D(fc, {
            key: `${P.workflow}:${P.url}`,
            candidate: P,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === P.url,
            onSelect: I[0] || (I[0] = (O) => a("selectSource", O))
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
}, wh = /* @__PURE__ */ Ie({
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
    bt(() => n.model, (v) => {
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
    return (v, p) => (o(), D(Pt, {
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
}, Gh = ["disabled"], jh = /* @__PURE__ */ Ie({
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
    bt(
      k,
      (R) => {
        var ae;
        const A = new Set(
          R.map((H) => H.hash).filter((H) => !!H)
        ), Q = {};
        for (const H of R) {
          if (!H.hash) continue;
          const ue = g.value[H.hash], q = (ae = H.source_candidates) == null ? void 0 : ae.find((j) => j.url), N = ue || (q == null ? void 0 : q.url);
          N && (Q[H.hash] = N);
        }
        for (const [H, ue] of Object.entries(g.value))
          A.has(H) && ue && (Q[H] = ue);
        g.value = Q;
      },
      { immediate: !0 }
    );
    async function x(R) {
      f.value = R, w.value = null;
      try {
        u.value = await l(R), d.value = R;
      } catch (A) {
        w.value = A instanceof Error ? A.message : `Failed to load ${R}`;
      } finally {
        f.value = null;
      }
    }
    async function T(R) {
      v.value = R, w.value = null;
      try {
        const A = await r(R, "optional");
        if (A.status !== "success") {
          w.value = A.message || `Failed to update ${R}`;
          return;
        }
        a("revalidate");
      } catch (A) {
        w.value = A instanceof Error ? A.message : `Failed to update ${R}`;
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
    function O(R) {
      return f.value === R ? "Loading..." : g.value[R] ? "Change Source" : "Add Source";
    }
    function U() {
      a("revalidate");
    }
    async function B() {
      var A, Q;
      const R = Object.entries(g.value).map(([ae, H]) => ({
        identifier: ae,
        source_url: H
      }));
      if (R.length) {
        p.value = !0, w.value = null;
        try {
          const ae = await c({ sources: R });
          if (ae.status === "error") {
            w.value = ((A = ae.errors[0]) == null ? void 0 : A.message) || "Failed to apply model sources";
            return;
          }
          const H = new Set(
            ae.applied.map((ue) => ue.identifier || ue.model_hash)
          );
          g.value = Object.fromEntries(
            Object.entries(g.value).filter(([ue]) => !H.has(ue))
          ), ae.status === "partial" && (w.value = ((Q = ae.errors[0]) == null ? void 0 : Q.message) || "Some model sources failed to apply"), a("revalidate"), a("applied");
        } catch (ae) {
          w.value = ae instanceof Error ? ae.message : "Failed to apply model sources";
        } finally {
          p.value = !1;
        }
      }
    }
    return (R, A) => (o(), i(W, null, [
      b(Pt, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: A[2] || (A[2] = (Q) => a("close"))
      }, {
        header: h(() => [...A[3] || (A[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", _h, [
            k.value.length ? (o(), i("section", kh, [
              s("div", bh, [
                A[4] || (A[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(k.value.length), 1)
              ]),
              s("div", $h, [
                (o(!0), i(W, null, he(k.value, (Q) => {
                  var ae;
                  return o(), i("article", {
                    key: Q.hash || Q.filename,
                    class: "issue-item"
                  }, [
                    s("div", Ch, [
                      s("div", xh, m(Q.filename), 1),
                      s("div", Sh, [
                        Q.hash ? (o(), i("span", Ih, "hash " + m(Q.hash), 1)) : y("", !0),
                        Q.workflows.length ? (o(), i("span", Eh, "used by " + m(Q.workflows.join(", ")), 1)) : y("", !0),
                        s("span", null, m(Q.criticality || "required"), 1)
                      ]),
                      Q.hash && g.value[Q.hash] ? (o(), i("p", Th, " Will add source: " + m(g.value[Q.hash]), 1)) : (ae = Q.source_candidates) != null && ae.length ? (o(), i("p", Mh, " Source candidate found in model index. ")) : y("", !0)
                    ]),
                    Q.hash ? (o(), i("button", {
                      key: 0,
                      class: "issue-action",
                      disabled: f.value === Q.hash || p.value,
                      onClick: (H) => x(Q.hash)
                    }, m(O(Q.hash)), 9, Ph)) : (o(), i("span", Rh, "Missing hash"))
                  ]);
                }), 128))
              ])
            ])) : y("", !0),
            $.value.length ? (o(), i("section", Dh, [
              s("div", Lh, [
                A[5] || (A[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m($.value.length), 1)
              ]),
              s("div", Nh, [
                (o(!0), i(W, null, he($.value, (Q) => (o(), i("article", {
                  key: Q.name,
                  class: "issue-item"
                }, [
                  s("div", Uh, [
                    s("div", Oh, m(Q.name), 1),
                    s("div", Ah, [
                      s("span", null, m(Q.source), 1),
                      s("span", null, m(Q.criticality), 1)
                    ]),
                    s("p", zh, m(Q.reason), 1)
                  ]),
                  Q.criticality === "required" ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: v.value === Q.name,
                    onClick: (ae) => T(Q.name)
                  }, m(v.value === Q.name ? "Saving..." : "Mark Optional"), 9, Fh)) : (o(), i("span", Bh, "Optional warning"))
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
            onClick: A[0] || (A[0] = (Q) => a("close"))
          }, " Close "),
          S.value > 0 ? (o(), i("button", {
            key: 0,
            class: "primary-action",
            disabled: p.value,
            onClick: B
          }, m(p.value ? "Applying..." : `Apply Source Changes (${S.value})`), 9, Gh)) : (o(), i("button", {
            key: 1,
            class: "primary-action",
            onClick: A[1] || (A[1] = (Q) => a("close"))
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
        onHashesComputed: U
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Ll = /* @__PURE__ */ Te(jh, [["__scopeId", "data-v-73fd708f"]]), Hh = { class: "health-section-header" }, qh = { class: "suggestions-content" }, Kh = { class: "suggestions-text" }, Jh = { style: { "margin-top": "var(--cg-space-3)" } }, Qh = {
  key: 1,
  class: "no-issues-text"
}, Yh = {
  key: 2,
  class: "no-issues-text"
}, Xh = /* @__PURE__ */ Ie({
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
      const ee = a.status.workflows.analyzed || [], V = ee.filter(
        (de) => de.unresolved_models_count > 0 || de.ambiguous_models_count > 0
      );
      return V.length === 0 && a.status.missing_models_count > 0 ? ee.filter((de) => de.sync_state === "synced") : V;
    });
    function O() {
      const ee = P.value;
      ee.length !== 0 && ($.value = !0, k("repair-missing-models", ee.map((V) => V.name)));
    }
    function U() {
      $.value = !1;
    }
    t({ resetRepairingState: U, resetRepairingEnvironmentState: T, closeDetailModal: I });
    const B = M(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), R = M(() => a.status.has_changes), A = M(() => {
      const ee = a.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), Q = M(() => a.status.has_changes || B.value), ae = M(() => {
      var ee;
      return ((ee = u.value) == null ? void 0 : ee.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), H = M(
      () => ae.value.models_without_sources.length
    ), ue = M(
      () => ae.value.nodes_without_provenance.length
    ), q = M(
      () => H.value + ue.value
    ), N = M(
      () => q.value > 0
    ), j = M(() => {
      const ee = [];
      if (H.value > 0 && ee.push(`${H.value} model${H.value === 1 ? "" : "s"} missing download source`), ue.value > 0) {
        const V = ae.value.nodes_without_provenance.filter((We) => We.criticality === "optional").length, de = ue.value - V;
        de > 0 && ee.push(`${de} required node${de === 1 ? "" : "s"} missing portable source`), V > 0 && ee.push(`${V} optional node${V === 1 ? "" : "s"} missing portable source`);
      }
      return ee;
    });
    async function pe() {
      f.value = !0, d.value = null;
      try {
        u.value = await v();
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Failed to check readiness";
      } finally {
        f.value = !1;
      }
    }
    async function ne() {
      await pe();
    }
    function re() {
      k("refresh-status");
    }
    bt(
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
        a.setupState === "managed" && pe();
      },
      { immediate: !0 }
    );
    const me = M(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), J = M(() => a.status.git_changes.has_other_changes), te = M(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter((V) => V.status === "broken")) || [];
    }), le = M(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (V) => V.has_path_sync_issues && !V.has_issues
      )) || [];
    }), xe = M(() => te.value.length > 0);
    function ye(ee) {
      const V = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const de of V) {
        const We = ee.match(de);
        if (We != null && We[1])
          return We[1];
      }
      return null;
    }
    function Fe(ee) {
      const V = ee.map(ye).filter((de) => !!de);
      return [...new Set(V)];
    }
    function Le(ee) {
      if (ee.length === 0) return "";
      if (ee.length === 1) return ` (>= ${ee[0]})`;
      const V = ee.slice(0, 2).map((We) => `>= ${We}`).join(", "), de = ee.length > 2;
      return ` (${V}${de ? ", ..." : ""})`;
    }
    function _e(ee) {
      return ee.replace(/uninstallable node mappings?/gi, (V) => V.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Pe(ee) {
      const V = _e(ee.issue_summary || "Has issues"), de = /(?:>=|v?\d+\.\d+)/i.test(V), We = Fe(ee.version_gated_guidance || []);
      return (ee.nodes_version_gated_count || 0) > 0 && We.length > 0 && !de ? `${ee.name} — ${V} (needs ComfyUI ${We.map((Be) => `>= ${Be}`).join(", ")})` : `${ee.name} — ${V}`;
    }
    const ge = M(() => te.value.reduce(
      (ee, V) => ee + (V.nodes_version_gated_count || 0),
      0
    )), ke = M(() => {
      const ee = te.value.flatMap(
        (V) => Fe(V.version_gated_guidance || [])
      );
      return [...new Set(ee)];
    }), E = M(() => te.value.reduce(
      (ee, V) => ee + (V.nodes_uninstallable_count || 0),
      0
    )), F = M(() => {
      const ee = [];
      return ge.value > 0 && ee.push(
        `${ge.value} require newer ComfyUI${Le(ke.value)}`
      ), E.value > 0 && ee.push(`${E.value} need community packages`), ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ie = M(() => xe.value || le.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ee = M(() => ie.value || N.value || !!d.value), $e = M(() => {
      const ee = [];
      return a.status.workflows.new.length > 0 && ee.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && ee.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && ee.push(`${a.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ce = M(() => {
      var de, We;
      const ee = [], V = a.status.comparison;
      return (de = V.missing_nodes) != null && de.length && ee.push(`${V.missing_nodes.length} missing node${V.missing_nodes.length === 1 ? "" : "s"}`), (We = V.extra_nodes) != null && We.length && ee.push(`${V.extra_nodes.length} untracked node${V.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), Oe = M(() => {
      var de, We;
      const ee = [], V = a.status.comparison;
      return (de = V.extra_nodes) != null && de.length && (V.extra_nodes.slice(0, 3).forEach((Be) => {
        ee.push(`Untracked: ${Be}`);
      }), V.extra_nodes.length > 3 && ee.push(`...and ${V.extra_nodes.length - 3} more untracked`)), (We = V.missing_nodes) != null && We.length && (V.missing_nodes.slice(0, 3).forEach((Be) => {
        ee.push(`Missing: ${Be}`);
      }), V.missing_nodes.length > 3 && ee.push(`...and ${V.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, V) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (o(), D(vs, {
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
                onClick: V[0] || (V[0] = (de) => ee.$emit("start-setup"))
              }, {
                default: h(() => [...V[15] || (V[15] = [
                  C(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (o(), D(vs, {
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
                onClick: V[1] || (V[1] = (de) => ee.$emit("view-environments"))
              }, {
                default: h(() => [...V[16] || (V[16] = [
                  C(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (o(), D(vs, {
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
                onClick: V[2] || (V[2] = (de) => ee.$emit("create-environment"))
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
            onMouseenter: V[4] || (V[4] = (de) => r.value = !0),
            onMouseleave: V[5] || (V[5] = (de) => r.value = !1)
          }, [
            s("div", Hh, [
              b(ys, {
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
            }, ms({
              left: h(() => [
                e.status.workflows.new.length ? (o(), D(Ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (o(), D(Ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (o(), D(Ds, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(Ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: B.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (o(), D(Ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), D(Ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (o(), D(Ds, {
                  key: 2,
                  icon: "●",
                  count: me.value,
                  label: me.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                J.value ? (o(), D(Ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                R.value && !A.value && !J.value ? (o(), D(Ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                R.value ? y("", !0) : (o(), D(Ds, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              Q.value ? {
                name: "footer",
                fn: h(() => [
                  V[21] || (V[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", qh, [
                    s("span", Kh, m($e.value), 1),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: V[3] || (V[3] = (de) => ee.$emit("commit-changes"))
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
          e.status.is_detached_head ? (o(), D(vs, {
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
                onClick: V[6] || (V[6] = (de) => ee.$emit("create-branch"))
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
            b(ys, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...V[23] || (V[23] = [
                C(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            Ee.value ? (o(), i(W, { key: 0 }, [
              te.value.length > 0 ? (o(), D(vs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${te.value.length} workflow${te.value.length === 1 ? "" : "s"} can't run`,
                description: F.value,
                items: te.value.map(Pe)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[7] || (V[7] = (de) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[24] || (V[24] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              le.value.length > 0 ? (o(), D(vs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${le.value.length} workflow${le.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: le.value.map((de) => `${de.name} — ${de.models_needing_path_sync_count} model path${de.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[8] || (V[8] = (de) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[25] || (V[25] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !xe.value ? (o(), D(vs, {
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
                    onClick: O
                  }, {
                    default: h(() => [
                      C(m($.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: V[9] || (V[9] = (de) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[26] || (V[26] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (o(), D(vs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Ce.value,
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
                    onClick: V[10] || (V[10] = (de) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...V[28] || (V[28] = [
                      C(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (o(), D(vs, {
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
                    onClick: V[11] || (V[11] = (de) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...V[29] || (V[29] = [
                      C(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              N.value ? (o(), D(vs, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: j.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[12] || (V[12] = (de) => c.value = !0)
                  }, {
                    default: h(() => [...V[30] || (V[30] = [
                      C(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (o(), D(vs, {
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
                    onClick: pe
                  }, {
                    default: h(() => [...V[31] || (V[31] = [
                      C(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : Q.value ? (o(), i("span", Qh, "No issues")) : (o(), i("span", Yh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(Jv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: V[13] || (V[13] = (de) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: x
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (o(), D(Ll, {
        key: 0,
        warnings: u.value.warnings,
        onClose: V[14] || (V[14] = (de) => c.value = !1),
        onRevalidate: ne,
        onApplied: re
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Zh = /* @__PURE__ */ Te(Xh, [["__scopeId", "data-v-bcaebf00"]]);
async function Fo(e, t) {
  const n = await Js(e, t);
  if (!n.ok) {
    const a = await n.json().catch(() => ({}));
    throw new Error(a.error || a.message || `Request failed: ${n.status}`);
  }
  return n.json();
}
function ey() {
  async function e() {
    try {
      return await Fo("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Fo("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function n() {
    await Fo("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Fo("/v2/comfygit/orchestrator/kill", { method: "POST" });
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
}, sy = /* @__PURE__ */ Ie({
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
}), yn = /* @__PURE__ */ Te(sy, [["__scopeId", "data-v-5a01561d"]]), ny = ["value", "disabled"], oy = {
  key: 0,
  value: "",
  disabled: ""
}, ay = ["value"], ly = {
  key: 0,
  class: "base-select-error"
}, iy = /* @__PURE__ */ Ie({
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
        (o(!0), i(W, null, he(e.options, (r) => (o(), i("option", {
          key: t(r),
          value: t(r)
        }, m(n(r)), 9, ay))), 128))
      ], 42, ny),
      e.error ? (o(), i("span", ly, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Jo = /* @__PURE__ */ Te(iy, [["__scopeId", "data-v-4996bfe0"]]), ry = { class: "popover-header" }, cy = { class: "popover-title" }, uy = { class: "popover-content" }, dy = {
  key: 0,
  class: "popover-actions"
}, my = /* @__PURE__ */ Ie({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => (o(), D(us, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Wt({ zIndex: e.overlayZIndex }),
        onClick: n[2] || (n[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Wt({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = $t(() => {
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
}), bs = /* @__PURE__ */ Te(my, [["__scopeId", "data-v-7c1f5547"]]), fy = { class: "detail-section" }, vy = {
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
}, zy = { class: "details-footer" }, Fy = { class: "details-footer-actions" }, By = /* @__PURE__ */ Ie({
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
    function x(q) {
      switch (q) {
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
    function T(q) {
      switch (q) {
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
    function I(q) {
      switch (q) {
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
    function P(q) {
      switch (q) {
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
    function O(q) {
      switch (q) {
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
    function U(q) {
      if (!q.loaded_by || q.loaded_by.length === 0) return [];
      const N = q.hash || q.filename;
      return k.value.has(N) ? q.loaded_by : q.loaded_by.slice(0, 3);
    }
    function B(q) {
      return k.value.has(q);
    }
    function R(q) {
      k.value.has(q) ? k.value.delete(q) : k.value.add(q), k.value = new Set(k.value);
    }
    async function A() {
      f.value = !0, v.value = null;
      try {
        d.value = await l(n.workflowName);
      } catch (q) {
        v.value = q instanceof Error ? q.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function Q(q, N) {
      w.value[q] = N, p.value = !0;
    }
    async function ae(q) {
      try {
        await c(q);
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function H(q) {
      if (q.package_id)
        try {
          const N = q.latest_version || "latest";
          await u({
            id: q.package_id,
            version: N,
            selected_version: N,
            mode: "remote",
            channel: "default"
          }), $.value.add(q.package_id);
        } catch (N) {
          v.value = N instanceof Error ? N.message : "Failed to queue node install";
        }
    }
    async function ue() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [q, N] of Object.entries(w.value))
          await r(n.workflowName, q, N);
        a("refresh"), a("close");
      } catch (q) {
        v.value = q instanceof Error ? q.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return dt(A), (q, N) => (o(), i(W, null, [
      b(Pt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: N[5] || (N[5] = (j) => a("close"))
      }, {
        body: h(() => [
          d.value ? (o(), i(W, { key: 0 }, [
            s("section", fy, [
              b(yn, { variant: "section" }, {
                default: h(() => [
                  C("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (o(), i("div", vy, " No models used in this workflow ")) : y("", !0),
              (o(!0), i(W, null, he(d.value.models, (j) => {
                var pe;
                return o(), i("div", {
                  key: j.hash || j.filename,
                  class: "model-card"
                }, [
                  s("div", py, [
                    N[7] || (N[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", gy, m(j.filename), 1)
                  ]),
                  s("div", hy, [
                    s("div", yy, [
                      N[8] || (N[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ve(["value", x(j.status)])
                      }, m(T(j.status)), 3)
                    ]),
                    s("div", wy, [
                      s("span", _y, [
                        N[9] || (N[9] = C(" Importance: ", -1)),
                        b(uc, {
                          size: 14,
                          title: "About importance levels",
                          onClick: N[0] || (N[0] = (ne) => g.value = !0)
                        })
                      ]),
                      b(Jo, {
                        "model-value": w.value[j.filename] || j.importance,
                        options: S,
                        "onUpdate:modelValue": (ne) => Q(j.filename, ne)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    j.loaded_by && j.loaded_by.length > 0 ? (o(), i("div", ky, [
                      N[10] || (N[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", by, [
                        (o(!0), i(W, null, he(U(j), (ne, re) => (o(), i("div", {
                          key: `${ne.node_id}-${re}`,
                          class: "node-reference"
                        }, m(ne.node_type) + " (Node #" + m(ne.node_id) + ") ", 1))), 128)),
                        j.loaded_by.length > 3 ? (o(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ne) => R(j.hash || j.filename)
                        }, m(B(j.hash || j.filename) ? "▼ Show less" : `▶ View all (${j.loaded_by.length})`), 9, $y)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    j.size_mb ? (o(), i("div", Cy, [
                      N[11] || (N[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", xy, m(j.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    j.has_category_mismatch ? (o(), i("div", Sy, [
                      N[14] || (N[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", Iy, [
                        N[12] || (N[12] = C(" In ", -1)),
                        s("code", null, m(j.actual_category) + "/", 1),
                        N[13] || (N[13] = C(" but loader needs ", -1)),
                        s("code", null, m((pe = j.expected_categories) == null ? void 0 : pe[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  j.status !== "available" ? (o(), i("div", Ey, [
                    j.status === "downloadable" ? (o(), D(Ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: N[1] || (N[1] = (ne) => a("resolve"))
                    }, {
                      default: h(() => [...N[15] || (N[15] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    })) : j.status === "category_mismatch" && j.file_path ? (o(), D(Ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => ae(j.file_path)
                    }, {
                      default: h(() => [...N[16] || (N[16] = [
                        C(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : j.status !== "path_mismatch" ? (o(), D(Ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: N[2] || (N[2] = (ne) => a("resolve"))
                    }, {
                      default: h(() => [...N[17] || (N[17] = [
                        C(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", Ty, [
              b(yn, { variant: "section" }, {
                default: h(() => [
                  C("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (o(), i("div", My, " No custom nodes used in this workflow ")) : y("", !0),
              (o(!0), i(W, null, he(d.value.nodes, (j, pe) => (o(), i("div", {
                key: `${j.name}-${j.status}-${pe}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Ve(["node-status", I(j.status)])
                }, m(P(j.status)), 3),
                s("div", Py, [
                  s("div", Ry, [
                    s("span", Dy, m(j.name), 1),
                    s("span", Ly, m(O(j.status)), 1),
                    j.version ? (o(), i("span", Ny, "v" + m(j.version), 1)) : y("", !0),
                    j.status === "uninstallable" && j.package_id && !$.value.has(j.package_id) ? (o(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ne) => H(j)
                    }, " Install ", 8, Uy)) : j.status === "uninstallable" && j.package_id && $.value.has(j.package_id) ? (o(), i("span", Oy, " Queued ")) : y("", !0)
                  ]),
                  j.guidance ? (o(), i("div", Ay, m(j.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", zy, [
            b(Ue, {
              variant: "secondary",
              onClick: N[3] || (N[3] = (j) => a("resolve"))
            }, {
              default: h(() => [...N[18] || (N[18] = [
                C(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Fy, [
              b(Ue, {
                variant: "secondary",
                onClick: N[4] || (N[4] = (j) => a("close"))
              }, {
                default: h(() => [...N[19] || (N[19] = [
                  C(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (o(), D(Ue, {
                key: 0,
                variant: "primary",
                onClick: ue
              }, {
                default: h(() => [...N[20] || (N[20] = [
                  C(" Save Changes ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(bs, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: N[6] || (N[6] = (j) => g.value = !1)
      }, {
        content: h(() => [...N[21] || (N[21] = [
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
}), Vy = /* @__PURE__ */ Te(By, [["__scopeId", "data-v-00cf34e6"]]), vt = bn({
  items: [],
  status: "idle"
});
let Os = null;
function gc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ja(e) {
  return vt.items.find((t) => t.id === e);
}
async function En() {
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
    vt.status = "idle", En();
  }
}
async function Wy(e) {
  return new Promise((t, n) => {
    Os && (Os.close(), Os = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    Os = l;
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
            d = !0, p(), l.close(), Os = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), Os = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), Os = null, d || n(new Error("Connection lost"));
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
function Hn() {
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
    vt.status === "idle" && En();
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
        Os && (Os.close(), Os = null), x.status = "failed", x.error = "Cancelled by user", vt.status = "idle", En();
      } else if (x.status === "queued") {
        const T = vt.items.findIndex((I) => I.id === S);
        T >= 0 && vt.items.splice(T, 1);
      }
    }
  }
  function n(S) {
    const x = Ja(S);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, vt.status === "idle" && En());
  }
  function a(S) {
    const x = Ja(S);
    !x || x.status !== "paused" || (x.status = "queued", vt.status === "idle" && En());
  }
  function l() {
    const S = vt.items.filter((x) => x.status === "paused");
    for (const x of S)
      x.status = "queued";
    vt.status === "idle" && En();
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
    queue: Yo(vt),
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
    const P = await Js(T, I);
    if (!P.ok) {
      const O = await P.json().catch(() => ({})), U = O.error || O.message || `Request failed: ${P.status}`;
      throw new Error(U);
    }
    return P.json();
  }
  async function u(T) {
    l.value = !0, r.value = null;
    try {
      let I;
      return Xn() || (I = await c(
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
  async function d(T, I, P, O) {
    l.value = !0, r.value = null;
    try {
      let U;
      if (!Xn()) {
        const B = Object.fromEntries(I), R = Object.fromEntries(P), A = O ? Array.from(O) : [];
        U = await c(
          `/v2/comfygit/workflow/${T}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: B,
              model_choices: R,
              skipped_packages: A
            })
          }
        );
      }
      return t.value = U, U;
    } catch (U) {
      const B = U instanceof Error ? U.message : "Unknown error occurred";
      throw r.value = B, U;
    } finally {
      l.value = !1;
    }
  }
  async function f(T, I = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Xn() || (P = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: I })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = O, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(T, I = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Xn() || (P = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: I })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = O, P;
    } finally {
      l.value = !1;
    }
  }
  const p = bn({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: [],
    nodesMarkedOptional: [],
    nodesMapped: [],
    modelPathsSynced: 0
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.nodesMarkedOptional = [], p.nodesMapped = [], p.modelPathsSynced = 0, p.dependencyReviews = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(T) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xn(), await k(T);
    } catch (I) {
      const P = I instanceof Error ? I.message : "Failed to install nodes";
      throw p.installError = P, I;
    }
  }
  async function k(T) {
    var O, U, B;
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
      const R = new Map(((O = I.failed) == null ? void 0 : O.map((Q) => [Q.node_id, Q.error])) || []), A = new Map((I.dependency_review_required || []).map((Q) => [Q.node_id, Q]));
      for (let Q = 0; Q < p.nodesToInstall.length; Q++) {
        const ae = p.nodesToInstall[Q], H = R.get(ae), ue = A.get(ae);
        p.nodeInstallProgress.completedNodes.push({
          node_id: ae,
          success: !H && !ue,
          error: H || (ue == null ? void 0 : ue.error),
          dependency_review: ue == null ? void 0 : ue.dependency_review
        });
      }
    }
    p.nodesInstalled = I.nodes_installed, p.dependencyReviews = I.dependency_review_required || [], p.needsRestart = I.nodes_installed.length > 0;
    const P = (((U = I.failed) == null ? void 0 : U.length) || 0) + (((B = I.dependency_review_required) == null ? void 0 : B.length) || 0);
    return P > 0 && (p.installError = `${P} package(s) need attention`), I;
  }
  async function $(T, I, P) {
    w(), p.phase = "resolving", r.value = null;
    const O = Object.fromEntries(I), U = Object.fromEntries(P);
    try {
      const B = await fetch(`/v2/comfygit/workflow/${T}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: O,
          model_choices: U
        })
      });
      if (!B.ok)
        throw new Error(`Request failed: ${B.status}`);
      if (!B.body)
        throw new Error("No response body");
      const R = B.body.getReader(), A = new TextDecoder();
      let Q = "";
      for (; ; ) {
        const { done: ae, value: H } = await R.read();
        if (ae) break;
        Q += A.decode(H, { stream: !0 });
        const ue = Q.split(`

`);
        Q = ue.pop() || "";
        for (const q of ue) {
          if (!q.trim()) continue;
          const N = q.split(`
`);
          let j = "", pe = "";
          for (const ne of N)
            ne.startsWith("event: ") ? j = ne.slice(7) : ne.startsWith("data: ") && (pe = ne.slice(6));
          if (pe)
            try {
              const ne = JSON.parse(pe);
              S(j, ne);
            } catch (ne) {
              console.warn("Failed to parse SSE event:", ne);
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
        p.nodesToInstall = I.nodes_to_install || [], p.nodesMarkedOptional = I.nodes_marked_optional || [], p.nodesMapped = I.nodes_mapped || [], p.modelPathsSynced = I.model_paths_synced || 0, I.download_results && (p.completedFiles = I.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = I.message, p.phase = "error", r.value = I.message;
        break;
    }
  }
  function x(T, I) {
    const { addToQueue: P } = Hn(), O = I.filter((U) => U.url && U.target_path).map((U) => ({
      workflow: T,
      filename: U.filename,
      url: U.url,
      targetPath: U.target_path,
      size: U.size || 0,
      type: "model"
    }));
    return O.length > 0 && P(O), O.length;
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
}, Xy = { class: "stepper-content" }, Zy = /* @__PURE__ */ Ie({
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
        (o(!0), i(W, null, he(e.steps, (p, w) => (o(), i("div", {
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
}, l1 = { class: "installed-packs-list" }, i1 = ["onClick"], r1 = { class: "installed-pack-name" }, c1 = { class: "installed-pack-source" }, u1 = { class: "action-buttons" }, d1 = /* @__PURE__ */ Ie({
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
              (o(!0), i(W, null, he(u.value, (w) => (o(), i("button", {
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
}), m1 = /* @__PURE__ */ Te(d1, [["__scopeId", "data-v-4338b305"]]), f1 = { class: "item-navigator" }, v1 = { class: "nav-item-info" }, p1 = ["title"], g1 = { class: "nav-controls" }, h1 = { class: "nav-arrows" }, y1 = ["disabled"], w1 = ["disabled"], _1 = { class: "nav-position" }, k1 = /* @__PURE__ */ Ie({
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
}, sw = { class: "node-manual-entry-modal" }, nw = { class: "node-modal-body" }, ow = { class: "node-modal-actions" }, aw = /* @__PURE__ */ Ie({
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
    const k = M(() => n.nodes[r.value]), $ = M(() => n.nodes.filter((J) => n.nodeChoices.has(J.node_type)).length), S = M(() => n.autoResolvedPackages.filter((J) => !n.skippedPackages.has(J.package_id)).length);
    function x(J) {
      return n.skippedPackages.has(J);
    }
    function T(J) {
      a("package-skip", J);
    }
    function I(J) {
      J >= 0 && J < n.nodes.length && (r.value = J);
    }
    function P() {
      var J;
      for (let te = r.value + 1; te < n.nodes.length; te++) {
        const le = n.nodes[te];
        if (!((J = n.nodeChoices) != null && J.has(le.node_type))) {
          I(te);
          return;
        }
      }
    }
    function O() {
      k.value && (a("mark-optional", k.value.node_type), Kt(() => P()));
    }
    function U() {
      k.value && (a("skip", k.value.node_type), Kt(() => P()));
    }
    function B() {
      k.value && a("clear-choice", k.value.node_type);
    }
    function R() {
      k.value && (d.value = k.value.node_type, v.value = [], c.value = !0, N(d.value));
    }
    function A() {
      f.value = "", u.value = !0;
    }
    function Q(J) {
      k.value && (a("installed-pack-selected", k.value.node_type, J), Kt(() => P()));
    }
    function ae() {
      c.value = !1, d.value = "", v.value = [];
    }
    function H() {
      u.value = !1, f.value = "";
    }
    let ue = null;
    function q() {
      ue && clearTimeout(ue), ue = setTimeout(() => {
        N(d.value);
      }, 300);
    }
    async function N(J) {
      if (!J.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(J, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function j(J) {
      k.value && (a("manual-entry", k.value.node_type, J.package_id, {
        install_source: "registry",
        version: J.registry_version || null
      }), ae(), Kt(() => P()));
    }
    function pe(J) {
      !k.value || !J.repository || (a("manual-entry", k.value.node_type, J.package_id, {
        install_source: "git",
        repository: J.repository
      }), ae(), Kt(() => P()));
    }
    function ne(J) {
      return !!J.github_stars || !!J.downloads;
    }
    function re(J) {
      return J ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: J >= 1e3 ? 1 : 0
      }).format(J) : "";
    }
    function me() {
      !k.value || !f.value.trim() || (a("manual-entry", k.value.node_type, f.value.trim()), H(), Kt(() => P()));
    }
    return (J, te) => {
      var le, xe;
      return o(), i("div", b1, [
        e.autoResolvedPackages.length > 0 ? (o(), i("div", $1, [
          s("div", C1, [
            te[6] || (te[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", x1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", S1, [
            (o(!0), i(W, null, he(e.autoResolvedPackages, (ye) => (o(), i("div", {
              key: ye.package_id,
              class: "resolved-package-item"
            }, [
              s("div", I1, [
                s("code", E1, m(ye.package_id), 1),
                s("span", T1, m(ye.node_types_count) + " node type" + m(ye.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", M1, [
                x(ye.package_id) ? (o(), i("span", R1, " SKIPPED ")) : (o(), i("span", P1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (Fe) => T(ye.package_id)
                }, m(x(ye.package_id) ? "Include" : "Skip"), 9, D1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (o(), i("div", L1)) : y("", !0),
        e.nodes.length > 0 ? (o(), i(W, { key: 2 }, [
          s("div", N1, [
            te[7] || (te[7] = s("div", { class: "step-info" }, [
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
            onPrev: te[0] || (te[0] = (ye) => I(r.value - 1)),
            onNext: te[1] || (te[1] = (ye) => I(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          k.value ? (o(), i("div", O1, [
            b(m1, {
              "node-type": k.value.node_type,
              "has-multiple-options": !!((le = k.value.options) != null && le.length),
              choice: (xe = e.nodeChoices) == null ? void 0 : xe.get(k.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: O,
              onSkip: U,
              onManualEntry: A,
              onSearch: R,
              onClearChoice: B,
              onInstalledPackSelected: Q
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (o(), i("div", A1, [...te[8] || (te[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (o(), D(us, { to: "body" }, [
          c.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: te[4] || (te[4] = $t((ye) => w.value = !0, ["self"])),
            onMouseup: $t(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: te[3] || (te[3] = (ye) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                te[9] || (te[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ae
                }, "✕")
              ]),
              s("div", z1, [
                b(Dt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": te[2] || (te[2] = (ye) => d.value = ye),
                  placeholder: "Search registry by node type or package name...",
                  onInput: q
                }, null, 8, ["modelValue"]),
                s("div", F1, [
                  v.value.length > 0 ? (o(), i("div", B1, [
                    (o(!0), i(W, null, he(v.value, (ye) => (o(), i("div", {
                      key: ye.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", V1, [
                        s("div", W1, [
                          s("code", G1, m(ye.package_id), 1),
                          ye.display_name && ye.display_name !== ye.package_id ? (o(), i("span", j1, m(ye.display_name), 1)) : y("", !0)
                        ]),
                        ne(ye) ? (o(), i("div", H1, [
                          ye.github_stars ? (o(), i("span", q1, " ★ " + m(re(ye.github_stars)), 1)) : y("", !0),
                          ye.downloads ? (o(), i("span", K1, " ↓ " + m(re(ye.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      ye.description ? (o(), i("div", J1, m(ye.description), 1)) : y("", !0),
                      s("div", Q1, [
                        ye.can_install_registry ? (o(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (Fe) => j(ye)
                        }, " Install from Registry ", 8, Y1)) : y("", !0),
                        ye.can_install_git ? (o(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (Fe) => pe(ye)
                        }, " Install from GitHub ", 8, X1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : p.value ? (o(), i("div", Z1, "Searching...")) : d.value ? (o(), i("div", ew, 'No packages found matching "' + m(d.value) + '"', 1)) : (o(), i("div", tw, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (o(), D(us, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $t(H, ["self"])
          }, [
            s("div", sw, [
              s("div", { class: "node-modal-header" }, [
                te[10] || (te[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: H
                }, "✕")
              ]),
              s("div", nw, [
                b(Dt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": te[5] || (te[5] = (ye) => f.value = ye),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", ow, [
                  b(Ue, {
                    variant: "secondary",
                    onClick: H
                  }, {
                    default: h(() => [...te[11] || (te[11] = [
                      C("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ue, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: me
                  }, {
                    default: h(() => [...te[12] || (te[12] = [
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
}), lw = /* @__PURE__ */ Te(aw, [["__scopeId", "data-v-a85bb4b7"]]), iw = /* @__PURE__ */ Ie({
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
}, Sw = { class: "action-buttons" }, Iw = /* @__PURE__ */ Ie({
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
            (o(!0), i(W, null, he(e.options, (v, p) => (o(), i("label", {
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
}, Jw = { class: "model-download-url-modal" }, Qw = { class: "model-modal-body" }, Yw = { class: "model-input-group" }, Xw = { class: "model-input-group" }, Zw = { class: "model-modal-actions" }, e0 = /* @__PURE__ */ Ie({
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
    function a(ne) {
      var re;
      return ne && ((re = n[ne]) == null ? void 0 : re[0]) || null;
    }
    const l = e, r = t, c = _(0), u = _(!1), d = _(!1), f = _(""), v = _(""), p = _(""), w = _([]), g = _(!1), k = M(() => l.models[c.value]), $ = M(() => l.models.some((ne) => ne.is_download_intent)), S = M(() => l.models.filter(
      (ne) => l.modelChoices.has(ne.filename) || ne.is_download_intent
    ).length), x = M(() => {
      var re;
      if (!k.value) return "";
      const ne = a((re = k.value.reference) == null ? void 0 : re.node_type);
      return ne ? `${ne}/${k.value.filename}` : "";
    }), T = M(() => {
      var re;
      if (!k.value) return "not-found";
      const ne = l.modelChoices.get(k.value.filename);
      if (ne)
        switch (ne.action) {
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
      return k.value.is_download_intent ? "download" : (re = k.value.options) != null && re.length ? "ambiguous" : "not-found";
    }), I = M(() => {
      var re, me;
      if (!k.value) return;
      const ne = l.modelChoices.get(k.value.filename);
      if (ne)
        switch (ne.action) {
          case "select":
            return (re = ne.selected_model) != null && re.filename ? `→ ${ne.selected_model.filename}` : "Selected";
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
    function P(ne) {
      ne >= 0 && ne < l.models.length && (c.value = ne);
    }
    function O() {
      var ne;
      for (let re = c.value + 1; re < l.models.length; re++) {
        const me = l.models[re];
        if (!me.is_download_intent && !((ne = l.modelChoices) != null && ne.has(me.filename))) {
          P(re);
          return;
        }
      }
    }
    function U() {
      k.value && (r("mark-optional", k.value.filename), Kt(() => O()));
    }
    function B() {
      k.value && (r("skip", k.value.filename), Kt(() => O()));
    }
    function R(ne) {
      k.value && (r("option-selected", k.value.filename, ne), Kt(() => O()));
    }
    function A() {
      k.value && r("clear-choice", k.value.filename);
    }
    function Q() {
      k.value && (f.value = k.value.filename, u.value = !0);
    }
    function ae() {
      k.value && (v.value = k.value.download_source || "", p.value = k.value.target_path || x.value, d.value = !0);
    }
    function H() {
      u.value = !1, f.value = "", w.value = [];
    }
    function ue() {
      d.value = !1, v.value = "", p.value = "";
    }
    function q() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function N(ne) {
      k.value && (H(), Kt(() => O()));
    }
    function j() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), p.value.trim() || void 0), ue(), Kt(() => O()));
    }
    function pe(ne) {
      if (!ne) return "Unknown";
      const re = ne / (1024 * 1024 * 1024);
      return re >= 1 ? `${re.toFixed(2)} GB` : `${(ne / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ne, re) => {
      var me, J, te;
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
          onPrev: re[0] || (re[0] = (le) => P(c.value - 1)),
          onNext: re[1] || (re[1] = (le) => P(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (o(), i("div", Nw, [
          b(Ew, {
            filename: k.value.filename,
            "node-type": ((me = k.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((J = k.value.options) != null && J.length),
            options: k.value.options,
            choice: (te = e.modelChoices) == null ? void 0 : te.get(k.value.filename),
            status: T.value,
            "status-label": I.value,
            onMarkOptional: U,
            onSkip: B,
            onDownloadUrl: ae,
            onSearch: Q,
            onOptionSelected: R,
            onClearChoice: A
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), i("div", Uw, [...re[5] || (re[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (o(), D(us, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $t(H, ["self"])
          }, [
            s("div", Ow, [
              s("div", { class: "model-modal-header" }, [
                re[6] || (re[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: H
                }, "✕")
              ]),
              s("div", Aw, [
                b(Dt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": re[2] || (re[2] = (le) => f.value = le),
                  placeholder: "Search by filename, category...",
                  onInput: q
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (o(), i("div", zw, [
                  (o(!0), i(W, null, he(w.value, (le) => (o(), i("div", {
                    key: le.hash,
                    class: "model-search-result-item",
                    onClick: (xe) => N()
                  }, [
                    s("div", Bw, [
                      s("code", Vw, m(le.filename), 1)
                    ]),
                    s("div", Ww, [
                      s("span", Gw, m(le.category), 1),
                      s("span", jw, m(pe(le.size)), 1)
                    ]),
                    le.relative_path ? (o(), i("div", Hw, m(le.relative_path), 1)) : y("", !0)
                  ], 8, Fw))), 128))
                ])) : f.value && !g.value ? (o(), i("div", qw, ' No models found matching "' + m(f.value) + '" ', 1)) : y("", !0),
                g.value ? (o(), i("div", Kw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (o(), D(us, { to: "body" }, [
          d.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $t(ue, ["self"])
          }, [
            s("div", Jw, [
              s("div", { class: "model-modal-header" }, [
                re[7] || (re[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ue
                }, "✕")
              ]),
              s("div", Qw, [
                s("div", Yw, [
                  re[8] || (re[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(Dt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": re[3] || (re[3] = (le) => v.value = le),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Xw, [
                  re[9] || (re[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(Dt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": re[4] || (re[4] = (le) => p.value = le),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Zw, [
                  b(Ue, {
                    variant: "secondary",
                    onClick: ue
                  }, {
                    default: h(() => [...re[10] || (re[10] = [
                      C("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ue, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: j
                  }, {
                    default: h(() => [...re[11] || (re[11] = [
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
}, p0 = { class: "package-name" }, g0 = { class: "change-kind" }, h0 = { class: "version current" }, y0 = { class: "version proposed" }, w0 = /* @__PURE__ */ Ie({
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
    return (u, d) => (o(), D(Pt, {
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
              (o(!0), i(W, null, he(e.preview.requirements, (f) => (o(), i("code", {
                key: f,
                class: "chip"
              }, m(f), 1))), 128))
            ])
          ])) : y("", !0),
          s("div", m0, [
            d[11] || (d[11] = s("div", { class: "section-title" }, "Proposed Package Changes", -1)),
            e.preview.changes.length === 0 ? (o(), i("div", f0, " No package version changes found. ")) : (o(), i("div", v0, [
              (o(!0), i(W, null, he(r.value, (f) => (o(), i("div", {
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
  class: "summary-item error"
}, J0 = { class: "summary-text" }, Q0 = {
  key: 6,
  class: "summary-item warning"
}, Y0 = { class: "summary-text" }, X0 = {
  key: 7,
  class: "failed-list"
}, Z0 = { class: "failed-node-id" }, e_ = { class: "failed-error" }, t_ = {
  key: 8,
  class: "failed-list dependency-review-list"
}, s_ = { class: "failed-node-id" }, n_ = ["onClick"], o_ = {
  key: 10,
  class: "summary-item success"
}, a_ = { class: "summary-text" }, l_ = {
  key: 11,
  class: "summary-note"
}, i_ = {
  key: 12,
  class: "restart-prompt"
}, r_ = {
  key: 3,
  class: "phase-content error"
}, c_ = { class: "error-message" }, u_ = /* @__PURE__ */ Ie({
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
      var j, pe;
      const q = ((j = t.progress.nodeInstallProgress) == null ? void 0 : j.totalNodes) || t.progress.nodesToInstall.length;
      if (!q) return 0;
      const N = ((pe = t.progress.nodeInstallProgress) == null ? void 0 : pe.completedNodes.length) ?? 0;
      return Math.round(N / q * 100);
    }), c = M(() => {
      var q;
      return ((q = t.progress.nodeInstallProgress) == null ? void 0 : q.completedNodes.filter((N) => !N.success && !N.dependency_review)) || [];
    });
    function u(q) {
      var N;
      return ((N = q.dependency_review) == null ? void 0 : N.identifier) || q.node_id;
    }
    const d = M(() => {
      var q;
      return ((q = t.progress.nodeInstallProgress) == null ? void 0 : q.completedNodes.filter((N) => N.dependency_review && !l.value.has(u(N)))) || [];
    }), f = M(() => l.value.size), v = M(() => t.progress.needsRestart || f.value > 0), p = M(() => c.value.length > 0 || d.value.length > 0), w = M(() => t.progress.nodesInstalled.length), g = M(() => {
      var q;
      return ((q = t.progress.nodesMarkedOptional) == null ? void 0 : q.length) || 0;
    }), k = M(() => {
      var q;
      return ((q = t.progress.nodesMapped) == null ? void 0 : q.length) || 0;
    }), $ = M(() => t.progress.modelPathsSynced || 0), S = M(() => t.progress.completedFiles.length > 0), x = M(() => w.value > 0 || g.value > 0 || k.value > 0 || $.value > 0 || S.value || v.value || f.value > 0), T = M(() => x.value ? "Workflow dependencies resolved" : "No changes applied");
    function I(q, N) {
      var pe, ne;
      const j = (pe = t.progress.nodeInstallProgress) == null ? void 0 : pe.completedNodes.find((re) => re.node_id === q);
      return j ? j.success ? "complete" : "failed" : ((ne = t.progress.nodeInstallProgress) == null ? void 0 : ne.currentIndex) === N ? "installing" : "pending";
    }
    function P(q) {
      var N, j;
      return (j = (N = t.progress.nodeInstallProgress) == null ? void 0 : N.completedNodes.find((pe) => pe.node_id === q)) == null ? void 0 : j.error;
    }
    const O = _(!1), U = _(!1), B = _(!1), R = _(null), A = _(null), Q = _(null);
    async function ae(q) {
      var j;
      const N = u(q);
      Q.value = N, O.value = !0, U.value = !0, B.value = !1, R.value = null, A.value = null;
      try {
        if ((j = q.dependency_review) != null && j.preview) {
          A.value = q.dependency_review.preview;
          return;
        }
        const pe = await n({ id: N });
        A.value = pe.preview, pe.preview.success || (R.value = pe.preview.error || "Unable to generate dependency preview");
      } catch (pe) {
        R.value = pe instanceof Error ? pe.message : "Unable to generate dependency preview";
      } finally {
        U.value = !1;
      }
    }
    async function H() {
      const q = Q.value, N = A.value;
      if (!(!q || !N || B.value)) {
        B.value = !0, R.value = null;
        try {
          const j = await a({
            id: q,
            accepted_preview: {
              baseline_fingerprint: N.baseline_fingerprint,
              diff_fingerprint: N.diff_fingerprint,
              proposed_fingerprint: N.proposed_fingerprint
            }
          });
          if (j.status !== "success")
            throw new Error(j.error || j.message || "Unable to apply dependency changes");
          l.value = /* @__PURE__ */ new Set([
            ...l.value,
            q
          ]), ue();
        } catch (j) {
          R.value = j instanceof Error ? j.message : "Unable to apply dependency changes";
        } finally {
          B.value = !1;
        }
      }
    }
    function ue() {
      O.value = !1, U.value = !1, B.value = !1, R.value = null, A.value = null, Q.value = null;
    }
    return (q, N) => {
      var j, pe, ne, re, me;
      return o(), i("div", _0, [
        e.progress.phase === "resolving" ? (o(), i("div", k0, [...N[2] || (N[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (o(), i("div", b0, [
          N[3] || (N[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", $0, " Installing " + m((((j = e.progress.nodeInstallProgress) == null ? void 0 : j.currentIndex) ?? 0) + 1) + " of " + m(((pe = e.progress.nodeInstallProgress) == null ? void 0 : pe.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", C0, [
            s("div", x0, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${r.value}%` })
              }, null, 4)
            ]),
            s("span", S0, m(((ne = e.progress.nodeInstallProgress) == null ? void 0 : ne.completedNodes.length) ?? 0) + " / " + m(((re = e.progress.nodeInstallProgress) == null ? void 0 : re.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", I0, [
            (o(!0), i(W, null, he(e.progress.nodesToInstall, (J, te) => (o(), i("div", {
              key: J,
              class: Ve(["install-item", I(J, te)])
            }, [
              s("span", E0, [
                I(J, te) === "pending" ? (o(), i("span", T0, "○")) : I(J, te) === "installing" ? (o(), i("span", M0, "◌")) : I(J, te) === "complete" ? (o(), i("span", P0, "✓")) : I(J, te) === "failed" ? (o(), i("span", R0, "✗")) : y("", !0)
              ]),
              s("code", null, m(J), 1),
              P(J) ? (o(), i("span", D0, m(P(J)), 1)) : y("", !0)
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
              N[4] || (N[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", z0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            f.value > 0 ? (o(), i("div", F0, [
              N[5] || (N[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", B0, m(f.value) + " reviewed package" + m(f.value > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            g.value > 0 ? (o(), i("div", V0, [
              N[6] || (N[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", W0, m(g.value) + " node type" + m(g.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            k.value > 0 ? (o(), i("div", G0, [
              N[7] || (N[7] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", j0, m(k.value) + " node mapping" + m(k.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            $.value > 0 ? (o(), i("div", H0, [
              N[8] || (N[8] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", q0, m($.value) + " model path" + m($.value > 1 ? "s" : "") + " synced", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", K0, [
              N[9] || (N[9] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", J0, m(c.value.length) + " package" + m(c.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", Q0, [
              N[10] || (N[10] = s("span", { class: "summary-icon" }, "⚠", -1)),
              s("span", Y0, m(d.value.length) + " package" + m(d.value.length > 1 ? "s" : "") + " need dependency review", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", X0, [
              (o(!0), i(W, null, he(c.value, (J) => (o(), i("div", {
                key: J.node_id,
                class: "failed-item"
              }, [
                s("code", Z0, m(J.node_id), 1),
                s("span", e_, m(J.error), 1)
              ]))), 128))
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", t_, [
              (o(!0), i(W, null, he(d.value, (J) => (o(), i("div", {
                key: J.node_id,
                class: "failed-item dependency-review-item"
              }, [
                s("code", s_, m(J.node_id), 1),
                N[11] || (N[11] = s("span", { class: "failed-error" }, "Dependency changes require review before install.", -1)),
                s("button", {
                  class: "review-button",
                  onClick: (te) => ae(J)
                }, " View Changes ", 8, n_)
              ]))), 128))
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("button", {
              key: 9,
              class: "retry-button",
              onClick: N[0] || (N[0] = (J) => q.$emit("retry-failed"))
            }, " Retry Failed (" + m(c.value.length) + ") ", 1)) : y("", !0),
            p.value ? y("", !0) : (o(), i("div", o_, [
              N[12] || (N[12] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", a_, m(T.value), 1)
            ])),
            S.value ? (o(), i("p", l_, "Model downloads will continue in the background.")) : y("", !0),
            v.value ? (o(), i("div", i_, [
              N[13] || (N[13] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: N[1] || (N[1] = (J) => q.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (o(), i("div", r_, [
          N[14] || (N[14] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", c_, m(e.progress.error), 1)
        ])) : y("", !0),
        O.value ? (o(), D(wc, {
          key: 4,
          loading: U.value,
          error: R.value,
          preview: A.value,
          "can-apply": !!(Q.value && ((me = A.value) != null && me.success)),
          applying: B.value,
          onClose: ue,
          onApply: H
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ]);
    };
  }
}), d_ = /* @__PURE__ */ Te(u_, [["__scopeId", "data-v-0d61d037"]]), m_ = {
  key: 0,
  class: "loading-state"
}, f_ = {
  key: 1,
  class: "wizard-content"
}, v_ = {
  key: 0,
  class: "step-content"
}, p_ = { class: "analysis-summary" }, g_ = { class: "analysis-header" }, h_ = { class: "summary-description" }, y_ = { class: "stats-grid" }, w_ = { class: "stat-card" }, __ = { class: "stat-items" }, k_ = {
  key: 0,
  class: "stat-item success"
}, b_ = { class: "stat-count" }, $_ = {
  key: 1,
  class: "stat-item info"
}, C_ = { class: "stat-count" }, x_ = {
  key: 2,
  class: "stat-item warning"
}, S_ = { class: "stat-count" }, I_ = {
  key: 3,
  class: "stat-item warning"
}, E_ = { class: "stat-count" }, T_ = {
  key: 4,
  class: "stat-item warning"
}, M_ = { class: "stat-count" }, P_ = {
  key: 5,
  class: "stat-item error"
}, R_ = { class: "stat-count" }, D_ = { class: "stat-card" }, L_ = { class: "stat-items" }, N_ = { class: "stat-item success" }, U_ = { class: "stat-count" }, O_ = {
  key: 0,
  class: "stat-item info"
}, A_ = { class: "stat-count" }, z_ = {
  key: 1,
  class: "stat-item warning"
}, F_ = { class: "stat-count" }, B_ = {
  key: 2,
  class: "stat-item warning"
}, V_ = { class: "stat-count" }, W_ = {
  key: 3,
  class: "stat-item error"
}, G_ = { class: "stat-count" }, j_ = {
  key: 0,
  class: "status-message warning"
}, H_ = { class: "status-text" }, q_ = {
  key: 1,
  class: "status-message warning"
}, K_ = { class: "status-text" }, J_ = {
  key: 2,
  class: "status-message info"
}, Q_ = { class: "status-text" }, Y_ = {
  key: 3,
  class: "status-message info"
}, X_ = { class: "status-text" }, Z_ = {
  key: 4,
  class: "status-message info"
}, ek = { class: "status-text" }, tk = {
  key: 5,
  class: "status-message warning"
}, sk = { class: "status-text" }, nk = {
  key: 6,
  class: "status-message success"
}, ok = {
  key: 7,
  class: "category-mismatch-section"
}, ak = { class: "mismatch-list" }, lk = { class: "mismatch-path" }, ik = { class: "mismatch-target" }, rk = {
  key: 8,
  class: "category-mismatch-section"
}, ck = { class: "mismatch-list" }, uk = { class: "mismatch-path" }, dk = { class: "status-text" }, mk = {
  key: 1,
  class: "step-content node-step-content"
}, fk = {
  key: 2,
  class: "step-content package-step-content"
}, vk = { class: "package-step-header" }, pk = { class: "stat-badge" }, gk = {
  key: 0,
  class: "package-section"
}, hk = { class: "package-section-header" }, yk = { class: "package-section-title" }, wk = { class: "stat-badge" }, _k = { class: "package-list" }, kk = { class: "package-info" }, bk = { class: "item-name" }, $k = { class: "package-meta" }, Ck = { class: "package-actions" }, xk = {
  key: 0,
  class: "choice-badge install"
}, Sk = {
  key: 1,
  class: "choice-badge skip"
}, Ik = {
  key: 1,
  class: "community-node-section"
}, Ek = { class: "community-node-header" }, Tk = { class: "community-node-title" }, Mk = { class: "community-node-list" }, Pk = { class: "community-node-info" }, Rk = { class: "community-node-heading" }, Dk = { class: "item-name" }, Lk = { class: "community-node-package" }, Nk = { class: "community-node-meta" }, Uk = { class: "community-node-guidance" }, Ok = { key: 0 }, Ak = {
  key: 0,
  class: "community-node-selection"
}, zk = { class: "community-selected-label" }, Fk = {
  key: 1,
  class: "community-node-actions"
}, Bk = {
  key: 4,
  class: "step-content"
}, Vk = { class: "review-summary" }, Wk = { class: "review-stats" }, Gk = { class: "review-stat" }, jk = { class: "stat-value" }, Hk = { class: "review-stat" }, qk = { class: "stat-value" }, Kk = { class: "review-stat" }, Jk = { class: "stat-value" }, Qk = { class: "review-stat" }, Yk = { class: "stat-value" }, Xk = {
  key: 0,
  class: "review-section"
}, Zk = { class: "section-title" }, eb = { class: "review-items" }, tb = { class: "item-name" }, sb = { class: "item-choice" }, nb = {
  key: 0,
  class: "choice-badge install"
}, ob = {
  key: 1,
  class: "choice-badge skip"
}, ab = {
  key: 1,
  class: "review-section"
}, lb = { class: "section-title" }, ib = { class: "review-items" }, rb = { class: "item-name" }, cb = { class: "item-choice" }, ub = {
  key: 0,
  class: "choice-badge install"
}, db = {
  key: 1,
  class: "choice-badge optional"
}, mb = {
  key: 2,
  class: "choice-badge skip"
}, fb = {
  key: 2,
  class: "review-section"
}, vb = { class: "section-title" }, pb = { class: "review-items" }, gb = { class: "item-name" }, hb = { class: "item-choice" }, yb = {
  key: 0,
  class: "choice-badge install"
}, wb = {
  key: 1,
  class: "choice-badge mapped"
}, _b = {
  key: 2,
  class: "choice-badge optional"
}, kb = {
  key: 3,
  class: "choice-badge skip"
}, bb = {
  key: 1,
  class: "choice-badge pending"
}, $b = {
  key: 3,
  class: "review-section"
}, Cb = { class: "section-title" }, xb = { class: "review-items download-details" }, Sb = { class: "download-info" }, Ib = { class: "item-name" }, Eb = { class: "download-meta" }, Tb = { class: "download-path" }, Mb = ["title"], Pb = {
  key: 4,
  class: "review-section"
}, Rb = { class: "section-title" }, Db = { class: "review-items" }, Lb = { class: "item-name" }, Nb = { class: "item-choice" }, Ub = {
  key: 0,
  class: "choice-badge install"
}, Ob = {
  key: 1,
  class: "choice-badge download"
}, Ab = {
  key: 2,
  class: "choice-badge optional"
}, zb = {
  key: 3,
  class: "choice-badge skip"
}, Fb = {
  key: 4,
  class: "choice-badge skip"
}, Bb = {
  key: 1,
  class: "choice-badge download"
}, Vb = {
  key: 2,
  class: "choice-badge pending"
}, Wb = {
  key: 5,
  class: "no-choices"
}, Gb = /* @__PURE__ */ Ie({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const n = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: f } = hc(), { loadPendingDownloads: v } = Hn(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ft(), k = _(null), $ = _([]), S = _(!1), x = _(!1), T = _(null), I = _("analysis"), P = _([]), O = _(/* @__PURE__ */ new Map()), U = _(/* @__PURE__ */ new Map()), B = _(/* @__PURE__ */ new Set()), R = M(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return pe.value && Y.push({ id: "nodes", label: "Nodes" }), te.value && Y.push({ id: "packages", label: "Packages" }), ne.value && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), I.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    });
    M(() => k.value ? k.value.stats.needs_user_input : !1);
    const A = M(() => N.value.filter(
      (Y) => !O.value.has(Y.reference.node_type)
    ).length), Q = M(() => ie.value.filter(
      (L) => !O.value.has(L.node_type)
    ).length + $e.value.length + A.value), ae = M(() => k.value ? k.value.nodes.unresolved.filter(
      (Y) => !O.value.has(Y.reference.node_type)
    ).length : 0), H = M(() => k.value ? k.value.nodes.ambiguous.filter(
      (Y) => !O.value.has(Y.reference.node_type)
    ).length : 0), ue = M(() => k.value ? k.value.nodes.version_gated || [] : []), q = M(() => k.value ? k.value.nodes.uninstallable || [] : []), N = M(() => q.value.filter((Y) => {
      var L;
      return !!((L = Y.package) != null && L.package_id);
    })), j = M(() => ue.value.length > 0), pe = M(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 || Ee.value.length > 0 : !1), ne = M(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), re = M(() => k.value ? k.value.stats.download_intents > 0 : !1), me = M(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), J = M(() => N.value.length > 0), te = M(() => me.value || J.value), le = M(() => k.value ? k.value.nodes.resolved.length : 0), xe = M(() => k.value ? k.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), ye = M(() => xe.value.length > 0), Fe = M(() => pe.value ? "nodes" : te.value ? "packages" : ne.value ? "models" : "review"), Le = M(() => {
      if (!k.value) return [];
      const Y = k.value.nodes.resolved.filter((ce) => !ce.is_installed), L = /* @__PURE__ */ new Set();
      return Y.filter((ce) => L.has(ce.package.package_id) ? !1 : (L.add(ce.package.package_id), !0));
    }), _e = M(() => {
      if (!k.value) return [];
      const Y = k.value.nodes.resolved.filter((ce) => !ce.is_installed), L = /* @__PURE__ */ new Map();
      for (const ce of Y) {
        const Je = L.get(ce.package.package_id);
        Je ? Je.node_types_count++ : L.set(ce.package.package_id, {
          package_id: ce.package.package_id,
          title: ce.package.title,
          node_types_count: 1
        });
      }
      return Array.from(L.values());
    }), Pe = M(() => _e.value.filter((Y) => !B.value.has(Y.package_id)).length), ge = M(() => _e.value.length + N.value.length), ke = M(() => {
      const Y = N.value.filter(
        (L) => O.value.has(L.reference.node_type)
      ).length;
      return _e.value.length + Y;
    }), E = M(() => Le.value.filter((Y) => !B.value.has(Y.package.package_id))), F = M(() => k.value ? k.value.models.resolved.filter(
      (Y) => Y.match_type === "download_intent" || Y.match_type === "property_download_intent"
    ).map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), ie = M(() => {
      if (!k.value) return [];
      const Y = Ee.value.map((Je) => ({
        node_type: Je.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), L = k.value.nodes.unresolved.map((Je) => ({
        node_type: Je.reference.node_type,
        reason: Je.reason,
        is_unresolved: !0,
        options: void 0
      })), ce = k.value.nodes.ambiguous.map((Je) => ({
        node_type: Je.reference.node_type,
        has_multiple_options: !0,
        options: Je.options.map((tt) => ({
          package_id: tt.package.package_id,
          title: tt.package.title,
          match_confidence: tt.match_confidence,
          match_type: tt.match_type,
          is_installed: tt.is_installed
        }))
      }));
      return [...Y, ...L, ...ce];
    }), Ee = M(() => k.value ? k.value.nodes.resolved.filter(
      (Y) => {
        var L;
        return ((L = Y.saved_choice) == null ? void 0 : L.action) === "map-installed";
      }
    ) : []), $e = M(() => {
      if (!k.value) return [];
      const Y = k.value.models.unresolved.map((ce) => ({
        filename: ce.reference.widget_value,
        reference: ce.reference,
        reason: ce.reason,
        is_unresolved: !0,
        options: void 0
      })), L = k.value.models.ambiguous.map((ce) => ({
        filename: ce.reference.widget_value,
        reference: ce.reference,
        has_multiple_options: !0,
        options: ce.options.map((Je) => ({
          model: Je.model,
          match_confidence: Je.match_confidence,
          match_type: Je.match_type,
          has_download_source: Je.has_download_source
        }))
      }));
      return [...Y, ...L];
    }), Ce = M(() => {
      const Y = $e.value, L = F.value.map((ce) => ({
        filename: ce.filename,
        reference: ce.reference,
        is_download_intent: !0,
        resolved_model: ce.resolved_model,
        download_source: ce.download_source,
        target_path: ce.target_path,
        options: void 0
      }));
      return [...Y, ...L];
    }), Oe = M(() => F.value.filter((Y) => {
      const L = U.value.get(Y.filename);
      return L ? L.action === "download" : !0;
    }).map((Y) => ({
      filename: Y.filename,
      url: Y.download_source,
      target_path: Y.target_path
    })));
    function ee(Y, L = 50) {
      return Y.length <= L ? Y : Y.slice(0, L - 3) + "...";
    }
    const V = M(() => {
      let Y = E.value.length;
      for (const L of O.value.values())
        L.action === "install" && Y++;
      for (const L of U.value.values())
        L.action === "select" && Y++;
      return Y;
    }), de = M(() => {
      let Y = 0;
      for (const L of U.value.values())
        L.action === "download" && Y++;
      for (const L of F.value)
        U.value.get(L.filename) || Y++;
      return Y;
    }), We = M(() => {
      let Y = 0;
      for (const L of O.value.values())
        L.action === "optional" && Y++;
      for (const L of U.value.values())
        L.action === "optional" && Y++;
      return Y;
    }), Be = M(() => {
      let Y = B.value.size;
      for (const L of O.value.values())
        L.action === "skip" && Y++;
      for (const L of U.value.values())
        L.action === "skip" && Y++;
      for (const L of ie.value)
        O.value.has(L.node_type) || Y++;
      for (const L of $e.value)
        U.value.has(L.filename) || Y++;
      return Y;
    }), we = M(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, pe.value) {
        const L = ie.value.length, ce = ie.value.filter(
          (Je) => O.value.has(Je.node_type)
        ).length;
        Y.nodes = { resolved: ce, total: L };
      }
      if (te.value && (Y.packages = {
        resolved: ke.value,
        total: ge.value || 1
      }), ne.value) {
        const L = Ce.value.length, ce = Ce.value.filter(
          (Je) => U.value.has(Je.filename) || Je.is_download_intent
        ).length;
        Y.models = { resolved: ce, total: L };
      }
      if (Y.review = { resolved: 1, total: 1 }, I.value === "applying") {
        const L = d.totalFiles || 1, ce = d.completedFiles.length;
        Y.applying = { resolved: ce, total: L };
      }
      return Y;
    });
    function se(Y) {
      I.value = Y;
    }
    function Ke() {
      const Y = R.value.findIndex((L) => L.id === I.value);
      Y > 0 && (I.value = R.value[Y - 1].id);
    }
    function Ne() {
      const Y = R.value.findIndex((L) => L.id === I.value);
      Y < R.value.length - 1 && (I.value = R.value[Y + 1].id);
    }
    function Xe() {
      const Y = R.value.findIndex((ce) => ce.id === I.value), L = R.value[Y + 1];
      return (L == null ? void 0 : L.label) || "Review";
    }
    function De(Y) {
      var L;
      return !!((L = Y.package) != null && L.latest_version);
    }
    function Ae(Y) {
      switch (Y) {
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
    function He(Y) {
      return Y.filter((L) => L.installed && L.tracked).filter((L) => L.name !== "comfygit-manager").map((L) => ({
        package_id: L.registry_id || L.name,
        source: L.source
      })).filter((L, ce, Je) => Je.findIndex((tt) => tt.package_id === L.package_id) === ce).sort((L, ce) => {
        const Je = Ae(L.source) - Ae(ce.source);
        return Je !== 0 ? Je : L.package_id.localeCompare(ce.package_id);
      });
    }
    async function kt() {
      S.value = !0, T.value = null;
      try {
        const [Y, L] = await Promise.all([
          l(n.workflowName),
          g()
        ]);
        k.value = Y, $.value = He(L.nodes), Ut(Y);
      } catch (Y) {
        T.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Ut(Y) {
      O.value.clear();
      for (const L of Y.nodes.unresolved)
        L.saved_choice && O.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Y.nodes.resolved)
        L.saved_choice && O.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Y.nodes.ambiguous)
        L.saved_choice && O.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Y.nodes.uninstallable)
        L.saved_choice && O.value.set(L.reference.node_type, L.saved_choice);
    }
    function Gt() {
      P.value.includes("analysis") || P.value.push("analysis"), pe.value ? I.value = "nodes" : te.value ? I.value = "packages" : ne.value ? I.value = "models" : I.value = "review";
    }
    function X(Y) {
      O.value.set(Y, { action: "optional" });
    }
    function Z(Y) {
      O.value.set(Y, { action: "skip" });
    }
    function ve(Y, L) {
      var Je;
      const ce = ie.value.find((tt) => tt.node_type === Y);
      (Je = ce == null ? void 0 : ce.options) != null && Je[L] && O.value.set(Y, {
        action: "install",
        package_id: ce.options[L].package_id
      });
    }
    function Qe(Y, L, ce = {}) {
      O.value.set(Y, {
        action: "install",
        package_id: L,
        install_source: ce.install_source,
        repository: ce.repository,
        version: ce.version
      });
    }
    function Re(Y, L) {
      O.value.set(Y, {
        action: "map-installed",
        package_id: L
      });
    }
    function lt(Y) {
      O.value.delete(Y);
    }
    function et(Y) {
      return O.value.get(Y);
    }
    function pt(Y) {
      const L = et(Y);
      return L ? L.action === "optional" ? "Will be marked optional" : L.action === "skip" ? "Will be skipped" : L.action === "install" ? L.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function Rt(Y, L) {
      var tt;
      const ce = (tt = Y.package) == null ? void 0 : tt.package_id;
      if (!ce) return;
      const Je = {
        action: "install",
        package_id: ce,
        version: Y.package.latest_version || null,
        install_source: L
      };
      L === "git" && Y.package.repository && (Je.repository = Y.package.repository), O.value.set(Y.reference.node_type, Je);
    }
    function Ye(Y) {
      O.value.set(Y, { action: "optional" });
    }
    function Ct(Y) {
      O.value.set(Y, { action: "skip" });
    }
    function Xt(Y) {
      O.value.delete(Y);
    }
    function as(Y) {
      B.value.has(Y) ? B.value.delete(Y) : B.value.add(Y);
    }
    function K(Y) {
      U.value.set(Y, { action: "optional" });
    }
    function fe(Y) {
      U.value.set(Y, { action: "skip" });
    }
    function ze(Y, L) {
      var Je;
      const ce = $e.value.find((tt) => tt.filename === Y);
      (Je = ce == null ? void 0 : ce.options) != null && Je[L] && U.value.set(Y, {
        action: "select",
        selected_model: ce.options[L].model
      });
    }
    function be(Y, L, ce) {
      U.value.set(Y, {
        action: "download",
        url: L,
        target_path: ce
      });
    }
    function Ge(Y) {
      U.value.delete(Y);
    }
    async function Ze(Y) {
      try {
        await p(Y);
      } catch (L) {
        T.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function ct() {
      var Y, L, ce, Je;
      x.value = !0, T.value = null, f(), d.phase = "resolving", I.value = "applying";
      try {
        const tt = await r(n.workflowName, O.value, U.value, B.value);
        tt.models_to_download && tt.models_to_download.length > 0 && u(n.workflowName, tt.models_to_download), d.nodesMarkedOptional = tt.nodes_marked_optional || [], d.nodesMapped = tt.nodes_mapped || [], d.modelPathsSynced = tt.model_paths_synced || 0;
        const mt = Array.from(O.value.values()).map((gt) => {
          if ((gt == null ? void 0 : gt.action) !== "install" || gt.install_source !== "git")
            return null;
          const Cs = gt.repository, Lt = gt.package_id;
          return !Cs || !Lt ? null : {
            id: Lt,
            repository: Cs,
            selectedVersion: gt.version || "latest"
          };
        }).filter((gt) => !!gt), At = new Set(mt.map((gt) => gt.id)), $s = new Set(
          Array.from(O.value.values()).filter((gt) => (gt == null ? void 0 : gt.action) === "install" && !!gt.package_id).map((gt) => gt.package_id)
        ), Zt = [
          ...tt.nodes_to_install || [],
          ...E.value.filter((gt) => !$s.has(gt.package.package_id)).map((gt) => gt.package.package_id)
        ];
        if (d.nodesToInstall = [...new Set(Zt)].filter((gt) => !At.has(gt)), d.nodesToInstall.length > 0 && await c(n.workflowName), mt.length > 0) {
          d.phase = "installing";
          const gt = ((Y = d.nodeInstallProgress) == null ? void 0 : Y.completedNodes) || [], Cs = ((L = d.nodeInstallProgress) == null ? void 0 : L.totalNodes) || d.nodesToInstall.length;
          d.nodesToInstall = [
            ...d.nodesToInstall,
            ...mt.map((Lt) => Lt.id)
          ], d.nodeInstallProgress = {
            completedNodes: gt,
            totalNodes: Cs + mt.length
          };
          for (const Lt of mt) {
            const qn = d.nodeInstallProgress.completedNodes.length;
            d.nodeInstallProgress.currentNode = Lt.id, d.nodeInstallProgress.currentIndex = qn;
            try {
              const Vt = await w({
                id: Lt.id,
                version: Lt.selectedVersion,
                selected_version: Lt.selectedVersion,
                repository: Lt.repository,
                install_source: "git",
                mode: "remote",
                channel: "default"
              });
              if (((ce = Vt.status) == null ? void 0 : ce.status_str) === "dependency_review_required") {
                d.nodeInstallProgress.completedNodes.push({
                  node_id: Lt.id,
                  success: !1,
                  error: ((Je = Vt.status.messages) == null ? void 0 : Je[0]) || "Dependency review required",
                  dependency_review: Vt.status.dependency_review
                }), d.dependencyReviews = [
                  ...d.dependencyReviews || [],
                  ...Vt.status.dependency_review ? [{ node_id: Lt.id, dependency_review: Vt.status.dependency_review }] : []
                ];
                continue;
              }
              d.nodeInstallProgress.completedNodes.push({
                node_id: Lt.id,
                success: !0
              }), d.nodesInstalled = [.../* @__PURE__ */ new Set([...d.nodesInstalled, Lt.id])], d.needsRestart = !0;
            } catch (Vt) {
              const $n = Vt instanceof Error ? Vt.message : `Failed to install ${Lt.id}`;
              d.nodeInstallProgress.completedNodes.push({
                node_id: Lt.id,
                success: !1,
                error: $n
              }), d.installError = $n;
            }
          }
        }
        d.phase = "complete", await v(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), a("refresh"), a("install");
      } catch (tt) {
        T.value = tt instanceof Error ? tt.message : "Failed to apply resolution", d.error = T.value, d.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function ut() {
      a("refresh"), a("restart"), a("close");
    }
    async function St() {
      var L;
      const Y = ((L = d.nodeInstallProgress) == null ? void 0 : L.completedNodes.filter((ce) => !ce.success).map((ce) => ce.node_id)) || [];
      if (Y.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, d.nodesToInstall = Y, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(n.workflowName), d.phase = "complete";
        } catch (ce) {
          d.error = ce instanceof Error ? ce.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return dt(kt), (Y, L) => (o(), D(Pt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: T.value || void 0,
      "fixed-height": !0,
      onClose: L[1] || (L[1] = (ce) => a("close"))
    }, {
      body: h(() => [
        S.value && !k.value ? (o(), i("div", m_, [...L[2] || (L[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (o(), i("div", f_, [
          b(e1, {
            steps: R.value,
            "current-step": I.value,
            "completed-steps": P.value,
            "step-stats": we.value,
            onStepChange: se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          I.value === "analysis" ? (o(), i("div", v_, [
            s("div", p_, [
              s("div", g_, [
                L[3] || (L[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", h_, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", y_, [
                s("div", w_, [
                  L[16] || (L[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", __, [
                    le.value > 0 ? (o(), i("div", k_, [
                      L[4] || (L[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", b_, m(le.value), 1),
                      L[5] || (L[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (o(), i("div", $_, [
                      L[6] || (L[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", C_, m(k.value.stats.packages_needing_installation), 1),
                      L[7] || (L[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    H.value > 0 ? (o(), i("div", x_, [
                      L[8] || (L[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", S_, m(H.value), 1),
                      L[9] || (L[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ue.value.length > 0 ? (o(), i("div", I_, [
                      L[10] || (L[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", E_, m(ue.value.length), 1),
                      L[11] || (L[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    A.value > 0 ? (o(), i("div", T_, [
                      L[12] || (L[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", M_, m(A.value), 1),
                      L[13] || (L[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    ae.value > 0 ? (o(), i("div", P_, [
                      L[14] || (L[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", R_, m(ae.value), 1),
                      L[15] || (L[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", D_, [
                  L[27] || (L[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", L_, [
                    s("div", N_, [
                      L[17] || (L[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", U_, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      L[18] || (L[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (o(), i("div", O_, [
                      L[19] || (L[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", A_, m(k.value.stats.download_intents), 1),
                      L[20] || (L[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    ye.value ? (o(), i("div", z_, [
                      L[21] || (L[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", F_, m(xe.value.length), 1),
                      L[22] || (L[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    k.value.models.ambiguous.length > 0 ? (o(), i("div", B_, [
                      L[23] || (L[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", V_, m(k.value.models.ambiguous.length), 1),
                      L[24] || (L[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    k.value.models.unresolved.length > 0 ? (o(), i("div", W_, [
                      L[25] || (L[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", G_, m(k.value.models.unresolved.length), 1),
                      L[26] || (L[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              Q.value > 0 ? (o(), i("div", j_, [
                L[28] || (L[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", H_, m(Q.value) + " item" + m(Q.value === 1 ? "" : "s") + " need your input", 1)
              ])) : j.value ? (o(), i("div", q_, [
                L[29] || (L[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", K_, m(ue.value.length) + " node type" + m(ue.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : A.value > 0 ? (o(), i("div", J_, [
                L[30] || (L[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", Q_, m(A.value) + " community-mapped node type" + m(A.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : me.value ? (o(), i("div", Y_, [
                L[31] || (L[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", X_, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(re.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : re.value ? (o(), i("div", Z_, [
                L[32] || (L[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", ek, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ye.value ? (o(), i("div", tk, [
                L[33] || (L[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", sk, m(xe.value.length) + " model" + m(xe.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (o(), i("div", nk, [...L[34] || (L[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ye.value ? (o(), i("div", ok, [
                L[37] || (L[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", ak, [
                  (o(!0), i(W, null, he(xe.value, (ce) => {
                    var Je, tt;
                    return o(), i("div", {
                      key: ce.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", lk, m(ce.actual_category) + "/" + m((Je = ce.model) == null ? void 0 : Je.filename), 1),
                      L[36] || (L[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", ik, m((tt = ce.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      ce.file_path ? (o(), D(Ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (mt) => Ze(ce.file_path)
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
              j.value ? (o(), i("div", rk, [
                L[38] || (L[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", ck, [
                  (o(!0), i(W, null, he(ue.value, (ce) => {
                    var Je;
                    return o(), i("div", {
                      key: `vg-${ce.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", uk, m(ce.reference.node_type), 1),
                      s("span", dk, m(ce.guidance || ((Je = k.value.node_guidance) == null ? void 0 : Je[ce.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          I.value === "nodes" ? (o(), i("div", mk, [
            b(lw, {
              nodes: ie.value,
              "node-choices": O.value,
              "auto-resolved-packages": [],
              "skipped-packages": B.value,
              "installed-node-packs": $.value,
              onMarkOptional: X,
              onSkip: Z,
              onOptionSelected: ve,
              onManualEntry: Qe,
              onInstalledPackSelected: Re,
              onClearChoice: lt,
              onPackageSkip: as
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          I.value === "packages" ? (o(), i("div", fk, [
            s("div", vk, [
              L[39] || (L[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", pk, m(ke.value) + "/" + m(ge.value) + " decided", 1)
            ]),
            _e.value.length > 0 ? (o(), i("div", gk, [
              s("div", hk, [
                s("div", null, [
                  s("h4", yk, "Resolved Packages (" + m(_e.value.length) + ")", 1),
                  L[40] || (L[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", wk, m(Pe.value) + "/" + m(_e.value.length) + " to install", 1)
              ]),
              s("div", _k, [
                (o(!0), i(W, null, he(_e.value, (ce) => (o(), i("div", {
                  key: ce.package_id,
                  class: "package-item"
                }, [
                  s("div", kk, [
                    s("code", bk, m(ce.package_id), 1),
                    s("span", $k, m(ce.node_types_count) + " node type" + m(ce.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", Ck, [
                    B.value.has(ce.package_id) ? (o(), i("span", Sk, "Skipped")) : (o(), i("span", xk, "Will Install")),
                    b(Ue, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => as(ce.package_id)
                    }, {
                      default: h(() => [
                        C(m(B.value.has(ce.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            N.value.length > 0 ? (o(), i("div", Ik, [
              s("div", Ek, [
                s("h4", Tk, "Community-Mapped Packages (" + m(N.value.length) + ")", 1),
                L[41] || (L[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", Mk, [
                (o(!0), i(W, null, he(N.value, (ce) => (o(), i("div", {
                  key: `community-${ce.reference.node_type}-${ce.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", Pk, [
                    s("div", Rk, [
                      s("code", Dk, m(ce.reference.node_type), 1),
                      s("span", Lk, m(ce.package.title || ce.package.package_id), 1)
                    ]),
                    s("div", Nk, m(ce.package.package_id), 1),
                    s("div", Uk, [
                      L[42] || (L[42] = C(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ce.guidance ? (o(), i("span", Ok, m(ce.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  et(ce.reference.node_type) ? (o(), i("div", Ak, [
                    s("div", zk, m(pt(ce.reference.node_type)), 1),
                    b(Ue, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (Je) => Xt(ce.reference.node_type)
                    }, {
                      default: h(() => [...L[43] || (L[43] = [
                        C(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (o(), i("div", Fk, [
                    De(ce) ? (o(), D(Ue, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !ce.package.package_id,
                      onClick: (Je) => Rt(ce, "registry")
                    }, {
                      default: h(() => [...L[44] || (L[44] = [
                        C(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    ce.package.repository ? (o(), D(Ue, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !ce.package.package_id,
                      onClick: (Je) => Rt(ce, "git")
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
                      onClick: (Je) => Ye(ce.reference.node_type)
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
                      onClick: (Je) => Ct(ce.reference.node_type)
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
            models: Ce.value,
            "model-choices": U.value,
            onMarkOptional: K,
            onSkip: fe,
            onOptionSelected: ze,
            onDownloadUrl: be,
            onClearChoice: Ge
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          I.value === "review" ? (o(), i("div", Bk, [
            s("div", Vk, [
              L[53] || (L[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", Wk, [
                s("div", Gk, [
                  s("span", jk, m(V.value), 1),
                  L[48] || (L[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", Hk, [
                  s("span", qk, m(de.value), 1),
                  L[49] || (L[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", Kk, [
                  s("span", Jk, m(We.value), 1),
                  L[50] || (L[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", Qk, [
                  s("span", Yk, m(Be.value), 1),
                  L[51] || (L[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              _e.value.length > 0 ? (o(), i("div", Xk, [
                s("h4", Zk, "Node Packages (" + m(_e.value.length) + ")", 1),
                s("div", eb, [
                  (o(!0), i(W, null, he(_e.value, (ce) => (o(), i("div", {
                    key: ce.package_id,
                    class: "review-item"
                  }, [
                    s("code", tb, m(ce.package_id), 1),
                    s("div", sb, [
                      B.value.has(ce.package_id) ? (o(), i("span", ob, "Skipped")) : (o(), i("span", nb, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              N.value.length > 0 ? (o(), i("div", ab, [
                s("h4", lb, "Community-Mapped Packages (" + m(N.value.length) + ")", 1),
                s("div", ib, [
                  (o(!0), i(W, null, he(N.value, (ce) => {
                    var Je, tt, mt;
                    return o(), i("div", {
                      key: `review-community-${ce.reference.node_type}-${ce.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", rb, m(ce.reference.node_type), 1),
                      s("div", cb, [
                        ((Je = et(ce.reference.node_type)) == null ? void 0 : Je.action) === "install" ? (o(), i("span", ub, m(((tt = et(ce.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((mt = et(ce.reference.node_type)) == null ? void 0 : mt.action) === "optional" ? (o(), i("span", db, " Optional ")) : (o(), i("span", mb, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ie.value.length > 0 ? (o(), i("div", fb, [
                s("h4", vb, "Node Choices (" + m(ie.value.length) + ")", 1),
                s("div", pb, [
                  (o(!0), i(W, null, he(ie.value, (ce) => {
                    var Je, tt, mt, At, $s, Zt;
                    return o(), i("div", {
                      key: ce.node_type,
                      class: "review-item"
                    }, [
                      s("code", gb, m(ce.node_type), 1),
                      s("div", hb, [
                        O.value.has(ce.node_type) ? (o(), i(W, { key: 0 }, [
                          ((Je = O.value.get(ce.node_type)) == null ? void 0 : Je.action) === "install" ? (o(), i("span", yb, m((tt = O.value.get(ce.node_type)) == null ? void 0 : tt.package_id), 1)) : ((mt = O.value.get(ce.node_type)) == null ? void 0 : mt.action) === "map-installed" ? (o(), i("span", wb, " Mapped to " + m((At = O.value.get(ce.node_type)) == null ? void 0 : At.package_id), 1)) : (($s = O.value.get(ce.node_type)) == null ? void 0 : $s.action) === "optional" ? (o(), i("span", _b, " Optional ")) : ((Zt = O.value.get(ce.node_type)) == null ? void 0 : Zt.action) === "skip" ? (o(), i("span", kb, " Skip ")) : y("", !0)
                        ], 64)) : (o(), i("span", bb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Oe.value.length > 0 ? (o(), i("div", $b, [
                s("h4", Cb, "Models to Download (" + m(Oe.value.length) + ")", 1),
                s("div", xb, [
                  (o(!0), i(W, null, he(Oe.value, (ce) => (o(), i("div", {
                    key: ce.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Sb, [
                      s("code", Ib, m(ce.filename), 1),
                      s("div", Eb, [
                        s("span", Tb, "→ " + m(ce.target_path), 1),
                        ce.url ? (o(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ce.url
                        }, m(ee(ce.url)), 9, Mb)) : y("", !0)
                      ])
                    ]),
                    L[52] || (L[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Ce.value.length > 0 ? (o(), i("div", Pb, [
                s("h4", Rb, "Models (" + m(Ce.value.length) + ")", 1),
                s("div", Db, [
                  (o(!0), i(W, null, he(Ce.value, (ce) => {
                    var Je, tt, mt, At, $s, Zt, gt;
                    return o(), i("div", {
                      key: ce.filename,
                      class: "review-item"
                    }, [
                      s("code", Lb, m(ce.filename), 1),
                      s("div", Nb, [
                        U.value.has(ce.filename) ? (o(), i(W, { key: 0 }, [
                          ((Je = U.value.get(ce.filename)) == null ? void 0 : Je.action) === "select" ? (o(), i("span", Ub, m((mt = (tt = U.value.get(ce.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : mt.filename), 1)) : ((At = U.value.get(ce.filename)) == null ? void 0 : At.action) === "download" ? (o(), i("span", Ob, " Download ")) : (($s = U.value.get(ce.filename)) == null ? void 0 : $s.action) === "optional" ? (o(), i("span", Ab, " Optional ")) : ((Zt = U.value.get(ce.filename)) == null ? void 0 : Zt.action) === "skip" ? (o(), i("span", zb, " Skip ")) : ((gt = U.value.get(ce.filename)) == null ? void 0 : gt.action) === "cancel_download" ? (o(), i("span", Fb, " Cancel Download ")) : y("", !0)
                        ], 64)) : ce.is_download_intent ? (o(), i("span", Bb, " Pending Download ")) : (o(), i("span", Vb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Le.value.length === 0 && N.value.length === 0 && ie.value.length === 0 && Ce.value.length === 0 ? (o(), i("div", Wb, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          I.value === "applying" ? (o(), D(d_, {
            key: 5,
            progress: it(d),
            onRestart: ut,
            onRetryFailed: St
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        I.value !== "analysis" && I.value !== "applying" ? (o(), D(Ue, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: Ke
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
          onClick: L[0] || (L[0] = (ce) => a("close"))
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
          onClick: Gt
        }, {
          default: h(() => [
            C(m(Fe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        I.value === "nodes" || I.value === "packages" || I.value === "models" ? (o(), D(Ue, {
          key: 3,
          variant: "primary",
          onClick: Ne
        }, {
          default: h(() => [
            C(" Continue to " + m(Xe()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        I.value === "review" ? (o(), D(Ue, {
          key: 4,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: ct
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
}), jb = /* @__PURE__ */ Te(Gb, [["__scopeId", "data-v-f198a009"]]), Hb = { class: "search-input-wrapper" }, qb = ["value", "placeholder"], Kb = /* @__PURE__ */ Ie({
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
    return dt(() => {
      n.autoFocus && l.value && l.value.focus();
    }), (d, f) => (o(), i("div", Hb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Ss(u, ["escape"])
      }, null, 40, qb),
      e.clearable && e.modelValue ? (o(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Jb = /* @__PURE__ */ Te(Kb, [["__scopeId", "data-v-266f857a"]]), Qb = { class: "search-bar" }, Yb = /* @__PURE__ */ Ie({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, n) => (o(), i("div", Qb, [
      b(Jb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: n[1] || (n[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), kn = /* @__PURE__ */ Te(Yb, [["__scopeId", "data-v-3d51bbfd"]]), Xb = { class: "section-group" }, Zb = {
  key: 0,
  class: "section-content"
}, e2 = /* @__PURE__ */ Ie({
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
    return (c, u) => (o(), i("section", Xb, [
      b(ys, {
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
      !e.collapsible || l.value ? (o(), i("div", Zb, [
        rt(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ot = /* @__PURE__ */ Te(e2, [["__scopeId", "data-v-c48e33ed"]]), t2 = { class: "item-header" }, s2 = {
  key: 0,
  class: "item-icon"
}, n2 = { class: "item-info" }, o2 = {
  key: 0,
  class: "item-title"
}, a2 = {
  key: 1,
  class: "item-subtitle"
}, l2 = {
  key: 0,
  class: "item-details"
}, i2 = {
  key: 1,
  class: "item-actions"
}, r2 = /* @__PURE__ */ Ie({
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
      s("div", t2, [
        l.$slots.icon ? (o(), i("span", s2, [
          rt(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", n2, [
          l.$slots.title ? (o(), i("div", o2, [
            rt(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (o(), i("div", a2, [
            rt(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (o(), i("div", l2, [
        rt(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (o(), i("div", i2, [
        rt(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ts = /* @__PURE__ */ Te(r2, [["__scopeId", "data-v-cc435e0e"]]), c2 = { class: "empty-state" }, u2 = {
  key: 0,
  class: "empty-icon"
}, d2 = { class: "empty-message" }, m2 = /* @__PURE__ */ Ie({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, n) => (o(), i("div", c2, [
      e.icon ? (o(), i("div", u2, m(e.icon), 1)) : y("", !0),
      s("p", d2, m(e.message), 1),
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
}), Ms = /* @__PURE__ */ Te(m2, [["__scopeId", "data-v-4466284f"]]), f2 = { class: "loading-state" }, v2 = { class: "loading-message" }, p2 = /* @__PURE__ */ Ie({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, n) => (o(), i("div", f2, [
      n[0] || (n[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", v2, m(e.message), 1)
    ]));
  }
}), Bs = /* @__PURE__ */ Te(p2, [["__scopeId", "data-v-ad8436c9"]]), g2 = { class: "error-state" }, h2 = { class: "error-message" }, y2 = /* @__PURE__ */ Ie({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, n) => (o(), i("div", g2, [
      n[2] || (n[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", h2, m(e.message), 1),
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
}), Vs = /* @__PURE__ */ Te(y2, [["__scopeId", "data-v-5397be48"]]);
function w2(e) {
  return e.toLowerCase().endsWith(".json") ? e : `${e}.json`;
}
function Li(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function _2(e) {
  const t = e.trim(), n = w2(t);
  return t.startsWith("workflows/") ? Li([n, t]) : Li([
    `workflows/${n}`,
    n,
    t
  ]);
}
function k2(e) {
  return e.trim().replace(/^workflows\//, "").replace(/\.json$/i, "");
}
async function b2(e) {
  const t = _2(e), n = [];
  for (const a of t)
    try {
      const l = await Js(`/userdata/${encodeURIComponent(a)}`);
      if (l.ok)
        return l.json();
      n.push(`${a}: ${l.status}`);
    } catch (l) {
      n.push(`${a}: ${l instanceof Error ? l.message : String(l)}`);
    }
  throw new Error(`Could not load saved workflow "${e}" (${n.join(", ")})`);
}
async function $2(e) {
  const t = window.app;
  if (typeof t.loadGraphData != "function")
    throw new Error("ComfyUI loadGraphData is not available");
  const n = await b2(e);
  await t.loadGraphData(
    n,
    !0,
    !0,
    k2(e),
    {
      showMissingModelsDialog: !0,
      showMissingNodesDialog: !0
    }
  ), await new Promise((a) => requestAnimationFrame(a));
}
const C2 = /* @__PURE__ */ Ie({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getWorkflows: l } = ft(), r = _([]), c = _(!1), u = _(null), d = _(""), f = _(!0), v = _(!1), p = _(!1), w = _(!1), g = _(null), k = M(
      () => r.value.filter((J) => J.status === "broken")
    ), $ = M(
      () => r.value.filter((J) => J.status === "new")
    ), S = M(
      () => r.value.filter((J) => J.status === "modified")
    ), x = M(
      () => r.value.filter((J) => J.status === "synced")
    ), T = M(() => {
      if (!d.value.trim()) return r.value;
      const J = d.value.toLowerCase();
      return r.value.filter((te) => te.name.toLowerCase().includes(J));
    }), I = M(
      () => k.value.filter(
        (J) => !d.value.trim() || J.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = M(
      () => $.value.filter(
        (J) => !d.value.trim() || J.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = M(
      () => S.value.filter(
        (J) => !d.value.trim() || J.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), U = M(
      () => x.value.filter(
        (J) => !d.value.trim() || J.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = M(
      () => v.value ? U.value : U.value.slice(0, 5)
    );
    async function R(J = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(J);
      } catch (te) {
        u.value = te instanceof Error ? te.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: R });
    function A(J) {
      g.value = J, p.value = !0;
    }
    function Q(J) {
      g.value = J, p.value = !1, w.value = !0;
    }
    async function ae(J) {
      g.value = J;
      try {
        await $2(J);
      } catch (te) {
        console.error("[ComfyGit] Failed to activate workflow for contract mapping:", te), u.value = te instanceof Error ? te.message : "Failed to open workflow for contract mapping";
        return;
      }
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: J }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function H(J) {
      var xe;
      const le = (xe = J.detail) == null ? void 0 : xe.workflowName;
      le && ae(le);
    }
    function ue() {
    }
    function q() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function N() {
      w.value = !1, await R(!0);
    }
    async function j() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function pe(J) {
      return J.replace(/uninstallable node mappings?/gi, (te) => te.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function ne(J) {
      if (J.issue_summary && J.issue_summary.trim().length > 0)
        return pe(J.issue_summary);
      const te = [];
      return J.version_gated_count && J.version_gated_count > 0 && te.push(`${J.version_gated_count} node${J.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), J.uninstallable_count && J.uninstallable_count > 0 && te.push(`${J.uninstallable_count} node${J.uninstallable_count > 1 ? "s" : ""} need community packages`), J.missing_nodes > 0 && te.push(`${J.missing_nodes} missing node${J.missing_nodes > 1 ? "s" : ""}`), J.missing_models > 0 && te.push(`${J.missing_models} missing model${J.missing_models > 1 ? "s" : ""}`), J.models_with_category_mismatch && J.models_with_category_mismatch > 0 && te.push(`${J.models_with_category_mismatch} model${J.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), J.pending_downloads && J.pending_downloads > 0 && te.push(`${J.pending_downloads} pending download${J.pending_downloads > 1 ? "s" : ""}`), te.length > 0 ? te.join(", ") : "Has issues";
    }
    function re(J) {
      const te = J.sync_state === "new" ? "New" : J.sync_state === "modified" ? "Modified" : J.sync_state === "synced" ? "Synced" : J.sync_state, le = me(J);
      return J.has_path_sync_issues && J.models_needing_path_sync && J.models_needing_path_sync > 0 ? `${J.models_needing_path_sync} model path${J.models_needing_path_sync > 1 ? "s" : ""} need${J.models_needing_path_sync === 1 ? "s" : ""} sync · ${le}` : `${te || "Unknown"} · ${le}`;
    }
    function me(J) {
      const te = J.contract_summary;
      return !te || !te.has_contract ? "No contract" : te.status === "incomplete" ? `${te.input_count} in / ${te.output_count} out · incomplete` : `${te.input_count} in / ${te.output_count} out`;
    }
    return dt(() => {
      R(), window.addEventListener("comfygit:open-workflow-contract", H);
    }), To(() => {
      window.removeEventListener("comfygit:open-workflow-contract", H);
    }), (J, te) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(kn, {
            modelValue: d.value,
            "onUpdate:modelValue": te[0] || (te[0] = (le) => d.value = le),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (o(), D(Bs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), D(Vs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            I.value.length ? (o(), D(Ot, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(I.value, (le) => (o(), D(ts, {
                  key: le.name,
                  status: "broken"
                }, {
                  icon: h(() => [...te[6] || (te[6] = [
                    C("⚠", -1)
                  ])]),
                  title: h(() => [
                    C(m(le.name), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(ne(le)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (xe) => Q(le.name)
                    }, {
                      default: h(() => [...te[7] || (te[7] = [
                        C(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (xe) => A(le.name)
                    }, {
                      default: h(() => [...te[8] || (te[8] = [
                        C(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (xe) => ae(le.name)
                    }, {
                      default: h(() => [...te[9] || (te[9] = [
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
            P.value.length ? (o(), D(Ot, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(P.value, (le) => (o(), D(ts, {
                  key: le.name,
                  status: le.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    C(m(le.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    C(m(le.name), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(re(le)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (xe) => A(le.name)
                    }, {
                      default: h(() => [...te[10] || (te[10] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (xe) => ae(le.name)
                    }, {
                      default: h(() => [...te[11] || (te[11] = [
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
            O.value.length ? (o(), D(Ot, {
              key: 2,
              title: "MODIFIED",
              count: O.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(O.value, (le) => (o(), D(ts, {
                  key: le.name,
                  status: le.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...te[12] || (te[12] = [
                    C("⚡", -1)
                  ])]),
                  title: h(() => [
                    C(m(le.name), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(re(le)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (xe) => A(le.name)
                    }, {
                      default: h(() => [...te[13] || (te[13] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (xe) => ae(le.name)
                    }, {
                      default: h(() => [...te[14] || (te[14] = [
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
            U.value.length ? (o(), D(Ot, {
              key: 3,
              title: "SYNCED",
              count: U.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: te[2] || (te[2] = (le) => f.value = le)
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(B.value, (le) => (o(), D(ts, {
                  key: le.name,
                  status: le.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    C(m(le.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    C(m(le.name), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(re(le)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (xe) => A(le.name)
                    }, {
                      default: h(() => [...te[15] || (te[15] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (xe) => ae(le.name)
                    }, {
                      default: h(() => [...te[16] || (te[16] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && U.value.length > 5 ? (o(), D(Me, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: te[1] || (te[1] = (le) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    C(" View all " + m(U.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            T.value.length ? y("", !0) : (o(), D(Ms, {
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
        onClose: te[3] || (te[3] = (le) => p.value = !1),
        onResolve: te[4] || (te[4] = (le) => Q(g.value)),
        onRefresh: te[5] || (te[5] = (le) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (o(), D(jb, {
        key: 1,
        "workflow-name": g.value,
        onClose: N,
        onInstall: ue,
        onRefresh: q,
        onRestart: j
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), x2 = /* @__PURE__ */ Te(C2, [["__scopeId", "data-v-7bf48b3a"]]), S2 = /* @__PURE__ */ Ie({
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
}), Nl = /* @__PURE__ */ Te(S2, [["__scopeId", "data-v-ccb7816e"]]);
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
const I2 = {
  key: 0,
  class: "model-details"
}, E2 = { class: "detail-section" }, T2 = { class: "detail-row" }, M2 = { class: "detail-value mono" }, P2 = { class: "detail-row" }, R2 = { class: "detail-value mono" }, D2 = { class: "detail-row" }, L2 = { class: "detail-value mono" }, N2 = {
  key: 0,
  class: "detail-row"
}, U2 = { class: "detail-value" }, O2 = ["disabled"], A2 = {
  key: 1,
  class: "detail-row"
}, z2 = { class: "detail-value hash-error" }, F2 = { class: "detail-row" }, B2 = { class: "detail-value" }, V2 = { class: "detail-row" }, W2 = { class: "detail-value" }, G2 = { class: "detail-row" }, j2 = { class: "detail-value" }, H2 = { class: "detail-section" }, q2 = { class: "section-header" }, K2 = {
  key: 0,
  class: "locations-list"
}, J2 = { class: "location-path mono" }, Q2 = {
  key: 0,
  class: "location-modified"
}, Y2 = ["onClick"], X2 = {
  key: 1,
  class: "empty-state"
}, Z2 = { class: "detail-section" }, e$ = { class: "section-header-row" }, t$ = { class: "section-header" }, s$ = {
  key: 0,
  class: "sources-list"
}, n$ = { class: "source-type" }, o$ = ["href"], a$ = ["disabled", "onClick"], l$ = {
  key: 1,
  class: "empty-state"
}, i$ = {
  key: 2,
  class: "source-error"
}, r$ = {
  key: 3,
  class: "source-success"
}, c$ = /* @__PURE__ */ Ie({
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
    function I(ae, H = "success", ue = 2e3) {
      T && clearTimeout(T), x.value = { message: ae, type: H }, T = setTimeout(() => {
        x.value = null;
      }, ue);
    }
    function P(ae) {
      if (!ae) return "Unknown";
      const H = 1024 * 1024 * 1024, ue = 1024 * 1024;
      return ae >= H ? `${(ae / H).toFixed(1)} GB` : ae >= ue ? `${(ae / ue).toFixed(0)} MB` : `${(ae / 1024).toFixed(0)} KB`;
    }
    async function O(ae) {
      try {
        await Ul(ae), I("Copied to clipboard!");
      } catch (H) {
        console.error("Failed to copy:", H), I("Failed to copy to clipboard", "error");
      }
    }
    async function U(ae) {
      if (u.value) {
        v.value = ae, p.value = null, w.value = null;
        try {
          await r(u.value.hash, ae), I("Source removed"), await Q();
        } catch (H) {
          p.value = H instanceof Error ? H.message : "Failed to remove source";
        } finally {
          v.value = null;
        }
      }
    }
    async function B() {
      w.value = "Source added successfully!", g.value = !1, await Q(), a("sourceSaved");
    }
    async function R() {
      await Q();
    }
    async function A() {
      var ae;
      if ((ae = u.value) != null && ae.hash) {
        k.value = !0, $.value = null;
        try {
          u.value = await c(u.value.hash), I("Hashes computed successfully!");
        } catch (H) {
          $.value = H instanceof Error ? H.message : "Failed to compute hashes";
        } finally {
          k.value = !1;
        }
      }
    }
    async function Q() {
      d.value = !0, f.value = null;
      try {
        u.value = await l(n.identifier);
      } catch (ae) {
        f.value = ae instanceof Error ? ae.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return dt(Q), (ae, H) => {
      var ue;
      return o(), i(W, null, [
        b(Pt, {
          title: `Model Details: ${((ue = u.value) == null ? void 0 : ue.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: f.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: H[5] || (H[5] = (q) => ae.$emit("close"))
        }, {
          body: h(() => {
            var q, N, j, pe;
            return [
              u.value ? (o(), i("div", I2, [
                s("section", E2, [
                  s("div", T2, [
                    H[7] || (H[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", M2, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: H[0] || (H[0] = (ne) => O(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", P2, [
                    H[8] || (H[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", R2, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: H[1] || (H[1] = (ne) => O(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", D2, [
                    H[9] || (H[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", L2, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: H[2] || (H[2] = (ne) => O(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (o(), i("div", N2, [
                    H[10] || (H[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", U2, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: k.value,
                        onClick: A
                      }, m(k.value ? "Computing hashes..." : "Compute Full Hashes"), 9, O2)
                    ])
                  ])) : y("", !0),
                  $.value ? (o(), i("div", A2, [
                    H[11] || (H[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", z2, m($.value), 1)
                  ])) : y("", !0),
                  s("div", F2, [
                    H[12] || (H[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", B2, m(P(u.value.size)), 1)
                  ]),
                  s("div", V2, [
                    H[13] || (H[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", W2, m(u.value.category), 1)
                  ]),
                  s("div", G2, [
                    H[14] || (H[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", j2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", H2, [
                  s("h4", q2, "Locations (" + m(((q = u.value.locations) == null ? void 0 : q.length) || 0) + ")", 1),
                  (N = u.value.locations) != null && N.length ? (o(), i("div", K2, [
                    (o(!0), i(W, null, he(u.value.locations, (ne, re) => (o(), i("div", {
                      key: re,
                      class: "location-item"
                    }, [
                      s("span", J2, m(ne.path), 1),
                      ne.modified ? (o(), i("span", Q2, "Modified: " + m(ne.modified), 1)) : y("", !0),
                      ne.path ? (o(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (me) => O(ne.path)
                      }, " Copy File Path ", 8, Y2)) : y("", !0)
                    ]))), 128))
                  ])) : (o(), i("div", X2, "No locations found"))
                ]),
                s("section", Z2, [
                  s("div", e$, [
                    s("h4", t$, "Download Sources (" + m(((j = u.value.sources) == null ? void 0 : j.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: H[3] || (H[3] = (ne) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (pe = u.value.sources) != null && pe.length ? (o(), i("div", s$, [
                    (o(!0), i(W, null, he(u.value.sources, (ne, re) => (o(), i("div", {
                      key: re,
                      class: "source-item"
                    }, [
                      s("span", n$, m(ne.type) + ":", 1),
                      s("a", {
                        href: ne.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(ne.url), 9, o$),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: v.value === ne.url,
                        onClick: (me) => U(ne.url)
                      }, m(v.value === ne.url ? "..." : "×"), 9, a$)
                    ]))), 128))
                  ])) : (o(), i("div", l$, " No download sources configured ")),
                  p.value ? (o(), i("p", i$, m(p.value), 1)) : y("", !0),
                  w.value ? (o(), i("p", r$, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: H[4] || (H[4] = (q) => ae.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (o(), D(us, { to: "body" }, [
          x.value ? (o(), i("div", {
            key: 0,
            class: Ve(["toast", x.value.type])
          }, m(x.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (o(), D(pc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: H[6] || (H[6] = (q) => g.value = !1),
          onSaved: B,
          onHashesComputed: R
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), _c = /* @__PURE__ */ Te(c$, [["__scopeId", "data-v-cd808fbc"]]), u$ = { class: "workflow-links-tab" }, d$ = { class: "section-header-row" }, m$ = {
  key: 0,
  class: "state-message"
}, f$ = {
  key: 1,
  class: "error-message"
}, v$ = {
  key: 2,
  class: "candidate-list"
}, p$ = {
  key: 3,
  class: "state-message"
}, g$ = /* @__PURE__ */ Ie({
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
    return dt(d), (f, v) => (o(), i("div", u$, [
      s("div", d$, [
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
      r.value ? (o(), i("div", m$, "Scanning workflows...")) : c.value ? (o(), i("div", f$, m(c.value), 1)) : u.value.length ? (o(), i("div", v$, [
        (o(!0), i(W, null, he(u.value, (p) => (o(), D(fc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: v[0] || (v[0] = (w) => n("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (o(), i("div", p$, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), h$ = /* @__PURE__ */ Te(g$, [["__scopeId", "data-v-1aac54cc"]]), y$ = { class: "civitai-tab" }, w$ = /* @__PURE__ */ Ie({
  __name: "CivitaiTab",
  setup(e) {
    return (t, n) => (o(), i("div", y$, [...n[0] || (n[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), _$ = /* @__PURE__ */ Te(w$, [["__scopeId", "data-v-44948051"]]), k$ = { class: "direct-url-tab" }, b$ = {
  key: 0,
  class: "error"
}, $$ = /* @__PURE__ */ Ie({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(""), r = _("");
    bt(() => n.initialUrl, (f) => {
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
    return (f, v) => (o(), i("div", k$, [
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
          l.value.trim() && !c.value ? (o(), i("p", b$, " Could not infer a filename from this URL. ")) : y("", !0),
          v[2] || (v[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), C$ = /* @__PURE__ */ Te($$, [["__scopeId", "data-v-a6d21f27"]]), x$ = { class: "download-modal" }, S$ = { class: "tab-bar" }, I$ = ["onClick"], E$ = { class: "tab-content" }, T$ = /* @__PURE__ */ Ie({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, { addToQueue: a } = Hn(), l = [
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
    return (p, w) => e.show ? (o(), D(Pt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: v
    }, {
      body: h(() => [
        s("div", x$, [
          s("div", S$, [
            (o(), i(W, null, he(l, (g) => s("button", {
              key: g.id,
              class: Ve(["tab-btn", { active: r.value === g.id }]),
              onClick: (k) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, I$)), 64))
          ]),
          s("div", E$, [
            r.value === "workflow" ? (o(), D(h$, {
              key: 0,
              onSelectUrl: f
            })) : r.value === "huggingface" ? (o(), D(mc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (o(), D(_$, { key: 2 })) : r.value === "direct" ? (o(), D(C$, {
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
}), kc = /* @__PURE__ */ Te(T$, [["__scopeId", "data-v-de2e4fac"]]), M$ = /* @__PURE__ */ Ie({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const n = t, { getEnvironmentModels: a, getStatus: l } = ft(), r = _([]), c = _([]), u = _("production"), d = _(!1), f = _(null), v = _(""), p = _(!1), w = _(null), g = _(!1);
    function k() {
      p.value = !1, n("navigate", "model-index");
    }
    const $ = M(
      () => r.value.reduce((R, A) => R + (A.size || 0), 0)
    ), S = M(() => {
      if (!v.value.trim()) return r.value;
      const R = v.value.toLowerCase();
      return r.value.filter((A) => A.filename.toLowerCase().includes(R));
    }), x = M(() => {
      if (!v.value.trim()) return c.value;
      const R = v.value.toLowerCase();
      return c.value.filter((A) => A.filename.toLowerCase().includes(R));
    }), T = M(() => {
      const R = {};
      for (const Q of S.value) {
        const ae = Q.type || "other";
        R[ae] || (R[ae] = []), R[ae].push(Q);
      }
      const A = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(R).sort(([Q], [ae]) => {
        const H = A.indexOf(Q), ue = A.indexOf(ae);
        return H >= 0 && ue >= 0 ? H - ue : H >= 0 ? -1 : ue >= 0 ? 1 : Q.localeCompare(ae);
      }).map(([Q, ae]) => ({ type: Q, models: ae }));
    });
    function I(R) {
      if (!R) return "Unknown";
      const A = R / (1024 * 1024);
      return A >= 1024 ? `${(A / 1024).toFixed(1)} GB` : `${A.toFixed(0)} MB`;
    }
    function P(R) {
      w.value = R.hash || R.filename;
    }
    function O(R) {
      n("navigate", "model-index");
    }
    function U(R) {
      alert(`Download functionality not yet implemented for ${R}`);
    }
    async function B() {
      d.value = !0, f.value = null;
      try {
        const R = await a();
        r.value = R, c.value = [];
        const A = await l();
        u.value = A.environment || "production";
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return dt(B), (R, A) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: A[1] || (A[1] = (Q) => p.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (Q) => g.value = !0)
              }, {
                default: h(() => [...A[6] || (A[6] = [
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
          b(kn, {
            modelValue: v.value,
            "onUpdate:modelValue": A[2] || (A[2] = (Q) => v.value = Q),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (o(), D(Bs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (o(), D(Vs, {
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
            (o(!0), i(W, null, he(T.value, (Q) => (o(), D(Ot, {
              key: Q.type,
              title: Q.type.toUpperCase(),
              count: Q.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(Q.models, (ae) => (o(), D(ts, {
                  key: ae.hash || ae.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...A[7] || (A[7] = [
                    C("📦", -1)
                  ])]),
                  title: h(() => [
                    C(m(ae.filename), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(I(ae.size)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Used by:",
                      value: (ae.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Mt, {
                      label: "Path:",
                      value: ae.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => P(ae)
                    }, {
                      default: h(() => [...A[8] || (A[8] = [
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
            x.value.length ? (o(), D(Ot, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(x.value, (Q) => (o(), D(ts, {
                  key: Q.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...A[9] || (A[9] = [
                    C("⚠", -1)
                  ])]),
                  title: h(() => [
                    C(m(Q.filename), 1)
                  ]),
                  subtitle: h(() => [...A[10] || (A[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ae;
                    return [
                      b(Mt, {
                        label: "Required by:",
                        value: ((ae = Q.workflow_names) == null ? void 0 : ae.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => U(Q.filename)
                    }, {
                      default: h(() => [...A[11] || (A[11] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => O(Q.filename)
                    }, {
                      default: h(() => [...A[12] || (A[12] = [
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
            !S.value.length && !x.value.length ? (o(), D(Ms, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(bs, {
        show: p.value,
        title: "About Environment Models",
        onClose: A[3] || (A[3] = (Q) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            A[13] || (A[13] = C(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            A[14] || (A[14] = C(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...A[15] || (A[15] = [
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
        onClose: A[4] || (A[4] = (Q) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(kc, {
        show: g.value,
        onClose: A[5] || (A[5] = (Q) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), P$ = /* @__PURE__ */ Te(M$, [["__scopeId", "data-v-af3ca736"]]), R$ = {
  key: 0,
  class: "indexing-progress"
}, D$ = { class: "progress-info" }, L$ = { class: "progress-label" }, N$ = { class: "progress-count" }, U$ = { class: "progress-bar" }, O$ = { class: "directory-modal-body" }, A$ = { class: "input-group" }, z$ = { class: "current-path" }, F$ = { class: "input-group" }, B$ = /* @__PURE__ */ Ie({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ft(), c = t, u = _([]), d = _(!1), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = _(!1), $ = _(null), S = _(""), x = _(!1), T = _(!1), I = _(null), P = M(
      () => u.value.reduce((ue, q) => ue + (q.size || 0), 0)
    ), O = M(() => {
      if (!p.value.trim()) return u.value;
      const ue = p.value.toLowerCase();
      return u.value.filter((q) => {
        const N = q, j = q.sha256 || N.sha256_hash || "";
        return q.filename.toLowerCase().includes(ue) || j.toLowerCase().includes(ue);
      });
    }), U = M(() => {
      const ue = {};
      for (const N of O.value) {
        const j = N.type || "other";
        ue[j] || (ue[j] = []), ue[j].push(N);
      }
      const q = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ue).sort(([N], [j]) => {
        const pe = q.indexOf(N), ne = q.indexOf(j);
        return pe >= 0 && ne >= 0 ? pe - ne : pe >= 0 ? -1 : ne >= 0 ? 1 : N.localeCompare(j);
      }).map(([N, j]) => ({ type: N, models: j }));
    });
    function B(ue) {
      if (!ue) return "Unknown";
      const q = 1024 * 1024 * 1024, N = 1024 * 1024;
      return ue >= q ? `${(ue / q).toFixed(1)} GB` : ue >= N ? `${(ue / N).toFixed(0)} MB` : `${(ue / 1024).toFixed(0)} KB`;
    }
    function R(ue) {
      g.value = ue.hash || ue.filename;
    }
    async function A() {
      f.value = !0, v.value = null;
      try {
        const ue = await a();
        await ae(), ue.changes > 0 && console.log(`Scan complete: ${ue.changes} changes detected`);
      } catch (ue) {
        v.value = ue instanceof Error ? ue.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function Q() {
      if (S.value.trim()) {
        x.value = !0, v.value = null;
        try {
          const ue = await r(S.value.trim());
          $.value = ue.path, k.value = !1, S.value = "", await ae(), console.log(`Directory changed: ${ue.models_indexed} models indexed`), c("refresh");
        } catch (ue) {
          v.value = ue instanceof Error ? ue.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function ae() {
      d.value = !0, v.value = null;
      try {
        u.value = await n();
      } catch (ue) {
        v.value = ue instanceof Error ? ue.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function H() {
      try {
        const ue = await l();
        $.value = ue.path;
      } catch {
      }
    }
    return dt(() => {
      ae(), H();
    }), (ue, q) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: q[2] || (q[2] = (N) => w.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: A
              }, {
                default: h(() => [
                  C(m(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: q[0] || (q[0] = (N) => k.value = !0)
              }, {
                default: h(() => [...q[10] || (q[10] = [
                  C(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: q[1] || (q[1] = (N) => T.value = !0)
              }, {
                default: h(() => [...q[11] || (q[11] = [
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
          I.value ? (o(), i("div", R$, [
            s("div", D$, [
              s("span", L$, m(I.value.message), 1),
              s("span", N$, m(I.value.current) + "/" + m(I.value.total), 1)
            ]),
            s("div", U$, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(kn, {
            modelValue: p.value,
            "onUpdate:modelValue": q[3] || (q[3] = (N) => p.value = N),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || I.value ? (o(), D(Bs, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (o(), D(Vs, {
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
            (o(!0), i(W, null, he(U.value, (N) => (o(), D(Ot, {
              key: N.type,
              title: N.type.toUpperCase(),
              count: N.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(N.models, (j) => (o(), D(ts, {
                  key: j.sha256 || j.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...q[12] || (q[12] = [
                    C("📦", -1)
                  ])]),
                  title: h(() => [
                    C(m(j.filename), 1)
                  ]),
                  subtitle: h(() => [
                    C(m(B(j.size)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Hash:",
                      value: j.hash ? j.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (pe) => R(j)
                    }, {
                      default: h(() => [...q[13] || (q[13] = [
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
            O.value.length ? y("", !0) : (o(), D(Ms, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(bs, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: q[4] || (q[4] = (N) => w.value = !1)
      }, {
        content: h(() => [...q[14] || (q[14] = [
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
        onClose: q[5] || (q[5] = (N) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k.value ? (o(), D(Pt, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: q[8] || (q[8] = (N) => k.value = !1)
      }, {
        body: h(() => [
          s("div", O$, [
            s("div", A$, [
              q[15] || (q[15] = s("label", null, "Current Directory", -1)),
              s("code", z$, m($.value || "Not set"), 1)
            ]),
            s("div", F$, [
              q[16] || (q[16] = s("label", null, "New Directory Path", -1)),
              b(Dt, {
                modelValue: S.value,
                "onUpdate:modelValue": q[6] || (q[6] = (N) => S.value = N),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            q[17] || (q[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(Ue, {
            variant: "secondary",
            onClick: q[7] || (q[7] = (N) => k.value = !1)
          }, {
            default: h(() => [...q[18] || (q[18] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ue, {
            variant: "primary",
            disabled: !S.value.trim() || x.value,
            loading: x.value,
            onClick: Q
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
        onClose: q[9] || (q[9] = (N) => T.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), V$ = /* @__PURE__ */ Te(B$, [["__scopeId", "data-v-9fca048b"]]), W$ = { class: "node-details" }, G$ = { class: "status-row" }, j$ = {
  key: 0,
  class: "detail-row"
}, H$ = { class: "value" }, q$ = { class: "detail-row" }, K$ = { class: "value" }, J$ = {
  key: 1,
  class: "detail-row"
}, Q$ = { class: "value mono" }, Y$ = {
  key: 2,
  class: "detail-row"
}, X$ = ["href"], Z$ = {
  key: 3,
  class: "detail-row"
}, eC = { class: "value mono small" }, tC = { class: "detail-row" }, sC = {
  key: 0,
  class: "value"
}, nC = {
  key: 1,
  class: "workflow-list"
}, oC = /* @__PURE__ */ Ie({
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
    return (u, d) => (o(), D(Pt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (f) => a("close"))
    }, {
      body: h(() => [
        s("div", W$, [
          s("div", G$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ve(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (o(), i("div", j$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", H$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", q$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", K$, m(c.value), 1)
          ]),
          e.node.registry_id ? (o(), i("div", J$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", Q$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (o(), i("div", Y$, [
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
            ], 8, X$)
          ])) : y("", !0),
          e.node.download_url ? (o(), i("div", Z$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", eC, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", tC, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (o(), i("span", sC, " Not used in any workflows ")) : (o(), i("div", nC, [
              (o(!0), i(W, null, he(e.node.used_in_workflows, (f) => (o(), i("span", {
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
}), aC = /* @__PURE__ */ Te(oC, [["__scopeId", "data-v-b342f626"]]), lC = { class: "dialog-message" }, iC = {
  key: 0,
  class: "dialog-details"
}, rC = {
  key: 1,
  class: "dialog-warning"
}, cC = /* @__PURE__ */ Ie({
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
    return (t, n) => (o(), D(Pt, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", lC, m(e.message), 1),
        e.details && e.details.length ? (o(), i("div", iC, [
          (o(!0), i(W, null, he(e.details, (a, l) => (o(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (o(), i("p", rC, [
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
}), Ol = /* @__PURE__ */ Te(cC, [["__scopeId", "data-v-3670b9f5"]]), uC = { class: "mismatch-warning" }, dC = { class: "version-mismatch" }, mC = { class: "version-actual" }, fC = { class: "version-expected" }, vC = { style: { color: "var(--cg-color-warning)" } }, pC = { style: { color: "var(--cg-color-warning)" } }, gC = {
  key: 0,
  class: "community-status-badge"
}, hC = { key: 0 }, yC = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, wC = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, _C = { class: "criticality-control" }, kC = ["value", "disabled", "onChange"], bC = /* @__PURE__ */ Ie({
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
        (ke) => {
          var E, F;
          return ke.name.toLowerCase().includes(ge) || ((E = ke.description) == null ? void 0 : E.toLowerCase().includes(ge)) || ((F = ke.repository) == null ? void 0 : F.toLowerCase().includes(ge));
        }
      );
    }), P = M(
      () => I.value.filter((ge) => ge.installed && ge.tracked)
    ), O = M(
      () => I.value.filter((ge) => !ge.installed && ge.tracked && !ge.issue_type)
    ), U = M(
      () => I.value.filter((ge) => ge.installed && !ge.tracked)
    ), B = M(
      () => I.value.filter((ge) => ge.issue_type === "version_gated")
    ), R = M(
      () => I.value.filter((ge) => ge.issue_type === "uninstallable")
    );
    function A(ge) {
      return ge.registry_id || ge.name;
    }
    function Q(ge) {
      return S.value.has(A(ge));
    }
    async function ae(ge, ke) {
      const E = ge.registry_id;
      if (!E) {
        a("toast", `Node "${ge.name}" has no package id for install`, "warning");
        return;
      }
      if (ke === "git" && !ge.repository) {
        a("toast", `Node "${ge.name}" has no repository URL for git install`, "warning");
        return;
      }
      const F = {
        id: E,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      ke === "git" && ge.repository && (F.repository = ge.repository, F.install_source = "git"), await d(F), S.value.add(A(ge)), a("toast", `✓ Queued install for "${ge.name}"`, "success");
    }
    function H(ge) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ge] || ge;
    }
    const ue = M(() => n.versionMismatches.length > 0);
    function q(ge) {
      return !ge.used_in_workflows || ge.used_in_workflows.length === 0 ? "Not used in any workflows" : ge.used_in_workflows.length === 1 ? ge.used_in_workflows[0] : `${ge.used_in_workflows.length} workflows`;
    }
    function N(ge) {
      return ge.criticality === "optional" ? "optional" : "required";
    }
    function j(ge) {
      return x.value.has(ge.name);
    }
    async function pe(ge, ke) {
      const E = ke.target, F = N(ge), ie = E.value;
      if (ie !== F) {
        x.value = new Set(x.value).add(ge.name), ge.criticality = ie;
        try {
          const Ee = await f(ge.name, ie);
          if (Ee.status !== "success") {
            ge.criticality = F, a("toast", Ee.message || `Failed to update "${ge.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${ge.name}" as ${ie}`, "success");
        } catch (Ee) {
          ge.criticality = F, E.value = F, a("toast", `Error updating criticality: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
        } finally {
          const Ee = new Set(x.value);
          Ee.delete(ge.name), x.value = Ee;
        }
      }
    }
    function ne(ge) {
      return ge.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function re(ge) {
      return ge.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function me(ge) {
      return ge.registry_id ? `Community-mapped package: ${ge.registry_id}` : "Community-mapped package";
    }
    function J(ge) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function te(ge) {
      $.value = ge;
    }
    function le() {
      a("open-node-manager");
    }
    function xe(ge) {
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
            const ke = await r(ge);
            ke.status === "success" ? (a("toast", `✓ Node "${ge}" tracked as development`, "success"), await Pe()) : a("toast", `Failed to track node: ${ke.message || "Unknown error"}`, "error");
          } catch (ke) {
            a("toast", `Error tracking node: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ye(ge) {
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
            const ke = await u(ge);
            ke.status === "success" ? (a("toast", `✓ Node "${ge}" removed`, "success"), await Pe()) : a("toast", `Failed to remove node: ${ke.message || "Unknown error"}`, "error");
          } catch (ke) {
            a("toast", `Error removing node: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
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
            const ke = await c(ge);
            ke.status === "success" ? (a("toast", `✓ Node "${ge}" installed`, "success"), await Pe()) : a("toast", `Failed to install node: ${ke.message || "Unknown error"}`, "error");
          } catch (ke) {
            a("toast", `Error installing node: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
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
          } catch (ke) {
            a("toast", `Error queueing install: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function _e(ge) {
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
          } catch (ke) {
            a("toast", `Error queueing git install: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
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
    return dt(Pe), (ge, ke) => (o(), i(W, null, [
      b(Qt, null, {
        header: h(() => [
          b(Yt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: ke[0] || (ke[0] = (E) => k.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: h(() => [...ke[7] || (ke[7] = [
                  C(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(kn, {
            modelValue: g.value,
            "onUpdate:modelValue": ke[1] || (ke[1] = (E) => g.value = E),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (o(), D(Bs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (o(), D(Vs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Pe
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            ue.value ? (o(), D(Ot, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", uC, [
                  ke[8] || (ke[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (o(!0), i(W, null, he(e.versionMismatches, (E) => (o(), D(ts, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ke[9] || (ke[9] = [
                    C("⚠", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", dC, [
                      s("span", mC, m(E.actual), 1),
                      ke[10] || (ke[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", fC, m(E.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "warning",
                      size: "sm",
                      onClick: ke[2] || (ke[2] = (F) => a("repair-environment"))
                    }, {
                      default: h(() => [...ke[11] || (ke[11] = [
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
            B.value.length ? (o(), D(Ot, {
              key: 1,
              title: "BLOCKED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(B.value, (E) => (o(), D(ts, {
                  key: `blocked-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ke[12] || (ke[12] = [
                    C("⛔", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", vC, m(ne(E)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Guidance:",
                      value: E.issue_guidance || re(E)
                    }, null, 8, ["value"]),
                    b(Mt, {
                      label: "Used by:",
                      value: q(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => te(E)
                    }, {
                      default: h(() => [...ke[13] || (ke[13] = [
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
            R.value.length ? (o(), D(Ot, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(R.value, (E) => (o(), D(ts, {
                  key: `community-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ke[14] || (ke[14] = [
                    C("⚠", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", pC, m(me(E)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Guidance:",
                      value: E.issue_guidance || J(E)
                    }, null, 8, ["value"]),
                    b(Mt, {
                      label: "Used by:",
                      value: q(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => te(E)
                    }, {
                      default: h(() => [...ke[15] || (ke[15] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    Q(E) ? (o(), i("span", gC, "Queued")) : (o(), i(W, { key: 1 }, [
                      E.registry_id ? (o(), D(Me, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (F) => Le(E)
                      }, {
                        default: h(() => [...ke[16] || (ke[16] = [
                          C(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      E.repository ? (o(), D(Me, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (F) => _e(E)
                      }, {
                        default: h(() => [...ke[17] || (ke[17] = [
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
            U.value.length ? (o(), D(Ot, {
              key: 3,
              title: "UNTRACKED",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(U.value, (E) => (o(), D(ts, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ke[18] || (ke[18] = [
                    C("?", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...ke[19] || (ke[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(Mt, {
                      label: "Used by:",
                      value: q(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => te(E)
                    }, {
                      default: h(() => [...ke[20] || (ke[20] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => xe(E.name)
                    }, {
                      default: h(() => [...ke[21] || (ke[21] = [
                        C(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (F) => ye(E.name)
                    }, {
                      default: h(() => [...ke[22] || (ke[22] = [
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
            P.value.length ? (o(), D(Ot, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(P.value, (E) => (o(), D(ts, {
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
                    E.version ? (o(), i("span", hC, m(E.source === "development" ? "" : "v") + m(E.version), 1)) : (o(), i("span", yC, "version unknown")),
                    s("span", wC, " • " + m(H(E.source)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Used by:",
                      value: q(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => te(E)
                    }, {
                      default: h(() => [...ke[23] || (ke[23] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", _C, [
                      ke[25] || (ke[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: N(E),
                        disabled: j(E),
                        onChange: (F) => pe(E, F)
                      }, [...ke[24] || (ke[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, kC)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (o(), D(Ot, {
              key: 5,
              title: "MISSING",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(O.value, (E) => (o(), D(ts, {
                  key: E.name,
                  status: "missing"
                }, {
                  icon: h(() => [...ke[26] || (ke[26] = [
                    C("!", -1)
                  ])]),
                  title: h(() => [
                    C(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...ke[27] || (ke[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(Mt, {
                      label: "Required by:",
                      value: q(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => te(E)
                    }, {
                      default: h(() => [...ke[28] || (ke[28] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => Fe(E.name)
                    }, {
                      default: h(() => [...ke[29] || (ke[29] = [
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
            !P.value.length && !O.value.length && !B.value.length && !R.value.length && !U.value.length ? (o(), D(Ms, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(bs, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: ke[4] || (ke[4] = (E) => k.value = !1)
      }, {
        content: h(() => [...ke[30] || (ke[30] = [
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
            onClick: ke[3] || (ke[3] = (E) => k.value = !1)
          }, {
            default: h(() => [...ke[31] || (ke[31] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $.value ? (o(), D(aC, {
        key: 0,
        node: $.value,
        onClose: ke[5] || (ke[5] = (E) => $.value = null)
      }, null, 8, ["node"])) : y("", !0),
      T.value ? (o(), D(Ol, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: ke[6] || (ke[6] = (E) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), $C = /* @__PURE__ */ Te(bC, [["__scopeId", "data-v-edfa1c86"]]), CC = { class: "setting-info" }, xC = { class: "setting-label" }, SC = {
  key: 0,
  class: "required-marker"
}, IC = {
  key: 0,
  class: "setting-description"
}, EC = { class: "setting-control" }, TC = /* @__PURE__ */ Ie({
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
      s("div", CC, [
        s("div", xC, [
          C(m(e.label) + " ", 1),
          e.required ? (o(), i("span", SC, "*")) : y("", !0)
        ]),
        e.description ? (o(), i("div", IC, m(e.description), 1)) : y("", !0)
      ]),
      s("div", EC, [
        rt(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), xn = /* @__PURE__ */ Te(TC, [["__scopeId", "data-v-3e106b1c"]]), MC = ["type", "value", "placeholder", "disabled"], PC = /* @__PURE__ */ Ie({
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
    return dt(() => {
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
        d[0] || (d[0] = Ss((f) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ss((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (f) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (f) => u.$emit("blur"))
    }, null, 42, MC));
  }
}), Tn = /* @__PURE__ */ Te(PC, [["__scopeId", "data-v-0380d08f"]]), RC = { class: "toggle" }, DC = ["checked", "disabled"], LC = /* @__PURE__ */ Ie({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", RC, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, DC),
      n[1] || (n[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ni = /* @__PURE__ */ Te(LC, [["__scopeId", "data-v-71c0f550"]]), Qa = "ComfyGit.Deploy.GitHubPAT";
function bc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function NC(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function UC() {
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
    isRemoteHttps: NC
  };
}
const OC = { class: "workspace-settings-content" }, AC = { class: "settings-section" }, zC = { class: "path-setting" }, FC = { class: "path-value" }, BC = { class: "path-setting" }, VC = { class: "path-value" }, WC = { class: "settings-section" }, GC = { class: "token-setting" }, jC = {
  key: 0,
  class: "token-warning"
}, HC = { class: "token-actions" }, qC = { class: "settings-section" }, KC = { class: "settings-section" }, JC = /* @__PURE__ */ Ie({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ft(), { getToken: f, setToken: v, clearToken: p, hasToken: w } = UC(), g = _(!1), k = _(null), $ = _(null), S = _(null), x = _(null), T = _(""), I = _(""), P = _(""), O = _(""), U = _(!1), B = _(!1), R = _(!1), A = _(""), Q = _(!1), ae = _(!1), H = _(null), ue = _(!1), q = _(!0);
    function N(Fe) {
      return Fe.join(" ");
    }
    function j(Fe) {
      return Fe.trim() ? Fe.trim().split(/\s+/) : [];
    }
    const pe = M(() => {
      if (!x.value) return !1;
      const Fe = U.value, Le = B.value, _e = R.value, Pe = O.value !== N(x.value.comfyui_extra_args || []);
      return Fe || Le || _e || Pe;
    }), ne = M(() => w());
    async function re() {
      var Fe;
      g.value = !0, k.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), x.value = { ...S.value }, T.value = S.value.civitai_api_key || "", I.value = S.value.huggingface_token || "", O.value = N(S.value.comfyui_extra_args || []), P.value = f() || "", A.value = P.value, U.value = !1, B.value = !1, R.value = !1, H.value = null;
        const Le = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        ue.value = Le !== "false", q.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Pe = (Fe = (await u()).remotes) == null ? void 0 : Fe.find((ge) => ge.name === "origin");
          Q.value = !!(Pe && bc(Pe.url));
        } catch {
          Q.value = !1;
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
        U.value && (Le.civitai_api_key = T.value || null), B.value && (Le.huggingface_token = I.value || null), O.value !== N(((Fe = x.value) == null ? void 0 : Fe.comfyui_extra_args) || []) && (Le.comfyui_extra_args = j(O.value)), await c(Le, a.workspacePath || void 0), R.value && (P.value ? v(P.value) : p()), await re(), $.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          $.value = null;
        }, 3e3);
      } catch (Le) {
        const _e = Le instanceof Error ? Le.message : "Failed to save settings";
        $.value = { type: "error", message: _e }, l("error", _e);
      }
    }
    function J() {
      x.value && (T.value = x.value.civitai_api_key || "", I.value = x.value.huggingface_token || "", O.value = N(x.value.comfyui_extra_args || []), P.value = A.value, U.value = !1, B.value = !1, R.value = !1, H.value = null, $.value = null);
    }
    async function te() {
      if (P.value) {
        ae.value = !0, H.value = null;
        try {
          const Fe = await d(P.value);
          H.value = {
            type: Fe.status === "success" ? "success" : "error",
            message: Fe.message
          };
        } catch (Fe) {
          H.value = {
            type: "error",
            message: Fe instanceof Error ? Fe.message : "Connection test failed"
          };
        } finally {
          ae.value = !1;
        }
      }
    }
    function le() {
      P.value = "", R.value = !0, H.value = null;
    }
    function xe(Fe) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Fe)), console.log("[ComfyGit] Auto-refresh setting saved:", Fe);
    }
    function ye(Fe) {
      Fe ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Fe ? "enabled" : "disabled");
    }
    return t({
      saveSettings: me,
      resetSettings: J,
      hasChanges: pe,
      loadSettings: re
    }), dt(re), (Fe, Le) => (o(), i("div", OC, [
      g.value ? (o(), D(Bs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (o(), D(Vs, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: re
      }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
        b(Ot, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var _e, Pe;
            return [
              s("div", AC, [
                s("div", zC, [
                  Le[9] || (Le[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Le[10] || (Le[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", FC, m(((_e = S.value) == null ? void 0 : _e.workspace_path) || "Loading..."), 1)
                ]),
                s("div", BC, [
                  Le[11] || (Le[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Le[12] || (Le[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", VC, m(((Pe = S.value) == null ? void 0 : Pe.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Ot, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", WC, [
              b(xn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(Tn, {
                    modelValue: T.value,
                    "onUpdate:modelValue": Le[0] || (Le[0] = (_e) => T.value = _e),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Le[1] || (Le[1] = (_e) => U.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(xn, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  b(Tn, {
                    modelValue: I.value,
                    "onUpdate:modelValue": Le[2] || (Le[2] = (_e) => I.value = _e),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Le[3] || (Le[3] = (_e) => B.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(xn, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", GC, [
                    b(Tn, {
                      modelValue: P.value,
                      "onUpdate:modelValue": Le[4] || (Le[4] = (_e) => P.value = _e),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Le[5] || (Le[5] = (_e) => R.value = !0)
                    }, null, 8, ["modelValue"]),
                    Q.value ? (o(), i("div", jC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Le[15] || (Le[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", HC, [
                      b(Me, {
                        variant: "ghost",
                        size: "xs",
                        loading: ae.value,
                        disabled: !P.value || ae.value,
                        onClick: te
                      }, {
                        default: h(() => [...Le[13] || (Le[13] = [
                          C(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      ne.value ? (o(), D(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: le
                      }, {
                        default: h(() => [...Le[14] || (Le[14] = [
                          C(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    H.value ? (o(), i("div", {
                      key: 1,
                      class: Ve(["token-test-result", H.value.type])
                    }, m(H.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b(Ot, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", qC, [
              b(xn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(Tn, {
                    modelValue: O.value,
                    "onUpdate:modelValue": Le[6] || (Le[6] = (_e) => O.value = _e),
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
        b(Ot, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", KC, [
              b(xn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Ni, {
                    modelValue: ue.value,
                    "onUpdate:modelValue": [
                      Le[7] || (Le[7] = (_e) => ue.value = _e),
                      xe
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(xn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  b(Ni, {
                    modelValue: q.value,
                    "onUpdate:modelValue": [
                      Le[8] || (Le[8] = (_e) => q.value = _e),
                      ye
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
}), $c = /* @__PURE__ */ Te(JC, [["__scopeId", "data-v-f1bdc574"]]), QC = /* @__PURE__ */ Ie({
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
}), YC = { class: "env-title" }, XC = {
  key: 0,
  class: "current-badge"
}, ZC = {
  key: 0,
  class: "branch-info"
}, ex = /* @__PURE__ */ Ie({
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
    }, ms({
      icon: h(() => [
        C(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", YC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), i("span", XC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (o(), i("span", ZC, [
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
          b(Mt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          b(Mt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          b(Mt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (o(), D(Mt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), tx = /* @__PURE__ */ Te(ex, [["__scopeId", "data-v-9231917a"]]), sx = { class: "env-details" }, nx = { class: "status-row" }, ox = {
  key: 0,
  class: "detail-row"
}, ax = { class: "value mono" }, lx = {
  key: 1,
  class: "detail-row"
}, ix = { class: "value mono small" }, rx = { class: "collapsible-section" }, cx = { class: "value" }, ux = {
  key: 0,
  class: "collapsible-body"
}, dx = { class: "item-list" }, mx = { class: "item-name" }, fx = { class: "item-name" }, vx = { class: "item-name" }, px = { class: "item-name" }, gx = {
  key: 0,
  class: "empty-list"
}, hx = { class: "collapsible-section" }, yx = { class: "value" }, wx = {
  key: 0,
  class: "collapsible-body"
}, _x = { class: "item-list" }, kx = { class: "item-name" }, bx = {
  key: 0,
  class: "item-meta"
}, $x = {
  key: 0,
  class: "empty-list"
}, Cx = { class: "collapsible-section" }, xx = { class: "value" }, Sx = {
  key: 0,
  class: "missing-count"
}, Ix = {
  key: 0,
  class: "collapsible-body"
}, Ex = { class: "item-list" }, Tx = { class: "model-row" }, Mx = { class: "item-name" }, Px = { class: "model-meta" }, Rx = { class: "item-meta" }, Dx = {
  key: 0,
  class: "item-meta"
}, Lx = {
  key: 0,
  class: "empty-list"
}, Nx = {
  key: 2,
  class: "section-divider"
}, Ux = {
  key: 3,
  class: "detail-row"
}, Ox = { class: "value" }, Ax = { class: "footer-actions" }, zx = /* @__PURE__ */ Ie({
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
    return (d, f) => (o(), D(Pt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[6] || (f[6] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, p, w, g, k, $, S, x, T, I, P, O, U, B;
        return [
          s("div", sx, [
            s("div", nx, [
              f[7] || (f[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Ve(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (o(), i("div", ox, [
              f[8] || (f[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", ax, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (o(), i("div", lx, [
              f[9] || (f[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", ix, m(e.environment.path), 1)
            ])) : y("", !0),
            f[18] || (f[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", rx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (R) => r("workflows"))
              }, [
                f[10] || (f[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", cx, m(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (o(), i("div", ux, [
                s("div", dx, [
                  (o(!0), i(W, null, he(e.detail.workflows.synced, (R) => (o(), i("div", {
                    key: "synced-" + R,
                    class: "list-item"
                  }, [
                    s("span", mx, m(R), 1),
                    f[11] || (f[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (o(!0), i(W, null, he(e.detail.workflows.new, (R) => (o(), i("div", {
                    key: "new-" + R,
                    class: "list-item"
                  }, [
                    s("span", fx, m(R), 1),
                    f[12] || (f[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (o(!0), i(W, null, he(e.detail.workflows.modified, (R) => (o(), i("div", {
                    key: "mod-" + R,
                    class: "list-item"
                  }, [
                    s("span", vx, m(R), 1),
                    f[13] || (f[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (o(!0), i(W, null, he(e.detail.workflows.deleted, (R) => (o(), i("div", {
                    key: "del-" + R,
                    class: "list-item"
                  }, [
                    s("span", px, m(R), 1),
                    f[14] || (f[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (o(), i("div", gx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", hx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (R) => r("nodes"))
              }, [
                f[15] || (f[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", yx, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              ($ = e.detail) != null && $.nodes && l.value.has("nodes") ? (o(), i("div", wx, [
                s("div", _x, [
                  (o(!0), i(W, null, he(e.detail.nodes, (R) => (o(), i("div", {
                    key: R.name,
                    class: "list-item"
                  }, [
                    s("span", kx, m(R.name), 1),
                    R.version ? (o(), i("span", bx, m(R.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (o(), i("div", $x, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", Cx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (R) => r("models"))
              }, [
                f[16] || (f[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", xx, [
                  C(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (T = (x = e.detail) == null ? void 0 : x.models) != null && T.missing.length ? (o(), i("span", Sx, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (I = e.detail) != null && I.models ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (o(), i("div", Ix, [
                s("div", Ex, [
                  (o(!0), i(W, null, he(e.detail.models.missing, (R) => (o(), i("div", {
                    key: R.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", Tx, [
                      s("span", Mx, m(R.filename), 1),
                      s("span", {
                        class: Ve(["criticality-badge", R.criticality])
                      }, m(R.criticality), 3)
                    ]),
                    s("div", Px, [
                      s("span", Rx, m(R.category), 1),
                      R.workflow_names.length ? (o(), i("span", Dx, " used by: " + m(R.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (o(), i("div", Lx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (o(), i("div", Nx)) : y("", !0),
            (U = e.detail) != null && U.created_at || e.environment.created_at ? (o(), i("div", Ux, [
              f[17] || (f[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Ox, m(u(((B = e.detail) == null ? void 0 : B.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", Ax, [
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
}), Fx = /* @__PURE__ */ Te(zx, [["__scopeId", "data-v-750671f5"]]), Cc = [
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
], Sc = "auto", Bx = { class: "progress-bar" }, Vx = /* @__PURE__ */ Ie({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, n = M(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (o(), i("div", Bx, [
      s("div", {
        class: Ve(["progress-fill", e.variant]),
        style: Wt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ic = /* @__PURE__ */ Te(Vx, [["__scopeId", "data-v-1beb0512"]]), Wx = { class: "task-progress" }, Gx = { class: "progress-info" }, jx = { class: "progress-percentage" }, Hx = { class: "progress-message" }, qx = {
  key: 0,
  class: "progress-steps"
}, Kx = { class: "step-icon" }, Jx = { class: "step-label" }, Qx = /* @__PURE__ */ Ie({
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
    return (l, r) => (o(), i("div", Wx, [
      b(Ic, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", Gx, [
        s("span", jx, m(e.progress) + "%", 1),
        s("span", Hx, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (o(), i("div", qx, [
        (o(!0), i(W, null, he(e.steps, (c) => (o(), i("div", {
          key: c.id,
          class: Ve(["step", n(c.id)])
        }, [
          s("span", Kx, m(a(c.id)), 1),
          s("span", Jx, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ia = /* @__PURE__ */ Te(Qx, [["__scopeId", "data-v-9d1de66c"]]), Yx = {
  key: 0,
  class: "create-env-form"
}, Xx = { class: "form-field" }, Zx = { class: "input-wrapper" }, e3 = {
  key: 0,
  class: "validating-indicator"
}, t3 = {
  key: 1,
  class: "valid-indicator"
}, s3 = {
  key: 0,
  class: "field-error"
}, n3 = { class: "form-field" }, o3 = ["value"], a3 = { class: "form-field" }, l3 = ["disabled"], i3 = ["value"], r3 = { class: "form-field" }, c3 = ["value"], u3 = { class: "form-field form-field--checkbox" }, d3 = { class: "form-checkbox" }, m3 = {
  key: 1,
  class: "create-env-progress"
}, f3 = { class: "creating-intro" }, v3 = {
  key: 0,
  class: "progress-warning"
}, p3 = {
  key: 1,
  class: "create-error"
}, g3 = { class: "error-message" }, h3 = {
  key: 1,
  class: "footer-status"
}, y3 = 10, w3 = /* @__PURE__ */ Ie({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ft(), u = _(""), d = _(xc), f = _("latest"), v = _(Sc), p = _(!1), w = _(null), g = _(!1), k = _(!1);
    let $ = null, S = 0;
    const x = M(() => !!u.value.trim() && k.value && !w.value && !g.value && !P.value), T = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), I = _(!1), P = _(!1), O = _({
      progress: 0,
      message: ""
    });
    let U = null, B = 0;
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
    ], A = _(null);
    bt(u, (ne) => {
      k.value = !1, $ && (clearTimeout($), $ = null);
      const re = ne.trim();
      if (!re) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, $ = setTimeout(() => {
        Q(re);
      }, 400);
    });
    async function Q(ne, re = !1) {
      const me = ne.trim();
      if (!me)
        return k.value = !1, g.value = !1, w.value = re ? "Environment name is required" : null, !1;
      const J = ++S;
      g.value = !0;
      try {
        const te = await c(me);
        return J !== S ? !1 : (w.value = te.valid ? null : te.error || "Invalid name", k.value = !!te.valid, !!te.valid);
      } catch {
        return J !== S || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        J === S && (g.value = !1);
      }
    }
    async function ae() {
      $ && (clearTimeout($), $ = null), await Q(u.value, !0);
    }
    function H() {
      P.value || n("close");
    }
    async function ue() {
      const ne = u.value.trim();
      if (!ne) {
        w.value = "Environment name is required";
        return;
      }
      if ($ && (clearTimeout($), $ = null), !!await Q(ne, !0)) {
        P.value = !0, O.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const me = {
            name: ne,
            python_version: d.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, J = await l(me);
          J.status === "started" ? q() : J.status === "error" && (O.value = {
            progress: 0,
            message: J.message || "Failed to start creation",
            error: J.message
          });
        } catch (me) {
          O.value = {
            progress: 0,
            message: me instanceof Error ? me.message : "Unknown error",
            error: me instanceof Error ? me.message : "Unknown error"
          };
        }
      }
    }
    function q() {
      U || (B = 0, U = window.setInterval(async () => {
        try {
          const ne = await r();
          B = 0, O.value = {
            progress: ne.progress ?? 0,
            message: ne.message,
            phase: ne.phase,
            error: ne.error
          }, ne.state === "complete" ? (N(), n("created", ne.environment_name || u.value.trim(), p.value)) : ne.state === "error" ? (N(), O.value.error = ne.error || ne.message) : ne.state === "idle" && P.value && (N(), O.value.error = "Creation was interrupted. Please try again.");
        } catch {
          B++, B >= y3 && (N(), O.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function N() {
      U && (clearInterval(U), U = null);
    }
    function j() {
      P.value = !1, O.value = { progress: 0, message: "" }, n("close");
    }
    async function pe() {
      I.value = !0;
      try {
        T.value = await a();
      } catch (ne) {
        console.error("Failed to load ComfyUI releases:", ne);
      } finally {
        I.value = !1;
      }
    }
    return dt(async () => {
      var ne;
      await Kt(), (ne = A.value) == null || ne.focus(), pe();
    }), Wn(() => {
      N(), $ && (clearTimeout($), $ = null);
    }), (ne, re) => (o(), D(Pt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: H
    }, {
      body: h(() => [
        P.value ? (o(), i("div", m3, [
          s("p", f3, [
            re[12] || (re[12] = C(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            re[13] || (re[13] = C("... ", -1))
          ]),
          b(ia, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: R
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (o(), i("p", v3, " This may take several minutes. Please wait... ")),
          O.value.error ? (o(), i("div", p3, [
            s("p", g3, m(O.value.error), 1)
          ])) : y("", !0)
        ])) : (o(), i("div", Yx, [
          s("div", Xx, [
            re[6] || (re[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", Zx, [
              Ft(s("input", {
                ref_key: "nameInput",
                ref: A,
                "onUpdate:modelValue": re[0] || (re[0] = (me) => u.value = me),
                type: "text",
                class: Ve(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: Ss(ue, ["enter"]),
                onBlur: ae
              }, null, 34), [
                [go, u.value]
              ]),
              g.value ? (o(), i("span", e3, "...")) : k.value ? (o(), i("span", t3, "✓")) : y("", !0)
            ]),
            w.value ? (o(), i("div", s3, m(w.value), 1)) : y("", !0),
            re[7] || (re[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", n3, [
            re[8] || (re[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Ft(s("select", {
              "onUpdate:modelValue": re[1] || (re[1] = (me) => d.value = me),
              class: "form-select"
            }, [
              (o(!0), i(W, null, he(it(Cc), (me) => (o(), i("option", {
                key: me,
                value: me
              }, m(me), 9, o3))), 128))
            ], 512), [
              [Un, d.value]
            ])
          ]),
          s("div", a3, [
            re[9] || (re[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ft(s("select", {
              "onUpdate:modelValue": re[2] || (re[2] = (me) => f.value = me),
              class: "form-select",
              disabled: I.value
            }, [
              (o(!0), i(W, null, he(T.value, (me) => (o(), i("option", {
                key: me.tag_name,
                value: me.tag_name
              }, m(me.name), 9, i3))), 128))
            ], 8, l3), [
              [Un, f.value]
            ])
          ]),
          s("div", r3, [
            re[10] || (re[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ft(s("select", {
              "onUpdate:modelValue": re[3] || (re[3] = (me) => v.value = me),
              class: "form-select"
            }, [
              (o(!0), i(W, null, he(it(Al), (me) => (o(), i("option", {
                key: me,
                value: me
              }, m(me) + m(me === "auto" ? " (detect GPU)" : ""), 9, c3))), 128))
            ], 512), [
              [Un, v.value]
            ])
          ]),
          s("div", u3, [
            s("label", d3, [
              Ft(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": re[4] || (re[4] = (me) => p.value = me)
              }, null, 512), [
                [la, p.value]
              ]),
              re[11] || (re[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (o(), i(W, { key: 1 }, [
          O.value.error ? (o(), D(Ue, {
            key: 0,
            variant: "secondary",
            onClick: j
          }, {
            default: h(() => [...re[16] || (re[16] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })) : (o(), i("span", h3, " Creating environment... "))
        ], 64)) : (o(), i(W, { key: 0 }, [
          b(Ue, {
            variant: "primary",
            disabled: !x.value,
            onClick: ue
          }, {
            default: h(() => [...re[14] || (re[14] = [
              C(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ue, {
            variant: "secondary",
            onClick: re[5] || (re[5] = (me) => n("close"))
          }, {
            default: h(() => [...re[15] || (re[15] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), _3 = /* @__PURE__ */ Te(w3, [["__scopeId", "data-v-3faa3d9b"]]), k3 = /* @__PURE__ */ Ie({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getEnvironments: l, getEnvironmentDetails: r } = ft(), c = _([]), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _(!1), w = _(null), g = _(null), k = M(() => [...c.value].sort((U, B) => U.is_current !== B.is_current ? U.is_current ? -1 : 1 : U.name.localeCompare(B.name))), $ = M(() => {
      if (!f.value.trim()) return k.value;
      const U = f.value.toLowerCase();
      return k.value.filter(
        (B) => {
          var R;
          return B.name.toLowerCase().includes(U) || ((R = B.current_branch) == null ? void 0 : R.toLowerCase().includes(U));
        }
      );
    });
    function S(U, B) {
      p.value = !1, a("created", U, B);
    }
    function x() {
      p.value = !0;
    }
    async function T(U) {
      w.value = U, g.value = null;
      const B = await r(U.name);
      B && (g.value = B);
    }
    function I(U) {
      w.value = null, g.value = null, a("delete", U);
    }
    function P(U) {
      w.value = null, g.value = null, a("export", U);
    }
    async function O() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return dt(O), t({
      loadEnvironments: O,
      openCreateModal: x
    }), (U, B) => (o(), i(W, null, [
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
                onClick: B[0] || (B[0] = (R) => U.$emit("import"))
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
          b(kn, {
            modelValue: f.value,
            "onUpdate:modelValue": B[2] || (B[2] = (R) => f.value = R),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (o(), D(Bs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (o(), D(Vs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            $.value.length ? (o(), D(Ot, {
              key: 0,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, he($.value, (R) => (o(), D(tx, {
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
                      onClick: (A) => U.$emit("switch", R.name)
                    }, {
                      default: h(() => [...B[9] || (B[9] = [
                        C(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => T(R)
                    }, {
                      default: h(() => [...B[10] || (B[10] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => U.$emit("export", R.name)
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
            $.value.length ? y("", !0) : (o(), D(Ms, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, ms({ _: 2 }, [
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
      b(bs, {
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
      w.value ? (o(), D(Fx, {
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
      p.value ? (o(), D(_3, {
        key: 1,
        onClose: B[6] || (B[6] = (R) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), b3 = /* @__PURE__ */ Te(k3, [["__scopeId", "data-v-01163d8c"]]), $3 = { class: "file-path" }, C3 = { class: "file-path-text" }, x3 = ["title"], S3 = /* @__PURE__ */ Ie({
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
    return (l, r) => (o(), i("div", $3, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", C3, m(e.path), 1),
      e.copyable ? (o(), i("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(n.value ? "✓" : "📋"), 9, x3)) : y("", !0)
    ]));
  }
}), I3 = /* @__PURE__ */ Te(S3, [["__scopeId", "data-v-f0982173"]]), E3 = { class: "base-textarea-wrapper" }, T3 = ["value", "rows", "placeholder", "disabled", "maxlength"], M3 = {
  key: 0,
  class: "base-textarea-count"
}, P3 = /* @__PURE__ */ Ie({
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
    return (r, c) => (o(), i("div", E3, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Ss($t((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Ss($t((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ss(l, ["enter"])
        ]
      }, null, 40, T3),
      e.showCharCount && e.maxLength ? (o(), i("div", M3, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), On = /* @__PURE__ */ Te(P3, [["__scopeId", "data-v-c6d16c93"]]), R3 = ["checked", "disabled"], D3 = { class: "base-checkbox-box" }, L3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, N3 = {
  key: 0,
  class: "base-checkbox-label"
}, U3 = /* @__PURE__ */ Ie({
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
      }, null, 40, R3),
      s("span", D3, [
        e.modelValue ? (o(), i("svg", L3, [...n[1] || (n[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (o(), i("span", N3, [
        rt(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ra = /* @__PURE__ */ Te(U3, [["__scopeId", "data-v-bf17c831"]]), O3 = { class: "export-blocked" }, A3 = { class: "error-header" }, z3 = { class: "error-summary" }, F3 = { class: "error-title" }, B3 = { class: "error-description" }, V3 = { class: "issues-list" }, W3 = { class: "issue-message" }, G3 = {
  key: 0,
  class: "issue-details"
}, j3 = ["onClick"], H3 = { class: "issue-fix" }, q3 = {
  key: 0,
  class: "commit-section"
}, K3 = {
  key: 0,
  class: "issues-warning"
}, J3 = {
  key: 1,
  class: "commit-error"
}, Q3 = /* @__PURE__ */ Ie({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = _(""), f = bn({}), v = M(() => n.mode === "publish" ? "Publish" : "Export"), p = M(
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
    return (x, T) => (o(), D(Pt, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: T[4] || (T[4] = (I) => x.$emit("close"))
    }, {
      body: h(() => [
        s("div", O3, [
          s("div", A3, [
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
            s("div", z3, [
              s("h3", F3, m(v.value) + " blocked", 1),
              s("p", B3, m(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", V3, [
            (o(!0), i(W, null, he(e.issues, (I, P) => (o(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", W3, m(I.message), 1),
              I.details.length ? (o(), i("div", G3, [
                (o(!0), i(W, null, he($(P), (O, U) => (o(), i("div", {
                  key: U,
                  class: "issue-detail"
                }, m(O), 1))), 128)),
                I.details.length > 3 && !f[P] ? (o(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (O) => f[P] = !0
                }, " +" + m(I.details.length - 3) + " more ", 9, j3)) : y("", !0)
              ])) : y("", !0),
              s("div", H3, [
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
          p.value ? (o(), i("div", q3, [
            w.value ? (o(), i("div", K3, [
              T[7] || (T[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(ra, {
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
            b(On, {
              modelValue: r.value,
              "onUpdate:modelValue": T[1] || (T[1] = (I) => r.value = I),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: S,
              onCtrlEnter: S
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (o(), i("div", J3, m(d.value), 1)) : y("", !0)
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
}), Y3 = /* @__PURE__ */ Te(Q3, [["__scopeId", "data-v-a8990107"]]), X3 = { class: "repro-warning" }, Z3 = { class: "repro-warning-content" }, eS = {
  key: 0,
  class: "warning-group"
}, tS = { class: "warning-list" }, sS = { key: 0 }, nS = {
  key: 1,
  class: "warning-group"
}, oS = { class: "warning-list" }, aS = { key: 0 }, lS = /* @__PURE__ */ Ie({
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
    return (p, w) => (o(), i("div", X3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", Z3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (o(), i("div", eS, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", tS, [
            (o(!0), i(W, null, he(u.value, (g) => (o(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            f.value ? (o(), i("li", sS, "+" + m(f.value) + " more model" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (o(), i("div", nS, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", oS, [
            (o(!0), i(W, null, he(d.value, (g) => (o(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            v.value ? (o(), i("li", aS, "+" + m(v.value) + " more node" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), dl = /* @__PURE__ */ Te(lS, [["__scopeId", "data-v-11be310d"]]), iS = { class: "export-card" }, rS = { class: "export-path-row" }, cS = {
  key: 1,
  class: "export-warning"
}, uS = { class: "export-footer-actions" }, dS = /* @__PURE__ */ Ie({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: n, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ft(), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(!1), k = _(!1), $ = M(() => {
      var N;
      return ((N = t.environmentName) == null ? void 0 : N.trim()) || null;
    }), S = M(() => $.value ? `EXPORT ENVIRONMENT: ${$.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), x = M(() => $.value ? `Environment '${$.value}' has been exported` : "Your environment has been exported"), T = M(() => u.value ? "Validating..." : d.value ? "Exporting..." : B.value ? "Export Anyway" : "Export Environment"), I = M(() => {
      var N;
      return ((N = w.value) == null ? void 0 : N.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), P = M(
      () => I.value.models_without_sources.length
    ), O = M(
      () => {
        var N;
        return ((N = I.value.nodes_without_provenance) == null ? void 0 : N.length) || 0;
      }
    ), U = M(
      () => P.value + O.value
    ), B = M(
      () => {
        var N;
        return !!((N = w.value) != null && N.can_export) && U.value > 0;
      }
    );
    async function R() {
      u.value = !0;
      try {
        const N = $.value ? await l($.value) : await n();
        return w.value = N, N;
      } catch (N) {
        return v.value = {
          status: "error",
          message: N instanceof Error ? N.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function A() {
      v.value = null;
      const N = await R();
      if (N) {
        if (!N.can_export) {
          g.value = !0;
          return;
        }
        await H();
      }
    }
    async function Q() {
      g.value = !1;
      const N = await R();
      if (N) {
        if (!N.can_export) {
          g.value = !0;
          return;
        }
        await H();
      }
    }
    async function ae() {
      await R();
    }
    async function H() {
      d.value = !0;
      try {
        const N = $.value ? await r($.value, c.value || void 0) : await a(c.value || void 0);
        v.value = N;
      } catch (N) {
        v.value = {
          status: "error",
          message: N instanceof Error ? N.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function ue() {
      var N;
      if ((N = v.value) != null && N.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (j) {
          console.error("Failed to copy path:", j);
        }
    }
    async function q() {
      var N;
      if ((N = v.value) != null && N.path) {
        f.value = !0;
        try {
          const j = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!j.ok)
            throw new Error(`Download failed: ${j.statusText}`);
          const pe = await j.blob(), ne = URL.createObjectURL(pe), re = v.value.path.split("/").pop() || "environment-export.tar.gz", me = document.createElement("a");
          me.href = ne, me.download = re, document.body.appendChild(me), me.click(), document.body.removeChild(me), URL.revokeObjectURL(ne);
        } catch (j) {
          console.error("Failed to download:", j), alert(`Download failed: ${j instanceof Error ? j.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return dt(() => {
      R();
    }), (N, j) => (o(), i(W, null, [
      b(Qt, null, ms({
        content: h(() => [
          B.value ? (o(), D(dl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: I.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: j[1] || (j[1] = (pe) => k.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(Ot, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", iS, [
                j[8] || (j[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", rS, [
                  b(Tn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": j[2] || (j[2] = (pe) => c.value = pe),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), D(Ot, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(ts, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, ms({
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
                    b(Mt, { label: "Saved to:" }, {
                      default: h(() => [
                        b(I3, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (o(), D(Mt, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (o(), i("div", cS, [...j[9] || (j[9] = [
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
                      onClick: q
                    }, {
                      default: h(() => [...j[10] || (j[10] = [
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
                      onClick: ue
                    }, {
                      default: h(() => [...j[11] || (j[11] = [
                        C(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Me, {
                      variant: "ghost",
                      size: "sm",
                      onClick: j[3] || (j[3] = (pe) => v.value = null)
                    }, {
                      default: h(() => [...j[12] || (j[12] = [
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
          s("div", uS, [
            e.embedded ? (o(), D(Me, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: j[4] || (j[4] = (pe) => N.$emit("close"))
            }, {
              default: h(() => [...j[13] || (j[13] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Me, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: A
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
              onInfoClick: j[0] || (j[0] = (pe) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(bs, {
        show: p.value,
        title: "What Gets Exported",
        onClose: j[5] || (j[5] = (pe) => p.value = !1)
      }, {
        content: h(() => [...j[14] || (j[14] = [
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
      g.value && w.value ? (o(), D(Y3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: j[6] || (j[6] = (pe) => g.value = !1),
        onCommitted: Q
      }, null, 8, ["issues"])) : y("", !0),
      k.value && w.value ? (o(), D(Ll, {
        key: 1,
        warnings: w.value.warnings,
        onClose: j[7] || (j[7] = (pe) => k.value = !1),
        onRevalidate: ae
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), mS = /* @__PURE__ */ Te(dS, [["__scopeId", "data-v-6cf814a2"]]), fS = { class: "file-input-wrapper" }, vS = ["accept", "multiple", "disabled"], pS = /* @__PURE__ */ Ie({
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
    }), (u, d) => (o(), i("div", fS, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, vS),
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
}), gS = /* @__PURE__ */ Te(pS, [["__scopeId", "data-v-cd192091"]]), hS = {
  key: 0,
  class: "drop-zone-empty"
}, yS = { class: "drop-zone-text" }, wS = { class: "drop-zone-primary" }, _S = { class: "drop-zone-secondary" }, kS = { class: "drop-zone-actions" }, bS = {
  key: 1,
  class: "drop-zone-file"
}, $S = { class: "file-info" }, CS = { class: "file-details" }, xS = { class: "file-name" }, SS = { class: "file-size" }, IS = /* @__PURE__ */ Ie({
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
      onDragenter: $t(f, ["prevent"]),
      onDragover: $t(v, ["prevent"]),
      onDragleave: $t(p, ["prevent"]),
      onDrop: $t(w, ["prevent"])
    }, [
      c.value ? (o(), i("div", bS, [
        s("div", $S, [
          x[1] || (x[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", CS, [
            s("div", xS, m(u.value), 1),
            s("div", SS, m(d.value), 1)
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
      ])) : (o(), i("div", hS, [
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
        s("div", yS, [
          s("p", wS, m(e.primaryText), 1),
          s("p", _S, m(e.secondaryText), 1)
        ]),
        s("div", kS, [
          b(gS, {
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
}), ES = /* @__PURE__ */ Te(IS, [["__scopeId", "data-v-0f79cb86"]]), TS = { class: "commit-hash" }, MS = /* @__PURE__ */ Ie({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, n = M(() => t.hash.slice(0, t.length));
    return (a, l) => (o(), i("span", TS, m(n.value), 1));
  }
}), Ec = /* @__PURE__ */ Te(MS, [["__scopeId", "data-v-7c333cc6"]]), PS = { class: "import-preview" }, RS = { class: "preview-header" }, DS = {
  key: 0,
  class: "source-env"
}, LS = { class: "preview-content" }, NS = { class: "preview-section" }, US = { class: "section-header" }, OS = { class: "section-info" }, AS = { class: "section-count" }, zS = {
  key: 0,
  class: "item-list"
}, FS = { class: "item-name" }, BS = {
  key: 0,
  class: "item-more"
}, VS = { class: "preview-section" }, WS = { class: "section-header" }, GS = { class: "section-info" }, jS = { class: "section-count" }, HS = {
  key: 0,
  class: "item-list"
}, qS = { class: "item-details" }, KS = { class: "item-name" }, JS = { class: "item-meta" }, QS = {
  key: 0,
  class: "item-more"
}, YS = { class: "preview-section" }, XS = { class: "section-header" }, ZS = { class: "section-info" }, e8 = { class: "section-count" }, t8 = {
  key: 0,
  class: "item-list"
}, s8 = { class: "item-name" }, n8 = {
  key: 0,
  class: "item-more"
}, o8 = {
  key: 0,
  class: "preview-section"
}, a8 = { class: "git-info" }, l8 = /* @__PURE__ */ Ie({
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
    return (c, u) => (o(), i("div", PS, [
      s("div", RS, [
        b(ys, null, {
          default: h(() => [...u[0] || (u[0] = [
            C("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), i("span", DS, [
          u[1] || (u[1] = C(" From: ", -1)),
          b(ul, null, {
            default: h(() => [
              C(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", LS, [
        s("div", NS, [
          s("div", US, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", OS, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", AS, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), i("div", zS, [
            (o(!0), i(W, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", FS, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), i("div", BS, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", VS, [
          s("div", WS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", GS, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", jS, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), i("div", HS, [
            (o(!0), i(W, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", qS, [
                s("span", KS, m(d.filename), 1),
                s("span", JS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), i("div", QS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", YS, [
          s("div", XS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", ZS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", e8, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), i("div", t8, [
            (o(!0), i(W, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", s8, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), i("div", n8, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), i("div", o8, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", a8, [
            e.gitBranch ? (o(), D(Mt, {
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
            e.gitCommit ? (o(), D(Mt, {
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
}), i8 = /* @__PURE__ */ Te(l8, [["__scopeId", "data-v-182fe113"]]), r8 = { class: "import-config" }, c8 = { class: "config-container" }, u8 = { class: "config-field" }, d8 = { class: "input-wrapper" }, m8 = ["value"], f8 = {
  key: 0,
  class: "validating-indicator"
}, v8 = {
  key: 1,
  class: "valid-indicator"
}, p8 = {
  key: 0,
  class: "field-error"
}, g8 = { class: "config-field" }, h8 = { class: "strategy-options" }, y8 = ["value", "checked", "onChange"], w8 = { class: "strategy-content" }, _8 = { class: "strategy-label" }, k8 = { class: "strategy-description" }, b8 = { class: "config-field switch-field" }, $8 = { class: "switch-label" }, C8 = ["checked"], x8 = { class: "advanced-section" }, S8 = { class: "advanced-content" }, I8 = { class: "config-field" }, E8 = ["value"], T8 = ["value"], M8 = /* @__PURE__ */ Ie({
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
    bt(() => n.nameError, (v) => {
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
    return (v, p) => (o(), i("div", r8, [
      b(ys, null, {
        default: h(() => [...p[2] || (p[2] = [
          C("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", c8, [
        s("div", u8, [
          b(Ko, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              C("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", d8, [
            s("input", {
              type: "text",
              class: Ve(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: f
            }, null, 42, m8),
            l.value ? (o(), i("span", f8, "...")) : r.value ? (o(), i("span", v8, "✓")) : y("", !0)
          ]),
          e.nameError ? (o(), i("div", p8, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", g8, [
          b(Ko, null, {
            default: h(() => [...p[5] || (p[5] = [
              C("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", h8, [
            (o(), i(W, null, he(c, (w) => s("label", {
              key: w.value,
              class: Ve(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, y8),
              s("div", w8, [
                s("span", _8, m(w.label), 1),
                s("span", k8, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", b8, [
          s("label", $8, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, C8),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", x8, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", S8, [
            s("div", I8, [
              b(Ko, null, {
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
                (o(!0), i(W, null, he(it(Al), (w) => (o(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, T8))), 128))
              ], 40, E8)
            ])
          ])
        ])
      ])
    ]));
  }
}), P8 = /* @__PURE__ */ Te(M8, [["__scopeId", "data-v-89ea06a1"]]), R8 = { class: "import-flow" }, D8 = {
  key: 0,
  class: "import-empty"
}, L8 = { class: "git-import-section" }, N8 = { class: "git-url-input-row" }, U8 = ["disabled"], O8 = {
  key: 0,
  class: "git-error"
}, A8 = {
  key: 1,
  class: "import-configure"
}, z8 = { class: "selected-file-bar" }, F8 = {
  key: 0,
  class: "file-bar-content"
}, B8 = { class: "file-bar-info" }, V8 = { class: "file-bar-name" }, W8 = { class: "file-bar-size" }, G8 = {
  key: 1,
  class: "file-bar-content"
}, j8 = { class: "file-bar-info" }, H8 = { class: "file-bar-name" }, q8 = {
  key: 0,
  class: "preview-loading"
}, K8 = { class: "import-actions" }, J8 = {
  key: 2,
  class: "import-progress"
}, Q8 = { class: "creating-intro" }, Y8 = {
  key: 0,
  class: "progress-warning"
}, X8 = {
  key: 1,
  class: "import-error"
}, Z8 = { class: "error-message" }, e5 = {
  key: 3,
  class: "import-complete"
}, t5 = { class: "complete-message" }, s5 = { class: "complete-title" }, n5 = { class: "complete-details" }, o5 = { class: "complete-actions" }, a5 = /* @__PURE__ */ Ie({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: n }) {
    var xe, ye, Fe, Le;
    const a = e, l = n, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: f, getImportProgress: v } = ft();
    let p = null;
    const w = _(null), g = _(a.resumeImport ?? !1), k = _(!1), $ = _(!1), S = _(""), x = _(!1), T = _(null), I = _(""), P = _(null), O = _(!1), U = _(null), B = _(null), R = _({
      name: ((xe = a.initialProgress) == null ? void 0 : xe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), A = _(null), Q = _({
      message: ((ye = a.initialProgress) == null ? void 0 : ye.message) ?? "Preparing import...",
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
    ], H = M(() => {
      if (!B.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const _e = B.value;
      return {
        sourceEnvironment: _e.comfyui_version ? `ComfyUI ${_e.comfyui_version}` : "Unknown",
        workflows: _e.workflows.map((Pe) => Pe.name),
        models: _e.models.map((Pe) => ({
          filename: Pe.filename,
          size: 0,
          type: Pe.relative_path.split("/")[0] || "model"
        })),
        nodes: _e.nodes.map((Pe) => Pe.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), ue = M(() => !x.value && !T.value && B.value && R.value.name.length > 0 && !A.value && (w.value || P.value));
    async function q(_e) {
      w.value = _e, x.value = !0, T.value = null, B.value = null;
      try {
        const Pe = await r(_e);
        B.value = Pe;
      } catch (Pe) {
        T.value = Pe instanceof Error ? Pe.message : "Failed to analyze file", console.error("Preview error:", Pe);
      } finally {
        x.value = !1;
      }
    }
    function N() {
      w.value = null, P.value = null, I.value = "", U.value = null, k.value = !1, $.value = !1, S.value = "", B.value = null, T.value = null, R.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, A.value = null, l("source-cleared");
    }
    function j() {
      te(), N(), g.value = !1, x.value = !1, O.value = !1, Q.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function pe() {
      if (I.value.trim()) {
        O.value = !0, U.value = null;
        try {
          const _e = await c(I.value.trim());
          P.value = I.value.trim(), B.value = _e;
        } catch (_e) {
          U.value = _e instanceof Error ? _e.message : "Failed to analyze repository";
        } finally {
          O.value = !1;
        }
      }
    }
    function ne(_e) {
      try {
        const Pe = new URL(_e);
        return Pe.host + Pe.pathname.replace(/\.git$/, "");
      } catch {
        return _e;
      }
    }
    async function re(_e) {
      if (!_e) {
        A.value = "Environment name is required";
        return;
      }
      try {
        const Pe = await u(_e);
        A.value = Pe.valid ? null : Pe.error || "Invalid name";
      } catch {
        A.value = "Failed to validate name";
      }
    }
    async function me() {
      if (R.value.name && !(!w.value && !P.value)) {
        g.value = !0, k.value = !1, Q.value = { message: `Creating environment '${R.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let _e;
          if (w.value)
            _e = await d(
              w.value,
              R.value.name,
              R.value.modelStrategy,
              R.value.torchBackend
            );
          else if (P.value)
            _e = await f(
              P.value,
              R.value.name,
              R.value.modelStrategy,
              R.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          _e.status === "started" ? J() : ($.value = !1, S.value = _e.message, g.value = !1, k.value = !0);
        } catch (_e) {
          $.value = !1, S.value = _e instanceof Error ? _e.message : "Unknown error occurred during import", g.value = !1, k.value = !0;
        }
      }
    }
    async function J() {
      if (p) return;
      const _e = async () => {
        try {
          const ge = await v();
          return Q.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (te(), $.value = !0, S.value = `Environment '${ge.environment_name}' created successfully`, g.value = !1, k.value = !0, ge.environment_name && l("import-complete", ge.environment_name, R.value.switchAfterImport), !1) : ge.state === "error" ? (te(), $.value = !1, S.value = ge.error || ge.message, g.value = !1, k.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await _e() && (p = setInterval(async () => {
        await _e() || te();
      }, 2e3));
    }
    function te() {
      p && (clearInterval(p), p = null);
    }
    function le(_e) {
      return _e < 1024 ? `${_e} B` : _e < 1024 * 1024 ? `${(_e / 1024).toFixed(1)} KB` : _e < 1024 * 1024 * 1024 ? `${(_e / (1024 * 1024)).toFixed(1)} MB` : `${(_e / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return dt(async () => {
      try {
        const _e = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", _e.state, _e), _e.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", _e.environment_name), g.value = !0, R.value.name = _e.environment_name || R.value.name || "", Q.value = {
          progress: _e.progress ?? 0,
          message: _e.message || "Importing...",
          phase: _e.phase || "",
          error: null
        }, J());
      } catch (_e) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", _e);
      }
    }), t({
      handleReset: j,
      isImporting: g,
      canImport: ue
    }), (_e, Pe) => {
      var ge;
      return o(), i("div", R8, [
        !w.value && !P.value && !g.value ? (o(), i("div", D8, [
          b(ES, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: q
          }),
          Pe[7] || (Pe[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", L8, [
            Pe[5] || (Pe[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", N8, [
              Ft(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Pe[0] || (Pe[0] = (ke) => I.value = ke),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ss(pe, ["enter"]),
                disabled: O.value
              }, null, 40, U8), [
                [go, I.value]
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || O.value,
                onClick: pe
              }, {
                default: h(() => [
                  C(m(O.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            U.value ? (o(), i("div", O8, m(U.value), 1)) : y("", !0),
            Pe[6] || (Pe[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || P.value) && !g.value && !k.value ? (o(), i("div", A8, [
          s("div", z8, [
            w.value ? (o(), i("div", F8, [
              Pe[8] || (Pe[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", B8, [
                s("div", V8, m(w.value.name), 1),
                s("div", W8, m(le(w.value.size)), 1)
              ])
            ])) : P.value ? (o(), i("div", G8, [
              Pe[10] || (Pe[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", j8, [
                s("div", H8, m(ne(P.value)), 1),
                Pe[9] || (Pe[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Me, {
              variant: "ghost",
              size: "sm",
              onClick: N
            }, {
              default: h(() => [...Pe[11] || (Pe[11] = [
                C(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (o(), i("div", q8, [...Pe[12] || (Pe[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : T.value ? (o(), D(vs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [T.value]
          }, null, 8, ["details"])) : B.value ? (o(), D(i8, {
            key: 2,
            "source-environment": H.value.sourceEnvironment,
            workflows: H.value.workflows,
            models: H.value.models,
            nodes: H.value.nodes,
            "git-branch": H.value.gitBranch,
            "git-commit": H.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          B.value ? (o(), D(P8, {
            key: 3,
            name: R.value.name,
            "onUpdate:name": Pe[1] || (Pe[1] = (ke) => R.value.name = ke),
            "model-strategy": R.value.modelStrategy,
            "onUpdate:modelStrategy": Pe[2] || (Pe[2] = (ke) => R.value.modelStrategy = ke),
            "torch-backend": R.value.torchBackend,
            "onUpdate:torchBackend": Pe[3] || (Pe[3] = (ke) => R.value.torchBackend = ke),
            "switch-after-import": R.value.switchAfterImport,
            "onUpdate:switchAfterImport": Pe[4] || (Pe[4] = (ke) => R.value.switchAfterImport = ke),
            "name-error": A.value,
            onValidateName: re
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          R.value.modelStrategy === "skip" && ((ge = B.value) != null && ge.models_needing_download) ? (o(), D(vs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${B.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", K8, [
            b(Me, {
              variant: "secondary",
              size: "md",
              onClick: N
            }, {
              default: h(() => [...Pe[13] || (Pe[13] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              size: "md",
              disabled: !ue.value,
              onClick: me
            }, {
              default: h(() => [...Pe[14] || (Pe[14] = [
                C(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (o(), i("div", J8, [
          s("p", Q8, [
            Pe[15] || (Pe[15] = C(" Importing environment ", -1)),
            s("strong", null, m(R.value.name), 1),
            Pe[16] || (Pe[16] = C("... ", -1))
          ]),
          b(ia, {
            progress: Q.value.progress,
            message: Q.value.message,
            "current-phase": Q.value.phase,
            variant: Q.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ae
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          Q.value.error ? y("", !0) : (o(), i("p", Y8, " This may take several minutes. Please wait... ")),
          Q.value.error ? (o(), i("div", X8, [
            s("p", Z8, m(Q.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (o(), i("div", e5, [
          s("div", {
            class: Ve(["complete-icon", $.value ? "success" : "error"])
          }, m($.value ? "✓" : "✕"), 3),
          s("div", t5, [
            s("div", s5, m($.value ? "Import Successful" : "Import Failed"), 1),
            s("div", n5, m(S.value), 1)
          ]),
          s("div", o5, [
            b(Me, {
              variant: "primary",
              size: "md",
              onClick: j
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
}), Tc = /* @__PURE__ */ Te(a5, [["__scopeId", "data-v-72cbc04e"]]), l5 = /* @__PURE__ */ Ie({
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
      b(Qt, null, ms({
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
      b(bs, {
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
}), i5 = /* @__PURE__ */ Te(l5, [["__scopeId", "data-v-41b1f298"]]), r5 = { class: "base-tabs" }, c5 = ["disabled", "onClick"], u5 = {
  key: 0,
  class: "base-tabs__badge"
}, d5 = /* @__PURE__ */ Ie({
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
    return (r, c) => (o(), i("div", r5, [
      (o(!0), i(W, null, he(e.tabs, (u) => (o(), i("button", {
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
        u.badge ? (o(), i("span", u5, m(u.badge), 1)) : y("", !0)
      ], 10, c5))), 128))
    ]));
  }
}), zl = /* @__PURE__ */ Te(d5, [["__scopeId", "data-v-ad5e6cad"]]), m5 = { class: "commit-list" }, f5 = /* @__PURE__ */ Ie({
  __name: "CommitList",
  setup(e) {
    return (t, n) => (o(), i("div", m5, [
      rt(t.$slots, "default", {}, void 0)
    ]));
  }
}), Mc = /* @__PURE__ */ Te(f5, [["__scopeId", "data-v-8c5ee761"]]), v5 = { class: "commit-message" }, p5 = { class: "commit-date" }, g5 = /* @__PURE__ */ Ie({
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
      s("span", v5, m(e.message), 1),
      s("span", p5, m(e.relativeDate), 1),
      r.$slots.actions ? (o(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = $t(() => {
        }, ["stop"]))
      }, [
        rt(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pc = /* @__PURE__ */ Te(g5, [["__scopeId", "data-v-dd7c621b"]]), h5 = {
  key: 0,
  class: "load-more-row"
}, y5 = /* @__PURE__ */ Ie({
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
    return (a, l) => (o(), D(Qt, null, ms({
      content: h(() => [
        e.commits.length === 0 ? (o(), D(Ms, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), D(Mc, {
          key: 1,
          class: "history-commits"
        }, {
          default: h(() => [
            (o(!0), i(W, null, he(e.commits, (r) => (o(), D(Pc, {
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
            e.hasMore ? (o(), i("div", h5, [
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
}), w5 = /* @__PURE__ */ Te(y5, [["__scopeId", "data-v-00efa121"]]), _5 = { class: "branch-create-form" }, k5 = { class: "form-actions" }, b5 = /* @__PURE__ */ Ie({
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
    return (u, d) => (o(), i("div", _5, [
      b(Tn, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", k5, [
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
}), $5 = /* @__PURE__ */ Te(b5, [["__scopeId", "data-v-7c500394"]]), C5 = { class: "branch-list-item__indicator" }, x5 = { class: "branch-list-item__name" }, S5 = {
  key: 0,
  class: "branch-list-item__actions"
}, I5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, E5 = /* @__PURE__ */ Ie({
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
      s("span", C5, m(e.isCurrent ? "●" : "○"), 1),
      s("span", x5, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (o(), i("div", S5, [
        rt(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (o(), i("span", I5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), T5 = /* @__PURE__ */ Te(E5, [["__scopeId", "data-v-c6581a24"]]), M5 = { class: "header-info" }, P5 = { class: "branch-name" }, R5 = {
  key: 0,
  class: "current-badge"
}, D5 = { class: "branch-meta" }, L5 = { key: 0 }, N5 = {
  key: 0,
  class: "meta-note"
}, U5 = {
  key: 0,
  class: "loading"
}, O5 = {
  key: 1,
  class: "empty-state"
}, A5 = {
  key: 0,
  class: "load-more-row"
}, z5 = 50, F5 = /* @__PURE__ */ Ie({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch", "revert-current"],
  setup(e) {
    const t = e, { getBranchHistory: n } = ft(), a = _([]), l = _(!1), r = _(!0), c = _(!1);
    async function u(f = 0) {
      const v = await n(t.branchName, z5, f);
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
    return dt(async () => {
      try {
        await u();
      } finally {
        r.value = !1;
      }
    }), (f, v) => (o(), D(Pt, {
      size: "md",
      "show-close-button": !1,
      onClose: v[4] || (v[4] = (p) => f.$emit("close"))
    }, {
      header: h(() => [
        s("div", M5, [
          v[5] || (v[5] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", P5, m(e.branchName), 1),
          e.isCurrent ? (o(), i("span", R5, "CURRENT")) : y("", !0)
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
        s("div", D5, [
          r.value ? (o(), i("span", L5, "Loading...")) : (o(), i(W, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (o(), i("span", N5, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (o(), i("div", U5, "Loading commit history...")) : a.value.length === 0 ? (o(), i("div", O5, " No commits found on this branch ")) : (o(), D(Mc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (o(!0), i(W, null, he(a.value, (p) => (o(), D(Pc, {
              key: p.hash,
              hash: p.short_hash || p.hash.slice(0, 7),
              message: p.message,
              "relative-date": p.date_relative || p.relative_date || "",
              clickable: !1
            }, null, 8, ["hash", "message", "relative-date"]))), 128)),
            l.value ? (o(), i("div", A5, [
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
}), B5 = /* @__PURE__ */ Te(F5, [["__scopeId", "data-v-89798c86"]]), V5 = {
  key: 0,
  class: "branch-toolbar"
}, W5 = {
  key: 3,
  class: "branch-list"
}, G5 = /* @__PURE__ */ Ie({
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
    return (p, w) => (o(), D(Qt, null, ms({
      content: h(() => [
        e.embedded && !a.value ? (o(), i("div", V5, [
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
        a.value ? (o(), D($5, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (o(), D(Ms, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (o(), i("div", W5, [
          (o(!0), i(W, null, he(e.branches, (g) => (o(), D(T5, {
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
                onClick: $t((k) => n("switch", g.name), ["stop"])
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
        l.value ? (o(), D(B5, {
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
}), j5 = /* @__PURE__ */ Te(G5, [["__scopeId", "data-v-b24413b8"]]);
function Rc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const H5 = { class: "remote-url-display" }, q5 = ["title"], K5 = ["title"], J5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Y5 = /* @__PURE__ */ Ie({
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
    return (r, c) => (o(), i("div", H5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, q5),
      s("button", {
        class: Ve(["copy-btn", { copied: n.value }]),
        onClick: l,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), i("svg", Q5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), i("svg", J5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, K5)
    ]));
  }
}), X5 = /* @__PURE__ */ Te(Y5, [["__scopeId", "data-v-7768a58d"]]), Z5 = { class: "remote-title" }, e4 = {
  key: 0,
  class: "default-badge"
}, t4 = {
  key: 1,
  class: "sync-badge"
}, s4 = {
  key: 0,
  class: "ahead"
}, n4 = {
  key: 1,
  class: "behind"
}, o4 = {
  key: 1,
  class: "synced"
}, a4 = ["href"], l4 = {
  key: 1,
  class: "remote-url-text"
}, i4 = /* @__PURE__ */ Ie({
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
    }, ms({
      icon: h(() => [
        C(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", Z5, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (o(), i("span", e4, "DEFAULT")) : y("", !0),
          e.syncStatus ? (o(), i("span", t4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (o(), i(W, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (o(), i("span", s4, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (o(), i("span", n4, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (o(), i("span", o4, "✓ synced"))
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
          onClick: v[0] || (v[0] = $t(() => {
          }, ["stop"]))
        }, m(d.value), 9, a4)) : (o(), i("span", l4, m(d.value), 1))
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
          e.remote.push_url !== e.remote.fetch_url ? (o(), D(Mt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(X5, {
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
}), r4 = /* @__PURE__ */ Te(i4, [["__scopeId", "data-v-8310f3a8"]]), c4 = ["for"], u4 = {
  key: 0,
  class: "base-form-field-required"
}, d4 = { class: "base-form-field-input" }, m4 = {
  key: 1,
  class: "base-form-field-error"
}, f4 = {
  key: 2,
  class: "base-form-field-hint"
}, v4 = /* @__PURE__ */ Ie({
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
        e.required ? (o(), i("span", u4, "*")) : y("", !0)
      ], 8, c4)) : y("", !0),
      s("div", d4, [
        rt(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (o(), i("span", m4, m(e.error), 1)) : e.hint ? (o(), i("span", f4, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ Te(v4, [["__scopeId", "data-v-9a1cf296"]]), p4 = { class: "remote-form" }, g4 = { class: "form-header" }, h4 = { class: "form-body" }, y4 = {
  key: 0,
  class: "form-error"
}, w4 = { class: "form-actions" }, _4 = /* @__PURE__ */ Ie({
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
    bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
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
    return (f, v) => (o(), i("div", p4, [
      s("div", g4, [
        b(ys, null, {
          default: h(() => [
            C(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", h4, [
        b(qt, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(Dt, {
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
            b(Dt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(qt, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(Dt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (o(), i("div", y4, m(c.value), 1)) : y("", !0)
      ]),
      s("div", w4, [
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
}), k4 = /* @__PURE__ */ Te(_4, [["__scopeId", "data-v-56021b18"]]), b4 = { class: "conflict-summary-box" }, $4 = { class: "summary-header" }, C4 = { class: "summary-text" }, x4 = { key: 0 }, S4 = {
  key: 1,
  class: "all-resolved"
}, I4 = { class: "summary-progress" }, E4 = { class: "progress-bar" }, T4 = { class: "progress-text" }, M4 = /* @__PURE__ */ Ie({
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
    return (a, l) => (o(), i("div", b4, [
      s("div", $4, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", C4, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (o(), i("p", x4, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (o(), i("p", S4, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", I4, [
        s("div", E4, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: n.value + "%" })
          }, null, 4)
        ]),
        s("span", T4, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), P4 = /* @__PURE__ */ Te(M4, [["__scopeId", "data-v-4e9e6cc9"]]), R4 = { class: "modal-header" }, D4 = { class: "modal-title" }, L4 = { class: "modal-body" }, N4 = {
  key: 0,
  class: "error-box"
}, U4 = {
  key: 0,
  class: "error-hint"
}, O4 = {
  key: 1,
  class: "loading-state"
}, A4 = { class: "commit-summary" }, z4 = {
  key: 0,
  class: "commits-section"
}, F4 = { class: "commit-list" }, B4 = { class: "commit-hash" }, V4 = { class: "commit-message" }, W4 = { class: "commit-date" }, G4 = {
  key: 1,
  class: "changes-section"
}, j4 = {
  key: 0,
  class: "change-group",
  open: ""
}, H4 = { class: "change-count" }, q4 = { class: "change-list" }, K4 = {
  key: 0,
  class: "conflict-badge"
}, J4 = {
  key: 1,
  class: "change-group"
}, Q4 = { class: "change-count" }, Y4 = { class: "change-list" }, X4 = {
  key: 2,
  class: "change-group"
}, Z4 = { class: "change-count" }, eI = { class: "change-list" }, tI = {
  key: 3,
  class: "strategy-section"
}, sI = { class: "radio-group" }, nI = { class: "radio-option" }, oI = { class: "radio-option" }, aI = { class: "radio-option" }, lI = {
  key: 4,
  class: "up-to-date"
}, iI = { class: "modal-actions" }, Ui = "comfygit.pullModelStrategy", rI = /* @__PURE__ */ Ie({
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
    bt(l, (S) => {
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
      return o(), D(us, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (P) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = $t(() => {
            }, ["stop"]))
          }, [
            s("div", R4, [
              s("h3", D4, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (P) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", L4, [
              e.error ? (o(), i("div", N4, [
                x[13] || (x[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  x[12] || (x[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (o(), i("p", U4, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (o(), i("div", O4, [...x[14] || (x[14] = [
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
                s("div", A4, [
                  x[17] || (x[17] = s("span", { class: "icon" }, "📥", -1)),
                  C(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (o(), i("div", z4, [
                  x[18] || (x[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", F4, [
                    (o(!0), i(W, null, he(e.preview.commits, (P) => (o(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", B4, m(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", V4, m(P.message), 1),
                      s("span", W4, m(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (o(), i("div", G4, [
                  x[22] || (x[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (o(), i("details", j4, [
                    s("summary", null, [
                      x[19] || (x[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", H4, m(c.value) + " changes", 1)
                    ]),
                    s("div", q4, [
                      (o(!0), i(W, null, he(e.preview.changes.workflows.added, (P) => (o(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128)),
                      (o(!0), i(W, null, he(e.preview.changes.workflows.modified, (P) => (o(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        C(" ~ " + m(P) + " ", 1),
                        k(P) ? (o(), i("span", K4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (o(!0), i(W, null, he(e.preview.changes.workflows.deleted, (P) => (o(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (o(), i("details", J4, [
                    s("summary", null, [
                      x[20] || (x[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", Q4, m(u.value) + " to install", 1)
                    ]),
                    s("div", Y4, [
                      (o(!0), i(W, null, he(e.preview.changes.nodes.to_install, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (o(), i("details", X4, [
                    s("summary", null, [
                      x[21] || (x[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", Z4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", eI, [
                      (o(!0), i(W, null, he(e.preview.changes.models.referenced, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item"
                      }, m(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (o(), D(P4, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (o(), i("div", tI, [
                  x[27] || (x[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", sI, [
                    s("label", nI, [
                      Ft(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      x[23] || (x[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", oI, [
                      Ft(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      x[24] || (x[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", aI, [
                      Ft(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      x[25] || (x[25] = s("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (o(), i("div", lI, [
                  x[29] || (x[29] = s("span", { class: "icon" }, "✓", -1)),
                  C(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", iI, [
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
}), cI = /* @__PURE__ */ Te(rI, [["__scopeId", "data-v-1d633bba"]]), uI = { class: "modal-header" }, dI = { class: "modal-title" }, mI = { class: "modal-body" }, fI = {
  key: 0,
  class: "error-box"
}, vI = {
  key: 1,
  class: "loading-state"
}, pI = {
  key: 2,
  class: "warning-box"
}, gI = {
  key: 1,
  class: "commits-section"
}, hI = { class: "commit-list" }, yI = { class: "commit-hash" }, wI = { class: "commit-message" }, _I = { class: "commit-date" }, kI = { class: "force-option" }, bI = { class: "checkbox-option" }, $I = { class: "commit-summary" }, CI = { key: 0 }, xI = { key: 1 }, SI = {
  key: 0,
  class: "info-box"
}, II = {
  key: 2,
  class: "commits-section"
}, EI = { class: "commit-list" }, TI = { class: "commit-hash" }, MI = { class: "commit-message" }, PI = { class: "commit-date" }, RI = {
  key: 3,
  class: "up-to-date"
}, DI = { class: "modal-actions" }, LI = /* @__PURE__ */ Ie({
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
        (o(), D(us, { to: "body" }, [
          e.show ? (o(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (T) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = $t(() => {
              }, ["stop"]))
            }, [
              s("div", uI, [
                s("h3", dI, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (T) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", mI, [
                e.error ? (o(), i("div", fI, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (o(), i("div", vI, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  C(" Loading preview... ", -1)
                ])])) : (k = e.preview) != null && k.has_uncommitted_changes ? (o(), i("div", pI, [...g[15] || (g[15] = [
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
                  e.preview.commits_ahead > 0 ? (o(), i("div", gI, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", hI, [
                      (o(!0), i(W, null, he(e.preview.commits, (T) => (o(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", yI, m(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", wI, m(T.message), 1),
                        s("span", _I, m(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", kI, [
                    s("label", bI, [
                      Ft(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (T) => l.value = T)
                      }, null, 512), [
                        [la, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (o(), i(W, { key: 4 }, [
                  s("div", $I, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (o(), i("span", CI, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (o(), i("span", xI, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (o(), i("div", SI, [...g[21] || (g[21] = [
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
                  e.preview.commits_ahead > 0 ? (o(), i("div", II, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", EI, [
                      (o(!0), i(W, null, he(e.preview.commits, (T) => (o(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", TI, m(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", MI, m(T.message), 1),
                        s("span", PI, m(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (o(), i("div", RI, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    C(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", DI, [
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
}), NI = /* @__PURE__ */ Te(LI, [["__scopeId", "data-v-7748bf33"]]), UI = { class: "resolution-choice-group" }, OI = ["disabled"], AI = ["disabled"], zI = /* @__PURE__ */ Ie({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("div", UI, [
      s("button", {
        class: Ve(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...n[2] || (n[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, OI),
      s("button", {
        class: Ve(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...n[3] || (n[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, AI)
    ]));
  }
}), FI = /* @__PURE__ */ Te(zI, [["__scopeId", "data-v-985715ed"]]), BI = { class: "conflict-header" }, VI = { class: "conflict-info" }, WI = { class: "workflow-name" }, GI = { class: "conflict-description" }, jI = {
  key: 0,
  class: "resolved-badge"
}, HI = { class: "resolved-text" }, qI = { class: "conflict-hashes" }, KI = { class: "hash-item" }, JI = { class: "hash-item" }, QI = { class: "conflict-actions" }, YI = /* @__PURE__ */ Ie({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(n.resolution);
    bt(() => n.resolution, (d) => {
      l.value = d;
    }), bt(l, (d) => {
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
        s("div", BI, [
          f[2] || (f[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", VI, [
            s("code", WI, m(e.conflict.name) + ".json", 1),
            s("div", GI, m(c.value), 1)
          ]),
          r.value ? (o(), i("div", jI, [
            f[1] || (f[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", HI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", qI, [
          s("span", KI, [
            f[3] || (f[3] = C("Your: ", -1)),
            s("code", null, m(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", JI, [
            f[4] || (f[4] = C("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", QI, [
          b(FI, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), XI = /* @__PURE__ */ Te(YI, [["__scopeId", "data-v-506d3bbf"]]), ZI = { class: "resolution-content" }, e6 = {
  key: 0,
  class: "error-box"
}, t6 = { class: "resolution-header" }, s6 = { class: "header-stats" }, n6 = { class: "stat" }, o6 = { class: "stat-value" }, a6 = { class: "stat resolved" }, l6 = { class: "stat-value" }, i6 = {
  key: 0,
  class: "stat pending"
}, r6 = { class: "stat-value" }, c6 = { class: "conflicts-list" }, u6 = {
  key: 1,
  class: "all-resolved-message"
}, d6 = /* @__PURE__ */ Ie({
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
    return (w, g) => (o(), D(Pt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", ZI, [
          e.error ? (o(), i("div", e6, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", t6, [
            s("div", s6, [
              s("div", n6, [
                s("span", o6, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", a6, [
                s("span", l6, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (o(), i("div", i6, [
                s("span", r6, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", c6, [
            (o(!0), i(W, null, he(e.workflowConflicts, (k) => (o(), D(XI, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: ($) => f(k.name, $)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (o(), i("div", u6, [
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
}), m6 = /* @__PURE__ */ Te(d6, [["__scopeId", "data-v-c58d150d"]]), f6 = { class: "node-conflict-item" }, v6 = { class: "node-header" }, p6 = { class: "node-name" }, g6 = { class: "node-id" }, h6 = { class: "version-comparison" }, y6 = { class: "version yours" }, w6 = { class: "version theirs" }, _6 = { class: "chosen-version" }, k6 = { class: "chosen" }, b6 = { class: "chosen-reason" }, $6 = { class: "affected-workflows" }, C6 = { class: "wf-source" }, x6 = { class: "wf-version" }, S6 = /* @__PURE__ */ Ie({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", f6, [
      s("div", v6, [
        s("code", p6, m(e.conflict.node_name), 1),
        s("span", g6, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", h6, [
        s("div", y6, [
          n[0] || (n[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", w6, [
          n[1] || (n[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", _6, [
        n[3] || (n[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", k6, m(e.conflict.chosen_version), 1),
        s("span", b6, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", $6, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (o(!0), i(W, null, he(e.conflict.affected_workflows, (a) => (o(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", C6, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", x6, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), I6 = /* @__PURE__ */ Te(S6, [["__scopeId", "data-v-8b626725"]]), E6 = { class: "validation-content" }, T6 = {
  key: 0,
  class: "compatible-message"
}, M6 = { class: "conflicts-list" }, P6 = {
  key: 2,
  class: "warnings-section"
}, R6 = /* @__PURE__ */ Ie({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (o(), D(Pt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", E6, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (o(), i("div", T6, [
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
            s("div", M6, [
              (o(!0), i(W, null, he(e.validation.node_conflicts, (u) => (o(), D(I6, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (o(), i("div", P6, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (o(!0), i(W, null, he(e.validation.warnings, (u, d) => (o(), i("li", { key: d }, m(u), 1))), 128))
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
}), D6 = /* @__PURE__ */ Te(R6, [["__scopeId", "data-v-fefd26ed"]]), L6 = {
  key: 0,
  class: "embedded-toolbar"
}, N6 = { class: "embedded-toolbar-search" }, U6 = /* @__PURE__ */ Ie({
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
    } = ft(), k = _([]), $ = _({}), S = _(!1), x = _(null), T = _(""), I = _(!1), P = _(null), O = _(!1), U = _("add"), B = _({
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
    async function A() {
      S.value = !0, x.value = null;
      try {
        const De = await a();
        k.value = De.remotes, await Promise.all(
          De.remotes.map(async (Ae) => {
            const He = await d(Ae.name);
            He && ($.value[Ae.name] = He);
          })
        );
      } catch (De) {
        x.value = De instanceof Error ? De.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function Q() {
      U.value = "add", B.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function ae(De) {
      const Ae = k.value.find((He) => He.name === De);
      Ae && (U.value = "edit", B.value = {
        name: Ae.name,
        fetchUrl: Ae.fetch_url,
        pushUrl: Ae.push_url
      }, O.value = !0);
    }
    async function H(De) {
      try {
        U.value === "add" ? await l(De.name, De.fetchUrl) : await c(De.name, De.fetchUrl, De.pushUrl || void 0), O.value = !1, await A();
      } catch (Ae) {
        x.value = Ae instanceof Error ? Ae.message : "Operation failed";
      }
    }
    function ue() {
      O.value = !1, B.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function q(De) {
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
    async function N(De) {
      if (confirm(`Remove remote "${De}"?`))
        try {
          await r(De), await A();
        } catch (Ae) {
          x.value = Ae instanceof Error ? Ae.message : "Failed to remove remote";
        }
    }
    function j() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const pe = _("idle"), ne = M(() => pe.value === "pull_preview"), re = M(
      () => pe.value === "resolving" || pe.value === "validating"
    ), me = M(
      () => pe.value === "validation_review" || pe.value === "executing"
    ), J = _(!1), te = _(null), le = _(!1), xe = _(null), ye = _(null), Fe = _(!1), Le = _(null), _e = _(null), Pe = _(/* @__PURE__ */ new Map()), ge = _(null), ke = _(null), E = M(() => Le.value && Rc(Le.value) ? Le.value : null);
    async function F(De) {
      ye.value = De, pe.value = "pull_preview", Fe.value = !0, Le.value = null, _e.value = null;
      try {
        Le.value = await f(De);
      } catch (Ae) {
        _e.value = Ae instanceof Error ? Ae.message : "Failed to load pull preview";
      } finally {
        Fe.value = !1;
      }
    }
    function ie() {
      pe.value = "idle", Le.value = null, _e.value = null, ye.value = null;
    }
    async function Ee(De) {
      if (!ye.value) return;
      pe.value = "executing", _e.value = null;
      const Ae = ye.value;
      try {
        const He = await v(Ae, De);
        if (He.rolled_back) {
          _e.value = `Pull failed and was rolled back: ${He.error || "Unknown error"}`, pe.value = "pull_preview";
          return;
        }
        Be(), pe.value = "idle", n("toast", `✓ Pulled from ${Ae}`, "success"), await A();
      } catch (He) {
        _e.value = He instanceof Error ? He.message : "Pull failed", pe.value = "pull_preview";
      }
    }
    function $e() {
      E.value && (pe.value = "resolving", ke.value = null);
    }
    function Ce(De, Ae) {
      Pe.value.set(De, { name: De, resolution: Ae });
    }
    function Oe() {
      pe.value = "pull_preview";
    }
    async function ee() {
      pe.value = "validating", ke.value = null;
      try {
        const De = Array.from(Pe.value.values());
        ge.value = await g(ye.value, De), pe.value = "validation_review";
      } catch (De) {
        ke.value = De instanceof Error ? De.message : "Validation failed", pe.value = "resolving";
      }
    }
    async function V() {
      pe.value = "executing";
      const De = ye.value;
      try {
        const Ae = Array.from(Pe.value.values()), He = await v(De, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ae
        });
        if (He.rolled_back) {
          _e.value = `Pull failed and was rolled back: ${He.error || "Unknown error"}`, pe.value = "pull_preview";
          return;
        }
        Be(), pe.value = "idle", n("toast", `✓ Pulled from ${De}`, "success"), await A();
      } catch (Ae) {
        _e.value = Ae instanceof Error ? Ae.message : "Pull failed", pe.value = "validation_review";
      }
    }
    function de() {
      pe.value = "resolving";
    }
    function We() {
      Be(), pe.value = "idle";
    }
    function Be() {
      Pe.value.clear(), ge.value = null, ke.value = null, _e.value = null, Le.value = null, ye.value = null;
    }
    async function we(De) {
      ye.value = De, J.value = !0, Fe.value = !0, te.value = null, xe.value = null;
      try {
        te.value = await p(De);
      } catch (Ae) {
        xe.value = Ae instanceof Error ? Ae.message : "Failed to load push preview";
      } finally {
        Fe.value = !1;
      }
    }
    async function se() {
      if (ye.value) {
        Fe.value = !0, xe.value = null;
        try {
          te.value = await p(ye.value);
        } catch (De) {
          xe.value = De instanceof Error ? De.message : "Failed to refresh push preview";
        } finally {
          Fe.value = !1;
        }
      }
    }
    function Ke() {
      J.value = !1, te.value = null, xe.value = null, ye.value = null;
    }
    async function Ne(De) {
      var He;
      if (!ye.value) return;
      le.value = !0;
      const Ae = ye.value;
      xe.value = null;
      try {
        await w(Ae, De), Ke(), n("toast", `✓ Pushed to ${Ae}`, "success"), await A();
      } catch (kt) {
        const Ut = kt instanceof Error ? kt.message : "Push failed";
        xe.value = Ut, kt instanceof cl && kt.status === 409 && ((He = kt.data) != null && He.needs_force) && te.value ? te.value = {
          ...te.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : n("toast", Ut, "error");
      } finally {
        le.value = !1;
      }
    }
    function Xe() {
      const De = ye.value;
      Ke(), De && F(De);
    }
    return dt(A), (De, Ae) => (o(), i(W, null, [
      b(Qt, null, ms({
        content: h(() => [
          S.value ? (o(), D(Bs, {
            key: 0,
            message: "Loading remotes..."
          })) : x.value ? (o(), D(Vs, {
            key: 1,
            message: x.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            e.embedded && !O.value ? (o(), i("div", L6, [
              s("div", N6, [
                b(kn, {
                  modelValue: T.value,
                  "onUpdate:modelValue": Ae[2] || (Ae[2] = (He) => T.value = He),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: Q
              }, {
                default: h(() => [...Ae[5] || (Ae[5] = [
                  C(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            O.value ? (o(), D(k4, {
              key: 1,
              mode: U.value,
              "remote-name": B.value.name,
              "fetch-url": B.value.fetchUrl,
              "push-url": B.value.pushUrl,
              onSubmit: H,
              onCancel: ue
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            R.value.length && !O.value ? (o(), D(Ot, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: h(() => [
                (o(!0), i(W, null, he(R.value, (He) => (o(), D(r4, {
                  key: He.name,
                  remote: He,
                  "sync-status": $.value[He.name],
                  "fetching-remote": P.value,
                  onFetch: q,
                  onEdit: ae,
                  onRemove: N,
                  onPull: F,
                  onPush: we
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !R.value.length && !O.value ? (o(), D(Ms, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "primary",
                  onClick: Q
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
              onInfoClick: Ae[0] || (Ae[0] = (He) => I.value = !0)
            }, {
              actions: h(() => [
                O.value ? y("", !0) : (o(), D(Me, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: Q
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
            O.value ? y("", !0) : (o(), D(kn, {
              key: 0,
              modelValue: T.value,
              "onUpdate:modelValue": Ae[1] || (Ae[1] = (He) => T.value = He),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(bs, {
        show: I.value,
        title: "About Git Remotes",
        onClose: Ae[3] || (Ae[3] = (He) => I.value = !1)
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
            onClick: j
          }, {
            default: h(() => [...Ae[8] || (Ae[8] = [
              C(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(cI, {
        show: ne.value,
        "remote-name": ye.value || "",
        preview: Le.value,
        loading: Fe.value,
        pulling: pe.value === "executing",
        error: _e.value,
        "conflict-resolutions": Pe.value,
        onClose: ie,
        onPull: Ee,
        onOpenConflictResolution: $e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(NI, {
        show: J.value,
        "remote-name": ye.value || "",
        preview: te.value,
        loading: Fe.value,
        pushing: le.value,
        error: xe.value,
        onClose: Ke,
        onPush: Ne,
        onPullFirst: Xe,
        onRevalidate: se
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      re.value && E.value ? (o(), D(m6, {
        key: 0,
        "workflow-conflicts": E.value.workflow_conflicts,
        resolutions: Pe.value,
        "operation-type": "pull",
        validating: pe.value === "validating",
        error: ke.value,
        onClose: Oe,
        onResolve: Ce,
        onApply: ee
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      me.value && ge.value ? (o(), D(D6, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: pe.value === "executing",
        onProceed: V,
        onGoBack: de,
        onCancel: We
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), O6 = /* @__PURE__ */ Te(U6, [["__scopeId", "data-v-a6651a66"]]), A6 = /* @__PURE__ */ Ie({
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
    return bt(() => n.initialTab, (c) => {
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
        r.value === "history" ? (o(), D(w5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "has-more": e.historyHasMore,
          "is-loading-more": e.isLoadingHistoryMore,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d)),
          onLoadMore: u[3] || (u[3] = (d) => a("load-more-history"))
        }, null, 8, ["commits", "has-more", "is-loading-more", "current-ref"])) : r.value === "branches" ? (o(), D(j5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[4] || (u[4] = (d) => a("switch", d)),
          onCreate: u[5] || (u[5] = (d) => a("create", d)),
          onDelete: u[6] || (u[6] = (d) => a("delete", d)),
          onRevertCurrent: u[7] || (u[7] = (d) => a("revert-current"))
        }, null, 8, ["branches", "current"])) : (o(), D(O6, {
          key: 2,
          embedded: "",
          onToast: u[8] || (u[8] = (d, f) => a("toast", d, f))
        }))
      ]),
      _: 1
    }));
  }
}), z6 = { class: "text-viewer-wrapper" }, F6 = ["disabled", "title"], B6 = { class: "text-content" }, V6 = /* @__PURE__ */ Ie({
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
    return (u, d) => (o(), i("div", z6, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, F6),
        s("pre", B6, m(e.content), 1)
      ], 544)
    ]));
  }
}), W6 = /* @__PURE__ */ Te(V6, [["__scopeId", "data-v-85a537ba"]]), G6 = {
  key: 1,
  class: "manifest-viewer-shell"
}, j6 = { class: "manifest-path" }, H6 = /* @__PURE__ */ Ie({
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
    return dt(c), (u, d) => (o(), i(W, null, [
      b(Qt, null, ms({
        content: h(() => [
          n.value ? (o(), D(Bs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (o(), D(Vs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            !r.value.exists || !r.value.content ? (o(), D(Ms, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (o(), i("div", G6, [
              b(W6, {
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
      b(bs, {
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
          s("div", j6, [
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
}), q6 = /* @__PURE__ */ Te(H6, [["__scopeId", "data-v-814a8fdd"]]), K6 = { class: "log-viewer-wrapper" }, J6 = ["disabled", "title"], Q6 = /* @__PURE__ */ Ie({
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
    dt(r), bt(() => t.logs, r);
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
    return (f, v) => (o(), i("div", K6, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, J6),
        (o(!0), i(W, null, he(l.value, (p, w) => (o(), i("div", {
          key: w,
          class: Ve(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Dc = /* @__PURE__ */ Te(Q6, [["__scopeId", "data-v-5aaf1b88"]]), Y6 = /* @__PURE__ */ Ie({
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
    return dt(() => {
      w(), g();
    }), ($, S) => (o(), i(W, null, [
      b(Qt, null, ms({
        content: h(() => [
          c.value ? (o(), D(Bs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (o(), D(Vs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            r.value.length === 0 ? (o(), D(Ms, {
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
      b(bs, {
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
}), Oi = /* @__PURE__ */ Ie({
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
    return bt(u, () => {
      S();
    }), bt(() => c.initialTab, (I) => {
      I && (u.value = I);
    }), dt(() => {
      S(), x();
    }), (I, P) => (o(), i(W, null, [
      b(Qt, null, ms({
        content: h(() => [
          f.value ? (o(), D(Bs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : v.value ? (o(), D(Vs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), i(W, { key: 2 }, [
            d.value.length === 0 ? (o(), D(Ms, {
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
              onInfoClick: P[0] || (P[0] = (O) => p.value = !0)
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
              "onUpdate:modelValue": P[1] || (P[1] = (O) => u.value = O),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(bs, {
        show: p.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (O) => p.value = !1)
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
            onClick: P[2] || (P[2] = (O) => p.value = !1)
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
}), X6 = /* @__PURE__ */ Ie({
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
    return bt(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), bt(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, f) => (o(), i(W, null, [
      b(Qt, null, ms({
        header: h(() => [
          b(Yt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (o(), D(q6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (o(), D(Y6, {
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
      b(bs, {
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
}), Z6 = { class: "header-info" }, eE = { class: "commit-hash" }, tE = {
  key: 0,
  class: "commit-refs"
}, sE = { class: "commit-message" }, nE = { class: "commit-date" }, oE = {
  key: 0,
  class: "loading"
}, aE = {
  key: 1,
  class: "changes-section"
}, lE = { class: "stats-row" }, iE = { class: "stat" }, rE = { class: "stat insertions" }, cE = { class: "stat deletions" }, uE = {
  key: 0,
  class: "change-group"
}, dE = {
  key: 1,
  class: "change-group"
}, mE = {
  key: 0,
  class: "version"
}, fE = {
  key: 2,
  class: "change-group"
}, vE = { class: "change-item" }, pE = /* @__PURE__ */ Ie({
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
    return dt(async () => {
      try {
        a.value = await n(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (o(), D(Pt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (f) => u.$emit("close"))
    }, {
      header: h(() => {
        var f, v, p, w;
        return [
          s("div", Z6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", eE, m(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (o(), i("span", tE, [
              (o(!0), i(W, null, he(a.value.refs, (g) => (o(), i("span", {
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
          s("div", sE, m(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          s("div", nE, m(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (o(), i("div", oE, "Loading details...")) : a.value ? (o(), i("div", aE, [
            s("div", lE, [
              s("span", iE, m(a.value.stats.files_changed) + " files", 1),
              s("span", rE, "+" + m(a.value.stats.insertions), 1),
              s("span", cE, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (o(), i("div", uE, [
              b(yn, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  C("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(W, null, he(a.value.changes.workflows.added, (p) => (o(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(W, null, he(a.value.changes.workflows.modified, (p) => (o(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(W, null, he(a.value.changes.workflows.deleted, (p) => (o(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (o(), i("div", dE, [
              b(yn, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  C("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(W, null, he(a.value.changes.nodes.added, (p) => (o(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (o(), i("span", mE, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (o(!0), i(W, null, he(a.value.changes.nodes.removed, (p) => (o(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (o(), i("div", fE, [
              b(yn, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  C("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", vE, [
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
}), gE = /* @__PURE__ */ Te(pE, [["__scopeId", "data-v-d256ff6d"]]), hE = { class: "popover-header" }, yE = { class: "popover-body" }, wE = {
  key: 0,
  class: "changes-summary"
}, _E = {
  key: 0,
  class: "change-item"
}, kE = {
  key: 1,
  class: "change-item"
}, bE = {
  key: 2,
  class: "change-item"
}, $E = {
  key: 3,
  class: "change-item"
}, CE = {
  key: 4,
  class: "change-item"
}, xE = {
  key: 5,
  class: "change-item"
}, SE = {
  key: 1,
  class: "no-changes"
}, IE = {
  key: 2,
  class: "loading"
}, EE = {
  key: 3,
  class: "issues-error"
}, TE = { class: "error-header" }, ME = { class: "error-title" }, PE = { class: "issues-list" }, RE = { class: "workflow-state" }, DE = { class: "message-section" }, LE = { class: "popover-footer" }, NE = {
  key: 1,
  class: "commit-popover"
}, UE = { class: "popover-header" }, OE = { class: "popover-body" }, AE = {
  key: 0,
  class: "changes-summary"
}, zE = {
  key: 0,
  class: "change-item"
}, FE = {
  key: 1,
  class: "change-item"
}, BE = {
  key: 2,
  class: "change-item"
}, VE = {
  key: 3,
  class: "change-item"
}, WE = {
  key: 4,
  class: "change-item"
}, GE = {
  key: 5,
  class: "change-item"
}, jE = {
  key: 1,
  class: "no-changes"
}, HE = {
  key: 2,
  class: "loading"
}, qE = {
  key: 3,
  class: "issues-error"
}, KE = { class: "error-header" }, JE = { class: "error-title" }, QE = { class: "issues-list" }, YE = { class: "workflow-state" }, XE = { class: "message-section" }, ZE = { class: "popover-footer" }, eT = /* @__PURE__ */ Ie({
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
    return (k, $) => e.asModal ? (o(), D(us, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (S) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = $t(() => {
          }, ["stop"]))
        }, [
          s("div", hE, [
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
          s("div", yE, [
            e.status && d.value ? (o(), i("div", wE, [
              e.status.workflows.new.length ? (o(), i("div", _E, [
                $[12] || ($[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (o(), i("div", kE, [
                $[13] || ($[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (o(), i("div", bE, [
                $[14] || ($[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (o(), i("div", $E, [
                $[15] || ($[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), i("div", CE, [
                $[16] || ($[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (o(), i("div", xE, [...$[17] || ($[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (o(), i("div", SE, " No changes to commit ")) : (o(), i("div", IE, " Loading... ")),
            p.value ? (o(), i("div", EE, [
              s("div", TE, [
                $[18] || ($[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", ME, m(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", PE, [
                (o(!0), i(W, null, he(v.value, (S) => (o(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", RE, "(" + m(S.sync_state) + ")", 1),
                  C(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              b(ra, {
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
            s("div", DE, [
              b(On, {
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
          s("div", LE, [
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
    ])) : (o(), i("div", NE, [
      s("div", UE, [
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
      s("div", OE, [
        e.status && d.value ? (o(), i("div", AE, [
          e.status.workflows.new.length ? (o(), i("div", zE, [
            $[23] || ($[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (o(), i("div", FE, [
            $[24] || ($[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (o(), i("div", BE, [
            $[25] || ($[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (o(), i("div", VE, [
            $[26] || ($[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), i("div", WE, [
            $[27] || ($[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (o(), i("div", GE, [...$[28] || ($[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (o(), i("div", jE, " No changes to commit ")) : (o(), i("div", HE, " Loading... ")),
        p.value ? (o(), i("div", qE, [
          s("div", KE, [
            $[29] || ($[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", JE, m(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", QE, [
            (o(!0), i(W, null, he(v.value, (S) => (o(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", YE, "(" + m(S.sync_state) + ")", 1),
              C(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          b(ra, {
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
        s("div", XE, [
          b(On, {
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
      s("div", ZE, [
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
}), Lc = /* @__PURE__ */ Te(eT, [["__scopeId", "data-v-5f897631"]]), tT = { class: "switch-body" }, sT = { class: "switch-message" }, nT = { class: "switch-details" }, oT = /* @__PURE__ */ Ie({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => e.show ? (o(), D(Pt, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: n[2] || (n[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", tT, [
          s("p", sT, [
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
          s("p", nT, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
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
}), aT = /* @__PURE__ */ Te(oT, [["__scopeId", "data-v-f6d223e6"]]), lT = {
  key: 0,
  class: "modal-overlay"
}, iT = { class: "modal-content" }, rT = { class: "modal-body" }, cT = { class: "progress-info" }, uT = { class: "progress-percentage" }, dT = { class: "progress-state" }, mT = { class: "switch-steps" }, fT = { class: "step-icon" }, vT = { class: "step-label" }, pT = /* @__PURE__ */ Ie({
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
    return (r, c) => (o(), D(us, { to: "body" }, [
      e.show ? (o(), i("div", lT, [
        s("div", iT, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", rT, [
            b(Ic, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", cT, [
              s("div", uT, m(e.progress) + "%", 1),
              s("div", dT, m(n.value), 1)
            ]),
            s("div", mT, [
              (o(!0), i(W, null, he(l.value, (u) => (o(), i("div", {
                key: u.state,
                class: Ve(["switch-step", u.status])
              }, [
                s("span", fT, m(u.icon), 1),
                s("span", vT, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), gT = /* @__PURE__ */ Te(pT, [["__scopeId", "data-v-768a5078"]]), hT = { class: "modal-header" }, yT = { class: "modal-body" }, wT = {
  key: 0,
  class: "node-section"
}, _T = { class: "node-list" }, kT = {
  key: 1,
  class: "node-section"
}, bT = { class: "node-list" }, $T = { class: "modal-actions" }, CT = /* @__PURE__ */ Ie({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => (o(), D(us, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $t(() => {
          }, ["stop"]))
        }, [
          s("div", hT, [
            n[5] || (n[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", yT, [
            n[8] || (n[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), i("div", wT, [
              n[6] || (n[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", _T, [
                (o(!0), i(W, null, he(e.mismatchDetails.missing_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), i("div", kT, [
              n[7] || (n[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", bT, [
                (o(!0), i(W, null, he(e.mismatchDetails.extra_nodes, (a) => (o(), i("div", {
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
          s("div", $T, [
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
}), xT = /* @__PURE__ */ Te(CT, [["__scopeId", "data-v-7cad7518"]]), ST = [
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
], Bo = "v0.0.24", IT = "Akatz", ET = { class: "social-buttons" }, TT = ["title", "aria-label", "onClick"], MT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, PT = ["d"], RT = ["title", "aria-label", "onClick"], DT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, LT = ["d"], NT = /* @__PURE__ */ Ie({
  __name: "SocialButtons",
  setup(e) {
    function t(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, a) => (o(), i("div", ET, [
      (o(!0), i(W, null, he(it(ST), (l) => (o(), i(W, {
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
          (o(), i("svg", MT, [
            s("path", {
              d: l.iconPath
            }, null, 8, PT)
          ]))
        ], 8, TT)) : (o(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (o(), i("svg", DT, [
            s("path", {
              d: l.iconPath
            }, null, 8, LT)
          ]))
        ], 8, RT))
      ], 64))), 128))
    ]));
  }
}), Nc = /* @__PURE__ */ Te(NT, [["__scopeId", "data-v-4f846342"]]), UT = { class: "footer-info" }, OT = ["title"], AT = {
  key: 0,
  class: "dev-badge"
}, zT = { class: "made-by" }, FT = /* @__PURE__ */ Ie({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ft(), n = _(null), a = _(null), l = _(null), r = M(() => n.value === "development"), c = M(() => {
      var d;
      if (!r.value) return Bo;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Bo} (${u})` : `${Bo} (development)`;
    });
    return dt(async () => {
      try {
        const u = await t();
        n.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        n.value = null;
      }
    }), (u, d) => (o(), i("div", UT, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        C(m(it(Bo)) + " ", 1),
        r.value ? (o(), i("span", AT, "dev")) : y("", !0)
      ], 8, OT),
      s("span", zT, [
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
        C(" by " + m(it(IT)), 1)
      ])
    ]));
  }
}), Uc = /* @__PURE__ */ Te(FT, [["__scopeId", "data-v-4fa265b3"]]), BT = /* @__PURE__ */ Ie({
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
    return (r, c) => (o(), D(Pt, {
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
}), VT = /* @__PURE__ */ Te(BT, [["__scopeId", "data-v-fac00ae7"]]), WT = { class: "header-actions" }, GT = {
  key: 0,
  class: "wizard-step"
}, jT = { class: "form-field" }, HT = ["placeholder"], qT = {
  key: 0,
  class: "form-error"
}, KT = { class: "form-field form-field--checkbox" }, JT = { class: "form-checkbox" }, QT = {
  key: 0,
  class: "form-field"
}, YT = ["placeholder"], XT = {
  key: 0,
  class: "form-info"
}, ZT = {
  key: 1,
  class: "form-suggestion"
}, eM = {
  key: 2,
  class: "form-error"
}, tM = {
  key: 3,
  class: "form-info"
}, sM = {
  key: 1,
  class: "wizard-step"
}, nM = {
  key: 0,
  class: "progress-check-loading"
}, oM = {
  key: 0,
  class: "cli-warning"
}, aM = { class: "cli-warning-header" }, lM = {
  key: 1,
  class: "env-landing"
}, iM = { class: "env-list" }, rM = ["value"], cM = { class: "env-name" }, uM = {
  key: 2,
  class: "env-create"
}, dM = { class: "form-field" }, mM = { class: "form-field" }, fM = ["value"], vM = { class: "form-field" }, pM = ["disabled"], gM = ["value"], hM = { class: "form-field" }, yM = ["value"], wM = { class: "form-field form-field--checkbox" }, _M = { class: "form-checkbox" }, kM = {
  key: 0,
  class: "form-error"
}, bM = {
  key: 1,
  class: "env-creating"
}, $M = { class: "creating-intro" }, CM = {
  key: 3,
  class: "env-import"
}, xM = { class: "wizard-footer" }, SM = { class: "wizard-footer-actions" }, Sn = 10, IM = 600 * 1e3, Ai = 1800 * 1e3, EM = /* @__PURE__ */ Ie({
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
    } = ft(), p = _(n.initialStep || 1), w = _(null), g = _("landing"), k = _(!1), $ = _(!1), S = _(!1), x = _(!1), T = _(null), I = _(n.initialStep === 2), P = _(n.defaultPath), O = _(!!n.detectedModelsDir), U = _(n.detectedModelsDir || ""), B = _(null), R = _(null), A = _(null), Q = _(null), ae = _("my-new-env"), H = _(xc), ue = _("latest"), q = _(Sc), N = _(!0), j = _(null), pe = _(null), ne = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), re = _(!1), me = _(!1), J = _(!1), te = _({ progress: 0, message: "" }), le = _({ progress: 0, message: "" }), xe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ye = _(0), Fe = _(null), Le = _(0), _e = _(null), Pe = M(() => {
      var Ne, Xe;
      const we = (Ne = P.value) == null ? void 0 : Ne.trim(), se = !B.value, Ke = !O.value || !R.value && ((Xe = U.value) == null ? void 0 : Xe.trim());
      return we && se && Ke;
    }), ge = M(() => {
      var we;
      return (we = ae.value) == null ? void 0 : we.trim();
    }), ke = M(() => !!(p.value === 2 || pe.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), E = M(() => pe.value || n.workspacePath || null);
    async function F() {
      var we;
      if (B.value = null, !!((we = P.value) != null && we.trim()))
        try {
          const se = await c({ path: P.value, type: "workspace" });
          se.valid || (B.value = se.error || "Invalid path");
        } catch (se) {
          B.value = se instanceof Error ? se.message : "Validation failed";
        }
    }
    async function ie() {
      var we;
      if (R.value = null, A.value = null, Q.value = null, !!((we = U.value) != null && we.trim()))
        try {
          const se = await c({ path: U.value, type: "models" });
          if (se.valid)
            Q.value = se.model_count ?? null;
          else if (R.value = se.error || "Invalid path", se.suggestion) {
            A.value = se.suggestion, U.value = se.suggestion, R.value = null;
            const Ke = await c({ path: se.suggestion, type: "models" });
            Ke.valid && (Q.value = Ke.model_count ?? null);
          }
        } catch (se) {
          R.value = se instanceof Error ? se.message : "Validation failed";
        }
    }
    async function Ee() {
      var we, se, Ke, Ne, Xe;
      if (B.value = null, R.value = null, await F(), (we = B.value) != null && we.includes("already exists")) {
        B.value = null, pe.value = ((se = P.value) == null ? void 0 : se.trim()) || n.defaultPath, p.value = 2, Ce();
        return;
      }
      if (!B.value && !(O.value && ((Ke = U.value) != null && Ke.trim()) && (await ie(), R.value))) {
        me.value = !0;
        try {
          await l({
            workspace_path: ((Ne = P.value) == null ? void 0 : Ne.trim()) || n.defaultPath,
            models_directory: O.value && ((Xe = U.value) == null ? void 0 : Xe.trim()) || null
          }), ye.value = 0, Fe.value = Date.now();
          const De = setInterval(async () => {
            var Ae;
            if (Fe.value && Date.now() - Fe.value > IM) {
              clearInterval(De), me.value = !1, B.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const He = await r();
              if (ye.value = 0, He.state === "idle" && me.value) {
                clearInterval(De), me.value = !1, B.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              te.value = { progress: He.progress, message: He.message }, He.state === "complete" ? (clearInterval(De), me.value = !1, pe.value = ((Ae = P.value) == null ? void 0 : Ae.trim()) || n.defaultPath, p.value = 2, Ce()) : He.state === "error" && (clearInterval(De), me.value = !1, B.value = He.error || "Workspace creation failed");
            } catch (He) {
              ye.value++, console.warn(`Polling failure ${ye.value}/${Sn}:`, He), ye.value >= Sn && (clearInterval(De), me.value = !1, B.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (De) {
          me.value = !1, B.value = De instanceof Error ? De.message : "Failed to create workspace";
        }
      }
    }
    async function $e() {
      J.value = !0, j.value = null;
      try {
        const we = {
          name: ae.value.trim() || "my-new-env",
          python_version: H.value,
          comfyui_version: ue.value,
          torch_backend: q.value,
          switch_after: N.value,
          workspace_path: pe.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(we)).status === "started") {
          Le.value = 0, _e.value = Date.now();
          const Ke = setInterval(async () => {
            if (_e.value && Date.now() - _e.value > Ai) {
              clearInterval(Ke), J.value = !1, j.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ne = await d();
              if (Le.value = 0, Ne.state === "idle" && J.value) {
                clearInterval(Ke), J.value = !1, j.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (le.value = {
                progress: Ne.progress ?? 0,
                message: Ne.message,
                phase: Ne.phase
              }, Ne.state === "complete") {
                clearInterval(Ke), J.value = !1;
                const Xe = Ne.environment_name || we.name;
                N.value ? a("complete", Xe, pe.value) : (g.value = "landing", a("environment-created-no-switch", Xe));
              } else Ne.state === "error" && (clearInterval(Ke), J.value = !1, j.value = Ne.error || "Environment creation failed");
            } catch (Ne) {
              Le.value++, console.warn(`Polling failure ${Le.value}/${Sn}:`, Ne), Le.value >= Sn && (clearInterval(Ke), J.value = !1, j.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (we) {
        J.value = !1, j.value = we instanceof Error ? we.message : "Unknown error";
      }
    }
    async function Ce() {
      re.value = !0;
      try {
        ne.value = await v();
      } catch (we) {
        console.error("Failed to load ComfyUI releases:", we);
      } finally {
        re.value = !1;
      }
    }
    function Oe() {
      w.value && a("switch-environment", w.value, pe.value);
    }
    function ee() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && n.setupState === "no_workspace" && (p.value = 1);
    }
    function V(we, se) {
      $.value = !1, se ? a("complete", we, pe.value) : (a("environment-created-no-switch", we), g.value = "landing");
    }
    function de() {
    }
    dt(async () => {
      if (n.detectedModelsDir && (U.value = n.detectedModelsDir), n.workspacePath && (pe.value = n.workspacePath), p.value === 2) {
        Ce();
        const we = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await We(), clearTimeout(we), I.value = !1;
      }
    });
    async function We() {
      try {
        const we = await d();
        if (console.log("[ComfyGit] Create progress check:", we.state, we), we.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", we.environment_name), g.value = "create", J.value = !0, ae.value = we.environment_name || "my-new-env", le.value = {
            progress: we.progress ?? 0,
            message: we.message,
            phase: we.phase
          }, Be();
          return;
        }
      } catch (we) {
        console.log("[ComfyGit] Create progress check failed:", we);
      }
      try {
        const we = await f();
        console.log("[ComfyGit] Import progress check:", we.state, we), we.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", we.environment_name), T.value = {
          message: we.message || "Importing...",
          phase: we.phase || "",
          progress: we.progress ?? 0,
          environmentName: we.environment_name || ""
        }, x.value = !0, g.value = "import", $.value = !0);
      } catch (we) {
        console.log("[ComfyGit] Import progress check failed:", we);
      }
    }
    async function Be() {
      Le.value = 0, _e.value = Date.now();
      let we = null;
      const se = async () => {
        if (_e.value && Date.now() - _e.value > Ai)
          return we && clearInterval(we), J.value = !1, j.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ne = await d();
          if (Le.value = 0, Ne.state === "idle" && J.value)
            return we && clearInterval(we), J.value = !1, j.value = "Environment creation was interrupted. Please try again.", !1;
          if (le.value = {
            progress: Ne.progress ?? 0,
            message: Ne.message,
            phase: Ne.phase
          }, Ne.state === "complete") {
            we && clearInterval(we), J.value = !1;
            const Xe = Ne.environment_name || ae.value;
            return a("complete", Xe, pe.value), !1;
          } else if (Ne.state === "error")
            return we && clearInterval(we), J.value = !1, j.value = Ne.error || "Environment creation failed", !1;
          return !0;
        } catch (Ne) {
          return Le.value++, console.warn(`Polling failure ${Le.value}/${Sn}:`, Ne), Le.value >= Sn ? (we && clearInterval(we), J.value = !1, j.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await se() && (we = setInterval(async () => {
        !await se() && we && clearInterval(we);
      }, 2e3));
    }
    return (we, se) => (o(), i(W, null, [
      b(Pt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: se[15] || (se[15] = (Ke) => we.$emit("close"))
      }, {
        header: h(() => [
          se[20] || (se[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", WT, [
            b(Nc),
            se[19] || (se[19] = s("span", { class: "header-divider" }, null, -1)),
            ke.value ? (o(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: se[0] || (se[0] = (Ke) => k.value = !0)
            }, [...se[17] || (se[17] = [
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
              onClick: se[1] || (se[1] = (Ke) => we.$emit("close")),
              title: "Close"
            }, [...se[18] || (se[18] = [
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
          var Ke;
          return [
            p.value === 1 ? (o(), i("div", GT, [
              se[24] || (se[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", jT, [
                se[21] || (se[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Ft(s("input", {
                  "onUpdate:modelValue": se[2] || (se[2] = (Ne) => P.value = Ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, HT), [
                  [go, P.value]
                ]),
                B.value ? (o(), i("p", qT, m(B.value), 1)) : y("", !0)
              ]),
              s("div", KT, [
                s("label", JT, [
                  Ft(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": se[3] || (se[3] = (Ne) => O.value = Ne)
                  }, null, 512), [
                    [la, O.value]
                  ]),
                  se[22] || (se[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              O.value ? (o(), i("div", QT, [
                se[23] || (se[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Ft(s("input", {
                  "onUpdate:modelValue": se[4] || (se[4] = (Ne) => U.value = Ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, YT), [
                  [go, U.value]
                ]),
                e.detectedModelsDir && !U.value ? (o(), i("p", XT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                A.value ? (o(), i("p", ZT, " Did you mean: " + m(A.value), 1)) : y("", !0),
                R.value ? (o(), i("p", eM, m(R.value), 1)) : y("", !0),
                Q.value !== null && !R.value ? (o(), i("p", tM, " Found " + m(Q.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              me.value ? (o(), D(ia, {
                key: 1,
                progress: te.value.progress,
                message: te.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (o(), i("div", sM, [
              I.value ? (o(), i("div", nM, [...se[25] || (se[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (o(), i(W, { key: 1 }, [
                !n.cliInstalled && !S.value ? (o(), i("div", oM, [
                  s("div", aM, [
                    se[27] || (se[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    se[28] || (se[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: se[5] || (se[5] = (Ne) => S.value = !0),
                      title: "Dismiss"
                    }, [...se[26] || (se[26] = [
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
                  se[29] || (se[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  se[30] || (se[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (o(), i("div", lM, [
                  se[34] || (se[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: se[6] || (se[6] = (Ne) => g.value = "create")
                  }, [...se[31] || (se[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: se[7] || (se[7] = (Ne) => {
                      x.value = !1, g.value = "import";
                    })
                  }, [...se[32] || (se[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ke = n.existingEnvironments) != null && Ke.length ? (o(), i(W, { key: 0 }, [
                    se[33] || (se[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", iM, [
                      (o(!0), i(W, null, he(n.existingEnvironments, (Ne) => (o(), i("label", {
                        key: Ne,
                        class: Ve(["env-option", { selected: w.value === Ne }])
                      }, [
                        Ft(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ne,
                          "onUpdate:modelValue": se[8] || (se[8] = (Xe) => w.value = Xe)
                        }, null, 8, rM), [
                          [qo, w.value]
                        ]),
                        s("span", cM, m(Ne), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (o(), i("div", uM, [
                  J.value ? (o(), i("div", bM, [
                    s("p", $M, [
                      se[41] || (se[41] = C(" Creating environment ", -1)),
                      s("strong", null, m(ae.value), 1),
                      se[42] || (se[42] = C("... ", -1))
                    ]),
                    b(ia, {
                      progress: le.value.progress,
                      message: le.value.message,
                      "current-phase": le.value.phase,
                      "show-steps": !0,
                      steps: xe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    se[43] || (se[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (o(), i(W, { key: 0 }, [
                    se[40] || (se[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", dM, [
                      se[35] || (se[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Ft(s("input", {
                        "onUpdate:modelValue": se[9] || (se[9] = (Ne) => ae.value = Ne),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [go, ae.value]
                      ])
                    ]),
                    s("div", mM, [
                      se[36] || (se[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Ft(s("select", {
                        "onUpdate:modelValue": se[10] || (se[10] = (Ne) => H.value = Ne),
                        class: "form-select"
                      }, [
                        (o(!0), i(W, null, he(it(Cc), (Ne) => (o(), i("option", {
                          key: Ne,
                          value: Ne
                        }, m(Ne), 9, fM))), 128))
                      ], 512), [
                        [Un, H.value]
                      ])
                    ]),
                    s("div", vM, [
                      se[37] || (se[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ft(s("select", {
                        "onUpdate:modelValue": se[11] || (se[11] = (Ne) => ue.value = Ne),
                        class: "form-select",
                        disabled: re.value
                      }, [
                        (o(!0), i(W, null, he(ne.value, (Ne) => (o(), i("option", {
                          key: Ne.tag_name,
                          value: Ne.tag_name
                        }, m(Ne.name), 9, gM))), 128))
                      ], 8, pM), [
                        [Un, ue.value]
                      ])
                    ]),
                    s("div", hM, [
                      se[38] || (se[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ft(s("select", {
                        "onUpdate:modelValue": se[12] || (se[12] = (Ne) => q.value = Ne),
                        class: "form-select"
                      }, [
                        (o(!0), i(W, null, he(it(Al), (Ne) => (o(), i("option", {
                          key: Ne,
                          value: Ne
                        }, m(Ne) + m(Ne === "auto" ? " (detect GPU)" : ""), 9, yM))), 128))
                      ], 512), [
                        [Un, q.value]
                      ])
                    ]),
                    s("div", wM, [
                      s("label", _M, [
                        Ft(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": se[13] || (se[13] = (Ne) => N.value = Ne)
                        }, null, 512), [
                          [la, N.value]
                        ]),
                        se[39] || (se[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    j.value ? (o(), i("div", kM, m(j.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (o(), i("div", CM, [
                  b(Tc, {
                    "workspace-path": pe.value,
                    "resume-import": x.value,
                    "initial-progress": T.value ?? void 0,
                    onImportComplete: V,
                    onImportStarted: se[14] || (se[14] = (Ne) => $.value = !0),
                    onSourceCleared: de
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", xM, [
            b(Uc),
            s("div", SM, [
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
                !J.value && !$.value && (g.value !== "landing" || n.setupState === "no_workspace" && !pe.value) ? (o(), D(Ue, {
                  key: 0,
                  variant: "secondary",
                  onClick: ee
                }, {
                  default: h(() => [...se[44] || (se[44] = [
                    C(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (o(), D(Ue, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || J.value,
                  onClick: $e
                }, {
                  default: h(() => [
                    C(m(J.value ? "Creating..." : N.value ? "Create & Switch" : "Create Environment"), 1)
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
      k.value ? (o(), D(VT, {
        key: 0,
        "workspace-path": E.value,
        onClose: se[16] || (se[16] = (Ke) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), TM = /* @__PURE__ */ Te(EM, [["__scopeId", "data-v-9a9aadc0"]]), MM = { class: "update-banner" }, PM = { class: "update-banner__left" }, RM = { class: "update-banner__title" }, DM = {
  key: 0,
  class: "update-banner__summary"
}, LM = { class: "update-banner__actions" }, NM = ["disabled"], UM = ["disabled"], OM = ["disabled"], AM = /* @__PURE__ */ Ie({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", MM, [
      s("div", PM, [
        s("div", RM, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (o(), i("div", DM, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", LM, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => n("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, NM),
        e.info.release_url ? (o(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => n("release-notes"))
        }, " Release notes ", 8, UM)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => n("dismiss"))
        }, " Dismiss ", 8, OM)
      ])
    ]));
  }
}), zM = /* @__PURE__ */ Te(AM, [["__scopeId", "data-v-49562c5c"]]), Oc = "ComfyGit.UpdateNotice.DismissedVersion";
function FM() {
  try {
    return localStorage.getItem(Oc);
  } catch {
    return null;
  }
}
function BM(e) {
  try {
    localStorage.setItem(Oc, e);
  } catch {
  }
}
function VM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : FM() !== e.latest_version;
}
const WM = { class: "comfygit-panel" }, GM = { class: "panel-header" }, jM = { class: "header-left" }, HM = {
  key: 0,
  class: "header-info"
}, qM = { class: "header-actions" }, KM = { class: "env-switcher" }, JM = { class: "env-switcher-header" }, QM = { class: "env-control-buttons" }, YM = {
  key: 0,
  class: "header-info"
}, XM = { class: "branch-name" }, ZM = { class: "panel-main" }, eP = { class: "sidebar" }, tP = { class: "sidebar-content" }, sP = { class: "sidebar-section" }, nP = { class: "sidebar-section" }, oP = { class: "sidebar-section" }, aP = { class: "sidebar-footer" }, lP = { class: "content-area" }, iP = {
  key: 0,
  class: "error-message"
}, rP = {
  key: 1,
  class: "loading"
}, cP = { class: "dialog-content env-selector-dialog" }, uP = { class: "dialog-header" }, dP = { class: "dialog-body" }, mP = { class: "env-list" }, fP = { class: "env-info" }, vP = { class: "env-name-row" }, pP = { class: "env-indicator" }, gP = { class: "env-name" }, hP = {
  key: 0,
  class: "env-branch"
}, yP = {
  key: 1,
  class: "current-label"
}, wP = { class: "env-stats" }, _P = ["onClick"], kP = { class: "toast-container" }, bP = { class: "toast-message" }, zi = "ComfyGit.LastView", Fi = "ComfyGit.LastSection", Bi = 50, $P = /* @__PURE__ */ Ie({
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
    } = ft(), O = ey(), U = _(null), B = _([]), R = _(!1), A = _(!1), Q = _([]), ae = _([]), H = M(() => ae.value.find((oe) => oe.is_current)), ue = _(null), q = _(!1), N = _(!1), j = _("remotes");
    function pe(oe) {
      return oe ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[oe] ?? "manifest" : "manifest";
    }
    const ne = _(pe(n.initialView)), re = _(null), me = _(!1), J = _(1), te = M(() => {
      var oe;
      return ((oe = re.value) == null ? void 0 : oe.state) || "managed";
    }), le = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, xe = M(() => {
      var oe, G;
      return ((G = (oe = re.value) == null ? void 0 : oe.runtime_context) == null ? void 0 : G.capabilities) || le;
    }), ye = _(!1), Fe = _(null), Le = _(null), _e = _(!1), Pe = _(null), ge = _(!1), ke = _(!1), E = M(() => !ge.value && VM(Pe.value)), F = _(null), ie = _(null), Ee = _(null), $e = _(!1), Ce = _(!1), Oe = _(""), ee = _(null), V = _({ state: "idle", progress: 0, message: "" });
    let de = null, We = null;
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
    }, we = n.initialView ? Be[n.initialView] : null, se = [
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
    function Ne() {
      try {
        const oe = sessionStorage.getItem(zi), G = sessionStorage.getItem(Fi), qe = oe === "branches" || oe === "history" || oe === "remotes" ? "version-control" : oe === "manifest" || oe === "debug-env" || oe === "debug-workspace" ? "diagnostics" : oe, nt = G === "all-envs" ? "workspace" : G === "sharing" ? "version-control" : G;
        if (oe && G && se.includes(qe) && Ke.includes(nt))
          return { view: qe, section: nt };
      } catch {
      }
      return null;
    }
    const Xe = Ne(), De = _((we == null ? void 0 : we.view) ?? (Xe == null ? void 0 : Xe.view) ?? "status"), Ae = _((we == null ? void 0 : we.section) ?? (Xe == null ? void 0 : Xe.section) ?? "this-env");
    function He(oe, G) {
      De.value = oe, Ae.value = G;
      try {
        sessionStorage.setItem(zi, oe), sessionStorage.setItem(Fi, G);
      } catch {
      }
    }
    function kt(oe) {
      const qe = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[oe];
      qe && He(qe.view, qe.section);
    }
    function Ut(oe) {
      j.value = oe, He("version-control", "version-control");
    }
    function Gt(oe) {
      ne.value = oe, He("diagnostics", "diagnostics");
    }
    function X() {
      Ut("branches");
    }
    function Z() {
      a("close"), setTimeout(async () => {
        await ve("Comfy.OpenManagerDialog") || await ve("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Qe(["Extensions", "Manage extensions"]) || Qe(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function ve(oe) {
      var nt, yt;
      const G = window.app, qe = [
        (nt = G == null ? void 0 : G.extensionManager) == null ? void 0 : nt.command,
        (yt = G == null ? void 0 : G.extensionManager) == null ? void 0 : yt.commands,
        G == null ? void 0 : G.command,
        G == null ? void 0 : G.commands
      ];
      for (const It of qe)
        if (typeof (It == null ? void 0 : It.execute) == "function")
          try {
            return await It.execute(oe), !0;
          } catch (jt) {
            console.debug(`[ComfyGit] Command ${oe} did not open Extensions manager`, jt);
          }
      return !1;
    }
    function Qe(oe) {
      var nt, yt, It;
      const G = oe.map((jt) => jt.toLowerCase()), qe = document.querySelectorAll('button, [role="button"]');
      for (const jt of qe) {
        const z = jt;
        if ([
          (nt = z.textContent) == null ? void 0 : nt.trim(),
          (yt = z.getAttribute("title")) == null ? void 0 : yt.trim(),
          (It = z.getAttribute("aria-label")) == null ? void 0 : It.trim()
        ].filter(Boolean).map((je) => je.toLowerCase()).some((je) => G.includes(je)))
          return z.click(), !0;
      }
      return !1;
    }
    const Re = _(null), lt = _(!1), et = _(!1), pt = _([]);
    let Rt = 0;
    function Ye(oe, G = "info", qe = 3e3) {
      const nt = ++Rt;
      return pt.value.push({ id: nt, message: oe, type: G }), qe > 0 && setTimeout(() => {
        pt.value = pt.value.filter((yt) => yt.id !== nt);
      }, qe), nt;
    }
    function Ct(oe) {
      pt.value = pt.value.filter((G) => G.id !== oe);
    }
    function Xt(oe, G) {
      Ye(oe, G);
    }
    async function as() {
      Pe.value = null, ge.value = !1;
      try {
        Pe.value = await I();
      } catch {
      }
    }
    function K() {
      var G;
      const oe = (G = Pe.value) == null ? void 0 : G.release_url;
      if (oe)
        try {
          window.open(oe, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function fe() {
      var G;
      const oe = (G = Pe.value) == null ? void 0 : G.latest_version;
      oe && BM(oe), ge.value = !0;
    }
    async function ze() {
      if (ke.value) return;
      ke.value = !0;
      const oe = Ye("Updating comfygit-manager...", "info", 0);
      try {
        const G = await P();
        if (Ct(oe), G.status !== "success") {
          if (Ye(G.message || "Update failed", "error"), G.manual_instructions) {
            const qe = G.manual_instructions.split(`
`).map((nt) => nt.trim()).filter(Boolean);
            Re.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: qe,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                Re.value = null;
              }
            };
          }
          return;
        }
        if (Ye(G.message || "Update complete", "success"), fe(), G.restart_required) {
          mt();
          try {
            await Js("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (G) {
        Ct(oe);
        const qe = G instanceof Error ? G.message : "Update failed";
        Ye(qe, "error");
      } finally {
        ke.value = !1;
      }
    }
    const be = M(() => {
      if (!U.value) return "neutral";
      const oe = U.value.workflows, G = oe.new.length > 0 || oe.modified.length > 0 || oe.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? G ? "warning" : "success" : "error";
    });
    M(() => U.value ? be.value === "success" ? "All synced" : be.value === "warning" ? "Uncommitted changes" : be.value === "error" ? "Not synced" : "" : "");
    async function Ge(oe = {}) {
      ye.value = !0, Fe.value = null;
      try {
        const [G, qe, nt, yt] = await Promise.all([
          l(!0),
          r(Bi),
          c(),
          w()
        ]);
        U.value = G, B.value = qe.commits, R.value = qe.has_more, Q.value = nt.branches, ae.value = yt, a("statusUpdate", G), (oe.refreshWorkflows ?? !0) && F.value && await F.value.loadWorkflows(!0);
      } catch (G) {
        Fe.value = G instanceof Error ? G.message : "Failed to load status", U.value = null, B.value = [], R.value = !1, Q.value = [];
      } finally {
        ye.value = !1;
      }
    }
    async function Ze() {
      if (!(A.value || !R.value)) {
        A.value = !0;
        try {
          const oe = await r(Bi, B.value.length);
          B.value = [...B.value, ...oe.commits], R.value = oe.has_more;
        } catch (oe) {
          Ye(oe instanceof Error ? oe.message : "Failed to load more commits", "error");
        } finally {
          A.value = !1;
        }
      }
    }
    function ct(oe) {
      Le.value = oe;
    }
    function ut() {
      return U.value ? U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes : !1;
    }
    async function St(oe) {
      var qe;
      Le.value = null;
      const G = ut();
      Re.value = {
        title: G ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: G ? "You have uncommitted changes that will be lost." : `Checkout commit ${oe.short_hash || ((qe = oe.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: G ? Jn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: G,
        onConfirm: async () => {
          var It;
          Re.value = null, mt();
          const nt = Ye(`Checking out ${oe.short_hash || ((It = oe.hash) == null ? void 0 : It.slice(0, 7))}...`, "info", 0), yt = await u(oe.hash, G);
          Ct(nt), yt.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(yt.message || "Checkout failed", "error");
        }
      };
    }
    async function Y(oe) {
      const G = ut();
      Re.value = {
        title: G ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: G ? "You have uncommitted changes." : `Switch to branch "${oe}"?`,
        details: G ? Jn() : void 0,
        warning: G ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Re.value = null, mt();
          const qe = Ye(`Switching to ${oe}...`, "info", 0), nt = await f(oe, G);
          Ct(qe), nt.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(nt.message || "Branch switch failed", "error");
        }
      };
    }
    async function L() {
      if (!ut()) {
        Ye("No uncommitted changes to revert", "info");
        return;
      }
      Re.value = {
        title: "Revert Uncommitted Changes",
        message: "Discard all uncommitted changes on the current branch?",
        details: Jn(),
        warning: "This permanently discards uncommitted workflow and manifest changes, then restarts ComfyUI from the current HEAD.",
        confirmLabel: "Revert Changes",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Re.value = null, mt();
          const oe = Ye("Reverting uncommitted changes...", "info", 0), G = await v();
          Ct(oe), G.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(G.message || "Revert failed", "error");
        }
      };
    }
    async function ce(oe) {
      const G = Ye(`Creating branch ${oe}...`, "info", 0), qe = await d(oe);
      Ct(G), qe.status === "success" ? (Ye(`Branch "${oe}" created`, "success"), await Ge()) : Ye(qe.message || "Failed to create branch", "error");
    }
    async function Je(oe, G = !1) {
      const qe = async (nt) => {
        var It;
        const yt = Ye(`Deleting branch ${oe}...`, "info", 0);
        try {
          const jt = await p(oe, nt);
          Ct(yt), jt.status === "success" ? (Ye(`Branch "${oe}" deleted`, "success"), await Ge()) : (It = jt.message) != null && It.includes("not fully merged") ? Re.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Re.value = null, await qe(!0);
            }
          } : Ye(jt.message || "Failed to delete branch", "error");
        } catch (jt) {
          Ct(yt);
          const z = jt instanceof Error ? jt.message : "Failed to delete branch";
          z.includes("not fully merged") ? Re.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Re.value = null, await qe(!0);
            }
          } : Ye(z, "error");
        }
      };
      Re.value = {
        title: "Delete Branch",
        message: `Delete branch "${oe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Re.value = null, await qe(G);
        }
      };
    }
    async function tt(oe) {
      Le.value = null;
      const G = prompt("Enter branch name:");
      if (G) {
        const qe = Ye(`Creating branch ${G}...`, "info", 0), nt = await d(G, oe.hash);
        Ct(qe), nt.status === "success" ? (Ye(`Branch "${G}" created from ${oe.short_hash}`, "success"), await Ge()) : Ye(nt.message || "Failed to create branch", "error");
      }
    }
    function mt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function At() {
      if (!xe.value.can_restart_current) {
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
          Re.value = null, mt(), Ye("Restarting environment...", "info");
          try {
            await Js("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function $s() {
      if (!xe.value.can_stop_current) {
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
            await Js("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Zt(oe, G) {
      if (!xe.value.can_switch_environment) {
        Ye("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      _e.value = !1, Oe.value = oe, ee.value = G || null, $e.value = !0;
    }
    async function gt() {
      $e.value = !1, Ce.value = !0, mt(), V.value = {
        progress: 10,
        state: Cs(10),
        message: Lt(10)
      };
      try {
        await g(Oe.value, ee.value || void 0), qn(), $n();
      } catch (oe) {
        Vt(), Ce.value = !1, Ye(`Failed to initiate switch: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error"), V.value = { state: "idle", progress: 0, message: "" }, ee.value = null;
      }
    }
    function Cs(oe) {
      return oe >= 100 ? "complete" : oe >= 80 ? "validating" : oe >= 60 ? "starting" : oe >= 30 ? "syncing" : "preparing";
    }
    function Lt(oe) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Cs(oe)] || "";
    }
    function qn() {
      if (We) return;
      let oe = 10;
      const G = 60, qe = 5e3, nt = 100, yt = (G - oe) / (qe / nt);
      We = window.setInterval(() => {
        if (oe += yt, oe >= G && (oe = G, Vt()), V.value.progress < G) {
          const It = Math.floor(oe);
          V.value = {
            progress: It,
            state: Cs(It),
            message: Lt(It)
          };
        }
      }, nt);
    }
    function Vt() {
      We && (clearInterval(We), We = null);
    }
    function $n() {
      de || (de = window.setInterval(async () => {
        try {
          let oe = await O.getStatus();
          if ((!oe || oe.state === "idle") && (oe = await k()), !oe)
            return;
          const G = oe.progress || 0;
          G >= 60 && Vt();
          const qe = Math.max(G, V.value.progress), nt = oe.state && oe.state !== "idle" && oe.state !== "unknown", yt = nt ? oe.state : Cs(qe), It = nt && oe.message || Lt(qe);
          V.value = {
            state: yt,
            progress: qe,
            message: It
          }, oe.state === "complete" ? (Vt(), Kn(), Ce.value = !1, Ye(`✓ Switched to ${Oe.value}`, "success"), await Ge(), Oe.value = "") : oe.state === "rolled_back" ? (Vt(), Kn(), Ce.value = !1, Ye("Switch failed, restored previous environment", "warning"), Oe.value = "") : oe.state === "critical_failure" && (Vt(), Kn(), Ce.value = !1, Ye(`Critical error during switch: ${oe.message}`, "error"), Oe.value = "");
        } catch (oe) {
          console.error("Failed to poll switch progress:", oe);
        }
      }, 1e3));
    }
    function Kn() {
      Vt(), de && (clearInterval(de), de = null);
    }
    function ba() {
      var oe;
      $e.value = !1, Oe.value = "", (oe = re.value) != null && oe.state && re.value.state !== "managed" && (J.value = re.value.state === "no_workspace" ? 1 : 2, me.value = !0);
    }
    async function $a(oe) {
      lt.value = !1, await Ge(), Ye(oe.message, oe.success ? "success" : "error");
    }
    async function Ca() {
      et.value = !1;
      const oe = Ye("Syncing environment...", "info", 0);
      try {
        const G = await S("skip", !0);
        if (Ct(oe), G.status === "success") {
          const qe = [];
          G.nodes_installed.length && qe.push(`${G.nodes_installed.length} installed`), G.nodes_removed.length && qe.push(`${G.nodes_removed.length} removed`);
          const nt = qe.length ? `: ${qe.join(", ")}` : "";
          Ye(`✓ Environment synced${nt}`, "success"), await Ge();
        } else {
          const qe = G.errors.length ? G.errors.join("; ") : G.message;
          Ye(`Sync failed: ${qe}`, "error");
        }
      } catch (G) {
        Ct(oe), Ye(`Sync error: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
      }
    }
    async function xa(oe) {
      var G;
      try {
        const qe = await x(oe);
        qe.failed.length === 0 ? Ye(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Ye(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await Ge();
      } catch (qe) {
        Ye(`Repair failed: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
      } finally {
        (G = Ee.value) == null || G.resetRepairingState();
      }
    }
    async function Ro() {
      var G, qe;
      const oe = Ye("Repairing environment...", "info", 0);
      try {
        const nt = await S("skip", !0);
        if (Ct(oe), nt.status === "success") {
          const yt = [];
          nt.nodes_installed.length && yt.push(`${nt.nodes_installed.length} installed`), nt.nodes_removed.length && yt.push(`${nt.nodes_removed.length} removed`);
          const It = yt.length ? `: ${yt.join(", ")}` : "";
          Ye(`✓ Environment repaired${It}`, "success"), (G = Ee.value) == null || G.closeDetailModal(), await Ge();
        } else {
          const yt = nt.errors.length ? nt.errors.join(", ") : nt.message || "Unknown error";
          Ye(`Repair failed: ${yt}`, "error");
        }
      } catch (nt) {
        Ct(oe), Ye(`Repair error: ${nt instanceof Error ? nt.message : "Unknown error"}`, "error");
      } finally {
        (qe = Ee.value) == null || qe.resetRepairingEnvironmentState();
      }
    }
    async function Sa(oe, G) {
      Ye(`Environment '${oe}' created`, "success"), await Ge(), ie.value && await ie.value.loadEnvironments(), G && xe.value.can_switch_environment && await Zt(oe);
    }
    async function Ia(oe) {
      var G;
      if (!xe.value.can_delete_environment) {
        Ye("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((G = H.value) == null ? void 0 : G.name) === oe) {
        Ye("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Re.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${oe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Re.value = null;
          try {
            const qe = await $(oe);
            qe.status === "success" ? (Ye(`Environment "${oe}" deleted`, "success"), await Ge(), ie.value && await ie.value.loadEnvironments()) : Ye(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Ye(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ea(oe, G) {
      me.value = !1;
      try {
        re.value = await T();
      } catch {
      }
      xe.value.can_switch_environment && await Zt(oe, G);
    }
    function Ta() {
      me.value = !1, a("close");
    }
    async function Ma(oe, G) {
      await Zt(oe, G);
    }
    async function Pa(oe) {
      q.value = !1, await Ge(), await Zt(oe);
    }
    function Ra() {
      ue.value = null, q.value = !0;
    }
    function Da(oe) {
      ue.value = oe, N.value = !0;
    }
    function Do() {
      N.value = !1, ue.value = null;
    }
    async function La(oe) {
      re.value = await T(), console.log(`Environment '${oe}' created. Available for switching.`);
    }
    function Na() {
      if (!xe.value.can_create_environment) {
        Ye("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      He("environments", "workspace"), setTimeout(() => {
        var oe;
        (oe = ie.value) == null || oe.openCreateModal();
      }, 100);
    }
    function Jn() {
      if (!U.value) return [];
      const oe = [], G = U.value.workflows;
      return G.new.length && oe.push(`${G.new.length} new workflow(s)`), G.modified.length && oe.push(`${G.modified.length} modified workflow(s)`), G.deleted.length && oe.push(`${G.deleted.length} deleted workflow(s)`), U.value.has_changes && oe.length === 0 && oe.push("manifest or environment metadata changes"), oe;
    }
    return dt(async () => {
      try {
        if (re.value = await T(), re.value.state === "no_workspace" && xe.value.can_initialize_workspace) {
          me.value = !0, J.value = 1;
          return;
        }
        if (re.value.state === "empty_workspace" && xe.value.can_create_environment) {
          me.value = !0, J.value = 2;
          return;
        }
        if (re.value.state === "unmanaged" && xe.value.can_switch_environment) {
          me.value = !0, J.value = 2;
          return;
        }
      } catch (oe) {
        console.warn("Setup status check failed, proceeding normally:", oe);
      }
      await Promise.all([
        Ge({ refreshWorkflows: !1 }),
        as()
      ]);
    }), (oe, G) => {
      var qe, nt, yt, It, jt, z, Se, je, wt, zt, Ps, fs, Ht;
      return o(), i("div", WM, [
        s("div", GM, [
          s("div", jM, [
            G[27] || (G[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (o(), i("div", HM)) : y("", !0)
          ]),
          s("div", qM, [
            b(Nc),
            G[30] || (G[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ve(["icon-btn", { spinning: ye.value }]),
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
        E.value && Pe.value ? (o(), D(zM, {
          key: 0,
          info: Pe.value,
          updating: ke.value,
          onUpdate: ze,
          onDismiss: fe,
          onReleaseNotes: K
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", KM, [
          s("div", JM, [
            G[31] || (G[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", QM, [
              xe.value.can_restart_current ? (o(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: At
              }, " Restart ")) : y("", !0),
              xe.value.can_stop_current ? (o(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: $s
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: G[1] || (G[1] = (ot) => He("environments", "workspace"))
          }, [
            U.value ? (o(), i("div", YM, [
              s("span", null, m(((qe = H.value) == null ? void 0 : qe.name) || ((nt = U.value) == null ? void 0 : nt.environment) || "Loading..."), 1),
              s("span", XM, "(" + m(U.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            G[32] || (G[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", ZM, [
          s("div", eP, [
            s("div", tP, [
              s("div", sP, [
                G[33] || (G[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "status" && Ae.value === "this-env" }]),
                  onClick: G[2] || (G[2] = (ot) => He("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "workflows" }]),
                  onClick: G[3] || (G[3] = (ot) => He("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "models-env" }]),
                  onClick: G[4] || (G[4] = (ot) => He("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "nodes" }]),
                  onClick: G[5] || (G[5] = (ot) => He("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "version-control" }]),
                  onClick: G[6] || (G[6] = (ot) => Ut("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              G[36] || (G[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", nP, [
                G[34] || (G[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "environments" }]),
                  onClick: G[7] || (G[7] = (ot) => He("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "model-index" }]),
                  onClick: G[8] || (G[8] = (ot) => He("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "settings" }]),
                  onClick: G[9] || (G[9] = (ot) => He("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              G[37] || (G[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", oP, [
                G[35] || (G[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "diagnostics" && ne.value === "manifest" }]),
                  onClick: G[10] || (G[10] = (ot) => Gt("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: De.value === "diagnostics" && ne.value !== "manifest" }]),
                  onClick: G[11] || (G[11] = (ot) => Gt("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", aP, [
              b(Uc)
            ])
          ]),
          s("div", lP, [
            Fe.value ? (o(), i("div", iP, m(Fe.value), 1)) : !U.value && De.value === "status" ? (o(), i("div", rP, " Loading status... ")) : (o(), i(W, { key: 2 }, [
              De.value === "status" ? (o(), D(Zh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: Ee,
                status: U.value,
                "setup-state": te.value,
                onSwitchBranch: X,
                onCommitChanges: G[12] || (G[12] = (ot) => lt.value = !0),
                onSyncEnvironment: G[13] || (G[13] = (ot) => et.value = !0),
                onViewWorkflows: G[14] || (G[14] = (ot) => He("workflows", "this-env")),
                onViewHistory: G[15] || (G[15] = (ot) => Ut("history")),
                onViewDebug: G[16] || (G[16] = (ot) => Gt("env")),
                onViewNodes: G[17] || (G[17] = (ot) => He("nodes", "this-env")),
                onRepairMissingModels: xa,
                onRepairEnvironment: Ro,
                onStartSetup: G[18] || (G[18] = (ot) => me.value = !0),
                onViewEnvironments: G[19] || (G[19] = (ot) => He("environments", "workspace")),
                onCreateEnvironment: Na,
                onRefreshStatus: Ge
              }, null, 8, ["status", "setup-state"])) : De.value === "workflows" ? (o(), D(x2, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: F,
                onRefresh: Ge
              }, null, 512)) : De.value === "models-env" ? (o(), D(P$, {
                key: 2,
                onNavigate: kt
              })) : De.value === "version-control" ? (o(), D(A6, {
                key: 3,
                commits: B.value,
                "history-has-more": R.value,
                "is-loading-history-more": A.value,
                "current-ref": (yt = U.value) == null ? void 0 : yt.branch,
                branches: Q.value,
                current: ((It = U.value) == null ? void 0 : It.branch) || null,
                "initial-tab": j.value,
                onSelect: ct,
                onCheckout: St,
                onLoadMoreHistory: Ze,
                onSwitch: Y,
                onCreate: ce,
                onDelete: Je,
                onRevertCurrent: L,
                onToast: Xt
              }, null, 8, ["commits", "history-has-more", "is-loading-history-more", "current-ref", "branches", "current", "initial-tab"])) : De.value === "nodes" ? (o(), D($C, {
                key: 4,
                "version-mismatches": ((z = (jt = U.value) == null ? void 0 : jt.comparison) == null ? void 0 : z.version_mismatches) || [],
                onOpenNodeManager: Z,
                onRepairEnvironment: Ro,
                onToast: Xt
              }, null, 8, ["version-mismatches"])) : De.value === "diagnostics" ? (o(), D(X6, {
                key: 5,
                "initial-tab": ne.value
              }, null, 8, ["initial-tab"])) : De.value === "environments" ? (o(), D(b3, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ie,
                "can-create": xe.value.can_create_environment,
                "can-switch": xe.value.can_switch_environment,
                "can-delete": xe.value.can_delete_environment,
                onSwitch: Zt,
                onCreated: Sa,
                onDelete: Ia,
                onImport: Ra,
                onExport: Da
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : De.value === "model-index" ? (o(), D(V$, {
                key: 7,
                onRefresh: Ge
              })) : De.value === "settings" ? (o(), D(QC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Le.value ? (o(), D(gE, {
          key: 1,
          commit: Le.value,
          onClose: G[20] || (G[20] = (ot) => Le.value = null),
          onCheckout: St,
          onCreateBranch: tt
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
        q.value ? (o(), D(Pt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: G[22] || (G[22] = (ot) => q.value = !1)
        }, {
          body: h(() => [
            b(i5, {
              embedded: "",
              onImportCompleteSwitch: Pa
            })
          ]),
          _: 1
        })) : y("", !0),
        N.value ? (o(), D(Pt, {
          key: 4,
          title: ue.value ? `EXPORT ENVIRONMENT: ${ue.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Do
        }, {
          body: h(() => [
            b(mS, {
              embedded: "",
              "environment-name": ue.value,
              onClose: Do
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(aT, {
          show: $e.value,
          "from-environment": ((Se = H.value) == null ? void 0 : Se.name) || "unknown",
          "to-environment": Oe.value,
          onConfirm: gt,
          onClose: ba
        }, null, 8, ["show", "from-environment", "to-environment"]),
        lt.value && U.value ? (o(), D(Lc, {
          key: 5,
          status: U.value,
          "as-modal": !0,
          onClose: G[23] || (G[23] = (ot) => lt.value = !1),
          onCommitted: $a
        }, null, 8, ["status"])) : y("", !0),
        et.value && U.value ? (o(), D(xT, {
          key: 6,
          show: et.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: Ca,
          onClose: G[24] || (G[24] = (ot) => et.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(gT, {
          show: Ce.value,
          state: V.value.state,
          progress: V.value.progress,
          message: V.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        _e.value ? (o(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: G[26] || (G[26] = $t((ot) => _e.value = !1, ["self"]))
        }, [
          s("div", cP, [
            s("div", uP, [
              G[39] || (G[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: G[25] || (G[25] = (ot) => _e.value = !1)
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
            s("div", dP, [
              G[40] || (G[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", mP, [
                (o(!0), i(W, null, he(ae.value, (ot) => (o(), i("div", {
                  key: ot.name,
                  class: Ve(["env-item", { current: ot.is_current }])
                }, [
                  s("div", fP, [
                    s("div", vP, [
                      s("span", pP, m(ot.is_current ? "●" : "○"), 1),
                      s("span", gP, m(ot.name), 1),
                      ot.current_branch ? (o(), i("span", hP, "(" + m(ot.current_branch) + ")", 1)) : y("", !0),
                      ot.is_current ? (o(), i("span", yP, "CURRENT")) : y("", !0)
                    ]),
                    s("div", wP, m(ot.workflow_count) + " workflows • " + m(ot.node_count) + " nodes ", 1)
                  ]),
                  !ot.is_current && xe.value.can_switch_environment ? (o(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ua) => Zt(ot.name)
                  }, " SWITCH ", 8, _P)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        me.value ? (o(), D(TM, {
          key: 8,
          "default-path": ((je = re.value) == null ? void 0 : je.default_path) || "~/comfygit",
          "detected-models-dir": ((wt = re.value) == null ? void 0 : wt.detected_models_dir) || null,
          "initial-step": J.value,
          "existing-environments": ((zt = re.value) == null ? void 0 : zt.environments) || [],
          "cli-installed": ((Ps = re.value) == null ? void 0 : Ps.cli_installed) ?? !0,
          "setup-state": ((fs = re.value) == null ? void 0 : fs.state) || "no_workspace",
          "workspace-path": ((Ht = re.value) == null ? void 0 : Ht.workspace_path) || null,
          onComplete: Ea,
          onClose: Ta,
          onSwitchEnvironment: Ma,
          onEnvironmentCreatedNoSwitch: La
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", kP, [
          b(fm, { name: "toast" }, {
            default: h(() => [
              (o(!0), i(W, null, he(pt.value, (ot) => (o(), i("div", {
                key: ot.id,
                class: Ve(["toast", ot.type])
              }, [
                s("span", bP, m(ot.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), CP = /* @__PURE__ */ Te($P, [["__scopeId", "data-v-addd093f"]]), xP = { class: "item-header" }, SP = { class: "item-info" }, IP = { class: "filename" }, EP = { class: "metadata" }, TP = { class: "size" }, MP = {
  key: 0,
  class: "type"
}, PP = { class: "item-actions" }, RP = {
  key: 0,
  class: "progress-section"
}, DP = { class: "progress-bar" }, LP = { class: "progress-stats" }, NP = { class: "downloaded" }, UP = { class: "speed" }, OP = {
  key: 0,
  class: "eta"
}, AP = {
  key: 1,
  class: "status-msg paused"
}, zP = {
  key: 2,
  class: "status-msg queued"
}, FP = {
  key: 3,
  class: "status-msg completed"
}, BP = {
  key: 4,
  class: "status-msg failed"
}, VP = {
  key: 0,
  class: "retries"
}, WP = /* @__PURE__ */ Ie({
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
      s("div", xP, [
        s("div", SP, [
          s("div", IP, m(e.item.filename), 1),
          s("div", EP, [
            s("span", TP, m(a(e.item.size)), 1),
            e.item.type ? (o(), i("span", MP, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", PP, [
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
      e.item.status === "downloading" ? (o(), i("div", RP, [
        s("div", DP, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", LP, [
          s("span", NP, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", UP, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (o(), i("span", OP, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (o(), i("div", AP, " Paused - click Resume to download ")) : e.item.status === "queued" ? (o(), i("div", zP, " Waiting in queue... ")) : e.item.status === "completed" ? (o(), i("div", FP, " ✓ Downloaded ")) : e.item.status === "failed" ? (o(), i("div", BP, [
        C(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (o(), i("span", VP, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ Te(WP, [["__scopeId", "data-v-2110df65"]]), GP = { class: "queue-title" }, jP = { class: "count" }, HP = { class: "queue-actions" }, qP = { class: "action-label" }, KP = {
  key: 0,
  class: "overall-progress"
}, JP = { class: "progress-bar" }, QP = {
  key: 0,
  class: "current-mini"
}, YP = { class: "filename" }, XP = { class: "speed" }, ZP = {
  key: 1,
  class: "queue-content"
}, eR = {
  key: 0,
  class: "section"
}, tR = {
  key: 1,
  class: "section"
}, sR = { class: "section-header" }, nR = { class: "section-label paused" }, oR = { class: "items-list" }, aR = {
  key: 2,
  class: "section"
}, lR = { class: "section-header" }, iR = { class: "section-label" }, rR = { class: "items-list" }, cR = {
  key: 3,
  class: "section"
}, uR = { class: "section-header" }, dR = { class: "section-label" }, mR = { class: "items-list" }, fR = {
  key: 4,
  class: "section"
}, vR = { class: "section-header" }, pR = { class: "section-label failed" }, gR = { class: "items-list" }, hR = /* @__PURE__ */ Ie({
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
    } = Hn(), $ = _(!1);
    let S = null;
    bt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (P, O) => {
        S && (clearTimeout(S), S = null);
        const U = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, B = O && (O.active > 0 || O.paused > 0);
        U && B && (S = setTimeout(() => {
          k(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = M(() => {
      var U;
      if (t.items.length === 0) return 0;
      const P = l.value.length, O = ((U = n.value) == null ? void 0 : U.progress) || 0;
      return Math.round((P + O / 100) / t.items.length * 100);
    });
    function T(P) {
      f(P);
    }
    function I(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, O) => (o(), D(us, { to: "body" }, [
      it(u) ? (o(), i("div", {
        key: 0,
        class: Ve(["model-download-queue", { minimized: !$.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: O[0] || (O[0] = (U) => $.value = !$.value)
        }, [
          s("div", GP, [
            O[4] || (O[4] = s("span", { class: "icon" }, "↓", -1)),
            O[5] || (O[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", jP, "(" + m(it(d)) + "/" + m(it(t).items.length) + ")", 1)
          ]),
          s("div", HP, [
            s("span", qP, m($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (o(), i("div", ZP, [
          it(n) ? (o(), i("div", eR, [
            O[6] || (O[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Zn, {
              item: it(n),
              onCancel: O[1] || (O[1] = (U) => T(it(n).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          it(c).length > 0 ? (o(), i("div", tR, [
            s("div", sR, [
              s("span", nR, "Paused (" + m(it(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: O[2] || (O[2] = //@ts-ignore
                (...U) => it(w) && it(w)(...U))
              }, "Resume All")
            ]),
            s("div", oR, [
              (o(!0), i(W, null, he(it(c), (U) => (o(), D(Zn, {
                key: U.id,
                item: U,
                onResume: (B) => it(p)(U.id),
                onRemove: (B) => it(g)(U.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          it(a).length > 0 ? (o(), i("div", aR, [
            s("div", lR, [
              s("span", iR, "Queued (" + m(it(a).length) + ")", 1)
            ]),
            s("div", rR, [
              (o(!0), i(W, null, he(it(a), (U) => (o(), D(Zn, {
                key: U.id,
                item: U,
                onCancel: (B) => T(U.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          it(l).length > 0 ? (o(), i("div", cR, [
            s("div", uR, [
              s("span", dR, "Completed (" + m(it(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: O[3] || (O[3] = //@ts-ignore
                (...U) => it(k) && it(k)(...U))
              }, "Clear")
            ]),
            s("div", mR, [
              (o(!0), i(W, null, he(it(l).slice(0, 3), (U) => (o(), D(Zn, {
                key: U.id,
                item: U,
                onRemove: (B) => it(g)(U.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          it(r).length > 0 ? (o(), i("div", fR, [
            s("div", vR, [
              s("span", pR, "Failed (" + m(it(r).length) + ")", 1)
            ]),
            s("div", gR, [
              (o(!0), i(W, null, he(it(r), (U) => (o(), D(Zn, {
                key: U.id,
                item: U,
                onRetry: (B) => it(v)(U.id),
                onRemove: (B) => it(g)(U.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (o(), i("div", KP, [
          s("div", JP, [
            s("div", {
              class: "progress-fill",
              style: Wt({ width: `${x.value}%` })
            }, null, 4)
          ]),
          it(n) ? (o(), i("div", QP, [
            s("span", YP, m(it(n).filename), 1),
            s("span", XP, m(I(it(n).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), yR = /* @__PURE__ */ Te(hR, [["__scopeId", "data-v-3a3c9607"]]), wR = { class: "detail-header" }, _R = { class: "item-count" }, kR = { class: "resource-list" }, bR = { class: "item-info" }, $R = { class: "item-name" }, CR = {
  key: 0,
  class: "item-subtitle"
}, xR = {
  key: 0,
  class: "installing-badge"
}, SR = ["title"], IR = {
  key: 2,
  class: "installed-badge"
}, ER = {
  key: 3,
  class: "queued-badge"
}, TR = {
  key: 4,
  class: "action-buttons"
}, MR = {
  key: 1,
  class: "no-action"
}, PR = /* @__PURE__ */ Ie({
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
    return (g, k) => (o(), D(Pt, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = ($) => a("close"))
    }, {
      body: h(() => [
        s("div", wR, [
          s("span", _R, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
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
        s("div", kR, [
          (o(!0), i(W, null, he(e.items, ($) => (o(), i("div", {
            key: $.id,
            class: "resource-item"
          }, [
            s("div", bR, [
              s("span", $R, m($.name), 1),
              $.subtitle ? (o(), i("span", CR, m($.subtitle), 1)) : y("", !0)
            ]),
            $.canAction ? (o(), i(W, { key: 0 }, [
              d($) ? (o(), i("span", xR, "Installing...")) : v($) ? (o(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p($)
              }, "Failed ⚠", 8, SR)) : f($) ? (o(), i("span", IR, "Installed")) : u($) ? (o(), i("span", ER, "Queued")) : (o(), i("div", TR, [
                (o(!0), i(W, null, he(w($), (S) => (o(), D(Ue, {
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
            ], 64)) : (o(), i("span", MR, m($.actionDisabledReason || "Not available"), 1))
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
}), RR = /* @__PURE__ */ Te(PR, [["__scopeId", "data-v-ec7e9202"]]), DR = {
  key: 0,
  class: "loading-state"
}, LR = {
  key: 1,
  class: "analysis-results"
}, NR = {
  key: 0,
  class: "section"
}, UR = { class: "section-header" }, OR = { class: "section-title" }, AR = { class: "item-list" }, zR = { class: "package-info" }, FR = { class: "package-name" }, BR = { class: "node-count" }, VR = {
  key: 1,
  class: "installing-badge"
}, WR = {
  key: 2,
  class: "queued-badge"
}, GR = ["title"], jR = {
  key: 5,
  class: "installed-badge"
}, HR = {
  key: 1,
  class: "section"
}, qR = { class: "section-header" }, KR = { class: "section-title" }, JR = { class: "item-list" }, QR = { class: "node-type" }, YR = {
  key: 0,
  class: "overflow-note"
}, XR = {
  key: 2,
  class: "section"
}, ZR = { class: "section-header" }, e7 = { class: "section-title" }, t7 = { class: "item-list" }, s7 = { class: "node-type" }, n7 = { class: "not-found" }, o7 = {
  key: 0,
  class: "overflow-note"
}, a7 = {
  key: 3,
  class: "section"
}, l7 = { class: "section-header" }, i7 = { class: "section-title" }, r7 = { class: "item-list" }, c7 = { class: "package-info community-info" }, u7 = { class: "community-title-row" }, d7 = { class: "package-name" }, m7 = { class: "node-count" }, f7 = { class: "community-mapping-note" }, v7 = { key: 0 }, p7 = {
  key: 0,
  class: "community-actions"
}, g7 = {
  key: 1,
  class: "installing-badge"
}, h7 = {
  key: 2,
  class: "queued-badge"
}, y7 = ["title"], w7 = {
  key: 5,
  class: "installed-badge"
}, _7 = ["title"], k7 = {
  key: 1,
  class: "no-url"
}, b7 = {
  key: 4,
  class: "section"
}, $7 = { class: "section-header" }, C7 = { class: "section-title" }, x7 = { class: "item-list" }, S7 = { class: "model-info" }, I7 = { class: "model-name" }, E7 = {
  key: 1,
  class: "queued-badge"
}, T7 = {
  key: 1,
  class: "no-url"
}, M7 = { class: "dont-show-again" }, P7 = 3e4, R7 = /* @__PURE__ */ Ie({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = _(!1), n = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Map()), f = _(/* @__PURE__ */ new Set()), v = _(!1), p = _(null), w = _(0), g = _(null), k = _(!1), $ = _(!1), S = _(!1), x = _(null), T = _(null), I = _(null), P = _(/* @__PURE__ */ new Set()), O = _(/* @__PURE__ */ new Map()), U = _(/* @__PURE__ */ new Map()), { addToQueue: B } = Hn(), {
      queueNodeInstall: R,
      previewNodeDependencyChanges: A,
      applyReviewedNodeDependencyChanges: Q
    } = ft(), ae = M(() => {
      var K;
      return ((K = a.value) == null ? void 0 : K.package_aliases) || {};
    });
    function H(K) {
      if (!K) return null;
      const fe = ae.value;
      let ze = K;
      const be = /* @__PURE__ */ new Set();
      for (; fe[ze] && !be.has(ze); )
        be.add(ze), ze = fe[ze];
      return ze;
    }
    function ue(K, fe) {
      return K instanceof Error && K.message ? K.message : typeof K == "string" && K.trim().length > 0 ? K : fe;
    }
    function q(K) {
      for (const [fe, ze] of O.value.entries())
        ze === K && O.value.delete(fe);
    }
    function N(K, fe, ze) {
      var be, Ge;
      u.value.delete(K), c.value.delete(K), d.value.set(K, fe), console.warn("[ComfyGit] Package requires dependency review:", {
        packageId: K,
        reason: ((be = ze == null ? void 0 : ze.dependency_review) == null ? void 0 : be.reason) || ((Ge = ze == null ? void 0 : ze.messages) == null ? void 0 : Ge[0])
      });
    }
    async function j(K) {
      const fe = d.value.get(K);
      if (!(!fe || xe.value)) {
        k.value = !0, $.value = !0, S.value = !1, x.value = null, T.value = null, I.value = K;
        try {
          const ze = await A(fe);
          T.value = ze.preview, ze.preview.success || (x.value = ze.preview.error || "Unable to generate dependency preview");
        } catch (ze) {
          x.value = ue(ze, "Unable to generate dependency preview");
        } finally {
          $.value = !1;
        }
      }
    }
    async function pe() {
      const K = I.value, fe = T.value, ze = K ? d.value.get(K) : null;
      if (!(!K || !fe || !ze || S.value)) {
        S.value = !0, x.value = null;
        try {
          const be = await Q({
            ...ze,
            accepted_preview: {
              baseline_fingerprint: fe.baseline_fingerprint,
              diff_fingerprint: fe.diff_fingerprint,
              proposed_fingerprint: fe.proposed_fingerprint
            }
          });
          if (be.status !== "success")
            throw new Error(be.error || be.message || "Unable to apply dependency changes");
          d.value.delete(K), u.value.delete(K), c.value.delete(K), r.value.add(K), w.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: 1 }
          })), ne();
        } catch (be) {
          x.value = ue(be, "Unable to apply dependency changes");
        } finally {
          S.value = !1;
        }
      }
    }
    function ne() {
      k.value = !1, $.value = !1, S.value = !1, x.value = null, T.value = null, I.value = null;
    }
    function re(K) {
      if (!U.value.has(K)) return;
      const fe = U.value.get(K);
      clearTimeout(fe), U.value.delete(K);
    }
    function me() {
      for (const K of U.value.values())
        clearTimeout(K);
      U.value = /* @__PURE__ */ new Map();
    }
    function J(K) {
      re(K);
      const fe = setTimeout(() => {
        if (U.value.delete(K), !c.value.has(K)) return;
        q(K), c.value.delete(K), p.value === K && (p.value = null), u.value.set(K, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", K);
      }, P7);
      U.value.set(K, fe);
    }
    function te(K) {
      const fe = `Cannot install "${K.title}" - package_id is missing`;
      u.value.set(K.item_id, fe), n.value = fe, console.warn("[ComfyGit] Community install requested without package_id:", K);
    }
    const le = M(() => ye.value.length > 0 || Le.value.length > 0 || _e.value.length > 0 || Pe.value.length > 0 || $e.value.length > 0), xe = M(() => O.value.size > 0 || c.value.size > 0 || !!p.value), ye = M(() => {
      var ze, be;
      if (!((ze = a.value) != null && ze.nodes)) return [];
      const K = /* @__PURE__ */ new Map(), fe = (a.value.nodes.resolved || []).filter((Ge) => {
        var Ze;
        return !Ge.is_installed && ((Ze = Ge.package) == null ? void 0 : Ze.package_id);
      });
      for (const Ge of fe) {
        const Ze = H(Ge.package.package_id);
        if (!Ze) continue;
        K.has(Ze) || K.set(Ze, {
          package_id: Ze,
          title: Ge.package.title || Ze,
          node_count: 0,
          node_types: [],
          repository: Ge.package.repository || null,
          latest_version: Ge.package.latest_version || null
        });
        const ct = K.get(Ze);
        ct.node_count++, ct.node_types.push(((be = Ge.reference) == null ? void 0 : be.node_type) || Ge.node_type);
      }
      return Array.from(K.values());
    }), Fe = M(() => ye.value.reduce((K, fe) => K + fe.node_count, 0)), Le = M(() => {
      var K;
      return (K = a.value) != null && K.nodes ? (a.value.nodes.unresolved || []).map((fe) => {
        var ze;
        return {
          node_type: ((ze = fe.reference) == null ? void 0 : ze.node_type) || fe.node_type
        };
      }) : [];
    }), _e = M(() => {
      var fe;
      if (!((fe = a.value) != null && fe.nodes)) return [];
      const K = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ze) => {
        var Ge;
        const be = ((Ge = ze.reference) == null ? void 0 : Ge.node_type) || ze.node_type;
        return {
          node_type: be,
          guidance: ze.guidance || K[be] || null
        };
      });
    }), Pe = M(() => {
      var ze, be, Ge, Ze, ct, ut, St, Y;
      if (!((ze = a.value) != null && ze.nodes)) return [];
      const K = a.value.node_guidance || {}, fe = /* @__PURE__ */ new Map();
      for (const L of a.value.nodes.uninstallable || []) {
        const ce = ((be = L.reference) == null ? void 0 : be.node_type) || L.node_type, Je = H(((Ge = L.package) == null ? void 0 : Ge.package_id) || null), tt = Je || `node:${ce}`;
        fe.has(tt) || fe.set(tt, {
          item_id: tt,
          node_type: ce,
          title: ((Ze = L.package) == null ? void 0 : Ze.title) || Je || ce,
          node_count: 0,
          package_id: Je,
          repository: ((ct = L.package) == null ? void 0 : ct.repository) || null,
          latest_version: ((ut = L.package) == null ? void 0 : ut.latest_version) || null,
          guidance: L.guidance || K[ce] || null
        });
        const mt = fe.get(tt);
        mt.node_count++, mt.guidance || (mt.guidance = L.guidance || K[ce] || null), !mt.repository && ((St = L.package) != null && St.repository) && (mt.repository = L.package.repository), !mt.latest_version && ((Y = L.package) != null && Y.latest_version) && (mt.latest_version = L.package.latest_version);
      }
      return Array.from(fe.values());
    }), ge = M(() => Pe.value.filter((K) => !!Ee(K))), ke = M(() => Pe.value.length >= 5 ? Pe.value.slice(0, 4) : Pe.value), E = M(() => ge.value.length > 0 && ge.value.every((K) => {
      const fe = K.package_id;
      return r.value.has(fe) || c.value.has(fe) || u.value.has(fe) || d.value.has(fe);
    }));
    function F(K) {
      const fe = [];
      return ie(K) && fe.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), K.repository && fe.push({
        key: "install_git",
        label: "Install via Git",
        variant: ie(K) ? "ghost" : "secondary"
      }), fe;
    }
    function ie(K) {
      return !!K.latest_version;
    }
    function Ee(K) {
      return K.package_id ? ie(K) ? "registry" : K.repository ? "git" : null : null;
    }
    const $e = M(() => {
      var Ge;
      if (!((Ge = a.value) != null && Ge.models)) return [];
      const K = (a.value.models.resolved || []).filter(
        (Ze) => Ze.match_type === "download_intent" || Ze.match_type === "property_download_intent" || Ze.match_type === "not_found"
      ).map((Ze) => {
        var ct, ut, St, Y;
        return {
          filename: ((ut = (ct = Ze.reference) == null ? void 0 : ct.widget_value) == null ? void 0 : ut.split("/").pop()) || ((St = Ze.reference) == null ? void 0 : St.widget_value) || Ze.widget_value,
          widget_value: ((Y = Ze.reference) == null ? void 0 : Y.widget_value) || Ze.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Ze.download_source || null,
          targetPath: Ze.target_path || null,
          canDownload: !!(Ze.download_source && Ze.target_path)
        };
      }), fe = (a.value.models.unresolved || []).map((Ze) => {
        var ct, ut, St, Y;
        return {
          filename: ((ut = (ct = Ze.reference) == null ? void 0 : ct.widget_value) == null ? void 0 : ut.split("/").pop()) || ((St = Ze.reference) == null ? void 0 : St.widget_value) || Ze.widget_value,
          widget_value: ((Y = Ze.reference) == null ? void 0 : Y.widget_value) || Ze.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ze = /* @__PURE__ */ new Map(), be = [];
      for (const Ze of K) {
        if (!Ze.url) {
          be.push(Ze);
          continue;
        }
        const ct = `${Ze.filename}::${Ze.url}`, ut = ze.get(ct);
        if (!ut) {
          ze.set(ct, Ze);
          continue;
        }
        !ut.targetPath && Ze.targetPath && (ut.targetPath = Ze.targetPath), !ut.canDownload && Ze.canDownload && (ut.canDownload = Ze.canDownload);
      }
      return [...ze.values(), ...be, ...fe];
    }), Ce = M(() => $e.value.filter((K) => K.canDownload)), Oe = M(() => ye.value.length >= 5 ? ye.value.slice(0, 4) : ye.value), ee = M(() => $e.value.length >= 5 ? $e.value.slice(0, 4) : $e.value), V = M(() => ye.value.length > 0 && ye.value.every(
      (K) => r.value.has(K.package_id) || c.value.has(K.package_id) || u.value.has(K.package_id) || d.value.has(K.package_id)
    )), de = M(() => Ce.value.length > 0 && Ce.value.every((K) => f.value.has(K.url))), We = M(() => ye.value.length > 0 || ge.value.length > 0 || Ce.value.length > 0), Be = M(() => {
      const K = (ye.value.length === 0 || V.value) && (ge.value.length === 0 || E.value), fe = Ce.value.length === 0 || de.value;
      return K && fe;
    }), we = M(() => g.value === "models" ? `Missing Models (${$e.value.length})` : g.value === "packages" ? `Missing Custom Nodes (${Fe.value})` : g.value === "community" ? `Community-Mapped Packages (${Pe.value.length})` : ""), se = M(() => g.value === "models" ? $e.value.map((K) => ({
      id: K.url || K.widget_value,
      name: K.filename,
      canAction: K.canDownload,
      actionDisabledReason: K.canDownload ? void 0 : "Manual download required"
    })) : g.value === "packages" ? ye.value.map((K) => ({
      id: K.package_id,
      name: K.title,
      subtitle: `(${K.node_count} ${K.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : g.value === "community" ? Pe.value.map((K) => ({
      id: K.package_id || K.item_id,
      name: K.title,
      subtitle: `(${K.node_count} ${K.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Ee(K),
      actionDisabledReason: Ee(K) ? void 0 : "Manual setup required",
      actions: F(K)
    })) : []);
    function Ke(K, fe) {
      if (g.value === "models") {
        const ze = $e.value.find((be) => be.url === K.id || be.widget_value === K.id);
        ze && He(ze);
      } else if (g.value === "packages") {
        const ze = ye.value.find((be) => be.package_id === K.id);
        ze && Xe(ze);
      } else if (g.value === "community") {
        const ze = Pe.value.find((Ge) => (Ge.package_id || Ge.item_id) === K.id);
        if (!ze) return;
        if (!ze.package_id) {
          te({ item_id: ze.item_id, title: ze.title });
          return;
        }
        const be = fe === "install_git" ? "git" : "registry";
        if (be === "registry" && !ie(ze)) {
          te({ item_id: ze.item_id, title: ze.title });
          return;
        }
        De(ze, be);
      }
    }
    function Ne() {
      g.value === "models" ? Gt() : g.value === "packages" ? kt() : g.value === "community" && Ut();
    }
    async function Xe(K) {
      return Ae(K.package_id, K.latest_version, "registry");
    }
    async function De(K, fe) {
      return K.package_id ? fe === "registry" && !ie(K) ? (u.value.set(K.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : fe === "git" && !K.repository ? (u.value.set(K.package_id, "No Git repository is available for this community mapping."), !1) : Ae(K.package_id, K.latest_version, fe, K.repository) : (te({ item_id: K.item_id, title: K.title }), !1);
    }
    async function Ae(K, fe, ze, be) {
      const Ge = H(K) || K, Ze = fe || "latest";
      if (r.value.has(Ge) || c.value.has(Ge) || u.value.has(Ge) || d.value.has(Ge))
        return !0;
      Xt(), p.value = Ge;
      let ct = null;
      try {
        const ut = {
          id: Ge,
          version: Ze,
          selected_version: Ze,
          mode: "remote",
          channel: "default"
        };
        ze === "git" && be && (ut.repository = be, ut.install_source = "git");
        const { ui_id: St, status: Y } = await R(ut, {
          beforeQueueStart: (L) => {
            ct = L, O.value.set(L, Ge), c.value.add(Ge), J(Ge), console.log("[ComfyGit] Registered pending install:", {
              ui_id: L,
              packageId: Ge,
              pendingInstalls: Array.from(O.value.entries())
            });
          }
        });
        return (Y == null ? void 0 : Y.status_str) === "dependency_review_required" ? (ct && O.value.delete(ct), q(Ge), re(Ge), p.value === Ge && (p.value = null), N(Ge, ut, Y), !1) : (ct || (ct = St, O.value.set(St, Ge), c.value.add(Ge), J(Ge), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: St,
          packageId: Ge,
          pendingInstalls: Array.from(O.value.entries())
        })), !0);
      } catch (ut) {
        const St = ue(ut, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", ut), ct && O.value.delete(ct), q(Ge), re(Ge), c.value.delete(Ge), d.value.delete(Ge), u.value.set(Ge, St), !1;
      } finally {
        p.value = null;
      }
    }
    function He(K) {
      !K.url || !K.targetPath || f.value.has(K.url) || (B([{
        workflow: "unsaved",
        filename: K.filename,
        url: K.url,
        targetPath: K.targetPath
      }]), f.value.add(K.url));
    }
    async function kt() {
      const K = { attempted: 0, failed: 0 };
      for (const fe of ye.value)
        !r.value.has(fe.package_id) && !c.value.has(fe.package_id) && !u.value.has(fe.package_id) && !d.value.has(fe.package_id) && (K.attempted++, await Xe(fe) || K.failed++);
      return K;
    }
    async function Ut() {
      const K = { attempted: 0, failed: 0 };
      for (const fe of ge.value) {
        const ze = fe.package_id;
        if (!r.value.has(ze) && !c.value.has(ze) && !u.value.has(ze) && !d.value.has(ze)) {
          K.attempted++;
          const be = Ee(fe);
          (be ? await De(fe, be) : !1) || K.failed++;
        }
      }
      return K;
    }
    function Gt() {
      const K = Ce.value.filter(
        (fe) => !f.value.has(fe.url)
      );
      if (K.length === 0) return 0;
      B(K.map((fe) => ({
        workflow: "unsaved",
        filename: fe.filename,
        url: fe.url,
        targetPath: fe.targetPath
      })));
      for (const fe of K)
        f.value.add(fe.url);
      return K.length;
    }
    async function X() {
      const K = await kt(), fe = await Ut();
      Gt();
      const ze = K.attempted + fe.attempted, be = K.failed + fe.failed;
      if (ze > 0 && be > 0) {
        const Ge = ze - be;
        n.value = `${Ge} of ${ze} installs queued, ${be} failed`;
      }
    }
    function Z() {
      if (Be.value) {
        Re();
        return;
      }
      X();
    }
    function ve() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Qe(K) {
      var Ge, Ze;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const fe = K == null ? void 0 : K.id;
      if (fe && P.value.has(fe)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${fe} this session`);
        return;
      }
      const ze = window.app, be = (Ge = ze == null ? void 0 : ze.extensionManager) == null ? void 0 : Ge.workflow;
      if (be) {
        let St = !1;
        for (let Y = 0; Y < 20; Y++) {
          const L = be.activeWorkflow;
          if (!L) {
            await new Promise((tt) => setTimeout(tt, 50));
            continue;
          }
          const ce = (Ze = L.activeState) == null ? void 0 : Ze.id;
          if (!(fe && ce === fe)) {
            Y < 19 && await new Promise((tt) => setTimeout(tt, 50));
            continue;
          }
          if (St = !0, L.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${L.filename}`), fe && P.value.add(fe);
            return;
          }
          break;
        }
        St || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, n.value = null, me(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Map(), f.value = /* @__PURE__ */ new Set(), O.value = /* @__PURE__ */ new Map(), v.value = !1, w.value = 0;
      try {
        const ct = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: K, name: "unsaved" })
        });
        if (!ct.ok) {
          const ut = await ct.json();
          throw new Error(ut.error || "Failed to analyze workflow");
        }
        a.value = await ct.json(), le.value && (l.value = !0, fe && P.value.add(fe));
      } catch (ct) {
        console.error("[ComfyGit] Failed to analyze workflow:", ct);
      } finally {
        t.value = !1;
      }
    }
    function Re() {
      me(), l.value = !1, a.value = null;
    }
    function lt(K) {
      const { workflow: fe } = K.detail;
      fe && Qe(fe);
    }
    function et(K) {
      var be;
      const fe = (be = K.detail) == null ? void 0 : be.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: fe,
        pendingInstalls: Array.from(O.value.entries()),
        eventDetail: K.detail
      });
      const ze = O.value.get(fe);
      ze ? (re(ze), p.value = ze, console.log("[ComfyGit] Installing package:", ze)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", fe);
    }
    function pt(K) {
      var Ge, Ze, ct, ut, St, Y, L, ce, Je, tt, mt;
      const fe = (Ge = K.detail) == null ? void 0 : Ge.ui_id, ze = (ct = (Ze = K.detail) == null ? void 0 : Ze.status) == null ? void 0 : ct.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: fe,
        status: ze,
        pendingInstalls: Array.from(O.value.entries()),
        eventDetail: K.detail
      });
      const be = O.value.get(fe);
      if (be) {
        if (re(be), O.value.delete(fe), c.value.delete(be), p.value === be && (p.value = null), ze === "success")
          r.value.add(be), w.value++, console.log("[ComfyGit] Package installed successfully:", be);
        else if (ze === "dependency_review_required") {
          const At = ((St = (ut = K.detail) == null ? void 0 : ut.task) == null ? void 0 : St.params) || ((Y = K.detail) == null ? void 0 : Y.params);
          At != null && At.id ? N(be, At, (L = K.detail) == null ? void 0 : L.status) : u.value.set(be, "Dependency review required");
        } else {
          const At = ((tt = (Je = (ce = K.detail) == null ? void 0 : ce.status) == null ? void 0 : Je.messages) == null ? void 0 : tt[0]) || ((mt = K.detail) == null ? void 0 : mt.result) || "Unknown error";
          u.value.set(be, At), console.error("[ComfyGit] Package install failed:", be, At);
        }
        O.value.size === 0 && w.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", w.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: w.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", fe);
    }
    let Rt = null;
    function Ye() {
      return Rt || (Rt = jn()), Rt;
    }
    let Ct = !1;
    function Xt() {
      if (Ct) return !0;
      const K = Ye();
      return K ? (K.addEventListener("cm-task-started", et), K.addEventListener("cm-task-completed", pt), K.addEventListener("comfygit:workflow-changed", as), Ct = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function as(K) {
      const { change_type: fe } = K.detail;
      (fe === "created" || fe === "modified") && l.value && (me(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return dt(() => {
      window.addEventListener("comfygit:workflow-loaded", lt);
    }), Wn(() => {
      if (me(), window.removeEventListener("comfygit:workflow-loaded", lt), Ct) {
        const K = Ye();
        K && (K.removeEventListener("cm-task-started", et), K.removeEventListener("cm-task-completed", pt), K.removeEventListener("comfygit:workflow-changed", as)), Ct = !1;
      }
    }), (K, fe) => {
      var ze;
      return o(), i(W, null, [
        l.value ? (o(), D(Pt, {
          key: 0,
          title: "Missing Dependencies",
          size: "md",
          loading: t.value,
          error: n.value || void 0,
          onClose: Re
        }, {
          body: h(() => [
            t.value ? (o(), i("div", DR, [...fe[5] || (fe[5] = [
              s("div", { class: "loading-spinner" }, null, -1),
              s("span", null, "Analyzing workflow...", -1)
            ])])) : a.value && le.value ? (o(), i("div", LR, [
              ye.value.length > 0 ? (o(), i("div", NR, [
                s("div", UR, [
                  s("span", OR, "Missing Custom Nodes (" + m(Fe.value) + ")", 1),
                  ye.value.length > 1 ? (o(), D(Ue, {
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
                s("div", AR, [
                  (o(!0), i(W, null, he(Oe.value, (be) => (o(), i("div", {
                    key: be.package_id,
                    class: "package-item"
                  }, [
                    s("div", zR, [
                      s("span", FR, m(be.title), 1),
                      s("span", BR, "(" + m(be.node_count) + " " + m(be.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    !r.value.has(be.package_id) && !c.value.has(be.package_id) && !u.value.has(be.package_id) && !d.value.has(be.package_id) ? (o(), D(Ue, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      disabled: p.value === be.package_id,
                      onClick: (Ge) => Xe(be)
                    }, {
                      default: h(() => [
                        C(m(p.value === be.package_id ? "Queueing..." : "Install"), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "onClick"])) : p.value === be.package_id ? (o(), i("span", VR, "Installing...")) : c.value.has(be.package_id) ? (o(), i("span", WR, "Queued")) : u.value.has(be.package_id) ? (o(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(be.package_id)
                    }, "Failed ⚠", 8, GR)) : d.value.has(be.package_id) ? (o(), D(Ue, {
                      key: 4,
                      size: "sm",
                      variant: "secondary",
                      disabled: xe.value,
                      onClick: (Ge) => j(be.package_id)
                    }, {
                      default: h(() => [...fe[6] || (fe[6] = [
                        C(" Needs Review ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : (o(), i("span", jR, "Installed"))
                  ]))), 128)),
                  ye.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: fe[0] || (fe[0] = (be) => g.value = "packages")
                  }, [
                    s("span", null, "Show all " + m(ye.value.length) + " packages...", 1),
                    fe[7] || (fe[7] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Le.value.length > 0 ? (o(), i("div", HR, [
                s("div", qR, [
                  s("span", KR, "Unknown Nodes (" + m(Le.value.length) + ")", 1)
                ]),
                s("div", JR, [
                  (o(!0), i(W, null, he(Le.value.slice(0, 5), (be) => (o(), i("div", {
                    key: be.node_type,
                    class: "item"
                  }, [
                    s("code", QR, m(be.node_type), 1),
                    fe[8] || (fe[8] = s("span", { class: "not-found" }, "Not found in registry", -1))
                  ]))), 128)),
                  Le.value.length > 5 ? (o(), i("div", YR, " ...and " + m(Le.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              _e.value.length > 0 ? (o(), i("div", XR, [
                s("div", ZR, [
                  s("span", e7, "Requires Newer ComfyUI (" + m(_e.value.length) + ")", 1)
                ]),
                s("div", t7, [
                  (o(!0), i(W, null, he(_e.value.slice(0, 5), (be) => (o(), i("div", {
                    key: `vg-${be.node_type}`,
                    class: "item"
                  }, [
                    s("code", s7, m(be.node_type), 1),
                    s("span", n7, m(be.guidance || "Requires a newer ComfyUI version"), 1)
                  ]))), 128)),
                  _e.value.length > 5 ? (o(), i("div", o7, " ...and " + m(_e.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              Pe.value.length > 0 ? (o(), i("div", a7, [
                s("div", l7, [
                  s("span", i7, "Community-Mapped Packages (" + m(Pe.value.length) + ")", 1),
                  ge.value.length > 1 ? (o(), D(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: E.value,
                    onClick: Ut
                  }, {
                    default: h(() => [
                      C(m(E.value ? "All Done" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", r7, [
                  (o(!0), i(W, null, he(ke.value, (be) => (o(), i("div", {
                    key: `community-${be.item_id}`,
                    class: "package-item"
                  }, [
                    s("div", c7, [
                      s("div", u7, [
                        s("span", d7, m(be.title), 1),
                        s("span", m7, "(" + m(be.node_count) + " " + m(be.node_count === 1 ? "node" : "nodes") + ")", 1)
                      ]),
                      s("div", f7, [
                        fe[9] || (fe[9] = C(" Found via community mapping — registry metadata may be incomplete", -1)),
                        be.guidance ? (o(), i("span", v7, ". " + m(be.guidance), 1)) : y("", !0)
                      ])
                    ]),
                    be.package_id ? (o(), i(W, { key: 0 }, [
                      !r.value.has(be.package_id) && !c.value.has(be.package_id) && !u.value.has(be.package_id) && !d.value.has(be.package_id) ? (o(), i("div", p7, [
                        ie(be) ? (o(), D(Ue, {
                          key: 0,
                          size: "sm",
                          variant: "secondary",
                          disabled: p.value === be.package_id,
                          onClick: (Ge) => De(be, "registry")
                        }, {
                          default: h(() => [
                            C(m(p.value === be.package_id ? "Queueing..." : "Install from Registry"), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])) : y("", !0),
                        be.repository ? (o(), D(Ue, {
                          key: 1,
                          size: "sm",
                          variant: ie(be) ? "ghost" : "secondary",
                          disabled: p.value === be.package_id,
                          onClick: (Ge) => De(be, "git")
                        }, {
                          default: h(() => [...fe[10] || (fe[10] = [
                            C(" Install via Git ", -1)
                          ])]),
                          _: 1
                        }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                      ])) : p.value === be.package_id ? (o(), i("span", g7, "Installing...")) : c.value.has(be.package_id) ? (o(), i("span", h7, "Queued")) : u.value.has(be.package_id) ? (o(), i("span", {
                        key: 3,
                        class: "failed-badge",
                        title: u.value.get(be.package_id)
                      }, "Failed ⚠", 8, y7)) : d.value.has(be.package_id) ? (o(), D(Ue, {
                        key: 4,
                        size: "sm",
                        variant: "secondary",
                        disabled: xe.value,
                        onClick: (Ge) => j(be.package_id)
                      }, {
                        default: h(() => [...fe[11] || (fe[11] = [
                          C(" Needs Review ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : (o(), i("span", w7, "Installed"))
                    ], 64)) : (o(), i(W, { key: 1 }, [
                      u.value.has(be.item_id) ? (o(), i("span", {
                        key: 0,
                        class: "failed-badge",
                        title: u.value.get(be.item_id)
                      }, "Failed ⚠", 8, _7)) : (o(), i("span", k7, "Manual setup required"))
                    ], 64))
                  ]))), 128)),
                  Pe.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: fe[1] || (fe[1] = (be) => g.value = "community")
                  }, [
                    s("span", null, "Show all " + m(Pe.value.length) + " packages...", 1),
                    fe[12] || (fe[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              $e.value.length > 0 ? (o(), i("div", b7, [
                s("div", $7, [
                  s("span", C7, "Missing Models (" + m($e.value.length) + ")", 1),
                  Ce.value.length > 1 ? (o(), D(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: de.value,
                    onClick: Gt
                  }, {
                    default: h(() => [
                      C(m(de.value ? "All Queued" : "Download All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", x7, [
                  (o(!0), i(W, null, he(ee.value, (be) => (o(), i("div", {
                    key: be.widget_value,
                    class: "model-item"
                  }, [
                    s("div", S7, [
                      s("span", I7, m(be.filename), 1)
                    ]),
                    be.canDownload ? (o(), i(W, { key: 0 }, [
                      f.value.has(be.url) ? (o(), i("span", E7, "Queued")) : (o(), D(Ue, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        onClick: (Ge) => He(be)
                      }, {
                        default: h(() => [...fe[13] || (fe[13] = [
                          C(" Download ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]))
                    ], 64)) : (o(), i("span", T7, "Manual download required"))
                  ]))), 128)),
                  $e.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: fe[2] || (fe[2] = (be) => g.value = "models")
                  }, [
                    s("span", null, "Show all " + m($e.value.length) + " models...", 1),
                    fe[14] || (fe[14] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              s("div", M7, [
                b(ra, {
                  modelValue: v.value,
                  "onUpdate:modelValue": [
                    fe[3] || (fe[3] = (be) => v.value = be),
                    ve
                  ]
                }, {
                  default: h(() => [...fe[15] || (fe[15] = [
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
              default: h(() => [...fe[16] || (fe[16] = [
                C("Dismiss", -1)
              ])]),
              _: 1
            }),
            We.value ? (o(), D(Ue, {
              key: 0,
              variant: "primary",
              onClick: Z
            }, {
              default: h(() => [
                C(m(Be.value ? "All Done" : "Download All"), 1)
              ]),
              _: 1
            })) : y("", !0)
          ]),
          _: 1
        }, 8, ["loading", "error"])) : y("", !0),
        g.value ? (o(), D(RR, {
          key: 1,
          title: we.value,
          items: se.value,
          "item-type": g.value,
          "queued-items": g.value === "models" ? f.value : c.value,
          "installed-items": g.value === "models" ? void 0 : r.value,
          "failed-items": g.value === "models" ? void 0 : u.value,
          "installing-item": g.value === "models" ? void 0 : p.value,
          onClose: fe[4] || (fe[4] = (be) => g.value = null),
          onAction: Ke,
          onBulkAction: Ne
        }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0),
        k.value ? (o(), D(wc, {
          key: 2,
          loading: $.value,
          error: x.value,
          preview: T.value,
          "can-apply": !!(I.value && ((ze = T.value) != null && ze.success)),
          applying: S.value,
          onClose: ne,
          onApply: pe
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ], 64);
    };
  }
}), D7 = /* @__PURE__ */ Te(R7, [["__scopeId", "data-v-f0b1aac5"]]), L7 = {
  key: 0,
  class: "io-mapping-root"
}, N7 = { class: "io-mapping-visual-layer" }, U7 = { class: "io-mapping-header" }, O7 = { class: "io-mapping-header-main" }, A7 = { class: "io-mapping-subtitle" }, z7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, F7 = { class: "io-mapping-header-actions" }, B7 = { class: "io-mapping-sidebar" }, V7 = { class: "io-mapping-sidebar-scroll" }, W7 = {
  key: 0,
  class: "io-state-block"
}, G7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, j7 = { class: "contract-meta-section" }, H7 = { class: "contract-meta-toggle-icon" }, q7 = {
  key: 0,
  class: "contract-meta-body"
}, K7 = { class: "contract-summary" }, J7 = { class: "summary-pill" }, Q7 = { class: "summary-pill" }, Y7 = { class: "summary-pill" }, X7 = { class: "mapping-section" }, Z7 = { class: "section-header" }, eD = {
  key: 0,
  class: "empty-message"
}, tD = ["onClick"], sD = { class: "item-card-title" }, nD = { class: "item-card-meta" }, oD = { class: "item-card-summary" }, aD = { key: 0 }, lD = { class: "mapping-section" }, iD = { class: "section-header" }, rD = {
  key: 0,
  class: "empty-message"
}, cD = ["onClick"], uD = { class: "item-card-title" }, dD = { class: "item-card-meta" }, mD = { class: "item-card-summary" }, fD = { class: "io-mapping-footer" }, vD = { class: "io-mapping-footer-left" }, pD = { class: "io-mapping-footer-right" }, gD = /* @__PURE__ */ Ie({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: n, saveWorkflowContract: a, deleteWorkflowContract: l } = ft(), r = _(!1), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = _(null), x = _(0), T = _(null), I = _(null);
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
    ], U = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], B = M(() => {
      var X;
      return ((X = p.value) == null ? void 0 : X.contract_summary.has_contract) === !0;
    }), R = M(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const X = w.value.default_contract || "default";
      return w.value.contracts[X] || (w.value.contracts[X] = { inputs: [], outputs: [] }), w.value.contracts[X];
    }), A = M(() => {
      var Z;
      const X = ((Z = p.value) == null ? void 0 : Z.contract_summary.status) ?? "none";
      return X === "valid" ? "Valid Contract" : X === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function Q(X) {
      return X ? JSON.parse(JSON.stringify(X)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ae(X) {
      return X === "integer" || X === "number";
    }
    function H(X) {
      return X === "enum";
    }
    function ue(X) {
      return X == null ? "" : String(X);
    }
    function q(X) {
      const Z = X.trim();
      if (!Z) return;
      const ve = Number(Z);
      return Number.isFinite(ve) ? ve : void 0;
    }
    function N(X) {
      return (X || []).join(`
`);
    }
    function j(X) {
      return X.split(/[\n,]/).map((Z) => Z.trim()).filter(Boolean);
    }
    function pe(X) {
      return typeof X == "string" ? X.length > 24 ? `${X.slice(0, 24)}...` : X : String(X);
    }
    function ne(X) {
      return X == null ? "" : String(X);
    }
    function re(X) {
      var ve;
      const Z = (ve = X == null ? void 0 : X.options) == null ? void 0 : ve.values;
      return Array.isArray(Z) ? Z.map((Qe) => String(Qe)).filter(Boolean) : [];
    }
    function me(X, Z) {
      var Re;
      const ve = (Re = X == null ? void 0 : X.options) == null ? void 0 : Re[Z];
      if (ve == null || ve === "") return;
      const Qe = Number(ve);
      return Number.isFinite(Qe) ? Qe : void 0;
    }
    function J(X, Z) {
      return X.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || Z;
    }
    function te(X) {
      if (!w.value) return;
      const Z = X.trim() || "default";
      w.value.default_contract = Z, w.value.contracts[Z] || (w.value.contracts[Z] = { inputs: [], outputs: [] });
    }
    function le(X) {
      const Z = String(X ?? "").toLowerCase();
      return Z.includes("image") ? "image" : Z.includes("video") ? "video" : Z.includes("audio") ? "audio" : Z.includes("int") ? "integer" : Z.includes("float") || Z.includes("double") || Z.includes("number") ? "number" : Z.includes("bool") ? "boolean" : Z.includes("combo") || Z.includes("enum") ? "enum" : Z.includes("string") || Z.includes("text") ? "string" : "file";
    }
    function xe(X) {
      R.value.inputs.splice(X, 1), $.value === X && ($.value = null);
    }
    function ye(X) {
      R.value.outputs.splice(X, 1), S.value === X && (S.value = null);
    }
    function Fe(X) {
      $.value = $.value === X ? null : X, $.value != null && (S.value = null);
    }
    function Le(X) {
      S.value = S.value === X ? null : X, S.value != null && ($.value = null);
    }
    function _e(X) {
      const Z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(X)) : String(X);
      return document.querySelector(`[data-node-id="${Z}"]`);
    }
    function Pe(X) {
      return X instanceof Element ? !!X.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ge(X) {
      var Qe, Re, lt, et, pt, Rt;
      if (!(X instanceof Element)) return null;
      const Z = X.closest("[data-node-id]"), ve = Z == null ? void 0 : Z.getAttribute("data-node-id");
      return ve ? ((lt = (Re = (Qe = t.comfyApp) == null ? void 0 : Qe.graph) == null ? void 0 : Re.getNodeById) == null ? void 0 : lt.call(Re, ve)) ?? ((Rt = (pt = (et = t.comfyApp) == null ? void 0 : et.rootGraph) == null ? void 0 : pt.getNodeById) == null ? void 0 : Rt.call(pt, ve)) ?? null : null;
    }
    function ke(X, Z) {
      if (Z == null || Z < 0) return null;
      const ve = _e(X);
      return ve ? ve.querySelectorAll('[data-testid="node-widget"]')[Z] ?? null : null;
    }
    function E(X) {
      return !X || X.width <= 0 || X.height <= 0 ? null : {
        left: `${X.left}px`,
        top: `${X.top}px`,
        width: `${X.width}px`,
        height: `${X.height}px`
      };
    }
    function F(X) {
      const Z = _e((X == null ? void 0 : X.id) ?? "");
      if (Z) return Z.getBoundingClientRect();
      const ve = t.comfyApp;
      if (!X || typeof (ve == null ? void 0 : ve.canvasPosToClientPos) != "function") return null;
      const Re = ve.canvasPosToClientPos([X.pos[0], X.pos[1] - 32]), lt = ve.canvasPosToClientPos([X.pos[0] + X.size[0], X.pos[1] + X.size[1]]);
      return !Re || !lt ? null : new DOMRect(Re[0], Re[1], lt[0] - Re[0], lt[1] - Re[1]);
    }
    function ie(X) {
      var pt, Rt, Ye, Ct, Xt, as, K;
      const Z = ke(X.node_id, X.widget_idx);
      if (Z) return Z.getBoundingClientRect();
      const ve = ((Ye = (Rt = (pt = t.comfyApp) == null ? void 0 : pt.graph) == null ? void 0 : Rt.getNodeById) == null ? void 0 : Ye.call(Rt, String(X.node_id))) ?? ((as = (Xt = (Ct = t.comfyApp) == null ? void 0 : Ct.rootGraph) == null ? void 0 : Xt.getNodeById) == null ? void 0 : as.call(Xt, String(X.node_id)));
      if (!ve || typeof X.widget_idx != "number" || !Array.isArray(ve.widgets)) return null;
      const Qe = ve.widgets[X.widget_idx];
      if (!Qe || typeof ((K = t.comfyApp) == null ? void 0 : K.canvasPosToClientPos) != "function") return F(ve);
      const Re = 10, lt = t.comfyApp.canvasPosToClientPos([ve.pos[0] + Re, ve.pos[1] + (Qe.y ?? 0)]), et = t.comfyApp.canvasPosToClientPos([ve.pos[0] + ve.size[0] - Re, ve.pos[1] + (Qe.y ?? 0) + (Qe.computedHeight ?? 24)]);
      return !lt || !et ? F(ve) : new DOMRect(lt[0], lt[1], et[0] - lt[0], et[1] - lt[1]);
    }
    function Ee(X) {
      var ve, Qe, Re, lt, et, pt;
      const Z = ((Re = (Qe = (ve = t.comfyApp) == null ? void 0 : ve.graph) == null ? void 0 : Qe.getNodeById) == null ? void 0 : Re.call(Qe, String(X.node_id))) ?? ((pt = (et = (lt = t.comfyApp) == null ? void 0 : lt.rootGraph) == null ? void 0 : et.getNodeById) == null ? void 0 : pt.call(et, String(X.node_id)));
      return F(Z);
    }
    const $e = M(() => (x.value, R.value.inputs.map((X, Z) => {
      const ve = E(ie(X));
      return ve ? {
        key: `input-${Z}-${X.node_id}-${X.widget_idx ?? "na"}`,
        style: ve,
        active: $.value === Z
      } : null;
    }).filter((X) => !!X))), Ce = M(() => (x.value, R.value.outputs.map((X, Z) => {
      const ve = E(Ee(X));
      return ve ? {
        key: `output-${Z}-${X.node_id}-${X.selector ?? "primary"}`,
        style: ve,
        active: S.value === Z
      } : null;
    }).filter((X) => !!X)));
    function Oe(X) {
      var Ye, Ct, Xt, as, K, fe, ze, be, Ge, Ze;
      if (Pe(X.target)) return null;
      const Z = (Ye = t.comfyApp) == null ? void 0 : Ye.canvas;
      if (!Z) return null;
      const ve = (Ct = Z.convertEventToCanvasOffset) == null ? void 0 : Ct.call(Z, X);
      if (!ve || ve.length < 2) return null;
      const [Qe, Re] = ve, lt = Z.graph || ((Xt = t.comfyApp) == null ? void 0 : Xt.graph) || ((as = t.comfyApp) == null ? void 0 : as.rootGraph), et = ((K = lt == null ? void 0 : lt.getNodeOnPos) == null ? void 0 : K.call(lt, Qe, Re, Z.visible_nodes)) || ((fe = Z.getNodeOnPos) == null ? void 0 : fe.call(Z, Qe, Re)) || ge(X.target);
      if (!et) return null;
      const pt = (ze = et.getWidgetOnPos) == null ? void 0 : ze.call(et, Qe, Re, !0);
      if (pt)
        return { kind: "input", node: et, widget: pt, canvasX: Qe, canvasY: Re };
      const Rt = ((be = et.getOutputOnPos) == null ? void 0 : be.call(et, [Qe, Re])) || ((Ze = (Ge = et.constructor) == null ? void 0 : Ge.nodeData) != null && Ze.output_node ? { name: et.title || et.type || "output", type: "image" } : null);
      return Rt ? { kind: "output", node: et, output: Rt, canvasX: Qe, canvasY: Re } : null;
    }
    function ee(X, Z) {
      var pt;
      const ve = Array.isArray(X.widgets) ? X.widgets.indexOf(Z) : -1, Qe = R.value.inputs.findIndex(
        (Rt) => String(Rt.node_id) === String(X.id) && Rt.widget_idx === ve
      );
      if (Qe >= 0) {
        $.value = Qe;
        return;
      }
      const Re = typeof ((pt = Z == null ? void 0 : Z.options) == null ? void 0 : pt.property) == "string" ? Z.options.property : void 0, lt = (Z == null ? void 0 : Z.name) || Re || "input", et = {
        name: J(String(lt), `input_${R.value.inputs.length + 1}`),
        display_name: String((Z == null ? void 0 : Z.name) || Re || `Input ${R.value.inputs.length + 1}`),
        type: le(Z == null ? void 0 : Z.type),
        node_id: String(X.id),
        widget_idx: ve >= 0 ? ve : void 0,
        field_key: Re,
        required: !0,
        default: (Z == null ? void 0 : Z.value) ?? ""
      };
      ae(et.type) && (et.min = me(Z, "min"), et.max = me(Z, "max")), H(et.type) && (et.enum_values = re(Z)), R.value.inputs.push(et), $.value = R.value.inputs.length - 1, S.value = null;
    }
    function V(X, Z) {
      const ve = Array.isArray(X.outputs) ? X.outputs.indexOf(Z) : -1, Qe = ve >= 0 ? `slot:${ve}` : "primary", Re = R.value.outputs.findIndex(
        (et) => String(et.node_id) === String(X.id) && (et.selector || "primary") === Qe
      );
      if (Re >= 0) {
        S.value = Re;
        return;
      }
      const lt = {
        name: J(String((Z == null ? void 0 : Z.name) || "output"), `output_${R.value.outputs.length + 1}`),
        display_name: String((Z == null ? void 0 : Z.name) || `Output ${R.value.outputs.length + 1}`),
        type: le(Z == null ? void 0 : Z.type),
        node_id: String(X.id),
        selector: Qe
      };
      R.value.outputs.push(lt), S.value = R.value.outputs.length - 1, $.value = null;
    }
    function de(X) {
      var Qe, Re, lt;
      if (!r.value) {
        T.value = null, I.value = null;
        return;
      }
      const Z = Oe(X);
      if (!Z) {
        T.value = null, I.value = null;
        return;
      }
      if (Z.kind === "input") {
        const et = Array.isArray(Z.node.widgets) ? Z.node.widgets.indexOf(Z.widget) : -1, pt = E(((Qe = ke(Z.node.id, et)) == null ? void 0 : Qe.getBoundingClientRect()) ?? ie({
          node_id: String(Z.node.id),
          widget_idx: et >= 0 ? et : void 0
        }));
        if (!pt) {
          T.value = null, I.value = null;
          return;
        }
        T.value = {
          kind: "input",
          label: `${((Re = Z.widget) == null ? void 0 : Re.name) || "widget"} · Node ${Z.node.id}`
        }, I.value = { kind: "input", style: pt };
        return;
      }
      const ve = E(F(Z.node));
      if (!ve) {
        T.value = null, I.value = null;
        return;
      }
      T.value = {
        kind: "output",
        label: `${((lt = Z.output) == null ? void 0 : lt.name) || Z.node.title || Z.node.type || "output"} · Node ${Z.node.id}`
      }, I.value = { kind: "output", style: ve };
    }
    function We(X) {
      var Qe, Re, lt;
      if (!r.value || !w.value || X.button !== 0) return;
      const Z = Oe(X);
      if (!Z) return;
      const ve = (Qe = t.comfyApp) == null ? void 0 : Qe.canvas;
      if (ve) {
        if (Z.kind === "input") {
          X.preventDefault(), X.stopImmediatePropagation(), X.stopPropagation(), Array.isArray(ve.graph_mouse) && (ve.graph_mouse[0] = Z.canvasX, ve.graph_mouse[1] = Z.canvasY), (Re = ve.selectNode) == null || Re.call(ve, Z.node, !1), ee(Z.node, Z.widget);
          return;
        }
        X.preventDefault(), X.stopImmediatePropagation(), X.stopPropagation(), Array.isArray(ve.graph_mouse) && (ve.graph_mouse[0] = Z.canvasX, ve.graph_mouse[1] = Z.canvasY), (lt = ve.selectNode) == null || lt.call(ve, Z.node, !1), V(Z.node, Z.output);
      }
    }
    function Be() {
      document.addEventListener("pointerdown", We, !0), document.addEventListener("pointermove", de, !0);
    }
    function we() {
      document.removeEventListener("pointerdown", We, !0), document.removeEventListener("pointermove", de, !0);
    }
    async function se() {
      if (c.value) {
        u.value = !0, v.value = null;
        try {
          p.value = await n(c.value), w.value = Q(p.value.execution_contract);
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Ke() {
      if (!(!w.value || !c.value)) {
        d.value = !0, v.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = Q(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ae({ reopenPanel: !0 });
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to save workflow contract";
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
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to delete workflow contract";
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
    function Ae(X) {
      r.value = !1, T.value = null, I.value = null, k.value = !1, X != null && X.reopenPanel && De();
    }
    async function He(X) {
      var Qe, Re;
      const ve = (Re = (Qe = X.detail) == null ? void 0 : Qe.workflowName) == null ? void 0 : Re.trim();
      ve && (c.value = ve, $.value = null, S.value = null, g.value = !1, r.value = !0, await se());
    }
    function kt(X) {
      if (X.key === "Escape" && r.value) {
        if (k.value) {
          k.value = !1;
          return;
        }
        Ae({ reopenPanel: !0 });
      }
    }
    function Ut() {
      if (P != null) return;
      const X = () => {
        if (x.value += 1, !r.value) {
          P = null;
          return;
        }
        P = window.requestAnimationFrame(X);
      };
      P = window.requestAnimationFrame(X);
    }
    function Gt() {
      P != null && (window.cancelAnimationFrame(P), P = null);
    }
    return bt(r, (X) => {
      X ? (Be(), Ut()) : (we(), Gt());
    }), dt(() => {
      window.addEventListener("comfygit:open-io-mapping", He), window.addEventListener("keydown", kt);
    }), To(() => {
      we(), Gt(), window.removeEventListener("comfygit:open-io-mapping", He), window.removeEventListener("keydown", kt);
    }), (X, Z) => r.value ? (o(), i("div", L7, [
      s("div", N7, [
        (o(!0), i(W, null, he($e.value, (ve) => (o(), i("div", {
          key: ve.key,
          class: Ve(["io-highlight", "io-highlight-input", { active: ve.active }]),
          style: Wt(ve.style)
        }, null, 6))), 128)),
        (o(!0), i(W, null, he(Ce.value, (ve) => (o(), i("div", {
          key: ve.key,
          class: Ve(["io-highlight", "io-highlight-output", { active: ve.active }]),
          style: Wt(ve.style)
        }, null, 6))), 128)),
        I.value ? (o(), i("div", {
          key: 0,
          class: Ve(["io-highlight", I.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Wt(I.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", U7, [
        s("div", O7, [
          Z[8] || (Z[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", A7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          T.value ? (o(), i("div", z7, " Hovering " + m(T.value.kind) + ": " + m(T.value.label), 1)) : y("", !0)
        ]),
        s("div", F7, [
          b(Ue, {
            size: "sm",
            variant: "secondary",
            onClick: Z[0] || (Z[0] = (ve) => Ae({ reopenPanel: !0 }))
          }, {
            default: h(() => [...Z[9] || (Z[9] = [
              C(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", B7, [
        s("div", V7, [
          u.value ? (o(), i("div", W7, " Loading workflow contract... ")) : v.value ? (o(), i("div", G7, m(v.value), 1)) : w.value ? (o(), i(W, { key: 2 }, [
            s("section", j7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: Z[1] || (Z[1] = (ve) => g.value = !g.value)
              }, [
                Z[10] || (Z[10] = s("span", null, "Contract Details", -1)),
                s("span", H7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (o(), i("div", q7, [
                b(qt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(Dt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": te
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(qt, { label: "Display Name" }, {
                  default: h(() => [
                    b(Dt, {
                      modelValue: R.value.display_name,
                      "onUpdate:modelValue": Z[2] || (Z[2] = (ve) => R.value.display_name = ve),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(qt, { label: "Description" }, {
                  default: h(() => [
                    b(On, {
                      modelValue: R.value.description,
                      "onUpdate:modelValue": Z[3] || (Z[3] = (ve) => R.value.description = ve),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", K7, [
              s("span", J7, m(A.value), 1),
              s("span", Q7, m(R.value.inputs.length) + " input" + m(R.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", Y7, m(R.value.outputs.length) + " output" + m(R.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", X7, [
              s("div", Z7, [
                b(yn, { variant: "section" }, {
                  default: h(() => [...Z[11] || (Z[11] = [
                    C("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              R.value.inputs.length ? y("", !0) : (o(), i("div", eD, " No inputs configured. ")),
              (o(!0), i(W, null, he(R.value.inputs, (ve, Qe) => (o(), i("div", {
                key: `input-${Qe}`,
                class: Ve(["item-card", { selected: $.value === Qe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Re) => Fe(Qe)
                }, [
                  s("div", null, [
                    s("div", sD, m(ve.name || `Input ${Qe + 1}`), 1),
                    s("div", nD, [
                      C(" Node " + m(ve.node_id || "?"), 1),
                      ve.widget_idx !== void 0 ? (o(), i(W, { key: 0 }, [
                        C(" · Widget " + m(ve.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", oD, [
                      s("span", null, m(ve.type || "string"), 1),
                      s("span", null, m(ve.required ? "required" : "optional"), 1),
                      ve.default !== void 0 && ve.default !== "" ? (o(), i("span", aD, "default " + m(pe(ve.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: $t((Re) => xe(Qe), ["stop"])
                  }, {
                    default: h(() => [...Z[12] || (Z[12] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, tD),
                $.value === Qe ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: Z[4] || (Z[4] = $t(() => {
                  }, ["stop"]))
                }, [
                  b(qt, { label: "Name" }, {
                    default: h(() => [
                      b(Dt, {
                        modelValue: ve.name,
                        "onUpdate:modelValue": (Re) => ve.name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Dt, {
                        modelValue: ve.display_name,
                        "onUpdate:modelValue": (Re) => ve.display_name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Type" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": ve.type,
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => ve.type = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Required" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": ve.required ? "true" : "false",
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => ve.required = Re === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, {
                    class: Ve({ "item-grid-full": ve.type === "string" || ve.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      ve.type === "string" ? (o(), D(On, {
                        key: 0,
                        "model-value": ne(ve.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Re) => ve.default = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (o(), D(Dt, {
                        key: 1,
                        modelValue: ve.default,
                        "onUpdate:modelValue": (Re) => ve.default = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ae(ve.type) ? (o(), D(qt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(Dt, {
                        "model-value": ue(ve.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => ve.min = q(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ae(ve.type) ? (o(), D(qt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(Dt, {
                        "model-value": ue(ve.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => ve.max = q(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  H(ve.type) ? (o(), D(qt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(On, {
                        "model-value": N(ve.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Re) => ve.enum_values = j(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", lD, [
              s("div", iD, [
                b(yn, { variant: "section" }, {
                  default: h(() => [...Z[13] || (Z[13] = [
                    C("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              R.value.outputs.length ? y("", !0) : (o(), i("div", rD, " No outputs configured. ")),
              (o(!0), i(W, null, he(R.value.outputs, (ve, Qe) => (o(), i("div", {
                key: `output-${Qe}`,
                class: Ve(["item-card", { selected: S.value === Qe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Re) => Le(Qe)
                }, [
                  s("div", null, [
                    s("div", uD, m(ve.name || `Output ${Qe + 1}`), 1),
                    s("div", dD, [
                      C(" Node " + m(ve.node_id || "?"), 1),
                      ve.selector ? (o(), i(W, { key: 0 }, [
                        C(" · " + m(ve.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", mD, [
                      s("span", null, m(ve.type || "file"), 1)
                    ])
                  ]),
                  b(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: $t((Re) => ye(Qe), ["stop"])
                  }, {
                    default: h(() => [...Z[14] || (Z[14] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, cD),
                S.value === Qe ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: Z[5] || (Z[5] = $t(() => {
                  }, ["stop"]))
                }, [
                  b(qt, { label: "Name" }, {
                    default: h(() => [
                      b(Dt, {
                        modelValue: ve.name,
                        "onUpdate:modelValue": (Re) => ve.name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Dt, {
                        modelValue: ve.display_name,
                        "onUpdate:modelValue": (Re) => ve.display_name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(qt, { label: "Type" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": ve.type,
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => ve.type = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", fD, [
          s("div", vD, [
            b(Ue, {
              variant: "secondary",
              onClick: Z[6] || (Z[6] = (ve) => Ae({ reopenPanel: !0 }))
            }, {
              default: h(() => [...Z[15] || (Z[15] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", pD, [
            b(Ue, {
              variant: "danger",
              disabled: !B.value,
              loading: f.value,
              onClick: Ne
            }, {
              default: h(() => [...Z[16] || (Z[16] = [
                C(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Ue, {
              variant: "primary",
              loading: d.value,
              onClick: Ke
            }, {
              default: h(() => [...Z[17] || (Z[17] = [
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
        onCancel: Z[7] || (Z[7] = (ve) => k.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), hD = /* @__PURE__ */ Te(gD, [["__scopeId", "data-v-13515b27"]]), yD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', wD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', _D = {
  comfy: yD,
  phosphor: wD
}, Fl = "comfy", Ac = "comfygit-theme";
let fn = null, zc = Fl;
function kD() {
  try {
    const e = localStorage.getItem(Ac);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Fl;
}
function Fc(e = Fl) {
  fn && fn.remove(), fn = document.createElement("style"), fn.id = "comfygit-theme-styles", fn.setAttribute("data-theme", e), fn.textContent = _D[e], document.head.appendChild(fn), document.body.setAttribute("data-comfygit-theme", e), zc = e;
  try {
    localStorage.setItem(Ac, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function bD() {
  return zc;
}
function $D(e) {
  Fc(e);
}
function CD(e) {
  var r;
  const { ui_id: t, state: n } = e || {}, a = (n == null ? void 0 : n.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Vi = "ComfyGit.DevAutoReload", Bc = "ComfyGit.DevAutoReload.PanelOpen";
function xD() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ka() {
  const e = xD();
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
  if (ka())
    try {
      sessionStorage.setItem(Bc, e ? "true" : "false");
    } catch {
    }
}
function SD() {
  if (!ka()) return !1;
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
async function ID(e) {
  if (!ka()) return;
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
const ED = "./comfygit-panel.css", TD = "./comfygit-panel.js", Wc = new URL(ED, import.meta.url).href, MD = new URL(TD, import.meta.url).href, Bl = document.createElement("link");
Bl.rel = "stylesheet";
Bl.href = Wc;
document.head.appendChild(Bl);
const PD = kD();
Fc(PD);
ka() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), $D(e);
  },
  getTheme: () => {
    const e = bD();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = Us;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = Us;
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
let zs = null, ho = null, ps = null, yo = null, eo = null, Gi = null, to = null, ji = null, so = null, Hi = null;
const An = _(null);
let So = "no_workspace", Gc = !1;
async function lo(e = !1) {
  const t = jn();
  if (!t) return null;
  try {
    const n = e ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status", a = await t.fetchApi(n);
    a.ok && (An.value = await a.json());
  } catch {
  }
}
async function ml() {
  const e = jn();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const n = await t.json();
        So = n.state, Gc = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function fl() {
  var t;
  if (So === "managed" || !Gc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const n of e)
    if (((t = n.textContent) == null ? void 0 : t.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function RD() {
  if (!An.value) return !1;
  const e = An.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || An.value.has_changes;
}
function no(e) {
  io(), Vc(!0), zs = document.createElement("div"), zs.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", zs.appendChild(t), zs.addEventListener("click", (a) => {
    a.target === zs && io();
  });
  const n = (a) => {
    a.key === "Escape" && (io(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ho = Po({
    render: () => Gn(CP, {
      initialView: e,
      onClose: io,
      onStatusUpdate: async (a) => {
        An.value = a, Mn(), await ml(), Qo(), fl();
      }
    })
  }), ho.mount(t), document.body.appendChild(zs);
}
function io() {
  Vc(!1), ho && (ho.unmount(), ho = null), zs && (zs.remove(), zs = null);
}
function qi(e) {
  oo(), ps = document.createElement("div"), ps.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  ps.style.position = "fixed", ps.style.top = `${t.bottom + 8}px`, ps.style.right = `${window.innerWidth - t.right}px`, ps.style.zIndex = "10001";
  const n = (l) => {
    ps && !ps.contains(l.target) && l.target !== e && (oo(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const a = (l) => {
    l.key === "Escape" && (oo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), yo = Po({
    render: () => Gn(Lc, {
      status: An.value,
      onClose: oo,
      onCommitted: (l) => {
        oo(), DD(l.success, l.message), lo().then(Mn);
      }
    })
  }), yo.mount(ps), document.body.appendChild(ps);
}
function oo() {
  yo && (yo.unmount(), yo = null), ps && (ps.remove(), ps = null);
}
function DD(e, t) {
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
function LD() {
  eo || (eo = document.createElement("div"), eo.className = "comfygit-download-queue-root", Gi = Po({
    render: () => Gn(yR)
  }), Gi.mount(eo), document.body.appendChild(eo), console.log("[ComfyGit] Model download queue mounted"));
}
function ND() {
  to || (to = document.createElement("div"), to.className = "comfygit-missing-resources-root", ji = Po({
    render: () => Gn(D7)
  }), ji.mount(to), document.body.appendChild(to), console.log("[ComfyGit] Missing resources popup mounted"));
}
function UD() {
  so || (so = document.createElement("div"), so.className = "comfygit-io-mapping-root", Hi = Po({
    render: () => Gn(hD, {
      comfyApp: Us
    })
  }), Hi.mount(so), document.body.appendChild(so), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let rs = null;
function Mn() {
  if (!rs) return;
  const e = rs.querySelector(".commit-indicator");
  e && (e.style.display = RD() ? "block" : "none");
}
function Qo() {
  if (!rs) return;
  const e = So !== "managed";
  rs.disabled = e, rs.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
Us.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => no()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        rs && !rs.disabled && qi(rs);
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
    if (So === "managed")
      try {
        await Promise.all([
          Us.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Us.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (n) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", n);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (So !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => no(), rs = document.createElement("button"), rs.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", rs.innerHTML = 'Commit <span class="commit-indicator"></span>', rs.title = "Quick Commit", rs.onclick = () => qi(rs), e.appendChild(t), e.appendChild(rs), (r = (l = Us.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Us.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), LD(), ND(), UD(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      no(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      io();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await lo(), Mn(), Qo();
    }));
    const { loadPendingDownloads: n } = Hn();
    n(), await Promise.all([lo(), ml()]), Mn(), Qo(), fl(), SD() && setTimeout(() => {
      zs || no();
    }, 100), ID([
      { name: "panel script", url: MD },
      { name: "panel stylesheet", url: Wc }
    ]), setTimeout(fl, 100), setInterval(async () => {
      await Promise.all([lo(), ml()]), Mn(), Qo();
    }, 3e4);
    const a = jn();
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
          g.remove(), no("debug-env");
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
                Us.refreshComboInNodes && (await Us.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", x.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", T.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (O) {
                console.error("[ComfyGit] Failed to refresh nodes:", O), k.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", T.style.display = "none";
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
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await lo(), Mn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = CD(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        f(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
