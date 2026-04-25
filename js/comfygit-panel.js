var wc = Object.defineProperty;
var _c = (e, t, o) => t in e ? wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var gn = (e, t, o) => _c(e, typeof t != "symbol" ? t + "" : t, o);
import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function nl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const ht = {}, yo = [], $s = () => {
}, Ti = () => !1, qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), al = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, ll = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, kc = Object.prototype.hasOwnProperty, ft = (e, t) => kc.call(e, t), Ze = Array.isArray, wo = (e) => un(e) === "[object Map]", Mo = (e) => un(e) === "[object Set]", Ml = (e) => un(e) === "[object Date]", tt = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", pt = (e) => e !== null && typeof e == "object", Mi = (e) => (pt(e) || tt(e)) && tt(e.then) && tt(e.catch), Pi = Object.prototype.toString, un = (e) => Pi.call(e), bc = (e) => un(e).slice(8, -1), Ri = (e) => un(e) === "[object Object]", il = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jo = /* @__PURE__ */ nl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, $c = /-\w/g, is = Kn(
  (e) => e.replace($c, (t) => t.slice(1).toUpperCase())
), Cc = /\B([A-Z])/g, Ks = Kn(
  (e) => e.replace(Cc, "-$1").toLowerCase()
), Jn = Kn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ea = Kn(
  (e) => e ? `on${Jn(e)}` : ""
), js = (e, t) => !Object.is(e, t), xn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Ni = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Qn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, xc = (e) => {
  const t = $t(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Pl;
const Yn = () => Pl || (Pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (Ze(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = $t(n) ? Tc(n) : Wt(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if ($t(e) || pt(e))
    return e;
}
const Sc = /;(?![^(]*\))/g, Ic = /:([^]+)/, Ec = /\/\*[^]*?\*\//g;
function Tc(e) {
  const t = {};
  return e.replace(Ec, "").split(Sc).forEach((o) => {
    if (o) {
      const n = o.split(Ic);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Fe(e) {
  let t = "";
  if ($t(e))
    t = e;
  else if (Ze(e))
    for (let o = 0; o < e.length; o++) {
      const n = Fe(e[o]);
      n && (t += n + " ");
    }
  else if (pt(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Mc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Pc = /* @__PURE__ */ nl(Mc);
function Li(e) {
  return !!e || e === "";
}
function Rc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = ao(e[n], t[n]);
  return o;
}
function ao(e, t) {
  if (e === t) return !0;
  let o = Ml(e), n = Ml(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = ms(e), n = ms(t), o || n)
    return e === t;
  if (o = Ze(e), n = Ze(t), o || n)
    return o && n ? Rc(e, t) : !1;
  if (o = pt(e), n = pt(t), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !ao(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function rl(e, t) {
  return e.findIndex((o) => ao(o, t));
}
const Di = (e) => !!(e && e.__v_isRef === !0), f = (e) => $t(e) ? e : e == null ? "" : Ze(e) || pt(e) && (e.toString === Pi || !tt(e.toString)) ? Di(e) ? f(e.value) : JSON.stringify(e, Oi, 2) : String(e), Oi = (e, t) => Di(t) ? Oi(e, t.value) : wo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Ta(n, r) + " =>"] = l, o),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ta(o))
} : ms(t) ? Ta(t) : pt(t) && !Ze(t) && !Ri(t) ? String(t) : t, Ta = (e, t = "") => {
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
class Nc {
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
function Lc() {
  return Qt;
}
let yt;
const Ma = /* @__PURE__ */ new WeakSet();
class Ai {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qt && Qt.active && Qt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ma.has(this) && (Ma.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Rl(this), Vi(this);
    const t = yt, o = ds;
    yt = this, ds = !0;
    try {
      return this.fn();
    } finally {
      Fi(this), yt = t, ds = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        dl(t);
      this.deps = this.depsTail = void 0, Rl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ma.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ba(this) && this.run();
  }
  get dirty() {
    return Ba(this);
  }
}
let Ui = 0, Ho, qo;
function zi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qo, qo = e;
    return;
  }
  e.next = Ho, Ho = e;
}
function cl() {
  Ui++;
}
function ul() {
  if (--Ui > 0)
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
function Vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fi(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), dl(n), Dc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Ba(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Bi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Bi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === tn) || (e.globalVersion = tn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ba(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = yt, n = ds;
  yt = e, ds = !0;
  try {
    Vi(e);
    const l = e.fn(e._value);
    (t.version === 0 || js(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    yt = o, ds = n, Fi(e), e.flags &= -3;
  }
}
function dl(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      dl(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Dc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ds = !0;
const Wi = [];
function Ds() {
  Wi.push(ds), ds = !1;
}
function Os() {
  const e = Wi.pop();
  ds = e === void 0 ? !0 : e;
}
function Rl(e) {
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
let tn = 0;
class Oc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class fl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!yt || !ds || yt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== yt)
      o = this.activeLink = new Oc(yt, this), yt.deps ? (o.prevDep = yt.depsTail, yt.depsTail.nextDep = o, yt.depsTail = o) : yt.deps = yt.depsTail = o, Gi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = yt.depsTail, o.nextDep = void 0, yt.depsTail.nextDep = o, yt.depsTail = o, yt.deps === o && (yt.deps = n);
    }
    return o;
  }
  trigger(t) {
    this.version++, tn++, this.notify(t);
  }
  notify(t) {
    cl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      ul();
    }
  }
}
function Gi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Gi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Wa = /* @__PURE__ */ new WeakMap(), so = Symbol(
  ""
), Ga = Symbol(
  ""
), sn = Symbol(
  ""
);
function zt(e, t, o) {
  if (ds && yt) {
    let n = Wa.get(e);
    n || Wa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new fl()), l.map = n, l.key = o), l.track();
  }
}
function Rs(e, t, o, n, l, r) {
  const c = Wa.get(e);
  if (!c) {
    tn++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (cl(), t === "clear")
    c.forEach(u);
  else {
    const d = Ze(e), v = d && il(o);
    if (d && o === "length") {
      const m = Number(n);
      c.forEach((p, w) => {
        (w === "length" || w === sn || !ms(w) && w >= m) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(sn)), t) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(so)), wo(e) && u(c.get(Ga)));
          break;
        case "delete":
          d || (u(c.get(so)), wo(e) && u(c.get(Ga)));
          break;
        case "set":
          wo(e) && u(c.get(so));
          break;
      }
  }
  ul();
}
function fo(e) {
  const t = rt(e);
  return t === e ? t : (zt(t, "iterate", sn), as(e) ? t : t.map(vs));
}
function Xn(e) {
  return zt(e = rt(e), "iterate", sn), e;
}
function Bs(e, t) {
  return As(e) ? oo(e) ? Io(vs(t)) : Io(t) : vs(t);
}
const Ac = {
  __proto__: null,
  [Symbol.iterator]() {
    return Pa(this, Symbol.iterator, (e) => Bs(this, e));
  },
  concat(...e) {
    return fo(this).concat(
      ...e.map((t) => Ze(t) ? fo(t) : t)
    );
  },
  entries() {
    return Pa(this, "entries", (e) => (e[1] = Bs(this, e[1]), e));
  },
  every(e, t) {
    return Es(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Es(
      this,
      "filter",
      e,
      t,
      (o) => o.map((n) => Bs(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Es(
      this,
      "find",
      e,
      t,
      (o) => Bs(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Es(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Es(
      this,
      "findLast",
      e,
      t,
      (o) => Bs(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Es(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Es(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ra(this, "includes", e);
  },
  indexOf(...e) {
    return Ra(this, "indexOf", e);
  },
  join(e) {
    return fo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ra(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Es(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Do(this, "pop");
  },
  push(...e) {
    return Do(this, "push", e);
  },
  reduce(e, ...t) {
    return Nl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nl(this, "reduceRight", e, t);
  },
  shift() {
    return Do(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Es(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Do(this, "splice", e);
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
    return Do(this, "unshift", e);
  },
  values() {
    return Pa(this, "values", (e) => Bs(this, e));
  }
};
function Pa(e, t, o) {
  const n = Xn(e), l = n[t]();
  return n !== e && !as(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Uc = Array.prototype;
function Es(e, t, o, n, l, r) {
  const c = Xn(e), u = c !== e && !as(e), d = c[t];
  if (d !== Uc[t]) {
    const p = d.apply(e, r);
    return u ? vs(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Bs(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const m = d.call(c, v, n);
  return u && l ? l(m) : m;
}
function Nl(e, t, o, n) {
  const l = Xn(e);
  let r = o;
  return l !== e && (as(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Bs(e, u), d, e);
  }), l[t](r, ...n);
}
function Ra(e, t, o) {
  const n = rt(e);
  zt(n, "iterate", sn);
  const l = n[t](...o);
  return (l === -1 || l === !1) && pl(o[0]) ? (o[0] = rt(o[0]), n[t](...o)) : l;
}
function Do(e, t, o = []) {
  Ds(), cl();
  const n = rt(e)[t].apply(e, o);
  return ul(), Os(), n;
}
const zc = /* @__PURE__ */ nl("__proto__,__v_isRef,__isVue"), ji = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function Vc(e) {
  ms(e) || (e = String(e));
  const t = rt(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class Hi {
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
      return n === (l ? r ? Qc : Qi : r ? Ji : Ki).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const c = Ze(t);
    if (!l) {
      let d;
      if (c && (d = Ac[o]))
        return d;
      if (o === "hasOwnProperty")
        return Vc;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(t) ? t : n
    );
    if ((ms(o) ? ji.has(o) : zc(o)) || (l || zt(t, "get", o), r))
      return u;
    if (Gt(u)) {
      const d = c && il(o) ? u : u.value;
      return l && pt(d) ? Ln(d) : d;
    }
    return pt(u) ? l ? Ln(u) : ro(u) : u;
  }
}
class qi extends Hi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let r = t[o];
    const c = Ze(t) && il(o);
    if (!this._isShallow) {
      const v = As(r);
      if (!as(n) && !As(n) && (r = rt(r), n = rt(n)), !c && Gt(r) && !Gt(n))
        return v || (r.value = n), !0;
    }
    const u = c ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      n,
      Gt(t) ? t : l
    );
    return t === rt(l) && (u ? js(n, r) && Rs(t, "set", o, n) : Rs(t, "add", o, n)), d;
  }
  deleteProperty(t, o) {
    const n = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && n && Rs(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!ms(o) || !ji.has(o)) && zt(t, "has", o), n;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Ze(t) ? "length" : so
    ), Reflect.ownKeys(t);
  }
}
class Fc extends Hi {
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
const Bc = /* @__PURE__ */ new qi(), Wc = /* @__PURE__ */ new Fc(), Gc = /* @__PURE__ */ new qi(!0);
const ja = (e) => e, hn = (e) => Reflect.getPrototypeOf(e);
function jc(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, r = rt(l), c = wo(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...n), m = o ? ja : t ? Io : vs;
    return !t && zt(
      r,
      "iterate",
      d ? Ga : so
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = v.next();
        return w ? { value: p, done: w } : {
          value: u ? [m(p[0]), m(p[1])] : m(p),
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
function yn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hc(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = rt(r), u = rt(l);
      e || (js(l, u) && zt(c, "get", l), zt(c, "get", u));
      const { has: d } = hn(c), v = t ? ja : e ? Io : vs;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && zt(rt(l), "iterate", so), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = rt(r), u = rt(l);
      return e || (js(l, u) && zt(c, "has", l), zt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = rt(u), v = t ? ja : e ? Io : vs;
      return !e && zt(d, "iterate", so), u.forEach((m, p) => l.call(r, v(m), v(p), c));
    }
  };
  return Mt(
    o,
    e ? {
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear")
    } : {
      add(l) {
        !t && !as(l) && !As(l) && (l = rt(l));
        const r = rt(this);
        return hn(r).has.call(r, l) || (r.add(l), Rs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !as(r) && !As(r) && (r = rt(r));
        const c = rt(this), { has: u, get: d } = hn(c);
        let v = u.call(c, l);
        v || (l = rt(l), v = u.call(c, l));
        const m = d.call(c, l);
        return c.set(l, r), v ? js(r, m) && Rs(c, "set", l, r) : Rs(c, "add", l, r), this;
      },
      delete(l) {
        const r = rt(this), { has: c, get: u } = hn(r);
        let d = c.call(r, l);
        d || (l = rt(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && Rs(r, "delete", l, void 0), v;
      },
      clear() {
        const l = rt(this), r = l.size !== 0, c = l.clear();
        return r && Rs(
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
    o[l] = jc(l, e, t);
  }), o;
}
function ml(e, t) {
  const o = Hc(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    ft(o, l) && l in n ? o : n,
    l,
    r
  );
}
const qc = {
  get: /* @__PURE__ */ ml(!1, !1)
}, Kc = {
  get: /* @__PURE__ */ ml(!1, !0)
}, Jc = {
  get: /* @__PURE__ */ ml(!0, !1)
};
const Ki = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap();
function Yc(e) {
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
function Xc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Yc(bc(e));
}
function ro(e) {
  return As(e) ? e : vl(
    e,
    !1,
    Bc,
    qc,
    Ki
  );
}
function Zc(e) {
  return vl(
    e,
    !1,
    Gc,
    Kc,
    Ji
  );
}
function Ln(e) {
  return vl(
    e,
    !0,
    Wc,
    Jc,
    Qi
  );
}
function vl(e, t, o, n, l) {
  if (!pt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Xc(e);
  if (r === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    r === 2 ? n : o
  );
  return l.set(e, u), u;
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
function pl(e) {
  return e ? !!e.__v_raw : !1;
}
function rt(e) {
  const t = e && e.__v_raw;
  return t ? rt(t) : e;
}
function eu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Ni(e, "__v_skip", !0), e;
}
const vs = (e) => pt(e) ? ro(e) : e, Io = (e) => pt(e) ? Ln(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return tu(e, !1);
}
function tu(e, t) {
  return Gt(e) ? e : new su(e, t);
}
class su {
  constructor(t, o) {
    this.dep = new fl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : rt(t), this._value = o ? t : vs(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || as(t) || As(t);
    t = n ? t : rt(t), js(t, o) && (this._rawValue = t, this._value = n ? t : vs(t), this.dep.trigger());
  }
}
function st(e) {
  return Gt(e) ? e.value : e;
}
const ou = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function Yi(e) {
  return oo(e) ? e : new Proxy(e, ou);
}
class nu {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new fl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    yt !== this)
      return zi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Bi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function au(e, t, o = !1) {
  let n, l;
  return tt(e) ? n = e : (n = e.get, l = e.set), new nu(n, l, o);
}
const wn = {}, Dn = /* @__PURE__ */ new WeakMap();
let eo;
function lu(e, t = !1, o = eo) {
  if (o) {
    let n = Dn.get(o);
    n || Dn.set(o, n = []), n.push(e);
  }
}
function iu(e, t, o = ht) {
  const { immediate: n, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (E) => l ? E : as(E) || l === !1 || l === 0 ? Ns(E, 1) : Ns(E);
  let m, p, w, y, _ = !1, x = !1;
  if (Gt(e) ? (p = () => e.value, _ = as(e)) : oo(e) ? (p = () => v(e), _ = !0) : Ze(e) ? (x = !0, _ = e.some((E) => oo(E) || as(E)), p = () => e.map((E) => {
    if (Gt(E))
      return E.value;
    if (oo(E))
      return v(E);
    if (tt(E))
      return d ? d(E, 2) : E();
  })) : tt(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ds();
      try {
        w();
      } finally {
        Os();
      }
    }
    const E = eo;
    eo = m;
    try {
      return d ? d(e, 3, [y]) : e(y);
    } finally {
      eo = E;
    }
  } : p = $s, t && l) {
    const E = p, N = l === !0 ? 1 / 0 : l;
    p = () => Ns(E(), N);
  }
  const C = Lc(), S = () => {
    m.stop(), C && C.active && ll(C.effects, m);
  };
  if (r && t) {
    const E = t;
    t = (...N) => {
      E(...N), S();
    };
  }
  let R = x ? new Array(e.length).fill(wn) : wn;
  const T = (E) => {
    if (!(!(m.flags & 1) || !m.dirty && !E))
      if (t) {
        const N = m.run();
        if (l || _ || (x ? N.some((O, J) => js(O, R[J])) : js(N, R))) {
          w && w();
          const O = eo;
          eo = m;
          try {
            const J = [
              N,
              // pass undefined as the old value when it's changed for the first time
              R === wn ? void 0 : x && R[0] === wn ? [] : R,
              y
            ];
            R = N, d ? d(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            eo = O;
          }
        }
      } else
        m.run();
  };
  return u && u(T), m = new Ai(p), m.scheduler = c ? () => c(T, !1) : T, y = (E) => lu(E, !1, m), w = m.onStop = () => {
    const E = Dn.get(m);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const N of E) N();
      Dn.delete(m);
    }
  }, t ? n ? T(!0) : R = m.run() : c ? c(T.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function Ns(e, t = 1 / 0, o) {
  if (t <= 0 || !pt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Gt(e))
    Ns(e.value, t, o);
  else if (Ze(e))
    for (let n = 0; n < e.length; n++)
      Ns(e[n], t, o);
  else if (Mo(e) || wo(e))
    e.forEach((n) => {
      Ns(n, t, o);
    });
  else if (Ri(e)) {
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
function dn(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    Zn(l, t, o);
  }
}
function ps(e, t, o, n) {
  if (tt(e)) {
    const l = dn(e, t, o, n);
    return l && Mi(l) && l.catch((r) => {
      Zn(r, t, o);
    }), l;
  }
  if (Ze(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ps(e[r], t, o, n));
    return l;
  }
}
function Zn(e, t, o, n = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || ht;
  if (t) {
    let u = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const m = u.ec;
      if (m) {
        for (let p = 0; p < m.length; p++)
          if (m[p](e, d, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Ds(), dn(r, null, 10, [
        e,
        d,
        v
      ]), Os();
      return;
    }
  }
  ru(e, o, l, n, c);
}
function ru(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Jt = [];
let _s = -1;
const _o = [];
let Ws = null, po = 0;
const Xi = /* @__PURE__ */ Promise.resolve();
let On = null;
function Pt(e) {
  const t = On || Xi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cu(e) {
  let t = _s + 1, o = Jt.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = Jt[n], r = on(l);
    r < e || r === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function gl(e) {
  if (!(e.flags & 1)) {
    const t = on(e), o = Jt[Jt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= on(o) ? Jt.push(e) : Jt.splice(cu(t), 0, e), e.flags |= 1, Zi();
  }
}
function Zi() {
  On || (On = Xi.then(tr));
}
function uu(e) {
  Ze(e) ? _o.push(...e) : Ws && e.id === -1 ? Ws.splice(po + 1, 0, e) : e.flags & 1 || (_o.push(e), e.flags |= 1), Zi();
}
function Ll(e, t, o = _s + 1) {
  for (; o < Jt.length; o++) {
    const n = Jt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Jt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function er(e) {
  if (_o.length) {
    const t = [...new Set(_o)].sort(
      (o, n) => on(o) - on(n)
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
const on = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function tr(e) {
  try {
    for (_s = 0; _s < Jt.length; _s++) {
      const t = Jt[_s];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), dn(
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
    _s = -1, Jt.length = 0, er(), On = null, (Jt.length || _o.length) && tr();
  }
}
let Dt = null, sr = null;
function An(e) {
  const t = Dt;
  return Dt = e, sr = e && e.type.__scopeId || null, t;
}
function g(e, t = Dt, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && Vn(-1);
    const r = An(t);
    let c;
    try {
      c = e(...l);
    } finally {
      An(r), n._d && Vn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Tt(e, t) {
  if (Dt === null)
    return e;
  const o = aa(Dt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = ht] = t[l];
    r && (tt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ns(c), n.push({
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
function Qs(e, t, o, n) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[n];
    d && (Ds(), ps(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Os());
  }
}
const or = Symbol("_vte"), nr = (e) => e.__isTeleport, Ko = (e) => e && (e.disabled || e.disabled === ""), Dl = (e) => e && (e.defer || e.defer === ""), Ol = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Al = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ha = (e, t) => {
  const o = e && e.to;
  return $t(o) ? t ? t(o) : null : o;
}, ar = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, c, u, d, v) {
    const {
      mc: m,
      pc: p,
      pbc: w,
      o: { insert: y, querySelector: _, createText: x, createComment: C }
    } = v, S = Ko(t.props);
    let { shapeFlag: R, children: T, dynamicChildren: E } = t;
    if (e == null) {
      const N = t.el = x(""), O = t.anchor = x("");
      y(N, o, n), y(O, o, n);
      const J = (V, Y) => {
        R & 16 && m(
          T,
          V,
          Y,
          l,
          r,
          c,
          u,
          d
        );
      }, M = () => {
        const V = t.target = Ha(t.props, _), Y = lr(V, t, x, y);
        V && (c !== "svg" && Ol(V) ? c = "svg" : c !== "mathml" && Al(V) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(V), S || (J(V, Y), Sn(t, !1)));
      };
      S && (J(o, O), Sn(t, !0)), Dl(t.props) ? (t.el.__isMounted = !1, qt(() => {
        M(), delete t.el.__isMounted;
      }, r)) : M();
    } else {
      if (Dl(t.props) && e.el.__isMounted === !1) {
        qt(() => {
          ar.process(
            e,
            t,
            o,
            n,
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
      const N = t.anchor = e.anchor, O = t.target = e.target, J = t.targetAnchor = e.targetAnchor, M = Ko(e.props), V = M ? o : O, Y = M ? N : J;
      if (c === "svg" || Ol(O) ? c = "svg" : (c === "mathml" || Al(O)) && (c = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
        V,
        l,
        r,
        c,
        u
      ), kl(e, t, !0)) : d || p(
        e,
        t,
        V,
        Y,
        l,
        r,
        c,
        u,
        !1
      ), S)
        M ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : _n(
          t,
          o,
          N,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Z = t.target = Ha(
          t.props,
          _
        );
        Z && _n(
          t,
          Z,
          null,
          v,
          0
        );
      } else M && _n(
        t,
        O,
        J,
        v,
        1
      );
      Sn(t, S);
    }
  },
  remove(e, t, o, { um: n, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: v,
      targetAnchor: m,
      target: p,
      props: w
    } = e;
    if (p && (l(v), l(m)), r && l(d), c & 16) {
      const y = r || !Ko(w);
      for (let _ = 0; _ < u.length; _++) {
        const x = u[_];
        n(
          x,
          t,
          o,
          y,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: _n,
  hydrate: du
};
function _n(e, t, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: m } = e, p = r === 2;
  if (p && n(c, t, o), (!p || Ko(m)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && n(u, t, o);
}
function du(e, t, o, n, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: m }
}, p) {
  function w(x, C, S, R) {
    C.anchor = p(
      c(x),
      C,
      u(x),
      o,
      n,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = R;
  }
  const y = t.target = Ha(
    t.props,
    d
  ), _ = Ko(t.props);
  if (y) {
    const x = y._lpa || y.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          x,
          x && c(x)
        );
      else {
        t.anchor = c(e);
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              t.targetStart = C;
            else if (C.data === "teleport anchor") {
              t.targetAnchor = C, y._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          C = c(C);
        }
        t.targetAnchor || lr(y, t, m, v), p(
          x && c(x),
          t,
          y,
          o,
          n,
          l,
          r
        );
      }
    Sn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Ot = ar;
function Sn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function lr(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[or] = r, e && (n(l, e), n(r, e)), r;
}
const Ms = Symbol("_leaveCb"), kn = Symbol("_enterCb");
function ir() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ct(() => {
    e.isMounted = !0;
  }), sa(() => {
    e.isUnmounting = !0;
  }), e;
}
const os = [Function, Array], rr = {
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
}, cr = (e) => {
  const t = e.subTree;
  return t.component ? cr(t.component) : t;
}, fu = {
  name: "BaseTransition",
  props: rr,
  setup(e, { slots: t }) {
    const o = $l(), n = ir();
    return () => {
      const l = t.default && hl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = ur(l), c = rt(e), { mode: u } = c;
      if (n.isLeaving)
        return Na(r);
      const d = Ul(r);
      if (!d)
        return Na(r);
      let v = nn(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== Ft && lo(d, v);
      let m = o.subTree && Ul(o.subTree);
      if (m && m.type !== Ft && !to(m, d) && cr(o).type !== Ft) {
        let p = nn(
          m,
          c,
          n,
          o
        );
        if (lo(m, p), u === "out-in" && d.type !== Ft)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, m = void 0;
          }, Na(r);
        u === "in-out" && d.type !== Ft ? p.delayLeave = (w, y, _) => {
          const x = dr(
            n,
            m
          );
          x[String(m.key)] = m, w[Ms] = () => {
            y(), w[Ms] = void 0, delete v.delayedLeave, m = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, m = void 0;
          };
        } : m = void 0;
      } else m && (m = void 0);
      return r;
    };
  }
};
function ur(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Ft) {
        t = o;
        break;
      }
  }
  return t;
}
const mu = fu;
function dr(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function nn(e, t, o, n, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: m,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: y,
    onAfterLeave: _,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: R,
    onAppearCancelled: T
  } = t, E = String(e.key), N = dr(o, e), O = (V, Y) => {
    V && ps(
      V,
      n,
      9,
      Y
    );
  }, J = (V, Y) => {
    const Z = Y[1];
    O(V, Y), Ze(V) ? V.every((ie) => ie.length <= 1) && Z() : V.length <= 1 && Z();
  }, M = {
    mode: c,
    persisted: u,
    beforeEnter(V) {
      let Y = d;
      if (!o.isMounted)
        if (r)
          Y = C || d;
        else
          return;
      V[Ms] && V[Ms](
        !0
        /* cancelled */
      );
      const Z = N[E];
      Z && to(e, Z) && Z.el[Ms] && Z.el[Ms](), O(Y, [V]);
    },
    enter(V) {
      let Y = v, Z = m, ie = p;
      if (!o.isMounted)
        if (r)
          Y = S || v, Z = R || m, ie = T || p;
        else
          return;
      let ye = !1;
      const se = V[kn] = (q) => {
        ye || (ye = !0, q ? O(ie, [V]) : O(Z, [V]), M.delayedLeave && M.delayedLeave(), V[kn] = void 0);
      };
      Y ? J(Y, [V, se]) : se();
    },
    leave(V, Y) {
      const Z = String(e.key);
      if (V[kn] && V[kn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return Y();
      O(w, [V]);
      let ie = !1;
      const ye = V[Ms] = (se) => {
        ie || (ie = !0, Y(), se ? O(x, [V]) : O(_, [V]), V[Ms] = void 0, N[Z] === e && delete N[Z]);
      };
      N[Z] = e, y ? J(y, [V, ye]) : ye();
    },
    clone(V) {
      const Y = nn(
        V,
        t,
        o,
        n,
        l
      );
      return l && l(Y), Y;
    }
  };
  return M;
}
function Na(e) {
  if (ea(e))
    return e = Hs(e), e.children = null, e;
}
function Ul(e) {
  if (!ea(e))
    return nr(e.type) && e.children ? ur(e.children) : e;
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
function lo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, lo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hl(e, t = !1, o) {
  let n = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === j ? (c.patchFlag & 128 && l++, n = n.concat(
      hl(c.children, t, u)
    )) : (t || c.type !== Ft) && n.push(u != null ? Hs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function fr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Un = /* @__PURE__ */ new WeakMap();
function Jo(e, t, o, n, l = !1) {
  if (Ze(e)) {
    e.forEach(
      (_, x) => Jo(
        _,
        t && (Ze(t) ? t[x] : t),
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
  const r = n.shapeFlag & 4 ? aa(n.component) : n.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, m = u.refs === ht ? u.refs = {} : u.refs, p = u.setupState, w = rt(p), y = p === ht ? Ti : (_) => ft(w, _);
  if (v != null && v !== d) {
    if (zl(t), $t(v))
      m[v] = null, y(v) && (p[v] = null);
    else if (Gt(v)) {
      v.value = null;
      const _ = t;
      _.k && (m[_.k] = null);
    }
  }
  if (tt(d))
    dn(d, u, 12, [c, m]);
  else {
    const _ = $t(d), x = Gt(d);
    if (_ || x) {
      const C = () => {
        if (e.f) {
          const S = _ ? y(d) ? p[d] : m[d] : d.value;
          if (l)
            Ze(S) && ll(S, r);
          else if (Ze(S))
            S.includes(r) || S.push(r);
          else if (_)
            m[d] = [r], y(d) && (p[d] = m[d]);
          else {
            const R = [r];
            d.value = R, e.k && (m[e.k] = R);
          }
        } else _ ? (m[d] = c, y(d) && (p[d] = c)) : x && (d.value = c, e.k && (m[e.k] = c));
      };
      if (c) {
        const S = () => {
          C(), Un.delete(e);
        };
        S.id = -1, Un.set(e, S), qt(S, o);
      } else
        zl(e), C();
    }
  }
}
function zl(e) {
  const t = Un.get(e);
  t && (t.flags |= 8, Un.delete(e));
}
Yn().requestIdleCallback;
Yn().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, ea = (e) => e.type.__isKeepAlive;
function vu(e, t) {
  mr(e, "a", t);
}
function pu(e, t) {
  mr(e, "da", t);
}
function mr(e, t, o = Bt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ta(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ea(l.parent.vnode) && gu(n, t, o, l), l = l.parent;
  }
}
function gu(e, t, o, n) {
  const l = ta(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Po(() => {
    ll(n[t], l);
  }, o);
}
function ta(e, t, o = Bt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ds();
      const u = fn(o), d = ps(t, o, e, c);
      return u(), Os(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const Us = (e) => (t, o = Bt) => {
  (!rn || e === "sp") && ta(e, (...n) => t(...n), o);
}, hu = Us("bm"), ct = Us("m"), yu = Us(
  "bu"
), vr = Us("u"), sa = Us(
  "bum"
), Po = Us("um"), wu = Us(
  "sp"
), _u = Us("rtg"), ku = Us("rtc");
function bu(e, t = Bt) {
  ta("ec", e, t);
}
const $u = "components", pr = Symbol.for("v-ndc");
function yl(e) {
  return $t(e) ? Cu($u, e, !1) || e : e || pr;
}
function Cu(e, t, o = !0, n = !1) {
  const l = Dt || Bt;
  if (l) {
    const r = l.type;
    {
      const u = fd(
        r,
        !1
      );
      if (u && (u === t || u === is(t) || u === Jn(is(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vl(l[e] || r[e], t) || // global registration
      Vl(l.appContext[e], t)
    );
    return !c && n ? r : c;
  }
}
function Vl(e, t) {
  return e && (e[t] || e[is(t)] || e[Jn(is(t))]);
}
function we(e, t, o, n) {
  let l;
  const r = o, c = Ze(e);
  if (c || $t(e)) {
    const u = c && oo(e);
    let d = !1, v = !1;
    u && (d = !as(e), v = As(e), e = Xn(e)), l = new Array(e.length);
    for (let m = 0, p = e.length; m < p; m++)
      l[m] = t(
        d ? v ? Io(vs(e[m])) : vs(e[m]) : e[m],
        m,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (pt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, v = u.length; d < v; d++) {
        const m = u[d];
        l[d] = t(e[m], m, d, r);
      }
    }
  else
    l = [];
  return l;
}
function Yt(e, t) {
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    if (Ze(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const r = n.fn(...l);
      return r && (r.key = n.key), r;
    } : n.fn);
  }
  return e;
}
function ot(e, t, o = {}, n, l) {
  if (Dt.ce || Dt.parent && ko(Dt.parent) && Dt.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), P(
      j,
      null,
      [k("slot", o, n && n())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), a();
  const c = r && gr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = P(
    j,
    {
      key: (u && !ms(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function gr(e) {
  return e.some((t) => ln(t) ? !(t.type === Ft || t.type === j && !gr(t.children)) : !0) ? e : null;
}
const qa = (e) => e ? Dr(e) ? aa(e) : qa(e.parent) : null, Qo = (
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
    $parent: (e) => qa(e.parent),
    $root: (e) => qa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => yr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      gl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Ou.bind(e)
  })
), La = (e, t) => e !== ht && !e.__isScriptSetup && ft(e, t), xu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
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
          return c[t] = 1, n[t];
        if (l !== ht && ft(l, t))
          return c[t] = 2, l[t];
        if (ft(r, t))
          return c[t] = 3, r[t];
        if (o !== ht && ft(o, t))
          return c[t] = 4, o[t];
        Ka && (c[t] = 0);
      }
    }
    const v = Qo[t];
    let m, p;
    if (v)
      return t === "$attrs" && zt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (m = u.__cssModules) && (m = m[t])
    )
      return m;
    if (o !== ht && ft(o, t))
      return c[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: l, ctx: r } = e;
    return La(l, t) ? (l[t] = o, !0) : n !== ht && ft(n, t) ? (n[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== ht && u[0] !== "$" && ft(e, u) || La(t, u) || ft(r, u) || ft(n, u) || ft(Qo, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ft(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Fl(e) {
  return Ze(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ka = !0;
function Su(e) {
  const t = yr(e), o = e.proxy, n = e.ctx;
  Ka = !1, t.beforeCreate && Bl(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: v,
    // lifecycle
    created: m,
    beforeMount: p,
    mounted: w,
    beforeUpdate: y,
    updated: _,
    activated: x,
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: R,
    destroyed: T,
    unmounted: E,
    render: N,
    renderTracked: O,
    renderTriggered: J,
    errorCaptured: M,
    serverPrefetch: V,
    // public API
    expose: Y,
    inheritAttrs: Z,
    // assets
    components: ie,
    directives: ye,
    filters: se
  } = t;
  if (v && Iu(v, n, null), c)
    for (const Ue in c) {
      const oe = c[Ue];
      tt(oe) && (n[Ue] = oe.bind(o));
    }
  if (l) {
    const Ue = l.call(o, o);
    pt(Ue) && (e.data = ro(Ue));
  }
  if (Ka = !0, r)
    for (const Ue in r) {
      const oe = r[Ue], ge = tt(oe) ? oe.bind(o, o) : tt(oe.get) ? oe.get.bind(o, o) : $s, A = !tt(oe) && tt(oe.set) ? oe.set.bind(o) : $s, me = D({
        get: ge,
        set: A
      });
      Object.defineProperty(n, Ue, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (Pe) => me.value = Pe
      });
    }
  if (u)
    for (const Ue in u)
      hr(u[Ue], n, o, Ue);
  if (d) {
    const Ue = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(Ue).forEach((oe) => {
      Nu(oe, Ue[oe]);
    });
  }
  m && Bl(m, e, "c");
  function ae(Ue, oe) {
    Ze(oe) ? oe.forEach((ge) => Ue(ge.bind(o))) : oe && Ue(oe.bind(o));
  }
  if (ae(hu, p), ae(ct, w), ae(yu, y), ae(vr, _), ae(vu, x), ae(pu, C), ae(bu, M), ae(ku, O), ae(_u, J), ae(sa, R), ae(Po, E), ae(wu, V), Ze(Y))
    if (Y.length) {
      const Ue = e.exposed || (e.exposed = {});
      Y.forEach((oe) => {
        Object.defineProperty(Ue, oe, {
          get: () => o[oe],
          set: (ge) => o[oe] = ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === $s && (e.render = N), Z != null && (e.inheritAttrs = Z), ie && (e.components = ie), ye && (e.directives = ye), V && fr(e);
}
function Iu(e, t, o = $s) {
  Ze(e) && (e = Ja(e));
  for (const n in e) {
    const l = e[n];
    let r;
    pt(l) ? "default" in l ? r = In(
      l.from || n,
      l.default,
      !0
    ) : r = In(l.from || n) : r = In(l), Gt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[n] = r;
  }
}
function Bl(e, t, o) {
  ps(
    Ze(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function hr(e, t, o, n) {
  let l = n.includes(".") ? kr(o, n) : () => o[n];
  if ($t(e)) {
    const r = t[e];
    tt(r) && kt(l, r);
  } else if (tt(e))
    kt(l, e.bind(o));
  else if (pt(e))
    if (Ze(e))
      e.forEach((r) => hr(r, t, o, n));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && kt(l, r, e);
    }
}
function yr(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (v) => zn(d, v, c, !0)
  ), zn(d, t, c)), pt(t) && r.set(t, d), d;
}
function zn(e, t, o, n = !1) {
  const { mixins: l, extends: r } = t;
  r && zn(e, r, o, !0), l && l.forEach(
    (c) => zn(e, c, o, !0)
  );
  for (const c in t)
    if (!(n && c === "expose")) {
      const u = Eu[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Eu = {
  data: Wl,
  props: Gl,
  emits: Gl,
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
  watch: Mu,
  // provide / inject
  provide: Wl,
  inject: Tu
};
function Wl(e, t) {
  return t ? e ? function() {
    return Mt(
      tt(e) ? e.call(this, this) : e,
      tt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Tu(e, t) {
  return Wo(Ja(e), Ja(t));
}
function Ja(e) {
  if (Ze(e)) {
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
function Gl(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Fl(e),
    Fl(t ?? {})
  ) : t;
}
function Mu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Ht(e[n], t[n]);
  return o;
}
function wr() {
  return {
    app: null,
    config: {
      isNativeTag: Ti,
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
let Pu = 0;
function Ru(e, t) {
  return function(n, l = null) {
    tt(n) || (n = Mt({}, n)), l != null && !pt(l) && (l = null);
    const r = wr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Pu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: vd,
      get config() {
        return r.config;
      },
      set config(m) {
      },
      use(m, ...p) {
        return c.has(m) || (m && tt(m.install) ? (c.add(m), m.install(v, ...p)) : tt(m) && (c.add(m), m(v, ...p))), v;
      },
      mixin(m) {
        return r.mixins.includes(m) || r.mixins.push(m), v;
      },
      component(m, p) {
        return p ? (r.components[m] = p, v) : r.components[m];
      },
      directive(m, p) {
        return p ? (r.directives[m] = p, v) : r.directives[m];
      },
      mount(m, p, w) {
        if (!d) {
          const y = v._ceVNode || k(n, l);
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, m, w), d = !0, v._container = m, m.__vue_app__ = v, aa(y.component);
        }
      },
      onUnmount(m) {
        u.push(m);
      },
      unmount() {
        d && (ps(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(m, p) {
        return r.provides[m] = p, v;
      },
      runWithContext(m) {
        const p = bo;
        bo = v;
        try {
          return m();
        } finally {
          bo = p;
        }
      }
    };
    return v;
  };
}
let bo = null;
function Nu(e, t) {
  if (Bt) {
    let o = Bt.provides;
    const n = Bt.parent && Bt.parent.provides;
    n === o && (o = Bt.provides = Object.create(n)), o[e] = t;
  }
}
function In(e, t, o = !1) {
  const n = $l();
  if (n || bo) {
    let l = bo ? bo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(n && n.proxy) : t;
  }
}
const Lu = Symbol.for("v-scx"), Du = () => In(Lu);
function kt(e, t, o) {
  return _r(e, t, o);
}
function _r(e, t, o = ht) {
  const { immediate: n, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = t && n || !t && r !== "post";
  let v;
  if (rn) {
    if (r === "sync") {
      const y = Du();
      v = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!d) {
      const y = () => {
      };
      return y.stop = $s, y.resume = $s, y.pause = $s, y;
    }
  }
  const m = Bt;
  u.call = (y, _, x) => ps(y, m, _, x);
  let p = !1;
  r === "post" ? u.scheduler = (y) => {
    qt(y, m && m.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (y, _) => {
    _ ? y() : gl(y);
  }), u.augmentJob = (y) => {
    t && (y.flags |= 4), p && (y.flags |= 2, m && (y.id = m.uid, y.i = m));
  };
  const w = iu(e, t, u);
  return rn && (v ? v.push(w) : d && w()), w;
}
function Ou(e, t, o) {
  const n = this.proxy, l = $t(e) ? e.includes(".") ? kr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const c = fn(this), u = _r(l, r.bind(n), o);
  return c(), u;
}
function kr(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const Au = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${is(t)}Modifiers`] || e[`${Ks(t)}Modifiers`];
function Uu(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ht;
  let l = o;
  const r = t.startsWith("update:"), c = r && Au(n, t.slice(7));
  c && (c.trim && (l = o.map((m) => $t(m) ? m.trim() : m)), c.number && (l = o.map(Qn)));
  let u, d = n[u = Ea(t)] || // also try camelCase event handler (#2249)
  n[u = Ea(is(t))];
  !d && r && (d = n[u = Ea(Ks(t))]), d && ps(
    d,
    e,
    6,
    l
  );
  const v = n[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ps(
      v,
      e,
      6,
      l
    );
  }
}
const zu = /* @__PURE__ */ new WeakMap();
function br(e, t, o = !1) {
  const n = o ? zu : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const m = br(v, t, !0);
      m && (u = !0, Mt(c, m));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (pt(e) && n.set(e, null), null) : (Ze(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), pt(e) && n.set(e, c), c);
}
function oa(e, t) {
  return !e || !qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Ks(t)) || ft(e, t));
}
function jl(e) {
  const {
    type: t,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: v,
    renderCache: m,
    props: p,
    data: w,
    setupState: y,
    ctx: _,
    inheritAttrs: x
  } = e, C = An(e);
  let S, R;
  try {
    if (o.shapeFlag & 4) {
      const E = l || n, N = E;
      S = bs(
        v.call(
          N,
          E,
          m,
          p,
          y,
          w,
          _
        )
      ), R = u;
    } else {
      const E = t;
      S = bs(
        E.length > 1 ? E(
          p,
          { attrs: u, slots: c, emit: d }
        ) : E(
          p,
          null
        )
      ), R = t.props ? u : Vu(u);
    }
  } catch (E) {
    Yo.length = 0, Zn(E, e, 1), S = k(Ft);
  }
  let T = S;
  if (R && x !== !1) {
    const E = Object.keys(R), { shapeFlag: N } = T;
    E.length && N & 7 && (r && E.some(al) && (R = Fu(
      R,
      r
    )), T = Hs(T, R, !1, !0));
  }
  return o.dirs && (T = Hs(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && lo(T, o.transition), S = T, An(C), S;
}
const Vu = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || qn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Fu = (e, t) => {
  const o = {};
  for (const n in e)
    (!al(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function Bu(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Hl(n, c, v) : !!c;
    if (d & 8) {
      const m = t.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        const w = m[p];
        if (c[w] !== n[w] && !oa(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Hl(n, c, v) : !0 : !!c;
  return !1;
}
function Hl(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (t[r] !== e[r] && !oa(o, r))
      return !0;
  }
  return !1;
}
function Wu({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const $r = {}, Cr = () => Object.create($r), xr = (e) => Object.getPrototypeOf(e) === $r;
function Gu(e, t, o, n = !1) {
  const l = {}, r = Cr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : Zc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function ju(e, t, o, n) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = rt(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const m = e.vnode.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        let w = m[p];
        if (oa(e.emitsOptions, w))
          continue;
        const y = t[w];
        if (d)
          if (ft(r, w))
            y !== r[w] && (r[w] = y, v = !0);
          else {
            const _ = is(w);
            l[_] = Qa(
              d,
              u,
              _,
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
    Sr(e, t, l, r) && (v = !0);
    let m;
    for (const p in u)
      (!t || // for camelCase
      !ft(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = Ks(p)) === p || !ft(t, m))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[m] !== void 0) && (l[p] = Qa(
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
  v && Rs(e.attrs, "set", "");
}
function Sr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (jo(d))
        continue;
      const v = t[d];
      let m;
      l && ft(l, m = is(d)) ? !r || !r.includes(m) ? o[m] = v : (u || (u = {}))[m] = v : oa(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, c = !0);
    }
  if (r) {
    const d = rt(o), v = u || ht;
    for (let m = 0; m < r.length; m++) {
      const p = r[m];
      o[p] = Qa(
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
function Qa(e, t, o, n, l, r) {
  const c = e[o];
  if (c != null) {
    const u = ft(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && tt(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          n = v[o];
        else {
          const m = fn(l);
          n = v[o] = d.call(
            null,
            t
          ), m();
        }
      } else
        n = d;
      l.ce && l.ce._setProp(o, n);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ks(o)) && (n = !0));
  }
  return n;
}
const Hu = /* @__PURE__ */ new WeakMap();
function Ir(e, t, o = !1) {
  const n = o ? Hu : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const m = (p) => {
      d = !0;
      const [w, y] = Ir(p, t, !0);
      Mt(c, w), y && u.push(...y);
    };
    !o && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!r && !d)
    return pt(e) && n.set(e, yo), yo;
  if (Ze(r))
    for (let m = 0; m < r.length; m++) {
      const p = is(r[m]);
      ql(p) && (c[p] = ht);
    }
  else if (r)
    for (const m in r) {
      const p = is(m);
      if (ql(p)) {
        const w = r[m], y = c[p] = Ze(w) || tt(w) ? { type: w } : Mt({}, w), _ = y.type;
        let x = !1, C = !0;
        if (Ze(_))
          for (let S = 0; S < _.length; ++S) {
            const R = _[S], T = tt(R) && R.name;
            if (T === "Boolean") {
              x = !0;
              break;
            } else T === "String" && (C = !1);
          }
        else
          x = tt(_) && _.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = x, y[
          1
          /* shouldCastTrue */
        ] = C, (x || ft(y, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return pt(e) && n.set(e, v), v;
}
function ql(e) {
  return e[0] !== "$" && !jo(e);
}
const wl = (e) => e === "_" || e === "_ctx" || e === "$stable", _l = (e) => Ze(e) ? e.map(bs) : [bs(e)], qu = (e, t, o) => {
  if (t._n)
    return t;
  const n = g((...l) => _l(t(...l)), o);
  return n._c = !1, n;
}, Er = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (wl(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = qu(l, r, n);
    else if (r != null) {
      const c = _l(r);
      t[l] = () => c;
    }
  }
}, Tr = (e, t) => {
  const o = _l(t);
  e.slots.default = () => o;
}, Mr = (e, t, o) => {
  for (const n in t)
    (o || !wl(n)) && (e[n] = t[n]);
}, Ku = (e, t, o) => {
  const n = e.slots = Cr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Mr(n, t, o), o && Ni(n, "_", l, !0)) : Er(t, n);
  } else t && Tr(e, t);
}, Ju = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, c = ht;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : Mr(l, t, o) : (r = !t.$stable, Er(t, l)), c = t;
  } else t && (Tr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !wl(u) && c[u] == null && delete l[u];
}, qt = ed;
function Qu(e) {
  return Yu(e);
}
function Yu(e, t) {
  const o = Yn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: v,
    setElementText: m,
    parentNode: p,
    nextSibling: w,
    setScopeId: y = $s,
    insertStaticContent: _
  } = e, x = (I, z, re, Ce = null, _e = null, ke = null, Ae = void 0, ze = null, Re = !!z.dynamicChildren) => {
    if (I === z)
      return;
    I && !to(I, z) && (Ce = H(I), Pe(I, _e, ke, !0), I = null), z.patchFlag === -2 && (Re = !1, z.dynamicChildren = null);
    const { type: Ie, ref: Je, shapeFlag: Be } = z;
    switch (Ie) {
      case na:
        C(I, z, re, Ce);
        break;
      case Ft:
        S(I, z, re, Ce);
        break;
      case Oa:
        I == null && R(z, re, Ce, Ae);
        break;
      case j:
        ie(
          I,
          z,
          re,
          Ce,
          _e,
          ke,
          Ae,
          ze,
          Re
        );
        break;
      default:
        Be & 1 ? N(
          I,
          z,
          re,
          Ce,
          _e,
          ke,
          Ae,
          ze,
          Re
        ) : Be & 6 ? ye(
          I,
          z,
          re,
          Ce,
          _e,
          ke,
          Ae,
          ze,
          Re
        ) : (Be & 64 || Be & 128) && Ie.process(
          I,
          z,
          re,
          Ce,
          _e,
          ke,
          Ae,
          ze,
          Re,
          ue
        );
    }
    Je != null && _e ? Jo(Je, I && I.ref, ke, z || I, !z) : Je == null && I && I.ref != null && Jo(I.ref, null, ke, I, !0);
  }, C = (I, z, re, Ce) => {
    if (I == null)
      n(
        z.el = u(z.children),
        re,
        Ce
      );
    else {
      const _e = z.el = I.el;
      z.children !== I.children && v(_e, z.children);
    }
  }, S = (I, z, re, Ce) => {
    I == null ? n(
      z.el = d(z.children || ""),
      re,
      Ce
    ) : z.el = I.el;
  }, R = (I, z, re, Ce) => {
    [I.el, I.anchor] = _(
      I.children,
      z,
      re,
      Ce,
      I.el,
      I.anchor
    );
  }, T = ({ el: I, anchor: z }, re, Ce) => {
    let _e;
    for (; I && I !== z; )
      _e = w(I), n(I, re, Ce), I = _e;
    n(z, re, Ce);
  }, E = ({ el: I, anchor: z }) => {
    let re;
    for (; I && I !== z; )
      re = w(I), l(I), I = re;
    l(z);
  }, N = (I, z, re, Ce, _e, ke, Ae, ze, Re) => {
    if (z.type === "svg" ? Ae = "svg" : z.type === "math" && (Ae = "mathml"), I == null)
      O(
        z,
        re,
        Ce,
        _e,
        ke,
        Ae,
        ze,
        Re
      );
    else {
      const Ie = I.el && I.el._isVueCE ? I.el : null;
      try {
        Ie && Ie._beginPatch(), V(
          I,
          z,
          _e,
          ke,
          Ae,
          ze,
          Re
        );
      } finally {
        Ie && Ie._endPatch();
      }
    }
  }, O = (I, z, re, Ce, _e, ke, Ae, ze) => {
    let Re, Ie;
    const { props: Je, shapeFlag: Be, transition: ve, dirs: Q } = I;
    if (Re = I.el = c(
      I.type,
      ke,
      Je && Je.is,
      Je
    ), Be & 8 ? m(Re, I.children) : Be & 16 && M(
      I.children,
      Re,
      null,
      Ce,
      _e,
      Da(I, ke),
      Ae,
      ze
    ), Q && Qs(I, null, Ce, "created"), J(Re, I, I.scopeId, Ae, Ce), Je) {
      for (const be in Je)
        be !== "value" && !jo(be) && r(Re, be, null, Je[be], ke, Ce);
      "value" in Je && r(Re, "value", null, Je.value, ke), (Ie = Je.onVnodeBeforeMount) && hs(Ie, Ce, I);
    }
    Q && Qs(I, null, Ce, "beforeMount");
    const qe = Xu(_e, ve);
    qe && ve.beforeEnter(Re), n(Re, z, re), ((Ie = Je && Je.onVnodeMounted) || qe || Q) && qt(() => {
      Ie && hs(Ie, Ce, I), qe && ve.enter(Re), Q && Qs(I, null, Ce, "mounted");
    }, _e);
  }, J = (I, z, re, Ce, _e) => {
    if (re && y(I, re), Ce)
      for (let ke = 0; ke < Ce.length; ke++)
        y(I, Ce[ke]);
    if (_e) {
      let ke = _e.subTree;
      if (z === ke || Rr(ke.type) && (ke.ssContent === z || ke.ssFallback === z)) {
        const Ae = _e.vnode;
        J(
          I,
          Ae,
          Ae.scopeId,
          Ae.slotScopeIds,
          _e.parent
        );
      }
    }
  }, M = (I, z, re, Ce, _e, ke, Ae, ze, Re = 0) => {
    for (let Ie = Re; Ie < I.length; Ie++) {
      const Je = I[Ie] = ze ? Gs(I[Ie]) : bs(I[Ie]);
      x(
        null,
        Je,
        z,
        re,
        Ce,
        _e,
        ke,
        Ae,
        ze
      );
    }
  }, V = (I, z, re, Ce, _e, ke, Ae) => {
    const ze = z.el = I.el;
    let { patchFlag: Re, dynamicChildren: Ie, dirs: Je } = z;
    Re |= I.patchFlag & 16;
    const Be = I.props || ht, ve = z.props || ht;
    let Q;
    if (re && Ys(re, !1), (Q = ve.onVnodeBeforeUpdate) && hs(Q, re, z, I), Je && Qs(z, I, re, "beforeUpdate"), re && Ys(re, !0), (Be.innerHTML && ve.innerHTML == null || Be.textContent && ve.textContent == null) && m(ze, ""), Ie ? Y(
      I.dynamicChildren,
      Ie,
      ze,
      re,
      Ce,
      Da(z, _e),
      ke
    ) : Ae || oe(
      I,
      z,
      ze,
      null,
      re,
      Ce,
      Da(z, _e),
      ke,
      !1
    ), Re > 0) {
      if (Re & 16)
        Z(ze, Be, ve, re, _e);
      else if (Re & 2 && Be.class !== ve.class && r(ze, "class", null, ve.class, _e), Re & 4 && r(ze, "style", Be.style, ve.style, _e), Re & 8) {
        const qe = z.dynamicProps;
        for (let be = 0; be < qe.length; be++) {
          const Xe = qe[be], Ve = Be[Xe], Ne = ve[Xe];
          (Ne !== Ve || Xe === "value") && r(ze, Xe, Ve, Ne, _e, re);
        }
      }
      Re & 1 && I.children !== z.children && m(ze, z.children);
    } else !Ae && Ie == null && Z(ze, Be, ve, re, _e);
    ((Q = ve.onVnodeUpdated) || Je) && qt(() => {
      Q && hs(Q, re, z, I), Je && Qs(z, I, re, "updated");
    }, Ce);
  }, Y = (I, z, re, Ce, _e, ke, Ae) => {
    for (let ze = 0; ze < z.length; ze++) {
      const Re = I[ze], Ie = z[ze], Je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Re.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !to(Re, Ie) || // - In the case of a component, it could contain anything.
        Re.shapeFlag & 198) ? p(Re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          re
        )
      );
      x(
        Re,
        Ie,
        Je,
        null,
        Ce,
        _e,
        ke,
        Ae,
        !0
      );
    }
  }, Z = (I, z, re, Ce, _e) => {
    if (z !== re) {
      if (z !== ht)
        for (const ke in z)
          !jo(ke) && !(ke in re) && r(
            I,
            ke,
            z[ke],
            null,
            _e,
            Ce
          );
      for (const ke in re) {
        if (jo(ke)) continue;
        const Ae = re[ke], ze = z[ke];
        Ae !== ze && ke !== "value" && r(I, ke, ze, Ae, _e, Ce);
      }
      "value" in re && r(I, "value", z.value, re.value, _e);
    }
  }, ie = (I, z, re, Ce, _e, ke, Ae, ze, Re) => {
    const Ie = z.el = I ? I.el : u(""), Je = z.anchor = I ? I.anchor : u("");
    let { patchFlag: Be, dynamicChildren: ve, slotScopeIds: Q } = z;
    Q && (ze = ze ? ze.concat(Q) : Q), I == null ? (n(Ie, re, Ce), n(Je, re, Ce), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      z.children || [],
      re,
      Je,
      _e,
      ke,
      Ae,
      ze,
      Re
    )) : Be > 0 && Be & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren ? (Y(
      I.dynamicChildren,
      ve,
      re,
      _e,
      ke,
      Ae,
      ze
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (z.key != null || _e && z === _e.subTree) && kl(
      I,
      z,
      !0
      /* shallow */
    )) : oe(
      I,
      z,
      re,
      Je,
      _e,
      ke,
      Ae,
      ze,
      Re
    );
  }, ye = (I, z, re, Ce, _e, ke, Ae, ze, Re) => {
    z.slotScopeIds = ze, I == null ? z.shapeFlag & 512 ? _e.ctx.activate(
      z,
      re,
      Ce,
      Ae,
      Re
    ) : se(
      z,
      re,
      Ce,
      _e,
      ke,
      Ae,
      Re
    ) : q(I, z, Re);
  }, se = (I, z, re, Ce, _e, ke, Ae) => {
    const ze = I.component = id(
      I,
      Ce,
      _e
    );
    if (ea(I) && (ze.ctx.renderer = ue), rd(ze, !1, Ae), ze.asyncDep) {
      if (_e && _e.registerDep(ze, ae, Ae), !I.el) {
        const Re = ze.subTree = k(Ft);
        S(null, Re, z, re), I.placeholder = Re.el;
      }
    } else
      ae(
        ze,
        I,
        z,
        re,
        _e,
        ke,
        Ae
      );
  }, q = (I, z, re) => {
    const Ce = z.component = I.component;
    if (Bu(I, z, re))
      if (Ce.asyncDep && !Ce.asyncResolved) {
        Ue(Ce, z, re);
        return;
      } else
        Ce.next = z, Ce.update();
    else
      z.el = I.el, Ce.vnode = z;
  }, ae = (I, z, re, Ce, _e, ke, Ae) => {
    const ze = () => {
      if (I.isMounted) {
        let { next: Be, bu: ve, u: Q, parent: qe, vnode: be } = I;
        {
          const de = Pr(I);
          if (de) {
            Be && (Be.el = be.el, Ue(I, Be, Ae)), de.asyncDep.then(() => {
              I.isUnmounted || ze();
            });
            return;
          }
        }
        let Xe = Be, Ve;
        Ys(I, !1), Be ? (Be.el = be.el, Ue(I, Be, Ae)) : Be = be, ve && xn(ve), (Ve = Be.props && Be.props.onVnodeBeforeUpdate) && hs(Ve, qe, Be, be), Ys(I, !0);
        const Ne = jl(I), W = I.subTree;
        I.subTree = Ne, x(
          W,
          Ne,
          // parent may have changed if it's in a teleport
          p(W.el),
          // anchor may have changed if it's in a fragment
          H(W),
          I,
          _e,
          ke
        ), Be.el = Ne.el, Xe === null && Wu(I, Ne.el), Q && qt(Q, _e), (Ve = Be.props && Be.props.onVnodeUpdated) && qt(
          () => hs(Ve, qe, Be, be),
          _e
        );
      } else {
        let Be;
        const { el: ve, props: Q } = z, { bm: qe, m: be, parent: Xe, root: Ve, type: Ne } = I, W = ko(z);
        Ys(I, !1), qe && xn(qe), !W && (Be = Q && Q.onVnodeBeforeMount) && hs(Be, Xe, z), Ys(I, !0);
        {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(Ne);
          const de = I.subTree = jl(I);
          x(
            null,
            de,
            re,
            Ce,
            I,
            _e,
            ke
          ), z.el = de.el;
        }
        if (be && qt(be, _e), !W && (Be = Q && Q.onVnodeMounted)) {
          const de = z;
          qt(
            () => hs(Be, Xe, de),
            _e
          );
        }
        (z.shapeFlag & 256 || Xe && ko(Xe.vnode) && Xe.vnode.shapeFlag & 256) && I.a && qt(I.a, _e), I.isMounted = !0, z = re = Ce = null;
      }
    };
    I.scope.on();
    const Re = I.effect = new Ai(ze);
    I.scope.off();
    const Ie = I.update = Re.run.bind(Re), Je = I.job = Re.runIfDirty.bind(Re);
    Je.i = I, Je.id = I.uid, Re.scheduler = () => gl(Je), Ys(I, !0), Ie();
  }, Ue = (I, z, re) => {
    z.component = I;
    const Ce = I.vnode.props;
    I.vnode = z, I.next = null, ju(I, z.props, Ce, re), Ju(I, z.children, re), Ds(), Ll(I), Os();
  }, oe = (I, z, re, Ce, _e, ke, Ae, ze, Re = !1) => {
    const Ie = I && I.children, Je = I ? I.shapeFlag : 0, Be = z.children, { patchFlag: ve, shapeFlag: Q } = z;
    if (ve > 0) {
      if (ve & 128) {
        A(
          Ie,
          Be,
          re,
          Ce,
          _e,
          ke,
          Ae,
          ze,
          Re
        );
        return;
      } else if (ve & 256) {
        ge(
          Ie,
          Be,
          re,
          Ce,
          _e,
          ke,
          Ae,
          ze,
          Re
        );
        return;
      }
    }
    Q & 8 ? (Je & 16 && ee(Ie, _e, ke), Be !== Ie && m(re, Be)) : Je & 16 ? Q & 16 ? A(
      Ie,
      Be,
      re,
      Ce,
      _e,
      ke,
      Ae,
      ze,
      Re
    ) : ee(Ie, _e, ke, !0) : (Je & 8 && m(re, ""), Q & 16 && M(
      Be,
      re,
      Ce,
      _e,
      ke,
      Ae,
      ze,
      Re
    ));
  }, ge = (I, z, re, Ce, _e, ke, Ae, ze, Re) => {
    I = I || yo, z = z || yo;
    const Ie = I.length, Je = z.length, Be = Math.min(Ie, Je);
    let ve;
    for (ve = 0; ve < Be; ve++) {
      const Q = z[ve] = Re ? Gs(z[ve]) : bs(z[ve]);
      x(
        I[ve],
        Q,
        re,
        null,
        _e,
        ke,
        Ae,
        ze,
        Re
      );
    }
    Ie > Je ? ee(
      I,
      _e,
      ke,
      !0,
      !1,
      Be
    ) : M(
      z,
      re,
      Ce,
      _e,
      ke,
      Ae,
      ze,
      Re,
      Be
    );
  }, A = (I, z, re, Ce, _e, ke, Ae, ze, Re) => {
    let Ie = 0;
    const Je = z.length;
    let Be = I.length - 1, ve = Je - 1;
    for (; Ie <= Be && Ie <= ve; ) {
      const Q = I[Ie], qe = z[Ie] = Re ? Gs(z[Ie]) : bs(z[Ie]);
      if (to(Q, qe))
        x(
          Q,
          qe,
          re,
          null,
          _e,
          ke,
          Ae,
          ze,
          Re
        );
      else
        break;
      Ie++;
    }
    for (; Ie <= Be && Ie <= ve; ) {
      const Q = I[Be], qe = z[ve] = Re ? Gs(z[ve]) : bs(z[ve]);
      if (to(Q, qe))
        x(
          Q,
          qe,
          re,
          null,
          _e,
          ke,
          Ae,
          ze,
          Re
        );
      else
        break;
      Be--, ve--;
    }
    if (Ie > Be) {
      if (Ie <= ve) {
        const Q = ve + 1, qe = Q < Je ? z[Q].el : Ce;
        for (; Ie <= ve; )
          x(
            null,
            z[Ie] = Re ? Gs(z[Ie]) : bs(z[Ie]),
            re,
            qe,
            _e,
            ke,
            Ae,
            ze,
            Re
          ), Ie++;
      }
    } else if (Ie > ve)
      for (; Ie <= Be; )
        Pe(I[Ie], _e, ke, !0), Ie++;
    else {
      const Q = Ie, qe = Ie, be = /* @__PURE__ */ new Map();
      for (Ie = qe; Ie <= ve; Ie++) {
        const L = z[Ie] = Re ? Gs(z[Ie]) : bs(z[Ie]);
        L.key != null && be.set(L.key, Ie);
      }
      let Xe, Ve = 0;
      const Ne = ve - qe + 1;
      let W = !1, de = 0;
      const pe = new Array(Ne);
      for (Ie = 0; Ie < Ne; Ie++) pe[Ie] = 0;
      for (Ie = Q; Ie <= Be; Ie++) {
        const L = I[Ie];
        if (Ve >= Ne) {
          Pe(L, _e, ke, !0);
          continue;
        }
        let U;
        if (L.key != null)
          U = be.get(L.key);
        else
          for (Xe = qe; Xe <= ve; Xe++)
            if (pe[Xe - qe] === 0 && to(L, z[Xe])) {
              U = Xe;
              break;
            }
        U === void 0 ? Pe(L, _e, ke, !0) : (pe[U - qe] = Ie + 1, U >= de ? de = U : W = !0, x(
          L,
          z[U],
          re,
          null,
          _e,
          ke,
          Ae,
          ze,
          Re
        ), Ve++);
      }
      const Qe = W ? Zu(pe) : yo;
      for (Xe = Qe.length - 1, Ie = Ne - 1; Ie >= 0; Ie--) {
        const L = qe + Ie, U = z[L], te = z[L + 1], De = L + 1 < Je ? (
          // #13559, fallback to el placeholder for unresolved async component
          te.el || te.placeholder
        ) : Ce;
        pe[Ie] === 0 ? x(
          null,
          U,
          re,
          De,
          _e,
          ke,
          Ae,
          ze,
          Re
        ) : W && (Xe < 0 || Ie !== Qe[Xe] ? me(U, re, De, 2) : Xe--);
      }
    }
  }, me = (I, z, re, Ce, _e = null) => {
    const { el: ke, type: Ae, transition: ze, children: Re, shapeFlag: Ie } = I;
    if (Ie & 6) {
      me(I.component.subTree, z, re, Ce);
      return;
    }
    if (Ie & 128) {
      I.suspense.move(z, re, Ce);
      return;
    }
    if (Ie & 64) {
      Ae.move(I, z, re, ue);
      return;
    }
    if (Ae === j) {
      n(ke, z, re);
      for (let Be = 0; Be < Re.length; Be++)
        me(Re[Be], z, re, Ce);
      n(I.anchor, z, re);
      return;
    }
    if (Ae === Oa) {
      T(I, z, re);
      return;
    }
    if (Ce !== 2 && Ie & 1 && ze)
      if (Ce === 0)
        ze.beforeEnter(ke), n(ke, z, re), qt(() => ze.enter(ke), _e);
      else {
        const { leave: Be, delayLeave: ve, afterLeave: Q } = ze, qe = () => {
          I.ctx.isUnmounted ? l(ke) : n(ke, z, re);
        }, be = () => {
          ke._isLeaving && ke[Ms](
            !0
            /* cancelled */
          ), Be(ke, () => {
            qe(), Q && Q();
          });
        };
        ve ? ve(ke, qe, be) : be();
      }
    else
      n(ke, z, re);
  }, Pe = (I, z, re, Ce = !1, _e = !1) => {
    const {
      type: ke,
      props: Ae,
      ref: ze,
      children: Re,
      dynamicChildren: Ie,
      shapeFlag: Je,
      patchFlag: Be,
      dirs: ve,
      cacheIndex: Q
    } = I;
    if (Be === -2 && (_e = !1), ze != null && (Ds(), Jo(ze, null, re, I, !0), Os()), Q != null && (z.renderCache[Q] = void 0), Je & 256) {
      z.ctx.deactivate(I);
      return;
    }
    const qe = Je & 1 && ve, be = !ko(I);
    let Xe;
    if (be && (Xe = Ae && Ae.onVnodeBeforeUnmount) && hs(Xe, z, I), Je & 6)
      G(I.component, re, Ce);
    else {
      if (Je & 128) {
        I.suspense.unmount(re, Ce);
        return;
      }
      qe && Qs(I, null, z, "beforeUnmount"), Je & 64 ? I.type.remove(
        I,
        z,
        re,
        ue,
        Ce
      ) : Ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ke !== j || Be > 0 && Be & 64) ? ee(
        Ie,
        z,
        re,
        !1,
        !0
      ) : (ke === j && Be & 384 || !_e && Je & 16) && ee(Re, z, re), Ce && He(I);
    }
    (be && (Xe = Ae && Ae.onVnodeUnmounted) || qe) && qt(() => {
      Xe && hs(Xe, z, I), qe && Qs(I, null, z, "unmounted");
    }, re);
  }, He = (I) => {
    const { type: z, el: re, anchor: Ce, transition: _e } = I;
    if (z === j) {
      Ee(re, Ce);
      return;
    }
    if (z === Oa) {
      E(I);
      return;
    }
    const ke = () => {
      l(re), _e && !_e.persisted && _e.afterLeave && _e.afterLeave();
    };
    if (I.shapeFlag & 1 && _e && !_e.persisted) {
      const { leave: Ae, delayLeave: ze } = _e, Re = () => Ae(re, ke);
      ze ? ze(I.el, ke, Re) : Re();
    } else
      ke();
  }, Ee = (I, z) => {
    let re;
    for (; I !== z; )
      re = w(I), l(I), I = re;
    l(z);
  }, G = (I, z, re) => {
    const { bum: Ce, scope: _e, job: ke, subTree: Ae, um: ze, m: Re, a: Ie } = I;
    Kl(Re), Kl(Ie), Ce && xn(Ce), _e.stop(), ke && (ke.flags |= 8, Pe(Ae, I, z, re)), ze && qt(ze, z), qt(() => {
      I.isUnmounted = !0;
    }, z);
  }, ee = (I, z, re, Ce = !1, _e = !1, ke = 0) => {
    for (let Ae = ke; Ae < I.length; Ae++)
      Pe(I[Ae], z, re, Ce, _e);
  }, H = (I) => {
    if (I.shapeFlag & 6)
      return H(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const z = w(I.anchor || I.el), re = z && z[or];
    return re ? w(re) : z;
  };
  let X = !1;
  const xe = (I, z, re) => {
    I == null ? z._vnode && Pe(z._vnode, null, null, !0) : x(
      z._vnode || null,
      I,
      z,
      null,
      null,
      null,
      re
    ), z._vnode = I, X || (X = !0, Ll(), er(), X = !1);
  }, ue = {
    p: x,
    um: Pe,
    m: me,
    r: He,
    mt: se,
    mc: M,
    pc: oe,
    pbc: Y,
    n: H,
    o: e
  };
  return {
    render: xe,
    hydrate: void 0,
    createApp: Ru(xe)
  };
}
function Da({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Ys({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function kl(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Ze(n) && Ze(l))
    for (let r = 0; r < n.length; r++) {
      const c = n[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Gs(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && kl(c, u)), u.type === na && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Ft && !u.el && (u.el = c.el);
    }
}
function Zu(e) {
  const t = e.slice(), o = [0];
  let n, l, r, c, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        t[n] = l, o.push(n);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (t[n] = o[r - 1]), o[r] = n);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = t[c];
  return o;
}
function Pr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pr(t);
}
function Kl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Rr = (e) => e.__isSuspense;
function ed(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : uu(e);
}
const j = Symbol.for("v-fgt"), na = Symbol.for("v-txt"), Ft = Symbol.for("v-cmt"), Oa = Symbol.for("v-stc"), Yo = [];
let es = null;
function a(e = !1) {
  Yo.push(es = e ? null : []);
}
function td() {
  Yo.pop(), es = Yo[Yo.length - 1] || null;
}
let an = 1;
function Vn(e, t = !1) {
  an += e, e < 0 && es && t && (es.hasOnce = !0);
}
function Nr(e) {
  return e.dynamicChildren = an > 0 ? es || yo : null, td(), an > 0 && es && es.push(e), e;
}
function i(e, t, o, n, l, r) {
  return Nr(
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
function P(e, t, o, n, l) {
  return Nr(
    k(
      e,
      t,
      o,
      n,
      l,
      !0
    )
  );
}
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function to(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Lr = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Gt(e) || tt(e) ? { i: Dt, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, r = e === j ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lr(t),
    ref: t && En(t),
    scopeId: sr,
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
    ctx: Dt
  };
  return u ? (bl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), an > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const k = sd;
function sd(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === pr) && (e = Ft), ln(e)) {
    const u = Hs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && bl(u, o), an > 0 && !r && es && (u.shapeFlag & 6 ? es[es.indexOf(e)] = u : es.push(u)), u.patchFlag = -2, u;
  }
  if (md(e) && (e = e.__vccOpts), t) {
    t = od(t);
    let { class: u, style: d } = t;
    u && !$t(u) && (t.class = Fe(u)), pt(d) && (pl(d) && !Ze(d) && (d = Mt({}, d)), t.style = Wt(d));
  }
  const c = $t(e) ? 1 : Rr(e) ? 128 : nr(e) ? 64 : pt(e) ? 4 : tt(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    n,
    l,
    c,
    r,
    !0
  );
}
function od(e) {
  return e ? pl(e) || xr(e) ? Mt({}, e) : e : null;
}
function Hs(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? nd(l || {}, t) : l, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Lr(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ze(r) ? r.concat(En(t)) : [r, En(t)] : En(t)
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
    patchFlag: t && e.type !== j ? c === -1 ? 16 : c | 16 : c,
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
    m,
    d.clone(m)
  ), m;
}
function $(e = " ", t = 0) {
  return k(na, null, e, t);
}
function h(e = "", t = !1) {
  return t ? (a(), P(Ft, null, e)) : k(Ft, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? k(Ft) : Ze(e) ? k(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ln(e) ? Gs(e) : k(na, null, String(e));
}
function Gs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hs(e);
}
function bl(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), bl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !xr(t) ? t._ctx = Dt : l === 3 && Dt && (Dt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: Dt }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [$(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function nd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Fe([t.class, n.class]));
      else if (l === "style")
        t.style = Wt([t.style, n.style]);
      else if (qn(l)) {
        const r = t[l], c = n[l];
        c && r !== c && !(Ze(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
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
const ad = wr();
let ld = 0;
function id(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || ad, r = {
    uid: ld++,
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
    scope: new Nc(
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
    propsOptions: Ir(n, l),
    emitsOptions: br(n, l),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Uu.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const $l = () => Bt || Dt;
let Fn, Ya;
{
  const e = Yn(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Bt = o
  ), Ya = t(
    "__VUE_SSR_SETTERS__",
    (o) => rn = o
  );
}
const fn = (e) => {
  const t = Bt;
  return Fn(e), e.scope.on(), () => {
    e.scope.off(), Fn(t);
  };
}, Jl = () => {
  Bt && Bt.scope.off(), Fn(null);
};
function Dr(e) {
  return e.vnode.shapeFlag & 4;
}
let rn = !1;
function rd(e, t = !1, o = !1) {
  t && Ya(t);
  const { props: n, children: l } = e.vnode, r = Dr(e);
  Gu(e, n, r, t), Ku(e, l, o || t);
  const c = r ? cd(e, t) : void 0;
  return t && Ya(!1), c;
}
function cd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xu);
  const { setup: n } = o;
  if (n) {
    Ds();
    const l = e.setupContext = n.length > 1 ? dd(e) : null, r = fn(e), c = dn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Mi(c);
    if (Os(), r(), (u || e.sp) && !ko(e) && fr(e), u) {
      if (c.then(Jl, Jl), t)
        return c.then((d) => {
          Ql(e, d);
        }).catch((d) => {
          Zn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Ql(e, c);
  } else
    Or(e);
}
function Ql(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : pt(t) && (e.setupState = Yi(t)), Or(e);
}
function Or(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || $s);
  {
    const l = fn(e);
    Ds();
    try {
      Su(e);
    } finally {
      Os(), l();
    }
  }
}
const ud = {
  get(e, t) {
    return zt(e, "get", ""), e[t];
  }
};
function dd(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, ud),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function aa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yi(eu(e.exposed)), {
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
function fd(e, t = !0) {
  return tt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function md(e) {
  return tt(e) && "__vccOpts" in e;
}
const D = (e, t) => au(e, t, rn);
function Ro(e, t, o) {
  try {
    Vn(-1);
    const n = arguments.length;
    return n === 2 ? pt(t) && !Ze(t) ? ln(t) ? k(e, null, [t]) : k(e, t) : k(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && ln(o) && (o = [o]), k(e, t, o));
  } finally {
    Vn(1);
  }
}
const vd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xa;
const Yl = typeof window < "u" && window.trustedTypes;
if (Yl)
  try {
    Xa = /* @__PURE__ */ Yl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ar = Xa ? (e) => Xa.createHTML(e) : (e) => e, pd = "http://www.w3.org/2000/svg", gd = "http://www.w3.org/1998/Math/MathML", Ts = typeof document < "u" ? document : null, Xl = Ts && /* @__PURE__ */ Ts.createElement("template"), hd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Ts.createElementNS(pd, e) : t === "mathml" ? Ts.createElementNS(gd, e) : o ? Ts.createElement(e, { is: o }) : Ts.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => Ts.createTextNode(e),
  createComment: (e) => Ts.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ts.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, n, l, r) {
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      Xl.innerHTML = Ar(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Xl.content;
      if (n === "svg" || n === "mathml") {
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
}, Vs = "transition", Oo = "animation", Eo = Symbol("_vtc"), Ur = {
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
}, zr = /* @__PURE__ */ Mt(
  {},
  rr,
  Ur
), yd = (e) => (e.displayName = "Transition", e.props = zr, e), wd = /* @__PURE__ */ yd(
  (e, { slots: t }) => Ro(mu, Vr(e), t)
), Xs = (e, t = []) => {
  Ze(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, Zl = (e) => e ? Ze(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Vr(e) {
  const t = {};
  for (const ie in e)
    ie in Ur || (t[ie] = e[ie]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = c,
    appearToClass: m = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: y = `${o}-leave-to`
  } = e, _ = _d(l), x = _ && _[0], C = _ && _[1], {
    onBeforeEnter: S,
    onEnter: R,
    onEnterCancelled: T,
    onLeave: E,
    onLeaveCancelled: N,
    onBeforeAppear: O = S,
    onAppear: J = R,
    onAppearCancelled: M = T
  } = t, V = (ie, ye, se, q) => {
    ie._enterCancelled = q, Fs(ie, ye ? m : u), Fs(ie, ye ? v : c), se && se();
  }, Y = (ie, ye) => {
    ie._isLeaving = !1, Fs(ie, p), Fs(ie, y), Fs(ie, w), ye && ye();
  }, Z = (ie) => (ye, se) => {
    const q = ie ? J : R, ae = () => V(ye, ie, se);
    Xs(q, [ye, ae]), ei(() => {
      Fs(ye, ie ? d : r), ws(ye, ie ? m : u), Zl(q) || ti(ye, n, x, ae);
    });
  };
  return Mt(t, {
    onBeforeEnter(ie) {
      Xs(S, [ie]), ws(ie, r), ws(ie, c);
    },
    onBeforeAppear(ie) {
      Xs(O, [ie]), ws(ie, d), ws(ie, v);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(ie, ye) {
      ie._isLeaving = !0;
      const se = () => Y(ie, ye);
      ws(ie, p), ie._enterCancelled ? (ws(ie, w), Za(ie)) : (Za(ie), ws(ie, w)), ei(() => {
        ie._isLeaving && (Fs(ie, p), ws(ie, y), Zl(E) || ti(ie, n, C, se));
      }), Xs(E, [ie, se]);
    },
    onEnterCancelled(ie) {
      V(ie, !1, void 0, !0), Xs(T, [ie]);
    },
    onAppearCancelled(ie) {
      V(ie, !0, void 0, !0), Xs(M, [ie]);
    },
    onLeaveCancelled(ie) {
      Y(ie), Xs(N, [ie]);
    }
  });
}
function _d(e) {
  if (e == null)
    return null;
  if (pt(e))
    return [Aa(e.enter), Aa(e.leave)];
  {
    const t = Aa(e);
    return [t, t];
  }
}
function Aa(e) {
  return xc(e);
}
function ws(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function Fs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Eo];
  o && (o.delete(t), o.size || (e[Eo] = void 0));
}
function ei(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let kd = 0;
function ti(e, t, o, n) {
  const l = e._endId = ++kd, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Fr(e, t);
  if (!c)
    return n();
  const v = c + "end";
  let m = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (y) => {
    y.target === e && ++m >= d && p();
  };
  setTimeout(() => {
    m < d && p();
  }, u + 1), e.addEventListener(v, w);
}
function Fr(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Vs}Delay`), r = n(`${Vs}Duration`), c = si(l, r), u = n(`${Oo}Delay`), d = n(`${Oo}Duration`), v = si(u, d);
  let m = null, p = 0, w = 0;
  t === Vs ? c > 0 && (m = Vs, p = c, w = r.length) : t === Oo ? v > 0 && (m = Oo, p = v, w = d.length) : (p = Math.max(c, v), m = p > 0 ? c > v ? Vs : Oo : null, w = m ? m === Vs ? r.length : d.length : 0);
  const y = m === Vs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Vs}Property`).toString()
  );
  return {
    type: m,
    timeout: p,
    propCount: w,
    hasTransform: y
  };
}
function si(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => oi(o) + oi(e[n])));
}
function oi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Za(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function bd(e, t, o) {
  const n = e[Eo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ni = Symbol("_vod"), $d = Symbol("_vsh"), Cd = Symbol(""), xd = /(?:^|;)\s*display\s*:/;
function Sd(e, t, o) {
  const n = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if ($t(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Tn(n, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Tn(n, c, "");
    for (const c in o)
      c === "display" && (r = !0), Tn(n, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = n[Cd];
      c && (o += ";" + c), n.cssText = o, r = xd.test(o);
    }
  } else t && e.removeAttribute("style");
  ni in e && (e[ni] = r ? n.display : "", e[$d] && (n.display = "none"));
}
const ai = /\s*!important$/;
function Tn(e, t, o) {
  if (Ze(o))
    o.forEach((n) => Tn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Id(e, t);
    ai.test(o) ? e.setProperty(
      Ks(n),
      o.replace(ai, ""),
      "important"
    ) : e[n] = o;
  }
}
const li = ["Webkit", "Moz", "ms"], Ua = {};
function Id(e, t) {
  const o = Ua[t];
  if (o)
    return o;
  let n = is(t);
  if (n !== "filter" && n in e)
    return Ua[t] = n;
  n = Jn(n);
  for (let l = 0; l < li.length; l++) {
    const r = li[l] + n;
    if (r in e)
      return Ua[t] = r;
  }
  return t;
}
const ii = "http://www.w3.org/1999/xlink";
function ri(e, t, o, n, l, r = Pc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(ii, t.slice(6, t.length)) : e.setAttributeNS(ii, t, o) : o == null || r && !Li(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ms(o) ? String(o) : o
  );
}
function ci(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Ar(o) : o);
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
    u === "boolean" ? o = Li(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Ls(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Ed(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const ui = Symbol("_vei");
function Td(e, t, o, n, l = null) {
  const r = e[ui] || (e[ui] = {}), c = r[t];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = Md(t);
    if (n) {
      const v = r[t] = Nd(
        n,
        l
      );
      Ls(e, u, v, d);
    } else c && (Ed(e, u, c, d), r[t] = void 0);
  }
}
const di = /(?:Once|Passive|Capture)$/;
function Md(e) {
  let t;
  if (di.test(e)) {
    t = {};
    let n;
    for (; n = e.match(di); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ks(e.slice(2)), t];
}
let za = 0;
const Pd = /* @__PURE__ */ Promise.resolve(), Rd = () => za || (Pd.then(() => za = 0), za = Date.now());
function Nd(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ps(
      Ld(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Rd(), o;
}
function Ld(e, t) {
  if (Ze(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return t;
}
const fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Dd = (e, t, o, n, l, r) => {
  const c = l === "svg";
  t === "class" ? bd(e, n, c) : t === "style" ? Sd(e, o, n) : qn(t) ? al(t) || Td(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Od(e, t, n, c)) ? (ci(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ri(e, t, n, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !$t(n)) ? ci(e, is(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ri(e, t, n, c));
};
function Od(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fi(t) && tt(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return fi(t) && $t(o) ? !1 : t in e;
}
const Br = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Bn = Symbol("_moveCb"), mi = Symbol("_enterCb"), Ad = (e) => (delete e.props.mode, e), Ud = /* @__PURE__ */ Ad({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, zr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = $l(), n = ir();
    let l, r;
    return vr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Wd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(Vd), l.forEach(Fd);
      const u = l.filter(Bd);
      Za(o.vnode.el), u.forEach((d) => {
        const v = d.el, m = v.style;
        ws(v, c), m.transform = m.webkitTransform = m.transitionDuration = "";
        const p = v[Bn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[Bn] = null, Fs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = rt(e), u = Vr(c);
      let d = c.tag || j;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const m = r[v];
          m.el && m.el instanceof Element && (l.push(m), lo(
            m,
            nn(
              m,
              u,
              n,
              o
            )
          ), Br.set(m, {
            left: m.el.offsetLeft,
            top: m.el.offsetTop
          }));
        }
      r = t.default ? hl(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const m = r[v];
        m.key != null && lo(
          m,
          nn(m, u, n, o)
        );
      }
      return k(d, null, r);
    };
  }
}), zd = Ud;
function Vd(e) {
  const t = e.el;
  t[Bn] && t[Bn](), t[mi] && t[mi]();
}
function Fd(e) {
  Wr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Bd(e) {
  const t = Br.get(e), o = Wr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Wd(e, t, o) {
  const n = e.cloneNode(), l = e[Eo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: c } = Fr(n);
  return r.removeChild(n), c;
}
const qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (o) => xn(t, o) : t;
};
function Gd(e) {
  e.target.composing = !0;
}
function vi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ls = Symbol("_assign");
function pi(e, t, o) {
  return t && (e = e.trim()), o && (e = Qn(e)), e;
}
const $o = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[ls] = qs(l);
    const r = n || l.props && l.props.type === "number";
    Ls(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ls](pi(e.value, o, r));
    }), (o || r) && Ls(e, "change", () => {
      e.value = pi(e.value, o, r);
    }), t || (Ls(e, "compositionstart", Gd), Ls(e, "compositionend", vi), Ls(e, "change", vi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, c) {
    if (e[ls] = qs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Qn(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Wn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ls] = qs(o), Ls(e, "change", () => {
      const n = e._modelValue, l = To(e), r = e.checked, c = e[ls];
      if (Ze(n)) {
        const u = rl(n, l), d = u !== -1;
        if (r && !d)
          c(n.concat(l));
        else if (!r && d) {
          const v = [...n];
          v.splice(u, 1), c(v);
        }
      } else if (Mo(n)) {
        const u = new Set(n);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Gr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: gi,
  beforeUpdate(e, t, o) {
    e[ls] = qs(o), gi(e, t, o);
  }
};
function gi(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Ze(t))
    l = rl(t, n.props.value) > -1;
  else if (Mo(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = ao(t, Gr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Mn = {
  created(e, { value: t }, o) {
    e.checked = ao(t, o.props.value), e[ls] = qs(o), Ls(e, "change", () => {
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
    Ls(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Qn(To(c)) : To(c)
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
    hi(e, t);
  },
  beforeUpdate(e, t, o) {
    e[ls] = qs(o);
  },
  updated(e, { value: t }) {
    e._assigning || hi(e, t);
  }
};
function hi(e, t) {
  const o = e.multiple, n = Ze(t);
  if (!(o && !n && !Mo(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = To(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((v) => String(v) === String(u)) : c.selected = rl(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (ao(To(c), t)) {
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
function Gr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const jd = ["ctrl", "shift", "alt", "meta"], Hd = {
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
  exact: (e, t) => jd.some((o) => e[`${o}Key`] && !t.includes(o))
}, vt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = Hd[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, qd = {
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
      (c) => c === r || qd[c] === r
    ))
      return e(l);
  }));
}, Kd = /* @__PURE__ */ Mt({ patchProp: Dd }, hd);
let yi;
function Jd() {
  return yi || (yi = Qu(Kd));
}
const mn = ((...e) => {
  const t = Jd().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = Yd(n);
    if (!l) return;
    const r = t._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Qd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function Qd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Yd(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const Xd = { class: "panel-layout" }, Zd = {
  key: 0,
  class: "panel-layout-header"
}, ef = {
  key: 1,
  class: "panel-layout-search"
}, tf = { class: "panel-layout-content" }, sf = {
  key: 2,
  class: "panel-layout-footer"
}, of = /* @__PURE__ */ $e({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", Xd, [
      t.$slots.header ? (a(), i("div", Zd, [
        ot(t.$slots, "header", {}, void 0)
      ])) : h("", !0),
      t.$slots.search ? (a(), i("div", ef, [
        ot(t.$slots, "search", {}, void 0)
      ])) : h("", !0),
      s("div", tf, [
        ot(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", sf, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Se = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, At = /* @__PURE__ */ Se(of, [["__scopeId", "data-v-21565df9"]]), nf = {
  key: 0,
  class: "panel-title-prefix"
}, af = {
  key: 1,
  class: "panel-title-prefix-theme"
}, lf = /* @__PURE__ */ $e({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), P(yl(`h${e.level}`), {
      class: Fe(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (a(), i("span", nf, f(e.prefix), 1)) : (a(), i("span", af)),
        ot(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), rf = /* @__PURE__ */ Se(lf, [["__scopeId", "data-v-c3875efc"]]), cf = ["title"], uf = ["width", "height"], df = /* @__PURE__ */ $e({
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
      ])], 8, uf))
    ], 8, cf));
  }
}), jr = /* @__PURE__ */ Se(df, [["__scopeId", "data-v-6fc7f16d"]]), ff = { class: "header-left" }, mf = {
  key: 0,
  class: "header-actions"
}, vf = /* @__PURE__ */ $e({
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
      s("div", ff, [
        k(rf, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), P(jr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : h("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", mf, [
        ot(t.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ Se(vf, [["__scopeId", "data-v-55a62cd6"]]), pf = {
  key: 0,
  class: "section-title-count"
}, gf = {
  key: 1,
  class: "section-title-icon"
}, hf = /* @__PURE__ */ $e({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), P(yl(`h${e.level}`), {
      class: Fe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: g(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", pf, "(" + f(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (a(), i("span", gf, f(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ns = /* @__PURE__ */ Se(hf, [["__scopeId", "data-v-559361eb"]]), yf = { class: "status-grid" }, wf = { class: "status-grid__columns" }, _f = { class: "status-grid__column" }, kf = { class: "status-grid__title" }, bf = { class: "status-grid__column status-grid__column--right" }, $f = { class: "status-grid__title" }, Cf = {
  key: 0,
  class: "status-grid__footer"
}, xf = /* @__PURE__ */ $e({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", yf, [
      s("div", wf, [
        s("div", _f, [
          s("h4", kf, f(e.leftTitle), 1),
          ot(t.$slots, "left", {}, void 0)
        ]),
        s("div", bf, [
          s("h4", $f, f(e.rightTitle), 1),
          ot(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", Cf, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Sf = /* @__PURE__ */ Se(xf, [["__scopeId", "data-v-73b7ba3f"]]), If = {
  key: 0,
  class: "status-item__icon"
}, Ef = {
  key: 1,
  class: "status-item__count"
}, Tf = { class: "status-item__label" }, Mf = /* @__PURE__ */ $e({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = D(() => `status-item--${t.variant}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", If, f(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (a(), i("span", Ef, f(e.count), 1)) : h("", !0),
      s("span", Tf, f(e.label), 1)
    ], 2));
  }
}), ys = /* @__PURE__ */ Se(Mf, [["__scopeId", "data-v-6f929183"]]), Pf = { class: "issue-card__header" }, Rf = { class: "issue-card__icon" }, Nf = { class: "issue-card__title" }, Lf = {
  key: 0,
  class: "issue-card__content"
}, Df = {
  key: 0,
  class: "issue-card__description"
}, Of = {
  key: 1,
  class: "issue-card__items"
}, Af = {
  key: 2,
  class: "issue-card__actions"
}, Uf = /* @__PURE__ */ $e({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = D(() => `issue-card--${t.severity}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["issue-card", o.value])
    }, [
      s("div", Pf, [
        s("span", Rf, f(e.icon), 1),
        s("h4", Nf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Lf, [
        e.description ? (a(), i("p", Df, f(e.description), 1)) : h("", !0),
        ot(n.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (a(), i("div", Of, [
        (a(!0), i(j, null, we(e.items, (r, c) => (a(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, f(r), 1)
        ]))), 128))
      ])) : h("", !0),
      n.$slots.actions ? (a(), i("div", Af, [
        ot(n.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ Se(Uf, [["__scopeId", "data-v-df6aa348"]]), zf = ["type", "disabled"], Vf = {
  key: 0,
  class: "spinner"
}, Ff = /* @__PURE__ */ $e({
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
      e.loading ? (a(), i("span", Vf)) : h("", !0),
      e.loading ? h("", !0) : ot(t.$slots, "default", { key: 1 }, void 0)
    ], 10, zf));
  }
}), Te = /* @__PURE__ */ Se(Ff, [["__scopeId", "data-v-772abe47"]]), Bf = { class: "empty-state" }, Wf = {
  key: 0,
  class: "empty-icon"
}, Gf = { class: "empty-message" }, jf = /* @__PURE__ */ $e({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", Bf, [
      e.icon ? (a(), i("div", Wf, f(e.icon), 1)) : h("", !0),
      s("p", Gf, f(e.message), 1),
      e.actionLabel ? (a(), P(Te, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: g(() => [
          $(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ Se(jf, [["__scopeId", "data-v-4466284f"]]), Hf = /* @__PURE__ */ $e({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Fe(["detail-label"]),
      style: Wt({ minWidth: e.minWidth })
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Pn = /* @__PURE__ */ Se(Hf, [["__scopeId", "data-v-75e9eeb8"]]), qf = /* @__PURE__ */ $e({
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
      ot(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), el = /* @__PURE__ */ Se(qf, [["__scopeId", "data-v-2f186e4c"]]), Kf = { class: "detail-row" }, Jf = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), i("div", Kf, [
      k(Pn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), P(el, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          $(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ Se(Jf, [["__scopeId", "data-v-ef15664a"]]), Qf = { class: "modal-header" }, Yf = { class: "modal-body" }, Xf = { class: "status-section" }, Zf = {
  key: 0,
  class: "status-section"
}, em = { class: "section-header-row" }, tm = {
  key: 0,
  class: "workflow-group"
}, sm = { class: "workflow-group-header" }, om = { class: "workflow-group-title" }, nm = { class: "workflow-list" }, am = { class: "workflow-name" }, lm = { class: "workflow-issue" }, im = {
  key: 1,
  class: "workflow-group"
}, rm = { class: "workflow-group-header" }, cm = { class: "workflow-group-title" }, um = { class: "workflow-list" }, dm = { class: "workflow-name" }, fm = { class: "workflow-issue" }, mm = {
  key: 2,
  class: "workflow-group"
}, vm = { class: "workflow-group-header" }, pm = { class: "workflow-group-title" }, gm = { class: "workflow-list" }, hm = { class: "workflow-name" }, ym = {
  key: 3,
  class: "workflow-group"
}, wm = { class: "workflow-group-header" }, _m = { class: "workflow-group-title" }, km = { class: "workflow-list" }, bm = { class: "workflow-name" }, $m = {
  key: 4,
  class: "workflow-group"
}, Cm = { class: "workflow-group-header" }, xm = { class: "workflow-group-title" }, Sm = { class: "workflow-list" }, Im = { class: "workflow-name" }, Em = {
  key: 5,
  class: "workflow-group"
}, Tm = { class: "workflow-group-title" }, Mm = { class: "expand-icon" }, Pm = {
  key: 0,
  class: "workflow-list"
}, Rm = { class: "workflow-name" }, Nm = {
  key: 1,
  class: "status-section"
}, Lm = {
  key: 0,
  class: "change-group"
}, Dm = { class: "change-group-header" }, Om = { class: "change-group-title" }, Am = { class: "change-list" }, Um = { class: "node-name" }, zm = {
  key: 0,
  class: "dev-badge"
}, Vm = {
  key: 1,
  class: "change-group"
}, Fm = { class: "change-group-header" }, Bm = { class: "change-group-title" }, Wm = { class: "change-list" }, Gm = { class: "node-name" }, jm = {
  key: 0,
  class: "dev-badge"
}, Hm = {
  key: 2,
  class: "change-group"
}, qm = { class: "change-list" }, Km = { class: "change-item" }, Jm = { class: "node-name" }, Qm = {
  key: 3,
  class: "change-group"
}, Ym = {
  key: 2,
  class: "status-section"
}, Xm = { class: "section-header-row" }, Zm = {
  key: 0,
  class: "drift-item"
}, ev = { class: "drift-list" }, tv = {
  key: 0,
  class: "drift-list-more"
}, sv = {
  key: 1,
  class: "drift-item"
}, ov = { class: "drift-list" }, nv = {
  key: 0,
  class: "drift-list-more"
}, av = {
  key: 2,
  class: "drift-item"
}, lv = { class: "drift-list" }, iv = { class: "version-actual" }, rv = { class: "version-expected" }, cv = {
  key: 0,
  class: "drift-list-more"
}, uv = {
  key: 3,
  class: "drift-item"
}, dv = { class: "repair-action" }, fv = {
  key: 3,
  class: "status-section"
}, mv = { class: "info-box" }, vv = { class: "drift-list" }, pv = {
  key: 0,
  class: "drift-list-more"
}, gv = {
  key: 4,
  class: "status-section"
}, hv = { class: "warning-box" }, yv = {
  key: 5,
  class: "empty-state-inline"
}, wv = { class: "modal-actions" }, _v = /* @__PURE__ */ $e({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = b(!1);
    ct(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), kt(() => t.show, (w, y) => {
      console.log("StatusDetailModal show prop changed from", y, "to", w);
    }, { immediate: !0 });
    const n = D(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = D(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = D(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.synced) == null ? void 0 : _.filter((x) => {
        var S, R, T;
        const C = (T = (R = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : R.analyzed) == null ? void 0 : T.find((E) => E.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), c = D(() => {
      var w, y, _, x, C;
      return (w = t.status) != null && w.workflows ? (((y = t.status.workflows.new) == null ? void 0 : y.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = t.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = t.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), u = D(() => {
      var y, _, x;
      const w = (y = t.status) == null ? void 0 : y.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = D(() => {
      var w, y, _, x, C, S;
      return !c.value && !u.value && ((y = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : y.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (C = (x = t.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), v = D(() => {
      var y, _;
      const w = (_ = (y = t.status) == null ? void 0 : y.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function m(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, y) => {
      var _, x, C, S, R, T, E, N, O, J, M, V, Y, Z, ie, ye, se, q, ae, Ue, oe, ge;
      return a(), P(Ot, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: y[7] || (y[7] = (A) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: y[6] || (y[6] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", Qf, [
              y[8] || (y[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (A) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", Yf, [
              s("div", Xf, [
                k(ns, { level: "4" }, {
                  default: g(() => [...y[9] || (y[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), i("div", Zf, [
                s("div", em, [
                  k(ns, { level: "4" }, {
                    default: g(() => [...y[10] || (y[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: y[1] || (y[1] = (A) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), i("div", tm, [
                  s("div", sm, [
                    y[11] || (y[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", om, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  s("div", nm, [
                    (a(!0), i(j, null, we(n.value, (A) => (a(), i("div", {
                      key: A.name,
                      class: "workflow-item"
                    }, [
                      s("span", am, f(A.name), 1),
                      s("span", lm, f(A.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (a(), i("div", im, [
                  s("div", rm, [
                    y[12] || (y[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", cm, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  s("div", um, [
                    (a(!0), i(j, null, we(l.value, (A) => (a(), i("div", {
                      key: A.name,
                      class: "workflow-item"
                    }, [
                      s("span", dm, f(A.name), 1),
                      s("span", fm, f(A.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (a(), i("div", mm, [
                  s("div", vm, [
                    y[13] || (y[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", pm, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", gm, [
                    (a(!0), i(j, null, we(e.status.workflows.new, (A) => (a(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", hm, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (a(), i("div", ym, [
                  s("div", wm, [
                    y[14] || (y[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", _m, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", km, [
                    (a(!0), i(j, null, we(e.status.workflows.modified, (A) => (a(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", bm, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (T = (R = e.status.workflows) == null ? void 0 : R.deleted) != null && T.length ? (a(), i("div", $m, [
                  s("div", Cm, [
                    y[15] || (y[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", xm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Sm, [
                    (a(!0), i(j, null, we(e.status.workflows.deleted, (A) => (a(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", Im, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (a(), i("div", Em, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (A) => o.value = !o.value)
                  }, [
                    y[16] || (y[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Tm, "SYNCED (" + f(r.value.length) + ")", 1),
                    s("span", Mm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", Pm, [
                    (a(!0), i(j, null, we(r.value, (A) => (a(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", Rm, f(A), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              u.value ? (a(), i("div", Nm, [
                k(ns, { level: "4" }, {
                  default: g(() => [...y[17] || (y[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && N.length ? (a(), i("div", Lm, [
                  s("div", Dm, [
                    y[18] || (y[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Om, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Am, [
                    (a(!0), i(j, null, we(e.status.git_changes.nodes_added, (A) => (a(), i("div", {
                      key: m(A),
                      class: "change-item"
                    }, [
                      s("span", Um, f(m(A)), 1),
                      p(A) ? (a(), i("span", zm, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (J = (O = e.status.git_changes) == null ? void 0 : O.nodes_removed) != null && J.length ? (a(), i("div", Vm, [
                  s("div", Fm, [
                    y[19] || (y[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", Bm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", Wm, [
                    (a(!0), i(j, null, we(e.status.git_changes.nodes_removed, (A) => (a(), i("div", {
                      key: m(A),
                      class: "change-item"
                    }, [
                      s("span", Gm, f(m(A)), 1),
                      p(A) ? (a(), i("span", jm, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (M = e.status.git_changes) != null && M.workflow_changes ? (a(), i("div", Hm, [
                  y[20] || (y[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", qm, [
                    s("div", Km, [
                      s("span", Jm, f(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (V = e.status.git_changes) != null && V.has_other_changes ? (a(), i("div", Qm, [...y[21] || (y[21] = [
                  s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  s("div", { class: "change-list" }, [
                    s("div", { class: "change-item" }, [
                      s("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : h("", !0)
              ])) : h("", !0),
              (Y = e.status.comparison) != null && Y.is_synced ? h("", !0) : (a(), i("div", Ym, [
                s("div", Xm, [
                  k(ns, { level: "4" }, {
                    default: g(() => [...y[22] || (y[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: y[3] || (y[3] = (A) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                y[26] || (y[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (ie = (Z = e.status.comparison) == null ? void 0 : Z.missing_nodes) != null && ie.length ? (a(), i("div", Zm, [
                  k(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", ev, [
                    (a(!0), i(j, null, we(e.status.comparison.missing_nodes.slice(0, 10), (A) => (a(), i("div", {
                      key: A,
                      class: "drift-list-item"
                    }, " - " + f(A), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", tv, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (se = (ye = e.status.comparison) == null ? void 0 : ye.extra_nodes) != null && se.length ? (a(), i("div", sv, [
                  k(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", ov, [
                    (a(!0), i(j, null, we(e.status.comparison.extra_nodes.slice(0, 10), (A) => (a(), i("div", {
                      key: A,
                      class: "drift-list-item"
                    }, " - " + f(A), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", nv, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ae = (q = e.status.comparison) == null ? void 0 : q.version_mismatches) != null && ae.length ? (a(), i("div", av, [
                  k(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", lv, [
                    (a(!0), i(j, null, we(e.status.comparison.version_mismatches.slice(0, 10), (A) => (a(), i("div", {
                      key: A.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(A.name) + ": ", 1),
                      s("span", iv, f(A.actual), 1),
                      y[23] || (y[23] = $(" → ", -1)),
                      s("span", rv, f(A.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", cv, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((Ue = e.status.comparison) == null ? void 0 : Ue.packages_in_sync) === !1 ? (a(), i("div", uv, [
                  k(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                s("div", dv, [
                  k(Te, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: y[4] || (y[4] = (A) => w.$emit("repair"))
                  }, {
                    default: g(() => [...y[24] || (y[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  y[25] || (y[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ge = (oe = e.status.comparison) == null ? void 0 : oe.disabled_nodes) != null && ge.length ? (a(), i("div", fv, [
                k(ns, { level: "4" }, {
                  default: g(() => [...y[27] || (y[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", mv, [
                  y[28] || (y[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", vv, [
                  (a(!0), i(j, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (A) => (a(), i("div", {
                    key: A,
                    class: "drift-list-item"
                  }, " • " + f(A), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", pv, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", gv, [
                k(ns, { level: "4" }, {
                  default: g(() => [...y[29] || (y[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", hv, [
                  y[30] || (y[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (a(), i("div", yv, [...y[32] || (y[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            s("div", wv, [
              k(Te, {
                variant: "secondary",
                onClick: y[5] || (y[5] = (A) => w.$emit("close"))
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
}), kv = /* @__PURE__ */ Se(_v, [["__scopeId", "data-v-e2b37122"]]), bv = { class: "health-section-header" }, $v = { class: "suggestions-content" }, Cv = { class: "suggestions-text" }, xv = { style: { "margin-top": "var(--cg-space-3)" } }, Sv = {
  key: 1,
  class: "no-issues-text"
}, Iv = /* @__PURE__ */ $e({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = b(!1), r = b(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, m = b(!1), p = b(!1);
    function w() {
      p.value = !0, v("repair-environment");
    }
    function y() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const x = D(() => {
      const Ee = n.status.workflows.analyzed || [], G = Ee.filter(
        (ee) => ee.unresolved_models_count > 0 || ee.ambiguous_models_count > 0
      );
      return G.length === 0 && n.status.missing_models_count > 0 ? Ee.filter((ee) => ee.sync_state === "synced") : G;
    });
    function C() {
      const Ee = x.value;
      Ee.length !== 0 && (m.value = !0, v("repair-missing-models", Ee.map((G) => G.name)));
    }
    function S() {
      m.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: y, closeDetailModal: _ });
    const R = D(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), T = D(() => n.status.has_changes), E = D(() => {
      const Ee = n.status.git_changes;
      return Ee.nodes_added.length > 0 || Ee.nodes_removed.length > 0 || Ee.workflow_changes;
    }), N = D(() => n.status.has_changes || R.value), O = D(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), J = D(() => n.status.git_changes.has_other_changes), M = D(() => {
      var Ee;
      return ((Ee = n.status.workflows.analyzed) == null ? void 0 : Ee.filter((G) => G.status === "broken")) || [];
    }), V = D(() => {
      var Ee;
      return ((Ee = n.status.workflows.analyzed) == null ? void 0 : Ee.filter(
        (G) => G.has_path_sync_issues && !G.has_issues
      )) || [];
    }), Y = D(() => M.value.length > 0);
    function Z(Ee) {
      const G = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ee of G) {
        const H = Ee.match(ee);
        if (H != null && H[1])
          return H[1];
      }
      return null;
    }
    function ie(Ee) {
      const G = Ee.map(Z).filter((ee) => !!ee);
      return [...new Set(G)];
    }
    function ye(Ee) {
      if (Ee.length === 0) return "";
      if (Ee.length === 1) return ` (>= ${Ee[0]})`;
      const G = Ee.slice(0, 2).map((H) => `>= ${H}`).join(", "), ee = Ee.length > 2;
      return ` (${G}${ee ? ", ..." : ""})`;
    }
    function se(Ee) {
      return Ee.replace(/uninstallable node mappings?/gi, (G) => G.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function q(Ee) {
      const G = se(Ee.issue_summary || "Has issues"), ee = /(?:>=|v?\d+\.\d+)/i.test(G), H = ie(Ee.version_gated_guidance || []);
      return (Ee.nodes_version_gated_count || 0) > 0 && H.length > 0 && !ee ? `${Ee.name} — ${G} (needs ComfyUI ${H.map((X) => `>= ${X}`).join(", ")})` : `${Ee.name} — ${G}`;
    }
    const ae = D(() => M.value.reduce(
      (Ee, G) => Ee + (G.nodes_version_gated_count || 0),
      0
    )), Ue = D(() => {
      const Ee = M.value.flatMap(
        (G) => ie(G.version_gated_guidance || [])
      );
      return [...new Set(Ee)];
    }), oe = D(() => M.value.reduce(
      (Ee, G) => Ee + (G.nodes_uninstallable_count || 0),
      0
    )), ge = D(() => {
      const Ee = [];
      return ae.value > 0 && Ee.push(
        `${ae.value} require newer ComfyUI${ye(Ue.value)}`
      ), oe.value > 0 && Ee.push(`${oe.value} need community packages`), Ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), A = D(() => Y.value || V.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), me = D(() => {
      const Ee = [];
      return n.status.workflows.new.length > 0 && Ee.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Ee.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Ee.push(`${n.status.workflows.deleted.length} deleted`), Ee.length > 0 ? `${Ee.join(", ")} workflow${Ee.length === 1 && !Ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Pe = D(() => {
      var ee, H;
      const Ee = [], G = n.status.comparison;
      return (ee = G.missing_nodes) != null && ee.length && Ee.push(`${G.missing_nodes.length} missing node${G.missing_nodes.length === 1 ? "" : "s"}`), (H = G.extra_nodes) != null && H.length && Ee.push(`${G.extra_nodes.length} untracked node${G.extra_nodes.length === 1 ? "" : "s"}`), Ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Ee.join(" and ")}.`;
    }), He = D(() => {
      var ee, H;
      const Ee = [], G = n.status.comparison;
      return (ee = G.extra_nodes) != null && ee.length && (G.extra_nodes.slice(0, 3).forEach((X) => {
        Ee.push(`Untracked: ${X}`);
      }), G.extra_nodes.length > 3 && Ee.push(`...and ${G.extra_nodes.length - 3} more untracked`)), (H = G.missing_nodes) != null && H.length && (G.missing_nodes.slice(0, 3).forEach((X) => {
        Ee.push(`Missing: ${X}`);
      }), G.missing_nodes.length > 3 && Ee.push(`...and ${G.missing_nodes.length - 3} more missing`)), Ee;
    });
    return (Ee, G) => (a(), i(j, null, [
      k(At, null, {
        header: g(() => [
          k(Ut, { title: "STATUS" })
        ]),
        content: g(() => [
          n.setupState === "no_workspace" ? (a(), P(us, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (ee) => Ee.$emit("start-setup"))
              }, {
                default: g(() => [...G[13] || (G[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), P(us, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: G[1] || (G[1] = (ee) => Ee.$emit("view-environments"))
              }, {
                default: g(() => [...G[14] || (G[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), P(us, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: G[2] || (G[2] = (ee) => Ee.$emit("create-environment"))
              }, {
                default: g(() => [...G[15] || (G[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: G[4] || (G[4] = (ee) => r.value = !0),
            onMouseleave: G[5] || (G[5] = (ee) => r.value = !1)
          }, [
            s("div", bv, [
              k(ns, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...G[16] || (G[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(wd, { name: "fade" }, {
                default: g(() => [
                  r.value ? (a(), P(Te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: g(() => [...G[17] || (G[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            k(Sf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: g(() => [
                e.status.workflows.new.length ? (a(), P(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (a(), P(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (a(), P(ys, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                k(ys, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: R.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (a(), P(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), P(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (a(), P(ys, {
                  key: 2,
                  icon: "●",
                  count: O.value,
                  label: O.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                J.value ? (a(), P(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                T.value && !E.value && !J.value ? (a(), P(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                T.value ? h("", !0) : (a(), P(ys, {
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
                  G[19] || (G[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", $v, [
                    s("span", Cv, f(me.value), 1),
                    k(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: G[3] || (G[3] = (ee) => Ee.$emit("commit-changes"))
                    }, {
                      default: g(() => [...G[18] || (G[18] = [
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
          e.status.is_detached_head ? (a(), P(us, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: G[6] || (G[6] = (ee) => Ee.$emit("create-branch"))
              }, {
                default: g(() => [...G[20] || (G[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          s("div", xv, [
            k(ns, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...G[21] || (G[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            A.value ? (a(), i(j, { key: 0 }, [
              M.value.length > 0 ? (a(), P(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} can't run`,
                description: ge.value,
                items: M.value.map(q)
              }, {
                actions: g(() => [
                  k(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[7] || (G[7] = (ee) => Ee.$emit("view-workflows"))
                  }, {
                    default: g(() => [...G[22] || (G[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              V.value.length > 0 ? (a(), P(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${V.value.length} workflow${V.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: V.value.map((ee) => `${ee.name} — ${ee.models_needing_path_sync_count} model path${ee.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  k(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[8] || (G[8] = (ee) => Ee.$emit("view-workflows"))
                  }, {
                    default: g(() => [...G[23] || (G[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !Y.value ? (a(), P(us, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  k(Te, {
                    variant: "primary",
                    size: "sm",
                    disabled: m.value,
                    onClick: C
                  }, {
                    default: g(() => [
                      $(f(m.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: G[9] || (G[9] = (ee) => Ee.$emit("view-workflows"))
                  }, {
                    default: g(() => [...G[24] || (G[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (a(), P(us, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Pe.value,
                items: He.value
              }, {
                actions: g(() => [
                  k(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...G[25] || (G[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[10] || (G[10] = (ee) => Ee.$emit("view-nodes"))
                  }, {
                    default: g(() => [...G[26] || (G[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), P(us, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  k(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[11] || (G[11] = (ee) => Ee.$emit("view-nodes"))
                  }, {
                    default: g(() => [...G[27] || (G[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : N.value ? (a(), i("span", Sv, "No issues")) : (a(), P(rs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(kv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: G[12] || (G[12] = (ee) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ev = /* @__PURE__ */ Se(Iv, [["__scopeId", "data-v-df52ba90"]]), tP = ro({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const sP = [
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
], oP = {
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
}, Tv = [
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
], nP = [
  ...Tv,
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
class Hr extends Error {
  constructor(o, n, l, r) {
    super(o);
    gn(this, "status");
    gn(this, "data");
    gn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function Mv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function gt() {
  const e = b(!1), t = b(null);
  async function o(B, he) {
    var Nt;
    if (!((Nt = window.app) != null && Nt.api))
      throw new Error("ComfyUI API not available");
    const We = await window.app.api.fetchApi(B, he), dt = await We.text();
    if (!We.ok) {
      let jt = {};
      if (dt)
        try {
          const ss = JSON.parse(dt);
          ss && typeof ss == "object" && (jt = ss);
        } catch {
          jt = { error: dt };
        }
      const gs = jt.error || jt.message || jt.detail || We.statusText || `Request failed: ${We.status}`;
      throw new Hr(String(gs), We.status, jt, B);
    }
    if (dt)
      return JSON.parse(dt);
  }
  async function n(B) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(B)}`);
  }
  async function l(B, he, We) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: B, email: he, password: We })
    });
  }
  async function r(B, he, We) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: B, email: he, password: We })
    });
  }
  async function c(B, he) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(B)}`, {
      headers: { Authorization: `Bearer ${he}` }
    });
  }
  async function u(B, he) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: B, refresh_token: he || null })
    });
  }
  async function d(B, he) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(B)}`, {
      headers: { Authorization: `Bearer ${he}` }
    });
  }
  async function v(B, he, We) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(he)}/revisions?cloud_url=${encodeURIComponent(B)}`,
      {
        headers: { Authorization: `Bearer ${We}` }
      }
    );
  }
  async function m(B, he, We, dt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${he}`
      },
      body: JSON.stringify({
        cloud_url: B,
        source_message: We || null,
        cloud_environment_id: dt || null
      })
    });
  }
  async function p(B = !1) {
    return o(B ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(B, he = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: B, allow_issues: he })
    });
  }
  async function y(B = 10, he = 0) {
    return o(`/v2/comfygit/log?limit=${B}&offset=${he}`);
  }
  async function _(B, he = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(B)}&limit=${he}`);
  }
  async function x(B) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: B })
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
  async function R(B) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: B, force: !0 })
    });
  }
  async function T(B) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(B)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function E(B, he) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(B)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: he, force: !0 })
    });
  }
  async function N() {
    return o("/v2/comfygit/branches");
  }
  async function O(B) {
    return o(`/v2/comfygit/commit/${B}`);
  }
  async function J(B, he = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: B, force: he })
    });
  }
  async function M(B, he = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: B, start_point: he })
    });
  }
  async function V(B, he = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: B, force: he })
    });
  }
  async function Y(B, he = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(B)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: he })
    });
  }
  async function Z() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const B = await p();
        return {
          environments: [{
            name: B.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + B.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: B.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: B.branch
          }],
          current: B.environment,
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
    return (await Z()).environments;
  }
  async function ye(B) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(B)}`);
    } catch {
      return null;
    }
  }
  async function se(B, he) {
    const We = { target_env: B };
    return he && (We.workspace_path = he), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(We)
    });
  }
  async function q() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function ae(B) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function Ue() {
    return o("/v2/workspace/environments/create_status");
  }
  async function oe(B = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${B}`);
  }
  async function ge(B) {
    return o(`/v2/workspace/environments/${B}`, {
      method: "DELETE"
    });
  }
  async function A(B = !1) {
    try {
      return o(B ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const he = await p(B), We = [];
      return he.workflows.new.forEach((dt) => {
        We.push({
          name: dt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), he.workflows.modified.forEach((dt) => {
        We.push({
          name: dt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), he.workflows.synced.forEach((dt) => {
        We.push({
          name: dt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), We;
    }
  }
  async function me(B) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/details`);
  }
  async function Pe(B) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/contract`);
  }
  async function He(B, he) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(he)
    });
  }
  async function Ee(B) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/contract`, {
      method: "DELETE"
    });
  }
  async function G(B) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/resolve`, {
      method: "POST"
    });
  }
  async function ee(B, he, We) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: he, install_models: We })
    });
  }
  async function H(B, he, We) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: he, importance: We })
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
  async function ue(B) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(B)}`);
  }
  async function le(B) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: B })
    });
  }
  async function I(B, he) {
    return o(`/v2/workspace/models/${B}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: he })
    });
  }
  async function z(B, he) {
    return o(`/v2/workspace/models/${B}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: he })
    });
  }
  async function re(B) {
    return o(`/v2/workspace/models/${B}`, {
      method: "DELETE"
    });
  }
  async function Ce(B) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function _e() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ke() {
    return o("/v2/workspace/models/directory");
  }
  async function Ae(B) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: B })
    });
  }
  async function ze(B) {
    const he = new URLSearchParams({ url: B });
    return o(`/v2/workspace/huggingface/repo-info?${he}`);
  }
  async function Re() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ie(B, he = 10) {
    const We = new URLSearchParams({ query: B, limit: String(he) });
    return o(`/v2/workspace/huggingface/search?${We}`);
  }
  async function Je(B) {
    try {
      const he = B ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(B)}` : "/v2/comfygit/config";
      return o(he);
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
  async function Be(B, he) {
    const We = he ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(he)}` : "/v2/comfygit/config";
    return o(We, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function ve(B, he) {
    try {
      const We = new URLSearchParams();
      return B && We.append("level", B), he && We.append("lines", he.toString()), o(`/v2/comfygit/debug/logs?${We}`);
    } catch {
      return [];
    }
  }
  async function Q(B, he) {
    try {
      const We = new URLSearchParams();
      return B && We.append("level", B), he && We.append("lines", he.toString()), o(`/v2/workspace/debug/logs?${We}`);
    } catch {
      return [];
    }
  }
  async function qe() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function be() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Xe() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Ve(B, he) {
    try {
      const We = new URLSearchParams();
      return B && We.append("level", B), he && We.append("lines", he.toString()), o(`/v2/workspace/debug/orchestrator-logs?${We}`);
    } catch {
      return [];
    }
  }
  async function Ne() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function W(B) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: B })
    });
  }
  async function de() {
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
  async function pe(B) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}/track-dev`, {
      method: "POST"
    });
  }
  async function Qe(B) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}/install`, {
      method: "POST"
    });
  }
  async function L(B, he) {
    var gs, ss, et, Ia;
    const We = Mv(), dt = ((ss = (gs = window.app) == null ? void 0 : gs.api) == null ? void 0 : ss.clientId) ?? ((Ia = (et = window.app) == null ? void 0 : et.api) == null ? void 0 : Ia.initialClientId) ?? "comfygit-panel", Nt = {
      id: B.id,
      version: B.version || B.selected_version || "latest",
      selected_version: B.selected_version || "latest",
      mode: B.mode || "remote",
      channel: B.channel || "default"
    };
    return B.install_source && (Nt.install_source = B.install_source), B.install_source === "git" && B.repository && (Nt.repository = B.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Nt,
        ui_id: We,
        client_id: dt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", We, "for package:", B.id), he != null && he.beforeQueueStart && await he.beforeQueueStart(We), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: We };
  }
  async function U(B) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}/update`, {
      method: "POST"
    });
  }
  async function te(B, he) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: he })
    });
  }
  async function De(B) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}`, {
      method: "DELETE"
    });
  }
  async function Oe() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Me(B, he) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: B, url: he })
    });
  }
  async function je(B) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(B)}`, {
      method: "DELETE"
    });
  }
  async function nt(B, he, We) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(B)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: he, push_url: We })
    });
  }
  async function bt(B, he) {
    const We = {};
    return he && (We["X-Git-Auth-Token"] = he), o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/fetch`, {
      method: "POST",
      headers: We
    });
  }
  async function Et(B) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/status`);
    } catch {
      return null;
    }
  }
  async function ce(B = "skip", he = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: B,
        remove_extra_nodes: he
      })
    });
  }
  async function F(B, he) {
    const We = he ? `/v2/comfygit/remotes/${encodeURIComponent(B)}/pull-preview?branch=${encodeURIComponent(he)}` : `/v2/comfygit/remotes/${encodeURIComponent(B)}/pull-preview`;
    return o(We);
  }
  async function fe(B, he = {}) {
    const We = { "Content-Type": "application/json" };
    return he.authToken && (We["X-Git-Auth-Token"] = he.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/pull`, {
      method: "POST",
      headers: We,
      body: JSON.stringify({
        model_strategy: he.modelStrategy || "skip",
        force: he.force || !1,
        resolutions: he.resolutions
      })
    });
  }
  async function Ge(B, he) {
    const We = he ? `/v2/comfygit/remotes/${encodeURIComponent(B)}/push-preview?branch=${encodeURIComponent(he)}` : `/v2/comfygit/remotes/${encodeURIComponent(B)}/push-preview`;
    return o(We);
  }
  async function ut(B, he = {}) {
    const We = { "Content-Type": "application/json" };
    return he.authToken && (We["X-Git-Auth-Token"] = he.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/push`, {
      method: "POST",
      headers: We,
      body: JSON.stringify({ force: he.force || !1 })
    });
  }
  async function Ct(B, he) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: he })
    });
  }
  async function lt(B) {
    const he = {
      success: 0,
      failed: []
    };
    for (const We of B)
      try {
        await G(We), he.success++;
      } catch (dt) {
        he.failed.push({
          name: We,
          error: dt instanceof Error ? dt.message : "Unknown error"
        });
      }
    return he;
  }
  async function xt(B) {
    var dt;
    const he = new FormData();
    if (he.append("file", B), !((dt = window.app) != null && dt.api))
      throw new Error("ComfyUI API not available");
    const We = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: he
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!We.ok) {
      const Nt = await We.json().catch(() => ({}));
      throw new Error(Nt.error || `Preview failed: ${We.status}`);
    }
    return We.json();
  }
  async function ts(B) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(B)}`
    );
  }
  async function Ss(B, he, We, dt) {
    var gs;
    const Nt = new FormData();
    if (Nt.append("file", B), Nt.append("name", he), Nt.append("model_strategy", We), Nt.append("torch_backend", dt), !((gs = window.app) != null && gs.api))
      throw new Error("ComfyUI API not available");
    const jt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Nt
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
  async function ia(B) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: B })
    });
  }
  async function ra(B, he, We, dt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: B,
        name: he,
        model_strategy: We,
        torch_backend: dt
      })
    });
  }
  async function zs() {
    return o("/v2/setup/status");
  }
  async function ca() {
    return o("/v2/comfygit/update-check");
  }
  async function co() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function uo(B) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function ua() {
    return o("/v2/setup/initialize_status");
  }
  async function Is(B) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function da() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Lo() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function fa(B, he) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: B, save_key: he })
    });
  }
  async function ma() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function va(B) {
    const he = B ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(B)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(he);
  }
  async function pa(B) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function vn() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ga(B) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(B)}`, {
      method: "DELETE"
    });
  }
  async function ha(B) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(B)}/stop`, {
      method: "POST"
    });
  }
  async function ya(B) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(B)}/start`, {
      method: "POST"
    });
  }
  async function wa(B) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(B)}/status`);
  }
  async function _a(B) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: B })
    });
  }
  async function ka(B = !1) {
    return o(B ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ba() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function $a() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ca(B) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function xa(B) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(B)}`, {
      method: "DELETE"
    });
  }
  async function Sa(B) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function pn() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ne(B) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/info`);
  }
  async function K(B) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances`);
  }
  async function Ke(B, he) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(he)
    });
  }
  async function Ye(B, he) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances/${encodeURIComponent(he)}/start`, {
      method: "POST"
    });
  }
  async function at(B, he) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances/${encodeURIComponent(he)}/stop`, {
      method: "POST"
    });
  }
  async function mt(B, he) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances/${encodeURIComponent(he)}`, {
      method: "DELETE"
    });
  }
  async function Rt(B) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: B })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: p,
    commit: w,
    getHistory: y,
    getBranchHistory: _,
    exportEnv: x,
    validateExport: C,
    validateDeploy: S,
    exportEnvWithForce: R,
    validateEnvironmentExport: T,
    exportEnvironmentWithForce: E,
    // Git Operations
    getBranches: N,
    getCommitDetail: O,
    checkout: J,
    createBranch: M,
    switchBranch: V,
    deleteBranch: Y,
    // Environment Management
    listEnvironments: Z,
    getEnvironments: ie,
    getEnvironmentDetails: ye,
    switchEnvironment: se,
    getSwitchProgress: q,
    createEnvironment: ae,
    getCreateProgress: Ue,
    getComfyUIReleases: oe,
    deleteEnvironment: ge,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: me,
    getWorkflowContract: Pe,
    saveWorkflowContract: He,
    deleteWorkflowContract: Ee,
    resolveWorkflow: G,
    installWorkflowDeps: ee,
    setModelImportance: H,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: xe,
    getModelDetails: ue,
    openFileLocation: le,
    addModelSource: I,
    removeModelSource: z,
    deleteModel: re,
    downloadModel: Ce,
    scanWorkspaceModels: _e,
    getModelsDirectory: ke,
    setModelsDirectory: Ae,
    getHuggingFaceRepoInfo: ze,
    getModelsSubdirectories: Re,
    searchHuggingFaceRepos: Ie,
    // Settings
    getConfig: Je,
    updateConfig: Be,
    // Cloud Auth
    getCloudAuthConfig: n,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: m,
    // Debug/Logs
    getEnvironmentLogs: ve,
    getEnvironmentManifest: be,
    getWorkspaceLogs: Q,
    getEnvironmentLogPath: qe,
    getWorkspaceLogPath: Xe,
    getOrchestratorLogs: Ve,
    getOrchestratorLogPath: Ne,
    openFile: W,
    // Node Management
    getNodes: de,
    trackNodeAsDev: pe,
    installNode: Qe,
    queueNodeInstall: L,
    updateNode: U,
    updateNodeCriticality: te,
    uninstallNode: De,
    // Git Remotes
    getRemotes: Oe,
    addRemote: Me,
    removeRemote: je,
    updateRemoteUrl: nt,
    fetchRemote: bt,
    getRemoteSyncStatus: Et,
    // Push/Pull
    getPullPreview: F,
    pullFromRemote: fe,
    getPushPreview: Ge,
    pushToRemote: ut,
    validateMerge: Ct,
    // Environment Sync
    syncEnvironmentManually: ce,
    // Workflow Repair
    repairWorkflowModels: lt,
    // Import Operations
    previewTarballImport: xt,
    previewGitImport: ia,
    validateEnvironmentName: ts,
    executeImport: Ss,
    executeGitImport: ra,
    getImportProgress: Js,
    // First-Time Setup
    getSetupStatus: zs,
    // Manager Update Notice
    getUpdateCheck: ca,
    updateManager: co,
    initializeWorkspace: uo,
    getInitializeProgress: ua,
    validatePath: Is,
    // Deploy Operations
    getDeploySummary: da,
    getDataCenters: Lo,
    testRunPodConnection: fa,
    getNetworkVolumes: ma,
    getRunPodGpuTypes: va,
    deployToRunPod: pa,
    getRunPodPods: vn,
    terminateRunPodPod: ga,
    stopRunPodPod: ha,
    startRunPodPod: ya,
    getDeploymentStatus: wa,
    exportDeployPackage: _a,
    getStoredRunPodKey: ka,
    clearRunPodKey: ba,
    // Custom Worker Operations
    getCustomWorkers: $a,
    addCustomWorker: Ca,
    removeCustomWorker: xa,
    testWorkerConnection: Sa,
    scanForWorkers: pn,
    getWorkerSystemInfo: ne,
    getWorkerInstances: K,
    deployToWorker: Ke,
    startWorkerInstance: Ye,
    stopWorkerInstance: at,
    terminateWorkerInstance: mt,
    // Git Authentication
    testGitAuth: Rt
  };
}
async function bn(e, t) {
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
function Pv() {
  async function e() {
    try {
      return await bn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await bn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await bn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await bn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const Rv = { class: "base-modal-header" }, Nv = {
  key: 0,
  class: "base-modal-title"
}, Lv = { class: "base-modal-body" }, Dv = {
  key: 0,
  class: "base-modal-loading"
}, Ov = {
  key: 1,
  class: "base-modal-error"
}, Av = {
  key: 0,
  class: "base-modal-footer"
}, Uv = /* @__PURE__ */ $e({
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
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l() {
      o.closeOnOverlayClick && n("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && n("close");
    }
    return ct(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Po(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (a(), P(Ot, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        s("div", {
          class: Fe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", Rv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", Nv, f(e.title), 1)) : h("", !0)
            ]),
            e.showCloseButton ? (a(), i("button", {
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
            ])])) : h("", !0)
          ]),
          s("div", Lv, [
            e.loading ? (a(), i("div", Dv, "Loading...")) : e.error ? (a(), i("div", Ov, f(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), i("div", Av, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), It = /* @__PURE__ */ Se(Uv, [["__scopeId", "data-v-8dab1081"]]), zv = ["type", "disabled"], Vv = {
  key: 0,
  class: "spinner"
}, Fv = /* @__PURE__ */ $e({
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
      e.loading ? (a(), i("span", Vv)) : h("", !0),
      ot(t.$slots, "default", {}, void 0)
    ], 10, zv));
  }
}), Le = /* @__PURE__ */ Se(Fv, [["__scopeId", "data-v-f3452606"]]), Bv = {
  key: 0,
  class: "base-title-count"
}, Wv = /* @__PURE__ */ $e({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), P(yl(`h${e.level}`), {
      class: Fe(["base-title", e.variant])
    }, {
      default: g(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Bv, "(" + f(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), no = /* @__PURE__ */ Se(Wv, [["__scopeId", "data-v-5a01561d"]]), Gv = ["value", "disabled"], jv = {
  key: 0,
  value: "",
  disabled: ""
}, Hv = ["value"], qv = {
  key: 0,
  class: "base-select-error"
}, Kv = /* @__PURE__ */ $e({
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
        e.placeholder ? (a(), i("option", jv, f(e.placeholder), 1)) : h("", !0),
        (a(!0), i(j, null, we(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, f(o(r)), 9, Hv))), 128))
      ], 42, Gv),
      e.error ? (a(), i("span", qv, f(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Rn = /* @__PURE__ */ Se(Kv, [["__scopeId", "data-v-4996bfe0"]]), Jv = { class: "popover-header" }, Qv = { class: "popover-title" }, Yv = { class: "popover-content" }, Xv = {
  key: 0,
  class: "popover-actions"
}, Zv = /* @__PURE__ */ $e({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), P(Ot, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Wt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", Jv, [
            s("h4", Qv, f(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Yv, [
            ot(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", Xv, [
            ot(t.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ Se(Zv, [["__scopeId", "data-v-42815ace"]]), ep = { class: "detail-section" }, tp = {
  key: 0,
  class: "empty-message"
}, sp = { class: "model-header" }, op = { class: "model-name" }, np = { class: "model-details" }, ap = { class: "model-row" }, lp = { class: "model-row" }, ip = { class: "label" }, rp = {
  key: 0,
  class: "model-row model-row-nodes"
}, cp = { class: "node-list" }, up = ["onClick"], dp = {
  key: 1,
  class: "model-row"
}, fp = { class: "value" }, mp = {
  key: 2,
  class: "model-row"
}, vp = { class: "value error" }, pp = {
  key: 0,
  class: "model-actions"
}, gp = { class: "detail-section" }, hp = {
  key: 0,
  class: "empty-message"
}, yp = { class: "node-content" }, wp = { class: "node-main" }, _p = { class: "node-name" }, kp = { class: "node-badge" }, bp = {
  key: 0,
  class: "node-version"
}, $p = ["onClick"], Cp = {
  key: 2,
  class: "node-install-queued"
}, xp = {
  key: 0,
  class: "node-guidance"
}, Sp = /* @__PURE__ */ $e({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = gt(), d = b(null), v = b(!1), m = b(null), p = b(!1), w = b({}), y = b(!1), _ = b(/* @__PURE__ */ new Set()), x = b(/* @__PURE__ */ new Set()), C = [
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
    function R(se) {
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
    function T(se) {
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
    function E(se) {
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
    function N(se) {
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
    function O(se) {
      if (!se.loaded_by || se.loaded_by.length === 0) return [];
      const q = se.hash || se.filename;
      return _.value.has(q) ? se.loaded_by : se.loaded_by.slice(0, 3);
    }
    function J(se) {
      return _.value.has(se);
    }
    function M(se) {
      _.value.has(se) ? _.value.delete(se) : _.value.add(se), _.value = new Set(_.value);
    }
    async function V() {
      v.value = !0, m.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (se) {
        m.value = se instanceof Error ? se.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function Y(se, q) {
      w.value[se] = q, p.value = !0;
    }
    async function Z(se) {
      try {
        await c(se);
      } catch (q) {
        m.value = q instanceof Error ? q.message : "Failed to open file location";
      }
    }
    async function ie(se) {
      if (se.package_id)
        try {
          const q = se.latest_version || "latest";
          await u({
            id: se.package_id,
            version: q,
            selected_version: q,
            mode: "remote",
            channel: "default"
          }), x.value.add(se.package_id);
        } catch (q) {
          m.value = q instanceof Error ? q.message : "Failed to queue node install";
        }
    }
    async function ye() {
      if (!p.value) {
        n("close");
        return;
      }
      v.value = !0, m.value = null;
      try {
        for (const [se, q] of Object.entries(w.value))
          await r(o.workflowName, se, q);
        n("refresh"), n("close");
      } catch (se) {
        m.value = se instanceof Error ? se.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return ct(V), (se, q) => (a(), i(j, null, [
      k(It, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: m.value || void 0,
        onClose: q[4] || (q[4] = (ae) => n("close"))
      }, {
        body: g(() => [
          d.value ? (a(), i(j, { key: 0 }, [
            s("section", ep, [
              k(no, { variant: "section" }, {
                default: g(() => [
                  $("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", tp, " No models used in this workflow ")) : h("", !0),
              (a(!0), i(j, null, we(d.value.models, (ae) => {
                var Ue;
                return a(), i("div", {
                  key: ae.hash || ae.filename,
                  class: "model-card"
                }, [
                  s("div", sp, [
                    q[6] || (q[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", op, f(ae.filename), 1)
                  ]),
                  s("div", np, [
                    s("div", ap, [
                      q[7] || (q[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Fe(["value", S(ae.status)])
                      }, f(R(ae.status)), 3)
                    ]),
                    s("div", lp, [
                      s("span", ip, [
                        q[8] || (q[8] = $(" Importance: ", -1)),
                        k(jr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: q[0] || (q[0] = (oe) => y.value = !0)
                        })
                      ]),
                      k(Rn, {
                        "model-value": w.value[ae.filename] || ae.importance,
                        options: C,
                        "onUpdate:modelValue": (oe) => Y(ae.filename, oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    ae.loaded_by && ae.loaded_by.length > 0 ? (a(), i("div", rp, [
                      q[9] || (q[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", cp, [
                        (a(!0), i(j, null, we(O(ae), (oe, ge) => (a(), i("div", {
                          key: `${oe.node_id}-${ge}`,
                          class: "node-reference"
                        }, f(oe.node_type) + " (Node #" + f(oe.node_id) + ") ", 1))), 128)),
                        ae.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (oe) => M(ae.hash || ae.filename)
                        }, f(J(ae.hash || ae.filename) ? "▼ Show less" : `▶ View all (${ae.loaded_by.length})`), 9, up)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    ae.size_mb ? (a(), i("div", dp, [
                      q[10] || (q[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", fp, f(ae.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    ae.has_category_mismatch ? (a(), i("div", mp, [
                      q[13] || (q[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", vp, [
                        q[11] || (q[11] = $(" In ", -1)),
                        s("code", null, f(ae.actual_category) + "/", 1),
                        q[12] || (q[12] = $(" but loader needs ", -1)),
                        s("code", null, f((Ue = ae.expected_categories) == null ? void 0 : Ue[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  ae.status !== "available" ? (a(), i("div", pp, [
                    ae.status === "downloadable" ? (a(), P(Le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: q[1] || (q[1] = (oe) => n("resolve"))
                    }, {
                      default: g(() => [...q[14] || (q[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : ae.status === "category_mismatch" && ae.file_path ? (a(), P(Le, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => Z(ae.file_path)
                    }, {
                      default: g(() => [...q[15] || (q[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : ae.status !== "path_mismatch" ? (a(), P(Le, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: q[2] || (q[2] = (oe) => n("resolve"))
                    }, {
                      default: g(() => [...q[16] || (q[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            s("section", gp, [
              k(no, { variant: "section" }, {
                default: g(() => [
                  $("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", hp, " No custom nodes used in this workflow ")) : h("", !0),
              (a(!0), i(j, null, we(d.value.nodes, (ae, Ue) => (a(), i("div", {
                key: `${ae.name}-${ae.status}-${Ue}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Fe(["node-status", T(ae.status)])
                }, f(E(ae.status)), 3),
                s("div", yp, [
                  s("div", wp, [
                    s("span", _p, f(ae.name), 1),
                    s("span", kp, f(N(ae.status)), 1),
                    ae.version ? (a(), i("span", bp, "v" + f(ae.version), 1)) : h("", !0),
                    ae.status === "uninstallable" && ae.package_id && !x.value.has(ae.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (oe) => ie(ae)
                    }, " Install ", 8, $p)) : ae.status === "uninstallable" && ae.package_id && x.value.has(ae.package_id) ? (a(), i("span", Cp, " Queued ")) : h("", !0)
                  ]),
                  ae.guidance ? (a(), i("div", xp, f(ae.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          k(Le, {
            variant: "secondary",
            onClick: q[3] || (q[3] = (ae) => n("close"))
          }, {
            default: g(() => [...q[17] || (q[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (a(), P(Le, {
            key: 0,
            variant: "primary",
            onClick: ye
          }, {
            default: g(() => [...q[18] || (q[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(cs, {
        show: y.value,
        title: "Model Importance Levels",
        onClose: q[5] || (q[5] = (ae) => y.value = !1)
      }, {
        content: g(() => [...q[19] || (q[19] = [
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
}), Ip = /* @__PURE__ */ Se(Sp, [["__scopeId", "data-v-543076d9"]]), it = ro({
  items: [],
  status: "idle"
});
let ks = null;
function qr() {
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
    await Ep(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    it.status = "idle", go();
  }
}
async function Ep(e) {
  return new Promise((t, o) => {
    ks && (ks.close(), ks = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    ks = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const v = 2e3, m = window.setInterval(() => {
      d || Date.now() - u > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(m);
    };
    l.onmessage = (w) => {
      try {
        const y = JSON.parse(w.data);
        switch (y.type) {
          case "progress":
            e.downloaded = y.downloaded || 0, e.size = y.total || e.size, u = Date.now();
            const _ = u, x = (_ - r) / 1e3, C = e.downloaded - c;
            if (C > 0 && x > 0)
              if (e.speed = C / x, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
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
async function Tp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (it.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: qr(),
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
        (E) => E.url === S.url && E.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const T = {
        id: qr(),
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
      it.items.push(T);
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
        const R = it.items.findIndex((T) => T.id === C);
        R >= 0 && it.items.splice(R, 1);
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
    const S = it.items.findIndex((R) => R.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(it.items[S].status) && it.items.splice(S, 1);
  }
  function c() {
    it.items = it.items.filter((C) => C.status !== "completed");
  }
  function u() {
    it.items = it.items.filter((C) => C.status !== "failed");
  }
  const d = D(
    () => it.items.find((C) => C.status === "downloading")
  ), v = D(
    () => it.items.filter((C) => C.status === "queued")
  ), m = D(
    () => it.items.filter((C) => C.status === "completed")
  ), p = D(
    () => it.items.filter((C) => C.status === "failed")
  ), w = D(
    () => it.items.filter((C) => C.status === "paused")
  ), y = D(() => it.items.length > 0), _ = D(
    () => it.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = D(
    () => it.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Ln(it),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: m,
    failedItems: p,
    pausedItems: w,
    hasItems: y,
    activeCount: _,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Tp
  };
}
function Kr() {
  const e = b(null), t = b(null), o = b([]), n = b([]), l = b(!1), r = b(null);
  async function c(R, T) {
    var N;
    if (!((N = window.app) != null && N.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(R, T);
    if (!E.ok) {
      const O = await E.json().catch(() => ({})), J = O.error || O.message || `Request failed: ${E.status}`;
      throw new Error(J);
    }
    return E.json();
  }
  async function u(R) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Ao() || (T = await c(
        `/v2/comfygit/workflow/${R}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), T.nodes.version_gated = T.nodes.version_gated || [], T.nodes.uninstallable = T.nodes.uninstallable || [], T.node_guidance = T.node_guidance || {}, T.package_aliases = T.package_aliases || {}, e.value = T, T;
    } catch (T) {
      const E = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = E, T;
    } finally {
      l.value = !1;
    }
  }
  async function d(R, T, E, N) {
    l.value = !0, r.value = null;
    try {
      let O;
      if (!Ao()) {
        const J = Object.fromEntries(T), M = Object.fromEntries(E), V = N ? Array.from(N) : [];
        O = await c(
          `/v2/comfygit/workflow/${R}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: J,
              model_choices: M,
              skipped_packages: V
            })
          }
        );
      }
      return t.value = O, O;
    } catch (O) {
      const J = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = J, O;
    } finally {
      l.value = !1;
    }
  }
  async function v(R, T = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: R, limit: T })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const N = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = N, E;
    } finally {
      l.value = !1;
    }
  }
  async function m(R, T = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: R, limit: T })
        }
      )), n.value = E.results, E.results;
    } catch (E) {
      const N = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = N, E;
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
  async function y(R) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Ao(), await _(R);
    } catch (T) {
      const E = T instanceof Error ? T.message : "Failed to install nodes";
      throw p.installError = E, T;
    }
  }
  async function _(R) {
    var E;
    const T = await c(
      `/v2/comfygit/workflow/${R}/install`,
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
      const N = new Map(((E = T.failed) == null ? void 0 : E.map((O) => [O.node_id, O.error])) || []);
      for (let O = 0; O < p.nodesToInstall.length; O++) {
        const J = p.nodesToInstall[O], M = N.get(J);
        p.nodeInstallProgress.completedNodes.push({
          node_id: J,
          success: !M,
          error: M
        });
      }
    }
    return p.nodesInstalled = T.nodes_installed, p.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (p.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function x(R, T, E) {
    w(), p.phase = "resolving", r.value = null;
    const N = Object.fromEntries(T), O = Object.fromEntries(E);
    try {
      const J = await fetch(`/v2/comfygit/workflow/${R}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: O
        })
      });
      if (!J.ok)
        throw new Error(`Request failed: ${J.status}`);
      if (!J.body)
        throw new Error("No response body");
      const M = J.body.getReader(), V = new TextDecoder();
      let Y = "";
      for (; ; ) {
        const { done: Z, value: ie } = await M.read();
        if (Z) break;
        Y += V.decode(ie, { stream: !0 });
        const ye = Y.split(`

`);
        Y = ye.pop() || "";
        for (const se of ye) {
          if (!se.trim()) continue;
          const q = se.split(`
`);
          let ae = "", Ue = "";
          for (const oe of q)
            oe.startsWith("event: ") ? ae = oe.slice(7) : oe.startsWith("data: ") && (Ue = oe.slice(6));
          if (Ue)
            try {
              const oe = JSON.parse(Ue);
              C(ae, oe);
            } catch (oe) {
              console.warn("Failed to parse SSE event:", oe);
            }
        }
      }
    } catch (J) {
      const M = J instanceof Error ? J.message : "Unknown error occurred";
      throw r.value = M, p.error = M, p.phase = "error", J;
    }
  }
  function C(R, T) {
    switch (R) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = T.total;
        break;
      case "file_start":
        p.currentFile = T.filename, p.currentFileIndex = T.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = T.downloaded, p.bytesTotal = T.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = T.nodes_to_install || [], T.download_results && (p.completedFiles = T.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = T.message, p.phase = "error", r.value = T.message;
        break;
    }
  }
  function S(R, T) {
    const { addToQueue: E } = No(), N = T.filter((O) => O.url && O.target_path).map((O) => ({
      workflow: R,
      filename: O.filename,
      url: O.url,
      targetPath: O.target_path,
      size: O.size || 0,
      type: "model"
    }));
    return N.length > 0 && E(N), N.length;
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
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: y,
    searchNodes: v,
    searchModels: m,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const Mp = { class: "resolution-stepper" }, Pp = { class: "stepper-header" }, Rp = ["onClick"], Np = {
  key: 0,
  class: "step-icon"
}, Lp = {
  key: 1,
  class: "step-number"
}, Dp = { class: "step-label" }, Op = {
  key: 0,
  class: "step-connector"
}, Ap = { class: "stepper-content" }, Up = /* @__PURE__ */ $e({
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
      var m;
      if ((m = o.stepStats) != null && m[v]) {
        const p = o.stepStats[v];
        return p.total > 0 && p.resolved === p.total;
      }
      return o.completedSteps.includes(v);
    }
    function r(v) {
      var m;
      if ((m = o.stepStats) != null && m[v]) {
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
      n("step-change", v);
    }
    return (v, m) => (a(), i("div", Mp, [
      s("div", Pp, [
        (a(!0), i(j, null, we(e.steps, (p, w) => (a(), i("div", {
          key: p.id,
          class: Fe(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (y) => d(p.id)
        }, [
          s("div", {
            class: Fe(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (a(), i("span", Np, "✓")) : (a(), i("span", Lp, f(w + 1), 1))
          ], 2),
          s("div", Dp, f(p.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", Op)) : h("", !0)
        ], 10, Rp))), 128))
      ]),
      s("div", Ap, [
        ot(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), zp = /* @__PURE__ */ Se(Up, [["__scopeId", "data-v-2a7b3af8"]]), Vp = /* @__PURE__ */ $e({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = D(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = D(() => `confidence-${o.value}`), l = D(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (a(), i("span", {
      class: Fe(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Gn = /* @__PURE__ */ Se(Vp, [["__scopeId", "data-v-17ec4b80"]]), Fp = { class: "node-info" }, Bp = { class: "node-info-text" }, Wp = { class: "item-body" }, Gp = {
  key: 0,
  class: "resolved-state"
}, jp = {
  key: 1,
  class: "multiple-options"
}, Hp = {
  key: 0,
  class: "installed-packs-section"
}, qp = { class: "installed-packs-list" }, Kp = ["onClick"], Jp = { class: "installed-pack-name" }, Qp = { class: "installed-pack-source" }, Yp = { class: "options-list" }, Xp = ["onClick"], Zp = ["name", "value", "checked", "onChange"], eg = { class: "option-content" }, tg = { class: "option-header" }, sg = { class: "option-package-id" }, og = {
  key: 0,
  class: "option-title"
}, ng = { class: "option-meta" }, ag = {
  key: 0,
  class: "installed-badge"
}, lg = { class: "action-buttons" }, ig = {
  key: 2,
  class: "unresolved"
}, rg = {
  key: 0,
  class: "installed-packs-section"
}, cg = { class: "installed-packs-list" }, ug = ["onClick"], dg = { class: "installed-pack-name" }, fg = { class: "installed-pack-source" }, mg = {
  key: 1,
  class: "searching-state"
}, vg = { class: "options-list" }, pg = ["onClick"], gg = ["name", "value"], hg = { class: "option-content" }, yg = { class: "option-header" }, wg = { class: "option-package-id" }, _g = {
  key: 0,
  class: "option-description"
}, kg = { class: "option-meta" }, bg = {
  key: 0,
  class: "installed-badge"
}, $g = {
  key: 3,
  class: "unresolved-message"
}, Cg = { class: "action-buttons" }, xg = /* @__PURE__ */ $e({
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
    function l(m, p = 80) {
      return m.length <= p ? m : m.slice(0, p - 3) + "...";
    }
    const r = D(() => !!o.choice);
    D(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), D(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.package_id;
    });
    const c = D(() => o.installedNodePacks || []), u = D(() => {
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
    function d(m) {
      n("option-selected", m);
    }
    function v(m) {
      switch (m) {
        case "development":
          return "dev";
        case "git":
          return "git";
        case "registry":
          return "registry";
        default:
          return m || "unknown";
      }
    }
    return (m, p) => (a(), i("div", {
      class: Fe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", Fp, [
        s("span", Bp, [
          p[7] || (p[7] = $("Node type: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Fe(["status-badge", u.value])
        }, f(e.statusLabel), 3)) : h("", !0)
      ]),
      s("div", Wp, [
        r.value ? (a(), i("div", Gp, [
          k(Le, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => n("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", jp, [
          c.value.length > 0 ? (a(), i("div", Hp, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", qp, [
              (a(!0), i(j, null, we(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", Jp, f(w.package_id), 1),
                s("span", Qp, f(v(w.source)), 1)
              ], 8, Kp))), 128))
            ])
          ])) : h("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", Yp, [
            (a(!0), i(j, null, we(e.options, (w, y) => (a(), i("label", {
              key: w.package_id,
              class: Fe(["option-card", { selected: e.selectedOptionIndex === y }]),
              onClick: (_) => d(y)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: y,
                checked: e.selectedOptionIndex === y,
                onChange: (_) => d(y)
              }, null, 40, Zp),
              s("div", eg, [
                s("div", tg, [
                  s("span", sg, f(w.package_id), 1),
                  k(Gn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", og, f(w.title), 1)) : h("", !0),
                s("div", ng, [
                  w.is_installed ? (a(), i("span", ag, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, Xp))), 128))
          ]),
          s("div", lg, [
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => n("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => n("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => n("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", ig, [
          c.value.length > 0 ? (a(), i("div", rg, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", cg, [
              (a(!0), i(j, null, we(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", dg, f(w.package_id), 1),
                s("span", fg, f(v(w.source)), 1)
              ], 8, ug))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (a(), i("div", mg, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(j, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", vg, [
              (a(!0), i(j, null, we(e.searchResults.slice(0, 5), (w, y) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, gg),
                s("div", hg, [
                  s("div", yg, [
                    s("span", wg, f(w.package_id), 1),
                    k(Gn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", _g, f(l(w.description)), 1)) : h("", !0),
                  s("div", kg, [
                    w.is_installed ? (a(), i("span", bg, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, pg))), 128))
            ])
          ], 64)) : (a(), i("div", $g, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", Cg, [
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => n("search"))
            }, {
              default: g(() => {
                var w;
                return [
                  $(f((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => n("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => n("mark-optional"))
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
}), Sg = /* @__PURE__ */ Se(xg, [["__scopeId", "data-v-fb0bbf03"]]), Ig = { class: "item-navigator" }, Eg = { class: "nav-item-info" }, Tg = ["title"], Mg = { class: "nav-controls" }, Pg = { class: "nav-arrows" }, Rg = ["disabled"], Ng = ["disabled"], Lg = { class: "nav-position" }, Dg = /* @__PURE__ */ $e({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", Ig, [
      s("div", Eg, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Tg)
      ]),
      s("div", Mg, [
        s("div", Pg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Rg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Ng)
        ]),
        s("span", Lg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ Se(Dg, [["__scopeId", "data-v-74af7920"]]), Og = ["type", "value", "placeholder", "disabled"], Ag = {
  key: 0,
  class: "base-input-error"
}, Ug = /* @__PURE__ */ $e({
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
      }, null, 42, Og),
      e.error ? (a(), i("span", Ag, f(e.error), 1)) : h("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ Se(Ug, [["__scopeId", "data-v-9ba02cdc"]]), zg = { class: "node-resolution-step" }, Vg = {
  key: 0,
  class: "auto-resolved-section"
}, Fg = { class: "section-header" }, Bg = { class: "stat-badge" }, Wg = { class: "resolved-packages-list" }, Gg = { class: "package-info" }, jg = { class: "package-id" }, Hg = { class: "node-count" }, qg = { class: "package-actions" }, Kg = {
  key: 0,
  class: "status-badge install"
}, Jg = {
  key: 1,
  class: "status-badge skip"
}, Qg = ["onClick"], Yg = {
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
}, fh = { class: "node-manual-entry-modal" }, mh = { class: "node-modal-body" }, vh = { class: "node-modal-actions" }, ph = /* @__PURE__ */ $e({
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
    const o = e, n = t, { searchNodes: l } = Kr(), r = b(0), c = b(!1), u = b(!1), d = b(""), v = b(""), m = b([]), p = b(!1), w = b(/* @__PURE__ */ new Map()), y = b(/* @__PURE__ */ new Set()), _ = b(!1);
    function x() {
      _.value && ge(), _.value = !1;
    }
    const C = D(() => o.nodes[r.value]), S = D(() => o.nodes.filter((H) => o.nodeChoices.has(H.node_type)).length), R = D(() => C.value ? w.value.get(C.value.node_type) || [] : []), T = D(() => C.value ? y.value.has(C.value.node_type) : !1);
    kt(C, async (H) => {
      var X;
      H && ((X = H.options) != null && X.length || w.value.has(H.node_type) || y.value.has(H.node_type) || o.nodeChoices.has(H.node_type) || await E(H.node_type));
    }, { immediate: !0 });
    async function E(H) {
      y.value.add(H);
      try {
        const X = await l(H, 5);
        w.value.set(H, X);
      } catch {
        w.value.set(H, []);
      } finally {
        y.value.delete(H);
      }
    }
    const N = D(() => o.autoResolvedPackages.filter((H) => !o.skippedPackages.has(H.package_id)).length);
    function O(H) {
      return o.skippedPackages.has(H);
    }
    function J(H) {
      n("package-skip", H);
    }
    const M = D(() => {
      var X;
      if (!C.value) return "not-found";
      const H = o.nodeChoices.get(C.value.node_type);
      if (H)
        switch (H.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (X = C.value.options) != null && X.length ? "ambiguous" : "not-found";
    }), V = D(() => {
      var X;
      if (!C.value) return;
      const H = o.nodeChoices.get(C.value.node_type);
      if (H)
        switch (H.action) {
          case "install":
            return H.package_id ? `→ ${H.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (X = C.value.options) != null && X.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function Y(H) {
      H >= 0 && H < o.nodes.length && (r.value = H);
    }
    function Z() {
      var H;
      for (let X = r.value + 1; X < o.nodes.length; X++) {
        const xe = o.nodes[X];
        if (!((H = o.nodeChoices) != null && H.has(xe.node_type))) {
          Y(X);
          return;
        }
      }
    }
    function ie() {
      C.value && (n("mark-optional", C.value.node_type), Pt(() => Z()));
    }
    function ye() {
      C.value && (n("skip", C.value.node_type), Pt(() => Z()));
    }
    function se(H) {
      C.value && (n("option-selected", C.value.node_type, H), Pt(() => Z()));
    }
    function q() {
      C.value && n("clear-choice", C.value.node_type);
    }
    function ae() {
      C.value && (d.value = C.value.node_type, m.value = R.value, c.value = !0, He(d.value));
    }
    function Ue() {
      v.value = "", u.value = !0;
    }
    function oe(H) {
      C.value && (n("manual-entry", C.value.node_type, H), Pt(() => Z()));
    }
    function ge() {
      c.value = !1, d.value = "", m.value = [];
    }
    function A() {
      u.value = !1, v.value = "";
    }
    let me = null;
    function Pe() {
      me && clearTimeout(me), me = setTimeout(() => {
        He(d.value);
      }, 300);
    }
    async function He(H) {
      if (!H.trim()) {
        m.value = [];
        return;
      }
      p.value = !0;
      try {
        m.value = await l(H, 10);
      } catch {
        m.value = [];
      } finally {
        p.value = !1;
      }
    }
    function Ee(H) {
      C.value && (n("manual-entry", C.value.node_type, H.package_id), ge(), Pt(() => Z()));
    }
    function G(H) {
      C.value && (n("manual-entry", C.value.node_type, H.package_id), Pt(() => Z()));
    }
    function ee() {
      !C.value || !v.value.trim() || (n("manual-entry", C.value.node_type, v.value.trim()), A(), Pt(() => Z()));
    }
    return (H, X) => {
      var xe, ue;
      return a(), i("div", zg, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", Vg, [
          s("div", Fg, [
            X[6] || (X[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", Bg, f(N.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", Wg, [
            (a(!0), i(j, null, we(e.autoResolvedPackages, (le) => (a(), i("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", Gg, [
                s("code", jg, f(le.package_id), 1),
                s("span", Hg, f(le.node_types_count) + " node type" + f(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", qg, [
                O(le.package_id) ? (a(), i("span", Jg, " SKIPPED ")) : (a(), i("span", Kg, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (I) => J(le.package_id)
                }, f(O(le.package_id) ? "Include" : "Skip"), 9, Qg)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", Yg)) : h("", !0),
        e.nodes.length > 0 ? (a(), i(j, { key: 2 }, [
          s("div", Xg, [
            X[7] || (X[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", Zg, f(S.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (a(), P(Jr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: X[0] || (X[0] = (le) => Y(r.value - 1)),
            onNext: X[1] || (X[1] = (le) => Y(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          C.value ? (a(), i("div", eh, [
            k(Sg, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((xe = C.value.options) != null && xe.length),
              options: C.value.options,
              choice: (ue = e.nodeChoices) == null ? void 0 : ue.get(C.value.node_type),
              status: M.value,
              "status-label": V.value,
              "search-results": R.value,
              "is-searching": T.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ie,
              onSkip: ye,
              onManualEntry: Ue,
              onSearch: ae,
              onOptionSelected: se,
              onClearChoice: q,
              onSearchResultSelected: G,
              onInstalledPackSelected: oe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", th, [...X[8] || (X[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (a(), P(Ot, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: X[4] || (X[4] = vt((le) => _.value = !0, ["self"])),
            onMouseup: vt(x, ["self"])
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
              s("div", sh, [
                k(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": X[2] || (X[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                s("div", oh, [
                  m.value.length > 0 ? (a(), i("div", nh, [
                    (a(!0), i(j, null, we(m.value, (le) => (a(), i("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (I) => Ee(le)
                    }, [
                      s("div", lh, [
                        s("code", ih, f(le.package_id), 1),
                        le.match_confidence ? (a(), P(Gn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      le.description ? (a(), i("div", rh, f(le.description), 1)) : h("", !0)
                    ], 8, ah))), 128))
                  ])) : p.value ? (a(), i("div", ch, "Searching...")) : d.value ? (a(), i("div", uh, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), i("div", dh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (a(), P(Ot, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: vt(A, ["self"])
          }, [
            s("div", fh, [
              s("div", { class: "node-modal-header" }, [
                X[10] || (X[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              s("div", mh, [
                k(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": X[5] || (X[5] = (le) => v.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", vh, [
                  k(Le, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: g(() => [...X[11] || (X[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Le, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: ee
                  }, {
                    default: g(() => [...X[12] || (X[12] = [
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
}), gh = /* @__PURE__ */ Se(ph, [["__scopeId", "data-v-94c6a438"]]), hh = { class: "node-info" }, yh = { class: "node-info-text" }, wh = { class: "item-body" }, _h = {
  key: 0,
  class: "resolved-state"
}, kh = {
  key: 1,
  class: "multiple-options"
}, bh = { class: "options-list" }, $h = ["onClick"], Ch = ["name", "value", "checked", "onChange"], xh = { class: "option-content" }, Sh = { class: "option-header" }, Ih = { class: "option-filename" }, Eh = { class: "option-meta" }, Th = { class: "option-size" }, Mh = { class: "option-category" }, Ph = { class: "option-path" }, Rh = { class: "action-buttons" }, Nh = {
  key: 2,
  class: "unresolved"
}, Lh = { class: "action-buttons" }, Dh = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = D(() => !!o.choice);
    D(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), D(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = D(() => {
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
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (a(), i("div", {
      class: Fe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", hh, [
        s("span", yh, [
          v[7] || (v[7] = $("Used by: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Fe(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : h("", !0)
      ]),
      s("div", wh, [
        l.value ? (a(), i("div", _h, [
          k(Le, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (m) => n("clear-choice"))
          }, {
            default: g(() => [...v[8] || (v[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", kh, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", bh, [
            (a(!0), i(j, null, we(e.options, (m, p) => (a(), i("label", {
              key: m.model.hash,
              class: Fe(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, Ch),
              s("div", xh, [
                s("div", Sh, [
                  s("span", Ih, f(m.model.filename), 1),
                  k(Gn, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", Eh, [
                  s("span", Th, f(u(m.model.size)), 1),
                  s("span", Mh, f(m.model.category), 1)
                ]),
                s("div", Ph, f(m.model.relative_path), 1)
              ])
            ], 10, $h))), 128))
          ]),
          s("div", Rh, [
            k(Le, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (m) => n("search"))
            }, {
              default: g(() => [...v[9] || (v[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (m) => n("download-url"))
            }, {
              default: g(() => [...v[10] || (v[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (m) => n("mark-optional"))
            }, {
              default: g(() => [...v[11] || (v[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", Nh, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Lh, [
            k(Le, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (m) => n("search"))
            }, {
              default: g(() => [...v[13] || (v[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (m) => n("download-url"))
            }, {
              default: g(() => [...v[14] || (v[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (m) => n("mark-optional"))
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
}), Oh = /* @__PURE__ */ Se(Dh, [["__scopeId", "data-v-8a82fefa"]]), Ah = { class: "model-resolution-step" }, Uh = { class: "step-header" }, zh = { class: "step-info" }, Vh = { class: "step-title" }, Fh = { class: "step-description" }, Bh = { class: "stat-badge" }, Wh = {
  key: 1,
  class: "step-body"
}, Gh = {
  key: 2,
  class: "empty-state"
}, jh = { class: "model-search-modal" }, Hh = { class: "model-modal-body" }, qh = {
  key: 0,
  class: "model-search-results"
}, Kh = ["onClick"], Jh = { class: "model-result-header" }, Qh = { class: "model-result-filename" }, Yh = { class: "model-result-meta" }, Xh = { class: "model-result-category" }, Zh = { class: "model-result-size" }, ey = {
  key: 0,
  class: "model-result-path"
}, ty = {
  key: 1,
  class: "model-no-results"
}, sy = {
  key: 2,
  class: "model-searching"
}, oy = { class: "model-download-url-modal" }, ny = { class: "model-modal-body" }, ay = { class: "model-input-group" }, ly = { class: "model-input-group" }, iy = { class: "model-modal-actions" }, ry = /* @__PURE__ */ $e({
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
    function n(oe) {
      var ge;
      return oe && ((ge = o[oe]) == null ? void 0 : ge[0]) || null;
    }
    const l = e, r = t, c = b(0), u = b(!1), d = b(!1), v = b(""), m = b(""), p = b(""), w = b([]), y = b(!1), _ = D(() => l.models[c.value]), x = D(() => l.models.some((oe) => oe.is_download_intent)), C = D(() => l.models.filter(
      (oe) => l.modelChoices.has(oe.filename) || oe.is_download_intent
    ).length), S = D(() => {
      var ge;
      if (!_.value) return "";
      const oe = n((ge = _.value.reference) == null ? void 0 : ge.node_type);
      return oe ? `${oe}/${_.value.filename}` : "";
    }), R = D(() => {
      var ge;
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
      return _.value.is_download_intent ? "download" : (ge = _.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), T = D(() => {
      var ge, A;
      if (!_.value) return;
      const oe = l.modelChoices.get(_.value.filename);
      if (oe)
        switch (oe.action) {
          case "select":
            return (ge = oe.selected_model) != null && ge.filename ? `→ ${oe.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (A = _.value.options) != null && A.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function E(oe) {
      oe >= 0 && oe < l.models.length && (c.value = oe);
    }
    function N() {
      var oe;
      for (let ge = c.value + 1; ge < l.models.length; ge++) {
        const A = l.models[ge];
        if (!A.is_download_intent && !((oe = l.modelChoices) != null && oe.has(A.filename))) {
          E(ge);
          return;
        }
      }
    }
    function O() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => N()));
    }
    function J() {
      _.value && (r("skip", _.value.filename), Pt(() => N()));
    }
    function M(oe) {
      _.value && (r("option-selected", _.value.filename, oe), Pt(() => N()));
    }
    function V() {
      _.value && r("clear-choice", _.value.filename);
    }
    function Y() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function Z() {
      _.value && (m.value = _.value.download_source || "", p.value = _.value.target_path || S.value, d.value = !0);
    }
    function ie() {
      u.value = !1, v.value = "", w.value = [];
    }
    function ye() {
      d.value = !1, m.value = "", p.value = "";
    }
    function se() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function q(oe) {
      _.value && (ie(), Pt(() => N()));
    }
    function ae() {
      !_.value || !m.value.trim() || (r("download-url", _.value.filename, m.value.trim(), p.value.trim() || void 0), ye(), Pt(() => N()));
    }
    function Ue(oe) {
      if (!oe) return "Unknown";
      const ge = oe / (1024 * 1024 * 1024);
      return ge >= 1 ? `${ge.toFixed(2)} GB` : `${(oe / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (oe, ge) => {
      var A, me, Pe;
      return a(), i("div", Ah, [
        s("div", Uh, [
          s("div", zh, [
            s("h3", Vh, f(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Fh, f(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Bh, f(C.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), P(Jr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ge[0] || (ge[0] = (He) => E(c.value - 1)),
          onNext: ge[1] || (ge[1] = (He) => E(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        _.value ? (a(), i("div", Wh, [
          k(Oh, {
            filename: _.value.filename,
            "node-type": ((A = _.value.reference) == null ? void 0 : A.node_type) || "Unknown",
            "has-multiple-options": !!((me = _.value.options) != null && me.length),
            options: _.value.options,
            choice: (Pe = e.modelChoices) == null ? void 0 : Pe.get(_.value.filename),
            status: R.value,
            "status-label": T.value,
            onMarkOptional: O,
            onSkip: J,
            onDownloadUrl: Z,
            onSearch: Y,
            onOptionSelected: M,
            onClearChoice: V
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", Gh, [...ge[5] || (ge[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), P(Ot, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(ie, ["self"])
          }, [
            s("div", jh, [
              s("div", { class: "model-modal-header" }, [
                ge[6] || (ge[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              s("div", Hh, [
                k(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (He) => v.value = He),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", qh, [
                  (a(!0), i(j, null, we(w.value, (He) => (a(), i("div", {
                    key: He.hash,
                    class: "model-search-result-item",
                    onClick: (Ee) => q()
                  }, [
                    s("div", Jh, [
                      s("code", Qh, f(He.filename), 1)
                    ]),
                    s("div", Yh, [
                      s("span", Xh, f(He.category), 1),
                      s("span", Zh, f(Ue(He.size)), 1)
                    ]),
                    He.relative_path ? (a(), i("div", ey, f(He.relative_path), 1)) : h("", !0)
                  ], 8, Kh))), 128))
                ])) : v.value && !y.value ? (a(), i("div", ty, ' No models found matching "' + f(v.value) + '" ', 1)) : h("", !0),
                y.value ? (a(), i("div", sy, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (a(), P(Ot, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(ye, ["self"])
          }, [
            s("div", oy, [
              s("div", { class: "model-modal-header" }, [
                ge[7] || (ge[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ye
                }, "✕")
              ]),
              s("div", ny, [
                s("div", ay, [
                  ge[8] || (ge[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(wt, {
                    modelValue: m.value,
                    "onUpdate:modelValue": ge[3] || (ge[3] = (He) => m.value = He),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", ly, [
                  ge[9] || (ge[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(wt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ge[4] || (ge[4] = (He) => p.value = He),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", iy, [
                  k(Le, {
                    variant: "secondary",
                    onClick: ye
                  }, {
                    default: g(() => [...ge[10] || (ge[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Le, {
                    variant: "primary",
                    disabled: !m.value.trim() || !p.value.trim(),
                    onClick: ae
                  }, {
                    default: g(() => [...ge[11] || (ge[11] = [
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
}), cy = /* @__PURE__ */ Se(ry, [["__scopeId", "data-v-5c700bfa"]]), uy = { class: "applying-step" }, dy = {
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
}, Ty = { class: "summary-text" }, My = {
  key: 1,
  class: "summary-item error"
}, Py = { class: "summary-text" }, Ry = {
  key: 2,
  class: "failed-list"
}, Ny = { class: "failed-node-id" }, Ly = { class: "failed-error" }, Dy = {
  key: 4,
  class: "summary-item success"
}, Oy = {
  key: 5,
  class: "restart-prompt"
}, Ay = {
  key: 3,
  class: "phase-content error"
}, Uy = { class: "error-message" }, zy = /* @__PURE__ */ $e({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = D(() => {
      var v, m;
      const u = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || t.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((m = t.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = D(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = D(() => n.value.length > 0);
    function r(u, d) {
      var m, p;
      const v = (m = t.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.find((w) => w.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, v;
      return (v = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((m) => m.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, d) => {
      var v, m, p, w;
      return a(), i("div", uy, [
        e.progress.phase === "resolving" ? (a(), i("div", dy, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", fy, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", my, " Installing " + f((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + f(((m = e.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", vy, [
            s("div", py, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", gy, f(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", hy, [
            (a(!0), i(j, null, we(e.progress.nodesToInstall, (y, _) => (a(), i("div", {
              key: y,
              class: Fe(["install-item", r(y, _)])
            }, [
              s("span", yy, [
                r(y, _) === "pending" ? (a(), i("span", wy, "○")) : r(y, _) === "installing" ? (a(), i("span", _y, "◌")) : r(y, _) === "complete" ? (a(), i("span", ky, "✓")) : r(y, _) === "failed" ? (a(), i("span", by, "✗")) : h("", !0)
              ]),
              s("code", null, f(y), 1),
              c(y) ? (a(), i("span", $y, f(c(y)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", Cy, [
          s("div", xy, [
            s("span", {
              class: Fe(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            s("h3", Sy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", Iy, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", Ey, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Ty, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("div", My, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", Py, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("div", Ry, [
              (a(!0), i(j, null, we(n.value, (y) => (a(), i("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                s("code", Ny, f(y.node_id), 1),
                s("span", Ly, f(y.error), 1)
              ]))), 128))
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (a(), i("div", Dy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", Oy, [
              d[7] || (d[7] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (y) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : h("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), i("div", Ay, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", Uy, f(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), Vy = /* @__PURE__ */ Se(zy, [["__scopeId", "data-v-5efaae58"]]), Fy = {
  key: 0,
  class: "loading-state"
}, By = {
  key: 1,
  class: "wizard-content"
}, Wy = {
  key: 0,
  class: "step-content"
}, Gy = { class: "analysis-summary" }, jy = { class: "analysis-header" }, Hy = { class: "summary-description" }, qy = { class: "stats-grid" }, Ky = { class: "stat-card" }, Jy = { class: "stat-items" }, Qy = {
  key: 0,
  class: "stat-item success"
}, Yy = { class: "stat-count" }, Xy = {
  key: 1,
  class: "stat-item info"
}, Zy = { class: "stat-count" }, e1 = {
  key: 2,
  class: "stat-item warning"
}, t1 = { class: "stat-count" }, s1 = {
  key: 3,
  class: "stat-item warning"
}, o1 = { class: "stat-count" }, n1 = {
  key: 4,
  class: "stat-item warning"
}, a1 = { class: "stat-count" }, l1 = {
  key: 5,
  class: "stat-item error"
}, i1 = { class: "stat-count" }, r1 = { class: "stat-card" }, c1 = { class: "stat-items" }, u1 = { class: "stat-item success" }, d1 = { class: "stat-count" }, f1 = {
  key: 0,
  class: "stat-item info"
}, m1 = { class: "stat-count" }, v1 = {
  key: 1,
  class: "stat-item warning"
}, p1 = { class: "stat-count" }, g1 = {
  key: 2,
  class: "stat-item warning"
}, h1 = { class: "stat-count" }, y1 = {
  key: 3,
  class: "stat-item error"
}, w1 = { class: "stat-count" }, _1 = {
  key: 0,
  class: "status-message warning"
}, k1 = { class: "status-text" }, b1 = {
  key: 1,
  class: "status-message warning"
}, $1 = { class: "status-text" }, C1 = {
  key: 2,
  class: "status-message info"
}, x1 = { class: "status-text" }, S1 = {
  key: 3,
  class: "status-message info"
}, I1 = { class: "status-text" }, E1 = {
  key: 4,
  class: "status-message info"
}, T1 = { class: "status-text" }, M1 = {
  key: 5,
  class: "status-message warning"
}, P1 = { class: "status-text" }, R1 = {
  key: 6,
  class: "status-message success"
}, N1 = {
  key: 7,
  class: "category-mismatch-section"
}, L1 = { class: "mismatch-list" }, D1 = { class: "mismatch-path" }, O1 = { class: "mismatch-target" }, A1 = {
  key: 8,
  class: "category-mismatch-section"
}, U1 = { class: "mismatch-list" }, z1 = { class: "mismatch-path" }, V1 = { class: "status-text" }, F1 = {
  key: 1,
  class: "step-content node-step-content"
}, B1 = {
  key: 0,
  class: "community-node-section"
}, W1 = { class: "community-node-header" }, G1 = { class: "community-node-title" }, j1 = { class: "community-node-list" }, H1 = { class: "community-node-info" }, q1 = { class: "community-node-heading" }, K1 = { class: "item-name" }, J1 = { class: "community-node-package" }, Q1 = { class: "community-node-meta" }, Y1 = { class: "community-node-guidance" }, X1 = { key: 0 }, Z1 = { class: "community-choice-status" }, e0 = { class: "community-node-actions" }, t0 = {
  key: 3,
  class: "step-content"
}, s0 = { class: "review-summary" }, o0 = { class: "review-stats" }, n0 = { class: "review-stat" }, a0 = { class: "stat-value" }, l0 = { class: "review-stat" }, i0 = { class: "stat-value" }, r0 = { class: "review-stat" }, c0 = { class: "stat-value" }, u0 = { class: "review-stat" }, d0 = { class: "stat-value" }, f0 = {
  key: 0,
  class: "review-section"
}, m0 = { class: "section-title" }, v0 = { class: "review-items" }, p0 = { class: "item-name" }, g0 = { class: "item-choice" }, h0 = {
  key: 0,
  class: "choice-badge install"
}, y0 = {
  key: 1,
  class: "choice-badge skip"
}, w0 = {
  key: 1,
  class: "review-section"
}, _0 = { class: "section-title" }, k0 = { class: "review-items" }, b0 = { class: "item-name" }, $0 = { class: "item-choice" }, C0 = {
  key: 0,
  class: "choice-badge install"
}, x0 = {
  key: 1,
  class: "choice-badge optional"
}, S0 = {
  key: 2,
  class: "choice-badge skip"
}, I0 = {
  key: 2,
  class: "review-section"
}, E0 = { class: "section-title" }, T0 = { class: "review-items" }, M0 = { class: "item-name" }, P0 = { class: "item-choice" }, R0 = {
  key: 0,
  class: "choice-badge install"
}, N0 = {
  key: 1,
  class: "choice-badge optional"
}, L0 = {
  key: 2,
  class: "choice-badge skip"
}, D0 = {
  key: 1,
  class: "choice-badge pending"
}, O0 = {
  key: 3,
  class: "review-section"
}, A0 = { class: "section-title" }, U0 = { class: "review-items download-details" }, z0 = { class: "download-info" }, V0 = { class: "item-name" }, F0 = { class: "download-meta" }, B0 = { class: "download-path" }, W0 = ["title"], G0 = {
  key: 4,
  class: "review-section"
}, j0 = { class: "section-title" }, H0 = { class: "review-items" }, q0 = { class: "item-name" }, K0 = { class: "item-choice" }, J0 = {
  key: 0,
  class: "choice-badge install"
}, Q0 = {
  key: 1,
  class: "choice-badge download"
}, Y0 = {
  key: 2,
  class: "choice-badge optional"
}, X0 = {
  key: 3,
  class: "choice-badge skip"
}, Z0 = {
  key: 4,
  class: "choice-badge skip"
}, ew = {
  key: 1,
  class: "choice-badge download"
}, tw = {
  key: 2,
  class: "choice-badge pending"
}, sw = {
  key: 5,
  class: "no-choices"
}, ow = /* @__PURE__ */ $e({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = Kr(), { loadPendingDownloads: m } = No(), { openFileLocation: p, queueNodeInstall: w, getNodes: y } = gt(), _ = b(null), x = b([]), C = b(!1), S = b(!1), R = b(null), T = b("analysis"), E = b([]), N = b(/* @__PURE__ */ new Map()), O = b(/* @__PURE__ */ new Map()), J = b(/* @__PURE__ */ new Set()), M = D(() => {
      const ce = [
        { id: "analysis", label: "Analysis" }
      ];
      return (se.value || Ue.value || oe.value) && ce.push({ id: "nodes", label: "Nodes" }), q.value && ce.push({ id: "models", label: "Models" }), ce.push({ id: "review", label: "Review" }), T.value === "applying" && ce.push({ id: "applying", label: "Applying" }), ce;
    }), V = D(() => _.value ? _.value.stats.needs_user_input : !1), Y = D(() => _.value ? _.value.nodes.version_gated || [] : []), Z = D(() => _.value ? _.value.nodes.uninstallable || [] : []), ie = D(() => Z.value.filter((ce) => {
      var F;
      return !!((F = ce.package) != null && F.package_id);
    })), ye = D(() => Y.value.length > 0), se = D(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), q = D(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), ae = D(() => _.value ? _.value.stats.download_intents > 0 : !1), Ue = D(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), oe = D(() => ie.value.length > 0), ge = D(() => _.value ? _.value.nodes.resolved.length : 0), A = D(() => _.value ? _.value.models.resolved.filter((ce) => ce.has_category_mismatch) : []), me = D(() => A.value.length > 0), Pe = D(() => se.value || Ue.value || oe.value ? "nodes" : q.value ? "models" : "review"), He = D(() => {
      if (!_.value) return [];
      const ce = _.value.nodes.resolved.filter((fe) => !fe.is_installed), F = /* @__PURE__ */ new Set();
      return ce.filter((fe) => F.has(fe.package.package_id) ? !1 : (F.add(fe.package.package_id), !0));
    }), Ee = D(() => {
      if (!_.value) return [];
      const ce = _.value.nodes.resolved.filter((fe) => !fe.is_installed), F = /* @__PURE__ */ new Map();
      for (const fe of ce) {
        const Ge = F.get(fe.package.package_id);
        Ge ? Ge.node_types_count++ : F.set(fe.package.package_id, {
          package_id: fe.package.package_id,
          title: fe.package.title,
          node_types_count: 1
        });
      }
      return Array.from(F.values());
    }), G = D(() => He.value.filter((ce) => !J.value.has(ce.package.package_id))), ee = D(() => _.value ? _.value.models.resolved.filter(
      (ce) => ce.match_type === "download_intent" || ce.match_type === "property_download_intent"
    ).map((ce) => ({
      filename: ce.reference.widget_value,
      reference: ce.reference,
      is_download_intent: !0,
      resolved_model: ce.model,
      download_source: ce.download_source,
      target_path: ce.target_path
    })) : []), H = D(() => {
      if (!_.value) return [];
      const ce = _.value.nodes.unresolved.map((fe) => ({
        node_type: fe.reference.node_type,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), F = _.value.nodes.ambiguous.map((fe) => ({
        node_type: fe.reference.node_type,
        has_multiple_options: !0,
        options: fe.options.map((Ge) => ({
          package_id: Ge.package.package_id,
          title: Ge.package.title,
          match_confidence: Ge.match_confidence,
          match_type: Ge.match_type,
          is_installed: Ge.is_installed
        }))
      }));
      return [...ce, ...F];
    }), X = D(() => {
      if (!_.value) return [];
      const ce = _.value.models.unresolved.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), F = _.value.models.ambiguous.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        has_multiple_options: !0,
        options: fe.options.map((Ge) => ({
          model: Ge.model,
          match_confidence: Ge.match_confidence,
          match_type: Ge.match_type,
          has_download_source: Ge.has_download_source
        }))
      }));
      return [...ce, ...F];
    }), xe = D(() => {
      const ce = X.value, F = ee.value.map((fe) => ({
        filename: fe.filename,
        reference: fe.reference,
        is_download_intent: !0,
        resolved_model: fe.resolved_model,
        download_source: fe.download_source,
        target_path: fe.target_path,
        options: void 0
      }));
      return [...ce, ...F];
    }), ue = D(() => ee.value.filter((ce) => {
      const F = O.value.get(ce.filename);
      return F ? F.action === "download" : !0;
    }).map((ce) => ({
      filename: ce.filename,
      url: ce.download_source,
      target_path: ce.target_path
    })));
    function le(ce, F = 50) {
      return ce.length <= F ? ce : ce.slice(0, F - 3) + "...";
    }
    const I = D(() => {
      let ce = G.value.length;
      for (const F of N.value.values())
        F.action === "install" && ce++;
      for (const F of O.value.values())
        F.action === "select" && ce++;
      return ce;
    }), z = D(() => {
      let ce = 0;
      for (const F of O.value.values())
        F.action === "download" && ce++;
      for (const F of ee.value)
        O.value.get(F.filename) || ce++;
      return ce;
    }), re = D(() => {
      let ce = 0;
      for (const F of N.value.values())
        F.action === "optional" && ce++;
      for (const F of O.value.values())
        F.action === "optional" && ce++;
      return ce;
    }), Ce = D(() => {
      let ce = J.value.size;
      for (const F of N.value.values())
        F.action === "skip" && ce++;
      for (const F of O.value.values())
        F.action === "skip" && ce++;
      for (const F of H.value)
        N.value.has(F.node_type) || ce++;
      for (const F of X.value)
        O.value.has(F.filename) || ce++;
      return ce;
    }), _e = D(() => {
      const ce = {};
      if (ce.analysis = { resolved: 1, total: 1 }, se.value || oe.value) {
        const F = H.value.length, fe = ie.value.length, Ge = H.value.filter(
          (xt) => N.value.has(xt.node_type)
        ).length, ut = ie.value.filter(
          (xt) => N.value.has(xt.reference.node_type)
        ).length, Ct = F + fe, lt = Ge + ut;
        ce.nodes = { resolved: lt, total: Ct };
      }
      if (q.value) {
        const F = xe.value.length, fe = xe.value.filter(
          (Ge) => O.value.has(Ge.filename) || Ge.is_download_intent
        ).length;
        ce.models = { resolved: fe, total: F };
      }
      if (ce.review = { resolved: 1, total: 1 }, T.value === "applying") {
        const F = d.totalFiles || 1, fe = d.completedFiles.length;
        ce.applying = { resolved: fe, total: F };
      }
      return ce;
    });
    function ke(ce) {
      T.value = ce;
    }
    function Ae() {
      const ce = M.value.findIndex((F) => F.id === T.value);
      ce > 0 && (T.value = M.value[ce - 1].id);
    }
    function ze() {
      const ce = M.value.findIndex((F) => F.id === T.value);
      ce < M.value.length - 1 && (T.value = M.value[ce + 1].id);
    }
    function Re() {
      for (const ce of ie.value) {
        const F = ce.reference.node_type;
        N.value.has(F) || de(ce, "registry");
      }
    }
    function Ie(ce) {
      switch (ce) {
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
    function Je(ce) {
      return ce.filter((F) => F.installed && F.tracked).filter((F) => F.name !== "comfygit-manager").map((F) => ({
        package_id: F.registry_id || F.name,
        source: F.source
      })).filter((F, fe, Ge) => Ge.findIndex((ut) => ut.package_id === F.package_id) === fe).sort((F, fe) => {
        const Ge = Ie(F.source) - Ie(fe.source);
        return Ge !== 0 ? Ge : F.package_id.localeCompare(fe.package_id);
      });
    }
    async function Be() {
      C.value = !0, R.value = null;
      try {
        const [ce, F] = await Promise.all([
          l(o.workflowName),
          y()
        ]);
        _.value = ce, x.value = Je(F.nodes), Re();
      } catch (ce) {
        R.value = ce instanceof Error ? ce.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ve() {
      E.value.includes("analysis") || E.value.push("analysis"), se.value || Ue.value || oe.value ? T.value = "nodes" : q.value ? T.value = "models" : T.value = "review";
    }
    function Q(ce) {
      N.value.set(ce, { action: "optional" });
    }
    function qe(ce) {
      N.value.set(ce, { action: "skip" });
    }
    function be(ce, F) {
      var Ge;
      const fe = H.value.find((ut) => ut.node_type === ce);
      (Ge = fe == null ? void 0 : fe.options) != null && Ge[F] && N.value.set(ce, {
        action: "install",
        package_id: fe.options[F].package_id
      });
    }
    function Xe(ce, F) {
      N.value.set(ce, {
        action: "install",
        package_id: F
      });
    }
    function Ve(ce) {
      N.value.delete(ce);
    }
    function Ne(ce) {
      return N.value.get(ce);
    }
    function W(ce) {
      const F = Ne(ce);
      return F ? F.action === "optional" ? "Marked optional" : F.action === "skip" ? "Skipped" : F.action === "install" ? F.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function de(ce, F) {
      var ut;
      const fe = (ut = ce.package) == null ? void 0 : ut.package_id;
      if (!fe) return;
      const Ge = {
        action: "install",
        package_id: fe,
        version: ce.package.latest_version || null,
        install_source: F
      };
      F === "git" && ce.package.repository && (Ge.repository = ce.package.repository), N.value.set(ce.reference.node_type, Ge);
    }
    function pe(ce) {
      N.value.set(ce, { action: "optional" });
    }
    function Qe(ce) {
      N.value.set(ce, { action: "skip" });
    }
    function L(ce) {
      J.value.has(ce) ? J.value.delete(ce) : J.value.add(ce);
    }
    function U(ce) {
      O.value.set(ce, { action: "optional" });
    }
    function te(ce) {
      O.value.set(ce, { action: "skip" });
    }
    function De(ce, F) {
      var Ge;
      const fe = X.value.find((ut) => ut.filename === ce);
      (Ge = fe == null ? void 0 : fe.options) != null && Ge[F] && O.value.set(ce, {
        action: "select",
        selected_model: fe.options[F].model
      });
    }
    function Oe(ce, F, fe) {
      O.value.set(ce, {
        action: "download",
        url: F,
        target_path: fe
      });
    }
    function Me(ce) {
      O.value.delete(ce);
    }
    async function je(ce) {
      try {
        await p(ce);
      } catch (F) {
        R.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function nt() {
      var ce;
      S.value = !0, R.value = null, v(), d.phase = "resolving", T.value = "applying";
      try {
        const F = await r(o.workflowName, N.value, O.value, J.value);
        F.models_to_download && F.models_to_download.length > 0 && u(o.workflowName, F.models_to_download);
        const fe = ie.value.map((lt) => {
          const xt = Ne(lt.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const ts = xt.repository || lt.package.repository, Ss = xt.package_id || lt.package.package_id;
          return !ts || !Ss ? null : {
            id: Ss,
            repository: ts,
            selectedVersion: xt.version || lt.package.latest_version || "latest"
          };
        }).filter((lt) => !!lt), Ge = new Set(fe.map((lt) => lt.id)), ut = [
          ...F.nodes_to_install || [],
          ...G.value.map((lt) => lt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ut)].filter((lt) => !Ge.has(lt)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const lt of fe)
          await w({
            id: lt.id,
            version: lt.selectedVersion,
            selected_version: lt.selectedVersion,
            repository: lt.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await m();
        const Ct = d.installError || ((ce = d.nodeInstallProgress) == null ? void 0 : ce.completedNodes.some((lt) => !lt.success));
        !d.needsRestart && !Ct && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (F) {
        R.value = F instanceof Error ? F.message : "Failed to apply resolution", d.error = R.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function bt() {
      n("refresh"), n("restart"), n("close");
    }
    async function Et() {
      var F;
      const ce = ((F = d.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((fe) => !fe.success).map((fe) => fe.node_id)) || [];
      if (ce.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ce.length
        }, d.nodesToInstall = ce, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (fe) {
          d.error = fe instanceof Error ? fe.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return ct(Be), (ce, F) => (a(), P(It, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: R.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (fe) => n("close"))
    }, {
      body: g(() => [
        C.value && !_.value ? (a(), i("div", Fy, [...F[2] || (F[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", By, [
          k(zp, {
            steps: M.value,
            "current-step": T.value,
            "completed-steps": E.value,
            "step-stats": _e.value,
            onStepChange: ke
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          T.value === "analysis" ? (a(), i("div", Wy, [
            s("div", Gy, [
              s("div", jy, [
                F[3] || (F[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", Hy, " Found " + f(_.value.stats.total_nodes) + " nodes and " + f(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", qy, [
                s("div", Ky, [
                  F[16] || (F[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", Jy, [
                    ge.value > 0 ? (a(), i("div", Qy, [
                      F[4] || (F[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", Yy, f(ge.value), 1),
                      F[5] || (F[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", Xy, [
                      F[6] || (F[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", Zy, f(_.value.stats.packages_needing_installation), 1),
                      F[7] || (F[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", e1, [
                      F[8] || (F[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", t1, f(_.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    Y.value.length > 0 ? (a(), i("div", s1, [
                      F[10] || (F[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", o1, f(Y.value.length), 1),
                      F[11] || (F[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    Z.value.length > 0 ? (a(), i("div", n1, [
                      F[12] || (F[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", a1, f(Z.value.length), 1),
                      F[13] || (F[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", l1, [
                      F[14] || (F[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", i1, f(_.value.nodes.unresolved.length), 1),
                      F[15] || (F[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                s("div", r1, [
                  F[27] || (F[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", c1, [
                    s("div", u1, [
                      F[17] || (F[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", d1, f(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      F[18] || (F[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", f1, [
                      F[19] || (F[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", m1, f(_.value.stats.download_intents), 1),
                      F[20] || (F[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    me.value ? (a(), i("div", v1, [
                      F[21] || (F[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", p1, f(A.value.length), 1),
                      F[22] || (F[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", g1, [
                      F[23] || (F[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", h1, f(_.value.models.ambiguous.length), 1),
                      F[24] || (F[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", y1, [
                      F[25] || (F[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", w1, f(_.value.models.unresolved.length), 1),
                      F[26] || (F[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              V.value ? (a(), i("div", _1, [
                F[28] || (F[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", k1, f(H.value.length + X.value.length) + " items need your input", 1)
              ])) : ye.value ? (a(), i("div", b1, [
                F[29] || (F[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", $1, f(Y.value.length) + " node type" + f(Y.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : Z.value.length > 0 ? (a(), i("div", C1, [
                F[30] || (F[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", x1, f(Z.value.length) + " community-mapped node type" + f(Z.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Ue.value ? (a(), i("div", S1, [
                F[31] || (F[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", I1, f(_.value.stats.packages_needing_installation) + " package" + f(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(_.value.stats.nodes_needing_installation) + " node type" + f(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(ae.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : ae.value ? (a(), i("div", E1, [
                F[32] || (F[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", T1, f(_.value.stats.download_intents) + " model" + f(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : me.value ? (a(), i("div", M1, [
                F[33] || (F[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", P1, f(A.value.length) + " model" + f(A.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", R1, [...F[34] || (F[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              me.value ? (a(), i("div", N1, [
                F[37] || (F[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", L1, [
                  (a(!0), i(j, null, we(A.value, (fe) => {
                    var Ge, ut;
                    return a(), i("div", {
                      key: fe.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", D1, f(fe.actual_category) + "/" + f((Ge = fe.model) == null ? void 0 : Ge.filename), 1),
                      F[36] || (F[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", O1, f((ut = fe.expected_categories) == null ? void 0 : ut[0]) + "/", 1),
                      fe.file_path ? (a(), P(Le, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ct) => je(fe.file_path)
                      }, {
                        default: g(() => [...F[35] || (F[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              ye.value ? (a(), i("div", A1, [
                F[38] || (F[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", U1, [
                  (a(!0), i(j, null, we(Y.value, (fe) => {
                    var Ge;
                    return a(), i("div", {
                      key: `vg-${fe.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", z1, f(fe.reference.node_type), 1),
                      s("span", V1, f(fe.guidance || ((Ge = _.value.node_guidance) == null ? void 0 : Ge[fe.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          T.value === "nodes" ? (a(), i("div", F1, [
            k(gh, {
              nodes: H.value,
              "node-choices": N.value,
              "auto-resolved-packages": Ee.value,
              "skipped-packages": J.value,
              "installed-node-packs": x.value,
              onMarkOptional: Q,
              onSkip: qe,
              onOptionSelected: be,
              onManualEntry: Xe,
              onClearChoice: Ve,
              onPackageSkip: L
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ie.value.length > 0 ? (a(), i("div", B1, [
              s("div", W1, [
                s("h4", G1, "Community-Mapped Packages (" + f(ie.value.length) + ")", 1),
                F[39] || (F[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", j1, [
                (a(!0), i(j, null, we(ie.value, (fe) => (a(), i("div", {
                  key: `community-${fe.reference.node_type}-${fe.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", H1, [
                    s("div", q1, [
                      s("code", K1, f(fe.reference.node_type), 1),
                      s("span", J1, f(fe.package.title || fe.package.package_id), 1)
                    ]),
                    s("div", Q1, f(fe.package.package_id), 1),
                    s("div", Y1, [
                      F[40] || (F[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      fe.guidance ? (a(), i("span", X1, f(fe.guidance), 1)) : h("", !0)
                    ]),
                    s("div", Z1, f(W(fe.reference.node_type)), 1)
                  ]),
                  s("div", e0, [
                    k(Le, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !fe.package.package_id,
                      onClick: (Ge) => de(fe, "registry")
                    }, {
                      default: g(() => [...F[41] || (F[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    fe.package.repository ? (a(), P(Le, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !fe.package.package_id,
                      onClick: (Ge) => de(fe, "git")
                    }, {
                      default: g(() => [...F[42] || (F[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    k(Le, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ge) => pe(fe.reference.node_type)
                    }, {
                      default: g(() => [...F[43] || (F[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Le, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ge) => Qe(fe.reference.node_type)
                    }, {
                      default: g(() => [...F[44] || (F[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          T.value === "models" ? (a(), P(cy, {
            key: 2,
            models: xe.value,
            "model-choices": O.value,
            onMarkOptional: U,
            onSkip: te,
            onOptionSelected: De,
            onDownloadUrl: Oe,
            onClearChoice: Me
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          T.value === "review" ? (a(), i("div", t0, [
            s("div", s0, [
              F[50] || (F[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", o0, [
                s("div", n0, [
                  s("span", a0, f(I.value), 1),
                  F[45] || (F[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", l0, [
                  s("span", i0, f(z.value), 1),
                  F[46] || (F[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", r0, [
                  s("span", c0, f(re.value), 1),
                  F[47] || (F[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", u0, [
                  s("span", d0, f(Ce.value), 1),
                  F[48] || (F[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Ee.value.length > 0 ? (a(), i("div", f0, [
                s("h4", m0, "Node Packages (" + f(Ee.value.length) + ")", 1),
                s("div", v0, [
                  (a(!0), i(j, null, we(Ee.value, (fe) => (a(), i("div", {
                    key: fe.package_id,
                    class: "review-item"
                  }, [
                    s("code", p0, f(fe.package_id), 1),
                    s("div", g0, [
                      J.value.has(fe.package_id) ? (a(), i("span", y0, "Skipped")) : (a(), i("span", h0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              ie.value.length > 0 ? (a(), i("div", w0, [
                s("h4", _0, "Community-Mapped Packages (" + f(ie.value.length) + ")", 1),
                s("div", k0, [
                  (a(!0), i(j, null, we(ie.value, (fe) => {
                    var Ge, ut, Ct;
                    return a(), i("div", {
                      key: `review-community-${fe.reference.node_type}-${fe.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", b0, f(fe.reference.node_type), 1),
                      s("div", $0, [
                        ((Ge = Ne(fe.reference.node_type)) == null ? void 0 : Ge.action) === "install" ? (a(), i("span", C0, f(((ut = Ne(fe.reference.node_type)) == null ? void 0 : ut.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Ct = Ne(fe.reference.node_type)) == null ? void 0 : Ct.action) === "optional" ? (a(), i("span", x0, " Optional ")) : (a(), i("span", S0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              H.value.length > 0 ? (a(), i("div", I0, [
                s("h4", E0, "Node Choices (" + f(H.value.length) + ")", 1),
                s("div", T0, [
                  (a(!0), i(j, null, we(H.value, (fe) => {
                    var Ge, ut, Ct, lt;
                    return a(), i("div", {
                      key: fe.node_type,
                      class: "review-item"
                    }, [
                      s("code", M0, f(fe.node_type), 1),
                      s("div", P0, [
                        N.value.has(fe.node_type) ? (a(), i(j, { key: 0 }, [
                          ((Ge = N.value.get(fe.node_type)) == null ? void 0 : Ge.action) === "install" ? (a(), i("span", R0, f((ut = N.value.get(fe.node_type)) == null ? void 0 : ut.package_id), 1)) : ((Ct = N.value.get(fe.node_type)) == null ? void 0 : Ct.action) === "optional" ? (a(), i("span", N0, " Optional ")) : ((lt = N.value.get(fe.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), i("span", L0, " Skip ")) : h("", !0)
                        ], 64)) : (a(), i("span", D0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              ue.value.length > 0 ? (a(), i("div", O0, [
                s("h4", A0, "Models to Download (" + f(ue.value.length) + ")", 1),
                s("div", U0, [
                  (a(!0), i(j, null, we(ue.value, (fe) => (a(), i("div", {
                    key: fe.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", z0, [
                      s("code", V0, f(fe.filename), 1),
                      s("div", F0, [
                        s("span", B0, "→ " + f(fe.target_path), 1),
                        fe.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: fe.url
                        }, f(le(fe.url)), 9, W0)) : h("", !0)
                      ])
                    ]),
                    F[49] || (F[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              xe.value.length > 0 ? (a(), i("div", G0, [
                s("h4", j0, "Models (" + f(xe.value.length) + ")", 1),
                s("div", H0, [
                  (a(!0), i(j, null, we(xe.value, (fe) => {
                    var Ge, ut, Ct, lt, xt, ts, Ss;
                    return a(), i("div", {
                      key: fe.filename,
                      class: "review-item"
                    }, [
                      s("code", q0, f(fe.filename), 1),
                      s("div", K0, [
                        O.value.has(fe.filename) ? (a(), i(j, { key: 0 }, [
                          ((Ge = O.value.get(fe.filename)) == null ? void 0 : Ge.action) === "select" ? (a(), i("span", J0, f((Ct = (ut = O.value.get(fe.filename)) == null ? void 0 : ut.selected_model) == null ? void 0 : Ct.filename), 1)) : ((lt = O.value.get(fe.filename)) == null ? void 0 : lt.action) === "download" ? (a(), i("span", Q0, " Download ")) : ((xt = O.value.get(fe.filename)) == null ? void 0 : xt.action) === "optional" ? (a(), i("span", Y0, " Optional ")) : ((ts = O.value.get(fe.filename)) == null ? void 0 : ts.action) === "skip" ? (a(), i("span", X0, " Skip ")) : ((Ss = O.value.get(fe.filename)) == null ? void 0 : Ss.action) === "cancel_download" ? (a(), i("span", Z0, " Cancel Download ")) : h("", !0)
                        ], 64)) : fe.is_download_intent ? (a(), i("span", ew, " Pending Download ")) : (a(), i("span", tw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              He.value.length === 0 && ie.value.length === 0 && H.value.length === 0 && xe.value.length === 0 ? (a(), i("div", sw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          T.value === "applying" ? (a(), P(Vy, {
            key: 4,
            progress: st(d),
            onRestart: bt,
            onRetryFailed: Et
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        T.value !== "analysis" && T.value !== "applying" ? (a(), P(Le, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Ae
        }, {
          default: g(() => [...F[51] || (F[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        F[54] || (F[54] = s("div", { class: "footer-spacer" }, null, -1)),
        T.value !== "applying" || st(d).phase === "complete" || st(d).phase === "error" ? (a(), P(Le, {
          key: 1,
          variant: "secondary",
          onClick: F[0] || (F[0] = (fe) => n("close"))
        }, {
          default: g(() => [
            $(f(st(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        T.value === "analysis" ? (a(), P(Le, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ve
        }, {
          default: g(() => [
            $(f(Pe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        T.value === "nodes" ? (a(), P(Le, {
          key: 3,
          variant: "primary",
          onClick: ze
        }, {
          default: g(() => [
            $(f(q.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        T.value === "models" ? (a(), P(Le, {
          key: 4,
          variant: "primary",
          onClick: ze
        }, {
          default: g(() => [...F[52] || (F[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        T.value === "review" ? (a(), P(Le, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: g(() => [...F[53] || (F[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), nw = /* @__PURE__ */ Se(ow, [["__scopeId", "data-v-49848358"]]), aw = { class: "search-input-wrapper" }, lw = ["value", "placeholder"], iw = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = b(null);
    let r;
    function c(d) {
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        n("update:modelValue", v);
      }, o.debounce)) : n("update:modelValue", v);
    }
    function u() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return ct(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (a(), i("div", aw, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: fs(u, ["escape"])
      }, null, 40, lw),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), rw = /* @__PURE__ */ Se(iw, [["__scopeId", "data-v-266f857a"]]), cw = { class: "search-bar" }, uw = /* @__PURE__ */ $e({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", cw, [
      k(rw, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), io = /* @__PURE__ */ Se(uw, [["__scopeId", "data-v-3d51bbfd"]]), dw = { class: "section-group" }, fw = {
  key: 0,
  class: "section-content"
}, mw = /* @__PURE__ */ $e({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, u) => (a(), i("section", dw, [
      k(ns, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          $(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), i("div", fw, [
        ot(c.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), St = /* @__PURE__ */ Se(mw, [["__scopeId", "data-v-c48e33ed"]]), vw = { class: "item-header" }, pw = {
  key: 0,
  class: "item-icon"
}, gw = { class: "item-info" }, hw = {
  key: 0,
  class: "item-title"
}, yw = {
  key: 1,
  class: "item-subtitle"
}, ww = {
  key: 0,
  class: "item-details"
}, _w = {
  key: 1,
  class: "item-actions"
}, kw = /* @__PURE__ */ $e({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = D(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (a(), i("div", {
      class: Fe(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", vw, [
        l.$slots.icon ? (a(), i("span", pw, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        s("div", gw, [
          l.$slots.title ? (a(), i("div", hw, [
            ot(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (a(), i("div", yw, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", ww, [
        ot(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (a(), i("div", _w, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Se(kw, [["__scopeId", "data-v-cc435e0e"]]), bw = { class: "loading-state" }, $w = { class: "loading-message" }, Cw = /* @__PURE__ */ $e({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", bw, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", $w, f(e.message), 1)
    ]));
  }
}), Cs = /* @__PURE__ */ Se(Cw, [["__scopeId", "data-v-ad8436c9"]]), xw = { class: "error-state" }, Sw = { class: "error-message" }, Iw = /* @__PURE__ */ $e({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), i("div", xw, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", Sw, f(e.message), 1),
      e.retry ? (a(), P(Te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), xs = /* @__PURE__ */ Se(Iw, [["__scopeId", "data-v-5397be48"]]), Ew = /* @__PURE__ */ $e({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = gt(), r = b([]), c = b(!1), u = b(null), d = b(""), v = b(!0), m = b(!1), p = b(!1), w = b(!1), y = b(null), _ = D(
      () => r.value.filter((A) => A.status === "broken")
    ), x = D(
      () => r.value.filter((A) => A.status === "new")
    ), C = D(
      () => r.value.filter((A) => A.status === "modified")
    ), S = D(
      () => r.value.filter((A) => A.status === "synced")
    ), R = D(() => {
      if (!d.value.trim()) return r.value;
      const A = d.value.toLowerCase();
      return r.value.filter((me) => me.name.toLowerCase().includes(A));
    }), T = D(
      () => _.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = D(
      () => x.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = D(
      () => C.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = D(
      () => S.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), J = D(
      () => m.value ? O.value : O.value.slice(0, 5)
    );
    async function M(A = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(A);
      } catch (me) {
        u.value = me instanceof Error ? me.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: M });
    function V(A) {
      y.value = A, p.value = !0;
    }
    function Y(A) {
      y.value = A, w.value = !0;
    }
    function Z(A) {
      y.value = A, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: A }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function ie(A) {
      var He;
      const Pe = (He = A.detail) == null ? void 0 : He.workflowName;
      Pe && Z(Pe);
    }
    function ye() {
      n("refresh");
    }
    async function se() {
      w.value = !1, await M(!0);
    }
    async function q() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ae(A) {
      return A.replace(/uninstallable node mappings?/gi, (me) => me.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Ue(A) {
      if (A.issue_summary && A.issue_summary.trim().length > 0)
        return ae(A.issue_summary);
      const me = [];
      return A.version_gated_count && A.version_gated_count > 0 && me.push(`${A.version_gated_count} node${A.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), A.uninstallable_count && A.uninstallable_count > 0 && me.push(`${A.uninstallable_count} node${A.uninstallable_count > 1 ? "s" : ""} need community packages`), A.missing_nodes > 0 && me.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && me.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && me.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && me.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), me.length > 0 ? me.join(", ") : "Has issues";
    }
    function oe(A) {
      const me = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state, Pe = ge(A);
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync · ${Pe}` : `${me || "Unknown"} · ${Pe}`;
    }
    function ge(A) {
      const me = A.contract_summary;
      return !me || !me.has_contract ? "No contract" : me.status === "incomplete" ? `${me.input_count} in / ${me.output_count} out · incomplete` : `${me.input_count} in / ${me.output_count} out`;
    }
    return ct(() => {
      M(), window.addEventListener("comfygit:open-workflow-contract", ie);
    }), sa(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ie);
    }), (A, me) => (a(), i(j, null, [
      k(At, null, {
        header: g(() => [
          k(Ut, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          k(io, {
            modelValue: d.value,
            "onUpdate:modelValue": me[0] || (me[0] = (Pe) => d.value = Pe),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (a(), P(Cs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), P(xs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            T.value.length ? (a(), P(St, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(T.value, (Pe) => (a(), P(Vt, {
                  key: Pe.name,
                  status: "broken"
                }, {
                  icon: g(() => [...me[7] || (me[7] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(f(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(Ue(Pe)), 1)
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (He) => Y(Pe.name)
                    }, {
                      default: g(() => [...me[8] || (me[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (He) => Z(Pe.name)
                    }, {
                      default: g(() => [...me[9] || (me[9] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (He) => V(Pe.name)
                    }, {
                      default: g(() => [...me[10] || (me[10] = [
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
            E.value.length ? (a(), P(St, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(E.value, (Pe) => (a(), P(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    $(f(Pe.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    $(f(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(oe(Pe)), 1)
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (He) => Z(Pe.name)
                    }, {
                      default: g(() => [...me[11] || (me[11] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (He) => V(Pe.name)
                    }, {
                      default: g(() => [...me[12] || (me[12] = [
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
            N.value.length ? (a(), P(St, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(N.value, (Pe) => (a(), P(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...me[13] || (me[13] = [
                    $("⚡", -1)
                  ])]),
                  title: g(() => [
                    $(f(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(oe(Pe)), 1)
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (He) => Z(Pe.name)
                    }, {
                      default: g(() => [...me[14] || (me[14] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (He) => V(Pe.name)
                    }, {
                      default: g(() => [...me[15] || (me[15] = [
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
            O.value.length ? (a(), P(St, {
              key: 3,
              title: "SYNCED",
              count: O.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: me[2] || (me[2] = (Pe) => v.value = Pe)
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(J.value, (Pe) => (a(), P(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    $(f(Pe.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    $(f(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(oe(Pe)), 1)
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (He) => Z(Pe.name)
                    }, {
                      default: g(() => [...me[16] || (me[16] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (He) => V(Pe.name)
                    }, {
                      default: g(() => [...me[17] || (me[17] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !m.value && O.value.length > 5 ? (a(), P(Te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: me[1] || (me[1] = (Pe) => m.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    $(" View all " + f(O.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            R.value.length ? h("", !0) : (a(), P(rs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && y.value ? (a(), P(Ip, {
        key: 0,
        "workflow-name": y.value,
        onClose: me[3] || (me[3] = (Pe) => p.value = !1),
        onResolve: me[4] || (me[4] = (Pe) => Y(y.value)),
        onRefresh: me[5] || (me[5] = (Pe) => n("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      w.value && y.value ? (a(), P(nw, {
        key: 1,
        "workflow-name": y.value,
        onClose: se,
        onInstall: ye,
        onRefresh: me[6] || (me[6] = (Pe) => n("refresh")),
        onRestart: q
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), Tw = /* @__PURE__ */ Se(Ew, [["__scopeId", "data-v-28ee54dd"]]), Mw = /* @__PURE__ */ $e({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Fe(["summary-bar", e.variant])
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), la = /* @__PURE__ */ Se(Mw, [["__scopeId", "data-v-ccb7816e"]]), Pw = {
  key: 0,
  class: "model-details"
}, Rw = { class: "detail-section" }, Nw = { class: "detail-row" }, Lw = { class: "detail-value mono" }, Dw = { class: "detail-row" }, Ow = { class: "detail-value mono" }, Aw = { class: "detail-row" }, Uw = { class: "detail-value mono" }, zw = { class: "detail-row" }, Vw = { class: "detail-value" }, Fw = { class: "detail-row" }, Bw = { class: "detail-value" }, Ww = { class: "detail-row" }, Gw = { class: "detail-value" }, jw = { class: "detail-section" }, Hw = { class: "section-header" }, qw = {
  key: 0,
  class: "locations-list"
}, Kw = { class: "location-path mono" }, Jw = {
  key: 0,
  class: "location-modified"
}, Qw = ["onClick"], Yw = {
  key: 1,
  class: "empty-state"
}, Xw = { class: "detail-section" }, Zw = { class: "section-header" }, e_ = {
  key: 0,
  class: "sources-list"
}, t_ = { class: "source-type" }, s_ = ["href"], o_ = ["disabled", "onClick"], n_ = {
  key: 1,
  class: "empty-state"
}, a_ = { class: "add-source-form" }, l_ = ["disabled"], i_ = {
  key: 2,
  class: "source-error"
}, r_ = {
  key: 3,
  class: "source-success"
}, c_ = /* @__PURE__ */ $e({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: r, openFileLocation: c } = gt(), u = b(null), d = b(!0), v = b(null), m = b(""), p = b(!1), w = b(null), y = b(null), _ = b(null), x = b(null);
    let C = null;
    function S(M, V = "success", Y = 2e3) {
      C && clearTimeout(C), x.value = { message: M, type: V }, C = setTimeout(() => {
        x.value = null;
      }, Y);
    }
    function R(M) {
      if (!M) return "Unknown";
      const V = 1024 * 1024 * 1024, Y = 1024 * 1024;
      return M >= V ? `${(M / V).toFixed(1)} GB` : M >= Y ? `${(M / Y).toFixed(0)} MB` : `${(M / 1024).toFixed(0)} KB`;
    }
    function T(M) {
      navigator.clipboard.writeText(M), S("Copied to clipboard!");
    }
    async function E(M) {
      try {
        await c(M), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function N() {
      if (!(!m.value.trim() || !u.value)) {
        p.value = !0, y.value = null, _.value = null;
        try {
          await l(u.value.hash, m.value.trim()), _.value = "Source added successfully!", m.value = "", await J();
        } catch (M) {
          y.value = M instanceof Error ? M.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function O(M) {
      if (u.value) {
        w.value = M, y.value = null, _.value = null;
        try {
          await r(u.value.hash, M), S("Source removed"), await J();
        } catch (V) {
          y.value = V instanceof Error ? V.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function J() {
      d.value = !0, v.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return ct(J), (M, V) => {
      var Y;
      return a(), i(j, null, [
        k(It, {
          title: `Model Details: ${((Y = u.value) == null ? void 0 : Y.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: V[5] || (V[5] = (Z) => M.$emit("close"))
        }, {
          body: g(() => {
            var Z, ie, ye, se;
            return [
              u.value ? (a(), i("div", Pw, [
                s("section", Rw, [
                  s("div", Nw, [
                    V[6] || (V[6] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Lw, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[0] || (V[0] = (q) => T(u.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Dw, [
                    V[7] || (V[7] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Ow, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[1] || (V[1] = (q) => T(u.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Aw, [
                    V[8] || (V[8] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Uw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[2] || (V[2] = (q) => T(u.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", zw, [
                    V[9] || (V[9] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", Vw, f(R(u.value.size)), 1)
                  ]),
                  s("div", Fw, [
                    V[10] || (V[10] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Bw, f(u.value.category), 1)
                  ]),
                  s("div", Ww, [
                    V[11] || (V[11] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", Gw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", jw, [
                  s("h4", Hw, "Locations (" + f(((Z = u.value.locations) == null ? void 0 : Z.length) || 0) + ")", 1),
                  (ie = u.value.locations) != null && ie.length ? (a(), i("div", qw, [
                    (a(!0), i(j, null, we(u.value.locations, (q, ae) => (a(), i("div", {
                      key: ae,
                      class: "location-item"
                    }, [
                      s("span", Kw, f(q.path), 1),
                      q.modified ? (a(), i("span", Jw, "Modified: " + f(q.modified), 1)) : h("", !0),
                      q.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Ue) => E(q.path)
                      }, " Open File Location ", 8, Qw)) : h("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", Yw, "No locations found"))
                ]),
                s("section", Xw, [
                  s("h4", Zw, "Download Sources (" + f(((ye = u.value.sources) == null ? void 0 : ye.length) || 0) + ")", 1),
                  (se = u.value.sources) != null && se.length ? (a(), i("div", e_, [
                    (a(!0), i(j, null, we(u.value.sources, (q, ae) => (a(), i("div", {
                      key: ae,
                      class: "source-item"
                    }, [
                      s("span", t_, f(q.type) + ":", 1),
                      s("a", {
                        href: q.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(q.url), 9, s_),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: w.value === q.url,
                        onClick: (Ue) => O(q.url)
                      }, f(w.value === q.url ? "..." : "×"), 9, o_)
                    ]))), 128))
                  ])) : (a(), i("div", n_, " No download sources configured ")),
                  s("div", a_, [
                    Tt(s("input", {
                      "onUpdate:modelValue": V[3] || (V[3] = (q) => m.value = q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [$o, m.value]
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      disabled: !m.value.trim() || p.value,
                      onClick: N
                    }, f(p.value ? "Adding..." : "Add Source"), 9, l_)
                  ]),
                  y.value ? (a(), i("p", i_, f(y.value), 1)) : h("", !0),
                  _.value ? (a(), i("p", r_, f(_.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            s("button", {
              class: "btn-secondary",
              onClick: V[4] || (V[4] = (Z) => M.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), P(Ot, { to: "body" }, [
          x.value ? (a(), i("div", {
            key: 0,
            class: Fe(["toast", x.value.type])
          }, f(x.value.message), 3)) : h("", !0)
        ]))
      ], 64);
    };
  }
}), Cl = /* @__PURE__ */ Se(c_, [["__scopeId", "data-v-f15cbb56"]]), u_ = ["disabled"], d_ = { class: "dropdown-value" }, f_ = ["onClick"], m_ = {
  key: 0,
  class: "dropdown-error"
}, v_ = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = b(!1), r = b(null), c = b(null), u = b({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const m = D(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((R) => d(R) === o.modelValue);
      return S ? v(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function y(S) {
      n("update:modelValue", d(S)), w();
    }
    function _() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), R = window.innerHeight, T = R - S.bottom, E = S.top, N = Math.min(300, o.options.length * 36 + 8), O = T < N && E > T;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...O ? { bottom: `${R - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
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
    return ct(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Po(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, R) => (a(), i("div", {
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
        s("span", d_, f(m.value), 1),
        R[0] || (R[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, u_),
      (a(), P(Ot, { to: "body" }, [
        l.value ? (a(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : h("", !0),
        l.value ? (a(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Wt(u.value)
        }, [
          (a(!0), i(j, null, we(e.options, (T) => (a(), i("div", {
            key: d(T),
            class: Fe(["dropdown-option", { selected: d(T) === e.modelValue }]),
            onClick: (E) => y(T)
          }, f(v(T)), 11, f_))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (a(), i("span", m_, f(e.error), 1)) : h("", !0)
    ], 512));
  }
}), p_ = /* @__PURE__ */ Se(v_, [["__scopeId", "data-v-857e085b"]]);
function g_(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function h_(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!g_(o.hostname)) return { kind: "unknown" };
  const n = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (n[0] === "datasets" || n[0] === "spaces") return { kind: "unknown" };
  if (n.length < 2) return { kind: "unknown" };
  const l = `${n[0]}/${n[1]}`, r = n.slice(2);
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
function y_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function w_(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${y_(o)}`;
}
const __ = { class: "hf-file-browser" }, k_ = { class: "browser-header" }, b_ = { class: "repo-info" }, $_ = { class: "repo-id" }, C_ = {
  key: 0,
  class: "revision-pill"
}, x_ = {
  key: 0,
  class: "loading-state"
}, S_ = {
  key: 1,
  class: "error-state"
}, I_ = { class: "toolbar" }, E_ = { class: "toolbar-actions" }, T_ = { class: "file-list-container" }, M_ = {
  key: 0,
  class: "file-list-header"
}, P_ = ["checked", "indeterminate"], R_ = { class: "sort-indicator" }, N_ = { class: "sort-indicator" }, L_ = {
  key: 1,
  class: "empty-state"
}, D_ = {
  key: 2,
  class: "file-list"
}, O_ = ["onClick"], A_ = ["checked", "onChange"], U_ = { class: "file-path" }, z_ = { class: "file-size" }, V_ = { class: "destination-section" }, F_ = { class: "destination-row" }, B_ = {
  key: 0,
  class: "path-separator"
}, W_ = { class: "action-bar" }, G_ = { class: "summary-info" }, j_ = { class: "summary-count" }, H_ = { class: "summary-size" }, q_ = /* @__PURE__ */ $e({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = gt(), c = b([]), u = b(/* @__PURE__ */ new Set()), d = b(!1), v = b(null), m = b(""), p = b(!1), w = b("name"), y = b(!0), _ = b(""), x = b(""), C = b(""), S = b([]), R = b(!1);
    let T = !1;
    const E = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, N = D(() => {
      let G = c.value;
      if (o.initialPath) {
        const ee = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        G = G.filter((H) => H.path.startsWith(ee) || H.path === o.initialPath);
      }
      if (p.value && (G = G.filter((ee) => ee.is_model_file)), m.value.trim()) {
        const ee = m.value.toLowerCase();
        G = G.filter((H) => H.path.toLowerCase().includes(ee));
      }
      return G;
    }), O = D(() => {
      const G = [...N.value];
      return G.sort((ee, H) => {
        let X;
        return w.value === "name" ? X = ee.path.localeCompare(H.path) : X = ee.size - H.size, y.value ? X : -X;
      }), G;
    }), J = D(() => N.value.length === 0 ? !1 : N.value.every((G) => u.value.has(G.path))), M = D(() => N.value.some((G) => u.value.has(G.path))), V = D(() => {
      const G = S.value.map((ee) => ({
        label: ee,
        value: ee
      }));
      return G.push({ label: "Custom path...", value: "__custom__" }), G;
    }), Y = D(() => _.value === "__custom__" ? C.value.trim().length > 0 : _.value.length > 0), Z = D(() => {
      let G = 0;
      for (const ee of u.value) {
        const H = c.value.find((X) => X.path === ee);
        H && (G += H.size);
      }
      return G;
    });
    function ie(G) {
      if (G === 0) return "0 B";
      const ee = 1024 * 1024 * 1024, H = 1024 * 1024, X = 1024;
      return G >= ee ? `${(G / ee).toFixed(2)} GB` : G >= H ? `${(G / H).toFixed(1)} MB` : G >= X ? `${(G / X).toFixed(0)} KB` : `${G} B`;
    }
    function ye(G) {
      const ee = G.match(E);
      return ee ? `${ee[1]}${ee[4]}` : null;
    }
    function se(G) {
      const ee = new Set(u.value), H = ee.has(G.path), X = G.shard_group || ye(G.path);
      if (X) {
        const xe = c.value.filter((ue) => (ue.shard_group || ye(ue.path)) === X);
        H ? xe.forEach((ue) => ee.delete(ue.path)) : xe.forEach((ue) => ee.add(ue.path));
      } else
        H ? ee.delete(G.path) : ee.add(G.path);
      u.value = ee;
    }
    function q() {
      const G = new Set(u.value);
      for (const ee of N.value)
        ee.is_model_file && G.add(ee.path);
      u.value = G;
    }
    function ae() {
      u.value = /* @__PURE__ */ new Set();
    }
    function Ue() {
      if (J.value) {
        const G = new Set(u.value);
        for (const ee of N.value)
          G.delete(ee.path);
        u.value = G;
      } else {
        const G = new Set(u.value);
        for (const ee of N.value)
          G.add(ee.path);
        u.value = G;
      }
    }
    function oe(G) {
      w.value === G ? y.value = !y.value : (w.value = G, y.value = !0);
    }
    function ge(G) {
      const ee = G.split("/");
      return ee.length >= 2 ? ee[ee.length - 2] : null;
    }
    function A() {
      if (R.value || u.value.size === 0) return;
      const G = /* @__PURE__ */ new Set();
      for (const X of u.value) {
        const xe = ge(X);
        xe && G.add(xe.toLowerCase());
      }
      if (G.size !== 1) return;
      const ee = [...G][0], H = S.value.find(
        (X) => X.toLowerCase() === ee
      );
      H && H !== _.value && (T = !0, _.value = H, Pt(() => {
        T = !1;
      }));
    }
    function me() {
      return _.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${_.value}/${x.value.trim()}` : _.value;
    }
    function Pe() {
      if (u.value.size === 0 || !Y.value) return;
      const G = me(), ee = [];
      for (const H of u.value) {
        const X = c.value.find((xe) => xe.path === H);
        X && ee.push({
          url: w_(o.repoId, o.revision, X.path),
          destination: G,
          filename: X.path.split("/").pop() || X.path
        });
      }
      n("queue", ee);
    }
    async function He() {
      if (o.repoId) {
        d.value = !0, v.value = null;
        try {
          const G = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ee = await l(G);
          if (c.value = ee.files, o.preselectedFile) {
            const H = c.value.find((X) => X.path === o.preselectedFile);
            H && se(H);
          }
        } catch (G) {
          v.value = G instanceof Error ? G.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ee() {
      try {
        const G = await r();
        S.value = G.directories, G.directories.length > 0 && !_.value && (_.value = G.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && He();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      R.value = !1;
    }), kt(u, () => {
      A();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && u.value.size > 0 && A();
    }), kt(_, (G, ee) => {
      T || ee === "" || (R.value = !0);
    }), ct(() => {
      He(), Ee();
    }), (G, ee) => (a(), i("div", __, [
      s("div", k_, [
        s("button", {
          class: "back-btn",
          onClick: ee[0] || (ee[0] = (H) => G.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", b_, [
          s("span", $_, f(e.repoId), 1),
          e.revision ? (a(), i("span", C_, f(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (a(), i("div", x_, " Loading repository files... ")) : v.value ? (a(), i("div", S_, f(v.value), 1)) : (a(), i(j, { key: 2 }, [
        s("div", I_, [
          k(wt, {
            modelValue: m.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (H) => m.value = H),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", E_, [
            s("button", {
              class: Fe(["toggle-btn", { active: p.value }]),
              onClick: ee[2] || (ee[2] = (H) => p.value = !p.value)
            }, f(p.value ? "Models Only" : "All Files"), 3),
            s("button", {
              class: "action-btn",
              onClick: q
            }, "Auto-Select Models"),
            s("button", {
              class: "action-btn",
              onClick: ae
            }, "Clear")
          ])
        ]),
        s("div", T_, [
          N.value.length > 0 ? (a(), i("div", M_, [
            s("input", {
              type: "checkbox",
              checked: J.value,
              indeterminate: M.value && !J.value,
              class: "file-checkbox",
              onChange: Ue
            }, null, 40, P_),
            s("span", {
              class: "header-name",
              onClick: ee[3] || (ee[3] = (H) => oe("name"))
            }, [
              ee[9] || (ee[9] = $(" Name ", -1)),
              s("span", R_, f(w.value === "name" ? y.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: ee[4] || (ee[4] = (H) => oe("size"))
            }, [
              ee[10] || (ee[10] = $(" Size ", -1)),
              s("span", N_, f(w.value === "size" ? y.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          N.value.length === 0 ? (a(), i("div", L_, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", D_, [
            (a(!0), i(j, null, we(O.value, (H) => (a(), i("div", {
              key: H.path,
              class: Fe(["file-item", { selected: u.value.has(H.path) }]),
              onClick: (X) => se(H)
            }, [
              s("input", {
                type: "checkbox",
                checked: u.value.has(H.path),
                class: "file-checkbox",
                onClick: ee[5] || (ee[5] = vt(() => {
                }, ["stop"])),
                onChange: (X) => se(H)
              }, null, 40, A_),
              s("span", U_, f(H.path), 1),
              s("span", z_, f(ie(H.size)), 1)
            ], 10, O_))), 128))
          ]))
        ]),
        s("div", V_, [
          ee[11] || (ee[11] = s("h4", { class: "section-label" }, "Download Destination", -1)),
          s("div", F_, [
            k(p_, {
              modelValue: _.value,
              "onUpdate:modelValue": ee[6] || (ee[6] = (H) => _.value = H),
              options: V.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), i("span", B_, "/")) : h("", !0),
            _.value !== "__custom__" ? (a(), P(wt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": ee[7] || (ee[7] = (H) => x.value = H),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          _.value === "__custom__" ? (a(), P(wt, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": ee[8] || (ee[8] = (H) => C.value = H),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        s("div", W_, [
          s("div", G_, [
            s("span", j_, f(u.value.size) + " file(s) selected", 1),
            s("span", H_, f(ie(Z.value)), 1)
          ]),
          k(Le, {
            variant: "primary",
            disabled: u.value.size === 0 || !Y.value,
            onClick: Pe
          }, {
            default: g(() => [...ee[12] || (ee[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), K_ = /* @__PURE__ */ Se(q_, [["__scopeId", "data-v-183acebc"]]), J_ = { class: "token-config-modal" }, Q_ = { class: "provider-info" }, Y_ = { class: "provider-icon" }, X_ = { class: "provider-name" }, Z_ = {
  key: 0,
  class: "current-token"
}, ek = { class: "mask" }, tk = { class: "token-input-section" }, sk = { class: "input-label" }, ok = { class: "help-text" }, nk = ["href"], ak = { class: "modal-actions" }, lk = /* @__PURE__ */ $e({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = gt(), r = b(""), c = b(!1), u = b(!1), d = D(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = D(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), m = D(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = D(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = D(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function y() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", n("saved"), n("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const x = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(x), n("cleared"), n("close");
      } catch (x) {
        console.error("Failed to clear token:", x);
      } finally {
        u.value = !1;
      }
    }
    return (x, C) => (a(), P(It, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: g(() => [
        s("div", J_, [
          s("div", Q_, [
            s("span", Y_, f(v.value), 1),
            s("span", X_, f(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", Z_, [
            C[4] || (C[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", ek, f(e.currentTokenMask), 1),
            k(Le, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: g(() => [...C[3] || (C[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          s("div", tk, [
            s("label", sk, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            k(wt, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: m.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", ok, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, nk)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        s("div", ak, [
          k(Le, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Le, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
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
}), ik = /* @__PURE__ */ Se(lk, [["__scopeId", "data-v-0687d0ce"]]), rk = { class: "huggingface-tab" }, ck = {
  key: 0,
  class: "search-section"
}, uk = { class: "search-header" }, dk = { class: "search-bar" }, fk = {
  key: 1,
  class: "search-results"
}, mk = {
  key: 0,
  class: "loading-state"
}, vk = {
  key: 1,
  class: "error-state"
}, pk = {
  key: 2,
  class: "results-list"
}, gk = ["onClick"], hk = { class: "repo-header" }, yk = { class: "repo-id" }, wk = { class: "repo-stats" }, _k = {
  class: "stat",
  title: "Downloads"
}, kk = {
  class: "stat",
  title: "Likes"
}, bk = {
  key: 0,
  class: "repo-desc"
}, $k = {
  key: 1,
  class: "repo-tags"
}, Ck = {
  key: 3,
  class: "empty-state"
}, xk = {
  key: 4,
  class: "hint-state"
}, Sk = /* @__PURE__ */ $e({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = gt(), n = b("search"), l = b(""), r = b([]), c = b(!1), u = b(null), d = b(!1), v = b(null), m = b("main"), p = b(), w = b(), y = b(!1), _ = b(null), x = D(() => {
      if (!u.value) return !1;
      const J = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || J.includes("authentication") || J.includes("unauthorized");
    });
    function C(J) {
      return J >= 1e6 ? `${(J / 1e6).toFixed(1)}M` : J >= 1e3 ? `${(J / 1e3).toFixed(1)}K` : String(J);
    }
    async function S() {
      const J = l.value.trim();
      if (!J) return;
      u.value = null;
      const M = h_(J);
      if (M.kind === "file" && M.repoId && M.path) {
        v.value = M.repoId, m.value = M.revision || "main";
        const V = M.path.split("/");
        V.length > 1 ? p.value = V.slice(0, -1).join("/") : p.value = void 0, w.value = M.path, n.value = "browse";
        return;
      }
      if (M.kind === "repo" && M.repoId) {
        v.value = M.repoId, m.value = M.revision || "main", p.value = M.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(J) && !J.includes("://")) {
        v.value = J, m.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const V = await t(J);
        r.value = V.results, d.value = !0;
      } catch (V) {
        u.value = V instanceof Error ? V.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function R(J) {
      v.value = J, m.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
    }
    function T() {
      n.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function E() {
      try {
        const J = await o();
        _.value = J.huggingface_token || null;
      } catch (J) {
        console.error("Failed to load config:", J);
      }
    }
    function N() {
      E(), x.value && l.value && S();
    }
    function O() {
      _.value = null;
    }
    return ct(E), (J, M) => (a(), i("div", rk, [
      n.value === "search" ? (a(), i("div", ck, [
        s("div", uk, [
          s("div", dk, [
            k(wt, {
              modelValue: l.value,
              "onUpdate:modelValue": M[0] || (M[0] = (V) => l.value = V),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: fs(S, ["enter"])
            }, null, 8, ["modelValue"]),
            k(Le, {
              variant: "primary",
              onClick: S,
              loading: c.value
            }, {
              default: g(() => [...M[5] || (M[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          k(Le, {
            variant: "secondary",
            size: "sm",
            onClick: M[1] || (M[1] = (V) => y.value = !0)
          }, {
            default: g(() => [
              $(f(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      n.value === "search" ? (a(), i("div", fk, [
        c.value ? (a(), i("div", mk, " Searching HuggingFace... ")) : u.value ? (a(), i("div", vk, [
          s("p", null, f(u.value), 1),
          x.value ? (a(), P(Le, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: M[2] || (M[2] = (V) => y.value = !0)
          }, {
            default: g(() => [...M[6] || (M[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (a(), i("div", pk, [
          (a(!0), i(j, null, we(r.value, (V) => (a(), i("div", {
            key: V.repo_id,
            class: "repo-card",
            onClick: (Y) => R(V.repo_id)
          }, [
            s("div", hk, [
              s("span", yk, f(V.repo_id), 1),
              s("div", wk, [
                s("span", _k, [
                  M[7] || (M[7] = s("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(C(V.downloads)), 1)
                ]),
                s("span", kk, [
                  M[8] || (M[8] = s("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(C(V.likes)), 1)
                ])
              ])
            ]),
            V.description ? (a(), i("p", bk, f(V.description), 1)) : h("", !0),
            V.tags.length > 0 ? (a(), i("div", $k, [
              (a(!0), i(j, null, we(V.tags.slice(0, 5), (Y) => (a(), i("span", {
                key: Y,
                class: "tag"
              }, f(Y), 1))), 128))
            ])) : h("", !0)
          ], 8, gk))), 128))
        ])) : d.value ? (a(), i("div", Ck, " No repositories found ")) : (a(), i("div", xk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), P(K_, {
        key: 2,
        "repo-id": v.value,
        revision: m.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        onBack: T,
        onQueue: M[3] || (M[3] = (V) => J.$emit("queue", V))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      y.value ? (a(), P(ik, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: M[4] || (M[4] = (V) => y.value = !1),
        onSaved: N,
        onCleared: O
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), Ik = /* @__PURE__ */ Se(Sk, [["__scopeId", "data-v-e13209bf"]]), Ek = { class: "civitai-tab" }, Tk = /* @__PURE__ */ $e({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", Ek, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Mk = /* @__PURE__ */ Se(Tk, [["__scopeId", "data-v-44948051"]]), Pk = { class: "direct-url-tab" }, Rk = { class: "input-group" }, Nk = { class: "input-group" }, Lk = {
  key: 0,
  class: "error"
}, Dk = { class: "actions" }, Ok = /* @__PURE__ */ $e({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = t, n = b(""), l = b(""), r = D(() => {
      const d = l.value.trim();
      if (!d) return null;
      const v = d.replace(/\\/g, "/").split("/").pop() || "";
      return v.includes(".") && !v.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = D(() => n.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, v) => (a(), i("div", Pk, [
      s("div", Rk, [
        v[2] || (v[2] = s("label", null, "Download URL", -1)),
        k(wt, {
          modelValue: n.value,
          "onUpdate:modelValue": v[0] || (v[0] = (m) => n.value = m),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      s("div", Nk, [
        v[3] || (v[3] = s("label", null, "Target Path (relative to models directory)", -1)),
        k(wt, {
          modelValue: l.value,
          "onUpdate:modelValue": v[1] || (v[1] = (m) => l.value = m),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (a(), i("p", Lk, f(r.value), 1)) : h("", !0)
      ]),
      v[5] || (v[5] = s("p", { class: "note" }, "Model will be queued for background download.", -1)),
      s("div", Dk, [
        k(Le, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: g(() => [...v[4] || (v[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Ak = /* @__PURE__ */ Se(Ok, [["__scopeId", "data-v-01def7aa"]]), Uk = { class: "download-modal" }, zk = { class: "tab-bar" }, Vk = ["onClick"], Fk = { class: "tab-content" }, Bk = /* @__PURE__ */ $e({
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
    ], r = b("huggingface");
    function c(v) {
      n(v.map((m) => ({
        workflow: "__manual__",
        filename: m.filename,
        url: m.url,
        targetPath: m.destination ? `${m.destination}/${m.filename}` : m.filename
      }))), o("close");
    }
    function u(v) {
      n(v.map((m) => ({
        workflow: "__manual__",
        filename: m.filename,
        url: m.url,
        targetPath: m.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (v, m) => e.show ? (a(), P(It, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: g(() => [
        s("div", Uk, [
          s("div", zk, [
            (a(), i(j, null, we(l, (p) => s("button", {
              key: p.id,
              class: Fe(["tab-btn", { active: r.value === p.id }]),
              onClick: (w) => r.value = p.id
            }, f(p.icon) + " " + f(p.label), 11, Vk)), 64))
          ]),
          s("div", Fk, [
            r.value === "huggingface" ? (a(), P(Ik, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (a(), P(Mk, { key: 1 })) : r.value === "direct" ? (a(), P(Ak, {
              key: 2,
              onQueue: u
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: d
        }, {
          default: g(() => [...m[0] || (m[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), Qr = /* @__PURE__ */ Se(Bk, [["__scopeId", "data-v-90a9f401"]]), Wk = /* @__PURE__ */ $e({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = gt(), r = b([]), c = b([]), u = b("production"), d = b(!1), v = b(null), m = b(""), p = b(!1), w = b(null), y = b(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = D(
      () => r.value.reduce((M, V) => M + (V.size || 0), 0)
    ), C = D(() => {
      if (!m.value.trim()) return r.value;
      const M = m.value.toLowerCase();
      return r.value.filter((V) => V.filename.toLowerCase().includes(M));
    }), S = D(() => {
      if (!m.value.trim()) return c.value;
      const M = m.value.toLowerCase();
      return c.value.filter((V) => V.filename.toLowerCase().includes(M));
    }), R = D(() => {
      const M = {};
      for (const Y of C.value) {
        const Z = Y.type || "other";
        M[Z] || (M[Z] = []), M[Z].push(Y);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(M).sort(([Y], [Z]) => {
        const ie = V.indexOf(Y), ye = V.indexOf(Z);
        return ie >= 0 && ye >= 0 ? ie - ye : ie >= 0 ? -1 : ye >= 0 ? 1 : Y.localeCompare(Z);
      }).map(([Y, Z]) => ({ type: Y, models: Z }));
    });
    function T(M) {
      if (!M) return "Unknown";
      const V = M / (1024 * 1024);
      return V >= 1024 ? `${(V / 1024).toFixed(1)} GB` : `${V.toFixed(0)} MB`;
    }
    function E(M) {
      w.value = M.hash || M.filename;
    }
    function N(M) {
      o("navigate", "model-index");
    }
    function O(M) {
      alert(`Download functionality not yet implemented for ${M}`);
    }
    async function J() {
      d.value = !0, v.value = null;
      try {
        const M = await n();
        r.value = M, c.value = [];
        const V = await l();
        u.value = V.environment || "production";
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return ct(J), (M, V) => (a(), i(j, null, [
      k(At, null, {
        header: g(() => [
          k(Ut, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (Y) => p.value = !0)
          }, {
            actions: g(() => [
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (Y) => y.value = !0)
              }, {
                default: g(() => [...V[6] || (V[6] = [
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
        search: g(() => [
          k(io, {
            modelValue: m.value,
            "onUpdate:modelValue": V[2] || (V[2] = (Y) => m.value = Y),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), P(Cs, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (a(), P(xs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            r.value.length ? (a(), P(la, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + f(r.value.length) + " models • " + f(T(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (a(!0), i(j, null, we(R.value, (Y) => (a(), P(St, {
              key: Y.type,
              title: Y.type.toUpperCase(),
              count: Y.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(Y.models, (Z) => (a(), P(Vt, {
                  key: Z.hash || Z.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...V[7] || (V[7] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(f(Z.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(T(Z.size)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: (Z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Path:",
                      value: Z.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => E(Z)
                    }, {
                      default: g(() => [...V[8] || (V[8] = [
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
            S.value.length ? (a(), P(St, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(S.value, (Y) => (a(), P(Vt, {
                  key: Y.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...V[9] || (V[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(f(Y.filename), 1)
                  ]),
                  subtitle: g(() => [...V[10] || (V[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var Z;
                    return [
                      k(_t, {
                        label: "Required by:",
                        value: ((Z = Y.workflow_names) == null ? void 0 : Z.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    k(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => O(Y.filename)
                    }, {
                      default: g(() => [...V[11] || (V[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => N(Y.filename)
                    }, {
                      default: g(() => [...V[12] || (V[12] = [
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
            !C.value.length && !S.value.length ? (a(), P(rs, {
              key: 2,
              icon: "📭",
              message: m.value ? `No models match '${m.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(cs, {
        show: p.value,
        title: "About Environment Models",
        onClose: V[3] || (V[3] = (Y) => p.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            V[13] || (V[13] = $(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + f(u.value) + '"', 1),
            V[14] || (V[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          k(Te, {
            variant: "primary",
            onClick: _
          }, {
            default: g(() => [...V[15] || (V[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), P(Cl, {
        key: 0,
        identifier: w.value,
        onClose: V[4] || (V[4] = (Y) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      k(Qr, {
        show: y.value,
        onClose: V[5] || (V[5] = (Y) => y.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Gk = /* @__PURE__ */ Se(Wk, [["__scopeId", "data-v-af3ca736"]]), jk = {
  key: 0,
  class: "indexing-progress"
}, Hk = { class: "progress-info" }, qk = { class: "progress-label" }, Kk = { class: "progress-count" }, Jk = { class: "progress-bar" }, Qk = { class: "modal-content" }, Yk = { class: "modal-header" }, Xk = { class: "modal-body" }, Zk = { class: "input-group" }, eb = { class: "current-path" }, tb = { class: "input-group" }, sb = { class: "modal-footer" }, ob = /* @__PURE__ */ $e({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = gt(), c = t, u = b([]), d = b(!1), v = b(!1), m = b(null), p = b(""), w = b(!1), y = b(null), _ = b(!1), x = b(null), C = b(""), S = b(!1), R = b(!1), T = b(null), E = D(
      () => u.value.reduce((ye, se) => ye + (se.size || 0), 0)
    ), N = D(() => {
      if (!p.value.trim()) return u.value;
      const ye = p.value.toLowerCase();
      return u.value.filter((se) => {
        const q = se, ae = se.sha256 || q.sha256_hash || "";
        return se.filename.toLowerCase().includes(ye) || ae.toLowerCase().includes(ye);
      });
    }), O = D(() => {
      const ye = {};
      for (const q of N.value) {
        const ae = q.type || "other";
        ye[ae] || (ye[ae] = []), ye[ae].push(q);
      }
      const se = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ye).sort(([q], [ae]) => {
        const Ue = se.indexOf(q), oe = se.indexOf(ae);
        return Ue >= 0 && oe >= 0 ? Ue - oe : Ue >= 0 ? -1 : oe >= 0 ? 1 : q.localeCompare(ae);
      }).map(([q, ae]) => ({ type: q, models: ae }));
    });
    function J(ye) {
      if (!ye) return "Unknown";
      const se = 1024 * 1024 * 1024, q = 1024 * 1024;
      return ye >= se ? `${(ye / se).toFixed(1)} GB` : ye >= q ? `${(ye / q).toFixed(0)} MB` : `${(ye / 1024).toFixed(0)} KB`;
    }
    function M(ye) {
      y.value = ye.hash || ye.filename;
    }
    async function V() {
      v.value = !0, m.value = null;
      try {
        const ye = await n();
        await Z(), ye.changes > 0 && console.log(`Scan complete: ${ye.changes} changes detected`);
      } catch (ye) {
        m.value = ye instanceof Error ? ye.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function Y() {
      if (C.value.trim()) {
        S.value = !0, m.value = null;
        try {
          const ye = await r(C.value.trim());
          x.value = ye.path, _.value = !1, C.value = "", await Z(), console.log(`Directory changed: ${ye.models_indexed} models indexed`), c("refresh");
        } catch (ye) {
          m.value = ye instanceof Error ? ye.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function Z() {
      d.value = !0, m.value = null;
      try {
        u.value = await o();
      } catch (ye) {
        m.value = ye instanceof Error ? ye.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function ie() {
      try {
        const ye = await l();
        x.value = ye.path;
      } catch {
      }
    }
    return ct(() => {
      Z(), ie();
    }), (ye, se) => (a(), i(j, null, [
      k(At, null, {
        header: g(() => [
          k(Ut, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: se[2] || (se[2] = (q) => w.value = !0)
          }, {
            actions: g(() => [
              k(Te, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: V
              }, {
                default: g(() => [
                  $(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: se[0] || (se[0] = (q) => _.value = !0)
              }, {
                default: g(() => [...se[11] || (se[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: se[1] || (se[1] = (q) => R.value = !0)
              }, {
                default: g(() => [...se[12] || (se[12] = [
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
        search: g(() => [
          T.value ? (a(), i("div", jk, [
            s("div", Hk, [
              s("span", qk, f(T.value.message), 1),
              s("span", Kk, f(T.value.current) + "/" + f(T.value.total), 1)
            ]),
            s("div", Jk, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          k(io, {
            modelValue: p.value,
            "onUpdate:modelValue": se[3] || (se[3] = (q) => p.value = q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value || T.value ? (a(), P(Cs, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : m.value ? (a(), P(xs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            u.value.length ? (a(), P(la, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(J(E.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (a(!0), i(j, null, we(O.value, (q) => (a(), P(St, {
              key: q.type,
              title: q.type.toUpperCase(),
              count: q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(q.models, (ae) => (a(), P(Vt, {
                  key: ae.sha256 || ae.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...se[13] || (se[13] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(f(ae.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(J(ae.size)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Hash:",
                      value: ae.hash ? ae.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => M(ae)
                    }, {
                      default: g(() => [...se[14] || (se[14] = [
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
            N.value.length ? h("", !0) : (a(), P(rs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(cs, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: se[4] || (se[4] = (q) => w.value = !1)
      }, {
        content: g(() => [...se[15] || (se[15] = [
          s("p", null, [
            $(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value ? (a(), P(Cl, {
        key: 0,
        identifier: y.value,
        onClose: se[5] || (se[5] = (q) => y.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (a(), P(Ot, { to: "body" }, [
        _.value ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: se[9] || (se[9] = vt((q) => _.value = !1, ["self"]))
        }, [
          s("div", Qk, [
            s("div", Yk, [
              se[16] || (se[16] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: se[6] || (se[6] = (q) => _.value = !1)
              }, "✕")
            ]),
            s("div", Xk, [
              s("div", Zk, [
                se[17] || (se[17] = s("label", null, "Current Directory", -1)),
                s("code", eb, f(x.value || "Not set"), 1)
              ]),
              s("div", tb, [
                se[18] || (se[18] = s("label", null, "New Directory Path", -1)),
                k(wt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": se[7] || (se[7] = (q) => C.value = q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              se[19] || (se[19] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", sb, [
              k(Le, {
                variant: "secondary",
                onClick: se[8] || (se[8] = (q) => _.value = !1)
              }, {
                default: g(() => [...se[20] || (se[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(Le, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: Y
              }, {
                default: g(() => [
                  $(f(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      k(Qr, {
        show: R.value,
        onClose: se[10] || (se[10] = (q) => R.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), nb = /* @__PURE__ */ Se(ob, [["__scopeId", "data-v-3705114c"]]), ab = { class: "node-details" }, lb = { class: "status-row" }, ib = {
  key: 0,
  class: "detail-row"
}, rb = { class: "value" }, cb = { class: "detail-row" }, ub = { class: "value" }, db = {
  key: 1,
  class: "detail-row"
}, fb = { class: "value mono" }, mb = {
  key: 2,
  class: "detail-row"
}, vb = ["href"], pb = {
  key: 3,
  class: "detail-row"
}, gb = { class: "value mono small" }, hb = { class: "detail-row" }, yb = {
  key: 0,
  class: "value"
}, wb = {
  key: 1,
  class: "workflow-list"
}, _b = /* @__PURE__ */ $e({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = D(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = D(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), P(It, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => n("close"))
    }, {
      body: g(() => [
        s("div", ab, [
          s("div", lb, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Fe(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", ib, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", rb, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : h("", !0),
          s("div", cb, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", ub, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", db, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", fb, f(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (a(), i("div", mb, [
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
            ], 8, vb)
          ])) : h("", !0),
          e.node.download_url ? (a(), i("div", pb, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", gb, f(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", hb, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", yb, " Not used in any workflows ")) : (a(), i("div", wb, [
              (a(!0), i(j, null, we(e.node.used_in_workflows, (v) => (a(), i("span", {
                key: v,
                class: "workflow-tag"
              }, f(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => n("close"))
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
}), kb = /* @__PURE__ */ Se(_b, [["__scopeId", "data-v-b342f626"]]), bb = { class: "dialog-message" }, $b = {
  key: 0,
  class: "dialog-details"
}, Cb = {
  key: 1,
  class: "dialog-warning"
}, xb = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), P(It, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: g(() => [
        s("p", bb, f(e.message), 1),
        e.details && e.details.length ? (a(), i("div", $b, [
          (a(!0), i(j, null, we(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : h("", !0),
        e.warning ? (a(), i("p", Cb, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: g(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), P(Le, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: g(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        k(Le, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
        }, {
          default: g(() => [
            $(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), xl = /* @__PURE__ */ Se(xb, [["__scopeId", "data-v-3670b9f5"]]), Sb = { class: "mismatch-warning" }, Ib = { class: "version-mismatch" }, Eb = { class: "version-actual" }, Tb = { class: "version-expected" }, Mb = { style: { color: "var(--cg-color-warning)" } }, Pb = { style: { color: "var(--cg-color-warning)" } }, Rb = {
  key: 0,
  class: "community-status-badge"
}, Nb = { key: 0 }, Lb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Db = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Ob = { class: "criticality-control" }, Ab = ["value", "disabled", "onChange"], Ub = /* @__PURE__ */ $e({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: c,
      uninstallNode: u,
      queueNodeInstall: d,
      updateNodeCriticality: v
    } = gt(), m = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = b(!1), w = b(null), y = b(""), _ = b(!1), x = b(null), C = b(/* @__PURE__ */ new Set()), S = b(/* @__PURE__ */ new Set()), R = b(null), T = D(() => {
      if (!y.value.trim()) return m.value.nodes;
      const ue = y.value.toLowerCase();
      return m.value.nodes.filter(
        (le) => {
          var I, z;
          return le.name.toLowerCase().includes(ue) || ((I = le.description) == null ? void 0 : I.toLowerCase().includes(ue)) || ((z = le.repository) == null ? void 0 : z.toLowerCase().includes(ue));
        }
      );
    }), E = D(
      () => T.value.filter((ue) => ue.installed && ue.tracked)
    ), N = D(
      () => T.value.filter((ue) => !ue.installed && ue.tracked && !ue.issue_type)
    ), O = D(
      () => T.value.filter((ue) => ue.installed && !ue.tracked)
    ), J = D(
      () => T.value.filter((ue) => ue.issue_type === "version_gated")
    ), M = D(
      () => T.value.filter((ue) => ue.issue_type === "uninstallable")
    );
    function V(ue) {
      return ue.registry_id || ue.name;
    }
    function Y(ue) {
      return C.value.has(V(ue));
    }
    async function Z(ue, le) {
      const I = ue.registry_id;
      if (!I) {
        n("toast", `Node "${ue.name}" has no package id for install`, "warning");
        return;
      }
      if (le === "git" && !ue.repository) {
        n("toast", `Node "${ue.name}" has no repository URL for git install`, "warning");
        return;
      }
      const z = {
        id: I,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      le === "git" && ue.repository && (z.repository = ue.repository, z.install_source = "git"), await d(z), C.value.add(V(ue)), n("toast", `✓ Queued install for "${ue.name}"`, "success");
    }
    function ie(ue) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ue] || ue;
    }
    const ye = D(() => o.versionMismatches.length > 0);
    function se(ue) {
      return !ue.used_in_workflows || ue.used_in_workflows.length === 0 ? "Not used in any workflows" : ue.used_in_workflows.length === 1 ? ue.used_in_workflows[0] : `${ue.used_in_workflows.length} workflows`;
    }
    function q(ue) {
      return ue.criticality === "optional" ? "optional" : "required";
    }
    function ae(ue) {
      return S.value.has(ue.name);
    }
    async function Ue(ue, le) {
      const I = le.target, z = q(ue), re = I.value;
      if (re !== z) {
        S.value = new Set(S.value).add(ue.name), ue.criticality = re;
        try {
          const Ce = await v(ue.name, re);
          if (Ce.status !== "success") {
            ue.criticality = z, n("toast", Ce.message || `Failed to update "${ue.name}" criticality`, "error");
            return;
          }
          n("toast", `Marked "${ue.name}" as ${re}`, "success");
        } catch (Ce) {
          ue.criticality = z, I.value = z, n("toast", `Error updating criticality: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
        } finally {
          const Ce = new Set(S.value);
          Ce.delete(ue.name), S.value = Ce;
        }
      }
    }
    function oe(ue) {
      return ue.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ge(ue) {
      return ue.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function A(ue) {
      return ue.registry_id ? `Community-mapped package: ${ue.registry_id}` : "Community-mapped package";
    }
    function me(ue) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Pe(ue) {
      x.value = ue;
    }
    function He() {
      n("open-node-manager");
    }
    function Ee(ue) {
      R.value = {
        title: "Track as Development Node",
        message: `Track "${ue}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            p.value = !0;
            const le = await r(ue);
            le.status === "success" ? (n("toast", `✓ Node "${ue}" tracked as development`, "success"), await xe()) : n("toast", `Failed to track node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error tracking node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function G(ue) {
      R.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ue}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          R.value = null;
          try {
            p.value = !0;
            const le = await u(ue);
            le.status === "success" ? (n("toast", `✓ Node "${ue}" removed`, "success"), await xe()) : n("toast", `Failed to remove node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error removing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ee(ue) {
      R.value = {
        title: "Install Missing Node",
        message: `Install "${ue}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            p.value = !0;
            const le = await c(ue);
            le.status === "success" ? (n("toast", `✓ Node "${ue}" installed`, "success"), await xe()) : n("toast", `Failed to install node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error installing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function H(ue) {
      R.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ue.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            p.value = !0, await Z(ue, "registry");
          } catch (le) {
            n("toast", `Error queueing install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function X(ue) {
      R.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ue.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            p.value = !0, await Z(ue, "git");
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
        m.value = await l();
      } catch (ue) {
        w.value = ue instanceof Error ? ue.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return ct(xe), (ue, le) => (a(), i(j, null, [
      k(At, null, {
        header: g(() => [
          k(Ut, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (I) => _.value = !0)
          }, {
            actions: g(() => [
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: He
              }, {
                default: g(() => [...le[7] || (le[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(io, {
            modelValue: y.value,
            "onUpdate:modelValue": le[1] || (le[1] = (I) => y.value = I),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          p.value ? (a(), P(Cs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (a(), P(xs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: xe
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            ye.value ? (a(), P(St, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                s("div", Sb, [
                  le[8] || (le[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(j, null, we(e.versionMismatches, (I) => (a(), P(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: g(() => [...le[9] || (le[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Ib, [
                      s("span", Eb, f(I.actual), 1),
                      le[10] || (le[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", Tb, f(I.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "warning",
                      size: "sm",
                      onClick: le[2] || (le[2] = (z) => n("repair-environment"))
                    }, {
                      default: g(() => [...le[11] || (le[11] = [
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
            J.value.length ? (a(), P(St, {
              key: 1,
              title: "BLOCKED",
              count: J.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(J.value, (I) => (a(), P(Vt, {
                  key: `blocked-${I.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...le[12] || (le[12] = [
                    $("⛔", -1)
                  ])]),
                  title: g(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Mb, f(oe(I)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || ge(I)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...le[13] || (le[13] = [
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
            M.value.length ? (a(), P(St, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(M.value, (I) => (a(), P(Vt, {
                  key: `community-${I.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...le[14] || (le[14] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Pb, f(A(I)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || me(I)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...le[15] || (le[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    Y(I) ? (a(), i("span", Rb, "Queued")) : (a(), i(j, { key: 1 }, [
                      I.registry_id ? (a(), P(Te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (z) => H(I)
                      }, {
                        default: g(() => [...le[16] || (le[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      I.repository ? (a(), P(Te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (z) => X(I)
                      }, {
                        default: g(() => [...le[17] || (le[17] = [
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
            O.value.length ? (a(), P(St, {
              key: 3,
              title: "UNTRACKED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(O.value, (I) => (a(), P(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: g(() => [...le[18] || (le[18] = [
                    $("?", -1)
                  ])]),
                  title: g(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: g(() => [...le[19] || (le[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...le[20] || (le[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => Ee(I.name)
                    }, {
                      default: g(() => [...le[21] || (le[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (z) => G(I.name)
                    }, {
                      default: g(() => [...le[22] || (le[22] = [
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
            E.value.length ? (a(), P(St, {
              key: 4,
              title: "INSTALLED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(E.value, (I) => (a(), P(Vt, {
                  key: I.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    $(f(I.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: g(() => [
                    I.version ? (a(), i("span", Nb, f(I.source === "development" ? "" : "v") + f(I.version), 1)) : (a(), i("span", Lb, "version unknown")),
                    s("span", Db, " • " + f(ie(I.source)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...le[23] || (le[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", Ob, [
                      le[25] || (le[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: q(I),
                        disabled: ae(I),
                        onChange: (z) => Ue(I, z)
                      }, [...le[24] || (le[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, Ab)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            N.value.length ? (a(), P(St, {
              key: 5,
              title: "MISSING",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(N.value, (I) => (a(), P(Vt, {
                  key: I.name,
                  status: "missing"
                }, {
                  icon: g(() => [...le[26] || (le[26] = [
                    $("!", -1)
                  ])]),
                  title: g(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: g(() => [...le[27] || (le[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    k(_t, {
                      label: "Required by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...le[28] || (le[28] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => ee(I.name)
                    }, {
                      default: g(() => [...le[29] || (le[29] = [
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
            !E.value.length && !N.value.length && !J.value.length && !M.value.length && !O.value.length ? (a(), P(rs, {
              key: 6,
              icon: "📭",
              message: y.value ? `No nodes match '${y.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(cs, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: le[4] || (le[4] = (I) => _.value = !1)
      }, {
        content: g(() => [...le[30] || (le[30] = [
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
        actions: g(() => [
          k(Te, {
            variant: "primary",
            onClick: le[3] || (le[3] = (I) => _.value = !1)
          }, {
            default: g(() => [...le[31] || (le[31] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x.value ? (a(), P(kb, {
        key: 0,
        node: x.value,
        onClose: le[5] || (le[5] = (I) => x.value = null)
      }, null, 8, ["node"])) : h("", !0),
      R.value ? (a(), P(xl, {
        key: 1,
        title: R.value.title,
        message: R.value.message,
        warning: R.value.warning,
        "confirm-label": R.value.confirmLabel,
        destructive: R.value.destructive,
        onConfirm: R.value.onConfirm,
        onCancel: le[6] || (le[6] = (I) => R.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), zb = /* @__PURE__ */ Se(Ub, [["__scopeId", "data-v-edfa1c86"]]), Vb = { class: "setting-info" }, Fb = { class: "setting-label" }, Bb = {
  key: 0,
  class: "required-marker"
}, Wb = {
  key: 0,
  class: "setting-description"
}, Gb = { class: "setting-control" }, jb = /* @__PURE__ */ $e({
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
      s("div", Vb, [
        s("div", Fb, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), i("span", Bb, "*")) : h("", !0)
        ]),
        e.description ? (a(), i("div", Wb, f(e.description), 1)) : h("", !0)
      ]),
      s("div", Gb, [
        ot(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), mo = /* @__PURE__ */ Se(jb, [["__scopeId", "data-v-3e106b1c"]]), Hb = ["type", "value", "placeholder", "disabled"], qb = /* @__PURE__ */ $e({
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
    const n = e, l = o, r = b(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return ct(() => {
      n.autoFocus && r.value && r.value.focus();
    }), t({
      focus: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.blur();
      }
    }), (u, d) => (a(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Fe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = fs((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = fs((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, Hb));
  }
}), ho = /* @__PURE__ */ Se(qb, [["__scopeId", "data-v-0380d08f"]]), Kb = { class: "toggle" }, Jb = ["checked", "disabled"], Qb = /* @__PURE__ */ $e({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", Kb, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Jb),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), wi = /* @__PURE__ */ Se(Qb, [["__scopeId", "data-v-71c0f550"]]), Fa = "ComfyGit.Deploy.GitHubPAT";
function Yr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function Yb(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function Xb() {
  function e() {
    try {
      return localStorage.getItem(Fa);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(Fa, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Fa);
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
    isRemoteSsh: Yr,
    isRemoteHttps: Yb
  };
}
const Zb = { class: "workspace-settings-content" }, e2 = { class: "settings-section" }, t2 = { class: "path-setting" }, s2 = { class: "path-value" }, o2 = { class: "path-setting" }, n2 = { class: "path-value" }, a2 = { class: "settings-section" }, l2 = { class: "token-setting" }, i2 = {
  key: 0,
  class: "token-warning"
}, r2 = { class: "token-actions" }, c2 = { class: "settings-section" }, u2 = { class: "settings-section" }, d2 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = gt(), { getToken: v, setToken: m, clearToken: p, hasToken: w } = Xb(), y = b(!1), _ = b(null), x = b(null), C = b(null), S = b(null), R = b(""), T = b(""), E = b(""), N = b(""), O = b(!1), J = b(!1), M = b(!1), V = b(""), Y = b(!1), Z = b(!1), ie = b(null), ye = b(!1), se = b(!0);
    function q(ee) {
      return ee.join(" ");
    }
    function ae(ee) {
      return ee.trim() ? ee.trim().split(/\s+/) : [];
    }
    const Ue = D(() => {
      if (!S.value) return !1;
      const ee = O.value, H = J.value, X = M.value, xe = N.value !== q(S.value.comfyui_extra_args || []);
      return ee || H || X || xe;
    }), oe = D(() => w());
    async function ge() {
      var ee;
      y.value = !0, _.value = null;
      try {
        C.value = await r(n.workspacePath || void 0), S.value = { ...C.value }, R.value = C.value.civitai_api_key || "", T.value = C.value.huggingface_token || "", N.value = q(C.value.comfyui_extra_args || []), E.value = v() || "", V.value = E.value, O.value = !1, J.value = !1, M.value = !1, ie.value = null;
        const H = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        ye.value = H !== "false", se.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const xe = (ee = (await u()).remotes) == null ? void 0 : ee.find((ue) => ue.name === "origin");
          Y.value = !!(xe && Yr(xe.url));
        } catch {
          Y.value = !1;
        }
      } catch (H) {
        _.value = H instanceof Error ? H.message : "Failed to load settings";
      } finally {
        y.value = !1;
      }
    }
    async function A() {
      var ee;
      x.value = null;
      try {
        const H = {};
        O.value && (H.civitai_api_key = R.value || null), J.value && (H.huggingface_token = T.value || null), N.value !== q(((ee = S.value) == null ? void 0 : ee.comfyui_extra_args) || []) && (H.comfyui_extra_args = ae(N.value)), await c(H, n.workspacePath || void 0), M.value && (E.value ? m(E.value) : p()), await ge(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (H) {
        const X = H instanceof Error ? H.message : "Failed to save settings";
        x.value = { type: "error", message: X }, l("error", X);
      }
    }
    function me() {
      S.value && (R.value = S.value.civitai_api_key || "", T.value = S.value.huggingface_token || "", N.value = q(S.value.comfyui_extra_args || []), E.value = V.value, O.value = !1, J.value = !1, M.value = !1, ie.value = null, x.value = null);
    }
    async function Pe() {
      if (E.value) {
        Z.value = !0, ie.value = null;
        try {
          const ee = await d(E.value);
          ie.value = {
            type: ee.status === "success" ? "success" : "error",
            message: ee.message
          };
        } catch (ee) {
          ie.value = {
            type: "error",
            message: ee instanceof Error ? ee.message : "Connection test failed"
          };
        } finally {
          Z.value = !1;
        }
      }
    }
    function He() {
      E.value = "", M.value = !0, ie.value = null;
    }
    function Ee(ee) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ee)), console.log("[ComfyGit] Auto-refresh setting saved:", ee);
    }
    function G(ee) {
      ee ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ee ? "enabled" : "disabled");
    }
    return t({
      saveSettings: A,
      resetSettings: me,
      hasChanges: Ue,
      loadSettings: ge
    }), ct(ge), (ee, H) => (a(), i("div", Zb, [
      y.value ? (a(), P(Cs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), P(xs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: ge
      }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
        k(St, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var X, xe;
            return [
              s("div", e2, [
                s("div", t2, [
                  H[9] || (H[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  H[10] || (H[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", s2, f(((X = C.value) == null ? void 0 : X.workspace_path) || "Loading..."), 1)
                ]),
                s("div", o2, [
                  H[11] || (H[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  H[12] || (H[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", n2, f(((xe = C.value) == null ? void 0 : xe.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(St, { title: "API CREDENTIALS" }, {
          default: g(() => [
            s("div", a2, [
              k(mo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  k(ho, {
                    modelValue: R.value,
                    "onUpdate:modelValue": H[0] || (H[0] = (X) => R.value = X),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: H[1] || (H[1] = (X) => O.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(mo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  k(ho, {
                    modelValue: T.value,
                    "onUpdate:modelValue": H[2] || (H[2] = (X) => T.value = X),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: H[3] || (H[3] = (X) => J.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(mo, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: g(() => [
                  s("div", l2, [
                    k(ho, {
                      modelValue: E.value,
                      "onUpdate:modelValue": H[4] || (H[4] = (X) => E.value = X),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: H[5] || (H[5] = (X) => M.value = !0)
                    }, null, 8, ["modelValue"]),
                    Y.value ? (a(), i("div", i2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    H[15] || (H[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", r2, [
                      k(Te, {
                        variant: "ghost",
                        size: "xs",
                        loading: Z.value,
                        disabled: !E.value || Z.value,
                        onClick: Pe
                      }, {
                        default: g(() => [...H[13] || (H[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      oe.value ? (a(), P(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: He
                      }, {
                        default: g(() => [...H[14] || (H[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : h("", !0)
                    ]),
                    ie.value ? (a(), i("div", {
                      key: 1,
                      class: Fe(["token-test-result", ie.value.type])
                    }, f(ie.value.message), 3)) : h("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        k(St, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            s("div", c2, [
              k(mo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  k(ho, {
                    modelValue: N.value,
                    "onUpdate:modelValue": H[6] || (H[6] = (X) => N.value = X),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              H[16] || (H[16] = s("div", { class: "setting-hint" }, [
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
        k(St, { title: "UI SETTINGS" }, {
          default: g(() => [
            s("div", u2, [
              k(mo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  k(wi, {
                    modelValue: ye.value,
                    "onUpdate:modelValue": [
                      H[7] || (H[7] = (X) => ye.value = X),
                      Ee
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(mo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  k(wi, {
                    modelValue: se.value,
                    "onUpdate:modelValue": [
                      H[8] || (H[8] = (X) => se.value = X),
                      G
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        x.value ? (a(), P(la, {
          key: 0,
          variant: (x.value.type === "success", "compact")
        }, {
          default: g(() => [
            s("span", {
              style: Wt({ color: x.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(x.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), Xr = /* @__PURE__ */ Se(d2, [["__scopeId", "data-v-f1bdc574"]]), f2 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), P(At, null, {
      header: g(() => [
        k(Ut, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, c;
            return [
              k(Te, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (a(), P(Te, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
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
        k(Xr, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), m2 = { class: "env-title" }, v2 = {
  key: 0,
  class: "current-badge"
}, p2 = {
  key: 0,
  class: "branch-info"
}, g2 = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), P(Vt, {
      status: e.isCurrent ? "synced" : void 0
    }, Yt({
      icon: g(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        s("div", m2, [
          s("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", v2, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (a(), i("span", p2, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + f(e.currentBranch), 1)
        ])) : h("", !0)
      ]),
      actions: g(() => [
        ot(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          k(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          k(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          k(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), P(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), h2 = /* @__PURE__ */ Se(g2, [["__scopeId", "data-v-9231917a"]]), y2 = { class: "env-details" }, w2 = { class: "status-row" }, _2 = {
  key: 0,
  class: "detail-row"
}, k2 = { class: "value mono" }, b2 = {
  key: 1,
  class: "detail-row"
}, $2 = { class: "value mono small" }, C2 = { class: "collapsible-section" }, x2 = { class: "value" }, S2 = {
  key: 0,
  class: "collapsible-body"
}, I2 = { class: "item-list" }, E2 = { class: "item-name" }, T2 = { class: "item-name" }, M2 = { class: "item-name" }, P2 = { class: "item-name" }, R2 = {
  key: 0,
  class: "empty-list"
}, N2 = { class: "collapsible-section" }, L2 = { class: "value" }, D2 = {
  key: 0,
  class: "collapsible-body"
}, O2 = { class: "item-list" }, A2 = { class: "item-name" }, U2 = {
  key: 0,
  class: "item-meta"
}, z2 = {
  key: 0,
  class: "empty-list"
}, V2 = { class: "collapsible-section" }, F2 = { class: "value" }, B2 = {
  key: 0,
  class: "missing-count"
}, W2 = {
  key: 0,
  class: "collapsible-body"
}, G2 = { class: "item-list" }, j2 = { class: "model-row" }, H2 = { class: "item-name" }, q2 = { class: "model-meta" }, K2 = { class: "item-meta" }, J2 = {
  key: 0,
  class: "item-meta"
}, Q2 = {
  key: 0,
  class: "empty-list"
}, Y2 = {
  key: 2,
  class: "section-divider"
}, X2 = {
  key: 3,
  class: "detail-row"
}, Z2 = { class: "value" }, e$ = { class: "footer-actions" }, t$ = /* @__PURE__ */ $e({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = D(() => {
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
    return (d, v) => (a(), P(It, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (m) => n("close"))
    }, {
      body: g(() => {
        var m, p, w, y, _, x, C, S, R, T, E, N, O, J;
        return [
          s("div", y2, [
            s("div", w2, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Fe(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", _2, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", k2, f(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (a(), i("div", b2, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", $2, f(e.environment.path), 1)
            ])) : h("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", C2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (M) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", x2, f(((m = e.detail) == null ? void 0 : m.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", S2, [
                s("div", I2, [
                  (a(!0), i(j, null, we(e.detail.workflows.synced, (M) => (a(), i("div", {
                    key: "synced-" + M,
                    class: "list-item"
                  }, [
                    s("span", E2, f(M), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.new, (M) => (a(), i("div", {
                    key: "new-" + M,
                    class: "list-item"
                  }, [
                    s("span", T2, f(M), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.modified, (M) => (a(), i("div", {
                    key: "mod-" + M,
                    class: "list-item"
                  }, [
                    s("span", M2, f(M), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.deleted, (M) => (a(), i("div", {
                    key: "del-" + M,
                    class: "list-item"
                  }, [
                    s("span", P2, f(M), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (a(), i("div", R2, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            s("div", N2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (M) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", L2, f(((y = e.detail) == null ? void 0 : y.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (a(), i("div", D2, [
                s("div", O2, [
                  (a(!0), i(j, null, we(e.detail.nodes, (M) => (a(), i("div", {
                    key: M.name,
                    class: "list-item"
                  }, [
                    s("span", A2, f(M.name), 1),
                    M.version ? (a(), i("span", U2, f(M.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (a(), i("div", z2, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            s("div", V2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (M) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", F2, [
                  $(f(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (R = (S = e.detail) == null ? void 0 : S.models) != null && R.missing.length ? (a(), i("span", B2, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (T = e.detail) != null && T.models ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (E = e.detail) != null && E.models && l.value.has("models") ? (a(), i("div", W2, [
                s("div", G2, [
                  (a(!0), i(j, null, we(e.detail.models.missing, (M) => (a(), i("div", {
                    key: M.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", j2, [
                      s("span", H2, f(M.filename), 1),
                      s("span", {
                        class: Fe(["criticality-badge", M.criticality])
                      }, f(M.criticality), 3)
                    ]),
                    s("div", q2, [
                      s("span", K2, f(M.category), 1),
                      M.workflow_names.length ? (a(), i("span", J2, " used by: " + f(M.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (a(), i("div", Q2, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (a(), i("div", Y2)) : h("", !0),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (a(), i("div", X2, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Z2, f(u(((J = e.detail) == null ? void 0 : J.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        s("div", e$, [
          k(Le, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (m) => n("export", e.environment.name))
          }, {
            default: g(() => [...v[19] || (v[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), P(Le, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (m) => n("delete", e.environment.name))
          }, {
            default: g(() => [...v[20] || (v[20] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          k(Le, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (m) => n("close"))
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
}), s$ = /* @__PURE__ */ Se(t$, [["__scopeId", "data-v-750671f5"]]), Zr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], ec = "3.12", Sl = [
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
], tc = "auto", o$ = { class: "progress-bar" }, n$ = /* @__PURE__ */ $e({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = D(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", o$, [
      s("div", {
        class: Fe(["progress-fill", e.variant]),
        style: Wt({ width: o.value })
      }, null, 6)
    ]));
  }
}), sc = /* @__PURE__ */ Se(n$, [["__scopeId", "data-v-1beb0512"]]), a$ = { class: "task-progress" }, l$ = { class: "progress-info" }, i$ = { class: "progress-percentage" }, r$ = { class: "progress-message" }, c$ = {
  key: 0,
  class: "progress-steps"
}, u$ = { class: "step-icon" }, d$ = { class: "step-label" }, f$ = /* @__PURE__ */ $e({
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
    function n(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (a(), i("div", a$, [
      k(sc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", l$, [
        s("span", i$, f(e.progress) + "%", 1),
        s("span", r$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", c$, [
        (a(!0), i(j, null, we(e.steps, (c) => (a(), i("div", {
          key: c.id,
          class: Fe(["step", o(c.id)])
        }, [
          s("span", u$, f(n(c.id)), 1),
          s("span", d$, f(c.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), jn = /* @__PURE__ */ Se(f$, [["__scopeId", "data-v-9d1de66c"]]), m$ = {
  key: 0,
  class: "create-env-form"
}, v$ = { class: "form-field" }, p$ = { class: "input-wrapper" }, g$ = {
  key: 0,
  class: "validating-indicator"
}, h$ = {
  key: 1,
  class: "valid-indicator"
}, y$ = {
  key: 0,
  class: "field-error"
}, w$ = { class: "form-field" }, _$ = ["value"], k$ = { class: "form-field" }, b$ = ["disabled"], $$ = ["value"], C$ = { class: "form-field" }, x$ = ["value"], S$ = { class: "form-field form-field--checkbox" }, I$ = { class: "form-checkbox" }, E$ = {
  key: 1,
  class: "create-env-progress"
}, T$ = { class: "creating-intro" }, M$ = {
  key: 0,
  class: "progress-warning"
}, P$ = {
  key: 1,
  class: "create-error"
}, R$ = { class: "error-message" }, N$ = {
  key: 1,
  class: "footer-status"
}, L$ = 10, D$ = /* @__PURE__ */ $e({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = gt(), u = b(""), d = b(ec), v = b("latest"), m = b(tc), p = b(!1), w = b(null), y = b(!1), _ = b(!1);
    let x = null, C = 0;
    const S = D(() => !!u.value.trim() && _.value && !w.value && !y.value && !E.value), R = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = b(!1), E = b(!1), N = b({
      progress: 0,
      message: ""
    });
    let O = null, J = 0;
    const M = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], V = b(null);
    kt(u, (oe) => {
      _.value = !1, x && (clearTimeout(x), x = null);
      const ge = oe.trim();
      if (!ge) {
        w.value = null, y.value = !1;
        return;
      }
      y.value = !0, x = setTimeout(() => {
        Y(ge);
      }, 400);
    });
    async function Y(oe, ge = !1) {
      const A = oe.trim();
      if (!A)
        return _.value = !1, y.value = !1, w.value = ge ? "Environment name is required" : null, !1;
      const me = ++C;
      y.value = !0;
      try {
        const Pe = await c(A);
        return me !== C ? !1 : (w.value = Pe.valid ? null : Pe.error || "Invalid name", _.value = !!Pe.valid, !!Pe.valid);
      } catch {
        return me !== C || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        me === C && (y.value = !1);
      }
    }
    async function Z() {
      x && (clearTimeout(x), x = null), await Y(u.value, !0);
    }
    function ie() {
      E.value || o("close");
    }
    async function ye() {
      const oe = u.value.trim();
      if (!oe) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await Y(oe, !0)) {
        E.value = !0, N.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: oe,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, me = await l(A);
          me.status === "started" ? se() : me.status === "error" && (N.value = {
            progress: 0,
            message: me.message || "Failed to start creation",
            error: me.message
          });
        } catch (A) {
          N.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function se() {
      O || (J = 0, O = window.setInterval(async () => {
        try {
          const oe = await r();
          J = 0, N.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase,
            error: oe.error
          }, oe.state === "complete" ? (q(), o("created", oe.environment_name || u.value.trim(), p.value)) : oe.state === "error" ? (q(), N.value.error = oe.error || oe.message) : oe.state === "idle" && E.value && (q(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          J++, J >= L$ && (q(), N.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function q() {
      O && (clearInterval(O), O = null);
    }
    function ae() {
      E.value = !1, N.value = { progress: 0, message: "" }, o("close");
    }
    async function Ue() {
      T.value = !0;
      try {
        R.value = await n();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        T.value = !1;
      }
    }
    return ct(async () => {
      var oe;
      await Pt(), (oe = V.value) == null || oe.focus(), Ue();
    }), Po(() => {
      q(), x && (clearTimeout(x), x = null);
    }), (oe, ge) => (a(), P(It, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !E.value,
      onClose: ie
    }, {
      body: g(() => [
        E.value ? (a(), i("div", E$, [
          s("p", T$, [
            ge[12] || (ge[12] = $(" Creating environment ", -1)),
            s("strong", null, f(u.value), 1),
            ge[13] || (ge[13] = $("... ", -1))
          ]),
          k(jn, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: M
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? h("", !0) : (a(), i("p", M$, " This may take several minutes. Please wait... ")),
          N.value.error ? (a(), i("div", P$, [
            s("p", R$, f(N.value.error), 1)
          ])) : h("", !0)
        ])) : (a(), i("div", m$, [
          s("div", v$, [
            ge[6] || (ge[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", p$, [
              Tt(s("input", {
                ref_key: "nameInput",
                ref: V,
                "onUpdate:modelValue": ge[0] || (ge[0] = (A) => u.value = A),
                type: "text",
                class: Fe(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: fs(ye, ["enter"]),
                onBlur: Z
              }, null, 34), [
                [$o, u.value]
              ]),
              y.value ? (a(), i("span", g$, "...")) : _.value ? (a(), i("span", h$, "✓")) : h("", !0)
            ]),
            w.value ? (a(), i("div", y$, f(w.value), 1)) : h("", !0),
            ge[7] || (ge[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", w$, [
            ge[8] || (ge[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[1] || (ge[1] = (A) => d.value = A),
              class: "form-select"
            }, [
              (a(!0), i(j, null, we(st(Zr), (A) => (a(), i("option", {
                key: A,
                value: A
              }, f(A), 9, _$))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          s("div", k$, [
            ge[9] || (ge[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[2] || (ge[2] = (A) => v.value = A),
              class: "form-select",
              disabled: T.value
            }, [
              (a(!0), i(j, null, we(R.value, (A) => (a(), i("option", {
                key: A.tag_name,
                value: A.tag_name
              }, f(A.name), 9, $$))), 128))
            ], 8, b$), [
              [Co, v.value]
            ])
          ]),
          s("div", C$, [
            ge[10] || (ge[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[3] || (ge[3] = (A) => m.value = A),
              class: "form-select"
            }, [
              (a(!0), i(j, null, we(st(Sl), (A) => (a(), i("option", {
                key: A,
                value: A
              }, f(A) + f(A === "auto" ? " (detect GPU)" : ""), 9, x$))), 128))
            ], 512), [
              [Co, m.value]
            ])
          ]),
          s("div", S$, [
            s("label", I$, [
              Tt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ge[4] || (ge[4] = (A) => p.value = A)
              }, null, 512), [
                [Wn, p.value]
              ]),
              ge[11] || (ge[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        E.value ? (a(), i(j, { key: 1 }, [
          N.value.error ? (a(), P(Le, {
            key: 0,
            variant: "secondary",
            onClick: ae
          }, {
            default: g(() => [...ge[16] || (ge[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", N$, " Creating environment... "))
        ], 64)) : (a(), i(j, { key: 0 }, [
          k(Le, {
            variant: "primary",
            disabled: !S.value,
            onClick: ye
          }, {
            default: g(() => [...ge[14] || (ge[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Le, {
            variant: "secondary",
            onClick: ge[5] || (ge[5] = (A) => o("close"))
          }, {
            default: g(() => [...ge[15] || (ge[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), O$ = /* @__PURE__ */ Se(D$, [["__scopeId", "data-v-3faa3d9b"]]), A$ = /* @__PURE__ */ $e({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = gt(), c = b([]), u = b(!1), d = b(null), v = b(""), m = b(!1), p = b(!1), w = b(null), y = b(null), _ = D(() => {
      if (!v.value.trim()) return c.value;
      const N = v.value.toLowerCase();
      return c.value.filter(
        (O) => {
          var J;
          return O.name.toLowerCase().includes(N) || ((J = O.current_branch) == null ? void 0 : J.toLowerCase().includes(N));
        }
      );
    });
    function x(N, O) {
      p.value = !1, n("created", N, O);
    }
    function C() {
      p.value = !0;
    }
    async function S(N) {
      w.value = N, y.value = null;
      const O = await r(N.name);
      O && (y.value = O);
    }
    function R(N) {
      w.value = null, y.value = null, n("delete", N);
    }
    function T(N) {
      w.value = null, y.value = null, n("export", N);
    }
    async function E() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return ct(E), t({
      loadEnvironments: E,
      openCreateModal: C
    }), (N, O) => (a(), i(j, null, [
      k(At, null, {
        header: g(() => [
          k(Ut, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: O[1] || (O[1] = (J) => m.value = !0)
          }, {
            actions: g(() => [
              e.canCreate ? (a(), P(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: g(() => [...O[7] || (O[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : h("", !0),
              k(Te, {
                variant: "secondary",
                size: "sm",
                onClick: O[0] || (O[0] = (J) => N.$emit("import"))
              }, {
                default: g(() => [...O[8] || (O[8] = [
                  $(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(io, {
            modelValue: v.value,
            "onUpdate:modelValue": O[2] || (O[2] = (J) => v.value = J),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (a(), P(Cs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), P(xs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            _.value.length ? (a(), P(St, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(_.value, (J) => (a(), P(h2, {
                  key: J.name,
                  "environment-name": J.name,
                  "is-current": J.is_current,
                  "current-branch": J.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    !J.is_current && e.canSwitch ? (a(), P(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => N.$emit("switch", J.name)
                    }, {
                      default: g(() => [...O[9] || (O[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : h("", !0),
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => S(J)
                    }, {
                      default: g(() => [...O[10] || (O[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => N.$emit("export", J.name)
                    }, {
                      default: g(() => [...O[11] || (O[11] = [
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
            _.value.length ? h("", !0) : (a(), P(rs, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  e.canCreate ? (a(), P(Te, {
                    key: 0,
                    variant: "primary",
                    onClick: C
                  }, {
                    default: g(() => [...O[12] || (O[12] = [
                      $(" Create Environment ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                key: "0"
              }
            ]), 1032, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(cs, {
        show: m.value,
        title: "About Environments",
        onClose: O[4] || (O[4] = (J) => m.value = !1)
      }, {
        content: g(() => [...O[13] || (O[13] = [
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
        actions: g(() => [
          k(Te, {
            variant: "secondary",
            onClick: O[3] || (O[3] = (J) => m.value = !1)
          }, {
            default: g(() => [...O[14] || (O[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), P(s$, {
        key: 0,
        environment: w.value,
        detail: y.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: O[5] || (O[5] = (J) => {
          w.value = null, y.value = null;
        }),
        onDelete: R,
        onExport: T
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      p.value ? (a(), P(O$, {
        key: 1,
        onClose: O[6] || (O[6] = (J) => p.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), U$ = /* @__PURE__ */ Se(A$, [["__scopeId", "data-v-01d95db8"]]), z$ = { class: "file-path" }, V$ = { class: "file-path-text" }, F$ = ["title"], B$ = /* @__PURE__ */ $e({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = b(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (a(), i("div", z$, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", V$, f(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, F$)) : h("", !0)
    ]));
  }
}), W$ = /* @__PURE__ */ Se(B$, [["__scopeId", "data-v-f0982173"]]), G$ = { class: "base-textarea-wrapper" }, j$ = ["value", "rows", "placeholder", "disabled", "maxlength"], H$ = {
  key: 0,
  class: "base-textarea-count"
}, q$ = /* @__PURE__ */ $e({
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
    return (r, c) => (a(), i("div", G$, [
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
      }, null, 40, j$),
      e.showCharCount && e.maxLength ? (a(), i("div", H$, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), xo = /* @__PURE__ */ Se(q$, [["__scopeId", "data-v-c6d16c93"]]), K$ = ["checked", "disabled"], J$ = { class: "base-checkbox-box" }, Q$ = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Y$ = {
  key: 0,
  class: "base-checkbox-label"
}, X$ = /* @__PURE__ */ $e({
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
      }, null, 40, K$),
      s("span", J$, [
        e.modelValue ? (a(), i("svg", Q$, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      t.$slots.default ? (a(), i("span", Y$, [
        ot(t.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Hn = /* @__PURE__ */ Se(X$, [["__scopeId", "data-v-bf17c831"]]), Z$ = { class: "export-blocked" }, eC = { class: "error-header" }, tC = { class: "error-summary" }, sC = { class: "error-title" }, oC = { class: "error-description" }, nC = { class: "issues-list" }, aC = { class: "issue-message" }, lC = {
  key: 0,
  class: "issue-details"
}, iC = ["onClick"], rC = { class: "issue-fix" }, cC = {
  key: 0,
  class: "commit-section"
}, uC = {
  key: 0,
  class: "issues-warning"
}, dC = {
  key: 1,
  class: "commit-error"
}, fC = /* @__PURE__ */ $e({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = gt(), r = b(""), c = b(!1), u = b(!1), d = b(""), v = ro({}), m = D(() => o.mode === "publish" ? "Publish" : "Export"), p = D(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = D(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), y = D(
      () => w.value && !u.value
    ), _ = D(
      () => p.value && r.value.trim() !== "" && !c.value && !y.value
    );
    function x(S) {
      const R = o.issues[S];
      return v[S] || R.details.length <= 3 ? R.details : R.details.slice(0, 3);
    }
    async function C() {
      var S;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const R = await l(r.value.trim(), u.value);
          if (R.status === "success")
            n("committed");
          else if (R.status === "blocked") {
            const T = ((S = R.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${T}`;
          } else
            d.value = R.message || "Commit failed";
        } catch (R) {
          d.value = R instanceof Error ? R.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (S, R) => (a(), P(It, {
      title: p.value ? `Commit & ${m.value}` : `Cannot ${m.value}`,
      size: "md",
      onClose: R[4] || (R[4] = (T) => S.$emit("close"))
    }, {
      body: g(() => [
        s("div", Z$, [
          s("div", eC, [
            R[5] || (R[5] = s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            s("div", tC, [
              s("h3", sC, f(m.value) + " blocked", 1),
              s("p", oC, f(p.value ? `Commit your changes to proceed with ${m.value.toLowerCase()}.` : `The following issues must be resolved before ${m.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", nC, [
            (a(!0), i(j, null, we(e.issues, (T, E) => (a(), i("div", {
              key: E,
              class: "issue-item"
            }, [
              s("div", aC, f(T.message), 1),
              T.details.length ? (a(), i("div", lC, [
                (a(!0), i(j, null, we(x(E), (N, O) => (a(), i("div", {
                  key: O,
                  class: "issue-detail"
                }, f(N), 1))), 128)),
                T.details.length > 3 && !v[E] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[E] = !0
                }, " +" + f(T.details.length - 3) + " more ", 9, iC)) : h("", !0)
              ])) : h("", !0),
              s("div", rC, [
                T.type === "uncommitted_workflows" ? (a(), i(j, { key: 0 }, [
                  $(" Commit your workflow changes before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : T.type === "uncommitted_git_changes" ? (a(), i(j, { key: 1 }, [
                  $(" Commit your changes before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : T.type === "unresolved_issues" ? (a(), i(j, { key: 2 }, [
                  $(" Resolve all workflow issues before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (a(), i("div", cC, [
            w.value ? (a(), i("div", uC, [
              R[7] || (R[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              k(Hn, {
                modelValue: u.value,
                "onUpdate:modelValue": R[0] || (R[0] = (T) => u.value = T),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...R[6] || (R[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            k(xo, {
              modelValue: r.value,
              "onUpdate:modelValue": R[1] || (R[1] = (T) => r.value = T),
              placeholder: "Describe your changes...",
              disabled: c.value || y.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (a(), i("div", dC, f(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        p.value ? (a(), i(j, { key: 0 }, [
          k(Le, {
            variant: "secondary",
            onClick: R[2] || (R[2] = (T) => S.$emit("close"))
          }, {
            default: g(() => [...R[8] || (R[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Le, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: C
          }, {
            default: g(() => [
              $(f(c.value ? "Committing..." : u.value ? `Force Commit & ${m.value}` : `Commit & ${m.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (a(), P(Le, {
          key: 1,
          variant: "primary",
          onClick: R[3] || (R[3] = (T) => S.$emit("close"))
        }, {
          default: g(() => [...R[9] || (R[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), mC = /* @__PURE__ */ Se(fC, [["__scopeId", "data-v-a8990107"]]), vC = { class: "export-warnings" }, pC = {
  key: 0,
  class: "success-header"
}, gC = { class: "success-summary" }, hC = { class: "success-description" }, yC = { class: "warning-header" }, wC = { class: "warning-summary" }, _C = { class: "warning-title" }, kC = { class: "warning-description" }, bC = { class: "models-section" }, $C = { class: "models-list" }, CC = { class: "model-info" }, xC = { class: "model-filename" }, SC = { class: "model-workflows" }, IC = ["onClick"], EC = /* @__PURE__ */ $e({
  __name: "ExportWarningsModal",
  props: {
    models: {},
    mode: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(!1), r = b(null), c = D(() => o.mode || "export"), u = D(() => c.value === "publish" ? "Publish" : "Export"), d = D(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function v() {
      r.value = null, n("revalidate");
    }
    return (m, p) => (a(), i(j, null, [
      k(It, {
        title: c.value === "publish" ? "Publish Warnings" : "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => m.$emit("cancel"))
      }, {
        body: g(() => [
          s("div", vC, [
            e.models.length === 0 ? (a(), i("div", pC, [
              p[5] || (p[5] = s("span", { class: "success-icon" }, [
                s("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1)),
              s("div", gC, [
                p[4] || (p[4] = s("h3", { class: "success-title" }, "All models have source URLs", -1)),
                s("p", hC, " Your environment is ready to " + f(c.value) + ". Recipients will be able to download all models automatically. ", 1)
              ])
            ])) : (a(), i(j, { key: 1 }, [
              s("div", yC, [
                p[6] || (p[6] = s("span", { class: "warning-icon" }, [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                    s("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
                  ])
                ], -1)),
                s("div", wC, [
                  s("h3", _C, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  s("p", kC, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or ` + f(c.value) + " anyway. ", 1)
                ])
              ]),
              s("div", bC, [
                s("div", $C, [
                  (a(!0), i(j, null, we(d.value, (w) => (a(), i("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    s("div", CC, [
                      s("div", xC, f(w.filename), 1),
                      s("div", SC, " Used by: " + f(w.workflows.join(", ")), 1)
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      onClick: (y) => r.value = w.hash
                    }, " Add Source ", 8, IC)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (a(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: p[0] || (p[0] = (w) => l.value = !0)
                }, " Show " + f(e.models.length - 3) + " more model" + f(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: g(() => [
          k(Le, {
            variant: "secondary",
            onClick: p[1] || (p[1] = (w) => m.$emit("cancel"))
          }, {
            default: g(() => [
              $(" Cancel " + f(c.value === "publish" ? "Publish" : "Export"), 1)
            ]),
            _: 1
          }),
          k(Le, {
            variant: "primary",
            onClick: p[2] || (p[2] = (w) => m.$emit("confirm"))
          }, {
            default: g(() => [
              $(f(e.models.length === 0 ? u.value : `${u.value} Anyway`), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]),
      r.value ? (a(), P(Cl, {
        key: 0,
        identifier: r.value,
        onClose: v
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), TC = /* @__PURE__ */ Se(EC, [["__scopeId", "data-v-9b6d5fce"]]), MC = { class: "export-card" }, PC = { class: "export-path-row" }, RC = { class: "export-actions" }, NC = {
  key: 1,
  class: "export-warning"
}, LC = /* @__PURE__ */ $e({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = gt(), c = b(""), u = b(!1), d = b(!1), v = b(!1), m = b(null), p = b(!1), w = b(null), y = b(!1), _ = b(!1), x = D(() => {
      var Y;
      return ((Y = t.environmentName) == null ? void 0 : Y.trim()) || null;
    }), C = D(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = D(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), R = D(() => u.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function T() {
      u.value = !0, m.value = null;
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y, Y.can_export ? Y.warnings.models_without_sources.length > 0 ? _.value = !0 : await J() : y.value = !0;
      } catch (Y) {
        m.value = {
          status: "error",
          message: Y instanceof Error ? Y.message : "Validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function E() {
      _.value = !1, await J();
    }
    async function N() {
      y.value = !1, u.value = !0;
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y, Y.can_export ? Y.warnings.models_without_sources.length > 0 ? _.value = !0 : await J() : y.value = !0;
      } catch (Y) {
        m.value = {
          status: "error",
          message: Y instanceof Error ? Y.message : "Re-validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function O() {
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y;
      } catch (Y) {
        console.error("Re-validation failed:", Y);
      }
    }
    async function J() {
      d.value = !0;
      try {
        const Y = x.value ? await r(x.value, c.value || void 0) : await n(c.value || void 0);
        m.value = Y;
      } catch (Y) {
        m.value = {
          status: "error",
          message: Y instanceof Error ? Y.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function M() {
      var Y;
      if ((Y = m.value) != null && Y.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (Z) {
          console.error("Failed to copy path:", Z);
        }
    }
    async function V() {
      var Y;
      if ((Y = m.value) != null && Y.path) {
        v.value = !0;
        try {
          const Z = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!Z.ok)
            throw new Error(`Download failed: ${Z.statusText}`);
          const ie = await Z.blob(), ye = URL.createObjectURL(ie), se = m.value.path.split("/").pop() || "environment-export.tar.gz", q = document.createElement("a");
          q.href = ye, q.download = se, document.body.appendChild(q), q.click(), document.body.removeChild(q), URL.revokeObjectURL(ye);
        } catch (Z) {
          console.error("Failed to download:", Z), alert(`Download failed: ${Z instanceof Error ? Z.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (Y, Z) => (a(), i(j, null, [
      k(At, null, Yt({
        content: g(() => [
          k(St, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              s("div", MC, [
                Z[7] || (Z[7] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", PC, [
                  k(ho, {
                    modelValue: c.value,
                    "onUpdate:modelValue": Z[1] || (Z[1] = (ie) => c.value = ie),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                s("div", RC, [
                  k(Te, {
                    variant: "primary",
                    size: "md",
                    loading: u.value || d.value,
                    disabled: u.value || d.value,
                    onClick: T
                  }, {
                    default: g(() => [
                      Z[6] || (Z[6] = s("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        s("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        s("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      $(" " + f(R.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (a(), P(St, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              k(Vt, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: g(() => [
                  $(f(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  $(f(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  $(f(m.value.status === "success" ? S.value : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    k(_t, { label: "Saved to:" }, {
                      default: g(() => [
                        k(W$, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (a(), P(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (a(), i("div", NC, [...Z[8] || (Z[8] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    k(Te, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: V
                    }, {
                      default: g(() => [...Z[9] || (Z[9] = [
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
                    k(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: M
                    }, {
                      default: g(() => [...Z[10] || (Z[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(Te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: Z[2] || (Z[2] = (ie) => m.value = null)
                    }, {
                      default: g(() => [...Z[11] || (Z[11] = [
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
            k(Ut, {
              title: C.value,
              "show-info": !0,
              onInfoClick: Z[0] || (Z[0] = (ie) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      k(cs, {
        show: p.value,
        title: "What Gets Exported",
        onClose: Z[3] || (Z[3] = (ie) => p.value = !1)
      }, {
        content: g(() => [...Z[12] || (Z[12] = [
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
      y.value && w.value ? (a(), P(mC, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: Z[4] || (Z[4] = (ie) => y.value = !1),
        onCommitted: N
      }, null, 8, ["issues"])) : h("", !0),
      _.value && w.value ? (a(), P(TC, {
        key: 1,
        models: w.value.warnings.models_without_sources,
        onConfirm: E,
        onCancel: Z[5] || (Z[5] = (ie) => _.value = !1),
        onRevalidate: O
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), DC = /* @__PURE__ */ Se(LC, [["__scopeId", "data-v-253214a4"]]), OC = { class: "file-input-wrapper" }, AC = ["accept", "multiple", "disabled"], UC = /* @__PURE__ */ $e({
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
    const n = o, l = b(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return t({
      triggerInput: r
    }), (u, d) => (a(), i("div", OC, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, AC),
      k(Te, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
          ot(u.$slots, "default", {}, () => [
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
}), zC = /* @__PURE__ */ Se(UC, [["__scopeId", "data-v-cd192091"]]), VC = {
  key: 0,
  class: "drop-zone-empty"
}, FC = { class: "drop-zone-text" }, BC = { class: "drop-zone-primary" }, WC = { class: "drop-zone-secondary" }, GC = { class: "drop-zone-actions" }, jC = {
  key: 1,
  class: "drop-zone-file"
}, HC = { class: "file-info" }, qC = { class: "file-details" }, KC = { class: "file-name" }, JC = { class: "file-size" }, QC = /* @__PURE__ */ $e({
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
    const o = t, n = b(!1), l = b(null), r = b(0), c = D(() => l.value !== null), u = D(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = D(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var S;
      C.stopPropagation(), r.value++, (S = C.dataTransfer) != null && S.types.includes("Files") && (n.value = !0);
    }
    function m(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w(C) {
      var R;
      C.stopPropagation(), r.value = 0, n.value = !1;
      const S = (R = C.dataTransfer) == null ? void 0 : R.files;
      S && S.length > 0 && _(S[0]);
    }
    function y(C) {
      C.length > 0 && _(C[0]);
    }
    function _(C) {
      l.value = C, o("fileSelected", C);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (C, S) => (a(), i("div", {
      class: Fe(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: vt(v, ["prevent"]),
      onDragover: vt(m, ["prevent"]),
      onDragleave: vt(p, ["prevent"]),
      onDrop: vt(w, ["prevent"])
    }, [
      c.value ? (a(), i("div", jC, [
        s("div", HC, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", qC, [
            s("div", KC, f(u.value), 1),
            s("div", JC, f(d.value), 1)
          ])
        ]),
        k(Te, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: g(() => [...S[2] || (S[2] = [
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
      ])) : (a(), i("div", VC, [
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
        s("div", FC, [
          s("p", BC, f(e.primaryText), 1),
          s("p", WC, f(e.secondaryText), 1)
        ]),
        s("div", GC, [
          k(zC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: y
          }, {
            default: g(() => [
              $(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), YC = /* @__PURE__ */ Se(QC, [["__scopeId", "data-v-0f79cb86"]]), XC = { class: "commit-hash" }, ZC = /* @__PURE__ */ $e({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = D(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", XC, f(o.value), 1));
  }
}), oc = /* @__PURE__ */ Se(ZC, [["__scopeId", "data-v-7c333cc6"]]), ex = { class: "import-preview" }, tx = { class: "preview-header" }, sx = {
  key: 0,
  class: "source-env"
}, ox = { class: "preview-content" }, nx = { class: "preview-section" }, ax = { class: "section-header" }, lx = { class: "section-info" }, ix = { class: "section-count" }, rx = {
  key: 0,
  class: "item-list"
}, cx = { class: "item-name" }, ux = {
  key: 0,
  class: "item-more"
}, dx = { class: "preview-section" }, fx = { class: "section-header" }, mx = { class: "section-info" }, vx = { class: "section-count" }, px = {
  key: 0,
  class: "item-list"
}, gx = { class: "item-details" }, hx = { class: "item-name" }, yx = { class: "item-meta" }, wx = {
  key: 0,
  class: "item-more"
}, _x = { class: "preview-section" }, kx = { class: "section-header" }, bx = { class: "section-info" }, $x = { class: "section-count" }, Cx = {
  key: 0,
  class: "item-list"
}, xx = { class: "item-name" }, Sx = {
  key: 0,
  class: "item-more"
}, Ix = {
  key: 0,
  class: "preview-section"
}, Ex = { class: "git-info" }, Tx = /* @__PURE__ */ $e({
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
    const t = e, o = D(() => t.workflows.length), n = D(() => t.models.length), l = D(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), i("div", ex, [
      s("div", tx, [
        k(ns, null, {
          default: g(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", sx, [
          u[1] || (u[1] = $(" From: ", -1)),
          k(el, null, {
            default: g(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      s("div", ox, [
        s("div", nx, [
          s("div", ax, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", lx, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", ix, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", rx, [
            (a(!0), i(j, null, we(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", cx, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", ux, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        s("div", dx, [
          s("div", fx, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", mx, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", vx, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", px, [
            (a(!0), i(j, null, we(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", gx, [
                s("span", hx, f(d.filename), 1),
                s("span", yx, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", wx, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        s("div", _x, [
          s("div", kx, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", bx, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", $x, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", Cx, [
            (a(!0), i(j, null, we(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", xx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", Sx, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", Ix, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", Ex, [
            e.gitBranch ? (a(), P(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                k(el, null, {
                  default: g(() => [
                    $(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : h("", !0),
            e.gitCommit ? (a(), P(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                k(oc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), Mx = /* @__PURE__ */ Se(Tx, [["__scopeId", "data-v-182fe113"]]), Px = { class: "import-config" }, Rx = { class: "config-container" }, Nx = { class: "config-field" }, Lx = { class: "input-wrapper" }, Dx = ["value"], Ox = {
  key: 0,
  class: "validating-indicator"
}, Ax = {
  key: 1,
  class: "valid-indicator"
}, Ux = {
  key: 0,
  class: "field-error"
}, zx = { class: "config-field" }, Vx = { class: "strategy-options" }, Fx = ["value", "checked", "onChange"], Bx = { class: "strategy-content" }, Wx = { class: "strategy-label" }, Gx = { class: "strategy-description" }, jx = { class: "config-field switch-field" }, Hx = { class: "switch-label" }, qx = ["checked"], Kx = { class: "advanced-section" }, Jx = { class: "advanced-content" }, Qx = { class: "config-field" }, Yx = ["value"], Xx = ["value"], Zx = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = b(!1), r = b(!1);
    kt(() => o.nameError, (m) => {
      l.value = !1, r.value = !m && o.name.length > 0;
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
    function d(m) {
      const p = m.target.value;
      n("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (m, p) => (a(), i("div", Px, [
      k(ns, null, {
        default: g(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", Rx, [
        s("div", Nx, [
          k(Pn, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", Lx, [
            s("input", {
              type: "text",
              class: Fe(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Dx),
            l.value ? (a(), i("span", Ox, "...")) : r.value ? (a(), i("span", Ax, "✓")) : h("", !0)
          ]),
          e.nameError ? (a(), i("div", Ux, f(e.nameError), 1)) : h("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", zx, [
          k(Pn, null, {
            default: g(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", Vx, [
            (a(), i(j, null, we(c, (w) => s("label", {
              key: w.value,
              class: Fe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (y) => n("update:modelStrategy", w.value)
              }, null, 40, Fx),
              s("div", Bx, [
                s("span", Wx, f(w.label), 1),
                s("span", Gx, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", jx, [
          s("label", Hx, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, qx),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", Kx, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", Jx, [
            s("div", Qx, [
              k(Pn, null, {
                default: g(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(j, null, we(st(Sl), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, Xx))), 128))
              ], 40, Yx)
            ])
          ])
        ])
      ])
    ]));
  }
}), e3 = /* @__PURE__ */ Se(Zx, [["__scopeId", "data-v-89ea06a1"]]), t3 = { class: "import-flow" }, s3 = {
  key: 0,
  class: "import-empty"
}, o3 = { class: "git-import-section" }, n3 = { class: "git-url-input-row" }, a3 = ["disabled"], l3 = {
  key: 0,
  class: "git-error"
}, i3 = {
  key: 1,
  class: "import-configure"
}, r3 = { class: "selected-file-bar" }, c3 = {
  key: 0,
  class: "file-bar-content"
}, u3 = { class: "file-bar-info" }, d3 = { class: "file-bar-name" }, f3 = { class: "file-bar-size" }, m3 = {
  key: 1,
  class: "file-bar-content"
}, v3 = { class: "file-bar-info" }, p3 = { class: "file-bar-name" }, g3 = {
  key: 0,
  class: "preview-loading"
}, h3 = { class: "import-actions" }, y3 = {
  key: 2,
  class: "import-progress"
}, w3 = { class: "creating-intro" }, _3 = {
  key: 0,
  class: "progress-warning"
}, k3 = {
  key: 1,
  class: "import-error"
}, b3 = { class: "error-message" }, $3 = {
  key: 3,
  class: "import-complete"
}, C3 = { class: "complete-message" }, x3 = { class: "complete-title" }, S3 = { class: "complete-details" }, I3 = { class: "complete-actions" }, E3 = /* @__PURE__ */ $e({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Ee, G, ee, H;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: m } = gt();
    let p = null;
    const w = b(null), y = b(n.resumeImport ?? !1), _ = b(!1), x = b(!1), C = b(""), S = b(!1), R = b(null), T = b(""), E = b(null), N = b(!1), O = b(null), J = b(null), M = b({
      name: ((Ee = n.initialProgress) == null ? void 0 : Ee.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), V = b(null), Y = b({
      message: ((G = n.initialProgress) == null ? void 0 : G.message) ?? "Preparing import...",
      phase: ((ee = n.initialProgress) == null ? void 0 : ee.phase) ?? "",
      progress: ((H = n.initialProgress) == null ? void 0 : H.progress) ?? 0,
      error: null
    }), Z = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ie = D(() => {
      if (!J.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const X = J.value;
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
    }), ye = D(() => !S.value && !R.value && J.value && M.value.name.length > 0 && !V.value && (w.value || E.value));
    async function se(X) {
      w.value = X, S.value = !0, R.value = null, J.value = null;
      try {
        const xe = await r(X);
        J.value = xe;
      } catch (xe) {
        R.value = xe instanceof Error ? xe.message : "Failed to analyze file", console.error("Preview error:", xe);
      } finally {
        S.value = !1;
      }
    }
    function q() {
      w.value = null, E.value = null, T.value = "", O.value = null, _.value = !1, x.value = !1, C.value = "", J.value = null, R.value = null, M.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, V.value = null, l("source-cleared");
    }
    function ae() {
      Pe(), q(), y.value = !1, S.value = !1, N.value = !1, Y.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Ue() {
      if (T.value.trim()) {
        N.value = !0, O.value = null;
        try {
          const X = await c(T.value.trim());
          E.value = T.value.trim(), J.value = X;
        } catch (X) {
          O.value = X instanceof Error ? X.message : "Failed to analyze repository";
        } finally {
          N.value = !1;
        }
      }
    }
    function oe(X) {
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
        const xe = await u(X);
        V.value = xe.valid ? null : xe.error || "Invalid name";
      } catch {
        V.value = "Failed to validate name";
      }
    }
    async function A() {
      if (M.value.name && !(!w.value && !E.value)) {
        y.value = !0, _.value = !1, Y.value = { message: `Creating environment '${M.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let X;
          if (w.value)
            X = await d(
              w.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else if (E.value)
            X = await v(
              E.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          X.status === "started" ? me() : (x.value = !1, C.value = X.message, y.value = !1, _.value = !0);
        } catch (X) {
          x.value = !1, C.value = X instanceof Error ? X.message : "Unknown error occurred during import", y.value = !1, _.value = !0;
        }
      }
    }
    async function me() {
      if (p) return;
      const X = async () => {
        try {
          const ue = await m();
          return Y.value = {
            message: ue.message,
            phase: ue.phase || "",
            progress: ue.progress ?? (ue.state === "importing" ? 50 : 0),
            error: ue.error || null
          }, ue.state === "complete" ? (Pe(), x.value = !0, C.value = `Environment '${ue.environment_name}' created successfully`, y.value = !1, _.value = !0, ue.environment_name && l("import-complete", ue.environment_name, M.value.switchAfterImport), !1) : ue.state === "error" ? (Pe(), x.value = !1, C.value = ue.error || ue.message, y.value = !1, _.value = !0, !1) : !0;
        } catch (ue) {
          return console.error("Failed to poll import progress:", ue), !0;
        }
      };
      await X() && (p = setInterval(async () => {
        await X() || Pe();
      }, 2e3));
    }
    function Pe() {
      p && (clearInterval(p), p = null);
    }
    function He(X) {
      return X < 1024 ? `${X} B` : X < 1024 * 1024 ? `${(X / 1024).toFixed(1)} KB` : X < 1024 * 1024 * 1024 ? `${(X / (1024 * 1024)).toFixed(1)} MB` : `${(X / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ct(async () => {
      try {
        const X = await m();
        console.log("[ComfyGit ImportFlow] Import progress check:", X.state, X), X.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", X.environment_name), y.value = !0, M.value.name = X.environment_name || M.value.name || "", Y.value = {
          progress: X.progress ?? 0,
          message: X.message || "Importing...",
          phase: X.phase || "",
          error: null
        }, me());
      } catch (X) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", X);
      }
    }), t({
      handleReset: ae,
      isImporting: y,
      canImport: ye
    }), (X, xe) => {
      var ue;
      return a(), i("div", t3, [
        !w.value && !E.value && !y.value ? (a(), i("div", s3, [
          k(YC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: se
          }),
          xe[7] || (xe[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", o3, [
            xe[5] || (xe[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", n3, [
              Tt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": xe[0] || (xe[0] = (le) => T.value = le),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: fs(Ue, ["enter"]),
                disabled: N.value
              }, null, 40, a3), [
                [$o, T.value]
              ]),
              k(Te, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || N.value,
                onClick: Ue
              }, {
                default: g(() => [
                  $(f(N.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            O.value ? (a(), i("div", l3, f(O.value), 1)) : h("", !0),
            xe[6] || (xe[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !y.value && !_.value ? (a(), i("div", i3, [
          s("div", r3, [
            w.value ? (a(), i("div", c3, [
              xe[8] || (xe[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", u3, [
                s("div", d3, f(w.value.name), 1),
                s("div", f3, f(He(w.value.size)), 1)
              ])
            ])) : E.value ? (a(), i("div", m3, [
              xe[10] || (xe[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", v3, [
                s("div", p3, f(oe(E.value)), 1),
                xe[9] || (xe[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            k(Te, {
              variant: "ghost",
              size: "sm",
              onClick: q
            }, {
              default: g(() => [...xe[11] || (xe[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (a(), i("div", g3, [...xe[12] || (xe[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : R.value ? (a(), P(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [R.value]
          }, null, 8, ["details"])) : J.value ? (a(), P(Mx, {
            key: 2,
            "source-environment": ie.value.sourceEnvironment,
            workflows: ie.value.workflows,
            models: ie.value.models,
            nodes: ie.value.nodes,
            "git-branch": ie.value.gitBranch,
            "git-commit": ie.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          J.value ? (a(), P(e3, {
            key: 3,
            name: M.value.name,
            "onUpdate:name": xe[1] || (xe[1] = (le) => M.value.name = le),
            "model-strategy": M.value.modelStrategy,
            "onUpdate:modelStrategy": xe[2] || (xe[2] = (le) => M.value.modelStrategy = le),
            "torch-backend": M.value.torchBackend,
            "onUpdate:torchBackend": xe[3] || (xe[3] = (le) => M.value.torchBackend = le),
            "switch-after-import": M.value.switchAfterImport,
            "onUpdate:switchAfterImport": xe[4] || (xe[4] = (le) => M.value.switchAfterImport = le),
            "name-error": V.value,
            onValidateName: ge
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          M.value.modelStrategy === "skip" && ((ue = J.value) != null && ue.models_needing_download) ? (a(), P(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${J.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          s("div", h3, [
            k(Te, {
              variant: "secondary",
              size: "md",
              onClick: q
            }, {
              default: g(() => [...xe[13] || (xe[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Te, {
              variant: "primary",
              size: "md",
              disabled: !ye.value,
              onClick: A
            }, {
              default: g(() => [...xe[14] || (xe[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (a(), i("div", y3, [
          s("p", w3, [
            xe[15] || (xe[15] = $(" Importing environment ", -1)),
            s("strong", null, f(M.value.name), 1),
            xe[16] || (xe[16] = $("... ", -1))
          ]),
          k(jn, {
            progress: Y.value.progress,
            message: Y.value.message,
            "current-phase": Y.value.phase,
            variant: Y.value.error ? "error" : "default",
            "show-steps": !0,
            steps: Z
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          Y.value.error ? h("", !0) : (a(), i("p", _3, " This may take several minutes. Please wait... ")),
          Y.value.error ? (a(), i("div", k3, [
            s("p", b3, f(Y.value.error), 1)
          ])) : h("", !0)
        ])) : _.value ? (a(), i("div", $3, [
          s("div", {
            class: Fe(["complete-icon", x.value ? "success" : "error"])
          }, f(x.value ? "✓" : "✕"), 3),
          s("div", C3, [
            s("div", x3, f(x.value ? "Import Successful" : "Import Failed"), 1),
            s("div", S3, f(C.value), 1)
          ]),
          s("div", I3, [
            k(Te, {
              variant: "primary",
              size: "md",
              onClick: ae
            }, {
              default: g(() => [...xe[17] || (xe[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), nc = /* @__PURE__ */ Se(E3, [["__scopeId", "data-v-72cbc04e"]]), T3 = /* @__PURE__ */ $e({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, n = b(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (a(), i(j, null, [
      k(At, null, Yt({
        content: g(() => [
          k(nc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(Ut, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      k(cs, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => n.value = !1)
      }, {
        content: g(() => [...c[2] || (c[2] = [
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
}), M3 = /* @__PURE__ */ Se(T3, [["__scopeId", "data-v-41b1f298"]]), P3 = { class: "base-tabs" }, R3 = ["disabled", "onClick"], N3 = {
  key: 0,
  class: "base-tabs__badge"
}, L3 = /* @__PURE__ */ $e({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || n("update:modelValue", r);
    }
    return (r, c) => (a(), i("div", P3, [
      (a(!0), i(j, null, we(e.tabs, (u) => (a(), i("button", {
        key: u.id,
        class: Fe([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        $(f(u.label) + " ", 1),
        u.badge ? (a(), i("span", N3, f(u.badge), 1)) : h("", !0)
      ], 10, R3))), 128))
    ]));
  }
}), Il = /* @__PURE__ */ Se(L3, [["__scopeId", "data-v-ad5e6cad"]]), D3 = { class: "commit-list" }, O3 = /* @__PURE__ */ $e({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", D3, [
      ot(t.$slots, "default", {}, void 0)
    ]));
  }
}), ac = /* @__PURE__ */ Se(O3, [["__scopeId", "data-v-8c5ee761"]]), A3 = { class: "commit-message" }, U3 = { class: "commit-date" }, z3 = /* @__PURE__ */ $e({
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
    return (r, c) => (a(), i("div", {
      class: Fe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      k(oc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", A3, f(e.message), 1),
      s("span", U3, f(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = vt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), lc = /* @__PURE__ */ Se(z3, [["__scopeId", "data-v-dd7c621b"]]), V3 = /* @__PURE__ */ $e({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = D(() => `HISTORY (${t.currentRef || "detached"})`);
    return (n, l) => (a(), P(At, null, Yt({
      content: g(() => [
        e.commits.length === 0 ? (a(), P(rs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), P(ac, { key: 1 }, {
          default: g(() => [
            (a(!0), i(j, null, we(e.commits, (r) => (a(), P(lc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => n.$emit("select", r)
            }, {
              actions: g(() => [
                k(Te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => n.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: g(() => [...l[0] || (l[0] = [
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
        fn: g(() => [
          k(Ut, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), F3 = /* @__PURE__ */ Se(V3, [["__scopeId", "data-v-fa4bf3a1"]]), B3 = { class: "branch-create-form" }, W3 = { class: "form-actions" }, G3 = /* @__PURE__ */ $e({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = b(""), l = D(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), i("div", B3, [
      k(ho, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", W3, [
        k(Te, {
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
        k(Te, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: g(() => [...d[2] || (d[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), j3 = /* @__PURE__ */ Se(G3, [["__scopeId", "data-v-7c500394"]]), H3 = { class: "branch-list-item__indicator" }, q3 = { class: "branch-list-item__name" }, K3 = {
  key: 0,
  class: "branch-list-item__actions"
}, J3 = {
  key: 0,
  class: "branch-list-item__current-label"
}, Q3 = /* @__PURE__ */ $e({
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
      s("span", H3, f(e.isCurrent ? "●" : "○"), 1),
      s("span", q3, f(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", K3, [
        ot(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", J3, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Y3 = /* @__PURE__ */ Se(Q3, [["__scopeId", "data-v-c6581a24"]]), X3 = { class: "header-info" }, Z3 = { class: "branch-name" }, e5 = {
  key: 0,
  class: "current-badge"
}, t5 = { class: "branch-meta" }, s5 = { key: 0 }, o5 = {
  key: 0,
  class: "meta-note"
}, n5 = {
  key: 0,
  class: "loading"
}, a5 = {
  key: 1,
  class: "empty-state"
}, l5 = /* @__PURE__ */ $e({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = gt(), n = b([]), l = b(!1), r = b(!0);
    return ct(async () => {
      try {
        const c = await o(t.branchName, 50);
        n.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (a(), P(It, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: g(() => [
        s("div", X3, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", Z3, f(e.branchName), 1),
          e.isCurrent ? (a(), i("span", e5, "CURRENT")) : h("", !0)
        ]),
        k(Le, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
        }, {
          default: g(() => [...u[5] || (u[5] = [
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
      body: g(() => [
        s("div", t5, [
          r.value ? (a(), i("span", s5, "Loading...")) : (a(), i(j, { key: 1 }, [
            s("span", null, f(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", o5, "(showing first " + f(n.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", n5, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", a5, " No commits found on this branch ")) : (a(), P(ac, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (a(!0), i(j, null, we(n.value, (d) => (a(), P(lc, {
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
        e.isCurrent ? h("", !0) : (a(), P(Te, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: g(() => [...u[6] || (u[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (a(), P(Le, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: g(() => [...u[7] || (u[7] = [
            $(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), i5 = /* @__PURE__ */ Se(l5, [["__scopeId", "data-v-2e5437cc"]]), r5 = {
  key: 2,
  class: "branch-list"
}, c5 = /* @__PURE__ */ $e({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = b(!1), l = b(null);
    function r(m) {
      o("create", m), c();
    }
    function c() {
      n.value = !1;
    }
    function u(m) {
      l.value = m;
    }
    function d(m) {
      l.value = null, o("delete", m);
    }
    function v(m) {
      l.value = null, o("switch", m);
    }
    return (m, p) => (a(), P(At, null, Yt({
      content: g(() => [
        n.value ? (a(), P(j3, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : h("", !0),
        e.branches.length === 0 ? (a(), P(rs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", r5, [
          (a(!0), i(j, null, we(e.branches, (w) => (a(), P(Y3, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (y) => u(w)
          }, {
            actions: g(() => [
              w.is_current ? h("", !0) : (a(), P(Te, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: vt((y) => o("switch", w.name), ["stop"])
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
        l.value ? (a(), P(i5, {
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
          k(Ut, { title: "BRANCHES" }, {
            actions: g(() => [
              n.value ? h("", !0) : (a(), P(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => n.value = !0)
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
}), u5 = /* @__PURE__ */ Se(c5, [["__scopeId", "data-v-a3de96cc"]]);
function ic(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const d5 = { class: "remote-url-display" }, f5 = ["title"], m5 = ["title"], v5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, p5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, g5 = /* @__PURE__ */ $e({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = b(!1), n = D(() => {
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
    return (r, c) => (a(), i("div", d5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, f5),
      s("button", {
        class: Fe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", p5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", v5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, m5)
    ]));
  }
}), h5 = /* @__PURE__ */ Se(g5, [["__scopeId", "data-v-7768a58d"]]), y5 = { class: "remote-title" }, w5 = {
  key: 0,
  class: "default-badge"
}, _5 = {
  key: 1,
  class: "sync-badge"
}, k5 = {
  key: 0,
  class: "ahead"
}, b5 = {
  key: 1,
  class: "behind"
}, $5 = {
  key: 1,
  class: "synced"
}, C5 = ["href"], x5 = {
  key: 1,
  class: "remote-url-text"
}, S5 = /* @__PURE__ */ $e({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = D(() => t.fetchingRemote === t.remote.name), n = D(() => t.remote.is_default), l = D(() => t.syncStatus && t.syncStatus.behind > 0), r = D(() => t.syncStatus && t.syncStatus.ahead > 0), c = D(() => t.remote.push_url !== t.remote.fetch_url), u = D(() => {
      const v = t.remote.fetch_url, m = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return m ? `https://${m[1]}/${m[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = D(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, m) => (a(), P(Vt, {
      status: n.value ? "synced" : void 0
    }, Yt({
      icon: g(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        s("div", y5, [
          s("span", null, f(e.remote.name), 1),
          n.value ? (a(), i("span", w5, "DEFAULT")) : h("", !0),
          e.syncStatus ? (a(), i("span", _5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", k5, "↑" + f(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", b5, "↓" + f(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (a(), i("span", $5, "✓ synced"))
          ])) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        u.value ? (a(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: m[0] || (m[0] = vt(() => {
          }, ["stop"]))
        }, f(d.value), 9, C5)) : (a(), i("span", x5, f(d.value), 1))
      ]),
      actions: g(() => [
        k(Te, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: m[1] || (m[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...m[6] || (m[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(Te, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: m[2] || (m[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            $(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Te, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: m[3] || (m[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            $(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Te, {
          variant: "secondary",
          size: "xs",
          onClick: m[4] || (m[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...m[7] || (m[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? h("", !0) : (a(), P(Te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[5] || (m[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...m[8] || (m[8] = [
            $(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), P(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              k(h5, {
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
}), I5 = /* @__PURE__ */ Se(S5, [["__scopeId", "data-v-8310f3a8"]]), E5 = ["for"], T5 = {
  key: 0,
  class: "base-form-field-required"
}, M5 = { class: "base-form-field-input" }, P5 = {
  key: 1,
  class: "base-form-field-error"
}, R5 = {
  key: 2,
  class: "base-form-field-hint"
}, N5 = /* @__PURE__ */ $e({
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
    const t = e, o = D(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), i("span", T5, "*")) : h("", !0)
      ], 8, E5)) : h("", !0),
      s("div", M5, [
        ot(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", P5, f(e.error), 1)) : e.hint ? (a(), i("span", R5, f(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ Se(N5, [["__scopeId", "data-v-9a1cf296"]]), L5 = { class: "remote-form" }, D5 = { class: "form-header" }, O5 = { class: "form-body" }, A5 = {
  key: 0,
  class: "form-error"
}, U5 = { class: "form-actions" }, z5 = /* @__PURE__ */ $e({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = b(!1), c = b(null);
    kt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = D(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          n("submit", l.value);
        } catch (v) {
          c.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, m) => (a(), i("div", L5, [
      s("div", D5, [
        k(ns, null, {
          default: g(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", O5, [
        k(Lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": m[0] || (m[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(Lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": m[1] || (m[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(Lt, { label: "Push URL (optional)" }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": m[2] || (m[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), i("div", A5, f(c.value), 1)) : h("", !0)
      ]),
      s("div", U5, [
        k(Te, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: g(() => [
            $(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(Te, {
          variant: "ghost",
          size: "md",
          onClick: m[3] || (m[3] = (p) => v.$emit("cancel"))
        }, {
          default: g(() => [...m[4] || (m[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), V5 = /* @__PURE__ */ Se(z5, [["__scopeId", "data-v-56021b18"]]), F5 = { class: "conflict-summary-box" }, B5 = { class: "summary-header" }, W5 = { class: "summary-text" }, G5 = { key: 0 }, j5 = {
  key: 1,
  class: "all-resolved"
}, H5 = { class: "summary-progress" }, q5 = { class: "progress-bar" }, K5 = { class: "progress-text" }, J5 = /* @__PURE__ */ $e({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = D(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (n, l) => (a(), i("div", F5, [
      s("div", B5, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", W5, [
          s("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", G5, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), i("p", j5, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      s("div", H5, [
        s("div", q5, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", K5, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Q5 = /* @__PURE__ */ Se(J5, [["__scopeId", "data-v-4e9e6cc9"]]), Y5 = { class: "modal-header" }, X5 = { class: "modal-title" }, Z5 = { class: "modal-body" }, e8 = {
  key: 0,
  class: "error-box"
}, t8 = {
  key: 0,
  class: "error-hint"
}, s8 = {
  key: 1,
  class: "loading-state"
}, o8 = { class: "commit-summary" }, n8 = {
  key: 0,
  class: "commits-section"
}, a8 = { class: "commit-list" }, l8 = { class: "commit-hash" }, i8 = { class: "commit-message" }, r8 = { class: "commit-date" }, c8 = {
  key: 1,
  class: "changes-section"
}, u8 = {
  key: 0,
  class: "change-group",
  open: ""
}, d8 = { class: "change-count" }, f8 = { class: "change-list" }, m8 = {
  key: 0,
  class: "conflict-badge"
}, v8 = {
  key: 1,
  class: "change-group"
}, p8 = { class: "change-count" }, g8 = { class: "change-list" }, h8 = {
  key: 2,
  class: "change-group"
}, y8 = { class: "change-count" }, w8 = { class: "change-list" }, _8 = {
  key: 3,
  class: "strategy-section"
}, k8 = { class: "radio-group" }, b8 = { class: "radio-option" }, $8 = { class: "radio-option" }, C8 = { class: "radio-option" }, x8 = {
  key: 4,
  class: "up-to-date"
}, S8 = { class: "modal-actions" }, _i = "comfygit.pullModelStrategy", I8 = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = b(localStorage.getItem(_i) || "skip");
    kt(l, (C) => {
      localStorage.setItem(_i, C);
    });
    const r = D(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = D(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), u = D(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = D(() => {
      var C;
      return c.value > 0 || u.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), v = D(() => o.preview && ic(o.preview) ? o.preview : null), m = D(() => {
      var C;
      return ((C = v.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = D(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = D(
      () => m.value > 0 && p.value === m.value
    ), y = D(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(C) {
      if (!v.value) return !1;
      const S = C.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((R) => R.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var R, T;
      return a(), P(Ot, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (E) => C.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", Y5, [
              s("h3", X5, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (E) => C.$emit("close"))
              }, "✕")
            ]),
            s("div", Z5, [
              e.error ? (a(), i("div", e8, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, f(e.error), 1),
                  r.value ? (a(), i("p", t8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (a(), i("div", s8, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (R = e.preview) != null && R.has_uncommitted_changes ? (a(), i(j, { key: 2 }, [
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
                s("div", o8, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", n8, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", a8, [
                    (a(!0), i(j, null, we(e.preview.commits, (E) => (a(), i("div", {
                      key: E.hash,
                      class: "commit-item"
                    }, [
                      s("span", l8, f(E.short_hash || E.hash.slice(0, 7)), 1),
                      s("span", i8, f(E.message), 1),
                      s("span", r8, f(E.date_relative || E.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (a(), i("div", c8, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), i("details", u8, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", d8, f(c.value) + " changes", 1)
                    ]),
                    s("div", f8, [
                      (a(!0), i(j, null, we(e.preview.changes.workflows.added, (E) => (a(), i("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128)),
                      (a(!0), i(j, null, we(e.preview.changes.workflows.modified, (E) => (a(), i("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(E) + " ", 1),
                        _(E) ? (a(), i("span", m8, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (a(!0), i(j, null, we(e.preview.changes.workflows.deleted, (E) => (a(), i("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + f(E), 1))), 128))
                    ])
                  ])) : h("", !0),
                  u.value > 0 ? (a(), i("details", v8, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", p8, f(u.value) + " to install", 1)
                    ]),
                    s("div", g8, [
                      (a(!0), i(j, null, we(e.preview.changes.nodes.to_install, (E) => (a(), i("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", h8, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", y8, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", w8, [
                      (a(!0), i(j, null, we(e.preview.changes.models.referenced, (E) => (a(), i("div", {
                        key: E,
                        class: "change-item"
                      }, f(E), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                v.value ? (a(), P(Q5, {
                  key: 2,
                  "conflict-count": m.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", _8, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", k8, [
                    s("label", b8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [Mn, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", $8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [Mn, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", C8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Mn, l.value]
                      ]),
                      S[25] || (S[25] = s("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (a(), i("div", x8, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            s("div", S8, [
              k(Te, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (E) => C.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(j, { key: 0 }, [
                k(Te, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (E) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(Te, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (E) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (a(), P(Te, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (E) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(j, { key: 2 }, [
                v.value && !w.value ? (a(), P(Te, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (E) => n("openConflictResolution"))
                }, {
                  default: g(() => [
                    $(" Resolve Conflicts (" + f(p.value) + "/" + f(m.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), P(Te, {
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
}), E8 = /* @__PURE__ */ Se(I8, [["__scopeId", "data-v-1d633bba"]]), T8 = { class: "modal-header" }, M8 = { class: "modal-title" }, P8 = { class: "modal-body" }, R8 = {
  key: 0,
  class: "error-box"
}, N8 = {
  key: 1,
  class: "loading-state"
}, L8 = {
  key: 2,
  class: "warning-box"
}, D8 = {
  key: 0,
  class: "commits-section"
}, O8 = { class: "commit-list" }, A8 = { class: "commit-hash" }, U8 = { class: "commit-message" }, z8 = { class: "commit-date" }, V8 = { class: "force-option" }, F8 = { class: "checkbox-option" }, B8 = { class: "commit-summary" }, W8 = { key: 0 }, G8 = { key: 1 }, j8 = {
  key: 0,
  class: "info-box"
}, H8 = {
  key: 1,
  class: "commits-section"
}, q8 = { class: "commit-list" }, K8 = { class: "commit-hash" }, J8 = { class: "commit-message" }, Q8 = { class: "commit-date" }, Y8 = {
  key: 2,
  class: "up-to-date"
}, X8 = { class: "modal-actions" }, Z8 = /* @__PURE__ */ $e({
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
  setup(e, { emit: t }) {
    const o = t, n = b(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, c) => {
      var u, d, v;
      return a(), P(Ot, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (m) => r.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", T8, [
              s("h3", M8, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (m) => r.$emit("close"))
              }, "✕")
            ]),
            s("div", P8, [
              e.error ? (a(), i("div", R8, [
                c[9] || (c[9] = s("span", { class: "error-icon" }, "!", -1)),
                s("div", null, [
                  c[8] || (c[8] = s("strong", null, "Push failed", -1)),
                  s("p", null, f(e.error), 1)
                ])
              ])) : h("", !0),
              e.loading ? (a(), i("div", N8, [...c[10] || (c[10] = [
                s("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), i("div", L8, [...c[11] || (c[11] = [
                s("span", { class: "warning-icon" }, "⚠", -1),
                s("div", null, [
                  s("strong", null, "UNCOMMITTED CHANGES"),
                  s("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), i(j, { key: 3 }, [
                c[15] || (c[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "REMOTE HAS NEW COMMITS"),
                    s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), i("div", D8, [
                  c[12] || (c[12] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", O8, [
                    (a(!0), i(j, null, we(e.preview.commits, (m) => (a(), i("div", {
                      key: m.hash,
                      class: "commit-item"
                    }, [
                      s("span", A8, f(m.short_hash || m.hash.slice(0, 7)), 1),
                      s("span", U8, f(m.message), 1),
                      s("span", z8, f(m.date_relative || m.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                s("div", V8, [
                  s("label", F8, [
                    Tt(s("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (m) => n.value = m)
                    }, null, 512), [
                      [Wn, n.value]
                    ]),
                    c[13] || (c[13] = s("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[14] || (c[14] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), i(j, { key: 4 }, [
                s("div", B8, [
                  c[16] || (c[16] = s("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), i("span", W8, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", G8, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), i("div", j8, [...c[17] || (c[17] = [
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
                ])])) : h("", !0),
                e.preview.commits_ahead > 0 ? (a(), i("div", H8, [
                  c[18] || (c[18] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", q8, [
                    (a(!0), i(j, null, we(e.preview.commits, (m) => (a(), i("div", {
                      key: m.hash,
                      class: "commit-item"
                    }, [
                      s("span", K8, f(m.short_hash || m.hash.slice(0, 7)), 1),
                      s("span", J8, f(m.message), 1),
                      s("span", Q8, f(m.date_relative || m.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), i("div", Y8, [
                  c[19] || (c[19] = s("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            s("div", X8, [
              k(Te, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (m) => r.$emit("close"))
              }, {
                default: g(() => [...c[20] || (c[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = e.preview) != null && v.remote_has_new_commits ? (a(), i(j, { key: 0 }, [
                k(Te, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (m) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...c[21] || (c[21] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(Te, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (m) => l(!0))
                }, {
                  default: g(() => [...c[22] || (c[22] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), P(Te, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (m) => l(!1))
              }, {
                default: g(() => [...c[23] || (c[23] = [
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
}), eS = /* @__PURE__ */ Se(Z8, [["__scopeId", "data-v-621a386e"]]), tS = { class: "resolution-choice-group" }, sS = ["disabled"], oS = ["disabled"], nS = /* @__PURE__ */ $e({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", tS, [
      s("button", {
        class: Fe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, sS),
      s("button", {
        class: Fe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, oS)
    ]));
  }
}), aS = /* @__PURE__ */ Se(nS, [["__scopeId", "data-v-985715ed"]]), lS = { class: "conflict-header" }, iS = { class: "conflict-info" }, rS = { class: "workflow-name" }, cS = { class: "conflict-description" }, uS = {
  key: 0,
  class: "resolved-badge"
}, dS = { class: "resolved-text" }, fS = { class: "conflict-hashes" }, mS = { class: "hash-item" }, vS = { class: "hash-item" }, pS = { class: "conflict-actions" }, gS = /* @__PURE__ */ $e({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(o.resolution);
    kt(() => o.resolution, (d) => {
      l.value = d;
    }), kt(l, (d) => {
      d && n("resolve", d);
    });
    const r = D(() => l.value !== null), c = D(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = D(() => {
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
      var m, p;
      return a(), i("div", {
        class: Fe(["conflict-item", { resolved: r.value }])
      }, [
        s("div", lS, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", iS, [
            s("code", rS, f(e.conflict.name) + ".json", 1),
            s("div", cS, f(c.value), 1)
          ]),
          r.value ? (a(), i("div", uS, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", dS, f(u.value), 1)
          ])) : h("", !0)
        ]),
        s("div", fS, [
          s("span", mS, [
            v[3] || (v[3] = $("Your: ", -1)),
            s("code", null, f(((m = e.conflict.base_hash) == null ? void 0 : m.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", vS, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            s("code", null, f(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", pS, [
          k(aS, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), hS = /* @__PURE__ */ Se(gS, [["__scopeId", "data-v-506d3bbf"]]), yS = { class: "resolution-content" }, wS = {
  key: 0,
  class: "error-box"
}, _S = { class: "resolution-header" }, kS = { class: "header-stats" }, bS = { class: "stat" }, $S = { class: "stat-value" }, CS = { class: "stat resolved" }, xS = { class: "stat-value" }, SS = {
  key: 0,
  class: "stat pending"
}, IS = { class: "stat-value" }, ES = { class: "conflicts-list" }, TS = {
  key: 1,
  class: "all-resolved-message"
}, MS = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = D(() => o.resolutions.size), r = D(() => o.workflowConflicts.length - l.value), c = D(() => l.value === o.workflowConflicts.length), u = D(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const y = o.resolutions.get(w);
      return (y == null ? void 0 : y.resolution) ?? null;
    }
    function v(w, y) {
      n("resolve", w, y);
    }
    function m() {
      n("close");
    }
    function p() {
      n("apply");
    }
    return (w, y) => (a(), P(It, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: m
    }, {
      body: g(() => [
        s("div", yS, [
          e.error ? (a(), i("div", wS, [
            y[1] || (y[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              y[0] || (y[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, f(e.error), 1)
            ])
          ])) : h("", !0),
          s("div", _S, [
            s("div", kS, [
              s("div", bS, [
                s("span", $S, f(e.workflowConflicts.length), 1),
                y[2] || (y[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", CS, [
                s("span", xS, f(l.value), 1),
                y[3] || (y[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", SS, [
                s("span", IS, f(r.value), 1),
                y[4] || (y[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            y[5] || (y[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", ES, [
            (a(!0), i(j, null, we(e.workflowConflicts, (_) => (a(), P(hS, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => v(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), i("div", TS, [
            y[6] || (y[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: m
        }, {
          default: g(() => [...y[7] || (y[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[8] || (y[8] = s("div", { class: "footer-spacer" }, null, -1)),
        k(Le, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            $(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), PS = /* @__PURE__ */ Se(MS, [["__scopeId", "data-v-c58d150d"]]), RS = { class: "node-conflict-item" }, NS = { class: "node-header" }, LS = { class: "node-name" }, DS = { class: "node-id" }, OS = { class: "version-comparison" }, AS = { class: "version yours" }, US = { class: "version theirs" }, zS = { class: "chosen-version" }, VS = { class: "chosen" }, FS = { class: "chosen-reason" }, BS = { class: "affected-workflows" }, WS = { class: "wf-source" }, GS = { class: "wf-version" }, jS = /* @__PURE__ */ $e({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", RS, [
      s("div", NS, [
        s("code", LS, f(e.conflict.node_name), 1),
        s("span", DS, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      s("div", OS, [
        s("div", AS, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", US, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      s("div", zS, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", VS, f(e.conflict.chosen_version), 1),
        s("span", FS, f(e.conflict.chosen_reason), 1)
      ]),
      s("details", BS, [
        s("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(j, null, we(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, f(n.name), 1),
            s("span", WS, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", GS, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), HS = /* @__PURE__ */ Se(jS, [["__scopeId", "data-v-8b626725"]]), qS = { class: "validation-content" }, KS = {
  key: 0,
  class: "compatible-message"
}, JS = { class: "conflicts-list" }, QS = {
  key: 2,
  class: "warnings-section"
}, YS = /* @__PURE__ */ $e({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = D(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (a(), P(It, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: g(() => [
        s("div", qS, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", KS, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(j, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", JS, [
              (a(!0), i(j, null, we(e.validation.node_conflicts, (u) => (a(), P(HS, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", QS, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), i(j, null, we(e.validation.warnings, (u, d) => (a(), i("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        k(Le, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(Le, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
        }, {
          default: g(() => [
            $(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), XS = /* @__PURE__ */ Se(YS, [["__scopeId", "data-v-fefd26ed"]]), ZS = {
  key: 0,
  class: "embedded-toolbar"
}, e4 = { class: "embedded-toolbar-search" }, t4 = { key: 0 }, s4 = /* @__PURE__ */ $e({
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
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: m,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: y
    } = gt(), _ = b([]), x = b(null), C = b({}), S = b(!1), R = b(null), T = b(""), E = b(!1), N = b(null), O = b(!1), J = b("add"), M = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), V = D(() => {
      if (!T.value.trim()) return _.value;
      const Ve = T.value.toLowerCase();
      return _.value.filter(
        (Ne) => Ne.name.toLowerCase().includes(Ve) || Ne.fetch_url.toLowerCase().includes(Ve) || Ne.push_url.toLowerCase().includes(Ve)
      );
    });
    async function Y() {
      S.value = !0, R.value = null;
      try {
        const Ve = await n();
        _.value = Ve.remotes, x.value = Ve.current_branch_tracking || null, await Promise.all(
          Ve.remotes.map(async (Ne) => {
            const W = await d(Ne.name);
            W && (C.value[Ne.name] = W);
          })
        );
      } catch (Ve) {
        R.value = Ve instanceof Error ? Ve.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function Z() {
      J.value = "add", M.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function ie(Ve) {
      const Ne = _.value.find((W) => W.name === Ve);
      Ne && (J.value = "edit", M.value = {
        name: Ne.name,
        fetchUrl: Ne.fetch_url,
        pushUrl: Ne.push_url
      }, O.value = !0);
    }
    async function ye(Ve) {
      try {
        J.value === "add" ? await l(Ve.name, Ve.fetchUrl) : await c(Ve.name, Ve.fetchUrl, Ve.pushUrl || void 0), O.value = !1, await Y();
      } catch (Ne) {
        R.value = Ne instanceof Error ? Ne.message : "Operation failed";
      }
    }
    function se() {
      O.value = !1, M.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function q(Ve) {
      N.value = Ve;
      try {
        await u(Ve);
        const Ne = await d(Ve);
        Ne && (C.value[Ve] = Ne), o("toast", `✓ Fetched from ${Ve}`, "success");
      } catch (Ne) {
        o("toast", Ne instanceof Error ? Ne.message : "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function ae(Ve) {
      if (confirm(`Remove remote "${Ve}"?`))
        try {
          await r(Ve), await Y();
        } catch (Ne) {
          R.value = Ne instanceof Error ? Ne.message : "Failed to remove remote";
        }
    }
    function Ue() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const oe = b("idle"), ge = D(() => oe.value === "pull_preview"), A = D(
      () => oe.value === "resolving" || oe.value === "validating"
    ), me = D(
      () => oe.value === "validation_review" || oe.value === "executing"
    ), Pe = b(!1), He = b(null), Ee = b(!1), G = b(null), ee = b(null), H = b(!1), X = b(null), xe = b(null), ue = b(/* @__PURE__ */ new Map()), le = b(null), I = b(null), z = D(() => X.value && ic(X.value) ? X.value : null);
    async function re(Ve) {
      ee.value = Ve, oe.value = "pull_preview", H.value = !0, X.value = null, xe.value = null;
      try {
        X.value = await v(Ve);
      } catch (Ne) {
        xe.value = Ne instanceof Error ? Ne.message : "Failed to load pull preview";
      } finally {
        H.value = !1;
      }
    }
    function Ce() {
      oe.value = "idle", X.value = null, xe.value = null, ee.value = null;
    }
    async function _e(Ve) {
      if (!ee.value) return;
      oe.value = "executing", xe.value = null;
      const Ne = ee.value;
      try {
        const W = await m(Ne, Ve);
        if (W.rolled_back) {
          xe.value = `Pull failed and was rolled back: ${W.error || "Unknown error"}`, oe.value = "pull_preview";
          return;
        }
        ve(), oe.value = "idle", o("toast", `✓ Pulled from ${Ne}`, "success"), await Y();
      } catch (W) {
        xe.value = W instanceof Error ? W.message : "Pull failed", oe.value = "pull_preview";
      }
    }
    function ke() {
      z.value && (oe.value = "resolving", I.value = null);
    }
    function Ae(Ve, Ne) {
      ue.value.set(Ve, { name: Ve, resolution: Ne });
    }
    function ze() {
      oe.value = "pull_preview";
    }
    async function Re() {
      oe.value = "validating", I.value = null;
      try {
        const Ve = Array.from(ue.value.values());
        le.value = await y(ee.value, Ve), oe.value = "validation_review";
      } catch (Ve) {
        I.value = Ve instanceof Error ? Ve.message : "Validation failed", oe.value = "resolving";
      }
    }
    async function Ie() {
      oe.value = "executing";
      const Ve = ee.value;
      try {
        const Ne = Array.from(ue.value.values()), W = await m(Ve, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ne
        });
        if (W.rolled_back) {
          xe.value = `Pull failed and was rolled back: ${W.error || "Unknown error"}`, oe.value = "pull_preview";
          return;
        }
        ve(), oe.value = "idle", o("toast", `✓ Pulled from ${Ve}`, "success"), await Y();
      } catch (Ne) {
        xe.value = Ne instanceof Error ? Ne.message : "Pull failed", oe.value = "validation_review";
      }
    }
    function Je() {
      oe.value = "resolving";
    }
    function Be() {
      ve(), oe.value = "idle";
    }
    function ve() {
      ue.value.clear(), le.value = null, I.value = null, xe.value = null, X.value = null, ee.value = null;
    }
    async function Q(Ve) {
      ee.value = Ve, Pe.value = !0, H.value = !0, He.value = null, G.value = null;
      try {
        He.value = await p(Ve);
      } catch (Ne) {
        G.value = Ne instanceof Error ? Ne.message : "Failed to load push preview";
      } finally {
        H.value = !1;
      }
    }
    function qe() {
      Pe.value = !1, He.value = null, G.value = null, ee.value = null;
    }
    async function be(Ve) {
      var W;
      if (!ee.value) return;
      Ee.value = !0;
      const Ne = ee.value;
      G.value = null;
      try {
        await w(Ne, Ve), qe(), o("toast", `✓ Pushed to ${Ne}`, "success"), await Y();
      } catch (de) {
        const pe = de instanceof Error ? de.message : "Push failed";
        G.value = pe, de instanceof Hr && de.status === 409 && ((W = de.data) != null && W.needs_force) && He.value ? He.value = {
          ...He.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", pe, "error");
      } finally {
        Ee.value = !1;
      }
    }
    function Xe() {
      const Ve = ee.value;
      qe(), Ve && re(Ve);
    }
    return ct(Y), (Ve, Ne) => (a(), i(j, null, [
      k(At, null, Yt({
        content: g(() => [
          S.value ? (a(), P(Cs, {
            key: 0,
            message: "Loading remotes..."
          })) : R.value ? (a(), P(xs, {
            key: 1,
            message: R.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            e.embedded && !O.value ? (a(), i("div", ZS, [
              s("div", e4, [
                k(io, {
                  modelValue: T.value,
                  "onUpdate:modelValue": Ne[2] || (Ne[2] = (W) => T.value = W),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              k(Te, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: g(() => [...Ne[5] || (Ne[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            O.value ? (a(), P(V5, {
              key: 1,
              mode: J.value,
              "remote-name": M.value.name,
              "fetch-url": M.value.fetchUrl,
              "push-url": M.value.pushUrl,
              onSubmit: ye,
              onCancel: se
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            _.value.length && !O.value ? (a(), P(la, {
              key: 2,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), i("span", t4, " • Tracking: " + f(x.value.remote) + "/" + f(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            V.value.length && !O.value ? (a(), P(St, {
              key: 3,
              title: "REMOTES",
              count: V.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(V.value, (W) => (a(), P(I5, {
                  key: W.name,
                  remote: W,
                  "sync-status": C.value[W.name],
                  "fetching-remote": N.value,
                  onFetch: q,
                  onEdit: ie,
                  onRemove: ae,
                  onPull: re,
                  onPush: Q
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !V.value.length && !O.value ? (a(), P(rs, {
              key: 4,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                k(Te, {
                  variant: "primary",
                  onClick: Z
                }, {
                  default: g(() => [...Ne[6] || (Ne[6] = [
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
            k(Ut, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Ne[0] || (Ne[0] = (W) => E.value = !0)
            }, {
              actions: g(() => [
                O.value ? h("", !0) : (a(), P(Te, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: Z
                }, {
                  default: g(() => [...Ne[4] || (Ne[4] = [
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
            O.value ? h("", !0) : (a(), P(io, {
              key: 0,
              modelValue: T.value,
              "onUpdate:modelValue": Ne[1] || (Ne[1] = (W) => T.value = W),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      k(cs, {
        show: E.value,
        title: "About Git Remotes",
        onClose: Ne[3] || (Ne[3] = (W) => E.value = !1)
      }, {
        content: g(() => [...Ne[7] || (Ne[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            $(" The "),
            s("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          k(Te, {
            variant: "link",
            onClick: Ue
          }, {
            default: g(() => [...Ne[8] || (Ne[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(E8, {
        show: ge.value,
        "remote-name": ee.value || "",
        preview: X.value,
        loading: H.value,
        pulling: oe.value === "executing",
        error: xe.value,
        "conflict-resolutions": ue.value,
        onClose: Ce,
        onPull: _e,
        onOpenConflictResolution: ke
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(eS, {
        show: Pe.value,
        "remote-name": ee.value || "",
        preview: He.value,
        loading: H.value,
        pushing: Ee.value,
        error: G.value,
        onClose: qe,
        onPush: be,
        onPullFirst: Xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      A.value && z.value ? (a(), P(PS, {
        key: 0,
        "workflow-conflicts": z.value.workflow_conflicts,
        resolutions: ue.value,
        "operation-type": "pull",
        validating: oe.value === "validating",
        error: I.value,
        onClose: ze,
        onResolve: Ae,
        onApply: Re
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      me.value && le.value ? (a(), P(XS, {
        key: 1,
        validation: le.value,
        "operation-type": "pull",
        executing: oe.value === "executing",
        onProceed: Ie,
        onGoBack: Je,
        onCancel: Be
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), o4 = /* @__PURE__ */ Se(s4, [["__scopeId", "data-v-e03090a2"]]), n4 = /* @__PURE__ */ $e({
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
    ], r = b(o.initialTab ?? "history");
    return kt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (a(), P(At, null, {
      header: g(() => [
        k(Ut, { title: "VERSION CONTROL" })
      ]),
      search: g(() => [
        k(Il, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: g(() => [
        r.value === "history" ? (a(), P(F3, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => n("select", d)),
          onCheckout: u[2] || (u[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), P(u5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => n("switch", d)),
          onCreate: u[4] || (u[4] = (d) => n("create", d)),
          onDelete: u[5] || (u[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), P(o4, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => n("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
});
async function rc(e) {
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
const a4 = { class: "text-viewer-wrapper" }, l4 = ["disabled", "title"], i4 = { class: "text-content" }, r4 = /* @__PURE__ */ $e({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = b(null), n = b("idle");
    async function l() {
      if (t.content)
        try {
          await rc(t.content), n.value = "copied", setTimeout(() => {
            n.value = "idle";
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
    return (u, d) => (a(), i("div", a4, [
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
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy text"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, l4),
        s("pre", i4, f(e.content), 1)
      ], 544)
    ]));
  }
}), c4 = /* @__PURE__ */ Se(r4, [["__scopeId", "data-v-85a537ba"]]), u4 = {
  key: 1,
  class: "manifest-viewer-shell"
}, d4 = { class: "manifest-path" }, f4 = /* @__PURE__ */ $e({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = gt(), o = b(!1), n = b(null), l = b(!1), r = b({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, n.value = null;
      try {
        r.value = await t();
      } catch (u) {
        n.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return ct(c), (u, d) => (a(), i(j, null, [
      k(At, null, Yt({
        content: g(() => [
          o.value ? (a(), P(Cs, {
            key: 0,
            message: "Loading manifest..."
          })) : n.value ? (a(), P(xs, {
            key: 1,
            message: n.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), P(rs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", u4, [
              k(c4, {
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
            k(Ut, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: g(() => [
                k(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: g(() => [
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
      k(cs, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: g(() => [
          d[3] || (d[3] = s("p", null, [
            $(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            s("strong", null, ".cec"),
            $(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", d4, [
            s("code", null, f(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: g(() => [
          k(Te, {
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
}), m4 = /* @__PURE__ */ Se(f4, [["__scopeId", "data-v-814a8fdd"]]), v4 = { class: "log-viewer-wrapper" }, p4 = ["disabled", "title"], g4 = /* @__PURE__ */ $e({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = b(null), n = b("idle"), l = D(() => t.logs.map((v) => ({
      text: t.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var m;
      await Pt();
      const v = (m = o.value) == null ? void 0 : m.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    ct(r), kt(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((m) => m.text).join(`
`);
      try {
        await rc(v), n.value = "copied", setTimeout(() => {
          n.value = "idle";
        }, 2e3);
      } catch (m) {
        console.error("Failed to copy logs:", m);
      }
    }
    function u(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, m) => (a(), i("div", v4, [
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
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, p4),
        (a(!0), i(j, null, we(l.value, (p, w) => (a(), i("div", {
          key: w,
          class: Fe(`log-line log-level-${p.level.toLowerCase()}`)
        }, f(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), cc = /* @__PURE__ */ Se(g4, [["__scopeId", "data-v-5aaf1b88"]]), h4 = /* @__PURE__ */ $e({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = gt(), r = b([]), c = b(!1), u = b(null), d = b(!1), v = b("production"), m = b(null), p = b(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const x = await o();
          v.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function y() {
      try {
        const x = await n();
        x.exists && (m.value = x.path);
      } catch {
      }
    }
    async function _() {
      if (m.value) {
        p.value = !0;
        try {
          await l(m.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return ct(() => {
      w(), y();
    }), (x, C) => (a(), i(j, null, [
      k(At, null, Yt({
        content: g(() => [
          c.value ? (a(), P(Cs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), P(xs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            r.value.length === 0 ? (a(), P(rs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), P(cc, {
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
            k(Ut, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: C[0] || (C[0] = (S) => d.value = !0)
            }, {
              actions: g(() => [
                k(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !m.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(f(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: g(() => [
                    $(f(c.value ? "Loading..." : "Refresh"), 1)
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
      k(cs, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (S) => d.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            C[3] || (C[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, f(v.value), 1),
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
        actions: g(() => [
          k(Te, {
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
}), ki = /* @__PURE__ */ $e({
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
    } = gt(), c = e, u = b(c.initialTab ?? "workspace"), d = b([]), v = b(!1), m = b(null), p = b(!1), w = b(null), y = b(null), _ = b(!1), x = D(() => u.value === "workspace" ? w.value : y.value);
    async function C() {
      v.value = !0, m.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await n(void 0, 500);
      } catch (T) {
        m.value = T instanceof Error ? T.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [T, E] = await Promise.all([
          o(),
          l()
        ]);
        T.exists && (w.value = T.path), E.exists && (y.value = E.path);
      } catch {
      }
    }
    async function R() {
      if (x.value) {
        _.value = !0;
        try {
          await r(x.value);
        } catch (T) {
          console.error("Failed to open log file:", T);
        } finally {
          _.value = !1;
        }
      }
    }
    return kt(u, () => {
      C();
    }), kt(() => c.initialTab, (T) => {
      T && (u.value = T);
    }), ct(() => {
      C(), S();
    }), (T, E) => (a(), i(j, null, [
      k(At, null, Yt({
        content: g(() => [
          v.value ? (a(), P(Cs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), P(xs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            d.value.length === 0 ? (a(), P(rs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (a(), P(cc, {
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
          fn: g(() => [
            k(Ut, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: E[0] || (E[0] = (N) => p.value = !0)
            }, {
              actions: g(() => [
                k(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: R,
                  disabled: !x.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(f(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C,
                  disabled: v.value
                }, {
                  default: g(() => [
                    $(f(v.value ? "Loading..." : "Refresh"), 1)
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
            k(Il, {
              modelValue: u.value,
              "onUpdate:modelValue": E[1] || (E[1] = (N) => u.value = N),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      k(cs, {
        show: p.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (N) => p.value = !1)
      }, {
        content: g(() => [...E[4] || (E[4] = [
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
        actions: g(() => [
          k(Te, {
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
}), y4 = /* @__PURE__ */ $e({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], n = b(t.initialTab ?? "manifest"), l = b(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = b(!1), c = D(() => n.value === "manifest" ? "MANIFEST" : "LOGGING"), u = D(() => n.value === "manifest" ? "About Manifest" : "About Logging");
    return kt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), kt(l, (d) => {
      n.value !== "manifest" && (n.value = d);
    }), (d, v) => (a(), i(j, null, [
      k(At, null, Yt({
        header: g(() => [
          k(Ut, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (m) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: g(() => [
          n.value === "manifest" ? (a(), P(m4, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), P(h4, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), P(ki, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), P(ki, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        n.value !== "manifest" ? {
          name: "search",
          fn: g(() => [
            k(Il, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (m) => l.value = m),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      k(cs, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: v[3] || (v[3] = (m) => r.value = !1)
      }, {
        content: g(() => [
          n.value === "manifest" ? (a(), i(j, { key: 0 }, [
            v[4] || (v[4] = s("p", null, [
              s("strong", null, "Manifest"),
              $(" shows the live "),
              s("strong", null, "pyproject.toml"),
              $(" from the current environment's "),
              s("strong", null, ".cec"),
              $(" directory. ")
            ], -1)),
            v[5] || (v[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (a(), i(j, { key: 1 }, [
            v[7] || (v[7] = s("p", null, [
              s("strong", null, "Logging"),
              $(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = s("p", null, [
              s("strong", null, "Environment"),
              $(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = s("p", null, [
              s("strong", null, "Workspace"),
              $(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              $(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: g(() => [
          k(Te, {
            variant: "primary",
            size: "sm",
            onClick: v[2] || (v[2] = (m) => r.value = !1)
          }, {
            default: g(() => [...v[11] || (v[11] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), w4 = { class: "header-info" }, _4 = { class: "commit-hash" }, k4 = {
  key: 0,
  class: "commit-refs"
}, b4 = { class: "commit-message" }, $4 = { class: "commit-date" }, C4 = {
  key: 0,
  class: "loading"
}, x4 = {
  key: 1,
  class: "changes-section"
}, S4 = { class: "stats-row" }, I4 = { class: "stat" }, E4 = { class: "stat insertions" }, T4 = { class: "stat deletions" }, M4 = {
  key: 0,
  class: "change-group"
}, P4 = {
  key: 1,
  class: "change-group"
}, R4 = {
  key: 0,
  class: "version"
}, N4 = {
  key: 2,
  class: "change-group"
}, L4 = { class: "change-item" }, D4 = /* @__PURE__ */ $e({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = gt(), n = b(null), l = b(!0), r = D(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = D(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return ct(async () => {
      try {
        n.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), P(It, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: g(() => {
        var v, m, p, w;
        return [
          s("div", w4, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", _4, f(((v = n.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((m = e.commit.hash) == null ? void 0 : m.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), i("span", k4, [
              (a(!0), i(j, null, we(n.value.refs, (y) => (a(), i("span", {
                key: y,
                class: "ref-badge"
              }, f(y), 1))), 128))
            ])) : h("", !0)
          ]),
          k(Le, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (y) => u.$emit("close"))
          }, {
            default: g(() => [...d[5] || (d[5] = [
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
      body: g(() => {
        var v, m;
        return [
          s("div", b4, f(((v = n.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", $4, f(((m = n.value) == null ? void 0 : m.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", C4, "Loading details...")) : n.value ? (a(), i("div", x4, [
            s("div", S4, [
              s("span", I4, f(n.value.stats.files_changed) + " files", 1),
              s("span", E4, "+" + f(n.value.stats.insertions), 1),
              s("span", T4, "-" + f(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", M4, [
              k(no, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(j, null, we(n.value.changes.workflows.added, (p) => (a(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.workflows.modified, (p) => (a(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.workflows.deleted, (p) => (a(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p), 1)
              ]))), 128))
            ])) : h("", !0),
            c.value ? (a(), i("div", P4, [
              k(no, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(j, null, we(n.value.changes.nodes.added, (p) => (a(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p.name), 1),
                p.version ? (a(), i("span", R4, "(" + f(p.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.nodes.removed, (p) => (a(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p.name), 1)
              ]))), 128))
            ])) : h("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", N4, [
              k(no, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", L4, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(Le, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
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
}), O4 = /* @__PURE__ */ Se(D4, [["__scopeId", "data-v-d256ff6d"]]), A4 = { class: "popover-header" }, U4 = { class: "popover-body" }, z4 = {
  key: 0,
  class: "changes-summary"
}, V4 = {
  key: 0,
  class: "change-item"
}, F4 = {
  key: 1,
  class: "change-item"
}, B4 = {
  key: 2,
  class: "change-item"
}, W4 = {
  key: 3,
  class: "change-item"
}, G4 = {
  key: 4,
  class: "change-item"
}, j4 = {
  key: 5,
  class: "change-item"
}, H4 = {
  key: 1,
  class: "no-changes"
}, q4 = {
  key: 2,
  class: "loading"
}, K4 = {
  key: 3,
  class: "issues-error"
}, J4 = { class: "error-header" }, Q4 = { class: "error-title" }, Y4 = { class: "issues-list" }, X4 = { class: "workflow-state" }, Z4 = { class: "message-section" }, eI = { class: "popover-footer" }, tI = {
  key: 1,
  class: "commit-popover"
}, sI = { class: "popover-header" }, oI = { class: "popover-body" }, nI = {
  key: 0,
  class: "changes-summary"
}, aI = {
  key: 0,
  class: "change-item"
}, lI = {
  key: 1,
  class: "change-item"
}, iI = {
  key: 2,
  class: "change-item"
}, rI = {
  key: 3,
  class: "change-item"
}, cI = {
  key: 4,
  class: "change-item"
}, uI = {
  key: 5,
  class: "change-item"
}, dI = {
  key: 1,
  class: "no-changes"
}, fI = {
  key: 2,
  class: "loading"
}, mI = {
  key: 3,
  class: "issues-error"
}, vI = { class: "error-header" }, pI = { class: "error-title" }, gI = { class: "issues-list" }, hI = { class: "workflow-state" }, yI = { class: "message-section" }, wI = { class: "popover-footer" }, _I = /* @__PURE__ */ $e({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = gt(), r = b(""), c = b(!1), u = b(!1), d = D(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = D(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), m = D(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = D(() => m.value.length > 0), w = D(() => p.value && !u.value);
    async function y() {
      var _, x, C, S;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const R = await l(r.value.trim(), u.value);
          if (R.status === "success") {
            const T = `Committed: ${((_ = R.summary) == null ? void 0 : _.new) || 0} new, ${((x = R.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = R.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            n("committed", { success: !0, message: T });
          } else if (R.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (R.status === "blocked") {
            const T = ((S = R.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: R.message || "Commit failed" });
        } catch (R) {
          n("committed", { success: !1, message: R instanceof Error ? R.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, x) => e.asModal ? (a(), P(Ot, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", A4, [
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
          s("div", U4, [
            e.status && d.value ? (a(), i("div", z4, [
              e.status.workflows.new.length ? (a(), i("div", V4, [
                x[12] || (x[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (a(), i("div", F4, [
                x[13] || (x[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", B4, [
                x[14] || (x[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", W4, [
                x[15] || (x[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", G4, [
                x[16] || (x[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              v.value ? h("", !0) : (a(), i("div", j4, [...x[17] || (x[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", H4, " No changes to commit ")) : (a(), i("div", q4, " Loading... ")),
            p.value ? (a(), i("div", K4, [
              s("div", J4, [
                x[18] || (x[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", Q4, f(m.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", Y4, [
                (a(!0), i(j, null, we(m.value, (C) => (a(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  s("strong", null, f(C.name), 1),
                  s("span", X4, "(" + f(C.sync_state) + ")", 1),
                  $(": " + f(C.issue_summary), 1)
                ]))), 128))
              ]),
              k(Hn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => u.value = C),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            s("div", Z4, [
              k(xo, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: y,
                onSubmit: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", eI, [
            k(Le, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => n("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: y
            }, {
              default: g(() => [
                $(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), i("div", tI, [
      s("div", sI, [
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
      s("div", oI, [
        e.status && d.value ? (a(), i("div", nI, [
          e.status.workflows.new.length ? (a(), i("div", aI, [
            x[23] || (x[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (a(), i("div", lI, [
            x[24] || (x[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", iI, [
            x[25] || (x[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", rI, [
            x[26] || (x[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", cI, [
            x[27] || (x[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          v.value ? h("", !0) : (a(), i("div", uI, [...x[28] || (x[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", dI, " No changes to commit ")) : (a(), i("div", fI, " Loading... ")),
        p.value ? (a(), i("div", mI, [
          s("div", vI, [
            x[29] || (x[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", pI, f(m.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", gI, [
            (a(!0), i(j, null, we(m.value, (C) => (a(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              s("strong", null, f(C.name), 1),
              s("span", hI, "(" + f(C.sync_state) + ")", 1),
              $(": " + f(C.issue_summary), 1)
            ]))), 128))
          ]),
          k(Hn, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => u.value = C),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        s("div", yI, [
          k(xo, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: y,
            onSubmit: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", wI, [
        k(Le, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => n("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(Le, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: y
        }, {
          default: g(() => [
            $(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), uc = /* @__PURE__ */ Se(_I, [["__scopeId", "data-v-5f897631"]]), kI = { class: "modal-header" }, bI = { class: "modal-body" }, $I = { class: "switch-message" }, CI = { class: "switch-details" }, xI = { class: "modal-actions" }, SI = /* @__PURE__ */ $e({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), P(Ot, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", kI, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", bI, [
            s("p", $I, [
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
            s("p", CI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", xI, [
            k(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
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
}), II = /* @__PURE__ */ Se(SI, [["__scopeId", "data-v-e9c5253e"]]), EI = {
  key: 0,
  class: "modal-overlay"
}, TI = { class: "modal-content" }, MI = { class: "modal-body" }, PI = { class: "progress-info" }, RI = { class: "progress-percentage" }, NI = { class: "progress-state" }, LI = { class: "switch-steps" }, DI = { class: "step-icon" }, OI = { class: "step-label" }, AI = /* @__PURE__ */ $e({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = D(() => {
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
    }), n = D(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = D(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === t.state);
      return r.map((u, d) => {
        let v = "pending", m = "○";
        return d < c ? (v = "completed", m = "✓") : d === c && (v = "active", m = "⟳"), {
          ...u,
          status: v,
          icon: m
        };
      });
    });
    return (r, c) => (a(), P(Ot, { to: "body" }, [
      e.show ? (a(), i("div", EI, [
        s("div", TI, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", MI, [
            k(sc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", PI, [
              s("div", RI, f(e.progress) + "%", 1),
              s("div", NI, f(o.value), 1)
            ]),
            s("div", LI, [
              (a(!0), i(j, null, we(l.value, (u) => (a(), i("div", {
                key: u.state,
                class: Fe(["switch-step", u.status])
              }, [
                s("span", DI, f(u.icon), 1),
                s("span", OI, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), UI = /* @__PURE__ */ Se(AI, [["__scopeId", "data-v-768a5078"]]), zI = { class: "modal-header" }, VI = { class: "modal-body" }, FI = {
  key: 0,
  class: "node-section"
}, BI = { class: "node-list" }, WI = {
  key: 1,
  class: "node-section"
}, GI = { class: "node-list" }, jI = { class: "modal-actions" }, HI = /* @__PURE__ */ $e({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), P(Ot, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", zI, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", VI, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", FI, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", BI, [
                (a(!0), i(j, null, we(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", WI, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", GI, [
                (a(!0), i(j, null, we(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + f(n), 1))), 128))
              ])
            ])) : h("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", jI, [
            k(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
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
}), qI = /* @__PURE__ */ Se(HI, [["__scopeId", "data-v-7cad7518"]]), KI = [
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
], $n = "v0.0.24", JI = "Akatz", QI = { class: "social-buttons" }, YI = ["title", "aria-label", "onClick"], XI = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ZI = ["d"], e6 = ["title", "aria-label", "onClick"], t6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, s6 = ["d"], o6 = /* @__PURE__ */ $e({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", QI, [
      (a(!0), i(j, null, we(st(KI), (l) => (a(), i(j, {
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
          (a(), i("svg", XI, [
            s("path", {
              d: l.iconPath
            }, null, 8, ZI)
          ]))
        ], 8, YI)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", t6, [
            s("path", {
              d: l.iconPath
            }, null, 8, s6)
          ]))
        ], 8, e6))
      ], 64))), 128))
    ]));
  }
}), dc = /* @__PURE__ */ Se(o6, [["__scopeId", "data-v-4f846342"]]), n6 = { class: "footer-info" }, a6 = ["title"], l6 = {
  key: 0,
  class: "dev-badge"
}, i6 = { class: "made-by" }, r6 = /* @__PURE__ */ $e({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = gt(), o = b(null), n = b(null), l = b(null), r = D(() => o.value === "development"), c = D(() => {
      var d;
      if (!r.value) return $n;
      const u = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${$n} (${u})` : `${$n} (development)`;
    });
    return ct(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, n.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (a(), i("div", n6, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        $(f(st($n)) + " ", 1),
        r.value ? (a(), i("span", l6, "dev")) : h("", !0)
      ], 8, a6),
      s("span", i6, [
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
        $(" by " + f(st(JI)), 1)
      ])
    ]));
  }
}), fc = /* @__PURE__ */ Se(r6, [["__scopeId", "data-v-4fa265b3"]]), c6 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = b(null);
    async function n() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (a(), P(It, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: g(() => [
        k(Xr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          k(Le, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: g(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Le, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: g(() => [...c[3] || (c[3] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), u6 = /* @__PURE__ */ Se(c6, [["__scopeId", "data-v-fac00ae7"]]), d6 = { class: "header-actions" }, f6 = {
  key: 0,
  class: "wizard-step"
}, m6 = { class: "form-field" }, v6 = ["placeholder"], p6 = {
  key: 0,
  class: "form-error"
}, g6 = { class: "form-field form-field--checkbox" }, h6 = { class: "form-checkbox" }, y6 = {
  key: 0,
  class: "form-field"
}, w6 = ["placeholder"], _6 = {
  key: 0,
  class: "form-info"
}, k6 = {
  key: 1,
  class: "form-suggestion"
}, b6 = {
  key: 2,
  class: "form-error"
}, $6 = {
  key: 3,
  class: "form-info"
}, C6 = {
  key: 1,
  class: "wizard-step"
}, x6 = {
  key: 0,
  class: "progress-check-loading"
}, S6 = {
  key: 0,
  class: "cli-warning"
}, I6 = { class: "cli-warning-header" }, E6 = {
  key: 1,
  class: "env-landing"
}, T6 = { class: "env-list" }, M6 = ["value"], P6 = { class: "env-name" }, R6 = {
  key: 2,
  class: "env-create"
}, N6 = { class: "form-field" }, L6 = { class: "form-field" }, D6 = ["value"], O6 = { class: "form-field" }, A6 = ["disabled"], U6 = ["value"], z6 = { class: "form-field" }, V6 = ["value"], F6 = { class: "form-field form-field--checkbox" }, B6 = { class: "form-checkbox" }, W6 = {
  key: 0,
  class: "form-error"
}, G6 = {
  key: 1,
  class: "env-creating"
}, j6 = { class: "creating-intro" }, H6 = {
  key: 3,
  class: "env-import"
}, q6 = { class: "wizard-footer" }, K6 = { class: "wizard-footer-actions" }, vo = 10, J6 = 600 * 1e3, bi = 1800 * 1e3, Q6 = /* @__PURE__ */ $e({
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
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: m
    } = gt(), p = b(o.initialStep || 1), w = b(null), y = b("landing"), _ = b(!1), x = b(!1), C = b(!1), S = b(!1), R = b(null), T = b(o.initialStep === 2), E = b(o.defaultPath), N = b(!!o.detectedModelsDir), O = b(o.detectedModelsDir || ""), J = b(null), M = b(null), V = b(null), Y = b(null), Z = b("my-new-env"), ie = b(ec), ye = b("latest"), se = b(tc), q = b(!0), ae = b(null), Ue = b(null), oe = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), ge = b(!1), A = b(!1), me = b(!1), Pe = b({ progress: 0, message: "" }), He = b({ progress: 0, message: "" }), Ee = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], G = b(0), ee = b(null), H = b(0), X = b(null), xe = D(() => {
      var be, Xe;
      const ve = (be = E.value) == null ? void 0 : be.trim(), Q = !J.value, qe = !N.value || !M.value && ((Xe = O.value) == null ? void 0 : Xe.trim());
      return ve && Q && qe;
    }), ue = D(() => {
      var ve;
      return (ve = Z.value) == null ? void 0 : ve.trim();
    }), le = D(() => !!(p.value === 2 || Ue.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), I = D(() => Ue.value || o.workspacePath || null);
    async function z() {
      var ve;
      if (J.value = null, !!((ve = E.value) != null && ve.trim()))
        try {
          const Q = await c({ path: E.value, type: "workspace" });
          Q.valid || (J.value = Q.error || "Invalid path");
        } catch (Q) {
          J.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function re() {
      var ve;
      if (M.value = null, V.value = null, Y.value = null, !!((ve = O.value) != null && ve.trim()))
        try {
          const Q = await c({ path: O.value, type: "models" });
          if (Q.valid)
            Y.value = Q.model_count ?? null;
          else if (M.value = Q.error || "Invalid path", Q.suggestion) {
            V.value = Q.suggestion, O.value = Q.suggestion, M.value = null;
            const qe = await c({ path: Q.suggestion, type: "models" });
            qe.valid && (Y.value = qe.model_count ?? null);
          }
        } catch (Q) {
          M.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function Ce() {
      var ve, Q, qe, be, Xe;
      if (J.value = null, M.value = null, await z(), (ve = J.value) != null && ve.includes("already exists")) {
        J.value = null, Ue.value = ((Q = E.value) == null ? void 0 : Q.trim()) || o.defaultPath, p.value = 2, ke();
        return;
      }
      if (!J.value && !(N.value && ((qe = O.value) != null && qe.trim()) && (await re(), M.value))) {
        A.value = !0;
        try {
          await l({
            workspace_path: ((be = E.value) == null ? void 0 : be.trim()) || o.defaultPath,
            models_directory: N.value && ((Xe = O.value) == null ? void 0 : Xe.trim()) || null
          }), G.value = 0, ee.value = Date.now();
          const Ve = setInterval(async () => {
            var Ne;
            if (ee.value && Date.now() - ee.value > J6) {
              clearInterval(Ve), A.value = !1, J.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const W = await r();
              if (G.value = 0, W.state === "idle" && A.value) {
                clearInterval(Ve), A.value = !1, J.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Pe.value = { progress: W.progress, message: W.message }, W.state === "complete" ? (clearInterval(Ve), A.value = !1, Ue.value = ((Ne = E.value) == null ? void 0 : Ne.trim()) || o.defaultPath, p.value = 2, ke()) : W.state === "error" && (clearInterval(Ve), A.value = !1, J.value = W.error || "Workspace creation failed");
            } catch (W) {
              G.value++, console.warn(`Polling failure ${G.value}/${vo}:`, W), G.value >= vo && (clearInterval(Ve), A.value = !1, J.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ve) {
          A.value = !1, J.value = Ve instanceof Error ? Ve.message : "Failed to create workspace";
        }
      }
    }
    async function _e() {
      me.value = !0, ae.value = null;
      try {
        const ve = {
          name: Z.value.trim() || "my-new-env",
          python_version: ie.value,
          comfyui_version: ye.value,
          torch_backend: se.value,
          switch_after: q.value,
          workspace_path: Ue.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ve)).status === "started") {
          H.value = 0, X.value = Date.now();
          const qe = setInterval(async () => {
            if (X.value && Date.now() - X.value > bi) {
              clearInterval(qe), me.value = !1, ae.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await d();
              if (H.value = 0, be.state === "idle" && me.value) {
                clearInterval(qe), me.value = !1, ae.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (He.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(qe), me.value = !1;
                const Xe = be.environment_name || ve.name;
                q.value ? n("complete", Xe, Ue.value) : (y.value = "landing", n("environment-created-no-switch", Xe));
              } else be.state === "error" && (clearInterval(qe), me.value = !1, ae.value = be.error || "Environment creation failed");
            } catch (be) {
              H.value++, console.warn(`Polling failure ${H.value}/${vo}:`, be), H.value >= vo && (clearInterval(qe), me.value = !1, ae.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        me.value = !1, ae.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function ke() {
      ge.value = !0;
      try {
        oe.value = await m();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        ge.value = !1;
      }
    }
    function Ae() {
      w.value && n("switch-environment", w.value, Ue.value);
    }
    function ze() {
      y.value === "create" || y.value === "import" ? y.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Re(ve, Q) {
      x.value = !1, Q ? n("complete", ve, Ue.value) : (n("environment-created-no-switch", ve), y.value = "landing");
    }
    function Ie() {
    }
    ct(async () => {
      if (o.detectedModelsDir && (O.value = o.detectedModelsDir), o.workspacePath && (Ue.value = o.workspacePath), p.value === 2) {
        ke();
        const ve = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Je(), clearTimeout(ve), T.value = !1;
      }
    });
    async function Je() {
      try {
        const ve = await d();
        if (console.log("[ComfyGit] Create progress check:", ve.state, ve), ve.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), y.value = "create", me.value = !0, Z.value = ve.environment_name || "my-new-env", He.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, Be();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await v();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), R.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0,
          environmentName: ve.environment_name || ""
        }, S.value = !0, y.value = "import", x.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Be() {
      H.value = 0, X.value = Date.now();
      let ve = null;
      const Q = async () => {
        if (X.value && Date.now() - X.value > bi)
          return ve && clearInterval(ve), me.value = !1, ae.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const be = await d();
          if (H.value = 0, be.state === "idle" && me.value)
            return ve && clearInterval(ve), me.value = !1, ae.value = "Environment creation was interrupted. Please try again.", !1;
          if (He.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, be.state === "complete") {
            ve && clearInterval(ve), me.value = !1;
            const Xe = be.environment_name || Z.value;
            return n("complete", Xe, Ue.value), !1;
          } else if (be.state === "error")
            return ve && clearInterval(ve), me.value = !1, ae.value = be.error || "Environment creation failed", !1;
          return !0;
        } catch (be) {
          return H.value++, console.warn(`Polling failure ${H.value}/${vo}:`, be), H.value >= vo ? (ve && clearInterval(ve), me.value = !1, ae.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Q() && (ve = setInterval(async () => {
        !await Q() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, Q) => (a(), i(j, null, [
      k(It, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (qe) => ve.$emit("close"))
      }, {
        header: g(() => [
          Q[20] || (Q[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", d6, [
            k(dc),
            Q[19] || (Q[19] = s("span", { class: "header-divider" }, null, -1)),
            le.value ? (a(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Q[0] || (Q[0] = (qe) => _.value = !0)
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
            ])])) : h("", !0),
            s("button", {
              class: "icon-btn",
              onClick: Q[1] || (Q[1] = (qe) => ve.$emit("close")),
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
        body: g(() => {
          var qe;
          return [
            p.value === 1 ? (a(), i("div", f6, [
              Q[24] || (Q[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", m6, [
                Q[21] || (Q[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (be) => E.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, v6), [
                  [$o, E.value]
                ]),
                J.value ? (a(), i("p", p6, f(J.value), 1)) : h("", !0)
              ]),
              s("div", g6, [
                s("label", h6, [
                  Tt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (be) => N.value = be)
                  }, null, 512), [
                    [Wn, N.value]
                  ]),
                  Q[22] || (Q[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (a(), i("div", y6, [
                Q[23] || (Q[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (be) => O.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, w6), [
                  [$o, O.value]
                ]),
                e.detectedModelsDir && !O.value ? (a(), i("p", _6, " Detected: " + f(e.detectedModelsDir), 1)) : h("", !0),
                V.value ? (a(), i("p", k6, " Did you mean: " + f(V.value), 1)) : h("", !0),
                M.value ? (a(), i("p", b6, f(M.value), 1)) : h("", !0),
                Y.value !== null && !M.value ? (a(), i("p", $6, " Found " + f(Y.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              A.value ? (a(), P(jn, {
                key: 1,
                progress: Pe.value.progress,
                message: Pe.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            p.value === 2 ? (a(), i("div", C6, [
              T.value ? (a(), i("div", x6, [...Q[25] || (Q[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(j, { key: 1 }, [
                !o.cliInstalled && !C.value ? (a(), i("div", S6, [
                  s("div", I6, [
                    Q[27] || (Q[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (be) => C.value = !0),
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
                ])) : h("", !0),
                y.value === "landing" ? (a(), i("div", E6, [
                  Q[34] || (Q[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Q[6] || (Q[6] = (be) => y.value = "create")
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
                    onClick: Q[7] || (Q[7] = (be) => {
                      S.value = !1, y.value = "import";
                    })
                  }, [...Q[32] || (Q[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (qe = o.existingEnvironments) != null && qe.length ? (a(), i(j, { key: 0 }, [
                    Q[33] || (Q[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", T6, [
                      (a(!0), i(j, null, we(o.existingEnvironments, (be) => (a(), i("label", {
                        key: be,
                        class: Fe(["env-option", { selected: w.value === be }])
                      }, [
                        Tt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: be,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (Xe) => w.value = Xe)
                        }, null, 8, M6), [
                          [Mn, w.value]
                        ]),
                        s("span", P6, f(be), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : y.value === "create" ? (a(), i("div", R6, [
                  me.value ? (a(), i("div", G6, [
                    s("p", j6, [
                      Q[41] || (Q[41] = $(" Creating environment ", -1)),
                      s("strong", null, f(Z.value), 1),
                      Q[42] || (Q[42] = $("... ", -1))
                    ]),
                    k(jn, {
                      progress: He.value.progress,
                      message: He.value.message,
                      "current-phase": He.value.phase,
                      "show-steps": !0,
                      steps: Ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(j, { key: 0 }, [
                    Q[40] || (Q[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", N6, [
                      Q[35] || (Q[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(s("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (be) => Z.value = be),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [$o, Z.value]
                      ])
                    ]),
                    s("div", L6, [
                      Q[36] || (Q[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (be) => ie.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), i(j, null, we(st(Zr), (be) => (a(), i("option", {
                          key: be,
                          value: be
                        }, f(be), 9, D6))), 128))
                      ], 512), [
                        [Co, ie.value]
                      ])
                    ]),
                    s("div", O6, [
                      Q[37] || (Q[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (be) => ye.value = be),
                        class: "form-select",
                        disabled: ge.value
                      }, [
                        (a(!0), i(j, null, we(oe.value, (be) => (a(), i("option", {
                          key: be.tag_name,
                          value: be.tag_name
                        }, f(be.name), 9, U6))), 128))
                      ], 8, A6), [
                        [Co, ye.value]
                      ])
                    ]),
                    s("div", z6, [
                      Q[38] || (Q[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[12] || (Q[12] = (be) => se.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), i(j, null, we(st(Sl), (be) => (a(), i("option", {
                          key: be,
                          value: be
                        }, f(be) + f(be === "auto" ? " (detect GPU)" : ""), 9, V6))), 128))
                      ], 512), [
                        [Co, se.value]
                      ])
                    ]),
                    s("div", F6, [
                      s("label", B6, [
                        Tt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Q[13] || (Q[13] = (be) => q.value = be)
                        }, null, 512), [
                          [Wn, q.value]
                        ]),
                        Q[39] || (Q[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    ae.value ? (a(), i("div", W6, f(ae.value), 1)) : h("", !0)
                  ], 64))
                ])) : y.value === "import" ? (a(), i("div", H6, [
                  k(nc, {
                    "workspace-path": Ue.value,
                    "resume-import": S.value,
                    "initial-progress": R.value ?? void 0,
                    onImportComplete: Re,
                    onImportStarted: Q[14] || (Q[14] = (be) => x.value = !0),
                    onSourceCleared: Ie
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          s("div", q6, [
            k(fc),
            s("div", K6, [
              p.value === 1 ? (a(), P(Le, {
                key: 0,
                variant: "primary",
                disabled: !xe.value || A.value,
                onClick: Ce
              }, {
                default: g(() => [
                  $(f(A.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (a(), i(j, { key: 1 }, [
                !me.value && !x.value && (y.value !== "landing" || o.setupState === "no_workspace" && !Ue.value) ? (a(), P(Le, {
                  key: 0,
                  variant: "secondary",
                  onClick: ze
                }, {
                  default: g(() => [...Q[44] || (Q[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                y.value === "create" ? (a(), P(Le, {
                  key: 1,
                  variant: "primary",
                  disabled: !ue.value || me.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    $(f(me.value ? "Creating..." : q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                y.value === "landing" && w.value ? (a(), P(Le, {
                  key: 2,
                  variant: "primary",
                  onClick: Ae
                }, {
                  default: g(() => [
                    $(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (a(), P(u6, {
        key: 0,
        "workspace-path": I.value,
        onClose: Q[16] || (Q[16] = (qe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), Y6 = /* @__PURE__ */ Se(Q6, [["__scopeId", "data-v-9a9aadc0"]]), X6 = { class: "update-banner" }, Z6 = { class: "update-banner__left" }, eE = { class: "update-banner__title" }, tE = {
  key: 0,
  class: "update-banner__summary"
}, sE = { class: "update-banner__actions" }, oE = ["disabled"], nE = ["disabled"], aE = ["disabled"], lE = /* @__PURE__ */ $e({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", X6, [
      s("div", Z6, [
        s("div", eE, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", tE, f(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      s("div", sE, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, oE),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, nE)) : h("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, aE)
      ])
    ]));
  }
}), iE = /* @__PURE__ */ Se(lE, [["__scopeId", "data-v-49562c5c"]]), mc = "ComfyGit.UpdateNotice.DismissedVersion";
function rE() {
  try {
    return localStorage.getItem(mc);
  } catch {
    return null;
  }
}
function cE(e) {
  try {
    localStorage.setItem(mc, e);
  } catch {
  }
}
function uE(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : rE() !== e.latest_version;
}
const dE = { class: "comfygit-panel" }, fE = { class: "panel-header" }, mE = { class: "header-left" }, vE = {
  key: 0,
  class: "header-info"
}, pE = { class: "header-actions" }, gE = { class: "env-switcher" }, hE = { class: "env-switcher-header" }, yE = { class: "env-control-buttons" }, wE = {
  key: 0,
  class: "header-info"
}, _E = { class: "branch-name" }, kE = { class: "panel-main" }, bE = { class: "sidebar" }, $E = { class: "sidebar-content" }, CE = { class: "sidebar-section" }, xE = { class: "sidebar-section" }, SE = { class: "sidebar-section" }, IE = { class: "sidebar-footer" }, EE = { class: "content-area" }, TE = {
  key: 0,
  class: "error-message"
}, ME = {
  key: 1,
  class: "loading"
}, PE = { class: "dialog-content env-selector-dialog" }, RE = { class: "dialog-header" }, NE = { class: "dialog-body" }, LE = { class: "env-list" }, DE = { class: "env-info" }, OE = { class: "env-name-row" }, AE = { class: "env-indicator" }, UE = { class: "env-name" }, zE = {
  key: 0,
  class: "env-branch"
}, VE = {
  key: 1,
  class: "current-label"
}, FE = { class: "env-stats" }, BE = ["onClick"], WE = { class: "toast-container" }, GE = { class: "toast-message" }, $i = "ComfyGit.LastView", Ci = "ComfyGit.LastSection", jE = /* @__PURE__ */ $e({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: v,
      deleteBranch: m,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: y,
      deleteEnvironment: _,
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: R,
      updateManager: T
    } = gt(), E = Pv(), N = b(null), O = b([]), J = b([]), M = b([]), V = D(() => M.value.find((ne) => ne.is_current)), Y = b(null), Z = b(!1), ie = b(!1), ye = b("history"), se = b("manifest"), q = b(null), ae = b(!1), Ue = b(1), oe = D(() => {
      var ne;
      return ((ne = q.value) == null ? void 0 : ne.state) || "managed";
    }), ge = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, A = D(() => {
      var ne, K;
      return ((K = (ne = q.value) == null ? void 0 : ne.runtime_context) == null ? void 0 : K.capabilities) || ge;
    }), me = b(!1), Pe = b(null), He = b(null), Ee = b(!1), G = b(null), ee = b(!1), H = b(!1), X = D(() => !ee.value && uE(G.value)), xe = b(null), ue = b(null), le = b(null), I = b(!1), z = b(!1), re = b(""), Ce = b(null), _e = b({ state: "idle", progress: 0, message: "" });
    let ke = null, Ae = null;
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
    }, Re = o.initialView ? ze[o.initialView] : null, Ie = [
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
    function Be() {
      try {
        const ne = sessionStorage.getItem($i), K = sessionStorage.getItem(Ci), Ke = ne === "branches" || ne === "history" || ne === "remotes" ? "version-control" : ne === "manifest" || ne === "debug-env" || ne === "debug-workspace" ? "diagnostics" : ne, Ye = K === "all-envs" ? "workspace" : K === "sharing" ? "version-control" : K;
        if (ne && K && Ie.includes(Ke) && Je.includes(Ye))
          return { view: Ke, section: Ye };
      } catch {
      }
      return null;
    }
    const ve = Be(), Q = b((Re == null ? void 0 : Re.view) ?? (ve == null ? void 0 : ve.view) ?? "status"), qe = b((Re == null ? void 0 : Re.section) ?? (ve == null ? void 0 : ve.section) ?? "this-env");
    function be(ne, K) {
      Q.value = ne, qe.value = K;
      try {
        sessionStorage.setItem($i, ne), sessionStorage.setItem(Ci, K);
      } catch {
      }
    }
    function Xe(ne) {
      const Ke = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ne];
      Ke && be(Ke.view, Ke.section);
    }
    function Ve(ne) {
      ye.value = ne, be("version-control", "version-control");
    }
    function Ne(ne) {
      se.value = ne, be("diagnostics", "diagnostics");
    }
    function W() {
      Ve("branches");
    }
    function de() {
      n("close"), setTimeout(async () => {
        await pe("Comfy.OpenManagerDialog") || await pe("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Qe(["Extensions", "Manage extensions"]) || Qe(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function pe(ne) {
      var Ye, at;
      const K = window.app, Ke = [
        (Ye = K == null ? void 0 : K.extensionManager) == null ? void 0 : Ye.command,
        (at = K == null ? void 0 : K.extensionManager) == null ? void 0 : at.commands,
        K == null ? void 0 : K.command,
        K == null ? void 0 : K.commands
      ];
      for (const mt of Ke)
        if (typeof (mt == null ? void 0 : mt.execute) == "function")
          try {
            return await mt.execute(ne), !0;
          } catch (Rt) {
            console.debug(`[ComfyGit] Command ${ne} did not open Extensions manager`, Rt);
          }
      return !1;
    }
    function Qe(ne) {
      var Ye, at, mt;
      const K = ne.map((Rt) => Rt.toLowerCase()), Ke = document.querySelectorAll('button, [role="button"]');
      for (const Rt of Ke) {
        const B = Rt;
        if ([
          (Ye = B.textContent) == null ? void 0 : Ye.trim(),
          (at = B.getAttribute("title")) == null ? void 0 : at.trim(),
          (mt = B.getAttribute("aria-label")) == null ? void 0 : mt.trim()
        ].filter(Boolean).map((We) => We.toLowerCase()).some((We) => K.includes(We)))
          return B.click(), !0;
      }
      return !1;
    }
    const L = b(null), U = b(!1), te = b(!1), De = b([]);
    let Oe = 0;
    function Me(ne, K = "info", Ke = 3e3) {
      const Ye = ++Oe;
      return De.value.push({ id: Ye, message: ne, type: K }), Ke > 0 && setTimeout(() => {
        De.value = De.value.filter((at) => at.id !== Ye);
      }, Ke), Ye;
    }
    function je(ne) {
      De.value = De.value.filter((K) => K.id !== ne);
    }
    function nt(ne, K) {
      Me(ne, K);
    }
    async function bt() {
      G.value = null, ee.value = !1;
      try {
        G.value = await R();
      } catch {
      }
    }
    function Et() {
      var K;
      const ne = (K = G.value) == null ? void 0 : K.release_url;
      if (ne)
        try {
          window.open(ne, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function ce() {
      var K;
      const ne = (K = G.value) == null ? void 0 : K.latest_version;
      ne && cE(ne), ee.value = !0;
    }
    async function F() {
      var K, Ke;
      if (H.value) return;
      H.value = !0;
      const ne = Me("Updating comfygit-manager...", "info", 0);
      try {
        const Ye = await T();
        if (je(ne), Ye.status !== "success") {
          if (Me(Ye.message || "Update failed", "error"), Ye.manual_instructions) {
            const at = Ye.manual_instructions.split(`
`).map((mt) => mt.trim()).filter(Boolean);
            L.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: at,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                L.value = null;
              }
            };
          }
          return;
        }
        if (Me(Ye.message || "Update complete", "success"), ce(), Ye.restart_required) {
          Js();
          try {
            await ((Ke = (K = window.app) == null ? void 0 : K.api) == null ? void 0 : Ke.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Ye) {
        je(ne);
        const at = Ye instanceof Error ? Ye.message : "Update failed";
        Me(at, "error");
      } finally {
        H.value = !1;
      }
    }
    const fe = D(() => {
      if (!N.value) return "neutral";
      const ne = N.value.workflows, K = ne.new.length > 0 || ne.modified.length > 0 || ne.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? K ? "warning" : "success" : "error";
    });
    D(() => N.value ? fe.value === "success" ? "All synced" : fe.value === "warning" ? "Uncommitted changes" : fe.value === "error" ? "Not synced" : "" : "");
    async function Ge(ne = {}) {
      me.value = !0, Pe.value = null;
      try {
        const [K, Ke, Ye, at] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        N.value = K, O.value = Ke.commits, J.value = Ye.branches, M.value = at, n("statusUpdate", K), (ne.refreshWorkflows ?? !0) && xe.value && await xe.value.loadWorkflows(!0);
      } catch (K) {
        Pe.value = K instanceof Error ? K.message : "Failed to load status", N.value = null, O.value = [], J.value = [];
      } finally {
        me.value = !1;
      }
    }
    function ut(ne) {
      He.value = ne;
    }
    async function Ct(ne) {
      var Ke;
      He.value = null;
      const K = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      L.value = {
        title: K ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: K ? "You have uncommitted changes that will be lost." : `Checkout commit ${ne.short_hash || ((Ke = ne.hash) == null ? void 0 : Ke.slice(0, 7))}?`,
        details: K ? pn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: K,
        onConfirm: async () => {
          var mt;
          L.value = null, Js();
          const Ye = Me(`Checking out ${ne.short_hash || ((mt = ne.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), at = await u(ne.hash, K);
          je(Ye), at.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(at.message || "Checkout failed", "error");
        }
      };
    }
    async function lt(ne) {
      const K = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      L.value = {
        title: K ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: K ? "You have uncommitted changes." : `Switch to branch "${ne}"?`,
        details: K ? pn() : void 0,
        warning: K ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          L.value = null, Js();
          const Ke = Me(`Switching to ${ne}...`, "info", 0), Ye = await v(ne, K);
          je(Ke), Ye.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(Ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function xt(ne) {
      const K = Me(`Creating branch ${ne}...`, "info", 0), Ke = await d(ne);
      je(K), Ke.status === "success" ? (Me(`Branch "${ne}" created`, "success"), await Ge()) : Me(Ke.message || "Failed to create branch", "error");
    }
    async function ts(ne, K = !1) {
      const Ke = async (Ye) => {
        var mt;
        const at = Me(`Deleting branch ${ne}...`, "info", 0);
        try {
          const Rt = await m(ne, Ye);
          je(at), Rt.status === "success" ? (Me(`Branch "${ne}" deleted`, "success"), await Ge()) : (mt = Rt.message) != null && mt.includes("not fully merged") ? L.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              L.value = null, await Ke(!0);
            }
          } : Me(Rt.message || "Failed to delete branch", "error");
        } catch (Rt) {
          je(at);
          const B = Rt instanceof Error ? Rt.message : "Failed to delete branch";
          B.includes("not fully merged") ? L.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              L.value = null, await Ke(!0);
            }
          } : Me(B, "error");
        }
      };
      L.value = {
        title: "Delete Branch",
        message: `Delete branch "${ne}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          L.value = null, await Ke(K);
        }
      };
    }
    async function Ss(ne) {
      He.value = null;
      const K = prompt("Enter branch name:");
      if (K) {
        const Ke = Me(`Creating branch ${K}...`, "info", 0), Ye = await d(K, ne.hash);
        je(Ke), Ye.status === "success" ? (Me(`Branch "${K}" created from ${ne.short_hash}`, "success"), await Ge()) : Me(Ye.message || "Failed to create branch", "error");
      }
    }
    function Js() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ia() {
      if (!A.value.can_restart_current) {
        Me("Restart is not available in this runtime context.", "warning");
        return;
      }
      L.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ne;
          L.value = null, Js(), Me("Restarting environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ra() {
      if (!A.value.can_stop_current) {
        Me("Stop is not available in this runtime context.", "warning");
        return;
      }
      L.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ne;
          L.value = null, Me("Stopping environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function zs(ne, K) {
      if (!A.value.can_switch_environment) {
        Me("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Ee.value = !1, re.value = ne, Ce.value = K || null, I.value = !0;
    }
    async function ca() {
      I.value = !1, z.value = !0, Js(), _e.value = {
        progress: 10,
        state: co(10),
        message: uo(10)
      };
      try {
        await w(re.value, Ce.value || void 0), ua(), da();
      } catch (ne) {
        Is(), z.value = !1, Me(`Failed to initiate switch: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error"), _e.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
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
    function ua() {
      if (Ae) return;
      let ne = 10;
      const K = 60, Ke = 5e3, Ye = 100, at = (K - ne) / (Ke / Ye);
      Ae = window.setInterval(() => {
        if (ne += at, ne >= K && (ne = K, Is()), _e.value.progress < K) {
          const mt = Math.floor(ne);
          _e.value = {
            progress: mt,
            state: co(mt),
            message: uo(mt)
          };
        }
      }, Ye);
    }
    function Is() {
      Ae && (clearInterval(Ae), Ae = null);
    }
    function da() {
      ke || (ke = window.setInterval(async () => {
        try {
          let ne = await E.getStatus();
          if ((!ne || ne.state === "idle") && (ne = await y()), !ne)
            return;
          const K = ne.progress || 0;
          K >= 60 && Is();
          const Ke = Math.max(K, _e.value.progress), Ye = ne.state && ne.state !== "idle" && ne.state !== "unknown", at = Ye ? ne.state : co(Ke), mt = Ye && ne.message || uo(Ke);
          _e.value = {
            state: at,
            progress: Ke,
            message: mt
          }, ne.state === "complete" ? (Is(), Lo(), z.value = !1, Me(`✓ Switched to ${re.value}`, "success"), await Ge(), re.value = "") : ne.state === "rolled_back" ? (Is(), Lo(), z.value = !1, Me("Switch failed, restored previous environment", "warning"), re.value = "") : ne.state === "critical_failure" && (Is(), Lo(), z.value = !1, Me(`Critical error during switch: ${ne.message}`, "error"), re.value = "");
        } catch (ne) {
          console.error("Failed to poll switch progress:", ne);
        }
      }, 1e3));
    }
    function Lo() {
      Is(), ke && (clearInterval(ke), ke = null);
    }
    function fa() {
      var ne;
      I.value = !1, re.value = "", (ne = q.value) != null && ne.state && q.value.state !== "managed" && (Ue.value = q.value.state === "no_workspace" ? 1 : 2, ae.value = !0);
    }
    async function ma(ne) {
      U.value = !1, await Ge(), Me(ne.message, ne.success ? "success" : "error");
    }
    async function va() {
      te.value = !1;
      const ne = Me("Syncing environment...", "info", 0);
      try {
        const K = await x("skip", !0);
        if (je(ne), K.status === "success") {
          const Ke = [];
          K.nodes_installed.length && Ke.push(`${K.nodes_installed.length} installed`), K.nodes_removed.length && Ke.push(`${K.nodes_removed.length} removed`);
          const Ye = Ke.length ? `: ${Ke.join(", ")}` : "";
          Me(`✓ Environment synced${Ye}`, "success"), await Ge();
        } else {
          const Ke = K.errors.length ? K.errors.join("; ") : K.message;
          Me(`Sync failed: ${Ke}`, "error");
        }
      } catch (K) {
        je(ne), Me(`Sync error: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
      }
    }
    async function pa(ne) {
      var K;
      try {
        const Ke = await C(ne);
        Ke.failed.length === 0 ? Me(`✓ Repaired ${Ke.success} workflow${Ke.success === 1 ? "" : "s"}`, "success") : Me(`Repaired ${Ke.success}, failed: ${Ke.failed.length}`, "warning"), await Ge();
      } catch (Ke) {
        Me(`Repair failed: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (K = le.value) == null || K.resetRepairingState();
      }
    }
    async function vn() {
      var K, Ke;
      const ne = Me("Repairing environment...", "info", 0);
      try {
        const Ye = await x("skip", !0);
        if (je(ne), Ye.status === "success") {
          const at = [];
          Ye.nodes_installed.length && at.push(`${Ye.nodes_installed.length} installed`), Ye.nodes_removed.length && at.push(`${Ye.nodes_removed.length} removed`);
          const mt = at.length ? `: ${at.join(", ")}` : "";
          Me(`✓ Environment repaired${mt}`, "success"), (K = le.value) == null || K.closeDetailModal(), await Ge();
        } else {
          const at = Ye.errors.length ? Ye.errors.join(", ") : Ye.message || "Unknown error";
          Me(`Repair failed: ${at}`, "error");
        }
      } catch (Ye) {
        je(ne), Me(`Repair error: ${Ye instanceof Error ? Ye.message : "Unknown error"}`, "error");
      } finally {
        (Ke = le.value) == null || Ke.resetRepairingEnvironmentState();
      }
    }
    async function ga(ne, K) {
      Me(`Environment '${ne}' created`, "success"), await Ge(), ue.value && await ue.value.loadEnvironments(), K && A.value.can_switch_environment && await zs(ne);
    }
    async function ha(ne) {
      var K;
      if (!A.value.can_delete_environment) {
        Me("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((K = V.value) == null ? void 0 : K.name) === ne) {
        Me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      L.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ne}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          L.value = null;
          try {
            const Ke = await _(ne);
            Ke.status === "success" ? (Me(`Environment "${ne}" deleted`, "success"), await Ge(), ue.value && await ue.value.loadEnvironments()) : Me(Ke.message || "Failed to delete environment", "error");
          } catch (Ke) {
            Me(`Error deleting environment: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ya(ne, K) {
      ae.value = !1;
      try {
        q.value = await S();
      } catch {
      }
      A.value.can_switch_environment && await zs(ne, K);
    }
    function wa() {
      ae.value = !1, n("close");
    }
    async function _a(ne, K) {
      await zs(ne, K);
    }
    async function ka(ne) {
      Z.value = !1, await Ge(), await zs(ne);
    }
    function ba() {
      Y.value = null, Z.value = !0;
    }
    function $a(ne) {
      Y.value = ne, ie.value = !0;
    }
    function Ca() {
      ie.value = !1, Y.value = null;
    }
    async function xa(ne) {
      q.value = await S(), console.log(`Environment '${ne}' created. Available for switching.`);
    }
    function Sa() {
      if (!A.value.can_create_environment) {
        Me("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      be("environments", "workspace"), setTimeout(() => {
        var ne;
        (ne = ue.value) == null || ne.openCreateModal();
      }, 100);
    }
    function pn() {
      if (!N.value) return [];
      const ne = [], K = N.value.workflows;
      return K.new.length && ne.push(`${K.new.length} new workflow(s)`), K.modified.length && ne.push(`${K.modified.length} modified workflow(s)`), K.deleted.length && ne.push(`${K.deleted.length} deleted workflow(s)`), ne;
    }
    return ct(async () => {
      try {
        if (q.value = await S(), q.value.state === "no_workspace" && A.value.can_initialize_workspace) {
          ae.value = !0, Ue.value = 1;
          return;
        }
        if (q.value.state === "empty_workspace" && A.value.can_create_environment) {
          ae.value = !0, Ue.value = 2;
          return;
        }
        if (q.value.state === "unmanaged" && A.value.can_switch_environment) {
          ae.value = !0, Ue.value = 2;
          return;
        }
      } catch (ne) {
        console.warn("Setup status check failed, proceeding normally:", ne);
      }
      await Promise.all([
        Ge({ refreshWorkflows: !1 }),
        bt()
      ]);
    }), (ne, K) => {
      var Ke, Ye, at, mt, Rt, B, he, We, dt, Nt, jt, gs, ss;
      return a(), i("div", dE, [
        s("div", fE, [
          s("div", mE, [
            K[27] || (K[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (a(), i("div", vE)) : h("", !0)
          ]),
          s("div", pE, [
            k(dc),
            K[30] || (K[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Fe(["icon-btn", { spinning: me.value }]),
              onClick: Ge,
              title: "Refresh"
            }, [...K[28] || (K[28] = [
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
              onClick: K[0] || (K[0] = (et) => n("close")),
              title: "Close"
            }, [...K[29] || (K[29] = [
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
        X.value && G.value ? (a(), P(iE, {
          key: 0,
          info: G.value,
          updating: H.value,
          onUpdate: F,
          onDismiss: ce,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : h("", !0),
        s("div", gE, [
          s("div", hE, [
            K[31] || (K[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", yE, [
              A.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ia
              }, " Restart ")) : h("", !0),
              A.value.can_stop_current ? (a(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ra
              }, " Stop ")) : h("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: K[1] || (K[1] = (et) => be("environments", "workspace"))
          }, [
            N.value ? (a(), i("div", wE, [
              s("span", null, f(((Ke = V.value) == null ? void 0 : Ke.name) || ((Ye = N.value) == null ? void 0 : Ye.environment) || "Loading..."), 1),
              s("span", _E, "(" + f(N.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            K[32] || (K[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", kE, [
          s("div", bE, [
            s("div", $E, [
              s("div", CE, [
                K[33] || (K[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "status" && qe.value === "this-env" }]),
                  onClick: K[2] || (K[2] = (et) => be("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: K[3] || (K[3] = (et) => be("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: K[4] || (K[4] = (et) => be("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: K[5] || (K[5] = (et) => be("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "version-control" }]),
                  onClick: K[6] || (K[6] = (et) => Ve("history"))
                }, " VERSION CONTROL ", 2)
              ]),
              K[36] || (K[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", xE, [
                K[34] || (K[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: K[7] || (K[7] = (et) => be("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: K[8] || (K[8] = (et) => be("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: K[9] || (K[9] = (et) => be("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              K[37] || (K[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", SE, [
                K[35] || (K[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "diagnostics" && se.value === "manifest" }]),
                  onClick: K[10] || (K[10] = (et) => Ne("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "diagnostics" && se.value !== "manifest" }]),
                  onClick: K[11] || (K[11] = (et) => Ne("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", IE, [
              k(fc)
            ])
          ]),
          s("div", EE, [
            Pe.value ? (a(), i("div", TE, f(Pe.value), 1)) : !N.value && Q.value === "status" ? (a(), i("div", ME, " Loading status... ")) : (a(), i(j, { key: 2 }, [
              Q.value === "status" ? (a(), P(Ev, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: N.value,
                "setup-state": oe.value,
                onSwitchBranch: W,
                onCommitChanges: K[12] || (K[12] = (et) => U.value = !0),
                onSyncEnvironment: K[13] || (K[13] = (et) => te.value = !0),
                onViewWorkflows: K[14] || (K[14] = (et) => be("workflows", "this-env")),
                onViewHistory: K[15] || (K[15] = (et) => Ve("history")),
                onViewDebug: K[16] || (K[16] = (et) => Ne("env")),
                onViewNodes: K[17] || (K[17] = (et) => be("nodes", "this-env")),
                onRepairMissingModels: pa,
                onRepairEnvironment: vn,
                onStartSetup: K[18] || (K[18] = (et) => ae.value = !0),
                onViewEnvironments: K[19] || (K[19] = (et) => be("environments", "workspace")),
                onCreateEnvironment: Sa
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (a(), P(Tw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: xe,
                onRefresh: Ge
              }, null, 512)) : Q.value === "models-env" ? (a(), P(Gk, {
                key: 2,
                onNavigate: Xe
              })) : Q.value === "version-control" ? (a(), P(n4, {
                key: 3,
                commits: O.value,
                "current-ref": (at = N.value) == null ? void 0 : at.branch,
                branches: J.value,
                current: ((mt = N.value) == null ? void 0 : mt.branch) || null,
                "initial-tab": ye.value,
                onSelect: ut,
                onCheckout: Ct,
                onSwitch: lt,
                onCreate: xt,
                onDelete: ts,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Q.value === "nodes" ? (a(), P(zb, {
                key: 4,
                "version-mismatches": ((B = (Rt = N.value) == null ? void 0 : Rt.comparison) == null ? void 0 : B.version_mismatches) || [],
                onOpenNodeManager: de,
                onRepairEnvironment: vn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : Q.value === "diagnostics" ? (a(), P(y4, {
                key: 5,
                "initial-tab": se.value
              }, null, 8, ["initial-tab"])) : Q.value === "environments" ? (a(), P(U$, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ue,
                "can-create": A.value.can_create_environment,
                "can-switch": A.value.can_switch_environment,
                "can-delete": A.value.can_delete_environment,
                onSwitch: zs,
                onCreated: ga,
                onDelete: ha,
                onImport: ba,
                onExport: $a
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Q.value === "model-index" ? (a(), P(nb, {
                key: 7,
                onRefresh: Ge
              })) : Q.value === "settings" ? (a(), P(f2, { key: 8 })) : h("", !0)
            ], 64))
          ])
        ]),
        He.value ? (a(), P(O4, {
          key: 1,
          commit: He.value,
          onClose: K[20] || (K[20] = (et) => He.value = null),
          onCheckout: Ct,
          onCreateBranch: Ss
        }, null, 8, ["commit"])) : h("", !0),
        L.value ? (a(), P(xl, {
          key: 2,
          title: L.value.title,
          message: L.value.message,
          details: L.value.details,
          warning: L.value.warning,
          confirmLabel: L.value.confirmLabel,
          cancelLabel: L.value.cancelLabel,
          secondaryLabel: L.value.secondaryLabel,
          secondaryAction: L.value.secondaryAction,
          destructive: L.value.destructive,
          onConfirm: L.value.onConfirm,
          onCancel: K[21] || (K[21] = (et) => L.value = null),
          onSecondary: L.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        Z.value ? (a(), P(It, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: K[22] || (K[22] = (et) => Z.value = !1)
        }, {
          body: g(() => [
            k(M3, {
              embedded: "",
              onImportCompleteSwitch: ka
            })
          ]),
          _: 1
        })) : h("", !0),
        ie.value ? (a(), P(It, {
          key: 4,
          title: Y.value ? `EXPORT ENVIRONMENT: ${Y.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          "fixed-height": "",
          onClose: Ca
        }, {
          body: g(() => [
            k(DC, {
              embedded: "",
              "environment-name": Y.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        k(II, {
          show: I.value,
          "from-environment": ((he = V.value) == null ? void 0 : he.name) || "unknown",
          "to-environment": re.value,
          onConfirm: ca,
          onClose: fa
        }, null, 8, ["show", "from-environment", "to-environment"]),
        U.value && N.value ? (a(), P(uc, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: K[23] || (K[23] = (et) => U.value = !1),
          onCommitted: ma
        }, null, 8, ["status"])) : h("", !0),
        te.value && N.value ? (a(), P(qI, {
          key: 6,
          show: te.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: va,
          onClose: K[24] || (K[24] = (et) => te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        k(UI, {
          show: z.value,
          state: _e.value.state,
          progress: _e.value.progress,
          message: _e.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Ee.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: K[26] || (K[26] = vt((et) => Ee.value = !1, ["self"]))
        }, [
          s("div", PE, [
            s("div", RE, [
              K[39] || (K[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: K[25] || (K[25] = (et) => Ee.value = !1)
              }, [...K[38] || (K[38] = [
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
            s("div", NE, [
              K[40] || (K[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", LE, [
                (a(!0), i(j, null, we(M.value, (et) => (a(), i("div", {
                  key: et.name,
                  class: Fe(["env-item", { current: et.is_current }])
                }, [
                  s("div", DE, [
                    s("div", OE, [
                      s("span", AE, f(et.is_current ? "●" : "○"), 1),
                      s("span", UE, f(et.name), 1),
                      et.current_branch ? (a(), i("span", zE, "(" + f(et.current_branch) + ")", 1)) : h("", !0),
                      et.is_current ? (a(), i("span", VE, "CURRENT")) : h("", !0)
                    ]),
                    s("div", FE, f(et.workflow_count) + " workflows • " + f(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && A.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ia) => zs(et.name)
                  }, " SWITCH ", 8, BE)) : h("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        ae.value ? (a(), P(Y6, {
          key: 8,
          "default-path": ((We = q.value) == null ? void 0 : We.default_path) || "~/comfygit",
          "detected-models-dir": ((dt = q.value) == null ? void 0 : dt.detected_models_dir) || null,
          "initial-step": Ue.value,
          "existing-environments": ((Nt = q.value) == null ? void 0 : Nt.environments) || [],
          "cli-installed": ((jt = q.value) == null ? void 0 : jt.cli_installed) ?? !0,
          "setup-state": ((gs = q.value) == null ? void 0 : gs.state) || "no_workspace",
          "workspace-path": ((ss = q.value) == null ? void 0 : ss.workspace_path) || null,
          onComplete: ya,
          onClose: wa,
          onSwitchEnvironment: _a,
          onEnvironmentCreatedNoSwitch: xa
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        s("div", WE, [
          k(zd, { name: "toast" }, {
            default: g(() => [
              (a(!0), i(j, null, we(De.value, (et) => (a(), i("div", {
                key: et.id,
                class: Fe(["toast", et.type])
              }, [
                s("span", GE, f(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), HE = /* @__PURE__ */ Se(jE, [["__scopeId", "data-v-e21695a2"]]), qE = { class: "item-header" }, KE = { class: "item-info" }, JE = { class: "filename" }, QE = { class: "metadata" }, YE = { class: "size" }, XE = {
  key: 0,
  class: "type"
}, ZE = { class: "item-actions" }, eT = {
  key: 0,
  class: "progress-section"
}, tT = { class: "progress-bar" }, sT = { class: "progress-stats" }, oT = { class: "downloaded" }, nT = { class: "speed" }, aT = {
  key: 0,
  class: "eta"
}, lT = {
  key: 1,
  class: "status-msg paused"
}, iT = {
  key: 2,
  class: "status-msg queued"
}, rT = {
  key: 3,
  class: "status-msg completed"
}, cT = {
  key: 4,
  class: "status-msg failed"
}, uT = {
  key: 0,
  class: "retries"
}, dT = /* @__PURE__ */ $e({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
    function n(c) {
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
    return (c, u) => (a(), i("div", {
      class: Fe(["download-item", `status-${e.item.status}`])
    }, [
      s("div", qE, [
        s("div", KE, [
          s("div", JE, f(e.item.filename), 1),
          s("div", QE, [
            s("span", YE, f(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", XE, f(e.item.type), 1)) : h("", !0)
          ])
        ]),
        s("div", ZE, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : h("", !0),
          e.item.status === "paused" ? (a(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : h("", !0),
          e.item.status === "failed" ? (a(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : h("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : h("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), i("div", eT, [
        s("div", tT, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", sT, [
          s("span", oT, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          s("span", nT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", aT, f(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", lT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", iT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", rT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", cT, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", uT, "(" + f(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Uo = /* @__PURE__ */ Se(dT, [["__scopeId", "data-v-2110df65"]]), fT = { class: "queue-title" }, mT = { class: "count" }, vT = { class: "queue-actions" }, pT = { class: "action-label" }, gT = {
  key: 0,
  class: "overall-progress"
}, hT = { class: "progress-bar" }, yT = {
  key: 0,
  class: "current-mini"
}, wT = { class: "filename" }, _T = { class: "speed" }, kT = {
  key: 1,
  class: "queue-content"
}, bT = {
  key: 0,
  class: "section"
}, $T = {
  key: 1,
  class: "section"
}, CT = { class: "section-header" }, xT = { class: "section-label paused" }, ST = { class: "items-list" }, IT = {
  key: 2,
  class: "section"
}, ET = { class: "section-header" }, TT = { class: "section-label" }, MT = { class: "items-list" }, PT = {
  key: 3,
  class: "section"
}, RT = { class: "section-header" }, NT = { class: "section-label" }, LT = { class: "items-list" }, DT = {
  key: 4,
  class: "section"
}, OT = { class: "section-header" }, AT = { class: "section-label failed" }, UT = { class: "items-list" }, zT = /* @__PURE__ */ $e({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: v,
      retryDownload: m,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: y,
      clearCompleted: _
    } = No(), x = b(!1);
    let C = null;
    kt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (E, N) => {
        C && (clearTimeout(C), C = null);
        const O = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, J = N && (N.active > 0 || N.paused > 0);
        O && J && (C = setTimeout(() => {
          _(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = D(() => {
      var O;
      if (t.items.length === 0) return 0;
      const E = l.value.length, N = ((O = o.value) == null ? void 0 : O.progress) || 0;
      return Math.round((E + N / 100) / t.items.length * 100);
    });
    function R(E) {
      v(E);
    }
    function T(E) {
      return E === 0 ? "..." : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, N) => (a(), P(Ot, { to: "body" }, [
      st(u) ? (a(), i("div", {
        key: 0,
        class: Fe(["model-download-queue", { minimized: !x.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (O) => x.value = !x.value)
        }, [
          s("div", fT, [
            N[4] || (N[4] = s("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", mT, "(" + f(st(d)) + "/" + f(st(t).items.length) + ")", 1)
          ]),
          s("div", vT, [
            s("span", pT, f(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), i("div", kT, [
          st(o) ? (a(), i("div", bT, [
            N[6] || (N[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            k(Uo, {
              item: st(o),
              onCancel: N[1] || (N[1] = (O) => R(st(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          st(c).length > 0 ? (a(), i("div", $T, [
            s("div", CT, [
              s("span", xT, "Paused (" + f(st(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...O) => st(w) && st(w)(...O))
              }, "Resume All")
            ]),
            s("div", ST, [
              (a(!0), i(j, null, we(st(c), (O) => (a(), P(Uo, {
                key: O.id,
                item: O,
                onResume: (J) => st(p)(O.id),
                onRemove: (J) => st(y)(O.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          st(n).length > 0 ? (a(), i("div", IT, [
            s("div", ET, [
              s("span", TT, "Queued (" + f(st(n).length) + ")", 1)
            ]),
            s("div", MT, [
              (a(!0), i(j, null, we(st(n), (O) => (a(), P(Uo, {
                key: O.id,
                item: O,
                onCancel: (J) => R(O.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          st(l).length > 0 ? (a(), i("div", PT, [
            s("div", RT, [
              s("span", NT, "Completed (" + f(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...O) => st(_) && st(_)(...O))
              }, "Clear")
            ]),
            s("div", LT, [
              (a(!0), i(j, null, we(st(l).slice(0, 3), (O) => (a(), P(Uo, {
                key: O.id,
                item: O,
                onRemove: (J) => st(y)(O.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          st(r).length > 0 ? (a(), i("div", DT, [
            s("div", OT, [
              s("span", AT, "Failed (" + f(st(r).length) + ")", 1)
            ]),
            s("div", UT, [
              (a(!0), i(j, null, we(st(r), (O) => (a(), P(Uo, {
                key: O.id,
                item: O,
                onRetry: (J) => st(m)(O.id),
                onRemove: (J) => st(y)(O.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (a(), i("div", gT, [
          s("div", hT, [
            s("div", {
              class: "progress-fill",
              style: Wt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          st(o) ? (a(), i("div", yT, [
            s("span", wT, f(st(o).filename), 1),
            s("span", _T, f(T(st(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), VT = /* @__PURE__ */ Se(zT, [["__scopeId", "data-v-3a3c9607"]]), FT = { class: "detail-header" }, BT = { class: "item-count" }, WT = { class: "resource-list" }, GT = { class: "item-info" }, jT = { class: "item-name" }, HT = {
  key: 0,
  class: "item-subtitle"
}, qT = {
  key: 0,
  class: "installing-badge"
}, KT = ["title"], JT = {
  key: 2,
  class: "installed-badge"
}, QT = {
  key: 3,
  class: "queued-badge"
}, YT = {
  key: 4,
  class: "action-buttons"
}, XT = {
  key: 1,
  class: "no-action"
}, ZT = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = D(() => o.items.filter((y) => y.canAction)), r = D(() => l.value.length > 0 && l.value.every(
      (y) => {
        var _, x;
        return o.queuedItems.has(y.id) || ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) || ((x = o.failedItems) == null ? void 0 : x.has(y.id));
      }
    )), c = D(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(y) {
      return o.queuedItems.has(y.id);
    }
    function d(y) {
      return o.installingItem === y.id;
    }
    function v(y) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function m(y) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function p(y) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(y.id)) || "Unknown error";
    }
    function w(y) {
      return y.actions && y.actions.length > 0 ? y.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (y, _) => (a(), P(It, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (x) => n("close"))
    }, {
      body: g(() => [
        s("div", FT, [
          s("span", BT, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), P(Le, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (x) => n("bulk-action"))
          }, {
            default: g(() => [
              $(f(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        s("div", WT, [
          (a(!0), i(j, null, we(e.items, (x) => (a(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            s("div", GT, [
              s("span", jT, f(x.name), 1),
              x.subtitle ? (a(), i("span", HT, f(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (a(), i(j, { key: 0 }, [
              d(x) ? (a(), i("span", qT, "Installing...")) : m(x) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, KT)) : v(x) ? (a(), i("span", JT, "Installed")) : u(x) ? (a(), i("span", QT, "Queued")) : (a(), i("div", YT, [
                (a(!0), i(j, null, we(w(x), (C) => (a(), P(Le, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => n("action", x, C.key)
                }, {
                  default: g(() => [
                    $(f(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (a(), i("span", XT, f(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (x) => n("close"))
        }, {
          default: g(() => [..._[3] || (_[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), e7 = /* @__PURE__ */ Se(ZT, [["__scopeId", "data-v-ec7e9202"]]), t7 = {
  key: 0,
  class: "loading-state"
}, s7 = {
  key: 1,
  class: "analysis-results"
}, o7 = {
  key: 0,
  class: "section"
}, n7 = { class: "section-header" }, a7 = { class: "section-title" }, l7 = { class: "item-list" }, i7 = { class: "package-info" }, r7 = { class: "package-name" }, c7 = { class: "node-count" }, u7 = {
  key: 1,
  class: "installing-badge"
}, d7 = {
  key: 2,
  class: "queued-badge"
}, f7 = ["title"], m7 = {
  key: 4,
  class: "installed-badge"
}, v7 = {
  key: 1,
  class: "section"
}, p7 = { class: "section-header" }, g7 = { class: "section-title" }, h7 = { class: "item-list" }, y7 = { class: "node-type" }, w7 = {
  key: 0,
  class: "overflow-note"
}, _7 = {
  key: 2,
  class: "section"
}, k7 = { class: "section-header" }, b7 = { class: "section-title" }, $7 = { class: "item-list" }, C7 = { class: "node-type" }, x7 = { class: "not-found" }, S7 = {
  key: 0,
  class: "overflow-note"
}, I7 = {
  key: 3,
  class: "section"
}, E7 = { class: "section-header" }, T7 = { class: "section-title" }, M7 = { class: "item-list" }, P7 = { class: "package-info community-info" }, R7 = { class: "community-title-row" }, N7 = { class: "package-name" }, L7 = { class: "node-count" }, D7 = { class: "community-mapping-note" }, O7 = { key: 0 }, A7 = {
  key: 0,
  class: "community-actions"
}, U7 = {
  key: 1,
  class: "installing-badge"
}, z7 = {
  key: 2,
  class: "queued-badge"
}, V7 = ["title"], F7 = {
  key: 4,
  class: "installed-badge"
}, B7 = ["title"], W7 = {
  key: 1,
  class: "no-url"
}, G7 = {
  key: 4,
  class: "section"
}, j7 = { class: "section-header" }, H7 = { class: "section-title" }, q7 = { class: "item-list" }, K7 = { class: "model-info" }, J7 = { class: "model-name" }, Q7 = {
  key: 1,
  class: "queued-badge"
}, Y7 = {
  key: 1,
  class: "no-url"
}, X7 = { class: "dont-show-again" }, Z7 = 3e4, eM = /* @__PURE__ */ $e({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = b(!1), o = b(null), n = b(null), l = b(!1), r = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Set()), u = b(/* @__PURE__ */ new Map()), d = b(/* @__PURE__ */ new Set()), v = b(!1), m = b(null), p = b(0), w = b(null), y = b(/* @__PURE__ */ new Set()), _ = b(/* @__PURE__ */ new Map()), x = b(/* @__PURE__ */ new Map()), { addToQueue: C } = No(), { queueNodeInstall: S } = gt(), R = D(() => {
      var W;
      return ((W = n.value) == null ? void 0 : W.package_aliases) || {};
    });
    function T(W) {
      if (!W) return null;
      const de = R.value;
      let pe = W;
      const Qe = /* @__PURE__ */ new Set();
      for (; de[pe] && !Qe.has(pe); )
        Qe.add(pe), pe = de[pe];
      return pe;
    }
    function E(W, de) {
      return W instanceof Error && W.message ? W.message : typeof W == "string" && W.trim().length > 0 ? W : de;
    }
    function N(W) {
      for (const [de, pe] of _.value.entries())
        pe === W && _.value.delete(de);
    }
    function O(W) {
      if (!x.value.has(W)) return;
      const de = x.value.get(W);
      clearTimeout(de), x.value.delete(W);
    }
    function J() {
      for (const W of x.value.values())
        clearTimeout(W);
      x.value = /* @__PURE__ */ new Map();
    }
    function M(W) {
      O(W);
      const de = setTimeout(() => {
        if (x.value.delete(W), !c.value.has(W)) return;
        N(W), c.value.delete(W), m.value === W && (m.value = null), u.value.set(W, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", W);
      }, Z7);
      x.value.set(W, de);
    }
    function V(W) {
      const de = `Cannot install "${W.title}" - package_id is missing`;
      u.value.set(W.item_id, de), o.value = de, console.warn("[ComfyGit] Community install requested without package_id:", W);
    }
    const Y = D(() => Z.value.length > 0 || ye.value.length > 0 || se.value.length > 0 || q.value.length > 0 || A.value.length > 0), Z = D(() => {
      var pe, Qe;
      if (!((pe = n.value) != null && pe.nodes)) return [];
      const W = /* @__PURE__ */ new Map(), de = (n.value.nodes.resolved || []).filter((L) => {
        var U;
        return !L.is_installed && ((U = L.package) == null ? void 0 : U.package_id);
      });
      for (const L of de) {
        const U = T(L.package.package_id);
        if (!U) continue;
        W.has(U) || W.set(U, {
          package_id: U,
          title: L.package.title || U,
          node_count: 0,
          node_types: [],
          repository: L.package.repository || null,
          latest_version: L.package.latest_version || null
        });
        const te = W.get(U);
        te.node_count++, te.node_types.push(((Qe = L.reference) == null ? void 0 : Qe.node_type) || L.node_type);
      }
      return Array.from(W.values());
    }), ie = D(() => Z.value.reduce((W, de) => W + de.node_count, 0)), ye = D(() => {
      var W;
      return (W = n.value) != null && W.nodes ? (n.value.nodes.unresolved || []).map((de) => {
        var pe;
        return {
          node_type: ((pe = de.reference) == null ? void 0 : pe.node_type) || de.node_type
        };
      }) : [];
    }), se = D(() => {
      var de;
      if (!((de = n.value) != null && de.nodes)) return [];
      const W = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((pe) => {
        var L;
        const Qe = ((L = pe.reference) == null ? void 0 : L.node_type) || pe.node_type;
        return {
          node_type: Qe,
          guidance: pe.guidance || W[Qe] || null
        };
      });
    }), q = D(() => {
      var pe, Qe, L, U, te, De, Oe, Me;
      if (!((pe = n.value) != null && pe.nodes)) return [];
      const W = n.value.node_guidance || {}, de = /* @__PURE__ */ new Map();
      for (const je of n.value.nodes.uninstallable || []) {
        const nt = ((Qe = je.reference) == null ? void 0 : Qe.node_type) || je.node_type, bt = T(((L = je.package) == null ? void 0 : L.package_id) || null), Et = bt || `node:${nt}`;
        de.has(Et) || de.set(Et, {
          item_id: Et,
          node_type: nt,
          title: ((U = je.package) == null ? void 0 : U.title) || bt || nt,
          node_count: 0,
          package_id: bt,
          repository: ((te = je.package) == null ? void 0 : te.repository) || null,
          latest_version: ((De = je.package) == null ? void 0 : De.latest_version) || null,
          guidance: je.guidance || W[nt] || null
        });
        const ce = de.get(Et);
        ce.node_count++, ce.guidance || (ce.guidance = je.guidance || W[nt] || null), !ce.repository && ((Oe = je.package) != null && Oe.repository) && (ce.repository = je.package.repository), !ce.latest_version && ((Me = je.package) != null && Me.latest_version) && (ce.latest_version = je.package.latest_version);
      }
      return Array.from(de.values());
    }), ae = D(() => q.value.filter((W) => !!W.package_id)), Ue = D(() => q.value.length >= 5 ? q.value.slice(0, 4) : q.value), oe = D(() => ae.value.length > 0 && ae.value.every((W) => {
      const de = W.package_id;
      return r.value.has(de) || c.value.has(de) || u.value.has(de);
    }));
    function ge(W) {
      const de = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return W.repository && de.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), de;
    }
    const A = D(() => {
      var L;
      if (!((L = n.value) != null && L.models)) return [];
      const W = (n.value.models.resolved || []).filter(
        (U) => U.match_type === "download_intent" || U.match_type === "property_download_intent" || U.match_type === "not_found"
      ).map((U) => {
        var te, De, Oe, Me;
        return {
          filename: ((De = (te = U.reference) == null ? void 0 : te.widget_value) == null ? void 0 : De.split("/").pop()) || ((Oe = U.reference) == null ? void 0 : Oe.widget_value) || U.widget_value,
          widget_value: ((Me = U.reference) == null ? void 0 : Me.widget_value) || U.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: U.download_source || null,
          targetPath: U.target_path || null,
          canDownload: !!(U.download_source && U.target_path)
        };
      }), de = (n.value.models.unresolved || []).map((U) => {
        var te, De, Oe, Me;
        return {
          filename: ((De = (te = U.reference) == null ? void 0 : te.widget_value) == null ? void 0 : De.split("/").pop()) || ((Oe = U.reference) == null ? void 0 : Oe.widget_value) || U.widget_value,
          widget_value: ((Me = U.reference) == null ? void 0 : Me.widget_value) || U.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), pe = /* @__PURE__ */ new Map(), Qe = [];
      for (const U of W) {
        if (!U.url) {
          Qe.push(U);
          continue;
        }
        const te = `${U.filename}::${U.url}`, De = pe.get(te);
        if (!De) {
          pe.set(te, U);
          continue;
        }
        !De.targetPath && U.targetPath && (De.targetPath = U.targetPath), !De.canDownload && U.canDownload && (De.canDownload = U.canDownload);
      }
      return [...pe.values(), ...Qe, ...de];
    }), me = D(() => A.value.filter((W) => W.canDownload)), Pe = D(() => Z.value.length >= 5 ? Z.value.slice(0, 4) : Z.value), He = D(() => A.value.length >= 5 ? A.value.slice(0, 4) : A.value), Ee = D(() => Z.value.length > 0 && Z.value.every(
      (W) => r.value.has(W.package_id) || c.value.has(W.package_id) || u.value.has(W.package_id)
    )), G = D(() => me.value.length > 0 && me.value.every((W) => d.value.has(W.url))), ee = D(() => Z.value.length > 0 || ae.value.length > 0 || me.value.length > 0), H = D(() => {
      const W = (Z.value.length === 0 || Ee.value) && (ae.value.length === 0 || oe.value), de = me.value.length === 0 || G.value;
      return W && de;
    }), X = D(() => w.value === "models" ? `Missing Models (${A.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ie.value})` : w.value === "community" ? `Community-Mapped Packages (${q.value.length})` : ""), xe = D(() => w.value === "models" ? A.value.map((W) => ({
      id: W.url || W.widget_value,
      name: W.filename,
      canAction: W.canDownload,
      actionDisabledReason: W.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? Z.value.map((W) => ({
      id: W.package_id,
      name: W.title,
      subtitle: `(${W.node_count} ${W.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? q.value.map((W) => ({
      id: W.package_id || W.item_id,
      name: W.title,
      subtitle: `(${W.node_count} ${W.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!W.package_id,
      actionDisabledReason: W.package_id ? void 0 : "Manual setup required",
      actions: W.package_id ? ge(W) : []
    })) : []);
    function ue(W, de) {
      if (w.value === "models") {
        const pe = A.value.find((Qe) => Qe.url === W.id || Qe.widget_value === W.id);
        pe && Ce(pe);
      } else if (w.value === "packages") {
        const pe = Z.value.find((Qe) => Qe.package_id === W.id);
        pe && I(pe);
      } else if (w.value === "community") {
        const pe = q.value.find((L) => (L.package_id || L.item_id) === W.id);
        if (!pe) return;
        if (!pe.package_id) {
          V({ item_id: pe.item_id, title: pe.title });
          return;
        }
        z(pe, de === "install_git" ? "git" : "registry");
      }
    }
    function le() {
      w.value === "models" ? Ae() : w.value === "packages" ? _e() : w.value === "community" && ke();
    }
    async function I(W) {
      return re(W.package_id, W.latest_version, "registry");
    }
    async function z(W, de) {
      return W.package_id ? re(W.package_id, W.latest_version, de, W.repository) : (V({ item_id: W.item_id, title: W.title }), !1);
    }
    async function re(W, de, pe, Qe) {
      const L = T(W) || W, U = de || "latest";
      if (r.value.has(L) || c.value.has(L) || u.value.has(L))
        return !0;
      Ve(), m.value = L;
      let te = null;
      try {
        const De = {
          id: L,
          version: U,
          selected_version: U,
          mode: "remote",
          channel: "default"
        };
        pe === "git" && Qe && (De.repository = Qe, De.install_source = "git");
        const { ui_id: Oe } = await S(De, {
          beforeQueueStart: (Me) => {
            te = Me, _.value.set(Me, L), c.value.add(L), M(L), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Me,
              packageId: L,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return te || (te = Oe, _.value.set(Oe, L), c.value.add(L), M(L), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Oe,
          packageId: L,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (De) {
        const Oe = E(De, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", De), te && _.value.delete(te), N(L), O(L), c.value.delete(L), u.value.set(L, Oe), !1;
      } finally {
        m.value = null;
      }
    }
    function Ce(W) {
      !W.url || !W.targetPath || d.value.has(W.url) || (C([{
        workflow: "unsaved",
        filename: W.filename,
        url: W.url,
        targetPath: W.targetPath
      }]), d.value.add(W.url));
    }
    async function _e() {
      const W = { attempted: 0, failed: 0 };
      for (const de of Z.value)
        !r.value.has(de.package_id) && !c.value.has(de.package_id) && !u.value.has(de.package_id) && (W.attempted++, await I(de) || W.failed++);
      return W;
    }
    async function ke() {
      const W = { attempted: 0, failed: 0 };
      for (const de of ae.value) {
        const pe = de.package_id;
        !r.value.has(pe) && !c.value.has(pe) && !u.value.has(pe) && (W.attempted++, await z(de, "registry") || W.failed++);
      }
      return W;
    }
    function Ae() {
      const W = me.value.filter(
        (de) => !d.value.has(de.url)
      );
      if (W.length === 0) return 0;
      C(W.map((de) => ({
        workflow: "unsaved",
        filename: de.filename,
        url: de.url,
        targetPath: de.targetPath
      })));
      for (const de of W)
        d.value.add(de.url);
      return W.length;
    }
    async function ze() {
      const W = await _e(), de = await ke();
      Ae();
      const pe = W.attempted + de.attempted, Qe = W.failed + de.failed;
      if (pe > 0 && Qe > 0) {
        const L = pe - Qe;
        o.value = `${L} of ${pe} installs queued, ${Qe} failed`;
      }
    }
    function Re() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ie(W) {
      var L, U;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const de = W == null ? void 0 : W.id;
      if (de && y.value.has(de)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${de} this session`);
        return;
      }
      const pe = window.app, Qe = (L = pe == null ? void 0 : pe.extensionManager) == null ? void 0 : L.workflow;
      if (Qe) {
        let Oe = !1;
        for (let Me = 0; Me < 20; Me++) {
          const je = Qe.activeWorkflow;
          if (!je) {
            await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          const nt = (U = je.activeState) == null ? void 0 : U.id;
          if (!(de && nt === de)) {
            Me < 19 && await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          if (Oe = !0, je.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${je.filename}`), de && y.value.add(de);
            return;
          }
          break;
        }
        Oe || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, J(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const te = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: W, name: "unsaved" })
        });
        if (!te.ok) {
          const De = await te.json();
          throw new Error(De.error || "Failed to analyze workflow");
        }
        n.value = await te.json(), Y.value && (l.value = !0, de && y.value.add(de));
      } catch (te) {
        console.error("[ComfyGit] Failed to analyze workflow:", te);
      } finally {
        t.value = !1;
      }
    }
    function Je() {
      J(), l.value = !1, n.value = null;
    }
    function Be(W) {
      const { workflow: de } = W.detail;
      de && Ie(de);
    }
    function ve(W) {
      var Qe;
      const de = (Qe = W.detail) == null ? void 0 : Qe.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: de,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: W.detail
      });
      const pe = _.value.get(de);
      pe ? (O(pe), m.value = pe, console.log("[ComfyGit] Installing package:", pe)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", de);
    }
    function Q(W) {
      var L, U, te, De, Oe, Me, je;
      const de = (L = W.detail) == null ? void 0 : L.ui_id, pe = (te = (U = W.detail) == null ? void 0 : U.status) == null ? void 0 : te.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: de,
        status: pe,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: W.detail
      });
      const Qe = _.value.get(de);
      if (Qe) {
        if (O(Qe), _.value.delete(de), c.value.delete(Qe), m.value === Qe && (m.value = null), pe === "success")
          r.value.add(Qe), p.value++, console.log("[ComfyGit] Package installed successfully:", Qe);
        else {
          const nt = ((Me = (Oe = (De = W.detail) == null ? void 0 : De.status) == null ? void 0 : Oe.messages) == null ? void 0 : Me[0]) || ((je = W.detail) == null ? void 0 : je.result) || "Unknown error";
          u.value.set(Qe, nt), console.error("[ComfyGit] Package install failed:", Qe, nt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", de);
    }
    let qe = null;
    function be() {
      var W;
      return qe || (qe = (W = window.app) == null ? void 0 : W.api), qe;
    }
    let Xe = !1;
    function Ve() {
      if (Xe) return !0;
      const W = be();
      return W ? (W.addEventListener("cm-task-started", ve), W.addEventListener("cm-task-completed", Q), W.addEventListener("comfygit:workflow-changed", Ne), Xe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ne(W) {
      const { change_type: de } = W.detail;
      (de === "created" || de === "modified") && l.value && (J(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return ct(() => {
      window.addEventListener("comfygit:workflow-loaded", Be);
    }), Po(() => {
      if (J(), window.removeEventListener("comfygit:workflow-loaded", Be), Xe) {
        const W = be();
        W && (W.removeEventListener("cm-task-started", ve), W.removeEventListener("cm-task-completed", Q), W.removeEventListener("comfygit:workflow-changed", Ne)), Xe = !1;
      }
    }), (W, de) => (a(), i(j, null, [
      l.value ? (a(), P(It, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Je
      }, {
        body: g(() => [
          t.value ? (a(), i("div", t7, [...de[5] || (de[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && Y.value ? (a(), i("div", s7, [
            Z.value.length > 0 ? (a(), i("div", o7, [
              s("div", n7, [
                s("span", a7, "Missing Custom Nodes (" + f(ie.value) + ")", 1),
                Z.value.length > 1 ? (a(), P(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ee.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    $(f(Ee.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", l7, [
                (a(!0), i(j, null, we(Pe.value, (pe) => (a(), i("div", {
                  key: pe.package_id,
                  class: "package-item"
                }, [
                  s("div", i7, [
                    s("span", r7, f(pe.title), 1),
                    s("span", c7, "(" + f(pe.node_count) + " " + f(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(pe.package_id) && !c.value.has(pe.package_id) && !u.value.has(pe.package_id) ? (a(), P(Le, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: m.value === pe.package_id,
                    onClick: (Qe) => I(pe)
                  }, {
                    default: g(() => [
                      $(f(m.value === pe.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : m.value === pe.package_id ? (a(), i("span", u7, "Installing...")) : c.value.has(pe.package_id) ? (a(), i("span", d7, "Queued")) : u.value.has(pe.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(pe.package_id)
                  }, "Failed ⚠", 8, f7)) : (a(), i("span", m7, "Installed"))
                ]))), 128)),
                Z.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[0] || (de[0] = (pe) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + f(Z.value.length) + " packages...", 1),
                  de[6] || (de[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            ye.value.length > 0 ? (a(), i("div", v7, [
              s("div", p7, [
                s("span", g7, "Unknown Nodes (" + f(ye.value.length) + ")", 1)
              ]),
              s("div", h7, [
                (a(!0), i(j, null, we(ye.value.slice(0, 5), (pe) => (a(), i("div", {
                  key: pe.node_type,
                  class: "item"
                }, [
                  s("code", y7, f(pe.node_type), 1),
                  de[7] || (de[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                ye.value.length > 5 ? (a(), i("div", w7, " ...and " + f(ye.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            se.value.length > 0 ? (a(), i("div", _7, [
              s("div", k7, [
                s("span", b7, "Requires Newer ComfyUI (" + f(se.value.length) + ")", 1)
              ]),
              s("div", $7, [
                (a(!0), i(j, null, we(se.value.slice(0, 5), (pe) => (a(), i("div", {
                  key: `vg-${pe.node_type}`,
                  class: "item"
                }, [
                  s("code", C7, f(pe.node_type), 1),
                  s("span", x7, f(pe.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                se.value.length > 5 ? (a(), i("div", S7, " ...and " + f(se.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            q.value.length > 0 ? (a(), i("div", I7, [
              s("div", E7, [
                s("span", T7, "Community-Mapped Packages (" + f(q.value.length) + ")", 1),
                ae.value.length > 1 ? (a(), P(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: oe.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    $(f(oe.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", M7, [
                (a(!0), i(j, null, we(Ue.value, (pe) => (a(), i("div", {
                  key: `community-${pe.item_id}`,
                  class: "package-item"
                }, [
                  s("div", P7, [
                    s("div", R7, [
                      s("span", N7, f(pe.title), 1),
                      s("span", L7, "(" + f(pe.node_count) + " " + f(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", D7, [
                      de[8] || (de[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      pe.guidance ? (a(), i("span", O7, ". " + f(pe.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  pe.package_id ? (a(), i(j, { key: 0 }, [
                    !r.value.has(pe.package_id) && !c.value.has(pe.package_id) && !u.value.has(pe.package_id) ? (a(), i("div", A7, [
                      k(Le, {
                        size: "sm",
                        variant: "secondary",
                        disabled: m.value === pe.package_id,
                        onClick: (Qe) => z(pe, "registry")
                      }, {
                        default: g(() => [
                          $(f(m.value === pe.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      pe.repository ? (a(), P(Le, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: m.value === pe.package_id,
                        onClick: (Qe) => z(pe, "git")
                      }, {
                        default: g(() => [...de[9] || (de[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : m.value === pe.package_id ? (a(), i("span", U7, "Installing...")) : c.value.has(pe.package_id) ? (a(), i("span", z7, "Queued")) : u.value.has(pe.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(pe.package_id)
                    }, "Failed ⚠", 8, V7)) : (a(), i("span", F7, "Installed"))
                  ], 64)) : (a(), i(j, { key: 1 }, [
                    u.value.has(pe.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(pe.item_id)
                    }, "Failed ⚠", 8, B7)) : (a(), i("span", W7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                q.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[1] || (de[1] = (pe) => w.value = "community")
                }, [
                  s("span", null, "Show all " + f(q.value.length) + " packages...", 1),
                  de[10] || (de[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            A.value.length > 0 ? (a(), i("div", G7, [
              s("div", j7, [
                s("span", H7, "Missing Models (" + f(A.value.length) + ")", 1),
                me.value.length > 1 ? (a(), P(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: G.value,
                  onClick: Ae
                }, {
                  default: g(() => [
                    $(f(G.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", q7, [
                (a(!0), i(j, null, we(He.value, (pe) => (a(), i("div", {
                  key: pe.widget_value,
                  class: "model-item"
                }, [
                  s("div", K7, [
                    s("span", J7, f(pe.filename), 1)
                  ]),
                  pe.canDownload ? (a(), i(j, { key: 0 }, [
                    d.value.has(pe.url) ? (a(), i("span", Q7, "Queued")) : (a(), P(Le, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Qe) => Ce(pe)
                    }, {
                      default: g(() => [...de[11] || (de[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), i("span", Y7, "Manual download required"))
                ]))), 128)),
                A.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[2] || (de[2] = (pe) => w.value = "models")
                }, [
                  s("span", null, "Show all " + f(A.value.length) + " models...", 1),
                  de[12] || (de[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            s("div", X7, [
              k(Hn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  de[3] || (de[3] = (pe) => v.value = pe),
                  Re
                ]
              }, {
                default: g(() => [...de[13] || (de[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          k(Le, {
            variant: "secondary",
            onClick: Je
          }, {
            default: g(() => [...de[14] || (de[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          ee.value ? (a(), P(Le, {
            key: 0,
            variant: "primary",
            disabled: H.value,
            onClick: ze
          }, {
            default: g(() => [
              $(f(H.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      w.value ? (a(), P(e7, {
        key: 1,
        title: X.value,
        items: xe.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : m.value,
        onClose: de[4] || (de[4] = (pe) => w.value = null),
        onAction: ue,
        onBulkAction: le
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), tM = /* @__PURE__ */ Se(eM, [["__scopeId", "data-v-dfb55c3f"]]), sM = {
  key: 0,
  class: "io-mapping-root"
}, oM = { class: "io-mapping-visual-layer" }, nM = { class: "io-mapping-header" }, aM = { class: "io-mapping-header-main" }, lM = { class: "io-mapping-subtitle" }, iM = {
  key: 0,
  class: "io-mapping-hover-summary"
}, rM = { class: "io-mapping-header-actions" }, cM = { class: "io-mapping-sidebar" }, uM = { class: "io-mapping-sidebar-scroll" }, dM = {
  key: 0,
  class: "io-state-block"
}, fM = {
  key: 1,
  class: "io-state-block io-state-error"
}, mM = { class: "contract-meta-section" }, vM = { class: "contract-meta-toggle-icon" }, pM = {
  key: 0,
  class: "contract-meta-body"
}, gM = { class: "contract-summary" }, hM = { class: "summary-pill" }, yM = { class: "summary-pill" }, wM = { class: "summary-pill" }, _M = { class: "mapping-section" }, kM = { class: "section-header" }, bM = {
  key: 0,
  class: "empty-message"
}, $M = ["onClick"], CM = { class: "item-card-title" }, xM = { class: "item-card-meta" }, SM = { class: "item-card-summary" }, IM = { key: 0 }, EM = { class: "mapping-section" }, TM = { class: "section-header" }, MM = {
  key: 0,
  class: "empty-message"
}, PM = ["onClick"], RM = { class: "item-card-title" }, NM = { class: "item-card-meta" }, LM = { class: "item-card-summary" }, DM = { class: "io-mapping-footer" }, OM = { class: "io-mapping-footer-left" }, AM = { class: "io-mapping-footer-right" }, UM = /* @__PURE__ */ $e({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = gt(), r = b(!1), c = b(""), u = b(!1), d = b(!1), v = b(!1), m = b(null), p = b(null), w = b(null), y = b(!1), _ = b(!1), x = b(null), C = b(null), S = b(0), R = b(null), T = b(null);
    let E = null;
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
    ], O = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], J = D(() => {
      var L;
      return ((L = p.value) == null ? void 0 : L.contract_summary.has_contract) === !0;
    }), M = D(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const L = w.value.default_contract || "default";
      return w.value.contracts[L] || (w.value.contracts[L] = { inputs: [], outputs: [] }), w.value.contracts[L];
    }), V = D(() => {
      var U;
      const L = ((U = p.value) == null ? void 0 : U.contract_summary.status) ?? "none";
      return L === "valid" ? "Valid Contract" : L === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function Y(L) {
      return L ? JSON.parse(JSON.stringify(L)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function Z(L) {
      return L === "integer" || L === "number";
    }
    function ie(L) {
      return L === "enum";
    }
    function ye(L) {
      return L == null ? "" : String(L);
    }
    function se(L) {
      const U = L.trim();
      if (!U) return;
      const te = Number(U);
      return Number.isFinite(te) ? te : void 0;
    }
    function q(L) {
      return (L || []).join(`
`);
    }
    function ae(L) {
      return L.split(/[\n,]/).map((U) => U.trim()).filter(Boolean);
    }
    function Ue(L) {
      return typeof L == "string" ? L.length > 24 ? `${L.slice(0, 24)}...` : L : String(L);
    }
    function oe(L) {
      return L == null ? "" : String(L);
    }
    function ge(L) {
      var te;
      const U = (te = L == null ? void 0 : L.options) == null ? void 0 : te.values;
      return Array.isArray(U) ? U.map((De) => String(De)).filter(Boolean) : [];
    }
    function A(L, U) {
      var Oe;
      const te = (Oe = L == null ? void 0 : L.options) == null ? void 0 : Oe[U];
      if (te == null || te === "") return;
      const De = Number(te);
      return Number.isFinite(De) ? De : void 0;
    }
    function me(L, U) {
      return L.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || U;
    }
    function Pe(L) {
      if (!w.value) return;
      const U = L.trim() || "default";
      w.value.default_contract = U, w.value.contracts[U] || (w.value.contracts[U] = { inputs: [], outputs: [] });
    }
    function He(L) {
      const U = String(L ?? "").toLowerCase();
      return U.includes("image") ? "image" : U.includes("video") ? "video" : U.includes("audio") ? "audio" : U.includes("int") ? "integer" : U.includes("float") || U.includes("double") || U.includes("number") ? "number" : U.includes("bool") ? "boolean" : U.includes("combo") || U.includes("enum") ? "enum" : U.includes("string") || U.includes("text") ? "string" : "file";
    }
    function Ee(L) {
      M.value.inputs.splice(L, 1), x.value === L && (x.value = null);
    }
    function G(L) {
      M.value.outputs.splice(L, 1), C.value === L && (C.value = null);
    }
    function ee(L) {
      x.value = x.value === L ? null : L, x.value != null && (C.value = null);
    }
    function H(L) {
      C.value = C.value === L ? null : L, C.value != null && (x.value = null);
    }
    function X(L) {
      const U = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(L)) : String(L);
      return document.querySelector(`[data-node-id="${U}"]`);
    }
    function xe(L) {
      return L instanceof Element ? !!L.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ue(L) {
      var De, Oe, Me, je, nt, bt;
      if (!(L instanceof Element)) return null;
      const U = L.closest("[data-node-id]"), te = U == null ? void 0 : U.getAttribute("data-node-id");
      return te ? ((Me = (Oe = (De = t.comfyApp) == null ? void 0 : De.graph) == null ? void 0 : Oe.getNodeById) == null ? void 0 : Me.call(Oe, te)) ?? ((bt = (nt = (je = t.comfyApp) == null ? void 0 : je.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : bt.call(nt, te)) ?? null : null;
    }
    function le(L, U) {
      if (U == null || U < 0) return null;
      const te = X(L);
      return te ? te.querySelectorAll('[data-testid="node-widget"]')[U] ?? null : null;
    }
    function I(L) {
      return !L || L.width <= 0 || L.height <= 0 ? null : {
        left: `${L.left}px`,
        top: `${L.top}px`,
        width: `${L.width}px`,
        height: `${L.height}px`
      };
    }
    function z(L) {
      const U = X((L == null ? void 0 : L.id) ?? "");
      if (U) return U.getBoundingClientRect();
      const te = t.comfyApp;
      if (!L || typeof (te == null ? void 0 : te.canvasPosToClientPos) != "function") return null;
      const Oe = te.canvasPosToClientPos([L.pos[0], L.pos[1] - 32]), Me = te.canvasPosToClientPos([L.pos[0] + L.size[0], L.pos[1] + L.size[1]]);
      return !Oe || !Me ? null : new DOMRect(Oe[0], Oe[1], Me[0] - Oe[0], Me[1] - Oe[1]);
    }
    function re(L) {
      var nt, bt, Et, ce, F, fe, Ge;
      const U = le(L.node_id, L.widget_idx);
      if (U) return U.getBoundingClientRect();
      const te = ((Et = (bt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : bt.getNodeById) == null ? void 0 : Et.call(bt, String(L.node_id))) ?? ((fe = (F = (ce = t.comfyApp) == null ? void 0 : ce.rootGraph) == null ? void 0 : F.getNodeById) == null ? void 0 : fe.call(F, String(L.node_id)));
      if (!te || typeof L.widget_idx != "number" || !Array.isArray(te.widgets)) return null;
      const De = te.widgets[L.widget_idx];
      if (!De || typeof ((Ge = t.comfyApp) == null ? void 0 : Ge.canvasPosToClientPos) != "function") return z(te);
      const Oe = 10, Me = t.comfyApp.canvasPosToClientPos([te.pos[0] + Oe, te.pos[1] + (De.y ?? 0)]), je = t.comfyApp.canvasPosToClientPos([te.pos[0] + te.size[0] - Oe, te.pos[1] + (De.y ?? 0) + (De.computedHeight ?? 24)]);
      return !Me || !je ? z(te) : new DOMRect(Me[0], Me[1], je[0] - Me[0], je[1] - Me[1]);
    }
    function Ce(L) {
      var te, De, Oe, Me, je, nt;
      const U = ((Oe = (De = (te = t.comfyApp) == null ? void 0 : te.graph) == null ? void 0 : De.getNodeById) == null ? void 0 : Oe.call(De, String(L.node_id))) ?? ((nt = (je = (Me = t.comfyApp) == null ? void 0 : Me.rootGraph) == null ? void 0 : je.getNodeById) == null ? void 0 : nt.call(je, String(L.node_id)));
      return z(U);
    }
    const _e = D(() => (S.value, M.value.inputs.map((L, U) => {
      const te = I(re(L));
      return te ? {
        key: `input-${U}-${L.node_id}-${L.widget_idx ?? "na"}`,
        style: te,
        active: x.value === U
      } : null;
    }).filter((L) => !!L))), ke = D(() => (S.value, M.value.outputs.map((L, U) => {
      const te = I(Ce(L));
      return te ? {
        key: `output-${U}-${L.node_id}-${L.selector ?? "primary"}`,
        style: te,
        active: C.value === U
      } : null;
    }).filter((L) => !!L)));
    function Ae(L) {
      var Et, ce, F, fe, Ge, ut, Ct, lt, xt, ts;
      if (xe(L.target)) return null;
      const U = (Et = t.comfyApp) == null ? void 0 : Et.canvas;
      if (!U) return null;
      const te = (ce = U.convertEventToCanvasOffset) == null ? void 0 : ce.call(U, L);
      if (!te || te.length < 2) return null;
      const [De, Oe] = te, Me = U.graph || ((F = t.comfyApp) == null ? void 0 : F.graph) || ((fe = t.comfyApp) == null ? void 0 : fe.rootGraph), je = ((Ge = Me == null ? void 0 : Me.getNodeOnPos) == null ? void 0 : Ge.call(Me, De, Oe, U.visible_nodes)) || ((ut = U.getNodeOnPos) == null ? void 0 : ut.call(U, De, Oe)) || ue(L.target);
      if (!je) return null;
      const nt = (Ct = je.getWidgetOnPos) == null ? void 0 : Ct.call(je, De, Oe, !0);
      if (nt)
        return { kind: "input", node: je, widget: nt, canvasX: De, canvasY: Oe };
      const bt = ((lt = je.getOutputOnPos) == null ? void 0 : lt.call(je, [De, Oe])) || ((ts = (xt = je.constructor) == null ? void 0 : xt.nodeData) != null && ts.output_node ? { name: je.title || je.type || "output", type: "image" } : null);
      return bt ? { kind: "output", node: je, output: bt, canvasX: De, canvasY: Oe } : null;
    }
    function ze(L, U) {
      var nt;
      const te = Array.isArray(L.widgets) ? L.widgets.indexOf(U) : -1, De = M.value.inputs.findIndex(
        (bt) => String(bt.node_id) === String(L.id) && bt.widget_idx === te
      );
      if (De >= 0) {
        x.value = De;
        return;
      }
      const Oe = typeof ((nt = U == null ? void 0 : U.options) == null ? void 0 : nt.property) == "string" ? U.options.property : void 0, Me = (U == null ? void 0 : U.name) || Oe || "input", je = {
        name: me(String(Me), `input_${M.value.inputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || Oe || `Input ${M.value.inputs.length + 1}`),
        type: He(U == null ? void 0 : U.type),
        node_id: String(L.id),
        widget_idx: te >= 0 ? te : void 0,
        field_key: Oe,
        required: !0,
        default: (U == null ? void 0 : U.value) ?? ""
      };
      Z(je.type) && (je.min = A(U, "min"), je.max = A(U, "max")), ie(je.type) && (je.enum_values = ge(U)), M.value.inputs.push(je), x.value = M.value.inputs.length - 1, C.value = null;
    }
    function Re(L, U) {
      const te = Array.isArray(L.outputs) ? L.outputs.indexOf(U) : -1, De = te >= 0 ? `slot:${te}` : "primary", Oe = M.value.outputs.findIndex(
        (je) => String(je.node_id) === String(L.id) && (je.selector || "primary") === De
      );
      if (Oe >= 0) {
        C.value = Oe;
        return;
      }
      const Me = {
        name: me(String((U == null ? void 0 : U.name) || "output"), `output_${M.value.outputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || `Output ${M.value.outputs.length + 1}`),
        type: He(U == null ? void 0 : U.type),
        node_id: String(L.id),
        selector: De
      };
      M.value.outputs.push(Me), C.value = M.value.outputs.length - 1, x.value = null;
    }
    function Ie(L) {
      var De, Oe, Me;
      if (!r.value) {
        R.value = null, T.value = null;
        return;
      }
      const U = Ae(L);
      if (!U) {
        R.value = null, T.value = null;
        return;
      }
      if (U.kind === "input") {
        const je = Array.isArray(U.node.widgets) ? U.node.widgets.indexOf(U.widget) : -1, nt = I(((De = le(U.node.id, je)) == null ? void 0 : De.getBoundingClientRect()) ?? re({
          node_id: String(U.node.id),
          widget_idx: je >= 0 ? je : void 0
        }));
        if (!nt) {
          R.value = null, T.value = null;
          return;
        }
        R.value = {
          kind: "input",
          label: `${((Oe = U.widget) == null ? void 0 : Oe.name) || "widget"} · Node ${U.node.id}`
        }, T.value = { kind: "input", style: nt };
        return;
      }
      const te = I(z(U.node));
      if (!te) {
        R.value = null, T.value = null;
        return;
      }
      R.value = {
        kind: "output",
        label: `${((Me = U.output) == null ? void 0 : Me.name) || U.node.title || U.node.type || "output"} · Node ${U.node.id}`
      }, T.value = { kind: "output", style: te };
    }
    function Je(L) {
      var De, Oe, Me;
      if (!r.value || !w.value || L.button !== 0) return;
      const U = Ae(L);
      if (!U) return;
      const te = (De = t.comfyApp) == null ? void 0 : De.canvas;
      if (te) {
        if (U.kind === "input") {
          L.preventDefault(), L.stopImmediatePropagation(), L.stopPropagation(), Array.isArray(te.graph_mouse) && (te.graph_mouse[0] = U.canvasX, te.graph_mouse[1] = U.canvasY), (Oe = te.selectNode) == null || Oe.call(te, U.node, !1), ze(U.node, U.widget);
          return;
        }
        L.preventDefault(), L.stopImmediatePropagation(), L.stopPropagation(), Array.isArray(te.graph_mouse) && (te.graph_mouse[0] = U.canvasX, te.graph_mouse[1] = U.canvasY), (Me = te.selectNode) == null || Me.call(te, U.node, !1), Re(U.node, U.output);
      }
    }
    function Be() {
      document.addEventListener("pointerdown", Je, !0), document.addEventListener("pointermove", Ie, !0);
    }
    function ve() {
      document.removeEventListener("pointerdown", Je, !0), document.removeEventListener("pointermove", Ie, !0);
    }
    async function Q() {
      if (c.value) {
        u.value = !0, m.value = null;
        try {
          p.value = await o(c.value), w.value = Y(p.value.execution_contract);
        } catch (L) {
          m.value = L instanceof Error ? L.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function qe() {
      if (!(!w.value || !c.value)) {
        d.value = !0, m.value = null;
        try {
          p.value = await n(c.value, w.value), w.value = Y(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ne({ reopenPanel: !0 });
        } catch (L) {
          m.value = L instanceof Error ? L.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function be() {
      _.value = !0;
    }
    async function Xe() {
      if (c.value) {
        _.value = !1, v.value = !0, m.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ne({ reopenPanel: !0 });
        } catch (L) {
          m.value = L instanceof Error ? L.message : "Failed to delete workflow contract";
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
    function Ne(L) {
      r.value = !1, R.value = null, T.value = null, _.value = !1, L != null && L.reopenPanel && Ve();
    }
    async function W(L) {
      var De, Oe;
      const te = (Oe = (De = L.detail) == null ? void 0 : De.workflowName) == null ? void 0 : Oe.trim();
      te && (c.value = te, x.value = null, C.value = null, y.value = !1, r.value = !0, await Q());
    }
    function de(L) {
      if (L.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Ne({ reopenPanel: !0 });
      }
    }
    function pe() {
      if (E != null) return;
      const L = () => {
        if (S.value += 1, !r.value) {
          E = null;
          return;
        }
        E = window.requestAnimationFrame(L);
      };
      E = window.requestAnimationFrame(L);
    }
    function Qe() {
      E != null && (window.cancelAnimationFrame(E), E = null);
    }
    return kt(r, (L) => {
      L ? (Be(), pe()) : (ve(), Qe());
    }), ct(() => {
      window.addEventListener("comfygit:open-io-mapping", W), window.addEventListener("keydown", de);
    }), sa(() => {
      ve(), Qe(), window.removeEventListener("comfygit:open-io-mapping", W), window.removeEventListener("keydown", de);
    }), (L, U) => r.value ? (a(), i("div", sM, [
      s("div", oM, [
        (a(!0), i(j, null, we(_e.value, (te) => (a(), i("div", {
          key: te.key,
          class: Fe(["io-highlight", "io-highlight-input", { active: te.active }]),
          style: Wt(te.style)
        }, null, 6))), 128)),
        (a(!0), i(j, null, we(ke.value, (te) => (a(), i("div", {
          key: te.key,
          class: Fe(["io-highlight", "io-highlight-output", { active: te.active }]),
          style: Wt(te.style)
        }, null, 6))), 128)),
        T.value ? (a(), i("div", {
          key: 0,
          class: Fe(["io-highlight", T.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Wt(T.value.style)
        }, null, 6)) : h("", !0)
      ]),
      s("div", nM, [
        s("div", aM, [
          U[8] || (U[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", lM, f(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          R.value ? (a(), i("div", iM, " Hovering " + f(R.value.kind) + ": " + f(R.value.label), 1)) : h("", !0)
        ]),
        s("div", rM, [
          k(Le, {
            size: "sm",
            variant: "secondary",
            onClick: U[0] || (U[0] = (te) => Ne({ reopenPanel: !0 }))
          }, {
            default: g(() => [...U[9] || (U[9] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", cM, [
        s("div", uM, [
          u.value ? (a(), i("div", dM, " Loading workflow contract... ")) : m.value ? (a(), i("div", fM, f(m.value), 1)) : w.value ? (a(), i(j, { key: 2 }, [
            s("section", mM, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: U[1] || (U[1] = (te) => y.value = !y.value)
              }, [
                U[10] || (U[10] = s("span", null, "Contract Details", -1)),
                s("span", vM, f(y.value ? "▾" : "▸"), 1)
              ]),
              y.value ? (a(), i("div", pM, [
                k(Lt, { label: "Default Contract" }, {
                  default: g(() => [
                    k(wt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Pe
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                k(Lt, { label: "Display Name" }, {
                  default: g(() => [
                    k(wt, {
                      modelValue: M.value.display_name,
                      "onUpdate:modelValue": U[2] || (U[2] = (te) => M.value.display_name = te),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Lt, { label: "Description" }, {
                  default: g(() => [
                    k(xo, {
                      modelValue: M.value.description,
                      "onUpdate:modelValue": U[3] || (U[3] = (te) => M.value.description = te),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : h("", !0)
            ]),
            s("section", gM, [
              s("span", hM, f(V.value), 1),
              s("span", yM, f(M.value.inputs.length) + " input" + f(M.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", wM, f(M.value.outputs.length) + " output" + f(M.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", _M, [
              s("div", kM, [
                k(no, { variant: "section" }, {
                  default: g(() => [...U[11] || (U[11] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              M.value.inputs.length ? h("", !0) : (a(), i("div", bM, " No inputs configured. ")),
              (a(!0), i(j, null, we(M.value.inputs, (te, De) => (a(), i("div", {
                key: `input-${De}`,
                class: Fe(["item-card", { selected: x.value === De }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Oe) => ee(De)
                }, [
                  s("div", null, [
                    s("div", CM, f(te.name || `Input ${De + 1}`), 1),
                    s("div", xM, [
                      $(" Node " + f(te.node_id || "?"), 1),
                      te.widget_idx !== void 0 ? (a(), i(j, { key: 0 }, [
                        $(" · Widget " + f(te.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    s("div", SM, [
                      s("span", null, f(te.type || "string"), 1),
                      s("span", null, f(te.required ? "required" : "optional"), 1),
                      te.default !== void 0 && te.default !== "" ? (a(), i("span", IM, "default " + f(Ue(te.default)), 1)) : h("", !0)
                    ])
                  ]),
                  k(Le, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Oe) => Ee(De), ["stop"])
                  }, {
                    default: g(() => [...U[12] || (U[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, $M),
                x.value === De ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[4] || (U[4] = vt(() => {
                  }, ["stop"]))
                }, [
                  k(Lt, { label: "Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: te.name,
                        "onUpdate:modelValue": (Oe) => te.name = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Display Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: te.display_name,
                        "onUpdate:modelValue": (Oe) => te.display_name = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Type" }, {
                    default: g(() => [
                      k(Rn, {
                        "model-value": te.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.type = Oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Required" }, {
                    default: g(() => [
                      k(Rn, {
                        "model-value": te.required ? "true" : "false",
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.required = Oe === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, {
                    class: Fe({ "item-grid-full": te.type === "string" || te.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      te.type === "string" ? (a(), P(xo, {
                        key: 0,
                        "model-value": oe(te.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Oe) => te.default = Oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), P(wt, {
                        key: 1,
                        modelValue: te.default,
                        "onUpdate:modelValue": (Oe) => te.default = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  Z(te.type) ? (a(), P(Lt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      k(wt, {
                        "model-value": ye(te.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.min = se(Oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  Z(te.type) ? (a(), P(Lt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      k(wt, {
                        "model-value": ye(te.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.max = se(Oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  ie(te.type) ? (a(), P(Lt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      k(xo, {
                        "model-value": q(te.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Oe) => te.enum_values = ae(Oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            s("section", EM, [
              s("div", TM, [
                k(no, { variant: "section" }, {
                  default: g(() => [...U[13] || (U[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              M.value.outputs.length ? h("", !0) : (a(), i("div", MM, " No outputs configured. ")),
              (a(!0), i(j, null, we(M.value.outputs, (te, De) => (a(), i("div", {
                key: `output-${De}`,
                class: Fe(["item-card", { selected: C.value === De }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Oe) => H(De)
                }, [
                  s("div", null, [
                    s("div", RM, f(te.name || `Output ${De + 1}`), 1),
                    s("div", NM, [
                      $(" Node " + f(te.node_id || "?"), 1),
                      te.selector ? (a(), i(j, { key: 0 }, [
                        $(" · " + f(te.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    s("div", LM, [
                      s("span", null, f(te.type || "file"), 1)
                    ])
                  ]),
                  k(Le, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Oe) => G(De), ["stop"])
                  }, {
                    default: g(() => [...U[14] || (U[14] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, PM),
                C.value === De ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[5] || (U[5] = vt(() => {
                  }, ["stop"]))
                }, [
                  k(Lt, { label: "Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: te.name,
                        "onUpdate:modelValue": (Oe) => te.name = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Display Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: te.display_name,
                        "onUpdate:modelValue": (Oe) => te.display_name = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Type" }, {
                    default: g(() => [
                      k(Rn, {
                        "model-value": te.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.type = Oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        s("div", DM, [
          s("div", OM, [
            k(Le, {
              variant: "secondary",
              onClick: U[6] || (U[6] = (te) => Ne({ reopenPanel: !0 }))
            }, {
              default: g(() => [...U[15] || (U[15] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", AM, [
            k(Le, {
              variant: "danger",
              disabled: !J.value,
              loading: v.value,
              onClick: be
            }, {
              default: g(() => [...U[16] || (U[16] = [
                $(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            k(Le, {
              variant: "primary",
              loading: d.value,
              onClick: qe
            }, {
              default: g(() => [...U[17] || (U[17] = [
                $(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (a(), P(xl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Xe,
        onCancel: U[7] || (U[7] = (te) => _.value = !1)
      }, null, 8, ["message"])) : h("", !0)
    ])) : h("", !0);
  }
}), zM = /* @__PURE__ */ Se(UM, [["__scopeId", "data-v-13515b27"]]), VM = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', FM = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', BM = {
  comfy: VM,
  phosphor: FM
}, El = "comfy", vc = "comfygit-theme";
let Zs = null, pc = El;
function WM() {
  try {
    const e = localStorage.getItem(vc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return El;
}
function gc(e = El) {
  Zs && Zs.remove(), Zs = document.createElement("style"), Zs.id = "comfygit-theme-styles", Zs.setAttribute("data-theme", e), Zs.textContent = BM[e], document.head.appendChild(Zs), document.body.setAttribute("data-comfygit-theme", e), pc = e;
  try {
    localStorage.setItem(vc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function GM() {
  return pc;
}
function jM(e) {
  gc(e);
}
function HM(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Tl = document.createElement("link");
Tl.rel = "stylesheet";
Tl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Tl);
const qM = WM();
gc(qM);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), jM(e);
  },
  getTheme: () => {
    const e = GM();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ps = null, Xo = null, Xt = null, Zo = null, zo = null, xi = null, Vo = null, Si = null, Fo = null, Ii = null;
const So = b(null);
let cn = "no_workspace", hc = !1;
async function Nn() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const t = await Zt.api.fetchApi("/v2/comfygit/status");
    t.ok && (So.value = await t.json());
  } catch {
  }
}
async function tl() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const t = await Zt.api.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        cn = o.state, hc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function sl() {
  var t;
  if (cn === "managed" || !hc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function KM() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function Cn(e) {
  Go(), Ps = document.createElement("div"), Ps.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ps.appendChild(t), Ps.addEventListener("click", (n) => {
    n.target === Ps && Go();
  });
  const o = (n) => {
    n.key === "Escape" && (Go(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Xo = mn({
    render: () => Ro(HE, {
      initialView: e,
      onClose: Go,
      onStatusUpdate: async (n) => {
        So.value = n, en(), await tl(), ol(), sl();
      }
    })
  }), Xo.mount(t), document.body.appendChild(Ps);
}
function Go() {
  Xo && (Xo.unmount(), Xo = null), Ps && (Ps.remove(), Ps = null);
}
function Ei(e) {
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
  document.addEventListener("keydown", n), Zo = mn({
    render: () => Ro(uc, {
      status: So.value,
      onClose: Bo,
      onCommitted: (l) => {
        Bo(), JM(l.success, l.message), Nn().then(en);
      }
    })
  }), Zo.mount(Xt), document.body.appendChild(Xt);
}
function Bo() {
  Zo && (Zo.unmount(), Zo = null), Xt && (Xt.remove(), Xt = null);
}
function JM(e, t) {
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
function QM() {
  zo || (zo = document.createElement("div"), zo.className = "comfygit-download-queue-root", xi = mn({
    render: () => Ro(VT)
  }), xi.mount(zo), document.body.appendChild(zo), console.log("[ComfyGit] Model download queue mounted"));
}
function YM() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-missing-resources-root", Si = mn({
    render: () => Ro(tM)
  }), Si.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function XM() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-io-mapping-root", Ii = mn({
    render: () => Ro(zM, {
      comfyApp: Zt
    })
  }), Ii.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Kt = null;
function en() {
  if (!Kt) return;
  const e = Kt.querySelector(".commit-indicator");
  e && (e.style.display = KM() ? "block" : "none");
}
function ol() {
  if (!Kt) return;
  const e = cn !== "managed";
  Kt.disabled = e, Kt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const yc = document.createElement("style");
yc.textContent = `
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
document.head.appendChild(yc);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Cn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Kt && !Kt.disabled && Ei(Kt);
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
    if (cn === "managed")
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
    if (cn !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = Cn, Kt = document.createElement("button"), Kt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Kt.innerHTML = 'Commit <span class="commit-indicator"></span>', Kt.title = "Quick Commit", Kt.onclick = () => Ei(Kt), e.appendChild(t), e.appendChild(Kt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), QM(), YM(), XM(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Cn(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Go();
    }));
    const { loadPendingDownloads: o } = No();
    o(), await Promise.all([Nn(), tl()]), en(), ol(), sl(), setTimeout(sl, 100), setInterval(async () => {
      await Promise.all([Nn(), tl()]), en(), ol();
    }, 3e4);
    const n = Zt.api;
    if (n) {
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
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => c(), p.appendChild(y);
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
        const _ = document.createElement("span");
        _.textContent = "⚠️", _.style.fontSize = "20px", y.appendChild(_);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), y.appendChild(x);
        const R = document.createElement("button");
        R.textContent = "View Logs", R.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, R.onmouseover = () => R.style.background = "#c62828", R.onmouseout = () => R.style.background = "#e53935", R.onclick = () => {
          y.remove(), Cn("debug-env");
        }, y.appendChild(R);
        const T = document.createElement("button");
        T.textContent = "×", T.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => y.remove(), y.appendChild(T), document.body.appendChild(y), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
        const _ = document.createElement("span");
        _.textContent = "✅", _.style.fontSize = "20px", y.appendChild(_);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), y.appendChild(x);
        const R = document.createElement("button");
        R.textContent = "Apply Changes", R.style.cssText = `
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
        `, R.onmouseover = () => R.style.background = "rgba(255,255,255,0.1)", R.onmouseout = () => R.style.background = "transparent", R.onclick = async () => {
          R.disabled = !0, R.textContent = "Restarting...", R.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, y.style.borderColor = "#4caf50", R.style.display = "none", setTimeout(() => {
                  y.remove();
                }, 3e3);
              } catch (N) {
                console.error("[ComfyGit] Failed to refresh nodes:", N), _.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", y.style.borderColor = "#4caf50", R.style.display = "none";
              }
            };
            n.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", y.style.borderColor = "#e53935", R.textContent = "Try Again", R.disabled = !1, R.style.opacity = "1";
          }
        }, y.appendChild(R);
        const T = document.createElement("button");
        T.textContent = "×", T.title = "Dismiss (restart later)", T.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => y.remove(), y.appendChild(T), document.body.appendChild(y), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: y } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${y}`), await Nn(), en();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      n.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), m = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (p) => {
        const w = HM(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: y = 1 } = w.detail || {};
        v(y);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
