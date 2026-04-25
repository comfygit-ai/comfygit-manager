var Dc = Object.defineProperty;
var Nc = (e, t, o) => t in e ? Dc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var wn = (e, t, o) => Nc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as es } from "../../scripts/app.js";
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
}, Ui = () => !1, Jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, rl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Oc = Object.prototype.hasOwnProperty, mt = (e, t) => Oc.call(e, t), Xe = Array.isArray, wo = (e) => fn(e) === "[object Map]", To = (e) => fn(e) === "[object Set]", Nl = (e) => fn(e) === "[object Date]", et = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Ai = (e) => (gt(e) || et(e)) && et(e.then) && et(e.catch), zi = Object.prototype.toString, fn = (e) => zi.call(e), Uc = (e) => fn(e).slice(8, -1), Fi = (e) => fn(e) === "[object Object]", cl = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ho = /* @__PURE__ */ ll(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, Ac = /-\w/g, rs = Qn(
  (e) => e.replace(Ac, (t) => t.slice(1).toUpperCase())
), zc = /\B([A-Z])/g, Ks = Qn(
  (e) => e.replace(zc, "-$1").toLowerCase()
), Yn = Qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = Qn(
  (e) => e ? `on${Yn(e)}` : ""
), js = (e, t) => !Object.is(e, t), In = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Vi = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Xn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fc = (e) => {
  const t = $t(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ol;
const Zn = () => Ol || (Ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = $t(a) ? Gc(a) : Rt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if ($t(e) || gt(e))
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
const jc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Hc = /* @__PURE__ */ ll(jc);
function Bi(e) {
  return !!e || e === "";
}
function qc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = ao(e[a], t[a]);
  return o;
}
function ao(e, t) {
  if (e === t) return !0;
  let o = Nl(e), a = Nl(t);
  if (o || a)
    return o && a ? e.getTime() === t.getTime() : !1;
  if (o = ms(e), a = ms(t), o || a)
    return e === t;
  if (o = Xe(e), a = Xe(t), o || a)
    return o && a ? qc(e, t) : !1;
  if (o = gt(e), a = gt(t), o || a) {
    if (!o || !a)
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
function ul(e, t) {
  return e.findIndex((o) => ao(o, t));
}
const Wi = (e) => !!(e && e.__v_isRef === !0), f = (e) => $t(e) ? e : e == null ? "" : Xe(e) || gt(e) && (e.toString === zi || !et(e.toString)) ? Wi(e) ? f(e.value) : JSON.stringify(e, Gi, 2) : String(e), Gi = (e, t) => Wi(t) ? Gi(e, t.value) : wo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [a, l], r) => (o[Ma(a, r) + " =>"] = l, o),
    {}
  )
} : To(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ma(o))
} : ms(t) ? Ma(t) : gt(t) && !Xe(t) && !Fi(t) ? String(t) : t, Ma = (e, t = "") => {
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
class Kc {
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
function Jc() {
  return Qt;
}
let yt;
const Pa = /* @__PURE__ */ new WeakSet();
class ji {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ul(this), Ki(this);
    const t = yt, o = ds;
    yt = this, ds = !0;
    try {
      return this.fn();
    } finally {
      Ji(this), yt = t, ds = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ml(t);
      this.deps = this.depsTail = void 0, Ul(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Hi = 0, qo, Ko;
function qi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ko, Ko = e;
    return;
  }
  e.next = qo, qo = e;
}
function dl() {
  Hi++;
}
function fl() {
  if (--Hi > 0)
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
        } catch (a) {
          e || (e = a);
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
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), ml(a), Qc(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = o;
}
function Wa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Qi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Qi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === on) || (e.globalVersion = on, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = yt, a = ds;
  yt = e, ds = !0;
  try {
    Ki(e);
    const l = e.fn(e._value);
    (t.version === 0 || js(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    yt = o, ds = a, Ji(e), e.flags &= -3;
  }
}
function ml(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      ml(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Qc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ds = !0;
const Yi = [];
function Ns() {
  Yi.push(ds), ds = !1;
}
function Os() {
  const e = Yi.pop();
  ds = e === void 0 ? !0 : e;
}
function Ul(e) {
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
let on = 0;
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
    if (!yt || !ds || yt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== yt)
      o = this.activeLink = new Yc(yt, this), yt.deps ? (o.prevDep = yt.depsTail, yt.depsTail.nextDep = o, yt.depsTail = o) : yt.deps = yt.depsTail = o, Xi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = yt.depsTail, o.nextDep = void 0, yt.depsTail.nextDep = o, yt.depsTail = o, yt.deps === o && (yt.deps = a);
    }
    return o;
  }
  trigger(t) {
    this.version++, on++, this.notify(t);
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
function Xi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        Xi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ga = /* @__PURE__ */ new WeakMap(), so = Symbol(
  ""
), ja = Symbol(
  ""
), nn = Symbol(
  ""
);
function Ft(e, t, o) {
  if (ds && yt) {
    let a = Ga.get(e);
    a || Ga.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new vl()), l.map = a, l.key = o), l.track();
  }
}
function Rs(e, t, o, a, l, r) {
  const c = Ga.get(e);
  if (!c) {
    on++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (dl(), t === "clear")
    c.forEach(u);
  else {
    const d = Xe(e), m = d && cl(o);
    if (d && o === "length") {
      const v = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === nn || !ms(w) && w >= v) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(nn)), t) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(so)), wo(e) && u(c.get(ja)));
          break;
        case "delete":
          d || (u(c.get(so)), wo(e) && u(c.get(ja)));
          break;
        case "set":
          wo(e) && u(c.get(so));
          break;
      }
  }
  fl();
}
function fo(e) {
  const t = ut(e);
  return t === e ? t : (Ft(t, "iterate", nn), ls(e) ? t : t.map(vs));
}
function ea(e) {
  return Ft(e = ut(e), "iterate", nn), e;
}
function Bs(e, t) {
  return Us(e) ? oo(e) ? So(vs(t)) : So(t) : vs(t);
}
const Xc = {
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
      (o) => o.map((a) => Bs(this, a)),
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
    return Al(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Al(this, "reduceRight", e, t);
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
  const a = ea(e), l = a[t]();
  return a !== e && !ls(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Zc = Array.prototype;
function Ts(e, t, o, a, l, r) {
  const c = ea(e), u = c !== e && !ls(e), d = c[t];
  if (d !== Zc[t]) {
    const p = d.apply(e, r);
    return u ? vs(p) : p;
  }
  let m = o;
  c !== e && (u ? m = function(p, w) {
    return o.call(this, Bs(e, p), w, e);
  } : o.length > 2 && (m = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const v = d.call(c, m, a);
  return u && l ? l(v) : v;
}
function Al(e, t, o, a) {
  const l = ea(e);
  let r = o;
  return l !== e && (ls(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Bs(e, u), d, e);
  }), l[t](r, ...a);
}
function La(e, t, o) {
  const a = ut(e);
  Ft(a, "iterate", nn);
  const l = a[t](...o);
  return (l === -1 || l === !1) && hl(o[0]) ? (o[0] = ut(o[0]), a[t](...o)) : l;
}
function No(e, t, o = []) {
  Ns(), dl();
  const a = ut(e)[t].apply(e, o);
  return fl(), Os(), a;
}
const eu = /* @__PURE__ */ ll("__proto__,__v_isRef,__isVue"), Zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function tu(e) {
  ms(e) || (e = String(e));
  const t = ut(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class er {
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
      return a === (l ? r ? du : nr : r ? or : sr).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
      Gt(t) ? t : a
    );
    if ((ms(o) ? Zi.has(o) : eu(o)) || (l || Ft(t, "get", o), r))
      return u;
    if (Gt(u)) {
      const d = c && cl(o) ? u : u.value;
      return l && gt(d) ? On(d) : d;
    }
    return gt(u) ? l ? On(u) : ro(u) : u;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, l) {
    let r = t[o];
    const c = Xe(t) && cl(o);
    if (!this._isShallow) {
      const m = Us(r);
      if (!ls(a) && !Us(a) && (r = ut(r), a = ut(a)), !c && Gt(r) && !Gt(a))
        return m || (r.value = a), !0;
    }
    const u = c ? Number(o) < t.length : mt(t, o), d = Reflect.set(
      t,
      o,
      a,
      Gt(t) ? t : l
    );
    return t === ut(l) && (u ? js(a, r) && Rs(t, "set", o, a) : Rs(t, "add", o, a)), d;
  }
  deleteProperty(t, o) {
    const a = mt(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && a && Rs(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!ms(o) || !Zi.has(o)) && Ft(t, "has", o), a;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      Xe(t) ? "length" : so
    ), Reflect.ownKeys(t);
  }
}
class su extends er {
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
const ou = /* @__PURE__ */ new tr(), nu = /* @__PURE__ */ new su(), au = /* @__PURE__ */ new tr(!0);
const Ha = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function lu(e, t, o) {
  return function(...a) {
    const l = this.__v_raw, r = ut(l), c = wo(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...a), v = o ? Ha : t ? So : vs;
    return !t && Ft(
      r,
      "iterate",
      d ? ja : so
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = m.next();
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
function kn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function iu(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      e || (js(l, u) && Ft(c, "get", l), Ft(c, "get", u));
      const { has: d } = _n(c), m = t ? Ha : e ? So : vs;
      if (d.call(c, l))
        return m(r.get(l));
      if (d.call(c, u))
        return m(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ft(ut(l), "iterate", so), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      return e || (js(l, u) && Ft(c, "has", l), Ft(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ut(u), m = t ? Ha : e ? So : vs;
      return !e && Ft(d, "iterate", so), u.forEach((v, p) => l.call(r, m(v), m(p), c));
    }
  };
  return Mt(
    o,
    e ? {
      add: kn("add"),
      set: kn("set"),
      delete: kn("delete"),
      clear: kn("clear")
    } : {
      add(l) {
        !t && !ls(l) && !Us(l) && (l = ut(l));
        const r = ut(this);
        return _n(r).has.call(r, l) || (r.add(l), Rs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ls(r) && !Us(r) && (r = ut(r));
        const c = ut(this), { has: u, get: d } = _n(c);
        let m = u.call(c, l);
        m || (l = ut(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), m ? js(r, v) && Rs(c, "set", l, r) : Rs(c, "add", l, r), this;
      },
      delete(l) {
        const r = ut(this), { has: c, get: u } = _n(r);
        let d = c.call(r, l);
        d || (l = ut(l), d = c.call(r, l)), u && u.call(r, l);
        const m = r.delete(l);
        return d && Rs(r, "delete", l, void 0), m;
      },
      clear() {
        const l = ut(this), r = l.size !== 0, c = l.clear();
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
    o[l] = lu(l, e, t);
  }), o;
}
function pl(e, t) {
  const o = iu(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    mt(o, l) && l in a ? o : a,
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
const sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), du = /* @__PURE__ */ new WeakMap();
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
function mu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fu(Uc(e));
}
function ro(e) {
  return Us(e) ? e : gl(
    e,
    !1,
    ou,
    ru,
    sr
  );
}
function vu(e) {
  return gl(
    e,
    !1,
    au,
    cu,
    or
  );
}
function On(e) {
  return gl(
    e,
    !0,
    nu,
    uu,
    nr
  );
}
function gl(e, t, o, a, l) {
  if (!gt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = mu(e);
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
function ut(e) {
  const t = e && e.__v_raw;
  return t ? ut(t) : e;
}
function pu(e) {
  return !mt(e, "__v_skip") && Object.isExtensible(e) && Vi(e, "__v_skip", !0), e;
}
const vs = (e) => gt(e) ? ro(e) : e, So = (e) => gt(e) ? On(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return gu(e, !1);
}
function gu(e, t) {
  return Gt(e) ? e : new hu(e, t);
}
class hu {
  constructor(t, o) {
    this.dep = new vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ut(t), this._value = o ? t : vs(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, a = this.__v_isShallow || ls(t) || Us(t);
    t = a ? t : ut(t), js(t, o) && (this._rawValue = t, this._value = a ? t : vs(t), this.dep.trigger());
  }
}
function tt(e) {
  return Gt(e) ? e.value : e;
}
const yu = {
  get: (e, t, o) => t === "__v_raw" ? e : tt(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function ar(e) {
  return oo(e) ? e : new Proxy(e, yu);
}
class wu {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = on - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    yt !== this)
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
function _u(e, t, o = !1) {
  let a, l;
  return et(e) ? a = e : (a = e.get, l = e.set), new wu(a, l, o);
}
const bn = {}, Un = /* @__PURE__ */ new WeakMap();
let eo;
function ku(e, t = !1, o = eo) {
  if (o) {
    let a = Un.get(o);
    a || Un.set(o, a = []), a.push(e);
  }
}
function bu(e, t, o = ht) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, m = (R) => l ? R : ls(R) || l === !1 || l === 0 ? Ls(R, 1) : Ls(R);
  let v, p, w, g, _ = !1, k = !1;
  if (Gt(e) ? (p = () => e.value, _ = ls(e)) : oo(e) ? (p = () => m(e), _ = !0) : Xe(e) ? (k = !0, _ = e.some((R) => oo(R) || ls(R)), p = () => e.map((R) => {
    if (Gt(R))
      return R.value;
    if (oo(R))
      return m(R);
    if (et(R))
      return d ? d(R, 2) : R();
  })) : et(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ns();
      try {
        w();
      } finally {
        Os();
      }
    }
    const R = eo;
    eo = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      eo = R;
    }
  } : p = Cs, t && l) {
    const R = p, U = l === !0 ? 1 / 0 : l;
    p = () => Ls(R(), U);
  }
  const $ = Jc(), S = () => {
    v.stop(), $ && $.active && rl($.effects, v);
  };
  if (r && t) {
    const R = t;
    t = (...U) => {
      R(...U), S();
    };
  }
  let T = k ? new Array(e.length).fill(bn) : bn;
  const P = (R) => {
    if (!(!(v.flags & 1) || !v.dirty && !R))
      if (t) {
        const U = v.run();
        if (l || _ || (k ? U.some((A, z) => js(A, T[z])) : js(U, T))) {
          w && w();
          const A = eo;
          eo = v;
          try {
            const z = [
              U,
              // pass undefined as the old value when it's changed for the first time
              T === bn ? void 0 : k && T[0] === bn ? [] : T,
              g
            ];
            T = U, d ? d(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            );
          } finally {
            eo = A;
          }
        }
      } else
        v.run();
  };
  return u && u(P), v = new ji(p), v.scheduler = c ? () => c(P, !1) : P, g = (R) => ku(R, !1, v), w = v.onStop = () => {
    const R = Un.get(v);
    if (R) {
      if (d)
        d(R, 4);
      else
        for (const U of R) U();
      Un.delete(v);
    }
  }, t ? a ? P(!0) : T = v.run() : c ? c(P.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ls(e, t = 1 / 0, o) {
  if (t <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Gt(e))
    Ls(e.value, t, o);
  else if (Xe(e))
    for (let a = 0; a < e.length; a++)
      Ls(e[a], t, o);
  else if (To(e) || wo(e))
    e.forEach((a) => {
      Ls(a, t, o);
    });
  else if (Fi(e)) {
    for (const a in e)
      Ls(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ls(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function mn(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ta(l, t, o);
  }
}
function ps(e, t, o, a) {
  if (et(e)) {
    const l = mn(e, t, o, a);
    return l && Ai(l) && l.catch((r) => {
      ta(r, t, o);
    }), l;
  }
  if (Xe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ps(e[r], t, o, a));
    return l;
  }
}
function ta(e, t, o, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || ht;
  if (t) {
    let u = t.parent;
    const d = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let p = 0; p < v.length; p++)
          if (v[p](e, d, m) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Ns(), mn(r, null, 10, [
        e,
        d,
        m
      ]), Os();
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
const Jt = [];
let _s = -1;
const _o = [];
let Ws = null, po = 0;
const lr = /* @__PURE__ */ Promise.resolve();
let An = null;
function Pt(e) {
  const t = An || lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cu(e) {
  let t = _s + 1, o = Jt.length;
  for (; t < o; ) {
    const a = t + o >>> 1, l = Jt[a], r = an(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : o = a;
  }
  return t;
}
function yl(e) {
  if (!(e.flags & 1)) {
    const t = an(e), o = Jt[Jt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= an(o) ? Jt.push(e) : Jt.splice(Cu(t), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  An || (An = lr.then(cr));
}
function xu(e) {
  Xe(e) ? _o.push(...e) : Ws && e.id === -1 ? Ws.splice(po + 1, 0, e) : e.flags & 1 || (_o.push(e), e.flags |= 1), ir();
}
function zl(e, t, o = _s + 1) {
  for (; o < Jt.length; o++) {
    const a = Jt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Jt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function rr(e) {
  if (_o.length) {
    const t = [...new Set(_o)].sort(
      (o, a) => an(o) - an(a)
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
const an = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cr(e) {
  try {
    for (_s = 0; _s < Jt.length; _s++) {
      const t = Jt[_s];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), mn(
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
    _s = -1, Jt.length = 0, rr(), An = null, (Jt.length || _o.length) && cr();
  }
}
let Ut = null, ur = null;
function zn(e) {
  const t = Ut;
  return Ut = e, ur = e && e.type.__scopeId || null, t;
}
function h(e, t = Ut, o) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && Bn(-1);
    const r = zn(t);
    let c;
    try {
      c = e(...l);
    } finally {
      zn(r), a._d && Bn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Tt(e, t) {
  if (Ut === null)
    return e;
  const o = ia(Ut), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = ht] = t[l];
    r && (et(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ls(c), a.push({
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
function Qs(e, t, o, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Ns(), ps(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Os());
  }
}
const dr = Symbol("_vte"), fr = (e) => e.__isTeleport, Jo = (e) => e && (e.disabled || e.disabled === ""), Fl = (e) => e && (e.defer || e.defer === ""), Vl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Bl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, qa = (e, t) => {
  const o = e && e.to;
  return $t(o) ? t ? t(o) : null : o;
}, mr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, a, l, r, c, u, d, m) {
    const {
      mc: v,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: k, createComment: $ }
    } = m, S = Jo(t.props);
    let { shapeFlag: T, children: P, dynamicChildren: R } = t;
    if (e == null) {
      const U = t.el = k(""), A = t.anchor = k("");
      g(U, o, a), g(A, o, a);
      const z = (H, ae) => {
        T & 16 && v(
          P,
          H,
          ae,
          l,
          r,
          c,
          u,
          d
        );
      }, E = () => {
        const H = t.target = qa(t.props, _), ae = vr(H, t, k, g);
        H && (c !== "svg" && Vl(H) ? c = "svg" : c !== "mathml" && Bl(H) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(H), S || (z(H, ae), En(t, !1)));
      };
      S && (z(o, A), En(t, !0)), Fl(t.props) ? (t.el.__isMounted = !1, qt(() => {
        E(), delete t.el.__isMounted;
      }, r)) : E();
    } else {
      if (Fl(t.props) && e.el.__isMounted === !1) {
        qt(() => {
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
            m
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const U = t.anchor = e.anchor, A = t.target = e.target, z = t.targetAnchor = e.targetAnchor, E = Jo(e.props), H = E ? o : A, ae = E ? U : z;
      if (c === "svg" || Vl(A) ? c = "svg" : (c === "mathml" || Bl(A)) && (c = "mathml"), R ? (w(
        e.dynamicChildren,
        R,
        H,
        l,
        r,
        c,
        u
      ), $l(e, t, !0)) : d || p(
        e,
        t,
        H,
        ae,
        l,
        r,
        c,
        u,
        !1
      ), S)
        E ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $n(
          t,
          o,
          U,
          m,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const de = t.target = qa(
          t.props,
          _
        );
        de && $n(
          t,
          de,
          null,
          m,
          0
        );
      } else E && $n(
        t,
        A,
        z,
        m,
        1
      );
      En(t, S);
    }
  },
  remove(e, t, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: p,
      props: w
    } = e;
    if (p && (l(m), l(v)), r && l(d), c & 16) {
      const g = r || !Jo(w);
      for (let _ = 0; _ < u.length; _++) {
        const k = u[_];
        a(
          k,
          t,
          o,
          g,
          !!k.dynamicChildren
        );
      }
    }
  },
  move: $n,
  hydrate: Su
};
function $n(e, t, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: m, props: v } = e, p = r === 2;
  if (p && a(c, t, o), (!p || Jo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        t,
        o,
        2
      );
  p && a(u, t, o);
}
function Su(e, t, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: m, createText: v }
}, p) {
  function w(k, $, S, T) {
    $.anchor = p(
      c(k),
      $,
      u(k),
      o,
      a,
      l,
      r
    ), $.targetStart = S, $.targetAnchor = T;
  }
  const g = t.target = qa(
    t.props,
    d
  ), _ = Jo(t.props);
  if (g) {
    const k = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          k,
          k && c(k)
        );
      else {
        t.anchor = c(e);
        let $ = k;
        for (; $; ) {
          if ($ && $.nodeType === 8) {
            if ($.data === "teleport start anchor")
              t.targetStart = $;
            else if ($.data === "teleport anchor") {
              t.targetAnchor = $, g._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          $ = c($);
        }
        t.targetAnchor || vr(g, t, v, m), p(
          k && c(k),
          t,
          g,
          o,
          a,
          l,
          r
        );
      }
    En(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Lt = mr;
function En(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function vr(e, t, o, a) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[dr] = r, e && (a(l, e), a(r, e)), r;
}
const Ps = Symbol("_leaveCb"), Cn = Symbol("_enterCb");
function pr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), na(() => {
    e.isUnmounting = !0;
  }), e;
}
const ns = [Function, Array], gr = {
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
}, hr = (e) => {
  const t = e.subTree;
  return t.component ? hr(t.component) : t;
}, Iu = {
  name: "BaseTransition",
  props: gr,
  setup(e, { slots: t }) {
    const o = xl(), a = pr();
    return () => {
      const l = t.default && wl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = yr(l), c = ut(e), { mode: u } = c;
      if (a.isLeaving)
        return Da(r);
      const d = Wl(r);
      if (!d)
        return Da(r);
      let m = ln(
        d,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => m = p
      );
      d.type !== Bt && lo(d, m);
      let v = o.subTree && Wl(o.subTree);
      if (v && v.type !== Bt && !to(v, d) && hr(o).type !== Bt) {
        let p = ln(
          v,
          c,
          a,
          o
        );
        if (lo(v, p), u === "out-in" && d.type !== Bt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, v = void 0;
          }, Da(r);
        u === "in-out" && d.type !== Bt ? p.delayLeave = (w, g, _) => {
          const k = wr(
            a,
            v
          );
          k[String(v.key)] = v, w[Ps] = () => {
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
const Eu = Iu;
function wr(e, t) {
  const { leavingVNodes: o } = e;
  let a = o.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(t.type, a)), a;
}
function ln(e, t, o, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: _,
    onLeaveCancelled: k,
    onBeforeAppear: $,
    onAppear: S,
    onAfterAppear: T,
    onAppearCancelled: P
  } = t, R = String(e.key), U = wr(o, e), A = (H, ae) => {
    H && ps(
      H,
      a,
      9,
      ae
    );
  }, z = (H, ae) => {
    const de = ae[1];
    A(H, ae), Xe(H) ? H.every((ce) => ce.length <= 1) && de() : H.length <= 1 && de();
  }, E = {
    mode: c,
    persisted: u,
    beforeEnter(H) {
      let ae = d;
      if (!o.isMounted)
        if (r)
          ae = $ || d;
        else
          return;
      H[Ps] && H[Ps](
        !0
        /* cancelled */
      );
      const de = U[R];
      de && to(e, de) && de.el[Ps] && de.el[Ps](), A(ae, [H]);
    },
    enter(H) {
      let ae = m, de = v, ce = p;
      if (!o.isMounted)
        if (r)
          ae = S || m, de = T || v, ce = P || p;
        else
          return;
      let ke = !1;
      const Q = H[Cn] = (G) => {
        ke || (ke = !0, G ? A(ce, [H]) : A(de, [H]), E.delayedLeave && E.delayedLeave(), H[Cn] = void 0);
      };
      ae ? z(ae, [H, Q]) : Q();
    },
    leave(H, ae) {
      const de = String(e.key);
      if (H[Cn] && H[Cn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ae();
      A(w, [H]);
      let ce = !1;
      const ke = H[Ps] = (Q) => {
        ce || (ce = !0, ae(), Q ? A(k, [H]) : A(_, [H]), H[Ps] = void 0, U[de] === e && delete U[de]);
      };
      U[de] = e, g ? z(g, [H, ke]) : ke();
    },
    clone(H) {
      const ae = ln(
        H,
        t,
        o,
        a,
        l
      );
      return l && l(ae), ae;
    }
  };
  return E;
}
function Da(e) {
  if (sa(e))
    return e = Hs(e), e.children = null, e;
}
function Wl(e) {
  if (!sa(e))
    return fr(e.type) && e.children ? yr(e.children) : e;
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
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === j ? (c.patchFlag & 128 && l++, a = a.concat(
      wl(c.children, t, u)
    )) : (t || c.type !== Bt) && a.push(u != null ? Hs(c, { key: u }) : c);
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
function _r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Fn = /* @__PURE__ */ new WeakMap();
function Qo(e, t, o, a, l = !1) {
  if (Xe(e)) {
    e.forEach(
      (_, k) => Qo(
        _,
        t && (Xe(t) ? t[k] : t),
        o,
        a,
        l
      )
    );
    return;
  }
  if (ko(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Qo(e, t, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ia(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, m = t && t.r, v = u.refs === ht ? u.refs = {} : u.refs, p = u.setupState, w = ut(p), g = p === ht ? Ui : (_) => mt(w, _);
  if (m != null && m !== d) {
    if (Gl(t), $t(m))
      v[m] = null, g(m) && (p[m] = null);
    else if (Gt(m)) {
      m.value = null;
      const _ = t;
      _.k && (v[_.k] = null);
    }
  }
  if (et(d))
    mn(d, u, 12, [c, v]);
  else {
    const _ = $t(d), k = Gt(d);
    if (_ || k) {
      const $ = () => {
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
        } else _ ? (v[d] = c, g(d) && (p[d] = c)) : k && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const S = () => {
          $(), Fn.delete(e);
        };
        S.id = -1, Fn.set(e, S), qt(S, o);
      } else
        Gl(e), $();
    }
  }
}
function Gl(e) {
  const t = Fn.get(e);
  t && (t.flags |= 8, Fn.delete(e));
}
Zn().requestIdleCallback;
Zn().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, sa = (e) => e.type.__isKeepAlive;
function Tu(e, t) {
  kr(e, "a", t);
}
function Mu(e, t) {
  kr(e, "da", t);
}
function kr(e, t, o = Wt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (oa(t, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      sa(l.parent.vnode) && Pu(a, t, o, l), l = l.parent;
  }
}
function Pu(e, t, o, a) {
  const l = oa(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Mo(() => {
    rl(a[t], l);
  }, o);
}
function oa(e, t, o = Wt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ns();
      const u = vn(o), d = ps(t, o, e, c);
      return u(), Os(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const As = (e) => (t, o = Wt) => {
  (!un || e === "sp") && oa(e, (...a) => t(...a), o);
}, Ru = As("bm"), at = As("m"), Lu = As(
  "bu"
), br = As("u"), na = As(
  "bum"
), Mo = As("um"), Du = As(
  "sp"
), Nu = As("rtg"), Ou = As("rtc");
function Uu(e, t = Wt) {
  oa("ec", e, t);
}
const Au = "components", $r = Symbol.for("v-ndc");
function _l(e) {
  return $t(e) ? zu(Au, e, !1) || e : e || $r;
}
function zu(e, t, o = !0, a = !1) {
  const l = Ut || Wt;
  if (l) {
    const r = l.type;
    {
      const u = Id(
        r,
        !1
      );
      if (u && (u === t || u === rs(t) || u === Yn(rs(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      jl(l[e] || r[e], t) || // global registration
      jl(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function jl(e, t) {
  return e && (e[t] || e[rs(t)] || e[Yn(rs(t))]);
}
function he(e, t, o, a) {
  let l;
  const r = o, c = Xe(e);
  if (c || $t(e)) {
    const u = c && oo(e);
    let d = !1, m = !1;
    u && (d = !ls(e), m = Us(e), e = ea(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = t(
        d ? m ? So(vs(e[v])) : vs(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (gt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, m = u.length; d < m; d++) {
        const v = u[d];
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
  if (Ut.ce || Ut.parent && ko(Ut.parent) && Ut.parent.ce) {
    const m = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), n(), L(
      j,
      null,
      [C("slot", o, a && a())],
      m ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), n();
  const c = r && Cr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = L(
    j,
    {
      key: (u && !ms(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Cr(e) {
  return e.some((t) => cn(t) ? !(t.type === Bt || t.type === j && !Cr(t.children)) : !0) ? e : null;
}
const Ka = (e) => e ? Wr(e) ? ia(e) : Ka(e.parent) : null, Yo = (
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
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Yu.bind(e)
  })
), Na = (e, t) => e !== ht && !e.__isScriptSetup && mt(e, t), Fu = {
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
        if (Na(a, t))
          return c[t] = 1, a[t];
        if (l !== ht && mt(l, t))
          return c[t] = 2, l[t];
        if (mt(r, t))
          return c[t] = 3, r[t];
        if (o !== ht && mt(o, t))
          return c[t] = 4, o[t];
        Ja && (c[t] = 0);
      }
    }
    const m = Yo[t];
    let v, p;
    if (m)
      return t === "$attrs" && Ft(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[t])
    )
      return v;
    if (o !== ht && mt(o, t))
      return c[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, mt(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Na(l, t) ? (l[t] = o, !0) : a !== ht && mt(a, t) ? (a[t] = o, !0) : mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== ht && u[0] !== "$" && mt(e, u) || Na(t, u) || mt(r, u) || mt(a, u) || mt(Yo, u) || mt(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : mt(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Hl(e) {
  return Xe(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ja = !0;
function Vu(e) {
  const t = Sr(e), o = e.proxy, a = e.ctx;
  Ja = !1, t.beforeCreate && ql(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: p,
    mounted: w,
    beforeUpdate: g,
    updated: _,
    activated: k,
    deactivated: $,
    beforeDestroy: S,
    beforeUnmount: T,
    destroyed: P,
    unmounted: R,
    render: U,
    renderTracked: A,
    renderTriggered: z,
    errorCaptured: E,
    serverPrefetch: H,
    // public API
    expose: ae,
    inheritAttrs: de,
    // assets
    components: ce,
    directives: ke,
    filters: Q
  } = t;
  if (m && Bu(m, a, null), c)
    for (const Le in c) {
      const Z = c[Le];
      et(Z) && (a[Le] = Z.bind(o));
    }
  if (l) {
    const Le = l.call(o, o);
    gt(Le) && (e.data = ro(Le));
  }
  if (Ja = !0, r)
    for (const Le in r) {
      const Z = r[Le], ye = et(Z) ? Z.bind(o, o) : et(Z.get) ? Z.get.bind(o, o) : Cs, O = !et(Z) && et(Z.set) ? Z.set.bind(o) : Cs, me = M({
        get: ye,
        set: O
      });
      Object.defineProperty(a, Le, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (Re) => me.value = Re
      });
    }
  if (u)
    for (const Le in u)
      xr(u[Le], a, o, Le);
  if (d) {
    const Le = et(d) ? d.call(o) : d;
    Reflect.ownKeys(Le).forEach((Z) => {
      Ku(Z, Le[Z]);
    });
  }
  v && ql(v, e, "c");
  function J(Le, Z) {
    Xe(Z) ? Z.forEach((ye) => Le(ye.bind(o))) : Z && Le(Z.bind(o));
  }
  if (J(Ru, p), J(at, w), J(Lu, g), J(br, _), J(Tu, k), J(Mu, $), J(Uu, E), J(Ou, A), J(Nu, z), J(na, T), J(Mo, R), J(Du, H), Xe(ae))
    if (ae.length) {
      const Le = e.exposed || (e.exposed = {});
      ae.forEach((Z) => {
        Object.defineProperty(Le, Z, {
          get: () => o[Z],
          set: (ye) => o[Z] = ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === Cs && (e.render = U), de != null && (e.inheritAttrs = de), ce && (e.components = ce), ke && (e.directives = ke), H && _r(e);
}
function Bu(e, t, o = Cs) {
  Xe(e) && (e = Qa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    gt(l) ? "default" in l ? r = Tn(
      l.from || a,
      l.default,
      !0
    ) : r = Tn(l.from || a) : r = Tn(l), Gt(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function ql(e, t, o) {
  ps(
    Xe(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function xr(e, t, o, a) {
  let l = a.includes(".") ? Tr(o, a) : () => o[a];
  if ($t(e)) {
    const r = t[e];
    et(r) && wt(l, r);
  } else if (et(e))
    wt(l, e.bind(o));
  else if (gt(e))
    if (Xe(e))
      e.forEach((r) => xr(r, t, o, a));
    else {
      const r = et(e.handler) ? e.handler.bind(o) : t[e.handler];
      et(r) && wt(l, r, e);
    }
}
function Sr(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = t : (d = {}, l.length && l.forEach(
    (m) => Vn(d, m, c, !0)
  ), Vn(d, t, c)), gt(t) && r.set(t, d), d;
}
function Vn(e, t, o, a = !1) {
  const { mixins: l, extends: r } = t;
  r && Vn(e, r, o, !0), l && l.forEach(
    (c) => Vn(e, c, o, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
      const u = Wu[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Wu = {
  data: Kl,
  props: Jl,
  emits: Jl,
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
  watch: ju,
  // provide / inject
  provide: Kl,
  inject: Gu
};
function Kl(e, t) {
  return t ? e ? function() {
    return Mt(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Gu(e, t) {
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
function Jl(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Hl(e),
    Hl(t ?? {})
  ) : t;
}
function ju(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    o[a] = Ht(e[a], t[a]);
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
let Hu = 0;
function qu(e, t) {
  return function(a, l = null) {
    et(a) || (a = Mt({}, a)), l != null && !gt(l) && (l = null);
    const r = Ir(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = r.app = {
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
      set config(v) {
      },
      use(v, ...p) {
        return c.has(v) || (v && et(v.install) ? (c.add(v), v.install(m, ...p)) : et(v) && (c.add(v), v(m, ...p))), m;
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
          const g = m._ceVNode || C(a, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, v, w), d = !0, m._container = v, v.__vue_app__ = m, ia(g.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (ps(
          u,
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
function Ku(e, t) {
  if (Wt) {
    let o = Wt.provides;
    const a = Wt.parent && Wt.parent.provides;
    a === o && (o = Wt.provides = Object.create(a)), o[e] = t;
  }
}
function Tn(e, t, o = !1) {
  const a = xl();
  if (a || bo) {
    let l = bo ? bo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && et(t) ? t.call(a && a.proxy) : t;
  }
}
const Ju = Symbol.for("v-scx"), Qu = () => Tn(Ju);
function wt(e, t, o) {
  return Er(e, t, o);
}
function Er(e, t, o = ht) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = t && a || !t && r !== "post";
  let m;
  if (un) {
    if (r === "sync") {
      const g = Qu();
      m = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = Cs, g.resume = Cs, g.pause = Cs, g;
    }
  }
  const v = Wt;
  u.call = (g, _, k) => ps(g, v, _, k);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    qt(g, v && v.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, _) => {
    _ ? g() : yl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const w = bu(e, t, u);
  return un && (m ? m.push(w) : d && w()), w;
}
function Yu(e, t, o) {
  const a = this.proxy, l = $t(e) ? e.includes(".") ? Tr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  et(t) ? r = t : (r = t.handler, o = t);
  const c = vn(this), u = Er(l, r.bind(a), o);
  return c(), u;
}
function Tr(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Xu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${rs(t)}Modifiers`] || e[`${Ks(t)}Modifiers`];
function Zu(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ht;
  let l = o;
  const r = t.startsWith("update:"), c = r && Xu(a, t.slice(7));
  c && (c.trim && (l = o.map((v) => $t(v) ? v.trim() : v)), c.number && (l = o.map(Xn)));
  let u, d = a[u = Ta(t)] || // also try camelCase event handler (#2249)
  a[u = Ta(rs(t))];
  !d && r && (d = a[u = Ta(Ks(t))]), d && ps(
    d,
    e,
    6,
    l
  );
  const m = a[u + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ps(
      m,
      e,
      6,
      l
    );
  }
}
const ed = /* @__PURE__ */ new WeakMap();
function Mr(e, t, o = !1) {
  const a = o ? ed : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!et(e)) {
    const d = (m) => {
      const v = Mr(m, t, !0);
      v && (u = !0, Mt(c, v));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (gt(e) && a.set(e, null), null) : (Xe(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), gt(e) && a.set(e, c), c);
}
function aa(e, t) {
  return !e || !Jn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), mt(e, t[0].toLowerCase() + t.slice(1)) || mt(e, Ks(t)) || mt(e, t));
}
function Ql(e) {
  const {
    type: t,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: m,
    renderCache: v,
    props: p,
    data: w,
    setupState: g,
    ctx: _,
    inheritAttrs: k
  } = e, $ = zn(e);
  let S, T;
  try {
    if (o.shapeFlag & 4) {
      const R = l || a, U = R;
      S = bs(
        m.call(
          U,
          R,
          v,
          p,
          g,
          w,
          _
        )
      ), T = u;
    } else {
      const R = t;
      S = bs(
        R.length > 1 ? R(
          p,
          { attrs: u, slots: c, emit: d }
        ) : R(
          p,
          null
        )
      ), T = t.props ? u : td(u);
    }
  } catch (R) {
    Xo.length = 0, ta(R, e, 1), S = C(Bt);
  }
  let P = S;
  if (T && k !== !1) {
    const R = Object.keys(T), { shapeFlag: U } = P;
    R.length && U & 7 && (r && R.some(il) && (T = sd(
      T,
      r
    )), P = Hs(P, T, !1, !0));
  }
  return o.dirs && (P = Hs(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(o.dirs) : o.dirs), o.transition && lo(P, o.transition), S = P, zn($), S;
}
const td = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Jn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, sd = (e, t) => {
  const o = {};
  for (const a in e)
    (!il(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
};
function od(e, t, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, m = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Yl(a, c, m) : !!c;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const w = v[p];
        if (c[w] !== a[w] && !aa(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Yl(a, c, m) : !0 : !!c;
  return !1;
}
function Yl(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !aa(o, r))
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
const Pr = {}, Rr = () => Object.create(Pr), Lr = (e) => Object.getPrototypeOf(e) === Pr;
function ad(e, t, o, a = !1) {
  const l = {}, r = Rr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Dr(e, t, l, r);
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
  let m = !1;
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
        if (aa(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (mt(r, w))
            g !== r[w] && (r[w] = g, m = !0);
          else {
            const _ = rs(w);
            l[_] = Ya(
              d,
              u,
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
    Dr(e, t, l, r) && (m = !0);
    let v;
    for (const p in u)
      (!t || // for camelCase
      !mt(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Ks(p)) === p || !mt(t, v))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[p] = Ya(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!t || !mt(t, p)) && (delete r[p], m = !0);
  }
  m && Rs(e.attrs, "set", "");
}
function Dr(e, t, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (Ho(d))
        continue;
      const m = t[d];
      let v;
      l && mt(l, v = rs(d)) ? !r || !r.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : aa(e.emitsOptions, d) || (!(d in a) || m !== a[d]) && (a[d] = m, c = !0);
    }
  if (r) {
    const d = ut(o), m = u || ht;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      o[p] = Ya(
        l,
        d,
        p,
        m[p],
        e,
        !mt(m, p)
      );
    }
  }
  return c;
}
function Ya(e, t, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = mt(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && et(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          a = m[o];
        else {
          const v = vn(l);
          a = m[o] = d.call(
            null,
            t
          ), v();
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
    ] && (a === "" || a === Ks(o)) && (a = !0));
  }
  return a;
}
const id = /* @__PURE__ */ new WeakMap();
function Nr(e, t, o = !1) {
  const a = o ? id : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!et(e)) {
    const v = (p) => {
      d = !0;
      const [w, g] = Nr(p, t, !0);
      Mt(c, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return gt(e) && a.set(e, yo), yo;
  if (Xe(r))
    for (let v = 0; v < r.length; v++) {
      const p = rs(r[v]);
      Xl(p) && (c[p] = ht);
    }
  else if (r)
    for (const v in r) {
      const p = rs(v);
      if (Xl(p)) {
        const w = r[v], g = c[p] = Xe(w) || et(w) ? { type: w } : Mt({}, w), _ = g.type;
        let k = !1, $ = !0;
        if (Xe(_))
          for (let S = 0; S < _.length; ++S) {
            const T = _[S], P = et(T) && T.name;
            if (P === "Boolean") {
              k = !0;
              break;
            } else P === "String" && ($ = !1);
          }
        else
          k = et(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = k, g[
          1
          /* shouldCastTrue */
        ] = $, (k || mt(g, "default")) && u.push(p);
      }
    }
  const m = [c, u];
  return gt(e) && a.set(e, m), m;
}
function Xl(e) {
  return e[0] !== "$" && !Ho(e);
}
const kl = (e) => e === "_" || e === "_ctx" || e === "$stable", bl = (e) => Xe(e) ? e.map(bs) : [bs(e)], rd = (e, t, o) => {
  if (t._n)
    return t;
  const a = h((...l) => bl(t(...l)), o);
  return a._c = !1, a;
}, Or = (e, t, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (kl(l)) continue;
    const r = e[l];
    if (et(r))
      t[l] = rd(l, r, a);
    else if (r != null) {
      const c = bl(r);
      t[l] = () => c;
    }
  }
}, Ur = (e, t) => {
  const o = bl(t);
  e.slots.default = () => o;
}, Ar = (e, t, o) => {
  for (const a in t)
    (o || !kl(a)) && (e[a] = t[a]);
}, cd = (e, t, o) => {
  const a = e.slots = Rr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Ar(a, t, o), o && Vi(a, "_", l, !0)) : Or(t, a);
  } else t && Ur(e, t);
}, ud = (e, t, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = ht;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : Ar(l, t, o) : (r = !t.$stable, Or(t, l)), c = t;
  } else t && (Ur(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !kl(u) && c[u] == null && delete l[u];
}, qt = pd;
function dd(e) {
  return fd(e);
}
function fd(e, t) {
  const o = Zn();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: m,
    setElementText: v,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = Cs,
    insertStaticContent: _
  } = e, k = (I, V, ie, Ie = null, $e = null, Se = null, Ae = void 0, Fe = null, De = !!V.dynamicChildren) => {
    if (I === V)
      return;
    I && !to(I, V) && (Ie = te(I), Re(I, $e, Se, !0), I = null), V.patchFlag === -2 && (De = !1, V.dynamicChildren = null);
    const { type: Ee, ref: Ke, shapeFlag: Be } = V;
    switch (Ee) {
      case la:
        $(I, V, ie, Ie);
        break;
      case Bt:
        S(I, V, ie, Ie);
        break;
      case Ua:
        I == null && T(V, ie, Ie, Ae);
        break;
      case j:
        ce(
          I,
          V,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          De
        );
        break;
      default:
        Be & 1 ? U(
          I,
          V,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          De
        ) : Be & 6 ? ke(
          I,
          V,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          De
        ) : (Be & 64 || Be & 128) && Ee.process(
          I,
          V,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          De,
          fe
        );
    }
    Ke != null && $e ? Qo(Ke, I && I.ref, Se, V || I, !V) : Ke == null && I && I.ref != null && Qo(I.ref, null, Se, I, !0);
  }, $ = (I, V, ie, Ie) => {
    if (I == null)
      a(
        V.el = u(V.children),
        ie,
        Ie
      );
    else {
      const $e = V.el = I.el;
      V.children !== I.children && m($e, V.children);
    }
  }, S = (I, V, ie, Ie) => {
    I == null ? a(
      V.el = d(V.children || ""),
      ie,
      Ie
    ) : V.el = I.el;
  }, T = (I, V, ie, Ie) => {
    [I.el, I.anchor] = _(
      I.children,
      V,
      ie,
      Ie,
      I.el,
      I.anchor
    );
  }, P = ({ el: I, anchor: V }, ie, Ie) => {
    let $e;
    for (; I && I !== V; )
      $e = w(I), a(I, ie, Ie), I = $e;
    a(V, ie, Ie);
  }, R = ({ el: I, anchor: V }) => {
    let ie;
    for (; I && I !== V; )
      ie = w(I), l(I), I = ie;
    l(V);
  }, U = (I, V, ie, Ie, $e, Se, Ae, Fe, De) => {
    if (V.type === "svg" ? Ae = "svg" : V.type === "math" && (Ae = "mathml"), I == null)
      A(
        V,
        ie,
        Ie,
        $e,
        Se,
        Ae,
        Fe,
        De
      );
    else {
      const Ee = I.el && I.el._isVueCE ? I.el : null;
      try {
        Ee && Ee._beginPatch(), H(
          I,
          V,
          $e,
          Se,
          Ae,
          Fe,
          De
        );
      } finally {
        Ee && Ee._endPatch();
      }
    }
  }, A = (I, V, ie, Ie, $e, Se, Ae, Fe) => {
    let De, Ee;
    const { props: Ke, shapeFlag: Be, transition: pe, dirs: K } = I;
    if (De = I.el = c(
      I.type,
      Se,
      Ke && Ke.is,
      Ke
    ), Be & 8 ? v(De, I.children) : Be & 16 && E(
      I.children,
      De,
      null,
      Ie,
      $e,
      Oa(I, Se),
      Ae,
      Fe
    ), K && Qs(I, null, Ie, "created"), z(De, I, I.scopeId, Ae, Ie), Ke) {
      for (const Ce in Ke)
        Ce !== "value" && !Ho(Ce) && r(De, Ce, null, Ke[Ce], Se, Ie);
      "value" in Ke && r(De, "value", null, Ke.value, Se), (Ee = Ke.onVnodeBeforeMount) && hs(Ee, Ie, I);
    }
    K && Qs(I, null, Ie, "beforeMount");
    const He = md($e, pe);
    He && pe.beforeEnter(De), a(De, V, ie), ((Ee = Ke && Ke.onVnodeMounted) || He || K) && qt(() => {
      Ee && hs(Ee, Ie, I), He && pe.enter(De), K && Qs(I, null, Ie, "mounted");
    }, $e);
  }, z = (I, V, ie, Ie, $e) => {
    if (ie && g(I, ie), Ie)
      for (let Se = 0; Se < Ie.length; Se++)
        g(I, Ie[Se]);
    if ($e) {
      let Se = $e.subTree;
      if (V === Se || Fr(Se.type) && (Se.ssContent === V || Se.ssFallback === V)) {
        const Ae = $e.vnode;
        z(
          I,
          Ae,
          Ae.scopeId,
          Ae.slotScopeIds,
          $e.parent
        );
      }
    }
  }, E = (I, V, ie, Ie, $e, Se, Ae, Fe, De = 0) => {
    for (let Ee = De; Ee < I.length; Ee++) {
      const Ke = I[Ee] = Fe ? Gs(I[Ee]) : bs(I[Ee]);
      k(
        null,
        Ke,
        V,
        ie,
        Ie,
        $e,
        Se,
        Ae,
        Fe
      );
    }
  }, H = (I, V, ie, Ie, $e, Se, Ae) => {
    const Fe = V.el = I.el;
    let { patchFlag: De, dynamicChildren: Ee, dirs: Ke } = V;
    De |= I.patchFlag & 16;
    const Be = I.props || ht, pe = V.props || ht;
    let K;
    if (ie && Ys(ie, !1), (K = pe.onVnodeBeforeUpdate) && hs(K, ie, V, I), Ke && Qs(V, I, ie, "beforeUpdate"), ie && Ys(ie, !0), (Be.innerHTML && pe.innerHTML == null || Be.textContent && pe.textContent == null) && v(Fe, ""), Ee ? ae(
      I.dynamicChildren,
      Ee,
      Fe,
      ie,
      Ie,
      Oa(V, $e),
      Se
    ) : Ae || Z(
      I,
      V,
      Fe,
      null,
      ie,
      Ie,
      Oa(V, $e),
      Se,
      !1
    ), De > 0) {
      if (De & 16)
        de(Fe, Be, pe, ie, $e);
      else if (De & 2 && Be.class !== pe.class && r(Fe, "class", null, pe.class, $e), De & 4 && r(Fe, "style", Be.style, pe.style, $e), De & 8) {
        const He = V.dynamicProps;
        for (let Ce = 0; Ce < He.length; Ce++) {
          const Ye = He[Ce], ot = Be[Ye], ze = pe[Ye];
          (ze !== ot || Ye === "value") && r(Fe, Ye, ot, ze, $e, ie);
        }
      }
      De & 1 && I.children !== V.children && v(Fe, V.children);
    } else !Ae && Ee == null && de(Fe, Be, pe, ie, $e);
    ((K = pe.onVnodeUpdated) || Ke) && qt(() => {
      K && hs(K, ie, V, I), Ke && Qs(V, I, ie, "updated");
    }, Ie);
  }, ae = (I, V, ie, Ie, $e, Se, Ae) => {
    for (let Fe = 0; Fe < V.length; Fe++) {
      const De = I[Fe], Ee = V[Fe], Ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        De.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (De.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !to(De, Ee) || // - In the case of a component, it could contain anything.
        De.shapeFlag & 198) ? p(De.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ie
        )
      );
      k(
        De,
        Ee,
        Ke,
        null,
        Ie,
        $e,
        Se,
        Ae,
        !0
      );
    }
  }, de = (I, V, ie, Ie, $e) => {
    if (V !== ie) {
      if (V !== ht)
        for (const Se in V)
          !Ho(Se) && !(Se in ie) && r(
            I,
            Se,
            V[Se],
            null,
            $e,
            Ie
          );
      for (const Se in ie) {
        if (Ho(Se)) continue;
        const Ae = ie[Se], Fe = V[Se];
        Ae !== Fe && Se !== "value" && r(I, Se, Fe, Ae, $e, Ie);
      }
      "value" in ie && r(I, "value", V.value, ie.value, $e);
    }
  }, ce = (I, V, ie, Ie, $e, Se, Ae, Fe, De) => {
    const Ee = V.el = I ? I.el : u(""), Ke = V.anchor = I ? I.anchor : u("");
    let { patchFlag: Be, dynamicChildren: pe, slotScopeIds: K } = V;
    K && (Fe = Fe ? Fe.concat(K) : K), I == null ? (a(Ee, ie, Ie), a(Ke, ie, Ie), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      ie,
      Ke,
      $e,
      Se,
      Ae,
      Fe,
      De
    )) : Be > 0 && Be & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren ? (ae(
      I.dynamicChildren,
      pe,
      ie,
      $e,
      Se,
      Ae,
      Fe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || $e && V === $e.subTree) && $l(
      I,
      V,
      !0
      /* shallow */
    )) : Z(
      I,
      V,
      ie,
      Ke,
      $e,
      Se,
      Ae,
      Fe,
      De
    );
  }, ke = (I, V, ie, Ie, $e, Se, Ae, Fe, De) => {
    V.slotScopeIds = Fe, I == null ? V.shapeFlag & 512 ? $e.ctx.activate(
      V,
      ie,
      Ie,
      Ae,
      De
    ) : Q(
      V,
      ie,
      Ie,
      $e,
      Se,
      Ae,
      De
    ) : G(I, V, De);
  }, Q = (I, V, ie, Ie, $e, Se, Ae) => {
    const Fe = I.component = bd(
      I,
      Ie,
      $e
    );
    if (sa(I) && (Fe.ctx.renderer = fe), $d(Fe, !1, Ae), Fe.asyncDep) {
      if ($e && $e.registerDep(Fe, J, Ae), !I.el) {
        const De = Fe.subTree = C(Bt);
        S(null, De, V, ie), I.placeholder = De.el;
      }
    } else
      J(
        Fe,
        I,
        V,
        ie,
        $e,
        Se,
        Ae
      );
  }, G = (I, V, ie) => {
    const Ie = V.component = I.component;
    if (od(I, V, ie))
      if (Ie.asyncDep && !Ie.asyncResolved) {
        Le(Ie, V, ie);
        return;
      } else
        Ie.next = V, Ie.update();
    else
      V.el = I.el, Ie.vnode = V;
  }, J = (I, V, ie, Ie, $e, Se, Ae) => {
    const Fe = () => {
      if (I.isMounted) {
        let { next: Be, bu: pe, u: K, parent: He, vnode: Ce } = I;
        {
          const se = zr(I);
          if (se) {
            Be && (Be.el = Ce.el, Le(I, Be, Ae)), se.asyncDep.then(() => {
              I.isUnmounted || Fe();
            });
            return;
          }
        }
        let Ye = Be, ot;
        Ys(I, !1), Be ? (Be.el = Ce.el, Le(I, Be, Ae)) : Be = Ce, pe && In(pe), (ot = Be.props && Be.props.onVnodeBeforeUpdate) && hs(ot, He, Be, Ce), Ys(I, !0);
        const ze = Ql(I), N = I.subTree;
        I.subTree = ze, k(
          N,
          ze,
          // parent may have changed if it's in a teleport
          p(N.el),
          // anchor may have changed if it's in a fragment
          te(N),
          I,
          $e,
          Se
        ), Be.el = ze.el, Ye === null && nd(I, ze.el), K && qt(K, $e), (ot = Be.props && Be.props.onVnodeUpdated) && qt(
          () => hs(ot, He, Be, Ce),
          $e
        );
      } else {
        let Be;
        const { el: pe, props: K } = V, { bm: He, m: Ce, parent: Ye, root: ot, type: ze } = I, N = ko(V);
        Ys(I, !1), He && In(He), !N && (Be = K && K.onVnodeBeforeMount) && hs(Be, Ye, V), Ys(I, !0);
        {
          ot.ce && // @ts-expect-error _def is private
          ot.ce._def.shadowRoot !== !1 && ot.ce._injectChildStyle(ze);
          const se = I.subTree = Ql(I);
          k(
            null,
            se,
            ie,
            Ie,
            I,
            $e,
            Se
          ), V.el = se.el;
        }
        if (Ce && qt(Ce, $e), !N && (Be = K && K.onVnodeMounted)) {
          const se = V;
          qt(
            () => hs(Be, Ye, se),
            $e
          );
        }
        (V.shapeFlag & 256 || Ye && ko(Ye.vnode) && Ye.vnode.shapeFlag & 256) && I.a && qt(I.a, $e), I.isMounted = !0, V = ie = Ie = null;
      }
    };
    I.scope.on();
    const De = I.effect = new ji(Fe);
    I.scope.off();
    const Ee = I.update = De.run.bind(De), Ke = I.job = De.runIfDirty.bind(De);
    Ke.i = I, Ke.id = I.uid, De.scheduler = () => yl(Ke), Ys(I, !0), Ee();
  }, Le = (I, V, ie) => {
    V.component = I;
    const Ie = I.vnode.props;
    I.vnode = V, I.next = null, ld(I, V.props, Ie, ie), ud(I, V.children, ie), Ns(), zl(I), Os();
  }, Z = (I, V, ie, Ie, $e, Se, Ae, Fe, De = !1) => {
    const Ee = I && I.children, Ke = I ? I.shapeFlag : 0, Be = V.children, { patchFlag: pe, shapeFlag: K } = V;
    if (pe > 0) {
      if (pe & 128) {
        O(
          Ee,
          Be,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          De
        );
        return;
      } else if (pe & 256) {
        ye(
          Ee,
          Be,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          De
        );
        return;
      }
    }
    K & 8 ? (Ke & 16 && we(Ee, $e, Se), Be !== Ee && v(ie, Be)) : Ke & 16 ? K & 16 ? O(
      Ee,
      Be,
      ie,
      Ie,
      $e,
      Se,
      Ae,
      Fe,
      De
    ) : we(Ee, $e, Se, !0) : (Ke & 8 && v(ie, ""), K & 16 && E(
      Be,
      ie,
      Ie,
      $e,
      Se,
      Ae,
      Fe,
      De
    ));
  }, ye = (I, V, ie, Ie, $e, Se, Ae, Fe, De) => {
    I = I || yo, V = V || yo;
    const Ee = I.length, Ke = V.length, Be = Math.min(Ee, Ke);
    let pe;
    for (pe = 0; pe < Be; pe++) {
      const K = V[pe] = De ? Gs(V[pe]) : bs(V[pe]);
      k(
        I[pe],
        K,
        ie,
        null,
        $e,
        Se,
        Ae,
        Fe,
        De
      );
    }
    Ee > Ke ? we(
      I,
      $e,
      Se,
      !0,
      !1,
      Be
    ) : E(
      V,
      ie,
      Ie,
      $e,
      Se,
      Ae,
      Fe,
      De,
      Be
    );
  }, O = (I, V, ie, Ie, $e, Se, Ae, Fe, De) => {
    let Ee = 0;
    const Ke = V.length;
    let Be = I.length - 1, pe = Ke - 1;
    for (; Ee <= Be && Ee <= pe; ) {
      const K = I[Ee], He = V[Ee] = De ? Gs(V[Ee]) : bs(V[Ee]);
      if (to(K, He))
        k(
          K,
          He,
          ie,
          null,
          $e,
          Se,
          Ae,
          Fe,
          De
        );
      else
        break;
      Ee++;
    }
    for (; Ee <= Be && Ee <= pe; ) {
      const K = I[Be], He = V[pe] = De ? Gs(V[pe]) : bs(V[pe]);
      if (to(K, He))
        k(
          K,
          He,
          ie,
          null,
          $e,
          Se,
          Ae,
          Fe,
          De
        );
      else
        break;
      Be--, pe--;
    }
    if (Ee > Be) {
      if (Ee <= pe) {
        const K = pe + 1, He = K < Ke ? V[K].el : Ie;
        for (; Ee <= pe; )
          k(
            null,
            V[Ee] = De ? Gs(V[Ee]) : bs(V[Ee]),
            ie,
            He,
            $e,
            Se,
            Ae,
            Fe,
            De
          ), Ee++;
      }
    } else if (Ee > pe)
      for (; Ee <= Be; )
        Re(I[Ee], $e, Se, !0), Ee++;
    else {
      const K = Ee, He = Ee, Ce = /* @__PURE__ */ new Map();
      for (Ee = He; Ee <= pe; Ee++) {
        const D = V[Ee] = De ? Gs(V[Ee]) : bs(V[Ee]);
        D.key != null && Ce.set(D.key, Ee);
      }
      let Ye, ot = 0;
      const ze = pe - He + 1;
      let N = !1, se = 0;
      const ge = new Array(ze);
      for (Ee = 0; Ee < ze; Ee++) ge[Ee] = 0;
      for (Ee = K; Ee <= Be; Ee++) {
        const D = I[Ee];
        if (ot >= ze) {
          Re(D, $e, Se, !0);
          continue;
        }
        let F;
        if (D.key != null)
          F = Ce.get(D.key);
        else
          for (Ye = He; Ye <= pe; Ye++)
            if (ge[Ye - He] === 0 && to(D, V[Ye])) {
              F = Ye;
              break;
            }
        F === void 0 ? Re(D, $e, Se, !0) : (ge[F - He] = Ee + 1, F >= se ? se = F : N = !0, k(
          D,
          V[F],
          ie,
          null,
          $e,
          Se,
          Ae,
          Fe,
          De
        ), ot++);
      }
      const Je = N ? vd(ge) : yo;
      for (Ye = Je.length - 1, Ee = ze - 1; Ee >= 0; Ee--) {
        const D = He + Ee, F = V[D], X = V[D + 1], Oe = D + 1 < Ke ? (
          // #13559, fallback to el placeholder for unresolved async component
          X.el || X.placeholder
        ) : Ie;
        ge[Ee] === 0 ? k(
          null,
          F,
          ie,
          Oe,
          $e,
          Se,
          Ae,
          Fe,
          De
        ) : N && (Ye < 0 || Ee !== Je[Ye] ? me(F, ie, Oe, 2) : Ye--);
      }
    }
  }, me = (I, V, ie, Ie, $e = null) => {
    const { el: Se, type: Ae, transition: Fe, children: De, shapeFlag: Ee } = I;
    if (Ee & 6) {
      me(I.component.subTree, V, ie, Ie);
      return;
    }
    if (Ee & 128) {
      I.suspense.move(V, ie, Ie);
      return;
    }
    if (Ee & 64) {
      Ae.move(I, V, ie, fe);
      return;
    }
    if (Ae === j) {
      a(Se, V, ie);
      for (let Be = 0; Be < De.length; Be++)
        me(De[Be], V, ie, Ie);
      a(I.anchor, V, ie);
      return;
    }
    if (Ae === Ua) {
      P(I, V, ie);
      return;
    }
    if (Ie !== 2 && Ee & 1 && Fe)
      if (Ie === 0)
        Fe.beforeEnter(Se), a(Se, V, ie), qt(() => Fe.enter(Se), $e);
      else {
        const { leave: Be, delayLeave: pe, afterLeave: K } = Fe, He = () => {
          I.ctx.isUnmounted ? l(Se) : a(Se, V, ie);
        }, Ce = () => {
          Se._isLeaving && Se[Ps](
            !0
            /* cancelled */
          ), Be(Se, () => {
            He(), K && K();
          });
        };
        pe ? pe(Se, He, Ce) : Ce();
      }
    else
      a(Se, V, ie);
  }, Re = (I, V, ie, Ie = !1, $e = !1) => {
    const {
      type: Se,
      props: Ae,
      ref: Fe,
      children: De,
      dynamicChildren: Ee,
      shapeFlag: Ke,
      patchFlag: Be,
      dirs: pe,
      cacheIndex: K
    } = I;
    if (Be === -2 && ($e = !1), Fe != null && (Ns(), Qo(Fe, null, ie, I, !0), Os()), K != null && (V.renderCache[K] = void 0), Ke & 256) {
      V.ctx.deactivate(I);
      return;
    }
    const He = Ke & 1 && pe, Ce = !ko(I);
    let Ye;
    if (Ce && (Ye = Ae && Ae.onVnodeBeforeUnmount) && hs(Ye, V, I), Ke & 6)
      Y(I.component, ie, Ie);
    else {
      if (Ke & 128) {
        I.suspense.unmount(ie, Ie);
        return;
      }
      He && Qs(I, null, V, "beforeUnmount"), Ke & 64 ? I.type.remove(
        I,
        V,
        ie,
        fe,
        Ie
      ) : Ee && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ee.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Se !== j || Be > 0 && Be & 64) ? we(
        Ee,
        V,
        ie,
        !1,
        !0
      ) : (Se === j && Be & 384 || !$e && Ke & 16) && we(De, V, ie), Ie && ve(I);
    }
    (Ce && (Ye = Ae && Ae.onVnodeUnmounted) || He) && qt(() => {
      Ye && hs(Ye, V, I), He && Qs(I, null, V, "unmounted");
    }, ie);
  }, ve = (I) => {
    const { type: V, el: ie, anchor: Ie, transition: $e } = I;
    if (V === j) {
      ee(ie, Ie);
      return;
    }
    if (V === Ua) {
      R(I);
      return;
    }
    const Se = () => {
      l(ie), $e && !$e.persisted && $e.afterLeave && $e.afterLeave();
    };
    if (I.shapeFlag & 1 && $e && !$e.persisted) {
      const { leave: Ae, delayLeave: Fe } = $e, De = () => Ae(ie, Se);
      Fe ? Fe(I.el, Se, De) : De();
    } else
      Se();
  }, ee = (I, V) => {
    let ie;
    for (; I !== V; )
      ie = w(I), l(I), I = ie;
    l(V);
  }, Y = (I, V, ie) => {
    const { bum: Ie, scope: $e, job: Se, subTree: Ae, um: Fe, m: De, a: Ee } = I;
    Zl(De), Zl(Ee), Ie && In(Ie), $e.stop(), Se && (Se.flags |= 8, Re(Ae, I, V, ie)), Fe && qt(Fe, V), qt(() => {
      I.isUnmounted = !0;
    }, V);
  }, we = (I, V, ie, Ie = !1, $e = !1, Se = 0) => {
    for (let Ae = Se; Ae < I.length; Ae++)
      Re(I[Ae], V, ie, Ie, $e);
  }, te = (I) => {
    if (I.shapeFlag & 6)
      return te(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const V = w(I.anchor || I.el), ie = V && V[dr];
    return ie ? w(ie) : V;
  };
  let oe = !1;
  const Me = (I, V, ie) => {
    I == null ? V._vnode && Re(V._vnode, null, null, !0) : k(
      V._vnode || null,
      I,
      V,
      null,
      null,
      null,
      ie
    ), V._vnode = I, oe || (oe = !0, zl(), rr(), oe = !1);
  }, fe = {
    p: k,
    um: Re,
    m: me,
    r: ve,
    mt: Q,
    mc: E,
    pc: Z,
    pbc: ae,
    n: te,
    o: e
  };
  return {
    render: Me,
    hydrate: void 0,
    createApp: qu(Me)
  };
}
function Oa({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Ys({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function md(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $l(e, t, o = !1) {
  const a = e.children, l = t.children;
  if (Xe(a) && Xe(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Gs(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && $l(c, u)), u.type === la && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Bt && !u.el && (u.el = c.el);
    }
}
function vd(e) {
  const t = e.slice(), o = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const m = e[a];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        t[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < m ? r = u + 1 : c = u;
      m < e[o[r]] && (r > 0 && (t[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = t[c];
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
function pd(e, t) {
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : xu(e);
}
const j = Symbol.for("v-fgt"), la = Symbol.for("v-txt"), Bt = Symbol.for("v-cmt"), Ua = Symbol.for("v-stc"), Xo = [];
let ts = null;
function n(e = !1) {
  Xo.push(ts = e ? null : []);
}
function gd() {
  Xo.pop(), ts = Xo[Xo.length - 1] || null;
}
let rn = 1;
function Bn(e, t = !1) {
  rn += e, e < 0 && ts && t && (ts.hasOnce = !0);
}
function Vr(e) {
  return e.dynamicChildren = rn > 0 ? ts || yo : null, gd(), rn > 0 && ts && ts.push(e), e;
}
function i(e, t, o, a, l, r) {
  return Vr(
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
  return Vr(
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
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function to(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Br = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Gt(e) || et(e) ? { i: Ut, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, a = 0, l = null, r = e === j ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Br(t),
    ref: t && Mn(t),
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
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Ut
  };
  return u ? (Cl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), rn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  ts && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && ts.push(d), d;
}
const C = hd;
function hd(e, t = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === $r) && (e = Bt), cn(e)) {
    const u = Hs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Cl(u, o), rn > 0 && !r && ts && (u.shapeFlag & 6 ? ts[ts.indexOf(e)] = u : ts.push(u)), u.patchFlag = -2, u;
  }
  if (Ed(e) && (e = e.__vccOpts), t) {
    t = yd(t);
    let { class: u, style: d } = t;
    u && !$t(u) && (t.class = Ve(u)), gt(d) && (hl(d) && !Xe(d) && (d = Mt({}, d)), t.style = Rt(d));
  }
  const c = $t(e) ? 1 : Fr(e) ? 128 : fr(e) ? 64 : gt(e) ? 4 : et(e) ? 2 : 0;
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
  return e ? hl(e) || Lr(e) ? Mt({}, e) : e : null;
}
function Hs(e, t, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, m = t ? wd(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && Br(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Xe(r) ? r.concat(Mn(t)) : [r, Mn(t)] : Mn(t)
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
  return d && a && lo(
    v,
    d.clone(v)
  ), v;
}
function x(e = " ", t = 0) {
  return C(la, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (n(), L(Bt, null, e)) : C(Bt, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? C(Bt) : Xe(e) ? C(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cn(e) ? Gs(e) : C(la, null, String(e));
}
function Gs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hs(e);
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
      !l && !Lr(t) ? t._ctx = Ut : l === 3 && Ut && (Ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Ut }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [x(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function wd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Ve([t.class, a.class]));
      else if (l === "style")
        t.style = Rt([t.style, a.style]);
      else if (Jn(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(Xe(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
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
const _d = Ir();
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
    propsOptions: Nr(a, l),
    emitsOptions: Mr(a, l),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Zu.bind(null, r), e.ce && e.ce(r), r;
}
let Wt = null;
const xl = () => Wt || Ut;
let Wn, Xa;
{
  const e = Zn(), t = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Wt = o
  ), Xa = t(
    "__VUE_SSR_SETTERS__",
    (o) => un = o
  );
}
const vn = (e) => {
  const t = Wt;
  return Wn(e), e.scope.on(), () => {
    e.scope.off(), Wn(t);
  };
}, ei = () => {
  Wt && Wt.scope.off(), Wn(null);
};
function Wr(e) {
  return e.vnode.shapeFlag & 4;
}
let un = !1;
function $d(e, t = !1, o = !1) {
  t && Xa(t);
  const { props: a, children: l } = e.vnode, r = Wr(e);
  ad(e, a, r, t), cd(e, l, o || t);
  const c = r ? Cd(e, t) : void 0;
  return t && Xa(!1), c;
}
function Cd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fu);
  const { setup: a } = o;
  if (a) {
    Ns();
    const l = e.setupContext = a.length > 1 ? Sd(e) : null, r = vn(e), c = mn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ai(c);
    if (Os(), r(), (u || e.sp) && !ko(e) && _r(e), u) {
      if (c.then(ei, ei), t)
        return c.then((d) => {
          ti(e, d);
        }).catch((d) => {
          ta(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ti(e, c);
  } else
    Gr(e);
}
function ti(e, t, o) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : gt(t) && (e.setupState = ar(t)), Gr(e);
}
function Gr(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || Cs);
  {
    const l = vn(e);
    Ns();
    try {
      Vu(e);
    } finally {
      Os(), l();
    }
  }
}
const xd = {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
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
function ia(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ar(pu(e.exposed)), {
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
function Id(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ed(e) {
  return et(e) && "__vccOpts" in e;
}
const M = (e, t) => _u(e, t, un);
function Po(e, t, o) {
  try {
    Bn(-1);
    const a = arguments.length;
    return a === 2 ? gt(t) && !Xe(t) ? cn(t) ? C(e, null, [t]) : C(e, t) : C(e, null, t) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && cn(o) && (o = [o]), C(e, t, o));
  } finally {
    Bn(1);
  }
}
const Td = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Za;
const si = typeof window < "u" && window.trustedTypes;
if (si)
  try {
    Za = /* @__PURE__ */ si.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jr = Za ? (e) => Za.createHTML(e) : (e) => e, Md = "http://www.w3.org/2000/svg", Pd = "http://www.w3.org/1998/Math/MathML", Ms = typeof document < "u" ? document : null, oi = Ms && /* @__PURE__ */ Ms.createElement("template"), Rd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, a) => {
    const l = t === "svg" ? Ms.createElementNS(Md, e) : t === "mathml" ? Ms.createElementNS(Pd, e) : o ? Ms.createElement(e, { is: o }) : Ms.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
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
  insertStaticContent(e, t, o, a, l, r) {
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      oi.innerHTML = jr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = oi.content;
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
}, Fs = "transition", Oo = "animation", Io = Symbol("_vtc"), Hr = {
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
}, qr = /* @__PURE__ */ Mt(
  {},
  gr,
  Hr
), Ld = (e) => (e.displayName = "Transition", e.props = qr, e), Dd = /* @__PURE__ */ Ld(
  (e, { slots: t }) => Po(Eu, Kr(e), t)
), Xs = (e, t = []) => {
  Xe(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ni = (e) => e ? Xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Kr(e) {
  const t = {};
  for (const ce in e)
    ce in Hr || (t[ce] = e[ce]);
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
    appearActiveClass: m = c,
    appearToClass: v = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, _ = Nd(l), k = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: S,
    onEnter: T,
    onEnterCancelled: P,
    onLeave: R,
    onLeaveCancelled: U,
    onBeforeAppear: A = S,
    onAppear: z = T,
    onAppearCancelled: E = P
  } = t, H = (ce, ke, Q, G) => {
    ce._enterCancelled = G, Vs(ce, ke ? v : u), Vs(ce, ke ? m : c), Q && Q();
  }, ae = (ce, ke) => {
    ce._isLeaving = !1, Vs(ce, p), Vs(ce, g), Vs(ce, w), ke && ke();
  }, de = (ce) => (ke, Q) => {
    const G = ce ? z : T, J = () => H(ke, ce, Q);
    Xs(G, [ke, J]), ai(() => {
      Vs(ke, ce ? d : r), ws(ke, ce ? v : u), ni(G) || li(ke, a, k, J);
    });
  };
  return Mt(t, {
    onBeforeEnter(ce) {
      Xs(S, [ce]), ws(ce, r), ws(ce, c);
    },
    onBeforeAppear(ce) {
      Xs(A, [ce]), ws(ce, d), ws(ce, m);
    },
    onEnter: de(!1),
    onAppear: de(!0),
    onLeave(ce, ke) {
      ce._isLeaving = !0;
      const Q = () => ae(ce, ke);
      ws(ce, p), ce._enterCancelled ? (ws(ce, w), el(ce)) : (el(ce), ws(ce, w)), ai(() => {
        ce._isLeaving && (Vs(ce, p), ws(ce, g), ni(R) || li(ce, a, $, Q));
      }), Xs(R, [ce, Q]);
    },
    onEnterCancelled(ce) {
      H(ce, !1, void 0, !0), Xs(P, [ce]);
    },
    onAppearCancelled(ce) {
      H(ce, !0, void 0, !0), Xs(E, [ce]);
    },
    onLeaveCancelled(ce) {
      ae(ce), Xs(U, [ce]);
    }
  });
}
function Nd(e) {
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
  return Fc(e);
}
function ws(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Io] || (e[Io] = /* @__PURE__ */ new Set())).add(t);
}
function Vs(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Io];
  o && (o.delete(t), o.size || (e[Io] = void 0));
}
function ai(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Od = 0;
function li(e, t, o, a) {
  const l = e._endId = ++Od, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Jr(e, t);
  if (!c)
    return a();
  const m = c + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(m, w), r();
  }, w = (g) => {
    g.target === e && ++v >= d && p();
  };
  setTimeout(() => {
    v < d && p();
  }, u + 1), e.addEventListener(m, w);
}
function Jr(e, t) {
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${Fs}Delay`), r = a(`${Fs}Duration`), c = ii(l, r), u = a(`${Oo}Delay`), d = a(`${Oo}Duration`), m = ii(u, d);
  let v = null, p = 0, w = 0;
  t === Fs ? c > 0 && (v = Fs, p = c, w = r.length) : t === Oo ? m > 0 && (v = Oo, p = m, w = d.length) : (p = Math.max(c, m), v = p > 0 ? c > m ? Fs : Oo : null, w = v ? v === Fs ? r.length : d.length : 0);
  const g = v === Fs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Fs}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function ii(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, a) => ri(o) + ri(e[a])));
}
function ri(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function el(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ud(e, t, o) {
  const a = e[Io];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ci = Symbol("_vod"), Ad = Symbol("_vsh"), zd = Symbol(""), Fd = /(?:^|;)\s*display\s*:/;
function Vd(e, t, o) {
  const a = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if ($t(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Pn(a, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Pn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Pn(a, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = a[zd];
      c && (o += ";" + c), a.cssText = o, r = Fd.test(o);
    }
  } else t && e.removeAttribute("style");
  ci in e && (e[ci] = r ? a.display : "", e[Ad] && (a.display = "none"));
}
const ui = /\s*!important$/;
function Pn(e, t, o) {
  if (Xe(o))
    o.forEach((a) => Pn(e, t, a));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = Bd(e, t);
    ui.test(o) ? e.setProperty(
      Ks(a),
      o.replace(ui, ""),
      "important"
    ) : e[a] = o;
  }
}
const di = ["Webkit", "Moz", "ms"], za = {};
function Bd(e, t) {
  const o = za[t];
  if (o)
    return o;
  let a = rs(t);
  if (a !== "filter" && a in e)
    return za[t] = a;
  a = Yn(a);
  for (let l = 0; l < di.length; l++) {
    const r = di[l] + a;
    if (r in e)
      return za[t] = r;
  }
  return t;
}
const fi = "http://www.w3.org/1999/xlink";
function mi(e, t, o, a, l, r = Hc(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(fi, t.slice(6, t.length)) : e.setAttributeNS(fi, t, o) : o == null || r && !Bi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ms(o) ? String(o) : o
  );
}
function vi(e, t, o, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? jr(o) : o);
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
    u === "boolean" ? o = Bi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Ds(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function Wd(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const pi = Symbol("_vei");
function Gd(e, t, o, a, l = null) {
  const r = e[pi] || (e[pi] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = jd(t);
    if (a) {
      const m = r[t] = Kd(
        a,
        l
      );
      Ds(e, u, m, d);
    } else c && (Wd(e, u, c, d), r[t] = void 0);
  }
}
const gi = /(?:Once|Passive|Capture)$/;
function jd(e) {
  let t;
  if (gi.test(e)) {
    t = {};
    let a;
    for (; a = e.match(gi); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ks(e.slice(2)), t];
}
let Fa = 0;
const Hd = /* @__PURE__ */ Promise.resolve(), qd = () => Fa || (Hd.then(() => Fa = 0), Fa = Date.now());
function Kd(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ps(
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
const hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Qd = (e, t, o, a, l, r) => {
  const c = l === "svg";
  t === "class" ? Ud(e, a, c) : t === "style" ? Vd(e, o, a) : Jn(t) ? il(t) || Gd(e, t, o, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yd(e, t, a, c)) ? (vi(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mi(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !$t(a)) ? vi(e, rs(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), mi(e, t, a, c));
};
function Yd(e, t, o, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hi(t) && et(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return hi(t) && $t(o) ? !1 : t in e;
}
const Qr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), Gn = Symbol("_moveCb"), yi = Symbol("_enterCb"), Xd = (e) => (delete e.props.mode, e), Zd = /* @__PURE__ */ Xd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, qr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = xl(), a = pr();
    let l, r;
    return br(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!nf(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(tf), l.forEach(sf);
      const u = l.filter(of);
      el(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        ws(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = m[Gn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", p), m[Gn] = null, Vs(m, c));
        };
        m.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ut(e), u = Kr(c);
      let d = c.tag || j;
      if (l = [], r)
        for (let m = 0; m < r.length; m++) {
          const v = r[m];
          v.el && v.el instanceof Element && (l.push(v), lo(
            v,
            ln(
              v,
              u,
              a,
              o
            )
          ), Qr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = t.default ? wl(t.default()) : [];
      for (let m = 0; m < r.length; m++) {
        const v = r[m];
        v.key != null && lo(
          v,
          ln(v, u, a, o)
        );
      }
      return C(d, null, r);
    };
  }
}), ef = Zd;
function tf(e) {
  const t = e.el;
  t[Gn] && t[Gn](), t[yi] && t[yi]();
}
function sf(e) {
  Yr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function of(e) {
  const t = Qr.get(e), o = Yr.get(e), a = t.left - o.left, l = t.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function nf(e, t, o) {
  const a = e.cloneNode(), l = e[Io];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Jr(a);
  return r.removeChild(a), c;
}
const qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (o) => In(t, o) : t;
};
function af(e) {
  e.target.composing = !0;
}
function wi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const is = Symbol("_assign");
function _i(e, t, o) {
  return t && (e = e.trim()), o && (e = Xn(e)), e;
}
const Zo = {
  created(e, { modifiers: { lazy: t, trim: o, number: a } }, l) {
    e[is] = qs(l);
    const r = a || l.props && l.props.type === "number";
    Ds(e, t ? "change" : "input", (c) => {
      c.target.composing || e[is](_i(e.value, o, r));
    }), (o || r) && Ds(e, "change", () => {
      e.value = _i(e.value, o, r);
    }), t || (Ds(e, "compositionstart", af), Ds(e, "compositionend", wi), Ds(e, "change", wi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[is] = qs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Xn(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, jn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[is] = qs(o), Ds(e, "change", () => {
      const a = e._modelValue, l = Eo(e), r = e.checked, c = e[is];
      if (Xe(a)) {
        const u = ul(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const m = [...a];
          m.splice(u, 1), c(m);
        }
      } else if (To(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Xr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ki,
  beforeUpdate(e, t, o) {
    e[is] = qs(o), ki(e, t, o);
  }
};
function ki(e, { value: t, oldValue: o }, a) {
  e._modelValue = t;
  let l;
  if (Xe(t))
    l = ul(t, a.props.value) > -1;
  else if (To(t))
    l = t.has(a.props.value);
  else {
    if (t === o) return;
    l = ao(t, Xr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Rn = {
  created(e, { value: t }, o) {
    e.checked = ao(t, o.props.value), e[is] = qs(o), Ds(e, "change", () => {
      e[is](Eo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, a) {
    e[is] = qs(a), t !== o && (e.checked = ao(t, a.props.value));
  }
}, $o = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, a) {
    const l = To(t);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Xn(Eo(c)) : Eo(c)
      );
      e[is](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[is] = qs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    bi(e, t);
  },
  beforeUpdate(e, t, o) {
    e[is] = qs(o);
  },
  updated(e, { value: t }) {
    e._assigning || bi(e, t);
  }
};
function bi(e, t) {
  const o = e.multiple, a = Xe(t);
  if (!(o && !a && !To(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Eo(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((m) => String(m) === String(u)) : c.selected = ul(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (ao(Eo(c), t)) {
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
function Xr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const lf = ["ctrl", "shift", "alt", "meta"], rf = {
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
  exact: (e, t) => lf.some((o) => e[`${o}Key`] && !t.includes(o))
}, vt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), a = t.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = rf[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, cf = {
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
      (c) => c === r || cf[c] === r
    ))
      return e(l);
  }));
}, uf = /* @__PURE__ */ Mt({ patchProp: Qd }, Rd);
let $i;
function df() {
  return $i || ($i = dd(uf));
}
const pn = ((...e) => {
  const t = df().createApp(...e), { mount: o } = t;
  return t.mount = (a) => {
    const l = mf(a);
    if (!l) return;
    const r = t._component;
    !et(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, ff(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function ff(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function mf(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const vf = { class: "panel-layout" }, pf = {
  key: 0,
  class: "panel-layout-header"
}, gf = {
  key: 1,
  class: "panel-layout-search"
}, hf = { class: "panel-layout-content" }, yf = {
  key: 2,
  class: "panel-layout-footer"
}, wf = /* @__PURE__ */ be({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (n(), i("div", vf, [
      t.$slots.header ? (n(), i("div", pf, [
        st(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (n(), i("div", gf, [
        st(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", hf, [
        st(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (n(), i("div", yf, [
        st(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), xe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
}, At = /* @__PURE__ */ xe(wf, [["__scopeId", "data-v-21565df9"]]), _f = {
  key: 0,
  class: "panel-title-prefix"
}, kf = {
  key: 1,
  class: "panel-title-prefix-theme"
}, bf = /* @__PURE__ */ be({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (n(), L(_l(`h${e.level}`), {
      class: Ve(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", _f, f(e.prefix), 1)) : (n(), i("span", kf)),
        st(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $f = /* @__PURE__ */ xe(bf, [["__scopeId", "data-v-c3875efc"]]), Cf = ["title"], xf = ["width", "height"], Sf = /* @__PURE__ */ be({
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
      ])], 8, xf))
    ], 8, Cf));
  }
}), Sl = /* @__PURE__ */ xe(Sf, [["__scopeId", "data-v-6fc7f16d"]]), If = { class: "header-left" }, Ef = {
  key: 0,
  class: "header-actions"
}, Tf = /* @__PURE__ */ be({
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
      s("div", If, [
        C($f, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            x(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), L(Sl, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (n(), i("div", Ef, [
        st(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ xe(Tf, [["__scopeId", "data-v-55a62cd6"]]), Mf = {
  key: 0,
  class: "section-title-count"
}, Pf = {
  key: 1,
  class: "section-title-icon"
}, Rf = /* @__PURE__ */ be({
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
      class: Ve(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Mf, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", Pf, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), as = /* @__PURE__ */ xe(Rf, [["__scopeId", "data-v-559361eb"]]), Lf = { class: "status-grid" }, Df = { class: "status-grid__columns" }, Nf = { class: "status-grid__column" }, Of = { class: "status-grid__title" }, Uf = { class: "status-grid__column status-grid__column--right" }, Af = { class: "status-grid__title" }, zf = {
  key: 0,
  class: "status-grid__footer"
}, Ff = /* @__PURE__ */ be({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", Lf, [
      s("div", Df, [
        s("div", Nf, [
          s("h4", Of, f(e.leftTitle), 1),
          st(t.$slots, "left", {}, void 0)
        ]),
        s("div", Uf, [
          s("h4", Af, f(e.rightTitle), 1),
          st(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (n(), i("div", zf, [
        st(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Vf = /* @__PURE__ */ xe(Ff, [["__scopeId", "data-v-73b7ba3f"]]), Bf = {
  key: 0,
  class: "status-item__icon"
}, Wf = {
  key: 1,
  class: "status-item__count"
}, Gf = { class: "status-item__label" }, jf = /* @__PURE__ */ be({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = M(() => `status-item--${t.variant}`);
    return (a, l) => (n(), i("div", {
      class: Ve(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", Bf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", Wf, f(e.count), 1)) : y("", !0),
      s("span", Gf, f(e.label), 1)
    ], 2));
  }
}), ys = /* @__PURE__ */ xe(jf, [["__scopeId", "data-v-6f929183"]]), Hf = { class: "issue-card__header" }, qf = { class: "issue-card__icon" }, Kf = { class: "issue-card__title" }, Jf = {
  key: 0,
  class: "issue-card__content"
}, Qf = {
  key: 0,
  class: "issue-card__description"
}, Yf = {
  key: 1,
  class: "issue-card__items"
}, Xf = {
  key: 2,
  class: "issue-card__actions"
}, Zf = /* @__PURE__ */ be({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = M(() => `issue-card--${t.severity}`);
    return (a, l) => (n(), i("div", {
      class: Ve(["issue-card", o.value])
    }, [
      s("div", Hf, [
        s("span", qf, f(e.icon), 1),
        s("h4", Kf, f(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Jf, [
        e.description ? (n(), i("p", Qf, f(e.description), 1)) : y("", !0),
        st(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Yf, [
        (n(!0), i(j, null, he(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, f(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", Xf, [
        st(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ xe(Zf, [["__scopeId", "data-v-df6aa348"]]), em = ["type", "disabled"], tm = {
  key: 0,
  class: "spinner"
}, sm = /* @__PURE__ */ be({
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
      e.loading ? (n(), i("span", tm)) : y("", !0),
      e.loading ? y("", !0) : st(t.$slots, "default", { key: 1 }, void 0)
    ], 10, em));
  }
}), Te = /* @__PURE__ */ xe(sm, [["__scopeId", "data-v-772abe47"]]), om = { class: "empty-state" }, nm = {
  key: 0,
  class: "empty-icon"
}, am = { class: "empty-message" }, lm = /* @__PURE__ */ be({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (n(), i("div", om, [
      e.icon ? (n(), i("div", nm, f(e.icon), 1)) : y("", !0),
      s("p", am, f(e.message), 1),
      e.actionLabel ? (n(), L(Te, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          x(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ xe(lm, [["__scopeId", "data-v-4466284f"]]), im = /* @__PURE__ */ be({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Ve(["detail-label"]),
      style: Rt({ minWidth: e.minWidth })
    }, [
      st(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Ln = /* @__PURE__ */ xe(im, [["__scopeId", "data-v-75e9eeb8"]]), rm = /* @__PURE__ */ be({
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
}), tl = /* @__PURE__ */ xe(rm, [["__scopeId", "data-v-2f186e4c"]]), cm = { class: "detail-row" }, um = /* @__PURE__ */ be({
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
    return (t, o) => (n(), i("div", cm, [
      C(Ln, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          x(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), L(tl, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          x(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : st(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ xe(um, [["__scopeId", "data-v-ef15664a"]]), dm = { class: "modal-header" }, fm = { class: "modal-body" }, mm = { class: "status-section" }, vm = {
  key: 0,
  class: "status-section"
}, pm = { class: "section-header-row" }, gm = {
  key: 0,
  class: "workflow-group"
}, hm = { class: "workflow-group-header" }, ym = { class: "workflow-group-title" }, wm = { class: "workflow-list" }, _m = { class: "workflow-name" }, km = { class: "workflow-issue" }, bm = {
  key: 1,
  class: "workflow-group"
}, $m = { class: "workflow-group-header" }, Cm = { class: "workflow-group-title" }, xm = { class: "workflow-list" }, Sm = { class: "workflow-name" }, Im = { class: "workflow-issue" }, Em = {
  key: 2,
  class: "workflow-group"
}, Tm = { class: "workflow-group-header" }, Mm = { class: "workflow-group-title" }, Pm = { class: "workflow-list" }, Rm = { class: "workflow-name" }, Lm = {
  key: 3,
  class: "workflow-group"
}, Dm = { class: "workflow-group-header" }, Nm = { class: "workflow-group-title" }, Om = { class: "workflow-list" }, Um = { class: "workflow-name" }, Am = {
  key: 4,
  class: "workflow-group"
}, zm = { class: "workflow-group-header" }, Fm = { class: "workflow-group-title" }, Vm = { class: "workflow-list" }, Bm = { class: "workflow-name" }, Wm = {
  key: 5,
  class: "workflow-group"
}, Gm = { class: "workflow-group-title" }, jm = { class: "expand-icon" }, Hm = {
  key: 0,
  class: "workflow-list"
}, qm = { class: "workflow-name" }, Km = {
  key: 1,
  class: "status-section"
}, Jm = {
  key: 0,
  class: "change-group"
}, Qm = { class: "change-group-header" }, Ym = { class: "change-group-title" }, Xm = { class: "change-list" }, Zm = { class: "node-name" }, ev = {
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
}, fv = {
  key: 2,
  class: "status-section"
}, mv = { class: "section-header-row" }, vv = {
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
}, Dv = { class: "modal-actions" }, Nv = /* @__PURE__ */ be({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = b(!1);
    at(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), wt(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = M(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (k) => k.status === "broken" && k.sync_state === "synced"
      )) || [];
    }), l = M(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (k) => k.status === "broken" && k.sync_state !== "synced"
      )) || [];
    }), r = M(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : _.filter((k) => {
        var S, T, P;
        const $ = (P = (T = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : P.find((R) => R.name === k);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = M(() => {
      var w, g, _, k, $;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((k = t.status.workflows.deleted) == null ? void 0 : k.length) ?? 0) > 0 || ((($ = t.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = M(() => {
      var g, _, k;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((k = w.nodes_removed) == null ? void 0 : k.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = M(() => {
      var w, g, _, k, $, S;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = ($ = (k = t.status) == null ? void 0 : k.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), m = M(() => {
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
      var _, k, $, S, T, P, R, U, A, z, E, H, ae, de, ce, ke, Q, G, J, Le, Z, ye;
      return n(), L(Lt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (O) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", dm, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (O) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", fm, [
              s("div", mm, [
                C(as, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
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
              c.value ? (n(), i("div", vm, [
                s("div", pm, [
                  C(as, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      x("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (O) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", gm, [
                  s("div", hm, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", ym, "BROKEN (COMMITTED) (" + f(a.value.length) + ")", 1)
                  ]),
                  s("div", wm, [
                    (n(!0), i(j, null, he(a.value, (O) => (n(), i("div", {
                      key: O.name,
                      class: "workflow-item"
                    }, [
                      s("span", _m, f(O.name), 1),
                      s("span", km, f(O.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", bm, [
                  s("div", $m, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Cm, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  s("div", xm, [
                    (n(!0), i(j, null, he(l.value, (O) => (n(), i("div", {
                      key: O.name,
                      class: "workflow-item"
                    }, [
                      s("span", Sm, f(O.name), 1),
                      s("span", Im, f(O.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (k = (_ = e.status.workflows) == null ? void 0 : _.new) != null && k.length ? (n(), i("div", Em, [
                  s("div", Tm, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Mm, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Pm, [
                    (n(!0), i(j, null, he(e.status.workflows.new, (O) => (n(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Rm, f(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && S.length ? (n(), i("div", Lm, [
                  s("div", Dm, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Nm, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Om, [
                    (n(!0), i(j, null, he(e.status.workflows.modified, (O) => (n(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Um, f(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = (T = e.status.workflows) == null ? void 0 : T.deleted) != null && P.length ? (n(), i("div", Am, [
                  s("div", zm, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Fm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Vm, [
                    (n(!0), i(j, null, he(e.status.workflows.deleted, (O) => (n(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Bm, f(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", Wm, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (O) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Gm, "SYNCED (" + f(r.value.length) + ")", 1),
                    s("span", jm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Hm, [
                    (n(!0), i(j, null, he(r.value, (O) => (n(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", qm, f(O), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", Km, [
                C(as, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (U = (R = e.status.git_changes) == null ? void 0 : R.nodes_added) != null && U.length ? (n(), i("div", Jm, [
                  s("div", Qm, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Ym, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Xm, [
                    (n(!0), i(j, null, he(e.status.git_changes.nodes_added, (O) => (n(), i("div", {
                      key: v(O),
                      class: "change-item"
                    }, [
                      s("span", Zm, f(v(O)), 1),
                      p(O) ? (n(), i("span", ev, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (z = (A = e.status.git_changes) == null ? void 0 : A.nodes_removed) != null && z.length ? (n(), i("div", tv, [
                  s("div", sv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", ov, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", nv, [
                    (n(!0), i(j, null, he(e.status.git_changes.nodes_removed, (O) => (n(), i("div", {
                      key: v(O),
                      class: "change-item"
                    }, [
                      s("span", av, f(v(O)), 1),
                      p(O) ? (n(), i("span", lv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (n(), i("div", iv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", rv, [
                    s("div", cv, [
                      s("span", uv, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (H = e.status.git_changes) != null && H.has_other_changes ? (n(), i("div", dv, [...g[21] || (g[21] = [
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
              (ae = e.status.comparison) != null && ae.is_synced ? y("", !0) : (n(), i("div", fv, [
                s("div", mv, [
                  C(as, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      x("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (O) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (ce = (de = e.status.comparison) == null ? void 0 : de.missing_nodes) != null && ce.length ? (n(), i("div", vv, [
                  C(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", pv, [
                    (n(!0), i(j, null, he(e.status.comparison.missing_nodes.slice(0, 10), (O) => (n(), i("div", {
                      key: O,
                      class: "drift-list-item"
                    }, " - " + f(O), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", gv, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (Q = (ke = e.status.comparison) == null ? void 0 : ke.extra_nodes) != null && Q.length ? (n(), i("div", hv, [
                  C(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", yv, [
                    (n(!0), i(j, null, he(e.status.comparison.extra_nodes.slice(0, 10), (O) => (n(), i("div", {
                      key: O,
                      class: "drift-list-item"
                    }, " - " + f(O), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", wv, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (J = (G = e.status.comparison) == null ? void 0 : G.version_mismatches) != null && J.length ? (n(), i("div", _v, [
                  C(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", kv, [
                    (n(!0), i(j, null, he(e.status.comparison.version_mismatches.slice(0, 10), (O) => (n(), i("div", {
                      key: O.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(f(O.name) + ": ", 1),
                      s("span", bv, f(O.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", $v, f(O.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Cv, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Le = e.status.comparison) == null ? void 0 : Le.packages_in_sync) === !1 ? (n(), i("div", xv, [
                  C(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Sv, [
                  C(Te, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (O) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      x(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ye = (Z = e.status.comparison) == null ? void 0 : Z.disabled_nodes) != null && ye.length ? (n(), i("div", Iv, [
                C(as, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Ev, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Tv, [
                  (n(!0), i(j, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (O) => (n(), i("div", {
                    key: O,
                    class: "drift-list-item"
                  }, " • " + f(O), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Mv, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Pv, [
                C(as, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Rv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
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
              C(Te, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (O) => w.$emit("close"))
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
}), Ov = /* @__PURE__ */ xe(Nv, [["__scopeId", "data-v-e2b37122"]]), Uv = { class: "health-section-header" }, Av = { class: "suggestions-content" }, zv = { class: "suggestions-text" }, Fv = { style: { "margin-top": "var(--cg-space-3)" } }, Vv = {
  key: 1,
  class: "no-issues-text"
}, Bv = /* @__PURE__ */ be({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = b(!1), r = b(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, m("view-workflows");
    }
    function d() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = b(!1), p = b(!1);
    function w() {
      p.value = !0, m("repair-environment");
    }
    function g() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const k = M(() => {
      const ee = a.status.workflows.analyzed || [], Y = ee.filter(
        (we) => we.unresolved_models_count > 0 || we.ambiguous_models_count > 0
      );
      return Y.length === 0 && a.status.missing_models_count > 0 ? ee.filter((we) => we.sync_state === "synced") : Y;
    });
    function $() {
      const ee = k.value;
      ee.length !== 0 && (v.value = !0, m("repair-missing-models", ee.map((Y) => Y.name)));
    }
    function S() {
      v.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: g, closeDetailModal: _ });
    const T = M(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), P = M(() => a.status.has_changes), R = M(() => {
      const ee = a.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), U = M(() => a.status.has_changes || T.value), A = M(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), z = M(() => a.status.git_changes.has_other_changes), E = M(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter((Y) => Y.status === "broken")) || [];
    }), H = M(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (Y) => Y.has_path_sync_issues && !Y.has_issues
      )) || [];
    }), ae = M(() => E.value.length > 0);
    function de(ee) {
      const Y = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const we of Y) {
        const te = ee.match(we);
        if (te != null && te[1])
          return te[1];
      }
      return null;
    }
    function ce(ee) {
      const Y = ee.map(de).filter((we) => !!we);
      return [...new Set(Y)];
    }
    function ke(ee) {
      if (ee.length === 0) return "";
      if (ee.length === 1) return ` (>= ${ee[0]})`;
      const Y = ee.slice(0, 2).map((te) => `>= ${te}`).join(", "), we = ee.length > 2;
      return ` (${Y}${we ? ", ..." : ""})`;
    }
    function Q(ee) {
      return ee.replace(/uninstallable node mappings?/gi, (Y) => Y.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function G(ee) {
      const Y = Q(ee.issue_summary || "Has issues"), we = /(?:>=|v?\d+\.\d+)/i.test(Y), te = ce(ee.version_gated_guidance || []);
      return (ee.nodes_version_gated_count || 0) > 0 && te.length > 0 && !we ? `${ee.name} — ${Y} (needs ComfyUI ${te.map((oe) => `>= ${oe}`).join(", ")})` : `${ee.name} — ${Y}`;
    }
    const J = M(() => E.value.reduce(
      (ee, Y) => ee + (Y.nodes_version_gated_count || 0),
      0
    )), Le = M(() => {
      const ee = E.value.flatMap(
        (Y) => ce(Y.version_gated_guidance || [])
      );
      return [...new Set(ee)];
    }), Z = M(() => E.value.reduce(
      (ee, Y) => ee + (Y.nodes_uninstallable_count || 0),
      0
    )), ye = M(() => {
      const ee = [];
      return J.value > 0 && ee.push(
        `${J.value} require newer ComfyUI${ke(Le.value)}`
      ), Z.value > 0 && ee.push(`${Z.value} need community packages`), ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), O = M(() => ae.value || H.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), me = M(() => {
      const ee = [];
      return a.status.workflows.new.length > 0 && ee.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && ee.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && ee.push(`${a.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Re = M(() => {
      var we, te;
      const ee = [], Y = a.status.comparison;
      return (we = Y.missing_nodes) != null && we.length && ee.push(`${Y.missing_nodes.length} missing node${Y.missing_nodes.length === 1 ? "" : "s"}`), (te = Y.extra_nodes) != null && te.length && ee.push(`${Y.extra_nodes.length} untracked node${Y.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), ve = M(() => {
      var we, te;
      const ee = [], Y = a.status.comparison;
      return (we = Y.extra_nodes) != null && we.length && (Y.extra_nodes.slice(0, 3).forEach((oe) => {
        ee.push(`Untracked: ${oe}`);
      }), Y.extra_nodes.length > 3 && ee.push(`...and ${Y.extra_nodes.length - 3} more untracked`)), (te = Y.missing_nodes) != null && te.length && (Y.missing_nodes.slice(0, 3).forEach((oe) => {
        ee.push(`Missing: ${oe}`);
      }), Y.missing_nodes.length > 3 && ee.push(`...and ${Y.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, Y) => (n(), i(j, null, [
      C(At, null, {
        header: h(() => [
          C(zt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), L(us, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: Y[0] || (Y[0] = (we) => ee.$emit("start-setup"))
              }, {
                default: h(() => [...Y[13] || (Y[13] = [
                  x(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), L(us, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: Y[1] || (Y[1] = (we) => ee.$emit("view-environments"))
              }, {
                default: h(() => [...Y[14] || (Y[14] = [
                  x(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), L(us, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: Y[2] || (Y[2] = (we) => ee.$emit("create-environment"))
              }, {
                default: h(() => [...Y[15] || (Y[15] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: Y[4] || (Y[4] = (we) => r.value = !0),
            onMouseleave: Y[5] || (Y[5] = (we) => r.value = !1)
          }, [
            s("div", Uv, [
              C(as, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...Y[16] || (Y[16] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Dd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), L(Te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...Y[17] || (Y[17] = [
                      x(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(Vf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: h(() => [
                e.status.workflows.new.length ? (n(), L(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), L(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), L(ys, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(ys, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: T.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (n(), L(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), L(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), L(ys, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                z.value ? (n(), L(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                P.value && !R.value && !z.value ? (n(), L(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                P.value ? y("", !0) : (n(), L(ys, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              U.value ? {
                name: "footer",
                fn: h(() => [
                  Y[19] || (Y[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Av, [
                    s("span", zv, f(me.value), 1),
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: Y[3] || (Y[3] = (we) => ee.$emit("commit-changes"))
                    }, {
                      default: h(() => [...Y[18] || (Y[18] = [
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
          e.status.is_detached_head ? (n(), L(us, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: Y[6] || (Y[6] = (we) => ee.$emit("create-branch"))
              }, {
                default: h(() => [...Y[20] || (Y[20] = [
                  x(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Fv, [
            C(as, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...Y[21] || (Y[21] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            O.value ? (n(), i(j, { key: 0 }, [
              E.value.length > 0 ? (n(), L(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: ye.value,
                items: E.value.map(G)
              }, {
                actions: h(() => [
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: Y[7] || (Y[7] = (we) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Y[22] || (Y[22] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              H.value.length > 0 ? (n(), L(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${H.value.length} workflow${H.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: H.value.map((we) => `${we.name} — ${we.models_needing_path_sync_count} model path${we.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: Y[8] || (Y[8] = (we) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Y[23] || (Y[23] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ae.value ? (n(), L(us, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: $
                  }, {
                    default: h(() => [
                      x(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: Y[9] || (Y[9] = (we) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Y[24] || (Y[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), L(us, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Re.value,
                items: ve.value
              }, {
                actions: h(() => [
                  C(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...Y[25] || (Y[25] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: Y[10] || (Y[10] = (we) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...Y[26] || (Y[26] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), L(us, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  C(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: Y[11] || (Y[11] = (we) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...Y[27] || (Y[27] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : U.value ? (n(), i("span", Vv, "No issues")) : (n(), L(cs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Ov, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: Y[12] || (Y[12] = (we) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Wv = /* @__PURE__ */ xe(Bv, [["__scopeId", "data-v-df52ba90"]]), RR = ro({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const LR = [
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
], DR = {
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
}, Gv = [
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
], NR = [
  ...Gv,
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
function Uo() {
  return !1;
}
class Zr extends Error {
  constructor(o, a, l, r) {
    super(o);
    wn(this, "status");
    wn(this, "data");
    wn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function jv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ct() {
  const e = b(!1), t = b(null);
  async function o(W, _e) {
    var Nt;
    if (!((Nt = window.app) != null && Nt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi(W, _e), ft = await je.text();
    if (!je.ok) {
      let jt = {};
      if (ft)
        try {
          const gs = JSON.parse(ft);
          gs && typeof gs == "object" && (jt = gs);
        } catch {
          jt = { error: ft };
        }
      const Ze = jt.error || jt.message || jt.detail || je.statusText || `Request failed: ${je.status}`;
      throw new Zr(String(Ze), je.status, jt, W);
    }
    if (ft)
      return JSON.parse(ft);
  }
  async function a(W) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(W)}`);
  }
  async function l(W, _e, je) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, email: _e, password: je })
    });
  }
  async function r(W, _e, je) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, email: _e, password: je })
    });
  }
  async function c(W, _e) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(W)}`, {
      headers: { Authorization: `Bearer ${_e}` }
    });
  }
  async function u(W, _e) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, refresh_token: _e || null })
    });
  }
  async function d(W, _e) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(W)}`, {
      headers: { Authorization: `Bearer ${_e}` }
    });
  }
  async function m(W, _e, je) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(_e)}/revisions?cloud_url=${encodeURIComponent(W)}`,
      {
        headers: { Authorization: `Bearer ${je}` }
      }
    );
  }
  async function v(W, _e, je, ft) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${_e}`
      },
      body: JSON.stringify({
        cloud_url: W,
        source_message: je || null,
        cloud_environment_id: ft || null
      })
    });
  }
  async function p(W = !1) {
    return o(W ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(W, _e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: W, allow_issues: _e })
    });
  }
  async function g(W = 10, _e = 0) {
    return o(`/v2/comfygit/log?limit=${W}&offset=${_e}`);
  }
  async function _(W, _e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(W)}&limit=${_e}`);
  }
  async function k(W) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W })
    });
  }
  async function $() {
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
  async function P(W) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(W)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function R(W, _e) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(W)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: _e, force: !0 })
    });
  }
  async function U() {
    return o("/v2/comfygit/branches");
  }
  async function A(W) {
    return o(`/v2/comfygit/commit/${W}`);
  }
  async function z(W, _e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: W, force: _e })
    });
  }
  async function E(W, _e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: W, start_point: _e })
    });
  }
  async function H(W, _e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: W, force: _e })
    });
  }
  async function ae(W, _e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(W)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: _e })
    });
  }
  async function de() {
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
  async function ce() {
    return (await de()).environments;
  }
  async function ke(W) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(W)}`);
    } catch {
      return null;
    }
  }
  async function Q(W, _e) {
    const je = { target_env: W };
    return _e && (je.workspace_path = _e), o("/v2/comfygit/switch_environment", {
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
  async function J(W) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Le() {
    return o("/v2/workspace/environments/create_status");
  }
  async function Z(W = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${W}`);
  }
  async function ye(W) {
    return o(`/v2/workspace/environments/${W}`, {
      method: "DELETE"
    });
  }
  async function O(W = !1) {
    try {
      return o(W ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const _e = await p(W), je = [];
      return _e.workflows.new.forEach((ft) => {
        je.push({
          name: ft,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ft
        });
      }), _e.workflows.modified.forEach((ft) => {
        je.push({
          name: ft,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ft
        });
      }), _e.workflows.synced.forEach((ft) => {
        je.push({
          name: ft,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ft
        });
      }), je;
    }
  }
  async function me(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/details`);
  }
  async function Re(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/contract`);
  }
  async function ve(W, _e) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function ee(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/contract`, {
      method: "DELETE"
    });
  }
  async function Y(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/resolve`, {
      method: "POST"
    });
  }
  async function we(W, _e, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: _e, install_models: je })
    });
  }
  async function te(W, _e, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: _e, importance: je })
    });
  }
  async function oe() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Me() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function fe(W) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(W)}`);
  }
  async function le(W) {
    return o(`/v2/workspace/models/${encodeURIComponent(W)}/source-candidates`);
  }
  async function I() {
    return o("/v2/workspace/models/workflow-source-candidates");
  }
  async function V(W) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function ie(W, _e) {
    return o(`/v2/workspace/models/${W}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function Ie(W, _e) {
    return o(`/v2/workspace/models/${W}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function $e(W) {
    return o(`/v2/workspace/models/${W}`, {
      method: "DELETE"
    });
  }
  async function Se(W) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Ae() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Fe() {
    return o("/v2/workspace/models/directory");
  }
  async function De(W) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function Ee(W) {
    const _e = new URLSearchParams({ url: W });
    return o(`/v2/workspace/huggingface/repo-info?${_e}`);
  }
  async function Ke() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Be(W, _e = 10) {
    const je = new URLSearchParams({ query: W, limit: String(_e) });
    return o(`/v2/workspace/huggingface/search?${je}`);
  }
  async function pe(W) {
    try {
      const _e = W ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(W)}` : "/v2/comfygit/config";
      return o(_e);
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
  async function K(W, _e) {
    const je = _e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(_e)}` : "/v2/comfygit/config";
    return o(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function He(W, _e) {
    try {
      const je = new URLSearchParams();
      return W && je.append("level", W), _e && je.append("lines", _e.toString()), o(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Ce(W, _e) {
    try {
      const je = new URLSearchParams();
      return W && je.append("level", W), _e && je.append("lines", _e.toString()), o(`/v2/workspace/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Ye() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ot() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function ze() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function N(W, _e) {
    try {
      const je = new URLSearchParams();
      return W && je.append("level", W), _e && je.append("lines", _e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function se() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function ge(W) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function Je() {
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
  async function D(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/track-dev`, {
      method: "POST"
    });
  }
  async function F(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/install`, {
      method: "POST"
    });
  }
  async function X(W, _e) {
    var Ze, gs, Ll, Dl;
    const je = jv(), ft = ((gs = (Ze = window.app) == null ? void 0 : Ze.api) == null ? void 0 : gs.clientId) ?? ((Dl = (Ll = window.app) == null ? void 0 : Ll.api) == null ? void 0 : Dl.initialClientId) ?? "comfygit-panel", Nt = {
      id: W.id,
      version: W.version || W.selected_version || "latest",
      selected_version: W.selected_version || "latest",
      mode: W.mode || "remote",
      channel: W.channel || "default"
    };
    return W.install_source && (Nt.install_source = W.install_source), W.install_source === "git" && W.repository && (Nt.repository = W.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Nt,
        ui_id: je,
        client_id: ft
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", W.id), _e != null && _e.beforeQueueStart && await _e.beforeQueueStart(je), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: je };
  }
  async function Oe(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/update`, {
      method: "POST"
    });
  }
  async function Ue(W, _e) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: _e })
    });
  }
  async function Pe(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function Ge() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function nt(W, _e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: W, url: _e })
    });
  }
  async function kt(W) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function Et(W, _e, je) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: _e, push_url: je })
    });
  }
  async function re(W, _e) {
    const je = {};
    return _e && (je["X-Git-Auth-Token"] = _e), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function B(W) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/status`);
    } catch {
      return null;
    }
  }
  async function ue(W = "skip", _e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: W,
        remove_extra_nodes: _e
      })
    });
  }
  async function We(W, _e) {
    const je = _e ? `/v2/comfygit/remotes/${encodeURIComponent(W)}/pull-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(W)}/pull-preview`;
    return o(je);
  }
  async function dt(W, _e = {}) {
    const je = { "Content-Type": "application/json" };
    return _e.authToken && (je["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: _e.modelStrategy || "skip",
        force: _e.force || !1,
        resolutions: _e.resolutions
      })
    });
  }
  async function Ct(W, _e) {
    const je = _e ? `/v2/comfygit/remotes/${encodeURIComponent(W)}/push-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(W)}/push-preview`;
    return o(je);
  }
  async function it(W, _e = {}) {
    const je = { "Content-Type": "application/json" };
    return _e.authToken && (je["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: _e.force || !1 })
    });
  }
  async function xt(W, _e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: _e })
    });
  }
  async function ss(W) {
    const _e = {
      success: 0,
      failed: []
    };
    for (const je of W)
      try {
        await Y(je), _e.success++;
      } catch (ft) {
        _e.failed.push({
          name: je,
          error: ft instanceof Error ? ft.message : "Unknown error"
        });
      }
    return _e;
  }
  async function Is(W) {
    var ft;
    const _e = new FormData();
    if (_e.append("file", W), !((ft = window.app) != null && ft.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: _e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!je.ok) {
      const Nt = await je.json().catch(() => ({}));
      throw new Error(Nt.error || `Preview failed: ${je.status}`);
    }
    return je.json();
  }
  async function Js(W) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(W)}`
    );
  }
  async function ua(W, _e, je, ft) {
    var Ze;
    const Nt = new FormData();
    if (Nt.append("file", W), Nt.append("name", _e), Nt.append("model_strategy", je), Nt.append("torch_backend", ft), !((Ze = window.app) != null && Ze.api))
      throw new Error("ComfyUI API not available");
    const jt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Nt
    });
    if (!jt.ok) {
      const gs = await jt.json().catch(() => ({}));
      throw new Error(gs.message || gs.error || `Import failed: ${jt.status}`);
    }
    return jt.json();
  }
  async function da() {
    return o("/v2/workspace/import/status");
  }
  async function zs(W) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: W })
    });
  }
  async function fa(W, _e, je, ft) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: W,
        name: _e,
        model_strategy: je,
        torch_backend: ft
      })
    });
  }
  async function co() {
    return o("/v2/setup/status");
  }
  async function uo() {
    return o("/v2/comfygit/update-check");
  }
  async function ma() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function Es(W) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function va() {
    return o("/v2/setup/initialize_status");
  }
  async function Lo(W) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function pa() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ga() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ha(W, _e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: W, save_key: _e })
    });
  }
  async function ya() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function gn(W) {
    const _e = W ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(W)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(_e);
  }
  async function wa(W) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function _a() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ka(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function ba(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/stop`, {
      method: "POST"
    });
  }
  async function $a(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/start`, {
      method: "POST"
    });
  }
  async function Ca(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/status`);
  }
  async function xa(W) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W })
    });
  }
  async function Sa(W = !1) {
    return o(W ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function hn() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ia() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ea(W) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function yn(W) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function ne(W) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function q() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function qe(W) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/info`);
  }
  async function Qe(W) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances`);
  }
  async function lt(W, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function pt(W, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(_e)}/start`, {
      method: "POST"
    });
  }
  async function Dt(W, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(_e)}/stop`, {
      method: "POST"
    });
  }
  async function os(W, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(_e)}`, {
      method: "DELETE"
    });
  }
  async function Do(W) {
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
    exportEnv: k,
    validateExport: $,
    validateDeploy: S,
    exportEnvWithForce: T,
    validateEnvironmentExport: P,
    exportEnvironmentWithForce: R,
    // Git Operations
    getBranches: U,
    getCommitDetail: A,
    checkout: z,
    createBranch: E,
    switchBranch: H,
    deleteBranch: ae,
    // Environment Management
    listEnvironments: de,
    getEnvironments: ce,
    getEnvironmentDetails: ke,
    switchEnvironment: Q,
    getSwitchProgress: G,
    createEnvironment: J,
    getCreateProgress: Le,
    getComfyUIReleases: Z,
    deleteEnvironment: ye,
    // Workflow Management
    getWorkflows: O,
    getWorkflowDetails: me,
    getWorkflowContract: Re,
    saveWorkflowContract: ve,
    deleteWorkflowContract: ee,
    resolveWorkflow: Y,
    installWorkflowDeps: we,
    setModelImportance: te,
    // Model Management
    getEnvironmentModels: oe,
    getWorkspaceModels: Me,
    getModelDetails: fe,
    getModelSourceCandidates: le,
    getWorkflowSourceCandidates: I,
    openFileLocation: V,
    addModelSource: ie,
    removeModelSource: Ie,
    deleteModel: $e,
    downloadModel: Se,
    scanWorkspaceModels: Ae,
    getModelsDirectory: Fe,
    setModelsDirectory: De,
    getHuggingFaceRepoInfo: Ee,
    getModelsSubdirectories: Ke,
    searchHuggingFaceRepos: Be,
    // Settings
    getConfig: pe,
    updateConfig: K,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: m,
    publishCurrentEnvironmentToCloud: v,
    // Debug/Logs
    getEnvironmentLogs: He,
    getEnvironmentManifest: ot,
    getWorkspaceLogs: Ce,
    getEnvironmentLogPath: Ye,
    getWorkspaceLogPath: ze,
    getOrchestratorLogs: N,
    getOrchestratorLogPath: se,
    openFile: ge,
    // Node Management
    getNodes: Je,
    trackNodeAsDev: D,
    installNode: F,
    queueNodeInstall: X,
    updateNode: Oe,
    updateNodeCriticality: Ue,
    uninstallNode: Pe,
    // Git Remotes
    getRemotes: Ge,
    addRemote: nt,
    removeRemote: kt,
    updateRemoteUrl: Et,
    fetchRemote: re,
    getRemoteSyncStatus: B,
    // Push/Pull
    getPullPreview: We,
    pullFromRemote: dt,
    getPushPreview: Ct,
    pushToRemote: it,
    validateMerge: xt,
    // Environment Sync
    syncEnvironmentManually: ue,
    // Workflow Repair
    repairWorkflowModels: ss,
    // Import Operations
    previewTarballImport: Is,
    previewGitImport: zs,
    validateEnvironmentName: Js,
    executeImport: ua,
    executeGitImport: fa,
    getImportProgress: da,
    // First-Time Setup
    getSetupStatus: co,
    // Manager Update Notice
    getUpdateCheck: uo,
    updateManager: ma,
    initializeWorkspace: Es,
    getInitializeProgress: va,
    validatePath: Lo,
    // Deploy Operations
    getDeploySummary: pa,
    getDataCenters: ga,
    testRunPodConnection: ha,
    getNetworkVolumes: ya,
    getRunPodGpuTypes: gn,
    deployToRunPod: wa,
    getRunPodPods: _a,
    terminateRunPodPod: ka,
    stopRunPodPod: ba,
    startRunPodPod: $a,
    getDeploymentStatus: Ca,
    exportDeployPackage: xa,
    getStoredRunPodKey: Sa,
    clearRunPodKey: hn,
    // Custom Worker Operations
    getCustomWorkers: Ia,
    addCustomWorker: Ea,
    removeCustomWorker: yn,
    testWorkerConnection: ne,
    scanForWorkers: q,
    getWorkerSystemInfo: qe,
    getWorkerInstances: Qe,
    deployToWorker: lt,
    startWorkerInstance: pt,
    stopWorkerInstance: Dt,
    terminateWorkerInstance: os,
    // Git Authentication
    testGitAuth: Do
  };
}
async function xn(e, t) {
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
function Hv() {
  async function e() {
    try {
      return await xn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await xn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await xn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await xn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: a
  };
}
const qv = { class: "base-modal-header" }, Kv = {
  key: 0,
  class: "base-modal-title"
}, Jv = { class: "base-modal-body" }, Qv = {
  key: 0,
  class: "base-modal-loading"
}, Yv = {
  key: 1,
  class: "base-modal-error"
}, Xv = {
  key: 0,
  class: "base-modal-footer"
}, Zv = /* @__PURE__ */ be({
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
    return at(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Mo(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), L(Lt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Ve(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", qv, [
            st(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Kv, f(e.title), 1)) : y("", !0)
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
          s("div", Jv, [
            e.loading ? (n(), i("div", Qv, "Loading...")) : e.error ? (n(), i("div", Yv, f(e.error), 1)) : st(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Xv, [
            st(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), It = /* @__PURE__ */ xe(Zv, [["__scopeId", "data-v-06a4be14"]]), ep = ["type", "disabled"], tp = {
  key: 0,
  class: "spinner"
}, sp = /* @__PURE__ */ be({
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
      e.loading ? (n(), i("span", tp)) : y("", !0),
      st(t.$slots, "default", {}, void 0)
    ], 10, ep));
  }
}), Ne = /* @__PURE__ */ xe(sp, [["__scopeId", "data-v-f3452606"]]), op = {
  key: 0,
  class: "base-title-count"
}, np = /* @__PURE__ */ be({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (n(), L(_l(`h${e.level}`), {
      class: Ve(["base-title", e.variant])
    }, {
      default: h(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", op, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), no = /* @__PURE__ */ xe(np, [["__scopeId", "data-v-5a01561d"]]), ap = ["value", "disabled"], lp = {
  key: 0,
  value: "",
  disabled: ""
}, ip = ["value"], rp = {
  key: 0,
  class: "base-select-error"
}, cp = /* @__PURE__ */ be({
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
        e.placeholder ? (n(), i("option", lp, f(e.placeholder), 1)) : y("", !0),
        (n(!0), i(j, null, he(e.options, (r) => (n(), i("option", {
          key: t(r),
          value: t(r)
        }, f(o(r)), 9, ip))), 128))
      ], 42, ap),
      e.error ? (n(), i("span", rp, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Dn = /* @__PURE__ */ xe(cp, [["__scopeId", "data-v-4996bfe0"]]), up = { class: "popover-header" }, dp = { class: "popover-title" }, fp = { class: "popover-content" }, mp = {
  key: 0,
  class: "popover-actions"
}, vp = /* @__PURE__ */ be({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (n(), L(Lt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Rt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", up, [
            s("h4", dp, f(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", fp, [
            st(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (n(), i("div", mp, [
            st(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), Xt = /* @__PURE__ */ xe(vp, [["__scopeId", "data-v-7c1f5547"]]), pp = { class: "detail-section" }, gp = {
  key: 0,
  class: "empty-message"
}, hp = { class: "model-header" }, yp = { class: "model-name" }, wp = { class: "model-details" }, _p = { class: "model-row" }, kp = { class: "model-row" }, bp = { class: "label" }, $p = {
  key: 0,
  class: "model-row model-row-nodes"
}, Cp = { class: "node-list" }, xp = ["onClick"], Sp = {
  key: 1,
  class: "model-row"
}, Ip = { class: "value" }, Ep = {
  key: 2,
  class: "model-row"
}, Tp = { class: "value error" }, Mp = {
  key: 0,
  class: "model-actions"
}, Pp = { class: "detail-section" }, Rp = {
  key: 0,
  class: "empty-message"
}, Lp = { class: "node-content" }, Dp = { class: "node-main" }, Np = { class: "node-name" }, Op = { class: "node-badge" }, Up = {
  key: 0,
  class: "node-version"
}, Ap = ["onClick"], zp = {
  key: 2,
  class: "node-install-queued"
}, Fp = {
  key: 0,
  class: "node-guidance"
}, Vp = /* @__PURE__ */ be({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ct(), d = b(null), m = b(!1), v = b(null), p = b(!1), w = b({}), g = b(!1), _ = b(/* @__PURE__ */ new Set()), k = b(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(Q) {
      switch (Q) {
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
    function T(Q) {
      switch (Q) {
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
    function P(Q) {
      switch (Q) {
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
    function R(Q) {
      switch (Q) {
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
    function U(Q) {
      switch (Q) {
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
    function A(Q) {
      if (!Q.loaded_by || Q.loaded_by.length === 0) return [];
      const G = Q.hash || Q.filename;
      return _.value.has(G) ? Q.loaded_by : Q.loaded_by.slice(0, 3);
    }
    function z(Q) {
      return _.value.has(Q);
    }
    function E(Q) {
      _.value.has(Q) ? _.value.delete(Q) : _.value.add(Q), _.value = new Set(_.value);
    }
    async function H() {
      m.value = !0, v.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (Q) {
        v.value = Q instanceof Error ? Q.message : "Failed to load workflow details";
      } finally {
        m.value = !1;
      }
    }
    function ae(Q, G) {
      w.value[Q] = G, p.value = !0;
    }
    async function de(Q) {
      try {
        await c(Q);
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to open file location";
      }
    }
    async function ce(Q) {
      if (Q.package_id)
        try {
          const G = Q.latest_version || "latest";
          await u({
            id: Q.package_id,
            version: G,
            selected_version: G,
            mode: "remote",
            channel: "default"
          }), k.value.add(Q.package_id);
        } catch (G) {
          v.value = G instanceof Error ? G.message : "Failed to queue node install";
        }
    }
    async function ke() {
      if (!p.value) {
        a("close");
        return;
      }
      m.value = !0, v.value = null;
      try {
        for (const [Q, G] of Object.entries(w.value))
          await r(o.workflowName, Q, G);
        a("refresh"), a("close");
      } catch (Q) {
        v.value = Q instanceof Error ? Q.message : "Failed to save changes";
      } finally {
        m.value = !1;
      }
    }
    return at(H), (Q, G) => (n(), i(j, null, [
      C(It, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: m.value,
        error: v.value || void 0,
        onClose: G[4] || (G[4] = (J) => a("close"))
      }, {
        body: h(() => [
          d.value ? (n(), i(j, { key: 0 }, [
            s("section", pp, [
              C(no, { variant: "section" }, {
                default: h(() => [
                  x("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", gp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(j, null, he(d.value.models, (J) => {
                var Le;
                return n(), i("div", {
                  key: J.hash || J.filename,
                  class: "model-card"
                }, [
                  s("div", hp, [
                    G[6] || (G[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", yp, f(J.filename), 1)
                  ]),
                  s("div", wp, [
                    s("div", _p, [
                      G[7] || (G[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ve(["value", S(J.status)])
                      }, f(T(J.status)), 3)
                    ]),
                    s("div", kp, [
                      s("span", bp, [
                        G[8] || (G[8] = x(" Importance: ", -1)),
                        C(Sl, {
                          size: 14,
                          title: "About importance levels",
                          onClick: G[0] || (G[0] = (Z) => g.value = !0)
                        })
                      ]),
                      C(Dn, {
                        "model-value": w.value[J.filename] || J.importance,
                        options: $,
                        "onUpdate:modelValue": (Z) => ae(J.filename, Z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    J.loaded_by && J.loaded_by.length > 0 ? (n(), i("div", $p, [
                      G[9] || (G[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", Cp, [
                        (n(!0), i(j, null, he(A(J), (Z, ye) => (n(), i("div", {
                          key: `${Z.node_id}-${ye}`,
                          class: "node-reference"
                        }, f(Z.node_type) + " (Node #" + f(Z.node_id) + ") ", 1))), 128)),
                        J.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Z) => E(J.hash || J.filename)
                        }, f(z(J.hash || J.filename) ? "▼ Show less" : `▶ View all (${J.loaded_by.length})`), 9, xp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    J.size_mb ? (n(), i("div", Sp, [
                      G[10] || (G[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", Ip, f(J.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    J.has_category_mismatch ? (n(), i("div", Ep, [
                      G[13] || (G[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", Tp, [
                        G[11] || (G[11] = x(" In ", -1)),
                        s("code", null, f(J.actual_category) + "/", 1),
                        G[12] || (G[12] = x(" but loader needs ", -1)),
                        s("code", null, f((Le = J.expected_categories) == null ? void 0 : Le[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  J.status !== "available" ? (n(), i("div", Mp, [
                    J.status === "downloadable" ? (n(), L(Ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: G[1] || (G[1] = (Z) => a("resolve"))
                    }, {
                      default: h(() => [...G[14] || (G[14] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : J.status === "category_mismatch" && J.file_path ? (n(), L(Ne, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => de(J.file_path)
                    }, {
                      default: h(() => [...G[15] || (G[15] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : J.status !== "path_mismatch" ? (n(), L(Ne, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: G[2] || (G[2] = (Z) => a("resolve"))
                    }, {
                      default: h(() => [...G[16] || (G[16] = [
                        x(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", Pp, [
              C(no, { variant: "section" }, {
                default: h(() => [
                  x("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", Rp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(j, null, he(d.value.nodes, (J, Le) => (n(), i("div", {
                key: `${J.name}-${J.status}-${Le}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Ve(["node-status", P(J.status)])
                }, f(R(J.status)), 3),
                s("div", Lp, [
                  s("div", Dp, [
                    s("span", Np, f(J.name), 1),
                    s("span", Op, f(U(J.status)), 1),
                    J.version ? (n(), i("span", Up, "v" + f(J.version), 1)) : y("", !0),
                    J.status === "uninstallable" && J.package_id && !k.value.has(J.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (Z) => ce(J)
                    }, " Install ", 8, Ap)) : J.status === "uninstallable" && J.package_id && k.value.has(J.package_id) ? (n(), i("span", zp, " Queued ")) : y("", !0)
                  ]),
                  J.guidance ? (n(), i("div", Fp, f(J.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          C(Ne, {
            variant: "secondary",
            onClick: G[3] || (G[3] = (J) => a("close"))
          }, {
            default: h(() => [...G[17] || (G[17] = [
              x(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), L(Ne, {
            key: 0,
            variant: "primary",
            onClick: ke
          }, {
            default: h(() => [...G[18] || (G[18] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(Xt, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: G[5] || (G[5] = (J) => g.value = !1)
      }, {
        content: h(() => [...G[19] || (G[19] = [
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
}), Bp = /* @__PURE__ */ xe(Vp, [["__scopeId", "data-v-543076d9"]]), rt = ro({
  items: [],
  status: "idle"
});
let ks = null;
function ec() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Va(e) {
  return rt.items.find((t) => t.id === e);
}
async function go() {
  if (rt.status === "downloading") return;
  const e = rt.items.find((t) => t.status === "queued");
  if (!e) {
    rt.status = "idle";
    return;
  }
  rt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Wp(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", go();
  }
}
async function Wp(e) {
  return new Promise((t, o) => {
    ks && (ks.close(), ks = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ks = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const m = 2e3, v = window.setInterval(() => {
      d || Date.now() - u > m && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(v);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, u = Date.now();
            const _ = u, k = (_ - r) / 1e3, $ = e.downloaded - c;
            if ($ > 0 && k > 0)
              if (e.speed = $ / k, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
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
async function Gp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: ec(),
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
function Ro() {
  function e($) {
    for (const S of $) {
      if (rt.items.some(
        (R) => R.url === S.url && R.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const P = {
        id: ec(),
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
      rt.items.push(P);
    }
    rt.status === "idle" && go();
  }
  async function t($) {
    const S = Va($);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ks && (ks.close(), ks = null), S.status = "failed", S.error = "Cancelled by user", rt.status = "idle", go();
      } else if (S.status === "queued") {
        const T = rt.items.findIndex((P) => P.id === $);
        T >= 0 && rt.items.splice(T, 1);
      }
    }
  }
  function o($) {
    const S = Va($);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, rt.status === "idle" && go());
  }
  function a($) {
    const S = Va($);
    !S || S.status !== "paused" || (S.status = "queued", rt.status === "idle" && go());
  }
  function l() {
    const $ = rt.items.filter((S) => S.status === "paused");
    for (const S of $)
      S.status = "queued";
    rt.status === "idle" && go();
  }
  function r($) {
    const S = rt.items.findIndex((T) => T.id === $);
    S >= 0 && ["completed", "failed", "paused"].includes(rt.items[S].status) && rt.items.splice(S, 1);
  }
  function c() {
    rt.items = rt.items.filter(($) => $.status !== "completed");
  }
  function u() {
    rt.items = rt.items.filter(($) => $.status !== "failed");
  }
  const d = M(
    () => rt.items.find(($) => $.status === "downloading")
  ), m = M(
    () => rt.items.filter(($) => $.status === "queued")
  ), v = M(
    () => rt.items.filter(($) => $.status === "completed")
  ), p = M(
    () => rt.items.filter(($) => $.status === "failed")
  ), w = M(
    () => rt.items.filter(($) => $.status === "paused")
  ), g = M(() => rt.items.length > 0), _ = M(
    () => rt.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), k = M(
    () => rt.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: On(rt),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: _,
    hasPaused: k,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Gp
  };
}
function tc() {
  const e = b(null), t = b(null), o = b([]), a = b([]), l = b(!1), r = b(null);
  async function c(T, P) {
    var U;
    if (!((U = window.app) != null && U.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(T, P);
    if (!R.ok) {
      const A = await R.json().catch(() => ({})), z = A.error || A.message || `Request failed: ${R.status}`;
      throw new Error(z);
    }
    return R.json();
  }
  async function u(T) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Uo() || (P = await c(
        `/v2/comfygit/workflow/${T}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), P.nodes.version_gated = P.nodes.version_gated || [], P.nodes.uninstallable = P.nodes.uninstallable || [], P.node_guidance = P.node_guidance || {}, P.package_aliases = P.package_aliases || {}, e.value = P, P;
    } catch (P) {
      const R = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = R, P;
    } finally {
      l.value = !1;
    }
  }
  async function d(T, P, R, U) {
    l.value = !0, r.value = null;
    try {
      let A;
      if (!Uo()) {
        const z = Object.fromEntries(P), E = Object.fromEntries(R), H = U ? Array.from(U) : [];
        A = await c(
          `/v2/comfygit/workflow/${T}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: z,
              model_choices: E,
              skipped_packages: H
            })
          }
        );
      }
      return t.value = A, A;
    } catch (A) {
      const z = A instanceof Error ? A.message : "Unknown error occurred";
      throw r.value = z, A;
    } finally {
      l.value = !1;
    }
  }
  async function m(T, P = 10) {
    l.value = !0, r.value = null;
    try {
      let R;
      return Uo() || (R = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: P })
        }
      )), o.value = R.results, R.results;
    } catch (R) {
      const U = R instanceof Error ? R.message : "Unknown error occurred";
      throw r.value = U, R;
    } finally {
      l.value = !1;
    }
  }
  async function v(T, P = 10) {
    l.value = !0, r.value = null;
    try {
      let R;
      return Uo() || (R = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: P })
        }
      )), a.value = R.results, R.results;
    } catch (R) {
      const U = R instanceof Error ? R.message : "Unknown error occurred";
      throw r.value = U, R;
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
      return Uo(), await _(T);
    } catch (P) {
      const R = P instanceof Error ? P.message : "Failed to install nodes";
      throw p.installError = R, P;
    }
  }
  async function _(T) {
    var R;
    const P = await c(
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
      const U = new Map(((R = P.failed) == null ? void 0 : R.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < p.nodesToInstall.length; A++) {
        const z = p.nodesToInstall[A], E = U.get(z);
        p.nodeInstallProgress.completedNodes.push({
          node_id: z,
          success: !E,
          error: E
        });
      }
    }
    return p.nodesInstalled = P.nodes_installed, p.needsRestart = P.nodes_installed.length > 0, P.failed && P.failed.length > 0 && (p.installError = `${P.failed.length} package(s) failed to install`), P;
  }
  async function k(T, P, R) {
    w(), p.phase = "resolving", r.value = null;
    const U = Object.fromEntries(P), A = Object.fromEntries(R);
    try {
      const z = await fetch(`/v2/comfygit/workflow/${T}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: U,
          model_choices: A
        })
      });
      if (!z.ok)
        throw new Error(`Request failed: ${z.status}`);
      if (!z.body)
        throw new Error("No response body");
      const E = z.body.getReader(), H = new TextDecoder();
      let ae = "";
      for (; ; ) {
        const { done: de, value: ce } = await E.read();
        if (de) break;
        ae += H.decode(ce, { stream: !0 });
        const ke = ae.split(`

`);
        ae = ke.pop() || "";
        for (const Q of ke) {
          if (!Q.trim()) continue;
          const G = Q.split(`
`);
          let J = "", Le = "";
          for (const Z of G)
            Z.startsWith("event: ") ? J = Z.slice(7) : Z.startsWith("data: ") && (Le = Z.slice(6));
          if (Le)
            try {
              const Z = JSON.parse(Le);
              $(J, Z);
            } catch (Z) {
              console.warn("Failed to parse SSE event:", Z);
            }
        }
      }
    } catch (z) {
      const E = z instanceof Error ? z.message : "Unknown error occurred";
      throw r.value = E, p.error = E, p.phase = "error", z;
    }
  }
  function $(T, P) {
    switch (T) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = P.total;
        break;
      case "file_start":
        p.currentFile = P.filename, p.currentFileIndex = P.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = P.downloaded, p.bytesTotal = P.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: P.filename,
          success: P.success,
          error: P.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = P.nodes_to_install || [], P.download_results && (p.completedFiles = P.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = P.message, p.phase = "error", r.value = P.message;
        break;
    }
  }
  function S(T, P) {
    const { addToQueue: R } = Ro(), U = P.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: T,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return U.length > 0 && R(U), U.length;
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
    applyResolutionWithProgress: k,
    installNodes: g,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const jp = { class: "resolution-stepper" }, Hp = { class: "stepper-header" }, qp = ["onClick"], Kp = {
  key: 0,
  class: "step-icon"
}, Jp = {
  key: 1,
  class: "step-number"
}, Qp = { class: "step-label" }, Yp = {
  key: 0,
  class: "step-connector"
}, Xp = { class: "stepper-content" }, Zp = /* @__PURE__ */ be({
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
    function c(m) {
      return l(m) ? "state-complete" : r(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function d(m) {
      a("step-change", m);
    }
    return (m, v) => (n(), i("div", jp, [
      s("div", Hp, [
        (n(!0), i(j, null, he(e.steps, (p, w) => (n(), i("div", {
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
            l(p.id) ? (n(), i("span", Kp, "✓")) : (n(), i("span", Jp, f(w + 1), 1))
          ], 2),
          s("div", Qp, f(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Yp)) : y("", !0)
        ], 10, qp))), 128))
      ]),
      s("div", Xp, [
        st(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), eg = /* @__PURE__ */ xe(Zp, [["__scopeId", "data-v-2a7b3af8"]]), tg = /* @__PURE__ */ be({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = M(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = M(() => `confidence-${o.value}`), l = M(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Ve(["confidence-badge", a.value, e.size])
    }, f(l.value), 3));
  }
}), Hn = /* @__PURE__ */ xe(tg, [["__scopeId", "data-v-17ec4b80"]]), sg = { class: "node-info" }, og = { class: "node-info-text" }, ng = { class: "item-body" }, ag = {
  key: 0,
  class: "resolved-state"
}, lg = {
  key: 1,
  class: "multiple-options"
}, ig = {
  key: 0,
  class: "installed-packs-section"
}, rg = { class: "installed-packs-list" }, cg = ["onClick"], ug = { class: "installed-pack-name" }, dg = { class: "installed-pack-source" }, fg = { class: "options-list" }, mg = ["onClick"], vg = ["name", "value", "checked", "onChange"], pg = { class: "option-content" }, gg = { class: "option-header" }, hg = { class: "option-package-id" }, yg = {
  key: 0,
  class: "option-title"
}, wg = { class: "option-meta" }, _g = {
  key: 0,
  class: "installed-badge"
}, kg = { class: "action-buttons" }, bg = {
  key: 2,
  class: "unresolved"
}, $g = {
  key: 0,
  class: "installed-packs-section"
}, Cg = { class: "installed-packs-list" }, xg = ["onClick"], Sg = { class: "installed-pack-name" }, Ig = { class: "installed-pack-source" }, Eg = {
  key: 1,
  class: "searching-state"
}, Tg = { class: "options-list" }, Mg = ["onClick"], Pg = ["name", "value"], Rg = { class: "option-content" }, Lg = { class: "option-header" }, Dg = { class: "option-package-id" }, Ng = {
  key: 0,
  class: "option-description"
}, Og = { class: "option-meta" }, Ug = {
  key: 0,
  class: "installed-badge"
}, Ag = {
  key: 3,
  class: "unresolved-message"
}, zg = { class: "action-buttons" }, Fg = /* @__PURE__ */ be({
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
    const r = M(() => !!o.choice);
    M(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), M(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
    });
    const c = M(() => o.installedNodePacks || []), u = M(() => {
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
      s("div", sg, [
        s("span", og, [
          p[7] || (p[7] = x("Node type: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ve(["status-badge", u.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", ng, [
        r.value ? (n(), i("div", ag, [
          C(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[8] || (p[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", lg, [
          c.value.length > 0 ? (n(), i("div", ig, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", rg, [
              (n(!0), i(j, null, he(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", ug, f(w.package_id), 1),
                s("span", dg, f(m(w.source)), 1)
              ], 8, cg))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", fg, [
            (n(!0), i(j, null, he(e.options, (w, g) => (n(), i("label", {
              key: w.package_id,
              class: Ve(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (_) => d(g)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (_) => d(g)
              }, null, 40, vg),
              s("div", pg, [
                s("div", gg, [
                  s("span", hg, f(w.package_id), 1),
                  C(Hn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (n(), i("div", yg, f(w.title), 1)) : y("", !0),
                s("div", wg, [
                  w.is_installed ? (n(), i("span", _g, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, mg))), 128))
          ]),
          s("div", kg, [
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[10] || (p[10] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[11] || (p[11] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...p[12] || (p[12] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", bg, [
          c.value.length > 0 ? (n(), i("div", $g, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", Cg, [
              (n(!0), i(j, null, he(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", Sg, f(w.package_id), 1),
                s("span", Ig, f(m(w.source)), 1)
              ], 8, xg))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", Eg, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(j, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", Tg, [
              (n(!0), i(j, null, he(e.searchResults.slice(0, 5), (w, g) => (n(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => a("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Pg),
                s("div", Rg, [
                  s("div", Lg, [
                    s("span", Dg, f(w.package_id), 1),
                    C(Hn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (n(), i("div", Ng, f(l(w.description)), 1)) : y("", !0),
                  s("div", Og, [
                    w.is_installed ? (n(), i("span", Ug, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Mg))), 128))
            ])
          ], 64)) : (n(), i("div", Ag, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", zg, [
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => a("search"))
            }, {
              default: h(() => {
                var w;
                return [
                  x(f((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[18] || (p[18] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...p[19] || (p[19] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Vg = /* @__PURE__ */ xe(Fg, [["__scopeId", "data-v-fb0bbf03"]]), Bg = { class: "item-navigator" }, Wg = { class: "nav-item-info" }, Gg = ["title"], jg = { class: "nav-controls" }, Hg = { class: "nav-arrows" }, qg = ["disabled"], Kg = ["disabled"], Jg = { class: "nav-position" }, Qg = /* @__PURE__ */ be({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", Bg, [
      s("div", Wg, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Gg)
      ]),
      s("div", jg, [
        s("div", Hg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, qg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Kg)
        ]),
        s("span", Jg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), sc = /* @__PURE__ */ xe(Qg, [["__scopeId", "data-v-74af7920"]]), Yg = ["type", "value", "placeholder", "disabled"], Xg = {
  key: 0,
  class: "base-input-error"
}, Zg = /* @__PURE__ */ be({
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
      }, null, 42, Yg),
      e.error ? (n(), i("span", Xg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ xe(Zg, [["__scopeId", "data-v-9ba02cdc"]]), eh = { class: "node-resolution-step" }, th = {
  key: 0,
  class: "auto-resolved-section"
}, sh = { class: "section-header" }, oh = { class: "stat-badge" }, nh = { class: "resolved-packages-list" }, ah = { class: "package-info" }, lh = { class: "package-id" }, ih = { class: "node-count" }, rh = { class: "package-actions" }, ch = {
  key: 0,
  class: "status-badge install"
}, uh = {
  key: 1,
  class: "status-badge skip"
}, dh = ["onClick"], fh = {
  key: 1,
  class: "section-divider"
}, mh = { class: "step-header" }, vh = { class: "stat-badge" }, ph = {
  key: 1,
  class: "step-body"
}, gh = {
  key: 3,
  class: "empty-state"
}, hh = { class: "node-modal-body" }, yh = { class: "node-search-results-container" }, wh = {
  key: 0,
  class: "node-search-results"
}, _h = ["onClick"], kh = { class: "node-result-header" }, bh = { class: "node-result-package-id" }, $h = {
  key: 0,
  class: "node-result-description"
}, Ch = {
  key: 1,
  class: "node-empty-state"
}, xh = {
  key: 2,
  class: "node-empty-state"
}, Sh = {
  key: 3,
  class: "node-empty-state"
}, Ih = { class: "node-manual-entry-modal" }, Eh = { class: "node-modal-body" }, Th = { class: "node-modal-actions" }, Mh = /* @__PURE__ */ be({
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
    const o = e, a = t, { searchNodes: l } = tc(), r = b(0), c = b(!1), u = b(!1), d = b(""), m = b(""), v = b([]), p = b(!1), w = b(/* @__PURE__ */ new Map()), g = b(/* @__PURE__ */ new Set()), _ = b(!1);
    function k() {
      _.value && ye(), _.value = !1;
    }
    const $ = M(() => o.nodes[r.value]), S = M(() => o.nodes.filter((te) => o.nodeChoices.has(te.node_type)).length), T = M(() => $.value ? w.value.get($.value.node_type) || [] : []), P = M(() => $.value ? g.value.has($.value.node_type) : !1);
    wt($, async (te) => {
      var oe;
      te && ((oe = te.options) != null && oe.length || w.value.has(te.node_type) || g.value.has(te.node_type) || o.nodeChoices.has(te.node_type) || await R(te.node_type));
    }, { immediate: !0 });
    async function R(te) {
      g.value.add(te);
      try {
        const oe = await l(te, 5);
        w.value.set(te, oe);
      } catch {
        w.value.set(te, []);
      } finally {
        g.value.delete(te);
      }
    }
    const U = M(() => o.autoResolvedPackages.filter((te) => !o.skippedPackages.has(te.package_id)).length);
    function A(te) {
      return o.skippedPackages.has(te);
    }
    function z(te) {
      a("package-skip", te);
    }
    const E = M(() => {
      var oe;
      if (!$.value) return "not-found";
      const te = o.nodeChoices.get($.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (oe = $.value.options) != null && oe.length ? "ambiguous" : "not-found";
    }), H = M(() => {
      var oe;
      if (!$.value) return;
      const te = o.nodeChoices.get($.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return te.package_id ? `→ ${te.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (oe = $.value.options) != null && oe.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function ae(te) {
      te >= 0 && te < o.nodes.length && (r.value = te);
    }
    function de() {
      var te;
      for (let oe = r.value + 1; oe < o.nodes.length; oe++) {
        const Me = o.nodes[oe];
        if (!((te = o.nodeChoices) != null && te.has(Me.node_type))) {
          ae(oe);
          return;
        }
      }
    }
    function ce() {
      $.value && (a("mark-optional", $.value.node_type), Pt(() => de()));
    }
    function ke() {
      $.value && (a("skip", $.value.node_type), Pt(() => de()));
    }
    function Q(te) {
      $.value && (a("option-selected", $.value.node_type, te), Pt(() => de()));
    }
    function G() {
      $.value && a("clear-choice", $.value.node_type);
    }
    function J() {
      $.value && (d.value = $.value.node_type, v.value = T.value, c.value = !0, ve(d.value));
    }
    function Le() {
      m.value = "", u.value = !0;
    }
    function Z(te) {
      $.value && (a("manual-entry", $.value.node_type, te), Pt(() => de()));
    }
    function ye() {
      c.value = !1, d.value = "", v.value = [];
    }
    function O() {
      u.value = !1, m.value = "";
    }
    let me = null;
    function Re() {
      me && clearTimeout(me), me = setTimeout(() => {
        ve(d.value);
      }, 300);
    }
    async function ve(te) {
      if (!te.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(te, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function ee(te) {
      $.value && (a("manual-entry", $.value.node_type, te.package_id), ye(), Pt(() => de()));
    }
    function Y(te) {
      $.value && (a("manual-entry", $.value.node_type, te.package_id), Pt(() => de()));
    }
    function we() {
      !$.value || !m.value.trim() || (a("manual-entry", $.value.node_type, m.value.trim()), O(), Pt(() => de()));
    }
    return (te, oe) => {
      var Me, fe;
      return n(), i("div", eh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", th, [
          s("div", sh, [
            oe[6] || (oe[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", oh, f(U.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", nh, [
            (n(!0), i(j, null, he(e.autoResolvedPackages, (le) => (n(), i("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", ah, [
                s("code", lh, f(le.package_id), 1),
                s("span", ih, f(le.node_types_count) + " node type" + f(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", rh, [
                A(le.package_id) ? (n(), i("span", uh, " SKIPPED ")) : (n(), i("span", ch, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (I) => z(le.package_id)
                }, f(A(le.package_id) ? "Include" : "Skip"), 9, dh)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", fh)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(j, { key: 2 }, [
          s("div", mh, [
            oe[7] || (oe[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", vh, f(S.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (n(), L(sc, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: oe[0] || (oe[0] = (le) => ae(r.value - 1)),
            onNext: oe[1] || (oe[1] = (le) => ae(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (n(), i("div", ph, [
            C(Vg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Me = $.value.options) != null && Me.length),
              options: $.value.options,
              choice: (fe = e.nodeChoices) == null ? void 0 : fe.get($.value.node_type),
              status: E.value,
              "status-label": H.value,
              "search-results": T.value,
              "is-searching": P.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ce,
              onSkip: ke,
              onManualEntry: Le,
              onSearch: J,
              onOptionSelected: Q,
              onClearChoice: G,
              onSearchResultSelected: Y,
              onInstalledPackSelected: Z
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", gh, [...oe[8] || (oe[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), L(Lt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: oe[4] || (oe[4] = vt((le) => _.value = !0, ["self"])),
            onMouseup: vt(k, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: oe[3] || (oe[3] = (le) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                oe[9] || (oe[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ye
                }, "✕")
              ]),
              s("div", hh, [
                C(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Re
                }, null, 8, ["modelValue"]),
                s("div", yh, [
                  v.value.length > 0 ? (n(), i("div", wh, [
                    (n(!0), i(j, null, he(v.value, (le) => (n(), i("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (I) => ee(le)
                    }, [
                      s("div", kh, [
                        s("code", bh, f(le.package_id), 1),
                        le.match_confidence ? (n(), L(Hn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (n(), i("div", $h, f(le.description), 1)) : y("", !0)
                    ], 8, _h))), 128))
                  ])) : p.value ? (n(), i("div", Ch, "Searching...")) : d.value ? (n(), i("div", xh, 'No packages found matching "' + f(d.value) + '"', 1)) : (n(), i("div", Sh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), L(Lt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: vt(O, ["self"])
          }, [
            s("div", Ih, [
              s("div", { class: "node-modal-header" }, [
                oe[10] || (oe[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              s("div", Eh, [
                C(bt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": oe[5] || (oe[5] = (le) => m.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", Th, [
                  C(Ne, {
                    variant: "secondary",
                    onClick: O
                  }, {
                    default: h(() => [...oe[11] || (oe[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Ne, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: we
                  }, {
                    default: h(() => [...oe[12] || (oe[12] = [
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
}), Ph = /* @__PURE__ */ xe(Mh, [["__scopeId", "data-v-94c6a438"]]), Rh = { class: "node-info" }, Lh = { class: "node-info-text" }, Dh = { class: "item-body" }, Nh = {
  key: 0,
  class: "resolved-state"
}, Oh = {
  key: 1,
  class: "multiple-options"
}, Uh = { class: "options-list" }, Ah = ["onClick"], zh = ["name", "value", "checked", "onChange"], Fh = { class: "option-content" }, Vh = { class: "option-header" }, Bh = { class: "option-filename" }, Wh = { class: "option-meta" }, Gh = { class: "option-size" }, jh = { class: "option-category" }, Hh = { class: "option-path" }, qh = { class: "action-buttons" }, Kh = {
  key: 2,
  class: "unresolved"
}, Jh = { class: "action-buttons" }, Qh = /* @__PURE__ */ be({
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
    const o = e, a = t, l = M(() => !!o.choice);
    M(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), M(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const r = M(() => {
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
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (n(), i("div", {
      class: Ve(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", Rh, [
        s("span", Lh, [
          m[7] || (m[7] = x("Used by: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ve(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Dh, [
        l.value ? (n(), i("div", Nh, [
          C(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Oh, [
          m[12] || (m[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", Uh, [
            (n(!0), i(j, null, he(e.options, (v, p) => (n(), i("label", {
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
              }, null, 40, zh),
              s("div", Fh, [
                s("div", Vh, [
                  s("span", Bh, f(v.model.filename), 1),
                  C(Hn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", Wh, [
                  s("span", Gh, f(u(v.model.size)), 1),
                  s("span", jh, f(v.model.category), 1)
                ]),
                s("div", Hh, f(v.model.relative_path), 1)
              ])
            ], 10, Ah))), 128))
          ]),
          s("div", qh, [
            C(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => a("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Kh, [
          m[16] || (m[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Jh, [
            C(Ne, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => a("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...m[15] || (m[15] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Yh = /* @__PURE__ */ xe(Qh, [["__scopeId", "data-v-8a82fefa"]]), Xh = { class: "model-resolution-step" }, Zh = { class: "step-header" }, ey = { class: "step-info" }, ty = { class: "step-title" }, sy = { class: "step-description" }, oy = { class: "stat-badge" }, ny = {
  key: 1,
  class: "step-body"
}, ay = {
  key: 2,
  class: "empty-state"
}, ly = { class: "model-search-modal" }, iy = { class: "model-modal-body" }, ry = {
  key: 0,
  class: "model-search-results"
}, cy = ["onClick"], uy = { class: "model-result-header" }, dy = { class: "model-result-filename" }, fy = { class: "model-result-meta" }, my = { class: "model-result-category" }, vy = { class: "model-result-size" }, py = {
  key: 0,
  class: "model-result-path"
}, gy = {
  key: 1,
  class: "model-no-results"
}, hy = {
  key: 2,
  class: "model-searching"
}, yy = { class: "model-download-url-modal" }, wy = { class: "model-modal-body" }, _y = { class: "model-input-group" }, ky = { class: "model-input-group" }, by = { class: "model-modal-actions" }, $y = /* @__PURE__ */ be({
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
    function a(Z) {
      var ye;
      return Z && ((ye = o[Z]) == null ? void 0 : ye[0]) || null;
    }
    const l = e, r = t, c = b(0), u = b(!1), d = b(!1), m = b(""), v = b(""), p = b(""), w = b([]), g = b(!1), _ = M(() => l.models[c.value]), k = M(() => l.models.some((Z) => Z.is_download_intent)), $ = M(() => l.models.filter(
      (Z) => l.modelChoices.has(Z.filename) || Z.is_download_intent
    ).length), S = M(() => {
      var ye;
      if (!_.value) return "";
      const Z = a((ye = _.value.reference) == null ? void 0 : ye.node_type);
      return Z ? `${Z}/${_.value.filename}` : "";
    }), T = M(() => {
      var ye;
      if (!_.value) return "not-found";
      const Z = l.modelChoices.get(_.value.filename);
      if (Z)
        switch (Z.action) {
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
      return _.value.is_download_intent ? "download" : (ye = _.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), P = M(() => {
      var ye, O;
      if (!_.value) return;
      const Z = l.modelChoices.get(_.value.filename);
      if (Z)
        switch (Z.action) {
          case "select":
            return (ye = Z.selected_model) != null && ye.filename ? `→ ${Z.selected_model.filename}` : "Selected";
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
    function R(Z) {
      Z >= 0 && Z < l.models.length && (c.value = Z);
    }
    function U() {
      var Z;
      for (let ye = c.value + 1; ye < l.models.length; ye++) {
        const O = l.models[ye];
        if (!O.is_download_intent && !((Z = l.modelChoices) != null && Z.has(O.filename))) {
          R(ye);
          return;
        }
      }
    }
    function A() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => U()));
    }
    function z() {
      _.value && (r("skip", _.value.filename), Pt(() => U()));
    }
    function E(Z) {
      _.value && (r("option-selected", _.value.filename, Z), Pt(() => U()));
    }
    function H() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ae() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function de() {
      _.value && (v.value = _.value.download_source || "", p.value = _.value.target_path || S.value, d.value = !0);
    }
    function ce() {
      u.value = !1, m.value = "", w.value = [];
    }
    function ke() {
      d.value = !1, v.value = "", p.value = "";
    }
    function Q() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function G(Z) {
      _.value && (ce(), Pt(() => U()));
    }
    function J() {
      !_.value || !v.value.trim() || (r("download-url", _.value.filename, v.value.trim(), p.value.trim() || void 0), ke(), Pt(() => U()));
    }
    function Le(Z) {
      if (!Z) return "Unknown";
      const ye = Z / (1024 * 1024 * 1024);
      return ye >= 1 ? `${ye.toFixed(2)} GB` : `${(Z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (Z, ye) => {
      var O, me, Re;
      return n(), i("div", Xh, [
        s("div", Zh, [
          s("div", ey, [
            s("h3", ty, f(k.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", sy, f(k.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", oy, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), L(sc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ye[0] || (ye[0] = (ve) => R(c.value - 1)),
          onNext: ye[1] || (ye[1] = (ve) => R(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (n(), i("div", ny, [
          C(Yh, {
            filename: _.value.filename,
            "node-type": ((O = _.value.reference) == null ? void 0 : O.node_type) || "Unknown",
            "has-multiple-options": !!((me = _.value.options) != null && me.length),
            options: _.value.options,
            choice: (Re = e.modelChoices) == null ? void 0 : Re.get(_.value.filename),
            status: T.value,
            "status-label": P.value,
            onMarkOptional: A,
            onSkip: z,
            onDownloadUrl: de,
            onSearch: ae,
            onOptionSelected: E,
            onClearChoice: H
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", ay, [...ye[5] || (ye[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (n(), L(Lt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(ce, ["self"])
          }, [
            s("div", ly, [
              s("div", { class: "model-modal-header" }, [
                ye[6] || (ye[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              s("div", iy, [
                C(bt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (ve) => m.value = ve),
                  placeholder: "Search by filename, category...",
                  onInput: Q
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", ry, [
                  (n(!0), i(j, null, he(w.value, (ve) => (n(), i("div", {
                    key: ve.hash,
                    class: "model-search-result-item",
                    onClick: (ee) => G()
                  }, [
                    s("div", uy, [
                      s("code", dy, f(ve.filename), 1)
                    ]),
                    s("div", fy, [
                      s("span", my, f(ve.category), 1),
                      s("span", vy, f(Le(ve.size)), 1)
                    ]),
                    ve.relative_path ? (n(), i("div", py, f(ve.relative_path), 1)) : y("", !0)
                  ], 8, cy))), 128))
                ])) : m.value && !g.value ? (n(), i("div", gy, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                g.value ? (n(), i("div", hy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), L(Lt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(ke, ["self"])
          }, [
            s("div", yy, [
              s("div", { class: "model-modal-header" }, [
                ye[7] || (ye[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ke
                }, "✕")
              ]),
              s("div", wy, [
                s("div", _y, [
                  ye[8] || (ye[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(bt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ye[3] || (ye[3] = (ve) => v.value = ve),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", ky, [
                  ye[9] || (ye[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ye[4] || (ye[4] = (ve) => p.value = ve),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", by, [
                  C(Ne, {
                    variant: "secondary",
                    onClick: ke
                  }, {
                    default: h(() => [...ye[10] || (ye[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Ne, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: J
                  }, {
                    default: h(() => [...ye[11] || (ye[11] = [
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
}), Cy = /* @__PURE__ */ xe($y, [["__scopeId", "data-v-5c700bfa"]]), xy = { class: "applying-step" }, Sy = {
  key: 0,
  class: "phase-content"
}, Iy = {
  key: 1,
  class: "phase-content"
}, Ey = { class: "phase-description" }, Ty = { class: "overall-progress" }, My = { class: "progress-bar" }, Py = { class: "progress-label" }, Ry = { class: "install-list" }, Ly = { class: "install-icon" }, Dy = { key: 0 }, Ny = {
  key: 1,
  class: "spinner"
}, Oy = { key: 2 }, Uy = { key: 3 }, Ay = {
  key: 0,
  class: "install-error"
}, zy = {
  key: 2,
  class: "phase-content"
}, Fy = { class: "phase-header" }, Vy = { class: "phase-title" }, By = { class: "completion-summary" }, Wy = {
  key: 0,
  class: "summary-item success"
}, Gy = { class: "summary-text" }, jy = {
  key: 1,
  class: "summary-item error"
}, Hy = { class: "summary-text" }, qy = {
  key: 2,
  class: "failed-list"
}, Ky = { class: "failed-node-id" }, Jy = { class: "failed-error" }, Qy = {
  key: 4,
  class: "summary-item success"
}, Yy = {
  key: 5,
  class: "restart-prompt"
}, Xy = {
  key: 3,
  class: "phase-content error"
}, Zy = { class: "error-message" }, e1 = /* @__PURE__ */ be({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = M(() => {
      var m, v;
      const u = ((m = t.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || t.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), a = M(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = M(() => a.value.length > 0);
    function r(u, d) {
      var v, p;
      const m = (v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, m;
      return (m = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, p, w;
      return n(), i("div", xy, [
        e.progress.phase === "resolving" ? (n(), i("div", Sy, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", Iy, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", Ey, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", Ty, [
            s("div", My, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", Py, f(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", Ry, [
            (n(!0), i(j, null, he(e.progress.nodesToInstall, (g, _) => (n(), i("div", {
              key: g,
              class: Ve(["install-item", r(g, _)])
            }, [
              s("span", Ly, [
                r(g, _) === "pending" ? (n(), i("span", Dy, "○")) : r(g, _) === "installing" ? (n(), i("span", Ny, "◌")) : r(g, _) === "complete" ? (n(), i("span", Oy, "✓")) : r(g, _) === "failed" ? (n(), i("span", Uy, "✗")) : y("", !0)
              ]),
              s("code", null, f(g), 1),
              c(g) ? (n(), i("span", Ay, f(c(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", zy, [
          s("div", Fy, [
            s("span", {
              class: Ve(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            s("h3", Vy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", By, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Wy, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Gy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", jy, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", Hy, f(a.value.length) + " package" + f(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", qy, [
              (n(!0), i(j, null, he(a.value, (g) => (n(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                s("code", Ky, f(g.node_id), 1),
                s("span", Jy, f(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", Qy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Yy, [
              d[7] || (d[7] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (g) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", Xy, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", Zy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), t1 = /* @__PURE__ */ xe(e1, [["__scopeId", "data-v-5efaae58"]]), s1 = {
  key: 0,
  class: "loading-state"
}, o1 = {
  key: 1,
  class: "wizard-content"
}, n1 = {
  key: 0,
  class: "step-content"
}, a1 = { class: "analysis-summary" }, l1 = { class: "analysis-header" }, i1 = { class: "summary-description" }, r1 = { class: "stats-grid" }, c1 = { class: "stat-card" }, u1 = { class: "stat-items" }, d1 = {
  key: 0,
  class: "stat-item success"
}, f1 = { class: "stat-count" }, m1 = {
  key: 1,
  class: "stat-item info"
}, v1 = { class: "stat-count" }, p1 = {
  key: 2,
  class: "stat-item warning"
}, g1 = { class: "stat-count" }, h1 = {
  key: 3,
  class: "stat-item warning"
}, y1 = { class: "stat-count" }, w1 = {
  key: 4,
  class: "stat-item warning"
}, _1 = { class: "stat-count" }, k1 = {
  key: 5,
  class: "stat-item error"
}, b1 = { class: "stat-count" }, $1 = { class: "stat-card" }, C1 = { class: "stat-items" }, x1 = { class: "stat-item success" }, S1 = { class: "stat-count" }, I1 = {
  key: 0,
  class: "stat-item info"
}, E1 = { class: "stat-count" }, T1 = {
  key: 1,
  class: "stat-item warning"
}, M1 = { class: "stat-count" }, P1 = {
  key: 2,
  class: "stat-item warning"
}, R1 = { class: "stat-count" }, L1 = {
  key: 3,
  class: "stat-item error"
}, D1 = { class: "stat-count" }, N1 = {
  key: 0,
  class: "status-message warning"
}, O1 = { class: "status-text" }, U1 = {
  key: 1,
  class: "status-message warning"
}, A1 = { class: "status-text" }, z1 = {
  key: 2,
  class: "status-message info"
}, F1 = { class: "status-text" }, V1 = {
  key: 3,
  class: "status-message info"
}, B1 = { class: "status-text" }, W1 = {
  key: 4,
  class: "status-message info"
}, G1 = { class: "status-text" }, j1 = {
  key: 5,
  class: "status-message warning"
}, H1 = { class: "status-text" }, q1 = {
  key: 6,
  class: "status-message success"
}, K1 = {
  key: 7,
  class: "category-mismatch-section"
}, J1 = { class: "mismatch-list" }, Q1 = { class: "mismatch-path" }, Y1 = { class: "mismatch-target" }, X1 = {
  key: 8,
  class: "category-mismatch-section"
}, Z1 = { class: "mismatch-list" }, ew = { class: "mismatch-path" }, tw = { class: "status-text" }, sw = {
  key: 1,
  class: "step-content node-step-content"
}, ow = {
  key: 0,
  class: "community-node-section"
}, nw = { class: "community-node-header" }, aw = { class: "community-node-title" }, lw = { class: "community-node-list" }, iw = { class: "community-node-info" }, rw = { class: "community-node-heading" }, cw = { class: "item-name" }, uw = { class: "community-node-package" }, dw = { class: "community-node-meta" }, fw = { class: "community-node-guidance" }, mw = { key: 0 }, vw = { class: "community-choice-status" }, pw = { class: "community-node-actions" }, gw = {
  key: 3,
  class: "step-content"
}, hw = { class: "review-summary" }, yw = { class: "review-stats" }, ww = { class: "review-stat" }, _w = { class: "stat-value" }, kw = { class: "review-stat" }, bw = { class: "stat-value" }, $w = { class: "review-stat" }, Cw = { class: "stat-value" }, xw = { class: "review-stat" }, Sw = { class: "stat-value" }, Iw = {
  key: 0,
  class: "review-section"
}, Ew = { class: "section-title" }, Tw = { class: "review-items" }, Mw = { class: "item-name" }, Pw = { class: "item-choice" }, Rw = {
  key: 0,
  class: "choice-badge install"
}, Lw = {
  key: 1,
  class: "choice-badge skip"
}, Dw = {
  key: 1,
  class: "review-section"
}, Nw = { class: "section-title" }, Ow = { class: "review-items" }, Uw = { class: "item-name" }, Aw = { class: "item-choice" }, zw = {
  key: 0,
  class: "choice-badge install"
}, Fw = {
  key: 1,
  class: "choice-badge optional"
}, Vw = {
  key: 2,
  class: "choice-badge skip"
}, Bw = {
  key: 2,
  class: "review-section"
}, Ww = { class: "section-title" }, Gw = { class: "review-items" }, jw = { class: "item-name" }, Hw = { class: "item-choice" }, qw = {
  key: 0,
  class: "choice-badge install"
}, Kw = {
  key: 1,
  class: "choice-badge optional"
}, Jw = {
  key: 2,
  class: "choice-badge skip"
}, Qw = {
  key: 1,
  class: "choice-badge pending"
}, Yw = {
  key: 3,
  class: "review-section"
}, Xw = { class: "section-title" }, Zw = { class: "review-items download-details" }, e0 = { class: "download-info" }, t0 = { class: "item-name" }, s0 = { class: "download-meta" }, o0 = { class: "download-path" }, n0 = ["title"], a0 = {
  key: 4,
  class: "review-section"
}, l0 = { class: "section-title" }, i0 = { class: "review-items" }, r0 = { class: "item-name" }, c0 = { class: "item-choice" }, u0 = {
  key: 0,
  class: "choice-badge install"
}, d0 = {
  key: 1,
  class: "choice-badge download"
}, f0 = {
  key: 2,
  class: "choice-badge optional"
}, m0 = {
  key: 3,
  class: "choice-badge skip"
}, v0 = {
  key: 4,
  class: "choice-badge skip"
}, p0 = {
  key: 1,
  class: "choice-badge download"
}, g0 = {
  key: 2,
  class: "choice-badge pending"
}, h0 = {
  key: 5,
  class: "no-choices"
}, y0 = /* @__PURE__ */ be({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = tc(), { loadPendingDownloads: v } = Ro(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ct(), _ = b(null), k = b([]), $ = b(!1), S = b(!1), T = b(null), P = b("analysis"), R = b([]), U = b(/* @__PURE__ */ new Map()), A = b(/* @__PURE__ */ new Map()), z = b(/* @__PURE__ */ new Set()), E = M(() => {
      const re = [
        { id: "analysis", label: "Analysis" }
      ];
      return (Q.value || Le.value || Z.value) && re.push({ id: "nodes", label: "Nodes" }), G.value && re.push({ id: "models", label: "Models" }), re.push({ id: "review", label: "Review" }), P.value === "applying" && re.push({ id: "applying", label: "Applying" }), re;
    }), H = M(() => _.value ? _.value.stats.needs_user_input : !1), ae = M(() => _.value ? _.value.nodes.version_gated || [] : []), de = M(() => _.value ? _.value.nodes.uninstallable || [] : []), ce = M(() => de.value.filter((re) => {
      var B;
      return !!((B = re.package) != null && B.package_id);
    })), ke = M(() => ae.value.length > 0), Q = M(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), G = M(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), J = M(() => _.value ? _.value.stats.download_intents > 0 : !1), Le = M(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), Z = M(() => ce.value.length > 0), ye = M(() => _.value ? _.value.nodes.resolved.length : 0), O = M(() => _.value ? _.value.models.resolved.filter((re) => re.has_category_mismatch) : []), me = M(() => O.value.length > 0), Re = M(() => Q.value || Le.value || Z.value ? "nodes" : G.value ? "models" : "review"), ve = M(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((ue) => !ue.is_installed), B = /* @__PURE__ */ new Set();
      return re.filter((ue) => B.has(ue.package.package_id) ? !1 : (B.add(ue.package.package_id), !0));
    }), ee = M(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((ue) => !ue.is_installed), B = /* @__PURE__ */ new Map();
      for (const ue of re) {
        const We = B.get(ue.package.package_id);
        We ? We.node_types_count++ : B.set(ue.package.package_id, {
          package_id: ue.package.package_id,
          title: ue.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), Y = M(() => ve.value.filter((re) => !z.value.has(re.package.package_id))), we = M(() => _.value ? _.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), te = M(() => {
      if (!_.value) return [];
      const re = _.value.nodes.unresolved.map((ue) => ({
        node_type: ue.reference.node_type,
        reason: ue.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.nodes.ambiguous.map((ue) => ({
        node_type: ue.reference.node_type,
        has_multiple_options: !0,
        options: ue.options.map((We) => ({
          package_id: We.package.package_id,
          title: We.package.title,
          match_confidence: We.match_confidence,
          match_type: We.match_type,
          is_installed: We.is_installed
        }))
      }));
      return [...re, ...B];
    }), oe = M(() => {
      if (!_.value) return [];
      const re = _.value.models.unresolved.map((ue) => ({
        filename: ue.reference.widget_value,
        reference: ue.reference,
        reason: ue.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.models.ambiguous.map((ue) => ({
        filename: ue.reference.widget_value,
        reference: ue.reference,
        has_multiple_options: !0,
        options: ue.options.map((We) => ({
          model: We.model,
          match_confidence: We.match_confidence,
          match_type: We.match_type,
          has_download_source: We.has_download_source
        }))
      }));
      return [...re, ...B];
    }), Me = M(() => {
      const re = oe.value, B = we.value.map((ue) => ({
        filename: ue.filename,
        reference: ue.reference,
        is_download_intent: !0,
        resolved_model: ue.resolved_model,
        download_source: ue.download_source,
        target_path: ue.target_path,
        options: void 0
      }));
      return [...re, ...B];
    }), fe = M(() => we.value.filter((re) => {
      const B = A.value.get(re.filename);
      return B ? B.action === "download" : !0;
    }).map((re) => ({
      filename: re.filename,
      url: re.download_source,
      target_path: re.target_path
    })));
    function le(re, B = 50) {
      return re.length <= B ? re : re.slice(0, B - 3) + "...";
    }
    const I = M(() => {
      let re = Y.value.length;
      for (const B of U.value.values())
        B.action === "install" && re++;
      for (const B of A.value.values())
        B.action === "select" && re++;
      return re;
    }), V = M(() => {
      let re = 0;
      for (const B of A.value.values())
        B.action === "download" && re++;
      for (const B of we.value)
        A.value.get(B.filename) || re++;
      return re;
    }), ie = M(() => {
      let re = 0;
      for (const B of U.value.values())
        B.action === "optional" && re++;
      for (const B of A.value.values())
        B.action === "optional" && re++;
      return re;
    }), Ie = M(() => {
      let re = z.value.size;
      for (const B of U.value.values())
        B.action === "skip" && re++;
      for (const B of A.value.values())
        B.action === "skip" && re++;
      for (const B of te.value)
        U.value.has(B.node_type) || re++;
      for (const B of oe.value)
        A.value.has(B.filename) || re++;
      return re;
    }), $e = M(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, Q.value || Z.value) {
        const B = te.value.length, ue = ce.value.length, We = te.value.filter(
          (xt) => U.value.has(xt.node_type)
        ).length, dt = ce.value.filter(
          (xt) => U.value.has(xt.reference.node_type)
        ).length, Ct = B + ue, it = We + dt;
        re.nodes = { resolved: it, total: Ct };
      }
      if (G.value) {
        const B = Me.value.length, ue = Me.value.filter(
          (We) => A.value.has(We.filename) || We.is_download_intent
        ).length;
        re.models = { resolved: ue, total: B };
      }
      if (re.review = { resolved: 1, total: 1 }, P.value === "applying") {
        const B = d.totalFiles || 1, ue = d.completedFiles.length;
        re.applying = { resolved: ue, total: B };
      }
      return re;
    });
    function Se(re) {
      P.value = re;
    }
    function Ae() {
      const re = E.value.findIndex((B) => B.id === P.value);
      re > 0 && (P.value = E.value[re - 1].id);
    }
    function Fe() {
      const re = E.value.findIndex((B) => B.id === P.value);
      re < E.value.length - 1 && (P.value = E.value[re + 1].id);
    }
    function De() {
      for (const re of ce.value) {
        const B = re.reference.node_type;
        U.value.has(B) || se(re, "registry");
      }
    }
    function Ee(re) {
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
      })).filter((B, ue, We) => We.findIndex((dt) => dt.package_id === B.package_id) === ue).sort((B, ue) => {
        const We = Ee(B.source) - Ee(ue.source);
        return We !== 0 ? We : B.package_id.localeCompare(ue.package_id);
      });
    }
    async function Be() {
      $.value = !0, T.value = null;
      try {
        const [re, B] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = re, k.value = Ke(B.nodes), De();
      } catch (re) {
        T.value = re instanceof Error ? re.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function pe() {
      R.value.includes("analysis") || R.value.push("analysis"), Q.value || Le.value || Z.value ? P.value = "nodes" : G.value ? P.value = "models" : P.value = "review";
    }
    function K(re) {
      U.value.set(re, { action: "optional" });
    }
    function He(re) {
      U.value.set(re, { action: "skip" });
    }
    function Ce(re, B) {
      var We;
      const ue = te.value.find((dt) => dt.node_type === re);
      (We = ue == null ? void 0 : ue.options) != null && We[B] && U.value.set(re, {
        action: "install",
        package_id: ue.options[B].package_id
      });
    }
    function Ye(re, B) {
      U.value.set(re, {
        action: "install",
        package_id: B
      });
    }
    function ot(re) {
      U.value.delete(re);
    }
    function ze(re) {
      return U.value.get(re);
    }
    function N(re) {
      const B = ze(re);
      return B ? B.action === "optional" ? "Marked optional" : B.action === "skip" ? "Skipped" : B.action === "install" ? B.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function se(re, B) {
      var dt;
      const ue = (dt = re.package) == null ? void 0 : dt.package_id;
      if (!ue) return;
      const We = {
        action: "install",
        package_id: ue,
        version: re.package.latest_version || null,
        install_source: B
      };
      B === "git" && re.package.repository && (We.repository = re.package.repository), U.value.set(re.reference.node_type, We);
    }
    function ge(re) {
      U.value.set(re, { action: "optional" });
    }
    function Je(re) {
      U.value.set(re, { action: "skip" });
    }
    function D(re) {
      z.value.has(re) ? z.value.delete(re) : z.value.add(re);
    }
    function F(re) {
      A.value.set(re, { action: "optional" });
    }
    function X(re) {
      A.value.set(re, { action: "skip" });
    }
    function Oe(re, B) {
      var We;
      const ue = oe.value.find((dt) => dt.filename === re);
      (We = ue == null ? void 0 : ue.options) != null && We[B] && A.value.set(re, {
        action: "select",
        selected_model: ue.options[B].model
      });
    }
    function Ue(re, B, ue) {
      A.value.set(re, {
        action: "download",
        url: B,
        target_path: ue
      });
    }
    function Pe(re) {
      A.value.delete(re);
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
      S.value = !0, T.value = null, m(), d.phase = "resolving", P.value = "applying";
      try {
        const B = await r(o.workflowName, U.value, A.value, z.value);
        B.models_to_download && B.models_to_download.length > 0 && u(o.workflowName, B.models_to_download);
        const ue = ce.value.map((it) => {
          const xt = ze(it.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const ss = xt.repository || it.package.repository, Is = xt.package_id || it.package.package_id;
          return !ss || !Is ? null : {
            id: Is,
            repository: ss,
            selectedVersion: xt.version || it.package.latest_version || "latest"
          };
        }).filter((it) => !!it), We = new Set(ue.map((it) => it.id)), dt = [
          ...B.nodes_to_install || [],
          ...Y.value.map((it) => it.package.package_id)
        ];
        d.nodesToInstall = [...new Set(dt)].filter((it) => !We.has(it)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const it of ue)
          await w({
            id: it.id,
            version: it.selectedVersion,
            selected_version: it.selectedVersion,
            repository: it.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await v();
        const Ct = d.installError || ((re = d.nodeInstallProgress) == null ? void 0 : re.completedNodes.some((it) => !it.success));
        !d.needsRestart && !Ct && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (B) {
        T.value = B instanceof Error ? B.message : "Failed to apply resolution", d.error = T.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function kt() {
      a("refresh"), a("restart"), a("close");
    }
    async function Et() {
      var B;
      const re = ((B = d.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((ue) => !ue.success).map((ue) => ue.node_id)) || [];
      if (re.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: re.length
        }, d.nodesToInstall = re, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (ue) {
          d.error = ue instanceof Error ? ue.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return at(Be), (re, B) => (n(), L(It, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: $.value,
      error: T.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (ue) => a("close"))
    }, {
      body: h(() => [
        $.value && !_.value ? (n(), i("div", s1, [...B[2] || (B[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (n(), i("div", o1, [
          C(eg, {
            steps: E.value,
            "current-step": P.value,
            "completed-steps": R.value,
            "step-stats": $e.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          P.value === "analysis" ? (n(), i("div", n1, [
            s("div", a1, [
              s("div", l1, [
                B[3] || (B[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", i1, " Found " + f(_.value.stats.total_nodes) + " nodes and " + f(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", r1, [
                s("div", c1, [
                  B[16] || (B[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", u1, [
                    ye.value > 0 ? (n(), i("div", d1, [
                      B[4] || (B[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", f1, f(ye.value), 1),
                      B[5] || (B[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (n(), i("div", m1, [
                      B[6] || (B[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", v1, f(_.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (n(), i("div", p1, [
                      B[8] || (B[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", g1, f(_.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ae.value.length > 0 ? (n(), i("div", h1, [
                      B[10] || (B[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", y1, f(ae.value.length), 1),
                      B[11] || (B[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    de.value.length > 0 ? (n(), i("div", w1, [
                      B[12] || (B[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", _1, f(de.value.length), 1),
                      B[13] || (B[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (n(), i("div", k1, [
                      B[14] || (B[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", b1, f(_.value.nodes.unresolved.length), 1),
                      B[15] || (B[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", $1, [
                  B[27] || (B[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", C1, [
                    s("div", x1, [
                      B[17] || (B[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", S1, f(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      B[18] || (B[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (n(), i("div", I1, [
                      B[19] || (B[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", E1, f(_.value.stats.download_intents), 1),
                      B[20] || (B[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    me.value ? (n(), i("div", T1, [
                      B[21] || (B[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", M1, f(O.value.length), 1),
                      B[22] || (B[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (n(), i("div", P1, [
                      B[23] || (B[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", R1, f(_.value.models.ambiguous.length), 1),
                      B[24] || (B[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (n(), i("div", L1, [
                      B[25] || (B[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", D1, f(_.value.models.unresolved.length), 1),
                      B[26] || (B[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              H.value ? (n(), i("div", N1, [
                B[28] || (B[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", O1, f(te.value.length + oe.value.length) + " items need your input", 1)
              ])) : ke.value ? (n(), i("div", U1, [
                B[29] || (B[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", A1, f(ae.value.length) + " node type" + f(ae.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : de.value.length > 0 ? (n(), i("div", z1, [
                B[30] || (B[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", F1, f(de.value.length) + " community-mapped node type" + f(de.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Le.value ? (n(), i("div", V1, [
                B[31] || (B[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", B1, f(_.value.stats.packages_needing_installation) + " package" + f(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(_.value.stats.nodes_needing_installation) + " node type" + f(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(J.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : J.value ? (n(), i("div", W1, [
                B[32] || (B[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", G1, f(_.value.stats.download_intents) + " model" + f(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : me.value ? (n(), i("div", j1, [
                B[33] || (B[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", H1, f(O.value.length) + " model" + f(O.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", q1, [...B[34] || (B[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              me.value ? (n(), i("div", K1, [
                B[37] || (B[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", J1, [
                  (n(!0), i(j, null, he(O.value, (ue) => {
                    var We, dt;
                    return n(), i("div", {
                      key: ue.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", Q1, f(ue.actual_category) + "/" + f((We = ue.model) == null ? void 0 : We.filename), 1),
                      B[36] || (B[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", Y1, f((dt = ue.expected_categories) == null ? void 0 : dt[0]) + "/", 1),
                      ue.file_path ? (n(), L(Ne, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ct) => Ge(ue.file_path)
                      }, {
                        default: h(() => [...B[35] || (B[35] = [
                          x(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ke.value ? (n(), i("div", X1, [
                B[38] || (B[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", Z1, [
                  (n(!0), i(j, null, he(ae.value, (ue) => {
                    var We;
                    return n(), i("div", {
                      key: `vg-${ue.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", ew, f(ue.reference.node_type), 1),
                      s("span", tw, f(ue.guidance || ((We = _.value.node_guidance) == null ? void 0 : We[ue.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          P.value === "nodes" ? (n(), i("div", sw, [
            C(Ph, {
              nodes: te.value,
              "node-choices": U.value,
              "auto-resolved-packages": ee.value,
              "skipped-packages": z.value,
              "installed-node-packs": k.value,
              onMarkOptional: K,
              onSkip: He,
              onOptionSelected: Ce,
              onManualEntry: Ye,
              onClearChoice: ot,
              onPackageSkip: D
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ce.value.length > 0 ? (n(), i("div", ow, [
              s("div", nw, [
                s("h4", aw, "Community-Mapped Packages (" + f(ce.value.length) + ")", 1),
                B[39] || (B[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", lw, [
                (n(!0), i(j, null, he(ce.value, (ue) => (n(), i("div", {
                  key: `community-${ue.reference.node_type}-${ue.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", iw, [
                    s("div", rw, [
                      s("code", cw, f(ue.reference.node_type), 1),
                      s("span", uw, f(ue.package.title || ue.package.package_id), 1)
                    ]),
                    s("div", dw, f(ue.package.package_id), 1),
                    s("div", fw, [
                      B[40] || (B[40] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ue.guidance ? (n(), i("span", mw, f(ue.guidance), 1)) : y("", !0)
                    ]),
                    s("div", vw, f(N(ue.reference.node_type)), 1)
                  ]),
                  s("div", pw, [
                    C(Ne, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !ue.package.package_id,
                      onClick: (We) => se(ue, "registry")
                    }, {
                      default: h(() => [...B[41] || (B[41] = [
                        x(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    ue.package.repository ? (n(), L(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !ue.package.package_id,
                      onClick: (We) => se(ue, "git")
                    }, {
                      default: h(() => [...B[42] || (B[42] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    C(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (We) => ge(ue.reference.node_type)
                    }, {
                      default: h(() => [...B[43] || (B[43] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (We) => Je(ue.reference.node_type)
                    }, {
                      default: h(() => [...B[44] || (B[44] = [
                        x(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          P.value === "models" ? (n(), L(Cy, {
            key: 2,
            models: Me.value,
            "model-choices": A.value,
            onMarkOptional: F,
            onSkip: X,
            onOptionSelected: Oe,
            onDownloadUrl: Ue,
            onClearChoice: Pe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          P.value === "review" ? (n(), i("div", gw, [
            s("div", hw, [
              B[50] || (B[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", yw, [
                s("div", ww, [
                  s("span", _w, f(I.value), 1),
                  B[45] || (B[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", kw, [
                  s("span", bw, f(V.value), 1),
                  B[46] || (B[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", $w, [
                  s("span", Cw, f(ie.value), 1),
                  B[47] || (B[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", xw, [
                  s("span", Sw, f(Ie.value), 1),
                  B[48] || (B[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ee.value.length > 0 ? (n(), i("div", Iw, [
                s("h4", Ew, "Node Packages (" + f(ee.value.length) + ")", 1),
                s("div", Tw, [
                  (n(!0), i(j, null, he(ee.value, (ue) => (n(), i("div", {
                    key: ue.package_id,
                    class: "review-item"
                  }, [
                    s("code", Mw, f(ue.package_id), 1),
                    s("div", Pw, [
                      z.value.has(ue.package_id) ? (n(), i("span", Lw, "Skipped")) : (n(), i("span", Rw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ce.value.length > 0 ? (n(), i("div", Dw, [
                s("h4", Nw, "Community-Mapped Packages (" + f(ce.value.length) + ")", 1),
                s("div", Ow, [
                  (n(!0), i(j, null, he(ce.value, (ue) => {
                    var We, dt, Ct;
                    return n(), i("div", {
                      key: `review-community-${ue.reference.node_type}-${ue.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", Uw, f(ue.reference.node_type), 1),
                      s("div", Aw, [
                        ((We = ze(ue.reference.node_type)) == null ? void 0 : We.action) === "install" ? (n(), i("span", zw, f(((dt = ze(ue.reference.node_type)) == null ? void 0 : dt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Ct = ze(ue.reference.node_type)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", Fw, " Optional ")) : (n(), i("span", Vw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value.length > 0 ? (n(), i("div", Bw, [
                s("h4", Ww, "Node Choices (" + f(te.value.length) + ")", 1),
                s("div", Gw, [
                  (n(!0), i(j, null, he(te.value, (ue) => {
                    var We, dt, Ct, it;
                    return n(), i("div", {
                      key: ue.node_type,
                      class: "review-item"
                    }, [
                      s("code", jw, f(ue.node_type), 1),
                      s("div", Hw, [
                        U.value.has(ue.node_type) ? (n(), i(j, { key: 0 }, [
                          ((We = U.value.get(ue.node_type)) == null ? void 0 : We.action) === "install" ? (n(), i("span", qw, f((dt = U.value.get(ue.node_type)) == null ? void 0 : dt.package_id), 1)) : ((Ct = U.value.get(ue.node_type)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", Kw, " Optional ")) : ((it = U.value.get(ue.node_type)) == null ? void 0 : it.action) === "skip" ? (n(), i("span", Jw, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", Qw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              fe.value.length > 0 ? (n(), i("div", Yw, [
                s("h4", Xw, "Models to Download (" + f(fe.value.length) + ")", 1),
                s("div", Zw, [
                  (n(!0), i(j, null, he(fe.value, (ue) => (n(), i("div", {
                    key: ue.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", e0, [
                      s("code", t0, f(ue.filename), 1),
                      s("div", s0, [
                        s("span", o0, "→ " + f(ue.target_path), 1),
                        ue.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ue.url
                        }, f(le(ue.url)), 9, n0)) : y("", !0)
                      ])
                    ]),
                    B[49] || (B[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Me.value.length > 0 ? (n(), i("div", a0, [
                s("h4", l0, "Models (" + f(Me.value.length) + ")", 1),
                s("div", i0, [
                  (n(!0), i(j, null, he(Me.value, (ue) => {
                    var We, dt, Ct, it, xt, ss, Is;
                    return n(), i("div", {
                      key: ue.filename,
                      class: "review-item"
                    }, [
                      s("code", r0, f(ue.filename), 1),
                      s("div", c0, [
                        A.value.has(ue.filename) ? (n(), i(j, { key: 0 }, [
                          ((We = A.value.get(ue.filename)) == null ? void 0 : We.action) === "select" ? (n(), i("span", u0, f((Ct = (dt = A.value.get(ue.filename)) == null ? void 0 : dt.selected_model) == null ? void 0 : Ct.filename), 1)) : ((it = A.value.get(ue.filename)) == null ? void 0 : it.action) === "download" ? (n(), i("span", d0, " Download ")) : ((xt = A.value.get(ue.filename)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", f0, " Optional ")) : ((ss = A.value.get(ue.filename)) == null ? void 0 : ss.action) === "skip" ? (n(), i("span", m0, " Skip ")) : ((Is = A.value.get(ue.filename)) == null ? void 0 : Is.action) === "cancel_download" ? (n(), i("span", v0, " Cancel Download ")) : y("", !0)
                        ], 64)) : ue.is_download_intent ? (n(), i("span", p0, " Pending Download ")) : (n(), i("span", g0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ve.value.length === 0 && ce.value.length === 0 && te.value.length === 0 && Me.value.length === 0 ? (n(), i("div", h0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          P.value === "applying" ? (n(), L(t1, {
            key: 4,
            progress: tt(d),
            onRestart: kt,
            onRetryFailed: Et
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        P.value !== "analysis" && P.value !== "applying" ? (n(), L(Ne, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Ae
        }, {
          default: h(() => [...B[51] || (B[51] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        B[54] || (B[54] = s("div", { class: "footer-spacer" }, null, -1)),
        P.value !== "applying" || tt(d).phase === "complete" || tt(d).phase === "error" ? (n(), L(Ne, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (ue) => a("close"))
        }, {
          default: h(() => [
            x(f(tt(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        P.value === "analysis" ? (n(), L(Ne, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: pe
        }, {
          default: h(() => [
            x(f(Re.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        P.value === "nodes" ? (n(), L(Ne, {
          key: 3,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [
            x(f(G.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        P.value === "models" ? (n(), L(Ne, {
          key: 4,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [...B[52] || (B[52] = [
            x(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        P.value === "review" ? (n(), L(Ne, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: h(() => [...B[53] || (B[53] = [
            x(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), w0 = /* @__PURE__ */ xe(y0, [["__scopeId", "data-v-49848358"]]), _0 = { class: "search-input-wrapper" }, k0 = ["value", "placeholder"], b0 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = b(null);
    let r;
    function c(d) {
      const m = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", m);
      }, o.debounce)) : a("update:modelValue", m);
    }
    function u() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return at(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (n(), i("div", _0, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: fs(u, ["escape"])
      }, null, 40, k0),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), $0 = /* @__PURE__ */ xe(b0, [["__scopeId", "data-v-266f857a"]]), C0 = { class: "search-bar" }, x0 = /* @__PURE__ */ be({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (n(), i("div", C0, [
      C($0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), io = /* @__PURE__ */ xe(x0, [["__scopeId", "data-v-3d51bbfd"]]), S0 = { class: "section-group" }, I0 = {
  key: 0,
  class: "section-content"
}, E0 = /* @__PURE__ */ be({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = b(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (n(), i("section", S0, [
      C(as, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          x(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", I0, [
        st(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), St = /* @__PURE__ */ xe(E0, [["__scopeId", "data-v-c48e33ed"]]), T0 = { class: "item-header" }, M0 = {
  key: 0,
  class: "item-icon"
}, P0 = { class: "item-info" }, R0 = {
  key: 0,
  class: "item-title"
}, L0 = {
  key: 1,
  class: "item-subtitle"
}, D0 = {
  key: 0,
  class: "item-details"
}, N0 = {
  key: 1,
  class: "item-actions"
}, O0 = /* @__PURE__ */ be({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = M(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Ve(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", T0, [
        l.$slots.icon ? (n(), i("span", M0, [
          st(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", P0, [
          l.$slots.title ? (n(), i("div", R0, [
            st(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", L0, [
            st(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", D0, [
        st(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", N0, [
        st(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ xe(O0, [["__scopeId", "data-v-cc435e0e"]]), U0 = { class: "loading-state" }, A0 = { class: "loading-message" }, z0 = /* @__PURE__ */ be({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (n(), i("div", U0, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", A0, f(e.message), 1)
    ]));
  }
}), xs = /* @__PURE__ */ xe(z0, [["__scopeId", "data-v-ad8436c9"]]), F0 = { class: "error-state" }, V0 = { class: "error-message" }, B0 = /* @__PURE__ */ be({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (n(), i("div", F0, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", V0, f(e.message), 1),
      e.retry ? (n(), L(Te, {
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
}), Ss = /* @__PURE__ */ xe(B0, [["__scopeId", "data-v-5397be48"]]), W0 = /* @__PURE__ */ be({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = b([]), c = b(!1), u = b(null), d = b(""), m = b(!0), v = b(!1), p = b(!1), w = b(!1), g = b(null), _ = M(
      () => r.value.filter((O) => O.status === "broken")
    ), k = M(
      () => r.value.filter((O) => O.status === "new")
    ), $ = M(
      () => r.value.filter((O) => O.status === "modified")
    ), S = M(
      () => r.value.filter((O) => O.status === "synced")
    ), T = M(() => {
      if (!d.value.trim()) return r.value;
      const O = d.value.toLowerCase();
      return r.value.filter((me) => me.name.toLowerCase().includes(O));
    }), P = M(
      () => _.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), R = M(
      () => k.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), U = M(
      () => $.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = M(
      () => S.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = M(
      () => v.value ? A.value : A.value.slice(0, 5)
    );
    async function E(O = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(O);
      } catch (me) {
        u.value = me instanceof Error ? me.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: E });
    function H(O) {
      g.value = O, p.value = !0;
    }
    function ae(O) {
      g.value = O, w.value = !0;
    }
    function de(O) {
      g.value = O, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: O }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function ce(O) {
      var ve;
      const Re = (ve = O.detail) == null ? void 0 : ve.workflowName;
      Re && de(Re);
    }
    function ke() {
      a("refresh");
    }
    async function Q() {
      w.value = !1, await E(!0);
    }
    async function G() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function J(O) {
      return O.replace(/uninstallable node mappings?/gi, (me) => me.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Le(O) {
      if (O.issue_summary && O.issue_summary.trim().length > 0)
        return J(O.issue_summary);
      const me = [];
      return O.version_gated_count && O.version_gated_count > 0 && me.push(`${O.version_gated_count} node${O.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), O.uninstallable_count && O.uninstallable_count > 0 && me.push(`${O.uninstallable_count} node${O.uninstallable_count > 1 ? "s" : ""} need community packages`), O.missing_nodes > 0 && me.push(`${O.missing_nodes} missing node${O.missing_nodes > 1 ? "s" : ""}`), O.missing_models > 0 && me.push(`${O.missing_models} missing model${O.missing_models > 1 ? "s" : ""}`), O.models_with_category_mismatch && O.models_with_category_mismatch > 0 && me.push(`${O.models_with_category_mismatch} model${O.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), O.pending_downloads && O.pending_downloads > 0 && me.push(`${O.pending_downloads} pending download${O.pending_downloads > 1 ? "s" : ""}`), me.length > 0 ? me.join(", ") : "Has issues";
    }
    function Z(O) {
      const me = O.sync_state === "new" ? "New" : O.sync_state === "modified" ? "Modified" : O.sync_state === "synced" ? "Synced" : O.sync_state, Re = ye(O);
      return O.has_path_sync_issues && O.models_needing_path_sync && O.models_needing_path_sync > 0 ? `${O.models_needing_path_sync} model path${O.models_needing_path_sync > 1 ? "s" : ""} need${O.models_needing_path_sync === 1 ? "s" : ""} sync · ${Re}` : `${me || "Unknown"} · ${Re}`;
    }
    function ye(O) {
      const me = O.contract_summary;
      return !me || !me.has_contract ? "No contract" : me.status === "incomplete" ? `${me.input_count} in / ${me.output_count} out · incomplete` : `${me.input_count} in / ${me.output_count} out`;
    }
    return at(() => {
      E(), window.addEventListener("comfygit:open-workflow-contract", ce);
    }), na(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ce);
    }), (O, me) => (n(), i(j, null, [
      C(At, null, {
        header: h(() => [
          C(zt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          C(io, {
            modelValue: d.value,
            "onUpdate:modelValue": me[0] || (me[0] = (Re) => d.value = Re),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), L(xs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), L(Ss, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            P.value.length ? (n(), L(St, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(P.value, (Re) => (n(), L(Vt, {
                  key: Re.name,
                  status: "broken"
                }, {
                  icon: h(() => [...me[7] || (me[7] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(f(Re.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(f(Le(Re)), 1)
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ve) => ae(Re.name)
                    }, {
                      default: h(() => [...me[8] || (me[8] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => de(Re.name)
                    }, {
                      default: h(() => [...me[9] || (me[9] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => H(Re.name)
                    }, {
                      default: h(() => [...me[10] || (me[10] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            R.value.length ? (n(), L(St, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(R.value, (Re) => (n(), L(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    x(f(Re.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    x(f(Re.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(f(Z(Re)), 1)
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => de(Re.name)
                    }, {
                      default: h(() => [...me[11] || (me[11] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => H(Re.name)
                    }, {
                      default: h(() => [...me[12] || (me[12] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            U.value.length ? (n(), L(St, {
              key: 2,
              title: "MODIFIED",
              count: U.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(U.value, (Re) => (n(), L(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...me[13] || (me[13] = [
                    x("⚡", -1)
                  ])]),
                  title: h(() => [
                    x(f(Re.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(f(Z(Re)), 1)
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => de(Re.name)
                    }, {
                      default: h(() => [...me[14] || (me[14] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => H(Re.name)
                    }, {
                      default: h(() => [...me[15] || (me[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            A.value.length ? (n(), L(St, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: me[2] || (me[2] = (Re) => m.value = Re)
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(z.value, (Re) => (n(), L(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    x(f(Re.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    x(f(Re.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(f(Z(Re)), 1)
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => de(Re.name)
                    }, {
                      default: h(() => [...me[16] || (me[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => H(Re.name)
                    }, {
                      default: h(() => [...me[17] || (me[17] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && A.value.length > 5 ? (n(), L(Te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: me[1] || (me[1] = (Re) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    x(" View all " + f(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            T.value.length ? y("", !0) : (n(), L(cs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (n(), L(Bp, {
        key: 0,
        "workflow-name": g.value,
        onClose: me[3] || (me[3] = (Re) => p.value = !1),
        onResolve: me[4] || (me[4] = (Re) => ae(g.value)),
        onRefresh: me[5] || (me[5] = (Re) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (n(), L(w0, {
        key: 1,
        "workflow-name": g.value,
        onClose: Q,
        onInstall: ke,
        onRefresh: me[6] || (me[6] = (Re) => a("refresh")),
        onRestart: G
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), G0 = /* @__PURE__ */ xe(W0, [["__scopeId", "data-v-28ee54dd"]]), j0 = /* @__PURE__ */ be({
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
}), ra = /* @__PURE__ */ xe(j0, [["__scopeId", "data-v-ccb7816e"]]), H0 = ["disabled"], q0 = { class: "dropdown-value" }, K0 = ["onClick"], J0 = {
  key: 0,
  class: "dropdown-error"
}, Q0 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = b(!1), r = b(null), c = b(null), u = b({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function m(S) {
      return typeof S == "string" ? S : S.label;
    }
    const v = M(() => {
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
      a("update:modelValue", d(S)), w();
    }
    function _() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), T = window.innerHeight, P = T - S.bottom, R = S.top, U = Math.min(300, o.options.length * 36 + 8), A = P < U && R > P;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...A ? { bottom: `${T - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    wt(l, async (S) => {
      S && (await Pt(), _());
    });
    function k() {
      l.value && _();
    }
    function $(S) {
      S.key === "Escape" && l.value && w();
    }
    return at(() => {
      window.addEventListener("scroll", k, !0), window.addEventListener("keydown", $);
    }), Mo(() => {
      window.removeEventListener("scroll", k, !0), window.removeEventListener("keydown", $);
    }), (S, T) => (n(), i("div", {
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
        s("span", q0, f(v.value), 1),
        T[0] || (T[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, H0),
      (n(), L(Lt, { to: "body" }, [
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
          style: Rt(u.value)
        }, [
          (n(!0), i(j, null, he(e.options, (P) => (n(), i("div", {
            key: d(P),
            class: Ve(["dropdown-option", { selected: d(P) === e.modelValue }]),
            onClick: (R) => g(P)
          }, f(m(P)), 11, K0))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", J0, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Y0 = /* @__PURE__ */ xe(Q0, [["__scopeId", "data-v-857e085b"]]), X0 = { class: "destination-section" }, Z0 = { class: "section-label" }, e_ = { class: "destination-row" }, t_ = {
  key: 0,
  class: "path-separator"
}, s_ = /* @__PURE__ */ be({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelsSubdirectories: l } = ct(), r = b(""), c = b(""), u = b(""), d = b([]), m = b(!1);
    let v = !1;
    const p = M(() => {
      const k = d.value.map(($) => ({
        label: $,
        value: $
      }));
      return k.push({ label: "Custom path...", value: "__custom__" }), k;
    }), w = M(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (m.value || !o.suggestedDirectory) return;
      const k = d.value.find(
        ($) => {
          var S;
          return $.toLowerCase() === ((S = o.suggestedDirectory) == null ? void 0 : S.toLowerCase());
        }
      );
      k && k !== r.value && (v = !0, r.value = k, Pt(() => {
        v = !1;
      }));
    }
    async function _() {
      try {
        const k = await l();
        d.value = k.directories, k.directories.length > 0 && !r.value && (r.value = k.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return wt(w, (k) => {
      a("update:modelValue", k);
    }, { immediate: !0 }), wt(() => o.suggestedDirectory, g), wt(d, g), wt(r, (k, $) => {
      v || $ === "" || (m.value = !0);
    }), at(_), (k, $) => (n(), i("div", X0, [
      s("h4", Z0, f(e.label), 1),
      s("div", e_, [
        C(Y0, {
          modelValue: r.value,
          "onUpdate:modelValue": $[0] || ($[0] = (S) => r.value = S),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (n(), i("span", t_, "/")) : y("", !0),
        r.value !== "__custom__" ? (n(), L(bt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": $[1] || ($[1] = (S) => c.value = S),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (n(), L(bt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": $[2] || ($[2] = (S) => u.value = S),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), oc = /* @__PURE__ */ xe(s_, [["__scopeId", "data-v-2fbc2b02"]]);
function o_(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function n_(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!o_(o.hostname)) return { kind: "unknown" };
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
function a_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ci(e, t, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${a_(o)}`;
}
const l_ = { class: "hf-file-browser" }, i_ = { class: "browser-header" }, r_ = { class: "repo-info" }, c_ = { class: "repo-id" }, u_ = {
  key: 0,
  class: "revision-pill"
}, d_ = {
  key: 0,
  class: "loading-state"
}, f_ = {
  key: 1,
  class: "error-state"
}, m_ = { class: "toolbar" }, v_ = { class: "toolbar-actions" }, p_ = { class: "file-list-container" }, g_ = {
  key: 0,
  class: "file-list-header"
}, h_ = ["checked", "indeterminate"], y_ = {
  key: 1,
  class: "file-checkbox-spacer"
}, w_ = { class: "sort-indicator" }, __ = { class: "sort-indicator" }, k_ = {
  key: 1,
  class: "empty-state"
}, b_ = {
  key: 2,
  class: "file-list"
}, $_ = ["onClick"], C_ = ["checked", "onChange"], x_ = { class: "file-path" }, S_ = { class: "file-size" }, I_ = { class: "action-bar" }, E_ = { class: "summary-info" }, T_ = { class: "summary-count" }, M_ = { class: "summary-size" }, P_ = /* @__PURE__ */ be({
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
    const o = e, a = t, { getHuggingFaceRepoInfo: l } = ct(), r = b([]), c = b(/* @__PURE__ */ new Set()), u = b(!1), d = b(null), m = b(""), v = b(!1), p = b("name"), w = b(!0), g = b(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, k = M(() => {
      let ve = r.value;
      if (o.initialPath) {
        const ee = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        ve = ve.filter((Y) => Y.path.startsWith(ee) || Y.path === o.initialPath);
      }
      if (v.value && (ve = ve.filter((ee) => ee.is_model_file)), m.value.trim()) {
        const ee = m.value.toLowerCase();
        ve = ve.filter((Y) => Y.path.toLowerCase().includes(ee));
      }
      return ve;
    }), $ = M(() => {
      const ve = [...k.value];
      return ve.sort((ee, Y) => {
        let we;
        return p.value === "name" ? we = ee.path.localeCompare(Y.path) : we = ee.size - Y.size, w.value ? we : -we;
      }), ve;
    }), S = M(() => k.value.length === 0 ? !1 : k.value.every((ve) => c.value.has(ve.path))), T = M(() => k.value.some((ve) => c.value.has(ve.path))), P = M(() => g.value.trim().length > 0), R = M(() => {
      let ve = 0;
      for (const ee of c.value) {
        const Y = r.value.find((we) => we.path === ee);
        Y && (ve += Y.size);
      }
      return ve;
    }), U = M(() => {
      if (c.value.size === 0) return null;
      const ve = /* @__PURE__ */ new Set();
      for (const ee of c.value) {
        const Y = Le(ee);
        Y && ve.add(Y.toLowerCase());
      }
      return ve.size !== 1 ? null : [...ve][0];
    }), A = M(() => o.mode || "download"), z = M(() => o.actionLabel || (A.value === "source" ? "Use as Source" : "Queue Download")), E = M(() => A.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), H = M(() => A.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !P.value);
    function ae(ve) {
      if (ve === 0) return "0 B";
      const ee = 1024 * 1024 * 1024, Y = 1024 * 1024, we = 1024;
      return ve >= ee ? `${(ve / ee).toFixed(2)} GB` : ve >= Y ? `${(ve / Y).toFixed(1)} MB` : ve >= we ? `${(ve / we).toFixed(0)} KB` : `${ve} B`;
    }
    function de(ve) {
      const ee = ve.match(_);
      return ee ? `${ee[1]}${ee[4]}` : null;
    }
    function ce(ve) {
      if (A.value === "source") {
        c.value = c.value.has(ve.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ve.path]);
        return;
      }
      const ee = new Set(c.value), Y = ee.has(ve.path), we = ve.shard_group || de(ve.path);
      if (we) {
        const te = r.value.filter((oe) => (oe.shard_group || de(oe.path)) === we);
        Y ? te.forEach((oe) => ee.delete(oe.path)) : te.forEach((oe) => ee.add(oe.path));
      } else
        Y ? ee.delete(ve.path) : ee.add(ve.path);
      c.value = ee;
    }
    function ke() {
      const ve = new Set(c.value);
      for (const ee of k.value)
        ee.is_model_file && ve.add(ee.path);
      c.value = ve;
    }
    function Q() {
      c.value = /* @__PURE__ */ new Set();
    }
    function G() {
      if (S.value) {
        const ve = new Set(c.value);
        for (const ee of k.value)
          ve.delete(ee.path);
        c.value = ve;
      } else {
        const ve = new Set(c.value);
        for (const ee of k.value)
          ve.add(ee.path);
        c.value = ve;
      }
    }
    function J(ve) {
      p.value === ve ? w.value = !w.value : (p.value = ve, w.value = !0);
    }
    function Le(ve) {
      const ee = ve.split("/");
      return ee.length >= 2 ? ee[ee.length - 2] : null;
    }
    function Z() {
      return g.value.trim();
    }
    function ye() {
      if (c.value.size === 0 || !P.value) return;
      const ve = Z(), ee = [];
      for (const Y of c.value) {
        const we = r.value.find((te) => te.path === Y);
        we && ee.push({
          url: Ci(o.repoId, o.revision, we.path),
          destination: ve,
          filename: we.path.split("/").pop() || we.path
        });
      }
      a("queue", ee);
    }
    function O() {
      if (c.value.size !== 1) return;
      const [ve] = c.value;
      a("selectSource", Ci(o.repoId, o.revision, ve));
    }
    function me() {
      if (A.value === "source") {
        O();
        return;
      }
      ye();
    }
    async function Re() {
      if (o.repoId) {
        u.value = !0, d.value = null;
        try {
          const ve = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ee = await l(ve);
          if (r.value = ee.files, o.preselectedFile) {
            const Y = r.value.find((we) => we.path === o.preselectedFile);
            Y && ce(Y);
          }
        } catch (ve) {
          d.value = ve instanceof Error ? ve.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return wt(() => [o.repoId, o.revision], () => {
      o.repoId && Re();
    }, { immediate: !1 }), at(() => {
      Re();
    }), (ve, ee) => (n(), i("div", l_, [
      s("div", i_, [
        s("button", {
          class: "back-btn",
          onClick: ee[0] || (ee[0] = (Y) => ve.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", r_, [
          s("span", c_, f(e.repoId), 1),
          e.revision ? (n(), i("span", u_, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (n(), i("div", d_, " Loading repository files... ")) : d.value ? (n(), i("div", f_, f(d.value), 1)) : (n(), i(j, { key: 2 }, [
        s("div", m_, [
          C(bt, {
            modelValue: m.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (Y) => m.value = Y),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", v_, [
            s("button", {
              class: Ve(["toggle-btn", { active: v.value }]),
              onClick: ee[2] || (ee[2] = (Y) => v.value = !v.value)
            }, f(v.value ? "Models Only" : "All Files"), 3),
            A.value === "download" ? (n(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: ke
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: Q
            }, "Clear")
          ])
        ]),
        s("div", p_, [
          k.value.length > 0 ? (n(), i("div", g_, [
            A.value === "download" ? (n(), i("input", {
              key: 0,
              type: "checkbox",
              checked: S.value,
              indeterminate: T.value && !S.value,
              class: "file-checkbox",
              onChange: G
            }, null, 40, h_)) : (n(), i("span", y_)),
            s("span", {
              class: "header-name",
              onClick: ee[3] || (ee[3] = (Y) => J("name"))
            }, [
              ee[7] || (ee[7] = x(" Name ", -1)),
              s("span", w_, f(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: ee[4] || (ee[4] = (Y) => J("size"))
            }, [
              ee[8] || (ee[8] = x(" Size ", -1)),
              s("span", __, f(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          k.value.length === 0 ? (n(), i("div", k_, f(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", b_, [
            (n(!0), i(j, null, he($.value, (Y) => (n(), i("div", {
              key: Y.path,
              class: Ve(["file-item", { selected: c.value.has(Y.path) }]),
              onClick: (we) => ce(Y)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(Y.path),
                class: "file-checkbox",
                onClick: ee[5] || (ee[5] = vt(() => {
                }, ["stop"])),
                onChange: (we) => ce(Y)
              }, null, 40, C_),
              s("span", x_, f(Y.path), 1),
              s("span", S_, f(ae(Y.size)), 1)
            ], 10, $_))), 128))
          ]))
        ]),
        A.value === "download" ? (n(), L(oc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": ee[6] || (ee[6] = (Y) => g.value = Y),
          "suggested-directory": U.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", I_, [
          s("div", E_, [
            s("span", T_, f(E.value), 1),
            s("span", M_, f(ae(R.value)), 1)
          ]),
          C(Ne, {
            variant: "primary",
            disabled: H.value,
            onClick: me
          }, {
            default: h(() => [
              x(f(z.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), R_ = /* @__PURE__ */ xe(P_, [["__scopeId", "data-v-06caa551"]]), L_ = { class: "token-config-modal" }, D_ = { class: "provider-info" }, N_ = { class: "provider-icon" }, O_ = { class: "provider-name" }, U_ = {
  key: 0,
  class: "current-token"
}, A_ = { class: "mask" }, z_ = { class: "token-input-section" }, F_ = { class: "input-label" }, V_ = { class: "help-text" }, B_ = ["href"], W_ = { class: "modal-actions" }, G_ = /* @__PURE__ */ be({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, a = t, { updateConfig: l } = ct(), r = b(""), c = b(!1), u = b(!1), d = M(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), m = M(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = M(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = M(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = M(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const k = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(k), r.value = "", a("saved"), a("close");
        } catch (k) {
          console.error("Failed to save token:", k);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const k = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(k), a("cleared"), a("close");
      } catch (k) {
        console.error("Failed to clear token:", k);
      } finally {
        u.value = !1;
      }
    }
    return (k, $) => (n(), L(It, {
      title: "Configure API Token",
      onClose: $[2] || ($[2] = (S) => k.$emit("close"))
    }, {
      body: h(() => [
        s("div", L_, [
          s("div", D_, [
            s("span", N_, f(m.value), 1),
            s("span", O_, f(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", U_, [
            $[4] || ($[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", A_, f(e.currentTokenMask), 1),
            C(Ne, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...$[3] || ($[3] = [
                x(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", z_, [
            s("label", F_, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            C(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": $[0] || ($[0] = (S) => r.value = S),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", V_, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, B_)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", W_, [
          C(Ne, {
            variant: "secondary",
            onClick: $[1] || ($[1] = (S) => k.$emit("close"))
          }, {
            default: h(() => [...$[5] || ($[5] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(Ne, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...$[6] || ($[6] = [
              x(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), j_ = /* @__PURE__ */ xe(G_, [["__scopeId", "data-v-0687d0ce"]]), H_ = { class: "huggingface-tab" }, q_ = {
  key: 0,
  class: "search-section"
}, K_ = { class: "search-header" }, J_ = { class: "search-bar" }, Q_ = {
  key: 1,
  class: "search-results"
}, Y_ = {
  key: 0,
  class: "loading-state"
}, X_ = {
  key: 1,
  class: "error-state"
}, Z_ = {
  key: 2,
  class: "results-list"
}, ek = ["onClick"], tk = { class: "repo-header" }, sk = { class: "repo-id" }, ok = { class: "repo-stats" }, nk = {
  class: "stat",
  title: "Downloads"
}, ak = {
  class: "stat",
  title: "Likes"
}, lk = {
  key: 0,
  class: "repo-desc"
}, ik = {
  key: 1,
  class: "repo-tags"
}, rk = {
  key: 3,
  class: "empty-state"
}, ck = {
  key: 4,
  class: "hint-state"
}, uk = /* @__PURE__ */ be({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = ct(), a = b("search"), l = b(""), r = b([]), c = b(!1), u = b(null), d = b(!1), m = b(null), v = b("main"), p = b(), w = b(), g = b(!1), _ = b(null), k = M(() => {
      if (!u.value) return !1;
      const z = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || z.includes("authentication") || z.includes("unauthorized");
    });
    function $(z) {
      return z >= 1e6 ? `${(z / 1e6).toFixed(1)}M` : z >= 1e3 ? `${(z / 1e3).toFixed(1)}K` : String(z);
    }
    async function S() {
      const z = l.value.trim();
      if (!z) return;
      u.value = null;
      const E = n_(z);
      if (E.kind === "file" && E.repoId && E.path) {
        m.value = E.repoId, v.value = E.revision || "main";
        const H = E.path.split("/");
        H.length > 1 ? p.value = H.slice(0, -1).join("/") : p.value = void 0, w.value = E.path, a.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        m.value = E.repoId, v.value = E.revision || "main", p.value = E.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(z) && !z.includes("://")) {
        m.value = z, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const H = await t(z);
        r.value = H.results, d.value = !0;
      } catch (H) {
        u.value = H instanceof Error ? H.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function T(z) {
      m.value = z, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function P() {
      a.value = "search", m.value = null, p.value = void 0, w.value = void 0;
    }
    async function R() {
      try {
        const z = await o();
        _.value = z.huggingface_token || null;
      } catch (z) {
        console.error("Failed to load config:", z);
      }
    }
    function U() {
      R(), k.value && l.value && S();
    }
    function A() {
      _.value = null;
    }
    return at(R), (z, E) => (n(), i("div", H_, [
      a.value === "search" ? (n(), i("div", q_, [
        s("div", K_, [
          s("div", J_, [
            C(bt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (H) => l.value = H),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: fs(S, ["enter"])
            }, null, 8, ["modelValue"]),
            C(Ne, {
              variant: "primary",
              onClick: S,
              loading: c.value
            }, {
              default: h(() => [...E[6] || (E[6] = [
                x(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          C(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (H) => g.value = !0)
          }, {
            default: h(() => [
              x(f(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", Q_, [
        c.value ? (n(), i("div", Y_, " Searching HuggingFace... ")) : u.value ? (n(), i("div", X_, [
          s("p", null, f(u.value), 1),
          k.value ? (n(), L(Ne, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (H) => g.value = !0)
          }, {
            default: h(() => [...E[7] || (E[7] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", Z_, [
          (n(!0), i(j, null, he(r.value, (H) => (n(), i("div", {
            key: H.repo_id,
            class: "repo-card",
            onClick: (ae) => T(H.repo_id)
          }, [
            s("div", tk, [
              s("span", sk, f(H.repo_id), 1),
              s("div", ok, [
                s("span", nk, [
                  E[8] || (E[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + f($(H.downloads)), 1)
                ]),
                s("span", ak, [
                  E[9] || (E[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + f($(H.likes)), 1)
                ])
              ])
            ]),
            H.description ? (n(), i("p", lk, f(H.description), 1)) : y("", !0),
            H.tags.length > 0 ? (n(), i("div", ik, [
              (n(!0), i(j, null, he(H.tags.slice(0, 5), (ae) => (n(), i("span", {
                key: ae,
                class: "tag"
              }, f(ae), 1))), 128))
            ])) : y("", !0)
          ], 8, ek))), 128))
        ])) : d.value ? (n(), i("div", rk, " No repositories found ")) : (n(), i("div", ck, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), L(R_, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: P,
        onQueue: E[3] || (E[3] = (H) => z.$emit("queue", H)),
        onSelectSource: E[4] || (E[4] = (H) => z.$emit("selectSource", H))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (n(), L(j_, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: E[5] || (E[5] = (H) => g.value = !1),
        onSaved: U,
        onCleared: A
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), nc = /* @__PURE__ */ xe(uk, [["__scopeId", "data-v-6ebbcfa4"]]), dk = { class: "candidate-card" }, fk = { class: "candidate-main" }, mk = { class: "candidate-url" }, vk = { class: "candidate-meta" }, pk = { class: "meta-chip" }, gk = {
  key: 0,
  class: "meta-chip"
}, hk = {
  key: 1,
  class: "meta-chip"
}, yk = {
  key: 0,
  class: "reason-list",
  "aria-label": "Why this link matched"
}, wk = { class: "reason-heading" }, _k = {
  key: 1,
  class: "candidate-context"
}, kk = { class: "candidate-actions" }, bk = /* @__PURE__ */ be({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select", "showMatchInfo"],
  setup(e, { emit: t }) {
    const o = t;
    function a(r) {
      return r === "huggingface" ? "Hugging Face" : r === "civitai" ? "Civitai" : "Direct URL";
    }
    function l(r) {
      return r >= 75 ? "Strong" : r >= 45 ? "Possible" : "Weak";
    }
    return (r, c) => {
      var u;
      return n(), i("article", dk, [
        s("div", fk, [
          s("div", mk, f(e.candidate.url), 1),
          s("div", vk, [
            s("span", pk, [
              c[2] || (c[2] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, f(a(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (n(), i("span", gk, [
              c[3] || (c[3] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, f(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (n(), i("span", hk, [
              c[4] || (c[4] = s("span", { class: "chip-label" }, "Match", -1)),
              s("span", null, f(l(e.candidate.confidence)), 1)
            ])) : y("", !0)
          ]),
          (u = e.candidate.reasons) != null && u.length ? (n(), i("div", yk, [
            s("div", wk, [
              c[5] || (c[5] = s("span", { class: "reason-label" }, "Matched by", -1)),
              C(Sl, {
                size: 14,
                title: "About match reasons",
                onClick: c[0] || (c[0] = (d) => o("showMatchInfo"))
              })
            ]),
            (n(!0), i(j, null, he(e.candidate.reasons, (d) => (n(), i("span", {
              key: d,
              class: "reason-chip"
            }, f(d), 1))), 128))
          ])) : y("", !0),
          e.candidate.context ? (n(), i("details", _k, [
            c[6] || (c[6] = s("summary", null, "Workflow snippet", -1)),
            s("p", null, f(e.candidate.context), 1)
          ])) : y("", !0)
        ]),
        s("div", kk, [
          C(Ne, {
            variant: "primary",
            size: "sm",
            loading: e.loading,
            onClick: c[1] || (c[1] = (d) => o("select", e.candidate.url))
          }, {
            default: h(() => [
              x(f(e.actionLabel), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]);
    };
  }
}), ac = /* @__PURE__ */ xe(bk, [["__scopeId", "data-v-18b56588"]]), $k = { class: "source-url-form" }, Ck = { class: "input-group" }, xk = { key: 0 }, Sk = {
  key: 1,
  class: "description"
}, Ik = { class: "actions" }, Ek = /* @__PURE__ */ be({
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
    const o = e, a = t, l = M(() => o.modelValue.trim()), r = M(() => {
      const d = l.value;
      if (!d) return null;
      try {
        const m = new URL(d);
        if (!["http:", "https:"].includes(m.protocol))
          return "Use an HTTP or HTTPS URL.";
      } catch {
        return "Enter a valid URL.";
      }
      return null;
    }), c = M(() => !!l.value && !r.value && !o.disabled);
    function u() {
      c.value && a("submit", l.value);
    }
    return (d, m) => (n(), i("div", $k, [
      s("div", Ck, [
        e.label ? (n(), i("label", xk, f(e.label), 1)) : y("", !0),
        C(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": m[0] || (m[0] = (v) => a("update:modelValue", v)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (n(), i("p", Sk, f(e.description), 1)) : y("", !0)
      ]),
      st(d.$slots, "default", {}, void 0),
      s("div", Ik, [
        C(Ne, {
          variant: "primary",
          disabled: !c.value,
          loading: e.loading,
          onClick: u
        }, {
          default: h(() => [
            x(f(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), lc = /* @__PURE__ */ xe(Ek, [["__scopeId", "data-v-e2610d45"]]), Tk = { class: "source-picker" }, Mk = {
  key: 0,
  class: "model-summary"
}, Pk = { class: "summary-name" }, Rk = { class: "summary-meta" }, Lk = { key: 0 }, Dk = { key: 1 }, Nk = { key: 2 }, Ok = { class: "tab-bar" }, Uk = ["onClick"], Ak = {
  key: 1,
  class: "tab-content"
}, zk = { class: "section-header-row" }, Fk = {
  key: 0,
  class: "state-message"
}, Vk = {
  key: 1,
  class: "error-message"
}, Bk = {
  key: 2,
  class: "candidate-list"
}, Wk = {
  key: 3,
  class: "state-message"
}, Gk = {
  key: 2,
  class: "tab-content source-browser-content"
}, jk = {
  key: 3,
  class: "tab-content"
}, Hk = { class: "section-header-row" }, qk = /* @__PURE__ */ be({
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
  emits: ["selectSource"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelSourceCandidates: l } = ct(), r = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], c = b("workflow"), u = b([]), d = b(!1), m = b(null), v = b(""), p = b(!1), w = M(() => u.value.filter((_) => _.source === "workflow"));
    async function g() {
      d.value = !0, m.value = null;
      try {
        const _ = await l(o.model.hash);
        u.value = _.candidates;
      } catch (_) {
        m.value = _ instanceof Error ? _.message : "Failed to scan workflows";
      } finally {
        d.value = !1;
      }
    }
    return at(g), (_, k) => (n(), i("div", Tk, [
      e.showModelSummary ? (n(), i("div", Mk, [
        s("div", null, [
          k[6] || (k[6] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Pk, f(e.model.filename), 1)
        ]),
        s("div", Rk, [
          e.model.hash ? (n(), i("span", Lk, "quick hash " + f(e.model.hash), 1)) : y("", !0),
          e.model.blake3 ? (n(), i("span", Dk, "blake3 " + f(e.model.blake3), 1)) : y("", !0),
          e.model.sha256 ? (n(), i("span", Nk, "sha256 " + f(e.model.sha256), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", Ok, [
        (n(), i(j, null, he(r, ($) => s("button", {
          key: $.id,
          class: Ve(["tab-btn", { active: c.value === $.id }]),
          onClick: (S) => c.value = $.id
        }, f($.label), 11, Uk)), 64))
      ]),
      c.value === "workflow" ? (n(), i("section", Ak, [
        s("div", zk, [
          k[8] || (k[8] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          C(Ne, {
            variant: "secondary",
            size: "sm",
            loading: d.value,
            onClick: g
          }, {
            default: h(() => [...k[7] || (k[7] = [
              x(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        d.value ? (n(), i("div", Fk, "Scanning workflows...")) : m.value ? (n(), i("div", Vk, f(m.value), 1)) : w.value.length ? (n(), i("div", Bk, [
          (n(!0), i(j, null, he(w.value, ($) => (n(), L(ac, {
            key: `${$.workflow}:${$.url}`,
            candidate: $,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === $.url,
            onSelect: k[0] || (k[0] = (S) => a("selectSource", S)),
            onShowMatchInfo: k[1] || (k[1] = (S) => p.value = !0)
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (n(), i("div", Wk, " No likely workflow links found. Try direct URL for now. "))
      ])) : c.value === "huggingface" ? (n(), i("section", Gk, [
        C(nc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          onSelectSource: k[2] || (k[2] = ($) => a("selectSource", $))
        }, null, 8, ["action-label"])
      ])) : c.value === "direct" ? (n(), i("section", jk, [
        s("div", Hk, [
          s("div", null, [
            k[9] || (k[9] = s("h4", null, "Direct URL", -1)),
            s("p", null, f(e.directDescription), 1)
          ])
        ]),
        C(lc, {
          modelValue: v.value,
          "onUpdate:modelValue": k[3] || (k[3] = ($) => v.value = $),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === v.value.trim(),
          onSubmit: k[4] || (k[4] = ($) => a("selectSource", $))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0),
      C(Xt, {
        show: p.value,
        title: "About Match Reasons",
        "max-width": "460px",
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: k[5] || (k[5] = ($) => p.value = !1)
      }, {
        content: h(() => [...k[10] || (k[10] = [
          s("ul", { class: "match-info-list" }, [
            s("li", null, [
              s("strong", null, "Filename match"),
              x(" means the link or nearby workflow text includes the exact model filename.")
            ]),
            s("li", null, [
              s("strong", null, "Model name match"),
              x(" means the link or nearby workflow text includes the filename without its extension.")
            ]),
            s("li", null, [
              s("strong", null, "Hash match"),
              x(" means a known quick, Blake3, or SHA256 hash appears near the link.")
            ]),
            s("li", null, [
              s("strong", null, "Category nearby"),
              x(" means the workflow text near the link mentions the model folder/category.")
            ]),
            s("li", null, [
              s("strong", null, "Model file URL"),
              x(" means the URL itself ends like a model file.")
            ]),
            s("li", null, [
              s("strong", null, "Known model host"),
              x(" means the URL points at a recognized model host such as Hugging Face or Civitai.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show", "overlay-z-index"])
    ]));
  }
}), Kk = /* @__PURE__ */ xe(qk, [["__scopeId", "data-v-41fed60c"]]), Jk = {
  key: 0,
  class: "error-message"
}, Qk = /* @__PURE__ */ be({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const o = e, a = t, { addModelSource: l } = ct(), r = b(null), c = b(null);
    async function u(d) {
      if (!(!d || !o.model.hash)) {
        r.value = d, c.value = null;
        try {
          await l(o.model.hash, d), a("saved"), a("close");
        } catch (m) {
          c.value = m instanceof Error ? m.message : "Failed to save source";
        } finally {
          r.value = null;
        }
      }
    }
    return (d, m) => (n(), L(It, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: m[1] || (m[1] = (v) => a("close"))
    }, {
      body: h(() => [
        C(Kk, {
          model: e.model,
          "loading-url": r.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: u
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        c.value ? (n(), i("p", Jk, f(c.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        C(Ne, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (v) => a("close"))
        }, {
          default: h(() => [...m[2] || (m[2] = [
            x(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), Yk = /* @__PURE__ */ xe(Qk, [["__scopeId", "data-v-7442c325"]]), Xk = {
  key: 0,
  class: "model-details"
}, Zk = { class: "detail-section" }, eb = { class: "detail-row" }, tb = { class: "detail-value mono" }, sb = { class: "detail-row" }, ob = { class: "detail-value mono" }, nb = { class: "detail-row" }, ab = { class: "detail-value mono" }, lb = { class: "detail-row" }, ib = { class: "detail-value" }, rb = { class: "detail-row" }, cb = { class: "detail-value" }, ub = { class: "detail-row" }, db = { class: "detail-value" }, fb = { class: "detail-section" }, mb = { class: "section-header" }, vb = {
  key: 0,
  class: "locations-list"
}, pb = { class: "location-path mono" }, gb = {
  key: 0,
  class: "location-modified"
}, hb = ["onClick"], yb = {
  key: 1,
  class: "empty-state"
}, wb = { class: "detail-section" }, _b = { class: "section-header-row" }, kb = { class: "section-header" }, bb = {
  key: 0,
  class: "sources-list"
}, $b = { class: "source-type" }, Cb = ["href"], xb = ["disabled", "onClick"], Sb = {
  key: 1,
  class: "empty-state"
}, Ib = {
  key: 2,
  class: "source-error"
}, Eb = {
  key: 3,
  class: "source-success"
}, Tb = /* @__PURE__ */ be({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelDetails: l, removeModelSource: r, openFileLocation: c } = ct(), u = b(null), d = b(!0), m = b(null), v = b(null), p = b(null), w = b(null), g = b(!1), _ = b(null);
    let k = null;
    function $(z, E = "success", H = 2e3) {
      k && clearTimeout(k), _.value = { message: z, type: E }, k = setTimeout(() => {
        _.value = null;
      }, H);
    }
    function S(z) {
      if (!z) return "Unknown";
      const E = 1024 * 1024 * 1024, H = 1024 * 1024;
      return z >= E ? `${(z / E).toFixed(1)} GB` : z >= H ? `${(z / H).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function T(z) {
      navigator.clipboard.writeText(z), $("Copied to clipboard!");
    }
    async function P(z) {
      try {
        await c(z), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function R(z) {
      if (u.value) {
        v.value = z, p.value = null, w.value = null;
        try {
          await r(u.value.hash, z), $("Source removed"), await A();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          v.value = null;
        }
      }
    }
    async function U() {
      w.value = "Source added successfully!", g.value = !1, await A(), a("sourceSaved");
    }
    async function A() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.identifier);
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return at(A), (z, E) => {
      var H;
      return n(), i(j, null, [
        C(It, {
          title: `Model Details: ${((H = u.value) == null ? void 0 : H.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: E[5] || (E[5] = (ae) => z.$emit("close"))
        }, {
          body: h(() => {
            var ae, de, ce, ke;
            return [
              u.value ? (n(), i("div", Xk, [
                s("section", Zk, [
                  s("div", eb, [
                    E[7] || (E[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", tb, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (Q) => T(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", sb, [
                    E[8] || (E[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", ob, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (Q) => T(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", nb, [
                    E[9] || (E[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", ab, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (Q) => T(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", lb, [
                    E[10] || (E[10] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", ib, f(S(u.value.size)), 1)
                  ]),
                  s("div", rb, [
                    E[11] || (E[11] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", cb, f(u.value.category), 1)
                  ]),
                  s("div", ub, [
                    E[12] || (E[12] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", db, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", fb, [
                  s("h4", mb, "Locations (" + f(((ae = u.value.locations) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (de = u.value.locations) != null && de.length ? (n(), i("div", vb, [
                    (n(!0), i(j, null, he(u.value.locations, (Q, G) => (n(), i("div", {
                      key: G,
                      class: "location-item"
                    }, [
                      s("span", pb, f(Q.path), 1),
                      Q.modified ? (n(), i("span", gb, "Modified: " + f(Q.modified), 1)) : y("", !0),
                      Q.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (J) => P(Q.path)
                      }, " Open File Location ", 8, hb)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", yb, "No locations found"))
                ]),
                s("section", wb, [
                  s("div", _b, [
                    s("h4", kb, "Download Sources (" + f(((ce = u.value.sources) == null ? void 0 : ce.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: E[3] || (E[3] = (Q) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (ke = u.value.sources) != null && ke.length ? (n(), i("div", bb, [
                    (n(!0), i(j, null, he(u.value.sources, (Q, G) => (n(), i("div", {
                      key: G,
                      class: "source-item"
                    }, [
                      s("span", $b, f(Q.type) + ":", 1),
                      s("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Q.url), 9, Cb),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: v.value === Q.url,
                        onClick: (J) => R(Q.url)
                      }, f(v.value === Q.url ? "..." : "×"), 9, xb)
                    ]))), 128))
                  ])) : (n(), i("div", Sb, " No download sources configured ")),
                  p.value ? (n(), i("p", Ib, f(p.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", Eb, f(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (ae) => z.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (n(), L(Lt, { to: "body" }, [
          _.value ? (n(), i("div", {
            key: 0,
            class: Ve(["toast", _.value.type])
          }, f(_.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (n(), L(Yk, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: E[6] || (E[6] = (ae) => g.value = !1),
          onSaved: U
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), Il = /* @__PURE__ */ xe(Tb, [["__scopeId", "data-v-eea15e7f"]]), Mb = { class: "workflow-links-tab" }, Pb = { class: "section-header-row" }, Rb = {
  key: 0,
  class: "state-message"
}, Lb = {
  key: 1,
  class: "error-message"
}, Db = {
  key: 2,
  class: "candidate-list"
}, Nb = {
  key: 3,
  class: "state-message"
}, Ob = /* @__PURE__ */ be({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: a } = ct(), l = b([]), r = b(!1), c = b(null), u = b(!1), d = M(() => l.value.filter((v) => v.source === "workflow"));
    async function m() {
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
    return at(m), (v, p) => (n(), i("div", Mb, [
      s("div", Pb, [
        p[4] || (p[4] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        C(Ne, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: m
        }, {
          default: h(() => [...p[3] || (p[3] = [
            x(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (n(), i("div", Rb, "Scanning workflows...")) : c.value ? (n(), i("div", Lb, f(c.value), 1)) : d.value.length ? (n(), i("div", Db, [
        (n(!0), i(j, null, he(d.value, (w) => (n(), L(ac, {
          key: `${w.workflow}:${w.url}`,
          candidate: w,
          "action-label": "Use URL",
          onSelect: p[0] || (p[0] = (g) => o("selectUrl", g)),
          onShowMatchInfo: p[1] || (p[1] = (g) => u.value = !0)
        }, null, 8, ["candidate"]))), 128))
      ])) : (n(), i("div", Nb, " No likely workflow links found. Try Hugging Face or Direct URL. ")),
      C(Xt, {
        show: u.value,
        title: "About Match Reasons",
        "max-width": "460px",
        onClose: p[2] || (p[2] = (w) => u.value = !1)
      }, {
        content: h(() => [...p[5] || (p[5] = [
          s("ul", { class: "match-info-list" }, [
            s("li", null, [
              s("strong", null, "Filename match"),
              x(" means the link or nearby workflow text includes the exact model filename.")
            ]),
            s("li", null, [
              s("strong", null, "Model name match"),
              x(" means the link or nearby workflow text includes the filename without its extension.")
            ]),
            s("li", null, [
              s("strong", null, "Hash match"),
              x(" means a known quick, Blake3, or SHA256 hash appears near the link.")
            ]),
            s("li", null, [
              s("strong", null, "Category nearby"),
              x(" means the workflow text near the link mentions the model folder/category.")
            ]),
            s("li", null, [
              s("strong", null, "Model file URL"),
              x(" means the URL itself ends like a model file.")
            ]),
            s("li", null, [
              s("strong", null, "Known model host"),
              x(" means the URL points at a recognized model host such as Hugging Face or Civitai.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}), Ub = /* @__PURE__ */ xe(Ob, [["__scopeId", "data-v-1be75a55"]]), Ab = { class: "civitai-tab" }, zb = /* @__PURE__ */ be({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (n(), i("div", Ab, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Fb = /* @__PURE__ */ xe(zb, [["__scopeId", "data-v-44948051"]]), Vb = { class: "direct-url-tab" }, Bb = {
  key: 0,
  class: "error"
}, Wb = /* @__PURE__ */ be({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = b(""), r = b("");
    wt(() => o.initialUrl, (m) => {
      m && m !== l.value && (l.value = m);
    }, { immediate: !0 });
    const c = M(() => {
      const m = l.value.trim();
      if (!m) return "";
      try {
        const v = new URL(m);
        return decodeURIComponent(v.pathname).replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      } catch {
        return m.split("?", 1)[0].replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      }
    }), u = (m) => {
      if (!r.value.trim() || !c.value) return;
      const v = d(r.value, c.value);
      a("queue", [{
        url: m,
        targetPath: v,
        filename: c.value
      }]), l.value = "";
    };
    function d(m, v) {
      return `${m.replace(/\/+$/, "")}/${v.replace(/^\/+/, "")}`;
    }
    return (m, v) => (n(), i("div", Vb, [
      C(lc, {
        modelValue: l.value,
        "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          C(oc, {
            modelValue: r.value,
            "onUpdate:modelValue": v[0] || (v[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (n(), i("p", Bb, " Could not infer a filename from this URL. ")) : y("", !0),
          v[2] || (v[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), Gb = /* @__PURE__ */ xe(Wb, [["__scopeId", "data-v-a6d21f27"]]), jb = { class: "download-modal" }, Hb = { class: "tab-bar" }, qb = ["onClick"], Kb = { class: "tab-content" }, Jb = /* @__PURE__ */ be({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: a } = Ro(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = b("workflow"), c = b("");
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
    function m(p) {
      c.value = p, r.value = "direct";
    }
    function v() {
      o("close");
    }
    return (p, w) => e.show ? (n(), L(It, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: v
    }, {
      body: h(() => [
        s("div", jb, [
          s("div", Hb, [
            (n(), i(j, null, he(l, (g) => s("button", {
              key: g.id,
              class: Ve(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, qb)), 64))
          ]),
          s("div", Kb, [
            r.value === "workflow" ? (n(), L(Ub, {
              key: 0,
              onSelectUrl: m
            })) : r.value === "huggingface" ? (n(), L(nc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (n(), L(Fb, { key: 2 })) : r.value === "direct" ? (n(), L(Gb, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        C(Ne, {
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
}), ic = /* @__PURE__ */ xe(Jb, [["__scopeId", "data-v-de2e4fac"]]), Qb = /* @__PURE__ */ be({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: a, getStatus: l } = ct(), r = b([]), c = b([]), u = b("production"), d = b(!1), m = b(null), v = b(""), p = b(!1), w = b(null), g = b(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const k = M(
      () => r.value.reduce((E, H) => E + (H.size || 0), 0)
    ), $ = M(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((H) => H.filename.toLowerCase().includes(E));
    }), S = M(() => {
      if (!v.value.trim()) return c.value;
      const E = v.value.toLowerCase();
      return c.value.filter((H) => H.filename.toLowerCase().includes(E));
    }), T = M(() => {
      const E = {};
      for (const ae of $.value) {
        const de = ae.type || "other";
        E[de] || (E[de] = []), E[de].push(ae);
      }
      const H = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([ae], [de]) => {
        const ce = H.indexOf(ae), ke = H.indexOf(de);
        return ce >= 0 && ke >= 0 ? ce - ke : ce >= 0 ? -1 : ke >= 0 ? 1 : ae.localeCompare(de);
      }).map(([ae, de]) => ({ type: ae, models: de }));
    });
    function P(E) {
      if (!E) return "Unknown";
      const H = E / (1024 * 1024);
      return H >= 1024 ? `${(H / 1024).toFixed(1)} GB` : `${H.toFixed(0)} MB`;
    }
    function R(E) {
      w.value = E.hash || E.filename;
    }
    function U(E) {
      o("navigate", "model-index");
    }
    function A(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function z() {
      d.value = !0, m.value = null;
      try {
        const E = await a();
        r.value = E, c.value = [];
        const H = await l();
        u.value = H.environment || "production";
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return at(z), (E, H) => (n(), i(j, null, [
      C(At, null, {
        header: h(() => [
          C(zt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: H[1] || (H[1] = (ae) => p.value = !0)
          }, {
            actions: h(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[0] || (H[0] = (ae) => g.value = !0)
              }, {
                default: h(() => [...H[6] || (H[6] = [
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
          C(io, {
            modelValue: v.value,
            "onUpdate:modelValue": H[2] || (H[2] = (ae) => v.value = ae),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (n(), L(Ss, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length ? (n(), L(ra, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + f(r.value.length) + " models • " + f(P(k.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(j, null, he(T.value, (ae) => (n(), L(St, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(ae.models, (de) => (n(), L(Vt, {
                  key: de.hash || de.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...H[7] || (H[7] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(f(de.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(f(P(de.size)), 1)
                  ]),
                  details: h(() => [
                    C(_t, {
                      label: "Used by:",
                      value: (de.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(_t, {
                      label: "Path:",
                      value: de.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ce) => R(de)
                    }, {
                      default: h(() => [...H[8] || (H[8] = [
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
            S.value.length ? (n(), L(St, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(S.value, (ae) => (n(), L(Vt, {
                  key: ae.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...H[9] || (H[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(f(ae.filename), 1)
                  ]),
                  subtitle: h(() => [...H[10] || (H[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var de;
                    return [
                      C(_t, {
                        label: "Required by:",
                        value: ((de = ae.workflow_names) == null ? void 0 : de.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (de) => A(ae.filename)
                    }, {
                      default: h(() => [...H[11] || (H[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (de) => U(ae.filename)
                    }, {
                      default: h(() => [...H[12] || (H[12] = [
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
            !$.value.length && !S.value.length ? (n(), L(cs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(Xt, {
        show: p.value,
        title: "About Environment Models",
        onClose: H[3] || (H[3] = (ae) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            H[13] || (H[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + f(u.value) + '"', 1),
            H[14] || (H[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          C(Te, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...H[15] || (H[15] = [
              x(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(Il, {
        key: 0,
        identifier: w.value,
        onClose: H[4] || (H[4] = (ae) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      C(ic, {
        show: g.value,
        onClose: H[5] || (H[5] = (ae) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Yb = /* @__PURE__ */ xe(Qb, [["__scopeId", "data-v-af3ca736"]]), Xb = {
  key: 0,
  class: "indexing-progress"
}, Zb = { class: "progress-info" }, e2 = { class: "progress-label" }, t2 = { class: "progress-count" }, s2 = { class: "progress-bar" }, o2 = { class: "modal-content" }, n2 = { class: "modal-header" }, a2 = { class: "modal-body" }, l2 = { class: "input-group" }, i2 = { class: "current-path" }, r2 = { class: "input-group" }, c2 = { class: "modal-footer" }, u2 = /* @__PURE__ */ be({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), c = t, u = b([]), d = b(!1), m = b(!1), v = b(null), p = b(""), w = b(!1), g = b(null), _ = b(!1), k = b(null), $ = b(""), S = b(!1), T = b(!1), P = b(null), R = M(
      () => u.value.reduce((ke, Q) => ke + (Q.size || 0), 0)
    ), U = M(() => {
      if (!p.value.trim()) return u.value;
      const ke = p.value.toLowerCase();
      return u.value.filter((Q) => {
        const G = Q, J = Q.sha256 || G.sha256_hash || "";
        return Q.filename.toLowerCase().includes(ke) || J.toLowerCase().includes(ke);
      });
    }), A = M(() => {
      const ke = {};
      for (const G of U.value) {
        const J = G.type || "other";
        ke[J] || (ke[J] = []), ke[J].push(G);
      }
      const Q = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ke).sort(([G], [J]) => {
        const Le = Q.indexOf(G), Z = Q.indexOf(J);
        return Le >= 0 && Z >= 0 ? Le - Z : Le >= 0 ? -1 : Z >= 0 ? 1 : G.localeCompare(J);
      }).map(([G, J]) => ({ type: G, models: J }));
    });
    function z(ke) {
      if (!ke) return "Unknown";
      const Q = 1024 * 1024 * 1024, G = 1024 * 1024;
      return ke >= Q ? `${(ke / Q).toFixed(1)} GB` : ke >= G ? `${(ke / G).toFixed(0)} MB` : `${(ke / 1024).toFixed(0)} KB`;
    }
    function E(ke) {
      g.value = ke.hash || ke.filename;
    }
    async function H() {
      m.value = !0, v.value = null;
      try {
        const ke = await a();
        await de(), ke.changes > 0 && console.log(`Scan complete: ${ke.changes} changes detected`);
      } catch (ke) {
        v.value = ke instanceof Error ? ke.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function ae() {
      if ($.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const ke = await r($.value.trim());
          k.value = ke.path, _.value = !1, $.value = "", await de(), console.log(`Directory changed: ${ke.models_indexed} models indexed`), c("refresh");
        } catch (ke) {
          v.value = ke instanceof Error ? ke.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function de() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (ke) {
        v.value = ke instanceof Error ? ke.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function ce() {
      try {
        const ke = await l();
        k.value = ke.path;
      } catch {
      }
    }
    return at(() => {
      de(), ce();
    }), (ke, Q) => (n(), i(j, null, [
      C(At, null, {
        header: h(() => [
          C(zt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: Q[2] || (Q[2] = (G) => w.value = !0)
          }, {
            actions: h(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: H
              }, {
                default: h(() => [
                  x(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: Q[0] || (Q[0] = (G) => _.value = !0)
              }, {
                default: h(() => [...Q[11] || (Q[11] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: Q[1] || (Q[1] = (G) => T.value = !0)
              }, {
                default: h(() => [...Q[12] || (Q[12] = [
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
          P.value ? (n(), i("div", Xb, [
            s("div", Zb, [
              s("span", e2, f(P.value.message), 1),
              s("span", t2, f(P.value.current) + "/" + f(P.value.total), 1)
            ]),
            s("div", s2, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${P.value.current / P.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C(io, {
            modelValue: p.value,
            "onUpdate:modelValue": Q[3] || (Q[3] = (G) => p.value = G),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || P.value ? (n(), L(xs, {
            key: 0,
            message: P.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), L(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            u.value.length ? (n(), L(ra, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + f(u.value.length) + " models • " + f(z(R.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(j, null, he(A.value, (G) => (n(), L(St, {
              key: G.type,
              title: G.type.toUpperCase(),
              count: G.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(G.models, (J) => (n(), L(Vt, {
                  key: J.sha256 || J.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...Q[13] || (Q[13] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(f(J.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(f(z(J.size)), 1)
                  ]),
                  details: h(() => [
                    C(_t, {
                      label: "Hash:",
                      value: J.hash ? J.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Le) => E(J)
                    }, {
                      default: h(() => [...Q[14] || (Q[14] = [
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
            U.value.length ? y("", !0) : (n(), L(cs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(Xt, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: Q[4] || (Q[4] = (G) => w.value = !1)
      }, {
        content: h(() => [...Q[15] || (Q[15] = [
          s("p", null, [
            x(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            x(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (n(), L(Il, {
        key: 0,
        identifier: g.value,
        onClose: Q[5] || (Q[5] = (G) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), L(Lt, { to: "body" }, [
        _.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: Q[9] || (Q[9] = vt((G) => _.value = !1, ["self"]))
        }, [
          s("div", o2, [
            s("div", n2, [
              Q[16] || (Q[16] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: Q[6] || (Q[6] = (G) => _.value = !1)
              }, "✕")
            ]),
            s("div", a2, [
              s("div", l2, [
                Q[17] || (Q[17] = s("label", null, "Current Directory", -1)),
                s("code", i2, f(k.value || "Not set"), 1)
              ]),
              s("div", r2, [
                Q[18] || (Q[18] = s("label", null, "New Directory Path", -1)),
                C(bt, {
                  modelValue: $.value,
                  "onUpdate:modelValue": Q[7] || (Q[7] = (G) => $.value = G),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              Q[19] || (Q[19] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", c2, [
              C(Ne, {
                variant: "secondary",
                onClick: Q[8] || (Q[8] = (G) => _.value = !1)
              }, {
                default: h(() => [...Q[20] || (Q[20] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Ne, {
                variant: "primary",
                disabled: !$.value.trim() || S.value,
                loading: S.value,
                onClick: ae
              }, {
                default: h(() => [
                  x(f(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      C(ic, {
        show: T.value,
        onClose: Q[10] || (Q[10] = (G) => T.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), d2 = /* @__PURE__ */ xe(u2, [["__scopeId", "data-v-3705114c"]]), f2 = { class: "node-details" }, m2 = { class: "status-row" }, v2 = {
  key: 0,
  class: "detail-row"
}, p2 = { class: "value" }, g2 = { class: "detail-row" }, h2 = { class: "value" }, y2 = {
  key: 1,
  class: "detail-row"
}, w2 = { class: "value mono" }, _2 = {
  key: 2,
  class: "detail-row"
}, k2 = ["href"], b2 = {
  key: 3,
  class: "detail-row"
}, $2 = { class: "value mono small" }, C2 = { class: "detail-row" }, x2 = {
  key: 0,
  class: "value"
}, S2 = {
  key: 1,
  class: "workflow-list"
}, I2 = /* @__PURE__ */ be({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = M(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = M(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = M(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), L(It, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => a("close"))
    }, {
      body: h(() => [
        s("div", f2, [
          s("div", m2, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ve(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", v2, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", p2, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          s("div", g2, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", h2, f(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", y2, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", w2, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", _2, [
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
            ], 8, k2)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", b2, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", $2, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", C2, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", x2, " Not used in any workflows ")) : (n(), i("div", S2, [
              (n(!0), i(j, null, he(e.node.used_in_workflows, (m) => (n(), i("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        C(Ne, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => a("close"))
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
}), E2 = /* @__PURE__ */ xe(I2, [["__scopeId", "data-v-b342f626"]]), T2 = { class: "dialog-message" }, M2 = {
  key: 0,
  class: "dialog-details"
}, P2 = {
  key: 1,
  class: "dialog-warning"
}, R2 = /* @__PURE__ */ be({
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
    return (t, o) => (n(), L(It, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", T2, f(e.message), 1),
        e.details && e.details.length ? (n(), i("div", M2, [
          (n(!0), i(j, null, he(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", P2, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Ne, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            x(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), L(Ne, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            x(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [
            x(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), El = /* @__PURE__ */ xe(R2, [["__scopeId", "data-v-3670b9f5"]]), L2 = { class: "mismatch-warning" }, D2 = { class: "version-mismatch" }, N2 = { class: "version-actual" }, O2 = { class: "version-expected" }, U2 = { style: { color: "var(--cg-color-warning)" } }, A2 = { style: { color: "var(--cg-color-warning)" } }, z2 = {
  key: 0,
  class: "community-status-badge"
}, F2 = { key: 0 }, V2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, B2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, W2 = { class: "criticality-control" }, G2 = ["value", "disabled", "onChange"], j2 = /* @__PURE__ */ be({
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
      updateNodeCriticality: m
    } = ct(), v = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = b(!1), w = b(null), g = b(""), _ = b(!1), k = b(null), $ = b(/* @__PURE__ */ new Set()), S = b(/* @__PURE__ */ new Set()), T = b(null), P = M(() => {
      if (!g.value.trim()) return v.value.nodes;
      const fe = g.value.toLowerCase();
      return v.value.nodes.filter(
        (le) => {
          var I, V;
          return le.name.toLowerCase().includes(fe) || ((I = le.description) == null ? void 0 : I.toLowerCase().includes(fe)) || ((V = le.repository) == null ? void 0 : V.toLowerCase().includes(fe));
        }
      );
    }), R = M(
      () => P.value.filter((fe) => fe.installed && fe.tracked)
    ), U = M(
      () => P.value.filter((fe) => !fe.installed && fe.tracked && !fe.issue_type)
    ), A = M(
      () => P.value.filter((fe) => fe.installed && !fe.tracked)
    ), z = M(
      () => P.value.filter((fe) => fe.issue_type === "version_gated")
    ), E = M(
      () => P.value.filter((fe) => fe.issue_type === "uninstallable")
    );
    function H(fe) {
      return fe.registry_id || fe.name;
    }
    function ae(fe) {
      return $.value.has(H(fe));
    }
    async function de(fe, le) {
      const I = fe.registry_id;
      if (!I) {
        a("toast", `Node "${fe.name}" has no package id for install`, "warning");
        return;
      }
      if (le === "git" && !fe.repository) {
        a("toast", `Node "${fe.name}" has no repository URL for git install`, "warning");
        return;
      }
      const V = {
        id: I,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      le === "git" && fe.repository && (V.repository = fe.repository, V.install_source = "git"), await d(V), $.value.add(H(fe)), a("toast", `✓ Queued install for "${fe.name}"`, "success");
    }
    function ce(fe) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[fe] || fe;
    }
    const ke = M(() => o.versionMismatches.length > 0);
    function Q(fe) {
      return !fe.used_in_workflows || fe.used_in_workflows.length === 0 ? "Not used in any workflows" : fe.used_in_workflows.length === 1 ? fe.used_in_workflows[0] : `${fe.used_in_workflows.length} workflows`;
    }
    function G(fe) {
      return fe.criticality === "optional" ? "optional" : "required";
    }
    function J(fe) {
      return S.value.has(fe.name);
    }
    async function Le(fe, le) {
      const I = le.target, V = G(fe), ie = I.value;
      if (ie !== V) {
        S.value = new Set(S.value).add(fe.name), fe.criticality = ie;
        try {
          const Ie = await m(fe.name, ie);
          if (Ie.status !== "success") {
            fe.criticality = V, a("toast", Ie.message || `Failed to update "${fe.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${fe.name}" as ${ie}`, "success");
        } catch (Ie) {
          fe.criticality = V, I.value = V, a("toast", `Error updating criticality: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
        } finally {
          const Ie = new Set(S.value);
          Ie.delete(fe.name), S.value = Ie;
        }
      }
    }
    function Z(fe) {
      return fe.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ye(fe) {
      return fe.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function O(fe) {
      return fe.registry_id ? `Community-mapped package: ${fe.registry_id}` : "Community-mapped package";
    }
    function me(fe) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Re(fe) {
      k.value = fe;
    }
    function ve() {
      a("open-node-manager");
    }
    function ee(fe) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${fe}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const le = await r(fe);
            le.status === "success" ? (a("toast", `✓ Node "${fe}" tracked as development`, "success"), await Me()) : a("toast", `Failed to track node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error tracking node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Y(fe) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${fe}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const le = await u(fe);
            le.status === "success" ? (a("toast", `✓ Node "${fe}" removed`, "success"), await Me()) : a("toast", `Failed to remove node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error removing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function we(fe) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${fe}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const le = await c(fe);
            le.status === "success" ? (a("toast", `✓ Node "${fe}" installed`, "success"), await Me()) : a("toast", `Failed to install node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error installing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function te(fe) {
      T.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${fe.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0, await de(fe, "registry");
          } catch (le) {
            a("toast", `Error queueing install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function oe(fe) {
      T.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${fe.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0, await de(fe, "git");
          } catch (le) {
            a("toast", `Error queueing git install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Me() {
      p.value = !0, w.value = null;
      try {
        v.value = await l();
      } catch (fe) {
        w.value = fe instanceof Error ? fe.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return at(Me), (fe, le) => (n(), i(j, null, [
      C(At, null, {
        header: h(() => [
          C(zt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (I) => _.value = !0)
          }, {
            actions: h(() => [
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: ve
              }, {
                default: h(() => [...le[7] || (le[7] = [
                  x(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(io, {
            modelValue: g.value,
            "onUpdate:modelValue": le[1] || (le[1] = (I) => g.value = I),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (n(), L(xs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (n(), L(Ss, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Me
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            ke.value ? (n(), L(St, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", L2, [
                  le[8] || (le[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(j, null, he(e.versionMismatches, (I) => (n(), L(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[9] || (le[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", D2, [
                      s("span", N2, f(I.actual), 1),
                      le[10] || (le[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", O2, f(I.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "warning",
                      size: "sm",
                      onClick: le[2] || (le[2] = (V) => a("repair-environment"))
                    }, {
                      default: h(() => [...le[11] || (le[11] = [
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
            z.value.length ? (n(), L(St, {
              key: 1,
              title: "BLOCKED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(z.value, (I) => (n(), L(Vt, {
                  key: `blocked-${I.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[12] || (le[12] = [
                    x("⛔", -1)
                  ])]),
                  title: h(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", U2, f(Z(I)), 1)
                  ]),
                  details: h(() => [
                    C(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || ye(I)
                    }, null, 8, ["value"]),
                    C(_t, {
                      label: "Used by:",
                      value: Q(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Re(I)
                    }, {
                      default: h(() => [...le[13] || (le[13] = [
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
            E.value.length ? (n(), L(St, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(E.value, (I) => (n(), L(Vt, {
                  key: `community-${I.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[14] || (le[14] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", A2, f(O(I)), 1)
                  ]),
                  details: h(() => [
                    C(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || me(I)
                    }, null, 8, ["value"]),
                    C(_t, {
                      label: "Used by:",
                      value: Q(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Re(I)
                    }, {
                      default: h(() => [...le[15] || (le[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ae(I) ? (n(), i("span", z2, "Queued")) : (n(), i(j, { key: 1 }, [
                      I.registry_id ? (n(), L(Te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (V) => te(I)
                      }, {
                        default: h(() => [...le[16] || (le[16] = [
                          x(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      I.repository ? (n(), L(Te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (V) => oe(I)
                      }, {
                        default: h(() => [...le[17] || (le[17] = [
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
            A.value.length ? (n(), L(St, {
              key: 3,
              title: "UNTRACKED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(A.value, (I) => (n(), L(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[18] || (le[18] = [
                    x("?", -1)
                  ])]),
                  title: h(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: h(() => [...le[19] || (le[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    C(_t, {
                      label: "Used by:",
                      value: Q(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Re(I)
                    }, {
                      default: h(() => [...le[20] || (le[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => ee(I.name)
                    }, {
                      default: h(() => [...le[21] || (le[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (V) => Y(I.name)
                    }, {
                      default: h(() => [...le[22] || (le[22] = [
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
            R.value.length ? (n(), L(St, {
              key: 4,
              title: "INSTALLED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(R.value, (I) => (n(), L(Vt, {
                  key: I.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    x(f(I.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    I.version ? (n(), i("span", F2, f(I.source === "development" ? "" : "v") + f(I.version), 1)) : (n(), i("span", V2, "version unknown")),
                    s("span", B2, " • " + f(ce(I.source)), 1)
                  ]),
                  details: h(() => [
                    C(_t, {
                      label: "Used by:",
                      value: Q(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Re(I)
                    }, {
                      default: h(() => [...le[23] || (le[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", W2, [
                      le[25] || (le[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: G(I),
                        disabled: J(I),
                        onChange: (V) => Le(I, V)
                      }, [...le[24] || (le[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, G2)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            U.value.length ? (n(), L(St, {
              key: 5,
              title: "MISSING",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(U.value, (I) => (n(), L(Vt, {
                  key: I.name,
                  status: "missing"
                }, {
                  icon: h(() => [...le[26] || (le[26] = [
                    x("!", -1)
                  ])]),
                  title: h(() => [
                    x(f(I.name), 1)
                  ]),
                  subtitle: h(() => [...le[27] || (le[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    C(_t, {
                      label: "Required by:",
                      value: Q(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Re(I)
                    }, {
                      default: h(() => [...le[28] || (le[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => we(I.name)
                    }, {
                      default: h(() => [...le[29] || (le[29] = [
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
            !R.value.length && !U.value.length && !z.value.length && !E.value.length && !A.value.length ? (n(), L(cs, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(Xt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: le[4] || (le[4] = (I) => _.value = !1)
      }, {
        content: h(() => [...le[30] || (le[30] = [
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
          C(Te, {
            variant: "primary",
            onClick: le[3] || (le[3] = (I) => _.value = !1)
          }, {
            default: h(() => [...le[31] || (le[31] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (n(), L(E2, {
        key: 0,
        node: k.value,
        onClose: le[5] || (le[5] = (I) => k.value = null)
      }, null, 8, ["node"])) : y("", !0),
      T.value ? (n(), L(El, {
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
}), H2 = /* @__PURE__ */ xe(j2, [["__scopeId", "data-v-edfa1c86"]]), q2 = { class: "setting-info" }, K2 = { class: "setting-label" }, J2 = {
  key: 0,
  class: "required-marker"
}, Q2 = {
  key: 0,
  class: "setting-description"
}, Y2 = { class: "setting-control" }, X2 = /* @__PURE__ */ be({
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
      s("div", q2, [
        s("div", K2, [
          x(f(e.label) + " ", 1),
          e.required ? (n(), i("span", J2, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", Q2, f(e.description), 1)) : y("", !0)
      ]),
      s("div", Y2, [
        st(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), mo = /* @__PURE__ */ xe(X2, [["__scopeId", "data-v-3e106b1c"]]), Z2 = ["type", "value", "placeholder", "disabled"], e$ = /* @__PURE__ */ be({
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
    const a = e, l = o, r = b(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return at(() => {
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
      class: Ve(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = fs((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = fs((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, Z2));
  }
}), ho = /* @__PURE__ */ xe(e$, [["__scopeId", "data-v-0380d08f"]]), t$ = { class: "toggle" }, s$ = ["checked", "disabled"], o$ = /* @__PURE__ */ be({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", t$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, s$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), xi = /* @__PURE__ */ xe(o$, [["__scopeId", "data-v-71c0f550"]]), Ba = "ComfyGit.Deploy.GitHubPAT";
function rc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function n$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function a$() {
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
  function a() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: rc,
    isRemoteHttps: n$
  };
}
const l$ = { class: "workspace-settings-content" }, i$ = { class: "settings-section" }, r$ = { class: "path-setting" }, c$ = { class: "path-value" }, u$ = { class: "path-setting" }, d$ = { class: "path-value" }, f$ = { class: "settings-section" }, m$ = { class: "token-setting" }, v$ = {
  key: 0,
  class: "token-warning"
}, p$ = { class: "token-actions" }, g$ = { class: "settings-section" }, h$ = { class: "settings-section" }, y$ = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ct(), { getToken: m, setToken: v, clearToken: p, hasToken: w } = a$(), g = b(!1), _ = b(null), k = b(null), $ = b(null), S = b(null), T = b(""), P = b(""), R = b(""), U = b(""), A = b(!1), z = b(!1), E = b(!1), H = b(""), ae = b(!1), de = b(!1), ce = b(null), ke = b(!1), Q = b(!0);
    function G(we) {
      return we.join(" ");
    }
    function J(we) {
      return we.trim() ? we.trim().split(/\s+/) : [];
    }
    const Le = M(() => {
      if (!S.value) return !1;
      const we = A.value, te = z.value, oe = E.value, Me = U.value !== G(S.value.comfyui_extra_args || []);
      return we || te || oe || Me;
    }), Z = M(() => w());
    async function ye() {
      var we;
      g.value = !0, _.value = null;
      try {
        $.value = await r(a.workspacePath || void 0), S.value = { ...$.value }, T.value = $.value.civitai_api_key || "", P.value = $.value.huggingface_token || "", U.value = G($.value.comfyui_extra_args || []), R.value = m() || "", H.value = R.value, A.value = !1, z.value = !1, E.value = !1, ce.value = null;
        const te = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        ke.value = te !== "false", Q.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Me = (we = (await u()).remotes) == null ? void 0 : we.find((fe) => fe.name === "origin");
          ae.value = !!(Me && rc(Me.url));
        } catch {
          ae.value = !1;
        }
      } catch (te) {
        _.value = te instanceof Error ? te.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function O() {
      var we;
      k.value = null;
      try {
        const te = {};
        A.value && (te.civitai_api_key = T.value || null), z.value && (te.huggingface_token = P.value || null), U.value !== G(((we = S.value) == null ? void 0 : we.comfyui_extra_args) || []) && (te.comfyui_extra_args = J(U.value)), await c(te, a.workspacePath || void 0), E.value && (R.value ? v(R.value) : p()), await ye(), k.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          k.value = null;
        }, 3e3);
      } catch (te) {
        const oe = te instanceof Error ? te.message : "Failed to save settings";
        k.value = { type: "error", message: oe }, l("error", oe);
      }
    }
    function me() {
      S.value && (T.value = S.value.civitai_api_key || "", P.value = S.value.huggingface_token || "", U.value = G(S.value.comfyui_extra_args || []), R.value = H.value, A.value = !1, z.value = !1, E.value = !1, ce.value = null, k.value = null);
    }
    async function Re() {
      if (R.value) {
        de.value = !0, ce.value = null;
        try {
          const we = await d(R.value);
          ce.value = {
            type: we.status === "success" ? "success" : "error",
            message: we.message
          };
        } catch (we) {
          ce.value = {
            type: "error",
            message: we instanceof Error ? we.message : "Connection test failed"
          };
        } finally {
          de.value = !1;
        }
      }
    }
    function ve() {
      R.value = "", E.value = !0, ce.value = null;
    }
    function ee(we) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(we)), console.log("[ComfyGit] Auto-refresh setting saved:", we);
    }
    function Y(we) {
      we ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", we ? "enabled" : "disabled");
    }
    return t({
      saveSettings: O,
      resetSettings: me,
      hasChanges: Le,
      loadSettings: ye
    }), at(ye), (we, te) => (n(), i("div", l$, [
      g.value ? (n(), L(xs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (n(), L(Ss, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: ye
      }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
        C(St, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var oe, Me;
            return [
              s("div", i$, [
                s("div", r$, [
                  te[9] || (te[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  te[10] || (te[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", c$, f(((oe = $.value) == null ? void 0 : oe.workspace_path) || "Loading..."), 1)
                ]),
                s("div", u$, [
                  te[11] || (te[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  te[12] || (te[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", d$, f(((Me = $.value) == null ? void 0 : Me.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(St, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", f$, [
              C(mo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  C(ho, {
                    modelValue: T.value,
                    "onUpdate:modelValue": te[0] || (te[0] = (oe) => T.value = oe),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: te[1] || (te[1] = (oe) => A.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(mo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  C(ho, {
                    modelValue: P.value,
                    "onUpdate:modelValue": te[2] || (te[2] = (oe) => P.value = oe),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: te[3] || (te[3] = (oe) => z.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(mo, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", m$, [
                    C(ho, {
                      modelValue: R.value,
                      "onUpdate:modelValue": te[4] || (te[4] = (oe) => R.value = oe),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: te[5] || (te[5] = (oe) => E.value = !0)
                    }, null, 8, ["modelValue"]),
                    ae.value ? (n(), i("div", v$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    te[15] || (te[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", p$, [
                      C(Te, {
                        variant: "ghost",
                        size: "xs",
                        loading: de.value,
                        disabled: !R.value || de.value,
                        onClick: Re
                      }, {
                        default: h(() => [...te[13] || (te[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      Z.value ? (n(), L(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ve
                      }, {
                        default: h(() => [...te[14] || (te[14] = [
                          x(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    ce.value ? (n(), i("div", {
                      key: 1,
                      class: Ve(["token-test-result", ce.value.type])
                    }, f(ce.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        C(St, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", g$, [
              C(mo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  C(ho, {
                    modelValue: U.value,
                    "onUpdate:modelValue": te[6] || (te[6] = (oe) => U.value = oe),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              te[16] || (te[16] = s("div", { class: "setting-hint" }, [
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
        C(St, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", h$, [
              C(mo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  C(xi, {
                    modelValue: ke.value,
                    "onUpdate:modelValue": [
                      te[7] || (te[7] = (oe) => ke.value = oe),
                      ee
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(mo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  C(xi, {
                    modelValue: Q.value,
                    "onUpdate:modelValue": [
                      te[8] || (te[8] = (oe) => Q.value = oe),
                      Y
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        k.value ? (n(), L(ra, {
          key: 0,
          variant: (k.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Rt({ color: k.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(k.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), cc = /* @__PURE__ */ xe(y$, [["__scopeId", "data-v-f1bdc574"]]), w$ = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), L(At, null, {
      header: h(() => [
        C(zt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              C(Te, {
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
              (c = t.value) != null && c.hasChanges ? (n(), L(Te, {
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
        C(cc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), _$ = { class: "env-title" }, k$ = {
  key: 0,
  class: "current-badge"
}, b$ = {
  key: 0,
  class: "branch-info"
}, $$ = /* @__PURE__ */ be({
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
    return (t, o) => (n(), L(Vt, {
      status: e.isCurrent ? "synced" : void 0
    }, Yt({
      icon: h(() => [
        x(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", _$, [
          s("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", k$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", b$, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          x(" " + f(e.currentBranch), 1)
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
          e.lastUsed && e.showLastUsed ? (n(), L(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), C$ = /* @__PURE__ */ xe($$, [["__scopeId", "data-v-9231917a"]]), x$ = { class: "env-details" }, S$ = { class: "status-row" }, I$ = {
  key: 0,
  class: "detail-row"
}, E$ = { class: "value mono" }, T$ = {
  key: 1,
  class: "detail-row"
}, M$ = { class: "value mono small" }, P$ = { class: "collapsible-section" }, R$ = { class: "value" }, L$ = {
  key: 0,
  class: "collapsible-body"
}, D$ = { class: "item-list" }, N$ = { class: "item-name" }, O$ = { class: "item-name" }, U$ = { class: "item-name" }, A$ = { class: "item-name" }, z$ = {
  key: 0,
  class: "empty-list"
}, F$ = { class: "collapsible-section" }, V$ = { class: "value" }, B$ = {
  key: 0,
  class: "collapsible-body"
}, W$ = { class: "item-list" }, G$ = { class: "item-name" }, j$ = {
  key: 0,
  class: "item-meta"
}, H$ = {
  key: 0,
  class: "empty-list"
}, q$ = { class: "collapsible-section" }, K$ = { class: "value" }, J$ = {
  key: 0,
  class: "missing-count"
}, Q$ = {
  key: 0,
  class: "collapsible-body"
}, Y$ = { class: "item-list" }, X$ = { class: "model-row" }, Z$ = { class: "item-name" }, eC = { class: "model-meta" }, tC = { class: "item-meta" }, sC = {
  key: 0,
  class: "item-meta"
}, oC = {
  key: 0,
  class: "empty-list"
}, nC = {
  key: 2,
  class: "section-divider"
}, aC = {
  key: 3,
  class: "detail-row"
}, lC = { class: "value" }, iC = { class: "footer-actions" }, rC = /* @__PURE__ */ be({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = b(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = M(() => {
      var m;
      if (!((m = o.detail) != null && m.workflows)) return !0;
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
    return (d, m) => (n(), L(It, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: m[6] || (m[6] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, p, w, g, _, k, $, S, T, P, R, U, A, z;
        return [
          s("div", x$, [
            s("div", S$, [
              m[7] || (m[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Ve(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", I$, [
              m[8] || (m[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", E$, f(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", T$, [
              m[9] || (m[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", M$, f(e.environment.path), 1)
            ])) : y("", !0),
            m[18] || (m[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", P$, [
              s("div", {
                class: "collapsible-header",
                onClick: m[0] || (m[0] = (E) => r("workflows"))
              }, [
                m[10] || (m[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", R$, f(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", L$, [
                s("div", D$, [
                  (n(!0), i(j, null, he(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    s("span", N$, f(E), 1),
                    m[11] || (m[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    s("span", O$, f(E), 1),
                    m[12] || (m[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    s("span", U$, f(E), 1),
                    m[13] || (m[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    s("span", A$, f(E), 1),
                    m[14] || (m[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", z$, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", F$, [
              s("div", {
                class: "collapsible-header",
                onClick: m[1] || (m[1] = (E) => r("nodes"))
              }, [
                m[15] || (m[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", V$, f(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (k = e.detail) != null && k.nodes && l.value.has("nodes") ? (n(), i("div", B$, [
                s("div", W$, [
                  (n(!0), i(j, null, he(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    s("span", G$, f(E.name), 1),
                    E.version ? (n(), i("span", j$, f(E.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", H$, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", q$, [
              s("div", {
                class: "collapsible-header",
                onClick: m[2] || (m[2] = (E) => r("models"))
              }, [
                m[16] || (m[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", K$, [
                  x(f((($ = e.detail) == null ? void 0 : $.model_count) ?? e.environment.model_count) + " ", 1),
                  (T = (S = e.detail) == null ? void 0 : S.models) != null && T.missing.length ? (n(), i("span", J$, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (P = e.detail) != null && P.models ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (R = e.detail) != null && R.models && l.value.has("models") ? (n(), i("div", Q$, [
                s("div", Y$, [
                  (n(!0), i(j, null, he(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", X$, [
                      s("span", Z$, f(E.filename), 1),
                      s("span", {
                        class: Ve(["criticality-badge", E.criticality])
                      }, f(E.criticality), 3)
                    ]),
                    s("div", eC, [
                      s("span", tC, f(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", sC, " used by: " + f(E.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", oC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (U = e.detail) != null && U.created_at || e.environment.created_at ? (n(), i("div", nC)) : y("", !0),
            (A = e.detail) != null && A.created_at || e.environment.created_at ? (n(), i("div", aC, [
              m[17] || (m[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", lC, f(u(((z = e.detail) == null ? void 0 : z.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", iC, [
          C(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: m[3] || (m[3] = (v) => a("export", e.environment.name))
          }, {
            default: h(() => [...m[19] || (m[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), L(Ne, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: m[4] || (m[4] = (v) => a("delete", e.environment.name))
          }, {
            default: h(() => [...m[20] || (m[20] = [
              x(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          m[22] || (m[22] = s("div", { class: "footer-spacer" }, null, -1)),
          C(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: m[5] || (m[5] = (v) => a("close"))
          }, {
            default: h(() => [...m[21] || (m[21] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), cC = /* @__PURE__ */ xe(rC, [["__scopeId", "data-v-750671f5"]]), uc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], dc = "3.12", Tl = [
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
], fc = "auto", uC = { class: "progress-bar" }, dC = /* @__PURE__ */ be({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = M(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (n(), i("div", uC, [
      s("div", {
        class: Ve(["progress-fill", e.variant]),
        style: Rt({ width: o.value })
      }, null, 6)
    ]));
  }
}), mc = /* @__PURE__ */ xe(dC, [["__scopeId", "data-v-1beb0512"]]), fC = { class: "task-progress" }, mC = { class: "progress-info" }, vC = { class: "progress-percentage" }, pC = { class: "progress-message" }, gC = {
  key: 0,
  class: "progress-steps"
}, hC = { class: "step-icon" }, yC = { class: "step-label" }, wC = /* @__PURE__ */ be({
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
    return (l, r) => (n(), i("div", fC, [
      C(mc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", mC, [
        s("span", vC, f(e.progress) + "%", 1),
        s("span", pC, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", gC, [
        (n(!0), i(j, null, he(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Ve(["step", o(c.id)])
        }, [
          s("span", hC, f(a(c.id)), 1),
          s("span", yC, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), qn = /* @__PURE__ */ xe(wC, [["__scopeId", "data-v-9d1de66c"]]), _C = {
  key: 0,
  class: "create-env-form"
}, kC = { class: "form-field" }, bC = { class: "input-wrapper" }, $C = {
  key: 0,
  class: "validating-indicator"
}, CC = {
  key: 1,
  class: "valid-indicator"
}, xC = {
  key: 0,
  class: "field-error"
}, SC = { class: "form-field" }, IC = ["value"], EC = { class: "form-field" }, TC = ["disabled"], MC = ["value"], PC = { class: "form-field" }, RC = ["value"], LC = { class: "form-field form-field--checkbox" }, DC = { class: "form-checkbox" }, NC = {
  key: 1,
  class: "create-env-progress"
}, OC = { class: "creating-intro" }, UC = {
  key: 0,
  class: "progress-warning"
}, AC = {
  key: 1,
  class: "create-error"
}, zC = { class: "error-message" }, FC = {
  key: 1,
  class: "footer-status"
}, VC = 10, BC = /* @__PURE__ */ be({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ct(), u = b(""), d = b(dc), m = b("latest"), v = b(fc), p = b(!1), w = b(null), g = b(!1), _ = b(!1);
    let k = null, $ = 0;
    const S = M(() => !!u.value.trim() && _.value && !w.value && !g.value && !R.value), T = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), P = b(!1), R = b(!1), U = b({
      progress: 0,
      message: ""
    });
    let A = null, z = 0;
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
    ], H = b(null);
    wt(u, (Z) => {
      _.value = !1, k && (clearTimeout(k), k = null);
      const ye = Z.trim();
      if (!ye) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, k = setTimeout(() => {
        ae(ye);
      }, 400);
    });
    async function ae(Z, ye = !1) {
      const O = Z.trim();
      if (!O)
        return _.value = !1, g.value = !1, w.value = ye ? "Environment name is required" : null, !1;
      const me = ++$;
      g.value = !0;
      try {
        const Re = await c(O);
        return me !== $ ? !1 : (w.value = Re.valid ? null : Re.error || "Invalid name", _.value = !!Re.valid, !!Re.valid);
      } catch {
        return me !== $ || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        me === $ && (g.value = !1);
      }
    }
    async function de() {
      k && (clearTimeout(k), k = null), await ae(u.value, !0);
    }
    function ce() {
      R.value || o("close");
    }
    async function ke() {
      const Z = u.value.trim();
      if (!Z) {
        w.value = "Environment name is required";
        return;
      }
      if (k && (clearTimeout(k), k = null), !!await ae(Z, !0)) {
        R.value = !0, U.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: Z,
            python_version: d.value,
            comfyui_version: m.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, me = await l(O);
          me.status === "started" ? Q() : me.status === "error" && (U.value = {
            progress: 0,
            message: me.message || "Failed to start creation",
            error: me.message
          });
        } catch (O) {
          U.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function Q() {
      A || (z = 0, A = window.setInterval(async () => {
        try {
          const Z = await r();
          z = 0, U.value = {
            progress: Z.progress ?? 0,
            message: Z.message,
            phase: Z.phase,
            error: Z.error
          }, Z.state === "complete" ? (G(), o("created", Z.environment_name || u.value.trim(), p.value)) : Z.state === "error" ? (G(), U.value.error = Z.error || Z.message) : Z.state === "idle" && R.value && (G(), U.value.error = "Creation was interrupted. Please try again.");
        } catch {
          z++, z >= VC && (G(), U.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function G() {
      A && (clearInterval(A), A = null);
    }
    function J() {
      R.value = !1, U.value = { progress: 0, message: "" }, o("close");
    }
    async function Le() {
      P.value = !0;
      try {
        T.value = await a();
      } catch (Z) {
        console.error("Failed to load ComfyUI releases:", Z);
      } finally {
        P.value = !1;
      }
    }
    return at(async () => {
      var Z;
      await Pt(), (Z = H.value) == null || Z.focus(), Le();
    }), Mo(() => {
      G(), k && (clearTimeout(k), k = null);
    }), (Z, ye) => (n(), L(It, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !R.value,
      onClose: ce
    }, {
      body: h(() => [
        R.value ? (n(), i("div", NC, [
          s("p", OC, [
            ye[12] || (ye[12] = x(" Creating environment ", -1)),
            s("strong", null, f(u.value), 1),
            ye[13] || (ye[13] = x("... ", -1))
          ]),
          C(qn, {
            progress: U.value.progress,
            message: U.value.message,
            "current-phase": U.value.phase,
            variant: U.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          U.value.error ? y("", !0) : (n(), i("p", UC, " This may take several minutes. Please wait... ")),
          U.value.error ? (n(), i("div", AC, [
            s("p", zC, f(U.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", _C, [
          s("div", kC, [
            ye[6] || (ye[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", bC, [
              Tt(s("input", {
                ref_key: "nameInput",
                ref: H,
                "onUpdate:modelValue": ye[0] || (ye[0] = (O) => u.value = O),
                type: "text",
                class: Ve(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: fs(ke, ["enter"]),
                onBlur: de
              }, null, 34), [
                [Zo, u.value]
              ]),
              g.value ? (n(), i("span", $C, "...")) : _.value ? (n(), i("span", CC, "✓")) : y("", !0)
            ]),
            w.value ? (n(), i("div", xC, f(w.value), 1)) : y("", !0),
            ye[7] || (ye[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", SC, [
            ye[8] || (ye[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ye[1] || (ye[1] = (O) => d.value = O),
              class: "form-select"
            }, [
              (n(!0), i(j, null, he(tt(uc), (O) => (n(), i("option", {
                key: O,
                value: O
              }, f(O), 9, IC))), 128))
            ], 512), [
              [$o, d.value]
            ])
          ]),
          s("div", EC, [
            ye[9] || (ye[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ye[2] || (ye[2] = (O) => m.value = O),
              class: "form-select",
              disabled: P.value
            }, [
              (n(!0), i(j, null, he(T.value, (O) => (n(), i("option", {
                key: O.tag_name,
                value: O.tag_name
              }, f(O.name), 9, MC))), 128))
            ], 8, TC), [
              [$o, m.value]
            ])
          ]),
          s("div", PC, [
            ye[10] || (ye[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ye[3] || (ye[3] = (O) => v.value = O),
              class: "form-select"
            }, [
              (n(!0), i(j, null, he(tt(Tl), (O) => (n(), i("option", {
                key: O,
                value: O
              }, f(O) + f(O === "auto" ? " (detect GPU)" : ""), 9, RC))), 128))
            ], 512), [
              [$o, v.value]
            ])
          ]),
          s("div", LC, [
            s("label", DC, [
              Tt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ye[4] || (ye[4] = (O) => p.value = O)
              }, null, 512), [
                [jn, p.value]
              ]),
              ye[11] || (ye[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        R.value ? (n(), i(j, { key: 1 }, [
          U.value.error ? (n(), L(Ne, {
            key: 0,
            variant: "secondary",
            onClick: J
          }, {
            default: h(() => [...ye[16] || (ye[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", FC, " Creating environment... "))
        ], 64)) : (n(), i(j, { key: 0 }, [
          C(Ne, {
            variant: "primary",
            disabled: !S.value,
            onClick: ke
          }, {
            default: h(() => [...ye[14] || (ye[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Ne, {
            variant: "secondary",
            onClick: ye[5] || (ye[5] = (O) => o("close"))
          }, {
            default: h(() => [...ye[15] || (ye[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), WC = /* @__PURE__ */ xe(BC, [["__scopeId", "data-v-3faa3d9b"]]), GC = /* @__PURE__ */ be({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), c = b([]), u = b(!1), d = b(null), m = b(""), v = b(!1), p = b(!1), w = b(null), g = b(null), _ = M(() => [...c.value].sort((A, z) => A.is_current !== z.is_current ? A.is_current ? -1 : 1 : A.name.localeCompare(z.name))), k = M(() => {
      if (!m.value.trim()) return _.value;
      const A = m.value.toLowerCase();
      return _.value.filter(
        (z) => {
          var E;
          return z.name.toLowerCase().includes(A) || ((E = z.current_branch) == null ? void 0 : E.toLowerCase().includes(A));
        }
      );
    });
    function $(A, z) {
      p.value = !1, a("created", A, z);
    }
    function S() {
      p.value = !0;
    }
    async function T(A) {
      w.value = A, g.value = null;
      const z = await r(A.name);
      z && (g.value = z);
    }
    function P(A) {
      w.value = null, g.value = null, a("delete", A);
    }
    function R(A) {
      w.value = null, g.value = null, a("export", A);
    }
    async function U() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (A) {
        d.value = A instanceof Error ? A.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return at(U), t({
      loadEnvironments: U,
      openCreateModal: S
    }), (A, z) => (n(), i(j, null, [
      C(At, null, {
        header: h(() => [
          C(zt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: z[1] || (z[1] = (E) => v.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (n(), L(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: h(() => [...z[7] || (z[7] = [
                  x(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              C(Te, {
                variant: "secondary",
                size: "sm",
                onClick: z[0] || (z[0] = (E) => A.$emit("import"))
              }, {
                default: h(() => [...z[8] || (z[8] = [
                  x(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(io, {
            modelValue: m.value,
            "onUpdate:modelValue": z[2] || (z[2] = (E) => m.value = E),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), L(Ss, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            k.value.length ? (n(), L(St, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(k.value, (E) => (n(), L(C$, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !E.is_current && e.canSwitch ? (n(), L(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => A.$emit("switch", E.name)
                    }, {
                      default: h(() => [...z[9] || (z[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => T(E)
                    }, {
                      default: h(() => [...z[10] || (z[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => A.$emit("export", E.name)
                    }, {
                      default: h(() => [...z[11] || (z[11] = [
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
            k.value.length ? y("", !0) : (n(), L(cs, {
              key: 1,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (n(), L(Te, {
                    key: 0,
                    variant: "primary",
                    onClick: S
                  }, {
                    default: h(() => [...z[12] || (z[12] = [
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
      C(Xt, {
        show: v.value,
        title: "About Environments",
        onClose: z[4] || (z[4] = (E) => v.value = !1)
      }, {
        content: h(() => [...z[13] || (z[13] = [
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
          C(Te, {
            variant: "secondary",
            onClick: z[3] || (z[3] = (E) => v.value = !1)
          }, {
            default: h(() => [...z[14] || (z[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(cC, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: z[5] || (z[5] = (E) => {
          w.value = null, g.value = null;
        }),
        onDelete: P,
        onExport: R
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), L(WC, {
        key: 1,
        onClose: z[6] || (z[6] = (E) => p.value = !1),
        onCreated: $
      })) : y("", !0)
    ], 64));
  }
}), jC = /* @__PURE__ */ xe(GC, [["__scopeId", "data-v-01163d8c"]]), HC = { class: "file-path" }, qC = { class: "file-path-text" }, KC = ["title"], JC = /* @__PURE__ */ be({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = b(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", HC, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", qC, f(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, f(o.value ? "✓" : "📋"), 9, KC)) : y("", !0)
    ]));
  }
}), QC = /* @__PURE__ */ xe(JC, [["__scopeId", "data-v-f0982173"]]), YC = { class: "base-textarea-wrapper" }, XC = ["value", "rows", "placeholder", "disabled", "maxlength"], ZC = {
  key: 0,
  class: "base-textarea-count"
}, ex = /* @__PURE__ */ be({
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
    return (r, c) => (n(), i("div", YC, [
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
      }, null, 40, XC),
      e.showCharCount && e.maxLength ? (n(), i("div", ZC, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Co = /* @__PURE__ */ xe(ex, [["__scopeId", "data-v-c6d16c93"]]), tx = ["checked", "disabled"], sx = { class: "base-checkbox-box" }, ox = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, nx = {
  key: 0,
  class: "base-checkbox-label"
}, ax = /* @__PURE__ */ be({
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
      }, null, 40, tx),
      s("span", sx, [
        e.modelValue ? (n(), i("svg", ox, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (n(), i("span", nx, [
        st(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kn = /* @__PURE__ */ xe(ax, [["__scopeId", "data-v-bf17c831"]]), lx = { class: "export-blocked" }, ix = { class: "error-header" }, rx = { class: "error-summary" }, cx = { class: "error-title" }, ux = { class: "error-description" }, dx = { class: "issues-list" }, fx = { class: "issue-message" }, mx = {
  key: 0,
  class: "issue-details"
}, vx = ["onClick"], px = { class: "issue-fix" }, gx = {
  key: 0,
  class: "commit-section"
}, hx = {
  key: 0,
  class: "issues-warning"
}, yx = {
  key: 1,
  class: "commit-error"
}, wx = /* @__PURE__ */ be({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = b(""), c = b(!1), u = b(!1), d = b(""), m = ro({}), v = M(() => o.mode === "publish" ? "Publish" : "Export"), p = M(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = M(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), g = M(
      () => w.value && !u.value
    ), _ = M(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function k(S) {
      const T = o.issues[S];
      return m[S] || T.details.length <= 3 ? T.details : T.details.slice(0, 3);
    }
    async function $() {
      var S;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const T = await l(r.value.trim(), u.value);
          if (T.status === "success")
            a("committed");
          else if (T.status === "blocked") {
            const P = ((S = T.issues) == null ? void 0 : S.map((R) => `${R.name}: ${R.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${P}`;
          } else
            d.value = T.message || "Commit failed";
        } catch (T) {
          d.value = T instanceof Error ? T.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (S, T) => (n(), L(It, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: T[4] || (T[4] = (P) => S.$emit("close"))
    }, {
      body: h(() => [
        s("div", lx, [
          s("div", ix, [
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
            s("div", rx, [
              s("h3", cx, f(v.value) + " blocked", 1),
              s("p", ux, f(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", dx, [
            (n(!0), i(j, null, he(e.issues, (P, R) => (n(), i("div", {
              key: R,
              class: "issue-item"
            }, [
              s("div", fx, f(P.message), 1),
              P.details.length ? (n(), i("div", mx, [
                (n(!0), i(j, null, he(k(R), (U, A) => (n(), i("div", {
                  key: A,
                  class: "issue-detail"
                }, f(U), 1))), 128)),
                P.details.length > 3 && !m[R] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (U) => m[R] = !0
                }, " +" + f(P.details.length - 3) + " more ", 9, vx)) : y("", !0)
              ])) : y("", !0),
              s("div", px, [
                P.type === "uncommitted_workflows" ? (n(), i(j, { key: 0 }, [
                  x(" Commit your workflow changes before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : P.type === "uncommitted_git_changes" ? (n(), i(j, { key: 1 }, [
                  x(" Commit your changes before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : P.type === "unresolved_issues" ? (n(), i(j, { key: 2 }, [
                  x(" Resolve all workflow issues before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", gx, [
            w.value ? (n(), i("div", hx, [
              T[7] || (T[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              C(Kn, {
                modelValue: u.value,
                "onUpdate:modelValue": T[0] || (T[0] = (P) => u.value = P),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...T[6] || (T[6] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            C(Co, {
              modelValue: r.value,
              "onUpdate:modelValue": T[1] || (T[1] = (P) => r.value = P),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: $,
              onCtrlEnter: $
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", yx, f(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (n(), i(j, { key: 0 }, [
          C(Ne, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (P) => S.$emit("close"))
          }, {
            default: h(() => [...T[8] || (T[8] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(Ne, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: $
          }, {
            default: h(() => [
              x(f(c.value ? "Committing..." : u.value ? `Force Commit & ${v.value}` : `Commit & ${v.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), L(Ne, {
          key: 1,
          variant: "primary",
          onClick: T[3] || (T[3] = (P) => S.$emit("close"))
        }, {
          default: h(() => [...T[9] || (T[9] = [
            x(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _x = /* @__PURE__ */ xe(wx, [["__scopeId", "data-v-a8990107"]]), kx = { class: "readiness-header" }, bx = { class: "readiness-body" }, $x = {
  key: 0,
  class: "issue-section"
}, Cx = { class: "section-heading" }, xx = { class: "issue-list" }, Sx = { class: "issue-main" }, Ix = { class: "issue-name" }, Ex = { class: "issue-meta" }, Tx = { key: 0 }, Mx = { key: 1 }, Px = ["onClick"], Rx = {
  key: 1,
  class: "issue-note"
}, Lx = {
  key: 1,
  class: "issue-section"
}, Dx = { class: "section-heading" }, Nx = { class: "issue-list" }, Ox = { class: "issue-main" }, Ux = { class: "issue-name" }, Ax = { class: "issue-meta" }, zx = { class: "issue-reason" }, Fx = ["disabled", "onClick"], Vx = {
  key: 1,
  class: "issue-note"
}, Bx = {
  key: 2,
  class: "empty-state"
}, Wx = {
  key: 3,
  class: "error-message"
}, Gx = { class: "readiness-footer" }, jx = /* @__PURE__ */ be({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, a = t, { updateNodeCriticality: l } = ct(), r = b(null), c = b(null), u = b(null), d = M(() => o.warnings.models_without_sources), m = M(() => o.warnings.nodes_without_provenance);
    async function v(w) {
      c.value = w, u.value = null;
      try {
        const g = await l(w, "optional");
        if (g.status !== "success") {
          u.value = g.message || `Failed to update ${w}`;
          return;
        }
        a("revalidate");
      } catch (g) {
        u.value = g instanceof Error ? g.message : `Failed to update ${w}`;
      } finally {
        c.value = null;
      }
    }
    function p() {
      r.value = null, a("revalidate");
    }
    return (w, g) => (n(), i(j, null, [
      (n(), L(Lt, { to: "body" }, [
        s("div", {
          class: "readiness-overlay",
          onClick: g[4] || (g[4] = (_) => a("close"))
        }, [
          s("div", {
            class: "readiness-modal",
            onClick: g[3] || (g[3] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", kx, [
              g[6] || (g[6] = s("div", null, [
                s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
                s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Optional nodes are still listed as warnings, but they will not be treated as required build inputs. ")
              ], -1)),
              s("button", {
                class: "readiness-close",
                onClick: g[0] || (g[0] = (_) => a("close"))
              }, "x")
            ]),
            s("div", bx, [
              d.value.length ? (n(), i("section", $x, [
                s("div", Cx, [
                  g[7] || (g[7] = s("h4", null, "Models Missing Source URLs", -1)),
                  s("span", null, f(d.value.length), 1)
                ]),
                s("div", xx, [
                  (n(!0), i(j, null, he(d.value, (_) => (n(), i("article", {
                    key: _.hash || _.filename,
                    class: "issue-item"
                  }, [
                    s("div", Sx, [
                      s("div", Ix, f(_.filename), 1),
                      s("div", Ex, [
                        _.hash ? (n(), i("span", Tx, "hash " + f(_.hash), 1)) : y("", !0),
                        _.workflows.length ? (n(), i("span", Mx, "used by " + f(_.workflows.join(", ")), 1)) : y("", !0),
                        s("span", null, f(_.criticality || "required"), 1)
                      ])
                    ]),
                    _.hash ? (n(), i("button", {
                      key: 0,
                      class: "issue-action",
                      onClick: (k) => r.value = _.hash
                    }, " Add URL ", 8, Px)) : (n(), i("span", Rx, "Missing hash"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              m.value.length ? (n(), i("section", Lx, [
                s("div", Dx, [
                  g[8] || (g[8] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                  s("span", null, f(m.value.length), 1)
                ]),
                s("div", Nx, [
                  (n(!0), i(j, null, he(m.value, (_) => (n(), i("article", {
                    key: _.name,
                    class: "issue-item"
                  }, [
                    s("div", Ox, [
                      s("div", Ux, f(_.name), 1),
                      s("div", Ax, [
                        s("span", null, f(_.source), 1),
                        s("span", null, f(_.criticality), 1)
                      ]),
                      s("p", zx, f(_.reason), 1)
                    ]),
                    _.criticality === "required" ? (n(), i("button", {
                      key: 0,
                      class: "issue-action",
                      disabled: c.value === _.name,
                      onClick: (k) => v(_.name)
                    }, f(c.value === _.name ? "Saving..." : "Mark Optional"), 9, Fx)) : (n(), i("span", Vx, "Optional warning"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              !d.value.length && !m.value.length ? (n(), i("div", Bx, " No reproducibility issues remain. ")) : y("", !0),
              u.value ? (n(), i("div", Wx, f(u.value), 1)) : y("", !0)
            ]),
            s("div", Gx, [
              s("button", {
                class: "secondary-action",
                onClick: g[1] || (g[1] = (_) => a("revalidate"))
              }, " Refresh Check "),
              s("button", {
                class: "primary-action",
                onClick: g[2] || (g[2] = (_) => a("close"))
              }, " Done ")
            ])
          ])
        ])
      ])),
      r.value ? (n(), L(Il, {
        key: 0,
        identifier: r.value,
        "overlay-z-index": 10008,
        onClose: p,
        onSourceSaved: g[5] || (g[5] = (_) => a("revalidate"))
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), vc = /* @__PURE__ */ xe(jx, [["__scopeId", "data-v-84048536"]]), Hx = { class: "repro-warning" }, qx = { class: "repro-warning-content" }, Kx = {
  key: 0,
  class: "warning-group"
}, Jx = { class: "warning-list" }, Qx = { key: 0 }, Yx = {
  key: 1,
  class: "warning-group"
}, Xx = { class: "warning-list" }, Zx = { key: 0 }, e3 = /* @__PURE__ */ be({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, o = M(() => t.warnings.models_without_sources || []), a = M(() => t.warnings.nodes_without_provenance || []), l = M(() => o.value.length), r = M(() => a.value.length), c = M(() => l.value + r.value), u = M(
      () => o.value.slice(0, t.maxItemsPerGroup)
    ), d = M(
      () => a.value.slice(0, t.maxItemsPerGroup)
    ), m = M(
      () => Math.max(0, l.value - u.value.length)
    ), v = M(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (n(), i("div", Hx, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", qx, [
        s("strong", null, f(c.value) + " reproducibility warning" + f(c.value !== 1 ? "s" : ""), 1),
        s("p", null, f(e.message), 1),
        l.value ? (n(), i("div", Kx, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", Jx, [
            (n(!0), i(j, null, he(u.value, (g) => (n(), i("li", {
              key: g.hash || g.filename
            }, f(g.filename), 1))), 128)),
            m.value ? (n(), i("li", Qx, "+" + f(m.value) + " more model" + f(m.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (n(), i("div", Yx, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", Xx, [
            (n(!0), i(j, null, he(d.value, (g) => (n(), i("li", {
              key: g.name
            }, f(g.name) + " (" + f(g.criticality) + ") ", 1))), 128)),
            v.value ? (n(), i("li", Zx, "+" + f(v.value) + " more node" + f(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), sl = /* @__PURE__ */ xe(e3, [["__scopeId", "data-v-11be310d"]]), t3 = { class: "export-card" }, s3 = { class: "export-path-row" }, o3 = {
  key: 1,
  class: "export-warning"
}, n3 = { class: "export-footer-actions" }, a3 = /* @__PURE__ */ be({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), c = b(""), u = b(!1), d = b(!1), m = b(!1), v = b(null), p = b(!1), w = b(null), g = b(!1), _ = b(!1), k = M(() => {
      var G;
      return ((G = t.environmentName) == null ? void 0 : G.trim()) || null;
    }), $ = M(() => k.value ? `EXPORT ENVIRONMENT: ${k.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = M(() => k.value ? `Environment '${k.value}' has been exported` : "Your environment has been exported"), T = M(() => u.value ? "Validating..." : d.value ? "Exporting..." : z.value ? "Export Anyway" : "Export Environment"), P = M(() => {
      var G;
      return ((G = w.value) == null ? void 0 : G.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), R = M(
      () => P.value.models_without_sources.length
    ), U = M(
      () => {
        var G;
        return ((G = P.value.nodes_without_provenance) == null ? void 0 : G.length) || 0;
      }
    ), A = M(
      () => R.value + U.value
    ), z = M(
      () => {
        var G;
        return !!((G = w.value) != null && G.can_export) && A.value > 0;
      }
    );
    async function E() {
      u.value = !0;
      try {
        const G = k.value ? await l(k.value) : await o();
        return w.value = G, G;
      } catch (G) {
        return v.value = {
          status: "error",
          message: G instanceof Error ? G.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function H() {
      v.value = null;
      const G = await E();
      if (G) {
        if (!G.can_export) {
          g.value = !0;
          return;
        }
        await ce();
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
        await ce();
      }
    }
    async function de() {
      await E();
    }
    async function ce() {
      d.value = !0;
      try {
        const G = k.value ? await r(k.value, c.value || void 0) : await a(c.value || void 0);
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
    async function ke() {
      var G;
      if ((G = v.value) != null && G.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (J) {
          console.error("Failed to copy path:", J);
        }
    }
    async function Q() {
      var G;
      if ((G = v.value) != null && G.path) {
        m.value = !0;
        try {
          const J = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!J.ok)
            throw new Error(`Download failed: ${J.statusText}`);
          const Le = await J.blob(), Z = URL.createObjectURL(Le), ye = v.value.path.split("/").pop() || "environment-export.tar.gz", O = document.createElement("a");
          O.href = Z, O.download = ye, document.body.appendChild(O), O.click(), document.body.removeChild(O), URL.revokeObjectURL(Z);
        } catch (J) {
          console.error("Failed to download:", J), alert(`Download failed: ${J instanceof Error ? J.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
      }
    }
    return at(() => {
      E();
    }), (G, J) => (n(), i(j, null, [
      C(At, null, Yt({
        content: h(() => [
          z.value ? (n(), L(sl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: P.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: J[1] || (J[1] = (Le) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          C(St, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", t3, [
                J[8] || (J[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", s3, [
                  C(ho, {
                    modelValue: c.value,
                    "onUpdate:modelValue": J[2] || (J[2] = (Le) => c.value = Le),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (n(), L(St, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              C(Vt, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: h(() => [
                  x(f(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  x(f(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  x(f(v.value.status === "success" ? S.value : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    C(_t, { label: "Saved to:" }, {
                      default: h(() => [
                        C(QC, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (n(), L(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (n(), i("div", o3, [...J[9] || (J[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    C(Te, {
                      variant: "primary",
                      size: "sm",
                      loading: m.value,
                      onClick: Q
                    }, {
                      default: h(() => [...J[10] || (J[10] = [
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
                      onClick: ke
                    }, {
                      default: h(() => [...J[11] || (J[11] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(Te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: J[3] || (J[3] = (Le) => v.value = null)
                    }, {
                      default: h(() => [...J[12] || (J[12] = [
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
          s("div", n3, [
            e.embedded ? (n(), L(Te, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: J[4] || (J[4] = (Le) => G.$emit("close"))
            }, {
              default: h(() => [...J[13] || (J[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            C(Te, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: H
            }, {
              default: h(() => [
                x(f(T.value), 1)
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
            C(zt, {
              title: $.value,
              "show-info": !0,
              onInfoClick: J[0] || (J[0] = (Le) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      C(Xt, {
        show: p.value,
        title: "What Gets Exported",
        onClose: J[5] || (J[5] = (Le) => p.value = !1)
      }, {
        content: h(() => [...J[14] || (J[14] = [
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
      g.value && w.value ? (n(), L(_x, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: J[6] || (J[6] = (Le) => g.value = !1),
        onCommitted: ae
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (n(), L(vc, {
        key: 1,
        warnings: w.value.warnings,
        onClose: J[7] || (J[7] = (Le) => _.value = !1),
        onRevalidate: de
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), l3 = /* @__PURE__ */ xe(a3, [["__scopeId", "data-v-6cf814a2"]]), i3 = { class: "file-input-wrapper" }, r3 = ["accept", "multiple", "disabled"], c3 = /* @__PURE__ */ be({
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
    const a = o, l = b(null);
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
    }), (u, d) => (n(), i("div", i3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, r3),
      C(Te, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          st(u.$slots, "default", {}, () => [
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
}), u3 = /* @__PURE__ */ xe(c3, [["__scopeId", "data-v-cd192091"]]), d3 = {
  key: 0,
  class: "drop-zone-empty"
}, f3 = { class: "drop-zone-text" }, m3 = { class: "drop-zone-primary" }, v3 = { class: "drop-zone-secondary" }, p3 = { class: "drop-zone-actions" }, g3 = {
  key: 1,
  class: "drop-zone-file"
}, h3 = { class: "file-info" }, y3 = { class: "file-details" }, w3 = { class: "file-name" }, _3 = { class: "file-size" }, k3 = /* @__PURE__ */ be({
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
    const o = t, a = b(!1), l = b(null), r = b(0), c = M(() => l.value !== null), u = M(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = M(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m($) {
      var S;
      $.stopPropagation(), r.value++, (S = $.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function v($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function p($) {
      $.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w($) {
      var T;
      $.stopPropagation(), r.value = 0, a.value = !1;
      const S = (T = $.dataTransfer) == null ? void 0 : T.files;
      S && S.length > 0 && _(S[0]);
    }
    function g($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function k() {
      l.value = null, o("clear");
    }
    return ($, S) => (n(), i("div", {
      class: Ve(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: vt(m, ["prevent"]),
      onDragover: vt(v, ["prevent"]),
      onDragleave: vt(p, ["prevent"]),
      onDrop: vt(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", g3, [
        s("div", h3, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", y3, [
            s("div", w3, f(u.value), 1),
            s("div", _3, f(d.value), 1)
          ])
        ]),
        C(Te, {
          variant: "ghost",
          size: "xs",
          onClick: k,
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
      ])) : (n(), i("div", d3, [
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
        s("div", f3, [
          s("p", m3, f(e.primaryText), 1),
          s("p", v3, f(e.secondaryText), 1)
        ]),
        s("div", p3, [
          C(u3, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              x(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), b3 = /* @__PURE__ */ xe(k3, [["__scopeId", "data-v-0f79cb86"]]), $3 = { class: "commit-hash" }, C3 = /* @__PURE__ */ be({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = M(() => t.hash.slice(0, t.length));
    return (a, l) => (n(), i("span", $3, f(o.value), 1));
  }
}), pc = /* @__PURE__ */ xe(C3, [["__scopeId", "data-v-7c333cc6"]]), x3 = { class: "import-preview" }, S3 = { class: "preview-header" }, I3 = {
  key: 0,
  class: "source-env"
}, E3 = { class: "preview-content" }, T3 = { class: "preview-section" }, M3 = { class: "section-header" }, P3 = { class: "section-info" }, R3 = { class: "section-count" }, L3 = {
  key: 0,
  class: "item-list"
}, D3 = { class: "item-name" }, N3 = {
  key: 0,
  class: "item-more"
}, O3 = { class: "preview-section" }, U3 = { class: "section-header" }, A3 = { class: "section-info" }, z3 = { class: "section-count" }, F3 = {
  key: 0,
  class: "item-list"
}, V3 = { class: "item-details" }, B3 = { class: "item-name" }, W3 = { class: "item-meta" }, G3 = {
  key: 0,
  class: "item-more"
}, j3 = { class: "preview-section" }, H3 = { class: "section-header" }, q3 = { class: "section-info" }, K3 = { class: "section-count" }, J3 = {
  key: 0,
  class: "item-list"
}, Q3 = { class: "item-name" }, Y3 = {
  key: 0,
  class: "item-more"
}, X3 = {
  key: 0,
  class: "preview-section"
}, Z3 = { class: "git-info" }, eS = /* @__PURE__ */ be({
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
    const t = e, o = M(() => t.workflows.length), a = M(() => t.models.length), l = M(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", x3, [
      s("div", S3, [
        C(as, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", I3, [
          u[1] || (u[1] = x(" From: ", -1)),
          C(tl, null, {
            default: h(() => [
              x(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", E3, [
        s("div", T3, [
          s("div", M3, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", P3, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", R3, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", L3, [
            (n(!0), i(j, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", D3, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", N3, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", O3, [
          s("div", U3, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", A3, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", z3, f(a.value) + " file" + f(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", F3, [
            (n(!0), i(j, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", V3, [
                s("span", B3, f(d.filename), 1),
                s("span", W3, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", G3, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", j3, [
          s("div", H3, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", q3, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", K3, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", J3, [
            (n(!0), i(j, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", Q3, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", Y3, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", X3, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", Z3, [
            e.gitBranch ? (n(), L(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                C(tl, null, {
                  default: h(() => [
                    x(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), L(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                C(pc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), tS = /* @__PURE__ */ xe(eS, [["__scopeId", "data-v-182fe113"]]), sS = { class: "import-config" }, oS = { class: "config-container" }, nS = { class: "config-field" }, aS = { class: "input-wrapper" }, lS = ["value"], iS = {
  key: 0,
  class: "validating-indicator"
}, rS = {
  key: 1,
  class: "valid-indicator"
}, cS = {
  key: 0,
  class: "field-error"
}, uS = { class: "config-field" }, dS = { class: "strategy-options" }, fS = ["value", "checked", "onChange"], mS = { class: "strategy-content" }, vS = { class: "strategy-label" }, pS = { class: "strategy-description" }, gS = { class: "config-field switch-field" }, hS = { class: "switch-label" }, yS = ["checked"], wS = { class: "advanced-section" }, _S = { class: "advanced-content" }, kS = { class: "config-field" }, bS = ["value"], $S = ["value"], CS = /* @__PURE__ */ be({
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
    const o = e, a = t, l = b(!1), r = b(!1);
    wt(() => o.nameError, (v) => {
      l.value = !1, r.value = !v && o.name.length > 0;
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
    function m() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (v, p) => (n(), i("div", sS, [
      C(as, null, {
        default: h(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", oS, [
        s("div", nS, [
          C(Ln, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", aS, [
            s("input", {
              type: "text",
              class: Ve(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, lS),
            l.value ? (n(), i("span", iS, "...")) : r.value ? (n(), i("span", rS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", cS, f(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", uS, [
          C(Ln, null, {
            default: h(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", dS, [
            (n(), i(j, null, he(c, (w) => s("label", {
              key: w.value,
              class: Ve(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, fS),
              s("div", mS, [
                s("span", vS, f(w.label), 1),
                s("span", pS, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", gS, [
          s("label", hS, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, yS),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", wS, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", _S, [
            s("div", kS, [
              C(Ln, null, {
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
                (n(!0), i(j, null, he(tt(Tl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, $S))), 128))
              ], 40, bS)
            ])
          ])
        ])
      ])
    ]));
  }
}), xS = /* @__PURE__ */ xe(CS, [["__scopeId", "data-v-89ea06a1"]]), SS = { class: "import-flow" }, IS = {
  key: 0,
  class: "import-empty"
}, ES = { class: "git-import-section" }, TS = { class: "git-url-input-row" }, MS = ["disabled"], PS = {
  key: 0,
  class: "git-error"
}, RS = {
  key: 1,
  class: "import-configure"
}, LS = { class: "selected-file-bar" }, DS = {
  key: 0,
  class: "file-bar-content"
}, NS = { class: "file-bar-info" }, OS = { class: "file-bar-name" }, US = { class: "file-bar-size" }, AS = {
  key: 1,
  class: "file-bar-content"
}, zS = { class: "file-bar-info" }, FS = { class: "file-bar-name" }, VS = {
  key: 0,
  class: "preview-loading"
}, BS = { class: "import-actions" }, WS = {
  key: 2,
  class: "import-progress"
}, GS = { class: "creating-intro" }, jS = {
  key: 0,
  class: "progress-warning"
}, HS = {
  key: 1,
  class: "import-error"
}, qS = { class: "error-message" }, KS = {
  key: 3,
  class: "import-complete"
}, JS = { class: "complete-message" }, QS = { class: "complete-title" }, YS = { class: "complete-details" }, XS = { class: "complete-actions" }, ZS = /* @__PURE__ */ be({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var ee, Y, we, te;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = ct();
    let p = null;
    const w = b(null), g = b(a.resumeImport ?? !1), _ = b(!1), k = b(!1), $ = b(""), S = b(!1), T = b(null), P = b(""), R = b(null), U = b(!1), A = b(null), z = b(null), E = b({
      name: ((ee = a.initialProgress) == null ? void 0 : ee.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), H = b(null), ae = b({
      message: ((Y = a.initialProgress) == null ? void 0 : Y.message) ?? "Preparing import...",
      phase: ((we = a.initialProgress) == null ? void 0 : we.phase) ?? "",
      progress: ((te = a.initialProgress) == null ? void 0 : te.progress) ?? 0,
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
    ], ce = M(() => {
      if (!z.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const oe = z.value;
      return {
        sourceEnvironment: oe.comfyui_version ? `ComfyUI ${oe.comfyui_version}` : "Unknown",
        workflows: oe.workflows.map((Me) => Me.name),
        models: oe.models.map((Me) => ({
          filename: Me.filename,
          size: 0,
          type: Me.relative_path.split("/")[0] || "model"
        })),
        nodes: oe.nodes.map((Me) => Me.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), ke = M(() => !S.value && !T.value && z.value && E.value.name.length > 0 && !H.value && (w.value || R.value));
    async function Q(oe) {
      w.value = oe, S.value = !0, T.value = null, z.value = null;
      try {
        const Me = await r(oe);
        z.value = Me;
      } catch (Me) {
        T.value = Me instanceof Error ? Me.message : "Failed to analyze file", console.error("Preview error:", Me);
      } finally {
        S.value = !1;
      }
    }
    function G() {
      w.value = null, R.value = null, P.value = "", A.value = null, _.value = !1, k.value = !1, $.value = "", z.value = null, T.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, H.value = null, l("source-cleared");
    }
    function J() {
      Re(), G(), g.value = !1, S.value = !1, U.value = !1, ae.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Le() {
      if (P.value.trim()) {
        U.value = !0, A.value = null;
        try {
          const oe = await c(P.value.trim());
          R.value = P.value.trim(), z.value = oe;
        } catch (oe) {
          A.value = oe instanceof Error ? oe.message : "Failed to analyze repository";
        } finally {
          U.value = !1;
        }
      }
    }
    function Z(oe) {
      try {
        const Me = new URL(oe);
        return Me.host + Me.pathname.replace(/\.git$/, "");
      } catch {
        return oe;
      }
    }
    async function ye(oe) {
      if (!oe) {
        H.value = "Environment name is required";
        return;
      }
      try {
        const Me = await u(oe);
        H.value = Me.valid ? null : Me.error || "Invalid name";
      } catch {
        H.value = "Failed to validate name";
      }
    }
    async function O() {
      if (E.value.name && !(!w.value && !R.value)) {
        g.value = !0, _.value = !1, ae.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let oe;
          if (w.value)
            oe = await d(
              w.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (R.value)
            oe = await m(
              R.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          oe.status === "started" ? me() : (k.value = !1, $.value = oe.message, g.value = !1, _.value = !0);
        } catch (oe) {
          k.value = !1, $.value = oe instanceof Error ? oe.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
        }
      }
    }
    async function me() {
      if (p) return;
      const oe = async () => {
        try {
          const fe = await v();
          return ae.value = {
            message: fe.message,
            phase: fe.phase || "",
            progress: fe.progress ?? (fe.state === "importing" ? 50 : 0),
            error: fe.error || null
          }, fe.state === "complete" ? (Re(), k.value = !0, $.value = `Environment '${fe.environment_name}' created successfully`, g.value = !1, _.value = !0, fe.environment_name && l("import-complete", fe.environment_name, E.value.switchAfterImport), !1) : fe.state === "error" ? (Re(), k.value = !1, $.value = fe.error || fe.message, g.value = !1, _.value = !0, !1) : !0;
        } catch (fe) {
          return console.error("Failed to poll import progress:", fe), !0;
        }
      };
      await oe() && (p = setInterval(async () => {
        await oe() || Re();
      }, 2e3));
    }
    function Re() {
      p && (clearInterval(p), p = null);
    }
    function ve(oe) {
      return oe < 1024 ? `${oe} B` : oe < 1024 * 1024 ? `${(oe / 1024).toFixed(1)} KB` : oe < 1024 * 1024 * 1024 ? `${(oe / (1024 * 1024)).toFixed(1)} MB` : `${(oe / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return at(async () => {
      try {
        const oe = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", oe.environment_name), g.value = !0, E.value.name = oe.environment_name || E.value.name || "", ae.value = {
          progress: oe.progress ?? 0,
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          error: null
        }, me());
      } catch (oe) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", oe);
      }
    }), t({
      handleReset: J,
      isImporting: g,
      canImport: ke
    }), (oe, Me) => {
      var fe;
      return n(), i("div", SS, [
        !w.value && !R.value && !g.value ? (n(), i("div", IS, [
          C(b3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: Q
          }),
          Me[7] || (Me[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", ES, [
            Me[5] || (Me[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", TS, [
              Tt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Me[0] || (Me[0] = (le) => P.value = le),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: fs(Le, ["enter"]),
                disabled: U.value
              }, null, 40, MS), [
                [Zo, P.value]
              ]),
              C(Te, {
                variant: "primary",
                size: "sm",
                disabled: !P.value.trim() || U.value,
                onClick: Le
              }, {
                default: h(() => [
                  x(f(U.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (n(), i("div", PS, f(A.value), 1)) : y("", !0),
            Me[6] || (Me[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || R.value) && !g.value && !_.value ? (n(), i("div", RS, [
          s("div", LS, [
            w.value ? (n(), i("div", DS, [
              Me[8] || (Me[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", NS, [
                s("div", OS, f(w.value.name), 1),
                s("div", US, f(ve(w.value.size)), 1)
              ])
            ])) : R.value ? (n(), i("div", AS, [
              Me[10] || (Me[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", zS, [
                s("div", FS, f(Z(R.value)), 1),
                Me[9] || (Me[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(Te, {
              variant: "ghost",
              size: "sm",
              onClick: G
            }, {
              default: h(() => [...Me[11] || (Me[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", VS, [...Me[12] || (Me[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : T.value ? (n(), L(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [T.value]
          }, null, 8, ["details"])) : z.value ? (n(), L(tS, {
            key: 2,
            "source-environment": ce.value.sourceEnvironment,
            workflows: ce.value.workflows,
            models: ce.value.models,
            nodes: ce.value.nodes,
            "git-branch": ce.value.gitBranch,
            "git-commit": ce.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          z.value ? (n(), L(xS, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": Me[1] || (Me[1] = (le) => E.value.name = le),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": Me[2] || (Me[2] = (le) => E.value.modelStrategy = le),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": Me[3] || (Me[3] = (le) => E.value.torchBackend = le),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": Me[4] || (Me[4] = (le) => E.value.switchAfterImport = le),
            "name-error": H.value,
            onValidateName: ye
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((fe = z.value) != null && fe.models_needing_download) ? (n(), L(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${z.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", BS, [
            C(Te, {
              variant: "secondary",
              size: "md",
              onClick: G
            }, {
              default: h(() => [...Me[13] || (Me[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Te, {
              variant: "primary",
              size: "md",
              disabled: !ke.value,
              onClick: O
            }, {
              default: h(() => [...Me[14] || (Me[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (n(), i("div", WS, [
          s("p", GS, [
            Me[15] || (Me[15] = x(" Importing environment ", -1)),
            s("strong", null, f(E.value.name), 1),
            Me[16] || (Me[16] = x("... ", -1))
          ]),
          C(qn, {
            progress: ae.value.progress,
            message: ae.value.message,
            "current-phase": ae.value.phase,
            variant: ae.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ae.value.error ? y("", !0) : (n(), i("p", jS, " This may take several minutes. Please wait... ")),
          ae.value.error ? (n(), i("div", HS, [
            s("p", qS, f(ae.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (n(), i("div", KS, [
          s("div", {
            class: Ve(["complete-icon", k.value ? "success" : "error"])
          }, f(k.value ? "✓" : "✕"), 3),
          s("div", JS, [
            s("div", QS, f(k.value ? "Import Successful" : "Import Failed"), 1),
            s("div", YS, f($.value), 1)
          ]),
          s("div", XS, [
            C(Te, {
              variant: "primary",
              size: "md",
              onClick: J
            }, {
              default: h(() => [...Me[17] || (Me[17] = [
                x(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), gc = /* @__PURE__ */ xe(ZS, [["__scopeId", "data-v-72cbc04e"]]), e5 = /* @__PURE__ */ be({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, a = b(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(j, null, [
      C(At, null, Yt({
        content: h(() => [
          C(gc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            C(zt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      C(Xt, {
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
}), t5 = /* @__PURE__ */ xe(e5, [["__scopeId", "data-v-41b1f298"]]), s5 = { class: "base-tabs" }, o5 = ["disabled", "onClick"], n5 = {
  key: 0,
  class: "base-tabs__badge"
}, a5 = /* @__PURE__ */ be({
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
    return (r, c) => (n(), i("div", s5, [
      (n(!0), i(j, null, he(e.tabs, (u) => (n(), i("button", {
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
        x(f(u.label) + " ", 1),
        u.badge ? (n(), i("span", n5, f(u.badge), 1)) : y("", !0)
      ], 10, o5))), 128))
    ]));
  }
}), Ml = /* @__PURE__ */ xe(a5, [["__scopeId", "data-v-ad5e6cad"]]), l5 = { class: "commit-list" }, i5 = /* @__PURE__ */ be({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (n(), i("div", l5, [
      st(t.$slots, "default", {}, void 0)
    ]));
  }
}), hc = /* @__PURE__ */ xe(i5, [["__scopeId", "data-v-8c5ee761"]]), r5 = { class: "commit-message" }, c5 = { class: "commit-date" }, u5 = /* @__PURE__ */ be({
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
      class: Ve(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(pc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", r5, f(e.message), 1),
      s("span", c5, f(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = vt(() => {
        }, ["stop"]))
      }, [
        st(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), yc = /* @__PURE__ */ xe(u5, [["__scopeId", "data-v-dd7c621b"]]), d5 = /* @__PURE__ */ be({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = M(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (n(), L(At, null, Yt({
      content: h(() => [
        e.commits.length === 0 ? (n(), L(cs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), L(hc, { key: 1 }, {
          default: h(() => [
            (n(!0), i(j, null, he(e.commits, (r) => (n(), L(yc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                C(Te, {
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
          C(zt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), f5 = /* @__PURE__ */ xe(d5, [["__scopeId", "data-v-fa4bf3a1"]]), m5 = { class: "branch-create-form" }, v5 = { class: "form-actions" }, p5 = /* @__PURE__ */ be({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, a = b(""), l = M(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, d) => (n(), i("div", m5, [
      C(ho, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => a.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", v5, [
        C(Te, {
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
        C(Te, {
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
}), g5 = /* @__PURE__ */ xe(p5, [["__scopeId", "data-v-7c500394"]]), h5 = { class: "branch-list-item__indicator" }, y5 = { class: "branch-list-item__name" }, w5 = {
  key: 0,
  class: "branch-list-item__actions"
}, _5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, k5 = /* @__PURE__ */ be({
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
      s("span", h5, f(e.isCurrent ? "●" : "○"), 1),
      s("span", y5, f(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (n(), i("div", w5, [
        st(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", _5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), b5 = /* @__PURE__ */ xe(k5, [["__scopeId", "data-v-c6581a24"]]), $5 = { class: "header-info" }, C5 = { class: "branch-name" }, x5 = {
  key: 0,
  class: "current-badge"
}, S5 = { class: "branch-meta" }, I5 = { key: 0 }, E5 = {
  key: 0,
  class: "meta-note"
}, T5 = {
  key: 0,
  class: "loading"
}, M5 = {
  key: 1,
  class: "empty-state"
}, P5 = /* @__PURE__ */ be({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = ct(), a = b([]), l = b(!1), r = b(!0);
    return at(async () => {
      try {
        const c = await o(t.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), L(It, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", $5, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", C5, f(e.branchName), 1),
          e.isCurrent ? (n(), i("span", x5, "CURRENT")) : y("", !0)
        ]),
        C(Ne, {
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
        s("div", S5, [
          r.value ? (n(), i("span", I5, "Loading...")) : (n(), i(j, { key: 1 }, [
            s("span", null, f(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", E5, "(showing first " + f(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", T5, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", M5, " No commits found on this branch ")) : (n(), L(hc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(j, null, he(a.value, (d) => (n(), L(yc, {
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
        e.isCurrent ? y("", !0) : (n(), L(Te, {
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
        e.isCurrent ? y("", !0) : (n(), L(Ne, {
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
}), R5 = /* @__PURE__ */ xe(P5, [["__scopeId", "data-v-2e5437cc"]]), L5 = {
  key: 2,
  class: "branch-list"
}, D5 = /* @__PURE__ */ be({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, a = b(!1), l = b(null);
    function r(v) {
      o("create", v), c();
    }
    function c() {
      a.value = !1;
    }
    function u(v) {
      l.value = v;
    }
    function d(v) {
      l.value = null, o("delete", v);
    }
    function m(v) {
      l.value = null, o("switch", v);
    }
    return (v, p) => (n(), L(At, null, Yt({
      content: h(() => [
        a.value ? (n(), L(g5, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), L(cs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", L5, [
          (n(!0), i(j, null, he(e.branches, (w) => (n(), L(b5, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (n(), L(Te, {
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
        l.value ? (n(), L(R5, {
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
          C(zt, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (n(), L(Te, {
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
}), N5 = /* @__PURE__ */ xe(D5, [["__scopeId", "data-v-a3de96cc"]]);
function wc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const O5 = { class: "remote-url-display" }, U5 = ["title"], A5 = ["title"], z5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, F5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, V5 = /* @__PURE__ */ be({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = b(!1), a = M(() => {
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
    return (r, c) => (n(), i("div", O5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, f(a.value), 9, U5),
      s("button", {
        class: Ve(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", F5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", z5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, A5)
    ]));
  }
}), B5 = /* @__PURE__ */ xe(V5, [["__scopeId", "data-v-7768a58d"]]), W5 = { class: "remote-title" }, G5 = {
  key: 0,
  class: "default-badge"
}, j5 = {
  key: 1,
  class: "sync-badge"
}, H5 = {
  key: 0,
  class: "ahead"
}, q5 = {
  key: 1,
  class: "behind"
}, K5 = {
  key: 1,
  class: "synced"
}, J5 = ["href"], Q5 = {
  key: 1,
  class: "remote-url-text"
}, Y5 = /* @__PURE__ */ be({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = M(() => t.fetchingRemote === t.remote.name), a = M(() => t.remote.is_default), l = M(() => t.syncStatus && t.syncStatus.behind > 0), r = M(() => t.syncStatus && t.syncStatus.ahead > 0), c = M(() => t.remote.push_url !== t.remote.fetch_url), u = M(() => {
      const m = t.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = M(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (n(), L(Vt, {
      status: a.value ? "synced" : void 0
    }, Yt({
      icon: h(() => [
        x(f(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", W5, [
          s("span", null, f(e.remote.name), 1),
          a.value ? (n(), i("span", G5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", j5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", H5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", q5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", K5, "✓ synced"))
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
          onClick: v[0] || (v[0] = vt(() => {
          }, ["stop"]))
        }, f(d.value), 9, J5)) : (n(), i("span", Q5, f(d.value), 1))
      ]),
      actions: h(() => [
        C(Te, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (p) => m.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
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
          default: h(() => [
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
          default: h(() => [
            x(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(Te, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            x(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), L(Te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => m.$emit("remove", e.remote.name))
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), L(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              C(B5, {
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
}), X5 = /* @__PURE__ */ xe(Y5, [["__scopeId", "data-v-8310f3a8"]]), Z5 = ["for"], e8 = {
  key: 0,
  class: "base-form-field-required"
}, t8 = { class: "base-form-field-input" }, s8 = {
  key: 1,
  class: "base-form-field-error"
}, o8 = {
  key: 2,
  class: "base-form-field-hint"
}, n8 = /* @__PURE__ */ be({
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
    const t = e, o = M(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Ve(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        x(f(e.label) + " ", 1),
        e.required ? (n(), i("span", e8, "*")) : y("", !0)
      ], 8, Z5)) : y("", !0),
      s("div", t8, [
        st(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", s8, f(e.error), 1)) : e.hint ? (n(), i("span", o8, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ xe(n8, [["__scopeId", "data-v-9a1cf296"]]), a8 = { class: "remote-form" }, l8 = { class: "form-header" }, i8 = { class: "form-body" }, r8 = {
  key: 0,
  class: "form-error"
}, c8 = { class: "form-actions" }, u8 = /* @__PURE__ */ be({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = b({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = b(!1), c = b(null);
    wt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = M(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (m) {
          c.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (m, v) => (n(), i("div", a8, [
      s("div", l8, [
        C(as, null, {
          default: h(() => [
            x(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", i8, [
        C(Ot, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            C(bt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        C(Ot, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            C(bt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(Ot, { label: "Push URL (optional)" }, {
          default: h(() => [
            C(bt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", r8, f(c.value), 1)) : y("", !0)
      ]),
      s("div", c8, [
        C(Te, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            x(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(Te, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => m.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), d8 = /* @__PURE__ */ xe(u8, [["__scopeId", "data-v-56021b18"]]), f8 = { class: "conflict-summary-box" }, m8 = { class: "summary-header" }, v8 = { class: "summary-text" }, p8 = { key: 0 }, g8 = {
  key: 1,
  class: "all-resolved"
}, h8 = { class: "summary-progress" }, y8 = { class: "progress-bar" }, w8 = { class: "progress-text" }, _8 = /* @__PURE__ */ be({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = M(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", f8, [
      s("div", m8, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", v8, [
          s("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", p8, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (n(), i("p", g8, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      s("div", h8, [
        s("div", y8, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", w8, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), k8 = /* @__PURE__ */ xe(_8, [["__scopeId", "data-v-4e9e6cc9"]]), b8 = { class: "modal-header" }, $8 = { class: "modal-title" }, C8 = { class: "modal-body" }, x8 = {
  key: 0,
  class: "error-box"
}, S8 = {
  key: 0,
  class: "error-hint"
}, I8 = {
  key: 1,
  class: "loading-state"
}, E8 = { class: "commit-summary" }, T8 = {
  key: 0,
  class: "commits-section"
}, M8 = { class: "commit-list" }, P8 = { class: "commit-hash" }, R8 = { class: "commit-message" }, L8 = { class: "commit-date" }, D8 = {
  key: 1,
  class: "changes-section"
}, N8 = {
  key: 0,
  class: "change-group",
  open: ""
}, O8 = { class: "change-count" }, U8 = { class: "change-list" }, A8 = {
  key: 0,
  class: "conflict-badge"
}, z8 = {
  key: 1,
  class: "change-group"
}, F8 = { class: "change-count" }, V8 = { class: "change-list" }, B8 = {
  key: 2,
  class: "change-group"
}, W8 = { class: "change-count" }, G8 = { class: "change-list" }, j8 = {
  key: 3,
  class: "strategy-section"
}, H8 = { class: "radio-group" }, q8 = { class: "radio-option" }, K8 = { class: "radio-option" }, J8 = { class: "radio-option" }, Q8 = {
  key: 4,
  class: "up-to-date"
}, Y8 = { class: "modal-actions" }, Si = "comfygit.pullModelStrategy", X8 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = b(localStorage.getItem(Si) || "skip");
    wt(l, ($) => {
      localStorage.setItem(Si, $);
    });
    const r = M(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = M(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = M(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = M(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = M(() => o.preview && wc(o.preview) ? o.preview : null), v = M(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), p = M(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = M(
      () => v.value > 0 && p.value === v.value
    ), g = M(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _($) {
      if (!m.value) return !1;
      const S = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((T) => T.name === S);
    }
    function k($) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: $, resolutions: S });
    }
    return ($, S) => {
      var T, P;
      return n(), L(Lt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (R) => $.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", b8, [
              s("h3", $8, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (R) => $.$emit("close"))
              }, "✕")
            ]),
            s("div", C8, [
              e.error ? (n(), i("div", x8, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, f(e.error), 1),
                  r.value ? (n(), i("p", S8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", I8, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), i(j, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(j, { key: 3 }, [
                s("div", E8, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", T8, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", M8, [
                    (n(!0), i(j, null, he(e.preview.commits, (R) => (n(), i("div", {
                      key: R.hash,
                      class: "commit-item"
                    }, [
                      s("span", P8, f(R.short_hash || R.hash.slice(0, 7)), 1),
                      s("span", R8, f(R.message), 1),
                      s("span", L8, f(R.date_relative || R.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", D8, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", N8, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", O8, f(c.value) + " changes", 1)
                    ]),
                    s("div", U8, [
                      (n(!0), i(j, null, he(e.preview.changes.workflows.added, (R) => (n(), i("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + f(R), 1))), 128)),
                      (n(!0), i(j, null, he(e.preview.changes.workflows.modified, (R) => (n(), i("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + f(R) + " ", 1),
                        _(R) ? (n(), i("span", A8, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(j, null, he(e.preview.changes.workflows.deleted, (R) => (n(), i("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + f(R), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", z8, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", F8, f(u.value) + " to install", 1)
                    ]),
                    s("div", V8, [
                      (n(!0), i(j, null, he(e.preview.changes.nodes.to_install, (R) => (n(), i("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + f(R), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", B8, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", W8, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", G8, [
                      (n(!0), i(j, null, he(e.preview.changes.models.referenced, (R) => (n(), i("div", {
                        key: R,
                        class: "change-item"
                      }, f(R), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (n(), L(k8, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", j8, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", H8, [
                    s("label", q8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (R) => l.value = R),
                        value: "all"
                      }, null, 512), [
                        [Rn, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", K8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (R) => l.value = R),
                        value: "required"
                      }, null, 512), [
                        [Rn, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", J8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (R) => l.value = R),
                        value: "skip"
                      }, null, 512), [
                        [Rn, l.value]
                      ]),
                      S[25] || (S[25] = s("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", Q8, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", Y8, [
              C(Te, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (R) => $.$emit("close"))
              }, {
                default: h(() => [...S[30] || (S[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(j, { key: 0 }, [
                C(Te, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (R) => k(!1))
                }, {
                  default: h(() => [...S[31] || (S[31] = [
                    x(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(Te, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (R) => k(!0))
                }, {
                  default: h(() => [...S[32] || (S[32] = [
                    x(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (P = e.preview) != null && P.has_uncommitted_changes ? (n(), L(Te, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (R) => k(!0))
              }, {
                default: h(() => [...S[33] || (S[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(j, { key: 2 }, [
                m.value && !w.value ? (n(), L(Te, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (R) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    x(" Resolve Conflicts (" + f(p.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), L(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: S[9] || (S[9] = (R) => k(!1))
                }, {
                  default: h(() => [...S[34] || (S[34] = [
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
}), Z8 = /* @__PURE__ */ xe(X8, [["__scopeId", "data-v-1d633bba"]]), e4 = { class: "modal-header" }, t4 = { class: "modal-title" }, s4 = { class: "modal-body" }, o4 = {
  key: 0,
  class: "error-box"
}, n4 = {
  key: 1,
  class: "loading-state"
}, a4 = {
  key: 2,
  class: "warning-box"
}, l4 = {
  key: 1,
  class: "commits-section"
}, i4 = { class: "commit-list" }, r4 = { class: "commit-hash" }, c4 = { class: "commit-message" }, u4 = { class: "commit-date" }, d4 = { class: "force-option" }, f4 = { class: "checkbox-option" }, m4 = { class: "commit-summary" }, v4 = { key: 0 }, p4 = { key: 1 }, g4 = {
  key: 0,
  class: "info-box"
}, h4 = {
  key: 2,
  class: "commits-section"
}, y4 = { class: "commit-list" }, w4 = { class: "commit-hash" }, _4 = { class: "commit-message" }, k4 = { class: "commit-date" }, b4 = {
  key: 3,
  class: "up-to-date"
}, $4 = { class: "modal-actions" }, C4 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = b(!1), r = b(!1), c = M(() => {
      var w;
      return ((w = o.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), u = M(
      () => c.value.models_without_sources.length
    ), d = M(
      () => c.value.nodes_without_provenance.length
    ), m = M(
      () => u.value + d.value
    ), v = M(() => m.value > 0);
    function p(w) {
      a("push", { force: w });
    }
    return (w, g) => {
      var _, k, $, S;
      return n(), i(j, null, [
        (n(), L(Lt, { to: "body" }, [
          e.show ? (n(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (T) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = vt(() => {
              }, ["stop"]))
            }, [
              s("div", e4, [
                s("h3", t4, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (T) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", s4, [
                e.error ? (n(), i("div", o4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, f(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (n(), i("div", n4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (n(), i("div", a4, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (k = e.preview) != null && k.remote_has_new_commits ? (n(), i(j, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  v.value ? (n(), L(sl, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", l4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", i4, [
                      (n(!0), i(j, null, he(e.preview.commits, (T) => (n(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", r4, f(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", c4, f(T.message), 1),
                        s("span", u4, f(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", d4, [
                    s("label", f4, [
                      Tt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (T) => l.value = T)
                      }, null, 512), [
                        [jn, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (n(), i(j, { key: 4 }, [
                  s("div", m4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (n(), i("span", v4, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", p4, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (n(), i("div", g4, [...g[21] || (g[21] = [
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
                  v.value ? (n(), L(sl, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", h4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", y4, [
                      (n(!0), i(j, null, he(e.preview.commits, (T) => (n(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", w4, f(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", _4, f(T.message), 1),
                        s("span", k4, f(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (n(), i("div", b4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", $4, [
                C(Te, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (T) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                ($ = e.preview) != null && $.remote_has_new_commits ? (n(), i(j, { key: 0 }, [
                  C(Te, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (T) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      x(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  C(Te, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (T) => p(!0))
                  }, {
                    default: h(() => [
                      x(f(v.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), L(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (T) => p(!1))
                }, {
                  default: h(() => [
                    x(f(v.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((S = e.preview) != null && S.warnings) ? (n(), L(vc, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (T) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (T) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), x4 = /* @__PURE__ */ xe(C4, [["__scopeId", "data-v-7748bf33"]]), S4 = { class: "resolution-choice-group" }, I4 = ["disabled"], E4 = ["disabled"], T4 = /* @__PURE__ */ be({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("div", S4, [
      s("button", {
        class: Ve(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, I4),
      s("button", {
        class: Ve(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, E4)
    ]));
  }
}), M4 = /* @__PURE__ */ xe(T4, [["__scopeId", "data-v-985715ed"]]), P4 = { class: "conflict-header" }, R4 = { class: "conflict-info" }, L4 = { class: "workflow-name" }, D4 = { class: "conflict-description" }, N4 = {
  key: 0,
  class: "resolved-badge"
}, O4 = { class: "resolved-text" }, U4 = { class: "conflict-hashes" }, A4 = { class: "hash-item" }, z4 = { class: "hash-item" }, F4 = { class: "conflict-actions" }, V4 = /* @__PURE__ */ be({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = b(o.resolution);
    wt(() => o.resolution, (d) => {
      l.value = d;
    }), wt(l, (d) => {
      d && a("resolve", d);
    });
    const r = M(() => l.value !== null), c = M(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = M(() => {
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
        s("div", P4, [
          m[2] || (m[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", R4, [
            s("code", L4, f(e.conflict.name) + ".json", 1),
            s("div", D4, f(c.value), 1)
          ]),
          r.value ? (n(), i("div", N4, [
            m[1] || (m[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", O4, f(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", U4, [
          s("span", A4, [
            m[3] || (m[3] = x("Your: ", -1)),
            s("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", z4, [
            m[4] || (m[4] = x("Theirs: ", -1)),
            s("code", null, f(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", F4, [
          C(M4, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), B4 = /* @__PURE__ */ xe(V4, [["__scopeId", "data-v-506d3bbf"]]), W4 = { class: "resolution-content" }, G4 = {
  key: 0,
  class: "error-box"
}, j4 = { class: "resolution-header" }, H4 = { class: "header-stats" }, q4 = { class: "stat" }, K4 = { class: "stat-value" }, J4 = { class: "stat resolved" }, Q4 = { class: "stat-value" }, Y4 = {
  key: 0,
  class: "stat pending"
}, X4 = { class: "stat-value" }, Z4 = { class: "conflicts-list" }, eI = {
  key: 1,
  class: "all-resolved-message"
}, tI = /* @__PURE__ */ be({
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
    const o = e, a = t, l = M(() => o.resolutions.size), r = M(() => o.workflowConflicts.length - l.value), c = M(() => l.value === o.workflowConflicts.length), u = M(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = o.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function m(w, g) {
      a("resolve", w, g);
    }
    function v() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, g) => (n(), L(It, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", W4, [
          e.error ? (n(), i("div", G4, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", j4, [
            s("div", H4, [
              s("div", q4, [
                s("span", K4, f(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", J4, [
                s("span", Q4, f(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", Y4, [
                s("span", X4, f(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", Z4, [
            (n(!0), i(j, null, he(e.workflowConflicts, (_) => (n(), L(B4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (k) => m(_.name, k)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", eI, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Ne, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...g[7] || (g[7] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        C(Ne, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            x(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), sI = /* @__PURE__ */ xe(tI, [["__scopeId", "data-v-c58d150d"]]), oI = { class: "node-conflict-item" }, nI = { class: "node-header" }, aI = { class: "node-name" }, lI = { class: "node-id" }, iI = { class: "version-comparison" }, rI = { class: "version yours" }, cI = { class: "version theirs" }, uI = { class: "chosen-version" }, dI = { class: "chosen" }, fI = { class: "chosen-reason" }, mI = { class: "affected-workflows" }, vI = { class: "wf-source" }, pI = { class: "wf-version" }, gI = /* @__PURE__ */ be({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", oI, [
      s("div", nI, [
        s("code", aI, f(e.conflict.node_name), 1),
        s("span", lI, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      s("div", iI, [
        s("div", rI, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", cI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      s("div", uI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", dI, f(e.conflict.chosen_version), 1),
        s("span", fI, f(e.conflict.chosen_reason), 1)
      ]),
      s("details", mI, [
        s("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (n(!0), i(j, null, he(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            s("code", null, f(a.name), 1),
            s("span", vI, "(" + f(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", pI, "needs v" + f(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), hI = /* @__PURE__ */ xe(gI, [["__scopeId", "data-v-8b626725"]]), yI = { class: "validation-content" }, wI = {
  key: 0,
  class: "compatible-message"
}, _I = { class: "conflicts-list" }, kI = {
  key: 2,
  class: "warnings-section"
}, bI = /* @__PURE__ */ be({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = M(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), L(It, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", yI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", wI, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(j, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", _I, [
              (n(!0), i(j, null, he(e.validation.node_conflicts, (u) => (n(), L(hI, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", kI, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (n(!0), i(j, null, he(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Ne, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        C(Ne, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Ne, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            x(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), $I = /* @__PURE__ */ xe(bI, [["__scopeId", "data-v-fefd26ed"]]), CI = {
  key: 0,
  class: "embedded-toolbar"
}, xI = { class: "embedded-toolbar-search" }, SI = { key: 0 }, II = /* @__PURE__ */ be({
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
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = ct(), _ = b([]), k = b(null), $ = b({}), S = b(!1), T = b(null), P = b(""), R = b(!1), U = b(null), A = b(!1), z = b("add"), E = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), H = M(() => {
      if (!P.value.trim()) return _.value;
      const ze = P.value.toLowerCase();
      return _.value.filter(
        (N) => N.name.toLowerCase().includes(ze) || N.fetch_url.toLowerCase().includes(ze) || N.push_url.toLowerCase().includes(ze)
      );
    });
    async function ae() {
      S.value = !0, T.value = null;
      try {
        const ze = await a();
        _.value = ze.remotes, k.value = ze.current_branch_tracking || null, await Promise.all(
          ze.remotes.map(async (N) => {
            const se = await d(N.name);
            se && ($.value[N.name] = se);
          })
        );
      } catch (ze) {
        T.value = ze instanceof Error ? ze.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function de() {
      z.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function ce(ze) {
      const N = _.value.find((se) => se.name === ze);
      N && (z.value = "edit", E.value = {
        name: N.name,
        fetchUrl: N.fetch_url,
        pushUrl: N.push_url
      }, A.value = !0);
    }
    async function ke(ze) {
      try {
        z.value === "add" ? await l(ze.name, ze.fetchUrl) : await c(ze.name, ze.fetchUrl, ze.pushUrl || void 0), A.value = !1, await ae();
      } catch (N) {
        T.value = N instanceof Error ? N.message : "Operation failed";
      }
    }
    function Q() {
      A.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function G(ze) {
      U.value = ze;
      try {
        await u(ze);
        const N = await d(ze);
        N && ($.value[ze] = N), o("toast", `✓ Fetched from ${ze}`, "success");
      } catch (N) {
        o("toast", N instanceof Error ? N.message : "Fetch failed", "error");
      } finally {
        U.value = null;
      }
    }
    async function J(ze) {
      if (confirm(`Remove remote "${ze}"?`))
        try {
          await r(ze), await ae();
        } catch (N) {
          T.value = N instanceof Error ? N.message : "Failed to remove remote";
        }
    }
    function Le() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Z = b("idle"), ye = M(() => Z.value === "pull_preview"), O = M(
      () => Z.value === "resolving" || Z.value === "validating"
    ), me = M(
      () => Z.value === "validation_review" || Z.value === "executing"
    ), Re = b(!1), ve = b(null), ee = b(!1), Y = b(null), we = b(null), te = b(!1), oe = b(null), Me = b(null), fe = b(/* @__PURE__ */ new Map()), le = b(null), I = b(null), V = M(() => oe.value && wc(oe.value) ? oe.value : null);
    async function ie(ze) {
      we.value = ze, Z.value = "pull_preview", te.value = !0, oe.value = null, Me.value = null;
      try {
        oe.value = await m(ze);
      } catch (N) {
        Me.value = N instanceof Error ? N.message : "Failed to load pull preview";
      } finally {
        te.value = !1;
      }
    }
    function Ie() {
      Z.value = "idle", oe.value = null, Me.value = null, we.value = null;
    }
    async function $e(ze) {
      if (!we.value) return;
      Z.value = "executing", Me.value = null;
      const N = we.value;
      try {
        const se = await v(N, ze);
        if (se.rolled_back) {
          Me.value = `Pull failed and was rolled back: ${se.error || "Unknown error"}`, Z.value = "pull_preview";
          return;
        }
        pe(), Z.value = "idle", o("toast", `✓ Pulled from ${N}`, "success"), await ae();
      } catch (se) {
        Me.value = se instanceof Error ? se.message : "Pull failed", Z.value = "pull_preview";
      }
    }
    function Se() {
      V.value && (Z.value = "resolving", I.value = null);
    }
    function Ae(ze, N) {
      fe.value.set(ze, { name: ze, resolution: N });
    }
    function Fe() {
      Z.value = "pull_preview";
    }
    async function De() {
      Z.value = "validating", I.value = null;
      try {
        const ze = Array.from(fe.value.values());
        le.value = await g(we.value, ze), Z.value = "validation_review";
      } catch (ze) {
        I.value = ze instanceof Error ? ze.message : "Validation failed", Z.value = "resolving";
      }
    }
    async function Ee() {
      Z.value = "executing";
      const ze = we.value;
      try {
        const N = Array.from(fe.value.values()), se = await v(ze, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: N
        });
        if (se.rolled_back) {
          Me.value = `Pull failed and was rolled back: ${se.error || "Unknown error"}`, Z.value = "pull_preview";
          return;
        }
        pe(), Z.value = "idle", o("toast", `✓ Pulled from ${ze}`, "success"), await ae();
      } catch (N) {
        Me.value = N instanceof Error ? N.message : "Pull failed", Z.value = "validation_review";
      }
    }
    function Ke() {
      Z.value = "resolving";
    }
    function Be() {
      pe(), Z.value = "idle";
    }
    function pe() {
      fe.value.clear(), le.value = null, I.value = null, Me.value = null, oe.value = null, we.value = null;
    }
    async function K(ze) {
      we.value = ze, Re.value = !0, te.value = !0, ve.value = null, Y.value = null;
      try {
        ve.value = await p(ze);
      } catch (N) {
        Y.value = N instanceof Error ? N.message : "Failed to load push preview";
      } finally {
        te.value = !1;
      }
    }
    async function He() {
      if (we.value) {
        te.value = !0, Y.value = null;
        try {
          ve.value = await p(we.value);
        } catch (ze) {
          Y.value = ze instanceof Error ? ze.message : "Failed to refresh push preview";
        } finally {
          te.value = !1;
        }
      }
    }
    function Ce() {
      Re.value = !1, ve.value = null, Y.value = null, we.value = null;
    }
    async function Ye(ze) {
      var se;
      if (!we.value) return;
      ee.value = !0;
      const N = we.value;
      Y.value = null;
      try {
        await w(N, ze), Ce(), o("toast", `✓ Pushed to ${N}`, "success"), await ae();
      } catch (ge) {
        const Je = ge instanceof Error ? ge.message : "Push failed";
        Y.value = Je, ge instanceof Zr && ge.status === 409 && ((se = ge.data) != null && se.needs_force) && ve.value ? ve.value = {
          ...ve.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", Je, "error");
      } finally {
        ee.value = !1;
      }
    }
    function ot() {
      const ze = we.value;
      Ce(), ze && ie(ze);
    }
    return at(ae), (ze, N) => (n(), i(j, null, [
      C(At, null, Yt({
        content: h(() => [
          S.value ? (n(), L(xs, {
            key: 0,
            message: "Loading remotes..."
          })) : T.value ? (n(), L(Ss, {
            key: 1,
            message: T.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            e.embedded && !A.value ? (n(), i("div", CI, [
              s("div", xI, [
                C(io, {
                  modelValue: P.value,
                  "onUpdate:modelValue": N[2] || (N[2] = (se) => P.value = se),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              C(Te, {
                variant: "primary",
                size: "sm",
                onClick: de
              }, {
                default: h(() => [...N[5] || (N[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            A.value ? (n(), L(d8, {
              key: 1,
              mode: z.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: ke,
              onCancel: Q
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !A.value ? (n(), L(ra, {
              key: 2,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                k.value ? (n(), i("span", SI, " • Tracking: " + f(k.value.remote) + "/" + f(k.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            H.value.length && !A.value ? (n(), L(St, {
              key: 3,
              title: "REMOTES",
              count: H.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(H.value, (se) => (n(), L(X5, {
                  key: se.name,
                  remote: se,
                  "sync-status": $.value[se.name],
                  "fetching-remote": U.value,
                  onFetch: G,
                  onEdit: ce,
                  onRemove: J,
                  onPull: ie,
                  onPush: K
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !H.value.length && !A.value ? (n(), L(cs, {
              key: 4,
              icon: "🌐",
              message: P.value ? `No remotes match '${P.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                C(Te, {
                  variant: "primary",
                  onClick: de
                }, {
                  default: h(() => [...N[6] || (N[6] = [
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
            C(zt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: N[0] || (N[0] = (se) => R.value = !0)
            }, {
              actions: h(() => [
                A.value ? y("", !0) : (n(), L(Te, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: de
                }, {
                  default: h(() => [...N[4] || (N[4] = [
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
            A.value ? y("", !0) : (n(), L(io, {
              key: 0,
              modelValue: P.value,
              "onUpdate:modelValue": N[1] || (N[1] = (se) => P.value = se),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      C(Xt, {
        show: R.value,
        title: "About Git Remotes",
        onClose: N[3] || (N[3] = (se) => R.value = !1)
      }, {
        content: h(() => [...N[7] || (N[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            x(" The "),
            s("strong", null, '"origin"'),
            x(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          C(Te, {
            variant: "link",
            onClick: Le
          }, {
            default: h(() => [...N[8] || (N[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(Z8, {
        show: ye.value,
        "remote-name": we.value || "",
        preview: oe.value,
        loading: te.value,
        pulling: Z.value === "executing",
        error: Me.value,
        "conflict-resolutions": fe.value,
        onClose: Ie,
        onPull: $e,
        onOpenConflictResolution: Se
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(x4, {
        show: Re.value,
        "remote-name": we.value || "",
        preview: ve.value,
        loading: te.value,
        pushing: ee.value,
        error: Y.value,
        onClose: Ce,
        onPush: Ye,
        onPullFirst: ot,
        onRevalidate: He
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      O.value && V.value ? (n(), L(sI, {
        key: 0,
        "workflow-conflicts": V.value.workflow_conflicts,
        resolutions: fe.value,
        "operation-type": "pull",
        validating: Z.value === "validating",
        error: I.value,
        onClose: Fe,
        onResolve: Ae,
        onApply: De
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      me.value && le.value ? (n(), L($I, {
        key: 1,
        validation: le.value,
        "operation-type": "pull",
        executing: Z.value === "executing",
        onProceed: Ee,
        onGoBack: Ke,
        onCancel: Be
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), EI = /* @__PURE__ */ xe(II, [["__scopeId", "data-v-a189530f"]]), TI = /* @__PURE__ */ be({
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
    ], r = b(o.initialTab ?? "history");
    return wt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (n(), L(At, null, {
      header: h(() => [
        C(zt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        C(Ml, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (n(), L(f5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), L(N5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), L(EI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, m) => a("toast", d, m))
        }))
      ]),
      _: 1
    }));
  }
});
async function _c(e) {
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
const MI = { class: "text-viewer-wrapper" }, PI = ["disabled", "title"], RI = { class: "text-content" }, LI = /* @__PURE__ */ be({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = b(null), a = b("idle");
    async function l() {
      if (t.content)
        try {
          await _c(t.content), a.value = "copied", setTimeout(() => {
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
    return (u, d) => (n(), i("div", MI, [
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
        }, f(a.value === "copied" ? "Copied!" : "Copy"), 9, PI),
        s("pre", RI, f(e.content), 1)
      ], 544)
    ]));
  }
}), DI = /* @__PURE__ */ xe(LI, [["__scopeId", "data-v-85a537ba"]]), NI = {
  key: 1,
  class: "manifest-viewer-shell"
}, OI = { class: "manifest-path" }, UI = /* @__PURE__ */ be({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ct(), o = b(!1), a = b(null), l = b(!1), r = b({
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
    return at(c), (u, d) => (n(), i(j, null, [
      C(At, null, Yt({
        content: h(() => [
          o.value ? (n(), L(xs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), L(Ss, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), L(cs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", NI, [
              C(DI, {
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
            C(zt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (m) => l.value = !0)
            }, {
              actions: h(() => [
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: h(() => [
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
      C(Xt, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (m) => l.value = !1)
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
          s("div", OI, [
            s("code", null, f(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          C(Te, {
            variant: "primary",
            onClick: d[1] || (d[1] = (m) => l.value = !1)
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
}), AI = /* @__PURE__ */ xe(UI, [["__scopeId", "data-v-814a8fdd"]]), zI = { class: "log-viewer-wrapper" }, FI = ["disabled", "title"], VI = /* @__PURE__ */ be({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = b(null), a = b("idle"), l = M(() => t.logs.map((m) => ({
      text: t.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function r() {
      var v;
      await Pt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    at(r), wt(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const m = l.value.map((v) => v.text).join(`
`);
      try {
        await _c(m), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy logs:", v);
      }
    }
    function u(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function d(m) {
      m.stopPropagation();
    }
    return (m, v) => (n(), i("div", zI, [
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
        }, f(a.value === "copied" ? "Copied!" : "Copy"), 9, FI),
        (n(!0), i(j, null, he(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: Ve(`log-line log-level-${p.level.toLowerCase()}`)
        }, f(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), kc = /* @__PURE__ */ xe(VI, [["__scopeId", "data-v-5aaf1b88"]]), BI = /* @__PURE__ */ be({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ct(), r = b([]), c = b(!1), u = b(null), d = b(!1), m = b("production"), v = b(null), p = b(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const k = await o();
          m.value = k.environment || "production";
        } catch {
        }
      } catch (k) {
        u.value = k instanceof Error ? k.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const k = await a();
        k.exists && (v.value = k.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        p.value = !0;
        try {
          await l(v.value);
        } catch (k) {
          console.error("Failed to open log file:", k);
        } finally {
          p.value = !1;
        }
      }
    }
    return at(() => {
      w(), g();
    }), (k, $) => (n(), i(j, null, [
      C(At, null, Yt({
        content: h(() => [
          c.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), L(Ss, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length === 0 ? (n(), L(cs, {
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
            C(zt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: $[0] || ($[0] = (S) => d.value = !0)
            }, {
              actions: h(() => [
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !v.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(f(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: h(() => [
                    x(f(c.value ? "Loading..." : "Refresh"), 1)
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
      C(Xt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (S) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            $[3] || ($[3] = x(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, f(m.value), 1),
            $[4] || ($[4] = x(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          C(Te, {
            variant: "primary",
            onClick: $[1] || ($[1] = (S) => d.value = !1)
          }, {
            default: h(() => [...$[6] || ($[6] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ii = /* @__PURE__ */ be({
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
    } = ct(), c = e, u = b(c.initialTab ?? "workspace"), d = b([]), m = b(!1), v = b(null), p = b(!1), w = b(null), g = b(null), _ = b(!1), k = M(() => u.value === "workspace" ? w.value : g.value);
    async function $() {
      m.value = !0, v.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
      } catch (P) {
        v.value = P instanceof Error ? P.message : `Failed to load ${u.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function S() {
      try {
        const [P, R] = await Promise.all([
          o(),
          l()
        ]);
        P.exists && (w.value = P.path), R.exists && (g.value = R.path);
      } catch {
      }
    }
    async function T() {
      if (k.value) {
        _.value = !0;
        try {
          await r(k.value);
        } catch (P) {
          console.error("Failed to open log file:", P);
        } finally {
          _.value = !1;
        }
      }
    }
    return wt(u, () => {
      $();
    }), wt(() => c.initialTab, (P) => {
      P && (u.value = P);
    }), at(() => {
      $(), S();
    }), (P, R) => (n(), i(j, null, [
      C(At, null, Yt({
        content: h(() => [
          m.value ? (n(), L(xs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : v.value ? (n(), L(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            d.value.length === 0 ? (n(), L(cs, {
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
            C(zt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: R[0] || (R[0] = (U) => p.value = !0)
            }, {
              actions: h(() => [
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T,
                  disabled: !k.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(f(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                C(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: $,
                  disabled: m.value
                }, {
                  default: h(() => [
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
          fn: h(() => [
            C(Ml, {
              modelValue: u.value,
              "onUpdate:modelValue": R[1] || (R[1] = (U) => u.value = U),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      C(Xt, {
        show: p.value,
        title: "About Logs",
        onClose: R[3] || (R[3] = (U) => p.value = !1)
      }, {
        content: h(() => [...R[4] || (R[4] = [
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
          C(Te, {
            variant: "primary",
            onClick: R[2] || (R[2] = (U) => p.value = !1)
          }, {
            default: h(() => [...R[5] || (R[5] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), WI = /* @__PURE__ */ be({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = b(t.initialTab ?? "manifest"), l = b(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = b(!1), c = M(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = M(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return wt(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), wt(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, m) => (n(), i(j, null, [
      C(At, null, Yt({
        header: h(() => [
          C(zt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (n(), L(AI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (n(), L(BI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (n(), L(Ii, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), L(Ii, {
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
            C(Ml, {
              modelValue: l.value,
              "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      C(Xt, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: m[3] || (m[3] = (v) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (n(), i(j, { key: 0 }, [
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
          ], 64)) : (n(), i(j, { key: 1 }, [
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
        actions: h(() => [
          C(Te, {
            variant: "primary",
            size: "sm",
            onClick: m[2] || (m[2] = (v) => r.value = !1)
          }, {
            default: h(() => [...m[11] || (m[11] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), GI = { class: "header-info" }, jI = { class: "commit-hash" }, HI = {
  key: 0,
  class: "commit-refs"
}, qI = { class: "commit-message" }, KI = { class: "commit-date" }, JI = {
  key: 0,
  class: "loading"
}, QI = {
  key: 1,
  class: "changes-section"
}, YI = { class: "stats-row" }, XI = { class: "stat" }, ZI = { class: "stat insertions" }, e6 = { class: "stat deletions" }, t6 = {
  key: 0,
  class: "change-group"
}, s6 = {
  key: 1,
  class: "change-group"
}, o6 = {
  key: 0,
  class: "version"
}, n6 = {
  key: 2,
  class: "change-group"
}, a6 = { class: "change-item" }, l6 = /* @__PURE__ */ be({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = ct(), a = b(null), l = b(!0), r = M(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = M(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return at(async () => {
      try {
        a.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), L(It, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, p, w;
        return [
          s("div", GI, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", jI, f(((m = a.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", HI, [
              (n(!0), i(j, null, he(a.value.refs, (g) => (n(), i("span", {
                key: g,
                class: "ref-badge"
              }, f(g), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Ne, {
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
        var m, v;
        return [
          s("div", qI, f(((m = a.value) == null ? void 0 : m.message) || e.commit.message), 1),
          s("div", KI, f(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", JI, "Loading details...")) : a.value ? (n(), i("div", QI, [
            s("div", YI, [
              s("span", XI, f(a.value.stats.files_changed) + " files", 1),
              s("span", ZI, "+" + f(a.value.stats.insertions), 1),
              s("span", e6, "-" + f(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", t6, [
              C(no, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, he(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", s6, [
              C(no, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, he(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p.name), 1),
                p.version ? (n(), i("span", o6, "(" + f(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", n6, [
              C(no, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", a6, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, f(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        C(Ne, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            x(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Ne, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => u.$emit("checkout", e.commit))
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
}), i6 = /* @__PURE__ */ xe(l6, [["__scopeId", "data-v-d256ff6d"]]), r6 = { class: "popover-header" }, c6 = { class: "popover-body" }, u6 = {
  key: 0,
  class: "changes-summary"
}, d6 = {
  key: 0,
  class: "change-item"
}, f6 = {
  key: 1,
  class: "change-item"
}, m6 = {
  key: 2,
  class: "change-item"
}, v6 = {
  key: 3,
  class: "change-item"
}, p6 = {
  key: 4,
  class: "change-item"
}, g6 = {
  key: 5,
  class: "change-item"
}, h6 = {
  key: 1,
  class: "no-changes"
}, y6 = {
  key: 2,
  class: "loading"
}, w6 = {
  key: 3,
  class: "issues-error"
}, _6 = { class: "error-header" }, k6 = { class: "error-title" }, b6 = { class: "issues-list" }, $6 = { class: "workflow-state" }, C6 = { class: "message-section" }, x6 = { class: "popover-footer" }, S6 = {
  key: 1,
  class: "commit-popover"
}, I6 = { class: "popover-header" }, E6 = { class: "popover-body" }, T6 = {
  key: 0,
  class: "changes-summary"
}, M6 = {
  key: 0,
  class: "change-item"
}, P6 = {
  key: 1,
  class: "change-item"
}, R6 = {
  key: 2,
  class: "change-item"
}, L6 = {
  key: 3,
  class: "change-item"
}, D6 = {
  key: 4,
  class: "change-item"
}, N6 = {
  key: 5,
  class: "change-item"
}, O6 = {
  key: 1,
  class: "no-changes"
}, U6 = {
  key: 2,
  class: "loading"
}, A6 = {
  key: 3,
  class: "issues-error"
}, z6 = { class: "error-header" }, F6 = { class: "error-title" }, V6 = { class: "issues-list" }, B6 = { class: "workflow-state" }, W6 = { class: "message-section" }, G6 = { class: "popover-footer" }, j6 = /* @__PURE__ */ be({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = b(""), c = b(!1), u = b(!1), d = M(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = M(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, k = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || k.nodes_added.length > 0 || k.nodes_removed.length > 0;
    }), v = M(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((k) => k.has_issues) : [];
    }), p = M(() => v.value.length > 0), w = M(() => p.value && !u.value);
    async function g() {
      var _, k, $, S;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const T = await l(r.value.trim(), u.value);
          if (T.status === "success") {
            const P = `Committed: ${((_ = T.summary) == null ? void 0 : _.new) || 0} new, ${((k = T.summary) == null ? void 0 : k.modified) || 0} modified, ${(($ = T.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            a("committed", { success: !0, message: P });
          } else if (T.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (T.status === "blocked") {
            const P = ((S = T.issues) == null ? void 0 : S.map((R) => `${R.name}: ${R.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${P}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: T.message || "Commit failed" });
        } catch (T) {
          a("committed", { success: !1, message: T instanceof Error ? T.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, k) => e.asModal ? (n(), L(Lt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: k[5] || (k[5] = ($) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: k[4] || (k[4] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", r6, [
            k[11] || (k[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: k[0] || (k[0] = ($) => a("close"))
            }, [...k[10] || (k[10] = [
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
          s("div", c6, [
            e.status && d.value ? (n(), i("div", u6, [
              e.status.workflows.new.length ? (n(), i("div", d6, [
                k[12] || (k[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", f6, [
                k[13] || (k[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", m6, [
                k[14] || (k[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", v6, [
                k[15] || (k[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", p6, [
                k[16] || (k[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (n(), i("div", g6, [...k[17] || (k[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", h6, " No changes to commit ")) : (n(), i("div", y6, " Loading... ")),
            p.value ? (n(), i("div", w6, [
              s("div", _6, [
                k[18] || (k[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", k6, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", b6, [
                (n(!0), i(j, null, he(v.value, ($) => (n(), i("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  s("strong", null, f($.name), 1),
                  s("span", $6, "(" + f($.sync_state) + ")", 1),
                  x(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Kn, {
                modelValue: u.value,
                "onUpdate:modelValue": k[1] || (k[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...k[19] || (k[19] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", C6, [
              C(Co, {
                modelValue: r.value,
                "onUpdate:modelValue": k[2] || (k[2] = ($) => r.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", x6, [
            C(Ne, {
              variant: "secondary",
              onClick: k[3] || (k[3] = ($) => a("close"))
            }, {
              default: h(() => [...k[20] || (k[20] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Ne, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                x(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", S6, [
      s("div", I6, [
        k[22] || (k[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: k[6] || (k[6] = ($) => a("close"))
        }, [...k[21] || (k[21] = [
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
      s("div", E6, [
        e.status && d.value ? (n(), i("div", T6, [
          e.status.workflows.new.length ? (n(), i("div", M6, [
            k[23] || (k[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", P6, [
            k[24] || (k[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", R6, [
            k[25] || (k[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", L6, [
            k[26] || (k[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", D6, [
            k[27] || (k[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (n(), i("div", N6, [...k[28] || (k[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", O6, " No changes to commit ")) : (n(), i("div", U6, " Loading... ")),
        p.value ? (n(), i("div", A6, [
          s("div", z6, [
            k[29] || (k[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", F6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", V6, [
            (n(!0), i(j, null, he(v.value, ($) => (n(), i("div", {
              key: $.name,
              class: "issue-item"
            }, [
              s("strong", null, f($.name), 1),
              s("span", B6, "(" + f($.sync_state) + ")", 1),
              x(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Kn, {
            modelValue: u.value,
            "onUpdate:modelValue": k[7] || (k[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...k[30] || (k[30] = [
              x(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", W6, [
          C(Co, {
            modelValue: r.value,
            "onUpdate:modelValue": k[8] || (k[8] = ($) => r.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", G6, [
        C(Ne, {
          variant: "secondary",
          onClick: k[9] || (k[9] = ($) => a("close"))
        }, {
          default: h(() => [...k[31] || (k[31] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Ne, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            x(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), bc = /* @__PURE__ */ xe(j6, [["__scopeId", "data-v-5f897631"]]), H6 = { class: "modal-header" }, q6 = { class: "modal-body" }, K6 = { class: "switch-message" }, J6 = { class: "switch-details" }, Q6 = { class: "modal-actions" }, Y6 = /* @__PURE__ */ be({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (n(), L(Lt, { to: "body" }, [
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
          s("div", H6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", q6, [
            s("p", K6, [
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
            s("p", J6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", Q6, [
            C(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
            }, {
              default: h(() => [...o[12] || (o[12] = [
                x(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), X6 = /* @__PURE__ */ xe(Y6, [["__scopeId", "data-v-e9c5253e"]]), Z6 = {
  key: 0,
  class: "modal-overlay"
}, eE = { class: "modal-content" }, tE = { class: "modal-body" }, sE = { class: "progress-info" }, oE = { class: "progress-percentage" }, nE = { class: "progress-state" }, aE = { class: "switch-steps" }, lE = { class: "step-icon" }, iE = { class: "step-label" }, rE = /* @__PURE__ */ be({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = M(() => {
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
        let m = "pending", v = "○";
        return d < c ? (m = "completed", v = "✓") : d === c && (m = "active", v = "⟳"), {
          ...u,
          status: m,
          icon: v
        };
      });
    });
    return (r, c) => (n(), L(Lt, { to: "body" }, [
      e.show ? (n(), i("div", Z6, [
        s("div", eE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", tE, [
            C(mc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", sE, [
              s("div", oE, f(e.progress) + "%", 1),
              s("div", nE, f(o.value), 1)
            ]),
            s("div", aE, [
              (n(!0), i(j, null, he(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Ve(["switch-step", u.status])
              }, [
                s("span", lE, f(u.icon), 1),
                s("span", iE, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), cE = /* @__PURE__ */ xe(rE, [["__scopeId", "data-v-768a5078"]]), uE = { class: "modal-header" }, dE = { class: "modal-body" }, fE = {
  key: 0,
  class: "node-section"
}, mE = { class: "node-list" }, vE = {
  key: 1,
  class: "node-section"
}, pE = { class: "node-list" }, gE = { class: "modal-actions" }, hE = /* @__PURE__ */ be({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (n(), L(Lt, { to: "body" }, [
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
          s("div", uE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", dE, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", fE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", mE, [
                (n(!0), i(j, null, he(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + f(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", vE, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", pE, [
                (n(!0), i(j, null, he(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + f(a), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", gE, [
            C(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Te, {
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
}), yE = /* @__PURE__ */ xe(hE, [["__scopeId", "data-v-7cad7518"]]), wE = [
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
], Sn = "v0.0.24", _E = "Akatz", kE = { class: "social-buttons" }, bE = ["title", "aria-label", "onClick"], $E = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, CE = ["d"], xE = ["title", "aria-label", "onClick"], SE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, IE = ["d"], EE = /* @__PURE__ */ be({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", kE, [
      (n(!0), i(j, null, he(tt(wE), (l) => (n(), i(j, {
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
          (n(), i("svg", $E, [
            s("path", {
              d: l.iconPath
            }, null, 8, CE)
          ]))
        ], 8, bE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (n(), i("svg", SE, [
            s("path", {
              d: l.iconPath
            }, null, 8, IE)
          ]))
        ], 8, xE))
      ], 64))), 128))
    ]));
  }
}), $c = /* @__PURE__ */ xe(EE, [["__scopeId", "data-v-4f846342"]]), TE = { class: "footer-info" }, ME = ["title"], PE = {
  key: 0,
  class: "dev-badge"
}, RE = { class: "made-by" }, LE = /* @__PURE__ */ be({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ct(), o = b(null), a = b(null), l = b(null), r = M(() => o.value === "development"), c = M(() => {
      var d;
      if (!r.value) return Sn;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Sn} (${u})` : `${Sn} (development)`;
    });
    return at(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (n(), i("div", TE, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(f(tt(Sn)) + " ", 1),
        r.value ? (n(), i("span", PE, "dev")) : y("", !0)
      ], 8, ME),
      s("span", RE, [
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
        x(" by " + f(tt(_E)), 1)
      ])
    ]));
  }
}), Cc = /* @__PURE__ */ xe(LE, [["__scopeId", "data-v-4fa265b3"]]), DE = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = b(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (n(), L(It, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        C(cc, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          C(Ne, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Ne, {
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
}), NE = /* @__PURE__ */ xe(DE, [["__scopeId", "data-v-fac00ae7"]]), OE = { class: "header-actions" }, UE = {
  key: 0,
  class: "wizard-step"
}, AE = { class: "form-field" }, zE = ["placeholder"], FE = {
  key: 0,
  class: "form-error"
}, VE = { class: "form-field form-field--checkbox" }, BE = { class: "form-checkbox" }, WE = {
  key: 0,
  class: "form-field"
}, GE = ["placeholder"], jE = {
  key: 0,
  class: "form-info"
}, HE = {
  key: 1,
  class: "form-suggestion"
}, qE = {
  key: 2,
  class: "form-error"
}, KE = {
  key: 3,
  class: "form-info"
}, JE = {
  key: 1,
  class: "wizard-step"
}, QE = {
  key: 0,
  class: "progress-check-loading"
}, YE = {
  key: 0,
  class: "cli-warning"
}, XE = { class: "cli-warning-header" }, ZE = {
  key: 1,
  class: "env-landing"
}, eT = { class: "env-list" }, tT = ["value"], sT = { class: "env-name" }, oT = {
  key: 2,
  class: "env-create"
}, nT = { class: "form-field" }, aT = { class: "form-field" }, lT = ["value"], iT = { class: "form-field" }, rT = ["disabled"], cT = ["value"], uT = { class: "form-field" }, dT = ["value"], fT = { class: "form-field form-field--checkbox" }, mT = { class: "form-checkbox" }, vT = {
  key: 0,
  class: "form-error"
}, pT = {
  key: 1,
  class: "env-creating"
}, gT = { class: "creating-intro" }, hT = {
  key: 3,
  class: "env-import"
}, yT = { class: "wizard-footer" }, wT = { class: "wizard-footer-actions" }, vo = 10, _T = 600 * 1e3, Ei = 1800 * 1e3, kT = /* @__PURE__ */ be({
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
      getImportProgress: m,
      getComfyUIReleases: v
    } = ct(), p = b(o.initialStep || 1), w = b(null), g = b("landing"), _ = b(!1), k = b(!1), $ = b(!1), S = b(!1), T = b(null), P = b(o.initialStep === 2), R = b(o.defaultPath), U = b(!!o.detectedModelsDir), A = b(o.detectedModelsDir || ""), z = b(null), E = b(null), H = b(null), ae = b(null), de = b("my-new-env"), ce = b(dc), ke = b("latest"), Q = b(fc), G = b(!0), J = b(null), Le = b(null), Z = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), ye = b(!1), O = b(!1), me = b(!1), Re = b({ progress: 0, message: "" }), ve = b({ progress: 0, message: "" }), ee = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Y = b(0), we = b(null), te = b(0), oe = b(null), Me = M(() => {
      var Ce, Ye;
      const pe = (Ce = R.value) == null ? void 0 : Ce.trim(), K = !z.value, He = !U.value || !E.value && ((Ye = A.value) == null ? void 0 : Ye.trim());
      return pe && K && He;
    }), fe = M(() => {
      var pe;
      return (pe = de.value) == null ? void 0 : pe.trim();
    }), le = M(() => !!(p.value === 2 || Le.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), I = M(() => Le.value || o.workspacePath || null);
    async function V() {
      var pe;
      if (z.value = null, !!((pe = R.value) != null && pe.trim()))
        try {
          const K = await c({ path: R.value, type: "workspace" });
          K.valid || (z.value = K.error || "Invalid path");
        } catch (K) {
          z.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ie() {
      var pe;
      if (E.value = null, H.value = null, ae.value = null, !!((pe = A.value) != null && pe.trim()))
        try {
          const K = await c({ path: A.value, type: "models" });
          if (K.valid)
            ae.value = K.model_count ?? null;
          else if (E.value = K.error || "Invalid path", K.suggestion) {
            H.value = K.suggestion, A.value = K.suggestion, E.value = null;
            const He = await c({ path: K.suggestion, type: "models" });
            He.valid && (ae.value = He.model_count ?? null);
          }
        } catch (K) {
          E.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Ie() {
      var pe, K, He, Ce, Ye;
      if (z.value = null, E.value = null, await V(), (pe = z.value) != null && pe.includes("already exists")) {
        z.value = null, Le.value = ((K = R.value) == null ? void 0 : K.trim()) || o.defaultPath, p.value = 2, Se();
        return;
      }
      if (!z.value && !(U.value && ((He = A.value) != null && He.trim()) && (await ie(), E.value))) {
        O.value = !0;
        try {
          await l({
            workspace_path: ((Ce = R.value) == null ? void 0 : Ce.trim()) || o.defaultPath,
            models_directory: U.value && ((Ye = A.value) == null ? void 0 : Ye.trim()) || null
          }), Y.value = 0, we.value = Date.now();
          const ot = setInterval(async () => {
            var ze;
            if (we.value && Date.now() - we.value > _T) {
              clearInterval(ot), O.value = !1, z.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const N = await r();
              if (Y.value = 0, N.state === "idle" && O.value) {
                clearInterval(ot), O.value = !1, z.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Re.value = { progress: N.progress, message: N.message }, N.state === "complete" ? (clearInterval(ot), O.value = !1, Le.value = ((ze = R.value) == null ? void 0 : ze.trim()) || o.defaultPath, p.value = 2, Se()) : N.state === "error" && (clearInterval(ot), O.value = !1, z.value = N.error || "Workspace creation failed");
            } catch (N) {
              Y.value++, console.warn(`Polling failure ${Y.value}/${vo}:`, N), Y.value >= vo && (clearInterval(ot), O.value = !1, z.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ot) {
          O.value = !1, z.value = ot instanceof Error ? ot.message : "Failed to create workspace";
        }
      }
    }
    async function $e() {
      me.value = !0, J.value = null;
      try {
        const pe = {
          name: de.value.trim() || "my-new-env",
          python_version: ce.value,
          comfyui_version: ke.value,
          torch_backend: Q.value,
          switch_after: G.value,
          workspace_path: Le.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(pe)).status === "started") {
          te.value = 0, oe.value = Date.now();
          const He = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Ei) {
              clearInterval(He), me.value = !1, J.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ce = await d();
              if (te.value = 0, Ce.state === "idle" && me.value) {
                clearInterval(He), me.value = !1, J.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ve.value = {
                progress: Ce.progress ?? 0,
                message: Ce.message,
                phase: Ce.phase
              }, Ce.state === "complete") {
                clearInterval(He), me.value = !1;
                const Ye = Ce.environment_name || pe.name;
                G.value ? a("complete", Ye, Le.value) : (g.value = "landing", a("environment-created-no-switch", Ye));
              } else Ce.state === "error" && (clearInterval(He), me.value = !1, J.value = Ce.error || "Environment creation failed");
            } catch (Ce) {
              te.value++, console.warn(`Polling failure ${te.value}/${vo}:`, Ce), te.value >= vo && (clearInterval(He), me.value = !1, J.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (pe) {
        me.value = !1, J.value = pe instanceof Error ? pe.message : "Unknown error";
      }
    }
    async function Se() {
      ye.value = !0;
      try {
        Z.value = await v();
      } catch (pe) {
        console.error("Failed to load ComfyUI releases:", pe);
      } finally {
        ye.value = !1;
      }
    }
    function Ae() {
      w.value && a("switch-environment", w.value, Le.value);
    }
    function Fe() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function De(pe, K) {
      k.value = !1, K ? a("complete", pe, Le.value) : (a("environment-created-no-switch", pe), g.value = "landing");
    }
    function Ee() {
    }
    at(async () => {
      if (o.detectedModelsDir && (A.value = o.detectedModelsDir), o.workspacePath && (Le.value = o.workspacePath), p.value === 2) {
        Se();
        const pe = setTimeout(() => {
          P.value = !1;
        }, 3e3);
        await Ke(), clearTimeout(pe), P.value = !1;
      }
    });
    async function Ke() {
      try {
        const pe = await d();
        if (console.log("[ComfyGit] Create progress check:", pe.state, pe), pe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", pe.environment_name), g.value = "create", me.value = !0, de.value = pe.environment_name || "my-new-env", ve.value = {
            progress: pe.progress ?? 0,
            message: pe.message,
            phase: pe.phase
          }, Be();
          return;
        }
      } catch (pe) {
        console.log("[ComfyGit] Create progress check failed:", pe);
      }
      try {
        const pe = await m();
        console.log("[ComfyGit] Import progress check:", pe.state, pe), pe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", pe.environment_name), T.value = {
          message: pe.message || "Importing...",
          phase: pe.phase || "",
          progress: pe.progress ?? 0,
          environmentName: pe.environment_name || ""
        }, S.value = !0, g.value = "import", k.value = !0);
      } catch (pe) {
        console.log("[ComfyGit] Import progress check failed:", pe);
      }
    }
    async function Be() {
      te.value = 0, oe.value = Date.now();
      let pe = null;
      const K = async () => {
        if (oe.value && Date.now() - oe.value > Ei)
          return pe && clearInterval(pe), me.value = !1, J.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ce = await d();
          if (te.value = 0, Ce.state === "idle" && me.value)
            return pe && clearInterval(pe), me.value = !1, J.value = "Environment creation was interrupted. Please try again.", !1;
          if (ve.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ce.state === "complete") {
            pe && clearInterval(pe), me.value = !1;
            const Ye = Ce.environment_name || de.value;
            return a("complete", Ye, Le.value), !1;
          } else if (Ce.state === "error")
            return pe && clearInterval(pe), me.value = !1, J.value = Ce.error || "Environment creation failed", !1;
          return !0;
        } catch (Ce) {
          return te.value++, console.warn(`Polling failure ${te.value}/${vo}:`, Ce), te.value >= vo ? (pe && clearInterval(pe), me.value = !1, J.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (pe = setInterval(async () => {
        !await K() && pe && clearInterval(pe);
      }, 2e3));
    }
    return (pe, K) => (n(), i(j, null, [
      C(It, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (He) => pe.$emit("close"))
      }, {
        header: h(() => [
          K[20] || (K[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", OE, [
            C($c),
            K[19] || (K[19] = s("span", { class: "header-divider" }, null, -1)),
            le.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (He) => _.value = !0)
            }, [...K[17] || (K[17] = [
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
              onClick: K[1] || (K[1] = (He) => pe.$emit("close")),
              title: "Close"
            }, [...K[18] || (K[18] = [
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
            p.value === 1 ? (n(), i("div", UE, [
              K[24] || (K[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", AE, [
                K[21] || (K[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (Ce) => R.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, zE), [
                  [Zo, R.value]
                ]),
                z.value ? (n(), i("p", FE, f(z.value), 1)) : y("", !0)
              ]),
              s("div", VE, [
                s("label", BE, [
                  Tt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (Ce) => U.value = Ce)
                  }, null, 512), [
                    [jn, U.value]
                  ]),
                  K[22] || (K[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              U.value ? (n(), i("div", WE, [
                K[23] || (K[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (Ce) => A.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, GE), [
                  [Zo, A.value]
                ]),
                e.detectedModelsDir && !A.value ? (n(), i("p", jE, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                H.value ? (n(), i("p", HE, " Did you mean: " + f(H.value), 1)) : y("", !0),
                E.value ? (n(), i("p", qE, f(E.value), 1)) : y("", !0),
                ae.value !== null && !E.value ? (n(), i("p", KE, " Found " + f(ae.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              O.value ? (n(), L(qn, {
                key: 1,
                progress: Re.value.progress,
                message: Re.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", JE, [
              P.value ? (n(), i("div", QE, [...K[25] || (K[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (n(), i("div", YE, [
                  s("div", XE, [
                    K[27] || (K[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (Ce) => $.value = !0),
                      title: "Dismiss"
                    }, [...K[26] || (K[26] = [
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
                  K[29] || (K[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  K[30] || (K[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (n(), i("div", ZE, [
                  K[34] || (K[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (Ce) => g.value = "create")
                  }, [...K[31] || (K[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: K[7] || (K[7] = (Ce) => {
                      S.value = !1, g.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (He = o.existingEnvironments) != null && He.length ? (n(), i(j, { key: 0 }, [
                    K[33] || (K[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", eT, [
                      (n(!0), i(j, null, he(o.existingEnvironments, (Ce) => (n(), i("label", {
                        key: Ce,
                        class: Ve(["env-option", { selected: w.value === Ce }])
                      }, [
                        Tt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ce,
                          "onUpdate:modelValue": K[8] || (K[8] = (Ye) => w.value = Ye)
                        }, null, 8, tT), [
                          [Rn, w.value]
                        ]),
                        s("span", sT, f(Ce), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (n(), i("div", oT, [
                  me.value ? (n(), i("div", pT, [
                    s("p", gT, [
                      K[41] || (K[41] = x(" Creating environment ", -1)),
                      s("strong", null, f(de.value), 1),
                      K[42] || (K[42] = x("... ", -1))
                    ]),
                    C(qn, {
                      progress: ve.value.progress,
                      message: ve.value.message,
                      "current-phase": ve.value.phase,
                      "show-steps": !0,
                      steps: ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(j, { key: 0 }, [
                    K[40] || (K[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", nT, [
                      K[35] || (K[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(s("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (Ce) => de.value = Ce),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Zo, de.value]
                      ])
                    ]),
                    s("div", aT, [
                      K[36] || (K[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (Ce) => ce.value = Ce),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, he(tt(uc), (Ce) => (n(), i("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce), 9, lT))), 128))
                      ], 512), [
                        [$o, ce.value]
                      ])
                    ]),
                    s("div", iT, [
                      K[37] || (K[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (Ce) => ke.value = Ce),
                        class: "form-select",
                        disabled: ye.value
                      }, [
                        (n(!0), i(j, null, he(Z.value, (Ce) => (n(), i("option", {
                          key: Ce.tag_name,
                          value: Ce.tag_name
                        }, f(Ce.name), 9, cT))), 128))
                      ], 8, rT), [
                        [$o, ke.value]
                      ])
                    ]),
                    s("div", uT, [
                      K[38] || (K[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (Ce) => Q.value = Ce),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, he(tt(Tl), (Ce) => (n(), i("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce) + f(Ce === "auto" ? " (detect GPU)" : ""), 9, dT))), 128))
                      ], 512), [
                        [$o, Q.value]
                      ])
                    ]),
                    s("div", fT, [
                      s("label", mT, [
                        Tt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (Ce) => G.value = Ce)
                        }, null, 512), [
                          [jn, G.value]
                        ]),
                        K[39] || (K[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    J.value ? (n(), i("div", vT, f(J.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (n(), i("div", hT, [
                  C(gc, {
                    "workspace-path": Le.value,
                    "resume-import": S.value,
                    "initial-progress": T.value ?? void 0,
                    onImportComplete: De,
                    onImportStarted: K[14] || (K[14] = (Ce) => k.value = !0),
                    onSourceCleared: Ee
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", yT, [
            C(Cc),
            s("div", wT, [
              p.value === 1 ? (n(), L(Ne, {
                key: 0,
                variant: "primary",
                disabled: !Me.value || O.value,
                onClick: Ie
              }, {
                default: h(() => [
                  x(f(O.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(j, { key: 1 }, [
                !me.value && !k.value && (g.value !== "landing" || o.setupState === "no_workspace" && !Le.value) ? (n(), L(Ne, {
                  key: 0,
                  variant: "secondary",
                  onClick: Fe
                }, {
                  default: h(() => [...K[44] || (K[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (n(), L(Ne, {
                  key: 1,
                  variant: "primary",
                  disabled: !fe.value || me.value,
                  onClick: $e
                }, {
                  default: h(() => [
                    x(f(me.value ? "Creating..." : G.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (n(), L(Ne, {
                  key: 2,
                  variant: "primary",
                  onClick: Ae
                }, {
                  default: h(() => [
                    x(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (n(), L(NE, {
        key: 0,
        "workspace-path": I.value,
        onClose: K[16] || (K[16] = (He) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), bT = /* @__PURE__ */ xe(kT, [["__scopeId", "data-v-9a9aadc0"]]), $T = { class: "update-banner" }, CT = { class: "update-banner__left" }, xT = { class: "update-banner__title" }, ST = {
  key: 0,
  class: "update-banner__summary"
}, IT = { class: "update-banner__actions" }, ET = ["disabled"], TT = ["disabled"], MT = ["disabled"], PT = /* @__PURE__ */ be({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", $T, [
      s("div", CT, [
        s("div", xT, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", ST, f(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", IT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, ET),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, TT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, MT)
      ])
    ]));
  }
}), RT = /* @__PURE__ */ xe(PT, [["__scopeId", "data-v-49562c5c"]]), xc = "ComfyGit.UpdateNotice.DismissedVersion";
function LT() {
  try {
    return localStorage.getItem(xc);
  } catch {
    return null;
  }
}
function DT(e) {
  try {
    localStorage.setItem(xc, e);
  } catch {
  }
}
function NT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : LT() !== e.latest_version;
}
const OT = { class: "comfygit-panel" }, UT = { class: "panel-header" }, AT = { class: "header-left" }, zT = {
  key: 0,
  class: "header-info"
}, FT = { class: "header-actions" }, VT = { class: "env-switcher" }, BT = { class: "env-switcher-header" }, WT = { class: "env-control-buttons" }, GT = {
  key: 0,
  class: "header-info"
}, jT = { class: "branch-name" }, HT = { class: "panel-main" }, qT = { class: "sidebar" }, KT = { class: "sidebar-content" }, JT = { class: "sidebar-section" }, QT = { class: "sidebar-section" }, YT = { class: "sidebar-section" }, XT = { class: "sidebar-footer" }, ZT = { class: "content-area" }, eM = {
  key: 0,
  class: "error-message"
}, tM = {
  key: 1,
  class: "loading"
}, sM = { class: "dialog-content env-selector-dialog" }, oM = { class: "dialog-header" }, nM = { class: "dialog-body" }, aM = { class: "env-list" }, lM = { class: "env-info" }, iM = { class: "env-name-row" }, rM = { class: "env-indicator" }, cM = { class: "env-name" }, uM = {
  key: 0,
  class: "env-branch"
}, dM = {
  key: 1,
  class: "current-label"
}, fM = { class: "env-stats" }, mM = ["onClick"], vM = { class: "toast-container" }, pM = { class: "toast-message" }, Ti = "ComfyGit.LastView", Mi = "ComfyGit.LastSection", gM = /* @__PURE__ */ be({
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
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: _,
      syncEnvironmentManually: k,
      repairWorkflowModels: $,
      getSetupStatus: S,
      getUpdateCheck: T,
      updateManager: P
    } = ct(), R = Hv(), U = b(null), A = b([]), z = b([]), E = b([]), H = M(() => E.value.find((ne) => ne.is_current)), ae = b(null), de = b(!1), ce = b(!1), ke = b("history"), Q = b("manifest"), G = b(null), J = b(!1), Le = b(1), Z = M(() => {
      var ne;
      return ((ne = G.value) == null ? void 0 : ne.state) || "managed";
    }), ye = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, O = M(() => {
      var ne, q;
      return ((q = (ne = G.value) == null ? void 0 : ne.runtime_context) == null ? void 0 : q.capabilities) || ye;
    }), me = b(!1), Re = b(null), ve = b(null), ee = b(!1), Y = b(null), we = b(!1), te = b(!1), oe = M(() => !we.value && NT(Y.value)), Me = b(null), fe = b(null), le = b(null), I = b(!1), V = b(!1), ie = b(""), Ie = b(null), $e = b({ state: "idle", progress: 0, message: "" });
    let Se = null, Ae = null;
    const Fe = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      workflows: { view: "workflows", section: "this-env" }
    }, De = o.initialView ? Fe[o.initialView] : null, Ee = [
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
    function Be() {
      try {
        const ne = sessionStorage.getItem(Ti), q = sessionStorage.getItem(Mi), qe = ne === "branches" || ne === "history" || ne === "remotes" ? "version-control" : ne === "manifest" || ne === "debug-env" || ne === "debug-workspace" ? "diagnostics" : ne, Qe = q === "all-envs" ? "workspace" : q === "sharing" ? "version-control" : q;
        if (ne && q && Ee.includes(qe) && Ke.includes(Qe))
          return { view: qe, section: Qe };
      } catch {
      }
      return null;
    }
    const pe = Be(), K = b((De == null ? void 0 : De.view) ?? (pe == null ? void 0 : pe.view) ?? "status"), He = b((De == null ? void 0 : De.section) ?? (pe == null ? void 0 : pe.section) ?? "this-env");
    function Ce(ne, q) {
      K.value = ne, He.value = q;
      try {
        sessionStorage.setItem(Ti, ne), sessionStorage.setItem(Mi, q);
      } catch {
      }
    }
    function Ye(ne) {
      const qe = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ne];
      qe && Ce(qe.view, qe.section);
    }
    function ot(ne) {
      ke.value = ne, Ce("version-control", "version-control");
    }
    function ze(ne) {
      Q.value = ne, Ce("diagnostics", "diagnostics");
    }
    function N() {
      ot("branches");
    }
    function se() {
      a("close"), setTimeout(async () => {
        await ge("Comfy.OpenManagerDialog") || await ge("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Je(["Extensions", "Manage extensions"]) || Je(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function ge(ne) {
      var Qe, lt;
      const q = window.app, qe = [
        (Qe = q == null ? void 0 : q.extensionManager) == null ? void 0 : Qe.command,
        (lt = q == null ? void 0 : q.extensionManager) == null ? void 0 : lt.commands,
        q == null ? void 0 : q.command,
        q == null ? void 0 : q.commands
      ];
      for (const pt of qe)
        if (typeof (pt == null ? void 0 : pt.execute) == "function")
          try {
            return await pt.execute(ne), !0;
          } catch (Dt) {
            console.debug(`[ComfyGit] Command ${ne} did not open Extensions manager`, Dt);
          }
      return !1;
    }
    function Je(ne) {
      var Qe, lt, pt;
      const q = ne.map((Dt) => Dt.toLowerCase()), qe = document.querySelectorAll('button, [role="button"]');
      for (const Dt of qe) {
        const os = Dt;
        if ([
          (Qe = os.textContent) == null ? void 0 : Qe.trim(),
          (lt = os.getAttribute("title")) == null ? void 0 : lt.trim(),
          (pt = os.getAttribute("aria-label")) == null ? void 0 : pt.trim()
        ].filter(Boolean).map((W) => W.toLowerCase()).some((W) => q.includes(W)))
          return os.click(), !0;
      }
      return !1;
    }
    const D = b(null), F = b(!1), X = b(!1), Oe = b([]);
    let Ue = 0;
    function Pe(ne, q = "info", qe = 3e3) {
      const Qe = ++Ue;
      return Oe.value.push({ id: Qe, message: ne, type: q }), qe > 0 && setTimeout(() => {
        Oe.value = Oe.value.filter((lt) => lt.id !== Qe);
      }, qe), Qe;
    }
    function Ge(ne) {
      Oe.value = Oe.value.filter((q) => q.id !== ne);
    }
    function nt(ne, q) {
      Pe(ne, q);
    }
    async function kt() {
      Y.value = null, we.value = !1;
      try {
        Y.value = await T();
      } catch {
      }
    }
    function Et() {
      var q;
      const ne = (q = Y.value) == null ? void 0 : q.release_url;
      if (ne)
        try {
          window.open(ne, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function re() {
      var q;
      const ne = (q = Y.value) == null ? void 0 : q.latest_version;
      ne && DT(ne), we.value = !0;
    }
    async function B() {
      var q, qe;
      if (te.value) return;
      te.value = !0;
      const ne = Pe("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await P();
        if (Ge(ne), Qe.status !== "success") {
          if (Pe(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const lt = Qe.manual_instructions.split(`
`).map((pt) => pt.trim()).filter(Boolean);
            D.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: lt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                D.value = null;
              }
            };
          }
          return;
        }
        if (Pe(Qe.message || "Update complete", "success"), re(), Qe.restart_required) {
          Js();
          try {
            await ((qe = (q = window.app) == null ? void 0 : q.api) == null ? void 0 : qe.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        Ge(ne);
        const lt = Qe instanceof Error ? Qe.message : "Update failed";
        Pe(lt, "error");
      } finally {
        te.value = !1;
      }
    }
    const ue = M(() => {
      if (!U.value) return "neutral";
      const ne = U.value.workflows, q = ne.new.length > 0 || ne.modified.length > 0 || ne.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? q ? "warning" : "success" : "error";
    });
    M(() => U.value ? ue.value === "success" ? "All synced" : ue.value === "warning" ? "Uncommitted changes" : ue.value === "error" ? "Not synced" : "" : "");
    async function We(ne = {}) {
      me.value = !0, Re.value = null;
      try {
        const [q, qe, Qe, lt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        U.value = q, A.value = qe.commits, z.value = Qe.branches, E.value = lt, a("statusUpdate", q), (ne.refreshWorkflows ?? !0) && Me.value && await Me.value.loadWorkflows(!0);
      } catch (q) {
        Re.value = q instanceof Error ? q.message : "Failed to load status", U.value = null, A.value = [], z.value = [];
      } finally {
        me.value = !1;
      }
    }
    function dt(ne) {
      ve.value = ne;
    }
    async function Ct(ne) {
      var qe;
      ve.value = null;
      const q = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      D.value = {
        title: q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: q ? "You have uncommitted changes that will be lost." : `Checkout commit ${ne.short_hash || ((qe = ne.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: q ? yn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: q,
        onConfirm: async () => {
          var pt;
          D.value = null, Js();
          const Qe = Pe(`Checking out ${ne.short_hash || ((pt = ne.hash) == null ? void 0 : pt.slice(0, 7))}...`, "info", 0), lt = await u(ne.hash, q);
          Ge(Qe), lt.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(lt.message || "Checkout failed", "error");
        }
      };
    }
    async function it(ne) {
      const q = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      D.value = {
        title: q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: q ? "You have uncommitted changes." : `Switch to branch "${ne}"?`,
        details: q ? yn() : void 0,
        warning: q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, Js();
          const qe = Pe(`Switching to ${ne}...`, "info", 0), Qe = await m(ne, q);
          Ge(qe), Qe.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function xt(ne) {
      const q = Pe(`Creating branch ${ne}...`, "info", 0), qe = await d(ne);
      Ge(q), qe.status === "success" ? (Pe(`Branch "${ne}" created`, "success"), await We()) : Pe(qe.message || "Failed to create branch", "error");
    }
    async function ss(ne, q = !1) {
      const qe = async (Qe) => {
        var pt;
        const lt = Pe(`Deleting branch ${ne}...`, "info", 0);
        try {
          const Dt = await v(ne, Qe);
          Ge(lt), Dt.status === "success" ? (Pe(`Branch "${ne}" deleted`, "success"), await We()) : (pt = Dt.message) != null && pt.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await qe(!0);
            }
          } : Pe(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          Ge(lt);
          const os = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          os.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await qe(!0);
            }
          } : Pe(os, "error");
        }
      };
      D.value = {
        title: "Delete Branch",
        message: `Delete branch "${ne}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, await qe(q);
        }
      };
    }
    async function Is(ne) {
      ve.value = null;
      const q = prompt("Enter branch name:");
      if (q) {
        const qe = Pe(`Creating branch ${q}...`, "info", 0), Qe = await d(q, ne.hash);
        Ge(qe), Qe.status === "success" ? (Pe(`Branch "${q}" created from ${ne.short_hash}`, "success"), await We()) : Pe(Qe.message || "Failed to create branch", "error");
      }
    }
    function Js() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ua() {
      if (!O.value.can_restart_current) {
        Pe("Restart is not available in this runtime context.", "warning");
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
          D.value = null, Js(), Pe("Restarting environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function da() {
      if (!O.value.can_stop_current) {
        Pe("Stop is not available in this runtime context.", "warning");
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
          D.value = null, Pe("Stopping environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function zs(ne, q) {
      if (!O.value.can_switch_environment) {
        Pe("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      ee.value = !1, ie.value = ne, Ie.value = q || null, I.value = !0;
    }
    async function fa() {
      I.value = !1, V.value = !0, Js(), $e.value = {
        progress: 10,
        state: co(10),
        message: uo(10)
      };
      try {
        await w(ie.value, Ie.value || void 0), ma(), va();
      } catch (ne) {
        Es(), V.value = !1, Pe(`Failed to initiate switch: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error"), $e.value = { state: "idle", progress: 0, message: "" }, Ie.value = null;
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
    function ma() {
      if (Ae) return;
      let ne = 10;
      const q = 60, qe = 5e3, Qe = 100, lt = (q - ne) / (qe / Qe);
      Ae = window.setInterval(() => {
        if (ne += lt, ne >= q && (ne = q, Es()), $e.value.progress < q) {
          const pt = Math.floor(ne);
          $e.value = {
            progress: pt,
            state: co(pt),
            message: uo(pt)
          };
        }
      }, Qe);
    }
    function Es() {
      Ae && (clearInterval(Ae), Ae = null);
    }
    function va() {
      Se || (Se = window.setInterval(async () => {
        try {
          let ne = await R.getStatus();
          if ((!ne || ne.state === "idle") && (ne = await g()), !ne)
            return;
          const q = ne.progress || 0;
          q >= 60 && Es();
          const qe = Math.max(q, $e.value.progress), Qe = ne.state && ne.state !== "idle" && ne.state !== "unknown", lt = Qe ? ne.state : co(qe), pt = Qe && ne.message || uo(qe);
          $e.value = {
            state: lt,
            progress: qe,
            message: pt
          }, ne.state === "complete" ? (Es(), Lo(), V.value = !1, Pe(`✓ Switched to ${ie.value}`, "success"), await We(), ie.value = "") : ne.state === "rolled_back" ? (Es(), Lo(), V.value = !1, Pe("Switch failed, restored previous environment", "warning"), ie.value = "") : ne.state === "critical_failure" && (Es(), Lo(), V.value = !1, Pe(`Critical error during switch: ${ne.message}`, "error"), ie.value = "");
        } catch (ne) {
          console.error("Failed to poll switch progress:", ne);
        }
      }, 1e3));
    }
    function Lo() {
      Es(), Se && (clearInterval(Se), Se = null);
    }
    function pa() {
      var ne;
      I.value = !1, ie.value = "", (ne = G.value) != null && ne.state && G.value.state !== "managed" && (Le.value = G.value.state === "no_workspace" ? 1 : 2, J.value = !0);
    }
    async function ga(ne) {
      F.value = !1, await We(), Pe(ne.message, ne.success ? "success" : "error");
    }
    async function ha() {
      X.value = !1;
      const ne = Pe("Syncing environment...", "info", 0);
      try {
        const q = await k("skip", !0);
        if (Ge(ne), q.status === "success") {
          const qe = [];
          q.nodes_installed.length && qe.push(`${q.nodes_installed.length} installed`), q.nodes_removed.length && qe.push(`${q.nodes_removed.length} removed`);
          const Qe = qe.length ? `: ${qe.join(", ")}` : "";
          Pe(`✓ Environment synced${Qe}`, "success"), await We();
        } else {
          const qe = q.errors.length ? q.errors.join("; ") : q.message;
          Pe(`Sync failed: ${qe}`, "error");
        }
      } catch (q) {
        Ge(ne), Pe(`Sync error: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
      }
    }
    async function ya(ne) {
      var q;
      try {
        const qe = await $(ne);
        qe.failed.length === 0 ? Pe(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Pe(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await We();
      } catch (qe) {
        Pe(`Repair failed: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
      } finally {
        (q = le.value) == null || q.resetRepairingState();
      }
    }
    async function gn() {
      var q, qe;
      const ne = Pe("Repairing environment...", "info", 0);
      try {
        const Qe = await k("skip", !0);
        if (Ge(ne), Qe.status === "success") {
          const lt = [];
          Qe.nodes_installed.length && lt.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && lt.push(`${Qe.nodes_removed.length} removed`);
          const pt = lt.length ? `: ${lt.join(", ")}` : "";
          Pe(`✓ Environment repaired${pt}`, "success"), (q = le.value) == null || q.closeDetailModal(), await We();
        } else {
          const lt = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Pe(`Repair failed: ${lt}`, "error");
        }
      } catch (Qe) {
        Ge(ne), Pe(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (qe = le.value) == null || qe.resetRepairingEnvironmentState();
      }
    }
    async function wa(ne, q) {
      Pe(`Environment '${ne}' created`, "success"), await We(), fe.value && await fe.value.loadEnvironments(), q && O.value.can_switch_environment && await zs(ne);
    }
    async function _a(ne) {
      var q;
      if (!O.value.can_delete_environment) {
        Pe("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((q = H.value) == null ? void 0 : q.name) === ne) {
        Pe("Cannot delete the currently active environment. Switch to another environment first.", "error");
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
            qe.status === "success" ? (Pe(`Environment "${ne}" deleted`, "success"), await We(), fe.value && await fe.value.loadEnvironments()) : Pe(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Pe(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ka(ne, q) {
      J.value = !1;
      try {
        G.value = await S();
      } catch {
      }
      O.value.can_switch_environment && await zs(ne, q);
    }
    function ba() {
      J.value = !1, a("close");
    }
    async function $a(ne, q) {
      await zs(ne, q);
    }
    async function Ca(ne) {
      de.value = !1, await We(), await zs(ne);
    }
    function xa() {
      ae.value = null, de.value = !0;
    }
    function Sa(ne) {
      ae.value = ne, ce.value = !0;
    }
    function hn() {
      ce.value = !1, ae.value = null;
    }
    async function Ia(ne) {
      G.value = await S(), console.log(`Environment '${ne}' created. Available for switching.`);
    }
    function Ea() {
      if (!O.value.can_create_environment) {
        Pe("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Ce("environments", "workspace"), setTimeout(() => {
        var ne;
        (ne = fe.value) == null || ne.openCreateModal();
      }, 100);
    }
    function yn() {
      if (!U.value) return [];
      const ne = [], q = U.value.workflows;
      return q.new.length && ne.push(`${q.new.length} new workflow(s)`), q.modified.length && ne.push(`${q.modified.length} modified workflow(s)`), q.deleted.length && ne.push(`${q.deleted.length} deleted workflow(s)`), ne;
    }
    return at(async () => {
      try {
        if (G.value = await S(), G.value.state === "no_workspace" && O.value.can_initialize_workspace) {
          J.value = !0, Le.value = 1;
          return;
        }
        if (G.value.state === "empty_workspace" && O.value.can_create_environment) {
          J.value = !0, Le.value = 2;
          return;
        }
        if (G.value.state === "unmanaged" && O.value.can_switch_environment) {
          J.value = !0, Le.value = 2;
          return;
        }
      } catch (ne) {
        console.warn("Setup status check failed, proceeding normally:", ne);
      }
      await Promise.all([
        We({ refreshWorkflows: !1 }),
        kt()
      ]);
    }), (ne, q) => {
      var qe, Qe, lt, pt, Dt, os, Do, W, _e, je, ft, Nt, jt;
      return n(), i("div", OT, [
        s("div", UT, [
          s("div", AT, [
            q[27] || (q[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (n(), i("div", zT)) : y("", !0)
          ]),
          s("div", FT, [
            C($c),
            q[30] || (q[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ve(["icon-btn", { spinning: me.value }]),
              onClick: We,
              title: "Refresh"
            }, [...q[28] || (q[28] = [
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
              onClick: q[0] || (q[0] = (Ze) => a("close")),
              title: "Close"
            }, [...q[29] || (q[29] = [
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
        oe.value && Y.value ? (n(), L(RT, {
          key: 0,
          info: Y.value,
          updating: te.value,
          onUpdate: B,
          onDismiss: re,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", VT, [
          s("div", BT, [
            q[31] || (q[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", WT, [
              O.value.can_restart_current ? (n(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ua
              }, " Restart ")) : y("", !0),
              O.value.can_stop_current ? (n(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: da
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: q[1] || (q[1] = (Ze) => Ce("environments", "workspace"))
          }, [
            U.value ? (n(), i("div", GT, [
              s("span", null, f(((qe = H.value) == null ? void 0 : qe.name) || ((Qe = U.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              s("span", jT, "(" + f(U.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            q[32] || (q[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", HT, [
          s("div", qT, [
            s("div", KT, [
              s("div", JT, [
                q[33] || (q[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "status" && He.value === "this-env" }]),
                  onClick: q[2] || (q[2] = (Ze) => Ce("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "workflows" }]),
                  onClick: q[3] || (q[3] = (Ze) => Ce("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "models-env" }]),
                  onClick: q[4] || (q[4] = (Ze) => Ce("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "nodes" }]),
                  onClick: q[5] || (q[5] = (Ze) => Ce("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "version-control" }]),
                  onClick: q[6] || (q[6] = (Ze) => ot("history"))
                }, " VERSION CONTROL ", 2)
              ]),
              q[36] || (q[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", QT, [
                q[34] || (q[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "environments" }]),
                  onClick: q[7] || (q[7] = (Ze) => Ce("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "model-index" }]),
                  onClick: q[8] || (q[8] = (Ze) => Ce("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "settings" }]),
                  onClick: q[9] || (q[9] = (Ze) => Ce("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              q[37] || (q[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", YT, [
                q[35] || (q[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "diagnostics" && Q.value === "manifest" }]),
                  onClick: q[10] || (q[10] = (Ze) => ze("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: K.value === "diagnostics" && Q.value !== "manifest" }]),
                  onClick: q[11] || (q[11] = (Ze) => ze("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", XT, [
              C(Cc)
            ])
          ]),
          s("div", ZT, [
            Re.value ? (n(), i("div", eM, f(Re.value), 1)) : !U.value && K.value === "status" ? (n(), i("div", tM, " Loading status... ")) : (n(), i(j, { key: 2 }, [
              K.value === "status" ? (n(), L(Wv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: U.value,
                "setup-state": Z.value,
                onSwitchBranch: N,
                onCommitChanges: q[12] || (q[12] = (Ze) => F.value = !0),
                onSyncEnvironment: q[13] || (q[13] = (Ze) => X.value = !0),
                onViewWorkflows: q[14] || (q[14] = (Ze) => Ce("workflows", "this-env")),
                onViewHistory: q[15] || (q[15] = (Ze) => ot("history")),
                onViewDebug: q[16] || (q[16] = (Ze) => ze("env")),
                onViewNodes: q[17] || (q[17] = (Ze) => Ce("nodes", "this-env")),
                onRepairMissingModels: ya,
                onRepairEnvironment: gn,
                onStartSetup: q[18] || (q[18] = (Ze) => J.value = !0),
                onViewEnvironments: q[19] || (q[19] = (Ze) => Ce("environments", "workspace")),
                onCreateEnvironment: Ea
              }, null, 8, ["status", "setup-state"])) : K.value === "workflows" ? (n(), L(G0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Me,
                onRefresh: We
              }, null, 512)) : K.value === "models-env" ? (n(), L(Yb, {
                key: 2,
                onNavigate: Ye
              })) : K.value === "version-control" ? (n(), L(TI, {
                key: 3,
                commits: A.value,
                "current-ref": (lt = U.value) == null ? void 0 : lt.branch,
                branches: z.value,
                current: ((pt = U.value) == null ? void 0 : pt.branch) || null,
                "initial-tab": ke.value,
                onSelect: dt,
                onCheckout: Ct,
                onSwitch: it,
                onCreate: xt,
                onDelete: ss,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : K.value === "nodes" ? (n(), L(H2, {
                key: 4,
                "version-mismatches": ((os = (Dt = U.value) == null ? void 0 : Dt.comparison) == null ? void 0 : os.version_mismatches) || [],
                onOpenNodeManager: se,
                onRepairEnvironment: gn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : K.value === "diagnostics" ? (n(), L(WI, {
                key: 5,
                "initial-tab": Q.value
              }, null, 8, ["initial-tab"])) : K.value === "environments" ? (n(), L(jC, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: fe,
                "can-create": O.value.can_create_environment,
                "can-switch": O.value.can_switch_environment,
                "can-delete": O.value.can_delete_environment,
                onSwitch: zs,
                onCreated: wa,
                onDelete: _a,
                onImport: xa,
                onExport: Sa
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : K.value === "model-index" ? (n(), L(d2, {
                key: 7,
                onRefresh: We
              })) : K.value === "settings" ? (n(), L(w$, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        ve.value ? (n(), L(i6, {
          key: 1,
          commit: ve.value,
          onClose: q[20] || (q[20] = (Ze) => ve.value = null),
          onCheckout: Ct,
          onCreateBranch: Is
        }, null, 8, ["commit"])) : y("", !0),
        D.value ? (n(), L(El, {
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
          onCancel: q[21] || (q[21] = (Ze) => D.value = null),
          onSecondary: D.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        de.value ? (n(), L(It, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: q[22] || (q[22] = (Ze) => de.value = !1)
        }, {
          body: h(() => [
            C(t5, {
              embedded: "",
              onImportCompleteSwitch: Ca
            })
          ]),
          _: 1
        })) : y("", !0),
        ce.value ? (n(), L(It, {
          key: 4,
          title: ae.value ? `EXPORT ENVIRONMENT: ${ae.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: hn
        }, {
          body: h(() => [
            C(l3, {
              embedded: "",
              "environment-name": ae.value,
              onClose: hn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        C(X6, {
          show: I.value,
          "from-environment": ((Do = H.value) == null ? void 0 : Do.name) || "unknown",
          "to-environment": ie.value,
          onConfirm: fa,
          onClose: pa
        }, null, 8, ["show", "from-environment", "to-environment"]),
        F.value && U.value ? (n(), L(bc, {
          key: 5,
          status: U.value,
          "as-modal": !0,
          onClose: q[23] || (q[23] = (Ze) => F.value = !1),
          onCommitted: ga
        }, null, 8, ["status"])) : y("", !0),
        X.value && U.value ? (n(), L(yE, {
          key: 6,
          show: X.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: ha,
          onClose: q[24] || (q[24] = (Ze) => X.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(cE, {
          show: V.value,
          state: $e.value.state,
          progress: $e.value.progress,
          message: $e.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ee.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: q[26] || (q[26] = vt((Ze) => ee.value = !1, ["self"]))
        }, [
          s("div", sM, [
            s("div", oM, [
              q[39] || (q[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: q[25] || (q[25] = (Ze) => ee.value = !1)
              }, [...q[38] || (q[38] = [
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
            s("div", nM, [
              q[40] || (q[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", aM, [
                (n(!0), i(j, null, he(E.value, (Ze) => (n(), i("div", {
                  key: Ze.name,
                  class: Ve(["env-item", { current: Ze.is_current }])
                }, [
                  s("div", lM, [
                    s("div", iM, [
                      s("span", rM, f(Ze.is_current ? "●" : "○"), 1),
                      s("span", cM, f(Ze.name), 1),
                      Ze.current_branch ? (n(), i("span", uM, "(" + f(Ze.current_branch) + ")", 1)) : y("", !0),
                      Ze.is_current ? (n(), i("span", dM, "CURRENT")) : y("", !0)
                    ]),
                    s("div", fM, f(Ze.workflow_count) + " workflows • " + f(Ze.node_count) + " nodes ", 1)
                  ]),
                  !Ze.is_current && O.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (gs) => zs(Ze.name)
                  }, " SWITCH ", 8, mM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        J.value ? (n(), L(bT, {
          key: 8,
          "default-path": ((W = G.value) == null ? void 0 : W.default_path) || "~/comfygit",
          "detected-models-dir": ((_e = G.value) == null ? void 0 : _e.detected_models_dir) || null,
          "initial-step": Le.value,
          "existing-environments": ((je = G.value) == null ? void 0 : je.environments) || [],
          "cli-installed": ((ft = G.value) == null ? void 0 : ft.cli_installed) ?? !0,
          "setup-state": ((Nt = G.value) == null ? void 0 : Nt.state) || "no_workspace",
          "workspace-path": ((jt = G.value) == null ? void 0 : jt.workspace_path) || null,
          onComplete: ka,
          onClose: ba,
          onSwitchEnvironment: $a,
          onEnvironmentCreatedNoSwitch: Ia
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", vM, [
          C(ef, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(j, null, he(Oe.value, (Ze) => (n(), i("div", {
                key: Ze.id,
                class: Ve(["toast", Ze.type])
              }, [
                s("span", pM, f(Ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), hM = /* @__PURE__ */ xe(gM, [["__scopeId", "data-v-f059e95d"]]), yM = { class: "item-header" }, wM = { class: "item-info" }, _M = { class: "filename" }, kM = { class: "metadata" }, bM = { class: "size" }, $M = {
  key: 0,
  class: "type"
}, CM = { class: "item-actions" }, xM = {
  key: 0,
  class: "progress-section"
}, SM = { class: "progress-bar" }, IM = { class: "progress-stats" }, EM = { class: "downloaded" }, TM = { class: "speed" }, MM = {
  key: 0,
  class: "eta"
}, PM = {
  key: 1,
  class: "status-msg paused"
}, RM = {
  key: 2,
  class: "status-msg queued"
}, LM = {
  key: 3,
  class: "status-msg completed"
}, DM = {
  key: 4,
  class: "status-msg failed"
}, NM = {
  key: 0,
  class: "retries"
}, OM = /* @__PURE__ */ be({
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
      class: Ve(["download-item", `status-${e.item.status}`])
    }, [
      s("div", yM, [
        s("div", wM, [
          s("div", _M, f(e.item.filename), 1),
          s("div", kM, [
            s("span", bM, f(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", $M, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", CM, [
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
      e.item.status === "downloading" ? (n(), i("div", xM, [
        s("div", SM, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", IM, [
          s("span", EM, f(a(e.item.downloaded)) + " / " + f(a(e.item.size)), 1),
          s("span", TM, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", MM, f(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", PM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", RM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", LM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", DM, [
        x(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", NM, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ xe(OM, [["__scopeId", "data-v-2110df65"]]), UM = { class: "queue-title" }, AM = { class: "count" }, zM = { class: "queue-actions" }, FM = { class: "action-label" }, VM = {
  key: 0,
  class: "overall-progress"
}, BM = { class: "progress-bar" }, WM = {
  key: 0,
  class: "current-mini"
}, GM = { class: "filename" }, jM = { class: "speed" }, HM = {
  key: 1,
  class: "queue-content"
}, qM = {
  key: 0,
  class: "section"
}, KM = {
  key: 1,
  class: "section"
}, JM = { class: "section-header" }, QM = { class: "section-label paused" }, YM = { class: "items-list" }, XM = {
  key: 2,
  class: "section"
}, ZM = { class: "section-header" }, e7 = { class: "section-label" }, t7 = { class: "items-list" }, s7 = {
  key: 3,
  class: "section"
}, o7 = { class: "section-header" }, n7 = { class: "section-label" }, a7 = { class: "items-list" }, l7 = {
  key: 4,
  class: "section"
}, i7 = { class: "section-header" }, r7 = { class: "section-label failed" }, c7 = { class: "items-list" }, u7 = /* @__PURE__ */ be({
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
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: _
    } = Ro(), k = b(!1);
    let $ = null;
    wt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (R, U) => {
        $ && (clearTimeout($), $ = null);
        const A = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, z = U && (U.active > 0 || U.paused > 0);
        A && z && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = M(() => {
      var A;
      if (t.items.length === 0) return 0;
      const R = l.value.length, U = ((A = o.value) == null ? void 0 : A.progress) || 0;
      return Math.round((R + U / 100) / t.items.length * 100);
    });
    function T(R) {
      m(R);
    }
    function P(R) {
      return R === 0 ? "..." : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, U) => (n(), L(Lt, { to: "body" }, [
      tt(u) ? (n(), i("div", {
        key: 0,
        class: Ve(["model-download-queue", { minimized: !k.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: U[0] || (U[0] = (A) => k.value = !k.value)
        }, [
          s("div", UM, [
            U[4] || (U[4] = s("span", { class: "icon" }, "↓", -1)),
            U[5] || (U[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", AM, "(" + f(tt(d)) + "/" + f(tt(t).items.length) + ")", 1)
          ]),
          s("div", zM, [
            s("span", FM, f(k.value ? "minimize" : "expand"), 1)
          ])
        ]),
        k.value ? (n(), i("div", HM, [
          tt(o) ? (n(), i("div", qM, [
            U[6] || (U[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            C(Ao, {
              item: tt(o),
              onCancel: U[1] || (U[1] = (A) => T(tt(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          tt(c).length > 0 ? (n(), i("div", KM, [
            s("div", JM, [
              s("span", QM, "Paused (" + f(tt(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: U[2] || (U[2] = //@ts-ignore
                (...A) => tt(w) && tt(w)(...A))
              }, "Resume All")
            ]),
            s("div", YM, [
              (n(!0), i(j, null, he(tt(c), (A) => (n(), L(Ao, {
                key: A.id,
                item: A,
                onResume: (z) => tt(p)(A.id),
                onRemove: (z) => tt(g)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          tt(a).length > 0 ? (n(), i("div", XM, [
            s("div", ZM, [
              s("span", e7, "Queued (" + f(tt(a).length) + ")", 1)
            ]),
            s("div", t7, [
              (n(!0), i(j, null, he(tt(a), (A) => (n(), L(Ao, {
                key: A.id,
                item: A,
                onCancel: (z) => T(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          tt(l).length > 0 ? (n(), i("div", s7, [
            s("div", o7, [
              s("span", n7, "Completed (" + f(tt(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: U[3] || (U[3] = //@ts-ignore
                (...A) => tt(_) && tt(_)(...A))
              }, "Clear")
            ]),
            s("div", a7, [
              (n(!0), i(j, null, he(tt(l).slice(0, 3), (A) => (n(), L(Ao, {
                key: A.id,
                item: A,
                onRemove: (z) => tt(g)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          tt(r).length > 0 ? (n(), i("div", l7, [
            s("div", i7, [
              s("span", r7, "Failed (" + f(tt(r).length) + ")", 1)
            ]),
            s("div", c7, [
              (n(!0), i(j, null, he(tt(r), (A) => (n(), L(Ao, {
                key: A.id,
                item: A,
                onRetry: (z) => tt(v)(A.id),
                onRemove: (z) => tt(g)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", VM, [
          s("div", BM, [
            s("div", {
              class: "progress-fill",
              style: Rt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          tt(o) ? (n(), i("div", WM, [
            s("span", GM, f(tt(o).filename), 1),
            s("span", jM, f(P(tt(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), d7 = /* @__PURE__ */ xe(u7, [["__scopeId", "data-v-3a3c9607"]]), f7 = { class: "detail-header" }, m7 = { class: "item-count" }, v7 = { class: "resource-list" }, p7 = { class: "item-info" }, g7 = { class: "item-name" }, h7 = {
  key: 0,
  class: "item-subtitle"
}, y7 = {
  key: 0,
  class: "installing-badge"
}, w7 = ["title"], _7 = {
  key: 2,
  class: "installed-badge"
}, k7 = {
  key: 3,
  class: "queued-badge"
}, b7 = {
  key: 4,
  class: "action-buttons"
}, $7 = {
  key: 1,
  class: "no-action"
}, C7 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = M(() => o.items.filter((g) => g.canAction)), r = M(() => l.value.length > 0 && l.value.every(
      (g) => {
        var _, k;
        return o.queuedItems.has(g.id) || ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) || ((k = o.failedItems) == null ? void 0 : k.has(g.id));
      }
    )), c = M(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(g) {
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
    return (g, _) => (n(), L(It, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (k) => a("close"))
    }, {
      body: h(() => [
        s("div", f7, [
          s("span", m7, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), L(Ne, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (k) => a("bulk-action"))
          }, {
            default: h(() => [
              x(f(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", v7, [
          (n(!0), i(j, null, he(e.items, (k) => (n(), i("div", {
            key: k.id,
            class: "resource-item"
          }, [
            s("div", p7, [
              s("span", g7, f(k.name), 1),
              k.subtitle ? (n(), i("span", h7, f(k.subtitle), 1)) : y("", !0)
            ]),
            k.canAction ? (n(), i(j, { key: 0 }, [
              d(k) ? (n(), i("span", y7, "Installing...")) : v(k) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(k)
              }, "Failed ⚠", 8, w7)) : m(k) ? (n(), i("span", _7, "Installed")) : u(k) ? (n(), i("span", k7, "Queued")) : (n(), i("div", b7, [
                (n(!0), i(j, null, he(w(k), ($) => (n(), L(Ne, {
                  key: `${k.id}-${$.key}`,
                  size: "sm",
                  variant: $.variant || "secondary",
                  onClick: (S) => a("action", k, $.key)
                }, {
                  default: h(() => [
                    x(f($.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", $7, f(k.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        C(Ne, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (k) => a("close"))
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
}), x7 = /* @__PURE__ */ xe(C7, [["__scopeId", "data-v-ec7e9202"]]), S7 = {
  key: 0,
  class: "loading-state"
}, I7 = {
  key: 1,
  class: "analysis-results"
}, E7 = {
  key: 0,
  class: "section"
}, T7 = { class: "section-header" }, M7 = { class: "section-title" }, P7 = { class: "item-list" }, R7 = { class: "package-info" }, L7 = { class: "package-name" }, D7 = { class: "node-count" }, N7 = {
  key: 1,
  class: "installing-badge"
}, O7 = {
  key: 2,
  class: "queued-badge"
}, U7 = ["title"], A7 = {
  key: 4,
  class: "installed-badge"
}, z7 = {
  key: 1,
  class: "section"
}, F7 = { class: "section-header" }, V7 = { class: "section-title" }, B7 = { class: "item-list" }, W7 = { class: "node-type" }, G7 = {
  key: 0,
  class: "overflow-note"
}, j7 = {
  key: 2,
  class: "section"
}, H7 = { class: "section-header" }, q7 = { class: "section-title" }, K7 = { class: "item-list" }, J7 = { class: "node-type" }, Q7 = { class: "not-found" }, Y7 = {
  key: 0,
  class: "overflow-note"
}, X7 = {
  key: 3,
  class: "section"
}, Z7 = { class: "section-header" }, eP = { class: "section-title" }, tP = { class: "item-list" }, sP = { class: "package-info community-info" }, oP = { class: "community-title-row" }, nP = { class: "package-name" }, aP = { class: "node-count" }, lP = { class: "community-mapping-note" }, iP = { key: 0 }, rP = {
  key: 0,
  class: "community-actions"
}, cP = {
  key: 1,
  class: "installing-badge"
}, uP = {
  key: 2,
  class: "queued-badge"
}, dP = ["title"], fP = {
  key: 4,
  class: "installed-badge"
}, mP = ["title"], vP = {
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
}, $P = { class: "dont-show-again" }, CP = 3e4, xP = /* @__PURE__ */ be({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = b(!1), o = b(null), a = b(null), l = b(!1), r = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Set()), u = b(/* @__PURE__ */ new Map()), d = b(/* @__PURE__ */ new Set()), m = b(!1), v = b(null), p = b(0), w = b(null), g = b(/* @__PURE__ */ new Set()), _ = b(/* @__PURE__ */ new Map()), k = b(/* @__PURE__ */ new Map()), { addToQueue: $ } = Ro(), { queueNodeInstall: S } = ct(), T = M(() => {
      var N;
      return ((N = a.value) == null ? void 0 : N.package_aliases) || {};
    });
    function P(N) {
      if (!N) return null;
      const se = T.value;
      let ge = N;
      const Je = /* @__PURE__ */ new Set();
      for (; se[ge] && !Je.has(ge); )
        Je.add(ge), ge = se[ge];
      return ge;
    }
    function R(N, se) {
      return N instanceof Error && N.message ? N.message : typeof N == "string" && N.trim().length > 0 ? N : se;
    }
    function U(N) {
      for (const [se, ge] of _.value.entries())
        ge === N && _.value.delete(se);
    }
    function A(N) {
      if (!k.value.has(N)) return;
      const se = k.value.get(N);
      clearTimeout(se), k.value.delete(N);
    }
    function z() {
      for (const N of k.value.values())
        clearTimeout(N);
      k.value = /* @__PURE__ */ new Map();
    }
    function E(N) {
      A(N);
      const se = setTimeout(() => {
        if (k.value.delete(N), !c.value.has(N)) return;
        U(N), c.value.delete(N), v.value === N && (v.value = null), u.value.set(N, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", N);
      }, CP);
      k.value.set(N, se);
    }
    function H(N) {
      const se = `Cannot install "${N.title}" - package_id is missing`;
      u.value.set(N.item_id, se), o.value = se, console.warn("[ComfyGit] Community install requested without package_id:", N);
    }
    const ae = M(() => de.value.length > 0 || ke.value.length > 0 || Q.value.length > 0 || G.value.length > 0 || O.value.length > 0), de = M(() => {
      var ge, Je;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const N = /* @__PURE__ */ new Map(), se = (a.value.nodes.resolved || []).filter((D) => {
        var F;
        return !D.is_installed && ((F = D.package) == null ? void 0 : F.package_id);
      });
      for (const D of se) {
        const F = P(D.package.package_id);
        if (!F) continue;
        N.has(F) || N.set(F, {
          package_id: F,
          title: D.package.title || F,
          node_count: 0,
          node_types: [],
          repository: D.package.repository || null,
          latest_version: D.package.latest_version || null
        });
        const X = N.get(F);
        X.node_count++, X.node_types.push(((Je = D.reference) == null ? void 0 : Je.node_type) || D.node_type);
      }
      return Array.from(N.values());
    }), ce = M(() => de.value.reduce((N, se) => N + se.node_count, 0)), ke = M(() => {
      var N;
      return (N = a.value) != null && N.nodes ? (a.value.nodes.unresolved || []).map((se) => {
        var ge;
        return {
          node_type: ((ge = se.reference) == null ? void 0 : ge.node_type) || se.node_type
        };
      }) : [];
    }), Q = M(() => {
      var se;
      if (!((se = a.value) != null && se.nodes)) return [];
      const N = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ge) => {
        var D;
        const Je = ((D = ge.reference) == null ? void 0 : D.node_type) || ge.node_type;
        return {
          node_type: Je,
          guidance: ge.guidance || N[Je] || null
        };
      });
    }), G = M(() => {
      var ge, Je, D, F, X, Oe, Ue, Pe;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const N = a.value.node_guidance || {}, se = /* @__PURE__ */ new Map();
      for (const Ge of a.value.nodes.uninstallable || []) {
        const nt = ((Je = Ge.reference) == null ? void 0 : Je.node_type) || Ge.node_type, kt = P(((D = Ge.package) == null ? void 0 : D.package_id) || null), Et = kt || `node:${nt}`;
        se.has(Et) || se.set(Et, {
          item_id: Et,
          node_type: nt,
          title: ((F = Ge.package) == null ? void 0 : F.title) || kt || nt,
          node_count: 0,
          package_id: kt,
          repository: ((X = Ge.package) == null ? void 0 : X.repository) || null,
          latest_version: ((Oe = Ge.package) == null ? void 0 : Oe.latest_version) || null,
          guidance: Ge.guidance || N[nt] || null
        });
        const re = se.get(Et);
        re.node_count++, re.guidance || (re.guidance = Ge.guidance || N[nt] || null), !re.repository && ((Ue = Ge.package) != null && Ue.repository) && (re.repository = Ge.package.repository), !re.latest_version && ((Pe = Ge.package) != null && Pe.latest_version) && (re.latest_version = Ge.package.latest_version);
      }
      return Array.from(se.values());
    }), J = M(() => G.value.filter((N) => !!N.package_id)), Le = M(() => G.value.length >= 5 ? G.value.slice(0, 4) : G.value), Z = M(() => J.value.length > 0 && J.value.every((N) => {
      const se = N.package_id;
      return r.value.has(se) || c.value.has(se) || u.value.has(se);
    }));
    function ye(N) {
      const se = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return N.repository && se.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), se;
    }
    const O = M(() => {
      var D;
      if (!((D = a.value) != null && D.models)) return [];
      const N = (a.value.models.resolved || []).filter(
        (F) => F.match_type === "download_intent" || F.match_type === "property_download_intent" || F.match_type === "not_found"
      ).map((F) => {
        var X, Oe, Ue, Pe;
        return {
          filename: ((Oe = (X = F.reference) == null ? void 0 : X.widget_value) == null ? void 0 : Oe.split("/").pop()) || ((Ue = F.reference) == null ? void 0 : Ue.widget_value) || F.widget_value,
          widget_value: ((Pe = F.reference) == null ? void 0 : Pe.widget_value) || F.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: F.download_source || null,
          targetPath: F.target_path || null,
          canDownload: !!(F.download_source && F.target_path)
        };
      }), se = (a.value.models.unresolved || []).map((F) => {
        var X, Oe, Ue, Pe;
        return {
          filename: ((Oe = (X = F.reference) == null ? void 0 : X.widget_value) == null ? void 0 : Oe.split("/").pop()) || ((Ue = F.reference) == null ? void 0 : Ue.widget_value) || F.widget_value,
          widget_value: ((Pe = F.reference) == null ? void 0 : Pe.widget_value) || F.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ge = /* @__PURE__ */ new Map(), Je = [];
      for (const F of N) {
        if (!F.url) {
          Je.push(F);
          continue;
        }
        const X = `${F.filename}::${F.url}`, Oe = ge.get(X);
        if (!Oe) {
          ge.set(X, F);
          continue;
        }
        !Oe.targetPath && F.targetPath && (Oe.targetPath = F.targetPath), !Oe.canDownload && F.canDownload && (Oe.canDownload = F.canDownload);
      }
      return [...ge.values(), ...Je, ...se];
    }), me = M(() => O.value.filter((N) => N.canDownload)), Re = M(() => de.value.length >= 5 ? de.value.slice(0, 4) : de.value), ve = M(() => O.value.length >= 5 ? O.value.slice(0, 4) : O.value), ee = M(() => de.value.length > 0 && de.value.every(
      (N) => r.value.has(N.package_id) || c.value.has(N.package_id) || u.value.has(N.package_id)
    )), Y = M(() => me.value.length > 0 && me.value.every((N) => d.value.has(N.url))), we = M(() => de.value.length > 0 || J.value.length > 0 || me.value.length > 0), te = M(() => {
      const N = (de.value.length === 0 || ee.value) && (J.value.length === 0 || Z.value), se = me.value.length === 0 || Y.value;
      return N && se;
    }), oe = M(() => w.value === "models" ? `Missing Models (${O.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ce.value})` : w.value === "community" ? `Community-Mapped Packages (${G.value.length})` : ""), Me = M(() => w.value === "models" ? O.value.map((N) => ({
      id: N.url || N.widget_value,
      name: N.filename,
      canAction: N.canDownload,
      actionDisabledReason: N.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? de.value.map((N) => ({
      id: N.package_id,
      name: N.title,
      subtitle: `(${N.node_count} ${N.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? G.value.map((N) => ({
      id: N.package_id || N.item_id,
      name: N.title,
      subtitle: `(${N.node_count} ${N.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!N.package_id,
      actionDisabledReason: N.package_id ? void 0 : "Manual setup required",
      actions: N.package_id ? ye(N) : []
    })) : []);
    function fe(N, se) {
      if (w.value === "models") {
        const ge = O.value.find((Je) => Je.url === N.id || Je.widget_value === N.id);
        ge && Ie(ge);
      } else if (w.value === "packages") {
        const ge = de.value.find((Je) => Je.package_id === N.id);
        ge && I(ge);
      } else if (w.value === "community") {
        const ge = G.value.find((D) => (D.package_id || D.item_id) === N.id);
        if (!ge) return;
        if (!ge.package_id) {
          H({ item_id: ge.item_id, title: ge.title });
          return;
        }
        V(ge, se === "install_git" ? "git" : "registry");
      }
    }
    function le() {
      w.value === "models" ? Ae() : w.value === "packages" ? $e() : w.value === "community" && Se();
    }
    async function I(N) {
      return ie(N.package_id, N.latest_version, "registry");
    }
    async function V(N, se) {
      return N.package_id ? ie(N.package_id, N.latest_version, se, N.repository) : (H({ item_id: N.item_id, title: N.title }), !1);
    }
    async function ie(N, se, ge, Je) {
      const D = P(N) || N, F = se || "latest";
      if (r.value.has(D) || c.value.has(D) || u.value.has(D))
        return !0;
      ot(), v.value = D;
      let X = null;
      try {
        const Oe = {
          id: D,
          version: F,
          selected_version: F,
          mode: "remote",
          channel: "default"
        };
        ge === "git" && Je && (Oe.repository = Je, Oe.install_source = "git");
        const { ui_id: Ue } = await S(Oe, {
          beforeQueueStart: (Pe) => {
            X = Pe, _.value.set(Pe, D), c.value.add(D), E(D), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Pe,
              packageId: D,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return X || (X = Ue, _.value.set(Ue, D), c.value.add(D), E(D), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Ue,
          packageId: D,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (Oe) {
        const Ue = R(Oe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Oe), X && _.value.delete(X), U(D), A(D), c.value.delete(D), u.value.set(D, Ue), !1;
      } finally {
        v.value = null;
      }
    }
    function Ie(N) {
      !N.url || !N.targetPath || d.value.has(N.url) || ($([{
        workflow: "unsaved",
        filename: N.filename,
        url: N.url,
        targetPath: N.targetPath
      }]), d.value.add(N.url));
    }
    async function $e() {
      const N = { attempted: 0, failed: 0 };
      for (const se of de.value)
        !r.value.has(se.package_id) && !c.value.has(se.package_id) && !u.value.has(se.package_id) && (N.attempted++, await I(se) || N.failed++);
      return N;
    }
    async function Se() {
      const N = { attempted: 0, failed: 0 };
      for (const se of J.value) {
        const ge = se.package_id;
        !r.value.has(ge) && !c.value.has(ge) && !u.value.has(ge) && (N.attempted++, await V(se, "registry") || N.failed++);
      }
      return N;
    }
    function Ae() {
      const N = me.value.filter(
        (se) => !d.value.has(se.url)
      );
      if (N.length === 0) return 0;
      $(N.map((se) => ({
        workflow: "unsaved",
        filename: se.filename,
        url: se.url,
        targetPath: se.targetPath
      })));
      for (const se of N)
        d.value.add(se.url);
      return N.length;
    }
    async function Fe() {
      const N = await $e(), se = await Se();
      Ae();
      const ge = N.attempted + se.attempted, Je = N.failed + se.failed;
      if (ge > 0 && Je > 0) {
        const D = ge - Je;
        o.value = `${D} of ${ge} installs queued, ${Je} failed`;
      }
    }
    function De() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ee(N) {
      var D, F;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const se = N == null ? void 0 : N.id;
      if (se && g.value.has(se)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${se} this session`);
        return;
      }
      const ge = window.app, Je = (D = ge == null ? void 0 : ge.extensionManager) == null ? void 0 : D.workflow;
      if (Je) {
        let Ue = !1;
        for (let Pe = 0; Pe < 20; Pe++) {
          const Ge = Je.activeWorkflow;
          if (!Ge) {
            await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          const nt = (F = Ge.activeState) == null ? void 0 : F.id;
          if (!(se && nt === se)) {
            Pe < 19 && await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          if (Ue = !0, Ge.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${Ge.filename}`), se && g.value.add(se);
            return;
          }
          break;
        }
        Ue || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, z(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, p.value = 0;
      try {
        const X = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: N, name: "unsaved" })
        });
        if (!X.ok) {
          const Oe = await X.json();
          throw new Error(Oe.error || "Failed to analyze workflow");
        }
        a.value = await X.json(), ae.value && (l.value = !0, se && g.value.add(se));
      } catch (X) {
        console.error("[ComfyGit] Failed to analyze workflow:", X);
      } finally {
        t.value = !1;
      }
    }
    function Ke() {
      z(), l.value = !1, a.value = null;
    }
    function Be(N) {
      const { workflow: se } = N.detail;
      se && Ee(se);
    }
    function pe(N) {
      var Je;
      const se = (Je = N.detail) == null ? void 0 : Je.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: se,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: N.detail
      });
      const ge = _.value.get(se);
      ge ? (A(ge), v.value = ge, console.log("[ComfyGit] Installing package:", ge)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", se);
    }
    function K(N) {
      var D, F, X, Oe, Ue, Pe, Ge;
      const se = (D = N.detail) == null ? void 0 : D.ui_id, ge = (X = (F = N.detail) == null ? void 0 : F.status) == null ? void 0 : X.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: se,
        status: ge,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: N.detail
      });
      const Je = _.value.get(se);
      if (Je) {
        if (A(Je), _.value.delete(se), c.value.delete(Je), v.value === Je && (v.value = null), ge === "success")
          r.value.add(Je), p.value++, console.log("[ComfyGit] Package installed successfully:", Je);
        else {
          const nt = ((Pe = (Ue = (Oe = N.detail) == null ? void 0 : Oe.status) == null ? void 0 : Ue.messages) == null ? void 0 : Pe[0]) || ((Ge = N.detail) == null ? void 0 : Ge.result) || "Unknown error";
          u.value.set(Je, nt), console.error("[ComfyGit] Package install failed:", Je, nt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", se);
    }
    let He = null;
    function Ce() {
      var N;
      return He || (He = (N = window.app) == null ? void 0 : N.api), He;
    }
    let Ye = !1;
    function ot() {
      if (Ye) return !0;
      const N = Ce();
      return N ? (N.addEventListener("cm-task-started", pe), N.addEventListener("cm-task-completed", K), N.addEventListener("comfygit:workflow-changed", ze), Ye = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function ze(N) {
      const { change_type: se } = N.detail;
      (se === "created" || se === "modified") && l.value && (z(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", Be);
    }), Mo(() => {
      if (z(), window.removeEventListener("comfygit:workflow-loaded", Be), Ye) {
        const N = Ce();
        N && (N.removeEventListener("cm-task-started", pe), N.removeEventListener("cm-task-completed", K), N.removeEventListener("comfygit:workflow-changed", ze)), Ye = !1;
      }
    }), (N, se) => (n(), i(j, null, [
      l.value ? (n(), L(It, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Ke
      }, {
        body: h(() => [
          t.value ? (n(), i("div", S7, [...se[5] || (se[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ae.value ? (n(), i("div", I7, [
            de.value.length > 0 ? (n(), i("div", E7, [
              s("div", T7, [
                s("span", M7, "Missing Custom Nodes (" + f(ce.value) + ")", 1),
                de.value.length > 1 ? (n(), L(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ee.value,
                  onClick: $e
                }, {
                  default: h(() => [
                    x(f(ee.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", P7, [
                (n(!0), i(j, null, he(Re.value, (ge) => (n(), i("div", {
                  key: ge.package_id,
                  class: "package-item"
                }, [
                  s("div", R7, [
                    s("span", L7, f(ge.title), 1),
                    s("span", D7, "(" + f(ge.node_count) + " " + f(ge.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ge.package_id) && !c.value.has(ge.package_id) && !u.value.has(ge.package_id) ? (n(), L(Ne, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === ge.package_id,
                    onClick: (Je) => I(ge)
                  }, {
                    default: h(() => [
                      x(f(v.value === ge.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === ge.package_id ? (n(), i("span", N7, "Installing...")) : c.value.has(ge.package_id) ? (n(), i("span", O7, "Queued")) : u.value.has(ge.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ge.package_id)
                  }, "Failed ⚠", 8, U7)) : (n(), i("span", A7, "Installed"))
                ]))), 128)),
                de.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: se[0] || (se[0] = (ge) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + f(de.value.length) + " packages...", 1),
                  se[6] || (se[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ke.value.length > 0 ? (n(), i("div", z7, [
              s("div", F7, [
                s("span", V7, "Unknown Nodes (" + f(ke.value.length) + ")", 1)
              ]),
              s("div", B7, [
                (n(!0), i(j, null, he(ke.value.slice(0, 5), (ge) => (n(), i("div", {
                  key: ge.node_type,
                  class: "item"
                }, [
                  s("code", W7, f(ge.node_type), 1),
                  se[7] || (se[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                ke.value.length > 5 ? (n(), i("div", G7, " ...and " + f(ke.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            Q.value.length > 0 ? (n(), i("div", j7, [
              s("div", H7, [
                s("span", q7, "Requires Newer ComfyUI (" + f(Q.value.length) + ")", 1)
              ]),
              s("div", K7, [
                (n(!0), i(j, null, he(Q.value.slice(0, 5), (ge) => (n(), i("div", {
                  key: `vg-${ge.node_type}`,
                  class: "item"
                }, [
                  s("code", J7, f(ge.node_type), 1),
                  s("span", Q7, f(ge.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                Q.value.length > 5 ? (n(), i("div", Y7, " ...and " + f(Q.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            G.value.length > 0 ? (n(), i("div", X7, [
              s("div", Z7, [
                s("span", eP, "Community-Mapped Packages (" + f(G.value.length) + ")", 1),
                J.value.length > 1 ? (n(), L(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Z.value,
                  onClick: Se
                }, {
                  default: h(() => [
                    x(f(Z.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", tP, [
                (n(!0), i(j, null, he(Le.value, (ge) => (n(), i("div", {
                  key: `community-${ge.item_id}`,
                  class: "package-item"
                }, [
                  s("div", sP, [
                    s("div", oP, [
                      s("span", nP, f(ge.title), 1),
                      s("span", aP, "(" + f(ge.node_count) + " " + f(ge.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", lP, [
                      se[8] || (se[8] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ge.guidance ? (n(), i("span", iP, ". " + f(ge.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  ge.package_id ? (n(), i(j, { key: 0 }, [
                    !r.value.has(ge.package_id) && !c.value.has(ge.package_id) && !u.value.has(ge.package_id) ? (n(), i("div", rP, [
                      C(Ne, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === ge.package_id,
                        onClick: (Je) => V(ge, "registry")
                      }, {
                        default: h(() => [
                          x(f(v.value === ge.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ge.repository ? (n(), L(Ne, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === ge.package_id,
                        onClick: (Je) => V(ge, "git")
                      }, {
                        default: h(() => [...se[9] || (se[9] = [
                          x(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === ge.package_id ? (n(), i("span", cP, "Installing...")) : c.value.has(ge.package_id) ? (n(), i("span", uP, "Queued")) : u.value.has(ge.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ge.package_id)
                    }, "Failed ⚠", 8, dP)) : (n(), i("span", fP, "Installed"))
                  ], 64)) : (n(), i(j, { key: 1 }, [
                    u.value.has(ge.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ge.item_id)
                    }, "Failed ⚠", 8, mP)) : (n(), i("span", vP, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                G.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: se[1] || (se[1] = (ge) => w.value = "community")
                }, [
                  s("span", null, "Show all " + f(G.value.length) + " packages...", 1),
                  se[10] || (se[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            O.value.length > 0 ? (n(), i("div", pP, [
              s("div", gP, [
                s("span", hP, "Missing Models (" + f(O.value.length) + ")", 1),
                me.value.length > 1 ? (n(), L(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Y.value,
                  onClick: Ae
                }, {
                  default: h(() => [
                    x(f(Y.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", yP, [
                (n(!0), i(j, null, he(ve.value, (ge) => (n(), i("div", {
                  key: ge.widget_value,
                  class: "model-item"
                }, [
                  s("div", wP, [
                    s("span", _P, f(ge.filename), 1)
                  ]),
                  ge.canDownload ? (n(), i(j, { key: 0 }, [
                    d.value.has(ge.url) ? (n(), i("span", kP, "Queued")) : (n(), L(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Ie(ge)
                    }, {
                      default: h(() => [...se[11] || (se[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", bP, "Manual download required"))
                ]))), 128)),
                O.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: se[2] || (se[2] = (ge) => w.value = "models")
                }, [
                  s("span", null, "Show all " + f(O.value.length) + " models...", 1),
                  se[12] || (se[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", $P, [
              C(Kn, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  se[3] || (se[3] = (ge) => m.value = ge),
                  De
                ]
              }, {
                default: h(() => [...se[13] || (se[13] = [
                  x(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          C(Ne, {
            variant: "secondary",
            onClick: Ke
          }, {
            default: h(() => [...se[14] || (se[14] = [
              x("Dismiss", -1)
            ])]),
            _: 1
          }),
          we.value ? (n(), L(Ne, {
            key: 0,
            variant: "primary",
            disabled: te.value,
            onClick: Fe
          }, {
            default: h(() => [
              x(f(te.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (n(), L(x7, {
        key: 1,
        title: oe.value,
        items: Me.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : v.value,
        onClose: se[4] || (se[4] = (ge) => w.value = null),
        onAction: fe,
        onBulkAction: le
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), SP = /* @__PURE__ */ xe(xP, [["__scopeId", "data-v-dfb55c3f"]]), IP = {
  key: 0,
  class: "io-mapping-root"
}, EP = { class: "io-mapping-visual-layer" }, TP = { class: "io-mapping-header" }, MP = { class: "io-mapping-header-main" }, PP = { class: "io-mapping-subtitle" }, RP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, LP = { class: "io-mapping-header-actions" }, DP = { class: "io-mapping-sidebar" }, NP = { class: "io-mapping-sidebar-scroll" }, OP = {
  key: 0,
  class: "io-state-block"
}, UP = {
  key: 1,
  class: "io-state-block io-state-error"
}, AP = { class: "contract-meta-section" }, zP = { class: "contract-meta-toggle-icon" }, FP = {
  key: 0,
  class: "contract-meta-body"
}, VP = { class: "contract-summary" }, BP = { class: "summary-pill" }, WP = { class: "summary-pill" }, GP = { class: "summary-pill" }, jP = { class: "mapping-section" }, HP = { class: "section-header" }, qP = {
  key: 0,
  class: "empty-message"
}, KP = ["onClick"], JP = { class: "item-card-title" }, QP = { class: "item-card-meta" }, YP = { class: "item-card-summary" }, XP = { key: 0 }, ZP = { class: "mapping-section" }, eR = { class: "section-header" }, tR = {
  key: 0,
  class: "empty-message"
}, sR = ["onClick"], oR = { class: "item-card-title" }, nR = { class: "item-card-meta" }, aR = { class: "item-card-summary" }, lR = { class: "io-mapping-footer" }, iR = { class: "io-mapping-footer-left" }, rR = { class: "io-mapping-footer-right" }, cR = /* @__PURE__ */ be({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: a, deleteWorkflowContract: l } = ct(), r = b(!1), c = b(""), u = b(!1), d = b(!1), m = b(!1), v = b(null), p = b(null), w = b(null), g = b(!1), _ = b(!1), k = b(null), $ = b(null), S = b(0), T = b(null), P = b(null);
    let R = null;
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
    ], A = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], z = M(() => {
      var D;
      return ((D = p.value) == null ? void 0 : D.contract_summary.has_contract) === !0;
    }), E = M(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const D = w.value.default_contract || "default";
      return w.value.contracts[D] || (w.value.contracts[D] = { inputs: [], outputs: [] }), w.value.contracts[D];
    }), H = M(() => {
      var F;
      const D = ((F = p.value) == null ? void 0 : F.contract_summary.status) ?? "none";
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
    function de(D) {
      return D === "integer" || D === "number";
    }
    function ce(D) {
      return D === "enum";
    }
    function ke(D) {
      return D == null ? "" : String(D);
    }
    function Q(D) {
      const F = D.trim();
      if (!F) return;
      const X = Number(F);
      return Number.isFinite(X) ? X : void 0;
    }
    function G(D) {
      return (D || []).join(`
`);
    }
    function J(D) {
      return D.split(/[\n,]/).map((F) => F.trim()).filter(Boolean);
    }
    function Le(D) {
      return typeof D == "string" ? D.length > 24 ? `${D.slice(0, 24)}...` : D : String(D);
    }
    function Z(D) {
      return D == null ? "" : String(D);
    }
    function ye(D) {
      var X;
      const F = (X = D == null ? void 0 : D.options) == null ? void 0 : X.values;
      return Array.isArray(F) ? F.map((Oe) => String(Oe)).filter(Boolean) : [];
    }
    function O(D, F) {
      var Ue;
      const X = (Ue = D == null ? void 0 : D.options) == null ? void 0 : Ue[F];
      if (X == null || X === "") return;
      const Oe = Number(X);
      return Number.isFinite(Oe) ? Oe : void 0;
    }
    function me(D, F) {
      return D.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || F;
    }
    function Re(D) {
      if (!w.value) return;
      const F = D.trim() || "default";
      w.value.default_contract = F, w.value.contracts[F] || (w.value.contracts[F] = { inputs: [], outputs: [] });
    }
    function ve(D) {
      const F = String(D ?? "").toLowerCase();
      return F.includes("image") ? "image" : F.includes("video") ? "video" : F.includes("audio") ? "audio" : F.includes("int") ? "integer" : F.includes("float") || F.includes("double") || F.includes("number") ? "number" : F.includes("bool") ? "boolean" : F.includes("combo") || F.includes("enum") ? "enum" : F.includes("string") || F.includes("text") ? "string" : "file";
    }
    function ee(D) {
      E.value.inputs.splice(D, 1), k.value === D && (k.value = null);
    }
    function Y(D) {
      E.value.outputs.splice(D, 1), $.value === D && ($.value = null);
    }
    function we(D) {
      k.value = k.value === D ? null : D, k.value != null && ($.value = null);
    }
    function te(D) {
      $.value = $.value === D ? null : D, $.value != null && (k.value = null);
    }
    function oe(D) {
      const F = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(D)) : String(D);
      return document.querySelector(`[data-node-id="${F}"]`);
    }
    function Me(D) {
      return D instanceof Element ? !!D.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function fe(D) {
      var Oe, Ue, Pe, Ge, nt, kt;
      if (!(D instanceof Element)) return null;
      const F = D.closest("[data-node-id]"), X = F == null ? void 0 : F.getAttribute("data-node-id");
      return X ? ((Pe = (Ue = (Oe = t.comfyApp) == null ? void 0 : Oe.graph) == null ? void 0 : Ue.getNodeById) == null ? void 0 : Pe.call(Ue, X)) ?? ((kt = (nt = (Ge = t.comfyApp) == null ? void 0 : Ge.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : kt.call(nt, X)) ?? null : null;
    }
    function le(D, F) {
      if (F == null || F < 0) return null;
      const X = oe(D);
      return X ? X.querySelectorAll('[data-testid="node-widget"]')[F] ?? null : null;
    }
    function I(D) {
      return !D || D.width <= 0 || D.height <= 0 ? null : {
        left: `${D.left}px`,
        top: `${D.top}px`,
        width: `${D.width}px`,
        height: `${D.height}px`
      };
    }
    function V(D) {
      const F = oe((D == null ? void 0 : D.id) ?? "");
      if (F) return F.getBoundingClientRect();
      const X = t.comfyApp;
      if (!D || typeof (X == null ? void 0 : X.canvasPosToClientPos) != "function") return null;
      const Ue = X.canvasPosToClientPos([D.pos[0], D.pos[1] - 32]), Pe = X.canvasPosToClientPos([D.pos[0] + D.size[0], D.pos[1] + D.size[1]]);
      return !Ue || !Pe ? null : new DOMRect(Ue[0], Ue[1], Pe[0] - Ue[0], Pe[1] - Ue[1]);
    }
    function ie(D) {
      var nt, kt, Et, re, B, ue, We;
      const F = le(D.node_id, D.widget_idx);
      if (F) return F.getBoundingClientRect();
      const X = ((Et = (kt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : kt.getNodeById) == null ? void 0 : Et.call(kt, String(D.node_id))) ?? ((ue = (B = (re = t.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : B.getNodeById) == null ? void 0 : ue.call(B, String(D.node_id)));
      if (!X || typeof D.widget_idx != "number" || !Array.isArray(X.widgets)) return null;
      const Oe = X.widgets[D.widget_idx];
      if (!Oe || typeof ((We = t.comfyApp) == null ? void 0 : We.canvasPosToClientPos) != "function") return V(X);
      const Ue = 10, Pe = t.comfyApp.canvasPosToClientPos([X.pos[0] + Ue, X.pos[1] + (Oe.y ?? 0)]), Ge = t.comfyApp.canvasPosToClientPos([X.pos[0] + X.size[0] - Ue, X.pos[1] + (Oe.y ?? 0) + (Oe.computedHeight ?? 24)]);
      return !Pe || !Ge ? V(X) : new DOMRect(Pe[0], Pe[1], Ge[0] - Pe[0], Ge[1] - Pe[1]);
    }
    function Ie(D) {
      var X, Oe, Ue, Pe, Ge, nt;
      const F = ((Ue = (Oe = (X = t.comfyApp) == null ? void 0 : X.graph) == null ? void 0 : Oe.getNodeById) == null ? void 0 : Ue.call(Oe, String(D.node_id))) ?? ((nt = (Ge = (Pe = t.comfyApp) == null ? void 0 : Pe.rootGraph) == null ? void 0 : Ge.getNodeById) == null ? void 0 : nt.call(Ge, String(D.node_id)));
      return V(F);
    }
    const $e = M(() => (S.value, E.value.inputs.map((D, F) => {
      const X = I(ie(D));
      return X ? {
        key: `input-${F}-${D.node_id}-${D.widget_idx ?? "na"}`,
        style: X,
        active: k.value === F
      } : null;
    }).filter((D) => !!D))), Se = M(() => (S.value, E.value.outputs.map((D, F) => {
      const X = I(Ie(D));
      return X ? {
        key: `output-${F}-${D.node_id}-${D.selector ?? "primary"}`,
        style: X,
        active: $.value === F
      } : null;
    }).filter((D) => !!D)));
    function Ae(D) {
      var Et, re, B, ue, We, dt, Ct, it, xt, ss;
      if (Me(D.target)) return null;
      const F = (Et = t.comfyApp) == null ? void 0 : Et.canvas;
      if (!F) return null;
      const X = (re = F.convertEventToCanvasOffset) == null ? void 0 : re.call(F, D);
      if (!X || X.length < 2) return null;
      const [Oe, Ue] = X, Pe = F.graph || ((B = t.comfyApp) == null ? void 0 : B.graph) || ((ue = t.comfyApp) == null ? void 0 : ue.rootGraph), Ge = ((We = Pe == null ? void 0 : Pe.getNodeOnPos) == null ? void 0 : We.call(Pe, Oe, Ue, F.visible_nodes)) || ((dt = F.getNodeOnPos) == null ? void 0 : dt.call(F, Oe, Ue)) || fe(D.target);
      if (!Ge) return null;
      const nt = (Ct = Ge.getWidgetOnPos) == null ? void 0 : Ct.call(Ge, Oe, Ue, !0);
      if (nt)
        return { kind: "input", node: Ge, widget: nt, canvasX: Oe, canvasY: Ue };
      const kt = ((it = Ge.getOutputOnPos) == null ? void 0 : it.call(Ge, [Oe, Ue])) || ((ss = (xt = Ge.constructor) == null ? void 0 : xt.nodeData) != null && ss.output_node ? { name: Ge.title || Ge.type || "output", type: "image" } : null);
      return kt ? { kind: "output", node: Ge, output: kt, canvasX: Oe, canvasY: Ue } : null;
    }
    function Fe(D, F) {
      var nt;
      const X = Array.isArray(D.widgets) ? D.widgets.indexOf(F) : -1, Oe = E.value.inputs.findIndex(
        (kt) => String(kt.node_id) === String(D.id) && kt.widget_idx === X
      );
      if (Oe >= 0) {
        k.value = Oe;
        return;
      }
      const Ue = typeof ((nt = F == null ? void 0 : F.options) == null ? void 0 : nt.property) == "string" ? F.options.property : void 0, Pe = (F == null ? void 0 : F.name) || Ue || "input", Ge = {
        name: me(String(Pe), `input_${E.value.inputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || Ue || `Input ${E.value.inputs.length + 1}`),
        type: ve(F == null ? void 0 : F.type),
        node_id: String(D.id),
        widget_idx: X >= 0 ? X : void 0,
        field_key: Ue,
        required: !0,
        default: (F == null ? void 0 : F.value) ?? ""
      };
      de(Ge.type) && (Ge.min = O(F, "min"), Ge.max = O(F, "max")), ce(Ge.type) && (Ge.enum_values = ye(F)), E.value.inputs.push(Ge), k.value = E.value.inputs.length - 1, $.value = null;
    }
    function De(D, F) {
      const X = Array.isArray(D.outputs) ? D.outputs.indexOf(F) : -1, Oe = X >= 0 ? `slot:${X}` : "primary", Ue = E.value.outputs.findIndex(
        (Ge) => String(Ge.node_id) === String(D.id) && (Ge.selector || "primary") === Oe
      );
      if (Ue >= 0) {
        $.value = Ue;
        return;
      }
      const Pe = {
        name: me(String((F == null ? void 0 : F.name) || "output"), `output_${E.value.outputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || `Output ${E.value.outputs.length + 1}`),
        type: ve(F == null ? void 0 : F.type),
        node_id: String(D.id),
        selector: Oe
      };
      E.value.outputs.push(Pe), $.value = E.value.outputs.length - 1, k.value = null;
    }
    function Ee(D) {
      var Oe, Ue, Pe;
      if (!r.value) {
        T.value = null, P.value = null;
        return;
      }
      const F = Ae(D);
      if (!F) {
        T.value = null, P.value = null;
        return;
      }
      if (F.kind === "input") {
        const Ge = Array.isArray(F.node.widgets) ? F.node.widgets.indexOf(F.widget) : -1, nt = I(((Oe = le(F.node.id, Ge)) == null ? void 0 : Oe.getBoundingClientRect()) ?? ie({
          node_id: String(F.node.id),
          widget_idx: Ge >= 0 ? Ge : void 0
        }));
        if (!nt) {
          T.value = null, P.value = null;
          return;
        }
        T.value = {
          kind: "input",
          label: `${((Ue = F.widget) == null ? void 0 : Ue.name) || "widget"} · Node ${F.node.id}`
        }, P.value = { kind: "input", style: nt };
        return;
      }
      const X = I(V(F.node));
      if (!X) {
        T.value = null, P.value = null;
        return;
      }
      T.value = {
        kind: "output",
        label: `${((Pe = F.output) == null ? void 0 : Pe.name) || F.node.title || F.node.type || "output"} · Node ${F.node.id}`
      }, P.value = { kind: "output", style: X };
    }
    function Ke(D) {
      var Oe, Ue, Pe;
      if (!r.value || !w.value || D.button !== 0) return;
      const F = Ae(D);
      if (!F) return;
      const X = (Oe = t.comfyApp) == null ? void 0 : Oe.canvas;
      if (X) {
        if (F.kind === "input") {
          D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(X.graph_mouse) && (X.graph_mouse[0] = F.canvasX, X.graph_mouse[1] = F.canvasY), (Ue = X.selectNode) == null || Ue.call(X, F.node, !1), Fe(F.node, F.widget);
          return;
        }
        D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(X.graph_mouse) && (X.graph_mouse[0] = F.canvasX, X.graph_mouse[1] = F.canvasY), (Pe = X.selectNode) == null || Pe.call(X, F.node, !1), De(F.node, F.output);
      }
    }
    function Be() {
      document.addEventListener("pointerdown", Ke, !0), document.addEventListener("pointermove", Ee, !0);
    }
    function pe() {
      document.removeEventListener("pointerdown", Ke, !0), document.removeEventListener("pointermove", Ee, !0);
    }
    async function K() {
      if (c.value) {
        u.value = !0, v.value = null;
        try {
          p.value = await o(c.value), w.value = ae(p.value.execution_contract);
        } catch (D) {
          v.value = D instanceof Error ? D.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function He() {
      if (!(!w.value || !c.value)) {
        d.value = !0, v.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = ae(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), ze({ reopenPanel: !0 });
        } catch (D) {
          v.value = D instanceof Error ? D.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ce() {
      _.value = !0;
    }
    async function Ye() {
      if (c.value) {
        _.value = !1, m.value = !0, v.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), ze({ reopenPanel: !0 });
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
    function ze(D) {
      r.value = !1, T.value = null, P.value = null, _.value = !1, D != null && D.reopenPanel && ot();
    }
    async function N(D) {
      var Oe, Ue;
      const X = (Ue = (Oe = D.detail) == null ? void 0 : Oe.workflowName) == null ? void 0 : Ue.trim();
      X && (c.value = X, k.value = null, $.value = null, g.value = !1, r.value = !0, await K());
    }
    function se(D) {
      if (D.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        ze({ reopenPanel: !0 });
      }
    }
    function ge() {
      if (R != null) return;
      const D = () => {
        if (S.value += 1, !r.value) {
          R = null;
          return;
        }
        R = window.requestAnimationFrame(D);
      };
      R = window.requestAnimationFrame(D);
    }
    function Je() {
      R != null && (window.cancelAnimationFrame(R), R = null);
    }
    return wt(r, (D) => {
      D ? (Be(), ge()) : (pe(), Je());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", N), window.addEventListener("keydown", se);
    }), na(() => {
      pe(), Je(), window.removeEventListener("comfygit:open-io-mapping", N), window.removeEventListener("keydown", se);
    }), (D, F) => r.value ? (n(), i("div", IP, [
      s("div", EP, [
        (n(!0), i(j, null, he($e.value, (X) => (n(), i("div", {
          key: X.key,
          class: Ve(["io-highlight", "io-highlight-input", { active: X.active }]),
          style: Rt(X.style)
        }, null, 6))), 128)),
        (n(!0), i(j, null, he(Se.value, (X) => (n(), i("div", {
          key: X.key,
          class: Ve(["io-highlight", "io-highlight-output", { active: X.active }]),
          style: Rt(X.style)
        }, null, 6))), 128)),
        P.value ? (n(), i("div", {
          key: 0,
          class: Ve(["io-highlight", P.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Rt(P.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", TP, [
        s("div", MP, [
          F[8] || (F[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", PP, f(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          T.value ? (n(), i("div", RP, " Hovering " + f(T.value.kind) + ": " + f(T.value.label), 1)) : y("", !0)
        ]),
        s("div", LP, [
          C(Ne, {
            size: "sm",
            variant: "secondary",
            onClick: F[0] || (F[0] = (X) => ze({ reopenPanel: !0 }))
          }, {
            default: h(() => [...F[9] || (F[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", DP, [
        s("div", NP, [
          u.value ? (n(), i("div", OP, " Loading workflow contract... ")) : v.value ? (n(), i("div", UP, f(v.value), 1)) : w.value ? (n(), i(j, { key: 2 }, [
            s("section", AP, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: F[1] || (F[1] = (X) => g.value = !g.value)
              }, [
                F[10] || (F[10] = s("span", null, "Contract Details", -1)),
                s("span", zP, f(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (n(), i("div", FP, [
                C(Ot, { label: "Default Contract" }, {
                  default: h(() => [
                    C(bt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Re
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                C(Ot, { label: "Display Name" }, {
                  default: h(() => [
                    C(bt, {
                      modelValue: E.value.display_name,
                      "onUpdate:modelValue": F[2] || (F[2] = (X) => E.value.display_name = X),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                C(Ot, { label: "Description" }, {
                  default: h(() => [
                    C(Co, {
                      modelValue: E.value.description,
                      "onUpdate:modelValue": F[3] || (F[3] = (X) => E.value.description = X),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", VP, [
              s("span", BP, f(H.value), 1),
              s("span", WP, f(E.value.inputs.length) + " input" + f(E.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", GP, f(E.value.outputs.length) + " output" + f(E.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", jP, [
              s("div", HP, [
                C(no, { variant: "section" }, {
                  default: h(() => [...F[11] || (F[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.inputs.length ? y("", !0) : (n(), i("div", qP, " No inputs configured. ")),
              (n(!0), i(j, null, he(E.value.inputs, (X, Oe) => (n(), i("div", {
                key: `input-${Oe}`,
                class: Ve(["item-card", { selected: k.value === Oe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ue) => we(Oe)
                }, [
                  s("div", null, [
                    s("div", JP, f(X.name || `Input ${Oe + 1}`), 1),
                    s("div", QP, [
                      x(" Node " + f(X.node_id || "?"), 1),
                      X.widget_idx !== void 0 ? (n(), i(j, { key: 0 }, [
                        x(" · Widget " + f(X.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", YP, [
                      s("span", null, f(X.type || "string"), 1),
                      s("span", null, f(X.required ? "required" : "optional"), 1),
                      X.default !== void 0 && X.default !== "" ? (n(), i("span", XP, "default " + f(Le(X.default)), 1)) : y("", !0)
                    ])
                  ]),
                  C(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Ue) => ee(Oe), ["stop"])
                  }, {
                    default: h(() => [...F[12] || (F[12] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, KP),
                k.value === Oe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[4] || (F[4] = vt(() => {
                  }, ["stop"]))
                }, [
                  C(Ot, { label: "Name" }, {
                    default: h(() => [
                      C(bt, {
                        modelValue: X.name,
                        "onUpdate:modelValue": (Ue) => X.name = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Ot, { label: "Display Name" }, {
                    default: h(() => [
                      C(bt, {
                        modelValue: X.display_name,
                        "onUpdate:modelValue": (Ue) => X.display_name = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Ot, { label: "Type" }, {
                    default: h(() => [
                      C(Dn, {
                        "model-value": X.type,
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => X.type = Ue
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Ot, { label: "Required" }, {
                    default: h(() => [
                      C(Dn, {
                        "model-value": X.required ? "true" : "false",
                        options: A,
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => X.required = Ue === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Ot, {
                    class: Ve({ "item-grid-full": X.type === "string" || X.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      X.type === "string" ? (n(), L(Co, {
                        key: 0,
                        "model-value": Z(X.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Ue) => X.default = Ue
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(bt, {
                        key: 1,
                        modelValue: X.default,
                        "onUpdate:modelValue": (Ue) => X.default = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  de(X.type) ? (n(), L(Ot, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      C(bt, {
                        "model-value": ke(X.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => X.min = Q(Ue)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  de(X.type) ? (n(), L(Ot, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      C(bt, {
                        "model-value": ke(X.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => X.max = Q(Ue)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ce(X.type) ? (n(), L(Ot, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      C(Co, {
                        "model-value": G(X.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Ue) => X.enum_values = J(Ue)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", ZP, [
              s("div", eR, [
                C(no, { variant: "section" }, {
                  default: h(() => [...F[13] || (F[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.outputs.length ? y("", !0) : (n(), i("div", tR, " No outputs configured. ")),
              (n(!0), i(j, null, he(E.value.outputs, (X, Oe) => (n(), i("div", {
                key: `output-${Oe}`,
                class: Ve(["item-card", { selected: $.value === Oe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ue) => te(Oe)
                }, [
                  s("div", null, [
                    s("div", oR, f(X.name || `Output ${Oe + 1}`), 1),
                    s("div", nR, [
                      x(" Node " + f(X.node_id || "?"), 1),
                      X.selector ? (n(), i(j, { key: 0 }, [
                        x(" · " + f(X.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", aR, [
                      s("span", null, f(X.type || "file"), 1)
                    ])
                  ]),
                  C(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Ue) => Y(Oe), ["stop"])
                  }, {
                    default: h(() => [...F[14] || (F[14] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, sR),
                $.value === Oe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[5] || (F[5] = vt(() => {
                  }, ["stop"]))
                }, [
                  C(Ot, { label: "Name" }, {
                    default: h(() => [
                      C(bt, {
                        modelValue: X.name,
                        "onUpdate:modelValue": (Ue) => X.name = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Ot, { label: "Display Name" }, {
                    default: h(() => [
                      C(bt, {
                        modelValue: X.display_name,
                        "onUpdate:modelValue": (Ue) => X.display_name = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Ot, { label: "Type" }, {
                    default: h(() => [
                      C(Dn, {
                        "model-value": X.type,
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => X.type = Ue
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", lR, [
          s("div", iR, [
            C(Ne, {
              variant: "secondary",
              onClick: F[6] || (F[6] = (X) => ze({ reopenPanel: !0 }))
            }, {
              default: h(() => [...F[15] || (F[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", rR, [
            C(Ne, {
              variant: "danger",
              disabled: !z.value,
              loading: m.value,
              onClick: Ce
            }, {
              default: h(() => [...F[16] || (F[16] = [
                x(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            C(Ne, {
              variant: "primary",
              loading: d.value,
              onClick: He
            }, {
              default: h(() => [...F[17] || (F[17] = [
                x(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (n(), L(El, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Ye,
        onCancel: F[7] || (F[7] = (X) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), uR = /* @__PURE__ */ xe(cR, [["__scopeId", "data-v-13515b27"]]), dR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', fR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', mR = {
  comfy: dR,
  phosphor: fR
}, Pl = "comfy", Sc = "comfygit-theme";
let Zs = null, Ic = Pl;
function vR() {
  try {
    const e = localStorage.getItem(Sc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Pl;
}
function Ec(e = Pl) {
  Zs && Zs.remove(), Zs = document.createElement("style"), Zs.id = "comfygit-theme-styles", Zs.setAttribute("data-theme", e), Zs.textContent = mR[e], document.head.appendChild(Zs), document.body.setAttribute("data-comfygit-theme", e), Ic = e;
  try {
    localStorage.setItem(Sc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function pR() {
  return Ic;
}
function gR(e) {
  Ec(e);
}
function hR(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Pi = "ComfyGit.DevAutoReload", Tc = "ComfyGit.DevAutoReload.PanelOpen";
function yR() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ca() {
  const e = yR();
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
function Mc(e) {
  if (ca())
    try {
      sessionStorage.setItem(Tc, e ? "true" : "false");
    } catch {
    }
}
function wR() {
  if (!ca()) return !1;
  try {
    return sessionStorage.getItem(Tc) === "true";
  } catch {
    return !1;
  }
}
async function Ri(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const u = t.headers, d = u.get("etag"), m = u.get("last-modified"), v = u.get("content-length");
    if (d || m)
      return [d, m, v].filter(Boolean).join(":");
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
async function _R(e) {
  if (!ca()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Ri(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const a of t)
        try {
          const l = await Ri(a.url);
          if (a.signature && l && l !== a.signature) {
            o = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const kR = "./comfygit-panel.css", bR = "./comfygit-panel.js", Pc = new URL(kR, import.meta.url).href, $R = new URL(bR, import.meta.url).href, Rl = document.createElement("link");
Rl.rel = "stylesheet";
Rl.href = Pc;
document.head.appendChild(Rl);
const CR = vR();
Ec(CR);
ca() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), gR(e);
  },
  getTheme: () => {
    const e = pR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let $s = null, en = null, Zt = null, tn = null, zo = null, Li = null, Fo = null, Di = null, Vo = null, Ni = null;
const xo = b(null);
let dn = "no_workspace", Rc = !1;
async function Nn() {
  var e;
  if (!((e = es) != null && e.api)) return null;
  try {
    const t = await es.api.fetchApi("/v2/comfygit/status");
    t.ok && (xo.value = await t.json());
  } catch {
  }
}
async function ol() {
  var e;
  if ((e = es) != null && e.api)
    try {
      const t = await es.api.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        dn = o.state, Rc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function nl() {
  var t;
  if (dn === "managed" || !Rc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function xR() {
  if (!xo.value) return !1;
  const e = xo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || xo.value.has_changes;
}
function Bo(e) {
  jo(), Mc(!0), $s = document.createElement("div"), $s.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", $s.appendChild(t), $s.addEventListener("click", (a) => {
    a.target === $s && jo();
  });
  const o = (a) => {
    a.key === "Escape" && (jo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), en = pn({
    render: () => Po(hM, {
      initialView: e,
      onClose: jo,
      onStatusUpdate: async (a) => {
        xo.value = a, sn(), await ol(), al(), nl();
      }
    })
  }), en.mount(t), document.body.appendChild($s);
}
function jo() {
  Mc(!1), en && (en.unmount(), en = null), $s && ($s.remove(), $s = null);
}
function Oi(e) {
  Wo(), Zt = document.createElement("div"), Zt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Zt.style.position = "fixed", Zt.style.top = `${t.bottom + 8}px`, Zt.style.right = `${window.innerWidth - t.right}px`, Zt.style.zIndex = "10001";
  const o = (l) => {
    Zt && !Zt.contains(l.target) && l.target !== e && (Wo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Wo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), tn = pn({
    render: () => Po(bc, {
      status: xo.value,
      onClose: Wo,
      onCommitted: (l) => {
        Wo(), SR(l.success, l.message), Nn().then(sn);
      }
    })
  }), tn.mount(Zt), document.body.appendChild(Zt);
}
function Wo() {
  tn && (tn.unmount(), tn = null), Zt && (Zt.remove(), Zt = null);
}
function SR(e, t) {
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
function IR() {
  zo || (zo = document.createElement("div"), zo.className = "comfygit-download-queue-root", Li = pn({
    render: () => Po(d7)
  }), Li.mount(zo), document.body.appendChild(zo), console.log("[ComfyGit] Model download queue mounted"));
}
function ER() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-missing-resources-root", Di = pn({
    render: () => Po(SP)
  }), Di.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function TR() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-io-mapping-root", Ni = pn({
    render: () => Po(uR, {
      comfyApp: es
    })
  }), Ni.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Kt = null;
function sn() {
  if (!Kt) return;
  const e = Kt.querySelector(".commit-indicator");
  e && (e.style.display = xR() ? "block" : "none");
}
function al() {
  if (!Kt) return;
  const e = dn !== "managed";
  Kt.disabled = e, Kt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
es.registerExtension({
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
        Kt && !Kt.disabled && Oi(Kt);
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
    if (dn === "managed")
      try {
        await Promise.all([
          es.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          es.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (dn !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Bo(), Kt = document.createElement("button"), Kt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Kt.innerHTML = 'Commit <span class="commit-indicator"></span>', Kt.title = "Quick Commit", Kt.onclick = () => Oi(Kt), e.appendChild(t), e.appendChild(Kt), (r = (l = es.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (es.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), IR(), ER(), TR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Bo(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      jo();
    }));
    const { loadPendingDownloads: o } = Ro();
    o(), await Promise.all([Nn(), ol()]), sn(), al(), nl(), wR() && setTimeout(() => {
      $s || Bo();
    }, 100), _R([
      { name: "panel script", url: $R },
      { name: "panel stylesheet", url: Pc }
    ]), setTimeout(nl, 100), setInterval(async () => {
      await Promise.all([Nn(), ol()]), sn(), al();
    }, 3e4);
    const a = es.api;
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
        const k = document.createElement("div");
        k.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", k.appendChild($);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", k.appendChild(S), g.appendChild(k);
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
          g.remove(), Bo("debug-env");
        }, g.appendChild(T);
        const P = document.createElement("button");
        P.textContent = "×", P.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, P.onmouseover = () => P.style.opacity = "1", P.onmouseout = () => P.style.opacity = "0.6", P.onclick = () => g.remove(), g.appendChild(P), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
        const k = document.createElement("div");
        k.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", k.appendChild($);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", k.appendChild(S), g.appendChild(k);
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
          T.disabled = !0, T.textContent = "Restarting...", T.style.opacity = "0.7", $.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const R = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                es.refreshComboInNodes && (await es.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", T.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (U) {
                console.error("[ComfyGit] Failed to refresh nodes:", U), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", T.style.display = "none";
              }
            };
            a.addEventListener("reconnected", R, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (R) {
            console.error("[ComfyGit] Failed to restart:", R), $.textContent = "Restart Failed", $.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", T.textContent = "Try Again", T.disabled = !1, T.style.opacity = "1";
          }
        }, g.appendChild(T);
        const P = document.createElement("button");
        P.textContent = "×", P.title = "Dismiss (restart later)", P.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, P.onmouseover = () => P.style.opacity = "1", P.onmouseout = () => P.style.opacity = "0.6", P.onclick = () => g.remove(), g.appendChild(P), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await Nn(), sn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = hR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        m(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
