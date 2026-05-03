var Hc = Object.defineProperty;
var qc = (e, t, n) => t in e ? Hc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Lo = (e, t, n) => qc(e, typeof t != "symbol" ? t + "" : t, n);
import { app as Ns } from "../../scripts/app.js";
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
const Et = {}, Mn = [], zs = () => {
}, qi = () => !1, ca = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), pl = (e) => e.startsWith("onUpdate:"), Bt = Object.assign, gl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Kc = Object.prototype.hasOwnProperty, _t = (e, t) => Kc.call(e, t), st = Array.isArray, Pn = (e) => Io(e) === "[object Map]", Bn = (e) => Io(e) === "[object Set]", Wl = (e) => Io(e) === "[object Date]", at = (e) => typeof e == "function", Nt = (e) => typeof e == "string", Ss = (e) => typeof e == "symbol", xt = (e) => e !== null && typeof e == "object", Ki = (e) => (xt(e) || at(e)) && at(e.then) && at(e.catch), Ji = Object.prototype.toString, Io = (e) => Ji.call(e), Jc = (e) => Io(e).slice(8, -1), Qi = (e) => Io(e) === "[object Object]", hl = (e) => Nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = /* @__PURE__ */ vl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ua = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Qc = /-\w/g, _s = ua(
  (e) => e.replace(Qc, (t) => t.slice(1).toUpperCase())
), Yc = /\B([A-Z])/g, rn = ua(
  (e) => e.replace(Yc, "-$1").toLowerCase()
), da = ua((e) => e.charAt(0).toUpperCase() + e.slice(1)), Oa = ua(
  (e) => e ? `on${da(e)}` : ""
), on = (e, t) => !Object.is(e, t), Vo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yi = (e, t, n, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: n
  });
}, ma = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xc = (e) => {
  const t = Nt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Gl;
const fa = () => Gl || (Gl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = Nt(a) ? su(a) : Wt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Nt(e) || xt(e))
    return e;
}
const Zc = /;(?![^(]*\))/g, eu = /:([^]+)/, tu = /\/\*[^]*?\*\//g;
function su(e) {
  const t = {};
  return e.replace(tu, "").split(Zc).forEach((n) => {
    if (n) {
      const a = n.split(eu);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (Nt(e))
    t = e;
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const a = Be(e[n]);
      a && (t += a + " ");
    }
  else if (xt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const nu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ou = /* @__PURE__ */ vl(nu);
function Xi(e) {
  return !!e || e === "";
}
function au(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let a = 0; n && a < e.length; a++)
    n = yn(e[a], t[a]);
  return n;
}
function yn(e, t) {
  if (e === t) return !0;
  let n = Wl(e), a = Wl(t);
  if (n || a)
    return n && a ? e.getTime() === t.getTime() : !1;
  if (n = Ss(e), a = Ss(t), n || a)
    return e === t;
  if (n = st(e), a = st(t), n || a)
    return n && a ? au(e, t) : !1;
  if (n = xt(e), a = xt(t), n || a) {
    if (!n || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !yn(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yl(e, t) {
  return e.findIndex((n) => yn(n, t));
}
const Zi = (e) => !!(e && e.__v_isRef === !0), m = (e) => Nt(e) ? e : e == null ? "" : st(e) || xt(e) && (e.toString === Ji || !at(e.toString)) ? Zi(e) ? m(e.value) : JSON.stringify(e, er, 2) : String(e), er = (e, t) => Zi(t) ? er(e, t.value) : Pn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [a, l], r) => (n[Aa(a, r) + " =>"] = l, n),
    {}
  )
} : Bn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Aa(n))
} : Ss(t) ? Aa(t) : xt(t) && !st(t) && !Qi(t) ? String(t) : t, Aa = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ss(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let us;
class lu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = us, !t && us && (this.index = (us.scopes || (us.scopes = [])).push(
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
      const n = us;
      try {
        return us = this, t();
      } finally {
        us = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = us, us = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (us = this.prevScope, this.prevScope = void 0);
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
function iu() {
  return us;
}
let Tt;
const za = /* @__PURE__ */ new WeakSet();
class tr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, us && us.active && us.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || nr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jl(this), or(this);
    const t = Tt, n = Cs;
    Tt = this, Cs = !0;
    try {
      return this.fn();
    } finally {
      ar(this), Tt = t, Cs = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        kl(t);
      this.deps = this.depsTail = void 0, jl(this), this.onStop && this.onStop(), this.flags &= -2;
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
let sr = 0, co, uo;
function nr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = uo, uo = e;
    return;
  }
  e.next = co, co = e;
}
function wl() {
  sr++;
}
function _l() {
  if (--sr > 0)
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
function or(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ar(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), kl(a), ru(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function Ya(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wo) || (e.globalVersion = wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ya(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Tt, a = Cs;
  Tt = e, Cs = !0;
  try {
    or(e);
    const l = e.fn(e._value);
    (t.version === 0 || on(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    Tt = n, Cs = a, ar(e), e.flags &= -3;
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
function ru(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Cs = !0;
const ir = [];
function Js() {
  ir.push(Cs), Cs = !1;
}
function Qs() {
  const e = ir.pop();
  Cs = e === void 0 ? !0 : e;
}
function jl(e) {
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
class cu {
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
    if (!Tt || !Cs || Tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Tt)
      n = this.activeLink = new cu(Tt, this), Tt.deps ? (n.prevDep = Tt.depsTail, Tt.depsTail.nextDep = n, Tt.depsTail = n) : Tt.deps = Tt.depsTail = n, rr(n);
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
function rr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        rr(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xa = /* @__PURE__ */ new WeakMap(), pn = Symbol(
  ""
), Za = Symbol(
  ""
), _o = Symbol(
  ""
);
function Zt(e, t, n) {
  if (Cs && Tt) {
    let a = Xa.get(e);
    a || Xa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new bl()), l.map = a, l.key = n), l.track();
  }
}
function js(e, t, n, a, l, r) {
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
        (w === "length" || w === _o || !Ss(w) && w >= v) && u(p);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), f && u(c.get(_o)), t) {
        case "add":
          d ? f && u(c.get("length")) : (u(c.get(pn)), Pn(e) && u(c.get(Za)));
          break;
        case "delete":
          d || (u(c.get(pn)), Pn(e) && u(c.get(Za)));
          break;
        case "set":
          Pn(e) && u(c.get(pn));
          break;
      }
  }
  _l();
}
function $n(e) {
  const t = yt(e);
  return t === e ? t : (Zt(t, "iterate", _o), ys(e) ? t : t.map(Is));
}
function va(e) {
  return Zt(e = yt(e), "iterate", _o), e;
}
function tn(e, t) {
  return Ys(e) ? gn(e) ? An(Is(t)) : An(t) : Is(t);
}
const uu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fa(this, Symbol.iterator, (e) => tn(this, e));
  },
  concat(...e) {
    return $n(this).concat(
      ...e.map((t) => st(t) ? $n(t) : t)
    );
  },
  entries() {
    return Fa(this, "entries", (e) => (e[1] = tn(this, e[1]), e));
  },
  every(e, t) {
    return Vs(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Vs(
      this,
      "filter",
      e,
      t,
      (n) => n.map((a) => tn(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Vs(
      this,
      "find",
      e,
      t,
      (n) => tn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Vs(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Vs(
      this,
      "findLast",
      e,
      t,
      (n) => tn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Vs(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Vs(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ba(this, "includes", e);
  },
  indexOf(...e) {
    return Ba(this, "indexOf", e);
  },
  join(e) {
    return $n(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ba(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Vs(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qn(this, "pop");
  },
  push(...e) {
    return Qn(this, "push", e);
  },
  reduce(e, ...t) {
    return Hl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hl(this, "reduceRight", e, t);
  },
  shift() {
    return Qn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Vs(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qn(this, "splice", e);
  },
  toReversed() {
    return $n(this).toReversed();
  },
  toSorted(e) {
    return $n(this).toSorted(e);
  },
  toSpliced(...e) {
    return $n(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qn(this, "unshift", e);
  },
  values() {
    return Fa(this, "values", (e) => tn(this, e));
  }
};
function Fa(e, t, n) {
  const a = va(e), l = a[t]();
  return a !== e && !ys(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = n(r.value)), r;
  }), l;
}
const du = Array.prototype;
function Vs(e, t, n, a, l, r) {
  const c = va(e), u = c !== e && !ys(e), d = c[t];
  if (d !== du[t]) {
    const p = d.apply(e, r);
    return u ? Is(p) : p;
  }
  let f = n;
  c !== e && (u ? f = function(p, w) {
    return n.call(this, tn(e, p), w, e);
  } : n.length > 2 && (f = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const v = d.call(c, f, a);
  return u && l ? l(v) : v;
}
function Hl(e, t, n, a) {
  const l = va(e);
  let r = n;
  return l !== e && (ys(e) ? n.length > 3 && (r = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return n.call(this, c, tn(e, u), d, e);
  }), l[t](r, ...a);
}
function Ba(e, t, n) {
  const a = yt(e);
  Zt(a, "iterate", _o);
  const l = a[t](...n);
  return (l === -1 || l === !1) && xl(n[0]) ? (n[0] = yt(n[0]), a[t](...n)) : l;
}
function Qn(e, t, n = []) {
  Js(), wl();
  const a = yt(e)[t].apply(e, n);
  return _l(), Qs(), a;
}
const mu = /* @__PURE__ */ vl("__proto__,__v_isRef,__isVue"), cr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ss)
);
function fu(e) {
  Ss(e) || (e = String(e));
  const t = yt(this);
  return Zt(t, "has", e), t.hasOwnProperty(e);
}
class ur {
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
      return a === (l ? r ? $u : vr : r ? fr : mr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const c = st(t);
    if (!l) {
      let d;
      if (c && (d = uu[n]))
        return d;
      if (n === "hasOwnProperty")
        return fu;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ns(t) ? t : a
    );
    if ((Ss(n) ? cr.has(n) : mu(n)) || (l || Zt(t, "get", n), r))
      return u;
    if (ns(u)) {
      const d = c && hl(n) ? u : u.value;
      return l && xt(d) ? Yo(d) : d;
    }
    return xt(u) ? l ? Yo(u) : kn(u) : u;
  }
}
class dr extends ur {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, l) {
    let r = t[n];
    const c = st(t) && hl(n);
    if (!this._isShallow) {
      const f = Ys(r);
      if (!ys(a) && !Ys(a) && (r = yt(r), a = yt(a)), !c && ns(r) && !ns(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(n) < t.length : _t(t, n), d = Reflect.set(
      t,
      n,
      a,
      ns(t) ? t : l
    );
    return t === yt(l) && (u ? on(a, r) && js(t, "set", n, a) : js(t, "add", n, a)), d;
  }
  deleteProperty(t, n) {
    const a = _t(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && js(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Ss(n) || !cr.has(n)) && Zt(t, "has", n), a;
  }
  ownKeys(t) {
    return Zt(
      t,
      "iterate",
      st(t) ? "length" : pn
    ), Reflect.ownKeys(t);
  }
}
class vu extends ur {
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
const pu = /* @__PURE__ */ new dr(), gu = /* @__PURE__ */ new vu(), hu = /* @__PURE__ */ new dr(!0);
const el = (e) => e, No = (e) => Reflect.getPrototypeOf(e);
function yu(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, r = yt(l), c = Pn(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, f = l[e](...a), v = n ? el : t ? An : Is;
    return !t && Zt(
      r,
      "iterate",
      d ? Za : pn
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
function wu(e, t) {
  const n = {
    get(l) {
      const r = this.__v_raw, c = yt(r), u = yt(l);
      e || (on(l, u) && Zt(c, "get", l), Zt(c, "get", u));
      const { has: d } = No(c), f = t ? el : e ? An : Is;
      if (d.call(c, l))
        return f(r.get(l));
      if (d.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Zt(yt(l), "iterate", pn), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = yt(r), u = yt(l);
      return e || (on(l, u) && Zt(c, "has", l), Zt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = yt(u), f = t ? el : e ? An : Is;
      return !e && Zt(d, "iterate", pn), u.forEach((v, p) => l.call(r, f(v), f(p), c));
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
        !t && !ys(l) && !Ys(l) && (l = yt(l));
        const r = yt(this);
        return No(r).has.call(r, l) || (r.add(l), js(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ys(r) && !Ys(r) && (r = yt(r));
        const c = yt(this), { has: u, get: d } = No(c);
        let f = u.call(c, l);
        f || (l = yt(l), f = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), f ? on(r, v) && js(c, "set", l, r) : js(c, "add", l, r), this;
      },
      delete(l) {
        const r = yt(this), { has: c, get: u } = No(r);
        let d = c.call(r, l);
        d || (l = yt(l), d = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return d && js(r, "delete", l, void 0), f;
      },
      clear() {
        const l = yt(this), r = l.size !== 0, c = l.clear();
        return r && js(
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
    n[l] = yu(l, e, t);
  }), n;
}
function $l(e, t) {
  const n = wu(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    _t(n, l) && l in a ? n : a,
    l,
    r
  );
}
const _u = {
  get: /* @__PURE__ */ $l(!1, !1)
}, ku = {
  get: /* @__PURE__ */ $l(!1, !0)
}, bu = {
  get: /* @__PURE__ */ $l(!0, !1)
};
const mr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), $u = /* @__PURE__ */ new WeakMap();
function Cu(e) {
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
function xu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cu(Jc(e));
}
function kn(e) {
  return Ys(e) ? e : Cl(
    e,
    !1,
    pu,
    _u,
    mr
  );
}
function Su(e) {
  return Cl(
    e,
    !1,
    hu,
    ku,
    fr
  );
}
function Yo(e) {
  return Cl(
    e,
    !0,
    gu,
    bu,
    vr
  );
}
function Cl(e, t, n, a, l) {
  if (!xt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = xu(e);
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
function gn(e) {
  return Ys(e) ? gn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ys(e) {
  return !!(e && e.__v_isReadonly);
}
function ys(e) {
  return !!(e && e.__v_isShallow);
}
function xl(e) {
  return e ? !!e.__v_raw : !1;
}
function yt(e) {
  const t = e && e.__v_raw;
  return t ? yt(t) : e;
}
function Iu(e) {
  return !_t(e, "__v_skip") && Object.isExtensible(e) && Yi(e, "__v_skip", !0), e;
}
const Is = (e) => xt(e) ? kn(e) : e, An = (e) => xt(e) ? Yo(e) : e;
function ns(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Eu(e, !1);
}
function Eu(e, t) {
  return ns(e) ? e : new Tu(e, t);
}
class Tu {
  constructor(t, n) {
    this.dep = new bl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : yt(t), this._value = n ? t : Is(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || ys(t) || Ys(t);
    t = a ? t : yt(t), on(t, n) && (this._rawValue = t, this._value = a ? t : Is(t), this.dep.trigger());
  }
}
function it(e) {
  return ns(e) ? e.value : e;
}
const Mu = {
  get: (e, t, n) => t === "__v_raw" ? e : it(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t];
    return ns(l) && !ns(n) ? (l.value = n, !0) : Reflect.set(e, t, n, a);
  }
};
function pr(e) {
  return gn(e) ? e : new Proxy(e, Mu);
}
class Pu {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new bl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Tt !== this)
      return nr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return lr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ru(e, t, n = !1) {
  let a, l;
  return at(e) ? a = e : (a = e.get, l = e.set), new Pu(a, l, n);
}
const Oo = {}, Xo = /* @__PURE__ */ new WeakMap();
let fn;
function Du(e, t = !1, n = fn) {
  if (n) {
    let a = Xo.get(n);
    a || Xo.set(n, a = []), a.push(e);
  }
}
function Lu(e, t, n = Et) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = n, f = (P) => l ? P : ys(P) || l === !1 || l === 0 ? Hs(P, 1) : Hs(P);
  let v, p, w, g, k = !1, $ = !1;
  if (ns(e) ? (p = () => e.value, k = ys(e)) : gn(e) ? (p = () => f(e), k = !0) : st(e) ? ($ = !0, k = e.some((P) => gn(P) || ys(P)), p = () => e.map((P) => {
    if (ns(P))
      return P.value;
    if (gn(P))
      return f(P);
    if (at(P))
      return d ? d(P, 2) : P();
  })) : at(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Js();
      try {
        w();
      } finally {
        Qs();
      }
    }
    const P = fn;
    fn = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      fn = P;
    }
  } : p = zs, t && l) {
    const P = p, O = l === !0 ? 1 / 0 : l;
    p = () => Hs(P(), O);
  }
  const S = iu(), C = () => {
    v.stop(), S && S.active && gl(S.effects, v);
  };
  if (r && t) {
    const P = t;
    t = (...O) => {
      P(...O), C();
    };
  }
  let I = $ ? new Array(e.length).fill(Oo) : Oo;
  const E = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (t) {
        const O = v.run();
        if (l || k || ($ ? O.some((U, F) => on(U, I[F])) : on(O, I))) {
          w && w();
          const U = fn;
          fn = v;
          try {
            const F = [
              O,
              // pass undefined as the old value when it's changed for the first time
              I === Oo ? void 0 : $ && I[0] === Oo ? [] : I,
              g
            ];
            I = O, d ? d(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            fn = U;
          }
        }
      } else
        v.run();
  };
  return u && u(E), v = new tr(p), v.scheduler = c ? () => c(E, !1) : E, g = (P) => Du(P, !1, v), w = v.onStop = () => {
    const P = Xo.get(v);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const O of P) O();
      Xo.delete(v);
    }
  }, t ? a ? E(!0) : I = v.run() : c ? c(E.bind(null, !0), !0) : v.run(), C.pause = v.pause.bind(v), C.resume = v.resume.bind(v), C.stop = C, C;
}
function Hs(e, t = 1 / 0, n) {
  if (t <= 0 || !xt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, ns(e))
    Hs(e.value, t, n);
  else if (st(e))
    for (let a = 0; a < e.length; a++)
      Hs(e[a], t, n);
  else if (Bn(e) || Pn(e))
    e.forEach((a) => {
      Hs(a, t, n);
    });
  else if (Qi(e)) {
    for (const a in e)
      Hs(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Hs(e[a], t, n);
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
function Es(e, t, n, a) {
  if (at(e)) {
    const l = Eo(e, t, n, a);
    return l && Ki(l) && l.catch((r) => {
      pa(r, t, n);
    }), l;
  }
  if (st(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(Es(e[r], t, n, a));
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
      Js(), Eo(r, null, 10, [
        e,
        d,
        f
      ]), Qs();
      return;
    }
  }
  Nu(e, n, l, a, c);
}
function Nu(e, t, n, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const rs = [];
let Ls = -1;
const Rn = [];
let sn = null, Sn = 0;
const gr = /* @__PURE__ */ Promise.resolve();
let Zo = null;
function qt(e) {
  const t = Zo || gr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Uu(e) {
  let t = Ls + 1, n = rs.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = rs[a], r = ko(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Sl(e) {
  if (!(e.flags & 1)) {
    const t = ko(e), n = rs[rs.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ko(n) ? rs.push(e) : rs.splice(Uu(t), 0, e), e.flags |= 1, hr();
  }
}
function hr() {
  Zo || (Zo = gr.then(wr));
}
function Ou(e) {
  st(e) ? Rn.push(...e) : sn && e.id === -1 ? sn.splice(Sn + 1, 0, e) : e.flags & 1 || (Rn.push(e), e.flags |= 1), hr();
}
function ql(e, t, n = Ls + 1) {
  for (; n < rs.length; n++) {
    const a = rs[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      rs.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function yr(e) {
  if (Rn.length) {
    const t = [...new Set(Rn)].sort(
      (n, a) => ko(n) - ko(a)
    );
    if (Rn.length = 0, sn) {
      sn.push(...t);
      return;
    }
    for (sn = t, Sn = 0; Sn < sn.length; Sn++) {
      const n = sn[Sn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    sn = null, Sn = 0;
  }
}
const ko = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wr(e) {
  try {
    for (Ls = 0; Ls < rs.length; Ls++) {
      const t = rs[Ls];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Eo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ls < rs.length; Ls++) {
      const t = rs[Ls];
      t && (t.flags &= -2);
    }
    Ls = -1, rs.length = 0, yr(), Zo = null, (rs.length || Rn.length) && wr();
  }
}
let Kt = null, _r = null;
function ea(e) {
  const t = Kt;
  return Kt = e, _r = e && e.type.__scopeId || null, t;
}
function h(e, t = Kt, n) {
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
  if (Kt === null)
    return e;
  const n = _a(Kt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = Et] = t[l];
    r && (at(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Hs(c), a.push({
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
function cn(e, t, n, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Js(), Es(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Qs());
  }
}
const kr = Symbol("_vte"), br = (e) => e.__isTeleport, mo = (e) => e && (e.disabled || e.disabled === ""), Kl = (e) => e && (e.defer || e.defer === ""), Jl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ql = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, tl = (e, t) => {
  const n = e && e.to;
  return Nt(n) ? t ? t(n) : null : n;
}, $r = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, a, l, r, c, u, d, f) {
    const {
      mc: v,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: k, createText: $, createComment: S }
    } = f, C = mo(t.props);
    let { shapeFlag: I, children: E, dynamicChildren: P } = t;
    if (e == null) {
      const O = t.el = $(""), U = t.anchor = $("");
      g(O, n, a), g(U, n, a);
      const F = (W, ce) => {
        I & 16 && v(
          E,
          W,
          ce,
          l,
          r,
          c,
          u,
          d
        );
      }, D = () => {
        const W = t.target = tl(t.props, k), ce = Cr(W, t, $, g);
        W && (c !== "svg" && Jl(W) ? c = "svg" : c !== "mathml" && Ql(W) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(W), C || (F(W, ce), Wo(t, !1)));
      };
      C && (F(n, U), Wo(t, !0)), Kl(t.props) ? (t.el.__isMounted = !1, ls(() => {
        D(), delete t.el.__isMounted;
      }, r)) : D();
    } else {
      if (Kl(t.props) && e.el.__isMounted === !1) {
        ls(() => {
          $r.process(
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
      const O = t.anchor = e.anchor, U = t.target = e.target, F = t.targetAnchor = e.targetAnchor, D = mo(e.props), W = D ? n : U, ce = D ? O : F;
      if (c === "svg" || Jl(U) ? c = "svg" : (c === "mathml" || Ql(U)) && (c = "mathml"), P ? (w(
        e.dynamicChildren,
        P,
        W,
        l,
        r,
        c,
        u
      ), Pl(e, t, !0)) : d || p(
        e,
        t,
        W,
        ce,
        l,
        r,
        c,
        u,
        !1
      ), C)
        D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ao(
          t,
          n,
          O,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const de = t.target = tl(
          t.props,
          k
        );
        de && Ao(
          t,
          de,
          null,
          f,
          0
        );
      } else D && Ao(
        t,
        U,
        F,
        f,
        1
      );
      Wo(t, C);
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
  hydrate: Au
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
function Au(e, t, n, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: f, createText: v }
}, p) {
  function w($, S, C, I) {
    S.anchor = p(
      c($),
      S,
      u($),
      n,
      a,
      l,
      r
    ), S.targetStart = C, S.targetAnchor = I;
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
        t.targetAnchor || Cr(g, t, v, f), p(
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
const cs = $r;
function Wo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Cr(e, t, n, a) {
  const l = t.targetStart = n(""), r = t.targetAnchor = n("");
  return l[kr] = r, e && (a(l, e), a(r, e)), r;
}
const Gs = Symbol("_leaveCb"), zo = Symbol("_enterCb");
function xr() {
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
const gs = [Function, Array], Sr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: gs,
  onEnter: gs,
  onAfterEnter: gs,
  onEnterCancelled: gs,
  // leave
  onBeforeLeave: gs,
  onLeave: gs,
  onAfterLeave: gs,
  onLeaveCancelled: gs,
  // appear
  onBeforeAppear: gs,
  onAppear: gs,
  onAfterAppear: gs,
  onAppearCancelled: gs
}, Ir = (e) => {
  const t = e.subTree;
  return t.component ? Ir(t.component) : t;
}, zu = {
  name: "BaseTransition",
  props: Sr,
  setup(e, { slots: t }) {
    const n = Dl(), a = xr();
    return () => {
      const l = t.default && Il(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = Er(l), c = yt(e), { mode: u } = c;
      if (a.isLeaving)
        return Va(r);
      const d = Yl(r);
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
      d.type !== ts && wn(d, f);
      let v = n.subTree && Yl(n.subTree);
      if (v && v.type !== ts && !vn(v, d) && Ir(n).type !== ts) {
        let p = bo(
          v,
          c,
          a,
          n
        );
        if (wn(v, p), u === "out-in" && d.type !== ts)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, v = void 0;
          }, Va(r);
        u === "in-out" && d.type !== ts ? p.delayLeave = (w, g, k) => {
          const $ = Tr(
            a,
            v
          );
          $[String(v.key)] = v, w[Gs] = () => {
            g(), w[Gs] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            k(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function Er(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ts) {
        t = n;
        break;
      }
  }
  return t;
}
const Fu = zu;
function Tr(e, t) {
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
    onAppear: C,
    onAfterAppear: I,
    onAppearCancelled: E
  } = t, P = String(e.key), O = Tr(n, e), U = (W, ce) => {
    W && Es(
      W,
      a,
      9,
      ce
    );
  }, F = (W, ce) => {
    const de = ce[1];
    U(W, ce), st(W) ? W.every((J) => J.length <= 1) && de() : W.length <= 1 && de();
  }, D = {
    mode: c,
    persisted: u,
    beforeEnter(W) {
      let ce = d;
      if (!n.isMounted)
        if (r)
          ce = S || d;
        else
          return;
      W[Gs] && W[Gs](
        !0
        /* cancelled */
      );
      const de = O[P];
      de && vn(e, de) && de.el[Gs] && de.el[Gs](), U(ce, [W]);
    },
    enter(W) {
      let ce = f, de = v, J = p;
      if (!n.isMounted)
        if (r)
          ce = C || f, de = I || v, J = E || p;
        else
          return;
      let ue = !1;
      const K = W[zo] = (N) => {
        ue || (ue = !0, N ? U(J, [W]) : U(de, [W]), D.delayedLeave && D.delayedLeave(), W[zo] = void 0);
      };
      ce ? F(ce, [W, K]) : K();
    },
    leave(W, ce) {
      const de = String(e.key);
      if (W[zo] && W[zo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ce();
      U(w, [W]);
      let J = !1;
      const ue = W[Gs] = (K) => {
        J || (J = !0, ce(), K ? U($, [W]) : U(k, [W]), W[Gs] = void 0, O[de] === e && delete O[de]);
      };
      O[de] = e, g ? F(g, [W, ue]) : ue();
    },
    clone(W) {
      const ce = bo(
        W,
        t,
        n,
        a,
        l
      );
      return l && l(ce), ce;
    }
  };
  return D;
}
function Va(e) {
  if (ga(e))
    return e = an(e), e.children = null, e;
}
function Yl(e) {
  if (!ga(e))
    return br(e.type) && e.children ? Er(e.children) : e;
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
function wn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, wn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Il(e, t = !1, n) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : r);
    c.type === B ? (c.patchFlag & 128 && l++, a = a.concat(
      Il(c.children, t, u)
    )) : (t || c.type !== ts) && a.push(u != null ? an(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  return at(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Bt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Mr(e) {
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
  if (Dn(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && fo(e, t, n, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? _a(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, f = t && t.r, v = u.refs === Et ? u.refs = {} : u.refs, p = u.setupState, w = yt(p), g = p === Et ? qi : (k) => _t(w, k);
  if (f != null && f !== d) {
    if (Xl(t), Nt(f))
      v[f] = null, g(f) && (p[f] = null);
    else if (ns(f)) {
      f.value = null;
      const k = t;
      k.k && (v[k.k] = null);
    }
  }
  if (at(d))
    Eo(d, u, 12, [c, v]);
  else {
    const k = Nt(d), $ = ns(d);
    if (k || $) {
      const S = () => {
        if (e.f) {
          const C = k ? g(d) ? p[d] : v[d] : d.value;
          if (l)
            st(C) && gl(C, r);
          else if (st(C))
            C.includes(r) || C.push(r);
          else if (k)
            v[d] = [r], g(d) && (p[d] = v[d]);
          else {
            const I = [r];
            d.value = I, e.k && (v[e.k] = I);
          }
        } else k ? (v[d] = c, g(d) && (p[d] = c)) : $ && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const C = () => {
          S(), ta.delete(e);
        };
        C.id = -1, ta.set(e, C), ls(C, n);
      } else
        Xl(e), S();
    }
  }
}
function Xl(e) {
  const t = ta.get(e);
  t && (t.flags |= 8, ta.delete(e));
}
fa().requestIdleCallback;
fa().cancelIdleCallback;
const Dn = (e) => !!e.type.__asyncLoader, ga = (e) => e.type.__isKeepAlive;
function Bu(e, t) {
  Pr(e, "a", t);
}
function Vu(e, t) {
  Pr(e, "da", t);
}
function Pr(e, t, n = ss) {
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
      ga(l.parent.vnode) && Wu(a, t, n, l), l = l.parent;
  }
}
function Wu(e, t, n, a) {
  const l = ha(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Vn(() => {
    gl(a[t], l);
  }, n);
}
function ha(e, t, n = ss, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Js();
      const u = Mo(n), d = Es(t, n, e, c);
      return u(), Qs(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Xs = (e) => (t, n = ss) => {
  (!xo || e === "sp") && ha(e, (...a) => t(...a), n);
}, Gu = Xs("bm"), dt = Xs("m"), ju = Xs(
  "bu"
), Rr = Xs("u"), To = Xs(
  "bum"
), Vn = Xs("um"), Hu = Xs(
  "sp"
), qu = Xs("rtg"), Ku = Xs("rtc");
function Ju(e, t = ss) {
  ha("ec", e, t);
}
const Qu = "components", Dr = Symbol.for("v-ndc");
function El(e) {
  return Nt(e) ? Yu(Qu, e, !1) || e : e || Dr;
}
function Yu(e, t, n = !0, a = !1) {
  const l = Kt || ss;
  if (l) {
    const r = l.type;
    {
      const u = zd(
        r,
        !1
      );
      if (u && (u === t || u === _s(t) || u === da(_s(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zl(l[e] || r[e], t) || // global registration
      Zl(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function Zl(e, t) {
  return e && (e[t] || e[_s(t)] || e[da(_s(t))]);
}
function we(e, t, n, a) {
  let l;
  const r = n, c = st(e);
  if (c || Nt(e)) {
    const u = c && gn(e);
    let d = !1, f = !1;
    u && (d = !ys(e), f = Ys(e), e = va(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = t(
        d ? f ? An(Is(e[v])) : Is(e[v]) : e[v],
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
function ds(e, t) {
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
  if (Kt.ce || Kt.parent && Dn(Kt.parent) && Kt.parent.ce) {
    const f = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), o(), R(
      B,
      null,
      [b("slot", n, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), o();
  const c = r && Lr(r(n)), u = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    B,
    {
      key: (u && !Ss(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Lr(e) {
  return e.some((t) => Co(t) ? !(t.type === ts || t.type === B && !Lr(t.children)) : !0) ? e : null;
}
const sl = (e) => e ? Zr(e) ? _a(e) : sl(e.parent) : null, vo = (
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
    $options: (e) => Ur(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Sl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qt.bind(e.proxy)),
    $watch: (e) => cd.bind(e)
  })
), Wa = (e, t) => e !== Et && !e.__isScriptSetup && _t(e, t), Xu = {
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
      return t === "$attrs" && Zt(e.attrs, "get", ""), f(e);
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
function ei(e) {
  return st(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let nl = !0;
function Zu(e) {
  const t = Ur(e), n = e.proxy, a = e.ctx;
  nl = !1, t.beforeCreate && ti(t.beforeCreate, e, "bc");
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
    beforeDestroy: C,
    beforeUnmount: I,
    destroyed: E,
    unmounted: P,
    render: O,
    renderTracked: U,
    renderTriggered: F,
    errorCaptured: D,
    serverPrefetch: W,
    // public API
    expose: ce,
    inheritAttrs: de,
    // assets
    components: J,
    directives: ue,
    filters: K
  } = t;
  if (f && ed(f, a, null), c)
    for (const pe in c) {
      const te = c[pe];
      at(te) && (a[pe] = te.bind(n));
    }
  if (l) {
    const pe = l.call(n, n);
    xt(pe) && (e.data = kn(pe));
  }
  if (nl = !0, r)
    for (const pe in r) {
      const te = r[pe], oe = at(te) ? te.bind(n, n) : at(te.get) ? te.get.bind(n, n) : zs, re = !at(te) && at(te.set) ? te.set.bind(n) : zs, H = M({
        get: oe,
        set: re
      });
      Object.defineProperty(a, pe, {
        enumerable: !0,
        configurable: !0,
        get: () => H.value,
        set: (se) => H.value = se
      });
    }
  if (u)
    for (const pe in u)
      Nr(u[pe], a, n, pe);
  if (d) {
    const pe = at(d) ? d.call(n) : d;
    Reflect.ownKeys(pe).forEach((te) => {
      ld(te, pe[te]);
    });
  }
  v && ti(v, e, "c");
  function G(pe, te) {
    st(te) ? te.forEach((oe) => pe(oe.bind(n))) : te && pe(te.bind(n));
  }
  if (G(Gu, p), G(dt, w), G(ju, g), G(Rr, k), G(Bu, $), G(Vu, S), G(Ju, D), G(Ku, U), G(qu, F), G(To, I), G(Vn, P), G(Hu, W), st(ce))
    if (ce.length) {
      const pe = e.exposed || (e.exposed = {});
      ce.forEach((te) => {
        Object.defineProperty(pe, te, {
          get: () => n[te],
          set: (oe) => n[te] = oe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === zs && (e.render = O), de != null && (e.inheritAttrs = de), J && (e.components = J), ue && (e.directives = ue), W && Mr(e);
}
function ed(e, t, n = zs) {
  st(e) && (e = ol(e));
  for (const a in e) {
    const l = e[a];
    let r;
    xt(l) ? "default" in l ? r = Go(
      l.from || a,
      l.default,
      !0
    ) : r = Go(l.from || a) : r = Go(l), ns(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function ti(e, t, n) {
  Es(
    st(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Nr(e, t, n, a) {
  let l = a.includes(".") ? zr(n, a) : () => n[a];
  if (Nt(e)) {
    const r = t[e];
    at(r) && Ct(l, r);
  } else if (at(e))
    Ct(l, e.bind(n));
  else if (xt(e))
    if (st(e))
      e.forEach((r) => Nr(r, t, n, a));
    else {
      const r = at(e.handler) ? e.handler.bind(n) : t[e.handler];
      at(r) && Ct(l, r, e);
    }
}
function Ur(e) {
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
      const u = td[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const td = {
  data: si,
  props: ni,
  emits: ni,
  // objects
  methods: ao,
  computed: ao,
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
  components: ao,
  directives: ao,
  // watch
  watch: nd,
  // provide / inject
  provide: si,
  inject: sd
};
function si(e, t) {
  return t ? e ? function() {
    return Bt(
      at(e) ? e.call(this, this) : e,
      at(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sd(e, t) {
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
function as(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ao(e, t) {
  return e ? Bt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ni(e, t) {
  return e ? st(e) && st(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Bt(
    /* @__PURE__ */ Object.create(null),
    ei(e),
    ei(t ?? {})
  ) : t;
}
function nd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Bt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = as(e[a], t[a]);
  return n;
}
function Or() {
  return {
    app: null,
    config: {
      isNativeTag: qi,
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
let od = 0;
function ad(e, t) {
  return function(a, l = null) {
    at(a) || (a = Bt({}, a)), l != null && !xt(l) && (l = null);
    const r = Or(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const f = r.app = {
      _uid: od++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Bd,
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
        d && (Es(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, p) {
        return r.provides[v] = p, f;
      },
      runWithContext(v) {
        const p = Ln;
        Ln = f;
        try {
          return v();
        } finally {
          Ln = p;
        }
      }
    };
    return f;
  };
}
let Ln = null;
function ld(e, t) {
  if (ss) {
    let n = ss.provides;
    const a = ss.parent && ss.parent.provides;
    a === n && (n = ss.provides = Object.create(a)), n[e] = t;
  }
}
function Go(e, t, n = !1) {
  const a = Dl();
  if (a || Ln) {
    let l = Ln ? Ln._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && at(t) ? t.call(a && a.proxy) : t;
  }
}
const id = Symbol.for("v-scx"), rd = () => Go(id);
function Ct(e, t, n) {
  return Ar(e, t, n);
}
function Ar(e, t, n = Et) {
  const { immediate: a, deep: l, flush: r, once: c } = n, u = Bt({}, n), d = t && a || !t && r !== "post";
  let f;
  if (xo) {
    if (r === "sync") {
      const g = rd();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = zs, g.resume = zs, g.pause = zs, g;
    }
  }
  const v = ss;
  u.call = (g, k, $) => Es(g, v, k, $);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    ls(g, v && v.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, k) => {
    k ? g() : Sl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const w = Lu(e, t, u);
  return xo && (f ? f.push(w) : d && w()), w;
}
function cd(e, t, n) {
  const a = this.proxy, l = Nt(e) ? e.includes(".") ? zr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  at(t) ? r = t : (r = t.handler, n = t);
  const c = Mo(this), u = Ar(l, r.bind(a), n);
  return c(), u;
}
function zr(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++)
      a = a[n[l]];
    return a;
  };
}
const ud = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_s(t)}Modifiers`] || e[`${rn(t)}Modifiers`];
function dd(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || Et;
  let l = n;
  const r = t.startsWith("update:"), c = r && ud(a, t.slice(7));
  c && (c.trim && (l = n.map((v) => Nt(v) ? v.trim() : v)), c.number && (l = n.map(ma)));
  let u, d = a[u = Oa(t)] || // also try camelCase event handler (#2249)
  a[u = Oa(_s(t))];
  !d && r && (d = a[u = Oa(rn(t))]), d && Es(
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
    e.emitted[u] = !0, Es(
      f,
      e,
      6,
      l
    );
  }
}
const md = /* @__PURE__ */ new WeakMap();
function Fr(e, t, n = !1) {
  const a = n ? md : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!at(e)) {
    const d = (f) => {
      const v = Fr(f, t, !0);
      v && (u = !0, Bt(c, v));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (xt(e) && a.set(e, null), null) : (st(r) ? r.forEach((d) => c[d] = null) : Bt(c, r), xt(e) && a.set(e, c), c);
}
function ya(e, t) {
  return !e || !ca(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _t(e, t[0].toLowerCase() + t.slice(1)) || _t(e, rn(t)) || _t(e, t));
}
function oi(e) {
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
  let C, I;
  try {
    if (n.shapeFlag & 4) {
      const P = l || a, O = P;
      C = Os(
        f.call(
          O,
          P,
          v,
          p,
          g,
          w,
          k
        )
      ), I = u;
    } else {
      const P = t;
      C = Os(
        P.length > 1 ? P(
          p,
          { attrs: u, slots: c, emit: d }
        ) : P(
          p,
          null
        )
      ), I = t.props ? u : fd(u);
    }
  } catch (P) {
    po.length = 0, pa(P, e, 1), C = b(ts);
  }
  let E = C;
  if (I && $ !== !1) {
    const P = Object.keys(I), { shapeFlag: O } = E;
    P.length && O & 7 && (r && P.some(pl) && (I = vd(
      I,
      r
    )), E = an(E, I, !1, !0));
  }
  return n.dirs && (E = an(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && wn(E, n.transition), C = E, ea(S), C;
}
const fd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ca(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, vd = (e, t) => {
  const n = {};
  for (const a in e)
    (!pl(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function pd(e, t, n) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? ai(a, c, f) : !!c;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const w = v[p];
        if (c[w] !== a[w] && !ya(f, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? ai(a, c, f) : !0 : !!c;
  return !1;
}
function ai(e, t, n) {
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
function gd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Br = {}, Vr = () => Object.create(Br), Wr = (e) => Object.getPrototypeOf(e) === Br;
function hd(e, t, n, a = !1) {
  const l = {}, r = Vr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  n ? e.props = a ? l : Su(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function yd(e, t, n, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = yt(l), [d] = e.propsOptions;
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
            const k = _s(w);
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
    Gr(e, t, l, r) && (f = !0);
    let v;
    for (const p in u)
      (!t || // for camelCase
      !_t(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = rn(p)) === p || !_t(t, v))) && (d ? n && // for camelCase
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
  f && js(e.attrs, "set", "");
}
function Gr(e, t, n, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (ro(d))
        continue;
      const f = t[d];
      let v;
      l && _t(l, v = _s(d)) ? !r || !r.includes(v) ? n[v] = f : (u || (u = {}))[v] = f : ya(e.emitsOptions, d) || (!(d in a) || f !== a[d]) && (a[d] = f, c = !0);
    }
  if (r) {
    const d = yt(n), f = u || Et;
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
    ] && (a === "" || a === rn(n)) && (a = !0));
  }
  return a;
}
const wd = /* @__PURE__ */ new WeakMap();
function jr(e, t, n = !1) {
  const a = n ? wd : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!at(e)) {
    const v = (p) => {
      d = !0;
      const [w, g] = jr(p, t, !0);
      Bt(c, w), g && u.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return xt(e) && a.set(e, Mn), Mn;
  if (st(r))
    for (let v = 0; v < r.length; v++) {
      const p = _s(r[v]);
      li(p) && (c[p] = Et);
    }
  else if (r)
    for (const v in r) {
      const p = _s(v);
      if (li(p)) {
        const w = r[v], g = c[p] = st(w) || at(w) ? { type: w } : Bt({}, w), k = g.type;
        let $ = !1, S = !0;
        if (st(k))
          for (let C = 0; C < k.length; ++C) {
            const I = k[C], E = at(I) && I.name;
            if (E === "Boolean") {
              $ = !0;
              break;
            } else E === "String" && (S = !1);
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
function li(e) {
  return e[0] !== "$" && !ro(e);
}
const Tl = (e) => e === "_" || e === "_ctx" || e === "$stable", Ml = (e) => st(e) ? e.map(Os) : [Os(e)], _d = (e, t, n) => {
  if (t._n)
    return t;
  const a = h((...l) => Ml(t(...l)), n);
  return a._c = !1, a;
}, Hr = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Tl(l)) continue;
    const r = e[l];
    if (at(r))
      t[l] = _d(l, r, a);
    else if (r != null) {
      const c = Ml(r);
      t[l] = () => c;
    }
  }
}, qr = (e, t) => {
  const n = Ml(t);
  e.slots.default = () => n;
}, Kr = (e, t, n) => {
  for (const a in t)
    (n || !Tl(a)) && (e[a] = t[a]);
}, kd = (e, t, n) => {
  const a = e.slots = Vr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Kr(a, t, n), n && Yi(a, "_", l, !0)) : Hr(t, a);
  } else t && qr(e, t);
}, bd = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = Et;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? r = !1 : Kr(l, t, n) : (r = !t.$stable, Hr(t, l)), c = t;
  } else t && (qr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !Tl(u) && c[u] == null && delete l[u];
}, ls = Id;
function $d(e) {
  return Cd(e);
}
function Cd(e, t) {
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
    setScopeId: g = zs,
    insertStaticContent: k
  } = e, $ = (T, z, ae, Te = null, xe = null, Se = null, Y = void 0, j = null, ve = !!z.dynamicChildren) => {
    if (T === z)
      return;
    T && !vn(T, z) && (Te = Ne(T), se(T, xe, Se, !0), T = null), z.patchFlag === -2 && (ve = !1, z.dynamicChildren = null);
    const { type: _e, ref: je, shapeFlag: Ve } = z;
    switch (_e) {
      case wa:
        S(T, z, ae, Te);
        break;
      case ts:
        C(T, z, ae, Te);
        break;
      case ja:
        T == null && I(z, ae, Te, Y);
        break;
      case B:
        J(
          T,
          z,
          ae,
          Te,
          xe,
          Se,
          Y,
          j,
          ve
        );
        break;
      default:
        Ve & 1 ? O(
          T,
          z,
          ae,
          Te,
          xe,
          Se,
          Y,
          j,
          ve
        ) : Ve & 6 ? ue(
          T,
          z,
          ae,
          Te,
          xe,
          Se,
          Y,
          j,
          ve
        ) : (Ve & 64 || Ve & 128) && _e.process(
          T,
          z,
          ae,
          Te,
          xe,
          Se,
          Y,
          j,
          ve,
          ge
        );
    }
    je != null && xe ? fo(je, T && T.ref, Se, z || T, !z) : je == null && T && T.ref != null && fo(T.ref, null, Se, T, !0);
  }, S = (T, z, ae, Te) => {
    if (T == null)
      a(
        z.el = u(z.children),
        ae,
        Te
      );
    else {
      const xe = z.el = T.el;
      z.children !== T.children && f(xe, z.children);
    }
  }, C = (T, z, ae, Te) => {
    T == null ? a(
      z.el = d(z.children || ""),
      ae,
      Te
    ) : z.el = T.el;
  }, I = (T, z, ae, Te) => {
    [T.el, T.anchor] = k(
      T.children,
      z,
      ae,
      Te,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: z }, ae, Te) => {
    let xe;
    for (; T && T !== z; )
      xe = w(T), a(T, ae, Te), T = xe;
    a(z, ae, Te);
  }, P = ({ el: T, anchor: z }) => {
    let ae;
    for (; T && T !== z; )
      ae = w(T), l(T), T = ae;
    l(z);
  }, O = (T, z, ae, Te, xe, Se, Y, j, ve) => {
    if (z.type === "svg" ? Y = "svg" : z.type === "math" && (Y = "mathml"), T == null)
      U(
        z,
        ae,
        Te,
        xe,
        Se,
        Y,
        j,
        ve
      );
    else {
      const _e = T.el && T.el._isVueCE ? T.el : null;
      try {
        _e && _e._beginPatch(), W(
          T,
          z,
          xe,
          Se,
          Y,
          j,
          ve
        );
      } finally {
        _e && _e._endPatch();
      }
    }
  }, U = (T, z, ae, Te, xe, Se, Y, j) => {
    let ve, _e;
    const { props: je, shapeFlag: Ve, transition: ke, dirs: ee } = T;
    if (ve = T.el = c(
      T.type,
      Se,
      je && je.is,
      je
    ), Ve & 8 ? v(ve, T.children) : Ve & 16 && D(
      T.children,
      ve,
      null,
      Te,
      xe,
      Ga(T, Se),
      Y,
      j
    ), ee && cn(T, null, Te, "created"), F(ve, T, T.scopeId, Y, Te), je) {
      for (const Ue in je)
        Ue !== "value" && !ro(Ue) && r(ve, Ue, null, je[Ue], Se, Te);
      "value" in je && r(ve, "value", null, je.value, Se), (_e = je.onVnodeBeforeMount) && Ps(_e, Te, T);
    }
    ee && cn(T, null, Te, "beforeMount");
    const Ke = xd(xe, ke);
    Ke && ke.beforeEnter(ve), a(ve, z, ae), ((_e = je && je.onVnodeMounted) || Ke || ee) && ls(() => {
      _e && Ps(_e, Te, T), Ke && ke.enter(ve), ee && cn(T, null, Te, "mounted");
    }, xe);
  }, F = (T, z, ae, Te, xe) => {
    if (ae && g(T, ae), Te)
      for (let Se = 0; Se < Te.length; Se++)
        g(T, Te[Se]);
    if (xe) {
      let Se = xe.subTree;
      if (z === Se || Qr(Se.type) && (Se.ssContent === z || Se.ssFallback === z)) {
        const Y = xe.vnode;
        F(
          T,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          xe.parent
        );
      }
    }
  }, D = (T, z, ae, Te, xe, Se, Y, j, ve = 0) => {
    for (let _e = ve; _e < T.length; _e++) {
      const je = T[_e] = j ? nn(T[_e]) : Os(T[_e]);
      $(
        null,
        je,
        z,
        ae,
        Te,
        xe,
        Se,
        Y,
        j
      );
    }
  }, W = (T, z, ae, Te, xe, Se, Y) => {
    const j = z.el = T.el;
    let { patchFlag: ve, dynamicChildren: _e, dirs: je } = z;
    ve |= T.patchFlag & 16;
    const Ve = T.props || Et, ke = z.props || Et;
    let ee;
    if (ae && un(ae, !1), (ee = ke.onVnodeBeforeUpdate) && Ps(ee, ae, z, T), je && cn(z, T, ae, "beforeUpdate"), ae && un(ae, !0), (Ve.innerHTML && ke.innerHTML == null || Ve.textContent && ke.textContent == null) && v(j, ""), _e ? ce(
      T.dynamicChildren,
      _e,
      j,
      ae,
      Te,
      Ga(z, xe),
      Se
    ) : Y || te(
      T,
      z,
      j,
      null,
      ae,
      Te,
      Ga(z, xe),
      Se,
      !1
    ), ve > 0) {
      if (ve & 16)
        de(j, Ve, ke, ae, xe);
      else if (ve & 2 && Ve.class !== ke.class && r(j, "class", null, ke.class, xe), ve & 4 && r(j, "style", Ve.style, ke.style, xe), ve & 8) {
        const Ke = z.dynamicProps;
        for (let Ue = 0; Ue < Ke.length; Ue++) {
          const Xe = Ke[Ue], Le = Ve[Xe], Ae = ke[Xe];
          (Ae !== Le || Xe === "value") && r(j, Xe, Le, Ae, xe, ae);
        }
      }
      ve & 1 && T.children !== z.children && v(j, z.children);
    } else !Y && _e == null && de(j, Ve, ke, ae, xe);
    ((ee = ke.onVnodeUpdated) || je) && ls(() => {
      ee && Ps(ee, ae, z, T), je && cn(z, T, ae, "updated");
    }, Te);
  }, ce = (T, z, ae, Te, xe, Se, Y) => {
    for (let j = 0; j < z.length; j++) {
      const ve = T[j], _e = z[j], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ve.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ve.type === B || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !vn(ve, _e) || // - In the case of a component, it could contain anything.
        ve.shapeFlag & 198) ? p(ve.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      $(
        ve,
        _e,
        je,
        null,
        Te,
        xe,
        Se,
        Y,
        !0
      );
    }
  }, de = (T, z, ae, Te, xe) => {
    if (z !== ae) {
      if (z !== Et)
        for (const Se in z)
          !ro(Se) && !(Se in ae) && r(
            T,
            Se,
            z[Se],
            null,
            xe,
            Te
          );
      for (const Se in ae) {
        if (ro(Se)) continue;
        const Y = ae[Se], j = z[Se];
        Y !== j && Se !== "value" && r(T, Se, j, Y, xe, Te);
      }
      "value" in ae && r(T, "value", z.value, ae.value, xe);
    }
  }, J = (T, z, ae, Te, xe, Se, Y, j, ve) => {
    const _e = z.el = T ? T.el : u(""), je = z.anchor = T ? T.anchor : u("");
    let { patchFlag: Ve, dynamicChildren: ke, slotScopeIds: ee } = z;
    ee && (j = j ? j.concat(ee) : ee), T == null ? (a(_e, ae, Te), a(je, ae, Te), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      z.children || [],
      ae,
      je,
      xe,
      Se,
      Y,
      j,
      ve
    )) : Ve > 0 && Ve & 64 && ke && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (ce(
      T.dynamicChildren,
      ke,
      ae,
      xe,
      Se,
      Y,
      j
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (z.key != null || xe && z === xe.subTree) && Pl(
      T,
      z,
      !0
      /* shallow */
    )) : te(
      T,
      z,
      ae,
      je,
      xe,
      Se,
      Y,
      j,
      ve
    );
  }, ue = (T, z, ae, Te, xe, Se, Y, j, ve) => {
    z.slotScopeIds = j, T == null ? z.shapeFlag & 512 ? xe.ctx.activate(
      z,
      ae,
      Te,
      Y,
      ve
    ) : K(
      z,
      ae,
      Te,
      xe,
      Se,
      Y,
      ve
    ) : N(T, z, ve);
  }, K = (T, z, ae, Te, xe, Se, Y) => {
    const j = T.component = Ld(
      T,
      Te,
      xe
    );
    if (ga(T) && (j.ctx.renderer = ge), Nd(j, !1, Y), j.asyncDep) {
      if (xe && xe.registerDep(j, G, Y), !T.el) {
        const ve = j.subTree = b(ts);
        C(null, ve, z, ae), T.placeholder = ve.el;
      }
    } else
      G(
        j,
        T,
        z,
        ae,
        xe,
        Se,
        Y
      );
  }, N = (T, z, ae) => {
    const Te = z.component = T.component;
    if (pd(T, z, ae))
      if (Te.asyncDep && !Te.asyncResolved) {
        pe(Te, z, ae);
        return;
      } else
        Te.next = z, Te.update();
    else
      z.el = T.el, Te.vnode = z;
  }, G = (T, z, ae, Te, xe, Se, Y) => {
    const j = () => {
      if (T.isMounted) {
        let { next: Ve, bu: ke, u: ee, parent: Ke, vnode: Ue } = T;
        {
          const kt = Jr(T);
          if (kt) {
            Ve && (Ve.el = Ue.el, pe(T, Ve, Y)), kt.asyncDep.then(() => {
              T.isUnmounted || j();
            });
            return;
          }
        }
        let Xe = Ve, Le;
        un(T, !1), Ve ? (Ve.el = Ue.el, pe(T, Ve, Y)) : Ve = Ue, ke && Vo(ke), (Le = Ve.props && Ve.props.onVnodeBeforeUpdate) && Ps(Le, Ke, Ve, Ue), un(T, !0);
        const Ae = oi(T), He = T.subTree;
        T.subTree = Ae, $(
          He,
          Ae,
          // parent may have changed if it's in a teleport
          p(He.el),
          // anchor may have changed if it's in a fragment
          Ne(He),
          T,
          xe,
          Se
        ), Ve.el = Ae.el, Xe === null && gd(T, Ae.el), ee && ls(ee, xe), (Le = Ve.props && Ve.props.onVnodeUpdated) && ls(
          () => Ps(Le, Ke, Ve, Ue),
          xe
        );
      } else {
        let Ve;
        const { el: ke, props: ee } = z, { bm: Ke, m: Ue, parent: Xe, root: Le, type: Ae } = T, He = Dn(z);
        un(T, !1), Ke && Vo(Ke), !He && (Ve = ee && ee.onVnodeBeforeMount) && Ps(Ve, Xe, z), un(T, !0);
        {
          Le.ce && // @ts-expect-error _def is private
          Le.ce._def.shadowRoot !== !1 && Le.ce._injectChildStyle(Ae);
          const kt = T.subTree = oi(T);
          $(
            null,
            kt,
            ae,
            Te,
            T,
            xe,
            Se
          ), z.el = kt.el;
        }
        if (Ue && ls(Ue, xe), !He && (Ve = ee && ee.onVnodeMounted)) {
          const kt = z;
          ls(
            () => Ps(Ve, Xe, kt),
            xe
          );
        }
        (z.shapeFlag & 256 || Xe && Dn(Xe.vnode) && Xe.vnode.shapeFlag & 256) && T.a && ls(T.a, xe), T.isMounted = !0, z = ae = Te = null;
      }
    };
    T.scope.on();
    const ve = T.effect = new tr(j);
    T.scope.off();
    const _e = T.update = ve.run.bind(ve), je = T.job = ve.runIfDirty.bind(ve);
    je.i = T, je.id = T.uid, ve.scheduler = () => Sl(je), un(T, !0), _e();
  }, pe = (T, z, ae) => {
    z.component = T;
    const Te = T.vnode.props;
    T.vnode = z, T.next = null, yd(T, z.props, Te, ae), bd(T, z.children, ae), Js(), ql(T), Qs();
  }, te = (T, z, ae, Te, xe, Se, Y, j, ve = !1) => {
    const _e = T && T.children, je = T ? T.shapeFlag : 0, Ve = z.children, { patchFlag: ke, shapeFlag: ee } = z;
    if (ke > 0) {
      if (ke & 128) {
        re(
          _e,
          Ve,
          ae,
          Te,
          xe,
          Se,
          Y,
          j,
          ve
        );
        return;
      } else if (ke & 256) {
        oe(
          _e,
          Ve,
          ae,
          Te,
          xe,
          Se,
          Y,
          j,
          ve
        );
        return;
      }
    }
    ee & 8 ? (je & 16 && Fe(_e, xe, Se), Ve !== _e && v(ae, Ve)) : je & 16 ? ee & 16 ? re(
      _e,
      Ve,
      ae,
      Te,
      xe,
      Se,
      Y,
      j,
      ve
    ) : Fe(_e, xe, Se, !0) : (je & 8 && v(ae, ""), ee & 16 && D(
      Ve,
      ae,
      Te,
      xe,
      Se,
      Y,
      j,
      ve
    ));
  }, oe = (T, z, ae, Te, xe, Se, Y, j, ve) => {
    T = T || Mn, z = z || Mn;
    const _e = T.length, je = z.length, Ve = Math.min(_e, je);
    let ke;
    for (ke = 0; ke < Ve; ke++) {
      const ee = z[ke] = ve ? nn(z[ke]) : Os(z[ke]);
      $(
        T[ke],
        ee,
        ae,
        null,
        xe,
        Se,
        Y,
        j,
        ve
      );
    }
    _e > je ? Fe(
      T,
      xe,
      Se,
      !0,
      !1,
      Ve
    ) : D(
      z,
      ae,
      Te,
      xe,
      Se,
      Y,
      j,
      ve,
      Ve
    );
  }, re = (T, z, ae, Te, xe, Se, Y, j, ve) => {
    let _e = 0;
    const je = z.length;
    let Ve = T.length - 1, ke = je - 1;
    for (; _e <= Ve && _e <= ke; ) {
      const ee = T[_e], Ke = z[_e] = ve ? nn(z[_e]) : Os(z[_e]);
      if (vn(ee, Ke))
        $(
          ee,
          Ke,
          ae,
          null,
          xe,
          Se,
          Y,
          j,
          ve
        );
      else
        break;
      _e++;
    }
    for (; _e <= Ve && _e <= ke; ) {
      const ee = T[Ve], Ke = z[ke] = ve ? nn(z[ke]) : Os(z[ke]);
      if (vn(ee, Ke))
        $(
          ee,
          Ke,
          ae,
          null,
          xe,
          Se,
          Y,
          j,
          ve
        );
      else
        break;
      Ve--, ke--;
    }
    if (_e > Ve) {
      if (_e <= ke) {
        const ee = ke + 1, Ke = ee < je ? z[ee].el : Te;
        for (; _e <= ke; )
          $(
            null,
            z[_e] = ve ? nn(z[_e]) : Os(z[_e]),
            ae,
            Ke,
            xe,
            Se,
            Y,
            j,
            ve
          ), _e++;
      }
    } else if (_e > ke)
      for (; _e <= Ve; )
        se(T[_e], xe, Se, !0), _e++;
    else {
      const ee = _e, Ke = _e, Ue = /* @__PURE__ */ new Map();
      for (_e = Ke; _e <= ke; _e++) {
        const X = z[_e] = ve ? nn(z[_e]) : Os(z[_e]);
        X.key != null && Ue.set(X.key, _e);
      }
      let Xe, Le = 0;
      const Ae = ke - Ke + 1;
      let He = !1, kt = 0;
      const Ut = new Array(Ae);
      for (_e = 0; _e < Ae; _e++) Ut[_e] = 0;
      for (_e = ee; _e <= Ve; _e++) {
        const X = T[_e];
        if (Le >= Ae) {
          se(X, xe, Se, !0);
          continue;
        }
        let Z;
        if (X.key != null)
          Z = Ue.get(X.key);
        else
          for (Xe = Ke; Xe <= ke; Xe++)
            if (Ut[Xe - Ke] === 0 && vn(X, z[Xe])) {
              Z = Xe;
              break;
            }
        Z === void 0 ? se(X, xe, Se, !0) : (Ut[Z - Ke] = _e + 1, Z >= kt ? kt = Z : He = !0, $(
          X,
          z[Z],
          ae,
          null,
          xe,
          Se,
          Y,
          j,
          ve
        ), Le++);
      }
      const Gt = He ? Sd(Ut) : Mn;
      for (Xe = Gt.length - 1, _e = Ae - 1; _e >= 0; _e--) {
        const X = Ke + _e, Z = z[X], fe = z[X + 1], Qe = X + 1 < je ? (
          // #13559, fallback to el placeholder for unresolved async component
          fe.el || fe.placeholder
        ) : Te;
        Ut[_e] === 0 ? $(
          null,
          Z,
          ae,
          Qe,
          xe,
          Se,
          Y,
          j,
          ve
        ) : He && (Xe < 0 || _e !== Gt[Xe] ? H(Z, ae, Qe, 2) : Xe--);
      }
    }
  }, H = (T, z, ae, Te, xe = null) => {
    const { el: Se, type: Y, transition: j, children: ve, shapeFlag: _e } = T;
    if (_e & 6) {
      H(T.component.subTree, z, ae, Te);
      return;
    }
    if (_e & 128) {
      T.suspense.move(z, ae, Te);
      return;
    }
    if (_e & 64) {
      Y.move(T, z, ae, ge);
      return;
    }
    if (Y === B) {
      a(Se, z, ae);
      for (let Ve = 0; Ve < ve.length; Ve++)
        H(ve[Ve], z, ae, Te);
      a(T.anchor, z, ae);
      return;
    }
    if (Y === ja) {
      E(T, z, ae);
      return;
    }
    if (Te !== 2 && _e & 1 && j)
      if (Te === 0)
        j.beforeEnter(Se), a(Se, z, ae), ls(() => j.enter(Se), xe);
      else {
        const { leave: Ve, delayLeave: ke, afterLeave: ee } = j, Ke = () => {
          T.ctx.isUnmounted ? l(Se) : a(Se, z, ae);
        }, Ue = () => {
          Se._isLeaving && Se[Gs](
            !0
            /* cancelled */
          ), Ve(Se, () => {
            Ke(), ee && ee();
          });
        };
        ke ? ke(Se, Ke, Ue) : Ue();
      }
    else
      a(Se, z, ae);
  }, se = (T, z, ae, Te = !1, xe = !1) => {
    const {
      type: Se,
      props: Y,
      ref: j,
      children: ve,
      dynamicChildren: _e,
      shapeFlag: je,
      patchFlag: Ve,
      dirs: ke,
      cacheIndex: ee
    } = T;
    if (Ve === -2 && (xe = !1), j != null && (Js(), fo(j, null, ae, T, !0), Qs()), ee != null && (z.renderCache[ee] = void 0), je & 256) {
      z.ctx.deactivate(T);
      return;
    }
    const Ke = je & 1 && ke, Ue = !Dn(T);
    let Xe;
    if (Ue && (Xe = Y && Y.onVnodeBeforeUnmount) && Ps(Xe, z, T), je & 6)
      he(T.component, ae, Te);
    else {
      if (je & 128) {
        T.suspense.unmount(ae, Te);
        return;
      }
      Ke && cn(T, null, z, "beforeUnmount"), je & 64 ? T.type.remove(
        T,
        z,
        ae,
        ge,
        Te
      ) : _e && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_e.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Se !== B || Ve > 0 && Ve & 64) ? Fe(
        _e,
        z,
        ae,
        !1,
        !0
      ) : (Se === B && Ve & 384 || !xe && je & 16) && Fe(ve, z, ae), Te && ie(T);
    }
    (Ue && (Xe = Y && Y.onVnodeUnmounted) || Ke) && ls(() => {
      Xe && Ps(Xe, z, T), Ke && cn(T, null, z, "unmounted");
    }, ae);
  }, ie = (T) => {
    const { type: z, el: ae, anchor: Te, transition: xe } = T;
    if (z === B) {
      Ie(ae, Te);
      return;
    }
    if (z === ja) {
      P(T);
      return;
    }
    const Se = () => {
      l(ae), xe && !xe.persisted && xe.afterLeave && xe.afterLeave();
    };
    if (T.shapeFlag & 1 && xe && !xe.persisted) {
      const { leave: Y, delayLeave: j } = xe, ve = () => Y(ae, Se);
      j ? j(T.el, Se, ve) : ve();
    } else
      Se();
  }, Ie = (T, z) => {
    let ae;
    for (; T !== z; )
      ae = w(T), l(T), T = ae;
    l(z);
  }, he = (T, z, ae) => {
    const { bum: Te, scope: xe, job: Se, subTree: Y, um: j, m: ve, a: _e } = T;
    ii(ve), ii(_e), Te && Vo(Te), xe.stop(), Se && (Se.flags |= 8, se(Y, T, z, ae)), j && ls(j, z), ls(() => {
      T.isUnmounted = !0;
    }, z);
  }, Fe = (T, z, ae, Te = !1, xe = !1, Se = 0) => {
    for (let Y = Se; Y < T.length; Y++)
      se(T[Y], z, ae, Te, xe);
  }, Ne = (T) => {
    if (T.shapeFlag & 6)
      return Ne(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const z = w(T.anchor || T.el), ae = z && z[kr];
    return ae ? w(ae) : z;
  };
  let be = !1;
  const Re = (T, z, ae) => {
    T == null ? z._vnode && se(z._vnode, null, null, !0) : $(
      z._vnode || null,
      T,
      z,
      null,
      null,
      null,
      ae
    ), z._vnode = T, be || (be = !0, ql(), yr(), be = !1);
  }, ge = {
    p: $,
    um: se,
    m: H,
    r: ie,
    mt: K,
    mc: D,
    pc: te,
    pbc: ce,
    n: Ne,
    o: e
  };
  return {
    render: Re,
    hydrate: void 0,
    createApp: ad(Re)
  };
}
function Ga({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function un({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function xd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pl(e, t, n = !1) {
  const a = e.children, l = t.children;
  if (st(a) && st(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = nn(l[r]), u.el = c.el), !n && u.patchFlag !== -2 && Pl(c, u)), u.type === wa && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === ts && !u.el && (u.el = c.el);
    }
}
function Sd(e) {
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
function Jr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jr(t);
}
function ii(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Qr = (e) => e.__isSuspense;
function Id(e, t) {
  t && t.pendingBranch ? st(e) ? t.effects.push(...e) : t.effects.push(e) : Ou(e);
}
const B = Symbol.for("v-fgt"), wa = Symbol.for("v-txt"), ts = Symbol.for("v-cmt"), ja = Symbol.for("v-stc"), po = [];
let ps = null;
function o(e = !1) {
  po.push(ps = e ? null : []);
}
function Ed() {
  po.pop(), ps = po[po.length - 1] || null;
}
let $o = 1;
function na(e, t = !1) {
  $o += e, e < 0 && ps && t && (ps.hasOnce = !0);
}
function Yr(e) {
  return e.dynamicChildren = $o > 0 ? ps || Mn : null, Ed(), $o > 0 && ps && ps.push(e), e;
}
function i(e, t, n, a, l, r) {
  return Yr(
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
function R(e, t, n, a, l) {
  return Yr(
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
function vn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Xr = ({ key: e }) => e ?? null, jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Nt(e) || ns(e) || at(e) ? { i: Kt, r: e, k: t, f: !!n } : e : null);
function s(e, t = null, n = null, a = 0, l = null, r = e === B ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xr(t),
    ref: t && jo(t),
    scopeId: _r,
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
    ctx: Kt
  };
  return u ? (Rl(d, n), r & 128 && e.normalize(d)) : n && (d.shapeFlag |= Nt(n) ? 8 : 16), $o > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  ps && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && ps.push(d), d;
}
const b = Td;
function Td(e, t = null, n = null, a = 0, l = null, r = !1) {
  if ((!e || e === Dr) && (e = ts), Co(e)) {
    const u = an(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Rl(u, n), $o > 0 && !r && ps && (u.shapeFlag & 6 ? ps[ps.indexOf(e)] = u : ps.push(u)), u.patchFlag = -2, u;
  }
  if (Fd(e) && (e = e.__vccOpts), t) {
    t = Md(t);
    let { class: u, style: d } = t;
    u && !Nt(u) && (t.class = Be(u)), xt(d) && (xl(d) && !st(d) && (d = Bt({}, d)), t.style = Wt(d));
  }
  const c = Nt(e) ? 1 : Qr(e) ? 128 : br(e) ? 64 : xt(e) ? 4 : at(e) ? 2 : 0;
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
function Md(e) {
  return e ? xl(e) || Wr(e) ? Bt({}, e) : e : null;
}
function an(e, t, n = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, f = t ? Pd(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Xr(f),
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
    patchFlag: t && e.type !== B ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && an(e.ssContent),
    ssFallback: e.ssFallback && an(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && wn(
    v,
    d.clone(v)
  ), v;
}
function x(e = " ", t = 0) {
  return b(wa, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (o(), R(ts, null, e)) : b(ts, null, e);
}
function Os(e) {
  return e == null || typeof e == "boolean" ? b(ts) : st(e) ? b(
    B,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Co(e) ? nn(e) : b(wa, null, String(e));
}
function nn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : an(e);
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
      !l && !Wr(t) ? t._ctx = Kt : l === 3 && Kt && (Kt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else at(t) ? (t = { default: t, _ctx: Kt }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [x(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Be([t.class, a.class]));
      else if (l === "style")
        t.style = Wt([t.style, a.style]);
      else if (ca(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(st(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Ps(e, t, n, a = null) {
  Es(e, t, 7, [
    n,
    a
  ]);
}
const Rd = Or();
let Dd = 0;
function Ld(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || Rd, r = {
    uid: Dd++,
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
    scope: new lu(
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
    propsOptions: jr(a, l),
    emitsOptions: Fr(a, l),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = dd.bind(null, r), e.ce && e.ce(r), r;
}
let ss = null;
const Dl = () => ss || Kt;
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
    (n) => ss = n
  ), ll = t(
    "__VUE_SSR_SETTERS__",
    (n) => xo = n
  );
}
const Mo = (e) => {
  const t = ss;
  return oa(e), e.scope.on(), () => {
    e.scope.off(), oa(t);
  };
}, ri = () => {
  ss && ss.scope.off(), oa(null);
};
function Zr(e) {
  return e.vnode.shapeFlag & 4;
}
let xo = !1;
function Nd(e, t = !1, n = !1) {
  t && ll(t);
  const { props: a, children: l } = e.vnode, r = Zr(e);
  hd(e, a, r, t), kd(e, l, n || t);
  const c = r ? Ud(e, t) : void 0;
  return t && ll(!1), c;
}
function Ud(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xu);
  const { setup: a } = n;
  if (a) {
    Js();
    const l = e.setupContext = a.length > 1 ? Ad(e) : null, r = Mo(e), c = Eo(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ki(c);
    if (Qs(), r(), (u || e.sp) && !Dn(e) && Mr(e), u) {
      if (c.then(ri, ri), t)
        return c.then((d) => {
          ci(e, d);
        }).catch((d) => {
          pa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ci(e, c);
  } else
    ec(e);
}
function ci(e, t, n) {
  at(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xt(t) && (e.setupState = pr(t)), ec(e);
}
function ec(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || zs);
  {
    const l = Mo(e);
    Js();
    try {
      Zu(e);
    } finally {
      Qs(), l();
    }
  }
}
const Od = {
  get(e, t) {
    return Zt(e, "get", ""), e[t];
  }
};
function Ad(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Od),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function _a(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(pr(Iu(e.exposed)), {
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
function zd(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Fd(e) {
  return at(e) && "__vccOpts" in e;
}
const M = (e, t) => Ru(e, t, xo);
function Wn(e, t, n) {
  try {
    na(-1);
    const a = arguments.length;
    return a === 2 ? xt(t) && !st(t) ? Co(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Co(n) && (n = [n]), b(e, t, n));
  } finally {
    na(1);
  }
}
const Bd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let il;
const ui = typeof window < "u" && window.trustedTypes;
if (ui)
  try {
    il = /* @__PURE__ */ ui.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const tc = il ? (e) => il.createHTML(e) : (e) => e, Vd = "http://www.w3.org/2000/svg", Wd = "http://www.w3.org/1998/Math/MathML", Ws = typeof document < "u" ? document : null, di = Ws && /* @__PURE__ */ Ws.createElement("template"), Gd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const l = t === "svg" ? Ws.createElementNS(Vd, e) : t === "mathml" ? Ws.createElementNS(Wd, e) : n ? Ws.createElement(e, { is: n }) : Ws.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ws.createTextNode(e),
  createComment: (e) => Ws.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ws.querySelector(e),
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
      di.innerHTML = tc(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = di.content;
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
}, Zs = "transition", Yn = "animation", zn = Symbol("_vtc"), sc = {
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
}, nc = /* @__PURE__ */ Bt(
  {},
  Sr,
  sc
), jd = (e) => (e.displayName = "Transition", e.props = nc, e), Hd = /* @__PURE__ */ jd(
  (e, { slots: t }) => Wn(Fu, oc(e), t)
), dn = (e, t = []) => {
  st(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, mi = (e) => e ? st(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function oc(e) {
  const t = {};
  for (const J in e)
    J in sc || (t[J] = e[J]);
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
  } = e, k = qd(l), $ = k && k[0], S = k && k[1], {
    onBeforeEnter: C,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: P,
    onLeaveCancelled: O,
    onBeforeAppear: U = C,
    onAppear: F = I,
    onAppearCancelled: D = E
  } = t, W = (J, ue, K, N) => {
    J._enterCancelled = N, en(J, ue ? v : u), en(J, ue ? f : c), K && K();
  }, ce = (J, ue) => {
    J._isLeaving = !1, en(J, p), en(J, g), en(J, w), ue && ue();
  }, de = (J) => (ue, K) => {
    const N = J ? F : I, G = () => W(ue, J, K);
    dn(N, [ue, G]), fi(() => {
      en(ue, J ? d : r), Ds(ue, J ? v : u), mi(N) || vi(ue, a, $, G);
    });
  };
  return Bt(t, {
    onBeforeEnter(J) {
      dn(C, [J]), Ds(J, r), Ds(J, c);
    },
    onBeforeAppear(J) {
      dn(U, [J]), Ds(J, d), Ds(J, f);
    },
    onEnter: de(!1),
    onAppear: de(!0),
    onLeave(J, ue) {
      J._isLeaving = !0;
      const K = () => ce(J, ue);
      Ds(J, p), J._enterCancelled ? (Ds(J, w), rl(J)) : (rl(J), Ds(J, w)), fi(() => {
        J._isLeaving && (en(J, p), Ds(J, g), mi(P) || vi(J, a, S, K));
      }), dn(P, [J, K]);
    },
    onEnterCancelled(J) {
      W(J, !1, void 0, !0), dn(E, [J]);
    },
    onAppearCancelled(J) {
      W(J, !0, void 0, !0), dn(D, [J]);
    },
    onLeaveCancelled(J) {
      ce(J), dn(O, [J]);
    }
  });
}
function qd(e) {
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
  return Xc(e);
}
function Ds(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[zn] || (e[zn] = /* @__PURE__ */ new Set())).add(t);
}
function en(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[zn];
  n && (n.delete(t), n.size || (e[zn] = void 0));
}
function fi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Kd = 0;
function vi(e, t, n, a) {
  const l = e._endId = ++Kd, r = () => {
    l === e._endId && a();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: c, timeout: u, propCount: d } = ac(e, t);
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
function ac(e, t) {
  const n = window.getComputedStyle(e), a = (k) => (n[k] || "").split(", "), l = a(`${Zs}Delay`), r = a(`${Zs}Duration`), c = pi(l, r), u = a(`${Yn}Delay`), d = a(`${Yn}Duration`), f = pi(u, d);
  let v = null, p = 0, w = 0;
  t === Zs ? c > 0 && (v = Zs, p = c, w = r.length) : t === Yn ? f > 0 && (v = Yn, p = f, w = d.length) : (p = Math.max(c, f), v = p > 0 ? c > f ? Zs : Yn : null, w = v ? v === Zs ? r.length : d.length : 0);
  const g = v === Zs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Zs}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function pi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, a) => gi(n) + gi(e[a])));
}
function gi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function rl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Jd(e, t, n) {
  const a = e[zn];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const hi = Symbol("_vod"), Qd = Symbol("_vsh"), Yd = Symbol(""), Xd = /(?:^|;)\s*display\s*:/;
function Zd(e, t, n) {
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
      const c = a[Yd];
      c && (n += ";" + c), a.cssText = n, r = Xd.test(n);
    }
  } else t && e.removeAttribute("style");
  hi in e && (e[hi] = r ? a.display : "", e[Qd] && (a.display = "none"));
}
const yi = /\s*!important$/;
function Ho(e, t, n) {
  if (st(n))
    n.forEach((a) => Ho(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = em(e, t);
    yi.test(n) ? e.setProperty(
      rn(a),
      n.replace(yi, ""),
      "important"
    ) : e[a] = n;
  }
}
const wi = ["Webkit", "Moz", "ms"], qa = {};
function em(e, t) {
  const n = qa[t];
  if (n)
    return n;
  let a = _s(t);
  if (a !== "filter" && a in e)
    return qa[t] = a;
  a = da(a);
  for (let l = 0; l < wi.length; l++) {
    const r = wi[l] + a;
    if (r in e)
      return qa[t] = r;
  }
  return t;
}
const _i = "http://www.w3.org/1999/xlink";
function ki(e, t, n, a, l, r = ou(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_i, t.slice(6, t.length)) : e.setAttributeNS(_i, t, n) : n == null || r && !Xi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ss(n) ? String(n) : n
  );
}
function bi(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? tc(n) : n);
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
    u === "boolean" ? n = Xi(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function qs(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function tm(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const $i = Symbol("_vei");
function sm(e, t, n, a, l = null) {
  const r = e[$i] || (e[$i] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = nm(t);
    if (a) {
      const f = r[t] = lm(
        a,
        l
      );
      qs(e, u, f, d);
    } else c && (tm(e, u, c, d), r[t] = void 0);
  }
}
const Ci = /(?:Once|Passive|Capture)$/;
function nm(e) {
  let t;
  if (Ci.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Ci); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : rn(e.slice(2)), t];
}
let Ka = 0;
const om = /* @__PURE__ */ Promise.resolve(), am = () => Ka || (om.then(() => Ka = 0), Ka = Date.now());
function lm(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    Es(
      im(a, n.value),
      t,
      5,
      [a]
    );
  };
  return n.value = e, n.attached = am(), n;
}
function im(e, t) {
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
const xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, rm = (e, t, n, a, l, r) => {
  const c = l === "svg";
  t === "class" ? Jd(e, a, c) : t === "style" ? Zd(e, n, a) : ca(t) ? pl(t) || sm(e, t, n, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cm(e, t, a, c)) ? (bi(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ki(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Nt(a)) ? bi(e, _s(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), ki(e, t, a, c));
};
function cm(e, t, n, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xi(t) && at(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return xi(t) && Nt(n) ? !1 : t in e;
}
const lc = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ new WeakMap(), aa = Symbol("_moveCb"), Si = Symbol("_enterCb"), um = (e) => (delete e.props.mode, e), dm = /* @__PURE__ */ um({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Bt({}, nc, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Dl(), a = xr();
    let l, r;
    return Rr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!gm(
        l[0].el,
        n.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(fm), l.forEach(vm);
      const u = l.filter(pm);
      rl(n.vnode.el), u.forEach((d) => {
        const f = d.el, v = f.style;
        Ds(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = f[aa] = (w) => {
          w && w.target !== f || (!w || w.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[aa] = null, en(f, c));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = yt(e), u = oc(c);
      let d = c.tag || B;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), wn(
            v,
            bo(
              v,
              u,
              a,
              n
            )
          ), lc.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = t.default ? Il(t.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const v = r[f];
        v.key != null && wn(
          v,
          bo(v, u, a, n)
        );
      }
      return b(d, null, r);
    };
  }
}), mm = dm;
function fm(e) {
  const t = e.el;
  t[aa] && t[aa](), t[Si] && t[Si]();
}
function vm(e) {
  ic.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function pm(e) {
  const t = lc.get(e), n = ic.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function gm(e, t, n) {
  const a = e.cloneNode(), l = e[zn];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), n.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = ac(a);
  return r.removeChild(a), c;
}
const ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return st(t) ? (n) => Vo(t, n) : t;
};
function hm(e) {
  e.target.composing = !0;
}
function Ii(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ws = Symbol("_assign");
function Ei(e, t, n) {
  return t && (e = e.trim()), n && (e = ma(e)), e;
}
const go = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
    e[ws] = ln(l);
    const r = a || l.props && l.props.type === "number";
    qs(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ws](Ei(e.value, n, r));
    }), (n || r) && qs(e, "change", () => {
      e.value = Ei(e.value, n, r);
    }), t || (qs(e, "compositionstart", hm), qs(e, "compositionend", Ii), qs(e, "change", Ii));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ws] = ln(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ma(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === d) || (e.value = d));
  }
}, la = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ws] = ln(n), qs(e, "change", () => {
      const a = e._modelValue, l = Fn(e), r = e.checked, c = e[ws];
      if (st(a)) {
        const u = yl(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const f = [...a];
          f.splice(u, 1), c(f);
        }
      } else if (Bn(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(rc(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ti,
  beforeUpdate(e, t, n) {
    e[ws] = ln(n), Ti(e, t, n);
  }
};
function Ti(e, { value: t, oldValue: n }, a) {
  e._modelValue = t;
  let l;
  if (st(t))
    l = yl(t, a.props.value) > -1;
  else if (Bn(t))
    l = t.has(a.props.value);
  else {
    if (t === n) return;
    l = yn(t, rc(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const qo = {
  created(e, { value: t }, n) {
    e.checked = yn(t, n.props.value), e[ws] = ln(n), qs(e, "change", () => {
      e[ws](Fn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, a) {
    e[ws] = ln(a), t !== n && (e.checked = yn(t, a.props.value));
  }
}, Nn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, a) {
    const l = Bn(t);
    qs(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? ma(Fn(c)) : Fn(c)
      );
      e[ws](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, qt(() => {
        e._assigning = !1;
      });
    }), e[ws] = ln(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Mi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[ws] = ln(n);
  },
  updated(e, { value: t }) {
    e._assigning || Mi(e, t);
  }
};
function Mi(e, t) {
  const n = e.multiple, a = st(t);
  if (!(n && !a && !Bn(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Fn(c);
      if (n)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((f) => String(f) === String(u)) : c.selected = yl(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (yn(Fn(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Fn(e) {
  return "_value" in e ? e._value : e.value;
}
function rc(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const ym = ["ctrl", "shift", "alt", "meta"], wm = {
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
  exact: (e, t) => ym.some((n) => e[`${n}Key`] && !t.includes(n))
}, bt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = wm[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, _m = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, xs = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return n[a] || (n[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = rn(l.key);
    if (t.some(
      (c) => c === r || _m[c] === r
    ))
      return e(l);
  }));
}, km = /* @__PURE__ */ Bt({ patchProp: rm }, Gd);
let Pi;
function bm() {
  return Pi || (Pi = $d(km));
}
const Po = ((...e) => {
  const t = bm().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = Cm(a);
    if (!l) return;
    const r = t._component;
    !at(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = n(l, !1, $m(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function $m(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Cm(e) {
  return Nt(e) ? document.querySelector(e) : e;
}
const ND = kn({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const UD = [
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
], OD = {
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
}, xm = [
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
], AD = [
  ...xm,
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
function Sm(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Gn() {
  var n, a, l;
  const e = window, t = [
    (n = e.app) == null ? void 0 : n.api,
    (l = (a = e.comfyAPI) == null ? void 0 : a.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (Sm(r))
      return r;
  return null;
}
async function Ks(e, t) {
  const n = Gn();
  if (!n)
    throw new Error("ComfyUI API not available");
  return n.fetchApi(e, t);
}
function Im(e = "comfygit-panel") {
  const t = Gn();
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
function Em() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ft() {
  const e = _(!1), t = _(null);
  async function n(A, ye) {
    const Ge = await Ks(A, ye), vt = await Ge.text();
    if (!Ge.ok) {
      let zt = {};
      if (vt)
        try {
          const ms = JSON.parse(vt);
          ms && typeof ms == "object" && (zt = ms);
        } catch {
          zt = { error: vt };
        }
      const Ms = zt.error || zt.message || zt.detail || Ge.statusText || `Request failed: ${Ge.status}`;
      throw new cl(String(Ms), Ge.status, zt, A);
    }
    if (vt)
      return JSON.parse(vt);
  }
  async function a(A) {
    return n(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(A)}`);
  }
  async function l(A, ye, Ge) {
    return n("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: A, email: ye, password: Ge })
    });
  }
  async function r(A, ye, Ge) {
    return n("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: A, email: ye, password: Ge })
    });
  }
  async function c(A, ye) {
    return n(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(A)}`, {
      headers: { Authorization: `Bearer ${ye}` }
    });
  }
  async function u(A, ye) {
    return n("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: A, refresh_token: ye || null })
    });
  }
  async function d(A, ye) {
    return n(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(A)}`, {
      headers: { Authorization: `Bearer ${ye}` }
    });
  }
  async function f(A, ye, Ge) {
    return n(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(ye)}/revisions?cloud_url=${encodeURIComponent(A)}`,
      {
        headers: { Authorization: `Bearer ${Ge}` }
      }
    );
  }
  async function v(A, ye, Ge, vt) {
    return n("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ye}`
      },
      body: JSON.stringify({
        cloud_url: A,
        source_message: Ge || null,
        cloud_environment_id: vt || null
      })
    });
  }
  async function p(A = !1) {
    return n(A ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(A, ye = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: A, allow_issues: ye })
    });
  }
  async function g(A = 10, ye = 0) {
    return n(`/v2/comfygit/log?limit=${A}&offset=${ye}`);
  }
  async function k(A, ye = 50, Ge = 0) {
    return n(`/v2/comfygit/log?branch=${encodeURIComponent(A)}&limit=${ye}&offset=${Ge}`);
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
  async function C() {
    return n("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function I(A) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A, force: !0 })
    });
  }
  async function E(A) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(A)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function P(A, ye) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(A)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: ye, force: !0 })
    });
  }
  async function O() {
    return n("/v2/comfygit/branches");
  }
  async function U(A) {
    return n(`/v2/comfygit/commit/${A}`);
  }
  async function F(A, ye = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: A, force: ye })
    });
  }
  async function D(A, ye = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, start_point: ye })
    });
  }
  async function W(A, ye = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: A, force: ye })
    });
  }
  async function ce() {
    return n("/v2/comfygit/revert-changes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function de(A, ye = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(A)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ye })
    });
  }
  async function J() {
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
  async function ue() {
    return (await J()).environments;
  }
  async function K(A) {
    try {
      return await n(`/v2/comfygit/environments/${encodeURIComponent(A)}`);
    } catch {
      return null;
    }
  }
  async function N(A, ye) {
    const Ge = { target_env: A };
    return ye && (Ge.workspace_path = ye), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ge)
    });
  }
  async function G() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function pe(A) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function te() {
    return n("/v2/workspace/environments/create_status");
  }
  async function oe(A = 100) {
    return n(`/v2/workspace/comfyui_releases?limit=${A}`);
  }
  async function re(A) {
    return n(`/v2/workspace/environments/${A}`, {
      method: "DELETE"
    });
  }
  async function H(A = !1) {
    try {
      return n(A ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ye = await p(A), Ge = [];
      return ye.workflows.new.forEach((vt) => {
        Ge.push({
          name: vt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: vt
        });
      }), ye.workflows.modified.forEach((vt) => {
        Ge.push({
          name: vt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: vt
        });
      }), ye.workflows.synced.forEach((vt) => {
        Ge.push({
          name: vt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: vt
        });
      }), Ge;
    }
  }
  async function se(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/details`);
  }
  async function ie(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/contract`);
  }
  async function Ie(A, ye) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function he(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/contract`, {
      method: "DELETE"
    });
  }
  async function Fe(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/resolve`, {
      method: "POST"
    });
  }
  async function Ne(A, ye, Ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ye, install_models: Ge })
    });
  }
  async function be(A, ye, Ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ye, importance: Ge })
    });
  }
  async function Re() {
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
  async function $e(A) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(A)}`);
  }
  async function T(A) {
    return n(`/v2/workspace/models/${encodeURIComponent(A)}/source-candidates`);
  }
  async function z(A) {
    return n(`/v2/workspace/models/${encodeURIComponent(A)}/hashes`, {
      method: "POST"
    });
  }
  async function ae() {
    return n("/v2/workspace/models/workflow-source-candidates");
  }
  async function Te(A) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function xe(A, ye) {
    return n(`/v2/workspace/models/${A}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ye })
    });
  }
  async function Se(A, ye) {
    return n(`/v2/workspace/models/${A}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ye })
    });
  }
  async function Y(A) {
    return n(`/v2/workspace/models/${A}`, {
      method: "DELETE"
    });
  }
  async function j(A) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function ve() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function _e() {
    return n("/v2/workspace/models/directory");
  }
  async function je(A) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function Ve(A) {
    const ye = new URLSearchParams({ url: A });
    return n(`/v2/workspace/huggingface/repo-info?${ye}`);
  }
  async function ke() {
    return n("/v2/workspace/models/subdirectories");
  }
  async function ee(A, ye = 10) {
    const Ge = new URLSearchParams({ query: A, limit: String(ye) });
    return n(`/v2/workspace/huggingface/search?${Ge}`);
  }
  async function Ke(A) {
    try {
      const ye = A ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(A)}` : "/v2/comfygit/config";
      return n(ye);
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
  async function Ue(A, ye) {
    const Ge = ye ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ye)}` : "/v2/comfygit/config";
    return n(Ge, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Xe(A, ye) {
    try {
      const Ge = new URLSearchParams();
      return A && Ge.append("level", A), ye && Ge.append("lines", ye.toString()), n(`/v2/comfygit/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Le(A, ye) {
    try {
      const Ge = new URLSearchParams();
      return A && Ge.append("level", A), ye && Ge.append("lines", ye.toString()), n(`/v2/workspace/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ae() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function He() {
    return n("/v2/comfygit/debug/manifest");
  }
  async function kt() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Ut(A, ye) {
    try {
      const Ge = new URLSearchParams();
      return A && Ge.append("level", A), ye && Ge.append("lines", ye.toString()), n(`/v2/workspace/debug/orchestrator-logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Gt() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function X(A) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function Z() {
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
  async function fe(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/track-dev`, {
      method: "POST"
    });
  }
  async function Qe(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/install`, {
      method: "POST"
    });
  }
  async function De(A, ye) {
    var Jn, ot, Ua, Vl;
    const Ge = Em(), vt = Im(), zt = {
      id: A.id,
      version: A.version || A.selected_version || "latest",
      selected_version: A.selected_version || "latest",
      mode: A.mode || "remote",
      channel: A.channel || "default"
    };
    A.install_source && (zt.install_source = A.install_source), A.install_source === "git" && A.repository && (zt.repository = A.repository), await n("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: zt,
        ui_id: Ge,
        client_id: vt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ge, "for package:", A.id), ye != null && ye.beforeQueueStart && await ye.beforeQueueStart(Ge), await n("/v2/manager/queue/start", {
      method: "POST"
    });
    const ms = await n("/v2/manager/queue/history"), jt = (Jn = ms == null ? void 0 : ms.history) == null ? void 0 : Jn[Ge];
    if ((jt == null ? void 0 : jt.result) === "error" || ((ot = jt == null ? void 0 : jt.status) == null ? void 0 : ot.status_str) === "error") {
      const jc = ((Vl = (Ua = jt.status) == null ? void 0 : Ua.messages) == null ? void 0 : Vl[0]) || `Failed to install ${A.id}`;
      throw new cl(jc, 500, jt.status || {}, "/v2/manager/queue/start");
    }
    return {
      ui_id: Ge,
      result: jt == null ? void 0 : jt.result,
      status: jt == null ? void 0 : jt.status
    };
  }
  async function lt(A) {
    return n("/v2/comfygit/nodes/dependency-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function et(A) {
    return n("/v2/comfygit/nodes/dependency-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function gt(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/update`, {
      method: "POST"
    });
  }
  async function Rt(A, ye) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: ye })
    });
  }
  async function Ye(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function $t() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Yt(A, ye) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, url: ye })
    });
  }
  async function os(A) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function q(A, ye, Ge) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ye, push_url: Ge })
    });
  }
  async function me(A, ye) {
    const Ge = {};
    return ye && (Ge["X-Git-Auth-Token"] = ye), n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/fetch`, {
      method: "POST",
      headers: Ge
    });
  }
  async function ze(A) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/status`);
    } catch {
      return null;
    }
  }
  async function Ce(A = "skip", ye = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: A,
        remove_extra_nodes: ye
      })
    });
  }
  async function We(A, ye) {
    const Ge = ye ? `/v2/comfygit/remotes/${encodeURIComponent(A)}/pull-preview?branch=${encodeURIComponent(ye)}` : `/v2/comfygit/remotes/${encodeURIComponent(A)}/pull-preview`;
    return n(Ge);
  }
  async function Ze(A, ye = {}) {
    const Ge = { "Content-Type": "application/json" };
    return ye.authToken && (Ge["X-Git-Auth-Token"] = ye.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/pull`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({
        model_strategy: ye.modelStrategy || "skip",
        force: ye.force || !1,
        resolutions: ye.resolutions
      })
    });
  }
  async function ct(A, ye) {
    const Ge = ye ? `/v2/comfygit/remotes/${encodeURIComponent(A)}/push-preview?branch=${encodeURIComponent(ye)}` : `/v2/comfygit/remotes/${encodeURIComponent(A)}/push-preview`;
    return n(Ge);
  }
  async function ut(A, ye = {}) {
    const Ge = { "Content-Type": "application/json" };
    return ye.authToken && (Ge["X-Git-Auth-Token"] = ye.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/push`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({ force: ye.force || !1 })
    });
  }
  async function St(A, ye) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ye })
    });
  }
  async function Q(A) {
    const ye = {
      success: 0,
      failed: []
    };
    for (const Ge of A)
      try {
        await Fe(Ge), ye.success++;
      } catch (vt) {
        ye.failed.push({
          name: Ge,
          error: vt instanceof Error ? vt.message : "Unknown error"
        });
      }
    return ye;
  }
  async function L(A) {
    const ye = new FormData();
    ye.append("file", A);
    const Ge = await Ks("/v2/workspace/import/preview", {
      method: "POST",
      body: ye
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ge.ok) {
      const vt = await Ge.json().catch(() => ({}));
      throw new Error(vt.error || `Preview failed: ${Ge.status}`);
    }
    return Ge.json();
  }
  async function le(A) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(A)}`
    );
  }
  async function Je(A, ye, Ge, vt) {
    const zt = new FormData();
    zt.append("file", A), zt.append("name", ye), zt.append("model_strategy", Ge), zt.append("torch_backend", vt);
    const Ms = await Ks("/v2/workspace/import", {
      method: "POST",
      body: zt
    });
    if (!Ms.ok) {
      const ms = await Ms.json().catch(() => ({}));
      throw new Error(ms.message || ms.error || `Import failed: ${Ms.status}`);
    }
    return Ms.json();
  }
  async function tt() {
    return n("/v2/workspace/import/status");
  }
  async function mt(A) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: A })
    });
  }
  async function At(A, ye, Ge, vt) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: A,
        name: ye,
        model_strategy: Ge,
        torch_backend: vt
      })
    });
  }
  async function bs() {
    return n("/v2/setup/status");
  }
  async function Xt() {
    return n("/v2/comfygit/update-check");
  }
  async function ht() {
    return n("/v2/comfygit/update", { method: "POST" });
  }
  async function $s(A) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Lt() {
    return n("/v2/setup/initialize_status");
  }
  async function Hn(A) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Vt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function bn() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function qn(A, ye) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: A, save_key: ye })
    });
  }
  async function ba() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function $a(A) {
    const ye = A ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(A)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ye);
  }
  async function Ca(A) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function xa() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function Ro(A) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function Sa(A) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/stop`, {
      method: "POST"
    });
  }
  async function Ia(A) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/start`, {
      method: "POST"
    });
  }
  async function Ea(A) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/status`);
  }
  async function Ta(A) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A })
    });
  }
  async function Ma(A = !1) {
    return n(A ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Pa() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ra() {
    return n("/v2/comfygit/deploy/custom/workers");
  }
  async function Da(A) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Do(A) {
    return n(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function La(A) {
    return n("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Na() {
    return n("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Kn(A) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/info`);
  }
  async function ne(A) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances`);
  }
  async function V(A, ye) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function qe(A, ye) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(ye)}/start`, {
      method: "POST"
    });
  }
  async function nt(A, ye) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(ye)}/stop`, {
      method: "POST"
    });
  }
  async function wt(A, ye) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(ye)}`, {
      method: "DELETE"
    });
  }
  async function It(A) {
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
    validateDeploy: C,
    exportEnvWithForce: I,
    validateEnvironmentExport: E,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: O,
    getCommitDetail: U,
    checkout: F,
    createBranch: D,
    switchBranch: W,
    revertChanges: ce,
    deleteBranch: de,
    // Environment Management
    listEnvironments: J,
    getEnvironments: ue,
    getEnvironmentDetails: K,
    switchEnvironment: N,
    getSwitchProgress: G,
    createEnvironment: pe,
    getCreateProgress: te,
    getComfyUIReleases: oe,
    deleteEnvironment: re,
    // Workflow Management
    getWorkflows: H,
    getWorkflowDetails: se,
    getWorkflowContract: ie,
    saveWorkflowContract: Ie,
    deleteWorkflowContract: he,
    resolveWorkflow: Fe,
    installWorkflowDeps: Ne,
    setModelImportance: be,
    // Model Management
    getEnvironmentModels: Re,
    getWorkspaceModels: ge,
    getModelDetails: $e,
    getModelSourceCandidates: T,
    computeModelHashes: z,
    getWorkflowSourceCandidates: ae,
    openFileLocation: Te,
    addModelSource: xe,
    removeModelSource: Se,
    deleteModel: Y,
    downloadModel: j,
    scanWorkspaceModels: ve,
    getModelsDirectory: _e,
    setModelsDirectory: je,
    getHuggingFaceRepoInfo: Ve,
    getModelsSubdirectories: ke,
    searchHuggingFaceRepos: ee,
    // Settings
    getConfig: Ke,
    updateConfig: Ue,
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
    getEnvironmentLogs: Xe,
    getEnvironmentManifest: He,
    getWorkspaceLogs: Le,
    getEnvironmentLogPath: Ae,
    getWorkspaceLogPath: kt,
    getOrchestratorLogs: Ut,
    getOrchestratorLogPath: Gt,
    openFile: X,
    // Node Management
    getNodes: Z,
    trackNodeAsDev: fe,
    installNode: Qe,
    queueNodeInstall: De,
    previewNodeDependencyChanges: lt,
    applyReviewedNodeDependencyChanges: et,
    updateNode: gt,
    updateNodeCriticality: Rt,
    uninstallNode: Ye,
    // Git Remotes
    getRemotes: $t,
    addRemote: Yt,
    removeRemote: os,
    updateRemoteUrl: q,
    fetchRemote: me,
    getRemoteSyncStatus: ze,
    // Push/Pull
    getPullPreview: We,
    pullFromRemote: Ze,
    getPushPreview: ct,
    pushToRemote: ut,
    validateMerge: St,
    // Environment Sync
    syncEnvironmentManually: Ce,
    // Workflow Repair
    repairWorkflowModels: Q,
    // Import Operations
    previewTarballImport: L,
    previewGitImport: mt,
    validateEnvironmentName: le,
    executeImport: Je,
    executeGitImport: At,
    getImportProgress: tt,
    // First-Time Setup
    getSetupStatus: bs,
    // Manager Update Notice
    getUpdateCheck: Xt,
    updateManager: ht,
    initializeWorkspace: $s,
    getInitializeProgress: Lt,
    validatePath: Hn,
    // Deploy Operations
    getDeploySummary: Vt,
    getDataCenters: bn,
    testRunPodConnection: qn,
    getNetworkVolumes: ba,
    getRunPodGpuTypes: $a,
    deployToRunPod: Ca,
    getRunPodPods: xa,
    terminateRunPodPod: Ro,
    stopRunPodPod: Sa,
    startRunPodPod: Ia,
    getDeploymentStatus: Ea,
    exportDeployPackage: Ta,
    getStoredRunPodKey: Ma,
    clearRunPodKey: Pa,
    // Custom Worker Operations
    getCustomWorkers: Ra,
    addCustomWorker: Da,
    removeCustomWorker: Do,
    testWorkerConnection: La,
    scanForWorkers: Na,
    getWorkerSystemInfo: Kn,
    getWorkerInstances: ne,
    deployToWorker: V,
    startWorkerInstance: qe,
    stopWorkerInstance: nt,
    terminateWorkerInstance: wt,
    // Git Authentication
    testGitAuth: It
  };
}
const Tm = { class: "panel-layout" }, Mm = {
  key: 0,
  class: "panel-layout-header"
}, Pm = {
  key: 1,
  class: "panel-layout-search"
}, Rm = { class: "panel-layout-content" }, Dm = {
  key: 2,
  class: "panel-layout-footer"
}, Lm = /* @__PURE__ */ Ee({
  __name: "PanelLayout",
  setup(e) {
    return (t, n) => (o(), i("div", Tm, [
      t.$slots.header ? (o(), i("div", Mm, [
        rt(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (o(), i("div", Pm, [
        rt(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", Rm, [
        rt(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (o(), i("div", Dm, [
        rt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, Jt = /* @__PURE__ */ Me(Lm, [["__scopeId", "data-v-21565df9"]]), Nm = {
  key: 0,
  class: "panel-title-prefix"
}, Um = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Om = /* @__PURE__ */ Ee({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, n) => (o(), R(El(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (o(), i("span", Nm, m(e.prefix), 1)) : (o(), i("span", Um)),
        rt(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Am = /* @__PURE__ */ Me(Om, [["__scopeId", "data-v-c3875efc"]]), zm = ["title"], Fm = ["width", "height"], Bm = /* @__PURE__ */ Ee({
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
      ])], 8, Fm))
    ], 8, zm));
  }
}), cc = /* @__PURE__ */ Me(Bm, [["__scopeId", "data-v-6fc7f16d"]]), Vm = { class: "header-left" }, Wm = {
  key: 0,
  class: "header-actions"
}, Gm = /* @__PURE__ */ Ee({
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
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Vm, [
        b(Am, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            x(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), R(cc, {
          key: 0,
          onClick: n[0] || (n[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (o(), i("div", Wm, [
        rt(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ Me(Gm, [["__scopeId", "data-v-55a62cd6"]]), jm = {
  key: 0,
  class: "section-title-count"
}, Hm = {
  key: 1,
  class: "section-title-icon"
}, qm = /* @__PURE__ */ Ee({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), R(El(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        rt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", jm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (o(), i("span", Hm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hs = /* @__PURE__ */ Me(qm, [["__scopeId", "data-v-559361eb"]]), Km = { class: "status-grid" }, Jm = { class: "status-grid__columns" }, Qm = { class: "status-grid__column" }, Ym = { class: "status-grid__title" }, Xm = { class: "status-grid__column status-grid__column--right" }, Zm = { class: "status-grid__title" }, ef = {
  key: 0,
  class: "status-grid__footer"
}, tf = /* @__PURE__ */ Ee({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", Km, [
      s("div", Jm, [
        s("div", Qm, [
          s("h4", Ym, m(e.leftTitle), 1),
          rt(t.$slots, "left", {}, void 0)
        ]),
        s("div", Xm, [
          s("h4", Zm, m(e.rightTitle), 1),
          rt(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (o(), i("div", ef, [
        rt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), sf = /* @__PURE__ */ Me(tf, [["__scopeId", "data-v-73b7ba3f"]]), nf = {
  key: 0,
  class: "status-item__icon"
}, of = {
  key: 1,
  class: "status-item__count"
}, af = { class: "status-item__label" }, lf = /* @__PURE__ */ Ee({
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
      class: Be(["status-item", n.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), i("span", nf, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (o(), i("span", of, m(e.count), 1)) : y("", !0),
      s("span", af, m(e.label), 1)
    ], 2));
  }
}), Rs = /* @__PURE__ */ Me(lf, [["__scopeId", "data-v-6f929183"]]), rf = { class: "issue-card__header" }, cf = { class: "issue-card__icon" }, uf = { class: "issue-card__title" }, df = {
  key: 0,
  class: "issue-card__content"
}, mf = {
  key: 0,
  class: "issue-card__description"
}, ff = {
  key: 1,
  class: "issue-card__items"
}, vf = {
  key: 2,
  class: "issue-card__actions"
}, pf = /* @__PURE__ */ Ee({
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
      class: Be(["issue-card", n.value])
    }, [
      s("div", rf, [
        s("span", cf, m(e.icon), 1),
        s("h4", uf, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (o(), i("div", df, [
        e.description ? (o(), i("p", mf, m(e.description), 1)) : y("", !0),
        rt(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (o(), i("div", ff, [
        (o(!0), i(B, null, we(e.items, (r, c) => (o(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (o(), i("div", vf, [
        rt(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), fs = /* @__PURE__ */ Me(pf, [["__scopeId", "data-v-df6aa348"]]), gf = ["type", "disabled"], hf = {
  key: 0,
  class: "spinner"
}, yf = /* @__PURE__ */ Ee({
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
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", hf)) : y("", !0),
      e.loading ? y("", !0) : rt(t.$slots, "default", { key: 1 }, void 0)
    ], 10, gf));
  }
}), Pe = /* @__PURE__ */ Me(yf, [["__scopeId", "data-v-772abe47"]]), wf = /* @__PURE__ */ Ee({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Be(["detail-label"]),
      style: Wt({ minWidth: e.minWidth })
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Ko = /* @__PURE__ */ Me(wf, [["__scopeId", "data-v-75e9eeb8"]]), _f = /* @__PURE__ */ Ee({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), ul = /* @__PURE__ */ Me(_f, [["__scopeId", "data-v-2f186e4c"]]), kf = { class: "detail-row" }, bf = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), i("div", kf, [
      b(Ko, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          x(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), R(ul, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          x(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : rt(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), Mt = /* @__PURE__ */ Me(bf, [["__scopeId", "data-v-ef15664a"]]), $f = { class: "modal-header" }, Cf = { class: "modal-body" }, xf = { class: "status-section" }, Sf = {
  key: 0,
  class: "status-section"
}, If = { class: "section-header-row" }, Ef = {
  key: 0,
  class: "workflow-group"
}, Tf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Df = { class: "workflow-issue" }, Lf = {
  key: 1,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, Uf = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Af = { class: "workflow-name" }, zf = { class: "workflow-issue" }, Ff = {
  key: 2,
  class: "workflow-group"
}, Bf = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Wf = { class: "workflow-list" }, Gf = { class: "workflow-name" }, jf = {
  key: 3,
  class: "workflow-group"
}, Hf = { class: "workflow-group-header" }, qf = { class: "workflow-group-title" }, Kf = { class: "workflow-list" }, Jf = { class: "workflow-name" }, Qf = {
  key: 4,
  class: "workflow-group"
}, Yf = { class: "workflow-group-header" }, Xf = { class: "workflow-group-title" }, Zf = { class: "workflow-list" }, ev = { class: "workflow-name" }, tv = {
  key: 5,
  class: "workflow-group"
}, sv = { class: "workflow-group-title" }, nv = { class: "expand-icon" }, ov = {
  key: 0,
  class: "workflow-list"
}, av = { class: "workflow-name" }, lv = {
  key: 1,
  class: "status-section"
}, iv = {
  key: 0,
  class: "change-group"
}, rv = { class: "change-group-header" }, cv = { class: "change-group-title" }, uv = { class: "change-list" }, dv = { class: "node-name" }, mv = {
  key: 0,
  class: "dev-badge"
}, fv = {
  key: 1,
  class: "change-group"
}, vv = { class: "change-group-header" }, pv = { class: "change-group-title" }, gv = { class: "change-list" }, hv = { class: "node-name" }, yv = {
  key: 0,
  class: "dev-badge"
}, wv = {
  key: 2,
  class: "change-group"
}, _v = { class: "change-list" }, kv = { class: "change-item" }, bv = { class: "node-name" }, $v = {
  key: 3,
  class: "change-group"
}, Cv = {
  key: 2,
  class: "status-section"
}, xv = { class: "section-header-row" }, Sv = {
  key: 0,
  class: "drift-item"
}, Iv = { class: "drift-list" }, Ev = {
  key: 0,
  class: "drift-list-more"
}, Tv = {
  key: 1,
  class: "drift-item"
}, Mv = { class: "drift-list" }, Pv = {
  key: 0,
  class: "drift-list-more"
}, Rv = {
  key: 2,
  class: "drift-item"
}, Dv = { class: "drift-list" }, Lv = { class: "version-actual" }, Nv = { class: "version-expected" }, Uv = {
  key: 0,
  class: "drift-list-more"
}, Ov = {
  key: 3,
  class: "drift-item"
}, Av = { class: "repair-action" }, zv = {
  key: 3,
  class: "status-section"
}, Fv = { class: "info-box" }, Bv = { class: "drift-list" }, Vv = {
  key: 0,
  class: "drift-list-more"
}, Wv = {
  key: 4,
  class: "status-section"
}, Gv = { class: "warning-box" }, jv = {
  key: 5,
  class: "empty-state-inline"
}, Hv = { class: "modal-actions" }, qv = /* @__PURE__ */ Ee({
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
    }), Ct(() => t.show, (w, g) => {
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
        var C, I, E;
        const S = (E = (I = (C = t.status) == null ? void 0 : C.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : E.find((P) => P.name === $);
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
      var w, g, k, $, S, C;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((k = t.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((C = (S = ($ = t.status) == null ? void 0 : $.comparison) == null ? void 0 : S.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
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
      var k, $, S, C, I, E, P, O, U, F, D, W, ce, de, J, ue, K, N, G, pe, te, oe;
      return o(), R(cs, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (re) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = bt(() => {
            }, ["stop"]))
          }, [
            s("div", $f, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (re) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", Cf, [
              s("div", xf, [
                b(hs, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    x("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Mt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (o(), i("div", Sf, [
                s("div", If, [
                  b(hs, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      x("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (re) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (o(), i("div", Ef, [
                  s("div", Tf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Mf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", Pf, [
                    (o(!0), i(B, null, we(a.value, (re) => (o(), i("div", {
                      key: re.name,
                      class: "workflow-item"
                    }, [
                      s("span", Rf, m(re.name), 1),
                      s("span", Df, m(re.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (o(), i("div", Lf, [
                  s("div", Nf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Uf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Of, [
                    (o(!0), i(B, null, we(l.value, (re) => (o(), i("div", {
                      key: re.name,
                      class: "workflow-item"
                    }, [
                      s("span", Af, m(re.name), 1),
                      s("span", zf, m(re.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                ($ = (k = e.status.workflows) == null ? void 0 : k.new) != null && $.length ? (o(), i("div", Ff, [
                  s("div", Bf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Vf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Wf, [
                    (o(!0), i(B, null, we(e.status.workflows.new, (re) => (o(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      s("span", Gf, m(re), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (S = e.status.workflows) == null ? void 0 : S.modified) != null && C.length ? (o(), i("div", jf, [
                  s("div", Hf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", qf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Kf, [
                    (o(!0), i(B, null, we(e.status.workflows.modified, (re) => (o(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      s("span", Jf, m(re), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && E.length ? (o(), i("div", Qf, [
                  s("div", Yf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Xf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Zf, [
                    (o(!0), i(B, null, we(e.status.workflows.deleted, (re) => (o(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      s("span", ev, m(re), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (o(), i("div", tv, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (re) => n.value = !n.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", sv, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", nv, m(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), i("div", ov, [
                    (o(!0), i(B, null, we(r.value, (re) => (o(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      s("span", av, m(re), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (o(), i("div", lv, [
                b(hs, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (O = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && O.length ? (o(), i("div", iv, [
                  s("div", rv, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", cv, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", uv, [
                    (o(!0), i(B, null, we(e.status.git_changes.nodes_added, (re) => (o(), i("div", {
                      key: v(re),
                      class: "change-item"
                    }, [
                      s("span", dv, m(v(re)), 1),
                      p(re) ? (o(), i("span", mv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (F = (U = e.status.git_changes) == null ? void 0 : U.nodes_removed) != null && F.length ? (o(), i("div", fv, [
                  s("div", vv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", pv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", gv, [
                    (o(!0), i(B, null, we(e.status.git_changes.nodes_removed, (re) => (o(), i("div", {
                      key: v(re),
                      class: "change-item"
                    }, [
                      s("span", hv, m(v(re)), 1),
                      p(re) ? (o(), i("span", yv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (D = e.status.git_changes) != null && D.workflow_changes ? (o(), i("div", wv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", _v, [
                    s("div", kv, [
                      s("span", bv, m(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (W = e.status.git_changes) != null && W.has_other_changes ? (o(), i("div", $v, [...g[21] || (g[21] = [
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
              (ce = e.status.comparison) != null && ce.is_synced ? y("", !0) : (o(), i("div", Cv, [
                s("div", xv, [
                  b(hs, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      x("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (re) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (J = (de = e.status.comparison) == null ? void 0 : de.missing_nodes) != null && J.length ? (o(), i("div", Sv, [
                  b(Mt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", Iv, [
                    (o(!0), i(B, null, we(e.status.comparison.missing_nodes.slice(0, 10), (re) => (o(), i("div", {
                      key: re,
                      class: "drift-list-item"
                    }, " - " + m(re), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), i("div", Ev, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (K = (ue = e.status.comparison) == null ? void 0 : ue.extra_nodes) != null && K.length ? (o(), i("div", Tv, [
                  b(Mt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Mv, [
                    (o(!0), i(B, null, we(e.status.comparison.extra_nodes.slice(0, 10), (re) => (o(), i("div", {
                      key: re,
                      class: "drift-list-item"
                    }, " - " + m(re), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), i("div", Pv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (G = (N = e.status.comparison) == null ? void 0 : N.version_mismatches) != null && G.length ? (o(), i("div", Rv, [
                  b(Mt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Dv, [
                    (o(!0), i(B, null, we(e.status.comparison.version_mismatches.slice(0, 10), (re) => (o(), i("div", {
                      key: re.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(m(re.name) + ": ", 1),
                      s("span", Lv, m(re.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", Nv, m(re.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (o(), i("div", Uv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((pe = e.status.comparison) == null ? void 0 : pe.packages_in_sync) === !1 ? (o(), i("div", Ov, [
                  b(Mt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Av, [
                  b(Pe, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (re) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      x(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (oe = (te = e.status.comparison) == null ? void 0 : te.disabled_nodes) != null && oe.length ? (o(), i("div", zv, [
                b(hs, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Fv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Bv, [
                  (o(!0), i(B, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (re) => (o(), i("div", {
                    key: re,
                    class: "drift-list-item"
                  }, " • " + m(re), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), i("div", Vv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), i("div", Wv, [
                b(hs, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Gv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (o(), i("div", jv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Hv, [
              b(Pe, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (re) => w.$emit("close"))
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
}), Kv = /* @__PURE__ */ Me(qv, [["__scopeId", "data-v-e2b37122"]]), Jv = { class: "base-modal-header" }, Qv = {
  key: 0,
  class: "base-modal-title"
}, Yv = { class: "base-modal-body" }, Xv = {
  key: 0,
  class: "base-modal-loading"
}, Zv = {
  key: 1,
  class: "base-modal-error"
}, ep = {
  key: 0,
  class: "base-modal-footer"
}, tp = /* @__PURE__ */ Ee({
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
    }), Vn(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (o(), R(cs, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Wt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", Jv, [
            rt(c.$slots, "header", {}, () => [
              e.title ? (o(), i("h3", Qv, m(e.title), 1)) : y("", !0)
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
          s("div", Yv, [
            e.loading ? (o(), i("div", Xv, "Loading...")) : e.error ? (o(), i("div", Zv, m(e.error), 1)) : rt(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (o(), i("div", ep, [
            rt(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), Pt = /* @__PURE__ */ Me(tp, [["__scopeId", "data-v-06a4be14"]]), sp = ["type", "disabled"], np = {
  key: 0,
  class: "spinner"
}, op = /* @__PURE__ */ Ee({
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
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", np)) : y("", !0),
      rt(t.$slots, "default", {}, void 0)
    ], 10, sp));
  }
}), Oe = /* @__PURE__ */ Me(op, [["__scopeId", "data-v-f3452606"]]), ap = ["type", "value", "placeholder", "disabled"], lp = {
  key: 0,
  class: "base-input-error"
}, ip = /* @__PURE__ */ Ee({
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
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          n[1] || (n[1] = xs((a) => t.$emit("enter"), ["enter"])),
          n[2] || (n[2] = xs((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ap),
      e.error ? (o(), i("span", lp, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ Me(ip, [["__scopeId", "data-v-9ba02cdc"]]), rp = ["disabled"], cp = { class: "dropdown-value" }, up = ["onClick"], dp = {
  key: 0,
  class: "dropdown-error"
}, mp = /* @__PURE__ */ Ee({
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
    function d(C) {
      return typeof C == "string" ? C : C.value;
    }
    function f(C) {
      return typeof C == "string" ? C : C.label;
    }
    const v = M(() => {
      if (!n.modelValue && n.placeholder)
        return n.placeholder;
      const C = n.options.find((I) => d(I) === n.modelValue);
      return C ? f(C) : String(n.modelValue);
    });
    function p() {
      n.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(C) {
      a("update:modelValue", d(C)), w();
    }
    function k() {
      if (!r.value) return;
      const C = r.value.getBoundingClientRect(), I = window.innerHeight, E = I - C.bottom, P = C.top, O = Math.min(300, n.options.length * 36 + 8), U = E < O && P > E;
      u.value = {
        position: "fixed",
        left: `${C.left}px`,
        width: `${C.width}px`,
        maxHeight: "300px",
        ...U ? { bottom: `${I - C.top + 4}px` } : { top: `${C.bottom + 4}px` }
      };
    }
    Ct(l, async (C) => {
      C && (await qt(), k());
    });
    function $() {
      l.value && k();
    }
    function S(C) {
      C.key === "Escape" && l.value && w();
    }
    return dt(() => {
      window.addEventListener("scroll", $, !0), window.addEventListener("keydown", S);
    }), Vn(() => {
      window.removeEventListener("scroll", $, !0), window.removeEventListener("keydown", S);
    }), (C, I) => (o(), i("div", {
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
        s("span", cp, m(v.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, rp),
      (o(), R(cs, { to: "body" }, [
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
          (o(!0), i(B, null, we(e.options, (E) => (o(), i("div", {
            key: d(E),
            class: Be(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (P) => g(E)
          }, m(f(E)), 11, up))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (o(), i("span", dp, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), fp = /* @__PURE__ */ Me(mp, [["__scopeId", "data-v-857e085b"]]), vp = { class: "destination-section" }, pp = { class: "section-label" }, gp = { class: "destination-row" }, hp = {
  key: 0,
  class: "path-separator"
}, yp = /* @__PURE__ */ Ee({
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
          var C;
          return S.toLowerCase() === ((C = n.suggestedDirectory) == null ? void 0 : C.toLowerCase());
        }
      );
      $ && $ !== r.value && (v = !0, r.value = $, qt(() => {
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
    return Ct(w, ($) => {
      a("update:modelValue", $);
    }, { immediate: !0 }), Ct(() => n.suggestedDirectory, g), Ct(d, g), Ct(r, ($, S) => {
      v || S === "" || (f.value = !0);
    }), dt(k), ($, S) => (o(), i("div", vp, [
      s("h4", pp, m(e.label), 1),
      s("div", gp, [
        b(fp, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (o(), i("span", hp, "/")) : y("", !0),
        r.value !== "__custom__" ? (o(), R(Dt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => c.value = C),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (o(), R(Dt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = (C) => u.value = C),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), uc = /* @__PURE__ */ Me(yp, [["__scopeId", "data-v-2fbc2b02"]]);
function wp(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function _p(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let n;
  try {
    n = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!wp(n.hostname)) return { kind: "unknown" };
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
function kp(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ri(e, t, n) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${kp(n)}`;
}
const bp = { class: "hf-file-browser" }, $p = { class: "browser-header" }, Cp = { class: "repo-info" }, xp = { class: "repo-id" }, Sp = {
  key: 0,
  class: "revision-pill"
}, Ip = {
  key: 0,
  class: "loading-state"
}, Ep = {
  key: 1,
  class: "error-state"
}, Tp = { class: "toolbar" }, Mp = { class: "toolbar-actions" }, Pp = { class: "file-list-container" }, Rp = {
  key: 0,
  class: "file-list-header"
}, Dp = ["checked", "indeterminate"], Lp = {
  key: 1,
  class: "file-checkbox-spacer"
}, Np = { class: "sort-indicator" }, Up = { class: "sort-indicator" }, Op = {
  key: 1,
  class: "empty-state"
}, Ap = {
  key: 2,
  class: "file-list"
}, zp = ["onClick"], Fp = ["checked", "onChange"], Bp = { class: "file-path" }, Vp = { class: "file-size" }, Wp = { class: "action-bar" }, Gp = { class: "summary-info" }, jp = { class: "summary-count" }, Hp = { class: "summary-size" }, qp = /* @__PURE__ */ Ee({
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
      let ie = r.value;
      if (n.initialPath) {
        const Ie = n.initialPath.endsWith("/") ? n.initialPath : `${n.initialPath}/`;
        ie = ie.filter((he) => he.path.startsWith(Ie) || he.path === n.initialPath);
      }
      if (v.value && (ie = ie.filter((Ie) => Ie.is_model_file)), f.value.trim()) {
        const Ie = f.value.toLowerCase();
        ie = ie.filter((he) => he.path.toLowerCase().includes(Ie));
      }
      return ie;
    }), S = M(() => {
      const ie = [...$.value];
      return ie.sort((Ie, he) => {
        let Fe;
        return p.value === "name" ? Fe = Ie.path.localeCompare(he.path) : Fe = Ie.size - he.size, w.value ? Fe : -Fe;
      }), ie;
    }), C = M(() => $.value.length === 0 ? !1 : $.value.every((ie) => c.value.has(ie.path))), I = M(() => $.value.some((ie) => c.value.has(ie.path))), E = M(() => g.value.trim().length > 0), P = M(() => {
      let ie = 0;
      for (const Ie of c.value) {
        const he = r.value.find((Fe) => Fe.path === Ie);
        he && (ie += he.size);
      }
      return ie;
    }), O = M(() => {
      if (c.value.size === 0) return null;
      const ie = /* @__PURE__ */ new Set();
      for (const Ie of c.value) {
        const he = pe(Ie);
        he && ie.add(he.toLowerCase());
      }
      return ie.size !== 1 ? null : [...ie][0];
    }), U = M(() => n.mode || "download"), F = M(() => n.actionLabel || (U.value === "source" ? "Use as Source" : "Queue Download")), D = M(() => U.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), W = M(() => U.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !E.value);
    function ce(ie) {
      if (ie === 0) return "0 B";
      const Ie = 1024 * 1024 * 1024, he = 1024 * 1024, Fe = 1024;
      return ie >= Ie ? `${(ie / Ie).toFixed(2)} GB` : ie >= he ? `${(ie / he).toFixed(1)} MB` : ie >= Fe ? `${(ie / Fe).toFixed(0)} KB` : `${ie} B`;
    }
    function de(ie) {
      const Ie = ie.match(k);
      return Ie ? `${Ie[1]}${Ie[4]}` : null;
    }
    function J(ie) {
      if (U.value === "source") {
        c.value = c.value.has(ie.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ie.path]);
        return;
      }
      const Ie = new Set(c.value), he = Ie.has(ie.path), Fe = ie.shard_group || de(ie.path);
      if (Fe) {
        const Ne = r.value.filter((be) => (be.shard_group || de(be.path)) === Fe);
        he ? Ne.forEach((be) => Ie.delete(be.path)) : Ne.forEach((be) => Ie.add(be.path));
      } else
        he ? Ie.delete(ie.path) : Ie.add(ie.path);
      c.value = Ie;
    }
    function ue() {
      const ie = new Set(c.value);
      for (const Ie of $.value)
        Ie.is_model_file && ie.add(Ie.path);
      c.value = ie;
    }
    function K() {
      c.value = /* @__PURE__ */ new Set();
    }
    function N() {
      if (C.value) {
        const ie = new Set(c.value);
        for (const Ie of $.value)
          ie.delete(Ie.path);
        c.value = ie;
      } else {
        const ie = new Set(c.value);
        for (const Ie of $.value)
          ie.add(Ie.path);
        c.value = ie;
      }
    }
    function G(ie) {
      p.value === ie ? w.value = !w.value : (p.value = ie, w.value = !0);
    }
    function pe(ie) {
      const Ie = ie.split("/");
      return Ie.length >= 2 ? Ie[Ie.length - 2] : null;
    }
    function te() {
      return g.value.trim();
    }
    function oe() {
      if (c.value.size === 0 || !E.value) return;
      const ie = te(), Ie = [];
      for (const he of c.value) {
        const Fe = r.value.find((Ne) => Ne.path === he);
        Fe && Ie.push({
          url: Ri(n.repoId, n.revision, Fe.path),
          destination: ie,
          filename: Fe.path.split("/").pop() || Fe.path
        });
      }
      a("queue", Ie);
    }
    function re() {
      if (c.value.size !== 1) return;
      const [ie] = c.value;
      a("selectSource", Ri(n.repoId, n.revision, ie));
    }
    function H() {
      if (U.value === "source") {
        re();
        return;
      }
      oe();
    }
    async function se() {
      if (n.repoId) {
        u.value = !0, d.value = null;
        try {
          const ie = `https://huggingface.co/${n.repoId}/tree/${n.revision || "main"}`, Ie = await l(ie);
          if (r.value = Ie.files, n.preselectedFile) {
            const he = r.value.find((Fe) => Fe.path === n.preselectedFile);
            he && J(he);
          }
        } catch (ie) {
          d.value = ie instanceof Error ? ie.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return Ct(() => [n.repoId, n.revision], () => {
      n.repoId && se();
    }, { immediate: !1 }), dt(() => {
      se();
    }), (ie, Ie) => (o(), i("div", bp, [
      s("div", $p, [
        s("button", {
          class: "back-btn",
          onClick: Ie[0] || (Ie[0] = (he) => ie.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", Cp, [
          s("span", xp, m(e.repoId), 1),
          e.revision ? (o(), i("span", Sp, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (o(), i("div", Ip, " Loading repository files... ")) : d.value ? (o(), i("div", Ep, m(d.value), 1)) : (o(), i(B, { key: 2 }, [
        s("div", Tp, [
          b(Dt, {
            modelValue: f.value,
            "onUpdate:modelValue": Ie[1] || (Ie[1] = (he) => f.value = he),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", Mp, [
            s("button", {
              class: Be(["toggle-btn", { active: v.value }]),
              onClick: Ie[2] || (Ie[2] = (he) => v.value = !v.value)
            }, m(v.value ? "Models Only" : "All Files"), 3),
            U.value === "download" ? (o(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: ue
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: K
            }, "Clear")
          ])
        ]),
        s("div", Pp, [
          $.value.length > 0 ? (o(), i("div", Rp, [
            U.value === "download" ? (o(), i("input", {
              key: 0,
              type: "checkbox",
              checked: C.value,
              indeterminate: I.value && !C.value,
              class: "file-checkbox",
              onChange: N
            }, null, 40, Dp)) : (o(), i("span", Lp)),
            s("span", {
              class: "header-name",
              onClick: Ie[3] || (Ie[3] = (he) => G("name"))
            }, [
              Ie[7] || (Ie[7] = x(" Name ", -1)),
              s("span", Np, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Ie[4] || (Ie[4] = (he) => G("size"))
            }, [
              Ie[8] || (Ie[8] = x(" Size ", -1)),
              s("span", Up, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          $.value.length === 0 ? (o(), i("div", Op, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (o(), i("div", Ap, [
            (o(!0), i(B, null, we(S.value, (he) => (o(), i("div", {
              key: he.path,
              class: Be(["file-item", { selected: c.value.has(he.path) }]),
              onClick: (Fe) => J(he)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(he.path),
                class: "file-checkbox",
                onClick: Ie[5] || (Ie[5] = bt(() => {
                }, ["stop"])),
                onChange: (Fe) => J(he)
              }, null, 40, Fp),
              s("span", Bp, m(he.path), 1),
              s("span", Vp, m(ce(he.size)), 1)
            ], 10, zp))), 128))
          ]))
        ]),
        U.value === "download" ? (o(), R(uc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Ie[6] || (Ie[6] = (he) => g.value = he),
          "suggested-directory": O.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Wp, [
          s("div", Gp, [
            s("span", jp, m(D.value), 1),
            s("span", Hp, m(ce(P.value)), 1)
          ]),
          b(Oe, {
            variant: "primary",
            disabled: W.value,
            onClick: H
          }, {
            default: h(() => [
              x(m(F.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Kp = /* @__PURE__ */ Me(qp, [["__scopeId", "data-v-06caa551"]]), Jp = { class: "token-config-modal" }, Qp = { class: "provider-info" }, Yp = { class: "provider-icon" }, Xp = { class: "provider-name" }, Zp = {
  key: 0,
  class: "current-token"
}, eg = { class: "mask" }, tg = { class: "token-input-section" }, sg = { class: "input-label" }, ng = { class: "help-text" }, og = ["href"], ag = { class: "modal-actions" }, lg = /* @__PURE__ */ Ee({
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
    return ($, S) => (o(), R(Pt, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = (C) => $.$emit("close"))
    }, {
      body: h(() => [
        s("div", Jp, [
          s("div", Qp, [
            s("span", Yp, m(f.value), 1),
            s("span", Xp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (o(), i("div", Zp, [
            S[4] || (S[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", eg, m(e.currentTokenMask), 1),
            b(Oe, {
              variant: "danger",
              size: "sm",
              onClick: k,
              loading: u.value
            }, {
              default: h(() => [...S[3] || (S[3] = [
                x(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", tg, [
            s("label", sg, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(Dt, {
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", ng, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, og)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", ag, [
          b(Oe, {
            variant: "secondary",
            onClick: S[1] || (S[1] = (C) => $.$emit("close"))
          }, {
            default: h(() => [...S[5] || (S[5] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
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
}), ig = /* @__PURE__ */ Me(lg, [["__scopeId", "data-v-525ec64a"]]), rg = { class: "huggingface-tab" }, cg = {
  key: 0,
  class: "search-section"
}, ug = { class: "search-header" }, dg = { class: "search-bar" }, mg = {
  key: 1,
  class: "search-results"
}, fg = {
  key: 0,
  class: "loading-state"
}, vg = {
  key: 1,
  class: "error-state"
}, pg = {
  key: 2,
  class: "results-list"
}, gg = ["onClick"], hg = { class: "repo-header" }, yg = { class: "repo-id" }, wg = { class: "repo-stats" }, _g = {
  class: "stat",
  title: "Downloads"
}, kg = {
  class: "stat",
  title: "Likes"
}, bg = {
  key: 0,
  class: "repo-desc"
}, $g = {
  key: 1,
  class: "repo-tags"
}, Cg = {
  key: 3,
  class: "empty-state"
}, xg = {
  key: 4,
  class: "hint-state"
}, Sg = /* @__PURE__ */ Ee({
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
      const F = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || F.includes("authentication") || F.includes("unauthorized");
    });
    function S(F) {
      return F >= 1e6 ? `${(F / 1e6).toFixed(1)}M` : F >= 1e3 ? `${(F / 1e3).toFixed(1)}K` : String(F);
    }
    async function C() {
      const F = l.value.trim();
      if (!F) return;
      u.value = null;
      const D = _p(F);
      if (D.kind === "file" && D.repoId && D.path) {
        f.value = D.repoId, v.value = D.revision || "main";
        const W = D.path.split("/");
        W.length > 1 ? p.value = W.slice(0, -1).join("/") : p.value = void 0, w.value = D.path, a.value = "browse";
        return;
      }
      if (D.kind === "repo" && D.repoId) {
        f.value = D.repoId, v.value = D.revision || "main", p.value = D.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(F) && !F.includes("://")) {
        f.value = F, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const W = await t(F);
        r.value = W.results, d.value = !0;
      } catch (W) {
        u.value = W instanceof Error ? W.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(F) {
      f.value = F, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", f.value = null, p.value = void 0, w.value = void 0;
    }
    async function P() {
      try {
        const F = await n();
        k.value = F.huggingface_token || null;
      } catch (F) {
        console.error("Failed to load config:", F);
      }
    }
    function O() {
      P(), $.value && l.value && C();
    }
    function U() {
      k.value = null;
    }
    return dt(P), (F, D) => (o(), i("div", rg, [
      a.value === "search" ? (o(), i("div", cg, [
        s("div", ug, [
          s("div", dg, [
            b(Dt, {
              modelValue: l.value,
              "onUpdate:modelValue": D[0] || (D[0] = (W) => l.value = W),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: xs(C, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Oe, {
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
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: D[1] || (D[1] = (W) => g.value = !0)
          }, {
            default: h(() => [
              x(m(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (o(), i("div", mg, [
        c.value ? (o(), i("div", fg, " Searching HuggingFace... ")) : u.value ? (o(), i("div", vg, [
          s("p", null, m(u.value), 1),
          $.value ? (o(), R(Oe, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: D[2] || (D[2] = (W) => g.value = !0)
          }, {
            default: h(() => [...D[7] || (D[7] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (o(), i("div", pg, [
          (o(!0), i(B, null, we(r.value, (W) => (o(), i("div", {
            key: W.repo_id,
            class: "repo-card",
            onClick: (ce) => I(W.repo_id)
          }, [
            s("div", hg, [
              s("span", yg, m(W.repo_id), 1),
              s("div", wg, [
                s("span", _g, [
                  D[8] || (D[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + m(S(W.downloads)), 1)
                ]),
                s("span", kg, [
                  D[9] || (D[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + m(S(W.likes)), 1)
                ])
              ])
            ]),
            W.description ? (o(), i("p", bg, m(W.description), 1)) : y("", !0),
            W.tags.length > 0 ? (o(), i("div", $g, [
              (o(!0), i(B, null, we(W.tags.slice(0, 5), (ce) => (o(), i("span", {
                key: ce,
                class: "tag"
              }, m(ce), 1))), 128))
            ])) : y("", !0)
          ], 8, gg))), 128))
        ])) : d.value ? (o(), i("div", Cg, " No repositories found ")) : (o(), i("div", xg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (o(), R(Kp, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: E,
        onQueue: D[3] || (D[3] = (W) => F.$emit("queue", W)),
        onSelectSource: D[4] || (D[4] = (W) => F.$emit("selectSource", W))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (o(), R(ig, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: D[5] || (D[5] = (W) => g.value = !1),
        onSaved: O,
        onCleared: U
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), dc = /* @__PURE__ */ Me(Sg, [["__scopeId", "data-v-eccbf32d"]]), Ig = { class: "candidate-card" }, Eg = { class: "candidate-main" }, Tg = { class: "candidate-url" }, Mg = { class: "candidate-meta" }, Pg = { class: "meta-chip" }, Rg = {
  key: 0,
  class: "meta-chip"
}, Dg = ["aria-expanded"], Lg = {
  key: 1,
  class: "meta-chip"
}, Ng = { class: "match-popover-reasons" }, Ug = { class: "candidate-footer" }, Og = {
  key: 0,
  class: "candidate-context"
}, Ag = { key: 1 }, zg = /* @__PURE__ */ Ee({
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
    Ct(a, (v) => {
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
      return o(), i("article", Ig, [
        s("div", Eg, [
          s("div", Tg, m(e.candidate.url), 1),
          s("div", Mg, [
            s("span", Pg, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (o(), i("span", Rg, [
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
                onClick: p[0] || (p[0] = bt((k) => a.value = !a.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(f(e.candidate.confidence)), 1)
              ], 8, Dg)) : (o(), i("span", Lg, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(f(e.candidate.confidence)), 1)
              ])),
              a.value && ((g = e.candidate.reasons) != null && g.length) ? (o(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = bt(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Ng, [
                  (o(!0), i(B, null, we(e.candidate.reasons, (k) => (o(), i("span", {
                    key: k,
                    class: "reason-chip"
                  }, m(k), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Ug, [
            e.candidate.context ? (o(), i("details", Og, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (o(), i("div", Ag)),
            b(Oe, {
              variant: "primary",
              size: "sm",
              loading: e.loading,
              onClick: p[2] || (p[2] = (k) => n("select", e.candidate.url))
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
}), mc = /* @__PURE__ */ Me(zg, [["__scopeId", "data-v-329b9068"]]), Fg = { class: "source-url-form" }, Bg = { class: "input-group" }, Vg = { key: 0 }, Wg = {
  key: 1,
  class: "description"
}, Gg = { class: "actions" }, jg = /* @__PURE__ */ Ee({
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
    return (d, f) => (o(), i("div", Fg, [
      s("div", Bg, [
        e.label ? (o(), i("label", Vg, m(e.label), 1)) : y("", !0),
        b(Dt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a("update:modelValue", v)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (o(), i("p", Wg, m(e.description), 1)) : y("", !0)
      ]),
      rt(d.$slots, "default", {}, void 0),
      s("div", Gg, [
        b(Oe, {
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
}), fc = /* @__PURE__ */ Me(jg, [["__scopeId", "data-v-e2610d45"]]), Hg = { class: "source-picker" }, qg = {
  key: 0,
  class: "model-summary"
}, Kg = { class: "model-heading" }, Jg = { class: "summary-name" }, Qg = { class: "summary-meta" }, Yg = {
  key: 0,
  class: "hash-row"
}, Xg = { class: "hash-value" }, Zg = {
  key: 1,
  class: "hash-row"
}, eh = { class: "hash-value" }, th = {
  key: 2,
  class: "hash-row"
}, sh = { class: "hash-value" }, nh = {
  key: 4,
  class: "hash-error"
}, oh = { class: "tab-bar" }, ah = ["onClick"], lh = {
  key: 1,
  class: "tab-content"
}, ih = { class: "section-header-row" }, rh = {
  key: 0,
  class: "state-message"
}, ch = {
  key: 1,
  class: "error-message"
}, uh = {
  key: 2,
  class: "candidate-list"
}, dh = {
  key: 3,
  class: "state-message"
}, mh = {
  key: 2,
  class: "tab-content source-browser-content"
}, fh = {
  key: 3,
  class: "tab-content"
}, vh = { class: "section-header-row" }, ph = /* @__PURE__ */ Ee({
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
    ], u = _("workflow"), d = _([]), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = M(() => d.value.filter((I) => I.source === "workflow")), $ = M(() => !!(n.model.hash && (!n.model.blake3 || !n.model.sha256)));
    async function S() {
      f.value = !0, v.value = null;
      try {
        const I = await l(n.model.hash);
        d.value = I.candidates;
      } catch (I) {
        v.value = I instanceof Error ? I.message : "Failed to scan workflows";
      } finally {
        f.value = !1;
      }
    }
    async function C() {
      if (n.model.hash) {
        w.value = !0, g.value = null;
        try {
          const I = await r(n.model.hash);
          a("hashesComputed", I);
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return dt(S), (I, E) => (o(), i("div", Hg, [
      e.showModelSummary ? (o(), i("div", qg, [
        s("div", Kg, [
          E[4] || (E[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Jg, m(e.model.filename), 1)
        ]),
        s("div", Qg, [
          e.model.hash ? (o(), i("div", Yg, [
            E[5] || (E[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Xg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (o(), i("div", Zg, [
            E[6] || (E[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", eh, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (o(), i("div", th, [
            E[7] || (E[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", sh, m(e.model.sha256), 1)
          ])) : y("", !0),
          $.value ? (o(), R(Oe, {
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
          g.value ? (o(), i("p", nh, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", oh, [
        (o(), i(B, null, we(c, (P) => s("button", {
          key: P.id,
          class: Be(["tab-btn", { active: u.value === P.id }]),
          onClick: (O) => u.value = P.id
        }, m(P.label), 11, ah)), 64))
      ]),
      u.value === "workflow" ? (o(), i("section", lh, [
        s("div", ih, [
          E[10] || (E[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(Oe, {
            variant: "secondary",
            size: "sm",
            loading: f.value,
            onClick: S
          }, {
            default: h(() => [...E[9] || (E[9] = [
              x(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        f.value ? (o(), i("div", rh, "Scanning workflows...")) : v.value ? (o(), i("div", ch, m(v.value), 1)) : k.value.length ? (o(), i("div", uh, [
          (o(!0), i(B, null, we(k.value, (P) => (o(), R(mc, {
            key: `${P.workflow}:${P.url}`,
            candidate: P,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === P.url,
            onSelect: E[0] || (E[0] = (O) => a("selectSource", O))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (o(), i("div", dh, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (o(), i("section", mh, [
        b(dc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: E[1] || (E[1] = (P) => a("selectSource", P))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (o(), i("section", fh, [
        s("div", vh, [
          s("div", null, [
            E[11] || (E[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(fc, {
          modelValue: p.value,
          "onUpdate:modelValue": E[2] || (E[2] = (P) => p.value = P),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: E[3] || (E[3] = (P) => a("selectSource", P))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0)
    ]));
  }
}), gh = /* @__PURE__ */ Me(ph, [["__scopeId", "data-v-e9633660"]]), hh = {
  key: 0,
  class: "error-message"
}, yh = /* @__PURE__ */ Ee({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { addModelSource: l } = ft(), r = _(n.model), c = _(null), u = _(null);
    Ct(() => n.model, (v) => {
      r.value = v;
    });
    async function d(v) {
      if (!(!v || !n.model.hash)) {
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
    return (v, p) => (o(), R(Pt, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        b(gh, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: f
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (o(), i("p", hh, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(Oe, {
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
}), vc = /* @__PURE__ */ Me(yh, [["__scopeId", "data-v-62104cdb"]]), wh = { class: "readiness-body" }, _h = {
  key: 0,
  class: "issue-section"
}, kh = { class: "section-heading" }, bh = { class: "issue-list" }, $h = { class: "issue-main" }, Ch = { class: "issue-name" }, xh = { class: "issue-meta" }, Sh = { key: 0 }, Ih = { key: 1 }, Eh = ["disabled", "onClick"], Th = {
  key: 1,
  class: "issue-note"
}, Mh = {
  key: 1,
  class: "issue-section"
}, Ph = { class: "section-heading" }, Rh = { class: "issue-list" }, Dh = { class: "issue-main" }, Lh = { class: "issue-name" }, Nh = { class: "issue-meta" }, Uh = { class: "issue-reason" }, Oh = ["disabled", "onClick"], Ah = {
  key: 1,
  class: "issue-note"
}, zh = {
  key: 2,
  class: "empty-state"
}, Fh = {
  key: 3,
  class: "error-message"
}, Bh = /* @__PURE__ */ Ee({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, updateNodeCriticality: r } = ft(), c = _(null), u = _(null), d = _(null), f = _(null), v = M(() => n.warnings.models_without_sources), p = M(() => n.warnings.nodes_without_provenance);
    async function w(S) {
      u.value = S, f.value = null;
      try {
        c.value = await l(S);
      } catch (C) {
        f.value = C instanceof Error ? C.message : `Failed to load ${S}`;
      } finally {
        u.value = null;
      }
    }
    async function g(S) {
      d.value = S, f.value = null;
      try {
        const C = await r(S, "optional");
        if (C.status !== "success") {
          f.value = C.message || `Failed to update ${S}`;
          return;
        }
        a("revalidate");
      } catch (C) {
        f.value = C instanceof Error ? C.message : `Failed to update ${S}`;
      } finally {
        d.value = null;
      }
    }
    function k() {
      c.value = null, a("revalidate");
    }
    function $() {
      a("revalidate");
    }
    return (S, C) => (o(), i(B, null, [
      b(Pt, {
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
          s("div", wh, [
            v.value.length ? (o(), i("section", _h, [
              s("div", kh, [
                C[4] || (C[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(v.value.length), 1)
              ]),
              s("div", bh, [
                (o(!0), i(B, null, we(v.value, (I) => (o(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", $h, [
                    s("div", Ch, m(I.filename), 1),
                    s("div", xh, [
                      I.hash ? (o(), i("span", Sh, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (o(), i("span", Ih, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (E) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, Eh)) : (o(), i("span", Th, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (o(), i("section", Mh, [
              s("div", Ph, [
                C[5] || (C[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", Rh, [
                (o(!0), i(B, null, we(p.value, (I) => (o(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", Dh, [
                    s("div", Lh, m(I.name), 1),
                    s("div", Nh, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Uh, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (E) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, Oh)) : (o(), i("span", Ah, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !v.value.length && !p.value.length ? (o(), i("div", zh, " No reproducibility issues remain. ")) : y("", !0),
            f.value ? (o(), i("div", Fh, m(f.value), 1)) : y("", !0)
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
      c.value ? (o(), R(vc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: C[2] || (C[2] = (I) => c.value = null),
        onSaved: k,
        onHashesComputed: $
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Ll = /* @__PURE__ */ Me(Bh, [["__scopeId", "data-v-03f88a10"]]), Vh = { class: "health-section-header" }, Wh = { class: "suggestions-content" }, Gh = { class: "suggestions-text" }, jh = { style: { "margin-top": "var(--cg-space-3)" } }, Hh = {
  key: 1,
  class: "no-issues-text"
}, qh = {
  key: 2,
  class: "no-issues-text"
}, Kh = /* @__PURE__ */ Ee({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
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
    function C() {
      S.value = !0, k("repair-environment");
    }
    function I() {
      S.value = !1;
    }
    function E() {
      l.value = !1;
    }
    const P = M(() => {
      const Y = a.status.workflows.analyzed || [], j = Y.filter(
        (ve) => ve.unresolved_models_count > 0 || ve.ambiguous_models_count > 0
      );
      return j.length === 0 && a.status.missing_models_count > 0 ? Y.filter((ve) => ve.sync_state === "synced") : j;
    });
    function O() {
      const Y = P.value;
      Y.length !== 0 && ($.value = !0, k("repair-missing-models", Y.map((j) => j.name)));
    }
    function U() {
      $.value = !1;
    }
    t({ resetRepairingState: U, resetRepairingEnvironmentState: I, closeDetailModal: E });
    const F = M(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), D = M(() => a.status.has_changes), W = M(() => {
      const Y = a.status.git_changes;
      return Y.nodes_added.length > 0 || Y.nodes_removed.length > 0 || Y.workflow_changes;
    }), ce = M(() => a.status.has_changes || F.value), de = M(() => {
      var Y;
      return ((Y = u.value) == null ? void 0 : Y.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), J = M(
      () => de.value.models_without_sources.length
    ), ue = M(
      () => de.value.nodes_without_provenance.length
    ), K = M(
      () => J.value + ue.value
    ), N = M(
      () => K.value > 0
    ), G = M(() => {
      const Y = [];
      if (J.value > 0 && Y.push(`${J.value} model${J.value === 1 ? "" : "s"} missing download source`), ue.value > 0) {
        const j = de.value.nodes_without_provenance.filter((_e) => _e.criticality === "optional").length, ve = ue.value - j;
        ve > 0 && Y.push(`${ve} required node${ve === 1 ? "" : "s"} missing portable source`), j > 0 && Y.push(`${j} optional node${j === 1 ? "" : "s"} missing portable source`);
      }
      return Y;
    });
    async function pe() {
      f.value = !0, d.value = null;
      try {
        u.value = await v();
      } catch (Y) {
        d.value = Y instanceof Error ? Y.message : "Failed to check readiness";
      } finally {
        f.value = !1;
      }
    }
    async function te() {
      await pe();
    }
    Ct(
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
    const oe = M(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), re = M(() => a.status.git_changes.has_other_changes), H = M(() => {
      var Y;
      return ((Y = a.status.workflows.analyzed) == null ? void 0 : Y.filter((j) => j.status === "broken")) || [];
    }), se = M(() => {
      var Y;
      return ((Y = a.status.workflows.analyzed) == null ? void 0 : Y.filter(
        (j) => j.has_path_sync_issues && !j.has_issues
      )) || [];
    }), ie = M(() => H.value.length > 0);
    function Ie(Y) {
      const j = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ve of j) {
        const _e = Y.match(ve);
        if (_e != null && _e[1])
          return _e[1];
      }
      return null;
    }
    function he(Y) {
      const j = Y.map(Ie).filter((ve) => !!ve);
      return [...new Set(j)];
    }
    function Fe(Y) {
      if (Y.length === 0) return "";
      if (Y.length === 1) return ` (>= ${Y[0]})`;
      const j = Y.slice(0, 2).map((_e) => `>= ${_e}`).join(", "), ve = Y.length > 2;
      return ` (${j}${ve ? ", ..." : ""})`;
    }
    function Ne(Y) {
      return Y.replace(/uninstallable node mappings?/gi, (j) => j.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function be(Y) {
      const j = Ne(Y.issue_summary || "Has issues"), ve = /(?:>=|v?\d+\.\d+)/i.test(j), _e = he(Y.version_gated_guidance || []);
      return (Y.nodes_version_gated_count || 0) > 0 && _e.length > 0 && !ve ? `${Y.name} — ${j} (needs ComfyUI ${_e.map((je) => `>= ${je}`).join(", ")})` : `${Y.name} — ${j}`;
    }
    const Re = M(() => H.value.reduce(
      (Y, j) => Y + (j.nodes_version_gated_count || 0),
      0
    )), ge = M(() => {
      const Y = H.value.flatMap(
        (j) => he(j.version_gated_guidance || [])
      );
      return [...new Set(Y)];
    }), $e = M(() => H.value.reduce(
      (Y, j) => Y + (j.nodes_uninstallable_count || 0),
      0
    )), T = M(() => {
      const Y = [];
      return Re.value > 0 && Y.push(
        `${Re.value} require newer ComfyUI${Fe(ge.value)}`
      ), $e.value > 0 && Y.push(`${$e.value} need community packages`), Y.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Y.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), z = M(() => ie.value || se.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), ae = M(() => z.value || N.value || !!d.value), Te = M(() => {
      const Y = [];
      return a.status.workflows.new.length > 0 && Y.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && Y.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && Y.push(`${a.status.workflows.deleted.length} deleted`), Y.length > 0 ? `${Y.join(", ")} workflow${Y.length === 1 && !Y[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), xe = M(() => {
      var ve, _e;
      const Y = [], j = a.status.comparison;
      return (ve = j.missing_nodes) != null && ve.length && Y.push(`${j.missing_nodes.length} missing node${j.missing_nodes.length === 1 ? "" : "s"}`), (_e = j.extra_nodes) != null && _e.length && Y.push(`${j.extra_nodes.length} untracked node${j.extra_nodes.length === 1 ? "" : "s"}`), Y.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Y.join(" and ")}.`;
    }), Se = M(() => {
      var ve, _e;
      const Y = [], j = a.status.comparison;
      return (ve = j.extra_nodes) != null && ve.length && (j.extra_nodes.slice(0, 3).forEach((je) => {
        Y.push(`Untracked: ${je}`);
      }), j.extra_nodes.length > 3 && Y.push(`...and ${j.extra_nodes.length - 3} more untracked`)), (_e = j.missing_nodes) != null && _e.length && (j.missing_nodes.slice(0, 3).forEach((je) => {
        Y.push(`Missing: ${je}`);
      }), j.missing_nodes.length > 3 && Y.push(`...and ${j.missing_nodes.length - 3} more missing`)), Y;
    });
    return (Y, j) => (o(), i(B, null, [
      b(Jt, null, {
        header: h(() => [
          b(Qt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (o(), R(fs, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: j[0] || (j[0] = (ve) => Y.$emit("start-setup"))
              }, {
                default: h(() => [...j[15] || (j[15] = [
                  x(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (o(), R(fs, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: j[1] || (j[1] = (ve) => Y.$emit("view-environments"))
              }, {
                default: h(() => [...j[16] || (j[16] = [
                  x(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (o(), R(fs, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: j[2] || (j[2] = (ve) => Y.$emit("create-environment"))
              }, {
                default: h(() => [...j[17] || (j[17] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: j[4] || (j[4] = (ve) => r.value = !0),
            onMouseleave: j[5] || (j[5] = (ve) => r.value = !1)
          }, [
            s("div", Vh, [
              b(hs, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...j[18] || (j[18] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Hd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (o(), R(Pe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...j[19] || (j[19] = [
                      x(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(sf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, ds({
              left: h(() => [
                e.status.workflows.new.length ? (o(), R(Rs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (o(), R(Rs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (o(), R(Rs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(Rs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: F.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (o(), R(Rs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), R(Rs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (o(), R(Rs, {
                  key: 2,
                  icon: "●",
                  count: oe.value,
                  label: oe.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                re.value ? (o(), R(Rs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                D.value && !W.value && !re.value ? (o(), R(Rs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                D.value ? y("", !0) : (o(), R(Rs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              ce.value ? {
                name: "footer",
                fn: h(() => [
                  j[21] || (j[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Wh, [
                    s("span", Gh, m(Te.value), 1),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: j[3] || (j[3] = (ve) => Y.$emit("commit-changes"))
                    }, {
                      default: h(() => [...j[20] || (j[20] = [
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
          e.status.is_detached_head ? (o(), R(fs, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: j[6] || (j[6] = (ve) => Y.$emit("create-branch"))
              }, {
                default: h(() => [...j[22] || (j[22] = [
                  x(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", jh, [
            b(hs, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...j[23] || (j[23] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ae.value ? (o(), i(B, { key: 0 }, [
              H.value.length > 0 ? (o(), R(fs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${H.value.length} workflow${H.value.length === 1 ? "" : "s"} can't run`,
                description: T.value,
                items: H.value.map(be)
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[7] || (j[7] = (ve) => Y.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[24] || (j[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              se.value.length > 0 ? (o(), R(fs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${se.value.length} workflow${se.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: se.value.map((ve) => `${ve.name} — ${ve.models_needing_path_sync_count} model path${ve.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[8] || (j[8] = (ve) => Y.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[25] || (j[25] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ie.value ? (o(), R(fs, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    disabled: $.value,
                    onClick: O
                  }, {
                    default: h(() => [
                      x(m($.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: j[9] || (j[9] = (ve) => Y.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[26] || (j[26] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (o(), R(fs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: xe.value,
                items: Se.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: p
                  }, {
                    default: h(() => [...j[27] || (j[27] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[10] || (j[10] = (ve) => Y.$emit("view-nodes"))
                  }, {
                    default: h(() => [...j[28] || (j[28] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (o(), R(fs, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[11] || (j[11] = (ve) => Y.$emit("view-nodes"))
                  }, {
                    default: h(() => [...j[29] || (j[29] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              N.value ? (o(), R(fs, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: G.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[12] || (j[12] = (ve) => c.value = !0)
                  }, {
                    default: h(() => [...j[30] || (j[30] = [
                      x(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (o(), R(fs, {
                key: 6,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility check failed",
                description: d.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    loading: f.value,
                    onClick: pe
                  }, {
                    default: h(() => [...j[31] || (j[31] = [
                      x(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ce.value ? (o(), i("span", Hh, "No issues")) : (o(), i("span", qh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(Kv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: j[13] || (j[13] = (ve) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: C
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (o(), R(Ll, {
        key: 0,
        warnings: u.value.warnings,
        onClose: j[14] || (j[14] = (ve) => c.value = !1),
        onRevalidate: te
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Jh = /* @__PURE__ */ Me(Kh, [["__scopeId", "data-v-f6b165fd"]]);
async function Fo(e, t) {
  const n = await Ks(e, t);
  if (!n.ok) {
    const a = await n.json().catch(() => ({}));
    throw new Error(a.error || a.message || `Request failed: ${n.status}`);
  }
  return n.json();
}
function Qh() {
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
const Yh = {
  key: 0,
  class: "base-title-count"
}, Xh = /* @__PURE__ */ Ee({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, n) => (o(), R(El(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        rt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", Yh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hn = /* @__PURE__ */ Me(Xh, [["__scopeId", "data-v-5a01561d"]]), Zh = ["value", "disabled"], ey = {
  key: 0,
  value: "",
  disabled: ""
}, ty = ["value"], sy = {
  key: 0,
  class: "base-select-error"
}, ny = /* @__PURE__ */ Ee({
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
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (o(), i("option", ey, m(e.placeholder), 1)) : y("", !0),
        (o(!0), i(B, null, we(e.options, (r) => (o(), i("option", {
          key: t(r),
          value: t(r)
        }, m(n(r)), 9, ty))), 128))
      ], 42, Zh),
      e.error ? (o(), i("span", sy, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Jo = /* @__PURE__ */ Me(ny, [["__scopeId", "data-v-4996bfe0"]]), oy = { class: "popover-header" }, ay = { class: "popover-title" }, ly = { class: "popover-content" }, iy = {
  key: 0,
  class: "popover-actions"
}, ry = /* @__PURE__ */ Ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => (o(), R(cs, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Wt({ zIndex: e.overlayZIndex }),
        onClick: n[2] || (n[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Wt({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", oy, [
            s("h4", ay, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", ly, [
            rt(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (o(), i("div", iy, [
            rt(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), ks = /* @__PURE__ */ Me(ry, [["__scopeId", "data-v-7c1f5547"]]), cy = { class: "detail-section" }, uy = {
  key: 0,
  class: "empty-message"
}, dy = { class: "model-header" }, my = { class: "model-name" }, fy = { class: "model-details" }, vy = { class: "model-row" }, py = { class: "model-row" }, gy = { class: "label" }, hy = {
  key: 0,
  class: "model-row model-row-nodes"
}, yy = { class: "node-list" }, wy = ["onClick"], _y = {
  key: 1,
  class: "model-row"
}, ky = { class: "value" }, by = {
  key: 2,
  class: "model-row"
}, $y = { class: "value error" }, Cy = {
  key: 0,
  class: "model-actions"
}, xy = { class: "detail-section" }, Sy = {
  key: 0,
  class: "empty-message"
}, Iy = { class: "node-content" }, Ey = { class: "node-main" }, Ty = { class: "node-name" }, My = { class: "node-badge" }, Py = {
  key: 0,
  class: "node-version"
}, Ry = ["onClick"], Dy = {
  key: 2,
  class: "node-install-queued"
}, Ly = {
  key: 0,
  class: "node-guidance"
}, Ny = { class: "details-footer" }, Uy = { class: "details-footer-actions" }, Oy = /* @__PURE__ */ Ee({
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
    function C(K) {
      switch (K) {
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
    function I(K) {
      switch (K) {
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
    function E(K) {
      switch (K) {
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
    function P(K) {
      switch (K) {
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
    function O(K) {
      switch (K) {
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
    function U(K) {
      if (!K.loaded_by || K.loaded_by.length === 0) return [];
      const N = K.hash || K.filename;
      return k.value.has(N) ? K.loaded_by : K.loaded_by.slice(0, 3);
    }
    function F(K) {
      return k.value.has(K);
    }
    function D(K) {
      k.value.has(K) ? k.value.delete(K) : k.value.add(K), k.value = new Set(k.value);
    }
    async function W() {
      f.value = !0, v.value = null;
      try {
        d.value = await l(n.workflowName);
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function ce(K, N) {
      w.value[K] = N, p.value = !0;
    }
    async function de(K) {
      try {
        await c(K);
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function J(K) {
      if (K.package_id)
        try {
          const N = K.latest_version || "latest";
          await u({
            id: K.package_id,
            version: N,
            selected_version: N,
            mode: "remote",
            channel: "default"
          }), $.value.add(K.package_id);
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
        for (const [K, N] of Object.entries(w.value))
          await r(n.workflowName, K, N);
        a("refresh"), a("close");
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return dt(W), (K, N) => (o(), i(B, null, [
      b(Pt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: N[5] || (N[5] = (G) => a("close"))
      }, {
        body: h(() => [
          d.value ? (o(), i(B, { key: 0 }, [
            s("section", cy, [
              b(hn, { variant: "section" }, {
                default: h(() => [
                  x("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (o(), i("div", uy, " No models used in this workflow ")) : y("", !0),
              (o(!0), i(B, null, we(d.value.models, (G) => {
                var pe;
                return o(), i("div", {
                  key: G.hash || G.filename,
                  class: "model-card"
                }, [
                  s("div", dy, [
                    N[7] || (N[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", my, m(G.filename), 1)
                  ]),
                  s("div", fy, [
                    s("div", vy, [
                      N[8] || (N[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", C(G.status)])
                      }, m(I(G.status)), 3)
                    ]),
                    s("div", py, [
                      s("span", gy, [
                        N[9] || (N[9] = x(" Importance: ", -1)),
                        b(cc, {
                          size: 14,
                          title: "About importance levels",
                          onClick: N[0] || (N[0] = (te) => g.value = !0)
                        })
                      ]),
                      b(Jo, {
                        "model-value": w.value[G.filename] || G.importance,
                        options: S,
                        "onUpdate:modelValue": (te) => ce(G.filename, te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    G.loaded_by && G.loaded_by.length > 0 ? (o(), i("div", hy, [
                      N[10] || (N[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", yy, [
                        (o(!0), i(B, null, we(U(G), (te, oe) => (o(), i("div", {
                          key: `${te.node_id}-${oe}`,
                          class: "node-reference"
                        }, m(te.node_type) + " (Node #" + m(te.node_id) + ") ", 1))), 128)),
                        G.loaded_by.length > 3 ? (o(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (te) => D(G.hash || G.filename)
                        }, m(F(G.hash || G.filename) ? "▼ Show less" : `▶ View all (${G.loaded_by.length})`), 9, wy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    G.size_mb ? (o(), i("div", _y, [
                      N[11] || (N[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", ky, m(G.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    G.has_category_mismatch ? (o(), i("div", by, [
                      N[14] || (N[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", $y, [
                        N[12] || (N[12] = x(" In ", -1)),
                        s("code", null, m(G.actual_category) + "/", 1),
                        N[13] || (N[13] = x(" but loader needs ", -1)),
                        s("code", null, m((pe = G.expected_categories) == null ? void 0 : pe[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  G.status !== "available" ? (o(), i("div", Cy, [
                    G.status === "downloadable" ? (o(), R(Oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: N[1] || (N[1] = (te) => a("resolve"))
                    }, {
                      default: h(() => [...N[15] || (N[15] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : G.status === "category_mismatch" && G.file_path ? (o(), R(Oe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => de(G.file_path)
                    }, {
                      default: h(() => [...N[16] || (N[16] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : G.status !== "path_mismatch" ? (o(), R(Oe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: N[2] || (N[2] = (te) => a("resolve"))
                    }, {
                      default: h(() => [...N[17] || (N[17] = [
                        x(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", xy, [
              b(hn, { variant: "section" }, {
                default: h(() => [
                  x("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (o(), i("div", Sy, " No custom nodes used in this workflow ")) : y("", !0),
              (o(!0), i(B, null, we(d.value.nodes, (G, pe) => (o(), i("div", {
                key: `${G.name}-${G.status}-${pe}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", E(G.status)])
                }, m(P(G.status)), 3),
                s("div", Iy, [
                  s("div", Ey, [
                    s("span", Ty, m(G.name), 1),
                    s("span", My, m(O(G.status)), 1),
                    G.version ? (o(), i("span", Py, "v" + m(G.version), 1)) : y("", !0),
                    G.status === "uninstallable" && G.package_id && !$.value.has(G.package_id) ? (o(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (te) => J(G)
                    }, " Install ", 8, Ry)) : G.status === "uninstallable" && G.package_id && $.value.has(G.package_id) ? (o(), i("span", Dy, " Queued ")) : y("", !0)
                  ]),
                  G.guidance ? (o(), i("div", Ly, m(G.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", Ny, [
            b(Oe, {
              variant: "secondary",
              onClick: N[3] || (N[3] = (G) => a("resolve"))
            }, {
              default: h(() => [...N[18] || (N[18] = [
                x(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Uy, [
              b(Oe, {
                variant: "secondary",
                onClick: N[4] || (N[4] = (G) => a("close"))
              }, {
                default: h(() => [...N[19] || (N[19] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (o(), R(Oe, {
                key: 0,
                variant: "primary",
                onClick: ue
              }, {
                default: h(() => [...N[20] || (N[20] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(ks, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: N[6] || (N[6] = (G) => g.value = !1)
      }, {
        content: h(() => [...N[21] || (N[21] = [
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
}), Ay = /* @__PURE__ */ Me(Oy, [["__scopeId", "data-v-00cf34e6"]]), pt = kn({
  items: [],
  status: "idle"
});
let Us = null;
function pc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ja(e) {
  return pt.items.find((t) => t.id === e);
}
async function In() {
  if (pt.status === "downloading") return;
  const e = pt.items.find((t) => t.status === "queued");
  if (!e) {
    pt.status = "idle";
    return;
  }
  pt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await zy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    pt.status = "idle", In();
  }
}
async function zy(e) {
  return new Promise((t, n) => {
    Us && (Us.close(), Us = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    Us = l;
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
                const C = e.size - e.downloaded;
                e.eta = C / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), Us = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), Us = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), Us = null, d || n(new Error("Connection lost"));
    };
  });
}
async function Fy() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const n of t.pending_downloads) {
      if (pt.items.some((l) => l.url === n.url && l.filename === n.filename))
        continue;
      const a = {
        id: pc(),
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
      pt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function jn() {
  function e(S) {
    for (const C of S) {
      if (pt.items.some(
        (P) => P.url === C.url && P.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const E = {
        id: pc(),
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
      pt.items.push(E);
    }
    pt.status === "idle" && In();
  }
  async function t(S) {
    const C = Ja(S);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Us && (Us.close(), Us = null), C.status = "failed", C.error = "Cancelled by user", pt.status = "idle", In();
      } else if (C.status === "queued") {
        const I = pt.items.findIndex((E) => E.id === S);
        I >= 0 && pt.items.splice(I, 1);
      }
    }
  }
  function n(S) {
    const C = Ja(S);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, pt.status === "idle" && In());
  }
  function a(S) {
    const C = Ja(S);
    !C || C.status !== "paused" || (C.status = "queued", pt.status === "idle" && In());
  }
  function l() {
    const S = pt.items.filter((C) => C.status === "paused");
    for (const C of S)
      C.status = "queued";
    pt.status === "idle" && In();
  }
  function r(S) {
    const C = pt.items.findIndex((I) => I.id === S);
    C >= 0 && ["completed", "failed", "paused"].includes(pt.items[C].status) && pt.items.splice(C, 1);
  }
  function c() {
    pt.items = pt.items.filter((S) => S.status !== "completed");
  }
  function u() {
    pt.items = pt.items.filter((S) => S.status !== "failed");
  }
  const d = M(
    () => pt.items.find((S) => S.status === "downloading")
  ), f = M(
    () => pt.items.filter((S) => S.status === "queued")
  ), v = M(
    () => pt.items.filter((S) => S.status === "completed")
  ), p = M(
    () => pt.items.filter((S) => S.status === "failed")
  ), w = M(
    () => pt.items.filter((S) => S.status === "paused")
  ), g = M(() => pt.items.length > 0), k = M(
    () => pt.items.filter((S) => S.status === "queued" || S.status === "downloading").length
  ), $ = M(
    () => pt.items.some((S) => S.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Yo(pt),
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
    loadPendingDownloads: Fy
  };
}
function gc() {
  const e = _(null), t = _(null), n = _([]), a = _([]), l = _(!1), r = _(null);
  async function c(I, E) {
    const P = await Ks(I, E);
    if (!P.ok) {
      const O = await P.json().catch(() => ({})), U = O.error || O.message || `Request failed: ${P.status}`;
      throw new Error(U);
    }
    return P.json();
  }
  async function u(I) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Xn() || (E = await c(
        `/v2/comfygit/workflow/${I}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), E.nodes.version_gated = E.nodes.version_gated || [], E.nodes.uninstallable = E.nodes.uninstallable || [], E.node_guidance = E.node_guidance || {}, E.package_aliases = E.package_aliases || {}, e.value = E, E;
    } catch (E) {
      const P = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = P, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(I, E, P, O) {
    l.value = !0, r.value = null;
    try {
      let U;
      if (!Xn()) {
        const F = Object.fromEntries(E), D = Object.fromEntries(P), W = O ? Array.from(O) : [];
        U = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: D,
              skipped_packages: W
            })
          }
        );
      }
      return t.value = U, U;
    } catch (U) {
      const F = U instanceof Error ? U.message : "Unknown error occurred";
      throw r.value = F, U;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Xn() || (P = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = O, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Xn() || (P = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = O, P;
    } finally {
      l.value = !1;
    }
  }
  const p = kn({
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
  async function g(I) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xn(), await k(I);
    } catch (E) {
      const P = E instanceof Error ? E.message : "Failed to install nodes";
      throw p.installError = P, E;
    }
  }
  async function k(I) {
    var O, U, F;
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
      const D = new Map(((O = E.failed) == null ? void 0 : O.map((ce) => [ce.node_id, ce.error])) || []), W = new Map((E.dependency_review_required || []).map((ce) => [ce.node_id, ce]));
      for (let ce = 0; ce < p.nodesToInstall.length; ce++) {
        const de = p.nodesToInstall[ce], J = D.get(de), ue = W.get(de);
        p.nodeInstallProgress.completedNodes.push({
          node_id: de,
          success: !J && !ue,
          error: J || (ue == null ? void 0 : ue.error),
          dependency_review: ue == null ? void 0 : ue.dependency_review
        });
      }
    }
    p.nodesInstalled = E.nodes_installed, p.dependencyReviews = E.dependency_review_required || [], p.needsRestart = E.nodes_installed.length > 0;
    const P = (((U = E.failed) == null ? void 0 : U.length) || 0) + (((F = E.dependency_review_required) == null ? void 0 : F.length) || 0);
    return P > 0 && (p.installError = `${P} package(s) need attention`), E;
  }
  async function $(I, E, P) {
    w(), p.phase = "resolving", r.value = null;
    const O = Object.fromEntries(E), U = Object.fromEntries(P);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: O,
          model_choices: U
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const D = F.body.getReader(), W = new TextDecoder();
      let ce = "";
      for (; ; ) {
        const { done: de, value: J } = await D.read();
        if (de) break;
        ce += W.decode(J, { stream: !0 });
        const ue = ce.split(`

`);
        ce = ue.pop() || "";
        for (const K of ue) {
          if (!K.trim()) continue;
          const N = K.split(`
`);
          let G = "", pe = "";
          for (const te of N)
            te.startsWith("event: ") ? G = te.slice(7) : te.startsWith("data: ") && (pe = te.slice(6));
          if (pe)
            try {
              const te = JSON.parse(pe);
              S(G, te);
            } catch (te) {
              console.warn("Failed to parse SSE event:", te);
            }
        }
      }
    } catch (F) {
      const D = F instanceof Error ? F.message : "Unknown error occurred";
      throw r.value = D, p.error = D, p.phase = "error", F;
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
        p.nodesToInstall = E.nodes_to_install || [], p.nodesMarkedOptional = E.nodes_marked_optional || [], p.nodesMapped = E.nodes_mapped || [], p.modelPathsSynced = E.model_paths_synced || 0, E.download_results && (p.completedFiles = E.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = E.message, p.phase = "error", r.value = E.message;
        break;
    }
  }
  function C(I, E) {
    const { addToQueue: P } = jn(), O = E.filter((U) => U.url && U.target_path).map((U) => ({
      workflow: I,
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
    queueModelDownloads: C
  };
}
const By = { class: "resolution-stepper" }, Vy = { class: "stepper-header" }, Wy = ["onClick"], Gy = {
  key: 0,
  class: "step-icon"
}, jy = {
  key: 1,
  class: "step-number"
}, Hy = { class: "step-label" }, qy = {
  key: 0,
  class: "step-connector"
}, Ky = { class: "stepper-content" }, Jy = /* @__PURE__ */ Ee({
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
    return (f, v) => (o(), i("div", By, [
      s("div", Vy, [
        (o(!0), i(B, null, we(e.steps, (p, w) => (o(), i("div", {
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
            l(p.id) ? (o(), i("span", Gy, "✓")) : (o(), i("span", jy, m(w + 1), 1))
          ], 2),
          s("div", Hy, m(p.label), 1),
          w < e.steps.length - 1 ? (o(), i("div", qy)) : y("", !0)
        ], 10, Wy))), 128))
      ]),
      s("div", Ky, [
        rt(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Qy = /* @__PURE__ */ Me(Jy, [["__scopeId", "data-v-2a7b3af8"]]), Yy = { class: "item-body" }, Xy = {
  key: 0,
  class: "resolved-state"
}, Zy = { class: "resolved-message" }, e1 = {
  key: 1,
  class: "unresolved"
}, t1 = {
  key: 0,
  class: "installed-packs-section"
}, s1 = { class: "installed-packs-list" }, n1 = ["onClick"], o1 = { class: "installed-pack-name" }, a1 = { class: "installed-pack-source" }, l1 = { class: "action-buttons" }, i1 = /* @__PURE__ */ Ee({
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
      class: Be(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: l.value }])
    }, [
      s("div", Yy, [
        l.value ? (o(), i("div", Xy, [
          s("span", Zy, m(d.value), 1),
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[4] || (p[4] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : (o(), i("div", e1, [
          u.value.length > 0 ? (o(), i("div", t1, [
            p[5] || (p[5] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", s1, [
              (o(!0), i(B, null, we(u.value, (w) => (o(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", o1, m(w.package_id), 1),
                s("span", a1, m(f(w.source)), 1)
              ], 8, n1))), 128))
            ])
          ])) : y("", !0),
          s("div", l1, [
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[6] || (p[6] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[7] || (p[7] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
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
}), r1 = /* @__PURE__ */ Me(i1, [["__scopeId", "data-v-4338b305"]]), c1 = { class: "item-navigator" }, u1 = { class: "nav-item-info" }, d1 = ["title"], m1 = { class: "nav-controls" }, f1 = { class: "nav-arrows" }, v1 = ["disabled"], p1 = ["disabled"], g1 = { class: "nav-position" }, h1 = /* @__PURE__ */ Ee({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", c1, [
      s("div", u1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, d1)
      ]),
      s("div", m1, [
        s("div", f1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, v1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => n("next")),
            title: "Next item"
          }, " → ", 8, p1)
        ]),
        s("span", g1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), hc = /* @__PURE__ */ Me(h1, [["__scopeId", "data-v-74af7920"]]), y1 = { class: "node-resolution-step" }, w1 = {
  key: 0,
  class: "auto-resolved-section"
}, _1 = { class: "section-header" }, k1 = { class: "stat-badge" }, b1 = { class: "resolved-packages-list" }, $1 = { class: "package-info" }, C1 = { class: "package-id" }, x1 = { class: "node-count" }, S1 = { class: "package-actions" }, I1 = {
  key: 0,
  class: "status-badge install"
}, E1 = {
  key: 1,
  class: "status-badge skip"
}, T1 = ["onClick"], M1 = {
  key: 1,
  class: "section-divider"
}, P1 = { class: "step-header" }, R1 = { class: "stat-badge" }, D1 = {
  key: 1,
  class: "step-body"
}, L1 = {
  key: 3,
  class: "empty-state"
}, N1 = { class: "node-modal-body" }, U1 = { class: "node-search-results-container" }, O1 = {
  key: 0,
  class: "node-search-results"
}, A1 = { class: "node-result-header" }, z1 = { class: "node-result-title" }, F1 = { class: "node-result-package-id" }, B1 = {
  key: 0,
  class: "node-result-display-name"
}, V1 = {
  key: 0,
  class: "node-result-stats",
  "aria-label": "Package popularity"
}, W1 = {
  key: 0,
  class: "node-result-stat"
}, G1 = {
  key: 1,
  class: "node-result-stat"
}, j1 = {
  key: 0,
  class: "node-result-description"
}, H1 = { class: "node-result-actions" }, q1 = ["onClick"], K1 = ["onClick"], J1 = {
  key: 1,
  class: "node-empty-state"
}, Q1 = {
  key: 2,
  class: "node-empty-state"
}, Y1 = {
  key: 3,
  class: "node-empty-state"
}, X1 = { class: "node-manual-entry-modal" }, Z1 = { class: "node-modal-body" }, ew = { class: "node-modal-actions" }, tw = /* @__PURE__ */ Ee({
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
    const n = e, a = t, { searchNodes: l } = gc(), r = _(0), c = _(!1), u = _(!1), d = _(""), f = _(""), v = _([]), p = _(!1), w = _(!1);
    function g() {
      w.value && de(), w.value = !1;
    }
    const k = M(() => n.nodes[r.value]), $ = M(() => n.nodes.filter((H) => n.nodeChoices.has(H.node_type)).length), S = M(() => n.autoResolvedPackages.filter((H) => !n.skippedPackages.has(H.package_id)).length);
    function C(H) {
      return n.skippedPackages.has(H);
    }
    function I(H) {
      a("package-skip", H);
    }
    function E(H) {
      H >= 0 && H < n.nodes.length && (r.value = H);
    }
    function P() {
      var H;
      for (let se = r.value + 1; se < n.nodes.length; se++) {
        const ie = n.nodes[se];
        if (!((H = n.nodeChoices) != null && H.has(ie.node_type))) {
          E(se);
          return;
        }
      }
    }
    function O() {
      k.value && (a("mark-optional", k.value.node_type), qt(() => P()));
    }
    function U() {
      k.value && (a("skip", k.value.node_type), qt(() => P()));
    }
    function F() {
      k.value && a("clear-choice", k.value.node_type);
    }
    function D() {
      k.value && (d.value = k.value.node_type, v.value = [], c.value = !0, N(d.value));
    }
    function W() {
      f.value = "", u.value = !0;
    }
    function ce(H) {
      k.value && (a("installed-pack-selected", k.value.node_type, H), qt(() => P()));
    }
    function de() {
      c.value = !1, d.value = "", v.value = [];
    }
    function J() {
      u.value = !1, f.value = "";
    }
    let ue = null;
    function K() {
      ue && clearTimeout(ue), ue = setTimeout(() => {
        N(d.value);
      }, 300);
    }
    async function N(H) {
      if (!H.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(H, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function G(H) {
      k.value && (a("manual-entry", k.value.node_type, H.package_id, {
        install_source: "registry",
        version: H.registry_version || null
      }), de(), qt(() => P()));
    }
    function pe(H) {
      !k.value || !H.repository || (a("manual-entry", k.value.node_type, H.package_id, {
        install_source: "git",
        repository: H.repository
      }), de(), qt(() => P()));
    }
    function te(H) {
      return !!H.github_stars || !!H.downloads;
    }
    function oe(H) {
      return H ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: H >= 1e3 ? 1 : 0
      }).format(H) : "";
    }
    function re() {
      !k.value || !f.value.trim() || (a("manual-entry", k.value.node_type, f.value.trim()), J(), qt(() => P()));
    }
    return (H, se) => {
      var ie, Ie;
      return o(), i("div", y1, [
        e.autoResolvedPackages.length > 0 ? (o(), i("div", w1, [
          s("div", _1, [
            se[6] || (se[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", k1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", b1, [
            (o(!0), i(B, null, we(e.autoResolvedPackages, (he) => (o(), i("div", {
              key: he.package_id,
              class: "resolved-package-item"
            }, [
              s("div", $1, [
                s("code", C1, m(he.package_id), 1),
                s("span", x1, m(he.node_types_count) + " node type" + m(he.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", S1, [
                C(he.package_id) ? (o(), i("span", E1, " SKIPPED ")) : (o(), i("span", I1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (Fe) => I(he.package_id)
                }, m(C(he.package_id) ? "Include" : "Skip"), 9, T1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (o(), i("div", M1)) : y("", !0),
        e.nodes.length > 0 ? (o(), i(B, { key: 2 }, [
          s("div", P1, [
            se[7] || (se[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", R1, m($.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          k.value ? (o(), R(hc, {
            key: 0,
            "item-name": k.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: se[0] || (se[0] = (he) => E(r.value - 1)),
            onNext: se[1] || (se[1] = (he) => E(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          k.value ? (o(), i("div", D1, [
            b(r1, {
              "node-type": k.value.node_type,
              "has-multiple-options": !!((ie = k.value.options) != null && ie.length),
              choice: (Ie = e.nodeChoices) == null ? void 0 : Ie.get(k.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: O,
              onSkip: U,
              onManualEntry: W,
              onSearch: D,
              onClearChoice: F,
              onInstalledPackSelected: ce
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (o(), i("div", L1, [...se[8] || (se[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (o(), R(cs, { to: "body" }, [
          c.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: se[4] || (se[4] = bt((he) => w.value = !0, ["self"])),
            onMouseup: bt(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: se[3] || (se[3] = (he) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                se[9] || (se[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              s("div", N1, [
                b(Dt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (he) => d.value = he),
                  placeholder: "Search registry by node type or package name...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                s("div", U1, [
                  v.value.length > 0 ? (o(), i("div", O1, [
                    (o(!0), i(B, null, we(v.value, (he) => (o(), i("div", {
                      key: he.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", A1, [
                        s("div", z1, [
                          s("code", F1, m(he.package_id), 1),
                          he.display_name && he.display_name !== he.package_id ? (o(), i("span", B1, m(he.display_name), 1)) : y("", !0)
                        ]),
                        te(he) ? (o(), i("div", V1, [
                          he.github_stars ? (o(), i("span", W1, " ★ " + m(oe(he.github_stars)), 1)) : y("", !0),
                          he.downloads ? (o(), i("span", G1, " ↓ " + m(oe(he.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      he.description ? (o(), i("div", j1, m(he.description), 1)) : y("", !0),
                      s("div", H1, [
                        he.can_install_registry ? (o(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (Fe) => G(he)
                        }, " Install from Registry ", 8, q1)) : y("", !0),
                        he.can_install_git ? (o(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (Fe) => pe(he)
                        }, " Install from GitHub ", 8, K1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : p.value ? (o(), i("div", J1, "Searching...")) : d.value ? (o(), i("div", Q1, 'No packages found matching "' + m(d.value) + '"', 1)) : (o(), i("div", Y1, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (o(), R(cs, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: bt(J, ["self"])
          }, [
            s("div", X1, [
              s("div", { class: "node-modal-header" }, [
                se[10] || (se[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              s("div", Z1, [
                b(Dt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": se[5] || (se[5] = (he) => f.value = he),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", ew, [
                  b(Oe, {
                    variant: "secondary",
                    onClick: J
                  }, {
                    default: h(() => [...se[11] || (se[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Oe, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: re
                  }, {
                    default: h(() => [...se[12] || (se[12] = [
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
}), sw = /* @__PURE__ */ Me(tw, [["__scopeId", "data-v-a85bb4b7"]]), nw = /* @__PURE__ */ Ee({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = M(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = M(() => `confidence-${n.value}`), l = M(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (r, c) => (o(), i("span", {
      class: Be(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), ow = /* @__PURE__ */ Me(nw, [["__scopeId", "data-v-17ec4b80"]]), aw = { class: "node-info" }, lw = { class: "node-info-text" }, iw = { class: "item-body" }, rw = {
  key: 0,
  class: "resolved-state"
}, cw = {
  key: 1,
  class: "multiple-options"
}, uw = { class: "options-list" }, dw = ["onClick"], mw = ["name", "value", "checked", "onChange"], fw = { class: "option-content" }, vw = { class: "option-header" }, pw = { class: "option-filename" }, gw = { class: "option-meta" }, hw = { class: "option-size" }, yw = { class: "option-category" }, ww = { class: "option-path" }, _w = { class: "action-buttons" }, kw = {
  key: 2,
  class: "unresolved"
}, bw = { class: "action-buttons" }, $w = /* @__PURE__ */ Ee({
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
      class: Be(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", aw, [
        s("span", lw, [
          f[7] || (f[7] = x("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (o(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", iw, [
        l.value ? (o(), i("div", rw, [
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...f[8] || (f[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (o(), i("div", cw, [
          f[12] || (f[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", uw, [
            (o(!0), i(B, null, we(e.options, (v, p) => (o(), i("label", {
              key: v.model.hash,
              class: Be(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, mw),
              s("div", fw, [
                s("div", vw, [
                  s("span", pw, m(v.model.filename), 1),
                  b(ow, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", gw, [
                  s("span", hw, m(u(v.model.size)), 1),
                  s("span", yw, m(v.model.category), 1)
                ]),
                s("div", ww, m(v.model.relative_path), 1)
              ])
            ], 10, dw))), 128))
          ]),
          s("div", _w, [
            b(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: h(() => [...f[9] || (f[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[10] || (f[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...f[11] || (f[11] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), i("div", kw, [
          f[16] || (f[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", bw, [
            b(Oe, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: h(() => [...f[13] || (f[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[14] || (f[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...f[15] || (f[15] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Cw = /* @__PURE__ */ Me($w, [["__scopeId", "data-v-8a82fefa"]]), xw = { class: "model-resolution-step" }, Sw = { class: "step-header" }, Iw = { class: "step-info" }, Ew = { class: "step-title" }, Tw = { class: "step-description" }, Mw = { class: "stat-badge" }, Pw = {
  key: 1,
  class: "step-body"
}, Rw = {
  key: 2,
  class: "empty-state"
}, Dw = { class: "model-search-modal" }, Lw = { class: "model-modal-body" }, Nw = {
  key: 0,
  class: "model-search-results"
}, Uw = ["onClick"], Ow = { class: "model-result-header" }, Aw = { class: "model-result-filename" }, zw = { class: "model-result-meta" }, Fw = { class: "model-result-category" }, Bw = { class: "model-result-size" }, Vw = {
  key: 0,
  class: "model-result-path"
}, Ww = {
  key: 1,
  class: "model-no-results"
}, Gw = {
  key: 2,
  class: "model-searching"
}, jw = { class: "model-download-url-modal" }, Hw = { class: "model-modal-body" }, qw = { class: "model-input-group" }, Kw = { class: "model-input-group" }, Jw = { class: "model-modal-actions" }, Qw = /* @__PURE__ */ Ee({
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
    function a(te) {
      var oe;
      return te && ((oe = n[te]) == null ? void 0 : oe[0]) || null;
    }
    const l = e, r = t, c = _(0), u = _(!1), d = _(!1), f = _(""), v = _(""), p = _(""), w = _([]), g = _(!1), k = M(() => l.models[c.value]), $ = M(() => l.models.some((te) => te.is_download_intent)), S = M(() => l.models.filter(
      (te) => l.modelChoices.has(te.filename) || te.is_download_intent
    ).length), C = M(() => {
      var oe;
      if (!k.value) return "";
      const te = a((oe = k.value.reference) == null ? void 0 : oe.node_type);
      return te ? `${te}/${k.value.filename}` : "";
    }), I = M(() => {
      var oe;
      if (!k.value) return "not-found";
      const te = l.modelChoices.get(k.value.filename);
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
      return k.value.is_download_intent ? "download" : (oe = k.value.options) != null && oe.length ? "ambiguous" : "not-found";
    }), E = M(() => {
      var oe, re;
      if (!k.value) return;
      const te = l.modelChoices.get(k.value.filename);
      if (te)
        switch (te.action) {
          case "select":
            return (oe = te.selected_model) != null && oe.filename ? `→ ${te.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (re = k.value.options) != null && re.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function P(te) {
      te >= 0 && te < l.models.length && (c.value = te);
    }
    function O() {
      var te;
      for (let oe = c.value + 1; oe < l.models.length; oe++) {
        const re = l.models[oe];
        if (!re.is_download_intent && !((te = l.modelChoices) != null && te.has(re.filename))) {
          P(oe);
          return;
        }
      }
    }
    function U() {
      k.value && (r("mark-optional", k.value.filename), qt(() => O()));
    }
    function F() {
      k.value && (r("skip", k.value.filename), qt(() => O()));
    }
    function D(te) {
      k.value && (r("option-selected", k.value.filename, te), qt(() => O()));
    }
    function W() {
      k.value && r("clear-choice", k.value.filename);
    }
    function ce() {
      k.value && (f.value = k.value.filename, u.value = !0);
    }
    function de() {
      k.value && (v.value = k.value.download_source || "", p.value = k.value.target_path || C.value, d.value = !0);
    }
    function J() {
      u.value = !1, f.value = "", w.value = [];
    }
    function ue() {
      d.value = !1, v.value = "", p.value = "";
    }
    function K() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function N(te) {
      k.value && (J(), qt(() => O()));
    }
    function G() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), p.value.trim() || void 0), ue(), qt(() => O()));
    }
    function pe(te) {
      if (!te) return "Unknown";
      const oe = te / (1024 * 1024 * 1024);
      return oe >= 1 ? `${oe.toFixed(2)} GB` : `${(te / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (te, oe) => {
      var re, H, se;
      return o(), i("div", xw, [
        s("div", Sw, [
          s("div", Iw, [
            s("h3", Ew, m($.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Tw, m($.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Mw, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (o(), R(hc, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: oe[0] || (oe[0] = (ie) => P(c.value - 1)),
          onNext: oe[1] || (oe[1] = (ie) => P(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (o(), i("div", Pw, [
          b(Cw, {
            filename: k.value.filename,
            "node-type": ((re = k.value.reference) == null ? void 0 : re.node_type) || "Unknown",
            "has-multiple-options": !!((H = k.value.options) != null && H.length),
            options: k.value.options,
            choice: (se = e.modelChoices) == null ? void 0 : se.get(k.value.filename),
            status: I.value,
            "status-label": E.value,
            onMarkOptional: U,
            onSkip: F,
            onDownloadUrl: de,
            onSearch: ce,
            onOptionSelected: D,
            onClearChoice: W
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), i("div", Rw, [...oe[5] || (oe[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (o(), R(cs, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(J, ["self"])
          }, [
            s("div", Dw, [
              s("div", { class: "model-modal-header" }, [
                oe[6] || (oe[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              s("div", Lw, [
                b(Dt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (ie) => f.value = ie),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (o(), i("div", Nw, [
                  (o(!0), i(B, null, we(w.value, (ie) => (o(), i("div", {
                    key: ie.hash,
                    class: "model-search-result-item",
                    onClick: (Ie) => N()
                  }, [
                    s("div", Ow, [
                      s("code", Aw, m(ie.filename), 1)
                    ]),
                    s("div", zw, [
                      s("span", Fw, m(ie.category), 1),
                      s("span", Bw, m(pe(ie.size)), 1)
                    ]),
                    ie.relative_path ? (o(), i("div", Vw, m(ie.relative_path), 1)) : y("", !0)
                  ], 8, Uw))), 128))
                ])) : f.value && !g.value ? (o(), i("div", Ww, ' No models found matching "' + m(f.value) + '" ', 1)) : y("", !0),
                g.value ? (o(), i("div", Gw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (o(), R(cs, { to: "body" }, [
          d.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(ue, ["self"])
          }, [
            s("div", jw, [
              s("div", { class: "model-modal-header" }, [
                oe[7] || (oe[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ue
                }, "✕")
              ]),
              s("div", Hw, [
                s("div", qw, [
                  oe[8] || (oe[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(Dt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": oe[3] || (oe[3] = (ie) => v.value = ie),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Kw, [
                  oe[9] || (oe[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(Dt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": oe[4] || (oe[4] = (ie) => p.value = ie),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Jw, [
                  b(Oe, {
                    variant: "secondary",
                    onClick: ue
                  }, {
                    default: h(() => [...oe[10] || (oe[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Oe, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: G
                  }, {
                    default: h(() => [...oe[11] || (oe[11] = [
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
}), Yw = /* @__PURE__ */ Me(Qw, [["__scopeId", "data-v-5c700bfa"]]), Xw = {
  key: 0,
  class: "dependency-preview"
}, Zw = { class: "intro" }, e0 = { class: "summary-strip" }, t0 = { class: "summary-item" }, s0 = { class: "summary-item danger" }, n0 = { class: "summary-item" }, o0 = { class: "summary-item" }, a0 = { class: "summary-item" }, l0 = {
  key: 0,
  class: "requirements"
}, i0 = { class: "chips" }, r0 = { class: "changes" }, c0 = {
  key: 0,
  class: "empty-state"
}, u0 = {
  key: 1,
  class: "change-list"
}, d0 = { class: "package-name" }, m0 = { class: "change-kind" }, f0 = { class: "version current" }, v0 = { class: "version proposed" }, p0 = /* @__PURE__ */ Ee({
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
    return (u, d) => (o(), R(Pt, {
      title: "Dependency Review",
      size: "lg",
      loading: e.loading,
      error: e.error || void 0,
      onClose: d[2] || (d[2] = (f) => a("close"))
    }, {
      body: h(() => [
        e.preview ? (o(), i("div", Xw, [
          s("div", Zw, [
            s("h3", null, m(e.preview.node_name), 1),
            d[3] || (d[3] = s("p", null, " Installing this node package would change Python dependencies in the environment. Apply only if you accept these package changes in the current environment. ", -1))
          ]),
          s("div", e0, [
            s("div", t0, [
              s("strong", null, m(e.preview.summary.total), 1),
              d[4] || (d[4] = s("span", null, "Total", -1))
            ]),
            s("div", s0, [
              s("strong", null, m(e.preview.summary.downgraded), 1),
              d[5] || (d[5] = s("span", null, "Downgraded", -1))
            ]),
            s("div", n0, [
              s("strong", null, m(e.preview.summary.upgraded), 1),
              d[6] || (d[6] = s("span", null, "Upgraded", -1))
            ]),
            s("div", o0, [
              s("strong", null, m(e.preview.summary.added), 1),
              d[7] || (d[7] = s("span", null, "Added", -1))
            ]),
            s("div", a0, [
              s("strong", null, m(e.preview.summary.removed), 1),
              d[8] || (d[8] = s("span", null, "Removed", -1))
            ])
          ]),
          e.preview.requirements.length > 0 ? (o(), i("div", l0, [
            d[9] || (d[9] = s("div", { class: "section-title" }, "Node Requirements", -1)),
            s("div", i0, [
              (o(!0), i(B, null, we(e.preview.requirements, (f) => (o(), i("code", {
                key: f,
                class: "chip"
              }, m(f), 1))), 128))
            ])
          ])) : y("", !0),
          s("div", r0, [
            d[11] || (d[11] = s("div", { class: "section-title" }, "Proposed Package Changes", -1)),
            e.preview.changes.length === 0 ? (o(), i("div", c0, " No package version changes found. ")) : (o(), i("div", u0, [
              (o(!0), i(B, null, we(r.value, (f) => (o(), i("div", {
                key: `${f.name}-${f.kind}`,
                class: Be(["change-row", f.kind])
              }, [
                s("code", d0, m(f.name), 1),
                s("span", m0, m(c(f.kind)), 1),
                s("span", f0, m(f.current || "not installed"), 1),
                d[10] || (d[10] = s("span", { class: "arrow" }, "→", -1)),
                s("span", v0, m(f.proposed || "removed"), 1)
              ], 2))), 128))
            ]))
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => {
        var f;
        return [
          b(Oe, {
            variant: "secondary",
            onClick: d[0] || (d[0] = (v) => a("close"))
          }, {
            default: h(() => [...d[12] || (d[12] = [
              x("Close", -1)
            ])]),
            _: 1
          }),
          e.canApply && ((f = e.preview) != null && f.success) ? (o(), R(Oe, {
            key: 0,
            variant: "primary",
            loading: e.applying,
            disabled: e.loading || e.applying,
            onClick: d[1] || (d[1] = (v) => a("apply"))
          }, {
            default: h(() => [...d[13] || (d[13] = [
              x(" Apply to Current Environment ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ];
      }),
      _: 1
    }, 8, ["loading", "error"]));
  }
}), yc = /* @__PURE__ */ Me(p0, [["__scopeId", "data-v-28094338"]]), g0 = { class: "applying-step" }, h0 = {
  key: 0,
  class: "phase-content"
}, y0 = {
  key: 1,
  class: "phase-content"
}, w0 = { class: "phase-description" }, _0 = { class: "overall-progress" }, k0 = { class: "progress-bar" }, b0 = { class: "progress-label" }, $0 = { class: "install-list" }, C0 = { class: "install-icon" }, x0 = { key: 0 }, S0 = {
  key: 1,
  class: "spinner"
}, I0 = { key: 2 }, E0 = { key: 3 }, T0 = {
  key: 0,
  class: "install-error"
}, M0 = {
  key: 2,
  class: "phase-content"
}, P0 = { class: "phase-header" }, R0 = { class: "phase-title" }, D0 = { class: "completion-summary" }, L0 = {
  key: 0,
  class: "summary-item success"
}, N0 = { class: "summary-text" }, U0 = {
  key: 1,
  class: "summary-item success"
}, O0 = { class: "summary-text" }, A0 = {
  key: 2,
  class: "summary-item success"
}, z0 = { class: "summary-text" }, F0 = {
  key: 3,
  class: "summary-item success"
}, B0 = { class: "summary-text" }, V0 = {
  key: 4,
  class: "summary-item success"
}, W0 = { class: "summary-text" }, G0 = {
  key: 5,
  class: "summary-item error"
}, j0 = { class: "summary-text" }, H0 = {
  key: 6,
  class: "summary-item warning"
}, q0 = { class: "summary-text" }, K0 = {
  key: 7,
  class: "failed-list"
}, J0 = { class: "failed-node-id" }, Q0 = { class: "failed-error" }, Y0 = {
  key: 8,
  class: "failed-list dependency-review-list"
}, X0 = { class: "failed-node-id" }, Z0 = ["onClick"], e_ = {
  key: 10,
  class: "summary-item success"
}, t_ = { class: "summary-text" }, s_ = {
  key: 11,
  class: "summary-note"
}, n_ = {
  key: 12,
  class: "restart-prompt"
}, o_ = {
  key: 3,
  class: "phase-content error"
}, a_ = { class: "error-message" }, l_ = /* @__PURE__ */ Ee({
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
      var G, pe;
      const K = ((G = t.progress.nodeInstallProgress) == null ? void 0 : G.totalNodes) || t.progress.nodesToInstall.length;
      if (!K) return 0;
      const N = ((pe = t.progress.nodeInstallProgress) == null ? void 0 : pe.completedNodes.length) ?? 0;
      return Math.round(N / K * 100);
    }), c = M(() => {
      var K;
      return ((K = t.progress.nodeInstallProgress) == null ? void 0 : K.completedNodes.filter((N) => !N.success && !N.dependency_review)) || [];
    });
    function u(K) {
      var N;
      return ((N = K.dependency_review) == null ? void 0 : N.identifier) || K.node_id;
    }
    const d = M(() => {
      var K;
      return ((K = t.progress.nodeInstallProgress) == null ? void 0 : K.completedNodes.filter((N) => N.dependency_review && !l.value.has(u(N)))) || [];
    }), f = M(() => l.value.size), v = M(() => t.progress.needsRestart || f.value > 0), p = M(() => c.value.length > 0 || d.value.length > 0), w = M(() => t.progress.nodesInstalled.length), g = M(() => {
      var K;
      return ((K = t.progress.nodesMarkedOptional) == null ? void 0 : K.length) || 0;
    }), k = M(() => {
      var K;
      return ((K = t.progress.nodesMapped) == null ? void 0 : K.length) || 0;
    }), $ = M(() => t.progress.modelPathsSynced || 0), S = M(() => t.progress.completedFiles.length > 0), C = M(() => w.value > 0 || g.value > 0 || k.value > 0 || $.value > 0 || S.value || v.value || f.value > 0), I = M(() => C.value ? "Workflow dependencies resolved" : "No changes applied");
    function E(K, N) {
      var pe, te;
      const G = (pe = t.progress.nodeInstallProgress) == null ? void 0 : pe.completedNodes.find((oe) => oe.node_id === K);
      return G ? G.success ? "complete" : "failed" : ((te = t.progress.nodeInstallProgress) == null ? void 0 : te.currentIndex) === N ? "installing" : "pending";
    }
    function P(K) {
      var N, G;
      return (G = (N = t.progress.nodeInstallProgress) == null ? void 0 : N.completedNodes.find((pe) => pe.node_id === K)) == null ? void 0 : G.error;
    }
    const O = _(!1), U = _(!1), F = _(!1), D = _(null), W = _(null), ce = _(null);
    async function de(K) {
      var G;
      const N = u(K);
      ce.value = N, O.value = !0, U.value = !0, F.value = !1, D.value = null, W.value = null;
      try {
        if ((G = K.dependency_review) != null && G.preview) {
          W.value = K.dependency_review.preview;
          return;
        }
        const pe = await n({ id: N });
        W.value = pe.preview, pe.preview.success || (D.value = pe.preview.error || "Unable to generate dependency preview");
      } catch (pe) {
        D.value = pe instanceof Error ? pe.message : "Unable to generate dependency preview";
      } finally {
        U.value = !1;
      }
    }
    async function J() {
      const K = ce.value, N = W.value;
      if (!(!K || !N || F.value)) {
        F.value = !0, D.value = null;
        try {
          const G = await a({
            id: K,
            accepted_preview: {
              baseline_fingerprint: N.baseline_fingerprint,
              diff_fingerprint: N.diff_fingerprint,
              proposed_fingerprint: N.proposed_fingerprint
            }
          });
          if (G.status !== "success")
            throw new Error(G.error || G.message || "Unable to apply dependency changes");
          l.value = /* @__PURE__ */ new Set([
            ...l.value,
            K
          ]), ue();
        } catch (G) {
          D.value = G instanceof Error ? G.message : "Unable to apply dependency changes";
        } finally {
          F.value = !1;
        }
      }
    }
    function ue() {
      O.value = !1, U.value = !1, F.value = !1, D.value = null, W.value = null, ce.value = null;
    }
    return (K, N) => {
      var G, pe, te, oe, re;
      return o(), i("div", g0, [
        e.progress.phase === "resolving" ? (o(), i("div", h0, [...N[2] || (N[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (o(), i("div", y0, [
          N[3] || (N[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", w0, " Installing " + m((((G = e.progress.nodeInstallProgress) == null ? void 0 : G.currentIndex) ?? 0) + 1) + " of " + m(((pe = e.progress.nodeInstallProgress) == null ? void 0 : pe.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", _0, [
            s("div", k0, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${r.value}%` })
              }, null, 4)
            ]),
            s("span", b0, m(((te = e.progress.nodeInstallProgress) == null ? void 0 : te.completedNodes.length) ?? 0) + " / " + m(((oe = e.progress.nodeInstallProgress) == null ? void 0 : oe.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", $0, [
            (o(!0), i(B, null, we(e.progress.nodesToInstall, (H, se) => (o(), i("div", {
              key: H,
              class: Be(["install-item", E(H, se)])
            }, [
              s("span", C0, [
                E(H, se) === "pending" ? (o(), i("span", x0, "○")) : E(H, se) === "installing" ? (o(), i("span", S0, "◌")) : E(H, se) === "complete" ? (o(), i("span", I0, "✓")) : E(H, se) === "failed" ? (o(), i("span", E0, "✗")) : y("", !0)
              ]),
              s("code", null, m(H), 1),
              P(H) ? (o(), i("span", T0, m(P(H)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (o(), i("div", M0, [
          s("div", P0, [
            s("span", {
              class: Be(["phase-icon", p.value ? "warning" : "success"])
            }, m(p.value ? "⚠" : "✓"), 3),
            s("h3", R0, m(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", D0, [
            e.progress.nodesInstalled.length > 0 ? (o(), i("div", L0, [
              N[4] || (N[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", N0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            f.value > 0 ? (o(), i("div", U0, [
              N[5] || (N[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", O0, m(f.value) + " reviewed package" + m(f.value > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            g.value > 0 ? (o(), i("div", A0, [
              N[6] || (N[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", z0, m(g.value) + " node type" + m(g.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            k.value > 0 ? (o(), i("div", F0, [
              N[7] || (N[7] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", B0, m(k.value) + " node mapping" + m(k.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            $.value > 0 ? (o(), i("div", V0, [
              N[8] || (N[8] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", W0, m($.value) + " model path" + m($.value > 1 ? "s" : "") + " synced", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", G0, [
              N[9] || (N[9] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", j0, m(c.value.length) + " package" + m(c.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", H0, [
              N[10] || (N[10] = s("span", { class: "summary-icon" }, "⚠", -1)),
              s("span", q0, m(d.value.length) + " package" + m(d.value.length > 1 ? "s" : "") + " need dependency review", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", K0, [
              (o(!0), i(B, null, we(c.value, (H) => (o(), i("div", {
                key: H.node_id,
                class: "failed-item"
              }, [
                s("code", J0, m(H.node_id), 1),
                s("span", Q0, m(H.error), 1)
              ]))), 128))
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", Y0, [
              (o(!0), i(B, null, we(d.value, (H) => (o(), i("div", {
                key: H.node_id,
                class: "failed-item dependency-review-item"
              }, [
                s("code", X0, m(H.node_id), 1),
                N[11] || (N[11] = s("span", { class: "failed-error" }, "Dependency changes require review before install.", -1)),
                s("button", {
                  class: "review-button",
                  onClick: (se) => de(H)
                }, " View Changes ", 8, Z0)
              ]))), 128))
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("button", {
              key: 9,
              class: "retry-button",
              onClick: N[0] || (N[0] = (H) => K.$emit("retry-failed"))
            }, " Retry Failed (" + m(c.value.length) + ") ", 1)) : y("", !0),
            p.value ? y("", !0) : (o(), i("div", e_, [
              N[12] || (N[12] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", t_, m(I.value), 1)
            ])),
            S.value ? (o(), i("p", s_, "Model downloads will continue in the background.")) : y("", !0),
            v.value ? (o(), i("div", n_, [
              N[13] || (N[13] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: N[1] || (N[1] = (H) => K.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (o(), i("div", o_, [
          N[14] || (N[14] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", a_, m(e.progress.error), 1)
        ])) : y("", !0),
        O.value ? (o(), R(yc, {
          key: 4,
          loading: U.value,
          error: D.value,
          preview: W.value,
          "can-apply": !!(ce.value && ((re = W.value) != null && re.success)),
          applying: F.value,
          onClose: ue,
          onApply: J
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ]);
    };
  }
}), i_ = /* @__PURE__ */ Me(l_, [["__scopeId", "data-v-0d61d037"]]), r_ = {
  key: 0,
  class: "loading-state"
}, c_ = {
  key: 1,
  class: "wizard-content"
}, u_ = {
  key: 0,
  class: "step-content"
}, d_ = { class: "analysis-summary" }, m_ = { class: "analysis-header" }, f_ = { class: "summary-description" }, v_ = { class: "stats-grid" }, p_ = { class: "stat-card" }, g_ = { class: "stat-items" }, h_ = {
  key: 0,
  class: "stat-item success"
}, y_ = { class: "stat-count" }, w_ = {
  key: 1,
  class: "stat-item info"
}, __ = { class: "stat-count" }, k_ = {
  key: 2,
  class: "stat-item warning"
}, b_ = { class: "stat-count" }, $_ = {
  key: 3,
  class: "stat-item warning"
}, C_ = { class: "stat-count" }, x_ = {
  key: 4,
  class: "stat-item warning"
}, S_ = { class: "stat-count" }, I_ = {
  key: 5,
  class: "stat-item error"
}, E_ = { class: "stat-count" }, T_ = { class: "stat-card" }, M_ = { class: "stat-items" }, P_ = { class: "stat-item success" }, R_ = { class: "stat-count" }, D_ = {
  key: 0,
  class: "stat-item info"
}, L_ = { class: "stat-count" }, N_ = {
  key: 1,
  class: "stat-item warning"
}, U_ = { class: "stat-count" }, O_ = {
  key: 2,
  class: "stat-item warning"
}, A_ = { class: "stat-count" }, z_ = {
  key: 3,
  class: "stat-item error"
}, F_ = { class: "stat-count" }, B_ = {
  key: 0,
  class: "status-message warning"
}, V_ = { class: "status-text" }, W_ = {
  key: 1,
  class: "status-message warning"
}, G_ = { class: "status-text" }, j_ = {
  key: 2,
  class: "status-message info"
}, H_ = { class: "status-text" }, q_ = {
  key: 3,
  class: "status-message info"
}, K_ = { class: "status-text" }, J_ = {
  key: 4,
  class: "status-message info"
}, Q_ = { class: "status-text" }, Y_ = {
  key: 5,
  class: "status-message warning"
}, X_ = { class: "status-text" }, Z_ = {
  key: 6,
  class: "status-message success"
}, ek = {
  key: 7,
  class: "category-mismatch-section"
}, tk = { class: "mismatch-list" }, sk = { class: "mismatch-path" }, nk = { class: "mismatch-target" }, ok = {
  key: 8,
  class: "category-mismatch-section"
}, ak = { class: "mismatch-list" }, lk = { class: "mismatch-path" }, ik = { class: "status-text" }, rk = {
  key: 1,
  class: "step-content node-step-content"
}, ck = {
  key: 2,
  class: "step-content package-step-content"
}, uk = { class: "package-step-header" }, dk = { class: "stat-badge" }, mk = {
  key: 0,
  class: "package-section"
}, fk = { class: "package-section-header" }, vk = { class: "package-section-title" }, pk = { class: "stat-badge" }, gk = { class: "package-list" }, hk = { class: "package-info" }, yk = { class: "item-name" }, wk = { class: "package-meta" }, _k = { class: "package-actions" }, kk = {
  key: 0,
  class: "choice-badge install"
}, bk = {
  key: 1,
  class: "choice-badge skip"
}, $k = {
  key: 1,
  class: "community-node-section"
}, Ck = { class: "community-node-header" }, xk = { class: "community-node-title" }, Sk = { class: "community-node-list" }, Ik = { class: "community-node-info" }, Ek = { class: "community-node-heading" }, Tk = { class: "item-name" }, Mk = { class: "community-node-package" }, Pk = { class: "community-node-meta" }, Rk = { class: "community-node-guidance" }, Dk = { key: 0 }, Lk = {
  key: 0,
  class: "community-node-selection"
}, Nk = { class: "community-selected-label" }, Uk = {
  key: 1,
  class: "community-node-actions"
}, Ok = {
  key: 4,
  class: "step-content"
}, Ak = { class: "review-summary" }, zk = { class: "review-stats" }, Fk = { class: "review-stat" }, Bk = { class: "stat-value" }, Vk = { class: "review-stat" }, Wk = { class: "stat-value" }, Gk = { class: "review-stat" }, jk = { class: "stat-value" }, Hk = { class: "review-stat" }, qk = { class: "stat-value" }, Kk = {
  key: 0,
  class: "review-section"
}, Jk = { class: "section-title" }, Qk = { class: "review-items" }, Yk = { class: "item-name" }, Xk = { class: "item-choice" }, Zk = {
  key: 0,
  class: "choice-badge install"
}, eb = {
  key: 1,
  class: "choice-badge skip"
}, tb = {
  key: 1,
  class: "review-section"
}, sb = { class: "section-title" }, nb = { class: "review-items" }, ob = { class: "item-name" }, ab = { class: "item-choice" }, lb = {
  key: 0,
  class: "choice-badge install"
}, ib = {
  key: 1,
  class: "choice-badge optional"
}, rb = {
  key: 2,
  class: "choice-badge skip"
}, cb = {
  key: 2,
  class: "review-section"
}, ub = { class: "section-title" }, db = { class: "review-items" }, mb = { class: "item-name" }, fb = { class: "item-choice" }, vb = {
  key: 0,
  class: "choice-badge install"
}, pb = {
  key: 1,
  class: "choice-badge mapped"
}, gb = {
  key: 2,
  class: "choice-badge optional"
}, hb = {
  key: 3,
  class: "choice-badge skip"
}, yb = {
  key: 1,
  class: "choice-badge pending"
}, wb = {
  key: 3,
  class: "review-section"
}, _b = { class: "section-title" }, kb = { class: "review-items download-details" }, bb = { class: "download-info" }, $b = { class: "item-name" }, Cb = { class: "download-meta" }, xb = { class: "download-path" }, Sb = ["title"], Ib = {
  key: 4,
  class: "review-section"
}, Eb = { class: "section-title" }, Tb = { class: "review-items" }, Mb = { class: "item-name" }, Pb = { class: "item-choice" }, Rb = {
  key: 0,
  class: "choice-badge install"
}, Db = {
  key: 1,
  class: "choice-badge download"
}, Lb = {
  key: 2,
  class: "choice-badge optional"
}, Nb = {
  key: 3,
  class: "choice-badge skip"
}, Ub = {
  key: 4,
  class: "choice-badge skip"
}, Ob = {
  key: 1,
  class: "choice-badge download"
}, Ab = {
  key: 2,
  class: "choice-badge pending"
}, zb = {
  key: 5,
  class: "no-choices"
}, Fb = /* @__PURE__ */ Ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const n = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: f } = gc(), { loadPendingDownloads: v } = jn(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ft(), k = _(null), $ = _([]), S = _(!1), C = _(!1), I = _(null), E = _("analysis"), P = _([]), O = _(/* @__PURE__ */ new Map()), U = _(/* @__PURE__ */ new Map()), F = _(/* @__PURE__ */ new Set()), D = M(() => {
      const Q = [
        { id: "analysis", label: "Analysis" }
      ];
      return pe.value && Q.push({ id: "nodes", label: "Nodes" }), se.value && Q.push({ id: "packages", label: "Packages" }), te.value && Q.push({ id: "models", label: "Models" }), Q.push({ id: "review", label: "Review" }), E.value === "applying" && Q.push({ id: "applying", label: "Applying" }), Q;
    });
    M(() => k.value ? k.value.stats.needs_user_input : !1);
    const W = M(() => N.value.filter(
      (Q) => !O.value.has(Q.reference.node_type)
    ).length), ce = M(() => ae.value.filter(
      (L) => !O.value.has(L.node_type)
    ).length + xe.value.length + W.value), de = M(() => k.value ? k.value.nodes.unresolved.filter(
      (Q) => !O.value.has(Q.reference.node_type)
    ).length : 0), J = M(() => k.value ? k.value.nodes.ambiguous.filter(
      (Q) => !O.value.has(Q.reference.node_type)
    ).length : 0), ue = M(() => k.value ? k.value.nodes.version_gated || [] : []), K = M(() => k.value ? k.value.nodes.uninstallable || [] : []), N = M(() => K.value.filter((Q) => {
      var L;
      return !!((L = Q.package) != null && L.package_id);
    })), G = M(() => ue.value.length > 0), pe = M(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 || Te.value.length > 0 : !1), te = M(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), oe = M(() => k.value ? k.value.stats.download_intents > 0 : !1), re = M(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), H = M(() => N.value.length > 0), se = M(() => re.value || H.value), ie = M(() => k.value ? k.value.nodes.resolved.length : 0), Ie = M(() => k.value ? k.value.models.resolved.filter((Q) => Q.has_category_mismatch) : []), he = M(() => Ie.value.length > 0), Fe = M(() => pe.value ? "nodes" : se.value ? "packages" : te.value ? "models" : "review"), Ne = M(() => {
      if (!k.value) return [];
      const Q = k.value.nodes.resolved.filter((le) => !le.is_installed), L = /* @__PURE__ */ new Set();
      return Q.filter((le) => L.has(le.package.package_id) ? !1 : (L.add(le.package.package_id), !0));
    }), be = M(() => {
      if (!k.value) return [];
      const Q = k.value.nodes.resolved.filter((le) => !le.is_installed), L = /* @__PURE__ */ new Map();
      for (const le of Q) {
        const Je = L.get(le.package.package_id);
        Je ? Je.node_types_count++ : L.set(le.package.package_id, {
          package_id: le.package.package_id,
          title: le.package.title,
          node_types_count: 1
        });
      }
      return Array.from(L.values());
    }), Re = M(() => be.value.filter((Q) => !F.value.has(Q.package_id)).length), ge = M(() => be.value.length + N.value.length), $e = M(() => {
      const Q = N.value.filter(
        (L) => O.value.has(L.reference.node_type)
      ).length;
      return be.value.length + Q;
    }), T = M(() => Ne.value.filter((Q) => !F.value.has(Q.package.package_id))), z = M(() => k.value ? k.value.models.resolved.filter(
      (Q) => Q.match_type === "download_intent" || Q.match_type === "property_download_intent"
    ).map((Q) => ({
      filename: Q.reference.widget_value,
      reference: Q.reference,
      is_download_intent: !0,
      resolved_model: Q.model,
      download_source: Q.download_source,
      target_path: Q.target_path
    })) : []), ae = M(() => {
      if (!k.value) return [];
      const Q = Te.value.map((Je) => ({
        node_type: Je.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), L = k.value.nodes.unresolved.map((Je) => ({
        node_type: Je.reference.node_type,
        reason: Je.reason,
        is_unresolved: !0,
        options: void 0
      })), le = k.value.nodes.ambiguous.map((Je) => ({
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
      return [...Q, ...L, ...le];
    }), Te = M(() => k.value ? k.value.nodes.resolved.filter(
      (Q) => {
        var L;
        return ((L = Q.saved_choice) == null ? void 0 : L.action) === "map-installed";
      }
    ) : []), xe = M(() => {
      if (!k.value) return [];
      const Q = k.value.models.unresolved.map((le) => ({
        filename: le.reference.widget_value,
        reference: le.reference,
        reason: le.reason,
        is_unresolved: !0,
        options: void 0
      })), L = k.value.models.ambiguous.map((le) => ({
        filename: le.reference.widget_value,
        reference: le.reference,
        has_multiple_options: !0,
        options: le.options.map((Je) => ({
          model: Je.model,
          match_confidence: Je.match_confidence,
          match_type: Je.match_type,
          has_download_source: Je.has_download_source
        }))
      }));
      return [...Q, ...L];
    }), Se = M(() => {
      const Q = xe.value, L = z.value.map((le) => ({
        filename: le.filename,
        reference: le.reference,
        is_download_intent: !0,
        resolved_model: le.resolved_model,
        download_source: le.download_source,
        target_path: le.target_path,
        options: void 0
      }));
      return [...Q, ...L];
    }), Y = M(() => z.value.filter((Q) => {
      const L = U.value.get(Q.filename);
      return L ? L.action === "download" : !0;
    }).map((Q) => ({
      filename: Q.filename,
      url: Q.download_source,
      target_path: Q.target_path
    })));
    function j(Q, L = 50) {
      return Q.length <= L ? Q : Q.slice(0, L - 3) + "...";
    }
    const ve = M(() => {
      let Q = T.value.length;
      for (const L of O.value.values())
        L.action === "install" && Q++;
      for (const L of U.value.values())
        L.action === "select" && Q++;
      return Q;
    }), _e = M(() => {
      let Q = 0;
      for (const L of U.value.values())
        L.action === "download" && Q++;
      for (const L of z.value)
        U.value.get(L.filename) || Q++;
      return Q;
    }), je = M(() => {
      let Q = 0;
      for (const L of O.value.values())
        L.action === "optional" && Q++;
      for (const L of U.value.values())
        L.action === "optional" && Q++;
      return Q;
    }), Ve = M(() => {
      let Q = F.value.size;
      for (const L of O.value.values())
        L.action === "skip" && Q++;
      for (const L of U.value.values())
        L.action === "skip" && Q++;
      for (const L of ae.value)
        O.value.has(L.node_type) || Q++;
      for (const L of xe.value)
        U.value.has(L.filename) || Q++;
      return Q;
    }), ke = M(() => {
      const Q = {};
      if (Q.analysis = { resolved: 1, total: 1 }, pe.value) {
        const L = ae.value.length, le = ae.value.filter(
          (Je) => O.value.has(Je.node_type)
        ).length;
        Q.nodes = { resolved: le, total: L };
      }
      if (se.value && (Q.packages = {
        resolved: $e.value,
        total: ge.value || 1
      }), te.value) {
        const L = Se.value.length, le = Se.value.filter(
          (Je) => U.value.has(Je.filename) || Je.is_download_intent
        ).length;
        Q.models = { resolved: le, total: L };
      }
      if (Q.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const L = d.totalFiles || 1, le = d.completedFiles.length;
        Q.applying = { resolved: le, total: L };
      }
      return Q;
    });
    function ee(Q) {
      E.value = Q;
    }
    function Ke() {
      const Q = D.value.findIndex((L) => L.id === E.value);
      Q > 0 && (E.value = D.value[Q - 1].id);
    }
    function Ue() {
      const Q = D.value.findIndex((L) => L.id === E.value);
      Q < D.value.length - 1 && (E.value = D.value[Q + 1].id);
    }
    function Xe() {
      const Q = D.value.findIndex((le) => le.id === E.value), L = D.value[Q + 1];
      return (L == null ? void 0 : L.label) || "Review";
    }
    function Le(Q) {
      var L;
      return !!((L = Q.package) != null && L.latest_version);
    }
    function Ae(Q) {
      switch (Q) {
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
    function He(Q) {
      return Q.filter((L) => L.installed && L.tracked).filter((L) => L.name !== "comfygit-manager").map((L) => ({
        package_id: L.registry_id || L.name,
        source: L.source
      })).filter((L, le, Je) => Je.findIndex((tt) => tt.package_id === L.package_id) === le).sort((L, le) => {
        const Je = Ae(L.source) - Ae(le.source);
        return Je !== 0 ? Je : L.package_id.localeCompare(le.package_id);
      });
    }
    async function kt() {
      S.value = !0, I.value = null;
      try {
        const [Q, L] = await Promise.all([
          l(n.workflowName),
          g()
        ]);
        k.value = Q, $.value = He(L.nodes), Ut(Q);
      } catch (Q) {
        I.value = Q instanceof Error ? Q.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Ut(Q) {
      O.value.clear();
      for (const L of Q.nodes.unresolved)
        L.saved_choice && O.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Q.nodes.resolved)
        L.saved_choice && O.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Q.nodes.ambiguous)
        L.saved_choice && O.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Q.nodes.uninstallable)
        L.saved_choice && O.value.set(L.reference.node_type, L.saved_choice);
    }
    function Gt() {
      P.value.includes("analysis") || P.value.push("analysis"), pe.value ? E.value = "nodes" : se.value ? E.value = "packages" : te.value ? E.value = "models" : E.value = "review";
    }
    function X(Q) {
      O.value.set(Q, { action: "optional" });
    }
    function Z(Q) {
      O.value.set(Q, { action: "skip" });
    }
    function fe(Q, L) {
      var Je;
      const le = ae.value.find((tt) => tt.node_type === Q);
      (Je = le == null ? void 0 : le.options) != null && Je[L] && O.value.set(Q, {
        action: "install",
        package_id: le.options[L].package_id
      });
    }
    function Qe(Q, L, le = {}) {
      O.value.set(Q, {
        action: "install",
        package_id: L,
        install_source: le.install_source,
        repository: le.repository,
        version: le.version
      });
    }
    function De(Q, L) {
      O.value.set(Q, {
        action: "map-installed",
        package_id: L
      });
    }
    function lt(Q) {
      O.value.delete(Q);
    }
    function et(Q) {
      return O.value.get(Q);
    }
    function gt(Q) {
      const L = et(Q);
      return L ? L.action === "optional" ? "Will be marked optional" : L.action === "skip" ? "Will be skipped" : L.action === "install" ? L.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function Rt(Q, L) {
      var tt;
      const le = (tt = Q.package) == null ? void 0 : tt.package_id;
      if (!le) return;
      const Je = {
        action: "install",
        package_id: le,
        version: Q.package.latest_version || null,
        install_source: L
      };
      L === "git" && Q.package.repository && (Je.repository = Q.package.repository), O.value.set(Q.reference.node_type, Je);
    }
    function Ye(Q) {
      O.value.set(Q, { action: "optional" });
    }
    function $t(Q) {
      O.value.set(Q, { action: "skip" });
    }
    function Yt(Q) {
      O.value.delete(Q);
    }
    function os(Q) {
      F.value.has(Q) ? F.value.delete(Q) : F.value.add(Q);
    }
    function q(Q) {
      U.value.set(Q, { action: "optional" });
    }
    function me(Q) {
      U.value.set(Q, { action: "skip" });
    }
    function ze(Q, L) {
      var Je;
      const le = xe.value.find((tt) => tt.filename === Q);
      (Je = le == null ? void 0 : le.options) != null && Je[L] && U.value.set(Q, {
        action: "select",
        selected_model: le.options[L].model
      });
    }
    function Ce(Q, L, le) {
      U.value.set(Q, {
        action: "download",
        url: L,
        target_path: le
      });
    }
    function We(Q) {
      U.value.delete(Q);
    }
    async function Ze(Q) {
      try {
        await p(Q);
      } catch (L) {
        I.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function ct() {
      var Q, L, le, Je;
      C.value = !0, I.value = null, f(), d.phase = "resolving", E.value = "applying";
      try {
        const tt = await r(n.workflowName, O.value, U.value, F.value);
        tt.models_to_download && tt.models_to_download.length > 0 && u(n.workflowName, tt.models_to_download), d.nodesMarkedOptional = tt.nodes_marked_optional || [], d.nodesMapped = tt.nodes_mapped || [], d.modelPathsSynced = tt.model_paths_synced || 0;
        const mt = Array.from(O.value.values()).map((ht) => {
          if ((ht == null ? void 0 : ht.action) !== "install" || ht.install_source !== "git")
            return null;
          const $s = ht.repository, Lt = ht.package_id;
          return !$s || !Lt ? null : {
            id: Lt,
            repository: $s,
            selectedVersion: ht.version || "latest"
          };
        }).filter((ht) => !!ht), At = new Set(mt.map((ht) => ht.id)), bs = new Set(
          Array.from(O.value.values()).filter((ht) => (ht == null ? void 0 : ht.action) === "install" && !!ht.package_id).map((ht) => ht.package_id)
        ), Xt = [
          ...tt.nodes_to_install || [],
          ...T.value.filter((ht) => !bs.has(ht.package.package_id)).map((ht) => ht.package.package_id)
        ];
        if (d.nodesToInstall = [...new Set(Xt)].filter((ht) => !At.has(ht)), d.nodesToInstall.length > 0 && await c(n.workflowName), mt.length > 0) {
          d.phase = "installing";
          const ht = ((Q = d.nodeInstallProgress) == null ? void 0 : Q.completedNodes) || [], $s = ((L = d.nodeInstallProgress) == null ? void 0 : L.totalNodes) || d.nodesToInstall.length;
          d.nodesToInstall = [
            ...d.nodesToInstall,
            ...mt.map((Lt) => Lt.id)
          ], d.nodeInstallProgress = {
            completedNodes: ht,
            totalNodes: $s + mt.length
          };
          for (const Lt of mt) {
            const Hn = d.nodeInstallProgress.completedNodes.length;
            d.nodeInstallProgress.currentNode = Lt.id, d.nodeInstallProgress.currentIndex = Hn;
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
              if (((le = Vt.status) == null ? void 0 : le.status_str) === "dependency_review_required") {
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
              const bn = Vt instanceof Error ? Vt.message : `Failed to install ${Lt.id}`;
              d.nodeInstallProgress.completedNodes.push({
                node_id: Lt.id,
                success: !1,
                error: bn
              }), d.installError = bn;
            }
          }
        }
        d.phase = "complete", await v(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), a("refresh"), a("install");
      } catch (tt) {
        I.value = tt instanceof Error ? tt.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function ut() {
      a("refresh"), a("restart"), a("close");
    }
    async function St() {
      var L;
      const Q = ((L = d.nodeInstallProgress) == null ? void 0 : L.completedNodes.filter((le) => !le.success).map((le) => le.node_id)) || [];
      if (Q.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Q.length
        }, d.nodesToInstall = Q, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(n.workflowName), d.phase = "complete";
        } catch (le) {
          d.error = le instanceof Error ? le.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return dt(kt), (Q, L) => (o(), R(Pt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: L[1] || (L[1] = (le) => a("close"))
    }, {
      body: h(() => [
        S.value && !k.value ? (o(), i("div", r_, [...L[2] || (L[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (o(), i("div", c_, [
          b(Qy, {
            steps: D.value,
            "current-step": E.value,
            "completed-steps": P.value,
            "step-stats": ke.value,
            onStepChange: ee
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (o(), i("div", u_, [
            s("div", d_, [
              s("div", m_, [
                L[3] || (L[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", f_, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", v_, [
                s("div", p_, [
                  L[16] || (L[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", g_, [
                    ie.value > 0 ? (o(), i("div", h_, [
                      L[4] || (L[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", y_, m(ie.value), 1),
                      L[5] || (L[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (o(), i("div", w_, [
                      L[6] || (L[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", __, m(k.value.stats.packages_needing_installation), 1),
                      L[7] || (L[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    J.value > 0 ? (o(), i("div", k_, [
                      L[8] || (L[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", b_, m(J.value), 1),
                      L[9] || (L[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ue.value.length > 0 ? (o(), i("div", $_, [
                      L[10] || (L[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", C_, m(ue.value.length), 1),
                      L[11] || (L[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    W.value > 0 ? (o(), i("div", x_, [
                      L[12] || (L[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", S_, m(W.value), 1),
                      L[13] || (L[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    de.value > 0 ? (o(), i("div", I_, [
                      L[14] || (L[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", E_, m(de.value), 1),
                      L[15] || (L[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", T_, [
                  L[27] || (L[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", M_, [
                    s("div", P_, [
                      L[17] || (L[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", R_, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      L[18] || (L[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (o(), i("div", D_, [
                      L[19] || (L[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", L_, m(k.value.stats.download_intents), 1),
                      L[20] || (L[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    he.value ? (o(), i("div", N_, [
                      L[21] || (L[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", U_, m(Ie.value.length), 1),
                      L[22] || (L[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    k.value.models.ambiguous.length > 0 ? (o(), i("div", O_, [
                      L[23] || (L[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", A_, m(k.value.models.ambiguous.length), 1),
                      L[24] || (L[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    k.value.models.unresolved.length > 0 ? (o(), i("div", z_, [
                      L[25] || (L[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", F_, m(k.value.models.unresolved.length), 1),
                      L[26] || (L[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              ce.value > 0 ? (o(), i("div", B_, [
                L[28] || (L[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", V_, m(ce.value) + " item" + m(ce.value === 1 ? "" : "s") + " need your input", 1)
              ])) : G.value ? (o(), i("div", W_, [
                L[29] || (L[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", G_, m(ue.value.length) + " node type" + m(ue.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : W.value > 0 ? (o(), i("div", j_, [
                L[30] || (L[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", H_, m(W.value) + " community-mapped node type" + m(W.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : re.value ? (o(), i("div", q_, [
                L[31] || (L[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", K_, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(oe.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : oe.value ? (o(), i("div", J_, [
                L[32] || (L[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", Q_, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : he.value ? (o(), i("div", Y_, [
                L[33] || (L[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", X_, m(Ie.value.length) + " model" + m(Ie.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (o(), i("div", Z_, [...L[34] || (L[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              he.value ? (o(), i("div", ek, [
                L[37] || (L[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", tk, [
                  (o(!0), i(B, null, we(Ie.value, (le) => {
                    var Je, tt;
                    return o(), i("div", {
                      key: le.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", sk, m(le.actual_category) + "/" + m((Je = le.model) == null ? void 0 : Je.filename), 1),
                      L[36] || (L[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", nk, m((tt = le.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      le.file_path ? (o(), R(Oe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (mt) => Ze(le.file_path)
                      }, {
                        default: h(() => [...L[35] || (L[35] = [
                          x(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              G.value ? (o(), i("div", ok, [
                L[38] || (L[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", ak, [
                  (o(!0), i(B, null, we(ue.value, (le) => {
                    var Je;
                    return o(), i("div", {
                      key: `vg-${le.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", lk, m(le.reference.node_type), 1),
                      s("span", ik, m(le.guidance || ((Je = k.value.node_guidance) == null ? void 0 : Je[le.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (o(), i("div", rk, [
            b(sw, {
              nodes: ae.value,
              "node-choices": O.value,
              "auto-resolved-packages": [],
              "skipped-packages": F.value,
              "installed-node-packs": $.value,
              onMarkOptional: X,
              onSkip: Z,
              onOptionSelected: fe,
              onManualEntry: Qe,
              onInstalledPackSelected: De,
              onClearChoice: lt,
              onPackageSkip: os
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          E.value === "packages" ? (o(), i("div", ck, [
            s("div", uk, [
              L[39] || (L[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", dk, m($e.value) + "/" + m(ge.value) + " decided", 1)
            ]),
            be.value.length > 0 ? (o(), i("div", mk, [
              s("div", fk, [
                s("div", null, [
                  s("h4", vk, "Resolved Packages (" + m(be.value.length) + ")", 1),
                  L[40] || (L[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", pk, m(Re.value) + "/" + m(be.value.length) + " to install", 1)
              ]),
              s("div", gk, [
                (o(!0), i(B, null, we(be.value, (le) => (o(), i("div", {
                  key: le.package_id,
                  class: "package-item"
                }, [
                  s("div", hk, [
                    s("code", yk, m(le.package_id), 1),
                    s("span", wk, m(le.node_types_count) + " node type" + m(le.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", _k, [
                    F.value.has(le.package_id) ? (o(), i("span", bk, "Skipped")) : (o(), i("span", kk, "Will Install")),
                    b(Oe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => os(le.package_id)
                    }, {
                      default: h(() => [
                        x(m(F.value.has(le.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            N.value.length > 0 ? (o(), i("div", $k, [
              s("div", Ck, [
                s("h4", xk, "Community-Mapped Packages (" + m(N.value.length) + ")", 1),
                L[41] || (L[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", Sk, [
                (o(!0), i(B, null, we(N.value, (le) => (o(), i("div", {
                  key: `community-${le.reference.node_type}-${le.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", Ik, [
                    s("div", Ek, [
                      s("code", Tk, m(le.reference.node_type), 1),
                      s("span", Mk, m(le.package.title || le.package.package_id), 1)
                    ]),
                    s("div", Pk, m(le.package.package_id), 1),
                    s("div", Rk, [
                      L[42] || (L[42] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      le.guidance ? (o(), i("span", Dk, m(le.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  et(le.reference.node_type) ? (o(), i("div", Lk, [
                    s("div", Nk, m(gt(le.reference.node_type)), 1),
                    b(Oe, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (Je) => Yt(le.reference.node_type)
                    }, {
                      default: h(() => [...L[43] || (L[43] = [
                        x(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (o(), i("div", Uk, [
                    Le(le) ? (o(), R(Oe, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !le.package.package_id,
                      onClick: (Je) => Rt(le, "registry")
                    }, {
                      default: h(() => [...L[44] || (L[44] = [
                        x(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    le.package.repository ? (o(), R(Oe, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !le.package.package_id,
                      onClick: (Je) => Rt(le, "git")
                    }, {
                      default: h(() => [...L[45] || (L[45] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(Oe, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Ye(le.reference.node_type)
                    }, {
                      default: h(() => [...L[46] || (L[46] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Oe, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => $t(le.reference.node_type)
                    }, {
                      default: h(() => [...L[47] || (L[47] = [
                        x(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          E.value === "models" ? (o(), R(Yw, {
            key: 3,
            models: Se.value,
            "model-choices": U.value,
            onMarkOptional: q,
            onSkip: me,
            onOptionSelected: ze,
            onDownloadUrl: Ce,
            onClearChoice: We
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (o(), i("div", Ok, [
            s("div", Ak, [
              L[53] || (L[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", zk, [
                s("div", Fk, [
                  s("span", Bk, m(ve.value), 1),
                  L[48] || (L[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", Vk, [
                  s("span", Wk, m(_e.value), 1),
                  L[49] || (L[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", Gk, [
                  s("span", jk, m(je.value), 1),
                  L[50] || (L[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", Hk, [
                  s("span", qk, m(Ve.value), 1),
                  L[51] || (L[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              be.value.length > 0 ? (o(), i("div", Kk, [
                s("h4", Jk, "Node Packages (" + m(be.value.length) + ")", 1),
                s("div", Qk, [
                  (o(!0), i(B, null, we(be.value, (le) => (o(), i("div", {
                    key: le.package_id,
                    class: "review-item"
                  }, [
                    s("code", Yk, m(le.package_id), 1),
                    s("div", Xk, [
                      F.value.has(le.package_id) ? (o(), i("span", eb, "Skipped")) : (o(), i("span", Zk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              N.value.length > 0 ? (o(), i("div", tb, [
                s("h4", sb, "Community-Mapped Packages (" + m(N.value.length) + ")", 1),
                s("div", nb, [
                  (o(!0), i(B, null, we(N.value, (le) => {
                    var Je, tt, mt;
                    return o(), i("div", {
                      key: `review-community-${le.reference.node_type}-${le.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", ob, m(le.reference.node_type), 1),
                      s("div", ab, [
                        ((Je = et(le.reference.node_type)) == null ? void 0 : Je.action) === "install" ? (o(), i("span", lb, m(((tt = et(le.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((mt = et(le.reference.node_type)) == null ? void 0 : mt.action) === "optional" ? (o(), i("span", ib, " Optional ")) : (o(), i("span", rb, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ae.value.length > 0 ? (o(), i("div", cb, [
                s("h4", ub, "Node Choices (" + m(ae.value.length) + ")", 1),
                s("div", db, [
                  (o(!0), i(B, null, we(ae.value, (le) => {
                    var Je, tt, mt, At, bs, Xt;
                    return o(), i("div", {
                      key: le.node_type,
                      class: "review-item"
                    }, [
                      s("code", mb, m(le.node_type), 1),
                      s("div", fb, [
                        O.value.has(le.node_type) ? (o(), i(B, { key: 0 }, [
                          ((Je = O.value.get(le.node_type)) == null ? void 0 : Je.action) === "install" ? (o(), i("span", vb, m((tt = O.value.get(le.node_type)) == null ? void 0 : tt.package_id), 1)) : ((mt = O.value.get(le.node_type)) == null ? void 0 : mt.action) === "map-installed" ? (o(), i("span", pb, " Mapped to " + m((At = O.value.get(le.node_type)) == null ? void 0 : At.package_id), 1)) : ((bs = O.value.get(le.node_type)) == null ? void 0 : bs.action) === "optional" ? (o(), i("span", gb, " Optional ")) : ((Xt = O.value.get(le.node_type)) == null ? void 0 : Xt.action) === "skip" ? (o(), i("span", hb, " Skip ")) : y("", !0)
                        ], 64)) : (o(), i("span", yb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Y.value.length > 0 ? (o(), i("div", wb, [
                s("h4", _b, "Models to Download (" + m(Y.value.length) + ")", 1),
                s("div", kb, [
                  (o(!0), i(B, null, we(Y.value, (le) => (o(), i("div", {
                    key: le.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", bb, [
                      s("code", $b, m(le.filename), 1),
                      s("div", Cb, [
                        s("span", xb, "→ " + m(le.target_path), 1),
                        le.url ? (o(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: le.url
                        }, m(j(le.url)), 9, Sb)) : y("", !0)
                      ])
                    ]),
                    L[52] || (L[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Se.value.length > 0 ? (o(), i("div", Ib, [
                s("h4", Eb, "Models (" + m(Se.value.length) + ")", 1),
                s("div", Tb, [
                  (o(!0), i(B, null, we(Se.value, (le) => {
                    var Je, tt, mt, At, bs, Xt, ht;
                    return o(), i("div", {
                      key: le.filename,
                      class: "review-item"
                    }, [
                      s("code", Mb, m(le.filename), 1),
                      s("div", Pb, [
                        U.value.has(le.filename) ? (o(), i(B, { key: 0 }, [
                          ((Je = U.value.get(le.filename)) == null ? void 0 : Je.action) === "select" ? (o(), i("span", Rb, m((mt = (tt = U.value.get(le.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : mt.filename), 1)) : ((At = U.value.get(le.filename)) == null ? void 0 : At.action) === "download" ? (o(), i("span", Db, " Download ")) : ((bs = U.value.get(le.filename)) == null ? void 0 : bs.action) === "optional" ? (o(), i("span", Lb, " Optional ")) : ((Xt = U.value.get(le.filename)) == null ? void 0 : Xt.action) === "skip" ? (o(), i("span", Nb, " Skip ")) : ((ht = U.value.get(le.filename)) == null ? void 0 : ht.action) === "cancel_download" ? (o(), i("span", Ub, " Cancel Download ")) : y("", !0)
                        ], 64)) : le.is_download_intent ? (o(), i("span", Ob, " Pending Download ")) : (o(), i("span", Ab, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ne.value.length === 0 && N.value.length === 0 && ae.value.length === 0 && Se.value.length === 0 ? (o(), i("div", zb, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (o(), R(i_, {
            key: 5,
            progress: it(d),
            onRestart: ut,
            onRetryFailed: St
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        E.value !== "analysis" && E.value !== "applying" ? (o(), R(Oe, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: Ke
        }, {
          default: h(() => [...L[54] || (L[54] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        L[56] || (L[56] = s("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || it(d).phase === "complete" || it(d).phase === "error" ? (o(), R(Oe, {
          key: 1,
          variant: "secondary",
          onClick: L[0] || (L[0] = (le) => a("close"))
        }, {
          default: h(() => [
            x(m(it(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "analysis" ? (o(), R(Oe, {
          key: 2,
          variant: "primary",
          disabled: S.value,
          onClick: Gt
        }, {
          default: h(() => [
            x(m(Fe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E.value === "nodes" || E.value === "packages" || E.value === "models" ? (o(), R(Oe, {
          key: 3,
          variant: "primary",
          onClick: Ue
        }, {
          default: h(() => [
            x(" Continue to " + m(Xe()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "review" ? (o(), R(Oe, {
          key: 4,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: ct
        }, {
          default: h(() => [...L[55] || (L[55] = [
            x(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Bb = /* @__PURE__ */ Me(Fb, [["__scopeId", "data-v-f198a009"]]), Vb = { class: "search-input-wrapper" }, Wb = ["value", "placeholder"], Gb = /* @__PURE__ */ Ee({
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
    }), (d, f) => (o(), i("div", Vb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: xs(u, ["escape"])
      }, null, 40, Wb),
      e.clearable && e.modelValue ? (o(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), jb = /* @__PURE__ */ Me(Gb, [["__scopeId", "data-v-266f857a"]]), Hb = { class: "search-bar" }, qb = /* @__PURE__ */ Ee({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, n) => (o(), i("div", Hb, [
      b(jb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: n[1] || (n[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), _n = /* @__PURE__ */ Me(qb, [["__scopeId", "data-v-3d51bbfd"]]), Kb = { class: "section-group" }, Jb = {
  key: 0,
  class: "section-content"
}, Qb = /* @__PURE__ */ Ee({
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
    return (c, u) => (o(), i("section", Kb, [
      b(hs, {
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
      !e.collapsible || l.value ? (o(), i("div", Jb, [
        rt(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ot = /* @__PURE__ */ Me(Qb, [["__scopeId", "data-v-c48e33ed"]]), Yb = { class: "item-header" }, Xb = {
  key: 0,
  class: "item-icon"
}, Zb = { class: "item-info" }, e2 = {
  key: 0,
  class: "item-title"
}, t2 = {
  key: 1,
  class: "item-subtitle"
}, s2 = {
  key: 0,
  class: "item-details"
}, n2 = {
  key: 1,
  class: "item-actions"
}, o2 = /* @__PURE__ */ Ee({
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
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", Yb, [
        l.$slots.icon ? (o(), i("span", Xb, [
          rt(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", Zb, [
          l.$slots.title ? (o(), i("div", e2, [
            rt(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (o(), i("div", t2, [
            rt(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (o(), i("div", s2, [
        rt(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (o(), i("div", n2, [
        rt(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), es = /* @__PURE__ */ Me(o2, [["__scopeId", "data-v-cc435e0e"]]), a2 = { class: "empty-state" }, l2 = {
  key: 0,
  class: "empty-icon"
}, i2 = { class: "empty-message" }, r2 = /* @__PURE__ */ Ee({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, n) => (o(), i("div", a2, [
      e.icon ? (o(), i("div", l2, m(e.icon), 1)) : y("", !0),
      s("p", i2, m(e.message), 1),
      e.actionLabel ? (o(), R(Pe, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          x(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), Ts = /* @__PURE__ */ Me(r2, [["__scopeId", "data-v-4466284f"]]), c2 = { class: "loading-state" }, u2 = { class: "loading-message" }, d2 = /* @__PURE__ */ Ee({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, n) => (o(), i("div", c2, [
      n[0] || (n[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", u2, m(e.message), 1)
    ]));
  }
}), Fs = /* @__PURE__ */ Me(d2, [["__scopeId", "data-v-ad8436c9"]]), m2 = { class: "error-state" }, f2 = { class: "error-message" }, v2 = /* @__PURE__ */ Ee({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, n) => (o(), i("div", m2, [
      n[2] || (n[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", f2, m(e.message), 1),
      e.retry ? (o(), R(Pe, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (a) => t.$emit("retry"))
      }, {
        default: h(() => [...n[1] || (n[1] = [
          x(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Bs = /* @__PURE__ */ Me(v2, [["__scopeId", "data-v-5397be48"]]);
function p2(e) {
  return e.toLowerCase().endsWith(".json") ? e : `${e}.json`;
}
function Di(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function g2(e) {
  const t = e.trim(), n = p2(t);
  return t.startsWith("workflows/") ? Di([n, t]) : Di([
    `workflows/${n}`,
    n,
    t
  ]);
}
function h2(e) {
  return e.trim().replace(/^workflows\//, "").replace(/\.json$/i, "");
}
async function y2(e) {
  const t = g2(e), n = [];
  for (const a of t)
    try {
      const l = await Ks(`/userdata/${encodeURIComponent(a)}`);
      if (l.ok)
        return l.json();
      n.push(`${a}: ${l.status}`);
    } catch (l) {
      n.push(`${a}: ${l instanceof Error ? l.message : String(l)}`);
    }
  throw new Error(`Could not load saved workflow "${e}" (${n.join(", ")})`);
}
async function w2(e) {
  const t = window.app;
  if (typeof t.loadGraphData != "function")
    throw new Error("ComfyUI loadGraphData is not available");
  const n = await y2(e);
  await t.loadGraphData(
    n,
    !0,
    !0,
    h2(e),
    {
      showMissingModelsDialog: !0,
      showMissingNodesDialog: !0
    }
  ), await new Promise((a) => requestAnimationFrame(a));
}
const _2 = /* @__PURE__ */ Ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getWorkflows: l } = ft(), r = _([]), c = _(!1), u = _(null), d = _(""), f = _(!0), v = _(!1), p = _(!1), w = _(!1), g = _(null), k = M(
      () => r.value.filter((H) => H.status === "broken")
    ), $ = M(
      () => r.value.filter((H) => H.status === "new")
    ), S = M(
      () => r.value.filter((H) => H.status === "modified")
    ), C = M(
      () => r.value.filter((H) => H.status === "synced")
    ), I = M(() => {
      if (!d.value.trim()) return r.value;
      const H = d.value.toLowerCase();
      return r.value.filter((se) => se.name.toLowerCase().includes(H));
    }), E = M(
      () => k.value.filter(
        (H) => !d.value.trim() || H.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = M(
      () => $.value.filter(
        (H) => !d.value.trim() || H.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = M(
      () => S.value.filter(
        (H) => !d.value.trim() || H.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), U = M(
      () => C.value.filter(
        (H) => !d.value.trim() || H.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = M(
      () => v.value ? U.value : U.value.slice(0, 5)
    );
    async function D(H = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(H);
      } catch (se) {
        u.value = se instanceof Error ? se.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: D });
    function W(H) {
      g.value = H, p.value = !0;
    }
    function ce(H) {
      g.value = H, p.value = !1, w.value = !0;
    }
    async function de(H) {
      g.value = H;
      try {
        await w2(H);
      } catch (se) {
        console.error("[ComfyGit] Failed to activate workflow for contract mapping:", se), u.value = se instanceof Error ? se.message : "Failed to open workflow for contract mapping";
        return;
      }
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: H }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function J(H) {
      var Ie;
      const ie = (Ie = H.detail) == null ? void 0 : Ie.workflowName;
      ie && de(ie);
    }
    function ue() {
    }
    function K() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function N() {
      w.value = !1, await D(!0);
    }
    async function G() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function pe(H) {
      return H.replace(/uninstallable node mappings?/gi, (se) => se.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function te(H) {
      if (H.issue_summary && H.issue_summary.trim().length > 0)
        return pe(H.issue_summary);
      const se = [];
      return H.version_gated_count && H.version_gated_count > 0 && se.push(`${H.version_gated_count} node${H.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), H.uninstallable_count && H.uninstallable_count > 0 && se.push(`${H.uninstallable_count} node${H.uninstallable_count > 1 ? "s" : ""} need community packages`), H.missing_nodes > 0 && se.push(`${H.missing_nodes} missing node${H.missing_nodes > 1 ? "s" : ""}`), H.missing_models > 0 && se.push(`${H.missing_models} missing model${H.missing_models > 1 ? "s" : ""}`), H.models_with_category_mismatch && H.models_with_category_mismatch > 0 && se.push(`${H.models_with_category_mismatch} model${H.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), H.pending_downloads && H.pending_downloads > 0 && se.push(`${H.pending_downloads} pending download${H.pending_downloads > 1 ? "s" : ""}`), se.length > 0 ? se.join(", ") : "Has issues";
    }
    function oe(H) {
      const se = H.sync_state === "new" ? "New" : H.sync_state === "modified" ? "Modified" : H.sync_state === "synced" ? "Synced" : H.sync_state, ie = re(H);
      return H.has_path_sync_issues && H.models_needing_path_sync && H.models_needing_path_sync > 0 ? `${H.models_needing_path_sync} model path${H.models_needing_path_sync > 1 ? "s" : ""} need${H.models_needing_path_sync === 1 ? "s" : ""} sync · ${ie}` : `${se || "Unknown"} · ${ie}`;
    }
    function re(H) {
      const se = H.contract_summary;
      return !se || !se.has_contract ? "No contract" : se.status === "incomplete" ? `${se.input_count} in / ${se.output_count} out · incomplete` : `${se.input_count} in / ${se.output_count} out`;
    }
    return dt(() => {
      D(), window.addEventListener("comfygit:open-workflow-contract", J);
    }), To(() => {
      window.removeEventListener("comfygit:open-workflow-contract", J);
    }), (H, se) => (o(), i(B, null, [
      b(Jt, null, {
        header: h(() => [
          b(Qt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(_n, {
            modelValue: d.value,
            "onUpdate:modelValue": se[0] || (se[0] = (ie) => d.value = ie),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (o(), R(Fs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), R(Bs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            E.value.length ? (o(), R(Ot, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(E.value, (ie) => (o(), R(es, {
                  key: ie.name,
                  status: "broken"
                }, {
                  icon: h(() => [...se[6] || (se[6] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ie.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(te(ie)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ie) => ce(ie.name)
                    }, {
                      default: h(() => [...se[7] || (se[7] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ie) => W(ie.name)
                    }, {
                      default: h(() => [...se[8] || (se[8] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ie) => de(ie.name)
                    }, {
                      default: h(() => [...se[9] || (se[9] = [
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
            P.value.length ? (o(), R(Ot, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(P.value, (ie) => (o(), R(es, {
                  key: ie.name,
                  status: ie.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    x(m(ie.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    x(m(ie.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(oe(ie)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ie) => W(ie.name)
                    }, {
                      default: h(() => [...se[10] || (se[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ie) => de(ie.name)
                    }, {
                      default: h(() => [...se[11] || (se[11] = [
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
            O.value.length ? (o(), R(Ot, {
              key: 2,
              title: "MODIFIED",
              count: O.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(O.value, (ie) => (o(), R(es, {
                  key: ie.name,
                  status: ie.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...se[12] || (se[12] = [
                    x("⚡", -1)
                  ])]),
                  title: h(() => [
                    x(m(ie.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(oe(ie)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ie) => W(ie.name)
                    }, {
                      default: h(() => [...se[13] || (se[13] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ie) => de(ie.name)
                    }, {
                      default: h(() => [...se[14] || (se[14] = [
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
            U.value.length ? (o(), R(Ot, {
              key: 3,
              title: "SYNCED",
              count: U.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: se[2] || (se[2] = (ie) => f.value = ie)
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(F.value, (ie) => (o(), R(es, {
                  key: ie.name,
                  status: ie.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    x(m(ie.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    x(m(ie.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(oe(ie)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ie) => W(ie.name)
                    }, {
                      default: h(() => [...se[15] || (se[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ie) => de(ie.name)
                    }, {
                      default: h(() => [...se[16] || (se[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && U.value.length > 5 ? (o(), R(Pe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: se[1] || (se[1] = (ie) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    x(" View all " + m(U.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (o(), R(Ts, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (o(), R(Ay, {
        key: 0,
        "workflow-name": g.value,
        onClose: se[3] || (se[3] = (ie) => p.value = !1),
        onResolve: se[4] || (se[4] = (ie) => ce(g.value)),
        onRefresh: se[5] || (se[5] = (ie) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (o(), R(Bb, {
        key: 1,
        "workflow-name": g.value,
        onClose: N,
        onInstall: ue,
        onRefresh: K,
        onRestart: G
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), k2 = /* @__PURE__ */ Me(_2, [["__scopeId", "data-v-7bf48b3a"]]), b2 = /* @__PURE__ */ Ee({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Nl = /* @__PURE__ */ Me(b2, [["__scopeId", "data-v-ccb7816e"]]);
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
const $2 = {
  key: 0,
  class: "model-details"
}, C2 = { class: "detail-section" }, x2 = { class: "detail-row" }, S2 = { class: "detail-value mono" }, I2 = { class: "detail-row" }, E2 = { class: "detail-value mono" }, T2 = { class: "detail-row" }, M2 = { class: "detail-value mono" }, P2 = {
  key: 0,
  class: "detail-row"
}, R2 = { class: "detail-value" }, D2 = ["disabled"], L2 = {
  key: 1,
  class: "detail-row"
}, N2 = { class: "detail-value hash-error" }, U2 = { class: "detail-row" }, O2 = { class: "detail-value" }, A2 = { class: "detail-row" }, z2 = { class: "detail-value" }, F2 = { class: "detail-row" }, B2 = { class: "detail-value" }, V2 = { class: "detail-section" }, W2 = { class: "section-header" }, G2 = {
  key: 0,
  class: "locations-list"
}, j2 = { class: "location-path mono" }, H2 = {
  key: 0,
  class: "location-modified"
}, q2 = ["onClick"], K2 = {
  key: 1,
  class: "empty-state"
}, J2 = { class: "detail-section" }, Q2 = { class: "section-header-row" }, Y2 = { class: "section-header" }, X2 = {
  key: 0,
  class: "sources-list"
}, Z2 = { class: "source-type" }, e$ = ["href"], t$ = ["disabled", "onClick"], s$ = {
  key: 1,
  class: "empty-state"
}, n$ = {
  key: 2,
  class: "source-error"
}, o$ = {
  key: 3,
  class: "source-success"
}, a$ = /* @__PURE__ */ Ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ft(), u = _(null), d = _(!0), f = _(null), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = M(() => {
      var de;
      return !!((de = u.value) != null && de.hash && (!u.value.blake3 || !u.value.sha256));
    }), C = _(null);
    let I = null;
    function E(de, J = "success", ue = 2e3) {
      I && clearTimeout(I), C.value = { message: de, type: J }, I = setTimeout(() => {
        C.value = null;
      }, ue);
    }
    function P(de) {
      if (!de) return "Unknown";
      const J = 1024 * 1024 * 1024, ue = 1024 * 1024;
      return de >= J ? `${(de / J).toFixed(1)} GB` : de >= ue ? `${(de / ue).toFixed(0)} MB` : `${(de / 1024).toFixed(0)} KB`;
    }
    async function O(de) {
      try {
        await Ul(de), E("Copied to clipboard!");
      } catch (J) {
        console.error("Failed to copy:", J), E("Failed to copy to clipboard", "error");
      }
    }
    async function U(de) {
      if (u.value) {
        v.value = de, p.value = null, w.value = null;
        try {
          await r(u.value.hash, de), E("Source removed"), await ce();
        } catch (J) {
          p.value = J instanceof Error ? J.message : "Failed to remove source";
        } finally {
          v.value = null;
        }
      }
    }
    async function F() {
      w.value = "Source added successfully!", g.value = !1, await ce(), a("sourceSaved");
    }
    async function D() {
      await ce();
    }
    async function W() {
      var de;
      if ((de = u.value) != null && de.hash) {
        k.value = !0, $.value = null;
        try {
          u.value = await c(u.value.hash), E("Hashes computed successfully!");
        } catch (J) {
          $.value = J instanceof Error ? J.message : "Failed to compute hashes";
        } finally {
          k.value = !1;
        }
      }
    }
    async function ce() {
      d.value = !0, f.value = null;
      try {
        u.value = await l(n.identifier);
      } catch (de) {
        f.value = de instanceof Error ? de.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return dt(ce), (de, J) => {
      var ue;
      return o(), i(B, null, [
        b(Pt, {
          title: `Model Details: ${((ue = u.value) == null ? void 0 : ue.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: f.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: J[5] || (J[5] = (K) => de.$emit("close"))
        }, {
          body: h(() => {
            var K, N, G, pe;
            return [
              u.value ? (o(), i("div", $2, [
                s("section", C2, [
                  s("div", x2, [
                    J[7] || (J[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", S2, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[0] || (J[0] = (te) => O(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", I2, [
                    J[8] || (J[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", E2, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[1] || (J[1] = (te) => O(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", T2, [
                    J[9] || (J[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", M2, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[2] || (J[2] = (te) => O(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (o(), i("div", P2, [
                    J[10] || (J[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", R2, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: k.value,
                        onClick: W
                      }, m(k.value ? "Computing hashes..." : "Compute Full Hashes"), 9, D2)
                    ])
                  ])) : y("", !0),
                  $.value ? (o(), i("div", L2, [
                    J[11] || (J[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", N2, m($.value), 1)
                  ])) : y("", !0),
                  s("div", U2, [
                    J[12] || (J[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", O2, m(P(u.value.size)), 1)
                  ]),
                  s("div", A2, [
                    J[13] || (J[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", z2, m(u.value.category), 1)
                  ]),
                  s("div", F2, [
                    J[14] || (J[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", B2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", V2, [
                  s("h4", W2, "Locations (" + m(((K = u.value.locations) == null ? void 0 : K.length) || 0) + ")", 1),
                  (N = u.value.locations) != null && N.length ? (o(), i("div", G2, [
                    (o(!0), i(B, null, we(u.value.locations, (te, oe) => (o(), i("div", {
                      key: oe,
                      class: "location-item"
                    }, [
                      s("span", j2, m(te.path), 1),
                      te.modified ? (o(), i("span", H2, "Modified: " + m(te.modified), 1)) : y("", !0),
                      te.path ? (o(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (re) => O(te.path)
                      }, " Copy File Path ", 8, q2)) : y("", !0)
                    ]))), 128))
                  ])) : (o(), i("div", K2, "No locations found"))
                ]),
                s("section", J2, [
                  s("div", Q2, [
                    s("h4", Y2, "Download Sources (" + m(((G = u.value.sources) == null ? void 0 : G.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: J[3] || (J[3] = (te) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (pe = u.value.sources) != null && pe.length ? (o(), i("div", X2, [
                    (o(!0), i(B, null, we(u.value.sources, (te, oe) => (o(), i("div", {
                      key: oe,
                      class: "source-item"
                    }, [
                      s("span", Z2, m(te.type) + ":", 1),
                      s("a", {
                        href: te.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(te.url), 9, e$),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: v.value === te.url,
                        onClick: (re) => U(te.url)
                      }, m(v.value === te.url ? "..." : "×"), 9, t$)
                    ]))), 128))
                  ])) : (o(), i("div", s$, " No download sources configured ")),
                  p.value ? (o(), i("p", n$, m(p.value), 1)) : y("", !0),
                  w.value ? (o(), i("p", o$, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: J[4] || (J[4] = (K) => de.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (o(), R(cs, { to: "body" }, [
          C.value ? (o(), i("div", {
            key: 0,
            class: Be(["toast", C.value.type])
          }, m(C.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (o(), R(vc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: J[6] || (J[6] = (K) => g.value = !1),
          onSaved: F,
          onHashesComputed: D
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), wc = /* @__PURE__ */ Me(a$, [["__scopeId", "data-v-cd808fbc"]]), l$ = { class: "workflow-links-tab" }, i$ = { class: "section-header-row" }, r$ = {
  key: 0,
  class: "state-message"
}, c$ = {
  key: 1,
  class: "error-message"
}, u$ = {
  key: 2,
  class: "candidate-list"
}, d$ = {
  key: 3,
  class: "state-message"
}, m$ = /* @__PURE__ */ Ee({
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
    return dt(d), (f, v) => (o(), i("div", l$, [
      s("div", i$, [
        v[2] || (v[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(Oe, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [...v[1] || (v[1] = [
            x(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (o(), i("div", r$, "Scanning workflows...")) : c.value ? (o(), i("div", c$, m(c.value), 1)) : u.value.length ? (o(), i("div", u$, [
        (o(!0), i(B, null, we(u.value, (p) => (o(), R(mc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: v[0] || (v[0] = (w) => n("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (o(), i("div", d$, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), f$ = /* @__PURE__ */ Me(m$, [["__scopeId", "data-v-1aac54cc"]]), v$ = { class: "civitai-tab" }, p$ = /* @__PURE__ */ Ee({
  __name: "CivitaiTab",
  setup(e) {
    return (t, n) => (o(), i("div", v$, [...n[0] || (n[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), g$ = /* @__PURE__ */ Me(p$, [["__scopeId", "data-v-44948051"]]), h$ = { class: "direct-url-tab" }, y$ = {
  key: 0,
  class: "error"
}, w$ = /* @__PURE__ */ Ee({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(""), r = _("");
    Ct(() => n.initialUrl, (f) => {
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
    return (f, v) => (o(), i("div", h$, [
      b(fc, {
        modelValue: l.value,
        "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(uc, {
            modelValue: r.value,
            "onUpdate:modelValue": v[0] || (v[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (o(), i("p", y$, " Could not infer a filename from this URL. ")) : y("", !0),
          v[2] || (v[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), _$ = /* @__PURE__ */ Me(w$, [["__scopeId", "data-v-a6d21f27"]]), k$ = { class: "download-modal" }, b$ = { class: "tab-bar" }, $$ = ["onClick"], C$ = { class: "tab-content" }, x$ = /* @__PURE__ */ Ee({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, { addToQueue: a } = jn(), l = [
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
    return (p, w) => e.show ? (o(), R(Pt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: v
    }, {
      body: h(() => [
        s("div", k$, [
          s("div", b$, [
            (o(), i(B, null, we(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (k) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, $$)), 64))
          ]),
          s("div", C$, [
            r.value === "workflow" ? (o(), R(f$, {
              key: 0,
              onSelectUrl: f
            })) : r.value === "huggingface" ? (o(), R(dc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (o(), R(g$, { key: 2 })) : r.value === "direct" ? (o(), R(_$, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: v
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
}), _c = /* @__PURE__ */ Me(x$, [["__scopeId", "data-v-de2e4fac"]]), S$ = /* @__PURE__ */ Ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const n = t, { getEnvironmentModels: a, getStatus: l } = ft(), r = _([]), c = _([]), u = _("production"), d = _(!1), f = _(null), v = _(""), p = _(!1), w = _(null), g = _(!1);
    function k() {
      p.value = !1, n("navigate", "model-index");
    }
    const $ = M(
      () => r.value.reduce((D, W) => D + (W.size || 0), 0)
    ), S = M(() => {
      if (!v.value.trim()) return r.value;
      const D = v.value.toLowerCase();
      return r.value.filter((W) => W.filename.toLowerCase().includes(D));
    }), C = M(() => {
      if (!v.value.trim()) return c.value;
      const D = v.value.toLowerCase();
      return c.value.filter((W) => W.filename.toLowerCase().includes(D));
    }), I = M(() => {
      const D = {};
      for (const ce of S.value) {
        const de = ce.type || "other";
        D[de] || (D[de] = []), D[de].push(ce);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([ce], [de]) => {
        const J = W.indexOf(ce), ue = W.indexOf(de);
        return J >= 0 && ue >= 0 ? J - ue : J >= 0 ? -1 : ue >= 0 ? 1 : ce.localeCompare(de);
      }).map(([ce, de]) => ({ type: ce, models: de }));
    });
    function E(D) {
      if (!D) return "Unknown";
      const W = D / (1024 * 1024);
      return W >= 1024 ? `${(W / 1024).toFixed(1)} GB` : `${W.toFixed(0)} MB`;
    }
    function P(D) {
      w.value = D.hash || D.filename;
    }
    function O(D) {
      n("navigate", "model-index");
    }
    function U(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function F() {
      d.value = !0, f.value = null;
      try {
        const D = await a();
        r.value = D, c.value = [];
        const W = await l();
        u.value = W.environment || "production";
      } catch (D) {
        f.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return dt(F), (D, W) => (o(), i(B, null, [
      b(Jt, null, {
        header: h(() => [
          b(Qt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: W[1] || (W[1] = (ce) => p.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (ce) => g.value = !0)
              }, {
                default: h(() => [...W[6] || (W[6] = [
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
          b(_n, {
            modelValue: v.value,
            "onUpdate:modelValue": W[2] || (W[2] = (ce) => v.value = ce),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (o(), R(Fs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (o(), R(Bs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            r.value.length ? (o(), R(Nl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(r.value.length) + " models • " + m(E($.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(B, null, we(I.value, (ce) => (o(), R(Ot, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(ce.models, (de) => (o(), R(es, {
                  key: de.hash || de.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...W[7] || (W[7] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(de.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(E(de.size)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Used by:",
                      value: (de.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Mt, {
                      label: "Path:",
                      value: de.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => P(de)
                    }, {
                      default: h(() => [...W[8] || (W[8] = [
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
            C.value.length ? (o(), R(Ot, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(C.value, (ce) => (o(), R(es, {
                  key: ce.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...W[9] || (W[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ce.filename), 1)
                  ]),
                  subtitle: h(() => [...W[10] || (W[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var de;
                    return [
                      b(Mt, {
                        label: "Required by:",
                        value: ((de = ce.workflow_names) == null ? void 0 : de.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (de) => U(ce.filename)
                    }, {
                      default: h(() => [...W[11] || (W[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (de) => O(ce.filename)
                    }, {
                      default: h(() => [...W[12] || (W[12] = [
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
            !S.value.length && !C.value.length ? (o(), R(Ts, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(ks, {
        show: p.value,
        title: "About Environment Models",
        onClose: W[3] || (W[3] = (ce) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            W[13] || (W[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            W[14] || (W[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...W[15] || (W[15] = [
              x(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), R(wc, {
        key: 0,
        identifier: w.value,
        onClose: W[4] || (W[4] = (ce) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(_c, {
        show: g.value,
        onClose: W[5] || (W[5] = (ce) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), I$ = /* @__PURE__ */ Me(S$, [["__scopeId", "data-v-af3ca736"]]), E$ = {
  key: 0,
  class: "indexing-progress"
}, T$ = { class: "progress-info" }, M$ = { class: "progress-label" }, P$ = { class: "progress-count" }, R$ = { class: "progress-bar" }, D$ = { class: "directory-modal-body" }, L$ = { class: "input-group" }, N$ = { class: "current-path" }, U$ = { class: "input-group" }, O$ = /* @__PURE__ */ Ee({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ft(), c = t, u = _([]), d = _(!1), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = _(!1), $ = _(null), S = _(""), C = _(!1), I = _(!1), E = _(null), P = M(
      () => u.value.reduce((ue, K) => ue + (K.size || 0), 0)
    ), O = M(() => {
      if (!p.value.trim()) return u.value;
      const ue = p.value.toLowerCase();
      return u.value.filter((K) => {
        const N = K, G = K.sha256 || N.sha256_hash || "";
        return K.filename.toLowerCase().includes(ue) || G.toLowerCase().includes(ue);
      });
    }), U = M(() => {
      const ue = {};
      for (const N of O.value) {
        const G = N.type || "other";
        ue[G] || (ue[G] = []), ue[G].push(N);
      }
      const K = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ue).sort(([N], [G]) => {
        const pe = K.indexOf(N), te = K.indexOf(G);
        return pe >= 0 && te >= 0 ? pe - te : pe >= 0 ? -1 : te >= 0 ? 1 : N.localeCompare(G);
      }).map(([N, G]) => ({ type: N, models: G }));
    });
    function F(ue) {
      if (!ue) return "Unknown";
      const K = 1024 * 1024 * 1024, N = 1024 * 1024;
      return ue >= K ? `${(ue / K).toFixed(1)} GB` : ue >= N ? `${(ue / N).toFixed(0)} MB` : `${(ue / 1024).toFixed(0)} KB`;
    }
    function D(ue) {
      g.value = ue.hash || ue.filename;
    }
    async function W() {
      f.value = !0, v.value = null;
      try {
        const ue = await a();
        await de(), ue.changes > 0 && console.log(`Scan complete: ${ue.changes} changes detected`);
      } catch (ue) {
        v.value = ue instanceof Error ? ue.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function ce() {
      if (S.value.trim()) {
        C.value = !0, v.value = null;
        try {
          const ue = await r(S.value.trim());
          $.value = ue.path, k.value = !1, S.value = "", await de(), console.log(`Directory changed: ${ue.models_indexed} models indexed`), c("refresh");
        } catch (ue) {
          v.value = ue instanceof Error ? ue.message : "Failed to change directory";
        } finally {
          C.value = !1;
        }
      }
    }
    async function de() {
      d.value = !0, v.value = null;
      try {
        u.value = await n();
      } catch (ue) {
        v.value = ue instanceof Error ? ue.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function J() {
      try {
        const ue = await l();
        $.value = ue.path;
      } catch {
      }
    }
    return dt(() => {
      de(), J();
    }), (ue, K) => (o(), i(B, null, [
      b(Jt, null, {
        header: h(() => [
          b(Qt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: K[2] || (K[2] = (N) => w.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: W
              }, {
                default: h(() => [
                  x(m(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: K[0] || (K[0] = (N) => k.value = !0)
              }, {
                default: h(() => [...K[10] || (K[10] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: K[1] || (K[1] = (N) => I.value = !0)
              }, {
                default: h(() => [...K[11] || (K[11] = [
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
          E.value ? (o(), i("div", E$, [
            s("div", T$, [
              s("span", M$, m(E.value.message), 1),
              s("span", P$, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            s("div", R$, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(_n, {
            modelValue: p.value,
            "onUpdate:modelValue": K[3] || (K[3] = (N) => p.value = N),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || E.value ? (o(), R(Fs, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (o(), R(Bs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            u.value.length ? (o(), R(Nl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(u.value.length) + " models • " + m(F(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(B, null, we(U.value, (N) => (o(), R(Ot, {
              key: N.type,
              title: N.type.toUpperCase(),
              count: N.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(N.models, (G) => (o(), R(es, {
                  key: G.sha256 || G.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...K[12] || (K[12] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(G.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(F(G.size)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Hash:",
                      value: G.hash ? G.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (pe) => D(G)
                    }, {
                      default: h(() => [...K[13] || (K[13] = [
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
            O.value.length ? y("", !0) : (o(), R(Ts, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(ks, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: K[4] || (K[4] = (N) => w.value = !1)
      }, {
        content: h(() => [...K[14] || (K[14] = [
          s("p", null, [
            x(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            x(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (o(), R(wc, {
        key: 0,
        identifier: g.value,
        onClose: K[5] || (K[5] = (N) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k.value ? (o(), R(Pt, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: K[8] || (K[8] = (N) => k.value = !1)
      }, {
        body: h(() => [
          s("div", D$, [
            s("div", L$, [
              K[15] || (K[15] = s("label", null, "Current Directory", -1)),
              s("code", N$, m($.value || "Not set"), 1)
            ]),
            s("div", U$, [
              K[16] || (K[16] = s("label", null, "New Directory Path", -1)),
              b(Dt, {
                modelValue: S.value,
                "onUpdate:modelValue": K[6] || (K[6] = (N) => S.value = N),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            K[17] || (K[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(Oe, {
            variant: "secondary",
            onClick: K[7] || (K[7] = (N) => k.value = !1)
          }, {
            default: h(() => [...K[18] || (K[18] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: "primary",
            disabled: !S.value.trim() || C.value,
            loading: C.value,
            onClick: ce
          }, {
            default: h(() => [
              x(m(C.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(_c, {
        show: I.value,
        onClose: K[9] || (K[9] = (N) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), A$ = /* @__PURE__ */ Me(O$, [["__scopeId", "data-v-9fca048b"]]), z$ = { class: "node-details" }, F$ = { class: "status-row" }, B$ = {
  key: 0,
  class: "detail-row"
}, V$ = { class: "value" }, W$ = { class: "detail-row" }, G$ = { class: "value" }, j$ = {
  key: 1,
  class: "detail-row"
}, H$ = { class: "value mono" }, q$ = {
  key: 2,
  class: "detail-row"
}, K$ = ["href"], J$ = {
  key: 3,
  class: "detail-row"
}, Q$ = { class: "value mono small" }, Y$ = { class: "detail-row" }, X$ = {
  key: 0,
  class: "value"
}, Z$ = {
  key: 1,
  class: "workflow-list"
}, eC = /* @__PURE__ */ Ee({
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
    return (u, d) => (o(), R(Pt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (f) => a("close"))
    }, {
      body: h(() => [
        s("div", z$, [
          s("div", F$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (o(), i("div", B$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", V$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", W$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", G$, m(c.value), 1)
          ]),
          e.node.registry_id ? (o(), i("div", j$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", H$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (o(), i("div", q$, [
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
            ], 8, K$)
          ])) : y("", !0),
          e.node.download_url ? (o(), i("div", J$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", Q$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", Y$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (o(), i("span", X$, " Not used in any workflows ")) : (o(), i("div", Z$, [
              (o(!0), i(B, null, we(e.node.used_in_workflows, (f) => (o(), i("span", {
                key: f,
                class: "workflow-tag"
              }, m(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (f) => a("close"))
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
}), tC = /* @__PURE__ */ Me(eC, [["__scopeId", "data-v-b342f626"]]), sC = { class: "dialog-message" }, nC = {
  key: 0,
  class: "dialog-details"
}, oC = {
  key: 1,
  class: "dialog-warning"
}, aC = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), R(Pt, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", sC, m(e.message), 1),
        e.details && e.details.length ? (o(), i("div", nC, [
          (o(!0), i(B, null, we(e.details, (a, l) => (o(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (o(), i("p", oC, [
          n[4] || (n[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            x(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), R(Oe, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            x(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(Oe, {
          variant: e.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (a) => t.$emit("confirm"))
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
}), Ol = /* @__PURE__ */ Me(aC, [["__scopeId", "data-v-3670b9f5"]]), lC = { class: "mismatch-warning" }, iC = { class: "version-mismatch" }, rC = { class: "version-actual" }, cC = { class: "version-expected" }, uC = { style: { color: "var(--cg-color-warning)" } }, dC = { style: { color: "var(--cg-color-warning)" } }, mC = {
  key: 0,
  class: "community-status-badge"
}, fC = { key: 0 }, vC = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, pC = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, gC = { class: "criticality-control" }, hC = ["value", "disabled", "onChange"], yC = /* @__PURE__ */ Ee({
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
    }), p = _(!1), w = _(null), g = _(""), k = _(!1), $ = _(null), S = _(/* @__PURE__ */ new Set()), C = _(/* @__PURE__ */ new Set()), I = _(null), E = M(() => {
      if (!g.value.trim()) return v.value.nodes;
      const ge = g.value.toLowerCase();
      return v.value.nodes.filter(
        ($e) => {
          var T, z;
          return $e.name.toLowerCase().includes(ge) || ((T = $e.description) == null ? void 0 : T.toLowerCase().includes(ge)) || ((z = $e.repository) == null ? void 0 : z.toLowerCase().includes(ge));
        }
      );
    }), P = M(
      () => E.value.filter((ge) => ge.installed && ge.tracked)
    ), O = M(
      () => E.value.filter((ge) => !ge.installed && ge.tracked && !ge.issue_type)
    ), U = M(
      () => E.value.filter((ge) => ge.installed && !ge.tracked)
    ), F = M(
      () => E.value.filter((ge) => ge.issue_type === "version_gated")
    ), D = M(
      () => E.value.filter((ge) => ge.issue_type === "uninstallable")
    );
    function W(ge) {
      return ge.registry_id || ge.name;
    }
    function ce(ge) {
      return S.value.has(W(ge));
    }
    async function de(ge, $e) {
      const T = ge.registry_id;
      if (!T) {
        a("toast", `Node "${ge.name}" has no package id for install`, "warning");
        return;
      }
      if ($e === "git" && !ge.repository) {
        a("toast", `Node "${ge.name}" has no repository URL for git install`, "warning");
        return;
      }
      const z = {
        id: T,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      $e === "git" && ge.repository && (z.repository = ge.repository, z.install_source = "git"), await d(z), S.value.add(W(ge)), a("toast", `✓ Queued install for "${ge.name}"`, "success");
    }
    function J(ge) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ge] || ge;
    }
    const ue = M(() => n.versionMismatches.length > 0);
    function K(ge) {
      return !ge.used_in_workflows || ge.used_in_workflows.length === 0 ? "Not used in any workflows" : ge.used_in_workflows.length === 1 ? ge.used_in_workflows[0] : `${ge.used_in_workflows.length} workflows`;
    }
    function N(ge) {
      return ge.criticality === "optional" ? "optional" : "required";
    }
    function G(ge) {
      return C.value.has(ge.name);
    }
    async function pe(ge, $e) {
      const T = $e.target, z = N(ge), ae = T.value;
      if (ae !== z) {
        C.value = new Set(C.value).add(ge.name), ge.criticality = ae;
        try {
          const Te = await f(ge.name, ae);
          if (Te.status !== "success") {
            ge.criticality = z, a("toast", Te.message || `Failed to update "${ge.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${ge.name}" as ${ae}`, "success");
        } catch (Te) {
          ge.criticality = z, T.value = z, a("toast", `Error updating criticality: ${Te instanceof Error ? Te.message : "Unknown error"}`, "error");
        } finally {
          const Te = new Set(C.value);
          Te.delete(ge.name), C.value = Te;
        }
      }
    }
    function te(ge) {
      return ge.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function oe(ge) {
      return ge.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function re(ge) {
      return ge.registry_id ? `Community-mapped package: ${ge.registry_id}` : "Community-mapped package";
    }
    function H(ge) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function se(ge) {
      $.value = ge;
    }
    function ie() {
      a("open-node-manager");
    }
    function Ie(ge) {
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
            const $e = await r(ge);
            $e.status === "success" ? (a("toast", `✓ Node "${ge}" tracked as development`, "success"), await Re()) : a("toast", `Failed to track node: ${$e.message || "Unknown error"}`, "error");
          } catch ($e) {
            a("toast", `Error tracking node: ${$e instanceof Error ? $e.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function he(ge) {
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
            const $e = await u(ge);
            $e.status === "success" ? (a("toast", `✓ Node "${ge}" removed`, "success"), await Re()) : a("toast", `Failed to remove node: ${$e.message || "Unknown error"}`, "error");
          } catch ($e) {
            a("toast", `Error removing node: ${$e instanceof Error ? $e.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Fe(ge) {
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
            const $e = await c(ge);
            $e.status === "success" ? (a("toast", `✓ Node "${ge}" installed`, "success"), await Re()) : a("toast", `Failed to install node: ${$e.message || "Unknown error"}`, "error");
          } catch ($e) {
            a("toast", `Error installing node: ${$e instanceof Error ? $e.message : "Unknown error"}`, "error");
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
            p.value = !0, await de(ge, "registry");
          } catch ($e) {
            a("toast", `Error queueing install: ${$e instanceof Error ? $e.message : "Unknown error"}`, "error");
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
            p.value = !0, await de(ge, "git");
          } catch ($e) {
            a("toast", `Error queueing git install: ${$e instanceof Error ? $e.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Re() {
      p.value = !0, w.value = null;
      try {
        v.value = await l();
      } catch (ge) {
        w.value = ge instanceof Error ? ge.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return dt(Re), (ge, $e) => (o(), i(B, null, [
      b(Jt, null, {
        header: h(() => [
          b(Qt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: $e[0] || ($e[0] = (T) => k.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: ie
              }, {
                default: h(() => [...$e[7] || ($e[7] = [
                  x(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(_n, {
            modelValue: g.value,
            "onUpdate:modelValue": $e[1] || ($e[1] = (T) => g.value = T),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (o(), R(Fs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (o(), R(Bs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Re
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            ue.value ? (o(), R(Ot, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", lC, [
                  $e[8] || ($e[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (o(!0), i(B, null, we(e.versionMismatches, (T) => (o(), R(es, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...$e[9] || ($e[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", iC, [
                      s("span", rC, m(T.actual), 1),
                      $e[10] || ($e[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", cC, m(T.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "warning",
                      size: "sm",
                      onClick: $e[2] || ($e[2] = (z) => a("repair-environment"))
                    }, {
                      default: h(() => [...$e[11] || ($e[11] = [
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
            F.value.length ? (o(), R(Ot, {
              key: 1,
              title: "BLOCKED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(F.value, (T) => (o(), R(es, {
                  key: `blocked-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...$e[12] || ($e[12] = [
                    x("⛔", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", uC, m(te(T)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Guidance:",
                      value: T.issue_guidance || oe(T)
                    }, null, 8, ["value"]),
                    b(Mt, {
                      label: "Used by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => se(T)
                    }, {
                      default: h(() => [...$e[13] || ($e[13] = [
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
            D.value.length ? (o(), R(Ot, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(D.value, (T) => (o(), R(es, {
                  key: `community-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...$e[14] || ($e[14] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", dC, m(re(T)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Guidance:",
                      value: T.issue_guidance || H(T)
                    }, null, 8, ["value"]),
                    b(Mt, {
                      label: "Used by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => se(T)
                    }, {
                      default: h(() => [...$e[15] || ($e[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ce(T) ? (o(), i("span", mC, "Queued")) : (o(), i(B, { key: 1 }, [
                      T.registry_id ? (o(), R(Pe, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (z) => Ne(T)
                      }, {
                        default: h(() => [...$e[16] || ($e[16] = [
                          x(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      T.repository ? (o(), R(Pe, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (z) => be(T)
                      }, {
                        default: h(() => [...$e[17] || ($e[17] = [
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
            U.value.length ? (o(), R(Ot, {
              key: 3,
              title: "UNTRACKED",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(U.value, (T) => (o(), R(es, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...$e[18] || ($e[18] = [
                    x("?", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...$e[19] || ($e[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(Mt, {
                      label: "Used by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => se(T)
                    }, {
                      default: h(() => [...$e[20] || ($e[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => Ie(T.name)
                    }, {
                      default: h(() => [...$e[21] || ($e[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (z) => he(T.name)
                    }, {
                      default: h(() => [...$e[22] || ($e[22] = [
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
            P.value.length ? (o(), R(Ot, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(P.value, (T) => (o(), R(es, {
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
                    T.version ? (o(), i("span", fC, m(T.source === "development" ? "" : "v") + m(T.version), 1)) : (o(), i("span", vC, "version unknown")),
                    s("span", pC, " • " + m(J(T.source)), 1)
                  ]),
                  details: h(() => [
                    b(Mt, {
                      label: "Used by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => se(T)
                    }, {
                      default: h(() => [...$e[23] || ($e[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", gC, [
                      $e[25] || ($e[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: N(T),
                        disabled: G(T),
                        onChange: (z) => pe(T, z)
                      }, [...$e[24] || ($e[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, hC)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (o(), R(Ot, {
              key: 5,
              title: "MISSING",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(O.value, (T) => (o(), R(es, {
                  key: T.name,
                  status: "missing"
                }, {
                  icon: h(() => [...$e[26] || ($e[26] = [
                    x("!", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...$e[27] || ($e[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(Mt, {
                      label: "Required by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => se(T)
                    }, {
                      default: h(() => [...$e[28] || ($e[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => Fe(T.name)
                    }, {
                      default: h(() => [...$e[29] || ($e[29] = [
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
            !P.value.length && !O.value.length && !F.value.length && !D.value.length && !U.value.length ? (o(), R(Ts, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(ks, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: $e[4] || ($e[4] = (T) => k.value = !1)
      }, {
        content: h(() => [...$e[30] || ($e[30] = [
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
          b(Pe, {
            variant: "primary",
            onClick: $e[3] || ($e[3] = (T) => k.value = !1)
          }, {
            default: h(() => [...$e[31] || ($e[31] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $.value ? (o(), R(tC, {
        key: 0,
        node: $.value,
        onClose: $e[5] || ($e[5] = (T) => $.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (o(), R(Ol, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: $e[6] || ($e[6] = (T) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), wC = /* @__PURE__ */ Me(yC, [["__scopeId", "data-v-edfa1c86"]]), _C = { class: "setting-info" }, kC = { class: "setting-label" }, bC = {
  key: 0,
  class: "required-marker"
}, $C = {
  key: 0,
  class: "setting-description"
}, CC = { class: "setting-control" }, xC = /* @__PURE__ */ Ee({
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
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", _C, [
        s("div", kC, [
          x(m(e.label) + " ", 1),
          e.required ? (o(), i("span", bC, "*")) : y("", !0)
        ]),
        e.description ? (o(), i("div", $C, m(e.description), 1)) : y("", !0)
      ]),
      s("div", CC, [
        rt(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Cn = /* @__PURE__ */ Me(xC, [["__scopeId", "data-v-3e106b1c"]]), SC = ["type", "value", "placeholder", "disabled"], IC = /* @__PURE__ */ Ee({
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
      class: Be(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = xs((f) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = xs((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (f) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (f) => u.$emit("blur"))
    }, null, 42, SC));
  }
}), En = /* @__PURE__ */ Me(IC, [["__scopeId", "data-v-0380d08f"]]), EC = { class: "toggle" }, TC = ["checked", "disabled"], MC = /* @__PURE__ */ Ee({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", EC, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, TC),
      n[1] || (n[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Li = /* @__PURE__ */ Me(MC, [["__scopeId", "data-v-71c0f550"]]), Qa = "ComfyGit.Deploy.GitHubPAT";
function kc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function PC(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function RC() {
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
    isRemoteSsh: kc,
    isRemoteHttps: PC
  };
}
const DC = { class: "workspace-settings-content" }, LC = { class: "settings-section" }, NC = { class: "path-setting" }, UC = { class: "path-value" }, OC = { class: "path-setting" }, AC = { class: "path-value" }, zC = { class: "settings-section" }, FC = { class: "token-setting" }, BC = {
  key: 0,
  class: "token-warning"
}, VC = { class: "token-actions" }, WC = { class: "settings-section" }, GC = { class: "settings-section" }, jC = /* @__PURE__ */ Ee({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ft(), { getToken: f, setToken: v, clearToken: p, hasToken: w } = RC(), g = _(!1), k = _(null), $ = _(null), S = _(null), C = _(null), I = _(""), E = _(""), P = _(""), O = _(""), U = _(!1), F = _(!1), D = _(!1), W = _(""), ce = _(!1), de = _(!1), J = _(null), ue = _(!1), K = _(!0);
    function N(Fe) {
      return Fe.join(" ");
    }
    function G(Fe) {
      return Fe.trim() ? Fe.trim().split(/\s+/) : [];
    }
    const pe = M(() => {
      if (!C.value) return !1;
      const Fe = U.value, Ne = F.value, be = D.value, Re = O.value !== N(C.value.comfyui_extra_args || []);
      return Fe || Ne || be || Re;
    }), te = M(() => w());
    async function oe() {
      var Fe;
      g.value = !0, k.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), C.value = { ...S.value }, I.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", O.value = N(S.value.comfyui_extra_args || []), P.value = f() || "", W.value = P.value, U.value = !1, F.value = !1, D.value = !1, J.value = null;
        const Ne = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        ue.value = Ne !== "false", K.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Re = (Fe = (await u()).remotes) == null ? void 0 : Fe.find((ge) => ge.name === "origin");
          ce.value = !!(Re && kc(Re.url));
        } catch {
          ce.value = !1;
        }
      } catch (Ne) {
        k.value = Ne instanceof Error ? Ne.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function re() {
      var Fe;
      $.value = null;
      try {
        const Ne = {};
        U.value && (Ne.civitai_api_key = I.value || null), F.value && (Ne.huggingface_token = E.value || null), O.value !== N(((Fe = C.value) == null ? void 0 : Fe.comfyui_extra_args) || []) && (Ne.comfyui_extra_args = G(O.value)), await c(Ne, a.workspacePath || void 0), D.value && (P.value ? v(P.value) : p()), await oe(), $.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          $.value = null;
        }, 3e3);
      } catch (Ne) {
        const be = Ne instanceof Error ? Ne.message : "Failed to save settings";
        $.value = { type: "error", message: be }, l("error", be);
      }
    }
    function H() {
      C.value && (I.value = C.value.civitai_api_key || "", E.value = C.value.huggingface_token || "", O.value = N(C.value.comfyui_extra_args || []), P.value = W.value, U.value = !1, F.value = !1, D.value = !1, J.value = null, $.value = null);
    }
    async function se() {
      if (P.value) {
        de.value = !0, J.value = null;
        try {
          const Fe = await d(P.value);
          J.value = {
            type: Fe.status === "success" ? "success" : "error",
            message: Fe.message
          };
        } catch (Fe) {
          J.value = {
            type: "error",
            message: Fe instanceof Error ? Fe.message : "Connection test failed"
          };
        } finally {
          de.value = !1;
        }
      }
    }
    function ie() {
      P.value = "", D.value = !0, J.value = null;
    }
    function Ie(Fe) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Fe)), console.log("[ComfyGit] Auto-refresh setting saved:", Fe);
    }
    function he(Fe) {
      Fe ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Fe ? "enabled" : "disabled");
    }
    return t({
      saveSettings: re,
      resetSettings: H,
      hasChanges: pe,
      loadSettings: oe
    }), dt(oe), (Fe, Ne) => (o(), i("div", DC, [
      g.value ? (o(), R(Fs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (o(), R(Bs, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: oe
      }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
        b(Ot, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var be, Re;
            return [
              s("div", LC, [
                s("div", NC, [
                  Ne[9] || (Ne[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Ne[10] || (Ne[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", UC, m(((be = S.value) == null ? void 0 : be.workspace_path) || "Loading..."), 1)
                ]),
                s("div", OC, [
                  Ne[11] || (Ne[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Ne[12] || (Ne[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", AC, m(((Re = S.value) == null ? void 0 : Re.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Ot, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", zC, [
              b(Cn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(En, {
                    modelValue: I.value,
                    "onUpdate:modelValue": Ne[0] || (Ne[0] = (be) => I.value = be),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Ne[1] || (Ne[1] = (be) => U.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Cn, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  b(En, {
                    modelValue: E.value,
                    "onUpdate:modelValue": Ne[2] || (Ne[2] = (be) => E.value = be),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Ne[3] || (Ne[3] = (be) => F.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Cn, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", FC, [
                    b(En, {
                      modelValue: P.value,
                      "onUpdate:modelValue": Ne[4] || (Ne[4] = (be) => P.value = be),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Ne[5] || (Ne[5] = (be) => D.value = !0)
                    }, null, 8, ["modelValue"]),
                    ce.value ? (o(), i("div", BC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Ne[15] || (Ne[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", VC, [
                      b(Pe, {
                        variant: "ghost",
                        size: "xs",
                        loading: de.value,
                        disabled: !P.value || de.value,
                        onClick: se
                      }, {
                        default: h(() => [...Ne[13] || (Ne[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      te.value ? (o(), R(Pe, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ie
                      }, {
                        default: h(() => [...Ne[14] || (Ne[14] = [
                          x(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    J.value ? (o(), i("div", {
                      key: 1,
                      class: Be(["token-test-result", J.value.type])
                    }, m(J.value.message), 3)) : y("", !0)
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
            s("div", WC, [
              b(Cn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(En, {
                    modelValue: O.value,
                    "onUpdate:modelValue": Ne[6] || (Ne[6] = (be) => O.value = be),
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
        b(Ot, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", GC, [
              b(Cn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Li, {
                    modelValue: ue.value,
                    "onUpdate:modelValue": [
                      Ne[7] || (Ne[7] = (be) => ue.value = be),
                      Ie
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Cn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  b(Li, {
                    modelValue: K.value,
                    "onUpdate:modelValue": [
                      Ne[8] || (Ne[8] = (be) => K.value = be),
                      he
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $.value ? (o(), R(Nl, {
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
}), bc = /* @__PURE__ */ Me(jC, [["__scopeId", "data-v-f1bdc574"]]), HC = /* @__PURE__ */ Ee({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = _(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (o(), R(Jt, null, {
      header: h(() => [
        b(Qt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              b(Pe, {
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
              (c = t.value) != null && c.hasChanges ? (o(), R(Pe, {
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
        b(bc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), qC = { class: "env-title" }, KC = {
  key: 0,
  class: "current-badge"
}, JC = {
  key: 0,
  class: "branch-info"
}, QC = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), R(es, {
      status: e.isCurrent ? "synced" : void 0
    }, ds({
      icon: h(() => [
        x(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", qC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), i("span", KC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (o(), i("span", JC, [
          n[0] || (n[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          x(" " + m(e.currentBranch), 1)
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
          e.lastUsed && e.showLastUsed ? (o(), R(Mt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), YC = /* @__PURE__ */ Me(QC, [["__scopeId", "data-v-9231917a"]]), XC = { class: "env-details" }, ZC = { class: "status-row" }, ex = {
  key: 0,
  class: "detail-row"
}, tx = { class: "value mono" }, sx = {
  key: 1,
  class: "detail-row"
}, nx = { class: "value mono small" }, ox = { class: "collapsible-section" }, ax = { class: "value" }, lx = {
  key: 0,
  class: "collapsible-body"
}, ix = { class: "item-list" }, rx = { class: "item-name" }, cx = { class: "item-name" }, ux = { class: "item-name" }, dx = { class: "item-name" }, mx = {
  key: 0,
  class: "empty-list"
}, fx = { class: "collapsible-section" }, vx = { class: "value" }, px = {
  key: 0,
  class: "collapsible-body"
}, gx = { class: "item-list" }, hx = { class: "item-name" }, yx = {
  key: 0,
  class: "item-meta"
}, wx = {
  key: 0,
  class: "empty-list"
}, _x = { class: "collapsible-section" }, kx = { class: "value" }, bx = {
  key: 0,
  class: "missing-count"
}, $x = {
  key: 0,
  class: "collapsible-body"
}, Cx = { class: "item-list" }, xx = { class: "model-row" }, Sx = { class: "item-name" }, Ix = { class: "model-meta" }, Ex = { class: "item-meta" }, Tx = {
  key: 0,
  class: "item-meta"
}, Mx = {
  key: 0,
  class: "empty-list"
}, Px = {
  key: 2,
  class: "section-divider"
}, Rx = {
  key: 3,
  class: "detail-row"
}, Dx = { class: "value" }, Lx = { class: "footer-actions" }, Nx = /* @__PURE__ */ Ee({
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
    return (d, f) => (o(), R(Pt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[6] || (f[6] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, p, w, g, k, $, S, C, I, E, P, O, U, F;
        return [
          s("div", XC, [
            s("div", ZC, [
              f[7] || (f[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (o(), i("div", ex, [
              f[8] || (f[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", tx, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (o(), i("div", sx, [
              f[9] || (f[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", nx, m(e.environment.path), 1)
            ])) : y("", !0),
            f[18] || (f[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", ox, [
              s("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (D) => r("workflows"))
              }, [
                f[10] || (f[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", ax, m(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (o(), i("div", lx, [
                s("div", ix, [
                  (o(!0), i(B, null, we(e.detail.workflows.synced, (D) => (o(), i("div", {
                    key: "synced-" + D,
                    class: "list-item"
                  }, [
                    s("span", rx, m(D), 1),
                    f[11] || (f[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, we(e.detail.workflows.new, (D) => (o(), i("div", {
                    key: "new-" + D,
                    class: "list-item"
                  }, [
                    s("span", cx, m(D), 1),
                    f[12] || (f[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, we(e.detail.workflows.modified, (D) => (o(), i("div", {
                    key: "mod-" + D,
                    class: "list-item"
                  }, [
                    s("span", ux, m(D), 1),
                    f[13] || (f[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, we(e.detail.workflows.deleted, (D) => (o(), i("div", {
                    key: "del-" + D,
                    class: "list-item"
                  }, [
                    s("span", dx, m(D), 1),
                    f[14] || (f[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (o(), i("div", mx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", fx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (D) => r("nodes"))
              }, [
                f[15] || (f[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", vx, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              ($ = e.detail) != null && $.nodes && l.value.has("nodes") ? (o(), i("div", px, [
                s("div", gx, [
                  (o(!0), i(B, null, we(e.detail.nodes, (D) => (o(), i("div", {
                    key: D.name,
                    class: "list-item"
                  }, [
                    s("span", hx, m(D.name), 1),
                    D.version ? (o(), i("span", yx, m(D.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (o(), i("div", wx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", _x, [
              s("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (D) => r("models"))
              }, [
                f[16] || (f[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", kx, [
                  x(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (C = e.detail) == null ? void 0 : C.models) != null && I.missing.length ? (o(), i("span", bx, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (o(), i("div", $x, [
                s("div", Cx, [
                  (o(!0), i(B, null, we(e.detail.models.missing, (D) => (o(), i("div", {
                    key: D.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", xx, [
                      s("span", Sx, m(D.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", D.criticality])
                      }, m(D.criticality), 3)
                    ]),
                    s("div", Ix, [
                      s("span", Ex, m(D.category), 1),
                      D.workflow_names.length ? (o(), i("span", Tx, " used by: " + m(D.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (o(), i("div", Mx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (o(), i("div", Px)) : y("", !0),
            (U = e.detail) != null && U.created_at || e.environment.created_at ? (o(), i("div", Rx, [
              f[17] || (f[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Dx, m(u(((F = e.detail) == null ? void 0 : F.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", Lx, [
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("export", e.environment.name))
          }, {
            default: h(() => [...f[19] || (f[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (o(), R(Oe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("delete", e.environment.name))
          }, {
            default: h(() => [...f[20] || (f[20] = [
              x(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[22] || (f[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: f[5] || (f[5] = (v) => a("close"))
          }, {
            default: h(() => [...f[21] || (f[21] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ux = /* @__PURE__ */ Me(Nx, [["__scopeId", "data-v-750671f5"]]), $c = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Cc = "3.12", Al = [
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
], xc = "auto", Ox = { class: "progress-bar" }, Ax = /* @__PURE__ */ Ee({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, n = M(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (o(), i("div", Ox, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: Wt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Sc = /* @__PURE__ */ Me(Ax, [["__scopeId", "data-v-1beb0512"]]), zx = { class: "task-progress" }, Fx = { class: "progress-info" }, Bx = { class: "progress-percentage" }, Vx = { class: "progress-message" }, Wx = {
  key: 0,
  class: "progress-steps"
}, Gx = { class: "step-icon" }, jx = { class: "step-label" }, Hx = /* @__PURE__ */ Ee({
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
    return (l, r) => (o(), i("div", zx, [
      b(Sc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", Fx, [
        s("span", Bx, m(e.progress) + "%", 1),
        s("span", Vx, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (o(), i("div", Wx, [
        (o(!0), i(B, null, we(e.steps, (c) => (o(), i("div", {
          key: c.id,
          class: Be(["step", n(c.id)])
        }, [
          s("span", Gx, m(a(c.id)), 1),
          s("span", jx, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ia = /* @__PURE__ */ Me(Hx, [["__scopeId", "data-v-9d1de66c"]]), qx = {
  key: 0,
  class: "create-env-form"
}, Kx = { class: "form-field" }, Jx = { class: "input-wrapper" }, Qx = {
  key: 0,
  class: "validating-indicator"
}, Yx = {
  key: 1,
  class: "valid-indicator"
}, Xx = {
  key: 0,
  class: "field-error"
}, Zx = { class: "form-field" }, e3 = ["value"], t3 = { class: "form-field" }, s3 = ["disabled"], n3 = ["value"], o3 = { class: "form-field" }, a3 = ["value"], l3 = { class: "form-field form-field--checkbox" }, i3 = { class: "form-checkbox" }, r3 = {
  key: 1,
  class: "create-env-progress"
}, c3 = { class: "creating-intro" }, u3 = {
  key: 0,
  class: "progress-warning"
}, d3 = {
  key: 1,
  class: "create-error"
}, m3 = { class: "error-message" }, f3 = {
  key: 1,
  class: "footer-status"
}, v3 = 10, p3 = /* @__PURE__ */ Ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ft(), u = _(""), d = _(Cc), f = _("latest"), v = _(xc), p = _(!1), w = _(null), g = _(!1), k = _(!1);
    let $ = null, S = 0;
    const C = M(() => !!u.value.trim() && k.value && !w.value && !g.value && !P.value), I = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = _(!1), P = _(!1), O = _({
      progress: 0,
      message: ""
    });
    let U = null, F = 0;
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
    ], W = _(null);
    Ct(u, (te) => {
      k.value = !1, $ && (clearTimeout($), $ = null);
      const oe = te.trim();
      if (!oe) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, $ = setTimeout(() => {
        ce(oe);
      }, 400);
    });
    async function ce(te, oe = !1) {
      const re = te.trim();
      if (!re)
        return k.value = !1, g.value = !1, w.value = oe ? "Environment name is required" : null, !1;
      const H = ++S;
      g.value = !0;
      try {
        const se = await c(re);
        return H !== S ? !1 : (w.value = se.valid ? null : se.error || "Invalid name", k.value = !!se.valid, !!se.valid);
      } catch {
        return H !== S || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        H === S && (g.value = !1);
      }
    }
    async function de() {
      $ && (clearTimeout($), $ = null), await ce(u.value, !0);
    }
    function J() {
      P.value || n("close");
    }
    async function ue() {
      const te = u.value.trim();
      if (!te) {
        w.value = "Environment name is required";
        return;
      }
      if ($ && (clearTimeout($), $ = null), !!await ce(te, !0)) {
        P.value = !0, O.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const re = {
            name: te,
            python_version: d.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, H = await l(re);
          H.status === "started" ? K() : H.status === "error" && (O.value = {
            progress: 0,
            message: H.message || "Failed to start creation",
            error: H.message
          });
        } catch (re) {
          O.value = {
            progress: 0,
            message: re instanceof Error ? re.message : "Unknown error",
            error: re instanceof Error ? re.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      U || (F = 0, U = window.setInterval(async () => {
        try {
          const te = await r();
          F = 0, O.value = {
            progress: te.progress ?? 0,
            message: te.message,
            phase: te.phase,
            error: te.error
          }, te.state === "complete" ? (N(), n("created", te.environment_name || u.value.trim(), p.value)) : te.state === "error" ? (N(), O.value.error = te.error || te.message) : te.state === "idle" && P.value && (N(), O.value.error = "Creation was interrupted. Please try again.");
        } catch {
          F++, F >= v3 && (N(), O.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function N() {
      U && (clearInterval(U), U = null);
    }
    function G() {
      P.value = !1, O.value = { progress: 0, message: "" }, n("close");
    }
    async function pe() {
      E.value = !0;
      try {
        I.value = await a();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        E.value = !1;
      }
    }
    return dt(async () => {
      var te;
      await qt(), (te = W.value) == null || te.focus(), pe();
    }), Vn(() => {
      N(), $ && (clearTimeout($), $ = null);
    }), (te, oe) => (o(), R(Pt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: J
    }, {
      body: h(() => [
        P.value ? (o(), i("div", r3, [
          s("p", c3, [
            oe[12] || (oe[12] = x(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            oe[13] || (oe[13] = x("... ", -1))
          ]),
          b(ia, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: D
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (o(), i("p", u3, " This may take several minutes. Please wait... ")),
          O.value.error ? (o(), i("div", d3, [
            s("p", m3, m(O.value.error), 1)
          ])) : y("", !0)
        ])) : (o(), i("div", qx, [
          s("div", Kx, [
            oe[6] || (oe[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", Jx, [
              Ft(s("input", {
                ref_key: "nameInput",
                ref: W,
                "onUpdate:modelValue": oe[0] || (oe[0] = (re) => u.value = re),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: xs(ue, ["enter"]),
                onBlur: de
              }, null, 34), [
                [go, u.value]
              ]),
              g.value ? (o(), i("span", Qx, "...")) : k.value ? (o(), i("span", Yx, "✓")) : y("", !0)
            ]),
            w.value ? (o(), i("div", Xx, m(w.value), 1)) : y("", !0),
            oe[7] || (oe[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", Zx, [
            oe[8] || (oe[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Ft(s("select", {
              "onUpdate:modelValue": oe[1] || (oe[1] = (re) => d.value = re),
              class: "form-select"
            }, [
              (o(!0), i(B, null, we(it($c), (re) => (o(), i("option", {
                key: re,
                value: re
              }, m(re), 9, e3))), 128))
            ], 512), [
              [Nn, d.value]
            ])
          ]),
          s("div", t3, [
            oe[9] || (oe[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ft(s("select", {
              "onUpdate:modelValue": oe[2] || (oe[2] = (re) => f.value = re),
              class: "form-select",
              disabled: E.value
            }, [
              (o(!0), i(B, null, we(I.value, (re) => (o(), i("option", {
                key: re.tag_name,
                value: re.tag_name
              }, m(re.name), 9, n3))), 128))
            ], 8, s3), [
              [Nn, f.value]
            ])
          ]),
          s("div", o3, [
            oe[10] || (oe[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ft(s("select", {
              "onUpdate:modelValue": oe[3] || (oe[3] = (re) => v.value = re),
              class: "form-select"
            }, [
              (o(!0), i(B, null, we(it(Al), (re) => (o(), i("option", {
                key: re,
                value: re
              }, m(re) + m(re === "auto" ? " (detect GPU)" : ""), 9, a3))), 128))
            ], 512), [
              [Nn, v.value]
            ])
          ]),
          s("div", l3, [
            s("label", i3, [
              Ft(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": oe[4] || (oe[4] = (re) => p.value = re)
              }, null, 512), [
                [la, p.value]
              ]),
              oe[11] || (oe[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (o(), i(B, { key: 1 }, [
          O.value.error ? (o(), R(Oe, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: h(() => [...oe[16] || (oe[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (o(), i("span", f3, " Creating environment... "))
        ], 64)) : (o(), i(B, { key: 0 }, [
          b(Oe, {
            variant: "primary",
            disabled: !C.value,
            onClick: ue
          }, {
            default: h(() => [...oe[14] || (oe[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Oe, {
            variant: "secondary",
            onClick: oe[5] || (oe[5] = (re) => n("close"))
          }, {
            default: h(() => [...oe[15] || (oe[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), g3 = /* @__PURE__ */ Me(p3, [["__scopeId", "data-v-3faa3d9b"]]), h3 = /* @__PURE__ */ Ee({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getEnvironments: l, getEnvironmentDetails: r } = ft(), c = _([]), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _(!1), w = _(null), g = _(null), k = M(() => [...c.value].sort((U, F) => U.is_current !== F.is_current ? U.is_current ? -1 : 1 : U.name.localeCompare(F.name))), $ = M(() => {
      if (!f.value.trim()) return k.value;
      const U = f.value.toLowerCase();
      return k.value.filter(
        (F) => {
          var D;
          return F.name.toLowerCase().includes(U) || ((D = F.current_branch) == null ? void 0 : D.toLowerCase().includes(U));
        }
      );
    });
    function S(U, F) {
      p.value = !1, a("created", U, F);
    }
    function C() {
      p.value = !0;
    }
    async function I(U) {
      w.value = U, g.value = null;
      const F = await r(U.name);
      F && (g.value = F);
    }
    function E(U) {
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
      openCreateModal: C
    }), (U, F) => (o(), i(B, null, [
      b(Jt, null, {
        header: h(() => [
          b(Qt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: F[1] || (F[1] = (D) => v.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (o(), R(Pe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: h(() => [...F[7] || (F[7] = [
                  x(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Pe, {
                variant: "secondary",
                size: "sm",
                onClick: F[0] || (F[0] = (D) => U.$emit("import"))
              }, {
                default: h(() => [...F[8] || (F[8] = [
                  x(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(_n, {
            modelValue: f.value,
            "onUpdate:modelValue": F[2] || (F[2] = (D) => f.value = D),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (o(), R(Fs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (o(), R(Bs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            $.value.length ? (o(), R(Ot, {
              key: 0,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, we($.value, (D) => (o(), R(YC, {
                  key: D.name,
                  "environment-name": D.name,
                  "is-current": D.is_current,
                  "current-branch": D.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !D.is_current && e.canSwitch ? (o(), R(Pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => U.$emit("switch", D.name)
                    }, {
                      default: h(() => [...F[9] || (F[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => I(D)
                    }, {
                      default: h(() => [...F[10] || (F[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => U.$emit("export", D.name)
                    }, {
                      default: h(() => [...F[11] || (F[11] = [
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
            $.value.length ? y("", !0) : (o(), R(Ts, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, ds({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (o(), R(Pe, {
                    key: 0,
                    variant: "primary",
                    onClick: C
                  }, {
                    default: h(() => [...F[12] || (F[12] = [
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
      b(ks, {
        show: v.value,
        title: "About Environments",
        onClose: F[4] || (F[4] = (D) => v.value = !1)
      }, {
        content: h(() => [...F[13] || (F[13] = [
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
          b(Pe, {
            variant: "secondary",
            onClick: F[3] || (F[3] = (D) => v.value = !1)
          }, {
            default: h(() => [...F[14] || (F[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), R(Ux, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: F[5] || (F[5] = (D) => {
          w.value = null, g.value = null;
        }),
        onDelete: E,
        onExport: P
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (o(), R(g3, {
        key: 1,
        onClose: F[6] || (F[6] = (D) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), y3 = /* @__PURE__ */ Me(h3, [["__scopeId", "data-v-01163d8c"]]), w3 = { class: "file-path" }, _3 = { class: "file-path-text" }, k3 = ["title"], b3 = /* @__PURE__ */ Ee({
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
    return (l, r) => (o(), i("div", w3, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", _3, m(e.path), 1),
      e.copyable ? (o(), i("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(n.value ? "✓" : "📋"), 9, k3)) : y("", !0)
    ]));
  }
}), $3 = /* @__PURE__ */ Me(b3, [["__scopeId", "data-v-f0982173"]]), C3 = { class: "base-textarea-wrapper" }, x3 = ["value", "rows", "placeholder", "disabled", "maxlength"], S3 = {
  key: 0,
  class: "base-textarea-count"
}, I3 = /* @__PURE__ */ Ee({
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
    return (r, c) => (o(), i("div", C3, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = xs(bt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = xs(bt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          xs(l, ["enter"])
        ]
      }, null, 40, x3),
      e.showCharCount && e.maxLength ? (o(), i("div", S3, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Un = /* @__PURE__ */ Me(I3, [["__scopeId", "data-v-c6d16c93"]]), E3 = ["checked", "disabled"], T3 = { class: "base-checkbox-box" }, M3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, P3 = {
  key: 0,
  class: "base-checkbox-label"
}, R3 = /* @__PURE__ */ Ee({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, E3),
      s("span", T3, [
        e.modelValue ? (o(), i("svg", M3, [...n[1] || (n[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (o(), i("span", P3, [
        rt(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ra = /* @__PURE__ */ Me(R3, [["__scopeId", "data-v-bf17c831"]]), D3 = { class: "export-blocked" }, L3 = { class: "error-header" }, N3 = { class: "error-summary" }, U3 = { class: "error-title" }, O3 = { class: "error-description" }, A3 = { class: "issues-list" }, z3 = { class: "issue-message" }, F3 = {
  key: 0,
  class: "issue-details"
}, B3 = ["onClick"], V3 = { class: "issue-fix" }, W3 = {
  key: 0,
  class: "commit-section"
}, G3 = {
  key: 0,
  class: "issues-warning"
}, j3 = {
  key: 1,
  class: "commit-error"
}, H3 = /* @__PURE__ */ Ee({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = _(""), f = kn({}), v = M(() => n.mode === "publish" ? "Publish" : "Export"), p = M(
      () => n.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), w = M(
      () => n.issues.some((C) => C.type === "unresolved_issues")
    ), g = M(
      () => w.value && !u.value
    ), k = M(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function $(C) {
      const I = n.issues[C];
      return f[C] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function S() {
      var C;
      if (k.value) {
        c.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success")
            a("committed");
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
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
    return (C, I) => (o(), R(Pt, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (E) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", D3, [
          s("div", L3, [
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
            s("div", N3, [
              s("h3", U3, m(v.value) + " blocked", 1),
              s("p", O3, m(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", A3, [
            (o(!0), i(B, null, we(e.issues, (E, P) => (o(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", z3, m(E.message), 1),
              E.details.length ? (o(), i("div", F3, [
                (o(!0), i(B, null, we($(P), (O, U) => (o(), i("div", {
                  key: U,
                  class: "issue-detail"
                }, m(O), 1))), 128)),
                E.details.length > 3 && !f[P] ? (o(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (O) => f[P] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, B3)) : y("", !0)
              ])) : y("", !0),
              s("div", V3, [
                E.type === "uncommitted_workflows" ? (o(), i(B, { key: 0 }, [
                  x(" Commit your workflow changes before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "uncommitted_git_changes" ? (o(), i(B, { key: 1 }, [
                  x(" Commit your changes before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "unresolved_issues" ? (o(), i(B, { key: 2 }, [
                  x(" Resolve all workflow issues before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (o(), i("div", W3, [
            w.value ? (o(), i("div", G3, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(ra, {
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
            b(Un, {
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (E) => r.value = E),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: S,
              onCtrlEnter: S
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (o(), i("div", j3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (o(), i(B, { key: 0 }, [
          b(Oe, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (E) => C.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: u.value ? "danger" : "primary",
            disabled: !k.value,
            loading: c.value,
            onClick: S
          }, {
            default: h(() => [
              x(m(c.value ? "Committing..." : u.value ? `Force Commit & ${v.value}` : `Commit & ${v.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (o(), R(Oe, {
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
}), q3 = /* @__PURE__ */ Me(H3, [["__scopeId", "data-v-a8990107"]]), K3 = { class: "repro-warning" }, J3 = { class: "repro-warning-content" }, Q3 = {
  key: 0,
  class: "warning-group"
}, Y3 = { class: "warning-list" }, X3 = { key: 0 }, Z3 = {
  key: 1,
  class: "warning-group"
}, eS = { class: "warning-list" }, tS = { key: 0 }, sS = /* @__PURE__ */ Ee({
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
    return (p, w) => (o(), i("div", K3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", J3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (o(), i("div", Q3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", Y3, [
            (o(!0), i(B, null, we(u.value, (g) => (o(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            f.value ? (o(), i("li", X3, "+" + m(f.value) + " more model" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (o(), i("div", Z3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", eS, [
            (o(!0), i(B, null, we(d.value, (g) => (o(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            v.value ? (o(), i("li", tS, "+" + m(v.value) + " more node" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), dl = /* @__PURE__ */ Me(sS, [["__scopeId", "data-v-11be310d"]]), nS = { class: "export-card" }, oS = { class: "export-path-row" }, aS = {
  key: 1,
  class: "export-warning"
}, lS = { class: "export-footer-actions" }, iS = /* @__PURE__ */ Ee({
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
    }), S = M(() => $.value ? `EXPORT ENVIRONMENT: ${$.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), C = M(() => $.value ? `Environment '${$.value}' has been exported` : "Your environment has been exported"), I = M(() => u.value ? "Validating..." : d.value ? "Exporting..." : F.value ? "Export Anyway" : "Export Environment"), E = M(() => {
      var N;
      return ((N = w.value) == null ? void 0 : N.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), P = M(
      () => E.value.models_without_sources.length
    ), O = M(
      () => {
        var N;
        return ((N = E.value.nodes_without_provenance) == null ? void 0 : N.length) || 0;
      }
    ), U = M(
      () => P.value + O.value
    ), F = M(
      () => {
        var N;
        return !!((N = w.value) != null && N.can_export) && U.value > 0;
      }
    );
    async function D() {
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
    async function W() {
      v.value = null;
      const N = await D();
      if (N) {
        if (!N.can_export) {
          g.value = !0;
          return;
        }
        await J();
      }
    }
    async function ce() {
      g.value = !1;
      const N = await D();
      if (N) {
        if (!N.can_export) {
          g.value = !0;
          return;
        }
        await J();
      }
    }
    async function de() {
      await D();
    }
    async function J() {
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
        } catch (G) {
          console.error("Failed to copy path:", G);
        }
    }
    async function K() {
      var N;
      if ((N = v.value) != null && N.path) {
        f.value = !0;
        try {
          const G = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!G.ok)
            throw new Error(`Download failed: ${G.statusText}`);
          const pe = await G.blob(), te = URL.createObjectURL(pe), oe = v.value.path.split("/").pop() || "environment-export.tar.gz", re = document.createElement("a");
          re.href = te, re.download = oe, document.body.appendChild(re), re.click(), document.body.removeChild(re), URL.revokeObjectURL(te);
        } catch (G) {
          console.error("Failed to download:", G), alert(`Download failed: ${G instanceof Error ? G.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return dt(() => {
      D();
    }), (N, G) => (o(), i(B, null, [
      b(Jt, null, ds({
        content: h(() => [
          F.value ? (o(), R(dl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: E.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: G[1] || (G[1] = (pe) => k.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(Ot, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", nS, [
                G[8] || (G[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", oS, [
                  b(En, {
                    modelValue: c.value,
                    "onUpdate:modelValue": G[2] || (G[2] = (pe) => c.value = pe),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), R(Ot, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(es, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, ds({
                icon: h(() => [
                  x(m(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  x(m(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  x(m(v.value.status === "success" ? C.value : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(Mt, { label: "Saved to:" }, {
                      default: h(() => [
                        b($3, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (o(), R(Mt, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (o(), i("div", aS, [...G[9] || (G[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: K
                    }, {
                      default: h(() => [...G[10] || (G[10] = [
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
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: ue
                    }, {
                      default: h(() => [...G[11] || (G[11] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Pe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: G[3] || (G[3] = (pe) => v.value = null)
                    }, {
                      default: h(() => [...G[12] || (G[12] = [
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
          s("div", lS, [
            e.embedded ? (o(), R(Pe, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: G[4] || (G[4] = (pe) => N.$emit("close"))
            }, {
              default: h(() => [...G[13] || (G[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Pe, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: W
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
            b(Qt, {
              title: S.value,
              "show-info": !0,
              onInfoClick: G[0] || (G[0] = (pe) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(ks, {
        show: p.value,
        title: "What Gets Exported",
        onClose: G[5] || (G[5] = (pe) => p.value = !1)
      }, {
        content: h(() => [...G[14] || (G[14] = [
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
      g.value && w.value ? (o(), R(q3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: G[6] || (G[6] = (pe) => g.value = !1),
        onCommitted: ce
      }, null, 8, ["issues"])) : y("", !0),
      k.value && w.value ? (o(), R(Ll, {
        key: 1,
        warnings: w.value.warnings,
        onClose: G[7] || (G[7] = (pe) => k.value = !1),
        onRevalidate: de
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), rS = /* @__PURE__ */ Me(iS, [["__scopeId", "data-v-6cf814a2"]]), cS = { class: "file-input-wrapper" }, uS = ["accept", "multiple", "disabled"], dS = /* @__PURE__ */ Ee({
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
    }), (u, d) => (o(), i("div", cS, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, uS),
      b(Pe, {
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
            x(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), mS = /* @__PURE__ */ Me(dS, [["__scopeId", "data-v-cd192091"]]), fS = {
  key: 0,
  class: "drop-zone-empty"
}, vS = { class: "drop-zone-text" }, pS = { class: "drop-zone-primary" }, gS = { class: "drop-zone-secondary" }, hS = { class: "drop-zone-actions" }, yS = {
  key: 1,
  class: "drop-zone-file"
}, wS = { class: "file-info" }, _S = { class: "file-details" }, kS = { class: "file-name" }, bS = { class: "file-size" }, $S = /* @__PURE__ */ Ee({
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
      var C;
      S.stopPropagation(), r.value++, (C = S.dataTransfer) != null && C.types.includes("Files") && (a.value = !0);
    }
    function v(S) {
      S.stopPropagation(), S.dataTransfer && (S.dataTransfer.dropEffect = "copy");
    }
    function p(S) {
      S.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(S) {
      var I;
      S.stopPropagation(), r.value = 0, a.value = !1;
      const C = (I = S.dataTransfer) == null ? void 0 : I.files;
      C && C.length > 0 && k(C[0]);
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
    return (S, C) => (o(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: bt(f, ["prevent"]),
      onDragover: bt(v, ["prevent"]),
      onDragleave: bt(p, ["prevent"]),
      onDrop: bt(w, ["prevent"])
    }, [
      c.value ? (o(), i("div", yS, [
        s("div", wS, [
          C[1] || (C[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", _S, [
            s("div", kS, m(u.value), 1),
            s("div", bS, m(d.value), 1)
          ])
        ]),
        b(Pe, {
          variant: "ghost",
          size: "xs",
          onClick: $,
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
      ])) : (o(), i("div", fS, [
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
        s("div", vS, [
          s("p", pS, m(e.primaryText), 1),
          s("p", gS, m(e.secondaryText), 1)
        ]),
        s("div", hS, [
          b(mS, {
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
}), CS = /* @__PURE__ */ Me($S, [["__scopeId", "data-v-0f79cb86"]]), xS = { class: "commit-hash" }, SS = /* @__PURE__ */ Ee({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, n = M(() => t.hash.slice(0, t.length));
    return (a, l) => (o(), i("span", xS, m(n.value), 1));
  }
}), Ic = /* @__PURE__ */ Me(SS, [["__scopeId", "data-v-7c333cc6"]]), IS = { class: "import-preview" }, ES = { class: "preview-header" }, TS = {
  key: 0,
  class: "source-env"
}, MS = { class: "preview-content" }, PS = { class: "preview-section" }, RS = { class: "section-header" }, DS = { class: "section-info" }, LS = { class: "section-count" }, NS = {
  key: 0,
  class: "item-list"
}, US = { class: "item-name" }, OS = {
  key: 0,
  class: "item-more"
}, AS = { class: "preview-section" }, zS = { class: "section-header" }, FS = { class: "section-info" }, BS = { class: "section-count" }, VS = {
  key: 0,
  class: "item-list"
}, WS = { class: "item-details" }, GS = { class: "item-name" }, jS = { class: "item-meta" }, HS = {
  key: 0,
  class: "item-more"
}, qS = { class: "preview-section" }, KS = { class: "section-header" }, JS = { class: "section-info" }, QS = { class: "section-count" }, YS = {
  key: 0,
  class: "item-list"
}, XS = { class: "item-name" }, ZS = {
  key: 0,
  class: "item-more"
}, e8 = {
  key: 0,
  class: "preview-section"
}, t8 = { class: "git-info" }, s8 = /* @__PURE__ */ Ee({
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
    return (c, u) => (o(), i("div", IS, [
      s("div", ES, [
        b(hs, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), i("span", TS, [
          u[1] || (u[1] = x(" From: ", -1)),
          b(ul, null, {
            default: h(() => [
              x(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", MS, [
        s("div", PS, [
          s("div", RS, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", DS, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", LS, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), i("div", NS, [
            (o(!0), i(B, null, we(e.workflows.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", US, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), i("div", OS, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", AS, [
          s("div", zS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", FS, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", BS, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), i("div", VS, [
            (o(!0), i(B, null, we(e.models.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", WS, [
                s("span", GS, m(d.filename), 1),
                s("span", jS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), i("div", HS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", qS, [
          s("div", KS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", JS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", QS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), i("div", YS, [
            (o(!0), i(B, null, we(e.nodes.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", XS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), i("div", ZS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), i("div", e8, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", t8, [
            e.gitBranch ? (o(), R(Mt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(ul, null, {
                  default: h(() => [
                    x(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (o(), R(Mt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(Ic, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), n8 = /* @__PURE__ */ Me(s8, [["__scopeId", "data-v-182fe113"]]), o8 = { class: "import-config" }, a8 = { class: "config-container" }, l8 = { class: "config-field" }, i8 = { class: "input-wrapper" }, r8 = ["value"], c8 = {
  key: 0,
  class: "validating-indicator"
}, u8 = {
  key: 1,
  class: "valid-indicator"
}, d8 = {
  key: 0,
  class: "field-error"
}, m8 = { class: "config-field" }, f8 = { class: "strategy-options" }, v8 = ["value", "checked", "onChange"], p8 = { class: "strategy-content" }, g8 = { class: "strategy-label" }, h8 = { class: "strategy-description" }, y8 = { class: "config-field switch-field" }, w8 = { class: "switch-label" }, _8 = ["checked"], k8 = { class: "advanced-section" }, b8 = { class: "advanced-content" }, $8 = { class: "config-field" }, C8 = ["value"], x8 = ["value"], S8 = /* @__PURE__ */ Ee({
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
    Ct(() => n.nameError, (v) => {
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
    return (v, p) => (o(), i("div", o8, [
      b(hs, null, {
        default: h(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", a8, [
        s("div", l8, [
          b(Ko, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", i8, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: f
            }, null, 42, r8),
            l.value ? (o(), i("span", c8, "...")) : r.value ? (o(), i("span", u8, "✓")) : y("", !0)
          ]),
          e.nameError ? (o(), i("div", d8, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", m8, [
          b(Ko, null, {
            default: h(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", f8, [
            (o(), i(B, null, we(c, (w) => s("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, v8),
              s("div", p8, [
                s("span", g8, m(w.label), 1),
                s("span", h8, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", y8, [
          s("label", w8, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, _8),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", k8, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", b8, [
            s("div", $8, [
              b(Ko, null, {
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
                (o(!0), i(B, null, we(it(Al), (w) => (o(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, x8))), 128))
              ], 40, C8)
            ])
          ])
        ])
      ])
    ]));
  }
}), I8 = /* @__PURE__ */ Me(S8, [["__scopeId", "data-v-89ea06a1"]]), E8 = { class: "import-flow" }, T8 = {
  key: 0,
  class: "import-empty"
}, M8 = { class: "git-import-section" }, P8 = { class: "git-url-input-row" }, R8 = ["disabled"], D8 = {
  key: 0,
  class: "git-error"
}, L8 = {
  key: 1,
  class: "import-configure"
}, N8 = { class: "selected-file-bar" }, U8 = {
  key: 0,
  class: "file-bar-content"
}, O8 = { class: "file-bar-info" }, A8 = { class: "file-bar-name" }, z8 = { class: "file-bar-size" }, F8 = {
  key: 1,
  class: "file-bar-content"
}, B8 = { class: "file-bar-info" }, V8 = { class: "file-bar-name" }, W8 = {
  key: 0,
  class: "preview-loading"
}, G8 = { class: "import-actions" }, j8 = {
  key: 2,
  class: "import-progress"
}, H8 = { class: "creating-intro" }, q8 = {
  key: 0,
  class: "progress-warning"
}, K8 = {
  key: 1,
  class: "import-error"
}, J8 = { class: "error-message" }, Q8 = {
  key: 3,
  class: "import-complete"
}, Y8 = { class: "complete-message" }, X8 = { class: "complete-title" }, Z8 = { class: "complete-details" }, e5 = { class: "complete-actions" }, t5 = /* @__PURE__ */ Ee({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: n }) {
    var Ie, he, Fe, Ne;
    const a = e, l = n, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: f, getImportProgress: v } = ft();
    let p = null;
    const w = _(null), g = _(a.resumeImport ?? !1), k = _(!1), $ = _(!1), S = _(""), C = _(!1), I = _(null), E = _(""), P = _(null), O = _(!1), U = _(null), F = _(null), D = _({
      name: ((Ie = a.initialProgress) == null ? void 0 : Ie.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), W = _(null), ce = _({
      message: ((he = a.initialProgress) == null ? void 0 : he.message) ?? "Preparing import...",
      phase: ((Fe = a.initialProgress) == null ? void 0 : Fe.phase) ?? "",
      progress: ((Ne = a.initialProgress) == null ? void 0 : Ne.progress) ?? 0,
      error: null
    }), de = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], J = M(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const be = F.value;
      return {
        sourceEnvironment: be.comfyui_version ? `ComfyUI ${be.comfyui_version}` : "Unknown",
        workflows: be.workflows.map((Re) => Re.name),
        models: be.models.map((Re) => ({
          filename: Re.filename,
          size: 0,
          type: Re.relative_path.split("/")[0] || "model"
        })),
        nodes: be.nodes.map((Re) => Re.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), ue = M(() => !C.value && !I.value && F.value && D.value.name.length > 0 && !W.value && (w.value || P.value));
    async function K(be) {
      w.value = be, C.value = !0, I.value = null, F.value = null;
      try {
        const Re = await r(be);
        F.value = Re;
      } catch (Re) {
        I.value = Re instanceof Error ? Re.message : "Failed to analyze file", console.error("Preview error:", Re);
      } finally {
        C.value = !1;
      }
    }
    function N() {
      w.value = null, P.value = null, E.value = "", U.value = null, k.value = !1, $.value = !1, S.value = "", F.value = null, I.value = null, D.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, W.value = null, l("source-cleared");
    }
    function G() {
      se(), N(), g.value = !1, C.value = !1, O.value = !1, ce.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function pe() {
      if (E.value.trim()) {
        O.value = !0, U.value = null;
        try {
          const be = await c(E.value.trim());
          P.value = E.value.trim(), F.value = be;
        } catch (be) {
          U.value = be instanceof Error ? be.message : "Failed to analyze repository";
        } finally {
          O.value = !1;
        }
      }
    }
    function te(be) {
      try {
        const Re = new URL(be);
        return Re.host + Re.pathname.replace(/\.git$/, "");
      } catch {
        return be;
      }
    }
    async function oe(be) {
      if (!be) {
        W.value = "Environment name is required";
        return;
      }
      try {
        const Re = await u(be);
        W.value = Re.valid ? null : Re.error || "Invalid name";
      } catch {
        W.value = "Failed to validate name";
      }
    }
    async function re() {
      if (D.value.name && !(!w.value && !P.value)) {
        g.value = !0, k.value = !1, ce.value = { message: `Creating environment '${D.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let be;
          if (w.value)
            be = await d(
              w.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else if (P.value)
            be = await f(
              P.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          be.status === "started" ? H() : ($.value = !1, S.value = be.message, g.value = !1, k.value = !0);
        } catch (be) {
          $.value = !1, S.value = be instanceof Error ? be.message : "Unknown error occurred during import", g.value = !1, k.value = !0;
        }
      }
    }
    async function H() {
      if (p) return;
      const be = async () => {
        try {
          const ge = await v();
          return ce.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (se(), $.value = !0, S.value = `Environment '${ge.environment_name}' created successfully`, g.value = !1, k.value = !0, ge.environment_name && l("import-complete", ge.environment_name, D.value.switchAfterImport), !1) : ge.state === "error" ? (se(), $.value = !1, S.value = ge.error || ge.message, g.value = !1, k.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await be() && (p = setInterval(async () => {
        await be() || se();
      }, 2e3));
    }
    function se() {
      p && (clearInterval(p), p = null);
    }
    function ie(be) {
      return be < 1024 ? `${be} B` : be < 1024 * 1024 ? `${(be / 1024).toFixed(1)} KB` : be < 1024 * 1024 * 1024 ? `${(be / (1024 * 1024)).toFixed(1)} MB` : `${(be / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return dt(async () => {
      try {
        const be = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", be.state, be), be.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", be.environment_name), g.value = !0, D.value.name = be.environment_name || D.value.name || "", ce.value = {
          progress: be.progress ?? 0,
          message: be.message || "Importing...",
          phase: be.phase || "",
          error: null
        }, H());
      } catch (be) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", be);
      }
    }), t({
      handleReset: G,
      isImporting: g,
      canImport: ue
    }), (be, Re) => {
      var ge;
      return o(), i("div", E8, [
        !w.value && !P.value && !g.value ? (o(), i("div", T8, [
          b(CS, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: K
          }),
          Re[7] || (Re[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", M8, [
            Re[5] || (Re[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", P8, [
              Ft(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Re[0] || (Re[0] = ($e) => E.value = $e),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: xs(pe, ["enter"]),
                disabled: O.value
              }, null, 40, R8), [
                [go, E.value]
              ]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || O.value,
                onClick: pe
              }, {
                default: h(() => [
                  x(m(O.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            U.value ? (o(), i("div", D8, m(U.value), 1)) : y("", !0),
            Re[6] || (Re[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || P.value) && !g.value && !k.value ? (o(), i("div", L8, [
          s("div", N8, [
            w.value ? (o(), i("div", U8, [
              Re[8] || (Re[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", O8, [
                s("div", A8, m(w.value.name), 1),
                s("div", z8, m(ie(w.value.size)), 1)
              ])
            ])) : P.value ? (o(), i("div", F8, [
              Re[10] || (Re[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", B8, [
                s("div", V8, m(te(P.value)), 1),
                Re[9] || (Re[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: N
            }, {
              default: h(() => [...Re[11] || (Re[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (o(), i("div", W8, [...Re[12] || (Re[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (o(), R(fs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : F.value ? (o(), R(n8, {
            key: 2,
            "source-environment": J.value.sourceEnvironment,
            workflows: J.value.workflows,
            models: J.value.models,
            nodes: J.value.nodes,
            "git-branch": J.value.gitBranch,
            "git-commit": J.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          F.value ? (o(), R(I8, {
            key: 3,
            name: D.value.name,
            "onUpdate:name": Re[1] || (Re[1] = ($e) => D.value.name = $e),
            "model-strategy": D.value.modelStrategy,
            "onUpdate:modelStrategy": Re[2] || (Re[2] = ($e) => D.value.modelStrategy = $e),
            "torch-backend": D.value.torchBackend,
            "onUpdate:torchBackend": Re[3] || (Re[3] = ($e) => D.value.torchBackend = $e),
            "switch-after-import": D.value.switchAfterImport,
            "onUpdate:switchAfterImport": Re[4] || (Re[4] = ($e) => D.value.switchAfterImport = $e),
            "name-error": W.value,
            onValidateName: oe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          D.value.modelStrategy === "skip" && ((ge = F.value) != null && ge.models_needing_download) ? (o(), R(fs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", G8, [
            b(Pe, {
              variant: "secondary",
              size: "md",
              onClick: N
            }, {
              default: h(() => [...Re[13] || (Re[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Pe, {
              variant: "primary",
              size: "md",
              disabled: !ue.value,
              onClick: re
            }, {
              default: h(() => [...Re[14] || (Re[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (o(), i("div", j8, [
          s("p", H8, [
            Re[15] || (Re[15] = x(" Importing environment ", -1)),
            s("strong", null, m(D.value.name), 1),
            Re[16] || (Re[16] = x("... ", -1))
          ]),
          b(ia, {
            progress: ce.value.progress,
            message: ce.value.message,
            "current-phase": ce.value.phase,
            variant: ce.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ce.value.error ? y("", !0) : (o(), i("p", q8, " This may take several minutes. Please wait... ")),
          ce.value.error ? (o(), i("div", K8, [
            s("p", J8, m(ce.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (o(), i("div", Q8, [
          s("div", {
            class: Be(["complete-icon", $.value ? "success" : "error"])
          }, m($.value ? "✓" : "✕"), 3),
          s("div", Y8, [
            s("div", X8, m($.value ? "Import Successful" : "Import Failed"), 1),
            s("div", Z8, m(S.value), 1)
          ]),
          s("div", e5, [
            b(Pe, {
              variant: "primary",
              size: "md",
              onClick: G
            }, {
              default: h(() => [...Re[17] || (Re[17] = [
                x(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ec = /* @__PURE__ */ Me(t5, [["__scopeId", "data-v-72cbc04e"]]), s5 = /* @__PURE__ */ Ee({
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
    return (r, c) => (o(), i(B, null, [
      b(Jt, null, ds({
        content: h(() => [
          b(Ec, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Qt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(ks, {
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
}), n5 = /* @__PURE__ */ Me(s5, [["__scopeId", "data-v-41b1f298"]]), o5 = { class: "base-tabs" }, a5 = ["disabled", "onClick"], l5 = {
  key: 0,
  class: "base-tabs__badge"
}, i5 = /* @__PURE__ */ Ee({
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
    return (r, c) => (o(), i("div", o5, [
      (o(!0), i(B, null, we(e.tabs, (u) => (o(), i("button", {
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
        u.badge ? (o(), i("span", l5, m(u.badge), 1)) : y("", !0)
      ], 10, a5))), 128))
    ]));
  }
}), zl = /* @__PURE__ */ Me(i5, [["__scopeId", "data-v-ad5e6cad"]]), r5 = { class: "commit-list" }, c5 = /* @__PURE__ */ Ee({
  __name: "CommitList",
  setup(e) {
    return (t, n) => (o(), i("div", r5, [
      rt(t.$slots, "default", {}, void 0)
    ]));
  }
}), Tc = /* @__PURE__ */ Me(c5, [["__scopeId", "data-v-8c5ee761"]]), u5 = { class: "commit-message" }, d5 = { class: "commit-date" }, m5 = /* @__PURE__ */ Ee({
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
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(Ic, { hash: e.hash }, null, 8, ["hash"]),
      s("span", u5, m(e.message), 1),
      s("span", d5, m(e.relativeDate), 1),
      r.$slots.actions ? (o(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = bt(() => {
        }, ["stop"]))
      }, [
        rt(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Mc = /* @__PURE__ */ Me(m5, [["__scopeId", "data-v-dd7c621b"]]), f5 = {
  key: 0,
  class: "load-more-row"
}, v5 = /* @__PURE__ */ Ee({
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
    return (a, l) => (o(), R(Jt, null, ds({
      content: h(() => [
        e.commits.length === 0 ? (o(), R(Ts, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), R(Tc, {
          key: 1,
          class: "history-commits"
        }, {
          default: h(() => [
            (o(!0), i(B, null, we(e.commits, (r) => (o(), R(Mc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                b(Pe, {
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
            e.hasMore ? (o(), i("div", f5, [
              b(Pe, {
                variant: "secondary",
                size: "sm",
                loading: e.isLoadingMore,
                onClick: l[0] || (l[0] = (r) => a.$emit("load-more"))
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  x(" Load More ", -1)
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
          b(Qt, { title: n.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), p5 = /* @__PURE__ */ Me(v5, [["__scopeId", "data-v-00efa121"]]), g5 = { class: "branch-create-form" }, h5 = { class: "form-actions" }, y5 = /* @__PURE__ */ Ee({
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
    return (u, d) => (o(), i("div", g5, [
      b(En, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", h5, [
        b(Pe, {
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
        b(Pe, {
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
}), w5 = /* @__PURE__ */ Me(y5, [["__scopeId", "data-v-7c500394"]]), _5 = { class: "branch-list-item__indicator" }, k5 = { class: "branch-list-item__name" }, b5 = {
  key: 0,
  class: "branch-list-item__actions"
}, $5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, C5 = /* @__PURE__ */ Ee({
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
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", _5, m(e.isCurrent ? "●" : "○"), 1),
      s("span", k5, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (o(), i("div", b5, [
        rt(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (o(), i("span", $5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), x5 = /* @__PURE__ */ Me(C5, [["__scopeId", "data-v-c6581a24"]]), S5 = { class: "header-info" }, I5 = { class: "branch-name" }, E5 = {
  key: 0,
  class: "current-badge"
}, T5 = { class: "branch-meta" }, M5 = { key: 0 }, P5 = {
  key: 0,
  class: "meta-note"
}, R5 = {
  key: 0,
  class: "loading"
}, D5 = {
  key: 1,
  class: "empty-state"
}, L5 = {
  key: 0,
  class: "load-more-row"
}, N5 = 50, U5 = /* @__PURE__ */ Ee({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch", "revert-current"],
  setup(e) {
    const t = e, { getBranchHistory: n } = ft(), a = _([]), l = _(!1), r = _(!0), c = _(!1);
    async function u(f = 0) {
      const v = await n(t.branchName, N5, f);
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
    }), (f, v) => (o(), R(Pt, {
      size: "md",
      "show-close-button": !1,
      onClose: v[4] || (v[4] = (p) => f.$emit("close"))
    }, {
      header: h(() => [
        s("div", S5, [
          v[5] || (v[5] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", I5, m(e.branchName), 1),
          e.isCurrent ? (o(), i("span", E5, "CURRENT")) : y("", !0)
        ]),
        b(Oe, {
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
        s("div", T5, [
          r.value ? (o(), i("span", M5, "Loading...")) : (o(), i(B, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (o(), i("span", P5, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (o(), i("div", R5, "Loading commit history...")) : a.value.length === 0 ? (o(), i("div", D5, " No commits found on this branch ")) : (o(), R(Tc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (o(!0), i(B, null, we(a.value, (p) => (o(), R(Mc, {
              key: p.hash,
              hash: p.short_hash || p.hash.slice(0, 7),
              message: p.message,
              "relative-date": p.date_relative || p.relative_date || "",
              clickable: !1
            }, null, 8, ["hash", "message", "relative-date"]))), 128)),
            l.value ? (o(), i("div", L5, [
              b(Pe, {
                variant: "secondary",
                size: "sm",
                loading: c.value,
                onClick: d
              }, {
                default: h(() => [...v[7] || (v[7] = [
                  x(" Load More ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])
            ])) : y("", !0)
          ]),
          _: 1
        }))
      ]),
      footer: h(() => [
        e.isCurrent ? (o(), R(Pe, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: v[1] || (v[1] = (p) => f.$emit("revert-current"))
        }, {
          default: h(() => [...v[8] || (v[8] = [
            x(" Revert Changes ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.isCurrent ? y("", !0) : (o(), R(Pe, {
          key: 1,
          variant: "destructive",
          size: "sm",
          onClick: v[2] || (v[2] = (p) => f.$emit("delete", e.branchName))
        }, {
          default: h(() => [...v[9] || (v[9] = [
            x(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        v[11] || (v[11] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (o(), R(Oe, {
          key: 2,
          variant: "primary",
          onClick: v[3] || (v[3] = (p) => f.$emit("switch", e.branchName))
        }, {
          default: h(() => [...v[10] || (v[10] = [
            x(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), O5 = /* @__PURE__ */ Me(U5, [["__scopeId", "data-v-89798c86"]]), A5 = {
  key: 0,
  class: "branch-toolbar"
}, z5 = {
  key: 3,
  class: "branch-list"
}, F5 = /* @__PURE__ */ Ee({
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
    return (p, w) => (o(), R(Jt, null, ds({
      content: h(() => [
        e.embedded && !a.value ? (o(), i("div", A5, [
          b(Pe, {
            variant: "primary",
            size: "sm",
            onClick: w[1] || (w[1] = (g) => a.value = !0)
          }, {
            default: h(() => [...w[4] || (w[4] = [
              x(" + Create Branch ", -1)
            ])]),
            _: 1
          })
        ])) : y("", !0),
        a.value ? (o(), R(w5, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (o(), R(Ts, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (o(), i("div", z5, [
          (o(!0), i(B, null, we(e.branches, (g) => (o(), R(x5, {
            key: g.name,
            "branch-name": g.name,
            "is-current": g.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (k) => u(g)
          }, {
            actions: h(() => [
              g.is_current ? y("", !0) : (o(), R(Pe, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: bt((k) => n("switch", g.name), ["stop"])
              }, {
                default: h(() => [...w[5] || (w[5] = [
                  x(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (o(), R(O5, {
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
          b(Qt, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (o(), R(Pe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: w[0] || (w[0] = (g) => a.value = !0)
              }, {
                default: h(() => [...w[3] || (w[3] = [
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
}), B5 = /* @__PURE__ */ Me(F5, [["__scopeId", "data-v-b24413b8"]]);
function Pc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const V5 = { class: "remote-url-display" }, W5 = ["title"], G5 = ["title"], j5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, H5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, q5 = /* @__PURE__ */ Ee({
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
    return (r, c) => (o(), i("div", V5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, W5),
      s("button", {
        class: Be(["copy-btn", { copied: n.value }]),
        onClick: l,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), i("svg", H5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), i("svg", j5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, G5)
    ]));
  }
}), K5 = /* @__PURE__ */ Me(q5, [["__scopeId", "data-v-7768a58d"]]), J5 = { class: "remote-title" }, Q5 = {
  key: 0,
  class: "default-badge"
}, Y5 = {
  key: 1,
  class: "sync-badge"
}, X5 = {
  key: 0,
  class: "ahead"
}, Z5 = {
  key: 1,
  class: "behind"
}, e4 = {
  key: 1,
  class: "synced"
}, t4 = ["href"], s4 = {
  key: 1,
  class: "remote-url-text"
}, n4 = /* @__PURE__ */ Ee({
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
    return (f, v) => (o(), R(es, {
      status: a.value ? "synced" : void 0
    }, ds({
      icon: h(() => [
        x(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", J5, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (o(), i("span", Q5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (o(), i("span", Y5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (o(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (o(), i("span", X5, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (o(), i("span", Z5, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (o(), i("span", e4, "✓ synced"))
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
          onClick: v[0] || (v[0] = bt(() => {
          }, ["stop"]))
        }, m(d.value), 9, t4)) : (o(), i("span", s4, m(d.value), 1))
      ]),
      actions: h(() => [
        b(Pe, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: v[1] || (v[1] = (p) => f.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            x(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Pe, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => f.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            x(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Pe, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => f.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            x(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Pe, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => f.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            x(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (o(), R(Pe, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => f.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
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
          e.remote.push_url !== e.remote.fetch_url ? (o(), R(Mt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(K5, {
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
}), o4 = /* @__PURE__ */ Me(n4, [["__scopeId", "data-v-8310f3a8"]]), a4 = ["for"], l4 = {
  key: 0,
  class: "base-form-field-required"
}, i4 = { class: "base-form-field-input" }, r4 = {
  key: 1,
  class: "base-form-field-error"
}, c4 = {
  key: 2,
  class: "base-form-field-hint"
}, u4 = /* @__PURE__ */ Ee({
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
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), i("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        x(m(e.label) + " ", 1),
        e.required ? (o(), i("span", l4, "*")) : y("", !0)
      ], 8, a4)) : y("", !0),
      s("div", i4, [
        rt(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (o(), i("span", r4, m(e.error), 1)) : e.hint ? (o(), i("span", c4, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ht = /* @__PURE__ */ Me(u4, [["__scopeId", "data-v-9a1cf296"]]), d4 = { class: "remote-form" }, m4 = { class: "form-header" }, f4 = { class: "form-body" }, v4 = {
  key: 0,
  class: "form-error"
}, p4 = { class: "form-actions" }, g4 = /* @__PURE__ */ Ee({
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
    Ct(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
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
    return (f, v) => (o(), i("div", d4, [
      s("div", m4, [
        b(hs, null, {
          default: h(() => [
            x(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", f4, [
        b(Ht, {
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
        b(Ht, {
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
        b(Ht, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(Dt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (o(), i("div", v4, m(c.value), 1)) : y("", !0)
      ]),
      s("div", p4, [
        b(Pe, {
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
        b(Pe, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => f.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), h4 = /* @__PURE__ */ Me(g4, [["__scopeId", "data-v-56021b18"]]), y4 = { class: "conflict-summary-box" }, w4 = { class: "summary-header" }, _4 = { class: "summary-text" }, k4 = { key: 0 }, b4 = {
  key: 1,
  class: "all-resolved"
}, $4 = { class: "summary-progress" }, C4 = { class: "progress-bar" }, x4 = { class: "progress-text" }, S4 = /* @__PURE__ */ Ee({
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
    return (a, l) => (o(), i("div", y4, [
      s("div", w4, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", _4, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (o(), i("p", k4, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (o(), i("p", b4, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", $4, [
        s("div", C4, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: n.value + "%" })
          }, null, 4)
        ]),
        s("span", x4, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), I4 = /* @__PURE__ */ Me(S4, [["__scopeId", "data-v-4e9e6cc9"]]), E4 = { class: "modal-header" }, T4 = { class: "modal-title" }, M4 = { class: "modal-body" }, P4 = {
  key: 0,
  class: "error-box"
}, R4 = {
  key: 0,
  class: "error-hint"
}, D4 = {
  key: 1,
  class: "loading-state"
}, L4 = { class: "commit-summary" }, N4 = {
  key: 0,
  class: "commits-section"
}, U4 = { class: "commit-list" }, O4 = { class: "commit-hash" }, A4 = { class: "commit-message" }, z4 = { class: "commit-date" }, F4 = {
  key: 1,
  class: "changes-section"
}, B4 = {
  key: 0,
  class: "change-group",
  open: ""
}, V4 = { class: "change-count" }, W4 = { class: "change-list" }, G4 = {
  key: 0,
  class: "conflict-badge"
}, j4 = {
  key: 1,
  class: "change-group"
}, H4 = { class: "change-count" }, q4 = { class: "change-list" }, K4 = {
  key: 2,
  class: "change-group"
}, J4 = { class: "change-count" }, Q4 = { class: "change-list" }, Y4 = {
  key: 3,
  class: "strategy-section"
}, X4 = { class: "radio-group" }, Z4 = { class: "radio-option" }, eI = { class: "radio-option" }, tI = { class: "radio-option" }, sI = {
  key: 4,
  class: "up-to-date"
}, nI = { class: "modal-actions" }, Ni = "comfygit.pullModelStrategy", oI = /* @__PURE__ */ Ee({
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
    const n = e, a = t, l = _(localStorage.getItem(Ni) || "skip");
    Ct(l, (S) => {
      localStorage.setItem(Ni, S);
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
    }), f = M(() => n.preview && Pc(n.preview) ? n.preview : null), v = M(() => {
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
      const C = S.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((I) => I.name === C);
    }
    function $(S) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: S, resolutions: C });
    }
    return (S, C) => {
      var I, E;
      return o(), R(cs, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (P) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = bt(() => {
            }, ["stop"]))
          }, [
            s("div", E4, [
              s("h3", T4, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (P) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", M4, [
              e.error ? (o(), i("div", P4, [
                C[13] || (C[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  C[12] || (C[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (o(), i("p", R4, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (o(), i("div", D4, [...C[14] || (C[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (o(), i(B, { key: 2 }, [
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
              ], 64)) : e.preview ? (o(), i(B, { key: 3 }, [
                s("div", L4, [
                  C[17] || (C[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (o(), i("div", N4, [
                  C[18] || (C[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", U4, [
                    (o(!0), i(B, null, we(e.preview.commits, (P) => (o(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", O4, m(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", A4, m(P.message), 1),
                      s("span", z4, m(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (o(), i("div", F4, [
                  C[22] || (C[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (o(), i("details", B4, [
                    s("summary", null, [
                      C[19] || (C[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", V4, m(c.value) + " changes", 1)
                    ]),
                    s("div", W4, [
                      (o(!0), i(B, null, we(e.preview.changes.workflows.added, (P) => (o(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128)),
                      (o(!0), i(B, null, we(e.preview.changes.workflows.modified, (P) => (o(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + m(P) + " ", 1),
                        k(P) ? (o(), i("span", G4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (o(!0), i(B, null, we(e.preview.changes.workflows.deleted, (P) => (o(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (o(), i("details", j4, [
                    s("summary", null, [
                      C[20] || (C[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", H4, m(u.value) + " to install", 1)
                    ]),
                    s("div", q4, [
                      (o(!0), i(B, null, we(e.preview.changes.nodes.to_install, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (o(), i("details", K4, [
                    s("summary", null, [
                      C[21] || (C[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", J4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", Q4, [
                      (o(!0), i(B, null, we(e.preview.changes.models.referenced, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item"
                      }, m(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (o(), R(I4, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (o(), i("div", Y4, [
                  C[27] || (C[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", X4, [
                    s("label", Z4, [
                      Ft(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      C[23] || (C[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", eI, [
                      Ft(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      C[24] || (C[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", tI, [
                      Ft(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      C[25] || (C[25] = s("span", null, "Skip model downloads", -1)),
                      C[26] || (C[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[28] || (C[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (o(), i("div", sI, [
                  C[29] || (C[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", nI, [
              b(Pe, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (P) => S.$emit("close"))
              }, {
                default: h(() => [...C[30] || (C[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (o(), i(B, { key: 0 }, [
                b(Pe, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: C[5] || (C[5] = (P) => $(!1))
                }, {
                  default: h(() => [...C[31] || (C[31] = [
                    x(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Pe, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: C[6] || (C[6] = (P) => $(!0))
                }, {
                  default: h(() => [...C[32] || (C[32] = [
                    x(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (o(), R(Pe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: C[7] || (C[7] = (P) => $(!0))
              }, {
                default: h(() => [...C[33] || (C[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (o(), i(B, { key: 2 }, [
                f.value && !w.value ? (o(), R(Pe, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (P) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    x(" Resolve Conflicts (" + m(p.value) + "/" + m(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), R(Pe, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: C[9] || (C[9] = (P) => $(!1))
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
}), aI = /* @__PURE__ */ Me(oI, [["__scopeId", "data-v-1d633bba"]]), lI = { class: "modal-header" }, iI = { class: "modal-title" }, rI = { class: "modal-body" }, cI = {
  key: 0,
  class: "error-box"
}, uI = {
  key: 1,
  class: "loading-state"
}, dI = {
  key: 2,
  class: "warning-box"
}, mI = {
  key: 1,
  class: "commits-section"
}, fI = { class: "commit-list" }, vI = { class: "commit-hash" }, pI = { class: "commit-message" }, gI = { class: "commit-date" }, hI = { class: "force-option" }, yI = { class: "checkbox-option" }, wI = { class: "commit-summary" }, _I = { key: 0 }, kI = { key: 1 }, bI = {
  key: 0,
  class: "info-box"
}, $I = {
  key: 2,
  class: "commits-section"
}, CI = { class: "commit-list" }, xI = { class: "commit-hash" }, SI = { class: "commit-message" }, II = { class: "commit-date" }, EI = {
  key: 3,
  class: "up-to-date"
}, TI = { class: "modal-actions" }, MI = /* @__PURE__ */ Ee({
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
      var k, $, S, C;
      return o(), i(B, null, [
        (o(), R(cs, { to: "body" }, [
          e.show ? (o(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = bt(() => {
              }, ["stop"]))
            }, [
              s("div", lI, [
                s("h3", iI, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", rI, [
                e.error ? (o(), i("div", cI, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (o(), i("div", uI, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (k = e.preview) != null && k.has_uncommitted_changes ? (o(), i("div", dI, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : ($ = e.preview) != null && $.remote_has_new_commits ? (o(), i(B, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  v.value ? (o(), R(dl, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", mI, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", fI, [
                      (o(!0), i(B, null, we(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", vI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", pI, m(I.message), 1),
                        s("span", gI, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", hI, [
                    s("label", yI, [
                      Ft(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [la, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (o(), i(B, { key: 4 }, [
                  s("div", wI, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (o(), i("span", _I, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (o(), i("span", kI, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (o(), i("div", bI, [...g[21] || (g[21] = [
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
                  v.value ? (o(), R(dl, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", $I, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", CI, [
                      (o(!0), i(B, null, we(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", xI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", SI, m(I.message), 1),
                        s("span", II, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (o(), i("div", EI, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", TI, [
                b(Pe, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (S = e.preview) != null && S.remote_has_new_commits ? (o(), i(B, { key: 0 }, [
                  b(Pe, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (I) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      x(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Pe, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (I) => p(!0))
                  }, {
                    default: h(() => [
                      x(m(v.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (o(), R(Pe, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (I) => p(!1))
                }, {
                  default: h(() => [
                    x(m(v.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((C = e.preview) != null && C.warnings) ? (o(), R(Ll, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), PI = /* @__PURE__ */ Me(MI, [["__scopeId", "data-v-7748bf33"]]), RI = { class: "resolution-choice-group" }, DI = ["disabled"], LI = ["disabled"], NI = /* @__PURE__ */ Ee({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("div", RI, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...n[2] || (n[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, DI),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...n[3] || (n[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, LI)
    ]));
  }
}), UI = /* @__PURE__ */ Me(NI, [["__scopeId", "data-v-985715ed"]]), OI = { class: "conflict-header" }, AI = { class: "conflict-info" }, zI = { class: "workflow-name" }, FI = { class: "conflict-description" }, BI = {
  key: 0,
  class: "resolved-badge"
}, VI = { class: "resolved-text" }, WI = { class: "conflict-hashes" }, GI = { class: "hash-item" }, jI = { class: "hash-item" }, HI = { class: "conflict-actions" }, qI = /* @__PURE__ */ Ee({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(n.resolution);
    Ct(() => n.resolution, (d) => {
      l.value = d;
    }), Ct(l, (d) => {
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
        class: Be(["conflict-item", { resolved: r.value }])
      }, [
        s("div", OI, [
          f[2] || (f[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", AI, [
            s("code", zI, m(e.conflict.name) + ".json", 1),
            s("div", FI, m(c.value), 1)
          ]),
          r.value ? (o(), i("div", BI, [
            f[1] || (f[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", VI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", WI, [
          s("span", GI, [
            f[3] || (f[3] = x("Your: ", -1)),
            s("code", null, m(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", jI, [
            f[4] || (f[4] = x("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", HI, [
          b(UI, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), KI = /* @__PURE__ */ Me(qI, [["__scopeId", "data-v-506d3bbf"]]), JI = { class: "resolution-content" }, QI = {
  key: 0,
  class: "error-box"
}, YI = { class: "resolution-header" }, XI = { class: "header-stats" }, ZI = { class: "stat" }, e6 = { class: "stat-value" }, t6 = { class: "stat resolved" }, s6 = { class: "stat-value" }, n6 = {
  key: 0,
  class: "stat pending"
}, o6 = { class: "stat-value" }, a6 = { class: "conflicts-list" }, l6 = {
  key: 1,
  class: "all-resolved-message"
}, i6 = /* @__PURE__ */ Ee({
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
    return (w, g) => (o(), R(Pt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", JI, [
          e.error ? (o(), i("div", QI, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", YI, [
            s("div", XI, [
              s("div", ZI, [
                s("span", e6, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", t6, [
                s("span", s6, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (o(), i("div", n6, [
                s("span", o6, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", a6, [
            (o(!0), i(B, null, we(e.workflowConflicts, (k) => (o(), R(KI, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: ($) => f(k.name, $)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (o(), i("div", l6, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...g[7] || (g[7] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Oe, {
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
}), r6 = /* @__PURE__ */ Me(i6, [["__scopeId", "data-v-c58d150d"]]), c6 = { class: "node-conflict-item" }, u6 = { class: "node-header" }, d6 = { class: "node-name" }, m6 = { class: "node-id" }, f6 = { class: "version-comparison" }, v6 = { class: "version yours" }, p6 = { class: "version theirs" }, g6 = { class: "chosen-version" }, h6 = { class: "chosen" }, y6 = { class: "chosen-reason" }, w6 = { class: "affected-workflows" }, _6 = { class: "wf-source" }, k6 = { class: "wf-version" }, b6 = /* @__PURE__ */ Ee({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", c6, [
      s("div", u6, [
        s("code", d6, m(e.conflict.node_name), 1),
        s("span", m6, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", f6, [
        s("div", v6, [
          n[0] || (n[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", p6, [
          n[1] || (n[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", g6, [
        n[3] || (n[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", h6, m(e.conflict.chosen_version), 1),
        s("span", y6, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", w6, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (o(!0), i(B, null, we(e.conflict.affected_workflows, (a) => (o(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", _6, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", k6, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), $6 = /* @__PURE__ */ Me(b6, [["__scopeId", "data-v-8b626725"]]), C6 = { class: "validation-content" }, x6 = {
  key: 0,
  class: "compatible-message"
}, S6 = { class: "conflicts-list" }, I6 = {
  key: 2,
  class: "warnings-section"
}, E6 = /* @__PURE__ */ Ee({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (o(), R(Pt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", C6, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (o(), i("div", x6, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (o(), i(B, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", S6, [
              (o(!0), i(B, null, we(e.validation.node_conflicts, (u) => (o(), R($6, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (o(), i("div", I6, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (o(!0), i(B, null, we(e.validation.warnings, (u, d) => (o(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Oe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
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
}), T6 = /* @__PURE__ */ Me(E6, [["__scopeId", "data-v-fefd26ed"]]), M6 = {
  key: 0,
  class: "embedded-toolbar"
}, P6 = { class: "embedded-toolbar-search" }, R6 = /* @__PURE__ */ Ee({
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
    } = ft(), k = _([]), $ = _({}), S = _(!1), C = _(null), I = _(""), E = _(!1), P = _(null), O = _(!1), U = _("add"), F = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = M(() => {
      if (!I.value.trim()) return k.value;
      const Le = I.value.toLowerCase();
      return k.value.filter(
        (Ae) => Ae.name.toLowerCase().includes(Le) || Ae.fetch_url.toLowerCase().includes(Le) || Ae.push_url.toLowerCase().includes(Le)
      );
    });
    async function W() {
      S.value = !0, C.value = null;
      try {
        const Le = await a();
        k.value = Le.remotes, await Promise.all(
          Le.remotes.map(async (Ae) => {
            const He = await d(Ae.name);
            He && ($.value[Ae.name] = He);
          })
        );
      } catch (Le) {
        C.value = Le instanceof Error ? Le.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ce() {
      U.value = "add", F.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function de(Le) {
      const Ae = k.value.find((He) => He.name === Le);
      Ae && (U.value = "edit", F.value = {
        name: Ae.name,
        fetchUrl: Ae.fetch_url,
        pushUrl: Ae.push_url
      }, O.value = !0);
    }
    async function J(Le) {
      try {
        U.value === "add" ? await l(Le.name, Le.fetchUrl) : await c(Le.name, Le.fetchUrl, Le.pushUrl || void 0), O.value = !1, await W();
      } catch (Ae) {
        C.value = Ae instanceof Error ? Ae.message : "Operation failed";
      }
    }
    function ue() {
      O.value = !1, F.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function K(Le) {
      P.value = Le;
      try {
        await u(Le);
        const Ae = await d(Le);
        Ae && ($.value[Le] = Ae), n("toast", `✓ Fetched from ${Le}`, "success");
      } catch (Ae) {
        n("toast", Ae instanceof Error ? Ae.message : "Fetch failed", "error");
      } finally {
        P.value = null;
      }
    }
    async function N(Le) {
      if (confirm(`Remove remote "${Le}"?`))
        try {
          await r(Le), await W();
        } catch (Ae) {
          C.value = Ae instanceof Error ? Ae.message : "Failed to remove remote";
        }
    }
    function G() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const pe = _("idle"), te = M(() => pe.value === "pull_preview"), oe = M(
      () => pe.value === "resolving" || pe.value === "validating"
    ), re = M(
      () => pe.value === "validation_review" || pe.value === "executing"
    ), H = _(!1), se = _(null), ie = _(!1), Ie = _(null), he = _(null), Fe = _(!1), Ne = _(null), be = _(null), Re = _(/* @__PURE__ */ new Map()), ge = _(null), $e = _(null), T = M(() => Ne.value && Pc(Ne.value) ? Ne.value : null);
    async function z(Le) {
      he.value = Le, pe.value = "pull_preview", Fe.value = !0, Ne.value = null, be.value = null;
      try {
        Ne.value = await f(Le);
      } catch (Ae) {
        be.value = Ae instanceof Error ? Ae.message : "Failed to load pull preview";
      } finally {
        Fe.value = !1;
      }
    }
    function ae() {
      pe.value = "idle", Ne.value = null, be.value = null, he.value = null;
    }
    async function Te(Le) {
      if (!he.value) return;
      pe.value = "executing", be.value = null;
      const Ae = he.value;
      try {
        const He = await v(Ae, Le);
        if (He.rolled_back) {
          be.value = `Pull failed and was rolled back: ${He.error || "Unknown error"}`, pe.value = "pull_preview";
          return;
        }
        Ve(), pe.value = "idle", n("toast", `✓ Pulled from ${Ae}`, "success"), await W();
      } catch (He) {
        be.value = He instanceof Error ? He.message : "Pull failed", pe.value = "pull_preview";
      }
    }
    function xe() {
      T.value && (pe.value = "resolving", $e.value = null);
    }
    function Se(Le, Ae) {
      Re.value.set(Le, { name: Le, resolution: Ae });
    }
    function Y() {
      pe.value = "pull_preview";
    }
    async function j() {
      pe.value = "validating", $e.value = null;
      try {
        const Le = Array.from(Re.value.values());
        ge.value = await g(he.value, Le), pe.value = "validation_review";
      } catch (Le) {
        $e.value = Le instanceof Error ? Le.message : "Validation failed", pe.value = "resolving";
      }
    }
    async function ve() {
      pe.value = "executing";
      const Le = he.value;
      try {
        const Ae = Array.from(Re.value.values()), He = await v(Le, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ae
        });
        if (He.rolled_back) {
          be.value = `Pull failed and was rolled back: ${He.error || "Unknown error"}`, pe.value = "pull_preview";
          return;
        }
        Ve(), pe.value = "idle", n("toast", `✓ Pulled from ${Le}`, "success"), await W();
      } catch (Ae) {
        be.value = Ae instanceof Error ? Ae.message : "Pull failed", pe.value = "validation_review";
      }
    }
    function _e() {
      pe.value = "resolving";
    }
    function je() {
      Ve(), pe.value = "idle";
    }
    function Ve() {
      Re.value.clear(), ge.value = null, $e.value = null, be.value = null, Ne.value = null, he.value = null;
    }
    async function ke(Le) {
      he.value = Le, H.value = !0, Fe.value = !0, se.value = null, Ie.value = null;
      try {
        se.value = await p(Le);
      } catch (Ae) {
        Ie.value = Ae instanceof Error ? Ae.message : "Failed to load push preview";
      } finally {
        Fe.value = !1;
      }
    }
    async function ee() {
      if (he.value) {
        Fe.value = !0, Ie.value = null;
        try {
          se.value = await p(he.value);
        } catch (Le) {
          Ie.value = Le instanceof Error ? Le.message : "Failed to refresh push preview";
        } finally {
          Fe.value = !1;
        }
      }
    }
    function Ke() {
      H.value = !1, se.value = null, Ie.value = null, he.value = null;
    }
    async function Ue(Le) {
      var He;
      if (!he.value) return;
      ie.value = !0;
      const Ae = he.value;
      Ie.value = null;
      try {
        await w(Ae, Le), Ke(), n("toast", `✓ Pushed to ${Ae}`, "success"), await W();
      } catch (kt) {
        const Ut = kt instanceof Error ? kt.message : "Push failed";
        Ie.value = Ut, kt instanceof cl && kt.status === 409 && ((He = kt.data) != null && He.needs_force) && se.value ? se.value = {
          ...se.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : n("toast", Ut, "error");
      } finally {
        ie.value = !1;
      }
    }
    function Xe() {
      const Le = he.value;
      Ke(), Le && z(Le);
    }
    return dt(W), (Le, Ae) => (o(), i(B, null, [
      b(Jt, null, ds({
        content: h(() => [
          S.value ? (o(), R(Fs, {
            key: 0,
            message: "Loading remotes..."
          })) : C.value ? (o(), R(Bs, {
            key: 1,
            message: C.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            e.embedded && !O.value ? (o(), i("div", M6, [
              s("div", P6, [
                b(_n, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Ae[2] || (Ae[2] = (He) => I.value = He),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: ce
              }, {
                default: h(() => [...Ae[5] || (Ae[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            O.value ? (o(), R(h4, {
              key: 1,
              mode: U.value,
              "remote-name": F.value.name,
              "fetch-url": F.value.fetchUrl,
              "push-url": F.value.pushUrl,
              onSubmit: J,
              onCancel: ue
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            D.value.length && !O.value ? (o(), R(Ot, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, we(D.value, (He) => (o(), R(o4, {
                  key: He.name,
                  remote: He,
                  "sync-status": $.value[He.name],
                  "fetching-remote": P.value,
                  onFetch: K,
                  onEdit: de,
                  onRemove: N,
                  onPull: z,
                  onPush: ke
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !D.value.length && !O.value ? (o(), R(Ts, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "primary",
                  onClick: ce
                }, {
                  default: h(() => [...Ae[6] || (Ae[6] = [
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
            b(Qt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Ae[0] || (Ae[0] = (He) => E.value = !0)
            }, {
              actions: h(() => [
                O.value ? y("", !0) : (o(), R(Pe, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ce
                }, {
                  default: h(() => [...Ae[4] || (Ae[4] = [
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
            O.value ? y("", !0) : (o(), R(_n, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Ae[1] || (Ae[1] = (He) => I.value = He),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(ks, {
        show: E.value,
        title: "About Git Remotes",
        onClose: Ae[3] || (Ae[3] = (He) => E.value = !1)
      }, {
        content: h(() => [...Ae[7] || (Ae[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            x(" The "),
            s("strong", null, '"origin"'),
            x(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Pe, {
            variant: "link",
            onClick: G
          }, {
            default: h(() => [...Ae[8] || (Ae[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(aI, {
        show: te.value,
        "remote-name": he.value || "",
        preview: Ne.value,
        loading: Fe.value,
        pulling: pe.value === "executing",
        error: be.value,
        "conflict-resolutions": Re.value,
        onClose: ae,
        onPull: Te,
        onOpenConflictResolution: xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(PI, {
        show: H.value,
        "remote-name": he.value || "",
        preview: se.value,
        loading: Fe.value,
        pushing: ie.value,
        error: Ie.value,
        onClose: Ke,
        onPush: Ue,
        onPullFirst: Xe,
        onRevalidate: ee
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      oe.value && T.value ? (o(), R(r6, {
        key: 0,
        "workflow-conflicts": T.value.workflow_conflicts,
        resolutions: Re.value,
        "operation-type": "pull",
        validating: pe.value === "validating",
        error: $e.value,
        onClose: Y,
        onResolve: Se,
        onApply: j
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      re.value && ge.value ? (o(), R(T6, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: pe.value === "executing",
        onProceed: ve,
        onGoBack: _e,
        onCancel: je
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), D6 = /* @__PURE__ */ Me(R6, [["__scopeId", "data-v-a6651a66"]]), L6 = /* @__PURE__ */ Ee({
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
    return Ct(() => n.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (o(), R(Jt, null, {
      header: h(() => [
        b(Qt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(zl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (o(), R(p5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "has-more": e.historyHasMore,
          "is-loading-more": e.isLoadingHistoryMore,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d)),
          onLoadMore: u[3] || (u[3] = (d) => a("load-more-history"))
        }, null, 8, ["commits", "has-more", "is-loading-more", "current-ref"])) : r.value === "branches" ? (o(), R(B5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[4] || (u[4] = (d) => a("switch", d)),
          onCreate: u[5] || (u[5] = (d) => a("create", d)),
          onDelete: u[6] || (u[6] = (d) => a("delete", d)),
          onRevertCurrent: u[7] || (u[7] = (d) => a("revert-current"))
        }, null, 8, ["branches", "current"])) : (o(), R(D6, {
          key: 2,
          embedded: "",
          onToast: u[8] || (u[8] = (d, f) => a("toast", d, f))
        }))
      ]),
      _: 1
    }));
  }
}), N6 = { class: "text-viewer-wrapper" }, U6 = ["disabled", "title"], O6 = { class: "text-content" }, A6 = /* @__PURE__ */ Ee({
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
    return (u, d) => (o(), i("div", N6, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, U6),
        s("pre", O6, m(e.content), 1)
      ], 544)
    ]));
  }
}), z6 = /* @__PURE__ */ Me(A6, [["__scopeId", "data-v-85a537ba"]]), F6 = {
  key: 1,
  class: "manifest-viewer-shell"
}, B6 = { class: "manifest-path" }, V6 = /* @__PURE__ */ Ee({
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
    return dt(c), (u, d) => (o(), i(B, null, [
      b(Jt, null, ds({
        content: h(() => [
          n.value ? (o(), R(Fs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (o(), R(Bs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            !r.value.exists || !r.value.content ? (o(), R(Ts, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (o(), i("div", F6, [
              b(z6, {
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
            b(Qt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (f) => l.value = !0)
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: n.value
                }, {
                  default: h(() => [
                    x(m(n.value ? "Loading..." : "Refresh"), 1)
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
      b(ks, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (f) => l.value = !1)
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
          s("div", B6, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: d[1] || (d[1] = (f) => l.value = !1)
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
}), W6 = /* @__PURE__ */ Me(V6, [["__scopeId", "data-v-814a8fdd"]]), G6 = { class: "log-viewer-wrapper" }, j6 = ["disabled", "title"], H6 = /* @__PURE__ */ Ee({
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
      await qt();
      const f = (v = n.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    dt(r), Ct(() => t.logs, r);
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
    return (f, v) => (o(), i("div", G6, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, j6),
        (o(!0), i(B, null, we(l.value, (p, w) => (o(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Rc = /* @__PURE__ */ Me(H6, [["__scopeId", "data-v-5aaf1b88"]]), q6 = /* @__PURE__ */ Ee({
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
    }), ($, S) => (o(), i(B, null, [
      b(Jt, null, ds({
        content: h(() => [
          c.value ? (o(), R(Fs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (o(), R(Bs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            r.value.length === 0 ? (o(), R(Ts, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), R(Rc, {
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
            b(Qt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: S[0] || (S[0] = (C) => d.value = !0)
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: k,
                  disabled: !v.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Pe, {
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
      b(ks, {
        show: d.value,
        title: "About Environment Logs",
        onClose: S[2] || (S[2] = (C) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            S[3] || (S[3] = x(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(f.value), 1),
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
          b(Pe, {
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
}), Ui = /* @__PURE__ */ Ee({
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
      } catch (E) {
        v.value = E instanceof Error ? E.message : `Failed to load ${u.value} logs`;
      } finally {
        f.value = !1;
      }
    }
    async function C() {
      try {
        const [E, P] = await Promise.all([
          n(),
          l()
        ]);
        E.exists && (w.value = E.path), P.exists && (g.value = P.path);
      } catch {
      }
    }
    async function I() {
      if ($.value) {
        k.value = !0;
        try {
          await r($.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          k.value = !1;
        }
      }
    }
    return Ct(u, () => {
      S();
    }), Ct(() => c.initialTab, (E) => {
      E && (u.value = E);
    }), dt(() => {
      S(), C();
    }), (E, P) => (o(), i(B, null, [
      b(Jt, null, ds({
        content: h(() => [
          f.value ? (o(), R(Fs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : v.value ? (o(), R(Bs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            d.value.length === 0 ? (o(), R(Ts, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (o(), R(Rc, {
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
            b(Qt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: P[0] || (P[0] = (O) => p.value = !0)
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !$.value || k.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(k.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: S,
                  disabled: f.value
                }, {
                  default: h(() => [
                    x(m(f.value ? "Loading..." : "Refresh"), 1)
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
      b(ks, {
        show: p.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (O) => p.value = !1)
      }, {
        content: h(() => [...P[4] || (P[4] = [
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
          b(Pe, {
            variant: "primary",
            onClick: P[2] || (P[2] = (O) => p.value = !1)
          }, {
            default: h(() => [...P[5] || (P[5] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), K6 = /* @__PURE__ */ Ee({
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
    return Ct(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), Ct(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, f) => (o(), i(B, null, [
      b(Jt, null, ds({
        header: h(() => [
          b(Qt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (o(), R(W6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (o(), R(q6, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (o(), R(Ui, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (o(), R(Ui, {
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
      b(ks, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: f[3] || (f[3] = (v) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (o(), i(B, { key: 0 }, [
            f[4] || (f[4] = s("p", null, [
              s("strong", null, "Manifest"),
              x(" shows the live "),
              s("strong", null, "pyproject.toml"),
              x(" from the current environment's "),
              s("strong", null, ".cec"),
              x(" directory. ")
            ], -1)),
            f[5] || (f[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            f[6] || (f[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (o(), i(B, { key: 1 }, [
            f[7] || (f[7] = s("p", null, [
              s("strong", null, "Logging"),
              x(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            f[8] || (f[8] = s("p", null, [
              s("strong", null, "Environment"),
              x(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            f[9] || (f[9] = s("p", null, [
              s("strong", null, "Workspace"),
              x(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            f[10] || (f[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              x(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            size: "sm",
            onClick: f[2] || (f[2] = (v) => r.value = !1)
          }, {
            default: h(() => [...f[11] || (f[11] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), J6 = { class: "header-info" }, Q6 = { class: "commit-hash" }, Y6 = {
  key: 0,
  class: "commit-refs"
}, X6 = { class: "commit-message" }, Z6 = { class: "commit-date" }, eE = {
  key: 0,
  class: "loading"
}, tE = {
  key: 1,
  class: "changes-section"
}, sE = { class: "stats-row" }, nE = { class: "stat" }, oE = { class: "stat insertions" }, aE = { class: "stat deletions" }, lE = {
  key: 0,
  class: "change-group"
}, iE = {
  key: 1,
  class: "change-group"
}, rE = {
  key: 0,
  class: "version"
}, cE = {
  key: 2,
  class: "change-group"
}, uE = { class: "change-item" }, dE = /* @__PURE__ */ Ee({
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
    }), (u, d) => (o(), R(Pt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (f) => u.$emit("close"))
    }, {
      header: h(() => {
        var f, v, p, w;
        return [
          s("div", J6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", Q6, m(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (o(), i("span", Y6, [
              (o(!0), i(B, null, we(a.value.refs, (g) => (o(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(Oe, {
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
          s("div", X6, m(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          s("div", Z6, m(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (o(), i("div", eE, "Loading details...")) : a.value ? (o(), i("div", tE, [
            s("div", sE, [
              s("span", nE, m(a.value.stats.files_changed) + " files", 1),
              s("span", oE, "+" + m(a.value.stats.insertions), 1),
              s("span", aE, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (o(), i("div", lE, [
              b(hn, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(B, null, we(a.value.changes.workflows.added, (p) => (o(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(B, null, we(a.value.changes.workflows.modified, (p) => (o(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(B, null, we(a.value.changes.workflows.deleted, (p) => (o(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (o(), i("div", iE, [
              b(hn, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(B, null, we(a.value.changes.nodes.added, (p) => (o(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (o(), i("span", rE, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (o(!0), i(B, null, we(a.value.changes.nodes.removed, (p) => (o(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (o(), i("div", cE, [
              b(hn, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", uE, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            x(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
          variant: "primary",
          onClick: d[2] || (d[2] = (f) => u.$emit("checkout", e.commit))
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
}), mE = /* @__PURE__ */ Me(dE, [["__scopeId", "data-v-d256ff6d"]]), fE = { class: "popover-header" }, vE = { class: "popover-body" }, pE = {
  key: 0,
  class: "changes-summary"
}, gE = {
  key: 0,
  class: "change-item"
}, hE = {
  key: 1,
  class: "change-item"
}, yE = {
  key: 2,
  class: "change-item"
}, wE = {
  key: 3,
  class: "change-item"
}, _E = {
  key: 4,
  class: "change-item"
}, kE = {
  key: 5,
  class: "change-item"
}, bE = {
  key: 1,
  class: "no-changes"
}, $E = {
  key: 2,
  class: "loading"
}, CE = {
  key: 3,
  class: "issues-error"
}, xE = { class: "error-header" }, SE = { class: "error-title" }, IE = { class: "issues-list" }, EE = { class: "workflow-state" }, TE = { class: "message-section" }, ME = { class: "popover-footer" }, PE = {
  key: 1,
  class: "commit-popover"
}, RE = { class: "popover-header" }, DE = { class: "popover-body" }, LE = {
  key: 0,
  class: "changes-summary"
}, NE = {
  key: 0,
  class: "change-item"
}, UE = {
  key: 1,
  class: "change-item"
}, OE = {
  key: 2,
  class: "change-item"
}, AE = {
  key: 3,
  class: "change-item"
}, zE = {
  key: 4,
  class: "change-item"
}, FE = {
  key: 5,
  class: "change-item"
}, BE = {
  key: 1,
  class: "no-changes"
}, VE = {
  key: 2,
  class: "loading"
}, WE = {
  key: 3,
  class: "issues-error"
}, GE = { class: "error-header" }, jE = { class: "error-title" }, HE = { class: "issues-list" }, qE = { class: "workflow-state" }, KE = { class: "message-section" }, JE = { class: "popover-footer" }, QE = /* @__PURE__ */ Ee({
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
      var k, $, S, C;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success") {
            const E = `Committed: ${((k = I.summary) == null ? void 0 : k.new) || 0} new, ${(($ = I.summary) == null ? void 0 : $.modified) || 0} modified, ${((S = I.summary) == null ? void 0 : S.deleted) || 0} deleted`;
            a("committed", { success: !0, message: E });
          } else if (I.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
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
    return (k, $) => e.asModal ? (o(), R(cs, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (S) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", fE, [
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
          s("div", vE, [
            e.status && d.value ? (o(), i("div", pE, [
              e.status.workflows.new.length ? (o(), i("div", gE, [
                $[12] || ($[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (o(), i("div", hE, [
                $[13] || ($[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (o(), i("div", yE, [
                $[14] || ($[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (o(), i("div", wE, [
                $[15] || ($[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), i("div", _E, [
                $[16] || ($[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (o(), i("div", kE, [...$[17] || ($[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (o(), i("div", bE, " No changes to commit ")) : (o(), i("div", $E, " Loading... ")),
            p.value ? (o(), i("div", CE, [
              s("div", xE, [
                $[18] || ($[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", SE, m(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", IE, [
                (o(!0), i(B, null, we(v.value, (S) => (o(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", EE, "(" + m(S.sync_state) + ")", 1),
                  x(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              b(ra, {
                modelValue: u.value,
                "onUpdate:modelValue": $[1] || ($[1] = (S) => u.value = S),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...$[19] || ($[19] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", TE, [
              b(Un, {
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
          s("div", ME, [
            b(Oe, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (S) => a("close"))
            }, {
              default: h(() => [...$[20] || ($[20] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
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
    ])) : (o(), i("div", PE, [
      s("div", RE, [
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
      s("div", DE, [
        e.status && d.value ? (o(), i("div", LE, [
          e.status.workflows.new.length ? (o(), i("div", NE, [
            $[23] || ($[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (o(), i("div", UE, [
            $[24] || ($[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (o(), i("div", OE, [
            $[25] || ($[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (o(), i("div", AE, [
            $[26] || ($[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), i("div", zE, [
            $[27] || ($[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (o(), i("div", FE, [...$[28] || ($[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (o(), i("div", BE, " No changes to commit ")) : (o(), i("div", VE, " Loading... ")),
        p.value ? (o(), i("div", WE, [
          s("div", GE, [
            $[29] || ($[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", jE, m(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", HE, [
            (o(!0), i(B, null, we(v.value, (S) => (o(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", qE, "(" + m(S.sync_state) + ")", 1),
              x(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          b(ra, {
            modelValue: u.value,
            "onUpdate:modelValue": $[7] || ($[7] = (S) => u.value = S),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...$[30] || ($[30] = [
              x(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", KE, [
          b(Un, {
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
      s("div", JE, [
        b(Oe, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (S) => a("close"))
        }, {
          default: h(() => [...$[31] || ($[31] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
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
}), Dc = /* @__PURE__ */ Me(QE, [["__scopeId", "data-v-5f897631"]]), YE = { class: "switch-body" }, XE = { class: "switch-message" }, ZE = { class: "switch-details" }, eT = /* @__PURE__ */ Ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => e.show ? (o(), R(Pt, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: n[2] || (n[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", YE, [
          s("p", XE, [
            n[3] || (n[3] = x(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            n[4] || (n[4] = x(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            n[5] || (n[5] = x("? ", -1))
          ]),
          n[6] || (n[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", ZE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          n[7] || (n[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        b(Pe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("close"))
        }, {
          default: h(() => [...n[8] || (n[8] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Pe, {
          variant: "primary",
          onClick: n[1] || (n[1] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [...n[9] || (n[9] = [
            x(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), tT = /* @__PURE__ */ Me(eT, [["__scopeId", "data-v-f6d223e6"]]), sT = {
  key: 0,
  class: "modal-overlay"
}, nT = { class: "modal-content" }, oT = { class: "modal-body" }, aT = { class: "progress-info" }, lT = { class: "progress-percentage" }, iT = { class: "progress-state" }, rT = { class: "switch-steps" }, cT = { class: "step-icon" }, uT = { class: "step-label" }, dT = /* @__PURE__ */ Ee({
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
    return (r, c) => (o(), R(cs, { to: "body" }, [
      e.show ? (o(), i("div", sT, [
        s("div", nT, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", oT, [
            b(Sc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", aT, [
              s("div", lT, m(e.progress) + "%", 1),
              s("div", iT, m(n.value), 1)
            ]),
            s("div", rT, [
              (o(!0), i(B, null, we(l.value, (u) => (o(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", cT, m(u.icon), 1),
                s("span", uT, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), mT = /* @__PURE__ */ Me(dT, [["__scopeId", "data-v-768a5078"]]), fT = { class: "modal-header" }, vT = { class: "modal-body" }, pT = {
  key: 0,
  class: "node-section"
}, gT = { class: "node-list" }, hT = {
  key: 1,
  class: "node-section"
}, yT = { class: "node-list" }, wT = { class: "modal-actions" }, _T = /* @__PURE__ */ Ee({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => (o(), R(cs, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", fT, [
            n[5] || (n[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", vT, [
            n[8] || (n[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), i("div", pT, [
              n[6] || (n[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", gT, [
                (o(!0), i(B, null, we(e.mismatchDetails.missing_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), i("div", hT, [
              n[7] || (n[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", yT, [
                (o(!0), i(B, null, we(e.mismatchDetails.extra_nodes, (a) => (o(), i("div", {
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
          s("div", wT, [
            b(Pe, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...n[10] || (n[10] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Pe, {
              variant: "primary",
              onClick: n[2] || (n[2] = (a) => t.$emit("confirm"))
            }, {
              default: h(() => [...n[11] || (n[11] = [
                x(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), kT = /* @__PURE__ */ Me(_T, [["__scopeId", "data-v-7cad7518"]]), bT = [
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
], Bo = "v0.0.24", $T = "Akatz", CT = { class: "social-buttons" }, xT = ["title", "aria-label", "onClick"], ST = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, IT = ["d"], ET = ["title", "aria-label", "onClick"], TT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, MT = ["d"], PT = /* @__PURE__ */ Ee({
  __name: "SocialButtons",
  setup(e) {
    function t(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, a) => (o(), i("div", CT, [
      (o(!0), i(B, null, we(it(bT), (l) => (o(), i(B, {
        key: l.id
      }, [
        l.label ? (o(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          x(m(l.label) + " ", 1),
          (o(), i("svg", ST, [
            s("path", {
              d: l.iconPath
            }, null, 8, IT)
          ]))
        ], 8, xT)) : (o(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (o(), i("svg", TT, [
            s("path", {
              d: l.iconPath
            }, null, 8, MT)
          ]))
        ], 8, ET))
      ], 64))), 128))
    ]));
  }
}), Lc = /* @__PURE__ */ Me(PT, [["__scopeId", "data-v-4f846342"]]), RT = { class: "footer-info" }, DT = ["title"], LT = {
  key: 0,
  class: "dev-badge"
}, NT = { class: "made-by" }, UT = /* @__PURE__ */ Ee({
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
    }), (u, d) => (o(), i("div", RT, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(m(it(Bo)) + " ", 1),
        r.value ? (o(), i("span", LT, "dev")) : y("", !0)
      ], 8, DT),
      s("span", NT, [
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
        x(" by " + m(it($T)), 1)
      ])
    ]));
  }
}), Nc = /* @__PURE__ */ Me(UT, [["__scopeId", "data-v-4fa265b3"]]), OT = /* @__PURE__ */ Ee({
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
    return (r, c) => (o(), R(Pt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        b(bc, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          b(Oe, {
            variant: "primary",
            disabled: !((u = n.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Oe, {
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
}), AT = /* @__PURE__ */ Me(OT, [["__scopeId", "data-v-fac00ae7"]]), zT = { class: "header-actions" }, FT = {
  key: 0,
  class: "wizard-step"
}, BT = { class: "form-field" }, VT = ["placeholder"], WT = {
  key: 0,
  class: "form-error"
}, GT = { class: "form-field form-field--checkbox" }, jT = { class: "form-checkbox" }, HT = {
  key: 0,
  class: "form-field"
}, qT = ["placeholder"], KT = {
  key: 0,
  class: "form-info"
}, JT = {
  key: 1,
  class: "form-suggestion"
}, QT = {
  key: 2,
  class: "form-error"
}, YT = {
  key: 3,
  class: "form-info"
}, XT = {
  key: 1,
  class: "wizard-step"
}, ZT = {
  key: 0,
  class: "progress-check-loading"
}, eM = {
  key: 0,
  class: "cli-warning"
}, tM = { class: "cli-warning-header" }, sM = {
  key: 1,
  class: "env-landing"
}, nM = { class: "env-list" }, oM = ["value"], aM = { class: "env-name" }, lM = {
  key: 2,
  class: "env-create"
}, iM = { class: "form-field" }, rM = { class: "form-field" }, cM = ["value"], uM = { class: "form-field" }, dM = ["disabled"], mM = ["value"], fM = { class: "form-field" }, vM = ["value"], pM = { class: "form-field form-field--checkbox" }, gM = { class: "form-checkbox" }, hM = {
  key: 0,
  class: "form-error"
}, yM = {
  key: 1,
  class: "env-creating"
}, wM = { class: "creating-intro" }, _M = {
  key: 3,
  class: "env-import"
}, kM = { class: "wizard-footer" }, bM = { class: "wizard-footer-actions" }, xn = 10, $M = 600 * 1e3, Oi = 1800 * 1e3, CM = /* @__PURE__ */ Ee({
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
    } = ft(), p = _(n.initialStep || 1), w = _(null), g = _("landing"), k = _(!1), $ = _(!1), S = _(!1), C = _(!1), I = _(null), E = _(n.initialStep === 2), P = _(n.defaultPath), O = _(!!n.detectedModelsDir), U = _(n.detectedModelsDir || ""), F = _(null), D = _(null), W = _(null), ce = _(null), de = _("my-new-env"), J = _(Cc), ue = _("latest"), K = _(xc), N = _(!0), G = _(null), pe = _(null), te = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), oe = _(!1), re = _(!1), H = _(!1), se = _({ progress: 0, message: "" }), ie = _({ progress: 0, message: "" }), Ie = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], he = _(0), Fe = _(null), Ne = _(0), be = _(null), Re = M(() => {
      var Ue, Xe;
      const ke = (Ue = P.value) == null ? void 0 : Ue.trim(), ee = !F.value, Ke = !O.value || !D.value && ((Xe = U.value) == null ? void 0 : Xe.trim());
      return ke && ee && Ke;
    }), ge = M(() => {
      var ke;
      return (ke = de.value) == null ? void 0 : ke.trim();
    }), $e = M(() => !!(p.value === 2 || pe.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), T = M(() => pe.value || n.workspacePath || null);
    async function z() {
      var ke;
      if (F.value = null, !!((ke = P.value) != null && ke.trim()))
        try {
          const ee = await c({ path: P.value, type: "workspace" });
          ee.valid || (F.value = ee.error || "Invalid path");
        } catch (ee) {
          F.value = ee instanceof Error ? ee.message : "Validation failed";
        }
    }
    async function ae() {
      var ke;
      if (D.value = null, W.value = null, ce.value = null, !!((ke = U.value) != null && ke.trim()))
        try {
          const ee = await c({ path: U.value, type: "models" });
          if (ee.valid)
            ce.value = ee.model_count ?? null;
          else if (D.value = ee.error || "Invalid path", ee.suggestion) {
            W.value = ee.suggestion, U.value = ee.suggestion, D.value = null;
            const Ke = await c({ path: ee.suggestion, type: "models" });
            Ke.valid && (ce.value = Ke.model_count ?? null);
          }
        } catch (ee) {
          D.value = ee instanceof Error ? ee.message : "Validation failed";
        }
    }
    async function Te() {
      var ke, ee, Ke, Ue, Xe;
      if (F.value = null, D.value = null, await z(), (ke = F.value) != null && ke.includes("already exists")) {
        F.value = null, pe.value = ((ee = P.value) == null ? void 0 : ee.trim()) || n.defaultPath, p.value = 2, Se();
        return;
      }
      if (!F.value && !(O.value && ((Ke = U.value) != null && Ke.trim()) && (await ae(), D.value))) {
        re.value = !0;
        try {
          await l({
            workspace_path: ((Ue = P.value) == null ? void 0 : Ue.trim()) || n.defaultPath,
            models_directory: O.value && ((Xe = U.value) == null ? void 0 : Xe.trim()) || null
          }), he.value = 0, Fe.value = Date.now();
          const Le = setInterval(async () => {
            var Ae;
            if (Fe.value && Date.now() - Fe.value > $M) {
              clearInterval(Le), re.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const He = await r();
              if (he.value = 0, He.state === "idle" && re.value) {
                clearInterval(Le), re.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              se.value = { progress: He.progress, message: He.message }, He.state === "complete" ? (clearInterval(Le), re.value = !1, pe.value = ((Ae = P.value) == null ? void 0 : Ae.trim()) || n.defaultPath, p.value = 2, Se()) : He.state === "error" && (clearInterval(Le), re.value = !1, F.value = He.error || "Workspace creation failed");
            } catch (He) {
              he.value++, console.warn(`Polling failure ${he.value}/${xn}:`, He), he.value >= xn && (clearInterval(Le), re.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Le) {
          re.value = !1, F.value = Le instanceof Error ? Le.message : "Failed to create workspace";
        }
      }
    }
    async function xe() {
      H.value = !0, G.value = null;
      try {
        const ke = {
          name: de.value.trim() || "my-new-env",
          python_version: J.value,
          comfyui_version: ue.value,
          torch_backend: K.value,
          switch_after: N.value,
          workspace_path: pe.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ke)).status === "started") {
          Ne.value = 0, be.value = Date.now();
          const Ke = setInterval(async () => {
            if (be.value && Date.now() - be.value > Oi) {
              clearInterval(Ke), H.value = !1, G.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ue = await d();
              if (Ne.value = 0, Ue.state === "idle" && H.value) {
                clearInterval(Ke), H.value = !1, G.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ie.value = {
                progress: Ue.progress ?? 0,
                message: Ue.message,
                phase: Ue.phase
              }, Ue.state === "complete") {
                clearInterval(Ke), H.value = !1;
                const Xe = Ue.environment_name || ke.name;
                N.value ? a("complete", Xe, pe.value) : (g.value = "landing", a("environment-created-no-switch", Xe));
              } else Ue.state === "error" && (clearInterval(Ke), H.value = !1, G.value = Ue.error || "Environment creation failed");
            } catch (Ue) {
              Ne.value++, console.warn(`Polling failure ${Ne.value}/${xn}:`, Ue), Ne.value >= xn && (clearInterval(Ke), H.value = !1, G.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ke) {
        H.value = !1, G.value = ke instanceof Error ? ke.message : "Unknown error";
      }
    }
    async function Se() {
      oe.value = !0;
      try {
        te.value = await v();
      } catch (ke) {
        console.error("Failed to load ComfyUI releases:", ke);
      } finally {
        oe.value = !1;
      }
    }
    function Y() {
      w.value && a("switch-environment", w.value, pe.value);
    }
    function j() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && n.setupState === "no_workspace" && (p.value = 1);
    }
    function ve(ke, ee) {
      $.value = !1, ee ? a("complete", ke, pe.value) : (a("environment-created-no-switch", ke), g.value = "landing");
    }
    function _e() {
    }
    dt(async () => {
      if (n.detectedModelsDir && (U.value = n.detectedModelsDir), n.workspacePath && (pe.value = n.workspacePath), p.value === 2) {
        Se();
        const ke = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await je(), clearTimeout(ke), E.value = !1;
      }
    });
    async function je() {
      try {
        const ke = await d();
        if (console.log("[ComfyGit] Create progress check:", ke.state, ke), ke.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ke.environment_name), g.value = "create", H.value = !0, de.value = ke.environment_name || "my-new-env", ie.value = {
            progress: ke.progress ?? 0,
            message: ke.message,
            phase: ke.phase
          }, Ve();
          return;
        }
      } catch (ke) {
        console.log("[ComfyGit] Create progress check failed:", ke);
      }
      try {
        const ke = await f();
        console.log("[ComfyGit] Import progress check:", ke.state, ke), ke.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ke.environment_name), I.value = {
          message: ke.message || "Importing...",
          phase: ke.phase || "",
          progress: ke.progress ?? 0,
          environmentName: ke.environment_name || ""
        }, C.value = !0, g.value = "import", $.value = !0);
      } catch (ke) {
        console.log("[ComfyGit] Import progress check failed:", ke);
      }
    }
    async function Ve() {
      Ne.value = 0, be.value = Date.now();
      let ke = null;
      const ee = async () => {
        if (be.value && Date.now() - be.value > Oi)
          return ke && clearInterval(ke), H.value = !1, G.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ue = await d();
          if (Ne.value = 0, Ue.state === "idle" && H.value)
            return ke && clearInterval(ke), H.value = !1, G.value = "Environment creation was interrupted. Please try again.", !1;
          if (ie.value = {
            progress: Ue.progress ?? 0,
            message: Ue.message,
            phase: Ue.phase
          }, Ue.state === "complete") {
            ke && clearInterval(ke), H.value = !1;
            const Xe = Ue.environment_name || de.value;
            return a("complete", Xe, pe.value), !1;
          } else if (Ue.state === "error")
            return ke && clearInterval(ke), H.value = !1, G.value = Ue.error || "Environment creation failed", !1;
          return !0;
        } catch (Ue) {
          return Ne.value++, console.warn(`Polling failure ${Ne.value}/${xn}:`, Ue), Ne.value >= xn ? (ke && clearInterval(ke), H.value = !1, G.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await ee() && (ke = setInterval(async () => {
        !await ee() && ke && clearInterval(ke);
      }, 2e3));
    }
    return (ke, ee) => (o(), i(B, null, [
      b(Pt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: ee[15] || (ee[15] = (Ke) => ke.$emit("close"))
      }, {
        header: h(() => [
          ee[20] || (ee[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", zT, [
            b(Lc),
            ee[19] || (ee[19] = s("span", { class: "header-divider" }, null, -1)),
            $e.value ? (o(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: ee[0] || (ee[0] = (Ke) => k.value = !0)
            }, [...ee[17] || (ee[17] = [
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
              onClick: ee[1] || (ee[1] = (Ke) => ke.$emit("close")),
              title: "Close"
            }, [...ee[18] || (ee[18] = [
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
            p.value === 1 ? (o(), i("div", FT, [
              ee[24] || (ee[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", BT, [
                ee[21] || (ee[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Ft(s("input", {
                  "onUpdate:modelValue": ee[2] || (ee[2] = (Ue) => P.value = Ue),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, VT), [
                  [go, P.value]
                ]),
                F.value ? (o(), i("p", WT, m(F.value), 1)) : y("", !0)
              ]),
              s("div", GT, [
                s("label", jT, [
                  Ft(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": ee[3] || (ee[3] = (Ue) => O.value = Ue)
                  }, null, 512), [
                    [la, O.value]
                  ]),
                  ee[22] || (ee[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              O.value ? (o(), i("div", HT, [
                ee[23] || (ee[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Ft(s("input", {
                  "onUpdate:modelValue": ee[4] || (ee[4] = (Ue) => U.value = Ue),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, qT), [
                  [go, U.value]
                ]),
                e.detectedModelsDir && !U.value ? (o(), i("p", KT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                W.value ? (o(), i("p", JT, " Did you mean: " + m(W.value), 1)) : y("", !0),
                D.value ? (o(), i("p", QT, m(D.value), 1)) : y("", !0),
                ce.value !== null && !D.value ? (o(), i("p", YT, " Found " + m(ce.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              re.value ? (o(), R(ia, {
                key: 1,
                progress: se.value.progress,
                message: se.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (o(), i("div", XT, [
              E.value ? (o(), i("div", ZT, [...ee[25] || (ee[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (o(), i(B, { key: 1 }, [
                !n.cliInstalled && !S.value ? (o(), i("div", eM, [
                  s("div", tM, [
                    ee[27] || (ee[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    ee[28] || (ee[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: ee[5] || (ee[5] = (Ue) => S.value = !0),
                      title: "Dismiss"
                    }, [...ee[26] || (ee[26] = [
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
                  ee[29] || (ee[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  ee[30] || (ee[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (o(), i("div", sM, [
                  ee[34] || (ee[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: ee[6] || (ee[6] = (Ue) => g.value = "create")
                  }, [...ee[31] || (ee[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: ee[7] || (ee[7] = (Ue) => {
                      C.value = !1, g.value = "import";
                    })
                  }, [...ee[32] || (ee[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ke = n.existingEnvironments) != null && Ke.length ? (o(), i(B, { key: 0 }, [
                    ee[33] || (ee[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", nM, [
                      (o(!0), i(B, null, we(n.existingEnvironments, (Ue) => (o(), i("label", {
                        key: Ue,
                        class: Be(["env-option", { selected: w.value === Ue }])
                      }, [
                        Ft(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ue,
                          "onUpdate:modelValue": ee[8] || (ee[8] = (Xe) => w.value = Xe)
                        }, null, 8, oM), [
                          [qo, w.value]
                        ]),
                        s("span", aM, m(Ue), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (o(), i("div", lM, [
                  H.value ? (o(), i("div", yM, [
                    s("p", wM, [
                      ee[41] || (ee[41] = x(" Creating environment ", -1)),
                      s("strong", null, m(de.value), 1),
                      ee[42] || (ee[42] = x("... ", -1))
                    ]),
                    b(ia, {
                      progress: ie.value.progress,
                      message: ie.value.message,
                      "current-phase": ie.value.phase,
                      "show-steps": !0,
                      steps: Ie
                    }, null, 8, ["progress", "message", "current-phase"]),
                    ee[43] || (ee[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (o(), i(B, { key: 0 }, [
                    ee[40] || (ee[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", iM, [
                      ee[35] || (ee[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Ft(s("input", {
                        "onUpdate:modelValue": ee[9] || (ee[9] = (Ue) => de.value = Ue),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [go, de.value]
                      ])
                    ]),
                    s("div", rM, [
                      ee[36] || (ee[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Ft(s("select", {
                        "onUpdate:modelValue": ee[10] || (ee[10] = (Ue) => J.value = Ue),
                        class: "form-select"
                      }, [
                        (o(!0), i(B, null, we(it($c), (Ue) => (o(), i("option", {
                          key: Ue,
                          value: Ue
                        }, m(Ue), 9, cM))), 128))
                      ], 512), [
                        [Nn, J.value]
                      ])
                    ]),
                    s("div", uM, [
                      ee[37] || (ee[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ft(s("select", {
                        "onUpdate:modelValue": ee[11] || (ee[11] = (Ue) => ue.value = Ue),
                        class: "form-select",
                        disabled: oe.value
                      }, [
                        (o(!0), i(B, null, we(te.value, (Ue) => (o(), i("option", {
                          key: Ue.tag_name,
                          value: Ue.tag_name
                        }, m(Ue.name), 9, mM))), 128))
                      ], 8, dM), [
                        [Nn, ue.value]
                      ])
                    ]),
                    s("div", fM, [
                      ee[38] || (ee[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ft(s("select", {
                        "onUpdate:modelValue": ee[12] || (ee[12] = (Ue) => K.value = Ue),
                        class: "form-select"
                      }, [
                        (o(!0), i(B, null, we(it(Al), (Ue) => (o(), i("option", {
                          key: Ue,
                          value: Ue
                        }, m(Ue) + m(Ue === "auto" ? " (detect GPU)" : ""), 9, vM))), 128))
                      ], 512), [
                        [Nn, K.value]
                      ])
                    ]),
                    s("div", pM, [
                      s("label", gM, [
                        Ft(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": ee[13] || (ee[13] = (Ue) => N.value = Ue)
                        }, null, 512), [
                          [la, N.value]
                        ]),
                        ee[39] || (ee[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    G.value ? (o(), i("div", hM, m(G.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (o(), i("div", _M, [
                  b(Ec, {
                    "workspace-path": pe.value,
                    "resume-import": C.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: ve,
                    onImportStarted: ee[14] || (ee[14] = (Ue) => $.value = !0),
                    onSourceCleared: _e
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", kM, [
            b(Nc),
            s("div", bM, [
              p.value === 1 ? (o(), R(Oe, {
                key: 0,
                variant: "primary",
                disabled: !Re.value || re.value,
                onClick: Te
              }, {
                default: h(() => [
                  x(m(re.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (o(), i(B, { key: 1 }, [
                !H.value && !$.value && (g.value !== "landing" || n.setupState === "no_workspace" && !pe.value) ? (o(), R(Oe, {
                  key: 0,
                  variant: "secondary",
                  onClick: j
                }, {
                  default: h(() => [...ee[44] || (ee[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (o(), R(Oe, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || H.value,
                  onClick: xe
                }, {
                  default: h(() => [
                    x(m(H.value ? "Creating..." : N.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (o(), R(Oe, {
                  key: 2,
                  variant: "primary",
                  onClick: Y
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
      k.value ? (o(), R(AT, {
        key: 0,
        "workspace-path": T.value,
        onClose: ee[16] || (ee[16] = (Ke) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), xM = /* @__PURE__ */ Me(CM, [["__scopeId", "data-v-9a9aadc0"]]), SM = { class: "update-banner" }, IM = { class: "update-banner__left" }, EM = { class: "update-banner__title" }, TM = {
  key: 0,
  class: "update-banner__summary"
}, MM = { class: "update-banner__actions" }, PM = ["disabled"], RM = ["disabled"], DM = ["disabled"], LM = /* @__PURE__ */ Ee({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", SM, [
      s("div", IM, [
        s("div", EM, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (o(), i("div", TM, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", MM, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => n("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, PM),
        e.info.release_url ? (o(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => n("release-notes"))
        }, " Release notes ", 8, RM)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => n("dismiss"))
        }, " Dismiss ", 8, DM)
      ])
    ]));
  }
}), NM = /* @__PURE__ */ Me(LM, [["__scopeId", "data-v-49562c5c"]]), Uc = "ComfyGit.UpdateNotice.DismissedVersion";
function UM() {
  try {
    return localStorage.getItem(Uc);
  } catch {
    return null;
  }
}
function OM(e) {
  try {
    localStorage.setItem(Uc, e);
  } catch {
  }
}
function AM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : UM() !== e.latest_version;
}
const zM = { class: "comfygit-panel" }, FM = { class: "panel-header" }, BM = { class: "header-left" }, VM = {
  key: 0,
  class: "header-info"
}, WM = { class: "header-actions" }, GM = { class: "env-switcher" }, jM = { class: "env-switcher-header" }, HM = { class: "env-control-buttons" }, qM = {
  key: 0,
  class: "header-info"
}, KM = { class: "branch-name" }, JM = { class: "panel-main" }, QM = { class: "sidebar" }, YM = { class: "sidebar-content" }, XM = { class: "sidebar-section" }, ZM = { class: "sidebar-section" }, eP = { class: "sidebar-section" }, tP = { class: "sidebar-footer" }, sP = { class: "content-area" }, nP = {
  key: 0,
  class: "error-message"
}, oP = {
  key: 1,
  class: "loading"
}, aP = { class: "dialog-content env-selector-dialog" }, lP = { class: "dialog-header" }, iP = { class: "dialog-body" }, rP = { class: "env-list" }, cP = { class: "env-info" }, uP = { class: "env-name-row" }, dP = { class: "env-indicator" }, mP = { class: "env-name" }, fP = {
  key: 0,
  class: "env-branch"
}, vP = {
  key: 1,
  class: "current-label"
}, pP = { class: "env-stats" }, gP = ["onClick"], hP = { class: "toast-container" }, yP = { class: "toast-message" }, Ai = "ComfyGit.LastView", zi = "ComfyGit.LastSection", Fi = 50, wP = /* @__PURE__ */ Ee({
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
      repairWorkflowModels: C,
      getSetupStatus: I,
      getUpdateCheck: E,
      updateManager: P
    } = ft(), O = Qh(), U = _(null), F = _([]), D = _(!1), W = _(!1), ce = _([]), de = _([]), J = M(() => de.value.find((ne) => ne.is_current)), ue = _(null), K = _(!1), N = _(!1), G = _("remotes");
    function pe(ne) {
      return ne ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[ne] ?? "manifest" : "manifest";
    }
    const te = _(pe(n.initialView)), oe = _(null), re = _(!1), H = _(1), se = M(() => {
      var ne;
      return ((ne = oe.value) == null ? void 0 : ne.state) || "managed";
    }), ie = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, Ie = M(() => {
      var ne, V;
      return ((V = (ne = oe.value) == null ? void 0 : ne.runtime_context) == null ? void 0 : V.capabilities) || ie;
    }), he = _(!1), Fe = _(null), Ne = _(null), be = _(!1), Re = _(null), ge = _(!1), $e = _(!1), T = M(() => !ge.value && AM(Re.value)), z = _(null), ae = _(null), Te = _(null), xe = _(!1), Se = _(!1), Y = _(""), j = _(null), ve = _({ state: "idle", progress: 0, message: "" });
    let _e = null, je = null;
    const Ve = {
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
    }, ke = n.initialView ? Ve[n.initialView] : null, ee = [
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
    function Ue() {
      try {
        const ne = sessionStorage.getItem(Ai), V = sessionStorage.getItem(zi), qe = ne === "branches" || ne === "history" || ne === "remotes" ? "version-control" : ne === "manifest" || ne === "debug-env" || ne === "debug-workspace" ? "diagnostics" : ne, nt = V === "all-envs" ? "workspace" : V === "sharing" ? "version-control" : V;
        if (ne && V && ee.includes(qe) && Ke.includes(nt))
          return { view: qe, section: nt };
      } catch {
      }
      return null;
    }
    const Xe = Ue(), Le = _((ke == null ? void 0 : ke.view) ?? (Xe == null ? void 0 : Xe.view) ?? "status"), Ae = _((ke == null ? void 0 : ke.section) ?? (Xe == null ? void 0 : Xe.section) ?? "this-env");
    function He(ne, V) {
      Le.value = ne, Ae.value = V;
      try {
        sessionStorage.setItem(Ai, ne), sessionStorage.setItem(zi, V);
      } catch {
      }
    }
    function kt(ne) {
      const qe = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ne];
      qe && He(qe.view, qe.section);
    }
    function Ut(ne) {
      G.value = ne, He("version-control", "version-control");
    }
    function Gt(ne) {
      te.value = ne, He("diagnostics", "diagnostics");
    }
    function X() {
      Ut("branches");
    }
    function Z() {
      a("close"), setTimeout(async () => {
        await fe("Comfy.OpenManagerDialog") || await fe("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Qe(["Extensions", "Manage extensions"]) || Qe(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function fe(ne) {
      var nt, wt;
      const V = window.app, qe = [
        (nt = V == null ? void 0 : V.extensionManager) == null ? void 0 : nt.command,
        (wt = V == null ? void 0 : V.extensionManager) == null ? void 0 : wt.commands,
        V == null ? void 0 : V.command,
        V == null ? void 0 : V.commands
      ];
      for (const It of qe)
        if (typeof (It == null ? void 0 : It.execute) == "function")
          try {
            return await It.execute(ne), !0;
          } catch (A) {
            console.debug(`[ComfyGit] Command ${ne} did not open Extensions manager`, A);
          }
      return !1;
    }
    function Qe(ne) {
      var nt, wt, It;
      const V = ne.map((A) => A.toLowerCase()), qe = document.querySelectorAll('button, [role="button"]');
      for (const A of qe) {
        const ye = A;
        if ([
          (nt = ye.textContent) == null ? void 0 : nt.trim(),
          (wt = ye.getAttribute("title")) == null ? void 0 : wt.trim(),
          (It = ye.getAttribute("aria-label")) == null ? void 0 : It.trim()
        ].filter(Boolean).map((vt) => vt.toLowerCase()).some((vt) => V.includes(vt)))
          return ye.click(), !0;
      }
      return !1;
    }
    const De = _(null), lt = _(!1), et = _(!1), gt = _([]);
    let Rt = 0;
    function Ye(ne, V = "info", qe = 3e3) {
      const nt = ++Rt;
      return gt.value.push({ id: nt, message: ne, type: V }), qe > 0 && setTimeout(() => {
        gt.value = gt.value.filter((wt) => wt.id !== nt);
      }, qe), nt;
    }
    function $t(ne) {
      gt.value = gt.value.filter((V) => V.id !== ne);
    }
    function Yt(ne, V) {
      Ye(ne, V);
    }
    async function os() {
      Re.value = null, ge.value = !1;
      try {
        Re.value = await E();
      } catch {
      }
    }
    function q() {
      var V;
      const ne = (V = Re.value) == null ? void 0 : V.release_url;
      if (ne)
        try {
          window.open(ne, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function me() {
      var V;
      const ne = (V = Re.value) == null ? void 0 : V.latest_version;
      ne && OM(ne), ge.value = !0;
    }
    async function ze() {
      if ($e.value) return;
      $e.value = !0;
      const ne = Ye("Updating comfygit-manager...", "info", 0);
      try {
        const V = await P();
        if ($t(ne), V.status !== "success") {
          if (Ye(V.message || "Update failed", "error"), V.manual_instructions) {
            const qe = V.manual_instructions.split(`
`).map((nt) => nt.trim()).filter(Boolean);
            De.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: qe,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                De.value = null;
              }
            };
          }
          return;
        }
        if (Ye(V.message || "Update complete", "success"), me(), V.restart_required) {
          mt();
          try {
            await Ks("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (V) {
        $t(ne);
        const qe = V instanceof Error ? V.message : "Update failed";
        Ye(qe, "error");
      } finally {
        $e.value = !1;
      }
    }
    const Ce = M(() => {
      if (!U.value) return "neutral";
      const ne = U.value.workflows, V = ne.new.length > 0 || ne.modified.length > 0 || ne.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? V ? "warning" : "success" : "error";
    });
    M(() => U.value ? Ce.value === "success" ? "All synced" : Ce.value === "warning" ? "Uncommitted changes" : Ce.value === "error" ? "Not synced" : "" : "");
    async function We(ne = {}) {
      he.value = !0, Fe.value = null;
      try {
        const [V, qe, nt, wt] = await Promise.all([
          l(!0),
          r(Fi),
          c(),
          w()
        ]);
        U.value = V, F.value = qe.commits, D.value = qe.has_more, ce.value = nt.branches, de.value = wt, a("statusUpdate", V), (ne.refreshWorkflows ?? !0) && z.value && await z.value.loadWorkflows(!0);
      } catch (V) {
        Fe.value = V instanceof Error ? V.message : "Failed to load status", U.value = null, F.value = [], D.value = !1, ce.value = [];
      } finally {
        he.value = !1;
      }
    }
    async function Ze() {
      if (!(W.value || !D.value)) {
        W.value = !0;
        try {
          const ne = await r(Fi, F.value.length);
          F.value = [...F.value, ...ne.commits], D.value = ne.has_more;
        } catch (ne) {
          Ye(ne instanceof Error ? ne.message : "Failed to load more commits", "error");
        } finally {
          W.value = !1;
        }
      }
    }
    function ct(ne) {
      Ne.value = ne;
    }
    function ut() {
      return U.value ? U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes : !1;
    }
    async function St(ne) {
      var qe;
      Ne.value = null;
      const V = ut();
      De.value = {
        title: V ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: V ? "You have uncommitted changes that will be lost." : `Checkout commit ${ne.short_hash || ((qe = ne.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: V ? Kn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: V ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: V,
        onConfirm: async () => {
          var It;
          De.value = null, mt();
          const nt = Ye(`Checking out ${ne.short_hash || ((It = ne.hash) == null ? void 0 : It.slice(0, 7))}...`, "info", 0), wt = await u(ne.hash, V);
          $t(nt), wt.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(wt.message || "Checkout failed", "error");
        }
      };
    }
    async function Q(ne) {
      const V = ut();
      De.value = {
        title: V ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: V ? "You have uncommitted changes." : `Switch to branch "${ne}"?`,
        details: V ? Kn() : void 0,
        warning: V ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: V ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          De.value = null, mt();
          const qe = Ye(`Switching to ${ne}...`, "info", 0), nt = await f(ne, V);
          $t(qe), nt.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(nt.message || "Branch switch failed", "error");
        }
      };
    }
    async function L() {
      if (!ut()) {
        Ye("No uncommitted changes to revert", "info");
        return;
      }
      De.value = {
        title: "Revert Uncommitted Changes",
        message: "Discard all uncommitted changes on the current branch?",
        details: Kn(),
        warning: "This permanently discards uncommitted workflow and manifest changes, then restarts ComfyUI from the current HEAD.",
        confirmLabel: "Revert Changes",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          De.value = null, mt();
          const ne = Ye("Reverting uncommitted changes...", "info", 0), V = await v();
          $t(ne), V.status === "success" ? Ye("Restarting ComfyUI...", "success") : Ye(V.message || "Revert failed", "error");
        }
      };
    }
    async function le(ne) {
      const V = Ye(`Creating branch ${ne}...`, "info", 0), qe = await d(ne);
      $t(V), qe.status === "success" ? (Ye(`Branch "${ne}" created`, "success"), await We()) : Ye(qe.message || "Failed to create branch", "error");
    }
    async function Je(ne, V = !1) {
      const qe = async (nt) => {
        var It;
        const wt = Ye(`Deleting branch ${ne}...`, "info", 0);
        try {
          const A = await p(ne, nt);
          $t(wt), A.status === "success" ? (Ye(`Branch "${ne}" deleted`, "success"), await We()) : (It = A.message) != null && It.includes("not fully merged") ? De.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              De.value = null, await qe(!0);
            }
          } : Ye(A.message || "Failed to delete branch", "error");
        } catch (A) {
          $t(wt);
          const ye = A instanceof Error ? A.message : "Failed to delete branch";
          ye.includes("not fully merged") ? De.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              De.value = null, await qe(!0);
            }
          } : Ye(ye, "error");
        }
      };
      De.value = {
        title: "Delete Branch",
        message: `Delete branch "${ne}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          De.value = null, await qe(V);
        }
      };
    }
    async function tt(ne) {
      Ne.value = null;
      const V = prompt("Enter branch name:");
      if (V) {
        const qe = Ye(`Creating branch ${V}...`, "info", 0), nt = await d(V, ne.hash);
        $t(qe), nt.status === "success" ? (Ye(`Branch "${V}" created from ${ne.short_hash}`, "success"), await We()) : Ye(nt.message || "Failed to create branch", "error");
      }
    }
    function mt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function At() {
      if (!Ie.value.can_restart_current) {
        Ye("Restart is not available in this runtime context.", "warning");
        return;
      }
      De.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          De.value = null, mt(), Ye("Restarting environment...", "info");
          try {
            await Ks("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function bs() {
      if (!Ie.value.can_stop_current) {
        Ye("Stop is not available in this runtime context.", "warning");
        return;
      }
      De.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          De.value = null, Ye("Stopping environment...", "info");
          try {
            await Ks("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Xt(ne, V) {
      if (!Ie.value.can_switch_environment) {
        Ye("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      be.value = !1, Y.value = ne, j.value = V || null, xe.value = !0;
    }
    async function ht() {
      xe.value = !1, Se.value = !0, mt(), ve.value = {
        progress: 10,
        state: $s(10),
        message: Lt(10)
      };
      try {
        await g(Y.value, j.value || void 0), Hn(), bn();
      } catch (ne) {
        Vt(), Se.value = !1, Ye(`Failed to initiate switch: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error"), ve.value = { state: "idle", progress: 0, message: "" }, j.value = null;
      }
    }
    function $s(ne) {
      return ne >= 100 ? "complete" : ne >= 80 ? "validating" : ne >= 60 ? "starting" : ne >= 30 ? "syncing" : "preparing";
    }
    function Lt(ne) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[$s(ne)] || "";
    }
    function Hn() {
      if (je) return;
      let ne = 10;
      const V = 60, qe = 5e3, nt = 100, wt = (V - ne) / (qe / nt);
      je = window.setInterval(() => {
        if (ne += wt, ne >= V && (ne = V, Vt()), ve.value.progress < V) {
          const It = Math.floor(ne);
          ve.value = {
            progress: It,
            state: $s(It),
            message: Lt(It)
          };
        }
      }, nt);
    }
    function Vt() {
      je && (clearInterval(je), je = null);
    }
    function bn() {
      _e || (_e = window.setInterval(async () => {
        try {
          let ne = await O.getStatus();
          if ((!ne || ne.state === "idle") && (ne = await k()), !ne)
            return;
          const V = ne.progress || 0;
          V >= 60 && Vt();
          const qe = Math.max(V, ve.value.progress), nt = ne.state && ne.state !== "idle" && ne.state !== "unknown", wt = nt ? ne.state : $s(qe), It = nt && ne.message || Lt(qe);
          ve.value = {
            state: wt,
            progress: qe,
            message: It
          }, ne.state === "complete" ? (Vt(), qn(), Se.value = !1, Ye(`✓ Switched to ${Y.value}`, "success"), await We(), Y.value = "") : ne.state === "rolled_back" ? (Vt(), qn(), Se.value = !1, Ye("Switch failed, restored previous environment", "warning"), Y.value = "") : ne.state === "critical_failure" && (Vt(), qn(), Se.value = !1, Ye(`Critical error during switch: ${ne.message}`, "error"), Y.value = "");
        } catch (ne) {
          console.error("Failed to poll switch progress:", ne);
        }
      }, 1e3));
    }
    function qn() {
      Vt(), _e && (clearInterval(_e), _e = null);
    }
    function ba() {
      var ne;
      xe.value = !1, Y.value = "", (ne = oe.value) != null && ne.state && oe.value.state !== "managed" && (H.value = oe.value.state === "no_workspace" ? 1 : 2, re.value = !0);
    }
    async function $a(ne) {
      lt.value = !1, await We(), Ye(ne.message, ne.success ? "success" : "error");
    }
    async function Ca() {
      et.value = !1;
      const ne = Ye("Syncing environment...", "info", 0);
      try {
        const V = await S("skip", !0);
        if ($t(ne), V.status === "success") {
          const qe = [];
          V.nodes_installed.length && qe.push(`${V.nodes_installed.length} installed`), V.nodes_removed.length && qe.push(`${V.nodes_removed.length} removed`);
          const nt = qe.length ? `: ${qe.join(", ")}` : "";
          Ye(`✓ Environment synced${nt}`, "success"), await We();
        } else {
          const qe = V.errors.length ? V.errors.join("; ") : V.message;
          Ye(`Sync failed: ${qe}`, "error");
        }
      } catch (V) {
        $t(ne), Ye(`Sync error: ${V instanceof Error ? V.message : "Unknown error"}`, "error");
      }
    }
    async function xa(ne) {
      var V;
      try {
        const qe = await C(ne);
        qe.failed.length === 0 ? Ye(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Ye(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await We();
      } catch (qe) {
        Ye(`Repair failed: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
      } finally {
        (V = Te.value) == null || V.resetRepairingState();
      }
    }
    async function Ro() {
      var V, qe;
      const ne = Ye("Repairing environment...", "info", 0);
      try {
        const nt = await S("skip", !0);
        if ($t(ne), nt.status === "success") {
          const wt = [];
          nt.nodes_installed.length && wt.push(`${nt.nodes_installed.length} installed`), nt.nodes_removed.length && wt.push(`${nt.nodes_removed.length} removed`);
          const It = wt.length ? `: ${wt.join(", ")}` : "";
          Ye(`✓ Environment repaired${It}`, "success"), (V = Te.value) == null || V.closeDetailModal(), await We();
        } else {
          const wt = nt.errors.length ? nt.errors.join(", ") : nt.message || "Unknown error";
          Ye(`Repair failed: ${wt}`, "error");
        }
      } catch (nt) {
        $t(ne), Ye(`Repair error: ${nt instanceof Error ? nt.message : "Unknown error"}`, "error");
      } finally {
        (qe = Te.value) == null || qe.resetRepairingEnvironmentState();
      }
    }
    async function Sa(ne, V) {
      Ye(`Environment '${ne}' created`, "success"), await We(), ae.value && await ae.value.loadEnvironments(), V && Ie.value.can_switch_environment && await Xt(ne);
    }
    async function Ia(ne) {
      var V;
      if (!Ie.value.can_delete_environment) {
        Ye("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((V = J.value) == null ? void 0 : V.name) === ne) {
        Ye("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      De.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ne}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          De.value = null;
          try {
            const qe = await $(ne);
            qe.status === "success" ? (Ye(`Environment "${ne}" deleted`, "success"), await We(), ae.value && await ae.value.loadEnvironments()) : Ye(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Ye(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ea(ne, V) {
      re.value = !1;
      try {
        oe.value = await I();
      } catch {
      }
      Ie.value.can_switch_environment && await Xt(ne, V);
    }
    function Ta() {
      re.value = !1, a("close");
    }
    async function Ma(ne, V) {
      await Xt(ne, V);
    }
    async function Pa(ne) {
      K.value = !1, await We(), await Xt(ne);
    }
    function Ra() {
      ue.value = null, K.value = !0;
    }
    function Da(ne) {
      ue.value = ne, N.value = !0;
    }
    function Do() {
      N.value = !1, ue.value = null;
    }
    async function La(ne) {
      oe.value = await I(), console.log(`Environment '${ne}' created. Available for switching.`);
    }
    function Na() {
      if (!Ie.value.can_create_environment) {
        Ye("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      He("environments", "workspace"), setTimeout(() => {
        var ne;
        (ne = ae.value) == null || ne.openCreateModal();
      }, 100);
    }
    function Kn() {
      if (!U.value) return [];
      const ne = [], V = U.value.workflows;
      return V.new.length && ne.push(`${V.new.length} new workflow(s)`), V.modified.length && ne.push(`${V.modified.length} modified workflow(s)`), V.deleted.length && ne.push(`${V.deleted.length} deleted workflow(s)`), U.value.has_changes && ne.length === 0 && ne.push("manifest or environment metadata changes"), ne;
    }
    return dt(async () => {
      try {
        if (oe.value = await I(), oe.value.state === "no_workspace" && Ie.value.can_initialize_workspace) {
          re.value = !0, H.value = 1;
          return;
        }
        if (oe.value.state === "empty_workspace" && Ie.value.can_create_environment) {
          re.value = !0, H.value = 2;
          return;
        }
        if (oe.value.state === "unmanaged" && Ie.value.can_switch_environment) {
          re.value = !0, H.value = 2;
          return;
        }
      } catch (ne) {
        console.warn("Setup status check failed, proceeding normally:", ne);
      }
      await Promise.all([
        We({ refreshWorkflows: !1 }),
        os()
      ]);
    }), (ne, V) => {
      var qe, nt, wt, It, A, ye, Ge, vt, zt, Ms, ms, jt, Jn;
      return o(), i("div", zM, [
        s("div", FM, [
          s("div", BM, [
            V[27] || (V[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (o(), i("div", VM)) : y("", !0)
          ]),
          s("div", WM, [
            b(Lc),
            V[30] || (V[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: he.value }]),
              onClick: We,
              title: "Refresh"
            }, [...V[28] || (V[28] = [
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
              onClick: V[0] || (V[0] = (ot) => a("close")),
              title: "Close"
            }, [...V[29] || (V[29] = [
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
        T.value && Re.value ? (o(), R(NM, {
          key: 0,
          info: Re.value,
          updating: $e.value,
          onUpdate: ze,
          onDismiss: me,
          onReleaseNotes: q
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", GM, [
          s("div", jM, [
            V[31] || (V[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", HM, [
              Ie.value.can_restart_current ? (o(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: At
              }, " Restart ")) : y("", !0),
              Ie.value.can_stop_current ? (o(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: bs
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: V[1] || (V[1] = (ot) => He("environments", "workspace"))
          }, [
            U.value ? (o(), i("div", qM, [
              s("span", null, m(((qe = J.value) == null ? void 0 : qe.name) || ((nt = U.value) == null ? void 0 : nt.environment) || "Loading..."), 1),
              s("span", KM, "(" + m(U.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            V[32] || (V[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", JM, [
          s("div", QM, [
            s("div", YM, [
              s("div", XM, [
                V[33] || (V[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "status" && Ae.value === "this-env" }]),
                  onClick: V[2] || (V[2] = (ot) => He("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "workflows" }]),
                  onClick: V[3] || (V[3] = (ot) => He("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "models-env" }]),
                  onClick: V[4] || (V[4] = (ot) => He("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "nodes" }]),
                  onClick: V[5] || (V[5] = (ot) => He("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "version-control" }]),
                  onClick: V[6] || (V[6] = (ot) => Ut("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              V[36] || (V[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", ZM, [
                V[34] || (V[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "environments" }]),
                  onClick: V[7] || (V[7] = (ot) => He("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "model-index" }]),
                  onClick: V[8] || (V[8] = (ot) => He("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "settings" }]),
                  onClick: V[9] || (V[9] = (ot) => He("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              V[37] || (V[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", eP, [
                V[35] || (V[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "diagnostics" && te.value === "manifest" }]),
                  onClick: V[10] || (V[10] = (ot) => Gt("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Le.value === "diagnostics" && te.value !== "manifest" }]),
                  onClick: V[11] || (V[11] = (ot) => Gt("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", tP, [
              b(Nc)
            ])
          ]),
          s("div", sP, [
            Fe.value ? (o(), i("div", nP, m(Fe.value), 1)) : !U.value && Le.value === "status" ? (o(), i("div", oP, " Loading status... ")) : (o(), i(B, { key: 2 }, [
              Le.value === "status" ? (o(), R(Jh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: Te,
                status: U.value,
                "setup-state": se.value,
                onSwitchBranch: X,
                onCommitChanges: V[12] || (V[12] = (ot) => lt.value = !0),
                onSyncEnvironment: V[13] || (V[13] = (ot) => et.value = !0),
                onViewWorkflows: V[14] || (V[14] = (ot) => He("workflows", "this-env")),
                onViewHistory: V[15] || (V[15] = (ot) => Ut("history")),
                onViewDebug: V[16] || (V[16] = (ot) => Gt("env")),
                onViewNodes: V[17] || (V[17] = (ot) => He("nodes", "this-env")),
                onRepairMissingModels: xa,
                onRepairEnvironment: Ro,
                onStartSetup: V[18] || (V[18] = (ot) => re.value = !0),
                onViewEnvironments: V[19] || (V[19] = (ot) => He("environments", "workspace")),
                onCreateEnvironment: Na
              }, null, 8, ["status", "setup-state"])) : Le.value === "workflows" ? (o(), R(k2, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: We
              }, null, 512)) : Le.value === "models-env" ? (o(), R(I$, {
                key: 2,
                onNavigate: kt
              })) : Le.value === "version-control" ? (o(), R(L6, {
                key: 3,
                commits: F.value,
                "history-has-more": D.value,
                "is-loading-history-more": W.value,
                "current-ref": (wt = U.value) == null ? void 0 : wt.branch,
                branches: ce.value,
                current: ((It = U.value) == null ? void 0 : It.branch) || null,
                "initial-tab": G.value,
                onSelect: ct,
                onCheckout: St,
                onLoadMoreHistory: Ze,
                onSwitch: Q,
                onCreate: le,
                onDelete: Je,
                onRevertCurrent: L,
                onToast: Yt
              }, null, 8, ["commits", "history-has-more", "is-loading-history-more", "current-ref", "branches", "current", "initial-tab"])) : Le.value === "nodes" ? (o(), R(wC, {
                key: 4,
                "version-mismatches": ((ye = (A = U.value) == null ? void 0 : A.comparison) == null ? void 0 : ye.version_mismatches) || [],
                onOpenNodeManager: Z,
                onRepairEnvironment: Ro,
                onToast: Yt
              }, null, 8, ["version-mismatches"])) : Le.value === "diagnostics" ? (o(), R(K6, {
                key: 5,
                "initial-tab": te.value
              }, null, 8, ["initial-tab"])) : Le.value === "environments" ? (o(), R(y3, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ae,
                "can-create": Ie.value.can_create_environment,
                "can-switch": Ie.value.can_switch_environment,
                "can-delete": Ie.value.can_delete_environment,
                onSwitch: Xt,
                onCreated: Sa,
                onDelete: Ia,
                onImport: Ra,
                onExport: Da
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Le.value === "model-index" ? (o(), R(A$, {
                key: 7,
                onRefresh: We
              })) : Le.value === "settings" ? (o(), R(HC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Ne.value ? (o(), R(mE, {
          key: 1,
          commit: Ne.value,
          onClose: V[20] || (V[20] = (ot) => Ne.value = null),
          onCheckout: St,
          onCreateBranch: tt
        }, null, 8, ["commit"])) : y("", !0),
        De.value ? (o(), R(Ol, {
          key: 2,
          title: De.value.title,
          message: De.value.message,
          details: De.value.details,
          warning: De.value.warning,
          confirmLabel: De.value.confirmLabel,
          cancelLabel: De.value.cancelLabel,
          secondaryLabel: De.value.secondaryLabel,
          secondaryAction: De.value.secondaryAction,
          destructive: De.value.destructive,
          onConfirm: De.value.onConfirm,
          onCancel: V[21] || (V[21] = (ot) => De.value = null),
          onSecondary: De.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        K.value ? (o(), R(Pt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: V[22] || (V[22] = (ot) => K.value = !1)
        }, {
          body: h(() => [
            b(n5, {
              embedded: "",
              onImportCompleteSwitch: Pa
            })
          ]),
          _: 1
        })) : y("", !0),
        N.value ? (o(), R(Pt, {
          key: 4,
          title: ue.value ? `EXPORT ENVIRONMENT: ${ue.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Do
        }, {
          body: h(() => [
            b(rS, {
              embedded: "",
              "environment-name": ue.value,
              onClose: Do
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(tT, {
          show: xe.value,
          "from-environment": ((Ge = J.value) == null ? void 0 : Ge.name) || "unknown",
          "to-environment": Y.value,
          onConfirm: ht,
          onClose: ba
        }, null, 8, ["show", "from-environment", "to-environment"]),
        lt.value && U.value ? (o(), R(Dc, {
          key: 5,
          status: U.value,
          "as-modal": !0,
          onClose: V[23] || (V[23] = (ot) => lt.value = !1),
          onCommitted: $a
        }, null, 8, ["status"])) : y("", !0),
        et.value && U.value ? (o(), R(kT, {
          key: 6,
          show: et.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: Ca,
          onClose: V[24] || (V[24] = (ot) => et.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(mT, {
          show: Se.value,
          state: ve.value.state,
          progress: ve.value.progress,
          message: ve.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        be.value ? (o(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: V[26] || (V[26] = bt((ot) => be.value = !1, ["self"]))
        }, [
          s("div", aP, [
            s("div", lP, [
              V[39] || (V[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: V[25] || (V[25] = (ot) => be.value = !1)
              }, [...V[38] || (V[38] = [
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
            s("div", iP, [
              V[40] || (V[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", rP, [
                (o(!0), i(B, null, we(de.value, (ot) => (o(), i("div", {
                  key: ot.name,
                  class: Be(["env-item", { current: ot.is_current }])
                }, [
                  s("div", cP, [
                    s("div", uP, [
                      s("span", dP, m(ot.is_current ? "●" : "○"), 1),
                      s("span", mP, m(ot.name), 1),
                      ot.current_branch ? (o(), i("span", fP, "(" + m(ot.current_branch) + ")", 1)) : y("", !0),
                      ot.is_current ? (o(), i("span", vP, "CURRENT")) : y("", !0)
                    ]),
                    s("div", pP, m(ot.workflow_count) + " workflows • " + m(ot.node_count) + " nodes ", 1)
                  ]),
                  !ot.is_current && Ie.value.can_switch_environment ? (o(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ua) => Xt(ot.name)
                  }, " SWITCH ", 8, gP)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        re.value ? (o(), R(xM, {
          key: 8,
          "default-path": ((vt = oe.value) == null ? void 0 : vt.default_path) || "~/comfygit",
          "detected-models-dir": ((zt = oe.value) == null ? void 0 : zt.detected_models_dir) || null,
          "initial-step": H.value,
          "existing-environments": ((Ms = oe.value) == null ? void 0 : Ms.environments) || [],
          "cli-installed": ((ms = oe.value) == null ? void 0 : ms.cli_installed) ?? !0,
          "setup-state": ((jt = oe.value) == null ? void 0 : jt.state) || "no_workspace",
          "workspace-path": ((Jn = oe.value) == null ? void 0 : Jn.workspace_path) || null,
          onComplete: Ea,
          onClose: Ta,
          onSwitchEnvironment: Ma,
          onEnvironmentCreatedNoSwitch: La
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", hP, [
          b(mm, { name: "toast" }, {
            default: h(() => [
              (o(!0), i(B, null, we(gt.value, (ot) => (o(), i("div", {
                key: ot.id,
                class: Be(["toast", ot.type])
              }, [
                s("span", yP, m(ot.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), _P = /* @__PURE__ */ Me(wP, [["__scopeId", "data-v-c078ce12"]]), kP = { class: "item-header" }, bP = { class: "item-info" }, $P = { class: "filename" }, CP = { class: "metadata" }, xP = { class: "size" }, SP = {
  key: 0,
  class: "type"
}, IP = { class: "item-actions" }, EP = {
  key: 0,
  class: "progress-section"
}, TP = { class: "progress-bar" }, MP = { class: "progress-stats" }, PP = { class: "downloaded" }, RP = { class: "speed" }, DP = {
  key: 0,
  class: "eta"
}, LP = {
  key: 1,
  class: "status-msg paused"
}, NP = {
  key: 2,
  class: "status-msg queued"
}, UP = {
  key: 3,
  class: "status-msg completed"
}, OP = {
  key: 4,
  class: "status-msg failed"
}, AP = {
  key: 0,
  class: "retries"
}, zP = /* @__PURE__ */ Ee({
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
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      s("div", kP, [
        s("div", bP, [
          s("div", $P, m(e.item.filename), 1),
          s("div", CP, [
            s("span", xP, m(a(e.item.size)), 1),
            e.item.type ? (o(), i("span", SP, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", IP, [
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
      e.item.status === "downloading" ? (o(), i("div", EP, [
        s("div", TP, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", MP, [
          s("span", PP, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", RP, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (o(), i("span", DP, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (o(), i("div", LP, " Paused - click Resume to download ")) : e.item.status === "queued" ? (o(), i("div", NP, " Waiting in queue... ")) : e.item.status === "completed" ? (o(), i("div", UP, " ✓ Downloaded ")) : e.item.status === "failed" ? (o(), i("div", OP, [
        x(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (o(), i("span", AP, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ Me(zP, [["__scopeId", "data-v-2110df65"]]), FP = { class: "queue-title" }, BP = { class: "count" }, VP = { class: "queue-actions" }, WP = { class: "action-label" }, GP = {
  key: 0,
  class: "overall-progress"
}, jP = { class: "progress-bar" }, HP = {
  key: 0,
  class: "current-mini"
}, qP = { class: "filename" }, KP = { class: "speed" }, JP = {
  key: 1,
  class: "queue-content"
}, QP = {
  key: 0,
  class: "section"
}, YP = {
  key: 1,
  class: "section"
}, XP = { class: "section-header" }, ZP = { class: "section-label paused" }, eR = { class: "items-list" }, tR = {
  key: 2,
  class: "section"
}, sR = { class: "section-header" }, nR = { class: "section-label" }, oR = { class: "items-list" }, aR = {
  key: 3,
  class: "section"
}, lR = { class: "section-header" }, iR = { class: "section-label" }, rR = { class: "items-list" }, cR = {
  key: 4,
  class: "section"
}, uR = { class: "section-header" }, dR = { class: "section-label failed" }, mR = { class: "items-list" }, fR = /* @__PURE__ */ Ee({
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
    } = jn(), $ = _(!1);
    let S = null;
    Ct(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (P, O) => {
        S && (clearTimeout(S), S = null);
        const U = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, F = O && (O.active > 0 || O.paused > 0);
        U && F && (S = setTimeout(() => {
          k(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = M(() => {
      var U;
      if (t.items.length === 0) return 0;
      const P = l.value.length, O = ((U = n.value) == null ? void 0 : U.progress) || 0;
      return Math.round((P + O / 100) / t.items.length * 100);
    });
    function I(P) {
      f(P);
    }
    function E(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, O) => (o(), R(cs, { to: "body" }, [
      it(u) ? (o(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !$.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: O[0] || (O[0] = (U) => $.value = !$.value)
        }, [
          s("div", FP, [
            O[4] || (O[4] = s("span", { class: "icon" }, "↓", -1)),
            O[5] || (O[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", BP, "(" + m(it(d)) + "/" + m(it(t).items.length) + ")", 1)
          ]),
          s("div", VP, [
            s("span", WP, m($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (o(), i("div", JP, [
          it(n) ? (o(), i("div", QP, [
            O[6] || (O[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Zn, {
              item: it(n),
              onCancel: O[1] || (O[1] = (U) => I(it(n).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          it(c).length > 0 ? (o(), i("div", YP, [
            s("div", XP, [
              s("span", ZP, "Paused (" + m(it(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: O[2] || (O[2] = //@ts-ignore
                (...U) => it(w) && it(w)(...U))
              }, "Resume All")
            ]),
            s("div", eR, [
              (o(!0), i(B, null, we(it(c), (U) => (o(), R(Zn, {
                key: U.id,
                item: U,
                onResume: (F) => it(p)(U.id),
                onRemove: (F) => it(g)(U.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          it(a).length > 0 ? (o(), i("div", tR, [
            s("div", sR, [
              s("span", nR, "Queued (" + m(it(a).length) + ")", 1)
            ]),
            s("div", oR, [
              (o(!0), i(B, null, we(it(a), (U) => (o(), R(Zn, {
                key: U.id,
                item: U,
                onCancel: (F) => I(U.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          it(l).length > 0 ? (o(), i("div", aR, [
            s("div", lR, [
              s("span", iR, "Completed (" + m(it(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: O[3] || (O[3] = //@ts-ignore
                (...U) => it(k) && it(k)(...U))
              }, "Clear")
            ]),
            s("div", rR, [
              (o(!0), i(B, null, we(it(l).slice(0, 3), (U) => (o(), R(Zn, {
                key: U.id,
                item: U,
                onRemove: (F) => it(g)(U.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          it(r).length > 0 ? (o(), i("div", cR, [
            s("div", uR, [
              s("span", dR, "Failed (" + m(it(r).length) + ")", 1)
            ]),
            s("div", mR, [
              (o(!0), i(B, null, we(it(r), (U) => (o(), R(Zn, {
                key: U.id,
                item: U,
                onRetry: (F) => it(v)(U.id),
                onRemove: (F) => it(g)(U.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (o(), i("div", GP, [
          s("div", jP, [
            s("div", {
              class: "progress-fill",
              style: Wt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          it(n) ? (o(), i("div", HP, [
            s("span", qP, m(it(n).filename), 1),
            s("span", KP, m(E(it(n).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), vR = /* @__PURE__ */ Me(fR, [["__scopeId", "data-v-3a3c9607"]]), pR = { class: "detail-header" }, gR = { class: "item-count" }, hR = { class: "resource-list" }, yR = { class: "item-info" }, wR = { class: "item-name" }, _R = {
  key: 0,
  class: "item-subtitle"
}, kR = {
  key: 0,
  class: "installing-badge"
}, bR = ["title"], $R = {
  key: 2,
  class: "installed-badge"
}, CR = {
  key: 3,
  class: "queued-badge"
}, xR = {
  key: 4,
  class: "action-buttons"
}, SR = {
  key: 1,
  class: "no-action"
}, IR = /* @__PURE__ */ Ee({
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
    return (g, k) => (o(), R(Pt, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = ($) => a("close"))
    }, {
      body: h(() => [
        s("div", pR, [
          s("span", gR, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (o(), R(Oe, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: k[0] || (k[0] = ($) => a("bulk-action"))
          }, {
            default: h(() => [
              x(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", hR, [
          (o(!0), i(B, null, we(e.items, ($) => (o(), i("div", {
            key: $.id,
            class: "resource-item"
          }, [
            s("div", yR, [
              s("span", wR, m($.name), 1),
              $.subtitle ? (o(), i("span", _R, m($.subtitle), 1)) : y("", !0)
            ]),
            $.canAction ? (o(), i(B, { key: 0 }, [
              d($) ? (o(), i("span", kR, "Installing...")) : v($) ? (o(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p($)
              }, "Failed ⚠", 8, bR)) : f($) ? (o(), i("span", $R, "Installed")) : u($) ? (o(), i("span", CR, "Queued")) : (o(), i("div", xR, [
                (o(!0), i(B, null, we(w($), (S) => (o(), R(Oe, {
                  key: `${$.id}-${S.key}`,
                  size: "sm",
                  variant: S.variant || "secondary",
                  onClick: (C) => a("action", $, S.key)
                }, {
                  default: h(() => [
                    x(m(S.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (o(), i("span", SR, m($.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: k[1] || (k[1] = ($) => a("close"))
        }, {
          default: h(() => [...k[3] || (k[3] = [
            x("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ER = /* @__PURE__ */ Me(IR, [["__scopeId", "data-v-ec7e9202"]]), TR = {
  key: 0,
  class: "loading-state"
}, MR = {
  key: 1,
  class: "analysis-results"
}, PR = {
  key: 0,
  class: "section"
}, RR = { class: "section-header" }, DR = { class: "section-title" }, LR = { class: "item-list" }, NR = { class: "package-info" }, UR = { class: "package-name" }, OR = { class: "node-count" }, AR = {
  key: 1,
  class: "installing-badge"
}, zR = {
  key: 2,
  class: "queued-badge"
}, FR = ["title"], BR = {
  key: 5,
  class: "installed-badge"
}, VR = {
  key: 1,
  class: "section"
}, WR = { class: "section-header" }, GR = { class: "section-title" }, jR = { class: "item-list" }, HR = { class: "node-type" }, qR = {
  key: 0,
  class: "overflow-note"
}, KR = {
  key: 2,
  class: "section"
}, JR = { class: "section-header" }, QR = { class: "section-title" }, YR = { class: "item-list" }, XR = { class: "node-type" }, ZR = { class: "not-found" }, e7 = {
  key: 0,
  class: "overflow-note"
}, t7 = {
  key: 3,
  class: "section"
}, s7 = { class: "section-header" }, n7 = { class: "section-title" }, o7 = { class: "item-list" }, a7 = { class: "package-info community-info" }, l7 = { class: "community-title-row" }, i7 = { class: "package-name" }, r7 = { class: "node-count" }, c7 = { class: "community-mapping-note" }, u7 = { key: 0 }, d7 = {
  key: 0,
  class: "community-actions"
}, m7 = {
  key: 1,
  class: "installing-badge"
}, f7 = {
  key: 2,
  class: "queued-badge"
}, v7 = ["title"], p7 = {
  key: 5,
  class: "installed-badge"
}, g7 = ["title"], h7 = {
  key: 1,
  class: "no-url"
}, y7 = {
  key: 4,
  class: "section"
}, w7 = { class: "section-header" }, _7 = { class: "section-title" }, k7 = { class: "item-list" }, b7 = { class: "model-info" }, $7 = { class: "model-name" }, C7 = {
  key: 1,
  class: "queued-badge"
}, x7 = {
  key: 1,
  class: "no-url"
}, S7 = { class: "dont-show-again" }, I7 = 3e4, E7 = /* @__PURE__ */ Ee({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = _(!1), n = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Map()), f = _(/* @__PURE__ */ new Set()), v = _(!1), p = _(null), w = _(0), g = _(null), k = _(!1), $ = _(!1), S = _(!1), C = _(null), I = _(null), E = _(null), P = _(/* @__PURE__ */ new Set()), O = _(/* @__PURE__ */ new Map()), U = _(/* @__PURE__ */ new Map()), { addToQueue: F } = jn(), {
      queueNodeInstall: D,
      previewNodeDependencyChanges: W,
      applyReviewedNodeDependencyChanges: ce
    } = ft(), de = M(() => {
      var q;
      return ((q = a.value) == null ? void 0 : q.package_aliases) || {};
    });
    function J(q) {
      if (!q) return null;
      const me = de.value;
      let ze = q;
      const Ce = /* @__PURE__ */ new Set();
      for (; me[ze] && !Ce.has(ze); )
        Ce.add(ze), ze = me[ze];
      return ze;
    }
    function ue(q, me) {
      return q instanceof Error && q.message ? q.message : typeof q == "string" && q.trim().length > 0 ? q : me;
    }
    function K(q) {
      for (const [me, ze] of O.value.entries())
        ze === q && O.value.delete(me);
    }
    function N(q, me, ze) {
      var Ce, We;
      u.value.delete(q), c.value.delete(q), d.value.set(q, me), console.warn("[ComfyGit] Package requires dependency review:", {
        packageId: q,
        reason: ((Ce = ze == null ? void 0 : ze.dependency_review) == null ? void 0 : Ce.reason) || ((We = ze == null ? void 0 : ze.messages) == null ? void 0 : We[0])
      });
    }
    async function G(q) {
      const me = d.value.get(q);
      if (!(!me || Ie.value)) {
        k.value = !0, $.value = !0, S.value = !1, C.value = null, I.value = null, E.value = q;
        try {
          const ze = await W(me);
          I.value = ze.preview, ze.preview.success || (C.value = ze.preview.error || "Unable to generate dependency preview");
        } catch (ze) {
          C.value = ue(ze, "Unable to generate dependency preview");
        } finally {
          $.value = !1;
        }
      }
    }
    async function pe() {
      const q = E.value, me = I.value, ze = q ? d.value.get(q) : null;
      if (!(!q || !me || !ze || S.value)) {
        S.value = !0, C.value = null;
        try {
          const Ce = await ce({
            ...ze,
            accepted_preview: {
              baseline_fingerprint: me.baseline_fingerprint,
              diff_fingerprint: me.diff_fingerprint,
              proposed_fingerprint: me.proposed_fingerprint
            }
          });
          if (Ce.status !== "success")
            throw new Error(Ce.error || Ce.message || "Unable to apply dependency changes");
          d.value.delete(q), u.value.delete(q), c.value.delete(q), r.value.add(q), w.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: 1 }
          })), te();
        } catch (Ce) {
          C.value = ue(Ce, "Unable to apply dependency changes");
        } finally {
          S.value = !1;
        }
      }
    }
    function te() {
      k.value = !1, $.value = !1, S.value = !1, C.value = null, I.value = null, E.value = null;
    }
    function oe(q) {
      if (!U.value.has(q)) return;
      const me = U.value.get(q);
      clearTimeout(me), U.value.delete(q);
    }
    function re() {
      for (const q of U.value.values())
        clearTimeout(q);
      U.value = /* @__PURE__ */ new Map();
    }
    function H(q) {
      oe(q);
      const me = setTimeout(() => {
        if (U.value.delete(q), !c.value.has(q)) return;
        K(q), c.value.delete(q), p.value === q && (p.value = null), u.value.set(q, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", q);
      }, I7);
      U.value.set(q, me);
    }
    function se(q) {
      const me = `Cannot install "${q.title}" - package_id is missing`;
      u.value.set(q.item_id, me), n.value = me, console.warn("[ComfyGit] Community install requested without package_id:", q);
    }
    const ie = M(() => he.value.length > 0 || Ne.value.length > 0 || be.value.length > 0 || Re.value.length > 0 || xe.value.length > 0), Ie = M(() => O.value.size > 0 || c.value.size > 0 || !!p.value), he = M(() => {
      var ze, Ce;
      if (!((ze = a.value) != null && ze.nodes)) return [];
      const q = /* @__PURE__ */ new Map(), me = (a.value.nodes.resolved || []).filter((We) => {
        var Ze;
        return !We.is_installed && ((Ze = We.package) == null ? void 0 : Ze.package_id);
      });
      for (const We of me) {
        const Ze = J(We.package.package_id);
        if (!Ze) continue;
        q.has(Ze) || q.set(Ze, {
          package_id: Ze,
          title: We.package.title || Ze,
          node_count: 0,
          node_types: [],
          repository: We.package.repository || null,
          latest_version: We.package.latest_version || null
        });
        const ct = q.get(Ze);
        ct.node_count++, ct.node_types.push(((Ce = We.reference) == null ? void 0 : Ce.node_type) || We.node_type);
      }
      return Array.from(q.values());
    }), Fe = M(() => he.value.reduce((q, me) => q + me.node_count, 0)), Ne = M(() => {
      var q;
      return (q = a.value) != null && q.nodes ? (a.value.nodes.unresolved || []).map((me) => {
        var ze;
        return {
          node_type: ((ze = me.reference) == null ? void 0 : ze.node_type) || me.node_type
        };
      }) : [];
    }), be = M(() => {
      var me;
      if (!((me = a.value) != null && me.nodes)) return [];
      const q = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ze) => {
        var We;
        const Ce = ((We = ze.reference) == null ? void 0 : We.node_type) || ze.node_type;
        return {
          node_type: Ce,
          guidance: ze.guidance || q[Ce] || null
        };
      });
    }), Re = M(() => {
      var ze, Ce, We, Ze, ct, ut, St, Q;
      if (!((ze = a.value) != null && ze.nodes)) return [];
      const q = a.value.node_guidance || {}, me = /* @__PURE__ */ new Map();
      for (const L of a.value.nodes.uninstallable || []) {
        const le = ((Ce = L.reference) == null ? void 0 : Ce.node_type) || L.node_type, Je = J(((We = L.package) == null ? void 0 : We.package_id) || null), tt = Je || `node:${le}`;
        me.has(tt) || me.set(tt, {
          item_id: tt,
          node_type: le,
          title: ((Ze = L.package) == null ? void 0 : Ze.title) || Je || le,
          node_count: 0,
          package_id: Je,
          repository: ((ct = L.package) == null ? void 0 : ct.repository) || null,
          latest_version: ((ut = L.package) == null ? void 0 : ut.latest_version) || null,
          guidance: L.guidance || q[le] || null
        });
        const mt = me.get(tt);
        mt.node_count++, mt.guidance || (mt.guidance = L.guidance || q[le] || null), !mt.repository && ((St = L.package) != null && St.repository) && (mt.repository = L.package.repository), !mt.latest_version && ((Q = L.package) != null && Q.latest_version) && (mt.latest_version = L.package.latest_version);
      }
      return Array.from(me.values());
    }), ge = M(() => Re.value.filter((q) => !!Te(q))), $e = M(() => Re.value.length >= 5 ? Re.value.slice(0, 4) : Re.value), T = M(() => ge.value.length > 0 && ge.value.every((q) => {
      const me = q.package_id;
      return r.value.has(me) || c.value.has(me) || u.value.has(me) || d.value.has(me);
    }));
    function z(q) {
      const me = [];
      return ae(q) && me.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), q.repository && me.push({
        key: "install_git",
        label: "Install via Git",
        variant: ae(q) ? "ghost" : "secondary"
      }), me;
    }
    function ae(q) {
      return !!q.latest_version;
    }
    function Te(q) {
      return q.package_id ? ae(q) ? "registry" : q.repository ? "git" : null : null;
    }
    const xe = M(() => {
      var We;
      if (!((We = a.value) != null && We.models)) return [];
      const q = (a.value.models.resolved || []).filter(
        (Ze) => Ze.match_type === "download_intent" || Ze.match_type === "property_download_intent" || Ze.match_type === "not_found"
      ).map((Ze) => {
        var ct, ut, St, Q;
        return {
          filename: ((ut = (ct = Ze.reference) == null ? void 0 : ct.widget_value) == null ? void 0 : ut.split("/").pop()) || ((St = Ze.reference) == null ? void 0 : St.widget_value) || Ze.widget_value,
          widget_value: ((Q = Ze.reference) == null ? void 0 : Q.widget_value) || Ze.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Ze.download_source || null,
          targetPath: Ze.target_path || null,
          canDownload: !!(Ze.download_source && Ze.target_path)
        };
      }), me = (a.value.models.unresolved || []).map((Ze) => {
        var ct, ut, St, Q;
        return {
          filename: ((ut = (ct = Ze.reference) == null ? void 0 : ct.widget_value) == null ? void 0 : ut.split("/").pop()) || ((St = Ze.reference) == null ? void 0 : St.widget_value) || Ze.widget_value,
          widget_value: ((Q = Ze.reference) == null ? void 0 : Q.widget_value) || Ze.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ze = /* @__PURE__ */ new Map(), Ce = [];
      for (const Ze of q) {
        if (!Ze.url) {
          Ce.push(Ze);
          continue;
        }
        const ct = `${Ze.filename}::${Ze.url}`, ut = ze.get(ct);
        if (!ut) {
          ze.set(ct, Ze);
          continue;
        }
        !ut.targetPath && Ze.targetPath && (ut.targetPath = Ze.targetPath), !ut.canDownload && Ze.canDownload && (ut.canDownload = Ze.canDownload);
      }
      return [...ze.values(), ...Ce, ...me];
    }), Se = M(() => xe.value.filter((q) => q.canDownload)), Y = M(() => he.value.length >= 5 ? he.value.slice(0, 4) : he.value), j = M(() => xe.value.length >= 5 ? xe.value.slice(0, 4) : xe.value), ve = M(() => he.value.length > 0 && he.value.every(
      (q) => r.value.has(q.package_id) || c.value.has(q.package_id) || u.value.has(q.package_id) || d.value.has(q.package_id)
    )), _e = M(() => Se.value.length > 0 && Se.value.every((q) => f.value.has(q.url))), je = M(() => he.value.length > 0 || ge.value.length > 0 || Se.value.length > 0), Ve = M(() => {
      const q = (he.value.length === 0 || ve.value) && (ge.value.length === 0 || T.value), me = Se.value.length === 0 || _e.value;
      return q && me;
    }), ke = M(() => g.value === "models" ? `Missing Models (${xe.value.length})` : g.value === "packages" ? `Missing Custom Nodes (${Fe.value})` : g.value === "community" ? `Community-Mapped Packages (${Re.value.length})` : ""), ee = M(() => g.value === "models" ? xe.value.map((q) => ({
      id: q.url || q.widget_value,
      name: q.filename,
      canAction: q.canDownload,
      actionDisabledReason: q.canDownload ? void 0 : "Manual download required"
    })) : g.value === "packages" ? he.value.map((q) => ({
      id: q.package_id,
      name: q.title,
      subtitle: `(${q.node_count} ${q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : g.value === "community" ? Re.value.map((q) => ({
      id: q.package_id || q.item_id,
      name: q.title,
      subtitle: `(${q.node_count} ${q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Te(q),
      actionDisabledReason: Te(q) ? void 0 : "Manual setup required",
      actions: z(q)
    })) : []);
    function Ke(q, me) {
      if (g.value === "models") {
        const ze = xe.value.find((Ce) => Ce.url === q.id || Ce.widget_value === q.id);
        ze && He(ze);
      } else if (g.value === "packages") {
        const ze = he.value.find((Ce) => Ce.package_id === q.id);
        ze && Xe(ze);
      } else if (g.value === "community") {
        const ze = Re.value.find((We) => (We.package_id || We.item_id) === q.id);
        if (!ze) return;
        if (!ze.package_id) {
          se({ item_id: ze.item_id, title: ze.title });
          return;
        }
        const Ce = me === "install_git" ? "git" : "registry";
        if (Ce === "registry" && !ae(ze)) {
          se({ item_id: ze.item_id, title: ze.title });
          return;
        }
        Le(ze, Ce);
      }
    }
    function Ue() {
      g.value === "models" ? Gt() : g.value === "packages" ? kt() : g.value === "community" && Ut();
    }
    async function Xe(q) {
      return Ae(q.package_id, q.latest_version, "registry");
    }
    async function Le(q, me) {
      return q.package_id ? me === "registry" && !ae(q) ? (u.value.set(q.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : me === "git" && !q.repository ? (u.value.set(q.package_id, "No Git repository is available for this community mapping."), !1) : Ae(q.package_id, q.latest_version, me, q.repository) : (se({ item_id: q.item_id, title: q.title }), !1);
    }
    async function Ae(q, me, ze, Ce) {
      const We = J(q) || q, Ze = me || "latest";
      if (r.value.has(We) || c.value.has(We) || u.value.has(We) || d.value.has(We))
        return !0;
      Yt(), p.value = We;
      let ct = null;
      try {
        const ut = {
          id: We,
          version: Ze,
          selected_version: Ze,
          mode: "remote",
          channel: "default"
        };
        ze === "git" && Ce && (ut.repository = Ce, ut.install_source = "git");
        const { ui_id: St, status: Q } = await D(ut, {
          beforeQueueStart: (L) => {
            ct = L, O.value.set(L, We), c.value.add(We), H(We), console.log("[ComfyGit] Registered pending install:", {
              ui_id: L,
              packageId: We,
              pendingInstalls: Array.from(O.value.entries())
            });
          }
        });
        return (Q == null ? void 0 : Q.status_str) === "dependency_review_required" ? (ct && O.value.delete(ct), K(We), oe(We), p.value === We && (p.value = null), N(We, ut, Q), !1) : (ct || (ct = St, O.value.set(St, We), c.value.add(We), H(We), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: St,
          packageId: We,
          pendingInstalls: Array.from(O.value.entries())
        })), !0);
      } catch (ut) {
        const St = ue(ut, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", ut), ct && O.value.delete(ct), K(We), oe(We), c.value.delete(We), d.value.delete(We), u.value.set(We, St), !1;
      } finally {
        p.value = null;
      }
    }
    function He(q) {
      !q.url || !q.targetPath || f.value.has(q.url) || (F([{
        workflow: "unsaved",
        filename: q.filename,
        url: q.url,
        targetPath: q.targetPath
      }]), f.value.add(q.url));
    }
    async function kt() {
      const q = { attempted: 0, failed: 0 };
      for (const me of he.value)
        !r.value.has(me.package_id) && !c.value.has(me.package_id) && !u.value.has(me.package_id) && !d.value.has(me.package_id) && (q.attempted++, await Xe(me) || q.failed++);
      return q;
    }
    async function Ut() {
      const q = { attempted: 0, failed: 0 };
      for (const me of ge.value) {
        const ze = me.package_id;
        if (!r.value.has(ze) && !c.value.has(ze) && !u.value.has(ze) && !d.value.has(ze)) {
          q.attempted++;
          const Ce = Te(me);
          (Ce ? await Le(me, Ce) : !1) || q.failed++;
        }
      }
      return q;
    }
    function Gt() {
      const q = Se.value.filter(
        (me) => !f.value.has(me.url)
      );
      if (q.length === 0) return 0;
      F(q.map((me) => ({
        workflow: "unsaved",
        filename: me.filename,
        url: me.url,
        targetPath: me.targetPath
      })));
      for (const me of q)
        f.value.add(me.url);
      return q.length;
    }
    async function X() {
      const q = await kt(), me = await Ut();
      Gt();
      const ze = q.attempted + me.attempted, Ce = q.failed + me.failed;
      if (ze > 0 && Ce > 0) {
        const We = ze - Ce;
        n.value = `${We} of ${ze} installs queued, ${Ce} failed`;
      }
    }
    function Z() {
      if (Ve.value) {
        De();
        return;
      }
      X();
    }
    function fe() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Qe(q) {
      var We, Ze;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const me = q == null ? void 0 : q.id;
      if (me && P.value.has(me)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${me} this session`);
        return;
      }
      const ze = window.app, Ce = (We = ze == null ? void 0 : ze.extensionManager) == null ? void 0 : We.workflow;
      if (Ce) {
        let St = !1;
        for (let Q = 0; Q < 20; Q++) {
          const L = Ce.activeWorkflow;
          if (!L) {
            await new Promise((tt) => setTimeout(tt, 50));
            continue;
          }
          const le = (Ze = L.activeState) == null ? void 0 : Ze.id;
          if (!(me && le === me)) {
            Q < 19 && await new Promise((tt) => setTimeout(tt, 50));
            continue;
          }
          if (St = !0, L.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${L.filename}`), me && P.value.add(me);
            return;
          }
          break;
        }
        St || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, n.value = null, re(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Map(), f.value = /* @__PURE__ */ new Set(), O.value = /* @__PURE__ */ new Map(), v.value = !1, w.value = 0;
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
        a.value = await ct.json(), ie.value && (l.value = !0, me && P.value.add(me));
      } catch (ct) {
        console.error("[ComfyGit] Failed to analyze workflow:", ct);
      } finally {
        t.value = !1;
      }
    }
    function De() {
      re(), l.value = !1, a.value = null;
    }
    function lt(q) {
      const { workflow: me } = q.detail;
      me && Qe(me);
    }
    function et(q) {
      var Ce;
      const me = (Ce = q.detail) == null ? void 0 : Ce.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: me,
        pendingInstalls: Array.from(O.value.entries()),
        eventDetail: q.detail
      });
      const ze = O.value.get(me);
      ze ? (oe(ze), p.value = ze, console.log("[ComfyGit] Installing package:", ze)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", me);
    }
    function gt(q) {
      var We, Ze, ct, ut, St, Q, L, le, Je, tt, mt;
      const me = (We = q.detail) == null ? void 0 : We.ui_id, ze = (ct = (Ze = q.detail) == null ? void 0 : Ze.status) == null ? void 0 : ct.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: me,
        status: ze,
        pendingInstalls: Array.from(O.value.entries()),
        eventDetail: q.detail
      });
      const Ce = O.value.get(me);
      if (Ce) {
        if (oe(Ce), O.value.delete(me), c.value.delete(Ce), p.value === Ce && (p.value = null), ze === "success")
          r.value.add(Ce), w.value++, console.log("[ComfyGit] Package installed successfully:", Ce);
        else if (ze === "dependency_review_required") {
          const At = ((St = (ut = q.detail) == null ? void 0 : ut.task) == null ? void 0 : St.params) || ((Q = q.detail) == null ? void 0 : Q.params);
          At != null && At.id ? N(Ce, At, (L = q.detail) == null ? void 0 : L.status) : u.value.set(Ce, "Dependency review required");
        } else {
          const At = ((tt = (Je = (le = q.detail) == null ? void 0 : le.status) == null ? void 0 : Je.messages) == null ? void 0 : tt[0]) || ((mt = q.detail) == null ? void 0 : mt.result) || "Unknown error";
          u.value.set(Ce, At), console.error("[ComfyGit] Package install failed:", Ce, At);
        }
        O.value.size === 0 && w.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", w.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: w.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", me);
    }
    let Rt = null;
    function Ye() {
      return Rt || (Rt = Gn()), Rt;
    }
    let $t = !1;
    function Yt() {
      if ($t) return !0;
      const q = Ye();
      return q ? (q.addEventListener("cm-task-started", et), q.addEventListener("cm-task-completed", gt), q.addEventListener("comfygit:workflow-changed", os), $t = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function os(q) {
      const { change_type: me } = q.detail;
      (me === "created" || me === "modified") && l.value && (re(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return dt(() => {
      window.addEventListener("comfygit:workflow-loaded", lt);
    }), Vn(() => {
      if (re(), window.removeEventListener("comfygit:workflow-loaded", lt), $t) {
        const q = Ye();
        q && (q.removeEventListener("cm-task-started", et), q.removeEventListener("cm-task-completed", gt), q.removeEventListener("comfygit:workflow-changed", os)), $t = !1;
      }
    }), (q, me) => {
      var ze;
      return o(), i(B, null, [
        l.value ? (o(), R(Pt, {
          key: 0,
          title: "Missing Dependencies",
          size: "md",
          loading: t.value,
          error: n.value || void 0,
          onClose: De
        }, {
          body: h(() => [
            t.value ? (o(), i("div", TR, [...me[5] || (me[5] = [
              s("div", { class: "loading-spinner" }, null, -1),
              s("span", null, "Analyzing workflow...", -1)
            ])])) : a.value && ie.value ? (o(), i("div", MR, [
              he.value.length > 0 ? (o(), i("div", PR, [
                s("div", RR, [
                  s("span", DR, "Missing Custom Nodes (" + m(Fe.value) + ")", 1),
                  he.value.length > 1 ? (o(), R(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: ve.value,
                    onClick: kt
                  }, {
                    default: h(() => [
                      x(m(ve.value ? "All Done" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", LR, [
                  (o(!0), i(B, null, we(Y.value, (Ce) => (o(), i("div", {
                    key: Ce.package_id,
                    class: "package-item"
                  }, [
                    s("div", NR, [
                      s("span", UR, m(Ce.title), 1),
                      s("span", OR, "(" + m(Ce.node_count) + " " + m(Ce.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    !r.value.has(Ce.package_id) && !c.value.has(Ce.package_id) && !u.value.has(Ce.package_id) && !d.value.has(Ce.package_id) ? (o(), R(Oe, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      disabled: p.value === Ce.package_id,
                      onClick: (We) => Xe(Ce)
                    }, {
                      default: h(() => [
                        x(m(p.value === Ce.package_id ? "Queueing..." : "Install"), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "onClick"])) : p.value === Ce.package_id ? (o(), i("span", AR, "Installing...")) : c.value.has(Ce.package_id) ? (o(), i("span", zR, "Queued")) : u.value.has(Ce.package_id) ? (o(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(Ce.package_id)
                    }, "Failed ⚠", 8, FR)) : d.value.has(Ce.package_id) ? (o(), R(Oe, {
                      key: 4,
                      size: "sm",
                      variant: "secondary",
                      disabled: Ie.value,
                      onClick: (We) => G(Ce.package_id)
                    }, {
                      default: h(() => [...me[6] || (me[6] = [
                        x(" Needs Review ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : (o(), i("span", BR, "Installed"))
                  ]))), 128)),
                  he.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: me[0] || (me[0] = (Ce) => g.value = "packages")
                  }, [
                    s("span", null, "Show all " + m(he.value.length) + " packages...", 1),
                    me[7] || (me[7] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Ne.value.length > 0 ? (o(), i("div", VR, [
                s("div", WR, [
                  s("span", GR, "Unknown Nodes (" + m(Ne.value.length) + ")", 1)
                ]),
                s("div", jR, [
                  (o(!0), i(B, null, we(Ne.value.slice(0, 5), (Ce) => (o(), i("div", {
                    key: Ce.node_type,
                    class: "item"
                  }, [
                    s("code", HR, m(Ce.node_type), 1),
                    me[8] || (me[8] = s("span", { class: "not-found" }, "Not found in registry", -1))
                  ]))), 128)),
                  Ne.value.length > 5 ? (o(), i("div", qR, " ...and " + m(Ne.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              be.value.length > 0 ? (o(), i("div", KR, [
                s("div", JR, [
                  s("span", QR, "Requires Newer ComfyUI (" + m(be.value.length) + ")", 1)
                ]),
                s("div", YR, [
                  (o(!0), i(B, null, we(be.value.slice(0, 5), (Ce) => (o(), i("div", {
                    key: `vg-${Ce.node_type}`,
                    class: "item"
                  }, [
                    s("code", XR, m(Ce.node_type), 1),
                    s("span", ZR, m(Ce.guidance || "Requires a newer ComfyUI version"), 1)
                  ]))), 128)),
                  be.value.length > 5 ? (o(), i("div", e7, " ...and " + m(be.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              Re.value.length > 0 ? (o(), i("div", t7, [
                s("div", s7, [
                  s("span", n7, "Community-Mapped Packages (" + m(Re.value.length) + ")", 1),
                  ge.value.length > 1 ? (o(), R(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: T.value,
                    onClick: Ut
                  }, {
                    default: h(() => [
                      x(m(T.value ? "All Done" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", o7, [
                  (o(!0), i(B, null, we($e.value, (Ce) => (o(), i("div", {
                    key: `community-${Ce.item_id}`,
                    class: "package-item"
                  }, [
                    s("div", a7, [
                      s("div", l7, [
                        s("span", i7, m(Ce.title), 1),
                        s("span", r7, "(" + m(Ce.node_count) + " " + m(Ce.node_count === 1 ? "node" : "nodes") + ")", 1)
                      ]),
                      s("div", c7, [
                        me[9] || (me[9] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                        Ce.guidance ? (o(), i("span", u7, ". " + m(Ce.guidance), 1)) : y("", !0)
                      ])
                    ]),
                    Ce.package_id ? (o(), i(B, { key: 0 }, [
                      !r.value.has(Ce.package_id) && !c.value.has(Ce.package_id) && !u.value.has(Ce.package_id) && !d.value.has(Ce.package_id) ? (o(), i("div", d7, [
                        ae(Ce) ? (o(), R(Oe, {
                          key: 0,
                          size: "sm",
                          variant: "secondary",
                          disabled: p.value === Ce.package_id,
                          onClick: (We) => Le(Ce, "registry")
                        }, {
                          default: h(() => [
                            x(m(p.value === Ce.package_id ? "Queueing..." : "Install from Registry"), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])) : y("", !0),
                        Ce.repository ? (o(), R(Oe, {
                          key: 1,
                          size: "sm",
                          variant: ae(Ce) ? "ghost" : "secondary",
                          disabled: p.value === Ce.package_id,
                          onClick: (We) => Le(Ce, "git")
                        }, {
                          default: h(() => [...me[10] || (me[10] = [
                            x(" Install via Git ", -1)
                          ])]),
                          _: 1
                        }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                      ])) : p.value === Ce.package_id ? (o(), i("span", m7, "Installing...")) : c.value.has(Ce.package_id) ? (o(), i("span", f7, "Queued")) : u.value.has(Ce.package_id) ? (o(), i("span", {
                        key: 3,
                        class: "failed-badge",
                        title: u.value.get(Ce.package_id)
                      }, "Failed ⚠", 8, v7)) : d.value.has(Ce.package_id) ? (o(), R(Oe, {
                        key: 4,
                        size: "sm",
                        variant: "secondary",
                        disabled: Ie.value,
                        onClick: (We) => G(Ce.package_id)
                      }, {
                        default: h(() => [...me[11] || (me[11] = [
                          x(" Needs Review ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : (o(), i("span", p7, "Installed"))
                    ], 64)) : (o(), i(B, { key: 1 }, [
                      u.value.has(Ce.item_id) ? (o(), i("span", {
                        key: 0,
                        class: "failed-badge",
                        title: u.value.get(Ce.item_id)
                      }, "Failed ⚠", 8, g7)) : (o(), i("span", h7, "Manual setup required"))
                    ], 64))
                  ]))), 128)),
                  Re.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: me[1] || (me[1] = (Ce) => g.value = "community")
                  }, [
                    s("span", null, "Show all " + m(Re.value.length) + " packages...", 1),
                    me[12] || (me[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              xe.value.length > 0 ? (o(), i("div", y7, [
                s("div", w7, [
                  s("span", _7, "Missing Models (" + m(xe.value.length) + ")", 1),
                  Se.value.length > 1 ? (o(), R(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: _e.value,
                    onClick: Gt
                  }, {
                    default: h(() => [
                      x(m(_e.value ? "All Queued" : "Download All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", k7, [
                  (o(!0), i(B, null, we(j.value, (Ce) => (o(), i("div", {
                    key: Ce.widget_value,
                    class: "model-item"
                  }, [
                    s("div", b7, [
                      s("span", $7, m(Ce.filename), 1)
                    ]),
                    Ce.canDownload ? (o(), i(B, { key: 0 }, [
                      f.value.has(Ce.url) ? (o(), i("span", C7, "Queued")) : (o(), R(Oe, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        onClick: (We) => He(Ce)
                      }, {
                        default: h(() => [...me[13] || (me[13] = [
                          x(" Download ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]))
                    ], 64)) : (o(), i("span", x7, "Manual download required"))
                  ]))), 128)),
                  xe.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: me[2] || (me[2] = (Ce) => g.value = "models")
                  }, [
                    s("span", null, "Show all " + m(xe.value.length) + " models...", 1),
                    me[14] || (me[14] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              s("div", S7, [
                b(ra, {
                  modelValue: v.value,
                  "onUpdate:modelValue": [
                    me[3] || (me[3] = (Ce) => v.value = Ce),
                    fe
                  ]
                }, {
                  default: h(() => [...me[15] || (me[15] = [
                    x(" Don't show this popup ", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])) : y("", !0)
          ]),
          footer: h(() => [
            b(Oe, {
              variant: "secondary",
              onClick: De
            }, {
              default: h(() => [...me[16] || (me[16] = [
                x("Dismiss", -1)
              ])]),
              _: 1
            }),
            je.value ? (o(), R(Oe, {
              key: 0,
              variant: "primary",
              onClick: Z
            }, {
              default: h(() => [
                x(m(Ve.value ? "All Done" : "Download All"), 1)
              ]),
              _: 1
            })) : y("", !0)
          ]),
          _: 1
        }, 8, ["loading", "error"])) : y("", !0),
        g.value ? (o(), R(ER, {
          key: 1,
          title: ke.value,
          items: ee.value,
          "item-type": g.value,
          "queued-items": g.value === "models" ? f.value : c.value,
          "installed-items": g.value === "models" ? void 0 : r.value,
          "failed-items": g.value === "models" ? void 0 : u.value,
          "installing-item": g.value === "models" ? void 0 : p.value,
          onClose: me[4] || (me[4] = (Ce) => g.value = null),
          onAction: Ke,
          onBulkAction: Ue
        }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0),
        k.value ? (o(), R(yc, {
          key: 2,
          loading: $.value,
          error: C.value,
          preview: I.value,
          "can-apply": !!(E.value && ((ze = I.value) != null && ze.success)),
          applying: S.value,
          onClose: te,
          onApply: pe
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ], 64);
    };
  }
}), T7 = /* @__PURE__ */ Me(E7, [["__scopeId", "data-v-f0b1aac5"]]), M7 = {
  key: 0,
  class: "io-mapping-root"
}, P7 = { class: "io-mapping-visual-layer" }, R7 = { class: "io-mapping-header" }, D7 = { class: "io-mapping-header-main" }, L7 = { class: "io-mapping-subtitle" }, N7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, U7 = { class: "io-mapping-header-actions" }, O7 = { class: "io-mapping-sidebar" }, A7 = { class: "io-mapping-sidebar-scroll" }, z7 = {
  key: 0,
  class: "io-state-block"
}, F7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, B7 = { class: "contract-meta-section" }, V7 = { class: "contract-meta-toggle-icon" }, W7 = {
  key: 0,
  class: "contract-meta-body"
}, G7 = { class: "contract-summary" }, j7 = { class: "summary-pill" }, H7 = { class: "summary-pill" }, q7 = { class: "summary-pill" }, K7 = { class: "mapping-section" }, J7 = { class: "section-header" }, Q7 = {
  key: 0,
  class: "empty-message"
}, Y7 = ["onClick"], X7 = { class: "item-card-title" }, Z7 = { class: "item-card-meta" }, eD = { class: "item-card-summary" }, tD = { key: 0 }, sD = { class: "mapping-section" }, nD = { class: "section-header" }, oD = {
  key: 0,
  class: "empty-message"
}, aD = ["onClick"], lD = { class: "item-card-title" }, iD = { class: "item-card-meta" }, rD = { class: "item-card-summary" }, cD = { class: "io-mapping-footer" }, uD = { class: "io-mapping-footer-left" }, dD = { class: "io-mapping-footer-right" }, mD = /* @__PURE__ */ Ee({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: n, saveWorkflowContract: a, deleteWorkflowContract: l } = ft(), r = _(!1), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = _(null), C = _(0), I = _(null), E = _(null);
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
    ], F = M(() => {
      var X;
      return ((X = p.value) == null ? void 0 : X.contract_summary.has_contract) === !0;
    }), D = M(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const X = w.value.default_contract || "default";
      return w.value.contracts[X] || (w.value.contracts[X] = { inputs: [], outputs: [] }), w.value.contracts[X];
    }), W = M(() => {
      var Z;
      const X = ((Z = p.value) == null ? void 0 : Z.contract_summary.status) ?? "none";
      return X === "valid" ? "Valid Contract" : X === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ce(X) {
      return X ? JSON.parse(JSON.stringify(X)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function de(X) {
      return X === "integer" || X === "number";
    }
    function J(X) {
      return X === "enum";
    }
    function ue(X) {
      return X == null ? "" : String(X);
    }
    function K(X) {
      const Z = X.trim();
      if (!Z) return;
      const fe = Number(Z);
      return Number.isFinite(fe) ? fe : void 0;
    }
    function N(X) {
      return (X || []).join(`
`);
    }
    function G(X) {
      return X.split(/[\n,]/).map((Z) => Z.trim()).filter(Boolean);
    }
    function pe(X) {
      return typeof X == "string" ? X.length > 24 ? `${X.slice(0, 24)}...` : X : String(X);
    }
    function te(X) {
      return X == null ? "" : String(X);
    }
    function oe(X) {
      var fe;
      const Z = (fe = X == null ? void 0 : X.options) == null ? void 0 : fe.values;
      return Array.isArray(Z) ? Z.map((Qe) => String(Qe)).filter(Boolean) : [];
    }
    function re(X, Z) {
      var De;
      const fe = (De = X == null ? void 0 : X.options) == null ? void 0 : De[Z];
      if (fe == null || fe === "") return;
      const Qe = Number(fe);
      return Number.isFinite(Qe) ? Qe : void 0;
    }
    function H(X, Z) {
      return X.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || Z;
    }
    function se(X) {
      if (!w.value) return;
      const Z = X.trim() || "default";
      w.value.default_contract = Z, w.value.contracts[Z] || (w.value.contracts[Z] = { inputs: [], outputs: [] });
    }
    function ie(X) {
      const Z = String(X ?? "").toLowerCase();
      return Z.includes("image") ? "image" : Z.includes("video") ? "video" : Z.includes("audio") ? "audio" : Z.includes("int") ? "integer" : Z.includes("float") || Z.includes("double") || Z.includes("number") ? "number" : Z.includes("bool") ? "boolean" : Z.includes("combo") || Z.includes("enum") ? "enum" : Z.includes("string") || Z.includes("text") ? "string" : "file";
    }
    function Ie(X) {
      D.value.inputs.splice(X, 1), $.value === X && ($.value = null);
    }
    function he(X) {
      D.value.outputs.splice(X, 1), S.value === X && (S.value = null);
    }
    function Fe(X) {
      $.value = $.value === X ? null : X, $.value != null && (S.value = null);
    }
    function Ne(X) {
      S.value = S.value === X ? null : X, S.value != null && ($.value = null);
    }
    function be(X) {
      const Z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(X)) : String(X);
      return document.querySelector(`[data-node-id="${Z}"]`);
    }
    function Re(X) {
      return X instanceof Element ? !!X.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ge(X) {
      var Qe, De, lt, et, gt, Rt;
      if (!(X instanceof Element)) return null;
      const Z = X.closest("[data-node-id]"), fe = Z == null ? void 0 : Z.getAttribute("data-node-id");
      return fe ? ((lt = (De = (Qe = t.comfyApp) == null ? void 0 : Qe.graph) == null ? void 0 : De.getNodeById) == null ? void 0 : lt.call(De, fe)) ?? ((Rt = (gt = (et = t.comfyApp) == null ? void 0 : et.rootGraph) == null ? void 0 : gt.getNodeById) == null ? void 0 : Rt.call(gt, fe)) ?? null : null;
    }
    function $e(X, Z) {
      if (Z == null || Z < 0) return null;
      const fe = be(X);
      return fe ? fe.querySelectorAll('[data-testid="node-widget"]')[Z] ?? null : null;
    }
    function T(X) {
      return !X || X.width <= 0 || X.height <= 0 ? null : {
        left: `${X.left}px`,
        top: `${X.top}px`,
        width: `${X.width}px`,
        height: `${X.height}px`
      };
    }
    function z(X) {
      const Z = be((X == null ? void 0 : X.id) ?? "");
      if (Z) return Z.getBoundingClientRect();
      const fe = t.comfyApp;
      if (!X || typeof (fe == null ? void 0 : fe.canvasPosToClientPos) != "function") return null;
      const De = fe.canvasPosToClientPos([X.pos[0], X.pos[1] - 32]), lt = fe.canvasPosToClientPos([X.pos[0] + X.size[0], X.pos[1] + X.size[1]]);
      return !De || !lt ? null : new DOMRect(De[0], De[1], lt[0] - De[0], lt[1] - De[1]);
    }
    function ae(X) {
      var gt, Rt, Ye, $t, Yt, os, q;
      const Z = $e(X.node_id, X.widget_idx);
      if (Z) return Z.getBoundingClientRect();
      const fe = ((Ye = (Rt = (gt = t.comfyApp) == null ? void 0 : gt.graph) == null ? void 0 : Rt.getNodeById) == null ? void 0 : Ye.call(Rt, String(X.node_id))) ?? ((os = (Yt = ($t = t.comfyApp) == null ? void 0 : $t.rootGraph) == null ? void 0 : Yt.getNodeById) == null ? void 0 : os.call(Yt, String(X.node_id)));
      if (!fe || typeof X.widget_idx != "number" || !Array.isArray(fe.widgets)) return null;
      const Qe = fe.widgets[X.widget_idx];
      if (!Qe || typeof ((q = t.comfyApp) == null ? void 0 : q.canvasPosToClientPos) != "function") return z(fe);
      const De = 10, lt = t.comfyApp.canvasPosToClientPos([fe.pos[0] + De, fe.pos[1] + (Qe.y ?? 0)]), et = t.comfyApp.canvasPosToClientPos([fe.pos[0] + fe.size[0] - De, fe.pos[1] + (Qe.y ?? 0) + (Qe.computedHeight ?? 24)]);
      return !lt || !et ? z(fe) : new DOMRect(lt[0], lt[1], et[0] - lt[0], et[1] - lt[1]);
    }
    function Te(X) {
      var fe, Qe, De, lt, et, gt;
      const Z = ((De = (Qe = (fe = t.comfyApp) == null ? void 0 : fe.graph) == null ? void 0 : Qe.getNodeById) == null ? void 0 : De.call(Qe, String(X.node_id))) ?? ((gt = (et = (lt = t.comfyApp) == null ? void 0 : lt.rootGraph) == null ? void 0 : et.getNodeById) == null ? void 0 : gt.call(et, String(X.node_id)));
      return z(Z);
    }
    const xe = M(() => (C.value, D.value.inputs.map((X, Z) => {
      const fe = T(ae(X));
      return fe ? {
        key: `input-${Z}-${X.node_id}-${X.widget_idx ?? "na"}`,
        style: fe,
        active: $.value === Z
      } : null;
    }).filter((X) => !!X))), Se = M(() => (C.value, D.value.outputs.map((X, Z) => {
      const fe = T(Te(X));
      return fe ? {
        key: `output-${Z}-${X.node_id}-${X.selector ?? "primary"}`,
        style: fe,
        active: S.value === Z
      } : null;
    }).filter((X) => !!X)));
    function Y(X) {
      var Ye, $t, Yt, os, q, me, ze, Ce, We, Ze;
      if (Re(X.target)) return null;
      const Z = (Ye = t.comfyApp) == null ? void 0 : Ye.canvas;
      if (!Z) return null;
      const fe = ($t = Z.convertEventToCanvasOffset) == null ? void 0 : $t.call(Z, X);
      if (!fe || fe.length < 2) return null;
      const [Qe, De] = fe, lt = Z.graph || ((Yt = t.comfyApp) == null ? void 0 : Yt.graph) || ((os = t.comfyApp) == null ? void 0 : os.rootGraph), et = ((q = lt == null ? void 0 : lt.getNodeOnPos) == null ? void 0 : q.call(lt, Qe, De, Z.visible_nodes)) || ((me = Z.getNodeOnPos) == null ? void 0 : me.call(Z, Qe, De)) || ge(X.target);
      if (!et) return null;
      const gt = (ze = et.getWidgetOnPos) == null ? void 0 : ze.call(et, Qe, De, !0);
      if (gt)
        return { kind: "input", node: et, widget: gt, canvasX: Qe, canvasY: De };
      const Rt = ((Ce = et.getOutputOnPos) == null ? void 0 : Ce.call(et, [Qe, De])) || ((Ze = (We = et.constructor) == null ? void 0 : We.nodeData) != null && Ze.output_node ? { name: et.title || et.type || "output", type: "image" } : null);
      return Rt ? { kind: "output", node: et, output: Rt, canvasX: Qe, canvasY: De } : null;
    }
    function j(X, Z) {
      var gt;
      const fe = Array.isArray(X.widgets) ? X.widgets.indexOf(Z) : -1, Qe = D.value.inputs.findIndex(
        (Rt) => String(Rt.node_id) === String(X.id) && Rt.widget_idx === fe
      );
      if (Qe >= 0) {
        $.value = Qe;
        return;
      }
      const De = typeof ((gt = Z == null ? void 0 : Z.options) == null ? void 0 : gt.property) == "string" ? Z.options.property : void 0, lt = (Z == null ? void 0 : Z.name) || De || "input", et = {
        name: H(String(lt), `input_${D.value.inputs.length + 1}`),
        display_name: String((Z == null ? void 0 : Z.name) || De || `Input ${D.value.inputs.length + 1}`),
        type: ie(Z == null ? void 0 : Z.type),
        node_id: String(X.id),
        widget_idx: fe >= 0 ? fe : void 0,
        field_key: De,
        required: !0,
        default: (Z == null ? void 0 : Z.value) ?? ""
      };
      de(et.type) && (et.min = re(Z, "min"), et.max = re(Z, "max")), J(et.type) && (et.enum_values = oe(Z)), D.value.inputs.push(et), $.value = D.value.inputs.length - 1, S.value = null;
    }
    function ve(X, Z) {
      const fe = Array.isArray(X.outputs) ? X.outputs.indexOf(Z) : -1, Qe = fe >= 0 ? `slot:${fe}` : "primary", De = D.value.outputs.findIndex(
        (et) => String(et.node_id) === String(X.id) && (et.selector || "primary") === Qe
      );
      if (De >= 0) {
        S.value = De;
        return;
      }
      const lt = {
        name: H(String((Z == null ? void 0 : Z.name) || "output"), `output_${D.value.outputs.length + 1}`),
        display_name: String((Z == null ? void 0 : Z.name) || `Output ${D.value.outputs.length + 1}`),
        type: ie(Z == null ? void 0 : Z.type),
        node_id: String(X.id),
        selector: Qe
      };
      D.value.outputs.push(lt), S.value = D.value.outputs.length - 1, $.value = null;
    }
    function _e(X) {
      var Qe, De, lt;
      if (!r.value) {
        I.value = null, E.value = null;
        return;
      }
      const Z = Y(X);
      if (!Z) {
        I.value = null, E.value = null;
        return;
      }
      if (Z.kind === "input") {
        const et = Array.isArray(Z.node.widgets) ? Z.node.widgets.indexOf(Z.widget) : -1, gt = T(((Qe = $e(Z.node.id, et)) == null ? void 0 : Qe.getBoundingClientRect()) ?? ae({
          node_id: String(Z.node.id),
          widget_idx: et >= 0 ? et : void 0
        }));
        if (!gt) {
          I.value = null, E.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((De = Z.widget) == null ? void 0 : De.name) || "widget"} · Node ${Z.node.id}`
        }, E.value = { kind: "input", style: gt };
        return;
      }
      const fe = T(z(Z.node));
      if (!fe) {
        I.value = null, E.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((lt = Z.output) == null ? void 0 : lt.name) || Z.node.title || Z.node.type || "output"} · Node ${Z.node.id}`
      }, E.value = { kind: "output", style: fe };
    }
    function je(X) {
      var Qe, De, lt;
      if (!r.value || !w.value || X.button !== 0) return;
      const Z = Y(X);
      if (!Z) return;
      const fe = (Qe = t.comfyApp) == null ? void 0 : Qe.canvas;
      if (fe) {
        if (Z.kind === "input") {
          X.preventDefault(), X.stopImmediatePropagation(), X.stopPropagation(), Array.isArray(fe.graph_mouse) && (fe.graph_mouse[0] = Z.canvasX, fe.graph_mouse[1] = Z.canvasY), (De = fe.selectNode) == null || De.call(fe, Z.node, !1), j(Z.node, Z.widget);
          return;
        }
        X.preventDefault(), X.stopImmediatePropagation(), X.stopPropagation(), Array.isArray(fe.graph_mouse) && (fe.graph_mouse[0] = Z.canvasX, fe.graph_mouse[1] = Z.canvasY), (lt = fe.selectNode) == null || lt.call(fe, Z.node, !1), ve(Z.node, Z.output);
      }
    }
    function Ve() {
      document.addEventListener("pointerdown", je, !0), document.addEventListener("pointermove", _e, !0);
    }
    function ke() {
      document.removeEventListener("pointerdown", je, !0), document.removeEventListener("pointermove", _e, !0);
    }
    async function ee() {
      if (c.value) {
        u.value = !0, v.value = null;
        try {
          p.value = await n(c.value), w.value = ce(p.value.execution_contract);
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
          p.value = await a(c.value, w.value), w.value = ce(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ae({ reopenPanel: !0 });
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ue() {
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
    function Le() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ae(X) {
      r.value = !1, I.value = null, E.value = null, k.value = !1, X != null && X.reopenPanel && Le();
    }
    async function He(X) {
      var Qe, De;
      const fe = (De = (Qe = X.detail) == null ? void 0 : Qe.workflowName) == null ? void 0 : De.trim();
      fe && (c.value = fe, $.value = null, S.value = null, g.value = !1, r.value = !0, await ee());
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
        if (C.value += 1, !r.value) {
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
    return Ct(r, (X) => {
      X ? (Ve(), Ut()) : (ke(), Gt());
    }), dt(() => {
      window.addEventListener("comfygit:open-io-mapping", He), window.addEventListener("keydown", kt);
    }), To(() => {
      ke(), Gt(), window.removeEventListener("comfygit:open-io-mapping", He), window.removeEventListener("keydown", kt);
    }), (X, Z) => r.value ? (o(), i("div", M7, [
      s("div", P7, [
        (o(!0), i(B, null, we(xe.value, (fe) => (o(), i("div", {
          key: fe.key,
          class: Be(["io-highlight", "io-highlight-input", { active: fe.active }]),
          style: Wt(fe.style)
        }, null, 6))), 128)),
        (o(!0), i(B, null, we(Se.value, (fe) => (o(), i("div", {
          key: fe.key,
          class: Be(["io-highlight", "io-highlight-output", { active: fe.active }]),
          style: Wt(fe.style)
        }, null, 6))), 128)),
        E.value ? (o(), i("div", {
          key: 0,
          class: Be(["io-highlight", E.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Wt(E.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", R7, [
        s("div", D7, [
          Z[8] || (Z[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", L7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (o(), i("div", N7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", U7, [
          b(Oe, {
            size: "sm",
            variant: "secondary",
            onClick: Z[0] || (Z[0] = (fe) => Ae({ reopenPanel: !0 }))
          }, {
            default: h(() => [...Z[9] || (Z[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", O7, [
        s("div", A7, [
          u.value ? (o(), i("div", z7, " Loading workflow contract... ")) : v.value ? (o(), i("div", F7, m(v.value), 1)) : w.value ? (o(), i(B, { key: 2 }, [
            s("section", B7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: Z[1] || (Z[1] = (fe) => g.value = !g.value)
              }, [
                Z[10] || (Z[10] = s("span", null, "Contract Details", -1)),
                s("span", V7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (o(), i("div", W7, [
                b(Ht, { label: "Default Contract" }, {
                  default: h(() => [
                    b(Dt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": se
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Ht, { label: "Display Name" }, {
                  default: h(() => [
                    b(Dt, {
                      modelValue: D.value.display_name,
                      "onUpdate:modelValue": Z[2] || (Z[2] = (fe) => D.value.display_name = fe),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Ht, { label: "Description" }, {
                  default: h(() => [
                    b(Un, {
                      modelValue: D.value.description,
                      "onUpdate:modelValue": Z[3] || (Z[3] = (fe) => D.value.description = fe),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", G7, [
              s("span", j7, m(W.value), 1),
              s("span", H7, m(D.value.inputs.length) + " input" + m(D.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", q7, m(D.value.outputs.length) + " output" + m(D.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", K7, [
              s("div", J7, [
                b(hn, { variant: "section" }, {
                  default: h(() => [...Z[11] || (Z[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.inputs.length ? y("", !0) : (o(), i("div", Q7, " No inputs configured. ")),
              (o(!0), i(B, null, we(D.value.inputs, (fe, Qe) => (o(), i("div", {
                key: `input-${Qe}`,
                class: Be(["item-card", { selected: $.value === Qe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (De) => Fe(Qe)
                }, [
                  s("div", null, [
                    s("div", X7, m(fe.name || `Input ${Qe + 1}`), 1),
                    s("div", Z7, [
                      x(" Node " + m(fe.node_id || "?"), 1),
                      fe.widget_idx !== void 0 ? (o(), i(B, { key: 0 }, [
                        x(" · Widget " + m(fe.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", eD, [
                      s("span", null, m(fe.type || "string"), 1),
                      s("span", null, m(fe.required ? "required" : "optional"), 1),
                      fe.default !== void 0 && fe.default !== "" ? (o(), i("span", tD, "default " + m(pe(fe.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: bt((De) => Ie(Qe), ["stop"])
                  }, {
                    default: h(() => [...Z[12] || (Z[12] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, Y7),
                $.value === Qe ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: Z[4] || (Z[4] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Ht, { label: "Name" }, {
                    default: h(() => [
                      b(Dt, {
                        modelValue: fe.name,
                        "onUpdate:modelValue": (De) => fe.name = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ht, { label: "Display Name" }, {
                    default: h(() => [
                      b(Dt, {
                        modelValue: fe.display_name,
                        "onUpdate:modelValue": (De) => fe.display_name = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ht, { label: "Type" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": fe.type,
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (De) => fe.type = De
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ht, { label: "Required" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": fe.required ? "true" : "false",
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (De) => fe.required = De === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ht, {
                    class: Be({ "item-grid-full": fe.type === "string" || fe.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      fe.type === "string" ? (o(), R(Un, {
                        key: 0,
                        "model-value": te(fe.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (De) => fe.default = De
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (o(), R(Dt, {
                        key: 1,
                        modelValue: fe.default,
                        "onUpdate:modelValue": (De) => fe.default = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  de(fe.type) ? (o(), R(Ht, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(Dt, {
                        "model-value": ue(fe.min),
                        "full-width": "",
                        "onUpdate:modelValue": (De) => fe.min = K(De)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  de(fe.type) ? (o(), R(Ht, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(Dt, {
                        "model-value": ue(fe.max),
                        "full-width": "",
                        "onUpdate:modelValue": (De) => fe.max = K(De)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  J(fe.type) ? (o(), R(Ht, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(Un, {
                        "model-value": N(fe.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (De) => fe.enum_values = G(De)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", sD, [
              s("div", nD, [
                b(hn, { variant: "section" }, {
                  default: h(() => [...Z[13] || (Z[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.outputs.length ? y("", !0) : (o(), i("div", oD, " No outputs configured. ")),
              (o(!0), i(B, null, we(D.value.outputs, (fe, Qe) => (o(), i("div", {
                key: `output-${Qe}`,
                class: Be(["item-card", { selected: S.value === Qe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (De) => Ne(Qe)
                }, [
                  s("div", null, [
                    s("div", lD, m(fe.name || `Output ${Qe + 1}`), 1),
                    s("div", iD, [
                      x(" Node " + m(fe.node_id || "?"), 1),
                      fe.selector ? (o(), i(B, { key: 0 }, [
                        x(" · " + m(fe.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", rD, [
                      s("span", null, m(fe.type || "file"), 1)
                    ])
                  ]),
                  b(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: bt((De) => he(Qe), ["stop"])
                  }, {
                    default: h(() => [...Z[14] || (Z[14] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, aD),
                S.value === Qe ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: Z[5] || (Z[5] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Ht, { label: "Name" }, {
                    default: h(() => [
                      b(Dt, {
                        modelValue: fe.name,
                        "onUpdate:modelValue": (De) => fe.name = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ht, { label: "Display Name" }, {
                    default: h(() => [
                      b(Dt, {
                        modelValue: fe.display_name,
                        "onUpdate:modelValue": (De) => fe.display_name = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ht, { label: "Type" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": fe.type,
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (De) => fe.type = De
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", cD, [
          s("div", uD, [
            b(Oe, {
              variant: "secondary",
              onClick: Z[6] || (Z[6] = (fe) => Ae({ reopenPanel: !0 }))
            }, {
              default: h(() => [...Z[15] || (Z[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", dD, [
            b(Oe, {
              variant: "danger",
              disabled: !F.value,
              loading: f.value,
              onClick: Ue
            }, {
              default: h(() => [...Z[16] || (Z[16] = [
                x(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Oe, {
              variant: "primary",
              loading: d.value,
              onClick: Ke
            }, {
              default: h(() => [...Z[17] || (Z[17] = [
                x(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      k.value ? (o(), R(Ol, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Xe,
        onCancel: Z[7] || (Z[7] = (fe) => k.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), fD = /* @__PURE__ */ Me(mD, [["__scopeId", "data-v-13515b27"]]), vD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', pD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', gD = {
  comfy: vD,
  phosphor: pD
}, Fl = "comfy", Oc = "comfygit-theme";
let mn = null, Ac = Fl;
function hD() {
  try {
    const e = localStorage.getItem(Oc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Fl;
}
function zc(e = Fl) {
  mn && mn.remove(), mn = document.createElement("style"), mn.id = "comfygit-theme-styles", mn.setAttribute("data-theme", e), mn.textContent = gD[e], document.head.appendChild(mn), document.body.setAttribute("data-comfygit-theme", e), Ac = e;
  try {
    localStorage.setItem(Oc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function yD() {
  return Ac;
}
function wD(e) {
  zc(e);
}
function _D(e) {
  var r;
  const { ui_id: t, state: n } = e || {}, a = (n == null ? void 0 : n.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Bi = "ComfyGit.DevAutoReload", Fc = "ComfyGit.DevAutoReload.PanelOpen";
function kD() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ka() {
  const e = kD();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Bi, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Bi) === "true";
  } catch {
    return !1;
  }
}
function Bc(e) {
  if (ka())
    try {
      sessionStorage.setItem(Fc, e ? "true" : "false");
    } catch {
    }
}
function bD() {
  if (!ka()) return !1;
  try {
    return sessionStorage.getItem(Fc) === "true";
  } catch {
    return !1;
  }
}
async function Vi(e) {
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
async function $D(e) {
  if (!ka()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Vi(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let n = !1;
  window.setInterval(async () => {
    if (!n)
      for (const a of t)
        try {
          const l = await Vi(a.url);
          if (a.signature && l && l !== a.signature) {
            n = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const CD = "./comfygit-panel.css", xD = "./comfygit-panel.js", Vc = new URL(CD, import.meta.url).href, SD = new URL(xD, import.meta.url).href, Bl = document.createElement("link");
Bl.rel = "stylesheet";
Bl.href = Vc;
document.head.appendChild(Bl);
const ID = hD();
zc(ID);
ka() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), wD(e);
  },
  getTheme: () => {
    const e = yD();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = Ns;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = Ns;
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
let As = null, ho = null, vs = null, yo = null, eo = null, Wi = null, to = null, Gi = null, so = null, ji = null;
const On = _(null);
let So = "no_workspace", Wc = !1;
async function lo(e = !1) {
  const t = Gn();
  if (!t) return null;
  try {
    const n = e ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status", a = await t.fetchApi(n);
    a.ok && (On.value = await a.json());
  } catch {
  }
}
async function ml() {
  const e = Gn();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const n = await t.json();
        So = n.state, Wc = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function fl() {
  var t;
  if (So === "managed" || !Wc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const n of e)
    if (((t = n.textContent) == null ? void 0 : t.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function ED() {
  if (!On.value) return !1;
  const e = On.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || On.value.has_changes;
}
function no(e) {
  io(), Bc(!0), As = document.createElement("div"), As.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", As.appendChild(t), As.addEventListener("click", (a) => {
    a.target === As && io();
  });
  const n = (a) => {
    a.key === "Escape" && (io(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ho = Po({
    render: () => Wn(_P, {
      initialView: e,
      onClose: io,
      onStatusUpdate: async (a) => {
        On.value = a, Tn(), await ml(), Qo(), fl();
      }
    })
  }), ho.mount(t), document.body.appendChild(As);
}
function io() {
  Bc(!1), ho && (ho.unmount(), ho = null), As && (As.remove(), As = null);
}
function Hi(e) {
  oo(), vs = document.createElement("div"), vs.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  vs.style.position = "fixed", vs.style.top = `${t.bottom + 8}px`, vs.style.right = `${window.innerWidth - t.right}px`, vs.style.zIndex = "10001";
  const n = (l) => {
    vs && !vs.contains(l.target) && l.target !== e && (oo(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const a = (l) => {
    l.key === "Escape" && (oo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), yo = Po({
    render: () => Wn(Dc, {
      status: On.value,
      onClose: oo,
      onCommitted: (l) => {
        oo(), TD(l.success, l.message), lo().then(Tn);
      }
    })
  }), yo.mount(vs), document.body.appendChild(vs);
}
function oo() {
  yo && (yo.unmount(), yo = null), vs && (vs.remove(), vs = null);
}
function TD(e, t) {
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
function MD() {
  eo || (eo = document.createElement("div"), eo.className = "comfygit-download-queue-root", Wi = Po({
    render: () => Wn(vR)
  }), Wi.mount(eo), document.body.appendChild(eo), console.log("[ComfyGit] Model download queue mounted"));
}
function PD() {
  to || (to = document.createElement("div"), to.className = "comfygit-missing-resources-root", Gi = Po({
    render: () => Wn(T7)
  }), Gi.mount(to), document.body.appendChild(to), console.log("[ComfyGit] Missing resources popup mounted"));
}
function RD() {
  so || (so = document.createElement("div"), so.className = "comfygit-io-mapping-root", ji = Po({
    render: () => Wn(fD, {
      comfyApp: Ns
    })
  }), ji.mount(so), document.body.appendChild(so), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let is = null;
function Tn() {
  if (!is) return;
  const e = is.querySelector(".commit-indicator");
  e && (e.style.display = ED() ? "block" : "none");
}
function Qo() {
  if (!is) return;
  const e = So !== "managed";
  is.disabled = e, is.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Gc = document.createElement("style");
Gc.textContent = `
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
document.head.appendChild(Gc);
Ns.registerExtension({
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
        is && !is.disabled && Hi(is);
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
          Ns.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Ns.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => no(), is = document.createElement("button"), is.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", is.innerHTML = 'Commit <span class="commit-indicator"></span>', is.title = "Quick Commit", is.onclick = () => Hi(is), e.appendChild(t), e.appendChild(is), (r = (l = Ns.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Ns.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), MD(), PD(), RD(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      no(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      io();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await lo(), Tn(), Qo();
    }));
    const { loadPendingDownloads: n } = jn();
    n(), await Promise.all([lo(), ml()]), Tn(), Qo(), fl(), bD() && setTimeout(() => {
      As || no();
    }, 100), $D([
      { name: "panel script", url: SD },
      { name: "panel stylesheet", url: Vc }
    ]), setTimeout(fl, 100), setInterval(async () => {
      await Promise.all([lo(), ml()]), Tn(), Qo();
    }, 3e4);
    const a = Gn();
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
        const C = document.createElement("div");
        C.textContent = "Dependency conflict detected", C.style.cssText = "font-size: 12px; opacity: 0.8;", $.appendChild(C), g.appendChild($);
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
          g.remove(), no("debug-env");
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
        const C = document.createElement("div");
        C.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, C.style.cssText = "font-size: 12px; opacity: 0.7;", $.appendChild(C), g.appendChild($);
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
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                if (localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false") {
                  console.log("[ComfyGit] Auto-refresh enabled after node install restart, reloading page..."), c();
                  return;
                }
                Ns.refreshComboInNodes && (await Ns.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", C.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (O) {
                console.error("[ComfyGit] Failed to refresh nodes:", O), k.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", C.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), S.textContent = "Restart Failed", S.style.color = "#e53935", C.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
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
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await lo(), Tn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = _D(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        f(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
