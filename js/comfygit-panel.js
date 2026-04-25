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
const ht = {}, wo = [], $s = () => {
}, Ti = () => !1, qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), al = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, ll = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, kc = Object.prototype.hasOwnProperty, mt = (e, t) => kc.call(e, t), Xe = Array.isArray, _o = (e) => un(e) === "[object Map]", Mo = (e) => un(e) === "[object Set]", Ml = (e) => un(e) === "[object Date]", et = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Mi = (e) => (gt(e) || et(e)) && et(e.then) && et(e.catch), Pi = Object.prototype.toString, un = (e) => Pi.call(e), bc = (e) => un(e).slice(8, -1), Ri = (e) => un(e) === "[object Object]", il = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jo = /* @__PURE__ */ nl(
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
}, Ni = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
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
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = $t(a) ? Tc(a) : Wt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if ($t(e) || gt(e))
    return e;
}
const Sc = /;(?![^(]*\))/g, Ic = /:([^]+)/, Ec = /\/\*[^]*?\*\//g;
function Tc(e) {
  const t = {};
  return e.replace(Ec, "").split(Sc).forEach((o) => {
    if (o) {
      const a = o.split(Ic);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Ve(e) {
  let t = "";
  if ($t(e))
    t = e;
  else if (Xe(e))
    for (let o = 0; o < e.length; o++) {
      const a = Ve(e[o]);
      a && (t += a + " ");
    }
  else if (gt(e))
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
  for (let a = 0; o && a < e.length; a++)
    o = lo(e[a], t[a]);
  return o;
}
function lo(e, t) {
  if (e === t) return !0;
  let o = Ml(e), a = Ml(t);
  if (o || a)
    return o && a ? e.getTime() === t.getTime() : !1;
  if (o = ms(e), a = ms(t), o || a)
    return e === t;
  if (o = Xe(e), a = Xe(t), o || a)
    return o && a ? Rc(e, t) : !1;
  if (o = gt(e), a = gt(t), o || a) {
    if (!o || !a)
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
function rl(e, t) {
  return e.findIndex((o) => lo(o, t));
}
const Di = (e) => !!(e && e.__v_isRef === !0), f = (e) => $t(e) ? e : e == null ? "" : Xe(e) || gt(e) && (e.toString === Pi || !et(e.toString)) ? Di(e) ? f(e.value) : JSON.stringify(e, Oi, 2) : String(e), Oi = (e, t) => Di(t) ? Oi(e, t.value) : _o(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [a, l], r) => (o[Ta(a, r) + " =>"] = l, o),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ta(o))
} : ms(t) ? Ta(t) : gt(t) && !Xe(t) && !Ri(t) ? String(t) : t, Ta = (e, t = "") => {
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
        } catch (a) {
          e || (e = a);
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
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), dl(a), Dc(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
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
  const t = e.dep, o = yt, a = ds;
  yt = e, ds = !0;
  try {
    Vi(e);
    const l = e.fn(e._value);
    (t.version === 0 || js(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    yt = o, ds = a, Fi(e), e.flags &= -3;
  }
}
function dl(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
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
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = yt.depsTail, o.nextDep = void 0, yt.depsTail.nextDep = o, yt.depsTail = o, yt.deps === o && (yt.deps = a);
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
      for (let a = t.deps; a; a = a.nextDep)
        Gi(a);
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
    let a = Wa.get(e);
    a || Wa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new fl()), l.map = a, l.key = o), l.track();
  }
}
function Rs(e, t, o, a, l, r) {
  const u = Wa.get(e);
  if (!u) {
    tn++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (cl(), t === "clear")
    u.forEach(c);
  else {
    const d = Xe(e), m = d && il(o);
    if (d && o === "length") {
      const v = Number(a);
      u.forEach((p, _) => {
        (_ === "length" || _ === sn || !ms(_) && _ >= v) && c(p);
      });
    } else
      switch ((o !== void 0 || u.has(void 0)) && c(u.get(o)), m && c(u.get(sn)), t) {
        case "add":
          d ? m && c(u.get("length")) : (c(u.get(so)), _o(e) && c(u.get(Ga)));
          break;
        case "delete":
          d || (c(u.get(so)), _o(e) && c(u.get(Ga)));
          break;
        case "set":
          _o(e) && c(u.get(so));
          break;
      }
  }
  ul();
}
function mo(e) {
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
    return mo(this).concat(
      ...e.map((t) => Xe(t) ? mo(t) : t)
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
      (o) => o.map((a) => Bs(this, a)),
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
    return mo(this).join(e);
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
    return mo(this).toReversed();
  },
  toSorted(e) {
    return mo(this).toSorted(e);
  },
  toSpliced(...e) {
    return mo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Do(this, "unshift", e);
  },
  values() {
    return Pa(this, "values", (e) => Bs(this, e));
  }
};
function Pa(e, t, o) {
  const a = Xn(e), l = a[t]();
  return a !== e && !as(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Uc = Array.prototype;
function Es(e, t, o, a, l, r) {
  const u = Xn(e), c = u !== e && !as(e), d = u[t];
  if (d !== Uc[t]) {
    const p = d.apply(e, r);
    return c ? vs(p) : p;
  }
  let m = o;
  u !== e && (c ? m = function(p, _) {
    return o.call(this, Bs(e, p), _, e);
  } : o.length > 2 && (m = function(p, _) {
    return o.call(this, p, _, e);
  }));
  const v = d.call(u, m, a);
  return c && l ? l(v) : v;
}
function Nl(e, t, o, a) {
  const l = Xn(e);
  let r = o;
  return l !== e && (as(e) ? o.length > 3 && (r = function(u, c, d) {
    return o.call(this, u, c, d, e);
  }) : r = function(u, c, d) {
    return o.call(this, u, Bs(e, c), d, e);
  }), l[t](r, ...a);
}
function Ra(e, t, o) {
  const a = rt(e);
  zt(a, "iterate", sn);
  const l = a[t](...o);
  return (l === -1 || l === !1) && pl(o[0]) ? (o[0] = rt(o[0]), a[t](...o)) : l;
}
function Do(e, t, o = []) {
  Ds(), cl();
  const a = rt(e)[t].apply(e, o);
  return ul(), Os(), a;
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
      return a === (l ? r ? Qc : Qi : r ? Ji : Ki).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const u = Xe(t);
    if (!l) {
      let d;
      if (u && (d = Ac[o]))
        return d;
      if (o === "hasOwnProperty")
        return Vc;
    }
    const c = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(t) ? t : a
    );
    if ((ms(o) ? ji.has(o) : zc(o)) || (l || zt(t, "get", o), r))
      return c;
    if (Gt(c)) {
      const d = u && il(o) ? c : c.value;
      return l && gt(d) ? Ln(d) : d;
    }
    return gt(c) ? l ? Ln(c) : co(c) : c;
  }
}
class qi extends Hi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, l) {
    let r = t[o];
    const u = Xe(t) && il(o);
    if (!this._isShallow) {
      const m = As(r);
      if (!as(a) && !As(a) && (r = rt(r), a = rt(a)), !u && Gt(r) && !Gt(a))
        return m || (r.value = a), !0;
    }
    const c = u ? Number(o) < t.length : mt(t, o), d = Reflect.set(
      t,
      o,
      a,
      Gt(t) ? t : l
    );
    return t === rt(l) && (c ? js(a, r) && Rs(t, "set", o, a) : Rs(t, "add", o, a)), d;
  }
  deleteProperty(t, o) {
    const a = mt(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && a && Rs(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!ms(o) || !ji.has(o)) && zt(t, "has", o), a;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Xe(t) ? "length" : so
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
  return function(...a) {
    const l = this.__v_raw, r = rt(l), u = _o(r), c = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, m = l[e](...a), v = o ? ja : t ? Io : vs;
    return !t && zt(
      r,
      "iterate",
      d ? Ga : so
    ), {
      // iterator protocol
      next() {
        const { value: p, done: _ } = m.next();
        return _ ? { value: p, done: _ } : {
          value: c ? [v(p[0]), v(p[1])] : v(p),
          done: _
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
      const r = this.__v_raw, u = rt(r), c = rt(l);
      e || (js(l, c) && zt(u, "get", l), zt(u, "get", c));
      const { has: d } = hn(u), m = t ? ja : e ? Io : vs;
      if (d.call(u, l))
        return m(r.get(l));
      if (d.call(u, c))
        return m(r.get(c));
      r !== u && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && zt(rt(l), "iterate", so), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = rt(r), c = rt(l);
      return e || (js(l, c) && zt(u, "has", l), zt(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, d = rt(c), m = t ? ja : e ? Io : vs;
      return !e && zt(d, "iterate", so), c.forEach((v, p) => l.call(r, m(v), m(p), u));
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
        const u = rt(this), { has: c, get: d } = hn(u);
        let m = c.call(u, l);
        m || (l = rt(l), m = c.call(u, l));
        const v = d.call(u, l);
        return u.set(l, r), m ? js(r, v) && Rs(u, "set", l, r) : Rs(u, "add", l, r), this;
      },
      delete(l) {
        const r = rt(this), { has: u, get: c } = hn(r);
        let d = u.call(r, l);
        d || (l = rt(l), d = u.call(r, l)), c && c.call(r, l);
        const m = r.delete(l);
        return d && Rs(r, "delete", l, void 0), m;
      },
      clear() {
        const l = rt(this), r = l.size !== 0, u = l.clear();
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
    o[l] = jc(l, e, t);
  }), o;
}
function ml(e, t) {
  const o = Hc(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    mt(o, l) && l in a ? o : a,
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
function co(e) {
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
function vl(e, t, o, a, l) {
  if (!gt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Xc(e);
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
  return !mt(e, "__v_skip") && Object.isExtensible(e) && Ni(e, "__v_skip", !0), e;
}
const vs = (e) => gt(e) ? co(e) : e, Io = (e) => gt(e) ? Ln(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $(e) {
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
    const o = this._rawValue, a = this.__v_isShallow || as(t) || As(t);
    t = a ? t : rt(t), js(t, o) && (this._rawValue = t, this._value = a ? t : vs(t), this.dep.trigger());
  }
}
function tt(e) {
  return Gt(e) ? e.value : e;
}
const ou = {
  get: (e, t, o) => t === "__v_raw" ? e : tt(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function Yi(e) {
  return oo(e) ? e : new Proxy(e, ou);
}
class nu {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new fl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
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
  let a, l;
  return et(e) ? a = e : (a = e.get, l = e.set), new nu(a, l, o);
}
const wn = {}, Dn = /* @__PURE__ */ new WeakMap();
let eo;
function lu(e, t = !1, o = eo) {
  if (o) {
    let a = Dn.get(o);
    a || Dn.set(o, a = []), a.push(e);
  }
}
function iu(e, t, o = ht) {
  const { immediate: a, deep: l, once: r, scheduler: u, augmentJob: c, call: d } = o, m = (P) => l ? P : as(P) || l === !1 || l === 0 ? Ns(P, 1) : Ns(P);
  let v, p, _, w, k = !1, b = !1;
  if (Gt(e) ? (p = () => e.value, k = as(e)) : oo(e) ? (p = () => m(e), k = !0) : Xe(e) ? (b = !0, k = e.some((P) => oo(P) || as(P)), p = () => e.map((P) => {
    if (Gt(P))
      return P.value;
    if (oo(P))
      return m(P);
    if (et(P))
      return d ? d(P, 2) : P();
  })) : et(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (_) {
      Ds();
      try {
        _();
      } finally {
        Os();
      }
    }
    const P = eo;
    eo = v;
    try {
      return d ? d(e, 3, [w]) : e(w);
    } finally {
      eo = P;
    }
  } : p = $s, t && l) {
    const P = p, T = l === !0 ? 1 / 0 : l;
    p = () => Ns(P(), T);
  }
  const y = Lc(), S = () => {
    v.stop(), y && y.active && ll(y.effects, v);
  };
  if (r && t) {
    const P = t;
    t = (...T) => {
      P(...T), S();
    };
  }
  let N = b ? new Array(e.length).fill(wn) : wn;
  const M = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (t) {
        const T = v.run();
        if (l || k || (b ? T.some((F, j) => js(F, N[j])) : js(T, N))) {
          _ && _();
          const F = eo;
          eo = v;
          try {
            const j = [
              T,
              // pass undefined as the old value when it's changed for the first time
              N === wn ? void 0 : b && N[0] === wn ? [] : N,
              w
            ];
            N = T, d ? d(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            eo = F;
          }
        }
      } else
        v.run();
  };
  return c && c(M), v = new Ai(p), v.scheduler = u ? () => u(M, !1) : M, w = (P) => lu(P, !1, v), _ = v.onStop = () => {
    const P = Dn.get(v);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const T of P) T();
      Dn.delete(v);
    }
  }, t ? a ? M(!0) : N = v.run() : u ? u(M.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ns(e, t = 1 / 0, o) {
  if (t <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Gt(e))
    Ns(e.value, t, o);
  else if (Xe(e))
    for (let a = 0; a < e.length; a++)
      Ns(e[a], t, o);
  else if (Mo(e) || _o(e))
    e.forEach((a) => {
      Ns(a, t, o);
    });
  else if (Ri(e)) {
    for (const a in e)
      Ns(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ns(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function dn(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    Zn(l, t, o);
  }
}
function ps(e, t, o, a) {
  if (et(e)) {
    const l = dn(e, t, o, a);
    return l && Mi(l) && l.catch((r) => {
      Zn(r, t, o);
    }), l;
  }
  if (Xe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ps(e[r], t, o, a));
    return l;
  }
}
function Zn(e, t, o, a = !0) {
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
      Ds(), dn(r, null, 10, [
        e,
        d,
        m
      ]), Os();
      return;
    }
  }
  ru(e, o, l, a, u);
}
function ru(e, t, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Jt = [];
let _s = -1;
const ko = [];
let Ws = null, go = 0;
const Xi = /* @__PURE__ */ Promise.resolve();
let On = null;
function Pt(e) {
  const t = On || Xi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cu(e) {
  let t = _s + 1, o = Jt.length;
  for (; t < o; ) {
    const a = t + o >>> 1, l = Jt[a], r = on(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : o = a;
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
  Xe(e) ? ko.push(...e) : Ws && e.id === -1 ? Ws.splice(go + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), Zi();
}
function Ll(e, t, o = _s + 1) {
  for (; o < Jt.length; o++) {
    const a = Jt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Jt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function er(e) {
  if (ko.length) {
    const t = [...new Set(ko)].sort(
      (o, a) => on(o) - on(a)
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
    _s = -1, Jt.length = 0, er(), On = null, (Jt.length || ko.length) && tr();
  }
}
let Ot = null, sr = null;
function An(e) {
  const t = Ot;
  return Ot = e, sr = e && e.type.__scopeId || null, t;
}
function g(e, t = Ot, o) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && Vn(-1);
    const r = An(t);
    let u;
    try {
      u = e(...l);
    } finally {
      An(r), a._d && Vn(1);
    }
    return u;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function St(e, t) {
  if (Ot === null)
    return e;
  const o = aa(Ot), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, u, c, d = ht] = t[l];
    r && (et(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ns(u), a.push({
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
function Qs(e, t, o, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let u = 0; u < l.length; u++) {
    const c = l[u];
    r && (c.oldValue = r[u].value);
    let d = c.dir[a];
    d && (Ds(), ps(d, o, 8, [
      e.el,
      c,
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
  process(e, t, o, a, l, r, u, c, d, m) {
    const {
      mc: v,
      pc: p,
      pbc: _,
      o: { insert: w, querySelector: k, createText: b, createComment: y }
    } = m, S = Ko(t.props);
    let { shapeFlag: N, children: M, dynamicChildren: P } = t;
    if (e == null) {
      const T = t.el = b(""), F = t.anchor = b("");
      w(T, o, a), w(F, o, a);
      const j = (V, ie) => {
        N & 16 && v(
          M,
          V,
          ie,
          l,
          r,
          u,
          c,
          d
        );
      }, E = () => {
        const V = t.target = Ha(t.props, k), ie = lr(V, t, b, w);
        V && (u !== "svg" && Ol(V) ? u = "svg" : u !== "mathml" && Al(V) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(V), S || (j(V, ie), Sn(t, !1)));
      };
      S && (j(o, F), Sn(t, !0)), Dl(t.props) ? (t.el.__isMounted = !1, qt(() => {
        E(), delete t.el.__isMounted;
      }, r)) : E();
    } else {
      if (Dl(t.props) && e.el.__isMounted === !1) {
        qt(() => {
          ar.process(
            e,
            t,
            o,
            a,
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
      const T = t.anchor = e.anchor, F = t.target = e.target, j = t.targetAnchor = e.targetAnchor, E = Ko(e.props), V = E ? o : F, ie = E ? T : j;
      if (u === "svg" || Ol(F) ? u = "svg" : (u === "mathml" || Al(F)) && (u = "mathml"), P ? (_(
        e.dynamicChildren,
        P,
        V,
        l,
        r,
        u,
        c
      ), kl(e, t, !0)) : d || p(
        e,
        t,
        V,
        ie,
        l,
        r,
        u,
        c,
        !1
      ), S)
        E ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : _n(
          t,
          o,
          T,
          m,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ee = t.target = Ha(
          t.props,
          k
        );
        ee && _n(
          t,
          ee,
          null,
          m,
          0
        );
      } else E && _n(
        t,
        F,
        j,
        m,
        1
      );
      Sn(t, S);
    }
  },
  remove(e, t, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: u,
      children: c,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: p,
      props: _
    } = e;
    if (p && (l(m), l(v)), r && l(d), u & 16) {
      const w = r || !Ko(_);
      for (let k = 0; k < c.length; k++) {
        const b = c[k];
        a(
          b,
          t,
          o,
          w,
          !!b.dynamicChildren
        );
      }
    }
  },
  move: _n,
  hydrate: du
};
function _n(e, t, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, o);
  const { el: u, anchor: c, shapeFlag: d, children: m, props: v } = e, p = r === 2;
  if (p && a(u, t, o), (!p || Ko(v)) && d & 16)
    for (let _ = 0; _ < m.length; _++)
      l(
        m[_],
        t,
        o,
        2
      );
  p && a(c, t, o);
}
function du(e, t, o, a, l, r, {
  o: { nextSibling: u, parentNode: c, querySelector: d, insert: m, createText: v }
}, p) {
  function _(b, y, S, N) {
    y.anchor = p(
      u(b),
      y,
      c(b),
      o,
      a,
      l,
      r
    ), y.targetStart = S, y.targetAnchor = N;
  }
  const w = t.target = Ha(
    t.props,
    d
  ), k = Ko(t.props);
  if (w) {
    const b = w._lpa || w.firstChild;
    if (t.shapeFlag & 16)
      if (k)
        _(
          e,
          t,
          b,
          b && u(b)
        );
      else {
        t.anchor = u(e);
        let y = b;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor")
              t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, w._lpa = t.targetAnchor && u(t.targetAnchor);
              break;
            }
          }
          y = u(y);
        }
        t.targetAnchor || lr(w, t, v, m), p(
          b && u(b),
          t,
          w,
          o,
          a,
          l,
          r
        );
      }
    Sn(t, k);
  } else k && t.shapeFlag & 16 && _(e, t, e, u(e));
  return t.anchor && u(t.anchor);
}
const Rt = ar;
function Sn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function lr(e, t, o, a) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[or] = r, e && (a(l, e), a(r, e)), r;
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
    const o = $l(), a = ir();
    return () => {
      const l = t.default && hl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = ur(l), u = rt(e), { mode: c } = u;
      if (a.isLeaving)
        return Na(r);
      const d = Ul(r);
      if (!d)
        return Na(r);
      let m = nn(
        d,
        u,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => m = p
      );
      d.type !== Ft && io(d, m);
      let v = o.subTree && Ul(o.subTree);
      if (v && v.type !== Ft && !to(v, d) && cr(o).type !== Ft) {
        let p = nn(
          v,
          u,
          a,
          o
        );
        if (io(v, p), c === "out-in" && d.type !== Ft)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, v = void 0;
          }, Na(r);
        c === "in-out" && d.type !== Ft ? p.delayLeave = (_, w, k) => {
          const b = dr(
            a,
            v
          );
          b[String(v.key)] = v, _[Ms] = () => {
            w(), _[Ms] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            k(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
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
  let a = o.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(t.type, a)), a;
}
function nn(e, t, o, a, l) {
  const {
    appear: r,
    mode: u,
    persisted: c = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: _,
    onLeave: w,
    onAfterLeave: k,
    onLeaveCancelled: b,
    onBeforeAppear: y,
    onAppear: S,
    onAfterAppear: N,
    onAppearCancelled: M
  } = t, P = String(e.key), T = dr(o, e), F = (V, ie) => {
    V && ps(
      V,
      a,
      9,
      ie
    );
  }, j = (V, ie) => {
    const ee = ie[1];
    F(V, ie), Xe(V) ? V.every((Y) => Y.length <= 1) && ee() : V.length <= 1 && ee();
  }, E = {
    mode: u,
    persisted: c,
    beforeEnter(V) {
      let ie = d;
      if (!o.isMounted)
        if (r)
          ie = y || d;
        else
          return;
      V[Ms] && V[Ms](
        !0
        /* cancelled */
      );
      const ee = T[P];
      ee && to(e, ee) && ee.el[Ms] && ee.el[Ms](), F(ie, [V]);
    },
    enter(V) {
      let ie = m, ee = v, Y = p;
      if (!o.isMounted)
        if (r)
          ie = S || m, ee = N || v, Y = M || p;
        else
          return;
      let he = !1;
      const se = V[kn] = (J) => {
        he || (he = !0, J ? F(Y, [V]) : F(ee, [V]), E.delayedLeave && E.delayedLeave(), V[kn] = void 0);
      };
      ie ? j(ie, [V, se]) : se();
    },
    leave(V, ie) {
      const ee = String(e.key);
      if (V[kn] && V[kn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ie();
      F(_, [V]);
      let Y = !1;
      const he = V[Ms] = (se) => {
        Y || (Y = !0, ie(), se ? F(b, [V]) : F(k, [V]), V[Ms] = void 0, T[ee] === e && delete T[ee]);
      };
      T[ee] = e, w ? j(w, [V, he]) : he();
    },
    clone(V) {
      const ie = nn(
        V,
        t,
        o,
        a,
        l
      );
      return l && l(ie), ie;
    }
  };
  return E;
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
    if (t & 32 && et(o.default))
      return o.default();
  }
}
function io(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, io(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hl(e, t = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    const c = o == null ? u.key : String(o) + String(u.key != null ? u.key : r);
    u.type === G ? (u.patchFlag & 128 && l++, a = a.concat(
      hl(u.children, t, c)
    )) : (t || u.type !== Ft) && a.push(c != null ? Hs(u, { key: c }) : u);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  return et(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function fr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Un = /* @__PURE__ */ new WeakMap();
function Jo(e, t, o, a, l = !1) {
  if (Xe(e)) {
    e.forEach(
      (k, b) => Jo(
        k,
        t && (Xe(t) ? t[b] : t),
        o,
        a,
        l
      )
    );
    return;
  }
  if (bo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Jo(e, t, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? aa(a.component) : a.el, u = l ? null : r, { i: c, r: d } = e, m = t && t.r, v = c.refs === ht ? c.refs = {} : c.refs, p = c.setupState, _ = rt(p), w = p === ht ? Ti : (k) => mt(_, k);
  if (m != null && m !== d) {
    if (zl(t), $t(m))
      v[m] = null, w(m) && (p[m] = null);
    else if (Gt(m)) {
      m.value = null;
      const k = t;
      k.k && (v[k.k] = null);
    }
  }
  if (et(d))
    dn(d, c, 12, [u, v]);
  else {
    const k = $t(d), b = Gt(d);
    if (k || b) {
      const y = () => {
        if (e.f) {
          const S = k ? w(d) ? p[d] : v[d] : d.value;
          if (l)
            Xe(S) && ll(S, r);
          else if (Xe(S))
            S.includes(r) || S.push(r);
          else if (k)
            v[d] = [r], w(d) && (p[d] = v[d]);
          else {
            const N = [r];
            d.value = N, e.k && (v[e.k] = N);
          }
        } else k ? (v[d] = u, w(d) && (p[d] = u)) : b && (d.value = u, e.k && (v[e.k] = u));
      };
      if (u) {
        const S = () => {
          y(), Un.delete(e);
        };
        S.id = -1, Un.set(e, S), qt(S, o);
      } else
        zl(e), y();
    }
  }
}
function zl(e) {
  const t = Un.get(e);
  t && (t.flags |= 8, Un.delete(e));
}
Yn().requestIdleCallback;
Yn().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, ea = (e) => e.type.__isKeepAlive;
function vu(e, t) {
  mr(e, "a", t);
}
function pu(e, t) {
  mr(e, "da", t);
}
function mr(e, t, o = Bt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ta(t, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ea(l.parent.vnode) && gu(a, t, o, l), l = l.parent;
  }
}
function gu(e, t, o, a) {
  const l = ta(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Po(() => {
    ll(a[t], l);
  }, o);
}
function ta(e, t, o = Bt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...u) => {
      Ds();
      const c = fn(o), d = ps(t, o, e, u);
      return c(), Os(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Us = (e) => (t, o = Bt) => {
  (!rn || e === "sp") && ta(e, (...a) => t(...a), o);
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
function Cu(e, t, o = !0, a = !1) {
  const l = Ot || Bt;
  if (l) {
    const r = l.type;
    {
      const c = fd(
        r,
        !1
      );
      if (c && (c === t || c === is(t) || c === Jn(is(t))))
        return r;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vl(l[e] || r[e], t) || // global registration
      Vl(l.appContext[e], t)
    );
    return !u && a ? r : u;
  }
}
function Vl(e, t) {
  return e && (e[t] || e[is(t)] || e[Jn(is(t))]);
}
function ge(e, t, o, a) {
  let l;
  const r = o, u = Xe(e);
  if (u || $t(e)) {
    const c = u && oo(e);
    let d = !1, m = !1;
    c && (d = !as(e), m = As(e), e = Xn(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
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
function st(e, t, o = {}, a, l) {
  if (Ot.ce || Ot.parent && bo(Ot.parent) && Ot.parent.ce) {
    const m = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), n(), R(
      G,
      null,
      [C("slot", o, a && a())],
      m ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), n();
  const u = r && gr(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, d = R(
    G,
    {
      key: (c && !ms(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!u && a ? "_fb" : "")
    },
    u || (a ? a() : []),
    u && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function gr(e) {
  return e.some((t) => ln(t) ? !(t.type === Ft || t.type === G && !gr(t.children)) : !0) ? e : null;
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
), La = (e, t) => e !== ht && !e.__isScriptSetup && mt(e, t), xu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: u, type: c, appContext: d } = e;
    if (t[0] !== "$") {
      const _ = u[t];
      if (_ !== void 0)
        switch (_) {
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
        if (La(a, t))
          return u[t] = 1, a[t];
        if (l !== ht && mt(l, t))
          return u[t] = 2, l[t];
        if (mt(r, t))
          return u[t] = 3, r[t];
        if (o !== ht && mt(o, t))
          return u[t] = 4, o[t];
        Ka && (u[t] = 0);
      }
    }
    const m = Qo[t];
    let v, p;
    if (m)
      return t === "$attrs" && zt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[t])
    )
      return v;
    if (o !== ht && mt(o, t))
      return u[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, mt(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return La(l, t) ? (l[t] = o, !0) : a !== ht && mt(a, t) ? (a[t] = o, !0) : mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: l, props: r, type: u }
  }, c) {
    let d;
    return !!(o[c] || e !== ht && c[0] !== "$" && mt(e, c) || La(t, c) || mt(r, c) || mt(a, c) || mt(Qo, c) || mt(l.config.globalProperties, c) || (d = u.__cssModules) && d[c]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : mt(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Fl(e) {
  return Xe(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ka = !0;
function Su(e) {
  const t = yr(e), o = e.proxy, a = e.ctx;
  Ka = !1, t.beforeCreate && Bl(t.beforeCreate, e, "bc");
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
    mounted: _,
    beforeUpdate: w,
    updated: k,
    activated: b,
    deactivated: y,
    beforeDestroy: S,
    beforeUnmount: N,
    destroyed: M,
    unmounted: P,
    render: T,
    renderTracked: F,
    renderTriggered: j,
    errorCaptured: E,
    serverPrefetch: V,
    // public API
    expose: ie,
    inheritAttrs: ee,
    // assets
    components: Y,
    directives: he,
    filters: se
  } = t;
  if (m && Iu(m, a, null), u)
    for (const Ue in u) {
      const oe = u[Ue];
      et(oe) && (a[Ue] = oe.bind(o));
    }
  if (l) {
    const Ue = l.call(o, o);
    gt(Ue) && (e.data = co(Ue));
  }
  if (Ka = !0, r)
    for (const Ue in r) {
      const oe = r[Ue], ye = et(oe) ? oe.bind(o, o) : et(oe.get) ? oe.get.bind(o, o) : $s, A = !et(oe) && et(oe.set) ? oe.set.bind(o) : $s, me = L({
        get: ye,
        set: A
      });
      Object.defineProperty(a, Ue, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (Pe) => me.value = Pe
      });
    }
  if (c)
    for (const Ue in c)
      hr(c[Ue], a, o, Ue);
  if (d) {
    const Ue = et(d) ? d.call(o) : d;
    Reflect.ownKeys(Ue).forEach((oe) => {
      Nu(oe, Ue[oe]);
    });
  }
  v && Bl(v, e, "c");
  function le(Ue, oe) {
    Xe(oe) ? oe.forEach((ye) => Ue(ye.bind(o))) : oe && Ue(oe.bind(o));
  }
  if (le(hu, p), le(ct, _), le(yu, w), le(vr, k), le(vu, b), le(pu, y), le(bu, E), le(ku, F), le(_u, j), le(sa, N), le(Po, P), le(wu, V), Xe(ie))
    if (ie.length) {
      const Ue = e.exposed || (e.exposed = {});
      ie.forEach((oe) => {
        Object.defineProperty(Ue, oe, {
          get: () => o[oe],
          set: (ye) => o[oe] = ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === $s && (e.render = T), ee != null && (e.inheritAttrs = ee), Y && (e.components = Y), he && (e.directives = he), V && fr(e);
}
function Iu(e, t, o = $s) {
  Xe(e) && (e = Ja(e));
  for (const a in e) {
    const l = e[a];
    let r;
    gt(l) ? "default" in l ? r = In(
      l.from || a,
      l.default,
      !0
    ) : r = In(l.from || a) : r = In(l), Gt(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (u) => r.value = u
    }) : t[a] = r;
  }
}
function Bl(e, t, o) {
  ps(
    Xe(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function hr(e, t, o, a) {
  let l = a.includes(".") ? kr(o, a) : () => o[a];
  if ($t(e)) {
    const r = t[e];
    et(r) && kt(l, r);
  } else if (et(e))
    kt(l, e.bind(o));
  else if (gt(e))
    if (Xe(e))
      e.forEach((r) => hr(r, t, o, a));
    else {
      const r = et(e.handler) ? e.handler.bind(o) : t[e.handler];
      et(r) && kt(l, r, e);
    }
}
function yr(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: u }
  } = e.appContext, c = r.get(t);
  let d;
  return c ? d = c : !l.length && !o && !a ? d = t : (d = {}, l.length && l.forEach(
    (m) => zn(d, m, u, !0)
  ), zn(d, t, u)), gt(t) && r.set(t, d), d;
}
function zn(e, t, o, a = !1) {
  const { mixins: l, extends: r } = t;
  r && zn(e, r, o, !0), l && l.forEach(
    (u) => zn(e, u, o, !0)
  );
  for (const u in t)
    if (!(a && u === "expose")) {
      const c = Eu[u] || o && o[u];
      e[u] = c ? c(e[u], t[u]) : t[u];
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
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Tu(e, t) {
  return Wo(Ja(e), Ja(t));
}
function Ja(e) {
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
function Gl(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Fl(e),
    Fl(t ?? {})
  ) : t;
}
function Mu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    o[a] = Ht(e[a], t[a]);
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
  return function(a, l = null) {
    et(a) || (a = Mt({}, a)), l != null && !gt(l) && (l = null);
    const r = wr(), u = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const m = r.app = {
      _uid: Pu++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: vd,
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
      mount(v, p, _) {
        if (!d) {
          const w = m._ceVNode || C(a, l);
          return w.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(w, v, _), d = !0, m._container = v, v.__vue_app__ = m, aa(w.component);
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
        const p = $o;
        $o = m;
        try {
          return v();
        } finally {
          $o = p;
        }
      }
    };
    return m;
  };
}
let $o = null;
function Nu(e, t) {
  if (Bt) {
    let o = Bt.provides;
    const a = Bt.parent && Bt.parent.provides;
    a === o && (o = Bt.provides = Object.create(a)), o[e] = t;
  }
}
function In(e, t, o = !1) {
  const a = $l();
  if (a || $o) {
    let l = $o ? $o._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && et(t) ? t.call(a && a.proxy) : t;
  }
}
const Lu = Symbol.for("v-scx"), Du = () => In(Lu);
function kt(e, t, o) {
  return _r(e, t, o);
}
function _r(e, t, o = ht) {
  const { immediate: a, deep: l, flush: r, once: u } = o, c = Mt({}, o), d = t && a || !t && r !== "post";
  let m;
  if (rn) {
    if (r === "sync") {
      const w = Du();
      m = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!d) {
      const w = () => {
      };
      return w.stop = $s, w.resume = $s, w.pause = $s, w;
    }
  }
  const v = Bt;
  c.call = (w, k, b) => ps(w, v, k, b);
  let p = !1;
  r === "post" ? c.scheduler = (w) => {
    qt(w, v && v.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (w, k) => {
    k ? w() : gl(w);
  }), c.augmentJob = (w) => {
    t && (w.flags |= 4), p && (w.flags |= 2, v && (w.id = v.uid, w.i = v));
  };
  const _ = iu(e, t, c);
  return rn && (m ? m.push(_) : d && _()), _;
}
function Ou(e, t, o) {
  const a = this.proxy, l = $t(e) ? e.includes(".") ? kr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  et(t) ? r = t : (r = t.handler, o = t);
  const u = fn(this), c = _r(l, r.bind(a), o);
  return u(), c;
}
function kr(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Au = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${is(t)}Modifiers`] || e[`${Ks(t)}Modifiers`];
function Uu(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ht;
  let l = o;
  const r = t.startsWith("update:"), u = r && Au(a, t.slice(7));
  u && (u.trim && (l = o.map((v) => $t(v) ? v.trim() : v)), u.number && (l = o.map(Qn)));
  let c, d = a[c = Ea(t)] || // also try camelCase event handler (#2249)
  a[c = Ea(is(t))];
  !d && r && (d = a[c = Ea(Ks(t))]), d && ps(
    d,
    e,
    6,
    l
  );
  const m = a[c + "Once"];
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
const zu = /* @__PURE__ */ new WeakMap();
function br(e, t, o = !1) {
  const a = o ? zu : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let u = {}, c = !1;
  if (!et(e)) {
    const d = (m) => {
      const v = br(m, t, !0);
      v && (c = !0, Mt(u, v));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (gt(e) && a.set(e, null), null) : (Xe(r) ? r.forEach((d) => u[d] = null) : Mt(u, r), gt(e) && a.set(e, u), u);
}
function oa(e, t) {
  return !e || !qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), mt(e, t[0].toLowerCase() + t.slice(1)) || mt(e, Ks(t)) || mt(e, t));
}
function jl(e) {
  const {
    type: t,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: u,
    attrs: c,
    emit: d,
    render: m,
    renderCache: v,
    props: p,
    data: _,
    setupState: w,
    ctx: k,
    inheritAttrs: b
  } = e, y = An(e);
  let S, N;
  try {
    if (o.shapeFlag & 4) {
      const P = l || a, T = P;
      S = bs(
        m.call(
          T,
          P,
          v,
          p,
          w,
          _,
          k
        )
      ), N = c;
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
      ), N = t.props ? c : Vu(c);
    }
  } catch (P) {
    Yo.length = 0, Zn(P, e, 1), S = C(Ft);
  }
  let M = S;
  if (N && b !== !1) {
    const P = Object.keys(N), { shapeFlag: T } = M;
    P.length && T & 7 && (r && P.some(al) && (N = Fu(
      N,
      r
    )), M = Hs(M, N, !1, !0));
  }
  return o.dirs && (M = Hs(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(o.dirs) : o.dirs), o.transition && io(M, o.transition), S = M, An(y), S;
}
const Vu = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || qn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Fu = (e, t) => {
  const o = {};
  for (const a in e)
    (!al(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
};
function Bu(e, t, o) {
  const { props: a, children: l, component: r } = e, { props: u, children: c, patchFlag: d } = t, m = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Hl(a, u, m) : !!u;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const _ = v[p];
        if (u[_] !== a[_] && !oa(m, _))
          return !0;
      }
    }
  } else
    return (l || c) && (!c || !c.$stable) ? !0 : a === u ? !1 : a ? u ? Hl(a, u, m) : !0 : !!u;
  return !1;
}
function Hl(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !oa(o, r))
      return !0;
  }
  return !1;
}
function Wu({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const $r = {}, Cr = () => Object.create($r), xr = (e) => Object.getPrototypeOf(e) === $r;
function Gu(e, t, o, a = !1) {
  const l = {}, r = Cr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sr(e, t, l, r);
  for (const u in e.propsOptions[0])
    u in l || (l[u] = void 0);
  o ? e.props = a ? l : Zc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function ju(e, t, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: u }
  } = e, c = rt(l), [d] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const v = e.vnode.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        let _ = v[p];
        if (oa(e.emitsOptions, _))
          continue;
        const w = t[_];
        if (d)
          if (mt(r, _))
            w !== r[_] && (r[_] = w, m = !0);
          else {
            const k = is(_);
            l[k] = Qa(
              d,
              c,
              k,
              w,
              e,
              !1
            );
          }
        else
          w !== r[_] && (r[_] = w, m = !0);
      }
    }
  } else {
    Sr(e, t, l, r) && (m = !0);
    let v;
    for (const p in c)
      (!t || // for camelCase
      !mt(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Ks(p)) === p || !mt(t, v))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[p] = Qa(
        d,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== c)
      for (const p in r)
        (!t || !mt(t, p)) && (delete r[p], m = !0);
  }
  m && Rs(e.attrs, "set", "");
}
function Sr(e, t, o, a) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (t)
    for (let d in t) {
      if (jo(d))
        continue;
      const m = t[d];
      let v;
      l && mt(l, v = is(d)) ? !r || !r.includes(v) ? o[v] = m : (c || (c = {}))[v] = m : oa(e.emitsOptions, d) || (!(d in a) || m !== a[d]) && (a[d] = m, u = !0);
    }
  if (r) {
    const d = rt(o), m = c || ht;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      o[p] = Qa(
        l,
        d,
        p,
        m[p],
        e,
        !mt(m, p)
      );
    }
  }
  return u;
}
function Qa(e, t, o, a, l, r) {
  const u = e[o];
  if (u != null) {
    const c = mt(u, "default");
    if (c && a === void 0) {
      const d = u.default;
      if (u.type !== Function && !u.skipFactory && et(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          a = m[o];
        else {
          const v = fn(l);
          a = m[o] = d.call(
            null,
            t
          ), v();
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
    ] && (a === "" || a === Ks(o)) && (a = !0));
  }
  return a;
}
const Hu = /* @__PURE__ */ new WeakMap();
function Ir(e, t, o = !1) {
  const a = o ? Hu : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, u = {}, c = [];
  let d = !1;
  if (!et(e)) {
    const v = (p) => {
      d = !0;
      const [_, w] = Ir(p, t, !0);
      Mt(u, _), w && c.push(...w);
    };
    !o && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return gt(e) && a.set(e, wo), wo;
  if (Xe(r))
    for (let v = 0; v < r.length; v++) {
      const p = is(r[v]);
      ql(p) && (u[p] = ht);
    }
  else if (r)
    for (const v in r) {
      const p = is(v);
      if (ql(p)) {
        const _ = r[v], w = u[p] = Xe(_) || et(_) ? { type: _ } : Mt({}, _), k = w.type;
        let b = !1, y = !0;
        if (Xe(k))
          for (let S = 0; S < k.length; ++S) {
            const N = k[S], M = et(N) && N.name;
            if (M === "Boolean") {
              b = !0;
              break;
            } else M === "String" && (y = !1);
          }
        else
          b = et(k) && k.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = b, w[
          1
          /* shouldCastTrue */
        ] = y, (b || mt(w, "default")) && c.push(p);
      }
    }
  const m = [u, c];
  return gt(e) && a.set(e, m), m;
}
function ql(e) {
  return e[0] !== "$" && !jo(e);
}
const wl = (e) => e === "_" || e === "_ctx" || e === "$stable", _l = (e) => Xe(e) ? e.map(bs) : [bs(e)], qu = (e, t, o) => {
  if (t._n)
    return t;
  const a = g((...l) => _l(t(...l)), o);
  return a._c = !1, a;
}, Er = (e, t, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (wl(l)) continue;
    const r = e[l];
    if (et(r))
      t[l] = qu(l, r, a);
    else if (r != null) {
      const u = _l(r);
      t[l] = () => u;
    }
  }
}, Tr = (e, t) => {
  const o = _l(t);
  e.slots.default = () => o;
}, Mr = (e, t, o) => {
  for (const a in t)
    (o || !wl(a)) && (e[a] = t[a]);
}, Ku = (e, t, o) => {
  const a = e.slots = Cr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Mr(a, t, o), o && Ni(a, "_", l, !0)) : Er(t, a);
  } else t && Tr(e, t);
}, Ju = (e, t, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, u = ht;
  if (a.shapeFlag & 32) {
    const c = t._;
    c ? o && c === 1 ? r = !1 : Mr(l, t, o) : (r = !t.$stable, Er(t, l)), u = t;
  } else t && (Tr(e, t), u = { default: 1 });
  if (r)
    for (const c in l)
      !wl(c) && u[c] == null && delete l[c];
}, qt = ed;
function Qu(e) {
  return Yu(e);
}
function Yu(e, t) {
  const o = Yn();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: u,
    createText: c,
    createComment: d,
    setText: m,
    setElementText: v,
    parentNode: p,
    nextSibling: _,
    setScopeId: w = $s,
    insertStaticContent: k
  } = e, b = (I, z, ce, Ce = null, _e = null, $e = null, Oe = void 0, ze = null, Re = !!z.dynamicChildren) => {
    if (I === z)
      return;
    I && !to(I, z) && (Ce = q(I), Pe(I, _e, $e, !0), I = null), z.patchFlag === -2 && (Re = !1, z.dynamicChildren = null);
    const { type: Ie, ref: Ke, shapeFlag: Fe } = z;
    switch (Ie) {
      case na:
        y(I, z, ce, Ce);
        break;
      case Ft:
        S(I, z, ce, Ce);
        break;
      case Oa:
        I == null && N(z, ce, Ce, Oe);
        break;
      case G:
        Y(
          I,
          z,
          ce,
          Ce,
          _e,
          $e,
          Oe,
          ze,
          Re
        );
        break;
      default:
        Fe & 1 ? T(
          I,
          z,
          ce,
          Ce,
          _e,
          $e,
          Oe,
          ze,
          Re
        ) : Fe & 6 ? he(
          I,
          z,
          ce,
          Ce,
          _e,
          $e,
          Oe,
          ze,
          Re
        ) : (Fe & 64 || Fe & 128) && Ie.process(
          I,
          z,
          ce,
          Ce,
          _e,
          $e,
          Oe,
          ze,
          Re,
          de
        );
    }
    Ke != null && _e ? Jo(Ke, I && I.ref, $e, z || I, !z) : Ke == null && I && I.ref != null && Jo(I.ref, null, $e, I, !0);
  }, y = (I, z, ce, Ce) => {
    if (I == null)
      a(
        z.el = c(z.children),
        ce,
        Ce
      );
    else {
      const _e = z.el = I.el;
      z.children !== I.children && m(_e, z.children);
    }
  }, S = (I, z, ce, Ce) => {
    I == null ? a(
      z.el = d(z.children || ""),
      ce,
      Ce
    ) : z.el = I.el;
  }, N = (I, z, ce, Ce) => {
    [I.el, I.anchor] = k(
      I.children,
      z,
      ce,
      Ce,
      I.el,
      I.anchor
    );
  }, M = ({ el: I, anchor: z }, ce, Ce) => {
    let _e;
    for (; I && I !== z; )
      _e = _(I), a(I, ce, Ce), I = _e;
    a(z, ce, Ce);
  }, P = ({ el: I, anchor: z }) => {
    let ce;
    for (; I && I !== z; )
      ce = _(I), l(I), I = ce;
    l(z);
  }, T = (I, z, ce, Ce, _e, $e, Oe, ze, Re) => {
    if (z.type === "svg" ? Oe = "svg" : z.type === "math" && (Oe = "mathml"), I == null)
      F(
        z,
        ce,
        Ce,
        _e,
        $e,
        Oe,
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
          $e,
          Oe,
          ze,
          Re
        );
      } finally {
        Ie && Ie._endPatch();
      }
    }
  }, F = (I, z, ce, Ce, _e, $e, Oe, ze) => {
    let Re, Ie;
    const { props: Ke, shapeFlag: Fe, transition: ve, dirs: Q } = I;
    if (Re = I.el = u(
      I.type,
      $e,
      Ke && Ke.is,
      Ke
    ), Fe & 8 ? v(Re, I.children) : Fe & 16 && E(
      I.children,
      Re,
      null,
      Ce,
      _e,
      Da(I, $e),
      Oe,
      ze
    ), Q && Qs(I, null, Ce, "created"), j(Re, I, I.scopeId, Oe, Ce), Ke) {
      for (const ke in Ke)
        ke !== "value" && !jo(ke) && r(Re, ke, null, Ke[ke], $e, Ce);
      "value" in Ke && r(Re, "value", null, Ke.value, $e), (Ie = Ke.onVnodeBeforeMount) && hs(Ie, Ce, I);
    }
    Q && Qs(I, null, Ce, "beforeMount");
    const He = Xu(_e, ve);
    He && ve.beforeEnter(Re), a(Re, z, ce), ((Ie = Ke && Ke.onVnodeMounted) || He || Q) && qt(() => {
      Ie && hs(Ie, Ce, I), He && ve.enter(Re), Q && Qs(I, null, Ce, "mounted");
    }, _e);
  }, j = (I, z, ce, Ce, _e) => {
    if (ce && w(I, ce), Ce)
      for (let $e = 0; $e < Ce.length; $e++)
        w(I, Ce[$e]);
    if (_e) {
      let $e = _e.subTree;
      if (z === $e || Rr($e.type) && ($e.ssContent === z || $e.ssFallback === z)) {
        const Oe = _e.vnode;
        j(
          I,
          Oe,
          Oe.scopeId,
          Oe.slotScopeIds,
          _e.parent
        );
      }
    }
  }, E = (I, z, ce, Ce, _e, $e, Oe, ze, Re = 0) => {
    for (let Ie = Re; Ie < I.length; Ie++) {
      const Ke = I[Ie] = ze ? Gs(I[Ie]) : bs(I[Ie]);
      b(
        null,
        Ke,
        z,
        ce,
        Ce,
        _e,
        $e,
        Oe,
        ze
      );
    }
  }, V = (I, z, ce, Ce, _e, $e, Oe) => {
    const ze = z.el = I.el;
    let { patchFlag: Re, dynamicChildren: Ie, dirs: Ke } = z;
    Re |= I.patchFlag & 16;
    const Fe = I.props || ht, ve = z.props || ht;
    let Q;
    if (ce && Ys(ce, !1), (Q = ve.onVnodeBeforeUpdate) && hs(Q, ce, z, I), Ke && Qs(z, I, ce, "beforeUpdate"), ce && Ys(ce, !0), (Fe.innerHTML && ve.innerHTML == null || Fe.textContent && ve.textContent == null) && v(ze, ""), Ie ? ie(
      I.dynamicChildren,
      Ie,
      ze,
      ce,
      Ce,
      Da(z, _e),
      $e
    ) : Oe || oe(
      I,
      z,
      ze,
      null,
      ce,
      Ce,
      Da(z, _e),
      $e,
      !1
    ), Re > 0) {
      if (Re & 16)
        ee(ze, Fe, ve, ce, _e);
      else if (Re & 2 && Fe.class !== ve.class && r(ze, "class", null, ve.class, _e), Re & 4 && r(ze, "style", Fe.style, ve.style, _e), Re & 8) {
        const He = z.dynamicProps;
        for (let ke = 0; ke < He.length; ke++) {
          const Ye = He[ke], ot = Fe[Ye], Ae = ve[Ye];
          (Ae !== ot || Ye === "value") && r(ze, Ye, ot, Ae, _e, ce);
        }
      }
      Re & 1 && I.children !== z.children && v(ze, z.children);
    } else !Oe && Ie == null && ee(ze, Fe, ve, ce, _e);
    ((Q = ve.onVnodeUpdated) || Ke) && qt(() => {
      Q && hs(Q, ce, z, I), Ke && Qs(z, I, ce, "updated");
    }, Ce);
  }, ie = (I, z, ce, Ce, _e, $e, Oe) => {
    for (let ze = 0; ze < z.length; ze++) {
      const Re = I[ze], Ie = z[ze], Ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Re.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !to(Re, Ie) || // - In the case of a component, it could contain anything.
        Re.shapeFlag & 198) ? p(Re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ce
        )
      );
      b(
        Re,
        Ie,
        Ke,
        null,
        Ce,
        _e,
        $e,
        Oe,
        !0
      );
    }
  }, ee = (I, z, ce, Ce, _e) => {
    if (z !== ce) {
      if (z !== ht)
        for (const $e in z)
          !jo($e) && !($e in ce) && r(
            I,
            $e,
            z[$e],
            null,
            _e,
            Ce
          );
      for (const $e in ce) {
        if (jo($e)) continue;
        const Oe = ce[$e], ze = z[$e];
        Oe !== ze && $e !== "value" && r(I, $e, ze, Oe, _e, Ce);
      }
      "value" in ce && r(I, "value", z.value, ce.value, _e);
    }
  }, Y = (I, z, ce, Ce, _e, $e, Oe, ze, Re) => {
    const Ie = z.el = I ? I.el : c(""), Ke = z.anchor = I ? I.anchor : c("");
    let { patchFlag: Fe, dynamicChildren: ve, slotScopeIds: Q } = z;
    Q && (ze = ze ? ze.concat(Q) : Q), I == null ? (a(Ie, ce, Ce), a(Ke, ce, Ce), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      z.children || [],
      ce,
      Ke,
      _e,
      $e,
      Oe,
      ze,
      Re
    )) : Fe > 0 && Fe & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren ? (ie(
      I.dynamicChildren,
      ve,
      ce,
      _e,
      $e,
      Oe,
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
      ce,
      Ke,
      _e,
      $e,
      Oe,
      ze,
      Re
    );
  }, he = (I, z, ce, Ce, _e, $e, Oe, ze, Re) => {
    z.slotScopeIds = ze, I == null ? z.shapeFlag & 512 ? _e.ctx.activate(
      z,
      ce,
      Ce,
      Oe,
      Re
    ) : se(
      z,
      ce,
      Ce,
      _e,
      $e,
      Oe,
      Re
    ) : J(I, z, Re);
  }, se = (I, z, ce, Ce, _e, $e, Oe) => {
    const ze = I.component = id(
      I,
      Ce,
      _e
    );
    if (ea(I) && (ze.ctx.renderer = de), rd(ze, !1, Oe), ze.asyncDep) {
      if (_e && _e.registerDep(ze, le, Oe), !I.el) {
        const Re = ze.subTree = C(Ft);
        S(null, Re, z, ce), I.placeholder = Re.el;
      }
    } else
      le(
        ze,
        I,
        z,
        ce,
        _e,
        $e,
        Oe
      );
  }, J = (I, z, ce) => {
    const Ce = z.component = I.component;
    if (Bu(I, z, ce))
      if (Ce.asyncDep && !Ce.asyncResolved) {
        Ue(Ce, z, ce);
        return;
      } else
        Ce.next = z, Ce.update();
    else
      z.el = I.el, Ce.vnode = z;
  }, le = (I, z, ce, Ce, _e, $e, Oe) => {
    const ze = () => {
      if (I.isMounted) {
        let { next: Fe, bu: ve, u: Q, parent: He, vnode: ke } = I;
        {
          const ne = Pr(I);
          if (ne) {
            Fe && (Fe.el = ke.el, Ue(I, Fe, Oe)), ne.asyncDep.then(() => {
              I.isUnmounted || ze();
            });
            return;
          }
        }
        let Ye = Fe, ot;
        Ys(I, !1), Fe ? (Fe.el = ke.el, Ue(I, Fe, Oe)) : Fe = ke, ve && xn(ve), (ot = Fe.props && Fe.props.onVnodeBeforeUpdate) && hs(ot, He, Fe, ke), Ys(I, !0);
        const Ae = jl(I), O = I.subTree;
        I.subTree = Ae, b(
          O,
          Ae,
          // parent may have changed if it's in a teleport
          p(O.el),
          // anchor may have changed if it's in a fragment
          q(O),
          I,
          _e,
          $e
        ), Fe.el = Ae.el, Ye === null && Wu(I, Ae.el), Q && qt(Q, _e), (ot = Fe.props && Fe.props.onVnodeUpdated) && qt(
          () => hs(ot, He, Fe, ke),
          _e
        );
      } else {
        let Fe;
        const { el: ve, props: Q } = z, { bm: He, m: ke, parent: Ye, root: ot, type: Ae } = I, O = bo(z);
        Ys(I, !1), He && xn(He), !O && (Fe = Q && Q.onVnodeBeforeMount) && hs(Fe, Ye, z), Ys(I, !0);
        {
          ot.ce && // @ts-expect-error _def is private
          ot.ce._def.shadowRoot !== !1 && ot.ce._injectChildStyle(Ae);
          const ne = I.subTree = jl(I);
          b(
            null,
            ne,
            ce,
            Ce,
            I,
            _e,
            $e
          ), z.el = ne.el;
        }
        if (ke && qt(ke, _e), !O && (Fe = Q && Q.onVnodeMounted)) {
          const ne = z;
          qt(
            () => hs(Fe, Ye, ne),
            _e
          );
        }
        (z.shapeFlag & 256 || Ye && bo(Ye.vnode) && Ye.vnode.shapeFlag & 256) && I.a && qt(I.a, _e), I.isMounted = !0, z = ce = Ce = null;
      }
    };
    I.scope.on();
    const Re = I.effect = new Ai(ze);
    I.scope.off();
    const Ie = I.update = Re.run.bind(Re), Ke = I.job = Re.runIfDirty.bind(Re);
    Ke.i = I, Ke.id = I.uid, Re.scheduler = () => gl(Ke), Ys(I, !0), Ie();
  }, Ue = (I, z, ce) => {
    z.component = I;
    const Ce = I.vnode.props;
    I.vnode = z, I.next = null, ju(I, z.props, Ce, ce), Ju(I, z.children, ce), Ds(), Ll(I), Os();
  }, oe = (I, z, ce, Ce, _e, $e, Oe, ze, Re = !1) => {
    const Ie = I && I.children, Ke = I ? I.shapeFlag : 0, Fe = z.children, { patchFlag: ve, shapeFlag: Q } = z;
    if (ve > 0) {
      if (ve & 128) {
        A(
          Ie,
          Fe,
          ce,
          Ce,
          _e,
          $e,
          Oe,
          ze,
          Re
        );
        return;
      } else if (ve & 256) {
        ye(
          Ie,
          Fe,
          ce,
          Ce,
          _e,
          $e,
          Oe,
          ze,
          Re
        );
        return;
      }
    }
    Q & 8 ? (Ke & 16 && Z(Ie, _e, $e), Fe !== Ie && v(ce, Fe)) : Ke & 16 ? Q & 16 ? A(
      Ie,
      Fe,
      ce,
      Ce,
      _e,
      $e,
      Oe,
      ze,
      Re
    ) : Z(Ie, _e, $e, !0) : (Ke & 8 && v(ce, ""), Q & 16 && E(
      Fe,
      ce,
      Ce,
      _e,
      $e,
      Oe,
      ze,
      Re
    ));
  }, ye = (I, z, ce, Ce, _e, $e, Oe, ze, Re) => {
    I = I || wo, z = z || wo;
    const Ie = I.length, Ke = z.length, Fe = Math.min(Ie, Ke);
    let ve;
    for (ve = 0; ve < Fe; ve++) {
      const Q = z[ve] = Re ? Gs(z[ve]) : bs(z[ve]);
      b(
        I[ve],
        Q,
        ce,
        null,
        _e,
        $e,
        Oe,
        ze,
        Re
      );
    }
    Ie > Ke ? Z(
      I,
      _e,
      $e,
      !0,
      !1,
      Fe
    ) : E(
      z,
      ce,
      Ce,
      _e,
      $e,
      Oe,
      ze,
      Re,
      Fe
    );
  }, A = (I, z, ce, Ce, _e, $e, Oe, ze, Re) => {
    let Ie = 0;
    const Ke = z.length;
    let Fe = I.length - 1, ve = Ke - 1;
    for (; Ie <= Fe && Ie <= ve; ) {
      const Q = I[Ie], He = z[Ie] = Re ? Gs(z[Ie]) : bs(z[Ie]);
      if (to(Q, He))
        b(
          Q,
          He,
          ce,
          null,
          _e,
          $e,
          Oe,
          ze,
          Re
        );
      else
        break;
      Ie++;
    }
    for (; Ie <= Fe && Ie <= ve; ) {
      const Q = I[Fe], He = z[ve] = Re ? Gs(z[ve]) : bs(z[ve]);
      if (to(Q, He))
        b(
          Q,
          He,
          ce,
          null,
          _e,
          $e,
          Oe,
          ze,
          Re
        );
      else
        break;
      Fe--, ve--;
    }
    if (Ie > Fe) {
      if (Ie <= ve) {
        const Q = ve + 1, He = Q < Ke ? z[Q].el : Ce;
        for (; Ie <= ve; )
          b(
            null,
            z[Ie] = Re ? Gs(z[Ie]) : bs(z[Ie]),
            ce,
            He,
            _e,
            $e,
            Oe,
            ze,
            Re
          ), Ie++;
      }
    } else if (Ie > ve)
      for (; Ie <= Fe; )
        Pe(I[Ie], _e, $e, !0), Ie++;
    else {
      const Q = Ie, He = Ie, ke = /* @__PURE__ */ new Map();
      for (Ie = He; Ie <= ve; Ie++) {
        const D = z[Ie] = Re ? Gs(z[Ie]) : bs(z[Ie]);
        D.key != null && ke.set(D.key, Ie);
      }
      let Ye, ot = 0;
      const Ae = ve - He + 1;
      let O = !1, ne = 0;
      const pe = new Array(Ae);
      for (Ie = 0; Ie < Ae; Ie++) pe[Ie] = 0;
      for (Ie = Q; Ie <= Fe; Ie++) {
        const D = I[Ie];
        if (ot >= Ae) {
          Pe(D, _e, $e, !0);
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
        U === void 0 ? Pe(D, _e, $e, !0) : (pe[U - He] = Ie + 1, U >= ne ? ne = U : O = !0, b(
          D,
          z[U],
          ce,
          null,
          _e,
          $e,
          Oe,
          ze,
          Re
        ), ot++);
      }
      const Je = O ? Zu(pe) : wo;
      for (Ye = Je.length - 1, Ie = Ae - 1; Ie >= 0; Ie--) {
        const D = He + Ie, U = z[D], te = z[D + 1], Le = D + 1 < Ke ? (
          // #13559, fallback to el placeholder for unresolved async component
          te.el || te.placeholder
        ) : Ce;
        pe[Ie] === 0 ? b(
          null,
          U,
          ce,
          Le,
          _e,
          $e,
          Oe,
          ze,
          Re
        ) : O && (Ye < 0 || Ie !== Je[Ye] ? me(U, ce, Le, 2) : Ye--);
      }
    }
  }, me = (I, z, ce, Ce, _e = null) => {
    const { el: $e, type: Oe, transition: ze, children: Re, shapeFlag: Ie } = I;
    if (Ie & 6) {
      me(I.component.subTree, z, ce, Ce);
      return;
    }
    if (Ie & 128) {
      I.suspense.move(z, ce, Ce);
      return;
    }
    if (Ie & 64) {
      Oe.move(I, z, ce, de);
      return;
    }
    if (Oe === G) {
      a($e, z, ce);
      for (let Fe = 0; Fe < Re.length; Fe++)
        me(Re[Fe], z, ce, Ce);
      a(I.anchor, z, ce);
      return;
    }
    if (Oe === Oa) {
      M(I, z, ce);
      return;
    }
    if (Ce !== 2 && Ie & 1 && ze)
      if (Ce === 0)
        ze.beforeEnter($e), a($e, z, ce), qt(() => ze.enter($e), _e);
      else {
        const { leave: Fe, delayLeave: ve, afterLeave: Q } = ze, He = () => {
          I.ctx.isUnmounted ? l($e) : a($e, z, ce);
        }, ke = () => {
          $e._isLeaving && $e[Ms](
            !0
            /* cancelled */
          ), Fe($e, () => {
            He(), Q && Q();
          });
        };
        ve ? ve($e, He, ke) : ke();
      }
    else
      a($e, z, ce);
  }, Pe = (I, z, ce, Ce = !1, _e = !1) => {
    const {
      type: $e,
      props: Oe,
      ref: ze,
      children: Re,
      dynamicChildren: Ie,
      shapeFlag: Ke,
      patchFlag: Fe,
      dirs: ve,
      cacheIndex: Q
    } = I;
    if (Fe === -2 && (_e = !1), ze != null && (Ds(), Jo(ze, null, ce, I, !0), Os()), Q != null && (z.renderCache[Q] = void 0), Ke & 256) {
      z.ctx.deactivate(I);
      return;
    }
    const He = Ke & 1 && ve, ke = !bo(I);
    let Ye;
    if (ke && (Ye = Oe && Oe.onVnodeBeforeUnmount) && hs(Ye, z, I), Ke & 6)
      H(I.component, ce, Ce);
    else {
      if (Ke & 128) {
        I.suspense.unmount(ce, Ce);
        return;
      }
      He && Qs(I, null, z, "beforeUnmount"), Ke & 64 ? I.type.remove(
        I,
        z,
        ce,
        de,
        Ce
      ) : Ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($e !== G || Fe > 0 && Fe & 64) ? Z(
        Ie,
        z,
        ce,
        !1,
        !0
      ) : ($e === G && Fe & 384 || !_e && Ke & 16) && Z(Re, z, ce), Ce && Ge(I);
    }
    (ke && (Ye = Oe && Oe.onVnodeUnmounted) || He) && qt(() => {
      Ye && hs(Ye, z, I), He && Qs(I, null, z, "unmounted");
    }, ce);
  }, Ge = (I) => {
    const { type: z, el: ce, anchor: Ce, transition: _e } = I;
    if (z === G) {
      Ee(ce, Ce);
      return;
    }
    if (z === Oa) {
      P(I);
      return;
    }
    const $e = () => {
      l(ce), _e && !_e.persisted && _e.afterLeave && _e.afterLeave();
    };
    if (I.shapeFlag & 1 && _e && !_e.persisted) {
      const { leave: Oe, delayLeave: ze } = _e, Re = () => Oe(ce, $e);
      ze ? ze(I.el, $e, Re) : Re();
    } else
      $e();
  }, Ee = (I, z) => {
    let ce;
    for (; I !== z; )
      ce = _(I), l(I), I = ce;
    l(z);
  }, H = (I, z, ce) => {
    const { bum: Ce, scope: _e, job: $e, subTree: Oe, um: ze, m: Re, a: Ie } = I;
    Kl(Re), Kl(Ie), Ce && xn(Ce), _e.stop(), $e && ($e.flags |= 8, Pe(Oe, I, z, ce)), ze && qt(ze, z), qt(() => {
      I.isUnmounted = !0;
    }, z);
  }, Z = (I, z, ce, Ce = !1, _e = !1, $e = 0) => {
    for (let Oe = $e; Oe < I.length; Oe++)
      Pe(I[Oe], z, ce, Ce, _e);
  }, q = (I) => {
    if (I.shapeFlag & 6)
      return q(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const z = _(I.anchor || I.el), ce = z && z[or];
    return ce ? _(ce) : z;
  };
  let X = !1;
  const xe = (I, z, ce) => {
    I == null ? z._vnode && Pe(z._vnode, null, null, !0) : b(
      z._vnode || null,
      I,
      z,
      null,
      null,
      null,
      ce
    ), z._vnode = I, X || (X = !0, Ll(), er(), X = !1);
  }, de = {
    p: b,
    um: Pe,
    m: me,
    r: Ge,
    mt: se,
    mc: E,
    pc: oe,
    pbc: ie,
    n: q,
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
  const a = e.children, l = t.children;
  if (Xe(a) && Xe(l))
    for (let r = 0; r < a.length; r++) {
      const u = a[r];
      let c = l[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = l[r] = Gs(l[r]), c.el = u.el), !o && c.patchFlag !== -2 && kl(u, c)), c.type === na && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = u.el), c.type === Ft && !c.el && (c.el = u.el);
    }
}
function Zu(e) {
  const t = e.slice(), o = [0];
  let a, l, r, u, c;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const m = e[a];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        t[a] = l, o.push(a);
        continue;
      }
      for (r = 0, u = o.length - 1; r < u; )
        c = r + u >> 1, e[o[c]] < m ? r = c + 1 : u = c;
      m < e[o[r]] && (r > 0 && (t[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, u = o[r - 1]; r-- > 0; )
    o[r] = u, u = t[u];
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
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : uu(e);
}
const G = Symbol.for("v-fgt"), na = Symbol.for("v-txt"), Ft = Symbol.for("v-cmt"), Oa = Symbol.for("v-stc"), Yo = [];
let es = null;
function n(e = !1) {
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
  return e.dynamicChildren = an > 0 ? es || wo : null, td(), an > 0 && es && es.push(e), e;
}
function i(e, t, o, a, l, r) {
  return Nr(
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
function R(e, t, o, a, l) {
  return Nr(
    C(
      e,
      t,
      o,
      a,
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
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Gt(e) || et(e) ? { i: Ot, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, a = 0, l = null, r = e === G ? 0 : 1, u = !1, c = !1) {
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
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Ot
  };
  return c ? (bl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), an > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const C = sd;
function sd(e, t = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === pr) && (e = Ft), ln(e)) {
    const c = Hs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && bl(c, o), an > 0 && !r && es && (c.shapeFlag & 6 ? es[es.indexOf(e)] = c : es.push(c)), c.patchFlag = -2, c;
  }
  if (md(e) && (e = e.__vccOpts), t) {
    t = od(t);
    let { class: c, style: d } = t;
    c && !$t(c) && (t.class = Ve(c)), gt(d) && (pl(d) && !Xe(d) && (d = Mt({}, d)), t.style = Wt(d));
  }
  const u = $t(e) ? 1 : Rr(e) ? 128 : nr(e) ? 64 : gt(e) ? 4 : et(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    a,
    l,
    u,
    r,
    !0
  );
}
function od(e) {
  return e ? pl(e) || xr(e) ? Mt({}, e) : e : null;
}
function Hs(e, t, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: u, children: c, transition: d } = e, m = t ? nd(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && Lr(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Xe(r) ? r.concat(En(t)) : [r, En(t)] : En(t)
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
    patchFlag: t && e.type !== G ? u === -1 ? 16 : u | 16 : u,
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
  return d && a && io(
    v,
    d.clone(v)
  ), v;
}
function x(e = " ", t = 0) {
  return C(na, null, e, t);
}
function h(e = "", t = !1) {
  return t ? (n(), R(Ft, null, e)) : C(Ft, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? C(Ft) : Xe(e) ? C(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ln(e) ? Gs(e) : C(na, null, String(e));
}
function Gs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hs(e);
}
function bl(e, t) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (Xe(t))
    o = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), bl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !xr(t) ? t._ctx = Ot : l === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Ot }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [x(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function nd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Ve([t.class, a.class]));
      else if (l === "style")
        t.style = Wt([t.style, a.style]);
      else if (qn(l)) {
        const r = t[l], u = a[l];
        u && r !== u && !(Xe(r) && r.includes(u)) && (t[l] = r ? [].concat(r, u) : u);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function hs(e, t, o, a = null) {
  ps(e, t, 7, [
    o,
    a
  ]);
}
const ad = wr();
let ld = 0;
function id(e, t, o) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || ad, r = {
    uid: ld++,
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
    propsOptions: Ir(a, l),
    emitsOptions: br(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ht,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
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
const $l = () => Bt || Ot;
let Fn, Ya;
{
  const e = Yn(), t = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((u) => u(r)) : l[0](r);
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
  const { props: a, children: l } = e.vnode, r = Dr(e);
  Gu(e, a, r, t), Ku(e, l, o || t);
  const u = r ? cd(e, t) : void 0;
  return t && Ya(!1), u;
}
function cd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xu);
  const { setup: a } = o;
  if (a) {
    Ds();
    const l = e.setupContext = a.length > 1 ? dd(e) : null, r = fn(e), u = dn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Mi(u);
    if (Os(), r(), (c || e.sp) && !bo(e) && fr(e), c) {
      if (u.then(Jl, Jl), t)
        return u.then((d) => {
          Ql(e, d);
        }).catch((d) => {
          Zn(d, e, 0);
        });
      e.asyncDep = u;
    } else
      Ql(e, u);
  } else
    Or(e);
}
function Ql(e, t, o) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : gt(t) && (e.setupState = Yi(t)), Or(e);
}
function Or(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || $s);
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
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function md(e) {
  return et(e) && "__vccOpts" in e;
}
const L = (e, t) => au(e, t, rn);
function Ro(e, t, o) {
  try {
    Vn(-1);
    const a = arguments.length;
    return a === 2 ? gt(t) && !Xe(t) ? ln(t) ? C(e, null, [t]) : C(e, t) : C(e, null, t) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && ln(o) && (o = [o]), C(e, t, o));
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
  createElement: (e, t, o, a) => {
    const l = t === "svg" ? Ts.createElementNS(pd, e) : t === "mathml" ? Ts.createElementNS(gd, e) : o ? Ts.createElement(e, { is: o }) : Ts.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
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
  insertStaticContent(e, t, o, a, l, r) {
    const u = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      Xl.innerHTML = Ar(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Xl.content;
      if (a === "svg" || a === "mathml") {
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
  Xe(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, Zl = (e) => e ? Xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Vr(e) {
  const t = {};
  for (const Y in e)
    Y in Ur || (t[Y] = e[Y]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: u = `${o}-enter-active`,
    enterToClass: c = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: m = u,
    appearToClass: v = c,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: _ = `${o}-leave-active`,
    leaveToClass: w = `${o}-leave-to`
  } = e, k = _d(l), b = k && k[0], y = k && k[1], {
    onBeforeEnter: S,
    onEnter: N,
    onEnterCancelled: M,
    onLeave: P,
    onLeaveCancelled: T,
    onBeforeAppear: F = S,
    onAppear: j = N,
    onAppearCancelled: E = M
  } = t, V = (Y, he, se, J) => {
    Y._enterCancelled = J, Fs(Y, he ? v : c), Fs(Y, he ? m : u), se && se();
  }, ie = (Y, he) => {
    Y._isLeaving = !1, Fs(Y, p), Fs(Y, w), Fs(Y, _), he && he();
  }, ee = (Y) => (he, se) => {
    const J = Y ? j : N, le = () => V(he, Y, se);
    Xs(J, [he, le]), ei(() => {
      Fs(he, Y ? d : r), ws(he, Y ? v : c), Zl(J) || ti(he, a, b, le);
    });
  };
  return Mt(t, {
    onBeforeEnter(Y) {
      Xs(S, [Y]), ws(Y, r), ws(Y, u);
    },
    onBeforeAppear(Y) {
      Xs(F, [Y]), ws(Y, d), ws(Y, m);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(Y, he) {
      Y._isLeaving = !0;
      const se = () => ie(Y, he);
      ws(Y, p), Y._enterCancelled ? (ws(Y, _), Za(Y)) : (Za(Y), ws(Y, _)), ei(() => {
        Y._isLeaving && (Fs(Y, p), ws(Y, w), Zl(P) || ti(Y, a, y, se));
      }), Xs(P, [Y, se]);
    },
    onEnterCancelled(Y) {
      V(Y, !1, void 0, !0), Xs(M, [Y]);
    },
    onAppearCancelled(Y) {
      V(Y, !0, void 0, !0), Xs(E, [Y]);
    },
    onLeaveCancelled(Y) {
      ie(Y), Xs(T, [Y]);
    }
  });
}
function _d(e) {
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
  return xc(e);
}
function ws(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function Fs(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Eo];
  o && (o.delete(t), o.size || (e[Eo] = void 0));
}
function ei(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let kd = 0;
function ti(e, t, o, a) {
  const l = e._endId = ++kd, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: u, timeout: c, propCount: d } = Fr(e, t);
  if (!u)
    return a();
  const m = u + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(m, _), r();
  }, _ = (w) => {
    w.target === e && ++v >= d && p();
  };
  setTimeout(() => {
    v < d && p();
  }, c + 1), e.addEventListener(m, _);
}
function Fr(e, t) {
  const o = window.getComputedStyle(e), a = (k) => (o[k] || "").split(", "), l = a(`${Vs}Delay`), r = a(`${Vs}Duration`), u = si(l, r), c = a(`${Oo}Delay`), d = a(`${Oo}Duration`), m = si(c, d);
  let v = null, p = 0, _ = 0;
  t === Vs ? u > 0 && (v = Vs, p = u, _ = r.length) : t === Oo ? m > 0 && (v = Oo, p = m, _ = d.length) : (p = Math.max(u, m), v = p > 0 ? u > m ? Vs : Oo : null, _ = v ? v === Vs ? r.length : d.length : 0);
  const w = v === Vs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Vs}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: _,
    hasTransform: w
  };
}
function si(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, a) => oi(o) + oi(e[a])));
}
function oi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Za(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function bd(e, t, o) {
  const a = e[Eo];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ni = Symbol("_vod"), $d = Symbol("_vsh"), Cd = Symbol(""), xd = /(?:^|;)\s*display\s*:/;
function Sd(e, t, o) {
  const a = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if ($t(t))
        for (const u of t.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          o[c] == null && Tn(a, c, "");
        }
      else
        for (const u in t)
          o[u] == null && Tn(a, u, "");
    for (const u in o)
      u === "display" && (r = !0), Tn(a, u, o[u]);
  } else if (l) {
    if (t !== o) {
      const u = a[Cd];
      u && (o += ";" + u), a.cssText = o, r = xd.test(o);
    }
  } else t && e.removeAttribute("style");
  ni in e && (e[ni] = r ? a.display : "", e[$d] && (a.display = "none"));
}
const ai = /\s*!important$/;
function Tn(e, t, o) {
  if (Xe(o))
    o.forEach((a) => Tn(e, t, a));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = Id(e, t);
    ai.test(o) ? e.setProperty(
      Ks(a),
      o.replace(ai, ""),
      "important"
    ) : e[a] = o;
  }
}
const li = ["Webkit", "Moz", "ms"], Ua = {};
function Id(e, t) {
  const o = Ua[t];
  if (o)
    return o;
  let a = is(t);
  if (a !== "filter" && a in e)
    return Ua[t] = a;
  a = Jn(a);
  for (let l = 0; l < li.length; l++) {
    const r = li[l] + a;
    if (r in e)
      return Ua[t] = r;
  }
  return t;
}
const ii = "http://www.w3.org/1999/xlink";
function ri(e, t, o, a, l, r = Pc(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(ii, t.slice(6, t.length)) : e.setAttributeNS(ii, t, o) : o == null || r && !Li(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ms(o) ? String(o) : o
  );
}
function ci(e, t, o, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Ar(o) : o);
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
    c === "boolean" ? o = Li(o) : o == null && c === "string" ? (o = "", u = !0) : c === "number" && (o = 0, u = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  u && e.removeAttribute(l || t);
}
function Ls(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function Ed(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const ui = Symbol("_vei");
function Td(e, t, o, a, l = null) {
  const r = e[ui] || (e[ui] = {}), u = r[t];
  if (a && u)
    u.value = a;
  else {
    const [c, d] = Md(t);
    if (a) {
      const m = r[t] = Nd(
        a,
        l
      );
      Ls(e, c, m, d);
    } else u && (Ed(e, c, u, d), r[t] = void 0);
  }
}
const di = /(?:Once|Passive|Capture)$/;
function Md(e) {
  let t;
  if (di.test(e)) {
    t = {};
    let a;
    for (; a = e.match(di); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ks(e.slice(2)), t];
}
let za = 0;
const Pd = /* @__PURE__ */ Promise.resolve(), Rd = () => za || (Pd.then(() => za = 0), za = Date.now());
function Nd(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ps(
      Ld(a, o.value),
      t,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Rd(), o;
}
function Ld(e, t) {
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
const fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Dd = (e, t, o, a, l, r) => {
  const u = l === "svg";
  t === "class" ? bd(e, a, u) : t === "style" ? Sd(e, o, a) : qn(t) ? al(t) || Td(e, t, o, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Od(e, t, a, u)) ? (ci(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ri(e, t, a, u, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !$t(a)) ? ci(e, is(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), ri(e, t, a, u));
};
function Od(e, t, o, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fi(t) && et(o));
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
    const o = $l(), a = ir();
    let l, r;
    return vr(() => {
      if (!l.length)
        return;
      const u = e.moveClass || `${e.name || "v"}-move`;
      if (!Wd(
        l[0].el,
        o.vnode.el,
        u
      )) {
        l = [];
        return;
      }
      l.forEach(Vd), l.forEach(Fd);
      const c = l.filter(Bd);
      Za(o.vnode.el), c.forEach((d) => {
        const m = d.el, v = m.style;
        ws(m, u), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = m[Bn] = (_) => {
          _ && _.target !== m || (!_ || _.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", p), m[Bn] = null, Fs(m, u));
        };
        m.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const u = rt(e), c = Vr(u);
      let d = u.tag || G;
      if (l = [], r)
        for (let m = 0; m < r.length; m++) {
          const v = r[m];
          v.el && v.el instanceof Element && (l.push(v), io(
            v,
            nn(
              v,
              c,
              a,
              o
            )
          ), Br.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = t.default ? hl(t.default()) : [];
      for (let m = 0; m < r.length; m++) {
        const v = r[m];
        v.key != null && io(
          v,
          nn(v, c, a, o)
        );
      }
      return C(d, null, r);
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
  const t = Br.get(e), o = Wr.get(e), a = t.left - o.left, l = t.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Wd(e, t, o) {
  const a = e.cloneNode(), l = e[Eo];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((c) => c && a.classList.add(c)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: u } = Fr(a);
  return r.removeChild(a), u;
}
const qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (o) => xn(t, o) : t;
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
const no = {
  created(e, { modifiers: { lazy: t, trim: o, number: a } }, l) {
    e[ls] = qs(l);
    const r = a || l.props && l.props.type === "number";
    Ls(e, t ? "change" : "input", (u) => {
      u.target.composing || e[ls](pi(e.value, o, r));
    }), (o || r) && Ls(e, "change", () => {
      e.value = pi(e.value, o, r);
    }), t || (Ls(e, "compositionstart", Gd), Ls(e, "compositionend", vi), Ls(e, "change", vi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, u) {
    if (e[ls] = qs(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Qn(e.value) : e.value, d = t ?? "";
    c !== d && (document.activeElement === e && e.type !== "range" && (a && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Wn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ls] = qs(o), Ls(e, "change", () => {
      const a = e._modelValue, l = To(e), r = e.checked, u = e[ls];
      if (Xe(a)) {
        const c = rl(a, l), d = c !== -1;
        if (r && !d)
          u(a.concat(l));
        else if (!r && d) {
          const m = [...a];
          m.splice(c, 1), u(m);
        }
      } else if (Mo(a)) {
        const c = new Set(a);
        r ? c.add(l) : c.delete(l), u(c);
      } else
        u(Gr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: gi,
  beforeUpdate(e, t, o) {
    e[ls] = qs(o), gi(e, t, o);
  }
};
function gi(e, { value: t, oldValue: o }, a) {
  e._modelValue = t;
  let l;
  if (Xe(t))
    l = rl(t, a.props.value) > -1;
  else if (Mo(t))
    l = t.has(a.props.value);
  else {
    if (t === o) return;
    l = lo(t, Gr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Mn = {
  created(e, { value: t }, o) {
    e.checked = lo(t, o.props.value), e[ls] = qs(o), Ls(e, "change", () => {
      e[ls](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, a) {
    e[ls] = qs(a), t !== o && (e.checked = lo(t, a.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, a) {
    const l = Mo(t);
    Ls(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? Qn(To(u)) : To(u)
      );
      e[ls](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[ls] = qs(a);
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
  const o = e.multiple, a = Xe(t);
  if (!(o && !a && !Mo(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = To(u);
      if (o)
        if (a) {
          const d = typeof c;
          d === "string" || d === "number" ? u.selected = t.some((m) => String(m) === String(c)) : u.selected = rl(t, c) > -1;
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
}, ft = (e, t) => {
  const o = e._withMods || (e._withMods = {}), a = t.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let u = 0; u < t.length; u++) {
      const c = Hd[t[u]];
      if (c && c(l, t)) return;
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
  const o = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Ks(l.key);
    if (t.some(
      (u) => u === r || qd[u] === r
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
  return t.mount = (a) => {
    const l = Yd(a);
    if (!l) return;
    const r = t._component;
    !et(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const u = o(l, !1, Qd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), u;
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
}, of = /* @__PURE__ */ be({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (n(), i("div", Xd, [
      t.$slots.header ? (n(), i("div", Zd, [
        st(t.$slots, "header", {}, void 0)
      ])) : h("", !0),
      t.$slots.search ? (n(), i("div", ef, [
        st(t.$slots, "search", {}, void 0)
      ])) : h("", !0),
      s("div", tf, [
        st(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (n(), i("div", sf, [
        st(t.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Se = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
}, At = /* @__PURE__ */ Se(of, [["__scopeId", "data-v-21565df9"]]), nf = {
  key: 0,
  class: "panel-title-prefix"
}, af = {
  key: 1,
  class: "panel-title-prefix-theme"
}, lf = /* @__PURE__ */ be({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (n(), R(yl(`h${e.level}`), {
      class: Ve(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", nf, f(e.prefix), 1)) : (n(), i("span", af)),
        st(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), rf = /* @__PURE__ */ Se(lf, [["__scopeId", "data-v-c3875efc"]]), cf = ["title"], uf = ["width", "height"], df = /* @__PURE__ */ be({
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
      ])], 8, uf))
    ], 8, cf));
  }
}), jr = /* @__PURE__ */ Se(df, [["__scopeId", "data-v-6fc7f16d"]]), ff = { class: "header-left" }, mf = {
  key: 0,
  class: "header-actions"
}, vf = /* @__PURE__ */ be({
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
      class: Ve(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", ff, [
        C(rf, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            x(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), R(jr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => t.$emit("info-click"))
        })) : h("", !0)
      ]),
      t.$slots.actions ? (n(), i("div", mf, [
        st(t.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ Se(vf, [["__scopeId", "data-v-55a62cd6"]]), pf = {
  key: 0,
  class: "section-title-count"
}, gf = {
  key: 1,
  class: "section-title-icon"
}, hf = /* @__PURE__ */ be({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), R(yl(`h${e.level}`), {
      class: Ve(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: g(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", pf, "(" + f(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (n(), i("span", gf, f(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ns = /* @__PURE__ */ Se(hf, [["__scopeId", "data-v-559361eb"]]), yf = { class: "status-grid" }, wf = { class: "status-grid__columns" }, _f = { class: "status-grid__column" }, kf = { class: "status-grid__title" }, bf = { class: "status-grid__column status-grid__column--right" }, $f = { class: "status-grid__title" }, Cf = {
  key: 0,
  class: "status-grid__footer"
}, xf = /* @__PURE__ */ be({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", yf, [
      s("div", wf, [
        s("div", _f, [
          s("h4", kf, f(e.leftTitle), 1),
          st(t.$slots, "left", {}, void 0)
        ]),
        s("div", bf, [
          s("h4", $f, f(e.rightTitle), 1),
          st(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (n(), i("div", Cf, [
        st(t.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Sf = /* @__PURE__ */ Se(xf, [["__scopeId", "data-v-73b7ba3f"]]), If = {
  key: 0,
  class: "status-item__icon"
}, Ef = {
  key: 1,
  class: "status-item__count"
}, Tf = { class: "status-item__label" }, Mf = /* @__PURE__ */ be({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = L(() => `status-item--${t.variant}`);
    return (a, l) => (n(), i("div", {
      class: Ve(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", If, f(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (n(), i("span", Ef, f(e.count), 1)) : h("", !0),
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
}, Uf = /* @__PURE__ */ be({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = L(() => `issue-card--${t.severity}`);
    return (a, l) => (n(), i("div", {
      class: Ve(["issue-card", o.value])
    }, [
      s("div", Pf, [
        s("span", Rf, f(e.icon), 1),
        s("h4", Nf, f(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Lf, [
        e.description ? (n(), i("p", Df, f(e.description), 1)) : h("", !0),
        st(a.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (n(), i("div", Of, [
        (n(!0), i(G, null, ge(e.items, (r, u) => (n(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, f(r), 1)
        ]))), 128))
      ])) : h("", !0),
      a.$slots.actions ? (n(), i("div", Af, [
        st(a.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ Se(Uf, [["__scopeId", "data-v-df6aa348"]]), zf = ["type", "disabled"], Vf = {
  key: 0,
  class: "spinner"
}, Ff = /* @__PURE__ */ be({
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
      class: Ve(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Vf)) : h("", !0),
      e.loading ? h("", !0) : st(t.$slots, "default", { key: 1 }, void 0)
    ], 10, zf));
  }
}), Te = /* @__PURE__ */ Se(Ff, [["__scopeId", "data-v-772abe47"]]), Bf = { class: "empty-state" }, Wf = {
  key: 0,
  class: "empty-icon"
}, Gf = { class: "empty-message" }, jf = /* @__PURE__ */ be({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (n(), i("div", Bf, [
      e.icon ? (n(), i("div", Wf, f(e.icon), 1)) : h("", !0),
      s("p", Gf, f(e.message), 1),
      e.actionLabel ? (n(), R(Te, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("action"))
      }, {
        default: g(() => [
          x(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ Se(jf, [["__scopeId", "data-v-4466284f"]]), Hf = /* @__PURE__ */ be({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Ve(["detail-label"]),
      style: Wt({ minWidth: e.minWidth })
    }, [
      st(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Pn = /* @__PURE__ */ Se(Hf, [["__scopeId", "data-v-75e9eeb8"]]), qf = /* @__PURE__ */ be({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Ve(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      st(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), el = /* @__PURE__ */ Se(qf, [["__scopeId", "data-v-2f186e4c"]]), Kf = { class: "detail-row" }, Jf = /* @__PURE__ */ be({
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
    return (t, o) => (n(), i("div", Kf, [
      C(Pn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          x(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), R(el, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          x(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : st(t.$slots, "value", { key: 1 }, void 0)
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
}, wv = { class: "modal-actions" }, _v = /* @__PURE__ */ be({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = $(!1);
    ct(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), kt(() => t.show, (_, w) => {
      console.log("StatusDetailModal show prop changed from", w, "to", _);
    }, { immediate: !0 });
    const a = L(() => {
      var _, w, k;
      return ((k = (w = (_ = t.status) == null ? void 0 : _.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : k.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), l = L(() => {
      var _, w, k;
      return ((k = (w = (_ = t.status) == null ? void 0 : _.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : k.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), r = L(() => {
      var _, w, k;
      return ((k = (w = (_ = t.status) == null ? void 0 : _.workflows) == null ? void 0 : w.synced) == null ? void 0 : k.filter((b) => {
        var S, N, M;
        const y = (M = (N = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : M.find((P) => P.name === b);
        return !y || y.status !== "broken";
      })) || [];
    }), u = L(() => {
      var _, w, k, b, y;
      return (_ = t.status) != null && _.workflows ? (((w = t.status.workflows.new) == null ? void 0 : w.length) ?? 0) > 0 || (((k = t.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || (((b = t.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((y = t.status.workflows.synced) == null ? void 0 : y.length) ?? 0) > 0 : !1;
    }), c = L(() => {
      var w, k, b;
      const _ = (w = t.status) == null ? void 0 : w.git_changes;
      return _ ? (((k = _.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || (((b = _.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = L(() => {
      var _, w, k, b, y, S;
      return !u.value && !c.value && ((w = (_ = t.status) == null ? void 0 : _.comparison) == null ? void 0 : w.is_synced) && (((k = t.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((S = (y = (b = t.status) == null ? void 0 : b.comparison) == null ? void 0 : y.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), m = L(() => {
      var w, k;
      const _ = (k = (w = t.status) == null ? void 0 : w.git_changes) == null ? void 0 : k.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function v(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function p(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, w) => {
      var k, b, y, S, N, M, P, T, F, j, E, V, ie, ee, Y, he, se, J, le, Ue, oe, ye;
      return n(), R(Rt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: w[7] || (w[7] = (A) => _.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: w[6] || (w[6] = ft(() => {
            }, ["stop"]))
          }, [
            s("div", Qf, [
              w[8] || (w[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: w[0] || (w[0] = (A) => _.$emit("close"))
              }, "✕")
            ]),
            s("div", Yf, [
              s("div", Xf, [
                C(ns, { level: "4" }, {
                  default: g(() => [...w[9] || (w[9] = [
                    x("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (n(), i("div", Zf, [
                s("div", em, [
                  C(ns, { level: "4" }, {
                    default: g(() => [...w[10] || (w[10] = [
                      x("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: w[1] || (w[1] = (A) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", tm, [
                  s("div", sm, [
                    w[11] || (w[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", om, "BROKEN (COMMITTED) (" + f(a.value.length) + ")", 1)
                  ]),
                  s("div", nm, [
                    (n(!0), i(G, null, ge(a.value, (A) => (n(), i("div", {
                      key: A.name,
                      class: "workflow-item"
                    }, [
                      s("span", am, f(A.name), 1),
                      s("span", lm, f(A.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (n(), i("div", im, [
                  s("div", rm, [
                    w[12] || (w[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", cm, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  s("div", um, [
                    (n(!0), i(G, null, ge(l.value, (A) => (n(), i("div", {
                      key: A.name,
                      class: "workflow-item"
                    }, [
                      s("span", dm, f(A.name), 1),
                      s("span", fm, f(A.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (b = (k = e.status.workflows) == null ? void 0 : k.new) != null && b.length ? (n(), i("div", mm, [
                  s("div", vm, [
                    w[13] || (w[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", pm, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", gm, [
                    (n(!0), i(G, null, ge(e.status.workflows.new, (A) => (n(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", hm, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (y = e.status.workflows) == null ? void 0 : y.modified) != null && S.length ? (n(), i("div", ym, [
                  s("div", wm, [
                    w[14] || (w[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", _m, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", km, [
                    (n(!0), i(G, null, ge(e.status.workflows.modified, (A) => (n(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", bm, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (M = (N = e.status.workflows) == null ? void 0 : N.deleted) != null && M.length ? (n(), i("div", $m, [
                  s("div", Cm, [
                    w[15] || (w[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", xm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Sm, [
                    (n(!0), i(G, null, ge(e.status.workflows.deleted, (A) => (n(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", Im, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (n(), i("div", Em, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: w[2] || (w[2] = (A) => o.value = !o.value)
                  }, [
                    w[16] || (w[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Tm, "SYNCED (" + f(r.value.length) + ")", 1),
                    s("span", Mm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Pm, [
                    (n(!0), i(G, null, ge(r.value, (A) => (n(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", Rm, f(A), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              c.value ? (n(), i("div", Nm, [
                C(ns, { level: "4" }, {
                  default: g(() => [...w[17] || (w[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (T = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && T.length ? (n(), i("div", Lm, [
                  s("div", Dm, [
                    w[18] || (w[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Om, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Am, [
                    (n(!0), i(G, null, ge(e.status.git_changes.nodes_added, (A) => (n(), i("div", {
                      key: v(A),
                      class: "change-item"
                    }, [
                      s("span", Um, f(v(A)), 1),
                      p(A) ? (n(), i("span", zm, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (j = (F = e.status.git_changes) == null ? void 0 : F.nodes_removed) != null && j.length ? (n(), i("div", Vm, [
                  s("div", Fm, [
                    w[19] || (w[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", Bm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", Wm, [
                    (n(!0), i(G, null, ge(e.status.git_changes.nodes_removed, (A) => (n(), i("div", {
                      key: v(A),
                      class: "change-item"
                    }, [
                      s("span", Gm, f(v(A)), 1),
                      p(A) ? (n(), i("span", jm, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (n(), i("div", Hm, [
                  w[20] || (w[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", qm, [
                    s("div", Km, [
                      s("span", Jm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (V = e.status.git_changes) != null && V.has_other_changes ? (n(), i("div", Qm, [...w[21] || (w[21] = [
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
              (ie = e.status.comparison) != null && ie.is_synced ? h("", !0) : (n(), i("div", Ym, [
                s("div", Xm, [
                  C(ns, { level: "4" }, {
                    default: g(() => [...w[22] || (w[22] = [
                      x("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: w[3] || (w[3] = (A) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                w[26] || (w[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Y = (ee = e.status.comparison) == null ? void 0 : ee.missing_nodes) != null && Y.length ? (n(), i("div", Zm, [
                  C(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", ev, [
                    (n(!0), i(G, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (A) => (n(), i("div", {
                      key: A,
                      class: "drift-list-item"
                    }, " - " + f(A), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", tv, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (se = (he = e.status.comparison) == null ? void 0 : he.extra_nodes) != null && se.length ? (n(), i("div", sv, [
                  C(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", ov, [
                    (n(!0), i(G, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (A) => (n(), i("div", {
                      key: A,
                      class: "drift-list-item"
                    }, " - " + f(A), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", nv, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (le = (J = e.status.comparison) == null ? void 0 : J.version_mismatches) != null && le.length ? (n(), i("div", av, [
                  C(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", lv, [
                    (n(!0), i(G, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (A) => (n(), i("div", {
                      key: A.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(f(A.name) + ": ", 1),
                      s("span", iv, f(A.actual), 1),
                      w[23] || (w[23] = x(" → ", -1)),
                      s("span", rv, f(A.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", cv, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((Ue = e.status.comparison) == null ? void 0 : Ue.packages_in_sync) === !1 ? (n(), i("div", uv, [
                  C(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                s("div", dv, [
                  C(Te, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: w[4] || (w[4] = (A) => _.$emit("repair"))
                  }, {
                    default: g(() => [...w[24] || (w[24] = [
                      x(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  w[25] || (w[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ye = (oe = e.status.comparison) == null ? void 0 : oe.disabled_nodes) != null && ye.length ? (n(), i("div", fv, [
                C(ns, { level: "4" }, {
                  default: g(() => [...w[27] || (w[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", mv, [
                  w[28] || (w[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", vv, [
                  (n(!0), i(G, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (A) => (n(), i("div", {
                    key: A,
                    class: "drift-list-item"
                  }, " • " + f(A), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", pv, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", gv, [
                C(ns, { level: "4" }, {
                  default: g(() => [...w[29] || (w[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", hv, [
                  w[30] || (w[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                w[31] || (w[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (n(), i("div", yv, [...w[32] || (w[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            s("div", wv, [
              C(Te, {
                variant: "secondary",
                onClick: w[5] || (w[5] = (A) => _.$emit("close"))
              }, {
                default: g(() => [...w[33] || (w[33] = [
                  x(" Close ", -1)
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
}, Iv = /* @__PURE__ */ be({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = $(!1), r = $(!1);
    function u() {
      l.value = !0;
    }
    function c() {
      l.value = !1, m("view-workflows");
    }
    function d() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = $(!1), p = $(!1);
    function _() {
      p.value = !0, m("repair-environment");
    }
    function w() {
      p.value = !1;
    }
    function k() {
      l.value = !1;
    }
    const b = L(() => {
      const Ee = a.status.workflows.analyzed || [], H = Ee.filter(
        (Z) => Z.unresolved_models_count > 0 || Z.ambiguous_models_count > 0
      );
      return H.length === 0 && a.status.missing_models_count > 0 ? Ee.filter((Z) => Z.sync_state === "synced") : H;
    });
    function y() {
      const Ee = b.value;
      Ee.length !== 0 && (v.value = !0, m("repair-missing-models", Ee.map((H) => H.name)));
    }
    function S() {
      v.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: w, closeDetailModal: k });
    const N = L(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), M = L(() => a.status.has_changes), P = L(() => {
      const Ee = a.status.git_changes;
      return Ee.nodes_added.length > 0 || Ee.nodes_removed.length > 0 || Ee.workflow_changes;
    }), T = L(() => a.status.has_changes || N.value), F = L(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), j = L(() => a.status.git_changes.has_other_changes), E = L(() => {
      var Ee;
      return ((Ee = a.status.workflows.analyzed) == null ? void 0 : Ee.filter((H) => H.status === "broken")) || [];
    }), V = L(() => {
      var Ee;
      return ((Ee = a.status.workflows.analyzed) == null ? void 0 : Ee.filter(
        (H) => H.has_path_sync_issues && !H.has_issues
      )) || [];
    }), ie = L(() => E.value.length > 0);
    function ee(Ee) {
      const H = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const Z of H) {
        const q = Ee.match(Z);
        if (q != null && q[1])
          return q[1];
      }
      return null;
    }
    function Y(Ee) {
      const H = Ee.map(ee).filter((Z) => !!Z);
      return [...new Set(H)];
    }
    function he(Ee) {
      if (Ee.length === 0) return "";
      if (Ee.length === 1) return ` (>= ${Ee[0]})`;
      const H = Ee.slice(0, 2).map((q) => `>= ${q}`).join(", "), Z = Ee.length > 2;
      return ` (${H}${Z ? ", ..." : ""})`;
    }
    function se(Ee) {
      return Ee.replace(/uninstallable node mappings?/gi, (H) => H.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function J(Ee) {
      const H = se(Ee.issue_summary || "Has issues"), Z = /(?:>=|v?\d+\.\d+)/i.test(H), q = Y(Ee.version_gated_guidance || []);
      return (Ee.nodes_version_gated_count || 0) > 0 && q.length > 0 && !Z ? `${Ee.name} — ${H} (needs ComfyUI ${q.map((X) => `>= ${X}`).join(", ")})` : `${Ee.name} — ${H}`;
    }
    const le = L(() => E.value.reduce(
      (Ee, H) => Ee + (H.nodes_version_gated_count || 0),
      0
    )), Ue = L(() => {
      const Ee = E.value.flatMap(
        (H) => Y(H.version_gated_guidance || [])
      );
      return [...new Set(Ee)];
    }), oe = L(() => E.value.reduce(
      (Ee, H) => Ee + (H.nodes_uninstallable_count || 0),
      0
    )), ye = L(() => {
      const Ee = [];
      return le.value > 0 && Ee.push(
        `${le.value} require newer ComfyUI${he(Ue.value)}`
      ), oe.value > 0 && Ee.push(`${oe.value} need community packages`), Ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), A = L(() => ie.value || V.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), me = L(() => {
      const Ee = [];
      return a.status.workflows.new.length > 0 && Ee.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && Ee.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && Ee.push(`${a.status.workflows.deleted.length} deleted`), Ee.length > 0 ? `${Ee.join(", ")} workflow${Ee.length === 1 && !Ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Pe = L(() => {
      var Z, q;
      const Ee = [], H = a.status.comparison;
      return (Z = H.missing_nodes) != null && Z.length && Ee.push(`${H.missing_nodes.length} missing node${H.missing_nodes.length === 1 ? "" : "s"}`), (q = H.extra_nodes) != null && q.length && Ee.push(`${H.extra_nodes.length} untracked node${H.extra_nodes.length === 1 ? "" : "s"}`), Ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Ee.join(" and ")}.`;
    }), Ge = L(() => {
      var Z, q;
      const Ee = [], H = a.status.comparison;
      return (Z = H.extra_nodes) != null && Z.length && (H.extra_nodes.slice(0, 3).forEach((X) => {
        Ee.push(`Untracked: ${X}`);
      }), H.extra_nodes.length > 3 && Ee.push(`...and ${H.extra_nodes.length - 3} more untracked`)), (q = H.missing_nodes) != null && q.length && (H.missing_nodes.slice(0, 3).forEach((X) => {
        Ee.push(`Missing: ${X}`);
      }), H.missing_nodes.length > 3 && Ee.push(`...and ${H.missing_nodes.length - 3} more missing`)), Ee;
    });
    return (Ee, H) => (n(), i(G, null, [
      C(At, null, {
        header: g(() => [
          C(Ut, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), R(us, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[0] || (H[0] = (Z) => Ee.$emit("start-setup"))
              }, {
                default: g(() => [...H[13] || (H[13] = [
                  x(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), R(us, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[1] || (H[1] = (Z) => Ee.$emit("view-environments"))
              }, {
                default: g(() => [...H[14] || (H[14] = [
                  x(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), R(us, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[2] || (H[2] = (Z) => Ee.$emit("create-environment"))
              }, {
                default: g(() => [...H[15] || (H[15] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: H[4] || (H[4] = (Z) => r.value = !0),
            onMouseleave: H[5] || (H[5] = (Z) => r.value = !1)
          }, [
            s("div", bv, [
              C(ns, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...H[16] || (H[16] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(wd, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), R(Te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: g(() => [...H[17] || (H[17] = [
                      x(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            C(Sf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: g(() => [
                e.status.workflows.new.length ? (n(), R(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (n(), R(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (n(), R(ys, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                C(ys, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), R(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), R(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (n(), R(ys, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                j.value ? (n(), R(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                M.value && !P.value && !j.value ? (n(), R(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                M.value ? h("", !0) : (n(), R(ys, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              T.value ? {
                name: "footer",
                fn: g(() => [
                  H[19] || (H[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", $v, [
                    s("span", Cv, f(me.value), 1),
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: H[3] || (H[3] = (Z) => Ee.$emit("commit-changes"))
                    }, {
                      default: g(() => [...H[18] || (H[18] = [
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
          e.status.is_detached_head ? (n(), R(us, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[6] || (H[6] = (Z) => Ee.$emit("create-branch"))
              }, {
                default: g(() => [...H[20] || (H[20] = [
                  x(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          s("div", xv, [
            C(ns, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...H[21] || (H[21] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            A.value ? (n(), i(G, { key: 0 }, [
              E.value.length > 0 ? (n(), R(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: ye.value,
                items: E.value.map(J)
              }, {
                actions: g(() => [
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[7] || (H[7] = (Z) => Ee.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[22] || (H[22] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              V.value.length > 0 ? (n(), R(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${V.value.length} workflow${V.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: V.value.map((Z) => `${Z.name} — ${Z.models_needing_path_sync_count} model path${Z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[8] || (H[8] = (Z) => Ee.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[23] || (H[23] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !ie.value ? (n(), R(us, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: y
                  }, {
                    default: g(() => [
                      x(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: H[9] || (H[9] = (Z) => Ee.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[24] || (H[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (n(), R(us, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Pe.value,
                items: Ge.value
              }, {
                actions: g(() => [
                  C(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: g(() => [...H[25] || (H[25] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[10] || (H[10] = (Z) => Ee.$emit("view-nodes"))
                  }, {
                    default: g(() => [...H[26] || (H[26] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), R(us, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[11] || (H[11] = (Z) => Ee.$emit("view-nodes"))
                  }, {
                    default: g(() => [...H[27] || (H[27] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : T.value ? (n(), i("span", Sv, "No issues")) : (n(), R(rs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(kv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: H[12] || (H[12] = (Z) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: d,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ev = /* @__PURE__ */ Se(Iv, [["__scopeId", "data-v-df52ba90"]]), GP = co({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const jP = [
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
], HP = {
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
], qP = [
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
  constructor(o, a, l, r) {
    super(o);
    gn(this, "status");
    gn(this, "data");
    gn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function Mv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function pt() {
  const e = $(!1), t = $(null);
  async function o(W, we) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi(W, we), dt = await Be.text();
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
      throw new Hr(String(gs), Be.status, jt, W);
    }
    if (dt)
      return JSON.parse(dt);
  }
  async function a(W) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(W)}`);
  }
  async function l(W, we, Be) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, email: we, password: Be })
    });
  }
  async function r(W, we, Be) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, email: we, password: Be })
    });
  }
  async function u(W, we) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(W)}`, {
      headers: { Authorization: `Bearer ${we}` }
    });
  }
  async function c(W, we) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, refresh_token: we || null })
    });
  }
  async function d(W, we) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(W)}`, {
      headers: { Authorization: `Bearer ${we}` }
    });
  }
  async function m(W, we, Be) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(we)}/revisions?cloud_url=${encodeURIComponent(W)}`,
      {
        headers: { Authorization: `Bearer ${Be}` }
      }
    );
  }
  async function v(W, we, Be, dt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${we}`
      },
      body: JSON.stringify({
        cloud_url: W,
        source_message: Be || null,
        cloud_environment_id: dt || null
      })
    });
  }
  async function p(W = !1) {
    return o(W ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function _(W, we = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: W, allow_issues: we })
    });
  }
  async function w(W = 10, we = 0) {
    return o(`/v2/comfygit/log?limit=${W}&offset=${we}`);
  }
  async function k(W, we = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(W)}&limit=${we}`);
  }
  async function b(W) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W })
    });
  }
  async function y() {
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
  async function N(W) {
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
  async function P(W, we) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(W)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: we, force: !0 })
    });
  }
  async function T() {
    return o("/v2/comfygit/branches");
  }
  async function F(W) {
    return o(`/v2/comfygit/commit/${W}`);
  }
  async function j(W, we = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: W, force: we })
    });
  }
  async function E(W, we = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: W, start_point: we })
    });
  }
  async function V(W, we = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: W, force: we })
    });
  }
  async function ie(W, we = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(W)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: we })
    });
  }
  async function ee() {
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
  async function Y() {
    return (await ee()).environments;
  }
  async function he(W) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(W)}`);
    } catch {
      return null;
    }
  }
  async function se(W, we) {
    const Be = { target_env: W };
    return we && (Be.workspace_path = we), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Be)
    });
  }
  async function J() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function le(W) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Ue() {
    return o("/v2/workspace/environments/create_status");
  }
  async function oe(W = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${W}`);
  }
  async function ye(W) {
    return o(`/v2/workspace/environments/${W}`, {
      method: "DELETE"
    });
  }
  async function A(W = !1) {
    try {
      return o(W ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const we = await p(W), Be = [];
      return we.workflows.new.forEach((dt) => {
        Be.push({
          name: dt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), we.workflows.modified.forEach((dt) => {
        Be.push({
          name: dt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), we.workflows.synced.forEach((dt) => {
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
  async function me(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/details`);
  }
  async function Pe(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/contract`);
  }
  async function Ge(W, we) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we)
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
  async function Z(W, we, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: we, install_models: Be })
    });
  }
  async function q(W, we, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: we, importance: Be })
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
  async function de(W) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(W)}`);
  }
  async function re(W) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function I(W, we) {
    return o(`/v2/workspace/models/${W}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: we })
    });
  }
  async function z(W, we) {
    return o(`/v2/workspace/models/${W}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: we })
    });
  }
  async function ce(W) {
    return o(`/v2/workspace/models/${W}`, {
      method: "DELETE"
    });
  }
  async function Ce(W) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
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
  async function Oe(W) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function ze(W) {
    const we = new URLSearchParams({ url: W });
    return o(`/v2/workspace/huggingface/repo-info?${we}`);
  }
  async function Re() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ie(W, we = 10) {
    const Be = new URLSearchParams({ query: W, limit: String(we) });
    return o(`/v2/workspace/huggingface/search?${Be}`);
  }
  async function Ke(W) {
    try {
      const we = W ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(W)}` : "/v2/comfygit/config";
      return o(we);
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
  async function Fe(W, we) {
    const Be = we ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(we)}` : "/v2/comfygit/config";
    return o(Be, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function ve(W, we) {
    try {
      const Be = new URLSearchParams();
      return W && Be.append("level", W), we && Be.append("lines", we.toString()), o(`/v2/comfygit/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function Q(W, we) {
    try {
      const Be = new URLSearchParams();
      return W && Be.append("level", W), we && Be.append("lines", we.toString()), o(`/v2/workspace/debug/logs?${Be}`);
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
  async function ot(W, we) {
    try {
      const Be = new URLSearchParams();
      return W && Be.append("level", W), we && Be.append("lines", we.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function Ae() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function O(W) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function ne() {
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
  async function pe(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/track-dev`, {
      method: "POST"
    });
  }
  async function Je(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/install`, {
      method: "POST"
    });
  }
  async function D(W, we) {
    var gs, ss, Ze, Ia;
    const Be = Mv(), dt = ((ss = (gs = window.app) == null ? void 0 : gs.api) == null ? void 0 : ss.clientId) ?? ((Ia = (Ze = window.app) == null ? void 0 : Ze.api) == null ? void 0 : Ia.initialClientId) ?? "comfygit-panel", Lt = {
      id: W.id,
      version: W.version || W.selected_version || "latest",
      selected_version: W.selected_version || "latest",
      mode: W.mode || "remote",
      channel: W.channel || "default"
    };
    return W.install_source && (Lt.install_source = W.install_source), W.install_source === "git" && W.repository && (Lt.repository = W.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Lt,
        ui_id: Be,
        client_id: dt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Be, "for package:", W.id), we != null && we.beforeQueueStart && await we.beforeQueueStart(Be), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Be };
  }
  async function U(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/update`, {
      method: "POST"
    });
  }
  async function te(W, we) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: we })
    });
  }
  async function Le(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function De() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Me(W, we) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: W, url: we })
    });
  }
  async function je(W) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function nt(W, we, Be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: we, push_url: Be })
    });
  }
  async function bt(W, we) {
    const Be = {};
    return we && (Be["X-Git-Auth-Token"] = we), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/fetch`, {
      method: "POST",
      headers: Be
    });
  }
  async function Tt(W) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/status`);
    } catch {
      return null;
    }
  }
  async function ue(W = "skip", we = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: W,
        remove_extra_nodes: we
      })
    });
  }
  async function B(W, we) {
    const Be = we ? `/v2/comfygit/remotes/${encodeURIComponent(W)}/pull-preview?branch=${encodeURIComponent(we)}` : `/v2/comfygit/remotes/${encodeURIComponent(W)}/pull-preview`;
    return o(Be);
  }
  async function fe(W, we = {}) {
    const Be = { "Content-Type": "application/json" };
    return we.authToken && (Be["X-Git-Auth-Token"] = we.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/pull`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({
        model_strategy: we.modelStrategy || "skip",
        force: we.force || !1,
        resolutions: we.resolutions
      })
    });
  }
  async function We(W, we) {
    const Be = we ? `/v2/comfygit/remotes/${encodeURIComponent(W)}/push-preview?branch=${encodeURIComponent(we)}` : `/v2/comfygit/remotes/${encodeURIComponent(W)}/push-preview`;
    return o(Be);
  }
  async function ut(W, we = {}) {
    const Be = { "Content-Type": "application/json" };
    return we.authToken && (Be["X-Git-Auth-Token"] = we.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/push`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({ force: we.force || !1 })
    });
  }
  async function Ct(W, we) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: we })
    });
  }
  async function lt(W) {
    const we = {
      success: 0,
      failed: []
    };
    for (const Be of W)
      try {
        await H(Be), we.success++;
      } catch (dt) {
        we.failed.push({
          name: Be,
          error: dt instanceof Error ? dt.message : "Unknown error"
        });
      }
    return we;
  }
  async function xt(W) {
    var dt;
    const we = new FormData();
    if (we.append("file", W), !((dt = window.app) != null && dt.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: we
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Be.ok) {
      const Lt = await Be.json().catch(() => ({}));
      throw new Error(Lt.error || `Preview failed: ${Be.status}`);
    }
    return Be.json();
  }
  async function ts(W) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(W)}`
    );
  }
  async function Ss(W, we, Be, dt) {
    var gs;
    const Lt = new FormData();
    if (Lt.append("file", W), Lt.append("name", we), Lt.append("model_strategy", Be), Lt.append("torch_backend", dt), !((gs = window.app) != null && gs.api))
      throw new Error("ComfyUI API not available");
    const jt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
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
  async function ia(W) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: W })
    });
  }
  async function ra(W, we, Be, dt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: W,
        name: we,
        model_strategy: Be,
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
  async function uo() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function fo(W) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function ua() {
    return o("/v2/setup/initialize_status");
  }
  async function Is(W) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function da() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Lo() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function fa(W, we) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: W, save_key: we })
    });
  }
  async function ma() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function va(W) {
    const we = W ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(W)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(we);
  }
  async function pa(W) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function vn() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ga(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function ha(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/stop`, {
      method: "POST"
    });
  }
  async function ya(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/start`, {
      method: "POST"
    });
  }
  async function wa(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/status`);
  }
  async function _a(W) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W })
    });
  }
  async function ka(W = !1) {
    return o(W ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ba() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function $a() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ca(W) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function xa(W) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function Sa(W) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function pn() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ae(W) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/info`);
  }
  async function K(W) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances`);
  }
  async function qe(W, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we)
    });
  }
  async function Qe(W, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(we)}/start`, {
      method: "POST"
    });
  }
  async function at(W, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(we)}/stop`, {
      method: "POST"
    });
  }
  async function vt(W, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(we)}`, {
      method: "DELETE"
    });
  }
  async function Nt(W) {
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
    commit: _,
    getHistory: w,
    getBranchHistory: k,
    exportEnv: b,
    validateExport: y,
    validateDeploy: S,
    exportEnvWithForce: N,
    validateEnvironmentExport: M,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: T,
    getCommitDetail: F,
    checkout: j,
    createBranch: E,
    switchBranch: V,
    deleteBranch: ie,
    // Environment Management
    listEnvironments: ee,
    getEnvironments: Y,
    getEnvironmentDetails: he,
    switchEnvironment: se,
    getSwitchProgress: J,
    createEnvironment: le,
    getCreateProgress: Ue,
    getComfyUIReleases: oe,
    deleteEnvironment: ye,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: me,
    getWorkflowContract: Pe,
    saveWorkflowContract: Ge,
    deleteWorkflowContract: Ee,
    resolveWorkflow: H,
    installWorkflowDeps: Z,
    setModelImportance: q,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: xe,
    getModelDetails: de,
    openFileLocation: re,
    addModelSource: I,
    removeModelSource: z,
    deleteModel: ce,
    downloadModel: Ce,
    scanWorkspaceModels: _e,
    getModelsDirectory: $e,
    setModelsDirectory: Oe,
    getHuggingFaceRepoInfo: ze,
    getModelsSubdirectories: Re,
    searchHuggingFaceRepos: Ie,
    // Settings
    getConfig: Ke,
    updateConfig: Fe,
    // Cloud Auth
    getCloudAuthConfig: a,
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
    getWorkspaceLogs: Q,
    getEnvironmentLogPath: He,
    getWorkspaceLogPath: Ye,
    getOrchestratorLogs: ot,
    getOrchestratorLogPath: Ae,
    openFile: O,
    // Node Management
    getNodes: ne,
    trackNodeAsDev: pe,
    installNode: Je,
    queueNodeInstall: D,
    updateNode: U,
    updateNodeCriticality: te,
    uninstallNode: Le,
    // Git Remotes
    getRemotes: De,
    addRemote: Me,
    removeRemote: je,
    updateRemoteUrl: nt,
    fetchRemote: bt,
    getRemoteSyncStatus: Tt,
    // Push/Pull
    getPullPreview: B,
    pullFromRemote: fe,
    getPushPreview: We,
    pushToRemote: ut,
    validateMerge: Ct,
    // Environment Sync
    syncEnvironmentManually: ue,
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
    updateManager: uo,
    initializeWorkspace: fo,
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
    getWorkerSystemInfo: ae,
    getWorkerInstances: K,
    deployToWorker: qe,
    startWorkerInstance: Qe,
    stopWorkerInstance: at,
    terminateWorkerInstance: vt,
    // Git Authentication
    testGitAuth: Nt
  };
}
async function bn(e, t) {
  var a;
  if (!((a = window.app) != null && a.api))
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
  async function a() {
    await bn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: a
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
}, Uv = /* @__PURE__ */ be({
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
    const o = e, a = t;
    function l() {
      o.closeOnOverlayClick && a("close");
    }
    function r(u) {
      u.key === "Escape" && o.showCloseButton && a("close");
    }
    return ct(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Po(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (n(), R(Rt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        s("div", {
          class: Ve(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", Rv, [
            st(u.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Nv, f(e.title), 1)) : h("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
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
            ])])) : h("", !0)
          ]),
          s("div", Lv, [
            e.loading ? (n(), i("div", Dv, "Loading...")) : e.error ? (n(), i("div", Ov, f(e.error), 1)) : st(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (n(), i("div", Av, [
            st(u.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), Et = /* @__PURE__ */ Se(Uv, [["__scopeId", "data-v-8dab1081"]]), zv = ["type", "disabled"], Vv = {
  key: 0,
  class: "spinner"
}, Fv = /* @__PURE__ */ be({
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
      class: Ve(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Vv)) : h("", !0),
      st(t.$slots, "default", {}, void 0)
    ], 10, zv));
  }
}), Ne = /* @__PURE__ */ Se(Fv, [["__scopeId", "data-v-f3452606"]]), Bv = {
  key: 0,
  class: "base-title-count"
}, Wv = /* @__PURE__ */ be({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (n(), R(yl(`h${e.level}`), {
      class: Ve(["base-title", e.variant])
    }, {
      default: g(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Bv, "(" + f(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ao = /* @__PURE__ */ Se(Wv, [["__scopeId", "data-v-5a01561d"]]), Gv = ["value", "disabled"], jv = {
  key: 0,
  value: "",
  disabled: ""
}, Hv = ["value"], qv = {
  key: 0,
  class: "base-select-error"
}, Kv = /* @__PURE__ */ be({
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
      class: Ve(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ve(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", jv, f(e.placeholder), 1)) : h("", !0),
        (n(!0), i(G, null, ge(e.options, (r) => (n(), i("option", {
          key: t(r),
          value: t(r)
        }, f(o(r)), 9, Hv))), 128))
      ], 42, Gv),
      e.error ? (n(), i("span", qv, f(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Rn = /* @__PURE__ */ Se(Kv, [["__scopeId", "data-v-4996bfe0"]]), Jv = { class: "popover-header" }, Qv = { class: "popover-title" }, Yv = { class: "popover-content" }, Xv = {
  key: 0,
  class: "popover-actions"
}, Zv = /* @__PURE__ */ be({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (n(), R(Rt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Wt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", Jv, [
            s("h4", Qv, f(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Yv, [
            st(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (n(), i("div", Xv, [
            st(t.$slots, "actions", {}, void 0)
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
}, Sp = /* @__PURE__ */ be({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = pt(), d = $(null), m = $(!1), v = $(null), p = $(!1), _ = $({}), w = $(!1), k = $(/* @__PURE__ */ new Set()), b = $(/* @__PURE__ */ new Set()), y = [
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
    function N(se) {
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
    function T(se) {
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
    function F(se) {
      if (!se.loaded_by || se.loaded_by.length === 0) return [];
      const J = se.hash || se.filename;
      return k.value.has(J) ? se.loaded_by : se.loaded_by.slice(0, 3);
    }
    function j(se) {
      return k.value.has(se);
    }
    function E(se) {
      k.value.has(se) ? k.value.delete(se) : k.value.add(se), k.value = new Set(k.value);
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
    function ie(se, J) {
      _.value[se] = J, p.value = !0;
    }
    async function ee(se) {
      try {
        await u(se);
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to open file location";
      }
    }
    async function Y(se) {
      if (se.package_id)
        try {
          const J = se.latest_version || "latest";
          await c({
            id: se.package_id,
            version: J,
            selected_version: J,
            mode: "remote",
            channel: "default"
          }), b.value.add(se.package_id);
        } catch (J) {
          v.value = J instanceof Error ? J.message : "Failed to queue node install";
        }
    }
    async function he() {
      if (!p.value) {
        a("close");
        return;
      }
      m.value = !0, v.value = null;
      try {
        for (const [se, J] of Object.entries(_.value))
          await r(o.workflowName, se, J);
        a("refresh"), a("close");
      } catch (se) {
        v.value = se instanceof Error ? se.message : "Failed to save changes";
      } finally {
        m.value = !1;
      }
    }
    return ct(V), (se, J) => (n(), i(G, null, [
      C(Et, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: m.value,
        error: v.value || void 0,
        onClose: J[4] || (J[4] = (le) => a("close"))
      }, {
        body: g(() => [
          d.value ? (n(), i(G, { key: 0 }, [
            s("section", ep, [
              C(ao, { variant: "section" }, {
                default: g(() => [
                  x("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", tp, " No models used in this workflow ")) : h("", !0),
              (n(!0), i(G, null, ge(d.value.models, (le) => {
                var Ue;
                return n(), i("div", {
                  key: le.hash || le.filename,
                  class: "model-card"
                }, [
                  s("div", sp, [
                    J[6] || (J[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", op, f(le.filename), 1)
                  ]),
                  s("div", np, [
                    s("div", ap, [
                      J[7] || (J[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ve(["value", S(le.status)])
                      }, f(N(le.status)), 3)
                    ]),
                    s("div", lp, [
                      s("span", ip, [
                        J[8] || (J[8] = x(" Importance: ", -1)),
                        C(jr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: J[0] || (J[0] = (oe) => w.value = !0)
                        })
                      ]),
                      C(Rn, {
                        "model-value": _.value[le.filename] || le.importance,
                        options: y,
                        "onUpdate:modelValue": (oe) => ie(le.filename, oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    le.loaded_by && le.loaded_by.length > 0 ? (n(), i("div", rp, [
                      J[9] || (J[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", cp, [
                        (n(!0), i(G, null, ge(F(le), (oe, ye) => (n(), i("div", {
                          key: `${oe.node_id}-${ye}`,
                          class: "node-reference"
                        }, f(oe.node_type) + " (Node #" + f(oe.node_id) + ") ", 1))), 128)),
                        le.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (oe) => E(le.hash || le.filename)
                        }, f(j(le.hash || le.filename) ? "▼ Show less" : `▶ View all (${le.loaded_by.length})`), 9, up)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    le.size_mb ? (n(), i("div", dp, [
                      J[10] || (J[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", fp, f(le.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    le.has_category_mismatch ? (n(), i("div", mp, [
                      J[13] || (J[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", vp, [
                        J[11] || (J[11] = x(" In ", -1)),
                        s("code", null, f(le.actual_category) + "/", 1),
                        J[12] || (J[12] = x(" but loader needs ", -1)),
                        s("code", null, f((Ue = le.expected_categories) == null ? void 0 : Ue[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  le.status !== "available" ? (n(), i("div", pp, [
                    le.status === "downloadable" ? (n(), R(Ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: J[1] || (J[1] = (oe) => a("resolve"))
                    }, {
                      default: g(() => [...J[14] || (J[14] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : le.status === "category_mismatch" && le.file_path ? (n(), R(Ne, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => ee(le.file_path)
                    }, {
                      default: g(() => [...J[15] || (J[15] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : le.status !== "path_mismatch" ? (n(), R(Ne, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: J[2] || (J[2] = (oe) => a("resolve"))
                    }, {
                      default: g(() => [...J[16] || (J[16] = [
                        x(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            s("section", gp, [
              C(ao, { variant: "section" }, {
                default: g(() => [
                  x("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", hp, " No custom nodes used in this workflow ")) : h("", !0),
              (n(!0), i(G, null, ge(d.value.nodes, (le, Ue) => (n(), i("div", {
                key: `${le.name}-${le.status}-${Ue}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Ve(["node-status", M(le.status)])
                }, f(P(le.status)), 3),
                s("div", yp, [
                  s("div", wp, [
                    s("span", _p, f(le.name), 1),
                    s("span", kp, f(T(le.status)), 1),
                    le.version ? (n(), i("span", bp, "v" + f(le.version), 1)) : h("", !0),
                    le.status === "uninstallable" && le.package_id && !b.value.has(le.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (oe) => Y(le)
                    }, " Install ", 8, $p)) : le.status === "uninstallable" && le.package_id && b.value.has(le.package_id) ? (n(), i("span", Cp, " Queued ")) : h("", !0)
                  ]),
                  le.guidance ? (n(), i("div", xp, f(le.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          C(Ne, {
            variant: "secondary",
            onClick: J[3] || (J[3] = (le) => a("close"))
          }, {
            default: g(() => [...J[17] || (J[17] = [
              x(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), R(Ne, {
            key: 0,
            variant: "primary",
            onClick: he
          }, {
            default: g(() => [...J[18] || (J[18] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(cs, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: J[5] || (J[5] = (le) => w.value = !1)
      }, {
        content: g(() => [...J[19] || (J[19] = [
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
}), Ip = /* @__PURE__ */ Se(Sp, [["__scopeId", "data-v-543076d9"]]), it = co({
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
async function ho() {
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
    it.status = "idle", ho();
  }
}
async function Ep(e) {
  return new Promise((t, o) => {
    ks && (ks.close(), ks = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ks = l;
    let r = Date.now(), u = 0, c = Date.now(), d = !1;
    const m = 2e3, v = window.setInterval(() => {
      d || Date.now() - c > m && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(v);
    };
    l.onmessage = (_) => {
      try {
        const w = JSON.parse(_.data);
        switch (w.type) {
          case "progress":
            e.downloaded = w.downloaded || 0, e.size = w.total || e.size, c = Date.now();
            const k = c, b = (k - r) / 1e3, y = e.downloaded - u;
            if (y > 0 && b > 0)
              if (e.speed = y / b, r = k, u = e.downloaded, e.speed > 0 && e.size > 0) {
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
            d = !0, p(), l.close(), ks = null, o(new Error(w.message || "Download failed"));
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
      const a = {
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
      it.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function No() {
  function e(y) {
    for (const S of y) {
      if (it.items.some(
        (P) => P.url === S.url && P.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const M = {
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
      it.items.push(M);
    }
    it.status === "idle" && ho();
  }
  async function t(y) {
    const S = Va(y);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ks && (ks.close(), ks = null), S.status = "failed", S.error = "Cancelled by user", it.status = "idle", ho();
      } else if (S.status === "queued") {
        const N = it.items.findIndex((M) => M.id === y);
        N >= 0 && it.items.splice(N, 1);
      }
    }
  }
  function o(y) {
    const S = Va(y);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, it.status === "idle" && ho());
  }
  function a(y) {
    const S = Va(y);
    !S || S.status !== "paused" || (S.status = "queued", it.status === "idle" && ho());
  }
  function l() {
    const y = it.items.filter((S) => S.status === "paused");
    for (const S of y)
      S.status = "queued";
    it.status === "idle" && ho();
  }
  function r(y) {
    const S = it.items.findIndex((N) => N.id === y);
    S >= 0 && ["completed", "failed", "paused"].includes(it.items[S].status) && it.items.splice(S, 1);
  }
  function u() {
    it.items = it.items.filter((y) => y.status !== "completed");
  }
  function c() {
    it.items = it.items.filter((y) => y.status !== "failed");
  }
  const d = L(
    () => it.items.find((y) => y.status === "downloading")
  ), m = L(
    () => it.items.filter((y) => y.status === "queued")
  ), v = L(
    () => it.items.filter((y) => y.status === "completed")
  ), p = L(
    () => it.items.filter((y) => y.status === "failed")
  ), _ = L(
    () => it.items.filter((y) => y.status === "paused")
  ), w = L(() => it.items.length > 0), k = L(
    () => it.items.filter((y) => y.status === "queued" || y.status === "downloading").length
  ), b = L(
    () => it.items.some((y) => y.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Ln(it),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: p,
    pausedItems: _,
    hasItems: w,
    activeCount: k,
    hasPaused: b,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: u,
    clearFailed: c,
    loadPendingDownloads: Tp
  };
}
function Kr() {
  const e = $(null), t = $(null), o = $([]), a = $([]), l = $(!1), r = $(null);
  async function u(N, M) {
    var T;
    if (!((T = window.app) != null && T.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(N, M);
    if (!P.ok) {
      const F = await P.json().catch(() => ({})), j = F.error || F.message || `Request failed: ${P.status}`;
      throw new Error(j);
    }
    return P.json();
  }
  async function c(N) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Ao() || (M = await u(
        `/v2/comfygit/workflow/${N}/analyze`,
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
  async function d(N, M, P, T) {
    l.value = !0, r.value = null;
    try {
      let F;
      if (!Ao()) {
        const j = Object.fromEntries(M), E = Object.fromEntries(P), V = T ? Array.from(T) : [];
        F = await u(
          `/v2/comfygit/workflow/${N}/apply-resolution`,
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
      return t.value = F, F;
    } catch (F) {
      const j = F instanceof Error ? F.message : "Unknown error occurred";
      throw r.value = j, F;
    } finally {
      l.value = !1;
    }
  }
  async function m(N, M = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Ao() || (P = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: M })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const T = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = T, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(N, M = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Ao() || (P = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: M })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const T = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = T, P;
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
  function _() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function w(N) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Ao(), await k(N);
    } catch (M) {
      const P = M instanceof Error ? M.message : "Failed to install nodes";
      throw p.installError = P, M;
    }
  }
  async function k(N) {
    var P;
    const M = await u(
      `/v2/comfygit/workflow/${N}/install`,
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
      const T = new Map(((P = M.failed) == null ? void 0 : P.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < p.nodesToInstall.length; F++) {
        const j = p.nodesToInstall[F], E = T.get(j);
        p.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !E,
          error: E
        });
      }
    }
    return p.nodesInstalled = M.nodes_installed, p.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (p.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function b(N, M, P) {
    _(), p.phase = "resolving", r.value = null;
    const T = Object.fromEntries(M), F = Object.fromEntries(P);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${N}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: T,
          model_choices: F
        })
      });
      if (!j.ok)
        throw new Error(`Request failed: ${j.status}`);
      if (!j.body)
        throw new Error("No response body");
      const E = j.body.getReader(), V = new TextDecoder();
      let ie = "";
      for (; ; ) {
        const { done: ee, value: Y } = await E.read();
        if (ee) break;
        ie += V.decode(Y, { stream: !0 });
        const he = ie.split(`

`);
        ie = he.pop() || "";
        for (const se of he) {
          if (!se.trim()) continue;
          const J = se.split(`
`);
          let le = "", Ue = "";
          for (const oe of J)
            oe.startsWith("event: ") ? le = oe.slice(7) : oe.startsWith("data: ") && (Ue = oe.slice(6));
          if (Ue)
            try {
              const oe = JSON.parse(Ue);
              y(le, oe);
            } catch (oe) {
              console.warn("Failed to parse SSE event:", oe);
            }
        }
      }
    } catch (j) {
      const E = j instanceof Error ? j.message : "Unknown error occurred";
      throw r.value = E, p.error = E, p.phase = "error", j;
    }
  }
  function y(N, M) {
    switch (N) {
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
  function S(N, M) {
    const { addToQueue: P } = No(), T = M.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: N,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return T.length > 0 && P(T), T.length;
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
    analyzeWorkflow: c,
    applyResolution: d,
    applyResolutionWithProgress: b,
    installNodes: w,
    searchNodes: m,
    searchModels: v,
    resetProgress: _,
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
}, Ap = { class: "stepper-content" }, Up = /* @__PURE__ */ be({
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
      a("step-change", m);
    }
    return (m, v) => (n(), i("div", Mp, [
      s("div", Pp, [
        (n(!0), i(G, null, ge(e.steps, (p, _) => (n(), i("div", {
          key: p.id,
          class: Ve(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: c(p.id)
          }]),
          onClick: (w) => d(p.id)
        }, [
          s("div", {
            class: Ve(["step-indicator", u(p.id)])
          }, [
            l(p.id) ? (n(), i("span", Np, "✓")) : (n(), i("span", Lp, f(_ + 1), 1))
          ], 2),
          s("div", Dp, f(p.label), 1),
          _ < e.steps.length - 1 ? (n(), i("div", Op)) : h("", !0)
        ], 10, Rp))), 128))
      ]),
      s("div", Ap, [
        st(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), zp = /* @__PURE__ */ Se(Up, [["__scopeId", "data-v-2a7b3af8"]]), Vp = /* @__PURE__ */ be({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = L(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = L(() => `confidence-${o.value}`), l = L(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (n(), i("span", {
      class: Ve(["confidence-badge", a.value, e.size])
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
}, Cg = { class: "action-buttons" }, xg = /* @__PURE__ */ be({
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
    const o = e, a = t;
    function l(v, p = 80) {
      return v.length <= p ? v : v.slice(0, p - 3) + "...";
    }
    const r = L(() => !!o.choice);
    L(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), L(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
    });
    const u = L(() => o.installedNodePacks || []), c = L(() => {
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
      a("option-selected", v);
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
    return (v, p) => (n(), i("div", {
      class: Ve(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", Fp, [
        s("span", Bp, [
          p[7] || (p[7] = x("Node type: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ve(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : h("", !0)
      ]),
      s("div", Wp, [
        r.value ? (n(), i("div", Gp, [
          C(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (_) => a("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", jp, [
          u.value.length > 0 ? (n(), i("div", Hp, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", qp, [
              (n(!0), i(G, null, ge(u.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (w) => a("installed-pack-selected", _.package_id)
              }, [
                s("span", Jp, f(_.package_id), 1),
                s("span", Qp, f(m(_.source)), 1)
              ], 8, Kp))), 128))
            ])
          ])) : h("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", Yp, [
            (n(!0), i(G, null, ge(e.options, (_, w) => (n(), i("label", {
              key: _.package_id,
              class: Ve(["option-card", { selected: e.selectedOptionIndex === w }]),
              onClick: (k) => d(w)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: w,
                checked: e.selectedOptionIndex === w,
                onChange: (k) => d(w)
              }, null, 40, Zp),
              s("div", eg, [
                s("div", tg, [
                  s("span", sg, f(_.package_id), 1),
                  C(Gn, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                _.title && _.title !== _.package_id ? (n(), i("div", og, f(_.title), 1)) : h("", !0),
                s("div", ng, [
                  _.is_installed ? (n(), i("span", ag, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, Xp))), 128))
          ]),
          s("div", lg, [
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (_) => a("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (_) => a("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (_) => a("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", ig, [
          u.value.length > 0 ? (n(), i("div", rg, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", cg, [
              (n(!0), i(G, null, ge(u.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (w) => a("installed-pack-selected", _.package_id)
              }, [
                s("span", dg, f(_.package_id), 1),
                s("span", fg, f(m(_.source)), 1)
              ], 8, ug))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (n(), i("div", mg, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(G, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", vg, [
              (n(!0), i(G, null, ge(e.searchResults.slice(0, 5), (_, w) => (n(), i("label", {
                key: _.package_id,
                class: "option-card",
                onClick: (k) => a("search-result-selected", _)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: w
                }, null, 8, gg),
                s("div", hg, [
                  s("div", yg, [
                    s("span", wg, f(_.package_id), 1),
                    C(Gn, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  _.description ? (n(), i("div", _g, f(l(_.description)), 1)) : h("", !0),
                  s("div", kg, [
                    _.is_installed ? (n(), i("span", bg, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, pg))), 128))
            ])
          ], 64)) : (n(), i("div", $g, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", Cg, [
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (_) => a("search"))
            }, {
              default: g(() => {
                var _;
                return [
                  x(f((_ = e.searchResults) != null && _.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (_) => a("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (_) => a("mark-optional"))
            }, {
              default: g(() => [...p[19] || (p[19] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Sg = /* @__PURE__ */ Se(xg, [["__scopeId", "data-v-fb0bbf03"]]), Ig = { class: "item-navigator" }, Eg = { class: "nav-item-info" }, Tg = ["title"], Mg = { class: "nav-controls" }, Pg = { class: "nav-arrows" }, Rg = ["disabled"], Ng = ["disabled"], Lg = { class: "nav-position" }, Dg = /* @__PURE__ */ be({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", Ig, [
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
}, Ug = /* @__PURE__ */ be({
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
      class: Ve(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ve(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = fs((a) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = fs((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Og),
      e.error ? (n(), i("span", Ag, f(e.error), 1)) : h("", !0)
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
}, fh = { class: "node-manual-entry-modal" }, mh = { class: "node-modal-body" }, vh = { class: "node-modal-actions" }, ph = /* @__PURE__ */ be({
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
    const o = e, a = t, { searchNodes: l } = Kr(), r = $(0), u = $(!1), c = $(!1), d = $(""), m = $(""), v = $([]), p = $(!1), _ = $(/* @__PURE__ */ new Map()), w = $(/* @__PURE__ */ new Set()), k = $(!1);
    function b() {
      k.value && ye(), k.value = !1;
    }
    const y = L(() => o.nodes[r.value]), S = L(() => o.nodes.filter((q) => o.nodeChoices.has(q.node_type)).length), N = L(() => y.value ? _.value.get(y.value.node_type) || [] : []), M = L(() => y.value ? w.value.has(y.value.node_type) : !1);
    kt(y, async (q) => {
      var X;
      q && ((X = q.options) != null && X.length || _.value.has(q.node_type) || w.value.has(q.node_type) || o.nodeChoices.has(q.node_type) || await P(q.node_type));
    }, { immediate: !0 });
    async function P(q) {
      w.value.add(q);
      try {
        const X = await l(q, 5);
        _.value.set(q, X);
      } catch {
        _.value.set(q, []);
      } finally {
        w.value.delete(q);
      }
    }
    const T = L(() => o.autoResolvedPackages.filter((q) => !o.skippedPackages.has(q.package_id)).length);
    function F(q) {
      return o.skippedPackages.has(q);
    }
    function j(q) {
      a("package-skip", q);
    }
    const E = L(() => {
      var X;
      if (!y.value) return "not-found";
      const q = o.nodeChoices.get(y.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (X = y.value.options) != null && X.length ? "ambiguous" : "not-found";
    }), V = L(() => {
      var X;
      if (!y.value) return;
      const q = o.nodeChoices.get(y.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return q.package_id ? `→ ${q.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (X = y.value.options) != null && X.length ? `${y.value.options.length} matches` : "Not Found";
    });
    function ie(q) {
      q >= 0 && q < o.nodes.length && (r.value = q);
    }
    function ee() {
      var q;
      for (let X = r.value + 1; X < o.nodes.length; X++) {
        const xe = o.nodes[X];
        if (!((q = o.nodeChoices) != null && q.has(xe.node_type))) {
          ie(X);
          return;
        }
      }
    }
    function Y() {
      y.value && (a("mark-optional", y.value.node_type), Pt(() => ee()));
    }
    function he() {
      y.value && (a("skip", y.value.node_type), Pt(() => ee()));
    }
    function se(q) {
      y.value && (a("option-selected", y.value.node_type, q), Pt(() => ee()));
    }
    function J() {
      y.value && a("clear-choice", y.value.node_type);
    }
    function le() {
      y.value && (d.value = y.value.node_type, v.value = N.value, u.value = !0, Ge(d.value));
    }
    function Ue() {
      m.value = "", c.value = !0;
    }
    function oe(q) {
      y.value && (a("manual-entry", y.value.node_type, q), Pt(() => ee()));
    }
    function ye() {
      u.value = !1, d.value = "", v.value = [];
    }
    function A() {
      c.value = !1, m.value = "";
    }
    let me = null;
    function Pe() {
      me && clearTimeout(me), me = setTimeout(() => {
        Ge(d.value);
      }, 300);
    }
    async function Ge(q) {
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
      y.value && (a("manual-entry", y.value.node_type, q.package_id), ye(), Pt(() => ee()));
    }
    function H(q) {
      y.value && (a("manual-entry", y.value.node_type, q.package_id), Pt(() => ee()));
    }
    function Z() {
      !y.value || !m.value.trim() || (a("manual-entry", y.value.node_type, m.value.trim()), A(), Pt(() => ee()));
    }
    return (q, X) => {
      var xe, de;
      return n(), i("div", zg, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Vg, [
          s("div", Fg, [
            X[6] || (X[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", Bg, f(T.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", Wg, [
            (n(!0), i(G, null, ge(e.autoResolvedPackages, (re) => (n(), i("div", {
              key: re.package_id,
              class: "resolved-package-item"
            }, [
              s("div", Gg, [
                s("code", jg, f(re.package_id), 1),
                s("span", Hg, f(re.node_types_count) + " node type" + f(re.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", qg, [
                F(re.package_id) ? (n(), i("span", Jg, " SKIPPED ")) : (n(), i("span", Kg, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (I) => j(re.package_id)
                }, f(F(re.package_id) ? "Include" : "Skip"), 9, Qg)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", Yg)) : h("", !0),
        e.nodes.length > 0 ? (n(), i(G, { key: 2 }, [
          s("div", Xg, [
            X[7] || (X[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", Zg, f(S.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          y.value ? (n(), R(Jr, {
            key: 0,
            "item-name": y.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: X[0] || (X[0] = (re) => ie(r.value - 1)),
            onNext: X[1] || (X[1] = (re) => ie(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          y.value ? (n(), i("div", eh, [
            C(Sg, {
              "node-type": y.value.node_type,
              "has-multiple-options": !!((xe = y.value.options) != null && xe.length),
              options: y.value.options,
              choice: (de = e.nodeChoices) == null ? void 0 : de.get(y.value.node_type),
              status: E.value,
              "status-label": V.value,
              "search-results": N.value,
              "is-searching": M.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: Y,
              onSkip: he,
              onManualEntry: Ue,
              onSearch: le,
              onOptionSelected: se,
              onClearChoice: J,
              onSearchResultSelected: H,
              onInstalledPackSelected: oe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", th, [...X[8] || (X[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (n(), R(Rt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: X[4] || (X[4] = ft((re) => k.value = !0, ["self"])),
            onMouseup: ft(b, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: X[3] || (X[3] = (re) => k.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                X[9] || (X[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ye
                }, "✕")
              ]),
              s("div", sh, [
                C(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": X[2] || (X[2] = (re) => d.value = re),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                s("div", oh, [
                  v.value.length > 0 ? (n(), i("div", nh, [
                    (n(!0), i(G, null, ge(v.value, (re) => (n(), i("div", {
                      key: re.package_id,
                      class: "node-search-result-item",
                      onClick: (I) => Ee(re)
                    }, [
                      s("div", lh, [
                        s("code", ih, f(re.package_id), 1),
                        re.match_confidence ? (n(), R(Gn, {
                          key: 0,
                          confidence: re.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      re.description ? (n(), i("div", rh, f(re.description), 1)) : h("", !0)
                    ], 8, ah))), 128))
                  ])) : p.value ? (n(), i("div", ch, "Searching...")) : d.value ? (n(), i("div", uh, 'No packages found matching "' + f(d.value) + '"', 1)) : (n(), i("div", dh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (n(), R(Rt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ft(A, ["self"])
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
                C(wt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": X[5] || (X[5] = (re) => m.value = re),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", vh, [
                  C(Ne, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: g(() => [...X[11] || (X[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Ne, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Z
                  }, {
                    default: g(() => [...X[12] || (X[12] = [
                      x(" Add Package ", -1)
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
}, Lh = { class: "action-buttons" }, Dh = /* @__PURE__ */ be({
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
    const o = e, a = t, l = L(() => !!o.choice);
    L(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), L(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const r = L(() => {
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
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (n(), i("div", {
      class: Ve(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", hh, [
        s("span", yh, [
          m[7] || (m[7] = x("Used by: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ve(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : h("", !0)
      ]),
      s("div", wh, [
        l.value ? (n(), i("div", _h, [
          C(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => a("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", kh, [
          m[12] || (m[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", bh, [
            (n(!0), i(G, null, ge(e.options, (v, p) => (n(), i("label", {
              key: v.model.hash,
              class: Ve(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (_) => u(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (_) => u(p)
              }, null, 40, Ch),
              s("div", xh, [
                s("div", Sh, [
                  s("span", Ih, f(v.model.filename), 1),
                  C(Gn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", Eh, [
                  s("span", Th, f(c(v.model.size)), 1),
                  s("span", Mh, f(v.model.category), 1)
                ]),
                s("div", Ph, f(v.model.relative_path), 1)
              ])
            ], 10, $h))), 128))
          ]),
          s("div", Rh, [
            C(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => a("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => a("download-url"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...m[11] || (m[11] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Nh, [
          m[16] || (m[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Lh, [
            C(Ne, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => a("search"))
            }, {
              default: g(() => [...m[13] || (m[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => a("download-url"))
            }, {
              default: g(() => [...m[14] || (m[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...m[15] || (m[15] = [
                x(" Mark Optional ", -1)
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
}, oy = { class: "model-download-url-modal" }, ny = { class: "model-modal-body" }, ay = { class: "model-input-group" }, ly = { class: "model-input-group" }, iy = { class: "model-modal-actions" }, ry = /* @__PURE__ */ be({
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
      var ye;
      return oe && ((ye = o[oe]) == null ? void 0 : ye[0]) || null;
    }
    const l = e, r = t, u = $(0), c = $(!1), d = $(!1), m = $(""), v = $(""), p = $(""), _ = $([]), w = $(!1), k = L(() => l.models[u.value]), b = L(() => l.models.some((oe) => oe.is_download_intent)), y = L(() => l.models.filter(
      (oe) => l.modelChoices.has(oe.filename) || oe.is_download_intent
    ).length), S = L(() => {
      var ye;
      if (!k.value) return "";
      const oe = a((ye = k.value.reference) == null ? void 0 : ye.node_type);
      return oe ? `${oe}/${k.value.filename}` : "";
    }), N = L(() => {
      var ye;
      if (!k.value) return "not-found";
      const oe = l.modelChoices.get(k.value.filename);
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
      return k.value.is_download_intent ? "download" : (ye = k.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), M = L(() => {
      var ye, A;
      if (!k.value) return;
      const oe = l.modelChoices.get(k.value.filename);
      if (oe)
        switch (oe.action) {
          case "select":
            return (ye = oe.selected_model) != null && ye.filename ? `→ ${oe.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (A = k.value.options) != null && A.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function P(oe) {
      oe >= 0 && oe < l.models.length && (u.value = oe);
    }
    function T() {
      var oe;
      for (let ye = u.value + 1; ye < l.models.length; ye++) {
        const A = l.models[ye];
        if (!A.is_download_intent && !((oe = l.modelChoices) != null && oe.has(A.filename))) {
          P(ye);
          return;
        }
      }
    }
    function F() {
      k.value && (r("mark-optional", k.value.filename), Pt(() => T()));
    }
    function j() {
      k.value && (r("skip", k.value.filename), Pt(() => T()));
    }
    function E(oe) {
      k.value && (r("option-selected", k.value.filename, oe), Pt(() => T()));
    }
    function V() {
      k.value && r("clear-choice", k.value.filename);
    }
    function ie() {
      k.value && (m.value = k.value.filename, c.value = !0);
    }
    function ee() {
      k.value && (v.value = k.value.download_source || "", p.value = k.value.target_path || S.value, d.value = !0);
    }
    function Y() {
      c.value = !1, m.value = "", _.value = [];
    }
    function he() {
      d.value = !1, v.value = "", p.value = "";
    }
    function se() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function J(oe) {
      k.value && (Y(), Pt(() => T()));
    }
    function le() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), p.value.trim() || void 0), he(), Pt(() => T()));
    }
    function Ue(oe) {
      if (!oe) return "Unknown";
      const ye = oe / (1024 * 1024 * 1024);
      return ye >= 1 ? `${ye.toFixed(2)} GB` : `${(oe / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (oe, ye) => {
      var A, me, Pe;
      return n(), i("div", Ah, [
        s("div", Uh, [
          s("div", zh, [
            s("h3", Vh, f(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Fh, f(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Bh, f(y.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        k.value ? (n(), R(Jr, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: ye[0] || (ye[0] = (Ge) => P(u.value - 1)),
          onNext: ye[1] || (ye[1] = (Ge) => P(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        k.value ? (n(), i("div", Wh, [
          C(Oh, {
            filename: k.value.filename,
            "node-type": ((A = k.value.reference) == null ? void 0 : A.node_type) || "Unknown",
            "has-multiple-options": !!((me = k.value.options) != null && me.length),
            options: k.value.options,
            choice: (Pe = e.modelChoices) == null ? void 0 : Pe.get(k.value.filename),
            status: N.value,
            "status-label": M.value,
            onMarkOptional: F,
            onSkip: j,
            onDownloadUrl: ee,
            onSearch: ie,
            onOptionSelected: E,
            onClearChoice: V
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Gh, [...ye[5] || (ye[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (n(), R(Rt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ft(Y, ["self"])
          }, [
            s("div", jh, [
              s("div", { class: "model-modal-header" }, [
                ye[6] || (ye[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", Hh, [
                C(wt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (Ge) => m.value = Ge),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (n(), i("div", qh, [
                  (n(!0), i(G, null, ge(_.value, (Ge) => (n(), i("div", {
                    key: Ge.hash,
                    class: "model-search-result-item",
                    onClick: (Ee) => J()
                  }, [
                    s("div", Jh, [
                      s("code", Qh, f(Ge.filename), 1)
                    ]),
                    s("div", Yh, [
                      s("span", Xh, f(Ge.category), 1),
                      s("span", Zh, f(Ue(Ge.size)), 1)
                    ]),
                    Ge.relative_path ? (n(), i("div", ey, f(Ge.relative_path), 1)) : h("", !0)
                  ], 8, Kh))), 128))
                ])) : m.value && !w.value ? (n(), i("div", ty, ' No models found matching "' + f(m.value) + '" ', 1)) : h("", !0),
                w.value ? (n(), i("div", sy, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (n(), R(Rt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ft(he, ["self"])
          }, [
            s("div", oy, [
              s("div", { class: "model-modal-header" }, [
                ye[7] || (ye[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              s("div", ny, [
                s("div", ay, [
                  ye[8] || (ye[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(wt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ye[3] || (ye[3] = (Ge) => v.value = Ge),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", ly, [
                  ye[9] || (ye[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(wt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ye[4] || (ye[4] = (Ge) => p.value = Ge),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", iy, [
                  C(Ne, {
                    variant: "secondary",
                    onClick: he
                  }, {
                    default: g(() => [...ye[10] || (ye[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Ne, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: le
                  }, {
                    default: g(() => [...ye[11] || (ye[11] = [
                      x(" Queue Download ", -1)
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
}, Uy = { class: "error-message" }, zy = /* @__PURE__ */ be({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = L(() => {
      var m, v;
      const c = ((m = t.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || t.progress.nodesToInstall.length;
      if (!c) return 0;
      const d = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / c * 100);
    }), a = L(() => {
      var c;
      return ((c = t.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((d) => !d.success)) || [];
    }), l = L(() => a.value.length > 0);
    function r(c, d) {
      var v, p;
      const m = (v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((_) => _.node_id === c);
      return m ? m.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function u(c) {
      var d, m;
      return (m = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === c)) == null ? void 0 : m.error;
    }
    return (c, d) => {
      var m, v, p, _;
      return n(), i("div", uy, [
        e.progress.phase === "resolving" ? (n(), i("div", dy, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", fy, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", my, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", vy, [
            s("div", py, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", gy, f(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + f(((_ = e.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", hy, [
            (n(!0), i(G, null, ge(e.progress.nodesToInstall, (w, k) => (n(), i("div", {
              key: w,
              class: Ve(["install-item", r(w, k)])
            }, [
              s("span", yy, [
                r(w, k) === "pending" ? (n(), i("span", wy, "○")) : r(w, k) === "installing" ? (n(), i("span", _y, "◌")) : r(w, k) === "complete" ? (n(), i("span", ky, "✓")) : r(w, k) === "failed" ? (n(), i("span", by, "✗")) : h("", !0)
              ]),
              s("code", null, f(w), 1),
              u(w) ? (n(), i("span", $y, f(u(w)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", Cy, [
          s("div", xy, [
            s("span", {
              class: Ve(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            s("h3", Sy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", Iy, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Ey, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Ty, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", My, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", Py, f(a.value.length) + " package" + f(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", Ry, [
              (n(!0), i(G, null, ge(a.value, (w) => (n(), i("div", {
                key: w.node_id,
                class: "failed-item"
              }, [
                s("code", Ny, f(w.node_id), 1),
                s("span", Ly, f(w.error), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (w) => c.$emit("retry-failed"))
            }, " Retry Failed (" + f(a.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (n(), i("div", Dy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Oy, [
              d[7] || (d[7] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (w) => c.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : h("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", Ay, [
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
}, ow = /* @__PURE__ */ be({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: d, resetProgress: m } = Kr(), { loadPendingDownloads: v } = No(), { openFileLocation: p, queueNodeInstall: _, getNodes: w } = pt(), k = $(null), b = $([]), y = $(!1), S = $(!1), N = $(null), M = $("analysis"), P = $([]), T = $(/* @__PURE__ */ new Map()), F = $(/* @__PURE__ */ new Map()), j = $(/* @__PURE__ */ new Set()), E = L(() => {
      const ue = [
        { id: "analysis", label: "Analysis" }
      ];
      return (se.value || Ue.value || oe.value) && ue.push({ id: "nodes", label: "Nodes" }), J.value && ue.push({ id: "models", label: "Models" }), ue.push({ id: "review", label: "Review" }), M.value === "applying" && ue.push({ id: "applying", label: "Applying" }), ue;
    }), V = L(() => k.value ? k.value.stats.needs_user_input : !1), ie = L(() => k.value ? k.value.nodes.version_gated || [] : []), ee = L(() => k.value ? k.value.nodes.uninstallable || [] : []), Y = L(() => ee.value.filter((ue) => {
      var B;
      return !!((B = ue.package) != null && B.package_id);
    })), he = L(() => ie.value.length > 0), se = L(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), J = L(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), le = L(() => k.value ? k.value.stats.download_intents > 0 : !1), Ue = L(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), oe = L(() => Y.value.length > 0), ye = L(() => k.value ? k.value.nodes.resolved.length : 0), A = L(() => k.value ? k.value.models.resolved.filter((ue) => ue.has_category_mismatch) : []), me = L(() => A.value.length > 0), Pe = L(() => se.value || Ue.value || oe.value ? "nodes" : J.value ? "models" : "review"), Ge = L(() => {
      if (!k.value) return [];
      const ue = k.value.nodes.resolved.filter((fe) => !fe.is_installed), B = /* @__PURE__ */ new Set();
      return ue.filter((fe) => B.has(fe.package.package_id) ? !1 : (B.add(fe.package.package_id), !0));
    }), Ee = L(() => {
      if (!k.value) return [];
      const ue = k.value.nodes.resolved.filter((fe) => !fe.is_installed), B = /* @__PURE__ */ new Map();
      for (const fe of ue) {
        const We = B.get(fe.package.package_id);
        We ? We.node_types_count++ : B.set(fe.package.package_id, {
          package_id: fe.package.package_id,
          title: fe.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), H = L(() => Ge.value.filter((ue) => !j.value.has(ue.package.package_id))), Z = L(() => k.value ? k.value.models.resolved.filter(
      (ue) => ue.match_type === "download_intent" || ue.match_type === "property_download_intent"
    ).map((ue) => ({
      filename: ue.reference.widget_value,
      reference: ue.reference,
      is_download_intent: !0,
      resolved_model: ue.model,
      download_source: ue.download_source,
      target_path: ue.target_path
    })) : []), q = L(() => {
      if (!k.value) return [];
      const ue = k.value.nodes.unresolved.map((fe) => ({
        node_type: fe.reference.node_type,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), B = k.value.nodes.ambiguous.map((fe) => ({
        node_type: fe.reference.node_type,
        has_multiple_options: !0,
        options: fe.options.map((We) => ({
          package_id: We.package.package_id,
          title: We.package.title,
          match_confidence: We.match_confidence,
          match_type: We.match_type,
          is_installed: We.is_installed
        }))
      }));
      return [...ue, ...B];
    }), X = L(() => {
      if (!k.value) return [];
      const ue = k.value.models.unresolved.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), B = k.value.models.ambiguous.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        has_multiple_options: !0,
        options: fe.options.map((We) => ({
          model: We.model,
          match_confidence: We.match_confidence,
          match_type: We.match_type,
          has_download_source: We.has_download_source
        }))
      }));
      return [...ue, ...B];
    }), xe = L(() => {
      const ue = X.value, B = Z.value.map((fe) => ({
        filename: fe.filename,
        reference: fe.reference,
        is_download_intent: !0,
        resolved_model: fe.resolved_model,
        download_source: fe.download_source,
        target_path: fe.target_path,
        options: void 0
      }));
      return [...ue, ...B];
    }), de = L(() => Z.value.filter((ue) => {
      const B = F.value.get(ue.filename);
      return B ? B.action === "download" : !0;
    }).map((ue) => ({
      filename: ue.filename,
      url: ue.download_source,
      target_path: ue.target_path
    })));
    function re(ue, B = 50) {
      return ue.length <= B ? ue : ue.slice(0, B - 3) + "...";
    }
    const I = L(() => {
      let ue = H.value.length;
      for (const B of T.value.values())
        B.action === "install" && ue++;
      for (const B of F.value.values())
        B.action === "select" && ue++;
      return ue;
    }), z = L(() => {
      let ue = 0;
      for (const B of F.value.values())
        B.action === "download" && ue++;
      for (const B of Z.value)
        F.value.get(B.filename) || ue++;
      return ue;
    }), ce = L(() => {
      let ue = 0;
      for (const B of T.value.values())
        B.action === "optional" && ue++;
      for (const B of F.value.values())
        B.action === "optional" && ue++;
      return ue;
    }), Ce = L(() => {
      let ue = j.value.size;
      for (const B of T.value.values())
        B.action === "skip" && ue++;
      for (const B of F.value.values())
        B.action === "skip" && ue++;
      for (const B of q.value)
        T.value.has(B.node_type) || ue++;
      for (const B of X.value)
        F.value.has(B.filename) || ue++;
      return ue;
    }), _e = L(() => {
      const ue = {};
      if (ue.analysis = { resolved: 1, total: 1 }, se.value || oe.value) {
        const B = q.value.length, fe = Y.value.length, We = q.value.filter(
          (xt) => T.value.has(xt.node_type)
        ).length, ut = Y.value.filter(
          (xt) => T.value.has(xt.reference.node_type)
        ).length, Ct = B + fe, lt = We + ut;
        ue.nodes = { resolved: lt, total: Ct };
      }
      if (J.value) {
        const B = xe.value.length, fe = xe.value.filter(
          (We) => F.value.has(We.filename) || We.is_download_intent
        ).length;
        ue.models = { resolved: fe, total: B };
      }
      if (ue.review = { resolved: 1, total: 1 }, M.value === "applying") {
        const B = d.totalFiles || 1, fe = d.completedFiles.length;
        ue.applying = { resolved: fe, total: B };
      }
      return ue;
    });
    function $e(ue) {
      M.value = ue;
    }
    function Oe() {
      const ue = E.value.findIndex((B) => B.id === M.value);
      ue > 0 && (M.value = E.value[ue - 1].id);
    }
    function ze() {
      const ue = E.value.findIndex((B) => B.id === M.value);
      ue < E.value.length - 1 && (M.value = E.value[ue + 1].id);
    }
    function Re() {
      for (const ue of Y.value) {
        const B = ue.reference.node_type;
        T.value.has(B) || ne(ue, "registry");
      }
    }
    function Ie(ue) {
      switch (ue) {
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
    function Ke(ue) {
      return ue.filter((B) => B.installed && B.tracked).filter((B) => B.name !== "comfygit-manager").map((B) => ({
        package_id: B.registry_id || B.name,
        source: B.source
      })).filter((B, fe, We) => We.findIndex((ut) => ut.package_id === B.package_id) === fe).sort((B, fe) => {
        const We = Ie(B.source) - Ie(fe.source);
        return We !== 0 ? We : B.package_id.localeCompare(fe.package_id);
      });
    }
    async function Fe() {
      y.value = !0, N.value = null;
      try {
        const [ue, B] = await Promise.all([
          l(o.workflowName),
          w()
        ]);
        k.value = ue, b.value = Ke(B.nodes), Re();
      } catch (ue) {
        N.value = ue instanceof Error ? ue.message : "Failed to analyze workflow";
      } finally {
        y.value = !1;
      }
    }
    function ve() {
      P.value.includes("analysis") || P.value.push("analysis"), se.value || Ue.value || oe.value ? M.value = "nodes" : J.value ? M.value = "models" : M.value = "review";
    }
    function Q(ue) {
      T.value.set(ue, { action: "optional" });
    }
    function He(ue) {
      T.value.set(ue, { action: "skip" });
    }
    function ke(ue, B) {
      var We;
      const fe = q.value.find((ut) => ut.node_type === ue);
      (We = fe == null ? void 0 : fe.options) != null && We[B] && T.value.set(ue, {
        action: "install",
        package_id: fe.options[B].package_id
      });
    }
    function Ye(ue, B) {
      T.value.set(ue, {
        action: "install",
        package_id: B
      });
    }
    function ot(ue) {
      T.value.delete(ue);
    }
    function Ae(ue) {
      return T.value.get(ue);
    }
    function O(ue) {
      const B = Ae(ue);
      return B ? B.action === "optional" ? "Marked optional" : B.action === "skip" ? "Skipped" : B.action === "install" ? B.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function ne(ue, B) {
      var ut;
      const fe = (ut = ue.package) == null ? void 0 : ut.package_id;
      if (!fe) return;
      const We = {
        action: "install",
        package_id: fe,
        version: ue.package.latest_version || null,
        install_source: B
      };
      B === "git" && ue.package.repository && (We.repository = ue.package.repository), T.value.set(ue.reference.node_type, We);
    }
    function pe(ue) {
      T.value.set(ue, { action: "optional" });
    }
    function Je(ue) {
      T.value.set(ue, { action: "skip" });
    }
    function D(ue) {
      j.value.has(ue) ? j.value.delete(ue) : j.value.add(ue);
    }
    function U(ue) {
      F.value.set(ue, { action: "optional" });
    }
    function te(ue) {
      F.value.set(ue, { action: "skip" });
    }
    function Le(ue, B) {
      var We;
      const fe = X.value.find((ut) => ut.filename === ue);
      (We = fe == null ? void 0 : fe.options) != null && We[B] && F.value.set(ue, {
        action: "select",
        selected_model: fe.options[B].model
      });
    }
    function De(ue, B, fe) {
      F.value.set(ue, {
        action: "download",
        url: B,
        target_path: fe
      });
    }
    function Me(ue) {
      F.value.delete(ue);
    }
    async function je(ue) {
      try {
        await p(ue);
      } catch (B) {
        N.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function nt() {
      var ue;
      S.value = !0, N.value = null, m(), d.phase = "resolving", M.value = "applying";
      try {
        const B = await r(o.workflowName, T.value, F.value, j.value);
        B.models_to_download && B.models_to_download.length > 0 && c(o.workflowName, B.models_to_download);
        const fe = Y.value.map((lt) => {
          const xt = Ae(lt.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const ts = xt.repository || lt.package.repository, Ss = xt.package_id || lt.package.package_id;
          return !ts || !Ss ? null : {
            id: Ss,
            repository: ts,
            selectedVersion: xt.version || lt.package.latest_version || "latest"
          };
        }).filter((lt) => !!lt), We = new Set(fe.map((lt) => lt.id)), ut = [
          ...B.nodes_to_install || [],
          ...H.value.map((lt) => lt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ut)].filter((lt) => !We.has(lt)), d.nodesToInstall.length > 0 && await u(o.workflowName);
        for (const lt of fe)
          await _({
            id: lt.id,
            version: lt.selectedVersion,
            selected_version: lt.selectedVersion,
            repository: lt.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await v();
        const Ct = d.installError || ((ue = d.nodeInstallProgress) == null ? void 0 : ue.completedNodes.some((lt) => !lt.success));
        !d.needsRestart && !Ct && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (B) {
        N.value = B instanceof Error ? B.message : "Failed to apply resolution", d.error = N.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function bt() {
      a("refresh"), a("restart"), a("close");
    }
    async function Tt() {
      var B;
      const ue = ((B = d.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((fe) => !fe.success).map((fe) => fe.node_id)) || [];
      if (ue.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ue.length
        }, d.nodesToInstall = ue, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(o.workflowName), d.phase = "complete";
        } catch (fe) {
          d.error = fe instanceof Error ? fe.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return ct(Fe), (ue, B) => (n(), R(Et, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: y.value,
      error: N.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (fe) => a("close"))
    }, {
      body: g(() => [
        y.value && !k.value ? (n(), i("div", Fy, [...B[2] || (B[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (n(), i("div", By, [
          C(zp, {
            steps: E.value,
            "current-step": M.value,
            "completed-steps": P.value,
            "step-stats": _e.value,
            onStepChange: $e
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          M.value === "analysis" ? (n(), i("div", Wy, [
            s("div", Gy, [
              s("div", jy, [
                B[3] || (B[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", Hy, " Found " + f(k.value.stats.total_nodes) + " nodes and " + f(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", qy, [
                s("div", Ky, [
                  B[16] || (B[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", Jy, [
                    ye.value > 0 ? (n(), i("div", Qy, [
                      B[4] || (B[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", Yy, f(ye.value), 1),
                      B[5] || (B[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (n(), i("div", Xy, [
                      B[6] || (B[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", Zy, f(k.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (n(), i("div", e1, [
                      B[8] || (B[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", t1, f(k.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    ie.value.length > 0 ? (n(), i("div", s1, [
                      B[10] || (B[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", o1, f(ie.value.length), 1),
                      B[11] || (B[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    ee.value.length > 0 ? (n(), i("div", n1, [
                      B[12] || (B[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", a1, f(ee.value.length), 1),
                      B[13] || (B[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    k.value.nodes.unresolved.length > 0 ? (n(), i("div", l1, [
                      B[14] || (B[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", i1, f(k.value.nodes.unresolved.length), 1),
                      B[15] || (B[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                s("div", r1, [
                  B[27] || (B[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", c1, [
                    s("div", u1, [
                      B[17] || (B[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", d1, f(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      B[18] || (B[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (n(), i("div", f1, [
                      B[19] || (B[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", m1, f(k.value.stats.download_intents), 1),
                      B[20] || (B[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    me.value ? (n(), i("div", v1, [
                      B[21] || (B[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", p1, f(A.value.length), 1),
                      B[22] || (B[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    k.value.models.ambiguous.length > 0 ? (n(), i("div", g1, [
                      B[23] || (B[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", h1, f(k.value.models.ambiguous.length), 1),
                      B[24] || (B[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    k.value.models.unresolved.length > 0 ? (n(), i("div", y1, [
                      B[25] || (B[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", w1, f(k.value.models.unresolved.length), 1),
                      B[26] || (B[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              V.value ? (n(), i("div", _1, [
                B[28] || (B[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", k1, f(q.value.length + X.value.length) + " items need your input", 1)
              ])) : he.value ? (n(), i("div", b1, [
                B[29] || (B[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", $1, f(ie.value.length) + " node type" + f(ie.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : ee.value.length > 0 ? (n(), i("div", C1, [
                B[30] || (B[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", x1, f(ee.value.length) + " community-mapped node type" + f(ee.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Ue.value ? (n(), i("div", S1, [
                B[31] || (B[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", I1, f(k.value.stats.packages_needing_installation) + " package" + f(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(k.value.stats.nodes_needing_installation) + " node type" + f(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(le.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : le.value ? (n(), i("div", E1, [
                B[32] || (B[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", T1, f(k.value.stats.download_intents) + " model" + f(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : me.value ? (n(), i("div", M1, [
                B[33] || (B[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", P1, f(A.value.length) + " model" + f(A.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", R1, [...B[34] || (B[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              me.value ? (n(), i("div", N1, [
                B[37] || (B[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", L1, [
                  (n(!0), i(G, null, ge(A.value, (fe) => {
                    var We, ut;
                    return n(), i("div", {
                      key: fe.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", D1, f(fe.actual_category) + "/" + f((We = fe.model) == null ? void 0 : We.filename), 1),
                      B[36] || (B[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", O1, f((ut = fe.expected_categories) == null ? void 0 : ut[0]) + "/", 1),
                      fe.file_path ? (n(), R(Ne, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ct) => je(fe.file_path)
                      }, {
                        default: g(() => [...B[35] || (B[35] = [
                          x(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              he.value ? (n(), i("div", A1, [
                B[38] || (B[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", U1, [
                  (n(!0), i(G, null, ge(ie.value, (fe) => {
                    var We;
                    return n(), i("div", {
                      key: `vg-${fe.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", z1, f(fe.reference.node_type), 1),
                      s("span", V1, f(fe.guidance || ((We = k.value.node_guidance) == null ? void 0 : We[fe.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          M.value === "nodes" ? (n(), i("div", F1, [
            C(gh, {
              nodes: q.value,
              "node-choices": T.value,
              "auto-resolved-packages": Ee.value,
              "skipped-packages": j.value,
              "installed-node-packs": b.value,
              onMarkOptional: Q,
              onSkip: He,
              onOptionSelected: ke,
              onManualEntry: Ye,
              onClearChoice: ot,
              onPackageSkip: D
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            Y.value.length > 0 ? (n(), i("div", B1, [
              s("div", W1, [
                s("h4", G1, "Community-Mapped Packages (" + f(Y.value.length) + ")", 1),
                B[39] || (B[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", j1, [
                (n(!0), i(G, null, ge(Y.value, (fe) => (n(), i("div", {
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
                      B[40] || (B[40] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      fe.guidance ? (n(), i("span", X1, f(fe.guidance), 1)) : h("", !0)
                    ]),
                    s("div", Z1, f(O(fe.reference.node_type)), 1)
                  ]),
                  s("div", e0, [
                    C(Ne, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !fe.package.package_id,
                      onClick: (We) => ne(fe, "registry")
                    }, {
                      default: g(() => [...B[41] || (B[41] = [
                        x(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    fe.package.repository ? (n(), R(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !fe.package.package_id,
                      onClick: (We) => ne(fe, "git")
                    }, {
                      default: g(() => [...B[42] || (B[42] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    C(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (We) => pe(fe.reference.node_type)
                    }, {
                      default: g(() => [...B[43] || (B[43] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (We) => Je(fe.reference.node_type)
                    }, {
                      default: g(() => [...B[44] || (B[44] = [
                        x(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          M.value === "models" ? (n(), R(cy, {
            key: 2,
            models: xe.value,
            "model-choices": F.value,
            onMarkOptional: U,
            onSkip: te,
            onOptionSelected: Le,
            onDownloadUrl: De,
            onClearChoice: Me
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          M.value === "review" ? (n(), i("div", t0, [
            s("div", s0, [
              B[50] || (B[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", o0, [
                s("div", n0, [
                  s("span", a0, f(I.value), 1),
                  B[45] || (B[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", l0, [
                  s("span", i0, f(z.value), 1),
                  B[46] || (B[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", r0, [
                  s("span", c0, f(ce.value), 1),
                  B[47] || (B[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", u0, [
                  s("span", d0, f(Ce.value), 1),
                  B[48] || (B[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Ee.value.length > 0 ? (n(), i("div", f0, [
                s("h4", m0, "Node Packages (" + f(Ee.value.length) + ")", 1),
                s("div", v0, [
                  (n(!0), i(G, null, ge(Ee.value, (fe) => (n(), i("div", {
                    key: fe.package_id,
                    class: "review-item"
                  }, [
                    s("code", p0, f(fe.package_id), 1),
                    s("div", g0, [
                      j.value.has(fe.package_id) ? (n(), i("span", y0, "Skipped")) : (n(), i("span", h0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              Y.value.length > 0 ? (n(), i("div", w0, [
                s("h4", _0, "Community-Mapped Packages (" + f(Y.value.length) + ")", 1),
                s("div", k0, [
                  (n(!0), i(G, null, ge(Y.value, (fe) => {
                    var We, ut, Ct;
                    return n(), i("div", {
                      key: `review-community-${fe.reference.node_type}-${fe.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", b0, f(fe.reference.node_type), 1),
                      s("div", $0, [
                        ((We = Ae(fe.reference.node_type)) == null ? void 0 : We.action) === "install" ? (n(), i("span", C0, f(((ut = Ae(fe.reference.node_type)) == null ? void 0 : ut.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Ct = Ae(fe.reference.node_type)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", x0, " Optional ")) : (n(), i("span", S0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              q.value.length > 0 ? (n(), i("div", I0, [
                s("h4", E0, "Node Choices (" + f(q.value.length) + ")", 1),
                s("div", T0, [
                  (n(!0), i(G, null, ge(q.value, (fe) => {
                    var We, ut, Ct, lt;
                    return n(), i("div", {
                      key: fe.node_type,
                      class: "review-item"
                    }, [
                      s("code", M0, f(fe.node_type), 1),
                      s("div", P0, [
                        T.value.has(fe.node_type) ? (n(), i(G, { key: 0 }, [
                          ((We = T.value.get(fe.node_type)) == null ? void 0 : We.action) === "install" ? (n(), i("span", R0, f((ut = T.value.get(fe.node_type)) == null ? void 0 : ut.package_id), 1)) : ((Ct = T.value.get(fe.node_type)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", N0, " Optional ")) : ((lt = T.value.get(fe.node_type)) == null ? void 0 : lt.action) === "skip" ? (n(), i("span", L0, " Skip ")) : h("", !0)
                        ], 64)) : (n(), i("span", D0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              de.value.length > 0 ? (n(), i("div", O0, [
                s("h4", A0, "Models to Download (" + f(de.value.length) + ")", 1),
                s("div", U0, [
                  (n(!0), i(G, null, ge(de.value, (fe) => (n(), i("div", {
                    key: fe.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", z0, [
                      s("code", V0, f(fe.filename), 1),
                      s("div", F0, [
                        s("span", B0, "→ " + f(fe.target_path), 1),
                        fe.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: fe.url
                        }, f(re(fe.url)), 9, W0)) : h("", !0)
                      ])
                    ]),
                    B[49] || (B[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              xe.value.length > 0 ? (n(), i("div", G0, [
                s("h4", j0, "Models (" + f(xe.value.length) + ")", 1),
                s("div", H0, [
                  (n(!0), i(G, null, ge(xe.value, (fe) => {
                    var We, ut, Ct, lt, xt, ts, Ss;
                    return n(), i("div", {
                      key: fe.filename,
                      class: "review-item"
                    }, [
                      s("code", q0, f(fe.filename), 1),
                      s("div", K0, [
                        F.value.has(fe.filename) ? (n(), i(G, { key: 0 }, [
                          ((We = F.value.get(fe.filename)) == null ? void 0 : We.action) === "select" ? (n(), i("span", J0, f((Ct = (ut = F.value.get(fe.filename)) == null ? void 0 : ut.selected_model) == null ? void 0 : Ct.filename), 1)) : ((lt = F.value.get(fe.filename)) == null ? void 0 : lt.action) === "download" ? (n(), i("span", Q0, " Download ")) : ((xt = F.value.get(fe.filename)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", Y0, " Optional ")) : ((ts = F.value.get(fe.filename)) == null ? void 0 : ts.action) === "skip" ? (n(), i("span", X0, " Skip ")) : ((Ss = F.value.get(fe.filename)) == null ? void 0 : Ss.action) === "cancel_download" ? (n(), i("span", Z0, " Cancel Download ")) : h("", !0)
                        ], 64)) : fe.is_download_intent ? (n(), i("span", ew, " Pending Download ")) : (n(), i("span", tw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Ge.value.length === 0 && Y.value.length === 0 && q.value.length === 0 && xe.value.length === 0 ? (n(), i("div", sw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          M.value === "applying" ? (n(), R(Vy, {
            key: 4,
            progress: tt(d),
            onRestart: bt,
            onRetryFailed: Tt
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        M.value !== "analysis" && M.value !== "applying" ? (n(), R(Ne, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Oe
        }, {
          default: g(() => [...B[51] || (B[51] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        B[54] || (B[54] = s("div", { class: "footer-spacer" }, null, -1)),
        M.value !== "applying" || tt(d).phase === "complete" || tt(d).phase === "error" ? (n(), R(Ne, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (fe) => a("close"))
        }, {
          default: g(() => [
            x(f(tt(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        M.value === "analysis" ? (n(), R(Ne, {
          key: 2,
          variant: "primary",
          disabled: y.value,
          onClick: ve
        }, {
          default: g(() => [
            x(f(Pe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        M.value === "nodes" ? (n(), R(Ne, {
          key: 3,
          variant: "primary",
          onClick: ze
        }, {
          default: g(() => [
            x(f(J.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        M.value === "models" ? (n(), R(Ne, {
          key: 4,
          variant: "primary",
          onClick: ze
        }, {
          default: g(() => [...B[52] || (B[52] = [
            x(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        M.value === "review" ? (n(), R(Ne, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: g(() => [...B[53] || (B[53] = [
            x(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), nw = /* @__PURE__ */ Se(ow, [["__scopeId", "data-v-49848358"]]), aw = { class: "search-input-wrapper" }, lw = ["value", "placeholder"], iw = /* @__PURE__ */ be({
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
    const o = e, a = t, l = $(null);
    let r;
    function u(d) {
      const m = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", m);
      }, o.debounce)) : a("update:modelValue", m);
    }
    function c() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return ct(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (n(), i("div", aw, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: fs(c, ["escape"])
      }, null, 40, lw),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), rw = /* @__PURE__ */ Se(iw, [["__scopeId", "data-v-266f857a"]]), cw = { class: "search-bar" }, uw = /* @__PURE__ */ be({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (n(), i("div", cw, [
      C(rw, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ro = /* @__PURE__ */ Se(uw, [["__scopeId", "data-v-3d51bbfd"]]), dw = { class: "section-group" }, fw = {
  key: 0,
  class: "section-content"
}, mw = /* @__PURE__ */ be({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = $(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (u, c) => (n(), i("section", dw, [
      C(ns, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          x(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", fw, [
        st(u.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), It = /* @__PURE__ */ Se(mw, [["__scopeId", "data-v-c48e33ed"]]), vw = { class: "item-header" }, pw = {
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
}, kw = /* @__PURE__ */ be({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = L(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Ve(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      s("div", vw, [
        l.$slots.icon ? (n(), i("span", pw, [
          st(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        s("div", gw, [
          l.$slots.title ? (n(), i("div", hw, [
            st(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (n(), i("div", yw, [
            st(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", ww, [
        st(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (n(), i("div", _w, [
        st(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Se(kw, [["__scopeId", "data-v-cc435e0e"]]), bw = { class: "loading-state" }, $w = { class: "loading-message" }, Cw = /* @__PURE__ */ be({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (n(), i("div", bw, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", $w, f(e.message), 1)
    ]));
  }
}), Cs = /* @__PURE__ */ Se(Cw, [["__scopeId", "data-v-ad8436c9"]]), xw = { class: "error-state" }, Sw = { class: "error-message" }, Iw = /* @__PURE__ */ be({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (n(), i("div", xw, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", Sw, f(e.message), 1),
      e.retry ? (n(), R(Te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          x(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), xs = /* @__PURE__ */ Se(Iw, [["__scopeId", "data-v-5397be48"]]), Ew = /* @__PURE__ */ be({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getWorkflows: l } = pt(), r = $([]), u = $(!1), c = $(null), d = $(""), m = $(!0), v = $(!1), p = $(!1), _ = $(!1), w = $(null), k = L(
      () => r.value.filter((A) => A.status === "broken")
    ), b = L(
      () => r.value.filter((A) => A.status === "new")
    ), y = L(
      () => r.value.filter((A) => A.status === "modified")
    ), S = L(
      () => r.value.filter((A) => A.status === "synced")
    ), N = L(() => {
      if (!d.value.trim()) return r.value;
      const A = d.value.toLowerCase();
      return r.value.filter((me) => me.name.toLowerCase().includes(A));
    }), M = L(
      () => k.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = L(
      () => b.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), T = L(
      () => y.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = L(
      () => S.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), j = L(
      () => v.value ? F.value : F.value.slice(0, 5)
    );
    async function E(A = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(A);
      } catch (me) {
        c.value = me instanceof Error ? me.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    t({ loadWorkflows: E });
    function V(A) {
      w.value = A, p.value = !0;
    }
    function ie(A) {
      w.value = A, _.value = !0;
    }
    function ee(A) {
      w.value = A, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: A }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function Y(A) {
      var Ge;
      const Pe = (Ge = A.detail) == null ? void 0 : Ge.workflowName;
      Pe && ee(Pe);
    }
    function he() {
      a("refresh");
    }
    async function se() {
      _.value = !1, await E(!0);
    }
    async function J() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function le(A) {
      return A.replace(/uninstallable node mappings?/gi, (me) => me.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Ue(A) {
      if (A.issue_summary && A.issue_summary.trim().length > 0)
        return le(A.issue_summary);
      const me = [];
      return A.version_gated_count && A.version_gated_count > 0 && me.push(`${A.version_gated_count} node${A.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), A.uninstallable_count && A.uninstallable_count > 0 && me.push(`${A.uninstallable_count} node${A.uninstallable_count > 1 ? "s" : ""} need community packages`), A.missing_nodes > 0 && me.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && me.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && me.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && me.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), me.length > 0 ? me.join(", ") : "Has issues";
    }
    function oe(A) {
      const me = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state, Pe = ye(A);
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync · ${Pe}` : `${me || "Unknown"} · ${Pe}`;
    }
    function ye(A) {
      const me = A.contract_summary;
      return !me || !me.has_contract ? "No contract" : me.status === "incomplete" ? `${me.input_count} in / ${me.output_count} out · incomplete` : `${me.input_count} in / ${me.output_count} out`;
    }
    return ct(() => {
      E(), window.addEventListener("comfygit:open-workflow-contract", Y);
    }), sa(() => {
      window.removeEventListener("comfygit:open-workflow-contract", Y);
    }), (A, me) => (n(), i(G, null, [
      C(At, null, {
        header: g(() => [
          C(Ut, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          C(ro, {
            modelValue: d.value,
            "onUpdate:modelValue": me[0] || (me[0] = (Pe) => d.value = Pe),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), R(Cs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (n(), R(xs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            M.value.length ? (n(), R(It, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(M.value, (Pe) => (n(), R(Vt, {
                  key: Pe.name,
                  status: "broken"
                }, {
                  icon: g(() => [...me[7] || (me[7] = [
                    x("⚠", -1)
                  ])]),
                  title: g(() => [
                    x(f(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    x(f(Ue(Pe)), 1)
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ge) => ie(Pe.name)
                    }, {
                      default: g(() => [...me[8] || (me[8] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => ee(Pe.name)
                    }, {
                      default: g(() => [...me[9] || (me[9] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => V(Pe.name)
                    }, {
                      default: g(() => [...me[10] || (me[10] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            P.value.length ? (n(), R(It, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(P.value, (Pe) => (n(), R(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    x(f(Pe.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    x(f(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    x(f(oe(Pe)), 1)
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => ee(Pe.name)
                    }, {
                      default: g(() => [...me[11] || (me[11] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => V(Pe.name)
                    }, {
                      default: g(() => [...me[12] || (me[12] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            T.value.length ? (n(), R(It, {
              key: 2,
              title: "MODIFIED",
              count: T.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(T.value, (Pe) => (n(), R(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...me[13] || (me[13] = [
                    x("⚡", -1)
                  ])]),
                  title: g(() => [
                    x(f(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    x(f(oe(Pe)), 1)
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => ee(Pe.name)
                    }, {
                      default: g(() => [...me[14] || (me[14] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => V(Pe.name)
                    }, {
                      default: g(() => [...me[15] || (me[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            F.value.length ? (n(), R(It, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: me[2] || (me[2] = (Pe) => m.value = Pe)
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(j.value, (Pe) => (n(), R(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    x(f(Pe.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    x(f(Pe.name), 1)
                  ]),
                  subtitle: g(() => [
                    x(f(oe(Pe)), 1)
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => ee(Pe.name)
                    }, {
                      default: g(() => [...me[16] || (me[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => V(Pe.name)
                    }, {
                      default: g(() => [...me[17] || (me[17] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && F.value.length > 5 ? (n(), R(Te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: me[1] || (me[1] = (Pe) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    x(" View all " + f(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            N.value.length ? h("", !0) : (n(), R(rs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && w.value ? (n(), R(Ip, {
        key: 0,
        "workflow-name": w.value,
        onClose: me[3] || (me[3] = (Pe) => p.value = !1),
        onResolve: me[4] || (me[4] = (Pe) => ie(w.value)),
        onRefresh: me[5] || (me[5] = (Pe) => a("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      _.value && w.value ? (n(), R(nw, {
        key: 1,
        "workflow-name": w.value,
        onClose: se,
        onInstall: he,
        onRefresh: me[6] || (me[6] = (Pe) => a("refresh")),
        onRestart: J
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), Tw = /* @__PURE__ */ Se(Ew, [["__scopeId", "data-v-28ee54dd"]]), Mw = /* @__PURE__ */ be({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Ve(["summary-bar", e.variant])
    }, [
      st(t.$slots, "default", {}, void 0)
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
}, c_ = /* @__PURE__ */ be({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: u } = pt(), c = $(null), d = $(!0), m = $(null), v = $(""), p = $(!1), _ = $(null), w = $(null), k = $(null), b = $(null);
    let y = null;
    function S(E, V = "success", ie = 2e3) {
      y && clearTimeout(y), b.value = { message: E, type: V }, y = setTimeout(() => {
        b.value = null;
      }, ie);
    }
    function N(E) {
      if (!E) return "Unknown";
      const V = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return E >= V ? `${(E / V).toFixed(1)} GB` : E >= ie ? `${(E / ie).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
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
    async function T() {
      if (!(!v.value.trim() || !c.value)) {
        p.value = !0, w.value = null, k.value = null;
        try {
          await l(c.value.hash, v.value.trim()), k.value = "Source added successfully!", v.value = "", await j();
        } catch (E) {
          w.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function F(E) {
      if (c.value) {
        _.value = E, w.value = null, k.value = null;
        try {
          await r(c.value.hash, E), S("Source removed"), await j();
        } catch (V) {
          w.value = V instanceof Error ? V.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function j() {
      d.value = !0, m.value = null;
      try {
        c.value = await a(o.identifier);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return ct(j), (E, V) => {
      var ie;
      return n(), i(G, null, [
        C(Et, {
          title: `Model Details: ${((ie = c.value) == null ? void 0 : ie.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: V[5] || (V[5] = (ee) => E.$emit("close"))
        }, {
          body: g(() => {
            var ee, Y, he, se;
            return [
              c.value ? (n(), i("div", Pw, [
                s("section", Rw, [
                  s("div", Nw, [
                    V[6] || (V[6] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Lw, f(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[0] || (V[0] = (J) => M(c.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Dw, [
                    V[7] || (V[7] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Ow, f(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[1] || (V[1] = (J) => M(c.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Aw, [
                    V[8] || (V[8] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Uw, f(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[2] || (V[2] = (J) => M(c.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", zw, [
                    V[9] || (V[9] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", Vw, f(N(c.value.size)), 1)
                  ]),
                  s("div", Fw, [
                    V[10] || (V[10] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Bw, f(c.value.category), 1)
                  ]),
                  s("div", Ww, [
                    V[11] || (V[11] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", Gw, f(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", jw, [
                  s("h4", Hw, "Locations (" + f(((ee = c.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (Y = c.value.locations) != null && Y.length ? (n(), i("div", qw, [
                    (n(!0), i(G, null, ge(c.value.locations, (J, le) => (n(), i("div", {
                      key: le,
                      class: "location-item"
                    }, [
                      s("span", Kw, f(J.path), 1),
                      J.modified ? (n(), i("span", Jw, "Modified: " + f(J.modified), 1)) : h("", !0),
                      J.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Ue) => P(J.path)
                      }, " Open File Location ", 8, Qw)) : h("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", Yw, "No locations found"))
                ]),
                s("section", Xw, [
                  s("h4", Zw, "Download Sources (" + f(((he = c.value.sources) == null ? void 0 : he.length) || 0) + ")", 1),
                  (se = c.value.sources) != null && se.length ? (n(), i("div", e_, [
                    (n(!0), i(G, null, ge(c.value.sources, (J, le) => (n(), i("div", {
                      key: le,
                      class: "source-item"
                    }, [
                      s("span", t_, f(J.type) + ":", 1),
                      s("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(J.url), 9, s_),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: _.value === J.url,
                        onClick: (Ue) => F(J.url)
                      }, f(_.value === J.url ? "..." : "×"), 9, o_)
                    ]))), 128))
                  ])) : (n(), i("div", n_, " No download sources configured ")),
                  s("div", a_, [
                    St(s("input", {
                      "onUpdate:modelValue": V[3] || (V[3] = (J) => v.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [no, v.value]
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || p.value,
                      onClick: T
                    }, f(p.value ? "Adding..." : "Add Source"), 9, l_)
                  ]),
                  w.value ? (n(), i("p", i_, f(w.value), 1)) : h("", !0),
                  k.value ? (n(), i("p", r_, f(k.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            s("button", {
              class: "btn-secondary",
              onClick: V[4] || (V[4] = (ee) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), R(Rt, { to: "body" }, [
          b.value ? (n(), i("div", {
            key: 0,
            class: Ve(["toast", b.value.type])
          }, f(b.value.message), 3)) : h("", !0)
        ]))
      ], 64);
    };
  }
}), Cl = /* @__PURE__ */ Se(c_, [["__scopeId", "data-v-f15cbb56"]]), u_ = ["disabled"], d_ = { class: "dropdown-value" }, f_ = ["onClick"], m_ = {
  key: 0,
  class: "dropdown-error"
}, v_ = /* @__PURE__ */ be({
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
    const o = e, a = t, l = $(!1), r = $(null), u = $(null), c = $({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function m(S) {
      return typeof S == "string" ? S : S.label;
    }
    const v = L(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((N) => d(N) === o.modelValue);
      return S ? m(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function _() {
      l.value = !1;
    }
    function w(S) {
      a("update:modelValue", d(S)), _();
    }
    function k() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), N = window.innerHeight, M = N - S.bottom, P = S.top, T = Math.min(300, o.options.length * 36 + 8), F = M < T && P > M;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...F ? { bottom: `${N - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    kt(l, async (S) => {
      S && (await Pt(), k());
    });
    function b() {
      l.value && k();
    }
    function y(S) {
      S.key === "Escape" && l.value && _();
    }
    return ct(() => {
      window.addEventListener("scroll", b, !0), window.addEventListener("keydown", y);
    }), Po(() => {
      window.removeEventListener("scroll", b, !0), window.removeEventListener("keydown", y);
    }), (S, N) => (n(), i("div", {
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
        s("span", d_, f(v.value), 1),
        N[0] || (N[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, u_),
      (n(), R(Rt, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: _
        })) : h("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: u,
          class: "dropdown-menu",
          style: Wt(c.value)
        }, [
          (n(!0), i(G, null, ge(e.options, (M) => (n(), i("div", {
            key: d(M),
            class: Ve(["dropdown-option", { selected: d(M) === e.modelValue }]),
            onClick: (P) => w(M)
          }, f(m(M)), 11, f_))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (n(), i("span", m_, f(e.error), 1)) : h("", !0)
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
function y_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function w_(e, t, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${y_(o)}`;
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
}, W_ = { class: "action-bar" }, G_ = { class: "summary-info" }, j_ = { class: "summary-count" }, H_ = { class: "summary-size" }, q_ = /* @__PURE__ */ be({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = pt(), u = $([]), c = $(/* @__PURE__ */ new Set()), d = $(!1), m = $(null), v = $(""), p = $(!1), _ = $("name"), w = $(!0), k = $(""), b = $(""), y = $(""), S = $([]), N = $(!1);
    let M = !1;
    const P = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, T = L(() => {
      let H = u.value;
      if (o.initialPath) {
        const Z = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        H = H.filter((q) => q.path.startsWith(Z) || q.path === o.initialPath);
      }
      if (p.value && (H = H.filter((Z) => Z.is_model_file)), v.value.trim()) {
        const Z = v.value.toLowerCase();
        H = H.filter((q) => q.path.toLowerCase().includes(Z));
      }
      return H;
    }), F = L(() => {
      const H = [...T.value];
      return H.sort((Z, q) => {
        let X;
        return _.value === "name" ? X = Z.path.localeCompare(q.path) : X = Z.size - q.size, w.value ? X : -X;
      }), H;
    }), j = L(() => T.value.length === 0 ? !1 : T.value.every((H) => c.value.has(H.path))), E = L(() => T.value.some((H) => c.value.has(H.path))), V = L(() => {
      const H = S.value.map((Z) => ({
        label: Z,
        value: Z
      }));
      return H.push({ label: "Custom path...", value: "__custom__" }), H;
    }), ie = L(() => k.value === "__custom__" ? y.value.trim().length > 0 : k.value.length > 0), ee = L(() => {
      let H = 0;
      for (const Z of c.value) {
        const q = u.value.find((X) => X.path === Z);
        q && (H += q.size);
      }
      return H;
    });
    function Y(H) {
      if (H === 0) return "0 B";
      const Z = 1024 * 1024 * 1024, q = 1024 * 1024, X = 1024;
      return H >= Z ? `${(H / Z).toFixed(2)} GB` : H >= q ? `${(H / q).toFixed(1)} MB` : H >= X ? `${(H / X).toFixed(0)} KB` : `${H} B`;
    }
    function he(H) {
      const Z = H.match(P);
      return Z ? `${Z[1]}${Z[4]}` : null;
    }
    function se(H) {
      const Z = new Set(c.value), q = Z.has(H.path), X = H.shard_group || he(H.path);
      if (X) {
        const xe = u.value.filter((de) => (de.shard_group || he(de.path)) === X);
        q ? xe.forEach((de) => Z.delete(de.path)) : xe.forEach((de) => Z.add(de.path));
      } else
        q ? Z.delete(H.path) : Z.add(H.path);
      c.value = Z;
    }
    function J() {
      const H = new Set(c.value);
      for (const Z of T.value)
        Z.is_model_file && H.add(Z.path);
      c.value = H;
    }
    function le() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Ue() {
      if (j.value) {
        const H = new Set(c.value);
        for (const Z of T.value)
          H.delete(Z.path);
        c.value = H;
      } else {
        const H = new Set(c.value);
        for (const Z of T.value)
          H.add(Z.path);
        c.value = H;
      }
    }
    function oe(H) {
      _.value === H ? w.value = !w.value : (_.value = H, w.value = !0);
    }
    function ye(H) {
      const Z = H.split("/");
      return Z.length >= 2 ? Z[Z.length - 2] : null;
    }
    function A() {
      if (N.value || c.value.size === 0) return;
      const H = /* @__PURE__ */ new Set();
      for (const X of c.value) {
        const xe = ye(X);
        xe && H.add(xe.toLowerCase());
      }
      if (H.size !== 1) return;
      const Z = [...H][0], q = S.value.find(
        (X) => X.toLowerCase() === Z
      );
      q && q !== k.value && (M = !0, k.value = q, Pt(() => {
        M = !1;
      }));
    }
    function me() {
      return k.value === "__custom__" ? y.value.trim() : b.value.trim() ? `${k.value}/${b.value.trim()}` : k.value;
    }
    function Pe() {
      if (c.value.size === 0 || !ie.value) return;
      const H = me(), Z = [];
      for (const q of c.value) {
        const X = u.value.find((xe) => xe.path === q);
        X && Z.push({
          url: w_(o.repoId, o.revision, X.path),
          destination: H,
          filename: X.path.split("/").pop() || X.path
        });
      }
      a("queue", Z);
    }
    async function Ge() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const H = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, Z = await l(H);
          if (u.value = Z.files, o.preselectedFile) {
            const q = u.value.find((X) => X.path === o.preselectedFile);
            q && se(q);
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
        S.value = H.directories, H.directories.length > 0 && !k.value && (k.value = H.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], k.value || (k.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && Ge();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      N.value = !1;
    }), kt(c, () => {
      A();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && c.value.size > 0 && A();
    }), kt(k, (H, Z) => {
      M || Z === "" || (N.value = !0);
    }), ct(() => {
      Ge(), Ee();
    }), (H, Z) => (n(), i("div", __, [
      s("div", k_, [
        s("button", {
          class: "back-btn",
          onClick: Z[0] || (Z[0] = (q) => H.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", b_, [
          s("span", $_, f(e.repoId), 1),
          e.revision ? (n(), i("span", C_, f(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (n(), i("div", x_, " Loading repository files... ")) : m.value ? (n(), i("div", S_, f(m.value), 1)) : (n(), i(G, { key: 2 }, [
        s("div", I_, [
          C(wt, {
            modelValue: v.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (q) => v.value = q),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", E_, [
            s("button", {
              class: Ve(["toggle-btn", { active: p.value }]),
              onClick: Z[2] || (Z[2] = (q) => p.value = !p.value)
            }, f(p.value ? "Models Only" : "All Files"), 3),
            s("button", {
              class: "action-btn",
              onClick: J
            }, "Auto-Select Models"),
            s("button", {
              class: "action-btn",
              onClick: le
            }, "Clear")
          ])
        ]),
        s("div", T_, [
          T.value.length > 0 ? (n(), i("div", M_, [
            s("input", {
              type: "checkbox",
              checked: j.value,
              indeterminate: E.value && !j.value,
              class: "file-checkbox",
              onChange: Ue
            }, null, 40, P_),
            s("span", {
              class: "header-name",
              onClick: Z[3] || (Z[3] = (q) => oe("name"))
            }, [
              Z[9] || (Z[9] = x(" Name ", -1)),
              s("span", R_, f(_.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Z[4] || (Z[4] = (q) => oe("size"))
            }, [
              Z[10] || (Z[10] = x(" Size ", -1)),
              s("span", N_, f(_.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          T.value.length === 0 ? (n(), i("div", L_, f(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", D_, [
            (n(!0), i(G, null, ge(F.value, (q) => (n(), i("div", {
              key: q.path,
              class: Ve(["file-item", { selected: c.value.has(q.path) }]),
              onClick: (X) => se(q)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(q.path),
                class: "file-checkbox",
                onClick: Z[5] || (Z[5] = ft(() => {
                }, ["stop"])),
                onChange: (X) => se(q)
              }, null, 40, A_),
              s("span", U_, f(q.path), 1),
              s("span", z_, f(Y(q.size)), 1)
            ], 10, O_))), 128))
          ]))
        ]),
        s("div", V_, [
          Z[11] || (Z[11] = s("h4", { class: "section-label" }, "Download Destination", -1)),
          s("div", F_, [
            C(p_, {
              modelValue: k.value,
              "onUpdate:modelValue": Z[6] || (Z[6] = (q) => k.value = q),
              options: V.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            k.value !== "__custom__" ? (n(), i("span", B_, "/")) : h("", !0),
            k.value !== "__custom__" ? (n(), R(wt, {
              key: 1,
              modelValue: b.value,
              "onUpdate:modelValue": Z[7] || (Z[7] = (q) => b.value = q),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          k.value === "__custom__" ? (n(), R(wt, {
            key: 0,
            modelValue: y.value,
            "onUpdate:modelValue": Z[8] || (Z[8] = (q) => y.value = q),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        s("div", W_, [
          s("div", G_, [
            s("span", j_, f(c.value.size) + " file(s) selected", 1),
            s("span", H_, f(Y(ee.value)), 1)
          ]),
          C(Ne, {
            variant: "primary",
            disabled: c.value.size === 0 || !ie.value,
            onClick: Pe
          }, {
            default: g(() => [...Z[12] || (Z[12] = [
              x(" Queue Download ", -1)
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
}, ek = { class: "mask" }, tk = { class: "token-input-section" }, sk = { class: "input-label" }, ok = { class: "help-text" }, nk = ["href"], ak = { class: "modal-actions" }, lk = /* @__PURE__ */ be({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, a = t, { updateConfig: l } = pt(), r = $(""), u = $(!1), c = $(!1), d = L(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), m = L(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = L(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = L(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), _ = L(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function w() {
      if (r.value.trim()) {
        u.value = !0;
        try {
          const b = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(b), r.value = "", a("saved"), a("close");
        } catch (b) {
          console.error("Failed to save token:", b);
        } finally {
          u.value = !1;
        }
      }
    }
    async function k() {
      c.value = !0;
      try {
        const b = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(b), a("cleared"), a("close");
      } catch (b) {
        console.error("Failed to clear token:", b);
      } finally {
        c.value = !1;
      }
    }
    return (b, y) => (n(), R(Et, {
      title: "Configure API Token",
      onClose: y[2] || (y[2] = (S) => b.$emit("close"))
    }, {
      body: g(() => [
        s("div", J_, [
          s("div", Q_, [
            s("span", Y_, f(m.value), 1),
            s("span", X_, f(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", Z_, [
            y[4] || (y[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", ek, f(e.currentTokenMask), 1),
            C(Ne, {
              variant: "danger",
              size: "sm",
              onClick: k,
              loading: c.value
            }, {
              default: g(() => [...y[3] || (y[3] = [
                x(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          s("div", tk, [
            s("label", sk, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            C(wt, {
              modelValue: r.value,
              "onUpdate:modelValue": y[0] || (y[0] = (S) => r.value = S),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", ok, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, f(_.value), 9, nk)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        s("div", ak, [
          C(Ne, {
            variant: "secondary",
            onClick: y[1] || (y[1] = (S) => b.$emit("close"))
          }, {
            default: g(() => [...y[5] || (y[5] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(Ne, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
            onClick: w
          }, {
            default: g(() => [...y[6] || (y[6] = [
              x(" Save Token ", -1)
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
}, Sk = /* @__PURE__ */ be({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = pt(), a = $("search"), l = $(""), r = $([]), u = $(!1), c = $(null), d = $(!1), m = $(null), v = $("main"), p = $(), _ = $(), w = $(!1), k = $(null), b = L(() => {
      if (!c.value) return !1;
      const j = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || j.includes("authentication") || j.includes("unauthorized");
    });
    function y(j) {
      return j >= 1e6 ? `${(j / 1e6).toFixed(1)}M` : j >= 1e3 ? `${(j / 1e3).toFixed(1)}K` : String(j);
    }
    async function S() {
      const j = l.value.trim();
      if (!j) return;
      c.value = null;
      const E = h_(j);
      if (E.kind === "file" && E.repoId && E.path) {
        m.value = E.repoId, v.value = E.revision || "main";
        const V = E.path.split("/");
        V.length > 1 ? p.value = V.slice(0, -1).join("/") : p.value = void 0, _.value = E.path, a.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        m.value = E.repoId, v.value = E.revision || "main", p.value = E.path, _.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(j) && !j.includes("://")) {
        m.value = j, v.value = "main", p.value = void 0, _.value = void 0, a.value = "browse";
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
    function N(j) {
      m.value = j, v.value = "main", p.value = void 0, _.value = void 0, a.value = "browse";
    }
    function M() {
      a.value = "search", m.value = null, p.value = void 0, _.value = void 0;
    }
    async function P() {
      try {
        const j = await o();
        k.value = j.huggingface_token || null;
      } catch (j) {
        console.error("Failed to load config:", j);
      }
    }
    function T() {
      P(), b.value && l.value && S();
    }
    function F() {
      k.value = null;
    }
    return ct(P), (j, E) => (n(), i("div", rk, [
      a.value === "search" ? (n(), i("div", ck, [
        s("div", uk, [
          s("div", dk, [
            C(wt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (V) => l.value = V),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: fs(S, ["enter"])
            }, null, 8, ["modelValue"]),
            C(Ne, {
              variant: "primary",
              onClick: S,
              loading: u.value
            }, {
              default: g(() => [...E[5] || (E[5] = [
                x(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          C(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (V) => w.value = !0)
          }, {
            default: g(() => [
              x(f(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      a.value === "search" ? (n(), i("div", fk, [
        u.value ? (n(), i("div", mk, " Searching HuggingFace... ")) : c.value ? (n(), i("div", vk, [
          s("p", null, f(c.value), 1),
          b.value ? (n(), R(Ne, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (V) => w.value = !0)
          }, {
            default: g(() => [...E[6] || (E[6] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", pk, [
          (n(!0), i(G, null, ge(r.value, (V) => (n(), i("div", {
            key: V.repo_id,
            class: "repo-card",
            onClick: (ie) => N(V.repo_id)
          }, [
            s("div", hk, [
              s("span", yk, f(V.repo_id), 1),
              s("div", wk, [
                s("span", _k, [
                  E[7] || (E[7] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + f(y(V.downloads)), 1)
                ]),
                s("span", kk, [
                  E[8] || (E[8] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + f(y(V.likes)), 1)
                ])
              ])
            ]),
            V.description ? (n(), i("p", bk, f(V.description), 1)) : h("", !0),
            V.tags.length > 0 ? (n(), i("div", $k, [
              (n(!0), i(G, null, ge(V.tags.slice(0, 5), (ie) => (n(), i("span", {
                key: ie,
                class: "tag"
              }, f(ie), 1))), 128))
            ])) : h("", !0)
          ], 8, gk))), 128))
        ])) : d.value ? (n(), i("div", Ck, " No repositories found ")) : (n(), i("div", xk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), R(K_, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": _.value,
        onBack: M,
        onQueue: E[3] || (E[3] = (V) => j.$emit("queue", V))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      w.value ? (n(), R(ik, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        onClose: E[4] || (E[4] = (V) => w.value = !1),
        onSaved: T,
        onCleared: F
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), Ik = /* @__PURE__ */ Se(Sk, [["__scopeId", "data-v-e13209bf"]]), Ek = { class: "civitai-tab" }, Tk = /* @__PURE__ */ be({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (n(), i("div", Ek, [...o[0] || (o[0] = [
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
}, Dk = { class: "actions" }, Ok = /* @__PURE__ */ be({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = t, a = $(""), l = $(""), r = L(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), u = L(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), c = () => {
      if (!u.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), a.value = "", l.value = "";
    };
    return (d, m) => (n(), i("div", Pk, [
      s("div", Rk, [
        m[2] || (m[2] = s("label", null, "Download URL", -1)),
        C(wt, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      s("div", Nk, [
        m[3] || (m[3] = s("label", null, "Target Path (relative to models directory)", -1)),
        C(wt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Lk, f(r.value), 1)) : h("", !0)
      ]),
      m[5] || (m[5] = s("p", { class: "note" }, "Model will be queued for background download.", -1)),
      s("div", Dk, [
        C(Ne, {
          variant: "primary",
          disabled: !u.value,
          onClick: c
        }, {
          default: g(() => [...m[4] || (m[4] = [
            x(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Ak = /* @__PURE__ */ Se(Ok, [["__scopeId", "data-v-01def7aa"]]), Uk = { class: "download-modal" }, zk = { class: "tab-bar" }, Vk = ["onClick"], Fk = { class: "tab-content" }, Bk = /* @__PURE__ */ be({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: a } = No(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = $("huggingface");
    function u(m) {
      a(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.destination ? `${v.destination}/${v.filename}` : v.filename
      }))), o("close");
    }
    function c(m) {
      a(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (m, v) => e.show ? (n(), R(Et, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: g(() => [
        s("div", Uk, [
          s("div", zk, [
            (n(), i(G, null, ge(l, (p) => s("button", {
              key: p.id,
              class: Ve(["tab-btn", { active: r.value === p.id }]),
              onClick: (_) => r.value = p.id
            }, f(p.icon) + " " + f(p.label), 11, Vk)), 64))
          ]),
          s("div", Fk, [
            r.value === "huggingface" ? (n(), R(Ik, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (n(), R(Mk, { key: 1 })) : r.value === "direct" ? (n(), R(Ak, {
              key: 2,
              onQueue: c
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        C(Ne, {
          variant: "secondary",
          onClick: d
        }, {
          default: g(() => [...v[0] || (v[0] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), Qr = /* @__PURE__ */ Se(Bk, [["__scopeId", "data-v-90a9f401"]]), Wk = /* @__PURE__ */ be({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: a, getStatus: l } = pt(), r = $([]), u = $([]), c = $("production"), d = $(!1), m = $(null), v = $(""), p = $(!1), _ = $(null), w = $(!1);
    function k() {
      p.value = !1, o("navigate", "model-index");
    }
    const b = L(
      () => r.value.reduce((E, V) => E + (V.size || 0), 0)
    ), y = L(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((V) => V.filename.toLowerCase().includes(E));
    }), S = L(() => {
      if (!v.value.trim()) return u.value;
      const E = v.value.toLowerCase();
      return u.value.filter((V) => V.filename.toLowerCase().includes(E));
    }), N = L(() => {
      const E = {};
      for (const ie of y.value) {
        const ee = ie.type || "other";
        E[ee] || (E[ee] = []), E[ee].push(ie);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([ie], [ee]) => {
        const Y = V.indexOf(ie), he = V.indexOf(ee);
        return Y >= 0 && he >= 0 ? Y - he : Y >= 0 ? -1 : he >= 0 ? 1 : ie.localeCompare(ee);
      }).map(([ie, ee]) => ({ type: ie, models: ee }));
    });
    function M(E) {
      if (!E) return "Unknown";
      const V = E / (1024 * 1024);
      return V >= 1024 ? `${(V / 1024).toFixed(1)} GB` : `${V.toFixed(0)} MB`;
    }
    function P(E) {
      _.value = E.hash || E.filename;
    }
    function T(E) {
      o("navigate", "model-index");
    }
    function F(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function j() {
      d.value = !0, m.value = null;
      try {
        const E = await a();
        r.value = E, u.value = [];
        const V = await l();
        c.value = V.environment || "production";
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return ct(j), (E, V) => (n(), i(G, null, [
      C(At, null, {
        header: g(() => [
          C(Ut, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (ie) => p.value = !0)
          }, {
            actions: g(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (ie) => w.value = !0)
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
                  x(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(ro, {
            modelValue: v.value,
            "onUpdate:modelValue": V[2] || (V[2] = (ie) => v.value = ie),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (n(), R(Cs, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (n(), R(xs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            r.value.length ? (n(), R(la, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                x(" Total: " + f(r.value.length) + " models • " + f(M(b.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(G, null, ge(N.value, (ie) => (n(), R(It, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(ie.models, (ee) => (n(), R(Vt, {
                  key: ee.hash || ee.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...V[7] || (V[7] = [
                    x("📦", -1)
                  ])]),
                  title: g(() => [
                    x(f(ee.filename), 1)
                  ]),
                  subtitle: g(() => [
                    x(f(M(ee.size)), 1)
                  ]),
                  details: g(() => [
                    C(_t, {
                      label: "Used by:",
                      value: (ee.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(_t, {
                      label: "Path:",
                      value: ee.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => P(ee)
                    }, {
                      default: g(() => [...V[8] || (V[8] = [
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
            S.value.length ? (n(), R(It, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(S.value, (ie) => (n(), R(Vt, {
                  key: ie.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...V[9] || (V[9] = [
                    x("⚠", -1)
                  ])]),
                  title: g(() => [
                    x(f(ie.filename), 1)
                  ]),
                  subtitle: g(() => [...V[10] || (V[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var ee;
                    return [
                      C(_t, {
                        label: "Required by:",
                        value: ((ee = ie.workflow_names) == null ? void 0 : ee.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => F(ie.filename)
                    }, {
                      default: g(() => [...V[11] || (V[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => T(ie.filename)
                    }, {
                      default: g(() => [...V[12] || (V[12] = [
                        x(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !y.value.length && !S.value.length ? (n(), R(rs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(cs, {
        show: p.value,
        title: "About Environment Models",
        onClose: V[3] || (V[3] = (ie) => p.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            V[13] || (V[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + f(c.value) + '"', 1),
            V[14] || (V[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          C(Te, {
            variant: "primary",
            onClick: k
          }, {
            default: g(() => [...V[15] || (V[15] = [
              x(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), R(Cl, {
        key: 0,
        identifier: _.value,
        onClose: V[4] || (V[4] = (ie) => _.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      C(Qr, {
        show: w.value,
        onClose: V[5] || (V[5] = (ie) => w.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Gk = /* @__PURE__ */ Se(Wk, [["__scopeId", "data-v-af3ca736"]]), jk = {
  key: 0,
  class: "indexing-progress"
}, Hk = { class: "progress-info" }, qk = { class: "progress-label" }, Kk = { class: "progress-count" }, Jk = { class: "progress-bar" }, Qk = { class: "modal-content" }, Yk = { class: "modal-header" }, Xk = { class: "modal-body" }, Zk = { class: "input-group" }, eb = { class: "current-path" }, tb = { class: "input-group" }, sb = { class: "modal-footer" }, ob = /* @__PURE__ */ be({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = pt(), u = t, c = $([]), d = $(!1), m = $(!1), v = $(null), p = $(""), _ = $(!1), w = $(null), k = $(!1), b = $(null), y = $(""), S = $(!1), N = $(!1), M = $(null), P = L(
      () => c.value.reduce((he, se) => he + (se.size || 0), 0)
    ), T = L(() => {
      if (!p.value.trim()) return c.value;
      const he = p.value.toLowerCase();
      return c.value.filter((se) => {
        const J = se, le = se.sha256 || J.sha256_hash || "";
        return se.filename.toLowerCase().includes(he) || le.toLowerCase().includes(he);
      });
    }), F = L(() => {
      const he = {};
      for (const J of T.value) {
        const le = J.type || "other";
        he[le] || (he[le] = []), he[le].push(J);
      }
      const se = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(he).sort(([J], [le]) => {
        const Ue = se.indexOf(J), oe = se.indexOf(le);
        return Ue >= 0 && oe >= 0 ? Ue - oe : Ue >= 0 ? -1 : oe >= 0 ? 1 : J.localeCompare(le);
      }).map(([J, le]) => ({ type: J, models: le }));
    });
    function j(he) {
      if (!he) return "Unknown";
      const se = 1024 * 1024 * 1024, J = 1024 * 1024;
      return he >= se ? `${(he / se).toFixed(1)} GB` : he >= J ? `${(he / J).toFixed(0)} MB` : `${(he / 1024).toFixed(0)} KB`;
    }
    function E(he) {
      w.value = he.hash || he.filename;
    }
    async function V() {
      m.value = !0, v.value = null;
      try {
        const he = await a();
        await ee(), he.changes > 0 && console.log(`Scan complete: ${he.changes} changes detected`);
      } catch (he) {
        v.value = he instanceof Error ? he.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function ie() {
      if (y.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const he = await r(y.value.trim());
          b.value = he.path, k.value = !1, y.value = "", await ee(), console.log(`Directory changed: ${he.models_indexed} models indexed`), u("refresh");
        } catch (he) {
          v.value = he instanceof Error ? he.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function ee() {
      d.value = !0, v.value = null;
      try {
        c.value = await o();
      } catch (he) {
        v.value = he instanceof Error ? he.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Y() {
      try {
        const he = await l();
        b.value = he.path;
      } catch {
      }
    }
    return ct(() => {
      ee(), Y();
    }), (he, se) => (n(), i(G, null, [
      C(At, null, {
        header: g(() => [
          C(Ut, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: se[2] || (se[2] = (J) => _.value = !0)
          }, {
            actions: g(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: V
              }, {
                default: g(() => [
                  x(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: se[0] || (se[0] = (J) => k.value = !0)
              }, {
                default: g(() => [...se[11] || (se[11] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: se[1] || (se[1] = (J) => N.value = !0)
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
                  x(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          M.value ? (n(), i("div", jk, [
            s("div", Hk, [
              s("span", qk, f(M.value.message), 1),
              s("span", Kk, f(M.value.current) + "/" + f(M.value.total), 1)
            ]),
            s("div", Jk, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          C(ro, {
            modelValue: p.value,
            "onUpdate:modelValue": se[3] || (se[3] = (J) => p.value = J),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value || M.value ? (n(), R(Cs, {
            key: 0,
            message: M.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), R(xs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            c.value.length ? (n(), R(la, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                x(" Total: " + f(c.value.length) + " models • " + f(j(P.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(G, null, ge(F.value, (J) => (n(), R(It, {
              key: J.type,
              title: J.type.toUpperCase(),
              count: J.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(J.models, (le) => (n(), R(Vt, {
                  key: le.sha256 || le.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...se[13] || (se[13] = [
                    x("📦", -1)
                  ])]),
                  title: g(() => [
                    x(f(le.filename), 1)
                  ]),
                  subtitle: g(() => [
                    x(f(j(le.size)), 1)
                  ]),
                  details: g(() => [
                    C(_t, {
                      label: "Hash:",
                      value: le.hash ? le.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => E(le)
                    }, {
                      default: g(() => [...se[14] || (se[14] = [
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
            T.value.length ? h("", !0) : (n(), R(rs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(cs, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: se[4] || (se[4] = (J) => _.value = !1)
      }, {
        content: g(() => [...se[15] || (se[15] = [
          s("p", null, [
            x(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            x(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), R(Cl, {
        key: 0,
        identifier: w.value,
        onClose: se[5] || (se[5] = (J) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (n(), R(Rt, { to: "body" }, [
        k.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: se[9] || (se[9] = ft((J) => k.value = !1, ["self"]))
        }, [
          s("div", Qk, [
            s("div", Yk, [
              se[16] || (se[16] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: se[6] || (se[6] = (J) => k.value = !1)
              }, "✕")
            ]),
            s("div", Xk, [
              s("div", Zk, [
                se[17] || (se[17] = s("label", null, "Current Directory", -1)),
                s("code", eb, f(b.value || "Not set"), 1)
              ]),
              s("div", tb, [
                se[18] || (se[18] = s("label", null, "New Directory Path", -1)),
                C(wt, {
                  modelValue: y.value,
                  "onUpdate:modelValue": se[7] || (se[7] = (J) => y.value = J),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              se[19] || (se[19] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", sb, [
              C(Ne, {
                variant: "secondary",
                onClick: se[8] || (se[8] = (J) => k.value = !1)
              }, {
                default: g(() => [...se[20] || (se[20] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Ne, {
                variant: "primary",
                disabled: !y.value.trim() || S.value,
                loading: S.value,
                onClick: ie
              }, {
                default: g(() => [
                  x(f(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      C(Qr, {
        show: N.value,
        onClose: se[10] || (se[10] = (J) => N.value = !1)
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
}, _b = /* @__PURE__ */ be({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = L(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = L(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = L(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (c, d) => (n(), R(Et, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => a("close"))
    }, {
      body: g(() => [
        s("div", ab, [
          s("div", lb, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ve(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", ib, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", rb, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : h("", !0),
          s("div", cb, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", ub, f(u.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", db, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", fb, f(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (n(), i("div", mb, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              x(f(e.node.repository) + " ", 1),
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
          e.node.download_url ? (n(), i("div", pb, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", gb, f(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", hb, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", yb, " Not used in any workflows ")) : (n(), i("div", wb, [
              (n(!0), i(G, null, ge(e.node.used_in_workflows, (m) => (n(), i("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        C(Ne, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => a("close"))
        }, {
          default: g(() => [...d[11] || (d[11] = [
            x(" Close ", -1)
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
}, xb = /* @__PURE__ */ be({
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
    return (t, o) => (n(), R(Et, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => t.$emit("cancel"))
    }, {
      body: g(() => [
        s("p", bb, f(e.message), 1),
        e.details && e.details.length ? (n(), i("div", $b, [
          (n(!0), i(G, null, ge(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(a), 1))), 128))
        ])) : h("", !0),
        e.warning ? (n(), i("p", Cb, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + f(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        C(Ne, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("cancel"))
        }, {
          default: g(() => [
            x(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), R(Ne, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => t.$emit("secondary"))
        }, {
          default: g(() => [
            x(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        C(Ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
        }, {
          default: g(() => [
            x(f(e.confirmLabel), 1)
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
}, Db = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Ob = { class: "criticality-control" }, Ab = ["value", "disabled", "onChange"], Ub = /* @__PURE__ */ be({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, a = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: u,
      uninstallNode: c,
      queueNodeInstall: d,
      updateNodeCriticality: m
    } = pt(), v = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = $(!1), _ = $(null), w = $(""), k = $(!1), b = $(null), y = $(/* @__PURE__ */ new Set()), S = $(/* @__PURE__ */ new Set()), N = $(null), M = L(() => {
      if (!w.value.trim()) return v.value.nodes;
      const de = w.value.toLowerCase();
      return v.value.nodes.filter(
        (re) => {
          var I, z;
          return re.name.toLowerCase().includes(de) || ((I = re.description) == null ? void 0 : I.toLowerCase().includes(de)) || ((z = re.repository) == null ? void 0 : z.toLowerCase().includes(de));
        }
      );
    }), P = L(
      () => M.value.filter((de) => de.installed && de.tracked)
    ), T = L(
      () => M.value.filter((de) => !de.installed && de.tracked && !de.issue_type)
    ), F = L(
      () => M.value.filter((de) => de.installed && !de.tracked)
    ), j = L(
      () => M.value.filter((de) => de.issue_type === "version_gated")
    ), E = L(
      () => M.value.filter((de) => de.issue_type === "uninstallable")
    );
    function V(de) {
      return de.registry_id || de.name;
    }
    function ie(de) {
      return y.value.has(V(de));
    }
    async function ee(de, re) {
      const I = de.registry_id;
      if (!I) {
        a("toast", `Node "${de.name}" has no package id for install`, "warning");
        return;
      }
      if (re === "git" && !de.repository) {
        a("toast", `Node "${de.name}" has no repository URL for git install`, "warning");
        return;
      }
      const z = {
        id: I,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      re === "git" && de.repository && (z.repository = de.repository, z.install_source = "git"), await d(z), y.value.add(V(de)), a("toast", `✓ Queued install for "${de.name}"`, "success");
    }
    function Y(de) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[de] || de;
    }
    const he = L(() => o.versionMismatches.length > 0);
    function se(de) {
      return !de.used_in_workflows || de.used_in_workflows.length === 0 ? "Not used in any workflows" : de.used_in_workflows.length === 1 ? de.used_in_workflows[0] : `${de.used_in_workflows.length} workflows`;
    }
    function J(de) {
      return de.criticality === "optional" ? "optional" : "required";
    }
    function le(de) {
      return S.value.has(de.name);
    }
    async function Ue(de, re) {
      const I = re.target, z = J(de), ce = I.value;
      if (ce !== z) {
        S.value = new Set(S.value).add(de.name), de.criticality = ce;
        try {
          const Ce = await m(de.name, ce);
          if (Ce.status !== "success") {
            de.criticality = z, a("toast", Ce.message || `Failed to update "${de.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${de.name}" as ${ce}`, "success");
        } catch (Ce) {
          de.criticality = z, I.value = z, a("toast", `Error updating criticality: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
        } finally {
          const Ce = new Set(S.value);
          Ce.delete(de.name), S.value = Ce;
        }
      }
    }
    function oe(de) {
      return de.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ye(de) {
      return de.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function A(de) {
      return de.registry_id ? `Community-mapped package: ${de.registry_id}` : "Community-mapped package";
    }
    function me(de) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Pe(de) {
      b.value = de;
    }
    function Ge() {
      a("open-node-manager");
    }
    function Ee(de) {
      N.value = {
        title: "Track as Development Node",
        message: `Track "${de}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0;
            const re = await r(de);
            re.status === "success" ? (a("toast", `✓ Node "${de}" tracked as development`, "success"), await xe()) : a("toast", `Failed to track node: ${re.message || "Unknown error"}`, "error");
          } catch (re) {
            a("toast", `Error tracking node: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function H(de) {
      N.value = {
        title: "Remove Untracked Node",
        message: `Remove "${de}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0;
            const re = await c(de);
            re.status === "success" ? (a("toast", `✓ Node "${de}" removed`, "success"), await xe()) : a("toast", `Failed to remove node: ${re.message || "Unknown error"}`, "error");
          } catch (re) {
            a("toast", `Error removing node: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Z(de) {
      N.value = {
        title: "Install Missing Node",
        message: `Install "${de}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0;
            const re = await u(de);
            re.status === "success" ? (a("toast", `✓ Node "${de}" installed`, "success"), await xe()) : a("toast", `Failed to install node: ${re.message || "Unknown error"}`, "error");
          } catch (re) {
            a("toast", `Error installing node: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function q(de) {
      N.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${de.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0, await ee(de, "registry");
          } catch (re) {
            a("toast", `Error queueing install: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function X(de) {
      N.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${de.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0, await ee(de, "git");
          } catch (re) {
            a("toast", `Error queueing git install: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function xe() {
      p.value = !0, _.value = null;
      try {
        v.value = await l();
      } catch (de) {
        _.value = de instanceof Error ? de.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return ct(xe), (de, re) => (n(), i(G, null, [
      C(At, null, {
        header: g(() => [
          C(Ut, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: re[0] || (re[0] = (I) => k.value = !0)
          }, {
            actions: g(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: Ge
              }, {
                default: g(() => [...re[7] || (re[7] = [
                  x(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(ro, {
            modelValue: w.value,
            "onUpdate:modelValue": re[1] || (re[1] = (I) => w.value = I),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          p.value ? (n(), R(Cs, {
            key: 0,
            message: "Loading nodes..."
          })) : _.value ? (n(), R(xs, {
            key: 1,
            message: _.value,
            retry: !0,
            onRetry: xe
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            he.value ? (n(), R(It, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                s("div", Sb, [
                  re[8] || (re[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(G, null, ge(e.versionMismatches, (I) => (n(), R(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: g(() => [...re[9] || (re[9] = [
                    x("⚠", -1)
                  ])]),
                  title: g(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Ib, [
                      s("span", Eb, f(I.actual), 1),
                      re[10] || (re[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", Tb, f(I.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "warning",
                      size: "sm",
                      onClick: re[2] || (re[2] = (z) => a("repair-environment"))
                    }, {
                      default: g(() => [...re[11] || (re[11] = [
                        x(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            j.value.length ? (n(), R(It, {
              key: 1,
              title: "BLOCKED",
              count: j.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(j.value, (I) => (n(), R(Vt, {
                  key: `blocked-${I.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...re[12] || (re[12] = [
                    x("⛔", -1)
                  ])]),
                  title: g(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Mb, f(oe(I)), 1)
                  ]),
                  details: g(() => [
                    C(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || ye(I)
                    }, null, 8, ["value"]),
                    C(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...re[13] || (re[13] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            E.value.length ? (n(), R(It, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(E.value, (I) => (n(), R(Vt, {
                  key: `community-${I.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...re[14] || (re[14] = [
                    x("⚠", -1)
                  ])]),
                  title: g(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Pb, f(A(I)), 1)
                  ]),
                  details: g(() => [
                    C(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || me(I)
                    }, null, 8, ["value"]),
                    C(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...re[15] || (re[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ie(I) ? (n(), i("span", Rb, "Queued")) : (n(), i(G, { key: 1 }, [
                      I.registry_id ? (n(), R(Te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (z) => q(I)
                      }, {
                        default: g(() => [...re[16] || (re[16] = [
                          x(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      I.repository ? (n(), R(Te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (z) => X(I)
                      }, {
                        default: g(() => [...re[17] || (re[17] = [
                          x(" Install via Git ", -1)
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
            F.value.length ? (n(), R(It, {
              key: 3,
              title: "UNTRACKED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(F.value, (I) => (n(), R(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: g(() => [...re[18] || (re[18] = [
                    x("?", -1)
                  ])]),
                  title: g(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: g(() => [...re[19] || (re[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    C(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...re[20] || (re[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => Ee(I.name)
                    }, {
                      default: g(() => [...re[21] || (re[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (z) => H(I.name)
                    }, {
                      default: g(() => [...re[22] || (re[22] = [
                        x(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            P.value.length ? (n(), R(It, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(P.value, (I) => (n(), R(Vt, {
                  key: I.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    x(f(I.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: g(() => [
                    I.version ? (n(), i("span", Nb, f(I.source === "development" ? "" : "v") + f(I.version), 1)) : (n(), i("span", Lb, "version unknown")),
                    s("span", Db, " • " + f(Y(I.source)), 1)
                  ]),
                  details: g(() => [
                    C(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...re[23] || (re[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", Ob, [
                      re[25] || (re[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: J(I),
                        disabled: le(I),
                        onChange: (z) => Ue(I, z)
                      }, [...re[24] || (re[24] = [
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
            T.value.length ? (n(), R(It, {
              key: 5,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(T.value, (I) => (n(), R(Vt, {
                  key: I.name,
                  status: "missing"
                }, {
                  icon: g(() => [...re[26] || (re[26] = [
                    x("!", -1)
                  ])]),
                  title: g(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: g(() => [...re[27] || (re[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    C(_t, {
                      label: "Required by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Pe(I)
                    }, {
                      default: g(() => [...re[28] || (re[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => Z(I.name)
                    }, {
                      default: g(() => [...re[29] || (re[29] = [
                        x(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !P.value.length && !T.value.length && !j.value.length && !E.value.length && !F.value.length ? (n(), R(rs, {
              key: 6,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(cs, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: re[4] || (re[4] = (I) => k.value = !1)
      }, {
        content: g(() => [...re[30] || (re[30] = [
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
        actions: g(() => [
          C(Te, {
            variant: "primary",
            onClick: re[3] || (re[3] = (I) => k.value = !1)
          }, {
            default: g(() => [...re[31] || (re[31] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (n(), R(kb, {
        key: 0,
        node: b.value,
        onClose: re[5] || (re[5] = (I) => b.value = null)
      }, null, 8, ["node"])) : h("", !0),
      N.value ? (n(), R(xl, {
        key: 1,
        title: N.value.title,
        message: N.value.message,
        warning: N.value.warning,
        "confirm-label": N.value.confirmLabel,
        destructive: N.value.destructive,
        onConfirm: N.value.onConfirm,
        onCancel: re[6] || (re[6] = (I) => N.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), zb = /* @__PURE__ */ Se(Ub, [["__scopeId", "data-v-edfa1c86"]]), Vb = { class: "setting-info" }, Fb = { class: "setting-label" }, Bb = {
  key: 0,
  class: "required-marker"
}, Wb = {
  key: 0,
  class: "setting-description"
}, Gb = { class: "setting-control" }, jb = /* @__PURE__ */ be({
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
      class: Ve(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", Vb, [
        s("div", Fb, [
          x(f(e.label) + " ", 1),
          e.required ? (n(), i("span", Bb, "*")) : h("", !0)
        ]),
        e.description ? (n(), i("div", Wb, f(e.description), 1)) : h("", !0)
      ]),
      s("div", Gb, [
        st(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), vo = /* @__PURE__ */ Se(jb, [["__scopeId", "data-v-3e106b1c"]]), Hb = ["type", "value", "placeholder", "disabled"], qb = /* @__PURE__ */ be({
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
    const a = e, l = o, r = $(null);
    function u(c) {
      const d = c.target.value;
      l("update:modelValue", d);
    }
    return ct(() => {
      a.autoFocus && r.value && r.value.focus();
    }), t({
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
      class: Ve(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = fs((m) => c.$emit("enter"), ["enter"])),
        d[1] || (d[1] = fs((m) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => c.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => c.$emit("blur"))
    }, null, 42, Hb));
  }
}), yo = /* @__PURE__ */ Se(qb, [["__scopeId", "data-v-0380d08f"]]), Kb = { class: "toggle" }, Jb = ["checked", "disabled"], Qb = /* @__PURE__ */ be({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", Kb, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
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
  function a() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: Yr,
    isRemoteHttps: Yb
  };
}
const Zb = { class: "workspace-settings-content" }, e2 = { class: "settings-section" }, t2 = { class: "path-setting" }, s2 = { class: "path-value" }, o2 = { class: "path-setting" }, n2 = { class: "path-value" }, a2 = { class: "settings-section" }, l2 = { class: "token-setting" }, i2 = {
  key: 0,
  class: "token-warning"
}, r2 = { class: "token-actions" }, c2 = { class: "settings-section" }, u2 = { class: "settings-section" }, d2 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: u, getRemotes: c, testGitAuth: d } = pt(), { getToken: m, setToken: v, clearToken: p, hasToken: _ } = Xb(), w = $(!1), k = $(null), b = $(null), y = $(null), S = $(null), N = $(""), M = $(""), P = $(""), T = $(""), F = $(!1), j = $(!1), E = $(!1), V = $(""), ie = $(!1), ee = $(!1), Y = $(null), he = $(!1), se = $(!0);
    function J(Z) {
      return Z.join(" ");
    }
    function le(Z) {
      return Z.trim() ? Z.trim().split(/\s+/) : [];
    }
    const Ue = L(() => {
      if (!S.value) return !1;
      const Z = F.value, q = j.value, X = E.value, xe = T.value !== J(S.value.comfyui_extra_args || []);
      return Z || q || X || xe;
    }), oe = L(() => _());
    async function ye() {
      var Z;
      w.value = !0, k.value = null;
      try {
        y.value = await r(a.workspacePath || void 0), S.value = { ...y.value }, N.value = y.value.civitai_api_key || "", M.value = y.value.huggingface_token || "", T.value = J(y.value.comfyui_extra_args || []), P.value = m() || "", V.value = P.value, F.value = !1, j.value = !1, E.value = !1, Y.value = null;
        const q = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        he.value = q !== "false", se.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const xe = (Z = (await c()).remotes) == null ? void 0 : Z.find((de) => de.name === "origin");
          ie.value = !!(xe && Yr(xe.url));
        } catch {
          ie.value = !1;
        }
      } catch (q) {
        k.value = q instanceof Error ? q.message : "Failed to load settings";
      } finally {
        w.value = !1;
      }
    }
    async function A() {
      var Z;
      b.value = null;
      try {
        const q = {};
        F.value && (q.civitai_api_key = N.value || null), j.value && (q.huggingface_token = M.value || null), T.value !== J(((Z = S.value) == null ? void 0 : Z.comfyui_extra_args) || []) && (q.comfyui_extra_args = le(T.value)), await u(q, a.workspacePath || void 0), E.value && (P.value ? v(P.value) : p()), await ye(), b.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          b.value = null;
        }, 3e3);
      } catch (q) {
        const X = q instanceof Error ? q.message : "Failed to save settings";
        b.value = { type: "error", message: X }, l("error", X);
      }
    }
    function me() {
      S.value && (N.value = S.value.civitai_api_key || "", M.value = S.value.huggingface_token || "", T.value = J(S.value.comfyui_extra_args || []), P.value = V.value, F.value = !1, j.value = !1, E.value = !1, Y.value = null, b.value = null);
    }
    async function Pe() {
      if (P.value) {
        ee.value = !0, Y.value = null;
        try {
          const Z = await d(P.value);
          Y.value = {
            type: Z.status === "success" ? "success" : "error",
            message: Z.message
          };
        } catch (Z) {
          Y.value = {
            type: "error",
            message: Z instanceof Error ? Z.message : "Connection test failed"
          };
        } finally {
          ee.value = !1;
        }
      }
    }
    function Ge() {
      P.value = "", E.value = !0, Y.value = null;
    }
    function Ee(Z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Z)), console.log("[ComfyGit] Auto-refresh setting saved:", Z);
    }
    function H(Z) {
      Z ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Z ? "enabled" : "disabled");
    }
    return t({
      saveSettings: A,
      resetSettings: me,
      hasChanges: Ue,
      loadSettings: ye
    }), ct(ye), (Z, q) => (n(), i("div", Zb, [
      w.value ? (n(), R(Cs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (n(), R(xs, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: ye
      }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
        C(It, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var X, xe;
            return [
              s("div", e2, [
                s("div", t2, [
                  q[9] || (q[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  q[10] || (q[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", s2, f(((X = y.value) == null ? void 0 : X.workspace_path) || "Loading..."), 1)
                ]),
                s("div", o2, [
                  q[11] || (q[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  q[12] || (q[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", n2, f(((xe = y.value) == null ? void 0 : xe.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(It, { title: "API CREDENTIALS" }, {
          default: g(() => [
            s("div", a2, [
              C(vo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  C(yo, {
                    modelValue: N.value,
                    "onUpdate:modelValue": q[0] || (q[0] = (X) => N.value = X),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: q[1] || (q[1] = (X) => F.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(vo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  C(yo, {
                    modelValue: M.value,
                    "onUpdate:modelValue": q[2] || (q[2] = (X) => M.value = X),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: q[3] || (q[3] = (X) => j.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(vo, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: g(() => [
                  s("div", l2, [
                    C(yo, {
                      modelValue: P.value,
                      "onUpdate:modelValue": q[4] || (q[4] = (X) => P.value = X),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: q[5] || (q[5] = (X) => E.value = !0)
                    }, null, 8, ["modelValue"]),
                    ie.value ? (n(), i("div", i2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    q[15] || (q[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", r2, [
                      C(Te, {
                        variant: "ghost",
                        size: "xs",
                        loading: ee.value,
                        disabled: !P.value || ee.value,
                        onClick: Pe
                      }, {
                        default: g(() => [...q[13] || (q[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      oe.value ? (n(), R(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: Ge
                      }, {
                        default: g(() => [...q[14] || (q[14] = [
                          x(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : h("", !0)
                    ]),
                    Y.value ? (n(), i("div", {
                      key: 1,
                      class: Ve(["token-test-result", Y.value.type])
                    }, f(Y.value.message), 3)) : h("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        C(It, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            s("div", c2, [
              C(vo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  C(yo, {
                    modelValue: T.value,
                    "onUpdate:modelValue": q[6] || (q[6] = (X) => T.value = X),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              q[16] || (q[16] = s("div", { class: "setting-hint" }, [
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
        C(It, { title: "UI SETTINGS" }, {
          default: g(() => [
            s("div", u2, [
              C(vo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  C(wi, {
                    modelValue: he.value,
                    "onUpdate:modelValue": [
                      q[7] || (q[7] = (X) => he.value = X),
                      Ee
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(vo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  C(wi, {
                    modelValue: se.value,
                    "onUpdate:modelValue": [
                      q[8] || (q[8] = (X) => se.value = X),
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
        b.value ? (n(), R(la, {
          key: 0,
          variant: (b.value.type === "success", "compact")
        }, {
          default: g(() => [
            s("span", {
              style: Wt({ color: b.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(b.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), Xr = /* @__PURE__ */ Se(d2, [["__scopeId", "data-v-f1bdc574"]]), f2 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = $(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), R(At, null, {
      header: g(() => [
        C(Ut, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, u;
            return [
              C(Te, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (c) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = t.value) != null && u.hasChanges ? (n(), R(Te, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (c) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  x(" Reset ", -1)
                ])]),
                _: 1
              })) : h("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        C(Xr, {
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
}, g2 = /* @__PURE__ */ be({
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
    return (t, o) => (n(), R(Vt, {
      status: e.isCurrent ? "synced" : void 0
    }, Yt({
      icon: g(() => [
        x(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        s("div", m2, [
          s("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", v2, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", p2, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          x(" " + f(e.currentBranch), 1)
        ])) : h("", !0)
      ]),
      actions: g(() => [
        st(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          C(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          C(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          C(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), R(_t, {
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
}, Z2 = { class: "value" }, e$ = { class: "footer-actions" }, t$ = /* @__PURE__ */ be({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = $(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const u = L(() => {
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
    return (d, m) => (n(), R(Et, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: m[6] || (m[6] = (v) => a("close"))
    }, {
      body: g(() => {
        var v, p, _, w, k, b, y, S, N, M, P, T, F, j;
        return [
          s("div", y2, [
            s("div", w2, [
              m[7] || (m[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Ve(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", _2, [
              m[8] || (m[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", k2, f(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (n(), i("div", b2, [
              m[9] || (m[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", $2, f(e.environment.path), 1)
            ])) : h("", !0),
            m[18] || (m[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", C2, [
              s("div", {
                class: "collapsible-header",
                onClick: m[0] || (m[0] = (E) => r("workflows"))
              }, [
                m[10] || (m[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", x2, f(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (_ = e.detail) != null && _.workflows && l.value.has("workflows") ? (n(), i("div", S2, [
                s("div", I2, [
                  (n(!0), i(G, null, ge(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    s("span", E2, f(E), 1),
                    m[11] || (m[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(G, null, ge(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    s("span", T2, f(E), 1),
                    m[12] || (m[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(G, null, ge(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    s("span", M2, f(E), 1),
                    m[13] || (m[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(G, null, ge(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    s("span", P2, f(E), 1),
                    m[14] || (m[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (n(), i("div", R2, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            s("div", N2, [
              s("div", {
                class: "collapsible-header",
                onClick: m[1] || (m[1] = (E) => r("nodes"))
              }, [
                m[15] || (m[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", L2, f(((w = e.detail) == null ? void 0 : w.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (b = e.detail) != null && b.nodes && l.value.has("nodes") ? (n(), i("div", D2, [
                s("div", O2, [
                  (n(!0), i(G, null, ge(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    s("span", A2, f(E.name), 1),
                    E.version ? (n(), i("span", U2, f(E.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (n(), i("div", z2, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            s("div", V2, [
              s("div", {
                class: "collapsible-header",
                onClick: m[2] || (m[2] = (E) => r("models"))
              }, [
                m[16] || (m[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", F2, [
                  x(f(((y = e.detail) == null ? void 0 : y.model_count) ?? e.environment.model_count) + " ", 1),
                  (N = (S = e.detail) == null ? void 0 : S.models) != null && N.missing.length ? (n(), i("span", B2, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (M = e.detail) != null && M.models ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (n(), i("div", W2, [
                s("div", G2, [
                  (n(!0), i(G, null, ge(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", j2, [
                      s("span", H2, f(E.filename), 1),
                      s("span", {
                        class: Ve(["criticality-badge", E.criticality])
                      }, f(E.criticality), 3)
                    ]),
                    s("div", q2, [
                      s("span", K2, f(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", J2, " used by: " + f(E.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (n(), i("div", Q2, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (T = e.detail) != null && T.created_at || e.environment.created_at ? (n(), i("div", Y2)) : h("", !0),
            (F = e.detail) != null && F.created_at || e.environment.created_at ? (n(), i("div", X2, [
              m[17] || (m[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Z2, f(c(((j = e.detail) == null ? void 0 : j.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        s("div", e$, [
          C(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: m[3] || (m[3] = (v) => a("export", e.environment.name))
          }, {
            default: g(() => [...m[19] || (m[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), R(Ne, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: m[4] || (m[4] = (v) => a("delete", e.environment.name))
          }, {
            default: g(() => [...m[20] || (m[20] = [
              x(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          m[22] || (m[22] = s("div", { class: "footer-spacer" }, null, -1)),
          C(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: m[5] || (m[5] = (v) => a("close"))
          }, {
            default: g(() => [...m[21] || (m[21] = [
              x(" Close ", -1)
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
], tc = "auto", o$ = { class: "progress-bar" }, n$ = /* @__PURE__ */ be({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = L(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (n(), i("div", o$, [
      s("div", {
        class: Ve(["progress-fill", e.variant]),
        style: Wt({ width: o.value })
      }, null, 6)
    ]));
  }
}), sc = /* @__PURE__ */ Se(n$, [["__scopeId", "data-v-1beb0512"]]), a$ = { class: "task-progress" }, l$ = { class: "progress-info" }, i$ = { class: "progress-percentage" }, r$ = { class: "progress-message" }, c$ = {
  key: 0,
  class: "progress-steps"
}, u$ = { class: "step-icon" }, d$ = { class: "step-label" }, f$ = /* @__PURE__ */ be({
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
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", a$, [
      C(sc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", l$, [
        s("span", i$, f(e.progress) + "%", 1),
        s("span", r$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", c$, [
        (n(!0), i(G, null, ge(e.steps, (u) => (n(), i("div", {
          key: u.id,
          class: Ve(["step", o(u.id)])
        }, [
          s("span", u$, f(a(u.id)), 1),
          s("span", d$, f(u.label), 1)
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
}, L$ = 10, D$ = /* @__PURE__ */ be({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = pt(), c = $(""), d = $(ec), m = $("latest"), v = $(tc), p = $(!1), _ = $(null), w = $(!1), k = $(!1);
    let b = null, y = 0;
    const S = L(() => !!c.value.trim() && k.value && !_.value && !w.value && !P.value), N = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), M = $(!1), P = $(!1), T = $({
      progress: 0,
      message: ""
    });
    let F = null, j = 0;
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
    ], V = $(null);
    kt(c, (oe) => {
      k.value = !1, b && (clearTimeout(b), b = null);
      const ye = oe.trim();
      if (!ye) {
        _.value = null, w.value = !1;
        return;
      }
      w.value = !0, b = setTimeout(() => {
        ie(ye);
      }, 400);
    });
    async function ie(oe, ye = !1) {
      const A = oe.trim();
      if (!A)
        return k.value = !1, w.value = !1, _.value = ye ? "Environment name is required" : null, !1;
      const me = ++y;
      w.value = !0;
      try {
        const Pe = await u(A);
        return me !== y ? !1 : (_.value = Pe.valid ? null : Pe.error || "Invalid name", k.value = !!Pe.valid, !!Pe.valid);
      } catch {
        return me !== y || (_.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        me === y && (w.value = !1);
      }
    }
    async function ee() {
      b && (clearTimeout(b), b = null), await ie(c.value, !0);
    }
    function Y() {
      P.value || o("close");
    }
    async function he() {
      const oe = c.value.trim();
      if (!oe) {
        _.value = "Environment name is required";
        return;
      }
      if (b && (clearTimeout(b), b = null), !!await ie(oe, !0)) {
        P.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: oe,
            python_version: d.value,
            comfyui_version: m.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, me = await l(A);
          me.status === "started" ? se() : me.status === "error" && (T.value = {
            progress: 0,
            message: me.message || "Failed to start creation",
            error: me.message
          });
        } catch (A) {
          T.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function se() {
      F || (j = 0, F = window.setInterval(async () => {
        try {
          const oe = await r();
          j = 0, T.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase,
            error: oe.error
          }, oe.state === "complete" ? (J(), o("created", oe.environment_name || c.value.trim(), p.value)) : oe.state === "error" ? (J(), T.value.error = oe.error || oe.message) : oe.state === "idle" && P.value && (J(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          j++, j >= L$ && (J(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function J() {
      F && (clearInterval(F), F = null);
    }
    function le() {
      P.value = !1, T.value = { progress: 0, message: "" }, o("close");
    }
    async function Ue() {
      M.value = !0;
      try {
        N.value = await a();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        M.value = !1;
      }
    }
    return ct(async () => {
      var oe;
      await Pt(), (oe = V.value) == null || oe.focus(), Ue();
    }), Po(() => {
      J(), b && (clearTimeout(b), b = null);
    }), (oe, ye) => (n(), R(Et, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: Y
    }, {
      body: g(() => [
        P.value ? (n(), i("div", E$, [
          s("p", T$, [
            ye[12] || (ye[12] = x(" Creating environment ", -1)),
            s("strong", null, f(c.value), 1),
            ye[13] || (ye[13] = x("... ", -1))
          ]),
          C(jn, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? h("", !0) : (n(), i("p", M$, " This may take several minutes. Please wait... ")),
          T.value.error ? (n(), i("div", P$, [
            s("p", R$, f(T.value.error), 1)
          ])) : h("", !0)
        ])) : (n(), i("div", m$, [
          s("div", v$, [
            ye[6] || (ye[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", p$, [
              St(s("input", {
                ref_key: "nameInput",
                ref: V,
                "onUpdate:modelValue": ye[0] || (ye[0] = (A) => c.value = A),
                type: "text",
                class: Ve(["form-input", { error: !!_.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: fs(he, ["enter"]),
                onBlur: ee
              }, null, 34), [
                [no, c.value]
              ]),
              w.value ? (n(), i("span", g$, "...")) : k.value ? (n(), i("span", h$, "✓")) : h("", !0)
            ]),
            _.value ? (n(), i("div", y$, f(_.value), 1)) : h("", !0),
            ye[7] || (ye[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", w$, [
            ye[8] || (ye[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            St(s("select", {
              "onUpdate:modelValue": ye[1] || (ye[1] = (A) => d.value = A),
              class: "form-select"
            }, [
              (n(!0), i(G, null, ge(tt(Zr), (A) => (n(), i("option", {
                key: A,
                value: A
              }, f(A), 9, _$))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          s("div", k$, [
            ye[9] || (ye[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            St(s("select", {
              "onUpdate:modelValue": ye[2] || (ye[2] = (A) => m.value = A),
              class: "form-select",
              disabled: M.value
            }, [
              (n(!0), i(G, null, ge(N.value, (A) => (n(), i("option", {
                key: A.tag_name,
                value: A.tag_name
              }, f(A.name), 9, $$))), 128))
            ], 8, b$), [
              [Co, m.value]
            ])
          ]),
          s("div", C$, [
            ye[10] || (ye[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            St(s("select", {
              "onUpdate:modelValue": ye[3] || (ye[3] = (A) => v.value = A),
              class: "form-select"
            }, [
              (n(!0), i(G, null, ge(tt(Sl), (A) => (n(), i("option", {
                key: A,
                value: A
              }, f(A) + f(A === "auto" ? " (detect GPU)" : ""), 9, x$))), 128))
            ], 512), [
              [Co, v.value]
            ])
          ]),
          s("div", S$, [
            s("label", I$, [
              St(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ye[4] || (ye[4] = (A) => p.value = A)
              }, null, 512), [
                [Wn, p.value]
              ]),
              ye[11] || (ye[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        P.value ? (n(), i(G, { key: 1 }, [
          T.value.error ? (n(), R(Ne, {
            key: 0,
            variant: "secondary",
            onClick: le
          }, {
            default: g(() => [...ye[16] || (ye[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", N$, " Creating environment... "))
        ], 64)) : (n(), i(G, { key: 0 }, [
          C(Ne, {
            variant: "primary",
            disabled: !S.value,
            onClick: he
          }, {
            default: g(() => [...ye[14] || (ye[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Ne, {
            variant: "secondary",
            onClick: ye[5] || (ye[5] = (A) => o("close"))
          }, {
            default: g(() => [...ye[15] || (ye[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), O$ = /* @__PURE__ */ Se(D$, [["__scopeId", "data-v-3faa3d9b"]]), A$ = /* @__PURE__ */ be({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = pt(), u = $([]), c = $(!1), d = $(null), m = $(""), v = $(!1), p = $(!1), _ = $(null), w = $(null), k = L(() => [...u.value].sort((F, j) => F.is_current !== j.is_current ? F.is_current ? -1 : 1 : F.name.localeCompare(j.name))), b = L(() => {
      if (!m.value.trim()) return k.value;
      const F = m.value.toLowerCase();
      return k.value.filter(
        (j) => {
          var E;
          return j.name.toLowerCase().includes(F) || ((E = j.current_branch) == null ? void 0 : E.toLowerCase().includes(F));
        }
      );
    });
    function y(F, j) {
      p.value = !1, a("created", F, j);
    }
    function S() {
      p.value = !0;
    }
    async function N(F) {
      _.value = F, w.value = null;
      const j = await r(F.name);
      j && (w.value = j);
    }
    function M(F) {
      _.value = null, w.value = null, a("delete", F);
    }
    function P(F) {
      _.value = null, w.value = null, a("export", F);
    }
    async function T() {
      c.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return ct(T), t({
      loadEnvironments: T,
      openCreateModal: S
    }), (F, j) => (n(), i(G, null, [
      C(At, null, {
        header: g(() => [
          C(Ut, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: j[1] || (j[1] = (E) => v.value = !0)
          }, {
            actions: g(() => [
              e.canCreate ? (n(), R(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: g(() => [...j[7] || (j[7] = [
                  x(" Create ", -1)
                ])]),
                _: 1
              })) : h("", !0),
              C(Te, {
                variant: "secondary",
                size: "sm",
                onClick: j[0] || (j[0] = (E) => F.$emit("import"))
              }, {
                default: g(() => [...j[8] || (j[8] = [
                  x(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(ro, {
            modelValue: m.value,
            "onUpdate:modelValue": j[2] || (j[2] = (E) => m.value = E),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), R(Cs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), R(xs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            b.value.length ? (n(), R(It, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(b.value, (E) => (n(), R(h2, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    !E.is_current && e.canSwitch ? (n(), R(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => F.$emit("switch", E.name)
                    }, {
                      default: g(() => [...j[9] || (j[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : h("", !0),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => N(E)
                    }, {
                      default: g(() => [...j[10] || (j[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => F.$emit("export", E.name)
                    }, {
                      default: g(() => [...j[11] || (j[11] = [
                        x(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            b.value.length ? h("", !0) : (n(), R(rs, {
              key: 1,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  e.canCreate ? (n(), R(Te, {
                    key: 0,
                    variant: "primary",
                    onClick: S
                  }, {
                    default: g(() => [...j[12] || (j[12] = [
                      x(" Create Environment ", -1)
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
      C(cs, {
        show: v.value,
        title: "About Environments",
        onClose: j[4] || (j[4] = (E) => v.value = !1)
      }, {
        content: g(() => [...j[13] || (j[13] = [
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
        actions: g(() => [
          C(Te, {
            variant: "secondary",
            onClick: j[3] || (j[3] = (E) => v.value = !1)
          }, {
            default: g(() => [...j[14] || (j[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), R(s$, {
        key: 0,
        environment: _.value,
        detail: w.value,
        "can-delete": e.canDelete && u.value.length > 1,
        onClose: j[5] || (j[5] = (E) => {
          _.value = null, w.value = null;
        }),
        onDelete: M,
        onExport: P
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      p.value ? (n(), R(O$, {
        key: 1,
        onClose: j[6] || (j[6] = (E) => p.value = !1),
        onCreated: y
      })) : h("", !0)
    ], 64));
  }
}), U$ = /* @__PURE__ */ Se(A$, [["__scopeId", "data-v-01163d8c"]]), z$ = { class: "file-path" }, V$ = { class: "file-path-text" }, F$ = ["title"], B$ = /* @__PURE__ */ be({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = $(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", z$, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", V$, f(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, f(o.value ? "✓" : "📋"), 9, F$)) : h("", !0)
    ]));
  }
}), W$ = /* @__PURE__ */ Se(B$, [["__scopeId", "data-v-f0982173"]]), G$ = { class: "base-textarea-wrapper" }, j$ = ["value", "rows", "placeholder", "disabled", "maxlength"], H$ = {
  key: 0,
  class: "base-textarea-count"
}, q$ = /* @__PURE__ */ be({
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
    return (r, u) => (n(), i("div", G$, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (c) => r.$emit("update:modelValue", c.target.value)),
        onKeydown: [
          u[1] || (u[1] = fs(ft((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = fs(ft((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          fs(l, ["enter"])
        ]
      }, null, 40, j$),
      e.showCharCount && e.maxLength ? (n(), i("div", H$, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : h("", !0)
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
}, X$ = /* @__PURE__ */ be({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", {
      class: Ve(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, K$),
      s("span", J$, [
        e.modelValue ? (n(), i("svg", Q$, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      t.$slots.default ? (n(), i("span", Y$, [
        st(t.$slots, "default", {}, void 0)
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
}, fC = /* @__PURE__ */ be({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = pt(), r = $(""), u = $(!1), c = $(!1), d = $(""), m = co({}), v = L(() => o.mode === "publish" ? "Publish" : "Export"), p = L(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), _ = L(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), w = L(
      () => _.value && !c.value
    ), k = L(
      () => p.value && r.value.trim() !== "" && !u.value && !w.value
    );
    function b(S) {
      const N = o.issues[S];
      return m[S] || N.details.length <= 3 ? N.details : N.details.slice(0, 3);
    }
    async function y() {
      var S;
      if (k.value) {
        u.value = !0, d.value = "";
        try {
          const N = await l(r.value.trim(), c.value);
          if (N.status === "success")
            a("committed");
          else if (N.status === "blocked") {
            const M = ((S = N.issues) == null ? void 0 : S.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${M}`;
          } else
            d.value = N.message || "Commit failed";
        } catch (N) {
          d.value = N instanceof Error ? N.message : "Commit failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return (S, N) => (n(), R(Et, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: N[4] || (N[4] = (M) => S.$emit("close"))
    }, {
      body: g(() => [
        s("div", Z$, [
          s("div", eC, [
            N[5] || (N[5] = s("span", { class: "error-icon" }, [
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
              s("h3", sC, f(v.value) + " blocked", 1),
              s("p", oC, f(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", nC, [
            (n(!0), i(G, null, ge(e.issues, (M, P) => (n(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", aC, f(M.message), 1),
              M.details.length ? (n(), i("div", lC, [
                (n(!0), i(G, null, ge(b(P), (T, F) => (n(), i("div", {
                  key: F,
                  class: "issue-detail"
                }, f(T), 1))), 128)),
                M.details.length > 3 && !m[P] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (T) => m[P] = !0
                }, " +" + f(M.details.length - 3) + " more ", 9, iC)) : h("", !0)
              ])) : h("", !0),
              s("div", rC, [
                M.type === "uncommitted_workflows" ? (n(), i(G, { key: 0 }, [
                  x(" Commit your workflow changes before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "uncommitted_git_changes" ? (n(), i(G, { key: 1 }, [
                  x(" Commit your changes before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "unresolved_issues" ? (n(), i(G, { key: 2 }, [
                  x(" Resolve all workflow issues before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", cC, [
            _.value ? (n(), i("div", uC, [
              N[7] || (N[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              C(Hn, {
                modelValue: c.value,
                "onUpdate:modelValue": N[0] || (N[0] = (M) => c.value = M),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...N[6] || (N[6] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            C(xo, {
              modelValue: r.value,
              "onUpdate:modelValue": N[1] || (N[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: u.value || w.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: y,
              onCtrlEnter: y
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", dC, f(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        p.value ? (n(), i(G, { key: 0 }, [
          C(Ne, {
            variant: "secondary",
            onClick: N[2] || (N[2] = (M) => S.$emit("close"))
          }, {
            default: g(() => [...N[8] || (N[8] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(Ne, {
            variant: c.value ? "danger" : "primary",
            disabled: !k.value,
            loading: u.value,
            onClick: y
          }, {
            default: g(() => [
              x(f(u.value ? "Committing..." : c.value ? `Force Commit & ${v.value}` : `Commit & ${v.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), R(Ne, {
          key: 1,
          variant: "primary",
          onClick: N[3] || (N[3] = (M) => S.$emit("close"))
        }, {
          default: g(() => [...N[9] || (N[9] = [
            x(" Understood ", -1)
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
}, gC = { class: "success-summary" }, hC = { class: "success-description" }, yC = { class: "warning-header" }, wC = { class: "warning-summary" }, _C = { class: "warning-title" }, kC = { class: "warning-description" }, bC = {
  key: 0,
  class: "models-section"
}, $C = { class: "models-list" }, CC = { class: "model-info" }, xC = { class: "model-filename" }, SC = { class: "model-workflows" }, IC = { key: 0 }, EC = { key: 1 }, TC = { class: "criticality-label" }, MC = ["onClick"], PC = {
  key: 1,
  class: "models-section"
}, RC = { class: "models-list" }, NC = { class: "model-info" }, LC = { class: "model-filename" }, DC = { class: "model-workflows" }, OC = { class: "criticality-label" }, AC = /* @__PURE__ */ be({
  __name: "ExportWarningsModal",
  props: {
    models: {},
    nodes: {},
    mode: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = $(!1), r = $(!1), u = $(null), c = L(() => o.mode || "export"), d = L(() => c.value === "publish" ? "Publish" : "Export"), m = L(() => o.nodes || []), v = L(() => o.models.length + m.value.length), p = L(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3)), _ = L(() => r.value || m.value.length <= 3 ? m.value : m.value.slice(0, 3));
    function w() {
      u.value = null, a("revalidate");
    }
    return (k, b) => (n(), i(G, null, [
      C(Et, {
        title: c.value === "publish" ? "Publish Warnings" : "Export Warnings",
        size: "md",
        onClose: b[4] || (b[4] = (y) => k.$emit("cancel"))
      }, {
        body: g(() => [
          s("div", vC, [
            v.value === 0 ? (n(), i("div", pC, [
              b[6] || (b[6] = s("span", { class: "success-icon" }, [
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
                b[5] || (b[5] = s("h3", { class: "success-title" }, "All dependencies have portable provenance", -1)),
                s("p", hC, " Your environment is ready to " + f(c.value) + ". Recipients will be able to reconstruct declared dependencies automatically. ", 1)
              ])
            ])) : (n(), i(G, { key: 1 }, [
              s("div", yC, [
                b[7] || (b[7] = s("span", { class: "warning-icon" }, [
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
                  s("h3", _C, f(v.value) + " reproducibility warning" + f(v.value !== 1 ? "s" : ""), 1),
                  s("p", kC, " Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Add the missing details, or " + f(c.value) + " anyway. ", 1)
                ])
              ]),
              e.models.length ? (n(), i("div", bC, [
                b[8] || (b[8] = s("div", { class: "section-header" }, " Models without source URLs ", -1)),
                s("div", $C, [
                  (n(!0), i(G, null, ge(p.value, (y) => (n(), i("div", {
                    key: y.hash || y.filename,
                    class: "model-item"
                  }, [
                    s("div", CC, [
                      s("div", xC, f(y.filename), 1),
                      s("div", SC, [
                        y.workflows.length ? (n(), i("span", IC, "Used by: " + f(y.workflows.join(", ")), 1)) : (n(), i("span", EC, "Declared in manifest")),
                        s("span", TC, " • " + f(y.criticality || "required"), 1)
                      ])
                    ]),
                    y.hash ? (n(), i("button", {
                      key: 0,
                      class: "add-source-btn",
                      onClick: (S) => u.value = y.hash
                    }, " Add Source ", 8, MC)) : h("", !0)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (n(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: b[0] || (b[0] = (y) => l.value = !0)
                }, " Show " + f(e.models.length - 3) + " more model" + f(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])) : h("", !0),
              m.value.length ? (n(), i("div", PC, [
                b[9] || (b[9] = s("div", { class: "section-header" }, " Custom nodes without portable provenance ", -1)),
                s("div", RC, [
                  (n(!0), i(G, null, ge(_.value, (y) => (n(), i("div", {
                    key: y.name,
                    class: "model-item"
                  }, [
                    s("div", NC, [
                      s("div", LC, f(y.name), 1),
                      s("div", DC, [
                        x(f(y.reason) + " ", 1),
                        s("span", OC, " • " + f(y.criticality), 1)
                      ])
                    ])
                  ]))), 128))
                ]),
                m.value.length > 3 && !r.value ? (n(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: b[1] || (b[1] = (y) => r.value = !0)
                }, " Show " + f(m.value.length - 3) + " more node" + f(m.value.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])) : h("", !0)
            ], 64))
          ])
        ]),
        footer: g(() => [
          C(Ne, {
            variant: "secondary",
            onClick: b[2] || (b[2] = (y) => k.$emit("cancel"))
          }, {
            default: g(() => [
              x(" Cancel " + f(c.value === "publish" ? "Publish" : "Export"), 1)
            ]),
            _: 1
          }),
          C(Ne, {
            variant: "primary",
            onClick: b[3] || (b[3] = (y) => k.$emit("confirm"))
          }, {
            default: g(() => [
              x(f(v.value === 0 ? d.value : `${d.value} Anyway`), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]),
      u.value ? (n(), R(Cl, {
        key: 0,
        identifier: u.value,
        onClose: w
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), UC = /* @__PURE__ */ Se(AC, [["__scopeId", "data-v-76282a77"]]), zC = { class: "export-card" }, VC = { class: "export-path-row" }, FC = { class: "export-actions" }, BC = {
  key: 1,
  class: "export-warning"
}, WC = /* @__PURE__ */ be({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = pt(), u = $(""), c = $(!1), d = $(!1), m = $(!1), v = $(null), p = $(!1), _ = $(null), w = $(!1), k = $(!1), b = L(() => {
      var ee;
      return ((ee = t.environmentName) == null ? void 0 : ee.trim()) || null;
    }), y = L(() => b.value ? `EXPORT ENVIRONMENT: ${b.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = L(() => b.value ? `Environment '${b.value}' has been exported` : "Your environment has been exported"), N = L(() => c.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function M() {
      c.value = !0, v.value = null;
      try {
        const ee = b.value ? await l(b.value) : await o();
        _.value = ee, ee.can_export ? ie(ee) ? k.value = !0 : await j() : w.value = !0;
      } catch (ee) {
        v.value = {
          status: "error",
          message: ee instanceof Error ? ee.message : "Validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function P() {
      k.value = !1, await j();
    }
    async function T() {
      w.value = !1, c.value = !0;
      try {
        const ee = b.value ? await l(b.value) : await o();
        _.value = ee, ee.can_export ? ie(ee) ? k.value = !0 : await j() : w.value = !0;
      } catch (ee) {
        v.value = {
          status: "error",
          message: ee instanceof Error ? ee.message : "Re-validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function F() {
      try {
        const ee = b.value ? await l(b.value) : await o();
        _.value = ee;
      } catch (ee) {
        console.error("Re-validation failed:", ee);
      }
    }
    async function j() {
      d.value = !0;
      try {
        const ee = b.value ? await r(b.value, u.value || void 0) : await a(u.value || void 0);
        v.value = ee;
      } catch (ee) {
        v.value = {
          status: "error",
          message: ee instanceof Error ? ee.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function E() {
      var ee;
      if ((ee = v.value) != null && ee.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (Y) {
          console.error("Failed to copy path:", Y);
        }
    }
    async function V() {
      var ee;
      if ((ee = v.value) != null && ee.path) {
        m.value = !0;
        try {
          const Y = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!Y.ok)
            throw new Error(`Download failed: ${Y.statusText}`);
          const he = await Y.blob(), se = URL.createObjectURL(he), J = v.value.path.split("/").pop() || "environment-export.tar.gz", le = document.createElement("a");
          le.href = se, le.download = J, document.body.appendChild(le), le.click(), document.body.removeChild(le), URL.revokeObjectURL(se);
        } catch (Y) {
          console.error("Failed to download:", Y), alert(`Download failed: ${Y instanceof Error ? Y.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
      }
    }
    function ie(ee) {
      var Y;
      return ee.warnings.models_without_sources.length > 0 || (((Y = ee.warnings.nodes_without_provenance) == null ? void 0 : Y.length) || 0) > 0;
    }
    return (ee, Y) => (n(), i(G, null, [
      C(At, null, Yt({
        content: g(() => [
          C(It, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              s("div", zC, [
                Y[7] || (Y[7] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", VC, [
                  C(yo, {
                    modelValue: u.value,
                    "onUpdate:modelValue": Y[1] || (Y[1] = (he) => u.value = he),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                s("div", FC, [
                  C(Te, {
                    variant: "primary",
                    size: "md",
                    loading: c.value || d.value,
                    disabled: c.value || d.value,
                    onClick: M
                  }, {
                    default: g(() => [
                      Y[6] || (Y[6] = s("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        s("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        s("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      x(" " + f(N.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (n(), R(It, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              C(Vt, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: g(() => [
                  x(f(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  x(f(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  x(f(v.value.status === "success" ? S.value : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    C(_t, { label: "Saved to:" }, {
                      default: g(() => [
                        C(W$, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (n(), R(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (n(), i("div", BC, [...Y[8] || (Y[8] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      loading: m.value,
                      onClick: V
                    }, {
                      default: g(() => [...Y[9] || (Y[9] = [
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
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: E
                    }, {
                      default: g(() => [...Y[10] || (Y[10] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(Te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: Y[2] || (Y[2] = (he) => v.value = null)
                    }, {
                      default: g(() => [...Y[11] || (Y[11] = [
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
          })) : h("", !0)
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            C(Ut, {
              title: y.value,
              "show-info": !0,
              onInfoClick: Y[0] || (Y[0] = (he) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      C(cs, {
        show: p.value,
        title: "What Gets Exported",
        onClose: Y[3] || (Y[3] = (he) => p.value = !1)
      }, {
        content: g(() => [...Y[12] || (Y[12] = [
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
      w.value && _.value ? (n(), R(mC, {
        key: 0,
        issues: _.value.blocking_issues,
        onClose: Y[4] || (Y[4] = (he) => w.value = !1),
        onCommitted: T
      }, null, 8, ["issues"])) : h("", !0),
      k.value && _.value ? (n(), R(UC, {
        key: 1,
        models: _.value.warnings.models_without_sources,
        nodes: _.value.warnings.nodes_without_provenance,
        onConfirm: P,
        onCancel: Y[5] || (Y[5] = (he) => k.value = !1),
        onRevalidate: F
      }, null, 8, ["models", "nodes"])) : h("", !0)
    ], 64));
  }
}), GC = /* @__PURE__ */ Se(WC, [["__scopeId", "data-v-0636904e"]]), jC = { class: "file-input-wrapper" }, HC = ["accept", "multiple", "disabled"], qC = /* @__PURE__ */ be({
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
    const a = o, l = $(null);
    function r() {
      var c;
      (c = l.value) == null || c.click();
    }
    function u(c) {
      const d = c.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return t({
      triggerInput: r
    }), (c, d) => (n(), i("div", jC, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, HC),
      C(Te, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
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
            x(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), KC = /* @__PURE__ */ Se(qC, [["__scopeId", "data-v-cd192091"]]), JC = {
  key: 0,
  class: "drop-zone-empty"
}, QC = { class: "drop-zone-text" }, YC = { class: "drop-zone-primary" }, XC = { class: "drop-zone-secondary" }, ZC = { class: "drop-zone-actions" }, ex = {
  key: 1,
  class: "drop-zone-file"
}, tx = { class: "file-info" }, sx = { class: "file-details" }, ox = { class: "file-name" }, nx = { class: "file-size" }, ax = /* @__PURE__ */ be({
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
    const o = t, a = $(!1), l = $(null), r = $(0), u = L(() => l.value !== null), c = L(() => {
      var y;
      return ((y = l.value) == null ? void 0 : y.name) || "";
    }), d = L(() => {
      if (!l.value) return "";
      const y = l.value.size;
      return y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / (1024 * 1024)).toFixed(1)} MB` : `${(y / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(y) {
      var S;
      y.stopPropagation(), r.value++, (S = y.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function v(y) {
      y.stopPropagation(), y.dataTransfer && (y.dataTransfer.dropEffect = "copy");
    }
    function p(y) {
      y.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function _(y) {
      var N;
      y.stopPropagation(), r.value = 0, a.value = !1;
      const S = (N = y.dataTransfer) == null ? void 0 : N.files;
      S && S.length > 0 && k(S[0]);
    }
    function w(y) {
      y.length > 0 && k(y[0]);
    }
    function k(y) {
      l.value = y, o("fileSelected", y);
    }
    function b() {
      l.value = null, o("clear");
    }
    return (y, S) => (n(), i("div", {
      class: Ve(["file-drop-zone", { "drop-active": a.value, "has-file": u.value }]),
      onDragenter: ft(m, ["prevent"]),
      onDragover: ft(v, ["prevent"]),
      onDragleave: ft(p, ["prevent"]),
      onDrop: ft(_, ["prevent"])
    }, [
      u.value ? (n(), i("div", ex, [
        s("div", tx, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", sx, [
            s("div", ox, f(c.value), 1),
            s("div", nx, f(d.value), 1)
          ])
        ]),
        C(Te, {
          variant: "ghost",
          size: "xs",
          onClick: b,
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
      ])) : (n(), i("div", JC, [
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
        s("div", QC, [
          s("p", YC, f(e.primaryText), 1),
          s("p", XC, f(e.secondaryText), 1)
        ]),
        s("div", ZC, [
          C(KC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: w
          }, {
            default: g(() => [
              x(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), lx = /* @__PURE__ */ Se(ax, [["__scopeId", "data-v-0f79cb86"]]), ix = { class: "commit-hash" }, rx = /* @__PURE__ */ be({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = L(() => t.hash.slice(0, t.length));
    return (a, l) => (n(), i("span", ix, f(o.value), 1));
  }
}), oc = /* @__PURE__ */ Se(rx, [["__scopeId", "data-v-7c333cc6"]]), cx = { class: "import-preview" }, ux = { class: "preview-header" }, dx = {
  key: 0,
  class: "source-env"
}, fx = { class: "preview-content" }, mx = { class: "preview-section" }, vx = { class: "section-header" }, px = { class: "section-info" }, gx = { class: "section-count" }, hx = {
  key: 0,
  class: "item-list"
}, yx = { class: "item-name" }, wx = {
  key: 0,
  class: "item-more"
}, _x = { class: "preview-section" }, kx = { class: "section-header" }, bx = { class: "section-info" }, $x = { class: "section-count" }, Cx = {
  key: 0,
  class: "item-list"
}, xx = { class: "item-details" }, Sx = { class: "item-name" }, Ix = { class: "item-meta" }, Ex = {
  key: 0,
  class: "item-more"
}, Tx = { class: "preview-section" }, Mx = { class: "section-header" }, Px = { class: "section-info" }, Rx = { class: "section-count" }, Nx = {
  key: 0,
  class: "item-list"
}, Lx = { class: "item-name" }, Dx = {
  key: 0,
  class: "item-more"
}, Ox = {
  key: 0,
  class: "preview-section"
}, Ax = { class: "git-info" }, Ux = /* @__PURE__ */ be({
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
    const t = e, o = L(() => t.workflows.length), a = L(() => t.models.length), l = L(() => t.nodes.length);
    function r(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, c) => (n(), i("div", cx, [
      s("div", ux, [
        C(ns, null, {
          default: g(() => [...c[0] || (c[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", dx, [
          c[1] || (c[1] = x(" From: ", -1)),
          C(el, null, {
            default: g(() => [
              x(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      s("div", fx, [
        s("div", mx, [
          s("div", vx, [
            c[3] || (c[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", px, [
              c[2] || (c[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", gx, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", hx, [
            (n(!0), i(G, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[4] || (c[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", yx, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", wx, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        s("div", _x, [
          s("div", kx, [
            c[6] || (c[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", bx, [
              c[5] || (c[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", $x, f(a.value) + " file" + f(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", Cx, [
            (n(!0), i(G, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", xx, [
                s("span", Sx, f(d.filename), 1),
                s("span", Ix, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", Ex, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        s("div", Tx, [
          s("div", Mx, [
            c[9] || (c[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", Px, [
              c[8] || (c[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", Rx, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", Nx, [
            (n(!0), i(G, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[10] || (c[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", Lx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", Dx, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", Ox, [
          c[11] || (c[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", Ax, [
            e.gitBranch ? (n(), R(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                C(el, null, {
                  default: g(() => [
                    x(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : h("", !0),
            e.gitCommit ? (n(), R(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                C(oc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), zx = /* @__PURE__ */ Se(Ux, [["__scopeId", "data-v-182fe113"]]), Vx = { class: "import-config" }, Fx = { class: "config-container" }, Bx = { class: "config-field" }, Wx = { class: "input-wrapper" }, Gx = ["value"], jx = {
  key: 0,
  class: "validating-indicator"
}, Hx = {
  key: 1,
  class: "valid-indicator"
}, qx = {
  key: 0,
  class: "field-error"
}, Kx = { class: "config-field" }, Jx = { class: "strategy-options" }, Qx = ["value", "checked", "onChange"], Yx = { class: "strategy-content" }, Xx = { class: "strategy-label" }, Zx = { class: "strategy-description" }, e3 = { class: "config-field switch-field" }, t3 = { class: "switch-label" }, s3 = ["checked"], o3 = { class: "advanced-section" }, n3 = { class: "advanced-content" }, a3 = { class: "config-field" }, l3 = ["value"], i3 = ["value"], r3 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = $(!1), r = $(!1);
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
      a("update:name", p), r.value = !1, c && clearTimeout(c), p.length > 0 ? (l.value = !0, c = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (v, p) => (n(), i("div", Vx, [
      C(ns, null, {
        default: g(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", Fx, [
        s("div", Bx, [
          C(Pn, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", Wx, [
            s("input", {
              type: "text",
              class: Ve(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, Gx),
            l.value ? (n(), i("span", jx, "...")) : r.value ? (n(), i("span", Hx, "✓")) : h("", !0)
          ]),
          e.nameError ? (n(), i("div", qx, f(e.nameError), 1)) : h("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", Kx, [
          C(Pn, null, {
            default: g(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", Jx, [
            (n(), i(G, null, ge(u, (_) => s("label", {
              key: _.value,
              class: Ve(["strategy-option", { active: e.modelStrategy === _.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: e.modelStrategy === _.value,
                onChange: (w) => a("update:modelStrategy", _.value)
              }, null, 40, Qx),
              s("div", Yx, [
                s("span", Xx, f(_.label), 1),
                s("span", Zx, f(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", e3, [
          s("label", t3, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (_) => a("update:switchAfterImport", _.target.checked))
            }, null, 40, s3),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", o3, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", n3, [
            s("div", a3, [
              C(Pn, null, {
                default: g(() => [...p[7] || (p[7] = [
                  x("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (_) => a("update:torchBackend", _.target.value))
              }, [
                (n(!0), i(G, null, ge(tt(Sl), (_) => (n(), i("option", {
                  key: _,
                  value: _
                }, f(_) + f(_ === "auto" ? " (detect GPU)" : ""), 9, i3))), 128))
              ], 40, l3)
            ])
          ])
        ])
      ])
    ]));
  }
}), c3 = /* @__PURE__ */ Se(r3, [["__scopeId", "data-v-89ea06a1"]]), u3 = { class: "import-flow" }, d3 = {
  key: 0,
  class: "import-empty"
}, f3 = { class: "git-import-section" }, m3 = { class: "git-url-input-row" }, v3 = ["disabled"], p3 = {
  key: 0,
  class: "git-error"
}, g3 = {
  key: 1,
  class: "import-configure"
}, h3 = { class: "selected-file-bar" }, y3 = {
  key: 0,
  class: "file-bar-content"
}, w3 = { class: "file-bar-info" }, _3 = { class: "file-bar-name" }, k3 = { class: "file-bar-size" }, b3 = {
  key: 1,
  class: "file-bar-content"
}, $3 = { class: "file-bar-info" }, C3 = { class: "file-bar-name" }, x3 = {
  key: 0,
  class: "preview-loading"
}, S3 = { class: "import-actions" }, I3 = {
  key: 2,
  class: "import-progress"
}, E3 = { class: "creating-intro" }, T3 = {
  key: 0,
  class: "progress-warning"
}, M3 = {
  key: 1,
  class: "import-error"
}, P3 = { class: "error-message" }, R3 = {
  key: 3,
  class: "import-complete"
}, N3 = { class: "complete-message" }, L3 = { class: "complete-title" }, D3 = { class: "complete-details" }, O3 = { class: "complete-actions" }, A3 = /* @__PURE__ */ be({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Ee, H, Z, q;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: d, executeGitImport: m, getImportProgress: v } = pt();
    let p = null;
    const _ = $(null), w = $(a.resumeImport ?? !1), k = $(!1), b = $(!1), y = $(""), S = $(!1), N = $(null), M = $(""), P = $(null), T = $(!1), F = $(null), j = $(null), E = $({
      name: ((Ee = a.initialProgress) == null ? void 0 : Ee.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), V = $(null), ie = $({
      message: ((H = a.initialProgress) == null ? void 0 : H.message) ?? "Preparing import...",
      phase: ((Z = a.initialProgress) == null ? void 0 : Z.phase) ?? "",
      progress: ((q = a.initialProgress) == null ? void 0 : q.progress) ?? 0,
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
    ], Y = L(() => {
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
    }), he = L(() => !S.value && !N.value && j.value && E.value.name.length > 0 && !V.value && (_.value || P.value));
    async function se(X) {
      _.value = X, S.value = !0, N.value = null, j.value = null;
      try {
        const xe = await r(X);
        j.value = xe;
      } catch (xe) {
        N.value = xe instanceof Error ? xe.message : "Failed to analyze file", console.error("Preview error:", xe);
      } finally {
        S.value = !1;
      }
    }
    function J() {
      _.value = null, P.value = null, M.value = "", F.value = null, k.value = !1, b.value = !1, y.value = "", j.value = null, N.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, V.value = null, l("source-cleared");
    }
    function le() {
      Pe(), J(), w.value = !1, S.value = !1, T.value = !1, ie.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Ue() {
      if (M.value.trim()) {
        T.value = !0, F.value = null;
        try {
          const X = await u(M.value.trim());
          P.value = M.value.trim(), j.value = X;
        } catch (X) {
          F.value = X instanceof Error ? X.message : "Failed to analyze repository";
        } finally {
          T.value = !1;
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
    async function ye(X) {
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
    async function A() {
      if (E.value.name && !(!_.value && !P.value)) {
        w.value = !0, k.value = !1, ie.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let X;
          if (_.value)
            X = await d(
              _.value,
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
          X.status === "started" ? me() : (b.value = !1, y.value = X.message, w.value = !1, k.value = !0);
        } catch (X) {
          b.value = !1, y.value = X instanceof Error ? X.message : "Unknown error occurred during import", w.value = !1, k.value = !0;
        }
      }
    }
    async function me() {
      if (p) return;
      const X = async () => {
        try {
          const de = await v();
          return ie.value = {
            message: de.message,
            phase: de.phase || "",
            progress: de.progress ?? (de.state === "importing" ? 50 : 0),
            error: de.error || null
          }, de.state === "complete" ? (Pe(), b.value = !0, y.value = `Environment '${de.environment_name}' created successfully`, w.value = !1, k.value = !0, de.environment_name && l("import-complete", de.environment_name, E.value.switchAfterImport), !1) : de.state === "error" ? (Pe(), b.value = !1, y.value = de.error || de.message, w.value = !1, k.value = !0, !1) : !0;
        } catch (de) {
          return console.error("Failed to poll import progress:", de), !0;
        }
      };
      await X() && (p = setInterval(async () => {
        await X() || Pe();
      }, 2e3));
    }
    function Pe() {
      p && (clearInterval(p), p = null);
    }
    function Ge(X) {
      return X < 1024 ? `${X} B` : X < 1024 * 1024 ? `${(X / 1024).toFixed(1)} KB` : X < 1024 * 1024 * 1024 ? `${(X / (1024 * 1024)).toFixed(1)} MB` : `${(X / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ct(async () => {
      try {
        const X = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", X.state, X), X.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", X.environment_name), w.value = !0, E.value.name = X.environment_name || E.value.name || "", ie.value = {
          progress: X.progress ?? 0,
          message: X.message || "Importing...",
          phase: X.phase || "",
          error: null
        }, me());
      } catch (X) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", X);
      }
    }), t({
      handleReset: le,
      isImporting: w,
      canImport: he
    }), (X, xe) => {
      var de;
      return n(), i("div", u3, [
        !_.value && !P.value && !w.value ? (n(), i("div", d3, [
          C(lx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: se
          }),
          xe[7] || (xe[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", f3, [
            xe[5] || (xe[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", m3, [
              St(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": xe[0] || (xe[0] = (re) => M.value = re),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: fs(Ue, ["enter"]),
                disabled: T.value
              }, null, 40, v3), [
                [no, M.value]
              ]),
              C(Te, {
                variant: "primary",
                size: "sm",
                disabled: !M.value.trim() || T.value,
                onClick: Ue
              }, {
                default: g(() => [
                  x(f(T.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (n(), i("div", p3, f(F.value), 1)) : h("", !0),
            xe[6] || (xe[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || P.value) && !w.value && !k.value ? (n(), i("div", g3, [
          s("div", h3, [
            _.value ? (n(), i("div", y3, [
              xe[8] || (xe[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", w3, [
                s("div", _3, f(_.value.name), 1),
                s("div", k3, f(Ge(_.value.size)), 1)
              ])
            ])) : P.value ? (n(), i("div", b3, [
              xe[10] || (xe[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", $3, [
                s("div", C3, f(oe(P.value)), 1),
                xe[9] || (xe[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            C(Te, {
              variant: "ghost",
              size: "sm",
              onClick: J
            }, {
              default: g(() => [...xe[11] || (xe[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", x3, [...xe[12] || (xe[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (n(), R(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : j.value ? (n(), R(zx, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          j.value ? (n(), R(c3, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": xe[1] || (xe[1] = (re) => E.value.name = re),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": xe[2] || (xe[2] = (re) => E.value.modelStrategy = re),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": xe[3] || (xe[3] = (re) => E.value.torchBackend = re),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": xe[4] || (xe[4] = (re) => E.value.switchAfterImport = re),
            "name-error": V.value,
            onValidateName: ye
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          E.value.modelStrategy === "skip" && ((de = j.value) != null && de.models_needing_download) ? (n(), R(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          s("div", S3, [
            C(Te, {
              variant: "secondary",
              size: "md",
              onClick: J
            }, {
              default: g(() => [...xe[13] || (xe[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Te, {
              variant: "primary",
              size: "md",
              disabled: !he.value,
              onClick: A
            }, {
              default: g(() => [...xe[14] || (xe[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : w.value ? (n(), i("div", I3, [
          s("p", E3, [
            xe[15] || (xe[15] = x(" Importing environment ", -1)),
            s("strong", null, f(E.value.name), 1),
            xe[16] || (xe[16] = x("... ", -1))
          ]),
          C(jn, {
            progress: ie.value.progress,
            message: ie.value.message,
            "current-phase": ie.value.phase,
            variant: ie.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ee
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ie.value.error ? h("", !0) : (n(), i("p", T3, " This may take several minutes. Please wait... ")),
          ie.value.error ? (n(), i("div", M3, [
            s("p", P3, f(ie.value.error), 1)
          ])) : h("", !0)
        ])) : k.value ? (n(), i("div", R3, [
          s("div", {
            class: Ve(["complete-icon", b.value ? "success" : "error"])
          }, f(b.value ? "✓" : "✕"), 3),
          s("div", N3, [
            s("div", L3, f(b.value ? "Import Successful" : "Import Failed"), 1),
            s("div", D3, f(y.value), 1)
          ]),
          s("div", O3, [
            C(Te, {
              variant: "primary",
              size: "md",
              onClick: le
            }, {
              default: g(() => [...xe[17] || (xe[17] = [
                x(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), nc = /* @__PURE__ */ Se(A3, [["__scopeId", "data-v-72cbc04e"]]), U3 = /* @__PURE__ */ be({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, a = $(!1);
    function l(r, u) {
      u && o("import-complete-switch", r);
    }
    return (r, u) => (n(), i(G, null, [
      C(At, null, Yt({
        content: g(() => [
          C(nc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            C(Ut, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: u[0] || (u[0] = (c) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      C(cs, {
        show: a.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (c) => a.value = !1)
      }, {
        content: g(() => [...u[2] || (u[2] = [
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
}), z3 = /* @__PURE__ */ Se(U3, [["__scopeId", "data-v-41b1f298"]]), V3 = { class: "base-tabs" }, F3 = ["disabled", "onClick"], B3 = {
  key: 0,
  class: "base-tabs__badge"
}, W3 = /* @__PURE__ */ be({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function l(r) {
      var u;
      (u = o.tabs.find((c) => c.id === r)) != null && u.disabled || a("update:modelValue", r);
    }
    return (r, u) => (n(), i("div", V3, [
      (n(!0), i(G, null, ge(e.tabs, (c) => (n(), i("button", {
        key: c.id,
        class: Ve([
          "base-tabs__tab",
          {
            active: e.modelValue === c.id,
            disabled: c.disabled
          }
        ]),
        disabled: c.disabled,
        onClick: (d) => l(c.id)
      }, [
        x(f(c.label) + " ", 1),
        c.badge ? (n(), i("span", B3, f(c.badge), 1)) : h("", !0)
      ], 10, F3))), 128))
    ]));
  }
}), Il = /* @__PURE__ */ Se(W3, [["__scopeId", "data-v-ad5e6cad"]]), G3 = { class: "commit-list" }, j3 = /* @__PURE__ */ be({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (n(), i("div", G3, [
      st(t.$slots, "default", {}, void 0)
    ]));
  }
}), ac = /* @__PURE__ */ Se(j3, [["__scopeId", "data-v-8c5ee761"]]), H3 = { class: "commit-message" }, q3 = { class: "commit-date" }, K3 = /* @__PURE__ */ be({
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
    return (r, u) => (n(), i("div", {
      class: Ve(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(oc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", H3, f(e.message), 1),
      s("span", q3, f(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = ft(() => {
        }, ["stop"]))
      }, [
        st(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), lc = /* @__PURE__ */ Se(K3, [["__scopeId", "data-v-dd7c621b"]]), J3 = /* @__PURE__ */ be({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = L(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (n(), R(At, null, Yt({
      content: g(() => [
        e.commits.length === 0 ? (n(), R(rs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), R(ac, { key: 1 }, {
          default: g(() => [
            (n(!0), i(G, null, ge(e.commits, (r) => (n(), R(lc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => a.$emit("select", r)
            }, {
              actions: g(() => [
                C(Te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => a.$emit("checkout", r),
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
          C(Ut, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), Q3 = /* @__PURE__ */ Se(J3, [["__scopeId", "data-v-fa4bf3a1"]]), Y3 = { class: "branch-create-form" }, X3 = { class: "form-actions" }, Z3 = /* @__PURE__ */ be({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, a = $(""), l = L(() => {
      const c = a.value.trim();
      return c.length > 0 && !c.startsWith("-") && !c.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(c);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function u() {
      a.value = "", o("cancel");
    }
    return (c, d) => (n(), i("div", Y3, [
      C(yo, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => a.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      s("div", X3, [
        C(Te, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: g(() => [...d[1] || (d[1] = [
            x(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(Te, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: g(() => [...d[2] || (d[2] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), e5 = /* @__PURE__ */ Se(Z3, [["__scopeId", "data-v-7c500394"]]), t5 = { class: "branch-list-item__indicator" }, s5 = { class: "branch-list-item__name" }, o5 = {
  key: 0,
  class: "branch-list-item__actions"
}, n5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, a5 = /* @__PURE__ */ be({
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
      class: Ve(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", t5, f(e.isCurrent ? "●" : "○"), 1),
      s("span", s5, f(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (n(), i("div", o5, [
        st(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", n5, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), l5 = /* @__PURE__ */ Se(a5, [["__scopeId", "data-v-c6581a24"]]), i5 = { class: "header-info" }, r5 = { class: "branch-name" }, c5 = {
  key: 0,
  class: "current-badge"
}, u5 = { class: "branch-meta" }, d5 = { key: 0 }, f5 = {
  key: 0,
  class: "meta-note"
}, m5 = {
  key: 0,
  class: "loading"
}, v5 = {
  key: 1,
  class: "empty-state"
}, p5 = /* @__PURE__ */ be({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = pt(), a = $([]), l = $(!1), r = $(!0);
    return ct(async () => {
      try {
        const u = await o(t.branchName, 50);
        a.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (n(), R(Et, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (d) => u.$emit("close"))
    }, {
      header: g(() => [
        s("div", i5, [
          c[4] || (c[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", r5, f(e.branchName), 1),
          e.isCurrent ? (n(), i("span", c5, "CURRENT")) : h("", !0)
        ]),
        C(Ne, {
          variant: "ghost",
          size: "sm",
          onClick: c[0] || (c[0] = (d) => u.$emit("close"))
        }, {
          default: g(() => [...c[5] || (c[5] = [
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
        s("div", u5, [
          r.value ? (n(), i("span", d5, "Loading...")) : (n(), i(G, { key: 1 }, [
            s("span", null, f(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", f5, "(showing first " + f(a.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", m5, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", v5, " No commits found on this branch ")) : (n(), R(ac, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(G, null, ge(a.value, (d) => (n(), R(lc, {
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
        e.isCurrent ? h("", !0) : (n(), R(Te, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: c[1] || (c[1] = (d) => u.$emit("delete", e.branchName))
        }, {
          default: g(() => [...c[6] || (c[6] = [
            x(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        c[8] || (c[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (n(), R(Ne, {
          key: 1,
          variant: "primary",
          onClick: c[2] || (c[2] = (d) => u.$emit("switch", e.branchName))
        }, {
          default: g(() => [...c[7] || (c[7] = [
            x(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), g5 = /* @__PURE__ */ Se(p5, [["__scopeId", "data-v-2e5437cc"]]), h5 = {
  key: 2,
  class: "branch-list"
}, y5 = /* @__PURE__ */ be({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, a = $(!1), l = $(null);
    function r(v) {
      o("create", v), u();
    }
    function u() {
      a.value = !1;
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
    return (v, p) => (n(), R(At, null, Yt({
      content: g(() => [
        a.value ? (n(), R(e5, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : h("", !0),
        e.branches.length === 0 ? (n(), R(rs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", h5, [
          (n(!0), i(G, null, ge(e.branches, (_) => (n(), R(l5, {
            key: _.name,
            "branch-name": _.name,
            "is-current": _.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (w) => c(_)
          }, {
            actions: g(() => [
              _.is_current ? h("", !0) : (n(), R(Te, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: ft((w) => o("switch", _.name), ["stop"])
              }, {
                default: g(() => [...p[3] || (p[3] = [
                  x(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), R(g5, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[1] || (p[1] = (_) => l.value = null),
          onDelete: d,
          onSwitch: m
        }, null, 8, ["branch-name", "is-current"])) : h("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: g(() => [
          C(Ut, { title: "BRANCHES" }, {
            actions: g(() => [
              a.value ? h("", !0) : (n(), R(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (_) => a.value = !0)
              }, {
                default: g(() => [...p[2] || (p[2] = [
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
}), w5 = /* @__PURE__ */ Se(y5, [["__scopeId", "data-v-a3de96cc"]]);
function ic(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const _5 = { class: "remote-url-display" }, k5 = ["title"], b5 = ["title"], $5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, C5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, x5 = /* @__PURE__ */ be({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = $(!1), a = L(() => {
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
    return (r, u) => (n(), i("div", _5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, f(a.value), 9, k5),
      s("button", {
        class: Ve(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", C5, [...u[1] || (u[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", $5, [...u[0] || (u[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, b5)
    ]));
  }
}), S5 = /* @__PURE__ */ Se(x5, [["__scopeId", "data-v-7768a58d"]]), I5 = { class: "remote-title" }, E5 = {
  key: 0,
  class: "default-badge"
}, T5 = {
  key: 1,
  class: "sync-badge"
}, M5 = {
  key: 0,
  class: "ahead"
}, P5 = {
  key: 1,
  class: "behind"
}, R5 = {
  key: 1,
  class: "synced"
}, N5 = ["href"], L5 = {
  key: 1,
  class: "remote-url-text"
}, D5 = /* @__PURE__ */ be({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = L(() => t.fetchingRemote === t.remote.name), a = L(() => t.remote.is_default), l = L(() => t.syncStatus && t.syncStatus.behind > 0), r = L(() => t.syncStatus && t.syncStatus.ahead > 0), u = L(() => t.remote.push_url !== t.remote.fetch_url), c = L(() => {
      const m = t.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = L(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (n(), R(Vt, {
      status: a.value ? "synced" : void 0
    }, Yt({
      icon: g(() => [
        x(f(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        s("div", I5, [
          s("span", null, f(e.remote.name), 1),
          a.value ? (n(), i("span", E5, "DEFAULT")) : h("", !0),
          e.syncStatus ? (n(), i("span", T5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", M5, "↑" + f(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", P5, "↓" + f(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (n(), i("span", R5, "✓ synced"))
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
          onClick: v[0] || (v[0] = ft(() => {
          }, ["stop"]))
        }, f(d.value), 9, N5)) : (n(), i("span", L5, f(d.value), 1))
      ]),
      actions: g(() => [
        C(Te, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (p) => m.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...v[6] || (v[6] = [
            x(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        C(Te, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => m.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            x(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(Te, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => m.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            x(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(Te, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => m.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            x(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? h("", !0) : (n(), R(Te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => m.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...v[8] || (v[8] = [
            x(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), R(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              C(S5, {
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
}), O5 = /* @__PURE__ */ Se(D5, [["__scopeId", "data-v-8310f3a8"]]), A5 = ["for"], U5 = {
  key: 0,
  class: "base-form-field-required"
}, z5 = { class: "base-form-field-input" }, V5 = {
  key: 1,
  class: "base-form-field-error"
}, F5 = {
  key: 2,
  class: "base-form-field-hint"
}, B5 = /* @__PURE__ */ be({
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
    const t = e, o = L(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Ve(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        x(f(e.label) + " ", 1),
        e.required ? (n(), i("span", U5, "*")) : h("", !0)
      ], 8, A5)) : h("", !0),
      s("div", z5, [
        st(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", V5, f(e.error), 1)) : e.hint ? (n(), i("span", F5, f(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ Se(B5, [["__scopeId", "data-v-9a1cf296"]]), W5 = { class: "remote-form" }, G5 = { class: "form-header" }, j5 = { class: "form-body" }, H5 = {
  key: 0,
  class: "form-error"
}, q5 = { class: "form-actions" }, K5 = /* @__PURE__ */ be({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = $({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = $(!1), u = $(null);
    kt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const c = L(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!c.value || r.value)) {
        u.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (m) {
          u.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (m, v) => (n(), i("div", W5, [
      s("div", G5, [
        C(ns, null, {
          default: g(() => [
            x(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", j5, [
        C(Dt, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            C(wt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        C(Dt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            C(wt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(Dt, { label: "Push URL (optional)" }, {
          default: g(() => [
            C(wt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (n(), i("div", H5, f(u.value), 1)) : h("", !0)
      ]),
      s("div", q5, [
        C(Te, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: r.value,
          onClick: d
        }, {
          default: g(() => [
            x(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(Te, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => m.$emit("cancel"))
        }, {
          default: g(() => [...v[4] || (v[4] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), J5 = /* @__PURE__ */ Se(K5, [["__scopeId", "data-v-56021b18"]]), Q5 = { class: "conflict-summary-box" }, Y5 = { class: "summary-header" }, X5 = { class: "summary-text" }, Z5 = { key: 0 }, e8 = {
  key: 1,
  class: "all-resolved"
}, t8 = { class: "summary-progress" }, s8 = { class: "progress-bar" }, o8 = { class: "progress-text" }, n8 = /* @__PURE__ */ be({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = L(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", Q5, [
      s("div", Y5, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", X5, [
          s("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", Z5, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (n(), i("p", e8, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      s("div", t8, [
        s("div", s8, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", o8, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), a8 = /* @__PURE__ */ Se(n8, [["__scopeId", "data-v-4e9e6cc9"]]), l8 = { class: "modal-header" }, i8 = { class: "modal-title" }, r8 = { class: "modal-body" }, c8 = {
  key: 0,
  class: "error-box"
}, u8 = {
  key: 0,
  class: "error-hint"
}, d8 = {
  key: 1,
  class: "loading-state"
}, f8 = { class: "commit-summary" }, m8 = {
  key: 0,
  class: "commits-section"
}, v8 = { class: "commit-list" }, p8 = { class: "commit-hash" }, g8 = { class: "commit-message" }, h8 = { class: "commit-date" }, y8 = {
  key: 1,
  class: "changes-section"
}, w8 = {
  key: 0,
  class: "change-group",
  open: ""
}, _8 = { class: "change-count" }, k8 = { class: "change-list" }, b8 = {
  key: 0,
  class: "conflict-badge"
}, $8 = {
  key: 1,
  class: "change-group"
}, C8 = { class: "change-count" }, x8 = { class: "change-list" }, S8 = {
  key: 2,
  class: "change-group"
}, I8 = { class: "change-count" }, E8 = { class: "change-list" }, T8 = {
  key: 3,
  class: "strategy-section"
}, M8 = { class: "radio-group" }, P8 = { class: "radio-option" }, R8 = { class: "radio-option" }, N8 = { class: "radio-option" }, L8 = {
  key: 4,
  class: "up-to-date"
}, D8 = { class: "modal-actions" }, _i = "comfygit.pullModelStrategy", O8 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = $(localStorage.getItem(_i) || "skip");
    kt(l, (y) => {
      localStorage.setItem(_i, y);
    });
    const r = L(() => {
      var y;
      return ((y = o.error) == null ? void 0 : y.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = L(() => {
      if (!o.preview) return 0;
      const y = o.preview.changes.workflows;
      return y.added.length + y.modified.length + y.deleted.length;
    }), c = L(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = L(() => {
      var y;
      return u.value > 0 || c.value > 0 || (((y = o.preview) == null ? void 0 : y.changes.models.count) || 0) > 0;
    }), m = L(() => o.preview && ic(o.preview) ? o.preview : null), v = L(() => {
      var y;
      return ((y = m.value) == null ? void 0 : y.workflow_conflicts.length) ?? 0;
    }), p = L(() => {
      var y;
      return ((y = o.conflictResolutions) == null ? void 0 : y.size) ?? 0;
    }), _ = L(
      () => v.value > 0 && p.value === v.value
    ), w = L(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !_.value));
    function k(y) {
      if (!m.value) return !1;
      const S = y.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((N) => N.name === S);
    }
    function b(y) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: y, resolutions: S });
    }
    return (y, S) => {
      var N, M;
      return n(), R(Rt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (P) => y.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = ft(() => {
            }, ["stop"]))
          }, [
            s("div", l8, [
              s("h3", i8, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (P) => y.$emit("close"))
              }, "✕")
            ]),
            s("div", r8, [
              e.error ? (n(), i("div", c8, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, f(e.error), 1),
                  r.value ? (n(), i("p", u8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (n(), i("div", d8, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (N = e.preview) != null && N.has_uncommitted_changes ? (n(), i(G, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(G, { key: 3 }, [
                s("div", f8, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", m8, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", v8, [
                    (n(!0), i(G, null, ge(e.preview.commits, (P) => (n(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", p8, f(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", g8, f(P.message), 1),
                      s("span", h8, f(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (n(), i("div", y8, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (n(), i("details", w8, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", _8, f(u.value) + " changes", 1)
                    ]),
                    s("div", k8, [
                      (n(!0), i(G, null, ge(e.preview.changes.workflows.added, (P) => (n(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + f(P), 1))), 128)),
                      (n(!0), i(G, null, ge(e.preview.changes.workflows.modified, (P) => (n(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + f(P) + " ", 1),
                        k(P) ? (n(), i("span", b8, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (n(!0), i(G, null, ge(e.preview.changes.workflows.deleted, (P) => (n(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + f(P), 1))), 128))
                    ])
                  ])) : h("", !0),
                  c.value > 0 ? (n(), i("details", $8, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", C8, f(c.value) + " to install", 1)
                    ]),
                    s("div", x8, [
                      (n(!0), i(G, null, ge(e.preview.changes.nodes.to_install, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + f(P), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", S8, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", I8, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", E8, [
                      (n(!0), i(G, null, ge(e.preview.changes.models.referenced, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item"
                      }, f(P), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                m.value ? (n(), R(a8, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", T8, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", M8, [
                    s("label", P8, [
                      St(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [Mn, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", R8, [
                      St(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [Mn, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", N8, [
                      St(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (P) => l.value = P),
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
                e.preview.commits_behind === 0 ? (n(), i("div", L8, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            s("div", D8, [
              C(Te, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (P) => y.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(G, { key: 0 }, [
                C(Te, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (P) => b(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    x(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(Te, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (P) => b(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    x(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = e.preview) != null && M.has_uncommitted_changes ? (n(), R(Te, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (P) => b(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(G, { key: 2 }, [
                m.value && !_.value ? (n(), R(Te, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (P) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    x(" Resolve Conflicts (" + f(p.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), R(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !w.value,
                  onClick: S[9] || (S[9] = (P) => b(!1))
                }, {
                  default: g(() => [...S[34] || (S[34] = [
                    x(" Pull Changes ", -1)
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
}), A8 = /* @__PURE__ */ Se(O8, [["__scopeId", "data-v-1d633bba"]]), U8 = { class: "readiness-header" }, z8 = { class: "readiness-body" }, V8 = {
  key: 0,
  class: "issue-section"
}, F8 = { class: "section-heading" }, B8 = { class: "issue-list" }, W8 = { class: "issue-main" }, G8 = { class: "issue-name" }, j8 = { class: "issue-meta" }, H8 = { key: 0 }, q8 = { key: 1 }, K8 = ["onSubmit"], J8 = ["onUpdate:modelValue"], Q8 = ["disabled"], Y8 = {
  key: 1,
  class: "issue-note"
}, X8 = {
  key: 1,
  class: "issue-section"
}, Z8 = { class: "section-heading" }, eS = { class: "issue-list" }, tS = { class: "issue-main" }, sS = { class: "issue-name" }, oS = { class: "issue-meta" }, nS = { class: "issue-reason" }, aS = ["disabled", "onClick"], lS = {
  key: 1,
  class: "issue-note"
}, iS = {
  key: 2,
  class: "empty-state"
}, rS = {
  key: 3,
  class: "error-message"
}, cS = { class: "readiness-footer" }, uS = /* @__PURE__ */ be({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, a = t, { addModelSource: l, updateNodeCriticality: r } = pt(), u = $({}), c = $(null), d = $(null), m = $(null), v = L(() => o.warnings.models_without_sources), p = L(() => o.warnings.nodes_without_provenance);
    async function _(k) {
      d.value = k, m.value = null;
      try {
        const b = await r(k, "optional");
        if (b.status !== "success") {
          m.value = b.message || `Failed to update ${k}`;
          return;
        }
        a("revalidate");
      } catch (b) {
        m.value = b instanceof Error ? b.message : `Failed to update ${k}`;
      } finally {
        d.value = null;
      }
    }
    async function w(k) {
      var y;
      const b = (y = u.value[k]) == null ? void 0 : y.trim();
      if (b) {
        c.value = k, m.value = null;
        try {
          await l(k, b), u.value[k] = "", a("revalidate");
        } catch (S) {
          m.value = S instanceof Error ? S.message : "Failed to save model source";
        } finally {
          c.value = null;
        }
      }
    }
    return (k, b) => (n(), R(Rt, { to: "body" }, [
      s("div", {
        class: "readiness-overlay",
        onClick: b[4] || (b[4] = (y) => a("close"))
      }, [
        s("div", {
          class: "readiness-modal",
          onClick: b[3] || (b[3] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", U8, [
            b[5] || (b[5] = s("div", null, [
              s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
              s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Optional nodes are still listed as warnings, but they will not be treated as required build inputs. ")
            ], -1)),
            s("button", {
              class: "readiness-close",
              onClick: b[0] || (b[0] = (y) => a("close"))
            }, "x")
          ]),
          s("div", z8, [
            v.value.length ? (n(), i("section", V8, [
              s("div", F8, [
                b[6] || (b[6] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, f(v.value.length), 1)
              ]),
              s("div", B8, [
                (n(!0), i(G, null, ge(v.value, (y) => {
                  var S;
                  return n(), i("article", {
                    key: y.hash || y.filename,
                    class: "issue-item"
                  }, [
                    s("div", W8, [
                      s("div", G8, f(y.filename), 1),
                      s("div", j8, [
                        y.hash ? (n(), i("span", H8, "hash " + f(y.hash), 1)) : h("", !0),
                        y.workflows.length ? (n(), i("span", q8, "used by " + f(y.workflows.join(", ")), 1)) : h("", !0),
                        s("span", null, f(y.criticality || "required"), 1)
                      ])
                    ]),
                    y.hash ? (n(), i("form", {
                      key: 0,
                      class: "source-form",
                      onSubmit: ft((N) => w(y.hash), ["prevent"])
                    }, [
                      St(s("input", {
                        "onUpdate:modelValue": (N) => u.value[y.hash] = N,
                        class: "source-input",
                        type: "text",
                        placeholder: "Download URL"
                      }, null, 8, J8), [
                        [no, u.value[y.hash]]
                      ]),
                      s("button", {
                        class: "issue-action",
                        disabled: c.value === y.hash || !((S = u.value[y.hash]) != null && S.trim()),
                        type: "submit"
                      }, f(c.value === y.hash ? "Saving..." : "Save Source"), 9, Q8)
                    ], 40, K8)) : (n(), i("span", Y8, "Missing hash"))
                  ]);
                }), 128))
              ])
            ])) : h("", !0),
            p.value.length ? (n(), i("section", X8, [
              s("div", Z8, [
                b[7] || (b[7] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, f(p.value.length), 1)
              ]),
              s("div", eS, [
                (n(!0), i(G, null, ge(p.value, (y) => (n(), i("article", {
                  key: y.name,
                  class: "issue-item"
                }, [
                  s("div", tS, [
                    s("div", sS, f(y.name), 1),
                    s("div", oS, [
                      s("span", null, f(y.source), 1),
                      s("span", null, f(y.criticality), 1)
                    ]),
                    s("p", nS, f(y.reason), 1)
                  ]),
                  y.criticality === "required" ? (n(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === y.name,
                    onClick: (S) => _(y.name)
                  }, f(d.value === y.name ? "Saving..." : "Mark Optional"), 9, aS)) : (n(), i("span", lS, "Optional warning"))
                ]))), 128))
              ])
            ])) : h("", !0),
            !v.value.length && !p.value.length ? (n(), i("div", iS, " No reproducibility issues remain. ")) : h("", !0),
            m.value ? (n(), i("div", rS, f(m.value), 1)) : h("", !0)
          ]),
          s("div", cS, [
            s("button", {
              class: "secondary-action",
              onClick: b[1] || (b[1] = (y) => a("revalidate"))
            }, " Refresh Check "),
            s("button", {
              class: "primary-action",
              onClick: b[2] || (b[2] = (y) => a("close"))
            }, " Done ")
          ])
        ])
      ])
    ]));
  }
}), dS = /* @__PURE__ */ Se(uS, [["__scopeId", "data-v-fe0119ac"]]), fS = { class: "modal-header" }, mS = { class: "modal-title" }, vS = { class: "modal-body" }, pS = {
  key: 0,
  class: "error-box"
}, gS = {
  key: 1,
  class: "loading-state"
}, hS = {
  key: 2,
  class: "warning-box"
}, yS = {
  key: 0,
  class: "warning-box"
}, wS = { class: "warning-list" }, _S = { key: 0 }, kS = {
  key: 1,
  class: "commits-section"
}, bS = { class: "commit-list" }, $S = { class: "commit-hash" }, CS = { class: "commit-message" }, xS = { class: "commit-date" }, SS = { class: "force-option" }, IS = { class: "checkbox-option" }, ES = { class: "commit-summary" }, TS = { key: 0 }, MS = { key: 1 }, PS = {
  key: 0,
  class: "info-box"
}, RS = {
  key: 1,
  class: "warning-box"
}, NS = { class: "warning-list" }, LS = { key: 0 }, DS = {
  key: 2,
  class: "commits-section"
}, OS = { class: "commit-list" }, AS = { class: "commit-hash" }, US = { class: "commit-message" }, zS = { class: "commit-date" }, VS = {
  key: 3,
  class: "up-to-date"
}, FS = { class: "modal-actions" }, BS = /* @__PURE__ */ be({
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
    const o = e, a = t, l = $(!1), r = $(!1), u = L(() => {
      var b;
      return ((b = o.preview) == null ? void 0 : b.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), c = L(
      () => u.value.models_without_sources.length
    ), d = L(
      () => u.value.nodes_without_provenance.length
    ), m = L(
      () => c.value + d.value
    ), v = L(() => m.value > 0), p = L(
      () => u.value.models_without_sources.slice(0, 3)
    ), _ = L(() => {
      const b = Math.max(0, 3 - p.value.length);
      return u.value.nodes_without_provenance.slice(0, b);
    }), w = L(
      () => m.value - p.value.length - _.value.length
    );
    function k(b) {
      a("push", { force: b });
    }
    return (b, y) => {
      var S, N, M, P;
      return n(), i(G, null, [
        (n(), R(Rt, { to: "body" }, [
          e.show ? (n(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: y[9] || (y[9] = (T) => b.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: y[8] || (y[8] = ft(() => {
              }, ["stop"]))
            }, [
              s("div", fS, [
                s("h3", mS, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: y[0] || (y[0] = (T) => b.$emit("close"))
                }, "✕")
              ]),
              s("div", vS, [
                e.error ? (n(), i("div", pS, [
                  y[13] || (y[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    y[12] || (y[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, f(e.error), 1)
                  ])
                ])) : h("", !0),
                e.loading ? (n(), i("div", gS, [...y[14] || (y[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (S = e.preview) != null && S.has_uncommitted_changes ? (n(), i("div", hS, [...y[15] || (y[15] = [
                  s("span", { class: "warning-icon" }, "⚠", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (N = e.preview) != null && N.remote_has_new_commits ? (n(), i(G, { key: 3 }, [
                  y[21] || (y[21] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "⚠"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  v.value ? (n(), i("div", yS, [
                    y[17] || (y[17] = s("span", { class: "warning-icon" }, "⚠", -1)),
                    s("div", null, [
                      y[16] || (y[16] = s("strong", null, "REPRODUCIBILITY WARNINGS", -1)),
                      s("p", null, f(m.value) + " dependency detail" + f(m.value !== 1 ? "s are" : " is") + " missing. The remote commit can still be pushed, but cloud builds may need this provenance later.", 1),
                      s("ul", wS, [
                        (n(!0), i(G, null, ge(p.value, (T) => (n(), i("li", {
                          key: T.hash || T.filename
                        }, " Model: " + f(T.filename), 1))), 128)),
                        (n(!0), i(G, null, ge(_.value, (T) => (n(), i("li", {
                          key: T.name
                        }, " Node: " + f(T.name) + " (" + f(T.criticality) + ") ", 1))), 128)),
                        w.value ? (n(), i("li", _S, "+" + f(w.value) + " more", 1)) : h("", !0)
                      ]),
                      s("button", {
                        class: "review-issues-btn",
                        onClick: y[1] || (y[1] = (T) => r.value = !0)
                      }, " Review Issues ")
                    ])
                  ])) : h("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", kS, [
                    y[18] || (y[18] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", bS, [
                      (n(!0), i(G, null, ge(e.preview.commits, (T) => (n(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", $S, f(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", CS, f(T.message), 1),
                        s("span", xS, f(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : h("", !0),
                  s("div", SS, [
                    s("label", IS, [
                      St(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": y[2] || (y[2] = (T) => l.value = T)
                      }, null, 512), [
                        [Wn, l.value]
                      ]),
                      y[19] || (y[19] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    y[20] || (y[20] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (n(), i(G, { key: 4 }, [
                  s("div", ES, [
                    y[22] || (y[22] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (n(), i("span", TS, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", MS, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (n(), i("div", PS, [...y[23] || (y[23] = [
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
                  v.value ? (n(), i("div", RS, [
                    y[25] || (y[25] = s("span", { class: "warning-icon" }, "⚠", -1)),
                    s("div", null, [
                      y[24] || (y[24] = s("strong", null, "REPRODUCIBILITY WARNINGS", -1)),
                      s("p", null, f(m.value) + " dependency detail" + f(m.value !== 1 ? "s are" : " is") + " missing. The remote commit can still be pushed, but cloud builds may need this provenance later.", 1),
                      s("ul", NS, [
                        (n(!0), i(G, null, ge(p.value, (T) => (n(), i("li", {
                          key: T.hash || T.filename
                        }, " Model: " + f(T.filename), 1))), 128)),
                        (n(!0), i(G, null, ge(_.value, (T) => (n(), i("li", {
                          key: T.name
                        }, " Node: " + f(T.name) + " (" + f(T.criticality) + ") ", 1))), 128)),
                        w.value ? (n(), i("li", LS, "+" + f(w.value) + " more", 1)) : h("", !0)
                      ]),
                      s("button", {
                        class: "review-issues-btn",
                        onClick: y[3] || (y[3] = (T) => r.value = !0)
                      }, " Review Issues ")
                    ])
                  ])) : h("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", DS, [
                    y[26] || (y[26] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", OS, [
                      (n(!0), i(G, null, ge(e.preview.commits, (T) => (n(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", AS, f(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", US, f(T.message), 1),
                        s("span", zS, f(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (n(), i("div", VS, [
                    y[27] || (y[27] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                  ]))
                ], 64)) : h("", !0)
              ]),
              s("div", FS, [
                C(Te, {
                  variant: "secondary",
                  onClick: y[4] || (y[4] = (T) => b.$emit("close"))
                }, {
                  default: g(() => [...y[28] || (y[28] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (M = e.preview) != null && M.remote_has_new_commits ? (n(), i(G, { key: 0 }, [
                  C(Te, {
                    variant: "secondary",
                    onClick: y[5] || (y[5] = (T) => b.$emit("pull-first"))
                  }, {
                    default: g(() => [...y[29] || (y[29] = [
                      x(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  C(Te, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: y[6] || (y[6] = (T) => k(!0))
                  }, {
                    default: g(() => [
                      x(f(v.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), R(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: y[7] || (y[7] = (T) => k(!1))
                }, {
                  default: g(() => [
                    x(f(v.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        r.value && ((P = e.preview) != null && P.warnings) ? (n(), R(dS, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: y[10] || (y[10] = (T) => r.value = !1),
          onRevalidate: y[11] || (y[11] = (T) => b.$emit("revalidate"))
        }, null, 8, ["warnings"])) : h("", !0)
      ], 64);
    };
  }
}), WS = /* @__PURE__ */ Se(BS, [["__scopeId", "data-v-601ee382"]]), GS = { class: "resolution-choice-group" }, jS = ["disabled"], HS = ["disabled"], qS = /* @__PURE__ */ be({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("div", GS, [
      s("button", {
        class: Ve(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, jS),
      s("button", {
        class: Ve(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, HS)
    ]));
  }
}), KS = /* @__PURE__ */ Se(qS, [["__scopeId", "data-v-985715ed"]]), JS = { class: "conflict-header" }, QS = { class: "conflict-info" }, YS = { class: "workflow-name" }, XS = { class: "conflict-description" }, ZS = {
  key: 0,
  class: "resolved-badge"
}, e4 = { class: "resolved-text" }, t4 = { class: "conflict-hashes" }, s4 = { class: "hash-item" }, o4 = { class: "hash-item" }, n4 = { class: "conflict-actions" }, a4 = /* @__PURE__ */ be({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = $(o.resolution);
    kt(() => o.resolution, (d) => {
      l.value = d;
    }), kt(l, (d) => {
      d && a("resolve", d);
    });
    const r = L(() => l.value !== null), u = L(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), c = L(() => {
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
      return n(), i("div", {
        class: Ve(["conflict-item", { resolved: r.value }])
      }, [
        s("div", JS, [
          m[2] || (m[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", QS, [
            s("code", YS, f(e.conflict.name) + ".json", 1),
            s("div", XS, f(u.value), 1)
          ]),
          r.value ? (n(), i("div", ZS, [
            m[1] || (m[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", e4, f(c.value), 1)
          ])) : h("", !0)
        ]),
        s("div", t4, [
          s("span", s4, [
            m[3] || (m[3] = x("Your: ", -1)),
            s("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", o4, [
            m[4] || (m[4] = x("Theirs: ", -1)),
            s("code", null, f(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", n4, [
          C(KS, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (_) => l.value = _),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), l4 = /* @__PURE__ */ Se(a4, [["__scopeId", "data-v-506d3bbf"]]), i4 = { class: "resolution-content" }, r4 = {
  key: 0,
  class: "error-box"
}, c4 = { class: "resolution-header" }, u4 = { class: "header-stats" }, d4 = { class: "stat" }, f4 = { class: "stat-value" }, m4 = { class: "stat resolved" }, v4 = { class: "stat-value" }, p4 = {
  key: 0,
  class: "stat pending"
}, g4 = { class: "stat-value" }, h4 = { class: "conflicts-list" }, y4 = {
  key: 1,
  class: "all-resolved-message"
}, w4 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = L(() => o.resolutions.size), r = L(() => o.workflowConflicts.length - l.value), u = L(() => l.value === o.workflowConflicts.length), c = L(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(_) {
      const w = o.resolutions.get(_);
      return (w == null ? void 0 : w.resolution) ?? null;
    }
    function m(_, w) {
      a("resolve", _, w);
    }
    function v() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (_, w) => (n(), R(Et, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        s("div", i4, [
          e.error ? (n(), i("div", r4, [
            w[1] || (w[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              w[0] || (w[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, f(e.error), 1)
            ])
          ])) : h("", !0),
          s("div", c4, [
            s("div", u4, [
              s("div", d4, [
                s("span", f4, f(e.workflowConflicts.length), 1),
                w[2] || (w[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", m4, [
                s("span", v4, f(l.value), 1),
                w[3] || (w[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", p4, [
                s("span", g4, f(r.value), 1),
                w[4] || (w[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            w[5] || (w[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", h4, [
            (n(!0), i(G, null, ge(e.workflowConflicts, (k) => (n(), R(l4, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (b) => m(k.name, b)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (n(), i("div", y4, [
            w[6] || (w[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + f(c.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        C(Ne, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...w[7] || (w[7] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w[8] || (w[8] = s("div", { class: "footer-spacer" }, null, -1)),
        C(Ne, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            x(f(c.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _4 = /* @__PURE__ */ Se(w4, [["__scopeId", "data-v-c58d150d"]]), k4 = { class: "node-conflict-item" }, b4 = { class: "node-header" }, $4 = { class: "node-name" }, C4 = { class: "node-id" }, x4 = { class: "version-comparison" }, S4 = { class: "version yours" }, I4 = { class: "version theirs" }, E4 = { class: "chosen-version" }, T4 = { class: "chosen" }, M4 = { class: "chosen-reason" }, P4 = { class: "affected-workflows" }, R4 = { class: "wf-source" }, N4 = { class: "wf-version" }, L4 = /* @__PURE__ */ be({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", k4, [
      s("div", b4, [
        s("code", $4, f(e.conflict.node_name), 1),
        s("span", C4, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      s("div", x4, [
        s("div", S4, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", I4, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      s("div", E4, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", T4, f(e.conflict.chosen_version), 1),
        s("span", M4, f(e.conflict.chosen_reason), 1)
      ]),
      s("details", P4, [
        s("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (n(!0), i(G, null, ge(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            s("code", null, f(a.name), 1),
            s("span", R4, "(" + f(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", N4, "needs v" + f(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), D4 = /* @__PURE__ */ Se(L4, [["__scopeId", "data-v-8b626725"]]), O4 = { class: "validation-content" }, A4 = {
  key: 0,
  class: "compatible-message"
}, U4 = { class: "conflicts-list" }, z4 = {
  key: 2,
  class: "warnings-section"
}, V4 = /* @__PURE__ */ be({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = L(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (n(), R(Et, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (c) => a("cancel"))
    }, {
      body: g(() => [
        s("div", O4, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", A4, [
            u[5] || (u[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              u[4] || (u[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(G, { key: 1 }, [
            u[6] || (u[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", U4, [
              (n(!0), i(G, null, ge(e.validation.node_conflicts, (c) => (n(), R(D4, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", z4, [
            u[8] || (u[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (n(!0), i(G, null, ge(e.validation.warnings, (c, d) => (n(), i("li", { key: d }, f(c), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        C(Ne, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => a("cancel"))
        }, {
          default: g(() => [...u[9] || (u[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = s("div", { class: "footer-spacer" }, null, -1)),
        C(Ne, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => a("goBack"))
        }, {
          default: g(() => [...u[10] || (u[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Ne, {
          variant: "primary",
          loading: e.executing,
          onClick: u[2] || (u[2] = (c) => a("proceed"))
        }, {
          default: g(() => [
            x(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), F4 = /* @__PURE__ */ Se(V4, [["__scopeId", "data-v-fefd26ed"]]), B4 = {
  key: 0,
  class: "embedded-toolbar"
}, W4 = { class: "embedded-toolbar-search" }, G4 = { key: 0 }, j4 = /* @__PURE__ */ be({
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
      updateRemoteUrl: u,
      fetchRemote: c,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: p,
      pushToRemote: _,
      validateMerge: w
    } = pt(), k = $([]), b = $(null), y = $({}), S = $(!1), N = $(null), M = $(""), P = $(!1), T = $(null), F = $(!1), j = $("add"), E = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), V = L(() => {
      if (!M.value.trim()) return k.value;
      const Ae = M.value.toLowerCase();
      return k.value.filter(
        (O) => O.name.toLowerCase().includes(Ae) || O.fetch_url.toLowerCase().includes(Ae) || O.push_url.toLowerCase().includes(Ae)
      );
    });
    async function ie() {
      S.value = !0, N.value = null;
      try {
        const Ae = await a();
        k.value = Ae.remotes, b.value = Ae.current_branch_tracking || null, await Promise.all(
          Ae.remotes.map(async (O) => {
            const ne = await d(O.name);
            ne && (y.value[O.name] = ne);
          })
        );
      } catch (Ae) {
        N.value = Ae instanceof Error ? Ae.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ee() {
      j.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function Y(Ae) {
      const O = k.value.find((ne) => ne.name === Ae);
      O && (j.value = "edit", E.value = {
        name: O.name,
        fetchUrl: O.fetch_url,
        pushUrl: O.push_url
      }, F.value = !0);
    }
    async function he(Ae) {
      try {
        j.value === "add" ? await l(Ae.name, Ae.fetchUrl) : await u(Ae.name, Ae.fetchUrl, Ae.pushUrl || void 0), F.value = !1, await ie();
      } catch (O) {
        N.value = O instanceof Error ? O.message : "Operation failed";
      }
    }
    function se() {
      F.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(Ae) {
      T.value = Ae;
      try {
        await c(Ae);
        const O = await d(Ae);
        O && (y.value[Ae] = O), o("toast", `✓ Fetched from ${Ae}`, "success");
      } catch (O) {
        o("toast", O instanceof Error ? O.message : "Fetch failed", "error");
      } finally {
        T.value = null;
      }
    }
    async function le(Ae) {
      if (confirm(`Remove remote "${Ae}"?`))
        try {
          await r(Ae), await ie();
        } catch (O) {
          N.value = O instanceof Error ? O.message : "Failed to remove remote";
        }
    }
    function Ue() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const oe = $("idle"), ye = L(() => oe.value === "pull_preview"), A = L(
      () => oe.value === "resolving" || oe.value === "validating"
    ), me = L(
      () => oe.value === "validation_review" || oe.value === "executing"
    ), Pe = $(!1), Ge = $(null), Ee = $(!1), H = $(null), Z = $(null), q = $(!1), X = $(null), xe = $(null), de = $(/* @__PURE__ */ new Map()), re = $(null), I = $(null), z = L(() => X.value && ic(X.value) ? X.value : null);
    async function ce(Ae) {
      Z.value = Ae, oe.value = "pull_preview", q.value = !0, X.value = null, xe.value = null;
      try {
        X.value = await m(Ae);
      } catch (O) {
        xe.value = O instanceof Error ? O.message : "Failed to load pull preview";
      } finally {
        q.value = !1;
      }
    }
    function Ce() {
      oe.value = "idle", X.value = null, xe.value = null, Z.value = null;
    }
    async function _e(Ae) {
      if (!Z.value) return;
      oe.value = "executing", xe.value = null;
      const O = Z.value;
      try {
        const ne = await v(O, Ae);
        if (ne.rolled_back) {
          xe.value = `Pull failed and was rolled back: ${ne.error || "Unknown error"}`, oe.value = "pull_preview";
          return;
        }
        ve(), oe.value = "idle", o("toast", `✓ Pulled from ${O}`, "success"), await ie();
      } catch (ne) {
        xe.value = ne instanceof Error ? ne.message : "Pull failed", oe.value = "pull_preview";
      }
    }
    function $e() {
      z.value && (oe.value = "resolving", I.value = null);
    }
    function Oe(Ae, O) {
      de.value.set(Ae, { name: Ae, resolution: O });
    }
    function ze() {
      oe.value = "pull_preview";
    }
    async function Re() {
      oe.value = "validating", I.value = null;
      try {
        const Ae = Array.from(de.value.values());
        re.value = await w(Z.value, Ae), oe.value = "validation_review";
      } catch (Ae) {
        I.value = Ae instanceof Error ? Ae.message : "Validation failed", oe.value = "resolving";
      }
    }
    async function Ie() {
      oe.value = "executing";
      const Ae = Z.value;
      try {
        const O = Array.from(de.value.values()), ne = await v(Ae, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: O
        });
        if (ne.rolled_back) {
          xe.value = `Pull failed and was rolled back: ${ne.error || "Unknown error"}`, oe.value = "pull_preview";
          return;
        }
        ve(), oe.value = "idle", o("toast", `✓ Pulled from ${Ae}`, "success"), await ie();
      } catch (O) {
        xe.value = O instanceof Error ? O.message : "Pull failed", oe.value = "validation_review";
      }
    }
    function Ke() {
      oe.value = "resolving";
    }
    function Fe() {
      ve(), oe.value = "idle";
    }
    function ve() {
      de.value.clear(), re.value = null, I.value = null, xe.value = null, X.value = null, Z.value = null;
    }
    async function Q(Ae) {
      Z.value = Ae, Pe.value = !0, q.value = !0, Ge.value = null, H.value = null;
      try {
        Ge.value = await p(Ae);
      } catch (O) {
        H.value = O instanceof Error ? O.message : "Failed to load push preview";
      } finally {
        q.value = !1;
      }
    }
    async function He() {
      if (Z.value) {
        q.value = !0, H.value = null;
        try {
          Ge.value = await p(Z.value);
        } catch (Ae) {
          H.value = Ae instanceof Error ? Ae.message : "Failed to refresh push preview";
        } finally {
          q.value = !1;
        }
      }
    }
    function ke() {
      Pe.value = !1, Ge.value = null, H.value = null, Z.value = null;
    }
    async function Ye(Ae) {
      var ne;
      if (!Z.value) return;
      Ee.value = !0;
      const O = Z.value;
      H.value = null;
      try {
        await _(O, Ae), ke(), o("toast", `✓ Pushed to ${O}`, "success"), await ie();
      } catch (pe) {
        const Je = pe instanceof Error ? pe.message : "Push failed";
        H.value = Je, pe instanceof Hr && pe.status === 409 && ((ne = pe.data) != null && ne.needs_force) && Ge.value ? Ge.value = {
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
      const Ae = Z.value;
      ke(), Ae && ce(Ae);
    }
    return ct(ie), (Ae, O) => (n(), i(G, null, [
      C(At, null, Yt({
        content: g(() => [
          S.value ? (n(), R(Cs, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (n(), R(xs, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            e.embedded && !F.value ? (n(), i("div", B4, [
              s("div", W4, [
                C(ro, {
                  modelValue: M.value,
                  "onUpdate:modelValue": O[2] || (O[2] = (ne) => M.value = ne),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: g(() => [...O[5] || (O[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            F.value ? (n(), R(J5, {
              key: 1,
              mode: j.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: he,
              onCancel: se
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            k.value.length && !F.value ? (n(), R(la, {
              key: 2,
              variant: "compact"
            }, {
              default: g(() => [
                x(" Total: " + f(k.value.length) + " remote" + f(k.value.length !== 1 ? "s" : "") + " ", 1),
                b.value ? (n(), i("span", G4, " • Tracking: " + f(b.value.remote) + "/" + f(b.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            V.value.length && !F.value ? (n(), R(It, {
              key: 3,
              title: "REMOTES",
              count: V.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ge(V.value, (ne) => (n(), R(O5, {
                  key: ne.name,
                  remote: ne,
                  "sync-status": y.value[ne.name],
                  "fetching-remote": T.value,
                  onFetch: J,
                  onEdit: Y,
                  onRemove: le,
                  onPull: ce,
                  onPush: Q
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !V.value.length && !F.value ? (n(), R(rs, {
              key: 4,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                C(Te, {
                  variant: "primary",
                  onClick: ee
                }, {
                  default: g(() => [...O[6] || (O[6] = [
                    x(" Add Your First Remote ", -1)
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
            C(Ut, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: O[0] || (O[0] = (ne) => P.value = !0)
            }, {
              actions: g(() => [
                F.value ? h("", !0) : (n(), R(Te, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ee
                }, {
                  default: g(() => [...O[4] || (O[4] = [
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
          fn: g(() => [
            F.value ? h("", !0) : (n(), R(ro, {
              key: 0,
              modelValue: M.value,
              "onUpdate:modelValue": O[1] || (O[1] = (ne) => M.value = ne),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      C(cs, {
        show: P.value,
        title: "About Git Remotes",
        onClose: O[3] || (O[3] = (ne) => P.value = !1)
      }, {
        content: g(() => [...O[7] || (O[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            x(" The "),
            s("strong", null, '"origin"'),
            x(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          C(Te, {
            variant: "link",
            onClick: Ue
          }, {
            default: g(() => [...O[8] || (O[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(A8, {
        show: ye.value,
        "remote-name": Z.value || "",
        preview: X.value,
        loading: q.value,
        pulling: oe.value === "executing",
        error: xe.value,
        "conflict-resolutions": de.value,
        onClose: Ce,
        onPull: _e,
        onOpenConflictResolution: $e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(WS, {
        show: Pe.value,
        "remote-name": Z.value || "",
        preview: Ge.value,
        loading: q.value,
        pushing: Ee.value,
        error: H.value,
        onClose: ke,
        onPush: Ye,
        onPullFirst: ot,
        onRevalidate: He
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      A.value && z.value ? (n(), R(_4, {
        key: 0,
        "workflow-conflicts": z.value.workflow_conflicts,
        resolutions: de.value,
        "operation-type": "pull",
        validating: oe.value === "validating",
        error: I.value,
        onClose: ze,
        onResolve: Oe,
        onApply: Re
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      me.value && re.value ? (n(), R(F4, {
        key: 1,
        validation: re.value,
        "operation-type": "pull",
        executing: oe.value === "executing",
        onProceed: Ie,
        onGoBack: Ke,
        onCancel: Fe
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), H4 = /* @__PURE__ */ Se(j4, [["__scopeId", "data-v-a189530f"]]), q4 = /* @__PURE__ */ be({
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
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" },
      { id: "remotes", label: "Remotes" }
    ], r = $(o.initialTab ?? "history");
    return kt(() => o.initialTab, (u) => {
      u && (r.value = u);
    }), (u, c) => (n(), R(At, null, {
      header: g(() => [
        C(Ut, { title: "VERSION CONTROL" })
      ]),
      search: g(() => [
        C(Il, {
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: g(() => [
        r.value === "history" ? (n(), R(Q3, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: c[1] || (c[1] = (d) => a("select", d)),
          onCheckout: c[2] || (c[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), R(w5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: c[3] || (c[3] = (d) => a("switch", d)),
          onCreate: c[4] || (c[4] = (d) => a("create", d)),
          onDelete: c[5] || (c[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), R(H4, {
          key: 2,
          embedded: "",
          onToast: c[6] || (c[6] = (d, m) => a("toast", d, m))
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
const K4 = { class: "text-viewer-wrapper" }, J4 = ["disabled", "title"], Q4 = { class: "text-content" }, Y4 = /* @__PURE__ */ be({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = $(null), a = $("idle");
    async function l() {
      if (t.content)
        try {
          await rc(t.content), a.value = "copied", setTimeout(() => {
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
    return (c, d) => (n(), i("div", K4, [
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
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, f(a.value === "copied" ? "Copied!" : "Copy"), 9, J4),
        s("pre", Q4, f(e.content), 1)
      ], 544)
    ]));
  }
}), X4 = /* @__PURE__ */ Se(Y4, [["__scopeId", "data-v-85a537ba"]]), Z4 = {
  key: 1,
  class: "manifest-viewer-shell"
}, eI = { class: "manifest-path" }, tI = /* @__PURE__ */ be({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = pt(), o = $(!1), a = $(null), l = $(!1), r = $({
      path: "",
      exists: !1,
      content: ""
    });
    async function u() {
      o.value = !0, a.value = null;
      try {
        r.value = await t();
      } catch (c) {
        a.value = c instanceof Error ? c.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return ct(u), (c, d) => (n(), i(G, null, [
      C(At, null, Yt({
        content: g(() => [
          o.value ? (n(), R(Cs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), R(xs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), R(rs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", Z4, [
              C(X4, {
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
            C(Ut, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (m) => l.value = !0)
            }, {
              actions: g(() => [
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: u,
                  disabled: o.value
                }, {
                  default: g(() => [
                    x(f(o.value ? "Loading..." : "Refresh"), 1)
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
      C(cs, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (m) => l.value = !1)
      }, {
        content: g(() => [
          d[3] || (d[3] = s("p", null, [
            x(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            x(" from the current environment's "),
            s("strong", null, ".cec"),
            x(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", eI, [
            s("code", null, f(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: g(() => [
          C(Te, {
            variant: "primary",
            onClick: d[1] || (d[1] = (m) => l.value = !1)
          }, {
            default: g(() => [...d[7] || (d[7] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sI = /* @__PURE__ */ Se(tI, [["__scopeId", "data-v-814a8fdd"]]), oI = { class: "log-viewer-wrapper" }, nI = ["disabled", "title"], aI = /* @__PURE__ */ be({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = $(null), a = $("idle"), l = L(() => t.logs.map((m) => ({
      text: t.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function r() {
      var v;
      await Pt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    ct(r), kt(() => t.logs, r);
    async function u() {
      if (l.value.length === 0) return;
      const m = l.value.map((v) => v.text).join(`
`);
      try {
        await rc(m), a.value = "copied", setTimeout(() => {
          a.value = "idle";
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
    return (m, v) => (n(), i("div", oI, [
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
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(a.value === "copied" ? "Copied!" : "Copy"), 9, nI),
        (n(!0), i(G, null, ge(l.value, (p, _) => (n(), i("div", {
          key: _,
          class: Ve(`log-line log-level-${p.level.toLowerCase()}`)
        }, f(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), cc = /* @__PURE__ */ Se(aI, [["__scopeId", "data-v-5aaf1b88"]]), lI = /* @__PURE__ */ be({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: a, openFile: l } = pt(), r = $([]), u = $(!1), c = $(null), d = $(!1), m = $("production"), v = $(null), p = $(!1);
    async function _() {
      u.value = !0, c.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const b = await o();
          m.value = b.environment || "production";
        } catch {
        }
      } catch (b) {
        c.value = b instanceof Error ? b.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    async function w() {
      try {
        const b = await a();
        b.exists && (v.value = b.path);
      } catch {
      }
    }
    async function k() {
      if (v.value) {
        p.value = !0;
        try {
          await l(v.value);
        } catch (b) {
          console.error("Failed to open log file:", b);
        } finally {
          p.value = !1;
        }
      }
    }
    return ct(() => {
      _(), w();
    }), (b, y) => (n(), i(G, null, [
      C(At, null, Yt({
        content: g(() => [
          u.value ? (n(), R(Cs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (n(), R(xs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            r.value.length === 0 ? (n(), R(rs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), R(cc, {
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
            C(Ut, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: y[0] || (y[0] = (S) => d.value = !0)
            }, {
              actions: g(() => [
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: k,
                  disabled: !v.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    x(f(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: u.value
                }, {
                  default: g(() => [
                    x(f(u.value ? "Loading..." : "Refresh"), 1)
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
      C(cs, {
        show: d.value,
        title: "About Environment Logs",
        onClose: y[2] || (y[2] = (S) => d.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            y[3] || (y[3] = x(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, f(m.value), 1),
            y[4] || (y[4] = x(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          y[5] || (y[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
        actions: g(() => [
          C(Te, {
            variant: "primary",
            onClick: y[1] || (y[1] = (S) => d.value = !1)
          }, {
            default: g(() => [...y[6] || (y[6] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ki = /* @__PURE__ */ be({
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
    } = pt(), u = e, c = $(u.initialTab ?? "workspace"), d = $([]), m = $(!1), v = $(null), p = $(!1), _ = $(null), w = $(null), k = $(!1), b = L(() => c.value === "workspace" ? _.value : w.value);
    async function y() {
      m.value = !0, v.value = null;
      try {
        c.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
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
        M.exists && (_.value = M.path), P.exists && (w.value = P.path);
      } catch {
      }
    }
    async function N() {
      if (b.value) {
        k.value = !0;
        try {
          await r(b.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          k.value = !1;
        }
      }
    }
    return kt(c, () => {
      y();
    }), kt(() => u.initialTab, (M) => {
      M && (c.value = M);
    }), ct(() => {
      y(), S();
    }), (M, P) => (n(), i(G, null, [
      C(At, null, Yt({
        content: g(() => [
          m.value ? (n(), R(Cs, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : v.value ? (n(), R(xs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: y
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            d.value.length === 0 ? (n(), R(rs, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), R(cc, {
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
            C(Ut, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: P[0] || (P[0] = (T) => p.value = !0)
            }, {
              actions: g(() => [
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: N,
                  disabled: !b.value || k.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    x(f(k.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y,
                  disabled: m.value
                }, {
                  default: g(() => [
                    x(f(m.value ? "Loading..." : "Refresh"), 1)
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
            C(Il, {
              modelValue: c.value,
              "onUpdate:modelValue": P[1] || (P[1] = (T) => c.value = T),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      C(cs, {
        show: p.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (T) => p.value = !1)
      }, {
        content: g(() => [...P[4] || (P[4] = [
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
        actions: g(() => [
          C(Te, {
            variant: "primary",
            onClick: P[2] || (P[2] = (T) => p.value = !1)
          }, {
            default: g(() => [...P[5] || (P[5] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), iI = /* @__PURE__ */ be({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = $(t.initialTab ?? "manifest"), l = $(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = $(!1), u = L(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), c = L(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return kt(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), kt(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, m) => (n(), i(G, null, [
      C(At, null, Yt({
        header: g(() => [
          C(Ut, {
            title: u.value,
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: g(() => [
          a.value === "manifest" ? (n(), R(sI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (n(), R(lI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (n(), R(ki, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), R(ki, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        a.value !== "manifest" ? {
          name: "search",
          fn: g(() => [
            C(Il, {
              modelValue: l.value,
              "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      C(cs, {
        show: r.value,
        title: c.value,
        "max-width": "520px",
        onClose: m[3] || (m[3] = (v) => r.value = !1)
      }, {
        content: g(() => [
          a.value === "manifest" ? (n(), i(G, { key: 0 }, [
            m[4] || (m[4] = s("p", null, [
              s("strong", null, "Manifest"),
              x(" shows the live "),
              s("strong", null, "pyproject.toml"),
              x(" from the current environment's "),
              s("strong", null, ".cec"),
              x(" directory. ")
            ], -1)),
            m[5] || (m[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            m[6] || (m[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (n(), i(G, { key: 1 }, [
            m[7] || (m[7] = s("p", null, [
              s("strong", null, "Logging"),
              x(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            m[8] || (m[8] = s("p", null, [
              s("strong", null, "Environment"),
              x(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            m[9] || (m[9] = s("p", null, [
              s("strong", null, "Workspace"),
              x(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            m[10] || (m[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              x(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: g(() => [
          C(Te, {
            variant: "primary",
            size: "sm",
            onClick: m[2] || (m[2] = (v) => r.value = !1)
          }, {
            default: g(() => [...m[11] || (m[11] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), rI = { class: "header-info" }, cI = { class: "commit-hash" }, uI = {
  key: 0,
  class: "commit-refs"
}, dI = { class: "commit-message" }, fI = { class: "commit-date" }, mI = {
  key: 0,
  class: "loading"
}, vI = {
  key: 1,
  class: "changes-section"
}, pI = { class: "stats-row" }, gI = { class: "stat" }, hI = { class: "stat insertions" }, yI = { class: "stat deletions" }, wI = {
  key: 0,
  class: "change-group"
}, _I = {
  key: 1,
  class: "change-group"
}, kI = {
  key: 0,
  class: "version"
}, bI = {
  key: 2,
  class: "change-group"
}, $I = { class: "change-item" }, CI = /* @__PURE__ */ be({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = pt(), a = $(null), l = $(!0), r = L(() => {
      if (!a.value) return !1;
      const c = a.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = L(() => {
      if (!a.value) return !1;
      const c = a.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return ct(async () => {
      try {
        a.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (c, d) => (n(), R(Et, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => c.$emit("close"))
    }, {
      header: g(() => {
        var m, v, p, _;
        return [
          s("div", rI, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", cI, f(((m = a.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (_ = (p = a.value) == null ? void 0 : p.refs) != null && _.length ? (n(), i("span", uI, [
              (n(!0), i(G, null, ge(a.value.refs, (w) => (n(), i("span", {
                key: w,
                class: "ref-badge"
              }, f(w), 1))), 128))
            ])) : h("", !0)
          ]),
          C(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (w) => c.$emit("close"))
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
        var m, v;
        return [
          s("div", dI, f(((m = a.value) == null ? void 0 : m.message) || e.commit.message), 1),
          s("div", fI, f(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", mI, "Loading details...")) : a.value ? (n(), i("div", vI, [
            s("div", pI, [
              s("span", gI, f(a.value.stats.files_changed) + " files", 1),
              s("span", hI, "+" + f(a.value.stats.insertions), 1),
              s("span", yI, "-" + f(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", wI, [
              C(ao, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(G, null, ge(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (n(!0), i(G, null, ge(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (n(!0), i(G, null, ge(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p), 1)
              ]))), 128))
            ])) : h("", !0),
            u.value ? (n(), i("div", _I, [
              C(ao, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(G, null, ge(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p.name), 1),
                p.version ? (n(), i("span", kI, "(" + f(p.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (n(!0), i(G, null, ge(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p.name), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", bI, [
              C(ao, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", $I, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, f(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: g(() => [
        C(Ne, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => c.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            x(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Ne, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => c.$emit("checkout", e.commit))
        }, {
          default: g(() => [...d[16] || (d[16] = [
            x(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), xI = /* @__PURE__ */ Se(CI, [["__scopeId", "data-v-d256ff6d"]]), SI = { class: "popover-header" }, II = { class: "popover-body" }, EI = {
  key: 0,
  class: "changes-summary"
}, TI = {
  key: 0,
  class: "change-item"
}, MI = {
  key: 1,
  class: "change-item"
}, PI = {
  key: 2,
  class: "change-item"
}, RI = {
  key: 3,
  class: "change-item"
}, NI = {
  key: 4,
  class: "change-item"
}, LI = {
  key: 5,
  class: "change-item"
}, DI = {
  key: 1,
  class: "no-changes"
}, OI = {
  key: 2,
  class: "loading"
}, AI = {
  key: 3,
  class: "issues-error"
}, UI = { class: "error-header" }, zI = { class: "error-title" }, VI = { class: "issues-list" }, FI = { class: "workflow-state" }, BI = { class: "message-section" }, WI = { class: "popover-footer" }, GI = {
  key: 1,
  class: "commit-popover"
}, jI = { class: "popover-header" }, HI = { class: "popover-body" }, qI = {
  key: 0,
  class: "changes-summary"
}, KI = {
  key: 0,
  class: "change-item"
}, JI = {
  key: 1,
  class: "change-item"
}, QI = {
  key: 2,
  class: "change-item"
}, YI = {
  key: 3,
  class: "change-item"
}, XI = {
  key: 4,
  class: "change-item"
}, ZI = {
  key: 5,
  class: "change-item"
}, e6 = {
  key: 1,
  class: "no-changes"
}, t6 = {
  key: 2,
  class: "loading"
}, s6 = {
  key: 3,
  class: "issues-error"
}, o6 = { class: "error-header" }, n6 = { class: "error-title" }, a6 = { class: "issues-list" }, l6 = { class: "workflow-state" }, i6 = { class: "message-section" }, r6 = { class: "popover-footer" }, c6 = /* @__PURE__ */ be({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = pt(), r = $(""), u = $(!1), c = $(!1), d = L(() => {
      if (!o.status) return !1;
      const k = o.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || o.status.has_changes;
    }), m = L(() => {
      if (!o.status) return !1;
      const k = o.status.workflows, b = o.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || b.nodes_added.length > 0 || b.nodes_removed.length > 0;
    }), v = L(() => {
      var k;
      return (k = o.status) != null && k.workflows.analyzed ? o.status.workflows.analyzed.filter((b) => b.has_issues) : [];
    }), p = L(() => v.value.length > 0), _ = L(() => p.value && !c.value);
    async function w() {
      var k, b, y, S;
      if (!(p.value && !c.value) && !(!d.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const N = await l(r.value.trim(), c.value);
          if (N.status === "success") {
            const M = `Committed: ${((k = N.summary) == null ? void 0 : k.new) || 0} new, ${((b = N.summary) == null ? void 0 : b.modified) || 0} modified, ${((y = N.summary) == null ? void 0 : y.deleted) || 0} deleted`;
            a("committed", { success: !0, message: M });
          } else if (N.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (N.status === "blocked") {
            const M = ((S = N.issues) == null ? void 0 : S.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${M}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: N.message || "Commit failed" });
        } catch (N) {
          a("committed", { success: !1, message: N instanceof Error ? N.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (k, b) => e.asModal ? (n(), R(Rt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (y) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", SI, [
            b[11] || (b[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (y) => a("close"))
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
          s("div", II, [
            e.status && d.value ? (n(), i("div", EI, [
              e.status.workflows.new.length ? (n(), i("div", TI, [
                b[12] || (b[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (n(), i("div", MI, [
                b[13] || (b[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", PI, [
                b[14] || (b[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", RI, [
                b[15] || (b[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", NI, [
                b[16] || (b[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              m.value ? h("", !0) : (n(), i("div", LI, [...b[17] || (b[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", DI, " No changes to commit ")) : (n(), i("div", OI, " Loading... ")),
            p.value ? (n(), i("div", AI, [
              s("div", UI, [
                b[18] || (b[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", zI, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", VI, [
                (n(!0), i(G, null, ge(v.value, (y) => (n(), i("div", {
                  key: y.name,
                  class: "issue-item"
                }, [
                  s("strong", null, f(y.name), 1),
                  s("span", FI, "(" + f(y.sync_state) + ")", 1),
                  x(": " + f(y.issue_summary), 1)
                ]))), 128))
              ]),
              C(Hn, {
                modelValue: c.value,
                "onUpdate:modelValue": b[1] || (b[1] = (y) => c.value = y),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...b[19] || (b[19] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            s("div", BI, [
              C(xo, {
                modelValue: r.value,
                "onUpdate:modelValue": b[2] || (b[2] = (y) => r.value = y),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: w,
                onSubmit: w
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", WI, [
            C(Ne, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (y) => a("close"))
            }, {
              default: g(() => [...b[20] || (b[20] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: c.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: w
            }, {
              default: g(() => [
                x(f(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", GI, [
      s("div", jI, [
        b[22] || (b[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (y) => a("close"))
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
      s("div", HI, [
        e.status && d.value ? (n(), i("div", qI, [
          e.status.workflows.new.length ? (n(), i("div", KI, [
            b[23] || (b[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (n(), i("div", JI, [
            b[24] || (b[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", QI, [
            b[25] || (b[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", YI, [
            b[26] || (b[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", XI, [
            b[27] || (b[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          m.value ? h("", !0) : (n(), i("div", ZI, [...b[28] || (b[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", e6, " No changes to commit ")) : (n(), i("div", t6, " Loading... ")),
        p.value ? (n(), i("div", s6, [
          s("div", o6, [
            b[29] || (b[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", n6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", a6, [
            (n(!0), i(G, null, ge(v.value, (y) => (n(), i("div", {
              key: y.name,
              class: "issue-item"
            }, [
              s("strong", null, f(y.name), 1),
              s("span", l6, "(" + f(y.sync_state) + ")", 1),
              x(": " + f(y.issue_summary), 1)
            ]))), 128))
          ]),
          C(Hn, {
            modelValue: c.value,
            "onUpdate:modelValue": b[7] || (b[7] = (y) => c.value = y),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...b[30] || (b[30] = [
              x(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        s("div", i6, [
          C(xo, {
            modelValue: r.value,
            "onUpdate:modelValue": b[8] || (b[8] = (y) => r.value = y),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: w,
            onSubmit: w
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", r6, [
        C(Ne, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (y) => a("close"))
        }, {
          default: g(() => [...b[31] || (b[31] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Ne, {
          variant: c.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: w
        }, {
          default: g(() => [
            x(f(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), uc = /* @__PURE__ */ Se(c6, [["__scopeId", "data-v-5f897631"]]), u6 = { class: "modal-header" }, d6 = { class: "modal-body" }, f6 = { class: "switch-message" }, m6 = { class: "switch-details" }, v6 = { class: "modal-actions" }, p6 = /* @__PURE__ */ be({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (n(), R(Rt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", u6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", d6, [
            s("p", f6, [
              o[6] || (o[6] = x(" Switch from ", -1)),
              s("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = x(" to ", -1)),
              s("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = x("? ", -1))
            ]),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This will restart ComfyUI")
            ], -1)),
            s("p", m6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", v6, [
            C(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                x(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), g6 = /* @__PURE__ */ Se(p6, [["__scopeId", "data-v-e9c5253e"]]), h6 = {
  key: 0,
  class: "modal-overlay"
}, y6 = { class: "modal-content" }, w6 = { class: "modal-body" }, _6 = { class: "progress-info" }, k6 = { class: "progress-percentage" }, b6 = { class: "progress-state" }, $6 = { class: "switch-steps" }, C6 = { class: "step-icon" }, x6 = { class: "step-label" }, S6 = /* @__PURE__ */ be({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = L(() => {
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
    }), a = L(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = L(() => {
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
    return (r, u) => (n(), R(Rt, { to: "body" }, [
      e.show ? (n(), i("div", h6, [
        s("div", y6, [
          u[1] || (u[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", w6, [
            C(sc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", _6, [
              s("div", k6, f(e.progress) + "%", 1),
              s("div", b6, f(o.value), 1)
            ]),
            s("div", $6, [
              (n(!0), i(G, null, ge(l.value, (c) => (n(), i("div", {
                key: c.state,
                class: Ve(["switch-step", c.status])
              }, [
                s("span", C6, f(c.icon), 1),
                s("span", x6, f(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), I6 = /* @__PURE__ */ Se(S6, [["__scopeId", "data-v-768a5078"]]), E6 = { class: "modal-header" }, T6 = { class: "modal-body" }, M6 = {
  key: 0,
  class: "node-section"
}, P6 = { class: "node-list" }, R6 = {
  key: 1,
  class: "node-section"
}, N6 = { class: "node-list" }, L6 = { class: "modal-actions" }, D6 = /* @__PURE__ */ be({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (n(), R(Rt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", E6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", T6, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", M6, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", P6, [
                (n(!0), i(G, null, ge(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + f(a), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", R6, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", N6, [
                (n(!0), i(G, null, ge(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + f(a), 1))), 128))
              ])
            ])) : h("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", L6, [
            C(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                x(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), O6 = /* @__PURE__ */ Se(D6, [["__scopeId", "data-v-7cad7518"]]), A6 = [
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
], $n = "v0.0.24", U6 = "Akatz", z6 = { class: "social-buttons" }, V6 = ["title", "aria-label", "onClick"], F6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, B6 = ["d"], W6 = ["title", "aria-label", "onClick"], G6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, j6 = ["d"], H6 = /* @__PURE__ */ be({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", z6, [
      (n(!0), i(G, null, ge(tt(A6), (l) => (n(), i(G, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          x(f(l.label) + " ", 1),
          (n(), i("svg", F6, [
            s("path", {
              d: l.iconPath
            }, null, 8, B6)
          ]))
        ], 8, V6)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (n(), i("svg", G6, [
            s("path", {
              d: l.iconPath
            }, null, 8, j6)
          ]))
        ], 8, W6))
      ], 64))), 128))
    ]));
  }
}), dc = /* @__PURE__ */ Se(H6, [["__scopeId", "data-v-4f846342"]]), q6 = { class: "footer-info" }, K6 = ["title"], J6 = {
  key: 0,
  class: "dev-badge"
}, Q6 = { class: "made-by" }, Y6 = /* @__PURE__ */ be({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = pt(), o = $(null), a = $(null), l = $(null), r = L(() => o.value === "development"), u = L(() => {
      var d;
      if (!r.value) return $n;
      const c = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${$n} (${c})` : `${$n} (development)`;
    });
    return ct(async () => {
      try {
        const c = await t();
        o.value = c.manager_source ?? null, a.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, d) => (n(), i("div", q6, [
      s("span", {
        class: "version",
        title: u.value
      }, [
        x(f(tt($n)) + " ", 1),
        r.value ? (n(), i("span", J6, "dev")) : h("", !0)
      ], 8, K6),
      s("span", Q6, [
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
        x(" by " + f(tt(U6)), 1)
      ])
    ]));
  }
}), fc = /* @__PURE__ */ Se(Y6, [["__scopeId", "data-v-4fa265b3"]]), X6 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = $(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, u) => (n(), R(Et, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (c) => r.$emit("close"))
    }, {
      body: g(() => [
        C(Xr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var c;
        return [
          C(Ne, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: a
          }, {
            default: g(() => [...u[2] || (u[2] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Ne, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => r.$emit("close"))
          }, {
            default: g(() => [...u[3] || (u[3] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), Z6 = /* @__PURE__ */ Se(X6, [["__scopeId", "data-v-fac00ae7"]]), eE = { class: "header-actions" }, tE = {
  key: 0,
  class: "wizard-step"
}, sE = { class: "form-field" }, oE = ["placeholder"], nE = {
  key: 0,
  class: "form-error"
}, aE = { class: "form-field form-field--checkbox" }, lE = { class: "form-checkbox" }, iE = {
  key: 0,
  class: "form-field"
}, rE = ["placeholder"], cE = {
  key: 0,
  class: "form-info"
}, uE = {
  key: 1,
  class: "form-suggestion"
}, dE = {
  key: 2,
  class: "form-error"
}, fE = {
  key: 3,
  class: "form-info"
}, mE = {
  key: 1,
  class: "wizard-step"
}, vE = {
  key: 0,
  class: "progress-check-loading"
}, pE = {
  key: 0,
  class: "cli-warning"
}, gE = { class: "cli-warning-header" }, hE = {
  key: 1,
  class: "env-landing"
}, yE = { class: "env-list" }, wE = ["value"], _E = { class: "env-name" }, kE = {
  key: 2,
  class: "env-create"
}, bE = { class: "form-field" }, $E = { class: "form-field" }, CE = ["value"], xE = { class: "form-field" }, SE = ["disabled"], IE = ["value"], EE = { class: "form-field" }, TE = ["value"], ME = { class: "form-field form-field--checkbox" }, PE = { class: "form-checkbox" }, RE = {
  key: 0,
  class: "form-error"
}, NE = {
  key: 1,
  class: "env-creating"
}, LE = { class: "creating-intro" }, DE = {
  key: 3,
  class: "env-import"
}, OE = { class: "wizard-footer" }, AE = { class: "wizard-footer-actions" }, po = 10, UE = 600 * 1e3, bi = 1800 * 1e3, zE = /* @__PURE__ */ be({
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
      validatePath: u,
      createEnvironment: c,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: v
    } = pt(), p = $(o.initialStep || 1), _ = $(null), w = $("landing"), k = $(!1), b = $(!1), y = $(!1), S = $(!1), N = $(null), M = $(o.initialStep === 2), P = $(o.defaultPath), T = $(!!o.detectedModelsDir), F = $(o.detectedModelsDir || ""), j = $(null), E = $(null), V = $(null), ie = $(null), ee = $("my-new-env"), Y = $(ec), he = $("latest"), se = $(tc), J = $(!0), le = $(null), Ue = $(null), oe = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), ye = $(!1), A = $(!1), me = $(!1), Pe = $({ progress: 0, message: "" }), Ge = $({ progress: 0, message: "" }), Ee = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], H = $(0), Z = $(null), q = $(0), X = $(null), xe = L(() => {
      var ke, Ye;
      const ve = (ke = P.value) == null ? void 0 : ke.trim(), Q = !j.value, He = !T.value || !E.value && ((Ye = F.value) == null ? void 0 : Ye.trim());
      return ve && Q && He;
    }), de = L(() => {
      var ve;
      return (ve = ee.value) == null ? void 0 : ve.trim();
    }), re = L(() => !!(p.value === 2 || Ue.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), I = L(() => Ue.value || o.workspacePath || null);
    async function z() {
      var ve;
      if (j.value = null, !!((ve = P.value) != null && ve.trim()))
        try {
          const Q = await u({ path: P.value, type: "workspace" });
          Q.valid || (j.value = Q.error || "Invalid path");
        } catch (Q) {
          j.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function ce() {
      var ve;
      if (E.value = null, V.value = null, ie.value = null, !!((ve = F.value) != null && ve.trim()))
        try {
          const Q = await u({ path: F.value, type: "models" });
          if (Q.valid)
            ie.value = Q.model_count ?? null;
          else if (E.value = Q.error || "Invalid path", Q.suggestion) {
            V.value = Q.suggestion, F.value = Q.suggestion, E.value = null;
            const He = await u({ path: Q.suggestion, type: "models" });
            He.valid && (ie.value = He.model_count ?? null);
          }
        } catch (Q) {
          E.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function Ce() {
      var ve, Q, He, ke, Ye;
      if (j.value = null, E.value = null, await z(), (ve = j.value) != null && ve.includes("already exists")) {
        j.value = null, Ue.value = ((Q = P.value) == null ? void 0 : Q.trim()) || o.defaultPath, p.value = 2, $e();
        return;
      }
      if (!j.value && !(T.value && ((He = F.value) != null && He.trim()) && (await ce(), E.value))) {
        A.value = !0;
        try {
          await l({
            workspace_path: ((ke = P.value) == null ? void 0 : ke.trim()) || o.defaultPath,
            models_directory: T.value && ((Ye = F.value) == null ? void 0 : Ye.trim()) || null
          }), H.value = 0, Z.value = Date.now();
          const ot = setInterval(async () => {
            var Ae;
            if (Z.value && Date.now() - Z.value > UE) {
              clearInterval(ot), A.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const O = await r();
              if (H.value = 0, O.state === "idle" && A.value) {
                clearInterval(ot), A.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Pe.value = { progress: O.progress, message: O.message }, O.state === "complete" ? (clearInterval(ot), A.value = !1, Ue.value = ((Ae = P.value) == null ? void 0 : Ae.trim()) || o.defaultPath, p.value = 2, $e()) : O.state === "error" && (clearInterval(ot), A.value = !1, j.value = O.error || "Workspace creation failed");
            } catch (O) {
              H.value++, console.warn(`Polling failure ${H.value}/${po}:`, O), H.value >= po && (clearInterval(ot), A.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ot) {
          A.value = !1, j.value = ot instanceof Error ? ot.message : "Failed to create workspace";
        }
      }
    }
    async function _e() {
      me.value = !0, le.value = null;
      try {
        const ve = {
          name: ee.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: he.value,
          torch_backend: se.value,
          switch_after: J.value,
          workspace_path: Ue.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(ve)).status === "started") {
          q.value = 0, X.value = Date.now();
          const He = setInterval(async () => {
            if (X.value && Date.now() - X.value > bi) {
              clearInterval(He), me.value = !1, le.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ke = await d();
              if (q.value = 0, ke.state === "idle" && me.value) {
                clearInterval(He), me.value = !1, le.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ge.value = {
                progress: ke.progress ?? 0,
                message: ke.message,
                phase: ke.phase
              }, ke.state === "complete") {
                clearInterval(He), me.value = !1;
                const Ye = ke.environment_name || ve.name;
                J.value ? a("complete", Ye, Ue.value) : (w.value = "landing", a("environment-created-no-switch", Ye));
              } else ke.state === "error" && (clearInterval(He), me.value = !1, le.value = ke.error || "Environment creation failed");
            } catch (ke) {
              q.value++, console.warn(`Polling failure ${q.value}/${po}:`, ke), q.value >= po && (clearInterval(He), me.value = !1, le.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        me.value = !1, le.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function $e() {
      ye.value = !0;
      try {
        oe.value = await v();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        ye.value = !1;
      }
    }
    function Oe() {
      _.value && a("switch-environment", _.value, Ue.value);
    }
    function ze() {
      w.value === "create" || w.value === "import" ? w.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Re(ve, Q) {
      b.value = !1, Q ? a("complete", ve, Ue.value) : (a("environment-created-no-switch", ve), w.value = "landing");
    }
    function Ie() {
    }
    ct(async () => {
      if (o.detectedModelsDir && (F.value = o.detectedModelsDir), o.workspacePath && (Ue.value = o.workspacePath), p.value === 2) {
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
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), w.value = "create", me.value = !0, ee.value = ve.environment_name || "my-new-env", Ge.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, Fe();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await m();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), N.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0,
          environmentName: ve.environment_name || ""
        }, S.value = !0, w.value = "import", b.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Fe() {
      q.value = 0, X.value = Date.now();
      let ve = null;
      const Q = async () => {
        if (X.value && Date.now() - X.value > bi)
          return ve && clearInterval(ve), me.value = !1, le.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const ke = await d();
          if (q.value = 0, ke.state === "idle" && me.value)
            return ve && clearInterval(ve), me.value = !1, le.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ge.value = {
            progress: ke.progress ?? 0,
            message: ke.message,
            phase: ke.phase
          }, ke.state === "complete") {
            ve && clearInterval(ve), me.value = !1;
            const Ye = ke.environment_name || ee.value;
            return a("complete", Ye, Ue.value), !1;
          } else if (ke.state === "error")
            return ve && clearInterval(ve), me.value = !1, le.value = ke.error || "Environment creation failed", !1;
          return !0;
        } catch (ke) {
          return q.value++, console.warn(`Polling failure ${q.value}/${po}:`, ke), q.value >= po ? (ve && clearInterval(ve), me.value = !1, le.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Q() && (ve = setInterval(async () => {
        !await Q() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, Q) => (n(), i(G, null, [
      C(Et, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (He) => ve.$emit("close"))
      }, {
        header: g(() => [
          Q[20] || (Q[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", eE, [
            C(dc),
            Q[19] || (Q[19] = s("span", { class: "header-divider" }, null, -1)),
            re.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Q[0] || (Q[0] = (He) => k.value = !0)
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
        body: g(() => {
          var He;
          return [
            p.value === 1 ? (n(), i("div", tE, [
              Q[24] || (Q[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", sE, [
                Q[21] || (Q[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                St(s("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (ke) => P.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, oE), [
                  [no, P.value]
                ]),
                j.value ? (n(), i("p", nE, f(j.value), 1)) : h("", !0)
              ]),
              s("div", aE, [
                s("label", lE, [
                  St(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (ke) => T.value = ke)
                  }, null, 512), [
                    [Wn, T.value]
                  ]),
                  Q[22] || (Q[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              T.value ? (n(), i("div", iE, [
                Q[23] || (Q[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                St(s("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (ke) => F.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, rE), [
                  [no, F.value]
                ]),
                e.detectedModelsDir && !F.value ? (n(), i("p", cE, " Detected: " + f(e.detectedModelsDir), 1)) : h("", !0),
                V.value ? (n(), i("p", uE, " Did you mean: " + f(V.value), 1)) : h("", !0),
                E.value ? (n(), i("p", dE, f(E.value), 1)) : h("", !0),
                ie.value !== null && !E.value ? (n(), i("p", fE, " Found " + f(ie.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              A.value ? (n(), R(jn, {
                key: 1,
                progress: Pe.value.progress,
                message: Pe.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            p.value === 2 ? (n(), i("div", mE, [
              M.value ? (n(), i("div", vE, [...Q[25] || (Q[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(G, { key: 1 }, [
                !o.cliInstalled && !y.value ? (n(), i("div", pE, [
                  s("div", gE, [
                    Q[27] || (Q[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (ke) => y.value = !0),
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
                w.value === "landing" ? (n(), i("div", hE, [
                  Q[34] || (Q[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Q[6] || (Q[6] = (ke) => w.value = "create")
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
                      S.value = !1, w.value = "import";
                    })
                  }, [...Q[32] || (Q[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (He = o.existingEnvironments) != null && He.length ? (n(), i(G, { key: 0 }, [
                    Q[33] || (Q[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", yE, [
                      (n(!0), i(G, null, ge(o.existingEnvironments, (ke) => (n(), i("label", {
                        key: ke,
                        class: Ve(["env-option", { selected: _.value === ke }])
                      }, [
                        St(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: ke,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (Ye) => _.value = Ye)
                        }, null, 8, wE), [
                          [Mn, _.value]
                        ]),
                        s("span", _E, f(ke), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : w.value === "create" ? (n(), i("div", kE, [
                  me.value ? (n(), i("div", NE, [
                    s("p", LE, [
                      Q[41] || (Q[41] = x(" Creating environment ", -1)),
                      s("strong", null, f(ee.value), 1),
                      Q[42] || (Q[42] = x("... ", -1))
                    ]),
                    C(jn, {
                      progress: Ge.value.progress,
                      message: Ge.value.message,
                      "current-phase": Ge.value.phase,
                      "show-steps": !0,
                      steps: Ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(G, { key: 0 }, [
                    Q[40] || (Q[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", bE, [
                      Q[35] || (Q[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      St(s("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (ke) => ee.value = ke),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [no, ee.value]
                      ])
                    ]),
                    s("div", $E, [
                      Q[36] || (Q[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      St(s("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (ke) => Y.value = ke),
                        class: "form-select"
                      }, [
                        (n(!0), i(G, null, ge(tt(Zr), (ke) => (n(), i("option", {
                          key: ke,
                          value: ke
                        }, f(ke), 9, CE))), 128))
                      ], 512), [
                        [Co, Y.value]
                      ])
                    ]),
                    s("div", xE, [
                      Q[37] || (Q[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      St(s("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (ke) => he.value = ke),
                        class: "form-select",
                        disabled: ye.value
                      }, [
                        (n(!0), i(G, null, ge(oe.value, (ke) => (n(), i("option", {
                          key: ke.tag_name,
                          value: ke.tag_name
                        }, f(ke.name), 9, IE))), 128))
                      ], 8, SE), [
                        [Co, he.value]
                      ])
                    ]),
                    s("div", EE, [
                      Q[38] || (Q[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      St(s("select", {
                        "onUpdate:modelValue": Q[12] || (Q[12] = (ke) => se.value = ke),
                        class: "form-select"
                      }, [
                        (n(!0), i(G, null, ge(tt(Sl), (ke) => (n(), i("option", {
                          key: ke,
                          value: ke
                        }, f(ke) + f(ke === "auto" ? " (detect GPU)" : ""), 9, TE))), 128))
                      ], 512), [
                        [Co, se.value]
                      ])
                    ]),
                    s("div", ME, [
                      s("label", PE, [
                        St(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Q[13] || (Q[13] = (ke) => J.value = ke)
                        }, null, 512), [
                          [Wn, J.value]
                        ]),
                        Q[39] || (Q[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    le.value ? (n(), i("div", RE, f(le.value), 1)) : h("", !0)
                  ], 64))
                ])) : w.value === "import" ? (n(), i("div", DE, [
                  C(nc, {
                    "workspace-path": Ue.value,
                    "resume-import": S.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: Re,
                    onImportStarted: Q[14] || (Q[14] = (ke) => b.value = !0),
                    onSourceCleared: Ie
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          s("div", OE, [
            C(fc),
            s("div", AE, [
              p.value === 1 ? (n(), R(Ne, {
                key: 0,
                variant: "primary",
                disabled: !xe.value || A.value,
                onClick: Ce
              }, {
                default: g(() => [
                  x(f(A.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(G, { key: 1 }, [
                !me.value && !b.value && (w.value !== "landing" || o.setupState === "no_workspace" && !Ue.value) ? (n(), R(Ne, {
                  key: 0,
                  variant: "secondary",
                  onClick: ze
                }, {
                  default: g(() => [...Q[44] || (Q[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                w.value === "create" ? (n(), R(Ne, {
                  key: 1,
                  variant: "primary",
                  disabled: !de.value || me.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    x(f(me.value ? "Creating..." : J.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                w.value === "landing" && _.value ? (n(), R(Ne, {
                  key: 2,
                  variant: "primary",
                  onClick: Oe
                }, {
                  default: g(() => [
                    x(" Switch to " + f(_.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      k.value ? (n(), R(Z6, {
        key: 0,
        "workspace-path": I.value,
        onClose: Q[16] || (Q[16] = (He) => k.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), VE = /* @__PURE__ */ Se(zE, [["__scopeId", "data-v-9a9aadc0"]]), FE = { class: "update-banner" }, BE = { class: "update-banner__left" }, WE = { class: "update-banner__title" }, GE = {
  key: 0,
  class: "update-banner__summary"
}, jE = { class: "update-banner__actions" }, HE = ["disabled"], qE = ["disabled"], KE = ["disabled"], JE = /* @__PURE__ */ be({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", FE, [
      s("div", BE, [
        s("div", WE, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", GE, f(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      s("div", jE, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, HE),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, qE)) : h("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, KE)
      ])
    ]));
  }
}), QE = /* @__PURE__ */ Se(JE, [["__scopeId", "data-v-49562c5c"]]), mc = "ComfyGit.UpdateNotice.DismissedVersion";
function YE() {
  try {
    return localStorage.getItem(mc);
  } catch {
    return null;
  }
}
function XE(e) {
  try {
    localStorage.setItem(mc, e);
  } catch {
  }
}
function ZE(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : YE() !== e.latest_version;
}
const eT = { class: "comfygit-panel" }, tT = { class: "panel-header" }, sT = { class: "header-left" }, oT = {
  key: 0,
  class: "header-info"
}, nT = { class: "header-actions" }, aT = { class: "env-switcher" }, lT = { class: "env-switcher-header" }, iT = { class: "env-control-buttons" }, rT = {
  key: 0,
  class: "header-info"
}, cT = { class: "branch-name" }, uT = { class: "panel-main" }, dT = { class: "sidebar" }, fT = { class: "sidebar-content" }, mT = { class: "sidebar-section" }, vT = { class: "sidebar-section" }, pT = { class: "sidebar-section" }, gT = { class: "sidebar-footer" }, hT = { class: "content-area" }, yT = {
  key: 0,
  class: "error-message"
}, wT = {
  key: 1,
  class: "loading"
}, _T = { class: "dialog-content env-selector-dialog" }, kT = { class: "dialog-header" }, bT = { class: "dialog-body" }, $T = { class: "env-list" }, CT = { class: "env-info" }, xT = { class: "env-name-row" }, ST = { class: "env-indicator" }, IT = { class: "env-name" }, ET = {
  key: 0,
  class: "env-branch"
}, TT = {
  key: 1,
  class: "current-label"
}, MT = { class: "env-stats" }, PT = ["onClick"], RT = { class: "toast-container" }, NT = { class: "toast-message" }, $i = "ComfyGit.LastView", Ci = "ComfyGit.LastSection", LT = /* @__PURE__ */ be({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, a = t, {
      getStatus: l,
      getHistory: r,
      getBranches: u,
      checkout: c,
      createBranch: d,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: p,
      switchEnvironment: _,
      getSwitchProgress: w,
      deleteEnvironment: k,
      syncEnvironmentManually: b,
      repairWorkflowModels: y,
      getSetupStatus: S,
      getUpdateCheck: N,
      updateManager: M
    } = pt(), P = Pv(), T = $(null), F = $([]), j = $([]), E = $([]), V = L(() => E.value.find((ae) => ae.is_current)), ie = $(null), ee = $(!1), Y = $(!1), he = $("history"), se = $("manifest"), J = $(null), le = $(!1), Ue = $(1), oe = L(() => {
      var ae;
      return ((ae = J.value) == null ? void 0 : ae.state) || "managed";
    }), ye = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, A = L(() => {
      var ae, K;
      return ((K = (ae = J.value) == null ? void 0 : ae.runtime_context) == null ? void 0 : K.capabilities) || ye;
    }), me = $(!1), Pe = $(null), Ge = $(null), Ee = $(!1), H = $(null), Z = $(!1), q = $(!1), X = L(() => !Z.value && ZE(H.value)), xe = $(null), de = $(null), re = $(null), I = $(!1), z = $(!1), ce = $(""), Ce = $(null), _e = $({ state: "idle", progress: 0, message: "" });
    let $e = null, Oe = null;
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
    ], Ke = ["this-env", "version-control", "workspace", "diagnostics"];
    function Fe() {
      try {
        const ae = sessionStorage.getItem($i), K = sessionStorage.getItem(Ci), qe = ae === "branches" || ae === "history" || ae === "remotes" ? "version-control" : ae === "manifest" || ae === "debug-env" || ae === "debug-workspace" ? "diagnostics" : ae, Qe = K === "all-envs" ? "workspace" : K === "sharing" ? "version-control" : K;
        if (ae && K && Ie.includes(qe) && Ke.includes(Qe))
          return { view: qe, section: Qe };
      } catch {
      }
      return null;
    }
    const ve = Fe(), Q = $((Re == null ? void 0 : Re.view) ?? (ve == null ? void 0 : ve.view) ?? "status"), He = $((Re == null ? void 0 : Re.section) ?? (ve == null ? void 0 : ve.section) ?? "this-env");
    function ke(ae, K) {
      Q.value = ae, He.value = K;
      try {
        sessionStorage.setItem($i, ae), sessionStorage.setItem(Ci, K);
      } catch {
      }
    }
    function Ye(ae) {
      const qe = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ae];
      qe && ke(qe.view, qe.section);
    }
    function ot(ae) {
      he.value = ae, ke("version-control", "version-control");
    }
    function Ae(ae) {
      se.value = ae, ke("diagnostics", "diagnostics");
    }
    function O() {
      ot("branches");
    }
    function ne() {
      a("close"), setTimeout(async () => {
        await pe("Comfy.OpenManagerDialog") || await pe("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Je(["Extensions", "Manage extensions"]) || Je(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function pe(ae) {
      var Qe, at;
      const K = window.app, qe = [
        (Qe = K == null ? void 0 : K.extensionManager) == null ? void 0 : Qe.command,
        (at = K == null ? void 0 : K.extensionManager) == null ? void 0 : at.commands,
        K == null ? void 0 : K.command,
        K == null ? void 0 : K.commands
      ];
      for (const vt of qe)
        if (typeof (vt == null ? void 0 : vt.execute) == "function")
          try {
            return await vt.execute(ae), !0;
          } catch (Nt) {
            console.debug(`[ComfyGit] Command ${ae} did not open Extensions manager`, Nt);
          }
      return !1;
    }
    function Je(ae) {
      var Qe, at, vt;
      const K = ae.map((Nt) => Nt.toLowerCase()), qe = document.querySelectorAll('button, [role="button"]');
      for (const Nt of qe) {
        const W = Nt;
        if ([
          (Qe = W.textContent) == null ? void 0 : Qe.trim(),
          (at = W.getAttribute("title")) == null ? void 0 : at.trim(),
          (vt = W.getAttribute("aria-label")) == null ? void 0 : vt.trim()
        ].filter(Boolean).map((Be) => Be.toLowerCase()).some((Be) => K.includes(Be)))
          return W.click(), !0;
      }
      return !1;
    }
    const D = $(null), U = $(!1), te = $(!1), Le = $([]);
    let De = 0;
    function Me(ae, K = "info", qe = 3e3) {
      const Qe = ++De;
      return Le.value.push({ id: Qe, message: ae, type: K }), qe > 0 && setTimeout(() => {
        Le.value = Le.value.filter((at) => at.id !== Qe);
      }, qe), Qe;
    }
    function je(ae) {
      Le.value = Le.value.filter((K) => K.id !== ae);
    }
    function nt(ae, K) {
      Me(ae, K);
    }
    async function bt() {
      H.value = null, Z.value = !1;
      try {
        H.value = await N();
      } catch {
      }
    }
    function Tt() {
      var K;
      const ae = (K = H.value) == null ? void 0 : K.release_url;
      if (ae)
        try {
          window.open(ae, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function ue() {
      var K;
      const ae = (K = H.value) == null ? void 0 : K.latest_version;
      ae && XE(ae), Z.value = !0;
    }
    async function B() {
      var K, qe;
      if (q.value) return;
      q.value = !0;
      const ae = Me("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await M();
        if (je(ae), Qe.status !== "success") {
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
        if (Me(Qe.message || "Update complete", "success"), ue(), Qe.restart_required) {
          Js();
          try {
            await ((qe = (K = window.app) == null ? void 0 : K.api) == null ? void 0 : qe.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        je(ae);
        const at = Qe instanceof Error ? Qe.message : "Update failed";
        Me(at, "error");
      } finally {
        q.value = !1;
      }
    }
    const fe = L(() => {
      if (!T.value) return "neutral";
      const ae = T.value.workflows, K = ae.new.length > 0 || ae.modified.length > 0 || ae.deleted.length > 0 || T.value.has_changes;
      return T.value.comparison.is_synced ? K ? "warning" : "success" : "error";
    });
    L(() => T.value ? fe.value === "success" ? "All synced" : fe.value === "warning" ? "Uncommitted changes" : fe.value === "error" ? "Not synced" : "" : "");
    async function We(ae = {}) {
      me.value = !0, Pe.value = null;
      try {
        const [K, qe, Qe, at] = await Promise.all([
          l(!0),
          r(),
          u(),
          p()
        ]);
        T.value = K, F.value = qe.commits, j.value = Qe.branches, E.value = at, a("statusUpdate", K), (ae.refreshWorkflows ?? !0) && xe.value && await xe.value.loadWorkflows(!0);
      } catch (K) {
        Pe.value = K instanceof Error ? K.message : "Failed to load status", T.value = null, F.value = [], j.value = [];
      } finally {
        me.value = !1;
      }
    }
    function ut(ae) {
      Ge.value = ae;
    }
    async function Ct(ae) {
      var qe;
      Ge.value = null;
      const K = T.value && (T.value.workflows.new.length > 0 || T.value.workflows.modified.length > 0 || T.value.workflows.deleted.length > 0 || T.value.has_changes);
      D.value = {
        title: K ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: K ? "You have uncommitted changes that will be lost." : `Checkout commit ${ae.short_hash || ((qe = ae.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: K ? pn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: K,
        onConfirm: async () => {
          var vt;
          D.value = null, Js();
          const Qe = Me(`Checking out ${ae.short_hash || ((vt = ae.hash) == null ? void 0 : vt.slice(0, 7))}...`, "info", 0), at = await c(ae.hash, K);
          je(Qe), at.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(at.message || "Checkout failed", "error");
        }
      };
    }
    async function lt(ae) {
      const K = T.value && (T.value.workflows.new.length > 0 || T.value.workflows.modified.length > 0 || T.value.workflows.deleted.length > 0 || T.value.has_changes);
      D.value = {
        title: K ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: K ? "You have uncommitted changes." : `Switch to branch "${ae}"?`,
        details: K ? pn() : void 0,
        warning: K ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, Js();
          const qe = Me(`Switching to ${ae}...`, "info", 0), Qe = await m(ae, K);
          je(qe), Qe.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function xt(ae) {
      const K = Me(`Creating branch ${ae}...`, "info", 0), qe = await d(ae);
      je(K), qe.status === "success" ? (Me(`Branch "${ae}" created`, "success"), await We()) : Me(qe.message || "Failed to create branch", "error");
    }
    async function ts(ae, K = !1) {
      const qe = async (Qe) => {
        var vt;
        const at = Me(`Deleting branch ${ae}...`, "info", 0);
        try {
          const Nt = await v(ae, Qe);
          je(at), Nt.status === "success" ? (Me(`Branch "${ae}" deleted`, "success"), await We()) : (vt = Nt.message) != null && vt.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await qe(!0);
            }
          } : Me(Nt.message || "Failed to delete branch", "error");
        } catch (Nt) {
          je(at);
          const W = Nt instanceof Error ? Nt.message : "Failed to delete branch";
          W.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await qe(!0);
            }
          } : Me(W, "error");
        }
      };
      D.value = {
        title: "Delete Branch",
        message: `Delete branch "${ae}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, await qe(K);
        }
      };
    }
    async function Ss(ae) {
      Ge.value = null;
      const K = prompt("Enter branch name:");
      if (K) {
        const qe = Me(`Creating branch ${K}...`, "info", 0), Qe = await d(K, ae.hash);
        je(qe), Qe.status === "success" ? (Me(`Branch "${K}" created from ${ae.short_hash}`, "success"), await We()) : Me(Qe.message || "Failed to create branch", "error");
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
      D.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ae;
          D.value = null, Js(), Me("Restarting environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/manager/reboot");
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
      D.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ae;
          D.value = null, Me("Stopping environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function zs(ae, K) {
      if (!A.value.can_switch_environment) {
        Me("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Ee.value = !1, ce.value = ae, Ce.value = K || null, I.value = !0;
    }
    async function ca() {
      I.value = !1, z.value = !0, Js(), _e.value = {
        progress: 10,
        state: uo(10),
        message: fo(10)
      };
      try {
        await _(ce.value, Ce.value || void 0), ua(), da();
      } catch (ae) {
        Is(), z.value = !1, Me(`Failed to initiate switch: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error"), _e.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
      }
    }
    function uo(ae) {
      return ae >= 100 ? "complete" : ae >= 80 ? "validating" : ae >= 60 ? "starting" : ae >= 30 ? "syncing" : "preparing";
    }
    function fo(ae) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[uo(ae)] || "";
    }
    function ua() {
      if (Oe) return;
      let ae = 10;
      const K = 60, qe = 5e3, Qe = 100, at = (K - ae) / (qe / Qe);
      Oe = window.setInterval(() => {
        if (ae += at, ae >= K && (ae = K, Is()), _e.value.progress < K) {
          const vt = Math.floor(ae);
          _e.value = {
            progress: vt,
            state: uo(vt),
            message: fo(vt)
          };
        }
      }, Qe);
    }
    function Is() {
      Oe && (clearInterval(Oe), Oe = null);
    }
    function da() {
      $e || ($e = window.setInterval(async () => {
        try {
          let ae = await P.getStatus();
          if ((!ae || ae.state === "idle") && (ae = await w()), !ae)
            return;
          const K = ae.progress || 0;
          K >= 60 && Is();
          const qe = Math.max(K, _e.value.progress), Qe = ae.state && ae.state !== "idle" && ae.state !== "unknown", at = Qe ? ae.state : uo(qe), vt = Qe && ae.message || fo(qe);
          _e.value = {
            state: at,
            progress: qe,
            message: vt
          }, ae.state === "complete" ? (Is(), Lo(), z.value = !1, Me(`✓ Switched to ${ce.value}`, "success"), await We(), ce.value = "") : ae.state === "rolled_back" ? (Is(), Lo(), z.value = !1, Me("Switch failed, restored previous environment", "warning"), ce.value = "") : ae.state === "critical_failure" && (Is(), Lo(), z.value = !1, Me(`Critical error during switch: ${ae.message}`, "error"), ce.value = "");
        } catch (ae) {
          console.error("Failed to poll switch progress:", ae);
        }
      }, 1e3));
    }
    function Lo() {
      Is(), $e && (clearInterval($e), $e = null);
    }
    function fa() {
      var ae;
      I.value = !1, ce.value = "", (ae = J.value) != null && ae.state && J.value.state !== "managed" && (Ue.value = J.value.state === "no_workspace" ? 1 : 2, le.value = !0);
    }
    async function ma(ae) {
      U.value = !1, await We(), Me(ae.message, ae.success ? "success" : "error");
    }
    async function va() {
      te.value = !1;
      const ae = Me("Syncing environment...", "info", 0);
      try {
        const K = await b("skip", !0);
        if (je(ae), K.status === "success") {
          const qe = [];
          K.nodes_installed.length && qe.push(`${K.nodes_installed.length} installed`), K.nodes_removed.length && qe.push(`${K.nodes_removed.length} removed`);
          const Qe = qe.length ? `: ${qe.join(", ")}` : "";
          Me(`✓ Environment synced${Qe}`, "success"), await We();
        } else {
          const qe = K.errors.length ? K.errors.join("; ") : K.message;
          Me(`Sync failed: ${qe}`, "error");
        }
      } catch (K) {
        je(ae), Me(`Sync error: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
      }
    }
    async function pa(ae) {
      var K;
      try {
        const qe = await y(ae);
        qe.failed.length === 0 ? Me(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Me(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await We();
      } catch (qe) {
        Me(`Repair failed: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
      } finally {
        (K = re.value) == null || K.resetRepairingState();
      }
    }
    async function vn() {
      var K, qe;
      const ae = Me("Repairing environment...", "info", 0);
      try {
        const Qe = await b("skip", !0);
        if (je(ae), Qe.status === "success") {
          const at = [];
          Qe.nodes_installed.length && at.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && at.push(`${Qe.nodes_removed.length} removed`);
          const vt = at.length ? `: ${at.join(", ")}` : "";
          Me(`✓ Environment repaired${vt}`, "success"), (K = re.value) == null || K.closeDetailModal(), await We();
        } else {
          const at = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Me(`Repair failed: ${at}`, "error");
        }
      } catch (Qe) {
        je(ae), Me(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (qe = re.value) == null || qe.resetRepairingEnvironmentState();
      }
    }
    async function ga(ae, K) {
      Me(`Environment '${ae}' created`, "success"), await We(), de.value && await de.value.loadEnvironments(), K && A.value.can_switch_environment && await zs(ae);
    }
    async function ha(ae) {
      var K;
      if (!A.value.can_delete_environment) {
        Me("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((K = V.value) == null ? void 0 : K.name) === ae) {
        Me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      D.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ae}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          D.value = null;
          try {
            const qe = await k(ae);
            qe.status === "success" ? (Me(`Environment "${ae}" deleted`, "success"), await We(), de.value && await de.value.loadEnvironments()) : Me(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Me(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ya(ae, K) {
      le.value = !1;
      try {
        J.value = await S();
      } catch {
      }
      A.value.can_switch_environment && await zs(ae, K);
    }
    function wa() {
      le.value = !1, a("close");
    }
    async function _a(ae, K) {
      await zs(ae, K);
    }
    async function ka(ae) {
      ee.value = !1, await We(), await zs(ae);
    }
    function ba() {
      ie.value = null, ee.value = !0;
    }
    function $a(ae) {
      ie.value = ae, Y.value = !0;
    }
    function Ca() {
      Y.value = !1, ie.value = null;
    }
    async function xa(ae) {
      J.value = await S(), console.log(`Environment '${ae}' created. Available for switching.`);
    }
    function Sa() {
      if (!A.value.can_create_environment) {
        Me("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      ke("environments", "workspace"), setTimeout(() => {
        var ae;
        (ae = de.value) == null || ae.openCreateModal();
      }, 100);
    }
    function pn() {
      if (!T.value) return [];
      const ae = [], K = T.value.workflows;
      return K.new.length && ae.push(`${K.new.length} new workflow(s)`), K.modified.length && ae.push(`${K.modified.length} modified workflow(s)`), K.deleted.length && ae.push(`${K.deleted.length} deleted workflow(s)`), ae;
    }
    return ct(async () => {
      try {
        if (J.value = await S(), J.value.state === "no_workspace" && A.value.can_initialize_workspace) {
          le.value = !0, Ue.value = 1;
          return;
        }
        if (J.value.state === "empty_workspace" && A.value.can_create_environment) {
          le.value = !0, Ue.value = 2;
          return;
        }
        if (J.value.state === "unmanaged" && A.value.can_switch_environment) {
          le.value = !0, Ue.value = 2;
          return;
        }
      } catch (ae) {
        console.warn("Setup status check failed, proceeding normally:", ae);
      }
      await Promise.all([
        We({ refreshWorkflows: !1 }),
        bt()
      ]);
    }), (ae, K) => {
      var qe, Qe, at, vt, Nt, W, we, Be, dt, Lt, jt, gs, ss;
      return n(), i("div", eT, [
        s("div", tT, [
          s("div", sT, [
            K[27] || (K[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            T.value ? (n(), i("div", oT)) : h("", !0)
          ]),
          s("div", nT, [
            C(dc),
            K[30] || (K[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ve(["icon-btn", { spinning: me.value }]),
              onClick: We,
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
              onClick: K[0] || (K[0] = (Ze) => a("close")),
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
        X.value && H.value ? (n(), R(QE, {
          key: 0,
          info: H.value,
          updating: q.value,
          onUpdate: B,
          onDismiss: ue,
          onReleaseNotes: Tt
        }, null, 8, ["info", "updating"])) : h("", !0),
        s("div", aT, [
          s("div", lT, [
            K[31] || (K[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", iT, [
              A.value.can_restart_current ? (n(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ia
              }, " Restart ")) : h("", !0),
              A.value.can_stop_current ? (n(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ra
              }, " Stop ")) : h("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: K[1] || (K[1] = (Ze) => ke("environments", "workspace"))
          }, [
            T.value ? (n(), i("div", rT, [
              s("span", null, f(((qe = V.value) == null ? void 0 : qe.name) || ((Qe = T.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              s("span", cT, "(" + f(T.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            K[32] || (K[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", uT, [
          s("div", dT, [
            s("div", fT, [
              s("div", mT, [
                K[33] || (K[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "status" && He.value === "this-env" }]),
                  onClick: K[2] || (K[2] = (Ze) => ke("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: K[3] || (K[3] = (Ze) => ke("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: K[4] || (K[4] = (Ze) => ke("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: K[5] || (K[5] = (Ze) => ke("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "version-control" }]),
                  onClick: K[6] || (K[6] = (Ze) => ot("history"))
                }, " VERSION CONTROL ", 2)
              ]),
              K[36] || (K[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", vT, [
                K[34] || (K[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: K[7] || (K[7] = (Ze) => ke("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: K[8] || (K[8] = (Ze) => ke("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: K[9] || (K[9] = (Ze) => ke("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              K[37] || (K[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", pT, [
                K[35] || (K[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "diagnostics" && se.value === "manifest" }]),
                  onClick: K[10] || (K[10] = (Ze) => Ae("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: Q.value === "diagnostics" && se.value !== "manifest" }]),
                  onClick: K[11] || (K[11] = (Ze) => Ae("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", gT, [
              C(fc)
            ])
          ]),
          s("div", hT, [
            Pe.value ? (n(), i("div", yT, f(Pe.value), 1)) : !T.value && Q.value === "status" ? (n(), i("div", wT, " Loading status... ")) : (n(), i(G, { key: 2 }, [
              Q.value === "status" ? (n(), R(Ev, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: re,
                status: T.value,
                "setup-state": oe.value,
                onSwitchBranch: O,
                onCommitChanges: K[12] || (K[12] = (Ze) => U.value = !0),
                onSyncEnvironment: K[13] || (K[13] = (Ze) => te.value = !0),
                onViewWorkflows: K[14] || (K[14] = (Ze) => ke("workflows", "this-env")),
                onViewHistory: K[15] || (K[15] = (Ze) => ot("history")),
                onViewDebug: K[16] || (K[16] = (Ze) => Ae("env")),
                onViewNodes: K[17] || (K[17] = (Ze) => ke("nodes", "this-env")),
                onRepairMissingModels: pa,
                onRepairEnvironment: vn,
                onStartSetup: K[18] || (K[18] = (Ze) => le.value = !0),
                onViewEnvironments: K[19] || (K[19] = (Ze) => ke("environments", "workspace")),
                onCreateEnvironment: Sa
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (n(), R(Tw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: xe,
                onRefresh: We
              }, null, 512)) : Q.value === "models-env" ? (n(), R(Gk, {
                key: 2,
                onNavigate: Ye
              })) : Q.value === "version-control" ? (n(), R(q4, {
                key: 3,
                commits: F.value,
                "current-ref": (at = T.value) == null ? void 0 : at.branch,
                branches: j.value,
                current: ((vt = T.value) == null ? void 0 : vt.branch) || null,
                "initial-tab": he.value,
                onSelect: ut,
                onCheckout: Ct,
                onSwitch: lt,
                onCreate: xt,
                onDelete: ts,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Q.value === "nodes" ? (n(), R(zb, {
                key: 4,
                "version-mismatches": ((W = (Nt = T.value) == null ? void 0 : Nt.comparison) == null ? void 0 : W.version_mismatches) || [],
                onOpenNodeManager: ne,
                onRepairEnvironment: vn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : Q.value === "diagnostics" ? (n(), R(iI, {
                key: 5,
                "initial-tab": se.value
              }, null, 8, ["initial-tab"])) : Q.value === "environments" ? (n(), R(U$, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: de,
                "can-create": A.value.can_create_environment,
                "can-switch": A.value.can_switch_environment,
                "can-delete": A.value.can_delete_environment,
                onSwitch: zs,
                onCreated: ga,
                onDelete: ha,
                onImport: ba,
                onExport: $a
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Q.value === "model-index" ? (n(), R(nb, {
                key: 7,
                onRefresh: We
              })) : Q.value === "settings" ? (n(), R(f2, { key: 8 })) : h("", !0)
            ], 64))
          ])
        ]),
        Ge.value ? (n(), R(xI, {
          key: 1,
          commit: Ge.value,
          onClose: K[20] || (K[20] = (Ze) => Ge.value = null),
          onCheckout: Ct,
          onCreateBranch: Ss
        }, null, 8, ["commit"])) : h("", !0),
        D.value ? (n(), R(xl, {
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
          onCancel: K[21] || (K[21] = (Ze) => D.value = null),
          onSecondary: D.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        ee.value ? (n(), R(Et, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: K[22] || (K[22] = (Ze) => ee.value = !1)
        }, {
          body: g(() => [
            C(z3, {
              embedded: "",
              onImportCompleteSwitch: ka
            })
          ]),
          _: 1
        })) : h("", !0),
        Y.value ? (n(), R(Et, {
          key: 4,
          title: ie.value ? `EXPORT ENVIRONMENT: ${ie.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          onClose: Ca
        }, {
          body: g(() => [
            C(GC, {
              embedded: "",
              "environment-name": ie.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        C(g6, {
          show: I.value,
          "from-environment": ((we = V.value) == null ? void 0 : we.name) || "unknown",
          "to-environment": ce.value,
          onConfirm: ca,
          onClose: fa
        }, null, 8, ["show", "from-environment", "to-environment"]),
        U.value && T.value ? (n(), R(uc, {
          key: 5,
          status: T.value,
          "as-modal": !0,
          onClose: K[23] || (K[23] = (Ze) => U.value = !1),
          onCommitted: ma
        }, null, 8, ["status"])) : h("", !0),
        te.value && T.value ? (n(), R(O6, {
          key: 6,
          show: te.value,
          "mismatch-details": {
            missing_nodes: T.value.comparison.missing_nodes,
            extra_nodes: T.value.comparison.extra_nodes
          },
          onConfirm: va,
          onClose: K[24] || (K[24] = (Ze) => te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        C(I6, {
          show: z.value,
          state: _e.value.state,
          progress: _e.value.progress,
          message: _e.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Ee.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: K[26] || (K[26] = ft((Ze) => Ee.value = !1, ["self"]))
        }, [
          s("div", _T, [
            s("div", kT, [
              K[39] || (K[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: K[25] || (K[25] = (Ze) => Ee.value = !1)
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
            s("div", bT, [
              K[40] || (K[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", $T, [
                (n(!0), i(G, null, ge(E.value, (Ze) => (n(), i("div", {
                  key: Ze.name,
                  class: Ve(["env-item", { current: Ze.is_current }])
                }, [
                  s("div", CT, [
                    s("div", xT, [
                      s("span", ST, f(Ze.is_current ? "●" : "○"), 1),
                      s("span", IT, f(Ze.name), 1),
                      Ze.current_branch ? (n(), i("span", ET, "(" + f(Ze.current_branch) + ")", 1)) : h("", !0),
                      Ze.is_current ? (n(), i("span", TT, "CURRENT")) : h("", !0)
                    ]),
                    s("div", MT, f(Ze.workflow_count) + " workflows • " + f(Ze.node_count) + " nodes ", 1)
                  ]),
                  !Ze.is_current && A.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ia) => zs(Ze.name)
                  }, " SWITCH ", 8, PT)) : h("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        le.value ? (n(), R(VE, {
          key: 8,
          "default-path": ((Be = J.value) == null ? void 0 : Be.default_path) || "~/comfygit",
          "detected-models-dir": ((dt = J.value) == null ? void 0 : dt.detected_models_dir) || null,
          "initial-step": Ue.value,
          "existing-environments": ((Lt = J.value) == null ? void 0 : Lt.environments) || [],
          "cli-installed": ((jt = J.value) == null ? void 0 : jt.cli_installed) ?? !0,
          "setup-state": ((gs = J.value) == null ? void 0 : gs.state) || "no_workspace",
          "workspace-path": ((ss = J.value) == null ? void 0 : ss.workspace_path) || null,
          onComplete: ya,
          onClose: wa,
          onSwitchEnvironment: _a,
          onEnvironmentCreatedNoSwitch: xa
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        s("div", RT, [
          C(zd, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(G, null, ge(Le.value, (Ze) => (n(), i("div", {
                key: Ze.id,
                class: Ve(["toast", Ze.type])
              }, [
                s("span", NT, f(Ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), DT = /* @__PURE__ */ Se(LT, [["__scopeId", "data-v-6a03333a"]]), OT = { class: "item-header" }, AT = { class: "item-info" }, UT = { class: "filename" }, zT = { class: "metadata" }, VT = { class: "size" }, FT = {
  key: 0,
  class: "type"
}, BT = { class: "item-actions" }, WT = {
  key: 0,
  class: "progress-section"
}, GT = { class: "progress-bar" }, jT = { class: "progress-stats" }, HT = { class: "downloaded" }, qT = { class: "speed" }, KT = {
  key: 0,
  class: "eta"
}, JT = {
  key: 1,
  class: "status-msg paused"
}, QT = {
  key: 2,
  class: "status-msg queued"
}, YT = {
  key: 3,
  class: "status-msg completed"
}, XT = {
  key: 4,
  class: "status-msg failed"
}, ZT = {
  key: 0,
  class: "retries"
}, e7 = /* @__PURE__ */ be({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
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
      class: Ve(["download-item", `status-${e.item.status}`])
    }, [
      s("div", OT, [
        s("div", AT, [
          s("div", UT, f(e.item.filename), 1),
          s("div", zT, [
            s("span", VT, f(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", FT, f(e.item.type), 1)) : h("", !0)
          ])
        ]),
        s("div", BT, [
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
      e.item.status === "downloading" ? (n(), i("div", WT, [
        s("div", GT, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", jT, [
          s("span", HT, f(a(e.item.downloaded)) + " / " + f(a(e.item.size)), 1),
          s("span", qT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", KT, f(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", JT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", QT, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", YT, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", XT, [
        x(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", ZT, "(" + f(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Uo = /* @__PURE__ */ Se(e7, [["__scopeId", "data-v-2110df65"]]), t7 = { class: "queue-title" }, s7 = { class: "count" }, o7 = { class: "queue-actions" }, n7 = { class: "action-label" }, a7 = {
  key: 0,
  class: "overall-progress"
}, l7 = { class: "progress-bar" }, i7 = {
  key: 0,
  class: "current-mini"
}, r7 = { class: "filename" }, c7 = { class: "speed" }, u7 = {
  key: 1,
  class: "queue-content"
}, d7 = {
  key: 0,
  class: "section"
}, f7 = {
  key: 1,
  class: "section"
}, m7 = { class: "section-header" }, v7 = { class: "section-label paused" }, p7 = { class: "items-list" }, g7 = {
  key: 2,
  class: "section"
}, h7 = { class: "section-header" }, y7 = { class: "section-label" }, w7 = { class: "items-list" }, _7 = {
  key: 3,
  class: "section"
}, k7 = { class: "section-header" }, b7 = { class: "section-label" }, $7 = { class: "items-list" }, C7 = {
  key: 4,
  class: "section"
}, x7 = { class: "section-header" }, S7 = { class: "section-label failed" }, I7 = { class: "items-list" }, E7 = /* @__PURE__ */ be({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: u,
      hasItems: c,
      activeCount: d,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: p,
      resumeAllPaused: _,
      removeItem: w,
      clearCompleted: k
    } = No(), b = $(!1);
    let y = null;
    kt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (P, T) => {
        y && (clearTimeout(y), y = null);
        const F = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, j = T && (T.active > 0 || T.paused > 0);
        F && j && (y = setTimeout(() => {
          k(), y = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = L(() => {
      var F;
      if (t.items.length === 0) return 0;
      const P = l.value.length, T = ((F = o.value) == null ? void 0 : F.progress) || 0;
      return Math.round((P + T / 100) / t.items.length * 100);
    });
    function N(P) {
      m(P);
    }
    function M(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, T) => (n(), R(Rt, { to: "body" }, [
      tt(c) ? (n(), i("div", {
        key: 0,
        class: Ve(["model-download-queue", { minimized: !b.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: T[0] || (T[0] = (F) => b.value = !b.value)
        }, [
          s("div", t7, [
            T[4] || (T[4] = s("span", { class: "icon" }, "↓", -1)),
            T[5] || (T[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", s7, "(" + f(tt(d)) + "/" + f(tt(t).items.length) + ")", 1)
          ]),
          s("div", o7, [
            s("span", n7, f(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (n(), i("div", u7, [
          tt(o) ? (n(), i("div", d7, [
            T[6] || (T[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            C(Uo, {
              item: tt(o),
              onCancel: T[1] || (T[1] = (F) => N(tt(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          tt(u).length > 0 ? (n(), i("div", f7, [
            s("div", m7, [
              s("span", v7, "Paused (" + f(tt(u).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: T[2] || (T[2] = //@ts-ignore
                (...F) => tt(_) && tt(_)(...F))
              }, "Resume All")
            ]),
            s("div", p7, [
              (n(!0), i(G, null, ge(tt(u), (F) => (n(), R(Uo, {
                key: F.id,
                item: F,
                onResume: (j) => tt(p)(F.id),
                onRemove: (j) => tt(w)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          tt(a).length > 0 ? (n(), i("div", g7, [
            s("div", h7, [
              s("span", y7, "Queued (" + f(tt(a).length) + ")", 1)
            ]),
            s("div", w7, [
              (n(!0), i(G, null, ge(tt(a), (F) => (n(), R(Uo, {
                key: F.id,
                item: F,
                onCancel: (j) => N(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          tt(l).length > 0 ? (n(), i("div", _7, [
            s("div", k7, [
              s("span", b7, "Completed (" + f(tt(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: T[3] || (T[3] = //@ts-ignore
                (...F) => tt(k) && tt(k)(...F))
              }, "Clear")
            ]),
            s("div", $7, [
              (n(!0), i(G, null, ge(tt(l).slice(0, 3), (F) => (n(), R(Uo, {
                key: F.id,
                item: F,
                onRemove: (j) => tt(w)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          tt(r).length > 0 ? (n(), i("div", C7, [
            s("div", x7, [
              s("span", S7, "Failed (" + f(tt(r).length) + ")", 1)
            ]),
            s("div", I7, [
              (n(!0), i(G, null, ge(tt(r), (F) => (n(), R(Uo, {
                key: F.id,
                item: F,
                onRetry: (j) => tt(v)(F.id),
                onRemove: (j) => tt(w)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (n(), i("div", a7, [
          s("div", l7, [
            s("div", {
              class: "progress-fill",
              style: Wt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          tt(o) ? (n(), i("div", i7, [
            s("span", r7, f(tt(o).filename), 1),
            s("span", c7, f(M(tt(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), T7 = /* @__PURE__ */ Se(E7, [["__scopeId", "data-v-3a3c9607"]]), M7 = { class: "detail-header" }, P7 = { class: "item-count" }, R7 = { class: "resource-list" }, N7 = { class: "item-info" }, L7 = { class: "item-name" }, D7 = {
  key: 0,
  class: "item-subtitle"
}, O7 = {
  key: 0,
  class: "installing-badge"
}, A7 = ["title"], U7 = {
  key: 2,
  class: "installed-badge"
}, z7 = {
  key: 3,
  class: "queued-badge"
}, V7 = {
  key: 4,
  class: "action-buttons"
}, F7 = {
  key: 1,
  class: "no-action"
}, B7 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = L(() => o.items.filter((w) => w.canAction)), r = L(() => l.value.length > 0 && l.value.every(
      (w) => {
        var k, b;
        return o.queuedItems.has(w.id) || ((k = o.installedItems) == null ? void 0 : k.has(w.id)) || ((b = o.failedItems) == null ? void 0 : b.has(w.id));
      }
    )), u = L(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function c(w) {
      return o.queuedItems.has(w.id);
    }
    function d(w) {
      return o.installingItem === w.id;
    }
    function m(w) {
      var k;
      return ((k = o.installedItems) == null ? void 0 : k.has(w.id)) ?? !1;
    }
    function v(w) {
      var k;
      return ((k = o.failedItems) == null ? void 0 : k.has(w.id)) ?? !1;
    }
    function p(w) {
      var k;
      return ((k = o.failedItems) == null ? void 0 : k.get(w.id)) || "Unknown error";
    }
    function _(w) {
      return w.actions && w.actions.length > 0 ? w.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (w, k) => (n(), R(Et, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = (b) => a("close"))
    }, {
      body: g(() => [
        s("div", M7, [
          s("span", P7, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), R(Ne, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: k[0] || (k[0] = (b) => a("bulk-action"))
          }, {
            default: g(() => [
              x(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        s("div", R7, [
          (n(!0), i(G, null, ge(e.items, (b) => (n(), i("div", {
            key: b.id,
            class: "resource-item"
          }, [
            s("div", N7, [
              s("span", L7, f(b.name), 1),
              b.subtitle ? (n(), i("span", D7, f(b.subtitle), 1)) : h("", !0)
            ]),
            b.canAction ? (n(), i(G, { key: 0 }, [
              d(b) ? (n(), i("span", O7, "Installing...")) : v(b) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(b)
              }, "Failed ⚠", 8, A7)) : m(b) ? (n(), i("span", U7, "Installed")) : c(b) ? (n(), i("span", z7, "Queued")) : (n(), i("div", V7, [
                (n(!0), i(G, null, ge(_(b), (y) => (n(), R(Ne, {
                  key: `${b.id}-${y.key}`,
                  size: "sm",
                  variant: y.variant || "secondary",
                  onClick: (S) => a("action", b, y.key)
                }, {
                  default: g(() => [
                    x(f(y.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", F7, f(b.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        C(Ne, {
          variant: "secondary",
          onClick: k[1] || (k[1] = (b) => a("close"))
        }, {
          default: g(() => [...k[3] || (k[3] = [
            x("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), W7 = /* @__PURE__ */ Se(B7, [["__scopeId", "data-v-ec7e9202"]]), G7 = {
  key: 0,
  class: "loading-state"
}, j7 = {
  key: 1,
  class: "analysis-results"
}, H7 = {
  key: 0,
  class: "section"
}, q7 = { class: "section-header" }, K7 = { class: "section-title" }, J7 = { class: "item-list" }, Q7 = { class: "package-info" }, Y7 = { class: "package-name" }, X7 = { class: "node-count" }, Z7 = {
  key: 1,
  class: "installing-badge"
}, eM = {
  key: 2,
  class: "queued-badge"
}, tM = ["title"], sM = {
  key: 4,
  class: "installed-badge"
}, oM = {
  key: 1,
  class: "section"
}, nM = { class: "section-header" }, aM = { class: "section-title" }, lM = { class: "item-list" }, iM = { class: "node-type" }, rM = {
  key: 0,
  class: "overflow-note"
}, cM = {
  key: 2,
  class: "section"
}, uM = { class: "section-header" }, dM = { class: "section-title" }, fM = { class: "item-list" }, mM = { class: "node-type" }, vM = { class: "not-found" }, pM = {
  key: 0,
  class: "overflow-note"
}, gM = {
  key: 3,
  class: "section"
}, hM = { class: "section-header" }, yM = { class: "section-title" }, wM = { class: "item-list" }, _M = { class: "package-info community-info" }, kM = { class: "community-title-row" }, bM = { class: "package-name" }, $M = { class: "node-count" }, CM = { class: "community-mapping-note" }, xM = { key: 0 }, SM = {
  key: 0,
  class: "community-actions"
}, IM = {
  key: 1,
  class: "installing-badge"
}, EM = {
  key: 2,
  class: "queued-badge"
}, TM = ["title"], MM = {
  key: 4,
  class: "installed-badge"
}, PM = ["title"], RM = {
  key: 1,
  class: "no-url"
}, NM = {
  key: 4,
  class: "section"
}, LM = { class: "section-header" }, DM = { class: "section-title" }, OM = { class: "item-list" }, AM = { class: "model-info" }, UM = { class: "model-name" }, zM = {
  key: 1,
  class: "queued-badge"
}, VM = {
  key: 1,
  class: "no-url"
}, FM = { class: "dont-show-again" }, BM = 3e4, WM = /* @__PURE__ */ be({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = $(!1), o = $(null), a = $(null), l = $(!1), r = $(/* @__PURE__ */ new Set()), u = $(/* @__PURE__ */ new Set()), c = $(/* @__PURE__ */ new Map()), d = $(/* @__PURE__ */ new Set()), m = $(!1), v = $(null), p = $(0), _ = $(null), w = $(/* @__PURE__ */ new Set()), k = $(/* @__PURE__ */ new Map()), b = $(/* @__PURE__ */ new Map()), { addToQueue: y } = No(), { queueNodeInstall: S } = pt(), N = L(() => {
      var O;
      return ((O = a.value) == null ? void 0 : O.package_aliases) || {};
    });
    function M(O) {
      if (!O) return null;
      const ne = N.value;
      let pe = O;
      const Je = /* @__PURE__ */ new Set();
      for (; ne[pe] && !Je.has(pe); )
        Je.add(pe), pe = ne[pe];
      return pe;
    }
    function P(O, ne) {
      return O instanceof Error && O.message ? O.message : typeof O == "string" && O.trim().length > 0 ? O : ne;
    }
    function T(O) {
      for (const [ne, pe] of k.value.entries())
        pe === O && k.value.delete(ne);
    }
    function F(O) {
      if (!b.value.has(O)) return;
      const ne = b.value.get(O);
      clearTimeout(ne), b.value.delete(O);
    }
    function j() {
      for (const O of b.value.values())
        clearTimeout(O);
      b.value = /* @__PURE__ */ new Map();
    }
    function E(O) {
      F(O);
      const ne = setTimeout(() => {
        if (b.value.delete(O), !u.value.has(O)) return;
        T(O), u.value.delete(O), v.value === O && (v.value = null), c.value.set(O, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", O);
      }, BM);
      b.value.set(O, ne);
    }
    function V(O) {
      const ne = `Cannot install "${O.title}" - package_id is missing`;
      c.value.set(O.item_id, ne), o.value = ne, console.warn("[ComfyGit] Community install requested without package_id:", O);
    }
    const ie = L(() => ee.value.length > 0 || he.value.length > 0 || se.value.length > 0 || J.value.length > 0 || A.value.length > 0), ee = L(() => {
      var pe, Je;
      if (!((pe = a.value) != null && pe.nodes)) return [];
      const O = /* @__PURE__ */ new Map(), ne = (a.value.nodes.resolved || []).filter((D) => {
        var U;
        return !D.is_installed && ((U = D.package) == null ? void 0 : U.package_id);
      });
      for (const D of ne) {
        const U = M(D.package.package_id);
        if (!U) continue;
        O.has(U) || O.set(U, {
          package_id: U,
          title: D.package.title || U,
          node_count: 0,
          node_types: [],
          repository: D.package.repository || null,
          latest_version: D.package.latest_version || null
        });
        const te = O.get(U);
        te.node_count++, te.node_types.push(((Je = D.reference) == null ? void 0 : Je.node_type) || D.node_type);
      }
      return Array.from(O.values());
    }), Y = L(() => ee.value.reduce((O, ne) => O + ne.node_count, 0)), he = L(() => {
      var O;
      return (O = a.value) != null && O.nodes ? (a.value.nodes.unresolved || []).map((ne) => {
        var pe;
        return {
          node_type: ((pe = ne.reference) == null ? void 0 : pe.node_type) || ne.node_type
        };
      }) : [];
    }), se = L(() => {
      var ne;
      if (!((ne = a.value) != null && ne.nodes)) return [];
      const O = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((pe) => {
        var D;
        const Je = ((D = pe.reference) == null ? void 0 : D.node_type) || pe.node_type;
        return {
          node_type: Je,
          guidance: pe.guidance || O[Je] || null
        };
      });
    }), J = L(() => {
      var pe, Je, D, U, te, Le, De, Me;
      if (!((pe = a.value) != null && pe.nodes)) return [];
      const O = a.value.node_guidance || {}, ne = /* @__PURE__ */ new Map();
      for (const je of a.value.nodes.uninstallable || []) {
        const nt = ((Je = je.reference) == null ? void 0 : Je.node_type) || je.node_type, bt = M(((D = je.package) == null ? void 0 : D.package_id) || null), Tt = bt || `node:${nt}`;
        ne.has(Tt) || ne.set(Tt, {
          item_id: Tt,
          node_type: nt,
          title: ((U = je.package) == null ? void 0 : U.title) || bt || nt,
          node_count: 0,
          package_id: bt,
          repository: ((te = je.package) == null ? void 0 : te.repository) || null,
          latest_version: ((Le = je.package) == null ? void 0 : Le.latest_version) || null,
          guidance: je.guidance || O[nt] || null
        });
        const ue = ne.get(Tt);
        ue.node_count++, ue.guidance || (ue.guidance = je.guidance || O[nt] || null), !ue.repository && ((De = je.package) != null && De.repository) && (ue.repository = je.package.repository), !ue.latest_version && ((Me = je.package) != null && Me.latest_version) && (ue.latest_version = je.package.latest_version);
      }
      return Array.from(ne.values());
    }), le = L(() => J.value.filter((O) => !!O.package_id)), Ue = L(() => J.value.length >= 5 ? J.value.slice(0, 4) : J.value), oe = L(() => le.value.length > 0 && le.value.every((O) => {
      const ne = O.package_id;
      return r.value.has(ne) || u.value.has(ne) || c.value.has(ne);
    }));
    function ye(O) {
      const ne = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return O.repository && ne.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), ne;
    }
    const A = L(() => {
      var D;
      if (!((D = a.value) != null && D.models)) return [];
      const O = (a.value.models.resolved || []).filter(
        (U) => U.match_type === "download_intent" || U.match_type === "property_download_intent" || U.match_type === "not_found"
      ).map((U) => {
        var te, Le, De, Me;
        return {
          filename: ((Le = (te = U.reference) == null ? void 0 : te.widget_value) == null ? void 0 : Le.split("/").pop()) || ((De = U.reference) == null ? void 0 : De.widget_value) || U.widget_value,
          widget_value: ((Me = U.reference) == null ? void 0 : Me.widget_value) || U.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: U.download_source || null,
          targetPath: U.target_path || null,
          canDownload: !!(U.download_source && U.target_path)
        };
      }), ne = (a.value.models.unresolved || []).map((U) => {
        var te, Le, De, Me;
        return {
          filename: ((Le = (te = U.reference) == null ? void 0 : te.widget_value) == null ? void 0 : Le.split("/").pop()) || ((De = U.reference) == null ? void 0 : De.widget_value) || U.widget_value,
          widget_value: ((Me = U.reference) == null ? void 0 : Me.widget_value) || U.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), pe = /* @__PURE__ */ new Map(), Je = [];
      for (const U of O) {
        if (!U.url) {
          Je.push(U);
          continue;
        }
        const te = `${U.filename}::${U.url}`, Le = pe.get(te);
        if (!Le) {
          pe.set(te, U);
          continue;
        }
        !Le.targetPath && U.targetPath && (Le.targetPath = U.targetPath), !Le.canDownload && U.canDownload && (Le.canDownload = U.canDownload);
      }
      return [...pe.values(), ...Je, ...ne];
    }), me = L(() => A.value.filter((O) => O.canDownload)), Pe = L(() => ee.value.length >= 5 ? ee.value.slice(0, 4) : ee.value), Ge = L(() => A.value.length >= 5 ? A.value.slice(0, 4) : A.value), Ee = L(() => ee.value.length > 0 && ee.value.every(
      (O) => r.value.has(O.package_id) || u.value.has(O.package_id) || c.value.has(O.package_id)
    )), H = L(() => me.value.length > 0 && me.value.every((O) => d.value.has(O.url))), Z = L(() => ee.value.length > 0 || le.value.length > 0 || me.value.length > 0), q = L(() => {
      const O = (ee.value.length === 0 || Ee.value) && (le.value.length === 0 || oe.value), ne = me.value.length === 0 || H.value;
      return O && ne;
    }), X = L(() => _.value === "models" ? `Missing Models (${A.value.length})` : _.value === "packages" ? `Missing Custom Nodes (${Y.value})` : _.value === "community" ? `Community-Mapped Packages (${J.value.length})` : ""), xe = L(() => _.value === "models" ? A.value.map((O) => ({
      id: O.url || O.widget_value,
      name: O.filename,
      canAction: O.canDownload,
      actionDisabledReason: O.canDownload ? void 0 : "Manual download required"
    })) : _.value === "packages" ? ee.value.map((O) => ({
      id: O.package_id,
      name: O.title,
      subtitle: `(${O.node_count} ${O.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : _.value === "community" ? J.value.map((O) => ({
      id: O.package_id || O.item_id,
      name: O.title,
      subtitle: `(${O.node_count} ${O.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!O.package_id,
      actionDisabledReason: O.package_id ? void 0 : "Manual setup required",
      actions: O.package_id ? ye(O) : []
    })) : []);
    function de(O, ne) {
      if (_.value === "models") {
        const pe = A.value.find((Je) => Je.url === O.id || Je.widget_value === O.id);
        pe && Ce(pe);
      } else if (_.value === "packages") {
        const pe = ee.value.find((Je) => Je.package_id === O.id);
        pe && I(pe);
      } else if (_.value === "community") {
        const pe = J.value.find((D) => (D.package_id || D.item_id) === O.id);
        if (!pe) return;
        if (!pe.package_id) {
          V({ item_id: pe.item_id, title: pe.title });
          return;
        }
        z(pe, ne === "install_git" ? "git" : "registry");
      }
    }
    function re() {
      _.value === "models" ? Oe() : _.value === "packages" ? _e() : _.value === "community" && $e();
    }
    async function I(O) {
      return ce(O.package_id, O.latest_version, "registry");
    }
    async function z(O, ne) {
      return O.package_id ? ce(O.package_id, O.latest_version, ne, O.repository) : (V({ item_id: O.item_id, title: O.title }), !1);
    }
    async function ce(O, ne, pe, Je) {
      const D = M(O) || O, U = ne || "latest";
      if (r.value.has(D) || u.value.has(D) || c.value.has(D))
        return !0;
      ot(), v.value = D;
      let te = null;
      try {
        const Le = {
          id: D,
          version: U,
          selected_version: U,
          mode: "remote",
          channel: "default"
        };
        pe === "git" && Je && (Le.repository = Je, Le.install_source = "git");
        const { ui_id: De } = await S(Le, {
          beforeQueueStart: (Me) => {
            te = Me, k.value.set(Me, D), u.value.add(D), E(D), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Me,
              packageId: D,
              pendingInstalls: Array.from(k.value.entries())
            });
          }
        });
        return te || (te = De, k.value.set(De, D), u.value.add(D), E(D), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: De,
          packageId: D,
          pendingInstalls: Array.from(k.value.entries())
        })), !0;
      } catch (Le) {
        const De = P(Le, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Le), te && k.value.delete(te), T(D), F(D), u.value.delete(D), c.value.set(D, De), !1;
      } finally {
        v.value = null;
      }
    }
    function Ce(O) {
      !O.url || !O.targetPath || d.value.has(O.url) || (y([{
        workflow: "unsaved",
        filename: O.filename,
        url: O.url,
        targetPath: O.targetPath
      }]), d.value.add(O.url));
    }
    async function _e() {
      const O = { attempted: 0, failed: 0 };
      for (const ne of ee.value)
        !r.value.has(ne.package_id) && !u.value.has(ne.package_id) && !c.value.has(ne.package_id) && (O.attempted++, await I(ne) || O.failed++);
      return O;
    }
    async function $e() {
      const O = { attempted: 0, failed: 0 };
      for (const ne of le.value) {
        const pe = ne.package_id;
        !r.value.has(pe) && !u.value.has(pe) && !c.value.has(pe) && (O.attempted++, await z(ne, "registry") || O.failed++);
      }
      return O;
    }
    function Oe() {
      const O = me.value.filter(
        (ne) => !d.value.has(ne.url)
      );
      if (O.length === 0) return 0;
      y(O.map((ne) => ({
        workflow: "unsaved",
        filename: ne.filename,
        url: ne.url,
        targetPath: ne.targetPath
      })));
      for (const ne of O)
        d.value.add(ne.url);
      return O.length;
    }
    async function ze() {
      const O = await _e(), ne = await $e();
      Oe();
      const pe = O.attempted + ne.attempted, Je = O.failed + ne.failed;
      if (pe > 0 && Je > 0) {
        const D = pe - Je;
        o.value = `${D} of ${pe} installs queued, ${Je} failed`;
      }
    }
    function Re() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ie(O) {
      var D, U;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ne = O == null ? void 0 : O.id;
      if (ne && w.value.has(ne)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ne} this session`);
        return;
      }
      const pe = window.app, Je = (D = pe == null ? void 0 : pe.extensionManager) == null ? void 0 : D.workflow;
      if (Je) {
        let De = !1;
        for (let Me = 0; Me < 20; Me++) {
          const je = Je.activeWorkflow;
          if (!je) {
            await new Promise((Tt) => setTimeout(Tt, 50));
            continue;
          }
          const nt = (U = je.activeState) == null ? void 0 : U.id;
          if (!(ne && nt === ne)) {
            Me < 19 && await new Promise((Tt) => setTimeout(Tt, 50));
            continue;
          }
          if (De = !0, je.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${je.filename}`), ne && w.value.add(ne);
            return;
          }
          break;
        }
        De || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, j(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), k.value = /* @__PURE__ */ new Map(), m.value = !1, p.value = 0;
      try {
        const te = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: O, name: "unsaved" })
        });
        if (!te.ok) {
          const Le = await te.json();
          throw new Error(Le.error || "Failed to analyze workflow");
        }
        a.value = await te.json(), ie.value && (l.value = !0, ne && w.value.add(ne));
      } catch (te) {
        console.error("[ComfyGit] Failed to analyze workflow:", te);
      } finally {
        t.value = !1;
      }
    }
    function Ke() {
      j(), l.value = !1, a.value = null;
    }
    function Fe(O) {
      const { workflow: ne } = O.detail;
      ne && Ie(ne);
    }
    function ve(O) {
      var Je;
      const ne = (Je = O.detail) == null ? void 0 : Je.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ne,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: O.detail
      });
      const pe = k.value.get(ne);
      pe ? (F(pe), v.value = pe, console.log("[ComfyGit] Installing package:", pe)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ne);
    }
    function Q(O) {
      var D, U, te, Le, De, Me, je;
      const ne = (D = O.detail) == null ? void 0 : D.ui_id, pe = (te = (U = O.detail) == null ? void 0 : U.status) == null ? void 0 : te.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ne,
        status: pe,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: O.detail
      });
      const Je = k.value.get(ne);
      if (Je) {
        if (F(Je), k.value.delete(ne), u.value.delete(Je), v.value === Je && (v.value = null), pe === "success")
          r.value.add(Je), p.value++, console.log("[ComfyGit] Package installed successfully:", Je);
        else {
          const nt = ((Me = (De = (Le = O.detail) == null ? void 0 : Le.status) == null ? void 0 : De.messages) == null ? void 0 : Me[0]) || ((je = O.detail) == null ? void 0 : je.result) || "Unknown error";
          c.value.set(Je, nt), console.error("[ComfyGit] Package install failed:", Je, nt);
        }
        k.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ne);
    }
    let He = null;
    function ke() {
      var O;
      return He || (He = (O = window.app) == null ? void 0 : O.api), He;
    }
    let Ye = !1;
    function ot() {
      if (Ye) return !0;
      const O = ke();
      return O ? (O.addEventListener("cm-task-started", ve), O.addEventListener("cm-task-completed", Q), O.addEventListener("comfygit:workflow-changed", Ae), Ye = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ae(O) {
      const { change_type: ne } = O.detail;
      (ne === "created" || ne === "modified") && l.value && (j(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return ct(() => {
      window.addEventListener("comfygit:workflow-loaded", Fe);
    }), Po(() => {
      if (j(), window.removeEventListener("comfygit:workflow-loaded", Fe), Ye) {
        const O = ke();
        O && (O.removeEventListener("cm-task-started", ve), O.removeEventListener("cm-task-completed", Q), O.removeEventListener("comfygit:workflow-changed", Ae)), Ye = !1;
      }
    }), (O, ne) => (n(), i(G, null, [
      l.value ? (n(), R(Et, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Ke
      }, {
        body: g(() => [
          t.value ? (n(), i("div", G7, [...ne[5] || (ne[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ie.value ? (n(), i("div", j7, [
            ee.value.length > 0 ? (n(), i("div", H7, [
              s("div", q7, [
                s("span", K7, "Missing Custom Nodes (" + f(Y.value) + ")", 1),
                ee.value.length > 1 ? (n(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ee.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    x(f(Ee.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", J7, [
                (n(!0), i(G, null, ge(Pe.value, (pe) => (n(), i("div", {
                  key: pe.package_id,
                  class: "package-item"
                }, [
                  s("div", Q7, [
                    s("span", Y7, f(pe.title), 1),
                    s("span", X7, "(" + f(pe.node_count) + " " + f(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(pe.package_id) && !u.value.has(pe.package_id) && !c.value.has(pe.package_id) ? (n(), R(Ne, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === pe.package_id,
                    onClick: (Je) => I(pe)
                  }, {
                    default: g(() => [
                      x(f(v.value === pe.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === pe.package_id ? (n(), i("span", Z7, "Installing...")) : u.value.has(pe.package_id) ? (n(), i("span", eM, "Queued")) : c.value.has(pe.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(pe.package_id)
                  }, "Failed ⚠", 8, tM)) : (n(), i("span", sM, "Installed"))
                ]))), 128)),
                ee.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ne[0] || (ne[0] = (pe) => _.value = "packages")
                }, [
                  s("span", null, "Show all " + f(ee.value.length) + " packages...", 1),
                  ne[6] || (ne[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            he.value.length > 0 ? (n(), i("div", oM, [
              s("div", nM, [
                s("span", aM, "Unknown Nodes (" + f(he.value.length) + ")", 1)
              ]),
              s("div", lM, [
                (n(!0), i(G, null, ge(he.value.slice(0, 5), (pe) => (n(), i("div", {
                  key: pe.node_type,
                  class: "item"
                }, [
                  s("code", iM, f(pe.node_type), 1),
                  ne[7] || (ne[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                he.value.length > 5 ? (n(), i("div", rM, " ...and " + f(he.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            se.value.length > 0 ? (n(), i("div", cM, [
              s("div", uM, [
                s("span", dM, "Requires Newer ComfyUI (" + f(se.value.length) + ")", 1)
              ]),
              s("div", fM, [
                (n(!0), i(G, null, ge(se.value.slice(0, 5), (pe) => (n(), i("div", {
                  key: `vg-${pe.node_type}`,
                  class: "item"
                }, [
                  s("code", mM, f(pe.node_type), 1),
                  s("span", vM, f(pe.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                se.value.length > 5 ? (n(), i("div", pM, " ...and " + f(se.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            J.value.length > 0 ? (n(), i("div", gM, [
              s("div", hM, [
                s("span", yM, "Community-Mapped Packages (" + f(J.value.length) + ")", 1),
                le.value.length > 1 ? (n(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: oe.value,
                  onClick: $e
                }, {
                  default: g(() => [
                    x(f(oe.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", wM, [
                (n(!0), i(G, null, ge(Ue.value, (pe) => (n(), i("div", {
                  key: `community-${pe.item_id}`,
                  class: "package-item"
                }, [
                  s("div", _M, [
                    s("div", kM, [
                      s("span", bM, f(pe.title), 1),
                      s("span", $M, "(" + f(pe.node_count) + " " + f(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", CM, [
                      ne[8] || (ne[8] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                      pe.guidance ? (n(), i("span", xM, ". " + f(pe.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  pe.package_id ? (n(), i(G, { key: 0 }, [
                    !r.value.has(pe.package_id) && !u.value.has(pe.package_id) && !c.value.has(pe.package_id) ? (n(), i("div", SM, [
                      C(Ne, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === pe.package_id,
                        onClick: (Je) => z(pe, "registry")
                      }, {
                        default: g(() => [
                          x(f(v.value === pe.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      pe.repository ? (n(), R(Ne, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === pe.package_id,
                        onClick: (Je) => z(pe, "git")
                      }, {
                        default: g(() => [...ne[9] || (ne[9] = [
                          x(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : v.value === pe.package_id ? (n(), i("span", IM, "Installing...")) : u.value.has(pe.package_id) ? (n(), i("span", EM, "Queued")) : c.value.has(pe.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(pe.package_id)
                    }, "Failed ⚠", 8, TM)) : (n(), i("span", MM, "Installed"))
                  ], 64)) : (n(), i(G, { key: 1 }, [
                    c.value.has(pe.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(pe.item_id)
                    }, "Failed ⚠", 8, PM)) : (n(), i("span", RM, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                J.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ne[1] || (ne[1] = (pe) => _.value = "community")
                }, [
                  s("span", null, "Show all " + f(J.value.length) + " packages...", 1),
                  ne[10] || (ne[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            A.value.length > 0 ? (n(), i("div", NM, [
              s("div", LM, [
                s("span", DM, "Missing Models (" + f(A.value.length) + ")", 1),
                me.value.length > 1 ? (n(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: H.value,
                  onClick: Oe
                }, {
                  default: g(() => [
                    x(f(H.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", OM, [
                (n(!0), i(G, null, ge(Ge.value, (pe) => (n(), i("div", {
                  key: pe.widget_value,
                  class: "model-item"
                }, [
                  s("div", AM, [
                    s("span", UM, f(pe.filename), 1)
                  ]),
                  pe.canDownload ? (n(), i(G, { key: 0 }, [
                    d.value.has(pe.url) ? (n(), i("span", zM, "Queued")) : (n(), R(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Ce(pe)
                    }, {
                      default: g(() => [...ne[11] || (ne[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", VM, "Manual download required"))
                ]))), 128)),
                A.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ne[2] || (ne[2] = (pe) => _.value = "models")
                }, [
                  s("span", null, "Show all " + f(A.value.length) + " models...", 1),
                  ne[12] || (ne[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            s("div", FM, [
              C(Hn, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  ne[3] || (ne[3] = (pe) => m.value = pe),
                  Re
                ]
              }, {
                default: g(() => [...ne[13] || (ne[13] = [
                  x(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          C(Ne, {
            variant: "secondary",
            onClick: Ke
          }, {
            default: g(() => [...ne[14] || (ne[14] = [
              x("Dismiss", -1)
            ])]),
            _: 1
          }),
          Z.value ? (n(), R(Ne, {
            key: 0,
            variant: "primary",
            disabled: q.value,
            onClick: ze
          }, {
            default: g(() => [
              x(f(q.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      _.value ? (n(), R(W7, {
        key: 1,
        title: X.value,
        items: xe.value,
        "item-type": _.value,
        "queued-items": _.value === "models" ? d.value : u.value,
        "installed-items": _.value === "models" ? void 0 : r.value,
        "failed-items": _.value === "models" ? void 0 : c.value,
        "installing-item": _.value === "models" ? void 0 : v.value,
        onClose: ne[4] || (ne[4] = (pe) => _.value = null),
        onAction: de,
        onBulkAction: re
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), GM = /* @__PURE__ */ Se(WM, [["__scopeId", "data-v-dfb55c3f"]]), jM = {
  key: 0,
  class: "io-mapping-root"
}, HM = { class: "io-mapping-visual-layer" }, qM = { class: "io-mapping-header" }, KM = { class: "io-mapping-header-main" }, JM = { class: "io-mapping-subtitle" }, QM = {
  key: 0,
  class: "io-mapping-hover-summary"
}, YM = { class: "io-mapping-header-actions" }, XM = { class: "io-mapping-sidebar" }, ZM = { class: "io-mapping-sidebar-scroll" }, eP = {
  key: 0,
  class: "io-state-block"
}, tP = {
  key: 1,
  class: "io-state-block io-state-error"
}, sP = { class: "contract-meta-section" }, oP = { class: "contract-meta-toggle-icon" }, nP = {
  key: 0,
  class: "contract-meta-body"
}, aP = { class: "contract-summary" }, lP = { class: "summary-pill" }, iP = { class: "summary-pill" }, rP = { class: "summary-pill" }, cP = { class: "mapping-section" }, uP = { class: "section-header" }, dP = {
  key: 0,
  class: "empty-message"
}, fP = ["onClick"], mP = { class: "item-card-title" }, vP = { class: "item-card-meta" }, pP = { class: "item-card-summary" }, gP = { key: 0 }, hP = { class: "mapping-section" }, yP = { class: "section-header" }, wP = {
  key: 0,
  class: "empty-message"
}, _P = ["onClick"], kP = { class: "item-card-title" }, bP = { class: "item-card-meta" }, $P = { class: "item-card-summary" }, CP = { class: "io-mapping-footer" }, xP = { class: "io-mapping-footer-left" }, SP = { class: "io-mapping-footer-right" }, IP = /* @__PURE__ */ be({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: a, deleteWorkflowContract: l } = pt(), r = $(!1), u = $(""), c = $(!1), d = $(!1), m = $(!1), v = $(null), p = $(null), _ = $(null), w = $(!1), k = $(!1), b = $(null), y = $(null), S = $(0), N = $(null), M = $(null);
    let P = null;
    const T = [
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
    ], j = L(() => {
      var D;
      return ((D = p.value) == null ? void 0 : D.contract_summary.has_contract) === !0;
    }), E = L(() => {
      if (!_.value)
        return { inputs: [], outputs: [] };
      const D = _.value.default_contract || "default";
      return _.value.contracts[D] || (_.value.contracts[D] = { inputs: [], outputs: [] }), _.value.contracts[D];
    }), V = L(() => {
      var U;
      const D = ((U = p.value) == null ? void 0 : U.contract_summary.status) ?? "none";
      return D === "valid" ? "Valid Contract" : D === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ie(D) {
      return D ? JSON.parse(JSON.stringify(D)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ee(D) {
      return D === "integer" || D === "number";
    }
    function Y(D) {
      return D === "enum";
    }
    function he(D) {
      return D == null ? "" : String(D);
    }
    function se(D) {
      const U = D.trim();
      if (!U) return;
      const te = Number(U);
      return Number.isFinite(te) ? te : void 0;
    }
    function J(D) {
      return (D || []).join(`
`);
    }
    function le(D) {
      return D.split(/[\n,]/).map((U) => U.trim()).filter(Boolean);
    }
    function Ue(D) {
      return typeof D == "string" ? D.length > 24 ? `${D.slice(0, 24)}...` : D : String(D);
    }
    function oe(D) {
      return D == null ? "" : String(D);
    }
    function ye(D) {
      var te;
      const U = (te = D == null ? void 0 : D.options) == null ? void 0 : te.values;
      return Array.isArray(U) ? U.map((Le) => String(Le)).filter(Boolean) : [];
    }
    function A(D, U) {
      var De;
      const te = (De = D == null ? void 0 : D.options) == null ? void 0 : De[U];
      if (te == null || te === "") return;
      const Le = Number(te);
      return Number.isFinite(Le) ? Le : void 0;
    }
    function me(D, U) {
      return D.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || U;
    }
    function Pe(D) {
      if (!_.value) return;
      const U = D.trim() || "default";
      _.value.default_contract = U, _.value.contracts[U] || (_.value.contracts[U] = { inputs: [], outputs: [] });
    }
    function Ge(D) {
      const U = String(D ?? "").toLowerCase();
      return U.includes("image") ? "image" : U.includes("video") ? "video" : U.includes("audio") ? "audio" : U.includes("int") ? "integer" : U.includes("float") || U.includes("double") || U.includes("number") ? "number" : U.includes("bool") ? "boolean" : U.includes("combo") || U.includes("enum") ? "enum" : U.includes("string") || U.includes("text") ? "string" : "file";
    }
    function Ee(D) {
      E.value.inputs.splice(D, 1), b.value === D && (b.value = null);
    }
    function H(D) {
      E.value.outputs.splice(D, 1), y.value === D && (y.value = null);
    }
    function Z(D) {
      b.value = b.value === D ? null : D, b.value != null && (y.value = null);
    }
    function q(D) {
      y.value = y.value === D ? null : D, y.value != null && (b.value = null);
    }
    function X(D) {
      const U = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(D)) : String(D);
      return document.querySelector(`[data-node-id="${U}"]`);
    }
    function xe(D) {
      return D instanceof Element ? !!D.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function de(D) {
      var Le, De, Me, je, nt, bt;
      if (!(D instanceof Element)) return null;
      const U = D.closest("[data-node-id]"), te = U == null ? void 0 : U.getAttribute("data-node-id");
      return te ? ((Me = (De = (Le = t.comfyApp) == null ? void 0 : Le.graph) == null ? void 0 : De.getNodeById) == null ? void 0 : Me.call(De, te)) ?? ((bt = (nt = (je = t.comfyApp) == null ? void 0 : je.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : bt.call(nt, te)) ?? null : null;
    }
    function re(D, U) {
      if (U == null || U < 0) return null;
      const te = X(D);
      return te ? te.querySelectorAll('[data-testid="node-widget"]')[U] ?? null : null;
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
      const te = t.comfyApp;
      if (!D || typeof (te == null ? void 0 : te.canvasPosToClientPos) != "function") return null;
      const De = te.canvasPosToClientPos([D.pos[0], D.pos[1] - 32]), Me = te.canvasPosToClientPos([D.pos[0] + D.size[0], D.pos[1] + D.size[1]]);
      return !De || !Me ? null : new DOMRect(De[0], De[1], Me[0] - De[0], Me[1] - De[1]);
    }
    function ce(D) {
      var nt, bt, Tt, ue, B, fe, We;
      const U = re(D.node_id, D.widget_idx);
      if (U) return U.getBoundingClientRect();
      const te = ((Tt = (bt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : bt.getNodeById) == null ? void 0 : Tt.call(bt, String(D.node_id))) ?? ((fe = (B = (ue = t.comfyApp) == null ? void 0 : ue.rootGraph) == null ? void 0 : B.getNodeById) == null ? void 0 : fe.call(B, String(D.node_id)));
      if (!te || typeof D.widget_idx != "number" || !Array.isArray(te.widgets)) return null;
      const Le = te.widgets[D.widget_idx];
      if (!Le || typeof ((We = t.comfyApp) == null ? void 0 : We.canvasPosToClientPos) != "function") return z(te);
      const De = 10, Me = t.comfyApp.canvasPosToClientPos([te.pos[0] + De, te.pos[1] + (Le.y ?? 0)]), je = t.comfyApp.canvasPosToClientPos([te.pos[0] + te.size[0] - De, te.pos[1] + (Le.y ?? 0) + (Le.computedHeight ?? 24)]);
      return !Me || !je ? z(te) : new DOMRect(Me[0], Me[1], je[0] - Me[0], je[1] - Me[1]);
    }
    function Ce(D) {
      var te, Le, De, Me, je, nt;
      const U = ((De = (Le = (te = t.comfyApp) == null ? void 0 : te.graph) == null ? void 0 : Le.getNodeById) == null ? void 0 : De.call(Le, String(D.node_id))) ?? ((nt = (je = (Me = t.comfyApp) == null ? void 0 : Me.rootGraph) == null ? void 0 : je.getNodeById) == null ? void 0 : nt.call(je, String(D.node_id)));
      return z(U);
    }
    const _e = L(() => (S.value, E.value.inputs.map((D, U) => {
      const te = I(ce(D));
      return te ? {
        key: `input-${U}-${D.node_id}-${D.widget_idx ?? "na"}`,
        style: te,
        active: b.value === U
      } : null;
    }).filter((D) => !!D))), $e = L(() => (S.value, E.value.outputs.map((D, U) => {
      const te = I(Ce(D));
      return te ? {
        key: `output-${U}-${D.node_id}-${D.selector ?? "primary"}`,
        style: te,
        active: y.value === U
      } : null;
    }).filter((D) => !!D)));
    function Oe(D) {
      var Tt, ue, B, fe, We, ut, Ct, lt, xt, ts;
      if (xe(D.target)) return null;
      const U = (Tt = t.comfyApp) == null ? void 0 : Tt.canvas;
      if (!U) return null;
      const te = (ue = U.convertEventToCanvasOffset) == null ? void 0 : ue.call(U, D);
      if (!te || te.length < 2) return null;
      const [Le, De] = te, Me = U.graph || ((B = t.comfyApp) == null ? void 0 : B.graph) || ((fe = t.comfyApp) == null ? void 0 : fe.rootGraph), je = ((We = Me == null ? void 0 : Me.getNodeOnPos) == null ? void 0 : We.call(Me, Le, De, U.visible_nodes)) || ((ut = U.getNodeOnPos) == null ? void 0 : ut.call(U, Le, De)) || de(D.target);
      if (!je) return null;
      const nt = (Ct = je.getWidgetOnPos) == null ? void 0 : Ct.call(je, Le, De, !0);
      if (nt)
        return { kind: "input", node: je, widget: nt, canvasX: Le, canvasY: De };
      const bt = ((lt = je.getOutputOnPos) == null ? void 0 : lt.call(je, [Le, De])) || ((ts = (xt = je.constructor) == null ? void 0 : xt.nodeData) != null && ts.output_node ? { name: je.title || je.type || "output", type: "image" } : null);
      return bt ? { kind: "output", node: je, output: bt, canvasX: Le, canvasY: De } : null;
    }
    function ze(D, U) {
      var nt;
      const te = Array.isArray(D.widgets) ? D.widgets.indexOf(U) : -1, Le = E.value.inputs.findIndex(
        (bt) => String(bt.node_id) === String(D.id) && bt.widget_idx === te
      );
      if (Le >= 0) {
        b.value = Le;
        return;
      }
      const De = typeof ((nt = U == null ? void 0 : U.options) == null ? void 0 : nt.property) == "string" ? U.options.property : void 0, Me = (U == null ? void 0 : U.name) || De || "input", je = {
        name: me(String(Me), `input_${E.value.inputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || De || `Input ${E.value.inputs.length + 1}`),
        type: Ge(U == null ? void 0 : U.type),
        node_id: String(D.id),
        widget_idx: te >= 0 ? te : void 0,
        field_key: De,
        required: !0,
        default: (U == null ? void 0 : U.value) ?? ""
      };
      ee(je.type) && (je.min = A(U, "min"), je.max = A(U, "max")), Y(je.type) && (je.enum_values = ye(U)), E.value.inputs.push(je), b.value = E.value.inputs.length - 1, y.value = null;
    }
    function Re(D, U) {
      const te = Array.isArray(D.outputs) ? D.outputs.indexOf(U) : -1, Le = te >= 0 ? `slot:${te}` : "primary", De = E.value.outputs.findIndex(
        (je) => String(je.node_id) === String(D.id) && (je.selector || "primary") === Le
      );
      if (De >= 0) {
        y.value = De;
        return;
      }
      const Me = {
        name: me(String((U == null ? void 0 : U.name) || "output"), `output_${E.value.outputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || `Output ${E.value.outputs.length + 1}`),
        type: Ge(U == null ? void 0 : U.type),
        node_id: String(D.id),
        selector: Le
      };
      E.value.outputs.push(Me), y.value = E.value.outputs.length - 1, b.value = null;
    }
    function Ie(D) {
      var Le, De, Me;
      if (!r.value) {
        N.value = null, M.value = null;
        return;
      }
      const U = Oe(D);
      if (!U) {
        N.value = null, M.value = null;
        return;
      }
      if (U.kind === "input") {
        const je = Array.isArray(U.node.widgets) ? U.node.widgets.indexOf(U.widget) : -1, nt = I(((Le = re(U.node.id, je)) == null ? void 0 : Le.getBoundingClientRect()) ?? ce({
          node_id: String(U.node.id),
          widget_idx: je >= 0 ? je : void 0
        }));
        if (!nt) {
          N.value = null, M.value = null;
          return;
        }
        N.value = {
          kind: "input",
          label: `${((De = U.widget) == null ? void 0 : De.name) || "widget"} · Node ${U.node.id}`
        }, M.value = { kind: "input", style: nt };
        return;
      }
      const te = I(z(U.node));
      if (!te) {
        N.value = null, M.value = null;
        return;
      }
      N.value = {
        kind: "output",
        label: `${((Me = U.output) == null ? void 0 : Me.name) || U.node.title || U.node.type || "output"} · Node ${U.node.id}`
      }, M.value = { kind: "output", style: te };
    }
    function Ke(D) {
      var Le, De, Me;
      if (!r.value || !_.value || D.button !== 0) return;
      const U = Oe(D);
      if (!U) return;
      const te = (Le = t.comfyApp) == null ? void 0 : Le.canvas;
      if (te) {
        if (U.kind === "input") {
          D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(te.graph_mouse) && (te.graph_mouse[0] = U.canvasX, te.graph_mouse[1] = U.canvasY), (De = te.selectNode) == null || De.call(te, U.node, !1), ze(U.node, U.widget);
          return;
        }
        D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(te.graph_mouse) && (te.graph_mouse[0] = U.canvasX, te.graph_mouse[1] = U.canvasY), (Me = te.selectNode) == null || Me.call(te, U.node, !1), Re(U.node, U.output);
      }
    }
    function Fe() {
      document.addEventListener("pointerdown", Ke, !0), document.addEventListener("pointermove", Ie, !0);
    }
    function ve() {
      document.removeEventListener("pointerdown", Ke, !0), document.removeEventListener("pointermove", Ie, !0);
    }
    async function Q() {
      if (u.value) {
        c.value = !0, v.value = null;
        try {
          p.value = await o(u.value), _.value = ie(p.value.execution_contract);
        } catch (D) {
          v.value = D instanceof Error ? D.message : "Failed to load workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    async function He() {
      if (!(!_.value || !u.value)) {
        d.value = !0, v.value = null;
        try {
          p.value = await a(u.value, _.value), _.value = ie(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: u.value }
          })), Ae({ reopenPanel: !0 });
        } catch (D) {
          v.value = D instanceof Error ? D.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function ke() {
      k.value = !0;
    }
    async function Ye() {
      if (u.value) {
        k.value = !1, m.value = !0, v.value = null;
        try {
          await l(u.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: u.value }
          })), Ae({ reopenPanel: !0 });
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
    function Ae(D) {
      r.value = !1, N.value = null, M.value = null, k.value = !1, D != null && D.reopenPanel && ot();
    }
    async function O(D) {
      var Le, De;
      const te = (De = (Le = D.detail) == null ? void 0 : Le.workflowName) == null ? void 0 : De.trim();
      te && (u.value = te, b.value = null, y.value = null, w.value = !1, r.value = !0, await Q());
    }
    function ne(D) {
      if (D.key === "Escape" && r.value) {
        if (k.value) {
          k.value = !1;
          return;
        }
        Ae({ reopenPanel: !0 });
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
      D ? (Fe(), pe()) : (ve(), Je());
    }), ct(() => {
      window.addEventListener("comfygit:open-io-mapping", O), window.addEventListener("keydown", ne);
    }), sa(() => {
      ve(), Je(), window.removeEventListener("comfygit:open-io-mapping", O), window.removeEventListener("keydown", ne);
    }), (D, U) => r.value ? (n(), i("div", jM, [
      s("div", HM, [
        (n(!0), i(G, null, ge(_e.value, (te) => (n(), i("div", {
          key: te.key,
          class: Ve(["io-highlight", "io-highlight-input", { active: te.active }]),
          style: Wt(te.style)
        }, null, 6))), 128)),
        (n(!0), i(G, null, ge($e.value, (te) => (n(), i("div", {
          key: te.key,
          class: Ve(["io-highlight", "io-highlight-output", { active: te.active }]),
          style: Wt(te.style)
        }, null, 6))), 128)),
        M.value ? (n(), i("div", {
          key: 0,
          class: Ve(["io-highlight", M.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Wt(M.value.style)
        }, null, 6)) : h("", !0)
      ]),
      s("div", qM, [
        s("div", KM, [
          U[8] || (U[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", JM, f(u.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          N.value ? (n(), i("div", QM, " Hovering " + f(N.value.kind) + ": " + f(N.value.label), 1)) : h("", !0)
        ]),
        s("div", YM, [
          C(Ne, {
            size: "sm",
            variant: "secondary",
            onClick: U[0] || (U[0] = (te) => Ae({ reopenPanel: !0 }))
          }, {
            default: g(() => [...U[9] || (U[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", XM, [
        s("div", ZM, [
          c.value ? (n(), i("div", eP, " Loading workflow contract... ")) : v.value ? (n(), i("div", tP, f(v.value), 1)) : _.value ? (n(), i(G, { key: 2 }, [
            s("section", sP, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: U[1] || (U[1] = (te) => w.value = !w.value)
              }, [
                U[10] || (U[10] = s("span", null, "Contract Details", -1)),
                s("span", oP, f(w.value ? "▾" : "▸"), 1)
              ]),
              w.value ? (n(), i("div", nP, [
                C(Dt, { label: "Default Contract" }, {
                  default: g(() => [
                    C(wt, {
                      "model-value": _.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Pe
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                C(Dt, { label: "Display Name" }, {
                  default: g(() => [
                    C(wt, {
                      modelValue: E.value.display_name,
                      "onUpdate:modelValue": U[2] || (U[2] = (te) => E.value.display_name = te),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                C(Dt, { label: "Description" }, {
                  default: g(() => [
                    C(xo, {
                      modelValue: E.value.description,
                      "onUpdate:modelValue": U[3] || (U[3] = (te) => E.value.description = te),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : h("", !0)
            ]),
            s("section", aP, [
              s("span", lP, f(V.value), 1),
              s("span", iP, f(E.value.inputs.length) + " input" + f(E.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", rP, f(E.value.outputs.length) + " output" + f(E.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", cP, [
              s("div", uP, [
                C(ao, { variant: "section" }, {
                  default: g(() => [...U[11] || (U[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.inputs.length ? h("", !0) : (n(), i("div", dP, " No inputs configured. ")),
              (n(!0), i(G, null, ge(E.value.inputs, (te, Le) => (n(), i("div", {
                key: `input-${Le}`,
                class: Ve(["item-card", { selected: b.value === Le }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (De) => Z(Le)
                }, [
                  s("div", null, [
                    s("div", mP, f(te.name || `Input ${Le + 1}`), 1),
                    s("div", vP, [
                      x(" Node " + f(te.node_id || "?"), 1),
                      te.widget_idx !== void 0 ? (n(), i(G, { key: 0 }, [
                        x(" · Widget " + f(te.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    s("div", pP, [
                      s("span", null, f(te.type || "string"), 1),
                      s("span", null, f(te.required ? "required" : "optional"), 1),
                      te.default !== void 0 && te.default !== "" ? (n(), i("span", gP, "default " + f(Ue(te.default)), 1)) : h("", !0)
                    ])
                  ]),
                  C(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: ft((De) => Ee(Le), ["stop"])
                  }, {
                    default: g(() => [...U[12] || (U[12] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, fP),
                b.value === Le ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[4] || (U[4] = ft(() => {
                  }, ["stop"]))
                }, [
                  C(Dt, { label: "Name" }, {
                    default: g(() => [
                      C(wt, {
                        modelValue: te.name,
                        "onUpdate:modelValue": (De) => te.name = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Dt, { label: "Display Name" }, {
                    default: g(() => [
                      C(wt, {
                        modelValue: te.display_name,
                        "onUpdate:modelValue": (De) => te.display_name = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Dt, { label: "Type" }, {
                    default: g(() => [
                      C(Rn, {
                        "model-value": te.type,
                        options: T,
                        "full-width": "",
                        "onUpdate:modelValue": (De) => te.type = De
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Dt, { label: "Required" }, {
                    default: g(() => [
                      C(Rn, {
                        "model-value": te.required ? "true" : "false",
                        options: F,
                        "full-width": "",
                        "onUpdate:modelValue": (De) => te.required = De === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Dt, {
                    class: Ve({ "item-grid-full": te.type === "string" || te.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      te.type === "string" ? (n(), R(xo, {
                        key: 0,
                        "model-value": oe(te.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (De) => te.default = De
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), R(wt, {
                        key: 1,
                        modelValue: te.default,
                        "onUpdate:modelValue": (De) => te.default = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ee(te.type) ? (n(), R(Dt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      C(wt, {
                        "model-value": he(te.min),
                        "full-width": "",
                        "onUpdate:modelValue": (De) => te.min = se(De)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  ee(te.type) ? (n(), R(Dt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      C(wt, {
                        "model-value": he(te.max),
                        "full-width": "",
                        "onUpdate:modelValue": (De) => te.max = se(De)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  Y(te.type) ? (n(), R(Dt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      C(xo, {
                        "model-value": J(te.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (De) => te.enum_values = le(De)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            s("section", hP, [
              s("div", yP, [
                C(ao, { variant: "section" }, {
                  default: g(() => [...U[13] || (U[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.outputs.length ? h("", !0) : (n(), i("div", wP, " No outputs configured. ")),
              (n(!0), i(G, null, ge(E.value.outputs, (te, Le) => (n(), i("div", {
                key: `output-${Le}`,
                class: Ve(["item-card", { selected: y.value === Le }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (De) => q(Le)
                }, [
                  s("div", null, [
                    s("div", kP, f(te.name || `Output ${Le + 1}`), 1),
                    s("div", bP, [
                      x(" Node " + f(te.node_id || "?"), 1),
                      te.selector ? (n(), i(G, { key: 0 }, [
                        x(" · " + f(te.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    s("div", $P, [
                      s("span", null, f(te.type || "file"), 1)
                    ])
                  ]),
                  C(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: ft((De) => H(Le), ["stop"])
                  }, {
                    default: g(() => [...U[14] || (U[14] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, _P),
                y.value === Le ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[5] || (U[5] = ft(() => {
                  }, ["stop"]))
                }, [
                  C(Dt, { label: "Name" }, {
                    default: g(() => [
                      C(wt, {
                        modelValue: te.name,
                        "onUpdate:modelValue": (De) => te.name = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Dt, { label: "Display Name" }, {
                    default: g(() => [
                      C(wt, {
                        modelValue: te.display_name,
                        "onUpdate:modelValue": (De) => te.display_name = De,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Dt, { label: "Type" }, {
                    default: g(() => [
                      C(Rn, {
                        "model-value": te.type,
                        options: T,
                        "full-width": "",
                        "onUpdate:modelValue": (De) => te.type = De
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        s("div", CP, [
          s("div", xP, [
            C(Ne, {
              variant: "secondary",
              onClick: U[6] || (U[6] = (te) => Ae({ reopenPanel: !0 }))
            }, {
              default: g(() => [...U[15] || (U[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", SP, [
            C(Ne, {
              variant: "danger",
              disabled: !j.value,
              loading: m.value,
              onClick: ke
            }, {
              default: g(() => [...U[16] || (U[16] = [
                x(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            C(Ne, {
              variant: "primary",
              loading: d.value,
              onClick: He
            }, {
              default: g(() => [...U[17] || (U[17] = [
                x(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      k.value ? (n(), R(xl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${u.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Ye,
        onCancel: U[7] || (U[7] = (te) => k.value = !1)
      }, null, 8, ["message"])) : h("", !0)
    ])) : h("", !0);
  }
}), EP = /* @__PURE__ */ Se(IP, [["__scopeId", "data-v-13515b27"]]), TP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', MP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', PP = {
  comfy: TP,
  phosphor: MP
}, El = "comfy", vc = "comfygit-theme";
let Zs = null, pc = El;
function RP() {
  try {
    const e = localStorage.getItem(vc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return El;
}
function gc(e = El) {
  Zs && Zs.remove(), Zs = document.createElement("style"), Zs.id = "comfygit-theme-styles", Zs.setAttribute("data-theme", e), Zs.textContent = PP[e], document.head.appendChild(Zs), document.body.setAttribute("data-comfygit-theme", e), pc = e;
  try {
    localStorage.setItem(vc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function NP() {
  return pc;
}
function LP(e) {
  gc(e);
}
function DP(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Tl = document.createElement("link");
Tl.rel = "stylesheet";
Tl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Tl);
const OP = RP();
gc(OP);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), LP(e);
  },
  getTheme: () => {
    const e = NP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ps = null, Xo = null, Xt = null, Zo = null, zo = null, xi = null, Vo = null, Si = null, Fo = null, Ii = null;
const So = $(null);
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
function AP() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function Cn(e) {
  Go(), Ps = document.createElement("div"), Ps.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ps.appendChild(t), Ps.addEventListener("click", (a) => {
    a.target === Ps && Go();
  });
  const o = (a) => {
    a.key === "Escape" && (Go(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Xo = mn({
    render: () => Ro(DT, {
      initialView: e,
      onClose: Go,
      onStatusUpdate: async (a) => {
        So.value = a, en(), await tl(), ol(), sl();
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
  const a = (l) => {
    l.key === "Escape" && (Bo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), Zo = mn({
    render: () => Ro(uc, {
      status: So.value,
      onClose: Bo,
      onCommitted: (l) => {
        Bo(), UP(l.success, l.message), Nn().then(en);
      }
    })
  }), Zo.mount(Xt), document.body.appendChild(Xt);
}
function Bo() {
  Zo && (Zo.unmount(), Zo = null), Xt && (Xt.remove(), Xt = null);
}
function UP(e, t) {
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
function zP() {
  zo || (zo = document.createElement("div"), zo.className = "comfygit-download-queue-root", xi = mn({
    render: () => Ro(T7)
  }), xi.mount(zo), document.body.appendChild(zo), console.log("[ComfyGit] Model download queue mounted"));
}
function VP() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-missing-resources-root", Si = mn({
    render: () => Ro(GM)
  }), Si.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function FP() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-io-mapping-root", Ii = mn({
    render: () => Ro(EP, {
      comfyApp: Zt
    })
  }), Ii.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Kt = null;
function en() {
  if (!Kt) return;
  const e = Kt.querySelector(".commit-indicator");
  e && (e.style.display = AP() ? "block" : "none");
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = Cn, Kt = document.createElement("button"), Kt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Kt.innerHTML = 'Commit <span class="commit-indicator"></span>', Kt.title = "Quick Commit", Kt.onclick = () => Ei(Kt), e.appendChild(t), e.appendChild(Kt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), zP(), VP(), FP(), window.addEventListener("comfygit:open-panel", ((u) => {
      var d;
      const c = (d = u.detail) == null ? void 0 : d.initialView;
      Cn(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Go();
    }));
    const { loadPendingDownloads: o } = No();
    o(), await Promise.all([Nn(), tl()]), en(), ol(), sl(), setTimeout(sl, 100), setInterval(async () => {
      await Promise.all([Nn(), tl()]), en(), ol();
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", p.appendChild(_);
        const w = document.createElement("button");
        w.textContent = "Refresh", w.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, w.onmouseover = () => w.style.background = "var(--comfy-input-bg)", w.onmouseout = () => w.style.background = "var(--comfy-menu-bg)", w.onclick = () => u(), p.appendChild(w);
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
        const _ = document.getElementById("comfygit-error-toast");
        _ && _.remove();
        const w = document.createElement("div");
        w.id = "comfygit-error-toast", w.style.cssText = `
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
        k.textContent = "⚠️", k.style.fontSize = "20px", w.appendChild(k);
        const b = document.createElement("div");
        b.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const y = document.createElement("div");
        y.textContent = "Node installation failed", y.style.cssText = "font-weight: 600; color: #e53935;", b.appendChild(y);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", b.appendChild(S), w.appendChild(b);
        const N = document.createElement("button");
        N.textContent = "View Logs", N.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, N.onmouseover = () => N.style.background = "#c62828", N.onmouseout = () => N.style.background = "#e53935", N.onclick = () => {
          w.remove(), Cn("debug-env");
        }, w.appendChild(N);
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
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => w.remove(), w.appendChild(M), document.body.appendChild(w), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && w.remove();
        }, 1e4);
      }, m = function(p) {
        const _ = document.getElementById("comfygit-restart-toast");
        _ && _.remove();
        const w = document.createElement("div");
        w.id = "comfygit-restart-toast", w.style.cssText = `
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
        k.textContent = "✅", k.style.fontSize = "20px", w.appendChild(k);
        const b = document.createElement("div");
        b.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const y = document.createElement("div");
        y.textContent = "To apply changes, please restart ComfyUI", y.style.cssText = "font-weight: 500; color: #fff;", b.appendChild(y);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", b.appendChild(S), w.appendChild(b);
        const N = document.createElement("button");
        N.textContent = "Apply Changes", N.style.cssText = `
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
        `, N.onmouseover = () => N.style.background = "rgba(255,255,255,0.1)", N.onmouseout = () => N.style.background = "transparent", N.onclick = async () => {
          N.disabled = !0, N.textContent = "Restarting...", N.style.opacity = "0.7", y.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", y.textContent = "Nodes Installed", y.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, w.style.borderColor = "#4caf50", N.style.display = "none", setTimeout(() => {
                  w.remove();
                }, 3e3);
              } catch (T) {
                console.error("[ComfyGit] Failed to refresh nodes:", T), k.textContent = "✅", y.textContent = "Restart Complete", y.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", w.style.borderColor = "#4caf50", N.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), y.textContent = "Restart Failed", y.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", w.style.borderColor = "#e53935", N.textContent = "Try Again", N.disabled = !1, N.style.opacity = "1";
          }
        }, w.appendChild(N);
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
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => w.remove(), w.appendChild(M), document.body.appendChild(w), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: _, workflow_name: w } = p.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${w}`), await Nn(), en();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const _ = p.detail != null;
        _ && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), v = _;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const _ = DP(p.detail);
        _ && d(_);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const _ = p, { count: w = 1 } = _.detail || {};
        m(w);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
