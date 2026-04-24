var Lu = Object.defineProperty;
var Du = (e, s, o) => s in e ? Lu(e, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[s] = o;
var bn = (e, s, o) => Du(e, typeof s != "symbol" ? s + "" : s, o);
import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function dl(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const ht = {}, ko = [], Cs = () => {
}, Oi = () => !1, Zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ml = (e) => e.startsWith("onUpdate:"), It = Object.assign, fl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Ou = Object.prototype.hasOwnProperty, dt = (e, s) => Ou.call(e, s), Je = Array.isArray, bo = (e) => pn(e) === "[object Map]", Ro = (e) => pn(e) === "[object Set]", Ul = (e) => pn(e) === "[object Date]", Xe = (e) => typeof e == "function", bt = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", pt = (e) => e !== null && typeof e == "object", Ui = (e) => (pt(e) || Xe(e)) && Xe(e.then) && Xe(e.catch), Ai = Object.prototype.toString, pn = (e) => Ai.call(e), Uu = (e) => pn(e).slice(8, -1), zi = (e) => pn(e) === "[object Object]", vl = (e) => bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yo = /* @__PURE__ */ dl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ea = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Au = /-\w/g, rs = ea(
  (e) => e.replace(Au, (s) => s.slice(1).toUpperCase())
), zu = /\B([A-Z])/g, Zs = ea(
  (e) => e.replace(zu, "-$1").toLowerCase()
), ta = ea((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pa = ea(
  (e) => e ? `on${ta(e)}` : ""
), Ks = (e, s) => !Object.is(e, s), Rn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, Vi = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, sa = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Vu = (e) => {
  const s = bt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let Al;
const oa = () => Al || (Al = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Je(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = bt(a) ? Gu(a) : Ft(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (bt(e) || pt(e))
    return e;
}
const Fu = /;(?![^(]*\))/g, Bu = /:([^]+)/, Wu = /\/\*[^]*?\*\//g;
function Gu(e) {
  const s = {};
  return e.replace(Wu, "").split(Fu).forEach((o) => {
    if (o) {
      const a = o.split(Bu);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function Le(e) {
  let s = "";
  if (bt(e))
    s = e;
  else if (Je(e))
    for (let o = 0; o < e.length; o++) {
      const a = Le(e[o]);
      a && (s += a + " ");
    }
  else if (pt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const ju = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Hu = /* @__PURE__ */ dl(ju);
function Fi(e) {
  return !!e || e === "";
}
function qu(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = co(e[a], s[a]);
  return o;
}
function co(e, s) {
  if (e === s) return !0;
  let o = Ul(e), a = Ul(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = fs(e), a = fs(s), o || a)
    return e === s;
  if (o = Je(e), a = Je(s), o || a)
    return o && a ? qu(e, s) : !1;
  if (o = pt(e), a = pt(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const u in e) {
      const c = e.hasOwnProperty(u), d = s.hasOwnProperty(u);
      if (c && !d || !c && d || !co(e[u], s[u]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function pl(e, s) {
  return e.findIndex((o) => co(o, s));
}
const Bi = (e) => !!(e && e.__v_isRef === !0), m = (e) => bt(e) ? e : e == null ? "" : Je(e) || pt(e) && (e.toString === Ai || !Xe(e.toString)) ? Bi(e) ? m(e.value) : JSON.stringify(e, Wi, 2) : String(e), Wi = (e, s) => Bi(s) ? Wi(e, s.value) : bo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[Ra(a, r) + " =>"] = l, o),
    {}
  )
} : Ro(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Ra(o))
} : fs(s) ? Ra(s) : pt(s) && !Je(s) && !zi(s) ? String(s) : s, Ra = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    fs(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Jt;
class Ku {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Jt, !s && Jt && (this.index = (Jt.scopes || (Jt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let s, o;
      if (this.scopes)
        for (s = 0, o = this.scopes.length; s < o; s++)
          this.scopes[s].pause();
      for (s = 0, o = this.effects.length; s < o; s++)
        this.effects[s].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let s, o;
      if (this.scopes)
        for (s = 0, o = this.scopes.length; s < o; s++)
          this.scopes[s].resume();
      for (s = 0, o = this.effects.length; s < o; s++)
        this.effects[s].resume();
    }
  }
  run(s) {
    if (this._active) {
      const o = Jt;
      try {
        return Jt = this, s();
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
  stop(s) {
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
      if (!this.detached && this.parent && !s) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ju() {
  return Jt;
}
let yt;
const Na = /* @__PURE__ */ new WeakSet();
class Gi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Na.has(this) && (Na.delete(this), this.trigger()));
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
    this.flags |= 2, zl(this), qi(this);
    const s = yt, o = ms;
    yt = this, ms = !0;
    try {
      return this.fn();
    } finally {
      Ki(this), yt = s, ms = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        yl(s);
      this.deps = this.depsTail = void 0, zl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Na.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qa(this) && this.run();
  }
  get dirty() {
    return qa(this);
  }
}
let ji = 0, Qo, Xo;
function Hi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Xo, Xo = e;
    return;
  }
  e.next = Qo, Qo = e;
}
function gl() {
  ji++;
}
function hl() {
  if (--ji > 0)
    return;
  if (Xo) {
    let s = Xo;
    for (Xo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Qo; ) {
    let s = Qo;
    for (Qo = void 0; s; ) {
      const o = s.next;
      if (s.next = void 0, s.flags &= -9, s.flags & 1)
        try {
          s.trigger();
        } catch (a) {
          e || (e = a);
        }
      s = o;
    }
  }
  if (e) throw e;
}
function qi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Ki(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), yl(a), Yu(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function qa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Ji(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Ji(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ln) || (e.globalVersion = ln, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = yt, a = ms;
  yt = e, ms = !0;
  try {
    qi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ks(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    yt = o, ms = a, Ki(e), e.flags &= -3;
  }
}
function yl(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      yl(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function Yu(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let ms = !0;
const Yi = [];
function Us() {
  Yi.push(ms), ms = !1;
}
function As() {
  const e = Yi.pop();
  ms = e === void 0 ? !0 : e;
}
function zl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = yt;
    yt = void 0;
    try {
      s();
    } finally {
      yt = o;
    }
  }
}
let ln = 0;
class Qu {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!yt || !ms || yt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== yt)
      o = this.activeLink = new Qu(yt, this), yt.deps ? (o.prevDep = yt.depsTail, yt.depsTail.nextDep = o, yt.depsTail = o) : yt.deps = yt.depsTail = o, Qi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = yt.depsTail, o.nextDep = void 0, yt.depsTail.nextDep = o, yt.depsTail = o, yt.deps === o && (yt.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, ln++, this.notify(s);
  }
  notify(s) {
    gl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      hl();
    }
  }
}
function Qi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Qi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ka = /* @__PURE__ */ new WeakMap(), ro = Symbol(
  ""
), Ja = Symbol(
  ""
), rn = Symbol(
  ""
);
function Ut(e, s, o) {
  if (ms && yt) {
    let a = Ka.get(e);
    a || Ka.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new wl()), l.map = a, l.key = o), l.track();
  }
}
function Ns(e, s, o, a, l, r) {
  const u = Ka.get(e);
  if (!u) {
    ln++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (gl(), s === "clear")
    u.forEach(c);
  else {
    const d = Je(e), v = d && vl(o);
    if (d && o === "length") {
      const f = Number(a);
      u.forEach((p, w) => {
        (w === "length" || w === rn || !fs(w) && w >= f) && c(p);
      });
    } else
      switch ((o !== void 0 || u.has(void 0)) && c(u.get(o)), v && c(u.get(rn)), s) {
        case "add":
          d ? v && c(u.get("length")) : (c(u.get(ro)), bo(e) && c(u.get(Ja)));
          break;
        case "delete":
          d || (c(u.get(ro)), bo(e) && c(u.get(Ja)));
          break;
        case "set":
          bo(e) && c(u.get(ro));
          break;
      }
  }
  hl();
}
function ho(e) {
  const s = lt(e);
  return s === e ? s : (Ut(s, "iterate", rn), ls(e) ? s : s.map(vs));
}
function na(e) {
  return Ut(e = lt(e), "iterate", rn), e;
}
function Gs(e, s) {
  return zs(e) ? uo(e) ? To(vs(s)) : To(s) : vs(s);
}
const Xu = {
  __proto__: null,
  [Symbol.iterator]() {
    return La(this, Symbol.iterator, (e) => Gs(this, e));
  },
  concat(...e) {
    return ho(this).concat(
      ...e.map((s) => Je(s) ? ho(s) : s)
    );
  },
  entries() {
    return La(this, "entries", (e) => (e[1] = Gs(this, e[1]), e));
  },
  every(e, s) {
    return Ts(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return Ts(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Gs(this, a)),
      arguments
    );
  },
  find(e, s) {
    return Ts(
      this,
      "find",
      e,
      s,
      (o) => Gs(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return Ts(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return Ts(
      this,
      "findLast",
      e,
      s,
      (o) => Gs(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return Ts(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return Ts(this, "forEach", e, s, void 0, arguments);
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
  map(e, s) {
    return Ts(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return zo(this, "pop");
  },
  push(...e) {
    return zo(this, "push", e);
  },
  reduce(e, ...s) {
    return Vl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return Vl(this, "reduceRight", e, s);
  },
  shift() {
    return zo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Ts(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return zo(this, "splice", e);
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
    return zo(this, "unshift", e);
  },
  values() {
    return La(this, "values", (e) => Gs(this, e));
  }
};
function La(e, s, o) {
  const a = na(e), l = a[s]();
  return a !== e && !ls(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Zu = Array.prototype;
function Ts(e, s, o, a, l, r) {
  const u = na(e), c = u !== e && !ls(e), d = u[s];
  if (d !== Zu[s]) {
    const p = d.apply(e, r);
    return c ? vs(p) : p;
  }
  let v = o;
  u !== e && (c ? v = function(p, w) {
    return o.call(this, Gs(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(u, v, a);
  return c && l ? l(f) : f;
}
function Vl(e, s, o, a) {
  const l = na(e);
  let r = o;
  return l !== e && (ls(e) ? o.length > 3 && (r = function(u, c, d) {
    return o.call(this, u, c, d, e);
  }) : r = function(u, c, d) {
    return o.call(this, u, Gs(e, c), d, e);
  }), l[s](r, ...a);
}
function Da(e, s, o) {
  const a = lt(e);
  Ut(a, "iterate", rn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && bl(o[0]) ? (o[0] = lt(o[0]), a[s](...o)) : l;
}
function zo(e, s, o = []) {
  Us(), gl();
  const a = lt(e)[s].apply(e, o);
  return hl(), As(), a;
}
const ec = /* @__PURE__ */ dl("__proto__,__v_isRef,__isVue"), Xi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fs)
);
function tc(e) {
  fs(e) || (e = String(e));
  const s = lt(this);
  return Ut(s, "has", e), s.hasOwnProperty(e);
}
class Zi {
  constructor(s = !1, o = !1) {
    this._isReadonly = s, this._isShallow = o;
  }
  get(s, o, a) {
    if (o === "__v_skip") return s.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return a === (l ? r ? dc : or : r ? sr : tr).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const u = Je(s);
    if (!l) {
      let d;
      if (u && (d = Xu[o]))
        return d;
      if (o === "hasOwnProperty")
        return tc;
    }
    const c = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Bt(s) ? s : a
    );
    if ((fs(o) ? Xi.has(o) : ec(o)) || (l || Ut(s, "get", o), r))
      return c;
    if (Bt(c)) {
      const d = u && vl(o) ? c : c.value;
      return l && pt(d) ? Vn(d) : d;
    }
    return pt(c) ? l ? Vn(c) : vo(c) : c;
  }
}
class er extends Zi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const u = Je(s) && vl(o);
    if (!this._isShallow) {
      const v = zs(r);
      if (!ls(a) && !zs(a) && (r = lt(r), a = lt(a)), !u && Bt(r) && !Bt(a))
        return v || (r.value = a), !0;
    }
    const c = u ? Number(o) < s.length : dt(s, o), d = Reflect.set(
      s,
      o,
      a,
      Bt(s) ? s : l
    );
    return s === lt(l) && (c ? Ks(a, r) && Ns(s, "set", o, a) : Ns(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = dt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Ns(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!fs(o) || !Xi.has(o)) && Ut(s, "has", o), a;
  }
  ownKeys(s) {
    return Ut(
      s,
      "iterate",
      Je(s) ? "length" : ro
    ), Reflect.ownKeys(s);
  }
}
class sc extends Zi {
  constructor(s = !1) {
    super(!0, s);
  }
  set(s, o) {
    return !0;
  }
  deleteProperty(s, o) {
    return !0;
  }
}
const oc = /* @__PURE__ */ new er(), nc = /* @__PURE__ */ new sc(), ac = /* @__PURE__ */ new er(!0);
const Ya = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function lc(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = lt(l), u = bo(r), c = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, v = l[e](...a), f = o ? Ya : s ? To : vs;
    return !s && Ut(
      r,
      "iterate",
      d ? Ja : ro
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
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ic(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, u = lt(r), c = lt(l);
      e || (Ks(l, c) && Ut(u, "get", l), Ut(u, "get", c));
      const { has: d } = $n(u), v = s ? Ya : e ? To : vs;
      if (d.call(u, l))
        return v(r.get(l));
      if (d.call(u, c))
        return v(r.get(c));
      r !== u && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ut(lt(l), "iterate", ro), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = lt(r), c = lt(l);
      return e || (Ks(l, c) && Ut(u, "has", l), Ut(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, d = lt(c), v = s ? Ya : e ? To : vs;
      return !e && Ut(d, "iterate", ro), c.forEach((f, p) => l.call(r, v(f), v(p), u));
    }
  };
  return It(
    o,
    e ? {
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear")
    } : {
      add(l) {
        !s && !ls(l) && !zs(l) && (l = lt(l));
        const r = lt(this);
        return $n(r).has.call(r, l) || (r.add(l), Ns(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !ls(r) && !zs(r) && (r = lt(r));
        const u = lt(this), { has: c, get: d } = $n(u);
        let v = c.call(u, l);
        v || (l = lt(l), v = c.call(u, l));
        const f = d.call(u, l);
        return u.set(l, r), v ? Ks(r, f) && Ns(u, "set", l, r) : Ns(u, "add", l, r), this;
      },
      delete(l) {
        const r = lt(this), { has: u, get: c } = $n(r);
        let d = u.call(r, l);
        d || (l = lt(l), d = u.call(r, l)), c && c.call(r, l);
        const v = r.delete(l);
        return d && Ns(r, "delete", l, void 0), v;
      },
      clear() {
        const l = lt(this), r = l.size !== 0, u = l.clear();
        return r && Ns(
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
    o[l] = lc(l, e, s);
  }), o;
}
function _l(e, s) {
  const o = ic(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    dt(o, l) && l in a ? o : a,
    l,
    r
  );
}
const rc = {
  get: /* @__PURE__ */ _l(!1, !1)
}, uc = {
  get: /* @__PURE__ */ _l(!1, !0)
}, cc = {
  get: /* @__PURE__ */ _l(!0, !1)
};
const tr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), dc = /* @__PURE__ */ new WeakMap();
function mc(e) {
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
function fc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mc(Uu(e));
}
function vo(e) {
  return zs(e) ? e : kl(
    e,
    !1,
    oc,
    rc,
    tr
  );
}
function vc(e) {
  return kl(
    e,
    !1,
    ac,
    uc,
    sr
  );
}
function Vn(e) {
  return kl(
    e,
    !0,
    nc,
    cc,
    or
  );
}
function kl(e, s, o, a, l) {
  if (!pt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = fc(e);
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
function uo(e) {
  return zs(e) ? uo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function zs(e) {
  return !!(e && e.__v_isReadonly);
}
function ls(e) {
  return !!(e && e.__v_isShallow);
}
function bl(e) {
  return e ? !!e.__v_raw : !1;
}
function lt(e) {
  const s = e && e.__v_raw;
  return s ? lt(s) : e;
}
function pc(e) {
  return !dt(e, "__v_skip") && Object.isExtensible(e) && Vi(e, "__v_skip", !0), e;
}
const vs = (e) => pt(e) ? vo(e) : e, To = (e) => pt(e) ? Vn(e) : e;
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return gc(e, !1);
}
function gc(e, s) {
  return Bt(e) ? e : new hc(e, s);
}
class hc {
  constructor(s, o) {
    this.dep = new wl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : lt(s), this._value = o ? s : vs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || ls(s) || zs(s);
    s = a ? s : lt(s), Ks(s, o) && (this._rawValue = s, this._value = a ? s : vs(s), this.dep.trigger());
  }
}
function Ye(e) {
  return Bt(e) ? e.value : e;
}
const yc = {
  get: (e, s, o) => s === "__v_raw" ? e : Ye(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Bt(l) && !Bt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function nr(e) {
  return uo(e) ? e : new Proxy(e, yc);
}
class wc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new wl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ln - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    yt !== this)
      return Hi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Ji(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function _c(e, s, o = !1) {
  let a, l;
  return Xe(e) ? a = e : (a = e.get, l = e.set), new wc(a, l, o);
}
const xn = {}, Fn = /* @__PURE__ */ new WeakMap();
let lo;
function kc(e, s = !1, o = lo) {
  if (o) {
    let a = Fn.get(o);
    a || Fn.set(o, a = []), a.push(e);
  }
}
function bc(e, s, o = ht) {
  const { immediate: a, deep: l, once: r, scheduler: u, augmentJob: c, call: d } = o, v = (E) => l ? E : ls(E) || l === !1 || l === 0 ? Ls(E, 1) : Ls(E);
  let f, p, w, y, _ = !1, x = !1;
  if (Bt(e) ? (p = () => e.value, _ = ls(e)) : uo(e) ? (p = () => v(e), _ = !0) : Je(e) ? (x = !0, _ = e.some((E) => uo(E) || ls(E)), p = () => e.map((E) => {
    if (Bt(E))
      return E.value;
    if (uo(E))
      return v(E);
    if (Xe(E))
      return d ? d(E, 2) : E();
  })) : Xe(e) ? s ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Us();
      try {
        w();
      } finally {
        As();
      }
    }
    const E = lo;
    lo = f;
    try {
      return d ? d(e, 3, [y]) : e(y);
    } finally {
      lo = E;
    }
  } : p = Cs, s && l) {
    const E = p, N = l === !0 ? 1 / 0 : l;
    p = () => Ls(E(), N);
  }
  const C = Ju(), S = () => {
    f.stop(), C && C.active && fl(C.effects, f);
  };
  if (r && s) {
    const E = s;
    s = (...N) => {
      E(...N), S();
    };
  }
  let A = x ? new Array(e.length).fill(xn) : xn;
  const I = (E) => {
    if (!(!(f.flags & 1) || !f.dirty && !E))
      if (s) {
        const N = f.run();
        if (l || _ || (x ? N.some((z, q) => Ks(z, A[q])) : Ks(N, A))) {
          w && w();
          const z = lo;
          lo = f;
          try {
            const q = [
              N,
              // pass undefined as the old value when it's changed for the first time
              A === xn ? void 0 : x && A[0] === xn ? [] : A,
              y
            ];
            A = N, d ? d(s, 3, q) : (
              // @ts-expect-error
              s(...q)
            );
          } finally {
            lo = z;
          }
        }
      } else
        f.run();
  };
  return c && c(I), f = new Gi(p), f.scheduler = u ? () => u(I, !1) : I, y = (E) => kc(E, !1, f), w = f.onStop = () => {
    const E = Fn.get(f);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const N of E) N();
      Fn.delete(f);
    }
  }, s ? a ? I(!0) : A = f.run() : u ? u(I.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Ls(e, s = 1 / 0, o) {
  if (s <= 0 || !pt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Bt(e))
    Ls(e.value, s, o);
  else if (Je(e))
    for (let a = 0; a < e.length; a++)
      Ls(e[a], s, o);
  else if (Ro(e) || bo(e))
    e.forEach((a) => {
      Ls(a, s, o);
    });
  else if (zi(e)) {
    for (const a in e)
      Ls(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ls(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    aa(l, s, o);
  }
}
function ps(e, s, o, a) {
  if (Xe(e)) {
    const l = gn(e, s, o, a);
    return l && Ui(l) && l.catch((r) => {
      aa(r, s, o);
    }), l;
  }
  if (Je(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ps(e[r], s, o, a));
    return l;
  }
}
function aa(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: u } = s && s.appContext.config || ht;
  if (s) {
    let c = s.parent;
    const d = s.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
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
      Us(), gn(r, null, 10, [
        e,
        d,
        v
      ]), As();
      return;
    }
  }
  $c(e, o, l, a, u);
}
function $c(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const qt = [];
let _s = -1;
const $o = [];
let js = null, wo = 0;
const ar = /* @__PURE__ */ Promise.resolve();
let Bn = null;
function Pt(e) {
  const s = Bn || ar;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Cc(e) {
  let s = _s + 1, o = qt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = qt[a], r = un(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function $l(e) {
  if (!(e.flags & 1)) {
    const s = un(e), o = qt[qt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= un(o) ? qt.push(e) : qt.splice(Cc(s), 0, e), e.flags |= 1, lr();
  }
}
function lr() {
  Bn || (Bn = ar.then(rr));
}
function xc(e) {
  Je(e) ? $o.push(...e) : js && e.id === -1 ? js.splice(wo + 1, 0, e) : e.flags & 1 || ($o.push(e), e.flags |= 1), lr();
}
function Fl(e, s, o = _s + 1) {
  for (; o < qt.length; o++) {
    const a = qt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      qt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function ir(e) {
  if ($o.length) {
    const s = [...new Set($o)].sort(
      (o, a) => un(o) - un(a)
    );
    if ($o.length = 0, js) {
      js.push(...s);
      return;
    }
    for (js = s, wo = 0; wo < js.length; wo++) {
      const o = js[wo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    js = null, wo = 0;
  }
}
const un = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function rr(e) {
  try {
    for (_s = 0; _s < qt.length; _s++) {
      const s = qt[_s];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), gn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; _s < qt.length; _s++) {
      const s = qt[_s];
      s && (s.flags &= -2);
    }
    _s = -1, qt.length = 0, ir(), Bn = null, (qt.length || $o.length) && rr();
  }
}
let Dt = null, ur = null;
function Wn(e) {
  const s = Dt;
  return Dt = e, ur = e && e.type.__scopeId || null, s;
}
function g(e, s = Dt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Hn(-1);
    const r = Wn(s);
    let u;
    try {
      u = e(...l);
    } finally {
      Wn(r), a._d && Hn(1);
    }
    return u;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function xt(e, s) {
  if (Dt === null)
    return e;
  const o = da(Dt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, u, c, d = ht] = s[l];
    r && (Xe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ls(u), a.push({
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
function to(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let u = 0; u < l.length; u++) {
    const c = l[u];
    r && (c.oldValue = r[u].value);
    let d = c.dir[a];
    d && (Us(), ps(d, o, 8, [
      e.el,
      c,
      e,
      s
    ]), As());
  }
}
const cr = Symbol("_vte"), dr = (e) => e.__isTeleport, Zo = (e) => e && (e.disabled || e.disabled === ""), Bl = (e) => e && (e.defer || e.defer === ""), Wl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Qa = (e, s) => {
  const o = e && e.to;
  return bt(o) ? s ? s(o) : null : o;
}, mr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, u, c, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: y, querySelector: _, createText: x, createComment: C }
    } = v, S = Zo(s.props);
    let { shapeFlag: A, children: I, dynamicChildren: E } = s;
    if (e == null) {
      const N = s.el = x(""), z = s.anchor = x("");
      y(N, o, a), y(z, o, a);
      const q = (W, te) => {
        A & 16 && f(
          I,
          W,
          te,
          l,
          r,
          u,
          c,
          d
        );
      }, O = () => {
        const W = s.target = Qa(s.props, _), te = fr(W, s, x, y);
        W && (u !== "svg" && Wl(W) ? u = "svg" : u !== "mathml" && Gl(W) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(W), S || (q(W, te), Nn(s, !1)));
      };
      S && (q(o, z), Nn(s, !0)), Bl(s.props) ? (s.el.__isMounted = !1, jt(() => {
        O(), delete s.el.__isMounted;
      }, r)) : O();
    } else {
      if (Bl(s.props) && e.el.__isMounted === !1) {
        jt(() => {
          mr.process(
            e,
            s,
            o,
            a,
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
      s.el = e.el, s.targetStart = e.targetStart;
      const N = s.anchor = e.anchor, z = s.target = e.target, q = s.targetAnchor = e.targetAnchor, O = Zo(e.props), W = O ? o : z, te = O ? N : q;
      if (u === "svg" || Wl(z) ? u = "svg" : (u === "mathml" || Gl(z)) && (u = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
        W,
        l,
        r,
        u,
        c
      ), El(e, s, !0)) : d || p(
        e,
        s,
        W,
        te,
        l,
        r,
        u,
        c,
        !1
      ), S)
        O ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : Sn(
          s,
          o,
          N,
          v,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const se = s.target = Qa(
          s.props,
          _
        );
        se && Sn(
          s,
          se,
          null,
          v,
          0
        );
      } else O && Sn(
        s,
        z,
        q,
        v,
        1
      );
      Nn(s, S);
    }
  },
  remove(e, s, o, { um: a, o: { remove: l } }, r) {
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
      const y = r || !Zo(w);
      for (let _ = 0; _ < c.length; _++) {
        const x = c[_];
        a(
          x,
          s,
          o,
          y,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: Sn,
  hydrate: Sc
};
function Sn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: u, anchor: c, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && a(u, s, o), (!p || Zo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        s,
        o,
        2
      );
  p && a(c, s, o);
}
function Sc(e, s, o, a, l, r, {
  o: { nextSibling: u, parentNode: c, querySelector: d, insert: v, createText: f }
}, p) {
  function w(x, C, S, A) {
    C.anchor = p(
      u(x),
      C,
      c(x),
      o,
      a,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = A;
  }
  const y = s.target = Qa(
    s.props,
    d
  ), _ = Zo(s.props);
  if (y) {
    const x = y._lpa || y.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          x,
          x && u(x)
        );
      else {
        s.anchor = u(e);
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              s.targetStart = C;
            else if (C.data === "teleport anchor") {
              s.targetAnchor = C, y._lpa = s.targetAnchor && u(s.targetAnchor);
              break;
            }
          }
          C = u(C);
        }
        s.targetAnchor || fr(y, s, f, v), p(
          x && u(x),
          s,
          y,
          o,
          a,
          l,
          r
        );
      }
    Nn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, u(e));
  return s.anchor && u(s.anchor);
}
const Ot = mr;
function Nn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function fr(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[cr] = r, e && (a(l, e), a(r, e)), r;
}
const Ps = Symbol("_leaveCb"), In = Symbol("_enterCb");
function vr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ot(() => {
    e.isMounted = !0;
  }), ra(() => {
    e.isUnmounting = !0;
  }), e;
}
const ns = [Function, Array], pr = {
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
}, gr = (e) => {
  const s = e.subTree;
  return s.component ? gr(s.component) : s;
}, Ic = {
  name: "BaseTransition",
  props: pr,
  setup(e, { slots: s }) {
    const o = Ml(), a = vr();
    return () => {
      const l = s.default && Cl(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = hr(l), u = lt(e), { mode: c } = u;
      if (a.isLeaving)
        return Oa(r);
      const d = jl(r);
      if (!d)
        return Oa(r);
      let v = cn(
        d,
        u,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== zt && mo(d, v);
      let f = o.subTree && jl(o.subTree);
      if (f && f.type !== zt && !io(f, d) && gr(o).type !== zt) {
        let p = cn(
          f,
          u,
          a,
          o
        );
        if (mo(f, p), c === "out-in" && d.type !== zt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Oa(r);
        c === "in-out" && d.type !== zt ? p.delayLeave = (w, y, _) => {
          const x = yr(
            a,
            f
          );
          x[String(f.key)] = f, w[Ps] = () => {
            y(), w[Ps] = void 0, delete v.delayedLeave, f = void 0;
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
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== zt) {
        s = o;
        break;
      }
  }
  return s;
}
const Ec = Ic;
function yr(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function cn(e, s, o, a, l) {
  const {
    appear: r,
    mode: u,
    persisted: c = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: y,
    onAfterLeave: _,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: A,
    onAppearCancelled: I
  } = s, E = String(e.key), N = yr(o, e), z = (W, te) => {
    W && ps(
      W,
      a,
      9,
      te
    );
  }, q = (W, te) => {
    const se = te[1];
    z(W, te), Je(W) ? W.every((ce) => ce.length <= 1) && se() : W.length <= 1 && se();
  }, O = {
    mode: u,
    persisted: c,
    beforeEnter(W) {
      let te = d;
      if (!o.isMounted)
        if (r)
          te = C || d;
        else
          return;
      W[Ps] && W[Ps](
        !0
        /* cancelled */
      );
      const se = N[E];
      se && io(e, se) && se.el[Ps] && se.el[Ps](), z(te, [W]);
    },
    enter(W) {
      let te = v, se = f, ce = p;
      if (!o.isMounted)
        if (r)
          te = S || v, se = A || f, ce = I || p;
        else
          return;
      let he = !1;
      const ae = W[In] = (Q) => {
        he || (he = !0, Q ? z(ce, [W]) : z(se, [W]), O.delayedLeave && O.delayedLeave(), W[In] = void 0);
      };
      te ? q(te, [W, ae]) : ae();
    },
    leave(W, te) {
      const se = String(e.key);
      if (W[In] && W[In](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return te();
      z(w, [W]);
      let ce = !1;
      const he = W[Ps] = (ae) => {
        ce || (ce = !0, te(), ae ? z(x, [W]) : z(_, [W]), W[Ps] = void 0, N[se] === e && delete N[se]);
      };
      N[se] = e, y ? q(y, [W, he]) : he();
    },
    clone(W) {
      const te = cn(
        W,
        s,
        o,
        a,
        l
      );
      return l && l(te), te;
    }
  };
  return O;
}
function Oa(e) {
  if (la(e))
    return e = Qs(e), e.children = null, e;
}
function jl(e) {
  if (!la(e))
    return dr(e.type) && e.children ? hr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Xe(o.default))
      return o.default();
  }
}
function mo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, mo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Cl(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    const c = o == null ? u.key : String(o) + String(u.key != null ? u.key : r);
    u.type === j ? (u.patchFlag & 128 && l++, a = a.concat(
      Cl(u.children, s, c)
    )) : (s || u.type !== zt) && a.push(c != null ? Qs(u, { key: c }) : u);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Se(e, s) {
  return Xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    It({ name: e.name }, s, { setup: e })
  ) : e;
}
function wr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Gn = /* @__PURE__ */ new WeakMap();
function en(e, s, o, a, l = !1) {
  if (Je(e)) {
    e.forEach(
      (_, x) => en(
        _,
        s && (Je(s) ? s[x] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (Co(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && en(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? da(a.component) : a.el, u = l ? null : r, { i: c, r: d } = e, v = s && s.r, f = c.refs === ht ? c.refs = {} : c.refs, p = c.setupState, w = lt(p), y = p === ht ? Oi : (_) => dt(w, _);
  if (v != null && v !== d) {
    if (Hl(s), bt(v))
      f[v] = null, y(v) && (p[v] = null);
    else if (Bt(v)) {
      v.value = null;
      const _ = s;
      _.k && (f[_.k] = null);
    }
  }
  if (Xe(d))
    gn(d, c, 12, [u, f]);
  else {
    const _ = bt(d), x = Bt(d);
    if (_ || x) {
      const C = () => {
        if (e.f) {
          const S = _ ? y(d) ? p[d] : f[d] : d.value;
          if (l)
            Je(S) && fl(S, r);
          else if (Je(S))
            S.includes(r) || S.push(r);
          else if (_)
            f[d] = [r], y(d) && (p[d] = f[d]);
          else {
            const A = [r];
            d.value = A, e.k && (f[e.k] = A);
          }
        } else _ ? (f[d] = u, y(d) && (p[d] = u)) : x && (d.value = u, e.k && (f[e.k] = u));
      };
      if (u) {
        const S = () => {
          C(), Gn.delete(e);
        };
        S.id = -1, Gn.set(e, S), jt(S, o);
      } else
        Hl(e), C();
    }
  }
}
function Hl(e) {
  const s = Gn.get(e);
  s && (s.flags |= 8, Gn.delete(e));
}
oa().requestIdleCallback;
oa().cancelIdleCallback;
const Co = (e) => !!e.type.__asyncLoader, la = (e) => e.type.__isKeepAlive;
function Tc(e, s) {
  _r(e, "a", s);
}
function Mc(e, s) {
  _r(e, "da", s);
}
function _r(e, s, o = Vt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ia(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      la(l.parent.vnode) && Pc(a, s, o, l), l = l.parent;
  }
}
function Pc(e, s, o, a) {
  const l = ia(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  No(() => {
    fl(a[s], l);
  }, o);
}
function ia(e, s, o = Vt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...u) => {
      Us();
      const c = hn(o), d = ps(s, o, e, u);
      return c(), As(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Vs = (e) => (s, o = Vt) => {
  (!fn || e === "sp") && ia(e, (...a) => s(...a), o);
}, Rc = Vs("bm"), ot = Vs("m"), Nc = Vs(
  "bu"
), kr = Vs("u"), ra = Vs(
  "bum"
), No = Vs("um"), Lc = Vs(
  "sp"
), Dc = Vs("rtg"), Oc = Vs("rtc");
function Uc(e, s = Vt) {
  ia("ec", e, s);
}
const Ac = "components", br = Symbol.for("v-ndc");
function xl(e) {
  return bt(e) ? zc(Ac, e, !1) || e : e || br;
}
function zc(e, s, o = !0, a = !1) {
  const l = Dt || Vt;
  if (l) {
    const r = l.type;
    {
      const c = Id(
        r,
        !1
      );
      if (c && (c === s || c === rs(s) || c === ta(rs(s))))
        return r;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      ql(l[e] || r[e], s) || // global registration
      ql(l.appContext[e], s)
    );
    return !u && a ? r : u;
  }
}
function ql(e, s) {
  return e && (e[s] || e[rs(s)] || e[ta(rs(s))]);
}
function be(e, s, o, a) {
  let l;
  const r = o, u = Je(e);
  if (u || bt(e)) {
    const c = u && uo(e);
    let d = !1, v = !1;
    c && (d = !ls(e), v = zs(e), e = na(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = s(
        d ? v ? To(vs(e[f])) : vs(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let c = 0; c < e; c++)
      l[c] = s(c + 1, c, void 0, r);
  } else if (pt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (c, d) => s(c, d, void 0, r)
      );
    else {
      const c = Object.keys(e);
      l = new Array(c.length);
      for (let d = 0, v = c.length; d < v; d++) {
        const f = c[d];
        l[d] = s(e[f], f, d, r);
      }
    }
  else
    l = [];
  return l;
}
function ss(e, s) {
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (Je(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function tt(e, s, o = {}, a, l) {
  if (Dt.ce || Dt.parent && Co(Dt.parent) && Dt.parent.ce) {
    const v = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), L(
      j,
      null,
      [k("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const u = r && $r(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, d = L(
    j,
    {
      key: (c && !fs(c) ? c : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!u && a ? "_fb" : "")
    },
    u || (a ? a() : []),
    u && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function $r(e) {
  return e.some((s) => mn(s) ? !(s.type === zt || s.type === j && !$r(s.children)) : !0) ? e : null;
}
const Xa = (e) => e ? Br(e) ? da(e) : Xa(e.parent) : null, tn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ It(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xa(e.parent),
    $root: (e) => Xa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $l(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Qc.bind(e)
  })
), Ua = (e, s) => e !== ht && !e.__isScriptSetup && dt(e, s), Vc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: u, type: c, appContext: d } = e;
    if (s[0] !== "$") {
      const w = u[s];
      if (w !== void 0)
        switch (w) {
          case 1:
            return a[s];
          case 2:
            return l[s];
          case 4:
            return o[s];
          case 3:
            return r[s];
        }
      else {
        if (Ua(a, s))
          return u[s] = 1, a[s];
        if (l !== ht && dt(l, s))
          return u[s] = 2, l[s];
        if (dt(r, s))
          return u[s] = 3, r[s];
        if (o !== ht && dt(o, s))
          return u[s] = 4, o[s];
        Za && (u[s] = 0);
      }
    }
    const v = tn[s];
    let f, p;
    if (v)
      return s === "$attrs" && Ut(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[s])
    )
      return f;
    if (o !== ht && dt(o, s))
      return u[s] = 4, o[s];
    if (
      // global properties
      p = d.config.globalProperties, dt(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Ua(l, s) ? (l[s] = o, !0) : a !== ht && dt(a, s) ? (a[s] = o, !0) : dt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: u }
  }, c) {
    let d;
    return !!(o[c] || e !== ht && c[0] !== "$" && dt(e, c) || Ua(s, c) || dt(r, c) || dt(a, c) || dt(tn, c) || dt(l.config.globalProperties, c) || (d = u.__cssModules) && d[c]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : dt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Kl(e) {
  return Je(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Za = !0;
function Fc(e) {
  const s = xr(e), o = e.proxy, a = e.ctx;
  Za = !1, s.beforeCreate && Jl(s.beforeCreate, e, "bc");
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
    beforeUpdate: y,
    updated: _,
    activated: x,
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: A,
    destroyed: I,
    unmounted: E,
    render: N,
    renderTracked: z,
    renderTriggered: q,
    errorCaptured: O,
    serverPrefetch: W,
    // public API
    expose: te,
    inheritAttrs: se,
    // assets
    components: ce,
    directives: he,
    filters: ae
  } = s;
  if (v && Bc(v, a, null), u)
    for (const Pe in u) {
      const ie = u[Pe];
      Xe(ie) && (a[Pe] = ie.bind(o));
    }
  if (l) {
    const Pe = l.call(o, o);
    pt(Pe) && (e.data = vo(Pe));
  }
  if (Za = !0, r)
    for (const Pe in r) {
      const ie = r[Pe], ge = Xe(ie) ? ie.bind(o, o) : Xe(ie.get) ? ie.get.bind(o, o) : Cs, re = !Xe(ie) && Xe(ie.set) ? ie.set.bind(o) : Cs, Ae = U({
        get: ge,
        set: re
      });
      Object.defineProperty(a, Pe, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (oe) => Ae.value = oe
      });
    }
  if (c)
    for (const Pe in c)
      Cr(c[Pe], a, o, Pe);
  if (d) {
    const Pe = Xe(d) ? d.call(o) : d;
    Reflect.ownKeys(Pe).forEach((ie) => {
      Kc(ie, Pe[ie]);
    });
  }
  f && Jl(f, e, "c");
  function me(Pe, ie) {
    Je(ie) ? ie.forEach((ge) => Pe(ge.bind(o))) : ie && Pe(ie.bind(o));
  }
  if (me(Rc, p), me(ot, w), me(Nc, y), me(kr, _), me(Tc, x), me(Mc, C), me(Uc, O), me(Oc, z), me(Dc, q), me(ra, A), me(No, E), me(Lc, W), Je(te))
    if (te.length) {
      const Pe = e.exposed || (e.exposed = {});
      te.forEach((ie) => {
        Object.defineProperty(Pe, ie, {
          get: () => o[ie],
          set: (ge) => o[ie] = ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === Cs && (e.render = N), se != null && (e.inheritAttrs = se), ce && (e.components = ce), he && (e.directives = he), W && wr(e);
}
function Bc(e, s, o = Cs) {
  Je(e) && (e = el(e));
  for (const a in e) {
    const l = e[a];
    let r;
    pt(l) ? "default" in l ? r = Ln(
      l.from || a,
      l.default,
      !0
    ) : r = Ln(l.from || a) : r = Ln(l), Bt(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (u) => r.value = u
    }) : s[a] = r;
  }
}
function Jl(e, s, o) {
  ps(
    Je(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Cr(e, s, o, a) {
  let l = a.includes(".") ? Er(o, a) : () => o[a];
  if (bt(e)) {
    const r = s[e];
    Xe(r) && _t(l, r);
  } else if (Xe(e))
    _t(l, e.bind(o));
  else if (pt(e))
    if (Je(e))
      e.forEach((r) => Cr(r, s, o, a));
    else {
      const r = Xe(e.handler) ? e.handler.bind(o) : s[e.handler];
      Xe(r) && _t(l, r, e);
    }
}
function xr(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: u }
  } = e.appContext, c = r.get(s);
  let d;
  return c ? d = c : !l.length && !o && !a ? d = s : (d = {}, l.length && l.forEach(
    (v) => jn(d, v, u, !0)
  ), jn(d, s, u)), pt(s) && r.set(s, d), d;
}
function jn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && jn(e, r, o, !0), l && l.forEach(
    (u) => jn(e, u, o, !0)
  );
  for (const u in s)
    if (!(a && u === "expose")) {
      const c = Wc[u] || o && o[u];
      e[u] = c ? c(e[u], s[u]) : s[u];
    }
  return e;
}
const Wc = {
  data: Yl,
  props: Ql,
  emits: Ql,
  // objects
  methods: Ko,
  computed: Ko,
  // lifecycle
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  // assets
  components: Ko,
  directives: Ko,
  // watch
  watch: jc,
  // provide / inject
  provide: Yl,
  inject: Gc
};
function Yl(e, s) {
  return s ? e ? function() {
    return It(
      Xe(e) ? e.call(this, this) : e,
      Xe(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Gc(e, s) {
  return Ko(el(e), el(s));
}
function el(e) {
  if (Je(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function Gt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Ko(e, s) {
  return e ? It(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Ql(e, s) {
  return e ? Je(e) && Je(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : It(
    /* @__PURE__ */ Object.create(null),
    Kl(e),
    Kl(s ?? {})
  ) : s;
}
function jc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = It(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Gt(e[a], s[a]);
  return o;
}
function Sr() {
  return {
    app: null,
    config: {
      isNativeTag: Oi,
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
let Hc = 0;
function qc(e, s) {
  return function(a, l = null) {
    Xe(a) || (a = It({}, a)), l != null && !pt(l) && (l = null);
    const r = Sr(), u = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const v = r.app = {
      _uid: Hc++,
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
        return u.has(f) || (f && Xe(f.install) ? (u.add(f), f.install(v, ...p)) : Xe(f) && (u.add(f), f(v, ...p))), v;
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
          const y = v._ceVNode || k(a, l);
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, f, w), d = !0, v._container = f, f.__vue_app__ = v, da(y.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        d && (ps(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, p) {
        return r.provides[f] = p, v;
      },
      runWithContext(f) {
        const p = xo;
        xo = v;
        try {
          return f();
        } finally {
          xo = p;
        }
      }
    };
    return v;
  };
}
let xo = null;
function Kc(e, s) {
  if (Vt) {
    let o = Vt.provides;
    const a = Vt.parent && Vt.parent.provides;
    a === o && (o = Vt.provides = Object.create(a)), o[e] = s;
  }
}
function Ln(e, s, o = !1) {
  const a = Ml();
  if (a || xo) {
    let l = xo ? xo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Xe(s) ? s.call(a && a.proxy) : s;
  }
}
const Jc = Symbol.for("v-scx"), Yc = () => Ln(Jc);
function _t(e, s, o) {
  return Ir(e, s, o);
}
function Ir(e, s, o = ht) {
  const { immediate: a, deep: l, flush: r, once: u } = o, c = It({}, o), d = s && a || !s && r !== "post";
  let v;
  if (fn) {
    if (r === "sync") {
      const y = Yc();
      v = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!d) {
      const y = () => {
      };
      return y.stop = Cs, y.resume = Cs, y.pause = Cs, y;
    }
  }
  const f = Vt;
  c.call = (y, _, x) => ps(y, f, _, x);
  let p = !1;
  r === "post" ? c.scheduler = (y) => {
    jt(y, f && f.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (y, _) => {
    _ ? y() : $l(y);
  }), c.augmentJob = (y) => {
    s && (y.flags |= 4), p && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const w = bc(e, s, c);
  return fn && (v ? v.push(w) : d && w()), w;
}
function Qc(e, s, o) {
  const a = this.proxy, l = bt(e) ? e.includes(".") ? Er(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Xe(s) ? r = s : (r = s.handler, o = s);
  const u = hn(this), c = Ir(l, r.bind(a), o);
  return u(), c;
}
function Er(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Xc = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${rs(s)}Modifiers`] || e[`${Zs(s)}Modifiers`];
function Zc(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ht;
  let l = o;
  const r = s.startsWith("update:"), u = r && Xc(a, s.slice(7));
  u && (u.trim && (l = o.map((f) => bt(f) ? f.trim() : f)), u.number && (l = o.map(sa)));
  let c, d = a[c = Pa(s)] || // also try camelCase event handler (#2249)
  a[c = Pa(rs(s))];
  !d && r && (d = a[c = Pa(Zs(s))]), d && ps(
    d,
    e,
    6,
    l
  );
  const v = a[c + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ps(
      v,
      e,
      6,
      l
    );
  }
}
const ed = /* @__PURE__ */ new WeakMap();
function Tr(e, s, o = !1) {
  const a = o ? ed : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let u = {}, c = !1;
  if (!Xe(e)) {
    const d = (v) => {
      const f = Tr(v, s, !0);
      f && (c = !0, It(u, f));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (pt(e) && a.set(e, null), null) : (Je(r) ? r.forEach((d) => u[d] = null) : It(u, r), pt(e) && a.set(e, u), u);
}
function ua(e, s) {
  return !e || !Zn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), dt(e, s[0].toLowerCase() + s.slice(1)) || dt(e, Zs(s)) || dt(e, s));
}
function Xl(e) {
  const {
    type: s,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: u,
    attrs: c,
    emit: d,
    render: v,
    renderCache: f,
    props: p,
    data: w,
    setupState: y,
    ctx: _,
    inheritAttrs: x
  } = e, C = Wn(e);
  let S, A;
  try {
    if (o.shapeFlag & 4) {
      const E = l || a, N = E;
      S = bs(
        v.call(
          N,
          E,
          f,
          p,
          y,
          w,
          _
        )
      ), A = c;
    } else {
      const E = s;
      S = bs(
        E.length > 1 ? E(
          p,
          { attrs: c, slots: u, emit: d }
        ) : E(
          p,
          null
        )
      ), A = s.props ? c : td(c);
    }
  } catch (E) {
    sn.length = 0, aa(E, e, 1), S = k(zt);
  }
  let I = S;
  if (A && x !== !1) {
    const E = Object.keys(A), { shapeFlag: N } = I;
    E.length && N & 7 && (r && E.some(ml) && (A = sd(
      A,
      r
    )), I = Qs(I, A, !1, !0));
  }
  return o.dirs && (I = Qs(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && mo(I, o.transition), S = I, Wn(C), S;
}
const td = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Zn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, sd = (e, s) => {
  const o = {};
  for (const a in e)
    (!ml(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function od(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: u, children: c, patchFlag: d } = s, v = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Zl(a, u, v) : !!u;
    if (d & 8) {
      const f = s.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (u[w] !== a[w] && !ua(v, w))
          return !0;
      }
    }
  } else
    return (l || c) && (!c || !c.$stable) ? !0 : a === u ? !1 : a ? u ? Zl(a, u, v) : !0 : !!u;
  return !1;
}
function Zl(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !ua(o, r))
      return !0;
  }
  return !1;
}
function nd({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Mr = {}, Pr = () => Object.create(Mr), Rr = (e) => Object.getPrototypeOf(e) === Mr;
function ad(e, s, o, a = !1) {
  const l = {}, r = Pr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Nr(e, s, l, r);
  for (const u in e.propsOptions[0])
    u in l || (l[u] = void 0);
  o ? e.props = a ? l : vc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function ld(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: u }
  } = e, c = lt(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let w = f[p];
        if (ua(e.emitsOptions, w))
          continue;
        const y = s[w];
        if (d)
          if (dt(r, w))
            y !== r[w] && (r[w] = y, v = !0);
          else {
            const _ = rs(w);
            l[_] = tl(
              d,
              c,
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
    Nr(e, s, l, r) && (v = !0);
    let f;
    for (const p in c)
      (!s || // for camelCase
      !dt(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Zs(p)) === p || !dt(s, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = tl(
        d,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== c)
      for (const p in r)
        (!s || !dt(s, p)) && (delete r[p], v = !0);
  }
  v && Ns(e.attrs, "set", "");
}
function Nr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (s)
    for (let d in s) {
      if (Yo(d))
        continue;
      const v = s[d];
      let f;
      l && dt(l, f = rs(d)) ? !r || !r.includes(f) ? o[f] = v : (c || (c = {}))[f] = v : ua(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, u = !0);
    }
  if (r) {
    const d = lt(o), v = c || ht;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      o[p] = tl(
        l,
        d,
        p,
        v[p],
        e,
        !dt(v, p)
      );
    }
  }
  return u;
}
function tl(e, s, o, a, l, r) {
  const u = e[o];
  if (u != null) {
    const c = dt(u, "default");
    if (c && a === void 0) {
      const d = u.default;
      if (u.type !== Function && !u.skipFactory && Xe(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          a = v[o];
        else {
          const f = hn(l);
          a = v[o] = d.call(
            null,
            s
          ), f();
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
    ] && (a === "" || a === Zs(o)) && (a = !0));
  }
  return a;
}
const id = /* @__PURE__ */ new WeakMap();
function Lr(e, s, o = !1) {
  const a = o ? id : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, u = {}, c = [];
  let d = !1;
  if (!Xe(e)) {
    const f = (p) => {
      d = !0;
      const [w, y] = Lr(p, s, !0);
      It(u, w), y && c.push(...y);
    };
    !o && s.mixins.length && s.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return pt(e) && a.set(e, ko), ko;
  if (Je(r))
    for (let f = 0; f < r.length; f++) {
      const p = rs(r[f]);
      ei(p) && (u[p] = ht);
    }
  else if (r)
    for (const f in r) {
      const p = rs(f);
      if (ei(p)) {
        const w = r[f], y = u[p] = Je(w) || Xe(w) ? { type: w } : It({}, w), _ = y.type;
        let x = !1, C = !0;
        if (Je(_))
          for (let S = 0; S < _.length; ++S) {
            const A = _[S], I = Xe(A) && A.name;
            if (I === "Boolean") {
              x = !0;
              break;
            } else I === "String" && (C = !1);
          }
        else
          x = Xe(_) && _.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = x, y[
          1
          /* shouldCastTrue */
        ] = C, (x || dt(y, "default")) && c.push(p);
      }
    }
  const v = [u, c];
  return pt(e) && a.set(e, v), v;
}
function ei(e) {
  return e[0] !== "$" && !Yo(e);
}
const Sl = (e) => e === "_" || e === "_ctx" || e === "$stable", Il = (e) => Je(e) ? e.map(bs) : [bs(e)], rd = (e, s, o) => {
  if (s._n)
    return s;
  const a = g((...l) => Il(s(...l)), o);
  return a._c = !1, a;
}, Dr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (Sl(l)) continue;
    const r = e[l];
    if (Xe(r))
      s[l] = rd(l, r, a);
    else if (r != null) {
      const u = Il(r);
      s[l] = () => u;
    }
  }
}, Or = (e, s) => {
  const o = Il(s);
  e.slots.default = () => o;
}, Ur = (e, s, o) => {
  for (const a in s)
    (o || !Sl(a)) && (e[a] = s[a]);
}, ud = (e, s, o) => {
  const a = e.slots = Pr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Ur(a, s, o), o && Vi(a, "_", l, !0)) : Dr(s, a);
  } else s && Or(e, s);
}, cd = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, u = ht;
  if (a.shapeFlag & 32) {
    const c = s._;
    c ? o && c === 1 ? r = !1 : Ur(l, s, o) : (r = !s.$stable, Dr(s, l)), u = s;
  } else s && (Or(e, s), u = { default: 1 });
  if (r)
    for (const c in l)
      !Sl(c) && u[c] == null && delete l[c];
}, jt = pd;
function dd(e) {
  return md(e);
}
function md(e, s) {
  const o = oa();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: u,
    createText: c,
    createComment: d,
    setText: v,
    setElementText: f,
    parentNode: p,
    nextSibling: w,
    setScopeId: y = Cs,
    insertStaticContent: _
  } = e, x = (F, B, K, _e = null, ke = null, $e = null, Te = void 0, Ne = null, Re = !!B.dynamicChildren) => {
    if (F === B)
      return;
    F && !io(F, B) && (_e = M(F), oe(F, ke, $e, !0), F = null), B.patchFlag === -2 && (Re = !1, B.dynamicChildren = null);
    const { type: Ee, ref: Ge, shapeFlag: Oe } = B;
    switch (Ee) {
      case ca:
        C(F, B, K, _e);
        break;
      case zt:
        S(F, B, K, _e);
        break;
      case za:
        F == null && A(B, K, _e, Te);
        break;
      case j:
        ce(
          F,
          B,
          K,
          _e,
          ke,
          $e,
          Te,
          Ne,
          Re
        );
        break;
      default:
        Oe & 1 ? N(
          F,
          B,
          K,
          _e,
          ke,
          $e,
          Te,
          Ne,
          Re
        ) : Oe & 6 ? he(
          F,
          B,
          K,
          _e,
          ke,
          $e,
          Te,
          Ne,
          Re
        ) : (Oe & 64 || Oe & 128) && Ee.process(
          F,
          B,
          K,
          _e,
          ke,
          $e,
          Te,
          Ne,
          Re,
          ze
        );
    }
    Ge != null && ke ? en(Ge, F && F.ref, $e, B || F, !B) : Ge == null && F && F.ref != null && en(F.ref, null, $e, F, !0);
  }, C = (F, B, K, _e) => {
    if (F == null)
      a(
        B.el = c(B.children),
        K,
        _e
      );
    else {
      const ke = B.el = F.el;
      B.children !== F.children && v(ke, B.children);
    }
  }, S = (F, B, K, _e) => {
    F == null ? a(
      B.el = d(B.children || ""),
      K,
      _e
    ) : B.el = F.el;
  }, A = (F, B, K, _e) => {
    [F.el, F.anchor] = _(
      F.children,
      B,
      K,
      _e,
      F.el,
      F.anchor
    );
  }, I = ({ el: F, anchor: B }, K, _e) => {
    let ke;
    for (; F && F !== B; )
      ke = w(F), a(F, K, _e), F = ke;
    a(B, K, _e);
  }, E = ({ el: F, anchor: B }) => {
    let K;
    for (; F && F !== B; )
      K = w(F), l(F), F = K;
    l(B);
  }, N = (F, B, K, _e, ke, $e, Te, Ne, Re) => {
    if (B.type === "svg" ? Te = "svg" : B.type === "math" && (Te = "mathml"), F == null)
      z(
        B,
        K,
        _e,
        ke,
        $e,
        Te,
        Ne,
        Re
      );
    else {
      const Ee = F.el && F.el._isVueCE ? F.el : null;
      try {
        Ee && Ee._beginPatch(), W(
          F,
          B,
          ke,
          $e,
          Te,
          Ne,
          Re
        );
      } finally {
        Ee && Ee._endPatch();
      }
    }
  }, z = (F, B, K, _e, ke, $e, Te, Ne) => {
    let Re, Ee;
    const { props: Ge, shapeFlag: Oe, transition: we, dirs: ee } = F;
    if (Re = F.el = u(
      F.type,
      $e,
      Ge && Ge.is,
      Ge
    ), Oe & 8 ? f(Re, F.children) : Oe & 16 && O(
      F.children,
      Re,
      null,
      _e,
      ke,
      Aa(F, $e),
      Te,
      Ne
    ), ee && to(F, null, _e, "created"), q(Re, F, F.scopeId, Te, _e), Ge) {
      for (const D in Ge)
        D !== "value" && !Yo(D) && r(Re, D, null, Ge[D], $e, _e);
      "value" in Ge && r(Re, "value", null, Ge.value, $e), (Ee = Ge.onVnodeBeforeMount) && hs(Ee, _e, F);
    }
    ee && to(F, null, _e, "beforeMount");
    const We = fd(ke, we);
    We && we.beforeEnter(Re), a(Re, B, K), ((Ee = Ge && Ge.onVnodeMounted) || We || ee) && jt(() => {
      Ee && hs(Ee, _e, F), We && we.enter(Re), ee && to(F, null, _e, "mounted");
    }, ke);
  }, q = (F, B, K, _e, ke) => {
    if (K && y(F, K), _e)
      for (let $e = 0; $e < _e.length; $e++)
        y(F, _e[$e]);
    if (ke) {
      let $e = ke.subTree;
      if (B === $e || zr($e.type) && ($e.ssContent === B || $e.ssFallback === B)) {
        const Te = ke.vnode;
        q(
          F,
          Te,
          Te.scopeId,
          Te.slotScopeIds,
          ke.parent
        );
      }
    }
  }, O = (F, B, K, _e, ke, $e, Te, Ne, Re = 0) => {
    for (let Ee = Re; Ee < F.length; Ee++) {
      const Ge = F[Ee] = Ne ? Hs(F[Ee]) : bs(F[Ee]);
      x(
        null,
        Ge,
        B,
        K,
        _e,
        ke,
        $e,
        Te,
        Ne
      );
    }
  }, W = (F, B, K, _e, ke, $e, Te) => {
    const Ne = B.el = F.el;
    let { patchFlag: Re, dynamicChildren: Ee, dirs: Ge } = B;
    Re |= F.patchFlag & 16;
    const Oe = F.props || ht, we = B.props || ht;
    let ee;
    if (K && so(K, !1), (ee = we.onVnodeBeforeUpdate) && hs(ee, K, B, F), Ge && to(B, F, K, "beforeUpdate"), K && so(K, !0), (Oe.innerHTML && we.innerHTML == null || Oe.textContent && we.textContent == null) && f(Ne, ""), Ee ? te(
      F.dynamicChildren,
      Ee,
      Ne,
      K,
      _e,
      Aa(B, ke),
      $e
    ) : Te || ie(
      F,
      B,
      Ne,
      null,
      K,
      _e,
      Aa(B, ke),
      $e,
      !1
    ), Re > 0) {
      if (Re & 16)
        se(Ne, Oe, we, K, ke);
      else if (Re & 2 && Oe.class !== we.class && r(Ne, "class", null, we.class, ke), Re & 4 && r(Ne, "style", Oe.style, we.style, ke), Re & 8) {
        const We = B.dynamicProps;
        for (let D = 0; D < We.length; D++) {
          const X = We[D], J = Oe[X], pe = we[X];
          (pe !== J || X === "value") && r(Ne, X, J, pe, ke, K);
        }
      }
      Re & 1 && F.children !== B.children && f(Ne, B.children);
    } else !Te && Ee == null && se(Ne, Oe, we, K, ke);
    ((ee = we.onVnodeUpdated) || Ge) && jt(() => {
      ee && hs(ee, K, B, F), Ge && to(B, F, K, "updated");
    }, _e);
  }, te = (F, B, K, _e, ke, $e, Te) => {
    for (let Ne = 0; Ne < B.length; Ne++) {
      const Re = F[Ne], Ee = B[Ne], Ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Re.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !io(Re, Ee) || // - In the case of a component, it could contain anything.
        Re.shapeFlag & 198) ? p(Re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          K
        )
      );
      x(
        Re,
        Ee,
        Ge,
        null,
        _e,
        ke,
        $e,
        Te,
        !0
      );
    }
  }, se = (F, B, K, _e, ke) => {
    if (B !== K) {
      if (B !== ht)
        for (const $e in B)
          !Yo($e) && !($e in K) && r(
            F,
            $e,
            B[$e],
            null,
            ke,
            _e
          );
      for (const $e in K) {
        if (Yo($e)) continue;
        const Te = K[$e], Ne = B[$e];
        Te !== Ne && $e !== "value" && r(F, $e, Ne, Te, ke, _e);
      }
      "value" in K && r(F, "value", B.value, K.value, ke);
    }
  }, ce = (F, B, K, _e, ke, $e, Te, Ne, Re) => {
    const Ee = B.el = F ? F.el : c(""), Ge = B.anchor = F ? F.anchor : c("");
    let { patchFlag: Oe, dynamicChildren: we, slotScopeIds: ee } = B;
    ee && (Ne = Ne ? Ne.concat(ee) : ee), F == null ? (a(Ee, K, _e), a(Ge, K, _e), O(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      K,
      Ge,
      ke,
      $e,
      Te,
      Ne,
      Re
    )) : Oe > 0 && Oe & 64 && we && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    F.dynamicChildren ? (te(
      F.dynamicChildren,
      we,
      K,
      ke,
      $e,
      Te,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || ke && B === ke.subTree) && El(
      F,
      B,
      !0
      /* shallow */
    )) : ie(
      F,
      B,
      K,
      Ge,
      ke,
      $e,
      Te,
      Ne,
      Re
    );
  }, he = (F, B, K, _e, ke, $e, Te, Ne, Re) => {
    B.slotScopeIds = Ne, F == null ? B.shapeFlag & 512 ? ke.ctx.activate(
      B,
      K,
      _e,
      Te,
      Re
    ) : ae(
      B,
      K,
      _e,
      ke,
      $e,
      Te,
      Re
    ) : Q(F, B, Re);
  }, ae = (F, B, K, _e, ke, $e, Te) => {
    const Ne = F.component = bd(
      F,
      _e,
      ke
    );
    if (la(F) && (Ne.ctx.renderer = ze), $d(Ne, !1, Te), Ne.asyncDep) {
      if (ke && ke.registerDep(Ne, me, Te), !F.el) {
        const Re = Ne.subTree = k(zt);
        S(null, Re, B, K), F.placeholder = Re.el;
      }
    } else
      me(
        Ne,
        F,
        B,
        K,
        ke,
        $e,
        Te
      );
  }, Q = (F, B, K) => {
    const _e = B.component = F.component;
    if (od(F, B, K))
      if (_e.asyncDep && !_e.asyncResolved) {
        Pe(_e, B, K);
        return;
      } else
        _e.next = B, _e.update();
    else
      B.el = F.el, _e.vnode = B;
  }, me = (F, B, K, _e, ke, $e, Te) => {
    const Ne = () => {
      if (F.isMounted) {
        let { next: Oe, bu: we, u: ee, parent: We, vnode: D } = F;
        {
          const ue = Ar(F);
          if (ue) {
            Oe && (Oe.el = D.el, Pe(F, Oe, Te)), ue.asyncDep.then(() => {
              F.isUnmounted || Ne();
            });
            return;
          }
        }
        let X = Oe, J;
        so(F, !1), Oe ? (Oe.el = D.el, Pe(F, Oe, Te)) : Oe = D, we && Rn(we), (J = Oe.props && Oe.props.onVnodeBeforeUpdate) && hs(J, We, Oe, D), so(F, !0);
        const pe = Xl(F), P = F.subTree;
        F.subTree = pe, x(
          P,
          pe,
          // parent may have changed if it's in a teleport
          p(P.el),
          // anchor may have changed if it's in a fragment
          M(P),
          F,
          ke,
          $e
        ), Oe.el = pe.el, X === null && nd(F, pe.el), ee && jt(ee, ke), (J = Oe.props && Oe.props.onVnodeUpdated) && jt(
          () => hs(J, We, Oe, D),
          ke
        );
      } else {
        let Oe;
        const { el: we, props: ee } = B, { bm: We, m: D, parent: X, root: J, type: pe } = F, P = Co(B);
        so(F, !1), We && Rn(We), !P && (Oe = ee && ee.onVnodeBeforeMount) && hs(Oe, X, B), so(F, !0);
        {
          J.ce && // @ts-expect-error _def is private
          J.ce._def.shadowRoot !== !1 && J.ce._injectChildStyle(pe);
          const ue = F.subTree = Xl(F);
          x(
            null,
            ue,
            K,
            _e,
            F,
            ke,
            $e
          ), B.el = ue.el;
        }
        if (D && jt(D, ke), !P && (Oe = ee && ee.onVnodeMounted)) {
          const ue = B;
          jt(
            () => hs(Oe, X, ue),
            ke
          );
        }
        (B.shapeFlag & 256 || X && Co(X.vnode) && X.vnode.shapeFlag & 256) && F.a && jt(F.a, ke), F.isMounted = !0, B = K = _e = null;
      }
    };
    F.scope.on();
    const Re = F.effect = new Gi(Ne);
    F.scope.off();
    const Ee = F.update = Re.run.bind(Re), Ge = F.job = Re.runIfDirty.bind(Re);
    Ge.i = F, Ge.id = F.uid, Re.scheduler = () => $l(Ge), so(F, !0), Ee();
  }, Pe = (F, B, K) => {
    B.component = F;
    const _e = F.vnode.props;
    F.vnode = B, F.next = null, ld(F, B.props, _e, K), cd(F, B.children, K), Us(), Fl(F), As();
  }, ie = (F, B, K, _e, ke, $e, Te, Ne, Re = !1) => {
    const Ee = F && F.children, Ge = F ? F.shapeFlag : 0, Oe = B.children, { patchFlag: we, shapeFlag: ee } = B;
    if (we > 0) {
      if (we & 128) {
        re(
          Ee,
          Oe,
          K,
          _e,
          ke,
          $e,
          Te,
          Ne,
          Re
        );
        return;
      } else if (we & 256) {
        ge(
          Ee,
          Oe,
          K,
          _e,
          ke,
          $e,
          Te,
          Ne,
          Re
        );
        return;
      }
    }
    ee & 8 ? (Ge & 16 && H(Ee, ke, $e), Oe !== Ee && f(K, Oe)) : Ge & 16 ? ee & 16 ? re(
      Ee,
      Oe,
      K,
      _e,
      ke,
      $e,
      Te,
      Ne,
      Re
    ) : H(Ee, ke, $e, !0) : (Ge & 8 && f(K, ""), ee & 16 && O(
      Oe,
      K,
      _e,
      ke,
      $e,
      Te,
      Ne,
      Re
    ));
  }, ge = (F, B, K, _e, ke, $e, Te, Ne, Re) => {
    F = F || ko, B = B || ko;
    const Ee = F.length, Ge = B.length, Oe = Math.min(Ee, Ge);
    let we;
    for (we = 0; we < Oe; we++) {
      const ee = B[we] = Re ? Hs(B[we]) : bs(B[we]);
      x(
        F[we],
        ee,
        K,
        null,
        ke,
        $e,
        Te,
        Ne,
        Re
      );
    }
    Ee > Ge ? H(
      F,
      ke,
      $e,
      !0,
      !1,
      Oe
    ) : O(
      B,
      K,
      _e,
      ke,
      $e,
      Te,
      Ne,
      Re,
      Oe
    );
  }, re = (F, B, K, _e, ke, $e, Te, Ne, Re) => {
    let Ee = 0;
    const Ge = B.length;
    let Oe = F.length - 1, we = Ge - 1;
    for (; Ee <= Oe && Ee <= we; ) {
      const ee = F[Ee], We = B[Ee] = Re ? Hs(B[Ee]) : bs(B[Ee]);
      if (io(ee, We))
        x(
          ee,
          We,
          K,
          null,
          ke,
          $e,
          Te,
          Ne,
          Re
        );
      else
        break;
      Ee++;
    }
    for (; Ee <= Oe && Ee <= we; ) {
      const ee = F[Oe], We = B[we] = Re ? Hs(B[we]) : bs(B[we]);
      if (io(ee, We))
        x(
          ee,
          We,
          K,
          null,
          ke,
          $e,
          Te,
          Ne,
          Re
        );
      else
        break;
      Oe--, we--;
    }
    if (Ee > Oe) {
      if (Ee <= we) {
        const ee = we + 1, We = ee < Ge ? B[ee].el : _e;
        for (; Ee <= we; )
          x(
            null,
            B[Ee] = Re ? Hs(B[Ee]) : bs(B[Ee]),
            K,
            We,
            ke,
            $e,
            Te,
            Ne,
            Re
          ), Ee++;
      }
    } else if (Ee > we)
      for (; Ee <= Oe; )
        oe(F[Ee], ke, $e, !0), Ee++;
    else {
      const ee = Ee, We = Ee, D = /* @__PURE__ */ new Map();
      for (Ee = We; Ee <= we; Ee++) {
        const Ue = B[Ee] = Re ? Hs(B[Ee]) : bs(B[Ee]);
        Ue.key != null && D.set(Ue.key, Ee);
      }
      let X, J = 0;
      const pe = we - We + 1;
      let P = !1, ue = 0;
      const Z = new Array(pe);
      for (Ee = 0; Ee < pe; Ee++) Z[Ee] = 0;
      for (Ee = ee; Ee <= Oe; Ee++) {
        const Ue = F[Ee];
        if (J >= pe) {
          oe(Ue, ke, $e, !0);
          continue;
        }
        let Fe;
        if (Ue.key != null)
          Fe = D.get(Ue.key);
        else
          for (X = We; X <= we; X++)
            if (Z[X - We] === 0 && io(Ue, B[X])) {
              Fe = X;
              break;
            }
        Fe === void 0 ? oe(Ue, ke, $e, !0) : (Z[Fe - We] = Ee + 1, Fe >= ue ? ue = Fe : P = !0, x(
          Ue,
          B[Fe],
          K,
          null,
          ke,
          $e,
          Te,
          Ne,
          Re
        ), J++);
      }
      const Ve = P ? vd(Z) : ko;
      for (X = Ve.length - 1, Ee = pe - 1; Ee >= 0; Ee--) {
        const Ue = We + Ee, Fe = B[Ue], Qe = B[Ue + 1], De = Ue + 1 < Ge ? (
          // #13559, fallback to el placeholder for unresolved async component
          Qe.el || Qe.placeholder
        ) : _e;
        Z[Ee] === 0 ? x(
          null,
          Fe,
          K,
          De,
          ke,
          $e,
          Te,
          Ne,
          Re
        ) : P && (X < 0 || Ee !== Ve[X] ? Ae(Fe, K, De, 2) : X--);
      }
    }
  }, Ae = (F, B, K, _e, ke = null) => {
    const { el: $e, type: Te, transition: Ne, children: Re, shapeFlag: Ee } = F;
    if (Ee & 6) {
      Ae(F.component.subTree, B, K, _e);
      return;
    }
    if (Ee & 128) {
      F.suspense.move(B, K, _e);
      return;
    }
    if (Ee & 64) {
      Te.move(F, B, K, ze);
      return;
    }
    if (Te === j) {
      a($e, B, K);
      for (let Oe = 0; Oe < Re.length; Oe++)
        Ae(Re[Oe], B, K, _e);
      a(F.anchor, B, K);
      return;
    }
    if (Te === za) {
      I(F, B, K);
      return;
    }
    if (_e !== 2 && Ee & 1 && Ne)
      if (_e === 0)
        Ne.beforeEnter($e), a($e, B, K), jt(() => Ne.enter($e), ke);
      else {
        const { leave: Oe, delayLeave: we, afterLeave: ee } = Ne, We = () => {
          F.ctx.isUnmounted ? l($e) : a($e, B, K);
        }, D = () => {
          $e._isLeaving && $e[Ps](
            !0
            /* cancelled */
          ), Oe($e, () => {
            We(), ee && ee();
          });
        };
        we ? we($e, We, D) : D();
      }
    else
      a($e, B, K);
  }, oe = (F, B, K, _e = !1, ke = !1) => {
    const {
      type: $e,
      props: Te,
      ref: Ne,
      children: Re,
      dynamicChildren: Ee,
      shapeFlag: Ge,
      patchFlag: Oe,
      dirs: we,
      cacheIndex: ee
    } = F;
    if (Oe === -2 && (ke = !1), Ne != null && (Us(), en(Ne, null, K, F, !0), As()), ee != null && (B.renderCache[ee] = void 0), Ge & 256) {
      B.ctx.deactivate(F);
      return;
    }
    const We = Ge & 1 && we, D = !Co(F);
    let X;
    if (D && (X = Te && Te.onVnodeBeforeUnmount) && hs(X, B, F), Ge & 6)
      V(F.component, K, _e);
    else {
      if (Ge & 128) {
        F.suspense.unmount(K, _e);
        return;
      }
      We && to(F, null, B, "beforeUnmount"), Ge & 64 ? F.type.remove(
        F,
        B,
        K,
        ze,
        _e
      ) : Ee && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ee.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($e !== j || Oe > 0 && Oe & 64) ? H(
        Ee,
        B,
        K,
        !1,
        !0
      ) : ($e === j && Oe & 384 || !ke && Ge & 16) && H(Re, B, K), _e && ne(F);
    }
    (D && (X = Te && Te.onVnodeUnmounted) || We) && jt(() => {
      X && hs(X, B, F), We && to(F, null, B, "unmounted");
    }, K);
  }, ne = (F) => {
    const { type: B, el: K, anchor: _e, transition: ke } = F;
    if (B === j) {
      T(K, _e);
      return;
    }
    if (B === za) {
      E(F);
      return;
    }
    const $e = () => {
      l(K), ke && !ke.persisted && ke.afterLeave && ke.afterLeave();
    };
    if (F.shapeFlag & 1 && ke && !ke.persisted) {
      const { leave: Te, delayLeave: Ne } = ke, Re = () => Te(K, $e);
      Ne ? Ne(F.el, $e, Re) : Re();
    } else
      $e();
  }, T = (F, B) => {
    let K;
    for (; F !== B; )
      K = w(F), l(F), F = K;
    l(B);
  }, V = (F, B, K) => {
    const { bum: _e, scope: ke, job: $e, subTree: Te, um: Ne, m: Re, a: Ee } = F;
    ti(Re), ti(Ee), _e && Rn(_e), ke.stop(), $e && ($e.flags |= 8, oe(Te, F, B, K)), Ne && jt(Ne, B), jt(() => {
      F.isUnmounted = !0;
    }, B);
  }, H = (F, B, K, _e = !1, ke = !1, $e = 0) => {
    for (let Te = $e; Te < F.length; Te++)
      oe(F[Te], B, K, _e, ke);
  }, M = (F) => {
    if (F.shapeFlag & 6)
      return M(F.component.subTree);
    if (F.shapeFlag & 128)
      return F.suspense.next();
    const B = w(F.anchor || F.el), K = B && B[cr];
    return K ? w(K) : B;
  };
  let R = !1;
  const de = (F, B, K) => {
    F == null ? B._vnode && oe(B._vnode, null, null, !0) : x(
      B._vnode || null,
      F,
      B,
      null,
      null,
      null,
      K
    ), B._vnode = F, R || (R = !0, Fl(), ir(), R = !1);
  }, ze = {
    p: x,
    um: oe,
    m: Ae,
    r: ne,
    mt: ae,
    mc: O,
    pc: ie,
    pbc: te,
    n: M,
    o: e
  };
  return {
    render: de,
    hydrate: void 0,
    createApp: qc(de)
  };
}
function Aa({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function so({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function fd(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function El(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Je(a) && Je(l))
    for (let r = 0; r < a.length; r++) {
      const u = a[r];
      let c = l[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = l[r] = Hs(l[r]), c.el = u.el), !o && c.patchFlag !== -2 && El(u, c)), c.type === ca && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = u.el), c.type === zt && !c.el && (c.el = u.el);
    }
}
function vd(e) {
  const s = e.slice(), o = [0];
  let a, l, r, u, c;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const v = e[a];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        s[a] = l, o.push(a);
        continue;
      }
      for (r = 0, u = o.length - 1; r < u; )
        c = r + u >> 1, e[o[c]] < v ? r = c + 1 : u = c;
      v < e[o[r]] && (r > 0 && (s[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, u = o[r - 1]; r-- > 0; )
    o[r] = u, u = s[u];
  return o;
}
function Ar(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : Ar(s);
}
function ti(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const zr = (e) => e.__isSuspense;
function pd(e, s) {
  s && s.pendingBranch ? Je(e) ? s.effects.push(...e) : s.effects.push(e) : xc(e);
}
const j = Symbol.for("v-fgt"), ca = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), za = Symbol.for("v-stc"), sn = [];
let es = null;
function n(e = !1) {
  sn.push(es = e ? null : []);
}
function gd() {
  sn.pop(), es = sn[sn.length - 1] || null;
}
let dn = 1;
function Hn(e, s = !1) {
  dn += e, e < 0 && es && s && (es.hasOnce = !0);
}
function Vr(e) {
  return e.dynamicChildren = dn > 0 ? es || ko : null, gd(), dn > 0 && es && es.push(e), e;
}
function i(e, s, o, a, l, r) {
  return Vr(
    t(
      e,
      s,
      o,
      a,
      l,
      r,
      !0
    )
  );
}
function L(e, s, o, a, l) {
  return Vr(
    k(
      e,
      s,
      o,
      a,
      l,
      !0
    )
  );
}
function mn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function io(e, s) {
  return e.type === s.type && e.key === s.key;
}
const Fr = ({ key: e }) => e ?? null, Dn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? bt(e) || Bt(e) || Xe(e) ? { i: Dt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === j ? 0 : 1, u = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && Fr(s),
    ref: s && Dn(s),
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
    ctx: Dt
  };
  return c ? (Tl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= bt(o) ? 8 : 16), dn > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const k = hd;
function hd(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === br) && (e = zt), mn(e)) {
    const c = Qs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Tl(c, o), dn > 0 && !r && es && (c.shapeFlag & 6 ? es[es.indexOf(e)] = c : es.push(c)), c.patchFlag = -2, c;
  }
  if (Ed(e) && (e = e.__vccOpts), s) {
    s = yd(s);
    let { class: c, style: d } = s;
    c && !bt(c) && (s.class = Le(c)), pt(d) && (bl(d) && !Je(d) && (d = It({}, d)), s.style = Ft(d));
  }
  const u = bt(e) ? 1 : zr(e) ? 128 : dr(e) ? 64 : pt(e) ? 4 : Xe(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    a,
    l,
    u,
    r,
    !0
  );
}
function yd(e) {
  return e ? bl(e) || Rr(e) ? It({}, e) : e : null;
}
function Qs(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: u, children: c, transition: d } = e, v = s ? wd(l || {}, s) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Fr(v),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Je(r) ? r.concat(Dn(s)) : [r, Dn(s)] : Dn(s)
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
    patchFlag: s && e.type !== j ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: e.ssContent && Qs(e.ssContent),
    ssFallback: e.ssFallback && Qs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && mo(
    f,
    d.clone(f)
  ), f;
}
function $(e = " ", s = 0) {
  return k(ca, null, e, s);
}
function h(e = "", s = !1) {
  return s ? (n(), L(zt, null, e)) : k(zt, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? k(zt) : Je(e) ? k(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : mn(e) ? Hs(e) : k(ca, null, String(e));
}
function Hs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qs(e);
}
function Tl(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Je(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Tl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Rr(s) ? s._ctx = Dt : l === 3 && Dt && (Dt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Xe(s) ? (s = { default: s, _ctx: Dt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function wd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Le([s.class, a.class]));
      else if (l === "style")
        s.style = Ft([s.style, a.style]);
      else if (Zn(l)) {
        const r = s[l], u = a[l];
        u && r !== u && !(Je(r) && r.includes(u)) && (s[l] = r ? [].concat(r, u) : u);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function hs(e, s, o, a = null) {
  ps(e, s, 7, [
    o,
    a
  ]);
}
const _d = Sr();
let kd = 0;
function bd(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || _d, r = {
    uid: kd++,
    vnode: e,
    type: a,
    parent: s,
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
    scope: new Ku(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: s ? s.provides : Object.create(l.provides),
    ids: s ? s.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Lr(a, l),
    emitsOptions: Tr(a, l),
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Zc.bind(null, r), e.ce && e.ce(r), r;
}
let Vt = null;
const Ml = () => Vt || Dt;
let qn, sl;
{
  const e = oa(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((u) => u(r)) : l[0](r);
    };
  };
  qn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Vt = o
  ), sl = s(
    "__VUE_SSR_SETTERS__",
    (o) => fn = o
  );
}
const hn = (e) => {
  const s = Vt;
  return qn(e), e.scope.on(), () => {
    e.scope.off(), qn(s);
  };
}, si = () => {
  Vt && Vt.scope.off(), qn(null);
};
function Br(e) {
  return e.vnode.shapeFlag & 4;
}
let fn = !1;
function $d(e, s = !1, o = !1) {
  s && sl(s);
  const { props: a, children: l } = e.vnode, r = Br(e);
  ad(e, a, r, s), ud(e, l, o || s);
  const u = r ? Cd(e, s) : void 0;
  return s && sl(!1), u;
}
function Cd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vc);
  const { setup: a } = o;
  if (a) {
    Us();
    const l = e.setupContext = a.length > 1 ? Sd(e) : null, r = hn(e), u = gn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Ui(u);
    if (As(), r(), (c || e.sp) && !Co(e) && wr(e), c) {
      if (u.then(si, si), s)
        return u.then((d) => {
          oi(e, d);
        }).catch((d) => {
          aa(d, e, 0);
        });
      e.asyncDep = u;
    } else
      oi(e, u);
  } else
    Wr(e);
}
function oi(e, s, o) {
  Xe(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : pt(s) && (e.setupState = nr(s)), Wr(e);
}
function Wr(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || Cs);
  {
    const l = hn(e);
    Us();
    try {
      Fc(e);
    } finally {
      As(), l();
    }
  }
}
const xd = {
  get(e, s) {
    return Ut(e, "get", ""), e[s];
  }
};
function Sd(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, xd),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function da(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nr(pc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in tn)
        return tn[o](e);
    },
    has(s, o) {
      return o in s || o in tn;
    }
  })) : e.proxy;
}
function Id(e, s = !0) {
  return Xe(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Ed(e) {
  return Xe(e) && "__vccOpts" in e;
}
const U = (e, s) => _c(e, s, fn);
function Lo(e, s, o) {
  try {
    Hn(-1);
    const a = arguments.length;
    return a === 2 ? pt(s) && !Je(s) ? mn(s) ? k(e, null, [s]) : k(e, s) : k(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && mn(o) && (o = [o]), k(e, s, o));
  } finally {
    Hn(1);
  }
}
const Td = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ol;
const ni = typeof window < "u" && window.trustedTypes;
if (ni)
  try {
    ol = /* @__PURE__ */ ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Gr = ol ? (e) => ol.createHTML(e) : (e) => e, Md = "http://www.w3.org/2000/svg", Pd = "http://www.w3.org/1998/Math/MathML", Ms = typeof document < "u" ? document : null, ai = Ms && /* @__PURE__ */ Ms.createElement("template"), Rd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Ms.createElementNS(Md, e) : s === "mathml" ? Ms.createElementNS(Pd, e) : o ? Ms.createElement(e, { is: o }) : Ms.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ms.createTextNode(e),
  createComment: (e) => Ms.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ms.querySelector(e),
  setScopeId(e, s) {
    e.setAttribute(s, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, s, o, a, l, r) {
    const u = o ? o.previousSibling : s.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      ai.innerHTML = Gr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ai.content;
      if (a === "svg" || a === "mathml") {
        const d = c.firstChild;
        for (; d.firstChild; )
          c.appendChild(d.firstChild);
        c.removeChild(d);
      }
      s.insertBefore(c, o);
    }
    return [
      // first
      u ? u.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, Bs = "transition", Vo = "animation", Mo = Symbol("_vtc"), jr = {
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
}, Hr = /* @__PURE__ */ It(
  {},
  pr,
  jr
), Nd = (e) => (e.displayName = "Transition", e.props = Hr, e), Ld = /* @__PURE__ */ Nd(
  (e, { slots: s }) => Lo(Ec, qr(e), s)
), oo = (e, s = []) => {
  Je(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, li = (e) => e ? Je(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function qr(e) {
  const s = {};
  for (const ce in e)
    ce in jr || (s[ce] = e[ce]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: u = `${o}-enter-active`,
    enterToClass: c = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = u,
    appearToClass: f = c,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: y = `${o}-leave-to`
  } = e, _ = Dd(l), x = _ && _[0], C = _ && _[1], {
    onBeforeEnter: S,
    onEnter: A,
    onEnterCancelled: I,
    onLeave: E,
    onLeaveCancelled: N,
    onBeforeAppear: z = S,
    onAppear: q = A,
    onAppearCancelled: O = I
  } = s, W = (ce, he, ae, Q) => {
    ce._enterCancelled = Q, Ws(ce, he ? f : c), Ws(ce, he ? v : u), ae && ae();
  }, te = (ce, he) => {
    ce._isLeaving = !1, Ws(ce, p), Ws(ce, y), Ws(ce, w), he && he();
  }, se = (ce) => (he, ae) => {
    const Q = ce ? q : A, me = () => W(he, ce, ae);
    oo(Q, [he, me]), ii(() => {
      Ws(he, ce ? d : r), ws(he, ce ? f : c), li(Q) || ri(he, a, x, me);
    });
  };
  return It(s, {
    onBeforeEnter(ce) {
      oo(S, [ce]), ws(ce, r), ws(ce, u);
    },
    onBeforeAppear(ce) {
      oo(z, [ce]), ws(ce, d), ws(ce, v);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(ce, he) {
      ce._isLeaving = !0;
      const ae = () => te(ce, he);
      ws(ce, p), ce._enterCancelled ? (ws(ce, w), nl(ce)) : (nl(ce), ws(ce, w)), ii(() => {
        ce._isLeaving && (Ws(ce, p), ws(ce, y), li(E) || ri(ce, a, C, ae));
      }), oo(E, [ce, ae]);
    },
    onEnterCancelled(ce) {
      W(ce, !1, void 0, !0), oo(I, [ce]);
    },
    onAppearCancelled(ce) {
      W(ce, !0, void 0, !0), oo(O, [ce]);
    },
    onLeaveCancelled(ce) {
      te(ce), oo(N, [ce]);
    }
  });
}
function Dd(e) {
  if (e == null)
    return null;
  if (pt(e))
    return [Va(e.enter), Va(e.leave)];
  {
    const s = Va(e);
    return [s, s];
  }
}
function Va(e) {
  return Vu(e);
}
function ws(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Mo] || (e[Mo] = /* @__PURE__ */ new Set())).add(s);
}
function Ws(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Mo];
  o && (o.delete(s), o.size || (e[Mo] = void 0));
}
function ii(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Od = 0;
function ri(e, s, o, a) {
  const l = e._endId = ++Od, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: u, timeout: c, propCount: d } = Kr(e, s);
  if (!u)
    return a();
  const v = u + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (y) => {
    y.target === e && ++f >= d && p();
  };
  setTimeout(() => {
    f < d && p();
  }, c + 1), e.addEventListener(v, w);
}
function Kr(e, s) {
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${Bs}Delay`), r = a(`${Bs}Duration`), u = ui(l, r), c = a(`${Vo}Delay`), d = a(`${Vo}Duration`), v = ui(c, d);
  let f = null, p = 0, w = 0;
  s === Bs ? u > 0 && (f = Bs, p = u, w = r.length) : s === Vo ? v > 0 && (f = Vo, p = v, w = d.length) : (p = Math.max(u, v), f = p > 0 ? u > v ? Bs : Vo : null, w = f ? f === Bs ? r.length : d.length : 0);
  const y = f === Bs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Bs}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: y
  };
}
function ui(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => ci(o) + ci(e[a])));
}
function ci(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function nl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ud(e, s, o) {
  const a = e[Mo];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const di = Symbol("_vod"), Ad = Symbol("_vsh"), zd = Symbol(""), Vd = /(?:^|;)\s*display\s*:/;
function Fd(e, s, o) {
  const a = e.style, l = bt(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (bt(s))
        for (const u of s.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          o[c] == null && On(a, c, "");
        }
      else
        for (const u in s)
          o[u] == null && On(a, u, "");
    for (const u in o)
      u === "display" && (r = !0), On(a, u, o[u]);
  } else if (l) {
    if (s !== o) {
      const u = a[zd];
      u && (o += ";" + u), a.cssText = o, r = Vd.test(o);
    }
  } else s && e.removeAttribute("style");
  di in e && (e[di] = r ? a.display : "", e[Ad] && (a.display = "none"));
}
const mi = /\s*!important$/;
function On(e, s, o) {
  if (Je(o))
    o.forEach((a) => On(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = Bd(e, s);
    mi.test(o) ? e.setProperty(
      Zs(a),
      o.replace(mi, ""),
      "important"
    ) : e[a] = o;
  }
}
const fi = ["Webkit", "Moz", "ms"], Fa = {};
function Bd(e, s) {
  const o = Fa[s];
  if (o)
    return o;
  let a = rs(s);
  if (a !== "filter" && a in e)
    return Fa[s] = a;
  a = ta(a);
  for (let l = 0; l < fi.length; l++) {
    const r = fi[l] + a;
    if (r in e)
      return Fa[s] = r;
  }
  return s;
}
const vi = "http://www.w3.org/1999/xlink";
function pi(e, s, o, a, l, r = Hu(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(vi, s.slice(6, s.length)) : e.setAttributeNS(vi, s, o) : o == null || r && !Fi(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : fs(o) ? String(o) : o
  );
}
function gi(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? Gr(o) : o);
    return;
  }
  const r = e.tagName;
  if (s === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (c !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let u = !1;
  if (o === "" || o == null) {
    const c = typeof e[s];
    c === "boolean" ? o = Fi(o) : o == null && c === "string" ? (o = "", u = !0) : c === "number" && (o = 0, u = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  u && e.removeAttribute(l || s);
}
function Ds(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function Wd(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const hi = Symbol("_vei");
function Gd(e, s, o, a, l = null) {
  const r = e[hi] || (e[hi] = {}), u = r[s];
  if (a && u)
    u.value = a;
  else {
    const [c, d] = jd(s);
    if (a) {
      const v = r[s] = Kd(
        a,
        l
      );
      Ds(e, c, v, d);
    } else u && (Wd(e, c, u, d), r[s] = void 0);
  }
}
const yi = /(?:Once|Passive|Capture)$/;
function jd(e) {
  let s;
  if (yi.test(e)) {
    s = {};
    let a;
    for (; a = e.match(yi); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Zs(e.slice(2)), s];
}
let Ba = 0;
const Hd = /* @__PURE__ */ Promise.resolve(), qd = () => Ba || (Hd.then(() => Ba = 0), Ba = Date.now());
function Kd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ps(
      Jd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = qd(), o;
}
function Jd(e, s) {
  if (Je(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return s;
}
const wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yd = (e, s, o, a, l, r) => {
  const u = l === "svg";
  s === "class" ? Ud(e, a, u) : s === "style" ? Fd(e, o, a) : Zn(s) ? ml(s) || Gd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Qd(e, s, a, u)) ? (gi(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && pi(e, s, a, u, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !bt(a)) ? gi(e, rs(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), pi(e, s, a, u));
};
function Qd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && wi(s) && Xe(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return wi(s) && bt(o) ? !1 : s in e;
}
const Jr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), Kn = Symbol("_moveCb"), _i = Symbol("_enterCb"), Xd = (e) => (delete e.props.mode, e), Zd = /* @__PURE__ */ Xd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ It({}, Hr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Ml(), a = vr();
    let l, r;
    return kr(() => {
      if (!l.length)
        return;
      const u = e.moveClass || `${e.name || "v"}-move`;
      if (!nm(
        l[0].el,
        o.vnode.el,
        u
      )) {
        l = [];
        return;
      }
      l.forEach(tm), l.forEach(sm);
      const c = l.filter(om);
      nl(o.vnode.el), c.forEach((d) => {
        const v = d.el, f = v.style;
        ws(v, u), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[Kn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[Kn] = null, Ws(v, u));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const u = lt(e), c = qr(u);
      let d = u.tag || j;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), mo(
            f,
            cn(
              f,
              c,
              a,
              o
            )
          ), Jr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = s.default ? Cl(s.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && mo(
          f,
          cn(f, c, a, o)
        );
      }
      return k(d, null, r);
    };
  }
}), em = Zd;
function tm(e) {
  const s = e.el;
  s[Kn] && s[Kn](), s[_i] && s[_i]();
}
function sm(e) {
  Yr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function om(e) {
  const s = Jr.get(e), o = Yr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function nm(e, s, o) {
  const a = e.cloneNode(), l = e[Mo];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((c) => c && a.classList.add(c)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: u } = Kr(a);
  return r.removeChild(a), u;
}
const Xs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Je(s) ? (o) => Rn(s, o) : s;
};
function am(e) {
  e.target.composing = !0;
}
function ki(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const is = Symbol("_assign");
function bi(e, s, o) {
  return s && (e = e.trim()), o && (e = sa(e)), e;
}
const So = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[is] = Xs(l);
    const r = a || l.props && l.props.type === "number";
    Ds(e, s ? "change" : "input", (u) => {
      u.target.composing || e[is](bi(e.value, o, r));
    }), (o || r) && Ds(e, "change", () => {
      e.value = bi(e.value, o, r);
    }), s || (Ds(e, "compositionstart", am), Ds(e, "compositionend", ki), Ds(e, "change", ki));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, u) {
    if (e[is] = Xs(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? sa(e.value) : e.value, d = s ?? "";
    c !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Jn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[is] = Xs(o), Ds(e, "change", () => {
      const a = e._modelValue, l = Po(e), r = e.checked, u = e[is];
      if (Je(a)) {
        const c = pl(a, l), d = c !== -1;
        if (r && !d)
          u(a.concat(l));
        else if (!r && d) {
          const v = [...a];
          v.splice(c, 1), u(v);
        }
      } else if (Ro(a)) {
        const c = new Set(a);
        r ? c.add(l) : c.delete(l), u(c);
      } else
        u(Qr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: $i,
  beforeUpdate(e, s, o) {
    e[is] = Xs(o), $i(e, s, o);
  }
};
function $i(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Je(s))
    l = pl(s, a.props.value) > -1;
  else if (Ro(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = co(s, Qr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Un = {
  created(e, { value: s }, o) {
    e.checked = co(s, o.props.value), e[is] = Xs(o), Ds(e, "change", () => {
      e[is](Po(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[is] = Xs(a), s !== o && (e.checked = co(s, a.props.value));
  }
}, Io = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Ro(s);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? sa(Po(u)) : Po(u)
      );
      e[is](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[is] = Xs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Ci(e, s);
  },
  beforeUpdate(e, s, o) {
    e[is] = Xs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Ci(e, s);
  }
};
function Ci(e, s) {
  const o = e.multiple, a = Je(s);
  if (!(o && !a && !Ro(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = Po(u);
      if (o)
        if (a) {
          const d = typeof c;
          d === "string" || d === "number" ? u.selected = s.some((v) => String(v) === String(c)) : u.selected = pl(s, c) > -1;
        } else
          u.selected = s.has(c);
      else if (co(Po(u), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Po(e) {
  return "_value" in e ? e._value : e.value;
}
function Qr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
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
  exact: (e, s) => lm.some((o) => e[`${o}Key`] && !s.includes(o))
}, st = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let u = 0; u < s.length; u++) {
      const c = im[s[u]];
      if (c && c(l, s)) return;
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
}, ts = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Zs(l.key);
    if (s.some(
      (u) => u === r || rm[u] === r
    ))
      return e(l);
  }));
}, um = /* @__PURE__ */ It({ patchProp: Yd }, Rd);
let xi;
function cm() {
  return xi || (xi = dd(um));
}
const yn = ((...e) => {
  const s = cm().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = mm(a);
    if (!l) return;
    const r = s._component;
    !Xe(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const u = o(l, !1, dm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), u;
  }, s;
});
function dm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function mm(e) {
  return bt(e) ? document.querySelector(e) : e;
}
const fm = { class: "panel-layout" }, vm = {
  key: 0,
  class: "panel-layout-header"
}, pm = {
  key: 1,
  class: "panel-layout-search"
}, gm = { class: "panel-layout-content" }, hm = {
  key: 2,
  class: "panel-layout-footer"
}, ym = /* @__PURE__ */ Se({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", fm, [
      s.$slots.header ? (n(), i("div", vm, [
        tt(s.$slots, "header", {}, void 0)
      ])) : h("", !0),
      s.$slots.search ? (n(), i("div", pm, [
        tt(s.$slots, "search", {}, void 0)
      ])) : h("", !0),
      t("div", gm, [
        tt(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", hm, [
        tt(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Ie = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Et = /* @__PURE__ */ Ie(ym, [["__scopeId", "data-v-21565df9"]]), wm = {
  key: 0,
  class: "panel-title-prefix"
}, _m = {
  key: 1,
  class: "panel-title-prefix-theme"
}, km = /* @__PURE__ */ Se({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), L(xl(`h${e.level}`), {
      class: Le(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", wm, m(e.prefix), 1)) : (n(), i("span", _m)),
        tt(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bm = /* @__PURE__ */ Ie(km, [["__scopeId", "data-v-c3875efc"]]), $m = ["title"], Cm = ["width", "height"], xm = /* @__PURE__ */ Se({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (a) => s.$emit("click"))
    }, [
      (n(), i("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...o[1] || (o[1] = [
        t("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        t("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, Cm))
    ], 8, $m));
  }
}), Xr = /* @__PURE__ */ Ie(xm, [["__scopeId", "data-v-6fc7f16d"]]), Sm = { class: "header-left" }, Im = {
  key: 0,
  class: "header-actions"
}, Em = /* @__PURE__ */ Se({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Le(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Sm, [
        k(bm, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            $(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), L(Xr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : h("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", Im, [
        tt(s.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ Ie(Em, [["__scopeId", "data-v-55a62cd6"]]), Tm = {
  key: 0,
  class: "section-title-count"
}, Mm = {
  key: 1,
  class: "section-title-icon"
}, Pm = /* @__PURE__ */ Se({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), L(xl(`h${e.level}`), {
      class: Le(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        tt(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Tm, "(" + m(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (n(), i("span", Mm, m(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), as = /* @__PURE__ */ Ie(Pm, [["__scopeId", "data-v-559361eb"]]), Rm = { class: "status-grid" }, Nm = { class: "status-grid__columns" }, Lm = { class: "status-grid__column" }, Dm = { class: "status-grid__title" }, Om = { class: "status-grid__column status-grid__column--right" }, Um = { class: "status-grid__title" }, Am = {
  key: 0,
  class: "status-grid__footer"
}, zm = /* @__PURE__ */ Se({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", Rm, [
      t("div", Nm, [
        t("div", Lm, [
          t("h4", Dm, m(e.leftTitle), 1),
          tt(s.$slots, "left", {}, void 0)
        ]),
        t("div", Om, [
          t("h4", Um, m(e.rightTitle), 1),
          tt(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", Am, [
        tt(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Vm = /* @__PURE__ */ Ie(zm, [["__scopeId", "data-v-73b7ba3f"]]), Fm = {
  key: 0,
  class: "status-item__icon"
}, Bm = {
  key: 1,
  class: "status-item__count"
}, Wm = { class: "status-item__label" }, Gm = /* @__PURE__ */ Se({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = U(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Le(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", Fm, m(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (n(), i("span", Bm, m(e.count), 1)) : h("", !0),
      t("span", Wm, m(e.label), 1)
    ], 2));
  }
}), ys = /* @__PURE__ */ Ie(Gm, [["__scopeId", "data-v-6f929183"]]), jm = { class: "issue-card__header" }, Hm = { class: "issue-card__icon" }, qm = { class: "issue-card__title" }, Km = {
  key: 0,
  class: "issue-card__content"
}, Jm = {
  key: 0,
  class: "issue-card__description"
}, Ym = {
  key: 1,
  class: "issue-card__items"
}, Qm = {
  key: 2,
  class: "issue-card__actions"
}, Xm = /* @__PURE__ */ Se({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = U(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Le(["issue-card", o.value])
    }, [
      t("div", jm, [
        t("span", Hm, m(e.icon), 1),
        t("h4", qm, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Km, [
        e.description ? (n(), i("p", Jm, m(e.description), 1)) : h("", !0),
        tt(a.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (n(), i("div", Ym, [
        (n(!0), i(j, null, be(e.items, (r, u) => (n(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, m(r), 1)
        ]))), 128))
      ])) : h("", !0),
      a.$slots.actions ? (n(), i("div", Qm, [
        tt(a.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), ds = /* @__PURE__ */ Ie(Xm, [["__scopeId", "data-v-df6aa348"]]), Zm = ["type", "disabled"], ef = {
  key: 0,
  class: "spinner"
}, tf = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Le(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", ef)) : h("", !0),
      e.loading ? h("", !0) : tt(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Zm));
  }
}), xe = /* @__PURE__ */ Ie(tf, [["__scopeId", "data-v-772abe47"]]), sf = { class: "empty-state" }, of = {
  key: 0,
  class: "empty-icon"
}, nf = { class: "empty-message" }, af = /* @__PURE__ */ Se({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", sf, [
      e.icon ? (n(), i("div", of, m(e.icon), 1)) : h("", !0),
      t("p", nf, m(e.message), 1),
      e.actionLabel ? (n(), L(xe, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: g(() => [
          $(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), us = /* @__PURE__ */ Ie(af, [["__scopeId", "data-v-4466284f"]]), lf = /* @__PURE__ */ Se({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Le(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      tt(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), An = /* @__PURE__ */ Ie(lf, [["__scopeId", "data-v-75e9eeb8"]]), rf = /* @__PURE__ */ Se({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Le(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      tt(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), al = /* @__PURE__ */ Ie(rf, [["__scopeId", "data-v-2f186e4c"]]), uf = { class: "detail-row" }, cf = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), i("div", uf, [
      k(An, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          $(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), L(al, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          $(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : tt(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), wt = /* @__PURE__ */ Ie(cf, [["__scopeId", "data-v-ef15664a"]]), df = { class: "modal-header" }, mf = { class: "modal-body" }, ff = { class: "status-section" }, vf = {
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
}, Tf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Nf = {
  key: 3,
  class: "workflow-group"
}, Lf = { class: "workflow-group-header" }, Df = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Uf = { class: "workflow-name" }, Af = {
  key: 4,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Ff = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Wf = {
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
}, Yf = { class: "change-group-header" }, Qf = { class: "change-group-title" }, Xf = { class: "change-list" }, Zf = { class: "node-name" }, ev = {
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
}, rv = { class: "change-list" }, uv = { class: "change-item" }, cv = { class: "node-name" }, dv = {
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
}, Rv = { class: "warning-box" }, Nv = {
  key: 5,
  class: "empty-state-inline"
}, Lv = { class: "modal-actions" }, Dv = /* @__PURE__ */ Se({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = b(!1);
    ot(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), _t(() => s.show, (w, y) => {
      console.log("StatusDetailModal show prop changed from", y, "to", w);
    }, { immediate: !0 });
    const a = U(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = U(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = U(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.synced) == null ? void 0 : _.filter((x) => {
        var S, A, I;
        const C = (I = (A = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : I.find((E) => E.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), u = U(() => {
      var w, y, _, x, C;
      return (w = s.status) != null && w.workflows ? (((y = s.status.workflows.new) == null ? void 0 : y.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = s.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), c = U(() => {
      var y, _, x;
      const w = (y = s.status) == null ? void 0 : y.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = U(() => {
      var w, y, _, x, C, S;
      return !u.value && !c.value && ((y = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : y.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (C = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), v = U(() => {
      var y, _;
      const w = (_ = (y = s.status) == null ? void 0 : y.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function f(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, y) => {
      var _, x, C, S, A, I, E, N, z, q, O, W, te, se, ce, he, ae, Q, me, Pe, ie, ge;
      return n(), L(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: y[7] || (y[7] = (re) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: y[6] || (y[6] = st(() => {
            }, ["stop"]))
          }, [
            t("div", df, [
              y[8] || (y[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (re) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", mf, [
              t("div", ff, [
                k(as, { level: "4" }, {
                  default: g(() => [...y[9] || (y[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(wt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (n(), i("div", vf, [
                t("div", pf, [
                  k(as, { level: "4" }, {
                    default: g(() => [...y[10] || (y[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: y[1] || (y[1] = (re) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", gf, [
                  t("div", hf, [
                    y[11] || (y[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", yf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  t("div", wf, [
                    (n(!0), i(j, null, be(a.value, (re) => (n(), i("div", {
                      key: re.name,
                      class: "workflow-item"
                    }, [
                      t("span", _f, m(re.name), 1),
                      t("span", kf, m(re.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (n(), i("div", bf, [
                  t("div", $f, [
                    y[12] || (y[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Cf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  t("div", xf, [
                    (n(!0), i(j, null, be(l.value, (re) => (n(), i("div", {
                      key: re.name,
                      class: "workflow-item"
                    }, [
                      t("span", Sf, m(re.name), 1),
                      t("span", If, m(re.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (n(), i("div", Ef, [
                  t("div", Tf, [
                    y[13] || (y[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Mf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Pf, [
                    (n(!0), i(j, null, be(e.status.workflows.new, (re) => (n(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      t("span", Rf, m(re), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (n(), i("div", Nf, [
                  t("div", Lf, [
                    y[14] || (y[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Df, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Of, [
                    (n(!0), i(j, null, be(e.status.workflows.modified, (re) => (n(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      t("span", Uf, m(re), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (I = (A = e.status.workflows) == null ? void 0 : A.deleted) != null && I.length ? (n(), i("div", Af, [
                  t("div", zf, [
                    y[15] || (y[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Vf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Ff, [
                    (n(!0), i(j, null, be(e.status.workflows.deleted, (re) => (n(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, m(re), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (n(), i("div", Wf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (re) => o.value = !o.value)
                  }, [
                    y[16] || (y[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Gf, "SYNCED (" + m(r.value.length) + ")", 1),
                    t("span", jf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Hf, [
                    (n(!0), i(j, null, be(r.value, (re) => (n(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      t("span", qf, m(re), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              c.value ? (n(), i("div", Kf, [
                k(as, { level: "4" }, {
                  default: g(() => [...y[17] || (y[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && N.length ? (n(), i("div", Jf, [
                  t("div", Yf, [
                    y[18] || (y[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Qf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Xf, [
                    (n(!0), i(j, null, be(e.status.git_changes.nodes_added, (re) => (n(), i("div", {
                      key: f(re),
                      class: "change-item"
                    }, [
                      t("span", Zf, m(f(re)), 1),
                      p(re) ? (n(), i("span", ev, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (q = (z = e.status.git_changes) == null ? void 0 : z.nodes_removed) != null && q.length ? (n(), i("div", tv, [
                  t("div", sv, [
                    y[19] || (y[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", ov, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", nv, [
                    (n(!0), i(j, null, be(e.status.git_changes.nodes_removed, (re) => (n(), i("div", {
                      key: f(re),
                      class: "change-item"
                    }, [
                      t("span", av, m(f(re)), 1),
                      p(re) ? (n(), i("span", lv, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (O = e.status.git_changes) != null && O.workflow_changes ? (n(), i("div", iv, [
                  y[20] || (y[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", rv, [
                    t("div", uv, [
                      t("span", cv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (W = e.status.git_changes) != null && W.has_other_changes ? (n(), i("div", dv, [...y[21] || (y[21] = [
                  t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  t("div", { class: "change-list" }, [
                    t("div", { class: "change-item" }, [
                      t("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : h("", !0)
              ])) : h("", !0),
              (te = e.status.comparison) != null && te.is_synced ? h("", !0) : (n(), i("div", mv, [
                t("div", fv, [
                  k(as, { level: "4" }, {
                    default: g(() => [...y[22] || (y[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: y[3] || (y[3] = (re) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                y[26] || (y[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (ce = (se = e.status.comparison) == null ? void 0 : se.missing_nodes) != null && ce.length ? (n(), i("div", vv, [
                  k(wt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", pv, [
                    (n(!0), i(j, null, be(e.status.comparison.missing_nodes.slice(0, 10), (re) => (n(), i("div", {
                      key: re,
                      class: "drift-list-item"
                    }, " - " + m(re), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", gv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ae = (he = e.status.comparison) == null ? void 0 : he.extra_nodes) != null && ae.length ? (n(), i("div", hv, [
                  k(wt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", yv, [
                    (n(!0), i(j, null, be(e.status.comparison.extra_nodes.slice(0, 10), (re) => (n(), i("div", {
                      key: re,
                      class: "drift-list-item"
                    }, " - " + m(re), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", wv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (me = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && me.length ? (n(), i("div", _v, [
                  k(wt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", kv, [
                    (n(!0), i(j, null, be(e.status.comparison.version_mismatches.slice(0, 10), (re) => (n(), i("div", {
                      key: re.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(m(re.name) + ": ", 1),
                      t("span", bv, m(re.actual), 1),
                      y[23] || (y[23] = $(" → ", -1)),
                      t("span", $v, m(re.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Cv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((Pe = e.status.comparison) == null ? void 0 : Pe.packages_in_sync) === !1 ? (n(), i("div", xv, [
                  k(wt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                t("div", Sv, [
                  k(xe, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: y[4] || (y[4] = (re) => w.$emit("repair"))
                  }, {
                    default: g(() => [...y[24] || (y[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  y[25] || (y[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ge = (ie = e.status.comparison) == null ? void 0 : ie.disabled_nodes) != null && ge.length ? (n(), i("div", Iv, [
                k(as, { level: "4" }, {
                  default: g(() => [...y[27] || (y[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Ev, [
                  y[28] || (y[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Tv, [
                  (n(!0), i(j, null, be(e.status.comparison.disabled_nodes.slice(0, 10), (re) => (n(), i("div", {
                    key: re,
                    class: "drift-list-item"
                  }, " • " + m(re), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Mv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Pv, [
                k(as, { level: "4" }, {
                  default: g(() => [...y[29] || (y[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Rv, [
                  y[30] || (y[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (n(), i("div", Nv, [...y[32] || (y[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            t("div", Lv, [
              k(xe, {
                variant: "secondary",
                onClick: y[5] || (y[5] = (re) => w.$emit("close"))
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
}), Ov = /* @__PURE__ */ Ie(Dv, [["__scopeId", "data-v-e2b37122"]]), Uv = { class: "health-section-header" }, Av = { class: "suggestions-content" }, zv = { class: "suggestions-text" }, Vv = { style: { "margin-top": "var(--cg-space-3)" } }, Fv = {
  key: 1,
  class: "no-issues-text"
}, Bv = /* @__PURE__ */ Se({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = b(!1), r = b(!1);
    function u() {
      l.value = !0;
    }
    function c() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, f = b(!1), p = b(!1);
    function w() {
      p.value = !0, v("repair-environment");
    }
    function y() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const x = U(() => {
      const T = a.status.workflows.analyzed || [], V = T.filter(
        (H) => H.unresolved_models_count > 0 || H.ambiguous_models_count > 0
      );
      return V.length === 0 && a.status.missing_models_count > 0 ? T.filter((H) => H.sync_state === "synced") : V;
    });
    function C() {
      const T = x.value;
      T.length !== 0 && (f.value = !0, v("repair-missing-models", T.map((V) => V.name)));
    }
    function S() {
      f.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: y, closeDetailModal: _ });
    const A = U(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), I = U(() => a.status.has_changes), E = U(() => {
      const T = a.status.git_changes;
      return T.nodes_added.length > 0 || T.nodes_removed.length > 0 || T.workflow_changes;
    }), N = U(() => a.status.has_changes || A.value), z = U(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), q = U(() => a.status.git_changes.has_other_changes), O = U(() => {
      var T;
      return ((T = a.status.workflows.analyzed) == null ? void 0 : T.filter((V) => V.status === "broken")) || [];
    }), W = U(() => {
      var T;
      return ((T = a.status.workflows.analyzed) == null ? void 0 : T.filter(
        (V) => V.has_path_sync_issues && !V.has_issues
      )) || [];
    }), te = U(() => O.value.length > 0);
    function se(T) {
      const V = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const H of V) {
        const M = T.match(H);
        if (M != null && M[1])
          return M[1];
      }
      return null;
    }
    function ce(T) {
      const V = T.map(se).filter((H) => !!H);
      return [...new Set(V)];
    }
    function he(T) {
      if (T.length === 0) return "";
      if (T.length === 1) return ` (>= ${T[0]})`;
      const V = T.slice(0, 2).map((M) => `>= ${M}`).join(", "), H = T.length > 2;
      return ` (${V}${H ? ", ..." : ""})`;
    }
    function ae(T) {
      return T.replace(/uninstallable node mappings?/gi, (V) => V.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Q(T) {
      const V = ae(T.issue_summary || "Has issues"), H = /(?:>=|v?\d+\.\d+)/i.test(V), M = ce(T.version_gated_guidance || []);
      return (T.nodes_version_gated_count || 0) > 0 && M.length > 0 && !H ? `${T.name} — ${V} (needs ComfyUI ${M.map((R) => `>= ${R}`).join(", ")})` : `${T.name} — ${V}`;
    }
    const me = U(() => O.value.reduce(
      (T, V) => T + (V.nodes_version_gated_count || 0),
      0
    )), Pe = U(() => {
      const T = O.value.flatMap(
        (V) => ce(V.version_gated_guidance || [])
      );
      return [...new Set(T)];
    }), ie = U(() => O.value.reduce(
      (T, V) => T + (V.nodes_uninstallable_count || 0),
      0
    )), ge = U(() => {
      const T = [];
      return me.value > 0 && T.push(
        `${me.value} require newer ComfyUI${he(Pe.value)}`
      ), ie.value > 0 && T.push(`${ie.value} need community packages`), T.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${T.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), re = U(() => te.value || W.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ae = U(() => {
      const T = [];
      return a.status.workflows.new.length > 0 && T.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && T.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && T.push(`${a.status.workflows.deleted.length} deleted`), T.length > 0 ? `${T.join(", ")} workflow${T.length === 1 && !T[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), oe = U(() => {
      var H, M;
      const T = [], V = a.status.comparison;
      return (H = V.missing_nodes) != null && H.length && T.push(`${V.missing_nodes.length} missing node${V.missing_nodes.length === 1 ? "" : "s"}`), (M = V.extra_nodes) != null && M.length && T.push(`${V.extra_nodes.length} untracked node${V.extra_nodes.length === 1 ? "" : "s"}`), T.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${T.join(" and ")}.`;
    }), ne = U(() => {
      var H, M;
      const T = [], V = a.status.comparison;
      return (H = V.extra_nodes) != null && H.length && (V.extra_nodes.slice(0, 3).forEach((R) => {
        T.push(`Untracked: ${R}`);
      }), V.extra_nodes.length > 3 && T.push(`...and ${V.extra_nodes.length - 3} more untracked`)), (M = V.missing_nodes) != null && M.length && (V.missing_nodes.slice(0, 3).forEach((R) => {
        T.push(`Missing: ${R}`);
      }), V.missing_nodes.length > 3 && T.push(`...and ${V.missing_nodes.length - 3} more missing`)), T;
    });
    return (T, V) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), L(ds, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (H) => T.$emit("start-setup"))
              }, {
                default: g(() => [...V[13] || (V[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), L(ds, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: V[1] || (V[1] = (H) => T.$emit("view-environments"))
              }, {
                default: g(() => [...V[14] || (V[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), L(ds, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: V[2] || (V[2] = (H) => T.$emit("create-environment"))
              }, {
                default: g(() => [...V[15] || (V[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: V[4] || (V[4] = (H) => r.value = !0),
            onMouseleave: V[5] || (V[5] = (H) => r.value = !1)
          }, [
            t("div", Uv, [
              k(as, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...V[16] || (V[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(Ld, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), L(xe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: g(() => [...V[17] || (V[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            k(Vm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, ss({
              left: g(() => [
                e.status.workflows.new.length ? (n(), L(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (n(), L(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (n(), L(ys, {
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
                  separator: A.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), L(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), L(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (n(), L(ys, {
                  key: 2,
                  icon: "●",
                  count: z.value,
                  label: z.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                q.value ? (n(), L(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                I.value && !E.value && !q.value ? (n(), L(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                I.value ? h("", !0) : (n(), L(ys, {
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
                  V[19] || (V[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Av, [
                    t("span", zv, m(Ae.value), 1),
                    k(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: V[3] || (V[3] = (H) => T.$emit("commit-changes"))
                    }, {
                      default: g(() => [...V[18] || (V[18] = [
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
          e.status.is_detached_head ? (n(), L(ds, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: V[6] || (V[6] = (H) => T.$emit("create-branch"))
              }, {
                default: g(() => [...V[20] || (V[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", Vv, [
            k(as, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...V[21] || (V[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (n(), i(j, { key: 0 }, [
              O.value.length > 0 ? (n(), L(ds, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${O.value.length} workflow${O.value.length === 1 ? "" : "s"} can't run`,
                description: ge.value,
                items: O.value.map(Q)
              }, {
                actions: g(() => [
                  k(xe, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[7] || (V[7] = (H) => T.$emit("view-workflows"))
                  }, {
                    default: g(() => [...V[22] || (V[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              W.value.length > 0 ? (n(), L(ds, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${W.value.length} workflow${W.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: W.value.map((H) => `${H.name} — ${H.models_needing_path_sync_count} model path${H.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  k(xe, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[8] || (V[8] = (H) => T.$emit("view-workflows"))
                  }, {
                    default: g(() => [...V[23] || (V[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !te.value ? (n(), L(ds, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  k(xe, {
                    variant: "primary",
                    size: "sm",
                    disabled: f.value,
                    onClick: C
                  }, {
                    default: g(() => [
                      $(m(f.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(xe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: V[9] || (V[9] = (H) => T.$emit("view-workflows"))
                  }, {
                    default: g(() => [...V[24] || (V[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (n(), L(ds, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: oe.value,
                items: ne.value
              }, {
                actions: g(() => [
                  k(xe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: g(() => [...V[25] || (V[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(xe, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[10] || (V[10] = (H) => T.$emit("view-nodes"))
                  }, {
                    default: g(() => [...V[26] || (V[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), L(ds, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  k(xe, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[11] || (V[11] = (H) => T.$emit("view-nodes"))
                  }, {
                    default: g(() => [...V[27] || (V[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : N.value ? (n(), i("span", Fv, "No issues")) : (n(), L(us, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(Ov, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: V[12] || (V[12] = (H) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Wv = /* @__PURE__ */ Ie(Bv, [["__scopeId", "data-v-df52ba90"]]), xR = vo({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const SR = [
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
  ...Array(12).fill(null).map((e, s) => ({
    name: `synced-workflow-${s + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + s,
    model_count: 1 + s % 3,
    sync_state: "synced"
  }))
], IR = {
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
], ER = [
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
function Fo() {
  return !1;
}
class Zr extends Error {
  constructor(o, a, l, r) {
    super(o);
    bn(this, "status");
    bn(this, "data");
    bn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function jv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function ct() {
  const e = b(!1), s = b(null);
  async function o(Y, Ce) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi(Y, Ce), ut = await Be.text();
    if (!Be.ok) {
      let Wt = {};
      if (ut)
        try {
          const os = JSON.parse(ut);
          os && typeof os == "object" && (Wt = os);
        } catch {
          Wt = { error: ut };
        }
      const gs = Wt.error || Wt.message || Wt.detail || Be.statusText || `Request failed: ${Be.status}`;
      throw new Zr(String(gs), Be.status, Wt, Y);
    }
    if (ut)
      return JSON.parse(ut);
  }
  async function a(Y) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(Y)}`);
  }
  async function l(Y, Ce, Be) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, email: Ce, password: Be })
    });
  }
  async function r(Y, Ce, Be) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, email: Ce, password: Be })
    });
  }
  async function u(Y, Ce) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(Y)}`, {
      headers: { Authorization: `Bearer ${Ce}` }
    });
  }
  async function c(Y, Ce) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, refresh_token: Ce || null })
    });
  }
  async function d(Y, Ce) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(Y)}`, {
      headers: { Authorization: `Bearer ${Ce}` }
    });
  }
  async function v(Y, Ce, Be) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(Ce)}/revisions?cloud_url=${encodeURIComponent(Y)}`,
      {
        headers: { Authorization: `Bearer ${Be}` }
      }
    );
  }
  async function f(Y, Ce, Be, ut) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Ce}`
      },
      body: JSON.stringify({
        cloud_url: Y,
        source_message: Be || null,
        cloud_environment_id: ut || null
      })
    });
  }
  async function p(Y = !1) {
    return o(Y ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(Y, Ce = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: Ce })
    });
  }
  async function y(Y = 10, Ce = 0) {
    return o(`/v2/comfygit/log?limit=${Y}&offset=${Ce}`);
  }
  async function _(Y, Ce = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(Y)}&limit=${Ce}`);
  }
  async function x(Y) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
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
  async function A(Y) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y, force: !0 })
    });
  }
  async function I(Y) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(Y)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function E(Y, Ce) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(Y)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Ce, force: !0 })
    });
  }
  async function N() {
    return o("/v2/comfygit/branches");
  }
  async function z(Y) {
    return o(`/v2/comfygit/commit/${Y}`);
  }
  async function q(Y, Ce = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: Ce })
    });
  }
  async function O(Y, Ce = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: Ce })
    });
  }
  async function W(Y, Ce = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: Ce })
    });
  }
  async function te(Y, Ce = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Y)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Ce })
    });
  }
  async function se() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const Y = await p();
        return {
          environments: [{
            name: Y.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + Y.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: Y.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: Y.branch
          }],
          current: Y.environment,
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
    return (await se()).environments;
  }
  async function he(Y) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(Y)}`);
    } catch {
      return null;
    }
  }
  async function ae(Y, Ce) {
    const Be = { target_env: Y };
    return Ce && (Be.workspace_path = Ce), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Be)
    });
  }
  async function Q() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function me(Y) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Pe() {
    return o("/v2/workspace/environments/create_status");
  }
  async function ie(Y = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Y}`);
  }
  async function ge(Y) {
    return o(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function re(Y = !1) {
    try {
      return o(Y ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Ce = await p(Y), Be = [];
      return Ce.workflows.new.forEach((ut) => {
        Be.push({
          name: ut,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), Ce.workflows.modified.forEach((ut) => {
        Be.push({
          name: ut,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), Ce.workflows.synced.forEach((ut) => {
        Be.push({
          name: ut,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), Be;
    }
  }
  async function Ae(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/details`);
  }
  async function oe(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/contract`);
  }
  async function ne(Y, Ce) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ce)
    });
  }
  async function T(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/contract`, {
      method: "DELETE"
    });
  }
  async function V(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function H(Y, Ce, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Ce, install_models: Be })
    });
  }
  async function M(Y, Ce, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Ce, importance: Be })
    });
  }
  async function R() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function de() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ze(Y) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Y)}`);
  }
  async function qe(Y) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function F(Y, Ce) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Ce })
    });
  }
  async function B(Y, Ce) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Ce })
    });
  }
  async function K(Y) {
    return o(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function _e(Y) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function ke() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function $e() {
    return o("/v2/workspace/models/directory");
  }
  async function Te(Y) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function Ne(Y) {
    const Ce = new URLSearchParams({ url: Y });
    return o(`/v2/workspace/huggingface/repo-info?${Ce}`);
  }
  async function Re() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ee(Y, Ce = 10) {
    const Be = new URLSearchParams({ query: Y, limit: String(Ce) });
    return o(`/v2/workspace/huggingface/search?${Be}`);
  }
  async function Ge(Y) {
    try {
      const Ce = Y ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Y)}` : "/v2/comfygit/config";
      return o(Ce);
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
  async function Oe(Y, Ce) {
    const Be = Ce ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Ce)}` : "/v2/comfygit/config";
    return o(Be, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function we(Y, Ce) {
    try {
      const Be = new URLSearchParams();
      return Y && Be.append("level", Y), Ce && Be.append("lines", Ce.toString()), o(`/v2/comfygit/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function ee(Y, Ce) {
    try {
      const Be = new URLSearchParams();
      return Y && Be.append("level", Y), Ce && Be.append("lines", Ce.toString()), o(`/v2/workspace/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function We() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function D() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function X() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function J(Y, Ce) {
    try {
      const Be = new URLSearchParams();
      return Y && Be.append("level", Y), Ce && Be.append("lines", Ce.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function pe() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function P(Y) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function ue() {
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
  async function Z(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ve(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function Ue(Y, Ce) {
    var gs, os, Uo, Ao;
    const Be = jv(), ut = ((os = (gs = window.app) == null ? void 0 : gs.api) == null ? void 0 : os.clientId) ?? ((Ao = (Uo = window.app) == null ? void 0 : Uo.api) == null ? void 0 : Ao.initialClientId) ?? "comfygit-panel", Lt = {
      id: Y.id,
      version: Y.version || Y.selected_version || "latest",
      selected_version: Y.selected_version || "latest",
      mode: Y.mode || "remote",
      channel: Y.channel || "default"
    };
    return Y.install_source && (Lt.install_source = Y.install_source), Y.install_source === "git" && Y.repository && (Lt.repository = Y.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Lt,
        ui_id: Be,
        client_id: ut
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Be, "for package:", Y.id), Ce != null && Ce.beforeQueueStart && await Ce.beforeQueueStart(Be), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Be };
  }
  async function Fe(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function Qe(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
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
  async function Ze(Y, Ce) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: Ce })
    });
  }
  async function nt(Y) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function mt(Y, Ce, Be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Ce, push_url: Be })
    });
  }
  async function St(Y, Ce) {
    const Be = {};
    return Ce && (Be["X-Git-Auth-Token"] = Ce), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST",
      headers: Be
    });
  }
  async function Kt(Y) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function Rt(Y = "skip", Ce = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: Ce
      })
    });
  }
  async function ve(Y, Ce) {
    const Be = Ce ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview?branch=${encodeURIComponent(Ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview`;
    return o(Be);
  }
  async function G(Y, Ce = {}) {
    const Be = { "Content-Type": "application/json" };
    return Ce.authToken && (Be["X-Git-Auth-Token"] = Ce.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({
        model_strategy: Ce.modelStrategy || "skip",
        force: Ce.force || !1,
        resolutions: Ce.resolutions
      })
    });
  }
  async function ye(Y, Ce) {
    const Be = Ce ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview?branch=${encodeURIComponent(Ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview`;
    return o(Be);
  }
  async function He(Y, Ce = {}) {
    const Be = { "Content-Type": "application/json" };
    return Ce.authToken && (Be["X-Git-Auth-Token"] = Ce.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/push`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({ force: Ce.force || !1 })
    });
  }
  async function ft(Y, Ce) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Ce })
    });
  }
  async function Nt(Y) {
    const Ce = {
      success: 0,
      failed: []
    };
    for (const Be of Y)
      try {
        await V(Be), Ce.success++;
      } catch (ut) {
        Ce.failed.push({
          name: Be,
          error: ut instanceof Error ? ut.message : "Unknown error"
        });
      }
    return Ce;
  }
  async function rt(Y) {
    var ut;
    const Ce = new FormData();
    if (Ce.append("file", Y), !((ut = window.app) != null && ut.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: Ce
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Be.ok) {
      const Lt = await Be.json().catch(() => ({}));
      throw new Error(Lt.error || `Preview failed: ${Be.status}`);
    }
    return Be.json();
  }
  async function Mt(Y) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Y)}`
    );
  }
  async function Qt(Y, Ce, Be, ut) {
    var gs;
    const Lt = new FormData();
    if (Lt.append("file", Y), Lt.append("name", Ce), Lt.append("model_strategy", Be), Lt.append("torch_backend", ut), !((gs = window.app) != null && gs.api))
      throw new Error("ComfyUI API not available");
    const Wt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
    });
    if (!Wt.ok) {
      const os = await Wt.json().catch(() => ({}));
      throw new Error(os.message || os.error || `Import failed: ${Wt.status}`);
    }
    return Wt.json();
  }
  async function Is() {
    return o("/v2/workspace/import/status");
  }
  async function ma(Y) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Y })
    });
  }
  async function Fs(Y, Ce, Be, ut) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Y,
        name: Ce,
        model_strategy: Be,
        torch_backend: ut
      })
    });
  }
  async function fa() {
    return o("/v2/setup/status");
  }
  async function po() {
    return o("/v2/comfygit/update-check");
  }
  async function go() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function va(Y) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Es() {
    return o("/v2/setup/initialize_status");
  }
  async function pa(Y) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Oo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ga() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ha(Y, Ce) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Y, save_key: Ce })
    });
  }
  async function ya() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function wa(Y) {
    const Ce = Y ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Y)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(Ce);
  }
  async function _n(Y) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function _a() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ka(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function ba(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/stop`, {
      method: "POST"
    });
  }
  async function $a(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/start`, {
      method: "POST"
    });
  }
  async function Ca(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/status`);
  }
  async function xa(Y) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function Sa(Y = !1) {
    return o(Y ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ia() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ea() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ta(Y) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Ma(Y) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function kn(Y) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function fe() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function le(Y) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/info`);
  }
  async function je(Y) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`);
  }
  async function Ke(Y, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ce)
    });
  }
  async function gt(Y, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(Ce)}/start`, {
      method: "POST"
    });
  }
  async function Ct(Y, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(Ce)}/stop`, {
      method: "POST"
    });
  }
  async function cs(Y, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(Ce)}`, {
      method: "DELETE"
    });
  }
  async function eo(Y) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: Y })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: p,
    commit: w,
    getHistory: y,
    getBranchHistory: _,
    exportEnv: x,
    validateExport: C,
    validateDeploy: S,
    exportEnvWithForce: A,
    validateEnvironmentExport: I,
    exportEnvironmentWithForce: E,
    // Git Operations
    getBranches: N,
    getCommitDetail: z,
    checkout: q,
    createBranch: O,
    switchBranch: W,
    deleteBranch: te,
    // Environment Management
    listEnvironments: se,
    getEnvironments: ce,
    getEnvironmentDetails: he,
    switchEnvironment: ae,
    getSwitchProgress: Q,
    createEnvironment: me,
    getCreateProgress: Pe,
    getComfyUIReleases: ie,
    deleteEnvironment: ge,
    // Workflow Management
    getWorkflows: re,
    getWorkflowDetails: Ae,
    getWorkflowContract: oe,
    saveWorkflowContract: ne,
    deleteWorkflowContract: T,
    resolveWorkflow: V,
    installWorkflowDeps: H,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: R,
    getWorkspaceModels: de,
    getModelDetails: ze,
    openFileLocation: qe,
    addModelSource: F,
    removeModelSource: B,
    deleteModel: K,
    downloadModel: _e,
    scanWorkspaceModels: ke,
    getModelsDirectory: $e,
    setModelsDirectory: Te,
    getHuggingFaceRepoInfo: Ne,
    getModelsSubdirectories: Re,
    searchHuggingFaceRepos: Ee,
    // Settings
    getConfig: Ge,
    updateConfig: Oe,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: u,
    logoutFromCloud: c,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: f,
    // Debug/Logs
    getEnvironmentLogs: we,
    getEnvironmentManifest: D,
    getWorkspaceLogs: ee,
    getEnvironmentLogPath: We,
    getWorkspaceLogPath: X,
    getOrchestratorLogs: J,
    getOrchestratorLogPath: pe,
    openFile: P,
    // Node Management
    getNodes: ue,
    trackNodeAsDev: Z,
    installNode: Ve,
    queueNodeInstall: Ue,
    updateNode: Fe,
    uninstallNode: Qe,
    // Git Remotes
    getRemotes: De,
    addRemote: Ze,
    removeRemote: nt,
    updateRemoteUrl: mt,
    fetchRemote: St,
    getRemoteSyncStatus: Kt,
    // Push/Pull
    getPullPreview: ve,
    pullFromRemote: G,
    getPushPreview: ye,
    pushToRemote: He,
    validateMerge: ft,
    // Environment Sync
    syncEnvironmentManually: Rt,
    // Workflow Repair
    repairWorkflowModels: Nt,
    // Import Operations
    previewTarballImport: rt,
    previewGitImport: ma,
    validateEnvironmentName: Mt,
    executeImport: Qt,
    executeGitImport: Fs,
    getImportProgress: Is,
    // First-Time Setup
    getSetupStatus: fa,
    // Manager Update Notice
    getUpdateCheck: po,
    updateManager: go,
    initializeWorkspace: va,
    getInitializeProgress: Es,
    validatePath: pa,
    // Deploy Operations
    getDeploySummary: Oo,
    getDataCenters: ga,
    testRunPodConnection: ha,
    getNetworkVolumes: ya,
    getRunPodGpuTypes: wa,
    deployToRunPod: _n,
    getRunPodPods: _a,
    terminateRunPodPod: ka,
    stopRunPodPod: ba,
    startRunPodPod: $a,
    getDeploymentStatus: Ca,
    exportDeployPackage: xa,
    getStoredRunPodKey: Sa,
    clearRunPodKey: Ia,
    // Custom Worker Operations
    getCustomWorkers: Ea,
    addCustomWorker: Ta,
    removeCustomWorker: Ma,
    testWorkerConnection: kn,
    scanForWorkers: fe,
    getWorkerSystemInfo: le,
    getWorkerInstances: je,
    deployToWorker: Ke,
    startWorkerInstance: gt,
    stopWorkerInstance: Ct,
    terminateWorkerInstance: cs,
    // Git Authentication
    testGitAuth: eo
  };
}
async function En(e, s) {
  var a;
  if (!((a = window.app) != null && a.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, s);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function Hv() {
  async function e() {
    try {
      return await En("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await En("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await En("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await En("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const qv = { class: "base-modal-header" }, Kv = {
  key: 0,
  class: "base-modal-title"
}, Jv = { class: "base-modal-body" }, Yv = {
  key: 0,
  class: "base-modal-loading"
}, Qv = {
  key: 1,
  class: "base-modal-error"
}, Xv = {
  key: 0,
  class: "base-modal-footer"
}, Zv = /* @__PURE__ */ Se({
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
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l() {
      o.closeOnOverlayClick && a("close");
    }
    function r(u) {
      u.key === "Escape" && o.showCloseButton && a("close");
    }
    return ot(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), No(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (n(), L(Ot, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Le(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = st(() => {
          }, ["stop"]))
        }, [
          t("div", qv, [
            tt(u.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Kv, m(e.title), 1)) : h("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: c[0] || (c[0] = (d) => u.$emit("close"))
            }, [...c[2] || (c[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : h("", !0)
          ]),
          t("div", Jv, [
            e.loading ? (n(), i("div", Yv, "Loading...")) : e.error ? (n(), i("div", Qv, m(e.error), 1)) : tt(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (n(), i("div", Xv, [
            tt(u.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), $t = /* @__PURE__ */ Ie(Zv, [["__scopeId", "data-v-8dab1081"]]), ep = ["type", "disabled"], tp = {
  key: 0,
  class: "spinner"
}, sp = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Le(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", tp)) : h("", !0),
      tt(s.$slots, "default", {}, void 0)
    ], 10, ep));
  }
}), Me = /* @__PURE__ */ Ie(sp, [["__scopeId", "data-v-f3452606"]]), op = {
  key: 0,
  class: "base-title-count"
}, np = /* @__PURE__ */ Se({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), L(xl(`h${e.level}`), {
      class: Le(["base-title", e.variant])
    }, {
      default: g(() => [
        tt(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", op, "(" + m(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Os = /* @__PURE__ */ Ie(np, [["__scopeId", "data-v-5a01561d"]]), ap = ["value", "disabled"], lp = {
  key: 0,
  value: "",
  disabled: ""
}, ip = ["value"], rp = {
  key: 0,
  class: "base-select-error"
}, up = /* @__PURE__ */ Se({
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
    function s(a) {
      return typeof a == "string" ? a : a.value;
    }
    function o(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (n(), i("div", {
      class: Le(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Le(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", lp, m(e.placeholder), 1)) : h("", !0),
        (n(!0), i(j, null, be(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, m(o(r)), 9, ip))), 128))
      ], 42, ap),
      e.error ? (n(), i("span", rp, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Js = /* @__PURE__ */ Ie(up, [["__scopeId", "data-v-4996bfe0"]]), cp = { class: "popover-header" }, dp = { class: "popover-title" }, mp = { class: "popover-content" }, fp = {
  key: 0,
  class: "popover-actions"
}, vp = /* @__PURE__ */ Se({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), L(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = st(() => {
          }, ["stop"]))
        }, [
          t("div", cp, [
            t("h4", dp, m(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", mp, [
            tt(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", fp, [
            tt(s.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), Yt = /* @__PURE__ */ Ie(vp, [["__scopeId", "data-v-42815ace"]]), pp = { class: "detail-section" }, gp = {
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
}, Np = { class: "node-content" }, Lp = { class: "node-main" }, Dp = { class: "node-name" }, Op = { class: "node-badge" }, Up = {
  key: 0,
  class: "node-version"
}, Ap = ["onClick"], zp = {
  key: 2,
  class: "node-install-queued"
}, Vp = {
  key: 0,
  class: "node-guidance"
}, Fp = /* @__PURE__ */ Se({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = ct(), d = b(null), v = b(!1), f = b(null), p = b(!1), w = b({}), y = b(!1), _ = b(/* @__PURE__ */ new Set()), x = b(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(ae) {
      switch (ae) {
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
    function A(ae) {
      switch (ae) {
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
    function I(ae) {
      switch (ae) {
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
    function E(ae) {
      switch (ae) {
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
    function N(ae) {
      switch (ae) {
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
    function z(ae) {
      if (!ae.loaded_by || ae.loaded_by.length === 0) return [];
      const Q = ae.hash || ae.filename;
      return _.value.has(Q) ? ae.loaded_by : ae.loaded_by.slice(0, 3);
    }
    function q(ae) {
      return _.value.has(ae);
    }
    function O(ae) {
      _.value.has(ae) ? _.value.delete(ae) : _.value.add(ae), _.value = new Set(_.value);
    }
    async function W() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (ae) {
        f.value = ae instanceof Error ? ae.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function te(ae, Q) {
      w.value[ae] = Q, p.value = !0;
    }
    async function se(ae) {
      try {
        await u(ae);
      } catch (Q) {
        f.value = Q instanceof Error ? Q.message : "Failed to open file location";
      }
    }
    async function ce(ae) {
      if (ae.package_id)
        try {
          const Q = ae.latest_version || "latest";
          await c({
            id: ae.package_id,
            version: Q,
            selected_version: Q,
            mode: "remote",
            channel: "default"
          }), x.value.add(ae.package_id);
        } catch (Q) {
          f.value = Q instanceof Error ? Q.message : "Failed to queue node install";
        }
    }
    async function he() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [ae, Q] of Object.entries(w.value))
          await r(o.workflowName, ae, Q);
        a("refresh"), a("close");
      } catch (ae) {
        f.value = ae instanceof Error ? ae.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return ot(W), (ae, Q) => (n(), i(j, null, [
      k($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: Q[4] || (Q[4] = (me) => a("close"))
      }, {
        body: g(() => [
          d.value ? (n(), i(j, { key: 0 }, [
            t("section", pp, [
              k(Os, { variant: "section" }, {
                default: g(() => [
                  $("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", gp, " No models used in this workflow ")) : h("", !0),
              (n(!0), i(j, null, be(d.value.models, (me) => {
                var Pe;
                return n(), i("div", {
                  key: me.hash || me.filename,
                  class: "model-card"
                }, [
                  t("div", hp, [
                    Q[6] || (Q[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", yp, m(me.filename), 1)
                  ]),
                  t("div", wp, [
                    t("div", _p, [
                      Q[7] || (Q[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Le(["value", S(me.status)])
                      }, m(A(me.status)), 3)
                    ]),
                    t("div", kp, [
                      t("span", bp, [
                        Q[8] || (Q[8] = $(" Importance: ", -1)),
                        k(Xr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: Q[0] || (Q[0] = (ie) => y.value = !0)
                        })
                      ]),
                      k(Js, {
                        "model-value": w.value[me.filename] || me.importance,
                        options: C,
                        "onUpdate:modelValue": (ie) => te(me.filename, ie)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    me.loaded_by && me.loaded_by.length > 0 ? (n(), i("div", $p, [
                      Q[9] || (Q[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Cp, [
                        (n(!0), i(j, null, be(z(me), (ie, ge) => (n(), i("div", {
                          key: `${ie.node_id}-${ge}`,
                          class: "node-reference"
                        }, m(ie.node_type) + " (Node #" + m(ie.node_id) + ") ", 1))), 128)),
                        me.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ie) => O(me.hash || me.filename)
                        }, m(q(me.hash || me.filename) ? "▼ Show less" : `▶ View all (${me.loaded_by.length})`), 9, xp)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    me.size_mb ? (n(), i("div", Sp, [
                      Q[10] || (Q[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Ip, m(me.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    me.has_category_mismatch ? (n(), i("div", Ep, [
                      Q[13] || (Q[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Tp, [
                        Q[11] || (Q[11] = $(" In ", -1)),
                        t("code", null, m(me.actual_category) + "/", 1),
                        Q[12] || (Q[12] = $(" but loader needs ", -1)),
                        t("code", null, m((Pe = me.expected_categories) == null ? void 0 : Pe[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  me.status !== "available" ? (n(), i("div", Mp, [
                    me.status === "downloadable" ? (n(), L(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: Q[1] || (Q[1] = (ie) => a("resolve"))
                    }, {
                      default: g(() => [...Q[14] || (Q[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : me.status === "category_mismatch" && me.file_path ? (n(), L(Me, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => se(me.file_path)
                    }, {
                      default: g(() => [...Q[15] || (Q[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : me.status !== "path_mismatch" ? (n(), L(Me, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: Q[2] || (Q[2] = (ie) => a("resolve"))
                    }, {
                      default: g(() => [...Q[16] || (Q[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            t("section", Pp, [
              k(Os, { variant: "section" }, {
                default: g(() => [
                  $("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", Rp, " No custom nodes used in this workflow ")) : h("", !0),
              (n(!0), i(j, null, be(d.value.nodes, (me, Pe) => (n(), i("div", {
                key: `${me.name}-${me.status}-${Pe}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Le(["node-status", I(me.status)])
                }, m(E(me.status)), 3),
                t("div", Np, [
                  t("div", Lp, [
                    t("span", Dp, m(me.name), 1),
                    t("span", Op, m(N(me.status)), 1),
                    me.version ? (n(), i("span", Up, "v" + m(me.version), 1)) : h("", !0),
                    me.status === "uninstallable" && me.package_id && !x.value.has(me.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ie) => ce(me)
                    }, " Install ", 8, Ap)) : me.status === "uninstallable" && me.package_id && x.value.has(me.package_id) ? (n(), i("span", zp, " Queued ")) : h("", !0)
                  ]),
                  me.guidance ? (n(), i("div", Vp, m(me.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          k(Me, {
            variant: "secondary",
            onClick: Q[3] || (Q[3] = (me) => a("close"))
          }, {
            default: g(() => [...Q[17] || (Q[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), L(Me, {
            key: 0,
            variant: "primary",
            onClick: he
          }, {
            default: g(() => [...Q[18] || (Q[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(Yt, {
        show: y.value,
        title: "Model Importance Levels",
        onClose: Q[5] || (Q[5] = (me) => y.value = !1)
      }, {
        content: g(() => [...Q[19] || (Q[19] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              $(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              $(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              $(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bp = /* @__PURE__ */ Ie(Fp, [["__scopeId", "data-v-543076d9"]]), Wp = ["type", "value", "placeholder", "disabled"], Gp = {
  key: 0,
  class: "base-input-error"
}, jp = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), i("div", {
      class: Le(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Le(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = ts((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ts((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Wp),
      e.error ? (n(), i("span", Gp, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Ie(jp, [["__scopeId", "data-v-9ba02cdc"]]), Hp = { class: "base-textarea-wrapper" }, qp = ["value", "rows", "placeholder", "disabled", "maxlength"], Kp = {
  key: 0,
  class: "base-textarea-count"
}, Jp = /* @__PURE__ */ Se({
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
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, u) => (n(), i("div", Hp, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (c) => r.$emit("update:modelValue", c.target.value)),
        onKeydown: [
          u[1] || (u[1] = ts(st((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = ts(st((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ts(l, ["enter"])
        ]
      }, null, 40, qp),
      e.showCharCount && e.maxLength ? (n(), i("div", Kp, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), Ys = /* @__PURE__ */ Ie(Jp, [["__scopeId", "data-v-c6d16c93"]]), Yp = ["for"], Qp = {
  key: 0,
  class: "base-form-field-required"
}, Xp = { class: "base-form-field-input" }, Zp = {
  key: 1,
  class: "base-form-field-error"
}, eg = {
  key: 2,
  class: "base-form-field-hint"
}, tg = /* @__PURE__ */ Se({
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
    const s = e, o = U(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Le(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(m(e.label) + " ", 1),
        e.required ? (n(), i("span", Qp, "*")) : h("", !0)
      ], 8, Yp)) : h("", !0),
      t("div", Xp, [
        tt(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", Zp, m(e.error), 1)) : e.hint ? (n(), i("span", eg, m(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ Ie(tg, [["__scopeId", "data-v-9a1cf296"]]), sg = { class: "contract-meta" }, og = { class: "contract-summary" }, ng = { class: "summary-pill" }, ag = { class: "summary-pill" }, lg = { class: "summary-pill" }, ig = { class: "contract-meta-grid" }, rg = { class: "contract-layout" }, ug = { class: "contract-column" }, cg = { class: "section-header" }, dg = {
  key: 0,
  class: "empty-message"
}, mg = ["onClick"], fg = { class: "item-card-title" }, vg = { class: "item-card-meta" }, pg = { class: "item-card-summary" }, gg = { key: 0 }, hg = { class: "contract-column" }, yg = { class: "section-header" }, wg = {
  key: 0,
  class: "empty-message"
}, _g = ["onClick"], kg = { class: "item-card-title" }, bg = { class: "item-card-meta" }, $g = { class: "item-card-summary" }, Cg = { class: "contract-footer" }, xg = { class: "contract-footer-left" }, Sg = { class: "contract-footer-right" }, Ig = /* @__PURE__ */ Se({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: u } = ct(), c = b(!1), d = b(!1), v = b(!1), f = b(null), p = b(null), w = b(null), y = b(null), _ = b(null), x = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], C = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], S = U(() => {
      var oe;
      return ((oe = p.value) == null ? void 0 : oe.contract_summary.has_contract) === !0;
    }), A = U(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const oe = w.value.default_contract || "default";
      return w.value.contracts[oe] || (w.value.contracts[oe] = { inputs: [], outputs: [] }), w.value.contracts[oe];
    }), I = U(() => {
      var ne;
      const oe = ((ne = p.value) == null ? void 0 : ne.contract_summary.status) ?? "none";
      return oe === "valid" ? "Valid Contract" : oe === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function E(oe) {
      return oe ? JSON.parse(JSON.stringify(oe)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function N(oe) {
      return oe === "integer" || oe === "number";
    }
    function z(oe) {
      return oe === "enum";
    }
    function q(oe) {
      return oe == null ? "" : String(oe);
    }
    function O(oe) {
      const ne = oe.trim();
      if (!ne) return;
      const T = Number(ne);
      return Number.isFinite(T) ? T : void 0;
    }
    function W(oe) {
      return (oe || []).join(`
`);
    }
    function te(oe) {
      return oe.split(/[\n,]/).map((ne) => ne.trim()).filter(Boolean);
    }
    function se(oe) {
      return oe == null ? "" : String(oe);
    }
    function ce(oe) {
      return typeof oe == "string" ? oe.length > 24 ? `${oe.slice(0, 24)}...` : oe : String(oe);
    }
    function he(oe) {
      if (!w.value) return;
      const ne = oe.trim() || "default";
      w.value.default_contract = ne, w.value.contracts[ne] || (w.value.contracts[ne] = { inputs: [], outputs: [] });
    }
    function ae(oe) {
      A.value.inputs.splice(oe, 1), y.value === oe ? y.value = null : y.value != null && y.value > oe && (y.value -= 1);
    }
    function Q(oe) {
      A.value.outputs.splice(oe, 1), _.value === oe ? _.value = null : _.value != null && _.value > oe && (_.value -= 1);
    }
    function me(oe) {
      y.value = y.value === oe ? null : oe;
    }
    function Pe(oe) {
      _.value = _.value === oe ? null : oe;
    }
    async function ie() {
      c.value = !0, f.value = null;
      try {
        p.value = await l(o.workflowName), w.value = E(p.value.execution_contract);
      } catch (oe) {
        f.value = oe instanceof Error ? oe.message : "Failed to load workflow contract";
      } finally {
        c.value = !1;
      }
    }
    async function ge() {
      if (w.value) {
        d.value = !0, f.value = null;
        try {
          p.value = await r(o.workflowName, w.value), w.value = E(p.value.execution_contract), a("refresh");
        } catch (oe) {
          f.value = oe instanceof Error ? oe.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function re() {
      v.value = !0, f.value = null;
      try {
        await u(o.workflowName), await ie(), a("refresh");
      } catch (oe) {
        f.value = oe instanceof Error ? oe.message : "Failed to delete workflow contract";
      } finally {
        v.value = !1;
      }
    }
    function Ae() {
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: o.workflowName }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel")), a("close");
    }
    return ot(ie), (oe, ne) => (n(), L($t, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: c.value,
      error: f.value || void 0,
      "fixed-height": "",
      onClose: ne[5] || (ne[5] = (T) => a("close"))
    }, {
      body: g(() => [
        w.value ? (n(), i(j, { key: 0 }, [
          t("section", sg, [
            t("div", og, [
              t("span", ng, m(I.value), 1),
              t("span", ag, m(A.value.inputs.length) + " input" + m(A.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", lg, m(A.value.outputs.length) + " output" + m(A.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", ig, [
              k(vt, { label: "Default Contract" }, {
                default: g(() => [
                  k(it, {
                    "model-value": w.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": he
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              k(vt, { label: "Display Name" }, {
                default: g(() => [
                  k(it, {
                    modelValue: A.value.display_name,
                    "onUpdate:modelValue": ne[0] || (ne[0] = (T) => A.value.display_name = T),
                    "full-width": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            k(vt, { label: "Description" }, {
              default: g(() => [
                k(Ys, {
                  modelValue: A.value.description,
                  "onUpdate:modelValue": ne[1] || (ne[1] = (T) => A.value.description = T),
                  rows: 2,
                  placeholder: "Optional description for this contract"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          t("section", rg, [
            t("div", ug, [
              t("div", cg, [
                k(Os, { variant: "section" }, {
                  default: g(() => [...ne[6] || (ne[6] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              A.value.inputs.length ? h("", !0) : (n(), i("div", dg, " No inputs configured. ")),
              (n(!0), i(j, null, be(A.value.inputs, (T, V) => (n(), i("div", {
                key: `input-${V}`,
                class: Le(["item-card", { expanded: y.value === V }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (H) => me(V)
                }, [
                  t("div", null, [
                    t("div", fg, m(T.name || `Input ${V + 1}`), 1),
                    t("div", vg, [
                      $(" Node " + m(T.node_id || "?"), 1),
                      T.widget_idx !== void 0 ? (n(), i(j, { key: 0 }, [
                        $(" · Widget " + m(T.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", pg, [
                      t("span", null, m(T.type || "string"), 1),
                      t("span", null, m(T.required ? "required" : "optional"), 1),
                      T.default !== void 0 && T.default !== "" ? (n(), i("span", gg, "default " + m(ce(T.default)), 1)) : h("", !0)
                    ])
                  ]),
                  k(Me, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((H) => ae(V), ["stop"])
                  }, {
                    default: g(() => [...ne[7] || (ne[7] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, mg),
                y.value === V ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: ne[2] || (ne[2] = st(() => {
                  }, ["stop"]))
                }, [
                  k(vt, { label: "Name" }, {
                    default: g(() => [
                      k(it, {
                        modelValue: T.name,
                        "onUpdate:modelValue": (H) => T.name = H,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Display Name" }, {
                    default: g(() => [
                      k(it, {
                        modelValue: T.display_name,
                        "onUpdate:modelValue": (H) => T.display_name = H,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Type" }, {
                    default: g(() => [
                      k(Js, {
                        "model-value": T.type,
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (H) => T.type = H
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Required" }, {
                    default: g(() => [
                      k(Js, {
                        "model-value": T.required ? "true" : "false",
                        options: C,
                        "full-width": "",
                        "onUpdate:modelValue": (H) => T.required = H === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, {
                    class: Le({ "item-grid-full": T.type === "string" || T.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      T.type === "string" ? (n(), L(Ys, {
                        key: 0,
                        "model-value": se(T.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (H) => T.default = H
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(it, {
                        key: 1,
                        modelValue: T.default,
                        "onUpdate:modelValue": (H) => T.default = H,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  N(T.type) ? (n(), L(vt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      k(it, {
                        "model-value": q(T.min),
                        "full-width": "",
                        "onUpdate:modelValue": (H) => T.min = O(H)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  N(T.type) ? (n(), L(vt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      k(it, {
                        "model-value": q(T.max),
                        "full-width": "",
                        "onUpdate:modelValue": (H) => T.max = O(H)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  z(T.type) ? (n(), L(vt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      k(Ys, {
                        "model-value": W(T.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (H) => T.enum_values = te(H)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("div", hg, [
              t("div", yg, [
                k(Os, { variant: "section" }, {
                  default: g(() => [...ne[8] || (ne[8] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              A.value.outputs.length ? h("", !0) : (n(), i("div", wg, " No outputs configured. ")),
              (n(!0), i(j, null, be(A.value.outputs, (T, V) => (n(), i("div", {
                key: `output-${V}`,
                class: Le(["item-card", { expanded: _.value === V }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (H) => Pe(V)
                }, [
                  t("div", null, [
                    t("div", kg, m(T.name || `Output ${V + 1}`), 1),
                    t("div", bg, [
                      $(" Node " + m(T.node_id || "?"), 1),
                      T.selector ? (n(), i(j, { key: 0 }, [
                        $(" · " + m(T.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", $g, [
                      t("span", null, m(T.type || "file"), 1)
                    ])
                  ]),
                  k(Me, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((H) => Q(V), ["stop"])
                  }, {
                    default: g(() => [...ne[9] || (ne[9] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, _g),
                _.value === V ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: ne[3] || (ne[3] = st(() => {
                  }, ["stop"]))
                }, [
                  k(vt, { label: "Name" }, {
                    default: g(() => [
                      k(it, {
                        modelValue: T.name,
                        "onUpdate:modelValue": (H) => T.name = H,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Display Name" }, {
                    default: g(() => [
                      k(it, {
                        modelValue: T.display_name,
                        "onUpdate:modelValue": (H) => T.display_name = H,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Type" }, {
                    default: g(() => [
                      k(Js, {
                        "model-value": T.type,
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (H) => T.type = H
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ])
        ], 64)) : h("", !0)
      ]),
      footer: g(() => [
        t("div", Cg, [
          t("div", xg, [
            k(Me, {
              variant: "secondary",
              onClick: Ae
            }, {
              default: g(() => [...ne[10] || (ne[10] = [
                $(" Open I/O Mapping Mode ", -1)
              ])]),
              _: 1
            })
          ]),
          t("div", Sg, [
            k(Me, {
              variant: "secondary",
              onClick: ne[4] || (ne[4] = (T) => a("close"))
            }, {
              default: g(() => [...ne[11] || (ne[11] = [
                $(" Close ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: "danger",
              disabled: !S.value,
              loading: v.value,
              onClick: re
            }, {
              default: g(() => [...ne[12] || (ne[12] = [
                $(" Delete Contract ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            k(Me, {
              variant: "primary",
              loading: d.value,
              onClick: ge
            }, {
              default: g(() => [...ne[13] || (ne[13] = [
                $(" Save Contract ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Eg = /* @__PURE__ */ Ie(Ig, [["__scopeId", "data-v-143775b1"]]), at = vo({
  items: [],
  status: "idle"
});
let ks = null;
function eu() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Wa(e) {
  return at.items.find((s) => s.id === e);
}
async function _o() {
  if (at.status === "downloading") return;
  const e = at.items.find((s) => s.status === "queued");
  if (!e) {
    at.status = "idle";
    return;
  }
  at.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Tg(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    at.status = "idle", _o();
  }
}
async function Tg(e) {
  return new Promise((s, o) => {
    ks && (ks.close(), ks = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ks = l;
    let r = Date.now(), u = 0, c = Date.now(), d = !1;
    const v = 2e3, f = window.setInterval(() => {
      d || Date.now() - c > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(f);
    };
    l.onmessage = (w) => {
      try {
        const y = JSON.parse(w.data);
        switch (y.type) {
          case "progress":
            e.downloaded = y.downloaded || 0, e.size = y.total || e.size, c = Date.now();
            const _ = c, x = (_ - r) / 1e3, C = e.downloaded - u;
            if (C > 0 && x > 0)
              if (e.speed = C / x, r = _, u = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), ks = null, s();
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
async function Mg() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (at.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: eu(),
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
      at.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Do() {
  function e(C) {
    for (const S of C) {
      if (at.items.some(
        (E) => E.url === S.url && E.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const I = {
        id: eu(),
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
      at.items.push(I);
    }
    at.status === "idle" && _o();
  }
  async function s(C) {
    const S = Wa(C);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ks && (ks.close(), ks = null), S.status = "failed", S.error = "Cancelled by user", at.status = "idle", _o();
      } else if (S.status === "queued") {
        const A = at.items.findIndex((I) => I.id === C);
        A >= 0 && at.items.splice(A, 1);
      }
    }
  }
  function o(C) {
    const S = Wa(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, at.status === "idle" && _o());
  }
  function a(C) {
    const S = Wa(C);
    !S || S.status !== "paused" || (S.status = "queued", at.status === "idle" && _o());
  }
  function l() {
    const C = at.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    at.status === "idle" && _o();
  }
  function r(C) {
    const S = at.items.findIndex((A) => A.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(at.items[S].status) && at.items.splice(S, 1);
  }
  function u() {
    at.items = at.items.filter((C) => C.status !== "completed");
  }
  function c() {
    at.items = at.items.filter((C) => C.status !== "failed");
  }
  const d = U(
    () => at.items.find((C) => C.status === "downloading")
  ), v = U(
    () => at.items.filter((C) => C.status === "queued")
  ), f = U(
    () => at.items.filter((C) => C.status === "completed")
  ), p = U(
    () => at.items.filter((C) => C.status === "failed")
  ), w = U(
    () => at.items.filter((C) => C.status === "paused")
  ), y = U(() => at.items.length > 0), _ = U(
    () => at.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = U(
    () => at.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Vn(at),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: p,
    pausedItems: w,
    hasItems: y,
    activeCount: _,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: u,
    clearFailed: c,
    loadPendingDownloads: Mg
  };
}
function tu() {
  const e = b(null), s = b(null), o = b([]), a = b([]), l = b(!1), r = b(null);
  async function u(A, I) {
    var N;
    if (!((N = window.app) != null && N.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(A, I);
    if (!E.ok) {
      const z = await E.json().catch(() => ({})), q = z.error || z.message || `Request failed: ${E.status}`;
      throw new Error(q);
    }
    return E.json();
  }
  async function c(A) {
    l.value = !0, r.value = null;
    try {
      let I;
      return Fo() || (I = await u(
        `/v2/comfygit/workflow/${A}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), I.nodes.version_gated = I.nodes.version_gated || [], I.nodes.uninstallable = I.nodes.uninstallable || [], I.node_guidance = I.node_guidance || {}, I.package_aliases = I.package_aliases || {}, e.value = I, I;
    } catch (I) {
      const E = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = E, I;
    } finally {
      l.value = !1;
    }
  }
  async function d(A, I, E, N) {
    l.value = !0, r.value = null;
    try {
      let z;
      if (!Fo()) {
        const q = Object.fromEntries(I), O = Object.fromEntries(E), W = N ? Array.from(N) : [];
        z = await u(
          `/v2/comfygit/workflow/${A}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: q,
              model_choices: O,
              skipped_packages: W
            })
          }
        );
      }
      return s.value = z, z;
    } catch (z) {
      const q = z instanceof Error ? z.message : "Unknown error occurred";
      throw r.value = q, z;
    } finally {
      l.value = !1;
    }
  }
  async function v(A, I = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Fo() || (E = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: I })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const N = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = N, E;
    } finally {
      l.value = !1;
    }
  }
  async function f(A, I = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Fo() || (E = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: I })
        }
      )), a.value = E.results, E.results;
    } catch (E) {
      const N = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = N, E;
    } finally {
      l.value = !1;
    }
  }
  const p = vo({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function y(A) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Fo(), await _(A);
    } catch (I) {
      const E = I instanceof Error ? I.message : "Failed to install nodes";
      throw p.installError = E, I;
    }
  }
  async function _(A) {
    var E;
    const I = await u(
      `/v2/comfygit/workflow/${A}/install`,
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
      const N = new Map(((E = I.failed) == null ? void 0 : E.map((z) => [z.node_id, z.error])) || []);
      for (let z = 0; z < p.nodesToInstall.length; z++) {
        const q = p.nodesToInstall[z], O = N.get(q);
        p.nodeInstallProgress.completedNodes.push({
          node_id: q,
          success: !O,
          error: O
        });
      }
    }
    return p.nodesInstalled = I.nodes_installed, p.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (p.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function x(A, I, E) {
    w(), p.phase = "resolving", r.value = null;
    const N = Object.fromEntries(I), z = Object.fromEntries(E);
    try {
      const q = await fetch(`/v2/comfygit/workflow/${A}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: z
        })
      });
      if (!q.ok)
        throw new Error(`Request failed: ${q.status}`);
      if (!q.body)
        throw new Error("No response body");
      const O = q.body.getReader(), W = new TextDecoder();
      let te = "";
      for (; ; ) {
        const { done: se, value: ce } = await O.read();
        if (se) break;
        te += W.decode(ce, { stream: !0 });
        const he = te.split(`

`);
        te = he.pop() || "";
        for (const ae of he) {
          if (!ae.trim()) continue;
          const Q = ae.split(`
`);
          let me = "", Pe = "";
          for (const ie of Q)
            ie.startsWith("event: ") ? me = ie.slice(7) : ie.startsWith("data: ") && (Pe = ie.slice(6));
          if (Pe)
            try {
              const ie = JSON.parse(Pe);
              C(me, ie);
            } catch (ie) {
              console.warn("Failed to parse SSE event:", ie);
            }
        }
      }
    } catch (q) {
      const O = q instanceof Error ? q.message : "Unknown error occurred";
      throw r.value = O, p.error = O, p.phase = "error", q;
    }
  }
  function C(A, I) {
    switch (A) {
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
        p.nodesToInstall = I.nodes_to_install || [], I.download_results && (p.completedFiles = I.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = I.message, p.phase = "error", r.value = I.message;
        break;
    }
  }
  function S(A, I) {
    const { addToQueue: E } = Do(), N = I.filter((z) => z.url && z.target_path).map((z) => ({
      workflow: A,
      filename: z.filename,
      url: z.url,
      targetPath: z.target_path,
      size: z.size || 0,
      type: "model"
    }));
    return N.length > 0 && E(N), N.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: c,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: y,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const Pg = { class: "resolution-stepper" }, Rg = { class: "stepper-header" }, Ng = ["onClick"], Lg = {
  key: 0,
  class: "step-icon"
}, Dg = {
  key: 1,
  class: "step-number"
}, Og = { class: "step-label" }, Ug = {
  key: 0,
  class: "step-connector"
}, Ag = { class: "stepper-content" }, zg = /* @__PURE__ */ Se({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: s }) {
    const o = e, a = s;
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
      a("step-change", v);
    }
    return (v, f) => (n(), i("div", Pg, [
      t("div", Rg, [
        (n(!0), i(j, null, be(e.steps, (p, w) => (n(), i("div", {
          key: p.id,
          class: Le(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: c(p.id)
          }]),
          onClick: (y) => d(p.id)
        }, [
          t("div", {
            class: Le(["step-indicator", u(p.id)])
          }, [
            l(p.id) ? (n(), i("span", Lg, "✓")) : (n(), i("span", Dg, m(w + 1), 1))
          ], 2),
          t("div", Og, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Ug)) : h("", !0)
        ], 10, Ng))), 128))
      ]),
      t("div", Ag, [
        tt(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Vg = /* @__PURE__ */ Ie(zg, [["__scopeId", "data-v-2a7b3af8"]]), Fg = /* @__PURE__ */ Se({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (n(), i("span", {
      class: Le(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), Yn = /* @__PURE__ */ Ie(Fg, [["__scopeId", "data-v-17ec4b80"]]), Bg = { class: "node-info" }, Wg = { class: "node-info-text" }, Gg = { class: "item-body" }, jg = {
  key: 0,
  class: "resolved-state"
}, Hg = {
  key: 1,
  class: "multiple-options"
}, qg = {
  key: 0,
  class: "installed-packs-section"
}, Kg = { class: "installed-packs-list" }, Jg = ["onClick"], Yg = { class: "installed-pack-name" }, Qg = { class: "installed-pack-source" }, Xg = { class: "options-list" }, Zg = ["onClick"], eh = ["name", "value", "checked", "onChange"], th = { class: "option-content" }, sh = { class: "option-header" }, oh = { class: "option-package-id" }, nh = {
  key: 0,
  class: "option-title"
}, ah = { class: "option-meta" }, lh = {
  key: 0,
  class: "installed-badge"
}, ih = { class: "action-buttons" }, rh = {
  key: 2,
  class: "unresolved"
}, uh = {
  key: 0,
  class: "installed-packs-section"
}, ch = { class: "installed-packs-list" }, dh = ["onClick"], mh = { class: "installed-pack-name" }, fh = { class: "installed-pack-source" }, vh = {
  key: 1,
  class: "searching-state"
}, ph = { class: "options-list" }, gh = ["onClick"], hh = ["name", "value"], yh = { class: "option-content" }, wh = { class: "option-header" }, _h = { class: "option-package-id" }, kh = {
  key: 0,
  class: "option-description"
}, bh = { class: "option-meta" }, $h = {
  key: 0,
  class: "installed-badge"
}, Ch = {
  key: 3,
  class: "unresolved-message"
}, xh = { class: "action-buttons" }, Sh = /* @__PURE__ */ Se({
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
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(f, p = 80) {
      return f.length <= p ? f : f.slice(0, p - 3) + "...";
    }
    const r = U(() => !!o.choice);
    U(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.action;
    }), U(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.package_id;
    });
    const u = U(() => o.installedNodePacks || []), c = U(() => {
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
      class: Le(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", Bg, [
        t("span", Wg, [
          p[7] || (p[7] = $("Node type: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Le(["status-badge", c.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", Gg, [
        r.value ? (n(), i("div", jg, [
          k(Me, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Hg, [
          u.value.length > 0 ? (n(), i("div", qg, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", Kg, [
              (n(!0), i(j, null, be(u.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", Yg, m(w.package_id), 1),
                t("span", Qg, m(v(w.source)), 1)
              ], 8, Jg))), 128))
            ])
          ])) : h("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", Xg, [
            (n(!0), i(j, null, be(e.options, (w, y) => (n(), i("label", {
              key: w.package_id,
              class: Le(["option-card", { selected: e.selectedOptionIndex === y }]),
              onClick: (_) => d(y)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: y,
                checked: e.selectedOptionIndex === y,
                onChange: (_) => d(y)
              }, null, 40, eh),
              t("div", th, [
                t("div", sh, [
                  t("span", oh, m(w.package_id), 1),
                  k(Yn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (n(), i("div", nh, m(w.title), 1)) : h("", !0),
                t("div", ah, [
                  w.is_installed ? (n(), i("span", lh, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, Zg))), 128))
          ]),
          t("div", ih, [
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", rh, [
          u.value.length > 0 ? (n(), i("div", uh, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", ch, [
              (n(!0), i(j, null, be(u.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", mh, m(w.package_id), 1),
                t("span", fh, m(v(w.source)), 1)
              ], 8, dh))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (n(), i("div", vh, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(j, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", ph, [
              (n(!0), i(j, null, be(e.searchResults.slice(0, 5), (w, y) => (n(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => a("search-result-selected", w)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, hh),
                t("div", yh, [
                  t("div", wh, [
                    t("span", _h, m(w.package_id), 1),
                    k(Yn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (n(), i("div", kh, m(l(w.description)), 1)) : h("", !0),
                  t("div", bh, [
                    w.is_installed ? (n(), i("span", $h, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, gh))), 128))
            ])
          ], 64)) : (n(), i("div", Ch, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", xh, [
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => a("search"))
            }, {
              default: g(() => {
                var w;
                return [
                  $(m((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => a("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => a("mark-optional"))
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
}), Ih = /* @__PURE__ */ Ie(Sh, [["__scopeId", "data-v-fb0bbf03"]]), Eh = { class: "item-navigator" }, Th = { class: "nav-item-info" }, Mh = ["title"], Ph = { class: "nav-controls" }, Rh = { class: "nav-arrows" }, Nh = ["disabled"], Lh = ["disabled"], Dh = { class: "nav-position" }, Oh = /* @__PURE__ */ Se({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Eh, [
      t("div", Th, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, Mh)
      ]),
      t("div", Ph, [
        t("div", Rh, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Nh),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Lh)
        ]),
        t("span", Dh, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), su = /* @__PURE__ */ Ie(Oh, [["__scopeId", "data-v-74af7920"]]), Uh = { class: "node-resolution-step" }, Ah = {
  key: 0,
  class: "auto-resolved-section"
}, zh = { class: "section-header" }, Vh = { class: "stat-badge" }, Fh = { class: "resolved-packages-list" }, Bh = { class: "package-info" }, Wh = { class: "package-id" }, Gh = { class: "node-count" }, jh = { class: "package-actions" }, Hh = {
  key: 0,
  class: "status-badge install"
}, qh = {
  key: 1,
  class: "status-badge skip"
}, Kh = ["onClick"], Jh = {
  key: 1,
  class: "section-divider"
}, Yh = { class: "step-header" }, Qh = { class: "stat-badge" }, Xh = {
  key: 1,
  class: "step-body"
}, Zh = {
  key: 3,
  class: "empty-state"
}, ey = { class: "node-modal-body" }, ty = { class: "node-search-results-container" }, sy = {
  key: 0,
  class: "node-search-results"
}, oy = ["onClick"], ny = { class: "node-result-header" }, ay = { class: "node-result-package-id" }, ly = {
  key: 0,
  class: "node-result-description"
}, iy = {
  key: 1,
  class: "node-empty-state"
}, ry = {
  key: 2,
  class: "node-empty-state"
}, uy = {
  key: 3,
  class: "node-empty-state"
}, cy = { class: "node-manual-entry-modal" }, dy = { class: "node-modal-body" }, my = { class: "node-modal-actions" }, fy = /* @__PURE__ */ Se({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, a = s, { searchNodes: l } = tu(), r = b(0), u = b(!1), c = b(!1), d = b(""), v = b(""), f = b([]), p = b(!1), w = b(/* @__PURE__ */ new Map()), y = b(/* @__PURE__ */ new Set()), _ = b(!1);
    function x() {
      _.value && ge(), _.value = !1;
    }
    const C = U(() => o.nodes[r.value]), S = U(() => o.nodes.filter((M) => o.nodeChoices.has(M.node_type)).length), A = U(() => C.value ? w.value.get(C.value.node_type) || [] : []), I = U(() => C.value ? y.value.has(C.value.node_type) : !1);
    _t(C, async (M) => {
      var R;
      M && ((R = M.options) != null && R.length || w.value.has(M.node_type) || y.value.has(M.node_type) || o.nodeChoices.has(M.node_type) || await E(M.node_type));
    }, { immediate: !0 });
    async function E(M) {
      y.value.add(M);
      try {
        const R = await l(M, 5);
        w.value.set(M, R);
      } catch {
        w.value.set(M, []);
      } finally {
        y.value.delete(M);
      }
    }
    const N = U(() => o.autoResolvedPackages.filter((M) => !o.skippedPackages.has(M.package_id)).length);
    function z(M) {
      return o.skippedPackages.has(M);
    }
    function q(M) {
      a("package-skip", M);
    }
    const O = U(() => {
      var R;
      if (!C.value) return "not-found";
      const M = o.nodeChoices.get(C.value.node_type);
      if (M)
        switch (M.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (R = C.value.options) != null && R.length ? "ambiguous" : "not-found";
    }), W = U(() => {
      var R;
      if (!C.value) return;
      const M = o.nodeChoices.get(C.value.node_type);
      if (M)
        switch (M.action) {
          case "install":
            return M.package_id ? `→ ${M.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (R = C.value.options) != null && R.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function te(M) {
      M >= 0 && M < o.nodes.length && (r.value = M);
    }
    function se() {
      var M;
      for (let R = r.value + 1; R < o.nodes.length; R++) {
        const de = o.nodes[R];
        if (!((M = o.nodeChoices) != null && M.has(de.node_type))) {
          te(R);
          return;
        }
      }
    }
    function ce() {
      C.value && (a("mark-optional", C.value.node_type), Pt(() => se()));
    }
    function he() {
      C.value && (a("skip", C.value.node_type), Pt(() => se()));
    }
    function ae(M) {
      C.value && (a("option-selected", C.value.node_type, M), Pt(() => se()));
    }
    function Q() {
      C.value && a("clear-choice", C.value.node_type);
    }
    function me() {
      C.value && (d.value = C.value.node_type, f.value = A.value, u.value = !0, ne(d.value));
    }
    function Pe() {
      v.value = "", c.value = !0;
    }
    function ie(M) {
      C.value && (a("manual-entry", C.value.node_type, M), Pt(() => se()));
    }
    function ge() {
      u.value = !1, d.value = "", f.value = [];
    }
    function re() {
      c.value = !1, v.value = "";
    }
    let Ae = null;
    function oe() {
      Ae && clearTimeout(Ae), Ae = setTimeout(() => {
        ne(d.value);
      }, 300);
    }
    async function ne(M) {
      if (!M.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(M, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function T(M) {
      C.value && (a("manual-entry", C.value.node_type, M.package_id), ge(), Pt(() => se()));
    }
    function V(M) {
      C.value && (a("manual-entry", C.value.node_type, M.package_id), Pt(() => se()));
    }
    function H() {
      !C.value || !v.value.trim() || (a("manual-entry", C.value.node_type, v.value.trim()), re(), Pt(() => se()));
    }
    return (M, R) => {
      var de, ze;
      return n(), i("div", Uh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Ah, [
          t("div", zh, [
            R[6] || (R[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Vh, m(N.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Fh, [
            (n(!0), i(j, null, be(e.autoResolvedPackages, (qe) => (n(), i("div", {
              key: qe.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Bh, [
                t("code", Wh, m(qe.package_id), 1),
                t("span", Gh, m(qe.node_types_count) + " node type" + m(qe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", jh, [
                z(qe.package_id) ? (n(), i("span", qh, " SKIPPED ")) : (n(), i("span", Hh, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (F) => q(qe.package_id)
                }, m(z(qe.package_id) ? "Include" : "Skip"), 9, Kh)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", Jh)) : h("", !0),
        e.nodes.length > 0 ? (n(), i(j, { key: 2 }, [
          t("div", Yh, [
            R[7] || (R[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Qh, m(S.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (n(), L(su, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: R[0] || (R[0] = (qe) => te(r.value - 1)),
            onNext: R[1] || (R[1] = (qe) => te(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          C.value ? (n(), i("div", Xh, [
            k(Ih, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((de = C.value.options) != null && de.length),
              options: C.value.options,
              choice: (ze = e.nodeChoices) == null ? void 0 : ze.get(C.value.node_type),
              status: O.value,
              "status-label": W.value,
              "search-results": A.value,
              "is-searching": I.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ce,
              onSkip: he,
              onManualEntry: Pe,
              onSearch: me,
              onOptionSelected: ae,
              onClearChoice: Q,
              onSearchResultSelected: V,
              onInstalledPackSelected: ie
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", Zh, [...R[8] || (R[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (n(), L(Ot, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: R[4] || (R[4] = st((qe) => _.value = !0, ["self"])),
            onMouseup: st(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: R[3] || (R[3] = (qe) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                R[9] || (R[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ge
                }, "✕")
              ]),
              t("div", ey, [
                k(it, {
                  modelValue: d.value,
                  "onUpdate:modelValue": R[2] || (R[2] = (qe) => d.value = qe),
                  placeholder: "Search by node type, package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                t("div", ty, [
                  f.value.length > 0 ? (n(), i("div", sy, [
                    (n(!0), i(j, null, be(f.value, (qe) => (n(), i("div", {
                      key: qe.package_id,
                      class: "node-search-result-item",
                      onClick: (F) => T(qe)
                    }, [
                      t("div", ny, [
                        t("code", ay, m(qe.package_id), 1),
                        qe.match_confidence ? (n(), L(Yn, {
                          key: 0,
                          confidence: qe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      qe.description ? (n(), i("div", ly, m(qe.description), 1)) : h("", !0)
                    ], 8, oy))), 128))
                  ])) : p.value ? (n(), i("div", iy, "Searching...")) : d.value ? (n(), i("div", ry, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", uy, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (n(), L(Ot, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: st(re, ["self"])
          }, [
            t("div", cy, [
              t("div", { class: "node-modal-header" }, [
                R[10] || (R[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              t("div", dy, [
                k(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": R[5] || (R[5] = (qe) => v.value = qe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", my, [
                  k(Me, {
                    variant: "secondary",
                    onClick: re
                  }, {
                    default: g(() => [...R[11] || (R[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Me, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: H
                  }, {
                    default: g(() => [...R[12] || (R[12] = [
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
}), vy = /* @__PURE__ */ Ie(fy, [["__scopeId", "data-v-94c6a438"]]), py = { class: "node-info" }, gy = { class: "node-info-text" }, hy = { class: "item-body" }, yy = {
  key: 0,
  class: "resolved-state"
}, wy = {
  key: 1,
  class: "multiple-options"
}, _y = { class: "options-list" }, ky = ["onClick"], by = ["name", "value", "checked", "onChange"], $y = { class: "option-content" }, Cy = { class: "option-header" }, xy = { class: "option-filename" }, Sy = { class: "option-meta" }, Iy = { class: "option-size" }, Ey = { class: "option-category" }, Ty = { class: "option-path" }, My = { class: "action-buttons" }, Py = {
  key: 2,
  class: "unresolved"
}, Ry = { class: "action-buttons" }, Ny = /* @__PURE__ */ Se({
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => !!o.choice);
    U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = U(() => {
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
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (n(), i("div", {
      class: Le(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", py, [
        t("span", gy, [
          v[7] || (v[7] = $("Used by: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Le(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", hy, [
        l.value ? (n(), i("div", yy, [
          k(Me, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => a("clear-choice"))
          }, {
            default: g(() => [...v[8] || (v[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", wy, [
          v[12] || (v[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", _y, [
            (n(!0), i(j, null, be(e.options, (f, p) => (n(), i("label", {
              key: f.model.hash,
              class: Le(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => u(p)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => u(p)
              }, null, 40, by),
              t("div", $y, [
                t("div", Cy, [
                  t("span", xy, m(f.model.filename), 1),
                  k(Yn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Sy, [
                  t("span", Iy, m(c(f.model.size)), 1),
                  t("span", Ey, m(f.model.category), 1)
                ]),
                t("div", Ty, m(f.model.relative_path), 1)
              ])
            ], 10, ky))), 128))
          ]),
          t("div", My, [
            k(Me, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => a("search"))
            }, {
              default: g(() => [...v[9] || (v[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => a("download-url"))
            }, {
              default: g(() => [...v[10] || (v[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => a("mark-optional"))
            }, {
              default: g(() => [...v[11] || (v[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Py, [
          v[16] || (v[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Ry, [
            k(Me, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => a("search"))
            }, {
              default: g(() => [...v[13] || (v[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => a("download-url"))
            }, {
              default: g(() => [...v[14] || (v[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => a("mark-optional"))
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
}), Ly = /* @__PURE__ */ Ie(Ny, [["__scopeId", "data-v-8a82fefa"]]), Dy = { class: "model-resolution-step" }, Oy = { class: "step-header" }, Uy = { class: "step-info" }, Ay = { class: "step-title" }, zy = { class: "step-description" }, Vy = { class: "stat-badge" }, Fy = {
  key: 1,
  class: "step-body"
}, By = {
  key: 2,
  class: "empty-state"
}, Wy = { class: "model-search-modal" }, Gy = { class: "model-modal-body" }, jy = {
  key: 0,
  class: "model-search-results"
}, Hy = ["onClick"], qy = { class: "model-result-header" }, Ky = { class: "model-result-filename" }, Jy = { class: "model-result-meta" }, Yy = { class: "model-result-category" }, Qy = { class: "model-result-size" }, Xy = {
  key: 0,
  class: "model-result-path"
}, Zy = {
  key: 1,
  class: "model-no-results"
}, e1 = {
  key: 2,
  class: "model-searching"
}, t1 = { class: "model-download-url-modal" }, s1 = { class: "model-modal-body" }, o1 = { class: "model-input-group" }, n1 = { class: "model-input-group" }, a1 = { class: "model-modal-actions" }, l1 = /* @__PURE__ */ Se({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(e, { emit: s }) {
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
    function a(ie) {
      var ge;
      return ie && ((ge = o[ie]) == null ? void 0 : ge[0]) || null;
    }
    const l = e, r = s, u = b(0), c = b(!1), d = b(!1), v = b(""), f = b(""), p = b(""), w = b([]), y = b(!1), _ = U(() => l.models[u.value]), x = U(() => l.models.some((ie) => ie.is_download_intent)), C = U(() => l.models.filter(
      (ie) => l.modelChoices.has(ie.filename) || ie.is_download_intent
    ).length), S = U(() => {
      var ge;
      if (!_.value) return "";
      const ie = a((ge = _.value.reference) == null ? void 0 : ge.node_type);
      return ie ? `${ie}/${_.value.filename}` : "";
    }), A = U(() => {
      var ge;
      if (!_.value) return "not-found";
      const ie = l.modelChoices.get(_.value.filename);
      if (ie)
        switch (ie.action) {
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
    }), I = U(() => {
      var ge, re;
      if (!_.value) return;
      const ie = l.modelChoices.get(_.value.filename);
      if (ie)
        switch (ie.action) {
          case "select":
            return (ge = ie.selected_model) != null && ge.filename ? `→ ${ie.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (re = _.value.options) != null && re.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function E(ie) {
      ie >= 0 && ie < l.models.length && (u.value = ie);
    }
    function N() {
      var ie;
      for (let ge = u.value + 1; ge < l.models.length; ge++) {
        const re = l.models[ge];
        if (!re.is_download_intent && !((ie = l.modelChoices) != null && ie.has(re.filename))) {
          E(ge);
          return;
        }
      }
    }
    function z() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => N()));
    }
    function q() {
      _.value && (r("skip", _.value.filename), Pt(() => N()));
    }
    function O(ie) {
      _.value && (r("option-selected", _.value.filename, ie), Pt(() => N()));
    }
    function W() {
      _.value && r("clear-choice", _.value.filename);
    }
    function te() {
      _.value && (v.value = _.value.filename, c.value = !0);
    }
    function se() {
      _.value && (f.value = _.value.download_source || "", p.value = _.value.target_path || S.value, d.value = !0);
    }
    function ce() {
      c.value = !1, v.value = "", w.value = [];
    }
    function he() {
      d.value = !1, f.value = "", p.value = "";
    }
    function ae() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function Q(ie) {
      _.value && (ce(), Pt(() => N()));
    }
    function me() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), he(), Pt(() => N()));
    }
    function Pe(ie) {
      if (!ie) return "Unknown";
      const ge = ie / (1024 * 1024 * 1024);
      return ge >= 1 ? `${ge.toFixed(2)} GB` : `${(ie / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ie, ge) => {
      var re, Ae, oe;
      return n(), i("div", Dy, [
        t("div", Oy, [
          t("div", Uy, [
            t("h3", Ay, m(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", zy, m(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Vy, m(C.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), L(su, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: ge[0] || (ge[0] = (ne) => E(u.value - 1)),
          onNext: ge[1] || (ge[1] = (ne) => E(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        _.value ? (n(), i("div", Fy, [
          k(Ly, {
            filename: _.value.filename,
            "node-type": ((re = _.value.reference) == null ? void 0 : re.node_type) || "Unknown",
            "has-multiple-options": !!((Ae = _.value.options) != null && Ae.length),
            options: _.value.options,
            choice: (oe = e.modelChoices) == null ? void 0 : oe.get(_.value.filename),
            status: A.value,
            "status-label": I.value,
            onMarkOptional: z,
            onSkip: q,
            onDownloadUrl: se,
            onSearch: te,
            onOptionSelected: O,
            onClearChoice: W
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", By, [...ge[5] || (ge[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), L(Ot, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: st(ce, ["self"])
          }, [
            t("div", Wy, [
              t("div", { class: "model-modal-header" }, [
                ge[6] || (ge[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              t("div", Gy, [
                k(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (ne) => v.value = ne),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", jy, [
                  (n(!0), i(j, null, be(w.value, (ne) => (n(), i("div", {
                    key: ne.hash,
                    class: "model-search-result-item",
                    onClick: (T) => Q()
                  }, [
                    t("div", qy, [
                      t("code", Ky, m(ne.filename), 1)
                    ]),
                    t("div", Jy, [
                      t("span", Yy, m(ne.category), 1),
                      t("span", Qy, m(Pe(ne.size)), 1)
                    ]),
                    ne.relative_path ? (n(), i("div", Xy, m(ne.relative_path), 1)) : h("", !0)
                  ], 8, Hy))), 128))
                ])) : v.value && !y.value ? (n(), i("div", Zy, ' No models found matching "' + m(v.value) + '" ', 1)) : h("", !0),
                y.value ? (n(), i("div", e1, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (n(), L(Ot, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: st(he, ["self"])
          }, [
            t("div", t1, [
              t("div", { class: "model-modal-header" }, [
                ge[7] || (ge[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              t("div", s1, [
                t("div", o1, [
                  ge[8] || (ge[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(it, {
                    modelValue: f.value,
                    "onUpdate:modelValue": ge[3] || (ge[3] = (ne) => f.value = ne),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", n1, [
                  ge[9] || (ge[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(it, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ge[4] || (ge[4] = (ne) => p.value = ne),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", a1, [
                  k(Me, {
                    variant: "secondary",
                    onClick: he
                  }, {
                    default: g(() => [...ge[10] || (ge[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Me, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: me
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
}), i1 = /* @__PURE__ */ Ie(l1, [["__scopeId", "data-v-5c700bfa"]]), r1 = { class: "applying-step" }, u1 = {
  key: 0,
  class: "phase-content"
}, c1 = {
  key: 1,
  class: "phase-content"
}, d1 = { class: "phase-description" }, m1 = { class: "overall-progress" }, f1 = { class: "progress-bar" }, v1 = { class: "progress-label" }, p1 = { class: "install-list" }, g1 = { class: "install-icon" }, h1 = { key: 0 }, y1 = {
  key: 1,
  class: "spinner"
}, w1 = { key: 2 }, _1 = { key: 3 }, k1 = {
  key: 0,
  class: "install-error"
}, b1 = {
  key: 2,
  class: "phase-content"
}, $1 = { class: "phase-header" }, C1 = { class: "phase-title" }, x1 = { class: "completion-summary" }, S1 = {
  key: 0,
  class: "summary-item success"
}, I1 = { class: "summary-text" }, E1 = {
  key: 1,
  class: "summary-item error"
}, T1 = { class: "summary-text" }, M1 = {
  key: 2,
  class: "failed-list"
}, P1 = { class: "failed-node-id" }, R1 = { class: "failed-error" }, N1 = {
  key: 4,
  class: "summary-item success"
}, L1 = {
  key: 5,
  class: "restart-prompt"
}, D1 = {
  key: 3,
  class: "phase-content error"
}, O1 = { class: "error-message" }, U1 = /* @__PURE__ */ Se({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = U(() => {
      var v, f;
      const c = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || s.progress.nodesToInstall.length;
      if (!c) return 0;
      const d = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / c * 100);
    }), a = U(() => {
      var c;
      return ((c = s.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((d) => !d.success)) || [];
    }), l = U(() => a.value.length > 0);
    function r(c, d) {
      var f, p;
      const v = (f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((w) => w.node_id === c);
      return v ? v.success ? "complete" : "failed" : ((p = s.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function u(c) {
      var d, v;
      return (v = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === c)) == null ? void 0 : v.error;
    }
    return (c, d) => {
      var v, f, p, w;
      return n(), i("div", r1, [
        e.progress.phase === "resolving" ? (n(), i("div", u1, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", c1, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", d1, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", m1, [
            t("div", f1, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", v1, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", p1, [
            (n(!0), i(j, null, be(e.progress.nodesToInstall, (y, _) => (n(), i("div", {
              key: y,
              class: Le(["install-item", r(y, _)])
            }, [
              t("span", g1, [
                r(y, _) === "pending" ? (n(), i("span", h1, "○")) : r(y, _) === "installing" ? (n(), i("span", y1, "◌")) : r(y, _) === "complete" ? (n(), i("span", w1, "✓")) : r(y, _) === "failed" ? (n(), i("span", _1, "✗")) : h("", !0)
              ]),
              t("code", null, m(y), 1),
              u(y) ? (n(), i("span", k1, m(u(y)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", b1, [
          t("div", $1, [
            t("span", {
              class: Le(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            t("h3", C1, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", x1, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", S1, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", I1, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", E1, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", T1, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", M1, [
              (n(!0), i(j, null, be(a.value, (y) => (n(), i("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                t("code", P1, m(y.node_id), 1),
                t("span", R1, m(y.error), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => c.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (n(), i("div", N1, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", L1, [
              d[7] || (d[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (y) => c.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : h("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", D1, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", O1, m(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), A1 = /* @__PURE__ */ Ie(U1, [["__scopeId", "data-v-5efaae58"]]), z1 = {
  key: 0,
  class: "loading-state"
}, V1 = {
  key: 1,
  class: "wizard-content"
}, F1 = {
  key: 0,
  class: "step-content"
}, B1 = { class: "analysis-summary" }, W1 = { class: "analysis-header" }, G1 = { class: "summary-description" }, j1 = { class: "stats-grid" }, H1 = { class: "stat-card" }, q1 = { class: "stat-items" }, K1 = {
  key: 0,
  class: "stat-item success"
}, J1 = { class: "stat-count" }, Y1 = {
  key: 1,
  class: "stat-item info"
}, Q1 = { class: "stat-count" }, X1 = {
  key: 2,
  class: "stat-item warning"
}, Z1 = { class: "stat-count" }, e0 = {
  key: 3,
  class: "stat-item warning"
}, t0 = { class: "stat-count" }, s0 = {
  key: 4,
  class: "stat-item warning"
}, o0 = { class: "stat-count" }, n0 = {
  key: 5,
  class: "stat-item error"
}, a0 = { class: "stat-count" }, l0 = { class: "stat-card" }, i0 = { class: "stat-items" }, r0 = { class: "stat-item success" }, u0 = { class: "stat-count" }, c0 = {
  key: 0,
  class: "stat-item info"
}, d0 = { class: "stat-count" }, m0 = {
  key: 1,
  class: "stat-item warning"
}, f0 = { class: "stat-count" }, v0 = {
  key: 2,
  class: "stat-item warning"
}, p0 = { class: "stat-count" }, g0 = {
  key: 3,
  class: "stat-item error"
}, h0 = { class: "stat-count" }, y0 = {
  key: 0,
  class: "status-message warning"
}, w0 = { class: "status-text" }, _0 = {
  key: 1,
  class: "status-message warning"
}, k0 = { class: "status-text" }, b0 = {
  key: 2,
  class: "status-message info"
}, $0 = { class: "status-text" }, C0 = {
  key: 3,
  class: "status-message info"
}, x0 = { class: "status-text" }, S0 = {
  key: 4,
  class: "status-message info"
}, I0 = { class: "status-text" }, E0 = {
  key: 5,
  class: "status-message warning"
}, T0 = { class: "status-text" }, M0 = {
  key: 6,
  class: "status-message success"
}, P0 = {
  key: 7,
  class: "category-mismatch-section"
}, R0 = { class: "mismatch-list" }, N0 = { class: "mismatch-path" }, L0 = { class: "mismatch-target" }, D0 = {
  key: 8,
  class: "category-mismatch-section"
}, O0 = { class: "mismatch-list" }, U0 = { class: "mismatch-path" }, A0 = { class: "status-text" }, z0 = {
  key: 1,
  class: "step-content node-step-content"
}, V0 = {
  key: 0,
  class: "community-node-section"
}, F0 = { class: "community-node-header" }, B0 = { class: "community-node-title" }, W0 = { class: "community-node-list" }, G0 = { class: "community-node-info" }, j0 = { class: "community-node-heading" }, H0 = { class: "item-name" }, q0 = { class: "community-node-package" }, K0 = { class: "community-node-meta" }, J0 = { class: "community-node-guidance" }, Y0 = { key: 0 }, Q0 = { class: "community-choice-status" }, X0 = { class: "community-node-actions" }, Z0 = {
  key: 3,
  class: "step-content"
}, ew = { class: "review-summary" }, tw = { class: "review-stats" }, sw = { class: "review-stat" }, ow = { class: "stat-value" }, nw = { class: "review-stat" }, aw = { class: "stat-value" }, lw = { class: "review-stat" }, iw = { class: "stat-value" }, rw = { class: "review-stat" }, uw = { class: "stat-value" }, cw = {
  key: 0,
  class: "review-section"
}, dw = { class: "section-title" }, mw = { class: "review-items" }, fw = { class: "item-name" }, vw = { class: "item-choice" }, pw = {
  key: 0,
  class: "choice-badge install"
}, gw = {
  key: 1,
  class: "choice-badge skip"
}, hw = {
  key: 1,
  class: "review-section"
}, yw = { class: "section-title" }, ww = { class: "review-items" }, _w = { class: "item-name" }, kw = { class: "item-choice" }, bw = {
  key: 0,
  class: "choice-badge install"
}, $w = {
  key: 1,
  class: "choice-badge optional"
}, Cw = {
  key: 2,
  class: "choice-badge skip"
}, xw = {
  key: 2,
  class: "review-section"
}, Sw = { class: "section-title" }, Iw = { class: "review-items" }, Ew = { class: "item-name" }, Tw = { class: "item-choice" }, Mw = {
  key: 0,
  class: "choice-badge install"
}, Pw = {
  key: 1,
  class: "choice-badge optional"
}, Rw = {
  key: 2,
  class: "choice-badge skip"
}, Nw = {
  key: 1,
  class: "choice-badge pending"
}, Lw = {
  key: 3,
  class: "review-section"
}, Dw = { class: "section-title" }, Ow = { class: "review-items download-details" }, Uw = { class: "download-info" }, Aw = { class: "item-name" }, zw = { class: "download-meta" }, Vw = { class: "download-path" }, Fw = ["title"], Bw = {
  key: 4,
  class: "review-section"
}, Ww = { class: "section-title" }, Gw = { class: "review-items" }, jw = { class: "item-name" }, Hw = { class: "item-choice" }, qw = {
  key: 0,
  class: "choice-badge install"
}, Kw = {
  key: 1,
  class: "choice-badge download"
}, Jw = {
  key: 2,
  class: "choice-badge optional"
}, Yw = {
  key: 3,
  class: "choice-badge skip"
}, Qw = {
  key: 4,
  class: "choice-badge skip"
}, Xw = {
  key: 1,
  class: "choice-badge download"
}, Zw = {
  key: 2,
  class: "choice-badge pending"
}, e_ = {
  key: 5,
  class: "no-choices"
}, t_ = /* @__PURE__ */ Se({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: d, resetProgress: v } = tu(), { loadPendingDownloads: f } = Do(), { openFileLocation: p, queueNodeInstall: w, getNodes: y } = ct(), _ = b(null), x = b([]), C = b(!1), S = b(!1), A = b(null), I = b("analysis"), E = b([]), N = b(/* @__PURE__ */ new Map()), z = b(/* @__PURE__ */ new Map()), q = b(/* @__PURE__ */ new Set()), O = U(() => {
      const ve = [
        { id: "analysis", label: "Analysis" }
      ];
      return (ae.value || Pe.value || ie.value) && ve.push({ id: "nodes", label: "Nodes" }), Q.value && ve.push({ id: "models", label: "Models" }), ve.push({ id: "review", label: "Review" }), I.value === "applying" && ve.push({ id: "applying", label: "Applying" }), ve;
    }), W = U(() => _.value ? _.value.stats.needs_user_input : !1), te = U(() => _.value ? _.value.nodes.version_gated || [] : []), se = U(() => _.value ? _.value.nodes.uninstallable || [] : []), ce = U(() => se.value.filter((ve) => {
      var G;
      return !!((G = ve.package) != null && G.package_id);
    })), he = U(() => te.value.length > 0), ae = U(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), Q = U(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), me = U(() => _.value ? _.value.stats.download_intents > 0 : !1), Pe = U(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), ie = U(() => ce.value.length > 0), ge = U(() => _.value ? _.value.nodes.resolved.length : 0), re = U(() => _.value ? _.value.models.resolved.filter((ve) => ve.has_category_mismatch) : []), Ae = U(() => re.value.length > 0), oe = U(() => ae.value || Pe.value || ie.value ? "nodes" : Q.value ? "models" : "review"), ne = U(() => {
      if (!_.value) return [];
      const ve = _.value.nodes.resolved.filter((ye) => !ye.is_installed), G = /* @__PURE__ */ new Set();
      return ve.filter((ye) => G.has(ye.package.package_id) ? !1 : (G.add(ye.package.package_id), !0));
    }), T = U(() => {
      if (!_.value) return [];
      const ve = _.value.nodes.resolved.filter((ye) => !ye.is_installed), G = /* @__PURE__ */ new Map();
      for (const ye of ve) {
        const He = G.get(ye.package.package_id);
        He ? He.node_types_count++ : G.set(ye.package.package_id, {
          package_id: ye.package.package_id,
          title: ye.package.title,
          node_types_count: 1
        });
      }
      return Array.from(G.values());
    }), V = U(() => ne.value.filter((ve) => !q.value.has(ve.package.package_id))), H = U(() => _.value ? _.value.models.resolved.filter(
      (ve) => ve.match_type === "download_intent" || ve.match_type === "property_download_intent"
    ).map((ve) => ({
      filename: ve.reference.widget_value,
      reference: ve.reference,
      is_download_intent: !0,
      resolved_model: ve.model,
      download_source: ve.download_source,
      target_path: ve.target_path
    })) : []), M = U(() => {
      if (!_.value) return [];
      const ve = _.value.nodes.unresolved.map((ye) => ({
        node_type: ye.reference.node_type,
        reason: ye.reason,
        is_unresolved: !0,
        options: void 0
      })), G = _.value.nodes.ambiguous.map((ye) => ({
        node_type: ye.reference.node_type,
        has_multiple_options: !0,
        options: ye.options.map((He) => ({
          package_id: He.package.package_id,
          title: He.package.title,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          is_installed: He.is_installed
        }))
      }));
      return [...ve, ...G];
    }), R = U(() => {
      if (!_.value) return [];
      const ve = _.value.models.unresolved.map((ye) => ({
        filename: ye.reference.widget_value,
        reference: ye.reference,
        reason: ye.reason,
        is_unresolved: !0,
        options: void 0
      })), G = _.value.models.ambiguous.map((ye) => ({
        filename: ye.reference.widget_value,
        reference: ye.reference,
        has_multiple_options: !0,
        options: ye.options.map((He) => ({
          model: He.model,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          has_download_source: He.has_download_source
        }))
      }));
      return [...ve, ...G];
    }), de = U(() => {
      const ve = R.value, G = H.value.map((ye) => ({
        filename: ye.filename,
        reference: ye.reference,
        is_download_intent: !0,
        resolved_model: ye.resolved_model,
        download_source: ye.download_source,
        target_path: ye.target_path,
        options: void 0
      }));
      return [...ve, ...G];
    }), ze = U(() => H.value.filter((ve) => {
      const G = z.value.get(ve.filename);
      return G ? G.action === "download" : !0;
    }).map((ve) => ({
      filename: ve.filename,
      url: ve.download_source,
      target_path: ve.target_path
    })));
    function qe(ve, G = 50) {
      return ve.length <= G ? ve : ve.slice(0, G - 3) + "...";
    }
    const F = U(() => {
      let ve = V.value.length;
      for (const G of N.value.values())
        G.action === "install" && ve++;
      for (const G of z.value.values())
        G.action === "select" && ve++;
      return ve;
    }), B = U(() => {
      let ve = 0;
      for (const G of z.value.values())
        G.action === "download" && ve++;
      for (const G of H.value)
        z.value.get(G.filename) || ve++;
      return ve;
    }), K = U(() => {
      let ve = 0;
      for (const G of N.value.values())
        G.action === "optional" && ve++;
      for (const G of z.value.values())
        G.action === "optional" && ve++;
      return ve;
    }), _e = U(() => {
      let ve = q.value.size;
      for (const G of N.value.values())
        G.action === "skip" && ve++;
      for (const G of z.value.values())
        G.action === "skip" && ve++;
      for (const G of M.value)
        N.value.has(G.node_type) || ve++;
      for (const G of R.value)
        z.value.has(G.filename) || ve++;
      return ve;
    }), ke = U(() => {
      const ve = {};
      if (ve.analysis = { resolved: 1, total: 1 }, ae.value || ie.value) {
        const G = M.value.length, ye = ce.value.length, He = M.value.filter(
          (Mt) => N.value.has(Mt.node_type)
        ).length, ft = ce.value.filter(
          (Mt) => N.value.has(Mt.reference.node_type)
        ).length, Nt = G + ye, rt = He + ft;
        ve.nodes = { resolved: rt, total: Nt };
      }
      if (Q.value) {
        const G = de.value.length, ye = de.value.filter(
          (He) => z.value.has(He.filename) || He.is_download_intent
        ).length;
        ve.models = { resolved: ye, total: G };
      }
      if (ve.review = { resolved: 1, total: 1 }, I.value === "applying") {
        const G = d.totalFiles || 1, ye = d.completedFiles.length;
        ve.applying = { resolved: ye, total: G };
      }
      return ve;
    });
    function $e(ve) {
      I.value = ve;
    }
    function Te() {
      const ve = O.value.findIndex((G) => G.id === I.value);
      ve > 0 && (I.value = O.value[ve - 1].id);
    }
    function Ne() {
      const ve = O.value.findIndex((G) => G.id === I.value);
      ve < O.value.length - 1 && (I.value = O.value[ve + 1].id);
    }
    function Re() {
      for (const ve of ce.value) {
        const G = ve.reference.node_type;
        N.value.has(G) || ue(ve, "registry");
      }
    }
    function Ee(ve) {
      switch (ve) {
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
    function Ge(ve) {
      return ve.filter((G) => G.installed && G.tracked).filter((G) => G.name !== "comfygit-manager").map((G) => ({
        package_id: G.registry_id || G.name,
        source: G.source
      })).filter((G, ye, He) => He.findIndex((ft) => ft.package_id === G.package_id) === ye).sort((G, ye) => {
        const He = Ee(G.source) - Ee(ye.source);
        return He !== 0 ? He : G.package_id.localeCompare(ye.package_id);
      });
    }
    async function Oe() {
      C.value = !0, A.value = null;
      try {
        const [ve, G] = await Promise.all([
          l(o.workflowName),
          y()
        ]);
        _.value = ve, x.value = Ge(G.nodes), Re();
      } catch (ve) {
        A.value = ve instanceof Error ? ve.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function we() {
      E.value.includes("analysis") || E.value.push("analysis"), ae.value || Pe.value || ie.value ? I.value = "nodes" : Q.value ? I.value = "models" : I.value = "review";
    }
    function ee(ve) {
      N.value.set(ve, { action: "optional" });
    }
    function We(ve) {
      N.value.set(ve, { action: "skip" });
    }
    function D(ve, G) {
      var He;
      const ye = M.value.find((ft) => ft.node_type === ve);
      (He = ye == null ? void 0 : ye.options) != null && He[G] && N.value.set(ve, {
        action: "install",
        package_id: ye.options[G].package_id
      });
    }
    function X(ve, G) {
      N.value.set(ve, {
        action: "install",
        package_id: G
      });
    }
    function J(ve) {
      N.value.delete(ve);
    }
    function pe(ve) {
      return N.value.get(ve);
    }
    function P(ve) {
      const G = pe(ve);
      return G ? G.action === "optional" ? "Marked optional" : G.action === "skip" ? "Skipped" : G.action === "install" ? G.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function ue(ve, G) {
      var ft;
      const ye = (ft = ve.package) == null ? void 0 : ft.package_id;
      if (!ye) return;
      const He = {
        action: "install",
        package_id: ye,
        version: ve.package.latest_version || null,
        install_source: G
      };
      G === "git" && ve.package.repository && (He.repository = ve.package.repository), N.value.set(ve.reference.node_type, He);
    }
    function Z(ve) {
      N.value.set(ve, { action: "optional" });
    }
    function Ve(ve) {
      N.value.set(ve, { action: "skip" });
    }
    function Ue(ve) {
      q.value.has(ve) ? q.value.delete(ve) : q.value.add(ve);
    }
    function Fe(ve) {
      z.value.set(ve, { action: "optional" });
    }
    function Qe(ve) {
      z.value.set(ve, { action: "skip" });
    }
    function De(ve, G) {
      var He;
      const ye = R.value.find((ft) => ft.filename === ve);
      (He = ye == null ? void 0 : ye.options) != null && He[G] && z.value.set(ve, {
        action: "select",
        selected_model: ye.options[G].model
      });
    }
    function Ze(ve, G, ye) {
      z.value.set(ve, {
        action: "download",
        url: G,
        target_path: ye
      });
    }
    function nt(ve) {
      z.value.delete(ve);
    }
    async function mt(ve) {
      try {
        await p(ve);
      } catch (G) {
        A.value = G instanceof Error ? G.message : "Failed to open file location";
      }
    }
    async function St() {
      var ve;
      S.value = !0, A.value = null, v(), d.phase = "resolving", I.value = "applying";
      try {
        const G = await r(o.workflowName, N.value, z.value, q.value);
        G.models_to_download && G.models_to_download.length > 0 && c(o.workflowName, G.models_to_download);
        const ye = ce.value.map((rt) => {
          const Mt = pe(rt.reference.node_type);
          if ((Mt == null ? void 0 : Mt.action) !== "install" || Mt.install_source !== "git")
            return null;
          const Qt = Mt.repository || rt.package.repository, Is = Mt.package_id || rt.package.package_id;
          return !Qt || !Is ? null : {
            id: Is,
            repository: Qt,
            selectedVersion: Mt.version || rt.package.latest_version || "latest"
          };
        }).filter((rt) => !!rt), He = new Set(ye.map((rt) => rt.id)), ft = [
          ...G.nodes_to_install || [],
          ...V.value.map((rt) => rt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ft)].filter((rt) => !He.has(rt)), d.nodesToInstall.length > 0 && await u(o.workflowName);
        for (const rt of ye)
          await w({
            id: rt.id,
            version: rt.selectedVersion,
            selected_version: rt.selectedVersion,
            repository: rt.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await f();
        const Nt = d.installError || ((ve = d.nodeInstallProgress) == null ? void 0 : ve.completedNodes.some((rt) => !rt.success));
        !d.needsRestart && !Nt && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (G) {
        A.value = G instanceof Error ? G.message : "Failed to apply resolution", d.error = A.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function Kt() {
      a("refresh"), a("restart"), a("close");
    }
    async function Rt() {
      var G;
      const ve = ((G = d.nodeInstallProgress) == null ? void 0 : G.completedNodes.filter((ye) => !ye.success).map((ye) => ye.node_id)) || [];
      if (ve.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ve.length
        }, d.nodesToInstall = ve, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(o.workflowName), d.phase = "complete";
        } catch (ye) {
          d.error = ye instanceof Error ? ye.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return ot(Oe), (ve, G) => (n(), L($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: A.value || void 0,
      "fixed-height": !0,
      onClose: G[1] || (G[1] = (ye) => a("close"))
    }, {
      body: g(() => [
        C.value && !_.value ? (n(), i("div", z1, [...G[2] || (G[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (n(), i("div", V1, [
          k(Vg, {
            steps: O.value,
            "current-step": I.value,
            "completed-steps": E.value,
            "step-stats": ke.value,
            onStepChange: $e
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          I.value === "analysis" ? (n(), i("div", F1, [
            t("div", B1, [
              t("div", W1, [
                G[3] || (G[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", G1, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", j1, [
                t("div", H1, [
                  G[16] || (G[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", q1, [
                    ge.value > 0 ? (n(), i("div", K1, [
                      G[4] || (G[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", J1, m(ge.value), 1),
                      G[5] || (G[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (n(), i("div", Y1, [
                      G[6] || (G[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Q1, m(_.value.stats.packages_needing_installation), 1),
                      G[7] || (G[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (n(), i("div", X1, [
                      G[8] || (G[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Z1, m(_.value.nodes.ambiguous.length), 1),
                      G[9] || (G[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    te.value.length > 0 ? (n(), i("div", e0, [
                      G[10] || (G[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", t0, m(te.value.length), 1),
                      G[11] || (G[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    se.value.length > 0 ? (n(), i("div", s0, [
                      G[12] || (G[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", o0, m(se.value.length), 1),
                      G[13] || (G[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    _.value.nodes.unresolved.length > 0 ? (n(), i("div", n0, [
                      G[14] || (G[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", a0, m(_.value.nodes.unresolved.length), 1),
                      G[15] || (G[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                t("div", l0, [
                  G[27] || (G[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", i0, [
                    t("div", r0, [
                      G[17] || (G[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", u0, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      G[18] || (G[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (n(), i("div", c0, [
                      G[19] || (G[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", d0, m(_.value.stats.download_intents), 1),
                      G[20] || (G[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    Ae.value ? (n(), i("div", m0, [
                      G[21] || (G[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", f0, m(re.value.length), 1),
                      G[22] || (G[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    _.value.models.ambiguous.length > 0 ? (n(), i("div", v0, [
                      G[23] || (G[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", p0, m(_.value.models.ambiguous.length), 1),
                      G[24] || (G[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    _.value.models.unresolved.length > 0 ? (n(), i("div", g0, [
                      G[25] || (G[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", h0, m(_.value.models.unresolved.length), 1),
                      G[26] || (G[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              W.value ? (n(), i("div", y0, [
                G[28] || (G[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", w0, m(M.value.length + R.value.length) + " items need your input", 1)
              ])) : he.value ? (n(), i("div", _0, [
                G[29] || (G[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", k0, m(te.value.length) + " node type" + m(te.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : se.value.length > 0 ? (n(), i("div", b0, [
                G[30] || (G[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", $0, m(se.value.length) + " community-mapped node type" + m(se.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Pe.value ? (n(), i("div", C0, [
                G[31] || (G[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", x0, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(me.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : me.value ? (n(), i("div", S0, [
                G[32] || (G[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", I0, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Ae.value ? (n(), i("div", E0, [
                G[33] || (G[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", T0, m(re.value.length) + " model" + m(re.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", M0, [...G[34] || (G[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Ae.value ? (n(), i("div", P0, [
                G[37] || (G[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", R0, [
                  (n(!0), i(j, null, be(re.value, (ye) => {
                    var He, ft;
                    return n(), i("div", {
                      key: ye.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", N0, m(ye.actual_category) + "/" + m((He = ye.model) == null ? void 0 : He.filename), 1),
                      G[36] || (G[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", L0, m((ft = ye.expected_categories) == null ? void 0 : ft[0]) + "/", 1),
                      ye.file_path ? (n(), L(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Nt) => mt(ye.file_path)
                      }, {
                        default: g(() => [...G[35] || (G[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              he.value ? (n(), i("div", D0, [
                G[38] || (G[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", O0, [
                  (n(!0), i(j, null, be(te.value, (ye) => {
                    var He;
                    return n(), i("div", {
                      key: `vg-${ye.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", U0, m(ye.reference.node_type), 1),
                      t("span", A0, m(ye.guidance || ((He = _.value.node_guidance) == null ? void 0 : He[ye.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          I.value === "nodes" ? (n(), i("div", z0, [
            k(vy, {
              nodes: M.value,
              "node-choices": N.value,
              "auto-resolved-packages": T.value,
              "skipped-packages": q.value,
              "installed-node-packs": x.value,
              onMarkOptional: ee,
              onSkip: We,
              onOptionSelected: D,
              onManualEntry: X,
              onClearChoice: J,
              onPackageSkip: Ue
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ce.value.length > 0 ? (n(), i("div", V0, [
              t("div", F0, [
                t("h4", B0, "Community-Mapped Packages (" + m(ce.value.length) + ")", 1),
                G[39] || (G[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", W0, [
                (n(!0), i(j, null, be(ce.value, (ye) => (n(), i("div", {
                  key: `community-${ye.reference.node_type}-${ye.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", G0, [
                    t("div", j0, [
                      t("code", H0, m(ye.reference.node_type), 1),
                      t("span", q0, m(ye.package.title || ye.package.package_id), 1)
                    ]),
                    t("div", K0, m(ye.package.package_id), 1),
                    t("div", J0, [
                      G[40] || (G[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ye.guidance ? (n(), i("span", Y0, m(ye.guidance), 1)) : h("", !0)
                    ]),
                    t("div", Q0, m(P(ye.reference.node_type)), 1)
                  ]),
                  t("div", X0, [
                    k(Me, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !ye.package.package_id,
                      onClick: (He) => ue(ye, "registry")
                    }, {
                      default: g(() => [...G[41] || (G[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    ye.package.repository ? (n(), L(Me, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !ye.package.package_id,
                      onClick: (He) => ue(ye, "git")
                    }, {
                      default: g(() => [...G[42] || (G[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    k(Me, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Z(ye.reference.node_type)
                    }, {
                      default: g(() => [...G[43] || (G[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Me, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Ve(ye.reference.node_type)
                    }, {
                      default: g(() => [...G[44] || (G[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          I.value === "models" ? (n(), L(i1, {
            key: 2,
            models: de.value,
            "model-choices": z.value,
            onMarkOptional: Fe,
            onSkip: Qe,
            onOptionSelected: De,
            onDownloadUrl: Ze,
            onClearChoice: nt
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          I.value === "review" ? (n(), i("div", Z0, [
            t("div", ew, [
              G[50] || (G[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", tw, [
                t("div", sw, [
                  t("span", ow, m(F.value), 1),
                  G[45] || (G[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", nw, [
                  t("span", aw, m(B.value), 1),
                  G[46] || (G[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", lw, [
                  t("span", iw, m(K.value), 1),
                  G[47] || (G[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", rw, [
                  t("span", uw, m(_e.value), 1),
                  G[48] || (G[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              T.value.length > 0 ? (n(), i("div", cw, [
                t("h4", dw, "Node Packages (" + m(T.value.length) + ")", 1),
                t("div", mw, [
                  (n(!0), i(j, null, be(T.value, (ye) => (n(), i("div", {
                    key: ye.package_id,
                    class: "review-item"
                  }, [
                    t("code", fw, m(ye.package_id), 1),
                    t("div", vw, [
                      q.value.has(ye.package_id) ? (n(), i("span", gw, "Skipped")) : (n(), i("span", pw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              ce.value.length > 0 ? (n(), i("div", hw, [
                t("h4", yw, "Community-Mapped Packages (" + m(ce.value.length) + ")", 1),
                t("div", ww, [
                  (n(!0), i(j, null, be(ce.value, (ye) => {
                    var He, ft, Nt;
                    return n(), i("div", {
                      key: `review-community-${ye.reference.node_type}-${ye.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", _w, m(ye.reference.node_type), 1),
                      t("div", kw, [
                        ((He = pe(ye.reference.node_type)) == null ? void 0 : He.action) === "install" ? (n(), i("span", bw, m(((ft = pe(ye.reference.node_type)) == null ? void 0 : ft.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Nt = pe(ye.reference.node_type)) == null ? void 0 : Nt.action) === "optional" ? (n(), i("span", $w, " Optional ")) : (n(), i("span", Cw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              M.value.length > 0 ? (n(), i("div", xw, [
                t("h4", Sw, "Node Choices (" + m(M.value.length) + ")", 1),
                t("div", Iw, [
                  (n(!0), i(j, null, be(M.value, (ye) => {
                    var He, ft, Nt, rt;
                    return n(), i("div", {
                      key: ye.node_type,
                      class: "review-item"
                    }, [
                      t("code", Ew, m(ye.node_type), 1),
                      t("div", Tw, [
                        N.value.has(ye.node_type) ? (n(), i(j, { key: 0 }, [
                          ((He = N.value.get(ye.node_type)) == null ? void 0 : He.action) === "install" ? (n(), i("span", Mw, m((ft = N.value.get(ye.node_type)) == null ? void 0 : ft.package_id), 1)) : ((Nt = N.value.get(ye.node_type)) == null ? void 0 : Nt.action) === "optional" ? (n(), i("span", Pw, " Optional ")) : ((rt = N.value.get(ye.node_type)) == null ? void 0 : rt.action) === "skip" ? (n(), i("span", Rw, " Skip ")) : h("", !0)
                        ], 64)) : (n(), i("span", Nw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              ze.value.length > 0 ? (n(), i("div", Lw, [
                t("h4", Dw, "Models to Download (" + m(ze.value.length) + ")", 1),
                t("div", Ow, [
                  (n(!0), i(j, null, be(ze.value, (ye) => (n(), i("div", {
                    key: ye.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", Uw, [
                      t("code", Aw, m(ye.filename), 1),
                      t("div", zw, [
                        t("span", Vw, "→ " + m(ye.target_path), 1),
                        ye.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ye.url
                        }, m(qe(ye.url)), 9, Fw)) : h("", !0)
                      ])
                    ]),
                    G[49] || (G[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              de.value.length > 0 ? (n(), i("div", Bw, [
                t("h4", Ww, "Models (" + m(de.value.length) + ")", 1),
                t("div", Gw, [
                  (n(!0), i(j, null, be(de.value, (ye) => {
                    var He, ft, Nt, rt, Mt, Qt, Is;
                    return n(), i("div", {
                      key: ye.filename,
                      class: "review-item"
                    }, [
                      t("code", jw, m(ye.filename), 1),
                      t("div", Hw, [
                        z.value.has(ye.filename) ? (n(), i(j, { key: 0 }, [
                          ((He = z.value.get(ye.filename)) == null ? void 0 : He.action) === "select" ? (n(), i("span", qw, m((Nt = (ft = z.value.get(ye.filename)) == null ? void 0 : ft.selected_model) == null ? void 0 : Nt.filename), 1)) : ((rt = z.value.get(ye.filename)) == null ? void 0 : rt.action) === "download" ? (n(), i("span", Kw, " Download ")) : ((Mt = z.value.get(ye.filename)) == null ? void 0 : Mt.action) === "optional" ? (n(), i("span", Jw, " Optional ")) : ((Qt = z.value.get(ye.filename)) == null ? void 0 : Qt.action) === "skip" ? (n(), i("span", Yw, " Skip ")) : ((Is = z.value.get(ye.filename)) == null ? void 0 : Is.action) === "cancel_download" ? (n(), i("span", Qw, " Cancel Download ")) : h("", !0)
                        ], 64)) : ye.is_download_intent ? (n(), i("span", Xw, " Pending Download ")) : (n(), i("span", Zw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              ne.value.length === 0 && ce.value.length === 0 && M.value.length === 0 && de.value.length === 0 ? (n(), i("div", e_, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          I.value === "applying" ? (n(), L(A1, {
            key: 4,
            progress: Ye(d),
            onRestart: Kt,
            onRetryFailed: Rt
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        I.value !== "analysis" && I.value !== "applying" ? (n(), L(Me, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Te
        }, {
          default: g(() => [...G[51] || (G[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        G[54] || (G[54] = t("div", { class: "footer-spacer" }, null, -1)),
        I.value !== "applying" || Ye(d).phase === "complete" || Ye(d).phase === "error" ? (n(), L(Me, {
          key: 1,
          variant: "secondary",
          onClick: G[0] || (G[0] = (ye) => a("close"))
        }, {
          default: g(() => [
            $(m(Ye(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        I.value === "analysis" ? (n(), L(Me, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: we
        }, {
          default: g(() => [
            $(m(oe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        I.value === "nodes" ? (n(), L(Me, {
          key: 3,
          variant: "primary",
          onClick: Ne
        }, {
          default: g(() => [
            $(m(Q.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        I.value === "models" ? (n(), L(Me, {
          key: 4,
          variant: "primary",
          onClick: Ne
        }, {
          default: g(() => [...G[52] || (G[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        I.value === "review" ? (n(), L(Me, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: St
        }, {
          default: g(() => [...G[53] || (G[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), s_ = /* @__PURE__ */ Ie(t_, [["__scopeId", "data-v-49848358"]]), o_ = { class: "search-input-wrapper" }, n_ = ["value", "placeholder"], a_ = /* @__PURE__ */ Se({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(null);
    let r;
    function u(d) {
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", v);
      }, o.debounce)) : a("update:modelValue", v);
    }
    function c() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return ot(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (n(), i("div", o_, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: ts(c, ["escape"])
      }, null, 40, n_),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), l_ = /* @__PURE__ */ Ie(a_, [["__scopeId", "data-v-266f857a"]]), i_ = { class: "search-bar" }, r_ = /* @__PURE__ */ Se({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", i_, [
      k(l_, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), fo = /* @__PURE__ */ Ie(r_, [["__scopeId", "data-v-3d51bbfd"]]), u_ = { class: "section-group" }, c_ = {
  key: 0,
  class: "section-content"
}, d_ = /* @__PURE__ */ Se({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (u, c) => (n(), i("section", u_, [
      k(as, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          $(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", c_, [
        tt(u.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), kt = /* @__PURE__ */ Ie(d_, [["__scopeId", "data-v-c48e33ed"]]), m_ = { class: "item-header" }, f_ = {
  key: 0,
  class: "item-icon"
}, v_ = { class: "item-info" }, p_ = {
  key: 0,
  class: "item-title"
}, g_ = {
  key: 1,
  class: "item-subtitle"
}, h_ = {
  key: 0,
  class: "item-details"
}, y_ = {
  key: 1,
  class: "item-actions"
}, w_ = /* @__PURE__ */ Se({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = U(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Le(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      t("div", m_, [
        l.$slots.icon ? (n(), i("span", f_, [
          tt(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        t("div", v_, [
          l.$slots.title ? (n(), i("div", p_, [
            tt(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (n(), i("div", g_, [
            tt(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", h_, [
        tt(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (n(), i("div", y_, [
        tt(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Ie(w_, [["__scopeId", "data-v-cc435e0e"]]), __ = { class: "loading-state" }, k_ = { class: "loading-message" }, b_ = /* @__PURE__ */ Se({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", __, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", k_, m(e.message), 1)
    ]));
  }
}), xs = /* @__PURE__ */ Ie(b_, [["__scopeId", "data-v-ad8436c9"]]), $_ = { class: "error-state" }, C_ = { class: "error-message" }, x_ = /* @__PURE__ */ Se({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", $_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", C_, m(e.message), 1),
      e.retry ? (n(), L(xe, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), Ss = /* @__PURE__ */ Ie(x_, [["__scopeId", "data-v-5397be48"]]), S_ = /* @__PURE__ */ Se({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = b([]), u = b(!1), c = b(null), d = b(""), v = b(!0), f = b(!1), p = b(!1), w = b(!1), y = b(!1), _ = b(null), x = U(
      () => r.value.filter((oe) => oe.status === "broken")
    ), C = U(
      () => r.value.filter((oe) => oe.status === "new")
    ), S = U(
      () => r.value.filter((oe) => oe.status === "modified")
    ), A = U(
      () => r.value.filter((oe) => oe.status === "synced")
    ), I = U(() => {
      if (!d.value.trim()) return r.value;
      const oe = d.value.toLowerCase();
      return r.value.filter((ne) => ne.name.toLowerCase().includes(oe));
    }), E = U(
      () => x.value.filter(
        (oe) => !d.value.trim() || oe.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = U(
      () => C.value.filter(
        (oe) => !d.value.trim() || oe.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = U(
      () => S.value.filter(
        (oe) => !d.value.trim() || oe.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = U(
      () => A.value.filter(
        (oe) => !d.value.trim() || oe.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = U(
      () => f.value ? q.value : q.value.slice(0, 5)
    );
    async function W(oe = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(oe);
      } catch (ne) {
        c.value = ne instanceof Error ? ne.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    s({ loadWorkflows: W });
    function te(oe) {
      _.value = oe, p.value = !0;
    }
    function se(oe) {
      _.value = oe, w.value = !0;
    }
    function ce(oe) {
      _.value = oe, y.value = !0;
    }
    function he(oe) {
      var V;
      const T = (V = oe.detail) == null ? void 0 : V.workflowName;
      T && ce(T);
    }
    function ae() {
      a("refresh");
    }
    async function Q() {
      w.value = !1, await W(!0);
    }
    async function me() {
      await W(!0), a("refresh");
    }
    async function Pe() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ie(oe) {
      return oe.replace(/uninstallable node mappings?/gi, (ne) => ne.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function ge(oe) {
      if (oe.issue_summary && oe.issue_summary.trim().length > 0)
        return ie(oe.issue_summary);
      const ne = [];
      return oe.version_gated_count && oe.version_gated_count > 0 && ne.push(`${oe.version_gated_count} node${oe.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), oe.uninstallable_count && oe.uninstallable_count > 0 && ne.push(`${oe.uninstallable_count} node${oe.uninstallable_count > 1 ? "s" : ""} need community packages`), oe.missing_nodes > 0 && ne.push(`${oe.missing_nodes} missing node${oe.missing_nodes > 1 ? "s" : ""}`), oe.missing_models > 0 && ne.push(`${oe.missing_models} missing model${oe.missing_models > 1 ? "s" : ""}`), oe.models_with_category_mismatch && oe.models_with_category_mismatch > 0 && ne.push(`${oe.models_with_category_mismatch} model${oe.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), oe.pending_downloads && oe.pending_downloads > 0 && ne.push(`${oe.pending_downloads} pending download${oe.pending_downloads > 1 ? "s" : ""}`), ne.length > 0 ? ne.join(", ") : "Has issues";
    }
    function re(oe) {
      const ne = oe.sync_state === "new" ? "New" : oe.sync_state === "modified" ? "Modified" : oe.sync_state === "synced" ? "Synced" : oe.sync_state, T = Ae(oe);
      return oe.has_path_sync_issues && oe.models_needing_path_sync && oe.models_needing_path_sync > 0 ? `${oe.models_needing_path_sync} model path${oe.models_needing_path_sync > 1 ? "s" : ""} need${oe.models_needing_path_sync === 1 ? "s" : ""} sync · ${T}` : `${ne || "Unknown"} · ${T}`;
    }
    function Ae(oe) {
      const ne = oe.contract_summary;
      return !ne || !ne.has_contract ? "No contract" : ne.status === "incomplete" ? `${ne.input_count} in / ${ne.output_count} out · incomplete` : `${ne.input_count} in / ${ne.output_count} out`;
    }
    return ot(() => {
      W(), window.addEventListener("comfygit:open-workflow-contract", he);
    }), ra(() => {
      window.removeEventListener("comfygit:open-workflow-contract", he);
    }), (oe, ne) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          k(fo, {
            modelValue: d.value,
            "onUpdate:modelValue": ne[0] || (ne[0] = (T) => d.value = T),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), L(xs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (n(), L(Ss, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            E.value.length ? (n(), L(kt, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(E.value, (T) => (n(), L(At, {
                  key: T.name,
                  status: "broken"
                }, {
                  icon: g(() => [...ne[8] || (ne[8] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(T.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(ge(T)), 1)
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => se(T.name)
                    }, {
                      default: g(() => [...ne[9] || (ne[9] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => ce(T.name)
                    }, {
                      default: g(() => [...ne[10] || (ne[10] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => te(T.name)
                    }, {
                      default: g(() => [...ne[11] || (ne[11] = [
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
            N.value.length ? (n(), L(kt, {
              key: 1,
              title: "NEW",
              count: N.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(N.value, (T) => (n(), L(At, {
                  key: T.name,
                  status: T.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    $(m(T.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    $(m(T.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(re(T)), 1)
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => ce(T.name)
                    }, {
                      default: g(() => [...ne[12] || (ne[12] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => te(T.name)
                    }, {
                      default: g(() => [...ne[13] || (ne[13] = [
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
            z.value.length ? (n(), L(kt, {
              key: 2,
              title: "MODIFIED",
              count: z.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(z.value, (T) => (n(), L(At, {
                  key: T.name,
                  status: T.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...ne[14] || (ne[14] = [
                    $("⚡", -1)
                  ])]),
                  title: g(() => [
                    $(m(T.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(re(T)), 1)
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => ce(T.name)
                    }, {
                      default: g(() => [...ne[15] || (ne[15] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => te(T.name)
                    }, {
                      default: g(() => [...ne[16] || (ne[16] = [
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
            q.value.length ? (n(), L(kt, {
              key: 3,
              title: "SYNCED",
              count: q.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: ne[2] || (ne[2] = (T) => v.value = T)
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(O.value, (T) => (n(), L(At, {
                  key: T.name,
                  status: T.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    $(m(T.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    $(m(T.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(re(T)), 1)
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => ce(T.name)
                    }, {
                      default: g(() => [...ne[17] || (ne[17] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => te(T.name)
                    }, {
                      default: g(() => [...ne[18] || (ne[18] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && q.value.length > 5 ? (n(), L(xe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ne[1] || (ne[1] = (T) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    $(" View all " + m(q.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            I.value.length ? h("", !0) : (n(), L(us, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && _.value ? (n(), L(Bp, {
        key: 0,
        "workflow-name": _.value,
        onClose: ne[3] || (ne[3] = (T) => p.value = !1),
        onResolve: ne[4] || (ne[4] = (T) => se(_.value)),
        onRefresh: ne[5] || (ne[5] = (T) => a("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      w.value && _.value ? (n(), L(s_, {
        key: 1,
        "workflow-name": _.value,
        onClose: Q,
        onInstall: ae,
        onRefresh: ne[6] || (ne[6] = (T) => a("refresh")),
        onRestart: Pe
      }, null, 8, ["workflow-name"])) : h("", !0),
      y.value && _.value ? (n(), L(Eg, {
        key: 2,
        "workflow-name": _.value,
        onClose: ne[7] || (ne[7] = (T) => y.value = !1),
        onRefresh: me
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), I_ = /* @__PURE__ */ Ie(S_, [["__scopeId", "data-v-894ef6ed"]]), E_ = /* @__PURE__ */ Se({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Le(["summary-bar", e.variant])
    }, [
      tt(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), wn = /* @__PURE__ */ Ie(E_, [["__scopeId", "data-v-ccb7816e"]]), T_ = {
  key: 0,
  class: "model-details"
}, M_ = { class: "detail-section" }, P_ = { class: "detail-row" }, R_ = { class: "detail-value mono" }, N_ = { class: "detail-row" }, L_ = { class: "detail-value mono" }, D_ = { class: "detail-row" }, O_ = { class: "detail-value mono" }, U_ = { class: "detail-row" }, A_ = { class: "detail-value" }, z_ = { class: "detail-row" }, V_ = { class: "detail-value" }, F_ = { class: "detail-row" }, B_ = { class: "detail-value" }, W_ = { class: "detail-section" }, G_ = { class: "section-header" }, j_ = {
  key: 0,
  class: "locations-list"
}, H_ = { class: "location-path mono" }, q_ = {
  key: 0,
  class: "location-modified"
}, K_ = ["onClick"], J_ = {
  key: 1,
  class: "empty-state"
}, Y_ = { class: "detail-section" }, Q_ = { class: "section-header" }, X_ = {
  key: 0,
  class: "sources-list"
}, Z_ = { class: "source-type" }, ek = ["href"], tk = ["disabled", "onClick"], sk = {
  key: 1,
  class: "empty-state"
}, ok = { class: "add-source-form" }, nk = ["disabled"], ak = {
  key: 2,
  class: "source-error"
}, lk = {
  key: 3,
  class: "source-success"
}, ik = /* @__PURE__ */ Se({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: u } = ct(), c = b(null), d = b(!0), v = b(null), f = b(""), p = b(!1), w = b(null), y = b(null), _ = b(null), x = b(null);
    let C = null;
    function S(O, W = "success", te = 2e3) {
      C && clearTimeout(C), x.value = { message: O, type: W }, C = setTimeout(() => {
        x.value = null;
      }, te);
    }
    function A(O) {
      if (!O) return "Unknown";
      const W = 1024 * 1024 * 1024, te = 1024 * 1024;
      return O >= W ? `${(O / W).toFixed(1)} GB` : O >= te ? `${(O / te).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function I(O) {
      navigator.clipboard.writeText(O), S("Copied to clipboard!");
    }
    async function E(O) {
      try {
        await u(O), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function N() {
      if (!(!f.value.trim() || !c.value)) {
        p.value = !0, y.value = null, _.value = null;
        try {
          await l(c.value.hash, f.value.trim()), _.value = "Source added successfully!", f.value = "", await q();
        } catch (O) {
          y.value = O instanceof Error ? O.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function z(O) {
      if (c.value) {
        w.value = O, y.value = null, _.value = null;
        try {
          await r(c.value.hash, O), S("Source removed"), await q();
        } catch (W) {
          y.value = W instanceof Error ? W.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function q() {
      d.value = !0, v.value = null;
      try {
        c.value = await a(o.identifier);
      } catch (O) {
        v.value = O instanceof Error ? O.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return ot(q), (O, W) => {
      var te;
      return n(), i(j, null, [
        k($t, {
          title: `Model Details: ${((te = c.value) == null ? void 0 : te.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: W[5] || (W[5] = (se) => O.$emit("close"))
        }, {
          body: g(() => {
            var se, ce, he, ae;
            return [
              c.value ? (n(), i("div", T_, [
                t("section", M_, [
                  t("div", P_, [
                    W[6] || (W[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", R_, m(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[0] || (W[0] = (Q) => I(c.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", N_, [
                    W[7] || (W[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", L_, m(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[1] || (W[1] = (Q) => I(c.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", D_, [
                    W[8] || (W[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", O_, m(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[2] || (W[2] = (Q) => I(c.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", U_, [
                    W[9] || (W[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", A_, m(A(c.value.size)), 1)
                  ]),
                  t("div", z_, [
                    W[10] || (W[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", V_, m(c.value.category), 1)
                  ]),
                  t("div", F_, [
                    W[11] || (W[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", B_, m(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", W_, [
                  t("h4", G_, "Locations (" + m(((se = c.value.locations) == null ? void 0 : se.length) || 0) + ")", 1),
                  (ce = c.value.locations) != null && ce.length ? (n(), i("div", j_, [
                    (n(!0), i(j, null, be(c.value.locations, (Q, me) => (n(), i("div", {
                      key: me,
                      class: "location-item"
                    }, [
                      t("span", H_, m(Q.path), 1),
                      Q.modified ? (n(), i("span", q_, "Modified: " + m(Q.modified), 1)) : h("", !0),
                      Q.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Pe) => E(Q.path)
                      }, " Open File Location ", 8, K_)) : h("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", J_, "No locations found"))
                ]),
                t("section", Y_, [
                  t("h4", Q_, "Download Sources (" + m(((he = c.value.sources) == null ? void 0 : he.length) || 0) + ")", 1),
                  (ae = c.value.sources) != null && ae.length ? (n(), i("div", X_, [
                    (n(!0), i(j, null, be(c.value.sources, (Q, me) => (n(), i("div", {
                      key: me,
                      class: "source-item"
                    }, [
                      t("span", Z_, m(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(Q.url), 9, ek),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Q.url,
                        onClick: (Pe) => z(Q.url)
                      }, m(w.value === Q.url ? "..." : "×"), 9, tk)
                    ]))), 128))
                  ])) : (n(), i("div", sk, " No download sources configured ")),
                  t("div", ok, [
                    xt(t("input", {
                      "onUpdate:modelValue": W[3] || (W[3] = (Q) => f.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [So, f.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !f.value.trim() || p.value,
                      onClick: N
                    }, m(p.value ? "Adding..." : "Add Source"), 9, nk)
                  ]),
                  y.value ? (n(), i("p", ak, m(y.value), 1)) : h("", !0),
                  _.value ? (n(), i("p", lk, m(_.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: W[4] || (W[4] = (se) => O.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), L(Ot, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: Le(["toast", x.value.type])
          }, m(x.value.message), 3)) : h("", !0)
        ]))
      ], 64);
    };
  }
}), Pl = /* @__PURE__ */ Ie(ik, [["__scopeId", "data-v-f15cbb56"]]), rk = ["disabled"], uk = { class: "dropdown-value" }, ck = ["onClick"], dk = {
  key: 0,
  class: "dropdown-error"
}, mk = /* @__PURE__ */ Se({
  __name: "BaseDropdown",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(!1), r = b(null), u = b(null), c = b({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const f = U(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((A) => d(A) === o.modelValue);
      return S ? v(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function y(S) {
      a("update:modelValue", d(S)), w();
    }
    function _() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), A = window.innerHeight, I = A - S.bottom, E = S.top, N = Math.min(300, o.options.length * 36 + 8), z = I < N && E > I;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...z ? { bottom: `${A - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    _t(l, async (S) => {
      S && (await Pt(), _());
    });
    function x() {
      l.value && _();
    }
    function C(S) {
      S.key === "Escape" && l.value && w();
    }
    return ot(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), No(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, A) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Le(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        t("span", uk, m(f.value), 1),
        A[0] || (A[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, rk),
      (n(), L(Ot, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : h("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: u,
          class: "dropdown-menu",
          style: Ft(c.value)
        }, [
          (n(!0), i(j, null, be(e.options, (I) => (n(), i("div", {
            key: d(I),
            class: Le(["dropdown-option", { selected: d(I) === e.modelValue }]),
            onClick: (E) => y(I)
          }, m(v(I)), 11, ck))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (n(), i("span", dk, m(e.error), 1)) : h("", !0)
    ], 512));
  }
}), fk = /* @__PURE__ */ Ie(mk, [["__scopeId", "data-v-857e085b"]]);
function vk(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function pk(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!vk(o.hostname)) return { kind: "unknown" };
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
function gk(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function hk(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${gk(o)}`;
}
const yk = { class: "hf-file-browser" }, wk = { class: "browser-header" }, _k = { class: "repo-info" }, kk = { class: "repo-id" }, bk = {
  key: 0,
  class: "revision-pill"
}, $k = {
  key: 0,
  class: "loading-state"
}, Ck = {
  key: 1,
  class: "error-state"
}, xk = { class: "toolbar" }, Sk = { class: "toolbar-actions" }, Ik = { class: "file-list-container" }, Ek = {
  key: 0,
  class: "file-list-header"
}, Tk = ["checked", "indeterminate"], Mk = { class: "sort-indicator" }, Pk = { class: "sort-indicator" }, Rk = {
  key: 1,
  class: "empty-state"
}, Nk = {
  key: 2,
  class: "file-list"
}, Lk = ["onClick"], Dk = ["checked", "onChange"], Ok = { class: "file-path" }, Uk = { class: "file-size" }, Ak = { class: "destination-section" }, zk = { class: "destination-row" }, Vk = {
  key: 0,
  class: "path-separator"
}, Fk = { class: "action-bar" }, Bk = { class: "summary-info" }, Wk = { class: "summary-count" }, Gk = { class: "summary-size" }, jk = /* @__PURE__ */ Se({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = ct(), u = b([]), c = b(/* @__PURE__ */ new Set()), d = b(!1), v = b(null), f = b(""), p = b(!1), w = b("name"), y = b(!0), _ = b(""), x = b(""), C = b(""), S = b([]), A = b(!1);
    let I = !1;
    const E = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, N = U(() => {
      let V = u.value;
      if (o.initialPath) {
        const H = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        V = V.filter((M) => M.path.startsWith(H) || M.path === o.initialPath);
      }
      if (p.value && (V = V.filter((H) => H.is_model_file)), f.value.trim()) {
        const H = f.value.toLowerCase();
        V = V.filter((M) => M.path.toLowerCase().includes(H));
      }
      return V;
    }), z = U(() => {
      const V = [...N.value];
      return V.sort((H, M) => {
        let R;
        return w.value === "name" ? R = H.path.localeCompare(M.path) : R = H.size - M.size, y.value ? R : -R;
      }), V;
    }), q = U(() => N.value.length === 0 ? !1 : N.value.every((V) => c.value.has(V.path))), O = U(() => N.value.some((V) => c.value.has(V.path))), W = U(() => {
      const V = S.value.map((H) => ({
        label: H,
        value: H
      }));
      return V.push({ label: "Custom path...", value: "__custom__" }), V;
    }), te = U(() => _.value === "__custom__" ? C.value.trim().length > 0 : _.value.length > 0), se = U(() => {
      let V = 0;
      for (const H of c.value) {
        const M = u.value.find((R) => R.path === H);
        M && (V += M.size);
      }
      return V;
    });
    function ce(V) {
      if (V === 0) return "0 B";
      const H = 1024 * 1024 * 1024, M = 1024 * 1024, R = 1024;
      return V >= H ? `${(V / H).toFixed(2)} GB` : V >= M ? `${(V / M).toFixed(1)} MB` : V >= R ? `${(V / R).toFixed(0)} KB` : `${V} B`;
    }
    function he(V) {
      const H = V.match(E);
      return H ? `${H[1]}${H[4]}` : null;
    }
    function ae(V) {
      const H = new Set(c.value), M = H.has(V.path), R = V.shard_group || he(V.path);
      if (R) {
        const de = u.value.filter((ze) => (ze.shard_group || he(ze.path)) === R);
        M ? de.forEach((ze) => H.delete(ze.path)) : de.forEach((ze) => H.add(ze.path));
      } else
        M ? H.delete(V.path) : H.add(V.path);
      c.value = H;
    }
    function Q() {
      const V = new Set(c.value);
      for (const H of N.value)
        H.is_model_file && V.add(H.path);
      c.value = V;
    }
    function me() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Pe() {
      if (q.value) {
        const V = new Set(c.value);
        for (const H of N.value)
          V.delete(H.path);
        c.value = V;
      } else {
        const V = new Set(c.value);
        for (const H of N.value)
          V.add(H.path);
        c.value = V;
      }
    }
    function ie(V) {
      w.value === V ? y.value = !y.value : (w.value = V, y.value = !0);
    }
    function ge(V) {
      const H = V.split("/");
      return H.length >= 2 ? H[H.length - 2] : null;
    }
    function re() {
      if (A.value || c.value.size === 0) return;
      const V = /* @__PURE__ */ new Set();
      for (const R of c.value) {
        const de = ge(R);
        de && V.add(de.toLowerCase());
      }
      if (V.size !== 1) return;
      const H = [...V][0], M = S.value.find(
        (R) => R.toLowerCase() === H
      );
      M && M !== _.value && (I = !0, _.value = M, Pt(() => {
        I = !1;
      }));
    }
    function Ae() {
      return _.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${_.value}/${x.value.trim()}` : _.value;
    }
    function oe() {
      if (c.value.size === 0 || !te.value) return;
      const V = Ae(), H = [];
      for (const M of c.value) {
        const R = u.value.find((de) => de.path === M);
        R && H.push({
          url: hk(o.repoId, o.revision, R.path),
          destination: V,
          filename: R.path.split("/").pop() || R.path
        });
      }
      a("queue", H);
    }
    async function ne() {
      if (o.repoId) {
        d.value = !0, v.value = null;
        try {
          const V = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, H = await l(V);
          if (u.value = H.files, o.preselectedFile) {
            const M = u.value.find((R) => R.path === o.preselectedFile);
            M && ae(M);
          }
        } catch (V) {
          v.value = V instanceof Error ? V.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function T() {
      try {
        const V = await r();
        S.value = V.directories, V.directories.length > 0 && !_.value && (_.value = V.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return _t(() => [o.repoId, o.revision], () => {
      o.repoId && ne();
    }, { immediate: !1 }), _t(() => o.repoId, () => {
      A.value = !1;
    }), _t(c, () => {
      re();
    }, { deep: !0 }), _t(S, () => {
      S.value.length > 0 && c.value.size > 0 && re();
    }), _t(_, (V, H) => {
      I || H === "" || (A.value = !0);
    }), ot(() => {
      ne(), T();
    }), (V, H) => (n(), i("div", yk, [
      t("div", wk, [
        t("button", {
          class: "back-btn",
          onClick: H[0] || (H[0] = (M) => V.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", _k, [
          t("span", kk, m(e.repoId), 1),
          e.revision ? (n(), i("span", bk, m(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (n(), i("div", $k, " Loading repository files... ")) : v.value ? (n(), i("div", Ck, m(v.value), 1)) : (n(), i(j, { key: 2 }, [
        t("div", xk, [
          k(it, {
            modelValue: f.value,
            "onUpdate:modelValue": H[1] || (H[1] = (M) => f.value = M),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Sk, [
            t("button", {
              class: Le(["toggle-btn", { active: p.value }]),
              onClick: H[2] || (H[2] = (M) => p.value = !p.value)
            }, m(p.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: Q
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: me
            }, "Clear")
          ])
        ]),
        t("div", Ik, [
          N.value.length > 0 ? (n(), i("div", Ek, [
            t("input", {
              type: "checkbox",
              checked: q.value,
              indeterminate: O.value && !q.value,
              class: "file-checkbox",
              onChange: Pe
            }, null, 40, Tk),
            t("span", {
              class: "header-name",
              onClick: H[3] || (H[3] = (M) => ie("name"))
            }, [
              H[9] || (H[9] = $(" Name ", -1)),
              t("span", Mk, m(w.value === "name" ? y.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: H[4] || (H[4] = (M) => ie("size"))
            }, [
              H[10] || (H[10] = $(" Size ", -1)),
              t("span", Pk, m(w.value === "size" ? y.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          N.value.length === 0 ? (n(), i("div", Rk, m(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Nk, [
            (n(!0), i(j, null, be(z.value, (M) => (n(), i("div", {
              key: M.path,
              class: Le(["file-item", { selected: c.value.has(M.path) }]),
              onClick: (R) => ae(M)
            }, [
              t("input", {
                type: "checkbox",
                checked: c.value.has(M.path),
                class: "file-checkbox",
                onClick: H[5] || (H[5] = st(() => {
                }, ["stop"])),
                onChange: (R) => ae(M)
              }, null, 40, Dk),
              t("span", Ok, m(M.path), 1),
              t("span", Uk, m(ce(M.size)), 1)
            ], 10, Lk))), 128))
          ]))
        ]),
        t("div", Ak, [
          H[11] || (H[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", zk, [
            k(fk, {
              modelValue: _.value,
              "onUpdate:modelValue": H[6] || (H[6] = (M) => _.value = M),
              options: W.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (n(), i("span", Vk, "/")) : h("", !0),
            _.value !== "__custom__" ? (n(), L(it, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": H[7] || (H[7] = (M) => x.value = M),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          _.value === "__custom__" ? (n(), L(it, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": H[8] || (H[8] = (M) => C.value = M),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        t("div", Fk, [
          t("div", Bk, [
            t("span", Wk, m(c.value.size) + " file(s) selected", 1),
            t("span", Gk, m(ce(se.value)), 1)
          ]),
          k(Me, {
            variant: "primary",
            disabled: c.value.size === 0 || !te.value,
            onClick: oe
          }, {
            default: g(() => [...H[12] || (H[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Hk = /* @__PURE__ */ Ie(jk, [["__scopeId", "data-v-183acebc"]]), qk = { class: "token-config-modal" }, Kk = { class: "provider-info" }, Jk = { class: "provider-icon" }, Yk = { class: "provider-name" }, Qk = {
  key: 0,
  class: "current-token"
}, Xk = { class: "mask" }, Zk = { class: "token-input-section" }, eb = { class: "input-label" }, tb = { class: "help-text" }, sb = ["href"], ob = { class: "modal-actions" }, nb = /* @__PURE__ */ Se({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ct(), r = b(""), u = b(!1), c = b(!1), d = U(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = U(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), f = U(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = U(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = U(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function y() {
      if (r.value.trim()) {
        u.value = !0;
        try {
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", a("saved"), a("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          u.value = !1;
        }
      }
    }
    async function _() {
      c.value = !0;
      try {
        const x = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(x), a("cleared"), a("close");
      } catch (x) {
        console.error("Failed to clear token:", x);
      } finally {
        c.value = !1;
      }
    }
    return (x, C) => (n(), L($t, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: g(() => [
        t("div", qk, [
          t("div", Kk, [
            t("span", Jk, m(v.value), 1),
            t("span", Yk, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", Qk, [
            C[4] || (C[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", Xk, m(e.currentTokenMask), 1),
            k(Me, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: c.value
            }, {
              default: g(() => [...C[3] || (C[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          t("div", Zk, [
            t("label", eb, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            k(it, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", tb, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, sb)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        t("div", ob, [
          k(Me, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Me, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
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
}), ab = /* @__PURE__ */ Ie(nb, [["__scopeId", "data-v-0687d0ce"]]), lb = { class: "huggingface-tab" }, ib = {
  key: 0,
  class: "search-section"
}, rb = { class: "search-header" }, ub = { class: "search-bar" }, cb = {
  key: 1,
  class: "search-results"
}, db = {
  key: 0,
  class: "loading-state"
}, mb = {
  key: 1,
  class: "error-state"
}, fb = {
  key: 2,
  class: "results-list"
}, vb = ["onClick"], pb = { class: "repo-header" }, gb = { class: "repo-id" }, hb = { class: "repo-stats" }, yb = {
  class: "stat",
  title: "Downloads"
}, wb = {
  class: "stat",
  title: "Likes"
}, _b = {
  key: 0,
  class: "repo-desc"
}, kb = {
  key: 1,
  class: "repo-tags"
}, bb = {
  key: 3,
  class: "empty-state"
}, $b = {
  key: 4,
  class: "hint-state"
}, Cb = /* @__PURE__ */ Se({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ct(), a = b("search"), l = b(""), r = b([]), u = b(!1), c = b(null), d = b(!1), v = b(null), f = b("main"), p = b(), w = b(), y = b(!1), _ = b(null), x = U(() => {
      if (!c.value) return !1;
      const q = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || q.includes("authentication") || q.includes("unauthorized");
    });
    function C(q) {
      return q >= 1e6 ? `${(q / 1e6).toFixed(1)}M` : q >= 1e3 ? `${(q / 1e3).toFixed(1)}K` : String(q);
    }
    async function S() {
      const q = l.value.trim();
      if (!q) return;
      c.value = null;
      const O = pk(q);
      if (O.kind === "file" && O.repoId && O.path) {
        v.value = O.repoId, f.value = O.revision || "main";
        const W = O.path.split("/");
        W.length > 1 ? p.value = W.slice(0, -1).join("/") : p.value = void 0, w.value = O.path, a.value = "browse";
        return;
      }
      if (O.kind === "repo" && O.repoId) {
        v.value = O.repoId, f.value = O.revision || "main", p.value = O.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(q) && !q.includes("://")) {
        v.value = q, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const W = await s(q);
        r.value = W.results, d.value = !0;
      } catch (W) {
        c.value = W instanceof Error ? W.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function A(q) {
      v.value = q, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function I() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function E() {
      try {
        const q = await o();
        _.value = q.huggingface_token || null;
      } catch (q) {
        console.error("Failed to load config:", q);
      }
    }
    function N() {
      E(), x.value && l.value && S();
    }
    function z() {
      _.value = null;
    }
    return ot(E), (q, O) => (n(), i("div", lb, [
      a.value === "search" ? (n(), i("div", ib, [
        t("div", rb, [
          t("div", ub, [
            k(it, {
              modelValue: l.value,
              "onUpdate:modelValue": O[0] || (O[0] = (W) => l.value = W),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ts(S, ["enter"])
            }, null, 8, ["modelValue"]),
            k(Me, {
              variant: "primary",
              onClick: S,
              loading: u.value
            }, {
              default: g(() => [...O[5] || (O[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          k(Me, {
            variant: "secondary",
            size: "sm",
            onClick: O[1] || (O[1] = (W) => y.value = !0)
          }, {
            default: g(() => [
              $(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      a.value === "search" ? (n(), i("div", cb, [
        u.value ? (n(), i("div", db, " Searching HuggingFace... ")) : c.value ? (n(), i("div", mb, [
          t("p", null, m(c.value), 1),
          x.value ? (n(), L(Me, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: O[2] || (O[2] = (W) => y.value = !0)
          }, {
            default: g(() => [...O[6] || (O[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", fb, [
          (n(!0), i(j, null, be(r.value, (W) => (n(), i("div", {
            key: W.repo_id,
            class: "repo-card",
            onClick: (te) => A(W.repo_id)
          }, [
            t("div", pb, [
              t("span", gb, m(W.repo_id), 1),
              t("div", hb, [
                t("span", yb, [
                  O[7] || (O[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + m(C(W.downloads)), 1)
                ]),
                t("span", wb, [
                  O[8] || (O[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + m(C(W.likes)), 1)
                ])
              ])
            ]),
            W.description ? (n(), i("p", _b, m(W.description), 1)) : h("", !0),
            W.tags.length > 0 ? (n(), i("div", kb, [
              (n(!0), i(j, null, be(W.tags.slice(0, 5), (te) => (n(), i("span", {
                key: te,
                class: "tag"
              }, m(te), 1))), 128))
            ])) : h("", !0)
          ], 8, vb))), 128))
        ])) : d.value ? (n(), i("div", bb, " No repositories found ")) : (n(), i("div", $b, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), L(Hk, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        onBack: I,
        onQueue: O[3] || (O[3] = (W) => q.$emit("queue", W))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      y.value ? (n(), L(ab, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: O[4] || (O[4] = (W) => y.value = !1),
        onSaved: N,
        onCleared: z
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), xb = /* @__PURE__ */ Ie(Cb, [["__scopeId", "data-v-e13209bf"]]), Sb = { class: "civitai-tab" }, Ib = /* @__PURE__ */ Se({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Sb, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Eb = /* @__PURE__ */ Ie(Ib, [["__scopeId", "data-v-44948051"]]), Tb = { class: "direct-url-tab" }, Mb = { class: "input-group" }, Pb = { class: "input-group" }, Rb = {
  key: 0,
  class: "error"
}, Nb = { class: "actions" }, Lb = /* @__PURE__ */ Se({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = b(""), l = b(""), r = U(() => {
      const d = l.value.trim();
      if (!d) return null;
      const v = d.replace(/\\/g, "/").split("/").pop() || "";
      return v.includes(".") && !v.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), u = U(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), c = () => {
      if (!u.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), a.value = "", l.value = "";
    };
    return (d, v) => (n(), i("div", Tb, [
      t("div", Mb, [
        v[2] || (v[2] = t("label", null, "Download URL", -1)),
        k(it, {
          modelValue: a.value,
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a.value = f),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Pb, [
        v[3] || (v[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        k(it, {
          modelValue: l.value,
          "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Rb, m(r.value), 1)) : h("", !0)
      ]),
      v[5] || (v[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Nb, [
        k(Me, {
          variant: "primary",
          disabled: !u.value,
          onClick: c
        }, {
          default: g(() => [...v[4] || (v[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Db = /* @__PURE__ */ Ie(Lb, [["__scopeId", "data-v-01def7aa"]]), Ob = { class: "download-modal" }, Ub = { class: "tab-bar" }, Ab = ["onClick"], zb = { class: "tab-content" }, Vb = /* @__PURE__ */ Se({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Do(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = b("huggingface");
    function u(v) {
      a(v.map((f) => ({
        workflow: "__manual__",
        filename: f.filename,
        url: f.url,
        targetPath: f.destination ? `${f.destination}/${f.filename}` : f.filename
      }))), o("close");
    }
    function c(v) {
      a(v.map((f) => ({
        workflow: "__manual__",
        filename: f.filename,
        url: f.url,
        targetPath: f.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (v, f) => e.show ? (n(), L($t, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: g(() => [
        t("div", Ob, [
          t("div", Ub, [
            (n(), i(j, null, be(l, (p) => t("button", {
              key: p.id,
              class: Le(["tab-btn", { active: r.value === p.id }]),
              onClick: (w) => r.value = p.id
            }, m(p.icon) + " " + m(p.label), 11, Ab)), 64))
          ]),
          t("div", zb, [
            r.value === "huggingface" ? (n(), L(xb, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (n(), L(Eb, { key: 1 })) : r.value === "direct" ? (n(), L(Db, {
              key: 2,
              onQueue: c
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        k(Me, {
          variant: "secondary",
          onClick: d
        }, {
          default: g(() => [...f[0] || (f[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), ou = /* @__PURE__ */ Ie(Vb, [["__scopeId", "data-v-90a9f401"]]), Fb = /* @__PURE__ */ Se({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ct(), r = b([]), u = b([]), c = b("production"), d = b(!1), v = b(null), f = b(""), p = b(!1), w = b(null), y = b(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = U(
      () => r.value.reduce((O, W) => O + (W.size || 0), 0)
    ), C = U(() => {
      if (!f.value.trim()) return r.value;
      const O = f.value.toLowerCase();
      return r.value.filter((W) => W.filename.toLowerCase().includes(O));
    }), S = U(() => {
      if (!f.value.trim()) return u.value;
      const O = f.value.toLowerCase();
      return u.value.filter((W) => W.filename.toLowerCase().includes(O));
    }), A = U(() => {
      const O = {};
      for (const te of C.value) {
        const se = te.type || "other";
        O[se] || (O[se] = []), O[se].push(te);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([te], [se]) => {
        const ce = W.indexOf(te), he = W.indexOf(se);
        return ce >= 0 && he >= 0 ? ce - he : ce >= 0 ? -1 : he >= 0 ? 1 : te.localeCompare(se);
      }).map(([te, se]) => ({ type: te, models: se }));
    });
    function I(O) {
      if (!O) return "Unknown";
      const W = O / (1024 * 1024);
      return W >= 1024 ? `${(W / 1024).toFixed(1)} GB` : `${W.toFixed(0)} MB`;
    }
    function E(O) {
      w.value = O.hash || O.filename;
    }
    function N(O) {
      o("navigate", "model-index");
    }
    function z(O) {
      alert(`Download functionality not yet implemented for ${O}`);
    }
    async function q() {
      d.value = !0, v.value = null;
      try {
        const O = await a();
        r.value = O, u.value = [];
        const W = await l();
        c.value = W.environment || "production";
      } catch (O) {
        v.value = O instanceof Error ? O.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return ot(q), (O, W) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: W[1] || (W[1] = (te) => p.value = !0)
          }, {
            actions: g(() => [
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (te) => y.value = !0)
              }, {
                default: g(() => [...W[6] || (W[6] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
          k(fo, {
            modelValue: f.value,
            "onUpdate:modelValue": W[2] || (W[2] = (te) => f.value = te),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (n(), L(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length ? (n(), L(wn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(r.value.length) + " models • " + m(I(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(j, null, be(A.value, (te) => (n(), L(kt, {
              key: te.type,
              title: te.type.toUpperCase(),
              count: te.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(te.models, (se) => (n(), L(At, {
                  key: se.hash || se.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...W[7] || (W[7] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(m(se.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(I(se.size)), 1)
                  ]),
                  details: g(() => [
                    k(wt, {
                      label: "Used by:",
                      value: (se.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(wt, {
                      label: "Path:",
                      value: se.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ce) => E(se)
                    }, {
                      default: g(() => [...W[8] || (W[8] = [
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
            S.value.length ? (n(), L(kt, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(S.value, (te) => (n(), L(At, {
                  key: te.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...W[9] || (W[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(te.filename), 1)
                  ]),
                  subtitle: g(() => [...W[10] || (W[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var se;
                    return [
                      k(wt, {
                        label: "Required by:",
                        value: ((se = te.workflow_names) == null ? void 0 : se.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    k(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => z(te.filename)
                    }, {
                      default: g(() => [...W[11] || (W[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => N(te.filename)
                    }, {
                      default: g(() => [...W[12] || (W[12] = [
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
            !C.value.length && !S.value.length ? (n(), L(us, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(Yt, {
        show: p.value,
        title: "About Environment Models",
        onClose: W[3] || (W[3] = (te) => p.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            W[13] || (W[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + m(c.value) + '"', 1),
            W[14] || (W[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          k(xe, {
            variant: "primary",
            onClick: _
          }, {
            default: g(() => [...W[15] || (W[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(Pl, {
        key: 0,
        identifier: w.value,
        onClose: W[4] || (W[4] = (te) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      k(ou, {
        show: y.value,
        onClose: W[5] || (W[5] = (te) => y.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Bb = /* @__PURE__ */ Ie(Fb, [["__scopeId", "data-v-af3ca736"]]), Wb = {
  key: 0,
  class: "indexing-progress"
}, Gb = { class: "progress-info" }, jb = { class: "progress-label" }, Hb = { class: "progress-count" }, qb = { class: "progress-bar" }, Kb = { class: "modal-content" }, Jb = { class: "modal-header" }, Yb = { class: "modal-body" }, Qb = { class: "input-group" }, Xb = { class: "current-path" }, Zb = { class: "input-group" }, e2 = { class: "modal-footer" }, t2 = /* @__PURE__ */ Se({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), u = s, c = b([]), d = b(!1), v = b(!1), f = b(null), p = b(""), w = b(!1), y = b(null), _ = b(!1), x = b(null), C = b(""), S = b(!1), A = b(!1), I = b(null), E = U(
      () => c.value.reduce((he, ae) => he + (ae.size || 0), 0)
    ), N = U(() => {
      if (!p.value.trim()) return c.value;
      const he = p.value.toLowerCase();
      return c.value.filter((ae) => {
        const Q = ae, me = ae.sha256 || Q.sha256_hash || "";
        return ae.filename.toLowerCase().includes(he) || me.toLowerCase().includes(he);
      });
    }), z = U(() => {
      const he = {};
      for (const Q of N.value) {
        const me = Q.type || "other";
        he[me] || (he[me] = []), he[me].push(Q);
      }
      const ae = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(he).sort(([Q], [me]) => {
        const Pe = ae.indexOf(Q), ie = ae.indexOf(me);
        return Pe >= 0 && ie >= 0 ? Pe - ie : Pe >= 0 ? -1 : ie >= 0 ? 1 : Q.localeCompare(me);
      }).map(([Q, me]) => ({ type: Q, models: me }));
    });
    function q(he) {
      if (!he) return "Unknown";
      const ae = 1024 * 1024 * 1024, Q = 1024 * 1024;
      return he >= ae ? `${(he / ae).toFixed(1)} GB` : he >= Q ? `${(he / Q).toFixed(0)} MB` : `${(he / 1024).toFixed(0)} KB`;
    }
    function O(he) {
      y.value = he.hash || he.filename;
    }
    async function W() {
      v.value = !0, f.value = null;
      try {
        const he = await a();
        await se(), he.changes > 0 && console.log(`Scan complete: ${he.changes} changes detected`);
      } catch (he) {
        f.value = he instanceof Error ? he.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function te() {
      if (C.value.trim()) {
        S.value = !0, f.value = null;
        try {
          const he = await r(C.value.trim());
          x.value = he.path, _.value = !1, C.value = "", await se(), console.log(`Directory changed: ${he.models_indexed} models indexed`), u("refresh");
        } catch (he) {
          f.value = he instanceof Error ? he.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function se() {
      d.value = !0, f.value = null;
      try {
        c.value = await o();
      } catch (he) {
        f.value = he instanceof Error ? he.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function ce() {
      try {
        const he = await l();
        x.value = he.path;
      } catch {
      }
    }
    return ot(() => {
      se(), ce();
    }), (he, ae) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: ae[2] || (ae[2] = (Q) => w.value = !0)
          }, {
            actions: g(() => [
              k(xe, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: W
              }, {
                default: g(() => [
                  $(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: ae[0] || (ae[0] = (Q) => _.value = !0)
              }, {
                default: g(() => [...ae[11] || (ae[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: ae[1] || (ae[1] = (Q) => A.value = !0)
              }, {
                default: g(() => [...ae[12] || (ae[12] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
          I.value ? (n(), i("div", Wb, [
            t("div", Gb, [
              t("span", jb, m(I.value.message), 1),
              t("span", Hb, m(I.value.current) + "/" + m(I.value.total), 1)
            ]),
            t("div", qb, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          k(fo, {
            modelValue: p.value,
            "onUpdate:modelValue": ae[3] || (ae[3] = (Q) => p.value = Q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value || I.value ? (n(), L(xs, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (n(), L(Ss, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: se
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            c.value.length ? (n(), L(wn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(c.value.length) + " models • " + m(q(E.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(j, null, be(z.value, (Q) => (n(), L(kt, {
              key: Q.type,
              title: Q.type.toUpperCase(),
              count: Q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(Q.models, (me) => (n(), L(At, {
                  key: me.sha256 || me.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...ae[13] || (ae[13] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(m(me.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(q(me.size)), 1)
                  ]),
                  details: g(() => [
                    k(wt, {
                      label: "Hash:",
                      value: me.hash ? me.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Pe) => O(me)
                    }, {
                      default: g(() => [...ae[14] || (ae[14] = [
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
            N.value.length ? h("", !0) : (n(), L(us, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(Yt, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: ae[4] || (ae[4] = (Q) => w.value = !1)
      }, {
        content: g(() => [...ae[15] || (ae[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value ? (n(), L(Pl, {
        key: 0,
        identifier: y.value,
        onClose: ae[5] || (ae[5] = (Q) => y.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (n(), L(Ot, { to: "body" }, [
        _.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: ae[9] || (ae[9] = st((Q) => _.value = !1, ["self"]))
        }, [
          t("div", Kb, [
            t("div", Jb, [
              ae[16] || (ae[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: ae[6] || (ae[6] = (Q) => _.value = !1)
              }, "✕")
            ]),
            t("div", Yb, [
              t("div", Qb, [
                ae[17] || (ae[17] = t("label", null, "Current Directory", -1)),
                t("code", Xb, m(x.value || "Not set"), 1)
              ]),
              t("div", Zb, [
                ae[18] || (ae[18] = t("label", null, "New Directory Path", -1)),
                k(it, {
                  modelValue: C.value,
                  "onUpdate:modelValue": ae[7] || (ae[7] = (Q) => C.value = Q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              ae[19] || (ae[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", e2, [
              k(Me, {
                variant: "secondary",
                onClick: ae[8] || (ae[8] = (Q) => _.value = !1)
              }, {
                default: g(() => [...ae[20] || (ae[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(Me, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: te
              }, {
                default: g(() => [
                  $(m(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      k(ou, {
        show: A.value,
        onClose: ae[10] || (ae[10] = (Q) => A.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), s2 = /* @__PURE__ */ Ie(t2, [["__scopeId", "data-v-3705114c"]]), o2 = { class: "node-details" }, n2 = { class: "status-row" }, a2 = {
  key: 0,
  class: "detail-row"
}, l2 = { class: "value" }, i2 = { class: "detail-row" }, r2 = { class: "value" }, u2 = {
  key: 1,
  class: "detail-row"
}, c2 = { class: "value mono" }, d2 = {
  key: 2,
  class: "detail-row"
}, m2 = ["href"], f2 = {
  key: 3,
  class: "detail-row"
}, v2 = { class: "value mono small" }, p2 = { class: "detail-row" }, g2 = {
  key: 0,
  class: "value"
}, h2 = {
  key: 1,
  class: "workflow-list"
}, y2 = /* @__PURE__ */ Se({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (c, d) => (n(), L($t, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => a("close"))
    }, {
      body: g(() => [
        t("div", o2, [
          t("div", n2, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Le(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", a2, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", l2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : h("", !0),
          t("div", i2, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", r2, m(u.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", u2, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", c2, m(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (n(), i("div", d2, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(m(e.node.repository) + " ", 1),
              d[6] || (d[6] = t("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                t("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, m2)
          ])) : h("", !0),
          e.node.download_url ? (n(), i("div", f2, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", v2, m(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", p2, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", g2, " Not used in any workflows ")) : (n(), i("div", h2, [
              (n(!0), i(j, null, be(e.node.used_in_workflows, (v) => (n(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        k(Me, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => a("close"))
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
}), w2 = /* @__PURE__ */ Ie(y2, [["__scopeId", "data-v-b342f626"]]), _2 = { class: "dialog-message" }, k2 = {
  key: 0,
  class: "dialog-details"
}, b2 = {
  key: 1,
  class: "dialog-warning"
}, $2 = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), L($t, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", _2, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", k2, [
          (n(!0), i(j, null, be(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : h("", !0),
        e.warning ? (n(), i("p", b2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + m(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        k(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: g(() => [
            $(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), L(Me, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: g(() => [
            $(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        k(Me, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: g(() => [
            $(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), nu = /* @__PURE__ */ Ie($2, [["__scopeId", "data-v-3670b9f5"]]), C2 = { class: "mismatch-warning" }, x2 = { class: "version-mismatch" }, S2 = { class: "version-actual" }, I2 = { class: "version-expected" }, E2 = { style: { color: "var(--cg-color-warning)" } }, T2 = { style: { color: "var(--cg-color-warning)" } }, M2 = {
  key: 0,
  class: "community-status-badge"
}, P2 = { key: 0 }, R2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, N2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, L2 = /* @__PURE__ */ Se({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: u, uninstallNode: c, queueNodeInstall: d } = ct(), v = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), f = b(!1), p = b(null), w = b(""), y = b(!1), _ = b(null), x = b(/* @__PURE__ */ new Set()), C = b(null), S = U(() => {
      if (!w.value.trim()) return v.value.nodes;
      const M = w.value.toLowerCase();
      return v.value.nodes.filter(
        (R) => {
          var de, ze;
          return R.name.toLowerCase().includes(M) || ((de = R.description) == null ? void 0 : de.toLowerCase().includes(M)) || ((ze = R.repository) == null ? void 0 : ze.toLowerCase().includes(M));
        }
      );
    }), A = U(
      () => S.value.filter((M) => M.installed && M.tracked)
    ), I = U(
      () => S.value.filter((M) => !M.installed && M.tracked && !M.issue_type)
    ), E = U(
      () => S.value.filter((M) => M.installed && !M.tracked)
    ), N = U(
      () => S.value.filter((M) => M.issue_type === "version_gated")
    ), z = U(
      () => S.value.filter((M) => M.issue_type === "uninstallable")
    ), q = U(() => N.value.length), O = U(() => z.value.length);
    function W(M) {
      return M.registry_id || M.name;
    }
    function te(M) {
      return x.value.has(W(M));
    }
    async function se(M, R) {
      const de = M.registry_id;
      if (!de) {
        a("toast", `Node "${M.name}" has no package id for install`, "warning");
        return;
      }
      if (R === "git" && !M.repository) {
        a("toast", `Node "${M.name}" has no repository URL for git install`, "warning");
        return;
      }
      const ze = {
        id: de,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      R === "git" && M.repository && (ze.repository = M.repository, ze.install_source = "git"), await d(ze), x.value.add(W(M)), a("toast", `✓ Queued install for "${M.name}"`, "success");
    }
    function ce(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[M] || M;
    }
    const he = U(() => o.versionMismatches.length > 0);
    function ae(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function Q(M) {
      return M.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function me(M) {
      return M.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Pe(M) {
      return M.registry_id ? `Community-mapped package: ${M.registry_id}` : "Community-mapped package";
    }
    function ie(M) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ge(M) {
      _.value = M;
    }
    function re() {
      a("open-node-manager");
    }
    function Ae(M) {
      C.value = {
        title: "Track as Development Node",
        message: `Track "${M}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const R = await r(M);
            R.status === "success" ? (a("toast", `✓ Node "${M}" tracked as development`, "success"), await H()) : a("toast", `Failed to track node: ${R.message || "Unknown error"}`, "error");
          } catch (R) {
            a("toast", `Error tracking node: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function oe(M) {
      C.value = {
        title: "Remove Untracked Node",
        message: `Remove "${M}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const R = await c(M);
            R.status === "success" ? (a("toast", `✓ Node "${M}" removed`, "success"), await H()) : a("toast", `Failed to remove node: ${R.message || "Unknown error"}`, "error");
          } catch (R) {
            a("toast", `Error removing node: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function ne(M) {
      C.value = {
        title: "Install Missing Node",
        message: `Install "${M}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const R = await u(M);
            R.status === "success" ? (a("toast", `✓ Node "${M}" installed`, "success"), await H()) : a("toast", `Failed to install node: ${R.message || "Unknown error"}`, "error");
          } catch (R) {
            a("toast", `Error installing node: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function T(M) {
      C.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${M.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await se(M, "registry");
          } catch (R) {
            a("toast", `Error queueing install: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function V(M) {
      C.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${M.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await se(M, "git");
          } catch (R) {
            a("toast", `Error queueing git install: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    async function H() {
      f.value = !0, p.value = null;
      try {
        v.value = await l();
      } catch (M) {
        p.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        f.value = !1;
      }
    }
    return ot(H), (M, R) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (de) => y.value = !0)
          }, {
            actions: g(() => [
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: g(() => [...R[7] || (R[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(fo, {
            modelValue: w.value,
            "onUpdate:modelValue": R[1] || (R[1] = (de) => w.value = de),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          f.value ? (n(), L(xs, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (n(), L(Ss, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            v.value.total_count ? (n(), L(wn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(m(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (n(), i(j, { key: 0 }, [
                  $(" • " + m(v.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                q.value ? (n(), i(j, { key: 1 }, [
                  $(" • " + m(q.value) + " blocked", 1)
                ], 64)) : h("", !0),
                O.value ? (n(), i(j, { key: 2 }, [
                  $(" • " + m(O.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                v.value.untracked_count ? (n(), i(j, { key: 3 }, [
                  $(" • " + m(v.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            he.value ? (n(), L(kt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", C2, [
                  R[8] || (R[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(j, null, be(e.versionMismatches, (de) => (n(), L(At, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: g(() => [...R[9] || (R[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(de.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", x2, [
                      t("span", S2, m(de.actual), 1),
                      R[10] || (R[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", I2, m(de.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "warning",
                      size: "sm",
                      onClick: R[2] || (R[2] = (ze) => a("repair-environment"))
                    }, {
                      default: g(() => [...R[11] || (R[11] = [
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
            N.value.length ? (n(), L(kt, {
              key: 2,
              title: "BLOCKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(N.value, (de) => (n(), L(At, {
                  key: `blocked-${de.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...R[12] || (R[12] = [
                    $("⛔", -1)
                  ])]),
                  title: g(() => [
                    $(m(de.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", E2, m(Q(de)), 1)
                  ]),
                  details: g(() => [
                    k(wt, {
                      label: "Guidance:",
                      value: de.issue_guidance || me(de)
                    }, null, 8, ["value"]),
                    k(wt, {
                      label: "Used by:",
                      value: ae(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ge(de)
                    }, {
                      default: g(() => [...R[13] || (R[13] = [
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
            z.value.length ? (n(), L(kt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(z.value, (de) => (n(), L(At, {
                  key: `community-${de.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...R[14] || (R[14] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(de.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", T2, m(Pe(de)), 1)
                  ]),
                  details: g(() => [
                    k(wt, {
                      label: "Guidance:",
                      value: de.issue_guidance || ie(de)
                    }, null, 8, ["value"]),
                    k(wt, {
                      label: "Used by:",
                      value: ae(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ge(de)
                    }, {
                      default: g(() => [...R[15] || (R[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    te(de) ? (n(), i("span", M2, "Queued")) : (n(), i(j, { key: 1 }, [
                      de.registry_id ? (n(), L(xe, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (ze) => T(de)
                      }, {
                        default: g(() => [...R[16] || (R[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      de.repository ? (n(), L(xe, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (ze) => V(de)
                      }, {
                        default: g(() => [...R[17] || (R[17] = [
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
            E.value.length ? (n(), L(kt, {
              key: 4,
              title: "UNTRACKED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(E.value, (de) => (n(), L(At, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: g(() => [...R[18] || (R[18] = [
                    $("?", -1)
                  ])]),
                  title: g(() => [
                    $(m(de.name), 1)
                  ]),
                  subtitle: g(() => [...R[19] || (R[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    k(wt, {
                      label: "Used by:",
                      value: ae(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ge(de)
                    }, {
                      default: g(() => [...R[20] || (R[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ze) => Ae(de.name)
                    }, {
                      default: g(() => [...R[21] || (R[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (ze) => oe(de.name)
                    }, {
                      default: g(() => [...R[22] || (R[22] = [
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
            A.value.length ? (n(), L(kt, {
              key: 5,
              title: "INSTALLED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(A.value, (de) => (n(), L(At, {
                  key: de.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    $(m(de.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    $(m(de.name), 1)
                  ]),
                  subtitle: g(() => [
                    de.version ? (n(), i("span", P2, m(de.source === "development" ? "" : "v") + m(de.version), 1)) : (n(), i("span", R2, "version unknown")),
                    t("span", N2, " • " + m(ce(de.source)), 1)
                  ]),
                  details: g(() => [
                    k(wt, {
                      label: "Used by:",
                      value: ae(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ge(de)
                    }, {
                      default: g(() => [...R[23] || (R[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: re
                    }, {
                      default: g(() => [...R[24] || (R[24] = [
                        $(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            I.value.length ? (n(), L(kt, {
              key: 6,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(I.value, (de) => (n(), L(At, {
                  key: de.name,
                  status: "missing"
                }, {
                  icon: g(() => [...R[25] || (R[25] = [
                    $("!", -1)
                  ])]),
                  title: g(() => [
                    $(m(de.name), 1)
                  ]),
                  subtitle: g(() => [...R[26] || (R[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    k(wt, {
                      label: "Required by:",
                      value: ae(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ge(de)
                    }, {
                      default: g(() => [...R[27] || (R[27] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ze) => ne(de.name)
                    }, {
                      default: g(() => [...R[28] || (R[28] = [
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
            !A.value.length && !I.value.length && !N.value.length && !z.value.length && !E.value.length ? (n(), L(us, {
              key: 7,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(Yt, {
        show: y.value,
        title: "About Custom Nodes",
        onClose: R[4] || (R[4] = (de) => y.value = !1)
      }, {
        content: g(() => [...R[29] || (R[29] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Blocked:"),
            $(" Node types that require newer ComfyUI"),
            t("br"),
            t("strong", null, "Community-Mapped:"),
            $(" Actionable package mappings from community metadata"),
            t("br"),
            t("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          k(xe, {
            variant: "primary",
            onClick: R[3] || (R[3] = (de) => y.value = !1)
          }, {
            default: g(() => [...R[30] || (R[30] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), L(w2, {
        key: 0,
        node: _.value,
        onClose: R[5] || (R[5] = (de) => _.value = null)
      }, null, 8, ["node"])) : h("", !0),
      C.value ? (n(), L(nu, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        warning: C.value.warning,
        "confirm-label": C.value.confirmLabel,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: R[6] || (R[6] = (de) => C.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), D2 = /* @__PURE__ */ Ie(L2, [["__scopeId", "data-v-3ef68ac4"]]), O2 = { class: "setting-info" }, U2 = { class: "setting-label" }, A2 = {
  key: 0,
  class: "required-marker"
}, z2 = {
  key: 0,
  class: "setting-description"
}, V2 = { class: "setting-control" }, F2 = /* @__PURE__ */ Se({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Le(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      t("div", O2, [
        t("div", U2, [
          $(m(e.label) + " ", 1),
          e.required ? (n(), i("span", A2, "*")) : h("", !0)
        ]),
        e.description ? (n(), i("div", z2, m(e.description), 1)) : h("", !0)
      ]),
      t("div", V2, [
        tt(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), qs = /* @__PURE__ */ Ie(F2, [["__scopeId", "data-v-3e106b1c"]]), B2 = ["type", "value", "placeholder", "disabled"], W2 = /* @__PURE__ */ Se({
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
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, r = b(null);
    function u(c) {
      const d = c.target.value;
      l("update:modelValue", d);
    }
    return ot(() => {
      a.autoFocus && r.value && r.value.focus();
    }), s({
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
      class: Le(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = ts((v) => c.$emit("enter"), ["enter"])),
        d[1] || (d[1] = ts((v) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => c.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => c.$emit("blur"))
    }, null, 42, B2));
  }
}), $s = /* @__PURE__ */ Ie(W2, [["__scopeId", "data-v-0380d08f"]]), G2 = { class: "toggle" }, j2 = ["checked", "disabled"], H2 = /* @__PURE__ */ Se({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", G2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, j2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Si = /* @__PURE__ */ Ie(H2, [["__scopeId", "data-v-71c0f550"]]), Ga = "ComfyGit.Deploy.GitHubPAT";
function au(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function q2(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function K2() {
  function e() {
    try {
      return localStorage.getItem(Ga);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Ga, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ga);
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
    setToken: s,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: au,
    isRemoteHttps: q2
  };
}
const J2 = { class: "workspace-settings-content" }, Y2 = { class: "settings-section" }, Q2 = { class: "path-setting" }, X2 = { class: "path-value" }, Z2 = { class: "path-setting" }, e$ = { class: "path-value" }, t$ = { class: "settings-section" }, s$ = { class: "token-setting" }, o$ = {
  key: 0,
  class: "token-warning"
}, n$ = { class: "token-actions" }, a$ = { class: "settings-section" }, l$ = { class: "settings-section" }, i$ = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: u, getRemotes: c, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = K2(), y = b(!1), _ = b(null), x = b(null), C = b(null), S = b(null), A = b(""), I = b(""), E = b(""), N = b(""), z = b(!1), q = b(!1), O = b(!1), W = b(""), te = b(!1), se = b(!1), ce = b(null), he = b(!1), ae = b(!0);
    function Q(H) {
      return H.join(" ");
    }
    function me(H) {
      return H.trim() ? H.trim().split(/\s+/) : [];
    }
    const Pe = U(() => {
      if (!S.value) return !1;
      const H = z.value, M = q.value, R = O.value, de = N.value !== Q(S.value.comfyui_extra_args || []);
      return H || M || R || de;
    }), ie = U(() => w());
    async function ge() {
      var H;
      y.value = !0, _.value = null;
      try {
        C.value = await r(a.workspacePath || void 0), S.value = { ...C.value }, A.value = C.value.civitai_api_key || "", I.value = C.value.huggingface_token || "", N.value = Q(C.value.comfyui_extra_args || []), E.value = v() || "", W.value = E.value, z.value = !1, q.value = !1, O.value = !1, ce.value = null;
        const M = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        he.value = M !== "false", ae.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const de = (H = (await c()).remotes) == null ? void 0 : H.find((ze) => ze.name === "origin");
          te.value = !!(de && au(de.url));
        } catch {
          te.value = !1;
        }
      } catch (M) {
        _.value = M instanceof Error ? M.message : "Failed to load settings";
      } finally {
        y.value = !1;
      }
    }
    async function re() {
      var H;
      x.value = null;
      try {
        const M = {};
        z.value && (M.civitai_api_key = A.value || null), q.value && (M.huggingface_token = I.value || null), N.value !== Q(((H = S.value) == null ? void 0 : H.comfyui_extra_args) || []) && (M.comfyui_extra_args = me(N.value)), await u(M, a.workspacePath || void 0), O.value && (E.value ? f(E.value) : p()), await ge(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (M) {
        const R = M instanceof Error ? M.message : "Failed to save settings";
        x.value = { type: "error", message: R }, l("error", R);
      }
    }
    function Ae() {
      S.value && (A.value = S.value.civitai_api_key || "", I.value = S.value.huggingface_token || "", N.value = Q(S.value.comfyui_extra_args || []), E.value = W.value, z.value = !1, q.value = !1, O.value = !1, ce.value = null, x.value = null);
    }
    async function oe() {
      if (E.value) {
        se.value = !0, ce.value = null;
        try {
          const H = await d(E.value);
          ce.value = {
            type: H.status === "success" ? "success" : "error",
            message: H.message
          };
        } catch (H) {
          ce.value = {
            type: "error",
            message: H instanceof Error ? H.message : "Connection test failed"
          };
        } finally {
          se.value = !1;
        }
      }
    }
    function ne() {
      E.value = "", O.value = !0, ce.value = null;
    }
    function T(H) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(H)), console.log("[ComfyGit] Auto-refresh setting saved:", H);
    }
    function V(H) {
      H ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", H ? "enabled" : "disabled");
    }
    return s({
      saveSettings: re,
      resetSettings: Ae,
      hasChanges: Pe,
      loadSettings: ge
    }), ot(ge), (H, M) => (n(), i("div", J2, [
      y.value ? (n(), L(xs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (n(), L(Ss, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: ge
      }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
        k(kt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var R, de;
            return [
              t("div", Y2, [
                t("div", Q2, [
                  M[9] || (M[9] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  M[10] || (M[10] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", X2, m(((R = C.value) == null ? void 0 : R.workspace_path) || "Loading..."), 1)
                ]),
                t("div", Z2, [
                  M[11] || (M[11] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  M[12] || (M[12] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", e$, m(((de = C.value) == null ? void 0 : de.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(kt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", t$, [
              k(qs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  k($s, {
                    modelValue: A.value,
                    "onUpdate:modelValue": M[0] || (M[0] = (R) => A.value = R),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: M[1] || (M[1] = (R) => z.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(qs, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  k($s, {
                    modelValue: I.value,
                    "onUpdate:modelValue": M[2] || (M[2] = (R) => I.value = R),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: M[3] || (M[3] = (R) => q.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(qs, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: g(() => [
                  t("div", s$, [
                    k($s, {
                      modelValue: E.value,
                      "onUpdate:modelValue": M[4] || (M[4] = (R) => E.value = R),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: M[5] || (M[5] = (R) => O.value = !0)
                    }, null, 8, ["modelValue"]),
                    te.value ? (n(), i("div", o$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    M[15] || (M[15] = t("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    t("div", n$, [
                      k(xe, {
                        variant: "ghost",
                        size: "xs",
                        loading: se.value,
                        disabled: !E.value || se.value,
                        onClick: oe
                      }, {
                        default: g(() => [...M[13] || (M[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      ie.value ? (n(), L(xe, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ne
                      }, {
                        default: g(() => [...M[14] || (M[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : h("", !0)
                    ]),
                    ce.value ? (n(), i("div", {
                      key: 1,
                      class: Le(["token-test-result", ce.value.type])
                    }, m(ce.value.message), 3)) : h("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        k(kt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", a$, [
              k(qs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  k($s, {
                    modelValue: N.value,
                    "onUpdate:modelValue": M[6] || (M[6] = (R) => N.value = R),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              M[16] || (M[16] = t("div", { class: "setting-hint" }, [
                $(" Common flags: "),
                t("code", null, "--lowvram"),
                $(", "),
                t("code", null, "--highvram"),
                $(", "),
                t("code", null, "--listen 0.0.0.0"),
                $(", "),
                t("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        k(kt, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", l$, [
              k(qs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  k(Si, {
                    modelValue: he.value,
                    "onUpdate:modelValue": [
                      M[7] || (M[7] = (R) => he.value = R),
                      T
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(qs, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  k(Si, {
                    modelValue: ae.value,
                    "onUpdate:modelValue": [
                      M[8] || (M[8] = (R) => ae.value = R),
                      V
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        x.value ? (n(), L(wn, {
          key: 0,
          variant: (x.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Ft({ color: x.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(x.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), lu = /* @__PURE__ */ Ie(i$, [["__scopeId", "data-v-f1bdc574"]]), r$ = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), L(Et, null, {
      header: g(() => [
        k(Tt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, u;
            return [
              k(xe, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (c) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = s.value) != null && u.hasChanges ? (n(), L(xe, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (c) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
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
        k(lu, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), u$ = { class: "env-title" }, c$ = {
  key: 0,
  class: "current-badge"
}, d$ = {
  key: 0,
  class: "branch-info"
}, m$ = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), L(At, {
      status: e.isCurrent ? "synced" : void 0
    }, ss({
      icon: g(() => [
        $(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", u$, [
          t("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", c$, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", d$, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + m(e.currentBranch), 1)
        ])) : h("", !0)
      ]),
      actions: g(() => [
        tt(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          k(wt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          k(wt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          k(wt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), L(wt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), f$ = /* @__PURE__ */ Ie(m$, [["__scopeId", "data-v-9231917a"]]), v$ = { class: "env-details" }, p$ = { class: "status-row" }, g$ = {
  key: 0,
  class: "detail-row"
}, h$ = { class: "value mono" }, y$ = {
  key: 1,
  class: "detail-row"
}, w$ = { class: "value mono small" }, _$ = { class: "collapsible-section" }, k$ = { class: "value" }, b$ = {
  key: 0,
  class: "collapsible-body"
}, $$ = { class: "item-list" }, C$ = { class: "item-name" }, x$ = { class: "item-name" }, S$ = { class: "item-name" }, I$ = { class: "item-name" }, E$ = {
  key: 0,
  class: "empty-list"
}, T$ = { class: "collapsible-section" }, M$ = { class: "value" }, P$ = {
  key: 0,
  class: "collapsible-body"
}, R$ = { class: "item-list" }, N$ = { class: "item-name" }, L$ = {
  key: 0,
  class: "item-meta"
}, D$ = {
  key: 0,
  class: "empty-list"
}, O$ = { class: "collapsible-section" }, U$ = { class: "value" }, A$ = {
  key: 0,
  class: "missing-count"
}, z$ = {
  key: 0,
  class: "collapsible-body"
}, V$ = { class: "item-list" }, F$ = { class: "model-row" }, B$ = { class: "item-name" }, W$ = { class: "model-meta" }, G$ = { class: "item-meta" }, j$ = {
  key: 0,
  class: "item-meta"
}, H$ = {
  key: 0,
  class: "empty-list"
}, q$ = {
  key: 2,
  class: "section-divider"
}, K$ = {
  key: 3,
  class: "detail-row"
}, J$ = { class: "value" }, Y$ = { class: "footer-actions" }, Q$ = /* @__PURE__ */ Se({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const u = U(() => {
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
    return (d, v) => (n(), L($t, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => a("close"))
    }, {
      body: g(() => {
        var f, p, w, y, _, x, C, S, A, I, E, N, z, q;
        return [
          t("div", v$, [
            t("div", p$, [
              v[7] || (v[7] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Le(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", g$, [
              v[8] || (v[8] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", h$, m(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (n(), i("div", y$, [
              v[9] || (v[9] = t("span", { class: "label" }, "Path:", -1)),
              t("span", w$, m(e.environment.path), 1)
            ])) : h("", !0),
            v[18] || (v[18] = t("div", { class: "section-divider" }, null, -1)),
            t("div", _$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (O) => r("workflows"))
              }, [
                v[10] || (v[10] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", k$, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Le(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", b$, [
                t("div", $$, [
                  (n(!0), i(j, null, be(e.detail.workflows.synced, (O) => (n(), i("div", {
                    key: "synced-" + O,
                    class: "list-item"
                  }, [
                    t("span", C$, m(O), 1),
                    v[11] || (v[11] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, be(e.detail.workflows.new, (O) => (n(), i("div", {
                    key: "new-" + O,
                    class: "list-item"
                  }, [
                    t("span", x$, m(O), 1),
                    v[12] || (v[12] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, be(e.detail.workflows.modified, (O) => (n(), i("div", {
                    key: "mod-" + O,
                    class: "list-item"
                  }, [
                    t("span", S$, m(O), 1),
                    v[13] || (v[13] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, be(e.detail.workflows.deleted, (O) => (n(), i("div", {
                    key: "del-" + O,
                    class: "list-item"
                  }, [
                    t("span", I$, m(O), 1),
                    v[14] || (v[14] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (n(), i("div", E$, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            t("div", T$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (O) => r("nodes"))
              }, [
                v[15] || (v[15] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", M$, m(((y = e.detail) == null ? void 0 : y.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Le(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", P$, [
                t("div", R$, [
                  (n(!0), i(j, null, be(e.detail.nodes, (O) => (n(), i("div", {
                    key: O.name,
                    class: "list-item"
                  }, [
                    t("span", N$, m(O.name), 1),
                    O.version ? (n(), i("span", L$, m(O.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (n(), i("div", D$, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            t("div", O$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (O) => r("models"))
              }, [
                v[16] || (v[16] = t("span", { class: "label" }, "Models:", -1)),
                t("span", U$, [
                  $(m(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (A = (S = e.detail) == null ? void 0 : S.models) != null && A.missing.length ? (n(), i("span", A$, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (I = e.detail) != null && I.models ? (n(), i("span", {
                  key: 0,
                  class: Le(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (E = e.detail) != null && E.models && l.value.has("models") ? (n(), i("div", z$, [
                t("div", V$, [
                  (n(!0), i(j, null, be(e.detail.models.missing, (O) => (n(), i("div", {
                    key: O.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", F$, [
                      t("span", B$, m(O.filename), 1),
                      t("span", {
                        class: Le(["criticality-badge", O.criticality])
                      }, m(O.criticality), 3)
                    ]),
                    t("div", W$, [
                      t("span", G$, m(O.category), 1),
                      O.workflow_names.length ? (n(), i("span", j$, " used by: " + m(O.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (n(), i("div", H$, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (n(), i("div", q$)) : h("", !0),
            (z = e.detail) != null && z.created_at || e.environment.created_at ? (n(), i("div", K$, [
              v[17] || (v[17] = t("span", { class: "label" }, "Created:", -1)),
              t("span", J$, m(c(((q = e.detail) == null ? void 0 : q.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", Y$, [
          k(Me, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => a("export", e.environment.name))
          }, {
            default: g(() => [...v[19] || (v[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), L(Me, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => a("delete", e.environment.name))
          }, {
            default: g(() => [...v[20] || (v[20] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          v[22] || (v[22] = t("div", { class: "footer-spacer" }, null, -1)),
          k(Me, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => a("close"))
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
}), X$ = /* @__PURE__ */ Ie(Q$, [["__scopeId", "data-v-750671f5"]]), iu = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], ru = "3.12", Rl = [
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
], uu = "auto", Z$ = { class: "progress-bar" }, eC = /* @__PURE__ */ Se({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", Z$, [
      t("div", {
        class: Le(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), cu = /* @__PURE__ */ Ie(eC, [["__scopeId", "data-v-1beb0512"]]), tC = { class: "task-progress" }, sC = { class: "progress-info" }, oC = { class: "progress-percentage" }, nC = { class: "progress-message" }, aC = {
  key: 0,
  class: "progress-steps"
}, lC = { class: "step-icon" }, iC = { class: "step-label" }, rC = /* @__PURE__ */ Se({
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
    const s = e;
    function o(l) {
      const r = s.steps.find((u) => u.id === l);
      return r ? s.progress >= r.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", tC, [
      k(cu, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", sC, [
        t("span", oC, m(e.progress) + "%", 1),
        t("span", nC, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", aC, [
        (n(!0), i(j, null, be(e.steps, (u) => (n(), i("div", {
          key: u.id,
          class: Le(["step", o(u.id)])
        }, [
          t("span", lC, m(a(u.id)), 1),
          t("span", iC, m(u.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), Qn = /* @__PURE__ */ Ie(rC, [["__scopeId", "data-v-9d1de66c"]]), uC = {
  key: 0,
  class: "create-env-form"
}, cC = { class: "form-field" }, dC = { class: "input-wrapper" }, mC = {
  key: 0,
  class: "validating-indicator"
}, fC = {
  key: 1,
  class: "valid-indicator"
}, vC = {
  key: 0,
  class: "field-error"
}, pC = { class: "form-field" }, gC = ["value"], hC = { class: "form-field" }, yC = ["disabled"], wC = ["value"], _C = { class: "form-field" }, kC = ["value"], bC = { class: "form-field form-field--checkbox" }, $C = { class: "form-checkbox" }, CC = {
  key: 1,
  class: "create-env-progress"
}, xC = { class: "creating-intro" }, SC = {
  key: 0,
  class: "progress-warning"
}, IC = {
  key: 1,
  class: "create-error"
}, EC = { class: "error-message" }, TC = {
  key: 1,
  class: "footer-status"
}, MC = 10, PC = /* @__PURE__ */ Se({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = ct(), c = b(""), d = b(ru), v = b("latest"), f = b(uu), p = b(!1), w = b(null), y = b(!1), _ = b(!1);
    let x = null, C = 0;
    const S = U(() => !!c.value.trim() && _.value && !w.value && !y.value && !E.value), A = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), I = b(!1), E = b(!1), N = b({
      progress: 0,
      message: ""
    });
    let z = null, q = 0;
    const O = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], W = b(null);
    _t(c, (ie) => {
      _.value = !1, x && (clearTimeout(x), x = null);
      const ge = ie.trim();
      if (!ge) {
        w.value = null, y.value = !1;
        return;
      }
      y.value = !0, x = setTimeout(() => {
        te(ge);
      }, 400);
    });
    async function te(ie, ge = !1) {
      const re = ie.trim();
      if (!re)
        return _.value = !1, y.value = !1, w.value = ge ? "Environment name is required" : null, !1;
      const Ae = ++C;
      y.value = !0;
      try {
        const oe = await u(re);
        return Ae !== C ? !1 : (w.value = oe.valid ? null : oe.error || "Invalid name", _.value = !!oe.valid, !!oe.valid);
      } catch {
        return Ae !== C || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        Ae === C && (y.value = !1);
      }
    }
    async function se() {
      x && (clearTimeout(x), x = null), await te(c.value, !0);
    }
    function ce() {
      E.value || o("close");
    }
    async function he() {
      const ie = c.value.trim();
      if (!ie) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await te(ie, !0)) {
        E.value = !0, N.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const re = {
            name: ie,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ae = await l(re);
          Ae.status === "started" ? ae() : Ae.status === "error" && (N.value = {
            progress: 0,
            message: Ae.message || "Failed to start creation",
            error: Ae.message
          });
        } catch (re) {
          N.value = {
            progress: 0,
            message: re instanceof Error ? re.message : "Unknown error",
            error: re instanceof Error ? re.message : "Unknown error"
          };
        }
      }
    }
    function ae() {
      z || (q = 0, z = window.setInterval(async () => {
        try {
          const ie = await r();
          q = 0, N.value = {
            progress: ie.progress ?? 0,
            message: ie.message,
            phase: ie.phase,
            error: ie.error
          }, ie.state === "complete" ? (Q(), o("created", ie.environment_name || c.value.trim(), p.value)) : ie.state === "error" ? (Q(), N.value.error = ie.error || ie.message) : ie.state === "idle" && E.value && (Q(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          q++, q >= MC && (Q(), N.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Q() {
      z && (clearInterval(z), z = null);
    }
    function me() {
      E.value = !1, N.value = { progress: 0, message: "" }, o("close");
    }
    async function Pe() {
      I.value = !0;
      try {
        A.value = await a();
      } catch (ie) {
        console.error("Failed to load ComfyUI releases:", ie);
      } finally {
        I.value = !1;
      }
    }
    return ot(async () => {
      var ie;
      await Pt(), (ie = W.value) == null || ie.focus(), Pe();
    }), No(() => {
      Q(), x && (clearTimeout(x), x = null);
    }), (ie, ge) => (n(), L($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !E.value,
      onClose: ce
    }, {
      body: g(() => [
        E.value ? (n(), i("div", CC, [
          t("p", xC, [
            ge[12] || (ge[12] = $(" Creating environment ", -1)),
            t("strong", null, m(c.value), 1),
            ge[13] || (ge[13] = $("... ", -1))
          ]),
          k(Qn, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: O
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? h("", !0) : (n(), i("p", SC, " This may take several minutes. Please wait... ")),
          N.value.error ? (n(), i("div", IC, [
            t("p", EC, m(N.value.error), 1)
          ])) : h("", !0)
        ])) : (n(), i("div", uC, [
          t("div", cC, [
            ge[6] || (ge[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", dC, [
              xt(t("input", {
                ref_key: "nameInput",
                ref: W,
                "onUpdate:modelValue": ge[0] || (ge[0] = (re) => c.value = re),
                type: "text",
                class: Le(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: ts(he, ["enter"]),
                onBlur: se
              }, null, 34), [
                [So, c.value]
              ]),
              y.value ? (n(), i("span", mC, "...")) : _.value ? (n(), i("span", fC, "✓")) : h("", !0)
            ]),
            w.value ? (n(), i("div", vC, m(w.value), 1)) : h("", !0),
            ge[7] || (ge[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", pC, [
            ge[8] || (ge[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            xt(t("select", {
              "onUpdate:modelValue": ge[1] || (ge[1] = (re) => d.value = re),
              class: "form-select"
            }, [
              (n(!0), i(j, null, be(Ye(iu), (re) => (n(), i("option", {
                key: re,
                value: re
              }, m(re), 9, gC))), 128))
            ], 512), [
              [Io, d.value]
            ])
          ]),
          t("div", hC, [
            ge[9] || (ge[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            xt(t("select", {
              "onUpdate:modelValue": ge[2] || (ge[2] = (re) => v.value = re),
              class: "form-select",
              disabled: I.value
            }, [
              (n(!0), i(j, null, be(A.value, (re) => (n(), i("option", {
                key: re.tag_name,
                value: re.tag_name
              }, m(re.name), 9, wC))), 128))
            ], 8, yC), [
              [Io, v.value]
            ])
          ]),
          t("div", _C, [
            ge[10] || (ge[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            xt(t("select", {
              "onUpdate:modelValue": ge[3] || (ge[3] = (re) => f.value = re),
              class: "form-select"
            }, [
              (n(!0), i(j, null, be(Ye(Rl), (re) => (n(), i("option", {
                key: re,
                value: re
              }, m(re) + m(re === "auto" ? " (detect GPU)" : ""), 9, kC))), 128))
            ], 512), [
              [Io, f.value]
            ])
          ]),
          t("div", bC, [
            t("label", $C, [
              xt(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ge[4] || (ge[4] = (re) => p.value = re)
              }, null, 512), [
                [Jn, p.value]
              ]),
              ge[11] || (ge[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        E.value ? (n(), i(j, { key: 1 }, [
          N.value.error ? (n(), L(Me, {
            key: 0,
            variant: "secondary",
            onClick: me
          }, {
            default: g(() => [...ge[16] || (ge[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", TC, " Creating environment... "))
        ], 64)) : (n(), i(j, { key: 0 }, [
          k(Me, {
            variant: "primary",
            disabled: !S.value,
            onClick: he
          }, {
            default: g(() => [...ge[14] || (ge[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Me, {
            variant: "secondary",
            onClick: ge[5] || (ge[5] = (re) => o("close"))
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
}), RC = /* @__PURE__ */ Ie(PC, [["__scopeId", "data-v-3faa3d9b"]]), NC = /* @__PURE__ */ Se({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), u = b([]), c = b(!1), d = b(null), v = b(""), f = b(!1), p = b(!1), w = b(null), y = b(null), _ = U(() => {
      if (!v.value.trim()) return u.value;
      const N = v.value.toLowerCase();
      return u.value.filter(
        (z) => {
          var q;
          return z.name.toLowerCase().includes(N) || ((q = z.current_branch) == null ? void 0 : q.toLowerCase().includes(N));
        }
      );
    });
    function x(N, z) {
      p.value = !1, a("created", N, z);
    }
    function C() {
      p.value = !0;
    }
    async function S(N) {
      w.value = N, y.value = null;
      const z = await r(N.name);
      z && (y.value = z);
    }
    function A(N) {
      w.value = null, y.value = null, a("delete", N);
    }
    function I(N) {
      w.value = null, y.value = null, a("export", N);
    }
    async function E() {
      c.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return ot(E), s({
      loadEnvironments: E,
      openCreateModal: C
    }), (N, z) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: z[1] || (z[1] = (q) => f.value = !0)
          }, {
            actions: g(() => [
              e.canCreate ? (n(), L(xe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: g(() => [...z[7] || (z[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : h("", !0),
              k(xe, {
                variant: "secondary",
                size: "sm",
                onClick: z[0] || (z[0] = (q) => N.$emit("import"))
              }, {
                default: g(() => [...z[8] || (z[8] = [
                  $(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(fo, {
            modelValue: v.value,
            "onUpdate:modelValue": z[2] || (z[2] = (q) => v.value = q),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), L(Ss, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            _.value.length ? (n(), L(kt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(_.value, (q) => (n(), L(f$, {
                  key: q.name,
                  "environment-name": q.name,
                  "is-current": q.is_current,
                  "current-branch": q.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    !q.is_current && e.canSwitch ? (n(), L(xe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => N.$emit("switch", q.name)
                    }, {
                      default: g(() => [...z[9] || (z[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : h("", !0),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => S(q)
                    }, {
                      default: g(() => [...z[10] || (z[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => N.$emit("export", q.name)
                    }, {
                      default: g(() => [...z[11] || (z[11] = [
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
            _.value.length ? h("", !0) : (n(), L(us, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, ss({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  e.canCreate ? (n(), L(xe, {
                    key: 0,
                    variant: "primary",
                    onClick: C
                  }, {
                    default: g(() => [...z[12] || (z[12] = [
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
      k(Yt, {
        show: f.value,
        title: "About Environments",
        onClose: z[4] || (z[4] = (q) => f.value = !1)
      }, {
        content: g(() => [...z[13] || (z[13] = [
          t("p", null, [
            t("strong", null, "Environments"),
            $(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Use cases:")
          ], -1),
          t("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
            t("li", null, "Separate production and development workflows"),
            t("li", null, "Test different node configurations"),
            t("li", null, "Experiment with new models safely"),
            t("li", null, "Maintain multiple project versions")
          ], -1)
        ])]),
        actions: g(() => [
          k(xe, {
            variant: "secondary",
            onClick: z[3] || (z[3] = (q) => f.value = !1)
          }, {
            default: g(() => [...z[14] || (z[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(X$, {
        key: 0,
        environment: w.value,
        detail: y.value,
        "can-delete": e.canDelete && u.value.length > 1,
        onClose: z[5] || (z[5] = (q) => {
          w.value = null, y.value = null;
        }),
        onDelete: A,
        onExport: I
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      p.value ? (n(), L(RC, {
        key: 1,
        onClose: z[6] || (z[6] = (q) => p.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), LC = /* @__PURE__ */ Ie(NC, [["__scopeId", "data-v-01d95db8"]]), DC = { class: "file-path" }, OC = { class: "file-path-text" }, UC = ["title"], AC = /* @__PURE__ */ Se({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = b(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", DC, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", OC, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, UC)) : h("", !0)
    ]));
  }
}), zC = /* @__PURE__ */ Ie(AC, [["__scopeId", "data-v-f0982173"]]), VC = ["checked", "disabled"], FC = { class: "base-checkbox-box" }, BC = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, WC = {
  key: 0,
  class: "base-checkbox-label"
}, GC = /* @__PURE__ */ Se({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Le(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, VC),
      t("span", FC, [
        e.modelValue ? (n(), i("svg", BC, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      s.$slots.default ? (n(), i("span", WC, [
        tt(s.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Xn = /* @__PURE__ */ Ie(GC, [["__scopeId", "data-v-bf17c831"]]), jC = { class: "export-blocked" }, HC = { class: "error-header" }, qC = { class: "error-summary" }, KC = { class: "error-title" }, JC = { class: "error-description" }, YC = { class: "issues-list" }, QC = { class: "issue-message" }, XC = {
  key: 0,
  class: "issue-details"
}, ZC = ["onClick"], ex = { class: "issue-fix" }, tx = {
  key: 0,
  class: "commit-section"
}, sx = {
  key: 0,
  class: "issues-warning"
}, ox = {
  key: 1,
  class: "commit-error"
}, nx = /* @__PURE__ */ Se({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ct(), r = b(""), u = b(!1), c = b(!1), d = b(""), v = vo({}), f = U(() => o.mode === "publish" ? "Publish" : "Export"), p = U(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = U(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), y = U(
      () => w.value && !c.value
    ), _ = U(
      () => p.value && r.value.trim() !== "" && !u.value && !y.value
    );
    function x(S) {
      const A = o.issues[S];
      return v[S] || A.details.length <= 3 ? A.details : A.details.slice(0, 3);
    }
    async function C() {
      var S;
      if (_.value) {
        u.value = !0, d.value = "";
        try {
          const A = await l(r.value.trim(), c.value);
          if (A.status === "success")
            a("committed");
          else if (A.status === "blocked") {
            const I = ((S = A.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${I}`;
          } else
            d.value = A.message || "Commit failed";
        } catch (A) {
          d.value = A instanceof Error ? A.message : "Commit failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return (S, A) => (n(), L($t, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: A[4] || (A[4] = (I) => S.$emit("close"))
    }, {
      body: g(() => [
        t("div", jC, [
          t("div", HC, [
            A[5] || (A[5] = t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            t("div", qC, [
              t("h3", KC, m(f.value) + " blocked", 1),
              t("p", JC, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          t("div", YC, [
            (n(!0), i(j, null, be(e.issues, (I, E) => (n(), i("div", {
              key: E,
              class: "issue-item"
            }, [
              t("div", QC, m(I.message), 1),
              I.details.length ? (n(), i("div", XC, [
                (n(!0), i(j, null, be(x(E), (N, z) => (n(), i("div", {
                  key: z,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                I.details.length > 3 && !v[E] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[E] = !0
                }, " +" + m(I.details.length - 3) + " more ", 9, ZC)) : h("", !0)
              ])) : h("", !0),
              t("div", ex, [
                I.type === "uncommitted_workflows" ? (n(), i(j, { key: 0 }, [
                  $(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : I.type === "uncommitted_git_changes" ? (n(), i(j, { key: 1 }, [
                  $(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : I.type === "unresolved_issues" ? (n(), i(j, { key: 2 }, [
                  $(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", tx, [
            w.value ? (n(), i("div", sx, [
              A[7] || (A[7] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              k(Xn, {
                modelValue: c.value,
                "onUpdate:modelValue": A[0] || (A[0] = (I) => c.value = I),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...A[6] || (A[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            k(Ys, {
              modelValue: r.value,
              "onUpdate:modelValue": A[1] || (A[1] = (I) => r.value = I),
              placeholder: "Describe your changes...",
              disabled: u.value || y.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", ox, m(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        p.value ? (n(), i(j, { key: 0 }, [
          k(Me, {
            variant: "secondary",
            onClick: A[2] || (A[2] = (I) => S.$emit("close"))
          }, {
            default: g(() => [...A[8] || (A[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Me, {
            variant: c.value ? "danger" : "primary",
            disabled: !_.value,
            loading: u.value,
            onClick: C
          }, {
            default: g(() => [
              $(m(u.value ? "Committing..." : c.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), L(Me, {
          key: 1,
          variant: "primary",
          onClick: A[3] || (A[3] = (I) => S.$emit("close"))
        }, {
          default: g(() => [...A[9] || (A[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), du = /* @__PURE__ */ Ie(nx, [["__scopeId", "data-v-a8990107"]]), ax = { class: "export-warnings" }, lx = {
  key: 0,
  class: "success-header"
}, ix = { class: "success-summary" }, rx = { class: "success-description" }, ux = { class: "warning-header" }, cx = { class: "warning-summary" }, dx = { class: "warning-title" }, mx = { class: "warning-description" }, fx = { class: "models-section" }, vx = { class: "models-list" }, px = { class: "model-info" }, gx = { class: "model-filename" }, hx = { class: "model-workflows" }, yx = ["onClick"], wx = /* @__PURE__ */ Se({
  __name: "ExportWarningsModal",
  props: {
    models: {},
    mode: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(!1), r = b(null), u = U(() => o.mode || "export"), c = U(() => u.value === "publish" ? "Publish" : "Export"), d = U(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function v() {
      r.value = null, a("revalidate");
    }
    return (f, p) => (n(), i(j, null, [
      k($t, {
        title: u.value === "publish" ? "Publish Warnings" : "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => f.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", ax, [
            e.models.length === 0 ? (n(), i("div", lx, [
              p[5] || (p[5] = t("span", { class: "success-icon" }, [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1)),
              t("div", ix, [
                p[4] || (p[4] = t("h3", { class: "success-title" }, "All models have source URLs", -1)),
                t("p", rx, " Your environment is ready to " + m(u.value) + ". Recipients will be able to download all models automatically. ", 1)
              ])
            ])) : (n(), i(j, { key: 1 }, [
              t("div", ux, [
                p[6] || (p[6] = t("span", { class: "warning-icon" }, [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                    t("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
                  ])
                ], -1)),
                t("div", cx, [
                  t("h3", dx, m(e.models.length) + " model" + m(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  t("p", mx, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or ` + m(u.value) + " anyway. ", 1)
                ])
              ]),
              t("div", fx, [
                t("div", vx, [
                  (n(!0), i(j, null, be(d.value, (w) => (n(), i("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    t("div", px, [
                      t("div", gx, m(w.filename), 1),
                      t("div", hx, " Used by: " + m(w.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (y) => r.value = w.hash
                    }, " Add Source ", 8, yx)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (n(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: p[0] || (p[0] = (w) => l.value = !0)
                }, " Show " + m(e.models.length - 3) + " more model" + m(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: g(() => [
          k(Me, {
            variant: "secondary",
            onClick: p[1] || (p[1] = (w) => f.$emit("cancel"))
          }, {
            default: g(() => [
              $(" Cancel " + m(u.value === "publish" ? "Publish" : "Export"), 1)
            ]),
            _: 1
          }),
          k(Me, {
            variant: "primary",
            onClick: p[2] || (p[2] = (w) => f.$emit("confirm"))
          }, {
            default: g(() => [
              $(m(e.models.length === 0 ? c.value : `${c.value} Anyway`), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]),
      r.value ? (n(), L(Pl, {
        key: 0,
        identifier: r.value,
        onClose: v
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), mu = /* @__PURE__ */ Ie(wx, [["__scopeId", "data-v-9b6d5fce"]]), _x = { class: "export-card" }, kx = { class: "export-path-row" }, bx = { class: "export-actions" }, $x = {
  key: 1,
  class: "export-warning"
}, Cx = /* @__PURE__ */ Se({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const s = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), u = b(""), c = b(!1), d = b(!1), v = b(!1), f = b(null), p = b(!1), w = b(null), y = b(!1), _ = b(!1), x = U(() => {
      var te;
      return ((te = s.environmentName) == null ? void 0 : te.trim()) || null;
    }), C = U(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = U(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), A = U(() => c.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function I() {
      c.value = !0, f.value = null;
      try {
        const te = x.value ? await l(x.value) : await o();
        w.value = te, te.can_export ? te.warnings.models_without_sources.length > 0 ? _.value = !0 : await q() : y.value = !0;
      } catch (te) {
        f.value = {
          status: "error",
          message: te instanceof Error ? te.message : "Validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function E() {
      _.value = !1, await q();
    }
    async function N() {
      y.value = !1, c.value = !0;
      try {
        const te = x.value ? await l(x.value) : await o();
        w.value = te, te.can_export ? te.warnings.models_without_sources.length > 0 ? _.value = !0 : await q() : y.value = !0;
      } catch (te) {
        f.value = {
          status: "error",
          message: te instanceof Error ? te.message : "Re-validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function z() {
      try {
        const te = x.value ? await l(x.value) : await o();
        w.value = te;
      } catch (te) {
        console.error("Re-validation failed:", te);
      }
    }
    async function q() {
      d.value = !0;
      try {
        const te = x.value ? await r(x.value, u.value || void 0) : await a(u.value || void 0);
        f.value = te;
      } catch (te) {
        f.value = {
          status: "error",
          message: te instanceof Error ? te.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function O() {
      var te;
      if ((te = f.value) != null && te.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (se) {
          console.error("Failed to copy path:", se);
        }
    }
    async function W() {
      var te;
      if ((te = f.value) != null && te.path) {
        v.value = !0;
        try {
          const se = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!se.ok)
            throw new Error(`Download failed: ${se.statusText}`);
          const ce = await se.blob(), he = URL.createObjectURL(ce), ae = f.value.path.split("/").pop() || "environment-export.tar.gz", Q = document.createElement("a");
          Q.href = he, Q.download = ae, document.body.appendChild(Q), Q.click(), document.body.removeChild(Q), URL.revokeObjectURL(he);
        } catch (se) {
          console.error("Failed to download:", se), alert(`Download failed: ${se instanceof Error ? se.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (te, se) => (n(), i(j, null, [
      k(Et, null, ss({
        content: g(() => [
          k(kt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", _x, [
                se[7] || (se[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", kx, [
                  k($s, {
                    modelValue: u.value,
                    "onUpdate:modelValue": se[1] || (se[1] = (ce) => u.value = ce),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", bx, [
                  k(xe, {
                    variant: "primary",
                    size: "md",
                    loading: c.value || d.value,
                    disabled: c.value || d.value,
                    onClick: I
                  }, {
                    default: g(() => [
                      se[6] || (se[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      $(" " + m(A.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (n(), L(kt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              k(At, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, ss({
                icon: g(() => [
                  $(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  $(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  $(m(f.value.status === "success" ? S.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    k(wt, { label: "Saved to:" }, {
                      default: g(() => [
                        k(zC, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (n(), L(wt, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", $x, [...se[8] || (se[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    k(xe, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: W
                    }, {
                      default: g(() => [...se[9] || (se[9] = [
                        t("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          t("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: O
                    }, {
                      default: g(() => [...se[10] || (se[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(xe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: se[2] || (se[2] = (ce) => f.value = null)
                    }, {
                      default: g(() => [...se[11] || (se[11] = [
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
            k(Tt, {
              title: C.value,
              "show-info": !0,
              onInfoClick: se[0] || (se[0] = (ce) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      k(Yt, {
        show: p.value,
        title: "What Gets Exported",
        onClose: se[3] || (se[3] = (ce) => p.value = !1)
      }, {
        content: g(() => [...se[12] || (se[12] = [
          t("div", { class: "export-info" }, [
            t("div", { class: "info-section" }, [
              t("strong", null, "Included in Export:"),
              t("ul", null, [
                t("li", null, [
                  t("strong", null, "Workflows"),
                  $(" — All workflows in this environment")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  $(" — Node definitions and dependencies")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  $(" — References and source URLs (not the files)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  $(" — Environment settings and metadata")
                ])
              ])
            ]),
            t("div", { class: "info-section" }, [
              t("strong", null, "Use Cases:"),
              t("ul", null, [
                t("li", null, "Share environments with collaborators"),
                t("li", null, "Back up your setup for safekeeping"),
                t("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            t("p", { class: "info-note" }, [
              t("strong", null, "Note:"),
              $(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value && w.value ? (n(), L(du, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: se[4] || (se[4] = (ce) => y.value = !1),
        onCommitted: N
      }, null, 8, ["issues"])) : h("", !0),
      _.value && w.value ? (n(), L(mu, {
        key: 1,
        models: w.value.warnings.models_without_sources,
        onConfirm: E,
        onCancel: se[5] || (se[5] = (ce) => _.value = !1),
        onRevalidate: z
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), xx = /* @__PURE__ */ Ie(Cx, [["__scopeId", "data-v-253214a4"]]), Sx = { class: "file-input-wrapper" }, Ix = ["accept", "multiple", "disabled"], Ex = /* @__PURE__ */ Se({
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
  setup(e, { expose: s, emit: o }) {
    const a = o, l = b(null);
    function r() {
      var c;
      (c = l.value) == null || c.click();
    }
    function u(c) {
      const d = c.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return s({
      triggerInput: r
    }), (c, d) => (n(), i("div", Sx, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, Ix),
      k(xe, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
          tt(c.$slots, "default", {}, () => [
            d[0] || (d[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            $(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Tx = /* @__PURE__ */ Ie(Ex, [["__scopeId", "data-v-cd192091"]]), Mx = {
  key: 0,
  class: "drop-zone-empty"
}, Px = { class: "drop-zone-text" }, Rx = { class: "drop-zone-primary" }, Nx = { class: "drop-zone-secondary" }, Lx = { class: "drop-zone-actions" }, Dx = {
  key: 1,
  class: "drop-zone-file"
}, Ox = { class: "file-info" }, Ux = { class: "file-details" }, Ax = { class: "file-name" }, zx = { class: "file-size" }, Vx = /* @__PURE__ */ Se({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1), l = b(null), r = b(0), u = U(() => l.value !== null), c = U(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = U(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var S;
      C.stopPropagation(), r.value++, (S = C.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function f(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(C) {
      var A;
      C.stopPropagation(), r.value = 0, a.value = !1;
      const S = (A = C.dataTransfer) == null ? void 0 : A.files;
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
    return (C, S) => (n(), i("div", {
      class: Le(["file-drop-zone", { "drop-active": a.value, "has-file": u.value }]),
      onDragenter: st(v, ["prevent"]),
      onDragover: st(f, ["prevent"]),
      onDragleave: st(p, ["prevent"]),
      onDrop: st(w, ["prevent"])
    }, [
      u.value ? (n(), i("div", Dx, [
        t("div", Ox, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", Ux, [
            t("div", Ax, m(c.value), 1),
            t("div", zx, m(d.value), 1)
          ])
        ]),
        k(xe, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: g(() => [...S[2] || (S[2] = [
            t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (n(), i("div", Mx, [
        S[0] || (S[0] = t("div", { class: "drop-zone-icon" }, [
          t("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            t("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        t("div", Px, [
          t("p", Rx, m(e.primaryText), 1),
          t("p", Nx, m(e.secondaryText), 1)
        ]),
        t("div", Lx, [
          k(Tx, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: y
          }, {
            default: g(() => [
              $(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Fx = /* @__PURE__ */ Ie(Vx, [["__scopeId", "data-v-0f79cb86"]]), Bx = { class: "commit-hash" }, Wx = /* @__PURE__ */ Se({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = U(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Bx, m(o.value), 1));
  }
}), fu = /* @__PURE__ */ Ie(Wx, [["__scopeId", "data-v-7c333cc6"]]), Gx = { class: "import-preview" }, jx = { class: "preview-header" }, Hx = {
  key: 0,
  class: "source-env"
}, qx = { class: "preview-content" }, Kx = { class: "preview-section" }, Jx = { class: "section-header" }, Yx = { class: "section-info" }, Qx = { class: "section-count" }, Xx = {
  key: 0,
  class: "item-list"
}, Zx = { class: "item-name" }, e3 = {
  key: 0,
  class: "item-more"
}, t3 = { class: "preview-section" }, s3 = { class: "section-header" }, o3 = { class: "section-info" }, n3 = { class: "section-count" }, a3 = {
  key: 0,
  class: "item-list"
}, l3 = { class: "item-details" }, i3 = { class: "item-name" }, r3 = { class: "item-meta" }, u3 = {
  key: 0,
  class: "item-more"
}, c3 = { class: "preview-section" }, d3 = { class: "section-header" }, m3 = { class: "section-info" }, f3 = { class: "section-count" }, v3 = {
  key: 0,
  class: "item-list"
}, p3 = { class: "item-name" }, g3 = {
  key: 0,
  class: "item-more"
}, h3 = {
  key: 0,
  class: "preview-section"
}, y3 = { class: "git-info" }, w3 = /* @__PURE__ */ Se({
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
    const s = e, o = U(() => s.workflows.length), a = U(() => s.models.length), l = U(() => s.nodes.length);
    function r(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, c) => (n(), i("div", Gx, [
      t("div", jx, [
        k(as, null, {
          default: g(() => [...c[0] || (c[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", Hx, [
          c[1] || (c[1] = $(" From: ", -1)),
          k(al, null, {
            default: g(() => [
              $(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      t("div", qx, [
        t("div", Kx, [
          t("div", Jx, [
            c[3] || (c[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Yx, [
              c[2] || (c[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Qx, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", Xx, [
            (n(!0), i(j, null, be(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[4] || (c[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Zx, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", e3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", t3, [
          t("div", s3, [
            c[6] || (c[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", o3, [
              c[5] || (c[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", n3, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", a3, [
            (n(!0), i(j, null, be(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", l3, [
                t("span", i3, m(d.filename), 1),
                t("span", r3, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", u3, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", c3, [
          t("div", d3, [
            c[9] || (c[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", m3, [
              c[8] || (c[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", f3, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", v3, [
            (n(!0), i(j, null, be(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[10] || (c[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", p3, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", g3, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", h3, [
          c[11] || (c[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", y3, [
            e.gitBranch ? (n(), L(wt, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                k(al, null, {
                  default: g(() => [
                    $(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : h("", !0),
            e.gitCommit ? (n(), L(wt, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                k(fu, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), _3 = /* @__PURE__ */ Ie(w3, [["__scopeId", "data-v-182fe113"]]), k3 = { class: "import-config" }, b3 = { class: "config-container" }, $3 = { class: "config-field" }, C3 = { class: "input-wrapper" }, x3 = ["value"], S3 = {
  key: 0,
  class: "validating-indicator"
}, I3 = {
  key: 1,
  class: "valid-indicator"
}, E3 = {
  key: 0,
  class: "field-error"
}, T3 = { class: "config-field" }, M3 = { class: "strategy-options" }, P3 = ["value", "checked", "onChange"], R3 = { class: "strategy-content" }, N3 = { class: "strategy-label" }, L3 = { class: "strategy-description" }, D3 = { class: "config-field switch-field" }, O3 = { class: "switch-label" }, U3 = ["checked"], A3 = { class: "advanced-section" }, z3 = { class: "advanced-content" }, V3 = { class: "config-field" }, F3 = ["value"], B3 = ["value"], W3 = /* @__PURE__ */ Se({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(!1), r = b(!1);
    _t(() => o.nameError, (f) => {
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
      a("update:name", p), r.value = !1, c && clearTimeout(c), p.length > 0 ? (l.value = !0, c = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (f, p) => (n(), i("div", k3, [
      k(as, null, {
        default: g(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", b3, [
        t("div", $3, [
          k(An, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", C3, [
            t("input", {
              type: "text",
              class: Le(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, x3),
            l.value ? (n(), i("span", S3, "...")) : r.value ? (n(), i("span", I3, "✓")) : h("", !0)
          ]),
          e.nameError ? (n(), i("div", E3, m(e.nameError), 1)) : h("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", T3, [
          k(An, null, {
            default: g(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", M3, [
            (n(), i(j, null, be(u, (w) => t("label", {
              key: w.value,
              class: Le(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (y) => a("update:modelStrategy", w.value)
              }, null, 40, P3),
              t("div", R3, [
                t("span", N3, m(w.label), 1),
                t("span", L3, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", D3, [
          t("label", O3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, U3),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", A3, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", z3, [
            t("div", V3, [
              k(An, null, {
                default: g(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (n(!0), i(j, null, be(Ye(Rl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, B3))), 128))
              ], 40, F3)
            ])
          ])
        ])
      ])
    ]));
  }
}), G3 = /* @__PURE__ */ Ie(W3, [["__scopeId", "data-v-89ea06a1"]]), j3 = { class: "import-flow" }, H3 = {
  key: 0,
  class: "import-empty"
}, q3 = { class: "git-import-section" }, K3 = { class: "git-url-input-row" }, J3 = ["disabled"], Y3 = {
  key: 0,
  class: "git-error"
}, Q3 = {
  key: 1,
  class: "import-configure"
}, X3 = { class: "selected-file-bar" }, Z3 = {
  key: 0,
  class: "file-bar-content"
}, eS = { class: "file-bar-info" }, tS = { class: "file-bar-name" }, sS = { class: "file-bar-size" }, oS = {
  key: 1,
  class: "file-bar-content"
}, nS = { class: "file-bar-info" }, aS = { class: "file-bar-name" }, lS = {
  key: 0,
  class: "preview-loading"
}, iS = { class: "import-actions" }, rS = {
  key: 2,
  class: "import-progress"
}, uS = { class: "creating-intro" }, cS = {
  key: 0,
  class: "progress-warning"
}, dS = {
  key: 1,
  class: "import-error"
}, mS = { class: "error-message" }, fS = {
  key: 3,
  class: "import-complete"
}, vS = { class: "complete-message" }, pS = { class: "complete-title" }, gS = { class: "complete-details" }, hS = { class: "complete-actions" }, yS = /* @__PURE__ */ Se({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var T, V, H, M;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = b(null), y = b(a.resumeImport ?? !1), _ = b(!1), x = b(!1), C = b(""), S = b(!1), A = b(null), I = b(""), E = b(null), N = b(!1), z = b(null), q = b(null), O = b({
      name: ((T = a.initialProgress) == null ? void 0 : T.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), W = b(null), te = b({
      message: ((V = a.initialProgress) == null ? void 0 : V.message) ?? "Preparing import...",
      phase: ((H = a.initialProgress) == null ? void 0 : H.phase) ?? "",
      progress: ((M = a.initialProgress) == null ? void 0 : M.progress) ?? 0,
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
    ], ce = U(() => {
      if (!q.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const R = q.value;
      return {
        sourceEnvironment: R.comfyui_version ? `ComfyUI ${R.comfyui_version}` : "Unknown",
        workflows: R.workflows.map((de) => de.name),
        models: R.models.map((de) => ({
          filename: de.filename,
          size: 0,
          type: de.relative_path.split("/")[0] || "model"
        })),
        nodes: R.nodes.map((de) => de.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), he = U(() => !S.value && !A.value && q.value && O.value.name.length > 0 && !W.value && (w.value || E.value));
    async function ae(R) {
      w.value = R, S.value = !0, A.value = null, q.value = null;
      try {
        const de = await r(R);
        q.value = de;
      } catch (de) {
        A.value = de instanceof Error ? de.message : "Failed to analyze file", console.error("Preview error:", de);
      } finally {
        S.value = !1;
      }
    }
    function Q() {
      w.value = null, E.value = null, I.value = "", z.value = null, _.value = !1, x.value = !1, C.value = "", q.value = null, A.value = null, O.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, W.value = null, l("source-cleared");
    }
    function me() {
      oe(), Q(), y.value = !1, S.value = !1, N.value = !1, te.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Pe() {
      if (I.value.trim()) {
        N.value = !0, z.value = null;
        try {
          const R = await u(I.value.trim());
          E.value = I.value.trim(), q.value = R;
        } catch (R) {
          z.value = R instanceof Error ? R.message : "Failed to analyze repository";
        } finally {
          N.value = !1;
        }
      }
    }
    function ie(R) {
      try {
        const de = new URL(R);
        return de.host + de.pathname.replace(/\.git$/, "");
      } catch {
        return R;
      }
    }
    async function ge(R) {
      if (!R) {
        W.value = "Environment name is required";
        return;
      }
      try {
        const de = await c(R);
        W.value = de.valid ? null : de.error || "Invalid name";
      } catch {
        W.value = "Failed to validate name";
      }
    }
    async function re() {
      if (O.value.name && !(!w.value && !E.value)) {
        y.value = !0, _.value = !1, te.value = { message: `Creating environment '${O.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let R;
          if (w.value)
            R = await d(
              w.value,
              O.value.name,
              O.value.modelStrategy,
              O.value.torchBackend
            );
          else if (E.value)
            R = await v(
              E.value,
              O.value.name,
              O.value.modelStrategy,
              O.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          R.status === "started" ? Ae() : (x.value = !1, C.value = R.message, y.value = !1, _.value = !0);
        } catch (R) {
          x.value = !1, C.value = R instanceof Error ? R.message : "Unknown error occurred during import", y.value = !1, _.value = !0;
        }
      }
    }
    async function Ae() {
      if (p) return;
      const R = async () => {
        try {
          const ze = await f();
          return te.value = {
            message: ze.message,
            phase: ze.phase || "",
            progress: ze.progress ?? (ze.state === "importing" ? 50 : 0),
            error: ze.error || null
          }, ze.state === "complete" ? (oe(), x.value = !0, C.value = `Environment '${ze.environment_name}' created successfully`, y.value = !1, _.value = !0, ze.environment_name && l("import-complete", ze.environment_name, O.value.switchAfterImport), !1) : ze.state === "error" ? (oe(), x.value = !1, C.value = ze.error || ze.message, y.value = !1, _.value = !0, !1) : !0;
        } catch (ze) {
          return console.error("Failed to poll import progress:", ze), !0;
        }
      };
      await R() && (p = setInterval(async () => {
        await R() || oe();
      }, 2e3));
    }
    function oe() {
      p && (clearInterval(p), p = null);
    }
    function ne(R) {
      return R < 1024 ? `${R} B` : R < 1024 * 1024 ? `${(R / 1024).toFixed(1)} KB` : R < 1024 * 1024 * 1024 ? `${(R / (1024 * 1024)).toFixed(1)} MB` : `${(R / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ot(async () => {
      try {
        const R = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", R.state, R), R.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", R.environment_name), y.value = !0, O.value.name = R.environment_name || O.value.name || "", te.value = {
          progress: R.progress ?? 0,
          message: R.message || "Importing...",
          phase: R.phase || "",
          error: null
        }, Ae());
      } catch (R) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", R);
      }
    }), s({
      handleReset: me,
      isImporting: y,
      canImport: he
    }), (R, de) => {
      var ze;
      return n(), i("div", j3, [
        !w.value && !E.value && !y.value ? (n(), i("div", H3, [
          k(Fx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ae
          }),
          de[7] || (de[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", q3, [
            de[5] || (de[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", K3, [
              xt(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": de[0] || (de[0] = (qe) => I.value = qe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ts(Pe, ["enter"]),
                disabled: N.value
              }, null, 40, J3), [
                [So, I.value]
              ]),
              k(xe, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || N.value,
                onClick: Pe
              }, {
                default: g(() => [
                  $(m(N.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            z.value ? (n(), i("div", Y3, m(z.value), 1)) : h("", !0),
            de[6] || (de[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !y.value && !_.value ? (n(), i("div", Q3, [
          t("div", X3, [
            w.value ? (n(), i("div", Z3, [
              de[8] || (de[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", eS, [
                t("div", tS, m(w.value.name), 1),
                t("div", sS, m(ne(w.value.size)), 1)
              ])
            ])) : E.value ? (n(), i("div", oS, [
              de[10] || (de[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", nS, [
                t("div", aS, m(ie(E.value)), 1),
                de[9] || (de[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            k(xe, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: g(() => [...de[11] || (de[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", lS, [...de[12] || (de[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : A.value ? (n(), L(ds, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [A.value]
          }, null, 8, ["details"])) : q.value ? (n(), L(_3, {
            key: 2,
            "source-environment": ce.value.sourceEnvironment,
            workflows: ce.value.workflows,
            models: ce.value.models,
            nodes: ce.value.nodes,
            "git-branch": ce.value.gitBranch,
            "git-commit": ce.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          q.value ? (n(), L(G3, {
            key: 3,
            name: O.value.name,
            "onUpdate:name": de[1] || (de[1] = (qe) => O.value.name = qe),
            "model-strategy": O.value.modelStrategy,
            "onUpdate:modelStrategy": de[2] || (de[2] = (qe) => O.value.modelStrategy = qe),
            "torch-backend": O.value.torchBackend,
            "onUpdate:torchBackend": de[3] || (de[3] = (qe) => O.value.torchBackend = qe),
            "switch-after-import": O.value.switchAfterImport,
            "onUpdate:switchAfterImport": de[4] || (de[4] = (qe) => O.value.switchAfterImport = qe),
            "name-error": W.value,
            onValidateName: ge
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          O.value.modelStrategy === "skip" && ((ze = q.value) != null && ze.models_needing_download) ? (n(), L(ds, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${q.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          t("div", iS, [
            k(xe, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: g(() => [...de[13] || (de[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(xe, {
              variant: "primary",
              size: "md",
              disabled: !he.value,
              onClick: re
            }, {
              default: g(() => [...de[14] || (de[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (n(), i("div", rS, [
          t("p", uS, [
            de[15] || (de[15] = $(" Importing environment ", -1)),
            t("strong", null, m(O.value.name), 1),
            de[16] || (de[16] = $("... ", -1))
          ]),
          k(Qn, {
            progress: te.value.progress,
            message: te.value.message,
            "current-phase": te.value.phase,
            variant: te.value.error ? "error" : "default",
            "show-steps": !0,
            steps: se
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          te.value.error ? h("", !0) : (n(), i("p", cS, " This may take several minutes. Please wait... ")),
          te.value.error ? (n(), i("div", dS, [
            t("p", mS, m(te.value.error), 1)
          ])) : h("", !0)
        ])) : _.value ? (n(), i("div", fS, [
          t("div", {
            class: Le(["complete-icon", x.value ? "success" : "error"])
          }, m(x.value ? "✓" : "✕"), 3),
          t("div", vS, [
            t("div", pS, m(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", gS, m(C.value), 1)
          ]),
          t("div", hS, [
            k(xe, {
              variant: "primary",
              size: "md",
              onClick: me
            }, {
              default: g(() => [...de[17] || (de[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), vu = /* @__PURE__ */ Ie(yS, [["__scopeId", "data-v-72cbc04e"]]), wS = /* @__PURE__ */ Se({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1);
    function l(r, u) {
      u && o("import-complete-switch", r);
    }
    return (r, u) => (n(), i(j, null, [
      k(Et, null, ss({
        content: g(() => [
          k(vu, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(Tt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: u[0] || (u[0] = (c) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      k(Yt, {
        show: a.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (c) => a.value = !1)
      }, {
        content: g(() => [...u[2] || (u[2] = [
          t("div", { class: "help-steps" }, [
            t("div", { class: "help-step" }, [
              t("span", { class: "step-number" }, "1"),
              t("div", { class: "step-content" }, [
                t("strong", null, "Creates a New Environment"),
                t("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            t("div", { class: "help-step" }, [
              t("span", { class: "step-number" }, "2"),
              t("div", { class: "step-content" }, [
                t("strong", null, "Preview Before Import"),
                t("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            t("div", { class: "help-step" }, [
              t("span", { class: "step-number" }, "3"),
              t("div", { class: "step-content" }, [
                t("strong", null, "Choose Model Strategy"),
                t("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            t("div", { class: "help-step" }, [
              t("span", { class: "step-number" }, "4"),
              t("div", { class: "step-content" }, [
                t("strong", null, "Switch When Ready"),
                t("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _S = /* @__PURE__ */ Ie(wS, [["__scopeId", "data-v-41b1f298"]]), pu = "ComfyGit.Cloud.Url", gu = "ComfyGit.Cloud.DashboardUrl", ll = "ComfyGit.Cloud.Session", il = "ComfyGit.Cloud.User", hu = "ComfyGit.Cloud.LinkedEnvironments";
function Nl(e) {
  try {
    const s = localStorage.getItem(e);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}
function yu(e, s = "") {
  try {
    return localStorage.getItem(e) || s;
  } catch {
    return s;
  }
}
const ja = b(yu(pu, "http://127.0.0.1:8012")), Ha = b(yu(gu, "")), Tn = b(Nl(ll)), Bo = b(Nl(il)), no = b(Nl(hu) || {});
function wu() {
  const e = U(() => {
    var d, v;
    return !!((d = Tn.value) != null && d.access_token) && !!((v = Bo.value) != null && v.id);
  }), s = U(() => {
    var d;
    return ((d = Bo.value) == null ? void 0 : d.email) || "Not signed in";
  });
  function o(d) {
    ja.value = d.trim();
    try {
      localStorage.setItem(pu, ja.value);
    } catch (v) {
      console.error("[useCloudAuth] Failed to save cloud URL:", v);
    }
  }
  function a(d) {
    Ha.value = d.trim();
    try {
      localStorage.setItem(gu, Ha.value);
    } catch (v) {
      console.error("[useCloudAuth] Failed to save dashboard URL:", v);
    }
  }
  function l(d, v) {
    Tn.value = d, Bo.value = v;
    try {
      localStorage.setItem(ll, JSON.stringify(d)), localStorage.setItem(il, JSON.stringify(v));
    } catch (f) {
      console.error("[useCloudAuth] Failed to save auth state:", f);
    }
  }
  function r() {
    Tn.value = null, Bo.value = null;
    try {
      localStorage.removeItem(ll), localStorage.removeItem(il);
    } catch (d) {
      console.error("[useCloudAuth] Failed to clear auth state:", d);
    }
  }
  function u(d) {
    const v = String(d || "").trim();
    return v && no.value[v] || null;
  }
  function c(d, v) {
    const f = String(d || "").trim();
    if (f) {
      if (v)
        no.value = {
          ...no.value,
          [f]: { id: v.id, name: v.name }
        };
      else {
        const p = { ...no.value };
        delete p[f], no.value = p;
      }
      try {
        localStorage.setItem(hu, JSON.stringify(no.value));
      } catch (p) {
        console.error("[useCloudAuth] Failed to save linked cloud environments:", p);
      }
    }
  }
  return {
    cloudUrl: ja,
    dashboardUrl: Ha,
    session: Tn,
    user: Bo,
    isAuthenticated: e,
    authLabel: s,
    setCloudUrl: o,
    setDashboardUrl: a,
    setAuth: l,
    clearAuth: r,
    linkedEnvironments: no,
    getLinkedEnvironment: u,
    setLinkedEnvironment: c
  };
}
const kS = { class: "account-section" }, bS = {
  key: 0,
  class: "account-card"
}, $S = { class: "account-card-header" }, CS = { class: "account-meta" }, xS = { class: "row-actions" }, SS = {
  key: 1,
  class: "account-card"
}, IS = { class: "auth-form-grid" }, ES = { class: "field-group full-span" }, TS = { class: "field-group full-span" }, MS = { class: "row-actions" }, PS = { class: "account-section" }, RS = { class: "stacked-form" }, NS = { class: "row-actions" }, LS = { class: "stacked-form" }, DS = { class: "row-actions" }, OS = /* @__PURE__ */ Se({
  __name: "AccountSection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, { getCloudAuthConfig: a, loginToCloud: l, signupToCloud: r, getCloudMe: u, logoutFromCloud: c } = ct(), { cloudUrl: d, dashboardUrl: v, session: f, user: p, isAuthenticated: w, authLabel: y, setCloudUrl: _, setDashboardUrl: x, setAuth: C, clearAuth: S } = wu(), A = b(!1), I = b(d.value), E = b(v.value), N = b(""), z = b(""), q = b(!1), O = b(!1), W = b(!1), te = b(!1), se = b(null), ce = b(null), he = U(() => w.value ? y.value : "Not signed in");
    function ae() {
      const ne = I.value.trim();
      return _(ne), I.value = d.value, d.value;
    }
    async function Q() {
      var ne;
      if (!(!((ne = f.value) != null && ne.access_token) || !d.value))
        try {
          const T = await u(d.value, f.value.access_token);
          f.value && C(f.value, T.user);
        } catch (T) {
          S(), ce.value = {
            type: "error",
            message: T instanceof Error ? T.message : "Stored cloud session is no longer valid."
          };
        }
    }
    async function me() {
      const ne = ae();
      q.value = !0, se.value = null;
      try {
        const T = await a(ne);
        se.value = {
          type: "success",
          message: `Connected. Supabase auth is configured for ${T.url}.`
        };
      } catch (T) {
        se.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to connect to cloud."
        };
      } finally {
        q.value = !1;
      }
    }
    function Pe() {
      const ne = ae();
      se.value = {
        type: "info",
        message: `Cloud URL saved: ${ne}`
      };
    }
    function ie() {
      const ne = E.value.trim();
      x(ne), E.value = v.value, se.value = {
        type: "info",
        message: `Dashboard URL saved: ${v.value || "cleared"}`
      };
    }
    async function ge() {
      const ne = ae();
      O.value = !0, ce.value = null;
      try {
        const T = await l(ne, N.value.trim(), z.value);
        if (!T.session || !T.user)
          throw new Error("Cloud did not return a session.");
        C(T.session, T.user), ce.value = { type: "success", message: "Signed in successfully." }, o("toast", "Signed in to ComfyGit Cloud", "success"), z.value = "";
      } catch (T) {
        ce.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to sign in."
        };
      } finally {
        O.value = !1;
      }
    }
    async function re() {
      const ne = ae();
      W.value = !0, ce.value = null;
      try {
        const T = await r(ne, N.value.trim(), z.value);
        if (!T.session || !T.user)
          throw new Error("Cloud did not return a session.");
        C(T.session, T.user), ce.value = { type: "success", message: "Account created and signed in." }, o("toast", "ComfyGit Cloud account created", "success"), z.value = "";
      } catch (T) {
        ce.value = {
          type: "error",
          message: T instanceof Error ? T.message : "Failed to create account."
        };
      } finally {
        W.value = !1;
      }
    }
    async function Ae() {
      var ne;
      te.value = !0;
      try {
        await c(d.value, (ne = f.value) == null ? void 0 : ne.refresh_token);
      } catch {
      } finally {
        S(), te.value = !1, ce.value = { type: "info", message: "Signed out." }, o("toast", "Signed out of ComfyGit Cloud", "info");
      }
    }
    function oe() {
      v.value && window.open(v.value, "_blank", "noopener,noreferrer");
    }
    return ot(() => {
      Q();
    }), (ne, T) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, {
            title: "CLOUD ACCOUNT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (V) => A.value = !0)
          }, {
            actions: g(() => [
              t("div", {
                class: Le(["auth-chip", { authenticated: Ye(w) }])
              }, m(he.value), 3)
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          k(kt, { title: "AUTHENTICATION" }, {
            default: g(() => [
              t("div", kS, [
                Ye(w) && Ye(p) ? (n(), i("div", bS, [
                  t("div", $S, [
                    T[8] || (T[8] = t("div", { class: "account-title" }, "SIGNED IN", -1)),
                    k(xe, {
                      variant: "ghost",
                      size: "xs",
                      loading: te.value,
                      onClick: Ae
                    }, {
                      default: g(() => [...T[7] || (T[7] = [
                        $(" Sign Out ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  t("div", CS, [
                    t("div", null, [
                      T[9] || (T[9] = t("span", { class: "meta-label" }, "Email:", -1)),
                      $(" " + m(Ye(p).email || "—"), 1)
                    ]),
                    t("div", null, [
                      T[10] || (T[10] = t("span", { class: "meta-label" }, "User ID:", -1)),
                      $(" " + m(Ye(p).id), 1)
                    ])
                  ]),
                  t("div", xS, [
                    k(xe, {
                      variant: "primary",
                      size: "xs",
                      onClick: T[1] || (T[1] = (V) => o("navigate", "publish"))
                    }, {
                      default: g(() => [...T[11] || (T[11] = [
                        $(" Go To Publish ", -1)
                      ])]),
                      _: 1
                    }),
                    k(xe, {
                      variant: "ghost",
                      size: "xs",
                      onClick: oe
                    }, {
                      default: g(() => [...T[12] || (T[12] = [
                        $(" Open Dashboard ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])) : (n(), i("div", SS, [
                  T[17] || (T[17] = t("div", { class: "account-title" }, "SIGN IN OR CREATE ACCOUNT", -1)),
                  t("div", IS, [
                    t("div", ES, [
                      T[13] || (T[13] = t("label", { class: "field-label" }, "Email", -1)),
                      k($s, {
                        modelValue: N.value,
                        "onUpdate:modelValue": T[2] || (T[2] = (V) => N.value = V),
                        type: "email",
                        placeholder: "you@example.com",
                        onKeydown: ts(st(ge, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ]),
                    t("div", TS, [
                      T[14] || (T[14] = t("label", { class: "field-label" }, "Password", -1)),
                      k($s, {
                        modelValue: z.value,
                        "onUpdate:modelValue": T[3] || (T[3] = (V) => z.value = V),
                        type: "password",
                        placeholder: "Enter password",
                        onKeydown: ts(st(ge, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ])
                  ]),
                  t("div", MS, [
                    k(xe, {
                      variant: "primary",
                      size: "xs",
                      loading: O.value,
                      onClick: ge
                    }, {
                      default: g(() => [...T[15] || (T[15] = [
                        $(" Sign In ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      loading: W.value,
                      onClick: re
                    }, {
                      default: g(() => [...T[16] || (T[16] = [
                        $(" Create Account ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  ce.value ? (n(), i("div", {
                    key: 0,
                    class: Le(["status-text", ce.value.type])
                  }, m(ce.value.message), 3)) : h("", !0)
                ]))
              ])
            ]),
            _: 1
          }),
          k(kt, {
            title: "ADVANCED",
            collapsible: "",
            "initially-expanded": !1
          }, {
            default: g(() => [
              t("div", PS, [
                k(qs, {
                  label: "Cloud API URL",
                  description: "Override the ComfyGit Cloud API base URL for local development or non-default deployments",
                  stacked: ""
                }, {
                  default: g(() => [
                    t("div", RS, [
                      k($s, {
                        modelValue: I.value,
                        "onUpdate:modelValue": T[4] || (T[4] = (V) => I.value = V),
                        placeholder: "http://127.0.0.1:8012"
                      }, null, 8, ["modelValue"]),
                      t("div", NS, [
                        k(xe, {
                          variant: "secondary",
                          size: "xs",
                          onClick: Pe
                        }, {
                          default: g(() => [...T[18] || (T[18] = [
                            $(" Save URL ", -1)
                          ])]),
                          _: 1
                        }),
                        k(xe, {
                          variant: "ghost",
                          size: "xs",
                          loading: q.value,
                          onClick: me
                        }, {
                          default: g(() => [...T[19] || (T[19] = [
                            $(" Test Connection ", -1)
                          ])]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      se.value ? (n(), i("div", {
                        key: 0,
                        class: Le(["status-text", se.value.type])
                      }, m(se.value.message), 3)) : h("", !0)
                    ])
                  ]),
                  _: 1
                }),
                k(qs, {
                  label: "Dashboard URL",
                  description: "Override the cloud dashboard URL used by the Open Dashboard actions",
                  stacked: ""
                }, {
                  default: g(() => [
                    t("div", LS, [
                      k($s, {
                        modelValue: E.value,
                        "onUpdate:modelValue": T[5] || (T[5] = (V) => E.value = V),
                        placeholder: "http://100.99.14.94:5174"
                      }, null, 8, ["modelValue"]),
                      t("div", DS, [
                        k(xe, {
                          variant: "secondary",
                          size: "xs",
                          onClick: ie
                        }, {
                          default: g(() => [...T[20] || (T[20] = [
                            $(" Save URL ", -1)
                          ])]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      k(Yt, {
        show: A.value,
        title: "Cloud Account",
        onClose: T[6] || (T[6] = (V) => A.value = !1)
      }, {
        content: g(() => [...T[21] || (T[21] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page manages the local panel's connection to ComfyGit Cloud."),
            t("p", null, "Use it to configure the cloud URL, sign in or create an account, and inspect the currently linked cloud identity."),
            t("p", null, [
              $("Publishing revisions happens from the separate "),
              t("strong", null, "Publish"),
              $(" page.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), US = /* @__PURE__ */ Ie(OS, [["__scopeId", "data-v-6a8d04d9"]]), AS = {
  key: 0,
  class: "publish-card"
}, zS = { class: "row-actions" }, VS = {
  key: 1,
  class: "publish-grid"
}, FS = {
  key: 0,
  class: "publish-card working-copy-card"
}, BS = { class: "card-title" }, WS = { class: "card-copy" }, GS = { class: "meta-grid" }, jS = { class: "link-section" }, HS = { class: "field-group" }, qS = { class: "row-actions" }, KS = { class: "row-actions" }, JS = {
  key: 0,
  class: "publish-error"
}, YS = {
  key: 1,
  class: "publish-card"
}, QS = { class: "publish-card revisions-card" }, XS = {
  key: 0,
  class: "card-copy"
}, ZS = {
  key: 1,
  class: "publish-error"
}, e8 = {
  key: 2,
  class: "card-copy"
}, t8 = {
  key: 3,
  class: "card-copy"
}, s8 = {
  key: 4,
  class: "revision-list"
}, o8 = { class: "revision-main" }, n8 = { class: "revision-title" }, a8 = {
  key: 0,
  class: "matched-badge"
}, l8 = { class: "revision-copy" }, i8 = { class: "revision-meta" }, r8 = { key: 0 }, u8 = /* @__PURE__ */ Se({
  __name: "PublishSection",
  props: {
    environmentName: {},
    branchName: {}
  },
  emits: ["navigate", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getHistory: l,
      validateExport: r,
      validateEnvironmentExport: u,
      getCloudEnvironments: c,
      getCloudEnvironmentRevisions: d,
      publishCurrentEnvironmentToCloud: v
    } = ct(), { cloudUrl: f, session: p, user: w, isAuthenticated: y, getLinkedEnvironment: _, setLinkedEnvironment: x } = wu(), C = b(!1), S = b(!1), A = b(!1), I = b(!1), E = b(null), N = b(null), z = b(null), q = b([]), O = b(null), W = b(null), te = b(null), se = b(!1), ce = b(!1), he = b([]), ae = b(""), Q = U(() => {
      var B;
      return ((B = w.value) == null ? void 0 : B.email) || "Not signed in";
    }), me = U(() => {
      var B;
      return ((B = p.value) == null ? void 0 : B.access_token) || "";
    }), Pe = U(() => W.value && q.value.find((B) => B.source_commit_sha === W.value) || null), ie = U(() => {
      var B;
      return y.value ? !W.value || !((B = O.value) != null && B.can_export) ? !0 : !Pe.value : !1;
    }), ge = U(() => W.value || "No commits yet"), re = U(() => {
      var B;
      return ((B = z.value) == null ? void 0 : B.name) || "Will be created on first publish";
    }), Ae = U(
      () => he.value.map((B) => ({
        label: B.name,
        value: B.id
      }))
    ), oe = U(() => O.value ? O.value.can_export ? O.value.warnings.models_without_sources.length > 0 ? "This local working copy can be published, but some model source URLs are still missing and may reduce deployability." : "This local working copy is ready to publish as a new immutable cloud revision." : "This local working copy is not publishable yet. Review the issues and commit or resolve them first." : "Checking local publish readiness..."), ne = U(() => I.value ? "Publishing..." : A.value ? "Validating..." : "Publish Revision");
    async function T() {
      var B;
      if (!y.value) {
        O.value = null;
        return;
      }
      A.value = !0, N.value = null;
      try {
        O.value = (B = o.environmentName) != null && B.trim() ? await u(o.environmentName) : await r();
      } catch (K) {
        O.value = null, N.value = K instanceof Error ? K.message : "Failed to validate publish readiness.";
      } finally {
        A.value = !1;
      }
    }
    async function V() {
      var B, K;
      if (!y.value || !me.value || !f.value) {
        z.value = null, q.value = [], E.value = null, await T();
        return;
      }
      S.value = !0, E.value = null, N.value = null;
      try {
        const [_e, ke] = await Promise.all([
          l(1),
          c(f.value, me.value)
        ]);
        W.value = ((B = _e.commits[0]) == null ? void 0 : B.hash) || null, te.value = ((K = _e.commits[0]) == null ? void 0 : K.message) || null, he.value = ke.environments || [];
        const $e = _(o.environmentName), Te = ($e ? he.value.find((Ne) => Ne.id === $e.id) : null) || he.value.find(
          (Ne) => Ne.name === (o.environmentName || "")
        ) || null;
        if (z.value = Te, ae.value = (Te == null ? void 0 : Te.id) || "", Te) {
          const Ne = await d(f.value, Te.id, me.value);
          q.value = Ne.revisions || [];
        } else
          q.value = [];
        await T();
      } catch (_e) {
        z.value = null, he.value = [], ae.value = "", q.value = [], E.value = _e instanceof Error ? _e.message : "Failed to load cloud revision state.";
      } finally {
        S.value = !1;
      }
    }
    async function H() {
      var B;
      if (!y.value || !me.value || !f.value) {
        a("navigate", "account");
        return;
      }
      I.value = !0, N.value = null;
      try {
        const K = await v(
          f.value,
          me.value,
          te.value || null,
          ((B = z.value) == null ? void 0 : B.id) || null
        );
        await V(), a(
          "toast",
          K.environment_revision ? `Published ${K.environment.name} r${K.environment_revision.revision_number}` : `Published ${K.environment.name}`,
          "success"
        );
      } catch (K) {
        N.value = K instanceof Error ? K.message : "Publish failed.";
      } finally {
        I.value = !1;
      }
    }
    function M() {
      const B = he.value.find((K) => K.id === ae.value) || null;
      x(o.environmentName, B ? { id: B.id, name: B.name } : null), z.value = B, q.value = [], a(
        "toast",
        B ? `Linked ${o.environmentName || "environment"} to cloud environment ${B.name}` : `Cleared linked cloud environment for ${o.environmentName || "environment"}`,
        "success"
      ), V();
    }
    function R() {
      ae.value = "", x(o.environmentName, null), z.value = null, q.value = [], a("toast", `Cleared linked cloud environment for ${o.environmentName || "environment"}`, "success"), V();
    }
    async function de() {
      if (!y.value) {
        a("navigate", "account");
        return;
      }
      if (await T(), !!O.value) {
        if (!O.value.can_export) {
          se.value = !0;
          return;
        }
        if (O.value.warnings.models_without_sources.length > 0) {
          ce.value = !0;
          return;
        }
        await H();
      }
    }
    async function ze() {
      if (se.value = !1, await V(), !!O.value) {
        if (!O.value.can_export) {
          se.value = !0;
          return;
        }
        if (O.value.warnings.models_without_sources.length > 0) {
          ce.value = !0;
          return;
        }
        await H();
      }
    }
    async function qe() {
      ce.value = !1, await H();
    }
    function F(B) {
      const K = Date.parse(B);
      if (Number.isNaN(K)) return B;
      const _e = Date.now() - K, ke = Math.floor(_e / 6e4);
      if (ke < 1) return "just now";
      if (ke < 60) return `${ke}m ago`;
      const $e = Math.floor(ke / 60);
      if ($e < 24) return `${$e}h ago`;
      const Te = Math.floor($e / 24);
      return Te < 30 ? `${Te}d ago` : new Date(K).toLocaleString();
    }
    return ot(() => {
      V();
    }), _t(
      [y, f, () => {
        var B;
        return (B = p.value) == null ? void 0 : B.access_token;
      }, () => o.environmentName],
      () => {
        V();
      }
    ), (B, K) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, {
            title: "PUBLISH REVISION",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (_e) => C.value = !0)
          }, {
            actions: g(() => [
              t("div", {
                class: Le(["auth-chip", { authenticated: Ye(y) }])
              }, m(Q.value), 3)
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          k(kt, { title: "PUBLISH" }, {
            default: g(() => [
              Ye(y) ? (n(), i("div", VS, [
                ie.value ? (n(), i("div", FS, [
                  K[16] || (K[16] = t("div", { class: "card-topline" }, "WORKING COPY", -1)),
                  t("div", BS, m(e.environmentName || "Current environment"), 1),
                  t("div", WS, m(oe.value), 1),
                  t("div", GS, [
                    t("div", null, [
                      K[9] || (K[9] = t("span", { class: "publish-label" }, "Branch:", -1)),
                      $(" " + m(e.branchName || "Detached"), 1)
                    ]),
                    t("div", null, [
                      K[10] || (K[10] = t("span", { class: "publish-label" }, "Commit:", -1)),
                      $(" " + m(ge.value), 1)
                    ]),
                    t("div", null, [
                      K[11] || (K[11] = t("span", { class: "publish-label" }, "Cloud env:", -1)),
                      $(" " + m(re.value), 1)
                    ])
                  ]),
                  t("div", jS, [
                    t("div", HS, [
                      K[12] || (K[12] = t("label", { class: "field-label" }, "Linked Cloud Environment", -1)),
                      k(Js, {
                        modelValue: ae.value,
                        "onUpdate:modelValue": K[2] || (K[2] = (_e) => ae.value = _e),
                        options: Ae.value,
                        placeholder: "Create new cloud environment on first publish",
                        "full-width": "",
                        disabled: S.value || I.value
                      }, null, 8, ["modelValue", "options", "disabled"])
                    ]),
                    t("div", qS, [
                      k(xe, {
                        variant: "secondary",
                        size: "xs",
                        disabled: S.value || I.value,
                        onClick: M
                      }, {
                        default: g(() => [...K[13] || (K[13] = [
                          $(" Save Link ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled"]),
                      k(xe, {
                        variant: "ghost",
                        size: "xs",
                        disabled: !ae.value || S.value || I.value,
                        onClick: R
                      }, {
                        default: g(() => [...K[14] || (K[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ]),
                  t("div", KS, [
                    k(xe, {
                      variant: "primary",
                      size: "xs",
                      loading: A.value || I.value,
                      disabled: A.value || I.value,
                      onClick: de
                    }, {
                      default: g(() => [
                        $(m(ne.value), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"]),
                    k(xe, {
                      variant: "secondary",
                      size: "xs",
                      disabled: A.value || I.value,
                      onClick: V
                    }, {
                      default: g(() => [...K[15] || (K[15] = [
                        $(" Refresh ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  N.value ? (n(), i("div", JS, m(N.value), 1)) : h("", !0)
                ])) : (n(), i("div", YS, [...K[17] || (K[17] = [
                  t("div", { class: "card-topline" }, "WORKING COPY", -1),
                  t("div", { class: "card-title" }, "Already published", -1),
                  t("div", { class: "card-copy" }, " Current local state matches a known published revision. Make another local change or commit before publishing again. ", -1)
                ])])),
                t("div", QS, [
                  K[22] || (K[22] = t("div", { class: "card-topline" }, "PUBLISHED REVISIONS", -1)),
                  S.value ? (n(), i("div", XS, "Loading cloud revisions...")) : E.value ? (n(), i("div", ZS, m(E.value), 1)) : z.value ? q.value.length ? (n(), i("div", s8, [
                    (n(!0), i(j, null, be(q.value, (_e) => {
                      var ke, $e;
                      return n(), i("div", {
                        key: _e.id,
                        class: Le(["revision-row", { matched: _e.id === ((ke = Pe.value) == null ? void 0 : ke.id) }])
                      }, [
                        t("div", o8, [
                          t("div", n8, [
                            t("span", null, "r" + m(_e.revision_number), 1),
                            _e.id === (($e = Pe.value) == null ? void 0 : $e.id) ? (n(), i("span", a8, "Matches local")) : h("", !0)
                          ]),
                          t("div", l8, m(_e.source_message || "No revision message."), 1),
                          t("div", i8, [
                            t("span", null, m(_e.workflow_count) + " workflows", 1),
                            t("span", null, m(_e.node_count) + " nodes", 1),
                            t("span", null, m(_e.model_count) + " models", 1),
                            t("span", null, "Created " + m(F(_e.created_at)), 1),
                            _e.source_commit_sha ? (n(), i("span", r8, "Commit " + m(_e.source_commit_sha), 1)) : h("", !0)
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])) : (n(), i("div", t8, [
                    K[20] || (K[20] = $(" Cloud environment ", -1)),
                    t("strong", null, m(z.value.name), 1),
                    K[21] || (K[21] = $(" exists, but it has no immutable revisions yet. ", -1))
                  ])) : (n(), i("div", e8, [
                    K[18] || (K[18] = $(" No linked cloud environment is selected for ", -1)),
                    t("strong", null, m(e.environmentName || "this environment"), 1),
                    K[19] || (K[19] = $(". Publishing will create one unless you link this local environment to an existing cloud environment above. ", -1))
                  ]))
                ])
              ])) : (n(), i("div", AS, [
                K[7] || (K[7] = t("div", { class: "blocked-title" }, "SIGN IN REQUIRED", -1)),
                K[8] || (K[8] = t("div", { class: "blocked-copy" }, " Publishing revisions is blocked until this local panel is connected to a ComfyGit Cloud account. ", -1)),
                t("div", zS, [
                  k(xe, {
                    variant: "primary",
                    size: "xs",
                    onClick: K[1] || (K[1] = (_e) => a("navigate", "account"))
                  }, {
                    default: g(() => [...K[6] || (K[6] = [
                      $(" Sign In ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ]))
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      k(Yt, {
        show: C.value,
        title: "Publish",
        onClose: K[3] || (K[3] = (_e) => C.value = !1)
      }, {
        content: g(() => [...K[23] || (K[23] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page publishes the current local environment state as an immutable cloud revision."),
            t("p", null, "It reuses export-style validation before submission so uncommitted changes and missing model source data are surfaced before publish."),
            t("p", null, "The cloud dashboard remains responsible for deployments, targets, and runtime operations.")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      se.value && O.value ? (n(), L(du, {
        key: 0,
        issues: O.value.blocking_issues,
        mode: "publish",
        onClose: K[4] || (K[4] = (_e) => se.value = !1),
        onCommitted: ze
      }, null, 8, ["issues"])) : h("", !0),
      ce.value && O.value ? (n(), L(mu, {
        key: 1,
        models: O.value.warnings.models_without_sources,
        mode: "publish",
        onConfirm: qe,
        onCancel: K[5] || (K[5] = (_e) => ce.value = !1),
        onRevalidate: T
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), c8 = /* @__PURE__ */ Ie(u8, [["__scopeId", "data-v-d16eeb92"]]), d8 = { class: "base-tabs" }, m8 = ["disabled", "onClick"], f8 = {
  key: 0,
  class: "base-tabs__badge"
}, v8 = /* @__PURE__ */ Se({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(r) {
      var u;
      (u = o.tabs.find((c) => c.id === r)) != null && u.disabled || a("update:modelValue", r);
    }
    return (r, u) => (n(), i("div", d8, [
      (n(!0), i(j, null, be(e.tabs, (c) => (n(), i("button", {
        key: c.id,
        class: Le([
          "base-tabs__tab",
          {
            active: e.modelValue === c.id,
            disabled: c.disabled
          }
        ]),
        disabled: c.disabled,
        onClick: (d) => l(c.id)
      }, [
        $(m(c.label) + " ", 1),
        c.badge ? (n(), i("span", f8, m(c.badge), 1)) : h("", !0)
      ], 10, m8))), 128))
    ]));
  }
}), Ll = /* @__PURE__ */ Ie(v8, [["__scopeId", "data-v-ad5e6cad"]]), p8 = { class: "commit-list" }, g8 = /* @__PURE__ */ Se({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", p8, [
      tt(s.$slots, "default", {}, void 0)
    ]));
  }
}), _u = /* @__PURE__ */ Ie(g8, [["__scopeId", "data-v-8c5ee761"]]), h8 = { class: "commit-message" }, y8 = { class: "commit-date" }, w8 = /* @__PURE__ */ Se({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l() {
      o.clickable && a("click");
    }
    return (r, u) => (n(), i("div", {
      class: Le(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      k(fu, { hash: e.hash }, null, 8, ["hash"]),
      t("span", h8, m(e.message), 1),
      t("span", y8, m(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = st(() => {
        }, ["stop"]))
      }, [
        tt(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), ku = /* @__PURE__ */ Ie(w8, [["__scopeId", "data-v-dd7c621b"]]), _8 = /* @__PURE__ */ Se({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = U(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), L(Et, null, ss({
      content: g(() => [
        e.commits.length === 0 ? (n(), L(us, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), L(_u, { key: 1 }, {
          default: g(() => [
            (n(!0), i(j, null, be(e.commits, (r) => (n(), L(ku, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => a.$emit("select", r)
            }, {
              actions: g(() => [
                k(xe, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => a.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: g(() => [...l[0] || (l[0] = [
                    t("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
          k(Tt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), k8 = /* @__PURE__ */ Ie(_8, [["__scopeId", "data-v-fa4bf3a1"]]), b8 = { class: "branch-create-form" }, $8 = { class: "form-actions" }, C8 = /* @__PURE__ */ Se({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = b(""), l = U(() => {
      const c = a.value.trim();
      return c.length > 0 && !c.startsWith("-") && !c.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(c);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function u() {
      a.value = "", o("cancel");
    }
    return (c, d) => (n(), i("div", b8, [
      k($s, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      t("div", $8, [
        k(xe, {
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
        k(xe, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: g(() => [...d[2] || (d[2] = [
            $(" Cancel ", -1)
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
}, M8 = /* @__PURE__ */ Se({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Le(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", S8, m(e.isCurrent ? "●" : "○"), 1),
      t("span", I8, m(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", E8, [
        tt(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", T8, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), P8 = /* @__PURE__ */ Ie(M8, [["__scopeId", "data-v-c6581a24"]]), R8 = { class: "header-info" }, N8 = { class: "branch-name" }, L8 = {
  key: 0,
  class: "current-badge"
}, D8 = { class: "branch-meta" }, O8 = { key: 0 }, U8 = {
  key: 0,
  class: "meta-note"
}, A8 = {
  key: 0,
  class: "loading"
}, z8 = {
  key: 1,
  class: "empty-state"
}, V8 = /* @__PURE__ */ Se({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ct(), a = b([]), l = b(!1), r = b(!0);
    return ot(async () => {
      try {
        const u = await o(s.branchName, 50);
        a.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (n(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (d) => u.$emit("close"))
    }, {
      header: g(() => [
        t("div", R8, [
          c[4] || (c[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", N8, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", L8, "CURRENT")) : h("", !0)
        ]),
        k(Me, {
          variant: "ghost",
          size: "sm",
          onClick: c[0] || (c[0] = (d) => u.$emit("close"))
        }, {
          default: g(() => [...c[5] || (c[5] = [
            t("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ]),
      body: g(() => [
        t("div", D8, [
          r.value ? (n(), i("span", O8, "Loading...")) : (n(), i(j, { key: 1 }, [
            t("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", U8, "(showing first " + m(a.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", A8, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", z8, " No commits found on this branch ")) : (n(), L(_u, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(j, null, be(a.value, (d) => (n(), L(ku, {
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
        e.isCurrent ? h("", !0) : (n(), L(xe, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: c[1] || (c[1] = (d) => u.$emit("delete", e.branchName))
        }, {
          default: g(() => [...c[6] || (c[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        c[8] || (c[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (n(), L(Me, {
          key: 1,
          variant: "primary",
          onClick: c[2] || (c[2] = (d) => u.$emit("switch", e.branchName))
        }, {
          default: g(() => [...c[7] || (c[7] = [
            $(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), F8 = /* @__PURE__ */ Ie(V8, [["__scopeId", "data-v-2e5437cc"]]), B8 = {
  key: 2,
  class: "branch-list"
}, W8 = /* @__PURE__ */ Se({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1), l = b(null);
    function r(f) {
      o("create", f), u();
    }
    function u() {
      a.value = !1;
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
    return (f, p) => (n(), L(Et, null, ss({
      content: g(() => [
        a.value ? (n(), L(x8, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : h("", !0),
        e.branches.length === 0 ? (n(), L(us, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", B8, [
          (n(!0), i(j, null, be(e.branches, (w) => (n(), L(P8, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (y) => c(w)
          }, {
            actions: g(() => [
              w.is_current ? h("", !0) : (n(), L(xe, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: st((y) => o("switch", w.name), ["stop"])
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
        l.value ? (n(), L(F8, {
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
          k(Tt, { title: "BRANCHES" }, {
            actions: g(() => [
              a.value ? h("", !0) : (n(), L(xe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => a.value = !0)
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
}), G8 = /* @__PURE__ */ Ie(W8, [["__scopeId", "data-v-a3de96cc"]]);
function bu(e) {
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
}, Y8 = /* @__PURE__ */ Se({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = b(!1), a = U(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const r = s.url.slice(0, Math.floor(s.maxLength * 0.6)), u = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${r}...${u}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(s.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, u) => (n(), i("div", j8, [
      t("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, H8),
      t("button", {
        class: Le(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", J8, [...u[1] || (u[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", K8, [...u[0] || (u[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, q8)
    ]));
  }
}), Q8 = /* @__PURE__ */ Ie(Y8, [["__scopeId", "data-v-7768a58d"]]), X8 = { class: "remote-title" }, Z8 = {
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
}, l5 = /* @__PURE__ */ Se({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = U(() => s.fetchingRemote === s.remote.name), a = U(() => s.remote.is_default), l = U(() => s.syncStatus && s.syncStatus.behind > 0), r = U(() => s.syncStatus && s.syncStatus.ahead > 0), u = U(() => s.remote.push_url !== s.remote.fetch_url), c = U(() => {
      const v = s.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (n(), L(At, {
      status: a.value ? "synced" : void 0
    }, ss({
      icon: g(() => [
        $(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", X8, [
          t("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", Z8, "DEFAULT")) : h("", !0),
          e.syncStatus ? (n(), i("span", e5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", t5, "↑" + m(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", s5, "↓" + m(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (n(), i("span", o5, "✓ synced"))
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
          onClick: f[0] || (f[0] = st(() => {
          }, ["stop"]))
        }, m(d.value), 9, n5)) : (n(), i("span", a5, m(d.value), 1))
      ]),
      actions: g(() => [
        k(xe, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...f[6] || (f[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(xe, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            $(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(xe, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            $(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(xe, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...f[7] || (f[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? h("", !0) : (n(), L(xe, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...f[8] || (f[8] = [
            $(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), L(wt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              k(Q8, {
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
}), i5 = /* @__PURE__ */ Ie(l5, [["__scopeId", "data-v-8310f3a8"]]), r5 = { class: "remote-form" }, u5 = { class: "form-header" }, c5 = { class: "form-body" }, d5 = {
  key: 0,
  class: "form-error"
}, m5 = { class: "form-actions" }, f5 = /* @__PURE__ */ Se({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = b(!1), u = b(null);
    _t(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const c = U(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!c.value || r.value)) {
        u.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, f) => (n(), i("div", r5, [
      t("div", u5, [
        k(as, null, {
          default: g(() => [
            $(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", c5, [
        k(vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            k(it, {
              modelValue: l.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            k(it, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(vt, { label: "Push URL (optional)" }, {
          default: g(() => [
            k(it, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (n(), i("div", d5, m(u.value), 1)) : h("", !0)
      ]),
      t("div", m5, [
        k(xe, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: r.value,
          onClick: d
        }, {
          default: g(() => [
            $(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(xe, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: g(() => [...f[4] || (f[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), v5 = /* @__PURE__ */ Ie(f5, [["__scopeId", "data-v-56021b18"]]), p5 = { class: "conflict-summary-box" }, g5 = { class: "summary-header" }, h5 = { class: "summary-text" }, y5 = { key: 0 }, w5 = {
  key: 1,
  class: "all-resolved"
}, _5 = { class: "summary-progress" }, k5 = { class: "progress-bar" }, b5 = { class: "progress-text" }, $5 = /* @__PURE__ */ Se({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = U(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", p5, [
      t("div", g5, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", h5, [
          t("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", y5, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", w5, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      t("div", _5, [
        t("div", k5, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", b5, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), C5 = /* @__PURE__ */ Ie($5, [["__scopeId", "data-v-4e9e6cc9"]]), x5 = { class: "modal-header" }, S5 = { class: "modal-title" }, I5 = { class: "modal-body" }, E5 = {
  key: 0,
  class: "error-box"
}, T5 = {
  key: 0,
  class: "error-hint"
}, M5 = {
  key: 1,
  class: "loading-state"
}, P5 = { class: "commit-summary" }, R5 = {
  key: 0,
  class: "commits-section"
}, N5 = { class: "commit-list" }, L5 = { class: "commit-hash" }, D5 = { class: "commit-message" }, O5 = { class: "commit-date" }, U5 = {
  key: 1,
  class: "changes-section"
}, A5 = {
  key: 0,
  class: "change-group",
  open: ""
}, z5 = { class: "change-count" }, V5 = { class: "change-list" }, F5 = {
  key: 0,
  class: "conflict-badge"
}, B5 = {
  key: 1,
  class: "change-group"
}, W5 = { class: "change-count" }, G5 = { class: "change-list" }, j5 = {
  key: 2,
  class: "change-group"
}, H5 = { class: "change-count" }, q5 = { class: "change-list" }, K5 = {
  key: 3,
  class: "strategy-section"
}, J5 = { class: "radio-group" }, Y5 = { class: "radio-option" }, Q5 = { class: "radio-option" }, X5 = { class: "radio-option" }, Z5 = {
  key: 4,
  class: "up-to-date"
}, e4 = { class: "modal-actions" }, Ii = "comfygit.pullModelStrategy", t4 = /* @__PURE__ */ Se({
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(localStorage.getItem(Ii) || "skip");
    _t(l, (C) => {
      localStorage.setItem(Ii, C);
    });
    const r = U(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), c = U(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = U(() => {
      var C;
      return u.value > 0 || c.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), v = U(() => o.preview && bu(o.preview) ? o.preview : null), f = U(() => {
      var C;
      return ((C = v.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = U(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = U(
      () => f.value > 0 && p.value === f.value
    ), y = U(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(C) {
      if (!v.value) return !1;
      const S = C.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((A) => A.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var A, I;
      return n(), L(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (E) => C.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = st(() => {
            }, ["stop"]))
          }, [
            t("div", x5, [
              t("h3", S5, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (E) => C.$emit("close"))
              }, "✕")
            ]),
            t("div", I5, [
              e.error ? (n(), i("div", E5, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", T5, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (n(), i("div", M5, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (A = e.preview) != null && A.has_uncommitted_changes ? (n(), i(j, { key: 2 }, [
                S[15] || (S[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                S[16] || (S[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (n(), i(j, { key: 3 }, [
                t("div", P5, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", R5, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", N5, [
                    (n(!0), i(j, null, be(e.preview.commits, (E) => (n(), i("div", {
                      key: E.hash,
                      class: "commit-item"
                    }, [
                      t("span", L5, m(E.short_hash || E.hash.slice(0, 7)), 1),
                      t("span", D5, m(E.message), 1),
                      t("span", O5, m(E.date_relative || E.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (n(), i("div", U5, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (n(), i("details", A5, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", z5, m(u.value) + " changes", 1)
                    ]),
                    t("div", V5, [
                      (n(!0), i(j, null, be(e.preview.changes.workflows.added, (E) => (n(), i("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128)),
                      (n(!0), i(j, null, be(e.preview.changes.workflows.modified, (E) => (n(), i("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + m(E) + " ", 1),
                        _(E) ? (n(), i("span", F5, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (n(!0), i(j, null, be(e.preview.changes.workflows.deleted, (E) => (n(), i("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + m(E), 1))), 128))
                    ])
                  ])) : h("", !0),
                  c.value > 0 ? (n(), i("details", B5, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", W5, m(c.value) + " to install", 1)
                    ]),
                    t("div", G5, [
                      (n(!0), i(j, null, be(e.preview.changes.nodes.to_install, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", j5, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", H5, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", q5, [
                      (n(!0), i(j, null, be(e.preview.changes.models.referenced, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item"
                      }, m(E), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                v.value ? (n(), L(C5, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", K5, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", J5, [
                    t("label", Y5, [
                      xt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [Un, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", Q5, [
                      xt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [Un, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", X5, [
                      xt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Un, l.value]
                      ]),
                      S[25] || (S[25] = t("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", Z5, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            t("div", e4, [
              k(xe, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (E) => C.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(j, { key: 0 }, [
                k(xe, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (E) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(xe, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (E) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (n(), L(xe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (E) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(j, { key: 2 }, [
                v.value && !w.value ? (n(), L(xe, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (E) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    $(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), L(xe, {
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
}), s4 = /* @__PURE__ */ Ie(t4, [["__scopeId", "data-v-1d633bba"]]), o4 = { class: "modal-header" }, n4 = { class: "modal-title" }, a4 = { class: "modal-body" }, l4 = {
  key: 0,
  class: "error-box"
}, i4 = {
  key: 1,
  class: "loading-state"
}, r4 = {
  key: 2,
  class: "warning-box"
}, u4 = {
  key: 0,
  class: "commits-section"
}, c4 = { class: "commit-list" }, d4 = { class: "commit-hash" }, m4 = { class: "commit-message" }, f4 = { class: "commit-date" }, v4 = { class: "force-option" }, p4 = { class: "checkbox-option" }, g4 = { class: "commit-summary" }, h4 = { key: 0 }, y4 = { key: 1 }, w4 = {
  key: 0,
  class: "info-box"
}, _4 = {
  key: 1,
  class: "commits-section"
}, k4 = { class: "commit-list" }, b4 = { class: "commit-hash" }, $4 = { class: "commit-message" }, C4 = { class: "commit-date" }, x4 = {
  key: 2,
  class: "up-to-date"
}, S4 = { class: "modal-actions" }, I4 = /* @__PURE__ */ Se({
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
  setup(e, { emit: s }) {
    const o = s, a = b(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, u) => {
      var c, d, v;
      return n(), L(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (f) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = st(() => {
            }, ["stop"]))
          }, [
            t("div", o4, [
              t("h3", n4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (f) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", a4, [
              e.error ? (n(), i("div", l4, [
                u[9] || (u[9] = t("span", { class: "error-icon" }, "!", -1)),
                t("div", null, [
                  u[8] || (u[8] = t("strong", null, "Push failed", -1)),
                  t("p", null, m(e.error), 1)
                ])
              ])) : h("", !0),
              e.loading ? (n(), i("div", i4, [...u[10] || (u[10] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (c = e.preview) != null && c.has_uncommitted_changes ? (n(), i("div", r4, [...u[11] || (u[11] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (n(), i(j, { key: 3 }, [
                u[15] || (u[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", u4, [
                  u[12] || (u[12] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", c4, [
                    (n(!0), i(j, null, be(e.preview.commits, (f) => (n(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", d4, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", m4, m(f.message), 1),
                      t("span", f4, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                t("div", v4, [
                  t("label", p4, [
                    xt(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (f) => a.value = f)
                    }, null, 512), [
                      [Jn, a.value]
                    ]),
                    u[13] || (u[13] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[14] || (u[14] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(j, { key: 4 }, [
                t("div", g4, [
                  u[16] || (u[16] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", h4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", y4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", w4, [...u[17] || (u[17] = [
                  t("svg", {
                    class: "info-icon",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("circle", {
                      cx: "8",
                      cy: "8",
                      r: "7",
                      stroke: "currentColor",
                      "stroke-width": "1.5",
                      fill: "none"
                    }),
                    t("text", {
                      x: "8",
                      y: "11",
                      "text-anchor": "middle",
                      "font-size": "10",
                      "font-weight": "bold",
                      fill: "currentColor"
                    }, "i")
                  ], -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : h("", !0),
                e.preview.commits_ahead > 0 ? (n(), i("div", _4, [
                  u[18] || (u[18] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", k4, [
                    (n(!0), i(j, null, be(e.preview.commits, (f) => (n(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", b4, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", $4, m(f.message), 1),
                      t("span", C4, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", x4, [
                  u[19] || (u[19] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            t("div", S4, [
              k(xe, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (f) => r.$emit("close"))
              }, {
                default: g(() => [...u[20] || (u[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = e.preview) != null && v.remote_has_new_commits ? (n(), i(j, { key: 0 }, [
                k(xe, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (f) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...u[21] || (u[21] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(xe, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: u[4] || (u[4] = (f) => l(!0))
                }, {
                  default: g(() => [...u[22] || (u[22] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), L(xe, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: u[5] || (u[5] = (f) => l(!1))
              }, {
                default: g(() => [...u[23] || (u[23] = [
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
}), E4 = /* @__PURE__ */ Ie(I4, [["__scopeId", "data-v-621a386e"]]), T4 = { class: "resolution-choice-group" }, M4 = ["disabled"], P4 = ["disabled"], R4 = /* @__PURE__ */ Se({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", T4, [
      t("button", {
        class: Le(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, M4),
      t("button", {
        class: Le(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, P4)
    ]));
  }
}), N4 = /* @__PURE__ */ Ie(R4, [["__scopeId", "data-v-985715ed"]]), L4 = { class: "conflict-header" }, D4 = { class: "conflict-info" }, O4 = { class: "workflow-name" }, U4 = { class: "conflict-description" }, A4 = {
  key: 0,
  class: "resolved-badge"
}, z4 = { class: "resolved-text" }, V4 = { class: "conflict-hashes" }, F4 = { class: "hash-item" }, B4 = { class: "hash-item" }, W4 = { class: "conflict-actions" }, G4 = /* @__PURE__ */ Se({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(o.resolution);
    _t(() => o.resolution, (d) => {
      l.value = d;
    }), _t(l, (d) => {
      d && a("resolve", d);
    });
    const r = U(() => l.value !== null), u = U(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), c = U(() => {
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
        class: Le(["conflict-item", { resolved: r.value }])
      }, [
        t("div", L4, [
          v[2] || (v[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", D4, [
            t("code", O4, m(e.conflict.name) + ".json", 1),
            t("div", U4, m(u.value), 1)
          ]),
          r.value ? (n(), i("div", A4, [
            v[1] || (v[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", z4, m(c.value), 1)
          ])) : h("", !0)
        ]),
        t("div", V4, [
          t("span", F4, [
            v[3] || (v[3] = $("Your: ", -1)),
            t("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", B4, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            t("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", W4, [
          k(N4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), j4 = /* @__PURE__ */ Ie(G4, [["__scopeId", "data-v-506d3bbf"]]), H4 = { class: "resolution-content" }, q4 = {
  key: 0,
  class: "error-box"
}, K4 = { class: "resolution-header" }, J4 = { class: "header-stats" }, Y4 = { class: "stat" }, Q4 = { class: "stat-value" }, X4 = { class: "stat resolved" }, Z4 = { class: "stat-value" }, eI = {
  key: 0,
  class: "stat pending"
}, tI = { class: "stat-value" }, sI = { class: "conflicts-list" }, oI = {
  key: 1,
  class: "all-resolved-message"
}, nI = /* @__PURE__ */ Se({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => o.resolutions.size), r = U(() => o.workflowConflicts.length - l.value), u = U(() => l.value === o.workflowConflicts.length), c = U(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const y = o.resolutions.get(w);
      return (y == null ? void 0 : y.resolution) ?? null;
    }
    function v(w, y) {
      a("resolve", w, y);
    }
    function f() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, y) => (n(), L($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: g(() => [
        t("div", H4, [
          e.error ? (n(), i("div", q4, [
            y[1] || (y[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              y[0] || (y[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, m(e.error), 1)
            ])
          ])) : h("", !0),
          t("div", K4, [
            t("div", J4, [
              t("div", Y4, [
                t("span", Q4, m(e.workflowConflicts.length), 1),
                y[2] || (y[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", X4, [
                t("span", Z4, m(l.value), 1),
                y[3] || (y[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", eI, [
                t("span", tI, m(r.value), 1),
                y[4] || (y[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            y[5] || (y[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", sI, [
            (n(!0), i(j, null, be(e.workflowConflicts, (_) => (n(), L(j4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => v(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (n(), i("div", oI, [
            y[6] || (y[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + m(c.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Me, {
          variant: "secondary",
          onClick: f
        }, {
          default: g(() => [...y[7] || (y[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[8] || (y[8] = t("div", { class: "footer-spacer" }, null, -1)),
        k(Me, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            $(m(c.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), aI = /* @__PURE__ */ Ie(nI, [["__scopeId", "data-v-c58d150d"]]), lI = { class: "node-conflict-item" }, iI = { class: "node-header" }, rI = { class: "node-name" }, uI = { class: "node-id" }, cI = { class: "version-comparison" }, dI = { class: "version yours" }, mI = { class: "version theirs" }, fI = { class: "chosen-version" }, vI = { class: "chosen" }, pI = { class: "chosen-reason" }, gI = { class: "affected-workflows" }, hI = { class: "wf-source" }, yI = { class: "wf-version" }, wI = /* @__PURE__ */ Se({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", lI, [
      t("div", iI, [
        t("code", rI, m(e.conflict.node_name), 1),
        t("span", uI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      t("div", cI, [
        t("div", dI, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", mI, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      t("div", fI, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", vI, m(e.conflict.chosen_version), 1),
        t("span", pI, m(e.conflict.chosen_reason), 1)
      ]),
      t("details", gI, [
        t("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(j, null, be(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, m(a.name), 1),
            t("span", hI, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", yI, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), _I = /* @__PURE__ */ Ie(wI, [["__scopeId", "data-v-8b626725"]]), kI = { class: "validation-content" }, bI = {
  key: 0,
  class: "compatible-message"
}, $I = { class: "conflicts-list" }, CI = {
  key: 2,
  class: "warnings-section"
}, xI = /* @__PURE__ */ Se({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (n(), L($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (c) => a("cancel"))
    }, {
      body: g(() => [
        t("div", kI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", bI, [
            u[5] || (u[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              u[4] || (u[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(j, { key: 1 }, [
            u[6] || (u[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", $I, [
              (n(!0), i(j, null, be(e.validation.node_conflicts, (c) => (n(), L(_I, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", CI, [
            u[8] || (u[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(j, null, be(e.validation.warnings, (c, d) => (n(), i("li", { key: d }, m(c), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Me, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => a("cancel"))
        }, {
          default: g(() => [...u[9] || (u[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = t("div", { class: "footer-spacer" }, null, -1)),
        k(Me, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => a("goBack"))
        }, {
          default: g(() => [...u[10] || (u[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(Me, {
          variant: "primary",
          loading: e.executing,
          onClick: u[2] || (u[2] = (c) => a("proceed"))
        }, {
          default: g(() => [
            $(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), SI = /* @__PURE__ */ Ie(xI, [["__scopeId", "data-v-fefd26ed"]]), II = {
  key: 0,
  class: "embedded-toolbar"
}, EI = { class: "embedded-toolbar-search" }, TI = { key: 0 }, MI = /* @__PURE__ */ Se({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: u,
      fetchRemote: c,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: f,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: y
    } = ct(), _ = b([]), x = b(null), C = b({}), S = b(!1), A = b(null), I = b(""), E = b(!1), N = b(null), z = b(!1), q = b("add"), O = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), W = U(() => {
      if (!I.value.trim()) return _.value;
      const J = I.value.toLowerCase();
      return _.value.filter(
        (pe) => pe.name.toLowerCase().includes(J) || pe.fetch_url.toLowerCase().includes(J) || pe.push_url.toLowerCase().includes(J)
      );
    });
    async function te() {
      S.value = !0, A.value = null;
      try {
        const J = await a();
        _.value = J.remotes, x.value = J.current_branch_tracking || null, await Promise.all(
          J.remotes.map(async (pe) => {
            const P = await d(pe.name);
            P && (C.value[pe.name] = P);
          })
        );
      } catch (J) {
        A.value = J instanceof Error ? J.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function se() {
      q.value = "add", O.value = { name: "", fetchUrl: "", pushUrl: "" }, z.value = !0;
    }
    function ce(J) {
      const pe = _.value.find((P) => P.name === J);
      pe && (q.value = "edit", O.value = {
        name: pe.name,
        fetchUrl: pe.fetch_url,
        pushUrl: pe.push_url
      }, z.value = !0);
    }
    async function he(J) {
      try {
        q.value === "add" ? await l(J.name, J.fetchUrl) : await u(J.name, J.fetchUrl, J.pushUrl || void 0), z.value = !1, await te();
      } catch (pe) {
        A.value = pe instanceof Error ? pe.message : "Operation failed";
      }
    }
    function ae() {
      z.value = !1, O.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(J) {
      N.value = J;
      try {
        await c(J);
        const pe = await d(J);
        pe && (C.value[J] = pe), o("toast", `✓ Fetched from ${J}`, "success");
      } catch (pe) {
        o("toast", pe instanceof Error ? pe.message : "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function me(J) {
      if (confirm(`Remove remote "${J}"?`))
        try {
          await r(J), await te();
        } catch (pe) {
          A.value = pe instanceof Error ? pe.message : "Failed to remove remote";
        }
    }
    function Pe() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ie = b("idle"), ge = U(() => ie.value === "pull_preview"), re = U(
      () => ie.value === "resolving" || ie.value === "validating"
    ), Ae = U(
      () => ie.value === "validation_review" || ie.value === "executing"
    ), oe = b(!1), ne = b(null), T = b(!1), V = b(null), H = b(null), M = b(!1), R = b(null), de = b(null), ze = b(/* @__PURE__ */ new Map()), qe = b(null), F = b(null), B = U(() => R.value && bu(R.value) ? R.value : null);
    async function K(J) {
      H.value = J, ie.value = "pull_preview", M.value = !0, R.value = null, de.value = null;
      try {
        R.value = await v(J);
      } catch (pe) {
        de.value = pe instanceof Error ? pe.message : "Failed to load pull preview";
      } finally {
        M.value = !1;
      }
    }
    function _e() {
      ie.value = "idle", R.value = null, de.value = null, H.value = null;
    }
    async function ke(J) {
      if (!H.value) return;
      ie.value = "executing", de.value = null;
      const pe = H.value;
      try {
        const P = await f(pe, J);
        if (P.rolled_back) {
          de.value = `Pull failed and was rolled back: ${P.error || "Unknown error"}`, ie.value = "pull_preview";
          return;
        }
        we(), ie.value = "idle", o("toast", `✓ Pulled from ${pe}`, "success"), await te();
      } catch (P) {
        de.value = P instanceof Error ? P.message : "Pull failed", ie.value = "pull_preview";
      }
    }
    function $e() {
      B.value && (ie.value = "resolving", F.value = null);
    }
    function Te(J, pe) {
      ze.value.set(J, { name: J, resolution: pe });
    }
    function Ne() {
      ie.value = "pull_preview";
    }
    async function Re() {
      ie.value = "validating", F.value = null;
      try {
        const J = Array.from(ze.value.values());
        qe.value = await y(H.value, J), ie.value = "validation_review";
      } catch (J) {
        F.value = J instanceof Error ? J.message : "Validation failed", ie.value = "resolving";
      }
    }
    async function Ee() {
      ie.value = "executing";
      const J = H.value;
      try {
        const pe = Array.from(ze.value.values()), P = await f(J, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: pe
        });
        if (P.rolled_back) {
          de.value = `Pull failed and was rolled back: ${P.error || "Unknown error"}`, ie.value = "pull_preview";
          return;
        }
        we(), ie.value = "idle", o("toast", `✓ Pulled from ${J}`, "success"), await te();
      } catch (pe) {
        de.value = pe instanceof Error ? pe.message : "Pull failed", ie.value = "validation_review";
      }
    }
    function Ge() {
      ie.value = "resolving";
    }
    function Oe() {
      we(), ie.value = "idle";
    }
    function we() {
      ze.value.clear(), qe.value = null, F.value = null, de.value = null, R.value = null, H.value = null;
    }
    async function ee(J) {
      H.value = J, oe.value = !0, M.value = !0, ne.value = null, V.value = null;
      try {
        ne.value = await p(J);
      } catch (pe) {
        V.value = pe instanceof Error ? pe.message : "Failed to load push preview";
      } finally {
        M.value = !1;
      }
    }
    function We() {
      oe.value = !1, ne.value = null, V.value = null, H.value = null;
    }
    async function D(J) {
      var P;
      if (!H.value) return;
      T.value = !0;
      const pe = H.value;
      V.value = null;
      try {
        await w(pe, J), We(), o("toast", `✓ Pushed to ${pe}`, "success"), await te();
      } catch (ue) {
        const Z = ue instanceof Error ? ue.message : "Push failed";
        V.value = Z, ue instanceof Zr && ue.status === 409 && ((P = ue.data) != null && P.needs_force) && ne.value ? ne.value = {
          ...ne.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", Z, "error");
      } finally {
        T.value = !1;
      }
    }
    function X() {
      const J = H.value;
      We(), J && K(J);
    }
    return ot(te), (J, pe) => (n(), i(j, null, [
      k(Et, null, ss({
        content: g(() => [
          S.value ? (n(), L(xs, {
            key: 0,
            message: "Loading remotes..."
          })) : A.value ? (n(), L(Ss, {
            key: 1,
            message: A.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            e.embedded && !z.value ? (n(), i("div", II, [
              t("div", EI, [
                k(fo, {
                  modelValue: I.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (P) => I.value = P),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              k(xe, {
                variant: "primary",
                size: "sm",
                onClick: se
              }, {
                default: g(() => [...pe[5] || (pe[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            z.value ? (n(), L(v5, {
              key: 1,
              mode: q.value,
              "remote-name": O.value.name,
              "fetch-url": O.value.fetchUrl,
              "push-url": O.value.pushUrl,
              onSubmit: he,
              onCancel: ae
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            _.value.length && !z.value ? (n(), L(wn, {
              key: 2,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(_.value.length) + " remote" + m(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", TI, " • Tracking: " + m(x.value.remote) + "/" + m(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            W.value.length && !z.value ? (n(), L(kt, {
              key: 3,
              title: "REMOTES",
              count: W.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, be(W.value, (P) => (n(), L(i5, {
                  key: P.name,
                  remote: P,
                  "sync-status": C.value[P.name],
                  "fetching-remote": N.value,
                  onFetch: Q,
                  onEdit: ce,
                  onRemove: me,
                  onPull: K,
                  onPush: ee
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !W.value.length && !z.value ? (n(), L(us, {
              key: 4,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                k(xe, {
                  variant: "primary",
                  onClick: se
                }, {
                  default: g(() => [...pe[6] || (pe[6] = [
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
            k(Tt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: pe[0] || (pe[0] = (P) => E.value = !0)
            }, {
              actions: g(() => [
                z.value ? h("", !0) : (n(), L(xe, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: se
                }, {
                  default: g(() => [...pe[4] || (pe[4] = [
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
            z.value ? h("", !0) : (n(), L(fo, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": pe[1] || (pe[1] = (P) => I.value = P),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      k(Yt, {
        show: E.value,
        title: "About Git Remotes",
        onClose: pe[3] || (pe[3] = (P) => E.value = !1)
      }, {
        content: g(() => [...pe[7] || (pe[7] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          k(xe, {
            variant: "link",
            onClick: Pe
          }, {
            default: g(() => [...pe[8] || (pe[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(s4, {
        show: ge.value,
        "remote-name": H.value || "",
        preview: R.value,
        loading: M.value,
        pulling: ie.value === "executing",
        error: de.value,
        "conflict-resolutions": ze.value,
        onClose: _e,
        onPull: ke,
        onOpenConflictResolution: $e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(E4, {
        show: oe.value,
        "remote-name": H.value || "",
        preview: ne.value,
        loading: M.value,
        pushing: T.value,
        error: V.value,
        onClose: We,
        onPush: D,
        onPullFirst: X
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      re.value && B.value ? (n(), L(aI, {
        key: 0,
        "workflow-conflicts": B.value.workflow_conflicts,
        resolutions: ze.value,
        "operation-type": "pull",
        validating: ie.value === "validating",
        error: F.value,
        onClose: Ne,
        onResolve: Te,
        onApply: Re
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      Ae.value && qe.value ? (n(), L(SI, {
        key: 1,
        validation: qe.value,
        "operation-type": "pull",
        executing: ie.value === "executing",
        onProceed: Ee,
        onGoBack: Ge,
        onCancel: Oe
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), PI = /* @__PURE__ */ Ie(MI, [["__scopeId", "data-v-e03090a2"]]), RI = /* @__PURE__ */ Se({
  __name: "VersionControlSection",
  props: {
    commits: {},
    currentRef: {},
    branches: {},
    current: {},
    initialTab: {}
  },
  emits: ["select", "checkout", "switch", "create", "delete", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = [
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" },
      { id: "remotes", label: "Remotes" }
    ], r = b(o.initialTab ?? "history");
    return _t(() => o.initialTab, (u) => {
      u && (r.value = u);
    }), (u, c) => (n(), L(Et, null, {
      header: g(() => [
        k(Tt, { title: "VERSION CONTROL" })
      ]),
      search: g(() => [
        k(Ll, {
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: g(() => [
        r.value === "history" ? (n(), L(k8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: c[1] || (c[1] = (d) => a("select", d)),
          onCheckout: c[2] || (c[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), L(G8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: c[3] || (c[3] = (d) => a("switch", d)),
          onCreate: c[4] || (c[4] = (d) => a("create", d)),
          onDelete: c[5] || (c[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), L(PI, {
          key: 2,
          embedded: "",
          onToast: c[6] || (c[6] = (d, v) => a("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
});
async function $u(e) {
  var o;
  if (typeof navigator < "u" && ((o = navigator.clipboard) != null && o.writeText)) {
    await navigator.clipboard.writeText(e);
    return;
  }
  if (typeof document > "u")
    throw new Error("Clipboard unavailable");
  const s = document.createElement("textarea");
  s.value = e, s.setAttribute("readonly", ""), s.style.position = "fixed", s.style.top = "-1000px", s.style.left = "-1000px", s.style.opacity = "0", document.body.appendChild(s);
  try {
    if (s.focus(), s.select(), s.setSelectionRange(0, s.value.length), !document.execCommand("copy"))
      throw new Error("execCommand copy failed");
  } finally {
    s.remove();
  }
}
const NI = { class: "text-viewer-wrapper" }, LI = ["disabled", "title"], DI = { class: "text-content" }, OI = /* @__PURE__ */ Se({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const s = e, o = b(null), a = b("idle");
    async function l() {
      if (s.content)
        try {
          await $u(s.content), a.value = "copied", setTimeout(() => {
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
    return (c, d) => (n(), i("div", NI, [
      t("div", {
        ref_key: "textOutputElement",
        ref: o,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: u
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, LI),
        t("pre", DI, m(e.content), 1)
      ], 544)
    ]));
  }
}), UI = /* @__PURE__ */ Ie(OI, [["__scopeId", "data-v-85a537ba"]]), AI = {
  key: 1,
  class: "manifest-viewer-shell"
}, zI = { class: "manifest-path" }, VI = /* @__PURE__ */ Se({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: s } = ct(), o = b(!1), a = b(null), l = b(!1), r = b({
      path: "",
      exists: !1,
      content: ""
    });
    async function u() {
      o.value = !0, a.value = null;
      try {
        r.value = await s();
      } catch (c) {
        a.value = c instanceof Error ? c.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return ot(u), (c, d) => (n(), i(j, null, [
      k(Et, null, ss({
        content: g(() => [
          o.value ? (n(), L(xs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), L(Ss, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), L(us, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", AI, [
              k(UI, {
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
            k(Tt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: g(() => [
                k(xe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: u,
                  disabled: o.value
                }, {
                  default: g(() => [
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
      k(Yt, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: g(() => [
          d[3] || (d[3] = t("p", null, [
            $(" This view shows the live "),
            t("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            t("strong", null, ".cec"),
            $(" directory. ")
          ], -1)),
          d[4] || (d[4] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          t("div", zI, [
            t("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: g(() => [
          k(xe, {
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
}), FI = /* @__PURE__ */ Ie(VI, [["__scopeId", "data-v-814a8fdd"]]), BI = { class: "log-viewer-wrapper" }, WI = ["disabled", "title"], GI = /* @__PURE__ */ Se({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = b(null), a = b("idle"), l = U(() => s.logs.map((v) => ({
      text: s.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Pt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    ot(r), _t(() => s.logs, r);
    async function u() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await $u(v), a.value = "copied", setTimeout(() => {
          a.value = "idle";
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
    return (v, f) => (n(), i("div", BI, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: c,
        onCopy: d,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: u,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, WI),
        (n(!0), i(j, null, be(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: Le(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Cu = /* @__PURE__ */ Ie(GI, [["__scopeId", "data-v-5aaf1b88"]]), jI = /* @__PURE__ */ Se({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ct(), r = b([]), u = b(!1), c = b(null), d = b(!1), v = b("production"), f = b(null), p = b(!1);
    async function w() {
      u.value = !0, c.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const x = await o();
          v.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        c.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    async function y() {
      try {
        const x = await a();
        x.exists && (f.value = x.path);
      } catch {
      }
    }
    async function _() {
      if (f.value) {
        p.value = !0;
        try {
          await l(f.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return ot(() => {
      w(), y();
    }), (x, C) => (n(), i(j, null, [
      k(Et, null, ss({
        content: g(() => [
          u.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (n(), L(Ss, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length === 0 ? (n(), L(us, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), L(Cu, {
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
            k(Tt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: C[0] || (C[0] = (S) => d.value = !0)
            }, {
              actions: g(() => [
                k(xe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !f.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(xe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: u.value
                }, {
                  default: g(() => [
                    $(m(u.value ? "Loading..." : "Refresh"), 1)
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
      k(Yt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (S) => d.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            C[3] || (C[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, m(v.value), 1),
            C[4] || (C[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            $(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            $(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1))
        ]),
        actions: g(() => [
          k(xe, {
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
}), Ei = /* @__PURE__ */ Se({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ct(), u = e, c = b(u.initialTab ?? "workspace"), d = b([]), v = b(!1), f = b(null), p = b(!1), w = b(null), y = b(null), _ = b(!1), x = U(() => c.value === "workspace" ? w.value : y.value);
    async function C() {
      v.value = !0, f.value = null;
      try {
        c.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await a(void 0, 500);
      } catch (I) {
        f.value = I instanceof Error ? I.message : `Failed to load ${c.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [I, E] = await Promise.all([
          o(),
          l()
        ]);
        I.exists && (w.value = I.path), E.exists && (y.value = E.path);
      } catch {
      }
    }
    async function A() {
      if (x.value) {
        _.value = !0;
        try {
          await r(x.value);
        } catch (I) {
          console.error("Failed to open log file:", I);
        } finally {
          _.value = !1;
        }
      }
    }
    return _t(c, () => {
      C();
    }), _t(() => u.initialTab, (I) => {
      I && (c.value = I);
    }), ot(() => {
      C(), S();
    }), (I, E) => (n(), i(j, null, [
      k(Et, null, ss({
        content: g(() => [
          v.value ? (n(), L(xs, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), L(Ss, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            d.value.length === 0 ? (n(), L(us, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), L(Cu, {
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
            k(Tt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: E[0] || (E[0] = (N) => p.value = !0)
            }, {
              actions: g(() => [
                k(xe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: A,
                  disabled: !x.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(xe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C,
                  disabled: v.value
                }, {
                  default: g(() => [
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
          fn: g(() => [
            k(Ll, {
              modelValue: c.value,
              "onUpdate:modelValue": E[1] || (E[1] = (N) => c.value = N),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      k(Yt, {
        show: p.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (N) => p.value = !1)
      }, {
        content: g(() => [...E[4] || (E[4] = [
          t("p", null, [
            t("strong", null, "Workspace Logs:"),
            $(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Orchestrator Logs:"),
            $(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            $(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            $(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: g(() => [
          k(xe, {
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
}), HI = /* @__PURE__ */ Se({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const s = e, o = [
      { id: "manifest", label: "Manifest" },
      { id: "env", label: "Env Logs" },
      { id: "workspace", label: "Workspace Logs" },
      { id: "orchestrator", label: "Orchestrator Logs" }
    ], a = b(s.initialTab ?? "manifest"), l = b(!1);
    return _t(() => s.initialTab, (r) => {
      r && (a.value = r);
    }), (r, u) => (n(), i(j, null, [
      k(Et, null, {
        header: g(() => [
          k(Tt, {
            title: "DIAGNOSTICS",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (c) => l.value = !0)
          })
        ]),
        search: g(() => [
          k(Ll, {
            modelValue: a.value,
            "onUpdate:modelValue": u[1] || (u[1] = (c) => a.value = c),
            tabs: o
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          a.value === "manifest" ? (n(), L(FI, {
            key: 0,
            embedded: ""
          })) : a.value === "env" ? (n(), L(jI, {
            key: 1,
            embedded: ""
          })) : a.value === "workspace" ? (n(), L(Ei, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), L(Ei, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 1
      }),
      k(Yt, {
        show: l.value,
        title: "About Diagnostics",
        "max-width": "520px",
        onClose: u[3] || (u[3] = (c) => l.value = !1)
      }, {
        content: g(() => [...u[4] || (u[4] = [
          t("p", null, [
            t("strong", null, "Diagnostics"),
            $(" groups read-only inspection and log surfaces for the current environment and workspace. ")
          ], -1),
          t("p", null, " Use this area when you need to inspect what ComfyGit is tracking or debug environment and supervisor behavior without leaving the panel. ", -1),
          t("p", null, [
            t("strong", null, "Manifest"),
            t("br"),
            $(" Shows the live "),
            t("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            t("strong", null, ".cec"),
            $(" directory. This is useful for inspecting tracked workflow, model, node, and contract state. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Env Logs"),
            t("br"),
            $(" Shows logs for the currently active environment. Use these when debugging workflow execution, model resolution, node installation, or other environment-local issues. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Workspace Logs"),
            t("br"),
            $(" Shows workspace-wide events that affect more than one environment. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Orchestrator Logs"),
            t("br"),
            $(" Shows supervisor and handoff logs for environment creation, switching, restarts, and other process-management behavior. ")
          ], -1)
        ])]),
        actions: g(() => [
          k(xe, {
            variant: "primary",
            size: "sm",
            onClick: u[2] || (u[2] = (c) => l.value = !1)
          }, {
            default: g(() => [...u[5] || (u[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), qI = { class: "header-info" }, KI = { class: "commit-hash" }, JI = {
  key: 0,
  class: "commit-refs"
}, YI = { class: "commit-message" }, QI = { class: "commit-date" }, XI = {
  key: 0,
  class: "loading"
}, ZI = {
  key: 1,
  class: "changes-section"
}, e6 = { class: "stats-row" }, t6 = { class: "stat" }, s6 = { class: "stat insertions" }, o6 = { class: "stat deletions" }, n6 = {
  key: 0,
  class: "change-group"
}, a6 = {
  key: 1,
  class: "change-group"
}, l6 = {
  key: 0,
  class: "version"
}, i6 = {
  key: 2,
  class: "change-group"
}, r6 = { class: "change-item" }, u6 = /* @__PURE__ */ Se({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ct(), a = b(null), l = b(!0), r = U(() => {
      if (!a.value) return !1;
      const c = a.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = U(() => {
      if (!a.value) return !1;
      const c = a.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return ot(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (c, d) => (n(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => c.$emit("close"))
    }, {
      header: g(() => {
        var v, f, p, w;
        return [
          t("div", qI, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", KI, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", JI, [
              (n(!0), i(j, null, be(a.value.refs, (y) => (n(), i("span", {
                key: y,
                class: "ref-badge"
              }, m(y), 1))), 128))
            ])) : h("", !0)
          ]),
          k(Me, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (y) => c.$emit("close"))
          }, {
            default: g(() => [...d[5] || (d[5] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: g(() => {
        var v, f;
        return [
          t("div", YI, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          t("div", QI, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", XI, "Loading details...")) : a.value ? (n(), i("div", ZI, [
            t("div", e6, [
              t("span", t6, m(a.value.stats.files_changed) + " files", 1),
              t("span", s6, "+" + m(a.value.stats.insertions), 1),
              t("span", o6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", n6, [
              k(Os, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, be(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, be(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, be(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p), 1)
              ]))), 128))
            ])) : h("", !0),
            u.value ? (n(), i("div", a6, [
              k(Os, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, be(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p.name), 1),
                p.version ? (n(), i("span", l6, "(" + m(p.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (n(!0), i(j, null, be(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p.name), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", i6, [
              k(Os, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", r6, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: g(() => [
        k(Me, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => c.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(Me, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => c.$emit("checkout", e.commit))
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
}), c6 = /* @__PURE__ */ Ie(u6, [["__scopeId", "data-v-d256ff6d"]]), d6 = { class: "popover-header" }, m6 = { class: "popover-body" }, f6 = {
  key: 0,
  class: "changes-summary"
}, v6 = {
  key: 0,
  class: "change-item"
}, p6 = {
  key: 1,
  class: "change-item"
}, g6 = {
  key: 2,
  class: "change-item"
}, h6 = {
  key: 3,
  class: "change-item"
}, y6 = {
  key: 4,
  class: "change-item"
}, w6 = {
  key: 5,
  class: "change-item"
}, _6 = {
  key: 1,
  class: "no-changes"
}, k6 = {
  key: 2,
  class: "loading"
}, b6 = {
  key: 3,
  class: "issues-error"
}, $6 = { class: "error-header" }, C6 = { class: "error-title" }, x6 = { class: "issues-list" }, S6 = { class: "workflow-state" }, I6 = { class: "message-section" }, E6 = { class: "popover-footer" }, T6 = {
  key: 1,
  class: "commit-popover"
}, M6 = { class: "popover-header" }, P6 = { class: "popover-body" }, R6 = {
  key: 0,
  class: "changes-summary"
}, N6 = {
  key: 0,
  class: "change-item"
}, L6 = {
  key: 1,
  class: "change-item"
}, D6 = {
  key: 2,
  class: "change-item"
}, O6 = {
  key: 3,
  class: "change-item"
}, U6 = {
  key: 4,
  class: "change-item"
}, A6 = {
  key: 5,
  class: "change-item"
}, z6 = {
  key: 1,
  class: "no-changes"
}, V6 = {
  key: 2,
  class: "loading"
}, F6 = {
  key: 3,
  class: "issues-error"
}, B6 = { class: "error-header" }, W6 = { class: "error-title" }, G6 = { class: "issues-list" }, j6 = { class: "workflow-state" }, H6 = { class: "message-section" }, q6 = { class: "popover-footer" }, K6 = /* @__PURE__ */ Se({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ct(), r = b(""), u = b(!1), c = b(!1), d = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), f = U(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = U(() => f.value.length > 0), w = U(() => p.value && !c.value);
    async function y() {
      var _, x, C, S;
      if (!(p.value && !c.value) && !(!d.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const A = await l(r.value.trim(), c.value);
          if (A.status === "success") {
            const I = `Committed: ${((_ = A.summary) == null ? void 0 : _.new) || 0} new, ${((x = A.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = A.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            a("committed", { success: !0, message: I });
          } else if (A.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (A.status === "blocked") {
            const I = ((S = A.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: A.message || "Commit failed" });
        } catch (A) {
          a("committed", { success: !1, message: A instanceof Error ? A.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (_, x) => e.asModal ? (n(), L(Ot, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = st(() => {
          }, ["stop"]))
        }, [
          t("div", d6, [
            x[11] || (x[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (C) => a("close"))
            }, [...x[10] || (x[10] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          t("div", m6, [
            e.status && d.value ? (n(), i("div", f6, [
              e.status.workflows.new.length ? (n(), i("div", v6, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (n(), i("div", p6, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", g6, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", h6, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", y6, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              v.value ? h("", !0) : (n(), i("div", w6, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", _6, " No changes to commit ")) : (n(), i("div", k6, " Loading... ")),
            p.value ? (n(), i("div", b6, [
              t("div", $6, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", C6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", x6, [
                (n(!0), i(j, null, be(f.value, (C) => (n(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  t("strong", null, m(C.name), 1),
                  t("span", S6, "(" + m(C.sync_state) + ")", 1),
                  $(": " + m(C.issue_summary), 1)
                ]))), 128))
              ]),
              k(Xn, {
                modelValue: c.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => c.value = C),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            t("div", I6, [
              k(Ys, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: y,
                onSubmit: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", E6, [
            k(Me, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => a("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Me, {
              variant: c.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || u.value || w.value,
              loading: u.value,
              onClick: y
            }, {
              default: g(() => [
                $(m(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", T6, [
      t("div", M6, [
        x[22] || (x[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (C) => a("close"))
        }, [...x[21] || (x[21] = [
          t("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      t("div", P6, [
        e.status && d.value ? (n(), i("div", R6, [
          e.status.workflows.new.length ? (n(), i("div", N6, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (n(), i("div", L6, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", D6, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", O6, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", U6, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          v.value ? h("", !0) : (n(), i("div", A6, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", z6, " No changes to commit ")) : (n(), i("div", V6, " Loading... ")),
        p.value ? (n(), i("div", F6, [
          t("div", B6, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", W6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", G6, [
            (n(!0), i(j, null, be(f.value, (C) => (n(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              t("strong", null, m(C.name), 1),
              t("span", j6, "(" + m(C.sync_state) + ")", 1),
              $(": " + m(C.issue_summary), 1)
            ]))), 128))
          ]),
          k(Xn, {
            modelValue: c.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => c.value = C),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        t("div", H6, [
          k(Ys, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: y,
            onSubmit: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", q6, [
        k(Me, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => a("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(Me, {
          variant: c.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || u.value || w.value,
          loading: u.value,
          onClick: y
        }, {
          default: g(() => [
            $(m(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), xu = /* @__PURE__ */ Ie(K6, [["__scopeId", "data-v-5f897631"]]), J6 = { class: "modal-header" }, Y6 = { class: "modal-body" }, Q6 = { class: "switch-message" }, X6 = { class: "switch-details" }, Z6 = { class: "modal-actions" }, eE = /* @__PURE__ */ Se({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), L(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = st(() => {
          }, ["stop"]))
        }, [
          t("div", J6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Y6, [
            t("p", Q6, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              t("strong", null, m(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              t("strong", null, m(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", X6, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", Z6, [
            k(xe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(xe, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
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
}), tE = /* @__PURE__ */ Ie(eE, [["__scopeId", "data-v-e9c5253e"]]), sE = {
  key: 0,
  class: "modal-overlay"
}, oE = { class: "modal-content" }, nE = { class: "modal-body" }, aE = { class: "progress-info" }, lE = { class: "progress-percentage" }, iE = { class: "progress-state" }, rE = { class: "switch-steps" }, uE = { class: "step-icon" }, cE = { class: "step-label" }, dE = /* @__PURE__ */ Se({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = U(() => {
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
      return s.message || r[s.state] || s.state;
    }), a = U(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = U(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = r.findIndex((c) => c.state === s.state);
      return r.map((c, d) => {
        let v = "pending", f = "○";
        return d < u ? (v = "completed", f = "✓") : d === u && (v = "active", f = "⟳"), {
          ...c,
          status: v,
          icon: f
        };
      });
    });
    return (r, u) => (n(), L(Ot, { to: "body" }, [
      e.show ? (n(), i("div", sE, [
        t("div", oE, [
          u[1] || (u[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", nE, [
            k(cu, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", aE, [
              t("div", lE, m(e.progress) + "%", 1),
              t("div", iE, m(o.value), 1)
            ]),
            t("div", rE, [
              (n(!0), i(j, null, be(l.value, (c) => (n(), i("div", {
                key: c.state,
                class: Le(["switch-step", c.status])
              }, [
                t("span", uE, m(c.icon), 1),
                t("span", cE, m(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), mE = /* @__PURE__ */ Ie(dE, [["__scopeId", "data-v-768a5078"]]), fE = { class: "modal-header" }, vE = { class: "modal-body" }, pE = {
  key: 0,
  class: "node-section"
}, gE = { class: "node-list" }, hE = {
  key: 1,
  class: "node-section"
}, yE = { class: "node-list" }, wE = { class: "modal-actions" }, _E = /* @__PURE__ */ Se({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), L(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = st(() => {
          }, ["stop"]))
        }, [
          t("div", fE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", vE, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", pE, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", gE, [
                (n(!0), i(j, null, be(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", hE, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", yE, [
                (n(!0), i(j, null, be(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : h("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", wE, [
            k(xe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(xe, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
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
}), kE = /* @__PURE__ */ Ie(_E, [["__scopeId", "data-v-7cad7518"]]), bE = [
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
], Mn = "v0.0.24", $E = "Akatz", CE = { class: "social-buttons" }, xE = ["title", "aria-label", "onClick"], SE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, IE = ["d"], EE = ["title", "aria-label", "onClick"], TE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ME = ["d"], PE = /* @__PURE__ */ Se({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", CE, [
      (n(!0), i(j, null, be(Ye(bE), (l) => (n(), i(j, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          $(m(l.label) + " ", 1),
          (n(), i("svg", SE, [
            t("path", {
              d: l.iconPath
            }, null, 8, IE)
          ]))
        ], 8, xE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", TE, [
            t("path", {
              d: l.iconPath
            }, null, 8, ME)
          ]))
        ], 8, EE))
      ], 64))), 128))
    ]));
  }
}), Su = /* @__PURE__ */ Ie(PE, [["__scopeId", "data-v-4f846342"]]), RE = { class: "footer-info" }, NE = ["title"], LE = {
  key: 0,
  class: "dev-badge"
}, DE = { class: "made-by" }, OE = /* @__PURE__ */ Se({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = ct(), o = b(null), a = b(null), l = b(null), r = U(() => o.value === "development"), u = U(() => {
      var d;
      if (!r.value) return Mn;
      const c = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${Mn} (${c})` : `${Mn} (development)`;
    });
    return ot(async () => {
      try {
        const c = await s();
        o.value = c.manager_source ?? null, a.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, d) => (n(), i("div", RE, [
      t("span", {
        class: "version",
        title: u.value
      }, [
        $(m(Ye(Mn)) + " ", 1),
        r.value ? (n(), i("span", LE, "dev")) : h("", !0)
      ], 8, NE),
      t("span", DE, [
        d[0] || (d[0] = $(" made with ", -1)),
        d[1] || (d[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + m(Ye($E)), 1)
      ])
    ]));
  }
}), Iu = /* @__PURE__ */ Ie(OE, [["__scopeId", "data-v-4fa265b3"]]), UE = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = b(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, u) => (n(), L($t, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (c) => r.$emit("close"))
    }, {
      body: g(() => [
        k(lu, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var c;
        return [
          k(Me, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: a
          }, {
            default: g(() => [...u[2] || (u[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Me, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => r.$emit("close"))
          }, {
            default: g(() => [...u[3] || (u[3] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), AE = /* @__PURE__ */ Ie(UE, [["__scopeId", "data-v-fac00ae7"]]), zE = { class: "header-actions" }, VE = {
  key: 0,
  class: "wizard-step"
}, FE = { class: "form-field" }, BE = ["placeholder"], WE = {
  key: 0,
  class: "form-error"
}, GE = { class: "form-field form-field--checkbox" }, jE = { class: "form-checkbox" }, HE = {
  key: 0,
  class: "form-field"
}, qE = ["placeholder"], KE = {
  key: 0,
  class: "form-info"
}, JE = {
  key: 1,
  class: "form-suggestion"
}, YE = {
  key: 2,
  class: "form-error"
}, QE = {
  key: 3,
  class: "form-info"
}, XE = {
  key: 1,
  class: "wizard-step"
}, ZE = {
  key: 0,
  class: "progress-check-loading"
}, eT = {
  key: 0,
  class: "cli-warning"
}, tT = { class: "cli-warning-header" }, sT = {
  key: 1,
  class: "env-landing"
}, oT = { class: "env-list" }, nT = ["value"], aT = { class: "env-name" }, lT = {
  key: 2,
  class: "env-create"
}, iT = { class: "form-field" }, rT = { class: "form-field" }, uT = ["value"], cT = { class: "form-field" }, dT = ["disabled"], mT = ["value"], fT = { class: "form-field" }, vT = ["value"], pT = { class: "form-field form-field--checkbox" }, gT = { class: "form-checkbox" }, hT = {
  key: 0,
  class: "form-error"
}, yT = {
  key: 1,
  class: "env-creating"
}, wT = { class: "creating-intro" }, _T = {
  key: 3,
  class: "env-import"
}, kT = { class: "wizard-footer" }, bT = { class: "wizard-footer-actions" }, yo = 10, $T = 600 * 1e3, Ti = 1800 * 1e3, CT = /* @__PURE__ */ Se({
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
  setup(e, { emit: s }) {
    const o = e, a = s, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: u,
      createEnvironment: c,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = ct(), p = b(o.initialStep || 1), w = b(null), y = b("landing"), _ = b(!1), x = b(!1), C = b(!1), S = b(!1), A = b(null), I = b(o.initialStep === 2), E = b(o.defaultPath), N = b(!!o.detectedModelsDir), z = b(o.detectedModelsDir || ""), q = b(null), O = b(null), W = b(null), te = b(null), se = b("my-new-env"), ce = b(ru), he = b("latest"), ae = b(uu), Q = b(!0), me = b(null), Pe = b(null), ie = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), ge = b(!1), re = b(!1), Ae = b(!1), oe = b({ progress: 0, message: "" }), ne = b({ progress: 0, message: "" }), T = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], V = b(0), H = b(null), M = b(0), R = b(null), de = U(() => {
      var D, X;
      const we = (D = E.value) == null ? void 0 : D.trim(), ee = !q.value, We = !N.value || !O.value && ((X = z.value) == null ? void 0 : X.trim());
      return we && ee && We;
    }), ze = U(() => {
      var we;
      return (we = se.value) == null ? void 0 : we.trim();
    }), qe = U(() => !!(p.value === 2 || Pe.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), F = U(() => Pe.value || o.workspacePath || null);
    async function B() {
      var we;
      if (q.value = null, !!((we = E.value) != null && we.trim()))
        try {
          const ee = await u({ path: E.value, type: "workspace" });
          ee.valid || (q.value = ee.error || "Invalid path");
        } catch (ee) {
          q.value = ee instanceof Error ? ee.message : "Validation failed";
        }
    }
    async function K() {
      var we;
      if (O.value = null, W.value = null, te.value = null, !!((we = z.value) != null && we.trim()))
        try {
          const ee = await u({ path: z.value, type: "models" });
          if (ee.valid)
            te.value = ee.model_count ?? null;
          else if (O.value = ee.error || "Invalid path", ee.suggestion) {
            W.value = ee.suggestion, z.value = ee.suggestion, O.value = null;
            const We = await u({ path: ee.suggestion, type: "models" });
            We.valid && (te.value = We.model_count ?? null);
          }
        } catch (ee) {
          O.value = ee instanceof Error ? ee.message : "Validation failed";
        }
    }
    async function _e() {
      var we, ee, We, D, X;
      if (q.value = null, O.value = null, await B(), (we = q.value) != null && we.includes("already exists")) {
        q.value = null, Pe.value = ((ee = E.value) == null ? void 0 : ee.trim()) || o.defaultPath, p.value = 2, $e();
        return;
      }
      if (!q.value && !(N.value && ((We = z.value) != null && We.trim()) && (await K(), O.value))) {
        re.value = !0;
        try {
          await l({
            workspace_path: ((D = E.value) == null ? void 0 : D.trim()) || o.defaultPath,
            models_directory: N.value && ((X = z.value) == null ? void 0 : X.trim()) || null
          }), V.value = 0, H.value = Date.now();
          const J = setInterval(async () => {
            var pe;
            if (H.value && Date.now() - H.value > $T) {
              clearInterval(J), re.value = !1, q.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const P = await r();
              if (V.value = 0, P.state === "idle" && re.value) {
                clearInterval(J), re.value = !1, q.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              oe.value = { progress: P.progress, message: P.message }, P.state === "complete" ? (clearInterval(J), re.value = !1, Pe.value = ((pe = E.value) == null ? void 0 : pe.trim()) || o.defaultPath, p.value = 2, $e()) : P.state === "error" && (clearInterval(J), re.value = !1, q.value = P.error || "Workspace creation failed");
            } catch (P) {
              V.value++, console.warn(`Polling failure ${V.value}/${yo}:`, P), V.value >= yo && (clearInterval(J), re.value = !1, q.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (J) {
          re.value = !1, q.value = J instanceof Error ? J.message : "Failed to create workspace";
        }
      }
    }
    async function ke() {
      Ae.value = !0, me.value = null;
      try {
        const we = {
          name: se.value.trim() || "my-new-env",
          python_version: ce.value,
          comfyui_version: he.value,
          torch_backend: ae.value,
          switch_after: Q.value,
          workspace_path: Pe.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(we)).status === "started") {
          M.value = 0, R.value = Date.now();
          const We = setInterval(async () => {
            if (R.value && Date.now() - R.value > Ti) {
              clearInterval(We), Ae.value = !1, me.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const D = await d();
              if (M.value = 0, D.state === "idle" && Ae.value) {
                clearInterval(We), Ae.value = !1, me.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ne.value = {
                progress: D.progress ?? 0,
                message: D.message,
                phase: D.phase
              }, D.state === "complete") {
                clearInterval(We), Ae.value = !1;
                const X = D.environment_name || we.name;
                Q.value ? a("complete", X, Pe.value) : (y.value = "landing", a("environment-created-no-switch", X));
              } else D.state === "error" && (clearInterval(We), Ae.value = !1, me.value = D.error || "Environment creation failed");
            } catch (D) {
              M.value++, console.warn(`Polling failure ${M.value}/${yo}:`, D), M.value >= yo && (clearInterval(We), Ae.value = !1, me.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (we) {
        Ae.value = !1, me.value = we instanceof Error ? we.message : "Unknown error";
      }
    }
    async function $e() {
      ge.value = !0;
      try {
        ie.value = await f();
      } catch (we) {
        console.error("Failed to load ComfyUI releases:", we);
      } finally {
        ge.value = !1;
      }
    }
    function Te() {
      w.value && a("switch-environment", w.value, Pe.value);
    }
    function Ne() {
      y.value === "create" || y.value === "import" ? y.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Re(we, ee) {
      x.value = !1, ee ? a("complete", we, Pe.value) : (a("environment-created-no-switch", we), y.value = "landing");
    }
    function Ee() {
    }
    ot(async () => {
      if (o.detectedModelsDir && (z.value = o.detectedModelsDir), o.workspacePath && (Pe.value = o.workspacePath), p.value === 2) {
        $e();
        const we = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Ge(), clearTimeout(we), I.value = !1;
      }
    });
    async function Ge() {
      try {
        const we = await d();
        if (console.log("[ComfyGit] Create progress check:", we.state, we), we.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", we.environment_name), y.value = "create", Ae.value = !0, se.value = we.environment_name || "my-new-env", ne.value = {
            progress: we.progress ?? 0,
            message: we.message,
            phase: we.phase
          }, Oe();
          return;
        }
      } catch (we) {
        console.log("[ComfyGit] Create progress check failed:", we);
      }
      try {
        const we = await v();
        console.log("[ComfyGit] Import progress check:", we.state, we), we.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", we.environment_name), A.value = {
          message: we.message || "Importing...",
          phase: we.phase || "",
          progress: we.progress ?? 0,
          environmentName: we.environment_name || ""
        }, S.value = !0, y.value = "import", x.value = !0);
      } catch (we) {
        console.log("[ComfyGit] Import progress check failed:", we);
      }
    }
    async function Oe() {
      M.value = 0, R.value = Date.now();
      let we = null;
      const ee = async () => {
        if (R.value && Date.now() - R.value > Ti)
          return we && clearInterval(we), Ae.value = !1, me.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const D = await d();
          if (M.value = 0, D.state === "idle" && Ae.value)
            return we && clearInterval(we), Ae.value = !1, me.value = "Environment creation was interrupted. Please try again.", !1;
          if (ne.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase
          }, D.state === "complete") {
            we && clearInterval(we), Ae.value = !1;
            const X = D.environment_name || se.value;
            return a("complete", X, Pe.value), !1;
          } else if (D.state === "error")
            return we && clearInterval(we), Ae.value = !1, me.value = D.error || "Environment creation failed", !1;
          return !0;
        } catch (D) {
          return M.value++, console.warn(`Polling failure ${M.value}/${yo}:`, D), M.value >= yo ? (we && clearInterval(we), Ae.value = !1, me.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await ee() && (we = setInterval(async () => {
        !await ee() && we && clearInterval(we);
      }, 2e3));
    }
    return (we, ee) => (n(), i(j, null, [
      k($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: ee[15] || (ee[15] = (We) => we.$emit("close"))
      }, {
        header: g(() => [
          ee[20] || (ee[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", zE, [
            k(Su),
            ee[19] || (ee[19] = t("span", { class: "header-divider" }, null, -1)),
            qe.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: ee[0] || (ee[0] = (We) => _.value = !0)
            }, [...ee[17] || (ee[17] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                t("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                t("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : h("", !0),
            t("button", {
              class: "icon-btn",
              onClick: ee[1] || (ee[1] = (We) => we.$emit("close")),
              title: "Close"
            }, [...ee[18] || (ee[18] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        body: g(() => {
          var We;
          return [
            p.value === 1 ? (n(), i("div", VE, [
              ee[24] || (ee[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", FE, [
                ee[21] || (ee[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                xt(t("input", {
                  "onUpdate:modelValue": ee[2] || (ee[2] = (D) => E.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, BE), [
                  [So, E.value]
                ]),
                q.value ? (n(), i("p", WE, m(q.value), 1)) : h("", !0)
              ]),
              t("div", GE, [
                t("label", jE, [
                  xt(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": ee[3] || (ee[3] = (D) => N.value = D)
                  }, null, 512), [
                    [Jn, N.value]
                  ]),
                  ee[22] || (ee[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (n(), i("div", HE, [
                ee[23] || (ee[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                xt(t("input", {
                  "onUpdate:modelValue": ee[4] || (ee[4] = (D) => z.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, qE), [
                  [So, z.value]
                ]),
                e.detectedModelsDir && !z.value ? (n(), i("p", KE, " Detected: " + m(e.detectedModelsDir), 1)) : h("", !0),
                W.value ? (n(), i("p", JE, " Did you mean: " + m(W.value), 1)) : h("", !0),
                O.value ? (n(), i("p", YE, m(O.value), 1)) : h("", !0),
                te.value !== null && !O.value ? (n(), i("p", QE, " Found " + m(te.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              re.value ? (n(), L(Qn, {
                key: 1,
                progress: oe.value.progress,
                message: oe.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            p.value === 2 ? (n(), i("div", XE, [
              I.value ? (n(), i("div", ZE, [...ee[25] || (ee[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(j, { key: 1 }, [
                !o.cliInstalled && !C.value ? (n(), i("div", eT, [
                  t("div", tT, [
                    ee[27] || (ee[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    ee[28] || (ee[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: ee[5] || (ee[5] = (D) => C.value = !0),
                      title: "Dismiss"
                    }, [...ee[26] || (ee[26] = [
                      t("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  ee[29] || (ee[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  ee[30] || (ee[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                y.value === "landing" ? (n(), i("div", sT, [
                  ee[34] || (ee[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: ee[6] || (ee[6] = (D) => y.value = "create")
                  }, [...ee[31] || (ee[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: ee[7] || (ee[7] = (D) => {
                      S.value = !1, y.value = "import";
                    })
                  }, [...ee[32] || (ee[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (We = o.existingEnvironments) != null && We.length ? (n(), i(j, { key: 0 }, [
                    ee[33] || (ee[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", oT, [
                      (n(!0), i(j, null, be(o.existingEnvironments, (D) => (n(), i("label", {
                        key: D,
                        class: Le(["env-option", { selected: w.value === D }])
                      }, [
                        xt(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: D,
                          "onUpdate:modelValue": ee[8] || (ee[8] = (X) => w.value = X)
                        }, null, 8, nT), [
                          [Un, w.value]
                        ]),
                        t("span", aT, m(D), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : y.value === "create" ? (n(), i("div", lT, [
                  Ae.value ? (n(), i("div", yT, [
                    t("p", wT, [
                      ee[41] || (ee[41] = $(" Creating environment ", -1)),
                      t("strong", null, m(se.value), 1),
                      ee[42] || (ee[42] = $("... ", -1))
                    ]),
                    k(Qn, {
                      progress: ne.value.progress,
                      message: ne.value.message,
                      "current-phase": ne.value.phase,
                      "show-steps": !0,
                      steps: T
                    }, null, 8, ["progress", "message", "current-phase"]),
                    ee[43] || (ee[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(j, { key: 0 }, [
                    ee[40] || (ee[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", iT, [
                      ee[35] || (ee[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      xt(t("input", {
                        "onUpdate:modelValue": ee[9] || (ee[9] = (D) => se.value = D),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [So, se.value]
                      ])
                    ]),
                    t("div", rT, [
                      ee[36] || (ee[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      xt(t("select", {
                        "onUpdate:modelValue": ee[10] || (ee[10] = (D) => ce.value = D),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, be(Ye(iu), (D) => (n(), i("option", {
                          key: D,
                          value: D
                        }, m(D), 9, uT))), 128))
                      ], 512), [
                        [Io, ce.value]
                      ])
                    ]),
                    t("div", cT, [
                      ee[37] || (ee[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      xt(t("select", {
                        "onUpdate:modelValue": ee[11] || (ee[11] = (D) => he.value = D),
                        class: "form-select",
                        disabled: ge.value
                      }, [
                        (n(!0), i(j, null, be(ie.value, (D) => (n(), i("option", {
                          key: D.tag_name,
                          value: D.tag_name
                        }, m(D.name), 9, mT))), 128))
                      ], 8, dT), [
                        [Io, he.value]
                      ])
                    ]),
                    t("div", fT, [
                      ee[38] || (ee[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      xt(t("select", {
                        "onUpdate:modelValue": ee[12] || (ee[12] = (D) => ae.value = D),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, be(Ye(Rl), (D) => (n(), i("option", {
                          key: D,
                          value: D
                        }, m(D) + m(D === "auto" ? " (detect GPU)" : ""), 9, vT))), 128))
                      ], 512), [
                        [Io, ae.value]
                      ])
                    ]),
                    t("div", pT, [
                      t("label", gT, [
                        xt(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": ee[13] || (ee[13] = (D) => Q.value = D)
                        }, null, 512), [
                          [Jn, Q.value]
                        ]),
                        ee[39] || (ee[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    me.value ? (n(), i("div", hT, m(me.value), 1)) : h("", !0)
                  ], 64))
                ])) : y.value === "import" ? (n(), i("div", _T, [
                  k(vu, {
                    "workspace-path": Pe.value,
                    "resume-import": S.value,
                    "initial-progress": A.value ?? void 0,
                    onImportComplete: Re,
                    onImportStarted: ee[14] || (ee[14] = (D) => x.value = !0),
                    onSourceCleared: Ee
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          t("div", kT, [
            k(Iu),
            t("div", bT, [
              p.value === 1 ? (n(), L(Me, {
                key: 0,
                variant: "primary",
                disabled: !de.value || re.value,
                onClick: _e
              }, {
                default: g(() => [
                  $(m(re.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(j, { key: 1 }, [
                !Ae.value && !x.value && (y.value !== "landing" || o.setupState === "no_workspace" && !Pe.value) ? (n(), L(Me, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ne
                }, {
                  default: g(() => [...ee[44] || (ee[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                y.value === "create" ? (n(), L(Me, {
                  key: 1,
                  variant: "primary",
                  disabled: !ze.value || Ae.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    $(m(Ae.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                y.value === "landing" && w.value ? (n(), L(Me, {
                  key: 2,
                  variant: "primary",
                  onClick: Te
                }, {
                  default: g(() => [
                    $(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (n(), L(AE, {
        key: 0,
        "workspace-path": F.value,
        onClose: ee[16] || (ee[16] = (We) => _.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), xT = /* @__PURE__ */ Ie(CT, [["__scopeId", "data-v-9a9aadc0"]]), ST = { class: "update-banner" }, IT = { class: "update-banner__left" }, ET = { class: "update-banner__title" }, TT = {
  key: 0,
  class: "update-banner__summary"
}, MT = { class: "update-banner__actions" }, PT = ["disabled"], RT = ["disabled"], NT = ["disabled"], LT = /* @__PURE__ */ Se({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", ST, [
      t("div", IT, [
        t("div", ET, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", TT, m(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      t("div", MT, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, PT),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, RT)) : h("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, NT)
      ])
    ]));
  }
}), DT = /* @__PURE__ */ Ie(LT, [["__scopeId", "data-v-49562c5c"]]), Eu = "ComfyGit.UpdateNotice.DismissedVersion";
function OT() {
  try {
    return localStorage.getItem(Eu);
  } catch {
    return null;
  }
}
function UT(e) {
  try {
    localStorage.setItem(Eu, e);
  } catch {
  }
}
function AT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : OT() !== e.latest_version;
}
const zT = { class: "comfygit-panel" }, VT = { class: "panel-header" }, FT = { class: "header-left" }, BT = {
  key: 0,
  class: "header-info"
}, WT = { class: "header-actions" }, GT = { class: "env-switcher" }, jT = { class: "env-switcher-header" }, HT = { class: "env-control-buttons" }, qT = {
  key: 0,
  class: "header-info"
}, KT = { class: "branch-name" }, JT = { class: "panel-main" }, YT = { class: "sidebar" }, QT = { class: "sidebar-content" }, XT = { class: "sidebar-section" }, ZT = { class: "sidebar-section" }, e7 = { class: "sidebar-section" }, t7 = { class: "sidebar-footer" }, s7 = { class: "content-area" }, o7 = {
  key: 0,
  class: "error-message"
}, n7 = {
  key: 1,
  class: "loading"
}, a7 = { class: "dialog-content env-selector-dialog" }, l7 = { class: "dialog-header" }, i7 = { class: "dialog-body" }, r7 = { class: "env-list" }, u7 = { class: "env-info" }, c7 = { class: "env-name-row" }, d7 = { class: "env-indicator" }, m7 = { class: "env-name" }, f7 = {
  key: 0,
  class: "env-branch"
}, v7 = {
  key: 1,
  class: "current-label"
}, p7 = { class: "env-stats" }, g7 = ["onClick"], h7 = { class: "toast-container" }, y7 = { class: "toast-message" }, Mi = "ComfyGit.LastView", Pi = "ComfyGit.LastSection", w7 = /* @__PURE__ */ Se({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getStatus: l,
      getHistory: r,
      getBranches: u,
      checkout: c,
      createBranch: d,
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: y,
      deleteEnvironment: _,
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: A,
      updateManager: I
    } = ct(), E = Hv(), N = b(null), z = b([]), q = b([]), O = b([]), W = U(() => O.value.find((fe) => fe.is_current)), te = b(null), se = b(!1), ce = b(!1), he = b("history"), ae = b("manifest"), Q = b(null), me = b(!1), Pe = b(1), ie = U(() => {
      var fe;
      return ((fe = Q.value) == null ? void 0 : fe.state) || "managed";
    }), ge = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, re = U(() => {
      var fe, le;
      return ((le = (fe = Q.value) == null ? void 0 : fe.runtime_context) == null ? void 0 : le.capabilities) || ge;
    }), Ae = b(!1), oe = b(null), ne = b(null), T = b(!1), V = b(null), H = b(!1), M = b(!1), R = U(() => !H.value && AT(V.value)), de = b(null), ze = b(null), qe = b(null), F = b(!1), B = b(!1), K = b(""), _e = b(null), ke = b({ state: "idle", progress: 0, message: "" });
    let $e = null, Te = null;
    const Ne = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      account: { view: "account", section: "cloud" },
      publish: { view: "publish", section: "cloud" }
    }, Re = o.initialView ? Ne[o.initialView] : null, Ee = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics",
      "account",
      "publish"
    ], Ge = ["this-env", "version-control", "workspace", "cloud", "diagnostics"];
    function Oe() {
      try {
        const fe = sessionStorage.getItem(Mi), le = sessionStorage.getItem(Pi), je = fe === "branches" || fe === "history" || fe === "remotes" ? "version-control" : fe === "manifest" || fe === "debug-env" || fe === "debug-workspace" ? "diagnostics" : fe === "deploy" ? "publish" : fe, Ke = le === "all-envs" ? "workspace" : le === "sharing" ? "cloud" : le;
        if (fe && le && Ee.includes(je) && Ge.includes(Ke))
          return { view: je, section: Ke };
      } catch {
      }
      return null;
    }
    const we = Oe(), ee = b((Re == null ? void 0 : Re.view) ?? (we == null ? void 0 : we.view) ?? "status"), We = b((Re == null ? void 0 : Re.section) ?? (we == null ? void 0 : we.section) ?? "this-env");
    function D(fe, le) {
      ee.value = fe, We.value = le;
      try {
        sessionStorage.setItem(Mi, fe), sessionStorage.setItem(Pi, le);
      } catch {
      }
    }
    function X(fe) {
      const je = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" },
        account: { view: "account", section: "cloud" },
        publish: { view: "publish", section: "cloud" }
      }[fe];
      je && D(je.view, je.section);
    }
    function J(fe) {
      he.value = fe, D("version-control", "version-control");
    }
    function pe(fe) {
      ae.value = fe, D("diagnostics", "diagnostics");
    }
    function P() {
      J("branches");
    }
    function ue() {
      a("close"), setTimeout(() => {
        var le;
        const fe = document.querySelectorAll("button.comfyui-button");
        for (const je of fe)
          if (((le = je.textContent) == null ? void 0 : le.trim()) === "Manager") {
            je.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Z = b(null), Ve = b(!1), Ue = b(!1), Fe = b([]);
    let Qe = 0;
    function De(fe, le = "info", je = 3e3) {
      const Ke = ++Qe;
      return Fe.value.push({ id: Ke, message: fe, type: le }), je > 0 && setTimeout(() => {
        Fe.value = Fe.value.filter((gt) => gt.id !== Ke);
      }, je), Ke;
    }
    function Ze(fe) {
      Fe.value = Fe.value.filter((le) => le.id !== fe);
    }
    function nt(fe, le) {
      De(fe, le);
    }
    async function mt() {
      V.value = null, H.value = !1;
      try {
        V.value = await A();
      } catch {
      }
    }
    function St() {
      var le;
      const fe = (le = V.value) == null ? void 0 : le.release_url;
      if (fe)
        try {
          window.open(fe, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Kt() {
      var le;
      const fe = (le = V.value) == null ? void 0 : le.latest_version;
      fe && UT(fe), H.value = !0;
    }
    async function Rt() {
      var le, je;
      if (M.value) return;
      M.value = !0;
      const fe = De("Updating comfygit-manager...", "info", 0);
      try {
        const Ke = await I();
        if (Ze(fe), Ke.status !== "success") {
          if (De(Ke.message || "Update failed", "error"), Ke.manual_instructions) {
            const gt = Ke.manual_instructions.split(`
`).map((Ct) => Ct.trim()).filter(Boolean);
            Z.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: gt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                Z.value = null;
              }
            };
          }
          return;
        }
        if (De(Ke.message || "Update complete", "success"), Kt(), Ke.restart_required) {
          Qt();
          try {
            await ((je = (le = window.app) == null ? void 0 : le.api) == null ? void 0 : je.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Ke) {
        Ze(fe);
        const gt = Ke instanceof Error ? Ke.message : "Update failed";
        De(gt, "error");
      } finally {
        M.value = !1;
      }
    }
    const ve = U(() => {
      if (!N.value) return "neutral";
      const fe = N.value.workflows, le = fe.new.length > 0 || fe.modified.length > 0 || fe.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? le ? "warning" : "success" : "error";
    });
    U(() => N.value ? ve.value === "success" ? "All synced" : ve.value === "warning" ? "Uncommitted changes" : ve.value === "error" ? "Not synced" : "" : "");
    async function G() {
      Ae.value = !0, oe.value = null;
      try {
        const [fe, le, je, Ke] = await Promise.all([
          l(!0),
          r(),
          u(),
          p()
        ]);
        N.value = fe, z.value = le.commits, q.value = je.branches, O.value = Ke, a("statusUpdate", fe), de.value && await de.value.loadWorkflows(!0);
      } catch (fe) {
        oe.value = fe instanceof Error ? fe.message : "Failed to load status", N.value = null, z.value = [], q.value = [];
      } finally {
        Ae.value = !1;
      }
    }
    function ye(fe) {
      ne.value = fe;
    }
    async function He(fe) {
      var je;
      ne.value = null;
      const le = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      Z.value = {
        title: le ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: le ? "You have uncommitted changes that will be lost." : `Checkout commit ${fe.short_hash || ((je = fe.hash) == null ? void 0 : je.slice(0, 7))}?`,
        details: le ? kn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: le ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: le,
        onConfirm: async () => {
          var Ct;
          Z.value = null, Qt();
          const Ke = De(`Checking out ${fe.short_hash || ((Ct = fe.hash) == null ? void 0 : Ct.slice(0, 7))}...`, "info", 0), gt = await c(fe.hash, le);
          Ze(Ke), gt.status === "success" ? De("Restarting ComfyUI...", "success") : De(gt.message || "Checkout failed", "error");
        }
      };
    }
    async function ft(fe) {
      const le = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      Z.value = {
        title: le ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: le ? "You have uncommitted changes." : `Switch to branch "${fe}"?`,
        details: le ? kn() : void 0,
        warning: le ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: le ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Z.value = null, Qt();
          const je = De(`Switching to ${fe}...`, "info", 0), Ke = await v(fe, le);
          Ze(je), Ke.status === "success" ? De("Restarting ComfyUI...", "success") : De(Ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function Nt(fe) {
      const le = De(`Creating branch ${fe}...`, "info", 0), je = await d(fe);
      Ze(le), je.status === "success" ? (De(`Branch "${fe}" created`, "success"), await G()) : De(je.message || "Failed to create branch", "error");
    }
    async function rt(fe, le = !1) {
      const je = async (Ke) => {
        var Ct;
        const gt = De(`Deleting branch ${fe}...`, "info", 0);
        try {
          const cs = await f(fe, Ke);
          Ze(gt), cs.status === "success" ? (De(`Branch "${fe}" deleted`, "success"), await G()) : (Ct = cs.message) != null && Ct.includes("not fully merged") ? Z.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${fe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Z.value = null, await je(!0);
            }
          } : De(cs.message || "Failed to delete branch", "error");
        } catch (cs) {
          Ze(gt);
          const eo = cs instanceof Error ? cs.message : "Failed to delete branch";
          eo.includes("not fully merged") ? Z.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${fe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Z.value = null, await je(!0);
            }
          } : De(eo, "error");
        }
      };
      Z.value = {
        title: "Delete Branch",
        message: `Delete branch "${fe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Z.value = null, await je(le);
        }
      };
    }
    async function Mt(fe) {
      ne.value = null;
      const le = prompt("Enter branch name:");
      if (le) {
        const je = De(`Creating branch ${le}...`, "info", 0), Ke = await d(le, fe.hash);
        Ze(je), Ke.status === "success" ? (De(`Branch "${le}" created from ${fe.short_hash}`, "success"), await G()) : De(Ke.message || "Failed to create branch", "error");
      }
    }
    function Qt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Is() {
      if (!re.value.can_restart_current) {
        De("Restart is not available in this runtime context.", "warning");
        return;
      }
      Z.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var fe;
          Z.value = null, Qt(), De("Restarting environment...", "info");
          try {
            (fe = window.app) != null && fe.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ma() {
      if (!re.value.can_stop_current) {
        De("Stop is not available in this runtime context.", "warning");
        return;
      }
      Z.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var fe;
          Z.value = null, De("Stopping environment...", "info");
          try {
            (fe = window.app) != null && fe.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Fs(fe, le) {
      if (!re.value.can_switch_environment) {
        De("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      T.value = !1, K.value = fe, _e.value = le || null, F.value = !0;
    }
    async function fa() {
      F.value = !1, B.value = !0, Qt(), ke.value = {
        progress: 10,
        state: po(10),
        message: go(10)
      };
      try {
        await w(K.value, _e.value || void 0), va(), pa();
      } catch (fe) {
        Es(), B.value = !1, De(`Failed to initiate switch: ${fe instanceof Error ? fe.message : "Unknown error"}`, "error"), ke.value = { state: "idle", progress: 0, message: "" }, _e.value = null;
      }
    }
    function po(fe) {
      return fe >= 100 ? "complete" : fe >= 80 ? "validating" : fe >= 60 ? "starting" : fe >= 30 ? "syncing" : "preparing";
    }
    function go(fe) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[po(fe)] || "";
    }
    function va() {
      if (Te) return;
      let fe = 10;
      const le = 60, je = 5e3, Ke = 100, gt = (le - fe) / (je / Ke);
      Te = window.setInterval(() => {
        if (fe += gt, fe >= le && (fe = le, Es()), ke.value.progress < le) {
          const Ct = Math.floor(fe);
          ke.value = {
            progress: Ct,
            state: po(Ct),
            message: go(Ct)
          };
        }
      }, Ke);
    }
    function Es() {
      Te && (clearInterval(Te), Te = null);
    }
    function pa() {
      $e || ($e = window.setInterval(async () => {
        try {
          let fe = await E.getStatus();
          if ((!fe || fe.state === "idle") && (fe = await y()), !fe)
            return;
          const le = fe.progress || 0;
          le >= 60 && Es();
          const je = Math.max(le, ke.value.progress), Ke = fe.state && fe.state !== "idle" && fe.state !== "unknown", gt = Ke ? fe.state : po(je), Ct = Ke && fe.message || go(je);
          ke.value = {
            state: gt,
            progress: je,
            message: Ct
          }, fe.state === "complete" ? (Es(), Oo(), B.value = !1, De(`✓ Switched to ${K.value}`, "success"), await G(), K.value = "") : fe.state === "rolled_back" ? (Es(), Oo(), B.value = !1, De("Switch failed, restored previous environment", "warning"), K.value = "") : fe.state === "critical_failure" && (Es(), Oo(), B.value = !1, De(`Critical error during switch: ${fe.message}`, "error"), K.value = "");
        } catch (fe) {
          console.error("Failed to poll switch progress:", fe);
        }
      }, 1e3));
    }
    function Oo() {
      Es(), $e && (clearInterval($e), $e = null);
    }
    function ga() {
      var fe;
      F.value = !1, K.value = "", (fe = Q.value) != null && fe.state && Q.value.state !== "managed" && (Pe.value = Q.value.state === "no_workspace" ? 1 : 2, me.value = !0);
    }
    async function ha(fe) {
      Ve.value = !1, await G(), De(fe.message, fe.success ? "success" : "error");
    }
    async function ya() {
      Ue.value = !1;
      const fe = De("Syncing environment...", "info", 0);
      try {
        const le = await x("skip", !0);
        if (Ze(fe), le.status === "success") {
          const je = [];
          le.nodes_installed.length && je.push(`${le.nodes_installed.length} installed`), le.nodes_removed.length && je.push(`${le.nodes_removed.length} removed`);
          const Ke = je.length ? `: ${je.join(", ")}` : "";
          De(`✓ Environment synced${Ke}`, "success"), await G();
        } else {
          const je = le.errors.length ? le.errors.join("; ") : le.message;
          De(`Sync failed: ${je}`, "error");
        }
      } catch (le) {
        Ze(fe), De(`Sync error: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
      }
    }
    async function wa(fe) {
      var le;
      try {
        const je = await C(fe);
        je.failed.length === 0 ? De(`✓ Repaired ${je.success} workflow${je.success === 1 ? "" : "s"}`, "success") : De(`Repaired ${je.success}, failed: ${je.failed.length}`, "warning"), await G();
      } catch (je) {
        De(`Repair failed: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (le = qe.value) == null || le.resetRepairingState();
      }
    }
    async function _n() {
      var le, je;
      const fe = De("Repairing environment...", "info", 0);
      try {
        const Ke = await x("skip", !0);
        if (Ze(fe), Ke.status === "success") {
          const gt = [];
          Ke.nodes_installed.length && gt.push(`${Ke.nodes_installed.length} installed`), Ke.nodes_removed.length && gt.push(`${Ke.nodes_removed.length} removed`);
          const Ct = gt.length ? `: ${gt.join(", ")}` : "";
          De(`✓ Environment repaired${Ct}`, "success"), (le = qe.value) == null || le.closeDetailModal(), await G();
        } else {
          const gt = Ke.errors.length ? Ke.errors.join(", ") : Ke.message || "Unknown error";
          De(`Repair failed: ${gt}`, "error");
        }
      } catch (Ke) {
        Ze(fe), De(`Repair error: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (je = qe.value) == null || je.resetRepairingEnvironmentState();
      }
    }
    async function _a(fe, le) {
      De(`Environment '${fe}' created`, "success"), await G(), ze.value && await ze.value.loadEnvironments(), le && re.value.can_switch_environment && await Fs(fe);
    }
    async function ka(fe) {
      var le;
      if (!re.value.can_delete_environment) {
        De("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((le = W.value) == null ? void 0 : le.name) === fe) {
        De("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Z.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${fe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Z.value = null;
          try {
            const je = await _(fe);
            je.status === "success" ? (De(`Environment "${fe}" deleted`, "success"), await G(), ze.value && await ze.value.loadEnvironments()) : De(je.message || "Failed to delete environment", "error");
          } catch (je) {
            De(`Error deleting environment: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ba(fe, le) {
      me.value = !1;
      try {
        Q.value = await S();
      } catch {
      }
      re.value.can_switch_environment && await Fs(fe, le);
    }
    function $a() {
      me.value = !1, a("close");
    }
    async function Ca(fe, le) {
      await Fs(fe, le);
    }
    async function xa(fe) {
      se.value = !1, await G(), await Fs(fe);
    }
    function Sa() {
      te.value = null, se.value = !0;
    }
    function Ia(fe) {
      te.value = fe, ce.value = !0;
    }
    function Ea() {
      ce.value = !1, te.value = null;
    }
    async function Ta(fe) {
      Q.value = await S(), console.log(`Environment '${fe}' created. Available for switching.`);
    }
    function Ma() {
      if (!re.value.can_create_environment) {
        De("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      D("environments", "workspace"), setTimeout(() => {
        var fe;
        (fe = ze.value) == null || fe.openCreateModal();
      }, 100);
    }
    function kn() {
      if (!N.value) return [];
      const fe = [], le = N.value.workflows;
      return le.new.length && fe.push(`${le.new.length} new workflow(s)`), le.modified.length && fe.push(`${le.modified.length} modified workflow(s)`), le.deleted.length && fe.push(`${le.deleted.length} deleted workflow(s)`), fe;
    }
    return ot(async () => {
      try {
        if (Q.value = await S(), Q.value.state === "no_workspace" && re.value.can_initialize_workspace) {
          me.value = !0, Pe.value = 1;
          return;
        }
        if (Q.value.state === "empty_workspace" && re.value.can_create_environment) {
          me.value = !0, Pe.value = 2;
          return;
        }
        if (Q.value.state === "unmanaged" && re.value.can_switch_environment) {
          me.value = !0, Pe.value = 2;
          return;
        }
      } catch (fe) {
        console.warn("Setup status check failed, proceeding normally:", fe);
      }
      await Promise.all([
        G(),
        mt()
      ]);
    }), (fe, le) => {
      var je, Ke, gt, Ct, cs, eo, Y, Ce, Be, ut, Lt, Wt, gs, os, Uo, Ao;
      return n(), i("div", zT, [
        t("div", VT, [
          t("div", FT, [
            le[28] || (le[28] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (n(), i("div", BT)) : h("", !0)
          ]),
          t("div", WT, [
            k(Su),
            le[31] || (le[31] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Le(["icon-btn", { spinning: Ae.value }]),
              onClick: G,
              title: "Refresh"
            }, [...le[29] || (le[29] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            t("button", {
              class: "icon-btn",
              onClick: le[0] || (le[0] = (et) => a("close")),
              title: "Close"
            }, [...le[30] || (le[30] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        R.value && V.value ? (n(), L(DT, {
          key: 0,
          info: V.value,
          updating: M.value,
          onUpdate: Rt,
          onDismiss: Kt,
          onReleaseNotes: St
        }, null, 8, ["info", "updating"])) : h("", !0),
        t("div", GT, [
          t("div", jT, [
            le[32] || (le[32] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", HT, [
              re.value.can_restart_current ? (n(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Is
              }, " Restart ")) : h("", !0),
              re.value.can_stop_current ? (n(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ma
              }, " Stop ")) : h("", !0)
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: le[1] || (le[1] = (et) => D("environments", "workspace"))
          }, [
            N.value ? (n(), i("div", qT, [
              t("span", null, m(((je = W.value) == null ? void 0 : je.name) || ((Ke = N.value) == null ? void 0 : Ke.environment) || "Loading..."), 1),
              t("span", KT, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            le[33] || (le[33] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", JT, [
          t("div", YT, [
            t("div", QT, [
              t("div", XT, [
                le[34] || (le[34] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "status" && We.value === "this-env" }]),
                  onClick: le[2] || (le[2] = (et) => D("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "workflows" }]),
                  onClick: le[3] || (le[3] = (et) => D("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "models-env" }]),
                  onClick: le[4] || (le[4] = (et) => D("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "nodes" }]),
                  onClick: le[5] || (le[5] = (et) => D("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "version-control" }]),
                  onClick: le[6] || (le[6] = (et) => J("history"))
                }, " VERSION CONTROL ", 2),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "diagnostics" }]),
                  onClick: le[7] || (le[7] = (et) => pe("manifest"))
                }, " DIAGNOSTICS ", 2)
              ]),
              le[37] || (le[37] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", ZT, [
                le[35] || (le[35] = t("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "environments" }]),
                  onClick: le[8] || (le[8] = (et) => D("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "model-index" }]),
                  onClick: le[9] || (le[9] = (et) => D("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "settings" }]),
                  onClick: le[10] || (le[10] = (et) => D("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              le[38] || (le[38] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", e7, [
                le[36] || (le[36] = t("div", { class: "sidebar-section-title" }, "CLOUD", -1)),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "publish" }]),
                  onClick: le[11] || (le[11] = (et) => D("publish", "cloud"))
                }, " PUBLISH ", 2),
                t("button", {
                  class: Le(["sidebar-item", { active: ee.value === "account" }]),
                  onClick: le[12] || (le[12] = (et) => D("account", "cloud"))
                }, " ACCOUNT ", 2)
              ])
            ]),
            t("div", t7, [
              k(Iu)
            ])
          ]),
          t("div", s7, [
            oe.value ? (n(), i("div", o7, m(oe.value), 1)) : !N.value && ee.value === "status" ? (n(), i("div", n7, " Loading status... ")) : (n(), i(j, { key: 2 }, [
              ee.value === "status" ? (n(), L(Wv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: qe,
                status: N.value,
                "setup-state": ie.value,
                onSwitchBranch: P,
                onCommitChanges: le[13] || (le[13] = (et) => Ve.value = !0),
                onSyncEnvironment: le[14] || (le[14] = (et) => Ue.value = !0),
                onViewWorkflows: le[15] || (le[15] = (et) => D("workflows", "this-env")),
                onViewHistory: le[16] || (le[16] = (et) => J("history")),
                onViewDebug: le[17] || (le[17] = (et) => pe("env")),
                onViewNodes: le[18] || (le[18] = (et) => D("nodes", "this-env")),
                onRepairMissingModels: wa,
                onRepairEnvironment: _n,
                onStartSetup: le[19] || (le[19] = (et) => me.value = !0),
                onViewEnvironments: le[20] || (le[20] = (et) => D("environments", "workspace")),
                onCreateEnvironment: Ma
              }, null, 8, ["status", "setup-state"])) : ee.value === "workflows" ? (n(), L(I_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: de,
                onRefresh: G
              }, null, 512)) : ee.value === "models-env" ? (n(), L(Bb, {
                key: 2,
                onNavigate: X
              })) : ee.value === "version-control" ? (n(), L(RI, {
                key: 3,
                commits: z.value,
                "current-ref": (gt = N.value) == null ? void 0 : gt.branch,
                branches: q.value,
                current: ((Ct = N.value) == null ? void 0 : Ct.branch) || null,
                "initial-tab": he.value,
                onSelect: ye,
                onCheckout: He,
                onSwitch: ft,
                onCreate: Nt,
                onDelete: rt,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : ee.value === "nodes" ? (n(), L(D2, {
                key: 4,
                "version-mismatches": ((eo = (cs = N.value) == null ? void 0 : cs.comparison) == null ? void 0 : eo.version_mismatches) || [],
                onOpenNodeManager: ue,
                onRepairEnvironment: _n,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : ee.value === "diagnostics" ? (n(), L(HI, {
                key: 5,
                "initial-tab": ae.value
              }, null, 8, ["initial-tab"])) : ee.value === "environments" ? (n(), L(LC, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ze,
                "can-create": re.value.can_create_environment,
                "can-switch": re.value.can_switch_environment,
                "can-delete": re.value.can_delete_environment,
                onSwitch: Fs,
                onCreated: _a,
                onDelete: ka,
                onImport: Sa,
                onExport: Ia
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : ee.value === "model-index" ? (n(), L(s2, {
                key: 7,
                onRefresh: G
              })) : ee.value === "settings" ? (n(), L(r$, { key: 8 })) : ee.value === "account" ? (n(), L(US, {
                key: 9,
                onToast: nt,
                onNavigate: X
              })) : ee.value === "publish" ? (n(), L(c8, {
                key: 10,
                "environment-name": ((Y = W.value) == null ? void 0 : Y.name) || ((Ce = N.value) == null ? void 0 : Ce.environment) || null,
                "branch-name": ((Be = N.value) == null ? void 0 : Be.branch) || null,
                onNavigate: X,
                onToast: nt
              }, null, 8, ["environment-name", "branch-name"])) : h("", !0)
            ], 64))
          ])
        ]),
        ne.value ? (n(), L(c6, {
          key: 1,
          commit: ne.value,
          onClose: le[21] || (le[21] = (et) => ne.value = null),
          onCheckout: He,
          onCreateBranch: Mt
        }, null, 8, ["commit"])) : h("", !0),
        Z.value ? (n(), L(nu, {
          key: 2,
          title: Z.value.title,
          message: Z.value.message,
          details: Z.value.details,
          warning: Z.value.warning,
          confirmLabel: Z.value.confirmLabel,
          cancelLabel: Z.value.cancelLabel,
          secondaryLabel: Z.value.secondaryLabel,
          secondaryAction: Z.value.secondaryAction,
          destructive: Z.value.destructive,
          onConfirm: Z.value.onConfirm,
          onCancel: le[22] || (le[22] = (et) => Z.value = null),
          onSecondary: Z.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        se.value ? (n(), L($t, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: le[23] || (le[23] = (et) => se.value = !1)
        }, {
          body: g(() => [
            k(_S, {
              embedded: "",
              onImportCompleteSwitch: xa
            })
          ]),
          _: 1
        })) : h("", !0),
        ce.value ? (n(), L($t, {
          key: 4,
          title: te.value ? `EXPORT ENVIRONMENT: ${te.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          "fixed-height": "",
          onClose: Ea
        }, {
          body: g(() => [
            k(xx, {
              embedded: "",
              "environment-name": te.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        k(tE, {
          show: F.value,
          "from-environment": ((ut = W.value) == null ? void 0 : ut.name) || "unknown",
          "to-environment": K.value,
          onConfirm: fa,
          onClose: ga
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ve.value && N.value ? (n(), L(xu, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: le[24] || (le[24] = (et) => Ve.value = !1),
          onCommitted: ha
        }, null, 8, ["status"])) : h("", !0),
        Ue.value && N.value ? (n(), L(kE, {
          key: 6,
          show: Ue.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: ya,
          onClose: le[25] || (le[25] = (et) => Ue.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        k(mE, {
          show: B.value,
          state: ke.value.state,
          progress: ke.value.progress,
          message: ke.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        T.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: le[27] || (le[27] = st((et) => T.value = !1, ["self"]))
        }, [
          t("div", a7, [
            t("div", l7, [
              le[40] || (le[40] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: le[26] || (le[26] = (et) => T.value = !1)
              }, [...le[39] || (le[39] = [
                t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            t("div", i7, [
              le[41] || (le[41] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", r7, [
                (n(!0), i(j, null, be(O.value, (et) => (n(), i("div", {
                  key: et.name,
                  class: Le(["env-item", { current: et.is_current }])
                }, [
                  t("div", u7, [
                    t("div", c7, [
                      t("span", d7, m(et.is_current ? "●" : "○"), 1),
                      t("span", m7, m(et.name), 1),
                      et.current_branch ? (n(), i("span", f7, "(" + m(et.current_branch) + ")", 1)) : h("", !0),
                      et.is_current ? (n(), i("span", v7, "CURRENT")) : h("", !0)
                    ]),
                    t("div", p7, m(et.workflow_count) + " workflows • " + m(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && re.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (bR) => Fs(et.name)
                  }, " SWITCH ", 8, g7)) : h("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        me.value ? (n(), L(xT, {
          key: 8,
          "default-path": ((Lt = Q.value) == null ? void 0 : Lt.default_path) || "~/comfygit",
          "detected-models-dir": ((Wt = Q.value) == null ? void 0 : Wt.detected_models_dir) || null,
          "initial-step": Pe.value,
          "existing-environments": ((gs = Q.value) == null ? void 0 : gs.environments) || [],
          "cli-installed": ((os = Q.value) == null ? void 0 : os.cli_installed) ?? !0,
          "setup-state": ((Uo = Q.value) == null ? void 0 : Uo.state) || "no_workspace",
          "workspace-path": ((Ao = Q.value) == null ? void 0 : Ao.workspace_path) || null,
          onComplete: ba,
          onClose: $a,
          onSwitchEnvironment: Ca,
          onEnvironmentCreatedNoSwitch: Ta
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        t("div", h7, [
          k(em, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(j, null, be(Fe.value, (et) => (n(), i("div", {
                key: et.id,
                class: Le(["toast", et.type])
              }, [
                t("span", y7, m(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), _7 = /* @__PURE__ */ Ie(w7, [["__scopeId", "data-v-77557cbb"]]), k7 = { class: "item-header" }, b7 = { class: "item-info" }, $7 = { class: "filename" }, C7 = { class: "metadata" }, x7 = { class: "size" }, S7 = {
  key: 0,
  class: "type"
}, I7 = { class: "item-actions" }, E7 = {
  key: 0,
  class: "progress-section"
}, T7 = { class: "progress-bar" }, M7 = { class: "progress-stats" }, P7 = { class: "downloaded" }, R7 = { class: "speed" }, N7 = {
  key: 0,
  class: "eta"
}, L7 = {
  key: 1,
  class: "status-msg paused"
}, D7 = {
  key: 2,
  class: "status-msg queued"
}, O7 = {
  key: 3,
  class: "status-msg completed"
}, U7 = {
  key: 4,
  class: "status-msg failed"
}, A7 = {
  key: 0,
  class: "retries"
}, z7 = /* @__PURE__ */ Se({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
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
      class: Le(["download-item", `status-${e.item.status}`])
    }, [
      t("div", k7, [
        t("div", b7, [
          t("div", $7, m(e.item.filename), 1),
          t("div", C7, [
            t("span", x7, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", S7, m(e.item.type), 1)) : h("", !0)
          ])
        ]),
        t("div", I7, [
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
      e.item.status === "downloading" ? (n(), i("div", E7, [
        t("div", T7, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", M7, [
          t("span", P7, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          t("span", R7, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", N7, m(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", L7, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", D7, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", O7, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", U7, [
        $(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", A7, "(" + m(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Wo = /* @__PURE__ */ Ie(z7, [["__scopeId", "data-v-2110df65"]]), V7 = { class: "queue-title" }, F7 = { class: "count" }, B7 = { class: "queue-actions" }, W7 = { class: "action-label" }, G7 = {
  key: 0,
  class: "overall-progress"
}, j7 = { class: "progress-bar" }, H7 = {
  key: 0,
  class: "current-mini"
}, q7 = { class: "filename" }, K7 = { class: "speed" }, J7 = {
  key: 1,
  class: "queue-content"
}, Y7 = {
  key: 0,
  class: "section"
}, Q7 = {
  key: 1,
  class: "section"
}, X7 = { class: "section-header" }, Z7 = { class: "section-label paused" }, eM = { class: "items-list" }, tM = {
  key: 2,
  class: "section"
}, sM = { class: "section-header" }, oM = { class: "section-label" }, nM = { class: "items-list" }, aM = {
  key: 3,
  class: "section"
}, lM = { class: "section-header" }, iM = { class: "section-label" }, rM = { class: "items-list" }, uM = {
  key: 4,
  class: "section"
}, cM = { class: "section-header" }, dM = { class: "section-label failed" }, mM = { class: "items-list" }, fM = /* @__PURE__ */ Se({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: u,
      hasItems: c,
      activeCount: d,
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: y,
      clearCompleted: _
    } = Do(), x = b(!1);
    let C = null;
    _t(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (E, N) => {
        C && (clearTimeout(C), C = null);
        const z = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, q = N && (N.active > 0 || N.paused > 0);
        z && q && (C = setTimeout(() => {
          _(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = U(() => {
      var z;
      if (s.items.length === 0) return 0;
      const E = l.value.length, N = ((z = o.value) == null ? void 0 : z.progress) || 0;
      return Math.round((E + N / 100) / s.items.length * 100);
    });
    function A(E) {
      v(E);
    }
    function I(E) {
      return E === 0 ? "..." : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, N) => (n(), L(Ot, { to: "body" }, [
      Ye(c) ? (n(), i("div", {
        key: 0,
        class: Le(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (z) => x.value = !x.value)
        }, [
          t("div", V7, [
            N[4] || (N[4] = t("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", F7, "(" + m(Ye(d)) + "/" + m(Ye(s).items.length) + ")", 1)
          ]),
          t("div", B7, [
            t("span", W7, m(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", J7, [
          Ye(o) ? (n(), i("div", Y7, [
            N[6] || (N[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            k(Wo, {
              item: Ye(o),
              onCancel: N[1] || (N[1] = (z) => A(Ye(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          Ye(u).length > 0 ? (n(), i("div", Q7, [
            t("div", X7, [
              t("span", Z7, "Paused (" + m(Ye(u).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...z) => Ye(w) && Ye(w)(...z))
              }, "Resume All")
            ]),
            t("div", eM, [
              (n(!0), i(j, null, be(Ye(u), (z) => (n(), L(Wo, {
                key: z.id,
                item: z,
                onResume: (q) => Ye(p)(z.id),
                onRemove: (q) => Ye(y)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Ye(a).length > 0 ? (n(), i("div", tM, [
            t("div", sM, [
              t("span", oM, "Queued (" + m(Ye(a).length) + ")", 1)
            ]),
            t("div", nM, [
              (n(!0), i(j, null, be(Ye(a), (z) => (n(), L(Wo, {
                key: z.id,
                item: z,
                onCancel: (q) => A(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          Ye(l).length > 0 ? (n(), i("div", aM, [
            t("div", lM, [
              t("span", iM, "Completed (" + m(Ye(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...z) => Ye(_) && Ye(_)(...z))
              }, "Clear")
            ]),
            t("div", rM, [
              (n(!0), i(j, null, be(Ye(l).slice(0, 3), (z) => (n(), L(Wo, {
                key: z.id,
                item: z,
                onRemove: (q) => Ye(y)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Ye(r).length > 0 ? (n(), i("div", uM, [
            t("div", cM, [
              t("span", dM, "Failed (" + m(Ye(r).length) + ")", 1)
            ]),
            t("div", mM, [
              (n(!0), i(j, null, be(Ye(r), (z) => (n(), L(Wo, {
                key: z.id,
                item: z,
                onRetry: (q) => Ye(f)(z.id),
                onRemove: (q) => Ye(y)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (n(), i("div", G7, [
          t("div", j7, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Ye(o) ? (n(), i("div", H7, [
            t("span", q7, m(Ye(o).filename), 1),
            t("span", K7, m(I(Ye(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), vM = /* @__PURE__ */ Ie(fM, [["__scopeId", "data-v-3a3c9607"]]), pM = { class: "detail-header" }, gM = { class: "item-count" }, hM = { class: "resource-list" }, yM = { class: "item-info" }, wM = { class: "item-name" }, _M = {
  key: 0,
  class: "item-subtitle"
}, kM = {
  key: 0,
  class: "installing-badge"
}, bM = ["title"], $M = {
  key: 2,
  class: "installed-badge"
}, CM = {
  key: 3,
  class: "queued-badge"
}, xM = {
  key: 4,
  class: "action-buttons"
}, SM = {
  key: 1,
  class: "no-action"
}, IM = /* @__PURE__ */ Se({
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => o.items.filter((y) => y.canAction)), r = U(() => l.value.length > 0 && l.value.every(
      (y) => {
        var _, x;
        return o.queuedItems.has(y.id) || ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) || ((x = o.failedItems) == null ? void 0 : x.has(y.id));
      }
    )), u = U(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function c(y) {
      return o.queuedItems.has(y.id);
    }
    function d(y) {
      return o.installingItem === y.id;
    }
    function v(y) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function f(y) {
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
    return (y, _) => (n(), L($t, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (x) => a("close"))
    }, {
      body: g(() => [
        t("div", pM, [
          t("span", gM, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), L(Me, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (x) => a("bulk-action"))
          }, {
            default: g(() => [
              $(m(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        t("div", hM, [
          (n(!0), i(j, null, be(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", yM, [
              t("span", wM, m(x.name), 1),
              x.subtitle ? (n(), i("span", _M, m(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (n(), i(j, { key: 0 }, [
              d(x) ? (n(), i("span", kM, "Installing...")) : f(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, bM)) : v(x) ? (n(), i("span", $M, "Installed")) : c(x) ? (n(), i("span", CM, "Queued")) : (n(), i("div", xM, [
                (n(!0), i(j, null, be(w(x), (C) => (n(), L(Me, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => a("action", x, C.key)
                }, {
                  default: g(() => [
                    $(m(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", SM, m(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        k(Me, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (x) => a("close"))
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
}), EM = /* @__PURE__ */ Ie(IM, [["__scopeId", "data-v-ec7e9202"]]), TM = {
  key: 0,
  class: "loading-state"
}, MM = {
  key: 1,
  class: "analysis-results"
}, PM = {
  key: 0,
  class: "section"
}, RM = { class: "section-header" }, NM = { class: "section-title" }, LM = { class: "item-list" }, DM = { class: "package-info" }, OM = { class: "package-name" }, UM = { class: "node-count" }, AM = {
  key: 1,
  class: "installing-badge"
}, zM = {
  key: 2,
  class: "queued-badge"
}, VM = ["title"], FM = {
  key: 4,
  class: "installed-badge"
}, BM = {
  key: 1,
  class: "section"
}, WM = { class: "section-header" }, GM = { class: "section-title" }, jM = { class: "item-list" }, HM = { class: "node-type" }, qM = {
  key: 0,
  class: "overflow-note"
}, KM = {
  key: 2,
  class: "section"
}, JM = { class: "section-header" }, YM = { class: "section-title" }, QM = { class: "item-list" }, XM = { class: "node-type" }, ZM = { class: "not-found" }, eP = {
  key: 0,
  class: "overflow-note"
}, tP = {
  key: 3,
  class: "section"
}, sP = { class: "section-header" }, oP = { class: "section-title" }, nP = { class: "item-list" }, aP = { class: "package-info community-info" }, lP = { class: "community-title-row" }, iP = { class: "package-name" }, rP = { class: "node-count" }, uP = { class: "community-mapping-note" }, cP = { key: 0 }, dP = {
  key: 0,
  class: "community-actions"
}, mP = {
  key: 1,
  class: "installing-badge"
}, fP = {
  key: 2,
  class: "queued-badge"
}, vP = ["title"], pP = {
  key: 4,
  class: "installed-badge"
}, gP = ["title"], hP = {
  key: 1,
  class: "no-url"
}, yP = {
  key: 4,
  class: "section"
}, wP = { class: "section-header" }, _P = { class: "section-title" }, kP = { class: "item-list" }, bP = { class: "model-info" }, $P = { class: "model-name" }, CP = {
  key: 1,
  class: "queued-badge"
}, xP = {
  key: 1,
  class: "no-url"
}, SP = { class: "dont-show-again" }, IP = 3e4, EP = /* @__PURE__ */ Se({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = b(!1), o = b(null), a = b(null), l = b(!1), r = b(/* @__PURE__ */ new Set()), u = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Map()), d = b(/* @__PURE__ */ new Set()), v = b(!1), f = b(null), p = b(0), w = b(null), y = b(/* @__PURE__ */ new Set()), _ = b(/* @__PURE__ */ new Map()), x = b(/* @__PURE__ */ new Map()), { addToQueue: C } = Do(), { queueNodeInstall: S } = ct(), A = U(() => {
      var P;
      return ((P = a.value) == null ? void 0 : P.package_aliases) || {};
    });
    function I(P) {
      if (!P) return null;
      const ue = A.value;
      let Z = P;
      const Ve = /* @__PURE__ */ new Set();
      for (; ue[Z] && !Ve.has(Z); )
        Ve.add(Z), Z = ue[Z];
      return Z;
    }
    function E(P, ue) {
      return P instanceof Error && P.message ? P.message : typeof P == "string" && P.trim().length > 0 ? P : ue;
    }
    function N(P) {
      for (const [ue, Z] of _.value.entries())
        Z === P && _.value.delete(ue);
    }
    function z(P) {
      if (!x.value.has(P)) return;
      const ue = x.value.get(P);
      clearTimeout(ue), x.value.delete(P);
    }
    function q() {
      for (const P of x.value.values())
        clearTimeout(P);
      x.value = /* @__PURE__ */ new Map();
    }
    function O(P) {
      z(P);
      const ue = setTimeout(() => {
        if (x.value.delete(P), !u.value.has(P)) return;
        N(P), u.value.delete(P), f.value === P && (f.value = null), c.value.set(P, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", P);
      }, IP);
      x.value.set(P, ue);
    }
    function W(P) {
      const ue = `Cannot install "${P.title}" - package_id is missing`;
      c.value.set(P.item_id, ue), o.value = ue, console.warn("[ComfyGit] Community install requested without package_id:", P);
    }
    const te = U(() => se.value.length > 0 || he.value.length > 0 || ae.value.length > 0 || Q.value.length > 0 || re.value.length > 0), se = U(() => {
      var Z, Ve;
      if (!((Z = a.value) != null && Z.nodes)) return [];
      const P = /* @__PURE__ */ new Map(), ue = (a.value.nodes.resolved || []).filter((Ue) => {
        var Fe;
        return !Ue.is_installed && ((Fe = Ue.package) == null ? void 0 : Fe.package_id);
      });
      for (const Ue of ue) {
        const Fe = I(Ue.package.package_id);
        if (!Fe) continue;
        P.has(Fe) || P.set(Fe, {
          package_id: Fe,
          title: Ue.package.title || Fe,
          node_count: 0,
          node_types: [],
          repository: Ue.package.repository || null,
          latest_version: Ue.package.latest_version || null
        });
        const Qe = P.get(Fe);
        Qe.node_count++, Qe.node_types.push(((Ve = Ue.reference) == null ? void 0 : Ve.node_type) || Ue.node_type);
      }
      return Array.from(P.values());
    }), ce = U(() => se.value.reduce((P, ue) => P + ue.node_count, 0)), he = U(() => {
      var P;
      return (P = a.value) != null && P.nodes ? (a.value.nodes.unresolved || []).map((ue) => {
        var Z;
        return {
          node_type: ((Z = ue.reference) == null ? void 0 : Z.node_type) || ue.node_type
        };
      }) : [];
    }), ae = U(() => {
      var ue;
      if (!((ue = a.value) != null && ue.nodes)) return [];
      const P = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((Z) => {
        var Ue;
        const Ve = ((Ue = Z.reference) == null ? void 0 : Ue.node_type) || Z.node_type;
        return {
          node_type: Ve,
          guidance: Z.guidance || P[Ve] || null
        };
      });
    }), Q = U(() => {
      var Z, Ve, Ue, Fe, Qe, De, Ze, nt;
      if (!((Z = a.value) != null && Z.nodes)) return [];
      const P = a.value.node_guidance || {}, ue = /* @__PURE__ */ new Map();
      for (const mt of a.value.nodes.uninstallable || []) {
        const St = ((Ve = mt.reference) == null ? void 0 : Ve.node_type) || mt.node_type, Kt = I(((Ue = mt.package) == null ? void 0 : Ue.package_id) || null), Rt = Kt || `node:${St}`;
        ue.has(Rt) || ue.set(Rt, {
          item_id: Rt,
          node_type: St,
          title: ((Fe = mt.package) == null ? void 0 : Fe.title) || Kt || St,
          node_count: 0,
          package_id: Kt,
          repository: ((Qe = mt.package) == null ? void 0 : Qe.repository) || null,
          latest_version: ((De = mt.package) == null ? void 0 : De.latest_version) || null,
          guidance: mt.guidance || P[St] || null
        });
        const ve = ue.get(Rt);
        ve.node_count++, ve.guidance || (ve.guidance = mt.guidance || P[St] || null), !ve.repository && ((Ze = mt.package) != null && Ze.repository) && (ve.repository = mt.package.repository), !ve.latest_version && ((nt = mt.package) != null && nt.latest_version) && (ve.latest_version = mt.package.latest_version);
      }
      return Array.from(ue.values());
    }), me = U(() => Q.value.filter((P) => !!P.package_id)), Pe = U(() => Q.value.length >= 5 ? Q.value.slice(0, 4) : Q.value), ie = U(() => me.value.length > 0 && me.value.every((P) => {
      const ue = P.package_id;
      return r.value.has(ue) || u.value.has(ue) || c.value.has(ue);
    }));
    function ge(P) {
      const ue = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return P.repository && ue.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), ue;
    }
    const re = U(() => {
      var Ue;
      if (!((Ue = a.value) != null && Ue.models)) return [];
      const P = (a.value.models.resolved || []).filter(
        (Fe) => Fe.match_type === "download_intent" || Fe.match_type === "property_download_intent" || Fe.match_type === "not_found"
      ).map((Fe) => {
        var Qe, De, Ze, nt;
        return {
          filename: ((De = (Qe = Fe.reference) == null ? void 0 : Qe.widget_value) == null ? void 0 : De.split("/").pop()) || ((Ze = Fe.reference) == null ? void 0 : Ze.widget_value) || Fe.widget_value,
          widget_value: ((nt = Fe.reference) == null ? void 0 : nt.widget_value) || Fe.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Fe.download_source || null,
          targetPath: Fe.target_path || null,
          canDownload: !!(Fe.download_source && Fe.target_path)
        };
      }), ue = (a.value.models.unresolved || []).map((Fe) => {
        var Qe, De, Ze, nt;
        return {
          filename: ((De = (Qe = Fe.reference) == null ? void 0 : Qe.widget_value) == null ? void 0 : De.split("/").pop()) || ((Ze = Fe.reference) == null ? void 0 : Ze.widget_value) || Fe.widget_value,
          widget_value: ((nt = Fe.reference) == null ? void 0 : nt.widget_value) || Fe.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), Z = /* @__PURE__ */ new Map(), Ve = [];
      for (const Fe of P) {
        if (!Fe.url) {
          Ve.push(Fe);
          continue;
        }
        const Qe = `${Fe.filename}::${Fe.url}`, De = Z.get(Qe);
        if (!De) {
          Z.set(Qe, Fe);
          continue;
        }
        !De.targetPath && Fe.targetPath && (De.targetPath = Fe.targetPath), !De.canDownload && Fe.canDownload && (De.canDownload = Fe.canDownload);
      }
      return [...Z.values(), ...Ve, ...ue];
    }), Ae = U(() => re.value.filter((P) => P.canDownload)), oe = U(() => se.value.length >= 5 ? se.value.slice(0, 4) : se.value), ne = U(() => re.value.length >= 5 ? re.value.slice(0, 4) : re.value), T = U(() => se.value.length > 0 && se.value.every(
      (P) => r.value.has(P.package_id) || u.value.has(P.package_id) || c.value.has(P.package_id)
    )), V = U(() => Ae.value.length > 0 && Ae.value.every((P) => d.value.has(P.url))), H = U(() => se.value.length > 0 || me.value.length > 0 || Ae.value.length > 0), M = U(() => {
      const P = (se.value.length === 0 || T.value) && (me.value.length === 0 || ie.value), ue = Ae.value.length === 0 || V.value;
      return P && ue;
    }), R = U(() => w.value === "models" ? `Missing Models (${re.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ce.value})` : w.value === "community" ? `Community-Mapped Packages (${Q.value.length})` : ""), de = U(() => w.value === "models" ? re.value.map((P) => ({
      id: P.url || P.widget_value,
      name: P.filename,
      canAction: P.canDownload,
      actionDisabledReason: P.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? se.value.map((P) => ({
      id: P.package_id,
      name: P.title,
      subtitle: `(${P.node_count} ${P.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? Q.value.map((P) => ({
      id: P.package_id || P.item_id,
      name: P.title,
      subtitle: `(${P.node_count} ${P.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!P.package_id,
      actionDisabledReason: P.package_id ? void 0 : "Manual setup required",
      actions: P.package_id ? ge(P) : []
    })) : []);
    function ze(P, ue) {
      if (w.value === "models") {
        const Z = re.value.find((Ve) => Ve.url === P.id || Ve.widget_value === P.id);
        Z && _e(Z);
      } else if (w.value === "packages") {
        const Z = se.value.find((Ve) => Ve.package_id === P.id);
        Z && F(Z);
      } else if (w.value === "community") {
        const Z = Q.value.find((Ue) => (Ue.package_id || Ue.item_id) === P.id);
        if (!Z) return;
        if (!Z.package_id) {
          W({ item_id: Z.item_id, title: Z.title });
          return;
        }
        B(Z, ue === "install_git" ? "git" : "registry");
      }
    }
    function qe() {
      w.value === "models" ? Te() : w.value === "packages" ? ke() : w.value === "community" && $e();
    }
    async function F(P) {
      return K(P.package_id, P.latest_version, "registry");
    }
    async function B(P, ue) {
      return P.package_id ? K(P.package_id, P.latest_version, ue, P.repository) : (W({ item_id: P.item_id, title: P.title }), !1);
    }
    async function K(P, ue, Z, Ve) {
      const Ue = I(P) || P, Fe = ue || "latest";
      if (r.value.has(Ue) || u.value.has(Ue) || c.value.has(Ue))
        return !0;
      J(), f.value = Ue;
      let Qe = null;
      try {
        const De = {
          id: Ue,
          version: Fe,
          selected_version: Fe,
          mode: "remote",
          channel: "default"
        };
        Z === "git" && Ve && (De.repository = Ve, De.install_source = "git");
        const { ui_id: Ze } = await S(De, {
          beforeQueueStart: (nt) => {
            Qe = nt, _.value.set(nt, Ue), u.value.add(Ue), O(Ue), console.log("[ComfyGit] Registered pending install:", {
              ui_id: nt,
              packageId: Ue,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return Qe || (Qe = Ze, _.value.set(Ze, Ue), u.value.add(Ue), O(Ue), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Ze,
          packageId: Ue,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (De) {
        const Ze = E(De, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", De), Qe && _.value.delete(Qe), N(Ue), z(Ue), u.value.delete(Ue), c.value.set(Ue, Ze), !1;
      } finally {
        f.value = null;
      }
    }
    function _e(P) {
      !P.url || !P.targetPath || d.value.has(P.url) || (C([{
        workflow: "unsaved",
        filename: P.filename,
        url: P.url,
        targetPath: P.targetPath
      }]), d.value.add(P.url));
    }
    async function ke() {
      const P = { attempted: 0, failed: 0 };
      for (const ue of se.value)
        !r.value.has(ue.package_id) && !u.value.has(ue.package_id) && !c.value.has(ue.package_id) && (P.attempted++, await F(ue) || P.failed++);
      return P;
    }
    async function $e() {
      const P = { attempted: 0, failed: 0 };
      for (const ue of me.value) {
        const Z = ue.package_id;
        !r.value.has(Z) && !u.value.has(Z) && !c.value.has(Z) && (P.attempted++, await B(ue, "registry") || P.failed++);
      }
      return P;
    }
    function Te() {
      const P = Ae.value.filter(
        (ue) => !d.value.has(ue.url)
      );
      if (P.length === 0) return 0;
      C(P.map((ue) => ({
        workflow: "unsaved",
        filename: ue.filename,
        url: ue.url,
        targetPath: ue.targetPath
      })));
      for (const ue of P)
        d.value.add(ue.url);
      return P.length;
    }
    async function Ne() {
      const P = await ke(), ue = await $e();
      Te();
      const Z = P.attempted + ue.attempted, Ve = P.failed + ue.failed;
      if (Z > 0 && Ve > 0) {
        const Ue = Z - Ve;
        o.value = `${Ue} of ${Z} installs queued, ${Ve} failed`;
      }
    }
    function Re() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ee(P) {
      var Ue, Fe;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ue = P == null ? void 0 : P.id;
      if (ue && y.value.has(ue)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ue} this session`);
        return;
      }
      const Z = window.app, Ve = (Ue = Z == null ? void 0 : Z.extensionManager) == null ? void 0 : Ue.workflow;
      if (Ve) {
        let Ze = !1;
        for (let nt = 0; nt < 20; nt++) {
          const mt = Ve.activeWorkflow;
          if (!mt) {
            await new Promise((Rt) => setTimeout(Rt, 50));
            continue;
          }
          const St = (Fe = mt.activeState) == null ? void 0 : Fe.id;
          if (!(ue && St === ue)) {
            nt < 19 && await new Promise((Rt) => setTimeout(Rt, 50));
            continue;
          }
          if (Ze = !0, mt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${mt.filename}`), ue && y.value.add(ue);
            return;
          }
          break;
        }
        Ze || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, q(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const Qe = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: P, name: "unsaved" })
        });
        if (!Qe.ok) {
          const De = await Qe.json();
          throw new Error(De.error || "Failed to analyze workflow");
        }
        a.value = await Qe.json(), te.value && (l.value = !0, ue && y.value.add(ue));
      } catch (Qe) {
        console.error("[ComfyGit] Failed to analyze workflow:", Qe);
      } finally {
        s.value = !1;
      }
    }
    function Ge() {
      q(), l.value = !1, a.value = null;
    }
    function Oe(P) {
      const { workflow: ue } = P.detail;
      ue && Ee(ue);
    }
    function we(P) {
      var Ve;
      const ue = (Ve = P.detail) == null ? void 0 : Ve.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ue,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: P.detail
      });
      const Z = _.value.get(ue);
      Z ? (z(Z), f.value = Z, console.log("[ComfyGit] Installing package:", Z)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ue);
    }
    function ee(P) {
      var Ue, Fe, Qe, De, Ze, nt, mt;
      const ue = (Ue = P.detail) == null ? void 0 : Ue.ui_id, Z = (Qe = (Fe = P.detail) == null ? void 0 : Fe.status) == null ? void 0 : Qe.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ue,
        status: Z,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: P.detail
      });
      const Ve = _.value.get(ue);
      if (Ve) {
        if (z(Ve), _.value.delete(ue), u.value.delete(Ve), f.value === Ve && (f.value = null), Z === "success")
          r.value.add(Ve), p.value++, console.log("[ComfyGit] Package installed successfully:", Ve);
        else {
          const St = ((nt = (Ze = (De = P.detail) == null ? void 0 : De.status) == null ? void 0 : Ze.messages) == null ? void 0 : nt[0]) || ((mt = P.detail) == null ? void 0 : mt.result) || "Unknown error";
          c.value.set(Ve, St), console.error("[ComfyGit] Package install failed:", Ve, St);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ue);
    }
    let We = null;
    function D() {
      var P;
      return We || (We = (P = window.app) == null ? void 0 : P.api), We;
    }
    let X = !1;
    function J() {
      if (X) return !0;
      const P = D();
      return P ? (P.addEventListener("cm-task-started", we), P.addEventListener("cm-task-completed", ee), P.addEventListener("comfygit:workflow-changed", pe), X = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function pe(P) {
      const { change_type: ue } = P.detail;
      (ue === "created" || ue === "modified") && l.value && (q(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return ot(() => {
      window.addEventListener("comfygit:workflow-loaded", Oe);
    }), No(() => {
      if (q(), window.removeEventListener("comfygit:workflow-loaded", Oe), X) {
        const P = D();
        P && (P.removeEventListener("cm-task-started", we), P.removeEventListener("cm-task-completed", ee), P.removeEventListener("comfygit:workflow-changed", pe)), X = !1;
      }
    }), (P, ue) => (n(), i(j, null, [
      l.value ? (n(), L($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ge
      }, {
        body: g(() => [
          s.value ? (n(), i("div", TM, [...ue[5] || (ue[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && te.value ? (n(), i("div", MM, [
            se.value.length > 0 ? (n(), i("div", PM, [
              t("div", RM, [
                t("span", NM, "Missing Custom Nodes (" + m(ce.value) + ")", 1),
                se.value.length > 1 ? (n(), L(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: T.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    $(m(T.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", LM, [
                (n(!0), i(j, null, be(oe.value, (Z) => (n(), i("div", {
                  key: Z.package_id,
                  class: "package-item"
                }, [
                  t("div", DM, [
                    t("span", OM, m(Z.title), 1),
                    t("span", UM, "(" + m(Z.node_count) + " " + m(Z.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(Z.package_id) && !u.value.has(Z.package_id) && !c.value.has(Z.package_id) ? (n(), L(Me, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === Z.package_id,
                    onClick: (Ve) => F(Z)
                  }, {
                    default: g(() => [
                      $(m(f.value === Z.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === Z.package_id ? (n(), i("span", AM, "Installing...")) : u.value.has(Z.package_id) ? (n(), i("span", zM, "Queued")) : c.value.has(Z.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(Z.package_id)
                  }, "Failed ⚠", 8, VM)) : (n(), i("span", FM, "Installed"))
                ]))), 128)),
                se.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[0] || (ue[0] = (Z) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + m(se.value.length) + " packages...", 1),
                  ue[6] || (ue[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            he.value.length > 0 ? (n(), i("div", BM, [
              t("div", WM, [
                t("span", GM, "Unknown Nodes (" + m(he.value.length) + ")", 1)
              ]),
              t("div", jM, [
                (n(!0), i(j, null, be(he.value.slice(0, 5), (Z) => (n(), i("div", {
                  key: Z.node_type,
                  class: "item"
                }, [
                  t("code", HM, m(Z.node_type), 1),
                  ue[7] || (ue[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                he.value.length > 5 ? (n(), i("div", qM, " ...and " + m(he.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            ae.value.length > 0 ? (n(), i("div", KM, [
              t("div", JM, [
                t("span", YM, "Requires Newer ComfyUI (" + m(ae.value.length) + ")", 1)
              ]),
              t("div", QM, [
                (n(!0), i(j, null, be(ae.value.slice(0, 5), (Z) => (n(), i("div", {
                  key: `vg-${Z.node_type}`,
                  class: "item"
                }, [
                  t("code", XM, m(Z.node_type), 1),
                  t("span", ZM, m(Z.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                ae.value.length > 5 ? (n(), i("div", eP, " ...and " + m(ae.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            Q.value.length > 0 ? (n(), i("div", tP, [
              t("div", sP, [
                t("span", oP, "Community-Mapped Packages (" + m(Q.value.length) + ")", 1),
                me.value.length > 1 ? (n(), L(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ie.value,
                  onClick: $e
                }, {
                  default: g(() => [
                    $(m(ie.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", nP, [
                (n(!0), i(j, null, be(Pe.value, (Z) => (n(), i("div", {
                  key: `community-${Z.item_id}`,
                  class: "package-item"
                }, [
                  t("div", aP, [
                    t("div", lP, [
                      t("span", iP, m(Z.title), 1),
                      t("span", rP, "(" + m(Z.node_count) + " " + m(Z.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", uP, [
                      ue[8] || (ue[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      Z.guidance ? (n(), i("span", cP, ". " + m(Z.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  Z.package_id ? (n(), i(j, { key: 0 }, [
                    !r.value.has(Z.package_id) && !u.value.has(Z.package_id) && !c.value.has(Z.package_id) ? (n(), i("div", dP, [
                      k(Me, {
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === Z.package_id,
                        onClick: (Ve) => B(Z, "registry")
                      }, {
                        default: g(() => [
                          $(m(f.value === Z.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      Z.repository ? (n(), L(Me, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: f.value === Z.package_id,
                        onClick: (Ve) => B(Z, "git")
                      }, {
                        default: g(() => [...ue[9] || (ue[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : f.value === Z.package_id ? (n(), i("span", mP, "Installing...")) : u.value.has(Z.package_id) ? (n(), i("span", fP, "Queued")) : c.value.has(Z.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(Z.package_id)
                    }, "Failed ⚠", 8, vP)) : (n(), i("span", pP, "Installed"))
                  ], 64)) : (n(), i(j, { key: 1 }, [
                    c.value.has(Z.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(Z.item_id)
                    }, "Failed ⚠", 8, gP)) : (n(), i("span", hP, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                Q.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[1] || (ue[1] = (Z) => w.value = "community")
                }, [
                  t("span", null, "Show all " + m(Q.value.length) + " packages...", 1),
                  ue[10] || (ue[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            re.value.length > 0 ? (n(), i("div", yP, [
              t("div", wP, [
                t("span", _P, "Missing Models (" + m(re.value.length) + ")", 1),
                Ae.value.length > 1 ? (n(), L(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: V.value,
                  onClick: Te
                }, {
                  default: g(() => [
                    $(m(V.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", kP, [
                (n(!0), i(j, null, be(ne.value, (Z) => (n(), i("div", {
                  key: Z.widget_value,
                  class: "model-item"
                }, [
                  t("div", bP, [
                    t("span", $P, m(Z.filename), 1)
                  ]),
                  Z.canDownload ? (n(), i(j, { key: 0 }, [
                    d.value.has(Z.url) ? (n(), i("span", CP, "Queued")) : (n(), L(Me, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ve) => _e(Z)
                    }, {
                      default: g(() => [...ue[11] || (ue[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", xP, "Manual download required"))
                ]))), 128)),
                re.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[2] || (ue[2] = (Z) => w.value = "models")
                }, [
                  t("span", null, "Show all " + m(re.value.length) + " models...", 1),
                  ue[12] || (ue[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            t("div", SP, [
              k(Xn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  ue[3] || (ue[3] = (Z) => v.value = Z),
                  Re
                ]
              }, {
                default: g(() => [...ue[13] || (ue[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          k(Me, {
            variant: "secondary",
            onClick: Ge
          }, {
            default: g(() => [...ue[14] || (ue[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          H.value ? (n(), L(Me, {
            key: 0,
            variant: "primary",
            disabled: M.value,
            onClick: Ne
          }, {
            default: g(() => [
              $(m(M.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      w.value ? (n(), L(EM, {
        key: 1,
        title: R.value,
        items: de.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : u.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : c.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: ue[4] || (ue[4] = (Z) => w.value = null),
        onAction: ze,
        onBulkAction: qe
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), TP = /* @__PURE__ */ Ie(EP, [["__scopeId", "data-v-dfb55c3f"]]), MP = {
  key: 0,
  class: "io-mapping-root"
}, PP = { class: "io-mapping-visual-layer" }, RP = { class: "io-mapping-header" }, NP = { class: "io-mapping-header-main" }, LP = { class: "io-mapping-subtitle" }, DP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, OP = { class: "io-mapping-header-actions" }, UP = { class: "io-mapping-sidebar" }, AP = { class: "io-mapping-sidebar-scroll" }, zP = {
  key: 0,
  class: "io-state-block"
}, VP = {
  key: 1,
  class: "io-state-block io-state-error"
}, FP = { class: "contract-summary" }, BP = { class: "summary-pill" }, WP = { class: "summary-pill" }, GP = { class: "summary-pill" }, jP = { class: "mapping-section" }, HP = { class: "section-header" }, qP = {
  key: 0,
  class: "empty-message"
}, KP = ["onClick"], JP = { class: "item-card-title" }, YP = { class: "item-card-meta" }, QP = { class: "item-card-summary" }, XP = { key: 0 }, ZP = { class: "mapping-section" }, eR = { class: "section-header" }, tR = {
  key: 0,
  class: "empty-message"
}, sR = ["onClick"], oR = { class: "item-card-title" }, nR = { class: "item-card-meta" }, aR = { class: "item-card-summary" }, lR = { class: "io-mapping-footer" }, iR = /* @__PURE__ */ Se({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a } = ct(), l = b(!1), r = b(""), u = b(!1), c = b(!1), d = b(null), v = b(null), f = b(null), p = b(null), w = b(null), y = b(0), _ = b(null), x = b(null);
    let C = null;
    const S = [
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
    ], I = U(() => {
      if (!f.value)
        return { inputs: [], outputs: [] };
      const D = f.value.default_contract || "default";
      return f.value.contracts[D] || (f.value.contracts[D] = { inputs: [], outputs: [] }), f.value.contracts[D];
    }), E = U(() => {
      var X;
      const D = ((X = v.value) == null ? void 0 : X.contract_summary.status) ?? "none";
      return D === "valid" ? "Valid Contract" : D === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function N(D) {
      return D ? JSON.parse(JSON.stringify(D)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function z(D) {
      return D === "integer" || D === "number";
    }
    function q(D) {
      return D === "enum";
    }
    function O(D) {
      return D == null ? "" : String(D);
    }
    function W(D) {
      const X = D.trim();
      if (!X) return;
      const J = Number(X);
      return Number.isFinite(J) ? J : void 0;
    }
    function te(D) {
      return (D || []).join(`
`);
    }
    function se(D) {
      return D.split(/[\n,]/).map((X) => X.trim()).filter(Boolean);
    }
    function ce(D) {
      return typeof D == "string" ? D.length > 24 ? `${D.slice(0, 24)}...` : D : String(D);
    }
    function he(D) {
      return D == null ? "" : String(D);
    }
    function ae(D) {
      var J;
      const X = (J = D == null ? void 0 : D.options) == null ? void 0 : J.values;
      return Array.isArray(X) ? X.map((pe) => String(pe)).filter(Boolean) : [];
    }
    function Q(D, X) {
      var P;
      const J = (P = D == null ? void 0 : D.options) == null ? void 0 : P[X];
      if (J == null || J === "") return;
      const pe = Number(J);
      return Number.isFinite(pe) ? pe : void 0;
    }
    function me(D, X) {
      return D.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || X;
    }
    function Pe(D) {
      const X = String(D ?? "").toLowerCase();
      return X.includes("image") ? "image" : X.includes("video") ? "video" : X.includes("audio") ? "audio" : X.includes("int") ? "integer" : X.includes("float") || X.includes("double") || X.includes("number") ? "number" : X.includes("bool") ? "boolean" : X.includes("combo") || X.includes("enum") ? "enum" : X.includes("string") || X.includes("text") ? "string" : "file";
    }
    function ie(D) {
      I.value.inputs.splice(D, 1), p.value === D && (p.value = null);
    }
    function ge(D) {
      I.value.outputs.splice(D, 1), w.value === D && (w.value = null);
    }
    function re(D) {
      p.value = p.value === D ? null : D, p.value != null && (w.value = null);
    }
    function Ae(D) {
      w.value = w.value === D ? null : D, w.value != null && (p.value = null);
    }
    function oe(D) {
      const X = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(D)) : String(D);
      return document.querySelector(`[data-node-id="${X}"]`);
    }
    function ne(D) {
      return D instanceof Element ? !!D.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function T(D) {
      var pe, P, ue, Z, Ve, Ue;
      if (!(D instanceof Element)) return null;
      const X = D.closest("[data-node-id]"), J = X == null ? void 0 : X.getAttribute("data-node-id");
      return J ? ((ue = (P = (pe = s.comfyApp) == null ? void 0 : pe.graph) == null ? void 0 : P.getNodeById) == null ? void 0 : ue.call(P, J)) ?? ((Ue = (Ve = (Z = s.comfyApp) == null ? void 0 : Z.rootGraph) == null ? void 0 : Ve.getNodeById) == null ? void 0 : Ue.call(Ve, J)) ?? null : null;
    }
    function V(D, X) {
      if (X == null || X < 0) return null;
      const J = oe(D);
      return J ? J.querySelectorAll('[data-testid="node-widget"]')[X] ?? null : null;
    }
    function H(D) {
      return !D || D.width <= 0 || D.height <= 0 ? null : {
        left: `${D.left}px`,
        top: `${D.top}px`,
        width: `${D.width}px`,
        height: `${D.height}px`
      };
    }
    function M(D) {
      const X = oe((D == null ? void 0 : D.id) ?? "");
      if (X) return X.getBoundingClientRect();
      const J = s.comfyApp;
      if (!D || typeof (J == null ? void 0 : J.canvasPosToClientPos) != "function") return null;
      const P = J.canvasPosToClientPos([D.pos[0], D.pos[1] - 32]), ue = J.canvasPosToClientPos([D.pos[0] + D.size[0], D.pos[1] + D.size[1]]);
      return !P || !ue ? null : new DOMRect(P[0], P[1], ue[0] - P[0], ue[1] - P[1]);
    }
    function R(D) {
      var Ve, Ue, Fe, Qe, De, Ze, nt;
      const X = V(D.node_id, D.widget_idx);
      if (X) return X.getBoundingClientRect();
      const J = ((Fe = (Ue = (Ve = s.comfyApp) == null ? void 0 : Ve.graph) == null ? void 0 : Ue.getNodeById) == null ? void 0 : Fe.call(Ue, String(D.node_id))) ?? ((Ze = (De = (Qe = s.comfyApp) == null ? void 0 : Qe.rootGraph) == null ? void 0 : De.getNodeById) == null ? void 0 : Ze.call(De, String(D.node_id)));
      if (!J || typeof D.widget_idx != "number" || !Array.isArray(J.widgets)) return null;
      const pe = J.widgets[D.widget_idx];
      if (!pe || typeof ((nt = s.comfyApp) == null ? void 0 : nt.canvasPosToClientPos) != "function") return M(J);
      const P = 10, ue = s.comfyApp.canvasPosToClientPos([J.pos[0] + P, J.pos[1] + (pe.y ?? 0)]), Z = s.comfyApp.canvasPosToClientPos([J.pos[0] + J.size[0] - P, J.pos[1] + (pe.y ?? 0) + (pe.computedHeight ?? 24)]);
      return !ue || !Z ? M(J) : new DOMRect(ue[0], ue[1], Z[0] - ue[0], Z[1] - ue[1]);
    }
    function de(D) {
      var J, pe, P, ue, Z, Ve;
      const X = ((P = (pe = (J = s.comfyApp) == null ? void 0 : J.graph) == null ? void 0 : pe.getNodeById) == null ? void 0 : P.call(pe, String(D.node_id))) ?? ((Ve = (Z = (ue = s.comfyApp) == null ? void 0 : ue.rootGraph) == null ? void 0 : Z.getNodeById) == null ? void 0 : Ve.call(Z, String(D.node_id)));
      return M(X);
    }
    const ze = U(() => (y.value, I.value.inputs.map((D, X) => {
      const J = H(R(D));
      return J ? {
        key: `input-${X}-${D.node_id}-${D.widget_idx ?? "na"}`,
        style: J,
        active: p.value === X
      } : null;
    }).filter((D) => !!D))), qe = U(() => (y.value, I.value.outputs.map((D, X) => {
      const J = H(de(D));
      return J ? {
        key: `output-${X}-${D.node_id}-${D.selector ?? "primary"}`,
        style: J,
        active: w.value === X
      } : null;
    }).filter((D) => !!D)));
    function F(D) {
      var Fe, Qe, De, Ze, nt, mt, St, Kt, Rt, ve;
      if (ne(D.target)) return null;
      const X = (Fe = s.comfyApp) == null ? void 0 : Fe.canvas;
      if (!X) return null;
      const J = (Qe = X.convertEventToCanvasOffset) == null ? void 0 : Qe.call(X, D);
      if (!J || J.length < 2) return null;
      const [pe, P] = J, ue = X.graph || ((De = s.comfyApp) == null ? void 0 : De.graph) || ((Ze = s.comfyApp) == null ? void 0 : Ze.rootGraph), Z = ((nt = ue == null ? void 0 : ue.getNodeOnPos) == null ? void 0 : nt.call(ue, pe, P, X.visible_nodes)) || ((mt = X.getNodeOnPos) == null ? void 0 : mt.call(X, pe, P)) || T(D.target);
      if (!Z) return null;
      const Ve = (St = Z.getWidgetOnPos) == null ? void 0 : St.call(Z, pe, P, !0);
      if (Ve)
        return { kind: "input", node: Z, widget: Ve, canvasX: pe, canvasY: P };
      const Ue = ((Kt = Z.getOutputOnPos) == null ? void 0 : Kt.call(Z, [pe, P])) || ((ve = (Rt = Z.constructor) == null ? void 0 : Rt.nodeData) != null && ve.output_node ? { name: Z.title || Z.type || "output", type: "image" } : null);
      return Ue ? { kind: "output", node: Z, output: Ue, canvasX: pe, canvasY: P } : null;
    }
    function B(D, X) {
      var Ve;
      const J = Array.isArray(D.widgets) ? D.widgets.indexOf(X) : -1, pe = I.value.inputs.findIndex(
        (Ue) => String(Ue.node_id) === String(D.id) && Ue.widget_idx === J
      );
      if (pe >= 0) {
        p.value = pe;
        return;
      }
      const P = typeof ((Ve = X == null ? void 0 : X.options) == null ? void 0 : Ve.property) == "string" ? X.options.property : void 0, ue = (X == null ? void 0 : X.name) || P || "input", Z = {
        name: me(String(ue), `input_${I.value.inputs.length + 1}`),
        display_name: String((X == null ? void 0 : X.name) || P || `Input ${I.value.inputs.length + 1}`),
        type: Pe(X == null ? void 0 : X.type),
        node_id: String(D.id),
        widget_idx: J >= 0 ? J : void 0,
        field_key: P,
        required: !0,
        default: (X == null ? void 0 : X.value) ?? ""
      };
      z(Z.type) && (Z.min = Q(X, "min"), Z.max = Q(X, "max")), q(Z.type) && (Z.enum_values = ae(X)), I.value.inputs.push(Z), p.value = I.value.inputs.length - 1, w.value = null;
    }
    function K(D, X) {
      const J = Array.isArray(D.outputs) ? D.outputs.indexOf(X) : -1, pe = J >= 0 ? `slot:${J}` : "primary", P = I.value.outputs.findIndex(
        (Z) => String(Z.node_id) === String(D.id) && (Z.selector || "primary") === pe
      );
      if (P >= 0) {
        w.value = P;
        return;
      }
      const ue = {
        name: me(String((X == null ? void 0 : X.name) || "output"), `output_${I.value.outputs.length + 1}`),
        display_name: String((X == null ? void 0 : X.name) || `Output ${I.value.outputs.length + 1}`),
        type: Pe(X == null ? void 0 : X.type),
        node_id: String(D.id),
        selector: pe
      };
      I.value.outputs.push(ue), w.value = I.value.outputs.length - 1, p.value = null;
    }
    function _e(D) {
      var pe, P, ue;
      if (!l.value) {
        _.value = null, x.value = null;
        return;
      }
      const X = F(D);
      if (!X) {
        _.value = null, x.value = null;
        return;
      }
      if (X.kind === "input") {
        const Z = Array.isArray(X.node.widgets) ? X.node.widgets.indexOf(X.widget) : -1, Ve = H(((pe = V(X.node.id, Z)) == null ? void 0 : pe.getBoundingClientRect()) ?? R({
          node_id: String(X.node.id),
          widget_idx: Z >= 0 ? Z : void 0
        }));
        if (!Ve) {
          _.value = null, x.value = null;
          return;
        }
        _.value = {
          kind: "input",
          label: `${((P = X.widget) == null ? void 0 : P.name) || "widget"} · Node ${X.node.id}`
        }, x.value = { kind: "input", style: Ve };
        return;
      }
      const J = H(M(X.node));
      if (!J) {
        _.value = null, x.value = null;
        return;
      }
      _.value = {
        kind: "output",
        label: `${((ue = X.output) == null ? void 0 : ue.name) || X.node.title || X.node.type || "output"} · Node ${X.node.id}`
      }, x.value = { kind: "output", style: J };
    }
    function ke(D) {
      var pe, P, ue;
      if (!l.value || !f.value || D.button !== 0) return;
      const X = F(D);
      if (!X) return;
      const J = (pe = s.comfyApp) == null ? void 0 : pe.canvas;
      if (J) {
        if (X.kind === "input") {
          D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = X.canvasX, J.graph_mouse[1] = X.canvasY), (P = J.selectNode) == null || P.call(J, X.node, !1), B(X.node, X.widget);
          return;
        }
        D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = X.canvasX, J.graph_mouse[1] = X.canvasY), (ue = J.selectNode) == null || ue.call(J, X.node, !1), K(X.node, X.output);
      }
    }
    function $e() {
      document.addEventListener("pointerdown", ke, !0), document.addEventListener("pointermove", _e, !0);
    }
    function Te() {
      document.removeEventListener("pointerdown", ke, !0), document.removeEventListener("pointermove", _e, !0);
    }
    async function Ne() {
      if (r.value) {
        u.value = !0, d.value = null;
        try {
          v.value = await o(r.value), f.value = N(v.value.execution_contract);
        } catch (D) {
          d.value = D instanceof Error ? D.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Re() {
      if (!(!f.value || !r.value)) {
        c.value = !0, d.value = null;
        try {
          v.value = await a(r.value, f.value), f.value = N(v.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: r.value }
          })), Ge({ reopenPanel: !0 });
        } catch (D) {
          d.value = D instanceof Error ? D.message : "Failed to save workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    function Ee() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ge(D) {
      l.value = !1, _.value = null, x.value = null, D != null && D.reopenPanel && Ee();
    }
    async function Oe(D) {
      var pe, P;
      const J = (P = (pe = D.detail) == null ? void 0 : pe.workflowName) == null ? void 0 : P.trim();
      J && (r.value = J, p.value = null, w.value = null, l.value = !0, await Ne());
    }
    function we(D) {
      D.key === "Escape" && l.value && Ge({ reopenPanel: !0 });
    }
    function ee() {
      if (C != null) return;
      const D = () => {
        if (y.value += 1, !l.value) {
          C = null;
          return;
        }
        C = window.requestAnimationFrame(D);
      };
      C = window.requestAnimationFrame(D);
    }
    function We() {
      C != null && (window.cancelAnimationFrame(C), C = null);
    }
    return _t(l, (D) => {
      D ? ($e(), ee()) : (Te(), We());
    }), ot(() => {
      window.addEventListener("comfygit:open-io-mapping", Oe), window.addEventListener("keydown", we);
    }), ra(() => {
      Te(), We(), window.removeEventListener("comfygit:open-io-mapping", Oe), window.removeEventListener("keydown", we);
    }), (D, X) => l.value ? (n(), i("div", MP, [
      t("div", PP, [
        (n(!0), i(j, null, be(ze.value, (J) => (n(), i("div", {
          key: J.key,
          class: Le(["io-highlight", "io-highlight-input", { active: J.active }]),
          style: Ft(J.style)
        }, null, 6))), 128)),
        (n(!0), i(j, null, be(qe.value, (J) => (n(), i("div", {
          key: J.key,
          class: Le(["io-highlight", "io-highlight-output", { active: J.active }]),
          style: Ft(J.style)
        }, null, 6))), 128)),
        x.value ? (n(), i("div", {
          key: 0,
          class: Le(["io-highlight", x.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Ft(x.value.style)
        }, null, 6)) : h("", !0)
      ]),
      t("div", RP, [
        t("div", NP, [
          X[4] || (X[4] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", LP, m(r.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          _.value ? (n(), i("div", DP, " Hovering " + m(_.value.kind) + ": " + m(_.value.label), 1)) : h("", !0)
        ]),
        t("div", OP, [
          k(Me, {
            size: "sm",
            variant: "secondary",
            onClick: X[0] || (X[0] = (J) => Ge({ reopenPanel: !0 }))
          }, {
            default: g(() => [...X[5] || (X[5] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", UP, [
        t("div", AP, [
          u.value ? (n(), i("div", zP, " Loading workflow contract... ")) : d.value ? (n(), i("div", VP, m(d.value), 1)) : f.value ? (n(), i(j, { key: 2 }, [
            t("section", FP, [
              t("span", BP, m(E.value), 1),
              t("span", WP, m(I.value.inputs.length) + " input" + m(I.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", GP, m(I.value.outputs.length) + " output" + m(I.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("section", jP, [
              t("div", HP, [
                k(Os, { variant: "section" }, {
                  default: g(() => [...X[6] || (X[6] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.inputs.length ? h("", !0) : (n(), i("div", qP, " No inputs configured. ")),
              (n(!0), i(j, null, be(I.value.inputs, (J, pe) => (n(), i("div", {
                key: `input-${pe}`,
                class: Le(["item-card", { selected: p.value === pe }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (P) => re(pe)
                }, [
                  t("div", null, [
                    t("div", JP, m(J.name || `Input ${pe + 1}`), 1),
                    t("div", YP, [
                      $(" Node " + m(J.node_id || "?"), 1),
                      J.widget_idx !== void 0 ? (n(), i(j, { key: 0 }, [
                        $(" · Widget " + m(J.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", QP, [
                      t("span", null, m(J.type || "string"), 1),
                      t("span", null, m(J.required ? "required" : "optional"), 1),
                      J.default !== void 0 && J.default !== "" ? (n(), i("span", XP, "default " + m(ce(J.default)), 1)) : h("", !0)
                    ])
                  ]),
                  k(Me, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((P) => ie(pe), ["stop"])
                  }, {
                    default: g(() => [...X[7] || (X[7] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, KP),
                p.value === pe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: X[1] || (X[1] = st(() => {
                  }, ["stop"]))
                }, [
                  k(vt, { label: "Name" }, {
                    default: g(() => [
                      k(it, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (P) => J.name = P,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Display Name" }, {
                    default: g(() => [
                      k(it, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (P) => J.display_name = P,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Type" }, {
                    default: g(() => [
                      k(Js, {
                        "model-value": J.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (P) => J.type = P
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Required" }, {
                    default: g(() => [
                      k(Js, {
                        "model-value": J.required ? "true" : "false",
                        options: A,
                        "full-width": "",
                        "onUpdate:modelValue": (P) => J.required = P === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, {
                    class: Le({ "item-grid-full": J.type === "string" || J.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      J.type === "string" ? (n(), L(Ys, {
                        key: 0,
                        "model-value": he(J.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (P) => J.default = P
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(it, {
                        key: 1,
                        modelValue: J.default,
                        "onUpdate:modelValue": (P) => J.default = P,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  z(J.type) ? (n(), L(vt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      k(it, {
                        "model-value": O(J.min),
                        "full-width": "",
                        "onUpdate:modelValue": (P) => J.min = W(P)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  z(J.type) ? (n(), L(vt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      k(it, {
                        "model-value": O(J.max),
                        "full-width": "",
                        "onUpdate:modelValue": (P) => J.max = W(P)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  q(J.type) ? (n(), L(vt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      k(Ys, {
                        "model-value": te(J.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (P) => J.enum_values = se(P)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("section", ZP, [
              t("div", eR, [
                k(Os, { variant: "section" }, {
                  default: g(() => [...X[8] || (X[8] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.outputs.length ? h("", !0) : (n(), i("div", tR, " No outputs configured. ")),
              (n(!0), i(j, null, be(I.value.outputs, (J, pe) => (n(), i("div", {
                key: `output-${pe}`,
                class: Le(["item-card", { selected: w.value === pe }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (P) => Ae(pe)
                }, [
                  t("div", null, [
                    t("div", oR, m(J.name || `Output ${pe + 1}`), 1),
                    t("div", nR, [
                      $(" Node " + m(J.node_id || "?"), 1),
                      J.selector ? (n(), i(j, { key: 0 }, [
                        $(" · " + m(J.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", aR, [
                      t("span", null, m(J.type || "file"), 1)
                    ])
                  ]),
                  k(Me, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((P) => ge(pe), ["stop"])
                  }, {
                    default: g(() => [...X[9] || (X[9] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, sR),
                w.value === pe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: X[2] || (X[2] = st(() => {
                  }, ["stop"]))
                }, [
                  k(vt, { label: "Name" }, {
                    default: g(() => [
                      k(it, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (P) => J.name = P,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Display Name" }, {
                    default: g(() => [
                      k(it, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (P) => J.display_name = P,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Type" }, {
                    default: g(() => [
                      k(Js, {
                        "model-value": J.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (P) => J.type = P
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        t("div", lR, [
          k(Me, {
            variant: "secondary",
            onClick: X[3] || (X[3] = (J) => Ge({ reopenPanel: !0 }))
          }, {
            default: g(() => [...X[10] || (X[10] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Me, {
            variant: "primary",
            loading: c.value,
            onClick: Re
          }, {
            default: g(() => [...X[11] || (X[11] = [
              $(" Save Contract ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])
    ])) : h("", !0);
  }
}), rR = /* @__PURE__ */ Ie(iR, [["__scopeId", "data-v-f48c60c3"]]), uR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', cR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', dR = {
  comfy: uR,
  phosphor: cR
}, Dl = "comfy", Tu = "comfygit-theme";
let ao = null, Mu = Dl;
function mR() {
  try {
    const e = localStorage.getItem(Tu);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Dl;
}
function Pu(e = Dl) {
  ao && ao.remove(), ao = document.createElement("style"), ao.id = "comfygit-theme-styles", ao.setAttribute("data-theme", e), ao.textContent = dR[e], document.head.appendChild(ao), document.body.setAttribute("data-comfygit-theme", e), Mu = e;
  try {
    localStorage.setItem(Tu, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function fR() {
  return Mu;
}
function vR(e) {
  Pu(e);
}
function pR(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ol = document.createElement("link");
Ol.rel = "stylesheet";
Ol.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ol);
const gR = mR();
Pu(gR);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), vR(e);
  },
  getTheme: () => {
    const e = fR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Rs = null, on = null, Xt = null, nn = null, Go = null, Ri = null, jo = null, Ni = null, Ho = null, Li = null;
const Eo = b(null);
let vn = "no_workspace", Ru = !1;
async function zn() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const s = await Zt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Eo.value = await s.json());
  } catch {
  }
}
async function rl() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const s = await Zt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        vn = o.state, Ru = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function ul() {
  var s;
  if (vn === "managed" || !Ru) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function hR() {
  if (!Eo.value) return !1;
  const e = Eo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Eo.value.has_changes;
}
function Pn(e) {
  Jo(), Rs = document.createElement("div"), Rs.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Rs.appendChild(s), Rs.addEventListener("click", (a) => {
    a.target === Rs && Jo();
  });
  const o = (a) => {
    a.key === "Escape" && (Jo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), on = yn({
    render: () => Lo(_7, {
      initialView: e,
      onClose: Jo,
      onStatusUpdate: async (a) => {
        Eo.value = a, an(), await rl(), cl(), ul();
      }
    })
  }), on.mount(s), document.body.appendChild(Rs);
}
function Jo() {
  on && (on.unmount(), on = null), Rs && (Rs.remove(), Rs = null);
}
function Di(e) {
  qo(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${s.bottom + 8}px`, Xt.style.right = `${window.innerWidth - s.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (qo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (qo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), nn = yn({
    render: () => Lo(xu, {
      status: Eo.value,
      onClose: qo,
      onCommitted: (l) => {
        qo(), yR(l.success, l.message), zn().then(an);
      }
    })
  }), nn.mount(Xt), document.body.appendChild(Xt);
}
function qo() {
  nn && (nn.unmount(), nn = null), Xt && (Xt.remove(), Xt = null);
}
function yR(e, s) {
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
  r.textContent = s, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function wR() {
  Go || (Go = document.createElement("div"), Go.className = "comfygit-download-queue-root", Ri = yn({
    render: () => Lo(vM)
  }), Ri.mount(Go), document.body.appendChild(Go), console.log("[ComfyGit] Model download queue mounted"));
}
function _R() {
  jo || (jo = document.createElement("div"), jo.className = "comfygit-missing-resources-root", Ni = yn({
    render: () => Lo(TP)
  }), Ni.mount(jo), document.body.appendChild(jo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function kR() {
  Ho || (Ho = document.createElement("div"), Ho.className = "comfygit-io-mapping-root", Li = yn({
    render: () => Lo(rR, {
      comfyApp: Zt
    })
  }), Li.mount(Ho), document.body.appendChild(Ho), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Ht = null;
function an() {
  if (!Ht) return;
  const e = Ht.querySelector(".commit-indicator");
  e && (e.style.display = hR() ? "block" : "none");
}
function cl() {
  if (!Ht) return;
  const e = vn !== "managed";
  Ht.disabled = e, Ht.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Nu = document.createElement("style");
Nu.textContent = `
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
document.head.appendChild(Nu);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Pn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Ht && !Ht.disabled && Di(Ht);
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
  async beforeConfigureGraph(e, s) {
    if (vn === "managed")
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
    if (vn !== "managed") return;
    const s = window.__comfygit_pending_workflow;
    s && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: { workflow: s }
    })));
  },
  async setup() {
    var l, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Pn, Ht = document.createElement("button"), Ht.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ht.innerHTML = 'Commit <span class="commit-indicator"></span>', Ht.title = "Quick Commit", Ht.onclick = () => Di(Ht), e.appendChild(s), e.appendChild(Ht), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), wR(), _R(), kR(), window.addEventListener("comfygit:open-panel", ((u) => {
      var d;
      const c = (d = u.detail) == null ? void 0 : d.initialView;
      Pn(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Jo();
    }));
    const { loadPendingDownloads: o } = Do();
    o(), await Promise.all([zn(), rl()]), an(), cl(), ul(), setTimeout(ul, 100), setInterval(async () => {
      await Promise.all([zn(), rl()]), an(), cl();
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
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => u(), p.appendChild(y);
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
        const A = document.createElement("button");
        A.textContent = "View Logs", A.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, A.onmouseover = () => A.style.background = "#c62828", A.onmouseout = () => A.style.background = "#e53935", A.onclick = () => {
          y.remove(), Pn("debug-env");
        }, y.appendChild(A);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => y.remove(), y.appendChild(I), document.body.appendChild(y), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
        const A = document.createElement("button");
        A.textContent = "Apply Changes", A.style.cssText = `
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
        `, A.onmouseover = () => A.style.background = "rgba(255,255,255,0.1)", A.onmouseout = () => A.style.background = "transparent", A.onclick = async () => {
          A.disabled = !0, A.textContent = "Restarting...", A.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, y.style.borderColor = "#4caf50", A.style.display = "none", setTimeout(() => {
                  y.remove();
                }, 3e3);
              } catch (N) {
                console.error("[ComfyGit] Failed to refresh nodes:", N), _.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", y.style.borderColor = "#4caf50", A.style.display = "none";
              }
            };
            a.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", y.style.borderColor = "#e53935", A.textContent = "Try Again", A.disabled = !1, A.style.opacity = "1";
          }
        }, y.appendChild(A);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => y.remove(), y.appendChild(I), document.body.appendChild(y), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: y } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${y}`), await zn(), an();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = pR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: y = 1 } = w.detail || {};
        v(y);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
