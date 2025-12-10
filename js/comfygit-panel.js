import { app as go } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Fa(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const lt = {}, ho = [], ws = () => {
}, ui = () => !1, Gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ba = (e) => e.startsWith("onUpdate:"), yt = Object.assign, Va = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, ec = Object.prototype.hasOwnProperty, et = (e, t) => ec.call(e, t), Oe = Array.isArray, yo = (e) => nn(e) === "[object Map]", So = (e) => nn(e) === "[object Set]", fl = (e) => nn(e) === "[object Date]", Fe = (e) => typeof e == "function", mt = (e) => typeof e == "string", ns = (e) => typeof e == "symbol", nt = (e) => e !== null && typeof e == "object", di = (e) => (nt(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), mi = Object.prototype.toString, nn = (e) => mi.call(e), tc = (e) => nn(e).slice(8, -1), fi = (e) => nn(e) === "[object Object]", Wa = (e) => mt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Oo = /* @__PURE__ */ Fa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, sc = /-\w/g, jt = Hn(
  (e) => e.replace(sc, (t) => t.slice(1).toUpperCase())
), oc = /\B([A-Z])/g, Hs = Hn(
  (e) => e.replace(oc, "-$1").toLowerCase()
), Kn = Hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), aa = Hn(
  (e) => e ? `on${Kn(e)}` : ""
), Vs = (e, t) => !Object.is(e, t), xn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, vi = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, jn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, nc = (e) => {
  const t = mt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let vl;
const qn = () => vl || (vl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qt(e) {
  if (Oe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = mt(n) ? rc(n) : qt(n);
      if (l)
        for (const i in l)
          t[i] = l[i];
    }
    return t;
  } else if (mt(e) || nt(e))
    return e;
}
const ac = /;(?![^(]*\))/g, lc = /:([^]+)/, ic = /\/\*[^]*?\*\//g;
function rc(e) {
  const t = {};
  return e.replace(ic, "").split(ac).forEach((o) => {
    if (o) {
      const n = o.split(lc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ce(e) {
  let t = "";
  if (mt(e))
    t = e;
  else if (Oe(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ce(e[o]);
      n && (t += n + " ");
    }
  else if (nt(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const cc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", uc = /* @__PURE__ */ Fa(cc);
function pi(e) {
  return !!e || e === "";
}
function dc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = ao(e[n], t[n]);
  return o;
}
function ao(e, t) {
  if (e === t) return !0;
  let o = fl(e), n = fl(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = ns(e), n = ns(t), o || n)
    return e === t;
  if (o = Oe(e), n = Oe(t), o || n)
    return o && n ? dc(e, t) : !1;
  if (o = nt(e), n = nt(t), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(t).length;
    if (l !== i)
      return !1;
    for (const r in e) {
      const u = e.hasOwnProperty(r), d = t.hasOwnProperty(r);
      if (u && !d || !u && d || !ao(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ga(e, t) {
  return e.findIndex((o) => ao(o, t));
}
const gi = (e) => !!(e && e.__v_isRef === !0), m = (e) => mt(e) ? e : e == null ? "" : Oe(e) || nt(e) && (e.toString === mi || !Fe(e.toString)) ? gi(e) ? m(e.value) : JSON.stringify(e, hi, 2) : String(e), hi = (e, t) => gi(t) ? hi(e, t.value) : yo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], i) => (o[la(n, i) + " =>"] = l, o),
    {}
  )
} : So(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => la(o))
} : ns(t) ? la(t) : nt(t) && !Oe(t) && !fi(t) ? String(t) : t, la = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ns(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ut;
class mc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ut, !t && Ut && (this.index = (Ut.scopes || (Ut.scopes = [])).push(
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
      const o = Ut;
      try {
        return Ut = this, t();
      } finally {
        Ut = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ut, Ut = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ut = this.prevScope, this.prevScope = void 0);
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
function fc() {
  return Ut;
}
let rt;
const ia = /* @__PURE__ */ new WeakSet();
class yi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ut && Ut.active && Ut.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ia.has(this) && (ia.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _i(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, pl(this), bi(this);
    const t = rt, o = ts;
    rt = this, ts = !0;
    try {
      return this.fn();
    } finally {
      ki(this), rt = t, ts = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ja(t);
      this.deps = this.depsTail = void 0, pl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ia.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ca(this) && this.run();
  }
  get dirty() {
    return Ca(this);
  }
}
let wi = 0, Fo, Bo;
function _i(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bo, Bo = e;
    return;
  }
  e.next = Fo, Fo = e;
}
function Ha() {
  wi++;
}
function Ka() {
  if (--wi > 0)
    return;
  if (Bo) {
    let t = Bo;
    for (Bo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Fo; ) {
    let t = Fo;
    for (Fo = void 0; t; ) {
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
function bi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ki(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), ja(n), vc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Ca(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($i(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $i(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xo) || (e.globalVersion = Xo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ca(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = rt, n = ts;
  rt = e, ts = !0;
  try {
    bi(e);
    const l = e.fn(e._value);
    (t.version === 0 || Vs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    rt = o, ts = n, ki(e), e.flags &= -3;
  }
}
function ja(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      ja(i, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function vc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ts = !0;
const Ci = [];
function Ps() {
  Ci.push(ts), ts = !1;
}
function Ms() {
  const e = Ci.pop();
  ts = e === void 0 ? !0 : e;
}
function pl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = rt;
    rt = void 0;
    try {
      t();
    } finally {
      rt = o;
    }
  }
}
let Xo = 0;
class pc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!rt || !ts || rt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== rt)
      o = this.activeLink = new pc(rt, this), rt.deps ? (o.prevDep = rt.depsTail, rt.depsTail.nextDep = o, rt.depsTail = o) : rt.deps = rt.depsTail = o, xi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = rt.depsTail, o.nextDep = void 0, rt.depsTail.nextDep = o, rt.depsTail = o, rt.deps === o && (rt.deps = n);
    }
    return o;
  }
  trigger(t) {
    this.version++, Xo++, this.notify(t);
  }
  notify(t) {
    Ha();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Ka();
    }
  }
}
function xi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        xi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const xa = /* @__PURE__ */ new WeakMap(), oo = Symbol(
  ""
), Sa = Symbol(
  ""
), Jo = Symbol(
  ""
);
function xt(e, t, o) {
  if (ts && rt) {
    let n = xa.get(e);
    n || xa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new qa()), l.map = n, l.key = o), l.track();
  }
}
function Is(e, t, o, n, l, i) {
  const r = xa.get(e);
  if (!r) {
    Xo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Ha(), t === "clear")
    r.forEach(u);
  else {
    const d = Oe(e), f = d && Wa(o);
    if (d && o === "length") {
      const v = Number(n);
      r.forEach((p, w) => {
        (w === "length" || w === Jo || !ns(w) && w >= v) && u(p);
      });
    } else
      switch ((o !== void 0 || r.has(void 0)) && u(r.get(o)), f && u(r.get(Jo)), t) {
        case "add":
          d ? f && u(r.get("length")) : (u(r.get(oo)), yo(e) && u(r.get(Sa)));
          break;
        case "delete":
          d || (u(r.get(oo)), yo(e) && u(r.get(Sa)));
          break;
        case "set":
          yo(e) && u(r.get(oo));
          break;
      }
  }
  Ka();
}
function co(e) {
  const t = Xe(e);
  return t === e ? t : (xt(t, "iterate", Jo), Ht(e) ? t : t.map(as));
}
function Yn(e) {
  return xt(e = Xe(e), "iterate", Jo), e;
}
function Os(e, t) {
  return Rs(e) ? no(e) ? $o(as(t)) : $o(t) : as(t);
}
const gc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ra(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return co(this).concat(
      ...e.map((t) => Oe(t) ? co(t) : t)
    );
  },
  entries() {
    return ra(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
  },
  every(e, t) {
    return Cs(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Cs(
      this,
      "filter",
      e,
      t,
      (o) => o.map((n) => Os(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Cs(
      this,
      "find",
      e,
      t,
      (o) => Os(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Cs(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Cs(
      this,
      "findLast",
      e,
      t,
      (o) => Os(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Cs(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Cs(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ca(this, "includes", e);
  },
  indexOf(...e) {
    return ca(this, "indexOf", e);
  },
  join(e) {
    return co(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ca(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Cs(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ro(this, "pop");
  },
  push(...e) {
    return Ro(this, "push", e);
  },
  reduce(e, ...t) {
    return gl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return gl(this, "reduceRight", e, t);
  },
  shift() {
    return Ro(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Cs(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ro(this, "splice", e);
  },
  toReversed() {
    return co(this).toReversed();
  },
  toSorted(e) {
    return co(this).toSorted(e);
  },
  toSpliced(...e) {
    return co(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ro(this, "unshift", e);
  },
  values() {
    return ra(this, "values", (e) => Os(this, e));
  }
};
function ra(e, t, o) {
  const n = Yn(e), l = n[t]();
  return n !== e && !Ht(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const hc = Array.prototype;
function Cs(e, t, o, n, l, i) {
  const r = Yn(e), u = r !== e && !Ht(e), d = r[t];
  if (d !== hc[t]) {
    const p = d.apply(e, i);
    return u ? as(p) : p;
  }
  let f = o;
  r !== e && (u ? f = function(p, w) {
    return o.call(this, Os(e, p), w, e);
  } : o.length > 2 && (f = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const v = d.call(r, f, n);
  return u && l ? l(v) : v;
}
function gl(e, t, o, n) {
  const l = Yn(e);
  let i = o;
  return l !== e && (Ht(e) ? o.length > 3 && (i = function(r, u, d) {
    return o.call(this, r, u, d, e);
  }) : i = function(r, u, d) {
    return o.call(this, r, Os(e, u), d, e);
  }), l[t](i, ...n);
}
function ca(e, t, o) {
  const n = Xe(e);
  xt(n, "iterate", Jo);
  const l = n[t](...o);
  return (l === -1 || l === !1) && Ja(o[0]) ? (o[0] = Xe(o[0]), n[t](...o)) : l;
}
function Ro(e, t, o = []) {
  Ps(), Ha();
  const n = Xe(e)[t].apply(e, o);
  return Ka(), Ms(), n;
}
const yc = /* @__PURE__ */ Fa("__proto__,__v_isRef,__isVue"), Si = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ns)
);
function wc(e) {
  ns(e) || (e = String(e));
  const t = Xe(this);
  return xt(t, "has", e), t.hasOwnProperty(e);
}
class Ii {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, n) {
    if (o === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, i = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return i;
    if (o === "__v_raw")
      return n === (l ? i ? Tc : Mi : i ? Pi : Ti).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = Oe(t);
    if (!l) {
      let d;
      if (r && (d = gc[o]))
        return d;
      if (o === "hasOwnProperty")
        return wc;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Et(t) ? t : n
    );
    if ((ns(o) ? Si.has(o) : yc(o)) || (l || xt(t, "get", o), i))
      return u;
    if (Et(u)) {
      const d = r && Wa(o) ? u : u.value;
      return l && nt(d) ? Rn(d) : d;
    }
    return nt(u) ? l ? Rn(u) : Ks(u) : u;
  }
}
class Ei extends Ii {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let i = t[o];
    const r = Oe(t) && Wa(o);
    if (!this._isShallow) {
      const f = Rs(i);
      if (!Ht(n) && !Rs(n) && (i = Xe(i), n = Xe(n)), !r && Et(i) && !Et(n))
        return f || (i.value = n), !0;
    }
    const u = r ? Number(o) < t.length : et(t, o), d = Reflect.set(
      t,
      o,
      n,
      Et(t) ? t : l
    );
    return t === Xe(l) && (u ? Vs(n, i) && Is(t, "set", o, n) : Is(t, "add", o, n)), d;
  }
  deleteProperty(t, o) {
    const n = et(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && n && Is(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!ns(o) || !Si.has(o)) && xt(t, "has", o), n;
  }
  ownKeys(t) {
    return xt(
      t,
      "iterate",
      Oe(t) ? "length" : oo
    ), Reflect.ownKeys(t);
  }
}
class _c extends Ii {
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
const bc = /* @__PURE__ */ new Ei(), kc = /* @__PURE__ */ new _c(), $c = /* @__PURE__ */ new Ei(!0);
const Ia = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Cc(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, i = Xe(l), r = yo(i), u = e === "entries" || e === Symbol.iterator && r, d = e === "keys" && r, f = l[e](...n), v = o ? Ia : t ? $o : as;
    return !t && xt(
      i,
      "iterate",
      d ? Sa : oo
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
function fn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xc(e, t) {
  const o = {
    get(l) {
      const i = this.__v_raw, r = Xe(i), u = Xe(l);
      e || (Vs(l, u) && xt(r, "get", l), xt(r, "get", u));
      const { has: d } = mn(r), f = t ? Ia : e ? $o : as;
      if (d.call(r, l))
        return f(i.get(l));
      if (d.call(r, u))
        return f(i.get(u));
      i !== r && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && xt(Xe(l), "iterate", oo), l.size;
    },
    has(l) {
      const i = this.__v_raw, r = Xe(i), u = Xe(l);
      return e || (Vs(l, u) && xt(r, "has", l), xt(r, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const r = this, u = r.__v_raw, d = Xe(u), f = t ? Ia : e ? $o : as;
      return !e && xt(d, "iterate", oo), u.forEach((v, p) => l.call(i, f(v), f(p), r));
    }
  };
  return yt(
    o,
    e ? {
      add: fn("add"),
      set: fn("set"),
      delete: fn("delete"),
      clear: fn("clear")
    } : {
      add(l) {
        !t && !Ht(l) && !Rs(l) && (l = Xe(l));
        const i = Xe(this);
        return mn(i).has.call(i, l) || (i.add(l), Is(i, "add", l, l)), this;
      },
      set(l, i) {
        !t && !Ht(i) && !Rs(i) && (i = Xe(i));
        const r = Xe(this), { has: u, get: d } = mn(r);
        let f = u.call(r, l);
        f || (l = Xe(l), f = u.call(r, l));
        const v = d.call(r, l);
        return r.set(l, i), f ? Vs(i, v) && Is(r, "set", l, i) : Is(r, "add", l, i), this;
      },
      delete(l) {
        const i = Xe(this), { has: r, get: u } = mn(i);
        let d = r.call(i, l);
        d || (l = Xe(l), d = r.call(i, l)), u && u.call(i, l);
        const f = i.delete(l);
        return d && Is(i, "delete", l, void 0), f;
      },
      clear() {
        const l = Xe(this), i = l.size !== 0, r = l.clear();
        return i && Is(
          l,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    o[l] = Cc(l, e, t);
  }), o;
}
function Ya(e, t) {
  const o = xc(e, t);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    et(o, l) && l in n ? o : n,
    l,
    i
  );
}
const Sc = {
  get: /* @__PURE__ */ Ya(!1, !1)
}, Ic = {
  get: /* @__PURE__ */ Ya(!1, !0)
}, Ec = {
  get: /* @__PURE__ */ Ya(!0, !1)
};
const Ti = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap(), Tc = /* @__PURE__ */ new WeakMap();
function Pc(e) {
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
function Mc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pc(tc(e));
}
function Ks(e) {
  return Rs(e) ? e : Xa(
    e,
    !1,
    bc,
    Sc,
    Ti
  );
}
function Rc(e) {
  return Xa(
    e,
    !1,
    $c,
    Ic,
    Pi
  );
}
function Rn(e) {
  return Xa(
    e,
    !0,
    kc,
    Ec,
    Mi
  );
}
function Xa(e, t, o, n, l) {
  if (!nt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Mc(e);
  if (i === 0)
    return e;
  const r = l.get(e);
  if (r)
    return r;
  const u = new Proxy(
    e,
    i === 2 ? n : o
  );
  return l.set(e, u), u;
}
function no(e) {
  return Rs(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Rs(e) {
  return !!(e && e.__v_isReadonly);
}
function Ht(e) {
  return !!(e && e.__v_isShallow);
}
function Ja(e) {
  return e ? !!e.__v_raw : !1;
}
function Xe(e) {
  const t = e && e.__v_raw;
  return t ? Xe(t) : e;
}
function Dc(e) {
  return !et(e, "__v_skip") && Object.isExtensible(e) && vi(e, "__v_skip", !0), e;
}
const as = (e) => nt(e) ? Ks(e) : e, $o = (e) => nt(e) ? Rn(e) : e;
function Et(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return Lc(e, !1);
}
function Lc(e, t) {
  return Et(e) ? e : new Nc(e, t);
}
class Nc {
  constructor(t, o) {
    this.dep = new qa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : Xe(t), this._value = o ? t : as(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || Ht(t) || Rs(t);
    t = n ? t : Xe(t), Vs(t, o) && (this._rawValue = t, this._value = n ? t : as(t), this.dep.trigger());
  }
}
function Ae(e) {
  return Et(e) ? e.value : e;
}
const Ac = {
  get: (e, t, o) => t === "__v_raw" ? e : Ae(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Et(l) && !Et(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function Ri(e) {
  return no(e) ? e : new Proxy(e, Ac);
}
class Uc {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new qa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    rt !== this)
      return _i(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $i(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function zc(e, t, o = !1) {
  let n, l;
  return Fe(e) ? n = e : (n = e.get, l = e.set), new Uc(n, l, o);
}
const vn = {}, Dn = /* @__PURE__ */ new WeakMap();
let to;
function Oc(e, t = !1, o = to) {
  if (o) {
    let n = Dn.get(o);
    n || Dn.set(o, n = []), n.push(e);
  }
}
function Fc(e, t, o = lt) {
  const { immediate: n, deep: l, once: i, scheduler: r, augmentJob: u, call: d } = o, f = (E) => l ? E : Ht(E) || l === !1 || l === 0 ? Es(E, 1) : Es(E);
  let v, p, w, g, k = !1, x = !1;
  if (Et(e) ? (p = () => e.value, k = Ht(e)) : no(e) ? (p = () => f(e), k = !0) : Oe(e) ? (x = !0, k = e.some((E) => no(E) || Ht(E)), p = () => e.map((E) => {
    if (Et(E))
      return E.value;
    if (no(E))
      return f(E);
    if (Fe(E))
      return d ? d(E, 2) : E();
  })) : Fe(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ps();
      try {
        w();
      } finally {
        Ms();
      }
    }
    const E = to;
    to = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      to = E;
    }
  } : p = ws, t && l) {
    const E = p, H = l === !0 ? 1 / 0 : l;
    p = () => Es(E(), H);
  }
  const C = fc(), I = () => {
    v.stop(), C && C.active && Va(C.effects, v);
  };
  if (i && t) {
    const E = t;
    t = (...H) => {
      E(...H), I();
    };
  }
  let N = x ? new Array(e.length).fill(vn) : vn;
  const P = (E) => {
    if (!(!(v.flags & 1) || !v.dirty && !E))
      if (t) {
        const H = v.run();
        if (l || k || (x ? H.some((K, O) => Vs(K, N[O])) : Vs(H, N))) {
          w && w();
          const K = to;
          to = v;
          try {
            const O = [
              H,
              // pass undefined as the old value when it's changed for the first time
              N === vn ? void 0 : x && N[0] === vn ? [] : N,
              g
            ];
            N = H, d ? d(t, 3, O) : (
              // @ts-expect-error
              t(...O)
            );
          } finally {
            to = K;
          }
        }
      } else
        v.run();
  };
  return u && u(P), v = new yi(p), v.scheduler = r ? () => r(P, !1) : P, g = (E) => Oc(E, !1, v), w = v.onStop = () => {
    const E = Dn.get(v);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const H of E) H();
      Dn.delete(v);
    }
  }, t ? n ? P(!0) : N = v.run() : r ? r(P.bind(null, !0), !0) : v.run(), I.pause = v.pause.bind(v), I.resume = v.resume.bind(v), I.stop = I, I;
}
function Es(e, t = 1 / 0, o) {
  if (t <= 0 || !nt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Et(e))
    Es(e.value, t, o);
  else if (Oe(e))
    for (let n = 0; n < e.length; n++)
      Es(e[n], t, o);
  else if (So(e) || yo(e))
    e.forEach((n) => {
      Es(n, t, o);
    });
  else if (fi(e)) {
    for (const n in e)
      Es(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Es(e[n], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function an(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    Xn(l, t, o);
  }
}
function ls(e, t, o, n) {
  if (Fe(e)) {
    const l = an(e, t, o, n);
    return l && di(l) && l.catch((i) => {
      Xn(i, t, o);
    }), l;
  }
  if (Oe(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(ls(e[i], t, o, n));
    return l;
  }
}
function Xn(e, t, o, n = !0) {
  const l = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || lt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let p = 0; p < v.length; p++)
          if (v[p](e, d, f) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      Ps(), an(i, null, 10, [
        e,
        d,
        f
      ]), Ms();
      return;
    }
  }
  Bc(e, o, l, n, r);
}
function Bc(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Rt = [];
let gs = -1;
const wo = [];
let Fs = null, fo = 0;
const Di = /* @__PURE__ */ Promise.resolve();
let Ln = null;
function ln(e) {
  const t = Ln || Di;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vc(e) {
  let t = gs + 1, o = Rt.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = Rt[n], i = Qo(l);
    i < e || i === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function Qa(e) {
  if (!(e.flags & 1)) {
    const t = Qo(e), o = Rt[Rt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qo(o) ? Rt.push(e) : Rt.splice(Vc(t), 0, e), e.flags |= 1, Li();
  }
}
function Li() {
  Ln || (Ln = Di.then(Ai));
}
function Wc(e) {
  Oe(e) ? wo.push(...e) : Fs && e.id === -1 ? Fs.splice(fo + 1, 0, e) : e.flags & 1 || (wo.push(e), e.flags |= 1), Li();
}
function hl(e, t, o = gs + 1) {
  for (; o < Rt.length; o++) {
    const n = Rt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Rt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ni(e) {
  if (wo.length) {
    const t = [...new Set(wo)].sort(
      (o, n) => Qo(o) - Qo(n)
    );
    if (wo.length = 0, Fs) {
      Fs.push(...t);
      return;
    }
    for (Fs = t, fo = 0; fo < Fs.length; fo++) {
      const o = Fs[fo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Fs = null, fo = 0;
  }
}
const Qo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ai(e) {
  try {
    for (gs = 0; gs < Rt.length; gs++) {
      const t = Rt[gs];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), an(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; gs < Rt.length; gs++) {
      const t = Rt[gs];
      t && (t.flags &= -2);
    }
    gs = -1, Rt.length = 0, Ni(), Ln = null, (Rt.length || wo.length) && Ai();
  }
}
let bt = null, Ui = null;
function Nn(e) {
  const t = bt;
  return bt = e, Ui = e && e.type.__scopeId || null, t;
}
function h(e, t = bt, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && zn(-1);
    const i = Nn(t);
    let r;
    try {
      r = e(...l);
    } finally {
      Nn(i), n._d && zn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function je(e, t) {
  if (bt === null)
    return e;
  const o = ta(bt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [i, r, u, d = lt] = t[l];
    i && (Fe(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Es(r), n.push({
      dir: i,
      instance: o,
      value: r,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function Xs(e, t, o, n) {
  const l = e.dirs, i = t && t.dirs;
  for (let r = 0; r < l.length; r++) {
    const u = l[r];
    i && (u.oldValue = i[r].value);
    let d = u.dir[n];
    d && (Ps(), ls(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Ms());
  }
}
const zi = Symbol("_vte"), Oi = (e) => e.__isTeleport, Vo = (e) => e && (e.disabled || e.disabled === ""), yl = (e) => e && (e.defer || e.defer === ""), wl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, _l = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ea = (e, t) => {
  const o = e && e.to;
  return mt(o) ? t ? t(o) : null : o;
}, Fi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, i, r, u, d, f) {
    const {
      mc: v,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: k, createText: x, createComment: C }
    } = f, I = Vo(t.props);
    let { shapeFlag: N, children: P, dynamicChildren: E } = t;
    if (e == null) {
      const H = t.el = x(""), K = t.anchor = x("");
      g(H, o, n), g(K, o, n);
      const O = (T, A) => {
        N & 16 && v(
          P,
          T,
          A,
          l,
          i,
          r,
          u,
          d
        );
      }, S = () => {
        const T = t.target = Ea(t.props, k), A = Bi(T, t, x, g);
        T && (r !== "svg" && wl(T) ? r = "svg" : r !== "mathml" && _l(T) && (r = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), I || (O(T, A), Sn(t, !1)));
      };
      I && (O(o, K), Sn(t, !0)), yl(t.props) ? (t.el.__isMounted = !1, Mt(() => {
        S(), delete t.el.__isMounted;
      }, i)) : S();
    } else {
      if (yl(t.props) && e.el.__isMounted === !1) {
        Mt(() => {
          Fi.process(
            e,
            t,
            o,
            n,
            l,
            i,
            r,
            u,
            d,
            f
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const H = t.anchor = e.anchor, K = t.target = e.target, O = t.targetAnchor = e.targetAnchor, S = Vo(e.props), T = S ? o : K, A = S ? H : O;
      if (r === "svg" || wl(K) ? r = "svg" : (r === "mathml" || _l(K)) && (r = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
        T,
        l,
        i,
        r,
        u
      ), ol(e, t, !0)) : d || p(
        e,
        t,
        T,
        A,
        l,
        i,
        r,
        u,
        !1
      ), I)
        S ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pn(
          t,
          o,
          H,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const re = t.target = Ea(
          t.props,
          k
        );
        re && pn(
          t,
          re,
          null,
          f,
          0
        );
      } else S && pn(
        t,
        K,
        O,
        f,
        1
      );
      Sn(t, I);
    }
  },
  remove(e, t, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: r,
      children: u,
      anchor: d,
      targetStart: f,
      targetAnchor: v,
      target: p,
      props: w
    } = e;
    if (p && (l(f), l(v)), i && l(d), r & 16) {
      const g = i || !Vo(w);
      for (let k = 0; k < u.length; k++) {
        const x = u[k];
        n(
          x,
          t,
          o,
          g,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: pn,
  hydrate: Gc
};
function pn(e, t, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, t, o);
  const { el: r, anchor: u, shapeFlag: d, children: f, props: v } = e, p = i === 2;
  if (p && n(r, t, o), (!p || Vo(v)) && d & 16)
    for (let w = 0; w < f.length; w++)
      l(
        f[w],
        t,
        o,
        2
      );
  p && n(u, t, o);
}
function Gc(e, t, o, n, l, i, {
  o: { nextSibling: r, parentNode: u, querySelector: d, insert: f, createText: v }
}, p) {
  function w(x, C, I, N) {
    C.anchor = p(
      r(x),
      C,
      u(x),
      o,
      n,
      l,
      i
    ), C.targetStart = I, C.targetAnchor = N;
  }
  const g = t.target = Ea(
    t.props,
    d
  ), k = Vo(t.props);
  if (g) {
    const x = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (k)
        w(
          e,
          t,
          x,
          x && r(x)
        );
      else {
        t.anchor = r(e);
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              t.targetStart = C;
            else if (C.data === "teleport anchor") {
              t.targetAnchor = C, g._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          C = r(C);
        }
        t.targetAnchor || Bi(g, t, v, f), p(
          x && r(x),
          t,
          g,
          o,
          n,
          l,
          i
        );
      }
    Sn(t, k);
  } else k && t.shapeFlag & 16 && w(e, t, e, r(e));
  return t.anchor && r(t.anchor);
}
const kt = Fi;
function Sn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Bi(e, t, o, n) {
  const l = t.targetStart = o(""), i = t.targetAnchor = o("");
  return l[zi] = i, e && (n(l, e), n(i, e)), i;
}
const Ss = Symbol("_leaveCb"), gn = Symbol("_enterCb");
function Vi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return st(() => {
    e.isMounted = !0;
  }), Xi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Wt = [Function, Array], Wi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Wt,
  onEnter: Wt,
  onAfterEnter: Wt,
  onEnterCancelled: Wt,
  // leave
  onBeforeLeave: Wt,
  onLeave: Wt,
  onAfterLeave: Wt,
  onLeaveCancelled: Wt,
  // appear
  onBeforeAppear: Wt,
  onAppear: Wt,
  onAfterAppear: Wt,
  onAppearCancelled: Wt
}, Gi = (e) => {
  const t = e.subTree;
  return t.component ? Gi(t.component) : t;
}, Hc = {
  name: "BaseTransition",
  props: Wi,
  setup(e, { slots: t }) {
    const o = al(), n = Vi();
    return () => {
      const l = t.default && Za(t.default(), !0);
      if (!l || !l.length)
        return;
      const i = Hi(l), r = Xe(e), { mode: u } = r;
      if (n.isLeaving)
        return ua(i);
      const d = bl(i);
      if (!d)
        return ua(i);
      let f = Zo(
        d,
        r,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      d.type !== St && lo(d, f);
      let v = o.subTree && bl(o.subTree);
      if (v && v.type !== St && !so(v, d) && Gi(o).type !== St) {
        let p = Zo(
          v,
          r,
          n,
          o
        );
        if (lo(v, p), u === "out-in" && d.type !== St)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, v = void 0;
          }, ua(i);
        u === "in-out" && d.type !== St ? p.delayLeave = (w, g, k) => {
          const x = Ki(
            n,
            v
          );
          x[String(v.key)] = v, w[Ss] = () => {
            g(), w[Ss] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            k(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return i;
    };
  }
};
function Hi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== St) {
        t = o;
        break;
      }
  }
  return t;
}
const Kc = Hc;
function Ki(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function Zo(e, t, o, n, l) {
  const {
    appear: i,
    mode: r,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: f,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: k,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: I,
    onAfterAppear: N,
    onAppearCancelled: P
  } = t, E = String(e.key), H = Ki(o, e), K = (T, A) => {
    T && ls(
      T,
      n,
      9,
      A
    );
  }, O = (T, A) => {
    const re = A[1];
    K(T, A), Oe(T) ? T.every((Y) => Y.length <= 1) && re() : T.length <= 1 && re();
  }, S = {
    mode: r,
    persisted: u,
    beforeEnter(T) {
      let A = d;
      if (!o.isMounted)
        if (i)
          A = C || d;
        else
          return;
      T[Ss] && T[Ss](
        !0
        /* cancelled */
      );
      const re = H[E];
      re && so(e, re) && re.el[Ss] && re.el[Ss](), K(A, [T]);
    },
    enter(T) {
      let A = f, re = v, Y = p;
      if (!o.isMounted)
        if (i)
          A = I || f, re = N || v, Y = P || p;
        else
          return;
      let q = !1;
      const oe = T[gn] = (Z) => {
        q || (q = !0, Z ? K(Y, [T]) : K(re, [T]), S.delayedLeave && S.delayedLeave(), T[gn] = void 0);
      };
      A ? O(A, [T, oe]) : oe();
    },
    leave(T, A) {
      const re = String(e.key);
      if (T[gn] && T[gn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return A();
      K(w, [T]);
      let Y = !1;
      const q = T[Ss] = (oe) => {
        Y || (Y = !0, A(), oe ? K(x, [T]) : K(k, [T]), T[Ss] = void 0, H[re] === e && delete H[re]);
      };
      H[re] = e, g ? O(g, [T, q]) : q();
    },
    clone(T) {
      const A = Zo(
        T,
        t,
        o,
        n,
        l
      );
      return l && l(A), A;
    }
  };
  return S;
}
function ua(e) {
  if (Jn(e))
    return e = Ws(e), e.children = null, e;
}
function bl(e) {
  if (!Jn(e))
    return Oi(e.type) && e.children ? Hi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && Fe(o.default))
      return o.default();
  }
}
function lo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, lo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Za(e, t = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const u = o == null ? r.key : String(o) + String(r.key != null ? r.key : i);
    r.type === G ? (r.patchFlag & 128 && l++, n = n.concat(
      Za(r.children, t, u)
    )) : (t || r.type !== St) && n.push(u != null ? Ws(r, { key: u }) : r);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function fe(e, t) {
  return Fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
function ji(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const An = /* @__PURE__ */ new WeakMap();
function Wo(e, t, o, n, l = !1) {
  if (Oe(e)) {
    e.forEach(
      (k, x) => Wo(
        k,
        t && (Oe(t) ? t[x] : t),
        o,
        n,
        l
      )
    );
    return;
  }
  if (_o(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Wo(e, t, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? ta(n.component) : n.el, r = l ? null : i, { i: u, r: d } = e, f = t && t.r, v = u.refs === lt ? u.refs = {} : u.refs, p = u.setupState, w = Xe(p), g = p === lt ? ui : (k) => et(w, k);
  if (f != null && f !== d) {
    if (kl(t), mt(f))
      v[f] = null, g(f) && (p[f] = null);
    else if (Et(f)) {
      f.value = null;
      const k = t;
      k.k && (v[k.k] = null);
    }
  }
  if (Fe(d))
    an(d, u, 12, [r, v]);
  else {
    const k = mt(d), x = Et(d);
    if (k || x) {
      const C = () => {
        if (e.f) {
          const I = k ? g(d) ? p[d] : v[d] : d.value;
          if (l)
            Oe(I) && Va(I, i);
          else if (Oe(I))
            I.includes(i) || I.push(i);
          else if (k)
            v[d] = [i], g(d) && (p[d] = v[d]);
          else {
            const N = [i];
            d.value = N, e.k && (v[e.k] = N);
          }
        } else k ? (v[d] = r, g(d) && (p[d] = r)) : x && (d.value = r, e.k && (v[e.k] = r));
      };
      if (r) {
        const I = () => {
          C(), An.delete(e);
        };
        I.id = -1, An.set(e, I), Mt(I, o);
      } else
        kl(e), C();
    }
  }
}
function kl(e) {
  const t = An.get(e);
  t && (t.flags |= 8, An.delete(e));
}
qn().requestIdleCallback;
qn().cancelIdleCallback;
const _o = (e) => !!e.type.__asyncLoader, Jn = (e) => e.type.__isKeepAlive;
function jc(e, t) {
  qi(e, "a", t);
}
function qc(e, t) {
  qi(e, "da", t);
}
function qi(e, t, o = It) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Qn(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Jn(l.parent.vnode) && Yc(n, t, o, l), l = l.parent;
  }
}
function Yc(e, t, o, n) {
  const l = Qn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Io(() => {
    Va(n[t], l);
  }, o);
}
function Qn(e, t, o = It, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Ps();
      const u = rn(o), d = ls(t, o, e, r);
      return u(), Ms(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ds = (e) => (t, o = It) => {
  (!sn || e === "sp") && Qn(e, (...n) => t(...n), o);
}, Xc = Ds("bm"), st = Ds("m"), Jc = Ds(
  "bu"
), Yi = Ds("u"), Xi = Ds(
  "bum"
), Io = Ds("um"), Qc = Ds(
  "sp"
), Zc = Ds("rtg"), eu = Ds("rtc");
function tu(e, t = It) {
  Qn("ec", e, t);
}
const su = "components", Ji = Symbol.for("v-ndc");
function el(e) {
  return mt(e) ? ou(su, e, !1) || e : e || Ji;
}
function ou(e, t, o = !0, n = !1) {
  const l = bt || It;
  if (l) {
    const i = l.type;
    {
      const u = Hu(
        i,
        !1
      );
      if (u && (u === t || u === jt(t) || u === Kn(jt(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      $l(l[e] || i[e], t) || // global registration
      $l(l.appContext[e], t)
    );
    return !r && n ? i : r;
  }
}
function $l(e, t) {
  return e && (e[t] || e[jt(t)] || e[Kn(jt(t))]);
}
function ge(e, t, o, n) {
  let l;
  const i = o, r = Oe(e);
  if (r || mt(e)) {
    const u = r && no(e);
    let d = !1, f = !1;
    u && (d = !Ht(e), f = Rs(e), e = Yn(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = t(
        d ? f ? $o(as(e[v])) : as(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, i);
  } else if (nt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, i)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, f = u.length; d < f; d++) {
        const v = u[d];
        l[d] = t(e[v], v, d, i);
      }
    }
  else
    l = [];
  return l;
}
function io(e, t) {
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    if (Oe(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function He(e, t, o = {}, n, l) {
  if (bt.ce || bt.parent && _o(bt.parent) && bt.parent.ce) {
    const f = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), M(
      G,
      null,
      [$("slot", o, n && n())],
      f ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), a();
  const r = i && Qi(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, d = M(
    G,
    {
      key: (u && !ns(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && n ? "_fb" : "")
    },
    r || (n ? n() : []),
    r && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function Qi(e) {
  return e.some((t) => tn(t) ? !(t.type === St || t.type === G && !Qi(t.children)) : !0) ? e : null;
}
const Ta = (e) => e ? hr(e) ? ta(e) : Ta(e.parent) : null, Go = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ta(e.parent),
    $root: (e) => Ta(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => er(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ln.bind(e.proxy)),
    $watch: (e) => pu.bind(e)
  })
), da = (e, t) => e !== lt && !e.__isScriptSetup && et(e, t), nu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: r, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = r[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return l[t];
          case 4:
            return o[t];
          case 3:
            return i[t];
        }
      else {
        if (da(n, t))
          return r[t] = 1, n[t];
        if (l !== lt && et(l, t))
          return r[t] = 2, l[t];
        if (et(i, t))
          return r[t] = 3, i[t];
        if (o !== lt && et(o, t))
          return r[t] = 4, o[t];
        Pa && (r[t] = 0);
      }
    }
    const f = Go[t];
    let v, p;
    if (f)
      return t === "$attrs" && xt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[t])
    )
      return v;
    if (o !== lt && et(o, t))
      return r[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, et(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return da(l, t) ? (l[t] = o, !0) : n !== lt && et(n, t) ? (n[t] = o, !0) : et(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: i, type: r }
  }, u) {
    let d;
    return !!(o[u] || e !== lt && u[0] !== "$" && et(e, u) || da(t, u) || et(i, u) || et(n, u) || et(Go, u) || et(l.config.globalProperties, u) || (d = r.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : et(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Cl(e) {
  return Oe(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Pa = !0;
function au(e) {
  const t = er(e), o = e.proxy, n = e.ctx;
  Pa = !1, t.beforeCreate && xl(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: i,
    methods: r,
    watch: u,
    provide: d,
    inject: f,
    // lifecycle
    created: v,
    beforeMount: p,
    mounted: w,
    beforeUpdate: g,
    updated: k,
    activated: x,
    deactivated: C,
    beforeDestroy: I,
    beforeUnmount: N,
    destroyed: P,
    unmounted: E,
    render: H,
    renderTracked: K,
    renderTriggered: O,
    errorCaptured: S,
    serverPrefetch: T,
    // public API
    expose: A,
    inheritAttrs: re,
    // assets
    components: Y,
    directives: q,
    filters: oe
  } = t;
  if (f && lu(f, n, null), r)
    for (const z in r) {
      const D = r[z];
      Fe(D) && (n[z] = D.bind(o));
    }
  if (l) {
    const z = l.call(o, o);
    nt(z) && (e.data = Ks(z));
  }
  if (Pa = !0, i)
    for (const z in i) {
      const D = i[z], we = Fe(D) ? D.bind(o, o) : Fe(D.get) ? D.get.bind(o, o) : ws, ve = !Fe(D) && Fe(D.set) ? D.set.bind(o) : ws, Ee = F({
        get: we,
        set: ve
      });
      Object.defineProperty(n, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (De) => Ee.value = De
      });
    }
  if (u)
    for (const z in u)
      Zi(u[z], n, o, z);
  if (d) {
    const z = Fe(d) ? d.call(o) : d;
    Reflect.ownKeys(z).forEach((D) => {
      mu(D, z[D]);
    });
  }
  v && xl(v, e, "c");
  function U(z, D) {
    Oe(D) ? D.forEach((we) => z(we.bind(o))) : D && z(D.bind(o));
  }
  if (U(Xc, p), U(st, w), U(Jc, g), U(Yi, k), U(jc, x), U(qc, C), U(tu, S), U(eu, K), U(Zc, O), U(Xi, N), U(Io, E), U(Qc, T), Oe(A))
    if (A.length) {
      const z = e.exposed || (e.exposed = {});
      A.forEach((D) => {
        Object.defineProperty(z, D, {
          get: () => o[D],
          set: (we) => o[D] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === ws && (e.render = H), re != null && (e.inheritAttrs = re), Y && (e.components = Y), q && (e.directives = q), T && ji(e);
}
function lu(e, t, o = ws) {
  Oe(e) && (e = Ma(e));
  for (const n in e) {
    const l = e[n];
    let i;
    nt(l) ? "default" in l ? i = In(
      l.from || n,
      l.default,
      !0
    ) : i = In(l.from || n) : i = In(l), Et(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[n] = i;
  }
}
function xl(e, t, o) {
  ls(
    Oe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Zi(e, t, o, n) {
  let l = n.includes(".") ? or(o, n) : () => o[n];
  if (mt(e)) {
    const i = t[e];
    Fe(i) && Tt(l, i);
  } else if (Fe(e))
    Tt(l, e.bind(o));
  else if (nt(e))
    if (Oe(e))
      e.forEach((i) => Zi(i, t, o, n));
    else {
      const i = Fe(e.handler) ? e.handler.bind(o) : t[e.handler];
      Fe(i) && Tt(l, i, e);
    }
}
function er(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, u = i.get(t);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (f) => Un(d, f, r, !0)
  ), Un(d, t, r)), nt(t) && i.set(t, d), d;
}
function Un(e, t, o, n = !1) {
  const { mixins: l, extends: i } = t;
  i && Un(e, i, o, !0), l && l.forEach(
    (r) => Un(e, r, o, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const u = iu[r] || o && o[r];
      e[r] = u ? u(e[r], t[r]) : t[r];
    }
  return e;
}
const iu = {
  data: Sl,
  props: Il,
  emits: Il,
  // objects
  methods: zo,
  computed: zo,
  // lifecycle
  beforeCreate: Pt,
  created: Pt,
  beforeMount: Pt,
  mounted: Pt,
  beforeUpdate: Pt,
  updated: Pt,
  beforeDestroy: Pt,
  beforeUnmount: Pt,
  destroyed: Pt,
  unmounted: Pt,
  activated: Pt,
  deactivated: Pt,
  errorCaptured: Pt,
  serverPrefetch: Pt,
  // assets
  components: zo,
  directives: zo,
  // watch
  watch: cu,
  // provide / inject
  provide: Sl,
  inject: ru
};
function Sl(e, t) {
  return t ? e ? function() {
    return yt(
      Fe(e) ? e.call(this, this) : e,
      Fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ru(e, t) {
  return zo(Ma(e), Ma(t));
}
function Ma(e) {
  if (Oe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function Pt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zo(e, t) {
  return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Il(e, t) {
  return e ? Oe(e) && Oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    Cl(e),
    Cl(t ?? {})
  ) : t;
}
function cu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = yt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Pt(e[n], t[n]);
  return o;
}
function tr() {
  return {
    app: null,
    config: {
      isNativeTag: ui,
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
let uu = 0;
function du(e, t) {
  return function(n, l = null) {
    Fe(n) || (n = yt({}, n)), l != null && !nt(l) && (l = null);
    const i = tr(), r = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const f = i.app = {
      _uid: uu++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: ju,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...p) {
        return r.has(v) || (v && Fe(v.install) ? (r.add(v), v.install(f, ...p)) : Fe(v) && (r.add(v), v(f, ...p))), f;
      },
      mixin(v) {
        return i.mixins.includes(v) || i.mixins.push(v), f;
      },
      component(v, p) {
        return p ? (i.components[v] = p, f) : i.components[v];
      },
      directive(v, p) {
        return p ? (i.directives[v] = p, f) : i.directives[v];
      },
      mount(v, p, w) {
        if (!d) {
          const g = f._ceVNode || $(n, l);
          return g.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, v, w), d = !0, f._container = v, v.__vue_app__ = f, ta(g.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (ls(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, p) {
        return i.provides[v] = p, f;
      },
      runWithContext(v) {
        const p = bo;
        bo = f;
        try {
          return v();
        } finally {
          bo = p;
        }
      }
    };
    return f;
  };
}
let bo = null;
function mu(e, t) {
  if (It) {
    let o = It.provides;
    const n = It.parent && It.parent.provides;
    n === o && (o = It.provides = Object.create(n)), o[e] = t;
  }
}
function In(e, t, o = !1) {
  const n = al();
  if (n || bo) {
    let l = bo ? bo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Fe(t) ? t.call(n && n.proxy) : t;
  }
}
const fu = Symbol.for("v-scx"), vu = () => In(fu);
function Tt(e, t, o) {
  return sr(e, t, o);
}
function sr(e, t, o = lt) {
  const { immediate: n, deep: l, flush: i, once: r } = o, u = yt({}, o), d = t && n || !t && i !== "post";
  let f;
  if (sn) {
    if (i === "sync") {
      const g = vu();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = ws, g.resume = ws, g.pause = ws, g;
    }
  }
  const v = It;
  u.call = (g, k, x) => ls(g, v, k, x);
  let p = !1;
  i === "post" ? u.scheduler = (g) => {
    Mt(g, v && v.suspense);
  } : i !== "sync" && (p = !0, u.scheduler = (g, k) => {
    k ? g() : Qa(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const w = Fc(e, t, u);
  return sn && (f ? f.push(w) : d && w()), w;
}
function pu(e, t, o) {
  const n = this.proxy, l = mt(e) ? e.includes(".") ? or(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Fe(t) ? i = t : (i = t.handler, o = t);
  const r = rn(this), u = sr(l, i.bind(n), o);
  return r(), u;
}
function or(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const gu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${jt(t)}Modifiers`] || e[`${Hs(t)}Modifiers`];
function hu(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || lt;
  let l = o;
  const i = t.startsWith("update:"), r = i && gu(n, t.slice(7));
  r && (r.trim && (l = o.map((v) => mt(v) ? v.trim() : v)), r.number && (l = o.map(jn)));
  let u, d = n[u = aa(t)] || // also try camelCase event handler (#2249)
  n[u = aa(jt(t))];
  !d && i && (d = n[u = aa(Hs(t))]), d && ls(
    d,
    e,
    6,
    l
  );
  const f = n[u + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ls(
      f,
      e,
      6,
      l
    );
  }
}
const yu = /* @__PURE__ */ new WeakMap();
function nr(e, t, o = !1) {
  const n = o ? yu : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let r = {}, u = !1;
  if (!Fe(e)) {
    const d = (f) => {
      const v = nr(f, t, !0);
      v && (u = !0, yt(r, v));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (nt(e) && n.set(e, null), null) : (Oe(i) ? i.forEach((d) => r[d] = null) : yt(r, i), nt(e) && n.set(e, r), r);
}
function Zn(e, t) {
  return !e || !Gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), et(e, t[0].toLowerCase() + t.slice(1)) || et(e, Hs(t)) || et(e, t));
}
function El(e) {
  const {
    type: t,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [i],
    slots: r,
    attrs: u,
    emit: d,
    render: f,
    renderCache: v,
    props: p,
    data: w,
    setupState: g,
    ctx: k,
    inheritAttrs: x
  } = e, C = Nn(e);
  let I, N;
  try {
    if (o.shapeFlag & 4) {
      const E = l || n, H = E;
      I = ys(
        f.call(
          H,
          E,
          v,
          p,
          g,
          w,
          k
        )
      ), N = u;
    } else {
      const E = t;
      I = ys(
        E.length > 1 ? E(
          p,
          { attrs: u, slots: r, emit: d }
        ) : E(
          p,
          null
        )
      ), N = t.props ? u : wu(u);
    }
  } catch (E) {
    Ho.length = 0, Xn(E, e, 1), I = $(St);
  }
  let P = I;
  if (N && x !== !1) {
    const E = Object.keys(N), { shapeFlag: H } = P;
    E.length && H & 7 && (i && E.some(Ba) && (N = _u(
      N,
      i
    )), P = Ws(P, N, !1, !0));
  }
  return o.dirs && (P = Ws(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(o.dirs) : o.dirs), o.transition && lo(P, o.transition), I = P, Nn(C), I;
}
const wu = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Gn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, _u = (e, t) => {
  const o = {};
  for (const n in e)
    (!Ba(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function bu(e, t, o) {
  const { props: n, children: l, component: i } = e, { props: r, children: u, patchFlag: d } = t, f = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Tl(n, r, f) : !!r;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const w = v[p];
        if (r[w] !== n[w] && !Zn(f, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === r ? !1 : n ? r ? Tl(n, r, f) : !0 : !!r;
  return !1;
}
function Tl(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (t[i] !== e[i] && !Zn(o, i))
      return !0;
  }
  return !1;
}
function ku({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const ar = {}, lr = () => Object.create(ar), ir = (e) => Object.getPrototypeOf(e) === ar;
function $u(e, t, o, n = !1) {
  const l = {}, i = lr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rr(e, t, l, i);
  for (const r in e.propsOptions[0])
    r in l || (l[r] = void 0);
  o ? e.props = n ? l : Rc(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function Cu(e, t, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, u = Xe(l), [d] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const v = e.vnode.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        let w = v[p];
        if (Zn(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (et(i, w))
            g !== i[w] && (i[w] = g, f = !0);
          else {
            const k = jt(w);
            l[k] = Ra(
              d,
              u,
              k,
              g,
              e,
              !1
            );
          }
        else
          g !== i[w] && (i[w] = g, f = !0);
      }
    }
  } else {
    rr(e, t, l, i) && (f = !0);
    let v;
    for (const p in u)
      (!t || // for camelCase
      !et(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Hs(p)) === p || !et(t, v))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[p] = Ra(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (i !== u)
      for (const p in i)
        (!t || !et(t, p)) && (delete i[p], f = !0);
  }
  f && Is(e.attrs, "set", "");
}
function rr(e, t, o, n) {
  const [l, i] = e.propsOptions;
  let r = !1, u;
  if (t)
    for (let d in t) {
      if (Oo(d))
        continue;
      const f = t[d];
      let v;
      l && et(l, v = jt(d)) ? !i || !i.includes(v) ? o[v] = f : (u || (u = {}))[v] = f : Zn(e.emitsOptions, d) || (!(d in n) || f !== n[d]) && (n[d] = f, r = !0);
    }
  if (i) {
    const d = Xe(o), f = u || lt;
    for (let v = 0; v < i.length; v++) {
      const p = i[v];
      o[p] = Ra(
        l,
        d,
        p,
        f[p],
        e,
        !et(f, p)
      );
    }
  }
  return r;
}
function Ra(e, t, o, n, l, i) {
  const r = e[o];
  if (r != null) {
    const u = et(r, "default");
    if (u && n === void 0) {
      const d = r.default;
      if (r.type !== Function && !r.skipFactory && Fe(d)) {
        const { propsDefaults: f } = l;
        if (o in f)
          n = f[o];
        else {
          const v = rn(l);
          n = f[o] = d.call(
            null,
            t
          ), v();
        }
      } else
        n = d;
      l.ce && l.ce._setProp(o, n);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !u ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Hs(o)) && (n = !0));
  }
  return n;
}
const xu = /* @__PURE__ */ new WeakMap();
function cr(e, t, o = !1) {
  const n = o ? xu : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, r = {}, u = [];
  let d = !1;
  if (!Fe(e)) {
    const v = (p) => {
      d = !0;
      const [w, g] = cr(p, t, !0);
      yt(r, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return nt(e) && n.set(e, ho), ho;
  if (Oe(i))
    for (let v = 0; v < i.length; v++) {
      const p = jt(i[v]);
      Pl(p) && (r[p] = lt);
    }
  else if (i)
    for (const v in i) {
      const p = jt(v);
      if (Pl(p)) {
        const w = i[v], g = r[p] = Oe(w) || Fe(w) ? { type: w } : yt({}, w), k = g.type;
        let x = !1, C = !0;
        if (Oe(k))
          for (let I = 0; I < k.length; ++I) {
            const N = k[I], P = Fe(N) && N.name;
            if (P === "Boolean") {
              x = !0;
              break;
            } else P === "String" && (C = !1);
          }
        else
          x = Fe(k) && k.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = x, g[
          1
          /* shouldCastTrue */
        ] = C, (x || et(g, "default")) && u.push(p);
      }
    }
  const f = [r, u];
  return nt(e) && n.set(e, f), f;
}
function Pl(e) {
  return e[0] !== "$" && !Oo(e);
}
const tl = (e) => e === "_" || e === "_ctx" || e === "$stable", sl = (e) => Oe(e) ? e.map(ys) : [ys(e)], Su = (e, t, o) => {
  if (t._n)
    return t;
  const n = h((...l) => sl(t(...l)), o);
  return n._c = !1, n;
}, ur = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (tl(l)) continue;
    const i = e[l];
    if (Fe(i))
      t[l] = Su(l, i, n);
    else if (i != null) {
      const r = sl(i);
      t[l] = () => r;
    }
  }
}, dr = (e, t) => {
  const o = sl(t);
  e.slots.default = () => o;
}, mr = (e, t, o) => {
  for (const n in t)
    (o || !tl(n)) && (e[n] = t[n]);
}, Iu = (e, t, o) => {
  const n = e.slots = lr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (mr(n, t, o), o && vi(n, "_", l, !0)) : ur(t, n);
  } else t && dr(e, t);
}, Eu = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, r = lt;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? i = !1 : mr(l, t, o) : (i = !t.$stable, ur(t, l)), r = t;
  } else t && (dr(e, t), r = { default: 1 });
  if (i)
    for (const u in l)
      !tl(u) && r[u] == null && delete l[u];
}, Mt = Du;
function Tu(e) {
  return Pu(e);
}
function Pu(e, t) {
  const o = qn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: i,
    createElement: r,
    createText: u,
    createComment: d,
    setText: f,
    setElementText: v,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = ws,
    insertStaticContent: k
  } = e, x = (L, B, se, ae = null, de = null, me = null, be = void 0, ke = null, ne = !!B.dynamicChildren) => {
    if (L === B)
      return;
    L && !so(L, B) && (ae = We(L), De(L, de, me, !0), L = null), B.patchFlag === -2 && (ne = !1, B.dynamicChildren = null);
    const { type: ue, ref: Me, shapeFlag: $e } = B;
    switch (ue) {
      case ea:
        C(L, B, se, ae);
        break;
      case St:
        I(L, B, se, ae);
        break;
      case fa:
        L == null && N(B, se, ae, be);
        break;
      case G:
        Y(
          L,
          B,
          se,
          ae,
          de,
          me,
          be,
          ke,
          ne
        );
        break;
      default:
        $e & 1 ? H(
          L,
          B,
          se,
          ae,
          de,
          me,
          be,
          ke,
          ne
        ) : $e & 6 ? q(
          L,
          B,
          se,
          ae,
          de,
          me,
          be,
          ke,
          ne
        ) : ($e & 64 || $e & 128) && ue.process(
          L,
          B,
          se,
          ae,
          de,
          me,
          be,
          ke,
          ne,
          Be
        );
    }
    Me != null && de ? Wo(Me, L && L.ref, me, B || L, !B) : Me == null && L && L.ref != null && Wo(L.ref, null, me, L, !0);
  }, C = (L, B, se, ae) => {
    if (L == null)
      n(
        B.el = u(B.children),
        se,
        ae
      );
    else {
      const de = B.el = L.el;
      B.children !== L.children && f(de, B.children);
    }
  }, I = (L, B, se, ae) => {
    L == null ? n(
      B.el = d(B.children || ""),
      se,
      ae
    ) : B.el = L.el;
  }, N = (L, B, se, ae) => {
    [L.el, L.anchor] = k(
      L.children,
      B,
      se,
      ae,
      L.el,
      L.anchor
    );
  }, P = ({ el: L, anchor: B }, se, ae) => {
    let de;
    for (; L && L !== B; )
      de = w(L), n(L, se, ae), L = de;
    n(B, se, ae);
  }, E = ({ el: L, anchor: B }) => {
    let se;
    for (; L && L !== B; )
      se = w(L), l(L), L = se;
    l(B);
  }, H = (L, B, se, ae, de, me, be, ke, ne) => {
    if (B.type === "svg" ? be = "svg" : B.type === "math" && (be = "mathml"), L == null)
      K(
        B,
        se,
        ae,
        de,
        me,
        be,
        ke,
        ne
      );
    else {
      const ue = L.el && L.el._isVueCE ? L.el : null;
      try {
        ue && ue._beginPatch(), T(
          L,
          B,
          de,
          me,
          be,
          ke,
          ne
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, K = (L, B, se, ae, de, me, be, ke) => {
    let ne, ue;
    const { props: Me, shapeFlag: $e, transition: ee, dirs: j } = L;
    if (ne = L.el = r(
      L.type,
      me,
      Me && Me.is,
      Me
    ), $e & 8 ? v(ne, L.children) : $e & 16 && S(
      L.children,
      ne,
      null,
      ae,
      de,
      ma(L, me),
      be,
      ke
    ), j && Xs(L, null, ae, "created"), O(ne, L, L.scopeId, be, ae), Me) {
      for (const R in Me)
        R !== "value" && !Oo(R) && i(ne, R, null, Me[R], me, ae);
      "value" in Me && i(ne, "value", null, Me.value, me), (ue = Me.onVnodeBeforeMount) && fs(ue, ae, L);
    }
    j && Xs(L, null, ae, "beforeMount");
    const X = Mu(de, ee);
    X && ee.beforeEnter(ne), n(ne, B, se), ((ue = Me && Me.onVnodeMounted) || X || j) && Mt(() => {
      ue && fs(ue, ae, L), X && ee.enter(ne), j && Xs(L, null, ae, "mounted");
    }, de);
  }, O = (L, B, se, ae, de) => {
    if (se && g(L, se), ae)
      for (let me = 0; me < ae.length; me++)
        g(L, ae[me]);
    if (de) {
      let me = de.subTree;
      if (B === me || vr(me.type) && (me.ssContent === B || me.ssFallback === B)) {
        const be = de.vnode;
        O(
          L,
          be,
          be.scopeId,
          be.slotScopeIds,
          de.parent
        );
      }
    }
  }, S = (L, B, se, ae, de, me, be, ke, ne = 0) => {
    for (let ue = ne; ue < L.length; ue++) {
      const Me = L[ue] = ke ? Bs(L[ue]) : ys(L[ue]);
      x(
        null,
        Me,
        B,
        se,
        ae,
        de,
        me,
        be,
        ke
      );
    }
  }, T = (L, B, se, ae, de, me, be) => {
    const ke = B.el = L.el;
    let { patchFlag: ne, dynamicChildren: ue, dirs: Me } = B;
    ne |= L.patchFlag & 16;
    const $e = L.props || lt, ee = B.props || lt;
    let j;
    if (se && Js(se, !1), (j = ee.onVnodeBeforeUpdate) && fs(j, se, B, L), Me && Xs(B, L, se, "beforeUpdate"), se && Js(se, !0), ($e.innerHTML && ee.innerHTML == null || $e.textContent && ee.textContent == null) && v(ke, ""), ue ? A(
      L.dynamicChildren,
      ue,
      ke,
      se,
      ae,
      ma(B, de),
      me
    ) : be || D(
      L,
      B,
      ke,
      null,
      se,
      ae,
      ma(B, de),
      me,
      !1
    ), ne > 0) {
      if (ne & 16)
        re(ke, $e, ee, se, de);
      else if (ne & 2 && $e.class !== ee.class && i(ke, "class", null, ee.class, de), ne & 4 && i(ke, "style", $e.style, ee.style, de), ne & 8) {
        const X = B.dynamicProps;
        for (let R = 0; R < X.length; R++) {
          const V = X[R], ce = $e[V], Te = ee[V];
          (Te !== ce || V === "value") && i(ke, V, ce, Te, de, se);
        }
      }
      ne & 1 && L.children !== B.children && v(ke, B.children);
    } else !be && ue == null && re(ke, $e, ee, se, de);
    ((j = ee.onVnodeUpdated) || Me) && Mt(() => {
      j && fs(j, se, B, L), Me && Xs(B, L, se, "updated");
    }, ae);
  }, A = (L, B, se, ae, de, me, be) => {
    for (let ke = 0; ke < B.length; ke++) {
      const ne = L[ke], ue = B[ke], Me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(ne, ue) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? p(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          se
        )
      );
      x(
        ne,
        ue,
        Me,
        null,
        ae,
        de,
        me,
        be,
        !0
      );
    }
  }, re = (L, B, se, ae, de) => {
    if (B !== se) {
      if (B !== lt)
        for (const me in B)
          !Oo(me) && !(me in se) && i(
            L,
            me,
            B[me],
            null,
            de,
            ae
          );
      for (const me in se) {
        if (Oo(me)) continue;
        const be = se[me], ke = B[me];
        be !== ke && me !== "value" && i(L, me, ke, be, de, ae);
      }
      "value" in se && i(L, "value", B.value, se.value, de);
    }
  }, Y = (L, B, se, ae, de, me, be, ke, ne) => {
    const ue = B.el = L ? L.el : u(""), Me = B.anchor = L ? L.anchor : u("");
    let { patchFlag: $e, dynamicChildren: ee, slotScopeIds: j } = B;
    j && (ke = ke ? ke.concat(j) : j), L == null ? (n(ue, se, ae), n(Me, se, ae), S(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      se,
      Me,
      de,
      me,
      be,
      ke,
      ne
    )) : $e > 0 && $e & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren ? (A(
      L.dynamicChildren,
      ee,
      se,
      de,
      me,
      be,
      ke
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || de && B === de.subTree) && ol(
      L,
      B,
      !0
      /* shallow */
    )) : D(
      L,
      B,
      se,
      Me,
      de,
      me,
      be,
      ke,
      ne
    );
  }, q = (L, B, se, ae, de, me, be, ke, ne) => {
    B.slotScopeIds = ke, L == null ? B.shapeFlag & 512 ? de.ctx.activate(
      B,
      se,
      ae,
      be,
      ne
    ) : oe(
      B,
      se,
      ae,
      de,
      me,
      be,
      ne
    ) : Z(L, B, ne);
  }, oe = (L, B, se, ae, de, me, be) => {
    const ke = L.component = Fu(
      L,
      ae,
      de
    );
    if (Jn(L) && (ke.ctx.renderer = Be), Bu(ke, !1, be), ke.asyncDep) {
      if (de && de.registerDep(ke, U, be), !L.el) {
        const ne = ke.subTree = $(St);
        I(null, ne, B, se), L.placeholder = ne.el;
      }
    } else
      U(
        ke,
        L,
        B,
        se,
        de,
        me,
        be
      );
  }, Z = (L, B, se) => {
    const ae = B.component = L.component;
    if (bu(L, B, se))
      if (ae.asyncDep && !ae.asyncResolved) {
        z(ae, B, se);
        return;
      } else
        ae.next = B, ae.update();
    else
      B.el = L.el, ae.vnode = B;
  }, U = (L, B, se, ae, de, me, be) => {
    const ke = () => {
      if (L.isMounted) {
        let { next: $e, bu: ee, u: j, parent: X, vnode: R } = L;
        {
          const ft = fr(L);
          if (ft) {
            $e && ($e.el = R.el, z(L, $e, be)), ft.asyncDep.then(() => {
              L.isUnmounted || ke();
            });
            return;
          }
        }
        let V = $e, ce;
        Js(L, !1), $e ? ($e.el = R.el, z(L, $e, be)) : $e = R, ee && xn(ee), (ce = $e.props && $e.props.onVnodeBeforeUpdate) && fs(ce, X, $e, R), Js(L, !0);
        const Te = El(L), qe = L.subTree;
        L.subTree = Te, x(
          qe,
          Te,
          // parent may have changed if it's in a teleport
          p(qe.el),
          // anchor may have changed if it's in a fragment
          We(qe),
          L,
          de,
          me
        ), $e.el = Te.el, V === null && ku(L, Te.el), j && Mt(j, de), (ce = $e.props && $e.props.onVnodeUpdated) && Mt(
          () => fs(ce, X, $e, R),
          de
        );
      } else {
        let $e;
        const { el: ee, props: j } = B, { bm: X, m: R, parent: V, root: ce, type: Te } = L, qe = _o(B);
        Js(L, !1), X && xn(X), !qe && ($e = j && j.onVnodeBeforeMount) && fs($e, V, B), Js(L, !0);
        {
          ce.ce && // @ts-expect-error _def is private
          ce.ce._def.shadowRoot !== !1 && ce.ce._injectChildStyle(Te);
          const ft = L.subTree = El(L);
          x(
            null,
            ft,
            se,
            ae,
            L,
            de,
            me
          ), B.el = ft.el;
        }
        if (R && Mt(R, de), !qe && ($e = j && j.onVnodeMounted)) {
          const ft = B;
          Mt(
            () => fs($e, V, ft),
            de
          );
        }
        (B.shapeFlag & 256 || V && _o(V.vnode) && V.vnode.shapeFlag & 256) && L.a && Mt(L.a, de), L.isMounted = !0, B = se = ae = null;
      }
    };
    L.scope.on();
    const ne = L.effect = new yi(ke);
    L.scope.off();
    const ue = L.update = ne.run.bind(ne), Me = L.job = ne.runIfDirty.bind(ne);
    Me.i = L, Me.id = L.uid, ne.scheduler = () => Qa(Me), Js(L, !0), ue();
  }, z = (L, B, se) => {
    B.component = L;
    const ae = L.vnode.props;
    L.vnode = B, L.next = null, Cu(L, B.props, ae, se), Eu(L, B.children, se), Ps(), hl(L), Ms();
  }, D = (L, B, se, ae, de, me, be, ke, ne = !1) => {
    const ue = L && L.children, Me = L ? L.shapeFlag : 0, $e = B.children, { patchFlag: ee, shapeFlag: j } = B;
    if (ee > 0) {
      if (ee & 128) {
        ve(
          ue,
          $e,
          se,
          ae,
          de,
          me,
          be,
          ke,
          ne
        );
        return;
      } else if (ee & 256) {
        we(
          ue,
          $e,
          se,
          ae,
          de,
          me,
          be,
          ke,
          ne
        );
        return;
      }
    }
    j & 8 ? (Me & 16 && Se(ue, de, me), $e !== ue && v(se, $e)) : Me & 16 ? j & 16 ? ve(
      ue,
      $e,
      se,
      ae,
      de,
      me,
      be,
      ke,
      ne
    ) : Se(ue, de, me, !0) : (Me & 8 && v(se, ""), j & 16 && S(
      $e,
      se,
      ae,
      de,
      me,
      be,
      ke,
      ne
    ));
  }, we = (L, B, se, ae, de, me, be, ke, ne) => {
    L = L || ho, B = B || ho;
    const ue = L.length, Me = B.length, $e = Math.min(ue, Me);
    let ee;
    for (ee = 0; ee < $e; ee++) {
      const j = B[ee] = ne ? Bs(B[ee]) : ys(B[ee]);
      x(
        L[ee],
        j,
        se,
        null,
        de,
        me,
        be,
        ke,
        ne
      );
    }
    ue > Me ? Se(
      L,
      de,
      me,
      !0,
      !1,
      $e
    ) : S(
      B,
      se,
      ae,
      de,
      me,
      be,
      ke,
      ne,
      $e
    );
  }, ve = (L, B, se, ae, de, me, be, ke, ne) => {
    let ue = 0;
    const Me = B.length;
    let $e = L.length - 1, ee = Me - 1;
    for (; ue <= $e && ue <= ee; ) {
      const j = L[ue], X = B[ue] = ne ? Bs(B[ue]) : ys(B[ue]);
      if (so(j, X))
        x(
          j,
          X,
          se,
          null,
          de,
          me,
          be,
          ke,
          ne
        );
      else
        break;
      ue++;
    }
    for (; ue <= $e && ue <= ee; ) {
      const j = L[$e], X = B[ee] = ne ? Bs(B[ee]) : ys(B[ee]);
      if (so(j, X))
        x(
          j,
          X,
          se,
          null,
          de,
          me,
          be,
          ke,
          ne
        );
      else
        break;
      $e--, ee--;
    }
    if (ue > $e) {
      if (ue <= ee) {
        const j = ee + 1, X = j < Me ? B[j].el : ae;
        for (; ue <= ee; )
          x(
            null,
            B[ue] = ne ? Bs(B[ue]) : ys(B[ue]),
            se,
            X,
            de,
            me,
            be,
            ke,
            ne
          ), ue++;
      }
    } else if (ue > ee)
      for (; ue <= $e; )
        De(L[ue], de, me, !0), ue++;
    else {
      const j = ue, X = ue, R = /* @__PURE__ */ new Map();
      for (ue = X; ue <= ee; ue++) {
        const vt = B[ue] = ne ? Bs(B[ue]) : ys(B[ue]);
        vt.key != null && R.set(vt.key, ue);
      }
      let V, ce = 0;
      const Te = ee - X + 1;
      let qe = !1, ft = 0;
      const $t = new Array(Te);
      for (ue = 0; ue < Te; ue++) $t[ue] = 0;
      for (ue = j; ue <= $e; ue++) {
        const vt = L[ue];
        if (ce >= Te) {
          De(vt, de, me, !0);
          continue;
        }
        let ht;
        if (vt.key != null)
          ht = R.get(vt.key);
        else
          for (V = X; V <= ee; V++)
            if ($t[V - X] === 0 && so(vt, B[V])) {
              ht = V;
              break;
            }
        ht === void 0 ? De(vt, de, me, !0) : ($t[ht - X] = ue + 1, ht >= ft ? ft = ht : qe = !0, x(
          vt,
          B[ht],
          se,
          null,
          de,
          me,
          be,
          ke,
          ne
        ), ce++);
      }
      const Ct = qe ? Ru($t) : ho;
      for (V = Ct.length - 1, ue = Te - 1; ue >= 0; ue--) {
        const vt = X + ue, ht = B[vt], Yt = B[vt + 1], bs = vt + 1 < Me ? (
          // #13559, fallback to el placeholder for unresolved async component
          Yt.el || Yt.placeholder
        ) : ae;
        $t[ue] === 0 ? x(
          null,
          ht,
          se,
          bs,
          de,
          me,
          be,
          ke,
          ne
        ) : qe && (V < 0 || ue !== Ct[V] ? Ee(ht, se, bs, 2) : V--);
      }
    }
  }, Ee = (L, B, se, ae, de = null) => {
    const { el: me, type: be, transition: ke, children: ne, shapeFlag: ue } = L;
    if (ue & 6) {
      Ee(L.component.subTree, B, se, ae);
      return;
    }
    if (ue & 128) {
      L.suspense.move(B, se, ae);
      return;
    }
    if (ue & 64) {
      be.move(L, B, se, Be);
      return;
    }
    if (be === G) {
      n(me, B, se);
      for (let $e = 0; $e < ne.length; $e++)
        Ee(ne[$e], B, se, ae);
      n(L.anchor, B, se);
      return;
    }
    if (be === fa) {
      P(L, B, se);
      return;
    }
    if (ae !== 2 && ue & 1 && ke)
      if (ae === 0)
        ke.beforeEnter(me), n(me, B, se), Mt(() => ke.enter(me), de);
      else {
        const { leave: $e, delayLeave: ee, afterLeave: j } = ke, X = () => {
          L.ctx.isUnmounted ? l(me) : n(me, B, se);
        }, R = () => {
          me._isLeaving && me[Ss](
            !0
            /* cancelled */
          ), $e(me, () => {
            X(), j && j();
          });
        };
        ee ? ee(me, X, R) : R();
      }
    else
      n(me, B, se);
  }, De = (L, B, se, ae = !1, de = !1) => {
    const {
      type: me,
      props: be,
      ref: ke,
      children: ne,
      dynamicChildren: ue,
      shapeFlag: Me,
      patchFlag: $e,
      dirs: ee,
      cacheIndex: j
    } = L;
    if ($e === -2 && (de = !1), ke != null && (Ps(), Wo(ke, null, se, L, !0), Ms()), j != null && (B.renderCache[j] = void 0), Me & 256) {
      B.ctx.deactivate(L);
      return;
    }
    const X = Me & 1 && ee, R = !_o(L);
    let V;
    if (R && (V = be && be.onVnodeBeforeUnmount) && fs(V, B, L), Me & 6)
      _e(L.component, se, ae);
    else {
      if (Me & 128) {
        L.suspense.unmount(se, ae);
        return;
      }
      X && Xs(L, null, B, "beforeUnmount"), Me & 64 ? L.type.remove(
        L,
        B,
        se,
        Be,
        ae
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (me !== G || $e > 0 && $e & 64) ? Se(
        ue,
        B,
        se,
        !1,
        !0
      ) : (me === G && $e & 384 || !de && Me & 16) && Se(ne, B, se), ae && Ke(L);
    }
    (R && (V = be && be.onVnodeUnmounted) || X) && Mt(() => {
      V && fs(V, B, L), X && Xs(L, null, B, "unmounted");
    }, se);
  }, Ke = (L) => {
    const { type: B, el: se, anchor: ae, transition: de } = L;
    if (B === G) {
      Je(se, ae);
      return;
    }
    if (B === fa) {
      E(L);
      return;
    }
    const me = () => {
      l(se), de && !de.persisted && de.afterLeave && de.afterLeave();
    };
    if (L.shapeFlag & 1 && de && !de.persisted) {
      const { leave: be, delayLeave: ke } = de, ne = () => be(se, me);
      ke ? ke(L.el, me, ne) : ne();
    } else
      me();
  }, Je = (L, B) => {
    let se;
    for (; L !== B; )
      se = w(L), l(L), L = se;
    l(B);
  }, _e = (L, B, se) => {
    const { bum: ae, scope: de, job: me, subTree: be, um: ke, m: ne, a: ue } = L;
    Ml(ne), Ml(ue), ae && xn(ae), de.stop(), me && (me.flags |= 8, De(be, L, B, se)), ke && Mt(ke, B), Mt(() => {
      L.isUnmounted = !0;
    }, B);
  }, Se = (L, B, se, ae = !1, de = !1, me = 0) => {
    for (let be = me; be < L.length; be++)
      De(L[be], B, se, ae, de);
  }, We = (L) => {
    if (L.shapeFlag & 6)
      return We(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const B = w(L.anchor || L.el), se = B && B[zi];
    return se ? w(se) : B;
  };
  let ye = !1;
  const le = (L, B, se) => {
    L == null ? B._vnode && De(B._vnode, null, null, !0) : x(
      B._vnode || null,
      L,
      B,
      null,
      null,
      null,
      se
    ), B._vnode = L, ye || (ye = !0, hl(), Ni(), ye = !1);
  }, Be = {
    p: x,
    um: De,
    m: Ee,
    r: Ke,
    mt: oe,
    mc: S,
    pc: D,
    pbc: A,
    n: We,
    o: e
  };
  return {
    render: le,
    hydrate: void 0,
    createApp: du(le)
  };
}
function ma({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Js({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Mu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ol(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Oe(n) && Oe(l))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Bs(l[i]), u.el = r.el), !o && u.patchFlag !== -2 && ol(r, u)), u.type === ea && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = r.el), u.type === St && !u.el && (u.el = r.el);
    }
}
function Ru(e) {
  const t = e.slice(), o = [0];
  let n, l, i, r, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const f = e[n];
    if (f !== 0) {
      if (l = o[o.length - 1], e[l] < f) {
        t[n] = l, o.push(n);
        continue;
      }
      for (i = 0, r = o.length - 1; i < r; )
        u = i + r >> 1, e[o[u]] < f ? i = u + 1 : r = u;
      f < e[o[i]] && (i > 0 && (t[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, r = o[i - 1]; i-- > 0; )
    o[i] = r, r = t[r];
  return o;
}
function fr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fr(t);
}
function Ml(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const vr = (e) => e.__isSuspense;
function Du(e, t) {
  t && t.pendingBranch ? Oe(e) ? t.effects.push(...e) : t.effects.push(e) : Wc(e);
}
const G = Symbol.for("v-fgt"), ea = Symbol.for("v-txt"), St = Symbol.for("v-cmt"), fa = Symbol.for("v-stc"), Ho = [];
let Bt = null;
function a(e = !1) {
  Ho.push(Bt = e ? null : []);
}
function Lu() {
  Ho.pop(), Bt = Ho[Ho.length - 1] || null;
}
let en = 1;
function zn(e, t = !1) {
  en += e, e < 0 && Bt && t && (Bt.hasOnce = !0);
}
function pr(e) {
  return e.dynamicChildren = en > 0 ? Bt || ho : null, Lu(), en > 0 && Bt && Bt.push(e), e;
}
function c(e, t, o, n, l, i) {
  return pr(
    s(
      e,
      t,
      o,
      n,
      l,
      i,
      !0
    )
  );
}
function M(e, t, o, n, l) {
  return pr(
    $(
      e,
      t,
      o,
      n,
      l,
      !0
    )
  );
}
function tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, t) {
  return e.type === t.type && e.key === t.key;
}
const gr = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? mt(e) || Et(e) || Fe(e) ? { i: bt, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, i = e === G ? 0 : 1, r = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gr(t),
    ref: t && En(t),
    scopeId: Ui,
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: bt
  };
  return u ? (nl(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= mt(o) ? 8 : 16), en > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Bt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Bt.push(d), d;
}
const $ = Nu;
function Nu(e, t = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Ji) && (e = St), tn(e)) {
    const u = Ws(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && nl(u, o), en > 0 && !i && Bt && (u.shapeFlag & 6 ? Bt[Bt.indexOf(e)] = u : Bt.push(u)), u.patchFlag = -2, u;
  }
  if (Ku(e) && (e = e.__vccOpts), t) {
    t = Au(t);
    let { class: u, style: d } = t;
    u && !mt(u) && (t.class = Ce(u)), nt(d) && (Ja(d) && !Oe(d) && (d = yt({}, d)), t.style = qt(d));
  }
  const r = mt(e) ? 1 : vr(e) ? 128 : Oi(e) ? 64 : nt(e) ? 4 : Fe(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    n,
    l,
    r,
    i,
    !0
  );
}
function Au(e) {
  return e ? Ja(e) || ir(e) ? yt({}, e) : e : null;
}
function Ws(e, t, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: r, children: u, transition: d } = e, f = t ? Uu(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && gr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Oe(i) ? i.concat(En(t)) : [i, En(t)] : En(t)
    ) : i,
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
    patchFlag: t && e.type !== G ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Ws(e.ssContent),
    ssFallback: e.ssFallback && Ws(e.ssFallback),
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
function _(e = " ", t = 0) {
  return $(ea, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (a(), M(St, null, e)) : $(St, null, e);
}
function ys(e) {
  return e == null || typeof e == "boolean" ? $(St) : Oe(e) ? $(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : tn(e) ? Bs(e) : $(ea, null, String(e));
}
function Bs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ws(e);
}
function nl(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Oe(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), nl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !ir(t) ? t._ctx = bt : l === 3 && bt && (bt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Fe(t) ? (t = { default: t, _ctx: bt }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [_(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function Uu(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Ce([t.class, n.class]));
      else if (l === "style")
        t.style = qt([t.style, n.style]);
      else if (Gn(l)) {
        const i = t[l], r = n[l];
        r && i !== r && !(Oe(i) && i.includes(r)) && (t[l] = i ? [].concat(i, r) : r);
      } else l !== "" && (t[l] = n[l]);
  }
  return t;
}
function fs(e, t, o, n = null) {
  ls(e, t, 7, [
    o,
    n
  ]);
}
const zu = tr();
let Ou = 0;
function Fu(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || zu, i = {
    uid: Ou++,
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
    scope: new mc(
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
    propsOptions: cr(n, l),
    emitsOptions: nr(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: lt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: lt,
    data: lt,
    props: lt,
    attrs: lt,
    slots: lt,
    refs: lt,
    setupState: lt,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = hu.bind(null, i), e.ce && e.ce(i), i;
}
let It = null;
const al = () => It || bt;
let On, Da;
{
  const e = qn(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((r) => r(i)) : l[0](i);
    };
  };
  On = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => It = o
  ), Da = t(
    "__VUE_SSR_SETTERS__",
    (o) => sn = o
  );
}
const rn = (e) => {
  const t = It;
  return On(e), e.scope.on(), () => {
    e.scope.off(), On(t);
  };
}, Rl = () => {
  It && It.scope.off(), On(null);
};
function hr(e) {
  return e.vnode.shapeFlag & 4;
}
let sn = !1;
function Bu(e, t = !1, o = !1) {
  t && Da(t);
  const { props: n, children: l } = e.vnode, i = hr(e);
  $u(e, n, i, t), Iu(e, l, o || t);
  const r = i ? Vu(e, t) : void 0;
  return t && Da(!1), r;
}
function Vu(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nu);
  const { setup: n } = o;
  if (n) {
    Ps();
    const l = e.setupContext = n.length > 1 ? Gu(e) : null, i = rn(e), r = an(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = di(r);
    if (Ms(), i(), (u || e.sp) && !_o(e) && ji(e), u) {
      if (r.then(Rl, Rl), t)
        return r.then((d) => {
          Dl(e, d);
        }).catch((d) => {
          Xn(d, e, 0);
        });
      e.asyncDep = r;
    } else
      Dl(e, r);
  } else
    yr(e);
}
function Dl(e, t, o) {
  Fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : nt(t) && (e.setupState = Ri(t)), yr(e);
}
function yr(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || ws);
  {
    const l = rn(e);
    Ps();
    try {
      au(e);
    } finally {
      Ms(), l();
    }
  }
}
const Wu = {
  get(e, t) {
    return xt(e, "get", ""), e[t];
  }
};
function Gu(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ta(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ri(Dc(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Go)
        return Go[o](e);
    },
    has(t, o) {
      return o in t || o in Go;
    }
  })) : e.proxy;
}
function Hu(e, t = !0) {
  return Fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ku(e) {
  return Fe(e) && "__vccOpts" in e;
}
const F = (e, t) => zc(e, t, sn);
function cn(e, t, o) {
  try {
    zn(-1);
    const n = arguments.length;
    return n === 2 ? nt(t) && !Oe(t) ? tn(t) ? $(e, null, [t]) : $(e, t) : $(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && tn(o) && (o = [o]), $(e, t, o));
  } finally {
    zn(1);
  }
}
const ju = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let La;
const Ll = typeof window < "u" && window.trustedTypes;
if (Ll)
  try {
    La = /* @__PURE__ */ Ll.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const wr = La ? (e) => La.createHTML(e) : (e) => e, qu = "http://www.w3.org/2000/svg", Yu = "http://www.w3.org/1998/Math/MathML", xs = typeof document < "u" ? document : null, Nl = xs && /* @__PURE__ */ xs.createElement("template"), Xu = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? xs.createElementNS(qu, e) : t === "mathml" ? xs.createElementNS(Yu, e) : o ? xs.createElement(e, { is: o }) : xs.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => xs.createTextNode(e),
  createComment: (e) => xs.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xs.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, n, l, i) {
    const r = o ? o.previousSibling : t.lastChild;
    if (l && (l === i || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === i || !(l = l.nextSibling)); )
        ;
    else {
      Nl.innerHTML = wr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Nl.content;
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
      r ? r.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, Us = "transition", Do = "animation", Co = Symbol("_vtc"), _r = {
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
}, br = /* @__PURE__ */ yt(
  {},
  Wi,
  _r
), Ju = (e) => (e.displayName = "Transition", e.props = br, e), Qu = /* @__PURE__ */ Ju(
  (e, { slots: t }) => cn(Kc, kr(e), t)
), Qs = (e, t = []) => {
  Oe(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, Al = (e) => e ? Oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function kr(e) {
  const t = {};
  for (const Y in e)
    Y in _r || (t[Y] = e[Y]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: r = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = i,
    appearActiveClass: f = r,
    appearToClass: v = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, k = Zu(l), x = k && k[0], C = k && k[1], {
    onBeforeEnter: I,
    onEnter: N,
    onEnterCancelled: P,
    onLeave: E,
    onLeaveCancelled: H,
    onBeforeAppear: K = I,
    onAppear: O = N,
    onAppearCancelled: S = P
  } = t, T = (Y, q, oe, Z) => {
    Y._enterCancelled = Z, zs(Y, q ? v : u), zs(Y, q ? f : r), oe && oe();
  }, A = (Y, q) => {
    Y._isLeaving = !1, zs(Y, p), zs(Y, g), zs(Y, w), q && q();
  }, re = (Y) => (q, oe) => {
    const Z = Y ? O : N, U = () => T(q, Y, oe);
    Qs(Z, [q, U]), Ul(() => {
      zs(q, Y ? d : i), ps(q, Y ? v : u), Al(Z) || zl(q, n, x, U);
    });
  };
  return yt(t, {
    onBeforeEnter(Y) {
      Qs(I, [Y]), ps(Y, i), ps(Y, r);
    },
    onBeforeAppear(Y) {
      Qs(K, [Y]), ps(Y, d), ps(Y, f);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(Y, q) {
      Y._isLeaving = !0;
      const oe = () => A(Y, q);
      ps(Y, p), Y._enterCancelled ? (ps(Y, w), Na(Y)) : (Na(Y), ps(Y, w)), Ul(() => {
        Y._isLeaving && (zs(Y, p), ps(Y, g), Al(E) || zl(Y, n, C, oe));
      }), Qs(E, [Y, oe]);
    },
    onEnterCancelled(Y) {
      T(Y, !1, void 0, !0), Qs(P, [Y]);
    },
    onAppearCancelled(Y) {
      T(Y, !0, void 0, !0), Qs(S, [Y]);
    },
    onLeaveCancelled(Y) {
      A(Y), Qs(H, [Y]);
    }
  });
}
function Zu(e) {
  if (e == null)
    return null;
  if (nt(e))
    return [va(e.enter), va(e.leave)];
  {
    const t = va(e);
    return [t, t];
  }
}
function va(e) {
  return nc(e);
}
function ps(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Co] || (e[Co] = /* @__PURE__ */ new Set())).add(t);
}
function zs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Co];
  o && (o.delete(t), o.size || (e[Co] = void 0));
}
function Ul(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ed = 0;
function zl(e, t, o, n) {
  const l = e._endId = ++ed, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: r, timeout: u, propCount: d } = $r(e, t);
  if (!r)
    return n();
  const f = r + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(f, w), i();
  }, w = (g) => {
    g.target === e && ++v >= d && p();
  };
  setTimeout(() => {
    v < d && p();
  }, u + 1), e.addEventListener(f, w);
}
function $r(e, t) {
  const o = window.getComputedStyle(e), n = (k) => (o[k] || "").split(", "), l = n(`${Us}Delay`), i = n(`${Us}Duration`), r = Ol(l, i), u = n(`${Do}Delay`), d = n(`${Do}Duration`), f = Ol(u, d);
  let v = null, p = 0, w = 0;
  t === Us ? r > 0 && (v = Us, p = r, w = i.length) : t === Do ? f > 0 && (v = Do, p = f, w = d.length) : (p = Math.max(r, f), v = p > 0 ? r > f ? Us : Do : null, w = v ? v === Us ? i.length : d.length : 0);
  const g = v === Us && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Us}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function Ol(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => Fl(o) + Fl(e[n])));
}
function Fl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Na(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function td(e, t, o) {
  const n = e[Co];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const Bl = Symbol("_vod"), sd = Symbol("_vsh"), od = Symbol(""), nd = /(?:^|;)\s*display\s*:/;
function ad(e, t, o) {
  const n = e.style, l = mt(o);
  let i = !1;
  if (o && !l) {
    if (t)
      if (mt(t))
        for (const r of t.split(";")) {
          const u = r.slice(0, r.indexOf(":")).trim();
          o[u] == null && Tn(n, u, "");
        }
      else
        for (const r in t)
          o[r] == null && Tn(n, r, "");
    for (const r in o)
      r === "display" && (i = !0), Tn(n, r, o[r]);
  } else if (l) {
    if (t !== o) {
      const r = n[od];
      r && (o += ";" + r), n.cssText = o, i = nd.test(o);
    }
  } else t && e.removeAttribute("style");
  Bl in e && (e[Bl] = i ? n.display : "", e[sd] && (n.display = "none"));
}
const Vl = /\s*!important$/;
function Tn(e, t, o) {
  if (Oe(o))
    o.forEach((n) => Tn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = ld(e, t);
    Vl.test(o) ? e.setProperty(
      Hs(n),
      o.replace(Vl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Wl = ["Webkit", "Moz", "ms"], pa = {};
function ld(e, t) {
  const o = pa[t];
  if (o)
    return o;
  let n = jt(t);
  if (n !== "filter" && n in e)
    return pa[t] = n;
  n = Kn(n);
  for (let l = 0; l < Wl.length; l++) {
    const i = Wl[l] + n;
    if (i in e)
      return pa[t] = i;
  }
  return t;
}
const Gl = "http://www.w3.org/1999/xlink";
function Hl(e, t, o, n, l, i = uc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Gl, t.slice(6, t.length)) : e.setAttributeNS(Gl, t, o) : o == null || i && !pi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ns(o) ? String(o) : o
  );
}
function Kl(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? wr(o) : o);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let r = !1;
  if (o === "" || o == null) {
    const u = typeof e[t];
    u === "boolean" ? o = pi(o) : o == null && u === "string" ? (o = "", r = !0) : u === "number" && (o = 0, r = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  r && e.removeAttribute(l || t);
}
function Ts(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function id(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const jl = Symbol("_vei");
function rd(e, t, o, n, l = null) {
  const i = e[jl] || (e[jl] = {}), r = i[t];
  if (n && r)
    r.value = n;
  else {
    const [u, d] = cd(t);
    if (n) {
      const f = i[t] = md(
        n,
        l
      );
      Ts(e, u, f, d);
    } else r && (id(e, u, r, d), i[t] = void 0);
  }
}
const ql = /(?:Once|Passive|Capture)$/;
function cd(e) {
  let t;
  if (ql.test(e)) {
    t = {};
    let n;
    for (; n = e.match(ql); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Hs(e.slice(2)), t];
}
let ga = 0;
const ud = /* @__PURE__ */ Promise.resolve(), dd = () => ga || (ud.then(() => ga = 0), ga = Date.now());
function md(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ls(
      fd(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = dd(), o;
}
function fd(e, t) {
  if (Oe(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return t;
}
const Yl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vd = (e, t, o, n, l, i) => {
  const r = l === "svg";
  t === "class" ? td(e, n, r) : t === "style" ? ad(e, o, n) : Gn(t) ? Ba(t) || rd(e, t, o, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pd(e, t, n, r)) ? (Kl(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Hl(e, t, n, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !mt(n)) ? Kl(e, jt(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Hl(e, t, n, r));
};
function pd(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Yl(t) && Fe(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Yl(t) && mt(o) ? !1 : t in e;
}
const Cr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Fn = Symbol("_moveCb"), Xl = Symbol("_enterCb"), gd = (e) => (delete e.props.mode, e), hd = /* @__PURE__ */ gd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ yt({}, br, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = al(), n = Vi();
    let l, i;
    return Yi(() => {
      if (!l.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!kd(
        l[0].el,
        o.vnode.el,
        r
      )) {
        l = [];
        return;
      }
      l.forEach(wd), l.forEach(_d);
      const u = l.filter(bd);
      Na(o.vnode.el), u.forEach((d) => {
        const f = d.el, v = f.style;
        ps(f, r), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = f[Fn] = (w) => {
          w && w.target !== f || (!w || w.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[Fn] = null, zs(f, r));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const r = Xe(e), u = kr(r);
      let d = r.tag || G;
      if (l = [], i)
        for (let f = 0; f < i.length; f++) {
          const v = i[f];
          v.el && v.el instanceof Element && (l.push(v), lo(
            v,
            Zo(
              v,
              u,
              n,
              o
            )
          ), Cr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = t.default ? Za(t.default()) : [];
      for (let f = 0; f < i.length; f++) {
        const v = i[f];
        v.key != null && lo(
          v,
          Zo(v, u, n, o)
        );
      }
      return $(d, null, i);
    };
  }
}), yd = hd;
function wd(e) {
  const t = e.el;
  t[Fn] && t[Fn](), t[Xl] && t[Xl]();
}
function _d(e) {
  xr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function bd(e) {
  const t = Cr.get(e), o = xr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function kd(e, t, o) {
  const n = e.cloneNode(), l = e[Co];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(n);
  const { hasTransform: r } = $r(n);
  return i.removeChild(n), r;
}
const Gs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Oe(t) ? (o) => xn(t, o) : t;
};
function $d(e) {
  e.target.composing = !0;
}
function Jl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Kt = Symbol("_assign");
function Ql(e, t, o) {
  return t && (e = e.trim()), o && (e = jn(e)), e;
}
const Vt = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[Kt] = Gs(l);
    const i = n || l.props && l.props.type === "number";
    Ts(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Kt](Ql(e.value, o, i));
    }), (o || i) && Ts(e, "change", () => {
      e.value = Ql(e.value, o, i);
    }), t || (Ts(e, "compositionstart", $d), Ts(e, "compositionend", Jl), Ts(e, "change", Jl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, r) {
    if (e[Kt] = Gs(r), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? jn(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, on = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[Kt] = Gs(o), Ts(e, "change", () => {
      const n = e._modelValue, l = xo(e), i = e.checked, r = e[Kt];
      if (Oe(n)) {
        const u = Ga(n, l), d = u !== -1;
        if (i && !d)
          r(n.concat(l));
        else if (!i && d) {
          const f = [...n];
          f.splice(u, 1), r(f);
        }
      } else if (So(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), r(u);
      } else
        r(Sr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Zl,
  beforeUpdate(e, t, o) {
    e[Kt] = Gs(o), Zl(e, t, o);
  }
};
function Zl(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Oe(t))
    l = Ga(t, n.props.value) > -1;
  else if (So(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = ao(t, Sr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const es = {
  created(e, { value: t }, o) {
    e.checked = ao(t, o.props.value), e[Kt] = Gs(o), Ts(e, "change", () => {
      e[Kt](xo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[Kt] = Gs(n), t !== o && (e.checked = ao(t, n.props.value));
  }
}, _s = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const l = So(t);
    Ts(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => o ? jn(xo(r)) : xo(r)
      );
      e[Kt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, ln(() => {
        e._assigning = !1;
      });
    }), e[Kt] = Gs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ei(e, t);
  },
  beforeUpdate(e, t, o) {
    e[Kt] = Gs(o);
  },
  updated(e, { value: t }) {
    e._assigning || ei(e, t);
  }
};
function ei(e, t) {
  const o = e.multiple, n = Oe(t);
  if (!(o && !n && !So(t))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const r = e.options[l], u = xo(r);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? r.selected = t.some((f) => String(f) === String(u)) : r.selected = Ga(t, u) > -1;
        } else
          r.selected = t.has(u);
      else if (ao(xo(r), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function xo(e) {
  return "_value" in e ? e._value : e.value;
}
function Sr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const sa = {
  created(e, t, o) {
    hn(e, t, o, null, "created");
  },
  mounted(e, t, o) {
    hn(e, t, o, null, "mounted");
  },
  beforeUpdate(e, t, o, n) {
    hn(e, t, o, n, "beforeUpdate");
  },
  updated(e, t, o, n) {
    hn(e, t, o, n, "updated");
  }
};
function Cd(e, t) {
  switch (e) {
    case "SELECT":
      return _s;
    case "TEXTAREA":
      return Vt;
    default:
      switch (t) {
        case "checkbox":
          return on;
        case "radio":
          return es;
        default:
          return Vt;
      }
  }
}
function hn(e, t, o, n, l) {
  const r = Cd(
    e.tagName,
    o.props && o.props.type
  )[l];
  r && r(e, t, o, n);
}
const xd = ["ctrl", "shift", "alt", "meta"], Sd = {
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
  exact: (e, t) => xd.some((o) => e[`${o}Key`] && !t.includes(o))
}, ut = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const u = Sd[t[r]];
      if (u && u(l, t)) return;
    }
    return e(l, ...i);
  }));
}, Id = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ss = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = Hs(l.key);
    if (t.some(
      (r) => r === i || Id[r] === i
    ))
      return e(l);
  }));
}, Ed = /* @__PURE__ */ yt({ patchProp: vd }, Xu);
let ti;
function Td() {
  return ti || (ti = Tu(Ed));
}
const oa = ((...e) => {
  const t = Td().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = Md(n);
    if (!l) return;
    const i = t._component;
    !Fe(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const r = o(l, !1, Pd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), r;
  }, t;
});
function Pd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Md(e) {
  return mt(e) ? document.querySelector(e) : e;
}
const Rd = { class: "panel-layout" }, Dd = {
  key: 0,
  class: "panel-layout-header"
}, Ld = {
  key: 1,
  class: "panel-layout-search"
}, Nd = { class: "panel-layout-content" }, Ad = {
  key: 2,
  class: "panel-layout-footer"
}, Ud = /* @__PURE__ */ fe({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), c("div", Rd, [
      t.$slots.header ? (a(), c("div", Dd, [
        He(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (a(), c("div", Ld, [
        He(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", Nd, [
        He(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), c("div", Ad, [
        He(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), pe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Lt = /* @__PURE__ */ pe(Ud, [["__scopeId", "data-v-21565df9"]]), zd = {
  key: 0,
  class: "panel-title-prefix"
}, Od = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Fd = /* @__PURE__ */ fe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), M(el(`h${e.level}`), {
      class: Ce(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), c("span", zd, m(e.prefix), 1)) : (a(), c("span", Od)),
        He(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bd = /* @__PURE__ */ pe(Fd, [["__scopeId", "data-v-c3875efc"]]), Vd = ["title"], Wd = ["width", "height"], Gd = /* @__PURE__ */ fe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), c("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => t.$emit("click"))
    }, [
      (a(), c("svg", {
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
      ])], 8, Wd))
    ], 8, Vd));
  }
}), Ir = /* @__PURE__ */ pe(Gd, [["__scopeId", "data-v-6fc7f16d"]]), Hd = { class: "header-left" }, Kd = {
  key: 0,
  class: "header-actions"
}, jd = /* @__PURE__ */ fe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: Ce(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Hd, [
        $(Bd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            _(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), M(Ir, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (a(), c("div", Kd, [
        He(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ pe(jd, [["__scopeId", "data-v-55a62cd6"]]), qd = {
  key: 0,
  class: "section-title-count"
}, Yd = {
  key: 1,
  class: "section-title-icon"
}, Xd = /* @__PURE__ */ fe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), M(el(`h${e.level}`), {
      class: Ce(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        He(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", qd, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), c("span", Yd, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ pe(Xd, [["__scopeId", "data-v-559361eb"]]), Jd = { class: "status-grid" }, Qd = { class: "status-grid__columns" }, Zd = { class: "status-grid__column" }, em = { class: "status-grid__title" }, tm = { class: "status-grid__column status-grid__column--right" }, sm = { class: "status-grid__title" }, om = {
  key: 0,
  class: "status-grid__footer"
}, nm = /* @__PURE__ */ fe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), c("div", Jd, [
      s("div", Qd, [
        s("div", Zd, [
          s("h4", em, m(e.leftTitle), 1),
          He(t.$slots, "left", {}, void 0)
        ]),
        s("div", tm, [
          s("h4", sm, m(e.rightTitle), 1),
          He(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), c("div", om, [
        He(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), am = /* @__PURE__ */ pe(nm, [["__scopeId", "data-v-73b7ba3f"]]), lm = {
  key: 0,
  class: "status-item__icon"
}, im = {
  key: 1,
  class: "status-item__count"
}, rm = { class: "status-item__label" }, cm = /* @__PURE__ */ fe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = F(() => `status-item--${t.variant}`);
    return (n, l) => (a(), c("div", {
      class: Ce(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), c("span", lm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), c("span", im, m(e.count), 1)) : y("", !0),
      s("span", rm, m(e.label), 1)
    ], 2));
  }
}), vs = /* @__PURE__ */ pe(cm, [["__scopeId", "data-v-6f929183"]]), um = { class: "issue-card__header" }, dm = { class: "issue-card__icon" }, mm = { class: "issue-card__title" }, fm = {
  key: 0,
  class: "issue-card__content"
}, vm = {
  key: 0,
  class: "issue-card__description"
}, pm = {
  key: 1,
  class: "issue-card__items"
}, gm = {
  key: 2,
  class: "issue-card__actions"
}, hm = /* @__PURE__ */ fe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = F(() => `issue-card--${t.severity}`);
    return (n, l) => (a(), c("div", {
      class: Ce(["issue-card", o.value])
    }, [
      s("div", um, [
        s("span", dm, m(e.icon), 1),
        s("h4", mm, m(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), c("div", fm, [
        e.description ? (a(), c("p", vm, m(e.description), 1)) : y("", !0),
        He(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), c("div", pm, [
        (a(!0), c(G, null, ge(e.items, (i, r) => (a(), c("div", {
          key: r,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), c("div", gm, [
        He(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ pe(hm, [["__scopeId", "data-v-df6aa348"]]), ym = ["type", "disabled"], wm = {
  key: 0,
  class: "spinner"
}, _m = /* @__PURE__ */ fe({
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
    return (t, o) => (a(), c("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ce(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", wm)) : y("", !0),
      e.loading ? y("", !0) : He(t.$slots, "default", { key: 1 }, void 0)
    ], 10, ym));
  }
}), ie = /* @__PURE__ */ pe(_m, [["__scopeId", "data-v-772abe47"]]), bm = { class: "empty-state" }, km = {
  key: 0,
  class: "empty-icon"
}, $m = { class: "empty-message" }, Cm = /* @__PURE__ */ fe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), c("div", bm, [
      e.icon ? (a(), c("div", km, m(e.icon), 1)) : y("", !0),
      s("p", $m, m(e.message), 1),
      e.actionLabel ? (a(), M(ie, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: h(() => [
          _(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), is = /* @__PURE__ */ pe(Cm, [["__scopeId", "data-v-4466284f"]]), xm = /* @__PURE__ */ fe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), c("span", {
      class: Ce(["detail-label"]),
      style: qt({ minWidth: e.minWidth })
    }, [
      He(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Pn = /* @__PURE__ */ pe(xm, [["__scopeId", "data-v-75e9eeb8"]]), Sm = /* @__PURE__ */ fe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), c("span", {
      class: Ce(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      He(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Aa = /* @__PURE__ */ pe(Sm, [["__scopeId", "data-v-2f186e4c"]]), Im = { class: "detail-row" }, Em = /* @__PURE__ */ fe({
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
    return (t, o) => (a(), c("div", Im, [
      $(Pn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          _(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), M(Aa, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          _(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : He(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), pt = /* @__PURE__ */ pe(Em, [["__scopeId", "data-v-ef15664a"]]), Tm = { class: "modal-header" }, Pm = { class: "modal-body" }, Mm = { class: "status-section" }, Rm = {
  key: 0,
  class: "status-section"
}, Dm = { class: "section-header-row" }, Lm = {
  key: 0,
  class: "workflow-group"
}, Nm = { class: "workflow-group-header" }, Am = { class: "workflow-group-title" }, Um = { class: "workflow-list" }, zm = { class: "workflow-name" }, Om = { class: "workflow-issue" }, Fm = {
  key: 1,
  class: "workflow-group"
}, Bm = { class: "workflow-group-header" }, Vm = { class: "workflow-group-title" }, Wm = { class: "workflow-list" }, Gm = { class: "workflow-name" }, Hm = { class: "workflow-issue" }, Km = {
  key: 2,
  class: "workflow-group"
}, jm = { class: "workflow-group-header" }, qm = { class: "workflow-group-title" }, Ym = { class: "workflow-list" }, Xm = { class: "workflow-name" }, Jm = {
  key: 3,
  class: "workflow-group"
}, Qm = { class: "workflow-group-header" }, Zm = { class: "workflow-group-title" }, ef = { class: "workflow-list" }, tf = { class: "workflow-name" }, sf = {
  key: 4,
  class: "workflow-group"
}, of = { class: "workflow-group-header" }, nf = { class: "workflow-group-title" }, af = { class: "workflow-list" }, lf = { class: "workflow-name" }, rf = {
  key: 5,
  class: "workflow-group"
}, cf = { class: "workflow-group-title" }, uf = { class: "expand-icon" }, df = {
  key: 0,
  class: "workflow-list"
}, mf = { class: "workflow-name" }, ff = {
  key: 1,
  class: "status-section"
}, vf = {
  key: 0,
  class: "change-group"
}, pf = { class: "change-group-header" }, gf = { class: "change-group-title" }, hf = { class: "change-list" }, yf = { class: "node-name" }, wf = {
  key: 0,
  class: "dev-badge"
}, _f = {
  key: 1,
  class: "change-group"
}, bf = { class: "change-group-header" }, kf = { class: "change-group-title" }, $f = { class: "change-list" }, Cf = { class: "node-name" }, xf = {
  key: 0,
  class: "dev-badge"
}, Sf = {
  key: 2,
  class: "change-group"
}, If = { class: "change-list" }, Ef = { class: "change-item" }, Tf = { class: "node-name" }, Pf = {
  key: 3,
  class: "change-group"
}, Mf = {
  key: 2,
  class: "status-section"
}, Rf = { class: "section-header-row" }, Df = {
  key: 0,
  class: "drift-item"
}, Lf = { class: "drift-list" }, Nf = {
  key: 0,
  class: "drift-list-more"
}, Af = {
  key: 1,
  class: "drift-item"
}, Uf = { class: "drift-list" }, zf = {
  key: 0,
  class: "drift-list-more"
}, Of = {
  key: 2,
  class: "drift-item"
}, Ff = { class: "drift-list" }, Bf = { class: "version-actual" }, Vf = { class: "version-expected" }, Wf = {
  key: 0,
  class: "drift-list-more"
}, Gf = {
  key: 3,
  class: "drift-item"
}, Hf = { class: "repair-action" }, Kf = {
  key: 3,
  class: "status-section"
}, jf = { class: "info-box" }, qf = { class: "drift-list" }, Yf = {
  key: 0,
  class: "drift-list-more"
}, Xf = {
  key: 4,
  class: "status-section"
}, Jf = { class: "warning-box" }, Qf = {
  key: 5,
  class: "empty-state-inline"
}, Zf = { class: "modal-actions" }, ev = /* @__PURE__ */ fe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = b(!1);
    st(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), Tt(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const n = F(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = F(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), i = F(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : k.filter((x) => {
        var I, N, P;
        const C = (P = (N = (I = t.status) == null ? void 0 : I.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : P.find((E) => E.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), r = F(() => {
      var w, g, k, x, C;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((k = t.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || (((x = t.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = t.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), u = F(() => {
      var g, k, x;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = F(() => {
      var w, g, k, x, C, I;
      return !r.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((k = t.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((I = (C = (x = t.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : I.length) ?? 0) === 0;
    }), f = F(() => {
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
      var k, x, C, I, N, P, E, H, K, O, S, T, A, re, Y, q, oe, Z, U, z, D, we;
      return a(), M(kt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (ve) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = ut(() => {
            }, ["stop"]))
          }, [
            s("div", Tm, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (ve) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", Pm, [
              s("div", Mm, [
                $(Ft, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    _("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                $(pt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              r.value ? (a(), c("div", Rm, [
                s("div", Dm, [
                  $(Ft, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      _("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (ve) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), c("div", Lm, [
                  s("div", Nm, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Am, "BROKEN (COMMITTED) (" + m(n.value.length) + ")", 1)
                  ]),
                  s("div", Um, [
                    (a(!0), c(G, null, ge(n.value, (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      s("span", zm, m(ve.name), 1),
                      s("span", Om, m(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), c("div", Fm, [
                  s("div", Bm, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Vm, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Wm, [
                    (a(!0), c(G, null, ge(l.value, (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      s("span", Gm, m(ve.name), 1),
                      s("span", Hm, m(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (k = e.status.workflows) == null ? void 0 : k.new) != null && x.length ? (a(), c("div", Km, [
                  s("div", jm, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", qm, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Ym, [
                    (a(!0), c(G, null, ge(e.status.workflows.new, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      s("span", Xm, m(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (C = e.status.workflows) == null ? void 0 : C.modified) != null && I.length ? (a(), c("div", Jm, [
                  s("div", Qm, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Zm, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", ef, [
                    (a(!0), c(G, null, ge(e.status.workflows.modified, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      s("span", tf, m(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = (N = e.status.workflows) == null ? void 0 : N.deleted) != null && P.length ? (a(), c("div", sf, [
                  s("div", of, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", nf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", af, [
                    (a(!0), c(G, null, ge(e.status.workflows.deleted, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      s("span", lf, m(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), c("div", rf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (ve) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", cf, "SYNCED (" + m(i.value.length) + ")", 1),
                    s("span", uf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), c("div", df, [
                    (a(!0), c(G, null, ge(i.value, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      s("span", mf, m(ve), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), c("div", ff, [
                $(Ft, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    _("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && H.length ? (a(), c("div", vf, [
                  s("div", pf, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", gf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", hf, [
                    (a(!0), c(G, null, ge(e.status.git_changes.nodes_added, (ve) => (a(), c("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      s("span", yf, m(v(ve)), 1),
                      p(ve) ? (a(), c("span", wf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (O = (K = e.status.git_changes) == null ? void 0 : K.nodes_removed) != null && O.length ? (a(), c("div", _f, [
                  s("div", bf, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", kf, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", $f, [
                    (a(!0), c(G, null, ge(e.status.git_changes.nodes_removed, (ve) => (a(), c("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      s("span", Cf, m(v(ve)), 1),
                      p(ve) ? (a(), c("span", xf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = e.status.git_changes) != null && S.workflow_changes ? (a(), c("div", Sf, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", If, [
                    s("div", Ef, [
                      s("span", Tf, m(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.has_other_changes ? (a(), c("div", Pf, [...g[21] || (g[21] = [
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
              (A = e.status.comparison) != null && A.is_synced ? y("", !0) : (a(), c("div", Mf, [
                s("div", Rf, [
                  $(Ft, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      _("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (ve) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Y = (re = e.status.comparison) == null ? void 0 : re.missing_nodes) != null && Y.length ? (a(), c("div", Df, [
                  $(pt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", Lf, [
                    (a(!0), c(G, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + m(ve), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), c("div", Nf, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (oe = (q = e.status.comparison) == null ? void 0 : q.extra_nodes) != null && oe.length ? (a(), c("div", Af, [
                  $(pt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Uf, [
                    (a(!0), c(G, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + m(ve), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), c("div", zf, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (U = (Z = e.status.comparison) == null ? void 0 : Z.version_mismatches) != null && U.length ? (a(), c("div", Of, [
                  $(pt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Ff, [
                    (a(!0), c(G, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      _(m(ve.name) + ": ", 1),
                      s("span", Bf, m(ve.actual), 1),
                      g[23] || (g[23] = _(" → ", -1)),
                      s("span", Vf, m(ve.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), c("div", Wf, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((z = e.status.comparison) == null ? void 0 : z.packages_in_sync) === !1 ? (a(), c("div", Gf, [
                  $(pt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Hf, [
                  $(ie, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (ve) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      _(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (we = (D = e.status.comparison) == null ? void 0 : D.disabled_nodes) != null && we.length ? (a(), c("div", Kf, [
                $(Ft, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    _("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", jf, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", qf, [
                  (a(!0), c(G, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (ve) => (a(), c("div", {
                    key: ve,
                    class: "drift-list-item"
                  }, " • " + m(ve), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), c("div", Yf, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), c("div", Xf, [
                $(Ft, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    _("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Jf, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), c("div", Qf, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Zf, [
              $(ie, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (ve) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
                  _(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), tv = /* @__PURE__ */ pe(ev, [["__scopeId", "data-v-e2b37122"]]), sv = { class: "health-section-header" }, ov = { class: "suggestions-content" }, nv = { class: "suggestions-text" }, av = { style: { "margin-top": "var(--cg-space-3)" } }, lv = {
  key: 1,
  class: "no-issues-text"
}, iv = /* @__PURE__ */ fe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = b(!1), i = b(!1);
    function r() {
      l.value = !0;
    }
    function u() {
      l.value = !1, f("view-workflows");
    }
    function d() {
      l.value = !1, f("view-nodes");
    }
    const f = o, v = b(!1), p = b(!1);
    function w() {
      p.value = !0, f("repair-environment");
    }
    function g() {
      p.value = !1;
    }
    function k() {
      l.value = !1;
    }
    const x = F(() => {
      const Z = n.status.workflows.analyzed || [], U = Z.filter(
        (z) => z.unresolved_models_count > 0 || z.ambiguous_models_count > 0
      );
      return U.length === 0 && n.status.missing_models_count > 0 ? Z.filter((z) => z.sync_state === "synced") : U;
    });
    function C() {
      const Z = x.value;
      Z.length !== 0 && (v.value = !0, f("repair-missing-models", Z.map((U) => U.name)));
    }
    function I() {
      v.value = !1;
    }
    t({ resetRepairingState: I, resetRepairingEnvironmentState: g, closeDetailModal: k });
    const N = F(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), P = F(() => n.status.has_changes), E = F(() => {
      const Z = n.status.git_changes;
      return Z.nodes_added.length > 0 || Z.nodes_removed.length > 0 || Z.workflow_changes;
    }), H = F(() => n.status.has_changes || N.value), K = F(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), O = F(() => n.status.git_changes.has_other_changes), S = F(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter((U) => U.status === "broken")) || [];
    }), T = F(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), A = F(() => S.value.length > 0), re = F(() => A.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = F(() => {
      const Z = [];
      return n.status.workflows.new.length > 0 && Z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Z.push(`${n.status.workflows.deleted.length} deleted`), Z.length > 0 ? `${Z.join(", ")} workflow${Z.length === 1 && !Z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), q = F(() => {
      var z, D;
      const Z = [], U = n.status.comparison;
      return (z = U.missing_nodes) != null && z.length && Z.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (D = U.extra_nodes) != null && D.length && Z.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), Z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Z.join(" and ")}.`;
    }), oe = F(() => {
      var z, D;
      const Z = [], U = n.status.comparison;
      return (z = U.extra_nodes) != null && z.length && (U.extra_nodes.slice(0, 3).forEach((we) => {
        Z.push(`Untracked: ${we}`);
      }), U.extra_nodes.length > 3 && Z.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (D = U.missing_nodes) != null && D.length && (U.missing_nodes.slice(0, 3).forEach((we) => {
        Z.push(`Missing: ${we}`);
      }), U.missing_nodes.length > 3 && Z.push(`...and ${U.missing_nodes.length - 3} more missing`)), Z;
    });
    return (Z, U) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), M(Qt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              $(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (z) => Z.$emit("start-setup"))
              }, {
                default: h(() => [...U[13] || (U[13] = [
                  _(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), M(Qt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              $(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (z) => Z.$emit("view-environments"))
              }, {
                default: h(() => [...U[14] || (U[14] = [
                  _(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), M(Qt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              $(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (z) => Z.$emit("create-environment"))
              }, {
                default: h(() => [...U[15] || (U[15] = [
                  _(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (z) => i.value = !0),
            onMouseleave: U[5] || (U[5] = (z) => i.value = !1)
          }, [
            s("div", sv, [
              $(Ft, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...U[16] || (U[16] = [
                  _(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              $(Qu, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), M(ie, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: r
                  }, {
                    default: h(() => [...U[17] || (U[17] = [
                      _(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            $(am, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, io({
              left: h(() => [
                e.status.workflows.new.length ? (a(), M(vs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), M(vs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), M(vs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                $(vs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), M(vs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), M(vs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), M(vs, {
                  key: 2,
                  icon: "●",
                  count: K.value,
                  label: K.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                O.value ? (a(), M(vs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                P.value && !E.value && !O.value ? (a(), M(vs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                P.value ? y("", !0) : (a(), M(vs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              H.value ? {
                name: "footer",
                fn: h(() => [
                  U[19] || (U[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", ov, [
                    s("span", nv, m(Y.value), 1),
                    $(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (z) => Z.$emit("commit-changes"))
                    }, {
                      default: h(() => [...U[18] || (U[18] = [
                        _(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (a(), M(Qt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              $(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (z) => Z.$emit("create-branch"))
              }, {
                default: h(() => [...U[20] || (U[20] = [
                  _(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", av, [
            $(Ft, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...U[21] || (U[21] = [
                _(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (a(), c(G, { key: 0 }, [
              S.value.length > 0 ? (a(), M(Qt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: S.value.map((z) => `${z.name} — ${z.issue_summary}`)
              }, {
                actions: h(() => [
                  $(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[22] || (U[22] = [
                      _(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              T.value.length > 0 ? (a(), M(Qt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  $(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[23] || (U[23] = [
                      _(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !A.value ? (a(), M(Qt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  $(ie, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: C
                  }, {
                    default: h(() => [
                      _(m(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  $(ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[24] || (U[24] = [
                      _(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), M(Qt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: q.value,
                items: oe.value
              }, {
                actions: h(() => [
                  $(ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r
                  }, {
                    default: h(() => [...U[25] || (U[25] = [
                      _(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  $(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (z) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...U[26] || (U[26] = [
                      _(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), M(Qt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  $(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (z) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...U[27] || (U[27] = [
                      _(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : H.value ? (a(), c("span", lv, "No issues")) : (a(), M(is, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      $(tv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: U[12] || (U[12] = (z) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), rv = /* @__PURE__ */ pe(iv, [["__scopeId", "data-v-55fcd77f"]]), cv = ["type", "value", "placeholder", "disabled"], uv = /* @__PURE__ */ fe({
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
    const n = e, l = o, i = b(null);
    function r(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return st(() => {
      n.autoFocus && i.value && i.value.focus();
    }), t({
      focus: () => {
        var u;
        return (u = i.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = i.value) == null ? void 0 : u.blur();
      }
    }), (u, d) => (a(), c("input", {
      ref_key: "inputRef",
      ref: i,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Ce(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: r,
      onKeyup: [
        d[0] || (d[0] = ss((f) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = ss((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (f) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (f) => u.$emit("blur"))
    }, null, 42, cv));
  }
}), Bn = /* @__PURE__ */ pe(uv, [["__scopeId", "data-v-0380d08f"]]), dv = { class: "branch-create-form" }, mv = { class: "form-actions" }, fv = /* @__PURE__ */ fe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = b(""), l = F(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function r() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), c("div", dv, [
      $(Bn, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => n.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: r
      }, null, 8, ["modelValue"]),
      s("div", mv, [
        $(ie, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: h(() => [...d[1] || (d[1] = [
            _(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        $(ie, {
          variant: "secondary",
          size: "sm",
          onClick: r
        }, {
          default: h(() => [...d[2] || (d[2] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), vv = /* @__PURE__ */ pe(fv, [["__scopeId", "data-v-7c500394"]]), pv = { class: "branch-list-item__indicator" }, gv = { class: "branch-list-item__name" }, hv = {
  key: 0,
  class: "branch-list-item__actions"
}, yv = {
  key: 0,
  class: "branch-list-item__current-label"
}, wv = /* @__PURE__ */ fe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: Ce(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, [
      s("span", pv, m(e.isCurrent ? "●" : "○"), 1),
      s("span", gv, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), c("div", hv, [
        He(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), c("span", yv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), _v = /* @__PURE__ */ pe(wv, [["__scopeId", "data-v-c6581a24"]]), bv = {
  key: 2,
  class: "branch-list"
}, kv = /* @__PURE__ */ fe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = b(!1);
    function l(r) {
      o("create", r), i();
    }
    function i() {
      n.value = !1;
    }
    return (r, u) => (a(), M(Lt, null, {
      header: h(() => [
        $(Nt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), M(ie, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (d) => n.value = !0)
            }, {
              default: h(() => [...u[1] || (u[1] = [
                _(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        n.value ? (a(), M(vv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), M(is, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), c("div", bv, [
          (a(!0), c(G, null, ge(e.branches, (d) => (a(), M(_v, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: h(() => [
              d.is_current ? y("", !0) : (a(), M(ie, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (f) => r.$emit("delete", d.name)
              }, {
                default: h(() => [...u[2] || (u[2] = [
                  _(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? y("", !0) : (a(), M(ie, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (f) => r.$emit("switch", d.name)
              }, {
                default: h(() => [...u[3] || (u[3] = [
                  _(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current"]))), 128))
        ]))
      ]),
      _: 1
    }));
  }
}), $v = /* @__PURE__ */ pe(kv, [["__scopeId", "data-v-86784ddd"]]), Cv = { class: "commit-list" }, xv = /* @__PURE__ */ fe({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), c("div", Cv, [
      He(t.$slots, "default", {}, void 0)
    ]));
  }
}), Sv = /* @__PURE__ */ pe(xv, [["__scopeId", "data-v-8c5ee761"]]), Iv = { class: "commit-hash" }, Ev = /* @__PURE__ */ fe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = F(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), c("span", Iv, m(o.value), 1));
  }
}), Er = /* @__PURE__ */ pe(Ev, [["__scopeId", "data-v-7c333cc6"]]), Tv = { class: "commit-message" }, Pv = { class: "commit-date" }, Mv = /* @__PURE__ */ fe({
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
    return (i, r) => (a(), c("div", {
      class: Ce(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      $(Er, { hash: e.hash }, null, 8, ["hash"]),
      s("span", Tv, m(e.message), 1),
      s("span", Pv, m(e.relativeDate), 1),
      i.$slots.actions ? (a(), c("div", {
        key: 0,
        class: "commit-actions",
        onClick: r[0] || (r[0] = ut(() => {
        }, ["stop"]))
      }, [
        He(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rv = /* @__PURE__ */ pe(Mv, [["__scopeId", "data-v-dd7c621b"]]), Dv = /* @__PURE__ */ fe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (t, o) => (a(), M(Lt, null, {
      header: h(() => [
        $(Nt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), M(is, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), M(Sv, { key: 1 }, {
          default: h(() => [
            (a(!0), c(G, null, ge(e.commits, (n) => (a(), M(Rv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => t.$emit("select", n)
            }, {
              actions: h(() => [
                $(ie, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (l) => t.$emit("checkout", n),
                  title: "Checkout this commit"
                }, {
                  default: h(() => [...o[0] || (o[0] = [
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
      _: 1
    }));
  }
}), Lv = /* @__PURE__ */ pe(Dv, [["__scopeId", "data-v-981c3c64"]]), at = Ks({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
function ll() {
  const e = F(() => at.hasWorkspace ? at.hasEnvironments ? at.isManaged ? "managed" : "unmanaged" : "empty_workspace" : "no_workspace");
  function t(r) {
    at.hasWorkspace = r, r || (at.hasEnvironments = !1, at.isManaged = !1);
  }
  function o(r) {
    at.hasEnvironments = r, r || (at.isManaged = !1), r && !at.hasWorkspace && (at.hasWorkspace = !0);
  }
  function n(r) {
    at.isManaged = r, r && (at.hasWorkspace = !0, at.hasEnvironments = !0);
  }
  function l(r) {
    at.hasLegacyManager = r;
  }
  function i(r) {
    switch (r) {
      case "no_workspace":
        at.hasWorkspace = !1, at.hasEnvironments = !1, at.isManaged = !1;
        break;
      case "empty_workspace":
        at.hasWorkspace = !0, at.hasEnvironments = !1, at.isManaged = !1;
        break;
      case "unmanaged":
        at.hasWorkspace = !0, at.hasEnvironments = !0, at.isManaged = !1;
        break;
      case "managed":
        at.hasWorkspace = !0, at.hasEnvironments = !0, at.isManaged = !0;
        break;
    }
  }
  return {
    state: at,
    setupState: e,
    setHasWorkspace: t,
    setHasEnvironments: o,
    setIsManaged: n,
    setHasLegacyManager: l,
    setPreset: i
  };
}
const si = /* @__PURE__ */ new Set(), oi = [
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
], Nv = {
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
}, Tr = [
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
], Av = [
  ...Tr,
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
], yn = [
  {
    name: "ComfyUI-Manager",
    installed: !0,
    registry_id: "comfyui-manager",
    repository: "https://github.com/ltdrdata/ComfyUI-Manager",
    version: "2.8.5",
    source: "registry",
    download_url: null,
    description: "ComfyUI extension for managing custom nodes",
    used_in_workflows: ["flux-dev-img2img.json", "sdxl-lightning.json", "flux-schnell.json"]
  },
  {
    name: "comfyui_flux",
    installed: !0,
    registry_id: "comfyui_flux",
    repository: "https://github.com/black-forest-labs/flux",
    version: "1.2.0",
    source: "registry",
    download_url: null,
    description: "FLUX.1 model support for ComfyUI",
    used_in_workflows: ["flux-dev-img2img.json", "flux-schnell.json"]
  },
  {
    name: "comfyui-controlnet-aux",
    installed: !0,
    registry_id: "comfyui-controlnet-aux",
    repository: "https://github.com/Fannovel16/comfyui_controlnet_aux",
    version: "1.0.3",
    source: "registry",
    download_url: null,
    description: "ControlNet auxiliary preprocessors",
    used_in_workflows: ["controlnet-pose.json"]
  },
  {
    name: "rgthree-comfy",
    installed: !1,
    registry_id: "rgthree-comfy",
    repository: "https://github.com/rgthree/rgthree-comfy",
    version: null,
    source: "registry",
    download_url: "https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip",
    description: "Power user nodes for ComfyUI workflows",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-image-saver",
    installed: !1,
    registry_id: "comfyui-image-saver",
    repository: "https://github.com/girish946/ComfyUI-Image-Saver",
    version: null,
    source: "registry",
    download_url: "https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip",
    description: "Advanced image saving options",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-impact-pack",
    installed: !0,
    registry_id: "comfyui-impact-pack",
    repository: "https://github.com/ltdrdata/ComfyUI-Impact-Pack",
    version: "4.12.1",
    source: "registry",
    download_url: null,
    description: "Custom nodes for ComfyUI impact pack",
    used_in_workflows: ["sd15-upscale.json"]
  },
  {
    name: "ComfyUI-KJNodes",
    installed: !0,
    registry_id: "comfyui-kjnodes",
    repository: "https://github.com/kijai/ComfyUI-KJNodes",
    version: "1.1.2",
    source: "registry",
    download_url: null,
    description: "KJ utility nodes collection",
    used_in_workflows: []
  },
  {
    name: "custom-dev-nodes",
    installed: !0,
    registry_id: void 0,
    repository: void 0,
    version: "0.1.0-dev",
    source: "development",
    download_url: null,
    description: "Local development nodes",
    used_in_workflows: []
  },
  {
    name: "comfyui-easy-use",
    installed: !1,
    registry_id: "comfyui-easy-use",
    repository: "https://github.com/yolain/ComfyUI-Easy-Use",
    version: null,
    source: "registry",
    download_url: "https://github.com/yolain/ComfyUI-Easy-Use/archive/refs/heads/main.zip",
    description: "Simplified workflow nodes",
    used_in_workflows: ["sd15-upscale.json"]
  }
], Uv = [
  {
    hash: "e719c9c",
    message: "refactor: Improve UI consistency and fix display issues",
    author: "Alex Katz",
    date: "2024-01-15T10:30:00Z",
    date_relative: "5 days ago"
  },
  {
    hash: "781a023",
    message: "refactor: Remove multi-theme system, commit to Phosphor Terminal aesthetic",
    author: "Alex Katz",
    date: "2024-01-14T15:20:00Z",
    date_relative: "6 days ago"
  },
  {
    hash: "19f7898",
    message: "Merge branch 'design/phosphor' into feature/comfygit-ui",
    author: "Alex Katz",
    date: "2024-01-13T09:15:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "426fe3c",
    message: "Merge branch 'feature/comfygit-ui' into main",
    author: "Alex Katz",
    date: "2024-01-12T14:45:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "8c21deb",
    message: "Add initial agpl 3 license",
    author: "Alex Katz",
    date: "2024-01-10T11:00:00Z",
    date_relative: "2 weeks ago"
  }
], wn = [
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.core.environment",
    level: "INFO",
    func: "sync",
    line: "306",
    message: "Restored workflows from .cec/"
  },
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.managers.workflow_manager",
    level: "INFO",
    func: "restore_from_cec",
    line: "554",
    message: "Restored workflow 'default' to ComfyUI"
  },
  {
    timestamp: "2025-11-23 13:07:40,286",
    name: "comfygit_core.core.environment",
    level: "DEBUG",
    func: "sync",
    line: "399",
    message: "User content symlinks configured"
  },
  {
    timestamp: "2025-11-23 13:07:42,130",
    name: "comfygit_core.managers.workflow_manager",
    level: "DEBUG",
    func: "resolve_workflow",
    line: "884",
    message: "Resolved node: ResolvedNodePackage(package='comfyui-basic-math', node='FloatInput', match=exact, confidence=1.00, 3 version(s), rank=1)"
  },
  {
    timestamp: "2025-11-23 13:07:42,157",
    name: "comfygit.command",
    level: "INFO",
    func: "log_command",
    line: "180",
    message: "Command 'env status' completed successfully"
  }
], Le = {
  // Environment Management
  getEnvironments: async () => (await Ue(300), [
    {
      name: "production",
      is_current: !0,
      path: "~/comfygit/environments/production",
      workflow_count: 18,
      node_count: 45,
      model_count: 3,
      current_branch: "main",
      created_at: "2024-01-01T00:00:00Z",
      last_used: (/* @__PURE__ */ new Date()).toISOString(),
      last_commit: "e719c9c",
      last_commit_date: "2024-01-15T10:30:00Z"
    },
    {
      name: "testing",
      is_current: !1,
      path: "~/comfygit/environments/testing",
      workflow_count: 12,
      node_count: 32,
      model_count: 2,
      current_branch: "develop",
      created_at: "2024-01-05T00:00:00Z",
      last_used: new Date(Date.now() - 864e5 * 2).toISOString(),
      // 2 days ago
      last_commit: "426fe3c",
      last_commit_date: "2024-01-12T14:45:00Z"
    },
    {
      name: "experimental",
      is_current: !1,
      path: "~/comfygit/environments/experimental",
      workflow_count: 5,
      node_count: 18,
      model_count: 1,
      current_branch: "feature/new-nodes",
      created_at: "2024-01-10T00:00:00Z",
      last_used: new Date(Date.now() - 864e5).toISOString(),
      // 1 day ago
      last_commit: "781a023",
      last_commit_date: "2024-01-14T15:20:00Z"
    }
  ]),
  switchEnvironment: async (e) => {
    await Ue(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, t, o) => {
    await Ue(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${t}`, o ? `cloned from ${o}` : "");
  },
  deleteEnvironment: async (e) => {
    await Ue(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await Ue(400), oi),
  getWorkflowDetails: async (e) => (await Ue(300), Nv[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await Ue(800), {
    workflow_name: e,
    // Nodes resolved with confidence scores
    nodes_resolved: [
      {
        node_type: "ComfyUI-Flux",
        match_type: "exact",
        package_id: "comfyui_flux",
        match_confidence: 1,
        is_optional: !1,
        rank: 5,
        // Registry popularity
        versions: ["1.2.0", "1.1.0", "1.0.0"]
      }
    ],
    // Nodes that need installation
    nodes_unresolved: [
      {
        node_type: "RgthreeNodeSet",
        possible_matches: [
          {
            package_id: "rgthree-comfy",
            match_type: "fuzzy",
            match_confidence: 0.85,
            rank: 12
          }
        ]
      },
      {
        node_type: "ImageSaver",
        possible_matches: [
          {
            package_id: "comfyui-image-saver",
            match_type: "type_only",
            match_confidence: 0.7,
            rank: 45
          }
        ]
      }
    ],
    nodes_ambiguous: [],
    // Multiple equally-matched candidates
    // Models resolved
    models_resolved: [
      {
        workflow: e,
        filename: "flux1-dev-fp8.safetensors",
        resolved_model: {
          hash: "a11e2e7b",
          sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      },
      {
        workflow: e,
        filename: "clip_l.safetensors",
        resolved_model: {
          hash: "3e9f12a7",
          sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      }
    ],
    // Models that need downloading
    models_unresolved: [
      {
        workflow: e,
        filename: "flux_vae.safetensors",
        node_type: "VAELoader",
        node_id: "10",
        expected_category: "vae"
      }
    ],
    models_ambiguous: [],
    // Multiple models match same name
    // Download intents (models queued for download)
    download_results: [
      {
        model: "flux_vae.safetensors",
        status: "pending",
        source_url: null,
        // No source configured
        can_download: !1,
        estimated_size_mb: 335
      }
    ],
    // Summary fields
    has_issues: !0,
    // Has unresolved nodes and models
    has_download_intents: !0,
    summary: "Missing: 2 nodes, 1 model",
    // Installation plan preview
    nodes_to_install: ["rgthree-comfy", "comfyui-image-saver"],
    models_to_download: ["flux_vae.safetensors"],
    estimated_size_mb: 335,
    estimated_time_seconds: 120
  }),
  installWorkflowDeps: async (e, t, o) => {
    await Ue(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${t}, models=${o}`);
  },
  setModelImportance: async (e, t, o) => {
    await Ue(200), console.log(`[MOCK] Setting ${t} importance to ${o} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await Ue(350), Tr),
  getWorkspaceModels: async () => (await Ue(400), Av),
  getModelDetails: async (e) => (await Ue(200), {
    filename: e,
    hash: "762871a9ab79bfa2",
    blake3: null,
    sha256: null,
    size: 173e8,
    category: "checkpoints",
    relative_path: `checkpoints/${e}`,
    last_seen: "2025-11-11 23:34:23",
    locations: [
      { path: `/workspace/models/checkpoints/${e}`, modified: "2024-08-03 13:16:22" }
    ],
    sources: []
  }),
  updateModelSource: async (e, t) => {
    await Ue(300), si.add(e), console.log(`[MOCK] Added source for ${e}: ${t}`);
  },
  deleteModel: async (e) => {
    await Ue(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await Ue(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Node Management
  getNodes: async () => {
    await Ue(350);
    const e = yn.filter((o) => o.installed), t = yn.filter((o) => !o.installed);
    return {
      nodes: yn,
      total_count: yn.length,
      installed_count: e.length,
      missing_count: t.length
    };
  },
  installNode: async (e) => {
    await Ue(2500), console.log(`[MOCK] Installing node: ${e}`);
  },
  updateNode: async (e) => {
    await Ue(2e3), console.log(`[MOCK] Updating node: ${e}`);
  },
  uninstallNode: async (e) => {
    await Ue(1e3), console.log(`[MOCK] Uninstalling node: ${e}`);
  },
  // Settings & Debug
  getConfig: async () => (await Ue(200), {
    workspace_path: "/workspace",
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0,
    confirm_destructive: !0,
    comfyui_extra_args: []
  }),
  updateConfig: async (e) => {
    await Ue(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, t) => (await Ue(250), (e ? wn.filter((n) => n.level === e) : wn).slice(0, t || 100)),
  getWorkspaceLogs: async (e, t) => {
    await Ue(300);
    const o = [...wn, ...wn.map((l) => ({
      ...l,
      name: "comfygit.workspace"
    }))];
    return (e ? o.filter((l) => l.level === e) : o).slice(0, t || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   *
   * To test detached HEAD warning:
   * - Set branch: null
   * - Set is_detached_head: true
   */
  getStatus: async () => {
    await Ue(400);
    const { state: e } = ll();
    return {
      environment: "production",
      branch: "main",
      // Set to null to test detached HEAD
      is_detached_head: !1,
      // Set to true to test detached HEAD warning
      is_synced: !1,
      has_changes: !1,
      workflows: {
        new: ["img2img-basic.json", "controlnet-pose.json"],
        modified: ["flux-schnell.json"],
        deleted: [],
        synced: oi.filter((t) => t.status === "synced").map((t) => t.name),
        total: 18,
        analyzed: [
          {
            name: "img2img-basic.json",
            sync_state: "new",
            status: "new",
            has_issues: !1,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "No issues",
            node_count: 8,
            model_count: 2
          },
          {
            name: "controlnet-pose.json",
            sync_state: "new",
            status: "broken",
            has_issues: !0,
            uninstalled_nodes: 1,
            unresolved_nodes_count: 1,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "1 unresolved node",
            node_count: 12,
            model_count: 3
          },
          {
            name: "flux-schnell.json",
            sync_state: "modified",
            status: "modified",
            has_issues: !1,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "No issues",
            node_count: 15,
            model_count: 4
          },
          {
            name: "sdxl-lightning.json",
            sync_state: "synced",
            status: "broken",
            has_issues: !0,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 2,
            unresolved_models_count: 1,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "2 unresolved nodes, 1 missing model",
            node_count: 20,
            model_count: 5,
            has_category_mismatch_issues: !1,
            models_with_category_mismatch_count: 0
          },
          // Category mismatch example - LoRA in wrong directory
          {
            name: "lora-wrong-dir.json",
            sync_state: "synced",
            status: "broken",
            has_issues: !0,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "1 model in wrong directory",
            node_count: 8,
            model_count: 2,
            has_category_mismatch_issues: !0,
            models_with_category_mismatch_count: 1
          },
          {
            name: "flux-dev-img2img.json",
            sync_state: "synced",
            status: "synced",
            has_issues: !1,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            issue_summary: "No issues",
            node_count: 18,
            model_count: 3
          }
        ]
      },
      git_changes: {
        nodes_added: [],
        nodes_removed: [],
        workflow_changes: !1,
        has_other_changes: !1
      },
      comparison: {
        is_synced: !1,
        missing_nodes: ["rgthree-comfy", "comfyui-image-saver"],
        extra_nodes: []
      },
      missing_models_count: 1,
      has_legacy_manager: e.hasLegacyManager
    };
  },
  getCommitHistory: async (e = 10) => (await Ue(300), Uv.slice(0, e)),
  getBranches: async () => (await Ue(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (e) => {
    await Ue(300), console.log(`[MOCK] Deleting branch: ${e}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await Ue(300), {
    remotes: [
      {
        name: "origin",
        fetch_url: "https://github.com/comfyhub/comfygit-demo.git",
        push_url: "https://github.com/comfyhub/comfygit-demo.git",
        is_default: !0
      },
      {
        name: "upstream",
        fetch_url: "https://github.com/comfyhub/comfygit.git",
        push_url: "https://github.com/comfyhub/comfygit.git",
        is_default: !1
      }
    ],
    current_branch_tracking: {
      remote: "origin",
      branch: "main"
    }
  }),
  addRemote: async (e, t) => {
    await Ue(400), console.log(`[MOCK] Adding remote: ${e} -> ${t}`);
  },
  removeRemote: async (e) => {
    await Ue(350), console.log(`[MOCK] Removing remote: ${e}`);
  },
  updateRemoteUrl: async (e, t, o) => {
    await Ue(400), console.log(`[MOCK] Updating remote ${e}: ${t}${o ? ` (push: ${o})` : ""}`);
  },
  fetchRemote: async (e) => {
    await Ue(1500), console.log(`[MOCK] Fetching from remote: ${e}`);
  },
  getRemoteSyncStatus: async (e) => (await Ue(300), {
    remote: e,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  }),
  /**
   * Get Pull Preview - Returns preview with optional workflow conflicts (V2)
   * GET /v2/comfygit/remotes/{name}/pull-preview
   *
   * Test scenarios by remote name:
   * - "origin" - Returns preview WITH workflow conflicts (default for testing)
   * - "upstream" - Returns preview WITHOUT conflicts (clean pull)
   * - Any other - Returns preview with workflow conflicts
   */
  getPullPreview: async (e) => {
    await Ue(500);
    const t = {
      remote: e,
      branch: "main",
      commits_behind: 3,
      commits: [
        { hash: "abc1234", short_hash: "abc1234", message: "Add new workflow features", date: "2024-01-15T10:30:00Z", date_relative: "2 hours ago" },
        { hash: "def5678", short_hash: "def5678", message: "Update node dependencies", date: "2024-01-15T09:15:00Z", date_relative: "3 hours ago" },
        { hash: "ghi9012", short_hash: "ghi9012", message: "Fix model path handling", date: "2024-01-15T08:00:00Z", date_relative: "4 hours ago" }
      ],
      changes: {
        workflows: {
          added: ["new-workflow.json"],
          modified: ["flux-schnell.json", "sdxl-turbo.json"],
          deleted: []
        },
        nodes: {
          to_install: ["comfyui-animatediff", "comfyui-controlnet-aux"],
          to_remove: []
        },
        models: {
          referenced: ["flux1-dev.safetensors", "sdxl_base.safetensors"],
          count: 2
        }
      },
      has_uncommitted_changes: !1,
      can_pull: !0,
      block_reason: null
    };
    return e !== "upstream" ? {
      ...t,
      has_conflicts: !0,
      workflow_conflicts: [
        {
          name: "flux-schnell",
          conflict_type: "both_modified",
          base_hash: "abc12345",
          target_hash: "def67890"
        },
        {
          name: "sdxl-turbo",
          conflict_type: "both_modified",
          base_hash: "11111111",
          target_hash: "22222222"
        }
      ]
    } : {
      ...t,
      has_conflicts: !1,
      workflow_conflicts: []
    };
  },
  /**
   * Validate Merge - Check node version compatibility after workflow resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/validate-merge
   */
  validateMerge: async (e, t) => {
    await Ue(400);
    const o = t.some((i) => i.resolution === "take_base"), n = t.some((i) => i.resolution === "take_target");
    return o && n ? {
      is_compatible: !1,
      node_conflicts: [
        {
          node_id: "rgthree-comfy",
          node_name: "rgthree's ComfyUI Nodes",
          base_version: "2.0.0",
          target_version: "1.5.0",
          chosen_version: "1.5.0",
          chosen_reason: "Required by sdxl-turbo (theirs)",
          affected_workflows: [
            { name: "flux-schnell", source: "base", required_version: "2.0.0" },
            { name: "sdxl-turbo", source: "target", required_version: "1.5.0" }
          ]
        }
      ],
      warnings: []
    } : {
      is_compatible: !0,
      node_conflicts: [],
      warnings: n ? ["Model 'flux-dev.safetensors' has no download source"] : []
    };
  },
  /**
   * Pull from Remote - Execute pull with optional conflict resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/pull
   */
  pullFromRemote: async (e, t) => (await Ue(1500), console.log(`[MOCK] Pulling from ${e} with options:`, t), t.resolutions && Math.random() < 0.1 ? {
    status: "error",
    pull_output: "",
    sync_result: { nodes_installed: [], nodes_removed: [], models_queued: 0, errors: [] },
    rolled_back: !0,
    error: "Simulated sync failure - merge rolled back"
  } : {
    status: "success",
    pull_output: "Already up to date.",
    sync_result: {
      nodes_installed: t.resolutions ? ["comfyui-animatediff"] : [],
      nodes_removed: [],
      models_queued: 0,
      errors: []
    },
    rolled_back: !1,
    message: "Pull completed successfully"
  }),
  /**
   * Get Push Preview
   * GET /v2/comfygit/remotes/{name}/push-preview
   */
  getPushPreview: async (e) => (await Ue(400), {
    remote: e,
    branch: "main",
    commits_ahead: 2,
    commits: [
      { hash: "xyz1234", short_hash: "xyz1234", message: "Local workflow changes", date: "2024-01-15T11:00:00Z", date_relative: "1 hour ago" },
      { hash: "uvw5678", short_hash: "uvw5678", message: "Add new node configuration", date: "2024-01-15T10:45:00Z", date_relative: "1.5 hours ago" }
    ],
    has_uncommitted_changes: !1,
    remote_has_new_commits: !1,
    can_push: !0,
    needs_force: !1,
    block_reason: null,
    is_first_push: !1
  }),
  /**
   * Push to Remote
   * POST /v2/comfygit/remotes/{name}/push
   */
  pushToRemote: async (e, t) => (await Ue(1e3), console.log(`[MOCK] Pushing to ${e} with options:`, t), {
    status: "success",
    push_output: "Everything up-to-date",
    commits_pushed: 2,
    message: "Push completed successfully"
  }),
  // =============================================================================
  // NEW: Interactive Workflow Resolution Endpoints
  // =============================================================================
  /**
   * Analyze Workflow - Returns full resolution analysis
   * POST /v2/comfygit/workflow/{name}/analyze
   *
   * Test scenarios by using different workflow names:
   * - "test-unresolved-nodes.json" - Only unresolved nodes
   * - "test-unresolved-models.json" - Only unresolved models
   * - "test-ambiguous-nodes.json" - Multiple node options to choose from
   * - "test-ambiguous-models.json" - Multiple model options to choose from
   * - "test-mixed-complex.json" - Complex scenario with all types
   * - "test-all-resolved.json" - Everything perfect, no user input needed
   * - Default: Returns a realistic mixed scenario
   */
  analyzeWorkflow: async (e) => (await Ue(600), {
    // Scenario 1: Only unresolved nodes (no matching packages found)
    "test-unresolved-nodes.json": {
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "CustomUpscaler", workflow: e, node_id: "node1" },
            reason: "not_found_in_registry"
          },
          {
            reference: { node_type: "MagicNode", workflow: e, node_id: "node2" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: e, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 2,
        nodes_ambiguous: 0,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 2: Only unresolved models (not found in index)
    "test-unresolved-models.json": {
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "LoadCheckpoint", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [
          {
            reference: {
              workflow: e,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "super_rare_model.safetensors"
            },
            reason: "not_found_in_index"
          },
          {
            reference: {
              workflow: e,
              node_id: "node4",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "custom_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: []
      },
      stats: {
        total_nodes: 1,
        total_models: 2,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 2,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 3: Ambiguous nodes (multiple matching packages)
    "test-ambiguous-nodes.json": {
      workflow: e,
      nodes: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: { node_type: "FluxLoader", workflow: e, node_id: "node1" },
            options: [
              {
                package: { package_id: "comfyui-flux-official", title: "FLUX Official Nodes" },
                match_confidence: 0.95,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-community-nodes", title: "FLUX Community Pack" },
                match_confidence: 0.9,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "advanced-flux-toolkit", title: "Advanced FLUX Toolkit" },
                match_confidence: 0.85,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          },
          {
            reference: { node_type: "ImageEnhancer", workflow: e, node_id: "node2" },
            options: [
              {
                package: { package_id: "comfyui-image-enhance", title: "Image Enhancement Suite" },
                match_confidence: 0.88,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "ultimate-image-toolkit", title: "Ultimate Image Toolkit" },
                match_confidence: 0.82,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: e, node_id: "5", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "def456", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 2,
        total_models: 1,
        nodes_resolved: 0,
        nodes_unresolved: 0,
        nodes_ambiguous: 2,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 4: Ambiguous models (multiple files match the name)
    "test-ambiguous-models.json": {
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "CheckpointLoader", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: {
              workflow: e,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl_model.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "aaa111",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.95,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "bbb222",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.85,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_turbo.safetensors",
                  hash: "ccc333",
                  size: 67e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_turbo.safetensors"
                },
                match_confidence: 0.75,
                match_type: "fuzzy",
                has_download_source: !1
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 1,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 0,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 5: Complex mixed scenario (everything)
    "test-mixed-complex.json": {
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "UltraUpscaler", workflow: e, node_id: "node1" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: [
          {
            reference: { node_type: "FluxSampler", workflow: e, node_id: "node2" },
            options: [
              {
                package: { package_id: "flux-samplers-pro", title: "FLUX Samplers Pro" },
                match_confidence: 0.92,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-toolkit", title: "FLUX Toolkit" },
                match_confidence: 0.87,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: e, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [
          {
            reference: {
              workflow: e,
              node_id: "node5",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "flux_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: [
          {
            reference: {
              workflow: e,
              node_id: "node6",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "ddd444",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.9,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "eee555",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.8,
                match_type: "fuzzy",
                has_download_source: !0
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 3,
        total_models: 3,
        nodes_resolved: 1,
        nodes_unresolved: 1,
        nodes_ambiguous: 1,
        models_resolved: 1,
        models_unresolved: 1,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 6: All resolved (perfect workflow, no user input needed)
    "test-all-resolved.json": {
      workflow: e,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "CLIPTextEncode", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "VAEDecode", workflow: e },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: e, node_id: "1", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "fff666", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          },
          {
            reference: { workflow: e, node_id: "2", node_type: "VAELoader", widget_name: "vae", widget_value: "sdxl_vae.safetensors" },
            model: { filename: "sdxl_vae.safetensors", hash: "ggg777", size: 335e6, category: "vae", relative_path: "vae/sdxl_vae.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 2,
        nodes_resolved: 3,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 2,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !1
      }
    }
  }[e] || {
    workflow: e,
    nodes: {
      resolved: [
        {
          reference: { node_type: "KSampler", workflow: e },
          package: { package_id: "comfyui-core", title: "ComfyUI Core" },
          match_confidence: 1,
          match_type: "builtin",
          is_installed: !0
        }
      ],
      unresolved: [
        {
          reference: { node_type: "CustomNode1", workflow: e, node_id: "node1" },
          reason: "not_found_in_registry"
        }
      ],
      ambiguous: [
        {
          reference: { node_type: "FluxNode", workflow: e, node_id: "node2" },
          options: [
            {
              package: { package_id: "flux-package-a", title: "FLUX Package A" },
              match_confidence: 0.92,
              match_type: "fuzzy",
              is_installed: !1
            },
            {
              package: { package_id: "flux-package-b", title: "FLUX Package B" },
              match_confidence: 0.85,
              match_type: "fuzzy",
              is_installed: !1
            }
          ]
        }
      ]
    },
    models: {
      resolved: [],
      unresolved: [
        {
          reference: {
            workflow: e,
            node_id: "node3",
            node_type: "CheckpointLoader",
            widget_name: "model",
            widget_value: "test_model.safetensors"
          },
          reason: "not_found_in_index"
        }
      ],
      ambiguous: []
    },
    stats: {
      total_nodes: 3,
      total_models: 1,
      nodes_resolved: 1,
      nodes_unresolved: 1,
      nodes_ambiguous: 1,
      models_resolved: 0,
      models_unresolved: 1,
      models_ambiguous: 0,
      needs_user_input: !0
    }
  }),
  /**
   * Apply Resolution - Apply user choices and return installation plan
   * POST /v2/comfygit/workflow/{name}/apply-resolution
   */
  applyResolution: async (e, t, o) => {
    await Ue(800);
    const n = [], l = [];
    return t.forEach((i, r) => {
      i.action === "install" && i.package_id && n.push(i.package_id);
    }), o.forEach((i, r) => {
      i.action === "download" && i.url ? l.push({
        filename: r,
        url: i.url,
        size: 65e8,
        target_path: i.target_path || `models/${r}`
      }) : i.action === "select" && i.selected_model && console.log(`[MOCK] Selected existing model: ${i.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: n,
      models_to_download: l,
      estimated_time_seconds: n.length * 30 + l.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (e, t = 10) => {
    await Ue(400);
    const o = [
      {
        package_id: "comfyui-flux-official",
        match_confidence: 0.95,
        match_type: "fuzzy",
        description: "Official FLUX model support for ComfyUI with optimized samplers",
        repository: "https://github.com/black-forest-labs/flux-comfy",
        is_installed: !1
      },
      {
        package_id: "flux-advanced-toolkit",
        match_confidence: 0.88,
        match_type: "fuzzy",
        description: "Advanced FLUX tools including custom schedulers and samplers",
        repository: "https://github.com/community/flux-toolkit",
        is_installed: !1
      },
      {
        package_id: "comfyui-upscaler-pack",
        match_confidence: 0.82,
        match_type: "fuzzy",
        description: "Collection of upscaling nodes with various models",
        repository: "https://github.com/upscaler/comfyui-pack",
        is_installed: !1
      },
      {
        package_id: "ultimate-image-tools",
        match_confidence: 0.75,
        match_type: "partial",
        description: "Ultimate image processing toolkit for ComfyUI",
        repository: "https://github.com/tools/ultimate-image",
        is_installed: !0
      },
      {
        package_id: "comfyui-controlnet-aux",
        match_confidence: 0.7,
        match_type: "partial",
        description: "Auxiliary ControlNet preprocessors",
        repository: "https://github.com/fannovel16/controlnet-aux",
        is_installed: !0
      }
    ];
    return {
      results: o.slice(0, t),
      total: o.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (e, t = 10) => {
    await Ue(400);
    const o = [
      {
        filename: "flux1-dev-fp8.safetensors",
        hash: "abc123def456",
        size: 11725e6,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/flux1-dev-fp8.safetensors",
        match_confidence: 0.95
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "def456abc789",
        size: 65e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        match_confidence: 0.9
      },
      {
        filename: "sdxl_refiner_1.0.safetensors",
        hash: "ghi789jkl012",
        size: 61e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_refiner_1.0.safetensors",
        match_confidence: 0.85
      },
      {
        filename: "flux_vae.safetensors",
        hash: "mno345pqr678",
        size: 335e6,
        category: "vae",
        has_download_source: !1,
        relative_path: "vae/flux_vae.safetensors",
        match_confidence: 0.8
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "stu901vwx234",
        size: 145e7,
        category: "controlnet",
        has_download_source: !0,
        relative_path: "controlnet/controlnet_openpose.safetensors",
        match_confidence: 0.75
      }
    ];
    return {
      results: o.slice(0, t),
      total: o.length
    };
  },
  // Export Validation - shows warnings for models without sources
  validateExport: async () => {
    await Ue(400);
    const t = [
      {
        filename: "sd_xl_base_1.0.safetensors",
        hash: "abc123def456",
        workflows: ["flux-dev-img2img.json", "sdxl-lightning.json"]
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "xyz789ghi012",
        workflows: ["pose-to-image.json"]
      },
      {
        filename: "custom_lora_v2.safetensors",
        hash: "lmn345opq678",
        workflows: ["flux-dev-img2img.json"]
      },
      {
        filename: "vae_ft_mse.pt",
        hash: "rst901uvw234",
        workflows: ["sdxl-lightning.json", "pose-to-image.json", "upscale-workflow.json"]
      }
    ].filter(
      (o) => !si.has(o.hash)
    );
    return {
      can_export: !0,
      blocking_issues: [],
      warnings: {
        models_without_sources: t
      }
    };
  },
  // Mock for blocked export (call this variant to test blocked UI)
  validateExportBlocked: async () => (await Ue(400), {
    can_export: !1,
    blocking_issues: [
      {
        type: "uncommitted_workflows",
        message: "Cannot export with uncommitted workflow changes",
        details: ["new-workflow.json", "modified-portrait.json", "another-change.json"]
      },
      {
        type: "unresolved_issues",
        message: "Cannot export - workflows have unresolved issues",
        details: []
      }
    ],
    warnings: {
      models_without_sources: []
    }
  }),
  exportEnvWithForce: async (e) => {
    await Ue(800);
    const t = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      path: e || `/home/user/exports/production_export_${t}.tar.gz`,
      models_without_sources: 4
    };
  },
  // =============================================================================
  // Deploy Endpoints
  // =============================================================================
  getDeploySummary: async () => (await Ue(300), {
    comfyui_version: "v0.3.48",
    node_count: 15,
    model_count: 8,
    models_with_sources: 6,
    models_without_sources: 2,
    workflow_count: 3,
    estimated_package_size_mb: 45.2
  }),
  testRunPodConnection: async (e, t) => (await Ue(800), e.startsWith("rp_") ? {
    status: "success",
    message: "Connected to RunPod",
    credit_balance: 25.5
  } : {
    status: "error",
    message: 'Invalid API key format. Keys should start with "rp_"'
  }),
  getDataCenters: async () => (await Ue(300), {
    data_centers: [
      { id: "US-IL-1", name: "United States", available: !0 },
      { id: "EU-CZ-1", name: "Europe (Czech)", available: !0 },
      { id: "EU-RO-1", name: "Europe (Romania)", available: !0 },
      { id: "CA-MTL-1", name: "Canada (Montreal)", available: !0 }
    ]
  }),
  getNetworkVolumes: async () => (await Ue(400), {
    volumes: [
      {
        id: "5aio30csvw",
        name: "comfygit_workspace",
        size_gb: 100,
        data_center_id: "US-IL-1",
        data_center_name: "United States"
      },
      {
        id: "abc123xyz",
        name: "my-sd-models",
        size_gb: 200,
        data_center_id: "EU-CZ-1",
        data_center_name: "Europe"
      }
    ]
  }),
  getRunPodGpuTypes: async () => (await Ue(400), {
    gpu_types: [
      { id: "NVIDIA RTX 4090", displayName: "RTX 4090", memoryInGb: 24, securePrice: 0.44, communityPrice: 0.34, secureSpotPrice: 0.22, communitySpotPrice: 0.17, stockStatus: "HIGH", available: !0 },
      { id: "NVIDIA RTX 3090", displayName: "RTX 3090", memoryInGb: 24, securePrice: 0.22, communityPrice: 0.16, secureSpotPrice: 0.11, communitySpotPrice: 0.08, stockStatus: "MEDIUM", available: !0 },
      { id: "NVIDIA A100 80GB", displayName: "A100 80GB", memoryInGb: 80, securePrice: 1.89, communityPrice: 1.49, secureSpotPrice: 0.95, communitySpotPrice: 0.75, stockStatus: "LOW", available: !0 },
      { id: "NVIDIA RTX A6000", displayName: "RTX A6000", memoryInGb: 48, securePrice: 0.79, communityPrice: 0.59, secureSpotPrice: 0.4, communitySpotPrice: 0.3, stockStatus: null, available: !1 }
    ]
  }),
  deployToRunPod: async (e) => {
    await Ue(2e3), console.log("[MOCK] Deploying to RunPod:", e);
    const t = "mock_pod_" + Date.now();
    return {
      status: "success",
      pod_id: t,
      deployment_id: `deploy-env-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}-${t.slice(-6)}`,
      message: "Pod created. Starting ComfyUI setup..."
    };
  },
  getDeploymentStatus: async (e) => {
    await Ue(500), e.split("").reduce((l, i) => l + i.charCodeAt(0), 0);
    const t = ["STARTING_POD", "SETTING_UP", "READY"], o = Math.min(Math.floor(Date.now() / 1e4 % 3), 2), n = t[o];
    return {
      phase: n,
      phase_detail: n === "STARTING_POD" ? "Waiting for pod to start..." : n === "SETTING_UP" ? "Installing ComfyGit and importing environment..." : "ComfyUI is running",
      comfyui_url: n === "READY" ? `https://${e}-8188.proxy.runpod.net` : null,
      console_url: `https://www.runpod.io/console/pods/${e}`
    };
  },
  getRunPodPods: async () => (await Ue(500), {
    pods: [
      {
        id: "mock_abc123",
        name: "my-comfyui-deploy",
        gpu_type: "NVIDIA RTX 4090",
        gpu_count: 1,
        status: "RUNNING",
        created_at: new Date(Date.now() - 36e5).toISOString(),
        cost_per_hour: 0.44,
        uptime_seconds: 3600,
        total_cost: 0.44,
        pod_url: "https://mock_abc123.runpod.net",
        comfyui_url: "https://mock_abc123-8188.proxy.runpod.net"
      },
      {
        id: "mock_def456",
        name: "test-deployment",
        gpu_type: "NVIDIA RTX 3090",
        gpu_count: 1,
        status: "EXITED",
        created_at: new Date(Date.now() - 864e5).toISOString(),
        cost_per_hour: 0.22,
        uptime_seconds: 900,
        total_cost: 0.06,
        pod_url: "https://mock_def456.runpod.net"
      }
    ]
  }),
  terminateRunPodPod: async (e) => (await Ue(1e3), console.log(`[MOCK] Terminating pod: ${e}`), { status: "success", message: "Pod terminated" }),
  stopRunPodPod: async (e) => (await Ue(800), console.log(`[MOCK] Stopping pod: ${e}`), { status: "success", message: "Pod stopped" }),
  startRunPodPod: async (e) => (await Ue(800), console.log(`[MOCK] Starting pod: ${e}`), { status: "success", message: "Pod starting", cost_per_hour: 0.44 }),
  /**
   * Get all instances from all providers (unified view)
   * GET /v2/comfygit/deploy/instances
   */
  getInstances: async () => (await Ue(500), {
    instances: [
      {
        id: "mock_abc123",
        provider: "runpod",
        name: "my-comfyui-deploy",
        status: "running",
        gpu_type: "NVIDIA RTX 4090",
        cost_per_hour: 0.44,
        uptime_seconds: 3600,
        total_cost: 0.44,
        created_at: new Date(Date.now() - 36e5).toISOString(),
        comfyui_url: "https://mock_abc123-8188.proxy.runpod.net",
        console_url: "https://www.runpod.io/console/pods/mock_abc123"
      },
      {
        id: "mock_def456",
        provider: "runpod",
        name: "test-deployment",
        status: "stopped",
        gpu_type: "NVIDIA RTX 3090",
        cost_per_hour: 0.22,
        uptime_seconds: 0,
        total_cost: 0.06,
        created_at: new Date(Date.now() - 864e5).toISOString(),
        console_url: "https://www.runpod.io/console/pods/mock_def456"
      },
      {
        id: "mock_ghi789",
        provider: "runpod",
        name: "deploying-instance",
        status: "deploying",
        deployment_phase: "SETTING_UP",
        deployment_message: "Installing ComfyGit and importing environment...",
        deployment_progress: 45,
        gpu_type: "NVIDIA A100",
        cost_per_hour: 1.29,
        uptime_seconds: 120,
        total_cost: 0.04,
        created_at: new Date(Date.now() - 12e4).toISOString(),
        console_url: "https://www.runpod.io/console/pods/mock_ghi789"
      }
    ]
  }),
  exportDeployPackage: async (e) => {
    await Ue(1500);
    const t = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      package_path: e || `/home/user/comfygit_deploy_${t}.tar.gz`,
      package_size_mb: 45.2,
      message: "Deploy package created successfully"
    };
  },
  getStoredRunPodKey: async () => (await Ue(200), {
    has_key: !1
  }),
  clearRunPodKey: async () => (await Ue(200), console.log("[MOCK] Cleared RunPod API key"), { status: "success" })
};
function Ue(e) {
  return new Promise((t) => setTimeout(t, e));
}
function vo() {
  return !0;
}
const Ze = {
  initState: "idle",
  initProgress: 0,
  initMessage: "No initialization in progress",
  initStartTime: null,
  modelsFound: 0
}, Qe = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, _n = [
  { id: "init_structure", endTime: 300, progress: 5, message: "Creating environment structure..." },
  { id: "resolve_version", endTime: 800, progress: 10, message: "Resolving ComfyUI version..." },
  { id: "clone_comfyui", endTime: 2800, progress: 25, message: "Cloning ComfyUI..." },
  { id: "configure_environment", endTime: 3300, progress: 30, message: "Configuring environment..." },
  { id: "create_venv", endTime: 4300, progress: 35, message: "Creating virtual environment..." },
  { id: "install_pytorch", endTime: 8300, progress: 70, message: "Installing PyTorch..." },
  { id: "configure_pytorch", endTime: 8800, progress: 75, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 11300, progress: 95, message: "Installing ComfyUI dependencies..." },
  { id: "finalize", endTime: 11800, progress: 100, message: "Finalizing environment..." }
];
function zv() {
  if (Ze.initState === "idle" || Ze.initState === "complete" || Ze.initState === "error" || !Ze.initStartTime) return;
  const e = Date.now() - Ze.initStartTime;
  if (e < 2e3)
    Ze.initState = "creating_workspace", Ze.initProgress = Math.min(20, Math.floor(e / 100)), Ze.initMessage = "Creating workspace structure...";
  else if (e < 4e3)
    Ze.initState = "setting_models_dir", Ze.initProgress = 20 + Math.floor((e - 2e3) / 200), Ze.initMessage = "Configuring models directory...";
  else if (e < 8e3) {
    Ze.initState = "scanning_models";
    const t = Math.floor((e - 4e3) / 50);
    Ze.initProgress = 30 + Math.min(65, t);
    const o = Math.floor((e - 4e3) / 100);
    Ze.initMessage = `Scanning models (${o}/42)...`;
  } else
    Ze.initState = "complete", Ze.initProgress = 100, Ze.initMessage = "Complete! 42 models indexed", Ze.modelsFound = 42, Ze.initStartTime = null;
}
function Ov() {
  if (Qe.state === "idle" || Qe.state === "complete" || Qe.state === "error" || !Qe.startTime) return;
  const e = Date.now() - Qe.startTime;
  let t = !1;
  for (const o of _n)
    if (e < o.endTime) {
      Qe.phase = o.id, Qe.message = o.message;
      const n = _n.indexOf(o) - 1, l = n >= 0 ? _n[n].endTime : 0, i = n >= 0 ? _n[n].progress : 0, r = o.endTime - l, d = (e - l) / r;
      Qe.progress = Math.floor(i + (o.progress - i) * d), t = !0;
      break;
    }
  t || (Qe.state = "complete", Qe.phase = "complete", Qe.progress = 100, Qe.message = `Environment '${Qe.envName}' created successfully`, Qe.startTime = null);
}
const tt = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, bn = [
  { id: "clone_comfyui", endTime: 2e3, progress: 15, message: "Cloning/restoring ComfyUI..." },
  { id: "extract_builtins", endTime: 2500, progress: 20, message: "Extracting builtin nodes..." },
  { id: "configure_pytorch", endTime: 3500, progress: 35, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 6e3, progress: 60, message: "Installing dependencies..." },
  { id: "sync_nodes", endTime: 7e3, progress: 70, message: "Syncing custom nodes..." },
  { id: "copy_workflows", endTime: 7500, progress: 80, message: "Copying workflows..." },
  { id: "resolve_models", endTime: 8e3, progress: 85, message: "Resolving models..." },
  { id: "download_models", endTime: 9500, progress: 95, message: "Downloading models..." },
  { id: "finalize", endTime: 1e4, progress: 100, message: "Finalizing environment..." }
];
function Fv() {
  if (tt.state !== "importing" || !tt.startTime) return;
  const e = Date.now() - tt.startTime;
  for (const t of bn)
    if (e < t.endTime) {
      tt.phase = t.id, tt.message = t.message;
      const o = bn.indexOf(t) - 1, n = o >= 0 ? bn[o].endTime : 0, l = o >= 0 ? bn[o].progress : 0, i = t.endTime - n, r = e - n;
      tt.progress = Math.floor(l + (t.progress - l) * (r / i));
      return;
    }
  tt.state = "complete", tt.phase = "complete", tt.progress = 100, tt.message = `Environment '${tt.envName}' imported successfully`, tt.startTime = null;
}
function dt() {
  const e = b(!1), t = b(null);
  async function o(J, xe) {
    var ms;
    if (!((ms = window.app) != null && ms.api))
      throw new Error("ComfyUI API not available");
    const ot = await window.app.api.fetchApi(J, xe);
    if (!ot.ok) {
      const ze = await ot.json().catch(() => ({}));
      throw new Error(ze.error || ze.message || `Request failed: ${ot.status}`);
    }
    return ot.json();
  }
  async function n(J = !1) {
    return Le.getStatus();
  }
  async function l(J, xe = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: xe })
    });
  }
  async function i(J = 10, xe = 0) {
    {
      const ot = await Le.getCommitHistory(J);
      return {
        commits: ot,
        total: ot.length,
        offset: xe
      };
    }
  }
  async function r(J) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function u() {
    return Le.validateExport();
  }
  async function d() {
    return {
      can_export: !0,
      blocking_issues: [],
      warnings: { models_without_sources: [] }
    };
  }
  async function f(J) {
    return Le.exportEnvWithForce(J);
  }
  async function v() {
    return Le.getBranches();
  }
  async function p(J) {
    return o(`/v2/comfygit/commit/${J}`);
  }
  async function w(J, xe = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: xe })
    });
  }
  async function g(J, xe = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: xe })
    });
  }
  async function k(J, xe = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: xe })
    });
  }
  async function x(J, xe = !1) {
    return await Le.deleteBranch(J), { status: "success" };
  }
  async function C() {
    return Le.getEnvironments();
  }
  async function I(J, xe) {
    return Le.switchEnvironment(J);
  }
  async function N() {
    return null;
  }
  async function P(J) {
    return Qe.state = "creating", Qe.phase = "init_structure", Qe.progress = 0, Qe.message = "Creating environment structure...", Qe.startTime = Date.now(), Qe.envName = J.name, console.log("[MOCK] Starting environment creation:", J), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function E() {
    return Ov(), {
      state: Qe.state,
      phase: Qe.phase ?? void 0,
      progress: Qe.progress,
      message: Qe.message,
      environment_name: Qe.state === "complete" && Qe.envName || void 0,
      error: Qe.state === "error" ? "Mock error occurred" : void 0
    };
  }
  async function H(J = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function K(J) {
    return await Le.deleteEnvironment(J), { status: "success" };
  }
  async function O(J = !1) {
    return Le.getWorkflows();
  }
  async function S(J) {
    return Le.getWorkflowDetails(J);
  }
  async function T(J) {
    return Le.resolveWorkflow(J);
  }
  async function A(J, xe, ot) {
    return await Le.installWorkflowDeps(J, xe, ot), { status: "success" };
  }
  async function re(J, xe, ot) {
    return Le.setModelImportance(J, xe, ot);
  }
  async function Y() {
    return Le.getEnvironmentModels();
  }
  async function q() {
    return Le.getWorkspaceModels();
  }
  async function oe(J) {
    return Le.getModelDetails(J);
  }
  async function Z(J) {
    return console.log(`[MOCK] Opening file location: ${J}`), { status: "success" };
  }
  async function U(J, xe) {
    return await Le.updateModelSource(J, xe), { status: "success", source_type: "custom" };
  }
  async function z(J, xe) {
    return { status: "success" };
  }
  async function D(J) {
    return Le.deleteModel(J);
  }
  async function we(J) {
    return await Le.downloadModel(J), { status: "success" };
  }
  async function ve() {
    return { status: "success", changes: 0 };
  }
  async function Ee() {
    return { path: "~/comfygit/models" };
  }
  async function De(J) {
    return { status: "success", path: J, models_indexed: 10 };
  }
  async function Ke(J) {
    return Le.getConfig();
  }
  async function Je(J, xe) {
    return Le.updateConfig(J);
  }
  async function _e(J, xe) {
    return Le.getEnvironmentLogs(J, xe);
  }
  async function Se(J, xe) {
    return Le.getWorkspaceLogs(J, xe);
  }
  async function We() {
    return { path: "/mock/workspace/logs/env/full.log", exists: !0 };
  }
  async function ye() {
    return { path: "/mock/workspace/logs/workspace/full.log", exists: !0 };
  }
  async function le(J, xe) {
    return Le.getWorkspaceLogs(J, xe);
  }
  async function Be() {
    return { path: "/mock/workspace/.metadata/orchestrator.log", exists: !0 };
  }
  async function Ie(J) {
    return console.log(`[MOCK] Opening file: ${J}`), { status: "success" };
  }
  async function L() {
    return Le.getNodes();
  }
  async function B(J) {
    return { status: "success", message: `Node '${J}' tracked as development` };
  }
  async function se(J) {
    return await Le.installNode(J), { status: "success" };
  }
  async function ae(J) {
    return await Le.updateNode(J), { status: "success" };
  }
  async function de(J) {
    return await Le.uninstallNode(J), { status: "success" };
  }
  async function me() {
    return Le.getRemotes();
  }
  async function be(J, xe) {
    return await Le.addRemote(J, xe), { status: "success", remote_name: J };
  }
  async function ke(J) {
    return await Le.removeRemote(J), { status: "success", remote_name: J };
  }
  async function ne(J, xe, ot) {
    return await Le.updateRemoteUrl(J, xe, ot), { status: "success", remote_name: J };
  }
  async function ue(J, xe) {
    return await Le.fetchRemote(J), { status: "success", remote_name: J };
  }
  async function Me(J) {
    return Le.getRemoteSyncStatus(J);
  }
  async function $e(J = "skip", xe = !0) {
    return await new Promise((ot) => setTimeout(ot, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function ee(J, xe) {
    return Le.getPullPreview(J);
  }
  async function j(J, xe = {}) {
    return Le.pullFromRemote(J, xe);
  }
  async function X(J, xe) {
    return Le.getPushPreview(J);
  }
  async function R(J, xe = {}) {
    return Le.pushToRemote(J, xe);
  }
  async function V(J, xe) {
    return Le.validateMerge(J, xe);
  }
  async function ce(J) {
    const xe = {
      success: 0,
      failed: []
    };
    for (const ot of J)
      try {
        await T(ot), xe.success++;
      } catch (ms) {
        xe.failed.push({
          name: ot,
          error: ms instanceof Error ? ms.message : "Unknown error"
        });
      }
    return xe;
  }
  async function Te(J) {
    return await new Promise((xe) => setTimeout(xe, 500)), {
      comfyui_version: "v0.3.8",
      comfyui_version_type: "release",
      total_models: 3,
      models_locally_available: 1,
      models_needing_download: 1,
      models_without_sources: 1,
      models: [],
      total_nodes: 5,
      registry_nodes: 4,
      dev_nodes: 1,
      git_nodes: 0,
      nodes: [],
      total_workflows: 2,
      workflows: [],
      needs_model_downloads: !0,
      needs_node_installs: !0,
      download_strategy_recommendation: "required"
    };
  }
  async function qe(J) {
    return await new Promise((xe) => setTimeout(xe, 200)), J === "existing-env" ? { valid: !1, error: "Environment 'existing-env' already exists" } : J.includes("/") || J.includes(" ") ? { valid: !1, error: "Name contains invalid characters" } : { valid: !0, name: J };
  }
  async function ft(J, xe, ot, ms) {
    return await new Promise((ze) => setTimeout(ze, 300)), tt.state = "importing", tt.phase = null, tt.progress = 0, tt.message = `Importing environment '${xe}'...`, tt.startTime = Date.now(), tt.envName = xe, { status: "started", message: `Importing environment '${xe}'...` };
  }
  async function $t() {
    return Fv(), {
      state: tt.state,
      phase: tt.phase,
      progress: tt.progress,
      message: tt.message,
      environment_name: tt.envName
    };
  }
  async function Ct(J) {
    return await new Promise((xe) => setTimeout(xe, 800)), {
      comfyui_version: "v0.3.8",
      comfyui_version_type: "release",
      total_models: 3,
      models_locally_available: 1,
      models_needing_download: 1,
      models_without_sources: 1,
      models: [],
      total_nodes: 5,
      registry_nodes: 4,
      dev_nodes: 1,
      git_nodes: 0,
      nodes: [],
      total_workflows: 2,
      workflows: [],
      needs_model_downloads: !0,
      needs_node_installs: !0,
      download_strategy_recommendation: "required"
    };
  }
  async function vt(J, xe, ot, ms) {
    return await new Promise((ze) => setTimeout(ze, 300)), tt.state = "importing", tt.phase = null, tt.progress = 0, tt.message = `Importing environment '${xe}' from git...`, tt.startTime = Date.now(), tt.envName = xe, { status: "started", message: `Importing environment '${xe}'...` };
  }
  async function ht() {
    {
      const { state: J, setupState: xe } = ll(), ot = [];
      return J.hasEnvironments && ot.push("mock-env-1", "mock-env-2"), Qe.state === "complete" && Qe.envName && (ot.includes(Qe.envName) || ot.push(Qe.envName)), {
        state: xe.value,
        workspace_path: J.hasWorkspace ? "~/comfygit" : null,
        default_path: "~/comfygit",
        environments: ot,
        current_environment: J.isManaged ? "mock-env-1" : null,
        detected_models_dir: "/mock/ComfyUI/models",
        cli_installed: !1,
        cli_path: null
      };
    }
  }
  async function Yt(J) {
    return Ze.initState = "creating_workspace", Ze.initProgress = 0, Ze.initMessage = "Starting workspace creation...", Ze.initStartTime = Date.now(), Ze.modelsFound = 0, console.log("[MOCK] Starting workspace initialization:", J), { status: "started", task_id: "mock-task-id" };
  }
  async function bs() {
    return zv(), {
      state: Ze.initState,
      progress: Ze.initProgress,
      message: Ze.initMessage,
      models_found: Ze.initState === "complete" ? Ze.modelsFound : void 0,
      error: Ze.initState === "error" ? "Mock error occurred" : void 0
    };
  }
  async function Xt(J) {
    return await new Promise((xe) => setTimeout(xe, 200)), J.type === "workspace" ? !J.path || J.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : J.path.includes("existing") ? { valid: !1, error: "Workspace already exists at this location" } : { valid: !0 } : J.type === "models" ? !J.path || J.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : J.path.endsWith("ComfyUI") || J.path.endsWith("comfyui") ? {
      valid: !1,
      error: "This appears to be a ComfyUI installation, not a models directory",
      suggestion: J.path + "/models"
    } : { valid: !0, model_count: 42 } : { valid: !0 };
  }
  async function js() {
    return Le.getDeploySummary();
  }
  async function As() {
    return Le.getDataCenters();
  }
  async function ro(J, xe) {
    return Le.testRunPodConnection(J, xe);
  }
  async function To() {
    return Le.getNetworkVolumes();
  }
  async function Po(J) {
    return Le.getRunPodGpuTypes();
  }
  async function Mo(J) {
    return Le.deployToRunPod(J);
  }
  async function he() {
    return Le.getRunPodPods();
  }
  async function Q(J) {
    return Le.terminateRunPodPod(J);
  }
  async function Ge(J) {
    return Le.stopRunPodPod(J);
  }
  async function _t(J) {
    return Le.startRunPodPod(J);
  }
  async function Jt(J) {
    return Le.getDeploymentStatus(J);
  }
  async function ks(J) {
    return Le.exportDeployPackage(J);
  }
  async function $s(J = !1) {
    return Le.getStoredRunPodKey();
  }
  async function cs() {
    return Le.clearRunPodKey();
  }
  async function Ne() {
    return { workers: [] };
  }
  async function us(J) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function te(J) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function W(J) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Pe() {
    return { discovered: [] };
  }
  async function Ve(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/info`);
  }
  async function it(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`);
  }
  async function gt(J, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function At(J, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(xe)}/start`, {
      method: "POST"
    });
  }
  async function ds(J, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(xe)}/stop`, {
      method: "POST"
    });
  }
  async function qs(J, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(xe)}`, {
      method: "DELETE"
    });
  }
  async function Ys(J) {
    return await new Promise((xe) => setTimeout(xe, 500)), J.startsWith("ghp_") ? { status: "success", message: "GitHub authentication successful" } : { status: "error", message: "Invalid token format" };
  }
  return {
    isLoading: e,
    error: t,
    getStatus: n,
    commit: l,
    getHistory: i,
    exportEnv: r,
    validateExport: u,
    validateDeploy: d,
    exportEnvWithForce: f,
    // Git Operations
    getBranches: v,
    getCommitDetail: p,
    checkout: w,
    createBranch: g,
    switchBranch: k,
    deleteBranch: x,
    // Environment Management
    getEnvironments: C,
    switchEnvironment: I,
    getSwitchProgress: N,
    createEnvironment: P,
    getCreateProgress: E,
    getComfyUIReleases: H,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: O,
    getWorkflowDetails: S,
    resolveWorkflow: T,
    installWorkflowDeps: A,
    setModelImportance: re,
    // Model Management
    getEnvironmentModels: Y,
    getWorkspaceModels: q,
    getModelDetails: oe,
    openFileLocation: Z,
    addModelSource: U,
    removeModelSource: z,
    deleteModel: D,
    downloadModel: we,
    scanWorkspaceModels: ve,
    getModelsDirectory: Ee,
    setModelsDirectory: De,
    // Settings
    getConfig: Ke,
    updateConfig: Je,
    // Debug/Logs
    getEnvironmentLogs: _e,
    getWorkspaceLogs: Se,
    getEnvironmentLogPath: We,
    getWorkspaceLogPath: ye,
    getOrchestratorLogs: le,
    getOrchestratorLogPath: Be,
    openFile: Ie,
    // Node Management
    getNodes: L,
    trackNodeAsDev: B,
    installNode: se,
    updateNode: ae,
    uninstallNode: de,
    // Git Remotes
    getRemotes: me,
    addRemote: be,
    removeRemote: ke,
    updateRemoteUrl: ne,
    fetchRemote: ue,
    getRemoteSyncStatus: Me,
    // Push/Pull
    getPullPreview: ee,
    pullFromRemote: j,
    getPushPreview: X,
    pushToRemote: R,
    validateMerge: V,
    // Environment Sync
    syncEnvironmentManually: $e,
    // Workflow Repair
    repairWorkflowModels: ce,
    // Import Operations
    previewTarballImport: Te,
    previewGitImport: Ct,
    validateEnvironmentName: qe,
    executeImport: ft,
    executeGitImport: vt,
    getImportProgress: $t,
    // First-Time Setup
    getSetupStatus: ht,
    initializeWorkspace: Yt,
    getInitializeProgress: bs,
    validatePath: Xt,
    // Deploy Operations
    getDeploySummary: js,
    getDataCenters: As,
    testRunPodConnection: ro,
    getNetworkVolumes: To,
    getRunPodGpuTypes: Po,
    deployToRunPod: Mo,
    getRunPodPods: he,
    terminateRunPodPod: Q,
    stopRunPodPod: Ge,
    startRunPodPod: _t,
    getDeploymentStatus: Jt,
    exportDeployPackage: ks,
    getStoredRunPodKey: $s,
    clearRunPodKey: cs,
    // Custom Worker Operations
    getCustomWorkers: Ne,
    addCustomWorker: us,
    removeCustomWorker: te,
    testWorkerConnection: W,
    scanForWorkers: Pe,
    getWorkerSystemInfo: Ve,
    getWorkerInstances: it,
    deployToWorker: gt,
    startWorkerInstance: At,
    stopWorkerInstance: ds,
    terminateWorkerInstance: qs,
    // Git Authentication
    testGitAuth: Ys
  };
}
async function kn(e, t) {
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
function Bv() {
  async function e() {
    try {
      return await kn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await kn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await kn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await kn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const Vv = { class: "base-modal-header" }, Wv = {
  key: 0,
  class: "base-modal-title"
}, Gv = { class: "base-modal-body" }, Hv = {
  key: 0,
  class: "base-modal-loading"
}, Kv = {
  key: 1,
  class: "base-modal-error"
}, jv = {
  key: 0,
  class: "base-modal-footer"
}, qv = /* @__PURE__ */ fe({
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
    function i(r) {
      r.key === "Escape" && o.showCloseButton && n("close");
    }
    return st(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), Io(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (r, u) => (a(), M(kt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        s("div", {
          class: Ce(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = ut(() => {
          }, ["stop"]))
        }, [
          s("div", Vv, [
            He(r.$slots, "header", {}, () => [
              e.title ? (a(), c("h3", Wv, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), c("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => r.$emit("close"))
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
          s("div", Gv, [
            e.loading ? (a(), c("div", Hv, "Loading...")) : e.error ? (a(), c("div", Kv, m(e.error), 1)) : He(r.$slots, "body", { key: 2 }, void 0)
          ]),
          r.$slots.footer ? (a(), c("div", jv, [
            He(r.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), wt = /* @__PURE__ */ pe(qv, [["__scopeId", "data-v-8dab1081"]]), Yv = ["type", "disabled"], Xv = {
  key: 0,
  class: "spinner"
}, Jv = /* @__PURE__ */ fe({
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
    return (t, o) => (a(), c("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ce(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", Xv)) : y("", !0),
      He(t.$slots, "default", {}, void 0)
    ], 10, Yv));
  }
}), Re = /* @__PURE__ */ pe(Jv, [["__scopeId", "data-v-f3452606"]]), Qv = {
  key: 0,
  class: "base-title-count"
}, Zv = /* @__PURE__ */ fe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), M(el(`h${e.level}`), {
      class: Ce(["base-title", e.variant])
    }, {
      default: h(() => [
        He(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Qv, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ko = /* @__PURE__ */ pe(Zv, [["__scopeId", "data-v-5a01561d"]]), ep = ["value", "disabled"], tp = {
  key: 0,
  value: "",
  disabled: ""
}, sp = ["value"], op = {
  key: 0,
  class: "base-select-error"
}, np = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), c("div", {
      class: Ce(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ce(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), c("option", tp, m(e.placeholder), 1)) : y("", !0),
        (a(!0), c(G, null, ge(e.options, (i) => (a(), c("option", {
          key: t(i),
          value: t(i)
        }, m(o(i)), 9, sp))), 128))
      ], 42, ep),
      e.error ? (a(), c("span", op, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), ap = /* @__PURE__ */ pe(np, [["__scopeId", "data-v-7436d745"]]), lp = { class: "popover-header" }, ip = { class: "popover-title" }, rp = { class: "popover-content" }, cp = {
  key: 0,
  class: "popover-actions"
}, up = /* @__PURE__ */ fe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), M(kt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: qt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = ut(() => {
          }, ["stop"]))
        }, [
          s("div", lp, [
            s("h4", ip, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", rp, [
            He(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), c("div", cp, [
            He(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ pe(up, [["__scopeId", "data-v-42815ace"]]), dp = { class: "detail-section" }, mp = {
  key: 0,
  class: "empty-message"
}, fp = { class: "model-header" }, vp = { class: "model-name" }, pp = { class: "model-details" }, gp = { class: "model-row" }, hp = { class: "model-row" }, yp = { class: "label" }, wp = {
  key: 0,
  class: "model-row model-row-nodes"
}, _p = { class: "node-list" }, bp = ["onClick"], kp = {
  key: 1,
  class: "model-row"
}, $p = { class: "value" }, Cp = {
  key: 2,
  class: "model-row"
}, xp = { class: "value error" }, Sp = {
  key: 0,
  class: "model-actions"
}, Ip = { class: "detail-section" }, Ep = {
  key: 0,
  class: "empty-message"
}, Tp = { class: "node-name" }, Pp = {
  key: 0,
  class: "node-version"
}, Mp = /* @__PURE__ */ fe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: r } = dt(), u = b(null), d = b(!1), f = b(null), v = b(!1), p = b({}), w = b(!1), g = b(/* @__PURE__ */ new Set()), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(S) {
      switch (S) {
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
    function C(S) {
      switch (S) {
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
    function I(S) {
      if (!S.loaded_by || S.loaded_by.length === 0) return [];
      const T = S.hash || S.filename;
      return g.value.has(T) ? S.loaded_by : S.loaded_by.slice(0, 3);
    }
    function N(S) {
      return g.value.has(S);
    }
    function P(S) {
      g.value.has(S) ? g.value.delete(S) : g.value.add(S), g.value = new Set(g.value);
    }
    async function E() {
      d.value = !0, f.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (S) {
        f.value = S instanceof Error ? S.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function H(S, T) {
      p.value[S] = T, v.value = !0;
    }
    async function K(S) {
      try {
        await r(S);
      } catch (T) {
        f.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function O() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, f.value = null;
      try {
        for (const [S, T] of Object.entries(p.value))
          await i(o.workflowName, S, T);
        n("refresh"), n("close");
      } catch (S) {
        f.value = S instanceof Error ? S.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return st(E), (S, T) => (a(), c(G, null, [
      $(wt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: f.value || void 0,
        onClose: T[4] || (T[4] = (A) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), c(G, { key: 0 }, [
            s("section", dp, [
              $(Ko, { variant: "section" }, {
                default: h(() => [
                  _("MODELS USED (" + m(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), c("div", mp, " No models used in this workflow ")) : y("", !0),
              (a(!0), c(G, null, ge(u.value.models, (A) => {
                var re;
                return a(), c("div", {
                  key: A.hash || A.filename,
                  class: "model-card"
                }, [
                  s("div", fp, [
                    T[6] || (T[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", vp, m(A.filename), 1)
                  ]),
                  s("div", pp, [
                    s("div", gp, [
                      T[7] || (T[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ce(["value", x(A.status)])
                      }, m(C(A.status)), 3)
                    ]),
                    s("div", hp, [
                      s("span", yp, [
                        T[8] || (T[8] = _(" Importance: ", -1)),
                        $(Ir, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (Y) => w.value = !0)
                        })
                      ]),
                      $(ap, {
                        "model-value": p.value[A.filename] || A.importance,
                        options: k,
                        "onUpdate:modelValue": (Y) => H(A.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    A.loaded_by && A.loaded_by.length > 0 ? (a(), c("div", wp, [
                      T[9] || (T[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", _p, [
                        (a(!0), c(G, null, ge(I(A), (Y, q) => (a(), c("div", {
                          key: `${Y.node_id}-${q}`,
                          class: "node-reference"
                        }, m(Y.node_type) + " (Node #" + m(Y.node_id) + ") ", 1))), 128)),
                        A.loaded_by.length > 3 ? (a(), c("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => P(A.hash || A.filename)
                        }, m(N(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, bp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    A.size_mb ? (a(), c("div", kp, [
                      T[10] || (T[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", $p, m(A.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    A.has_category_mismatch ? (a(), c("div", Cp, [
                      T[13] || (T[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", xp, [
                        T[11] || (T[11] = _(" In ", -1)),
                        s("code", null, m(A.actual_category) + "/", 1),
                        T[12] || (T[12] = _(" but loader needs ", -1)),
                        s("code", null, m((re = A.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  A.status !== "available" ? (a(), c("div", Sp, [
                    A.status === "downloadable" ? (a(), M(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (Y) => n("resolve"))
                    }, {
                      default: h(() => [...T[14] || (T[14] = [
                        _(" Download ", -1)
                      ])]),
                      _: 1
                    })) : A.status === "category_mismatch" && A.file_path ? (a(), M(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => K(A.file_path)
                    }, {
                      default: h(() => [...T[15] || (T[15] = [
                        _(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : A.status !== "path_mismatch" ? (a(), M(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (Y) => n("resolve"))
                    }, {
                      default: h(() => [...T[16] || (T[16] = [
                        _(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", Ip, [
              $(Ko, { variant: "section" }, {
                default: h(() => [
                  _("NODES USED (" + m(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), c("div", Ep, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), c(G, null, ge(u.value.nodes, (A) => (a(), c("div", {
                key: A.name,
                class: "node-item"
              }, [
                s("span", {
                  class: Ce(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, m(A.status === "installed" ? "✓" : "✕"), 3),
                s("span", Tp, m(A.name), 1),
                A.version ? (a(), c("span", Pp, "v" + m(A.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          $(Re, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (A) => n("close"))
          }, {
            default: h(() => [...T[17] || (T[17] = [
              _(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), M(Re, {
            key: 0,
            variant: "primary",
            onClick: O
          }, {
            default: h(() => [...T[18] || (T[18] = [
              _(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      $(rs, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: T[5] || (T[5] = (A) => w.value = !1)
      }, {
        content: h(() => [...T[19] || (T[19] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              _(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              _(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              _(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Rp = /* @__PURE__ */ pe(Mp, [["__scopeId", "data-v-668728e6"]]), Ye = Ks({
  items: [],
  status: "idle"
});
let hs = null;
function Pr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ha(e) {
  return Ye.items.find((t) => t.id === e);
}
async function po() {
  if (Ye.status === "downloading") return;
  const e = Ye.items.find((t) => t.status === "queued");
  if (!e) {
    Ye.status = "idle";
    return;
  }
  Ye.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Dp(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", po();
  }
}
async function Dp(e) {
  return new Promise((t, o) => {
    hs && (hs.close(), hs = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    hs = l;
    let i = Date.now(), r = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const f = JSON.parse(d.data);
        switch (f.type) {
          case "progress":
            e.downloaded = f.downloaded || 0, e.size = f.total || e.size;
            const v = Date.now(), p = (v - i) / 1e3;
            if (p > 0.5) {
              const w = e.downloaded - r;
              if (e.speed = w / p, i = v, r = e.downloaded, e.speed > 0 && e.size > 0) {
                const g = e.size - e.downloaded;
                e.eta = g / e.speed;
              }
            }
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            u = !0, l.close(), hs = null, t();
            break;
          case "error":
            u = !0, l.close(), hs = null, o(new Error(f.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), hs = null, u || o(new Error("Connection lost"));
    };
  });
}
async function Lp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: Pr(),
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
      Ye.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function un() {
  function e(C) {
    for (const I of C) {
      if (Ye.items.some(
        (E) => E.url === I.url && E.targetPath === I.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${I.filename}`);
        continue;
      }
      const P = {
        id: Pr(),
        workflow: I.workflow,
        filename: I.filename,
        url: I.url,
        targetPath: I.targetPath,
        size: I.size || 0,
        type: I.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Ye.items.push(P);
    }
    Ye.status === "idle" && po();
  }
  async function t(C) {
    const I = ha(C);
    if (I) {
      if (I.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(I.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        hs && (hs.close(), hs = null), I.status = "failed", I.error = "Cancelled by user", Ye.status = "idle", po();
      } else if (I.status === "queued") {
        const N = Ye.items.findIndex((P) => P.id === C);
        N >= 0 && Ye.items.splice(N, 1);
      }
    }
  }
  function o(C) {
    const I = ha(C);
    !I || I.status !== "failed" || (I.status = "queued", I.error = void 0, I.progress = 0, I.downloaded = 0, Ye.status === "idle" && po());
  }
  function n(C) {
    const I = ha(C);
    !I || I.status !== "paused" || (I.status = "queued", Ye.status === "idle" && po());
  }
  function l() {
    const C = Ye.items.filter((I) => I.status === "paused");
    for (const I of C)
      I.status = "queued";
    Ye.status === "idle" && po();
  }
  function i(C) {
    const I = Ye.items.findIndex((N) => N.id === C);
    I >= 0 && ["completed", "failed", "paused"].includes(Ye.items[I].status) && Ye.items.splice(I, 1);
  }
  function r() {
    Ye.items = Ye.items.filter((C) => C.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter((C) => C.status !== "failed");
  }
  const d = F(
    () => Ye.items.find((C) => C.status === "downloading")
  ), f = F(
    () => Ye.items.filter((C) => C.status === "queued")
  ), v = F(
    () => Ye.items.filter((C) => C.status === "completed")
  ), p = F(
    () => Ye.items.filter((C) => C.status === "failed")
  ), w = F(
    () => Ye.items.filter((C) => C.status === "paused")
  ), g = F(() => Ye.items.length > 0), k = F(
    () => Ye.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = F(
    () => Ye.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Rn(Ye),
    // Computed
    currentDownload: d,
    queuedItems: f,
    completedItems: v,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: k,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: r,
    clearFailed: u,
    loadPendingDownloads: Lp
  };
}
function Mr() {
  const e = b(null), t = b(null), o = b([]), n = b([]), l = b(!1), i = b(null);
  async function r(I, N) {
    var E;
    if (!((E = window.app) != null && E.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(I, N);
    if (!P.ok) {
      const H = await P.json().catch(() => ({})), K = H.error || H.message || `Request failed: ${P.status}`;
      throw new Error(K);
    }
    return P.json();
  }
  async function u(I) {
    l.value = !0, i.value = null;
    try {
      let N;
      return vo() && (N = await Le.analyzeWorkflow(I)), e.value = N, N;
    } catch (N) {
      const P = N instanceof Error ? N.message : "Unknown error occurred";
      throw i.value = P, N;
    } finally {
      l.value = !1;
    }
  }
  async function d(I, N, P, E) {
    l.value = !0, i.value = null;
    try {
      let H;
      return vo() && (H = await Le.applyResolution(I, N, P)), t.value = H, H;
    } catch (H) {
      const K = H instanceof Error ? H.message : "Unknown error occurred";
      throw i.value = K, H;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, N = 10) {
    l.value = !0, i.value = null;
    try {
      let P;
      return vo() && (P = await Le.searchNodes(I, N)), o.value = P.results, P.results;
    } catch (P) {
      const E = P instanceof Error ? P.message : "Unknown error occurred";
      throw i.value = E, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, N = 10) {
    l.value = !0, i.value = null;
    try {
      let P;
      return vo() && (P = await Le.searchModels(I, N)), n.value = P.results, P.results;
    } catch (P) {
      const E = P instanceof Error ? P.message : "Unknown error occurred";
      throw i.value = E, P;
    } finally {
      l.value = !1;
    }
  }
  const p = Ks({
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
      if (vo()) {
        p.nodeInstallProgress.totalNodes = p.nodesToInstall.length;
        for (let N = 0; N < p.nodesToInstall.length; N++)
          p.nodeInstallProgress.currentNode = p.nodesToInstall[N], p.nodeInstallProgress.currentIndex = N, await new Promise((P) => setTimeout(P, 500)), p.nodeInstallProgress.completedNodes.push({
            node_id: p.nodesToInstall[N],
            success: !0
          });
        return p.nodesInstalled = p.nodesToInstall, p.needsRestart = p.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: p.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await k(I);
    } catch (N) {
      const P = N instanceof Error ? N.message : "Failed to install nodes";
      throw p.installError = P, N;
    }
  }
  async function k(I) {
    var P;
    const N = await r(
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
      const E = new Map(((P = N.failed) == null ? void 0 : P.map((H) => [H.node_id, H.error])) || []);
      for (let H = 0; H < p.nodesToInstall.length; H++) {
        const K = p.nodesToInstall[H], O = E.get(K);
        p.nodeInstallProgress.completedNodes.push({
          node_id: K,
          success: !O,
          error: O
        });
      }
    }
    return p.nodesInstalled = N.nodes_installed, p.needsRestart = N.nodes_installed.length > 0, N.failed && N.failed.length > 0 && (p.installError = `${N.failed.length} package(s) failed to install`), N;
  }
  async function x(I, N, P) {
    w(), p.phase = "resolving", i.value = null;
    {
      const E = await Le.applyResolution(I, N, P);
      t.value = E, p.nodesToInstall = E.nodes_to_install, p.phase = "complete";
      return;
    }
  }
  function C(I, N) {
    const { addToQueue: P } = un(), E = N.filter((H) => H.url && H.target_path).map((H) => ({
      workflow: I,
      filename: H.filename,
      url: H.url,
      targetPath: H.target_path,
      size: H.size || 0,
      type: "model"
    }));
    return E.length > 0 && P(E), E.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: i,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: g,
    searchNodes: f,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: C
  };
}
const Np = { class: "resolution-stepper" }, Ap = { class: "stepper-header" }, Up = ["onClick"], zp = {
  key: 0,
  class: "step-icon"
}, Op = {
  key: 1,
  class: "step-number"
}, Fp = { class: "step-label" }, Bp = {
  key: 0,
  class: "step-connector"
}, Vp = { class: "stepper-content" }, Wp = /* @__PURE__ */ fe({
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
    function l(f) {
      var v;
      if ((v = o.stepStats) != null && v[f]) {
        const p = o.stepStats[f];
        return p.total > 0 && p.resolved === p.total;
      }
      return o.completedSteps.includes(f);
    }
    function i(f) {
      var v;
      if ((v = o.stepStats) != null && v[f]) {
        const p = o.stepStats[f];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function r(f) {
      return l(f) ? "state-complete" : i(f) ? "state-partial" : "state-pending";
    }
    function u(f) {
      return !1;
    }
    function d(f) {
      n("step-change", f);
    }
    return (f, v) => (a(), c("div", Np, [
      s("div", Ap, [
        (a(!0), c(G, null, ge(e.steps, (p, w) => (a(), c("div", {
          key: p.id,
          class: Ce(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": i(p.id),
            disabled: u(p.id)
          }]),
          onClick: (g) => d(p.id)
        }, [
          s("div", {
            class: Ce(["step-indicator", r(p.id)])
          }, [
            l(p.id) ? (a(), c("span", zp, "✓")) : (a(), c("span", Op, m(w + 1), 1))
          ], 2),
          s("div", Fp, m(p.label), 1),
          w < e.steps.length - 1 ? (a(), c("div", Bp)) : y("", !0)
        ], 10, Up))), 128))
      ]),
      s("div", Vp, [
        He(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Gp = /* @__PURE__ */ pe(Wp, [["__scopeId", "data-v-2a7b3af8"]]), Hp = /* @__PURE__ */ fe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = F(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = F(() => `confidence-${o.value}`), l = F(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, r) => (a(), c("span", {
      class: Ce(["confidence-badge", n.value, e.size])
    }, m(l.value), 3));
  }
}), Vn = /* @__PURE__ */ pe(Hp, [["__scopeId", "data-v-17ec4b80"]]), Kp = { class: "node-info" }, jp = { class: "node-info-text" }, qp = { class: "item-body" }, Yp = {
  key: 0,
  class: "resolved-state"
}, Xp = {
  key: 1,
  class: "multiple-options"
}, Jp = { class: "options-list" }, Qp = ["onClick"], Zp = ["name", "value", "checked", "onChange"], eg = { class: "option-content" }, tg = { class: "option-header" }, sg = { class: "option-package-id" }, og = {
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
  class: "searching-state"
}, cg = { class: "options-list" }, ug = ["onClick"], dg = ["name", "value"], mg = { class: "option-content" }, fg = { class: "option-header" }, vg = { class: "option-package-id" }, pg = {
  key: 0,
  class: "option-description"
}, gg = { class: "option-meta" }, hg = {
  key: 0,
  class: "installed-badge"
}, yg = {
  key: 2,
  class: "unresolved-message"
}, wg = { class: "action-buttons" }, _g = /* @__PURE__ */ fe({
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
    isSearching: { type: Boolean }
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice", "search-result-selected"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(d, f = 80) {
      return d.length <= f ? d : d.slice(0, f - 3) + "...";
    }
    const i = F(() => !!o.choice);
    F(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), F(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
    });
    const r = F(() => {
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
    function u(d) {
      n("option-selected", d);
    }
    return (d, f) => (a(), c("div", {
      class: Ce(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      s("div", Kp, [
        s("span", jp, [
          f[7] || (f[7] = _("Node type: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: Ce(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", qp, [
        i.value ? (a(), c("div", Yp, [
          $(Re, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...f[8] || (f[8] = [
              _(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", Xp, [
          f[12] || (f[12] = s("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          s("div", Jp, [
            (a(!0), c(G, null, ge(e.options, (v, p) => (a(), c("label", {
              key: v.package_id,
              class: Ce(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => u(p)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => u(p)
              }, null, 40, Zp),
              s("div", eg, [
                s("div", tg, [
                  s("span", sg, m(v.package_id), 1),
                  $(Vn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), c("div", og, m(v.title), 1)) : y("", !0),
                s("div", ng, [
                  v.is_installed ? (a(), c("span", ag, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Qp))), 128))
          ]),
          s("div", lg, [
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => n("search"))
            }, {
              default: h(() => [...f[9] || (f[9] = [
                _(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...f[10] || (f[10] = [
                _(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...f[11] || (f[11] = [
                _(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), c("div", ig, [
          e.isSearching ? (a(), c("div", rg, [...f[13] || (f[13] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), c(G, { key: 1 }, [
            f[14] || (f[14] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", cg, [
              (a(!0), c(G, null, ge(e.searchResults.slice(0, 5), (v, p) => (a(), c("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: p
                }, null, 8, dg),
                s("div", mg, [
                  s("div", fg, [
                    s("span", vg, m(v.package_id), 1),
                    $(Vn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), c("div", pg, m(l(v.description)), 1)) : y("", !0),
                  s("div", gg, [
                    v.is_installed ? (a(), c("span", hg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, ug))), 128))
            ])
          ], 64)) : (a(), c("div", yg, [...f[15] || (f[15] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", wg, [
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => n("search"))
            }, {
              default: h(() => {
                var v;
                return [
                  _(m((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...f[16] || (f[16] = [
                _(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...f[17] || (f[17] = [
                _(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), bg = /* @__PURE__ */ pe(_g, [["__scopeId", "data-v-c2997d1d"]]), kg = { class: "item-navigator" }, $g = { class: "nav-item-info" }, Cg = ["title"], xg = { class: "nav-controls" }, Sg = { class: "nav-arrows" }, Ig = ["disabled"], Eg = ["disabled"], Tg = { class: "nav-position" }, Pg = /* @__PURE__ */ fe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), c("div", kg, [
      s("div", $g, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, Cg)
      ]),
      s("div", xg, [
        s("div", Sg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Ig),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, Eg)
        ]),
        s("span", Tg, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), Rr = /* @__PURE__ */ pe(Pg, [["__scopeId", "data-v-74af7920"]]), Mg = ["type", "value", "placeholder", "disabled"], Rg = {
  key: 0,
  class: "base-input-error"
}, Dg = /* @__PURE__ */ fe({
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
    return (t, o) => (a(), c("div", {
      class: Ce(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ce(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = ss((n) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ss((n) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Mg),
      e.error ? (a(), c("span", Rg, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), os = /* @__PURE__ */ pe(Dg, [["__scopeId", "data-v-9ba02cdc"]]), Lg = { class: "node-resolution-step" }, Ng = {
  key: 0,
  class: "auto-resolved-section"
}, Ag = { class: "section-header" }, Ug = { class: "stat-badge" }, zg = { class: "resolved-packages-list" }, Og = { class: "package-info" }, Fg = { class: "package-id" }, Bg = { class: "node-count" }, Vg = { class: "package-actions" }, Wg = {
  key: 0,
  class: "status-badge install"
}, Gg = {
  key: 1,
  class: "status-badge skip"
}, Hg = ["onClick"], Kg = {
  key: 1,
  class: "section-divider"
}, jg = { class: "step-header" }, qg = { class: "stat-badge" }, Yg = {
  key: 1,
  class: "step-body"
}, Xg = {
  key: 3,
  class: "empty-state"
}, Jg = { class: "node-modal-body" }, Qg = { class: "node-search-results-container" }, Zg = {
  key: 0,
  class: "node-search-results"
}, eh = ["onClick"], th = { class: "node-result-header" }, sh = { class: "node-result-package-id" }, oh = {
  key: 0,
  class: "node-result-description"
}, nh = {
  key: 1,
  class: "node-empty-state"
}, ah = {
  key: 2,
  class: "node-empty-state"
}, lh = {
  key: 3,
  class: "node-empty-state"
}, ih = { class: "node-manual-entry-modal" }, rh = { class: "node-modal-body" }, ch = { class: "node-modal-actions" }, uh = /* @__PURE__ */ fe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: t }) {
    const o = e, n = t, { searchNodes: l } = Mr(), i = b(0), r = b(!1), u = b(!1), d = b(""), f = b(""), v = b([]), p = b(!1), w = b(/* @__PURE__ */ new Map()), g = b(/* @__PURE__ */ new Set()), k = b(!1);
    function x() {
      k.value && z(), k.value = !1;
    }
    const C = F(() => o.nodes[i.value]), I = F(() => o.nodes.filter((_e) => o.nodeChoices.has(_e.node_type)).length), N = F(() => C.value ? w.value.get(C.value.node_type) || [] : []), P = F(() => C.value ? g.value.has(C.value.node_type) : !1);
    Tt(C, async (_e) => {
      var Se;
      _e && ((Se = _e.options) != null && Se.length || w.value.has(_e.node_type) || g.value.has(_e.node_type) || o.nodeChoices.has(_e.node_type) || await E(_e.node_type));
    }, { immediate: !0 });
    async function E(_e) {
      g.value.add(_e);
      try {
        const Se = await l(_e, 5);
        w.value.set(_e, Se);
      } catch {
        w.value.set(_e, []);
      } finally {
        g.value.delete(_e);
      }
    }
    const H = F(() => o.autoResolvedPackages.filter((_e) => !o.skippedPackages.has(_e.package_id)).length);
    function K(_e) {
      return o.skippedPackages.has(_e);
    }
    function O(_e) {
      n("package-skip", _e);
    }
    const S = F(() => {
      var Se;
      if (!C.value) return "not-found";
      const _e = o.nodeChoices.get(C.value.node_type);
      if (_e)
        switch (_e.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Se = C.value.options) != null && Se.length ? "ambiguous" : "not-found";
    }), T = F(() => {
      var Se;
      if (!C.value) return;
      const _e = o.nodeChoices.get(C.value.node_type);
      if (_e)
        switch (_e.action) {
          case "install":
            return _e.package_id ? `→ ${_e.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Se = C.value.options) != null && Se.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function A(_e) {
      _e >= 0 && _e < o.nodes.length && (i.value = _e);
    }
    function re() {
      C.value && n("mark-optional", C.value.node_type);
    }
    function Y() {
      C.value && n("skip", C.value.node_type);
    }
    function q(_e) {
      C.value && n("option-selected", C.value.node_type, _e);
    }
    function oe() {
      C.value && n("clear-choice", C.value.node_type);
    }
    function Z() {
      C.value && (d.value = C.value.node_type, v.value = N.value, r.value = !0, Ee(d.value));
    }
    function U() {
      f.value = "", u.value = !0;
    }
    function z() {
      r.value = !1, d.value = "", v.value = [];
    }
    function D() {
      u.value = !1, f.value = "";
    }
    let we = null;
    function ve() {
      we && clearTimeout(we), we = setTimeout(() => {
        Ee(d.value);
      }, 300);
    }
    async function Ee(_e) {
      if (!_e.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(_e, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function De(_e) {
      C.value && (n("manual-entry", C.value.node_type, _e.package_id), z());
    }
    function Ke(_e) {
      C.value && n("manual-entry", C.value.node_type, _e.package_id);
    }
    function Je() {
      !C.value || !f.value.trim() || (n("manual-entry", C.value.node_type, f.value.trim()), D());
    }
    return (_e, Se) => {
      var We, ye;
      return a(), c("div", Lg, [
        e.autoResolvedPackages.length > 0 ? (a(), c("div", Ng, [
          s("div", Ag, [
            Se[6] || (Se[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", Ug, m(H.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", zg, [
            (a(!0), c(G, null, ge(e.autoResolvedPackages, (le) => (a(), c("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", Og, [
                s("code", Fg, m(le.package_id), 1),
                s("span", Bg, m(le.node_types_count) + " node type" + m(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", Vg, [
                K(le.package_id) ? (a(), c("span", Gg, " SKIPPED ")) : (a(), c("span", Wg, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (Be) => O(le.package_id)
                }, m(K(le.package_id) ? "Include" : "Skip"), 9, Hg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), c("div", Kg)) : y("", !0),
        e.nodes.length > 0 ? (a(), c(G, { key: 2 }, [
          s("div", jg, [
            Se[7] || (Se[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", qg, m(I.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (a(), M(Rr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Se[0] || (Se[0] = (le) => A(i.value - 1)),
            onNext: Se[1] || (Se[1] = (le) => A(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          C.value ? (a(), c("div", Yg, [
            $(bg, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((We = C.value.options) != null && We.length),
              options: C.value.options,
              choice: (ye = e.nodeChoices) == null ? void 0 : ye.get(C.value.node_type),
              status: S.value,
              "status-label": T.value,
              "search-results": N.value,
              "is-searching": P.value,
              onMarkOptional: re,
              onSkip: Y,
              onManualEntry: U,
              onSearch: Z,
              onOptionSelected: q,
              onClearChoice: oe,
              onSearchResultSelected: Ke
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), c("div", Xg, [...Se[8] || (Se[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), M(kt, { to: "body" }, [
          r.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Se[4] || (Se[4] = ut((le) => k.value = !0, ["self"])),
            onMouseup: ut(x, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: Se[3] || (Se[3] = (le) => k.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                Se[9] || (Se[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              s("div", Jg, [
                $(os, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Se[2] || (Se[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: ve
                }, null, 8, ["modelValue"]),
                s("div", Qg, [
                  v.value.length > 0 ? (a(), c("div", Zg, [
                    (a(!0), c(G, null, ge(v.value, (le) => (a(), c("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (Be) => De(le)
                    }, [
                      s("div", th, [
                        s("code", sh, m(le.package_id), 1),
                        le.match_confidence ? (a(), M(Vn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (a(), c("div", oh, m(le.description), 1)) : y("", !0)
                    ], 8, eh))), 128))
                  ])) : p.value ? (a(), c("div", nh, "Searching...")) : d.value ? (a(), c("div", ah, 'No packages found matching "' + m(d.value) + '"', 1)) : (a(), c("div", lh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), M(kt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ut(D, ["self"])
          }, [
            s("div", ih, [
              s("div", { class: "node-modal-header" }, [
                Se[10] || (Se[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              s("div", rh, [
                $(os, {
                  modelValue: f.value,
                  "onUpdate:modelValue": Se[5] || (Se[5] = (le) => f.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", ch, [
                  $(Re, {
                    variant: "secondary",
                    onClick: D
                  }, {
                    default: h(() => [...Se[11] || (Se[11] = [
                      _("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(Re, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: Je
                  }, {
                    default: h(() => [...Se[12] || (Se[12] = [
                      _(" Add Package ", -1)
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
}), dh = /* @__PURE__ */ pe(uh, [["__scopeId", "data-v-281581bc"]]), mh = { class: "node-info" }, fh = { class: "node-info-text" }, vh = { class: "item-body" }, ph = {
  key: 0,
  class: "resolved-state"
}, gh = {
  key: 1,
  class: "multiple-options"
}, hh = { class: "options-list" }, yh = ["onClick"], wh = ["name", "value", "checked", "onChange"], _h = { class: "option-content" }, bh = { class: "option-header" }, kh = { class: "option-filename" }, $h = { class: "option-meta" }, Ch = { class: "option-size" }, xh = { class: "option-category" }, Sh = { class: "option-path" }, Ih = { class: "action-buttons" }, Eh = {
  key: 2,
  class: "unresolved"
}, Th = { class: "action-buttons" }, Ph = /* @__PURE__ */ fe({
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
    const o = e, n = t, l = F(() => !!o.choice);
    F(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), F(() => {
      var d, f;
      return ((f = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const i = F(() => {
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
    function r(d) {
      n("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const f = d / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, f) => (a(), c("div", {
      class: Ce(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", mh, [
        s("span", fh, [
          f[7] || (f[7] = _("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: Ce(["status-badge", i.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", vh, [
        l.value ? (a(), c("div", ph, [
          $(Re, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...f[8] || (f[8] = [
              _(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", gh, [
          f[12] || (f[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", hh, [
            (a(!0), c(G, null, ge(e.options, (v, p) => (a(), c("label", {
              key: v.model.hash,
              class: Ce(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => r(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => r(p)
              }, null, 40, wh),
              s("div", _h, [
                s("div", bh, [
                  s("span", kh, m(v.model.filename), 1),
                  $(Vn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", $h, [
                  s("span", Ch, m(u(v.model.size)), 1),
                  s("span", xh, m(v.model.category), 1)
                ]),
                s("div", Sh, m(v.model.relative_path), 1)
              ])
            ], 10, yh))), 128))
          ]),
          s("div", Ih, [
            $(Re, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => n("search"))
            }, {
              default: h(() => [...f[9] || (f[9] = [
                _(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...f[10] || (f[10] = [
                _(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...f[11] || (f[11] = [
                _(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), c("div", Eh, [
          f[16] || (f[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Th, [
            $(Re, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => n("search"))
            }, {
              default: h(() => [...f[13] || (f[13] = [
                _(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...f[14] || (f[14] = [
                _(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...f[15] || (f[15] = [
                _(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Mh = /* @__PURE__ */ pe(Ph, [["__scopeId", "data-v-8a82fefa"]]), Rh = { class: "model-resolution-step" }, Dh = { class: "step-header" }, Lh = { class: "step-info" }, Nh = { class: "step-title" }, Ah = { class: "step-description" }, Uh = { class: "stat-badge" }, zh = {
  key: 1,
  class: "step-body"
}, Oh = {
  key: 2,
  class: "empty-state"
}, Fh = { class: "model-search-modal" }, Bh = { class: "model-modal-body" }, Vh = {
  key: 0,
  class: "model-search-results"
}, Wh = ["onClick"], Gh = { class: "model-result-header" }, Hh = { class: "model-result-filename" }, Kh = { class: "model-result-meta" }, jh = { class: "model-result-category" }, qh = { class: "model-result-size" }, Yh = {
  key: 0,
  class: "model-result-path"
}, Xh = {
  key: 1,
  class: "model-no-results"
}, Jh = {
  key: 2,
  class: "model-searching"
}, Qh = { class: "model-download-url-modal" }, Zh = { class: "model-modal-body" }, e1 = { class: "model-input-group" }, t1 = { class: "model-input-group" }, s1 = { class: "model-modal-actions" }, o1 = /* @__PURE__ */ fe({
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
    function n(z) {
      var D;
      return z && ((D = o[z]) == null ? void 0 : D[0]) || null;
    }
    const l = e, i = t, r = b(0), u = b(!1), d = b(!1), f = b(""), v = b(""), p = b(""), w = b([]), g = b(!1), k = F(() => l.models[r.value]), x = F(() => l.models.some((z) => z.is_download_intent)), C = F(() => l.models.filter(
      (z) => l.modelChoices.has(z.filename) || z.is_download_intent
    ).length), I = F(() => {
      var D;
      if (!k.value) return "";
      const z = n((D = k.value.reference) == null ? void 0 : D.node_type);
      return z ? `${z}/${k.value.filename}` : "";
    }), N = F(() => {
      var D;
      if (!k.value) return "not-found";
      const z = l.modelChoices.get(k.value.filename);
      if (z)
        switch (z.action) {
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
      return k.value.is_download_intent ? "download" : (D = k.value.options) != null && D.length ? "ambiguous" : "not-found";
    }), P = F(() => {
      var D, we;
      if (!k.value) return;
      const z = l.modelChoices.get(k.value.filename);
      if (z)
        switch (z.action) {
          case "select":
            return (D = z.selected_model) != null && D.filename ? `→ ${z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (we = k.value.options) != null && we.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function E(z) {
      z >= 0 && z < l.models.length && (r.value = z);
    }
    function H() {
      k.value && i("mark-optional", k.value.filename);
    }
    function K() {
      k.value && i("skip", k.value.filename);
    }
    function O(z) {
      k.value && i("option-selected", k.value.filename, z);
    }
    function S() {
      k.value && i("clear-choice", k.value.filename);
    }
    function T() {
      k.value && (f.value = k.value.filename, u.value = !0);
    }
    function A() {
      k.value && (v.value = k.value.download_source || "", p.value = k.value.target_path || I.value, d.value = !0);
    }
    function re() {
      u.value = !1, f.value = "", w.value = [];
    }
    function Y() {
      d.value = !1, v.value = "", p.value = "";
    }
    function q() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function oe(z) {
      k.value && re();
    }
    function Z() {
      !k.value || !v.value.trim() || (i("download-url", k.value.filename, v.value.trim(), p.value.trim() || void 0), Y());
    }
    function U(z) {
      if (!z) return "Unknown";
      const D = z / (1024 * 1024 * 1024);
      return D >= 1 ? `${D.toFixed(2)} GB` : `${(z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (z, D) => {
      var we, ve, Ee;
      return a(), c("div", Rh, [
        s("div", Dh, [
          s("div", Lh, [
            s("h3", Nh, m(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Ah, m(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Uh, m(C.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (a(), M(Rr, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": r.value,
          "total-items": e.models.length,
          onPrev: D[0] || (D[0] = (De) => E(r.value - 1)),
          onNext: D[1] || (D[1] = (De) => E(r.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (a(), c("div", zh, [
          $(Mh, {
            filename: k.value.filename,
            "node-type": ((we = k.value.reference) == null ? void 0 : we.node_type) || "Unknown",
            "has-multiple-options": !!((ve = k.value.options) != null && ve.length),
            options: k.value.options,
            choice: (Ee = e.modelChoices) == null ? void 0 : Ee.get(k.value.filename),
            status: N.value,
            "status-label": P.value,
            onMarkOptional: H,
            onSkip: K,
            onDownloadUrl: A,
            onSearch: T,
            onOptionSelected: O,
            onClearChoice: S
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), c("div", Oh, [...D[5] || (D[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), M(kt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ut(re, ["self"])
          }, [
            s("div", Fh, [
              s("div", { class: "model-modal-header" }, [
                D[6] || (D[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              s("div", Bh, [
                $(os, {
                  modelValue: f.value,
                  "onUpdate:modelValue": D[2] || (D[2] = (De) => f.value = De),
                  placeholder: "Search by filename, category...",
                  onInput: q
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), c("div", Vh, [
                  (a(!0), c(G, null, ge(w.value, (De) => (a(), c("div", {
                    key: De.hash,
                    class: "model-search-result-item",
                    onClick: (Ke) => oe()
                  }, [
                    s("div", Gh, [
                      s("code", Hh, m(De.filename), 1)
                    ]),
                    s("div", Kh, [
                      s("span", jh, m(De.category), 1),
                      s("span", qh, m(U(De.size)), 1)
                    ]),
                    De.relative_path ? (a(), c("div", Yh, m(De.relative_path), 1)) : y("", !0)
                  ], 8, Wh))), 128))
                ])) : f.value && !g.value ? (a(), c("div", Xh, ' No models found matching "' + m(f.value) + '" ', 1)) : y("", !0),
                g.value ? (a(), c("div", Jh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), M(kt, { to: "body" }, [
          d.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ut(Y, ["self"])
          }, [
            s("div", Qh, [
              s("div", { class: "model-modal-header" }, [
                D[7] || (D[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", Zh, [
                s("div", e1, [
                  D[8] || (D[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  $(os, {
                    modelValue: v.value,
                    "onUpdate:modelValue": D[3] || (D[3] = (De) => v.value = De),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", t1, [
                  D[9] || (D[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  $(os, {
                    modelValue: p.value,
                    "onUpdate:modelValue": D[4] || (D[4] = (De) => p.value = De),
                    placeholder: I.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", s1, [
                  $(Re, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: h(() => [...D[10] || (D[10] = [
                      _("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(Re, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: Z
                  }, {
                    default: h(() => [...D[11] || (D[11] = [
                      _(" Queue Download ", -1)
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
}), n1 = /* @__PURE__ */ pe(o1, [["__scopeId", "data-v-c6acbada"]]), a1 = { class: "applying-step" }, l1 = {
  key: 0,
  class: "phase-content"
}, i1 = {
  key: 1,
  class: "phase-content"
}, r1 = { class: "phase-description" }, c1 = { class: "overall-progress" }, u1 = { class: "progress-bar" }, d1 = { class: "progress-label" }, m1 = { class: "install-list" }, f1 = { class: "install-icon" }, v1 = { key: 0 }, p1 = {
  key: 1,
  class: "spinner"
}, g1 = { key: 2 }, h1 = { key: 3 }, y1 = {
  key: 0,
  class: "install-error"
}, w1 = {
  key: 2,
  class: "phase-content"
}, _1 = { class: "phase-header" }, b1 = { class: "phase-title" }, k1 = { class: "completion-summary" }, $1 = {
  key: 0,
  class: "summary-item success"
}, C1 = { class: "summary-text" }, x1 = {
  key: 1,
  class: "summary-item error"
}, S1 = { class: "summary-text" }, I1 = {
  key: 2,
  class: "failed-list"
}, E1 = { class: "failed-node-id" }, T1 = { class: "failed-error" }, P1 = {
  key: 4,
  class: "summary-item success"
}, M1 = {
  key: 5,
  class: "restart-prompt"
}, R1 = {
  key: 3,
  class: "phase-content error"
}, D1 = { class: "error-message" }, L1 = /* @__PURE__ */ fe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = F(() => {
      var f, v;
      const u = ((f = t.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) || t.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = F(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = F(() => n.value.length > 0);
    function i(u, d) {
      var v, p;
      const f = (v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === u);
      return f ? f.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function r(u) {
      var d, f;
      return (f = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : f.error;
    }
    return (u, d) => {
      var f, v, p, w;
      return a(), c("div", a1, [
        e.progress.phase === "resolving" ? (a(), c("div", l1, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), c("div", i1, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", r1, " Installing " + m((((f = e.progress.nodeInstallProgress) == null ? void 0 : f.currentIndex) ?? 0) + 1) + " of " + m(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", c1, [
            s("div", u1, [
              s("div", {
                class: "progress-fill",
                style: qt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", d1, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", m1, [
            (a(!0), c(G, null, ge(e.progress.nodesToInstall, (g, k) => (a(), c("div", {
              key: g,
              class: Ce(["install-item", i(g, k)])
            }, [
              s("span", f1, [
                i(g, k) === "pending" ? (a(), c("span", v1, "○")) : i(g, k) === "installing" ? (a(), c("span", p1, "◌")) : i(g, k) === "complete" ? (a(), c("span", g1, "✓")) : i(g, k) === "failed" ? (a(), c("span", h1, "✗")) : y("", !0)
              ]),
              s("code", null, m(g), 1),
              r(g) ? (a(), c("span", y1, m(r(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), c("div", w1, [
          s("div", _1, [
            s("span", {
              class: Ce(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", b1, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", k1, [
            e.progress.nodesInstalled.length > 0 ? (a(), c("div", $1, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", C1, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", x1, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", S1, m(n.value.length) + " package" + m(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", I1, [
              (a(!0), c(G, null, ge(n.value, (g) => (a(), c("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                s("code", E1, m(g.node_id), 1),
                s("span", T1, m(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => u.$emit("retry-failed"))
            }, " Retry Failed (" + m(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), c("div", P1, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), c("div", M1, [
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
        ])) : e.progress.phase === "error" ? (a(), c("div", R1, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", D1, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), N1 = /* @__PURE__ */ pe(L1, [["__scopeId", "data-v-5efaae58"]]), A1 = {
  key: 0,
  class: "loading-state"
}, U1 = {
  key: 1,
  class: "wizard-content"
}, z1 = {
  key: 0,
  class: "step-content"
}, O1 = { class: "analysis-summary" }, F1 = { class: "analysis-header" }, B1 = { class: "summary-description" }, V1 = { class: "stats-grid" }, W1 = { class: "stat-card" }, G1 = { class: "stat-items" }, H1 = {
  key: 0,
  class: "stat-item success"
}, K1 = { class: "stat-count" }, j1 = {
  key: 1,
  class: "stat-item info"
}, q1 = { class: "stat-count" }, Y1 = {
  key: 2,
  class: "stat-item warning"
}, X1 = { class: "stat-count" }, J1 = {
  key: 3,
  class: "stat-item error"
}, Q1 = { class: "stat-count" }, Z1 = { class: "stat-card" }, ey = { class: "stat-items" }, ty = { class: "stat-item success" }, sy = { class: "stat-count" }, oy = {
  key: 0,
  class: "stat-item info"
}, ny = { class: "stat-count" }, ay = {
  key: 1,
  class: "stat-item warning"
}, ly = { class: "stat-count" }, iy = {
  key: 2,
  class: "stat-item warning"
}, ry = { class: "stat-count" }, cy = {
  key: 3,
  class: "stat-item error"
}, uy = { class: "stat-count" }, dy = {
  key: 0,
  class: "status-message warning"
}, my = { class: "status-text" }, fy = {
  key: 1,
  class: "status-message info"
}, vy = { class: "status-text" }, py = {
  key: 2,
  class: "status-message info"
}, gy = { class: "status-text" }, hy = {
  key: 3,
  class: "status-message warning"
}, yy = { class: "status-text" }, wy = {
  key: 4,
  class: "status-message success"
}, _y = {
  key: 5,
  class: "category-mismatch-section"
}, by = { class: "mismatch-list" }, ky = { class: "mismatch-path" }, $y = { class: "mismatch-target" }, Cy = {
  key: 3,
  class: "step-content"
}, xy = { class: "review-summary" }, Sy = { class: "review-stats" }, Iy = { class: "review-stat" }, Ey = { class: "stat-value" }, Ty = { class: "review-stat" }, Py = { class: "stat-value" }, My = { class: "review-stat" }, Ry = { class: "stat-value" }, Dy = { class: "review-stat" }, Ly = { class: "stat-value" }, Ny = {
  key: 0,
  class: "review-section"
}, Ay = { class: "section-title" }, Uy = { class: "review-items" }, zy = { class: "item-name" }, Oy = { class: "item-choice" }, Fy = {
  key: 0,
  class: "choice-badge install"
}, By = {
  key: 1,
  class: "choice-badge skip"
}, Vy = {
  key: 1,
  class: "review-section"
}, Wy = { class: "section-title" }, Gy = { class: "review-items" }, Hy = { class: "item-name" }, Ky = { class: "item-choice" }, jy = {
  key: 0,
  class: "choice-badge install"
}, qy = {
  key: 1,
  class: "choice-badge optional"
}, Yy = {
  key: 2,
  class: "choice-badge skip"
}, Xy = {
  key: 1,
  class: "choice-badge pending"
}, Jy = {
  key: 2,
  class: "review-section"
}, Qy = { class: "section-title" }, Zy = { class: "review-items" }, e0 = { class: "item-name" }, t0 = { class: "item-choice" }, s0 = {
  key: 0,
  class: "choice-badge install"
}, o0 = {
  key: 1,
  class: "choice-badge download"
}, n0 = {
  key: 2,
  class: "choice-badge optional"
}, a0 = {
  key: 3,
  class: "choice-badge skip"
}, l0 = {
  key: 4,
  class: "choice-badge skip"
}, i0 = {
  key: 1,
  class: "choice-badge download"
}, r0 = {
  key: 2,
  class: "choice-badge pending"
}, c0 = {
  key: 3,
  class: "no-choices"
}, u0 = /* @__PURE__ */ fe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: i, installNodes: r, queueModelDownloads: u, progress: d, resetProgress: f } = Mr(), { loadPendingDownloads: v } = un(), { openFileLocation: p } = dt(), w = b(null), g = b(!1), k = b(!1), x = b(null), C = b("analysis"), I = b([]), N = b(/* @__PURE__ */ new Map()), P = b(/* @__PURE__ */ new Map()), E = b(/* @__PURE__ */ new Set()), H = F(() => {
      const X = [
        { id: "analysis", label: "Analysis" }
      ];
      return (O.value || A.value) && X.push({ id: "nodes", label: "Nodes" }), (S.value || T.value) && X.push({ id: "models", label: "Models" }), X.push({ id: "review", label: "Review" }), C.value === "applying" && X.push({ id: "applying", label: "Applying" }), X;
    }), K = F(() => w.value ? w.value.stats.needs_user_input : !1), O = F(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), S = F(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = F(() => w.value ? w.value.stats.download_intents > 0 : !1), A = F(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), re = F(() => w.value ? w.value.nodes.resolved.length : 0), Y = F(() => w.value ? w.value.models.resolved.filter((X) => X.has_category_mismatch) : []), q = F(() => Y.value.length > 0), oe = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.resolved.filter((V) => !V.is_installed), R = /* @__PURE__ */ new Set();
      return X.filter((V) => R.has(V.package.package_id) ? !1 : (R.add(V.package.package_id), !0));
    }), Z = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.resolved.filter((V) => !V.is_installed), R = /* @__PURE__ */ new Map();
      for (const V of X) {
        const ce = R.get(V.package.package_id);
        ce ? ce.node_types_count++ : R.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(R.values());
    }), U = F(() => oe.value.filter((X) => !E.value.has(X.package.package_id))), z = F(() => w.value ? w.value.models.resolved.filter((X) => X.match_type === "download_intent").map((X) => ({
      filename: X.reference.widget_value,
      reference: X.reference,
      is_download_intent: !0,
      resolved_model: X.model,
      download_source: X.download_source,
      target_path: X.target_path
    })) : []), D = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), R = w.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((ce) => ({
          package_id: ce.package.package_id,
          title: ce.package.title,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          is_installed: ce.is_installed
        }))
      }));
      return [...X, ...R];
    }), we = F(() => {
      if (!w.value) return [];
      const X = w.value.models.unresolved.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), R = w.value.models.ambiguous.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        has_multiple_options: !0,
        options: V.options.map((ce) => ({
          model: ce.model,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          has_download_source: ce.has_download_source
        }))
      }));
      return [...X, ...R];
    }), ve = F(() => {
      const X = we.value, R = z.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...X, ...R];
    }), Ee = F(() => {
      let X = U.value.length;
      for (const R of N.value.values())
        R.action === "install" && X++;
      for (const R of P.value.values())
        R.action === "select" && X++;
      return X;
    }), De = F(() => {
      let X = 0;
      for (const R of P.value.values())
        R.action === "download" && X++;
      return X;
    }), Ke = F(() => {
      let X = 0;
      for (const R of N.value.values())
        R.action === "optional" && X++;
      for (const R of P.value.values())
        R.action === "optional" && X++;
      return X;
    }), Je = F(() => {
      let X = E.value.size;
      for (const R of N.value.values())
        R.action === "skip" && X++;
      for (const R of P.value.values())
        R.action === "skip" && X++;
      for (const R of D.value)
        N.value.has(R.node_type) || X++;
      for (const R of we.value)
        P.value.has(R.filename) || X++;
      return X;
    }), _e = F(() => {
      const X = {};
      if (X.analysis = { resolved: 1, total: 1 }, O.value) {
        const R = D.value.length, V = D.value.filter(
          (ce) => N.value.has(ce.node_type)
        ).length;
        X.nodes = { resolved: V, total: R };
      }
      if (S.value || T.value) {
        const R = ve.value.length, V = ve.value.filter(
          (ce) => P.value.has(ce.filename) || ce.is_download_intent
        ).length;
        X.models = { resolved: V, total: R };
      }
      if (X.review = { resolved: 1, total: 1 }, C.value === "applying") {
        const R = d.totalFiles || 1, V = d.completedFiles.length;
        X.applying = { resolved: V, total: R };
      }
      return X;
    });
    function Se(X) {
      C.value = X;
    }
    function We() {
      const X = H.value.findIndex((R) => R.id === C.value);
      X > 0 && (C.value = H.value[X - 1].id);
    }
    function ye() {
      const X = H.value.findIndex((R) => R.id === C.value);
      X < H.value.length - 1 && (C.value = H.value[X + 1].id);
    }
    async function le() {
      g.value = !0, x.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (X) {
        x.value = X instanceof Error ? X.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function Be() {
      I.value.includes("analysis") || I.value.push("analysis"), O.value || A.value ? C.value = "nodes" : S.value || T.value ? C.value = "models" : C.value = "review";
    }
    function Ie(X) {
      N.value.set(X, { action: "optional" });
    }
    function L(X) {
      N.value.set(X, { action: "skip" });
    }
    function B(X, R) {
      var ce;
      const V = D.value.find((Te) => Te.node_type === X);
      (ce = V == null ? void 0 : V.options) != null && ce[R] && N.value.set(X, {
        action: "install",
        package_id: V.options[R].package_id
      });
    }
    function se(X, R) {
      N.value.set(X, {
        action: "install",
        package_id: R
      });
    }
    function ae(X) {
      N.value.delete(X);
    }
    function de(X) {
      E.value.has(X) ? E.value.delete(X) : E.value.add(X);
    }
    function me(X) {
      P.value.set(X, { action: "optional" });
    }
    function be(X) {
      P.value.set(X, { action: "skip" });
    }
    function ke(X, R) {
      var ce;
      const V = we.value.find((Te) => Te.filename === X);
      (ce = V == null ? void 0 : V.options) != null && ce[R] && P.value.set(X, {
        action: "select",
        selected_model: V.options[R].model
      });
    }
    function ne(X, R, V) {
      P.value.set(X, {
        action: "download",
        url: R,
        target_path: V
      });
    }
    function ue(X) {
      P.value.delete(X);
    }
    async function Me(X) {
      try {
        await p(X);
      } catch (R) {
        x.value = R instanceof Error ? R.message : "Failed to open file location";
      }
    }
    async function $e() {
      var X;
      k.value = !0, x.value = null, f(), d.phase = "resolving", C.value = "applying";
      try {
        const R = await i(o.workflowName, N.value, P.value, E.value);
        R.models_to_download && R.models_to_download.length > 0 && u(o.workflowName, R.models_to_download);
        const V = [
          ...R.nodes_to_install || [],
          ...U.value.map((Te) => Te.package.package_id)
        ];
        d.nodesToInstall = [...new Set(V)], d.nodesToInstall.length > 0 && await r(o.workflowName), d.phase = "complete", await v();
        const ce = d.installError || ((X = d.nodeInstallProgress) == null ? void 0 : X.completedNodes.some((Te) => !Te.success));
        !d.needsRestart && !ce && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (R) {
        x.value = R instanceof Error ? R.message : "Failed to apply resolution", d.error = x.value, d.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function ee() {
      n("refresh"), n("restart"), n("close");
    }
    async function j() {
      var R;
      const X = ((R = d.nodeInstallProgress) == null ? void 0 : R.completedNodes.filter((V) => !V.success).map((V) => V.node_id)) || [];
      if (X.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: X.length
        }, d.nodesToInstall = X, d.nodesInstalled = [], d.installError = void 0;
        try {
          await r(o.workflowName), d.phase = "complete";
        } catch (V) {
          d.error = V instanceof Error ? V.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return st(le), (X, R) => (a(), M(wt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: x.value || void 0,
      "fixed-height": !0,
      onClose: R[1] || (R[1] = (V) => n("close"))
    }, {
      body: h(() => [
        g.value && !w.value ? (a(), c("div", A1, [...R[2] || (R[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), c("div", U1, [
          $(Gp, {
            steps: H.value,
            "current-step": C.value,
            "completed-steps": I.value,
            "step-stats": _e.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          C.value === "analysis" ? (a(), c("div", z1, [
            s("div", O1, [
              s("div", F1, [
                R[3] || (R[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", B1, " Found " + m(w.value.stats.total_nodes) + " nodes and " + m(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", V1, [
                s("div", W1, [
                  R[12] || (R[12] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", G1, [
                    re.value > 0 ? (a(), c("div", H1, [
                      R[4] || (R[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", K1, m(re.value), 1),
                      R[5] || (R[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), c("div", j1, [
                      R[6] || (R[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", q1, m(w.value.stats.packages_needing_installation), 1),
                      R[7] || (R[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), c("div", Y1, [
                      R[8] || (R[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", X1, m(w.value.nodes.ambiguous.length), 1),
                      R[9] || (R[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), c("div", J1, [
                      R[10] || (R[10] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", Q1, m(w.value.nodes.unresolved.length), 1),
                      R[11] || (R[11] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", Z1, [
                  R[23] || (R[23] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", ey, [
                    s("div", ty, [
                      R[13] || (R[13] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", sy, m(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      R[14] || (R[14] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), c("div", oy, [
                      R[15] || (R[15] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", ny, m(w.value.stats.download_intents), 1),
                      R[16] || (R[16] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    q.value ? (a(), c("div", ay, [
                      R[17] || (R[17] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", ly, m(Y.value.length), 1),
                      R[18] || (R[18] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), c("div", iy, [
                      R[19] || (R[19] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", ry, m(w.value.models.ambiguous.length), 1),
                      R[20] || (R[20] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), c("div", cy, [
                      R[21] || (R[21] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", uy, m(w.value.models.unresolved.length), 1),
                      R[22] || (R[22] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), c("div", dy, [
                R[24] || (R[24] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", my, m(D.value.length + we.value.length) + " items need your input", 1)
              ])) : A.value ? (a(), c("div", fy, [
                R[25] || (R[25] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", vy, m(w.value.stats.packages_needing_installation) + " package" + m(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(w.value.stats.nodes_needing_installation) + " node type" + m(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(T.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (a(), c("div", py, [
                R[26] || (R[26] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", gy, m(w.value.stats.download_intents) + " model" + m(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : q.value ? (a(), c("div", hy, [
                R[27] || (R[27] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", yy, m(Y.value.length) + " model" + m(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), c("div", wy, [...R[28] || (R[28] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              q.value ? (a(), c("div", _y, [
                R[31] || (R[31] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", by, [
                  (a(!0), c(G, null, ge(Y.value, (V) => {
                    var ce, Te;
                    return a(), c("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", ky, m(V.actual_category) + "/" + m((ce = V.model) == null ? void 0 : ce.filename), 1),
                      R[30] || (R[30] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", $y, m((Te = V.expected_categories) == null ? void 0 : Te[0]) + "/", 1),
                      V.file_path ? (a(), M(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (qe) => Me(V.file_path)
                      }, {
                        default: h(() => [...R[29] || (R[29] = [
                          _(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          C.value === "nodes" ? (a(), M(dh, {
            key: 1,
            nodes: D.value,
            "node-choices": N.value,
            "auto-resolved-packages": Z.value,
            "skipped-packages": E.value,
            onMarkOptional: Ie,
            onSkip: L,
            onOptionSelected: B,
            onManualEntry: se,
            onClearChoice: ae,
            onPackageSkip: de
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          C.value === "models" ? (a(), M(n1, {
            key: 2,
            models: ve.value,
            "model-choices": P.value,
            onMarkOptional: me,
            onSkip: be,
            onOptionSelected: ke,
            onDownloadUrl: ne,
            onClearChoice: ue
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          C.value === "review" ? (a(), c("div", Cy, [
            s("div", xy, [
              R[36] || (R[36] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", Sy, [
                s("div", Iy, [
                  s("span", Ey, m(Ee.value), 1),
                  R[32] || (R[32] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", Ty, [
                  s("span", Py, m(De.value), 1),
                  R[33] || (R[33] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", My, [
                  s("span", Ry, m(Ke.value), 1),
                  R[34] || (R[34] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", Dy, [
                  s("span", Ly, m(Je.value), 1),
                  R[35] || (R[35] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Z.value.length > 0 ? (a(), c("div", Ny, [
                s("h4", Ay, "Node Packages (" + m(Z.value.length) + ")", 1),
                s("div", Uy, [
                  (a(!0), c(G, null, ge(Z.value, (V) => (a(), c("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    s("code", zy, m(V.package_id), 1),
                    s("div", Oy, [
                      E.value.has(V.package_id) ? (a(), c("span", By, "Skipped")) : (a(), c("span", Fy, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              D.value.length > 0 ? (a(), c("div", Vy, [
                s("h4", Wy, "Node Choices (" + m(D.value.length) + ")", 1),
                s("div", Gy, [
                  (a(!0), c(G, null, ge(D.value, (V) => {
                    var ce, Te, qe, ft;
                    return a(), c("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      s("code", Hy, m(V.node_type), 1),
                      s("div", Ky, [
                        N.value.has(V.node_type) ? (a(), c(G, { key: 0 }, [
                          ((ce = N.value.get(V.node_type)) == null ? void 0 : ce.action) === "install" ? (a(), c("span", jy, m((Te = N.value.get(V.node_type)) == null ? void 0 : Te.package_id), 1)) : ((qe = N.value.get(V.node_type)) == null ? void 0 : qe.action) === "optional" ? (a(), c("span", qy, " Optional ")) : ((ft = N.value.get(V.node_type)) == null ? void 0 : ft.action) === "skip" ? (a(), c("span", Yy, " Skip ")) : y("", !0)
                        ], 64)) : (a(), c("span", Xy, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ve.value.length > 0 ? (a(), c("div", Jy, [
                s("h4", Qy, "Models (" + m(ve.value.length) + ")", 1),
                s("div", Zy, [
                  (a(!0), c(G, null, ge(ve.value, (V) => {
                    var ce, Te, qe, ft, $t, Ct, vt;
                    return a(), c("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      s("code", e0, m(V.filename), 1),
                      s("div", t0, [
                        P.value.has(V.filename) ? (a(), c(G, { key: 0 }, [
                          ((ce = P.value.get(V.filename)) == null ? void 0 : ce.action) === "select" ? (a(), c("span", s0, m((qe = (Te = P.value.get(V.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : qe.filename), 1)) : ((ft = P.value.get(V.filename)) == null ? void 0 : ft.action) === "download" ? (a(), c("span", o0, " Download ")) : (($t = P.value.get(V.filename)) == null ? void 0 : $t.action) === "optional" ? (a(), c("span", n0, " Optional ")) : ((Ct = P.value.get(V.filename)) == null ? void 0 : Ct.action) === "skip" ? (a(), c("span", a0, " Skip ")) : ((vt = P.value.get(V.filename)) == null ? void 0 : vt.action) === "cancel_download" ? (a(), c("span", l0, " Cancel Download ")) : y("", !0)
                        ], 64)) : V.is_download_intent ? (a(), c("span", i0, " Pending Download ")) : (a(), c("span", r0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              oe.value.length === 0 && D.value.length === 0 && ve.value.length === 0 ? (a(), c("div", c0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          C.value === "applying" ? (a(), M(N1, {
            key: 4,
            progress: Ae(d),
            onRestart: ee,
            onRetryFailed: j
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C.value !== "analysis" && C.value !== "applying" ? (a(), M(Re, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: We
        }, {
          default: h(() => [...R[37] || (R[37] = [
            _(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        R[41] || (R[41] = s("div", { class: "footer-spacer" }, null, -1)),
        C.value !== "applying" || Ae(d).phase === "complete" || Ae(d).phase === "error" ? (a(), M(Re, {
          key: 1,
          variant: "secondary",
          onClick: R[0] || (R[0] = (V) => n("close"))
        }, {
          default: h(() => [
            _(m(Ae(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        C.value === "analysis" ? (a(), M(Re, {
          key: 2,
          variant: "primary",
          disabled: g.value,
          onClick: Be
        }, {
          default: h(() => [...R[38] || (R[38] = [
            _(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        C.value === "nodes" ? (a(), M(Re, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: h(() => [
            _(m(S.value || T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        C.value === "models" ? (a(), M(Re, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: h(() => [...R[39] || (R[39] = [
            _(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        C.value === "review" ? (a(), M(Re, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: $e
        }, {
          default: h(() => [...R[40] || (R[40] = [
            _(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), d0 = /* @__PURE__ */ pe(u0, [["__scopeId", "data-v-6276cf1d"]]), m0 = { class: "search-input-wrapper" }, f0 = ["value", "placeholder"], v0 = /* @__PURE__ */ fe({
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
    let i;
    function r(d) {
      const f = d.target.value;
      o.debounce > 0 ? (clearTimeout(i), i = window.setTimeout(() => {
        n("update:modelValue", f);
      }, o.debounce)) : n("update:modelValue", f);
    }
    function u() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return st(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, f) => (a(), c("div", m0, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: r,
        onKeyup: ss(u, ["escape"])
      }, null, 40, f0),
      e.clearable && e.modelValue ? (a(), c("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), p0 = /* @__PURE__ */ pe(v0, [["__scopeId", "data-v-266f857a"]]), g0 = { class: "search-bar" }, h0 = /* @__PURE__ */ fe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), c("div", g0, [
      $(p0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Eo = /* @__PURE__ */ pe(h0, [["__scopeId", "data-v-3d51bbfd"]]), y0 = { class: "section-group" }, w0 = {
  key: 0,
  class: "section-content"
}, _0 = /* @__PURE__ */ fe({
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
    function i() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (r, u) => (a(), c("section", y0, [
      $(Ft, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: i
      }, {
        default: h(() => [
          _(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), c("div", w0, [
        He(r.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ pe(_0, [["__scopeId", "data-v-c48e33ed"]]), b0 = { class: "item-header" }, k0 = {
  key: 0,
  class: "item-icon"
}, $0 = { class: "item-info" }, C0 = {
  key: 0,
  class: "item-title"
}, x0 = {
  key: 1,
  class: "item-subtitle"
}, S0 = {
  key: 0,
  class: "item-details"
}, I0 = {
  key: 1,
  class: "item-actions"
}, E0 = /* @__PURE__ */ fe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = F(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), c("div", {
      class: Ce(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      s("div", b0, [
        l.$slots.icon ? (a(), c("span", k0, [
          He(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", $0, [
          l.$slots.title ? (a(), c("div", C0, [
            He(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), c("div", x0, [
            He(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), c("div", S0, [
        He(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), c("div", I0, [
        He(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ pe(E0, [["__scopeId", "data-v-cc435e0e"]]), T0 = { class: "loading-state" }, P0 = { class: "loading-message" }, M0 = /* @__PURE__ */ fe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), c("div", T0, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", P0, m(e.message), 1)
    ]));
  }
}), Ls = /* @__PURE__ */ pe(M0, [["__scopeId", "data-v-ad8436c9"]]), R0 = { class: "error-state" }, D0 = { class: "error-message" }, L0 = /* @__PURE__ */ fe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), c("div", R0, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", D0, m(e.message), 1),
      e.retry ? (a(), M(ie, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          _(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Ns = /* @__PURE__ */ pe(L0, [["__scopeId", "data-v-5397be48"]]), N0 = /* @__PURE__ */ fe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = dt(), i = b([]), r = b(!1), u = b(null), d = b(""), f = b(!0), v = b(!1), p = b(!1), w = b(!1), g = b(null), k = F(
      () => i.value.filter((U) => U.status === "broken")
    ), x = F(
      () => i.value.filter((U) => U.status === "new")
    ), C = F(
      () => i.value.filter((U) => U.status === "modified")
    ), I = F(
      () => i.value.filter((U) => U.status === "synced")
    ), N = F(() => {
      if (!d.value.trim()) return i.value;
      const U = d.value.toLowerCase();
      return i.value.filter((z) => z.name.toLowerCase().includes(U));
    }), P = F(
      () => k.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = F(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), H = F(
      () => C.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = F(
      () => I.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = F(
      () => v.value ? K.value : K.value.slice(0, 5)
    );
    async function S(U = !1) {
      r.value = !0, u.value = null;
      try {
        i.value = await l(U);
      } catch (z) {
        u.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        r.value = !1;
      }
    }
    t({ loadWorkflows: S });
    function T(U) {
      g.value = U, p.value = !0;
    }
    function A(U) {
      g.value = U, w.value = !0;
    }
    function re() {
      n("refresh");
    }
    async function Y() {
      w.value = !1, await S(!0);
    }
    async function q() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function oe(U) {
      const z = [];
      return U.missing_nodes > 0 && z.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && z.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && z.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && z.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), z.length > 0 ? z.join(", ") : "Has issues";
    }
    function Z(U) {
      const z = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : z || "Unknown";
    }
    return st(S), (U, z) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          $(Eo, {
            modelValue: d.value,
            "onUpdate:modelValue": z[0] || (z[0] = (D) => d.value = D),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          r.value ? (a(), M(Ls, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), M(Ns, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
            P.value.length ? (a(), M(ct, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(P.value, (D) => (a(), M(Dt, {
                  key: D.name,
                  status: "broken"
                }, {
                  icon: h(() => [...z[7] || (z[7] = [
                    _("⚠", -1)
                  ])]),
                  title: h(() => [
                    _(m(D.name), 1)
                  ]),
                  subtitle: h(() => [
                    _(m(oe(D)), 1)
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (we) => A(D.name)
                    }, {
                      default: h(() => [...z[8] || (z[8] = [
                        _(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => T(D.name)
                    }, {
                      default: h(() => [...z[9] || (z[9] = [
                        _(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            E.value.length ? (a(), M(ct, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(E.value, (D) => (a(), M(Dt, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    _(m(D.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    _(m(D.name), 1)
                  ]),
                  subtitle: h(() => [
                    _(m(Z(D)), 1)
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => T(D.name)
                    }, {
                      default: h(() => [...z[10] || (z[10] = [
                        _(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            H.value.length ? (a(), M(ct, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(H.value, (D) => (a(), M(Dt, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...z[11] || (z[11] = [
                    _("⚡", -1)
                  ])]),
                  title: h(() => [
                    _(m(D.name), 1)
                  ]),
                  subtitle: h(() => [
                    _(m(Z(D)), 1)
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => T(D.name)
                    }, {
                      default: h(() => [...z[12] || (z[12] = [
                        _(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            K.value.length ? (a(), M(ct, {
              key: 3,
              title: "SYNCED",
              count: K.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: z[2] || (z[2] = (D) => f.value = D)
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(O.value, (D) => (a(), M(Dt, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    _(m(D.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    _(m(D.name), 1)
                  ]),
                  subtitle: h(() => [
                    _(m(Z(D)), 1)
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => T(D.name)
                    }, {
                      default: h(() => [...z[13] || (z[13] = [
                        _(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && K.value.length > 5 ? (a(), M(ie, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (D) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    _(" View all " + m(K.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            N.value.length ? y("", !0) : (a(), M(is, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (a(), M(Rp, {
        key: 0,
        "workflow-name": g.value,
        onClose: z[3] || (z[3] = (D) => p.value = !1),
        onResolve: z[4] || (z[4] = (D) => A(g.value)),
        onRefresh: z[5] || (z[5] = (D) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (a(), M(d0, {
        key: 1,
        "workflow-name": g.value,
        onClose: Y,
        onInstall: re,
        onRefresh: z[6] || (z[6] = (D) => n("refresh")),
        onRestart: q
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), A0 = /* @__PURE__ */ pe(N0, [["__scopeId", "data-v-fa3f076e"]]), U0 = /* @__PURE__ */ fe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: Ce(["summary-bar", e.variant])
    }, [
      He(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), dn = /* @__PURE__ */ pe(U0, [["__scopeId", "data-v-ccb7816e"]]), z0 = {
  key: 0,
  class: "model-details"
}, O0 = { class: "detail-section" }, F0 = { class: "detail-row" }, B0 = { class: "detail-value mono" }, V0 = { class: "detail-row" }, W0 = { class: "detail-value mono" }, G0 = { class: "detail-row" }, H0 = { class: "detail-value mono" }, K0 = { class: "detail-row" }, j0 = { class: "detail-value" }, q0 = { class: "detail-row" }, Y0 = { class: "detail-value" }, X0 = { class: "detail-row" }, J0 = { class: "detail-value" }, Q0 = { class: "detail-section" }, Z0 = { class: "section-header" }, ew = {
  key: 0,
  class: "locations-list"
}, tw = { class: "location-path mono" }, sw = {
  key: 0,
  class: "location-modified"
}, ow = ["onClick"], nw = {
  key: 1,
  class: "empty-state"
}, aw = { class: "detail-section" }, lw = { class: "section-header" }, iw = {
  key: 0,
  class: "sources-list"
}, rw = { class: "source-type" }, cw = ["href"], uw = ["disabled", "onClick"], dw = {
  key: 1,
  class: "empty-state"
}, mw = { class: "add-source-form" }, fw = ["disabled"], vw = {
  key: 2,
  class: "source-error"
}, pw = {
  key: 3,
  class: "source-success"
}, gw = /* @__PURE__ */ fe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: r } = dt(), u = b(null), d = b(!0), f = b(null), v = b(""), p = b(!1), w = b(null), g = b(null), k = b(null), x = b(null);
    let C = null;
    function I(S, T = "success", A = 2e3) {
      C && clearTimeout(C), x.value = { message: S, type: T }, C = setTimeout(() => {
        x.value = null;
      }, A);
    }
    function N(S) {
      if (!S) return "Unknown";
      const T = 1024 * 1024 * 1024, A = 1024 * 1024;
      return S >= T ? `${(S / T).toFixed(1)} GB` : S >= A ? `${(S / A).toFixed(0)} MB` : `${(S / 1024).toFixed(0)} KB`;
    }
    function P(S) {
      navigator.clipboard.writeText(S), I("Copied to clipboard!");
    }
    async function E(S) {
      try {
        await r(S), I("Opening file location...");
      } catch {
        I("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!v.value.trim() || !u.value)) {
        p.value = !0, g.value = null, k.value = null;
        try {
          await l(u.value.hash, v.value.trim()), k.value = "Source added successfully!", v.value = "", await O();
        } catch (S) {
          g.value = S instanceof Error ? S.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function K(S) {
      if (u.value) {
        w.value = S, g.value = null, k.value = null;
        try {
          await i(u.value.hash, S), I("Source removed"), await O();
        } catch (T) {
          g.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function O() {
      d.value = !0, f.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (S) {
        f.value = S instanceof Error ? S.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return st(O), (S, T) => {
      var A;
      return a(), c(G, null, [
        $(wt, {
          title: `Model Details: ${((A = u.value) == null ? void 0 : A.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: f.value,
          onClose: T[5] || (T[5] = (re) => S.$emit("close"))
        }, {
          body: h(() => {
            var re, Y, q, oe;
            return [
              u.value ? (a(), c("div", z0, [
                s("section", O0, [
                  s("div", F0, [
                    T[6] || (T[6] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", B0, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (Z) => P(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", V0, [
                    T[7] || (T[7] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", W0, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (Z) => P(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", G0, [
                    T[8] || (T[8] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", H0, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (Z) => P(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", K0, [
                    T[9] || (T[9] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", j0, m(N(u.value.size)), 1)
                  ]),
                  s("div", q0, [
                    T[10] || (T[10] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Y0, m(u.value.category), 1)
                  ]),
                  s("div", X0, [
                    T[11] || (T[11] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", J0, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", Q0, [
                  s("h4", Z0, "Locations (" + m(((re = u.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (Y = u.value.locations) != null && Y.length ? (a(), c("div", ew, [
                    (a(!0), c(G, null, ge(u.value.locations, (Z, U) => (a(), c("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      s("span", tw, m(Z.path), 1),
                      Z.modified ? (a(), c("span", sw, "Modified: " + m(Z.modified), 1)) : y("", !0),
                      Z.path ? (a(), c("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => E(Z.path)
                      }, " Open File Location ", 8, ow)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), c("div", nw, "No locations found"))
                ]),
                s("section", aw, [
                  s("h4", lw, "Download Sources (" + m(((q = u.value.sources) == null ? void 0 : q.length) || 0) + ")", 1),
                  (oe = u.value.sources) != null && oe.length ? (a(), c("div", iw, [
                    (a(!0), c(G, null, ge(u.value.sources, (Z, U) => (a(), c("div", {
                      key: U,
                      class: "source-item"
                    }, [
                      s("span", rw, m(Z.type) + ":", 1),
                      s("a", {
                        href: Z.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(Z.url), 9, cw),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Z.url,
                        onClick: (z) => K(Z.url)
                      }, m(w.value === Z.url ? "..." : "×"), 9, uw)
                    ]))), 128))
                  ])) : (a(), c("div", dw, " No download sources configured ")),
                  s("div", mw, [
                    je(s("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (Z) => v.value = Z),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Vt, v.value]
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || p.value,
                      onClick: H
                    }, m(p.value ? "Adding..." : "Add Source"), 9, fw)
                  ]),
                  g.value ? (a(), c("p", vw, m(g.value), 1)) : y("", !0),
                  k.value ? (a(), c("p", pw, m(k.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (re) => S.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), M(kt, { to: "body" }, [
          x.value ? (a(), c("div", {
            key: 0,
            class: Ce(["toast", x.value.type])
          }, m(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), il = /* @__PURE__ */ pe(gw, [["__scopeId", "data-v-f15cbb56"]]), hw = /* @__PURE__ */ fe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = dt(), i = b([]), r = b([]), u = b("production"), d = b(!1), f = b(null), v = b(""), p = b(!1), w = b(null);
    function g() {
      p.value = !1, o("navigate", "model-index");
    }
    const k = F(
      () => i.value.reduce((O, S) => O + (S.size || 0), 0)
    ), x = F(() => {
      if (!v.value.trim()) return i.value;
      const O = v.value.toLowerCase();
      return i.value.filter((S) => S.filename.toLowerCase().includes(O));
    }), C = F(() => {
      if (!v.value.trim()) return r.value;
      const O = v.value.toLowerCase();
      return r.value.filter((S) => S.filename.toLowerCase().includes(O));
    }), I = F(() => {
      const O = {};
      for (const T of x.value) {
        const A = T.type || "other";
        O[A] || (O[A] = []), O[A].push(T);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([T], [A]) => {
        const re = S.indexOf(T), Y = S.indexOf(A);
        return re >= 0 && Y >= 0 ? re - Y : re >= 0 ? -1 : Y >= 0 ? 1 : T.localeCompare(A);
      }).map(([T, A]) => ({ type: T, models: A }));
    });
    function N(O) {
      if (!O) return "Unknown";
      const S = O / (1024 * 1024);
      return S >= 1024 ? `${(S / 1024).toFixed(1)} GB` : `${S.toFixed(0)} MB`;
    }
    function P(O) {
      w.value = O.hash || O.filename;
    }
    function E(O) {
      o("navigate", "model-index");
    }
    function H(O) {
      alert(`Download functionality not yet implemented for ${O}`);
    }
    async function K() {
      d.value = !0, f.value = null;
      try {
        const O = await n();
        i.value = O, r.value = [];
        const S = await l();
        u.value = S.environment || "production";
      } catch (O) {
        f.value = O instanceof Error ? O.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return st(K), (O, S) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (T) => p.value = !0)
          })
        ]),
        search: h(() => [
          $(Eo, {
            modelValue: v.value,
            "onUpdate:modelValue": S[1] || (S[1] = (T) => v.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), M(Ls, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (a(), M(Ns, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
            i.value.length ? (a(), M(dn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                _(" Total: " + m(i.value.length) + " models • " + m(N(k.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(G, null, ge(I.value, (T) => (a(), M(ct, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(T.models, (A) => (a(), M(Dt, {
                  key: A.hash || A.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...S[4] || (S[4] = [
                    _("📦", -1)
                  ])]),
                  title: h(() => [
                    _(m(A.filename), 1)
                  ]),
                  subtitle: h(() => [
                    _(m(N(A.size)), 1)
                  ]),
                  details: h(() => [
                    $(pt, {
                      label: "Used by:",
                      value: (A.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    $(pt, {
                      label: "Path:",
                      value: A.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => P(A)
                    }, {
                      default: h(() => [...S[5] || (S[5] = [
                        _(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            C.value.length ? (a(), M(ct, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(C.value, (T) => (a(), M(Dt, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...S[6] || (S[6] = [
                    _("⚠", -1)
                  ])]),
                  title: h(() => [
                    _(m(T.filename), 1)
                  ]),
                  subtitle: h(() => [...S[7] || (S[7] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var A;
                    return [
                      $(pt, {
                        label: "Required by:",
                        value: ((A = T.workflow_names) == null ? void 0 : A.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    $(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => H(T.filename)
                    }, {
                      default: h(() => [...S[8] || (S[8] = [
                        _(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => E(T.filename)
                    }, {
                      default: h(() => [...S[9] || (S[9] = [
                        _(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !x.value.length && !C.value.length ? (a(), M(is, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(rs, {
        show: p.value,
        title: "About Environment Models",
        onClose: S[2] || (S[2] = (T) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            S[10] || (S[10] = _(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            S[11] || (S[11] = _(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          $(ie, {
            variant: "primary",
            onClick: g
          }, {
            default: h(() => [...S[12] || (S[12] = [
              _(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), M(il, {
        key: 0,
        identifier: w.value,
        onClose: S[3] || (S[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), yw = /* @__PURE__ */ pe(hw, [["__scopeId", "data-v-cb4f12b3"]]), ww = {
  key: 0,
  class: "indexing-progress"
}, _w = { class: "progress-info" }, bw = { class: "progress-label" }, kw = { class: "progress-count" }, $w = { class: "progress-bar" }, Cw = { class: "modal-content" }, xw = { class: "modal-header" }, Sw = { class: "modal-body" }, Iw = { class: "input-group" }, Ew = { class: "current-path" }, Tw = { class: "input-group" }, Pw = { class: "modal-footer" }, Mw = { class: "modal-content" }, Rw = { class: "modal-header" }, Dw = { class: "modal-body" }, Lw = { class: "input-group" }, Nw = { class: "input-group" }, Aw = { class: "modal-footer" }, Uw = /* @__PURE__ */ fe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = dt(), { addToQueue: r } = un(), u = t, d = b([]), f = b(!1), v = b(!1), p = b(null), w = b(""), g = b(!1), k = b(null), x = b(!1), C = b(null), I = b(""), N = b(!1), P = b(!1), E = b(""), H = b(""), K = b(null), O = F(
      () => d.value.reduce((z, D) => z + (D.size || 0), 0)
    ), S = F(() => {
      if (!w.value.trim()) return d.value;
      const z = w.value.toLowerCase();
      return d.value.filter((D) => {
        const we = D, ve = D.sha256 || we.sha256_hash || "";
        return D.filename.toLowerCase().includes(z) || ve.toLowerCase().includes(z);
      });
    }), T = F(() => {
      const z = {};
      for (const we of S.value) {
        const ve = we.type || "other";
        z[ve] || (z[ve] = []), z[ve].push(we);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([we], [ve]) => {
        const Ee = D.indexOf(we), De = D.indexOf(ve);
        return Ee >= 0 && De >= 0 ? Ee - De : Ee >= 0 ? -1 : De >= 0 ? 1 : we.localeCompare(ve);
      }).map(([we, ve]) => ({ type: we, models: ve }));
    });
    function A(z) {
      if (!z) return "Unknown";
      const D = 1024 * 1024 * 1024, we = 1024 * 1024;
      return z >= D ? `${(z / D).toFixed(1)} GB` : z >= we ? `${(z / we).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function re(z) {
      k.value = z.hash || z.filename;
    }
    async function Y() {
      v.value = !0, p.value = null;
      try {
        const z = await n();
        await Z(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        p.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function q() {
      if (I.value.trim()) {
        N.value = !0, p.value = null;
        try {
          const z = await i(I.value.trim());
          C.value = z.path, x.value = !1, I.value = "", await Z(), console.log(`Directory changed: ${z.models_indexed} models indexed`), u("refresh");
        } catch (z) {
          p.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function oe() {
      if (!E.value.trim() || !H.value.trim()) return;
      const z = H.value.split("/").pop() || "model.safetensors";
      r([{
        workflow: "__manual__",
        filename: z,
        url: E.value.trim(),
        targetPath: H.value.trim()
      }]), E.value = "", H.value = "", P.value = !1;
    }
    async function Z() {
      f.value = !0, p.value = null;
      try {
        d.value = await o();
      } catch (z) {
        p.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        f.value = !1;
      }
    }
    async function U() {
      try {
        const z = await l();
        C.value = z.path;
      } catch {
      }
    }
    return st(() => {
      Z(), U();
    }), (z, D) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: D[2] || (D[2] = (we) => g.value = !0)
          }, {
            actions: h(() => [
              $(ie, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: Y
              }, {
                default: h(() => [
                  _(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(ie, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (we) => x.value = !0)
              }, {
                default: h(() => [...D[15] || (D[15] = [
                  _(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              $(ie, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (we) => P.value = !0)
              }, {
                default: h(() => [...D[16] || (D[16] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  _(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          K.value ? (a(), c("div", ww, [
            s("div", _w, [
              s("span", bw, m(K.value.message), 1),
              s("span", kw, m(K.value.current) + "/" + m(K.value.total), 1)
            ]),
            s("div", $w, [
              s("div", {
                class: "progress-fill",
                style: qt({ width: `${K.value.current / K.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          $(Eo, {
            modelValue: w.value,
            "onUpdate:modelValue": D[3] || (D[3] = (we) => w.value = we),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          f.value || K.value ? (a(), M(Ls, {
            key: 0,
            message: K.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : p.value ? (a(), M(Ns, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
            d.value.length ? (a(), M(dn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                _(" Total: " + m(d.value.length) + " models • " + m(A(O.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(G, null, ge(T.value, (we) => (a(), M(ct, {
              key: we.type,
              title: we.type.toUpperCase(),
              count: we.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(we.models, (ve) => (a(), M(Dt, {
                  key: ve.sha256 || ve.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...D[17] || (D[17] = [
                    _("📦", -1)
                  ])]),
                  title: h(() => [
                    _(m(ve.filename), 1)
                  ]),
                  subtitle: h(() => [
                    _(m(A(ve.size)), 1)
                  ]),
                  details: h(() => [
                    $(pt, {
                      label: "Hash:",
                      value: ve.hash ? ve.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => re(ve)
                    }, {
                      default: h(() => [...D[18] || (D[18] = [
                        _(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            S.value.length ? y("", !0) : (a(), M(is, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      $(rs, {
        show: g.value,
        title: "About Workspace Model Index",
        onClose: D[4] || (D[4] = (we) => g.value = !1)
      }, {
        content: h(() => [...D[19] || (D[19] = [
          s("p", null, [
            _(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            _(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      k.value ? (a(), M(il, {
        key: 0,
        identifier: k.value,
        onClose: D[5] || (D[5] = (we) => k.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), M(kt, { to: "body" }, [
        x.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[9] || (D[9] = ut((we) => x.value = !1, ["self"]))
        }, [
          s("div", Cw, [
            s("div", xw, [
              D[20] || (D[20] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: D[6] || (D[6] = (we) => x.value = !1)
              }, "✕")
            ]),
            s("div", Sw, [
              s("div", Iw, [
                D[21] || (D[21] = s("label", null, "Current Directory", -1)),
                s("code", Ew, m(C.value || "Not set"), 1)
              ]),
              s("div", Tw, [
                D[22] || (D[22] = s("label", null, "New Directory Path", -1)),
                $(os, {
                  modelValue: I.value,
                  "onUpdate:modelValue": D[7] || (D[7] = (we) => I.value = we),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              D[23] || (D[23] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", Pw, [
              $(Re, {
                variant: "secondary",
                onClick: D[8] || (D[8] = (we) => x.value = !1)
              }, {
                default: h(() => [...D[24] || (D[24] = [
                  _(" Cancel ", -1)
                ])]),
                _: 1
              }),
              $(Re, {
                variant: "primary",
                disabled: !I.value.trim() || N.value,
                loading: N.value,
                onClick: q
              }, {
                default: h(() => [
                  _(m(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), M(kt, { to: "body" }, [
        P.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[14] || (D[14] = ut((we) => P.value = !1, ["self"]))
        }, [
          s("div", Mw, [
            s("div", Rw, [
              D[25] || (D[25] = s("h3", null, "Download New Model", -1)),
              s("button", {
                class: "modal-close",
                onClick: D[10] || (D[10] = (we) => P.value = !1)
              }, "✕")
            ]),
            s("div", Dw, [
              s("div", Lw, [
                D[26] || (D[26] = s("label", null, "Download URL", -1)),
                $(os, {
                  modelValue: E.value,
                  "onUpdate:modelValue": D[11] || (D[11] = (we) => E.value = we),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              s("div", Nw, [
                D[27] || (D[27] = s("label", null, "Target Path (relative to models directory)", -1)),
                $(os, {
                  modelValue: H.value,
                  "onUpdate:modelValue": D[12] || (D[12] = (we) => H.value = we),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              D[28] || (D[28] = s("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            s("div", Aw, [
              $(Re, {
                variant: "secondary",
                onClick: D[13] || (D[13] = (we) => P.value = !1)
              }, {
                default: h(() => [...D[29] || (D[29] = [
                  _(" Cancel ", -1)
                ])]),
                _: 1
              }),
              $(Re, {
                variant: "primary",
                disabled: !E.value.trim() || !H.value.trim(),
                onClick: oe
              }, {
                default: h(() => [...D[30] || (D[30] = [
                  _(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : y("", !0)
      ]))
    ], 64));
  }
}), zw = /* @__PURE__ */ pe(Uw, [["__scopeId", "data-v-73b78d84"]]), Ow = { class: "node-details" }, Fw = { class: "status-row" }, Bw = {
  key: 0,
  class: "detail-row"
}, Vw = { class: "value" }, Ww = { class: "detail-row" }, Gw = { class: "value" }, Hw = {
  key: 1,
  class: "detail-row"
}, Kw = { class: "value mono" }, jw = {
  key: 2,
  class: "detail-row"
}, qw = ["href"], Yw = {
  key: 3,
  class: "detail-row"
}, Xw = { class: "value mono small" }, Jw = { class: "detail-row" }, Qw = {
  key: 0,
  class: "value"
}, Zw = {
  key: 1,
  class: "workflow-list"
}, e_ = /* @__PURE__ */ fe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = F(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = F(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), r = F(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), M(wt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (f) => n("close"))
    }, {
      body: h(() => [
        s("div", Ow, [
          s("div", Fw, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ce(["status-badge", l.value])
            }, m(i.value), 3)
          ]),
          e.node.version ? (a(), c("div", Bw, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", Vw, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", Ww, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", Gw, m(r.value), 1)
          ]),
          e.node.registry_id ? (a(), c("div", Hw, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", Kw, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), c("div", jw, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              _(m(e.node.repository) + " ", 1),
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
            ], 8, qw)
          ])) : y("", !0),
          e.node.download_url ? (a(), c("div", Yw, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", Xw, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", Jw, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), c("span", Qw, " Not used in any workflows ")) : (a(), c("div", Zw, [
              (a(!0), c(G, null, ge(e.node.used_in_workflows, (f) => (a(), c("span", {
                key: f,
                class: "workflow-tag"
              }, m(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        $(Re, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (f) => n("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            _(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), t_ = /* @__PURE__ */ pe(e_, [["__scopeId", "data-v-b342f626"]]), s_ = { class: "dialog-message" }, o_ = {
  key: 0,
  class: "dialog-details"
}, n_ = {
  key: 1,
  class: "dialog-warning"
}, a_ = /* @__PURE__ */ fe({
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
    return (t, o) => (a(), M(wt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", s_, m(e.message), 1),
        e.details && e.details.length ? (a(), c("div", o_, [
          (a(!0), c(G, null, ge(e.details, (n, l) => (a(), c("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), c("p", n_, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          _(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: h(() => [
            _(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), M(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: h(() => [
            _(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        $(Re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
        }, {
          default: h(() => [
            _(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), rl = /* @__PURE__ */ pe(a_, [["__scopeId", "data-v-3670b9f5"]]), l_ = { class: "mismatch-warning" }, i_ = { class: "version-mismatch" }, r_ = { class: "version-actual" }, c_ = { class: "version-expected" }, u_ = { key: 0 }, d_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, m_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, f_ = /* @__PURE__ */ fe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getNodes: l, trackNodeAsDev: i, installNode: r, uninstallNode: u } = dt(), d = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), f = b(!1), v = b(null), p = b(""), w = b(!1), g = b(null), k = b(null), x = F(() => {
      if (!p.value.trim()) return d.value.nodes;
      const Y = p.value.toLowerCase();
      return d.value.nodes.filter(
        (q) => {
          var oe, Z;
          return q.name.toLowerCase().includes(Y) || ((oe = q.description) == null ? void 0 : oe.toLowerCase().includes(Y)) || ((Z = q.repository) == null ? void 0 : Z.toLowerCase().includes(Y));
        }
      );
    }), C = F(
      () => x.value.filter((Y) => Y.installed && Y.tracked)
    ), I = F(
      () => x.value.filter((Y) => !Y.installed && Y.tracked)
    ), N = F(
      () => x.value.filter((Y) => Y.installed && !Y.tracked)
    );
    function P(Y) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Y] || Y;
    }
    const E = F(() => o.versionMismatches.length > 0);
    function H(Y) {
      return !Y.used_in_workflows || Y.used_in_workflows.length === 0 ? "Not used in any workflows" : Y.used_in_workflows.length === 1 ? Y.used_in_workflows[0] : `${Y.used_in_workflows.length} workflows`;
    }
    function K(Y) {
      g.value = Y;
    }
    function O() {
      n("open-node-manager");
    }
    function S(Y) {
      k.value = {
        title: "Track as Development Node",
        message: `Track "${Y}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            f.value = !0;
            const q = await i(Y);
            q.status === "success" ? (n("toast", `✓ Node "${Y}" tracked as development`, "success"), await re()) : n("toast", `Failed to track node: ${q.message || "Unknown error"}`, "error");
          } catch (q) {
            n("toast", `Error tracking node: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function T(Y) {
      k.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Y}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          k.value = null;
          try {
            f.value = !0;
            const q = await u(Y);
            q.status === "success" ? (n("toast", `✓ Node "${Y}" removed`, "success"), await re()) : n("toast", `Failed to remove node: ${q.message || "Unknown error"}`, "error");
          } catch (q) {
            n("toast", `Error removing node: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function A(Y) {
      k.value = {
        title: "Install Missing Node",
        message: `Install "${Y}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            f.value = !0;
            const q = await r(Y);
            q.status === "success" ? (n("toast", `✓ Node "${Y}" installed`, "success"), await re()) : n("toast", `Failed to install node: ${q.message || "Unknown error"}`, "error");
          } catch (q) {
            n("toast", `Error installing node: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    async function re() {
      f.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load nodes";
      } finally {
        f.value = !1;
      }
    }
    return st(re), (Y, q) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: q[0] || (q[0] = (oe) => w.value = !0)
          }, {
            actions: h(() => [
              $(ie, {
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: h(() => [...q[7] || (q[7] = [
                  _(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          $(Eo, {
            modelValue: p.value,
            "onUpdate:modelValue": q[1] || (q[1] = (oe) => p.value = oe),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          f.value ? (a(), M(Ls, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), M(Ns, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
            d.value.total_count ? (a(), M(dn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                _(m(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), c(G, { key: 0 }, [
                  _(" • " + m(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), c(G, { key: 1 }, [
                  _(" • " + m(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value ? (a(), M(ct, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", l_, [
                  q[8] || (q[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), c(G, null, ge(e.versionMismatches, (oe) => (a(), M(Dt, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: h(() => [...q[9] || (q[9] = [
                    _("⚠", -1)
                  ])]),
                  title: h(() => [
                    _(m(oe.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", i_, [
                      s("span", r_, m(oe.actual), 1),
                      q[10] || (q[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", c_, m(oe.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "warning",
                      size: "sm",
                      onClick: q[2] || (q[2] = (Z) => n("repair-environment"))
                    }, {
                      default: h(() => [...q[11] || (q[11] = [
                        _(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (a(), M(ct, {
              key: 2,
              title: "UNTRACKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(N.value, (oe) => (a(), M(Dt, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: h(() => [...q[12] || (q[12] = [
                    _("?", -1)
                  ])]),
                  title: h(() => [
                    _(m(oe.name), 1)
                  ]),
                  subtitle: h(() => [...q[13] || (q[13] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    $(pt, {
                      label: "Used by:",
                      value: H(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => K(oe)
                    }, {
                      default: h(() => [...q[14] || (q[14] = [
                        _(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => S(oe.name)
                    }, {
                      default: h(() => [...q[15] || (q[15] = [
                        _(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(ie, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Z) => T(oe.name)
                    }, {
                      default: h(() => [...q[16] || (q[16] = [
                        _(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            C.value.length ? (a(), M(ct, {
              key: 3,
              title: "INSTALLED",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(C.value, (oe) => (a(), M(Dt, {
                  key: oe.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    _(m(oe.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    _(m(oe.name), 1)
                  ]),
                  subtitle: h(() => [
                    oe.version ? (a(), c("span", u_, m(oe.source === "development" ? "" : "v") + m(oe.version), 1)) : (a(), c("span", d_, "version unknown")),
                    s("span", m_, " • " + m(P(oe.source)), 1)
                  ]),
                  details: h(() => [
                    $(pt, {
                      label: "Used by:",
                      value: H(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => K(oe)
                    }, {
                      default: h(() => [...q[17] || (q[17] = [
                        _(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: O
                    }, {
                      default: h(() => [...q[18] || (q[18] = [
                        _(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            I.value.length ? (a(), M(ct, {
              key: 4,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(I.value, (oe) => (a(), M(Dt, {
                  key: oe.name,
                  status: "missing"
                }, {
                  icon: h(() => [...q[19] || (q[19] = [
                    _("!", -1)
                  ])]),
                  title: h(() => [
                    _(m(oe.name), 1)
                  ]),
                  subtitle: h(() => [...q[20] || (q[20] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    $(pt, {
                      label: "Required by:",
                      value: H(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => K(oe)
                    }, {
                      default: h(() => [...q[21] || (q[21] = [
                        _(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => A(oe.name)
                    }, {
                      default: h(() => [...q[22] || (q[22] = [
                        _(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !C.value.length && !I.value.length && !N.value.length ? (a(), M(is, {
              key: 5,
              icon: "📭",
              message: p.value ? `No nodes match '${p.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(rs, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: q[4] || (q[4] = (oe) => w.value = !1)
      }, {
        content: h(() => [...q[23] || (q[23] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            _(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            _(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Untracked:"),
            _(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          $(ie, {
            variant: "primary",
            onClick: q[3] || (q[3] = (oe) => w.value = !1)
          }, {
            default: h(() => [...q[24] || (q[24] = [
              _(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), M(t_, {
        key: 0,
        node: g.value,
        onClose: q[5] || (q[5] = (oe) => g.value = null)
      }, null, 8, ["node"])) : y("", !0),
      k.value ? (a(), M(rl, {
        key: 1,
        title: k.value.title,
        message: k.value.message,
        warning: k.value.warning,
        "confirm-label": k.value.confirmLabel,
        destructive: k.value.destructive,
        onConfirm: k.value.onConfirm,
        onCancel: q[6] || (q[6] = (oe) => k.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), v_ = /* @__PURE__ */ pe(f_, [["__scopeId", "data-v-1555a802"]]);
function Dr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const p_ = { class: "remote-url-display" }, g_ = ["title"], h_ = ["title"], y_ = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, w_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, __ = /* @__PURE__ */ fe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = b(!1), n = F(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const i = t.url.slice(0, Math.floor(t.maxLength * 0.6)), r = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${i}...${r}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(t.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (i) {
        console.error("Failed to copy URL:", i);
      }
    }
    return (i, r) => (a(), c("div", p_, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(n.value), 9, g_),
      s("button", {
        class: Ce(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), c("svg", w_, [...r[1] || (r[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), c("svg", y_, [...r[0] || (r[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, h_)
    ]));
  }
}), b_ = /* @__PURE__ */ pe(__, [["__scopeId", "data-v-7768a58d"]]), k_ = { class: "remote-title" }, $_ = {
  key: 0,
  class: "default-badge"
}, C_ = {
  key: 1,
  class: "sync-badge"
}, x_ = {
  key: 0,
  class: "ahead"
}, S_ = {
  key: 1,
  class: "behind"
}, I_ = {
  key: 1,
  class: "synced"
}, E_ = ["href"], T_ = {
  key: 1,
  class: "remote-url-text"
}, P_ = /* @__PURE__ */ fe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = F(() => t.fetchingRemote === t.remote.name), n = F(() => t.remote.is_default), l = F(() => t.syncStatus && t.syncStatus.behind > 0), i = F(() => t.syncStatus && t.syncStatus.ahead > 0), r = F(() => t.remote.push_url !== t.remote.fetch_url), u = F(() => {
      const f = t.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), d = F(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (a(), M(Dt, {
      status: n.value ? "synced" : void 0
    }, io({
      icon: h(() => [
        _(m(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", k_, [
          s("span", null, m(e.remote.name), 1),
          n.value ? (a(), c("span", $_, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", C_, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", x_, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", S_, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", I_, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (a(), c("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = ut(() => {
          }, ["stop"]))
        }, m(d.value), 9, E_)) : (a(), c("span", T_, m(d.value), 1))
      ]),
      actions: h(() => [
        $(ie, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (p) => f.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            _(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        $(ie, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => f.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            _(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(ie, {
          variant: i.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => f.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            _(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(ie, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => f.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            _(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), M(ie, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => f.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
            _(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      r.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), M(pt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              $(b_, {
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
}), M_ = /* @__PURE__ */ pe(P_, [["__scopeId", "data-v-8310f3a8"]]), R_ = ["for"], D_ = {
  key: 0,
  class: "base-form-field-required"
}, L_ = { class: "base-form-field-input" }, N_ = {
  key: 1,
  class: "base-form-field-error"
}, A_ = {
  key: 2,
  class: "base-form-field-hint"
}, U_ = /* @__PURE__ */ fe({
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
    const t = e, o = F(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), c("div", {
      class: Ce(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), c("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        _(m(e.label) + " ", 1),
        e.required ? (a(), c("span", D_, "*")) : y("", !0)
      ], 8, R_)) : y("", !0),
      s("div", L_, [
        He(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), c("span", N_, m(e.error), 1)) : e.hint ? (a(), c("span", A_, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ya = /* @__PURE__ */ pe(U_, [["__scopeId", "data-v-9a1cf296"]]), z_ = { class: "remote-form" }, O_ = { class: "form-header" }, F_ = { class: "form-body" }, B_ = {
  key: 0,
  class: "form-error"
}, V_ = { class: "form-actions" }, W_ = /* @__PURE__ */ fe({
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
    }), i = b(!1), r = b(null);
    Tt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = F(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || i.value)) {
        r.value = null, i.value = !0;
        try {
          n("submit", l.value);
        } catch (f) {
          r.value = f instanceof Error ? f.message : "Failed to submit form";
        } finally {
          i.value = !1;
        }
      }
    }
    return (f, v) => (a(), c("div", z_, [
      s("div", O_, [
        $(Ft, null, {
          default: h(() => [
            _(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", F_, [
        $(ya, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            $(os, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        $(ya, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            $(os, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        $(ya, { label: "Push URL (optional)" }, {
          default: h(() => [
            $(os, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        r.value ? (a(), c("div", B_, m(r.value), 1)) : y("", !0)
      ]),
      s("div", V_, [
        $(ie, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: i.value,
          onClick: d
        }, {
          default: h(() => [
            _(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        $(ie, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => f.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), G_ = /* @__PURE__ */ pe(W_, [["__scopeId", "data-v-56021b18"]]), H_ = { class: "conflict-summary-box" }, K_ = { class: "summary-header" }, j_ = { class: "summary-text" }, q_ = { key: 0 }, Y_ = {
  key: 1,
  class: "all-resolved"
}, X_ = { class: "summary-progress" }, J_ = { class: "progress-bar" }, Q_ = { class: "progress-text" }, Z_ = /* @__PURE__ */ fe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = F(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (n, l) => (a(), c("div", H_, [
      s("div", K_, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", j_, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), c("p", q_, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (a(), c("p", Y_, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", X_, [
        s("div", J_, [
          s("div", {
            class: "progress-fill",
            style: qt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", Q_, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), eb = /* @__PURE__ */ pe(Z_, [["__scopeId", "data-v-4e9e6cc9"]]), tb = { class: "modal-header" }, sb = { class: "modal-title" }, ob = { class: "modal-body" }, nb = {
  key: 0,
  class: "error-box"
}, ab = {
  key: 0,
  class: "error-hint"
}, lb = {
  key: 1,
  class: "loading-state"
}, ib = { class: "commit-summary" }, rb = {
  key: 0,
  class: "changes-section"
}, cb = {
  key: 0,
  class: "change-group",
  open: ""
}, ub = { class: "change-count" }, db = { class: "change-list" }, mb = {
  key: 0,
  class: "conflict-badge"
}, fb = {
  key: 1,
  class: "change-group"
}, vb = { class: "change-count" }, pb = { class: "change-list" }, gb = {
  key: 2,
  class: "change-group"
}, hb = { class: "change-count" }, yb = { class: "change-list" }, wb = {
  key: 2,
  class: "strategy-section"
}, _b = { class: "radio-group" }, bb = { class: "radio-option" }, kb = { class: "radio-option" }, $b = { class: "radio-option" }, Cb = {
  key: 3,
  class: "up-to-date"
}, xb = { class: "modal-actions" }, ni = "comfygit.pullModelStrategy", Sb = /* @__PURE__ */ fe({
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
    const o = e, n = t, l = b(localStorage.getItem(ni) || "skip");
    Tt(l, (C) => {
      localStorage.setItem(ni, C);
    });
    const i = F(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), r = F(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), u = F(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = F(() => {
      var C;
      return r.value > 0 || u.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), f = F(() => o.preview && Dr(o.preview) ? o.preview : null), v = F(() => {
      var C;
      return ((C = f.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = F(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = F(
      () => v.value > 0 && p.value === v.value
    ), g = F(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !w.value));
    function k(C) {
      if (!f.value) return !1;
      const I = C.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((N) => N.name === I);
    }
    function x(C) {
      const I = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: C, resolutions: I });
    }
    return (C, I) => {
      var N, P;
      return a(), M(kt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[11] || (I[11] = (E) => C.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: I[10] || (I[10] = ut(() => {
            }, ["stop"]))
          }, [
            s("div", tb, [
              s("h3", sb, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (E) => C.$emit("close"))
              }, "✕")
            ]),
            s("div", ob, [
              e.error ? (a(), c("div", nb, [
                I[13] || (I[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  I[12] || (I[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  i.value ? (a(), c("p", ab, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), c("div", lb, [...I[14] || (I[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                _(" Loading preview... ", -1)
              ])])) : (N = e.preview) != null && N.has_uncommitted_changes ? (a(), c(G, { key: 2 }, [
                I[15] || (I[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                I[16] || (I[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), c(G, { key: 3 }, [
                s("div", ib, [
                  I[17] || (I[17] = s("span", { class: "icon" }, "📥", -1)),
                  _(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                d.value ? (a(), c("div", rb, [
                  I[21] || (I[21] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  r.value > 0 ? (a(), c("details", cb, [
                    s("summary", null, [
                      I[18] || (I[18] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", ub, m(r.value) + " changes", 1)
                    ]),
                    s("div", db, [
                      (a(!0), c(G, null, ge(e.preview.changes.workflows.added, (E) => (a(), c("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128)),
                      (a(!0), c(G, null, ge(e.preview.changes.workflows.modified, (E) => (a(), c("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        _(" ~ " + m(E) + " ", 1),
                        k(E) ? (a(), c("span", mb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), c(G, null, ge(e.preview.changes.workflows.deleted, (E) => (a(), c("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + m(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), c("details", fb, [
                    s("summary", null, [
                      I[19] || (I[19] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", vb, m(u.value) + " to install", 1)
                    ]),
                    s("div", pb, [
                      (a(!0), c(G, null, ge(e.preview.changes.nodes.to_install, (E) => (a(), c("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), c("details", gb, [
                    s("summary", null, [
                      I[20] || (I[20] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", hb, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", yb, [
                      (a(!0), c(G, null, ge(e.preview.changes.models.referenced, (E) => (a(), c("div", {
                        key: E,
                        class: "change-item"
                      }, m(E), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (a(), M(eb, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), c("div", wb, [
                  I[26] || (I[26] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", _b, [
                    s("label", bb, [
                      je(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[1] || (I[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      I[22] || (I[22] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", kb, [
                      je(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[2] || (I[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      I[23] || (I[23] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", $b, [
                      je(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[3] || (I[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      I[24] || (I[24] = s("span", null, "Skip model downloads", -1)),
                      I[25] || (I[25] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  I[27] || (I[27] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), c("div", Cb, [
                  I[28] || (I[28] = s("span", { class: "icon" }, "✓", -1)),
                  _(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", xb, [
              $(ie, {
                variant: "secondary",
                onClick: I[4] || (I[4] = (E) => C.$emit("close"))
              }, {
                default: h(() => [...I[29] || (I[29] = [
                  _(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), c(G, { key: 0 }, [
                $(ie, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: I[5] || (I[5] = (E) => x(!1))
                }, {
                  default: h(() => [...I[30] || (I[30] = [
                    _(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                $(ie, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: I[6] || (I[6] = (E) => x(!0))
                }, {
                  default: h(() => [...I[31] || (I[31] = [
                    _(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (P = e.preview) != null && P.has_uncommitted_changes ? (a(), M(ie, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: I[7] || (I[7] = (E) => x(!0))
              }, {
                default: h(() => [...I[32] || (I[32] = [
                  _(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), c(G, { key: 2 }, [
                f.value && !w.value ? (a(), M(ie, {
                  key: 0,
                  variant: "primary",
                  onClick: I[8] || (I[8] = (E) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    _(" Resolve Conflicts (" + m(p.value) + "/" + m(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), M(ie, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: I[9] || (I[9] = (E) => x(!1))
                }, {
                  default: h(() => [...I[33] || (I[33] = [
                    _(" Pull Changes ", -1)
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
}), Ib = /* @__PURE__ */ pe(Sb, [["__scopeId", "data-v-300c7b2f"]]), Eb = { class: "modal-header" }, Tb = { class: "modal-title" }, Pb = { class: "modal-body" }, Mb = {
  key: 0,
  class: "loading-state"
}, Rb = {
  key: 1,
  class: "warning-box"
}, Db = {
  key: 0,
  class: "commits-section"
}, Lb = { class: "commit-list" }, Nb = { class: "commit-hash" }, Ab = { class: "commit-message" }, Ub = { class: "commit-date" }, zb = { class: "force-option" }, Ob = { class: "checkbox-option" }, Fb = { class: "commit-summary" }, Bb = { key: 0 }, Vb = { key: 1 }, Wb = {
  key: 0,
  class: "info-box"
}, Gb = {
  key: 1,
  class: "commits-section"
}, Hb = { class: "commit-list" }, Kb = { class: "commit-hash" }, jb = { class: "commit-message" }, qb = { class: "commit-date" }, Yb = {
  key: 2,
  class: "up-to-date"
}, Xb = { class: "modal-actions" }, Jb = /* @__PURE__ */ fe({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(e, { emit: t }) {
    const o = t, n = b(!1);
    function l(i) {
      o("push", { force: i });
    }
    return (i, r) => {
      var u, d, f;
      return a(), M(kt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: r[7] || (r[7] = (v) => i.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: r[6] || (r[6] = ut(() => {
            }, ["stop"]))
          }, [
            s("div", Eb, [
              s("h3", Tb, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: r[0] || (r[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            s("div", Pb, [
              e.loading ? (a(), c("div", Mb, [...r[8] || (r[8] = [
                s("span", { class: "spinner" }, "⟳", -1),
                _(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), c("div", Rb, [...r[9] || (r[9] = [
                s("span", { class: "warning-icon" }, "⚠", -1),
                s("div", null, [
                  s("strong", null, "UNCOMMITTED CHANGES"),
                  s("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), c(G, { key: 2 }, [
                r[13] || (r[13] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "REMOTE HAS NEW COMMITS"),
                    s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), c("div", Db, [
                  r[10] || (r[10] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", Lb, [
                    (a(!0), c(G, null, ge(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      s("span", Nb, m(v.short_hash || v.hash.slice(0, 7)), 1),
                      s("span", Ab, m(v.message), 1),
                      s("span", Ub, m(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                s("div", zb, [
                  s("label", Ob, [
                    je(s("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": r[1] || (r[1] = (v) => n.value = v)
                    }, null, 512), [
                      [on, n.value]
                    ]),
                    r[11] || (r[11] = s("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  r[12] || (r[12] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), c(G, { key: 3 }, [
                s("div", Fb, [
                  r[14] || (r[14] = s("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), c("span", Bb, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), c("span", Vb, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), c("div", Wb, [...r[15] || (r[15] = [
                  s("span", { class: "info-icon" }, "ℹ", -1),
                  s("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), c("div", Gb, [
                  r[16] || (r[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", Hb, [
                    (a(!0), c(G, null, ge(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      s("span", Kb, m(v.short_hash || v.hash.slice(0, 7)), 1),
                      s("span", jb, m(v.message), 1),
                      s("span", qb, m(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), c("div", Yb, [
                  r[17] || (r[17] = s("span", { class: "icon" }, "✓", -1)),
                  _(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            s("div", Xb, [
              $(ie, {
                variant: "secondary",
                onClick: r[2] || (r[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...r[18] || (r[18] = [
                  _(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (f = e.preview) != null && f.remote_has_new_commits ? (a(), c(G, { key: 0 }, [
                $(ie, {
                  variant: "secondary",
                  onClick: r[3] || (r[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...r[19] || (r[19] = [
                    _(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                $(ie, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: r[4] || (r[4] = (v) => l(!0))
                }, {
                  default: h(() => [...r[20] || (r[20] = [
                    _(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), M(ie, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: r[5] || (r[5] = (v) => l(!1))
              }, {
                default: h(() => [...r[21] || (r[21] = [
                  _(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Qb = /* @__PURE__ */ pe(Jb, [["__scopeId", "data-v-ae86b6a7"]]), Zb = { class: "resolution-choice-group" }, ek = ["disabled"], tk = ["disabled"], sk = /* @__PURE__ */ fe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), c("div", Zb, [
      s("button", {
        class: Ce(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, ek),
      s("button", {
        class: Ce(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, tk)
    ]));
  }
}), ok = /* @__PURE__ */ pe(sk, [["__scopeId", "data-v-985715ed"]]), nk = { class: "conflict-header" }, ak = { class: "conflict-info" }, lk = { class: "workflow-name" }, ik = { class: "conflict-description" }, rk = {
  key: 0,
  class: "resolved-badge"
}, ck = { class: "resolved-text" }, uk = { class: "conflict-hashes" }, dk = { class: "hash-item" }, mk = { class: "hash-item" }, fk = { class: "conflict-actions" }, vk = /* @__PURE__ */ fe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(o.resolution);
    Tt(() => o.resolution, (d) => {
      l.value = d;
    }), Tt(l, (d) => {
      d && n("resolve", d);
    });
    const i = F(() => l.value !== null), r = F(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = F(() => {
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
      return a(), c("div", {
        class: Ce(["conflict-item", { resolved: i.value }])
      }, [
        s("div", nk, [
          f[2] || (f[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", ak, [
            s("code", lk, m(e.conflict.name) + ".json", 1),
            s("div", ik, m(r.value), 1)
          ]),
          i.value ? (a(), c("div", rk, [
            f[1] || (f[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", ck, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", uk, [
          s("span", dk, [
            f[3] || (f[3] = _("Your: ", -1)),
            s("code", null, m(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", mk, [
            f[4] || (f[4] = _("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", fk, [
          $(ok, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), pk = /* @__PURE__ */ pe(vk, [["__scopeId", "data-v-506d3bbf"]]), gk = { class: "resolution-content" }, hk = {
  key: 0,
  class: "error-box"
}, yk = { class: "resolution-header" }, wk = { class: "header-stats" }, _k = { class: "stat" }, bk = { class: "stat-value" }, kk = { class: "stat resolved" }, $k = { class: "stat-value" }, Ck = {
  key: 0,
  class: "stat pending"
}, xk = { class: "stat-value" }, Sk = { class: "conflicts-list" }, Ik = {
  key: 1,
  class: "all-resolved-message"
}, Ek = /* @__PURE__ */ fe({
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
    const o = e, n = t, l = F(() => o.resolutions.size), i = F(() => o.workflowConflicts.length - l.value), r = F(() => l.value === o.workflowConflicts.length), u = F(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = o.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function f(w, g) {
      n("resolve", w, g);
    }
    function v() {
      n("close");
    }
    function p() {
      n("apply");
    }
    return (w, g) => (a(), M(wt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", gk, [
          e.error ? (a(), c("div", hk, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", yk, [
            s("div", wk, [
              s("div", _k, [
                s("span", bk, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", kk, [
                s("span", $k, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), c("div", Ck, [
                s("span", xk, m(i.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", Sk, [
            (a(!0), c(G, null, ge(e.workflowConflicts, (k) => (a(), M(pk, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (x) => f(k.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          r.value ? (a(), c("div", Ik, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        $(Re, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...g[7] || (g[7] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        $(Re, {
          variant: "primary",
          disabled: !r.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            _(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tk = /* @__PURE__ */ pe(Ek, [["__scopeId", "data-v-c58d150d"]]), Pk = { class: "node-conflict-item" }, Mk = { class: "node-header" }, Rk = { class: "node-name" }, Dk = { class: "node-id" }, Lk = { class: "version-comparison" }, Nk = { class: "version yours" }, Ak = { class: "version theirs" }, Uk = { class: "chosen-version" }, zk = { class: "chosen" }, Ok = { class: "chosen-reason" }, Fk = { class: "affected-workflows" }, Bk = { class: "wf-source" }, Vk = { class: "wf-version" }, Wk = /* @__PURE__ */ fe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), c("div", Pk, [
      s("div", Mk, [
        s("code", Rk, m(e.conflict.node_name), 1),
        s("span", Dk, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", Lk, [
        s("div", Nk, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", Ak, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", Uk, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", zk, m(e.conflict.chosen_version), 1),
        s("span", Ok, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", Fk, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), c(G, null, ge(e.conflict.affected_workflows, (n) => (a(), c("li", {
            key: n.name
          }, [
            s("code", null, m(n.name), 1),
            s("span", Bk, "(" + m(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", Vk, "needs v" + m(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Gk = /* @__PURE__ */ pe(Wk, [["__scopeId", "data-v-8b626725"]]), Hk = { class: "validation-content" }, Kk = {
  key: 0,
  class: "compatible-message"
}, jk = { class: "conflicts-list" }, qk = {
  key: 2,
  class: "warnings-section"
}, Yk = /* @__PURE__ */ fe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = F(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, r) => (a(), M(wt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: r[3] || (r[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        s("div", Hk, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), c("div", Kk, [
            r[5] || (r[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              r[4] || (r[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), c(G, { key: 1 }, [
            r[6] || (r[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", jk, [
              (a(!0), c(G, null, ge(e.validation.node_conflicts, (u) => (a(), M(Gk, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            r[7] || (r[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), c("div", qk, [
            r[8] || (r[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), c(G, null, ge(e.validation.warnings, (u, d) => (a(), c("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        $(Re, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...r[9] || (r[9] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        }),
        r[11] || (r[11] = s("div", { class: "footer-spacer" }, null, -1)),
        $(Re, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...r[10] || (r[10] = [
            _(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "primary",
          loading: e.executing,
          onClick: r[2] || (r[2] = (u) => n("proceed"))
        }, {
          default: h(() => [
            _(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Xk = /* @__PURE__ */ pe(Yk, [["__scopeId", "data-v-fefd26ed"]]), Jk = { key: 0 }, Qk = /* @__PURE__ */ fe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: t }) {
    const o = t, {
      getRemotes: n,
      addRemote: l,
      removeRemote: i,
      updateRemoteUrl: r,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: f,
      pullFromRemote: v,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = dt(), k = b([]), x = b(null), C = b({}), I = b(!1), N = b(null), P = b(""), E = b(!1), H = b(null), K = b(!1), O = b("add"), S = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = F(() => {
      if (!P.value.trim()) return k.value;
      const V = P.value.toLowerCase();
      return k.value.filter(
        (ce) => ce.name.toLowerCase().includes(V) || ce.fetch_url.toLowerCase().includes(V) || ce.push_url.toLowerCase().includes(V)
      );
    });
    async function A() {
      I.value = !0, N.value = null;
      try {
        const V = await n();
        k.value = V.remotes, x.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (ce) => {
            const Te = await d(ce.name);
            Te && (C.value[ce.name] = Te);
          })
        );
      } catch (V) {
        N.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        I.value = !1;
      }
    }
    function re() {
      O.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, K.value = !0;
    }
    function Y(V) {
      const ce = k.value.find((Te) => Te.name === V);
      ce && (O.value = "edit", S.value = {
        name: ce.name,
        fetchUrl: ce.fetch_url,
        pushUrl: ce.push_url
      }, K.value = !0);
    }
    async function q(V) {
      try {
        O.value === "add" ? await l(V.name, V.fetchUrl) : await r(V.name, V.fetchUrl, V.pushUrl || void 0), K.value = !1, await A();
      } catch (ce) {
        N.value = ce instanceof Error ? ce.message : "Operation failed";
      }
    }
    function oe() {
      K.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Z(V) {
      H.value = V;
      try {
        await u(V);
        const ce = await d(V);
        ce && (C.value[V] = ce), o("toast", `✓ Fetched from ${V}`, "success");
      } catch (ce) {
        o("toast", ce instanceof Error ? ce.message : "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function U(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await i(V), await A();
        } catch (ce) {
          N.value = ce instanceof Error ? ce.message : "Failed to remove remote";
        }
    }
    function z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const D = b("idle"), we = F(() => D.value === "pull_preview"), ve = F(
      () => D.value === "resolving" || D.value === "validating"
    ), Ee = F(
      () => D.value === "validation_review" || D.value === "executing"
    ), De = b(!1), Ke = b(null), Je = b(!1), _e = b(null), Se = b(!1), We = b(null), ye = b(null), le = b(/* @__PURE__ */ new Map()), Be = b(null), Ie = b(null), L = F(() => We.value && Dr(We.value) ? We.value : null);
    async function B(V) {
      _e.value = V, D.value = "pull_preview", Se.value = !0, We.value = null, ye.value = null;
      try {
        We.value = await f(V);
      } catch (ce) {
        ye.value = ce instanceof Error ? ce.message : "Failed to load pull preview";
      } finally {
        Se.value = !1;
      }
    }
    function se() {
      D.value = "idle", We.value = null, ye.value = null, _e.value = null;
    }
    async function ae(V) {
      if (!_e.value) return;
      D.value = "executing", ye.value = null;
      const ce = _e.value;
      try {
        const Te = await v(ce, V);
        if (Te.rolled_back) {
          ye.value = `Pull failed and was rolled back: ${Te.error || "Unknown error"}`, D.value = "pull_preview";
          return;
        }
        $e(), D.value = "idle", o("toast", `✓ Pulled from ${ce}`, "success"), await A();
      } catch (Te) {
        ye.value = Te instanceof Error ? Te.message : "Pull failed", D.value = "pull_preview";
      }
    }
    function de() {
      L.value && (D.value = "resolving", Ie.value = null);
    }
    function me(V, ce) {
      le.value.set(V, { name: V, resolution: ce });
    }
    function be() {
      D.value = "pull_preview";
    }
    async function ke() {
      D.value = "validating", Ie.value = null;
      try {
        const V = Array.from(le.value.values());
        Be.value = await g(_e.value, V), D.value = "validation_review";
      } catch (V) {
        Ie.value = V instanceof Error ? V.message : "Validation failed", D.value = "resolving";
      }
    }
    async function ne() {
      D.value = "executing";
      const V = _e.value;
      try {
        const ce = Array.from(le.value.values()), Te = await v(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ce
        });
        if (Te.rolled_back) {
          ye.value = `Pull failed and was rolled back: ${Te.error || "Unknown error"}`, D.value = "pull_preview";
          return;
        }
        $e(), D.value = "idle", o("toast", `✓ Pulled from ${V}`, "success"), await A();
      } catch (ce) {
        ye.value = ce instanceof Error ? ce.message : "Pull failed", D.value = "validation_review";
      }
    }
    function ue() {
      D.value = "resolving";
    }
    function Me() {
      $e(), D.value = "idle";
    }
    function $e() {
      le.value.clear(), Be.value = null, Ie.value = null, ye.value = null, We.value = null, _e.value = null;
    }
    async function ee(V) {
      _e.value = V, De.value = !0, Se.value = !0, Ke.value = null;
      try {
        Ke.value = await p(V);
      } catch (ce) {
        N.value = ce instanceof Error ? ce.message : "Failed to load push preview";
      } finally {
        Se.value = !1;
      }
    }
    function j() {
      De.value = !1, Ke.value = null, _e.value = null;
    }
    async function X(V) {
      if (!_e.value) return;
      Je.value = !0;
      const ce = _e.value;
      try {
        await w(ce, V), j(), o("toast", `✓ Pushed to ${ce}`, "success"), await A();
      } catch (Te) {
        o("toast", Te instanceof Error ? Te.message : "Push failed", "error");
      } finally {
        Je.value = !1;
      }
    }
    function R() {
      const V = _e.value;
      j(), V && B(V);
    }
    return st(A), (V, ce) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ce[0] || (ce[0] = (Te) => E.value = !0)
          }, {
            actions: h(() => [
              K.value ? y("", !0) : (a(), M(ie, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: h(() => [...ce[3] || (ce[3] = [
                  _(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          K.value ? y("", !0) : (a(), M(Eo, {
            key: 0,
            modelValue: P.value,
            "onUpdate:modelValue": ce[1] || (ce[1] = (Te) => P.value = Te),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          I.value ? (a(), M(Ls, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (a(), M(Ns, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
            K.value ? (a(), M(G_, {
              key: 0,
              mode: O.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: q,
              onCancel: oe
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            k.value.length && !K.value ? (a(), M(dn, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                _(" Total: " + m(k.value.length) + " remote" + m(k.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), c("span", Jk, " • Tracking: " + m(x.value.remote) + "/" + m(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !K.value ? (a(), M(ct, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(T.value, (Te) => (a(), M(M_, {
                  key: Te.name,
                  remote: Te,
                  "sync-status": C.value[Te.name],
                  "fetching-remote": H.value,
                  onFetch: Z,
                  onEdit: Y,
                  onRemove: U,
                  onPull: B,
                  onPush: ee
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !K.value ? (a(), M(is, {
              key: 3,
              icon: "🌐",
              message: P.value ? `No remotes match '${P.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                $(ie, {
                  variant: "primary",
                  onClick: re
                }, {
                  default: h(() => [...ce[4] || (ce[4] = [
                    _(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(rs, {
        show: E.value,
        title: "About Git Remotes",
        onClose: ce[2] || (ce[2] = (Te) => E.value = !1)
      }, {
        content: h(() => [...ce[5] || (ce[5] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            _(" The "),
            s("strong", null, '"origin"'),
            _(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          $(ie, {
            variant: "link",
            onClick: z
          }, {
            default: h(() => [...ce[6] || (ce[6] = [
              _(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $(Ib, {
        show: we.value,
        "remote-name": _e.value || "",
        preview: We.value,
        loading: Se.value,
        pulling: D.value === "executing",
        error: ye.value,
        "conflict-resolutions": le.value,
        onClose: se,
        onPull: ae,
        onOpenConflictResolution: de
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      $(Qb, {
        show: De.value,
        "remote-name": _e.value || "",
        preview: Ke.value,
        loading: Se.value,
        pushing: Je.value,
        onClose: j,
        onPush: X,
        onPullFirst: R
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ve.value && L.value ? (a(), M(Tk, {
        key: 0,
        "workflow-conflicts": L.value.workflow_conflicts,
        resolutions: le.value,
        "operation-type": "pull",
        validating: D.value === "validating",
        error: Ie.value,
        onClose: be,
        onResolve: me,
        onApply: ke
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Ee.value && Be.value ? (a(), M(Xk, {
        key: 1,
        validation: Be.value,
        "operation-type": "pull",
        executing: D.value === "executing",
        onProceed: ne,
        onGoBack: ue,
        onCancel: Me
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Zk = /* @__PURE__ */ pe(Qk, [["__scopeId", "data-v-9ae3b76d"]]), e2 = { class: "setting-info" }, t2 = { class: "setting-label" }, s2 = {
  key: 0,
  class: "required-marker"
}, o2 = {
  key: 0,
  class: "setting-description"
}, n2 = { class: "setting-control" }, a2 = /* @__PURE__ */ fe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: Ce(["setting-row", { disabled: e.disabled }])
    }, [
      s("div", e2, [
        s("div", t2, [
          _(m(e.label) + " ", 1),
          e.required ? (a(), c("span", s2, "*")) : y("", !0)
        ]),
        e.description ? (a(), c("div", o2, m(e.description), 1)) : y("", !0)
      ]),
      s("div", n2, [
        He(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), wa = /* @__PURE__ */ pe(a2, [["__scopeId", "data-v-cb5d236c"]]), l2 = { class: "toggle" }, i2 = ["checked", "disabled"], r2 = /* @__PURE__ */ fe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), c("label", l2, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, i2),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), c2 = /* @__PURE__ */ pe(r2, [["__scopeId", "data-v-71c0f550"]]), u2 = { class: "workspace-settings-content" }, d2 = { class: "settings-section" }, m2 = { class: "path-setting" }, f2 = { class: "path-value" }, v2 = { class: "path-setting" }, p2 = { class: "path-value" }, g2 = { class: "settings-section" }, h2 = { class: "settings-section" }, y2 = { class: "settings-section" }, w2 = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: r } = dt(), u = b(!1), d = b(null), f = b(null), v = b(null), p = b(null), w = b(""), g = b(""), k = b(!1);
    function x(K) {
      return K.join(" ");
    }
    function C(K) {
      return K.trim() ? K.trim().split(/\s+/) : [];
    }
    const I = F(() => {
      if (!p.value) return !1;
      const K = w.value !== (p.value.civitai_api_key || ""), O = g.value !== x(p.value.comfyui_extra_args || []);
      return K || O;
    });
    async function N() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), p.value = { ...v.value }, w.value = v.value.civitai_api_key || "", g.value = x(v.value.comfyui_extra_args || []);
        const K = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = K === "true";
      } catch (K) {
        d.value = K instanceof Error ? K.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function P() {
      var K, O;
      f.value = null;
      try {
        const S = {};
        w.value !== (((K = p.value) == null ? void 0 : K.civitai_api_key) || "") && (S.civitai_api_key = w.value || null), g.value !== x(((O = p.value) == null ? void 0 : O.comfyui_extra_args) || []) && (S.comfyui_extra_args = C(g.value)), await r(S, n.workspacePath || void 0), await N(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (S) {
        const T = S instanceof Error ? S.message : "Failed to save settings";
        f.value = { type: "error", message: T }, l("error", T);
      }
    }
    function E() {
      p.value && (w.value = p.value.civitai_api_key || "", g.value = x(p.value.comfyui_extra_args || []), f.value = null);
    }
    function H(K) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(K)), console.log("[ComfyGit] Auto-refresh setting saved:", K);
    }
    return t({
      saveSettings: P,
      resetSettings: E,
      hasChanges: I,
      loadSettings: N
    }), st(N), (K, O) => (a(), c("div", u2, [
      u.value ? (a(), M(Ls, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), M(Ns, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: N
      }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
        $(ct, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var S, T;
            return [
              s("div", d2, [
                s("div", m2, [
                  O[3] || (O[3] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  O[4] || (O[4] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", f2, m(((S = v.value) == null ? void 0 : S.workspace_path) || "Loading..."), 1)
                ]),
                s("div", v2, [
                  O[5] || (O[5] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  O[6] || (O[6] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", p2, m(((T = v.value) == null ? void 0 : T.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        $(ct, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", g2, [
              $(wa, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  $(Bn, {
                    modelValue: w.value,
                    "onUpdate:modelValue": O[0] || (O[0] = (S) => w.value = S),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $(ct, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", h2, [
              $(wa, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  $(Bn, {
                    modelValue: g.value,
                    "onUpdate:modelValue": O[1] || (O[1] = (S) => g.value = S),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              O[7] || (O[7] = s("div", { class: "setting-hint" }, [
                _(" Common flags: "),
                s("code", null, "--lowvram"),
                _(", "),
                s("code", null, "--highvram"),
                _(", "),
                s("code", null, "--listen 0.0.0.0"),
                _(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        $(ct, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", y2, [
              $(wa, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  $(c2, {
                    modelValue: k.value,
                    "onUpdate:modelValue": [
                      O[2] || (O[2] = (S) => k.value = S),
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
        f.value ? (a(), M(dn, {
          key: 0,
          variant: (f.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: qt({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(f.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Lr = /* @__PURE__ */ pe(w2, [["__scopeId", "data-v-9f44552d"]]), _2 = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), M(Lt, null, {
      header: h(() => [
        $(Nt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, r;
            return [
              $(ie, {
                variant: "primary",
                size: "sm",
                disabled: !((i = t.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  _(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (r = t.value) != null && r.hasChanges ? (a(), M(ie, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  _(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
        $(Lr, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), b2 = { class: "base-tabs" }, k2 = ["disabled", "onClick"], $2 = {
  key: 0,
  class: "base-tabs__badge"
}, C2 = /* @__PURE__ */ fe({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(i) {
      var r;
      (r = o.tabs.find((u) => u.id === i)) != null && r.disabled || n("update:modelValue", i);
    }
    return (i, r) => (a(), c("div", b2, [
      (a(!0), c(G, null, ge(e.tabs, (u) => (a(), c("button", {
        key: u.id,
        class: Ce([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        _(m(u.label) + " ", 1),
        u.badge ? (a(), c("span", $2, m(u.badge), 1)) : y("", !0)
      ], 10, k2))), 128))
    ]));
  }
}), Nr = /* @__PURE__ */ pe(C2, [["__scopeId", "data-v-ad5e6cad"]]), x2 = { class: "log-viewer-wrapper" }, S2 = ["disabled", "title"], I2 = /* @__PURE__ */ fe({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = b(null), n = b("idle"), l = F(() => t.logs.map((f) => ({
      text: t.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function i() {
      var v;
      await ln();
      const f = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    st(i), Tt(() => t.logs, i);
    async function r() {
      if (l.value.length === 0) return;
      const f = l.value.map((v) => v.text).join(`
`);
      try {
        await navigator.clipboard.writeText(f), n.value = "copied", setTimeout(() => {
          n.value = "idle";
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
    return (f, v) => (a(), c("div", x2, [
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
          onClick: r,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, S2),
        (a(!0), c(G, null, ge(l.value, (p, w) => (a(), c("div", {
          key: w,
          class: Ce(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Ar = /* @__PURE__ */ pe(I2, [["__scopeId", "data-v-c0cc6d21"]]), E2 = /* @__PURE__ */ fe({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = dt(), r = b("workspace"), u = b([]), d = b(!1), f = b(null), v = b(!1), p = b(null), w = b(null), g = b(!1), k = F(() => r.value === "workspace" ? p.value : w.value);
    async function x() {
      d.value = !0, f.value = null;
      try {
        r.value === "workspace" ? u.value = await t(void 0, 500) : u.value = await n(void 0, 500);
      } catch (N) {
        f.value = N instanceof Error ? N.message : `Failed to load ${r.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function C() {
      try {
        const [N, P] = await Promise.all([
          o(),
          l()
        ]);
        N.exists && (p.value = N.path), P.exists && (w.value = P.path);
      } catch {
      }
    }
    async function I() {
      if (k.value) {
        g.value = !0;
        try {
          await i(k.value);
        } catch (N) {
          console.error("Failed to open log file:", N);
        } finally {
          g.value = !1;
        }
      }
    }
    return Tt(r, () => {
      x();
    }), st(() => {
      x(), C();
    }), (N, P) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (E) => v.value = !0)
          }, {
            actions: h(() => [
              $(ie, {
                variant: "secondary",
                size: "sm",
                onClick: I,
                disabled: !k.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  _(m(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(ie, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: d.value
              }, {
                default: h(() => [
                  _(m(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          $(Nr, {
            modelValue: r.value,
            "onUpdate:modelValue": P[1] || (P[1] = (E) => r.value = E),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), M(Ls, {
            key: 0,
            message: `Loading ${r.value} logs...`
          }, null, 8, ["message"])) : f.value ? (a(), M(Ns, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
            u.value.length === 0 ? (a(), M(is, {
              key: 0,
              icon: "📝",
              message: `No ${r.value} logs available`
            }, null, 8, ["message"])) : (a(), M(Ar, {
              key: 1,
              logs: u.value,
              "raw-format": r.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      $(rs, {
        show: v.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (E) => v.value = !1)
      }, {
        content: h(() => [...P[4] || (P[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            _(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            _(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            _(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            _(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            _(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            _(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          $(ie, {
            variant: "primary",
            onClick: P[2] || (P[2] = (E) => v.value = !1)
          }, {
            default: h(() => [...P[5] || (P[5] = [
              _(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), T2 = /* @__PURE__ */ fe({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = dt(), i = b([]), r = b(!1), u = b(null), d = b(!1), f = b("production"), v = b(null), p = b(!1);
    async function w() {
      r.value = !0, u.value = null;
      try {
        i.value = await t(void 0, 500);
        try {
          const x = await o();
          f.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        r.value = !1;
      }
    }
    async function g() {
      try {
        const x = await n();
        x.exists && (v.value = x.path);
      } catch {
      }
    }
    async function k() {
      if (v.value) {
        p.value = !0;
        try {
          await l(v.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return st(() => {
      w(), g();
    }), (x, C) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (I) => d.value = !0)
          }, {
            actions: h(() => [
              $(ie, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: !v.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  _(m(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(ie, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: r.value
              }, {
                default: h(() => [
                  _(m(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: h(() => [
          r.value ? (a(), M(Ls, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), M(Ns, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
            i.value.length === 0 ? (a(), M(is, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), M(Ar, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      $(rs, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (I) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            C[3] || (C[3] = _(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(f.value), 1),
            C[4] || (C[4] = _(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            _(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            _(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            _(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            _(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          $(ie, {
            variant: "primary",
            onClick: C[1] || (C[1] = (I) => d.value = !1)
          }, {
            default: h(() => [...C[6] || (C[6] = [
              _(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), P2 = { class: "env-title" }, M2 = {
  key: 0,
  class: "current-badge"
}, R2 = {
  key: 0,
  class: "branch-info"
}, D2 = /* @__PURE__ */ fe({
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
    return (t, o) => (a(), M(Dt, {
      status: e.isCurrent ? "synced" : void 0
    }, io({
      icon: h(() => [
        _(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", P2, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), c("span", M2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), c("span", R2, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          _(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        He(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          $(pt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          $(pt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          $(pt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), M(pt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), L2 = /* @__PURE__ */ pe(D2, [["__scopeId", "data-v-9231917a"]]), N2 = { class: "env-details" }, A2 = { class: "status-row" }, U2 = {
  key: 0,
  class: "detail-row"
}, z2 = { class: "value mono" }, O2 = {
  key: 1,
  class: "detail-row"
}, F2 = { class: "value mono small" }, B2 = { class: "detail-row" }, V2 = { class: "value" }, W2 = { class: "detail-row" }, G2 = { class: "value" }, H2 = { class: "detail-row" }, K2 = { class: "value" }, j2 = {
  key: 2,
  class: "section-divider"
}, q2 = {
  key: 3,
  class: "detail-row"
}, Y2 = { class: "value" }, X2 = {
  key: 4,
  class: "detail-row"
}, J2 = { class: "value" }, Q2 = { class: "footer-actions" }, Z2 = /* @__PURE__ */ fe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: t }) {
    const o = t;
    function n(l) {
      if (!l) return "Unknown";
      try {
        const i = new Date(l), u = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), d = Math.floor(u / 6e4), f = Math.floor(u / 36e5), v = Math.floor(u / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : f < 24 ? `${f} ${f === 1 ? "hour" : "hours"} ago` : v < 30 ? `${v} ${v === 1 ? "day" : "days"} ago` : i.toLocaleDateString();
      } catch {
        return l;
      }
    }
    return (l, i) => (a(), M(wt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (r) => o("close"))
    }, {
      body: h(() => [
        s("div", N2, [
          s("div", A2, [
            i[3] || (i[3] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ce(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), c("div", U2, [
            i[4] || (i[4] = s("span", { class: "label" }, "Branch:", -1)),
            s("span", z2, m(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), c("div", O2, [
            i[5] || (i[5] = s("span", { class: "label" }, "Path:", -1)),
            s("span", F2, m(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = s("div", { class: "section-divider" }, null, -1)),
          s("div", B2, [
            i[6] || (i[6] = s("span", { class: "label" }, "Workflows:", -1)),
            s("span", V2, m(e.environment.workflow_count), 1)
          ]),
          s("div", W2, [
            i[7] || (i[7] = s("span", { class: "label" }, "Nodes:", -1)),
            s("span", G2, m(e.environment.node_count), 1)
          ]),
          s("div", H2, [
            i[8] || (i[8] = s("span", { class: "label" }, "Models:", -1)),
            s("span", K2, m(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), c("div", j2)) : y("", !0),
          e.environment.created_at ? (a(), c("div", q2, [
            i[9] || (i[9] = s("span", { class: "label" }, "Created:", -1)),
            s("span", Y2, m(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), c("div", X2, [
            i[10] || (i[10] = s("span", { class: "label" }, "Last Used:", -1)),
            s("span", J2, m(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        s("div", Q2, [
          e.canDelete ? (a(), M(Re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (r) => o("delete", e.environment.name))
          }, {
            default: h(() => [...i[12] || (i[12] = [
              _(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = s("div", { class: "footer-spacer" }, null, -1)),
          $(Re, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (r) => o("close"))
          }, {
            default: h(() => [...i[13] || (i[13] = [
              _(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), e$ = /* @__PURE__ */ pe(Z2, [["__scopeId", "data-v-59855453"]]), Ur = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], zr = "3.12", cl = [
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
], Or = "auto", t$ = { class: "progress-bar" }, s$ = /* @__PURE__ */ fe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = F(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), c("div", t$, [
      s("div", {
        class: Ce(["progress-fill", e.variant]),
        style: qt({ width: o.value })
      }, null, 6)
    ]));
  }
}), na = /* @__PURE__ */ pe(s$, [["__scopeId", "data-v-1beb0512"]]), o$ = { class: "task-progress" }, n$ = { class: "progress-info" }, a$ = { class: "progress-percentage" }, l$ = { class: "progress-message" }, i$ = {
  key: 0,
  class: "progress-steps"
}, r$ = { class: "step-icon" }, c$ = { class: "step-label" }, u$ = /* @__PURE__ */ fe({
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
      const i = t.steps.find((r) => r.id === l);
      return i ? t.progress >= i.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const i = o(l);
      return i === "completed" ? "✓" : i === "active" ? "⟳" : "○";
    }
    return (l, i) => (a(), c("div", o$, [
      $(na, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", n$, [
        s("span", a$, m(e.progress) + "%", 1),
        s("span", l$, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), c("div", i$, [
        (a(!0), c(G, null, ge(e.steps, (r) => (a(), c("div", {
          key: r.id,
          class: Ce(["step", o(r.id)])
        }, [
          s("span", r$, m(n(r.id)), 1),
          s("span", c$, m(r.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Wn = /* @__PURE__ */ pe(u$, [["__scopeId", "data-v-9d1de66c"]]), d$ = {
  key: 0,
  class: "create-env-form"
}, m$ = { class: "form-field" }, f$ = { class: "form-field" }, v$ = ["value"], p$ = { class: "form-field" }, g$ = ["disabled"], h$ = ["value"], y$ = { class: "form-field" }, w$ = ["value"], _$ = { class: "form-field form-field--checkbox" }, b$ = { class: "form-checkbox" }, k$ = {
  key: 1,
  class: "create-env-progress"
}, $$ = { class: "creating-intro" }, C$ = {
  key: 0,
  class: "progress-warning"
}, x$ = {
  key: 1,
  class: "create-error"
}, S$ = { class: "error-message" }, I$ = {
  key: 1,
  class: "footer-status"
}, E$ = 10, T$ = /* @__PURE__ */ fe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = dt(), r = b(""), u = b(zr), d = b("latest"), f = b(Or), v = b(!1), p = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = b(!1), g = b(!1), k = b({
      progress: 0,
      message: ""
    });
    let x = null, C = 0;
    const I = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], N = b(null);
    function P() {
      g.value || o("close");
    }
    async function E() {
      const T = r.value.trim();
      if (T) {
        g.value = !0, k.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: T,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, re = await l(A);
          re.status === "started" ? H() : re.status === "error" && (k.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
          });
        } catch (A) {
          k.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function H() {
      x || (C = 0, x = window.setInterval(async () => {
        try {
          const T = await i();
          C = 0, k.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (K(), o("created", T.environment_name || r.value.trim(), v.value)) : T.state === "error" ? (K(), k.value.error = T.error || T.message) : T.state === "idle" && g.value && (K(), k.value.error = "Creation was interrupted. Please try again.");
        } catch {
          C++, C >= E$ && (K(), k.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      x && (clearInterval(x), x = null);
    }
    function O() {
      g.value = !1, k.value = { progress: 0, message: "" }, o("close");
    }
    async function S() {
      w.value = !0;
      try {
        p.value = await n();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        w.value = !1;
      }
    }
    return st(async () => {
      var T;
      await ln(), (T = N.value) == null || T.focus(), S();
    }), Io(() => {
      K();
    }), (T, A) => (a(), M(wt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !g.value,
      onClose: P
    }, {
      body: h(() => [
        g.value ? (a(), c("div", k$, [
          s("p", $$, [
            A[11] || (A[11] = _(" Creating environment ", -1)),
            s("strong", null, m(r.value), 1),
            A[12] || (A[12] = _("... ", -1))
          ]),
          $(Wn, {
            progress: k.value.progress,
            message: k.value.message,
            "current-phase": k.value.phase,
            variant: k.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          k.value.error ? y("", !0) : (a(), c("p", C$, " This may take several minutes. Please wait... ")),
          k.value.error ? (a(), c("div", x$, [
            s("p", S$, m(k.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), c("div", d$, [
          s("div", m$, [
            A[6] || (A[6] = s("label", { class: "form-label" }, "Name", -1)),
            je(s("input", {
              ref_key: "nameInput",
              ref: N,
              "onUpdate:modelValue": A[0] || (A[0] = (re) => r.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ss(E, ["enter"])
            }, null, 544), [
              [Vt, r.value]
            ])
          ]),
          s("div", f$, [
            A[7] || (A[7] = s("label", { class: "form-label" }, "Python Version", -1)),
            je(s("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (re) => u.value = re),
              class: "form-select"
            }, [
              (a(!0), c(G, null, ge(Ae(Ur), (re) => (a(), c("option", {
                key: re,
                value: re
              }, m(re), 9, v$))), 128))
            ], 512), [
              [_s, u.value]
            ])
          ]),
          s("div", p$, [
            A[8] || (A[8] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            je(s("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (re) => d.value = re),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), c(G, null, ge(p.value, (re) => (a(), c("option", {
                key: re.tag_name,
                value: re.tag_name
              }, m(re.name), 9, h$))), 128))
            ], 8, g$), [
              [_s, d.value]
            ])
          ]),
          s("div", y$, [
            A[9] || (A[9] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            je(s("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (re) => f.value = re),
              class: "form-select"
            }, [
              (a(!0), c(G, null, ge(Ae(cl), (re) => (a(), c("option", {
                key: re,
                value: re
              }, m(re) + m(re === "auto" ? " (detect GPU)" : ""), 9, w$))), 128))
            ], 512), [
              [_s, f.value]
            ])
          ]),
          s("div", _$, [
            s("label", b$, [
              je(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[4] || (A[4] = (re) => v.value = re)
              }, null, 512), [
                [on, v.value]
              ]),
              A[10] || (A[10] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        g.value ? (a(), c(G, { key: 1 }, [
          k.value.error ? (a(), M(Re, {
            key: 0,
            variant: "secondary",
            onClick: O
          }, {
            default: h(() => [...A[15] || (A[15] = [
              _(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), c("span", I$, " Creating environment... "))
        ], 64)) : (a(), c(G, { key: 0 }, [
          $(Re, {
            variant: "primary",
            disabled: !r.value.trim(),
            onClick: E
          }, {
            default: h(() => [...A[13] || (A[13] = [
              _(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(Re, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (re) => o("close"))
          }, {
            default: h(() => [...A[14] || (A[14] = [
              _(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), P$ = /* @__PURE__ */ pe(T$, [["__scopeId", "data-v-f37eaa42"]]), M$ = /* @__PURE__ */ fe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l } = dt(), i = b([]), r = b(!1), u = b(null), d = b(""), f = b(!1), v = b(!1), p = b(null), w = F(() => {
      if (!d.value.trim()) return i.value;
      const N = d.value.toLowerCase();
      return i.value.filter(
        (P) => {
          var E;
          return P.name.toLowerCase().includes(N) || ((E = P.current_branch) == null ? void 0 : E.toLowerCase().includes(N));
        }
      );
    });
    function g(N, P) {
      v.value = !1, n("created", N, P);
    }
    function k() {
      v.value = !0;
    }
    function x(N) {
      p.value = N;
    }
    function C(N) {
      p.value = null, n("delete", N);
    }
    async function I() {
      r.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        r.value = !1;
      }
    }
    return st(I), t({
      loadEnvironments: I,
      openCreateModal: k
    }), (N, P) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (E) => f.value = !0)
          }, {
            actions: h(() => [
              $(ie, {
                variant: "primary",
                size: "sm",
                onClick: k
              }, {
                default: h(() => [...P[6] || (P[6] = [
                  _(" Create ", -1)
                ])]),
                _: 1
              }),
              $(ie, {
                variant: "secondary",
                size: "sm",
                onClick: I
              }, {
                default: h(() => [...P[7] || (P[7] = [
                  _(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          $(Eo, {
            modelValue: d.value,
            "onUpdate:modelValue": P[1] || (P[1] = (E) => d.value = E),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          r.value ? (a(), M(Ls, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), M(Ns, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), c(G, { key: 2 }, [
            w.value.length ? (a(), M(ct, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), c(G, null, ge(w.value, (E) => (a(), M(L2, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    E.is_current ? y("", !0) : (a(), M(ie, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => N.$emit("switch", E.name)
                    }, {
                      default: h(() => [...P[8] || (P[8] = [
                        _(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    $(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => x(E)
                    }, {
                      default: h(() => [...P[9] || (P[9] = [
                        _(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            w.value.length ? y("", !0) : (a(), M(is, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, io({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  $(ie, {
                    variant: "primary",
                    onClick: k
                  }, {
                    default: h(() => [...P[10] || (P[10] = [
                      _(" Create Environment ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                key: "0"
              }
            ]), 1032, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      $(rs, {
        show: f.value,
        title: "About Environments",
        onClose: P[3] || (P[3] = (E) => f.value = !1)
      }, {
        content: h(() => [...P[11] || (P[11] = [
          s("p", null, [
            s("strong", null, "Environments"),
            _(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          $(ie, {
            variant: "secondary",
            onClick: P[2] || (P[2] = (E) => f.value = !1)
          }, {
            default: h(() => [...P[12] || (P[12] = [
              _(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), M(e$, {
        key: 0,
        environment: p.value,
        "can-delete": i.value.length > 1,
        onClose: P[4] || (P[4] = (E) => p.value = null),
        onDelete: C
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), M(P$, {
        key: 1,
        onClose: P[5] || (P[5] = (E) => v.value = !1),
        onCreated: g
      })) : y("", !0)
    ], 64));
  }
}), R$ = /* @__PURE__ */ pe(M$, [["__scopeId", "data-v-f95999f4"]]), D$ = { class: "file-path" }, L$ = { class: "file-path-text" }, N$ = ["title"], A$ = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), c("div", D$, [
      i[0] || (i[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", L$, m(e.path), 1),
      e.copyable ? (a(), c("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, m(o.value ? "✓" : "📋"), 9, N$)) : y("", !0)
    ]));
  }
}), U$ = /* @__PURE__ */ pe(A$, [["__scopeId", "data-v-f0982173"]]), z$ = { class: "export-blocked" }, O$ = { class: "issues-list" }, F$ = { class: "issue-message" }, B$ = {
  key: 0,
  class: "issue-details"
}, V$ = ["onClick"], W$ = { class: "issue-fix" }, G$ = /* @__PURE__ */ fe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(e) {
    const t = e, o = Ks({});
    function n(l) {
      const i = t.issues[l];
      return o[l] || i.details.length <= 3 ? i.details : i.details.slice(0, 3);
    }
    return (l, i) => (a(), M(wt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (r) => l.$emit("close"))
    }, {
      body: h(() => [
        s("div", z$, [
          i[2] || (i[2] = s("div", { class: "error-header" }, [
            s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ]),
            s("div", { class: "error-summary" }, [
              s("h3", { class: "error-title" }, "Export blocked"),
              s("p", { class: "error-description" }, " The following issues must be resolved before exporting. ")
            ])
          ], -1)),
          s("div", O$, [
            (a(!0), c(G, null, ge(e.issues, (r, u) => (a(), c("div", {
              key: u,
              class: "issue-item"
            }, [
              s("div", F$, m(r.message), 1),
              r.details.length ? (a(), c("div", B$, [
                (a(!0), c(G, null, ge(n(u), (d, f) => (a(), c("div", {
                  key: f,
                  class: "issue-detail"
                }, m(d), 1))), 128)),
                r.details.length > 3 && !o[u] ? (a(), c("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + m(r.details.length - 3) + " more ", 9, V$)) : y("", !0)
              ])) : y("", !0),
              s("div", W$, [
                r.type === "uncommitted_workflows" ? (a(), c(G, { key: 0 }, [
                  _(" Commit your workflow changes before exporting. ")
                ], 64)) : r.type === "uncommitted_git_changes" ? (a(), c(G, { key: 1 }, [
                  _(" Commit your changes before exporting. ")
                ], 64)) : r.type === "unresolved_issues" ? (a(), c(G, { key: 2 }, [
                  _(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        $(Re, {
          variant: "primary",
          onClick: i[0] || (i[0] = (r) => l.$emit("close"))
        }, {
          default: h(() => [...i[3] || (i[3] = [
            _(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Fr = /* @__PURE__ */ pe(G$, [["__scopeId", "data-v-b52f5e32"]]), H$ = { class: "export-warnings" }, K$ = {
  key: 0,
  class: "success-header"
}, j$ = { class: "warning-header" }, q$ = { class: "warning-summary" }, Y$ = { class: "warning-title" }, X$ = { class: "models-section" }, J$ = { class: "models-list" }, Q$ = { class: "model-info" }, Z$ = { class: "model-filename" }, eC = { class: "model-workflows" }, tC = ["onClick"], sC = /* @__PURE__ */ fe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(!1), i = b(null), r = F(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, f) => (a(), c(G, null, [
      $(wt, {
        title: "Export Warnings",
        size: "md",
        onClose: f[3] || (f[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          s("div", H$, [
            e.models.length === 0 ? (a(), c("div", K$, [...f[4] || (f[4] = [
              s("span", { class: "success-icon" }, [
                s("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1),
              s("div", { class: "success-summary" }, [
                s("h3", { class: "success-title" }, "All models have source URLs"),
                s("p", { class: "success-description" }, " Your environment is ready to export. Recipients will be able to download all models automatically. ")
              ], -1)
            ])])) : (a(), c(G, { key: 1 }, [
              s("div", j$, [
                f[6] || (f[6] = s("span", { class: "warning-icon" }, [
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
                s("div", q$, [
                  s("h3", Y$, m(e.models.length) + " model" + m(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  f[5] || (f[5] = s("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              s("div", X$, [
                s("div", J$, [
                  (a(!0), c(G, null, ge(r.value, (v) => (a(), c("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    s("div", Q$, [
                      s("div", Z$, m(v.filename), 1),
                      s("div", eC, " Used by: " + m(v.workflows.join(", ")), 1)
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      onClick: (p) => i.value = v.hash
                    }, " Add Source ", 8, tC)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (a(), c("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: f[0] || (f[0] = (v) => l.value = !0)
                }, " Show " + m(e.models.length - 3) + " more model" + m(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : y("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: h(() => [
          $(Re, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...f[7] || (f[7] = [
              _(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          $(Re, {
            variant: "primary",
            onClick: f[2] || (f[2] = (v) => d.$emit("confirm"))
          }, {
            default: h(() => [
              _(m(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), M(il, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Br = /* @__PURE__ */ pe(sC, [["__scopeId", "data-v-b698d882"]]), oC = { class: "export-card" }, nC = { class: "export-path-row" }, aC = { class: "export-actions" }, lC = {
  key: 1,
  class: "export-warning"
}, iC = /* @__PURE__ */ fe({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: t, exportEnvWithForce: o } = dt(), n = b(""), l = b(!1), i = b(!1), r = b(!1), u = b(null), d = b(!1), f = b(null), v = b(!1), p = b(!1), w = F(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function g() {
      l.value = !0, u.value = null;
      try {
        const P = await t();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? p.value = !0 : await C() : v.value = !0;
      } catch (P) {
        u.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function k() {
      p.value = !1, await C();
    }
    async function x() {
      try {
        const P = await t();
        f.value = P;
      } catch (P) {
        console.error("Re-validation failed:", P);
      }
    }
    async function C() {
      i.value = !0;
      try {
        const P = await o(n.value || void 0);
        u.value = P;
      } catch (P) {
        u.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function I() {
      var P;
      if ((P = u.value) != null && P.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (E) {
          console.error("Failed to copy path:", E);
        }
    }
    async function N() {
      var P;
      if ((P = u.value) != null && P.path) {
        r.value = !0;
        try {
          const E = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!E.ok)
            throw new Error(`Download failed: ${E.statusText}`);
          const H = await E.blob(), K = URL.createObjectURL(H), O = u.value.path.split("/").pop() || "environment-export.tar.gz", S = document.createElement("a");
          S.href = K, S.download = O, document.body.appendChild(S), S.click(), document.body.removeChild(S), URL.revokeObjectURL(K);
        } catch (E) {
          console.error("Failed to download:", E), alert(`Download failed: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
      }
    }
    return (P, E) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (H) => d.value = !0)
          })
        ]),
        content: h(() => [
          $(ct, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", oC, [
                E[7] || (E[7] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", nC, [
                  $(Bn, {
                    modelValue: n.value,
                    "onUpdate:modelValue": E[1] || (E[1] = (H) => n.value = H),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                s("div", aC, [
                  $(ie, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: g
                  }, {
                    default: h(() => [
                      E[6] || (E[6] = s("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        s("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        s("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      _(" " + m(w.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (a(), M(ct, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              $(Dt, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, io({
                icon: h(() => [
                  _(m(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  _(m(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  _(m(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    $(pt, { label: "Saved to:" }, {
                      default: h(() => [
                        $(U$, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), M(pt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), c("div", lC, [...E[8] || (E[8] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    $(ie, {
                      variant: "primary",
                      size: "sm",
                      loading: r.value,
                      onClick: N
                    }, {
                      default: h(() => [...E[9] || (E[9] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        _(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    $(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: I
                    }, {
                      default: h(() => [...E[10] || (E[10] = [
                        _(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    $(ie, {
                      variant: "ghost",
                      size: "sm",
                      onClick: E[2] || (E[2] = (H) => u.value = null)
                    }, {
                      default: h(() => [...E[11] || (E[11] = [
                        _(" Dismiss ", -1)
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
        _: 1
      }),
      $(rs, {
        show: d.value,
        title: "What Gets Exported",
        onClose: E[3] || (E[3] = (H) => d.value = !1)
      }, {
        content: h(() => [...E[12] || (E[12] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  _(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  _(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  _(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  _(" — Environment settings and metadata")
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
              _(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      v.value && f.value ? (a(), M(Fr, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: E[4] || (E[4] = (H) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      p.value && f.value ? (a(), M(Br, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: k,
        onCancel: E[5] || (E[5] = (H) => p.value = !1),
        onRevalidate: x
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), rC = /* @__PURE__ */ pe(iC, [["__scopeId", "data-v-f4d120f2"]]), cC = { class: "file-input-wrapper" }, uC = ["accept", "multiple", "disabled"], dC = /* @__PURE__ */ fe({
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
    function i() {
      var u;
      (u = l.value) == null || u.click();
    }
    function r(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return t({
      triggerInput: i
    }), (u, d) => (a(), c("div", cC, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: r
      }, null, 40, uC),
      $(ie, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: h(() => [
          He(u.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            _(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), mC = /* @__PURE__ */ pe(dC, [["__scopeId", "data-v-cd192091"]]), fC = {
  key: 0,
  class: "drop-zone-empty"
}, vC = { class: "drop-zone-text" }, pC = { class: "drop-zone-primary" }, gC = { class: "drop-zone-secondary" }, hC = { class: "drop-zone-actions" }, yC = {
  key: 1,
  class: "drop-zone-file"
}, wC = { class: "file-info" }, _C = { class: "file-details" }, bC = { class: "file-name" }, kC = { class: "file-size" }, $C = /* @__PURE__ */ fe({
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
    const o = t, n = b(!1), l = b(null), i = b(0), r = F(() => l.value !== null), u = F(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = F(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(C) {
      var I;
      C.stopPropagation(), i.value++, (I = C.dataTransfer) != null && I.types.includes("Files") && (n.value = !0);
    }
    function v(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function p(C) {
      C.stopPropagation(), i.value--, i.value === 0 && (n.value = !1);
    }
    function w(C) {
      var N;
      C.stopPropagation(), i.value = 0, n.value = !1;
      const I = (N = C.dataTransfer) == null ? void 0 : N.files;
      I && I.length > 0 && k(I[0]);
    }
    function g(C) {
      C.length > 0 && k(C[0]);
    }
    function k(C) {
      l.value = C, o("fileSelected", C);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (C, I) => (a(), c("div", {
      class: Ce(["file-drop-zone", { "drop-active": n.value, "has-file": r.value }]),
      onDragenter: ut(f, ["prevent"]),
      onDragover: ut(v, ["prevent"]),
      onDragleave: ut(p, ["prevent"]),
      onDrop: ut(w, ["prevent"])
    }, [
      r.value ? (a(), c("div", yC, [
        s("div", wC, [
          I[1] || (I[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", _C, [
            s("div", bC, m(u.value), 1),
            s("div", kC, m(d.value), 1)
          ])
        ]),
        $(ie, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: h(() => [...I[2] || (I[2] = [
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
      ])) : (a(), c("div", fC, [
        I[0] || (I[0] = s("div", { class: "drop-zone-icon" }, [
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
        s("div", vC, [
          s("p", pC, m(e.primaryText), 1),
          s("p", gC, m(e.secondaryText), 1)
        ]),
        s("div", hC, [
          $(mC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              _(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), CC = /* @__PURE__ */ pe($C, [["__scopeId", "data-v-0f79cb86"]]), xC = { class: "import-preview" }, SC = { class: "preview-header" }, IC = {
  key: 0,
  class: "source-env"
}, EC = { class: "preview-content" }, TC = { class: "preview-section" }, PC = { class: "section-header" }, MC = { class: "section-info" }, RC = { class: "section-count" }, DC = {
  key: 0,
  class: "item-list"
}, LC = { class: "item-name" }, NC = {
  key: 0,
  class: "item-more"
}, AC = { class: "preview-section" }, UC = { class: "section-header" }, zC = { class: "section-info" }, OC = { class: "section-count" }, FC = {
  key: 0,
  class: "item-list"
}, BC = { class: "item-details" }, VC = { class: "item-name" }, WC = { class: "item-meta" }, GC = {
  key: 0,
  class: "item-more"
}, HC = { class: "preview-section" }, KC = { class: "section-header" }, jC = { class: "section-info" }, qC = { class: "section-count" }, YC = {
  key: 0,
  class: "item-list"
}, XC = { class: "item-name" }, JC = {
  key: 0,
  class: "item-more"
}, QC = {
  key: 0,
  class: "preview-section"
}, ZC = { class: "git-info" }, e3 = /* @__PURE__ */ fe({
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
    const t = e, o = F(() => t.workflows.length), n = F(() => t.models.length), l = F(() => t.nodes.length);
    function i(r) {
      return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : r < 1024 * 1024 * 1024 ? `${(r / (1024 * 1024)).toFixed(1)} MB` : `${(r / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (r, u) => (a(), c("div", xC, [
      s("div", SC, [
        $(Ft, null, {
          default: h(() => [...u[0] || (u[0] = [
            _("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), c("span", IC, [
          u[1] || (u[1] = _(" From: ", -1)),
          $(Aa, null, {
            default: h(() => [
              _(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", EC, [
        s("div", TC, [
          s("div", PC, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", MC, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", RC, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), c("div", DC, [
            (a(!0), c(G, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", LC, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), c("div", NC, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", AC, [
          s("div", UC, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", zC, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", OC, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), c("div", FC, [
            (a(!0), c(G, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", BC, [
                s("span", VC, m(d.filename), 1),
                s("span", WC, m(i(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), c("div", GC, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", HC, [
          s("div", KC, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", jC, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", qC, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), c("div", YC, [
            (a(!0), c(G, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", XC, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), c("div", JC, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), c("div", QC, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", ZC, [
            e.gitBranch ? (a(), M(pt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                $(Aa, null, {
                  default: h(() => [
                    _(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), M(pt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                $(Er, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), t3 = /* @__PURE__ */ pe(e3, [["__scopeId", "data-v-182fe113"]]), s3 = { class: "import-config" }, o3 = { class: "config-container" }, n3 = { class: "config-field" }, a3 = { class: "input-wrapper" }, l3 = ["value"], i3 = {
  key: 0,
  class: "validating-indicator"
}, r3 = {
  key: 1,
  class: "valid-indicator"
}, c3 = {
  key: 0,
  class: "field-error"
}, u3 = { class: "config-field" }, d3 = { class: "strategy-options" }, m3 = ["value", "checked", "onChange"], f3 = { class: "strategy-content" }, v3 = { class: "strategy-label" }, p3 = { class: "strategy-description" }, g3 = { class: "config-field switch-field" }, h3 = { class: "switch-label" }, y3 = ["checked"], w3 = { class: "advanced-section" }, _3 = { class: "advanced-content" }, b3 = { class: "config-field" }, k3 = ["value"], $3 = ["value"], C3 = /* @__PURE__ */ fe({
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
    const o = e, n = t, l = b(!1), i = b(!1);
    Tt(() => o.nameError, (v) => {
      l.value = !1, i.value = !v && o.name.length > 0;
    });
    const r = [
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
      n("update:name", p), i.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function f() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, p) => (a(), c("div", s3, [
      $(Ft, null, {
        default: h(() => [...p[2] || (p[2] = [
          _("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", o3, [
        s("div", n3, [
          $(Pn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              _("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", a3, [
            s("input", {
              type: "text",
              class: Ce(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: f
            }, null, 42, l3),
            l.value ? (a(), c("span", i3, "...")) : i.value ? (a(), c("span", r3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), c("div", c3, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", u3, [
          $(Pn, null, {
            default: h(() => [...p[5] || (p[5] = [
              _("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", d3, [
            (a(), c(G, null, ge(r, (w) => s("label", {
              key: w.value,
              class: Ce(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => n("update:modelStrategy", w.value)
              }, null, 40, m3),
              s("div", f3, [
                s("span", v3, m(w.label), 1),
                s("span", p3, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", g3, [
          s("label", h3, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, y3),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", w3, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", _3, [
            s("div", b3, [
              $(Pn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  _("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), c(G, null, ge(Ae(cl), (w) => (a(), c("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, $3))), 128))
              ], 40, k3)
            ])
          ])
        ])
      ])
    ]));
  }
}), x3 = /* @__PURE__ */ pe(C3, [["__scopeId", "data-v-89ea06a1"]]), S3 = { class: "import-flow" }, I3 = {
  key: 0,
  class: "import-empty"
}, E3 = { class: "git-import-section" }, T3 = { class: "git-url-input-row" }, P3 = ["disabled"], M3 = {
  key: 0,
  class: "git-error"
}, R3 = {
  key: 1,
  class: "import-configure"
}, D3 = { class: "selected-file-bar" }, L3 = {
  key: 0,
  class: "file-bar-content"
}, N3 = { class: "file-bar-info" }, A3 = { class: "file-bar-name" }, U3 = { class: "file-bar-size" }, z3 = {
  key: 1,
  class: "file-bar-content"
}, O3 = { class: "file-bar-info" }, F3 = { class: "file-bar-name" }, B3 = {
  key: 0,
  class: "preview-loading"
}, V3 = { class: "import-actions" }, W3 = {
  key: 2,
  class: "import-progress"
}, G3 = { class: "creating-intro" }, H3 = {
  key: 0,
  class: "progress-warning"
}, K3 = {
  key: 1,
  class: "import-error"
}, j3 = { class: "error-message" }, q3 = {
  key: 3,
  class: "import-complete"
}, Y3 = { class: "complete-message" }, X3 = { class: "complete-title" }, J3 = { class: "complete-details" }, Q3 = { class: "complete-actions" }, Z3 = /* @__PURE__ */ fe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Je, _e, Se, We;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: r, validateEnvironmentName: u, executeImport: d, executeGitImport: f, getImportProgress: v } = dt();
    let p = null;
    const w = b(null), g = b(n.resumeImport ?? !1), k = b(!1), x = b(!1), C = b(""), I = b(!1), N = b(null), P = b(""), E = b(null), H = b(!1), K = b(null), O = b(null), S = b({
      name: ((Je = n.initialProgress) == null ? void 0 : Je.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = b(null), A = b({
      message: ((_e = n.initialProgress) == null ? void 0 : _e.message) ?? "Preparing import...",
      phase: ((Se = n.initialProgress) == null ? void 0 : Se.phase) ?? "",
      progress: ((We = n.initialProgress) == null ? void 0 : We.progress) ?? 0,
      error: null
    }), re = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Y = F(() => {
      if (!O.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ye = O.value;
      return {
        sourceEnvironment: ye.comfyui_version ? `ComfyUI ${ye.comfyui_version}` : "Unknown",
        workflows: ye.workflows.map((le) => le.name),
        models: ye.models.map((le) => ({
          filename: le.filename,
          size: 0,
          type: le.relative_path.split("/")[0] || "model"
        })),
        nodes: ye.nodes.map((le) => le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), q = F(() => !I.value && !N.value && O.value && S.value.name.length > 0 && !T.value && (w.value || E.value));
    async function oe(ye) {
      w.value = ye, I.value = !0, N.value = null, O.value = null;
      try {
        const le = await i(ye);
        O.value = le;
      } catch (le) {
        N.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        I.value = !1;
      }
    }
    function Z() {
      w.value = null, E.value = null, P.value = "", K.value = null, k.value = !1, x.value = !1, C.value = "", O.value = null, N.value = null, S.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function U() {
      De(), Z(), g.value = !1, I.value = !1, H.value = !1, A.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function z() {
      if (P.value.trim()) {
        H.value = !0, K.value = null;
        try {
          const ye = await r(P.value.trim());
          E.value = P.value.trim(), O.value = ye;
        } catch (ye) {
          K.value = ye instanceof Error ? ye.message : "Failed to analyze repository";
        } finally {
          H.value = !1;
        }
      }
    }
    function D(ye) {
      try {
        const le = new URL(ye);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return ye;
      }
    }
    async function we(ye) {
      if (!ye) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const le = await u(ye);
        T.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function ve() {
      if (S.value.name && !(!w.value && !E.value)) {
        g.value = !0, k.value = !1, A.value = { message: `Creating environment '${S.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ye;
          if (w.value)
            ye = await d(
              w.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else if (E.value)
            ye = await f(
              E.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ye.status === "started" ? Ee() : (x.value = !1, C.value = ye.message, g.value = !1, k.value = !0);
        } catch (ye) {
          x.value = !1, C.value = ye instanceof Error ? ye.message : "Unknown error occurred during import", g.value = !1, k.value = !0;
        }
      }
    }
    async function Ee() {
      if (p) return;
      const ye = async () => {
        try {
          const Be = await v();
          return A.value = {
            message: Be.message,
            phase: Be.phase || "",
            progress: Be.progress ?? (Be.state === "importing" ? 50 : 0),
            error: Be.error || null
          }, Be.state === "complete" ? (De(), x.value = !0, C.value = `Environment '${Be.environment_name}' created successfully`, g.value = !1, k.value = !0, Be.environment_name && l("import-complete", Be.environment_name, S.value.switchAfterImport), !1) : Be.state === "error" ? (De(), x.value = !1, C.value = Be.error || Be.message, g.value = !1, k.value = !0, !1) : !0;
        } catch (Be) {
          return console.error("Failed to poll import progress:", Be), !0;
        }
      };
      await ye() && (p = setInterval(async () => {
        await ye() || De();
      }, 2e3));
    }
    function De() {
      p && (clearInterval(p), p = null);
    }
    function Ke(ye) {
      return ye < 1024 ? `${ye} B` : ye < 1024 * 1024 ? `${(ye / 1024).toFixed(1)} KB` : ye < 1024 * 1024 * 1024 ? `${(ye / (1024 * 1024)).toFixed(1)} MB` : `${(ye / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return st(async () => {
      try {
        const ye = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ye.state, ye), ye.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ye.environment_name), g.value = !0, S.value.name = ye.environment_name || S.value.name || "", A.value = {
          progress: ye.progress ?? 0,
          message: ye.message || "Importing...",
          phase: ye.phase || "",
          error: null
        }, Ee());
      } catch (ye) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ye);
      }
    }), t({
      handleReset: U,
      isImporting: g,
      canImport: q
    }), (ye, le) => {
      var Be;
      return a(), c("div", S3, [
        !w.value && !E.value && !g.value ? (a(), c("div", I3, [
          $(CC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: oe
          }),
          le[7] || (le[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", E3, [
            le[5] || (le[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", T3, [
              je(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": le[0] || (le[0] = (Ie) => P.value = Ie),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ss(z, ["enter"]),
                disabled: H.value
              }, null, 40, P3), [
                [Vt, P.value]
              ]),
              $(ie, {
                variant: "primary",
                size: "sm",
                disabled: !P.value.trim() || H.value,
                onClick: z
              }, {
                default: h(() => [
                  _(m(H.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            K.value ? (a(), c("div", M3, m(K.value), 1)) : y("", !0),
            le[6] || (le[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !g.value && !k.value ? (a(), c("div", R3, [
          s("div", D3, [
            w.value ? (a(), c("div", L3, [
              le[8] || (le[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", N3, [
                s("div", A3, m(w.value.name), 1),
                s("div", U3, m(Ke(w.value.size)), 1)
              ])
            ])) : E.value ? (a(), c("div", z3, [
              le[10] || (le[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", O3, [
                s("div", F3, m(D(E.value)), 1),
                le[9] || (le[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            $(ie, {
              variant: "ghost",
              size: "sm",
              onClick: Z
            }, {
              default: h(() => [...le[11] || (le[11] = [
                _(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          I.value ? (a(), c("div", B3, [...le[12] || (le[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (a(), M(Qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : O.value ? (a(), M(t3, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          O.value ? (a(), M(x3, {
            key: 3,
            name: S.value.name,
            "onUpdate:name": le[1] || (le[1] = (Ie) => S.value.name = Ie),
            "model-strategy": S.value.modelStrategy,
            "onUpdate:modelStrategy": le[2] || (le[2] = (Ie) => S.value.modelStrategy = Ie),
            "torch-backend": S.value.torchBackend,
            "onUpdate:torchBackend": le[3] || (le[3] = (Ie) => S.value.torchBackend = Ie),
            "switch-after-import": S.value.switchAfterImport,
            "onUpdate:switchAfterImport": le[4] || (le[4] = (Ie) => S.value.switchAfterImport = Ie),
            "name-error": T.value,
            onValidateName: we
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          S.value.modelStrategy === "skip" && ((Be = O.value) != null && Be.models_needing_download) ? (a(), M(Qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${O.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", V3, [
            $(ie, {
              variant: "secondary",
              size: "md",
              onClick: Z
            }, {
              default: h(() => [...le[13] || (le[13] = [
                _(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(ie, {
              variant: "primary",
              size: "md",
              disabled: !q.value,
              onClick: ve
            }, {
              default: h(() => [...le[14] || (le[14] = [
                _(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (a(), c("div", W3, [
          s("p", G3, [
            le[15] || (le[15] = _(" Importing environment ", -1)),
            s("strong", null, m(S.value.name), 1),
            le[16] || (le[16] = _("... ", -1))
          ]),
          $(Wn, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? y("", !0) : (a(), c("p", H3, " This may take several minutes. Please wait... ")),
          A.value.error ? (a(), c("div", K3, [
            s("p", j3, m(A.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (a(), c("div", q3, [
          s("div", {
            class: Ce(["complete-icon", x.value ? "success" : "error"])
          }, m(x.value ? "✓" : "✕"), 3),
          s("div", Y3, [
            s("div", X3, m(x.value ? "Import Successful" : "Import Failed"), 1),
            s("div", J3, m(C.value), 1)
          ]),
          s("div", Q3, [
            $(ie, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: h(() => [...le[17] || (le[17] = [
                _(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Vr = /* @__PURE__ */ pe(Z3, [["__scopeId", "data-v-72cbc04e"]]), e5 = /* @__PURE__ */ fe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, n = b(!1);
    function l(i, r) {
      r && o("import-complete-switch", i);
    }
    return (i, r) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: r[0] || (r[0] = (u) => n.value = !0)
          })
        ]),
        content: h(() => [
          $(Vr, { onImportComplete: l })
        ]),
        _: 1
      }),
      $(rs, {
        show: n.value,
        title: "How Import Works",
        onClose: r[1] || (r[1] = (u) => n.value = !1)
      }, {
        content: h(() => [...r[2] || (r[2] = [
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
}), t5 = /* @__PURE__ */ pe(e5, [["__scopeId", "data-v-e13bfe76"]]), $n = vo(), s5 = 5e3, uo = b([]), _a = b(!1), ba = b(null);
let Lo = null;
function Wr(e) {
  const t = F(
    () => uo.value.filter((g) => g.status === "running")
  ), o = F(
    () => uo.value.filter((g) => g.status === "deploying")
  ), n = F(
    () => uo.value.filter((g) => g.status === "stopped")
  ), l = F(
    () => t.value.length + o.value.length
  ), i = F(() => {
    const g = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...uo.value].sort(
      (k, x) => (g[k.status] ?? 5) - (g[x.status] ?? 5)
    );
  });
  async function r() {
    _a.value = !0, ba.value = null;
    try {
      let g;
      $n && (g = await Le.getInstances()), uo.value = g.instances;
    } catch (g) {
      ba.value = g instanceof Error ? g.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", g);
    } finally {
      _a.value = !1;
    }
  }
  function u(g, k) {
    if (g.provider === "custom" && g.worker_name) {
      const x = g.id.includes(":") ? g.id.split(":").slice(1).join(":") : g.id;
      return k === "terminate" ? `/v2/comfygit/deploy/custom/${g.worker_name}/instances/${x}` : `/v2/comfygit/deploy/custom/${g.worker_name}/instances/${x}/${k}`;
    }
    return k === "terminate" ? `/v2/comfygit/deploy/${g.provider}/${g.id}` : `/v2/comfygit/deploy/${g.provider}/${g.id}/${k}`;
  }
  async function d(g) {
    try {
      $n && await Le.stopRunPodPod(g.id), await r();
    } catch (k) {
      throw console.error("[useDeployInstances] stopInstance error:", k), k;
    }
  }
  async function f(g) {
    try {
      $n && await Le.startRunPodPod(g.id), await r();
    } catch (k) {
      throw console.error("[useDeployInstances] startInstance error:", k), k;
    }
  }
  async function v(g) {
    try {
      $n && await Le.terminateRunPodPod(g.id), await r();
    } catch (k) {
      throw console.error("[useDeployInstances] terminateInstance error:", k), k;
    }
  }
  function p() {
    Lo || (Lo = window.setInterval(r, s5));
  }
  function w() {
    Lo && (clearInterval(Lo), Lo = null);
  }
  return Tt(o, (g) => {
    g.length > 0 && p();
  }, { immediate: !0 }), e != null && e.autoStart && (r(), p()), {
    // State
    instances: uo,
    isLoading: _a,
    error: ba,
    // Computed
    runningInstances: t,
    deployingInstances: o,
    stoppedInstances: n,
    liveInstanceCount: l,
    sortedInstances: i,
    // Actions
    refreshInstances: r,
    stopInstance: d,
    startInstance: f,
    terminateInstance: v,
    // Polling
    startPolling: p,
    stopPolling: w
  };
}
const o5 = { class: "instance-header" }, n5 = { class: "provider-badge" }, a5 = { class: "instance-name" }, l5 = {
  key: 0,
  class: "spinner"
}, i5 = { class: "instance-details" }, r5 = {
  key: 0,
  class: "detail"
}, c5 = {
  key: 1,
  class: "detail instance-url"
}, u5 = {
  key: 2,
  class: "detail"
}, d5 = {
  key: 3,
  class: "detail"
}, m5 = {
  key: 4,
  class: "detail total-cost"
}, f5 = {
  key: 0,
  class: "deployment-progress"
}, v5 = { class: "progress-message" }, p5 = { class: "instance-actions" }, g5 = /* @__PURE__ */ fe({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const t = e, o = F(() => t.instance.provider === "custom" && t.instance.worker_name ? t.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[t.instance.provider] || t.instance.provider), n = F(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[t.instance.status] || t.instance.status), l = F(() => `status-${t.instance.status}`);
    function i() {
      t.instance.comfyui_url && window.open(t.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function r() {
      t.instance.console_url && window.open(t.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function u(d) {
      const f = Math.floor(d / 3600), v = Math.floor(d % 3600 / 60);
      return f > 0 ? `${f}h ${v}m` : `${v}m`;
    }
    return (d, f) => (a(), c("div", {
      class: Ce(["instance-card", l.value])
    }, [
      s("div", o5, [
        s("span", n5, m(o.value), 1),
        s("span", a5, m(e.instance.name), 1),
        s("span", {
          class: Ce(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), c("span", l5)) : y("", !0),
          _(" " + m(n.value), 1)
        ], 2)
      ]),
      s("div", i5, [
        e.instance.gpu_type ? (a(), c("span", r5, m(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), c("span", c5, m(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), c("span", u5, m(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), c("span", d5, "$" + m(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), c("span", m5, "$" + m(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), c("div", f5, [
        s("div", v5, m(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), M(na, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      s("div", p5, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), M(ie, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: i
        }, {
          default: h(() => [...f[3] || (f[3] = [
            _(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), M(ie, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: r
        }, {
          default: h(() => [...f[4] || (f[4] = [
            _(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), M(ie, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[0] || (f[0] = (v) => d.$emit("stop", e.instance))
        }, {
          default: h(() => [...f[5] || (f[5] = [
            _(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), M(ie, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[1] || (f[1] = (v) => d.$emit("start", e.instance))
        }, {
          default: h(() => [...f[6] || (f[6] = [
            _(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        $(ie, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[2] || (f[2] = (v) => d.$emit("terminate", e.instance))
        }, {
          default: h(() => [...f[7] || (f[7] = [
            _(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), h5 = /* @__PURE__ */ pe(g5, [["__scopeId", "data-v-746c3894"]]), y5 = { class: "instances-tab" }, w5 = { class: "instances-header" }, _5 = {
  key: 0,
  class: "loading-state"
}, b5 = {
  key: 1,
  class: "empty-state"
}, k5 = {
  key: 2,
  class: "instances-list"
}, $5 = /* @__PURE__ */ fe({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const t = e, o = F(() => {
      const n = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...t.instances].sort(
        (l, i) => (n[l.status] ?? 5) - (n[i.status] ?? 5)
      );
    });
    return (n, l) => (a(), c("div", y5, [
      s("div", w5, [
        $(Ft, null, {
          default: h(() => [...l[4] || (l[4] = [
            _("Active Instances", -1)
          ])]),
          _: 1
        }),
        $(ie, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (i) => n.$emit("refresh"))
        }, {
          default: h(() => [...l[5] || (l[5] = [
            _(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), c("div", _5, [...l[6] || (l[6] = [
        s("span", { class: "spinner" }, null, -1),
        _(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), c("div", b5, [...l[7] || (l[7] = [
        s("span", { class: "empty-icon" }, "○", -1),
        s("span", { class: "empty-text" }, "No active instances", -1),
        s("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), c("div", k5, [
        (a(!0), c(G, null, ge(o.value, (i) => (a(), M(h5, {
          key: i.id,
          instance: i,
          "is-loading": e.actionLoadingId === i.id,
          onStop: l[1] || (l[1] = (r) => n.$emit("stop", r)),
          onStart: l[2] || (l[2] = (r) => n.$emit("start", r)),
          onTerminate: l[3] || (l[3] = (r) => n.$emit("terminate", r))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), C5 = /* @__PURE__ */ pe($5, [["__scopeId", "data-v-ba614fc3"]]), x5 = { class: "remote-header" }, S5 = { class: "remote-info" }, I5 = { class: "remote-icon" }, E5 = { class: "remote-name" }, T5 = {
  key: 0,
  class: "default-badge"
}, P5 = {
  key: 1,
  class: "sync-badge"
}, M5 = {
  key: 0,
  class: "ahead"
}, R5 = {
  key: 1,
  class: "behind"
}, D5 = {
  key: 1,
  class: "synced"
}, L5 = ["href"], N5 = {
  key: 1,
  class: "remote-url-text"
}, A5 = { class: "remote-actions" }, U5 = /* @__PURE__ */ fe({
  __name: "DeployRemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    isSelected: { type: Boolean },
    isFetching: { type: Boolean },
    isPushing: { type: Boolean }
  },
  emits: ["fetch", "push", "select"],
  setup(e) {
    const t = e, o = F(() => t.remote.is_default), n = F(() => {
      const i = t.remote.fetch_url, r = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return r ? `https://${r[1]}/${r[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = F(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, r) => (a(), c("div", {
      class: Ce(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      s("div", x5, [
        s("div", S5, [
          s("span", I5, m(o.value ? "🔗" : "🌐"), 1),
          s("span", E5, m(e.remote.name), 1),
          o.value ? (a(), c("span", T5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", P5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", M5, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", R5, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", D5, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), c("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: r[0] || (r[0] = ut(() => {
          }, ["stop"]))
        }, m(l.value), 9, L5)) : (a(), c("span", N5, m(l.value), 1))
      ]),
      s("div", A5, [
        $(ie, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: r[1] || (r[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...r[4] || (r[4] = [
            _(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), M(ie, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: r[2] || (r[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            _(" Push ↑" + m(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        $(ie, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: r[3] || (r[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            _(m(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Gr = /* @__PURE__ */ pe(U5, [["__scopeId", "data-v-d687d161"]]), z5 = { class: "runpod-tab" }, O5 = { class: "api-key-card" }, F5 = { class: "api-key-row" }, B5 = { class: "api-key-input-wrapper" }, V5 = ["type", "disabled"], W5 = ["title"], G5 = { class: "status-icon" }, H5 = { class: "status-text" }, K5 = {
  key: 0,
  class: "credit-balance"
}, j5 = { class: "config-card" }, q5 = { class: "config-row" }, Y5 = ["disabled"], X5 = {
  key: 0,
  value: ""
}, J5 = {
  key: 1,
  value: "",
  disabled: ""
}, Q5 = ["value", "disabled"], Z5 = { class: "config-row" }, ex = {
  key: 0,
  class: "loading-inline"
}, tx = { class: "no-volumes-state" }, sx = { class: "no-volumes-text" }, ox = ["value"], nx = { class: "config-row" }, ax = ["disabled"], lx = {
  key: 0,
  value: ""
}, ix = {
  key: 1,
  value: ""
}, rx = {
  key: 2,
  value: ""
}, cx = ["value"], ux = { class: "config-row" }, dx = { class: "radio-group" }, mx = { class: "radio-option" }, fx = { class: "radio-label" }, vx = { class: "radio-option disabled" }, px = { class: "radio-label" }, gx = { class: "config-row" }, hx = { class: "radio-group" }, yx = { class: "radio-option" }, wx = { class: "radio-label" }, _x = { class: "radio-option disabled" }, bx = { class: "radio-label" }, kx = { class: "config-row" }, $x = {
  key: 0,
  class: "loading-text"
}, Cx = {
  key: 1,
  class: "empty-remotes"
}, xx = { class: "remotes-list" }, Sx = {
  key: 0,
  class: "sync-warning"
}, Ix = { class: "warning-content" }, Ex = { class: "remotes-footer" }, Tx = { class: "summary-card" }, Px = {
  key: 0,
  class: "loading-text"
}, Mx = { class: "summary-row" }, Rx = { class: "summary-value" }, Dx = { class: "summary-row" }, Lx = { class: "summary-value" }, Nx = { class: "summary-row" }, Ax = { class: "summary-value" }, Ux = {
  key: 0,
  class: "summary-sub-row"
}, zx = { class: "summary-sub-label" }, Ox = {
  key: 1,
  class: "summary-sub-row warning"
}, Fx = { class: "summary-sub-label" }, Bx = { class: "summary-row" }, Vx = { class: "summary-value" }, Wx = { class: "summary-row" }, Gx = { class: "summary-value" }, Hx = { class: "deployment-summary" }, Kx = { class: "summary-columns" }, jx = { class: "summary-column" }, qx = { class: "pricing-row" }, Yx = { class: "pricing-value" }, Xx = { class: "pricing-row" }, Jx = { class: "pricing-value" }, Qx = { class: "pricing-row" }, Zx = { class: "pricing-value" }, e8 = { class: "pricing-row total" }, t8 = { class: "pricing-value" }, s8 = { class: "summary-column" }, o8 = { class: "spec-row" }, n8 = { class: "spec-row" }, a8 = {
  key: 0,
  class: "spec-row"
}, l8 = {
  key: 1,
  class: "spec-row spot-warning"
}, i8 = {
  key: 4,
  class: "deploy-actions"
}, r8 = { class: "progress-content" }, c8 = { class: "phase-indicator" }, u8 = { key: 0 }, d8 = { key: 1 }, m8 = { key: 2 }, f8 = {
  key: 3,
  class: "spinner"
}, v8 = { class: "phase-text" }, p8 = { class: "phase-name" }, g8 = { class: "phase-detail" }, h8 = {
  key: 0,
  class: "ready-actions"
}, y8 = { class: "console-link" }, w8 = ["href"], _8 = /* @__PURE__ */ fe({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: t }) {
    const o = t, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
      getRunPodGpuTypes: r,
      deployToRunPod: u,
      getDeploymentStatus: d,
      getStoredRunPodKey: f,
      clearRunPodKey: v,
      validateDeploy: p,
      getRemotes: w,
      getRemoteSyncStatus: g,
      fetchRemote: k,
      pushToRemote: x,
      getDataCenters: C
    } = dt(), I = b(!1), N = b(""), P = b(!1), E = b(!1), H = b(null), K = b(null), O = b(""), S = b(""), T = b(""), A = b("SECURE"), re = b("ON_DEMAND"), Y = b("my-comfyui-deploy"), q = b([]), oe = b({}), Z = b(!1), U = b(null), z = b(null), D = b(null), we = b([]), ve = b(!1), Ee = b([]), De = b(!1), Ke = b([]), Je = b(!1), _e = b(null), Se = b(!1), We = b(!1), ye = b(null), le = b(!1), Be = b(null), Ie = b(null), L = b(null), B = b(!1), se = b(null), ae = b(!1), de = b(!1), me = F(() => Ee.value.find((he) => he.id === S.value) || null), be = F(() => O.value ? Ee.value.filter((he) => he.data_center_id === O.value) : Ee.value), ke = F(() => Ke.value.filter((he) => he.available)), ne = F(() => U.value && oe.value[U.value] || null), ue = F(() => {
      if (!U.value) return null;
      const he = q.value.find((Q) => Q.name === U.value);
      return (he == null ? void 0 : he.fetch_url) || null;
    }), Me = F(() => P.value && S.value && T.value && ue.value && !We.value && !B.value), $e = (he) => {
      const Q = Ke.value.find((_t) => _t.id === T.value);
      if (!Q) return "0.00";
      if (he === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (he === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const Ge = A.value === "SECURE";
      return he === "ON_DEMAND" ? Ge ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : Ge ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, ee = F(() => {
      const he = Ke.value.find((cs) => cs.id === T.value), Q = Ee.value.find((cs) => cs.id === S.value);
      if (!he) return null;
      const Ge = A.value === "SECURE", _t = re.value === "SPOT";
      let Jt;
      _t ? Jt = Ge ? he.secureSpotPrice ?? 0 : he.communitySpotPrice ?? 0 : Jt = Ge ? he.securePrice ?? 0 : he.communityPrice ?? 0;
      const ks = Q ? Q.size_gb * 14e-5 : 0, $s = 4e-3;
      return {
        gpu: Jt,
        volume: ks,
        container: $s,
        total: Jt + ks + $s
      };
    });
    async function j() {
      await ft(), await Promise.all([Ct(), X()]);
    }
    async function X() {
      Z.value = !0;
      try {
        const he = await w();
        q.value = he.remotes, await Promise.all(
          he.remotes.map(async (Ge) => {
            const _t = await g(Ge.name);
            _t && (oe.value[Ge.name] = _t);
          })
        );
        const Q = he.remotes.find((Ge) => Ge.is_default);
        Q ? U.value = Q.name : he.remotes.length > 0 && (U.value = he.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Z.value = !1;
      }
    }
    async function R(he) {
      z.value = he;
      try {
        await k(he);
        const Q = await g(he);
        Q && (oe.value[he] = Q), o("toast", `Fetched from ${he}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        z.value = null;
      }
    }
    async function V(he) {
      D.value = he;
      try {
        await x(he, { force: !1 });
        const Q = await g(he);
        Q && (oe.value[he] = Q), o("toast", `Pushed to ${he}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        D.value = null;
      }
    }
    function ce(he) {
      U.value = he;
    }
    async function Te() {
      if (N.value) {
        E.value = !0, H.value = null;
        try {
          const he = await l(N.value, !0);
          he.status === "success" ? (P.value = !0, K.value = he.credit_balance ?? null, H.value = { type: "success", message: he.message }, await j()) : H.value = { type: "error", message: he.message };
        } catch (he) {
          H.value = {
            type: "error",
            message: he instanceof Error ? he.message : "Connection test failed"
          };
        } finally {
          E.value = !1;
        }
      }
    }
    async function qe() {
      try {
        await v(), N.value = "", P.value = !1, H.value = null, K.value = null, we.value = [], O.value = "", Ee.value = [], S.value = "", Ke.value = [], T.value = "", _e.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function ft() {
      De.value = !0, ve.value = !0;
      try {
        const he = await i();
        Ee.value = he.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const Ge of he.volumes)
          Ge.data_center_id && !Q.has(Ge.data_center_id) && Q.set(Ge.data_center_id, {
            id: Ge.data_center_id,
            name: Ge.data_center_name || Ge.data_center_id,
            available: !0
          });
        if (he.volumes.length === 0) {
          const Ge = await C();
          we.value = Ge.data_centers;
        } else
          we.value = Array.from(Q.values());
        if (Ee.value.length > 0) {
          const Ge = Ee.value[0];
          S.value = Ge.id, Ge.data_center_id && (O.value = Ge.data_center_id, await $t(Ge.data_center_id));
        } else we.value.length > 0 && (O.value = we.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        De.value = !1, ve.value = !1;
      }
    }
    async function $t(he) {
      Je.value = !0;
      try {
        const Q = await r(he);
        Ke.value = Q.gpu_types;
        const Ge = Ke.value.find((_t) => _t.available);
        Ge ? T.value = Ge.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Je.value = !1;
      }
    }
    Tt(O, async (he) => {
      if (!he || De.value) return;
      const Q = Ee.value.find((Ge) => Ge.id === S.value);
      Q && Q.data_center_id !== he && (S.value = ""), await $t(he);
    }), Tt(S, async (he) => {
      if (!he) {
        Ke.value = [], T.value = "";
        return;
      }
      if (De.value) return;
      const Q = Ee.value.find((Ge) => Ge.id === he);
      Q && Q.data_center_id !== O.value ? O.value = Q.data_center_id : Q && await $t(Q.data_center_id);
    });
    async function Ct() {
      Se.value = !0;
      try {
        _e.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Se.value = !1;
      }
    }
    async function vt() {
      if (!(!T.value || !S.value)) {
        B.value = !0, ye.value = null;
        try {
          const he = await p();
          se.value = he, he.can_export ? he.warnings.models_without_sources.length > 0 ? de.value = !0 : await bs() : ae.value = !0;
        } catch (he) {
          ye.value = {
            status: "error",
            message: he instanceof Error ? he.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          B.value = !1;
        }
      }
    }
    async function ht() {
      de.value = !1, await bs();
    }
    async function Yt() {
      try {
        const he = await p();
        se.value = he;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function bs() {
      We.value = !0;
      try {
        let he;
        if (re.value === "SPOT") {
          const Ge = Ke.value.find((_t) => _t.id === T.value);
          Ge && (he = A.value === "SECURE" ? Ge.secureSpotPrice : Ge.communitySpotPrice);
        }
        const Q = await u({
          gpu_type_id: T.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: S.value,
          cloud_type: A.value,
          pricing_type: re.value,
          spot_bid: he,
          import_source: ue.value
        });
        ye.value = Q, Q.status === "success" && Q.pod_id ? (Be.value = Q.pod_id, le.value = !0, Xt(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (he) {
        ye.value = {
          status: "error",
          message: he instanceof Error ? he.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        We.value = !1;
      }
    }
    function Xt(he) {
      As(he), L.value = window.setInterval(() => As(he), 3e3);
    }
    function js() {
      L.value && (clearInterval(L.value), L.value = null);
    }
    async function As(he) {
      try {
        const Q = await d(he);
        Ie.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (js(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function ro() {
      le.value = !1, js(), Be.value = null, Ie.value = null;
    }
    function To() {
      var he;
      (he = Ie.value) != null && he.comfyui_url && window.open(Ie.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Po(he) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[he || ""] || "Initializing...";
    }
    function Mo(he) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[he || ""] ?? 10;
    }
    return st(async () => {
      try {
        const he = await f(!0);
        he.has_key && he.key_preview && (N.value = `****${he.key_preview}`, he.valid ? (P.value = !0, K.value = he.credit_balance ?? null, H.value = { type: "success", message: "Connected to RunPod" }, await j()) : he.error && (H.value = { type: "error", message: he.error }));
      } catch {
      }
    }), Io(() => {
      js();
    }), (he, Q) => {
      var Ge, _t, Jt, ks, $s, cs;
      return a(), c(G, null, [
        s("div", z5, [
          $(ct, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              s("div", O5, [
                s("div", F5, [
                  s("div", B5, [
                    je(s("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (Ne) => N.value = Ne),
                      type: I.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: P.value
                    }, null, 8, V5), [
                      [sa, N.value]
                    ]),
                    s("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (Ne) => I.value = !I.value),
                      title: I.value ? "Hide key" : "Show key"
                    }, m(I.value ? "👁" : "👁‍🗨"), 9, W5)
                  ]),
                  P.value ? y("", !0) : (a(), M(ie, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: E.value,
                    disabled: !N.value || E.value,
                    onClick: Te
                  }, {
                    default: h(() => [...Q[16] || (Q[16] = [
                      _(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  P.value ? (a(), M(ie, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: qe
                  }, {
                    default: h(() => [...Q[17] || (Q[17] = [
                      _(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                H.value ? (a(), c("div", {
                  key: 0,
                  class: Ce(["connection-status", H.value.type])
                }, [
                  s("span", G5, m(H.value.type === "success" ? "✓" : "✕"), 1),
                  s("span", H5, m(H.value.message), 1),
                  K.value !== null ? (a(), c("span", K5, " $" + m(K.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                Q[18] || (Q[18] = s("div", { class: "api-key-help" }, [
                  s("span", { class: "help-icon" }, "i"),
                  s("span", { class: "help-text" }, [
                    _(" Get your API key at "),
                    s("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    _(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          P.value ? (a(), M(ct, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              s("div", j5, [
                s("div", q5, [
                  Q[19] || (Q[19] = s("label", { class: "config-label" }, "Region", -1)),
                  je(s("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Ne) => O.value = Ne),
                    class: "config-select",
                    disabled: ve.value
                  }, [
                    ve.value ? (a(), c("option", X5, "Loading...")) : O.value ? y("", !0) : (a(), c("option", J5, "Select a region")),
                    (a(!0), c(G, null, ge(we.value, (Ne) => (a(), c("option", {
                      key: Ne.id,
                      value: Ne.id,
                      disabled: !Ne.available
                    }, m(Ne.id) + " (" + m(Ne.name) + ")" + m(Ne.available ? "" : " [Unavailable]"), 9, Q5))), 128))
                  ], 8, Y5), [
                    [_s, O.value]
                  ])
                ]),
                s("div", Z5, [
                  Q[24] || (Q[24] = s("label", { class: "config-label" }, "Network Volume", -1)),
                  De.value ? (a(), c("div", ex, "Loading volumes...")) : be.value.length === 0 ? (a(), c(G, { key: 1 }, [
                    s("div", tx, [
                      Q[20] || (Q[20] = s("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      s("span", sx, "No volumes in " + m(O.value || "this region"), 1)
                    ]),
                    Q[21] || (Q[21] = s("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Q[22] || (Q[22] = s("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), c(G, { key: 2 }, [
                    je(s("select", {
                      "onUpdate:modelValue": Q[3] || (Q[3] = (Ne) => S.value = Ne),
                      class: "config-select"
                    }, [
                      (a(!0), c(G, null, ge(be.value, (Ne) => (a(), c("option", {
                        key: Ne.id,
                        value: Ne.id
                      }, m(Ne.name) + " (" + m(Ne.size_gb) + "GB) ", 9, ox))), 128))
                    ], 512), [
                      [_s, S.value]
                    ]),
                    Q[23] || (Q[23] = s("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                s("div", nx, [
                  Q[25] || (Q[25] = s("label", { class: "config-label" }, "GPU Type", -1)),
                  je(s("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (Ne) => T.value = Ne),
                    class: "config-select",
                    disabled: Je.value || !S.value
                  }, [
                    S.value ? Je.value ? (a(), c("option", ix, "Loading GPUs...")) : ke.value.length === 0 ? (a(), c("option", rx, "No GPUs available in this region")) : y("", !0) : (a(), c("option", lx, "Select a volume first")),
                    (a(!0), c(G, null, ge(ke.value, (Ne) => (a(), c("option", {
                      key: Ne.id,
                      value: Ne.id
                    }, m(Ne.displayName) + " (" + m(Ne.memoryInGb) + "GB) - $" + m(A.value === "SECURE" ? (Ne.securePrice ?? 0).toFixed(2) : (Ne.communityPrice ?? 0).toFixed(2)) + "/hr " + m(Ne.stockStatus ? `[${Ne.stockStatus}]` : ""), 9, cx))), 128))
                  ], 8, ax), [
                    [_s, T.value]
                  ])
                ]),
                s("div", ux, [
                  Q[26] || (Q[26] = s("label", { class: "config-label" }, "Cloud Type", -1)),
                  s("div", dx, [
                    s("label", mx, [
                      je(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (Ne) => A.value = Ne),
                        value: "SECURE"
                      }, null, 512), [
                        [es, A.value]
                      ]),
                      s("span", fx, "Secure ($" + m($e("SECURE")) + "/hr)", 1)
                    ]),
                    s("label", vx, [
                      je(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (Ne) => A.value = Ne),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [es, A.value]
                      ]),
                      s("span", px, "Community ($" + m($e("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                s("div", gx, [
                  Q[27] || (Q[27] = s("label", { class: "config-label" }, [
                    _(" Pricing "),
                    s("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  s("div", hx, [
                    s("label", yx, [
                      je(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[7] || (Q[7] = (Ne) => re.value = Ne),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [es, re.value]
                      ]),
                      s("span", wx, "On-Demand ($" + m($e("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    s("label", _x, [
                      je(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (Ne) => re.value = Ne),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [es, re.value]
                      ]),
                      s("span", bx, "Spot ($" + m($e("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                s("div", kx, [
                  Q[28] || (Q[28] = s("label", { class: "config-label" }, "Pod Name", -1)),
                  je(s("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (Ne) => Y.value = Ne),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Vt, Y.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          P.value ? (a(), M(ct, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              Z.value ? (a(), c("div", $x, "Loading remotes...")) : q.value.length === 0 ? (a(), c("div", Cx, [
                Q[30] || (Q[30] = s("div", { class: "empty-message" }, [
                  s("span", { class: "empty-icon" }, "🌐"),
                  s("span", { class: "empty-text" }, "No Git remotes configured"),
                  s("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                $(ie, {
                  variant: "primary",
                  size: "xs",
                  onClick: Q[10] || (Q[10] = (Ne) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...Q[29] || (Q[29] = [
                    _(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), c(G, { key: 2 }, [
                s("div", xx, [
                  (a(!0), c(G, null, ge(q.value, (Ne) => (a(), M(Gr, {
                    key: Ne.name,
                    remote: Ne,
                    "sync-status": oe.value[Ne.name],
                    "is-selected": U.value === Ne.name,
                    "is-fetching": z.value === Ne.name,
                    "is-pushing": D.value === Ne.name,
                    onFetch: R,
                    onPush: V,
                    onSelect: ce
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ne.value && ne.value.ahead > 0 ? (a(), c("div", Sx, [
                  Q[31] || (Q[31] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("div", Ix, [
                    s("strong", null, m(ne.value.ahead) + " unpushed commit" + m(ne.value.ahead !== 1 ? "s" : ""), 1),
                    s("p", null, "Push to '" + m(U.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  $(ie, {
                    variant: "primary",
                    size: "xs",
                    loading: D.value === U.value,
                    onClick: Q[11] || (Q[11] = (Ne) => U.value && V(U.value))
                  }, {
                    default: h(() => [
                      _(" Push to " + m(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                s("div", Ex, [
                  $(ie, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (Ne) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...Q[32] || (Q[32] = [
                      _(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          P.value ? (a(), M(ct, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              s("div", Tx, [
                Se.value ? (a(), c("div", Px, "Loading environment summary...")) : _e.value ? (a(), c(G, { key: 1 }, [
                  s("div", Mx, [
                    Q[33] || (Q[33] = s("span", { class: "summary-label" }, "ComfyUI", -1)),
                    s("span", Rx, m(_e.value.comfyui_version), 1)
                  ]),
                  s("div", Dx, [
                    Q[34] || (Q[34] = s("span", { class: "summary-label" }, "Nodes", -1)),
                    s("span", Lx, m(_e.value.node_count) + " custom nodes", 1)
                  ]),
                  s("div", Nx, [
                    Q[35] || (Q[35] = s("span", { class: "summary-label" }, "Models", -1)),
                    s("span", Ax, m(_e.value.model_count) + " models", 1)
                  ]),
                  _e.value.models_with_sources > 0 ? (a(), c("div", Ux, [
                    s("span", zx, "└─ " + m(_e.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  _e.value.models_without_sources > 0 ? (a(), c("div", Ox, [
                    s("span", Fx, "└─ " + m(_e.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  s("div", Bx, [
                    Q[36] || (Q[36] = s("span", { class: "summary-label" }, "Workflows", -1)),
                    s("span", Vx, m(_e.value.workflow_count) + " committed", 1)
                  ]),
                  s("div", Wx, [
                    Q[37] || (Q[37] = s("span", { class: "summary-label" }, "Package", -1)),
                    s("span", Gx, "~" + m(_e.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          P.value && ee.value ? (a(), M(ct, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ne, us;
              return [
                s("div", Hx, [
                  s("div", Kx, [
                    s("div", jx, [
                      Q[42] || (Q[42] = s("div", { class: "column-header" }, "Pricing", -1)),
                      s("div", qx, [
                        Q[38] || (Q[38] = s("span", { class: "pricing-label" }, "GPU:", -1)),
                        s("span", Yx, "$" + m(ee.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      s("div", Xx, [
                        Q[39] || (Q[39] = s("span", { class: "pricing-label" }, "Volume:", -1)),
                        s("span", Jx, "$" + m(ee.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      s("div", Qx, [
                        Q[40] || (Q[40] = s("span", { class: "pricing-label" }, "Disk:", -1)),
                        s("span", Zx, "$" + m(ee.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Q[43] || (Q[43] = s("div", { class: "pricing-divider" }, null, -1)),
                      s("div", e8, [
                        Q[41] || (Q[41] = s("span", { class: "pricing-label" }, "Total:", -1)),
                        s("span", t8, "~$" + m(ee.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    s("div", s8, [
                      Q[45] || (Q[45] = s("div", { class: "column-header" }, "Pod Specs", -1)),
                      s("div", o8, [
                        s("span", null, m(((Ne = Ke.value.find((te) => te.id === T.value)) == null ? void 0 : Ne.displayName) || "GPU") + " (" + m(((us = Ke.value.find((te) => te.id === T.value)) == null ? void 0 : us.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      s("div", n8, [
                        s("span", null, "Region: " + m(O.value), 1)
                      ]),
                      me.value ? (a(), c("div", a8, [
                        s("span", null, "Volume: " + m(me.value.name), 1)
                      ])) : y("", !0),
                      re.value === "SPOT" ? (a(), c("div", l8, [...Q[44] || (Q[44] = [
                        s("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          P.value ? (a(), c("div", i8, [
            $(ie, {
              variant: "primary",
              size: "md",
              loading: B.value || We.value,
              disabled: !Me.value,
              onClick: vt
            }, {
              default: h(() => [
                Q[46] || (Q[46] = s("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  s("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                _(" " + m(B.value ? "Validating..." : We.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ye.value ? (a(), M(ct, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              $(Dt, {
                status: ye.value.status === "success" ? "synced" : "broken"
              }, io({
                icon: h(() => [
                  _(m(ye.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  _(m(ye.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  _(m(ye.value.message), 1)
                ]),
                actions: h(() => [
                  $(ie, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (Ne) => ye.value = null)
                  }, {
                    default: h(() => [...Q[47] || (Q[47] = [
                      _(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ye.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    $(pt, {
                      label: "Pod ID:",
                      value: ye.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        le.value ? (a(), M(wt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ge = Ie.value) == null ? void 0 : Ge.phase) === "READY" || ((_t = Ie.value) == null ? void 0 : _t.phase) === "ERROR" || ((Jt = Ie.value) == null ? void 0 : Jt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: ro
        }, io({
          body: h(() => {
            var Ne, us, te, W, Pe, Ve, it, gt, At, ds, qs, Ys;
            return [
              s("div", r8, [
                s("div", c8, [
                  s("div", {
                    class: Ce(["phase-icon", (us = (Ne = Ie.value) == null ? void 0 : Ne.phase) == null ? void 0 : us.toLowerCase()])
                  }, [
                    ((te = Ie.value) == null ? void 0 : te.phase) === "READY" ? (a(), c("span", u8, "✓")) : ((W = Ie.value) == null ? void 0 : W.phase) === "ERROR" ? (a(), c("span", d8, "✕")) : ((Pe = Ie.value) == null ? void 0 : Pe.phase) === "STOPPED" ? (a(), c("span", m8, "○")) : (a(), c("span", f8, "⟳"))
                  ], 2),
                  s("div", v8, [
                    s("div", p8, m(Po((Ve = Ie.value) == null ? void 0 : Ve.phase)), 1),
                    s("div", g8, m(((it = Ie.value) == null ? void 0 : it.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                $(na, {
                  progress: Mo((gt = Ie.value) == null ? void 0 : gt.phase),
                  variant: ((At = Ie.value) == null ? void 0 : At.phase) === "ERROR" ? "error" : ((ds = Ie.value) == null ? void 0 : ds.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((qs = Ie.value) == null ? void 0 : qs.phase) === "READY" ? (a(), c("div", h8, [
                  $(ie, {
                    variant: "primary",
                    size: "md",
                    onClick: To
                  }, {
                    default: h(() => [...Q[48] || (Q[48] = [
                      _(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                s("div", y8, [
                  (Ys = Ie.value) != null && Ys.console_url ? (a(), c("a", {
                    key: 0,
                    href: Ie.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, w8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ks = Ie.value) == null ? void 0 : ks.phase) === "READY" || (($s = Ie.value) == null ? void 0 : $s.phase) === "ERROR" || ((cs = Ie.value) == null ? void 0 : cs.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              $(ie, {
                variant: "ghost",
                size: "xs",
                onClick: ro
              }, {
                default: h(() => [...Q[49] || (Q[49] = [
                  _(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ae.value && se.value ? (a(), M(Fr, {
          key: 1,
          issues: se.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (Ne) => ae.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        de.value && se.value ? (a(), M(Br, {
          key: 2,
          models: se.value.warnings.models_without_sources,
          onConfirm: ht,
          onCancel: Q[15] || (Q[15] = (Ne) => de.value = !1),
          onRevalidate: Yt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), b8 = /* @__PURE__ */ pe(_8, [["__scopeId", "data-v-522cd4d9"]]), k8 = { class: "worker-header" }, $8 = { class: "worker-status" }, C8 = { class: "worker-name" }, x8 = { class: "worker-actions" }, S8 = { class: "worker-details" }, I8 = { class: "detail-item" }, E8 = { class: "detail-value" }, T8 = {
  key: 0,
  class: "detail-item"
}, P8 = { class: "detail-value" }, M8 = {
  key: 1,
  class: "detail-item"
}, R8 = { class: "detail-value mode-badge" }, D8 = {
  key: 0,
  class: "worker-stats"
}, L8 = {
  key: 0,
  class: "stat-item"
}, N8 = { key: 0 }, A8 = {
  key: 1,
  class: "worker-stats offline"
}, U8 = /* @__PURE__ */ fe({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: Ce(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      s("div", k8, [
        s("div", $8, [
          s("span", {
            class: Ce(["status-dot", e.worker.status])
          }, null, 2),
          s("span", C8, m(e.worker.name), 1)
        ]),
        s("div", x8, [
          e.worker.status === "online" ? (a(), M(ie, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (n) => t.$emit("deploy", e.worker))
          }, {
            default: h(() => [...o[2] || (o[2] = [
              _(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          $(ie, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (n) => t.$emit("remove", e.worker.name))
          }, {
            default: h(() => [...o[3] || (o[3] = [
              _(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      s("div", S8, [
        s("span", I8, [
          s("span", E8, m(e.worker.host) + ":" + m(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), c("span", T8, [
          o[4] || (o[4] = s("span", { class: "detail-label" }, "•", -1)),
          s("span", P8, m(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), c("span", M8, [
          o[5] || (o[5] = s("span", { class: "detail-label" }, "•", -1)),
          s("span", R8, m(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), c("div", D8, [
        o[6] || (o[6] = s("span", { class: "stat-item" }, [
          _(" Status: "),
          s("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), c("span", L8, [
          _(" • " + m(e.worker.instance_count) + " instance" + m(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), c("span", N8, "(" + m(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), c("div", A8, [...o[7] || (o[7] = [
        s("span", { class: "stat-item" }, [
          _(" Status: "),
          s("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), z8 = /* @__PURE__ */ pe(U8, [["__scopeId", "data-v-b1be7134"]]), O8 = { class: "add-worker-content" }, F8 = { class: "manual-form" }, B8 = { class: "form-row" }, V8 = { class: "form-row-inline" }, W8 = { class: "form-field flex-2" }, G8 = { class: "form-field flex-1" }, H8 = { class: "form-row" }, K8 = { class: "api-key-wrapper" }, j8 = ["type"], q8 = { class: "result-icon" }, Y8 = { class: "result-content" }, X8 = { class: "result-message" }, J8 = {
  key: 0,
  class: "result-detail"
}, Q8 = { class: "modal-actions" }, Z8 = /* @__PURE__ */ fe({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: t }) {
    const o = t, { testWorkerConnection: n } = dt(), l = Ks({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = b(!1), r = b(!1), u = b(!1), d = b(null), f = F(() => l.host && l.port && l.apiKey), v = F(() => l.name && l.host && l.port && l.apiKey);
    async function p() {
      if (f.value) {
        r.value = !0, d.value = null;
        try {
          const g = await n({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          g.status === "success" ? (d.value = {
            type: "success",
            message: g.message,
            gpu_info: g.gpu_info
          }, !l.name && g.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : d.value = {
            type: "error",
            message: g.message
          };
        } catch (g) {
          d.value = {
            type: "error",
            message: g instanceof Error ? g.message : "Connection test failed"
          };
        } finally {
          r.value = !1;
        }
      }
    }
    function w() {
      v.value && (u.value = !0, o("add", {
        name: l.name,
        host: l.host,
        port: l.port,
        api_key: l.apiKey
      }));
    }
    return (g, k) => (a(), M(wt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: k[5] || (k[5] = (x) => g.$emit("close"))
    }, {
      body: h(() => [
        s("div", O8, [
          s("div", F8, [
            s("div", B8, [
              k[6] || (k[6] = s("label", { class: "form-label" }, "Worker Name", -1)),
              je(s("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Vt, l.name]
              ])
            ]),
            s("div", V8, [
              s("div", W8, [
                k[7] || (k[7] = s("label", { class: "form-label" }, "Host", -1)),
                je(s("input", {
                  "onUpdate:modelValue": k[1] || (k[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Vt, l.host]
                ])
              ]),
              s("div", G8, [
                k[8] || (k[8] = s("label", { class: "form-label" }, "Port", -1)),
                je(s("input", {
                  "onUpdate:modelValue": k[2] || (k[2] = (x) => l.port = x),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Vt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            s("div", H8, [
              k[9] || (k[9] = s("label", { class: "form-label" }, "API Key", -1)),
              s("div", K8, [
                je(s("input", {
                  "onUpdate:modelValue": k[3] || (k[3] = (x) => l.apiKey = x),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, j8), [
                  [sa, l.apiKey]
                ]),
                s("button", {
                  class: "toggle-visibility",
                  onClick: k[4] || (k[4] = (x) => i.value = !i.value),
                  type: "button"
                }, m(i.value ? "👁" : "👁‍🗨"), 1)
              ]),
              k[10] || (k[10] = s("div", { class: "form-help" }, [
                s("span", { class: "help-icon" }, "ⓘ"),
                _(" Run "),
                s("code", null, "cg-deploy worker setup"),
                _(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), c("div", {
              key: 0,
              class: Ce(["test-result", d.value.type])
            }, [
              s("span", q8, m(d.value.type === "success" ? "✓" : "✕"), 1),
              s("div", Y8, [
                s("span", X8, m(d.value.message), 1),
                d.value.gpu_info ? (a(), c("span", J8, "GPU: " + m(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        s("div", Q8, [
          $(ie, {
            variant: "ghost",
            size: "sm",
            loading: r.value,
            disabled: !f.value || r.value,
            onClick: p
          }, {
            default: h(() => [...k[11] || (k[11] = [
              _(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          $(ie, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: w
          }, {
            default: h(() => [...k[12] || (k[12] = [
              _(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), e4 = /* @__PURE__ */ pe(Z8, [["__scopeId", "data-v-07a00732"]]), t4 = { class: "discovered-content" }, s4 = {
  key: 0,
  class: "workers-list"
}, o4 = { class: "worker-info" }, n4 = { class: "worker-name" }, a4 = { class: "worker-address" }, l4 = {
  key: 0,
  class: "worker-gpu"
}, i4 = {
  key: 1,
  class: "empty-state"
}, r4 = {
  key: 2,
  class: "api-key-section"
}, c4 = { class: "selected-worker" }, u4 = { class: "selected-name" }, d4 = { class: "selected-address" }, m4 = { class: "form-row" }, f4 = { class: "api-key-wrapper" }, v4 = ["type"], p4 = { class: "result-icon" }, g4 = { class: "result-message" }, h4 = { class: "modal-actions" }, y4 = /* @__PURE__ */ fe({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: t }) {
    const o = t, { testWorkerConnection: n } = dt(), l = b(null), i = b(""), r = b(!1), u = b(!1), d = b(null), f = b(null);
    async function v(w) {
      var g;
      l.value = w, i.value = "", f.value = null, await ln(), (g = d.value) == null || g.focus();
    }
    async function p() {
      if (!(!l.value || !i.value)) {
        u.value = !0, f.value = null;
        try {
          const w = await n({
            host: l.value.host,
            port: l.value.port,
            api_key: i.value
          });
          w.status === "success" ? o("add", {
            name: l.value.name,
            host: l.value.host,
            port: l.value.port,
            api_key: i.value
          }) : f.value = {
            type: "error",
            message: w.message
          };
        } catch (w) {
          f.value = {
            type: "error",
            message: w instanceof Error ? w.message : "Connection failed"
          };
        } finally {
          u.value = !1;
        }
      }
    }
    return (w, g) => (a(), M(wt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: g[3] || (g[3] = (k) => w.$emit("close"))
    }, {
      body: h(() => [
        s("div", t4, [
          e.workers.length > 0 ? (a(), c("div", s4, [
            (a(!0), c(G, null, ge(e.workers, (k) => (a(), c("div", {
              key: `${k.host}:${k.port}`,
              class: "worker-item"
            }, [
              s("div", o4, [
                s("span", n4, m(k.name), 1),
                s("span", a4, m(k.host) + ":" + m(k.port), 1),
                k.gpu_info ? (a(), c("span", l4, m(k.gpu_info), 1)) : y("", !0)
              ]),
              $(ie, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(k)
              }, {
                default: h(() => [...g[4] || (g[4] = [
                  _(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), c("div", i4, [...g[5] || (g[5] = [
            s("span", { class: "empty-icon" }, "📡", -1),
            s("span", { class: "empty-text" }, "No workers found on the network", -1),
            s("span", { class: "empty-help" }, [
              _("Make sure workers are running with "),
              s("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), c("div", r4, [
            s("div", c4, [
              g[6] || (g[6] = s("span", { class: "selected-label" }, "Adding:", -1)),
              s("span", u4, m(l.value.name), 1),
              s("span", d4, "(" + m(l.value.host) + ":" + m(l.value.port) + ")", 1)
            ]),
            s("div", m4, [
              g[7] || (g[7] = s("label", { class: "form-label" }, "API Key", -1)),
              s("div", f4, [
                je(s("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": g[0] || (g[0] = (k) => i.value = k),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: ss(p, ["enter"])
                }, null, 40, v4), [
                  [sa, i.value]
                ]),
                s("button", {
                  class: "toggle-visibility",
                  onClick: g[1] || (g[1] = (k) => r.value = !r.value),
                  type: "button"
                }, m(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              g[8] || (g[8] = s("div", { class: "form-help" }, [
                s("span", { class: "help-icon" }, "ⓘ"),
                _(" Run "),
                s("code", null, "cg-deploy worker setup"),
                _(" on the worker to get the key ")
              ], -1))
            ]),
            f.value ? (a(), c("div", {
              key: 0,
              class: Ce(["test-result", f.value.type])
            }, [
              s("span", p4, m(f.value.type === "success" ? "✓" : "✕"), 1),
              s("span", g4, m(f.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        s("div", h4, [
          l.value ? (a(), M(ie, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: g[2] || (g[2] = (k) => {
              l.value = null, i.value = "", f.value = null;
            })
          }, {
            default: h(() => [...g[9] || (g[9] = [
              _(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), M(ie, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !i.value || u.value,
            onClick: p
          }, {
            default: h(() => [...g[10] || (g[10] = [
              _(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), w4 = /* @__PURE__ */ pe(y4, [["__scopeId", "data-v-5a3e40a4"]]), _4 = { class: "deploy-content" }, b4 = { class: "section" }, k4 = {
  key: 0,
  class: "loading-text"
}, $4 = {
  key: 1,
  class: "empty-remotes"
}, C4 = {
  key: 2,
  class: "remotes-list"
}, x4 = { class: "section" }, S4 = { class: "mode-options" }, I4 = { class: "mode-option" }, E4 = ["disabled"], T4 = { class: "mode-option" }, P4 = { class: "section" }, M4 = {
  key: 0,
  class: "section"
}, R4 = { class: "summary-row" }, D4 = {
  key: 1,
  class: "sync-warning"
}, L4 = { class: "warning-content" }, N4 = { class: "modal-actions" }, A4 = /* @__PURE__ */ fe({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getRemotes: l,
      getRemoteSyncStatus: i,
      fetchRemote: r,
      pushToRemote: u,
      getDeploySummary: d,
      deployToWorker: f
    } = dt(), v = b([]), p = b({}), w = b(!1), g = b(null), k = b(null), x = b(null), C = b(o.worker.mode || "native"), I = b(""), N = b(null), P = b(!1), E = F(() => g.value && p.value[g.value] || null), H = F(() => {
      if (!g.value) return null;
      const q = v.value.find((oe) => oe.name === g.value);
      return (q == null ? void 0 : q.fetch_url) || null;
    }), K = F(() => H.value && !P.value);
    async function O() {
      w.value = !0;
      try {
        const q = await l();
        v.value = q.remotes, await Promise.all(
          q.remotes.map(async (Z) => {
            const U = await i(Z.name);
            U && (p.value[Z.name] = U);
          })
        );
        const oe = q.remotes.find((Z) => Z.is_default);
        oe ? g.value = oe.name : q.remotes.length > 0 && (g.value = q.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function S() {
      try {
        N.value = await d();
      } catch {
      }
    }
    async function T(q) {
      k.value = q;
      try {
        await r(q);
        const oe = await i(q);
        oe && (p.value[q] = oe), n("toast", `Fetched from ${q}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        k.value = null;
      }
    }
    async function A(q) {
      x.value = q;
      try {
        await u(q, { force: !1 });
        const oe = await i(q);
        oe && (p.value[q] = oe), n("toast", `Pushed to ${q}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function re(q) {
      g.value = q;
    }
    async function Y() {
      if (H.value) {
        P.value = !0;
        try {
          const q = await f(o.worker.name, {
            import_source: H.value,
            mode: C.value,
            name: I.value || void 0
          });
          q.id ? (n("toast", `Deployment started: ${q.name || q.id}`, "success"), n("deployed")) : q.status === "error" ? n("toast", q.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (q) {
          n("toast", q instanceof Error ? q.message : "Deployment failed", "error");
        } finally {
          P.value = !1;
        }
      }
    }
    return st(() => {
      O(), S();
    }), (q, oe) => (a(), M(wt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: oe[5] || (oe[5] = (Z) => q.$emit("close"))
    }, {
      body: h(() => [
        s("div", _4, [
          s("div", b4, [
            oe[7] || (oe[7] = s("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), c("div", k4, "Loading remotes...")) : v.value.length === 0 ? (a(), c("div", $4, [...oe[6] || (oe[6] = [
              s("span", { class: "empty-icon" }, "🌐", -1),
              s("span", { class: "empty-text" }, "No Git remotes configured", -1),
              s("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), c("div", C4, [
              (a(!0), c(G, null, ge(v.value, (Z) => (a(), M(Gr, {
                key: Z.name,
                remote: Z,
                "sync-status": p.value[Z.name],
                "is-selected": g.value === Z.name,
                "is-fetching": k.value === Z.name,
                "is-pushing": x.value === Z.name,
                onFetch: T,
                onPush: A,
                onSelect: re
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          s("div", x4, [
            oe[10] || (oe[10] = s("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            s("div", S4, [
              s("label", I4, [
                je(s("input", {
                  type: "radio",
                  "onUpdate:modelValue": oe[0] || (oe[0] = (Z) => C.value = Z),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, E4), [
                  [es, C.value]
                ]),
                oe[8] || (oe[8] = s("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              s("label", T4, [
                je(s("input", {
                  type: "radio",
                  "onUpdate:modelValue": oe[1] || (oe[1] = (Z) => C.value = Z),
                  value: "native"
                }, null, 512), [
                  [es, C.value]
                ]),
                oe[9] || (oe[9] = s("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          s("div", P4, [
            oe[11] || (oe[11] = s("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            je(s("input", {
              "onUpdate:modelValue": oe[2] || (oe[2] = (Z) => I.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Vt, I.value]
            ])
          ]),
          N.value ? (a(), c("div", M4, [
            oe[12] || (oe[12] = s("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            s("div", R4, " ComfyUI: " + m(N.value.comfyui_version) + " • " + m(N.value.node_count) + " nodes • " + m(N.value.model_count) + " models • " + m(N.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          E.value && E.value.ahead > 0 ? (a(), c("div", D4, [
            oe[14] || (oe[14] = s("span", { class: "warning-icon" }, "⚠", -1)),
            s("div", L4, [
              s("strong", null, m(E.value.ahead) + " unpushed commit" + m(E.value.ahead !== 1 ? "s" : ""), 1),
              s("p", null, "Push to '" + m(g.value) + "' before deploying to include your latest changes.", 1)
            ]),
            $(ie, {
              variant: "primary",
              size: "xs",
              loading: x.value === g.value,
              onClick: oe[3] || (oe[3] = (Z) => g.value && A(g.value))
            }, {
              default: h(() => [...oe[13] || (oe[13] = [
                _(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        s("div", N4, [
          $(ie, {
            variant: "ghost",
            size: "sm",
            onClick: oe[4] || (oe[4] = (Z) => q.$emit("close"))
          }, {
            default: h(() => [...oe[15] || (oe[15] = [
              _(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(ie, {
            variant: "primary",
            size: "sm",
            loading: P.value,
            disabled: !K.value || P.value,
            onClick: Y
          }, {
            default: h(() => [...oe[16] || (oe[16] = [
              _(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), U4 = /* @__PURE__ */ pe(A4, [["__scopeId", "data-v-c12720d3"]]), z4 = { class: "custom-tab" }, O4 = { class: "section-header" }, F4 = { class: "section-actions" }, B4 = { class: "workers-content" }, V4 = {
  key: 0,
  class: "loading-state"
}, W4 = {
  key: 1,
  class: "empty-state"
}, G4 = {
  key: 2,
  class: "workers-list"
}, H4 = { class: "scan-icon" }, K4 = { class: "scan-message" }, j4 = /* @__PURE__ */ fe({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: t }) {
    const o = t, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: r
    } = dt(), u = b([]), d = b([]), f = b(!1), v = b(!1), p = b(null), w = b(!1), g = b(!1), k = b(null), x = b(null);
    async function C() {
      f.value = !0;
      try {
        const O = await n();
        u.value = O.workers;
      } catch (O) {
        o("toast", O instanceof Error ? O.message : "Failed to load workers", "error");
      } finally {
        f.value = !1;
      }
    }
    async function I() {
      v.value = !0, x.value = null;
      try {
        const O = await r(), S = O.discovered.filter(
          (T) => !u.value.some((A) => A.host === T.host && A.port === T.port)
        );
        d.value = S, S.length > 0 ? g.value = !0 : O.discovered.length > 0 ? x.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : x.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (O) {
        o("toast", O instanceof Error ? O.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function N(O) {
      try {
        await l(O), o("toast", `Worker '${O.name}' added`, "success"), w.value = !1, await C();
      } catch (S) {
        o("toast", S instanceof Error ? S.message : "Failed to add worker", "error");
      }
    }
    async function P(O) {
      try {
        await l(O), o("toast", `Worker '${O.name}' added`, "success"), g.value = !1, await C();
      } catch (S) {
        o("toast", S instanceof Error ? S.message : "Failed to add worker", "error");
      }
    }
    async function E(O) {
      p.value = O;
      try {
        await i(O), o("toast", `Worker '${O}' removed`, "success"), await C();
      } catch (S) {
        o("toast", S instanceof Error ? S.message : "Failed to remove worker", "error");
      } finally {
        p.value = null;
      }
    }
    function H(O) {
      k.value = O;
    }
    function K() {
      k.value = null, o("deployed");
    }
    return st(() => {
      C();
    }), (O, S) => (a(), c("div", z4, [
      s("div", O4, [
        S[8] || (S[8] = s("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        s("div", F4, [
          $(ie, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: I
          }, {
            default: h(() => [...S[6] || (S[6] = [
              _(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          $(ie, {
            variant: "secondary",
            size: "xs",
            onClick: S[0] || (S[0] = (T) => w.value = !0)
          }, {
            default: h(() => [...S[7] || (S[7] = [
              _(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("div", B4, [
        f.value && u.value.length === 0 ? (a(), c("div", V4, [...S[9] || (S[9] = [
          s("span", { class: "spinner" }, null, -1),
          _(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), c("div", W4, [...S[10] || (S[10] = [
          s("div", { class: "empty-card" }, [
            s("span", { class: "empty-text" }, "No workers registered yet"),
            s("p", { class: "empty-help" }, " To add a custom worker: "),
            s("ol", { class: "setup-steps" }, [
              s("li", null, [
                _("On your GPU machine, run:"),
                s("br"),
                s("code", null, "cg-deploy worker setup"),
                s("br"),
                s("code", null, "cg-deploy worker up --broadcast")
              ]),
              s("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (a(), c("div", G4, [
          (a(!0), c(G, null, ge(u.value, (T) => (a(), M(z8, {
            key: T.name,
            worker: T,
            "is-action-loading": p.value === T.name,
            onDeploy: H,
            onRemove: E
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      x.value ? (a(), c("div", {
        key: 0,
        class: Ce(["scan-result", x.value.type])
      }, [
        s("span", H4, m(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        s("span", K4, m(x.value.message), 1),
        s("button", {
          class: "dismiss-btn",
          onClick: S[1] || (S[1] = (T) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      g.value ? (a(), M(w4, {
        key: 1,
        workers: d.value,
        onClose: S[2] || (S[2] = (T) => g.value = !1),
        onAdd: P
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), M(e4, {
        key: 2,
        onClose: S[3] || (S[3] = (T) => w.value = !1),
        onAdd: N
      })) : y("", !0),
      k.value ? (a(), M(U4, {
        key: 3,
        worker: k.value,
        onClose: S[4] || (S[4] = (T) => k.value = null),
        onToast: S[5] || (S[5] = (T, A) => o("toast", T, A)),
        onDeployed: K
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), q4 = /* @__PURE__ */ pe(j4, [["__scopeId", "data-v-1637dead"]]), ka = "ComfyGit.Deploy.GitHubPAT";
function Hr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function Y4(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function X4() {
  function e() {
    try {
      return localStorage.getItem(ka);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(ka, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ka);
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
    isRemoteSsh: Hr,
    isRemoteHttps: Y4
  };
}
const J4 = { class: "settings-content" }, Q4 = { class: "settings-section" }, Z4 = {
  key: 0,
  class: "ssh-warning"
}, eS = { class: "form-row" }, tS = { class: "token-wrapper" }, sS = ["type"], oS = { class: "result-icon" }, nS = { class: "result-message" }, aS = { class: "token-actions" }, lS = /* @__PURE__ */ fe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const o = t, { getToken: n, setToken: l, clearToken: i, hasToken: r } = X4(), { getRemotes: u, testGitAuth: d } = dt(), f = b(""), v = b(!1), p = b(!1), w = b(null), g = b(!1), k = F(() => r());
    st(async () => {
      var P;
      const N = n();
      N && (f.value = N);
      try {
        const H = (P = (await u()).remotes) == null ? void 0 : P.find((K) => K.name === "origin");
        H && Hr(H.url) && (g.value = !0);
      } catch {
      }
    });
    async function x() {
      if (f.value) {
        p.value = !0, w.value = null;
        try {
          const N = await d(f.value);
          w.value = {
            type: N.status === "success" ? "success" : "error",
            message: N.message
          };
        } catch (N) {
          w.value = {
            type: "error",
            message: N instanceof Error ? N.message : "Connection test failed"
          };
        } finally {
          p.value = !1;
        }
      }
    }
    function C() {
      f.value && (l(f.value), o("saved"), o("close"));
    }
    function I() {
      i(), f.value = "", w.value = null;
    }
    return (N, P) => (a(), M(wt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: P[2] || (P[2] = (E) => N.$emit("close"))
    }, {
      body: h(() => [
        s("div", J4, [
          s("div", Q4, [
            P[8] || (P[8] = s("div", { class: "section-header" }, [
              s("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            P[9] || (P[9] = s("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            g.value ? (a(), c("div", Z4, [...P[3] || (P[3] = [
              s("span", { class: "warning-icon" }, "!", -1),
              s("div", { class: "warning-content" }, [
                s("strong", null, "SSH remote detected"),
                s("p", null, [
                  _("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  s("code", null, "git@github.com:..."),
                  _(" to "),
                  s("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : y("", !0),
            s("div", eS, [
              P[4] || (P[4] = s("label", { class: "form-label" }, "Personal Access Token", -1)),
              s("div", tS, [
                je(s("input", {
                  "onUpdate:modelValue": P[0] || (P[0] = (E) => f.value = E),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, sS), [
                  [sa, f.value]
                ]),
                s("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: P[1] || (P[1] = (E) => v.value = !v.value)
                }, m(v.value ? "Hide" : "Show"), 1)
              ]),
              P[5] || (P[5] = s("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), c("div", {
              key: 1,
              class: Ce(["test-result", w.value.type])
            }, [
              s("span", oS, m(w.value.type === "success" ? "✓" : "✕"), 1),
              s("span", nS, m(w.value.message), 1)
            ], 2)) : y("", !0),
            s("div", aS, [
              $(ie, {
                variant: "ghost",
                size: "sm",
                loading: p.value,
                disabled: !f.value || p.value,
                onClick: x
              }, {
                default: h(() => [...P[6] || (P[6] = [
                  _(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              k.value ? (a(), M(ie, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: I
              }, {
                default: h(() => [...P[7] || (P[7] = [
                  _(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        $(ie, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: C
        }, {
          default: h(() => [...P[10] || (P[10] = [
            _(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), iS = /* @__PURE__ */ pe(lS, [["__scopeId", "data-v-b21588ad"]]), rS = /* @__PURE__ */ fe({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: t }) {
    const o = t, {
      instances: n,
      isLoading: l,
      liveInstanceCount: i,
      refreshInstances: r,
      stopInstance: u,
      startInstance: d,
      terminateInstance: f,
      startPolling: v,
      stopPolling: p
    } = Wr(), w = b(!1), g = b(!1), k = b("instances"), x = b(null), C = b(null), I = F(() => [
      {
        id: "instances",
        label: "Instances",
        badge: i.value > 0 ? String(i.value) : void 0
      },
      {
        id: "runpod",
        label: "RunPod"
      },
      {
        id: "custom",
        label: "Custom"
      }
    ]);
    async function N(O) {
      x.value = O.id;
      try {
        await u(O), o("toast", "Instance stopped", "success");
      } catch (S) {
        o("toast", S instanceof Error ? S.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function P(O) {
      x.value = O.id;
      try {
        await d(O), o("toast", "Instance starting...", "success");
      } catch (S) {
        o("toast", S instanceof Error ? S.message : "Failed to start instance", "error");
      } finally {
        x.value = null;
      }
    }
    function E(O) {
      C.value = O;
    }
    async function H() {
      const O = C.value;
      if (O) {
        C.value = null, x.value = O.id;
        try {
          await f(O), o("toast", "Instance terminated", "success");
        } catch (S) {
          o("toast", S instanceof Error ? S.message : "Failed to terminate instance", "error");
        } finally {
          x.value = null;
        }
      }
    }
    async function K() {
      await r(), k.value = "instances";
    }
    return st(() => {
      r(), v();
    }), Io(() => {
      p();
    }), (O, S) => (a(), c(G, null, [
      $(Lt, null, {
        header: h(() => [
          $(Nt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: S[1] || (S[1] = (T) => w.value = !0)
          }, {
            actions: h(() => [
              $(ie, {
                variant: "ghost",
                size: "xs",
                onClick: S[0] || (S[0] = (T) => g.value = !0)
              }, {
                default: h(() => [...S[10] || (S[10] = [
                  _(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          $(Nr, {
            modelValue: k.value,
            "onUpdate:modelValue": S[2] || (S[2] = (T) => k.value = T),
            tabs: I.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          k.value === "instances" ? (a(), M(C5, {
            key: 0,
            instances: Ae(n),
            "is-loading": Ae(l),
            "action-loading-id": x.value,
            onRefresh: Ae(r),
            onStop: N,
            onStart: P,
            onTerminate: E
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          k.value === "runpod" ? (a(), M(b8, {
            key: 1,
            onToast: S[3] || (S[3] = (T, A) => o("toast", T, A)),
            onNavigate: S[4] || (S[4] = (T) => o("navigate", T)),
            onDeployed: K
          })) : y("", !0),
          k.value === "custom" ? (a(), M(q4, {
            key: 2,
            onToast: S[5] || (S[5] = (T, A) => o("toast", T, A)),
            onDeployed: K
          })) : y("", !0)
        ]),
        _: 1
      }),
      C.value ? (a(), M(rl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${C.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: H,
        onCancel: S[6] || (S[6] = (T) => C.value = null)
      }, null, 8, ["message"])) : y("", !0),
      $(rs, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: S[7] || (S[7] = (T) => w.value = !1)
      }, {
        content: h(() => [...S[11] || (S[11] = [
          s("div", { class: "deploy-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "What is Deploy?"),
              s("p", null, "Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).")
            ]),
            s("div", { class: "info-section" }, [
              s("strong", null, "What gets deployed:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  _(" - All committed workflows")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  _(" - Installed automatically")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  _(" - Downloaded from sources (when available)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  _(" - Environment settings")
                ])
              ])
            ]),
            s("div", { class: "info-section" }, [
              s("strong", null, "Cost Information:"),
              s("p", null, "You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), M(iS, {
        key: 1,
        onClose: S[8] || (S[8] = (T) => g.value = !1),
        onSaved: S[9] || (S[9] = (T) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), cS = /* @__PURE__ */ pe(rS, [["__scopeId", "data-v-d4e32a10"]]), uS = { class: "header-info" }, dS = { class: "commit-hash" }, mS = {
  key: 0,
  class: "commit-refs"
}, fS = { class: "commit-message" }, vS = { class: "commit-date" }, pS = {
  key: 0,
  class: "loading"
}, gS = {
  key: 1,
  class: "changes-section"
}, hS = { class: "stats-row" }, yS = { class: "stat" }, wS = { class: "stat insertions" }, _S = { class: "stat deletions" }, bS = {
  key: 0,
  class: "change-group"
}, kS = {
  key: 1,
  class: "change-group"
}, $S = {
  key: 0,
  class: "version"
}, CS = {
  key: 2,
  class: "change-group"
}, xS = { class: "change-item" }, SS = /* @__PURE__ */ fe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = dt(), n = b(null), l = b(!0), i = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), r = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return st(async () => {
      try {
        n.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), M(wt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (f) => u.$emit("close"))
    }, {
      header: h(() => {
        var f, v, p, w;
        return [
          s("div", uS, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", dS, m(((f = n.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), c("span", mS, [
              (a(!0), c(G, null, ge(n.value.refs, (g) => (a(), c("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          $(Re, {
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
          s("div", fS, m(((f = n.value) == null ? void 0 : f.message) || e.commit.message), 1),
          s("div", vS, m(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), c("div", pS, "Loading details...")) : n.value ? (a(), c("div", gS, [
            s("div", hS, [
              s("span", yS, m(n.value.stats.files_changed) + " files", 1),
              s("span", wS, "+" + m(n.value.stats.insertions), 1),
              s("span", _S, "-" + m(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), c("div", bS, [
              $(Ko, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  _("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(G, null, ge(n.value.changes.workflows.added, (p) => (a(), c("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (a(!0), c(G, null, ge(n.value.changes.workflows.modified, (p) => (a(), c("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (a(!0), c(G, null, ge(n.value.changes.workflows.deleted, (p) => (a(), c("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            r.value ? (a(), c("div", kS, [
              $(Ko, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  _("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(G, null, ge(n.value.changes.nodes.added, (p) => (a(), c("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (a(), c("span", $S, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), c(G, null, ge(n.value.changes.nodes.removed, (p) => (a(), c("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), c("div", CS, [
              $(Ko, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  _("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", xS, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        $(Re, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            _(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "primary",
          onClick: d[2] || (d[2] = (f) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            _(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), IS = /* @__PURE__ */ pe(SS, [["__scopeId", "data-v-d256ff6d"]]), ES = { class: "base-textarea-wrapper" }, TS = ["value", "rows", "placeholder", "disabled", "maxlength"], PS = {
  key: 0,
  class: "base-textarea-count"
}, MS = /* @__PURE__ */ fe({
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
    function l(i) {
      i.shiftKey || i.ctrlKey || i.metaKey || o.submitOnEnter && (i.preventDefault(), n("submit"));
    }
    return (i, r) => (a(), c("div", ES, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: r[0] || (r[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          r[1] || (r[1] = ss(ut((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          r[2] || (r[2] = ss(ut((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ss(l, ["enter"])
        ]
      }, null, 40, TS),
      e.showCharCount && e.maxLength ? (a(), c("div", PS, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ai = /* @__PURE__ */ pe(MS, [["__scopeId", "data-v-c6d16c93"]]), RS = ["checked", "disabled"], DS = { class: "base-checkbox-box" }, LS = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, NS = {
  key: 0,
  class: "base-checkbox-label"
}, AS = /* @__PURE__ */ fe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), c("label", {
      class: Ce(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked))
      }, null, 40, RS),
      s("span", DS, [
        e.modelValue ? (a(), c("svg", LS, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (a(), c("span", NS, [
        He(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), li = /* @__PURE__ */ pe(AS, [["__scopeId", "data-v-bf17c831"]]), US = { class: "popover-header" }, zS = { class: "popover-body" }, OS = {
  key: 0,
  class: "changes-summary"
}, FS = {
  key: 0,
  class: "change-item"
}, BS = {
  key: 1,
  class: "change-item"
}, VS = {
  key: 2,
  class: "change-item"
}, WS = {
  key: 3,
  class: "change-item"
}, GS = {
  key: 4,
  class: "change-item"
}, HS = {
  key: 5,
  class: "change-item"
}, KS = {
  key: 1,
  class: "no-changes"
}, jS = {
  key: 2,
  class: "loading"
}, qS = {
  key: 3,
  class: "issues-error"
}, YS = { class: "error-header" }, XS = { class: "error-title" }, JS = { class: "issues-list" }, QS = { class: "message-section" }, ZS = { class: "popover-footer" }, e6 = {
  key: 1,
  class: "commit-popover"
}, t6 = { class: "popover-header" }, s6 = { class: "popover-body" }, o6 = {
  key: 0,
  class: "changes-summary"
}, n6 = {
  key: 0,
  class: "change-item"
}, a6 = {
  key: 1,
  class: "change-item"
}, l6 = {
  key: 2,
  class: "change-item"
}, i6 = {
  key: 3,
  class: "change-item"
}, r6 = {
  key: 4,
  class: "change-item"
}, c6 = {
  key: 5,
  class: "change-item"
}, u6 = {
  key: 1,
  class: "no-changes"
}, d6 = {
  key: 2,
  class: "loading"
}, m6 = {
  key: 3,
  class: "issues-error"
}, f6 = { class: "error-header" }, v6 = { class: "error-title" }, p6 = { class: "issues-list" }, g6 = { class: "message-section" }, h6 = { class: "popover-footer" }, y6 = /* @__PURE__ */ fe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = dt(), i = b(""), r = b(!1), u = b(!1), d = F(() => {
      if (!o.status) return !1;
      const k = o.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || o.status.has_changes;
    }), f = F(() => {
      if (!o.status) return !1;
      const k = o.status.workflows, x = o.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = F(() => {
      var k;
      return (k = o.status) != null && k.workflows.analyzed ? o.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), p = F(() => v.value.length > 0), w = F(() => p.value && !u.value);
    async function g() {
      var k, x, C;
      if (!(p.value && !u.value) && !(!d.value || !i.value.trim() || r.value)) {
        r.value = !0;
        try {
          const I = await l(i.value.trim(), u.value);
          if (I.status === "success") {
            const N = `Committed: ${((k = I.summary) == null ? void 0 : k.new) || 0} new, ${((x = I.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = I.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            n("committed", { success: !0, message: N });
          } else I.status === "no_changes" ? n("committed", { success: !1, message: "No changes to commit" }) : I.status === "blocked" ? n("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : n("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          n("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          r.value = !1;
        }
      }
    }
    return (k, x) => e.asModal ? (a(), M(kt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = ut(() => {
          }, ["stop"]))
        }, [
          s("div", US, [
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
          s("div", zS, [
            e.status && d.value ? (a(), c("div", OS, [
              e.status.workflows.new.length ? (a(), c("div", FS, [
                x[12] || (x[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), c("div", BS, [
                x[13] || (x[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), c("div", VS, [
                x[14] || (x[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), c("div", WS, [
                x[15] || (x[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), c("div", GS, [
                x[16] || (x[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (a(), c("div", HS, [...x[17] || (x[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), c("div", KS, " No changes to commit ")) : (a(), c("div", jS, " Loading... ")),
            p.value ? (a(), c("div", qS, [
              s("div", YS, [
                x[18] || (x[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", XS, m(v.value.length) + " workflow(s) can't run", 1)
              ]),
              s("div", JS, [
                (a(!0), c(G, null, ge(v.value, (C) => (a(), c("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(C.name), 1),
                  _(": " + m(C.issue_summary), 1)
                ]))), 128))
              ]),
              $(li, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => u.value = C),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...x[19] || (x[19] = [
                  _(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", QS, [
              $(ai, {
                modelValue: i.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => i.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || r.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", ZS, [
            $(Re, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => n("close"))
            }, {
              default: h(() => [...x[20] || (x[20] = [
                _(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || r.value || w.value,
              loading: r.value,
              onClick: g
            }, {
              default: h(() => [
                _(m(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), c("div", e6, [
      s("div", t6, [
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
      s("div", s6, [
        e.status && d.value ? (a(), c("div", o6, [
          e.status.workflows.new.length ? (a(), c("div", n6, [
            x[23] || (x[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), c("div", a6, [
            x[24] || (x[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), c("div", l6, [
            x[25] || (x[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), c("div", i6, [
            x[26] || (x[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), c("div", r6, [
            x[27] || (x[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (a(), c("div", c6, [...x[28] || (x[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), c("div", u6, " No changes to commit ")) : (a(), c("div", d6, " Loading... ")),
        p.value ? (a(), c("div", m6, [
          s("div", f6, [
            x[29] || (x[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", v6, m(v.value.length) + " workflow(s) can't run", 1)
          ]),
          s("div", p6, [
            (a(!0), c(G, null, ge(v.value, (C) => (a(), c("div", {
              key: C.name,
              class: "issue-item"
            }, [
              s("strong", null, m(C.name), 1),
              _(": " + m(C.issue_summary), 1)
            ]))), 128))
          ]),
          $(li, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => u.value = C),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...x[30] || (x[30] = [
              _(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", g6, [
          $(ai, {
            modelValue: i.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => i.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || r.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", h6, [
        $(Re, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => n("close"))
        }, {
          default: h(() => [...x[31] || (x[31] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || r.value || w.value,
          loading: r.value,
          onClick: g
        }, {
          default: h(() => [
            _(m(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Kr = /* @__PURE__ */ pe(y6, [["__scopeId", "data-v-d0fe6172"]]), w6 = { class: "modal-header" }, _6 = { class: "modal-body" }, b6 = { class: "switch-message" }, k6 = { class: "switch-details" }, $6 = { class: "modal-actions" }, C6 = /* @__PURE__ */ fe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), M(kt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ut(() => {
          }, ["stop"]))
        }, [
          s("div", w6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", _6, [
            s("p", b6, [
              o[6] || (o[6] = _(" Switch from ", -1)),
              s("strong", null, m(e.fromEnvironment), 1),
              o[7] || (o[7] = _(" to ", -1)),
              s("strong", null, m(e.toEnvironment), 1),
              o[8] || (o[8] = _("? ", -1))
            ]),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This will restart ComfyUI")
            ], -1)),
            s("p", k6, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", $6, [
            $(ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                _(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(ie, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: h(() => [...o[12] || (o[12] = [
                _(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), x6 = /* @__PURE__ */ pe(C6, [["__scopeId", "data-v-e9c5253e"]]), S6 = {
  key: 0,
  class: "modal-overlay"
}, I6 = { class: "modal-content" }, E6 = { class: "modal-body" }, T6 = { class: "progress-info" }, P6 = { class: "progress-percentage" }, M6 = { class: "progress-state" }, R6 = { class: "switch-steps" }, D6 = { class: "step-icon" }, L6 = { class: "step-label" }, N6 = /* @__PURE__ */ fe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = F(() => {
      const i = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return t.message || i[t.state] || t.state;
    }), n = F(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = F(() => {
      const i = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], r = i.findIndex((u) => u.state === t.state);
      return i.map((u, d) => {
        let f = "pending", v = "○";
        return d < r ? (f = "completed", v = "✓") : d === r && (f = "active", v = "⟳"), {
          ...u,
          status: f,
          icon: v
        };
      });
    });
    return (i, r) => (a(), M(kt, { to: "body" }, [
      e.show ? (a(), c("div", S6, [
        s("div", I6, [
          r[1] || (r[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", E6, [
            $(na, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", T6, [
              s("div", P6, m(e.progress) + "%", 1),
              s("div", M6, m(o.value), 1)
            ]),
            s("div", R6, [
              (a(!0), c(G, null, ge(l.value, (u) => (a(), c("div", {
                key: u.state,
                class: Ce(["switch-step", u.status])
              }, [
                s("span", D6, m(u.icon), 1),
                s("span", L6, m(u.label), 1)
              ], 2))), 128))
            ]),
            r[0] || (r[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), A6 = /* @__PURE__ */ pe(N6, [["__scopeId", "data-v-768a5078"]]), U6 = { class: "modal-header" }, z6 = { class: "modal-body" }, O6 = {
  key: 0,
  class: "node-section"
}, F6 = { class: "node-list" }, B6 = {
  key: 1,
  class: "node-section"
}, V6 = { class: "node-list" }, W6 = { class: "modal-actions" }, G6 = /* @__PURE__ */ fe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), M(kt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ut(() => {
          }, ["stop"]))
        }, [
          s("div", U6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", z6, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), c("div", O6, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", F6, [
                (a(!0), c(G, null, ge(e.mismatchDetails.missing_nodes, (n) => (a(), c("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + m(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), c("div", B6, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", V6, [
                (a(!0), c(G, null, ge(e.mismatchDetails.extra_nodes, (n) => (a(), c("div", {
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
          s("div", W6, [
            $(ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                _(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(ie, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                _(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), H6 = /* @__PURE__ */ pe(G6, [["__scopeId", "data-v-7cad7518"]]), K6 = [
  {
    id: "sponsor",
    url: "https://github.com/sponsors/comfyhub-org",
    title: "Sponsor ComfyHub",
    ariaLabel: "Sponsor ComfyHub on GitHub",
    iconPath: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z",
    label: "Sponsor"
  },
  {
    id: "discord",
    url: "https://discord.gg/2h5rSTeh6Y",
    title: "Join Discord",
    ariaLabel: "Join ComfyHub Discord",
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
    url: "https://github.com/comfyhub-org/comfygit",
    title: "View on GitHub",
    ariaLabel: "View ComfyGit on GitHub",
    iconPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  },
  {
    id: "docs",
    url: "https://docs.comfyhub.org/comfygit/",
    title: "Documentation",
    ariaLabel: "View ComfyGit Documentation",
    iconPath: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }
], j6 = "v0.0.10", q6 = "Akatz", Y6 = { class: "social-buttons" }, X6 = ["title", "aria-label", "onClick"], J6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q6 = ["d"], Z6 = ["title", "aria-label", "onClick"], eI = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, tI = ["d"], sI = /* @__PURE__ */ fe({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), c("div", Y6, [
      (a(!0), c(G, null, ge(Ae(K6), (l) => (a(), c(G, {
        key: l.id
      }, [
        l.label ? (a(), c("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => t(l.url)
        }, [
          _(m(l.label) + " ", 1),
          (a(), c("svg", J6, [
            s("path", {
              d: l.iconPath
            }, null, 8, Q6)
          ]))
        ], 8, X6)) : (a(), c("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => t(l.url)
        }, [
          (a(), c("svg", eI, [
            s("path", {
              d: l.iconPath
            }, null, 8, tI)
          ]))
        ], 8, Z6))
      ], 64))), 128))
    ]));
  }
}), jr = /* @__PURE__ */ pe(sI, [["__scopeId", "data-v-4f846342"]]), oI = { class: "footer-info" }, nI = { class: "version" }, aI = { class: "made-by" }, lI = /* @__PURE__ */ fe({
  __name: "FooterInfo",
  setup(e) {
    return (t, o) => (a(), c("div", oI, [
      s("span", nI, m(Ae(j6)), 1),
      s("span", aI, [
        o[0] || (o[0] = _(" made with ", -1)),
        o[1] || (o[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        _(" by " + m(Ae(q6)), 1)
      ])
    ]));
  }
}), qr = /* @__PURE__ */ pe(lI, [["__scopeId", "data-v-8bc3db0a"]]), iI = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = b(null);
    async function n() {
      var i;
      await ((i = o.value) == null ? void 0 : i.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (i, r) => (a(), M(wt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: r[1] || (r[1] = (u) => i.$emit("close"))
    }, {
      body: h(() => [
        $(Lr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          $(Re, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...r[2] || (r[2] = [
              _(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(Re, {
            variant: "secondary",
            onClick: r[0] || (r[0] = (d) => i.$emit("close"))
          }, {
            default: h(() => [...r[3] || (r[3] = [
              _(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), rI = /* @__PURE__ */ pe(iI, [["__scopeId", "data-v-fac00ae7"]]), cI = { class: "header-actions" }, uI = {
  key: 0,
  class: "wizard-step"
}, dI = { class: "form-field" }, mI = ["placeholder"], fI = {
  key: 0,
  class: "form-error"
}, vI = { class: "form-field form-field--checkbox" }, pI = { class: "form-checkbox" }, gI = {
  key: 0,
  class: "form-field"
}, hI = ["placeholder"], yI = {
  key: 0,
  class: "form-info"
}, wI = {
  key: 1,
  class: "form-suggestion"
}, _I = {
  key: 2,
  class: "form-error"
}, bI = {
  key: 3,
  class: "form-info"
}, kI = {
  key: 1,
  class: "wizard-step"
}, $I = {
  key: 0,
  class: "progress-check-loading"
}, CI = {
  key: 0,
  class: "cli-warning"
}, xI = { class: "cli-warning-header" }, SI = {
  key: 1,
  class: "env-landing"
}, II = { class: "env-list" }, EI = ["value"], TI = { class: "env-name" }, PI = {
  key: 2,
  class: "env-create"
}, MI = { class: "form-field" }, RI = { class: "form-field" }, DI = ["value"], LI = { class: "form-field" }, NI = ["disabled"], AI = ["value"], UI = { class: "form-field" }, zI = ["value"], OI = { class: "form-field form-field--checkbox" }, FI = { class: "form-checkbox" }, BI = {
  key: 0,
  class: "form-error"
}, VI = {
  key: 1,
  class: "env-creating"
}, WI = { class: "creating-intro" }, GI = {
  key: 3,
  class: "env-import"
}, HI = { class: "wizard-footer" }, KI = { class: "wizard-footer-actions" }, mo = 10, jI = 600 * 1e3, ii = 1800 * 1e3, qI = /* @__PURE__ */ fe({
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
      getInitializeProgress: i,
      validatePath: r,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: f,
      getComfyUIReleases: v
    } = dt(), p = b(o.initialStep || 1), w = b(null), g = b("landing"), k = b(!1), x = b(!1), C = b(!1), I = b(!1), N = b(null), P = b(o.initialStep === 2), E = b(o.defaultPath), H = b(!!o.detectedModelsDir), K = b(o.detectedModelsDir || ""), O = b(null), S = b(null), T = b(null), A = b(null), re = b("my-new-env"), Y = b(zr), q = b("latest"), oe = b(Or), Z = b(!0), U = b(null), z = b(null), D = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), we = b(!1), ve = b(!1), Ee = b(!1), De = b({ progress: 0, message: "" }), Ke = b({ progress: 0, message: "" }), Je = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], _e = b(0), Se = b(null), We = b(0), ye = b(null), le = F(() => {
      var R, V;
      const ee = (R = E.value) == null ? void 0 : R.trim(), j = !O.value, X = !H.value || !S.value && ((V = K.value) == null ? void 0 : V.trim());
      return ee && j && X;
    }), Be = F(() => {
      var ee;
      return (ee = re.value) == null ? void 0 : ee.trim();
    }), Ie = F(() => !!(p.value === 2 || z.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), L = F(() => z.value || o.workspacePath || null);
    async function B() {
      var ee;
      if (O.value = null, !!((ee = E.value) != null && ee.trim()))
        try {
          const j = await r({ path: E.value, type: "workspace" });
          j.valid || (O.value = j.error || "Invalid path");
        } catch (j) {
          O.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function se() {
      var ee;
      if (S.value = null, T.value = null, A.value = null, !!((ee = K.value) != null && ee.trim()))
        try {
          const j = await r({ path: K.value, type: "models" });
          if (j.valid)
            A.value = j.model_count ?? null;
          else if (S.value = j.error || "Invalid path", j.suggestion) {
            T.value = j.suggestion, K.value = j.suggestion, S.value = null;
            const X = await r({ path: j.suggestion, type: "models" });
            X.valid && (A.value = X.model_count ?? null);
          }
        } catch (j) {
          S.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function ae() {
      var ee, j, X, R, V;
      if (O.value = null, S.value = null, await B(), (ee = O.value) != null && ee.includes("already exists")) {
        O.value = null, z.value = ((j = E.value) == null ? void 0 : j.trim()) || o.defaultPath, p.value = 2, me();
        return;
      }
      if (!O.value && !(H.value && ((X = K.value) != null && X.trim()) && (await se(), S.value))) {
        ve.value = !0;
        try {
          await l({
            workspace_path: ((R = E.value) == null ? void 0 : R.trim()) || o.defaultPath,
            models_directory: H.value && ((V = K.value) == null ? void 0 : V.trim()) || null
          }), _e.value = 0, Se.value = Date.now();
          const ce = setInterval(async () => {
            var Te;
            if (Se.value && Date.now() - Se.value > jI) {
              clearInterval(ce), ve.value = !1, O.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const qe = await i();
              if (_e.value = 0, qe.state === "idle" && ve.value) {
                clearInterval(ce), ve.value = !1, O.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              De.value = { progress: qe.progress, message: qe.message }, qe.state === "complete" ? (clearInterval(ce), ve.value = !1, z.value = ((Te = E.value) == null ? void 0 : Te.trim()) || o.defaultPath, p.value = 2, me()) : qe.state === "error" && (clearInterval(ce), ve.value = !1, O.value = qe.error || "Workspace creation failed");
            } catch (qe) {
              _e.value++, console.warn(`Polling failure ${_e.value}/${mo}:`, qe), _e.value >= mo && (clearInterval(ce), ve.value = !1, O.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ce) {
          ve.value = !1, O.value = ce instanceof Error ? ce.message : "Failed to create workspace";
        }
      }
    }
    async function de() {
      Ee.value = !0, U.value = null;
      try {
        const ee = {
          name: re.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: q.value,
          torch_backend: oe.value,
          switch_after: Z.value,
          workspace_path: z.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ee)).status === "started") {
          We.value = 0, ye.value = Date.now();
          const X = setInterval(async () => {
            if (ye.value && Date.now() - ye.value > ii) {
              clearInterval(X), Ee.value = !1, U.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const R = await d();
              if (We.value = 0, R.state === "idle" && Ee.value) {
                clearInterval(X), Ee.value = !1, U.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ke.value = {
                progress: R.progress ?? 0,
                message: R.message,
                phase: R.phase
              }, R.state === "complete") {
                clearInterval(X), Ee.value = !1;
                const V = R.environment_name || ee.name;
                Z.value ? n("complete", V, z.value) : (g.value = "landing", n("environment-created-no-switch", V));
              } else R.state === "error" && (clearInterval(X), Ee.value = !1, U.value = R.error || "Environment creation failed");
            } catch (R) {
              We.value++, console.warn(`Polling failure ${We.value}/${mo}:`, R), We.value >= mo && (clearInterval(X), Ee.value = !1, U.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        Ee.value = !1, U.value = ee instanceof Error ? ee.message : "Unknown error";
      }
    }
    async function me() {
      we.value = !0;
      try {
        D.value = await v();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        we.value = !1;
      }
    }
    function be() {
      w.value && n("switch-environment", w.value, z.value);
    }
    function ke() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function ne(ee, j) {
      x.value = !1, j ? n("complete", ee, z.value) : (n("environment-created-no-switch", ee), g.value = "landing");
    }
    function ue() {
    }
    st(async () => {
      if (o.detectedModelsDir && (K.value = o.detectedModelsDir), o.workspacePath && (z.value = o.workspacePath), p.value === 2) {
        me();
        const ee = setTimeout(() => {
          P.value = !1;
        }, 3e3);
        await Me(), clearTimeout(ee), P.value = !1;
      }
    });
    async function Me() {
      try {
        const ee = await d();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), g.value = "create", Ee.value = !0, re.value = ee.environment_name || "my-new-env", Ke.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, $e();
          return;
        }
      } catch (ee) {
        console.log("[ComfyGit] Create progress check failed:", ee);
      }
      try {
        const ee = await f();
        console.log("[ComfyGit] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ee.environment_name), N.value = {
          message: ee.message || "Importing...",
          phase: ee.phase || "",
          progress: ee.progress ?? 0,
          environmentName: ee.environment_name || ""
        }, I.value = !0, g.value = "import", x.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    async function $e() {
      We.value = 0, ye.value = Date.now();
      let ee = null;
      const j = async () => {
        if (ye.value && Date.now() - ye.value > ii)
          return ee && clearInterval(ee), Ee.value = !1, U.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const R = await d();
          if (We.value = 0, R.state === "idle" && Ee.value)
            return ee && clearInterval(ee), Ee.value = !1, U.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ke.value = {
            progress: R.progress ?? 0,
            message: R.message,
            phase: R.phase
          }, R.state === "complete") {
            ee && clearInterval(ee), Ee.value = !1;
            const V = R.environment_name || re.value;
            return n("complete", V, z.value), !1;
          } else if (R.state === "error")
            return ee && clearInterval(ee), Ee.value = !1, U.value = R.error || "Environment creation failed", !1;
          return !0;
        } catch (R) {
          return We.value++, console.warn(`Polling failure ${We.value}/${mo}:`, R), We.value >= mo ? (ee && clearInterval(ee), Ee.value = !1, U.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await j() && (ee = setInterval(async () => {
        !await j() && ee && clearInterval(ee);
      }, 2e3));
    }
    return (ee, j) => (a(), c(G, null, [
      $(wt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: j[15] || (j[15] = (X) => ee.$emit("close"))
      }, {
        header: h(() => [
          j[20] || (j[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", cI, [
            $(jr),
            j[19] || (j[19] = s("span", { class: "header-divider" }, null, -1)),
            Ie.value ? (a(), c("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: j[0] || (j[0] = (X) => k.value = !0)
            }, [...j[17] || (j[17] = [
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
              onClick: j[1] || (j[1] = (X) => ee.$emit("close")),
              title: "Close"
            }, [...j[18] || (j[18] = [
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
          var X;
          return [
            p.value === 1 ? (a(), c("div", uI, [
              j[24] || (j[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", dI, [
                j[21] || (j[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                je(s("input", {
                  "onUpdate:modelValue": j[2] || (j[2] = (R) => E.value = R),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, mI), [
                  [Vt, E.value]
                ]),
                O.value ? (a(), c("p", fI, m(O.value), 1)) : y("", !0)
              ]),
              s("div", vI, [
                s("label", pI, [
                  je(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": j[3] || (j[3] = (R) => H.value = R)
                  }, null, 512), [
                    [on, H.value]
                  ]),
                  j[22] || (j[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              H.value ? (a(), c("div", gI, [
                j[23] || (j[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                je(s("input", {
                  "onUpdate:modelValue": j[4] || (j[4] = (R) => K.value = R),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, hI), [
                  [Vt, K.value]
                ]),
                e.detectedModelsDir && !K.value ? (a(), c("p", yI, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), c("p", wI, " Did you mean: " + m(T.value), 1)) : y("", !0),
                S.value ? (a(), c("p", _I, m(S.value), 1)) : y("", !0),
                A.value !== null && !S.value ? (a(), c("p", bI, " Found " + m(A.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ve.value ? (a(), M(Wn, {
                key: 1,
                progress: De.value.progress,
                message: De.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (a(), c("div", kI, [
              P.value ? (a(), c("div", $I, [...j[25] || (j[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), c(G, { key: 1 }, [
                !o.cliInstalled && !C.value ? (a(), c("div", CI, [
                  s("div", xI, [
                    j[27] || (j[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    j[28] || (j[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: j[5] || (j[5] = (R) => C.value = !0),
                      title: "Dismiss"
                    }, [...j[26] || (j[26] = [
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
                  j[29] || (j[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  j[30] || (j[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (a(), c("div", SI, [
                  j[34] || (j[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: j[6] || (j[6] = (R) => g.value = "create")
                  }, [...j[31] || (j[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: j[7] || (j[7] = (R) => {
                      I.value = !1, g.value = "import";
                    })
                  }, [...j[32] || (j[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (X = o.existingEnvironments) != null && X.length ? (a(), c(G, { key: 0 }, [
                    j[33] || (j[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", II, [
                      (a(!0), c(G, null, ge(o.existingEnvironments, (R) => (a(), c("label", {
                        key: R,
                        class: Ce(["env-option", { selected: w.value === R }])
                      }, [
                        je(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: R,
                          "onUpdate:modelValue": j[8] || (j[8] = (V) => w.value = V)
                        }, null, 8, EI), [
                          [es, w.value]
                        ]),
                        s("span", TI, m(R), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (a(), c("div", PI, [
                  Ee.value ? (a(), c("div", VI, [
                    s("p", WI, [
                      j[41] || (j[41] = _(" Creating environment ", -1)),
                      s("strong", null, m(re.value), 1),
                      j[42] || (j[42] = _("... ", -1))
                    ]),
                    $(Wn, {
                      progress: Ke.value.progress,
                      message: Ke.value.message,
                      "current-phase": Ke.value.phase,
                      "show-steps": !0,
                      steps: Je
                    }, null, 8, ["progress", "message", "current-phase"]),
                    j[43] || (j[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), c(G, { key: 0 }, [
                    j[40] || (j[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", MI, [
                      j[35] || (j[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      je(s("input", {
                        "onUpdate:modelValue": j[9] || (j[9] = (R) => re.value = R),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Vt, re.value]
                      ])
                    ]),
                    s("div", RI, [
                      j[36] || (j[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      je(s("select", {
                        "onUpdate:modelValue": j[10] || (j[10] = (R) => Y.value = R),
                        class: "form-select"
                      }, [
                        (a(!0), c(G, null, ge(Ae(Ur), (R) => (a(), c("option", {
                          key: R,
                          value: R
                        }, m(R), 9, DI))), 128))
                      ], 512), [
                        [_s, Y.value]
                      ])
                    ]),
                    s("div", LI, [
                      j[37] || (j[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      je(s("select", {
                        "onUpdate:modelValue": j[11] || (j[11] = (R) => q.value = R),
                        class: "form-select",
                        disabled: we.value
                      }, [
                        (a(!0), c(G, null, ge(D.value, (R) => (a(), c("option", {
                          key: R.tag_name,
                          value: R.tag_name
                        }, m(R.name), 9, AI))), 128))
                      ], 8, NI), [
                        [_s, q.value]
                      ])
                    ]),
                    s("div", UI, [
                      j[38] || (j[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      je(s("select", {
                        "onUpdate:modelValue": j[12] || (j[12] = (R) => oe.value = R),
                        class: "form-select"
                      }, [
                        (a(!0), c(G, null, ge(Ae(cl), (R) => (a(), c("option", {
                          key: R,
                          value: R
                        }, m(R) + m(R === "auto" ? " (detect GPU)" : ""), 9, zI))), 128))
                      ], 512), [
                        [_s, oe.value]
                      ])
                    ]),
                    s("div", OI, [
                      s("label", FI, [
                        je(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": j[13] || (j[13] = (R) => Z.value = R)
                        }, null, 512), [
                          [on, Z.value]
                        ]),
                        j[39] || (j[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    U.value ? (a(), c("div", BI, m(U.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (a(), c("div", GI, [
                  $(Vr, {
                    "workspace-path": z.value,
                    "resume-import": I.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: ne,
                    onImportStarted: j[14] || (j[14] = (R) => x.value = !0),
                    onSourceCleared: ue
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", HI, [
            $(qr),
            s("div", KI, [
              p.value === 1 ? (a(), M(Re, {
                key: 0,
                variant: "primary",
                disabled: !le.value || ve.value,
                onClick: ae
              }, {
                default: h(() => [
                  _(m(ve.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (a(), c(G, { key: 1 }, [
                !Ee.value && !x.value && (g.value !== "landing" || o.setupState === "no_workspace" && !z.value) ? (a(), M(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: ke
                }, {
                  default: h(() => [...j[44] || (j[44] = [
                    _(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (a(), M(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !Be.value || Ee.value,
                  onClick: de
                }, {
                  default: h(() => [
                    _(m(Ee.value ? "Creating..." : Z.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (a(), M(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: be
                }, {
                  default: h(() => [
                    _(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      k.value ? (a(), M(rI, {
        key: 0,
        "workspace-path": L.value,
        onClose: j[16] || (j[16] = (X) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), YI = /* @__PURE__ */ pe(qI, [["__scopeId", "data-v-9a9aadc0"]]), XI = { class: "comfygit-panel" }, JI = { class: "panel-header" }, QI = { class: "header-left" }, ZI = {
  key: 0,
  class: "header-info"
}, eE = { class: "header-actions" }, tE = { class: "env-switcher" }, sE = {
  key: 0,
  class: "header-info"
}, oE = { class: "branch-name" }, nE = { class: "panel-main" }, aE = { class: "sidebar" }, lE = { class: "sidebar-content" }, iE = { class: "sidebar-section" }, rE = { class: "sidebar-section" }, cE = { class: "sidebar-section" }, uE = {
  key: 0,
  class: "sidebar-badge"
}, dE = { class: "sidebar-footer" }, mE = { class: "content-area" }, fE = {
  key: 0,
  class: "error-message"
}, vE = {
  key: 1,
  class: "loading"
}, pE = { class: "dialog-content env-selector-dialog" }, gE = { class: "dialog-header" }, hE = { class: "dialog-body" }, yE = { class: "env-list" }, wE = { class: "env-info" }, _E = { class: "env-name-row" }, bE = { class: "env-indicator" }, kE = { class: "env-name" }, $E = {
  key: 0,
  class: "env-branch"
}, CE = {
  key: 1,
  class: "current-label"
}, xE = { class: "env-stats" }, SE = ["onClick"], IE = { class: "toast-container" }, EE = { class: "toast-message" }, TE = /* @__PURE__ */ fe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getStatus: l,
      getHistory: i,
      getBranches: r,
      checkout: u,
      createBranch: d,
      switchBranch: f,
      deleteBranch: v,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: k,
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: I
    } = dt(), N = Bv(), { liveInstanceCount: P } = Wr({ autoStart: !0 }), E = b(null), H = b([]), K = b([]), O = b([]), S = F(() => O.value.find((te) => te.is_current)), T = b(null), A = b(!1), re = b(1), Y = F(() => {
      var te;
      return ((te = T.value) == null ? void 0 : te.state) || "managed";
    }), q = b(!1), oe = b(null), Z = b(null), U = b(!1), z = b(null), D = b(null), we = b(null), ve = b(!1), Ee = b(!1), De = b(""), Ke = b(null), Je = b({ state: "idle", progress: 0, message: "" });
    let _e = null, Se = null;
    const We = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ye = o.initialView ? We[o.initialView] : null, le = b((ye == null ? void 0 : ye.view) ?? "status"), Be = b((ye == null ? void 0 : ye.section) ?? "this-env");
    function Ie(te, W) {
      le.value = te, Be.value = W;
    }
    function L(te) {
      const Pe = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[te];
      Pe && Ie(Pe.view, Pe.section);
    }
    function B() {
      Ie("branches", "this-env");
    }
    function se() {
      n("close"), setTimeout(() => {
        var W;
        const te = document.querySelectorAll("button.comfyui-button");
        for (const Pe of te)
          if (((W = Pe.textContent) == null ? void 0 : W.trim()) === "Manager") {
            Pe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ae = b(null), de = b(!1), me = b(!1), be = b([]);
    let ke = 0;
    function ne(te, W = "info", Pe = 3e3) {
      const Ve = ++ke;
      return be.value.push({ id: Ve, message: te, type: W }), Pe > 0 && setTimeout(() => {
        be.value = be.value.filter((it) => it.id !== Ve);
      }, Pe), Ve;
    }
    function ue(te) {
      be.value = be.value.filter((W) => W.id !== te);
    }
    function Me(te, W) {
      ne(te, W);
    }
    const $e = F(() => {
      if (!E.value) return "neutral";
      const te = E.value.workflows, W = te.new.length > 0 || te.modified.length > 0 || te.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? W ? "warning" : "success" : "error";
    });
    F(() => E.value ? $e.value === "success" ? "All synced" : $e.value === "warning" ? "Uncommitted changes" : $e.value === "error" ? "Not synced" : "" : "");
    async function ee() {
      q.value = !0, oe.value = null;
      try {
        const [te, W, Pe, Ve] = await Promise.all([
          l(!0),
          i(),
          r(),
          p()
        ]);
        E.value = te, H.value = W.commits, K.value = Pe.branches, O.value = Ve, n("statusUpdate", te), z.value && await z.value.loadWorkflows(!0);
      } catch (te) {
        oe.value = te instanceof Error ? te.message : "Failed to load status", E.value = null, H.value = [], K.value = [];
      } finally {
        q.value = !1;
      }
    }
    function j(te) {
      Z.value = te;
    }
    async function X(te) {
      var Pe;
      Z.value = null;
      const W = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      ae.value = {
        title: W ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: W ? "You have uncommitted changes that will be lost." : `Checkout commit ${te.short_hash || ((Pe = te.hash) == null ? void 0 : Pe.slice(0, 7))}?`,
        details: W ? us() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: W ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: W,
        onConfirm: async () => {
          var gt;
          ae.value = null, qe();
          const Ve = ne(`Checking out ${te.short_hash || ((gt = te.hash) == null ? void 0 : gt.slice(0, 7))}...`, "info", 0), it = await u(te.hash, W);
          ue(Ve), it.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(it.message || "Checkout failed", "error");
        }
      };
    }
    async function R(te) {
      const W = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      ae.value = {
        title: W ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: W ? "You have uncommitted changes." : `Switch to branch "${te}"?`,
        details: W ? us() : void 0,
        warning: W ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: W ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, qe();
          const Pe = ne(`Switching to ${te}...`, "info", 0), Ve = await f(te, W);
          ue(Pe), Ve.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(Ve.message || "Branch switch failed", "error");
        }
      };
    }
    async function V(te) {
      const W = ne(`Creating branch ${te}...`, "info", 0), Pe = await d(te);
      ue(W), Pe.status === "success" ? (ne(`Branch "${te}" created`, "success"), await ee()) : ne(Pe.message || "Failed to create branch", "error");
    }
    async function ce(te, W = !1) {
      const Pe = async (Ve) => {
        var gt;
        const it = ne(`Deleting branch ${te}...`, "info", 0);
        try {
          const At = await v(te, Ve);
          ue(it), At.status === "success" ? (ne(`Branch "${te}" deleted`, "success"), await ee()) : (gt = At.message) != null && gt.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${te}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Pe(!0);
            }
          } : ne(At.message || "Failed to delete branch", "error");
        } catch (At) {
          ue(it);
          const ds = At instanceof Error ? At.message : "Failed to delete branch";
          ds.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${te}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Pe(!0);
            }
          } : ne(ds, "error");
        }
      };
      ae.value = {
        title: "Delete Branch",
        message: `Delete branch "${te}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, await Pe(W);
        }
      };
    }
    async function Te(te) {
      Z.value = null;
      const W = prompt("Enter branch name:");
      if (W) {
        const Pe = ne(`Creating branch ${W}...`, "info", 0), Ve = await d(W, te.hash);
        ue(Pe), Ve.status === "success" ? (ne(`Branch "${W}" created from ${te.short_hash}`, "success"), await ee()) : ne(Ve.message || "Failed to create branch", "error");
      }
    }
    function qe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ft() {
      ae.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var te;
          ae.value = null, qe(), ne("Restarting environment...", "info");
          try {
            (te = window.app) != null && te.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function $t() {
      ae.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var te;
          ae.value = null, ne("Stopping environment...", "info");
          try {
            (te = window.app) != null && te.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Ct(te, W) {
      U.value = !1, De.value = te, Ke.value = W || null, ve.value = !0;
    }
    async function vt() {
      ve.value = !1, Ee.value = !0, qe(), Je.value = {
        progress: 10,
        state: ht(10),
        message: Yt(10)
      };
      try {
        await w(De.value, Ke.value || void 0), bs(), js();
      } catch (te) {
        Xt(), Ee.value = !1, ne(`Failed to initiate switch: ${te instanceof Error ? te.message : "Unknown error"}`, "error"), Je.value = { state: "idle", progress: 0, message: "" }, Ke.value = null;
      }
    }
    function ht(te) {
      return te >= 100 ? "complete" : te >= 80 ? "validating" : te >= 60 ? "starting" : te >= 30 ? "syncing" : "preparing";
    }
    function Yt(te) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ht(te)] || "";
    }
    function bs() {
      if (Se) return;
      let te = 10;
      const W = 60, Pe = 5e3, Ve = 100, it = (W - te) / (Pe / Ve);
      Se = window.setInterval(() => {
        if (te += it, te >= W && (te = W, Xt()), Je.value.progress < W) {
          const gt = Math.floor(te);
          Je.value = {
            progress: gt,
            state: ht(gt),
            message: Yt(gt)
          };
        }
      }, Ve);
    }
    function Xt() {
      Se && (clearInterval(Se), Se = null);
    }
    function js() {
      _e || (_e = window.setInterval(async () => {
        try {
          let te = await N.getStatus();
          if ((!te || te.state === "idle") && (te = await g()), !te)
            return;
          const W = te.progress || 0;
          W >= 60 && Xt();
          const Pe = Math.max(W, Je.value.progress), Ve = te.state && te.state !== "idle" && te.state !== "unknown", it = Ve ? te.state : ht(Pe), gt = Ve && te.message || Yt(Pe);
          Je.value = {
            state: it,
            progress: Pe,
            message: gt
          }, te.state === "complete" ? (Xt(), As(), Ee.value = !1, ne(`✓ Switched to ${De.value}`, "success"), await ee(), De.value = "") : te.state === "rolled_back" ? (Xt(), As(), Ee.value = !1, ne("Switch failed, restored previous environment", "warning"), De.value = "") : te.state === "critical_failure" && (Xt(), As(), Ee.value = !1, ne(`Critical error during switch: ${te.message}`, "error"), De.value = "");
        } catch (te) {
          console.error("Failed to poll switch progress:", te);
        }
      }, 1e3));
    }
    function As() {
      Xt(), _e && (clearInterval(_e), _e = null);
    }
    function ro() {
      var te;
      ve.value = !1, De.value = "", (te = T.value) != null && te.state && T.value.state !== "managed" && (re.value = T.value.state === "no_workspace" ? 1 : 2, A.value = !0);
    }
    async function To(te) {
      de.value = !1, await ee(), ne(te.message, te.success ? "success" : "error");
    }
    async function Po() {
      me.value = !1;
      const te = ne("Syncing environment...", "info", 0);
      try {
        const W = await x("skip", !0);
        if (ue(te), W.status === "success") {
          const Pe = [];
          W.nodes_installed.length && Pe.push(`${W.nodes_installed.length} installed`), W.nodes_removed.length && Pe.push(`${W.nodes_removed.length} removed`);
          const Ve = Pe.length ? `: ${Pe.join(", ")}` : "";
          ne(`✓ Environment synced${Ve}`, "success"), await ee();
        } else {
          const Pe = W.errors.length ? W.errors.join("; ") : W.message;
          ne(`Sync failed: ${Pe}`, "error");
        }
      } catch (W) {
        ue(te), ne(`Sync error: ${W instanceof Error ? W.message : "Unknown error"}`, "error");
      }
    }
    async function Mo(te) {
      var W;
      try {
        const Pe = await C(te);
        Pe.failed.length === 0 ? ne(`✓ Repaired ${Pe.success} workflow${Pe.success === 1 ? "" : "s"}`, "success") : ne(`Repaired ${Pe.success}, failed: ${Pe.failed.length}`, "warning"), await ee();
      } catch (Pe) {
        ne(`Repair failed: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
      } finally {
        (W = we.value) == null || W.resetRepairingState();
      }
    }
    async function he() {
      var W, Pe;
      const te = ne("Repairing environment...", "info", 0);
      try {
        const Ve = await x("skip", !0);
        if (ue(te), Ve.status === "success") {
          const it = [];
          Ve.nodes_installed.length && it.push(`${Ve.nodes_installed.length} installed`), Ve.nodes_removed.length && it.push(`${Ve.nodes_removed.length} removed`);
          const gt = it.length ? `: ${it.join(", ")}` : "";
          ne(`✓ Environment repaired${gt}`, "success"), (W = we.value) == null || W.closeDetailModal(), await ee();
        } else {
          const it = Ve.errors.length ? Ve.errors.join(", ") : Ve.message || "Unknown error";
          ne(`Repair failed: ${it}`, "error");
        }
      } catch (Ve) {
        ue(te), ne(`Repair error: ${Ve instanceof Error ? Ve.message : "Unknown error"}`, "error");
      } finally {
        (Pe = we.value) == null || Pe.resetRepairingEnvironmentState();
      }
    }
    async function Q(te, W) {
      ne(`Environment '${te}' created`, "success"), await ee(), D.value && await D.value.loadEnvironments(), W && await Ct(te);
    }
    async function Ge(te) {
      var W;
      if (((W = S.value) == null ? void 0 : W.name) === te) {
        ne("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ae.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${te}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ae.value = null;
          try {
            const Pe = await k(te);
            Pe.status === "success" ? (ne(`Environment "${te}" deleted`, "success"), await ee(), D.value && await D.value.loadEnvironments()) : ne(Pe.message || "Failed to delete environment", "error");
          } catch (Pe) {
            ne(`Error deleting environment: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function _t(te, W) {
      A.value = !1;
      try {
        T.value = await I();
      } catch {
      }
      await Ct(te, W);
    }
    function Jt() {
      A.value = !1, n("close");
    }
    async function ks(te, W) {
      await Ct(te, W);
    }
    async function $s(te) {
      await ee(), await Ct(te);
    }
    async function cs(te) {
      T.value = await I(), console.log(`Environment '${te}' created. Available for switching.`);
    }
    function Ne() {
      Ie("environments", "all-envs"), setTimeout(() => {
        var te;
        (te = D.value) == null || te.openCreateModal();
      }, 100);
    }
    function us() {
      if (!E.value) return [];
      const te = [], W = E.value.workflows;
      return W.new.length && te.push(`${W.new.length} new workflow(s)`), W.modified.length && te.push(`${W.modified.length} modified workflow(s)`), W.deleted.length && te.push(`${W.deleted.length} deleted workflow(s)`), te;
    }
    return st(async () => {
      try {
        if (T.value = await I(), T.value.state === "no_workspace") {
          A.value = !0, re.value = 1;
          return;
        }
        if (T.value.state === "empty_workspace") {
          A.value = !0, re.value = 2;
          return;
        }
        if (T.value.state === "unmanaged") {
          A.value = !0, re.value = 2;
          return;
        }
      } catch (te) {
        console.warn("Setup status check failed, proceeding normally:", te);
      }
      await ee();
    }), (te, W) => {
      var Pe, Ve, it, gt, At, ds, qs, Ys, J, xe, ot, ms;
      return a(), c("div", XI, [
        s("div", JI, [
          s("div", QI, [
            W[31] || (W[31] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (a(), c("div", ZI)) : y("", !0)
          ]),
          s("div", eE, [
            $(jr),
            W[34] || (W[34] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ce(["icon-btn", { spinning: q.value }]),
              onClick: ee,
              title: "Refresh"
            }, [...W[32] || (W[32] = [
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
              onClick: W[0] || (W[0] = (ze) => n("close")),
              title: "Close"
            }, [...W[33] || (W[33] = [
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
        s("div", tE, [
          s("div", { class: "env-switcher-header" }, [
            W[35] || (W[35] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", { class: "env-control-buttons" }, [
              s("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ft
              }, " Restart "),
              s("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: $t
              }, " Stop ")
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: W[1] || (W[1] = (ze) => Ie("environments", "all-envs"))
          }, [
            E.value ? (a(), c("div", sE, [
              s("span", null, m(((Pe = S.value) == null ? void 0 : Pe.name) || ((Ve = E.value) == null ? void 0 : Ve.environment) || "Loading..."), 1),
              s("span", oE, "(" + m(E.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            W[36] || (W[36] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", nE, [
          s("div", aE, [
            s("div", lE, [
              s("div", iE, [
                W[37] || (W[37] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "status" && Be.value === "this-env" }]),
                  onClick: W[2] || (W[2] = (ze) => Ie("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "workflows" }]),
                  onClick: W[3] || (W[3] = (ze) => Ie("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "models-env" }]),
                  onClick: W[4] || (W[4] = (ze) => Ie("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "branches" }]),
                  onClick: W[5] || (W[5] = (ze) => Ie("branches", "this-env"))
                }, " BRANCHES ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "history" }]),
                  onClick: W[6] || (W[6] = (ze) => Ie("history", "this-env"))
                }, " HISTORY ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "nodes" }]),
                  onClick: W[7] || (W[7] = (ze) => Ie("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "debug-env" }]),
                  onClick: W[8] || (W[8] = (ze) => Ie("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              W[41] || (W[41] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", rE, [
                W[38] || (W[38] = s("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "environments" }]),
                  onClick: W[9] || (W[9] = (ze) => Ie("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "model-index" }]),
                  onClick: W[10] || (W[10] = (ze) => Ie("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "settings" }]),
                  onClick: W[11] || (W[11] = (ze) => Ie("settings", "all-envs"))
                }, " SETTINGS ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "debug-workspace" }]),
                  onClick: W[12] || (W[12] = (ze) => Ie("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              W[42] || (W[42] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", cE, [
                W[40] || (W[40] = s("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "deploy" }]),
                  onClick: W[13] || (W[13] = (ze) => Ie("deploy", "sharing"))
                }, [
                  W[39] || (W[39] = _(" DEPLOY ", -1)),
                  Ae(P) > 0 ? (a(), c("span", uE, m(Ae(P)), 1)) : y("", !0)
                ], 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "export" }]),
                  onClick: W[14] || (W[14] = (ze) => Ie("export", "sharing"))
                }, " EXPORT ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "import" }]),
                  onClick: W[15] || (W[15] = (ze) => Ie("import", "sharing"))
                }, " IMPORT ", 2),
                s("button", {
                  class: Ce(["sidebar-item", { active: le.value === "remotes" }]),
                  onClick: W[16] || (W[16] = (ze) => Ie("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            s("div", dE, [
              $(qr)
            ])
          ]),
          s("div", mE, [
            oe.value ? (a(), c("div", fE, m(oe.value), 1)) : !E.value && le.value === "status" ? (a(), c("div", vE, " Loading status... ")) : (a(), c(G, { key: 2 }, [
              le.value === "status" ? (a(), M(rv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: we,
                status: E.value,
                "setup-state": Y.value,
                onSwitchBranch: B,
                onCommitChanges: W[17] || (W[17] = (ze) => de.value = !0),
                onSyncEnvironment: W[18] || (W[18] = (ze) => me.value = !0),
                onViewWorkflows: W[19] || (W[19] = (ze) => Ie("workflows", "this-env")),
                onViewHistory: W[20] || (W[20] = (ze) => Ie("history", "this-env")),
                onViewDebug: W[21] || (W[21] = (ze) => Ie("debug-env", "this-env")),
                onViewNodes: W[22] || (W[22] = (ze) => Ie("nodes", "this-env")),
                onRepairMissingModels: Mo,
                onRepairEnvironment: he,
                onStartSetup: W[23] || (W[23] = (ze) => A.value = !0),
                onViewEnvironments: W[24] || (W[24] = (ze) => Ie("environments", "all-envs")),
                onCreateEnvironment: Ne
              }, null, 8, ["status", "setup-state"])) : le.value === "workflows" ? (a(), M(A0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: ee
              }, null, 512)) : le.value === "models-env" ? (a(), M(yw, {
                key: 2,
                onNavigate: L
              })) : le.value === "branches" ? (a(), M($v, {
                key: 3,
                branches: K.value,
                current: ((it = E.value) == null ? void 0 : it.branch) || null,
                onSwitch: R,
                onCreate: V,
                onDelete: ce
              }, null, 8, ["branches", "current"])) : le.value === "history" ? (a(), M(Lv, {
                key: 4,
                commits: H.value,
                onSelect: j,
                onCheckout: X
              }, null, 8, ["commits"])) : le.value === "nodes" ? (a(), M(v_, {
                key: 5,
                "version-mismatches": ((At = (gt = E.value) == null ? void 0 : gt.comparison) == null ? void 0 : At.version_mismatches) || [],
                onOpenNodeManager: se,
                onRepairEnvironment: he,
                onToast: Me
              }, null, 8, ["version-mismatches"])) : le.value === "debug-env" ? (a(), M(T2, { key: 6 })) : le.value === "environments" ? (a(), M(R$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: D,
                onSwitch: Ct,
                onCreated: Q,
                onDelete: Ge
              }, null, 512)) : le.value === "model-index" ? (a(), M(zw, {
                key: 8,
                onRefresh: ee
              })) : le.value === "settings" ? (a(), M(_2, { key: 9 })) : le.value === "debug-workspace" ? (a(), M(E2, { key: 10 })) : le.value === "deploy" ? (a(), M(cS, {
                key: 11,
                onToast: Me,
                onNavigate: L
              })) : le.value === "export" ? (a(), M(rC, { key: 12 })) : le.value === "import" ? (a(), M(t5, {
                key: 13,
                onImportCompleteSwitch: $s
              })) : le.value === "remotes" ? (a(), M(Zk, {
                key: 14,
                onToast: Me
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (a(), M(IS, {
          key: 0,
          commit: Z.value,
          onClose: W[25] || (W[25] = (ze) => Z.value = null),
          onCheckout: X,
          onCreateBranch: Te
        }, null, 8, ["commit"])) : y("", !0),
        ae.value ? (a(), M(rl, {
          key: 1,
          title: ae.value.title,
          message: ae.value.message,
          details: ae.value.details,
          warning: ae.value.warning,
          confirmLabel: ae.value.confirmLabel,
          cancelLabel: ae.value.cancelLabel,
          secondaryLabel: ae.value.secondaryLabel,
          secondaryAction: ae.value.secondaryAction,
          destructive: ae.value.destructive,
          onConfirm: ae.value.onConfirm,
          onCancel: W[26] || (W[26] = (ze) => ae.value = null),
          onSecondary: ae.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        $(x6, {
          show: ve.value,
          "from-environment": ((ds = S.value) == null ? void 0 : ds.name) || "unknown",
          "to-environment": De.value,
          onConfirm: vt,
          onClose: ro
        }, null, 8, ["show", "from-environment", "to-environment"]),
        de.value && E.value ? (a(), M(Kr, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: W[27] || (W[27] = (ze) => de.value = !1),
          onCommitted: To
        }, null, 8, ["status"])) : y("", !0),
        me.value && E.value ? (a(), M(H6, {
          key: 3,
          show: me.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: Po,
          onClose: W[28] || (W[28] = (ze) => me.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        $(A6, {
          show: Ee.value,
          state: Je.value.state,
          progress: Je.value.progress,
          message: Je.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (a(), c("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: W[30] || (W[30] = ut((ze) => U.value = !1, ["self"]))
        }, [
          s("div", pE, [
            s("div", gE, [
              W[44] || (W[44] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: W[29] || (W[29] = (ze) => U.value = !1)
              }, [...W[43] || (W[43] = [
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
            s("div", hE, [
              W[45] || (W[45] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", yE, [
                (a(!0), c(G, null, ge(O.value, (ze) => (a(), c("div", {
                  key: ze.name,
                  class: Ce(["env-item", { current: ze.is_current }])
                }, [
                  s("div", wE, [
                    s("div", _E, [
                      s("span", bE, m(ze.is_current ? "●" : "○"), 1),
                      s("span", kE, m(ze.name), 1),
                      ze.current_branch ? (a(), c("span", $E, "(" + m(ze.current_branch) + ")", 1)) : y("", !0),
                      ze.is_current ? (a(), c("span", CE, "CURRENT")) : y("", !0)
                    ]),
                    s("div", xE, m(ze.workflow_count) + " workflows • " + m(ze.node_count) + " nodes ", 1)
                  ]),
                  ze.is_current ? y("", !0) : (a(), c("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (i7) => Ct(ze.name)
                  }, " SWITCH ", 8, SE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        A.value ? (a(), M(YI, {
          key: 5,
          "default-path": ((qs = T.value) == null ? void 0 : qs.default_path) || "~/comfygit",
          "detected-models-dir": ((Ys = T.value) == null ? void 0 : Ys.detected_models_dir) || null,
          "initial-step": re.value,
          "existing-environments": ((J = T.value) == null ? void 0 : J.environments) || [],
          "cli-installed": ((xe = T.value) == null ? void 0 : xe.cli_installed) ?? !0,
          "setup-state": ((ot = T.value) == null ? void 0 : ot.state) || "no_workspace",
          "workspace-path": ((ms = T.value) == null ? void 0 : ms.workspace_path) || null,
          onComplete: _t,
          onClose: Jt,
          onSwitchEnvironment: ks,
          onEnvironmentCreatedNoSwitch: cs
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", IE, [
          $(yd, { name: "toast" }, {
            default: h(() => [
              (a(!0), c(G, null, ge(be.value, (ze) => (a(), c("div", {
                key: ze.id,
                class: Ce(["toast", ze.type])
              }, [
                s("span", EE, m(ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), PE = /* @__PURE__ */ pe(TE, [["__scopeId", "data-v-037b3ee3"]]), ME = { class: "item-header" }, RE = { class: "item-info" }, DE = { class: "filename" }, LE = { class: "metadata" }, NE = { class: "size" }, AE = {
  key: 0,
  class: "type"
}, UE = { class: "item-actions" }, zE = {
  key: 0,
  class: "progress-section"
}, OE = { class: "progress-bar" }, FE = { class: "progress-stats" }, BE = { class: "downloaded" }, VE = { class: "speed" }, WE = {
  key: 0,
  class: "eta"
}, GE = {
  key: 1,
  class: "status-msg paused"
}, HE = {
  key: 2,
  class: "status-msg queued"
}, KE = {
  key: 3,
  class: "status-msg completed"
}, jE = {
  key: 4,
  class: "status-msg failed"
}, qE = {
  key: 0,
  class: "retries"
}, YE = /* @__PURE__ */ fe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
    function n(r) {
      if (r === 0) return "?";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(r) {
      return r === 0 ? "-" : `${(r / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function i(r) {
      if (r < 60) return `${Math.round(r)}s`;
      const u = Math.floor(r / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (r, u) => (a(), c("div", {
      class: Ce(["download-item", `status-${e.item.status}`])
    }, [
      s("div", ME, [
        s("div", RE, [
          s("div", DE, m(e.item.filename), 1),
          s("div", LE, [
            s("span", NE, m(n(e.item.size)), 1),
            e.item.type ? (a(), c("span", AE, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", UE, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), c("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), c("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), c("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), c("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), c("div", zE, [
        s("div", OE, [
          s("div", {
            class: "progress-fill",
            style: qt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", FE, [
          s("span", BE, m(n(e.item.downloaded)) + " / " + m(n(e.item.size)), 1),
          s("span", VE, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), c("span", WE, m(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), c("div", GE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), c("div", HE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), c("div", KE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), c("div", jE, [
        _(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), c("span", qE, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), No = /* @__PURE__ */ pe(YE, [["__scopeId", "data-v-2110df65"]]), XE = { class: "queue-title" }, JE = { class: "count" }, QE = { class: "queue-actions" }, ZE = { class: "action-label" }, eT = {
  key: 0,
  class: "overall-progress"
}, tT = { class: "progress-bar" }, sT = {
  key: 0,
  class: "current-mini"
}, oT = { class: "filename" }, nT = { class: "speed" }, aT = {
  key: 1,
  class: "queue-content"
}, lT = {
  key: 0,
  class: "section"
}, iT = {
  key: 1,
  class: "section"
}, rT = { class: "section-header" }, cT = { class: "section-label paused" }, uT = { class: "items-list" }, dT = {
  key: 2,
  class: "section"
}, mT = { class: "section-header" }, fT = { class: "section-label" }, vT = { class: "items-list" }, pT = {
  key: 3,
  class: "section"
}, gT = { class: "section-header" }, hT = { class: "section-label" }, yT = { class: "items-list" }, wT = {
  key: 4,
  class: "section"
}, _T = { class: "section-header" }, bT = { class: "section-label failed" }, kT = { class: "items-list" }, $T = /* @__PURE__ */ fe({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: i,
      pausedItems: r,
      hasItems: u,
      activeCount: d,
      cancelDownload: f,
      retryDownload: v,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: k
    } = un(), x = b(!1);
    let C = null;
    Tt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: r.value.length,
        completed: l.value.length
      }),
      (E, H) => {
        C && (clearTimeout(C), C = null);
        const K = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, O = H && (H.active > 0 || H.paused > 0);
        K && O && (C = setTimeout(() => {
          k(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const I = F(() => {
      var K;
      if (t.items.length === 0) return 0;
      const E = l.value.length, H = ((K = o.value) == null ? void 0 : K.progress) || 0;
      return Math.round((E + H / 100) / t.items.length * 100);
    });
    function N(E) {
      f(E);
    }
    function P(E) {
      return E === 0 ? "" : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, H) => (a(), M(kt, { to: "body" }, [
      Ae(u) ? (a(), c("div", {
        key: 0,
        class: Ce(["model-download-queue", { minimized: !x.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (K) => x.value = !x.value)
        }, [
          s("div", XE, [
            H[4] || (H[4] = s("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", JE, "(" + m(Ae(d)) + "/" + m(Ae(t).items.length) + ")", 1)
          ]),
          s("div", QE, [
            s("span", ZE, m(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), c("div", aT, [
          Ae(o) ? (a(), c("div", lT, [
            H[6] || (H[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            $(No, {
              item: Ae(o),
              onCancel: H[1] || (H[1] = (K) => N(Ae(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ae(r).length > 0 ? (a(), c("div", iT, [
            s("div", rT, [
              s("span", cT, "Paused (" + m(Ae(r).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...K) => Ae(w) && Ae(w)(...K))
              }, "Resume All")
            ]),
            s("div", uT, [
              (a(!0), c(G, null, ge(Ae(r), (K) => (a(), M(No, {
                key: K.id,
                item: K,
                onResume: (O) => Ae(p)(K.id),
                onRemove: (O) => Ae(g)(K.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ae(n).length > 0 ? (a(), c("div", dT, [
            s("div", mT, [
              s("span", fT, "Queued (" + m(Ae(n).length) + ")", 1)
            ]),
            s("div", vT, [
              (a(!0), c(G, null, ge(Ae(n), (K) => (a(), M(No, {
                key: K.id,
                item: K,
                onCancel: (O) => N(K.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ae(l).length > 0 ? (a(), c("div", pT, [
            s("div", gT, [
              s("span", hT, "Completed (" + m(Ae(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...K) => Ae(k) && Ae(k)(...K))
              }, "Clear")
            ]),
            s("div", yT, [
              (a(!0), c(G, null, ge(Ae(l).slice(0, 3), (K) => (a(), M(No, {
                key: K.id,
                item: K,
                onRemove: (O) => Ae(g)(K.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ae(i).length > 0 ? (a(), c("div", wT, [
            s("div", _T, [
              s("span", bT, "Failed (" + m(Ae(i).length) + ")", 1)
            ]),
            s("div", kT, [
              (a(!0), c(G, null, ge(Ae(i), (K) => (a(), M(No, {
                key: K.id,
                item: K,
                onRetry: (O) => Ae(v)(K.id),
                onRemove: (O) => Ae(g)(K.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), c("div", eT, [
          s("div", tT, [
            s("div", {
              class: "progress-fill",
              style: qt({ width: `${I.value}%` })
            }, null, 4)
          ]),
          Ae(o) ? (a(), c("div", sT, [
            s("span", oT, m(Ae(o).filename), 1),
            s("span", nT, m(P(Ae(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), CT = /* @__PURE__ */ pe($T, [["__scopeId", "data-v-60751cfa"]]), xT = { class: "mock-control-popover" }, ST = { class: "popover-header" }, IT = { class: "popover-content" }, ET = { class: "section" }, TT = { class: "preset-buttons" }, PT = ["onClick"], MT = { class: "section" }, RT = { class: "toggle-row" }, DT = { class: "toggle-label" }, LT = ["checked"], NT = { class: "toggle-row" }, AT = { class: "toggle-label" }, UT = ["checked", "disabled"], zT = { class: "toggle-row" }, OT = { class: "toggle-label" }, FT = ["checked", "disabled"], BT = { class: "toggle-row" }, VT = { class: "toggle-label" }, WT = ["checked"], GT = { class: "section" }, HT = { class: "state-display" }, KT = /* @__PURE__ */ fe({
  __name: "MockControlPopover",
  emits: ["close"],
  setup(e) {
    const {
      state: t,
      setupState: o,
      setHasWorkspace: n,
      setHasEnvironments: l,
      setIsManaged: i,
      setHasLegacyManager: r,
      setPreset: u
    } = ll(), d = [
      { value: "no_workspace", label: "No Workspace" },
      { value: "empty_workspace", label: "Empty WS" },
      { value: "unmanaged", label: "Unmanaged" },
      { value: "managed", label: "Managed" }
    ];
    return (f, v) => (a(), c("div", xT, [
      s("div", ST, [
        v[5] || (v[5] = s("span", { class: "popover-title" }, "Mock Controls", -1)),
        s("button", {
          class: "close-btn",
          onClick: v[0] || (v[0] = (p) => f.$emit("close"))
        }, "×")
      ]),
      s("div", IT, [
        s("div", ET, [
          v[6] || (v[6] = s("div", { class: "section-title" }, "QUICK PRESETS", -1)),
          s("div", TT, [
            (a(), c(G, null, ge(d, (p) => s("button", {
              key: p.value,
              class: Ce(["preset-btn", { active: Ae(o) === p.value }]),
              onClick: (w) => Ae(u)(p.value)
            }, m(p.label), 11, PT)), 64))
          ])
        ]),
        s("div", MT, [
          v[11] || (v[11] = s("div", { class: "section-title" }, "STATE TOGGLES", -1)),
          s("div", RT, [
            s("label", DT, [
              s("input", {
                type: "checkbox",
                checked: Ae(t).hasWorkspace,
                onChange: v[1] || (v[1] = (p) => Ae(n)(p.target.checked))
              }, null, 40, LT),
              v[7] || (v[7] = s("span", null, "Workspace exists", -1))
            ])
          ]),
          s("div", NT, [
            s("label", AT, [
              s("input", {
                type: "checkbox",
                checked: Ae(t).hasEnvironments,
                disabled: !Ae(t).hasWorkspace,
                onChange: v[2] || (v[2] = (p) => Ae(l)(p.target.checked))
              }, null, 40, UT),
              v[8] || (v[8] = s("span", null, "Has environments", -1))
            ])
          ]),
          s("div", zT, [
            s("label", OT, [
              s("input", {
                type: "checkbox",
                checked: Ae(t).isManaged,
                disabled: !Ae(t).hasEnvironments,
                onChange: v[3] || (v[3] = (p) => Ae(i)(p.target.checked))
              }, null, 40, FT),
              v[9] || (v[9] = s("span", null, "Running in managed env", -1))
            ])
          ]),
          s("div", BT, [
            s("label", VT, [
              s("input", {
                type: "checkbox",
                checked: Ae(t).hasLegacyManager,
                onChange: v[4] || (v[4] = (p) => Ae(r)(p.target.checked))
              }, null, 40, WT),
              v[10] || (v[10] = s("span", null, "Legacy ComfyUI-Manager installed", -1))
            ])
          ])
        ]),
        s("div", GT, [
          v[12] || (v[12] = s("div", { class: "section-title" }, "CURRENT STATE", -1)),
          s("div", HT, [
            s("code", null, m(Ae(o)), 1)
          ])
        ]),
        v[13] || (v[13] = s("div", { class: "hint" }, " Changes apply on next panel open or status refresh ", -1))
      ])
    ]));
  }
}), jT = /* @__PURE__ */ pe(KT, [["__scopeId", "data-v-3255dab3"]]), qT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', YT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', XT = {
  comfy: qT,
  phosphor: YT
}, ul = "comfy", Yr = "comfygit-theme";
let Zs = null, Xr = ul;
function JT() {
  try {
    const e = localStorage.getItem(Yr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ul;
}
function Jr(e = ul) {
  Zs && Zs.remove(), Zs = document.createElement("style"), Zs.id = "comfygit-theme-styles", Zs.setAttribute("data-theme", e), Zs.textContent = XT[e], document.head.appendChild(Zs), document.body.setAttribute("data-comfygit-theme", e), Xr = e;
  try {
    localStorage.setItem(Yr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function QT() {
  return Xr;
}
function ZT(e) {
  Jr(e);
}
function e7(e) {
  var i;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const dl = document.createElement("link");
dl.rel = "stylesheet";
dl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(dl);
const t7 = JT();
Jr(t7);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), ZT(e);
  },
  getTheme: () => {
    const e = QT();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Zt = null, zt = null, jo = null, Ao = null, ri = null, Ot = null, qo = null;
const ko = b(null);
let ml = "managed", Qr = !1;
async function Mn() {
  var e;
  if (!((e = go) != null && e.api)) return null;
  try {
    const t = await go.api.fetchApi("/v2/comfygit/status");
    t.ok && (ko.value = await t.json());
  } catch {
  }
}
async function Ua() {
  {
    ml = "no_workspace", Qr = !0;
    return;
  }
}
function za() {
  var t;
  if (ml === "managed" || !Qr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function s7() {
  if (!ko.value) return !1;
  const e = ko.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ko.value.has_changes;
}
function ci(e) {
  Zt && Zt.remove(), Zt = document.createElement("div"), Zt.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Zt.appendChild(t), Zt.addEventListener("click", (l) => {
    l.target === Zt && $a();
  });
  const o = (l) => {
    l.key === "Escape" && ($a(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), oa({
    render: () => cn(PE, {
      initialView: e,
      onClose: $a,
      onStatusUpdate: async (l) => {
        ko.value = l, Yo(), await Ua(), Oa(), za();
      }
    })
  }).mount(t), document.body.appendChild(Zt);
}
function $a() {
  Zt && (Zt.remove(), Zt = null);
}
function o7(e) {
  Uo(), zt = document.createElement("div"), zt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  zt.style.position = "fixed", zt.style.top = `${t.bottom + 8}px`, zt.style.right = `${window.innerWidth - t.right}px`, zt.style.zIndex = "10001";
  const o = (l) => {
    zt && !zt.contains(l.target) && l.target !== e && (Uo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Uo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), jo = oa({
    render: () => cn(Kr, {
      status: ko.value,
      onClose: Uo,
      onCommitted: (l) => {
        Uo(), n7(l.success, l.message), Mn().then(Yo);
      }
    })
  }), jo.mount(zt), document.body.appendChild(zt);
}
function Uo() {
  jo && (jo.unmount(), jo = null), zt && (zt.remove(), zt = null);
}
function n7(e, t) {
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
  const i = document.createElement("span");
  i.textContent = t, o.appendChild(i), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function a7() {
  Ao || (Ao = document.createElement("div"), Ao.className = "comfygit-download-queue-root", ri = oa({
    render: () => cn(CT)
  }), ri.mount(Ao), document.body.appendChild(Ao), console.log("[ComfyGit] Model download queue mounted"));
}
function l7(e) {
  Cn(), Ot = document.createElement("div"), Ot.className = "comfygit-mock-control-container";
  const t = e.getBoundingClientRect();
  Ot.style.position = "fixed", Ot.style.top = `${t.bottom + 8}px`, Ot.style.right = `${window.innerWidth - t.right}px`, Ot.style.zIndex = "10001";
  const o = (l) => {
    Ot && !Ot.contains(l.target) && l.target !== e && (Cn(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Cn(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), qo = oa({
    render: () => cn(jT, {
      onClose: Cn
    })
  }), qo.mount(Ot), document.body.appendChild(Ot);
}
function Cn() {
  qo && (qo.unmount(), qo = null), Ot && (Ot.remove(), Ot = null);
}
let Gt = null, eo = null;
function Yo() {
  if (!Gt) return;
  const e = Gt.querySelector(".commit-indicator");
  e && (e.style.display = s7() ? "block" : "none");
}
function Oa() {
  if (!Gt) return;
  const e = ml !== "managed";
  Gt.disabled = e, Gt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Zr = document.createElement("style");
Zr.textContent = `
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
document.head.appendChild(Zr);
go.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var l, i;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const t = document.createElement("button");
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = ci, Gt = document.createElement("button"), Gt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Gt.innerHTML = 'Commit <span class="commit-indicator"></span>', Gt.title = "Quick Commit", Gt.onclick = () => o7(Gt), e.appendChild(t), e.appendChild(Gt), eo = document.createElement("button"), eo.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-mock-btn", eo.textContent = "Mock", eo.title = "Mock Controls - Simulate different environment states", eo.onclick = () => l7(eo), e.appendChild(eo), console.log("[ComfyGit] Mock mode enabled - Mock Control button added"), (i = (l = go.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (go.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), a7();
    const { loadPendingDownloads: o } = un();
    o(), await Promise.all([Mn(), Ua()]), Yo(), Oa(), za(), setTimeout(za, 100), setInterval(async () => {
      await Promise.all([Mn(), Ua()]), Yo(), Oa();
    }, 3e4);
    const n = go.api;
    if (n) {
      let r = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, u = function() {
        const v = document.createElement("div");
        v.style.cssText = `
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
        const p = document.createElement("span");
        p.textContent = "Workflows updated - refresh required", v.appendChild(p);
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
        `, w.onmouseover = () => w.style.background = "var(--comfy-input-bg)", w.onmouseout = () => w.style.background = "var(--comfy-menu-bg)", w.onclick = () => r(), v.appendChild(w);
        const g = document.createElement("button");
        g.textContent = "×", g.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, g.onmouseover = () => g.style.opacity = "1", g.onmouseout = () => g.style.opacity = "0.6", g.onclick = () => v.remove(), v.appendChild(g), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(v) {
        const p = document.getElementById("comfygit-error-toast");
        p && p.remove();
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
        const g = document.createElement("span");
        g.textContent = "⚠️", g.style.fontSize = "20px", w.appendChild(g);
        const k = document.createElement("div");
        k.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const x = document.createElement("div");
        x.textContent = "Node installation failed", x.style.cssText = "font-weight: 600; color: #e53935;", k.appendChild(x);
        const C = document.createElement("div");
        C.textContent = "Dependency conflict detected", C.style.cssText = "font-size: 12px; opacity: 0.8;", k.appendChild(C), w.appendChild(k);
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
          w.remove(), ci("debug-env");
        }, w.appendChild(I);
        const N = document.createElement("button");
        N.textContent = "×", N.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, N.onmouseover = () => N.style.opacity = "1", N.onmouseout = () => N.style.opacity = "0.6", N.onclick = () => w.remove(), w.appendChild(N), document.body.appendChild(w), console.log("[ComfyGit] Manager error toast displayed:", v), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && w.remove();
        }, 1e4);
      };
      n.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: p, workflow_name: w } = v.detail;
        console.log(`[ComfyGit] Workflow ${p}: ${w}`), await Mn(), Yo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      n.addEventListener("status", async (v) => {
        const p = v.detail != null;
        p && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), r()) : u()), f = p;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (v) => {
        const p = e7(v.detail);
        p && d(p);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
