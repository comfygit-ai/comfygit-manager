var Nc = Object.defineProperty;
var Oc = (e, t, o) => t in e ? Nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var _n = (e, t, o) => Oc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as Zt } from "../../scripts/app.js";
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
const ht = {}, wo = [], bs = () => {
}, Ai = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rl = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, cl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Uc = Object.prototype.hasOwnProperty, ft = (e, t) => Uc.call(e, t), Ze = Array.isArray, _o = (e) => fn(e) === "[object Map]", Mo = (e) => fn(e) === "[object Set]", Ol = (e) => fn(e) === "[object Date]", et = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", zi = (e) => (gt(e) || et(e)) && et(e.then) && et(e.catch), Fi = Object.prototype.toString, fn = (e) => Fi.call(e), Ac = (e) => fn(e).slice(8, -1), Vi = (e) => fn(e) === "[object Object]", ul = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qo = /* @__PURE__ */ il(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, zc = /-\w/g, is = Yn(
  (e) => e.replace(zc, (t) => t.slice(1).toUpperCase())
), Fc = /\B([A-Z])/g, Js = Yn(
  (e) => e.replace(Fc, "-$1").toLowerCase()
), Xn = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ma = Yn(
  (e) => e ? `on${Xn(e)}` : ""
), Hs = (e, t) => !Object.is(e, t), En = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Bi = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Vc = (e) => {
  const t = $t(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ul;
const ea = () => Ul || (Ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (Ze(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = $t(a) ? jc(a) : Rt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if ($t(e) || gt(e))
    return e;
}
const Bc = /;(?![^(]*\))/g, Wc = /:([^]+)/, Gc = /\/\*[^]*?\*\//g;
function jc(e) {
  const t = {};
  return e.replace(Gc, "").split(Bc).forEach((o) => {
    if (o) {
      const a = o.split(Wc);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Ve(e) {
  let t = "";
  if ($t(e))
    t = e;
  else if (Ze(e))
    for (let o = 0; o < e.length; o++) {
      const a = Ve(e[o]);
      a && (t += a + " ");
    }
  else if (gt(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qc = /* @__PURE__ */ il(Hc);
function Wi(e) {
  return !!e || e === "";
}
function Kc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = lo(e[a], t[a]);
  return o;
}
function lo(e, t) {
  if (e === t) return !0;
  let o = Ol(e), a = Ol(t);
  if (o || a)
    return o && a ? e.getTime() === t.getTime() : !1;
  if (o = ms(e), a = ms(t), o || a)
    return e === t;
  if (o = Ze(e), a = Ze(t), o || a)
    return o && a ? Kc(e, t) : !1;
  if (o = gt(e), a = gt(t), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !lo(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function dl(e, t) {
  return e.findIndex((o) => lo(o, t));
}
const Gi = (e) => !!(e && e.__v_isRef === !0), m = (e) => $t(e) ? e : e == null ? "" : Ze(e) || gt(e) && (e.toString === Fi || !et(e.toString)) ? Gi(e) ? m(e.value) : JSON.stringify(e, ji, 2) : String(e), ji = (e, t) => Gi(t) ? ji(e, t.value) : _o(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [a, l], r) => (o[Pa(a, r) + " =>"] = l, o),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Pa(o))
} : ms(t) ? Pa(t) : gt(t) && !Ze(t) && !Vi(t) ? String(t) : t, Pa = (e, t = "") => {
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
let Jt;
class Jc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Jt, !t && Jt && (this.index = (Jt.scopes || (Jt.scopes = [])).push(
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
      const o = Jt;
      try {
        return Jt = this, t();
      } finally {
        Jt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Jt, Jt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Jt = this.prevScope, this.prevScope = void 0);
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
function Qc() {
  return Jt;
}
let wt;
const Ra = /* @__PURE__ */ new WeakSet();
class Hi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ki(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Al(this), Ji(this);
    const t = wt, o = us;
    wt = this, us = !0;
    try {
      return this.fn();
    } finally {
      Qi(this), wt = t, us = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        vl(t);
      this.deps = this.depsTail = void 0, Al(this), this.onStop && this.onStop(), this.flags &= -2;
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
let qi = 0, Ko, Jo;
function Ki(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Jo, Jo = e;
    return;
  }
  e.next = Ko, Ko = e;
}
function ml() {
  qi++;
}
function fl() {
  if (--qi > 0)
    return;
  if (Jo) {
    let t = Jo;
    for (Jo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Ko; ) {
    let t = Ko;
    for (Ko = void 0; t; ) {
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
function Ji(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Qi(e) {
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), vl(a), Yc(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = o;
}
function Ga(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Yi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Yi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ga(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = wt, a = us;
  wt = e, us = !0;
  try {
    Ji(e);
    const l = e.fn(e._value);
    (t.version === 0 || Hs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    wt = o, us = a, Qi(e), e.flags &= -3;
  }
}
function vl(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
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
let us = !0;
const Xi = [];
function Ds() {
  Xi.push(us), us = !1;
}
function Ns() {
  const e = Xi.pop();
  us = e === void 0 ? !0 : e;
}
function Al(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = wt;
    wt = void 0;
    try {
      t();
    } finally {
      wt = o;
    }
  }
}
let nn = 0;
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
    if (!wt || !us || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Xc(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, Zi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = wt.depsTail, o.nextDep = void 0, wt.depsTail.nextDep = o, wt.depsTail = o, wt.deps === o && (wt.deps = a);
    }
    return o;
  }
  trigger(t) {
    this.version++, nn++, this.notify(t);
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
function Zi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        Zi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const ja = /* @__PURE__ */ new WeakMap(), oo = Symbol(
  ""
), Ha = Symbol(
  ""
), an = Symbol(
  ""
);
function Ft(e, t, o) {
  if (us && wt) {
    let a = ja.get(e);
    a || ja.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new pl()), l.map = a, l.key = o), l.track();
  }
}
function Ps(e, t, o, a, l, r) {
  const c = ja.get(e);
  if (!c) {
    nn++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (ml(), t === "clear")
    c.forEach(u);
  else {
    const d = Ze(e), v = d && ul(o);
    if (d && o === "length") {
      const f = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === an || !ms(w) && w >= f) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(an)), t) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(oo)), _o(e) && u(c.get(Ha)));
          break;
        case "delete":
          d || (u(c.get(oo)), _o(e) && u(c.get(Ha)));
          break;
        case "set":
          _o(e) && u(c.get(oo));
          break;
      }
  }
  fl();
}
function fo(e) {
  const t = ut(e);
  return t === e ? t : (Ft(t, "iterate", an), as(e) ? t : t.map(fs));
}
function ta(e) {
  return Ft(e = ut(e), "iterate", an), e;
}
function Ws(e, t) {
  return Os(e) ? no(e) ? Io(fs(t)) : Io(t) : fs(t);
}
const Zc = {
  __proto__: null,
  [Symbol.iterator]() {
    return La(this, Symbol.iterator, (e) => Ws(this, e));
  },
  concat(...e) {
    return fo(this).concat(
      ...e.map((t) => Ze(t) ? fo(t) : t)
    );
  },
  entries() {
    return La(this, "entries", (e) => (e[1] = Ws(this, e[1]), e));
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
      (o) => o.map((a) => Ws(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Es(
      this,
      "find",
      e,
      t,
      (o) => Ws(this, o),
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
      (o) => Ws(this, o),
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
    return Es(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Oo(this, "pop");
  },
  push(...e) {
    return Oo(this, "push", e);
  },
  reduce(e, ...t) {
    return zl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zl(this, "reduceRight", e, t);
  },
  shift() {
    return Oo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Es(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Oo(this, "splice", e);
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
    return Oo(this, "unshift", e);
  },
  values() {
    return La(this, "values", (e) => Ws(this, e));
  }
};
function La(e, t, o) {
  const a = ta(e), l = a[t]();
  return a !== e && !as(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const eu = Array.prototype;
function Es(e, t, o, a, l, r) {
  const c = ta(e), u = c !== e && !as(e), d = c[t];
  if (d !== eu[t]) {
    const p = d.apply(e, r);
    return u ? fs(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Ws(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(c, v, a);
  return u && l ? l(f) : f;
}
function zl(e, t, o, a) {
  const l = ta(e);
  let r = o;
  return l !== e && (as(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Ws(e, u), d, e);
  }), l[t](r, ...a);
}
function Da(e, t, o) {
  const a = ut(e);
  Ft(a, "iterate", an);
  const l = a[t](...o);
  return (l === -1 || l === !1) && yl(o[0]) ? (o[0] = ut(o[0]), a[t](...o)) : l;
}
function Oo(e, t, o = []) {
  Ds(), ml();
  const a = ut(e)[t].apply(e, o);
  return fl(), Ns(), a;
}
const tu = /* @__PURE__ */ il("__proto__,__v_isRef,__isVue"), er = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function su(e) {
  ms(e) || (e = String(e));
  const t = ut(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class tr {
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
      return a === (l ? r ? mu : ar : r ? nr : or).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const c = Ze(t);
    if (!l) {
      let d;
      if (c && (d = Zc[o]))
        return d;
      if (o === "hasOwnProperty")
        return su;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(t) ? t : a
    );
    if ((ms(o) ? er.has(o) : tu(o)) || (l || Ft(t, "get", o), r))
      return u;
    if (Gt(u)) {
      const d = c && ul(o) ? u : u.value;
      return l && gt(d) ? Un(d) : d;
    }
    return gt(u) ? l ? Un(u) : co(u) : u;
  }
}
class sr extends tr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, l) {
    let r = t[o];
    const c = Ze(t) && ul(o);
    if (!this._isShallow) {
      const v = Os(r);
      if (!as(a) && !Os(a) && (r = ut(r), a = ut(a)), !c && Gt(r) && !Gt(a))
        return v || (r.value = a), !0;
    }
    const u = c ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      a,
      Gt(t) ? t : l
    );
    return t === ut(l) && (u ? Hs(a, r) && Ps(t, "set", o, a) : Ps(t, "add", o, a)), d;
  }
  deleteProperty(t, o) {
    const a = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && a && Ps(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!ms(o) || !er.has(o)) && Ft(t, "has", o), a;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      Ze(t) ? "length" : oo
    ), Reflect.ownKeys(t);
  }
}
class ou extends tr {
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
const nu = /* @__PURE__ */ new sr(), au = /* @__PURE__ */ new ou(), lu = /* @__PURE__ */ new sr(!0);
const qa = (e) => e, kn = (e) => Reflect.getPrototypeOf(e);
function iu(e, t, o) {
  return function(...a) {
    const l = this.__v_raw, r = ut(l), c = _o(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...a), f = o ? qa : t ? Io : fs;
    return !t && Ft(
      r,
      "iterate",
      d ? Ha : oo
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
function bn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ru(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      e || (Hs(l, u) && Ft(c, "get", l), Ft(c, "get", u));
      const { has: d } = kn(c), v = t ? qa : e ? Io : fs;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ft(ut(l), "iterate", oo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      return e || (Hs(l, u) && Ft(c, "has", l), Ft(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ut(u), v = t ? qa : e ? Io : fs;
      return !e && Ft(d, "iterate", oo), u.forEach((f, p) => l.call(r, v(f), v(p), c));
    }
  };
  return Mt(
    o,
    e ? {
      add: bn("add"),
      set: bn("set"),
      delete: bn("delete"),
      clear: bn("clear")
    } : {
      add(l) {
        !t && !as(l) && !Os(l) && (l = ut(l));
        const r = ut(this);
        return kn(r).has.call(r, l) || (r.add(l), Ps(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !as(r) && !Os(r) && (r = ut(r));
        const c = ut(this), { has: u, get: d } = kn(c);
        let v = u.call(c, l);
        v || (l = ut(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? Hs(r, f) && Ps(c, "set", l, r) : Ps(c, "add", l, r), this;
      },
      delete(l) {
        const r = ut(this), { has: c, get: u } = kn(r);
        let d = c.call(r, l);
        d || (l = ut(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && Ps(r, "delete", l, void 0), v;
      },
      clear() {
        const l = ut(this), r = l.size !== 0, c = l.clear();
        return r && Ps(
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
    o[l] = iu(l, e, t);
  }), o;
}
function gl(e, t) {
  const o = ru(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    ft(o, l) && l in a ? o : a,
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
const or = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap();
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
  return Os(e) ? e : hl(
    e,
    !1,
    nu,
    cu,
    or
  );
}
function pu(e) {
  return hl(
    e,
    !1,
    lu,
    uu,
    nr
  );
}
function Un(e) {
  return hl(
    e,
    !0,
    au,
    du,
    ar
  );
}
function hl(e, t, o, a, l) {
  if (!gt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = vu(e);
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
function no(e) {
  return Os(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Os(e) {
  return !!(e && e.__v_isReadonly);
}
function as(e) {
  return !!(e && e.__v_isShallow);
}
function yl(e) {
  return e ? !!e.__v_raw : !1;
}
function ut(e) {
  const t = e && e.__v_raw;
  return t ? ut(t) : e;
}
function gu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Bi(e, "__v_skip", !0), e;
}
const fs = (e) => gt(e) ? co(e) : e, Io = (e) => gt(e) ? Un(e) : e;
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
    this.dep = new pl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ut(t), this._value = o ? t : fs(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, a = this.__v_isShallow || as(t) || Os(t);
    t = a ? t : ut(t), Hs(t, o) && (this._rawValue = t, this._value = a ? t : fs(t), this.dep.trigger());
  }
}
function tt(e) {
  return Gt(e) ? e.value : e;
}
const wu = {
  get: (e, t, o) => t === "__v_raw" ? e : tt(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function lr(e) {
  return no(e) ? e : new Proxy(e, wu);
}
class _u {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new pl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return Ki(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Yi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ku(e, t, o = !1) {
  let a, l;
  return et(e) ? a = e : (a = e.get, l = e.set), new _u(a, l, o);
}
const $n = {}, An = /* @__PURE__ */ new WeakMap();
let to;
function bu(e, t = !1, o = to) {
  if (o) {
    let a = An.get(o);
    a || An.set(o, a = []), a.push(e);
  }
}
function $u(e, t, o = ht) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (E) => l ? E : as(E) || l === !1 || l === 0 ? Rs(E, 1) : Rs(E);
  let f, p, w, g, _ = !1, C = !1;
  if (Gt(e) ? (p = () => e.value, _ = as(e)) : no(e) ? (p = () => v(e), _ = !0) : Ze(e) ? (C = !0, _ = e.some((E) => no(E) || as(E)), p = () => e.map((E) => {
    if (Gt(E))
      return E.value;
    if (no(E))
      return v(E);
    if (et(E))
      return d ? d(E, 2) : E();
  })) : et(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ds();
      try {
        w();
      } finally {
        Ns();
      }
    }
    const E = to;
    to = f;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      to = E;
    }
  } : p = bs, t && l) {
    const E = p, N = l === !0 ? 1 / 0 : l;
    p = () => Rs(E(), N);
  }
  const x = Qc(), S = () => {
    f.stop(), x && x.active && cl(x.effects, f);
  };
  if (r && t) {
    const E = t;
    t = (...N) => {
      E(...N), S();
    };
  }
  let P = C ? new Array(e.length).fill($n) : $n;
  const T = (E) => {
    if (!(!(f.flags & 1) || !f.dirty && !E))
      if (t) {
        const N = f.run();
        if (l || _ || (C ? N.some((A, H) => Hs(A, P[H])) : Hs(N, P))) {
          w && w();
          const A = to;
          to = f;
          try {
            const H = [
              N,
              // pass undefined as the old value when it's changed for the first time
              P === $n ? void 0 : C && P[0] === $n ? [] : P,
              g
            ];
            P = N, d ? d(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            to = A;
          }
        }
      } else
        f.run();
  };
  return u && u(T), f = new Hi(p), f.scheduler = c ? () => c(T, !1) : T, g = (E) => bu(E, !1, f), w = f.onStop = () => {
    const E = An.get(f);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const N of E) N();
      An.delete(f);
    }
  }, t ? a ? T(!0) : P = f.run() : c ? c(T.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Rs(e, t = 1 / 0, o) {
  if (t <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Gt(e))
    Rs(e.value, t, o);
  else if (Ze(e))
    for (let a = 0; a < e.length; a++)
      Rs(e[a], t, o);
  else if (Mo(e) || _o(e))
    e.forEach((a) => {
      Rs(a, t, o);
    });
  else if (Vi(e)) {
    for (const a in e)
      Rs(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Rs(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    sa(l, t, o);
  }
}
function vs(e, t, o, a) {
  if (et(e)) {
    const l = vn(e, t, o, a);
    return l && zi(l) && l.catch((r) => {
      sa(r, t, o);
    }), l;
  }
  if (Ze(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(vs(e[r], t, o, a));
    return l;
  }
}
function sa(e, t, o, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || ht;
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
      Ds(), vn(r, null, 10, [
        e,
        d,
        v
      ]), Ns();
      return;
    }
  }
  Cu(e, o, l, a, c);
}
function Cu(e, t, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Kt = [];
let ys = -1;
const ko = [];
let Gs = null, go = 0;
const ir = /* @__PURE__ */ Promise.resolve();
let zn = null;
function Pt(e) {
  const t = zn || ir;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xu(e) {
  let t = ys + 1, o = Kt.length;
  for (; t < o; ) {
    const a = t + o >>> 1, l = Kt[a], r = ln(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : o = a;
  }
  return t;
}
function wl(e) {
  if (!(e.flags & 1)) {
    const t = ln(e), o = Kt[Kt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ln(o) ? Kt.push(e) : Kt.splice(xu(t), 0, e), e.flags |= 1, rr();
  }
}
function rr() {
  zn || (zn = ir.then(ur));
}
function Su(e) {
  Ze(e) ? ko.push(...e) : Gs && e.id === -1 ? Gs.splice(go + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), rr();
}
function Fl(e, t, o = ys + 1) {
  for (; o < Kt.length; o++) {
    const a = Kt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Kt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function cr(e) {
  if (ko.length) {
    const t = [...new Set(ko)].sort(
      (o, a) => ln(o) - ln(a)
    );
    if (ko.length = 0, Gs) {
      Gs.push(...t);
      return;
    }
    for (Gs = t, go = 0; go < Gs.length; go++) {
      const o = Gs[go];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Gs = null, go = 0;
  }
}
const ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ur(e) {
  try {
    for (ys = 0; ys < Kt.length; ys++) {
      const t = Kt[ys];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), vn(
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
    ys = -1, Kt.length = 0, cr(), zn = null, (Kt.length || ko.length) && ur();
  }
}
let Ut = null, dr = null;
function Fn(e) {
  const t = Ut;
  return Ut = e, dr = e && e.type.__scopeId || null, t;
}
function h(e, t = Ut, o) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && Wn(-1);
    const r = Fn(t);
    let c;
    try {
      c = e(...l);
    } finally {
      Fn(r), a._d && Wn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Tt(e, t) {
  if (Ut === null)
    return e;
  const o = ra(Ut), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = ht] = t[l];
    r && (et(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Rs(c), a.push({
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
function Ys(e, t, o, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Ds(), vs(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Ns());
  }
}
const mr = Symbol("_vte"), fr = (e) => e.__isTeleport, Qo = (e) => e && (e.disabled || e.disabled === ""), Vl = (e) => e && (e.defer || e.defer === ""), Bl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ka = (e, t) => {
  const o = e && e.to;
  return $t(o) ? t ? t(o) : null : o;
}, vr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, a, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: C, createComment: x }
    } = v, S = Qo(t.props);
    let { shapeFlag: P, children: T, dynamicChildren: E } = t;
    if (e == null) {
      const N = t.el = C(""), A = t.anchor = C("");
      g(N, o, a), g(A, o, a);
      const H = (V, ae) => {
        P & 16 && f(
          T,
          V,
          ae,
          l,
          r,
          c,
          u,
          d
        );
      }, M = () => {
        const V = t.target = Ka(t.props, _), ae = pr(V, t, C, g);
        V && (c !== "svg" && Bl(V) ? c = "svg" : c !== "mathml" && Wl(V) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(V), S || (H(V, ae), Tn(t, !1)));
      };
      S && (H(o, A), Tn(t, !0)), Vl(t.props) ? (t.el.__isMounted = !1, Ht(() => {
        M(), delete t.el.__isMounted;
      }, r)) : M();
    } else {
      if (Vl(t.props) && e.el.__isMounted === !1) {
        Ht(() => {
          vr.process(
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
      const N = t.anchor = e.anchor, A = t.target = e.target, H = t.targetAnchor = e.targetAnchor, M = Qo(e.props), V = M ? o : A, ae = M ? N : H;
      if (c === "svg" || Bl(A) ? c = "svg" : (c === "mathml" || Wl(A)) && (c = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
        V,
        l,
        r,
        c,
        u
      ), Cl(e, t, !0)) : d || p(
        e,
        t,
        V,
        ae,
        l,
        r,
        c,
        u,
        !1
      ), S)
        M ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Cn(
          t,
          o,
          N,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ce = t.target = Ka(
          t.props,
          _
        );
        ce && Cn(
          t,
          ce,
          null,
          v,
          0
        );
      } else M && Cn(
        t,
        A,
        H,
        v,
        1
      );
      Tn(t, S);
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
      const g = r || !Qo(w);
      for (let _ = 0; _ < u.length; _++) {
        const C = u[_];
        a(
          C,
          t,
          o,
          g,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: Cn,
  hydrate: Iu
};
function Cn(e, t, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && a(c, t, o), (!p || Qo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && a(u, t, o);
}
function Iu(e, t, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, p) {
  function w(C, x, S, P) {
    x.anchor = p(
      c(C),
      x,
      u(C),
      o,
      a,
      l,
      r
    ), x.targetStart = S, x.targetAnchor = P;
  }
  const g = t.target = Ka(
    t.props,
    d
  ), _ = Qo(t.props);
  if (g) {
    const C = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          C,
          C && c(C)
        );
      else {
        t.anchor = c(e);
        let x = C;
        for (; x; ) {
          if (x && x.nodeType === 8) {
            if (x.data === "teleport start anchor")
              t.targetStart = x;
            else if (x.data === "teleport anchor") {
              t.targetAnchor = x, g._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          x = c(x);
        }
        t.targetAnchor || pr(g, t, f, v), p(
          C && c(C),
          t,
          g,
          o,
          a,
          l,
          r
        );
      }
    Tn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Lt = vr;
function Tn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function pr(e, t, o, a) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[mr] = r, e && (a(l, e), a(r, e)), r;
}
const Ms = Symbol("_leaveCb"), xn = Symbol("_enterCb");
function gr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), aa(() => {
    e.isUnmounting = !0;
  }), e;
}
const os = [Function, Array], hr = {
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
}, yr = (e) => {
  const t = e.subTree;
  return t.component ? yr(t.component) : t;
}, Eu = {
  name: "BaseTransition",
  props: hr,
  setup(e, { slots: t }) {
    const o = Sl(), a = gr();
    return () => {
      const l = t.default && _l(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = wr(l), c = ut(e), { mode: u } = c;
      if (a.isLeaving)
        return Na(r);
      const d = Gl(r);
      if (!d)
        return Na(r);
      let v = rn(
        d,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== Bt && io(d, v);
      let f = o.subTree && Gl(o.subTree);
      if (f && f.type !== Bt && !so(f, d) && yr(o).type !== Bt) {
        let p = rn(
          f,
          c,
          a,
          o
        );
        if (io(f, p), u === "out-in" && d.type !== Bt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Na(r);
        u === "in-out" && d.type !== Bt ? p.delayLeave = (w, g, _) => {
          const C = _r(
            a,
            f
          );
          C[String(f.key)] = f, w[Ms] = () => {
            g(), w[Ms] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function wr(e) {
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
function _r(e, t) {
  const { leavingVNodes: o } = e;
  let a = o.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(t.type, a)), a;
}
function rn(e, t, o, a, l) {
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
    onLeaveCancelled: C,
    onBeforeAppear: x,
    onAppear: S,
    onAfterAppear: P,
    onAppearCancelled: T
  } = t, E = String(e.key), N = _r(o, e), A = (V, ae) => {
    V && vs(
      V,
      a,
      9,
      ae
    );
  }, H = (V, ae) => {
    const ce = ae[1];
    A(V, ae), Ze(V) ? V.every((ue) => ue.length <= 1) && ce() : V.length <= 1 && ce();
  }, M = {
    mode: c,
    persisted: u,
    beforeEnter(V) {
      let ae = d;
      if (!o.isMounted)
        if (r)
          ae = x || d;
        else
          return;
      V[Ms] && V[Ms](
        !0
        /* cancelled */
      );
      const ce = N[E];
      ce && so(e, ce) && ce.el[Ms] && ce.el[Ms](), A(ae, [V]);
    },
    enter(V) {
      let ae = v, ce = f, ue = p;
      if (!o.isMounted)
        if (r)
          ae = S || v, ce = P || f, ue = T || p;
        else
          return;
      let ke = !1;
      const Z = V[xn] = (B) => {
        ke || (ke = !0, B ? A(ue, [V]) : A(ce, [V]), M.delayedLeave && M.delayedLeave(), V[xn] = void 0);
      };
      ae ? H(ae, [V, Z]) : Z();
    },
    leave(V, ae) {
      const ce = String(e.key);
      if (V[xn] && V[xn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ae();
      A(w, [V]);
      let ue = !1;
      const ke = V[Ms] = (Z) => {
        ue || (ue = !0, ae(), Z ? A(C, [V]) : A(_, [V]), V[Ms] = void 0, N[ce] === e && delete N[ce]);
      };
      N[ce] = e, g ? H(g, [V, ke]) : ke();
    },
    clone(V) {
      const ae = rn(
        V,
        t,
        o,
        a,
        l
      );
      return l && l(ae), ae;
    }
  };
  return M;
}
function Na(e) {
  if (oa(e))
    return e = qs(e), e.children = null, e;
}
function Gl(e) {
  if (!oa(e))
    return fr(e.type) && e.children ? wr(e.children) : e;
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
function _l(e, t = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === j ? (c.patchFlag & 128 && l++, a = a.concat(
      _l(c.children, t, u)
    )) : (t || c.type !== Bt) && a.push(u != null ? qs(c, { key: u }) : c);
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
function kr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vn = /* @__PURE__ */ new WeakMap();
function Yo(e, t, o, a, l = !1) {
  if (Ze(e)) {
    e.forEach(
      (_, C) => Yo(
        _,
        t && (Ze(t) ? t[C] : t),
        o,
        a,
        l
      )
    );
    return;
  }
  if (bo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Yo(e, t, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ra(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, f = u.refs === ht ? u.refs = {} : u.refs, p = u.setupState, w = ut(p), g = p === ht ? Ai : (_) => ft(w, _);
  if (v != null && v !== d) {
    if (jl(t), $t(v))
      f[v] = null, g(v) && (p[v] = null);
    else if (Gt(v)) {
      v.value = null;
      const _ = t;
      _.k && (f[_.k] = null);
    }
  }
  if (et(d))
    vn(d, u, 12, [c, f]);
  else {
    const _ = $t(d), C = Gt(d);
    if (_ || C) {
      const x = () => {
        if (e.f) {
          const S = _ ? g(d) ? p[d] : f[d] : d.value;
          if (l)
            Ze(S) && cl(S, r);
          else if (Ze(S))
            S.includes(r) || S.push(r);
          else if (_)
            f[d] = [r], g(d) && (p[d] = f[d]);
          else {
            const P = [r];
            d.value = P, e.k && (f[e.k] = P);
          }
        } else _ ? (f[d] = c, g(d) && (p[d] = c)) : C && (d.value = c, e.k && (f[e.k] = c));
      };
      if (c) {
        const S = () => {
          x(), Vn.delete(e);
        };
        S.id = -1, Vn.set(e, S), Ht(S, o);
      } else
        jl(e), x();
    }
  }
}
function jl(e) {
  const t = Vn.get(e);
  t && (t.flags |= 8, Vn.delete(e));
}
ea().requestIdleCallback;
ea().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, oa = (e) => e.type.__isKeepAlive;
function Mu(e, t) {
  br(e, "a", t);
}
function Pu(e, t) {
  br(e, "da", t);
}
function br(e, t, o = Wt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (na(t, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      oa(l.parent.vnode) && Ru(a, t, o, l), l = l.parent;
  }
}
function Ru(e, t, o, a) {
  const l = na(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Po(() => {
    cl(a[t], l);
  }, o);
}
function na(e, t, o = Wt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ds();
      const u = pn(o), d = vs(t, o, e, c);
      return u(), Ns(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Us = (e) => (t, o = Wt) => {
  (!dn || e === "sp") && na(e, (...a) => t(...a), o);
}, Lu = Us("bm"), at = Us("m"), Du = Us(
  "bu"
), $r = Us("u"), aa = Us(
  "bum"
), Po = Us("um"), Nu = Us(
  "sp"
), Ou = Us("rtg"), Uu = Us("rtc");
function Au(e, t = Wt) {
  na("ec", e, t);
}
const zu = "components", Cr = Symbol.for("v-ndc");
function kl(e) {
  return $t(e) ? Fu(zu, e, !1) || e : e || Cr;
}
function Fu(e, t, o = !0, a = !1) {
  const l = Ut || Wt;
  if (l) {
    const r = l.type;
    {
      const u = Ed(
        r,
        !1
      );
      if (u && (u === t || u === is(t) || u === Xn(is(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Hl(l[e] || r[e], t) || // global registration
      Hl(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function Hl(e, t) {
  return e && (e[t] || e[is(t)] || e[Xn(is(t))]);
}
function he(e, t, o, a) {
  let l;
  const r = o, c = Ze(e);
  if (c || $t(e)) {
    const u = c && no(e);
    let d = !1, v = !1;
    u && (d = !as(e), v = Os(e), e = ta(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = t(
        d ? v ? Io(fs(e[f])) : fs(e[f]) : e[f],
        f,
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
      for (let d = 0, v = u.length; d < v; d++) {
        const f = u[d];
        l[d] = t(e[f], f, d, r);
      }
    }
  else
    l = [];
  return l;
}
function Qt(e, t) {
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (Ze(a))
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
  if (Ut.ce || Ut.parent && bo(Ut.parent) && Ut.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), n(), L(
      j,
      null,
      [b("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), n();
  const c = r && xr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
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
function xr(e) {
  return e.some((t) => un(t) ? !(t.type === Bt || t.type === j && !xr(t.children)) : !0) ? e : null;
}
const Ja = (e) => e ? Gr(e) ? ra(e) : Ja(e.parent) : null, Xo = (
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
    $parent: (e) => Ja(e.parent),
    $root: (e) => Ja(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Xu.bind(e)
  })
), Oa = (e, t) => e !== ht && !e.__isScriptSetup && ft(e, t), Vu = {
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
        if (Oa(a, t))
          return c[t] = 1, a[t];
        if (l !== ht && ft(l, t))
          return c[t] = 2, l[t];
        if (ft(r, t))
          return c[t] = 3, r[t];
        if (o !== ht && ft(o, t))
          return c[t] = 4, o[t];
        Qa && (c[t] = 0);
      }
    }
    const v = Xo[t];
    let f, p;
    if (v)
      return t === "$attrs" && Ft(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = u.__cssModules) && (f = f[t])
    )
      return f;
    if (o !== ht && ft(o, t))
      return c[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Oa(l, t) ? (l[t] = o, !0) : a !== ht && ft(a, t) ? (a[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== ht && u[0] !== "$" && ft(e, u) || Oa(t, u) || ft(r, u) || ft(a, u) || ft(Xo, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ft(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function ql(e) {
  return Ze(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Qa = !0;
function Bu(e) {
  const t = Ir(e), o = e.proxy, a = e.ctx;
  Qa = !1, t.beforeCreate && Kl(t.beforeCreate, e, "bc");
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
    activated: C,
    deactivated: x,
    beforeDestroy: S,
    beforeUnmount: P,
    destroyed: T,
    unmounted: E,
    render: N,
    renderTracked: A,
    renderTriggered: H,
    errorCaptured: M,
    serverPrefetch: V,
    // public API
    expose: ae,
    inheritAttrs: ce,
    // assets
    components: ue,
    directives: ke,
    filters: Z
  } = t;
  if (v && Wu(v, a, null), c)
    for (const Re in c) {
      const X = c[Re];
      et(X) && (a[Re] = X.bind(o));
    }
  if (l) {
    const Re = l.call(o, o);
    gt(Re) && (e.data = co(Re));
  }
  if (Qa = !0, r)
    for (const Re in r) {
      const X = r[Re], ye = et(X) ? X.bind(o, o) : et(X.get) ? X.get.bind(o, o) : bs, U = !et(X) && et(X.set) ? X.set.bind(o) : bs, fe = R({
        get: ye,
        set: U
      });
      Object.defineProperty(a, Re, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (Le) => fe.value = Le
      });
    }
  if (u)
    for (const Re in u)
      Sr(u[Re], a, o, Re);
  if (d) {
    const Re = et(d) ? d.call(o) : d;
    Reflect.ownKeys(Re).forEach((X) => {
      Ju(X, Re[X]);
    });
  }
  f && Kl(f, e, "c");
  function K(Re, X) {
    Ze(X) ? X.forEach((ye) => Re(ye.bind(o))) : X && Re(X.bind(o));
  }
  if (K(Lu, p), K(at, w), K(Du, g), K($r, _), K(Mu, C), K(Pu, x), K(Au, M), K(Uu, A), K(Ou, H), K(aa, P), K(Po, E), K(Nu, V), Ze(ae))
    if (ae.length) {
      const Re = e.exposed || (e.exposed = {});
      ae.forEach((X) => {
        Object.defineProperty(Re, X, {
          get: () => o[X],
          set: (ye) => o[X] = ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === bs && (e.render = N), ce != null && (e.inheritAttrs = ce), ue && (e.components = ue), ke && (e.directives = ke), V && kr(e);
}
function Wu(e, t, o = bs) {
  Ze(e) && (e = Ya(e));
  for (const a in e) {
    const l = e[a];
    let r;
    gt(l) ? "default" in l ? r = Mn(
      l.from || a,
      l.default,
      !0
    ) : r = Mn(l.from || a) : r = Mn(l), Gt(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function Kl(e, t, o) {
  vs(
    Ze(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Sr(e, t, o, a) {
  let l = a.includes(".") ? Mr(o, a) : () => o[a];
  if ($t(e)) {
    const r = t[e];
    et(r) && yt(l, r);
  } else if (et(e))
    yt(l, e.bind(o));
  else if (gt(e))
    if (Ze(e))
      e.forEach((r) => Sr(r, t, o, a));
    else {
      const r = et(e.handler) ? e.handler.bind(o) : t[e.handler];
      et(r) && yt(l, r, e);
    }
}
function Ir(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = t : (d = {}, l.length && l.forEach(
    (v) => Bn(d, v, c, !0)
  ), Bn(d, t, c)), gt(t) && r.set(t, d), d;
}
function Bn(e, t, o, a = !1) {
  const { mixins: l, extends: r } = t;
  r && Bn(e, r, o, !0), l && l.forEach(
    (c) => Bn(e, c, o, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
      const u = Gu[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Gu = {
  data: Jl,
  props: Ql,
  emits: Ql,
  // objects
  methods: jo,
  computed: jo,
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
  components: jo,
  directives: jo,
  // watch
  watch: Hu,
  // provide / inject
  provide: Jl,
  inject: ju
};
function Jl(e, t) {
  return t ? e ? function() {
    return Mt(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ju(e, t) {
  return jo(Ya(e), Ya(t));
}
function Ya(e) {
  if (Ze(e)) {
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
function jo(e, t) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ql(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    ql(e),
    ql(t ?? {})
  ) : t;
}
function Hu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    o[a] = jt(e[a], t[a]);
  return o;
}
function Er() {
  return {
    app: null,
    config: {
      isNativeTag: Ai,
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
  return function(a, l = null) {
    et(a) || (a = Mt({}, a)), l != null && !gt(l) && (l = null);
    const r = Er(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: qu++,
      _component: a,
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
        return c.has(f) || (f && et(f.install) ? (c.add(f), f.install(v, ...p)) : et(f) && (c.add(f), f(v, ...p))), v;
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
          const g = v._ceVNode || b(a, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, f, w), d = !0, v._container = f, f.__vue_app__ = v, ra(g.component);
        }
      },
      onUnmount(f) {
        u.push(f);
      },
      unmount() {
        d && (vs(
          u,
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
    const a = Wt.parent && Wt.parent.provides;
    a === o && (o = Wt.provides = Object.create(a)), o[e] = t;
  }
}
function Mn(e, t, o = !1) {
  const a = Sl();
  if (a || $o) {
    let l = $o ? $o._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && et(t) ? t.call(a && a.proxy) : t;
  }
}
const Qu = Symbol.for("v-scx"), Yu = () => Mn(Qu);
function yt(e, t, o) {
  return Tr(e, t, o);
}
function Tr(e, t, o = ht) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = t && a || !t && r !== "post";
  let v;
  if (dn) {
    if (r === "sync") {
      const g = Yu();
      v = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = bs, g.resume = bs, g.pause = bs, g;
    }
  }
  const f = Wt;
  u.call = (g, _, C) => vs(g, f, _, C);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    Ht(g, f && f.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, _) => {
    _ ? g() : wl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const w = $u(e, t, u);
  return dn && (v ? v.push(w) : d && w()), w;
}
function Xu(e, t, o) {
  const a = this.proxy, l = $t(e) ? e.includes(".") ? Mr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  et(t) ? r = t : (r = t.handler, o = t);
  const c = pn(this), u = Tr(l, r.bind(a), o);
  return c(), u;
}
function Mr(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Zu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${is(t)}Modifiers`] || e[`${Js(t)}Modifiers`];
function ed(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ht;
  let l = o;
  const r = t.startsWith("update:"), c = r && Zu(a, t.slice(7));
  c && (c.trim && (l = o.map((f) => $t(f) ? f.trim() : f)), c.number && (l = o.map(Zn)));
  let u, d = a[u = Ma(t)] || // also try camelCase event handler (#2249)
  a[u = Ma(is(t))];
  !d && r && (d = a[u = Ma(Js(t))]), d && vs(
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
    e.emitted[u] = !0, vs(
      v,
      e,
      6,
      l
    );
  }
}
const td = /* @__PURE__ */ new WeakMap();
function Pr(e, t, o = !1) {
  const a = o ? td : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!et(e)) {
    const d = (v) => {
      const f = Pr(v, t, !0);
      f && (u = !0, Mt(c, f));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (gt(e) && a.set(e, null), null) : (Ze(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), gt(e) && a.set(e, c), c);
}
function la(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Js(t)) || ft(e, t));
}
function Yl(e) {
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
    inheritAttrs: C
  } = e, x = Fn(e);
  let S, P;
  try {
    if (o.shapeFlag & 4) {
      const E = l || a, N = E;
      S = _s(
        v.call(
          N,
          E,
          f,
          p,
          g,
          w,
          _
        )
      ), P = u;
    } else {
      const E = t;
      S = _s(
        E.length > 1 ? E(
          p,
          { attrs: u, slots: c, emit: d }
        ) : E(
          p,
          null
        )
      ), P = t.props ? u : sd(u);
    }
  } catch (E) {
    Zo.length = 0, sa(E, e, 1), S = b(Bt);
  }
  let T = S;
  if (P && C !== !1) {
    const E = Object.keys(P), { shapeFlag: N } = T;
    E.length && N & 7 && (r && E.some(rl) && (P = od(
      P,
      r
    )), T = qs(T, P, !1, !0));
  }
  return o.dirs && (T = qs(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && io(T, o.transition), S = T, Fn(x), S;
}
const sd = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Qn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, od = (e, t) => {
  const o = {};
  for (const a in e)
    (!rl(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
};
function nd(e, t, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Xl(a, c, v) : !!c;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== a[w] && !la(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Xl(a, c, v) : !0 : !!c;
  return !1;
}
function Xl(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !la(o, r))
      return !0;
  }
  return !1;
}
function ad({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Rr = {}, Lr = () => Object.create(Rr), Dr = (e) => Object.getPrototypeOf(e) === Rr;
function ld(e, t, o, a = !1) {
  const l = {}, r = Lr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Nr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : pu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function id(e, t, o, a) {
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
        if (la(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (ft(r, w))
            g !== r[w] && (r[w] = g, v = !0);
          else {
            const _ = is(w);
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
    Nr(e, t, l, r) && (v = !0);
    let f;
    for (const p in u)
      (!t || // for camelCase
      !ft(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Js(p)) === p || !ft(t, f))) && (d ? o && // for camelCase
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
  v && Ps(e.attrs, "set", "");
}
function Nr(e, t, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (qo(d))
        continue;
      const v = t[d];
      let f;
      l && ft(l, f = is(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : la(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, c = !0);
    }
  if (r) {
    const d = ut(o), v = u || ht;
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
      if (c.type !== Function && !c.skipFactory && et(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          a = v[o];
        else {
          const f = pn(l);
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
    ] && (a === "" || a === Js(o)) && (a = !0));
  }
  return a;
}
const rd = /* @__PURE__ */ new WeakMap();
function Or(e, t, o = !1) {
  const a = o ? rd : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!et(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Or(p, t, !0);
      Mt(c, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return gt(e) && a.set(e, wo), wo;
  if (Ze(r))
    for (let f = 0; f < r.length; f++) {
      const p = is(r[f]);
      Zl(p) && (c[p] = ht);
    }
  else if (r)
    for (const f in r) {
      const p = is(f);
      if (Zl(p)) {
        const w = r[f], g = c[p] = Ze(w) || et(w) ? { type: w } : Mt({}, w), _ = g.type;
        let C = !1, x = !0;
        if (Ze(_))
          for (let S = 0; S < _.length; ++S) {
            const P = _[S], T = et(P) && P.name;
            if (T === "Boolean") {
              C = !0;
              break;
            } else T === "String" && (x = !1);
          }
        else
          C = et(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = C, g[
          1
          /* shouldCastTrue */
        ] = x, (C || ft(g, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return gt(e) && a.set(e, v), v;
}
function Zl(e) {
  return e[0] !== "$" && !qo(e);
}
const bl = (e) => e === "_" || e === "_ctx" || e === "$stable", $l = (e) => Ze(e) ? e.map(_s) : [_s(e)], cd = (e, t, o) => {
  if (t._n)
    return t;
  const a = h((...l) => $l(t(...l)), o);
  return a._c = !1, a;
}, Ur = (e, t, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (bl(l)) continue;
    const r = e[l];
    if (et(r))
      t[l] = cd(l, r, a);
    else if (r != null) {
      const c = $l(r);
      t[l] = () => c;
    }
  }
}, Ar = (e, t) => {
  const o = $l(t);
  e.slots.default = () => o;
}, zr = (e, t, o) => {
  for (const a in t)
    (o || !bl(a)) && (e[a] = t[a]);
}, ud = (e, t, o) => {
  const a = e.slots = Lr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (zr(a, t, o), o && Bi(a, "_", l, !0)) : Ur(t, a);
  } else t && Ar(e, t);
}, dd = (e, t, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = ht;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : zr(l, t, o) : (r = !t.$stable, Ur(t, l)), c = t;
  } else t && (Ar(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !bl(u) && c[u] == null && delete l[u];
}, Ht = gd;
function md(e) {
  return fd(e);
}
function fd(e, t) {
  const o = ea();
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
    setScopeId: g = bs,
    insertStaticContent: _
  } = e, C = (I, F, ie, Ie = null, $e = null, Se = null, Ae = void 0, Fe = null, Ne = !!F.dynamicChildren) => {
    if (I === F)
      return;
    I && !so(I, F) && (Ie = te(I), Le(I, $e, Se, !0), I = null), F.patchFlag === -2 && (Ne = !1, F.dynamicChildren = null);
    const { type: Ee, ref: Ke, shapeFlag: Be } = F;
    switch (Ee) {
      case ia:
        x(I, F, ie, Ie);
        break;
      case Bt:
        S(I, F, ie, Ie);
        break;
      case Aa:
        I == null && P(F, ie, Ie, Ae);
        break;
      case j:
        ue(
          I,
          F,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          Ne
        );
        break;
      default:
        Be & 1 ? N(
          I,
          F,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          Ne
        ) : Be & 6 ? ke(
          I,
          F,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          Ne
        ) : (Be & 64 || Be & 128) && Ee.process(
          I,
          F,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          Ne,
          me
        );
    }
    Ke != null && $e ? Yo(Ke, I && I.ref, Se, F || I, !F) : Ke == null && I && I.ref != null && Yo(I.ref, null, Se, I, !0);
  }, x = (I, F, ie, Ie) => {
    if (I == null)
      a(
        F.el = u(F.children),
        ie,
        Ie
      );
    else {
      const $e = F.el = I.el;
      F.children !== I.children && v($e, F.children);
    }
  }, S = (I, F, ie, Ie) => {
    I == null ? a(
      F.el = d(F.children || ""),
      ie,
      Ie
    ) : F.el = I.el;
  }, P = (I, F, ie, Ie) => {
    [I.el, I.anchor] = _(
      I.children,
      F,
      ie,
      Ie,
      I.el,
      I.anchor
    );
  }, T = ({ el: I, anchor: F }, ie, Ie) => {
    let $e;
    for (; I && I !== F; )
      $e = w(I), a(I, ie, Ie), I = $e;
    a(F, ie, Ie);
  }, E = ({ el: I, anchor: F }) => {
    let ie;
    for (; I && I !== F; )
      ie = w(I), l(I), I = ie;
    l(F);
  }, N = (I, F, ie, Ie, $e, Se, Ae, Fe, Ne) => {
    if (F.type === "svg" ? Ae = "svg" : F.type === "math" && (Ae = "mathml"), I == null)
      A(
        F,
        ie,
        Ie,
        $e,
        Se,
        Ae,
        Fe,
        Ne
      );
    else {
      const Ee = I.el && I.el._isVueCE ? I.el : null;
      try {
        Ee && Ee._beginPatch(), V(
          I,
          F,
          $e,
          Se,
          Ae,
          Fe,
          Ne
        );
      } finally {
        Ee && Ee._endPatch();
      }
    }
  }, A = (I, F, ie, Ie, $e, Se, Ae, Fe) => {
    let Ne, Ee;
    const { props: Ke, shapeFlag: Be, transition: pe, dirs: J } = I;
    if (Ne = I.el = c(
      I.type,
      Se,
      Ke && Ke.is,
      Ke
    ), Be & 8 ? f(Ne, I.children) : Be & 16 && M(
      I.children,
      Ne,
      null,
      Ie,
      $e,
      Ua(I, Se),
      Ae,
      Fe
    ), J && Ys(I, null, Ie, "created"), H(Ne, I, I.scopeId, Ae, Ie), Ke) {
      for (const Ce in Ke)
        Ce !== "value" && !qo(Ce) && r(Ne, Ce, null, Ke[Ce], Se, Ie);
      "value" in Ke && r(Ne, "value", null, Ke.value, Se), (Ee = Ke.onVnodeBeforeMount) && ps(Ee, Ie, I);
    }
    J && Ys(I, null, Ie, "beforeMount");
    const He = vd($e, pe);
    He && pe.beforeEnter(Ne), a(Ne, F, ie), ((Ee = Ke && Ke.onVnodeMounted) || He || J) && Ht(() => {
      Ee && ps(Ee, Ie, I), He && pe.enter(Ne), J && Ys(I, null, Ie, "mounted");
    }, $e);
  }, H = (I, F, ie, Ie, $e) => {
    if (ie && g(I, ie), Ie)
      for (let Se = 0; Se < Ie.length; Se++)
        g(I, Ie[Se]);
    if ($e) {
      let Se = $e.subTree;
      if (F === Se || Vr(Se.type) && (Se.ssContent === F || Se.ssFallback === F)) {
        const Ae = $e.vnode;
        H(
          I,
          Ae,
          Ae.scopeId,
          Ae.slotScopeIds,
          $e.parent
        );
      }
    }
  }, M = (I, F, ie, Ie, $e, Se, Ae, Fe, Ne = 0) => {
    for (let Ee = Ne; Ee < I.length; Ee++) {
      const Ke = I[Ee] = Fe ? js(I[Ee]) : _s(I[Ee]);
      C(
        null,
        Ke,
        F,
        ie,
        Ie,
        $e,
        Se,
        Ae,
        Fe
      );
    }
  }, V = (I, F, ie, Ie, $e, Se, Ae) => {
    const Fe = F.el = I.el;
    let { patchFlag: Ne, dynamicChildren: Ee, dirs: Ke } = F;
    Ne |= I.patchFlag & 16;
    const Be = I.props || ht, pe = F.props || ht;
    let J;
    if (ie && Xs(ie, !1), (J = pe.onVnodeBeforeUpdate) && ps(J, ie, F, I), Ke && Ys(F, I, ie, "beforeUpdate"), ie && Xs(ie, !0), (Be.innerHTML && pe.innerHTML == null || Be.textContent && pe.textContent == null) && f(Fe, ""), Ee ? ae(
      I.dynamicChildren,
      Ee,
      Fe,
      ie,
      Ie,
      Ua(F, $e),
      Se
    ) : Ae || X(
      I,
      F,
      Fe,
      null,
      ie,
      Ie,
      Ua(F, $e),
      Se,
      !1
    ), Ne > 0) {
      if (Ne & 16)
        ce(Fe, Be, pe, ie, $e);
      else if (Ne & 2 && Be.class !== pe.class && r(Fe, "class", null, pe.class, $e), Ne & 4 && r(Fe, "style", Be.style, pe.style, $e), Ne & 8) {
        const He = F.dynamicProps;
        for (let Ce = 0; Ce < He.length; Ce++) {
          const Ye = He[Ce], ot = Be[Ye], ze = pe[Ye];
          (ze !== ot || Ye === "value") && r(Fe, Ye, ot, ze, $e, ie);
        }
      }
      Ne & 1 && I.children !== F.children && f(Fe, F.children);
    } else !Ae && Ee == null && ce(Fe, Be, pe, ie, $e);
    ((J = pe.onVnodeUpdated) || Ke) && Ht(() => {
      J && ps(J, ie, F, I), Ke && Ys(F, I, ie, "updated");
    }, Ie);
  }, ae = (I, F, ie, Ie, $e, Se, Ae) => {
    for (let Fe = 0; Fe < F.length; Fe++) {
      const Ne = I[Fe], Ee = F[Fe], Ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Ne.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(Ne, Ee) || // - In the case of a component, it could contain anything.
        Ne.shapeFlag & 198) ? p(Ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ie
        )
      );
      C(
        Ne,
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
  }, ce = (I, F, ie, Ie, $e) => {
    if (F !== ie) {
      if (F !== ht)
        for (const Se in F)
          !qo(Se) && !(Se in ie) && r(
            I,
            Se,
            F[Se],
            null,
            $e,
            Ie
          );
      for (const Se in ie) {
        if (qo(Se)) continue;
        const Ae = ie[Se], Fe = F[Se];
        Ae !== Fe && Se !== "value" && r(I, Se, Fe, Ae, $e, Ie);
      }
      "value" in ie && r(I, "value", F.value, ie.value, $e);
    }
  }, ue = (I, F, ie, Ie, $e, Se, Ae, Fe, Ne) => {
    const Ee = F.el = I ? I.el : u(""), Ke = F.anchor = I ? I.anchor : u("");
    let { patchFlag: Be, dynamicChildren: pe, slotScopeIds: J } = F;
    J && (Fe = Fe ? Fe.concat(J) : J), I == null ? (a(Ee, ie, Ie), a(Ke, ie, Ie), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      F.children || [],
      ie,
      Ke,
      $e,
      Se,
      Ae,
      Fe,
      Ne
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
    (F.key != null || $e && F === $e.subTree) && Cl(
      I,
      F,
      !0
      /* shallow */
    )) : X(
      I,
      F,
      ie,
      Ke,
      $e,
      Se,
      Ae,
      Fe,
      Ne
    );
  }, ke = (I, F, ie, Ie, $e, Se, Ae, Fe, Ne) => {
    F.slotScopeIds = Fe, I == null ? F.shapeFlag & 512 ? $e.ctx.activate(
      F,
      ie,
      Ie,
      Ae,
      Ne
    ) : Z(
      F,
      ie,
      Ie,
      $e,
      Se,
      Ae,
      Ne
    ) : B(I, F, Ne);
  }, Z = (I, F, ie, Ie, $e, Se, Ae) => {
    const Fe = I.component = $d(
      I,
      Ie,
      $e
    );
    if (oa(I) && (Fe.ctx.renderer = me), Cd(Fe, !1, Ae), Fe.asyncDep) {
      if ($e && $e.registerDep(Fe, K, Ae), !I.el) {
        const Ne = Fe.subTree = b(Bt);
        S(null, Ne, F, ie), I.placeholder = Ne.el;
      }
    } else
      K(
        Fe,
        I,
        F,
        ie,
        $e,
        Se,
        Ae
      );
  }, B = (I, F, ie) => {
    const Ie = F.component = I.component;
    if (nd(I, F, ie))
      if (Ie.asyncDep && !Ie.asyncResolved) {
        Re(Ie, F, ie);
        return;
      } else
        Ie.next = F, Ie.update();
    else
      F.el = I.el, Ie.vnode = F;
  }, K = (I, F, ie, Ie, $e, Se, Ae) => {
    const Fe = () => {
      if (I.isMounted) {
        let { next: Be, bu: pe, u: J, parent: He, vnode: Ce } = I;
        {
          const se = Fr(I);
          if (se) {
            Be && (Be.el = Ce.el, Re(I, Be, Ae)), se.asyncDep.then(() => {
              I.isUnmounted || Fe();
            });
            return;
          }
        }
        let Ye = Be, ot;
        Xs(I, !1), Be ? (Be.el = Ce.el, Re(I, Be, Ae)) : Be = Ce, pe && En(pe), (ot = Be.props && Be.props.onVnodeBeforeUpdate) && ps(ot, He, Be, Ce), Xs(I, !0);
        const ze = Yl(I), O = I.subTree;
        I.subTree = ze, C(
          O,
          ze,
          // parent may have changed if it's in a teleport
          p(O.el),
          // anchor may have changed if it's in a fragment
          te(O),
          I,
          $e,
          Se
        ), Be.el = ze.el, Ye === null && ad(I, ze.el), J && Ht(J, $e), (ot = Be.props && Be.props.onVnodeUpdated) && Ht(
          () => ps(ot, He, Be, Ce),
          $e
        );
      } else {
        let Be;
        const { el: pe, props: J } = F, { bm: He, m: Ce, parent: Ye, root: ot, type: ze } = I, O = bo(F);
        Xs(I, !1), He && En(He), !O && (Be = J && J.onVnodeBeforeMount) && ps(Be, Ye, F), Xs(I, !0);
        {
          ot.ce && // @ts-expect-error _def is private
          ot.ce._def.shadowRoot !== !1 && ot.ce._injectChildStyle(ze);
          const se = I.subTree = Yl(I);
          C(
            null,
            se,
            ie,
            Ie,
            I,
            $e,
            Se
          ), F.el = se.el;
        }
        if (Ce && Ht(Ce, $e), !O && (Be = J && J.onVnodeMounted)) {
          const se = F;
          Ht(
            () => ps(Be, Ye, se),
            $e
          );
        }
        (F.shapeFlag & 256 || Ye && bo(Ye.vnode) && Ye.vnode.shapeFlag & 256) && I.a && Ht(I.a, $e), I.isMounted = !0, F = ie = Ie = null;
      }
    };
    I.scope.on();
    const Ne = I.effect = new Hi(Fe);
    I.scope.off();
    const Ee = I.update = Ne.run.bind(Ne), Ke = I.job = Ne.runIfDirty.bind(Ne);
    Ke.i = I, Ke.id = I.uid, Ne.scheduler = () => wl(Ke), Xs(I, !0), Ee();
  }, Re = (I, F, ie) => {
    F.component = I;
    const Ie = I.vnode.props;
    I.vnode = F, I.next = null, id(I, F.props, Ie, ie), dd(I, F.children, ie), Ds(), Fl(I), Ns();
  }, X = (I, F, ie, Ie, $e, Se, Ae, Fe, Ne = !1) => {
    const Ee = I && I.children, Ke = I ? I.shapeFlag : 0, Be = F.children, { patchFlag: pe, shapeFlag: J } = F;
    if (pe > 0) {
      if (pe & 128) {
        U(
          Ee,
          Be,
          ie,
          Ie,
          $e,
          Se,
          Ae,
          Fe,
          Ne
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
          Ne
        );
        return;
      }
    }
    J & 8 ? (Ke & 16 && we(Ee, $e, Se), Be !== Ee && f(ie, Be)) : Ke & 16 ? J & 16 ? U(
      Ee,
      Be,
      ie,
      Ie,
      $e,
      Se,
      Ae,
      Fe,
      Ne
    ) : we(Ee, $e, Se, !0) : (Ke & 8 && f(ie, ""), J & 16 && M(
      Be,
      ie,
      Ie,
      $e,
      Se,
      Ae,
      Fe,
      Ne
    ));
  }, ye = (I, F, ie, Ie, $e, Se, Ae, Fe, Ne) => {
    I = I || wo, F = F || wo;
    const Ee = I.length, Ke = F.length, Be = Math.min(Ee, Ke);
    let pe;
    for (pe = 0; pe < Be; pe++) {
      const J = F[pe] = Ne ? js(F[pe]) : _s(F[pe]);
      C(
        I[pe],
        J,
        ie,
        null,
        $e,
        Se,
        Ae,
        Fe,
        Ne
      );
    }
    Ee > Ke ? we(
      I,
      $e,
      Se,
      !0,
      !1,
      Be
    ) : M(
      F,
      ie,
      Ie,
      $e,
      Se,
      Ae,
      Fe,
      Ne,
      Be
    );
  }, U = (I, F, ie, Ie, $e, Se, Ae, Fe, Ne) => {
    let Ee = 0;
    const Ke = F.length;
    let Be = I.length - 1, pe = Ke - 1;
    for (; Ee <= Be && Ee <= pe; ) {
      const J = I[Ee], He = F[Ee] = Ne ? js(F[Ee]) : _s(F[Ee]);
      if (so(J, He))
        C(
          J,
          He,
          ie,
          null,
          $e,
          Se,
          Ae,
          Fe,
          Ne
        );
      else
        break;
      Ee++;
    }
    for (; Ee <= Be && Ee <= pe; ) {
      const J = I[Be], He = F[pe] = Ne ? js(F[pe]) : _s(F[pe]);
      if (so(J, He))
        C(
          J,
          He,
          ie,
          null,
          $e,
          Se,
          Ae,
          Fe,
          Ne
        );
      else
        break;
      Be--, pe--;
    }
    if (Ee > Be) {
      if (Ee <= pe) {
        const J = pe + 1, He = J < Ke ? F[J].el : Ie;
        for (; Ee <= pe; )
          C(
            null,
            F[Ee] = Ne ? js(F[Ee]) : _s(F[Ee]),
            ie,
            He,
            $e,
            Se,
            Ae,
            Fe,
            Ne
          ), Ee++;
      }
    } else if (Ee > pe)
      for (; Ee <= Be; )
        Le(I[Ee], $e, Se, !0), Ee++;
    else {
      const J = Ee, He = Ee, Ce = /* @__PURE__ */ new Map();
      for (Ee = He; Ee <= pe; Ee++) {
        const D = F[Ee] = Ne ? js(F[Ee]) : _s(F[Ee]);
        D.key != null && Ce.set(D.key, Ee);
      }
      let Ye, ot = 0;
      const ze = pe - He + 1;
      let O = !1, se = 0;
      const ge = new Array(ze);
      for (Ee = 0; Ee < ze; Ee++) ge[Ee] = 0;
      for (Ee = J; Ee <= Be; Ee++) {
        const D = I[Ee];
        if (ot >= ze) {
          Le(D, $e, Se, !0);
          continue;
        }
        let z;
        if (D.key != null)
          z = Ce.get(D.key);
        else
          for (Ye = He; Ye <= pe; Ye++)
            if (ge[Ye - He] === 0 && so(D, F[Ye])) {
              z = Ye;
              break;
            }
        z === void 0 ? Le(D, $e, Se, !0) : (ge[z - He] = Ee + 1, z >= se ? se = z : O = !0, C(
          D,
          F[z],
          ie,
          null,
          $e,
          Se,
          Ae,
          Fe,
          Ne
        ), ot++);
      }
      const Je = O ? pd(ge) : wo;
      for (Ye = Je.length - 1, Ee = ze - 1; Ee >= 0; Ee--) {
        const D = He + Ee, z = F[D], Y = F[D + 1], Oe = D + 1 < Ke ? (
          // #13559, fallback to el placeholder for unresolved async component
          Y.el || Y.placeholder
        ) : Ie;
        ge[Ee] === 0 ? C(
          null,
          z,
          ie,
          Oe,
          $e,
          Se,
          Ae,
          Fe,
          Ne
        ) : O && (Ye < 0 || Ee !== Je[Ye] ? fe(z, ie, Oe, 2) : Ye--);
      }
    }
  }, fe = (I, F, ie, Ie, $e = null) => {
    const { el: Se, type: Ae, transition: Fe, children: Ne, shapeFlag: Ee } = I;
    if (Ee & 6) {
      fe(I.component.subTree, F, ie, Ie);
      return;
    }
    if (Ee & 128) {
      I.suspense.move(F, ie, Ie);
      return;
    }
    if (Ee & 64) {
      Ae.move(I, F, ie, me);
      return;
    }
    if (Ae === j) {
      a(Se, F, ie);
      for (let Be = 0; Be < Ne.length; Be++)
        fe(Ne[Be], F, ie, Ie);
      a(I.anchor, F, ie);
      return;
    }
    if (Ae === Aa) {
      T(I, F, ie);
      return;
    }
    if (Ie !== 2 && Ee & 1 && Fe)
      if (Ie === 0)
        Fe.beforeEnter(Se), a(Se, F, ie), Ht(() => Fe.enter(Se), $e);
      else {
        const { leave: Be, delayLeave: pe, afterLeave: J } = Fe, He = () => {
          I.ctx.isUnmounted ? l(Se) : a(Se, F, ie);
        }, Ce = () => {
          Se._isLeaving && Se[Ms](
            !0
            /* cancelled */
          ), Be(Se, () => {
            He(), J && J();
          });
        };
        pe ? pe(Se, He, Ce) : Ce();
      }
    else
      a(Se, F, ie);
  }, Le = (I, F, ie, Ie = !1, $e = !1) => {
    const {
      type: Se,
      props: Ae,
      ref: Fe,
      children: Ne,
      dynamicChildren: Ee,
      shapeFlag: Ke,
      patchFlag: Be,
      dirs: pe,
      cacheIndex: J
    } = I;
    if (Be === -2 && ($e = !1), Fe != null && (Ds(), Yo(Fe, null, ie, I, !0), Ns()), J != null && (F.renderCache[J] = void 0), Ke & 256) {
      F.ctx.deactivate(I);
      return;
    }
    const He = Ke & 1 && pe, Ce = !bo(I);
    let Ye;
    if (Ce && (Ye = Ae && Ae.onVnodeBeforeUnmount) && ps(Ye, F, I), Ke & 6)
      Q(I.component, ie, Ie);
    else {
      if (Ke & 128) {
        I.suspense.unmount(ie, Ie);
        return;
      }
      He && Ys(I, null, F, "beforeUnmount"), Ke & 64 ? I.type.remove(
        I,
        F,
        ie,
        me,
        Ie
      ) : Ee && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ee.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Se !== j || Be > 0 && Be & 64) ? we(
        Ee,
        F,
        ie,
        !1,
        !0
      ) : (Se === j && Be & 384 || !$e && Ke & 16) && we(Ne, F, ie), Ie && ve(I);
    }
    (Ce && (Ye = Ae && Ae.onVnodeUnmounted) || He) && Ht(() => {
      Ye && ps(Ye, F, I), He && Ys(I, null, F, "unmounted");
    }, ie);
  }, ve = (I) => {
    const { type: F, el: ie, anchor: Ie, transition: $e } = I;
    if (F === j) {
      ee(ie, Ie);
      return;
    }
    if (F === Aa) {
      E(I);
      return;
    }
    const Se = () => {
      l(ie), $e && !$e.persisted && $e.afterLeave && $e.afterLeave();
    };
    if (I.shapeFlag & 1 && $e && !$e.persisted) {
      const { leave: Ae, delayLeave: Fe } = $e, Ne = () => Ae(ie, Se);
      Fe ? Fe(I.el, Se, Ne) : Ne();
    } else
      Se();
  }, ee = (I, F) => {
    let ie;
    for (; I !== F; )
      ie = w(I), l(I), I = ie;
    l(F);
  }, Q = (I, F, ie) => {
    const { bum: Ie, scope: $e, job: Se, subTree: Ae, um: Fe, m: Ne, a: Ee } = I;
    ei(Ne), ei(Ee), Ie && En(Ie), $e.stop(), Se && (Se.flags |= 8, Le(Ae, I, F, ie)), Fe && Ht(Fe, F), Ht(() => {
      I.isUnmounted = !0;
    }, F);
  }, we = (I, F, ie, Ie = !1, $e = !1, Se = 0) => {
    for (let Ae = Se; Ae < I.length; Ae++)
      Le(I[Ae], F, ie, Ie, $e);
  }, te = (I) => {
    if (I.shapeFlag & 6)
      return te(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const F = w(I.anchor || I.el), ie = F && F[mr];
    return ie ? w(ie) : F;
  };
  let oe = !1;
  const Me = (I, F, ie) => {
    I == null ? F._vnode && Le(F._vnode, null, null, !0) : C(
      F._vnode || null,
      I,
      F,
      null,
      null,
      null,
      ie
    ), F._vnode = I, oe || (oe = !0, Fl(), cr(), oe = !1);
  }, me = {
    p: C,
    um: Le,
    m: fe,
    r: ve,
    mt: Z,
    mc: M,
    pc: X,
    pbc: ae,
    n: te,
    o: e
  };
  return {
    render: Me,
    hydrate: void 0,
    createApp: Ku(Me)
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
  const a = e.children, l = t.children;
  if (Ze(a) && Ze(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = js(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && Cl(c, u)), u.type === ia && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Bt && !u.el && (u.el = c.el);
    }
}
function pd(e) {
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
function Fr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fr(t);
}
function ei(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Vr = (e) => e.__isSuspense;
function gd(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : Su(e);
}
const j = Symbol.for("v-fgt"), ia = Symbol.for("v-txt"), Bt = Symbol.for("v-cmt"), Aa = Symbol.for("v-stc"), Zo = [];
let es = null;
function n(e = !1) {
  Zo.push(es = e ? null : []);
}
function hd() {
  Zo.pop(), es = Zo[Zo.length - 1] || null;
}
let cn = 1;
function Wn(e, t = !1) {
  cn += e, e < 0 && es && t && (es.hasOnce = !0);
}
function Br(e) {
  return e.dynamicChildren = cn > 0 ? es || wo : null, hd(), cn > 0 && es && es.push(e), e;
}
function i(e, t, o, a, l, r) {
  return Br(
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
  return Br(
    b(
      e,
      t,
      o,
      a,
      l,
      !0
    )
  );
}
function un(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wr = ({ key: e }) => e ?? null, Pn = ({
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
    key: t && Wr(t),
    ref: t && Pn(t),
    scopeId: dr,
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
  return u ? (xl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), cn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const b = yd;
function yd(e, t = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === Cr) && (e = Bt), un(e)) {
    const u = qs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && xl(u, o), cn > 0 && !r && es && (u.shapeFlag & 6 ? es[es.indexOf(e)] = u : es.push(u)), u.patchFlag = -2, u;
  }
  if (Td(e) && (e = e.__vccOpts), t) {
    t = wd(t);
    let { class: u, style: d } = t;
    u && !$t(u) && (t.class = Ve(u)), gt(d) && (yl(d) && !Ze(d) && (d = Mt({}, d)), t.style = Rt(d));
  }
  const c = $t(e) ? 1 : Vr(e) ? 128 : fr(e) ? 64 : gt(e) ? 4 : et(e) ? 2 : 0;
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
function wd(e) {
  return e ? yl(e) || Dr(e) ? Mt({}, e) : e : null;
}
function qs(e, t, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? _d(l || {}, t) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Wr(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ze(r) ? r.concat(Pn(t)) : [r, Pn(t)] : Pn(t)
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
    ssContent: e.ssContent && qs(e.ssContent),
    ssFallback: e.ssFallback && qs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && io(
    f,
    d.clone(f)
  ), f;
}
function $(e = " ", t = 0) {
  return b(ia, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (n(), L(Bt, null, e)) : b(Bt, null, e);
}
function _s(e) {
  return e == null || typeof e == "boolean" ? b(Bt) : Ze(e) ? b(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : un(e) ? js(e) : b(ia, null, String(e));
}
function js(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qs(e);
}
function xl(e, t) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    o = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), xl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Dr(t) ? t._ctx = Ut : l === 3 && Ut && (Ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Ut }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [$(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function _d(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Ve([t.class, a.class]));
      else if (l === "style")
        t.style = Rt([t.style, a.style]);
      else if (Qn(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(Ze(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function ps(e, t, o, a = null) {
  vs(e, t, 7, [
    o,
    a
  ]);
}
const kd = Er();
let bd = 0;
function $d(e, t, o) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || kd, r = {
    uid: bd++,
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
    propsOptions: Or(a, l),
    emitsOptions: Pr(a, l),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ed.bind(null, r), e.ce && e.ce(r), r;
}
let Wt = null;
const Sl = () => Wt || Ut;
let Gn, Za;
{
  const e = ea(), t = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Gn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Wt = o
  ), Za = t(
    "__VUE_SSR_SETTERS__",
    (o) => dn = o
  );
}
const pn = (e) => {
  const t = Wt;
  return Gn(e), e.scope.on(), () => {
    e.scope.off(), Gn(t);
  };
}, ti = () => {
  Wt && Wt.scope.off(), Gn(null);
};
function Gr(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function Cd(e, t = !1, o = !1) {
  t && Za(t);
  const { props: a, children: l } = e.vnode, r = Gr(e);
  ld(e, a, r, t), ud(e, l, o || t);
  const c = r ? xd(e, t) : void 0;
  return t && Za(!1), c;
}
function xd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vu);
  const { setup: a } = o;
  if (a) {
    Ds();
    const l = e.setupContext = a.length > 1 ? Id(e) : null, r = pn(e), c = vn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = zi(c);
    if (Ns(), r(), (u || e.sp) && !bo(e) && kr(e), u) {
      if (c.then(ti, ti), t)
        return c.then((d) => {
          si(e, d);
        }).catch((d) => {
          sa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      si(e, c);
  } else
    jr(e);
}
function si(e, t, o) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : gt(t) && (e.setupState = lr(t)), jr(e);
}
function jr(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || bs);
  {
    const l = pn(e);
    Ds();
    try {
      Bu(e);
    } finally {
      Ns(), l();
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
function ra(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lr(gu(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Xo)
        return Xo[o](e);
    },
    has(t, o) {
      return o in t || o in Xo;
    }
  })) : e.proxy;
}
function Ed(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Td(e) {
  return et(e) && "__vccOpts" in e;
}
const R = (e, t) => ku(e, t, dn);
function Ro(e, t, o) {
  try {
    Wn(-1);
    const a = arguments.length;
    return a === 2 ? gt(t) && !Ze(t) ? un(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && un(o) && (o = [o]), b(e, t, o));
  } finally {
    Wn(1);
  }
}
const Md = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let el;
const oi = typeof window < "u" && window.trustedTypes;
if (oi)
  try {
    el = /* @__PURE__ */ oi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Hr = el ? (e) => el.createHTML(e) : (e) => e, Pd = "http://www.w3.org/2000/svg", Rd = "http://www.w3.org/1998/Math/MathML", Ts = typeof document < "u" ? document : null, ni = Ts && /* @__PURE__ */ Ts.createElement("template"), Ld = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, a) => {
    const l = t === "svg" ? Ts.createElementNS(Pd, e) : t === "mathml" ? Ts.createElementNS(Rd, e) : o ? Ts.createElement(e, { is: o }) : Ts.createElement(e);
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
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      ni.innerHTML = Hr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ni.content;
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
}, Vs = "transition", Uo = "animation", Eo = Symbol("_vtc"), qr = {
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
}, Kr = /* @__PURE__ */ Mt(
  {},
  hr,
  qr
), Dd = (e) => (e.displayName = "Transition", e.props = Kr, e), Nd = /* @__PURE__ */ Dd(
  (e, { slots: t }) => Ro(Tu, Jr(e), t)
), Zs = (e, t = []) => {
  Ze(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ai = (e) => e ? Ze(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Jr(e) {
  const t = {};
  for (const ue in e)
    ue in qr || (t[ue] = e[ue]);
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
  } = e, _ = Od(l), C = _ && _[0], x = _ && _[1], {
    onBeforeEnter: S,
    onEnter: P,
    onEnterCancelled: T,
    onLeave: E,
    onLeaveCancelled: N,
    onBeforeAppear: A = S,
    onAppear: H = P,
    onAppearCancelled: M = T
  } = t, V = (ue, ke, Z, B) => {
    ue._enterCancelled = B, Bs(ue, ke ? f : u), Bs(ue, ke ? v : c), Z && Z();
  }, ae = (ue, ke) => {
    ue._isLeaving = !1, Bs(ue, p), Bs(ue, g), Bs(ue, w), ke && ke();
  }, ce = (ue) => (ke, Z) => {
    const B = ue ? H : P, K = () => V(ke, ue, Z);
    Zs(B, [ke, K]), li(() => {
      Bs(ke, ue ? d : r), hs(ke, ue ? f : u), ai(B) || ii(ke, a, C, K);
    });
  };
  return Mt(t, {
    onBeforeEnter(ue) {
      Zs(S, [ue]), hs(ue, r), hs(ue, c);
    },
    onBeforeAppear(ue) {
      Zs(A, [ue]), hs(ue, d), hs(ue, v);
    },
    onEnter: ce(!1),
    onAppear: ce(!0),
    onLeave(ue, ke) {
      ue._isLeaving = !0;
      const Z = () => ae(ue, ke);
      hs(ue, p), ue._enterCancelled ? (hs(ue, w), tl(ue)) : (tl(ue), hs(ue, w)), li(() => {
        ue._isLeaving && (Bs(ue, p), hs(ue, g), ai(E) || ii(ue, a, x, Z));
      }), Zs(E, [ue, Z]);
    },
    onEnterCancelled(ue) {
      V(ue, !1, void 0, !0), Zs(T, [ue]);
    },
    onAppearCancelled(ue) {
      V(ue, !0, void 0, !0), Zs(M, [ue]);
    },
    onLeaveCancelled(ue) {
      ae(ue), Zs(N, [ue]);
    }
  });
}
function Od(e) {
  if (e == null)
    return null;
  if (gt(e))
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
function Bs(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Eo];
  o && (o.delete(t), o.size || (e[Eo] = void 0));
}
function li(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ud = 0;
function ii(e, t, o, a) {
  const l = e._endId = ++Ud, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Qr(e, t);
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
function Qr(e, t) {
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${Vs}Delay`), r = a(`${Vs}Duration`), c = ri(l, r), u = a(`${Uo}Delay`), d = a(`${Uo}Duration`), v = ri(u, d);
  let f = null, p = 0, w = 0;
  t === Vs ? c > 0 && (f = Vs, p = c, w = r.length) : t === Uo ? v > 0 && (f = Uo, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? Vs : Uo : null, w = f ? f === Vs ? r.length : d.length : 0);
  const g = f === Vs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Vs}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function ri(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, a) => ci(o) + ci(e[a])));
}
function ci(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function tl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ad(e, t, o) {
  const a = e[Eo];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ui = Symbol("_vod"), zd = Symbol("_vsh"), Fd = Symbol(""), Vd = /(?:^|;)\s*display\s*:/;
function Bd(e, t, o) {
  const a = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if ($t(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Rn(a, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Rn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Rn(a, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = a[Fd];
      c && (o += ";" + c), a.cssText = o, r = Vd.test(o);
    }
  } else t && e.removeAttribute("style");
  ui in e && (e[ui] = r ? a.display : "", e[zd] && (a.display = "none"));
}
const di = /\s*!important$/;
function Rn(e, t, o) {
  if (Ze(o))
    o.forEach((a) => Rn(e, t, a));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = Wd(e, t);
    di.test(o) ? e.setProperty(
      Js(a),
      o.replace(di, ""),
      "important"
    ) : e[a] = o;
  }
}
const mi = ["Webkit", "Moz", "ms"], Fa = {};
function Wd(e, t) {
  const o = Fa[t];
  if (o)
    return o;
  let a = is(t);
  if (a !== "filter" && a in e)
    return Fa[t] = a;
  a = Xn(a);
  for (let l = 0; l < mi.length; l++) {
    const r = mi[l] + a;
    if (r in e)
      return Fa[t] = r;
  }
  return t;
}
const fi = "http://www.w3.org/1999/xlink";
function vi(e, t, o, a, l, r = qc(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(fi, t.slice(6, t.length)) : e.setAttributeNS(fi, t, o) : o == null || r && !Wi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ms(o) ? String(o) : o
  );
}
function pi(e, t, o, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Hr(o) : o);
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
    u === "boolean" ? o = Wi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Ls(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function Gd(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const gi = Symbol("_vei");
function jd(e, t, o, a, l = null) {
  const r = e[gi] || (e[gi] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = Hd(t);
    if (a) {
      const v = r[t] = Jd(
        a,
        l
      );
      Ls(e, u, v, d);
    } else c && (Gd(e, u, c, d), r[t] = void 0);
  }
}
const hi = /(?:Once|Passive|Capture)$/;
function Hd(e) {
  let t;
  if (hi.test(e)) {
    t = {};
    let a;
    for (; a = e.match(hi); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Js(e.slice(2)), t];
}
let Va = 0;
const qd = /* @__PURE__ */ Promise.resolve(), Kd = () => Va || (qd.then(() => Va = 0), Va = Date.now());
function Jd(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    vs(
      Qd(a, o.value),
      t,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Kd(), o;
}
function Qd(e, t) {
  if (Ze(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yd = (e, t, o, a, l, r) => {
  const c = l === "svg";
  t === "class" ? Ad(e, a, c) : t === "style" ? Bd(e, o, a) : Qn(t) ? rl(t) || jd(e, t, o, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xd(e, t, a, c)) ? (pi(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vi(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !$t(a)) ? pi(e, is(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), vi(e, t, a, c));
};
function Xd(e, t, o, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yi(t) && et(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return yi(t) && $t(o) ? !1 : t in e;
}
const Yr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), jn = Symbol("_moveCb"), wi = Symbol("_enterCb"), Zd = (e) => (delete e.props.mode, e), em = /* @__PURE__ */ Zd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, Kr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = Sl(), a = gr();
    let l, r;
    return $r(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!am(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(sm), l.forEach(om);
      const u = l.filter(nm);
      tl(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        hs(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[jn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[jn] = null, Bs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ut(e), u = Jr(c);
      let d = c.tag || j;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), io(
            f,
            rn(
              f,
              u,
              a,
              o
            )
          ), Yr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = t.default ? _l(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && io(
          f,
          rn(f, u, a, o)
        );
      }
      return b(d, null, r);
    };
  }
}), tm = em;
function sm(e) {
  const t = e.el;
  t[jn] && t[jn](), t[wi] && t[wi]();
}
function om(e) {
  Xr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function nm(e) {
  const t = Yr.get(e), o = Xr.get(e), a = t.left - o.left, l = t.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function am(e, t, o) {
  const a = e.cloneNode(), l = e[Eo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Qr(a);
  return r.removeChild(a), c;
}
const Ks = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (o) => En(t, o) : t;
};
function lm(e) {
  e.target.composing = !0;
}
function _i(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ls = Symbol("_assign");
function ki(e, t, o) {
  return t && (e = e.trim()), o && (e = Zn(e)), e;
}
const en = {
  created(e, { modifiers: { lazy: t, trim: o, number: a } }, l) {
    e[ls] = Ks(l);
    const r = a || l.props && l.props.type === "number";
    Ls(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ls](ki(e.value, o, r));
    }), (o || r) && Ls(e, "change", () => {
      e.value = ki(e.value, o, r);
    }), t || (Ls(e, "compositionstart", lm), Ls(e, "compositionend", _i), Ls(e, "change", _i));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ls] = Ks(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Zn(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Hn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ls] = Ks(o), Ls(e, "change", () => {
      const a = e._modelValue, l = To(e), r = e.checked, c = e[ls];
      if (Ze(a)) {
        const u = dl(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const v = [...a];
          v.splice(u, 1), c(v);
        }
      } else if (Mo(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Zr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: bi,
  beforeUpdate(e, t, o) {
    e[ls] = Ks(o), bi(e, t, o);
  }
};
function bi(e, { value: t, oldValue: o }, a) {
  e._modelValue = t;
  let l;
  if (Ze(t))
    l = dl(t, a.props.value) > -1;
  else if (Mo(t))
    l = t.has(a.props.value);
  else {
    if (t === o) return;
    l = lo(t, Zr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Ln = {
  created(e, { value: t }, o) {
    e.checked = lo(t, o.props.value), e[ls] = Ks(o), Ls(e, "change", () => {
      e[ls](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, a) {
    e[ls] = Ks(a), t !== o && (e.checked = lo(t, a.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, a) {
    const l = Mo(t);
    Ls(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Zn(To(c)) : To(c)
      );
      e[ls](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[ls] = Ks(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    $i(e, t);
  },
  beforeUpdate(e, t, o) {
    e[ls] = Ks(o);
  },
  updated(e, { value: t }) {
    e._assigning || $i(e, t);
  }
};
function $i(e, t) {
  const o = e.multiple, a = Ze(t);
  if (!(o && !a && !Mo(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = To(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((v) => String(v) === String(u)) : c.selected = dl(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (lo(To(c), t)) {
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
function Zr(e, t) {
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
}, vt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), a = t.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = rm[t[c]];
      if (u && u(l, t)) return;
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
}, ds = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Js(l.key);
    if (t.some(
      (c) => c === r || cm[c] === r
    ))
      return e(l);
  }));
}, um = /* @__PURE__ */ Mt({ patchProp: Yd }, Ld);
let Ci;
function dm() {
  return Ci || (Ci = md(um));
}
const gn = ((...e) => {
  const t = dm().createApp(...e), { mount: o } = t;
  return t.mount = (a) => {
    const l = fm(a);
    if (!l) return;
    const r = t._component;
    !et(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, mm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function mm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fm(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const vm = { class: "panel-layout" }, pm = {
  key: 0,
  class: "panel-layout-header"
}, gm = {
  key: 1,
  class: "panel-layout-search"
}, hm = { class: "panel-layout-content" }, ym = {
  key: 2,
  class: "panel-layout-footer"
}, wm = /* @__PURE__ */ be({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (n(), i("div", vm, [
      t.$slots.header ? (n(), i("div", pm, [
        st(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (n(), i("div", gm, [
        st(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", hm, [
        st(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (n(), i("div", ym, [
        st(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), xe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
}, At = /* @__PURE__ */ xe(wm, [["__scopeId", "data-v-21565df9"]]), _m = {
  key: 0,
  class: "panel-title-prefix"
}, km = {
  key: 1,
  class: "panel-title-prefix-theme"
}, bm = /* @__PURE__ */ be({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (n(), L(kl(`h${e.level}`), {
      class: Ve(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", _m, m(e.prefix), 1)) : (n(), i("span", km)),
        st(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $m = /* @__PURE__ */ xe(bm, [["__scopeId", "data-v-c3875efc"]]), Cm = ["title"], xm = ["width", "height"], Sm = /* @__PURE__ */ be({
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
      ])], 8, xm))
    ], 8, Cm));
  }
}), Il = /* @__PURE__ */ xe(Sm, [["__scopeId", "data-v-6fc7f16d"]]), Im = { class: "header-left" }, Em = {
  key: 0,
  class: "header-actions"
}, Tm = /* @__PURE__ */ be({
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
      s("div", Im, [
        b($m, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), L(Il, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (n(), i("div", Em, [
        st(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ xe(Tm, [["__scopeId", "data-v-55a62cd6"]]), Mm = {
  key: 0,
  class: "section-title-count"
}, Pm = {
  key: 1,
  class: "section-title-icon"
}, Rm = /* @__PURE__ */ be({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), L(kl(`h${e.level}`), {
      class: Ve(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Mm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", Pm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ns = /* @__PURE__ */ xe(Rm, [["__scopeId", "data-v-559361eb"]]), Lm = { class: "status-grid" }, Dm = { class: "status-grid__columns" }, Nm = { class: "status-grid__column" }, Om = { class: "status-grid__title" }, Um = { class: "status-grid__column status-grid__column--right" }, Am = { class: "status-grid__title" }, zm = {
  key: 0,
  class: "status-grid__footer"
}, Fm = /* @__PURE__ */ be({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", Lm, [
      s("div", Dm, [
        s("div", Nm, [
          s("h4", Om, m(e.leftTitle), 1),
          st(t.$slots, "left", {}, void 0)
        ]),
        s("div", Um, [
          s("h4", Am, m(e.rightTitle), 1),
          st(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (n(), i("div", zm, [
        st(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Vm = /* @__PURE__ */ xe(Fm, [["__scopeId", "data-v-73b7ba3f"]]), Bm = {
  key: 0,
  class: "status-item__icon"
}, Wm = {
  key: 1,
  class: "status-item__count"
}, Gm = { class: "status-item__label" }, jm = /* @__PURE__ */ be({
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
      class: Ve(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", Bm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", Wm, m(e.count), 1)) : y("", !0),
      s("span", Gm, m(e.label), 1)
    ], 2));
  }
}), gs = /* @__PURE__ */ xe(jm, [["__scopeId", "data-v-6f929183"]]), Hm = { class: "issue-card__header" }, qm = { class: "issue-card__icon" }, Km = { class: "issue-card__title" }, Jm = {
  key: 0,
  class: "issue-card__content"
}, Qm = {
  key: 0,
  class: "issue-card__description"
}, Ym = {
  key: 1,
  class: "issue-card__items"
}, Xm = {
  key: 2,
  class: "issue-card__actions"
}, Zm = /* @__PURE__ */ be({
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
      class: Ve(["issue-card", o.value])
    }, [
      s("div", Hm, [
        s("span", qm, m(e.icon), 1),
        s("h4", Km, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Jm, [
        e.description ? (n(), i("p", Qm, m(e.description), 1)) : y("", !0),
        st(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Ym, [
        (n(!0), i(j, null, he(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", Xm, [
        st(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ xe(Zm, [["__scopeId", "data-v-df6aa348"]]), ef = ["type", "disabled"], tf = {
  key: 0,
  class: "spinner"
}, sf = /* @__PURE__ */ be({
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
      e.loading ? (n(), i("span", tf)) : y("", !0),
      e.loading ? y("", !0) : st(t.$slots, "default", { key: 1 }, void 0)
    ], 10, ef));
  }
}), Te = /* @__PURE__ */ xe(sf, [["__scopeId", "data-v-772abe47"]]), of = { class: "empty-state" }, nf = {
  key: 0,
  class: "empty-icon"
}, af = { class: "empty-message" }, lf = /* @__PURE__ */ be({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (n(), i("div", of, [
      e.icon ? (n(), i("div", nf, m(e.icon), 1)) : y("", !0),
      s("p", af, m(e.message), 1),
      e.actionLabel ? (n(), L(Te, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          $(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ xe(lf, [["__scopeId", "data-v-4466284f"]]), rf = /* @__PURE__ */ be({
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
}), Dn = /* @__PURE__ */ xe(rf, [["__scopeId", "data-v-75e9eeb8"]]), cf = /* @__PURE__ */ be({
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
}), sl = /* @__PURE__ */ xe(cf, [["__scopeId", "data-v-2f186e4c"]]), uf = { class: "detail-row" }, df = /* @__PURE__ */ be({
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
    return (t, o) => (n(), i("div", uf, [
      b(Dn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(m(e.label), 1)
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
          $(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : st(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ xe(df, [["__scopeId", "data-v-ef15664a"]]), mf = { class: "modal-header" }, ff = { class: "modal-body" }, vf = { class: "status-section" }, pf = {
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
}, Nv = { class: "modal-actions" }, Ov = /* @__PURE__ */ be({
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
    }), yt(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = R(() => {
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
        var S, P, T;
        const x = (T = (P = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : P.analyzed) == null ? void 0 : T.find((E) => E.name === C);
        return !x || x.status !== "broken";
      })) || [];
    }), c = R(() => {
      var w, g, _, C, x;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = t.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((x = t.status.workflows.synced) == null ? void 0 : x.length) ?? 0) > 0 : !1;
    }), u = R(() => {
      var g, _, C;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = R(() => {
      var w, g, _, C, x, S;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (x = (C = t.status) == null ? void 0 : C.comparison) == null ? void 0 : x.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
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
      var _, C, x, S, P, T, E, N, A, H, M, V, ae, ce, ue, ke, Z, B, K, Re, X, ye;
      return n(), L(Lt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (U) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", mf, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (U) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", ff, [
              s("div", vf, [
                b(ns, { level: "4" }, {
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
              c.value ? (n(), i("div", pf, [
                s("div", gf, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (U) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", hf, [
                  s("div", yf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", wf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", _f, [
                    (n(!0), i(j, null, he(a.value, (U) => (n(), i("div", {
                      key: U.name,
                      class: "workflow-item"
                    }, [
                      s("span", kf, m(U.name), 1),
                      s("span", bf, m(U.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", $f, [
                  s("div", Cf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", xf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Sf, [
                    (n(!0), i(j, null, he(l.value, (U) => (n(), i("div", {
                      key: U.name,
                      class: "workflow-item"
                    }, [
                      s("span", If, m(U.name), 1),
                      s("span", Ef, m(U.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (n(), i("div", Tf, [
                  s("div", Mf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Pf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Rf, [
                    (n(!0), i(j, null, he(e.status.workflows.new, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Lf, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (x = e.status.workflows) == null ? void 0 : x.modified) != null && S.length ? (n(), i("div", Df, [
                  s("div", Nf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Of, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Uf, [
                    (n(!0), i(j, null, he(e.status.workflows.modified, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Af, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (P = e.status.workflows) == null ? void 0 : P.deleted) != null && T.length ? (n(), i("div", zf, [
                  s("div", Ff, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Vf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Bf, [
                    (n(!0), i(j, null, he(e.status.workflows.deleted, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Wf, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", Gf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (U) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", jf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", Hf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", qf, [
                    (n(!0), i(j, null, he(r.value, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Kf, m(U), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", Jf, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && N.length ? (n(), i("div", Qf, [
                  s("div", Yf, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Xf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Zf, [
                    (n(!0), i(j, null, he(e.status.git_changes.nodes_added, (U) => (n(), i("div", {
                      key: f(U),
                      class: "change-item"
                    }, [
                      s("span", ev, m(f(U)), 1),
                      p(U) ? (n(), i("span", tv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (H = (A = e.status.git_changes) == null ? void 0 : A.nodes_removed) != null && H.length ? (n(), i("div", sv, [
                  s("div", ov, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", nv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", av, [
                    (n(!0), i(j, null, he(e.status.git_changes.nodes_removed, (U) => (n(), i("div", {
                      key: f(U),
                      class: "change-item"
                    }, [
                      s("span", lv, m(f(U)), 1),
                      p(U) ? (n(), i("span", iv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (M = e.status.git_changes) != null && M.workflow_changes ? (n(), i("div", rv, [
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
                (V = e.status.git_changes) != null && V.has_other_changes ? (n(), i("div", mv, [...g[21] || (g[21] = [
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
                s("div", vv, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (U) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (ue = (ce = e.status.comparison) == null ? void 0 : ce.missing_nodes) != null && ue.length ? (n(), i("div", pv, [
                  b(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", gv, [
                    (n(!0), i(j, null, he(e.status.comparison.missing_nodes.slice(0, 10), (U) => (n(), i("div", {
                      key: U,
                      class: "drift-list-item"
                    }, " - " + m(U), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", hv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (Z = (ke = e.status.comparison) == null ? void 0 : ke.extra_nodes) != null && Z.length ? (n(), i("div", yv, [
                  b(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", wv, [
                    (n(!0), i(j, null, he(e.status.comparison.extra_nodes.slice(0, 10), (U) => (n(), i("div", {
                      key: U,
                      class: "drift-list-item"
                    }, " - " + m(U), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", _v, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (K = (B = e.status.comparison) == null ? void 0 : B.version_mismatches) != null && K.length ? (n(), i("div", kv, [
                  b(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", bv, [
                    (n(!0), i(j, null, he(e.status.comparison.version_mismatches.slice(0, 10), (U) => (n(), i("div", {
                      key: U.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(m(U.name) + ": ", 1),
                      s("span", $v, m(U.actual), 1),
                      g[23] || (g[23] = $(" → ", -1)),
                      s("span", Cv, m(U.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", xv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Re = e.status.comparison) == null ? void 0 : Re.packages_in_sync) === !1 ? (n(), i("div", Sv, [
                  b(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Iv, [
                  b(Te, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (U) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ye = (X = e.status.comparison) == null ? void 0 : X.disabled_nodes) != null && ye.length ? (n(), i("div", Ev, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Tv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Mv, [
                  (n(!0), i(j, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (U) => (n(), i("div", {
                    key: U,
                    class: "drift-list-item"
                  }, " • " + m(U), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Pv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Rv, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Lv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (n(), i("div", Dv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Nv, [
              b(Te, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (U) => w.$emit("close"))
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
}), Uv = /* @__PURE__ */ xe(Ov, [["__scopeId", "data-v-e2b37122"]]), Av = { class: "health-section-header" }, zv = { class: "suggestions-content" }, Fv = { class: "suggestions-text" }, Vv = { style: { "margin-top": "var(--cg-space-3)" } }, Bv = {
  key: 1,
  class: "no-issues-text"
}, Wv = /* @__PURE__ */ be({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = k(!1), r = k(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, f = k(!1), p = k(!1);
    function w() {
      p.value = !0, v("repair-environment");
    }
    function g() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const C = R(() => {
      const ee = a.status.workflows.analyzed || [], Q = ee.filter(
        (we) => we.unresolved_models_count > 0 || we.ambiguous_models_count > 0
      );
      return Q.length === 0 && a.status.missing_models_count > 0 ? ee.filter((we) => we.sync_state === "synced") : Q;
    });
    function x() {
      const ee = C.value;
      ee.length !== 0 && (f.value = !0, v("repair-missing-models", ee.map((Q) => Q.name)));
    }
    function S() {
      f.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: g, closeDetailModal: _ });
    const P = R(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), T = R(() => a.status.has_changes), E = R(() => {
      const ee = a.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), N = R(() => a.status.has_changes || P.value), A = R(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), H = R(() => a.status.git_changes.has_other_changes), M = R(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter((Q) => Q.status === "broken")) || [];
    }), V = R(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (Q) => Q.has_path_sync_issues && !Q.has_issues
      )) || [];
    }), ae = R(() => M.value.length > 0);
    function ce(ee) {
      const Q = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const we of Q) {
        const te = ee.match(we);
        if (te != null && te[1])
          return te[1];
      }
      return null;
    }
    function ue(ee) {
      const Q = ee.map(ce).filter((we) => !!we);
      return [...new Set(Q)];
    }
    function ke(ee) {
      if (ee.length === 0) return "";
      if (ee.length === 1) return ` (>= ${ee[0]})`;
      const Q = ee.slice(0, 2).map((te) => `>= ${te}`).join(", "), we = ee.length > 2;
      return ` (${Q}${we ? ", ..." : ""})`;
    }
    function Z(ee) {
      return ee.replace(/uninstallable node mappings?/gi, (Q) => Q.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function B(ee) {
      const Q = Z(ee.issue_summary || "Has issues"), we = /(?:>=|v?\d+\.\d+)/i.test(Q), te = ue(ee.version_gated_guidance || []);
      return (ee.nodes_version_gated_count || 0) > 0 && te.length > 0 && !we ? `${ee.name} — ${Q} (needs ComfyUI ${te.map((oe) => `>= ${oe}`).join(", ")})` : `${ee.name} — ${Q}`;
    }
    const K = R(() => M.value.reduce(
      (ee, Q) => ee + (Q.nodes_version_gated_count || 0),
      0
    )), Re = R(() => {
      const ee = M.value.flatMap(
        (Q) => ue(Q.version_gated_guidance || [])
      );
      return [...new Set(ee)];
    }), X = R(() => M.value.reduce(
      (ee, Q) => ee + (Q.nodes_uninstallable_count || 0),
      0
    )), ye = R(() => {
      const ee = [];
      return K.value > 0 && ee.push(
        `${K.value} require newer ComfyUI${ke(Re.value)}`
      ), X.value > 0 && ee.push(`${X.value} need community packages`), ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), U = R(() => ae.value || V.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), fe = R(() => {
      const ee = [];
      return a.status.workflows.new.length > 0 && ee.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && ee.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && ee.push(`${a.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Le = R(() => {
      var we, te;
      const ee = [], Q = a.status.comparison;
      return (we = Q.missing_nodes) != null && we.length && ee.push(`${Q.missing_nodes.length} missing node${Q.missing_nodes.length === 1 ? "" : "s"}`), (te = Q.extra_nodes) != null && te.length && ee.push(`${Q.extra_nodes.length} untracked node${Q.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), ve = R(() => {
      var we, te;
      const ee = [], Q = a.status.comparison;
      return (we = Q.extra_nodes) != null && we.length && (Q.extra_nodes.slice(0, 3).forEach((oe) => {
        ee.push(`Untracked: ${oe}`);
      }), Q.extra_nodes.length > 3 && ee.push(`...and ${Q.extra_nodes.length - 3} more untracked`)), (te = Q.missing_nodes) != null && te.length && (Q.missing_nodes.slice(0, 3).forEach((oe) => {
        ee.push(`Missing: ${oe}`);
      }), Q.missing_nodes.length > 3 && ee.push(`...and ${Q.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, Q) => (n(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), L(cs, {
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
                onClick: Q[0] || (Q[0] = (we) => ee.$emit("start-setup"))
              }, {
                default: h(() => [...Q[13] || (Q[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), L(cs, {
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
                onClick: Q[1] || (Q[1] = (we) => ee.$emit("view-environments"))
              }, {
                default: h(() => [...Q[14] || (Q[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), L(cs, {
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
                onClick: Q[2] || (Q[2] = (we) => ee.$emit("create-environment"))
              }, {
                default: h(() => [...Q[15] || (Q[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: Q[4] || (Q[4] = (we) => r.value = !0),
            onMouseleave: Q[5] || (Q[5] = (we) => r.value = !1)
          }, [
            s("div", Av, [
              b(ns, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...Q[16] || (Q[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Nd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), L(Te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...Q[17] || (Q[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(Vm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Qt({
              left: h(() => [
                e.status.workflows.new.length ? (n(), L(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), L(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), L(gs, {
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
                  separator: P.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (n(), L(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), L(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), L(gs, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                H.value ? (n(), L(gs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                T.value && !E.value && !H.value ? (n(), L(gs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                T.value ? y("", !0) : (n(), L(gs, {
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
                fn: h(() => [
                  Q[19] || (Q[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", zv, [
                    s("span", Fv, m(fe.value), 1),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: Q[3] || (Q[3] = (we) => ee.$emit("commit-changes"))
                    }, {
                      default: h(() => [...Q[18] || (Q[18] = [
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
          e.status.is_detached_head ? (n(), L(cs, {
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
                onClick: Q[6] || (Q[6] = (we) => ee.$emit("create-branch"))
              }, {
                default: h(() => [...Q[20] || (Q[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Vv, [
            b(ns, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...Q[21] || (Q[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            U.value ? (n(), i(j, { key: 0 }, [
              M.value.length > 0 ? (n(), L(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} can't run`,
                description: ye.value,
                items: M.value.map(B)
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: Q[7] || (Q[7] = (we) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Q[22] || (Q[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              V.value.length > 0 ? (n(), L(cs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${V.value.length} workflow${V.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: V.value.map((we) => `${we.name} — ${we.models_needing_path_sync_count} model path${we.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: Q[8] || (Q[8] = (we) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Q[23] || (Q[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ae.value ? (n(), L(cs, {
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
                    disabled: f.value,
                    onClick: x
                  }, {
                    default: h(() => [
                      $(m(f.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: Q[9] || (Q[9] = (we) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Q[24] || (Q[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), L(cs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Le.value,
                items: ve.value
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...Q[25] || (Q[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: Q[10] || (Q[10] = (we) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...Q[26] || (Q[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), L(cs, {
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
                    onClick: Q[11] || (Q[11] = (we) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...Q[27] || (Q[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : N.value ? (n(), i("span", Bv, "No issues")) : (n(), L(rs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Uv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: Q[12] || (Q[12] = (we) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Gv = /* @__PURE__ */ xe(Wv, [["__scopeId", "data-v-df52ba90"]]), AR = co({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const zR = [
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
], FR = {
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
}, jv = [
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
], VR = [
  ...jv,
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
class ec extends Error {
  constructor(o, a, l, r) {
    super(o);
    _n(this, "status");
    _n(this, "data");
    _n(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function Hv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ct() {
  const e = k(!1), t = k(null);
  async function o(G, _e) {
    var Nt;
    if (!((Nt = window.app) != null && Nt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi(G, _e), mt = await je.text();
    if (!je.ok) {
      let Xe = {};
      if (mt)
        try {
          const Is = JSON.parse(mt);
          Is && typeof Is == "object" && (Xe = Is);
        } catch {
          Xe = { error: mt };
        }
      const Fs = Xe.error || Xe.message || Xe.detail || je.statusText || `Request failed: ${je.status}`;
      throw new ec(String(Fs), je.status, Xe, G);
    }
    if (mt)
      return JSON.parse(mt);
  }
  async function a(G) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(G)}`);
  }
  async function l(G, _e, je) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, email: _e, password: je })
    });
  }
  async function r(G, _e, je) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, email: _e, password: je })
    });
  }
  async function c(G, _e) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(G)}`, {
      headers: { Authorization: `Bearer ${_e}` }
    });
  }
  async function u(G, _e) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, refresh_token: _e || null })
    });
  }
  async function d(G, _e) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(G)}`, {
      headers: { Authorization: `Bearer ${_e}` }
    });
  }
  async function v(G, _e, je) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(_e)}/revisions?cloud_url=${encodeURIComponent(G)}`,
      {
        headers: { Authorization: `Bearer ${je}` }
      }
    );
  }
  async function f(G, _e, je, mt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${_e}`
      },
      body: JSON.stringify({
        cloud_url: G,
        source_message: je || null,
        cloud_environment_id: mt || null
      })
    });
  }
  async function p(G = !1) {
    return o(G ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(G, _e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: G, allow_issues: _e })
    });
  }
  async function g(G = 10, _e = 0) {
    return o(`/v2/comfygit/log?limit=${G}&offset=${_e}`);
  }
  async function _(G, _e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(G)}&limit=${_e}`);
  }
  async function C(G) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function x() {
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
  async function P(G) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G, force: !0 })
    });
  }
  async function T(G) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(G)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function E(G, _e) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(G)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: _e, force: !0 })
    });
  }
  async function N() {
    return o("/v2/comfygit/branches");
  }
  async function A(G) {
    return o(`/v2/comfygit/commit/${G}`);
  }
  async function H(G, _e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: G, force: _e })
    });
  }
  async function M(G, _e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, start_point: _e })
    });
  }
  async function V(G, _e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: G, force: _e })
    });
  }
  async function ae(G, _e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(G)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: _e })
    });
  }
  async function ce() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const G = await p();
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
    return (await ce()).environments;
  }
  async function ke(G) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(G)}`);
    } catch {
      return null;
    }
  }
  async function Z(G, _e) {
    const je = { target_env: G };
    return _e && (je.workspace_path = _e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(je)
    });
  }
  async function B() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function K(G) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function Re() {
    return o("/v2/workspace/environments/create_status");
  }
  async function X(G = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${G}`);
  }
  async function ye(G) {
    return o(`/v2/workspace/environments/${G}`, {
      method: "DELETE"
    });
  }
  async function U(G = !1) {
    try {
      return o(G ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const _e = await p(G), je = [];
      return _e.workflows.new.forEach((mt) => {
        je.push({
          name: mt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), _e.workflows.modified.forEach((mt) => {
        je.push({
          name: mt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), _e.workflows.synced.forEach((mt) => {
        je.push({
          name: mt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), je;
    }
  }
  async function fe(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/details`);
  }
  async function Le(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`);
  }
  async function ve(G, _e) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function ee(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`, {
      method: "DELETE"
    });
  }
  async function Q(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/resolve`, {
      method: "POST"
    });
  }
  async function we(G, _e, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: _e, install_models: je })
    });
  }
  async function te(G, _e, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/model-importance`, {
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
  async function me(G) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(G)}`);
  }
  async function le(G) {
    return o(`/v2/workspace/models/${encodeURIComponent(G)}/source-candidates`);
  }
  async function I(G) {
    return o(`/v2/workspace/models/${encodeURIComponent(G)}/hashes`, {
      method: "POST"
    });
  }
  async function F() {
    return o("/v2/workspace/models/workflow-source-candidates");
  }
  async function ie(G) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function Ie(G, _e) {
    return o(`/v2/workspace/models/${G}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function $e(G, _e) {
    return o(`/v2/workspace/models/${G}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function Se(G) {
    return o(`/v2/workspace/models/${G}`, {
      method: "DELETE"
    });
  }
  async function Ae(G) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function Fe() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ne() {
    return o("/v2/workspace/models/directory");
  }
  async function Ee(G) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function Ke(G) {
    const _e = new URLSearchParams({ url: G });
    return o(`/v2/workspace/huggingface/repo-info?${_e}`);
  }
  async function Be() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function pe(G, _e = 10) {
    const je = new URLSearchParams({ query: G, limit: String(_e) });
    return o(`/v2/workspace/huggingface/search?${je}`);
  }
  async function J(G) {
    try {
      const _e = G ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(G)}` : "/v2/comfygit/config";
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
  async function He(G, _e) {
    const je = _e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(_e)}` : "/v2/comfygit/config";
    return o(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function Ce(G, _e) {
    try {
      const je = new URLSearchParams();
      return G && je.append("level", G), _e && je.append("lines", _e.toString()), o(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Ye(G, _e) {
    try {
      const je = new URLSearchParams();
      return G && je.append("level", G), _e && je.append("lines", _e.toString()), o(`/v2/workspace/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function ot() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ze() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function O() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function se(G, _e) {
    try {
      const je = new URLSearchParams();
      return G && je.append("level", G), _e && je.append("lines", _e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function ge() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Je(G) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function D() {
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
  async function z(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/track-dev`, {
      method: "POST"
    });
  }
  async function Y(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/install`, {
      method: "POST"
    });
  }
  async function Oe(G, _e) {
    var Fs, Is, Dl, Nl;
    const je = Hv(), mt = ((Is = (Fs = window.app) == null ? void 0 : Fs.api) == null ? void 0 : Is.clientId) ?? ((Nl = (Dl = window.app) == null ? void 0 : Dl.api) == null ? void 0 : Nl.initialClientId) ?? "comfygit-panel", Nt = {
      id: G.id,
      version: G.version || G.selected_version || "latest",
      selected_version: G.selected_version || "latest",
      mode: G.mode || "remote",
      channel: G.channel || "default"
    };
    return G.install_source && (Nt.install_source = G.install_source), G.install_source === "git" && G.repository && (Nt.repository = G.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Nt,
        ui_id: je,
        client_id: mt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", G.id), _e != null && _e.beforeQueueStart && await _e.beforeQueueStart(je), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: je };
  }
  async function Ue(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/update`, {
      method: "POST"
    });
  }
  async function Pe(G, _e) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: _e })
    });
  }
  async function Ge(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function nt() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function kt(G, _e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, url: _e })
    });
  }
  async function Et(G) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function re(G, _e, je) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: _e, push_url: je })
    });
  }
  async function W(G, _e) {
    const je = {};
    return _e && (je["X-Git-Auth-Token"] = _e), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function de(G) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/status`);
    } catch {
      return null;
    }
  }
  async function We(G = "skip", _e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: G,
        remove_extra_nodes: _e
      })
    });
  }
  async function dt(G, _e) {
    const je = _e ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview`;
    return o(je);
  }
  async function Ct(G, _e = {}) {
    const je = { "Content-Type": "application/json" };
    return _e.authToken && (je["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: _e.modelStrategy || "skip",
        force: _e.force || !1,
        resolutions: _e.resolutions
      })
    });
  }
  async function it(G, _e) {
    const je = _e ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview`;
    return o(je);
  }
  async function xt(G, _e = {}) {
    const je = { "Content-Type": "application/json" };
    return _e.authToken && (je["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: _e.force || !1 })
    });
  }
  async function ts(G, _e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: _e })
    });
  }
  async function xs(G) {
    const _e = {
      success: 0,
      failed: []
    };
    for (const je of G)
      try {
        await Q(je), _e.success++;
      } catch (mt) {
        _e.failed.push({
          name: je,
          error: mt instanceof Error ? mt.message : "Unknown error"
        });
      }
    return _e;
  }
  async function Qs(G) {
    var mt;
    const _e = new FormData();
    if (_e.append("file", G), !((mt = window.app) != null && mt.api))
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
  async function da(G) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(G)}`
    );
  }
  async function ma(G, _e, je, mt) {
    var Fs;
    const Nt = new FormData();
    if (Nt.append("file", G), Nt.append("name", _e), Nt.append("model_strategy", je), Nt.append("torch_backend", mt), !((Fs = window.app) != null && Fs.api))
      throw new Error("ComfyUI API not available");
    const Xe = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Nt
    });
    if (!Xe.ok) {
      const Is = await Xe.json().catch(() => ({}));
      throw new Error(Is.message || Is.error || `Import failed: ${Xe.status}`);
    }
    return Xe.json();
  }
  async function As() {
    return o("/v2/workspace/import/status");
  }
  async function fa(G) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: G })
    });
  }
  async function uo(G, _e, je, mt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: G,
        name: _e,
        model_strategy: je,
        torch_backend: mt
      })
    });
  }
  async function mo() {
    return o("/v2/setup/status");
  }
  async function va() {
    return o("/v2/comfygit/update-check");
  }
  async function Ss() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function pa(G) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function Do() {
    return o("/v2/setup/initialize_status");
  }
  async function ga(G) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ha() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ya() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function wa(G, _e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: G, save_key: _e })
    });
  }
  async function hn() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function _a(G) {
    const _e = G ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(G)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(_e);
  }
  async function ka(G) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ba() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function $a(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function Ca(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/stop`, {
      method: "POST"
    });
  }
  async function xa(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/start`, {
      method: "POST"
    });
  }
  async function Sa(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/status`);
  }
  async function Ia(G) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function yn(G = !1) {
    return o(G ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ea() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ta() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function wn(G) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ne(G) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function q(G) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function qe() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Qe(G) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/info`);
  }
  async function lt(G) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances`);
  }
  async function pt(G, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function Dt(G, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(_e)}/start`, {
      method: "POST"
    });
  }
  async function ss(G, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(_e)}/stop`, {
      method: "POST"
    });
  }
  async function No(G, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(_e)}`, {
      method: "DELETE"
    });
  }
  async function zs(G) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: G })
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
    validateExport: x,
    validateDeploy: S,
    exportEnvWithForce: P,
    validateEnvironmentExport: T,
    exportEnvironmentWithForce: E,
    // Git Operations
    getBranches: N,
    getCommitDetail: A,
    checkout: H,
    createBranch: M,
    switchBranch: V,
    deleteBranch: ae,
    // Environment Management
    listEnvironments: ce,
    getEnvironments: ue,
    getEnvironmentDetails: ke,
    switchEnvironment: Z,
    getSwitchProgress: B,
    createEnvironment: K,
    getCreateProgress: Re,
    getComfyUIReleases: X,
    deleteEnvironment: ye,
    // Workflow Management
    getWorkflows: U,
    getWorkflowDetails: fe,
    getWorkflowContract: Le,
    saveWorkflowContract: ve,
    deleteWorkflowContract: ee,
    resolveWorkflow: Q,
    installWorkflowDeps: we,
    setModelImportance: te,
    // Model Management
    getEnvironmentModels: oe,
    getWorkspaceModels: Me,
    getModelDetails: me,
    getModelSourceCandidates: le,
    computeModelHashes: I,
    getWorkflowSourceCandidates: F,
    openFileLocation: ie,
    addModelSource: Ie,
    removeModelSource: $e,
    deleteModel: Se,
    downloadModel: Ae,
    scanWorkspaceModels: Fe,
    getModelsDirectory: Ne,
    setModelsDirectory: Ee,
    getHuggingFaceRepoInfo: Ke,
    getModelsSubdirectories: Be,
    searchHuggingFaceRepos: pe,
    // Settings
    getConfig: J,
    updateConfig: He,
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
    getEnvironmentLogs: Ce,
    getEnvironmentManifest: ze,
    getWorkspaceLogs: Ye,
    getEnvironmentLogPath: ot,
    getWorkspaceLogPath: O,
    getOrchestratorLogs: se,
    getOrchestratorLogPath: ge,
    openFile: Je,
    // Node Management
    getNodes: D,
    trackNodeAsDev: z,
    installNode: Y,
    queueNodeInstall: Oe,
    updateNode: Ue,
    updateNodeCriticality: Pe,
    uninstallNode: Ge,
    // Git Remotes
    getRemotes: nt,
    addRemote: kt,
    removeRemote: Et,
    updateRemoteUrl: re,
    fetchRemote: W,
    getRemoteSyncStatus: de,
    // Push/Pull
    getPullPreview: dt,
    pullFromRemote: Ct,
    getPushPreview: it,
    pushToRemote: xt,
    validateMerge: ts,
    // Environment Sync
    syncEnvironmentManually: We,
    // Workflow Repair
    repairWorkflowModels: xs,
    // Import Operations
    previewTarballImport: Qs,
    previewGitImport: fa,
    validateEnvironmentName: da,
    executeImport: ma,
    executeGitImport: uo,
    getImportProgress: As,
    // First-Time Setup
    getSetupStatus: mo,
    // Manager Update Notice
    getUpdateCheck: va,
    updateManager: Ss,
    initializeWorkspace: pa,
    getInitializeProgress: Do,
    validatePath: ga,
    // Deploy Operations
    getDeploySummary: ha,
    getDataCenters: ya,
    testRunPodConnection: wa,
    getNetworkVolumes: hn,
    getRunPodGpuTypes: _a,
    deployToRunPod: ka,
    getRunPodPods: ba,
    terminateRunPodPod: $a,
    stopRunPodPod: Ca,
    startRunPodPod: xa,
    getDeploymentStatus: Sa,
    exportDeployPackage: Ia,
    getStoredRunPodKey: yn,
    clearRunPodKey: Ea,
    // Custom Worker Operations
    getCustomWorkers: Ta,
    addCustomWorker: wn,
    removeCustomWorker: ne,
    testWorkerConnection: q,
    scanForWorkers: qe,
    getWorkerSystemInfo: Qe,
    getWorkerInstances: lt,
    deployToWorker: pt,
    startWorkerInstance: Dt,
    stopWorkerInstance: ss,
    terminateWorkerInstance: No,
    // Git Authentication
    testGitAuth: zs
  };
}
async function Sn(e, t) {
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
function qv() {
  async function e() {
    try {
      return await Sn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Sn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Sn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Sn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: a
  };
}
const Kv = { class: "base-modal-header" }, Jv = {
  key: 0,
  class: "base-modal-title"
}, Qv = { class: "base-modal-body" }, Yv = {
  key: 0,
  class: "base-modal-loading"
}, Xv = {
  key: 1,
  class: "base-modal-error"
}, Zv = {
  key: 0,
  class: "base-modal-footer"
}, ep = /* @__PURE__ */ be({
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
    }), Po(() => {
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
          s("div", Kv, [
            st(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Jv, m(e.title), 1)) : y("", !0)
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
          s("div", Qv, [
            e.loading ? (n(), i("div", Yv, "Loading...")) : e.error ? (n(), i("div", Xv, m(e.error), 1)) : st(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Zv, [
            st(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), It = /* @__PURE__ */ xe(ep, [["__scopeId", "data-v-06a4be14"]]), tp = ["type", "disabled"], sp = {
  key: 0,
  class: "spinner"
}, op = /* @__PURE__ */ be({
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
      e.loading ? (n(), i("span", sp)) : y("", !0),
      st(t.$slots, "default", {}, void 0)
    ], 10, tp));
  }
}), De = /* @__PURE__ */ xe(op, [["__scopeId", "data-v-f3452606"]]), np = {
  key: 0,
  class: "base-title-count"
}, ap = /* @__PURE__ */ be({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (n(), L(kl(`h${e.level}`), {
      class: Ve(["base-title", e.variant])
    }, {
      default: h(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", np, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ao = /* @__PURE__ */ xe(ap, [["__scopeId", "data-v-5a01561d"]]), lp = ["value", "disabled"], ip = {
  key: 0,
  value: "",
  disabled: ""
}, rp = ["value"], cp = {
  key: 0,
  class: "base-select-error"
}, up = /* @__PURE__ */ be({
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
        e.placeholder ? (n(), i("option", ip, m(e.placeholder), 1)) : y("", !0),
        (n(!0), i(j, null, he(e.options, (r) => (n(), i("option", {
          key: t(r),
          value: t(r)
        }, m(o(r)), 9, rp))), 128))
      ], 42, lp),
      e.error ? (n(), i("span", cp, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Nn = /* @__PURE__ */ xe(up, [["__scopeId", "data-v-4996bfe0"]]), dp = { class: "popover-header" }, mp = { class: "popover-title" }, fp = { class: "popover-content" }, vp = {
  key: 0,
  class: "popover-actions"
}, pp = /* @__PURE__ */ be({
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
          s("div", dp, [
            s("h4", mp, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", fp, [
            st(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (n(), i("div", vp, [
            st(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), Yt = /* @__PURE__ */ xe(pp, [["__scopeId", "data-v-7c1f5547"]]), gp = { class: "detail-section" }, hp = {
  key: 0,
  class: "empty-message"
}, yp = { class: "model-header" }, wp = { class: "model-name" }, _p = { class: "model-details" }, kp = { class: "model-row" }, bp = { class: "model-row" }, $p = { class: "label" }, Cp = {
  key: 0,
  class: "model-row model-row-nodes"
}, xp = { class: "node-list" }, Sp = ["onClick"], Ip = {
  key: 1,
  class: "model-row"
}, Ep = { class: "value" }, Tp = {
  key: 2,
  class: "model-row"
}, Mp = { class: "value error" }, Pp = {
  key: 0,
  class: "model-actions"
}, Rp = { class: "detail-section" }, Lp = {
  key: 0,
  class: "empty-message"
}, Dp = { class: "node-content" }, Np = { class: "node-main" }, Op = { class: "node-name" }, Up = { class: "node-badge" }, Ap = {
  key: 0,
  class: "node-version"
}, zp = ["onClick"], Fp = {
  key: 2,
  class: "node-install-queued"
}, Vp = {
  key: 0,
  class: "node-guidance"
}, Bp = /* @__PURE__ */ be({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ct(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), C = k(/* @__PURE__ */ new Set()), x = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(Z) {
      switch (Z) {
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
    function P(Z) {
      switch (Z) {
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
    function T(Z) {
      switch (Z) {
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
    function E(Z) {
      switch (Z) {
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
    function N(Z) {
      switch (Z) {
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
    function A(Z) {
      if (!Z.loaded_by || Z.loaded_by.length === 0) return [];
      const B = Z.hash || Z.filename;
      return _.value.has(B) ? Z.loaded_by : Z.loaded_by.slice(0, 3);
    }
    function H(Z) {
      return _.value.has(Z);
    }
    function M(Z) {
      _.value.has(Z) ? _.value.delete(Z) : _.value.add(Z), _.value = new Set(_.value);
    }
    async function V() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (Z) {
        f.value = Z instanceof Error ? Z.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function ae(Z, B) {
      w.value[Z] = B, p.value = !0;
    }
    async function ce(Z) {
      try {
        await c(Z);
      } catch (B) {
        f.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function ue(Z) {
      if (Z.package_id)
        try {
          const B = Z.latest_version || "latest";
          await u({
            id: Z.package_id,
            version: B,
            selected_version: B,
            mode: "remote",
            channel: "default"
          }), C.value.add(Z.package_id);
        } catch (B) {
          f.value = B instanceof Error ? B.message : "Failed to queue node install";
        }
    }
    async function ke() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [Z, B] of Object.entries(w.value))
          await r(o.workflowName, Z, B);
        a("refresh"), a("close");
      } catch (Z) {
        f.value = Z instanceof Error ? Z.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return at(V), (Z, B) => (n(), i(j, null, [
      b(It, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: B[4] || (B[4] = (K) => a("close"))
      }, {
        body: h(() => [
          d.value ? (n(), i(j, { key: 0 }, [
            s("section", gp, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", hp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(j, null, he(d.value.models, (K) => {
                var Re;
                return n(), i("div", {
                  key: K.hash || K.filename,
                  class: "model-card"
                }, [
                  s("div", yp, [
                    B[6] || (B[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", wp, m(K.filename), 1)
                  ]),
                  s("div", _p, [
                    s("div", kp, [
                      B[7] || (B[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ve(["value", S(K.status)])
                      }, m(P(K.status)), 3)
                    ]),
                    s("div", bp, [
                      s("span", $p, [
                        B[8] || (B[8] = $(" Importance: ", -1)),
                        b(Il, {
                          size: 14,
                          title: "About importance levels",
                          onClick: B[0] || (B[0] = (X) => g.value = !0)
                        })
                      ]),
                      b(Nn, {
                        "model-value": w.value[K.filename] || K.importance,
                        options: x,
                        "onUpdate:modelValue": (X) => ae(K.filename, X)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    K.loaded_by && K.loaded_by.length > 0 ? (n(), i("div", Cp, [
                      B[9] || (B[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", xp, [
                        (n(!0), i(j, null, he(A(K), (X, ye) => (n(), i("div", {
                          key: `${X.node_id}-${ye}`,
                          class: "node-reference"
                        }, m(X.node_type) + " (Node #" + m(X.node_id) + ") ", 1))), 128)),
                        K.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (X) => M(K.hash || K.filename)
                        }, m(H(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, Sp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    K.size_mb ? (n(), i("div", Ip, [
                      B[10] || (B[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", Ep, m(K.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    K.has_category_mismatch ? (n(), i("div", Tp, [
                      B[13] || (B[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", Mp, [
                        B[11] || (B[11] = $(" In ", -1)),
                        s("code", null, m(K.actual_category) + "/", 1),
                        B[12] || (B[12] = $(" but loader needs ", -1)),
                        s("code", null, m((Re = K.expected_categories) == null ? void 0 : Re[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  K.status !== "available" ? (n(), i("div", Pp, [
                    K.status === "downloadable" ? (n(), L(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: B[1] || (B[1] = (X) => a("resolve"))
                    }, {
                      default: h(() => [...B[14] || (B[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : K.status === "category_mismatch" && K.file_path ? (n(), L(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (X) => ce(K.file_path)
                    }, {
                      default: h(() => [...B[15] || (B[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : K.status !== "path_mismatch" ? (n(), L(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: B[2] || (B[2] = (X) => a("resolve"))
                    }, {
                      default: h(() => [...B[16] || (B[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", Rp, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", Lp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(j, null, he(d.value.nodes, (K, Re) => (n(), i("div", {
                key: `${K.name}-${K.status}-${Re}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Ve(["node-status", T(K.status)])
                }, m(E(K.status)), 3),
                s("div", Dp, [
                  s("div", Np, [
                    s("span", Op, m(K.name), 1),
                    s("span", Up, m(N(K.status)), 1),
                    K.version ? (n(), i("span", Ap, "v" + m(K.version), 1)) : y("", !0),
                    K.status === "uninstallable" && K.package_id && !C.value.has(K.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (X) => ue(K)
                    }, " Install ", 8, zp)) : K.status === "uninstallable" && K.package_id && C.value.has(K.package_id) ? (n(), i("span", Fp, " Queued ")) : y("", !0)
                  ]),
                  K.guidance ? (n(), i("div", Vp, m(K.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          b(De, {
            variant: "secondary",
            onClick: B[3] || (B[3] = (K) => a("close"))
          }, {
            default: h(() => [...B[17] || (B[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), L(De, {
            key: 0,
            variant: "primary",
            onClick: ke
          }, {
            default: h(() => [...B[18] || (B[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(Yt, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: B[5] || (B[5] = (K) => g.value = !1)
      }, {
        content: h(() => [...B[19] || (B[19] = [
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
}), Wp = /* @__PURE__ */ xe(Bp, [["__scopeId", "data-v-543076d9"]]), rt = co({
  items: [],
  status: "idle"
});
let ws = null;
function tc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ba(e) {
  return rt.items.find((t) => t.id === e);
}
async function ho() {
  if (rt.status === "downloading") return;
  const e = rt.items.find((t) => t.status === "queued");
  if (!e) {
    rt.status = "idle";
    return;
  }
  rt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Gp(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", ho();
  }
}
async function Gp(e) {
  return new Promise((t, o) => {
    ws && (ws.close(), ws = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ws = l;
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
            const _ = u, C = (_ - r) / 1e3, x = e.downloaded - c;
            if (x > 0 && C > 0)
              if (e.speed = x / C, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), ws = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), ws = null, o(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), ws = null, d || o(new Error("Connection lost"));
    };
  });
}
async function jp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: tc(),
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
function Lo() {
  function e(x) {
    for (const S of x) {
      if (rt.items.some(
        (E) => E.url === S.url && E.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const T = {
        id: tc(),
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
      rt.items.push(T);
    }
    rt.status === "idle" && ho();
  }
  async function t(x) {
    const S = Ba(x);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ws && (ws.close(), ws = null), S.status = "failed", S.error = "Cancelled by user", rt.status = "idle", ho();
      } else if (S.status === "queued") {
        const P = rt.items.findIndex((T) => T.id === x);
        P >= 0 && rt.items.splice(P, 1);
      }
    }
  }
  function o(x) {
    const S = Ba(x);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, rt.status === "idle" && ho());
  }
  function a(x) {
    const S = Ba(x);
    !S || S.status !== "paused" || (S.status = "queued", rt.status === "idle" && ho());
  }
  function l() {
    const x = rt.items.filter((S) => S.status === "paused");
    for (const S of x)
      S.status = "queued";
    rt.status === "idle" && ho();
  }
  function r(x) {
    const S = rt.items.findIndex((P) => P.id === x);
    S >= 0 && ["completed", "failed", "paused"].includes(rt.items[S].status) && rt.items.splice(S, 1);
  }
  function c() {
    rt.items = rt.items.filter((x) => x.status !== "completed");
  }
  function u() {
    rt.items = rt.items.filter((x) => x.status !== "failed");
  }
  const d = R(
    () => rt.items.find((x) => x.status === "downloading")
  ), v = R(
    () => rt.items.filter((x) => x.status === "queued")
  ), f = R(
    () => rt.items.filter((x) => x.status === "completed")
  ), p = R(
    () => rt.items.filter((x) => x.status === "failed")
  ), w = R(
    () => rt.items.filter((x) => x.status === "paused")
  ), g = R(() => rt.items.length > 0), _ = R(
    () => rt.items.filter((x) => x.status === "queued" || x.status === "downloading").length
  ), C = R(
    () => rt.items.some((x) => x.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Un(rt),
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
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: jp
  };
}
function sc() {
  const e = k(null), t = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function c(P, T) {
    var N;
    if (!((N = window.app) != null && N.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(P, T);
    if (!E.ok) {
      const A = await E.json().catch(() => ({})), H = A.error || A.message || `Request failed: ${E.status}`;
      throw new Error(H);
    }
    return E.json();
  }
  async function u(P) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Ao() || (T = await c(
        `/v2/comfygit/workflow/${P}/analyze`,
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
  async function d(P, T, E, N) {
    l.value = !0, r.value = null;
    try {
      let A;
      if (!Ao()) {
        const H = Object.fromEntries(T), M = Object.fromEntries(E), V = N ? Array.from(N) : [];
        A = await c(
          `/v2/comfygit/workflow/${P}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: H,
              model_choices: M,
              skipped_packages: V
            })
          }
        );
      }
      return t.value = A, A;
    } catch (A) {
      const H = A instanceof Error ? A.message : "Unknown error occurred";
      throw r.value = H, A;
    } finally {
      l.value = !1;
    }
  }
  async function v(P, T = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: P, limit: T })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const N = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = N, E;
    } finally {
      l.value = !1;
    }
  }
  async function f(P, T = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: P, limit: T })
        }
      )), a.value = E.results, E.results;
    } catch (E) {
      const N = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = N, E;
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
  async function g(P) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Ao(), await _(P);
    } catch (T) {
      const E = T instanceof Error ? T.message : "Failed to install nodes";
      throw p.installError = E, T;
    }
  }
  async function _(P) {
    var E;
    const T = await c(
      `/v2/comfygit/workflow/${P}/install`,
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
      const N = new Map(((E = T.failed) == null ? void 0 : E.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < p.nodesToInstall.length; A++) {
        const H = p.nodesToInstall[A], M = N.get(H);
        p.nodeInstallProgress.completedNodes.push({
          node_id: H,
          success: !M,
          error: M
        });
      }
    }
    return p.nodesInstalled = T.nodes_installed, p.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (p.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function C(P, T, E) {
    w(), p.phase = "resolving", r.value = null;
    const N = Object.fromEntries(T), A = Object.fromEntries(E);
    try {
      const H = await fetch(`/v2/comfygit/workflow/${P}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: A
        })
      });
      if (!H.ok)
        throw new Error(`Request failed: ${H.status}`);
      if (!H.body)
        throw new Error("No response body");
      const M = H.body.getReader(), V = new TextDecoder();
      let ae = "";
      for (; ; ) {
        const { done: ce, value: ue } = await M.read();
        if (ce) break;
        ae += V.decode(ue, { stream: !0 });
        const ke = ae.split(`

`);
        ae = ke.pop() || "";
        for (const Z of ke) {
          if (!Z.trim()) continue;
          const B = Z.split(`
`);
          let K = "", Re = "";
          for (const X of B)
            X.startsWith("event: ") ? K = X.slice(7) : X.startsWith("data: ") && (Re = X.slice(6));
          if (Re)
            try {
              const X = JSON.parse(Re);
              x(K, X);
            } catch (X) {
              console.warn("Failed to parse SSE event:", X);
            }
        }
      }
    } catch (H) {
      const M = H instanceof Error ? H.message : "Unknown error occurred";
      throw r.value = M, p.error = M, p.phase = "error", H;
    }
  }
  function x(P, T) {
    switch (P) {
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
  function S(P, T) {
    const { addToQueue: E } = Lo(), N = T.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: P,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return N.length > 0 && E(N), N.length;
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
    applyResolutionWithProgress: C,
    installNodes: g,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const Hp = { class: "resolution-stepper" }, qp = { class: "stepper-header" }, Kp = ["onClick"], Jp = {
  key: 0,
  class: "step-icon"
}, Qp = {
  key: 1,
  class: "step-number"
}, Yp = { class: "step-label" }, Xp = {
  key: 0,
  class: "step-connector"
}, Zp = { class: "stepper-content" }, eg = /* @__PURE__ */ be({
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
    return (v, f) => (n(), i("div", Hp, [
      s("div", qp, [
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
            l(p.id) ? (n(), i("span", Jp, "✓")) : (n(), i("span", Qp, m(w + 1), 1))
          ], 2),
          s("div", Yp, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Xp)) : y("", !0)
        ], 10, Kp))), 128))
      ]),
      s("div", Zp, [
        st(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), tg = /* @__PURE__ */ xe(eg, [["__scopeId", "data-v-2a7b3af8"]]), sg = /* @__PURE__ */ be({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = R(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = R(() => `confidence-${o.value}`), l = R(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Ve(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), qn = /* @__PURE__ */ xe(sg, [["__scopeId", "data-v-17ec4b80"]]), og = { class: "node-info" }, ng = { class: "node-info-text" }, ag = { class: "item-body" }, lg = {
  key: 0,
  class: "resolved-state"
}, ig = {
  key: 1,
  class: "multiple-options"
}, rg = {
  key: 0,
  class: "installed-packs-section"
}, cg = { class: "installed-packs-list" }, ug = ["onClick"], dg = { class: "installed-pack-name" }, mg = { class: "installed-pack-source" }, fg = { class: "options-list" }, vg = ["onClick"], pg = ["name", "value", "checked", "onChange"], gg = { class: "option-content" }, hg = { class: "option-header" }, yg = { class: "option-package-id" }, wg = {
  key: 0,
  class: "option-title"
}, _g = { class: "option-meta" }, kg = {
  key: 0,
  class: "installed-badge"
}, bg = { class: "action-buttons" }, $g = {
  key: 2,
  class: "unresolved"
}, Cg = {
  key: 0,
  class: "installed-packs-section"
}, xg = { class: "installed-packs-list" }, Sg = ["onClick"], Ig = { class: "installed-pack-name" }, Eg = { class: "installed-pack-source" }, Tg = {
  key: 1,
  class: "searching-state"
}, Mg = { class: "options-list" }, Pg = ["onClick"], Rg = ["name", "value"], Lg = { class: "option-content" }, Dg = { class: "option-header" }, Ng = { class: "option-package-id" }, Og = {
  key: 0,
  class: "option-description"
}, Ug = { class: "option-meta" }, Ag = {
  key: 0,
  class: "installed-badge"
}, zg = {
  key: 3,
  class: "unresolved-message"
}, Fg = { class: "action-buttons" }, Vg = /* @__PURE__ */ be({
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
    const c = R(() => o.installedNodePacks || []), u = R(() => {
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
      a("option-selected", f);
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
    return (f, p) => (n(), i("div", {
      class: Ve(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", og, [
        s("span", ng, [
          p[7] || (p[7] = $("Node type: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ve(["status-badge", u.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", ag, [
        r.value ? (n(), i("div", lg, [
          b(De, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", ig, [
          c.value.length > 0 ? (n(), i("div", rg, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", cg, [
              (n(!0), i(j, null, he(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", dg, m(w.package_id), 1),
                s("span", mg, m(v(w.source)), 1)
              ], 8, ug))), 128))
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
              }, null, 40, pg),
              s("div", gg, [
                s("div", hg, [
                  s("span", yg, m(w.package_id), 1),
                  b(qn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (n(), i("div", wg, m(w.title), 1)) : y("", !0),
                s("div", _g, [
                  w.is_installed ? (n(), i("span", kg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, vg))), 128))
          ]),
          s("div", bg, [
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", $g, [
          c.value.length > 0 ? (n(), i("div", Cg, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", xg, [
              (n(!0), i(j, null, he(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", Ig, m(w.package_id), 1),
                s("span", Eg, m(v(w.source)), 1)
              ], 8, Sg))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", Tg, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(j, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", Mg, [
              (n(!0), i(j, null, he(e.searchResults.slice(0, 5), (w, g) => (n(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => a("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Rg),
                s("div", Lg, [
                  s("div", Dg, [
                    s("span", Ng, m(w.package_id), 1),
                    b(qn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (n(), i("div", Og, m(l(w.description)), 1)) : y("", !0),
                  s("div", Ug, [
                    w.is_installed ? (n(), i("span", Ag, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Pg))), 128))
            ])
          ], 64)) : (n(), i("div", zg, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", Fg, [
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => a("search"))
            }, {
              default: h(() => {
                var w;
                return [
                  $(m((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => a("mark-optional"))
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
}), Bg = /* @__PURE__ */ xe(Vg, [["__scopeId", "data-v-fb0bbf03"]]), Wg = { class: "item-navigator" }, Gg = { class: "nav-item-info" }, jg = ["title"], Hg = { class: "nav-controls" }, qg = { class: "nav-arrows" }, Kg = ["disabled"], Jg = ["disabled"], Qg = { class: "nav-position" }, Yg = /* @__PURE__ */ be({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", Wg, [
      s("div", Gg, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, jg)
      ]),
      s("div", Hg, [
        s("div", qg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Kg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Jg)
        ]),
        s("span", Qg, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), oc = /* @__PURE__ */ xe(Yg, [["__scopeId", "data-v-74af7920"]]), Xg = ["type", "value", "placeholder", "disabled"], Zg = {
  key: 0,
  class: "base-input-error"
}, eh = /* @__PURE__ */ be({
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
          o[1] || (o[1] = ds((a) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ds((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Xg),
      e.error ? (n(), i("span", Zg, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ xe(eh, [["__scopeId", "data-v-9ba02cdc"]]), th = { class: "node-resolution-step" }, sh = {
  key: 0,
  class: "auto-resolved-section"
}, oh = { class: "section-header" }, nh = { class: "stat-badge" }, ah = { class: "resolved-packages-list" }, lh = { class: "package-info" }, ih = { class: "package-id" }, rh = { class: "node-count" }, ch = { class: "package-actions" }, uh = {
  key: 0,
  class: "status-badge install"
}, dh = {
  key: 1,
  class: "status-badge skip"
}, mh = ["onClick"], fh = {
  key: 1,
  class: "section-divider"
}, vh = { class: "step-header" }, ph = { class: "stat-badge" }, gh = {
  key: 1,
  class: "step-body"
}, hh = {
  key: 3,
  class: "empty-state"
}, yh = { class: "node-modal-body" }, wh = { class: "node-search-results-container" }, _h = {
  key: 0,
  class: "node-search-results"
}, kh = ["onClick"], bh = { class: "node-result-header" }, $h = { class: "node-result-package-id" }, Ch = {
  key: 0,
  class: "node-result-description"
}, xh = {
  key: 1,
  class: "node-empty-state"
}, Sh = {
  key: 2,
  class: "node-empty-state"
}, Ih = {
  key: 3,
  class: "node-empty-state"
}, Eh = { class: "node-manual-entry-modal" }, Th = { class: "node-modal-body" }, Mh = { class: "node-modal-actions" }, Ph = /* @__PURE__ */ be({
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
    const o = e, a = t, { searchNodes: l } = sc(), r = k(0), c = k(!1), u = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(/* @__PURE__ */ new Map()), g = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && ye(), _.value = !1;
    }
    const x = R(() => o.nodes[r.value]), S = R(() => o.nodes.filter((te) => o.nodeChoices.has(te.node_type)).length), P = R(() => x.value ? w.value.get(x.value.node_type) || [] : []), T = R(() => x.value ? g.value.has(x.value.node_type) : !1);
    yt(x, async (te) => {
      var oe;
      te && ((oe = te.options) != null && oe.length || w.value.has(te.node_type) || g.value.has(te.node_type) || o.nodeChoices.has(te.node_type) || await E(te.node_type));
    }, { immediate: !0 });
    async function E(te) {
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
    const N = R(() => o.autoResolvedPackages.filter((te) => !o.skippedPackages.has(te.package_id)).length);
    function A(te) {
      return o.skippedPackages.has(te);
    }
    function H(te) {
      a("package-skip", te);
    }
    const M = R(() => {
      var oe;
      if (!x.value) return "not-found";
      const te = o.nodeChoices.get(x.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (oe = x.value.options) != null && oe.length ? "ambiguous" : "not-found";
    }), V = R(() => {
      var oe;
      if (!x.value) return;
      const te = o.nodeChoices.get(x.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return te.package_id ? `→ ${te.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (oe = x.value.options) != null && oe.length ? `${x.value.options.length} matches` : "Not Found";
    });
    function ae(te) {
      te >= 0 && te < o.nodes.length && (r.value = te);
    }
    function ce() {
      var te;
      for (let oe = r.value + 1; oe < o.nodes.length; oe++) {
        const Me = o.nodes[oe];
        if (!((te = o.nodeChoices) != null && te.has(Me.node_type))) {
          ae(oe);
          return;
        }
      }
    }
    function ue() {
      x.value && (a("mark-optional", x.value.node_type), Pt(() => ce()));
    }
    function ke() {
      x.value && (a("skip", x.value.node_type), Pt(() => ce()));
    }
    function Z(te) {
      x.value && (a("option-selected", x.value.node_type, te), Pt(() => ce()));
    }
    function B() {
      x.value && a("clear-choice", x.value.node_type);
    }
    function K() {
      x.value && (d.value = x.value.node_type, f.value = P.value, c.value = !0, ve(d.value));
    }
    function Re() {
      v.value = "", u.value = !0;
    }
    function X(te) {
      x.value && (a("manual-entry", x.value.node_type, te), Pt(() => ce()));
    }
    function ye() {
      c.value = !1, d.value = "", f.value = [];
    }
    function U() {
      u.value = !1, v.value = "";
    }
    let fe = null;
    function Le() {
      fe && clearTimeout(fe), fe = setTimeout(() => {
        ve(d.value);
      }, 300);
    }
    async function ve(te) {
      if (!te.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(te, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function ee(te) {
      x.value && (a("manual-entry", x.value.node_type, te.package_id), ye(), Pt(() => ce()));
    }
    function Q(te) {
      x.value && (a("manual-entry", x.value.node_type, te.package_id), Pt(() => ce()));
    }
    function we() {
      !x.value || !v.value.trim() || (a("manual-entry", x.value.node_type, v.value.trim()), U(), Pt(() => ce()));
    }
    return (te, oe) => {
      var Me, me;
      return n(), i("div", th, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", sh, [
          s("div", oh, [
            oe[6] || (oe[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", nh, m(N.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", ah, [
            (n(!0), i(j, null, he(e.autoResolvedPackages, (le) => (n(), i("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", lh, [
                s("code", ih, m(le.package_id), 1),
                s("span", rh, m(le.node_types_count) + " node type" + m(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", ch, [
                A(le.package_id) ? (n(), i("span", dh, " SKIPPED ")) : (n(), i("span", uh, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (I) => H(le.package_id)
                }, m(A(le.package_id) ? "Include" : "Skip"), 9, mh)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", fh)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(j, { key: 2 }, [
          s("div", vh, [
            oe[7] || (oe[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", ph, m(S.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          x.value ? (n(), L(oc, {
            key: 0,
            "item-name": x.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: oe[0] || (oe[0] = (le) => ae(r.value - 1)),
            onNext: oe[1] || (oe[1] = (le) => ae(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          x.value ? (n(), i("div", gh, [
            b(Bg, {
              "node-type": x.value.node_type,
              "has-multiple-options": !!((Me = x.value.options) != null && Me.length),
              options: x.value.options,
              choice: (me = e.nodeChoices) == null ? void 0 : me.get(x.value.node_type),
              status: M.value,
              "status-label": V.value,
              "search-results": P.value,
              "is-searching": T.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ue,
              onSkip: ke,
              onManualEntry: Re,
              onSearch: K,
              onOptionSelected: Z,
              onClearChoice: B,
              onSearchResultSelected: Q,
              onInstalledPackSelected: X
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", hh, [...oe[8] || (oe[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), L(Lt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: oe[4] || (oe[4] = vt((le) => _.value = !0, ["self"])),
            onMouseup: vt(C, ["self"])
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
              s("div", yh, [
                b(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Le
                }, null, 8, ["modelValue"]),
                s("div", wh, [
                  f.value.length > 0 ? (n(), i("div", _h, [
                    (n(!0), i(j, null, he(f.value, (le) => (n(), i("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (I) => ee(le)
                    }, [
                      s("div", bh, [
                        s("code", $h, m(le.package_id), 1),
                        le.match_confidence ? (n(), L(qn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (n(), i("div", Ch, m(le.description), 1)) : y("", !0)
                    ], 8, kh))), 128))
                  ])) : p.value ? (n(), i("div", xh, "Searching...")) : d.value ? (n(), i("div", Sh, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", Ih, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), L(Lt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: vt(U, ["self"])
          }, [
            s("div", Eh, [
              s("div", { class: "node-modal-header" }, [
                oe[10] || (oe[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              s("div", Th, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": oe[5] || (oe[5] = (le) => v.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", Mh, [
                  b(De, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: h(() => [...oe[11] || (oe[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(De, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: we
                  }, {
                    default: h(() => [...oe[12] || (oe[12] = [
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
}), Rh = /* @__PURE__ */ xe(Ph, [["__scopeId", "data-v-94c6a438"]]), Lh = { class: "node-info" }, Dh = { class: "node-info-text" }, Nh = { class: "item-body" }, Oh = {
  key: 0,
  class: "resolved-state"
}, Uh = {
  key: 1,
  class: "multiple-options"
}, Ah = { class: "options-list" }, zh = ["onClick"], Fh = ["name", "value", "checked", "onChange"], Vh = { class: "option-content" }, Bh = { class: "option-header" }, Wh = { class: "option-filename" }, Gh = { class: "option-meta" }, jh = { class: "option-size" }, Hh = { class: "option-category" }, qh = { class: "option-path" }, Kh = { class: "action-buttons" }, Jh = {
  key: 2,
  class: "unresolved"
}, Qh = { class: "action-buttons" }, Yh = /* @__PURE__ */ be({
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
      class: Ve(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", Lh, [
        s("span", Dh, [
          v[7] || (v[7] = $("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ve(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Nh, [
        l.value ? (n(), i("div", Oh, [
          b(De, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => a("clear-choice"))
          }, {
            default: h(() => [...v[8] || (v[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Uh, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", Ah, [
            (n(!0), i(j, null, he(e.options, (f, p) => (n(), i("label", {
              key: f.model.hash,
              class: Ve(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, Fh),
              s("div", Vh, [
                s("div", Bh, [
                  s("span", Wh, m(f.model.filename), 1),
                  b(qn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", Gh, [
                  s("span", jh, m(u(f.model.size)), 1),
                  s("span", Hh, m(f.model.category), 1)
                ]),
                s("div", qh, m(f.model.relative_path), 1)
              ])
            ], 10, zh))), 128))
          ]),
          s("div", Kh, [
            b(De, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => a("search"))
            }, {
              default: h(() => [...v[9] || (v[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => a("download-url"))
            }, {
              default: h(() => [...v[10] || (v[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => a("mark-optional"))
            }, {
              default: h(() => [...v[11] || (v[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Jh, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Qh, [
            b(De, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => a("search"))
            }, {
              default: h(() => [...v[13] || (v[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => a("download-url"))
            }, {
              default: h(() => [...v[14] || (v[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => a("mark-optional"))
            }, {
              default: h(() => [...v[15] || (v[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Xh = /* @__PURE__ */ xe(Yh, [["__scopeId", "data-v-8a82fefa"]]), Zh = { class: "model-resolution-step" }, ey = { class: "step-header" }, ty = { class: "step-info" }, sy = { class: "step-title" }, oy = { class: "step-description" }, ny = { class: "stat-badge" }, ay = {
  key: 1,
  class: "step-body"
}, ly = {
  key: 2,
  class: "empty-state"
}, iy = { class: "model-search-modal" }, ry = { class: "model-modal-body" }, cy = {
  key: 0,
  class: "model-search-results"
}, uy = ["onClick"], dy = { class: "model-result-header" }, my = { class: "model-result-filename" }, fy = { class: "model-result-meta" }, vy = { class: "model-result-category" }, py = { class: "model-result-size" }, gy = {
  key: 0,
  class: "model-result-path"
}, hy = {
  key: 1,
  class: "model-no-results"
}, yy = {
  key: 2,
  class: "model-searching"
}, wy = { class: "model-download-url-modal" }, _y = { class: "model-modal-body" }, ky = { class: "model-input-group" }, by = { class: "model-input-group" }, $y = { class: "model-modal-actions" }, Cy = /* @__PURE__ */ be({
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
    function a(X) {
      var ye;
      return X && ((ye = o[X]) == null ? void 0 : ye[0]) || null;
    }
    const l = e, r = t, c = k(0), u = k(!1), d = k(!1), v = k(""), f = k(""), p = k(""), w = k([]), g = k(!1), _ = R(() => l.models[c.value]), C = R(() => l.models.some((X) => X.is_download_intent)), x = R(() => l.models.filter(
      (X) => l.modelChoices.has(X.filename) || X.is_download_intent
    ).length), S = R(() => {
      var ye;
      if (!_.value) return "";
      const X = a((ye = _.value.reference) == null ? void 0 : ye.node_type);
      return X ? `${X}/${_.value.filename}` : "";
    }), P = R(() => {
      var ye;
      if (!_.value) return "not-found";
      const X = l.modelChoices.get(_.value.filename);
      if (X)
        switch (X.action) {
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
    }), T = R(() => {
      var ye, U;
      if (!_.value) return;
      const X = l.modelChoices.get(_.value.filename);
      if (X)
        switch (X.action) {
          case "select":
            return (ye = X.selected_model) != null && ye.filename ? `→ ${X.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (U = _.value.options) != null && U.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function E(X) {
      X >= 0 && X < l.models.length && (c.value = X);
    }
    function N() {
      var X;
      for (let ye = c.value + 1; ye < l.models.length; ye++) {
        const U = l.models[ye];
        if (!U.is_download_intent && !((X = l.modelChoices) != null && X.has(U.filename))) {
          E(ye);
          return;
        }
      }
    }
    function A() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => N()));
    }
    function H() {
      _.value && (r("skip", _.value.filename), Pt(() => N()));
    }
    function M(X) {
      _.value && (r("option-selected", _.value.filename, X), Pt(() => N()));
    }
    function V() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ae() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function ce() {
      _.value && (f.value = _.value.download_source || "", p.value = _.value.target_path || S.value, d.value = !0);
    }
    function ue() {
      u.value = !1, v.value = "", w.value = [];
    }
    function ke() {
      d.value = !1, f.value = "", p.value = "";
    }
    function Z() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function B(X) {
      _.value && (ue(), Pt(() => N()));
    }
    function K() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), ke(), Pt(() => N()));
    }
    function Re(X) {
      if (!X) return "Unknown";
      const ye = X / (1024 * 1024 * 1024);
      return ye >= 1 ? `${ye.toFixed(2)} GB` : `${(X / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (X, ye) => {
      var U, fe, Le;
      return n(), i("div", Zh, [
        s("div", ey, [
          s("div", ty, [
            s("h3", sy, m(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", oy, m(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", ny, m(x.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), L(oc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ye[0] || (ye[0] = (ve) => E(c.value - 1)),
          onNext: ye[1] || (ye[1] = (ve) => E(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (n(), i("div", ay, [
          b(Xh, {
            filename: _.value.filename,
            "node-type": ((U = _.value.reference) == null ? void 0 : U.node_type) || "Unknown",
            "has-multiple-options": !!((fe = _.value.options) != null && fe.length),
            options: _.value.options,
            choice: (Le = e.modelChoices) == null ? void 0 : Le.get(_.value.filename),
            status: P.value,
            "status-label": T.value,
            onMarkOptional: A,
            onSkip: H,
            onDownloadUrl: ce,
            onSearch: ae,
            onOptionSelected: M,
            onClearChoice: V
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", ly, [...ye[5] || (ye[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (n(), L(Lt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(ue, ["self"])
          }, [
            s("div", iy, [
              s("div", { class: "model-modal-header" }, [
                ye[6] || (ye[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ue
                }, "✕")
              ]),
              s("div", ry, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (ve) => v.value = ve),
                  placeholder: "Search by filename, category...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", cy, [
                  (n(!0), i(j, null, he(w.value, (ve) => (n(), i("div", {
                    key: ve.hash,
                    class: "model-search-result-item",
                    onClick: (ee) => B()
                  }, [
                    s("div", dy, [
                      s("code", my, m(ve.filename), 1)
                    ]),
                    s("div", fy, [
                      s("span", vy, m(ve.category), 1),
                      s("span", py, m(Re(ve.size)), 1)
                    ]),
                    ve.relative_path ? (n(), i("div", gy, m(ve.relative_path), 1)) : y("", !0)
                  ], 8, uy))), 128))
                ])) : v.value && !g.value ? (n(), i("div", hy, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (n(), i("div", yy, "Searching...")) : y("", !0)
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
            s("div", wy, [
              s("div", { class: "model-modal-header" }, [
                ye[7] || (ye[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ke
                }, "✕")
              ]),
              s("div", _y, [
                s("div", ky, [
                  ye[8] || (ye[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": ye[3] || (ye[3] = (ve) => f.value = ve),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", by, [
                  ye[9] || (ye[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ye[4] || (ye[4] = (ve) => p.value = ve),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", $y, [
                  b(De, {
                    variant: "secondary",
                    onClick: ke
                  }, {
                    default: h(() => [...ye[10] || (ye[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(De, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: K
                  }, {
                    default: h(() => [...ye[11] || (ye[11] = [
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
}), xy = /* @__PURE__ */ xe(Cy, [["__scopeId", "data-v-5c700bfa"]]), Sy = { class: "applying-step" }, Iy = {
  key: 0,
  class: "phase-content"
}, Ey = {
  key: 1,
  class: "phase-content"
}, Ty = { class: "phase-description" }, My = { class: "overall-progress" }, Py = { class: "progress-bar" }, Ry = { class: "progress-label" }, Ly = { class: "install-list" }, Dy = { class: "install-icon" }, Ny = { key: 0 }, Oy = {
  key: 1,
  class: "spinner"
}, Uy = { key: 2 }, Ay = { key: 3 }, zy = {
  key: 0,
  class: "install-error"
}, Fy = {
  key: 2,
  class: "phase-content"
}, Vy = { class: "phase-header" }, By = { class: "phase-title" }, Wy = { class: "completion-summary" }, Gy = {
  key: 0,
  class: "summary-item success"
}, jy = { class: "summary-text" }, Hy = {
  key: 1,
  class: "summary-item error"
}, qy = { class: "summary-text" }, Ky = {
  key: 2,
  class: "failed-list"
}, Jy = { class: "failed-node-id" }, Qy = { class: "failed-error" }, Yy = {
  key: 4,
  class: "summary-item success"
}, Xy = {
  key: 5,
  class: "restart-prompt"
}, Zy = {
  key: 3,
  class: "phase-content error"
}, e1 = { class: "error-message" }, t1 = /* @__PURE__ */ be({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = R(() => {
      var v, f;
      const u = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || t.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((f = t.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), a = R(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = R(() => a.value.length > 0);
    function r(u, d) {
      var f, p;
      const v = (f = t.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((w) => w.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, v;
      return (v = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, d) => {
      var v, f, p, w;
      return n(), i("div", Sy, [
        e.progress.phase === "resolving" ? (n(), i("div", Iy, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", Ey, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", Ty, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", My, [
            s("div", Py, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", Ry, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", Ly, [
            (n(!0), i(j, null, he(e.progress.nodesToInstall, (g, _) => (n(), i("div", {
              key: g,
              class: Ve(["install-item", r(g, _)])
            }, [
              s("span", Dy, [
                r(g, _) === "pending" ? (n(), i("span", Ny, "○")) : r(g, _) === "installing" ? (n(), i("span", Oy, "◌")) : r(g, _) === "complete" ? (n(), i("span", Uy, "✓")) : r(g, _) === "failed" ? (n(), i("span", Ay, "✗")) : y("", !0)
              ]),
              s("code", null, m(g), 1),
              c(g) ? (n(), i("span", zy, m(c(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", Fy, [
          s("div", Vy, [
            s("span", {
              class: Ve(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", By, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", Wy, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Gy, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", jy, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Hy, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", qy, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Ky, [
              (n(!0), i(j, null, he(a.value, (g) => (n(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                s("code", Jy, m(g.node_id), 1),
                s("span", Qy, m(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => u.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", Yy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Xy, [
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
        ])) : e.progress.phase === "error" ? (n(), i("div", Zy, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", e1, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), s1 = /* @__PURE__ */ xe(t1, [["__scopeId", "data-v-5efaae58"]]), o1 = {
  key: 0,
  class: "loading-state"
}, n1 = {
  key: 1,
  class: "wizard-content"
}, a1 = {
  key: 0,
  class: "step-content"
}, l1 = { class: "analysis-summary" }, i1 = { class: "analysis-header" }, r1 = { class: "summary-description" }, c1 = { class: "stats-grid" }, u1 = { class: "stat-card" }, d1 = { class: "stat-items" }, m1 = {
  key: 0,
  class: "stat-item success"
}, f1 = { class: "stat-count" }, v1 = {
  key: 1,
  class: "stat-item info"
}, p1 = { class: "stat-count" }, g1 = {
  key: 2,
  class: "stat-item warning"
}, h1 = { class: "stat-count" }, y1 = {
  key: 3,
  class: "stat-item warning"
}, w1 = { class: "stat-count" }, _1 = {
  key: 4,
  class: "stat-item warning"
}, k1 = { class: "stat-count" }, b1 = {
  key: 5,
  class: "stat-item error"
}, $1 = { class: "stat-count" }, C1 = { class: "stat-card" }, x1 = { class: "stat-items" }, S1 = { class: "stat-item success" }, I1 = { class: "stat-count" }, E1 = {
  key: 0,
  class: "stat-item info"
}, T1 = { class: "stat-count" }, M1 = {
  key: 1,
  class: "stat-item warning"
}, P1 = { class: "stat-count" }, R1 = {
  key: 2,
  class: "stat-item warning"
}, L1 = { class: "stat-count" }, D1 = {
  key: 3,
  class: "stat-item error"
}, N1 = { class: "stat-count" }, O1 = {
  key: 0,
  class: "status-message warning"
}, U1 = { class: "status-text" }, A1 = {
  key: 1,
  class: "status-message warning"
}, z1 = { class: "status-text" }, F1 = {
  key: 2,
  class: "status-message info"
}, V1 = { class: "status-text" }, B1 = {
  key: 3,
  class: "status-message info"
}, W1 = { class: "status-text" }, G1 = {
  key: 4,
  class: "status-message info"
}, j1 = { class: "status-text" }, H1 = {
  key: 5,
  class: "status-message warning"
}, q1 = { class: "status-text" }, K1 = {
  key: 6,
  class: "status-message success"
}, J1 = {
  key: 7,
  class: "category-mismatch-section"
}, Q1 = { class: "mismatch-list" }, Y1 = { class: "mismatch-path" }, X1 = { class: "mismatch-target" }, Z1 = {
  key: 8,
  class: "category-mismatch-section"
}, ew = { class: "mismatch-list" }, tw = { class: "mismatch-path" }, sw = { class: "status-text" }, ow = {
  key: 1,
  class: "step-content node-step-content"
}, nw = {
  key: 0,
  class: "community-node-section"
}, aw = { class: "community-node-header" }, lw = { class: "community-node-title" }, iw = { class: "community-node-list" }, rw = { class: "community-node-info" }, cw = { class: "community-node-heading" }, uw = { class: "item-name" }, dw = { class: "community-node-package" }, mw = { class: "community-node-meta" }, fw = { class: "community-node-guidance" }, vw = { key: 0 }, pw = { class: "community-choice-status" }, gw = { class: "community-node-actions" }, hw = {
  key: 3,
  class: "step-content"
}, yw = { class: "review-summary" }, ww = { class: "review-stats" }, _w = { class: "review-stat" }, kw = { class: "stat-value" }, bw = { class: "review-stat" }, $w = { class: "stat-value" }, Cw = { class: "review-stat" }, xw = { class: "stat-value" }, Sw = { class: "review-stat" }, Iw = { class: "stat-value" }, Ew = {
  key: 0,
  class: "review-section"
}, Tw = { class: "section-title" }, Mw = { class: "review-items" }, Pw = { class: "item-name" }, Rw = { class: "item-choice" }, Lw = {
  key: 0,
  class: "choice-badge install"
}, Dw = {
  key: 1,
  class: "choice-badge skip"
}, Nw = {
  key: 1,
  class: "review-section"
}, Ow = { class: "section-title" }, Uw = { class: "review-items" }, Aw = { class: "item-name" }, zw = { class: "item-choice" }, Fw = {
  key: 0,
  class: "choice-badge install"
}, Vw = {
  key: 1,
  class: "choice-badge optional"
}, Bw = {
  key: 2,
  class: "choice-badge skip"
}, Ww = {
  key: 2,
  class: "review-section"
}, Gw = { class: "section-title" }, jw = { class: "review-items" }, Hw = { class: "item-name" }, qw = { class: "item-choice" }, Kw = {
  key: 0,
  class: "choice-badge install"
}, Jw = {
  key: 1,
  class: "choice-badge optional"
}, Qw = {
  key: 2,
  class: "choice-badge skip"
}, Yw = {
  key: 1,
  class: "choice-badge pending"
}, Xw = {
  key: 3,
  class: "review-section"
}, Zw = { class: "section-title" }, e0 = { class: "review-items download-details" }, t0 = { class: "download-info" }, s0 = { class: "item-name" }, o0 = { class: "download-meta" }, n0 = { class: "download-path" }, a0 = ["title"], l0 = {
  key: 4,
  class: "review-section"
}, i0 = { class: "section-title" }, r0 = { class: "review-items" }, c0 = { class: "item-name" }, u0 = { class: "item-choice" }, d0 = {
  key: 0,
  class: "choice-badge install"
}, m0 = {
  key: 1,
  class: "choice-badge download"
}, f0 = {
  key: 2,
  class: "choice-badge optional"
}, v0 = {
  key: 3,
  class: "choice-badge skip"
}, p0 = {
  key: 4,
  class: "choice-badge skip"
}, g0 = {
  key: 1,
  class: "choice-badge download"
}, h0 = {
  key: 2,
  class: "choice-badge pending"
}, y0 = {
  key: 5,
  class: "no-choices"
}, w0 = /* @__PURE__ */ be({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = sc(), { loadPendingDownloads: f } = Lo(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ct(), _ = k(null), C = k([]), x = k(!1), S = k(!1), P = k(null), T = k("analysis"), E = k([]), N = k(/* @__PURE__ */ new Map()), A = k(/* @__PURE__ */ new Map()), H = k(/* @__PURE__ */ new Set()), M = R(() => {
      const re = [
        { id: "analysis", label: "Analysis" }
      ];
      return (Z.value || Re.value || X.value) && re.push({ id: "nodes", label: "Nodes" }), B.value && re.push({ id: "models", label: "Models" }), re.push({ id: "review", label: "Review" }), T.value === "applying" && re.push({ id: "applying", label: "Applying" }), re;
    }), V = R(() => _.value ? _.value.stats.needs_user_input : !1), ae = R(() => _.value ? _.value.nodes.version_gated || [] : []), ce = R(() => _.value ? _.value.nodes.uninstallable || [] : []), ue = R(() => ce.value.filter((re) => {
      var W;
      return !!((W = re.package) != null && W.package_id);
    })), ke = R(() => ae.value.length > 0), Z = R(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), B = R(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), K = R(() => _.value ? _.value.stats.download_intents > 0 : !1), Re = R(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), X = R(() => ue.value.length > 0), ye = R(() => _.value ? _.value.nodes.resolved.length : 0), U = R(() => _.value ? _.value.models.resolved.filter((re) => re.has_category_mismatch) : []), fe = R(() => U.value.length > 0), Le = R(() => Z.value || Re.value || X.value ? "nodes" : B.value ? "models" : "review"), ve = R(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((de) => !de.is_installed), W = /* @__PURE__ */ new Set();
      return re.filter((de) => W.has(de.package.package_id) ? !1 : (W.add(de.package.package_id), !0));
    }), ee = R(() => {
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
    }), Q = R(() => ve.value.filter((re) => !H.value.has(re.package.package_id))), we = R(() => _.value ? _.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), te = R(() => {
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
    }), oe = R(() => {
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
    }), Me = R(() => {
      const re = oe.value, W = we.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...re, ...W];
    }), me = R(() => we.value.filter((re) => {
      const W = A.value.get(re.filename);
      return W ? W.action === "download" : !0;
    }).map((re) => ({
      filename: re.filename,
      url: re.download_source,
      target_path: re.target_path
    })));
    function le(re, W = 50) {
      return re.length <= W ? re : re.slice(0, W - 3) + "...";
    }
    const I = R(() => {
      let re = Q.value.length;
      for (const W of N.value.values())
        W.action === "install" && re++;
      for (const W of A.value.values())
        W.action === "select" && re++;
      return re;
    }), F = R(() => {
      let re = 0;
      for (const W of A.value.values())
        W.action === "download" && re++;
      for (const W of we.value)
        A.value.get(W.filename) || re++;
      return re;
    }), ie = R(() => {
      let re = 0;
      for (const W of N.value.values())
        W.action === "optional" && re++;
      for (const W of A.value.values())
        W.action === "optional" && re++;
      return re;
    }), Ie = R(() => {
      let re = H.value.size;
      for (const W of N.value.values())
        W.action === "skip" && re++;
      for (const W of A.value.values())
        W.action === "skip" && re++;
      for (const W of te.value)
        N.value.has(W.node_type) || re++;
      for (const W of oe.value)
        A.value.has(W.filename) || re++;
      return re;
    }), $e = R(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, Z.value || X.value) {
        const W = te.value.length, de = ue.value.length, We = te.value.filter(
          (xt) => N.value.has(xt.node_type)
        ).length, dt = ue.value.filter(
          (xt) => N.value.has(xt.reference.node_type)
        ).length, Ct = W + de, it = We + dt;
        re.nodes = { resolved: it, total: Ct };
      }
      if (B.value) {
        const W = Me.value.length, de = Me.value.filter(
          (We) => A.value.has(We.filename) || We.is_download_intent
        ).length;
        re.models = { resolved: de, total: W };
      }
      if (re.review = { resolved: 1, total: 1 }, T.value === "applying") {
        const W = d.totalFiles || 1, de = d.completedFiles.length;
        re.applying = { resolved: de, total: W };
      }
      return re;
    });
    function Se(re) {
      T.value = re;
    }
    function Ae() {
      const re = M.value.findIndex((W) => W.id === T.value);
      re > 0 && (T.value = M.value[re - 1].id);
    }
    function Fe() {
      const re = M.value.findIndex((W) => W.id === T.value);
      re < M.value.length - 1 && (T.value = M.value[re + 1].id);
    }
    function Ne() {
      for (const re of ue.value) {
        const W = re.reference.node_type;
        N.value.has(W) || se(re, "registry");
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
      return re.filter((W) => W.installed && W.tracked).filter((W) => W.name !== "comfygit-manager").map((W) => ({
        package_id: W.registry_id || W.name,
        source: W.source
      })).filter((W, de, We) => We.findIndex((dt) => dt.package_id === W.package_id) === de).sort((W, de) => {
        const We = Ee(W.source) - Ee(de.source);
        return We !== 0 ? We : W.package_id.localeCompare(de.package_id);
      });
    }
    async function Be() {
      x.value = !0, P.value = null;
      try {
        const [re, W] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = re, C.value = Ke(W.nodes), Ne();
      } catch (re) {
        P.value = re instanceof Error ? re.message : "Failed to analyze workflow";
      } finally {
        x.value = !1;
      }
    }
    function pe() {
      E.value.includes("analysis") || E.value.push("analysis"), Z.value || Re.value || X.value ? T.value = "nodes" : B.value ? T.value = "models" : T.value = "review";
    }
    function J(re) {
      N.value.set(re, { action: "optional" });
    }
    function He(re) {
      N.value.set(re, { action: "skip" });
    }
    function Ce(re, W) {
      var We;
      const de = te.value.find((dt) => dt.node_type === re);
      (We = de == null ? void 0 : de.options) != null && We[W] && N.value.set(re, {
        action: "install",
        package_id: de.options[W].package_id
      });
    }
    function Ye(re, W) {
      N.value.set(re, {
        action: "install",
        package_id: W
      });
    }
    function ot(re) {
      N.value.delete(re);
    }
    function ze(re) {
      return N.value.get(re);
    }
    function O(re) {
      const W = ze(re);
      return W ? W.action === "optional" ? "Marked optional" : W.action === "skip" ? "Skipped" : W.action === "install" ? W.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function se(re, W) {
      var dt;
      const de = (dt = re.package) == null ? void 0 : dt.package_id;
      if (!de) return;
      const We = {
        action: "install",
        package_id: de,
        version: re.package.latest_version || null,
        install_source: W
      };
      W === "git" && re.package.repository && (We.repository = re.package.repository), N.value.set(re.reference.node_type, We);
    }
    function ge(re) {
      N.value.set(re, { action: "optional" });
    }
    function Je(re) {
      N.value.set(re, { action: "skip" });
    }
    function D(re) {
      H.value.has(re) ? H.value.delete(re) : H.value.add(re);
    }
    function z(re) {
      A.value.set(re, { action: "optional" });
    }
    function Y(re) {
      A.value.set(re, { action: "skip" });
    }
    function Oe(re, W) {
      var We;
      const de = oe.value.find((dt) => dt.filename === re);
      (We = de == null ? void 0 : de.options) != null && We[W] && A.value.set(re, {
        action: "select",
        selected_model: de.options[W].model
      });
    }
    function Ue(re, W, de) {
      A.value.set(re, {
        action: "download",
        url: W,
        target_path: de
      });
    }
    function Pe(re) {
      A.value.delete(re);
    }
    async function Ge(re) {
      try {
        await p(re);
      } catch (W) {
        P.value = W instanceof Error ? W.message : "Failed to open file location";
      }
    }
    async function nt() {
      var re;
      S.value = !0, P.value = null, v(), d.phase = "resolving", T.value = "applying";
      try {
        const W = await r(o.workflowName, N.value, A.value, H.value);
        W.models_to_download && W.models_to_download.length > 0 && u(o.workflowName, W.models_to_download);
        const de = ue.value.map((it) => {
          const xt = ze(it.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const ts = xt.repository || it.package.repository, xs = xt.package_id || it.package.package_id;
          return !ts || !xs ? null : {
            id: xs,
            repository: ts,
            selectedVersion: xt.version || it.package.latest_version || "latest"
          };
        }).filter((it) => !!it), We = new Set(de.map((it) => it.id)), dt = [
          ...W.nodes_to_install || [],
          ...Q.value.map((it) => it.package.package_id)
        ];
        d.nodesToInstall = [...new Set(dt)].filter((it) => !We.has(it)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const it of de)
          await w({
            id: it.id,
            version: it.selectedVersion,
            selected_version: it.selectedVersion,
            repository: it.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await f();
        const Ct = d.installError || ((re = d.nodeInstallProgress) == null ? void 0 : re.completedNodes.some((it) => !it.success));
        !d.needsRestart && !Ct && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (W) {
        P.value = W instanceof Error ? W.message : "Failed to apply resolution", d.error = P.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function kt() {
      a("refresh"), a("restart"), a("close");
    }
    async function Et() {
      var W;
      const re = ((W = d.nodeInstallProgress) == null ? void 0 : W.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (re.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: re.length
        }, d.nodesToInstall = re, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (de) {
          d.error = de instanceof Error ? de.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return at(Be), (re, W) => (n(), L(It, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: x.value,
      error: P.value || void 0,
      "fixed-height": !0,
      onClose: W[1] || (W[1] = (de) => a("close"))
    }, {
      body: h(() => [
        x.value && !_.value ? (n(), i("div", o1, [...W[2] || (W[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (n(), i("div", n1, [
          b(tg, {
            steps: M.value,
            "current-step": T.value,
            "completed-steps": E.value,
            "step-stats": $e.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          T.value === "analysis" ? (n(), i("div", a1, [
            s("div", l1, [
              s("div", i1, [
                W[3] || (W[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", r1, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", c1, [
                s("div", u1, [
                  W[16] || (W[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", d1, [
                    ye.value > 0 ? (n(), i("div", m1, [
                      W[4] || (W[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", f1, m(ye.value), 1),
                      W[5] || (W[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (n(), i("div", v1, [
                      W[6] || (W[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", p1, m(_.value.stats.packages_needing_installation), 1),
                      W[7] || (W[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (n(), i("div", g1, [
                      W[8] || (W[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", h1, m(_.value.nodes.ambiguous.length), 1),
                      W[9] || (W[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ae.value.length > 0 ? (n(), i("div", y1, [
                      W[10] || (W[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", w1, m(ae.value.length), 1),
                      W[11] || (W[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    ce.value.length > 0 ? (n(), i("div", _1, [
                      W[12] || (W[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", k1, m(ce.value.length), 1),
                      W[13] || (W[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (n(), i("div", b1, [
                      W[14] || (W[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", $1, m(_.value.nodes.unresolved.length), 1),
                      W[15] || (W[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", C1, [
                  W[27] || (W[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", x1, [
                    s("div", S1, [
                      W[17] || (W[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", I1, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      W[18] || (W[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (n(), i("div", E1, [
                      W[19] || (W[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", T1, m(_.value.stats.download_intents), 1),
                      W[20] || (W[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    fe.value ? (n(), i("div", M1, [
                      W[21] || (W[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", P1, m(U.value.length), 1),
                      W[22] || (W[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (n(), i("div", R1, [
                      W[23] || (W[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", L1, m(_.value.models.ambiguous.length), 1),
                      W[24] || (W[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (n(), i("div", D1, [
                      W[25] || (W[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", N1, m(_.value.models.unresolved.length), 1),
                      W[26] || (W[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              V.value ? (n(), i("div", O1, [
                W[28] || (W[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", U1, m(te.value.length + oe.value.length) + " items need your input", 1)
              ])) : ke.value ? (n(), i("div", A1, [
                W[29] || (W[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", z1, m(ae.value.length) + " node type" + m(ae.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : ce.value.length > 0 ? (n(), i("div", F1, [
                W[30] || (W[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", V1, m(ce.value.length) + " community-mapped node type" + m(ce.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Re.value ? (n(), i("div", B1, [
                W[31] || (W[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", W1, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(K.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : K.value ? (n(), i("div", G1, [
                W[32] || (W[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", j1, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : fe.value ? (n(), i("div", H1, [
                W[33] || (W[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", q1, m(U.value.length) + " model" + m(U.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", K1, [...W[34] || (W[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              fe.value ? (n(), i("div", J1, [
                W[37] || (W[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", Q1, [
                  (n(!0), i(j, null, he(U.value, (de) => {
                    var We, dt;
                    return n(), i("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", Y1, m(de.actual_category) + "/" + m((We = de.model) == null ? void 0 : We.filename), 1),
                      W[36] || (W[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", X1, m((dt = de.expected_categories) == null ? void 0 : dt[0]) + "/", 1),
                      de.file_path ? (n(), L(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ct) => Ge(de.file_path)
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
              ke.value ? (n(), i("div", Z1, [
                W[38] || (W[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", ew, [
                  (n(!0), i(j, null, he(ae.value, (de) => {
                    var We;
                    return n(), i("div", {
                      key: `vg-${de.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", tw, m(de.reference.node_type), 1),
                      s("span", sw, m(de.guidance || ((We = _.value.node_guidance) == null ? void 0 : We[de.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "nodes" ? (n(), i("div", ow, [
            b(Rh, {
              nodes: te.value,
              "node-choices": N.value,
              "auto-resolved-packages": ee.value,
              "skipped-packages": H.value,
              "installed-node-packs": C.value,
              onMarkOptional: J,
              onSkip: He,
              onOptionSelected: Ce,
              onManualEntry: Ye,
              onClearChoice: ot,
              onPackageSkip: D
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ue.value.length > 0 ? (n(), i("div", nw, [
              s("div", aw, [
                s("h4", lw, "Community-Mapped Packages (" + m(ue.value.length) + ")", 1),
                W[39] || (W[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", iw, [
                (n(!0), i(j, null, he(ue.value, (de) => (n(), i("div", {
                  key: `community-${de.reference.node_type}-${de.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", rw, [
                    s("div", cw, [
                      s("code", uw, m(de.reference.node_type), 1),
                      s("span", dw, m(de.package.title || de.package.package_id), 1)
                    ]),
                    s("div", mw, m(de.package.package_id), 1),
                    s("div", fw, [
                      W[40] || (W[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      de.guidance ? (n(), i("span", vw, m(de.guidance), 1)) : y("", !0)
                    ]),
                    s("div", pw, m(O(de.reference.node_type)), 1)
                  ]),
                  s("div", gw, [
                    b(De, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !de.package.package_id,
                      onClick: (We) => se(de, "registry")
                    }, {
                      default: h(() => [...W[41] || (W[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    de.package.repository ? (n(), L(De, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !de.package.package_id,
                      onClick: (We) => se(de, "git")
                    }, {
                      default: h(() => [...W[42] || (W[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (We) => ge(de.reference.node_type)
                    }, {
                      default: h(() => [...W[43] || (W[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(De, {
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
          T.value === "models" ? (n(), L(xy, {
            key: 2,
            models: Me.value,
            "model-choices": A.value,
            onMarkOptional: z,
            onSkip: Y,
            onOptionSelected: Oe,
            onDownloadUrl: Ue,
            onClearChoice: Pe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          T.value === "review" ? (n(), i("div", hw, [
            s("div", yw, [
              W[50] || (W[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", ww, [
                s("div", _w, [
                  s("span", kw, m(I.value), 1),
                  W[45] || (W[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", bw, [
                  s("span", $w, m(F.value), 1),
                  W[46] || (W[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", Cw, [
                  s("span", xw, m(ie.value), 1),
                  W[47] || (W[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", Sw, [
                  s("span", Iw, m(Ie.value), 1),
                  W[48] || (W[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ee.value.length > 0 ? (n(), i("div", Ew, [
                s("h4", Tw, "Node Packages (" + m(ee.value.length) + ")", 1),
                s("div", Mw, [
                  (n(!0), i(j, null, he(ee.value, (de) => (n(), i("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    s("code", Pw, m(de.package_id), 1),
                    s("div", Rw, [
                      H.value.has(de.package_id) ? (n(), i("span", Dw, "Skipped")) : (n(), i("span", Lw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ue.value.length > 0 ? (n(), i("div", Nw, [
                s("h4", Ow, "Community-Mapped Packages (" + m(ue.value.length) + ")", 1),
                s("div", Uw, [
                  (n(!0), i(j, null, he(ue.value, (de) => {
                    var We, dt, Ct;
                    return n(), i("div", {
                      key: `review-community-${de.reference.node_type}-${de.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", Aw, m(de.reference.node_type), 1),
                      s("div", zw, [
                        ((We = ze(de.reference.node_type)) == null ? void 0 : We.action) === "install" ? (n(), i("span", Fw, m(((dt = ze(de.reference.node_type)) == null ? void 0 : dt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Ct = ze(de.reference.node_type)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", Vw, " Optional ")) : (n(), i("span", Bw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value.length > 0 ? (n(), i("div", Ww, [
                s("h4", Gw, "Node Choices (" + m(te.value.length) + ")", 1),
                s("div", jw, [
                  (n(!0), i(j, null, he(te.value, (de) => {
                    var We, dt, Ct, it;
                    return n(), i("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      s("code", Hw, m(de.node_type), 1),
                      s("div", qw, [
                        N.value.has(de.node_type) ? (n(), i(j, { key: 0 }, [
                          ((We = N.value.get(de.node_type)) == null ? void 0 : We.action) === "install" ? (n(), i("span", Kw, m((dt = N.value.get(de.node_type)) == null ? void 0 : dt.package_id), 1)) : ((Ct = N.value.get(de.node_type)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", Jw, " Optional ")) : ((it = N.value.get(de.node_type)) == null ? void 0 : it.action) === "skip" ? (n(), i("span", Qw, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", Yw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              me.value.length > 0 ? (n(), i("div", Xw, [
                s("h4", Zw, "Models to Download (" + m(me.value.length) + ")", 1),
                s("div", e0, [
                  (n(!0), i(j, null, he(me.value, (de) => (n(), i("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", t0, [
                      s("code", s0, m(de.filename), 1),
                      s("div", o0, [
                        s("span", n0, "→ " + m(de.target_path), 1),
                        de.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, m(le(de.url)), 9, a0)) : y("", !0)
                      ])
                    ]),
                    W[49] || (W[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Me.value.length > 0 ? (n(), i("div", l0, [
                s("h4", i0, "Models (" + m(Me.value.length) + ")", 1),
                s("div", r0, [
                  (n(!0), i(j, null, he(Me.value, (de) => {
                    var We, dt, Ct, it, xt, ts, xs;
                    return n(), i("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      s("code", c0, m(de.filename), 1),
                      s("div", u0, [
                        A.value.has(de.filename) ? (n(), i(j, { key: 0 }, [
                          ((We = A.value.get(de.filename)) == null ? void 0 : We.action) === "select" ? (n(), i("span", d0, m((Ct = (dt = A.value.get(de.filename)) == null ? void 0 : dt.selected_model) == null ? void 0 : Ct.filename), 1)) : ((it = A.value.get(de.filename)) == null ? void 0 : it.action) === "download" ? (n(), i("span", m0, " Download ")) : ((xt = A.value.get(de.filename)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", f0, " Optional ")) : ((ts = A.value.get(de.filename)) == null ? void 0 : ts.action) === "skip" ? (n(), i("span", v0, " Skip ")) : ((xs = A.value.get(de.filename)) == null ? void 0 : xs.action) === "cancel_download" ? (n(), i("span", p0, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (n(), i("span", g0, " Pending Download ")) : (n(), i("span", h0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ve.value.length === 0 && ue.value.length === 0 && te.value.length === 0 && Me.value.length === 0 ? (n(), i("div", y0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "applying" ? (n(), L(s1, {
            key: 4,
            progress: tt(d),
            onRestart: kt,
            onRetryFailed: Et
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        T.value !== "analysis" && T.value !== "applying" ? (n(), L(De, {
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
        T.value !== "applying" || tt(d).phase === "complete" || tt(d).phase === "error" ? (n(), L(De, {
          key: 1,
          variant: "secondary",
          onClick: W[0] || (W[0] = (de) => a("close"))
        }, {
          default: h(() => [
            $(m(tt(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "analysis" ? (n(), L(De, {
          key: 2,
          variant: "primary",
          disabled: x.value,
          onClick: pe
        }, {
          default: h(() => [
            $(m(Le.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        T.value === "nodes" ? (n(), L(De, {
          key: 3,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [
            $(m(B.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "models" ? (n(), L(De, {
          key: 4,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [...W[52] || (W[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        T.value === "review" ? (n(), L(De, {
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
}), _0 = /* @__PURE__ */ xe(w0, [["__scopeId", "data-v-49848358"]]), k0 = { class: "search-input-wrapper" }, b0 = ["value", "placeholder"], $0 = /* @__PURE__ */ be({
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
    return at(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (n(), i("div", k0, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: ds(u, ["escape"])
      }, null, 40, b0),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), C0 = /* @__PURE__ */ xe($0, [["__scopeId", "data-v-266f857a"]]), x0 = { class: "search-bar" }, S0 = /* @__PURE__ */ be({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (n(), i("div", x0, [
      b(C0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ro = /* @__PURE__ */ xe(S0, [["__scopeId", "data-v-3d51bbfd"]]), I0 = { class: "section-group" }, E0 = {
  key: 0,
  class: "section-content"
}, T0 = /* @__PURE__ */ be({
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
    return (c, u) => (n(), i("section", I0, [
      b(ns, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          $(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", E0, [
        st(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), St = /* @__PURE__ */ xe(T0, [["__scopeId", "data-v-c48e33ed"]]), M0 = { class: "item-header" }, P0 = {
  key: 0,
  class: "item-icon"
}, R0 = { class: "item-info" }, L0 = {
  key: 0,
  class: "item-title"
}, D0 = {
  key: 1,
  class: "item-subtitle"
}, N0 = {
  key: 0,
  class: "item-details"
}, O0 = {
  key: 1,
  class: "item-actions"
}, U0 = /* @__PURE__ */ be({
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
      class: Ve(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", M0, [
        l.$slots.icon ? (n(), i("span", P0, [
          st(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", R0, [
          l.$slots.title ? (n(), i("div", L0, [
            st(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", D0, [
            st(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", N0, [
        st(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", O0, [
        st(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ xe(U0, [["__scopeId", "data-v-cc435e0e"]]), A0 = { class: "loading-state" }, z0 = { class: "loading-message" }, F0 = /* @__PURE__ */ be({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (n(), i("div", A0, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", z0, m(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ xe(F0, [["__scopeId", "data-v-ad8436c9"]]), V0 = { class: "error-state" }, B0 = { class: "error-message" }, W0 = /* @__PURE__ */ be({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (n(), i("div", V0, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", B0, m(e.message), 1),
      e.retry ? (n(), L(Te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ xe(W0, [["__scopeId", "data-v-5397be48"]]), G0 = /* @__PURE__ */ be({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = R(
      () => r.value.filter((U) => U.status === "broken")
    ), C = R(
      () => r.value.filter((U) => U.status === "new")
    ), x = R(
      () => r.value.filter((U) => U.status === "modified")
    ), S = R(
      () => r.value.filter((U) => U.status === "synced")
    ), P = R(() => {
      if (!d.value.trim()) return r.value;
      const U = d.value.toLowerCase();
      return r.value.filter((fe) => fe.name.toLowerCase().includes(U));
    }), T = R(
      () => _.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = R(
      () => C.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = R(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = R(
      () => S.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), H = R(
      () => f.value ? A.value : A.value.slice(0, 5)
    );
    async function M(U = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(U);
      } catch (fe) {
        u.value = fe instanceof Error ? fe.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: M });
    function V(U) {
      g.value = U, p.value = !0;
    }
    function ae(U) {
      g.value = U, w.value = !0;
    }
    function ce(U) {
      g.value = U, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: U }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function ue(U) {
      var ve;
      const Le = (ve = U.detail) == null ? void 0 : ve.workflowName;
      Le && ce(Le);
    }
    function ke() {
      a("refresh");
    }
    async function Z() {
      w.value = !1, await M(!0);
    }
    async function B() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function K(U) {
      return U.replace(/uninstallable node mappings?/gi, (fe) => fe.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Re(U) {
      if (U.issue_summary && U.issue_summary.trim().length > 0)
        return K(U.issue_summary);
      const fe = [];
      return U.version_gated_count && U.version_gated_count > 0 && fe.push(`${U.version_gated_count} node${U.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), U.uninstallable_count && U.uninstallable_count > 0 && fe.push(`${U.uninstallable_count} node${U.uninstallable_count > 1 ? "s" : ""} need community packages`), U.missing_nodes > 0 && fe.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && fe.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && fe.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && fe.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), fe.length > 0 ? fe.join(", ") : "Has issues";
    }
    function X(U) {
      const fe = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state, Le = ye(U);
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync · ${Le}` : `${fe || "Unknown"} · ${Le}`;
    }
    function ye(U) {
      const fe = U.contract_summary;
      return !fe || !fe.has_contract ? "No contract" : fe.status === "incomplete" ? `${fe.input_count} in / ${fe.output_count} out · incomplete` : `${fe.input_count} in / ${fe.output_count} out`;
    }
    return at(() => {
      M(), window.addEventListener("comfygit:open-workflow-contract", ue);
    }), aa(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ue);
    }), (U, fe) => (n(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: d.value,
            "onUpdate:modelValue": fe[0] || (fe[0] = (Le) => d.value = Le),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), L($s, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), L(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            T.value.length ? (n(), L(St, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(T.value, (Le) => (n(), L(Vt, {
                  key: Le.name,
                  status: "broken"
                }, {
                  icon: h(() => [...fe[7] || (fe[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(Le.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(Re(Le)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ve) => ae(Le.name)
                    }, {
                      default: h(() => [...fe[8] || (fe[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => ce(Le.name)
                    }, {
                      default: h(() => [...fe[9] || (fe[9] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => V(Le.name)
                    }, {
                      default: h(() => [...fe[10] || (fe[10] = [
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
            E.value.length ? (n(), L(St, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(E.value, (Le) => (n(), L(Vt, {
                  key: Le.name,
                  status: Le.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(m(Le.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(m(Le.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(X(Le)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => ce(Le.name)
                    }, {
                      default: h(() => [...fe[11] || (fe[11] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => V(Le.name)
                    }, {
                      default: h(() => [...fe[12] || (fe[12] = [
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
            N.value.length ? (n(), L(St, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(N.value, (Le) => (n(), L(Vt, {
                  key: Le.name,
                  status: Le.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...fe[13] || (fe[13] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(m(Le.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(X(Le)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => ce(Le.name)
                    }, {
                      default: h(() => [...fe[14] || (fe[14] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => V(Le.name)
                    }, {
                      default: h(() => [...fe[15] || (fe[15] = [
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
            A.value.length ? (n(), L(St, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: fe[2] || (fe[2] = (Le) => v.value = Le)
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(H.value, (Le) => (n(), L(Vt, {
                  key: Le.name,
                  status: Le.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(m(Le.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(m(Le.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(X(Le)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => ce(Le.name)
                    }, {
                      default: h(() => [...fe[16] || (fe[16] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => V(Le.name)
                    }, {
                      default: h(() => [...fe[17] || (fe[17] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && A.value.length > 5 ? (n(), L(Te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: fe[1] || (fe[1] = (Le) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + m(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            P.value.length ? y("", !0) : (n(), L(rs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (n(), L(Wp, {
        key: 0,
        "workflow-name": g.value,
        onClose: fe[3] || (fe[3] = (Le) => p.value = !1),
        onResolve: fe[4] || (fe[4] = (Le) => ae(g.value)),
        onRefresh: fe[5] || (fe[5] = (Le) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (n(), L(_0, {
        key: 1,
        "workflow-name": g.value,
        onClose: Z,
        onInstall: ke,
        onRefresh: fe[6] || (fe[6] = (Le) => a("refresh")),
        onRestart: B
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), j0 = /* @__PURE__ */ xe(G0, [["__scopeId", "data-v-28ee54dd"]]), H0 = /* @__PURE__ */ be({
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
}), ca = /* @__PURE__ */ xe(H0, [["__scopeId", "data-v-ccb7816e"]]), q0 = ["disabled"], K0 = { class: "dropdown-value" }, J0 = ["onClick"], Q0 = {
  key: 0,
  class: "dropdown-error"
}, Y0 = /* @__PURE__ */ be({
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
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const f = R(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((P) => d(P) === o.modelValue);
      return S ? v(S) : String(o.modelValue);
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
      const S = r.value.getBoundingClientRect(), P = window.innerHeight, T = P - S.bottom, E = S.top, N = Math.min(300, o.options.length * 36 + 8), A = T < N && E > T;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...A ? { bottom: `${P - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    yt(l, async (S) => {
      S && (await Pt(), _());
    });
    function C() {
      l.value && _();
    }
    function x(S) {
      S.key === "Escape" && l.value && w();
    }
    return at(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", x);
    }), Po(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", x);
    }), (S, P) => (n(), i("div", {
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
        s("span", K0, m(f.value), 1),
        P[0] || (P[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, q0),
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
          (n(!0), i(j, null, he(e.options, (T) => (n(), i("div", {
            key: d(T),
            class: Ve(["dropdown-option", { selected: d(T) === e.modelValue }]),
            onClick: (E) => g(T)
          }, m(v(T)), 11, J0))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", Q0, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), X0 = /* @__PURE__ */ xe(Y0, [["__scopeId", "data-v-857e085b"]]), Z0 = { class: "destination-section" }, e_ = { class: "section-label" }, t_ = { class: "destination-row" }, s_ = {
  key: 0,
  class: "path-separator"
}, o_ = /* @__PURE__ */ be({
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
      const C = d.value.map((x) => ({
        label: x,
        value: x
      }));
      return C.push({ label: "Custom path...", value: "__custom__" }), C;
    }), w = R(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (v.value || !o.suggestedDirectory) return;
      const C = d.value.find(
        (x) => {
          var S;
          return x.toLowerCase() === ((S = o.suggestedDirectory) == null ? void 0 : S.toLowerCase());
        }
      );
      C && C !== r.value && (f = !0, r.value = C, Pt(() => {
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
    return yt(w, (C) => {
      a("update:modelValue", C);
    }, { immediate: !0 }), yt(() => o.suggestedDirectory, g), yt(d, g), yt(r, (C, x) => {
      f || x === "" || (v.value = !0);
    }), at(_), (C, x) => (n(), i("div", Z0, [
      s("h4", e_, m(e.label), 1),
      s("div", t_, [
        b(X0, {
          modelValue: r.value,
          "onUpdate:modelValue": x[0] || (x[0] = (S) => r.value = S),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (n(), i("span", s_, "/")) : y("", !0),
        r.value !== "__custom__" ? (n(), L(bt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": x[1] || (x[1] = (S) => c.value = S),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (n(), L(bt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": x[2] || (x[2] = (S) => u.value = S),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), nc = /* @__PURE__ */ xe(o_, [["__scopeId", "data-v-2fbc2b02"]]);
function n_(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function a_(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!n_(o.hostname)) return { kind: "unknown" };
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
function l_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function xi(e, t, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${l_(o)}`;
}
const i_ = { class: "hf-file-browser" }, r_ = { class: "browser-header" }, c_ = { class: "repo-info" }, u_ = { class: "repo-id" }, d_ = {
  key: 0,
  class: "revision-pill"
}, m_ = {
  key: 0,
  class: "loading-state"
}, f_ = {
  key: 1,
  class: "error-state"
}, v_ = { class: "toolbar" }, p_ = { class: "toolbar-actions" }, g_ = { class: "file-list-container" }, h_ = {
  key: 0,
  class: "file-list-header"
}, y_ = ["checked", "indeterminate"], w_ = {
  key: 1,
  class: "file-checkbox-spacer"
}, __ = { class: "sort-indicator" }, k_ = { class: "sort-indicator" }, b_ = {
  key: 1,
  class: "empty-state"
}, $_ = {
  key: 2,
  class: "file-list"
}, C_ = ["onClick"], x_ = ["checked", "onChange"], S_ = { class: "file-path" }, I_ = { class: "file-size" }, E_ = { class: "action-bar" }, T_ = { class: "summary-info" }, M_ = { class: "summary-count" }, P_ = { class: "summary-size" }, R_ = /* @__PURE__ */ be({
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
    const o = e, a = t, { getHuggingFaceRepoInfo: l } = ct(), r = k([]), c = k(/* @__PURE__ */ new Set()), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, C = R(() => {
      let ve = r.value;
      if (o.initialPath) {
        const ee = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        ve = ve.filter((Q) => Q.path.startsWith(ee) || Q.path === o.initialPath);
      }
      if (f.value && (ve = ve.filter((ee) => ee.is_model_file)), v.value.trim()) {
        const ee = v.value.toLowerCase();
        ve = ve.filter((Q) => Q.path.toLowerCase().includes(ee));
      }
      return ve;
    }), x = R(() => {
      const ve = [...C.value];
      return ve.sort((ee, Q) => {
        let we;
        return p.value === "name" ? we = ee.path.localeCompare(Q.path) : we = ee.size - Q.size, w.value ? we : -we;
      }), ve;
    }), S = R(() => C.value.length === 0 ? !1 : C.value.every((ve) => c.value.has(ve.path))), P = R(() => C.value.some((ve) => c.value.has(ve.path))), T = R(() => g.value.trim().length > 0), E = R(() => {
      let ve = 0;
      for (const ee of c.value) {
        const Q = r.value.find((we) => we.path === ee);
        Q && (ve += Q.size);
      }
      return ve;
    }), N = R(() => {
      if (c.value.size === 0) return null;
      const ve = /* @__PURE__ */ new Set();
      for (const ee of c.value) {
        const Q = Re(ee);
        Q && ve.add(Q.toLowerCase());
      }
      return ve.size !== 1 ? null : [...ve][0];
    }), A = R(() => o.mode || "download"), H = R(() => o.actionLabel || (A.value === "source" ? "Use as Source" : "Queue Download")), M = R(() => A.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), V = R(() => A.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !T.value);
    function ae(ve) {
      if (ve === 0) return "0 B";
      const ee = 1024 * 1024 * 1024, Q = 1024 * 1024, we = 1024;
      return ve >= ee ? `${(ve / ee).toFixed(2)} GB` : ve >= Q ? `${(ve / Q).toFixed(1)} MB` : ve >= we ? `${(ve / we).toFixed(0)} KB` : `${ve} B`;
    }
    function ce(ve) {
      const ee = ve.match(_);
      return ee ? `${ee[1]}${ee[4]}` : null;
    }
    function ue(ve) {
      if (A.value === "source") {
        c.value = c.value.has(ve.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ve.path]);
        return;
      }
      const ee = new Set(c.value), Q = ee.has(ve.path), we = ve.shard_group || ce(ve.path);
      if (we) {
        const te = r.value.filter((oe) => (oe.shard_group || ce(oe.path)) === we);
        Q ? te.forEach((oe) => ee.delete(oe.path)) : te.forEach((oe) => ee.add(oe.path));
      } else
        Q ? ee.delete(ve.path) : ee.add(ve.path);
      c.value = ee;
    }
    function ke() {
      const ve = new Set(c.value);
      for (const ee of C.value)
        ee.is_model_file && ve.add(ee.path);
      c.value = ve;
    }
    function Z() {
      c.value = /* @__PURE__ */ new Set();
    }
    function B() {
      if (S.value) {
        const ve = new Set(c.value);
        for (const ee of C.value)
          ve.delete(ee.path);
        c.value = ve;
      } else {
        const ve = new Set(c.value);
        for (const ee of C.value)
          ve.add(ee.path);
        c.value = ve;
      }
    }
    function K(ve) {
      p.value === ve ? w.value = !w.value : (p.value = ve, w.value = !0);
    }
    function Re(ve) {
      const ee = ve.split("/");
      return ee.length >= 2 ? ee[ee.length - 2] : null;
    }
    function X() {
      return g.value.trim();
    }
    function ye() {
      if (c.value.size === 0 || !T.value) return;
      const ve = X(), ee = [];
      for (const Q of c.value) {
        const we = r.value.find((te) => te.path === Q);
        we && ee.push({
          url: xi(o.repoId, o.revision, we.path),
          destination: ve,
          filename: we.path.split("/").pop() || we.path
        });
      }
      a("queue", ee);
    }
    function U() {
      if (c.value.size !== 1) return;
      const [ve] = c.value;
      a("selectSource", xi(o.repoId, o.revision, ve));
    }
    function fe() {
      if (A.value === "source") {
        U();
        return;
      }
      ye();
    }
    async function Le() {
      if (o.repoId) {
        u.value = !0, d.value = null;
        try {
          const ve = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ee = await l(ve);
          if (r.value = ee.files, o.preselectedFile) {
            const Q = r.value.find((we) => we.path === o.preselectedFile);
            Q && ue(Q);
          }
        } catch (ve) {
          d.value = ve instanceof Error ? ve.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return yt(() => [o.repoId, o.revision], () => {
      o.repoId && Le();
    }, { immediate: !1 }), at(() => {
      Le();
    }), (ve, ee) => (n(), i("div", i_, [
      s("div", r_, [
        s("button", {
          class: "back-btn",
          onClick: ee[0] || (ee[0] = (Q) => ve.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", c_, [
          s("span", u_, m(e.repoId), 1),
          e.revision ? (n(), i("span", d_, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (n(), i("div", m_, " Loading repository files... ")) : d.value ? (n(), i("div", f_, m(d.value), 1)) : (n(), i(j, { key: 2 }, [
        s("div", v_, [
          b(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (Q) => v.value = Q),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", p_, [
            s("button", {
              class: Ve(["toggle-btn", { active: f.value }]),
              onClick: ee[2] || (ee[2] = (Q) => f.value = !f.value)
            }, m(f.value ? "Models Only" : "All Files"), 3),
            A.value === "download" ? (n(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: ke
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: Z
            }, "Clear")
          ])
        ]),
        s("div", g_, [
          C.value.length > 0 ? (n(), i("div", h_, [
            A.value === "download" ? (n(), i("input", {
              key: 0,
              type: "checkbox",
              checked: S.value,
              indeterminate: P.value && !S.value,
              class: "file-checkbox",
              onChange: B
            }, null, 40, y_)) : (n(), i("span", w_)),
            s("span", {
              class: "header-name",
              onClick: ee[3] || (ee[3] = (Q) => K("name"))
            }, [
              ee[7] || (ee[7] = $(" Name ", -1)),
              s("span", __, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: ee[4] || (ee[4] = (Q) => K("size"))
            }, [
              ee[8] || (ee[8] = $(" Size ", -1)),
              s("span", k_, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          C.value.length === 0 ? (n(), i("div", b_, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", $_, [
            (n(!0), i(j, null, he(x.value, (Q) => (n(), i("div", {
              key: Q.path,
              class: Ve(["file-item", { selected: c.value.has(Q.path) }]),
              onClick: (we) => ue(Q)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(Q.path),
                class: "file-checkbox",
                onClick: ee[5] || (ee[5] = vt(() => {
                }, ["stop"])),
                onChange: (we) => ue(Q)
              }, null, 40, x_),
              s("span", S_, m(Q.path), 1),
              s("span", I_, m(ae(Q.size)), 1)
            ], 10, C_))), 128))
          ]))
        ]),
        A.value === "download" ? (n(), L(nc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": ee[6] || (ee[6] = (Q) => g.value = Q),
          "suggested-directory": N.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", E_, [
          s("div", T_, [
            s("span", M_, m(M.value), 1),
            s("span", P_, m(ae(E.value)), 1)
          ]),
          b(De, {
            variant: "primary",
            disabled: V.value,
            onClick: fe
          }, {
            default: h(() => [
              $(m(H.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), L_ = /* @__PURE__ */ xe(R_, [["__scopeId", "data-v-06caa551"]]), D_ = { class: "token-config-modal" }, N_ = { class: "provider-info" }, O_ = { class: "provider-icon" }, U_ = { class: "provider-name" }, A_ = {
  key: 0,
  class: "current-token"
}, z_ = { class: "mask" }, F_ = { class: "token-input-section" }, V_ = { class: "input-label" }, B_ = { class: "help-text" }, W_ = ["href"], G_ = { class: "modal-actions" }, j_ = /* @__PURE__ */ be({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
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
          const C = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(C), r.value = "", a("saved"), a("close");
        } catch (C) {
          console.error("Failed to save token:", C);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const C = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(C), a("cleared"), a("close");
      } catch (C) {
        console.error("Failed to clear token:", C);
      } finally {
        u.value = !1;
      }
    }
    return (C, x) => (n(), L(It, {
      title: "Configure API Token",
      onClose: x[2] || (x[2] = (S) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", D_, [
          s("div", N_, [
            s("span", O_, m(v.value), 1),
            s("span", U_, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", A_, [
            x[4] || (x[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", z_, m(e.currentTokenMask), 1),
            b(De, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...x[3] || (x[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", F_, [
            s("label", V_, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": x[0] || (x[0] = (S) => r.value = S),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", B_, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, W_)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", G_, [
          b(De, {
            variant: "secondary",
            onClick: x[1] || (x[1] = (S) => C.$emit("close"))
          }, {
            default: h(() => [...x[5] || (x[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...x[6] || (x[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), H_ = /* @__PURE__ */ xe(j_, [["__scopeId", "data-v-0687d0ce"]]), q_ = { class: "huggingface-tab" }, K_ = {
  key: 0,
  class: "search-section"
}, J_ = { class: "search-header" }, Q_ = { class: "search-bar" }, Y_ = {
  key: 1,
  class: "search-results"
}, X_ = {
  key: 0,
  class: "loading-state"
}, Z_ = {
  key: 1,
  class: "error-state"
}, ek = {
  key: 2,
  class: "results-list"
}, tk = ["onClick"], sk = { class: "repo-header" }, ok = { class: "repo-id" }, nk = { class: "repo-stats" }, ak = {
  class: "stat",
  title: "Downloads"
}, lk = {
  class: "stat",
  title: "Likes"
}, ik = {
  key: 0,
  class: "repo-desc"
}, rk = {
  key: 1,
  class: "repo-tags"
}, ck = {
  key: 3,
  class: "empty-state"
}, uk = {
  key: 4,
  class: "hint-state"
}, dk = /* @__PURE__ */ be({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = ct(), a = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), C = R(() => {
      if (!u.value) return !1;
      const H = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || H.includes("authentication") || H.includes("unauthorized");
    });
    function x(H) {
      return H >= 1e6 ? `${(H / 1e6).toFixed(1)}M` : H >= 1e3 ? `${(H / 1e3).toFixed(1)}K` : String(H);
    }
    async function S() {
      const H = l.value.trim();
      if (!H) return;
      u.value = null;
      const M = a_(H);
      if (M.kind === "file" && M.repoId && M.path) {
        v.value = M.repoId, f.value = M.revision || "main";
        const V = M.path.split("/");
        V.length > 1 ? p.value = V.slice(0, -1).join("/") : p.value = void 0, w.value = M.path, a.value = "browse";
        return;
      }
      if (M.kind === "repo" && M.repoId) {
        v.value = M.repoId, f.value = M.revision || "main", p.value = M.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(H) && !H.includes("://")) {
        v.value = H, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const V = await t(H);
        r.value = V.results, d.value = !0;
      } catch (V) {
        u.value = V instanceof Error ? V.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function P(H) {
      v.value = H, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function T() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function E() {
      try {
        const H = await o();
        _.value = H.huggingface_token || null;
      } catch (H) {
        console.error("Failed to load config:", H);
      }
    }
    function N() {
      E(), C.value && l.value && S();
    }
    function A() {
      _.value = null;
    }
    return at(E), (H, M) => (n(), i("div", q_, [
      a.value === "search" ? (n(), i("div", K_, [
        s("div", J_, [
          s("div", Q_, [
            b(bt, {
              modelValue: l.value,
              "onUpdate:modelValue": M[0] || (M[0] = (V) => l.value = V),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ds(S, ["enter"])
            }, null, 8, ["modelValue"]),
            b(De, {
              variant: "primary",
              onClick: S,
              loading: c.value
            }, {
              default: h(() => [...M[6] || (M[6] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          b(De, {
            variant: "secondary",
            size: "sm",
            onClick: M[1] || (M[1] = (V) => g.value = !0)
          }, {
            default: h(() => [
              $(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", Y_, [
        c.value ? (n(), i("div", X_, " Searching HuggingFace... ")) : u.value ? (n(), i("div", Z_, [
          s("p", null, m(u.value), 1),
          C.value ? (n(), L(De, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: M[2] || (M[2] = (V) => g.value = !0)
          }, {
            default: h(() => [...M[7] || (M[7] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", ek, [
          (n(!0), i(j, null, he(r.value, (V) => (n(), i("div", {
            key: V.repo_id,
            class: "repo-card",
            onClick: (ae) => P(V.repo_id)
          }, [
            s("div", sk, [
              s("span", ok, m(V.repo_id), 1),
              s("div", nk, [
                s("span", ak, [
                  M[8] || (M[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + m(x(V.downloads)), 1)
                ]),
                s("span", lk, [
                  M[9] || (M[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + m(x(V.likes)), 1)
                ])
              ])
            ]),
            V.description ? (n(), i("p", ik, m(V.description), 1)) : y("", !0),
            V.tags.length > 0 ? (n(), i("div", rk, [
              (n(!0), i(j, null, he(V.tags.slice(0, 5), (ae) => (n(), i("span", {
                key: ae,
                class: "tag"
              }, m(ae), 1))), 128))
            ])) : y("", !0)
          ], 8, tk))), 128))
        ])) : d.value ? (n(), i("div", ck, " No repositories found ")) : (n(), i("div", uk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), L(L_, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: T,
        onQueue: M[3] || (M[3] = (V) => H.$emit("queue", V)),
        onSelectSource: M[4] || (M[4] = (V) => H.$emit("selectSource", V))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (n(), L(H_, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: M[5] || (M[5] = (V) => g.value = !1),
        onSaved: N,
        onCleared: A
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), ac = /* @__PURE__ */ xe(dk, [["__scopeId", "data-v-6ebbcfa4"]]), mk = { class: "candidate-card" }, fk = { class: "candidate-main" }, vk = { class: "candidate-url" }, pk = { class: "candidate-meta" }, gk = { class: "meta-chip" }, hk = {
  key: 0,
  class: "meta-chip"
}, yk = {
  key: 1,
  class: "meta-chip"
}, wk = {
  key: 0,
  class: "reason-list",
  "aria-label": "Why this link matched"
}, _k = { class: "reason-heading" }, kk = {
  key: 1,
  class: "candidate-context"
}, bk = { class: "candidate-actions" }, $k = /* @__PURE__ */ be({
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
      return n(), i("article", mk, [
        s("div", fk, [
          s("div", vk, m(e.candidate.url), 1),
          s("div", pk, [
            s("span", gk, [
              c[2] || (c[2] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(a(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (n(), i("span", hk, [
              c[3] || (c[3] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (n(), i("span", yk, [
              c[4] || (c[4] = s("span", { class: "chip-label" }, "Match", -1)),
              s("span", null, m(l(e.candidate.confidence)), 1)
            ])) : y("", !0)
          ]),
          (u = e.candidate.reasons) != null && u.length ? (n(), i("div", wk, [
            s("div", _k, [
              c[5] || (c[5] = s("span", { class: "reason-label" }, "Matched by", -1)),
              b(Il, {
                size: 14,
                title: "About match reasons",
                onClick: c[0] || (c[0] = (d) => o("showMatchInfo"))
              })
            ]),
            (n(!0), i(j, null, he(e.candidate.reasons, (d) => (n(), i("span", {
              key: d,
              class: "reason-chip"
            }, m(d), 1))), 128))
          ])) : y("", !0),
          e.candidate.context ? (n(), i("details", kk, [
            c[6] || (c[6] = s("summary", null, "Workflow snippet", -1)),
            s("p", null, m(e.candidate.context), 1)
          ])) : y("", !0)
        ]),
        s("div", bk, [
          b(De, {
            variant: "primary",
            size: "sm",
            loading: e.loading,
            onClick: c[1] || (c[1] = (d) => o("select", e.candidate.url))
          }, {
            default: h(() => [
              $(m(e.actionLabel), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]);
    };
  }
}), lc = /* @__PURE__ */ xe($k, [["__scopeId", "data-v-18b56588"]]), Ck = { class: "source-url-form" }, xk = { class: "input-group" }, Sk = { key: 0 }, Ik = {
  key: 1,
  class: "description"
}, Ek = { class: "actions" }, Tk = /* @__PURE__ */ be({
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
    return (d, v) => (n(), i("div", Ck, [
      s("div", xk, [
        e.label ? (n(), i("label", Sk, m(e.label), 1)) : y("", !0),
        b(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a("update:modelValue", f)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (n(), i("p", Ik, m(e.description), 1)) : y("", !0)
      ]),
      st(d.$slots, "default", {}, void 0),
      s("div", Ek, [
        b(De, {
          variant: "primary",
          disabled: !c.value,
          loading: e.loading,
          onClick: u
        }, {
          default: h(() => [
            $(m(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), ic = /* @__PURE__ */ xe(Tk, [["__scopeId", "data-v-e2610d45"]]), Mk = { class: "source-picker" }, Pk = {
  key: 0,
  class: "model-summary"
}, Rk = { class: "model-heading" }, Lk = { class: "summary-name" }, Dk = { class: "summary-meta" }, Nk = {
  key: 0,
  class: "hash-row"
}, Ok = { class: "hash-value" }, Uk = {
  key: 1,
  class: "hash-row"
}, Ak = { class: "hash-value" }, zk = {
  key: 2,
  class: "hash-row"
}, Fk = { class: "hash-value" }, Vk = {
  key: 4,
  class: "hash-error"
}, Bk = { class: "tab-bar" }, Wk = ["onClick"], Gk = {
  key: 1,
  class: "tab-content"
}, jk = { class: "section-header-row" }, Hk = {
  key: 0,
  class: "state-message"
}, qk = {
  key: 1,
  class: "error-message"
}, Kk = {
  key: 2,
  class: "candidate-list"
}, Jk = {
  key: 3,
  class: "state-message"
}, Qk = {
  key: 2,
  class: "tab-content source-browser-content"
}, Yk = {
  key: 3,
  class: "tab-content"
}, Xk = { class: "section-header-row" }, Zk = /* @__PURE__ */ be({
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
    ], u = k("workflow"), d = k([]), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(!1), _ = k(null), C = R(() => d.value.filter((T) => T.source === "workflow")), x = R(() => !!(o.model.hash && (!o.model.blake3 || !o.model.sha256)));
    async function S() {
      v.value = !0, f.value = null;
      try {
        const T = await l(o.model.hash);
        d.value = T.candidates;
      } catch (T) {
        f.value = T instanceof Error ? T.message : "Failed to scan workflows";
      } finally {
        v.value = !1;
      }
    }
    async function P() {
      if (o.model.hash) {
        g.value = !0, _.value = null;
        try {
          const T = await r(o.model.hash);
          a("hashesComputed", T);
        } catch (T) {
          _.value = T instanceof Error ? T.message : "Failed to compute hashes";
        } finally {
          g.value = !1;
        }
      }
    }
    return at(S), (T, E) => (n(), i("div", Mk, [
      e.showModelSummary ? (n(), i("div", Pk, [
        s("div", Rk, [
          E[6] || (E[6] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Lk, m(e.model.filename), 1)
        ]),
        s("div", Dk, [
          e.model.hash ? (n(), i("div", Nk, [
            E[7] || (E[7] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Ok, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (n(), i("div", Uk, [
            E[8] || (E[8] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Ak, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (n(), i("div", zk, [
            E[9] || (E[9] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", Fk, m(e.model.sha256), 1)
          ])) : y("", !0),
          x.value ? (n(), L(De, {
            key: 3,
            variant: "secondary",
            size: "sm",
            loading: g.value,
            onClick: P
          }, {
            default: h(() => [...E[10] || (E[10] = [
              $(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          _.value ? (n(), i("p", Vk, m(_.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", Bk, [
        (n(), i(j, null, he(c, (N) => s("button", {
          key: N.id,
          class: Ve(["tab-btn", { active: u.value === N.id }]),
          onClick: (A) => u.value = N.id
        }, m(N.label), 11, Wk)), 64))
      ]),
      u.value === "workflow" ? (n(), i("section", Gk, [
        s("div", jk, [
          E[12] || (E[12] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(De, {
            variant: "secondary",
            size: "sm",
            loading: v.value,
            onClick: S
          }, {
            default: h(() => [...E[11] || (E[11] = [
              $(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        v.value ? (n(), i("div", Hk, "Scanning workflows...")) : f.value ? (n(), i("div", qk, m(f.value), 1)) : C.value.length ? (n(), i("div", Kk, [
          (n(!0), i(j, null, he(C.value, (N) => (n(), L(lc, {
            key: `${N.workflow}:${N.url}`,
            candidate: N,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === N.url,
            onSelect: E[0] || (E[0] = (A) => a("selectSource", A)),
            onShowMatchInfo: E[1] || (E[1] = (A) => w.value = !0)
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (n(), i("div", Jk, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (n(), i("section", Qk, [
        b(ac, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          onSelectSource: E[2] || (E[2] = (N) => a("selectSource", N))
        }, null, 8, ["action-label"])
      ])) : u.value === "direct" ? (n(), i("section", Yk, [
        s("div", Xk, [
          s("div", null, [
            E[13] || (E[13] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(ic, {
          modelValue: p.value,
          "onUpdate:modelValue": E[3] || (E[3] = (N) => p.value = N),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: E[4] || (E[4] = (N) => a("selectSource", N))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0),
      b(Yt, {
        show: w.value,
        title: "About Match Reasons",
        "max-width": "460px",
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: E[5] || (E[5] = (N) => w.value = !1)
      }, {
        content: h(() => [...E[14] || (E[14] = [
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
    ]));
  }
}), eb = /* @__PURE__ */ xe(Zk, [["__scopeId", "data-v-25d3af52"]]), tb = {
  key: 0,
  class: "error-message"
}, sb = /* @__PURE__ */ be({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { addModelSource: l } = ct(), r = k(o.model), c = k(null), u = k(null);
    yt(() => o.model, (f) => {
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
    return (f, p) => (n(), L(It, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        b(eb, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (n(), i("p", tb, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => a("close"))
        }, {
          default: h(() => [...p[2] || (p[2] = [
            $(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), ob = /* @__PURE__ */ xe(sb, [["__scopeId", "data-v-62104cdb"]]), nb = {
  key: 0,
  class: "model-details"
}, ab = { class: "detail-section" }, lb = { class: "detail-row" }, ib = { class: "detail-value mono" }, rb = { class: "detail-row" }, cb = { class: "detail-value mono" }, ub = { class: "detail-row" }, db = { class: "detail-value mono" }, mb = { class: "detail-row" }, fb = { class: "detail-value" }, vb = { class: "detail-row" }, pb = { class: "detail-value" }, gb = { class: "detail-row" }, hb = { class: "detail-value" }, yb = { class: "detail-section" }, wb = { class: "section-header" }, _b = {
  key: 0,
  class: "locations-list"
}, kb = { class: "location-path mono" }, bb = {
  key: 0,
  class: "location-modified"
}, $b = ["onClick"], Cb = {
  key: 1,
  class: "empty-state"
}, xb = { class: "detail-section" }, Sb = { class: "section-header-row" }, Ib = { class: "section-header" }, Eb = {
  key: 0,
  class: "sources-list"
}, Tb = { class: "source-type" }, Mb = ["href"], Pb = ["disabled", "onClick"], Rb = {
  key: 1,
  class: "empty-state"
}, Lb = {
  key: 2,
  class: "source-error"
}, Db = {
  key: 3,
  class: "source-success"
}, Nb = /* @__PURE__ */ be({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelDetails: l, removeModelSource: r, openFileLocation: c } = ct(), u = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(null);
    let C = null;
    function x(M, V = "success", ae = 2e3) {
      C && clearTimeout(C), _.value = { message: M, type: V }, C = setTimeout(() => {
        _.value = null;
      }, ae);
    }
    function S(M) {
      if (!M) return "Unknown";
      const V = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return M >= V ? `${(M / V).toFixed(1)} GB` : M >= ae ? `${(M / ae).toFixed(0)} MB` : `${(M / 1024).toFixed(0)} KB`;
    }
    function P(M) {
      navigator.clipboard.writeText(M), x("Copied to clipboard!");
    }
    async function T(M) {
      try {
        await c(M), x("Opening file location...");
      } catch {
        x("Failed to open location", "error");
      }
    }
    async function E(M) {
      if (u.value) {
        f.value = M, p.value = null, w.value = null;
        try {
          await r(u.value.hash, M), x("Source removed"), await H();
        } catch (V) {
          p.value = V instanceof Error ? V.message : "Failed to remove source";
        } finally {
          f.value = null;
        }
      }
    }
    async function N() {
      w.value = "Source added successfully!", g.value = !1, await H(), a("sourceSaved");
    }
    async function A() {
      w.value = "Hashes computed successfully!", await H();
    }
    async function H() {
      d.value = !0, v.value = null;
      try {
        u.value = await l(o.identifier);
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return at(H), (M, V) => {
      var ae;
      return n(), i(j, null, [
        b(It, {
          title: `Model Details: ${((ae = u.value) == null ? void 0 : ae.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: V[5] || (V[5] = (ce) => M.$emit("close"))
        }, {
          body: h(() => {
            var ce, ue, ke, Z;
            return [
              u.value ? (n(), i("div", nb, [
                s("section", ab, [
                  s("div", lb, [
                    V[7] || (V[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", ib, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[0] || (V[0] = (B) => P(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", rb, [
                    V[8] || (V[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", cb, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[1] || (V[1] = (B) => P(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", ub, [
                    V[9] || (V[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", db, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[2] || (V[2] = (B) => P(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", mb, [
                    V[10] || (V[10] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", fb, m(S(u.value.size)), 1)
                  ]),
                  s("div", vb, [
                    V[11] || (V[11] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", pb, m(u.value.category), 1)
                  ]),
                  s("div", gb, [
                    V[12] || (V[12] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", hb, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", yb, [
                  s("h4", wb, "Locations (" + m(((ce = u.value.locations) == null ? void 0 : ce.length) || 0) + ")", 1),
                  (ue = u.value.locations) != null && ue.length ? (n(), i("div", _b, [
                    (n(!0), i(j, null, he(u.value.locations, (B, K) => (n(), i("div", {
                      key: K,
                      class: "location-item"
                    }, [
                      s("span", kb, m(B.path), 1),
                      B.modified ? (n(), i("span", bb, "Modified: " + m(B.modified), 1)) : y("", !0),
                      B.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Re) => T(B.path)
                      }, " Open File Location ", 8, $b)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", Cb, "No locations found"))
                ]),
                s("section", xb, [
                  s("div", Sb, [
                    s("h4", Ib, "Download Sources (" + m(((ke = u.value.sources) == null ? void 0 : ke.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: V[3] || (V[3] = (B) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (Z = u.value.sources) != null && Z.length ? (n(), i("div", Eb, [
                    (n(!0), i(j, null, he(u.value.sources, (B, K) => (n(), i("div", {
                      key: K,
                      class: "source-item"
                    }, [
                      s("span", Tb, m(B.type) + ":", 1),
                      s("a", {
                        href: B.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(B.url), 9, Mb),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: f.value === B.url,
                        onClick: (Re) => E(B.url)
                      }, m(f.value === B.url ? "..." : "×"), 9, Pb)
                    ]))), 128))
                  ])) : (n(), i("div", Rb, " No download sources configured ")),
                  p.value ? (n(), i("p", Lb, m(p.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", Db, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: V[4] || (V[4] = (ce) => M.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (n(), L(Lt, { to: "body" }, [
          _.value ? (n(), i("div", {
            key: 0,
            class: Ve(["toast", _.value.type])
          }, m(_.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (n(), L(ob, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: V[6] || (V[6] = (ce) => g.value = !1),
          onSaved: N,
          onHashesComputed: A
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), El = /* @__PURE__ */ xe(Nb, [["__scopeId", "data-v-78905fb5"]]), Ob = { class: "workflow-links-tab" }, Ub = { class: "section-header-row" }, Ab = {
  key: 0,
  class: "state-message"
}, zb = {
  key: 1,
  class: "error-message"
}, Fb = {
  key: 2,
  class: "candidate-list"
}, Vb = {
  key: 3,
  class: "state-message"
}, Bb = /* @__PURE__ */ be({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: a } = ct(), l = k([]), r = k(!1), c = k(null), u = k(!1), d = R(() => l.value.filter((f) => f.source === "workflow"));
    async function v() {
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
    return at(v), (f, p) => (n(), i("div", Ob, [
      s("div", Ub, [
        p[4] || (p[4] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(De, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: v
        }, {
          default: h(() => [...p[3] || (p[3] = [
            $(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (n(), i("div", Ab, "Scanning workflows...")) : c.value ? (n(), i("div", zb, m(c.value), 1)) : d.value.length ? (n(), i("div", Fb, [
        (n(!0), i(j, null, he(d.value, (w) => (n(), L(lc, {
          key: `${w.workflow}:${w.url}`,
          candidate: w,
          "action-label": "Use URL",
          onSelect: p[0] || (p[0] = (g) => o("selectUrl", g)),
          onShowMatchInfo: p[1] || (p[1] = (g) => u.value = !0)
        }, null, 8, ["candidate"]))), 128))
      ])) : (n(), i("div", Vb, " No likely workflow links found. Try Hugging Face or Direct URL. ")),
      b(Yt, {
        show: u.value,
        title: "About Match Reasons",
        "max-width": "460px",
        onClose: p[2] || (p[2] = (w) => u.value = !1)
      }, {
        content: h(() => [...p[5] || (p[5] = [
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
      }, 8, ["show"])
    ]));
  }
}), Wb = /* @__PURE__ */ xe(Bb, [["__scopeId", "data-v-1be75a55"]]), Gb = { class: "civitai-tab" }, jb = /* @__PURE__ */ be({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (n(), i("div", Gb, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Hb = /* @__PURE__ */ xe(jb, [["__scopeId", "data-v-44948051"]]), qb = { class: "direct-url-tab" }, Kb = {
  key: 0,
  class: "error"
}, Jb = /* @__PURE__ */ be({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(""), r = k("");
    yt(() => o.initialUrl, (v) => {
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
    return (v, f) => (n(), i("div", qb, [
      b(ic, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(nc, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (n(), i("p", Kb, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), Qb = /* @__PURE__ */ xe(Jb, [["__scopeId", "data-v-a6d21f27"]]), Yb = { class: "download-modal" }, Xb = { class: "tab-bar" }, Zb = ["onClick"], e2 = { class: "tab-content" }, t2 = /* @__PURE__ */ be({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: a } = Lo(), l = [
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
    return (p, w) => e.show ? (n(), L(It, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: f
    }, {
      body: h(() => [
        s("div", Yb, [
          s("div", Xb, [
            (n(), i(j, null, he(l, (g) => s("button", {
              key: g.id,
              class: Ve(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, Zb)), 64))
          ]),
          s("div", e2, [
            r.value === "workflow" ? (n(), L(Wb, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (n(), L(ac, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (n(), L(Hb, { key: 2 })) : r.value === "direct" ? (n(), L(Qb, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...w[0] || (w[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), rc = /* @__PURE__ */ xe(t2, [["__scopeId", "data-v-de2e4fac"]]), s2 = /* @__PURE__ */ be({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: a, getStatus: l } = ct(), r = k([]), c = k([]), u = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const C = R(
      () => r.value.reduce((M, V) => M + (V.size || 0), 0)
    ), x = R(() => {
      if (!f.value.trim()) return r.value;
      const M = f.value.toLowerCase();
      return r.value.filter((V) => V.filename.toLowerCase().includes(M));
    }), S = R(() => {
      if (!f.value.trim()) return c.value;
      const M = f.value.toLowerCase();
      return c.value.filter((V) => V.filename.toLowerCase().includes(M));
    }), P = R(() => {
      const M = {};
      for (const ae of x.value) {
        const ce = ae.type || "other";
        M[ce] || (M[ce] = []), M[ce].push(ae);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(M).sort(([ae], [ce]) => {
        const ue = V.indexOf(ae), ke = V.indexOf(ce);
        return ue >= 0 && ke >= 0 ? ue - ke : ue >= 0 ? -1 : ke >= 0 ? 1 : ae.localeCompare(ce);
      }).map(([ae, ce]) => ({ type: ae, models: ce }));
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
    function A(M) {
      alert(`Download functionality not yet implemented for ${M}`);
    }
    async function H() {
      d.value = !0, v.value = null;
      try {
        const M = await a();
        r.value = M, c.value = [];
        const V = await l();
        u.value = V.environment || "production";
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return at(H), (M, V) => (n(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (ae) => p.value = !0)
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (ae) => g.value = !0)
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
          b(ro, {
            modelValue: f.value,
            "onUpdate:modelValue": V[2] || (V[2] = (ae) => f.value = ae),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), L($s, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (n(), L(Cs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length ? (n(), L(ca, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + m(r.value.length) + " models • " + m(T(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(j, null, he(P.value, (ae) => (n(), L(St, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(ae.models, (ce) => (n(), L(Vt, {
                  key: ce.hash || ce.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...V[7] || (V[7] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(m(ce.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(T(ce.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: (ce.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Path:",
                      value: ce.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ue) => E(ce)
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
                  icon: h(() => [...V[9] || (V[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(ae.filename), 1)
                  ]),
                  subtitle: h(() => [...V[10] || (V[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ce;
                    return [
                      b(_t, {
                        label: "Required by:",
                        value: ((ce = ae.workflow_names) == null ? void 0 : ce.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ce) => A(ae.filename)
                    }, {
                      default: h(() => [...V[11] || (V[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => N(ae.filename)
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
            !x.value.length && !S.value.length ? (n(), L(rs, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(Yt, {
        show: p.value,
        title: "About Environment Models",
        onClose: V[3] || (V[3] = (ae) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            V[13] || (V[13] = $(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
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
      w.value ? (n(), L(El, {
        key: 0,
        identifier: w.value,
        onClose: V[4] || (V[4] = (ae) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(rc, {
        show: g.value,
        onClose: V[5] || (V[5] = (ae) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), o2 = /* @__PURE__ */ xe(s2, [["__scopeId", "data-v-af3ca736"]]), n2 = {
  key: 0,
  class: "indexing-progress"
}, a2 = { class: "progress-info" }, l2 = { class: "progress-label" }, i2 = { class: "progress-count" }, r2 = { class: "progress-bar" }, c2 = { class: "modal-content" }, u2 = { class: "modal-header" }, d2 = { class: "modal-body" }, m2 = { class: "input-group" }, f2 = { class: "current-path" }, v2 = { class: "input-group" }, p2 = { class: "modal-footer" }, g2 = /* @__PURE__ */ be({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), c = t, u = k([]), d = k(!1), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), C = k(null), x = k(""), S = k(!1), P = k(!1), T = k(null), E = R(
      () => u.value.reduce((ke, Z) => ke + (Z.size || 0), 0)
    ), N = R(() => {
      if (!p.value.trim()) return u.value;
      const ke = p.value.toLowerCase();
      return u.value.filter((Z) => {
        const B = Z, K = Z.sha256 || B.sha256_hash || "";
        return Z.filename.toLowerCase().includes(ke) || K.toLowerCase().includes(ke);
      });
    }), A = R(() => {
      const ke = {};
      for (const B of N.value) {
        const K = B.type || "other";
        ke[K] || (ke[K] = []), ke[K].push(B);
      }
      const Z = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ke).sort(([B], [K]) => {
        const Re = Z.indexOf(B), X = Z.indexOf(K);
        return Re >= 0 && X >= 0 ? Re - X : Re >= 0 ? -1 : X >= 0 ? 1 : B.localeCompare(K);
      }).map(([B, K]) => ({ type: B, models: K }));
    });
    function H(ke) {
      if (!ke) return "Unknown";
      const Z = 1024 * 1024 * 1024, B = 1024 * 1024;
      return ke >= Z ? `${(ke / Z).toFixed(1)} GB` : ke >= B ? `${(ke / B).toFixed(0)} MB` : `${(ke / 1024).toFixed(0)} KB`;
    }
    function M(ke) {
      g.value = ke.hash || ke.filename;
    }
    async function V() {
      v.value = !0, f.value = null;
      try {
        const ke = await a();
        await ce(), ke.changes > 0 && console.log(`Scan complete: ${ke.changes} changes detected`);
      } catch (ke) {
        f.value = ke instanceof Error ? ke.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function ae() {
      if (x.value.trim()) {
        S.value = !0, f.value = null;
        try {
          const ke = await r(x.value.trim());
          C.value = ke.path, _.value = !1, x.value = "", await ce(), console.log(`Directory changed: ${ke.models_indexed} models indexed`), c("refresh");
        } catch (ke) {
          f.value = ke instanceof Error ? ke.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function ce() {
      d.value = !0, f.value = null;
      try {
        u.value = await o();
      } catch (ke) {
        f.value = ke instanceof Error ? ke.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function ue() {
      try {
        const ke = await l();
        C.value = ke.path;
      } catch {
      }
    }
    return at(() => {
      ce(), ue();
    }), (ke, Z) => (n(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: Z[2] || (Z[2] = (B) => w.value = !0)
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: V
              }, {
                default: h(() => [
                  $(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: Z[0] || (Z[0] = (B) => _.value = !0)
              }, {
                default: h(() => [...Z[11] || (Z[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: Z[1] || (Z[1] = (B) => P.value = !0)
              }, {
                default: h(() => [...Z[12] || (Z[12] = [
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
          T.value ? (n(), i("div", n2, [
            s("div", a2, [
              s("span", l2, m(T.value.message), 1),
              s("span", i2, m(T.value.current) + "/" + m(T.value.total), 1)
            ]),
            s("div", r2, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(ro, {
            modelValue: p.value,
            "onUpdate:modelValue": Z[3] || (Z[3] = (B) => p.value = B),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || T.value ? (n(), L($s, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (n(), L(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: ce
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            u.value.length ? (n(), L(ca, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + m(u.value.length) + " models • " + m(H(E.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(j, null, he(A.value, (B) => (n(), L(St, {
              key: B.type,
              title: B.type.toUpperCase(),
              count: B.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(B.models, (K) => (n(), L(Vt, {
                  key: K.sha256 || K.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...Z[13] || (Z[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(m(K.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(H(K.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Hash:",
                      value: K.hash ? K.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Re) => M(K)
                    }, {
                      default: h(() => [...Z[14] || (Z[14] = [
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
            N.value.length ? y("", !0) : (n(), L(rs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(Yt, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: Z[4] || (Z[4] = (B) => w.value = !1)
      }, {
        content: h(() => [...Z[15] || (Z[15] = [
          s("p", null, [
            $(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (n(), L(El, {
        key: 0,
        identifier: g.value,
        onClose: Z[5] || (Z[5] = (B) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), L(Lt, { to: "body" }, [
        _.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: Z[9] || (Z[9] = vt((B) => _.value = !1, ["self"]))
        }, [
          s("div", c2, [
            s("div", u2, [
              Z[16] || (Z[16] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: Z[6] || (Z[6] = (B) => _.value = !1)
              }, "✕")
            ]),
            s("div", d2, [
              s("div", m2, [
                Z[17] || (Z[17] = s("label", null, "Current Directory", -1)),
                s("code", f2, m(C.value || "Not set"), 1)
              ]),
              s("div", v2, [
                Z[18] || (Z[18] = s("label", null, "New Directory Path", -1)),
                b(bt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": Z[7] || (Z[7] = (B) => x.value = B),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              Z[19] || (Z[19] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", p2, [
              b(De, {
                variant: "secondary",
                onClick: Z[8] || (Z[8] = (B) => _.value = !1)
              }, {
                default: h(() => [...Z[20] || (Z[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(De, {
                variant: "primary",
                disabled: !x.value.trim() || S.value,
                loading: S.value,
                onClick: ae
              }, {
                default: h(() => [
                  $(m(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      b(rc, {
        show: P.value,
        onClose: Z[10] || (Z[10] = (B) => P.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), h2 = /* @__PURE__ */ xe(g2, [["__scopeId", "data-v-3705114c"]]), y2 = { class: "node-details" }, w2 = { class: "status-row" }, _2 = {
  key: 0,
  class: "detail-row"
}, k2 = { class: "value" }, b2 = { class: "detail-row" }, $2 = { class: "value" }, C2 = {
  key: 1,
  class: "detail-row"
}, x2 = { class: "value mono" }, S2 = {
  key: 2,
  class: "detail-row"
}, I2 = ["href"], E2 = {
  key: 3,
  class: "detail-row"
}, T2 = { class: "value mono small" }, M2 = { class: "detail-row" }, P2 = {
  key: 0,
  class: "value"
}, R2 = {
  key: 1,
  class: "workflow-list"
}, L2 = /* @__PURE__ */ be({
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
    return (u, d) => (n(), L(It, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => a("close"))
    }, {
      body: h(() => [
        s("div", y2, [
          s("div", w2, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ve(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", _2, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", k2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", b2, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", $2, m(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", C2, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", x2, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", S2, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(m(e.node.repository) + " ", 1),
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
            ], 8, I2)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", E2, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", T2, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", M2, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", P2, " Not used in any workflows ")) : (n(), i("div", R2, [
              (n(!0), i(j, null, he(e.node.used_in_workflows, (v) => (n(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => a("close"))
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
}), D2 = /* @__PURE__ */ xe(L2, [["__scopeId", "data-v-b342f626"]]), N2 = { class: "dialog-message" }, O2 = {
  key: 0,
  class: "dialog-details"
}, U2 = {
  key: 1,
  class: "dialog-warning"
}, A2 = /* @__PURE__ */ be({
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
        s("p", N2, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", O2, [
          (n(!0), i(j, null, he(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", U2, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            $(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), L(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            $(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(De, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [
            $(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tl = /* @__PURE__ */ xe(A2, [["__scopeId", "data-v-3670b9f5"]]), z2 = { class: "mismatch-warning" }, F2 = { class: "version-mismatch" }, V2 = { class: "version-actual" }, B2 = { class: "version-expected" }, W2 = { style: { color: "var(--cg-color-warning)" } }, G2 = { style: { color: "var(--cg-color-warning)" } }, j2 = {
  key: 0,
  class: "community-status-badge"
}, H2 = { key: 0 }, q2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, K2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, J2 = { class: "criticality-control" }, Q2 = ["value", "disabled", "onChange"], Y2 = /* @__PURE__ */ be({
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
    }), p = k(!1), w = k(null), g = k(""), _ = k(!1), C = k(null), x = k(/* @__PURE__ */ new Set()), S = k(/* @__PURE__ */ new Set()), P = k(null), T = R(() => {
      if (!g.value.trim()) return f.value.nodes;
      const me = g.value.toLowerCase();
      return f.value.nodes.filter(
        (le) => {
          var I, F;
          return le.name.toLowerCase().includes(me) || ((I = le.description) == null ? void 0 : I.toLowerCase().includes(me)) || ((F = le.repository) == null ? void 0 : F.toLowerCase().includes(me));
        }
      );
    }), E = R(
      () => T.value.filter((me) => me.installed && me.tracked)
    ), N = R(
      () => T.value.filter((me) => !me.installed && me.tracked && !me.issue_type)
    ), A = R(
      () => T.value.filter((me) => me.installed && !me.tracked)
    ), H = R(
      () => T.value.filter((me) => me.issue_type === "version_gated")
    ), M = R(
      () => T.value.filter((me) => me.issue_type === "uninstallable")
    );
    function V(me) {
      return me.registry_id || me.name;
    }
    function ae(me) {
      return x.value.has(V(me));
    }
    async function ce(me, le) {
      const I = me.registry_id;
      if (!I) {
        a("toast", `Node "${me.name}" has no package id for install`, "warning");
        return;
      }
      if (le === "git" && !me.repository) {
        a("toast", `Node "${me.name}" has no repository URL for git install`, "warning");
        return;
      }
      const F = {
        id: I,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      le === "git" && me.repository && (F.repository = me.repository, F.install_source = "git"), await d(F), x.value.add(V(me)), a("toast", `✓ Queued install for "${me.name}"`, "success");
    }
    function ue(me) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[me] || me;
    }
    const ke = R(() => o.versionMismatches.length > 0);
    function Z(me) {
      return !me.used_in_workflows || me.used_in_workflows.length === 0 ? "Not used in any workflows" : me.used_in_workflows.length === 1 ? me.used_in_workflows[0] : `${me.used_in_workflows.length} workflows`;
    }
    function B(me) {
      return me.criticality === "optional" ? "optional" : "required";
    }
    function K(me) {
      return S.value.has(me.name);
    }
    async function Re(me, le) {
      const I = le.target, F = B(me), ie = I.value;
      if (ie !== F) {
        S.value = new Set(S.value).add(me.name), me.criticality = ie;
        try {
          const Ie = await v(me.name, ie);
          if (Ie.status !== "success") {
            me.criticality = F, a("toast", Ie.message || `Failed to update "${me.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${me.name}" as ${ie}`, "success");
        } catch (Ie) {
          me.criticality = F, I.value = F, a("toast", `Error updating criticality: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
        } finally {
          const Ie = new Set(S.value);
          Ie.delete(me.name), S.value = Ie;
        }
      }
    }
    function X(me) {
      return me.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ye(me) {
      return me.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function U(me) {
      return me.registry_id ? `Community-mapped package: ${me.registry_id}` : "Community-mapped package";
    }
    function fe(me) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Le(me) {
      C.value = me;
    }
    function ve() {
      a("open-node-manager");
    }
    function ee(me) {
      P.value = {
        title: "Track as Development Node",
        message: `Track "${me}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          P.value = null;
          try {
            p.value = !0;
            const le = await r(me);
            le.status === "success" ? (a("toast", `✓ Node "${me}" tracked as development`, "success"), await Me()) : a("toast", `Failed to track node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error tracking node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Q(me) {
      P.value = {
        title: "Remove Untracked Node",
        message: `Remove "${me}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          P.value = null;
          try {
            p.value = !0;
            const le = await u(me);
            le.status === "success" ? (a("toast", `✓ Node "${me}" removed`, "success"), await Me()) : a("toast", `Failed to remove node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error removing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function we(me) {
      P.value = {
        title: "Install Missing Node",
        message: `Install "${me}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          P.value = null;
          try {
            p.value = !0;
            const le = await c(me);
            le.status === "success" ? (a("toast", `✓ Node "${me}" installed`, "success"), await Me()) : a("toast", `Failed to install node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error installing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function te(me) {
      P.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${me.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          P.value = null;
          try {
            p.value = !0, await ce(me, "registry");
          } catch (le) {
            a("toast", `Error queueing install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function oe(me) {
      P.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${me.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          P.value = null;
          try {
            p.value = !0, await ce(me, "git");
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
        f.value = await l();
      } catch (me) {
        w.value = me instanceof Error ? me.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return at(Me), (me, le) => (n(), i(j, null, [
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
                onClick: ve
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
          b(ro, {
            modelValue: g.value,
            "onUpdate:modelValue": le[1] || (le[1] = (I) => g.value = I),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (n(), L($s, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (n(), L(Cs, {
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
                s("div", z2, [
                  le[8] || (le[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(j, null, he(e.versionMismatches, (I) => (n(), L(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[9] || (le[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", F2, [
                      s("span", V2, m(I.actual), 1),
                      le[10] || (le[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", B2, m(I.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "warning",
                      size: "sm",
                      onClick: le[2] || (le[2] = (F) => a("repair-environment"))
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
            H.value.length ? (n(), L(St, {
              key: 1,
              title: "BLOCKED",
              count: H.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(H.value, (I) => (n(), L(Vt, {
                  key: `blocked-${I.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[12] || (le[12] = [
                    $("⛔", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", W2, m(X(I)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || ye(I)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => Le(I)
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
            M.value.length ? (n(), L(St, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(M.value, (I) => (n(), L(Vt, {
                  key: `community-${I.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[14] || (le[14] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", G2, m(U(I)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || fe(I)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => Le(I)
                    }, {
                      default: h(() => [...le[15] || (le[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ae(I) ? (n(), i("span", j2, "Queued")) : (n(), i(j, { key: 1 }, [
                      I.registry_id ? (n(), L(Te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (F) => te(I)
                      }, {
                        default: h(() => [...le[16] || (le[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      I.repository ? (n(), L(Te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (F) => oe(I)
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
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [...le[19] || (le[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => Le(I)
                    }, {
                      default: h(() => [...le[20] || (le[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => ee(I.name)
                    }, {
                      default: h(() => [...le[21] || (le[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (F) => Q(I.name)
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
            E.value.length ? (n(), L(St, {
              key: 4,
              title: "INSTALLED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(E.value, (I) => (n(), L(Vt, {
                  key: I.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(m(I.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    I.version ? (n(), i("span", H2, m(I.source === "development" ? "" : "v") + m(I.version), 1)) : (n(), i("span", q2, "version unknown")),
                    s("span", K2, " • " + m(ue(I.source)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => Le(I)
                    }, {
                      default: h(() => [...le[23] || (le[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", J2, [
                      le[25] || (le[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: B(I),
                        disabled: K(I),
                        onChange: (F) => Re(I, F)
                      }, [...le[24] || (le[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, Q2)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (n(), L(St, {
              key: 5,
              title: "MISSING",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(N.value, (I) => (n(), L(Vt, {
                  key: I.name,
                  status: "missing"
                }, {
                  icon: h(() => [...le[26] || (le[26] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [...le[27] || (le[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(_t, {
                      label: "Required by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => Le(I)
                    }, {
                      default: h(() => [...le[28] || (le[28] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => we(I.name)
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
            !E.value.length && !N.value.length && !H.value.length && !M.value.length && !A.value.length ? (n(), L(rs, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(Yt, {
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
      C.value ? (n(), L(D2, {
        key: 0,
        node: C.value,
        onClose: le[5] || (le[5] = (I) => C.value = null)
      }, null, 8, ["node"])) : y("", !0),
      P.value ? (n(), L(Tl, {
        key: 1,
        title: P.value.title,
        message: P.value.message,
        warning: P.value.warning,
        "confirm-label": P.value.confirmLabel,
        destructive: P.value.destructive,
        onConfirm: P.value.onConfirm,
        onCancel: le[6] || (le[6] = (I) => P.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), X2 = /* @__PURE__ */ xe(Y2, [["__scopeId", "data-v-edfa1c86"]]), Z2 = { class: "setting-info" }, e$ = { class: "setting-label" }, t$ = {
  key: 0,
  class: "required-marker"
}, s$ = {
  key: 0,
  class: "setting-description"
}, o$ = { class: "setting-control" }, n$ = /* @__PURE__ */ be({
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
      s("div", Z2, [
        s("div", e$, [
          $(m(e.label) + " ", 1),
          e.required ? (n(), i("span", t$, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", s$, m(e.description), 1)) : y("", !0)
      ]),
      s("div", o$, [
        st(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), vo = /* @__PURE__ */ xe(n$, [["__scopeId", "data-v-3e106b1c"]]), a$ = ["type", "value", "placeholder", "disabled"], l$ = /* @__PURE__ */ be({
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
        d[0] || (d[0] = ds((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = ds((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, a$));
  }
}), yo = /* @__PURE__ */ xe(l$, [["__scopeId", "data-v-0380d08f"]]), i$ = { class: "toggle" }, r$ = ["checked", "disabled"], c$ = /* @__PURE__ */ be({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", i$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, r$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Si = /* @__PURE__ */ xe(c$, [["__scopeId", "data-v-71c0f550"]]), Wa = "ComfyGit.Deploy.GitHubPAT";
function cc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function u$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function d$() {
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
    isRemoteSsh: cc,
    isRemoteHttps: u$
  };
}
const m$ = { class: "workspace-settings-content" }, f$ = { class: "settings-section" }, v$ = { class: "path-setting" }, p$ = { class: "path-value" }, g$ = { class: "path-setting" }, h$ = { class: "path-value" }, y$ = { class: "settings-section" }, w$ = { class: "token-setting" }, _$ = {
  key: 0,
  class: "token-warning"
}, k$ = { class: "token-actions" }, b$ = { class: "settings-section" }, $$ = { class: "settings-section" }, C$ = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = d$(), g = k(!1), _ = k(null), C = k(null), x = k(null), S = k(null), P = k(""), T = k(""), E = k(""), N = k(""), A = k(!1), H = k(!1), M = k(!1), V = k(""), ae = k(!1), ce = k(!1), ue = k(null), ke = k(!1), Z = k(!0);
    function B(we) {
      return we.join(" ");
    }
    function K(we) {
      return we.trim() ? we.trim().split(/\s+/) : [];
    }
    const Re = R(() => {
      if (!S.value) return !1;
      const we = A.value, te = H.value, oe = M.value, Me = N.value !== B(S.value.comfyui_extra_args || []);
      return we || te || oe || Me;
    }), X = R(() => w());
    async function ye() {
      var we;
      g.value = !0, _.value = null;
      try {
        x.value = await r(a.workspacePath || void 0), S.value = { ...x.value }, P.value = x.value.civitai_api_key || "", T.value = x.value.huggingface_token || "", N.value = B(x.value.comfyui_extra_args || []), E.value = v() || "", V.value = E.value, A.value = !1, H.value = !1, M.value = !1, ue.value = null;
        const te = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        ke.value = te !== "false", Z.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Me = (we = (await u()).remotes) == null ? void 0 : we.find((me) => me.name === "origin");
          ae.value = !!(Me && cc(Me.url));
        } catch {
          ae.value = !1;
        }
      } catch (te) {
        _.value = te instanceof Error ? te.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function U() {
      var we;
      C.value = null;
      try {
        const te = {};
        A.value && (te.civitai_api_key = P.value || null), H.value && (te.huggingface_token = T.value || null), N.value !== B(((we = S.value) == null ? void 0 : we.comfyui_extra_args) || []) && (te.comfyui_extra_args = K(N.value)), await c(te, a.workspacePath || void 0), M.value && (E.value ? f(E.value) : p()), await ye(), C.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          C.value = null;
        }, 3e3);
      } catch (te) {
        const oe = te instanceof Error ? te.message : "Failed to save settings";
        C.value = { type: "error", message: oe }, l("error", oe);
      }
    }
    function fe() {
      S.value && (P.value = S.value.civitai_api_key || "", T.value = S.value.huggingface_token || "", N.value = B(S.value.comfyui_extra_args || []), E.value = V.value, A.value = !1, H.value = !1, M.value = !1, ue.value = null, C.value = null);
    }
    async function Le() {
      if (E.value) {
        ce.value = !0, ue.value = null;
        try {
          const we = await d(E.value);
          ue.value = {
            type: we.status === "success" ? "success" : "error",
            message: we.message
          };
        } catch (we) {
          ue.value = {
            type: "error",
            message: we instanceof Error ? we.message : "Connection test failed"
          };
        } finally {
          ce.value = !1;
        }
      }
    }
    function ve() {
      E.value = "", M.value = !0, ue.value = null;
    }
    function ee(we) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(we)), console.log("[ComfyGit] Auto-refresh setting saved:", we);
    }
    function Q(we) {
      we ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", we ? "enabled" : "disabled");
    }
    return t({
      saveSettings: U,
      resetSettings: fe,
      hasChanges: Re,
      loadSettings: ye
    }), at(ye), (we, te) => (n(), i("div", m$, [
      g.value ? (n(), L($s, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (n(), L(Cs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: ye
      }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
        b(St, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var oe, Me;
            return [
              s("div", f$, [
                s("div", v$, [
                  te[9] || (te[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  te[10] || (te[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", p$, m(((oe = x.value) == null ? void 0 : oe.workspace_path) || "Loading..."), 1)
                ]),
                s("div", g$, [
                  te[11] || (te[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  te[12] || (te[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", h$, m(((Me = x.value) == null ? void 0 : Me.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(St, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", y$, [
              b(vo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: P.value,
                    "onUpdate:modelValue": te[0] || (te[0] = (oe) => P.value = oe),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: te[1] || (te[1] = (oe) => A.value = !0)
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
                    modelValue: T.value,
                    "onUpdate:modelValue": te[2] || (te[2] = (oe) => T.value = oe),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: te[3] || (te[3] = (oe) => H.value = !0)
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
                  s("div", w$, [
                    b(yo, {
                      modelValue: E.value,
                      "onUpdate:modelValue": te[4] || (te[4] = (oe) => E.value = oe),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: te[5] || (te[5] = (oe) => M.value = !0)
                    }, null, 8, ["modelValue"]),
                    ae.value ? (n(), i("div", _$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    te[15] || (te[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", k$, [
                      b(Te, {
                        variant: "ghost",
                        size: "xs",
                        loading: ce.value,
                        disabled: !E.value || ce.value,
                        onClick: Le
                      }, {
                        default: h(() => [...te[13] || (te[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      X.value ? (n(), L(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ve
                      }, {
                        default: h(() => [...te[14] || (te[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    ue.value ? (n(), i("div", {
                      key: 1,
                      class: Ve(["token-test-result", ue.value.type])
                    }, m(ue.value.message), 3)) : y("", !0)
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
            s("div", b$, [
              b(vo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: N.value,
                    "onUpdate:modelValue": te[6] || (te[6] = (oe) => N.value = oe),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              te[16] || (te[16] = s("div", { class: "setting-hint" }, [
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
            s("div", $$, [
              b(vo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Si, {
                    modelValue: ke.value,
                    "onUpdate:modelValue": [
                      te[7] || (te[7] = (oe) => ke.value = oe),
                      ee
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
                  b(Si, {
                    modelValue: Z.value,
                    "onUpdate:modelValue": [
                      te[8] || (te[8] = (oe) => Z.value = oe),
                      Q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        C.value ? (n(), L(ca, {
          key: 0,
          variant: (C.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Rt({ color: C.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(C.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), uc = /* @__PURE__ */ xe(C$, [["__scopeId", "data-v-f1bdc574"]]), x$ = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), L(At, null, {
      header: h(() => [
        b(zt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              b(Te, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
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
        b(uc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), S$ = { class: "env-title" }, I$ = {
  key: 0,
  class: "current-badge"
}, E$ = {
  key: 0,
  class: "branch-info"
}, T$ = /* @__PURE__ */ be({
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
    }, Qt({
      icon: h(() => [
        $(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", S$, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", I$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", E$, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + m(e.currentBranch), 1)
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
}), M$ = /* @__PURE__ */ xe(T$, [["__scopeId", "data-v-9231917a"]]), P$ = { class: "env-details" }, R$ = { class: "status-row" }, L$ = {
  key: 0,
  class: "detail-row"
}, D$ = { class: "value mono" }, N$ = {
  key: 1,
  class: "detail-row"
}, O$ = { class: "value mono small" }, U$ = { class: "collapsible-section" }, A$ = { class: "value" }, z$ = {
  key: 0,
  class: "collapsible-body"
}, F$ = { class: "item-list" }, V$ = { class: "item-name" }, B$ = { class: "item-name" }, W$ = { class: "item-name" }, G$ = { class: "item-name" }, j$ = {
  key: 0,
  class: "empty-list"
}, H$ = { class: "collapsible-section" }, q$ = { class: "value" }, K$ = {
  key: 0,
  class: "collapsible-body"
}, J$ = { class: "item-list" }, Q$ = { class: "item-name" }, Y$ = {
  key: 0,
  class: "item-meta"
}, X$ = {
  key: 0,
  class: "empty-list"
}, Z$ = { class: "collapsible-section" }, eC = { class: "value" }, tC = {
  key: 0,
  class: "missing-count"
}, sC = {
  key: 0,
  class: "collapsible-body"
}, oC = { class: "item-list" }, nC = { class: "model-row" }, aC = { class: "item-name" }, lC = { class: "model-meta" }, iC = { class: "item-meta" }, rC = {
  key: 0,
  class: "item-meta"
}, cC = {
  key: 0,
  class: "empty-list"
}, uC = {
  key: 2,
  class: "section-divider"
}, dC = {
  key: 3,
  class: "detail-row"
}, mC = { class: "value" }, fC = { class: "footer-actions" }, vC = /* @__PURE__ */ be({
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
    return (d, v) => (n(), L(It, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => a("close"))
    }, {
      body: h(() => {
        var f, p, w, g, _, C, x, S, P, T, E, N, A, H;
        return [
          s("div", P$, [
            s("div", R$, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Ve(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", L$, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", D$, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", N$, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", O$, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", U$, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (M) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", A$, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", z$, [
                s("div", F$, [
                  (n(!0), i(j, null, he(e.detail.workflows.synced, (M) => (n(), i("div", {
                    key: "synced-" + M,
                    class: "list-item"
                  }, [
                    s("span", V$, m(M), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.new, (M) => (n(), i("div", {
                    key: "new-" + M,
                    class: "list-item"
                  }, [
                    s("span", B$, m(M), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.modified, (M) => (n(), i("div", {
                    key: "mod-" + M,
                    class: "list-item"
                  }, [
                    s("span", W$, m(M), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.deleted, (M) => (n(), i("div", {
                    key: "del-" + M,
                    class: "list-item"
                  }, [
                    s("span", G$, m(M), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", j$, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", H$, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (M) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", q$, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (n(), i("div", K$, [
                s("div", J$, [
                  (n(!0), i(j, null, he(e.detail.nodes, (M) => (n(), i("div", {
                    key: M.name,
                    class: "list-item"
                  }, [
                    s("span", Q$, m(M.name), 1),
                    M.version ? (n(), i("span", Y$, m(M.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", X$, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", Z$, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (M) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", eC, [
                  $(m(((x = e.detail) == null ? void 0 : x.model_count) ?? e.environment.model_count) + " ", 1),
                  (P = (S = e.detail) == null ? void 0 : S.models) != null && P.missing.length ? (n(), i("span", tC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (T = e.detail) != null && T.models ? (n(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (E = e.detail) != null && E.models && l.value.has("models") ? (n(), i("div", sC, [
                s("div", oC, [
                  (n(!0), i(j, null, he(e.detail.models.missing, (M) => (n(), i("div", {
                    key: M.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", nC, [
                      s("span", aC, m(M.filename), 1),
                      s("span", {
                        class: Ve(["criticality-badge", M.criticality])
                      }, m(M.criticality), 3)
                    ]),
                    s("div", lC, [
                      s("span", iC, m(M.category), 1),
                      M.workflow_names.length ? (n(), i("span", rC, " used by: " + m(M.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", cC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (n(), i("div", uC)) : y("", !0),
            (A = e.detail) != null && A.created_at || e.environment.created_at ? (n(), i("div", dC, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", mC, m(u(((H = e.detail) == null ? void 0 : H.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", fC, [
          b(De, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => a("export", e.environment.name))
          }, {
            default: h(() => [...v[19] || (v[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), L(De, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => a("delete", e.environment.name))
          }, {
            default: h(() => [...v[20] || (v[20] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(De, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => a("close"))
          }, {
            default: h(() => [...v[21] || (v[21] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), pC = /* @__PURE__ */ xe(vC, [["__scopeId", "data-v-750671f5"]]), dc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], mc = "3.12", Ml = [
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
], fc = "auto", gC = { class: "progress-bar" }, hC = /* @__PURE__ */ be({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = R(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (n(), i("div", gC, [
      s("div", {
        class: Ve(["progress-fill", e.variant]),
        style: Rt({ width: o.value })
      }, null, 6)
    ]));
  }
}), vc = /* @__PURE__ */ xe(hC, [["__scopeId", "data-v-1beb0512"]]), yC = { class: "task-progress" }, wC = { class: "progress-info" }, _C = { class: "progress-percentage" }, kC = { class: "progress-message" }, bC = {
  key: 0,
  class: "progress-steps"
}, $C = { class: "step-icon" }, CC = { class: "step-label" }, xC = /* @__PURE__ */ be({
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
    return (l, r) => (n(), i("div", yC, [
      b(vc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", wC, [
        s("span", _C, m(e.progress) + "%", 1),
        s("span", kC, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", bC, [
        (n(!0), i(j, null, he(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Ve(["step", o(c.id)])
        }, [
          s("span", $C, m(a(c.id)), 1),
          s("span", CC, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Kn = /* @__PURE__ */ xe(xC, [["__scopeId", "data-v-9d1de66c"]]), SC = {
  key: 0,
  class: "create-env-form"
}, IC = { class: "form-field" }, EC = { class: "input-wrapper" }, TC = {
  key: 0,
  class: "validating-indicator"
}, MC = {
  key: 1,
  class: "valid-indicator"
}, PC = {
  key: 0,
  class: "field-error"
}, RC = { class: "form-field" }, LC = ["value"], DC = { class: "form-field" }, NC = ["disabled"], OC = ["value"], UC = { class: "form-field" }, AC = ["value"], zC = { class: "form-field form-field--checkbox" }, FC = { class: "form-checkbox" }, VC = {
  key: 1,
  class: "create-env-progress"
}, BC = { class: "creating-intro" }, WC = {
  key: 0,
  class: "progress-warning"
}, GC = {
  key: 1,
  class: "create-error"
}, jC = { class: "error-message" }, HC = {
  key: 1,
  class: "footer-status"
}, qC = 10, KC = /* @__PURE__ */ be({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ct(), u = k(""), d = k(mc), v = k("latest"), f = k(fc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let C = null, x = 0;
    const S = R(() => !!u.value.trim() && _.value && !w.value && !g.value && !E.value), P = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = k(!1), E = k(!1), N = k({
      progress: 0,
      message: ""
    });
    let A = null, H = 0;
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
    ], V = k(null);
    yt(u, (X) => {
      _.value = !1, C && (clearTimeout(C), C = null);
      const ye = X.trim();
      if (!ye) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, C = setTimeout(() => {
        ae(ye);
      }, 400);
    });
    async function ae(X, ye = !1) {
      const U = X.trim();
      if (!U)
        return _.value = !1, g.value = !1, w.value = ye ? "Environment name is required" : null, !1;
      const fe = ++x;
      g.value = !0;
      try {
        const Le = await c(U);
        return fe !== x ? !1 : (w.value = Le.valid ? null : Le.error || "Invalid name", _.value = !!Le.valid, !!Le.valid);
      } catch {
        return fe !== x || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        fe === x && (g.value = !1);
      }
    }
    async function ce() {
      C && (clearTimeout(C), C = null), await ae(u.value, !0);
    }
    function ue() {
      E.value || o("close");
    }
    async function ke() {
      const X = u.value.trim();
      if (!X) {
        w.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await ae(X, !0)) {
        E.value = !0, N.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const U = {
            name: X,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, fe = await l(U);
          fe.status === "started" ? Z() : fe.status === "error" && (N.value = {
            progress: 0,
            message: fe.message || "Failed to start creation",
            error: fe.message
          });
        } catch (U) {
          N.value = {
            progress: 0,
            message: U instanceof Error ? U.message : "Unknown error",
            error: U instanceof Error ? U.message : "Unknown error"
          };
        }
      }
    }
    function Z() {
      A || (H = 0, A = window.setInterval(async () => {
        try {
          const X = await r();
          H = 0, N.value = {
            progress: X.progress ?? 0,
            message: X.message,
            phase: X.phase,
            error: X.error
          }, X.state === "complete" ? (B(), o("created", X.environment_name || u.value.trim(), p.value)) : X.state === "error" ? (B(), N.value.error = X.error || X.message) : X.state === "idle" && E.value && (B(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          H++, H >= qC && (B(), N.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      A && (clearInterval(A), A = null);
    }
    function K() {
      E.value = !1, N.value = { progress: 0, message: "" }, o("close");
    }
    async function Re() {
      T.value = !0;
      try {
        P.value = await a();
      } catch (X) {
        console.error("Failed to load ComfyUI releases:", X);
      } finally {
        T.value = !1;
      }
    }
    return at(async () => {
      var X;
      await Pt(), (X = V.value) == null || X.focus(), Re();
    }), Po(() => {
      B(), C && (clearTimeout(C), C = null);
    }), (X, ye) => (n(), L(It, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !E.value,
      onClose: ue
    }, {
      body: h(() => [
        E.value ? (n(), i("div", VC, [
          s("p", BC, [
            ye[12] || (ye[12] = $(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            ye[13] || (ye[13] = $("... ", -1))
          ]),
          b(Kn, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: M
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? y("", !0) : (n(), i("p", WC, " This may take several minutes. Please wait... ")),
          N.value.error ? (n(), i("div", GC, [
            s("p", jC, m(N.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", SC, [
          s("div", IC, [
            ye[6] || (ye[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", EC, [
              Tt(s("input", {
                ref_key: "nameInput",
                ref: V,
                "onUpdate:modelValue": ye[0] || (ye[0] = (U) => u.value = U),
                type: "text",
                class: Ve(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: ds(ke, ["enter"]),
                onBlur: ce
              }, null, 34), [
                [en, u.value]
              ]),
              g.value ? (n(), i("span", TC, "...")) : _.value ? (n(), i("span", MC, "✓")) : y("", !0)
            ]),
            w.value ? (n(), i("div", PC, m(w.value), 1)) : y("", !0),
            ye[7] || (ye[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", RC, [
            ye[8] || (ye[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ye[1] || (ye[1] = (U) => d.value = U),
              class: "form-select"
            }, [
              (n(!0), i(j, null, he(tt(dc), (U) => (n(), i("option", {
                key: U,
                value: U
              }, m(U), 9, LC))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          s("div", DC, [
            ye[9] || (ye[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ye[2] || (ye[2] = (U) => v.value = U),
              class: "form-select",
              disabled: T.value
            }, [
              (n(!0), i(j, null, he(P.value, (U) => (n(), i("option", {
                key: U.tag_name,
                value: U.tag_name
              }, m(U.name), 9, OC))), 128))
            ], 8, NC), [
              [Co, v.value]
            ])
          ]),
          s("div", UC, [
            ye[10] || (ye[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ye[3] || (ye[3] = (U) => f.value = U),
              class: "form-select"
            }, [
              (n(!0), i(j, null, he(tt(Ml), (U) => (n(), i("option", {
                key: U,
                value: U
              }, m(U) + m(U === "auto" ? " (detect GPU)" : ""), 9, AC))), 128))
            ], 512), [
              [Co, f.value]
            ])
          ]),
          s("div", zC, [
            s("label", FC, [
              Tt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ye[4] || (ye[4] = (U) => p.value = U)
              }, null, 512), [
                [Hn, p.value]
              ]),
              ye[11] || (ye[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        E.value ? (n(), i(j, { key: 1 }, [
          N.value.error ? (n(), L(De, {
            key: 0,
            variant: "secondary",
            onClick: K
          }, {
            default: h(() => [...ye[16] || (ye[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", HC, " Creating environment... "))
        ], 64)) : (n(), i(j, { key: 0 }, [
          b(De, {
            variant: "primary",
            disabled: !S.value,
            onClick: ke
          }, {
            default: h(() => [...ye[14] || (ye[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(De, {
            variant: "secondary",
            onClick: ye[5] || (ye[5] = (U) => o("close"))
          }, {
            default: h(() => [...ye[15] || (ye[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), JC = /* @__PURE__ */ xe(KC, [["__scopeId", "data-v-3faa3d9b"]]), QC = /* @__PURE__ */ be({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), c = k([]), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = R(() => [...c.value].sort((A, H) => A.is_current !== H.is_current ? A.is_current ? -1 : 1 : A.name.localeCompare(H.name))), C = R(() => {
      if (!v.value.trim()) return _.value;
      const A = v.value.toLowerCase();
      return _.value.filter(
        (H) => {
          var M;
          return H.name.toLowerCase().includes(A) || ((M = H.current_branch) == null ? void 0 : M.toLowerCase().includes(A));
        }
      );
    });
    function x(A, H) {
      p.value = !1, a("created", A, H);
    }
    function S() {
      p.value = !0;
    }
    async function P(A) {
      w.value = A, g.value = null;
      const H = await r(A.name);
      H && (g.value = H);
    }
    function T(A) {
      w.value = null, g.value = null, a("delete", A);
    }
    function E(A) {
      w.value = null, g.value = null, a("export", A);
    }
    async function N() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (A) {
        d.value = A instanceof Error ? A.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return at(N), t({
      loadEnvironments: N,
      openCreateModal: S
    }), (A, H) => (n(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: H[1] || (H[1] = (M) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (n(), L(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: h(() => [...H[7] || (H[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Te, {
                variant: "secondary",
                size: "sm",
                onClick: H[0] || (H[0] = (M) => A.$emit("import"))
              }, {
                default: h(() => [...H[8] || (H[8] = [
                  $(" Import ", -1)
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
            "onUpdate:modelValue": H[2] || (H[2] = (M) => v.value = M),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (n(), L($s, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), L(Cs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            C.value.length ? (n(), L(St, {
              key: 0,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(C.value, (M) => (n(), L(M$, {
                  key: M.name,
                  "environment-name": M.name,
                  "is-current": M.is_current,
                  "current-branch": M.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !M.is_current && e.canSwitch ? (n(), L(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => A.$emit("switch", M.name)
                    }, {
                      default: h(() => [...H[9] || (H[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => P(M)
                    }, {
                      default: h(() => [...H[10] || (H[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => A.$emit("export", M.name)
                    }, {
                      default: h(() => [...H[11] || (H[11] = [
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
            C.value.length ? y("", !0) : (n(), L(rs, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, Qt({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (n(), L(Te, {
                    key: 0,
                    variant: "primary",
                    onClick: S
                  }, {
                    default: h(() => [...H[12] || (H[12] = [
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
      b(Yt, {
        show: f.value,
        title: "About Environments",
        onClose: H[4] || (H[4] = (M) => f.value = !1)
      }, {
        content: h(() => [...H[13] || (H[13] = [
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
            onClick: H[3] || (H[3] = (M) => f.value = !1)
          }, {
            default: h(() => [...H[14] || (H[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(pC, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: H[5] || (H[5] = (M) => {
          w.value = null, g.value = null;
        }),
        onDelete: T,
        onExport: E
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), L(JC, {
        key: 1,
        onClose: H[6] || (H[6] = (M) => p.value = !1),
        onCreated: x
      })) : y("", !0)
    ], 64));
  }
}), YC = /* @__PURE__ */ xe(QC, [["__scopeId", "data-v-01163d8c"]]), XC = { class: "file-path" }, ZC = { class: "file-path-text" }, ex = ["title"], tx = /* @__PURE__ */ be({
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
    return (l, r) => (n(), i("div", XC, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", ZC, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, ex)) : y("", !0)
    ]));
  }
}), sx = /* @__PURE__ */ xe(tx, [["__scopeId", "data-v-f0982173"]]), ox = { class: "base-textarea-wrapper" }, nx = ["value", "rows", "placeholder", "disabled", "maxlength"], ax = {
  key: 0,
  class: "base-textarea-count"
}, lx = /* @__PURE__ */ be({
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
    return (r, c) => (n(), i("div", ox, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = ds(vt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = ds(vt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ds(l, ["enter"])
        ]
      }, null, 40, nx),
      e.showCharCount && e.maxLength ? (n(), i("div", ax, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), xo = /* @__PURE__ */ xe(lx, [["__scopeId", "data-v-c6d16c93"]]), ix = ["checked", "disabled"], rx = { class: "base-checkbox-box" }, cx = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, ux = {
  key: 0,
  class: "base-checkbox-label"
}, dx = /* @__PURE__ */ be({
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
      }, null, 40, ix),
      s("span", rx, [
        e.modelValue ? (n(), i("svg", cx, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (n(), i("span", ux, [
        st(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Jn = /* @__PURE__ */ xe(dx, [["__scopeId", "data-v-bf17c831"]]), mx = { class: "export-blocked" }, fx = { class: "error-header" }, vx = { class: "error-summary" }, px = { class: "error-title" }, gx = { class: "error-description" }, hx = { class: "issues-list" }, yx = { class: "issue-message" }, wx = {
  key: 0,
  class: "issue-details"
}, _x = ["onClick"], kx = { class: "issue-fix" }, bx = {
  key: 0,
  class: "commit-section"
}, $x = {
  key: 0,
  class: "issues-warning"
}, Cx = {
  key: 1,
  class: "commit-error"
}, xx = /* @__PURE__ */ be({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = k(""), v = co({}), f = R(() => o.mode === "publish" ? "Publish" : "Export"), p = R(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = R(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), g = R(
      () => w.value && !u.value
    ), _ = R(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function C(S) {
      const P = o.issues[S];
      return v[S] || P.details.length <= 3 ? P.details : P.details.slice(0, 3);
    }
    async function x() {
      var S;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const P = await l(r.value.trim(), u.value);
          if (P.status === "success")
            a("committed");
          else if (P.status === "blocked") {
            const T = ((S = P.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${T}`;
          } else
            d.value = P.message || "Commit failed";
        } catch (P) {
          d.value = P instanceof Error ? P.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (S, P) => (n(), L(It, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: P[4] || (P[4] = (T) => S.$emit("close"))
    }, {
      body: h(() => [
        s("div", mx, [
          s("div", fx, [
            P[5] || (P[5] = s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            s("div", vx, [
              s("h3", px, m(f.value) + " blocked", 1),
              s("p", gx, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", hx, [
            (n(!0), i(j, null, he(e.issues, (T, E) => (n(), i("div", {
              key: E,
              class: "issue-item"
            }, [
              s("div", yx, m(T.message), 1),
              T.details.length ? (n(), i("div", wx, [
                (n(!0), i(j, null, he(C(E), (N, A) => (n(), i("div", {
                  key: A,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                T.details.length > 3 && !v[E] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[E] = !0
                }, " +" + m(T.details.length - 3) + " more ", 9, _x)) : y("", !0)
              ])) : y("", !0),
              s("div", kx, [
                T.type === "uncommitted_workflows" ? (n(), i(j, { key: 0 }, [
                  $(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : T.type === "uncommitted_git_changes" ? (n(), i(j, { key: 1 }, [
                  $(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : T.type === "unresolved_issues" ? (n(), i(j, { key: 2 }, [
                  $(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", bx, [
            w.value ? (n(), i("div", $x, [
              P[7] || (P[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(Jn, {
                modelValue: u.value,
                "onUpdate:modelValue": P[0] || (P[0] = (T) => u.value = T),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...P[6] || (P[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(xo, {
              modelValue: r.value,
              "onUpdate:modelValue": P[1] || (P[1] = (T) => r.value = T),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: x,
              onCtrlEnter: x
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", Cx, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (n(), i(j, { key: 0 }, [
          b(De, {
            variant: "secondary",
            onClick: P[2] || (P[2] = (T) => S.$emit("close"))
          }, {
            default: h(() => [...P[8] || (P[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: x
          }, {
            default: h(() => [
              $(m(c.value ? "Committing..." : u.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), L(De, {
          key: 1,
          variant: "primary",
          onClick: P[3] || (P[3] = (T) => S.$emit("close"))
        }, {
          default: h(() => [...P[9] || (P[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Sx = /* @__PURE__ */ xe(xx, [["__scopeId", "data-v-a8990107"]]), Ix = { class: "readiness-header" }, Ex = { class: "readiness-body" }, Tx = {
  key: 0,
  class: "issue-section"
}, Mx = { class: "section-heading" }, Px = { class: "issue-list" }, Rx = { class: "issue-main" }, Lx = { class: "issue-name" }, Dx = { class: "issue-meta" }, Nx = { key: 0 }, Ox = { key: 1 }, Ux = ["onClick"], Ax = {
  key: 1,
  class: "issue-note"
}, zx = {
  key: 1,
  class: "issue-section"
}, Fx = { class: "section-heading" }, Vx = { class: "issue-list" }, Bx = { class: "issue-main" }, Wx = { class: "issue-name" }, Gx = { class: "issue-meta" }, jx = { class: "issue-reason" }, Hx = ["disabled", "onClick"], qx = {
  key: 1,
  class: "issue-note"
}, Kx = {
  key: 2,
  class: "empty-state"
}, Jx = {
  key: 3,
  class: "error-message"
}, Qx = { class: "readiness-footer" }, Yx = /* @__PURE__ */ be({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, a = t, { updateNodeCriticality: l } = ct(), r = k(null), c = k(null), u = k(null), d = R(() => o.warnings.models_without_sources), v = R(() => o.warnings.nodes_without_provenance);
    async function f(w) {
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
            s("div", Ix, [
              g[6] || (g[6] = s("div", null, [
                s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
                s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Optional nodes are still listed as warnings, but they will not be treated as required build inputs. ")
              ], -1)),
              s("button", {
                class: "readiness-close",
                onClick: g[0] || (g[0] = (_) => a("close"))
              }, "x")
            ]),
            s("div", Ex, [
              d.value.length ? (n(), i("section", Tx, [
                s("div", Mx, [
                  g[7] || (g[7] = s("h4", null, "Models Missing Source URLs", -1)),
                  s("span", null, m(d.value.length), 1)
                ]),
                s("div", Px, [
                  (n(!0), i(j, null, he(d.value, (_) => (n(), i("article", {
                    key: _.hash || _.filename,
                    class: "issue-item"
                  }, [
                    s("div", Rx, [
                      s("div", Lx, m(_.filename), 1),
                      s("div", Dx, [
                        _.hash ? (n(), i("span", Nx, "hash " + m(_.hash), 1)) : y("", !0),
                        _.workflows.length ? (n(), i("span", Ox, "used by " + m(_.workflows.join(", ")), 1)) : y("", !0),
                        s("span", null, m(_.criticality || "required"), 1)
                      ])
                    ]),
                    _.hash ? (n(), i("button", {
                      key: 0,
                      class: "issue-action",
                      onClick: (C) => r.value = _.hash
                    }, " Add URL ", 8, Ux)) : (n(), i("span", Ax, "Missing hash"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              v.value.length ? (n(), i("section", zx, [
                s("div", Fx, [
                  g[8] || (g[8] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                  s("span", null, m(v.value.length), 1)
                ]),
                s("div", Vx, [
                  (n(!0), i(j, null, he(v.value, (_) => (n(), i("article", {
                    key: _.name,
                    class: "issue-item"
                  }, [
                    s("div", Bx, [
                      s("div", Wx, m(_.name), 1),
                      s("div", Gx, [
                        s("span", null, m(_.source), 1),
                        s("span", null, m(_.criticality), 1)
                      ]),
                      s("p", jx, m(_.reason), 1)
                    ]),
                    _.criticality === "required" ? (n(), i("button", {
                      key: 0,
                      class: "issue-action",
                      disabled: c.value === _.name,
                      onClick: (C) => f(_.name)
                    }, m(c.value === _.name ? "Saving..." : "Mark Optional"), 9, Hx)) : (n(), i("span", qx, "Optional warning"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              !d.value.length && !v.value.length ? (n(), i("div", Kx, " No reproducibility issues remain. ")) : y("", !0),
              u.value ? (n(), i("div", Jx, m(u.value), 1)) : y("", !0)
            ]),
            s("div", Qx, [
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
      r.value ? (n(), L(El, {
        key: 0,
        identifier: r.value,
        "overlay-z-index": 10008,
        onClose: p,
        onSourceSaved: g[5] || (g[5] = (_) => a("revalidate"))
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), pc = /* @__PURE__ */ xe(Yx, [["__scopeId", "data-v-84048536"]]), Xx = { class: "repro-warning" }, Zx = { class: "repro-warning-content" }, e3 = {
  key: 0,
  class: "warning-group"
}, t3 = { class: "warning-list" }, s3 = { key: 0 }, o3 = {
  key: 1,
  class: "warning-group"
}, n3 = { class: "warning-list" }, a3 = { key: 0 }, l3 = /* @__PURE__ */ be({
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
    return (p, w) => (n(), i("div", Xx, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", Zx, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (n(), i("div", e3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", t3, [
            (n(!0), i(j, null, he(u.value, (g) => (n(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (n(), i("li", s3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (n(), i("div", o3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", n3, [
            (n(!0), i(j, null, he(d.value, (g) => (n(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (n(), i("li", a3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), ol = /* @__PURE__ */ xe(l3, [["__scopeId", "data-v-11be310d"]]), i3 = { class: "export-card" }, r3 = { class: "export-path-row" }, c3 = {
  key: 1,
  class: "export-warning"
}, u3 = { class: "export-footer-actions" }, d3 = /* @__PURE__ */ be({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), C = R(() => {
      var B;
      return ((B = t.environmentName) == null ? void 0 : B.trim()) || null;
    }), x = R(() => C.value ? `EXPORT ENVIRONMENT: ${C.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = R(() => C.value ? `Environment '${C.value}' has been exported` : "Your environment has been exported"), P = R(() => u.value ? "Validating..." : d.value ? "Exporting..." : H.value ? "Export Anyway" : "Export Environment"), T = R(() => {
      var B;
      return ((B = w.value) == null ? void 0 : B.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), E = R(
      () => T.value.models_without_sources.length
    ), N = R(
      () => {
        var B;
        return ((B = T.value.nodes_without_provenance) == null ? void 0 : B.length) || 0;
      }
    ), A = R(
      () => E.value + N.value
    ), H = R(
      () => {
        var B;
        return !!((B = w.value) != null && B.can_export) && A.value > 0;
      }
    );
    async function M() {
      u.value = !0;
      try {
        const B = C.value ? await l(C.value) : await o();
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
    async function V() {
      f.value = null;
      const B = await M();
      if (B) {
        if (!B.can_export) {
          g.value = !0;
          return;
        }
        await ue();
      }
    }
    async function ae() {
      g.value = !1;
      const B = await M();
      if (B) {
        if (!B.can_export) {
          g.value = !0;
          return;
        }
        await ue();
      }
    }
    async function ce() {
      await M();
    }
    async function ue() {
      d.value = !0;
      try {
        const B = C.value ? await r(C.value, c.value || void 0) : await a(c.value || void 0);
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
    async function ke() {
      var B;
      if ((B = f.value) != null && B.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (K) {
          console.error("Failed to copy path:", K);
        }
    }
    async function Z() {
      var B;
      if ((B = f.value) != null && B.path) {
        v.value = !0;
        try {
          const K = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!K.ok)
            throw new Error(`Download failed: ${K.statusText}`);
          const Re = await K.blob(), X = URL.createObjectURL(Re), ye = f.value.path.split("/").pop() || "environment-export.tar.gz", U = document.createElement("a");
          U.href = X, U.download = ye, document.body.appendChild(U), U.click(), document.body.removeChild(U), URL.revokeObjectURL(X);
        } catch (K) {
          console.error("Failed to download:", K), alert(`Download failed: ${K instanceof Error ? K.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return at(() => {
      M();
    }), (B, K) => (n(), i(j, null, [
      b(At, null, Qt({
        content: h(() => [
          H.value ? (n(), L(ol, {
            key: 0,
            class: "export-readiness-warning",
            warnings: T.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: K[1] || (K[1] = (Re) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(St, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", i3, [
                K[8] || (K[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", r3, [
                  b(yo, {
                    modelValue: c.value,
                    "onUpdate:modelValue": K[2] || (K[2] = (Re) => c.value = Re),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (n(), L(St, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Vt, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Qt({
                icon: h(() => [
                  $(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(m(f.value.status === "success" ? S.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(_t, { label: "Saved to:" }, {
                      default: h(() => [
                        b(sx, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (n(), L(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", c3, [...K[9] || (K[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: Z
                    }, {
                      default: h(() => [...K[10] || (K[10] = [
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
                      onClick: ke
                    }, {
                      default: h(() => [...K[11] || (K[11] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: K[3] || (K[3] = (Re) => f.value = null)
                    }, {
                      default: h(() => [...K[12] || (K[12] = [
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
          s("div", u3, [
            e.embedded ? (n(), L(Te, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: K[4] || (K[4] = (Re) => B.$emit("close"))
            }, {
              default: h(() => [...K[13] || (K[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Te, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: V
            }, {
              default: h(() => [
                $(m(P.value), 1)
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
              title: x.value,
              "show-info": !0,
              onInfoClick: K[0] || (K[0] = (Re) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(Yt, {
        show: p.value,
        title: "What Gets Exported",
        onClose: K[5] || (K[5] = (Re) => p.value = !1)
      }, {
        content: h(() => [...K[14] || (K[14] = [
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
      g.value && w.value ? (n(), L(Sx, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: K[6] || (K[6] = (Re) => g.value = !1),
        onCommitted: ae
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (n(), L(pc, {
        key: 1,
        warnings: w.value.warnings,
        onClose: K[7] || (K[7] = (Re) => _.value = !1),
        onRevalidate: ce
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), m3 = /* @__PURE__ */ xe(d3, [["__scopeId", "data-v-6cf814a2"]]), f3 = { class: "file-input-wrapper" }, v3 = ["accept", "multiple", "disabled"], p3 = /* @__PURE__ */ be({
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
    }), (u, d) => (n(), i("div", f3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, v3),
      b(Te, {
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
            $(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), g3 = /* @__PURE__ */ xe(p3, [["__scopeId", "data-v-cd192091"]]), h3 = {
  key: 0,
  class: "drop-zone-empty"
}, y3 = { class: "drop-zone-text" }, w3 = { class: "drop-zone-primary" }, _3 = { class: "drop-zone-secondary" }, k3 = { class: "drop-zone-actions" }, b3 = {
  key: 1,
  class: "drop-zone-file"
}, $3 = { class: "file-info" }, C3 = { class: "file-details" }, x3 = { class: "file-name" }, S3 = { class: "file-size" }, I3 = /* @__PURE__ */ be({
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
      var x;
      return ((x = l.value) == null ? void 0 : x.name) || "";
    }), d = R(() => {
      if (!l.value) return "";
      const x = l.value.size;
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(x) {
      var S;
      x.stopPropagation(), r.value++, (S = x.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function f(x) {
      x.stopPropagation(), x.dataTransfer && (x.dataTransfer.dropEffect = "copy");
    }
    function p(x) {
      x.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(x) {
      var P;
      x.stopPropagation(), r.value = 0, a.value = !1;
      const S = (P = x.dataTransfer) == null ? void 0 : P.files;
      S && S.length > 0 && _(S[0]);
    }
    function g(x) {
      x.length > 0 && _(x[0]);
    }
    function _(x) {
      l.value = x, o("fileSelected", x);
    }
    function C() {
      l.value = null, o("clear");
    }
    return (x, S) => (n(), i("div", {
      class: Ve(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: vt(v, ["prevent"]),
      onDragover: vt(f, ["prevent"]),
      onDragleave: vt(p, ["prevent"]),
      onDrop: vt(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", b3, [
        s("div", $3, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", C3, [
            s("div", x3, m(u.value), 1),
            s("div", S3, m(d.value), 1)
          ])
        ]),
        b(Te, {
          variant: "ghost",
          size: "xs",
          onClick: C,
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
      ])) : (n(), i("div", h3, [
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
        s("div", y3, [
          s("p", w3, m(e.primaryText), 1),
          s("p", _3, m(e.secondaryText), 1)
        ]),
        s("div", k3, [
          b(g3, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              $(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), E3 = /* @__PURE__ */ xe(I3, [["__scopeId", "data-v-0f79cb86"]]), T3 = { class: "commit-hash" }, M3 = /* @__PURE__ */ be({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = R(() => t.hash.slice(0, t.length));
    return (a, l) => (n(), i("span", T3, m(o.value), 1));
  }
}), gc = /* @__PURE__ */ xe(M3, [["__scopeId", "data-v-7c333cc6"]]), P3 = { class: "import-preview" }, R3 = { class: "preview-header" }, L3 = {
  key: 0,
  class: "source-env"
}, D3 = { class: "preview-content" }, N3 = { class: "preview-section" }, O3 = { class: "section-header" }, U3 = { class: "section-info" }, A3 = { class: "section-count" }, z3 = {
  key: 0,
  class: "item-list"
}, F3 = { class: "item-name" }, V3 = {
  key: 0,
  class: "item-more"
}, B3 = { class: "preview-section" }, W3 = { class: "section-header" }, G3 = { class: "section-info" }, j3 = { class: "section-count" }, H3 = {
  key: 0,
  class: "item-list"
}, q3 = { class: "item-details" }, K3 = { class: "item-name" }, J3 = { class: "item-meta" }, Q3 = {
  key: 0,
  class: "item-more"
}, Y3 = { class: "preview-section" }, X3 = { class: "section-header" }, Z3 = { class: "section-info" }, eS = { class: "section-count" }, tS = {
  key: 0,
  class: "item-list"
}, sS = { class: "item-name" }, oS = {
  key: 0,
  class: "item-more"
}, nS = {
  key: 0,
  class: "preview-section"
}, aS = { class: "git-info" }, lS = /* @__PURE__ */ be({
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
    return (c, u) => (n(), i("div", P3, [
      s("div", R3, [
        b(ns, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", L3, [
          u[1] || (u[1] = $(" From: ", -1)),
          b(sl, null, {
            default: h(() => [
              $(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", D3, [
        s("div", N3, [
          s("div", O3, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", U3, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", A3, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", z3, [
            (n(!0), i(j, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", F3, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", V3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", B3, [
          s("div", W3, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", G3, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", j3, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", H3, [
            (n(!0), i(j, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", q3, [
                s("span", K3, m(d.filename), 1),
                s("span", J3, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", Q3, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", Y3, [
          s("div", X3, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", Z3, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", eS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", tS, [
            (n(!0), i(j, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", sS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", oS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", nS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", aS, [
            e.gitBranch ? (n(), L(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(sl, null, {
                  default: h(() => [
                    $(m(e.gitBranch), 1)
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
                b(gc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), iS = /* @__PURE__ */ xe(lS, [["__scopeId", "data-v-182fe113"]]), rS = { class: "import-config" }, cS = { class: "config-container" }, uS = { class: "config-field" }, dS = { class: "input-wrapper" }, mS = ["value"], fS = {
  key: 0,
  class: "validating-indicator"
}, vS = {
  key: 1,
  class: "valid-indicator"
}, pS = {
  key: 0,
  class: "field-error"
}, gS = { class: "config-field" }, hS = { class: "strategy-options" }, yS = ["value", "checked", "onChange"], wS = { class: "strategy-content" }, _S = { class: "strategy-label" }, kS = { class: "strategy-description" }, bS = { class: "config-field switch-field" }, $S = { class: "switch-label" }, CS = ["checked"], xS = { class: "advanced-section" }, SS = { class: "advanced-content" }, IS = { class: "config-field" }, ES = ["value"], TS = ["value"], MS = /* @__PURE__ */ be({
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
    yt(() => o.nameError, (f) => {
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
    return (f, p) => (n(), i("div", rS, [
      b(ns, null, {
        default: h(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", cS, [
        s("div", uS, [
          b(Dn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", dS, [
            s("input", {
              type: "text",
              class: Ve(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, mS),
            l.value ? (n(), i("span", fS, "...")) : r.value ? (n(), i("span", vS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", pS, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", gS, [
          b(Dn, null, {
            default: h(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", hS, [
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
              }, null, 40, yS),
              s("div", wS, [
                s("span", _S, m(w.label), 1),
                s("span", kS, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", bS, [
          s("label", $S, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, CS),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", xS, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", SS, [
            s("div", IS, [
              b(Dn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (n(!0), i(j, null, he(tt(Ml), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, TS))), 128))
              ], 40, ES)
            ])
          ])
        ])
      ])
    ]));
  }
}), PS = /* @__PURE__ */ xe(MS, [["__scopeId", "data-v-89ea06a1"]]), RS = { class: "import-flow" }, LS = {
  key: 0,
  class: "import-empty"
}, DS = { class: "git-import-section" }, NS = { class: "git-url-input-row" }, OS = ["disabled"], US = {
  key: 0,
  class: "git-error"
}, AS = {
  key: 1,
  class: "import-configure"
}, zS = { class: "selected-file-bar" }, FS = {
  key: 0,
  class: "file-bar-content"
}, VS = { class: "file-bar-info" }, BS = { class: "file-bar-name" }, WS = { class: "file-bar-size" }, GS = {
  key: 1,
  class: "file-bar-content"
}, jS = { class: "file-bar-info" }, HS = { class: "file-bar-name" }, qS = {
  key: 0,
  class: "preview-loading"
}, KS = { class: "import-actions" }, JS = {
  key: 2,
  class: "import-progress"
}, QS = { class: "creating-intro" }, YS = {
  key: 0,
  class: "progress-warning"
}, XS = {
  key: 1,
  class: "import-error"
}, ZS = { class: "error-message" }, e5 = {
  key: 3,
  class: "import-complete"
}, t5 = { class: "complete-message" }, s5 = { class: "complete-title" }, o5 = { class: "complete-details" }, n5 = { class: "complete-actions" }, a5 = /* @__PURE__ */ be({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var ee, Q, we, te;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = k(null), g = k(a.resumeImport ?? !1), _ = k(!1), C = k(!1), x = k(""), S = k(!1), P = k(null), T = k(""), E = k(null), N = k(!1), A = k(null), H = k(null), M = k({
      name: ((ee = a.initialProgress) == null ? void 0 : ee.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), V = k(null), ae = k({
      message: ((Q = a.initialProgress) == null ? void 0 : Q.message) ?? "Preparing import...",
      phase: ((we = a.initialProgress) == null ? void 0 : we.phase) ?? "",
      progress: ((te = a.initialProgress) == null ? void 0 : te.progress) ?? 0,
      error: null
    }), ce = [
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
      if (!H.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const oe = H.value;
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
    }), ke = R(() => !S.value && !P.value && H.value && M.value.name.length > 0 && !V.value && (w.value || E.value));
    async function Z(oe) {
      w.value = oe, S.value = !0, P.value = null, H.value = null;
      try {
        const Me = await r(oe);
        H.value = Me;
      } catch (Me) {
        P.value = Me instanceof Error ? Me.message : "Failed to analyze file", console.error("Preview error:", Me);
      } finally {
        S.value = !1;
      }
    }
    function B() {
      w.value = null, E.value = null, T.value = "", A.value = null, _.value = !1, C.value = !1, x.value = "", H.value = null, P.value = null, M.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, V.value = null, l("source-cleared");
    }
    function K() {
      Le(), B(), g.value = !1, S.value = !1, N.value = !1, ae.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Re() {
      if (T.value.trim()) {
        N.value = !0, A.value = null;
        try {
          const oe = await c(T.value.trim());
          E.value = T.value.trim(), H.value = oe;
        } catch (oe) {
          A.value = oe instanceof Error ? oe.message : "Failed to analyze repository";
        } finally {
          N.value = !1;
        }
      }
    }
    function X(oe) {
      try {
        const Me = new URL(oe);
        return Me.host + Me.pathname.replace(/\.git$/, "");
      } catch {
        return oe;
      }
    }
    async function ye(oe) {
      if (!oe) {
        V.value = "Environment name is required";
        return;
      }
      try {
        const Me = await u(oe);
        V.value = Me.valid ? null : Me.error || "Invalid name";
      } catch {
        V.value = "Failed to validate name";
      }
    }
    async function U() {
      if (M.value.name && !(!w.value && !E.value)) {
        g.value = !0, _.value = !1, ae.value = { message: `Creating environment '${M.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let oe;
          if (w.value)
            oe = await d(
              w.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else if (E.value)
            oe = await v(
              E.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          oe.status === "started" ? fe() : (C.value = !1, x.value = oe.message, g.value = !1, _.value = !0);
        } catch (oe) {
          C.value = !1, x.value = oe instanceof Error ? oe.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
        }
      }
    }
    async function fe() {
      if (p) return;
      const oe = async () => {
        try {
          const me = await f();
          return ae.value = {
            message: me.message,
            phase: me.phase || "",
            progress: me.progress ?? (me.state === "importing" ? 50 : 0),
            error: me.error || null
          }, me.state === "complete" ? (Le(), C.value = !0, x.value = `Environment '${me.environment_name}' created successfully`, g.value = !1, _.value = !0, me.environment_name && l("import-complete", me.environment_name, M.value.switchAfterImport), !1) : me.state === "error" ? (Le(), C.value = !1, x.value = me.error || me.message, g.value = !1, _.value = !0, !1) : !0;
        } catch (me) {
          return console.error("Failed to poll import progress:", me), !0;
        }
      };
      await oe() && (p = setInterval(async () => {
        await oe() || Le();
      }, 2e3));
    }
    function Le() {
      p && (clearInterval(p), p = null);
    }
    function ve(oe) {
      return oe < 1024 ? `${oe} B` : oe < 1024 * 1024 ? `${(oe / 1024).toFixed(1)} KB` : oe < 1024 * 1024 * 1024 ? `${(oe / (1024 * 1024)).toFixed(1)} MB` : `${(oe / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return at(async () => {
      try {
        const oe = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", oe.environment_name), g.value = !0, M.value.name = oe.environment_name || M.value.name || "", ae.value = {
          progress: oe.progress ?? 0,
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          error: null
        }, fe());
      } catch (oe) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", oe);
      }
    }), t({
      handleReset: K,
      isImporting: g,
      canImport: ke
    }), (oe, Me) => {
      var me;
      return n(), i("div", RS, [
        !w.value && !E.value && !g.value ? (n(), i("div", LS, [
          b(E3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: Z
          }),
          Me[7] || (Me[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", DS, [
            Me[5] || (Me[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", NS, [
              Tt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Me[0] || (Me[0] = (le) => T.value = le),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ds(Re, ["enter"]),
                disabled: N.value
              }, null, 40, OS), [
                [en, T.value]
              ]),
              b(Te, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || N.value,
                onClick: Re
              }, {
                default: h(() => [
                  $(m(N.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (n(), i("div", US, m(A.value), 1)) : y("", !0),
            Me[6] || (Me[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !g.value && !_.value ? (n(), i("div", AS, [
          s("div", zS, [
            w.value ? (n(), i("div", FS, [
              Me[8] || (Me[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", VS, [
                s("div", BS, m(w.value.name), 1),
                s("div", WS, m(ve(w.value.size)), 1)
              ])
            ])) : E.value ? (n(), i("div", GS, [
              Me[10] || (Me[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", jS, [
                s("div", HS, m(X(E.value)), 1),
                Me[9] || (Me[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Te, {
              variant: "ghost",
              size: "sm",
              onClick: B
            }, {
              default: h(() => [...Me[11] || (Me[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", qS, [...Me[12] || (Me[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : P.value ? (n(), L(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [P.value]
          }, null, 8, ["details"])) : H.value ? (n(), L(iS, {
            key: 2,
            "source-environment": ue.value.sourceEnvironment,
            workflows: ue.value.workflows,
            models: ue.value.models,
            nodes: ue.value.nodes,
            "git-branch": ue.value.gitBranch,
            "git-commit": ue.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          H.value ? (n(), L(PS, {
            key: 3,
            name: M.value.name,
            "onUpdate:name": Me[1] || (Me[1] = (le) => M.value.name = le),
            "model-strategy": M.value.modelStrategy,
            "onUpdate:modelStrategy": Me[2] || (Me[2] = (le) => M.value.modelStrategy = le),
            "torch-backend": M.value.torchBackend,
            "onUpdate:torchBackend": Me[3] || (Me[3] = (le) => M.value.torchBackend = le),
            "switch-after-import": M.value.switchAfterImport,
            "onUpdate:switchAfterImport": Me[4] || (Me[4] = (le) => M.value.switchAfterImport = le),
            "name-error": V.value,
            onValidateName: ye
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          M.value.modelStrategy === "skip" && ((me = H.value) != null && me.models_needing_download) ? (n(), L(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${H.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", KS, [
            b(Te, {
              variant: "secondary",
              size: "md",
              onClick: B
            }, {
              default: h(() => [...Me[13] || (Me[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Te, {
              variant: "primary",
              size: "md",
              disabled: !ke.value,
              onClick: U
            }, {
              default: h(() => [...Me[14] || (Me[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (n(), i("div", JS, [
          s("p", QS, [
            Me[15] || (Me[15] = $(" Importing environment ", -1)),
            s("strong", null, m(M.value.name), 1),
            Me[16] || (Me[16] = $("... ", -1))
          ]),
          b(Kn, {
            progress: ae.value.progress,
            message: ae.value.message,
            "current-phase": ae.value.phase,
            variant: ae.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ce
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ae.value.error ? y("", !0) : (n(), i("p", YS, " This may take several minutes. Please wait... ")),
          ae.value.error ? (n(), i("div", XS, [
            s("p", ZS, m(ae.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (n(), i("div", e5, [
          s("div", {
            class: Ve(["complete-icon", C.value ? "success" : "error"])
          }, m(C.value ? "✓" : "✕"), 3),
          s("div", t5, [
            s("div", s5, m(C.value ? "Import Successful" : "Import Failed"), 1),
            s("div", o5, m(x.value), 1)
          ]),
          s("div", n5, [
            b(Te, {
              variant: "primary",
              size: "md",
              onClick: K
            }, {
              default: h(() => [...Me[17] || (Me[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), hc = /* @__PURE__ */ xe(a5, [["__scopeId", "data-v-72cbc04e"]]), l5 = /* @__PURE__ */ be({
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
    return (r, c) => (n(), i(j, null, [
      b(At, null, Qt({
        content: h(() => [
          b(hc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(zt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(Yt, {
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
}), i5 = /* @__PURE__ */ xe(l5, [["__scopeId", "data-v-41b1f298"]]), r5 = { class: "base-tabs" }, c5 = ["disabled", "onClick"], u5 = {
  key: 0,
  class: "base-tabs__badge"
}, d5 = /* @__PURE__ */ be({
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
    return (r, c) => (n(), i("div", r5, [
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
        $(m(u.label) + " ", 1),
        u.badge ? (n(), i("span", u5, m(u.badge), 1)) : y("", !0)
      ], 10, c5))), 128))
    ]));
  }
}), Pl = /* @__PURE__ */ xe(d5, [["__scopeId", "data-v-ad5e6cad"]]), m5 = { class: "commit-list" }, f5 = /* @__PURE__ */ be({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (n(), i("div", m5, [
      st(t.$slots, "default", {}, void 0)
    ]));
  }
}), yc = /* @__PURE__ */ xe(f5, [["__scopeId", "data-v-8c5ee761"]]), v5 = { class: "commit-message" }, p5 = { class: "commit-date" }, g5 = /* @__PURE__ */ be({
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
      b(gc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", v5, m(e.message), 1),
      s("span", p5, m(e.relativeDate), 1),
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
}), wc = /* @__PURE__ */ xe(g5, [["__scopeId", "data-v-dd7c621b"]]), h5 = /* @__PURE__ */ be({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = R(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (n(), L(At, null, Qt({
      content: h(() => [
        e.commits.length === 0 ? (n(), L(rs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), L(yc, { key: 1 }, {
          default: h(() => [
            (n(!0), i(j, null, he(e.commits, (r) => (n(), L(wc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                b(Te, {
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
          b(zt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), y5 = /* @__PURE__ */ xe(h5, [["__scopeId", "data-v-fa4bf3a1"]]), w5 = { class: "branch-create-form" }, _5 = { class: "form-actions" }, k5 = /* @__PURE__ */ be({
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
    return (u, d) => (n(), i("div", w5, [
      b(yo, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", _5, [
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
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), b5 = /* @__PURE__ */ xe(k5, [["__scopeId", "data-v-7c500394"]]), $5 = { class: "branch-list-item__indicator" }, C5 = { class: "branch-list-item__name" }, x5 = {
  key: 0,
  class: "branch-list-item__actions"
}, S5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, I5 = /* @__PURE__ */ be({
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
      s("span", $5, m(e.isCurrent ? "●" : "○"), 1),
      s("span", C5, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (n(), i("div", x5, [
        st(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", S5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), E5 = /* @__PURE__ */ xe(I5, [["__scopeId", "data-v-c6581a24"]]), T5 = { class: "header-info" }, M5 = { class: "branch-name" }, P5 = {
  key: 0,
  class: "current-badge"
}, R5 = { class: "branch-meta" }, L5 = { key: 0 }, D5 = {
  key: 0,
  class: "meta-note"
}, N5 = {
  key: 0,
  class: "loading"
}, O5 = {
  key: 1,
  class: "empty-state"
}, U5 = /* @__PURE__ */ be({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = ct(), a = k([]), l = k(!1), r = k(!0);
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
        s("div", T5, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", M5, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", P5, "CURRENT")) : y("", !0)
        ]),
        b(De, {
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
        s("div", R5, [
          r.value ? (n(), i("span", L5, "Loading...")) : (n(), i(j, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", D5, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", N5, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", O5, " No commits found on this branch ")) : (n(), L(yc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(j, null, he(a.value, (d) => (n(), L(wc, {
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
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (n(), L(De, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: h(() => [...u[7] || (u[7] = [
            $(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), A5 = /* @__PURE__ */ xe(U5, [["__scopeId", "data-v-2e5437cc"]]), z5 = {
  key: 2,
  class: "branch-list"
}, F5 = /* @__PURE__ */ be({
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
    return (f, p) => (n(), L(At, null, Qt({
      content: h(() => [
        a.value ? (n(), L(b5, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), L(rs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", z5, [
          (n(!0), i(j, null, he(e.branches, (w) => (n(), L(E5, {
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
                  $(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), L(A5, {
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
          b(zt, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (n(), L(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => a.value = !0)
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
}), V5 = /* @__PURE__ */ xe(F5, [["__scopeId", "data-v-a3de96cc"]]);
function _c(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const B5 = { class: "remote-url-display" }, W5 = ["title"], G5 = ["title"], j5 = {
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
}, q5 = /* @__PURE__ */ be({
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
    return (r, c) => (n(), i("div", B5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, W5),
      s("button", {
        class: Ve(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", H5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", j5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, G5)
    ]));
  }
}), K5 = /* @__PURE__ */ xe(q5, [["__scopeId", "data-v-7768a58d"]]), J5 = { class: "remote-title" }, Q5 = {
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
}, e8 = {
  key: 1,
  class: "synced"
}, t8 = ["href"], s8 = {
  key: 1,
  class: "remote-url-text"
}, o8 = /* @__PURE__ */ be({
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
    return (v, f) => (n(), L(Vt, {
      status: a.value ? "synced" : void 0
    }, Qt({
      icon: h(() => [
        $(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", J5, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", Q5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", Y5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", X5, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", Z5, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", e8, "✓ synced"))
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
        }, m(d.value), 9, t8)) : (n(), i("span", s8, m(d.value), 1))
      ]),
      actions: h(() => [
        b(Te, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...f[6] || (f[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Te, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            $(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Te, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            $(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Te, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...f[7] || (f[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), L(Te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...f[8] || (f[8] = [
            $(" Remove ", -1)
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
}), n8 = /* @__PURE__ */ xe(o8, [["__scopeId", "data-v-8310f3a8"]]), a8 = ["for"], l8 = {
  key: 0,
  class: "base-form-field-required"
}, i8 = { class: "base-form-field-input" }, r8 = {
  key: 1,
  class: "base-form-field-error"
}, c8 = {
  key: 2,
  class: "base-form-field-hint"
}, u8 = /* @__PURE__ */ be({
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
      class: Ve(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(m(e.label) + " ", 1),
        e.required ? (n(), i("span", l8, "*")) : y("", !0)
      ], 8, a8)) : y("", !0),
      s("div", i8, [
        st(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", r8, m(e.error), 1)) : e.hint ? (n(), i("span", c8, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ xe(u8, [["__scopeId", "data-v-9a1cf296"]]), d8 = { class: "remote-form" }, m8 = { class: "form-header" }, f8 = { class: "form-body" }, v8 = {
  key: 0,
  class: "form-error"
}, p8 = { class: "form-actions" }, g8 = /* @__PURE__ */ be({
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
    yt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
    return (v, f) => (n(), i("div", d8, [
      s("div", m8, [
        b(ns, null, {
          default: h(() => [
            $(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", f8, [
        b(Ot, {
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
        b(Ot, {
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
        b(Ot, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(bt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", v8, m(c.value), 1)) : y("", !0)
      ]),
      s("div", p8, [
        b(Te, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            $(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Te, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: h(() => [...f[4] || (f[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), h8 = /* @__PURE__ */ xe(g8, [["__scopeId", "data-v-56021b18"]]), y8 = { class: "conflict-summary-box" }, w8 = { class: "summary-header" }, _8 = { class: "summary-text" }, k8 = { key: 0 }, b8 = {
  key: 1,
  class: "all-resolved"
}, $8 = { class: "summary-progress" }, C8 = { class: "progress-bar" }, x8 = { class: "progress-text" }, S8 = /* @__PURE__ */ be({
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
    return (a, l) => (n(), i("div", y8, [
      s("div", w8, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", _8, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", k8, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", b8, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", $8, [
        s("div", C8, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", x8, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), I8 = /* @__PURE__ */ xe(S8, [["__scopeId", "data-v-4e9e6cc9"]]), E8 = { class: "modal-header" }, T8 = { class: "modal-title" }, M8 = { class: "modal-body" }, P8 = {
  key: 0,
  class: "error-box"
}, R8 = {
  key: 0,
  class: "error-hint"
}, L8 = {
  key: 1,
  class: "loading-state"
}, D8 = { class: "commit-summary" }, N8 = {
  key: 0,
  class: "commits-section"
}, O8 = { class: "commit-list" }, U8 = { class: "commit-hash" }, A8 = { class: "commit-message" }, z8 = { class: "commit-date" }, F8 = {
  key: 1,
  class: "changes-section"
}, V8 = {
  key: 0,
  class: "change-group",
  open: ""
}, B8 = { class: "change-count" }, W8 = { class: "change-list" }, G8 = {
  key: 0,
  class: "conflict-badge"
}, j8 = {
  key: 1,
  class: "change-group"
}, H8 = { class: "change-count" }, q8 = { class: "change-list" }, K8 = {
  key: 2,
  class: "change-group"
}, J8 = { class: "change-count" }, Q8 = { class: "change-list" }, Y8 = {
  key: 3,
  class: "strategy-section"
}, X8 = { class: "radio-group" }, Z8 = { class: "radio-option" }, e4 = { class: "radio-option" }, t4 = { class: "radio-option" }, s4 = {
  key: 4,
  class: "up-to-date"
}, o4 = { class: "modal-actions" }, Ii = "comfygit.pullModelStrategy", n4 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = k(localStorage.getItem(Ii) || "skip");
    yt(l, (x) => {
      localStorage.setItem(Ii, x);
    });
    const r = R(() => {
      var x;
      return ((x = o.error) == null ? void 0 : x.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = R(() => {
      if (!o.preview) return 0;
      const x = o.preview.changes.workflows;
      return x.added.length + x.modified.length + x.deleted.length;
    }), u = R(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = R(() => {
      var x;
      return c.value > 0 || u.value > 0 || (((x = o.preview) == null ? void 0 : x.changes.models.count) || 0) > 0;
    }), v = R(() => o.preview && _c(o.preview) ? o.preview : null), f = R(() => {
      var x;
      return ((x = v.value) == null ? void 0 : x.workflow_conflicts.length) ?? 0;
    }), p = R(() => {
      var x;
      return ((x = o.conflictResolutions) == null ? void 0 : x.size) ?? 0;
    }), w = R(
      () => f.value > 0 && p.value === f.value
    ), g = R(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(x) {
      if (!v.value) return !1;
      const S = x.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((P) => P.name === S);
    }
    function C(x) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: x, resolutions: S });
    }
    return (x, S) => {
      var P, T;
      return n(), L(Lt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (E) => x.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", E8, [
              s("h3", T8, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (E) => x.$emit("close"))
              }, "✕")
            ]),
            s("div", M8, [
              e.error ? (n(), i("div", P8, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", R8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", L8, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (P = e.preview) != null && P.has_uncommitted_changes ? (n(), i(j, { key: 2 }, [
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
                s("div", D8, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  $(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", N8, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", O8, [
                    (n(!0), i(j, null, he(e.preview.commits, (E) => (n(), i("div", {
                      key: E.hash,
                      class: "commit-item"
                    }, [
                      s("span", U8, m(E.short_hash || E.hash.slice(0, 7)), 1),
                      s("span", A8, m(E.message), 1),
                      s("span", z8, m(E.date_relative || E.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", F8, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", V8, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", B8, m(c.value) + " changes", 1)
                    ]),
                    s("div", W8, [
                      (n(!0), i(j, null, he(e.preview.changes.workflows.added, (E) => (n(), i("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128)),
                      (n(!0), i(j, null, he(e.preview.changes.workflows.modified, (E) => (n(), i("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + m(E) + " ", 1),
                        _(E) ? (n(), i("span", G8, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(j, null, he(e.preview.changes.workflows.deleted, (E) => (n(), i("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + m(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", j8, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", H8, m(u.value) + " to install", 1)
                    ]),
                    s("div", q8, [
                      (n(!0), i(j, null, he(e.preview.changes.nodes.to_install, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", K8, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", J8, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", Q8, [
                      (n(!0), i(j, null, he(e.preview.changes.models.referenced, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item"
                      }, m(E), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (n(), L(I8, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", Y8, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", X8, [
                    s("label", Z8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", e4, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", t4, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[25] || (S[25] = s("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", s4, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", o4, [
              b(Te, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (E) => x.$emit("close"))
              }, {
                default: h(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(j, { key: 0 }, [
                b(Te, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (E) => C(!1))
                }, {
                  default: h(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Te, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (E) => C(!0))
                }, {
                  default: h(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), L(Te, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (E) => C(!0))
              }, {
                default: h(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(j, { key: 2 }, [
                v.value && !w.value ? (n(), L(Te, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (E) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), L(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: S[9] || (S[9] = (E) => C(!1))
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
}), a4 = /* @__PURE__ */ xe(n4, [["__scopeId", "data-v-1d633bba"]]), l4 = { class: "modal-header" }, i4 = { class: "modal-title" }, r4 = { class: "modal-body" }, c4 = {
  key: 0,
  class: "error-box"
}, u4 = {
  key: 1,
  class: "loading-state"
}, d4 = {
  key: 2,
  class: "warning-box"
}, m4 = {
  key: 1,
  class: "commits-section"
}, f4 = { class: "commit-list" }, v4 = { class: "commit-hash" }, p4 = { class: "commit-message" }, g4 = { class: "commit-date" }, h4 = { class: "force-option" }, y4 = { class: "checkbox-option" }, w4 = { class: "commit-summary" }, _4 = { key: 0 }, k4 = { key: 1 }, b4 = {
  key: 0,
  class: "info-box"
}, $4 = {
  key: 2,
  class: "commits-section"
}, C4 = { class: "commit-list" }, x4 = { class: "commit-hash" }, S4 = { class: "commit-message" }, I4 = { class: "commit-date" }, E4 = {
  key: 3,
  class: "up-to-date"
}, T4 = { class: "modal-actions" }, M4 = /* @__PURE__ */ be({
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
      var _, C, x, S;
      return n(), i(j, null, [
        (n(), L(Lt, { to: "body" }, [
          e.show ? (n(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (P) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = vt(() => {
              }, ["stop"]))
            }, [
              s("div", l4, [
                s("h3", i4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (P) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", r4, [
                e.error ? (n(), i("div", c4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (n(), i("div", u4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  $(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (n(), i("div", d4, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (C = e.preview) != null && C.remote_has_new_commits ? (n(), i(j, { key: 3 }, [
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
                    onReview: g[1] || (g[1] = (P) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", m4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", f4, [
                      (n(!0), i(j, null, he(e.preview.commits, (P) => (n(), i("div", {
                        key: P.hash,
                        class: "commit-item"
                      }, [
                        s("span", v4, m(P.short_hash || P.hash.slice(0, 7)), 1),
                        s("span", p4, m(P.message), 1),
                        s("span", g4, m(P.date_relative || P.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", h4, [
                    s("label", y4, [
                      Tt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (P) => l.value = P)
                      }, null, 512), [
                        [Hn, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (n(), i(j, { key: 4 }, [
                  s("div", w4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (n(), i("span", _4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", k4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (n(), i("div", b4, [...g[21] || (g[21] = [
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
                    onReview: g[3] || (g[3] = (P) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", $4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", C4, [
                      (n(!0), i(j, null, he(e.preview.commits, (P) => (n(), i("div", {
                        key: P.hash,
                        class: "commit-item"
                      }, [
                        s("span", x4, m(P.short_hash || P.hash.slice(0, 7)), 1),
                        s("span", S4, m(P.message), 1),
                        s("span", I4, m(P.date_relative || P.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (n(), i("div", E4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    $(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", T4, [
                b(Te, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (P) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    $(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (x = e.preview) != null && x.remote_has_new_commits ? (n(), i(j, { key: 0 }, [
                  b(Te, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (P) => w.$emit("pull-first"))
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
                    onClick: g[6] || (g[6] = (P) => p(!0))
                  }, {
                    default: h(() => [
                      $(m(f.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), L(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (P) => p(!1))
                }, {
                  default: h(() => [
                    $(m(f.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((S = e.preview) != null && S.warnings) ? (n(), L(pc, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (P) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (P) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), P4 = /* @__PURE__ */ xe(M4, [["__scopeId", "data-v-7748bf33"]]), R4 = { class: "resolution-choice-group" }, L4 = ["disabled"], D4 = ["disabled"], N4 = /* @__PURE__ */ be({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("div", R4, [
      s("button", {
        class: Ve(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, L4),
      s("button", {
        class: Ve(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, D4)
    ]));
  }
}), O4 = /* @__PURE__ */ xe(N4, [["__scopeId", "data-v-985715ed"]]), U4 = { class: "conflict-header" }, A4 = { class: "conflict-info" }, z4 = { class: "workflow-name" }, F4 = { class: "conflict-description" }, V4 = {
  key: 0,
  class: "resolved-badge"
}, B4 = { class: "resolved-text" }, W4 = { class: "conflict-hashes" }, G4 = { class: "hash-item" }, j4 = { class: "hash-item" }, H4 = { class: "conflict-actions" }, q4 = /* @__PURE__ */ be({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(o.resolution);
    yt(() => o.resolution, (d) => {
      l.value = d;
    }), yt(l, (d) => {
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
        class: Ve(["conflict-item", { resolved: r.value }])
      }, [
        s("div", U4, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", A4, [
            s("code", z4, m(e.conflict.name) + ".json", 1),
            s("div", F4, m(c.value), 1)
          ]),
          r.value ? (n(), i("div", V4, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", B4, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", W4, [
          s("span", G4, [
            v[3] || (v[3] = $("Your: ", -1)),
            s("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", j4, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", H4, [
          b(O4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), K4 = /* @__PURE__ */ xe(q4, [["__scopeId", "data-v-506d3bbf"]]), J4 = { class: "resolution-content" }, Q4 = {
  key: 0,
  class: "error-box"
}, Y4 = { class: "resolution-header" }, X4 = { class: "header-stats" }, Z4 = { class: "stat" }, eI = { class: "stat-value" }, tI = { class: "stat resolved" }, sI = { class: "stat-value" }, oI = {
  key: 0,
  class: "stat pending"
}, nI = { class: "stat-value" }, aI = { class: "conflicts-list" }, lI = {
  key: 1,
  class: "all-resolved-message"
}, iI = /* @__PURE__ */ be({
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
    return (w, g) => (n(), L(It, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: h(() => [
        s("div", J4, [
          e.error ? (n(), i("div", Q4, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", Y4, [
            s("div", X4, [
              s("div", Z4, [
                s("span", eI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", tI, [
                s("span", sI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", oI, [
                s("span", nI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", aI, [
            (n(!0), i(j, null, he(e.workflowConflicts, (_) => (n(), L(K4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => v(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", lI, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...g[7] || (g[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(De, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            $(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), rI = /* @__PURE__ */ xe(iI, [["__scopeId", "data-v-c58d150d"]]), cI = { class: "node-conflict-item" }, uI = { class: "node-header" }, dI = { class: "node-name" }, mI = { class: "node-id" }, fI = { class: "version-comparison" }, vI = { class: "version yours" }, pI = { class: "version theirs" }, gI = { class: "chosen-version" }, hI = { class: "chosen" }, yI = { class: "chosen-reason" }, wI = { class: "affected-workflows" }, _I = { class: "wf-source" }, kI = { class: "wf-version" }, bI = /* @__PURE__ */ be({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", cI, [
      s("div", uI, [
        s("code", dI, m(e.conflict.node_name), 1),
        s("span", mI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", fI, [
        s("div", vI, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", pI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", gI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", hI, m(e.conflict.chosen_version), 1),
        s("span", yI, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", wI, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (n(!0), i(j, null, he(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", _I, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", kI, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), $I = /* @__PURE__ */ xe(bI, [["__scopeId", "data-v-8b626725"]]), CI = { class: "validation-content" }, xI = {
  key: 0,
  class: "compatible-message"
}, SI = { class: "conflicts-list" }, II = {
  key: 2,
  class: "warnings-section"
}, EI = /* @__PURE__ */ be({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = R(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), L(It, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", CI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", xI, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(j, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", SI, [
              (n(!0), i(j, null, he(e.validation.node_conflicts, (u) => (n(), L($I, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", II, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (n(!0), i(j, null, he(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(De, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(De, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            $(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), TI = /* @__PURE__ */ xe(EI, [["__scopeId", "data-v-fefd26ed"]]), MI = {
  key: 0,
  class: "embedded-toolbar"
}, PI = { class: "embedded-toolbar-search" }, RI = { key: 0 }, LI = /* @__PURE__ */ be({
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
    } = ct(), _ = k([]), C = k(null), x = k({}), S = k(!1), P = k(null), T = k(""), E = k(!1), N = k(null), A = k(!1), H = k("add"), M = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), V = R(() => {
      if (!T.value.trim()) return _.value;
      const ze = T.value.toLowerCase();
      return _.value.filter(
        (O) => O.name.toLowerCase().includes(ze) || O.fetch_url.toLowerCase().includes(ze) || O.push_url.toLowerCase().includes(ze)
      );
    });
    async function ae() {
      S.value = !0, P.value = null;
      try {
        const ze = await a();
        _.value = ze.remotes, C.value = ze.current_branch_tracking || null, await Promise.all(
          ze.remotes.map(async (O) => {
            const se = await d(O.name);
            se && (x.value[O.name] = se);
          })
        );
      } catch (ze) {
        P.value = ze instanceof Error ? ze.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ce() {
      H.value = "add", M.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function ue(ze) {
      const O = _.value.find((se) => se.name === ze);
      O && (H.value = "edit", M.value = {
        name: O.name,
        fetchUrl: O.fetch_url,
        pushUrl: O.push_url
      }, A.value = !0);
    }
    async function ke(ze) {
      try {
        H.value === "add" ? await l(ze.name, ze.fetchUrl) : await c(ze.name, ze.fetchUrl, ze.pushUrl || void 0), A.value = !1, await ae();
      } catch (O) {
        P.value = O instanceof Error ? O.message : "Operation failed";
      }
    }
    function Z() {
      A.value = !1, M.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function B(ze) {
      N.value = ze;
      try {
        await u(ze);
        const O = await d(ze);
        O && (x.value[ze] = O), o("toast", `✓ Fetched from ${ze}`, "success");
      } catch (O) {
        o("toast", O instanceof Error ? O.message : "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function K(ze) {
      if (confirm(`Remove remote "${ze}"?`))
        try {
          await r(ze), await ae();
        } catch (O) {
          P.value = O instanceof Error ? O.message : "Failed to remove remote";
        }
    }
    function Re() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const X = k("idle"), ye = R(() => X.value === "pull_preview"), U = R(
      () => X.value === "resolving" || X.value === "validating"
    ), fe = R(
      () => X.value === "validation_review" || X.value === "executing"
    ), Le = k(!1), ve = k(null), ee = k(!1), Q = k(null), we = k(null), te = k(!1), oe = k(null), Me = k(null), me = k(/* @__PURE__ */ new Map()), le = k(null), I = k(null), F = R(() => oe.value && _c(oe.value) ? oe.value : null);
    async function ie(ze) {
      we.value = ze, X.value = "pull_preview", te.value = !0, oe.value = null, Me.value = null;
      try {
        oe.value = await v(ze);
      } catch (O) {
        Me.value = O instanceof Error ? O.message : "Failed to load pull preview";
      } finally {
        te.value = !1;
      }
    }
    function Ie() {
      X.value = "idle", oe.value = null, Me.value = null, we.value = null;
    }
    async function $e(ze) {
      if (!we.value) return;
      X.value = "executing", Me.value = null;
      const O = we.value;
      try {
        const se = await f(O, ze);
        if (se.rolled_back) {
          Me.value = `Pull failed and was rolled back: ${se.error || "Unknown error"}`, X.value = "pull_preview";
          return;
        }
        pe(), X.value = "idle", o("toast", `✓ Pulled from ${O}`, "success"), await ae();
      } catch (se) {
        Me.value = se instanceof Error ? se.message : "Pull failed", X.value = "pull_preview";
      }
    }
    function Se() {
      F.value && (X.value = "resolving", I.value = null);
    }
    function Ae(ze, O) {
      me.value.set(ze, { name: ze, resolution: O });
    }
    function Fe() {
      X.value = "pull_preview";
    }
    async function Ne() {
      X.value = "validating", I.value = null;
      try {
        const ze = Array.from(me.value.values());
        le.value = await g(we.value, ze), X.value = "validation_review";
      } catch (ze) {
        I.value = ze instanceof Error ? ze.message : "Validation failed", X.value = "resolving";
      }
    }
    async function Ee() {
      X.value = "executing";
      const ze = we.value;
      try {
        const O = Array.from(me.value.values()), se = await f(ze, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: O
        });
        if (se.rolled_back) {
          Me.value = `Pull failed and was rolled back: ${se.error || "Unknown error"}`, X.value = "pull_preview";
          return;
        }
        pe(), X.value = "idle", o("toast", `✓ Pulled from ${ze}`, "success"), await ae();
      } catch (O) {
        Me.value = O instanceof Error ? O.message : "Pull failed", X.value = "validation_review";
      }
    }
    function Ke() {
      X.value = "resolving";
    }
    function Be() {
      pe(), X.value = "idle";
    }
    function pe() {
      me.value.clear(), le.value = null, I.value = null, Me.value = null, oe.value = null, we.value = null;
    }
    async function J(ze) {
      we.value = ze, Le.value = !0, te.value = !0, ve.value = null, Q.value = null;
      try {
        ve.value = await p(ze);
      } catch (O) {
        Q.value = O instanceof Error ? O.message : "Failed to load push preview";
      } finally {
        te.value = !1;
      }
    }
    async function He() {
      if (we.value) {
        te.value = !0, Q.value = null;
        try {
          ve.value = await p(we.value);
        } catch (ze) {
          Q.value = ze instanceof Error ? ze.message : "Failed to refresh push preview";
        } finally {
          te.value = !1;
        }
      }
    }
    function Ce() {
      Le.value = !1, ve.value = null, Q.value = null, we.value = null;
    }
    async function Ye(ze) {
      var se;
      if (!we.value) return;
      ee.value = !0;
      const O = we.value;
      Q.value = null;
      try {
        await w(O, ze), Ce(), o("toast", `✓ Pushed to ${O}`, "success"), await ae();
      } catch (ge) {
        const Je = ge instanceof Error ? ge.message : "Push failed";
        Q.value = Je, ge instanceof ec && ge.status === 409 && ((se = ge.data) != null && se.needs_force) && ve.value ? ve.value = {
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
    return at(ae), (ze, O) => (n(), i(j, null, [
      b(At, null, Qt({
        content: h(() => [
          S.value ? (n(), L($s, {
            key: 0,
            message: "Loading remotes..."
          })) : P.value ? (n(), L(Cs, {
            key: 1,
            message: P.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            e.embedded && !A.value ? (n(), i("div", MI, [
              s("div", PI, [
                b(ro, {
                  modelValue: T.value,
                  "onUpdate:modelValue": O[2] || (O[2] = (se) => T.value = se),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: ce
              }, {
                default: h(() => [...O[5] || (O[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            A.value ? (n(), L(h8, {
              key: 1,
              mode: H.value,
              "remote-name": M.value.name,
              "fetch-url": M.value.fetchUrl,
              "push-url": M.value.pushUrl,
              onSubmit: ke,
              onCancel: Z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !A.value ? (n(), L(ca, {
              key: 2,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + m(_.value.length) + " remote" + m(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (n(), i("span", RI, " • Tracking: " + m(C.value.remote) + "/" + m(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            V.value.length && !A.value ? (n(), L(St, {
              key: 3,
              title: "REMOTES",
              count: V.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, he(V.value, (se) => (n(), L(n8, {
                  key: se.name,
                  remote: se,
                  "sync-status": x.value[se.name],
                  "fetching-remote": N.value,
                  onFetch: B,
                  onEdit: ue,
                  onRemove: K,
                  onPull: ie,
                  onPush: J
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !V.value.length && !A.value ? (n(), L(rs, {
              key: 4,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "primary",
                  onClick: ce
                }, {
                  default: h(() => [...O[6] || (O[6] = [
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
              onInfoClick: O[0] || (O[0] = (se) => E.value = !0)
            }, {
              actions: h(() => [
                A.value ? y("", !0) : (n(), L(Te, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ce
                }, {
                  default: h(() => [...O[4] || (O[4] = [
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
            A.value ? y("", !0) : (n(), L(ro, {
              key: 0,
              modelValue: T.value,
              "onUpdate:modelValue": O[1] || (O[1] = (se) => T.value = se),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(Yt, {
        show: E.value,
        title: "About Git Remotes",
        onClose: O[3] || (O[3] = (se) => E.value = !1)
      }, {
        content: h(() => [...O[7] || (O[7] = [
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
            default: h(() => [...O[8] || (O[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(a4, {
        show: ye.value,
        "remote-name": we.value || "",
        preview: oe.value,
        loading: te.value,
        pulling: X.value === "executing",
        error: Me.value,
        "conflict-resolutions": me.value,
        onClose: Ie,
        onPull: $e,
        onOpenConflictResolution: Se
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(P4, {
        show: Le.value,
        "remote-name": we.value || "",
        preview: ve.value,
        loading: te.value,
        pushing: ee.value,
        error: Q.value,
        onClose: Ce,
        onPush: Ye,
        onPullFirst: ot,
        onRevalidate: He
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      U.value && F.value ? (n(), L(rI, {
        key: 0,
        "workflow-conflicts": F.value.workflow_conflicts,
        resolutions: me.value,
        "operation-type": "pull",
        validating: X.value === "validating",
        error: I.value,
        onClose: Fe,
        onResolve: Ae,
        onApply: Ne
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      fe.value && le.value ? (n(), L(TI, {
        key: 1,
        validation: le.value,
        "operation-type": "pull",
        executing: X.value === "executing",
        onProceed: Ee,
        onGoBack: Ke,
        onCancel: Be
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), DI = /* @__PURE__ */ xe(LI, [["__scopeId", "data-v-a189530f"]]), NI = /* @__PURE__ */ be({
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
    ], r = k(o.initialTab ?? "history");
    return yt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (n(), L(At, null, {
      header: h(() => [
        b(zt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Pl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (n(), L(y5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), L(V5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), L(DI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => a("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
});
async function kc(e) {
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
const OI = { class: "text-viewer-wrapper" }, UI = ["disabled", "title"], AI = { class: "text-content" }, zI = /* @__PURE__ */ be({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), a = k("idle");
    async function l() {
      if (t.content)
        try {
          await kc(t.content), a.value = "copied", setTimeout(() => {
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
    return (u, d) => (n(), i("div", OI, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, UI),
        s("pre", AI, m(e.content), 1)
      ], 544)
    ]));
  }
}), FI = /* @__PURE__ */ xe(zI, [["__scopeId", "data-v-85a537ba"]]), VI = {
  key: 1,
  class: "manifest-viewer-shell"
}, BI = { class: "manifest-path" }, WI = /* @__PURE__ */ be({
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
    return at(c), (u, d) => (n(), i(j, null, [
      b(At, null, Qt({
        content: h(() => [
          o.value ? (n(), L($s, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), L(Cs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), L(rs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", VI, [
              b(FI, {
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
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: h(() => [
                    $(m(o.value ? "Loading..." : "Refresh"), 1)
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
      b(Yt, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
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
          s("div", BI, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          b(Te, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
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
}), GI = /* @__PURE__ */ xe(WI, [["__scopeId", "data-v-814a8fdd"]]), jI = { class: "log-viewer-wrapper" }, HI = ["disabled", "title"], qI = /* @__PURE__ */ be({
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
      await Pt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    at(r), yt(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await kc(v), a.value = "copied", setTimeout(() => {
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
    return (v, f) => (n(), i("div", jI, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, HI),
        (n(!0), i(j, null, he(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: Ve(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), bc = /* @__PURE__ */ xe(qI, [["__scopeId", "data-v-5aaf1b88"]]), KI = /* @__PURE__ */ be({
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
          const C = await o();
          v.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        u.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const C = await a();
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
    }), (C, x) => (n(), i(j, null, [
      b(At, null, Qt({
        content: h(() => [
          c.value ? (n(), L($s, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), L(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length === 0 ? (n(), L(rs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), L(bc, {
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
              onInfoClick: x[0] || (x[0] = (S) => d.value = !0)
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !f.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    $(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: h(() => [
                    $(m(c.value ? "Loading..." : "Refresh"), 1)
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
      b(Yt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: x[2] || (x[2] = (S) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            x[3] || (x[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(v.value), 1),
            x[4] || (x[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          x[5] || (x[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
            onClick: x[1] || (x[1] = (S) => d.value = !1)
          }, {
            default: h(() => [...x[6] || (x[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ei = /* @__PURE__ */ be({
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
    } = ct(), c = e, u = k(c.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), C = R(() => u.value === "workspace" ? w.value : g.value);
    async function x() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
      } catch (T) {
        f.value = T instanceof Error ? T.message : `Failed to load ${u.value} logs`;
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
        T.exists && (w.value = T.path), E.exists && (g.value = E.path);
      } catch {
      }
    }
    async function P() {
      if (C.value) {
        _.value = !0;
        try {
          await r(C.value);
        } catch (T) {
          console.error("Failed to open log file:", T);
        } finally {
          _.value = !1;
        }
      }
    }
    return yt(u, () => {
      x();
    }), yt(() => c.initialTab, (T) => {
      T && (u.value = T);
    }), at(() => {
      x(), S();
    }), (T, E) => (n(), i(j, null, [
      b(At, null, Qt({
        content: h(() => [
          v.value ? (n(), L($s, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), L(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            d.value.length === 0 ? (n(), L(rs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), L(bc, {
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
            b(zt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: E[0] || (E[0] = (N) => p.value = !0)
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: P,
                  disabled: !C.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    $(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: x,
                  disabled: v.value
                }, {
                  default: h(() => [
                    $(m(v.value ? "Loading..." : "Refresh"), 1)
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
            b(Pl, {
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
      b(Yt, {
        show: p.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (N) => p.value = !1)
      }, {
        content: h(() => [...E[4] || (E[4] = [
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
            onClick: E[2] || (E[2] = (N) => p.value = !1)
          }, {
            default: h(() => [...E[5] || (E[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), JI = /* @__PURE__ */ be({
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
    return yt(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), yt(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, v) => (n(), i(j, null, [
      b(At, null, Qt({
        header: h(() => [
          b(zt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (f) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (n(), L(GI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (n(), L(KI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (n(), L(Ei, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), L(Ei, {
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
            b(Pl, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(Yt, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: v[3] || (v[3] = (f) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (n(), i(j, { key: 0 }, [
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
          ], 64)) : (n(), i(j, { key: 1 }, [
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
        actions: h(() => [
          b(Te, {
            variant: "primary",
            size: "sm",
            onClick: v[2] || (v[2] = (f) => r.value = !1)
          }, {
            default: h(() => [...v[11] || (v[11] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), QI = { class: "header-info" }, YI = { class: "commit-hash" }, XI = {
  key: 0,
  class: "commit-refs"
}, ZI = { class: "commit-message" }, e6 = { class: "commit-date" }, t6 = {
  key: 0,
  class: "loading"
}, s6 = {
  key: 1,
  class: "changes-section"
}, o6 = { class: "stats-row" }, n6 = { class: "stat" }, a6 = { class: "stat insertions" }, l6 = { class: "stat deletions" }, i6 = {
  key: 0,
  class: "change-group"
}, r6 = {
  key: 1,
  class: "change-group"
}, c6 = {
  key: 0,
  class: "version"
}, u6 = {
  key: 2,
  class: "change-group"
}, d6 = { class: "change-item" }, m6 = /* @__PURE__ */ be({
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
    return at(async () => {
      try {
        a.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), L(It, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: h(() => {
        var v, f, p, w;
        return [
          s("div", QI, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", YI, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", XI, [
              (n(!0), i(j, null, he(a.value.refs, (g) => (n(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(De, {
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
          s("div", ZI, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", e6, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", t6, "Loading details...")) : a.value ? (n(), i("div", s6, [
            s("div", o6, [
              s("span", n6, m(a.value.stats.files_changed) + " files", 1),
              s("span", a6, "+" + m(a.value.stats.insertions), 1),
              s("span", l6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", i6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, he(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", r6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, he(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (n(), i("span", c6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", u6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", d6, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(De, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
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
}), f6 = /* @__PURE__ */ xe(m6, [["__scopeId", "data-v-d256ff6d"]]), v6 = { class: "popover-header" }, p6 = { class: "popover-body" }, g6 = {
  key: 0,
  class: "changes-summary"
}, h6 = {
  key: 0,
  class: "change-item"
}, y6 = {
  key: 1,
  class: "change-item"
}, w6 = {
  key: 2,
  class: "change-item"
}, _6 = {
  key: 3,
  class: "change-item"
}, k6 = {
  key: 4,
  class: "change-item"
}, b6 = {
  key: 5,
  class: "change-item"
}, $6 = {
  key: 1,
  class: "no-changes"
}, C6 = {
  key: 2,
  class: "loading"
}, x6 = {
  key: 3,
  class: "issues-error"
}, S6 = { class: "error-header" }, I6 = { class: "error-title" }, E6 = { class: "issues-list" }, T6 = { class: "workflow-state" }, M6 = { class: "message-section" }, P6 = { class: "popover-footer" }, R6 = {
  key: 1,
  class: "commit-popover"
}, L6 = { class: "popover-header" }, D6 = { class: "popover-body" }, N6 = {
  key: 0,
  class: "changes-summary"
}, O6 = {
  key: 0,
  class: "change-item"
}, U6 = {
  key: 1,
  class: "change-item"
}, A6 = {
  key: 2,
  class: "change-item"
}, z6 = {
  key: 3,
  class: "change-item"
}, F6 = {
  key: 4,
  class: "change-item"
}, V6 = {
  key: 5,
  class: "change-item"
}, B6 = {
  key: 1,
  class: "no-changes"
}, W6 = {
  key: 2,
  class: "loading"
}, G6 = {
  key: 3,
  class: "issues-error"
}, j6 = { class: "error-header" }, H6 = { class: "error-title" }, q6 = { class: "issues-list" }, K6 = { class: "workflow-state" }, J6 = { class: "message-section" }, Q6 = { class: "popover-footer" }, Y6 = /* @__PURE__ */ be({
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
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), f = R(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), p = R(() => f.value.length > 0), w = R(() => p.value && !u.value);
    async function g() {
      var _, C, x, S;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const P = await l(r.value.trim(), u.value);
          if (P.status === "success") {
            const T = `Committed: ${((_ = P.summary) == null ? void 0 : _.new) || 0} new, ${((C = P.summary) == null ? void 0 : C.modified) || 0} modified, ${((x = P.summary) == null ? void 0 : x.deleted) || 0} deleted`;
            a("committed", { success: !0, message: T });
          } else if (P.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (P.status === "blocked") {
            const T = ((S = P.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: P.message || "Commit failed" });
        } catch (P) {
          a("committed", { success: !1, message: P instanceof Error ? P.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (n(), L(Lt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (x) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", v6, [
            C[11] || (C[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (x) => a("close"))
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
          s("div", p6, [
            e.status && d.value ? (n(), i("div", g6, [
              e.status.workflows.new.length ? (n(), i("div", h6, [
                C[12] || (C[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", y6, [
                C[13] || (C[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", w6, [
                C[14] || (C[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", _6, [
                C[15] || (C[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", k6, [
                C[16] || (C[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (n(), i("div", b6, [...C[17] || (C[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", $6, " No changes to commit ")) : (n(), i("div", C6, " Loading... ")),
            p.value ? (n(), i("div", x6, [
              s("div", S6, [
                C[18] || (C[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", I6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", E6, [
                (n(!0), i(j, null, he(f.value, (x) => (n(), i("div", {
                  key: x.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(x.name), 1),
                  s("span", T6, "(" + m(x.sync_state) + ")", 1),
                  $(": " + m(x.issue_summary), 1)
                ]))), 128))
              ]),
              b(Jn, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = (x) => u.value = x),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", M6, [
              b(xo, {
                modelValue: r.value,
                "onUpdate:modelValue": C[2] || (C[2] = (x) => r.value = x),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", P6, [
            b(De, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (x) => a("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                $(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", R6, [
      s("div", L6, [
        C[22] || (C[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = (x) => a("close"))
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
      s("div", D6, [
        e.status && d.value ? (n(), i("div", N6, [
          e.status.workflows.new.length ? (n(), i("div", O6, [
            C[23] || (C[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", U6, [
            C[24] || (C[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", A6, [
            C[25] || (C[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", z6, [
            C[26] || (C[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", F6, [
            C[27] || (C[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (n(), i("div", V6, [...C[28] || (C[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", B6, " No changes to commit ")) : (n(), i("div", W6, " Loading... ")),
        p.value ? (n(), i("div", G6, [
          s("div", j6, [
            C[29] || (C[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", H6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", q6, [
            (n(!0), i(j, null, he(f.value, (x) => (n(), i("div", {
              key: x.name,
              class: "issue-item"
            }, [
              s("strong", null, m(x.name), 1),
              s("span", K6, "(" + m(x.sync_state) + ")", 1),
              $(": " + m(x.issue_summary), 1)
            ]))), 128))
          ]),
          b(Jn, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = (x) => u.value = x),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", J6, [
          b(xo, {
            modelValue: r.value,
            "onUpdate:modelValue": C[8] || (C[8] = (x) => r.value = x),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", Q6, [
        b(De, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (x) => a("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(De, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            $(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), $c = /* @__PURE__ */ xe(Y6, [["__scopeId", "data-v-5f897631"]]), X6 = { class: "modal-header" }, Z6 = { class: "modal-body" }, eE = { class: "switch-message" }, tE = { class: "switch-details" }, sE = { class: "modal-actions" }, oE = /* @__PURE__ */ be({
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
          s("div", X6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Z6, [
            s("p", eE, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              s("strong", null, m(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              s("strong", null, m(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This will restart ComfyUI")
            ], -1)),
            s("p", tE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", sE, [
            b(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
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
}), nE = /* @__PURE__ */ xe(oE, [["__scopeId", "data-v-e9c5253e"]]), aE = {
  key: 0,
  class: "modal-overlay"
}, lE = { class: "modal-content" }, iE = { class: "modal-body" }, rE = { class: "progress-info" }, cE = { class: "progress-percentage" }, uE = { class: "progress-state" }, dE = { class: "switch-steps" }, mE = { class: "step-icon" }, fE = { class: "step-label" }, vE = /* @__PURE__ */ be({
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
    return (r, c) => (n(), L(Lt, { to: "body" }, [
      e.show ? (n(), i("div", aE, [
        s("div", lE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", iE, [
            b(vc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", rE, [
              s("div", cE, m(e.progress) + "%", 1),
              s("div", uE, m(o.value), 1)
            ]),
            s("div", dE, [
              (n(!0), i(j, null, he(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Ve(["switch-step", u.status])
              }, [
                s("span", mE, m(u.icon), 1),
                s("span", fE, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), pE = /* @__PURE__ */ xe(vE, [["__scopeId", "data-v-768a5078"]]), gE = { class: "modal-header" }, hE = { class: "modal-body" }, yE = {
  key: 0,
  class: "node-section"
}, wE = { class: "node-list" }, _E = {
  key: 1,
  class: "node-section"
}, kE = { class: "node-list" }, bE = { class: "modal-actions" }, $E = /* @__PURE__ */ be({
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
          s("div", gE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", hE, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", yE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", wE, [
                (n(!0), i(j, null, he(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", _E, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", kE, [
                (n(!0), i(j, null, he(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
          s("div", bE, [
            b(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
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
}), CE = /* @__PURE__ */ xe($E, [["__scopeId", "data-v-7cad7518"]]), xE = [
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
], In = "v0.0.24", SE = "Akatz", IE = { class: "social-buttons" }, EE = ["title", "aria-label", "onClick"], TE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ME = ["d"], PE = ["title", "aria-label", "onClick"], RE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, LE = ["d"], DE = /* @__PURE__ */ be({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", IE, [
      (n(!0), i(j, null, he(tt(xE), (l) => (n(), i(j, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          $(m(l.label) + " ", 1),
          (n(), i("svg", TE, [
            s("path", {
              d: l.iconPath
            }, null, 8, ME)
          ]))
        ], 8, EE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (n(), i("svg", RE, [
            s("path", {
              d: l.iconPath
            }, null, 8, LE)
          ]))
        ], 8, PE))
      ], 64))), 128))
    ]));
  }
}), Cc = /* @__PURE__ */ xe(DE, [["__scopeId", "data-v-4f846342"]]), NE = { class: "footer-info" }, OE = ["title"], UE = {
  key: 0,
  class: "dev-badge"
}, AE = { class: "made-by" }, zE = /* @__PURE__ */ be({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ct(), o = k(null), a = k(null), l = k(null), r = R(() => o.value === "development"), c = R(() => {
      var d;
      if (!r.value) return In;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${In} (${u})` : `${In} (development)`;
    });
    return at(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (n(), i("div", NE, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        $(m(tt(In)) + " ", 1),
        r.value ? (n(), i("span", UE, "dev")) : y("", !0)
      ], 8, OE),
      s("span", AE, [
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
        $(" by " + m(tt(SE)), 1)
      ])
    ]));
  }
}), xc = /* @__PURE__ */ xe(zE, [["__scopeId", "data-v-4fa265b3"]]), FE = /* @__PURE__ */ be({
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
    return (r, c) => (n(), L(It, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        b(uc, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          b(De, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(De, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), VE = /* @__PURE__ */ xe(FE, [["__scopeId", "data-v-fac00ae7"]]), BE = { class: "header-actions" }, WE = {
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
}, CT = { class: "wizard-footer" }, xT = { class: "wizard-footer-actions" }, po = 10, ST = 600 * 1e3, Ti = 1800 * 1e3, IT = /* @__PURE__ */ be({
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
    } = ct(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), C = k(!1), x = k(!1), S = k(!1), P = k(null), T = k(o.initialStep === 2), E = k(o.defaultPath), N = k(!!o.detectedModelsDir), A = k(o.detectedModelsDir || ""), H = k(null), M = k(null), V = k(null), ae = k(null), ce = k("my-new-env"), ue = k(mc), ke = k("latest"), Z = k(fc), B = k(!0), K = k(null), Re = k(null), X = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ye = k(!1), U = k(!1), fe = k(!1), Le = k({ progress: 0, message: "" }), ve = k({ progress: 0, message: "" }), ee = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Q = k(0), we = k(null), te = k(0), oe = k(null), Me = R(() => {
      var Ce, Ye;
      const pe = (Ce = E.value) == null ? void 0 : Ce.trim(), J = !H.value, He = !N.value || !M.value && ((Ye = A.value) == null ? void 0 : Ye.trim());
      return pe && J && He;
    }), me = R(() => {
      var pe;
      return (pe = ce.value) == null ? void 0 : pe.trim();
    }), le = R(() => !!(p.value === 2 || Re.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), I = R(() => Re.value || o.workspacePath || null);
    async function F() {
      var pe;
      if (H.value = null, !!((pe = E.value) != null && pe.trim()))
        try {
          const J = await c({ path: E.value, type: "workspace" });
          J.valid || (H.value = J.error || "Invalid path");
        } catch (J) {
          H.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ie() {
      var pe;
      if (M.value = null, V.value = null, ae.value = null, !!((pe = A.value) != null && pe.trim()))
        try {
          const J = await c({ path: A.value, type: "models" });
          if (J.valid)
            ae.value = J.model_count ?? null;
          else if (M.value = J.error || "Invalid path", J.suggestion) {
            V.value = J.suggestion, A.value = J.suggestion, M.value = null;
            const He = await c({ path: J.suggestion, type: "models" });
            He.valid && (ae.value = He.model_count ?? null);
          }
        } catch (J) {
          M.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function Ie() {
      var pe, J, He, Ce, Ye;
      if (H.value = null, M.value = null, await F(), (pe = H.value) != null && pe.includes("already exists")) {
        H.value = null, Re.value = ((J = E.value) == null ? void 0 : J.trim()) || o.defaultPath, p.value = 2, Se();
        return;
      }
      if (!H.value && !(N.value && ((He = A.value) != null && He.trim()) && (await ie(), M.value))) {
        U.value = !0;
        try {
          await l({
            workspace_path: ((Ce = E.value) == null ? void 0 : Ce.trim()) || o.defaultPath,
            models_directory: N.value && ((Ye = A.value) == null ? void 0 : Ye.trim()) || null
          }), Q.value = 0, we.value = Date.now();
          const ot = setInterval(async () => {
            var ze;
            if (we.value && Date.now() - we.value > ST) {
              clearInterval(ot), U.value = !1, H.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const O = await r();
              if (Q.value = 0, O.state === "idle" && U.value) {
                clearInterval(ot), U.value = !1, H.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Le.value = { progress: O.progress, message: O.message }, O.state === "complete" ? (clearInterval(ot), U.value = !1, Re.value = ((ze = E.value) == null ? void 0 : ze.trim()) || o.defaultPath, p.value = 2, Se()) : O.state === "error" && (clearInterval(ot), U.value = !1, H.value = O.error || "Workspace creation failed");
            } catch (O) {
              Q.value++, console.warn(`Polling failure ${Q.value}/${po}:`, O), Q.value >= po && (clearInterval(ot), U.value = !1, H.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ot) {
          U.value = !1, H.value = ot instanceof Error ? ot.message : "Failed to create workspace";
        }
      }
    }
    async function $e() {
      fe.value = !0, K.value = null;
      try {
        const pe = {
          name: ce.value.trim() || "my-new-env",
          python_version: ue.value,
          comfyui_version: ke.value,
          torch_backend: Z.value,
          switch_after: B.value,
          workspace_path: Re.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(pe)).status === "started") {
          te.value = 0, oe.value = Date.now();
          const He = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Ti) {
              clearInterval(He), fe.value = !1, K.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ce = await d();
              if (te.value = 0, Ce.state === "idle" && fe.value) {
                clearInterval(He), fe.value = !1, K.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ve.value = {
                progress: Ce.progress ?? 0,
                message: Ce.message,
                phase: Ce.phase
              }, Ce.state === "complete") {
                clearInterval(He), fe.value = !1;
                const Ye = Ce.environment_name || pe.name;
                B.value ? a("complete", Ye, Re.value) : (g.value = "landing", a("environment-created-no-switch", Ye));
              } else Ce.state === "error" && (clearInterval(He), fe.value = !1, K.value = Ce.error || "Environment creation failed");
            } catch (Ce) {
              te.value++, console.warn(`Polling failure ${te.value}/${po}:`, Ce), te.value >= po && (clearInterval(He), fe.value = !1, K.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (pe) {
        fe.value = !1, K.value = pe instanceof Error ? pe.message : "Unknown error";
      }
    }
    async function Se() {
      ye.value = !0;
      try {
        X.value = await f();
      } catch (pe) {
        console.error("Failed to load ComfyUI releases:", pe);
      } finally {
        ye.value = !1;
      }
    }
    function Ae() {
      w.value && a("switch-environment", w.value, Re.value);
    }
    function Fe() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Ne(pe, J) {
      C.value = !1, J ? a("complete", pe, Re.value) : (a("environment-created-no-switch", pe), g.value = "landing");
    }
    function Ee() {
    }
    at(async () => {
      if (o.detectedModelsDir && (A.value = o.detectedModelsDir), o.workspacePath && (Re.value = o.workspacePath), p.value === 2) {
        Se();
        const pe = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Ke(), clearTimeout(pe), T.value = !1;
      }
    });
    async function Ke() {
      try {
        const pe = await d();
        if (console.log("[ComfyGit] Create progress check:", pe.state, pe), pe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", pe.environment_name), g.value = "create", fe.value = !0, ce.value = pe.environment_name || "my-new-env", ve.value = {
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
        const pe = await v();
        console.log("[ComfyGit] Import progress check:", pe.state, pe), pe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", pe.environment_name), P.value = {
          message: pe.message || "Importing...",
          phase: pe.phase || "",
          progress: pe.progress ?? 0,
          environmentName: pe.environment_name || ""
        }, S.value = !0, g.value = "import", C.value = !0);
      } catch (pe) {
        console.log("[ComfyGit] Import progress check failed:", pe);
      }
    }
    async function Be() {
      te.value = 0, oe.value = Date.now();
      let pe = null;
      const J = async () => {
        if (oe.value && Date.now() - oe.value > Ti)
          return pe && clearInterval(pe), fe.value = !1, K.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ce = await d();
          if (te.value = 0, Ce.state === "idle" && fe.value)
            return pe && clearInterval(pe), fe.value = !1, K.value = "Environment creation was interrupted. Please try again.", !1;
          if (ve.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ce.state === "complete") {
            pe && clearInterval(pe), fe.value = !1;
            const Ye = Ce.environment_name || ce.value;
            return a("complete", Ye, Re.value), !1;
          } else if (Ce.state === "error")
            return pe && clearInterval(pe), fe.value = !1, K.value = Ce.error || "Environment creation failed", !1;
          return !0;
        } catch (Ce) {
          return te.value++, console.warn(`Polling failure ${te.value}/${po}:`, Ce), te.value >= po ? (pe && clearInterval(pe), fe.value = !1, K.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (pe = setInterval(async () => {
        !await J() && pe && clearInterval(pe);
      }, 2e3));
    }
    return (pe, J) => (n(), i(j, null, [
      b(It, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (He) => pe.$emit("close"))
      }, {
        header: h(() => [
          J[20] || (J[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", BE, [
            b(Cc),
            J[19] || (J[19] = s("span", { class: "header-divider" }, null, -1)),
            le.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (He) => _.value = !0)
            }, [...J[17] || (J[17] = [
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
              onClick: J[1] || (J[1] = (He) => pe.$emit("close")),
              title: "Close"
            }, [...J[18] || (J[18] = [
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
            p.value === 1 ? (n(), i("div", WE, [
              J[24] || (J[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", GE, [
                J[21] || (J[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (Ce) => E.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, jE), [
                  [en, E.value]
                ]),
                H.value ? (n(), i("p", HE, m(H.value), 1)) : y("", !0)
              ]),
              s("div", qE, [
                s("label", KE, [
                  Tt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (Ce) => N.value = Ce)
                  }, null, 512), [
                    [Hn, N.value]
                  ]),
                  J[22] || (J[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (n(), i("div", JE, [
                J[23] || (J[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (Ce) => A.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, QE), [
                  [en, A.value]
                ]),
                e.detectedModelsDir && !A.value ? (n(), i("p", YE, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                V.value ? (n(), i("p", XE, " Did you mean: " + m(V.value), 1)) : y("", !0),
                M.value ? (n(), i("p", ZE, m(M.value), 1)) : y("", !0),
                ae.value !== null && !M.value ? (n(), i("p", eT, " Found " + m(ae.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              U.value ? (n(), L(Kn, {
                key: 1,
                progress: Le.value.progress,
                message: Le.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", tT, [
              T.value ? (n(), i("div", sT, [...J[25] || (J[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(j, { key: 1 }, [
                !o.cliInstalled && !x.value ? (n(), i("div", oT, [
                  s("div", nT, [
                    J[27] || (J[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (Ce) => x.value = !0),
                      title: "Dismiss"
                    }, [...J[26] || (J[26] = [
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
                  J[29] || (J[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  J[30] || (J[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (n(), i("div", aT, [
                  J[34] || (J[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (Ce) => g.value = "create")
                  }, [...J[31] || (J[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: J[7] || (J[7] = (Ce) => {
                      S.value = !1, g.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (He = o.existingEnvironments) != null && He.length ? (n(), i(j, { key: 0 }, [
                    J[33] || (J[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", lT, [
                      (n(!0), i(j, null, he(o.existingEnvironments, (Ce) => (n(), i("label", {
                        key: Ce,
                        class: Ve(["env-option", { selected: w.value === Ce }])
                      }, [
                        Tt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ce,
                          "onUpdate:modelValue": J[8] || (J[8] = (Ye) => w.value = Ye)
                        }, null, 8, iT), [
                          [Ln, w.value]
                        ]),
                        s("span", rT, m(Ce), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (n(), i("div", cT, [
                  fe.value ? (n(), i("div", kT, [
                    s("p", bT, [
                      J[41] || (J[41] = $(" Creating environment ", -1)),
                      s("strong", null, m(ce.value), 1),
                      J[42] || (J[42] = $("... ", -1))
                    ]),
                    b(Kn, {
                      progress: ve.value.progress,
                      message: ve.value.message,
                      "current-phase": ve.value.phase,
                      "show-steps": !0,
                      steps: ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(j, { key: 0 }, [
                    J[40] || (J[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", uT, [
                      J[35] || (J[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(s("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (Ce) => ce.value = Ce),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [en, ce.value]
                      ])
                    ]),
                    s("div", dT, [
                      J[36] || (J[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (Ce) => ue.value = Ce),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, he(tt(dc), (Ce) => (n(), i("option", {
                          key: Ce,
                          value: Ce
                        }, m(Ce), 9, mT))), 128))
                      ], 512), [
                        [Co, ue.value]
                      ])
                    ]),
                    s("div", fT, [
                      J[37] || (J[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (Ce) => ke.value = Ce),
                        class: "form-select",
                        disabled: ye.value
                      }, [
                        (n(!0), i(j, null, he(X.value, (Ce) => (n(), i("option", {
                          key: Ce.tag_name,
                          value: Ce.tag_name
                        }, m(Ce.name), 9, pT))), 128))
                      ], 8, vT), [
                        [Co, ke.value]
                      ])
                    ]),
                    s("div", gT, [
                      J[38] || (J[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (Ce) => Z.value = Ce),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, he(tt(Ml), (Ce) => (n(), i("option", {
                          key: Ce,
                          value: Ce
                        }, m(Ce) + m(Ce === "auto" ? " (detect GPU)" : ""), 9, hT))), 128))
                      ], 512), [
                        [Co, Z.value]
                      ])
                    ]),
                    s("div", yT, [
                      s("label", wT, [
                        Tt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (Ce) => B.value = Ce)
                        }, null, 512), [
                          [Hn, B.value]
                        ]),
                        J[39] || (J[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    K.value ? (n(), i("div", _T, m(K.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (n(), i("div", $T, [
                  b(hc, {
                    "workspace-path": Re.value,
                    "resume-import": S.value,
                    "initial-progress": P.value ?? void 0,
                    onImportComplete: Ne,
                    onImportStarted: J[14] || (J[14] = (Ce) => C.value = !0),
                    onSourceCleared: Ee
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
              p.value === 1 ? (n(), L(De, {
                key: 0,
                variant: "primary",
                disabled: !Me.value || U.value,
                onClick: Ie
              }, {
                default: h(() => [
                  $(m(U.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(j, { key: 1 }, [
                !fe.value && !C.value && (g.value !== "landing" || o.setupState === "no_workspace" && !Re.value) ? (n(), L(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: Fe
                }, {
                  default: h(() => [...J[44] || (J[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (n(), L(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !me.value || fe.value,
                  onClick: $e
                }, {
                  default: h(() => [
                    $(m(fe.value ? "Creating..." : B.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (n(), L(De, {
                  key: 2,
                  variant: "primary",
                  onClick: Ae
                }, {
                  default: h(() => [
                    $(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (n(), L(VE, {
        key: 0,
        "workspace-path": I.value,
        onClose: J[16] || (J[16] = (He) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), ET = /* @__PURE__ */ xe(IT, [["__scopeId", "data-v-9a9aadc0"]]), TT = { class: "update-banner" }, MT = { class: "update-banner__left" }, PT = { class: "update-banner__title" }, RT = {
  key: 0,
  class: "update-banner__summary"
}, LT = { class: "update-banner__actions" }, DT = ["disabled"], NT = ["disabled"], OT = ["disabled"], UT = /* @__PURE__ */ be({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", TT, [
      s("div", MT, [
        s("div", PT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", RT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", LT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, DT),
        e.info.release_url ? (n(), i("button", {
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
}), AT = /* @__PURE__ */ xe(UT, [["__scopeId", "data-v-49562c5c"]]), Sc = "ComfyGit.UpdateNotice.DismissedVersion";
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
}, yM = { class: "env-stats" }, wM = ["onClick"], _M = { class: "toast-container" }, kM = { class: "toast-message" }, Mi = "ComfyGit.LastView", Pi = "ComfyGit.LastSection", bM = /* @__PURE__ */ be({
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
      syncEnvironmentManually: C,
      repairWorkflowModels: x,
      getSetupStatus: S,
      getUpdateCheck: P,
      updateManager: T
    } = ct(), E = qv(), N = k(null), A = k([]), H = k([]), M = k([]), V = R(() => M.value.find((ne) => ne.is_current)), ae = k(null), ce = k(!1), ue = k(!1), ke = k("history"), Z = k("manifest"), B = k(null), K = k(!1), Re = k(1), X = R(() => {
      var ne;
      return ((ne = B.value) == null ? void 0 : ne.state) || "managed";
    }), ye = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, U = R(() => {
      var ne, q;
      return ((q = (ne = B.value) == null ? void 0 : ne.runtime_context) == null ? void 0 : q.capabilities) || ye;
    }), fe = k(!1), Le = k(null), ve = k(null), ee = k(!1), Q = k(null), we = k(!1), te = k(!1), oe = R(() => !we.value && VT(Q.value)), Me = k(null), me = k(null), le = k(null), I = k(!1), F = k(!1), ie = k(""), Ie = k(null), $e = k({ state: "idle", progress: 0, message: "" });
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
    }, Ne = o.initialView ? Fe[o.initialView] : null, Ee = [
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
        const ne = sessionStorage.getItem(Mi), q = sessionStorage.getItem(Pi), qe = ne === "branches" || ne === "history" || ne === "remotes" ? "version-control" : ne === "manifest" || ne === "debug-env" || ne === "debug-workspace" ? "diagnostics" : ne, Qe = q === "all-envs" ? "workspace" : q === "sharing" ? "version-control" : q;
        if (ne && q && Ee.includes(qe) && Ke.includes(Qe))
          return { view: qe, section: Qe };
      } catch {
      }
      return null;
    }
    const pe = Be(), J = k((Ne == null ? void 0 : Ne.view) ?? (pe == null ? void 0 : pe.view) ?? "status"), He = k((Ne == null ? void 0 : Ne.section) ?? (pe == null ? void 0 : pe.section) ?? "this-env");
    function Ce(ne, q) {
      J.value = ne, He.value = q;
      try {
        sessionStorage.setItem(Mi, ne), sessionStorage.setItem(Pi, q);
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
      Z.value = ne, Ce("diagnostics", "diagnostics");
    }
    function O() {
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
        const ss = Dt;
        if ([
          (Qe = ss.textContent) == null ? void 0 : Qe.trim(),
          (lt = ss.getAttribute("title")) == null ? void 0 : lt.trim(),
          (pt = ss.getAttribute("aria-label")) == null ? void 0 : pt.trim()
        ].filter(Boolean).map((zs) => zs.toLowerCase()).some((zs) => q.includes(zs)))
          return ss.click(), !0;
      }
      return !1;
    }
    const D = k(null), z = k(!1), Y = k(!1), Oe = k([]);
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
      Q.value = null, we.value = !1;
      try {
        Q.value = await P();
      } catch {
      }
    }
    function Et() {
      var q;
      const ne = (q = Q.value) == null ? void 0 : q.release_url;
      if (ne)
        try {
          window.open(ne, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function re() {
      var q;
      const ne = (q = Q.value) == null ? void 0 : q.latest_version;
      ne && FT(ne), we.value = !0;
    }
    async function W() {
      var q, qe;
      if (te.value) return;
      te.value = !0;
      const ne = Pe("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await T();
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
          Qs();
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
    const de = R(() => {
      if (!N.value) return "neutral";
      const ne = N.value.workflows, q = ne.new.length > 0 || ne.modified.length > 0 || ne.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? q ? "warning" : "success" : "error";
    });
    R(() => N.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function We(ne = {}) {
      fe.value = !0, Le.value = null;
      try {
        const [q, qe, Qe, lt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        N.value = q, A.value = qe.commits, H.value = Qe.branches, M.value = lt, a("statusUpdate", q), (ne.refreshWorkflows ?? !0) && Me.value && await Me.value.loadWorkflows(!0);
      } catch (q) {
        Le.value = q instanceof Error ? q.message : "Failed to load status", N.value = null, A.value = [], H.value = [];
      } finally {
        fe.value = !1;
      }
    }
    function dt(ne) {
      ve.value = ne;
    }
    async function Ct(ne) {
      var qe;
      ve.value = null;
      const q = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      D.value = {
        title: q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: q ? "You have uncommitted changes that will be lost." : `Checkout commit ${ne.short_hash || ((qe = ne.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: q ? wn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: q,
        onConfirm: async () => {
          var pt;
          D.value = null, Qs();
          const Qe = Pe(`Checking out ${ne.short_hash || ((pt = ne.hash) == null ? void 0 : pt.slice(0, 7))}...`, "info", 0), lt = await u(ne.hash, q);
          Ge(Qe), lt.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(lt.message || "Checkout failed", "error");
        }
      };
    }
    async function it(ne) {
      const q = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      D.value = {
        title: q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: q ? "You have uncommitted changes." : `Switch to branch "${ne}"?`,
        details: q ? wn() : void 0,
        warning: q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, Qs();
          const qe = Pe(`Switching to ${ne}...`, "info", 0), Qe = await v(ne, q);
          Ge(qe), Qe.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function xt(ne) {
      const q = Pe(`Creating branch ${ne}...`, "info", 0), qe = await d(ne);
      Ge(q), qe.status === "success" ? (Pe(`Branch "${ne}" created`, "success"), await We()) : Pe(qe.message || "Failed to create branch", "error");
    }
    async function ts(ne, q = !1) {
      const qe = async (Qe) => {
        var pt;
        const lt = Pe(`Deleting branch ${ne}...`, "info", 0);
        try {
          const Dt = await f(ne, Qe);
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
          const ss = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          ss.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await qe(!0);
            }
          } : Pe(ss, "error");
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
    async function xs(ne) {
      ve.value = null;
      const q = prompt("Enter branch name:");
      if (q) {
        const qe = Pe(`Creating branch ${q}...`, "info", 0), Qe = await d(q, ne.hash);
        Ge(qe), Qe.status === "success" ? (Pe(`Branch "${q}" created from ${ne.short_hash}`, "success"), await We()) : Pe(Qe.message || "Failed to create branch", "error");
      }
    }
    function Qs() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function da() {
      if (!U.value.can_restart_current) {
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
          D.value = null, Qs(), Pe("Restarting environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ma() {
      if (!U.value.can_stop_current) {
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
    async function As(ne, q) {
      if (!U.value.can_switch_environment) {
        Pe("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      ee.value = !1, ie.value = ne, Ie.value = q || null, I.value = !0;
    }
    async function fa() {
      I.value = !1, F.value = !0, Qs(), $e.value = {
        progress: 10,
        state: uo(10),
        message: mo(10)
      };
      try {
        await w(ie.value, Ie.value || void 0), va(), pa();
      } catch (ne) {
        Ss(), F.value = !1, Pe(`Failed to initiate switch: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error"), $e.value = { state: "idle", progress: 0, message: "" }, Ie.value = null;
      }
    }
    function uo(ne) {
      return ne >= 100 ? "complete" : ne >= 80 ? "validating" : ne >= 60 ? "starting" : ne >= 30 ? "syncing" : "preparing";
    }
    function mo(ne) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[uo(ne)] || "";
    }
    function va() {
      if (Ae) return;
      let ne = 10;
      const q = 60, qe = 5e3, Qe = 100, lt = (q - ne) / (qe / Qe);
      Ae = window.setInterval(() => {
        if (ne += lt, ne >= q && (ne = q, Ss()), $e.value.progress < q) {
          const pt = Math.floor(ne);
          $e.value = {
            progress: pt,
            state: uo(pt),
            message: mo(pt)
          };
        }
      }, Qe);
    }
    function Ss() {
      Ae && (clearInterval(Ae), Ae = null);
    }
    function pa() {
      Se || (Se = window.setInterval(async () => {
        try {
          let ne = await E.getStatus();
          if ((!ne || ne.state === "idle") && (ne = await g()), !ne)
            return;
          const q = ne.progress || 0;
          q >= 60 && Ss();
          const qe = Math.max(q, $e.value.progress), Qe = ne.state && ne.state !== "idle" && ne.state !== "unknown", lt = Qe ? ne.state : uo(qe), pt = Qe && ne.message || mo(qe);
          $e.value = {
            state: lt,
            progress: qe,
            message: pt
          }, ne.state === "complete" ? (Ss(), Do(), F.value = !1, Pe(`✓ Switched to ${ie.value}`, "success"), await We(), ie.value = "") : ne.state === "rolled_back" ? (Ss(), Do(), F.value = !1, Pe("Switch failed, restored previous environment", "warning"), ie.value = "") : ne.state === "critical_failure" && (Ss(), Do(), F.value = !1, Pe(`Critical error during switch: ${ne.message}`, "error"), ie.value = "");
        } catch (ne) {
          console.error("Failed to poll switch progress:", ne);
        }
      }, 1e3));
    }
    function Do() {
      Ss(), Se && (clearInterval(Se), Se = null);
    }
    function ga() {
      var ne;
      I.value = !1, ie.value = "", (ne = B.value) != null && ne.state && B.value.state !== "managed" && (Re.value = B.value.state === "no_workspace" ? 1 : 2, K.value = !0);
    }
    async function ha(ne) {
      z.value = !1, await We(), Pe(ne.message, ne.success ? "success" : "error");
    }
    async function ya() {
      Y.value = !1;
      const ne = Pe("Syncing environment...", "info", 0);
      try {
        const q = await C("skip", !0);
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
    async function wa(ne) {
      var q;
      try {
        const qe = await x(ne);
        qe.failed.length === 0 ? Pe(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Pe(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await We();
      } catch (qe) {
        Pe(`Repair failed: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
      } finally {
        (q = le.value) == null || q.resetRepairingState();
      }
    }
    async function hn() {
      var q, qe;
      const ne = Pe("Repairing environment...", "info", 0);
      try {
        const Qe = await C("skip", !0);
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
    async function _a(ne, q) {
      Pe(`Environment '${ne}' created`, "success"), await We(), me.value && await me.value.loadEnvironments(), q && U.value.can_switch_environment && await As(ne);
    }
    async function ka(ne) {
      var q;
      if (!U.value.can_delete_environment) {
        Pe("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((q = V.value) == null ? void 0 : q.name) === ne) {
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
            qe.status === "success" ? (Pe(`Environment "${ne}" deleted`, "success"), await We(), me.value && await me.value.loadEnvironments()) : Pe(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Pe(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ba(ne, q) {
      K.value = !1;
      try {
        B.value = await S();
      } catch {
      }
      U.value.can_switch_environment && await As(ne, q);
    }
    function $a() {
      K.value = !1, a("close");
    }
    async function Ca(ne, q) {
      await As(ne, q);
    }
    async function xa(ne) {
      ce.value = !1, await We(), await As(ne);
    }
    function Sa() {
      ae.value = null, ce.value = !0;
    }
    function Ia(ne) {
      ae.value = ne, ue.value = !0;
    }
    function yn() {
      ue.value = !1, ae.value = null;
    }
    async function Ea(ne) {
      B.value = await S(), console.log(`Environment '${ne}' created. Available for switching.`);
    }
    function Ta() {
      if (!U.value.can_create_environment) {
        Pe("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Ce("environments", "workspace"), setTimeout(() => {
        var ne;
        (ne = me.value) == null || ne.openCreateModal();
      }, 100);
    }
    function wn() {
      if (!N.value) return [];
      const ne = [], q = N.value.workflows;
      return q.new.length && ne.push(`${q.new.length} new workflow(s)`), q.modified.length && ne.push(`${q.modified.length} modified workflow(s)`), q.deleted.length && ne.push(`${q.deleted.length} deleted workflow(s)`), ne;
    }
    return at(async () => {
      try {
        if (B.value = await S(), B.value.state === "no_workspace" && U.value.can_initialize_workspace) {
          K.value = !0, Re.value = 1;
          return;
        }
        if (B.value.state === "empty_workspace" && U.value.can_create_environment) {
          K.value = !0, Re.value = 2;
          return;
        }
        if (B.value.state === "unmanaged" && U.value.can_switch_environment) {
          K.value = !0, Re.value = 2;
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
      var qe, Qe, lt, pt, Dt, ss, No, zs, G, _e, je, mt, Nt;
      return n(), i("div", BT, [
        s("div", WT, [
          s("div", GT, [
            q[27] || (q[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (n(), i("div", jT)) : y("", !0)
          ]),
          s("div", HT, [
            b(Cc),
            q[30] || (q[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ve(["icon-btn", { spinning: fe.value }]),
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
              onClick: q[0] || (q[0] = (Xe) => a("close")),
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
        oe.value && Q.value ? (n(), L(AT, {
          key: 0,
          info: Q.value,
          updating: te.value,
          onUpdate: W,
          onDismiss: re,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", qT, [
          s("div", KT, [
            q[31] || (q[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", JT, [
              U.value.can_restart_current ? (n(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: da
              }, " Restart ")) : y("", !0),
              U.value.can_stop_current ? (n(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ma
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: q[1] || (q[1] = (Xe) => Ce("environments", "workspace"))
          }, [
            N.value ? (n(), i("div", QT, [
              s("span", null, m(((qe = V.value) == null ? void 0 : qe.name) || ((Qe = N.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              s("span", YT, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            q[32] || (q[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", XT, [
          s("div", ZT, [
            s("div", eM, [
              s("div", tM, [
                q[33] || (q[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "status" && He.value === "this-env" }]),
                  onClick: q[2] || (q[2] = (Xe) => Ce("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "workflows" }]),
                  onClick: q[3] || (q[3] = (Xe) => Ce("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "models-env" }]),
                  onClick: q[4] || (q[4] = (Xe) => Ce("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "nodes" }]),
                  onClick: q[5] || (q[5] = (Xe) => Ce("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "version-control" }]),
                  onClick: q[6] || (q[6] = (Xe) => ot("history"))
                }, " VERSION CONTROL ", 2)
              ]),
              q[36] || (q[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", sM, [
                q[34] || (q[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "environments" }]),
                  onClick: q[7] || (q[7] = (Xe) => Ce("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "model-index" }]),
                  onClick: q[8] || (q[8] = (Xe) => Ce("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "settings" }]),
                  onClick: q[9] || (q[9] = (Xe) => Ce("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              q[37] || (q[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", oM, [
                q[35] || (q[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "diagnostics" && Z.value === "manifest" }]),
                  onClick: q[10] || (q[10] = (Xe) => ze("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: J.value === "diagnostics" && Z.value !== "manifest" }]),
                  onClick: q[11] || (q[11] = (Xe) => ze("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", nM, [
              b(xc)
            ])
          ]),
          s("div", aM, [
            Le.value ? (n(), i("div", lM, m(Le.value), 1)) : !N.value && J.value === "status" ? (n(), i("div", iM, " Loading status... ")) : (n(), i(j, { key: 2 }, [
              J.value === "status" ? (n(), L(Gv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: N.value,
                "setup-state": X.value,
                onSwitchBranch: O,
                onCommitChanges: q[12] || (q[12] = (Xe) => z.value = !0),
                onSyncEnvironment: q[13] || (q[13] = (Xe) => Y.value = !0),
                onViewWorkflows: q[14] || (q[14] = (Xe) => Ce("workflows", "this-env")),
                onViewHistory: q[15] || (q[15] = (Xe) => ot("history")),
                onViewDebug: q[16] || (q[16] = (Xe) => ze("env")),
                onViewNodes: q[17] || (q[17] = (Xe) => Ce("nodes", "this-env")),
                onRepairMissingModels: wa,
                onRepairEnvironment: hn,
                onStartSetup: q[18] || (q[18] = (Xe) => K.value = !0),
                onViewEnvironments: q[19] || (q[19] = (Xe) => Ce("environments", "workspace")),
                onCreateEnvironment: Ta
              }, null, 8, ["status", "setup-state"])) : J.value === "workflows" ? (n(), L(j0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Me,
                onRefresh: We
              }, null, 512)) : J.value === "models-env" ? (n(), L(o2, {
                key: 2,
                onNavigate: Ye
              })) : J.value === "version-control" ? (n(), L(NI, {
                key: 3,
                commits: A.value,
                "current-ref": (lt = N.value) == null ? void 0 : lt.branch,
                branches: H.value,
                current: ((pt = N.value) == null ? void 0 : pt.branch) || null,
                "initial-tab": ke.value,
                onSelect: dt,
                onCheckout: Ct,
                onSwitch: it,
                onCreate: xt,
                onDelete: ts,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : J.value === "nodes" ? (n(), L(X2, {
                key: 4,
                "version-mismatches": ((ss = (Dt = N.value) == null ? void 0 : Dt.comparison) == null ? void 0 : ss.version_mismatches) || [],
                onOpenNodeManager: se,
                onRepairEnvironment: hn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : J.value === "diagnostics" ? (n(), L(JI, {
                key: 5,
                "initial-tab": Z.value
              }, null, 8, ["initial-tab"])) : J.value === "environments" ? (n(), L(YC, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: me,
                "can-create": U.value.can_create_environment,
                "can-switch": U.value.can_switch_environment,
                "can-delete": U.value.can_delete_environment,
                onSwitch: As,
                onCreated: _a,
                onDelete: ka,
                onImport: Sa,
                onExport: Ia
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : J.value === "model-index" ? (n(), L(h2, {
                key: 7,
                onRefresh: We
              })) : J.value === "settings" ? (n(), L(x$, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        ve.value ? (n(), L(f6, {
          key: 1,
          commit: ve.value,
          onClose: q[20] || (q[20] = (Xe) => ve.value = null),
          onCheckout: Ct,
          onCreateBranch: xs
        }, null, 8, ["commit"])) : y("", !0),
        D.value ? (n(), L(Tl, {
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
          onCancel: q[21] || (q[21] = (Xe) => D.value = null),
          onSecondary: D.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        ce.value ? (n(), L(It, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: q[22] || (q[22] = (Xe) => ce.value = !1)
        }, {
          body: h(() => [
            b(i5, {
              embedded: "",
              onImportCompleteSwitch: xa
            })
          ]),
          _: 1
        })) : y("", !0),
        ue.value ? (n(), L(It, {
          key: 4,
          title: ae.value ? `EXPORT ENVIRONMENT: ${ae.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: yn
        }, {
          body: h(() => [
            b(m3, {
              embedded: "",
              "environment-name": ae.value,
              onClose: yn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(nE, {
          show: I.value,
          "from-environment": ((No = V.value) == null ? void 0 : No.name) || "unknown",
          "to-environment": ie.value,
          onConfirm: fa,
          onClose: ga
        }, null, 8, ["show", "from-environment", "to-environment"]),
        z.value && N.value ? (n(), L($c, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: q[23] || (q[23] = (Xe) => z.value = !1),
          onCommitted: ha
        }, null, 8, ["status"])) : y("", !0),
        Y.value && N.value ? (n(), L(CE, {
          key: 6,
          show: Y.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: ya,
          onClose: q[24] || (q[24] = (Xe) => Y.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(pE, {
          show: F.value,
          state: $e.value.state,
          progress: $e.value.progress,
          message: $e.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ee.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: q[26] || (q[26] = vt((Xe) => ee.value = !1, ["self"]))
        }, [
          s("div", rM, [
            s("div", cM, [
              q[39] || (q[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: q[25] || (q[25] = (Xe) => ee.value = !1)
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
            s("div", uM, [
              q[40] || (q[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", dM, [
                (n(!0), i(j, null, he(M.value, (Xe) => (n(), i("div", {
                  key: Xe.name,
                  class: Ve(["env-item", { current: Xe.is_current }])
                }, [
                  s("div", mM, [
                    s("div", fM, [
                      s("span", vM, m(Xe.is_current ? "●" : "○"), 1),
                      s("span", pM, m(Xe.name), 1),
                      Xe.current_branch ? (n(), i("span", gM, "(" + m(Xe.current_branch) + ")", 1)) : y("", !0),
                      Xe.is_current ? (n(), i("span", hM, "CURRENT")) : y("", !0)
                    ]),
                    s("div", yM, m(Xe.workflow_count) + " workflows • " + m(Xe.node_count) + " nodes ", 1)
                  ]),
                  !Xe.is_current && U.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Fs) => As(Xe.name)
                  }, " SWITCH ", 8, wM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        K.value ? (n(), L(ET, {
          key: 8,
          "default-path": ((zs = B.value) == null ? void 0 : zs.default_path) || "~/comfygit",
          "detected-models-dir": ((G = B.value) == null ? void 0 : G.detected_models_dir) || null,
          "initial-step": Re.value,
          "existing-environments": ((_e = B.value) == null ? void 0 : _e.environments) || [],
          "cli-installed": ((je = B.value) == null ? void 0 : je.cli_installed) ?? !0,
          "setup-state": ((mt = B.value) == null ? void 0 : mt.state) || "no_workspace",
          "workspace-path": ((Nt = B.value) == null ? void 0 : Nt.workspace_path) || null,
          onComplete: ba,
          onClose: $a,
          onSwitchEnvironment: Ca,
          onEnvironmentCreatedNoSwitch: Ea
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", _M, [
          b(tm, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(j, null, he(Oe.value, (Xe) => (n(), i("div", {
                key: Xe.id,
                class: Ve(["toast", Xe.type])
              }, [
                s("span", kM, m(Xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $M = /* @__PURE__ */ xe(bM, [["__scopeId", "data-v-f059e95d"]]), CM = { class: "item-header" }, xM = { class: "item-info" }, SM = { class: "filename" }, IM = { class: "metadata" }, EM = { class: "size" }, TM = {
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
}, BM = /* @__PURE__ */ be({
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
      s("div", CM, [
        s("div", xM, [
          s("div", SM, m(e.item.filename), 1),
          s("div", IM, [
            s("span", EM, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", TM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", MM, [
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
      e.item.status === "downloading" ? (n(), i("div", PM, [
        s("div", RM, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", LM, [
          s("span", DM, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", NM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", OM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", UM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", AM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", zM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", FM, [
        $(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", VM, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), zo = /* @__PURE__ */ xe(BM, [["__scopeId", "data-v-2110df65"]]), WM = { class: "queue-title" }, GM = { class: "count" }, jM = { class: "queue-actions" }, HM = { class: "action-label" }, qM = {
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
}, e7 = {
  key: 1,
  class: "section"
}, t7 = { class: "section-header" }, s7 = { class: "section-label paused" }, o7 = { class: "items-list" }, n7 = {
  key: 2,
  class: "section"
}, a7 = { class: "section-header" }, l7 = { class: "section-label" }, i7 = { class: "items-list" }, r7 = {
  key: 3,
  class: "section"
}, c7 = { class: "section-header" }, u7 = { class: "section-label" }, d7 = { class: "items-list" }, m7 = {
  key: 4,
  class: "section"
}, f7 = { class: "section-header" }, v7 = { class: "section-label failed" }, p7 = { class: "items-list" }, g7 = /* @__PURE__ */ be({
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
    } = Lo(), C = k(!1);
    let x = null;
    yt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (E, N) => {
        x && (clearTimeout(x), x = null);
        const A = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, H = N && (N.active > 0 || N.paused > 0);
        A && H && (x = setTimeout(() => {
          _(), x = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = R(() => {
      var A;
      if (t.items.length === 0) return 0;
      const E = l.value.length, N = ((A = o.value) == null ? void 0 : A.progress) || 0;
      return Math.round((E + N / 100) / t.items.length * 100);
    });
    function P(E) {
      v(E);
    }
    function T(E) {
      return E === 0 ? "..." : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, N) => (n(), L(Lt, { to: "body" }, [
      tt(u) ? (n(), i("div", {
        key: 0,
        class: Ve(["model-download-queue", { minimized: !C.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (A) => C.value = !C.value)
        }, [
          s("div", WM, [
            N[4] || (N[4] = s("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", GM, "(" + m(tt(d)) + "/" + m(tt(t).items.length) + ")", 1)
          ]),
          s("div", jM, [
            s("span", HM, m(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (n(), i("div", XM, [
          tt(o) ? (n(), i("div", ZM, [
            N[6] || (N[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(zo, {
              item: tt(o),
              onCancel: N[1] || (N[1] = (A) => P(tt(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          tt(c).length > 0 ? (n(), i("div", e7, [
            s("div", t7, [
              s("span", s7, "Paused (" + m(tt(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...A) => tt(w) && tt(w)(...A))
              }, "Resume All")
            ]),
            s("div", o7, [
              (n(!0), i(j, null, he(tt(c), (A) => (n(), L(zo, {
                key: A.id,
                item: A,
                onResume: (H) => tt(p)(A.id),
                onRemove: (H) => tt(g)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          tt(a).length > 0 ? (n(), i("div", n7, [
            s("div", a7, [
              s("span", l7, "Queued (" + m(tt(a).length) + ")", 1)
            ]),
            s("div", i7, [
              (n(!0), i(j, null, he(tt(a), (A) => (n(), L(zo, {
                key: A.id,
                item: A,
                onCancel: (H) => P(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          tt(l).length > 0 ? (n(), i("div", r7, [
            s("div", c7, [
              s("span", u7, "Completed (" + m(tt(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...A) => tt(_) && tt(_)(...A))
              }, "Clear")
            ]),
            s("div", d7, [
              (n(!0), i(j, null, he(tt(l).slice(0, 3), (A) => (n(), L(zo, {
                key: A.id,
                item: A,
                onRemove: (H) => tt(g)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          tt(r).length > 0 ? (n(), i("div", m7, [
            s("div", f7, [
              s("span", v7, "Failed (" + m(tt(r).length) + ")", 1)
            ]),
            s("div", p7, [
              (n(!0), i(j, null, he(tt(r), (A) => (n(), L(zo, {
                key: A.id,
                item: A,
                onRetry: (H) => tt(f)(A.id),
                onRemove: (H) => tt(g)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", qM, [
          s("div", KM, [
            s("div", {
              class: "progress-fill",
              style: Rt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          tt(o) ? (n(), i("div", JM, [
            s("span", QM, m(tt(o).filename), 1),
            s("span", YM, m(T(tt(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), h7 = /* @__PURE__ */ xe(g7, [["__scopeId", "data-v-3a3c9607"]]), y7 = { class: "detail-header" }, w7 = { class: "item-count" }, _7 = { class: "resource-list" }, k7 = { class: "item-info" }, b7 = { class: "item-name" }, $7 = {
  key: 0,
  class: "item-subtitle"
}, C7 = {
  key: 0,
  class: "installing-badge"
}, x7 = ["title"], S7 = {
  key: 2,
  class: "installed-badge"
}, I7 = {
  key: 3,
  class: "queued-badge"
}, E7 = {
  key: 4,
  class: "action-buttons"
}, T7 = {
  key: 1,
  class: "no-action"
}, M7 = /* @__PURE__ */ be({
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
        var _, C;
        return o.queuedItems.has(g.id) || ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) || ((C = o.failedItems) == null ? void 0 : C.has(g.id));
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
    return (g, _) => (n(), L(It, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => a("close"))
    }, {
      body: h(() => [
        s("div", y7, [
          s("span", w7, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), L(De, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (C) => a("bulk-action"))
          }, {
            default: h(() => [
              $(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", _7, [
          (n(!0), i(j, null, he(e.items, (C) => (n(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            s("div", k7, [
              s("span", b7, m(C.name), 1),
              C.subtitle ? (n(), i("span", $7, m(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (n(), i(j, { key: 0 }, [
              d(C) ? (n(), i("span", C7, "Installing...")) : f(C) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(C)
              }, "Failed ⚠", 8, x7)) : v(C) ? (n(), i("span", S7, "Installed")) : u(C) ? (n(), i("span", I7, "Queued")) : (n(), i("div", E7, [
                (n(!0), i(j, null, he(w(C), (x) => (n(), L(De, {
                  key: `${C.id}-${x.key}`,
                  size: "sm",
                  variant: x.variant || "secondary",
                  onClick: (S) => a("action", C, x.key)
                }, {
                  default: h(() => [
                    $(m(x.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", T7, m(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (C) => a("close"))
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
}), P7 = /* @__PURE__ */ xe(M7, [["__scopeId", "data-v-ec7e9202"]]), R7 = {
  key: 0,
  class: "loading-state"
}, L7 = {
  key: 1,
  class: "analysis-results"
}, D7 = {
  key: 0,
  class: "section"
}, N7 = { class: "section-header" }, O7 = { class: "section-title" }, U7 = { class: "item-list" }, A7 = { class: "package-info" }, z7 = { class: "package-name" }, F7 = { class: "node-count" }, V7 = {
  key: 1,
  class: "installing-badge"
}, B7 = {
  key: 2,
  class: "queued-badge"
}, W7 = ["title"], G7 = {
  key: 4,
  class: "installed-badge"
}, j7 = {
  key: 1,
  class: "section"
}, H7 = { class: "section-header" }, q7 = { class: "section-title" }, K7 = { class: "item-list" }, J7 = { class: "node-type" }, Q7 = {
  key: 0,
  class: "overflow-note"
}, Y7 = {
  key: 2,
  class: "section"
}, X7 = { class: "section-header" }, Z7 = { class: "section-title" }, eP = { class: "item-list" }, tP = { class: "node-type" }, sP = { class: "not-found" }, oP = {
  key: 0,
  class: "overflow-note"
}, nP = {
  key: 3,
  class: "section"
}, aP = { class: "section-header" }, lP = { class: "section-title" }, iP = { class: "item-list" }, rP = { class: "package-info community-info" }, cP = { class: "community-title-row" }, uP = { class: "package-name" }, dP = { class: "node-count" }, mP = { class: "community-mapping-note" }, fP = { key: 0 }, vP = {
  key: 0,
  class: "community-actions"
}, pP = {
  key: 1,
  class: "installing-badge"
}, gP = {
  key: 2,
  class: "queued-badge"
}, hP = ["title"], yP = {
  key: 4,
  class: "installed-badge"
}, wP = ["title"], _P = {
  key: 1,
  class: "no-url"
}, kP = {
  key: 4,
  class: "section"
}, bP = { class: "section-header" }, $P = { class: "section-title" }, CP = { class: "item-list" }, xP = { class: "model-info" }, SP = { class: "model-name" }, IP = {
  key: 1,
  class: "queued-badge"
}, EP = {
  key: 1,
  class: "no-url"
}, TP = { class: "dont-show-again" }, MP = 3e4, PP = /* @__PURE__ */ be({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Map()), { addToQueue: x } = Lo(), { queueNodeInstall: S } = ct(), P = R(() => {
      var O;
      return ((O = a.value) == null ? void 0 : O.package_aliases) || {};
    });
    function T(O) {
      if (!O) return null;
      const se = P.value;
      let ge = O;
      const Je = /* @__PURE__ */ new Set();
      for (; se[ge] && !Je.has(ge); )
        Je.add(ge), ge = se[ge];
      return ge;
    }
    function E(O, se) {
      return O instanceof Error && O.message ? O.message : typeof O == "string" && O.trim().length > 0 ? O : se;
    }
    function N(O) {
      for (const [se, ge] of _.value.entries())
        ge === O && _.value.delete(se);
    }
    function A(O) {
      if (!C.value.has(O)) return;
      const se = C.value.get(O);
      clearTimeout(se), C.value.delete(O);
    }
    function H() {
      for (const O of C.value.values())
        clearTimeout(O);
      C.value = /* @__PURE__ */ new Map();
    }
    function M(O) {
      A(O);
      const se = setTimeout(() => {
        if (C.value.delete(O), !c.value.has(O)) return;
        N(O), c.value.delete(O), f.value === O && (f.value = null), u.value.set(O, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", O);
      }, MP);
      C.value.set(O, se);
    }
    function V(O) {
      const se = `Cannot install "${O.title}" - package_id is missing`;
      u.value.set(O.item_id, se), o.value = se, console.warn("[ComfyGit] Community install requested without package_id:", O);
    }
    const ae = R(() => ce.value.length > 0 || ke.value.length > 0 || Z.value.length > 0 || B.value.length > 0 || U.value.length > 0), ce = R(() => {
      var ge, Je;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const O = /* @__PURE__ */ new Map(), se = (a.value.nodes.resolved || []).filter((D) => {
        var z;
        return !D.is_installed && ((z = D.package) == null ? void 0 : z.package_id);
      });
      for (const D of se) {
        const z = T(D.package.package_id);
        if (!z) continue;
        O.has(z) || O.set(z, {
          package_id: z,
          title: D.package.title || z,
          node_count: 0,
          node_types: [],
          repository: D.package.repository || null,
          latest_version: D.package.latest_version || null
        });
        const Y = O.get(z);
        Y.node_count++, Y.node_types.push(((Je = D.reference) == null ? void 0 : Je.node_type) || D.node_type);
      }
      return Array.from(O.values());
    }), ue = R(() => ce.value.reduce((O, se) => O + se.node_count, 0)), ke = R(() => {
      var O;
      return (O = a.value) != null && O.nodes ? (a.value.nodes.unresolved || []).map((se) => {
        var ge;
        return {
          node_type: ((ge = se.reference) == null ? void 0 : ge.node_type) || se.node_type
        };
      }) : [];
    }), Z = R(() => {
      var se;
      if (!((se = a.value) != null && se.nodes)) return [];
      const O = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ge) => {
        var D;
        const Je = ((D = ge.reference) == null ? void 0 : D.node_type) || ge.node_type;
        return {
          node_type: Je,
          guidance: ge.guidance || O[Je] || null
        };
      });
    }), B = R(() => {
      var ge, Je, D, z, Y, Oe, Ue, Pe;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const O = a.value.node_guidance || {}, se = /* @__PURE__ */ new Map();
      for (const Ge of a.value.nodes.uninstallable || []) {
        const nt = ((Je = Ge.reference) == null ? void 0 : Je.node_type) || Ge.node_type, kt = T(((D = Ge.package) == null ? void 0 : D.package_id) || null), Et = kt || `node:${nt}`;
        se.has(Et) || se.set(Et, {
          item_id: Et,
          node_type: nt,
          title: ((z = Ge.package) == null ? void 0 : z.title) || kt || nt,
          node_count: 0,
          package_id: kt,
          repository: ((Y = Ge.package) == null ? void 0 : Y.repository) || null,
          latest_version: ((Oe = Ge.package) == null ? void 0 : Oe.latest_version) || null,
          guidance: Ge.guidance || O[nt] || null
        });
        const re = se.get(Et);
        re.node_count++, re.guidance || (re.guidance = Ge.guidance || O[nt] || null), !re.repository && ((Ue = Ge.package) != null && Ue.repository) && (re.repository = Ge.package.repository), !re.latest_version && ((Pe = Ge.package) != null && Pe.latest_version) && (re.latest_version = Ge.package.latest_version);
      }
      return Array.from(se.values());
    }), K = R(() => B.value.filter((O) => !!O.package_id)), Re = R(() => B.value.length >= 5 ? B.value.slice(0, 4) : B.value), X = R(() => K.value.length > 0 && K.value.every((O) => {
      const se = O.package_id;
      return r.value.has(se) || c.value.has(se) || u.value.has(se);
    }));
    function ye(O) {
      const se = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return O.repository && se.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), se;
    }
    const U = R(() => {
      var D;
      if (!((D = a.value) != null && D.models)) return [];
      const O = (a.value.models.resolved || []).filter(
        (z) => z.match_type === "download_intent" || z.match_type === "property_download_intent" || z.match_type === "not_found"
      ).map((z) => {
        var Y, Oe, Ue, Pe;
        return {
          filename: ((Oe = (Y = z.reference) == null ? void 0 : Y.widget_value) == null ? void 0 : Oe.split("/").pop()) || ((Ue = z.reference) == null ? void 0 : Ue.widget_value) || z.widget_value,
          widget_value: ((Pe = z.reference) == null ? void 0 : Pe.widget_value) || z.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: z.download_source || null,
          targetPath: z.target_path || null,
          canDownload: !!(z.download_source && z.target_path)
        };
      }), se = (a.value.models.unresolved || []).map((z) => {
        var Y, Oe, Ue, Pe;
        return {
          filename: ((Oe = (Y = z.reference) == null ? void 0 : Y.widget_value) == null ? void 0 : Oe.split("/").pop()) || ((Ue = z.reference) == null ? void 0 : Ue.widget_value) || z.widget_value,
          widget_value: ((Pe = z.reference) == null ? void 0 : Pe.widget_value) || z.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ge = /* @__PURE__ */ new Map(), Je = [];
      for (const z of O) {
        if (!z.url) {
          Je.push(z);
          continue;
        }
        const Y = `${z.filename}::${z.url}`, Oe = ge.get(Y);
        if (!Oe) {
          ge.set(Y, z);
          continue;
        }
        !Oe.targetPath && z.targetPath && (Oe.targetPath = z.targetPath), !Oe.canDownload && z.canDownload && (Oe.canDownload = z.canDownload);
      }
      return [...ge.values(), ...Je, ...se];
    }), fe = R(() => U.value.filter((O) => O.canDownload)), Le = R(() => ce.value.length >= 5 ? ce.value.slice(0, 4) : ce.value), ve = R(() => U.value.length >= 5 ? U.value.slice(0, 4) : U.value), ee = R(() => ce.value.length > 0 && ce.value.every(
      (O) => r.value.has(O.package_id) || c.value.has(O.package_id) || u.value.has(O.package_id)
    )), Q = R(() => fe.value.length > 0 && fe.value.every((O) => d.value.has(O.url))), we = R(() => ce.value.length > 0 || K.value.length > 0 || fe.value.length > 0), te = R(() => {
      const O = (ce.value.length === 0 || ee.value) && (K.value.length === 0 || X.value), se = fe.value.length === 0 || Q.value;
      return O && se;
    }), oe = R(() => w.value === "models" ? `Missing Models (${U.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ue.value})` : w.value === "community" ? `Community-Mapped Packages (${B.value.length})` : ""), Me = R(() => w.value === "models" ? U.value.map((O) => ({
      id: O.url || O.widget_value,
      name: O.filename,
      canAction: O.canDownload,
      actionDisabledReason: O.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? ce.value.map((O) => ({
      id: O.package_id,
      name: O.title,
      subtitle: `(${O.node_count} ${O.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? B.value.map((O) => ({
      id: O.package_id || O.item_id,
      name: O.title,
      subtitle: `(${O.node_count} ${O.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!O.package_id,
      actionDisabledReason: O.package_id ? void 0 : "Manual setup required",
      actions: O.package_id ? ye(O) : []
    })) : []);
    function me(O, se) {
      if (w.value === "models") {
        const ge = U.value.find((Je) => Je.url === O.id || Je.widget_value === O.id);
        ge && Ie(ge);
      } else if (w.value === "packages") {
        const ge = ce.value.find((Je) => Je.package_id === O.id);
        ge && I(ge);
      } else if (w.value === "community") {
        const ge = B.value.find((D) => (D.package_id || D.item_id) === O.id);
        if (!ge) return;
        if (!ge.package_id) {
          V({ item_id: ge.item_id, title: ge.title });
          return;
        }
        F(ge, se === "install_git" ? "git" : "registry");
      }
    }
    function le() {
      w.value === "models" ? Ae() : w.value === "packages" ? $e() : w.value === "community" && Se();
    }
    async function I(O) {
      return ie(O.package_id, O.latest_version, "registry");
    }
    async function F(O, se) {
      return O.package_id ? ie(O.package_id, O.latest_version, se, O.repository) : (V({ item_id: O.item_id, title: O.title }), !1);
    }
    async function ie(O, se, ge, Je) {
      const D = T(O) || O, z = se || "latest";
      if (r.value.has(D) || c.value.has(D) || u.value.has(D))
        return !0;
      ot(), f.value = D;
      let Y = null;
      try {
        const Oe = {
          id: D,
          version: z,
          selected_version: z,
          mode: "remote",
          channel: "default"
        };
        ge === "git" && Je && (Oe.repository = Je, Oe.install_source = "git");
        const { ui_id: Ue } = await S(Oe, {
          beforeQueueStart: (Pe) => {
            Y = Pe, _.value.set(Pe, D), c.value.add(D), M(D), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Pe,
              packageId: D,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return Y || (Y = Ue, _.value.set(Ue, D), c.value.add(D), M(D), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Ue,
          packageId: D,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (Oe) {
        const Ue = E(Oe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Oe), Y && _.value.delete(Y), N(D), A(D), c.value.delete(D), u.value.set(D, Ue), !1;
      } finally {
        f.value = null;
      }
    }
    function Ie(O) {
      !O.url || !O.targetPath || d.value.has(O.url) || (x([{
        workflow: "unsaved",
        filename: O.filename,
        url: O.url,
        targetPath: O.targetPath
      }]), d.value.add(O.url));
    }
    async function $e() {
      const O = { attempted: 0, failed: 0 };
      for (const se of ce.value)
        !r.value.has(se.package_id) && !c.value.has(se.package_id) && !u.value.has(se.package_id) && (O.attempted++, await I(se) || O.failed++);
      return O;
    }
    async function Se() {
      const O = { attempted: 0, failed: 0 };
      for (const se of K.value) {
        const ge = se.package_id;
        !r.value.has(ge) && !c.value.has(ge) && !u.value.has(ge) && (O.attempted++, await F(se, "registry") || O.failed++);
      }
      return O;
    }
    function Ae() {
      const O = fe.value.filter(
        (se) => !d.value.has(se.url)
      );
      if (O.length === 0) return 0;
      x(O.map((se) => ({
        workflow: "unsaved",
        filename: se.filename,
        url: se.url,
        targetPath: se.targetPath
      })));
      for (const se of O)
        d.value.add(se.url);
      return O.length;
    }
    async function Fe() {
      const O = await $e(), se = await Se();
      Ae();
      const ge = O.attempted + se.attempted, Je = O.failed + se.failed;
      if (ge > 0 && Je > 0) {
        const D = ge - Je;
        o.value = `${D} of ${ge} installs queued, ${Je} failed`;
      }
    }
    function Ne() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ee(O) {
      var D, z;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const se = O == null ? void 0 : O.id;
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
          const nt = (z = Ge.activeState) == null ? void 0 : z.id;
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
      t.value = !0, o.value = null, H(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const Y = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: O, name: "unsaved" })
        });
        if (!Y.ok) {
          const Oe = await Y.json();
          throw new Error(Oe.error || "Failed to analyze workflow");
        }
        a.value = await Y.json(), ae.value && (l.value = !0, se && g.value.add(se));
      } catch (Y) {
        console.error("[ComfyGit] Failed to analyze workflow:", Y);
      } finally {
        t.value = !1;
      }
    }
    function Ke() {
      H(), l.value = !1, a.value = null;
    }
    function Be(O) {
      const { workflow: se } = O.detail;
      se && Ee(se);
    }
    function pe(O) {
      var Je;
      const se = (Je = O.detail) == null ? void 0 : Je.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: se,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: O.detail
      });
      const ge = _.value.get(se);
      ge ? (A(ge), f.value = ge, console.log("[ComfyGit] Installing package:", ge)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", se);
    }
    function J(O) {
      var D, z, Y, Oe, Ue, Pe, Ge;
      const se = (D = O.detail) == null ? void 0 : D.ui_id, ge = (Y = (z = O.detail) == null ? void 0 : z.status) == null ? void 0 : Y.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: se,
        status: ge,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: O.detail
      });
      const Je = _.value.get(se);
      if (Je) {
        if (A(Je), _.value.delete(se), c.value.delete(Je), f.value === Je && (f.value = null), ge === "success")
          r.value.add(Je), p.value++, console.log("[ComfyGit] Package installed successfully:", Je);
        else {
          const nt = ((Pe = (Ue = (Oe = O.detail) == null ? void 0 : Oe.status) == null ? void 0 : Ue.messages) == null ? void 0 : Pe[0]) || ((Ge = O.detail) == null ? void 0 : Ge.result) || "Unknown error";
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
      var O;
      return He || (He = (O = window.app) == null ? void 0 : O.api), He;
    }
    let Ye = !1;
    function ot() {
      if (Ye) return !0;
      const O = Ce();
      return O ? (O.addEventListener("cm-task-started", pe), O.addEventListener("cm-task-completed", J), O.addEventListener("comfygit:workflow-changed", ze), Ye = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function ze(O) {
      const { change_type: se } = O.detail;
      (se === "created" || se === "modified") && l.value && (H(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", Be);
    }), Po(() => {
      if (H(), window.removeEventListener("comfygit:workflow-loaded", Be), Ye) {
        const O = Ce();
        O && (O.removeEventListener("cm-task-started", pe), O.removeEventListener("cm-task-completed", J), O.removeEventListener("comfygit:workflow-changed", ze)), Ye = !1;
      }
    }), (O, se) => (n(), i(j, null, [
      l.value ? (n(), L(It, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Ke
      }, {
        body: h(() => [
          t.value ? (n(), i("div", R7, [...se[5] || (se[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ae.value ? (n(), i("div", L7, [
            ce.value.length > 0 ? (n(), i("div", D7, [
              s("div", N7, [
                s("span", O7, "Missing Custom Nodes (" + m(ue.value) + ")", 1),
                ce.value.length > 1 ? (n(), L(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ee.value,
                  onClick: $e
                }, {
                  default: h(() => [
                    $(m(ee.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", U7, [
                (n(!0), i(j, null, he(Le.value, (ge) => (n(), i("div", {
                  key: ge.package_id,
                  class: "package-item"
                }, [
                  s("div", A7, [
                    s("span", z7, m(ge.title), 1),
                    s("span", F7, "(" + m(ge.node_count) + " " + m(ge.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ge.package_id) && !c.value.has(ge.package_id) && !u.value.has(ge.package_id) ? (n(), L(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === ge.package_id,
                    onClick: (Je) => I(ge)
                  }, {
                    default: h(() => [
                      $(m(f.value === ge.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === ge.package_id ? (n(), i("span", V7, "Installing...")) : c.value.has(ge.package_id) ? (n(), i("span", B7, "Queued")) : u.value.has(ge.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ge.package_id)
                  }, "Failed ⚠", 8, W7)) : (n(), i("span", G7, "Installed"))
                ]))), 128)),
                ce.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: se[0] || (se[0] = (ge) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + m(ce.value.length) + " packages...", 1),
                  se[6] || (se[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ke.value.length > 0 ? (n(), i("div", j7, [
              s("div", H7, [
                s("span", q7, "Unknown Nodes (" + m(ke.value.length) + ")", 1)
              ]),
              s("div", K7, [
                (n(!0), i(j, null, he(ke.value.slice(0, 5), (ge) => (n(), i("div", {
                  key: ge.node_type,
                  class: "item"
                }, [
                  s("code", J7, m(ge.node_type), 1),
                  se[7] || (se[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                ke.value.length > 5 ? (n(), i("div", Q7, " ...and " + m(ke.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            Z.value.length > 0 ? (n(), i("div", Y7, [
              s("div", X7, [
                s("span", Z7, "Requires Newer ComfyUI (" + m(Z.value.length) + ")", 1)
              ]),
              s("div", eP, [
                (n(!0), i(j, null, he(Z.value.slice(0, 5), (ge) => (n(), i("div", {
                  key: `vg-${ge.node_type}`,
                  class: "item"
                }, [
                  s("code", tP, m(ge.node_type), 1),
                  s("span", sP, m(ge.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                Z.value.length > 5 ? (n(), i("div", oP, " ...and " + m(Z.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            B.value.length > 0 ? (n(), i("div", nP, [
              s("div", aP, [
                s("span", lP, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                K.value.length > 1 ? (n(), L(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: X.value,
                  onClick: Se
                }, {
                  default: h(() => [
                    $(m(X.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", iP, [
                (n(!0), i(j, null, he(Re.value, (ge) => (n(), i("div", {
                  key: `community-${ge.item_id}`,
                  class: "package-item"
                }, [
                  s("div", rP, [
                    s("div", cP, [
                      s("span", uP, m(ge.title), 1),
                      s("span", dP, "(" + m(ge.node_count) + " " + m(ge.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", mP, [
                      se[8] || (se[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ge.guidance ? (n(), i("span", fP, ". " + m(ge.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  ge.package_id ? (n(), i(j, { key: 0 }, [
                    !r.value.has(ge.package_id) && !c.value.has(ge.package_id) && !u.value.has(ge.package_id) ? (n(), i("div", vP, [
                      b(De, {
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === ge.package_id,
                        onClick: (Je) => F(ge, "registry")
                      }, {
                        default: h(() => [
                          $(m(f.value === ge.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ge.repository ? (n(), L(De, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: f.value === ge.package_id,
                        onClick: (Je) => F(ge, "git")
                      }, {
                        default: h(() => [...se[9] || (se[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : f.value === ge.package_id ? (n(), i("span", pP, "Installing...")) : c.value.has(ge.package_id) ? (n(), i("span", gP, "Queued")) : u.value.has(ge.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ge.package_id)
                    }, "Failed ⚠", 8, hP)) : (n(), i("span", yP, "Installed"))
                  ], 64)) : (n(), i(j, { key: 1 }, [
                    u.value.has(ge.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ge.item_id)
                    }, "Failed ⚠", 8, wP)) : (n(), i("span", _P, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                B.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: se[1] || (se[1] = (ge) => w.value = "community")
                }, [
                  s("span", null, "Show all " + m(B.value.length) + " packages...", 1),
                  se[10] || (se[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            U.value.length > 0 ? (n(), i("div", kP, [
              s("div", bP, [
                s("span", $P, "Missing Models (" + m(U.value.length) + ")", 1),
                fe.value.length > 1 ? (n(), L(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Q.value,
                  onClick: Ae
                }, {
                  default: h(() => [
                    $(m(Q.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", CP, [
                (n(!0), i(j, null, he(ve.value, (ge) => (n(), i("div", {
                  key: ge.widget_value,
                  class: "model-item"
                }, [
                  s("div", xP, [
                    s("span", SP, m(ge.filename), 1)
                  ]),
                  ge.canDownload ? (n(), i(j, { key: 0 }, [
                    d.value.has(ge.url) ? (n(), i("span", IP, "Queued")) : (n(), L(De, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Ie(ge)
                    }, {
                      default: h(() => [...se[11] || (se[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", EP, "Manual download required"))
                ]))), 128)),
                U.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: se[2] || (se[2] = (ge) => w.value = "models")
                }, [
                  s("span", null, "Show all " + m(U.value.length) + " models...", 1),
                  se[12] || (se[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", TP, [
              b(Jn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  se[3] || (se[3] = (ge) => v.value = ge),
                  Ne
                ]
              }, {
                default: h(() => [...se[13] || (se[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          b(De, {
            variant: "secondary",
            onClick: Ke
          }, {
            default: h(() => [...se[14] || (se[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          we.value ? (n(), L(De, {
            key: 0,
            variant: "primary",
            disabled: te.value,
            onClick: Fe
          }, {
            default: h(() => [
              $(m(te.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (n(), L(P7, {
        key: 1,
        title: oe.value,
        items: Me.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: se[4] || (se[4] = (ge) => w.value = null),
        onAction: me,
        onBulkAction: le
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), RP = /* @__PURE__ */ xe(PP, [["__scopeId", "data-v-dfb55c3f"]]), LP = {
  key: 0,
  class: "io-mapping-root"
}, DP = { class: "io-mapping-visual-layer" }, NP = { class: "io-mapping-header" }, OP = { class: "io-mapping-header-main" }, UP = { class: "io-mapping-subtitle" }, AP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, zP = { class: "io-mapping-header-actions" }, FP = { class: "io-mapping-sidebar" }, VP = { class: "io-mapping-sidebar-scroll" }, BP = {
  key: 0,
  class: "io-state-block"
}, WP = {
  key: 1,
  class: "io-state-block io-state-error"
}, GP = { class: "contract-meta-section" }, jP = { class: "contract-meta-toggle-icon" }, HP = {
  key: 0,
  class: "contract-meta-body"
}, qP = { class: "contract-summary" }, KP = { class: "summary-pill" }, JP = { class: "summary-pill" }, QP = { class: "summary-pill" }, YP = { class: "mapping-section" }, XP = { class: "section-header" }, ZP = {
  key: 0,
  class: "empty-message"
}, eR = ["onClick"], tR = { class: "item-card-title" }, sR = { class: "item-card-meta" }, oR = { class: "item-card-summary" }, nR = { key: 0 }, aR = { class: "mapping-section" }, lR = { class: "section-header" }, iR = {
  key: 0,
  class: "empty-message"
}, rR = ["onClick"], cR = { class: "item-card-title" }, uR = { class: "item-card-meta" }, dR = { class: "item-card-summary" }, mR = { class: "io-mapping-footer" }, fR = { class: "io-mapping-footer-left" }, vR = { class: "io-mapping-footer-right" }, pR = /* @__PURE__ */ be({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: a, deleteWorkflowContract: l } = ct(), r = k(!1), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), x = k(null), S = k(0), P = k(null), T = k(null);
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
    ], A = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], H = R(() => {
      var D;
      return ((D = p.value) == null ? void 0 : D.contract_summary.has_contract) === !0;
    }), M = R(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const D = w.value.default_contract || "default";
      return w.value.contracts[D] || (w.value.contracts[D] = { inputs: [], outputs: [] }), w.value.contracts[D];
    }), V = R(() => {
      var z;
      const D = ((z = p.value) == null ? void 0 : z.contract_summary.status) ?? "none";
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
    function ce(D) {
      return D === "integer" || D === "number";
    }
    function ue(D) {
      return D === "enum";
    }
    function ke(D) {
      return D == null ? "" : String(D);
    }
    function Z(D) {
      const z = D.trim();
      if (!z) return;
      const Y = Number(z);
      return Number.isFinite(Y) ? Y : void 0;
    }
    function B(D) {
      return (D || []).join(`
`);
    }
    function K(D) {
      return D.split(/[\n,]/).map((z) => z.trim()).filter(Boolean);
    }
    function Re(D) {
      return typeof D == "string" ? D.length > 24 ? `${D.slice(0, 24)}...` : D : String(D);
    }
    function X(D) {
      return D == null ? "" : String(D);
    }
    function ye(D) {
      var Y;
      const z = (Y = D == null ? void 0 : D.options) == null ? void 0 : Y.values;
      return Array.isArray(z) ? z.map((Oe) => String(Oe)).filter(Boolean) : [];
    }
    function U(D, z) {
      var Ue;
      const Y = (Ue = D == null ? void 0 : D.options) == null ? void 0 : Ue[z];
      if (Y == null || Y === "") return;
      const Oe = Number(Y);
      return Number.isFinite(Oe) ? Oe : void 0;
    }
    function fe(D, z) {
      return D.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || z;
    }
    function Le(D) {
      if (!w.value) return;
      const z = D.trim() || "default";
      w.value.default_contract = z, w.value.contracts[z] || (w.value.contracts[z] = { inputs: [], outputs: [] });
    }
    function ve(D) {
      const z = String(D ?? "").toLowerCase();
      return z.includes("image") ? "image" : z.includes("video") ? "video" : z.includes("audio") ? "audio" : z.includes("int") ? "integer" : z.includes("float") || z.includes("double") || z.includes("number") ? "number" : z.includes("bool") ? "boolean" : z.includes("combo") || z.includes("enum") ? "enum" : z.includes("string") || z.includes("text") ? "string" : "file";
    }
    function ee(D) {
      M.value.inputs.splice(D, 1), C.value === D && (C.value = null);
    }
    function Q(D) {
      M.value.outputs.splice(D, 1), x.value === D && (x.value = null);
    }
    function we(D) {
      C.value = C.value === D ? null : D, C.value != null && (x.value = null);
    }
    function te(D) {
      x.value = x.value === D ? null : D, x.value != null && (C.value = null);
    }
    function oe(D) {
      const z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(D)) : String(D);
      return document.querySelector(`[data-node-id="${z}"]`);
    }
    function Me(D) {
      return D instanceof Element ? !!D.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function me(D) {
      var Oe, Ue, Pe, Ge, nt, kt;
      if (!(D instanceof Element)) return null;
      const z = D.closest("[data-node-id]"), Y = z == null ? void 0 : z.getAttribute("data-node-id");
      return Y ? ((Pe = (Ue = (Oe = t.comfyApp) == null ? void 0 : Oe.graph) == null ? void 0 : Ue.getNodeById) == null ? void 0 : Pe.call(Ue, Y)) ?? ((kt = (nt = (Ge = t.comfyApp) == null ? void 0 : Ge.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : kt.call(nt, Y)) ?? null : null;
    }
    function le(D, z) {
      if (z == null || z < 0) return null;
      const Y = oe(D);
      return Y ? Y.querySelectorAll('[data-testid="node-widget"]')[z] ?? null : null;
    }
    function I(D) {
      return !D || D.width <= 0 || D.height <= 0 ? null : {
        left: `${D.left}px`,
        top: `${D.top}px`,
        width: `${D.width}px`,
        height: `${D.height}px`
      };
    }
    function F(D) {
      const z = oe((D == null ? void 0 : D.id) ?? "");
      if (z) return z.getBoundingClientRect();
      const Y = t.comfyApp;
      if (!D || typeof (Y == null ? void 0 : Y.canvasPosToClientPos) != "function") return null;
      const Ue = Y.canvasPosToClientPos([D.pos[0], D.pos[1] - 32]), Pe = Y.canvasPosToClientPos([D.pos[0] + D.size[0], D.pos[1] + D.size[1]]);
      return !Ue || !Pe ? null : new DOMRect(Ue[0], Ue[1], Pe[0] - Ue[0], Pe[1] - Ue[1]);
    }
    function ie(D) {
      var nt, kt, Et, re, W, de, We;
      const z = le(D.node_id, D.widget_idx);
      if (z) return z.getBoundingClientRect();
      const Y = ((Et = (kt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : kt.getNodeById) == null ? void 0 : Et.call(kt, String(D.node_id))) ?? ((de = (W = (re = t.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : W.getNodeById) == null ? void 0 : de.call(W, String(D.node_id)));
      if (!Y || typeof D.widget_idx != "number" || !Array.isArray(Y.widgets)) return null;
      const Oe = Y.widgets[D.widget_idx];
      if (!Oe || typeof ((We = t.comfyApp) == null ? void 0 : We.canvasPosToClientPos) != "function") return F(Y);
      const Ue = 10, Pe = t.comfyApp.canvasPosToClientPos([Y.pos[0] + Ue, Y.pos[1] + (Oe.y ?? 0)]), Ge = t.comfyApp.canvasPosToClientPos([Y.pos[0] + Y.size[0] - Ue, Y.pos[1] + (Oe.y ?? 0) + (Oe.computedHeight ?? 24)]);
      return !Pe || !Ge ? F(Y) : new DOMRect(Pe[0], Pe[1], Ge[0] - Pe[0], Ge[1] - Pe[1]);
    }
    function Ie(D) {
      var Y, Oe, Ue, Pe, Ge, nt;
      const z = ((Ue = (Oe = (Y = t.comfyApp) == null ? void 0 : Y.graph) == null ? void 0 : Oe.getNodeById) == null ? void 0 : Ue.call(Oe, String(D.node_id))) ?? ((nt = (Ge = (Pe = t.comfyApp) == null ? void 0 : Pe.rootGraph) == null ? void 0 : Ge.getNodeById) == null ? void 0 : nt.call(Ge, String(D.node_id)));
      return F(z);
    }
    const $e = R(() => (S.value, M.value.inputs.map((D, z) => {
      const Y = I(ie(D));
      return Y ? {
        key: `input-${z}-${D.node_id}-${D.widget_idx ?? "na"}`,
        style: Y,
        active: C.value === z
      } : null;
    }).filter((D) => !!D))), Se = R(() => (S.value, M.value.outputs.map((D, z) => {
      const Y = I(Ie(D));
      return Y ? {
        key: `output-${z}-${D.node_id}-${D.selector ?? "primary"}`,
        style: Y,
        active: x.value === z
      } : null;
    }).filter((D) => !!D)));
    function Ae(D) {
      var Et, re, W, de, We, dt, Ct, it, xt, ts;
      if (Me(D.target)) return null;
      const z = (Et = t.comfyApp) == null ? void 0 : Et.canvas;
      if (!z) return null;
      const Y = (re = z.convertEventToCanvasOffset) == null ? void 0 : re.call(z, D);
      if (!Y || Y.length < 2) return null;
      const [Oe, Ue] = Y, Pe = z.graph || ((W = t.comfyApp) == null ? void 0 : W.graph) || ((de = t.comfyApp) == null ? void 0 : de.rootGraph), Ge = ((We = Pe == null ? void 0 : Pe.getNodeOnPos) == null ? void 0 : We.call(Pe, Oe, Ue, z.visible_nodes)) || ((dt = z.getNodeOnPos) == null ? void 0 : dt.call(z, Oe, Ue)) || me(D.target);
      if (!Ge) return null;
      const nt = (Ct = Ge.getWidgetOnPos) == null ? void 0 : Ct.call(Ge, Oe, Ue, !0);
      if (nt)
        return { kind: "input", node: Ge, widget: nt, canvasX: Oe, canvasY: Ue };
      const kt = ((it = Ge.getOutputOnPos) == null ? void 0 : it.call(Ge, [Oe, Ue])) || ((ts = (xt = Ge.constructor) == null ? void 0 : xt.nodeData) != null && ts.output_node ? { name: Ge.title || Ge.type || "output", type: "image" } : null);
      return kt ? { kind: "output", node: Ge, output: kt, canvasX: Oe, canvasY: Ue } : null;
    }
    function Fe(D, z) {
      var nt;
      const Y = Array.isArray(D.widgets) ? D.widgets.indexOf(z) : -1, Oe = M.value.inputs.findIndex(
        (kt) => String(kt.node_id) === String(D.id) && kt.widget_idx === Y
      );
      if (Oe >= 0) {
        C.value = Oe;
        return;
      }
      const Ue = typeof ((nt = z == null ? void 0 : z.options) == null ? void 0 : nt.property) == "string" ? z.options.property : void 0, Pe = (z == null ? void 0 : z.name) || Ue || "input", Ge = {
        name: fe(String(Pe), `input_${M.value.inputs.length + 1}`),
        display_name: String((z == null ? void 0 : z.name) || Ue || `Input ${M.value.inputs.length + 1}`),
        type: ve(z == null ? void 0 : z.type),
        node_id: String(D.id),
        widget_idx: Y >= 0 ? Y : void 0,
        field_key: Ue,
        required: !0,
        default: (z == null ? void 0 : z.value) ?? ""
      };
      ce(Ge.type) && (Ge.min = U(z, "min"), Ge.max = U(z, "max")), ue(Ge.type) && (Ge.enum_values = ye(z)), M.value.inputs.push(Ge), C.value = M.value.inputs.length - 1, x.value = null;
    }
    function Ne(D, z) {
      const Y = Array.isArray(D.outputs) ? D.outputs.indexOf(z) : -1, Oe = Y >= 0 ? `slot:${Y}` : "primary", Ue = M.value.outputs.findIndex(
        (Ge) => String(Ge.node_id) === String(D.id) && (Ge.selector || "primary") === Oe
      );
      if (Ue >= 0) {
        x.value = Ue;
        return;
      }
      const Pe = {
        name: fe(String((z == null ? void 0 : z.name) || "output"), `output_${M.value.outputs.length + 1}`),
        display_name: String((z == null ? void 0 : z.name) || `Output ${M.value.outputs.length + 1}`),
        type: ve(z == null ? void 0 : z.type),
        node_id: String(D.id),
        selector: Oe
      };
      M.value.outputs.push(Pe), x.value = M.value.outputs.length - 1, C.value = null;
    }
    function Ee(D) {
      var Oe, Ue, Pe;
      if (!r.value) {
        P.value = null, T.value = null;
        return;
      }
      const z = Ae(D);
      if (!z) {
        P.value = null, T.value = null;
        return;
      }
      if (z.kind === "input") {
        const Ge = Array.isArray(z.node.widgets) ? z.node.widgets.indexOf(z.widget) : -1, nt = I(((Oe = le(z.node.id, Ge)) == null ? void 0 : Oe.getBoundingClientRect()) ?? ie({
          node_id: String(z.node.id),
          widget_idx: Ge >= 0 ? Ge : void 0
        }));
        if (!nt) {
          P.value = null, T.value = null;
          return;
        }
        P.value = {
          kind: "input",
          label: `${((Ue = z.widget) == null ? void 0 : Ue.name) || "widget"} · Node ${z.node.id}`
        }, T.value = { kind: "input", style: nt };
        return;
      }
      const Y = I(F(z.node));
      if (!Y) {
        P.value = null, T.value = null;
        return;
      }
      P.value = {
        kind: "output",
        label: `${((Pe = z.output) == null ? void 0 : Pe.name) || z.node.title || z.node.type || "output"} · Node ${z.node.id}`
      }, T.value = { kind: "output", style: Y };
    }
    function Ke(D) {
      var Oe, Ue, Pe;
      if (!r.value || !w.value || D.button !== 0) return;
      const z = Ae(D);
      if (!z) return;
      const Y = (Oe = t.comfyApp) == null ? void 0 : Oe.canvas;
      if (Y) {
        if (z.kind === "input") {
          D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(Y.graph_mouse) && (Y.graph_mouse[0] = z.canvasX, Y.graph_mouse[1] = z.canvasY), (Ue = Y.selectNode) == null || Ue.call(Y, z.node, !1), Fe(z.node, z.widget);
          return;
        }
        D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(Y.graph_mouse) && (Y.graph_mouse[0] = z.canvasX, Y.graph_mouse[1] = z.canvasY), (Pe = Y.selectNode) == null || Pe.call(Y, z.node, !1), Ne(z.node, z.output);
      }
    }
    function Be() {
      document.addEventListener("pointerdown", Ke, !0), document.addEventListener("pointermove", Ee, !0);
    }
    function pe() {
      document.removeEventListener("pointerdown", Ke, !0), document.removeEventListener("pointermove", Ee, !0);
    }
    async function J() {
      if (c.value) {
        u.value = !0, f.value = null;
        try {
          p.value = await o(c.value), w.value = ae(p.value.execution_contract);
        } catch (D) {
          f.value = D instanceof Error ? D.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function He() {
      if (!(!w.value || !c.value)) {
        d.value = !0, f.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = ae(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), ze({ reopenPanel: !0 });
        } catch (D) {
          f.value = D instanceof Error ? D.message : "Failed to save workflow contract";
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
        _.value = !1, v.value = !0, f.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), ze({ reopenPanel: !0 });
        } catch (D) {
          f.value = D instanceof Error ? D.message : "Failed to delete workflow contract";
        } finally {
          v.value = !1;
        }
      }
    }
    function ot() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function ze(D) {
      r.value = !1, P.value = null, T.value = null, _.value = !1, D != null && D.reopenPanel && ot();
    }
    async function O(D) {
      var Oe, Ue;
      const Y = (Ue = (Oe = D.detail) == null ? void 0 : Oe.workflowName) == null ? void 0 : Ue.trim();
      Y && (c.value = Y, C.value = null, x.value = null, g.value = !1, r.value = !0, await J());
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
      if (E != null) return;
      const D = () => {
        if (S.value += 1, !r.value) {
          E = null;
          return;
        }
        E = window.requestAnimationFrame(D);
      };
      E = window.requestAnimationFrame(D);
    }
    function Je() {
      E != null && (window.cancelAnimationFrame(E), E = null);
    }
    return yt(r, (D) => {
      D ? (Be(), ge()) : (pe(), Je());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", O), window.addEventListener("keydown", se);
    }), aa(() => {
      pe(), Je(), window.removeEventListener("comfygit:open-io-mapping", O), window.removeEventListener("keydown", se);
    }), (D, z) => r.value ? (n(), i("div", LP, [
      s("div", DP, [
        (n(!0), i(j, null, he($e.value, (Y) => (n(), i("div", {
          key: Y.key,
          class: Ve(["io-highlight", "io-highlight-input", { active: Y.active }]),
          style: Rt(Y.style)
        }, null, 6))), 128)),
        (n(!0), i(j, null, he(Se.value, (Y) => (n(), i("div", {
          key: Y.key,
          class: Ve(["io-highlight", "io-highlight-output", { active: Y.active }]),
          style: Rt(Y.style)
        }, null, 6))), 128)),
        T.value ? (n(), i("div", {
          key: 0,
          class: Ve(["io-highlight", T.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Rt(T.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", NP, [
        s("div", OP, [
          z[8] || (z[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", UP, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          P.value ? (n(), i("div", AP, " Hovering " + m(P.value.kind) + ": " + m(P.value.label), 1)) : y("", !0)
        ]),
        s("div", zP, [
          b(De, {
            size: "sm",
            variant: "secondary",
            onClick: z[0] || (z[0] = (Y) => ze({ reopenPanel: !0 }))
          }, {
            default: h(() => [...z[9] || (z[9] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", FP, [
        s("div", VP, [
          u.value ? (n(), i("div", BP, " Loading workflow contract... ")) : f.value ? (n(), i("div", WP, m(f.value), 1)) : w.value ? (n(), i(j, { key: 2 }, [
            s("section", GP, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: z[1] || (z[1] = (Y) => g.value = !g.value)
              }, [
                z[10] || (z[10] = s("span", null, "Contract Details", -1)),
                s("span", jP, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (n(), i("div", HP, [
                b(Ot, { label: "Default Contract" }, {
                  default: h(() => [
                    b(bt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Le
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Ot, { label: "Display Name" }, {
                  default: h(() => [
                    b(bt, {
                      modelValue: M.value.display_name,
                      "onUpdate:modelValue": z[2] || (z[2] = (Y) => M.value.display_name = Y),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Ot, { label: "Description" }, {
                  default: h(() => [
                    b(xo, {
                      modelValue: M.value.description,
                      "onUpdate:modelValue": z[3] || (z[3] = (Y) => M.value.description = Y),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", qP, [
              s("span", KP, m(V.value), 1),
              s("span", JP, m(M.value.inputs.length) + " input" + m(M.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", QP, m(M.value.outputs.length) + " output" + m(M.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", YP, [
              s("div", XP, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...z[11] || (z[11] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              M.value.inputs.length ? y("", !0) : (n(), i("div", ZP, " No inputs configured. ")),
              (n(!0), i(j, null, he(M.value.inputs, (Y, Oe) => (n(), i("div", {
                key: `input-${Oe}`,
                class: Ve(["item-card", { selected: C.value === Oe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ue) => we(Oe)
                }, [
                  s("div", null, [
                    s("div", tR, m(Y.name || `Input ${Oe + 1}`), 1),
                    s("div", sR, [
                      $(" Node " + m(Y.node_id || "?"), 1),
                      Y.widget_idx !== void 0 ? (n(), i(j, { key: 0 }, [
                        $(" · Widget " + m(Y.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", oR, [
                      s("span", null, m(Y.type || "string"), 1),
                      s("span", null, m(Y.required ? "required" : "optional"), 1),
                      Y.default !== void 0 && Y.default !== "" ? (n(), i("span", nR, "default " + m(Re(Y.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Ue) => ee(Oe), ["stop"])
                  }, {
                    default: h(() => [...z[12] || (z[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, eR),
                C.value === Oe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: z[4] || (z[4] = vt(() => {
                  }, ["stop"]))
                }, [
                  b(Ot, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: Y.name,
                        "onUpdate:modelValue": (Ue) => Y.name = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: Y.display_name,
                        "onUpdate:modelValue": (Ue) => Y.display_name = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Type" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": Y.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => Y.type = Ue
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Required" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": Y.required ? "true" : "false",
                        options: A,
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => Y.required = Ue === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, {
                    class: Ve({ "item-grid-full": Y.type === "string" || Y.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      Y.type === "string" ? (n(), L(xo, {
                        key: 0,
                        "model-value": X(Y.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Ue) => Y.default = Ue
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(bt, {
                        key: 1,
                        modelValue: Y.default,
                        "onUpdate:modelValue": (Ue) => Y.default = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ce(Y.type) ? (n(), L(Ot, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": ke(Y.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => Y.min = Z(Ue)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ce(Y.type) ? (n(), L(Ot, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": ke(Y.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => Y.max = Z(Ue)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ue(Y.type) ? (n(), L(Ot, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(xo, {
                        "model-value": B(Y.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Ue) => Y.enum_values = K(Ue)
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
                  default: h(() => [...z[13] || (z[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              M.value.outputs.length ? y("", !0) : (n(), i("div", iR, " No outputs configured. ")),
              (n(!0), i(j, null, he(M.value.outputs, (Y, Oe) => (n(), i("div", {
                key: `output-${Oe}`,
                class: Ve(["item-card", { selected: x.value === Oe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ue) => te(Oe)
                }, [
                  s("div", null, [
                    s("div", cR, m(Y.name || `Output ${Oe + 1}`), 1),
                    s("div", uR, [
                      $(" Node " + m(Y.node_id || "?"), 1),
                      Y.selector ? (n(), i(j, { key: 0 }, [
                        $(" · " + m(Y.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", dR, [
                      s("span", null, m(Y.type || "file"), 1)
                    ])
                  ]),
                  b(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Ue) => Q(Oe), ["stop"])
                  }, {
                    default: h(() => [...z[14] || (z[14] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, rR),
                x.value === Oe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: z[5] || (z[5] = vt(() => {
                  }, ["stop"]))
                }, [
                  b(Ot, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: Y.name,
                        "onUpdate:modelValue": (Ue) => Y.name = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: Y.display_name,
                        "onUpdate:modelValue": (Ue) => Y.display_name = Ue,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Type" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": Y.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Ue) => Y.type = Ue
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
            b(De, {
              variant: "secondary",
              onClick: z[6] || (z[6] = (Y) => ze({ reopenPanel: !0 }))
            }, {
              default: h(() => [...z[15] || (z[15] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", vR, [
            b(De, {
              variant: "danger",
              disabled: !H.value,
              loading: v.value,
              onClick: Ce
            }, {
              default: h(() => [...z[16] || (z[16] = [
                $(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(De, {
              variant: "primary",
              loading: d.value,
              onClick: He
            }, {
              default: h(() => [...z[17] || (z[17] = [
                $(" Save ", -1)
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
        onConfirm: Ye,
        onCancel: z[7] || (z[7] = (Y) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), gR = /* @__PURE__ */ xe(pR, [["__scopeId", "data-v-13515b27"]]), hR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', yR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', wR = {
  comfy: hR,
  phosphor: yR
}, Rl = "comfy", Ic = "comfygit-theme";
let eo = null, Ec = Rl;
function _R() {
  try {
    const e = localStorage.getItem(Ic);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Rl;
}
function Tc(e = Rl) {
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
  const { ui_id: t, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ri = "ComfyGit.DevAutoReload", Mc = "ComfyGit.DevAutoReload.PanelOpen";
function CR() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ua() {
  const e = CR();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Ri, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Ri) === "true";
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
async function Li(e) {
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
async function SR(e) {
  if (!ua()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Li(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const a of t)
        try {
          const l = await Li(a.url);
          if (a.signature && l && l !== a.signature) {
            o = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const IR = "./comfygit-panel.css", ER = "./comfygit-panel.js", Rc = new URL(IR, import.meta.url).href, TR = new URL(ER, import.meta.url).href, Ll = document.createElement("link");
Ll.rel = "stylesheet";
Ll.href = Rc;
document.head.appendChild(Ll);
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
let ks = null, tn = null, Xt = null, sn = null, Fo = null, Di = null, Vo = null, Ni = null, Bo = null, Oi = null;
const So = k(null);
let mn = "no_workspace", Lc = !1;
async function On() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const t = await Zt.api.fetchApi("/v2/comfygit/status");
    t.ok && (So.value = await t.json());
  } catch {
  }
}
async function nl() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const t = await Zt.api.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        mn = o.state, Lc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function al() {
  var t;
  if (mn === "managed" || !Lc) return;
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
function Wo(e) {
  Ho(), Pc(!0), ks = document.createElement("div"), ks.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", ks.appendChild(t), ks.addEventListener("click", (a) => {
    a.target === ks && Ho();
  });
  const o = (a) => {
    a.key === "Escape" && (Ho(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), tn = gn({
    render: () => Ro($M, {
      initialView: e,
      onClose: Ho,
      onStatusUpdate: async (a) => {
        So.value = a, on(), await nl(), ll(), al();
      }
    })
  }), tn.mount(t), document.body.appendChild(ks);
}
function Ho() {
  Pc(!1), tn && (tn.unmount(), tn = null), ks && (ks.remove(), ks = null);
}
function Ui(e) {
  Go(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${t.bottom + 8}px`, Xt.style.right = `${window.innerWidth - t.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), sn = gn({
    render: () => Ro($c, {
      status: So.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), RR(l.success, l.message), On().then(on);
      }
    })
  }), sn.mount(Xt), document.body.appendChild(Xt);
}
function Go() {
  sn && (sn.unmount(), sn = null), Xt && (Xt.remove(), Xt = null);
}
function RR(e, t) {
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
function LR() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", Di = gn({
    render: () => Ro(h7)
  }), Di.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function DR() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-missing-resources-root", Ni = gn({
    render: () => Ro(RP)
  }), Ni.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function NR() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-io-mapping-root", Oi = gn({
    render: () => Ro(gR, {
      comfyApp: Zt
    })
  }), Oi.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let qt = null;
function on() {
  if (!qt) return;
  const e = qt.querySelector(".commit-indicator");
  e && (e.style.display = PR() ? "block" : "none");
}
function ll() {
  if (!qt) return;
  const e = mn !== "managed";
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
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Wo()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        qt && !qt.disabled && Ui(qt);
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
    if (mn === "managed")
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
    if (mn !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Wo(), qt = document.createElement("button"), qt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", qt.innerHTML = 'Commit <span class="commit-indicator"></span>', qt.title = "Quick Commit", qt.onclick = () => Ui(qt), e.appendChild(t), e.appendChild(qt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), LR(), DR(), NR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Wo(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Ho();
    }));
    const { loadPendingDownloads: o } = Lo();
    o(), await Promise.all([On(), nl()]), on(), ll(), al(), xR() && setTimeout(() => {
      ks || Wo();
    }, 100), SR([
      { name: "panel script", url: TR },
      { name: "panel stylesheet", url: Rc }
    ]), setTimeout(al, 100), setInterval(async () => {
      await Promise.all([On(), nl()]), on(), ll();
    }, 3e4);
    const a = Zt.api;
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const x = document.createElement("div");
        x.textContent = "Node installation failed", x.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild(x);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(S), g.appendChild(C);
        const P = document.createElement("button");
        P.textContent = "View Logs", P.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, P.onmouseover = () => P.style.background = "#c62828", P.onmouseout = () => P.style.background = "#e53935", P.onclick = () => {
          g.remove(), Wo("debug-env");
        }, g.appendChild(P);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => g.remove(), g.appendChild(T), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
        const x = document.createElement("div");
        x.textContent = "To apply changes, please restart ComfyUI", x.style.cssText = "font-weight: 500; color: #fff;", C.appendChild(x);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(S), g.appendChild(C);
        const P = document.createElement("button");
        P.textContent = "Apply Changes", P.style.cssText = `
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
        `, P.onmouseover = () => P.style.background = "rgba(255,255,255,0.1)", P.onmouseout = () => P.style.background = "transparent", P.onclick = async () => {
          P.disabled = !0, P.textContent = "Restarting...", P.style.opacity = "0.7", x.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", x.textContent = "Nodes Installed", x.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", P.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (N) {
                console.error("[ComfyGit] Failed to refresh nodes:", N), _.textContent = "✅", x.textContent = "Restart Complete", x.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", P.style.display = "none";
              }
            };
            a.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), x.textContent = "Restart Failed", x.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", P.textContent = "Try Again", P.disabled = !1, P.style.opacity = "1";
          }
        }, g.appendChild(P);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => g.remove(), g.appendChild(T), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await On(), on();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = $R(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
