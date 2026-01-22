import { app as Os } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ia(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const st = {}, ro = [], ms = () => {
}, Xl = () => !1, Rn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ea = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Ta = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Fr = Object.prototype.hasOwnProperty, Ze = (e, s) => Fr.call(e, s), Ue = Array.isArray, co = (e) => Jo(e) === "[object Map]", yo = (e) => Jo(e) === "[object Set]", sl = (e) => Jo(e) === "[object Date]", Be = (e) => typeof e == "function", ut = (e) => typeof e == "string", Zt = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", Ql = (e) => (tt(e) || Be(e)) && Be(e.then) && Be(e.catch), Zl = Object.prototype.toString, Jo = (e) => Zl.call(e), Br = (e) => Jo(e).slice(8, -1), ei = (e) => Jo(e) === "[object Object]", Pa = (e) => ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mo = /* @__PURE__ */ Ia(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Vr = /-\w/g, Wt = Mn(
  (e) => e.replace(Vr, (s) => s.slice(1).toUpperCase())
), Wr = /\B([A-Z])/g, zs = Mn(
  (e) => e.replace(Wr, "-$1").toLowerCase()
), Dn = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Hn = Mn(
  (e) => e ? `on${Dn(e)}` : ""
), As = (e, s) => !Object.is(e, s), fn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ti = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Ln = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Gr = (e) => {
  const s = ut(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let ol;
const On = () => ol || (ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gt(e) {
  if (Ue(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ut(n) ? qr(n) : Gt(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ut(e) || tt(e))
    return e;
}
const jr = /;(?![^(]*\))/g, Hr = /:([^]+)/, Kr = /\/\*[^]*?\*\//g;
function qr(e) {
  const s = {};
  return e.replace(Kr, "").split(jr).forEach((o) => {
    if (o) {
      const n = o.split(Hr);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Se(e) {
  let s = "";
  if (ut(e))
    s = e;
  else if (Ue(e))
    for (let o = 0; o < e.length; o++) {
      const n = Se(e[o]);
      n && (s += n + " ");
    }
  else if (tt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const Yr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jr = /* @__PURE__ */ Ia(Yr);
function si(e) {
  return !!e || e === "";
}
function Xr(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = Qs(e[n], s[n]);
  return o;
}
function Qs(e, s) {
  if (e === s) return !0;
  let o = sl(e), n = sl(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = Zt(e), n = Zt(s), o || n)
    return e === s;
  if (o = Ue(e), n = Ue(s), o || n)
    return o && n ? Xr(e, s) : !1;
  if (o = tt(e), n = tt(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const r in e) {
      const u = e.hasOwnProperty(r), d = s.hasOwnProperty(r);
      if (u && !d || !u && d || !Qs(e[r], s[r]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Ra(e, s) {
  return e.findIndex((o) => Qs(o, s));
}
const oi = (e) => !!(e && e.__v_isRef === !0), f = (e) => ut(e) ? e : e == null ? "" : Ue(e) || tt(e) && (e.toString === Zl || !Be(e.toString)) ? oi(e) ? f(e.value) : JSON.stringify(e, ni, 2) : String(e), ni = (e, s) => oi(s) ? ni(e, s.value) : co(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Kn(n, i) + " =>"] = l, o),
    {}
  )
} : yo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Kn(o))
} : Zt(s) ? Kn(s) : tt(s) && !Ue(s) && !ei(s) ? String(s) : s, Kn = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Zt(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dt;
class Qr {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Dt, !s && Dt && (this.index = (Dt.scopes || (Dt.scopes = [])).push(
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
      const o = Dt;
      try {
        return Dt = this, s();
      } finally {
        Dt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Dt, Dt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Dt = this.prevScope, this.prevScope = void 0);
  }
  stop(s) {
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
      if (!this.detached && this.parent && !s) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Zr() {
  return Dt;
}
let nt;
const qn = /* @__PURE__ */ new WeakSet();
class ai {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && Dt.active && Dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qn.has(this) && (qn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ii(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, nl(this), ri(this);
    const s = nt, o = Jt;
    nt = this, Jt = !0;
    try {
      return this.fn();
    } finally {
      ci(this), nt = s, Jt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        La(s);
      this.deps = this.depsTail = void 0, nl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    da(this) && this.run();
  }
  get dirty() {
    return da(this);
  }
}
let li = 0, Do, Lo;
function ii(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Lo, Lo = e;
    return;
  }
  e.next = Do, Do = e;
}
function Ma() {
  li++;
}
function Da() {
  if (--li > 0)
    return;
  if (Lo) {
    let s = Lo;
    for (Lo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Do; ) {
    let s = Do;
    for (Do = void 0; s; ) {
      const o = s.next;
      if (s.next = void 0, s.flags &= -9, s.flags & 1)
        try {
          s.trigger();
        } catch (n) {
          e || (e = n);
        }
      s = o;
    }
  }
  if (e) throw e;
}
function ri(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function ci(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), La(n), ec(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function da(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (ui(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function ui(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vo) || (e.globalVersion = Vo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !da(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = Jt;
  nt = e, Jt = !0;
  try {
    ri(e);
    const l = e.fn(e._value);
    (s.version === 0 || As(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, Jt = n, ci(e), e.flags &= -3;
  }
}
function La(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      La(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function ec(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Jt = !0;
const di = [];
function $s() {
  di.push(Jt), Jt = !1;
}
function Cs() {
  const e = di.pop();
  Jt = e === void 0 ? !0 : e;
}
function nl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = nt;
    nt = void 0;
    try {
      s();
    } finally {
      nt = o;
    }
  }
}
let Vo = 0;
class tc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Oa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!nt || !Jt || nt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== nt)
      o = this.activeLink = new tc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, fi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = nt.depsTail, o.nextDep = void 0, nt.depsTail.nextDep = o, nt.depsTail = o, nt.deps === o && (nt.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, Vo++, this.notify(s);
  }
  notify(s) {
    Ma();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Da();
    }
  }
}
function fi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        fi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const fa = /* @__PURE__ */ new WeakMap(), Js = Symbol(
  ""
), ma = Symbol(
  ""
), Wo = Symbol(
  ""
);
function bt(e, s, o) {
  if (Jt && nt) {
    let n = fa.get(e);
    n || fa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new Oa()), l.map = n, l.key = o), l.track();
  }
}
function bs(e, s, o, n, l, i) {
  const r = fa.get(e);
  if (!r) {
    Vo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Ma(), s === "clear")
    r.forEach(u);
  else {
    const d = Ue(e), m = d && Pa(o);
    if (d && o === "length") {
      const v = Number(n);
      r.forEach((h, w) => {
        (w === "length" || w === Wo || !Zt(w) && w >= v) && u(h);
      });
    } else
      switch ((o !== void 0 || r.has(void 0)) && u(r.get(o)), m && u(r.get(Wo)), s) {
        case "add":
          d ? m && u(r.get("length")) : (u(r.get(Js)), co(e) && u(r.get(ma)));
          break;
        case "delete":
          d || (u(r.get(Js)), co(e) && u(r.get(ma)));
          break;
        case "set":
          co(e) && u(r.get(Js));
          break;
      }
  }
  Da();
}
function so(e) {
  const s = Je(e);
  return s === e ? s : (bt(s, "iterate", Wo), Bt(e) ? s : s.map(es));
}
function An(e) {
  return bt(e = Je(e), "iterate", Wo), e;
}
function Ms(e, s) {
  return xs(e) ? Xs(e) ? po(es(s)) : po(s) : es(s);
}
const sc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, (e) => Ms(this, e));
  },
  concat(...e) {
    return so(this).concat(
      ...e.map((s) => Ue(s) ? so(s) : s)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = Ms(this, e[1]), e));
  },
  every(e, s) {
    return hs(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return hs(
      this,
      "filter",
      e,
      s,
      (o) => o.map((n) => Ms(this, n)),
      arguments
    );
  },
  find(e, s) {
    return hs(
      this,
      "find",
      e,
      s,
      (o) => Ms(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return hs(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return hs(
      this,
      "findLast",
      e,
      s,
      (o) => Ms(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return hs(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return hs(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return Jn(this, "includes", e);
  },
  indexOf(...e) {
    return Jn(this, "indexOf", e);
  },
  join(e) {
    return so(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jn(this, "lastIndexOf", e);
  },
  map(e, s) {
    return hs(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return xo(this, "pop");
  },
  push(...e) {
    return xo(this, "push", e);
  },
  reduce(e, ...s) {
    return al(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return al(this, "reduceRight", e, s);
  },
  shift() {
    return xo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return hs(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return xo(this, "splice", e);
  },
  toReversed() {
    return so(this).toReversed();
  },
  toSorted(e) {
    return so(this).toSorted(e);
  },
  toSpliced(...e) {
    return so(this).toSpliced(...e);
  },
  unshift(...e) {
    return xo(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", (e) => Ms(this, e));
  }
};
function Yn(e, s, o) {
  const n = An(e), l = n[s]();
  return n !== e && !Bt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const oc = Array.prototype;
function hs(e, s, o, n, l, i) {
  const r = An(e), u = r !== e && !Bt(e), d = r[s];
  if (d !== oc[s]) {
    const h = d.apply(e, i);
    return u ? es(h) : h;
  }
  let m = o;
  r !== e && (u ? m = function(h, w) {
    return o.call(this, Ms(e, h), w, e);
  } : o.length > 2 && (m = function(h, w) {
    return o.call(this, h, w, e);
  }));
  const v = d.call(r, m, n);
  return u && l ? l(v) : v;
}
function al(e, s, o, n) {
  const l = An(e);
  let i = o;
  return l !== e && (Bt(e) ? o.length > 3 && (i = function(r, u, d) {
    return o.call(this, r, u, d, e);
  }) : i = function(r, u, d) {
    return o.call(this, r, Ms(e, u), d, e);
  }), l[s](i, ...n);
}
function Jn(e, s, o) {
  const n = Je(e);
  bt(n, "iterate", Wo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Ua(o[0]) ? (o[0] = Je(o[0]), n[s](...o)) : l;
}
function xo(e, s, o = []) {
  $s(), Ma();
  const n = Je(e)[s].apply(e, o);
  return Da(), Cs(), n;
}
const nc = /* @__PURE__ */ Ia("__proto__,__v_isRef,__isVue"), mi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zt)
);
function ac(e) {
  Zt(e) || (e = String(e));
  const s = Je(this);
  return bt(s, "has", e), s.hasOwnProperty(e);
}
class vi {
  constructor(s = !1, o = !1) {
    this._isReadonly = s, this._isShallow = o;
  }
  get(s, o, n) {
    if (o === "__v_skip") return s.__v_skip;
    const l = this._isReadonly, i = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return i;
    if (o === "__v_raw")
      return n === (l ? i ? pc : yi : i ? hi : gi).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const r = Ue(s);
    if (!l) {
      let d;
      if (r && (d = sc[o]))
        return d;
      if (o === "hasOwnProperty")
        return ac;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(s) ? s : n
    );
    if ((Zt(o) ? mi.has(o) : nc(o)) || (l || bt(s, "get", o), i))
      return u;
    if ($t(u)) {
      const d = r && Pa(o) ? u : u.value;
      return l && tt(d) ? wn(d) : d;
    }
    return tt(u) ? l ? wn(u) : Fs(u) : u;
  }
}
class pi extends vi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const r = Ue(s) && Pa(o);
    if (!this._isShallow) {
      const m = xs(i);
      if (!Bt(n) && !xs(n) && (i = Je(i), n = Je(n)), !r && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const u = r ? Number(o) < s.length : Ze(s, o), d = Reflect.set(
      s,
      o,
      n,
      $t(s) ? s : l
    );
    return s === Je(l) && (u ? As(n, i) && bs(s, "set", o, n) : bs(s, "add", o, n)), d;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && bs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!Zt(o) || !mi.has(o)) && bt(s, "has", o), n;
  }
  ownKeys(s) {
    return bt(
      s,
      "iterate",
      Ue(s) ? "length" : Js
    ), Reflect.ownKeys(s);
  }
}
class lc extends vi {
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
const ic = /* @__PURE__ */ new pi(), rc = /* @__PURE__ */ new lc(), cc = /* @__PURE__ */ new pi(!0);
const va = (e) => e, sn = (e) => Reflect.getPrototypeOf(e);
function uc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Je(l), r = co(i), u = e === "entries" || e === Symbol.iterator && r, d = e === "keys" && r, m = l[e](...n), v = o ? va : s ? po : es;
    return !s && bt(
      i,
      "iterate",
      d ? ma : Js
    ), {
      // iterator protocol
      next() {
        const { value: h, done: w } = m.next();
        return w ? { value: h, done: w } : {
          value: u ? [v(h[0]), v(h[1])] : v(h),
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
function on(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dc(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, r = Je(i), u = Je(l);
      e || (As(l, u) && bt(r, "get", l), bt(r, "get", u));
      const { has: d } = sn(r), m = s ? va : e ? po : es;
      if (d.call(r, l))
        return m(i.get(l));
      if (d.call(r, u))
        return m(i.get(u));
      i !== r && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && bt(Je(l), "iterate", Js), l.size;
    },
    has(l) {
      const i = this.__v_raw, r = Je(i), u = Je(l);
      return e || (As(l, u) && bt(r, "has", l), bt(r, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const r = this, u = r.__v_raw, d = Je(u), m = s ? va : e ? po : es;
      return !e && bt(d, "iterate", Js), u.forEach((v, h) => l.call(i, m(v), m(h), r));
    }
  };
  return pt(
    o,
    e ? {
      add: on("add"),
      set: on("set"),
      delete: on("delete"),
      clear: on("clear")
    } : {
      add(l) {
        !s && !Bt(l) && !xs(l) && (l = Je(l));
        const i = Je(this);
        return sn(i).has.call(i, l) || (i.add(l), bs(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Bt(i) && !xs(i) && (i = Je(i));
        const r = Je(this), { has: u, get: d } = sn(r);
        let m = u.call(r, l);
        m || (l = Je(l), m = u.call(r, l));
        const v = d.call(r, l);
        return r.set(l, i), m ? As(i, v) && bs(r, "set", l, i) : bs(r, "add", l, i), this;
      },
      delete(l) {
        const i = Je(this), { has: r, get: u } = sn(i);
        let d = r.call(i, l);
        d || (l = Je(l), d = r.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && bs(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Je(this), i = l.size !== 0, r = l.clear();
        return i && bs(
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
    o[l] = uc(l, e, s);
  }), o;
}
function Aa(e, s) {
  const o = dc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const fc = {
  get: /* @__PURE__ */ Aa(!1, !1)
}, mc = {
  get: /* @__PURE__ */ Aa(!1, !0)
}, vc = {
  get: /* @__PURE__ */ Aa(!0, !1)
};
const gi = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), pc = /* @__PURE__ */ new WeakMap();
function gc(e) {
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
function hc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gc(Br(e));
}
function Fs(e) {
  return xs(e) ? e : Na(
    e,
    !1,
    ic,
    fc,
    gi
  );
}
function yc(e) {
  return Na(
    e,
    !1,
    cc,
    mc,
    hi
  );
}
function wn(e) {
  return Na(
    e,
    !0,
    rc,
    vc,
    yi
  );
}
function Na(e, s, o, n, l) {
  if (!tt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = hc(e);
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
function Xs(e) {
  return xs(e) ? Xs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xs(e) {
  return !!(e && e.__v_isReadonly);
}
function Bt(e) {
  return !!(e && e.__v_isShallow);
}
function Ua(e) {
  return e ? !!e.__v_raw : !1;
}
function Je(e) {
  const s = e && e.__v_raw;
  return s ? Je(s) : e;
}
function wc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && ti(e, "__v_skip", !0), e;
}
const es = (e) => tt(e) ? Fs(e) : e, po = (e) => tt(e) ? wn(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return bc(e, !1);
}
function bc(e, s) {
  return $t(e) ? e : new _c(e, s);
}
class _c {
  constructor(s, o) {
    this.dep = new Oa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Je(s), this._value = o ? s : es(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Bt(s) || xs(s);
    s = n ? s : Je(s), As(s, o) && (this._rawValue = s, this._value = n ? s : es(s), this.dep.trigger());
  }
}
function Fe(e) {
  return $t(e) ? e.value : e;
}
const kc = {
  get: (e, s, o) => s === "__v_raw" ? e : Fe(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function wi(e) {
  return Xs(e) ? e : new Proxy(e, kc);
}
class $c {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Oa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    nt !== this)
      return ii(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return ui(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Cc(e, s, o = !1) {
  let n, l;
  return Be(e) ? n = e : (n = e.get, l = e.set), new $c(n, l, o);
}
const nn = {}, bn = /* @__PURE__ */ new WeakMap();
let qs;
function xc(e, s = !1, o = qs) {
  if (o) {
    let n = bn.get(o);
    n || bn.set(o, n = []), n.push(e);
  }
}
function Sc(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: r, augmentJob: u, call: d } = o, m = (x) => l ? x : Bt(x) || l === !1 || l === 0 ? _s(x, 1) : _s(x);
  let v, h, w, p, _ = !1, S = !1;
  if ($t(e) ? (h = () => e.value, _ = Bt(e)) : Xs(e) ? (h = () => m(e), _ = !0) : Ue(e) ? (S = !0, _ = e.some((x) => Xs(x) || Bt(x)), h = () => e.map((x) => {
    if ($t(x))
      return x.value;
    if (Xs(x))
      return m(x);
    if (Be(x))
      return d ? d(x, 2) : x();
  })) : Be(e) ? s ? h = d ? () => d(e, 2) : e : h = () => {
    if (w) {
      $s();
      try {
        w();
      } finally {
        Cs();
      }
    }
    const x = qs;
    qs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      qs = x;
    }
  } : h = ms, s && l) {
    const x = h, q = l === !0 ? 1 / 0 : l;
    h = () => _s(x(), q);
  }
  const $ = Zr(), P = () => {
    v.stop(), $ && $.active && Ta($.effects, v);
  };
  if (i && s) {
    const x = s;
    s = (...q) => {
      x(...q), P();
    };
  }
  let O = S ? new Array(e.length).fill(nn) : nn;
  const T = (x) => {
    if (!(!(v.flags & 1) || !v.dirty && !x))
      if (s) {
        const q = v.run();
        if (l || _ || (S ? q.some((B, A) => As(B, O[A])) : As(q, O))) {
          w && w();
          const B = qs;
          qs = v;
          try {
            const A = [
              q,
              // pass undefined as the old value when it's changed for the first time
              O === nn ? void 0 : S && O[0] === nn ? [] : O,
              p
            ];
            O = q, d ? d(s, 3, A) : (
              // @ts-expect-error
              s(...A)
            );
          } finally {
            qs = B;
          }
        }
      } else
        v.run();
  };
  return u && u(T), v = new ai(h), v.scheduler = r ? () => r(T, !1) : T, p = (x) => xc(x, !1, v), w = v.onStop = () => {
    const x = bn.get(v);
    if (x) {
      if (d)
        d(x, 4);
      else
        for (const q of x) q();
      bn.delete(v);
    }
  }, s ? n ? T(!0) : O = v.run() : r ? r(T.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function _s(e, s = 1 / 0, o) {
  if (s <= 0 || !tt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    _s(e.value, s, o);
  else if (Ue(e))
    for (let n = 0; n < e.length; n++)
      _s(e[n], s, o);
  else if (yo(e) || co(e))
    e.forEach((n) => {
      _s(n, s, o);
    });
  else if (ei(e)) {
    for (const n in e)
      _s(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && _s(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xo(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    Nn(l, s, o);
  }
}
function ts(e, s, o, n) {
  if (Be(e)) {
    const l = Xo(e, s, o, n);
    return l && Ql(l) && l.catch((i) => {
      Nn(i, s, o);
    }), l;
  }
  if (Ue(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(ts(e[i], s, o, n));
    return l;
  }
}
function Nn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = s && s.appContext.config || st;
  if (s) {
    let u = s.parent;
    const d = s.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let h = 0; h < v.length; h++)
          if (v[h](e, d, m) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      $s(), Xo(i, null, 10, [
        e,
        d,
        m
      ]), Cs();
      return;
    }
  }
  Ic(e, o, l, n, r);
}
function Ic(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let us = -1;
const uo = [];
let Ds = null, ao = 0;
const bi = /* @__PURE__ */ Promise.resolve();
let _n = null;
function Qo(e) {
  const s = _n || bi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Ec(e) {
  let s = us + 1, o = It.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = It[n], i = Go(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function za(e) {
  if (!(e.flags & 1)) {
    const s = Go(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Go(o) ? It.push(e) : It.splice(Ec(s), 0, e), e.flags |= 1, _i();
  }
}
function _i() {
  _n || (_n = bi.then($i));
}
function Tc(e) {
  Ue(e) ? uo.push(...e) : Ds && e.id === -1 ? Ds.splice(ao + 1, 0, e) : e.flags & 1 || (uo.push(e), e.flags |= 1), _i();
}
function ll(e, s, o = us + 1) {
  for (; o < It.length; o++) {
    const n = It[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      It.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ki(e) {
  if (uo.length) {
    const s = [...new Set(uo)].sort(
      (o, n) => Go(o) - Go(n)
    );
    if (uo.length = 0, Ds) {
      Ds.push(...s);
      return;
    }
    for (Ds = s, ao = 0; ao < Ds.length; ao++) {
      const o = Ds[ao];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Ds = null, ao = 0;
  }
}
const Go = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $i(e) {
  try {
    for (us = 0; us < It.length; us++) {
      const s = It[us];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), Xo(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; us < It.length; us++) {
      const s = It[us];
      s && (s.flags &= -2);
    }
    us = -1, It.length = 0, ki(), _n = null, (It.length || uo.length) && $i();
  }
}
let yt = null, Ci = null;
function kn(e) {
  const s = yt;
  return yt = e, Ci = e && e.type.__scopeId || null, s;
}
function g(e, s = yt, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && xn(-1);
    const i = kn(s);
    let r;
    try {
      r = e(...l);
    } finally {
      kn(i), n._d && xn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (yt === null)
    return e;
  const o = Vn(yt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, r, u, d = st] = s[l];
    i && (Be(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && _s(r), n.push({
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
function Gs(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let r = 0; r < l.length; r++) {
    const u = l[r];
    i && (u.oldValue = i[r].value);
    let d = u.dir[n];
    d && ($s(), ts(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Cs());
  }
}
const xi = Symbol("_vte"), Si = (e) => e.__isTeleport, Oo = (e) => e && (e.disabled || e.disabled === ""), il = (e) => e && (e.defer || e.defer === ""), rl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, cl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, pa = (e, s) => {
  const o = e && e.to;
  return ut(o) ? s ? s(o) : null : o;
}, Ii = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, r, u, d, m) {
    const {
      mc: v,
      pc: h,
      pbc: w,
      o: { insert: p, querySelector: _, createText: S, createComment: $ }
    } = m, P = Oo(s.props);
    let { shapeFlag: O, children: T, dynamicChildren: x } = s;
    if (e == null) {
      const q = s.el = S(""), B = s.anchor = S("");
      p(q, o, n), p(B, o, n);
      const A = (E, L) => {
        O & 16 && v(
          T,
          E,
          L,
          l,
          i,
          r,
          u,
          d
        );
      }, I = () => {
        const E = s.target = pa(s.props, _), L = Ei(E, s, S, p);
        E && (r !== "svg" && rl(E) ? r = "svg" : r !== "mathml" && cl(E) && (r = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), P || (A(E, L), mn(s, !1)));
      };
      P && (A(o, B), mn(s, !0)), il(s.props) ? (s.el.__isMounted = !1, St(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (il(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Ii.process(
            e,
            s,
            o,
            n,
            l,
            i,
            r,
            u,
            d,
            m
          );
        }, i);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const q = s.anchor = e.anchor, B = s.target = e.target, A = s.targetAnchor = e.targetAnchor, I = Oo(e.props), E = I ? o : B, L = I ? q : A;
      if (r === "svg" || rl(B) ? r = "svg" : (r === "mathml" || cl(B)) && (r = "mathml"), x ? (w(
        e.dynamicChildren,
        x,
        E,
        l,
        i,
        r,
        u
      ), Ga(e, s, !0)) : d || h(
        e,
        s,
        E,
        L,
        l,
        i,
        r,
        u,
        !1
      ), P)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : an(
          s,
          o,
          q,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const re = s.target = pa(
          s.props,
          _
        );
        re && an(
          s,
          re,
          null,
          m,
          0
        );
      } else I && an(
        s,
        B,
        A,
        m,
        1
      );
      mn(s, P);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: r,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: h,
      props: w
    } = e;
    if (h && (l(m), l(v)), i && l(d), r & 16) {
      const p = i || !Oo(w);
      for (let _ = 0; _ < u.length; _++) {
        const S = u[_];
        n(
          S,
          s,
          o,
          p,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: an,
  hydrate: Pc
};
function an(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: r, anchor: u, shapeFlag: d, children: m, props: v } = e, h = i === 2;
  if (h && n(r, s, o), (!h || Oo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  h && n(u, s, o);
}
function Pc(e, s, o, n, l, i, {
  o: { nextSibling: r, parentNode: u, querySelector: d, insert: m, createText: v }
}, h) {
  function w(S, $, P, O) {
    $.anchor = h(
      r(S),
      $,
      u(S),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = O;
  }
  const p = s.target = pa(
    s.props,
    d
  ), _ = Oo(s.props);
  if (p) {
    const S = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          S,
          S && r(S)
        );
      else {
        s.anchor = r(e);
        let $ = S;
        for (; $; ) {
          if ($ && $.nodeType === 8) {
            if ($.data === "teleport start anchor")
              s.targetStart = $;
            else if ($.data === "teleport anchor") {
              s.targetAnchor = $, p._lpa = s.targetAnchor && r(s.targetAnchor);
              break;
            }
          }
          $ = r($);
        }
        s.targetAnchor || Ei(p, s, v, m), h(
          S && r(S),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    mn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, r(e));
  return s.anchor && r(s.anchor);
}
const wt = Ii;
function mn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Ei(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[xi] = i, e && (n(l, e), n(i, e)), i;
}
const ws = Symbol("_leaveCb"), ln = Symbol("_enterCb");
function Ti() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return et(() => {
    e.isMounted = !0;
  }), Ni(() => {
    e.isUnmounting = !0;
  }), e;
}
const zt = [Function, Array], Pi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: zt,
  onEnter: zt,
  onAfterEnter: zt,
  onEnterCancelled: zt,
  // leave
  onBeforeLeave: zt,
  onLeave: zt,
  onAfterLeave: zt,
  onLeaveCancelled: zt,
  // appear
  onBeforeAppear: zt,
  onAppear: zt,
  onAfterAppear: zt,
  onAppearCancelled: zt
}, Ri = (e) => {
  const s = e.subTree;
  return s.component ? Ri(s.component) : s;
}, Rc = {
  name: "BaseTransition",
  props: Pi,
  setup(e, { slots: s }) {
    const o = Ha(), n = Ti();
    return () => {
      const l = s.default && Fa(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Mi(l), r = Je(e), { mode: u } = r;
      if (n.isLeaving)
        return Xn(i);
      const d = ul(i);
      if (!d)
        return Xn(i);
      let m = jo(
        d,
        r,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (h) => m = h
      );
      d.type !== _t && Zs(d, m);
      let v = o.subTree && ul(o.subTree);
      if (v && v.type !== _t && !Ys(v, d) && Ri(o).type !== _t) {
        let h = jo(
          v,
          r,
          n,
          o
        );
        if (Zs(v, h), u === "out-in" && d.type !== _t)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete h.afterLeave, v = void 0;
          }, Xn(i);
        u === "in-out" && d.type !== _t ? h.delayLeave = (w, p, _) => {
          const S = Di(
            n,
            v
          );
          S[String(v.key)] = v, w[ws] = () => {
            p(), w[ws] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return i;
    };
  }
};
function Mi(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== _t) {
        s = o;
        break;
      }
  }
  return s;
}
const Mc = Rc;
function Di(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function jo(e, s, o, n, l) {
  const {
    appear: i,
    mode: r,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: h,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: S,
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: O,
    onAppearCancelled: T
  } = s, x = String(e.key), q = Di(o, e), B = (E, L) => {
    E && ts(
      E,
      n,
      9,
      L
    );
  }, A = (E, L) => {
    const re = L[1];
    B(E, L), Ue(E) ? E.every((Y) => Y.length <= 1) && re() : E.length <= 1 && re();
  }, I = {
    mode: r,
    persisted: u,
    beforeEnter(E) {
      let L = d;
      if (!o.isMounted)
        if (i)
          L = $ || d;
        else
          return;
      E[ws] && E[ws](
        !0
        /* cancelled */
      );
      const re = q[x];
      re && Ys(e, re) && re.el[ws] && re.el[ws](), B(L, [E]);
    },
    enter(E) {
      let L = m, re = v, Y = h;
      if (!o.isMounted)
        if (i)
          L = P || m, re = O || v, Y = T || h;
        else
          return;
      let H = !1;
      const te = E[ln] = (Q) => {
        H || (H = !0, Q ? B(Y, [E]) : B(re, [E]), I.delayedLeave && I.delayedLeave(), E[ln] = void 0);
      };
      L ? A(L, [E, te]) : te();
    },
    leave(E, L) {
      const re = String(e.key);
      if (E[ln] && E[ln](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return L();
      B(w, [E]);
      let Y = !1;
      const H = E[ws] = (te) => {
        Y || (Y = !0, L(), te ? B(S, [E]) : B(_, [E]), E[ws] = void 0, q[re] === e && delete q[re]);
      };
      q[re] = e, p ? A(p, [E, H]) : H();
    },
    clone(E) {
      const L = jo(
        E,
        s,
        o,
        n,
        l
      );
      return l && l(L), L;
    }
  };
  return I;
}
function Xn(e) {
  if (Un(e))
    return e = Ns(e), e.children = null, e;
}
function ul(e) {
  if (!Un(e))
    return Si(e.type) && e.children ? Mi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Be(o.default))
      return o.default();
  }
}
function Zs(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, Zs(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Fa(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const u = o == null ? r.key : String(o) + String(r.key != null ? r.key : i);
    r.type === j ? (r.patchFlag & 128 && l++, n = n.concat(
      Fa(r.children, s, u)
    )) : (s || r.type !== _t) && n.push(u != null ? Ns(r, { key: u }) : r);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function fe(e, s) {
  return Be(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Li(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const $n = /* @__PURE__ */ new WeakMap();
function Ao(e, s, o, n, l = !1) {
  if (Ue(e)) {
    e.forEach(
      (_, S) => Ao(
        _,
        s && (Ue(s) ? s[S] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (fo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ao(e, s, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Vn(n.component) : n.el, r = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === st ? u.refs = {} : u.refs, h = u.setupState, w = Je(h), p = h === st ? Xl : (_) => Ze(w, _);
  if (m != null && m !== d) {
    if (dl(s), ut(m))
      v[m] = null, p(m) && (h[m] = null);
    else if ($t(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (Be(d))
    Xo(d, u, 12, [r, v]);
  else {
    const _ = ut(d), S = $t(d);
    if (_ || S) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(d) ? h[d] : v[d] : d.value;
          if (l)
            Ue(P) && Ta(P, i);
          else if (Ue(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[d] = [i], p(d) && (h[d] = v[d]);
          else {
            const O = [i];
            d.value = O, e.k && (v[e.k] = O);
          }
        } else _ ? (v[d] = r, p(d) && (h[d] = r)) : S && (d.value = r, e.k && (v[e.k] = r));
      };
      if (r) {
        const P = () => {
          $(), $n.delete(e);
        };
        P.id = -1, $n.set(e, P), St(P, o);
      } else
        dl(e), $();
    }
  }
}
function dl(e) {
  const s = $n.get(e);
  s && (s.flags |= 8, $n.delete(e));
}
On().requestIdleCallback;
On().cancelIdleCallback;
const fo = (e) => !!e.type.__asyncLoader, Un = (e) => e.type.__isKeepAlive;
function Dc(e, s) {
  Oi(e, "a", s);
}
function Lc(e, s) {
  Oi(e, "da", s);
}
function Oi(e, s, o = kt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (zn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Un(l.parent.vnode) && Oc(n, s, o, l), l = l.parent;
  }
}
function Oc(e, s, o, n) {
  const l = zn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  wo(() => {
    Ta(n[s], l);
  }, o);
}
function zn(e, s, o = kt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...r) => {
      $s();
      const u = Zo(o), d = ts(s, o, e, r);
      return u(), Cs(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ss = (e) => (s, o = kt) => {
  (!qo || e === "sp") && zn(e, (...n) => s(...n), o);
}, Ac = Ss("bm"), et = Ss("m"), Nc = Ss(
  "bu"
), Ai = Ss("u"), Ni = Ss(
  "bum"
), wo = Ss("um"), Uc = Ss(
  "sp"
), zc = Ss("rtg"), Fc = Ss("rtc");
function Bc(e, s = kt) {
  zn("ec", e, s);
}
const Vc = "components", Ui = Symbol.for("v-ndc");
function Ba(e) {
  return ut(e) ? Wc(Vc, e, !1) || e : e || Ui;
}
function Wc(e, s, o = !0, n = !1) {
  const l = yt || kt;
  if (l) {
    const i = l.type;
    {
      const u = Ru(
        i,
        !1
      );
      if (u && (u === s || u === Wt(s) || u === Dn(Wt(s))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      fl(l[e] || i[e], s) || // global registration
      fl(l.appContext[e], s)
    );
    return !r && n ? i : r;
  }
}
function fl(e, s) {
  return e && (e[s] || e[Wt(s)] || e[Dn(Wt(s))]);
}
function pe(e, s, o, n) {
  let l;
  const i = o, r = Ue(e);
  if (r || ut(e)) {
    const u = r && Xs(e);
    let d = !1, m = !1;
    u && (d = !Bt(e), m = xs(e), e = An(e)), l = new Array(e.length);
    for (let v = 0, h = e.length; v < h; v++)
      l[v] = s(
        d ? m ? po(es(e[v])) : es(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, i);
  } else if (tt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => s(u, d, void 0, i)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, m = u.length; d < m; d++) {
        const v = u[d];
        l[d] = s(e[v], v, d, i);
      }
    }
  else
    l = [];
  return l;
}
function eo(e, s) {
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (Ue(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function He(e, s, o = {}, n, l) {
  if (yt.ce || yt.parent && fo(yt.parent) && yt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), R(
      j,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const r = i && zi(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, d = R(
    j,
    {
      key: (u && !Zt(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!r && n ? "_fb" : "")
    },
    r || (n ? n() : []),
    r && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function zi(e) {
  return e.some((s) => Ko(s) ? !(s.type === _t || s.type === j && !zi(s.children)) : !0) ? e : null;
}
const ga = (e) => e ? nr(e) ? Vn(e) : ga(e.parent) : null, No = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ga(e.parent),
    $root: (e) => ga(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      za(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qo.bind(e.proxy)),
    $watch: (e) => tu.bind(e)
  })
), Qn = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), Gc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: r, type: u, appContext: d } = e;
    if (s[0] !== "$") {
      const w = r[s];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[s];
          case 2:
            return l[s];
          case 4:
            return o[s];
          case 3:
            return i[s];
        }
      else {
        if (Qn(n, s))
          return r[s] = 1, n[s];
        if (l !== st && Ze(l, s))
          return r[s] = 2, l[s];
        if (Ze(i, s))
          return r[s] = 3, i[s];
        if (o !== st && Ze(o, s))
          return r[s] = 4, o[s];
        ha && (r[s] = 0);
      }
    }
    const m = No[s];
    let v, h;
    if (m)
      return s === "$attrs" && bt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== st && Ze(o, s))
      return r[s] = 4, o[s];
    if (
      // global properties
      h = d.config.globalProperties, Ze(h, s)
    )
      return h[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return Qn(l, s) ? (l[s] = o, !0) : n !== st && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: r }
  }, u) {
    let d;
    return !!(o[u] || e !== st && u[0] !== "$" && Ze(e, u) || Qn(s, u) || Ze(i, u) || Ze(n, u) || Ze(No, u) || Ze(l.config.globalProperties, u) || (d = r.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Ze(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function ml(e) {
  return Ue(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let ha = !0;
function jc(e) {
  const s = Bi(e), o = e.proxy, n = e.ctx;
  ha = !1, s.beforeCreate && vl(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: i,
    methods: r,
    watch: u,
    provide: d,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: h,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: S,
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: O,
    destroyed: T,
    unmounted: x,
    render: q,
    renderTracked: B,
    renderTriggered: A,
    errorCaptured: I,
    serverPrefetch: E,
    // public API
    expose: L,
    inheritAttrs: re,
    // assets
    components: Y,
    directives: H,
    filters: te
  } = s;
  if (m && Hc(m, n, null), r)
    for (const U in r) {
      const M = r[U];
      Be(M) && (n[U] = M.bind(o));
    }
  if (l) {
    const U = l.call(o, o);
    tt(U) && (e.data = Fs(U));
  }
  if (ha = !0, i)
    for (const U in i) {
      const M = i[U], we = Be(M) ? M.bind(o, o) : Be(M.get) ? M.get.bind(o, o) : ms, ve = !Be(M) && Be(M.set) ? M.set.bind(o) : ms, Ie = F({
        get: we,
        set: ve
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (Re) => Ie.value = Re
      });
    }
  if (u)
    for (const U in u)
      Fi(u[U], n, o, U);
  if (d) {
    const U = Be(d) ? d.call(o) : d;
    Reflect.ownKeys(U).forEach((M) => {
      Qc(M, U[M]);
    });
  }
  v && vl(v, e, "c");
  function N(U, M) {
    Ue(M) ? M.forEach((we) => U(we.bind(o))) : M && U(M.bind(o));
  }
  if (N(Ac, h), N(et, w), N(Nc, p), N(Ai, _), N(Dc, S), N(Lc, $), N(Bc, I), N(Fc, B), N(zc, A), N(Ni, O), N(wo, x), N(Uc, E), Ue(L))
    if (L.length) {
      const U = e.exposed || (e.exposed = {});
      L.forEach((M) => {
        Object.defineProperty(U, M, {
          get: () => o[M],
          set: (we) => o[M] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === ms && (e.render = q), re != null && (e.inheritAttrs = re), Y && (e.components = Y), H && (e.directives = H), E && Li(e);
}
function Hc(e, s, o = ms) {
  Ue(e) && (e = ya(e));
  for (const n in e) {
    const l = e[n];
    let i;
    tt(l) ? "default" in l ? i = vn(
      l.from || n,
      l.default,
      !0
    ) : i = vn(l.from || n) : i = vn(l), $t(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : s[n] = i;
  }
}
function vl(e, s, o) {
  ts(
    Ue(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Fi(e, s, o, n) {
  let l = n.includes(".") ? Gi(o, n) : () => o[n];
  if (ut(e)) {
    const i = s[e];
    Be(i) && Ct(l, i);
  } else if (Be(e))
    Ct(l, e.bind(o));
  else if (tt(e))
    if (Ue(e))
      e.forEach((i) => Fi(i, s, o, n));
    else {
      const i = Be(e.handler) ? e.handler.bind(o) : s[e.handler];
      Be(i) && Ct(l, i, e);
    }
}
function Bi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, u = i.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (m) => Cn(d, m, r, !0)
  ), Cn(d, s, r)), tt(s) && i.set(s, d), d;
}
function Cn(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Cn(e, i, o, !0), l && l.forEach(
    (r) => Cn(e, r, o, !0)
  );
  for (const r in s)
    if (!(n && r === "expose")) {
      const u = Kc[r] || o && o[r];
      e[r] = u ? u(e[r], s[r]) : s[r];
    }
  return e;
}
const Kc = {
  data: pl,
  props: gl,
  emits: gl,
  // objects
  methods: Ro,
  computed: Ro,
  // lifecycle
  beforeCreate: xt,
  created: xt,
  beforeMount: xt,
  mounted: xt,
  beforeUpdate: xt,
  updated: xt,
  beforeDestroy: xt,
  beforeUnmount: xt,
  destroyed: xt,
  unmounted: xt,
  activated: xt,
  deactivated: xt,
  errorCaptured: xt,
  serverPrefetch: xt,
  // assets
  components: Ro,
  directives: Ro,
  // watch
  watch: Yc,
  // provide / inject
  provide: pl,
  inject: qc
};
function pl(e, s) {
  return s ? e ? function() {
    return pt(
      Be(e) ? e.call(this, this) : e,
      Be(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function qc(e, s) {
  return Ro(ya(e), ya(s));
}
function ya(e) {
  if (Ue(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function xt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Ro(e, s) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function gl(e, s) {
  return e ? Ue(e) && Ue(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    ml(e),
    ml(s ?? {})
  ) : s;
}
function Yc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = pt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = xt(e[n], s[n]);
  return o;
}
function Vi() {
  return {
    app: null,
    config: {
      isNativeTag: Xl,
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
let Jc = 0;
function Xc(e, s) {
  return function(n, l = null) {
    Be(n) || (n = pt({}, n)), l != null && !tt(l) && (l = null);
    const i = Vi(), r = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: Jc++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Du,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...h) {
        return r.has(v) || (v && Be(v.install) ? (r.add(v), v.install(m, ...h)) : Be(v) && (r.add(v), v(m, ...h))), m;
      },
      mixin(v) {
        return i.mixins.includes(v) || i.mixins.push(v), m;
      },
      component(v, h) {
        return h ? (i.components[v] = h, m) : i.components[v];
      },
      directive(v, h) {
        return h ? (i.directives[v] = h, m) : i.directives[v];
      },
      mount(v, h, w) {
        if (!d) {
          const p = m._ceVNode || C(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Vn(p.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (ts(
          u,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, h) {
        return i.provides[v] = h, m;
      },
      runWithContext(v) {
        const h = mo;
        mo = m;
        try {
          return v();
        } finally {
          mo = h;
        }
      }
    };
    return m;
  };
}
let mo = null;
function Qc(e, s) {
  if (kt) {
    let o = kt.provides;
    const n = kt.parent && kt.parent.provides;
    n === o && (o = kt.provides = Object.create(n)), o[e] = s;
  }
}
function vn(e, s, o = !1) {
  const n = Ha();
  if (n || mo) {
    let l = mo ? mo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Be(s) ? s.call(n && n.proxy) : s;
  }
}
const Zc = Symbol.for("v-scx"), eu = () => vn(Zc);
function Ct(e, s, o) {
  return Wi(e, s, o);
}
function Wi(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: r } = o, u = pt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (qo) {
    if (i === "sync") {
      const p = eu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = ms, p.resume = ms, p.pause = ms, p;
    }
  }
  const v = kt;
  u.call = (p, _, S) => ts(p, v, _, S);
  let h = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (h = !0, u.scheduler = (p, _) => {
    _ ? p() : za(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), h && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Sc(e, s, u);
  return qo && (m ? m.push(w) : d && w()), w;
}
function tu(e, s, o) {
  const n = this.proxy, l = ut(e) ? e.includes(".") ? Gi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Be(s) ? i = s : (i = s.handler, o = s);
  const r = Zo(this), u = Wi(l, i.bind(n), o);
  return r(), u;
}
function Gi(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const su = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Wt(s)}Modifiers`] || e[`${zs(s)}Modifiers`];
function ou(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), r = i && su(n, s.slice(7));
  r && (r.trim && (l = o.map((v) => ut(v) ? v.trim() : v)), r.number && (l = o.map(Ln)));
  let u, d = n[u = Hn(s)] || // also try camelCase event handler (#2249)
  n[u = Hn(Wt(s))];
  !d && i && (d = n[u = Hn(zs(s))]), d && ts(
    d,
    e,
    6,
    l
  );
  const m = n[u + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ts(
      m,
      e,
      6,
      l
    );
  }
}
const nu = /* @__PURE__ */ new WeakMap();
function ji(e, s, o = !1) {
  const n = o ? nu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let r = {}, u = !1;
  if (!Be(e)) {
    const d = (m) => {
      const v = ji(m, s, !0);
      v && (u = !0, pt(r, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (tt(e) && n.set(e, null), null) : (Ue(i) ? i.forEach((d) => r[d] = null) : pt(r, i), tt(e) && n.set(e, r), r);
}
function Fn(e, s) {
  return !e || !Rn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, zs(s)) || Ze(e, s));
}
function hl(e) {
  const {
    type: s,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [i],
    slots: r,
    attrs: u,
    emit: d,
    render: m,
    renderCache: v,
    props: h,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: S
  } = e, $ = kn(e);
  let P, O;
  try {
    if (o.shapeFlag & 4) {
      const x = l || n, q = x;
      P = fs(
        m.call(
          q,
          x,
          v,
          h,
          p,
          w,
          _
        )
      ), O = u;
    } else {
      const x = s;
      P = fs(
        x.length > 1 ? x(
          h,
          { attrs: u, slots: r, emit: d }
        ) : x(
          h,
          null
        )
      ), O = s.props ? u : au(u);
    }
  } catch (x) {
    Uo.length = 0, Nn(x, e, 1), P = C(_t);
  }
  let T = P;
  if (O && S !== !1) {
    const x = Object.keys(O), { shapeFlag: q } = T;
    x.length && q & 7 && (i && x.some(Ea) && (O = lu(
      O,
      i
    )), T = Ns(T, O, !1, !0));
  }
  return o.dirs && (T = Ns(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && Zs(T, o.transition), P = T, kn($), P;
}
const au = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Rn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, lu = (e, s) => {
  const o = {};
  for (const n in e)
    (!Ea(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function iu(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: r, children: u, patchFlag: d } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? yl(n, r, m) : !!r;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        const w = v[h];
        if (r[w] !== n[w] && !Fn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === r ? !1 : n ? r ? yl(n, r, m) : !0 : !!r;
  return !1;
}
function yl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !Fn(o, i))
      return !0;
  }
  return !1;
}
function ru({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Hi = {}, Ki = () => Object.create(Hi), qi = (e) => Object.getPrototypeOf(e) === Hi;
function cu(e, s, o, n = !1) {
  const l = {}, i = Ki();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yi(e, s, l, i);
  for (const r in e.propsOptions[0])
    r in l || (l[r] = void 0);
  o ? e.props = n ? l : yc(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function uu(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, u = Je(l), [d] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const v = e.vnode.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        let w = v[h];
        if (Fn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = Wt(w);
            l[_] = wa(
              d,
              u,
              _,
              p,
              e,
              !1
            );
          }
        else
          p !== i[w] && (i[w] = p, m = !0);
      }
    }
  } else {
    Yi(e, s, l, i) && (m = !0);
    let v;
    for (const h in u)
      (!s || // for camelCase
      !Ze(s, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = zs(h)) === h || !Ze(s, v))) && (d ? o && // for camelCase
      (o[h] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[h] = wa(
        d,
        u,
        h,
        void 0,
        e,
        !0
      )) : delete l[h]);
    if (i !== u)
      for (const h in i)
        (!s || !Ze(s, h)) && (delete i[h], m = !0);
  }
  m && bs(e.attrs, "set", "");
}
function Yi(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let r = !1, u;
  if (s)
    for (let d in s) {
      if (Mo(d))
        continue;
      const m = s[d];
      let v;
      l && Ze(l, v = Wt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Fn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, r = !0);
    }
  if (i) {
    const d = Je(o), m = u || st;
    for (let v = 0; v < i.length; v++) {
      const h = i[v];
      o[h] = wa(
        l,
        d,
        h,
        m[h],
        e,
        !Ze(m, h)
      );
    }
  }
  return r;
}
function wa(e, s, o, n, l, i) {
  const r = e[o];
  if (r != null) {
    const u = Ze(r, "default");
    if (u && n === void 0) {
      const d = r.default;
      if (r.type !== Function && !r.skipFactory && Be(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = Zo(l);
          n = m[o] = d.call(
            null,
            s
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
    ] && (n === "" || n === zs(o)) && (n = !0));
  }
  return n;
}
const du = /* @__PURE__ */ new WeakMap();
function Ji(e, s, o = !1) {
  const n = o ? du : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, r = {}, u = [];
  let d = !1;
  if (!Be(e)) {
    const v = (h) => {
      d = !0;
      const [w, p] = Ji(h, s, !0);
      pt(r, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return tt(e) && n.set(e, ro), ro;
  if (Ue(i))
    for (let v = 0; v < i.length; v++) {
      const h = Wt(i[v]);
      wl(h) && (r[h] = st);
    }
  else if (i)
    for (const v in i) {
      const h = Wt(v);
      if (wl(h)) {
        const w = i[v], p = r[h] = Ue(w) || Be(w) ? { type: w } : pt({}, w), _ = p.type;
        let S = !1, $ = !0;
        if (Ue(_))
          for (let P = 0; P < _.length; ++P) {
            const O = _[P], T = Be(O) && O.name;
            if (T === "Boolean") {
              S = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else
          S = Be(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = S, p[
          1
          /* shouldCastTrue */
        ] = $, (S || Ze(p, "default")) && u.push(h);
      }
    }
  const m = [r, u];
  return tt(e) && n.set(e, m), m;
}
function wl(e) {
  return e[0] !== "$" && !Mo(e);
}
const Va = (e) => e === "_" || e === "_ctx" || e === "$stable", Wa = (e) => Ue(e) ? e.map(fs) : [fs(e)], fu = (e, s, o) => {
  if (s._n)
    return s;
  const n = g((...l) => Wa(s(...l)), o);
  return n._c = !1, n;
}, Xi = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Va(l)) continue;
    const i = e[l];
    if (Be(i))
      s[l] = fu(l, i, n);
    else if (i != null) {
      const r = Wa(i);
      s[l] = () => r;
    }
  }
}, Qi = (e, s) => {
  const o = Wa(s);
  e.slots.default = () => o;
}, Zi = (e, s, o) => {
  for (const n in s)
    (o || !Va(n)) && (e[n] = s[n]);
}, mu = (e, s, o) => {
  const n = e.slots = Ki();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Zi(n, s, o), o && ti(n, "_", l, !0)) : Xi(s, n);
  } else s && Qi(e, s);
}, vu = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, r = st;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : Zi(l, s, o) : (i = !s.$stable, Xi(s, l)), r = s;
  } else s && (Qi(e, s), r = { default: 1 });
  if (i)
    for (const u in l)
      !Va(u) && r[u] == null && delete l[u];
}, St = wu;
function pu(e) {
  return gu(e);
}
function gu(e, s) {
  const o = On();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: i,
    createElement: r,
    createText: u,
    createComment: d,
    setText: m,
    setElementText: v,
    parentNode: h,
    nextSibling: w,
    setScopeId: p = ms,
    insertStaticContent: _
  } = e, S = (D, V, se, ne = null, ue = null, de = null, $e = void 0, Ce = null, oe = !!V.dynamicChildren) => {
    if (D === V)
      return;
    D && !Ys(D, V) && (ne = Ge(D), Re(D, ue, de, !0), D = null), V.patchFlag === -2 && (oe = !1, V.dynamicChildren = null);
    const { type: ce, ref: De, shapeFlag: xe } = V;
    switch (ce) {
      case Bn:
        $(D, V, se, ne);
        break;
      case _t:
        P(D, V, se, ne);
        break;
      case ea:
        D == null && O(V, se, ne, $e);
        break;
      case j:
        Y(
          D,
          V,
          se,
          ne,
          ue,
          de,
          $e,
          Ce,
          oe
        );
        break;
      default:
        xe & 1 ? q(
          D,
          V,
          se,
          ne,
          ue,
          de,
          $e,
          Ce,
          oe
        ) : xe & 6 ? H(
          D,
          V,
          se,
          ne,
          ue,
          de,
          $e,
          Ce,
          oe
        ) : (xe & 64 || xe & 128) && ce.process(
          D,
          V,
          se,
          ne,
          ue,
          de,
          $e,
          Ce,
          oe,
          Ve
        );
    }
    De != null && ue ? Ao(De, D && D.ref, de, V || D, !V) : De == null && D && D.ref != null && Ao(D.ref, null, de, D, !0);
  }, $ = (D, V, se, ne) => {
    if (D == null)
      n(
        V.el = u(V.children),
        se,
        ne
      );
    else {
      const ue = V.el = D.el;
      V.children !== D.children && m(ue, V.children);
    }
  }, P = (D, V, se, ne) => {
    D == null ? n(
      V.el = d(V.children || ""),
      se,
      ne
    ) : V.el = D.el;
  }, O = (D, V, se, ne) => {
    [D.el, D.anchor] = _(
      D.children,
      V,
      se,
      ne,
      D.el,
      D.anchor
    );
  }, T = ({ el: D, anchor: V }, se, ne) => {
    let ue;
    for (; D && D !== V; )
      ue = w(D), n(D, se, ne), D = ue;
    n(V, se, ne);
  }, x = ({ el: D, anchor: V }) => {
    let se;
    for (; D && D !== V; )
      se = w(D), l(D), D = se;
    l(V);
  }, q = (D, V, se, ne, ue, de, $e, Ce, oe) => {
    if (V.type === "svg" ? $e = "svg" : V.type === "math" && ($e = "mathml"), D == null)
      B(
        V,
        se,
        ne,
        ue,
        de,
        $e,
        Ce,
        oe
      );
    else {
      const ce = D.el && D.el._isVueCE ? D.el : null;
      try {
        ce && ce._beginPatch(), E(
          D,
          V,
          ue,
          de,
          $e,
          Ce,
          oe
        );
      } finally {
        ce && ce._endPatch();
      }
    }
  }, B = (D, V, se, ne, ue, de, $e, Ce) => {
    let oe, ce;
    const { props: De, shapeFlag: xe, transition: Z, dirs: K } = D;
    if (oe = D.el = r(
      D.type,
      de,
      De && De.is,
      De
    ), xe & 8 ? v(oe, D.children) : xe & 16 && I(
      D.children,
      oe,
      null,
      ne,
      ue,
      Zn(D, de),
      $e,
      Ce
    ), K && Gs(D, null, ne, "created"), A(oe, D, D.scopeId, $e, ne), De) {
      for (const he in De)
        he !== "value" && !Mo(he) && i(oe, he, null, De[he], de, ne);
      "value" in De && i(oe, "value", null, De.value, de), (ce = De.onVnodeBeforeMount) && is(ce, ne, D);
    }
    K && Gs(D, null, ne, "beforeMount");
    const Pe = hu(ue, Z);
    Pe && Z.beforeEnter(oe), n(oe, V, se), ((ce = De && De.onVnodeMounted) || Pe || K) && St(() => {
      ce && is(ce, ne, D), Pe && Z.enter(oe), K && Gs(D, null, ne, "mounted");
    }, ue);
  }, A = (D, V, se, ne, ue) => {
    if (se && p(D, se), ne)
      for (let de = 0; de < ne.length; de++)
        p(D, ne[de]);
    if (ue) {
      let de = ue.subTree;
      if (V === de || tr(de.type) && (de.ssContent === V || de.ssFallback === V)) {
        const $e = ue.vnode;
        A(
          D,
          $e,
          $e.scopeId,
          $e.slotScopeIds,
          ue.parent
        );
      }
    }
  }, I = (D, V, se, ne, ue, de, $e, Ce, oe = 0) => {
    for (let ce = oe; ce < D.length; ce++) {
      const De = D[ce] = Ce ? Ls(D[ce]) : fs(D[ce]);
      S(
        null,
        De,
        V,
        se,
        ne,
        ue,
        de,
        $e,
        Ce
      );
    }
  }, E = (D, V, se, ne, ue, de, $e) => {
    const Ce = V.el = D.el;
    let { patchFlag: oe, dynamicChildren: ce, dirs: De } = V;
    oe |= D.patchFlag & 16;
    const xe = D.props || st, Z = V.props || st;
    let K;
    if (se && js(se, !1), (K = Z.onVnodeBeforeUpdate) && is(K, se, V, D), De && Gs(V, D, se, "beforeUpdate"), se && js(se, !0), (xe.innerHTML && Z.innerHTML == null || xe.textContent && Z.textContent == null) && v(Ce, ""), ce ? L(
      D.dynamicChildren,
      ce,
      Ce,
      se,
      ne,
      Zn(V, ue),
      de
    ) : $e || M(
      D,
      V,
      Ce,
      null,
      se,
      ne,
      Zn(V, ue),
      de,
      !1
    ), oe > 0) {
      if (oe & 16)
        re(Ce, xe, Z, se, ue);
      else if (oe & 2 && xe.class !== Z.class && i(Ce, "class", null, Z.class, ue), oe & 4 && i(Ce, "style", xe.style, Z.style, ue), oe & 8) {
        const Pe = V.dynamicProps;
        for (let he = 0; he < Pe.length; he++) {
          const ge = Pe[he], W = xe[ge], z = Z[ge];
          (z !== W || ge === "value") && i(Ce, ge, W, z, ue, se);
        }
      }
      oe & 1 && D.children !== V.children && v(Ce, V.children);
    } else !$e && ce == null && re(Ce, xe, Z, se, ue);
    ((K = Z.onVnodeUpdated) || De) && St(() => {
      K && is(K, se, V, D), De && Gs(V, D, se, "updated");
    }, ne);
  }, L = (D, V, se, ne, ue, de, $e) => {
    for (let Ce = 0; Ce < V.length; Ce++) {
      const oe = D[Ce], ce = V[Ce], De = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oe.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ys(oe, ce) || // - In the case of a component, it could contain anything.
        oe.shapeFlag & 198) ? h(oe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          se
        )
      );
      S(
        oe,
        ce,
        De,
        null,
        ne,
        ue,
        de,
        $e,
        !0
      );
    }
  }, re = (D, V, se, ne, ue) => {
    if (V !== se) {
      if (V !== st)
        for (const de in V)
          !Mo(de) && !(de in se) && i(
            D,
            de,
            V[de],
            null,
            ue,
            ne
          );
      for (const de in se) {
        if (Mo(de)) continue;
        const $e = se[de], Ce = V[de];
        $e !== Ce && de !== "value" && i(D, de, Ce, $e, ue, ne);
      }
      "value" in se && i(D, "value", V.value, se.value, ue);
    }
  }, Y = (D, V, se, ne, ue, de, $e, Ce, oe) => {
    const ce = V.el = D ? D.el : u(""), De = V.anchor = D ? D.anchor : u("");
    let { patchFlag: xe, dynamicChildren: Z, slotScopeIds: K } = V;
    K && (Ce = Ce ? Ce.concat(K) : K), D == null ? (n(ce, se, ne), n(De, se, ne), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      se,
      De,
      ue,
      de,
      $e,
      Ce,
      oe
    )) : xe > 0 && xe & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren ? (L(
      D.dynamicChildren,
      Z,
      se,
      ue,
      de,
      $e,
      Ce
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || ue && V === ue.subTree) && Ga(
      D,
      V,
      !0
      /* shallow */
    )) : M(
      D,
      V,
      se,
      De,
      ue,
      de,
      $e,
      Ce,
      oe
    );
  }, H = (D, V, se, ne, ue, de, $e, Ce, oe) => {
    V.slotScopeIds = Ce, D == null ? V.shapeFlag & 512 ? ue.ctx.activate(
      V,
      se,
      ne,
      $e,
      oe
    ) : te(
      V,
      se,
      ne,
      ue,
      de,
      $e,
      oe
    ) : Q(D, V, oe);
  }, te = (D, V, se, ne, ue, de, $e) => {
    const Ce = D.component = Su(
      D,
      ne,
      ue
    );
    if (Un(D) && (Ce.ctx.renderer = Ve), Iu(Ce, !1, $e), Ce.asyncDep) {
      if (ue && ue.registerDep(Ce, N, $e), !D.el) {
        const oe = Ce.subTree = C(_t);
        P(null, oe, V, se), D.placeholder = oe.el;
      }
    } else
      N(
        Ce,
        D,
        V,
        se,
        ue,
        de,
        $e
      );
  }, Q = (D, V, se) => {
    const ne = V.component = D.component;
    if (iu(D, V, se))
      if (ne.asyncDep && !ne.asyncResolved) {
        U(ne, V, se);
        return;
      } else
        ne.next = V, ne.update();
    else
      V.el = D.el, ne.vnode = V;
  }, N = (D, V, se, ne, ue, de, $e) => {
    const Ce = () => {
      if (D.isMounted) {
        let { next: xe, bu: Z, u: K, parent: Pe, vnode: he } = D;
        {
          const ze = er(D);
          if (ze) {
            xe && (xe.el = he.el, U(D, xe, $e)), ze.asyncDep.then(() => {
              D.isUnmounted || Ce();
            });
            return;
          }
        }
        let ge = xe, W;
        js(D, !1), xe ? (xe.el = he.el, U(D, xe, $e)) : xe = he, Z && fn(Z), (W = xe.props && xe.props.onVnodeBeforeUpdate) && is(W, Pe, xe, he), js(D, !0);
        const z = hl(D), ie = D.subTree;
        D.subTree = z, S(
          ie,
          z,
          // parent may have changed if it's in a teleport
          h(ie.el),
          // anchor may have changed if it's in a fragment
          Ge(ie),
          D,
          ue,
          de
        ), xe.el = z.el, ge === null && ru(D, z.el), K && St(K, ue), (W = xe.props && xe.props.onVnodeUpdated) && St(
          () => is(W, Pe, xe, he),
          ue
        );
      } else {
        let xe;
        const { el: Z, props: K } = V, { bm: Pe, m: he, parent: ge, root: W, type: z } = D, ie = fo(V);
        js(D, !1), Pe && fn(Pe), !ie && (xe = K && K.onVnodeBeforeMount) && is(xe, ge, V), js(D, !0);
        {
          W.ce && // @ts-expect-error _def is private
          W.ce._def.shadowRoot !== !1 && W.ce._injectChildStyle(z);
          const ze = D.subTree = hl(D);
          S(
            null,
            ze,
            se,
            ne,
            D,
            ue,
            de
          ), V.el = ze.el;
        }
        if (he && St(he, ue), !ie && (xe = K && K.onVnodeMounted)) {
          const ze = V;
          St(
            () => is(xe, ge, ze),
            ue
          );
        }
        (V.shapeFlag & 256 || ge && fo(ge.vnode) && ge.vnode.shapeFlag & 256) && D.a && St(D.a, ue), D.isMounted = !0, V = se = ne = null;
      }
    };
    D.scope.on();
    const oe = D.effect = new ai(Ce);
    D.scope.off();
    const ce = D.update = oe.run.bind(oe), De = D.job = oe.runIfDirty.bind(oe);
    De.i = D, De.id = D.uid, oe.scheduler = () => za(De), js(D, !0), ce();
  }, U = (D, V, se) => {
    V.component = D;
    const ne = D.vnode.props;
    D.vnode = V, D.next = null, uu(D, V.props, ne, se), vu(D, V.children, se), $s(), ll(D), Cs();
  }, M = (D, V, se, ne, ue, de, $e, Ce, oe = !1) => {
    const ce = D && D.children, De = D ? D.shapeFlag : 0, xe = V.children, { patchFlag: Z, shapeFlag: K } = V;
    if (Z > 0) {
      if (Z & 128) {
        ve(
          ce,
          xe,
          se,
          ne,
          ue,
          de,
          $e,
          Ce,
          oe
        );
        return;
      } else if (Z & 256) {
        we(
          ce,
          xe,
          se,
          ne,
          ue,
          de,
          $e,
          Ce,
          oe
        );
        return;
      }
    }
    K & 8 ? (De & 16 && Ee(ce, ue, de), xe !== ce && v(se, xe)) : De & 16 ? K & 16 ? ve(
      ce,
      xe,
      se,
      ne,
      ue,
      de,
      $e,
      Ce,
      oe
    ) : Ee(ce, ue, de, !0) : (De & 8 && v(se, ""), K & 16 && I(
      xe,
      se,
      ne,
      ue,
      de,
      $e,
      Ce,
      oe
    ));
  }, we = (D, V, se, ne, ue, de, $e, Ce, oe) => {
    D = D || ro, V = V || ro;
    const ce = D.length, De = V.length, xe = Math.min(ce, De);
    let Z;
    for (Z = 0; Z < xe; Z++) {
      const K = V[Z] = oe ? Ls(V[Z]) : fs(V[Z]);
      S(
        D[Z],
        K,
        se,
        null,
        ue,
        de,
        $e,
        Ce,
        oe
      );
    }
    ce > De ? Ee(
      D,
      ue,
      de,
      !0,
      !1,
      xe
    ) : I(
      V,
      se,
      ne,
      ue,
      de,
      $e,
      Ce,
      oe,
      xe
    );
  }, ve = (D, V, se, ne, ue, de, $e, Ce, oe) => {
    let ce = 0;
    const De = V.length;
    let xe = D.length - 1, Z = De - 1;
    for (; ce <= xe && ce <= Z; ) {
      const K = D[ce], Pe = V[ce] = oe ? Ls(V[ce]) : fs(V[ce]);
      if (Ys(K, Pe))
        S(
          K,
          Pe,
          se,
          null,
          ue,
          de,
          $e,
          Ce,
          oe
        );
      else
        break;
      ce++;
    }
    for (; ce <= xe && ce <= Z; ) {
      const K = D[xe], Pe = V[Z] = oe ? Ls(V[Z]) : fs(V[Z]);
      if (Ys(K, Pe))
        S(
          K,
          Pe,
          se,
          null,
          ue,
          de,
          $e,
          Ce,
          oe
        );
      else
        break;
      xe--, Z--;
    }
    if (ce > xe) {
      if (ce <= Z) {
        const K = Z + 1, Pe = K < De ? V[K].el : ne;
        for (; ce <= Z; )
          S(
            null,
            V[ce] = oe ? Ls(V[ce]) : fs(V[ce]),
            se,
            Pe,
            ue,
            de,
            $e,
            Ce,
            oe
          ), ce++;
      }
    } else if (ce > Z)
      for (; ce <= xe; )
        Re(D[ce], ue, de, !0), ce++;
    else {
      const K = ce, Pe = ce, he = /* @__PURE__ */ new Map();
      for (ce = Pe; ce <= Z; ce++) {
        const at = V[ce] = oe ? Ls(V[ce]) : fs(V[ce]);
        at.key != null && he.set(at.key, ce);
      }
      let ge, W = 0;
      const z = Z - Pe + 1;
      let ie = !1, ze = 0;
      const Qe = new Array(z);
      for (ce = 0; ce < z; ce++) Qe[ce] = 0;
      for (ce = K; ce <= xe; ce++) {
        const at = D[ce];
        if (W >= z) {
          Re(at, ue, de, !0);
          continue;
        }
        let dt;
        if (at.key != null)
          dt = he.get(at.key);
        else
          for (ge = Pe; ge <= Z; ge++)
            if (Qe[ge - Pe] === 0 && Ys(at, V[ge])) {
              dt = ge;
              break;
            }
        dt === void 0 ? Re(at, ue, de, !0) : (Qe[dt - Pe] = ce + 1, dt >= ze ? ze = dt : ie = !0, S(
          at,
          V[dt],
          se,
          null,
          ue,
          de,
          $e,
          Ce,
          oe
        ), W++);
      }
      const vt = ie ? yu(Qe) : ro;
      for (ge = vt.length - 1, ce = z - 1; ce >= 0; ce--) {
        const at = Pe + ce, dt = V[at], Rt = V[at + 1], Ut = at + 1 < De ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : ne;
        Qe[ce] === 0 ? S(
          null,
          dt,
          se,
          Ut,
          ue,
          de,
          $e,
          Ce,
          oe
        ) : ie && (ge < 0 || ce !== vt[ge] ? Ie(dt, se, Ut, 2) : ge--);
      }
    }
  }, Ie = (D, V, se, ne, ue = null) => {
    const { el: de, type: $e, transition: Ce, children: oe, shapeFlag: ce } = D;
    if (ce & 6) {
      Ie(D.component.subTree, V, se, ne);
      return;
    }
    if (ce & 128) {
      D.suspense.move(V, se, ne);
      return;
    }
    if (ce & 64) {
      $e.move(D, V, se, Ve);
      return;
    }
    if ($e === j) {
      n(de, V, se);
      for (let xe = 0; xe < oe.length; xe++)
        Ie(oe[xe], V, se, ne);
      n(D.anchor, V, se);
      return;
    }
    if ($e === ea) {
      T(D, V, se);
      return;
    }
    if (ne !== 2 && ce & 1 && Ce)
      if (ne === 0)
        Ce.beforeEnter(de), n(de, V, se), St(() => Ce.enter(de), ue);
      else {
        const { leave: xe, delayLeave: Z, afterLeave: K } = Ce, Pe = () => {
          D.ctx.isUnmounted ? l(de) : n(de, V, se);
        }, he = () => {
          de._isLeaving && de[ws](
            !0
            /* cancelled */
          ), xe(de, () => {
            Pe(), K && K();
          });
        };
        Z ? Z(de, Pe, he) : he();
      }
    else
      n(de, V, se);
  }, Re = (D, V, se, ne = !1, ue = !1) => {
    const {
      type: de,
      props: $e,
      ref: Ce,
      children: oe,
      dynamicChildren: ce,
      shapeFlag: De,
      patchFlag: xe,
      dirs: Z,
      cacheIndex: K
    } = D;
    if (xe === -2 && (ue = !1), Ce != null && ($s(), Ao(Ce, null, se, D, !0), Cs()), K != null && (V.renderCache[K] = void 0), De & 256) {
      V.ctx.deactivate(D);
      return;
    }
    const Pe = De & 1 && Z, he = !fo(D);
    let ge;
    if (he && (ge = $e && $e.onVnodeBeforeUnmount) && is(ge, V, D), De & 6)
      ke(D.component, se, ne);
    else {
      if (De & 128) {
        D.suspense.unmount(se, ne);
        return;
      }
      Pe && Gs(D, null, V, "beforeUnmount"), De & 64 ? D.type.remove(
        D,
        V,
        se,
        Ve,
        ne
      ) : ce && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ce.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (de !== j || xe > 0 && xe & 64) ? Ee(
        ce,
        V,
        se,
        !1,
        !0
      ) : (de === j && xe & 384 || !ue && De & 16) && Ee(oe, V, se), ne && Ke(D);
    }
    (he && (ge = $e && $e.onVnodeUnmounted) || Pe) && St(() => {
      ge && is(ge, V, D), Pe && Gs(D, null, V, "unmounted");
    }, se);
  }, Ke = (D) => {
    const { type: V, el: se, anchor: ne, transition: ue } = D;
    if (V === j) {
      Xe(se, ne);
      return;
    }
    if (V === ea) {
      x(D);
      return;
    }
    const de = () => {
      l(se), ue && !ue.persisted && ue.afterLeave && ue.afterLeave();
    };
    if (D.shapeFlag & 1 && ue && !ue.persisted) {
      const { leave: $e, delayLeave: Ce } = ue, oe = () => $e(se, de);
      Ce ? Ce(D.el, de, oe) : oe();
    } else
      de();
  }, Xe = (D, V) => {
    let se;
    for (; D !== V; )
      se = w(D), l(D), D = se;
    l(V);
  }, ke = (D, V, se) => {
    const { bum: ne, scope: ue, job: de, subTree: $e, um: Ce, m: oe, a: ce } = D;
    bl(oe), bl(ce), ne && fn(ne), ue.stop(), de && (de.flags |= 8, Re($e, D, V, se)), Ce && St(Ce, V), St(() => {
      D.isUnmounted = !0;
    }, V);
  }, Ee = (D, V, se, ne = !1, ue = !1, de = 0) => {
    for (let $e = de; $e < D.length; $e++)
      Re(D[$e], V, se, ne, ue);
  }, Ge = (D) => {
    if (D.shapeFlag & 6)
      return Ge(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const V = w(D.anchor || D.el), se = V && V[xi];
    return se ? w(se) : V;
  };
  let be = !1;
  const ae = (D, V, se) => {
    D == null ? V._vnode && Re(V._vnode, null, null, !0) : S(
      V._vnode || null,
      D,
      V,
      null,
      null,
      null,
      se
    ), V._vnode = D, be || (be = !0, ll(), ki(), be = !1);
  }, Ve = {
    p: S,
    um: Re,
    m: Ie,
    r: Ke,
    mt: te,
    mc: I,
    pc: M,
    pbc: L,
    n: Ge,
    o: e
  };
  return {
    render: ae,
    hydrate: void 0,
    createApp: Xc(ae)
  };
}
function Zn({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function js({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function hu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function Ga(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Ue(n) && Ue(l))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Ls(l[i]), u.el = r.el), !o && u.patchFlag !== -2 && Ga(r, u)), u.type === Bn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = r.el), u.type === _t && !u.el && (u.el = r.el);
    }
}
function yu(e) {
  const s = e.slice(), o = [0];
  let n, l, i, r, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        s[n] = l, o.push(n);
        continue;
      }
      for (i = 0, r = o.length - 1; i < r; )
        u = i + r >> 1, e[o[u]] < m ? i = u + 1 : r = u;
      m < e[o[i]] && (i > 0 && (s[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, r = o[i - 1]; i-- > 0; )
    o[i] = r, r = s[r];
  return o;
}
function er(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : er(s);
}
function bl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const tr = (e) => e.__isSuspense;
function wu(e, s) {
  s && s.pendingBranch ? Ue(e) ? s.effects.push(...e) : s.effects.push(e) : Tc(e);
}
const j = Symbol.for("v-fgt"), Bn = Symbol.for("v-txt"), _t = Symbol.for("v-cmt"), ea = Symbol.for("v-stc"), Uo = [];
let At = null;
function a(e = !1) {
  Uo.push(At = e ? null : []);
}
function bu() {
  Uo.pop(), At = Uo[Uo.length - 1] || null;
}
let Ho = 1;
function xn(e, s = !1) {
  Ho += e, e < 0 && At && s && (At.hasOnce = !0);
}
function sr(e) {
  return e.dynamicChildren = Ho > 0 ? At || ro : null, bu(), Ho > 0 && At && At.push(e), e;
}
function c(e, s, o, n, l, i) {
  return sr(
    t(
      e,
      s,
      o,
      n,
      l,
      i,
      !0
    )
  );
}
function R(e, s, o, n, l) {
  return sr(
    C(
      e,
      s,
      o,
      n,
      l,
      !0
    )
  );
}
function Ko(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ys(e, s) {
  return e.type === s.type && e.key === s.key;
}
const or = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ut(e) || $t(e) || Be(e) ? { i: yt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === j ? 0 : 1, r = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && or(s),
    ref: s && pn(s),
    scopeId: Ci,
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
    ctx: yt
  };
  return u ? (ja(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ut(o) ? 8 : 16), Ho > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  At && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && At.push(d), d;
}
const C = _u;
function _u(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Ui) && (e = _t), Ko(e)) {
    const u = Ns(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && ja(u, o), Ho > 0 && !i && At && (u.shapeFlag & 6 ? At[At.indexOf(e)] = u : At.push(u)), u.patchFlag = -2, u;
  }
  if (Mu(e) && (e = e.__vccOpts), s) {
    s = ku(s);
    let { class: u, style: d } = s;
    u && !ut(u) && (s.class = Se(u)), tt(d) && (Ua(d) && !Ue(d) && (d = pt({}, d)), s.style = Gt(d));
  }
  const r = ut(e) ? 1 : tr(e) ? 128 : Si(e) ? 64 : tt(e) ? 4 : Be(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    n,
    l,
    r,
    i,
    !0
  );
}
function ku(e) {
  return e ? Ua(e) || qi(e) ? pt({}, e) : e : null;
}
function Ns(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: r, children: u, transition: d } = e, m = s ? $u(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && or(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Ue(i) ? i.concat(pn(s)) : [i, pn(s)] : pn(s)
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
    patchFlag: s && e.type !== j ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Ns(e.ssContent),
    ssFallback: e.ssFallback && Ns(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && Zs(
    v,
    d.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return C(Bn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), R(_t, null, e)) : C(_t, null, e);
}
function fs(e) {
  return e == null || typeof e == "boolean" ? C(_t) : Ue(e) ? C(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ko(e) ? Ls(e) : C(Bn, null, String(e));
}
function Ls(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ns(e);
}
function ja(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Ue(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), ja(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !qi(s) ? s._ctx = yt : l === 3 && yt && (yt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Be(s) ? (s = { default: s, _ctx: yt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function $u(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Se([s.class, n.class]));
      else if (l === "style")
        s.style = Gt([s.style, n.style]);
      else if (Rn(l)) {
        const i = s[l], r = n[l];
        r && i !== r && !(Ue(i) && i.includes(r)) && (s[l] = i ? [].concat(i, r) : r);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function is(e, s, o, n = null) {
  ts(e, s, 7, [
    o,
    n
  ]);
}
const Cu = Vi();
let xu = 0;
function Su(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Cu, i = {
    uid: xu++,
    vnode: e,
    type: n,
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
    scope: new Qr(
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
    propsOptions: Ji(n, l),
    emitsOptions: ji(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: st,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: st,
    data: st,
    props: st,
    attrs: st,
    slots: st,
    refs: st,
    setupState: st,
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = ou.bind(null, i), e.ce && e.ce(i), i;
}
let kt = null;
const Ha = () => kt || yt;
let Sn, ba;
{
  const e = On(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((r) => r(i)) : l[0](i);
    };
  };
  Sn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => kt = o
  ), ba = s(
    "__VUE_SSR_SETTERS__",
    (o) => qo = o
  );
}
const Zo = (e) => {
  const s = kt;
  return Sn(e), e.scope.on(), () => {
    e.scope.off(), Sn(s);
  };
}, _l = () => {
  kt && kt.scope.off(), Sn(null);
};
function nr(e) {
  return e.vnode.shapeFlag & 4;
}
let qo = !1;
function Iu(e, s = !1, o = !1) {
  s && ba(s);
  const { props: n, children: l } = e.vnode, i = nr(e);
  cu(e, n, i, s), mu(e, l, o || s);
  const r = i ? Eu(e, s) : void 0;
  return s && ba(!1), r;
}
function Eu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gc);
  const { setup: n } = o;
  if (n) {
    $s();
    const l = e.setupContext = n.length > 1 ? Pu(e) : null, i = Zo(e), r = Xo(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ql(r);
    if (Cs(), i(), (u || e.sp) && !fo(e) && Li(e), u) {
      if (r.then(_l, _l), s)
        return r.then((d) => {
          kl(e, d);
        }).catch((d) => {
          Nn(d, e, 0);
        });
      e.asyncDep = r;
    } else
      kl(e, r);
  } else
    ar(e);
}
function kl(e, s, o) {
  Be(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : tt(s) && (e.setupState = wi(s)), ar(e);
}
function ar(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || ms);
  {
    const l = Zo(e);
    $s();
    try {
      jc(e);
    } finally {
      Cs(), l();
    }
  }
}
const Tu = {
  get(e, s) {
    return bt(e, "get", ""), e[s];
  }
};
function Pu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Tu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Vn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wi(wc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in No)
        return No[o](e);
    },
    has(s, o) {
      return o in s || o in No;
    }
  })) : e.proxy;
}
function Ru(e, s = !0) {
  return Be(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Mu(e) {
  return Be(e) && "__vccOpts" in e;
}
const F = (e, s) => Cc(e, s, qo);
function Wn(e, s, o) {
  try {
    xn(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !Ue(s) ? Ko(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Ko(o) && (o = [o]), C(e, s, o));
  } finally {
    xn(1);
  }
}
const Du = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _a;
const $l = typeof window < "u" && window.trustedTypes;
if ($l)
  try {
    _a = /* @__PURE__ */ $l.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lr = _a ? (e) => _a.createHTML(e) : (e) => e, Lu = "http://www.w3.org/2000/svg", Ou = "http://www.w3.org/1998/Math/MathML", ys = typeof document < "u" ? document : null, Cl = ys && /* @__PURE__ */ ys.createElement("template"), Au = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ys.createElementNS(Lu, e) : s === "mathml" ? ys.createElementNS(Ou, e) : o ? ys.createElement(e, { is: o }) : ys.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => ys.createTextNode(e),
  createComment: (e) => ys.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ys.querySelector(e),
  setScopeId(e, s) {
    e.setAttribute(s, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, s, o, n, l, i) {
    const r = o ? o.previousSibling : s.lastChild;
    if (l && (l === i || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === i || !(l = l.nextSibling)); )
        ;
    else {
      Cl.innerHTML = lr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Cl.content;
      if (n === "svg" || n === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      s.insertBefore(u, o);
    }
    return [
      // first
      r ? r.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, Ps = "transition", So = "animation", go = Symbol("_vtc"), ir = {
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
}, rr = /* @__PURE__ */ pt(
  {},
  Pi,
  ir
), Nu = (e) => (e.displayName = "Transition", e.props = rr, e), Uu = /* @__PURE__ */ Nu(
  (e, { slots: s }) => Wn(Mc, cr(e), s)
), Hs = (e, s = []) => {
  Ue(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, xl = (e) => e ? Ue(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function cr(e) {
  const s = {};
  for (const Y in e)
    Y in ir || (s[Y] = e[Y]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: r = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = i,
    appearActiveClass: m = r,
    appearToClass: v = u,
    leaveFromClass: h = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = zu(l), S = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: O,
    onEnterCancelled: T,
    onLeave: x,
    onLeaveCancelled: q,
    onBeforeAppear: B = P,
    onAppear: A = O,
    onAppearCancelled: I = T
  } = s, E = (Y, H, te, Q) => {
    Y._enterCancelled = Q, Rs(Y, H ? v : u), Rs(Y, H ? m : r), te && te();
  }, L = (Y, H) => {
    Y._isLeaving = !1, Rs(Y, h), Rs(Y, p), Rs(Y, w), H && H();
  }, re = (Y) => (H, te) => {
    const Q = Y ? A : O, N = () => E(H, Y, te);
    Hs(Q, [H, N]), Sl(() => {
      Rs(H, Y ? d : i), cs(H, Y ? v : u), xl(Q) || Il(H, n, S, N);
    });
  };
  return pt(s, {
    onBeforeEnter(Y) {
      Hs(P, [Y]), cs(Y, i), cs(Y, r);
    },
    onBeforeAppear(Y) {
      Hs(B, [Y]), cs(Y, d), cs(Y, m);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(Y, H) {
      Y._isLeaving = !0;
      const te = () => L(Y, H);
      cs(Y, h), Y._enterCancelled ? (cs(Y, w), ka(Y)) : (ka(Y), cs(Y, w)), Sl(() => {
        Y._isLeaving && (Rs(Y, h), cs(Y, p), xl(x) || Il(Y, n, $, te));
      }), Hs(x, [Y, te]);
    },
    onEnterCancelled(Y) {
      E(Y, !1, void 0, !0), Hs(T, [Y]);
    },
    onAppearCancelled(Y) {
      E(Y, !0, void 0, !0), Hs(I, [Y]);
    },
    onLeaveCancelled(Y) {
      L(Y), Hs(q, [Y]);
    }
  });
}
function zu(e) {
  if (e == null)
    return null;
  if (tt(e))
    return [ta(e.enter), ta(e.leave)];
  {
    const s = ta(e);
    return [s, s];
  }
}
function ta(e) {
  return Gr(e);
}
function cs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[go] || (e[go] = /* @__PURE__ */ new Set())).add(s);
}
function Rs(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[go];
  o && (o.delete(s), o.size || (e[go] = void 0));
}
function Sl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Fu = 0;
function Il(e, s, o, n) {
  const l = e._endId = ++Fu, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: r, timeout: u, propCount: d } = ur(e, s);
  if (!r)
    return n();
  const m = r + "end";
  let v = 0;
  const h = () => {
    e.removeEventListener(m, w), i();
  }, w = (p) => {
    p.target === e && ++v >= d && h();
  };
  setTimeout(() => {
    v < d && h();
  }, u + 1), e.addEventListener(m, w);
}
function ur(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ps}Delay`), i = n(`${Ps}Duration`), r = El(l, i), u = n(`${So}Delay`), d = n(`${So}Duration`), m = El(u, d);
  let v = null, h = 0, w = 0;
  s === Ps ? r > 0 && (v = Ps, h = r, w = i.length) : s === So ? m > 0 && (v = So, h = m, w = d.length) : (h = Math.max(r, m), v = h > 0 ? r > m ? Ps : So : null, w = v ? v === Ps ? i.length : d.length : 0);
  const p = v === Ps && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ps}Property`).toString()
  );
  return {
    type: v,
    timeout: h,
    propCount: w,
    hasTransform: p
  };
}
function El(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Tl(o) + Tl(e[n])));
}
function Tl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ka(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Bu(e, s, o) {
  const n = e[go];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Pl = Symbol("_vod"), Vu = Symbol("_vsh"), Wu = Symbol(""), Gu = /(?:^|;)\s*display\s*:/;
function ju(e, s, o) {
  const n = e.style, l = ut(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (ut(s))
        for (const r of s.split(";")) {
          const u = r.slice(0, r.indexOf(":")).trim();
          o[u] == null && gn(n, u, "");
        }
      else
        for (const r in s)
          o[r] == null && gn(n, r, "");
    for (const r in o)
      r === "display" && (i = !0), gn(n, r, o[r]);
  } else if (l) {
    if (s !== o) {
      const r = n[Wu];
      r && (o += ";" + r), n.cssText = o, i = Gu.test(o);
    }
  } else s && e.removeAttribute("style");
  Pl in e && (e[Pl] = i ? n.display : "", e[Vu] && (n.display = "none"));
}
const Rl = /\s*!important$/;
function gn(e, s, o) {
  if (Ue(o))
    o.forEach((n) => gn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = Hu(e, s);
    Rl.test(o) ? e.setProperty(
      zs(n),
      o.replace(Rl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Ml = ["Webkit", "Moz", "ms"], sa = {};
function Hu(e, s) {
  const o = sa[s];
  if (o)
    return o;
  let n = Wt(s);
  if (n !== "filter" && n in e)
    return sa[s] = n;
  n = Dn(n);
  for (let l = 0; l < Ml.length; l++) {
    const i = Ml[l] + n;
    if (i in e)
      return sa[s] = i;
  }
  return s;
}
const Dl = "http://www.w3.org/1999/xlink";
function Ll(e, s, o, n, l, i = Jr(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Dl, s.slice(6, s.length)) : e.setAttributeNS(Dl, s, o) : o == null || i && !si(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : Zt(o) ? String(o) : o
  );
}
function Ol(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? lr(o) : o);
    return;
  }
  const i = e.tagName;
  if (s === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let r = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = si(o) : o == null && u === "string" ? (o = "", r = !0) : u === "number" && (o = 0, r = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  r && e.removeAttribute(l || s);
}
function ks(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function Ku(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Al = Symbol("_vei");
function qu(e, s, o, n, l = null) {
  const i = e[Al] || (e[Al] = {}), r = i[s];
  if (n && r)
    r.value = n;
  else {
    const [u, d] = Yu(s);
    if (n) {
      const m = i[s] = Qu(
        n,
        l
      );
      ks(e, u, m, d);
    } else r && (Ku(e, u, r, d), i[s] = void 0);
  }
}
const Nl = /(?:Once|Passive|Capture)$/;
function Yu(e) {
  let s;
  if (Nl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(Nl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : zs(e.slice(2)), s];
}
let oa = 0;
const Ju = /* @__PURE__ */ Promise.resolve(), Xu = () => oa || (Ju.then(() => oa = 0), oa = Date.now());
function Qu(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ts(
      Zu(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Xu(), o;
}
function Zu(e, s) {
  if (Ue(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return s;
}
const Ul = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ed = (e, s, o, n, l, i) => {
  const r = l === "svg";
  s === "class" ? Bu(e, n, r) : s === "style" ? ju(e, o, n) : Rn(s) ? Ea(s) || qu(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : td(e, s, n, r)) ? (Ol(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Ll(e, s, n, r, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ut(n)) ? Ol(e, Wt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Ll(e, s, n, r));
};
function td(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Ul(s) && Be(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Ul(s) && ut(o) ? !1 : s in e;
}
const dr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), In = Symbol("_moveCb"), zl = Symbol("_enterCb"), sd = (e) => (delete e.props.mode, e), od = /* @__PURE__ */ sd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, rr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Ha(), n = Ti();
    let l, i;
    return Ai(() => {
      if (!l.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!rd(
        l[0].el,
        o.vnode.el,
        r
      )) {
        l = [];
        return;
      }
      l.forEach(ad), l.forEach(ld);
      const u = l.filter(id);
      ka(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        cs(m, r), v.transform = v.webkitTransform = v.transitionDuration = "";
        const h = m[In] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", h), m[In] = null, Rs(m, r));
        };
        m.addEventListener("transitionend", h);
      }), l = [];
    }), () => {
      const r = Je(e), u = cr(r);
      let d = r.tag || j;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), Zs(
            v,
            jo(
              v,
              u,
              n,
              o
            )
          ), dr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? Fa(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && Zs(
          v,
          jo(v, u, n, o)
        );
      }
      return C(d, null, i);
    };
  }
}), nd = od;
function ad(e) {
  const s = e.el;
  s[In] && s[In](), s[zl] && s[zl]();
}
function ld(e) {
  fr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function id(e) {
  const s = dr.get(e), o = fr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function rd(e, s, o) {
  const n = e.cloneNode(), l = e[go];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: r } = ur(n);
  return i.removeChild(n), r;
}
const Us = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ue(s) ? (o) => fn(s, o) : s;
};
function cd(e) {
  e.target.composing = !0;
}
function Fl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Vt = Symbol("_assign");
function Bl(e, s, o) {
  return s && (e = e.trim()), o && (e = Ln(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Vt] = Us(l);
    const i = n || l.props && l.props.type === "number";
    ks(e, s ? "change" : "input", (r) => {
      r.target.composing || e[Vt](Bl(e.value, o, i));
    }), (o || i) && ks(e, "change", () => {
      e.value = Bl(e.value, o, i);
    }), s || (ks(e, "compositionstart", cd), ks(e, "compositionend", Fl), ks(e, "change", Fl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, r) {
    if (e[Vt] = Us(r), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ln(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Yo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Vt] = Us(o), ks(e, "change", () => {
      const n = e._modelValue, l = ho(e), i = e.checked, r = e[Vt];
      if (Ue(n)) {
        const u = Ra(n, l), d = u !== -1;
        if (i && !d)
          r(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), r(m);
        }
      } else if (yo(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), r(u);
      } else
        r(mr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Vl,
  beforeUpdate(e, s, o) {
    e[Vt] = Us(o), Vl(e, s, o);
  }
};
function Vl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Ue(s))
    l = Ra(s, n.props.value) > -1;
  else if (yo(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = Qs(s, mr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Yt = {
  created(e, { value: s }, o) {
    e.checked = Qs(s, o.props.value), e[Vt] = Us(o), ks(e, "change", () => {
      e[Vt](ho(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Vt] = Us(n), s !== o && (e.checked = Qs(s, n.props.value));
  }
}, vs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = yo(s);
    ks(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => o ? Ln(ho(r)) : ho(r)
      );
      e[Vt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, Qo(() => {
        e._assigning = !1;
      });
    }), e[Vt] = Us(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Wl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Vt] = Us(o);
  },
  updated(e, { value: s }) {
    e._assigning || Wl(e, s);
  }
};
function Wl(e, s) {
  const o = e.multiple, n = Ue(s);
  if (!(o && !n && !yo(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const r = e.options[l], u = ho(r);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? r.selected = s.some((m) => String(m) === String(u)) : r.selected = Ra(s, u) > -1;
        } else
          r.selected = s.has(u);
      else if (Qs(ho(r), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ho(e) {
  return "_value" in e ? e._value : e.value;
}
function mr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const Gn = {
  created(e, s, o) {
    rn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    rn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    rn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    rn(e, s, o, n, "updated");
  }
};
function ud(e, s) {
  switch (e) {
    case "SELECT":
      return vs;
    case "TEXTAREA":
      return Nt;
    default:
      switch (s) {
        case "checkbox":
          return Yo;
        case "radio":
          return Yt;
        default:
          return Nt;
      }
  }
}
function rn(e, s, o, n, l) {
  const r = ud(
    e.tagName,
    o.props && o.props.type
  )[l];
  r && r(e, s, o, n);
}
const dd = ["ctrl", "shift", "alt", "meta"], fd = {
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
  exact: (e, s) => dd.some((o) => e[`${o}Key`] && !s.includes(o))
}, it = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let r = 0; r < s.length; r++) {
      const u = fd[s[r]];
      if (u && u(l, s)) return;
    }
    return e(l, ...i);
  }));
}, md = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Xt = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = zs(l.key);
    if (s.some(
      (r) => r === i || md[r] === i
    ))
      return e(l);
  }));
}, vd = /* @__PURE__ */ pt({ patchProp: ed }, Au);
let Gl;
function pd() {
  return Gl || (Gl = pu(vd));
}
const Ka = ((...e) => {
  const s = pd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = hd(n);
    if (!l) return;
    const i = s._component;
    !Be(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const r = o(l, !1, gd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), r;
  }, s;
});
function gd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hd(e) {
  return ut(e) ? document.querySelector(e) : e;
}
const yd = { class: "panel-layout" }, wd = {
  key: 0,
  class: "panel-layout-header"
}, bd = {
  key: 1,
  class: "panel-layout-search"
}, _d = { class: "panel-layout-content" }, kd = {
  key: 2,
  class: "panel-layout-footer"
}, $d = /* @__PURE__ */ fe({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), c("div", yd, [
      s.$slots.header ? (a(), c("div", wd, [
        He(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), c("div", bd, [
        He(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", _d, [
        He(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), c("div", kd, [
        He(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), me = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ me($d, [["__scopeId", "data-v-21565df9"]]), Cd = {
  key: 0,
  class: "panel-title-prefix"
}, xd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Sd = /* @__PURE__ */ fe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), R(Ba(`h${e.level}`), {
      class: Se(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (a(), c("span", Cd, f(e.prefix), 1)) : (a(), c("span", xd)),
        He(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Id = /* @__PURE__ */ me(Sd, [["__scopeId", "data-v-c3875efc"]]), Ed = ["title"], Td = ["width", "height"], Pd = /* @__PURE__ */ fe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), c("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => s.$emit("click"))
    }, [
      (a(), c("svg", {
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
      ])], 8, Td))
    ], 8, Ed));
  }
}), vr = /* @__PURE__ */ me(Pd, [["__scopeId", "data-v-6fc7f16d"]]), Rd = { class: "header-left" }, Md = {
  key: 0,
  class: "header-actions"
}, Dd = /* @__PURE__ */ fe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Se(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Rd, [
        C(Id, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(vr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), c("div", Md, [
        He(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ me(Dd, [["__scopeId", "data-v-55a62cd6"]]), Ld = {
  key: 0,
  class: "section-title-count"
}, Od = {
  key: 1,
  class: "section-title-icon"
}, Ad = /* @__PURE__ */ fe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), R(Ba(`h${e.level}`), {
      class: Se(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Ld, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), c("span", Od, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ot = /* @__PURE__ */ me(Ad, [["__scopeId", "data-v-559361eb"]]), Nd = { class: "status-grid" }, Ud = { class: "status-grid__columns" }, zd = { class: "status-grid__column" }, Fd = { class: "status-grid__title" }, Bd = { class: "status-grid__column status-grid__column--right" }, Vd = { class: "status-grid__title" }, Wd = {
  key: 0,
  class: "status-grid__footer"
}, Gd = /* @__PURE__ */ fe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), c("div", Nd, [
      t("div", Ud, [
        t("div", zd, [
          t("h4", Fd, f(e.leftTitle), 1),
          He(s.$slots, "left", {}, void 0)
        ]),
        t("div", Bd, [
          t("h4", Vd, f(e.rightTitle), 1),
          He(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), c("div", Wd, [
        He(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), jd = /* @__PURE__ */ me(Gd, [["__scopeId", "data-v-73b7ba3f"]]), Hd = {
  key: 0,
  class: "status-item__icon"
}, Kd = {
  key: 1,
  class: "status-item__count"
}, qd = { class: "status-item__label" }, Yd = /* @__PURE__ */ fe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = F(() => `status-item--${s.variant}`);
    return (n, l) => (a(), c("div", {
      class: Se(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), c("span", Hd, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), c("span", Kd, f(e.count), 1)) : y("", !0),
      t("span", qd, f(e.label), 1)
    ], 2));
  }
}), rs = /* @__PURE__ */ me(Yd, [["__scopeId", "data-v-6f929183"]]), Jd = { class: "issue-card__header" }, Xd = { class: "issue-card__icon" }, Qd = { class: "issue-card__title" }, Zd = {
  key: 0,
  class: "issue-card__content"
}, ef = {
  key: 0,
  class: "issue-card__description"
}, tf = {
  key: 1,
  class: "issue-card__items"
}, sf = {
  key: 2,
  class: "issue-card__actions"
}, of = /* @__PURE__ */ fe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = F(() => `issue-card--${s.severity}`);
    return (n, l) => (a(), c("div", {
      class: Se(["issue-card", o.value])
    }, [
      t("div", Jd, [
        t("span", Xd, f(e.icon), 1),
        t("h4", Qd, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), c("div", Zd, [
        e.description ? (a(), c("p", ef, f(e.description), 1)) : y("", !0),
        He(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), c("div", tf, [
        (a(!0), c(j, null, pe(e.items, (i, r) => (a(), c("div", {
          key: r,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), c("div", sf, [
        He(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ me(of, [["__scopeId", "data-v-df6aa348"]]), nf = ["type", "disabled"], af = {
  key: 0,
  class: "spinner"
}, lf = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), c("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Se(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", af)) : y("", !0),
      e.loading ? y("", !0) : He(s.$slots, "default", { key: 1 }, void 0)
    ], 10, nf));
  }
}), le = /* @__PURE__ */ me(lf, [["__scopeId", "data-v-772abe47"]]), rf = { class: "empty-state" }, cf = {
  key: 0,
  class: "empty-icon"
}, uf = { class: "empty-message" }, df = /* @__PURE__ */ fe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), c("div", rf, [
      e.icon ? (a(), c("div", cf, f(e.icon), 1)) : y("", !0),
      t("p", uf, f(e.message), 1),
      e.actionLabel ? (a(), R(le, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("action"))
      }, {
        default: g(() => [
          b(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ me(df, [["__scopeId", "data-v-4466284f"]]), ff = /* @__PURE__ */ fe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), c("span", {
      class: Se(["detail-label"]),
      style: Gt({ minWidth: e.minWidth })
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), hn = /* @__PURE__ */ me(ff, [["__scopeId", "data-v-75e9eeb8"]]), mf = /* @__PURE__ */ fe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), c("span", {
      class: Se(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), $a = /* @__PURE__ */ me(mf, [["__scopeId", "data-v-2f186e4c"]]), vf = { class: "detail-row" }, pf = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), c("div", vf, [
      C(hn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R($a, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          b(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : He(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), ft = /* @__PURE__ */ me(pf, [["__scopeId", "data-v-ef15664a"]]), gf = { class: "modal-header" }, hf = { class: "modal-body" }, yf = { class: "status-section" }, wf = {
  key: 0,
  class: "status-section"
}, bf = { class: "section-header-row" }, _f = {
  key: 0,
  class: "workflow-group"
}, kf = { class: "workflow-group-header" }, $f = { class: "workflow-group-title" }, Cf = { class: "workflow-list" }, xf = { class: "workflow-name" }, Sf = { class: "workflow-issue" }, If = {
  key: 1,
  class: "workflow-group"
}, Ef = { class: "workflow-group-header" }, Tf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Mf = { class: "workflow-issue" }, Df = {
  key: 2,
  class: "workflow-group"
}, Lf = { class: "workflow-group-header" }, Of = { class: "workflow-group-title" }, Af = { class: "workflow-list" }, Nf = { class: "workflow-name" }, Uf = {
  key: 3,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Ff = { class: "workflow-group-title" }, Bf = { class: "workflow-list" }, Vf = { class: "workflow-name" }, Wf = {
  key: 4,
  class: "workflow-group"
}, Gf = { class: "workflow-group-header" }, jf = { class: "workflow-group-title" }, Hf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, qf = {
  key: 5,
  class: "workflow-group"
}, Yf = { class: "workflow-group-title" }, Jf = { class: "expand-icon" }, Xf = {
  key: 0,
  class: "workflow-list"
}, Qf = { class: "workflow-name" }, Zf = {
  key: 1,
  class: "status-section"
}, em = {
  key: 0,
  class: "change-group"
}, tm = { class: "change-group-header" }, sm = { class: "change-group-title" }, om = { class: "change-list" }, nm = { class: "node-name" }, am = {
  key: 0,
  class: "dev-badge"
}, lm = {
  key: 1,
  class: "change-group"
}, im = { class: "change-group-header" }, rm = { class: "change-group-title" }, cm = { class: "change-list" }, um = { class: "node-name" }, dm = {
  key: 0,
  class: "dev-badge"
}, fm = {
  key: 2,
  class: "change-group"
}, mm = { class: "change-list" }, vm = { class: "change-item" }, pm = { class: "node-name" }, gm = {
  key: 3,
  class: "change-group"
}, hm = {
  key: 2,
  class: "status-section"
}, ym = { class: "section-header-row" }, wm = {
  key: 0,
  class: "drift-item"
}, bm = { class: "drift-list" }, _m = {
  key: 0,
  class: "drift-list-more"
}, km = {
  key: 1,
  class: "drift-item"
}, $m = { class: "drift-list" }, Cm = {
  key: 0,
  class: "drift-list-more"
}, xm = {
  key: 2,
  class: "drift-item"
}, Sm = { class: "drift-list" }, Im = { class: "version-actual" }, Em = { class: "version-expected" }, Tm = {
  key: 0,
  class: "drift-list-more"
}, Pm = {
  key: 3,
  class: "drift-item"
}, Rm = { class: "repair-action" }, Mm = {
  key: 3,
  class: "status-section"
}, Dm = { class: "info-box" }, Lm = { class: "drift-list" }, Om = {
  key: 0,
  class: "drift-list-more"
}, Am = {
  key: 4,
  class: "status-section"
}, Nm = { class: "warning-box" }, Um = {
  key: 5,
  class: "empty-state-inline"
}, zm = { class: "modal-actions" }, Fm = /* @__PURE__ */ fe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    et(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), Ct(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = F(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), l = F(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), i = F(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((S) => {
        var P, O, T;
        const $ = (T = (O = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : T.find((x) => x.name === S);
        return !$ || $.status !== "broken";
      })) || [];
    }), r = F(() => {
      var w, p, _, S, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = s.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = F(() => {
      var p, _, S;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = w.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = F(() => {
      var w, p, _, S, $, P;
      return !r.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (S = s.status) == null ? void 0 : S.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = F(() => {
      var p, _;
      const w = (_ = (p = s.status) == null ? void 0 : p.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function h(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, p) => {
      var _, S, $, P, O, T, x, q, B, A, I, E, L, re, Y, H, te, Q, N, U, M, we;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (ve) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", gf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (ve) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", hf, [
              t("div", yf, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(ft, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              r.value ? (a(), c("div", wf, [
                t("div", bf, [
                  C(Ot, { level: "4" }, {
                    default: g(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (ve) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), c("div", _f, [
                  t("div", kf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", $f, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Cf, [
                    (a(!0), c(j, null, pe(n.value, (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      t("span", xf, f(ve.name), 1),
                      t("span", Sf, f(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), c("div", If, [
                  t("div", Ef, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Tf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Pf, [
                    (a(!0), c(j, null, pe(l.value, (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      t("span", Rf, f(ve.name), 1),
                      t("span", Mf, f(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), c("div", Df, [
                  t("div", Lf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Of, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Af, [
                    (a(!0), c(j, null, pe(e.status.workflows.new, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Nf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), c("div", Uf, [
                  t("div", zf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Ff, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Bf, [
                    (a(!0), c(j, null, pe(e.status.workflows.modified, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Vf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (O = e.status.workflows) == null ? void 0 : O.deleted) != null && T.length ? (a(), c("div", Wf, [
                  t("div", Gf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", jf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Hf, [
                    (a(!0), c(j, null, pe(e.status.workflows.deleted, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Kf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), c("div", qf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (ve) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Yf, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", Jf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), c("div", Xf, [
                    (a(!0), c(j, null, pe(i.value, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Qf, f(ve), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), c("div", Zf, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (x = e.status.git_changes) == null ? void 0 : x.nodes_added) != null && q.length ? (a(), c("div", em, [
                  t("div", tm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", sm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", om, [
                    (a(!0), c(j, null, pe(e.status.git_changes.nodes_added, (ve) => (a(), c("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      t("span", nm, f(v(ve)), 1),
                      h(ve) ? (a(), c("span", am, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (A = (B = e.status.git_changes) == null ? void 0 : B.nodes_removed) != null && A.length ? (a(), c("div", lm, [
                  t("div", im, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", rm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", cm, [
                    (a(!0), c(j, null, pe(e.status.git_changes.nodes_removed, (ve) => (a(), c("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      t("span", um, f(v(ve)), 1),
                      h(ve) ? (a(), c("span", dm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (a(), c("div", fm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", mm, [
                    t("div", vm, [
                      t("span", pm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.has_other_changes ? (a(), c("div", gm, [...p[21] || (p[21] = [
                  t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  t("div", { class: "change-list" }, [
                    t("div", { class: "change-item" }, [
                      t("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : y("", !0)
              ])) : y("", !0),
              (L = e.status.comparison) != null && L.is_synced ? y("", !0) : (a(), c("div", hm, [
                t("div", ym, [
                  C(Ot, { level: "4" }, {
                    default: g(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (ve) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Y = (re = e.status.comparison) == null ? void 0 : re.missing_nodes) != null && Y.length ? (a(), c("div", wm, [
                  C(ft, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", bm, [
                    (a(!0), c(j, null, pe(e.status.comparison.missing_nodes.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + f(ve), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), c("div", _m, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (te = (H = e.status.comparison) == null ? void 0 : H.extra_nodes) != null && te.length ? (a(), c("div", km, [
                  C(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", $m, [
                    (a(!0), c(j, null, pe(e.status.comparison.extra_nodes.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + f(ve), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), c("div", Cm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (N = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && N.length ? (a(), c("div", xm, [
                  C(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Sm, [
                    (a(!0), c(j, null, pe(e.status.comparison.version_mismatches.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(ve.name) + ": ", 1),
                      t("span", Im, f(ve.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Em, f(ve.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), c("div", Tm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((U = e.status.comparison) == null ? void 0 : U.packages_in_sync) === !1 ? (a(), c("div", Pm, [
                  C(ft, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Rm, [
                  C(le, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (ve) => w.$emit("repair"))
                  }, {
                    default: g(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (we = (M = e.status.comparison) == null ? void 0 : M.disabled_nodes) != null && we.length ? (a(), c("div", Mm, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Dm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Lm, [
                  (a(!0), c(j, null, pe(e.status.comparison.disabled_nodes.slice(0, 10), (ve) => (a(), c("div", {
                    key: ve,
                    class: "drift-list-item"
                  }, " • " + f(ve), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), c("div", Om, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), c("div", Am, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Nm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), c("div", Um, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", zm, [
              C(le, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (ve) => w.$emit("close"))
              }, {
                default: g(() => [...p[33] || (p[33] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Bm = /* @__PURE__ */ me(Fm, [["__scopeId", "data-v-e2b37122"]]), Vm = { class: "health-section-header" }, Wm = { class: "suggestions-content" }, Gm = { class: "suggestions-text" }, jm = { style: { "margin-top": "var(--cg-space-3)" } }, Hm = {
  key: 1,
  class: "no-issues-text"
}, Km = /* @__PURE__ */ fe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = k(!1), i = k(!1);
    function r() {
      l.value = !0;
    }
    function u() {
      l.value = !1, m("view-workflows");
    }
    function d() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = k(!1), h = k(!1);
    function w() {
      h.value = !0, m("repair-environment");
    }
    function p() {
      h.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const S = F(() => {
      const Q = n.status.workflows.analyzed || [], N = Q.filter(
        (U) => U.unresolved_models_count > 0 || U.ambiguous_models_count > 0
      );
      return N.length === 0 && n.status.missing_models_count > 0 ? Q.filter((U) => U.sync_state === "synced") : N;
    });
    function $() {
      const Q = S.value;
      Q.length !== 0 && (v.value = !0, m("repair-missing-models", Q.map((N) => N.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const O = F(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), T = F(() => n.status.has_changes), x = F(() => {
      const Q = n.status.git_changes;
      return Q.nodes_added.length > 0 || Q.nodes_removed.length > 0 || Q.workflow_changes;
    }), q = F(() => n.status.has_changes || O.value), B = F(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), A = F(() => n.status.git_changes.has_other_changes), I = F(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter((N) => N.status === "broken")) || [];
    }), E = F(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), L = F(() => I.value.length > 0), re = F(() => L.value || E.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = F(() => {
      const Q = [];
      return n.status.workflows.new.length > 0 && Q.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Q.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Q.push(`${n.status.workflows.deleted.length} deleted`), Q.length > 0 ? `${Q.join(", ")} workflow${Q.length === 1 && !Q[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), H = F(() => {
      var U, M;
      const Q = [], N = n.status.comparison;
      return (U = N.missing_nodes) != null && U.length && Q.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (M = N.extra_nodes) != null && M.length && Q.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), Q.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Q.join(" and ")}.`;
    }), te = F(() => {
      var U, M;
      const Q = [], N = n.status.comparison;
      return (U = N.extra_nodes) != null && U.length && (N.extra_nodes.slice(0, 3).forEach((we) => {
        Q.push(`Untracked: ${we}`);
      }), N.extra_nodes.length > 3 && Q.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (M = N.missing_nodes) != null && M.length && (N.missing_nodes.slice(0, 3).forEach((we) => {
        Q.push(`Missing: ${we}`);
      }), N.missing_nodes.length > 3 && Q.push(`...and ${N.missing_nodes.length - 3} more missing`)), Q;
    });
    return (Q, N) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, { title: "STATUS" })
        ]),
        content: g(() => [
          n.setupState === "no_workspace" ? (a(), R(Kt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (U) => Q.$emit("start-setup"))
              }, {
                default: g(() => [...N[13] || (N[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), R(Kt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (U) => Q.$emit("view-environments"))
              }, {
                default: g(() => [...N[14] || (N[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), R(Kt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (U) => Q.$emit("create-environment"))
              }, {
                default: g(() => [...N[15] || (N[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (U) => i.value = !0),
            onMouseleave: N[5] || (N[5] = (U) => i.value = !1)
          }, [
            t("div", Vm, [
              C(Ot, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...N[16] || (N[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Uu, { name: "fade" }, {
                default: g(() => [
                  i.value ? (a(), R(le, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: r
                  }, {
                    default: g(() => [...N[17] || (N[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(jd, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, eo({
              left: g(() => [
                e.status.workflows.new.length ? (a(), R(rs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), R(rs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), R(rs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(rs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: O.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (a(), R(rs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(rs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(rs, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                A.value ? (a(), R(rs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                T.value && !x.value && !A.value ? (a(), R(rs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                T.value ? y("", !0) : (a(), R(rs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              q.value ? {
                name: "footer",
                fn: g(() => [
                  N[19] || (N[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Wm, [
                    t("span", Gm, f(Y.value), 1),
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (U) => Q.$emit("commit-changes"))
                    }, {
                      default: g(() => [...N[18] || (N[18] = [
                        b(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (a(), R(Kt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (U) => Q.$emit("create-branch"))
              }, {
                default: g(() => [...N[20] || (N[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", jm, [
            C(Ot, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...N[21] || (N[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (a(), c(j, { key: 0 }, [
              I.value.length > 0 ? (a(), R(Kt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((U) => `${U.name} — ${U.issue_summary}`)
              }, {
                actions: g(() => [
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (U) => Q.$emit("view-workflows"))
                  }, {
                    default: g(() => [...N[22] || (N[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              E.value.length > 0 ? (a(), R(Kt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: E.value.map((U) => `${U.name} — ${U.models_needing_path_sync_count} model path${U.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (U) => Q.$emit("view-workflows"))
                  }, {
                    default: g(() => [...N[23] || (N[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !L.value ? (a(), R(Kt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: $
                  }, {
                    default: g(() => [
                      b(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(le, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (U) => Q.$emit("view-workflows"))
                  }, {
                    default: g(() => [...N[24] || (N[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), R(Kt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: H.value,
                items: te.value
              }, {
                actions: g(() => [
                  C(le, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r
                  }, {
                    default: g(() => [...N[25] || (N[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (U) => Q.$emit("view-nodes"))
                  }, {
                    default: g(() => [...N[26] || (N[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), R(Kt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[11] || (N[11] = (U) => Q.$emit("view-nodes"))
                  }, {
                    default: g(() => [...N[27] || (N[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : q.value ? (a(), c("span", Hm, "No issues")) : (a(), R(ss, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Bm, {
        show: l.value,
        status: e.status,
        "is-repairing": h.value,
        onClose: N[12] || (N[12] = (U) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), qm = /* @__PURE__ */ me(Km, [["__scopeId", "data-v-55fcd77f"]]), Ym = ["type", "value", "placeholder", "disabled"], Jm = /* @__PURE__ */ fe({
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
    const n = e, l = o, i = k(null);
    function r(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return et(() => {
      n.autoFocus && i.value && i.value.focus();
    }), s({
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
      class: Se(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: r,
      onKeyup: [
        d[0] || (d[0] = Xt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Xt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, Ym));
  }
}), En = /* @__PURE__ */ me(Jm, [["__scopeId", "data-v-0380d08f"]]), Xm = { class: "branch-create-form" }, Qm = { class: "form-actions" }, Zm = /* @__PURE__ */ fe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = F(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function r() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), c("div", Xm, [
      C(En, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: r
      }, null, 8, ["modelValue"]),
      t("div", Qm, [
        C(le, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: g(() => [...d[1] || (d[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(le, {
          variant: "secondary",
          size: "sm",
          onClick: r
        }, {
          default: g(() => [...d[2] || (d[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ev = /* @__PURE__ */ me(Zm, [["__scopeId", "data-v-7c500394"]]), tv = { class: "branch-list-item__indicator" }, sv = { class: "branch-list-item__name" }, ov = {
  key: 0,
  class: "branch-list-item__actions"
}, nv = {
  key: 0,
  class: "branch-list-item__current-label"
}, av = /* @__PURE__ */ fe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Se(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", tv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", sv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), c("div", ov, [
        He(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), c("span", nv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), lv = /* @__PURE__ */ me(av, [["__scopeId", "data-v-c6581a24"]]), iv = {
  key: 2,
  class: "branch-list"
}, rv = /* @__PURE__ */ fe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(r) {
      o("create", r), i();
    }
    function i() {
      n.value = !1;
    }
    return (r, u) => (a(), R(Tt, null, {
      header: g(() => [
        C(Pt, { title: "BRANCHES" }, {
          actions: g(() => [
            n.value ? y("", !0) : (a(), R(le, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (d) => n.value = !0)
            }, {
              default: g(() => [...u[1] || (u[1] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: g(() => [
        n.value ? (a(), R(ev, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(ss, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), c("div", iv, [
          (a(!0), c(j, null, pe(e.branches, (d) => (a(), R(lv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: g(() => [
              d.is_current ? y("", !0) : (a(), R(le, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => r.$emit("delete", d.name)
              }, {
                default: g(() => [...u[2] || (u[2] = [
                  b(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? y("", !0) : (a(), R(le, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => r.$emit("switch", d.name)
              }, {
                default: g(() => [...u[3] || (u[3] = [
                  b(" Switch ", -1)
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
}), cv = /* @__PURE__ */ me(rv, [["__scopeId", "data-v-86784ddd"]]), uv = { class: "commit-list" }, dv = /* @__PURE__ */ fe({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), c("div", uv, [
      He(s.$slots, "default", {}, void 0)
    ]));
  }
}), fv = /* @__PURE__ */ me(dv, [["__scopeId", "data-v-8c5ee761"]]), mv = { class: "commit-hash" }, vv = /* @__PURE__ */ fe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = F(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), c("span", mv, f(o.value), 1));
  }
}), pr = /* @__PURE__ */ me(vv, [["__scopeId", "data-v-7c333cc6"]]), pv = { class: "commit-message" }, gv = { class: "commit-date" }, hv = /* @__PURE__ */ fe({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l() {
      o.clickable && n("click");
    }
    return (i, r) => (a(), c("div", {
      class: Se(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(pr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", pv, f(e.message), 1),
      t("span", gv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), c("div", {
        key: 0,
        class: "commit-actions",
        onClick: r[0] || (r[0] = it(() => {
        }, ["stop"]))
      }, [
        He(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), yv = /* @__PURE__ */ me(hv, [["__scopeId", "data-v-dd7c621b"]]), wv = /* @__PURE__ */ fe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), R(Tt, null, {
      header: g(() => [
        C(Pt, { title: "HISTORY" })
      ]),
      content: g(() => [
        e.commits.length === 0 ? (a(), R(ss, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(fv, { key: 1 }, {
          default: g(() => [
            (a(!0), c(j, null, pe(e.commits, (n) => (a(), R(yv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: g(() => [
                C(le, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (l) => s.$emit("checkout", n),
                  title: "Checkout this commit"
                }, {
                  default: g(() => [...o[0] || (o[0] = [
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
      _: 1
    }));
  }
}), bv = /* @__PURE__ */ me(wv, [["__scopeId", "data-v-981c3c64"]]), TT = Fs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const PT = [
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
], RT = {
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
}, _v = [
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
], MT = [
  ..._v,
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
function lo() {
  return !1;
}
function rt() {
  const e = k(!1), s = k(null);
  async function o(J, _e) {
    var ct;
    if (!((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi(J, _e);
    if (!Ae.ok) {
      const Ne = await Ae.json().catch(() => ({}));
      throw new Error(Ne.error || Ne.message || `Request failed: ${Ae.status}`);
    }
    return Ae.json();
  }
  async function n(J = !1) {
    return o(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(J, _e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: _e })
    });
  }
  async function i(J = 10, _e = 0) {
    return o(`/v2/comfygit/log?limit=${J}&offset=${_e}`);
  }
  async function r(J) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function u() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function d() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function m(J) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function h(J) {
    return o(`/v2/comfygit/commit/${J}`);
  }
  async function w(J, _e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: _e })
    });
  }
  async function p(J, _e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: _e })
    });
  }
  async function _(J, _e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: _e })
    });
  }
  async function S(J, _e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(J)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: _e })
    });
  }
  async function $() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const J = await n();
        return [{
          name: J.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + J.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: J.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: J.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(J, _e) {
    const Ae = { target_env: J };
    return _e && (Ae.workspace_path = _e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ae)
    });
  }
  async function O() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function T(J) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function x() {
    return o("/v2/workspace/environments/create_status");
  }
  async function q(J = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${J}`);
  }
  async function B(J) {
    return o(`/v2/workspace/environments/${J}`, {
      method: "DELETE"
    });
  }
  async function A(J = !1) {
    try {
      return o(J ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const _e = await n(J), Ae = [];
      return _e.workflows.new.forEach((ct) => {
        Ae.push({ name: ct, status: "new", missing_nodes: 0, missing_models: 0, path: ct });
      }), _e.workflows.modified.forEach((ct) => {
        Ae.push({ name: ct, status: "modified", missing_nodes: 0, missing_models: 0, path: ct });
      }), _e.workflows.synced.forEach((ct) => {
        Ae.push({ name: ct, status: "synced", missing_nodes: 0, missing_models: 0, path: ct });
      }), Ae;
    }
  }
  async function I(J) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/details`);
  }
  async function E(J) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/resolve`, {
      method: "POST"
    });
  }
  async function L(J, _e, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: _e, install_models: Ae })
    });
  }
  async function re(J, _e, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: _e, importance: Ae })
    });
  }
  async function Y() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function H() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function te(J) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function Q(J) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function N(J, _e) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function U(J, _e) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function M(J) {
    return o(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function we(J) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ve() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ie() {
    return o("/v2/workspace/models/directory");
  }
  async function Re(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function Ke(J) {
    try {
      const _e = J ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(J)}` : "/v2/comfygit/config";
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
  async function Xe(J, _e) {
    const Ae = _e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(_e)}` : "/v2/comfygit/config";
    return o(Ae, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ke(J, _e) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), _e && Ae.append("lines", _e.toString()), o(`/v2/comfygit/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Ee(J, _e) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), _e && Ae.append("lines", _e.toString()), o(`/v2/workspace/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Ge() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function be() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ae(J, _e) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), _e && Ae.append("lines", _e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Ve() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Te(J) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
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
  async function V(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/track-dev`, {
      method: "POST"
    });
  }
  async function se(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function ne(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function ue(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function de() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function $e(J, _e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: _e })
    });
  }
  async function Ce(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function oe(J, _e, Ae) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: _e, push_url: Ae })
    });
  }
  async function ce(J, _e) {
    const Ae = {};
    return _e && (Ae["X-Git-Auth-Token"] = _e), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST",
      headers: Ae
    });
  }
  async function De(J) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function xe(J = "skip", _e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: _e
      })
    });
  }
  async function Z(J, _e) {
    const Ae = _e ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview`;
    return o(Ae);
  }
  async function K(J, _e = {}) {
    const Ae = { "Content-Type": "application/json" };
    return _e.authToken && (Ae["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/pull`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({
        model_strategy: _e.modelStrategy || "skip",
        force: _e.force || !1,
        resolutions: _e.resolutions
      })
    });
  }
  async function Pe(J, _e) {
    const Ae = _e ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Ae);
  }
  async function he(J, _e = {}) {
    const Ae = { "Content-Type": "application/json" };
    return _e.authToken && (Ae["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({ force: _e.force || !1 })
    });
  }
  async function ge(J, _e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: _e })
    });
  }
  async function W(J) {
    const _e = {
      success: 0,
      failed: []
    };
    for (const Ae of J)
      try {
        await E(Ae), _e.success++;
      } catch (ct) {
        _e.failed.push({
          name: Ae,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return _e;
  }
  async function z(J) {
    var ct;
    const _e = new FormData();
    if (_e.append("file", J), !((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: _e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ae.ok) {
      const Ne = await Ae.json().catch(() => ({}));
      throw new Error(Ne.error || `Preview failed: ${Ae.status}`);
    }
    return Ae.json();
  }
  async function ie(J) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(J)}`
    );
  }
  async function ze(J, _e, Ae, ct) {
    var el;
    const Ne = new FormData();
    if (Ne.append("file", J), Ne.append("name", _e), Ne.append("model_strategy", Ae), Ne.append("torch_backend", ct), !((el = window.app) != null && el.api))
      throw new Error("ComfyUI API not available");
    const Co = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ne
    });
    if (!Co.ok) {
      const tl = await Co.json().catch(() => ({}));
      throw new Error(tl.message || tl.error || `Import failed: ${Co.status}`);
    }
    return Co.json();
  }
  async function Qe() {
    return o("/v2/workspace/import/status");
  }
  async function vt(J) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: J })
    });
  }
  async function at(J, _e, Ae, ct) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: J,
        name: _e,
        model_strategy: Ae,
        torch_backend: ct
      })
    });
  }
  async function dt() {
    return o("/v2/setup/status");
  }
  async function Rt(J) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Ut() {
    return o("/v2/setup/initialize_status");
  }
  async function jt(J) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Bs() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Ts() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function to(J, _e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: _e })
    });
  }
  async function _o() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ko(J) {
    const _e = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(_e);
  }
  async function $o(J) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ye() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function X(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function je(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/stop`, {
      method: "POST"
    });
  }
  async function ht(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/start`, {
      method: "POST"
    });
  }
  async function Ht(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/status`);
  }
  async function ps(J) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function gs(J = !1) {
    return o(J ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ns() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Oe() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function as(J) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ee(J) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function G(J) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Me() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function We(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/info`);
  }
  async function ot(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`);
  }
  async function mt(J, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function Mt(J, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(_e)}/start`, {
      method: "POST"
    });
  }
  async function ls(J, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(_e)}/stop`, {
      method: "POST"
    });
  }
  async function Vs(J, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(_e)}`, {
      method: "DELETE"
    });
  }
  async function Ws(J) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: J })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: n,
    commit: l,
    getHistory: i,
    exportEnv: r,
    validateExport: u,
    validateDeploy: d,
    exportEnvWithForce: m,
    // Git Operations
    getBranches: v,
    getCommitDetail: h,
    checkout: w,
    createBranch: p,
    switchBranch: _,
    deleteBranch: S,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: O,
    createEnvironment: T,
    getCreateProgress: x,
    getComfyUIReleases: q,
    deleteEnvironment: B,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: I,
    resolveWorkflow: E,
    installWorkflowDeps: L,
    setModelImportance: re,
    // Model Management
    getEnvironmentModels: Y,
    getWorkspaceModels: H,
    getModelDetails: te,
    openFileLocation: Q,
    addModelSource: N,
    removeModelSource: U,
    deleteModel: M,
    downloadModel: we,
    scanWorkspaceModels: ve,
    getModelsDirectory: Ie,
    setModelsDirectory: Re,
    // Settings
    getConfig: Ke,
    updateConfig: Xe,
    // Debug/Logs
    getEnvironmentLogs: ke,
    getWorkspaceLogs: Ee,
    getEnvironmentLogPath: Ge,
    getWorkspaceLogPath: be,
    getOrchestratorLogs: ae,
    getOrchestratorLogPath: Ve,
    openFile: Te,
    // Node Management
    getNodes: D,
    trackNodeAsDev: V,
    installNode: se,
    updateNode: ne,
    uninstallNode: ue,
    // Git Remotes
    getRemotes: de,
    addRemote: $e,
    removeRemote: Ce,
    updateRemoteUrl: oe,
    fetchRemote: ce,
    getRemoteSyncStatus: De,
    // Push/Pull
    getPullPreview: Z,
    pullFromRemote: K,
    getPushPreview: Pe,
    pushToRemote: he,
    validateMerge: ge,
    // Environment Sync
    syncEnvironmentManually: xe,
    // Workflow Repair
    repairWorkflowModels: W,
    // Import Operations
    previewTarballImport: z,
    previewGitImport: vt,
    validateEnvironmentName: ie,
    executeImport: ze,
    executeGitImport: at,
    getImportProgress: Qe,
    // First-Time Setup
    getSetupStatus: dt,
    initializeWorkspace: Rt,
    getInitializeProgress: Ut,
    validatePath: jt,
    // Deploy Operations
    getDeploySummary: Bs,
    getDataCenters: Ts,
    testRunPodConnection: to,
    getNetworkVolumes: _o,
    getRunPodGpuTypes: ko,
    deployToRunPod: $o,
    getRunPodPods: ye,
    terminateRunPodPod: X,
    stopRunPodPod: je,
    startRunPodPod: ht,
    getDeploymentStatus: Ht,
    exportDeployPackage: ps,
    getStoredRunPodKey: gs,
    clearRunPodKey: ns,
    // Custom Worker Operations
    getCustomWorkers: Oe,
    addCustomWorker: as,
    removeCustomWorker: ee,
    testWorkerConnection: G,
    scanForWorkers: Me,
    getWorkerSystemInfo: We,
    getWorkerInstances: ot,
    deployToWorker: mt,
    startWorkerInstance: Mt,
    stopWorkerInstance: ls,
    terminateWorkerInstance: Vs,
    // Git Authentication
    testGitAuth: Ws
  };
}
async function cn(e, s) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, s);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function kv() {
  async function e() {
    try {
      return await cn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await cn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await cn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await cn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const $v = { class: "base-modal-header" }, Cv = {
  key: 0,
  class: "base-modal-title"
}, xv = { class: "base-modal-body" }, Sv = {
  key: 0,
  class: "base-modal-loading"
}, Iv = {
  key: 1,
  class: "base-modal-error"
}, Ev = {
  key: 0,
  class: "base-modal-footer"
}, Tv = /* @__PURE__ */ fe({
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
    const o = e, n = s;
    function l() {
      o.closeOnOverlayClick && n("close");
    }
    function i(r) {
      r.key === "Escape" && o.showCloseButton && n("close");
    }
    return et(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), wo(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (r, u) => (a(), R(wt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Se(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", $v, [
            He(r.$slots, "header", {}, () => [
              e.title ? (a(), c("h3", Cv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), c("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => r.$emit("close"))
            }, [...u[2] || (u[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : y("", !0)
          ]),
          t("div", xv, [
            e.loading ? (a(), c("div", Sv, "Loading...")) : e.error ? (a(), c("div", Iv, f(e.error), 1)) : He(r.$slots, "body", { key: 2 }, void 0)
          ]),
          r.$slots.footer ? (a(), c("div", Ev, [
            He(r.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), gt = /* @__PURE__ */ me(Tv, [["__scopeId", "data-v-8dab1081"]]), Pv = ["type", "disabled"], Rv = {
  key: 0,
  class: "spinner"
}, Mv = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), c("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Se(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", Rv)) : y("", !0),
      He(s.$slots, "default", {}, void 0)
    ], 10, Pv));
  }
}), Le = /* @__PURE__ */ me(Mv, [["__scopeId", "data-v-f3452606"]]), Dv = {
  key: 0,
  class: "base-title-count"
}, Lv = /* @__PURE__ */ fe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), R(Ba(`h${e.level}`), {
      class: Se(["base-title", e.variant])
    }, {
      default: g(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Dv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), zo = /* @__PURE__ */ me(Lv, [["__scopeId", "data-v-5a01561d"]]), Ov = ["value", "disabled"], Av = {
  key: 0,
  value: "",
  disabled: ""
}, Nv = ["value"], Uv = {
  key: 0,
  class: "base-select-error"
}, zv = /* @__PURE__ */ fe({
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
    function s(n) {
      return typeof n == "string" ? n : n.value;
    }
    function o(n) {
      return typeof n == "string" ? n : n.label;
    }
    return (n, l) => (a(), c("div", {
      class: Se(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Se(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), c("option", Av, f(e.placeholder), 1)) : y("", !0),
        (a(!0), c(j, null, pe(e.options, (i) => (a(), c("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Nv))), 128))
      ], 42, Ov),
      e.error ? (a(), c("span", Uv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Fv = /* @__PURE__ */ me(zv, [["__scopeId", "data-v-7436d745"]]), Bv = { class: "popover-header" }, Vv = { class: "popover-title" }, Wv = { class: "popover-content" }, Gv = {
  key: 0,
  class: "popover-actions"
}, jv = /* @__PURE__ */ fe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Gt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", Bv, [
            t("h4", Vv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Wv, [
            He(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), c("div", Gv, [
            He(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), os = /* @__PURE__ */ me(jv, [["__scopeId", "data-v-42815ace"]]), Hv = { class: "detail-section" }, Kv = {
  key: 0,
  class: "empty-message"
}, qv = { class: "model-header" }, Yv = { class: "model-name" }, Jv = { class: "model-details" }, Xv = { class: "model-row" }, Qv = { class: "model-row" }, Zv = { class: "label" }, ep = {
  key: 0,
  class: "model-row model-row-nodes"
}, tp = { class: "node-list" }, sp = ["onClick"], op = {
  key: 1,
  class: "model-row"
}, np = { class: "value" }, ap = {
  key: 2,
  class: "model-row"
}, lp = { class: "value error" }, ip = {
  key: 0,
  class: "model-actions"
}, rp = { class: "detail-section" }, cp = {
  key: 0,
  class: "empty-message"
}, up = { class: "node-name" }, dp = {
  key: 0,
  class: "node-version"
}, fp = /* @__PURE__ */ fe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: r } = rt(), u = k(null), d = k(!1), m = k(null), v = k(!1), h = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(I) {
      switch (I) {
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
    function $(I) {
      switch (I) {
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
    function P(I) {
      if (!I.loaded_by || I.loaded_by.length === 0) return [];
      const E = I.hash || I.filename;
      return p.value.has(E) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function O(I) {
      return p.value.has(I);
    }
    function T(I) {
      p.value.has(I) ? p.value.delete(I) : p.value.add(I), p.value = new Set(p.value);
    }
    async function x() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function q(I, E) {
      h.value[I] = E, v.value = !0;
    }
    async function B(I) {
      try {
        await r(I);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function A() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [I, E] of Object.entries(h.value))
          await i(o.workflowName, I, E);
        n("refresh"), n("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return et(x), (I, E) => (a(), c(j, null, [
      C(gt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (L) => n("close"))
      }, {
        body: g(() => [
          u.value ? (a(), c(j, { key: 0 }, [
            t("section", Hv, [
              C(zo, { variant: "section" }, {
                default: g(() => [
                  b("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), c("div", Kv, " No models used in this workflow ")) : y("", !0),
              (a(!0), c(j, null, pe(u.value.models, (L) => {
                var re;
                return a(), c("div", {
                  key: L.hash || L.filename,
                  class: "model-card"
                }, [
                  t("div", qv, [
                    E[6] || (E[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Yv, f(L.filename), 1)
                  ]),
                  t("div", Jv, [
                    t("div", Xv, [
                      E[7] || (E[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Se(["value", S(L.status)])
                      }, f($(L.status)), 3)
                    ]),
                    t("div", Qv, [
                      t("span", Zv, [
                        E[8] || (E[8] = b(" Importance: ", -1)),
                        C(vr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (Y) => w.value = !0)
                        })
                      ]),
                      C(Fv, {
                        "model-value": h.value[L.filename] || L.importance,
                        options: _,
                        "onUpdate:modelValue": (Y) => q(L.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    L.loaded_by && L.loaded_by.length > 0 ? (a(), c("div", ep, [
                      E[9] || (E[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", tp, [
                        (a(!0), c(j, null, pe(P(L), (Y, H) => (a(), c("div", {
                          key: `${Y.node_id}-${H}`,
                          class: "node-reference"
                        }, f(Y.node_type) + " (Node #" + f(Y.node_id) + ") ", 1))), 128)),
                        L.loaded_by.length > 3 ? (a(), c("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => T(L.hash || L.filename)
                        }, f(O(L.hash || L.filename) ? "▼ Show less" : `▶ View all (${L.loaded_by.length})`), 9, sp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    L.size_mb ? (a(), c("div", op, [
                      E[10] || (E[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", np, f(L.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    L.has_category_mismatch ? (a(), c("div", ap, [
                      E[13] || (E[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", lp, [
                        E[11] || (E[11] = b(" In ", -1)),
                        t("code", null, f(L.actual_category) + "/", 1),
                        E[12] || (E[12] = b(" but loader needs ", -1)),
                        t("code", null, f((re = L.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  L.status !== "available" ? (a(), c("div", ip, [
                    L.status === "downloadable" ? (a(), R(Le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (Y) => n("resolve"))
                    }, {
                      default: g(() => [...E[14] || (E[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : L.status === "category_mismatch" && L.file_path ? (a(), R(Le, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => B(L.file_path)
                    }, {
                      default: g(() => [...E[15] || (E[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : L.status !== "path_mismatch" ? (a(), R(Le, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: E[2] || (E[2] = (Y) => n("resolve"))
                    }, {
                      default: g(() => [...E[16] || (E[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", rp, [
              C(zo, { variant: "section" }, {
                default: g(() => [
                  b("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), c("div", cp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), c(j, null, pe(u.value.nodes, (L) => (a(), c("div", {
                key: L.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Se(["node-status", L.status === "installed" ? "installed" : "missing"])
                }, f(L.status === "installed" ? "✓" : "✕"), 3),
                t("span", up, f(L.name), 1),
                L.version ? (a(), c("span", dp, "v" + f(L.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: g(() => [
          C(Le, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (L) => n("close"))
          }, {
            default: g(() => [...E[17] || (E[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), R(Le, {
            key: 0,
            variant: "primary",
            onClick: A
          }, {
            default: g(() => [...E[18] || (E[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(os, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: E[5] || (E[5] = (L) => w.value = !1)
      }, {
        content: g(() => [...E[19] || (E[19] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              b(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              b(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              b(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), mp = /* @__PURE__ */ me(fp, [["__scopeId", "data-v-668728e6"]]), Ye = Fs({
  items: [],
  status: "idle"
});
let ds = null;
function gr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function na(e) {
  return Ye.items.find((s) => s.id === e);
}
async function io() {
  if (Ye.status === "downloading") return;
  const e = Ye.items.find((s) => s.status === "queued");
  if (!e) {
    Ye.status = "idle";
    return;
  }
  Ye.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await vp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", io();
  }
}
async function vp(e) {
  return new Promise((s, o) => {
    ds && (ds.close(), ds = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    ds = l;
    let i = Date.now(), r = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
        switch (m.type) {
          case "progress":
            e.downloaded = m.downloaded || 0, e.size = m.total || e.size;
            const v = Date.now(), h = (v - i) / 1e3;
            if (h > 0.5) {
              const w = e.downloaded - r;
              if (e.speed = w / h, i = v, r = e.downloaded, e.speed > 0 && e.size > 0) {
                const p = e.size - e.downloaded;
                e.eta = p / e.speed;
              }
            }
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            u = !0, l.close(), ds = null, s();
            break;
          case "error":
            u = !0, l.close(), ds = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), ds = null, u || o(new Error("Connection lost"));
    };
  });
}
async function pp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: gr(),
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
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function en() {
  function e($) {
    for (const P of $) {
      if (Ye.items.some(
        (x) => x.url === P.url && x.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const T = {
        id: gr(),
        workflow: P.workflow,
        filename: P.filename,
        url: P.url,
        targetPath: P.targetPath,
        size: P.size || 0,
        type: P.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Ye.items.push(T);
    }
    Ye.status === "idle" && io();
  }
  async function s($) {
    const P = na($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ds && (ds.close(), ds = null), P.status = "failed", P.error = "Cancelled by user", Ye.status = "idle", io();
      } else if (P.status === "queued") {
        const O = Ye.items.findIndex((T) => T.id === $);
        O >= 0 && Ye.items.splice(O, 1);
      }
    }
  }
  function o($) {
    const P = na($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Ye.status === "idle" && io());
  }
  function n($) {
    const P = na($);
    !P || P.status !== "paused" || (P.status = "queued", Ye.status === "idle" && io());
  }
  function l() {
    const $ = Ye.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Ye.status === "idle" && io();
  }
  function i($) {
    const P = Ye.items.findIndex((O) => O.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Ye.items[P].status) && Ye.items.splice(P, 1);
  }
  function r() {
    Ye.items = Ye.items.filter(($) => $.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter(($) => $.status !== "failed");
  }
  const d = F(
    () => Ye.items.find(($) => $.status === "downloading")
  ), m = F(
    () => Ye.items.filter(($) => $.status === "queued")
  ), v = F(
    () => Ye.items.filter(($) => $.status === "completed")
  ), h = F(
    () => Ye.items.filter(($) => $.status === "failed")
  ), w = F(
    () => Ye.items.filter(($) => $.status === "paused")
  ), p = F(() => Ye.items.length > 0), _ = F(
    () => Ye.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), S = F(
    () => Ye.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: wn(Ye),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: h,
    pausedItems: w,
    hasItems: p,
    activeCount: _,
    hasPaused: S,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: r,
    clearFailed: u,
    loadPendingDownloads: pp
  };
}
function hr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function r(O, T) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(O, T);
    if (!x.ok) {
      const B = await x.json().catch(() => ({})), A = B.error || B.message || `Request failed: ${x.status}`;
      throw new Error(A);
    }
    return x.json();
  }
  async function u(O) {
    l.value = !0, i.value = null;
    try {
      let T;
      return lo() || (T = await r(
        `/v2/comfygit/workflow/${O}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = T, T;
    } catch (T) {
      const x = T instanceof Error ? T.message : "Unknown error occurred";
      throw i.value = x, T;
    } finally {
      l.value = !1;
    }
  }
  async function d(O, T, x, q) {
    l.value = !0, i.value = null;
    try {
      let B;
      if (!lo()) {
        const A = Object.fromEntries(T), I = Object.fromEntries(x), E = q ? Array.from(q) : [];
        B = await r(
          `/v2/comfygit/workflow/${O}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: A,
              model_choices: I,
              skipped_packages: E
            })
          }
        );
      }
      return s.value = B, B;
    } catch (B) {
      const A = B instanceof Error ? B.message : "Unknown error occurred";
      throw i.value = A, B;
    } finally {
      l.value = !1;
    }
  }
  async function m(O, T = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return lo() || (x = await r(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: T })
        }
      )), o.value = x.results, x.results;
    } catch (x) {
      const q = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = q, x;
    } finally {
      l.value = !1;
    }
  }
  async function v(O, T = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return lo() || (x = await r(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: T })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const q = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = q, x;
    } finally {
      l.value = !1;
    }
  }
  const h = Fs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function p(O) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return lo(), await _(O);
    } catch (T) {
      const x = T instanceof Error ? T.message : "Failed to install nodes";
      throw h.installError = x, T;
    }
  }
  async function _(O) {
    var x;
    const T = await r(
      `/v2/comfygit/workflow/${O}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: h.nodesToInstall
        })
      }
    );
    if (h.nodeInstallProgress) {
      h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
      const q = new Map(((x = T.failed) == null ? void 0 : x.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < h.nodesToInstall.length; B++) {
        const A = h.nodesToInstall[B], I = q.get(A);
        h.nodeInstallProgress.completedNodes.push({
          node_id: A,
          success: !I,
          error: I
        });
      }
    }
    return h.nodesInstalled = T.nodes_installed, h.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (h.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function S(O, T, x) {
    w(), h.phase = "resolving", i.value = null;
    const q = Object.fromEntries(T), B = Object.fromEntries(x);
    try {
      const A = await fetch(`/v2/comfygit/workflow/${O}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: B
        })
      });
      if (!A.ok)
        throw new Error(`Request failed: ${A.status}`);
      if (!A.body)
        throw new Error("No response body");
      const I = A.body.getReader(), E = new TextDecoder();
      let L = "";
      for (; ; ) {
        const { done: re, value: Y } = await I.read();
        if (re) break;
        L += E.decode(Y, { stream: !0 });
        const H = L.split(`

`);
        L = H.pop() || "";
        for (const te of H) {
          if (!te.trim()) continue;
          const Q = te.split(`
`);
          let N = "", U = "";
          for (const M of Q)
            M.startsWith("event: ") ? N = M.slice(7) : M.startsWith("data: ") && (U = M.slice(6));
          if (U)
            try {
              const M = JSON.parse(U);
              $(N, M);
            } catch (M) {
              console.warn("Failed to parse SSE event:", M);
            }
        }
      }
    } catch (A) {
      const I = A instanceof Error ? A.message : "Unknown error occurred";
      throw i.value = I, h.error = I, h.phase = "error", A;
    }
  }
  function $(O, T) {
    switch (O) {
      case "batch_start":
        h.phase = "downloading", h.totalFiles = T.total;
        break;
      case "file_start":
        h.currentFile = T.filename, h.currentFileIndex = T.index, h.bytesDownloaded = 0, h.bytesTotal = void 0;
        break;
      case "file_progress":
        h.bytesDownloaded = T.downloaded, h.bytesTotal = T.total;
        break;
      case "file_complete":
        h.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        h.nodesToInstall = T.nodes_to_install || [], T.download_results && (h.completedFiles = T.download_results), h.phase = "complete";
        break;
      case "error":
        h.error = T.message, h.phase = "error", i.value = T.message;
        break;
    }
  }
  function P(O, T) {
    const { addToQueue: x } = en(), q = T.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: O,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return q.length > 0 && x(q), q.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: i,
    progress: h,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: S,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: P
  };
}
const gp = { class: "resolution-stepper" }, hp = { class: "stepper-header" }, yp = ["onClick"], wp = {
  key: 0,
  class: "step-icon"
}, bp = {
  key: 1,
  class: "step-number"
}, _p = { class: "step-label" }, kp = {
  key: 0,
  class: "step-connector"
}, $p = { class: "stepper-content" }, Cp = /* @__PURE__ */ fe({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const h = o.stepStats[m];
        return h.total > 0 && h.resolved === h.total;
      }
      return o.completedSteps.includes(m);
    }
    function i(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const h = o.stepStats[m];
        return h.resolved > 0 && h.resolved < h.total;
      }
      return !1;
    }
    function r(m) {
      return l(m) ? "state-complete" : i(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function d(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), c("div", gp, [
      t("div", hp, [
        (a(!0), c(j, null, pe(e.steps, (h, w) => (a(), c("div", {
          key: h.id,
          class: Se(["step", {
            active: e.currentStep === h.id,
            completed: l(h.id),
            "in-progress": i(h.id),
            disabled: u(h.id)
          }]),
          onClick: (p) => d(h.id)
        }, [
          t("div", {
            class: Se(["step-indicator", r(h.id)])
          }, [
            l(h.id) ? (a(), c("span", wp, "✓")) : (a(), c("span", bp, f(w + 1), 1))
          ], 2),
          t("div", _p, f(h.label), 1),
          w < e.steps.length - 1 ? (a(), c("div", kp)) : y("", !0)
        ], 10, yp))), 128))
      ]),
      t("div", $p, [
        He(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), xp = /* @__PURE__ */ me(Cp, [["__scopeId", "data-v-2a7b3af8"]]), Sp = /* @__PURE__ */ fe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = F(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = F(() => `confidence-${o.value}`), l = F(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, r) => (a(), c("span", {
      class: Se(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Tn = /* @__PURE__ */ me(Sp, [["__scopeId", "data-v-17ec4b80"]]), Ip = { class: "node-info" }, Ep = { class: "node-info-text" }, Tp = { class: "item-body" }, Pp = {
  key: 0,
  class: "resolved-state"
}, Rp = {
  key: 1,
  class: "multiple-options"
}, Mp = { class: "options-list" }, Dp = ["onClick"], Lp = ["name", "value", "checked", "onChange"], Op = { class: "option-content" }, Ap = { class: "option-header" }, Np = { class: "option-package-id" }, Up = {
  key: 0,
  class: "option-title"
}, zp = { class: "option-meta" }, Fp = {
  key: 0,
  class: "installed-badge"
}, Bp = { class: "action-buttons" }, Vp = {
  key: 2,
  class: "unresolved"
}, Wp = {
  key: 0,
  class: "searching-state"
}, Gp = { class: "options-list" }, jp = ["onClick"], Hp = ["name", "value"], Kp = { class: "option-content" }, qp = { class: "option-header" }, Yp = { class: "option-package-id" }, Jp = {
  key: 0,
  class: "option-description"
}, Xp = { class: "option-meta" }, Qp = {
  key: 0,
  class: "installed-badge"
}, Zp = {
  key: 2,
  class: "unresolved-message"
}, eg = { class: "action-buttons" }, tg = /* @__PURE__ */ fe({
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
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l(d, m = 80) {
      return d.length <= m ? d : d.slice(0, m - 3) + "...";
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
    return (d, m) => (a(), c("div", {
      class: Se(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Ip, [
        t("span", Ep, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: Se(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Tp, [
        i.value ? (a(), c("div", Pp, [
          C(Le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", Rp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Mp, [
            (a(!0), c(j, null, pe(e.options, (v, h) => (a(), c("label", {
              key: v.package_id,
              class: Se(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => u(h)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => u(h)
              }, null, 40, Lp),
              t("div", Op, [
                t("div", Ap, [
                  t("span", Np, f(v.package_id), 1),
                  C(Tn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), c("div", Up, f(v.title), 1)) : y("", !0),
                t("div", zp, [
                  v.is_installed ? (a(), c("span", Fp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Dp))), 128))
          ]),
          t("div", Bp, [
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[11] || (m[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), c("div", Vp, [
          e.isSearching ? (a(), c("div", Wp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), c(j, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Gp, [
              (a(!0), c(j, null, pe(e.searchResults.slice(0, 5), (v, h) => (a(), c("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: h
                }, null, 8, Hp),
                t("div", Kp, [
                  t("div", qp, [
                    t("span", Yp, f(v.package_id), 1),
                    C(Tn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), c("div", Jp, f(l(v.description)), 1)) : y("", !0),
                  t("div", Xp, [
                    v.is_installed ? (a(), c("span", Qp, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, jp))), 128))
            ])
          ], 64)) : (a(), c("div", Zp, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", eg, [
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: g(() => {
                var v;
                return [
                  b(f((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[17] || (m[17] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), sg = /* @__PURE__ */ me(tg, [["__scopeId", "data-v-c2997d1d"]]), og = { class: "item-navigator" }, ng = { class: "nav-item-info" }, ag = ["title"], lg = { class: "nav-controls" }, ig = { class: "nav-arrows" }, rg = ["disabled"], cg = ["disabled"], ug = { class: "nav-position" }, dg = /* @__PURE__ */ fe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), c("div", og, [
      t("div", ng, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, ag)
      ]),
      t("div", lg, [
        t("div", ig, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, rg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, cg)
        ]),
        t("span", ug, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), yr = /* @__PURE__ */ me(dg, [["__scopeId", "data-v-74af7920"]]), fg = ["type", "value", "placeholder", "disabled"], mg = {
  key: 0,
  class: "base-input-error"
}, vg = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), c("div", {
      class: Se(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Se(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Xt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Xt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, fg),
      e.error ? (a(), c("span", mg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ me(vg, [["__scopeId", "data-v-9ba02cdc"]]), pg = { class: "node-resolution-step" }, gg = {
  key: 0,
  class: "auto-resolved-section"
}, hg = { class: "section-header" }, yg = { class: "stat-badge" }, wg = { class: "resolved-packages-list" }, bg = { class: "package-info" }, _g = { class: "package-id" }, kg = { class: "node-count" }, $g = { class: "package-actions" }, Cg = {
  key: 0,
  class: "status-badge install"
}, xg = {
  key: 1,
  class: "status-badge skip"
}, Sg = ["onClick"], Ig = {
  key: 1,
  class: "section-divider"
}, Eg = { class: "step-header" }, Tg = { class: "stat-badge" }, Pg = {
  key: 1,
  class: "step-body"
}, Rg = {
  key: 3,
  class: "empty-state"
}, Mg = { class: "node-modal-body" }, Dg = { class: "node-search-results-container" }, Lg = {
  key: 0,
  class: "node-search-results"
}, Og = ["onClick"], Ag = { class: "node-result-header" }, Ng = { class: "node-result-package-id" }, Ug = {
  key: 0,
  class: "node-result-description"
}, zg = {
  key: 1,
  class: "node-empty-state"
}, Fg = {
  key: 2,
  class: "node-empty-state"
}, Bg = {
  key: 3,
  class: "node-empty-state"
}, Vg = { class: "node-manual-entry-modal" }, Wg = { class: "node-modal-body" }, Gg = { class: "node-modal-actions" }, jg = /* @__PURE__ */ fe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = hr(), i = k(0), r = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), h = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function S() {
      _.value && U(), _.value = !1;
    }
    const $ = F(() => o.nodes[i.value]), P = F(() => o.nodes.filter((ke) => o.nodeChoices.has(ke.node_type)).length), O = F(() => $.value ? w.value.get($.value.node_type) || [] : []), T = F(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (ke) => {
      var Ee;
      ke && ((Ee = ke.options) != null && Ee.length || w.value.has(ke.node_type) || p.value.has(ke.node_type) || o.nodeChoices.has(ke.node_type) || await x(ke.node_type));
    }, { immediate: !0 });
    async function x(ke) {
      p.value.add(ke);
      try {
        const Ee = await l(ke, 5);
        w.value.set(ke, Ee);
      } catch {
        w.value.set(ke, []);
      } finally {
        p.value.delete(ke);
      }
    }
    const q = F(() => o.autoResolvedPackages.filter((ke) => !o.skippedPackages.has(ke.package_id)).length);
    function B(ke) {
      return o.skippedPackages.has(ke);
    }
    function A(ke) {
      n("package-skip", ke);
    }
    const I = F(() => {
      var Ee;
      if (!$.value) return "not-found";
      const ke = o.nodeChoices.get($.value.node_type);
      if (ke)
        switch (ke.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Ee = $.value.options) != null && Ee.length ? "ambiguous" : "not-found";
    }), E = F(() => {
      var Ee;
      if (!$.value) return;
      const ke = o.nodeChoices.get($.value.node_type);
      if (ke)
        switch (ke.action) {
          case "install":
            return ke.package_id ? `→ ${ke.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Ee = $.value.options) != null && Ee.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function L(ke) {
      ke >= 0 && ke < o.nodes.length && (i.value = ke);
    }
    function re() {
      $.value && n("mark-optional", $.value.node_type);
    }
    function Y() {
      $.value && n("skip", $.value.node_type);
    }
    function H(ke) {
      $.value && n("option-selected", $.value.node_type, ke);
    }
    function te() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function Q() {
      $.value && (d.value = $.value.node_type, v.value = O.value, r.value = !0, Ie(d.value));
    }
    function N() {
      m.value = "", u.value = !0;
    }
    function U() {
      r.value = !1, d.value = "", v.value = [];
    }
    function M() {
      u.value = !1, m.value = "";
    }
    let we = null;
    function ve() {
      we && clearTimeout(we), we = setTimeout(() => {
        Ie(d.value);
      }, 300);
    }
    async function Ie(ke) {
      if (!ke.trim()) {
        v.value = [];
        return;
      }
      h.value = !0;
      try {
        v.value = await l(ke, 10);
      } catch {
        v.value = [];
      } finally {
        h.value = !1;
      }
    }
    function Re(ke) {
      $.value && (n("manual-entry", $.value.node_type, ke.package_id), U());
    }
    function Ke(ke) {
      $.value && n("manual-entry", $.value.node_type, ke.package_id);
    }
    function Xe() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), M());
    }
    return (ke, Ee) => {
      var Ge, be;
      return a(), c("div", pg, [
        e.autoResolvedPackages.length > 0 ? (a(), c("div", gg, [
          t("div", hg, [
            Ee[6] || (Ee[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", yg, f(q.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", wg, [
            (a(!0), c(j, null, pe(e.autoResolvedPackages, (ae) => (a(), c("div", {
              key: ae.package_id,
              class: "resolved-package-item"
            }, [
              t("div", bg, [
                t("code", _g, f(ae.package_id), 1),
                t("span", kg, f(ae.node_types_count) + " node type" + f(ae.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", $g, [
                B(ae.package_id) ? (a(), c("span", xg, " SKIPPED ")) : (a(), c("span", Cg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ve) => A(ae.package_id)
                }, f(B(ae.package_id) ? "Include" : "Skip"), 9, Sg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), c("div", Ig)) : y("", !0),
        e.nodes.length > 0 ? (a(), c(j, { key: 2 }, [
          t("div", Eg, [
            Ee[7] || (Ee[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Tg, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R(yr, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Ee[0] || (Ee[0] = (ae) => L(i.value - 1)),
            onNext: Ee[1] || (Ee[1] = (ae) => L(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), c("div", Pg, [
            C(sg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Ge = $.value.options) != null && Ge.length),
              options: $.value.options,
              choice: (be = e.nodeChoices) == null ? void 0 : be.get($.value.node_type),
              status: I.value,
              "status-label": E.value,
              "search-results": O.value,
              "is-searching": T.value,
              onMarkOptional: re,
              onSkip: Y,
              onManualEntry: N,
              onSearch: Q,
              onOptionSelected: H,
              onClearChoice: te,
              onSearchResultSelected: Ke
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), c("div", Rg, [...Ee[8] || (Ee[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(wt, { to: "body" }, [
          r.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Ee[4] || (Ee[4] = it((ae) => _.value = !0, ["self"])),
            onMouseup: it(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Ee[3] || (Ee[3] = (ae) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Ee[9] || (Ee[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              t("div", Mg, [
                C(Qt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Ee[2] || (Ee[2] = (ae) => d.value = ae),
                  placeholder: "Search by node type, package name...",
                  onInput: ve
                }, null, 8, ["modelValue"]),
                t("div", Dg, [
                  v.value.length > 0 ? (a(), c("div", Lg, [
                    (a(!0), c(j, null, pe(v.value, (ae) => (a(), c("div", {
                      key: ae.package_id,
                      class: "node-search-result-item",
                      onClick: (Ve) => Re(ae)
                    }, [
                      t("div", Ag, [
                        t("code", Ng, f(ae.package_id), 1),
                        ae.match_confidence ? (a(), R(Tn, {
                          key: 0,
                          confidence: ae.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ae.description ? (a(), c("div", Ug, f(ae.description), 1)) : y("", !0)
                    ], 8, Og))), 128))
                  ])) : h.value ? (a(), c("div", zg, "Searching...")) : d.value ? (a(), c("div", Fg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), c("div", Bg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: it(M, ["self"])
          }, [
            t("div", Vg, [
              t("div", { class: "node-modal-header" }, [
                Ee[10] || (Ee[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              t("div", Wg, [
                C(Qt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Ee[5] || (Ee[5] = (ae) => m.value = ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Gg, [
                  C(Le, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: g(() => [...Ee[11] || (Ee[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Le, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Xe
                  }, {
                    default: g(() => [...Ee[12] || (Ee[12] = [
                      b(" Add Package ", -1)
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
}), Hg = /* @__PURE__ */ me(jg, [["__scopeId", "data-v-281581bc"]]), Kg = { class: "node-info" }, qg = { class: "node-info-text" }, Yg = { class: "item-body" }, Jg = {
  key: 0,
  class: "resolved-state"
}, Xg = {
  key: 1,
  class: "multiple-options"
}, Qg = { class: "options-list" }, Zg = ["onClick"], eh = ["name", "value", "checked", "onChange"], th = { class: "option-content" }, sh = { class: "option-header" }, oh = { class: "option-filename" }, nh = { class: "option-meta" }, ah = { class: "option-size" }, lh = { class: "option-category" }, ih = { class: "option-path" }, rh = { class: "action-buttons" }, ch = {
  key: 2,
  class: "unresolved"
}, uh = { class: "action-buttons" }, dh = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = F(() => !!o.choice);
    F(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), F(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
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
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (a(), c("div", {
      class: Se(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Kg, [
        t("span", qg, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: Se(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Yg, [
        l.value ? (a(), c("div", Jg, [
          C(Le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", Xg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Qg, [
            (a(!0), c(j, null, pe(e.options, (v, h) => (a(), c("label", {
              key: v.model.hash,
              class: Se(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => r(h)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => r(h)
              }, null, 40, eh),
              t("div", th, [
                t("div", sh, [
                  t("span", oh, f(v.model.filename), 1),
                  C(Tn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", nh, [
                  t("span", ah, f(u(v.model.size)), 1),
                  t("span", lh, f(v.model.category), 1)
                ]),
                t("div", ih, f(v.model.relative_path), 1)
              ])
            ], 10, Zg))), 128))
          ]),
          t("div", rh, [
            C(Le, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[11] || (m[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), c("div", ch, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", uh, [
            C(Le, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: g(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[15] || (m[15] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), fh = /* @__PURE__ */ me(dh, [["__scopeId", "data-v-8a82fefa"]]), mh = { class: "model-resolution-step" }, vh = { class: "step-header" }, ph = { class: "step-info" }, gh = { class: "step-title" }, hh = { class: "step-description" }, yh = { class: "stat-badge" }, wh = {
  key: 1,
  class: "step-body"
}, bh = {
  key: 2,
  class: "empty-state"
}, _h = { class: "model-search-modal" }, kh = { class: "model-modal-body" }, $h = {
  key: 0,
  class: "model-search-results"
}, Ch = ["onClick"], xh = { class: "model-result-header" }, Sh = { class: "model-result-filename" }, Ih = { class: "model-result-meta" }, Eh = { class: "model-result-category" }, Th = { class: "model-result-size" }, Ph = {
  key: 0,
  class: "model-result-path"
}, Rh = {
  key: 1,
  class: "model-no-results"
}, Mh = {
  key: 2,
  class: "model-searching"
}, Dh = { class: "model-download-url-modal" }, Lh = { class: "model-modal-body" }, Oh = { class: "model-input-group" }, Ah = { class: "model-input-group" }, Nh = { class: "model-modal-actions" }, Uh = /* @__PURE__ */ fe({
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
    function n(U) {
      var M;
      return U && ((M = o[U]) == null ? void 0 : M[0]) || null;
    }
    const l = e, i = s, r = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), h = k(""), w = k([]), p = k(!1), _ = F(() => l.models[r.value]), S = F(() => l.models.some((U) => U.is_download_intent)), $ = F(() => l.models.filter(
      (U) => l.modelChoices.has(U.filename) || U.is_download_intent
    ).length), P = F(() => {
      var M;
      if (!_.value) return "";
      const U = n((M = _.value.reference) == null ? void 0 : M.node_type);
      return U ? `${U}/${_.value.filename}` : "";
    }), O = F(() => {
      var M;
      if (!_.value) return "not-found";
      const U = l.modelChoices.get(_.value.filename);
      if (U)
        switch (U.action) {
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
      return _.value.is_download_intent ? "download" : (M = _.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), T = F(() => {
      var M, we;
      if (!_.value) return;
      const U = l.modelChoices.get(_.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (M = U.selected_model) != null && M.filename ? `→ ${U.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (we = _.value.options) != null && we.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function x(U) {
      U >= 0 && U < l.models.length && (r.value = U);
    }
    function q() {
      _.value && i("mark-optional", _.value.filename);
    }
    function B() {
      _.value && i("skip", _.value.filename);
    }
    function A(U) {
      _.value && i("option-selected", _.value.filename, U);
    }
    function I() {
      _.value && i("clear-choice", _.value.filename);
    }
    function E() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function L() {
      _.value && (v.value = _.value.download_source || "", h.value = _.value.target_path || P.value, d.value = !0);
    }
    function re() {
      u.value = !1, m.value = "", w.value = [];
    }
    function Y() {
      d.value = !1, v.value = "", h.value = "";
    }
    function H() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function te(U) {
      _.value && re();
    }
    function Q() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), h.value.trim() || void 0), Y());
    }
    function N(U) {
      if (!U) return "Unknown";
      const M = U / (1024 * 1024 * 1024);
      return M >= 1 ? `${M.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, M) => {
      var we, ve, Ie;
      return a(), c("div", mh, [
        t("div", vh, [
          t("div", ph, [
            t("h3", gh, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", hh, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", yh, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(yr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": r.value,
          "total-items": e.models.length,
          onPrev: M[0] || (M[0] = (Re) => x(r.value - 1)),
          onNext: M[1] || (M[1] = (Re) => x(r.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), c("div", wh, [
          C(fh, {
            filename: _.value.filename,
            "node-type": ((we = _.value.reference) == null ? void 0 : we.node_type) || "Unknown",
            "has-multiple-options": !!((ve = _.value.options) != null && ve.length),
            options: _.value.options,
            choice: (Ie = e.modelChoices) == null ? void 0 : Ie.get(_.value.filename),
            status: O.value,
            "status-label": T.value,
            onMarkOptional: q,
            onSkip: B,
            onDownloadUrl: L,
            onSearch: E,
            onOptionSelected: A,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), c("div", bh, [...M[5] || (M[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(re, ["self"])
          }, [
            t("div", _h, [
              t("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              t("div", kh, [
                C(Qt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (Re) => m.value = Re),
                  placeholder: "Search by filename, category...",
                  onInput: H
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), c("div", $h, [
                  (a(!0), c(j, null, pe(w.value, (Re) => (a(), c("div", {
                    key: Re.hash,
                    class: "model-search-result-item",
                    onClick: (Ke) => te()
                  }, [
                    t("div", xh, [
                      t("code", Sh, f(Re.filename), 1)
                    ]),
                    t("div", Ih, [
                      t("span", Eh, f(Re.category), 1),
                      t("span", Th, f(N(Re.size)), 1)
                    ]),
                    Re.relative_path ? (a(), c("div", Ph, f(Re.relative_path), 1)) : y("", !0)
                  ], 8, Ch))), 128))
                ])) : m.value && !p.value ? (a(), c("div", Rh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), c("div", Mh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          d.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(Y, ["self"])
          }, [
            t("div", Dh, [
              t("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", Lh, [
                t("div", Oh, [
                  M[8] || (M[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(Qt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (Re) => v.value = Re),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Ah, [
                  M[9] || (M[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(Qt, {
                    modelValue: h.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (Re) => h.value = Re),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Nh, [
                  C(Le, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: g(() => [...M[10] || (M[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Le, {
                    variant: "primary",
                    disabled: !v.value.trim() || !h.value.trim(),
                    onClick: Q
                  }, {
                    default: g(() => [...M[11] || (M[11] = [
                      b(" Queue Download ", -1)
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
}), zh = /* @__PURE__ */ me(Uh, [["__scopeId", "data-v-c6acbada"]]), Fh = { class: "applying-step" }, Bh = {
  key: 0,
  class: "phase-content"
}, Vh = {
  key: 1,
  class: "phase-content"
}, Wh = { class: "phase-description" }, Gh = { class: "overall-progress" }, jh = { class: "progress-bar" }, Hh = { class: "progress-label" }, Kh = { class: "install-list" }, qh = { class: "install-icon" }, Yh = { key: 0 }, Jh = {
  key: 1,
  class: "spinner"
}, Xh = { key: 2 }, Qh = { key: 3 }, Zh = {
  key: 0,
  class: "install-error"
}, ey = {
  key: 2,
  class: "phase-content"
}, ty = { class: "phase-header" }, sy = { class: "phase-title" }, oy = { class: "completion-summary" }, ny = {
  key: 0,
  class: "summary-item success"
}, ay = { class: "summary-text" }, ly = {
  key: 1,
  class: "summary-item error"
}, iy = { class: "summary-text" }, ry = {
  key: 2,
  class: "failed-list"
}, cy = { class: "failed-node-id" }, uy = { class: "failed-error" }, dy = {
  key: 4,
  class: "summary-item success"
}, fy = {
  key: 5,
  class: "restart-prompt"
}, my = {
  key: 3,
  class: "phase-content error"
}, vy = { class: "error-message" }, py = /* @__PURE__ */ fe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = F(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = F(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = F(() => n.value.length > 0);
    function i(u, d) {
      var v, h;
      const m = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((h = s.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === d ? "installing" : "pending";
    }
    function r(u) {
      var d, m;
      return (m = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, h, w;
      return a(), c("div", Fh, [
        e.progress.phase === "resolving" ? (a(), c("div", Bh, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), c("div", Vh, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Wh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Gh, [
            t("div", jh, [
              t("div", {
                class: "progress-fill",
                style: Gt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Hh, f(((h = e.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Kh, [
            (a(!0), c(j, null, pe(e.progress.nodesToInstall, (p, _) => (a(), c("div", {
              key: p,
              class: Se(["install-item", i(p, _)])
            }, [
              t("span", qh, [
                i(p, _) === "pending" ? (a(), c("span", Yh, "○")) : i(p, _) === "installing" ? (a(), c("span", Jh, "◌")) : i(p, _) === "complete" ? (a(), c("span", Xh, "✓")) : i(p, _) === "failed" ? (a(), c("span", Qh, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              r(p) ? (a(), c("span", Zh, f(r(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), c("div", ey, [
          t("div", ty, [
            t("span", {
              class: Se(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", sy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", oy, [
            e.progress.nodesInstalled.length > 0 ? (a(), c("div", ny, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", ay, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", ly, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", iy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", ry, [
              (a(!0), c(j, null, pe(n.value, (p) => (a(), c("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", cy, f(p.node_id), 1),
                t("span", uy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), c("div", dy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), c("div", fy, [
              d[7] || (d[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (p) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), c("div", my, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", vy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), gy = /* @__PURE__ */ me(py, [["__scopeId", "data-v-5efaae58"]]), hy = {
  key: 0,
  class: "loading-state"
}, yy = {
  key: 1,
  class: "wizard-content"
}, wy = {
  key: 0,
  class: "step-content"
}, by = { class: "analysis-summary" }, _y = { class: "analysis-header" }, ky = { class: "summary-description" }, $y = { class: "stats-grid" }, Cy = { class: "stat-card" }, xy = { class: "stat-items" }, Sy = {
  key: 0,
  class: "stat-item success"
}, Iy = { class: "stat-count" }, Ey = {
  key: 1,
  class: "stat-item info"
}, Ty = { class: "stat-count" }, Py = {
  key: 2,
  class: "stat-item warning"
}, Ry = { class: "stat-count" }, My = {
  key: 3,
  class: "stat-item error"
}, Dy = { class: "stat-count" }, Ly = { class: "stat-card" }, Oy = { class: "stat-items" }, Ay = { class: "stat-item success" }, Ny = { class: "stat-count" }, Uy = {
  key: 0,
  class: "stat-item info"
}, zy = { class: "stat-count" }, Fy = {
  key: 1,
  class: "stat-item warning"
}, By = { class: "stat-count" }, Vy = {
  key: 2,
  class: "stat-item warning"
}, Wy = { class: "stat-count" }, Gy = {
  key: 3,
  class: "stat-item error"
}, jy = { class: "stat-count" }, Hy = {
  key: 0,
  class: "status-message warning"
}, Ky = { class: "status-text" }, qy = {
  key: 1,
  class: "status-message info"
}, Yy = { class: "status-text" }, Jy = {
  key: 2,
  class: "status-message info"
}, Xy = { class: "status-text" }, Qy = {
  key: 3,
  class: "status-message warning"
}, Zy = { class: "status-text" }, e1 = {
  key: 4,
  class: "status-message success"
}, t1 = {
  key: 5,
  class: "category-mismatch-section"
}, s1 = { class: "mismatch-list" }, o1 = { class: "mismatch-path" }, n1 = { class: "mismatch-target" }, a1 = {
  key: 3,
  class: "step-content"
}, l1 = { class: "review-summary" }, i1 = { class: "review-stats" }, r1 = { class: "review-stat" }, c1 = { class: "stat-value" }, u1 = { class: "review-stat" }, d1 = { class: "stat-value" }, f1 = { class: "review-stat" }, m1 = { class: "stat-value" }, v1 = { class: "review-stat" }, p1 = { class: "stat-value" }, g1 = {
  key: 0,
  class: "review-section"
}, h1 = { class: "section-title" }, y1 = { class: "review-items" }, w1 = { class: "item-name" }, b1 = { class: "item-choice" }, _1 = {
  key: 0,
  class: "choice-badge install"
}, k1 = {
  key: 1,
  class: "choice-badge skip"
}, $1 = {
  key: 1,
  class: "review-section"
}, C1 = { class: "section-title" }, x1 = { class: "review-items" }, S1 = { class: "item-name" }, I1 = { class: "item-choice" }, E1 = {
  key: 0,
  class: "choice-badge install"
}, T1 = {
  key: 1,
  class: "choice-badge optional"
}, P1 = {
  key: 2,
  class: "choice-badge skip"
}, R1 = {
  key: 1,
  class: "choice-badge pending"
}, M1 = {
  key: 2,
  class: "review-section"
}, D1 = { class: "section-title" }, L1 = { class: "review-items download-details" }, O1 = { class: "download-info" }, A1 = { class: "item-name" }, N1 = { class: "download-meta" }, U1 = { class: "download-path" }, z1 = ["title"], F1 = {
  key: 3,
  class: "review-section"
}, B1 = { class: "section-title" }, V1 = { class: "review-items" }, W1 = { class: "item-name" }, G1 = { class: "item-choice" }, j1 = {
  key: 0,
  class: "choice-badge install"
}, H1 = {
  key: 1,
  class: "choice-badge download"
}, K1 = {
  key: 2,
  class: "choice-badge optional"
}, q1 = {
  key: 3,
  class: "choice-badge skip"
}, Y1 = {
  key: 4,
  class: "choice-badge skip"
}, J1 = {
  key: 1,
  class: "choice-badge download"
}, X1 = {
  key: 2,
  class: "choice-badge pending"
}, Q1 = {
  key: 4,
  class: "no-choices"
}, Z1 = /* @__PURE__ */ fe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: r, queueModelDownloads: u, progress: d, resetProgress: m } = hr(), { loadPendingDownloads: v } = en(), { openFileLocation: h } = rt(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), O = k(/* @__PURE__ */ new Map()), T = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Set()), q = F(() => {
      const W = [
        { id: "analysis", label: "Analysis" }
      ];
      return (A.value || L.value) && W.push({ id: "nodes", label: "Nodes" }), I.value && W.push({ id: "models", label: "Models" }), W.push({ id: "review", label: "Review" }), $.value === "applying" && W.push({ id: "applying", label: "Applying" }), W;
    }), B = F(() => w.value ? w.value.stats.needs_user_input : !1), A = F(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = F(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), E = F(() => w.value ? w.value.stats.download_intents > 0 : !1), L = F(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), re = F(() => w.value ? w.value.nodes.resolved.length : 0), Y = F(() => w.value ? w.value.models.resolved.filter((W) => W.has_category_mismatch) : []), H = F(() => Y.value.length > 0), te = F(() => A.value || L.value ? "nodes" : I.value ? "models" : "review"), Q = F(() => {
      if (!w.value) return [];
      const W = w.value.nodes.resolved.filter((ie) => !ie.is_installed), z = /* @__PURE__ */ new Set();
      return W.filter((ie) => z.has(ie.package.package_id) ? !1 : (z.add(ie.package.package_id), !0));
    }), N = F(() => {
      if (!w.value) return [];
      const W = w.value.nodes.resolved.filter((ie) => !ie.is_installed), z = /* @__PURE__ */ new Map();
      for (const ie of W) {
        const ze = z.get(ie.package.package_id);
        ze ? ze.node_types_count++ : z.set(ie.package.package_id, {
          package_id: ie.package.package_id,
          title: ie.package.title,
          node_types_count: 1
        });
      }
      return Array.from(z.values());
    }), U = F(() => Q.value.filter((W) => !x.value.has(W.package.package_id))), M = F(() => w.value ? w.value.models.resolved.filter((W) => W.match_type === "download_intent").map((W) => ({
      filename: W.reference.widget_value,
      reference: W.reference,
      is_download_intent: !0,
      resolved_model: W.model,
      download_source: W.download_source,
      target_path: W.target_path
    })) : []), we = F(() => {
      if (!w.value) return [];
      const W = w.value.nodes.unresolved.map((ie) => ({
        node_type: ie.reference.node_type,
        reason: ie.reason,
        is_unresolved: !0,
        options: void 0
      })), z = w.value.nodes.ambiguous.map((ie) => ({
        node_type: ie.reference.node_type,
        has_multiple_options: !0,
        options: ie.options.map((ze) => ({
          package_id: ze.package.package_id,
          title: ze.package.title,
          match_confidence: ze.match_confidence,
          match_type: ze.match_type,
          is_installed: ze.is_installed
        }))
      }));
      return [...W, ...z];
    }), ve = F(() => {
      if (!w.value) return [];
      const W = w.value.models.unresolved.map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        reason: ie.reason,
        is_unresolved: !0,
        options: void 0
      })), z = w.value.models.ambiguous.map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        has_multiple_options: !0,
        options: ie.options.map((ze) => ({
          model: ze.model,
          match_confidence: ze.match_confidence,
          match_type: ze.match_type,
          has_download_source: ze.has_download_source
        }))
      }));
      return [...W, ...z];
    }), Ie = F(() => {
      const W = ve.value, z = M.value.map((ie) => ({
        filename: ie.filename,
        reference: ie.reference,
        is_download_intent: !0,
        resolved_model: ie.resolved_model,
        download_source: ie.download_source,
        target_path: ie.target_path,
        options: void 0
      }));
      return [...W, ...z];
    }), Re = F(() => M.value.filter((W) => {
      const z = T.value.get(W.filename);
      return z ? z.action === "download" : !0;
    }).map((W) => ({
      filename: W.filename,
      url: W.download_source,
      target_path: W.target_path
    })));
    function Ke(W, z = 50) {
      return W.length <= z ? W : W.slice(0, z - 3) + "...";
    }
    const Xe = F(() => {
      let W = U.value.length;
      for (const z of O.value.values())
        z.action === "install" && W++;
      for (const z of T.value.values())
        z.action === "select" && W++;
      return W;
    }), ke = F(() => {
      let W = 0;
      for (const z of T.value.values())
        z.action === "download" && W++;
      for (const z of M.value)
        T.value.get(z.filename) || W++;
      return W;
    }), Ee = F(() => {
      let W = 0;
      for (const z of O.value.values())
        z.action === "optional" && W++;
      for (const z of T.value.values())
        z.action === "optional" && W++;
      return W;
    }), Ge = F(() => {
      let W = x.value.size;
      for (const z of O.value.values())
        z.action === "skip" && W++;
      for (const z of T.value.values())
        z.action === "skip" && W++;
      for (const z of we.value)
        O.value.has(z.node_type) || W++;
      for (const z of ve.value)
        T.value.has(z.filename) || W++;
      return W;
    }), be = F(() => {
      const W = {};
      if (W.analysis = { resolved: 1, total: 1 }, A.value) {
        const z = we.value.length, ie = we.value.filter(
          (ze) => O.value.has(ze.node_type)
        ).length;
        W.nodes = { resolved: ie, total: z };
      }
      if (I.value) {
        const z = Ie.value.length, ie = Ie.value.filter(
          (ze) => T.value.has(ze.filename) || ze.is_download_intent
        ).length;
        W.models = { resolved: ie, total: z };
      }
      if (W.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const z = d.totalFiles || 1, ie = d.completedFiles.length;
        W.applying = { resolved: ie, total: z };
      }
      return W;
    });
    function ae(W) {
      $.value = W;
    }
    function Ve() {
      const W = q.value.findIndex((z) => z.id === $.value);
      W > 0 && ($.value = q.value[W - 1].id);
    }
    function Te() {
      const W = q.value.findIndex((z) => z.id === $.value);
      W < q.value.length - 1 && ($.value = q.value[W + 1].id);
    }
    async function D() {
      p.value = !0, S.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (W) {
        S.value = W instanceof Error ? W.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function V() {
      P.value.includes("analysis") || P.value.push("analysis"), A.value || L.value ? $.value = "nodes" : I.value ? $.value = "models" : $.value = "review";
    }
    function se(W) {
      O.value.set(W, { action: "optional" });
    }
    function ne(W) {
      O.value.set(W, { action: "skip" });
    }
    function ue(W, z) {
      var ze;
      const ie = we.value.find((Qe) => Qe.node_type === W);
      (ze = ie == null ? void 0 : ie.options) != null && ze[z] && O.value.set(W, {
        action: "install",
        package_id: ie.options[z].package_id
      });
    }
    function de(W, z) {
      O.value.set(W, {
        action: "install",
        package_id: z
      });
    }
    function $e(W) {
      O.value.delete(W);
    }
    function Ce(W) {
      x.value.has(W) ? x.value.delete(W) : x.value.add(W);
    }
    function oe(W) {
      T.value.set(W, { action: "optional" });
    }
    function ce(W) {
      T.value.set(W, { action: "skip" });
    }
    function De(W, z) {
      var ze;
      const ie = ve.value.find((Qe) => Qe.filename === W);
      (ze = ie == null ? void 0 : ie.options) != null && ze[z] && T.value.set(W, {
        action: "select",
        selected_model: ie.options[z].model
      });
    }
    function xe(W, z, ie) {
      T.value.set(W, {
        action: "download",
        url: z,
        target_path: ie
      });
    }
    function Z(W) {
      T.value.delete(W);
    }
    async function K(W) {
      try {
        await h(W);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function Pe() {
      var W;
      _.value = !0, S.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const z = await i(o.workflowName, O.value, T.value, x.value);
        z.models_to_download && z.models_to_download.length > 0 && u(o.workflowName, z.models_to_download);
        const ie = [
          ...z.nodes_to_install || [],
          ...U.value.map((Qe) => Qe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ie)], d.nodesToInstall.length > 0 && await r(o.workflowName), d.phase = "complete", await v();
        const ze = d.installError || ((W = d.nodeInstallProgress) == null ? void 0 : W.completedNodes.some((Qe) => !Qe.success));
        !d.needsRestart && !ze && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Failed to apply resolution", d.error = S.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function he() {
      n("refresh"), n("restart"), n("close");
    }
    async function ge() {
      var z;
      const W = ((z = d.nodeInstallProgress) == null ? void 0 : z.completedNodes.filter((ie) => !ie.success).map((ie) => ie.node_id)) || [];
      if (W.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: W.length
        }, d.nodesToInstall = W, d.nodesInstalled = [], d.installError = void 0;
        try {
          await r(o.workflowName), d.phase = "complete";
        } catch (ie) {
          d.error = ie instanceof Error ? ie.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return et(D), (W, z) => (a(), R(gt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: z[1] || (z[1] = (ie) => n("close"))
    }, {
      body: g(() => [
        p.value && !w.value ? (a(), c("div", hy, [...z[2] || (z[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), c("div", yy, [
          C(xp, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": be.value,
            onStepChange: ae
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), c("div", wy, [
            t("div", by, [
              t("div", _y, [
                z[3] || (z[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", ky, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", $y, [
                t("div", Cy, [
                  z[12] || (z[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", xy, [
                    re.value > 0 ? (a(), c("div", Sy, [
                      z[4] || (z[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Iy, f(re.value), 1),
                      z[5] || (z[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), c("div", Ey, [
                      z[6] || (z[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ty, f(w.value.stats.packages_needing_installation), 1),
                      z[7] || (z[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), c("div", Py, [
                      z[8] || (z[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Ry, f(w.value.nodes.ambiguous.length), 1),
                      z[9] || (z[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), c("div", My, [
                      z[10] || (z[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Dy, f(w.value.nodes.unresolved.length), 1),
                      z[11] || (z[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Ly, [
                  z[23] || (z[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Oy, [
                    t("div", Ay, [
                      z[13] || (z[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ny, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      z[14] || (z[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), c("div", Uy, [
                      z[15] || (z[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", zy, f(w.value.stats.download_intents), 1),
                      z[16] || (z[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    H.value ? (a(), c("div", Fy, [
                      z[17] || (z[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", By, f(Y.value.length), 1),
                      z[18] || (z[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), c("div", Vy, [
                      z[19] || (z[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Wy, f(w.value.models.ambiguous.length), 1),
                      z[20] || (z[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), c("div", Gy, [
                      z[21] || (z[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", jy, f(w.value.models.unresolved.length), 1),
                      z[22] || (z[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              B.value ? (a(), c("div", Hy, [
                z[24] || (z[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Ky, f(we.value.length + ve.value.length) + " items need your input", 1)
              ])) : L.value ? (a(), c("div", qy, [
                z[25] || (z[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Yy, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(E.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (a(), c("div", Jy, [
                z[26] || (z[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Xy, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : H.value ? (a(), c("div", Qy, [
                z[27] || (z[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Zy, f(Y.value.length) + " model" + f(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), c("div", e1, [...z[28] || (z[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              H.value ? (a(), c("div", t1, [
                z[31] || (z[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", s1, [
                  (a(!0), c(j, null, pe(Y.value, (ie) => {
                    var ze, Qe;
                    return a(), c("div", {
                      key: ie.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", o1, f(ie.actual_category) + "/" + f((ze = ie.model) == null ? void 0 : ze.filename), 1),
                      z[30] || (z[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", n1, f((Qe = ie.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      ie.file_path ? (a(), R(Le, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => K(ie.file_path)
                      }, {
                        default: g(() => [...z[29] || (z[29] = [
                          b(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "nodes" ? (a(), R(Hg, {
            key: 1,
            nodes: we.value,
            "node-choices": O.value,
            "auto-resolved-packages": N.value,
            "skipped-packages": x.value,
            onMarkOptional: se,
            onSkip: ne,
            onOptionSelected: ue,
            onManualEntry: de,
            onClearChoice: $e,
            onPackageSkip: Ce
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), R(zh, {
            key: 2,
            models: Ie.value,
            "model-choices": T.value,
            onMarkOptional: oe,
            onSkip: ce,
            onOptionSelected: De,
            onDownloadUrl: xe,
            onClearChoice: Z
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), c("div", a1, [
            t("div", l1, [
              z[37] || (z[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", i1, [
                t("div", r1, [
                  t("span", c1, f(Xe.value), 1),
                  z[32] || (z[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", u1, [
                  t("span", d1, f(ke.value), 1),
                  z[33] || (z[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", f1, [
                  t("span", m1, f(Ee.value), 1),
                  z[34] || (z[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", v1, [
                  t("span", p1, f(Ge.value), 1),
                  z[35] || (z[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              N.value.length > 0 ? (a(), c("div", g1, [
                t("h4", h1, "Node Packages (" + f(N.value.length) + ")", 1),
                t("div", y1, [
                  (a(!0), c(j, null, pe(N.value, (ie) => (a(), c("div", {
                    key: ie.package_id,
                    class: "review-item"
                  }, [
                    t("code", w1, f(ie.package_id), 1),
                    t("div", b1, [
                      x.value.has(ie.package_id) ? (a(), c("span", k1, "Skipped")) : (a(), c("span", _1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              we.value.length > 0 ? (a(), c("div", $1, [
                t("h4", C1, "Node Choices (" + f(we.value.length) + ")", 1),
                t("div", x1, [
                  (a(!0), c(j, null, pe(we.value, (ie) => {
                    var ze, Qe, vt, at;
                    return a(), c("div", {
                      key: ie.node_type,
                      class: "review-item"
                    }, [
                      t("code", S1, f(ie.node_type), 1),
                      t("div", I1, [
                        O.value.has(ie.node_type) ? (a(), c(j, { key: 0 }, [
                          ((ze = O.value.get(ie.node_type)) == null ? void 0 : ze.action) === "install" ? (a(), c("span", E1, f((Qe = O.value.get(ie.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = O.value.get(ie.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), c("span", T1, " Optional ")) : ((at = O.value.get(ie.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), c("span", P1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), c("span", R1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Re.value.length > 0 ? (a(), c("div", M1, [
                t("h4", D1, "Models to Download (" + f(Re.value.length) + ")", 1),
                t("div", L1, [
                  (a(!0), c(j, null, pe(Re.value, (ie) => (a(), c("div", {
                    key: ie.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", O1, [
                      t("code", A1, f(ie.filename), 1),
                      t("div", N1, [
                        t("span", U1, "→ " + f(ie.target_path), 1),
                        ie.url ? (a(), c("span", {
                          key: 0,
                          class: "download-url",
                          title: ie.url
                        }, f(Ke(ie.url)), 9, z1)) : y("", !0)
                      ])
                    ]),
                    z[36] || (z[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Ie.value.length > 0 ? (a(), c("div", F1, [
                t("h4", B1, "Models (" + f(Ie.value.length) + ")", 1),
                t("div", V1, [
                  (a(!0), c(j, null, pe(Ie.value, (ie) => {
                    var ze, Qe, vt, at, dt, Rt, Ut;
                    return a(), c("div", {
                      key: ie.filename,
                      class: "review-item"
                    }, [
                      t("code", W1, f(ie.filename), 1),
                      t("div", G1, [
                        T.value.has(ie.filename) ? (a(), c(j, { key: 0 }, [
                          ((ze = T.value.get(ie.filename)) == null ? void 0 : ze.action) === "select" ? (a(), c("span", j1, f((vt = (Qe = T.value.get(ie.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((at = T.value.get(ie.filename)) == null ? void 0 : at.action) === "download" ? (a(), c("span", H1, " Download ")) : ((dt = T.value.get(ie.filename)) == null ? void 0 : dt.action) === "optional" ? (a(), c("span", K1, " Optional ")) : ((Rt = T.value.get(ie.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), c("span", q1, " Skip ")) : ((Ut = T.value.get(ie.filename)) == null ? void 0 : Ut.action) === "cancel_download" ? (a(), c("span", Y1, " Cancel Download ")) : y("", !0)
                        ], 64)) : ie.is_download_intent ? (a(), c("span", J1, " Pending Download ")) : (a(), c("span", X1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Q.value.length === 0 && we.value.length === 0 && Ie.value.length === 0 ? (a(), c("div", Q1, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), R(gy, {
            key: 4,
            progress: Fe(d),
            onRestart: he,
            onRetryFailed: ge
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ve
        }, {
          default: g(() => [...z[38] || (z[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        z[41] || (z[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Fe(d).phase === "complete" || Fe(d).phase === "error" ? (a(), R(Le, {
          key: 1,
          variant: "secondary",
          onClick: z[0] || (z[0] = (ie) => n("close"))
        }, {
          default: g(() => [
            b(f(Fe(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), R(Le, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: V
        }, {
          default: g(() => [
            b(f(te.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), R(Le, {
          key: 3,
          variant: "primary",
          onClick: Te
        }, {
          default: g(() => [
            b(f(I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), R(Le, {
          key: 4,
          variant: "primary",
          onClick: Te
        }, {
          default: g(() => [...z[39] || (z[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), R(Le, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Pe
        }, {
          default: g(() => [...z[40] || (z[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), e0 = /* @__PURE__ */ me(Z1, [["__scopeId", "data-v-7d3d3ea4"]]), t0 = { class: "search-input-wrapper" }, s0 = ["value", "placeholder"], o0 = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = k(null);
    let i;
    function r(d) {
      const m = d.target.value;
      o.debounce > 0 ? (clearTimeout(i), i = window.setTimeout(() => {
        n("update:modelValue", m);
      }, o.debounce)) : n("update:modelValue", m);
    }
    function u() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return et(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), c("div", t0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: r,
        onKeyup: Xt(u, ["escape"])
      }, null, 40, s0),
      e.clearable && e.modelValue ? (a(), c("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), n0 = /* @__PURE__ */ me(o0, [["__scopeId", "data-v-266f857a"]]), a0 = { class: "search-bar" }, l0 = /* @__PURE__ */ fe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), c("div", a0, [
      C(n0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), bo = /* @__PURE__ */ me(l0, [["__scopeId", "data-v-3d51bbfd"]]), i0 = { class: "section-group" }, r0 = {
  key: 0,
  class: "section-content"
}, c0 = /* @__PURE__ */ fe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.initiallyExpanded);
    function i() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (r, u) => (a(), c("section", i0, [
      C(Ot, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: i
      }, {
        default: g(() => [
          b(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), c("div", r0, [
        He(r.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ me(c0, [["__scopeId", "data-v-c48e33ed"]]), u0 = { class: "item-header" }, d0 = {
  key: 0,
  class: "item-icon"
}, f0 = { class: "item-info" }, m0 = {
  key: 0,
  class: "item-title"
}, v0 = {
  key: 1,
  class: "item-subtitle"
}, p0 = {
  key: 0,
  class: "item-details"
}, g0 = {
  key: 1,
  class: "item-actions"
}, h0 = /* @__PURE__ */ fe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = F(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), c("div", {
      class: Se(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      t("div", u0, [
        l.$slots.icon ? (a(), c("span", d0, [
          He(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", f0, [
          l.$slots.title ? (a(), c("div", m0, [
            He(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), c("div", v0, [
            He(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), c("div", p0, [
        He(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), c("div", g0, [
        He(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ me(h0, [["__scopeId", "data-v-cc435e0e"]]), y0 = { class: "loading-state" }, w0 = { class: "loading-message" }, b0 = /* @__PURE__ */ fe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), c("div", y0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", w0, f(e.message), 1)
    ]));
  }
}), Is = /* @__PURE__ */ me(b0, [["__scopeId", "data-v-ad8436c9"]]), _0 = { class: "error-state" }, k0 = { class: "error-message" }, $0 = /* @__PURE__ */ fe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), c("div", _0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", k0, f(e.message), 1),
      e.retry ? (a(), R(le, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Es = /* @__PURE__ */ me($0, [["__scopeId", "data-v-5397be48"]]), C0 = /* @__PURE__ */ fe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = rt(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), h = k(!1), w = k(!1), p = k(null), _ = F(
      () => i.value.filter((N) => N.status === "broken")
    ), S = F(
      () => i.value.filter((N) => N.status === "new")
    ), $ = F(
      () => i.value.filter((N) => N.status === "modified")
    ), P = F(
      () => i.value.filter((N) => N.status === "synced")
    ), O = F(() => {
      if (!d.value.trim()) return i.value;
      const N = d.value.toLowerCase();
      return i.value.filter((U) => U.name.toLowerCase().includes(N));
    }), T = F(
      () => _.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), x = F(
      () => S.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = F(
      () => $.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = F(
      () => P.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = F(
      () => v.value ? B.value : B.value.slice(0, 5)
    );
    async function I(N = !1) {
      r.value = !0, u.value = null;
      try {
        i.value = await l(N);
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        r.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function E(N) {
      p.value = N, h.value = !0;
    }
    function L(N) {
      p.value = N, w.value = !0;
    }
    function re() {
      n("refresh");
    }
    async function Y() {
      w.value = !1, await I(!0);
    }
    async function H() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function te(N) {
      const U = [];
      return N.missing_nodes > 0 && U.push(`${N.missing_nodes} missing node${N.missing_nodes > 1 ? "s" : ""}`), N.missing_models > 0 && U.push(`${N.missing_models} missing model${N.missing_models > 1 ? "s" : ""}`), N.models_with_category_mismatch && N.models_with_category_mismatch > 0 && U.push(`${N.models_with_category_mismatch} model${N.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), N.pending_downloads && N.pending_downloads > 0 && U.push(`${N.pending_downloads} pending download${N.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function Q(N) {
      const U = N.sync_state === "new" ? "New" : N.sync_state === "modified" ? "Modified" : N.sync_state === "synced" ? "Synced" : N.sync_state;
      return N.has_path_sync_issues && N.models_needing_path_sync && N.models_needing_path_sync > 0 ? `${N.models_needing_path_sync} model path${N.models_needing_path_sync > 1 ? "s" : ""} need${N.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return et(I), (N, U) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: d.value,
            "onUpdate:modelValue": U[0] || (U[0] = (M) => d.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          r.value ? (a(), R(Is, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), R(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            T.value.length ? (a(), R(lt, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(T.value, (M) => (a(), R(Et, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: g(() => [...U[7] || (U[7] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(f(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(te(M)), 1)
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (we) => L(M.name)
                    }, {
                      default: g(() => [...U[8] || (U[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => E(M.name)
                    }, {
                      default: g(() => [...U[9] || (U[9] = [
                        b(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            x.value.length ? (a(), R(lt, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(x.value, (M) => (a(), R(Et, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    b(f(M.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    b(f(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Q(M)), 1)
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => E(M.name)
                    }, {
                      default: g(() => [...U[10] || (U[10] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            q.value.length ? (a(), R(lt, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(q.value, (M) => (a(), R(Et, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...U[11] || (U[11] = [
                    b("⚡", -1)
                  ])]),
                  title: g(() => [
                    b(f(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Q(M)), 1)
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => E(M.name)
                    }, {
                      default: g(() => [...U[12] || (U[12] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            B.value.length ? (a(), R(lt, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: U[2] || (U[2] = (M) => m.value = M)
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(A.value, (M) => (a(), R(Et, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    b(f(M.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    b(f(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Q(M)), 1)
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => E(M.name)
                    }, {
                      default: g(() => [...U[13] || (U[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && B.value.length > 5 ? (a(), R(le, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (M) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    b(" View all " + f(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            O.value.length ? y("", !0) : (a(), R(ss, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && p.value ? (a(), R(mp, {
        key: 0,
        "workflow-name": p.value,
        onClose: U[3] || (U[3] = (M) => h.value = !1),
        onResolve: U[4] || (U[4] = (M) => L(p.value)),
        onRefresh: U[5] || (U[5] = (M) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), R(e0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Y,
        onInstall: re,
        onRefresh: U[6] || (U[6] = (M) => n("refresh")),
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), x0 = /* @__PURE__ */ me(C0, [["__scopeId", "data-v-fa3f076e"]]), S0 = /* @__PURE__ */ fe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Se(["summary-bar", e.variant])
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), tn = /* @__PURE__ */ me(S0, [["__scopeId", "data-v-ccb7816e"]]), I0 = {
  key: 0,
  class: "model-details"
}, E0 = { class: "detail-section" }, T0 = { class: "detail-row" }, P0 = { class: "detail-value mono" }, R0 = { class: "detail-row" }, M0 = { class: "detail-value mono" }, D0 = { class: "detail-row" }, L0 = { class: "detail-value mono" }, O0 = { class: "detail-row" }, A0 = { class: "detail-value" }, N0 = { class: "detail-row" }, U0 = { class: "detail-value" }, z0 = { class: "detail-row" }, F0 = { class: "detail-value" }, B0 = { class: "detail-section" }, V0 = { class: "section-header" }, W0 = {
  key: 0,
  class: "locations-list"
}, G0 = { class: "location-path mono" }, j0 = {
  key: 0,
  class: "location-modified"
}, H0 = ["onClick"], K0 = {
  key: 1,
  class: "empty-state"
}, q0 = { class: "detail-section" }, Y0 = { class: "section-header" }, J0 = {
  key: 0,
  class: "sources-list"
}, X0 = { class: "source-type" }, Q0 = ["href"], Z0 = ["disabled", "onClick"], ew = {
  key: 1,
  class: "empty-state"
}, tw = { class: "add-source-form" }, sw = ["disabled"], ow = {
  key: 2,
  class: "source-error"
}, nw = {
  key: 3,
  class: "source-success"
}, aw = /* @__PURE__ */ fe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: r } = rt(), u = k(null), d = k(!0), m = k(null), v = k(""), h = k(!1), w = k(null), p = k(null), _ = k(null), S = k(null);
    let $ = null;
    function P(I, E = "success", L = 2e3) {
      $ && clearTimeout($), S.value = { message: I, type: E }, $ = setTimeout(() => {
        S.value = null;
      }, L);
    }
    function O(I) {
      if (!I) return "Unknown";
      const E = 1024 * 1024 * 1024, L = 1024 * 1024;
      return I >= E ? `${(I / E).toFixed(1)} GB` : I >= L ? `${(I / L).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function T(I) {
      navigator.clipboard.writeText(I), P("Copied to clipboard!");
    }
    async function x(I) {
      try {
        await r(I), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!v.value.trim() || !u.value)) {
        h.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await A();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function B(I) {
      if (u.value) {
        w.value = I, p.value = null, _.value = null;
        try {
          await i(u.value.hash, I), P("Source removed"), await A();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function A() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return et(A), (I, E) => {
      var L;
      return a(), c(j, null, [
        C(gt, {
          title: `Model Details: ${((L = u.value) == null ? void 0 : L.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: E[5] || (E[5] = (re) => I.$emit("close"))
        }, {
          body: g(() => {
            var re, Y, H, te;
            return [
              u.value ? (a(), c("div", I0, [
                t("section", E0, [
                  t("div", T0, [
                    E[6] || (E[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", P0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (Q) => T(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", R0, [
                    E[7] || (E[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", M0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (Q) => T(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", D0, [
                    E[8] || (E[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", L0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (Q) => T(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", O0, [
                    E[9] || (E[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", A0, f(O(u.value.size)), 1)
                  ]),
                  t("div", N0, [
                    E[10] || (E[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", U0, f(u.value.category), 1)
                  ]),
                  t("div", z0, [
                    E[11] || (E[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", F0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", B0, [
                  t("h4", V0, "Locations (" + f(((re = u.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (Y = u.value.locations) != null && Y.length ? (a(), c("div", W0, [
                    (a(!0), c(j, null, pe(u.value.locations, (Q, N) => (a(), c("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      t("span", G0, f(Q.path), 1),
                      Q.modified ? (a(), c("span", j0, "Modified: " + f(Q.modified), 1)) : y("", !0),
                      Q.path ? (a(), c("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => x(Q.path)
                      }, " Open File Location ", 8, H0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), c("div", K0, "No locations found"))
                ]),
                t("section", q0, [
                  t("h4", Y0, "Download Sources (" + f(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                  (te = u.value.sources) != null && te.length ? (a(), c("div", J0, [
                    (a(!0), c(j, null, pe(u.value.sources, (Q, N) => (a(), c("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      t("span", X0, f(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Q.url), 9, Q0),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Q.url,
                        onClick: (U) => B(Q.url)
                      }, f(w.value === Q.url ? "..." : "×"), 9, Z0)
                    ]))), 128))
                  ])) : (a(), c("div", ew, " No download sources configured ")),
                  t("div", tw, [
                    qe(t("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (Q) => v.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Nt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || h.value,
                      onClick: q
                    }, f(h.value ? "Adding..." : "Add Source"), 9, sw)
                  ]),
                  p.value ? (a(), c("p", ow, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), c("p", nw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (re) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), R(wt, { to: "body" }, [
          S.value ? (a(), c("div", {
            key: 0,
            class: Se(["toast", S.value.type])
          }, f(S.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), qa = /* @__PURE__ */ me(aw, [["__scopeId", "data-v-f15cbb56"]]), lw = /* @__PURE__ */ fe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = rt(), i = k([]), r = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), h = k(!1), w = k(null);
    function p() {
      h.value = !1, o("navigate", "model-index");
    }
    const _ = F(
      () => i.value.reduce((A, I) => A + (I.size || 0), 0)
    ), S = F(() => {
      if (!v.value.trim()) return i.value;
      const A = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), $ = F(() => {
      if (!v.value.trim()) return r.value;
      const A = v.value.toLowerCase();
      return r.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), P = F(() => {
      const A = {};
      for (const E of S.value) {
        const L = E.type || "other";
        A[L] || (A[L] = []), A[L].push(E);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([E], [L]) => {
        const re = I.indexOf(E), Y = I.indexOf(L);
        return re >= 0 && Y >= 0 ? re - Y : re >= 0 ? -1 : Y >= 0 ? 1 : E.localeCompare(L);
      }).map(([E, L]) => ({ type: E, models: L }));
    });
    function O(A) {
      if (!A) return "Unknown";
      const I = A / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function T(A) {
      w.value = A.hash || A.filename;
    }
    function x(A) {
      o("navigate", "model-index");
    }
    function q(A) {
      alert(`Download functionality not yet implemented for ${A}`);
    }
    async function B() {
      d.value = !0, m.value = null;
      try {
        const A = await n();
        i.value = A, r.value = [];
        const I = await l();
        u.value = I.environment || "production";
      } catch (A) {
        m.value = A instanceof Error ? A.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return et(B), (A, I) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (E) => h.value = !0)
          })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: v.value,
            "onUpdate:modelValue": I[1] || (I[1] = (E) => v.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), R(Is, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), R(Es, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            i.value.length ? (a(), R(tn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(O(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(j, null, pe(P.value, (E) => (a(), R(lt, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(E.models, (L) => (a(), R(Et, {
                  key: L.hash || L.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...I[4] || (I[4] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(f(L.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(O(L.size)), 1)
                  ]),
                  details: g(() => [
                    C(ft, {
                      label: "Used by:",
                      value: (L.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(ft, {
                      label: "Path:",
                      value: L.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => T(L)
                    }, {
                      default: g(() => [...I[5] || (I[5] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            $.value.length ? (a(), R(lt, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe($.value, (E) => (a(), R(Et, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...I[6] || (I[6] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(f(E.filename), 1)
                  ]),
                  subtitle: g(() => [...I[7] || (I[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var L;
                    return [
                      C(ft, {
                        label: "Required by:",
                        value: ((L = E.workflow_names) == null ? void 0 : L.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (L) => q(E.filename)
                    }, {
                      default: g(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => x(E.filename)
                    }, {
                      default: g(() => [...I[9] || (I[9] = [
                        b(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !S.value.length && !$.value.length ? (a(), R(ss, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(os, {
        show: h.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (E) => h.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            I[10] || (I[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            I[11] || (I[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          C(le, {
            variant: "primary",
            onClick: p
          }, {
            default: g(() => [...I[12] || (I[12] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(qa, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (E) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), iw = /* @__PURE__ */ me(lw, [["__scopeId", "data-v-cb4f12b3"]]), rw = {
  key: 0,
  class: "indexing-progress"
}, cw = { class: "progress-info" }, uw = { class: "progress-label" }, dw = { class: "progress-count" }, fw = { class: "progress-bar" }, mw = { class: "modal-content" }, vw = { class: "modal-header" }, pw = { class: "modal-body" }, gw = { class: "input-group" }, hw = { class: "current-path" }, yw = { class: "input-group" }, ww = { class: "modal-footer" }, bw = { class: "modal-content" }, _w = { class: "modal-header" }, kw = { class: "modal-body" }, $w = { class: "input-group" }, Cw = { class: "input-group" }, xw = { class: "modal-footer" }, Sw = /* @__PURE__ */ fe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = rt(), { addToQueue: r } = en(), u = s, d = k([]), m = k(!1), v = k(!1), h = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), O = k(!1), T = k(!1), x = k(""), q = k(""), B = k(null), A = F(
      () => d.value.reduce((U, M) => U + (M.size || 0), 0)
    ), I = F(() => {
      if (!w.value.trim()) return d.value;
      const U = w.value.toLowerCase();
      return d.value.filter((M) => {
        const we = M, ve = M.sha256 || we.sha256_hash || "";
        return M.filename.toLowerCase().includes(U) || ve.toLowerCase().includes(U);
      });
    }), E = F(() => {
      const U = {};
      for (const we of I.value) {
        const ve = we.type || "other";
        U[ve] || (U[ve] = []), U[ve].push(we);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([we], [ve]) => {
        const Ie = M.indexOf(we), Re = M.indexOf(ve);
        return Ie >= 0 && Re >= 0 ? Ie - Re : Ie >= 0 ? -1 : Re >= 0 ? 1 : we.localeCompare(ve);
      }).map(([we, ve]) => ({ type: we, models: ve }));
    });
    function L(U) {
      if (!U) return "Unknown";
      const M = 1024 * 1024 * 1024, we = 1024 * 1024;
      return U >= M ? `${(U / M).toFixed(1)} GB` : U >= we ? `${(U / we).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function re(U) {
      _.value = U.hash || U.filename;
    }
    async function Y() {
      v.value = !0, h.value = null;
      try {
        const U = await n();
        await Q(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        h.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function H() {
      if (P.value.trim()) {
        O.value = !0, h.value = null;
        try {
          const U = await i(P.value.trim());
          $.value = U.path, S.value = !1, P.value = "", await Q(), console.log(`Directory changed: ${U.models_indexed} models indexed`), u("refresh");
        } catch (U) {
          h.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          O.value = !1;
        }
      }
    }
    function te() {
      if (!x.value.trim() || !q.value.trim()) return;
      const U = q.value.split("/").pop() || "model.safetensors";
      r([{
        workflow: "__manual__",
        filename: U,
        url: x.value.trim(),
        targetPath: q.value.trim()
      }]), x.value = "", q.value = "", T.value = !1;
    }
    async function Q() {
      m.value = !0, h.value = null;
      try {
        d.value = await o();
      } catch (U) {
        h.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function N() {
      try {
        const U = await l();
        $.value = U.path;
      } catch {
      }
    }
    return et(() => {
      Q(), N();
    }), (U, M) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (we) => p.value = !0)
          }, {
            actions: g(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: Y
              }, {
                default: g(() => [
                  b(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (we) => S.value = !0)
              }, {
                default: g(() => [...M[15] || (M[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (we) => T.value = !0)
              }, {
                default: g(() => [...M[16] || (M[16] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  b(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          B.value ? (a(), c("div", rw, [
            t("div", cw, [
              t("span", uw, f(B.value.message), 1),
              t("span", dw, f(B.value.current) + "/" + f(B.value.total), 1)
            ]),
            t("div", fw, [
              t("div", {
                class: "progress-fill",
                style: Gt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C(bo, {
            modelValue: w.value,
            "onUpdate:modelValue": M[3] || (M[3] = (we) => w.value = we),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || B.value ? (a(), R(Is, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (a(), R(Es, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            d.value.length ? (a(), R(tn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(d.value.length) + " models • " + f(L(A.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(j, null, pe(E.value, (we) => (a(), R(lt, {
              key: we.type,
              title: we.type.toUpperCase(),
              count: we.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(we.models, (ve) => (a(), R(Et, {
                  key: ve.sha256 || ve.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...M[17] || (M[17] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(f(ve.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(L(ve.size)), 1)
                  ]),
                  details: g(() => [
                    C(ft, {
                      label: "Hash:",
                      value: ve.hash ? ve.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ie) => re(ve)
                    }, {
                      default: g(() => [...M[18] || (M[18] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            I.value.length ? y("", !0) : (a(), R(ss, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(os, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: M[4] || (M[4] = (we) => p.value = !1)
      }, {
        content: g(() => [...M[19] || (M[19] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), R(qa, {
        key: 0,
        identifier: _.value,
        onClose: M[5] || (M[5] = (we) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), R(wt, { to: "body" }, [
        S.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = it((we) => S.value = !1, ["self"]))
        }, [
          t("div", mw, [
            t("div", vw, [
              M[20] || (M[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (we) => S.value = !1)
              }, "✕")
            ]),
            t("div", pw, [
              t("div", gw, [
                M[21] || (M[21] = t("label", null, "Current Directory", -1)),
                t("code", hw, f($.value || "Not set"), 1)
              ]),
              t("div", yw, [
                M[22] || (M[22] = t("label", null, "New Directory Path", -1)),
                C(Qt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (we) => P.value = we),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", ww, [
              C(Le, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (we) => S.value = !1)
              }, {
                default: g(() => [...M[24] || (M[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Le, {
                variant: "primary",
                disabled: !P.value.trim() || O.value,
                loading: O.value,
                onClick: H
              }, {
                default: g(() => [
                  b(f(O.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), R(wt, { to: "body" }, [
        T.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = it((we) => T.value = !1, ["self"]))
        }, [
          t("div", bw, [
            t("div", _w, [
              M[25] || (M[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (we) => T.value = !1)
              }, "✕")
            ]),
            t("div", kw, [
              t("div", $w, [
                M[26] || (M[26] = t("label", null, "Download URL", -1)),
                C(Qt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (we) => x.value = we),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Cw, [
                M[27] || (M[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(Qt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (we) => q.value = we),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", xw, [
              C(Le, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (we) => T.value = !1)
              }, {
                default: g(() => [...M[29] || (M[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Le, {
                variant: "primary",
                disabled: !x.value.trim() || !q.value.trim(),
                onClick: te
              }, {
                default: g(() => [...M[30] || (M[30] = [
                  b(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : y("", !0)
      ]))
    ], 64));
  }
}), Iw = /* @__PURE__ */ me(Sw, [["__scopeId", "data-v-73b78d84"]]), Ew = { class: "node-details" }, Tw = { class: "status-row" }, Pw = {
  key: 0,
  class: "detail-row"
}, Rw = { class: "value" }, Mw = { class: "detail-row" }, Dw = { class: "value" }, Lw = {
  key: 1,
  class: "detail-row"
}, Ow = { class: "value mono" }, Aw = {
  key: 2,
  class: "detail-row"
}, Nw = ["href"], Uw = {
  key: 3,
  class: "detail-row"
}, zw = { class: "value mono small" }, Fw = { class: "detail-row" }, Bw = {
  key: 0,
  class: "value"
}, Vw = {
  key: 1,
  class: "workflow-list"
}, Ww = /* @__PURE__ */ fe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = F(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = F(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), r = F(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), R(gt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: g(() => [
        t("div", Ew, [
          t("div", Tw, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Se(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), c("div", Pw, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Rw, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", Mw, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Dw, f(r.value), 1)
          ]),
          e.node.registry_id ? (a(), c("div", Lw, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Ow, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), c("div", Aw, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(f(e.node.repository) + " ", 1),
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
            ], 8, Nw)
          ])) : y("", !0),
          e.node.download_url ? (a(), c("div", Uw, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", zw, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Fw, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), c("span", Bw, " Not used in any workflows ")) : (a(), c("div", Vw, [
              (a(!0), c(j, null, pe(e.node.used_in_workflows, (m) => (a(), c("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        C(Le, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => n("close"))
        }, {
          default: g(() => [...d[11] || (d[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gw = /* @__PURE__ */ me(Ww, [["__scopeId", "data-v-b342f626"]]), jw = { class: "dialog-message" }, Hw = {
  key: 0,
  class: "dialog-details"
}, Kw = {
  key: 1,
  class: "dialog-warning"
}, qw = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), R(gt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", jw, f(e.message), 1),
        e.details && e.details.length ? (a(), c("div", Hw, [
          (a(!0), c(j, null, pe(e.details, (n, l) => (a(), c("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), c("p", Kw, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        C(Le, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: g(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: g(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Le, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
        }, {
          default: g(() => [
            b(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ya = /* @__PURE__ */ me(qw, [["__scopeId", "data-v-3670b9f5"]]), Yw = { class: "mismatch-warning" }, Jw = { class: "version-mismatch" }, Xw = { class: "version-actual" }, Qw = { class: "version-expected" }, Zw = { key: 0 }, eb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, tb = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, sb = /* @__PURE__ */ fe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: r, uninstallNode: u } = rt(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), h = k(""), w = k(!1), p = k(null), _ = k(null), S = F(() => {
      if (!h.value.trim()) return d.value.nodes;
      const Y = h.value.toLowerCase();
      return d.value.nodes.filter(
        (H) => {
          var te, Q;
          return H.name.toLowerCase().includes(Y) || ((te = H.description) == null ? void 0 : te.toLowerCase().includes(Y)) || ((Q = H.repository) == null ? void 0 : Q.toLowerCase().includes(Y));
        }
      );
    }), $ = F(
      () => S.value.filter((Y) => Y.installed && Y.tracked)
    ), P = F(
      () => S.value.filter((Y) => !Y.installed && Y.tracked)
    ), O = F(
      () => S.value.filter((Y) => Y.installed && !Y.tracked)
    );
    function T(Y) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Y] || Y;
    }
    const x = F(() => o.versionMismatches.length > 0);
    function q(Y) {
      return !Y.used_in_workflows || Y.used_in_workflows.length === 0 ? "Not used in any workflows" : Y.used_in_workflows.length === 1 ? Y.used_in_workflows[0] : `${Y.used_in_workflows.length} workflows`;
    }
    function B(Y) {
      p.value = Y;
    }
    function A() {
      n("open-node-manager");
    }
    function I(Y) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${Y}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await i(Y);
            H.status === "success" ? (n("toast", `✓ Node "${Y}" tracked as development`, "success"), await re()) : n("toast", `Failed to track node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error tracking node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function E(Y) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Y}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await u(Y);
            H.status === "success" ? (n("toast", `✓ Node "${Y}" removed`, "success"), await re()) : n("toast", `Failed to remove node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error removing node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function L(Y) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${Y}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await r(Y);
            H.status === "success" ? (n("toast", `✓ Node "${Y}" installed`, "success"), await re()) : n("toast", `Failed to install node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error installing node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function re() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return et(re), (Y, H) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (te) => w.value = !0)
          }, {
            actions: g(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: g(() => [...H[7] || (H[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: h.value,
            "onUpdate:modelValue": H[1] || (H[1] = (te) => h.value = te),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (a(), R(Is, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), R(Es, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            d.value.total_count ? (a(), R(tn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), c(j, { key: 0 }, [
                  b(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), c(j, { key: 1 }, [
                  b(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            x.value ? (a(), R(lt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", Yw, [
                  H[8] || (H[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), c(j, null, pe(e.versionMismatches, (te) => (a(), R(Et, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: g(() => [...H[9] || (H[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(f(te.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Jw, [
                      t("span", Xw, f(te.actual), 1),
                      H[10] || (H[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Qw, f(te.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "warning",
                      size: "sm",
                      onClick: H[2] || (H[2] = (Q) => n("repair-environment"))
                    }, {
                      default: g(() => [...H[11] || (H[11] = [
                        b(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (a(), R(lt, {
              key: 2,
              title: "UNTRACKED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(O.value, (te) => (a(), R(Et, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: g(() => [...H[12] || (H[12] = [
                    b("?", -1)
                  ])]),
                  title: g(() => [
                    b(f(te.name), 1)
                  ]),
                  subtitle: g(() => [...H[13] || (H[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    C(ft, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...H[14] || (H[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => I(te.name)
                    }, {
                      default: g(() => [...H[15] || (H[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Q) => E(te.name)
                    }, {
                      default: g(() => [...H[16] || (H[16] = [
                        b(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            $.value.length ? (a(), R(lt, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe($.value, (te) => (a(), R(Et, {
                  key: te.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    b(f(te.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    b(f(te.name), 1)
                  ]),
                  subtitle: g(() => [
                    te.version ? (a(), c("span", Zw, f(te.source === "development" ? "" : "v") + f(te.version), 1)) : (a(), c("span", eb, "version unknown")),
                    t("span", tb, " • " + f(T(te.source)), 1)
                  ]),
                  details: g(() => [
                    C(ft, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...H[17] || (H[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: A
                    }, {
                      default: g(() => [...H[18] || (H[18] = [
                        b(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (a(), R(lt, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(P.value, (te) => (a(), R(Et, {
                  key: te.name,
                  status: "missing"
                }, {
                  icon: g(() => [...H[19] || (H[19] = [
                    b("!", -1)
                  ])]),
                  title: g(() => [
                    b(f(te.name), 1)
                  ]),
                  subtitle: g(() => [...H[20] || (H[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    C(ft, {
                      label: "Required by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...H[21] || (H[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => L(te.name)
                    }, {
                      default: g(() => [...H[22] || (H[22] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !$.value.length && !P.value.length && !O.value.length ? (a(), R(ss, {
              key: 5,
              icon: "📭",
              message: h.value ? `No nodes match '${h.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(os, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: H[4] || (H[4] = (te) => w.value = !1)
      }, {
        content: g(() => [...H[23] || (H[23] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            b(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            b(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Untracked:"),
            b(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          C(le, {
            variant: "primary",
            onClick: H[3] || (H[3] = (te) => w.value = !1)
          }, {
            default: g(() => [...H[24] || (H[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), R(Gw, {
        key: 0,
        node: p.value,
        onClose: H[5] || (H[5] = (te) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), R(Ya, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: H[6] || (H[6] = (te) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), ob = /* @__PURE__ */ me(sb, [["__scopeId", "data-v-1555a802"]]);
function wr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const nb = { class: "remote-url-display" }, ab = ["title"], lb = ["title"], ib = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, rb = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, cb = /* @__PURE__ */ fe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), n = F(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const i = s.url.slice(0, Math.floor(s.maxLength * 0.6)), r = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${i}...${r}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(s.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (i) {
        console.error("Failed to copy URL:", i);
      }
    }
    return (i, r) => (a(), c("div", nb, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, ab),
      t("button", {
        class: Se(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), c("svg", rb, [...r[1] || (r[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), c("svg", ib, [...r[0] || (r[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, lb)
    ]));
  }
}), ub = /* @__PURE__ */ me(cb, [["__scopeId", "data-v-7768a58d"]]), db = { class: "remote-title" }, fb = {
  key: 0,
  class: "default-badge"
}, mb = {
  key: 1,
  class: "sync-badge"
}, vb = {
  key: 0,
  class: "ahead"
}, pb = {
  key: 1,
  class: "behind"
}, gb = {
  key: 1,
  class: "synced"
}, hb = ["href"], yb = {
  key: 1,
  class: "remote-url-text"
}, wb = /* @__PURE__ */ fe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = F(() => s.fetchingRemote === s.remote.name), n = F(() => s.remote.is_default), l = F(() => s.syncStatus && s.syncStatus.behind > 0), i = F(() => s.syncStatus && s.syncStatus.ahead > 0), r = F(() => s.remote.push_url !== s.remote.fetch_url), u = F(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = F(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), R(Et, {
      status: n.value ? "synced" : void 0
    }, eo({
      icon: g(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", db, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), c("span", fb, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", mb, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", vb, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", pb, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", gb, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        u.value ? (a(), c("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = it(() => {
          }, ["stop"]))
        }, f(d.value), 9, hb)) : (a(), c("span", yb, f(d.value), 1))
      ]),
      actions: g(() => [
        C(le, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (h) => m.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...v[6] || (v[6] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        C(le, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (h) => m.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            b(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(le, {
          variant: i.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (h) => m.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(le, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (h) => m.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), R(le, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (h) => m.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...v[8] || (v[8] = [
            b(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      r.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(ft, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              C(ub, {
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
}), bb = /* @__PURE__ */ me(wb, [["__scopeId", "data-v-8310f3a8"]]), _b = ["for"], kb = {
  key: 0,
  class: "base-form-field-required"
}, $b = { class: "base-form-field-input" }, Cb = {
  key: 1,
  class: "base-form-field-error"
}, xb = {
  key: 2,
  class: "base-form-field-hint"
}, Sb = /* @__PURE__ */ fe({
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
    const s = e, o = F(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), c("div", {
      class: Se(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), c("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), c("span", kb, "*")) : y("", !0)
      ], 8, _b)) : y("", !0),
      t("div", $b, [
        He(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), c("span", Cb, f(e.error), 1)) : e.hint ? (a(), c("span", xb, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), aa = /* @__PURE__ */ me(Sb, [["__scopeId", "data-v-9a1cf296"]]), Ib = { class: "remote-form" }, Eb = { class: "form-header" }, Tb = { class: "form-body" }, Pb = {
  key: 0,
  class: "form-error"
}, Rb = { class: "form-actions" }, Mb = /* @__PURE__ */ fe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), i = k(!1), r = k(null);
    Ct(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
        } catch (m) {
          r.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          i.value = !1;
        }
      }
    }
    return (m, v) => (a(), c("div", Ib, [
      t("div", Eb, [
        C(Ot, null, {
          default: g(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Tb, [
        C(aa, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            C(Qt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (h) => l.value.name = h),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        C(aa, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            C(Qt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (h) => l.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(aa, { label: "Push URL (optional)" }, {
          default: g(() => [
            C(Qt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (h) => l.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        r.value ? (a(), c("div", Pb, f(r.value), 1)) : y("", !0)
      ]),
      t("div", Rb, [
        C(le, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: i.value,
          onClick: d
        }, {
          default: g(() => [
            b(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(le, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (h) => m.$emit("cancel"))
        }, {
          default: g(() => [...v[4] || (v[4] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Db = /* @__PURE__ */ me(Mb, [["__scopeId", "data-v-56021b18"]]), Lb = { class: "conflict-summary-box" }, Ob = { class: "summary-header" }, Ab = { class: "summary-text" }, Nb = { key: 0 }, Ub = {
  key: 1,
  class: "all-resolved"
}, zb = { class: "summary-progress" }, Fb = { class: "progress-bar" }, Bb = { class: "progress-text" }, Vb = /* @__PURE__ */ fe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = F(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (n, l) => (a(), c("div", Lb, [
      t("div", Ob, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", Ab, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), c("p", Nb, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), c("p", Ub, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", zb, [
        t("div", Fb, [
          t("div", {
            class: "progress-fill",
            style: Gt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", Bb, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Wb = /* @__PURE__ */ me(Vb, [["__scopeId", "data-v-4e9e6cc9"]]), Gb = { class: "modal-header" }, jb = { class: "modal-title" }, Hb = { class: "modal-body" }, Kb = {
  key: 0,
  class: "error-box"
}, qb = {
  key: 0,
  class: "error-hint"
}, Yb = {
  key: 1,
  class: "loading-state"
}, Jb = { class: "commit-summary" }, Xb = {
  key: 0,
  class: "changes-section"
}, Qb = {
  key: 0,
  class: "change-group",
  open: ""
}, Zb = { class: "change-count" }, e_ = { class: "change-list" }, t_ = {
  key: 0,
  class: "conflict-badge"
}, s_ = {
  key: 1,
  class: "change-group"
}, o_ = { class: "change-count" }, n_ = { class: "change-list" }, a_ = {
  key: 2,
  class: "change-group"
}, l_ = { class: "change-count" }, i_ = { class: "change-list" }, r_ = {
  key: 2,
  class: "strategy-section"
}, c_ = { class: "radio-group" }, u_ = { class: "radio-option" }, d_ = { class: "radio-option" }, f_ = { class: "radio-option" }, m_ = {
  key: 3,
  class: "up-to-date"
}, v_ = { class: "modal-actions" }, jl = "comfygit.pullModelStrategy", p_ = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = k(localStorage.getItem(jl) || "skip");
    Ct(l, ($) => {
      localStorage.setItem(jl, $);
    });
    const i = F(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), r = F(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = F(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = F(() => {
      var $;
      return r.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = F(() => o.preview && wr(o.preview) ? o.preview : null), v = F(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), h = F(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = F(
      () => v.value > 0 && h.value === v.value
    ), p = F(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _($) {
      if (!m.value) return !1;
      const P = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((O) => O.name === P);
    }
    function S($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var O, T;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (x) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = it(() => {
            }, ["stop"]))
          }, [
            t("div", Gb, [
              t("h3", jb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (x) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", Hb, [
              e.error ? (a(), c("div", Kb, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), c("p", qb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), c("div", Yb, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (O = e.preview) != null && O.has_uncommitted_changes ? (a(), c(j, { key: 2 }, [
                P[15] || (P[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                P[16] || (P[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), c(j, { key: 3 }, [
                t("div", Jb, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), c("div", Xb, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  r.value > 0 ? (a(), c("details", Qb, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", Zb, f(r.value) + " changes", 1)
                    ]),
                    t("div", e_, [
                      (a(!0), c(j, null, pe(e.preview.changes.workflows.added, (x) => (a(), c("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128)),
                      (a(!0), c(j, null, pe(e.preview.changes.workflows.modified, (x) => (a(), c("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(x) + " ", 1),
                        _(x) ? (a(), c("span", t_, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), c(j, null, pe(e.preview.changes.workflows.deleted, (x) => (a(), c("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), c("details", s_, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", o_, f(u.value) + " to install", 1)
                    ]),
                    t("div", n_, [
                      (a(!0), c(j, null, pe(e.preview.changes.nodes.to_install, (x) => (a(), c("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), c("details", a_, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", l_, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", i_, [
                      (a(!0), c(j, null, pe(e.preview.changes.models.referenced, (x) => (a(), c("div", {
                        key: x,
                        class: "change-item"
                      }, f(x), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), R(Wb, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": h.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), c("div", r_, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", c_, [
                    t("label", u_, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (x) => l.value = x),
                        value: "all"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", d_, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (x) => l.value = x),
                        value: "required"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", f_, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (x) => l.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      P[24] || (P[24] = t("span", null, "Skip model downloads", -1)),
                      P[25] || (P[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  P[27] || (P[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), c("div", m_, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", v_, [
              C(le, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (x) => $.$emit("close"))
              }, {
                default: g(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), c(j, { key: 0 }, [
                C(le, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (x) => S(!1))
                }, {
                  default: g(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(le, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (x) => S(!0))
                }, {
                  default: g(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (a(), R(le, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (x) => S(!0))
              }, {
                default: g(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), c(j, { key: 2 }, [
                m.value && !w.value ? (a(), R(le, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (x) => n("openConflictResolution"))
                }, {
                  default: g(() => [
                    b(" Resolve Conflicts (" + f(h.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(le, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (x) => S(!1))
                }, {
                  default: g(() => [...P[33] || (P[33] = [
                    b(" Pull Changes ", -1)
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
}), g_ = /* @__PURE__ */ me(p_, [["__scopeId", "data-v-300c7b2f"]]), h_ = { class: "modal-header" }, y_ = { class: "modal-title" }, w_ = { class: "modal-body" }, b_ = {
  key: 0,
  class: "loading-state"
}, __ = {
  key: 1,
  class: "warning-box"
}, k_ = {
  key: 0,
  class: "commits-section"
}, $_ = { class: "commit-list" }, C_ = { class: "commit-hash" }, x_ = { class: "commit-message" }, S_ = { class: "commit-date" }, I_ = { class: "force-option" }, E_ = { class: "checkbox-option" }, T_ = { class: "commit-summary" }, P_ = { key: 0 }, R_ = { key: 1 }, M_ = {
  key: 0,
  class: "info-box"
}, D_ = {
  key: 1,
  class: "commits-section"
}, L_ = { class: "commit-list" }, O_ = { class: "commit-hash" }, A_ = { class: "commit-message" }, N_ = { class: "commit-date" }, U_ = {
  key: 2,
  class: "up-to-date"
}, z_ = { class: "modal-actions" }, F_ = /* @__PURE__ */ fe({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i) {
      o("push", { force: i });
    }
    return (i, r) => {
      var u, d, m;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: r[7] || (r[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: r[6] || (r[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", h_, [
              t("h3", y_, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: r[0] || (r[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", w_, [
              e.loading ? (a(), c("div", b_, [...r[8] || (r[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), c("div", __, [...r[9] || (r[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), c(j, { key: 2 }, [
                r[13] || (r[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), c("div", k_, [
                  r[10] || (r[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", $_, [
                    (a(!0), c(j, null, pe(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", C_, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", x_, f(v.message), 1),
                      t("span", S_, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", I_, [
                  t("label", E_, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": r[1] || (r[1] = (v) => n.value = v)
                    }, null, 512), [
                      [Yo, n.value]
                    ]),
                    r[11] || (r[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  r[12] || (r[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), c(j, { key: 3 }, [
                t("div", T_, [
                  r[14] || (r[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), c("span", P_, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), c("span", R_, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), c("div", M_, [...r[15] || (r[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), c("div", D_, [
                  r[16] || (r[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", L_, [
                    (a(!0), c(j, null, pe(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", O_, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", A_, f(v.message), 1),
                      t("span", N_, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), c("div", U_, [
                  r[17] || (r[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", z_, [
              C(le, {
                variant: "secondary",
                onClick: r[2] || (r[2] = (v) => i.$emit("close"))
              }, {
                default: g(() => [...r[18] || (r[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), c(j, { key: 0 }, [
                C(le, {
                  variant: "secondary",
                  onClick: r[3] || (r[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: g(() => [...r[19] || (r[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(le, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: r[4] || (r[4] = (v) => l(!0))
                }, {
                  default: g(() => [...r[20] || (r[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(le, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: r[5] || (r[5] = (v) => l(!1))
              }, {
                default: g(() => [...r[21] || (r[21] = [
                  b(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), B_ = /* @__PURE__ */ me(F_, [["__scopeId", "data-v-ae86b6a7"]]), V_ = { class: "resolution-choice-group" }, W_ = ["disabled"], G_ = ["disabled"], j_ = /* @__PURE__ */ fe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("div", V_, [
      t("button", {
        class: Se(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, W_),
      t("button", {
        class: Se(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, G_)
    ]));
  }
}), H_ = /* @__PURE__ */ me(j_, [["__scopeId", "data-v-985715ed"]]), K_ = { class: "conflict-header" }, q_ = { class: "conflict-info" }, Y_ = { class: "workflow-name" }, J_ = { class: "conflict-description" }, X_ = {
  key: 0,
  class: "resolved-badge"
}, Q_ = { class: "resolved-text" }, Z_ = { class: "conflict-hashes" }, ek = { class: "hash-item" }, tk = { class: "hash-item" }, sk = { class: "conflict-actions" }, ok = /* @__PURE__ */ fe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.resolution);
    Ct(() => o.resolution, (d) => {
      l.value = d;
    }), Ct(l, (d) => {
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
    return (d, m) => {
      var v, h;
      return a(), c("div", {
        class: Se(["conflict-item", { resolved: i.value }])
      }, [
        t("div", K_, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", q_, [
            t("code", Y_, f(e.conflict.name) + ".json", 1),
            t("div", J_, f(r.value), 1)
          ]),
          i.value ? (a(), c("div", X_, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", Q_, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", Z_, [
          t("span", ek, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", tk, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((h = e.conflict.target_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", sk, [
          C(H_, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), nk = /* @__PURE__ */ me(ok, [["__scopeId", "data-v-506d3bbf"]]), ak = { class: "resolution-content" }, lk = {
  key: 0,
  class: "error-box"
}, ik = { class: "resolution-header" }, rk = { class: "header-stats" }, ck = { class: "stat" }, uk = { class: "stat-value" }, dk = { class: "stat resolved" }, fk = { class: "stat-value" }, mk = {
  key: 0,
  class: "stat pending"
}, vk = { class: "stat-value" }, pk = { class: "conflicts-list" }, gk = {
  key: 1,
  class: "all-resolved-message"
}, hk = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = F(() => o.resolutions.size), i = F(() => o.workflowConflicts.length - l.value), r = F(() => l.value === o.workflowConflicts.length), u = F(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const p = o.resolutions.get(w);
      return (p == null ? void 0 : p.resolution) ?? null;
    }
    function m(w, p) {
      n("resolve", w, p);
    }
    function v() {
      n("close");
    }
    function h() {
      n("apply");
    }
    return (w, p) => (a(), R(gt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        t("div", ak, [
          e.error ? (a(), c("div", lk, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", ik, [
            t("div", rk, [
              t("div", ck, [
                t("span", uk, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", dk, [
                t("span", fk, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), c("div", mk, [
                t("span", vk, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", pk, [
            (a(!0), c(j, null, pe(e.workflowConflicts, (_) => (a(), R(nk, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (S) => m(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          r.value ? (a(), c("div", gk, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Le, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Le, {
          variant: "primary",
          disabled: !r.value || e.validating,
          loading: e.validating,
          onClick: h
        }, {
          default: g(() => [
            b(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), yk = /* @__PURE__ */ me(hk, [["__scopeId", "data-v-c58d150d"]]), wk = { class: "node-conflict-item" }, bk = { class: "node-header" }, _k = { class: "node-name" }, kk = { class: "node-id" }, $k = { class: "version-comparison" }, Ck = { class: "version yours" }, xk = { class: "version theirs" }, Sk = { class: "chosen-version" }, Ik = { class: "chosen" }, Ek = { class: "chosen-reason" }, Tk = { class: "affected-workflows" }, Pk = { class: "wf-source" }, Rk = { class: "wf-version" }, Mk = /* @__PURE__ */ fe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), c("div", wk, [
      t("div", bk, [
        t("code", _k, f(e.conflict.node_name), 1),
        t("span", kk, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", $k, [
        t("div", Ck, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", xk, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", Sk, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", Ik, f(e.conflict.chosen_version), 1),
        t("span", Ek, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", Tk, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), c(j, null, pe(e.conflict.affected_workflows, (n) => (a(), c("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", Pk, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", Rk, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Dk = /* @__PURE__ */ me(Mk, [["__scopeId", "data-v-8b626725"]]), Lk = { class: "validation-content" }, Ok = {
  key: 0,
  class: "compatible-message"
}, Ak = { class: "conflicts-list" }, Nk = {
  key: 2,
  class: "warnings-section"
}, Uk = /* @__PURE__ */ fe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = F(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, r) => (a(), R(gt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: r[3] || (r[3] = (u) => n("cancel"))
    }, {
      body: g(() => [
        t("div", Lk, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), c("div", Ok, [
            r[5] || (r[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              r[4] || (r[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), c(j, { key: 1 }, [
            r[6] || (r[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", Ak, [
              (a(!0), c(j, null, pe(e.validation.node_conflicts, (u) => (a(), R(Dk, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            r[7] || (r[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), c("div", Nk, [
            r[8] || (r[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), c(j, null, pe(e.validation.warnings, (u, d) => (a(), c("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Le, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (u) => n("cancel"))
        }, {
          default: g(() => [...r[9] || (r[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        r[11] || (r[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Le, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => n("goBack"))
        }, {
          default: g(() => [...r[10] || (r[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Le, {
          variant: "primary",
          loading: e.executing,
          onClick: r[2] || (r[2] = (u) => n("proceed"))
        }, {
          default: g(() => [
            b(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), zk = /* @__PURE__ */ me(Uk, [["__scopeId", "data-v-fefd26ed"]]), Fk = { key: 0 }, Bk = /* @__PURE__ */ fe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: n,
      addRemote: l,
      removeRemote: i,
      updateRemoteUrl: r,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: h,
      pushToRemote: w,
      validateMerge: p
    } = rt(), _ = k([]), S = k(null), $ = k({}), P = k(!1), O = k(null), T = k(""), x = k(!1), q = k(null), B = k(!1), A = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), E = F(() => {
      if (!T.value.trim()) return _.value;
      const ge = T.value.toLowerCase();
      return _.value.filter(
        (W) => W.name.toLowerCase().includes(ge) || W.fetch_url.toLowerCase().includes(ge) || W.push_url.toLowerCase().includes(ge)
      );
    });
    async function L() {
      P.value = !0, O.value = null;
      try {
        const ge = await n();
        _.value = ge.remotes, S.value = ge.current_branch_tracking || null, await Promise.all(
          ge.remotes.map(async (W) => {
            const z = await d(W.name);
            z && ($.value[W.name] = z);
          })
        );
      } catch (ge) {
        O.value = ge instanceof Error ? ge.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function re() {
      A.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function Y(ge) {
      const W = _.value.find((z) => z.name === ge);
      W && (A.value = "edit", I.value = {
        name: W.name,
        fetchUrl: W.fetch_url,
        pushUrl: W.push_url
      }, B.value = !0);
    }
    async function H(ge) {
      try {
        A.value === "add" ? await l(ge.name, ge.fetchUrl) : await r(ge.name, ge.fetchUrl, ge.pushUrl || void 0), B.value = !1, await L();
      } catch (W) {
        O.value = W instanceof Error ? W.message : "Operation failed";
      }
    }
    function te() {
      B.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(ge) {
      q.value = ge;
      try {
        await u(ge);
        const W = await d(ge);
        W && ($.value[ge] = W), o("toast", `✓ Fetched from ${ge}`, "success");
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function N(ge) {
      if (confirm(`Remove remote "${ge}"?`))
        try {
          await i(ge), await L();
        } catch (W) {
          O.value = W instanceof Error ? W.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const M = k("idle"), we = F(() => M.value === "pull_preview"), ve = F(
      () => M.value === "resolving" || M.value === "validating"
    ), Ie = F(
      () => M.value === "validation_review" || M.value === "executing"
    ), Re = k(!1), Ke = k(null), Xe = k(!1), ke = k(null), Ee = k(!1), Ge = k(null), be = k(null), ae = k(/* @__PURE__ */ new Map()), Ve = k(null), Te = k(null), D = F(() => Ge.value && wr(Ge.value) ? Ge.value : null);
    async function V(ge) {
      ke.value = ge, M.value = "pull_preview", Ee.value = !0, Ge.value = null, be.value = null;
      try {
        Ge.value = await m(ge);
      } catch (W) {
        be.value = W instanceof Error ? W.message : "Failed to load pull preview";
      } finally {
        Ee.value = !1;
      }
    }
    function se() {
      M.value = "idle", Ge.value = null, be.value = null, ke.value = null;
    }
    async function ne(ge) {
      if (!ke.value) return;
      M.value = "executing", be.value = null;
      const W = ke.value;
      try {
        const z = await v(W, ge);
        if (z.rolled_back) {
          be.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        xe(), M.value = "idle", o("toast", `✓ Pulled from ${W}`, "success"), await L();
      } catch (z) {
        be.value = z instanceof Error ? z.message : "Pull failed", M.value = "pull_preview";
      }
    }
    function ue() {
      D.value && (M.value = "resolving", Te.value = null);
    }
    function de(ge, W) {
      ae.value.set(ge, { name: ge, resolution: W });
    }
    function $e() {
      M.value = "pull_preview";
    }
    async function Ce() {
      M.value = "validating", Te.value = null;
      try {
        const ge = Array.from(ae.value.values());
        Ve.value = await p(ke.value, ge), M.value = "validation_review";
      } catch (ge) {
        Te.value = ge instanceof Error ? ge.message : "Validation failed", M.value = "resolving";
      }
    }
    async function oe() {
      M.value = "executing";
      const ge = ke.value;
      try {
        const W = Array.from(ae.value.values()), z = await v(ge, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: W
        });
        if (z.rolled_back) {
          be.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        xe(), M.value = "idle", o("toast", `✓ Pulled from ${ge}`, "success"), await L();
      } catch (W) {
        be.value = W instanceof Error ? W.message : "Pull failed", M.value = "validation_review";
      }
    }
    function ce() {
      M.value = "resolving";
    }
    function De() {
      xe(), M.value = "idle";
    }
    function xe() {
      ae.value.clear(), Ve.value = null, Te.value = null, be.value = null, Ge.value = null, ke.value = null;
    }
    async function Z(ge) {
      ke.value = ge, Re.value = !0, Ee.value = !0, Ke.value = null;
      try {
        Ke.value = await h(ge);
      } catch (W) {
        O.value = W instanceof Error ? W.message : "Failed to load push preview";
      } finally {
        Ee.value = !1;
      }
    }
    function K() {
      Re.value = !1, Ke.value = null, ke.value = null;
    }
    async function Pe(ge) {
      if (!ke.value) return;
      Xe.value = !0;
      const W = ke.value;
      try {
        await w(W, ge), K(), o("toast", `✓ Pushed to ${W}`, "success"), await L();
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Push failed", "error");
      } finally {
        Xe.value = !1;
      }
    }
    function he() {
      const ge = ke.value;
      K(), ge && V(ge);
    }
    return et(L), (ge, W) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (z) => x.value = !0)
          }, {
            actions: g(() => [
              B.value ? y("", !0) : (a(), R(le, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: g(() => [...W[3] || (W[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          B.value ? y("", !0) : (a(), R(bo, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": W[1] || (W[1] = (z) => T.value = z),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          P.value ? (a(), R(Is, {
            key: 0,
            message: "Loading remotes..."
          })) : O.value ? (a(), R(Es, {
            key: 1,
            message: O.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            B.value ? (a(), R(Db, {
              key: 0,
              mode: A.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: H,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !B.value ? (a(), R(tn, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), c("span", Fk, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value.length && !B.value ? (a(), R(lt, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(E.value, (z) => (a(), R(bb, {
                  key: z.name,
                  remote: z,
                  "sync-status": $.value[z.name],
                  "fetching-remote": q.value,
                  onFetch: Q,
                  onEdit: Y,
                  onRemove: N,
                  onPull: V,
                  onPush: Z
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !E.value.length && !B.value ? (a(), R(ss, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                C(le, {
                  variant: "primary",
                  onClick: re
                }, {
                  default: g(() => [...W[4] || (W[4] = [
                    b(" Add Your First Remote ", -1)
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
      C(os, {
        show: x.value,
        title: "About Git Remotes",
        onClose: W[2] || (W[2] = (z) => x.value = !1)
      }, {
        content: g(() => [...W[5] || (W[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          C(le, {
            variant: "link",
            onClick: U
          }, {
            default: g(() => [...W[6] || (W[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(g_, {
        show: we.value,
        "remote-name": ke.value || "",
        preview: Ge.value,
        loading: Ee.value,
        pulling: M.value === "executing",
        error: be.value,
        "conflict-resolutions": ae.value,
        onClose: se,
        onPull: ne,
        onOpenConflictResolution: ue
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(B_, {
        show: Re.value,
        "remote-name": ke.value || "",
        preview: Ke.value,
        loading: Ee.value,
        pushing: Xe.value,
        onClose: K,
        onPush: Pe,
        onPullFirst: he
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ve.value && D.value ? (a(), R(yk, {
        key: 0,
        "workflow-conflicts": D.value.workflow_conflicts,
        resolutions: ae.value,
        "operation-type": "pull",
        validating: M.value === "validating",
        error: Te.value,
        onClose: $e,
        onResolve: de,
        onApply: Ce
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Ie.value && Ve.value ? (a(), R(zk, {
        key: 1,
        validation: Ve.value,
        "operation-type": "pull",
        executing: M.value === "executing",
        onProceed: oe,
        onGoBack: ce,
        onCancel: De
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Vk = /* @__PURE__ */ me(Bk, [["__scopeId", "data-v-9ae3b76d"]]), Wk = { class: "setting-info" }, Gk = { class: "setting-label" }, jk = {
  key: 0,
  class: "required-marker"
}, Hk = {
  key: 0,
  class: "setting-description"
}, Kk = { class: "setting-control" }, qk = /* @__PURE__ */ fe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Se(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", Wk, [
        t("div", Gk, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), c("span", jk, "*")) : y("", !0)
        ]),
        e.description ? (a(), c("div", Hk, f(e.description), 1)) : y("", !0)
      ]),
      t("div", Kk, [
        He(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), la = /* @__PURE__ */ me(qk, [["__scopeId", "data-v-cb5d236c"]]), Yk = { class: "toggle" }, Jk = ["checked", "disabled"], Xk = /* @__PURE__ */ fe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("label", Yk, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Jk),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Qk = /* @__PURE__ */ me(Xk, [["__scopeId", "data-v-71c0f550"]]), Zk = { class: "workspace-settings-content" }, e2 = { class: "settings-section" }, t2 = { class: "path-setting" }, s2 = { class: "path-value" }, o2 = { class: "path-setting" }, n2 = { class: "path-value" }, a2 = { class: "settings-section" }, l2 = { class: "settings-section" }, i2 = { class: "settings-section" }, r2 = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: r } = rt(), u = k(!1), d = k(null), m = k(null), v = k(null), h = k(null), w = k(""), p = k(""), _ = k(!1);
    function S(B) {
      return B.join(" ");
    }
    function $(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const P = F(() => {
      if (!h.value) return !1;
      const B = w.value !== (h.value.civitai_api_key || ""), A = p.value !== S(h.value.comfyui_extra_args || []);
      return B || A;
    });
    async function O() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), h.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = S(v.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = B !== "false";
      } catch (B) {
        d.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function T() {
      var B, A;
      m.value = null;
      try {
        const I = {};
        w.value !== (((B = h.value) == null ? void 0 : B.civitai_api_key) || "") && (I.civitai_api_key = w.value || null), p.value !== S(((A = h.value) == null ? void 0 : A.comfyui_extra_args) || []) && (I.comfyui_extra_args = $(p.value)), await r(I, n.workspacePath || void 0), await O(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (I) {
        const E = I instanceof Error ? I.message : "Failed to save settings";
        m.value = { type: "error", message: E }, l("error", E);
      }
    }
    function x() {
      h.value && (w.value = h.value.civitai_api_key || "", p.value = S(h.value.comfyui_extra_args || []), m.value = null);
    }
    function q(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return s({
      saveSettings: T,
      resetSettings: x,
      hasChanges: P,
      loadSettings: O
    }), et(O), (B, A) => (a(), c("div", Zk, [
      u.value ? (a(), R(Is, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), R(Es, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: O
      }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
        C(lt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var I, E;
            return [
              t("div", e2, [
                t("div", t2, [
                  A[3] || (A[3] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  A[4] || (A[4] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", s2, f(((I = v.value) == null ? void 0 : I.workspace_path) || "Loading..."), 1)
                ]),
                t("div", o2, [
                  A[5] || (A[5] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  A[6] || (A[6] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", n2, f(((E = v.value) == null ? void 0 : E.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(lt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", a2, [
              C(la, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  C(En, {
                    modelValue: w.value,
                    "onUpdate:modelValue": A[0] || (A[0] = (I) => w.value = I),
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
        C(lt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", l2, [
              C(la, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  C(En, {
                    modelValue: p.value,
                    "onUpdate:modelValue": A[1] || (A[1] = (I) => p.value = I),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              A[7] || (A[7] = t("div", { class: "setting-hint" }, [
                b(" Common flags: "),
                t("code", null, "--lowvram"),
                b(", "),
                t("code", null, "--highvram"),
                b(", "),
                t("code", null, "--listen 0.0.0.0"),
                b(", "),
                t("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        C(lt, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", i2, [
              C(la, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  C(Qk, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      A[2] || (A[2] = (I) => _.value = I),
                      q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), R(tn, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Gt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), br = /* @__PURE__ */ me(r2, [["__scopeId", "data-v-004ef04f"]]), c2 = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Tt, null, {
      header: g(() => [
        C(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var i, r;
            return [
              C(le, {
                variant: "primary",
                size: "sm",
                disabled: !((i = s.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (r = s.value) != null && r.hasChanges ? (a(), R(le, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  b(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        C(br, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), u2 = { class: "base-tabs" }, d2 = ["disabled", "onClick"], f2 = {
  key: 0,
  class: "base-tabs__badge"
}, m2 = /* @__PURE__ */ fe({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l(i) {
      var r;
      (r = o.tabs.find((u) => u.id === i)) != null && r.disabled || n("update:modelValue", i);
    }
    return (i, r) => (a(), c("div", u2, [
      (a(!0), c(j, null, pe(e.tabs, (u) => (a(), c("button", {
        key: u.id,
        class: Se([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        b(f(u.label) + " ", 1),
        u.badge ? (a(), c("span", f2, f(u.badge), 1)) : y("", !0)
      ], 10, d2))), 128))
    ]));
  }
}), _r = /* @__PURE__ */ me(m2, [["__scopeId", "data-v-ad5e6cad"]]), v2 = { class: "log-viewer-wrapper" }, p2 = ["disabled", "title"], g2 = /* @__PURE__ */ fe({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), n = k("idle"), l = F(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      var v;
      await Qo();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    et(i), Ct(() => s.logs, i);
    async function r() {
      if (l.value.length === 0) return;
      const m = l.value.map((v) => v.text).join(`
`);
      try {
        await navigator.clipboard.writeText(m), n.value = "copied", setTimeout(() => {
          n.value = "idle";
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
    return (m, v) => (a(), c("div", v2, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: u,
        onCopy: d,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: r,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, p2),
        (a(!0), c(j, null, pe(l.value, (h, w) => (a(), c("div", {
          key: w,
          class: Se(`log-line log-level-${h.level.toLowerCase()}`)
        }, f(h.text), 3))), 128))
      ], 544)
    ]));
  }
}), kr = /* @__PURE__ */ me(g2, [["__scopeId", "data-v-c0cc6d21"]]), h2 = /* @__PURE__ */ fe({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = rt(), r = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), h = k(null), w = k(null), p = k(!1), _ = F(() => r.value === "workspace" ? h.value : w.value);
    async function S() {
      d.value = !0, m.value = null;
      try {
        r.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (O) {
        m.value = O instanceof Error ? O.message : `Failed to load ${r.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [O, T] = await Promise.all([
          o(),
          l()
        ]);
        O.exists && (h.value = O.path), T.exists && (w.value = T.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (O) {
          console.error("Failed to open log file:", O);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ct(r, () => {
      S();
    }), et(() => {
      S(), $();
    }), (O, T) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (x) => v.value = !0)
          }, {
            actions: g(() => [
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: P,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  b(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: d.value
              }, {
                default: g(() => [
                  b(f(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(_r, {
            modelValue: r.value,
            "onUpdate:modelValue": T[1] || (T[1] = (x) => r.value = x),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), R(Is, {
            key: 0,
            message: `Loading ${r.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), R(Es, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            u.value.length === 0 ? (a(), R(ss, {
              key: 0,
              icon: "📝",
              message: `No ${r.value} logs available`
            }, null, 8, ["message"])) : (a(), R(kr, {
              key: 1,
              logs: u.value,
              "raw-format": r.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(os, {
        show: v.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (x) => v.value = !1)
      }, {
        content: g(() => [...T[4] || (T[4] = [
          t("p", null, [
            t("strong", null, "Workspace Logs:"),
            b(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Orchestrator Logs:"),
            b(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            b(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            b(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            b(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            b(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: g(() => [
          C(le, {
            variant: "primary",
            onClick: T[2] || (T[2] = (x) => v.value = !1)
          }, {
            default: g(() => [...T[5] || (T[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), y2 = /* @__PURE__ */ fe({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = rt(), i = k([]), r = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), h = k(!1);
    async function w() {
      r.value = !0, u.value = null;
      try {
        i.value = await s(void 0, 500);
        try {
          const S = await o();
          m.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        r.value = !1;
      }
    }
    async function p() {
      try {
        const S = await n();
        S.exists && (v.value = S.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        h.value = !0;
        try {
          await l(v.value);
        } catch (S) {
          console.error("Failed to open log file:", S);
        } finally {
          h.value = !1;
        }
      }
    }
    return et(() => {
      w(), p();
    }), (S, $) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: g(() => [
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: !v.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  b(f(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: r.value
              }, {
                default: g(() => [
                  b(f(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          r.value ? (a(), R(Is, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), R(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            i.value.length === 0 ? (a(), R(ss, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(kr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      C(os, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (P) => d.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            $[3] || ($[3] = b(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, f(m.value), 1),
            $[4] || ($[4] = b(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            b(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            b(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            b(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            b(" Detailed debugging information ")
          ], -1))
        ]),
        actions: g(() => [
          C(le, {
            variant: "primary",
            onClick: $[1] || ($[1] = (P) => d.value = !1)
          }, {
            default: g(() => [...$[6] || ($[6] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), w2 = { class: "env-title" }, b2 = {
  key: 0,
  class: "current-badge"
}, _2 = {
  key: 0,
  class: "branch-info"
}, k2 = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), R(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, eo({
      icon: g(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", w2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), c("span", b2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (a(), c("span", _2, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: g(() => [
        He(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          C(ft, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          C(ft, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          C(ft, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), R(ft, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), $2 = /* @__PURE__ */ me(k2, [["__scopeId", "data-v-9231917a"]]), C2 = { class: "env-details" }, x2 = { class: "status-row" }, S2 = {
  key: 0,
  class: "detail-row"
}, I2 = { class: "value mono" }, E2 = {
  key: 1,
  class: "detail-row"
}, T2 = { class: "value mono small" }, P2 = { class: "detail-row" }, R2 = { class: "value" }, M2 = { class: "detail-row" }, D2 = { class: "value" }, L2 = { class: "detail-row" }, O2 = { class: "value" }, A2 = {
  key: 2,
  class: "section-divider"
}, N2 = {
  key: 3,
  class: "detail-row"
}, U2 = { class: "value" }, z2 = {
  key: 4,
  class: "detail-row"
}, F2 = { class: "value" }, B2 = { class: "footer-actions" }, V2 = /* @__PURE__ */ fe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: s }) {
    const o = s;
    function n(l) {
      if (!l) return "Unknown";
      try {
        const i = new Date(l), u = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), d = Math.floor(u / 6e4), m = Math.floor(u / 36e5), v = Math.floor(u / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : v < 30 ? `${v} ${v === 1 ? "day" : "days"} ago` : i.toLocaleDateString();
      } catch {
        return l;
      }
    }
    return (l, i) => (a(), R(gt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (r) => o("close"))
    }, {
      body: g(() => [
        t("div", C2, [
          t("div", x2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Se(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), c("div", S2, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", I2, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), c("div", E2, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", T2, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", P2, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", R2, f(e.environment.workflow_count), 1)
          ]),
          t("div", M2, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", D2, f(e.environment.node_count), 1)
          ]),
          t("div", L2, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", O2, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), c("div", A2)) : y("", !0),
          e.environment.created_at ? (a(), c("div", N2, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", U2, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), c("div", z2, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", F2, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", B2, [
          e.canDelete ? (a(), R(Le, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (r) => o("delete", e.environment.name))
          }, {
            default: g(() => [...i[12] || (i[12] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          C(Le, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (r) => o("close"))
          }, {
            default: g(() => [...i[13] || (i[13] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), W2 = /* @__PURE__ */ me(V2, [["__scopeId", "data-v-59855453"]]), $r = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Cr = "3.12", Ja = [
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
], xr = "auto", G2 = { class: "progress-bar" }, j2 = /* @__PURE__ */ fe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = F(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), c("div", G2, [
      t("div", {
        class: Se(["progress-fill", e.variant]),
        style: Gt({ width: o.value })
      }, null, 6)
    ]));
  }
}), jn = /* @__PURE__ */ me(j2, [["__scopeId", "data-v-1beb0512"]]), H2 = { class: "task-progress" }, K2 = { class: "progress-info" }, q2 = { class: "progress-percentage" }, Y2 = { class: "progress-message" }, J2 = {
  key: 0,
  class: "progress-steps"
}, X2 = { class: "step-icon" }, Q2 = { class: "step-label" }, Z2 = /* @__PURE__ */ fe({
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
      const i = s.steps.find((r) => r.id === l);
      return i ? s.progress >= i.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const i = o(l);
      return i === "completed" ? "✓" : i === "active" ? "⟳" : "○";
    }
    return (l, i) => (a(), c("div", H2, [
      C(jn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", K2, [
        t("span", q2, f(e.progress) + "%", 1),
        t("span", Y2, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), c("div", J2, [
        (a(!0), c(j, null, pe(e.steps, (r) => (a(), c("div", {
          key: r.id,
          class: Se(["step", o(r.id)])
        }, [
          t("span", X2, f(n(r.id)), 1),
          t("span", Q2, f(r.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Pn = /* @__PURE__ */ me(Z2, [["__scopeId", "data-v-9d1de66c"]]), e$ = {
  key: 0,
  class: "create-env-form"
}, t$ = { class: "form-field" }, s$ = { class: "form-field" }, o$ = ["value"], n$ = { class: "form-field" }, a$ = ["disabled"], l$ = ["value"], i$ = { class: "form-field" }, r$ = ["value"], c$ = { class: "form-field form-field--checkbox" }, u$ = { class: "form-checkbox" }, d$ = {
  key: 1,
  class: "create-env-progress"
}, f$ = { class: "creating-intro" }, m$ = {
  key: 0,
  class: "progress-warning"
}, v$ = {
  key: 1,
  class: "create-error"
}, p$ = { class: "error-message" }, g$ = {
  key: 1,
  class: "footer-status"
}, h$ = 10, y$ = /* @__PURE__ */ fe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = rt(), r = k(""), u = k(Cr), d = k("latest"), m = k(xr), v = k(!1), h = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let S = null, $ = 0;
    const P = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], O = k(null);
    function T() {
      p.value || o("close");
    }
    async function x() {
      const E = r.value.trim();
      if (E) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const L = {
            name: E,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, re = await l(L);
          re.status === "started" ? q() : re.status === "error" && (_.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
          });
        } catch (L) {
          _.value = {
            progress: 0,
            message: L instanceof Error ? L.message : "Unknown error",
            error: L instanceof Error ? L.message : "Unknown error"
          };
        }
      }
    }
    function q() {
      S || ($ = 0, S = window.setInterval(async () => {
        try {
          const E = await i();
          $ = 0, _.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase,
            error: E.error
          }, E.state === "complete" ? (B(), o("created", E.environment_name || r.value.trim(), v.value)) : E.state === "error" ? (B(), _.value.error = E.error || E.message) : E.state === "idle" && p.value && (B(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= h$ && (B(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      S && (clearInterval(S), S = null);
    }
    function A() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function I() {
      w.value = !0;
      try {
        h.value = await n();
      } catch (E) {
        console.error("Failed to load ComfyUI releases:", E);
      } finally {
        w.value = !1;
      }
    }
    return et(async () => {
      var E;
      await Qo(), (E = O.value) == null || E.focus(), I();
    }), wo(() => {
      B();
    }), (E, L) => (a(), R(gt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: T
    }, {
      body: g(() => [
        p.value ? (a(), c("div", d$, [
          t("p", f$, [
            L[11] || (L[11] = b(" Creating environment ", -1)),
            t("strong", null, f(r.value), 1),
            L[12] || (L[12] = b("... ", -1))
          ]),
          C(Pn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), c("p", m$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), c("div", v$, [
            t("p", p$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), c("div", e$, [
          t("div", t$, [
            L[6] || (L[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: O,
              "onUpdate:modelValue": L[0] || (L[0] = (re) => r.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Xt(x, ["enter"])
            }, null, 544), [
              [Nt, r.value]
            ])
          ]),
          t("div", s$, [
            L[7] || (L[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[1] || (L[1] = (re) => u.value = re),
              class: "form-select"
            }, [
              (a(!0), c(j, null, pe(Fe($r), (re) => (a(), c("option", {
                key: re,
                value: re
              }, f(re), 9, o$))), 128))
            ], 512), [
              [vs, u.value]
            ])
          ]),
          t("div", n$, [
            L[8] || (L[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[2] || (L[2] = (re) => d.value = re),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), c(j, null, pe(h.value, (re) => (a(), c("option", {
                key: re.tag_name,
                value: re.tag_name
              }, f(re.name), 9, l$))), 128))
            ], 8, a$), [
              [vs, d.value]
            ])
          ]),
          t("div", i$, [
            L[9] || (L[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[3] || (L[3] = (re) => m.value = re),
              class: "form-select"
            }, [
              (a(!0), c(j, null, pe(Fe(Ja), (re) => (a(), c("option", {
                key: re,
                value: re
              }, f(re) + f(re === "auto" ? " (detect GPU)" : ""), 9, r$))), 128))
            ], 512), [
              [vs, m.value]
            ])
          ]),
          t("div", c$, [
            t("label", u$, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": L[4] || (L[4] = (re) => v.value = re)
              }, null, 512), [
                [Yo, v.value]
              ]),
              L[10] || (L[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        p.value ? (a(), c(j, { key: 1 }, [
          _.value.error ? (a(), R(Le, {
            key: 0,
            variant: "secondary",
            onClick: A
          }, {
            default: g(() => [...L[15] || (L[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), c("span", g$, " Creating environment... "))
        ], 64)) : (a(), c(j, { key: 0 }, [
          C(Le, {
            variant: "primary",
            disabled: !r.value.trim(),
            onClick: x
          }, {
            default: g(() => [...L[13] || (L[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Le, {
            variant: "secondary",
            onClick: L[5] || (L[5] = (re) => o("close"))
          }, {
            default: g(() => [...L[14] || (L[14] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), w$ = /* @__PURE__ */ me(y$, [["__scopeId", "data-v-f37eaa42"]]), b$ = /* @__PURE__ */ fe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = rt(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), h = k(null), w = F(() => {
      if (!d.value.trim()) return i.value;
      const O = d.value.toLowerCase();
      return i.value.filter(
        (T) => {
          var x;
          return T.name.toLowerCase().includes(O) || ((x = T.current_branch) == null ? void 0 : x.toLowerCase().includes(O));
        }
      );
    });
    function p(O, T) {
      v.value = !1, n("created", O, T);
    }
    function _() {
      v.value = !0;
    }
    function S(O) {
      h.value = O;
    }
    function $(O) {
      h.value = null, n("delete", O);
    }
    async function P() {
      r.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to load environments";
      } finally {
        r.value = !1;
      }
    }
    return et(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (O, T) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (x) => m.value = !0)
          }, {
            actions: g(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: g(() => [...T[7] || (T[7] = [
                  b(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: d.value,
            "onUpdate:modelValue": T[1] || (T[1] = (x) => d.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          r.value ? (a(), R(Is, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), R(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            w.value.length ? (a(), R(lt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, pe(w.value, (x) => (a(), R($2, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    x.is_current ? y("", !0) : (a(), R(le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => O.$emit("switch", x.name)
                    }, {
                      default: g(() => [...T[8] || (T[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => S(x)
                    }, {
                      default: g(() => [...T[9] || (T[9] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            w.value.length ? y("", !0) : (a(), R(ss, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, eo({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  C(le, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: g(() => [...T[10] || (T[10] = [
                      b(" Create Environment ", -1)
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
      C(os, {
        show: m.value,
        title: "About Environments",
        onClose: T[3] || (T[3] = (x) => m.value = !1)
      }, {
        content: g(() => [...T[11] || (T[11] = [
          t("p", null, [
            t("strong", null, "Environments"),
            b(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          C(le, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (x) => m.value = !1)
          }, {
            default: g(() => [...T[12] || (T[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (a(), R(W2, {
        key: 0,
        environment: h.value,
        "can-delete": i.value.length > 1,
        onClose: T[4] || (T[4] = (x) => h.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), R(w$, {
        key: 1,
        onClose: T[5] || (T[5] = (x) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), _$ = /* @__PURE__ */ me(b$, [["__scopeId", "data-v-f95999f4"]]), k$ = { class: "file-path" }, $$ = { class: "file-path-text" }, C$ = ["title"], x$ = /* @__PURE__ */ fe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = k(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, i) => (a(), c("div", k$, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", $$, f(e.path), 1),
      e.copyable ? (a(), c("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, C$)) : y("", !0)
    ]));
  }
}), S$ = /* @__PURE__ */ me(x$, [["__scopeId", "data-v-f0982173"]]), I$ = { class: "export-blocked" }, E$ = { class: "issues-list" }, T$ = { class: "issue-message" }, P$ = {
  key: 0,
  class: "issue-details"
}, R$ = ["onClick"], M$ = { class: "issue-fix" }, D$ = /* @__PURE__ */ fe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(e) {
    const s = e, o = Fs({});
    function n(l) {
      const i = s.issues[l];
      return o[l] || i.details.length <= 3 ? i.details : i.details.slice(0, 3);
    }
    return (l, i) => (a(), R(gt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (r) => l.$emit("close"))
    }, {
      body: g(() => [
        t("div", I$, [
          i[2] || (i[2] = t("div", { class: "error-header" }, [
            t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ]),
            t("div", { class: "error-summary" }, [
              t("h3", { class: "error-title" }, "Export blocked"),
              t("p", { class: "error-description" }, " The following issues must be resolved before exporting. ")
            ])
          ], -1)),
          t("div", E$, [
            (a(!0), c(j, null, pe(e.issues, (r, u) => (a(), c("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", T$, f(r.message), 1),
              r.details.length ? (a(), c("div", P$, [
                (a(!0), c(j, null, pe(n(u), (d, m) => (a(), c("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                r.details.length > 3 && !o[u] ? (a(), c("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(r.details.length - 3) + " more ", 9, R$)) : y("", !0)
              ])) : y("", !0),
              t("div", M$, [
                r.type === "uncommitted_workflows" ? (a(), c(j, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : r.type === "uncommitted_git_changes" ? (a(), c(j, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : r.type === "unresolved_issues" ? (a(), c(j, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: g(() => [
        C(Le, {
          variant: "primary",
          onClick: i[0] || (i[0] = (r) => l.$emit("close"))
        }, {
          default: g(() => [...i[3] || (i[3] = [
            b(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Sr = /* @__PURE__ */ me(D$, [["__scopeId", "data-v-b52f5e32"]]), L$ = { class: "export-warnings" }, O$ = {
  key: 0,
  class: "success-header"
}, A$ = { class: "warning-header" }, N$ = { class: "warning-summary" }, U$ = { class: "warning-title" }, z$ = { class: "models-section" }, F$ = { class: "models-list" }, B$ = { class: "model-info" }, V$ = { class: "model-filename" }, W$ = { class: "model-workflows" }, G$ = ["onClick"], j$ = /* @__PURE__ */ fe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), r = F(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), c(j, null, [
      C(gt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", L$, [
            e.models.length === 0 ? (a(), c("div", O$, [...m[4] || (m[4] = [
              t("span", { class: "success-icon" }, [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1),
              t("div", { class: "success-summary" }, [
                t("h3", { class: "success-title" }, "All models have source URLs"),
                t("p", { class: "success-description" }, " Your environment is ready to export. Recipients will be able to download all models automatically. ")
              ], -1)
            ])])) : (a(), c(j, { key: 1 }, [
              t("div", A$, [
                m[6] || (m[6] = t("span", { class: "warning-icon" }, [
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
                t("div", N$, [
                  t("h3", U$, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", z$, [
                t("div", F$, [
                  (a(!0), c(j, null, pe(r.value, (v) => (a(), c("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", B$, [
                      t("div", V$, f(v.filename), 1),
                      t("div", W$, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (h) => i.value = v.hash
                    }, " Add Source ", 8, G$)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (a(), c("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (v) => l.value = !0)
                }, " Show " + f(e.models.length - 3) + " more model" + f(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : y("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: g(() => [
          C(Le, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: g(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Le, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => d.$emit("confirm"))
          }, {
            default: g(() => [
              b(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), R(qa, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Ir = /* @__PURE__ */ me(j$, [["__scopeId", "data-v-b698d882"]]), H$ = { class: "export-card" }, K$ = { class: "export-path-row" }, q$ = { class: "export-actions" }, Y$ = {
  key: 1,
  class: "export-warning"
}, J$ = /* @__PURE__ */ fe({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = rt(), n = k(""), l = k(!1), i = k(!1), r = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), h = k(!1), w = F(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const T = await s();
        m.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? h.value = !0 : await $() : v.value = !0;
      } catch (T) {
        u.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function _() {
      h.value = !1, await $();
    }
    async function S() {
      try {
        const T = await s();
        m.value = T;
      } catch (T) {
        console.error("Re-validation failed:", T);
      }
    }
    async function $() {
      i.value = !0;
      try {
        const T = await o(n.value || void 0);
        u.value = T;
      } catch (T) {
        u.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var T;
      if ((T = u.value) != null && T.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function O() {
      var T;
      if ((T = u.value) != null && T.path) {
        r.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const q = await x.blob(), B = URL.createObjectURL(q), A = u.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = B, I.download = A, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(B);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
      }
    }
    return (T, x) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (q) => d.value = !0)
          })
        ]),
        content: g(() => [
          C(lt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", H$, [
                x[7] || (x[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", K$, [
                  C(En, {
                    modelValue: n.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (q) => n.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", q$, [
                  C(le, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: g(() => [
                      x[6] || (x[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      b(" " + f(w.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (a(), R(lt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              C(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: g(() => [
                  b(f(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(f(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(f(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    C(ft, { label: "Saved to:" }, {
                      default: g(() => [
                        C(S$, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), R(ft, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), c("div", Y$, [...x[8] || (x[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      loading: r.value,
                      onClick: O
                    }, {
                      default: g(() => [...x[9] || (x[9] = [
                        t("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          t("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: g(() => [...x[10] || (x[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(le, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (q) => u.value = null)
                    }, {
                      default: g(() => [...x[11] || (x[11] = [
                        b(" Dismiss ", -1)
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
      C(os, {
        show: d.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (q) => d.value = !1)
      }, {
        content: g(() => [...x[12] || (x[12] = [
          t("div", { class: "export-info" }, [
            t("div", { class: "info-section" }, [
              t("strong", null, "Included in Export:"),
              t("ul", null, [
                t("li", null, [
                  t("strong", null, "Workflows"),
                  b(" — All workflows in this environment")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  b(" — Node definitions and dependencies")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  b(" — References and source URLs (not the files)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  b(" — Environment settings and metadata")
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
              b(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      v.value && m.value ? (a(), R(Sr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      h.value && m.value ? (a(), R(Ir, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: x[5] || (x[5] = (q) => h.value = !1),
        onRevalidate: S
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), X$ = /* @__PURE__ */ me(J$, [["__scopeId", "data-v-f4d120f2"]]), Q$ = { class: "file-input-wrapper" }, Z$ = ["accept", "multiple", "disabled"], eC = /* @__PURE__ */ fe({
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
    const n = o, l = k(null);
    function i() {
      var u;
      (u = l.value) == null || u.click();
    }
    function r(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return s({
      triggerInput: i
    }), (u, d) => (a(), c("div", Q$, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: r
      }, null, 40, Z$),
      C(le, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: g(() => [
          He(u.$slots, "default", {}, () => [
            d[0] || (d[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            b(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), tC = /* @__PURE__ */ me(eC, [["__scopeId", "data-v-cd192091"]]), sC = {
  key: 0,
  class: "drop-zone-empty"
}, oC = { class: "drop-zone-text" }, nC = { class: "drop-zone-primary" }, aC = { class: "drop-zone-secondary" }, lC = { class: "drop-zone-actions" }, iC = {
  key: 1,
  class: "drop-zone-file"
}, rC = { class: "file-info" }, cC = { class: "file-details" }, uC = { class: "file-name" }, dC = { class: "file-size" }, fC = /* @__PURE__ */ fe({
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
    const o = s, n = k(!1), l = k(null), i = k(0), r = F(() => l.value !== null), u = F(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = F(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m($) {
      var P;
      $.stopPropagation(), i.value++, (P = $.dataTransfer) != null && P.types.includes("Files") && (n.value = !0);
    }
    function v($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function h($) {
      $.stopPropagation(), i.value--, i.value === 0 && (n.value = !1);
    }
    function w($) {
      var O;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (O = $.dataTransfer) == null ? void 0 : O.files;
      P && P.length > 0 && _(P[0]);
    }
    function p($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function S() {
      l.value = null, o("clear");
    }
    return ($, P) => (a(), c("div", {
      class: Se(["file-drop-zone", { "drop-active": n.value, "has-file": r.value }]),
      onDragenter: it(m, ["prevent"]),
      onDragover: it(v, ["prevent"]),
      onDragleave: it(h, ["prevent"]),
      onDrop: it(w, ["prevent"])
    }, [
      r.value ? (a(), c("div", iC, [
        t("div", rC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", cC, [
            t("div", uC, f(u.value), 1),
            t("div", dC, f(d.value), 1)
          ])
        ]),
        C(le, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: g(() => [...P[2] || (P[2] = [
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
      ])) : (a(), c("div", sC, [
        P[0] || (P[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", oC, [
          t("p", nC, f(e.primaryText), 1),
          t("p", aC, f(e.secondaryText), 1)
        ]),
        t("div", lC, [
          C(tC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: p
          }, {
            default: g(() => [
              b(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), mC = /* @__PURE__ */ me(fC, [["__scopeId", "data-v-0f79cb86"]]), vC = { class: "import-preview" }, pC = { class: "preview-header" }, gC = {
  key: 0,
  class: "source-env"
}, hC = { class: "preview-content" }, yC = { class: "preview-section" }, wC = { class: "section-header" }, bC = { class: "section-info" }, _C = { class: "section-count" }, kC = {
  key: 0,
  class: "item-list"
}, $C = { class: "item-name" }, CC = {
  key: 0,
  class: "item-more"
}, xC = { class: "preview-section" }, SC = { class: "section-header" }, IC = { class: "section-info" }, EC = { class: "section-count" }, TC = {
  key: 0,
  class: "item-list"
}, PC = { class: "item-details" }, RC = { class: "item-name" }, MC = { class: "item-meta" }, DC = {
  key: 0,
  class: "item-more"
}, LC = { class: "preview-section" }, OC = { class: "section-header" }, AC = { class: "section-info" }, NC = { class: "section-count" }, UC = {
  key: 0,
  class: "item-list"
}, zC = { class: "item-name" }, FC = {
  key: 0,
  class: "item-more"
}, BC = {
  key: 0,
  class: "preview-section"
}, VC = { class: "git-info" }, WC = /* @__PURE__ */ fe({
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
    const s = e, o = F(() => s.workflows.length), n = F(() => s.models.length), l = F(() => s.nodes.length);
    function i(r) {
      return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : r < 1024 * 1024 * 1024 ? `${(r / (1024 * 1024)).toFixed(1)} MB` : `${(r / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (r, u) => (a(), c("div", vC, [
      t("div", pC, [
        C(Ot, null, {
          default: g(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), c("span", gC, [
          u[1] || (u[1] = b(" From: ", -1)),
          C($a, null, {
            default: g(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", hC, [
        t("div", yC, [
          t("div", wC, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", bC, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", _C, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), c("div", kC, [
            (a(!0), c(j, null, pe(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", $C, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), c("div", CC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", xC, [
          t("div", SC, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", IC, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", EC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), c("div", TC, [
            (a(!0), c(j, null, pe(e.models.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", PC, [
                t("span", RC, f(d.filename), 1),
                t("span", MC, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), c("div", DC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", LC, [
          t("div", OC, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", AC, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", NC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), c("div", UC, [
            (a(!0), c(j, null, pe(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", zC, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), c("div", FC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), c("div", BC, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", VC, [
            e.gitBranch ? (a(), R(ft, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                C($a, null, {
                  default: g(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), R(ft, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                C(pr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), GC = /* @__PURE__ */ me(WC, [["__scopeId", "data-v-182fe113"]]), jC = { class: "import-config" }, HC = { class: "config-container" }, KC = { class: "config-field" }, qC = { class: "input-wrapper" }, YC = ["value"], JC = {
  key: 0,
  class: "validating-indicator"
}, XC = {
  key: 1,
  class: "valid-indicator"
}, QC = {
  key: 0,
  class: "field-error"
}, ZC = { class: "config-field" }, e3 = { class: "strategy-options" }, t3 = ["value", "checked", "onChange"], s3 = { class: "strategy-content" }, o3 = { class: "strategy-label" }, n3 = { class: "strategy-description" }, a3 = { class: "config-field switch-field" }, l3 = { class: "switch-label" }, i3 = ["checked"], r3 = { class: "advanced-section" }, c3 = { class: "advanced-content" }, u3 = { class: "config-field" }, d3 = ["value"], f3 = ["value"], m3 = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = k(!1), i = k(!1);
    Ct(() => o.nameError, (v) => {
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
      const h = v.target.value;
      n("update:name", h), i.value = !1, u && clearTimeout(u), h.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", h);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, h) => (a(), c("div", jC, [
      C(Ot, null, {
        default: g(() => [...h[2] || (h[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", HC, [
        t("div", KC, [
          C(hn, { required: "" }, {
            default: g(() => [...h[3] || (h[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", qC, [
            t("input", {
              type: "text",
              class: Se(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, YC),
            l.value ? (a(), c("span", JC, "...")) : i.value ? (a(), c("span", XC, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), c("div", QC, f(e.nameError), 1)) : y("", !0),
          h[4] || (h[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", ZC, [
          C(hn, null, {
            default: g(() => [...h[5] || (h[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", e3, [
            (a(), c(j, null, pe(r, (w) => t("label", {
              key: w.value,
              class: Se(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, t3),
              t("div", s3, [
                t("span", o3, f(w.label), 1),
                t("span", n3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", a3, [
          t("label", l3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: h[0] || (h[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, i3),
            h[6] || (h[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", r3, [
          h[8] || (h[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", c3, [
            t("div", u3, [
              C(hn, null, {
                default: g(() => [...h[7] || (h[7] = [
                  b("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: h[1] || (h[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), c(j, null, pe(Fe(Ja), (w) => (a(), c("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, f3))), 128))
              ], 40, d3)
            ])
          ])
        ])
      ])
    ]));
  }
}), v3 = /* @__PURE__ */ me(m3, [["__scopeId", "data-v-89ea06a1"]]), p3 = { class: "import-flow" }, g3 = {
  key: 0,
  class: "import-empty"
}, h3 = { class: "git-import-section" }, y3 = { class: "git-url-input-row" }, w3 = ["disabled"], b3 = {
  key: 0,
  class: "git-error"
}, _3 = {
  key: 1,
  class: "import-configure"
}, k3 = { class: "selected-file-bar" }, $3 = {
  key: 0,
  class: "file-bar-content"
}, C3 = { class: "file-bar-info" }, x3 = { class: "file-bar-name" }, S3 = { class: "file-bar-size" }, I3 = {
  key: 1,
  class: "file-bar-content"
}, E3 = { class: "file-bar-info" }, T3 = { class: "file-bar-name" }, P3 = {
  key: 0,
  class: "preview-loading"
}, R3 = { class: "import-actions" }, M3 = {
  key: 2,
  class: "import-progress"
}, D3 = { class: "creating-intro" }, L3 = {
  key: 0,
  class: "progress-warning"
}, O3 = {
  key: 1,
  class: "import-error"
}, A3 = { class: "error-message" }, N3 = {
  key: 3,
  class: "import-complete"
}, U3 = { class: "complete-message" }, z3 = { class: "complete-title" }, F3 = { class: "complete-details" }, B3 = { class: "complete-actions" }, V3 = /* @__PURE__ */ fe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Xe, ke, Ee, Ge;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: r, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = rt();
    let h = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), O = k(null), T = k(""), x = k(null), q = k(!1), B = k(null), A = k(null), I = k({
      name: ((Xe = n.initialProgress) == null ? void 0 : Xe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = k(null), L = k({
      message: ((ke = n.initialProgress) == null ? void 0 : ke.message) ?? "Preparing import...",
      phase: ((Ee = n.initialProgress) == null ? void 0 : Ee.phase) ?? "",
      progress: ((Ge = n.initialProgress) == null ? void 0 : Ge.progress) ?? 0,
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
      if (!A.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const be = A.value;
      return {
        sourceEnvironment: be.comfyui_version ? `ComfyUI ${be.comfyui_version}` : "Unknown",
        workflows: be.workflows.map((ae) => ae.name),
        models: be.models.map((ae) => ({
          filename: ae.filename,
          size: 0,
          type: ae.relative_path.split("/")[0] || "model"
        })),
        nodes: be.nodes.map((ae) => ae.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), H = F(() => !P.value && !O.value && A.value && I.value.name.length > 0 && !E.value && (w.value || x.value));
    async function te(be) {
      w.value = be, P.value = !0, O.value = null, A.value = null;
      try {
        const ae = await i(be);
        A.value = ae;
      } catch (ae) {
        O.value = ae instanceof Error ? ae.message : "Failed to analyze file", console.error("Preview error:", ae);
      } finally {
        P.value = !1;
      }
    }
    function Q() {
      w.value = null, x.value = null, T.value = "", B.value = null, _.value = !1, S.value = !1, $.value = "", A.value = null, O.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, l("source-cleared");
    }
    function N() {
      Re(), Q(), p.value = !1, P.value = !1, q.value = !1, L.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function U() {
      if (T.value.trim()) {
        q.value = !0, B.value = null;
        try {
          const be = await r(T.value.trim());
          x.value = T.value.trim(), A.value = be;
        } catch (be) {
          B.value = be instanceof Error ? be.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function M(be) {
      try {
        const ae = new URL(be);
        return ae.host + ae.pathname.replace(/\.git$/, "");
      } catch {
        return be;
      }
    }
    async function we(be) {
      if (!be) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const ae = await u(be);
        E.value = ae.valid ? null : ae.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function ve() {
      if (I.value.name && !(!w.value && !x.value)) {
        p.value = !0, _.value = !1, L.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let be;
          if (w.value)
            be = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (x.value)
            be = await m(
              x.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          be.status === "started" ? Ie() : (S.value = !1, $.value = be.message, p.value = !1, _.value = !0);
        } catch (be) {
          S.value = !1, $.value = be instanceof Error ? be.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Ie() {
      if (h) return;
      const be = async () => {
        try {
          const Ve = await v();
          return L.value = {
            message: Ve.message,
            phase: Ve.phase || "",
            progress: Ve.progress ?? (Ve.state === "importing" ? 50 : 0),
            error: Ve.error || null
          }, Ve.state === "complete" ? (Re(), S.value = !0, $.value = `Environment '${Ve.environment_name}' created successfully`, p.value = !1, _.value = !0, Ve.environment_name && l("import-complete", Ve.environment_name, I.value.switchAfterImport), !1) : Ve.state === "error" ? (Re(), S.value = !1, $.value = Ve.error || Ve.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Ve) {
          return console.error("Failed to poll import progress:", Ve), !0;
        }
      };
      await be() && (h = setInterval(async () => {
        await be() || Re();
      }, 2e3));
    }
    function Re() {
      h && (clearInterval(h), h = null);
    }
    function Ke(be) {
      return be < 1024 ? `${be} B` : be < 1024 * 1024 ? `${(be / 1024).toFixed(1)} KB` : be < 1024 * 1024 * 1024 ? `${(be / (1024 * 1024)).toFixed(1)} MB` : `${(be / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const be = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", be.state, be), be.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", be.environment_name), p.value = !0, I.value.name = be.environment_name || I.value.name || "", L.value = {
          progress: be.progress ?? 0,
          message: be.message || "Importing...",
          phase: be.phase || "",
          error: null
        }, Ie());
      } catch (be) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", be);
      }
    }), s({
      handleReset: N,
      isImporting: p,
      canImport: H
    }), (be, ae) => {
      var Ve;
      return a(), c("div", p3, [
        !w.value && !x.value && !p.value ? (a(), c("div", g3, [
          C(mC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: te
          }),
          ae[7] || (ae[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", h3, [
            ae[5] || (ae[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", y3, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ae[0] || (ae[0] = (Te) => T.value = Te),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Xt(U, ["enter"]),
                disabled: q.value
              }, null, 40, w3), [
                [Nt, T.value]
              ]),
              C(le, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || q.value,
                onClick: U
              }, {
                default: g(() => [
                  b(f(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (a(), c("div", b3, f(B.value), 1)) : y("", !0),
            ae[6] || (ae[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || x.value) && !p.value && !_.value ? (a(), c("div", _3, [
          t("div", k3, [
            w.value ? (a(), c("div", $3, [
              ae[8] || (ae[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", C3, [
                t("div", x3, f(w.value.name), 1),
                t("div", S3, f(Ke(w.value.size)), 1)
              ])
            ])) : x.value ? (a(), c("div", I3, [
              ae[10] || (ae[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", E3, [
                t("div", T3, f(M(x.value)), 1),
                ae[9] || (ae[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(le, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: g(() => [...ae[11] || (ae[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), c("div", P3, [...ae[12] || (ae[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : O.value ? (a(), R(Kt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [O.value]
          }, null, 8, ["details"])) : A.value ? (a(), R(GC, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          A.value ? (a(), R(v3, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": ae[1] || (ae[1] = (Te) => I.value.name = Te),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": ae[2] || (ae[2] = (Te) => I.value.modelStrategy = Te),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": ae[3] || (ae[3] = (Te) => I.value.torchBackend = Te),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": ae[4] || (ae[4] = (Te) => I.value.switchAfterImport = Te),
            "name-error": E.value,
            onValidateName: we
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Ve = A.value) != null && Ve.models_needing_download) ? (a(), R(Kt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${A.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", R3, [
            C(le, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: g(() => [...ae[13] || (ae[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(le, {
              variant: "primary",
              size: "md",
              disabled: !H.value,
              onClick: ve
            }, {
              default: g(() => [...ae[14] || (ae[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), c("div", M3, [
          t("p", D3, [
            ae[15] || (ae[15] = b(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            ae[16] || (ae[16] = b("... ", -1))
          ]),
          C(Pn, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? y("", !0) : (a(), c("p", L3, " This may take several minutes. Please wait... ")),
          L.value.error ? (a(), c("div", O3, [
            t("p", A3, f(L.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), c("div", N3, [
          t("div", {
            class: Se(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", U3, [
            t("div", z3, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", F3, f($.value), 1)
          ]),
          t("div", B3, [
            C(le, {
              variant: "primary",
              size: "md",
              onClick: N
            }, {
              default: g(() => [...ae[17] || (ae[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Er = /* @__PURE__ */ me(V3, [["__scopeId", "data-v-72cbc04e"]]), W3 = /* @__PURE__ */ fe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, r) {
      r && o("import-complete-switch", i);
    }
    return (i, r) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: r[0] || (r[0] = (u) => n.value = !0)
          })
        ]),
        content: g(() => [
          C(Er, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(os, {
        show: n.value,
        title: "How Import Works",
        onClose: r[1] || (r[1] = (u) => n.value = !1)
      }, {
        content: g(() => [...r[2] || (r[2] = [
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
}), G3 = /* @__PURE__ */ me(W3, [["__scopeId", "data-v-e13bfe76"]]), un = lo(), j3 = 5e3, oo = k([]), ia = k(!1), ra = k(null);
let Io = null;
async function dn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Tr(e) {
  const s = F(
    () => oo.value.filter((p) => p.status === "running")
  ), o = F(
    () => oo.value.filter((p) => p.status === "deploying")
  ), n = F(
    () => oo.value.filter((p) => p.status === "stopped")
  ), l = F(
    () => s.value.length + o.value.length
  ), i = F(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...oo.value].sort(
      (_, S) => (p[_.status] ?? 5) - (p[S.status] ?? 5)
    );
  });
  async function r() {
    ia.value = !0, ra.value = null;
    try {
      let p;
      if (!un) {
        const _ = await dn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      oo.value = p.instances;
    } catch (p) {
      ra.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ia.value = !1;
    }
  }
  function u(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const S = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function d(p) {
    try {
      if (!un) {
        const _ = u(p, "stop"), S = await dn(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await r();
    } catch (_) {
      throw console.error("[useDeployInstances] stopInstance error:", _), _;
    }
  }
  async function m(p) {
    try {
      if (!un) {
        const _ = u(p, "start"), S = await dn(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await r();
    } catch (_) {
      throw console.error("[useDeployInstances] startInstance error:", _), _;
    }
  }
  async function v(p) {
    try {
      if (!un) {
        const _ = u(p, "terminate"), S = await dn(_, { method: "DELETE" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await r();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function h() {
    Io || (Io = window.setInterval(r, j3));
  }
  function w() {
    Io && (clearInterval(Io), Io = null);
  }
  return Ct(o, (p) => {
    p.length > 0 && h();
  }, { immediate: !0 }), e != null && e.autoStart && (r(), h()), {
    // State
    instances: oo,
    isLoading: ia,
    error: ra,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: n,
    liveInstanceCount: l,
    sortedInstances: i,
    // Actions
    refreshInstances: r,
    stopInstance: d,
    startInstance: m,
    terminateInstance: v,
    // Polling
    startPolling: h,
    stopPolling: w
  };
}
const H3 = { class: "instance-header" }, K3 = { class: "provider-badge" }, q3 = { class: "instance-name" }, Y3 = {
  key: 0,
  class: "spinner"
}, J3 = { class: "instance-details" }, X3 = {
  key: 0,
  class: "detail"
}, Q3 = {
  key: 1,
  class: "detail instance-url"
}, Z3 = {
  key: 2,
  class: "detail"
}, e5 = {
  key: 3,
  class: "detail"
}, t5 = {
  key: 4,
  class: "detail total-cost"
}, s5 = {
  key: 0,
  class: "deployment-progress"
}, o5 = { class: "progress-message" }, n5 = { class: "instance-actions" }, a5 = /* @__PURE__ */ fe({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = F(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), n = F(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = F(() => `status-${s.instance.status}`);
    function i() {
      s.instance.comfyui_url && window.open(s.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function r() {
      s.instance.console_url && window.open(s.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function u(d) {
      const m = Math.floor(d / 3600), v = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (d, m) => (a(), c("div", {
      class: Se(["instance-card", l.value])
    }, [
      t("div", H3, [
        t("span", K3, f(o.value), 1),
        t("span", q3, f(e.instance.name), 1),
        t("span", {
          class: Se(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), c("span", Y3)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", J3, [
        e.instance.gpu_type ? (a(), c("span", X3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), c("span", Q3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), c("span", Z3, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), c("span", e5, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), c("span", t5, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), c("div", s5, [
        t("div", o5, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), R(jn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", n5, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), R(le, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: i
        }, {
          default: g(() => [...m[3] || (m[3] = [
            b(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), R(le, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: r
        }, {
          default: g(() => [...m[4] || (m[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), R(le, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => d.$emit("stop", e.instance))
        }, {
          default: g(() => [...m[5] || (m[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), R(le, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => d.$emit("start", e.instance))
        }, {
          default: g(() => [...m[6] || (m[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        C(le, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => d.$emit("terminate", e.instance))
        }, {
          default: g(() => [...m[7] || (m[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), l5 = /* @__PURE__ */ me(a5, [["__scopeId", "data-v-746c3894"]]), i5 = { class: "instances-tab" }, r5 = { class: "instances-header" }, c5 = {
  key: 0,
  class: "loading-state"
}, u5 = {
  key: 1,
  class: "empty-state"
}, d5 = {
  key: 2,
  class: "instances-list"
}, f5 = /* @__PURE__ */ fe({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = F(() => {
      const n = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...s.instances].sort(
        (l, i) => (n[l.status] ?? 5) - (n[i.status] ?? 5)
      );
    });
    return (n, l) => (a(), c("div", i5, [
      t("div", r5, [
        C(Ot, null, {
          default: g(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(le, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (i) => n.$emit("refresh"))
        }, {
          default: g(() => [...l[5] || (l[5] = [
            b(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), c("div", c5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), c("div", u5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), c("div", d5, [
        (a(!0), c(j, null, pe(o.value, (i) => (a(), R(l5, {
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
}), m5 = /* @__PURE__ */ me(f5, [["__scopeId", "data-v-ba614fc3"]]), v5 = { class: "remote-header" }, p5 = { class: "remote-info" }, g5 = { class: "remote-icon" }, h5 = { class: "remote-name" }, y5 = {
  key: 0,
  class: "default-badge"
}, w5 = {
  key: 1,
  class: "sync-badge"
}, b5 = {
  key: 0,
  class: "ahead"
}, _5 = {
  key: 1,
  class: "behind"
}, k5 = {
  key: 1,
  class: "synced"
}, $5 = ["href"], C5 = {
  key: 1,
  class: "remote-url-text"
}, x5 = { class: "remote-actions" }, S5 = /* @__PURE__ */ fe({
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
    const s = e, o = F(() => s.remote.is_default), n = F(() => {
      const i = s.remote.fetch_url, r = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return r ? `https://${r[1]}/${r[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = F(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, r) => (a(), c("div", {
      class: Se(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", v5, [
        t("div", p5, [
          t("span", g5, f(o.value ? "🔗" : "🌐"), 1),
          t("span", h5, f(e.remote.name), 1),
          o.value ? (a(), c("span", y5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", w5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", b5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", _5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", k5, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), c("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: r[0] || (r[0] = it(() => {
          }, ["stop"]))
        }, f(l.value), 9, $5)) : (a(), c("span", C5, f(l.value), 1))
      ]),
      t("div", x5, [
        C(le, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: r[1] || (r[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...r[4] || (r[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), R(le, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: r[2] || (r[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        C(le, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: r[3] || (r[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: g(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Pr = /* @__PURE__ */ me(S5, [["__scopeId", "data-v-d687d161"]]), I5 = { class: "runpod-tab" }, E5 = { class: "api-key-card" }, T5 = { class: "api-key-row" }, P5 = { class: "api-key-input-wrapper" }, R5 = ["type", "disabled"], M5 = ["title"], D5 = { class: "status-icon" }, L5 = { class: "status-text" }, O5 = {
  key: 0,
  class: "credit-balance"
}, A5 = { class: "config-card" }, N5 = { class: "config-row" }, U5 = ["disabled"], z5 = {
  key: 0,
  value: ""
}, F5 = {
  key: 1,
  value: "",
  disabled: ""
}, B5 = ["value", "disabled"], V5 = { class: "config-row" }, W5 = {
  key: 0,
  class: "loading-inline"
}, G5 = { class: "no-volumes-state" }, j5 = { class: "no-volumes-text" }, H5 = ["value"], K5 = { class: "config-row" }, q5 = ["disabled"], Y5 = {
  key: 0,
  value: ""
}, J5 = {
  key: 1,
  value: ""
}, X5 = {
  key: 2,
  value: ""
}, Q5 = ["value"], Z5 = { class: "config-row" }, ex = { class: "radio-group" }, tx = { class: "radio-option" }, sx = { class: "radio-label" }, ox = { class: "radio-option disabled" }, nx = { class: "radio-label" }, ax = { class: "config-row" }, lx = { class: "radio-group" }, ix = { class: "radio-option" }, rx = { class: "radio-label" }, cx = { class: "radio-option disabled" }, ux = { class: "radio-label" }, dx = { class: "config-row" }, fx = {
  key: 0,
  class: "loading-text"
}, mx = {
  key: 1,
  class: "empty-remotes"
}, vx = { class: "remotes-list" }, px = {
  key: 0,
  class: "sync-warning"
}, gx = { class: "warning-content" }, hx = { class: "remotes-footer" }, yx = { class: "summary-card" }, wx = {
  key: 0,
  class: "loading-text"
}, bx = { class: "summary-row" }, _x = { class: "summary-value" }, kx = { class: "summary-row" }, $x = { class: "summary-value" }, Cx = { class: "summary-row" }, xx = { class: "summary-value" }, Sx = {
  key: 0,
  class: "summary-sub-row"
}, Ix = { class: "summary-sub-label" }, Ex = {
  key: 1,
  class: "summary-sub-row warning"
}, Tx = { class: "summary-sub-label" }, Px = { class: "summary-row" }, Rx = { class: "summary-value" }, Mx = { class: "summary-row" }, Dx = { class: "summary-value" }, Lx = { class: "deployment-summary" }, Ox = { class: "summary-columns" }, Ax = { class: "summary-column" }, Nx = { class: "pricing-row" }, Ux = { class: "pricing-value" }, zx = { class: "pricing-row" }, Fx = { class: "pricing-value" }, Bx = { class: "pricing-row" }, Vx = { class: "pricing-value" }, Wx = { class: "pricing-row total" }, Gx = { class: "pricing-value" }, jx = { class: "summary-column" }, Hx = { class: "spec-row" }, Kx = { class: "spec-row" }, qx = {
  key: 0,
  class: "spec-row"
}, Yx = {
  key: 1,
  class: "spec-row spot-warning"
}, Jx = {
  key: 4,
  class: "deploy-actions"
}, Xx = { class: "progress-content" }, Qx = { class: "phase-indicator" }, Zx = { key: 0 }, e8 = { key: 1 }, t8 = { key: 2 }, s8 = {
  key: 3,
  class: "spinner"
}, o8 = { class: "phase-text" }, n8 = { class: "phase-name" }, a8 = { class: "phase-detail" }, l8 = {
  key: 0,
  class: "ready-actions"
}, i8 = { class: "console-link" }, r8 = ["href"], c8 = /* @__PURE__ */ fe({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
      getRunPodGpuTypes: r,
      deployToRunPod: u,
      getDeploymentStatus: d,
      getStoredRunPodKey: m,
      clearRunPodKey: v,
      validateDeploy: h,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: S,
      getDataCenters: $
    } = rt(), P = k(!1), O = k(""), T = k(!1), x = k(!1), q = k(null), B = k(null), A = k(""), I = k(""), E = k(""), L = k("SECURE"), re = k("ON_DEMAND"), Y = k("my-comfyui-deploy"), H = k([]), te = k({}), Q = k(!1), N = k(null), U = k(null), M = k(null), we = k([]), ve = k(!1), Ie = k([]), Re = k(!1), Ke = k([]), Xe = k(!1), ke = k(null), Ee = k(!1), Ge = k(!1), be = k(null), ae = k(!1), Ve = k(null), Te = k(null), D = k(null), V = k(!1), se = k(null), ne = k(!1), ue = k(!1), de = F(() => Ie.value.find((ye) => ye.id === I.value) || null), $e = F(() => A.value ? Ie.value.filter((ye) => ye.data_center_id === A.value) : Ie.value), Ce = F(() => Ke.value.filter((ye) => ye.available)), oe = F(() => N.value && te.value[N.value] || null), ce = F(() => {
      if (!N.value) return null;
      const ye = H.value.find((X) => X.name === N.value);
      return (ye == null ? void 0 : ye.fetch_url) || null;
    }), De = F(() => T.value && I.value && E.value && ce.value && !Ge.value && !V.value), xe = (ye) => {
      const X = Ke.value.find((ht) => ht.id === E.value);
      if (!X) return "0.00";
      if (ye === "SECURE") return (X.securePrice ?? 0).toFixed(2);
      if (ye === "COMMUNITY") return (X.communityPrice ?? 0).toFixed(2);
      const je = L.value === "SECURE";
      return ye === "ON_DEMAND" ? je ? (X.securePrice ?? 0).toFixed(2) : (X.communityPrice ?? 0).toFixed(2) : je ? (X.secureSpotPrice ?? 0).toFixed(2) : (X.communitySpotPrice ?? 0).toFixed(2);
    }, Z = F(() => {
      const ye = Ke.value.find((ns) => ns.id === E.value), X = Ie.value.find((ns) => ns.id === I.value);
      if (!ye) return null;
      const je = L.value === "SECURE", ht = re.value === "SPOT";
      let Ht;
      ht ? Ht = je ? ye.secureSpotPrice ?? 0 : ye.communitySpotPrice ?? 0 : Ht = je ? ye.securePrice ?? 0 : ye.communityPrice ?? 0;
      const ps = X ? X.size_gb * 14e-5 : 0, gs = 4e-3;
      return {
        gpu: Ht,
        volume: ps,
        container: gs,
        total: Ht + ps + gs
      };
    });
    async function K() {
      await ze(), await Promise.all([vt(), Pe()]);
    }
    async function Pe() {
      Q.value = !0;
      try {
        const ye = await w();
        H.value = ye.remotes, await Promise.all(
          ye.remotes.map(async (je) => {
            const ht = await p(je.name);
            ht && (te.value[je.name] = ht);
          })
        );
        const X = ye.remotes.find((je) => je.is_default);
        X ? N.value = X.name : ye.remotes.length > 0 && (N.value = ye.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Q.value = !1;
      }
    }
    async function he(ye) {
      U.value = ye;
      try {
        await _(ye);
        const X = await p(ye);
        X && (te.value[ye] = X), o("toast", `Fetched from ${ye}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        U.value = null;
      }
    }
    async function ge(ye) {
      M.value = ye;
      try {
        await S(ye, { force: !1 });
        const X = await p(ye);
        X && (te.value[ye] = X), o("toast", `Pushed to ${ye}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        M.value = null;
      }
    }
    function W(ye) {
      N.value = ye;
    }
    async function z() {
      if (O.value) {
        x.value = !0, q.value = null;
        try {
          const ye = await l(O.value, !0);
          ye.status === "success" ? (T.value = !0, B.value = ye.credit_balance ?? null, q.value = { type: "success", message: ye.message }, await K()) : q.value = { type: "error", message: ye.message };
        } catch (ye) {
          q.value = {
            type: "error",
            message: ye instanceof Error ? ye.message : "Connection test failed"
          };
        } finally {
          x.value = !1;
        }
      }
    }
    async function ie() {
      try {
        await v(), O.value = "", T.value = !1, q.value = null, B.value = null, we.value = [], A.value = "", Ie.value = [], I.value = "", Ke.value = [], E.value = "", ke.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function ze() {
      Re.value = !0, ve.value = !0;
      try {
        const ye = await i();
        Ie.value = ye.volumes;
        const X = /* @__PURE__ */ new Map();
        for (const je of ye.volumes)
          je.data_center_id && !X.has(je.data_center_id) && X.set(je.data_center_id, {
            id: je.data_center_id,
            name: je.data_center_name || je.data_center_id,
            available: !0
          });
        if (ye.volumes.length === 0) {
          const je = await $();
          we.value = je.data_centers;
        } else
          we.value = Array.from(X.values());
        if (Ie.value.length > 0) {
          const je = Ie.value[0];
          I.value = je.id, je.data_center_id && (A.value = je.data_center_id, await Qe(je.data_center_id));
        } else we.value.length > 0 && (A.value = we.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Re.value = !1, ve.value = !1;
      }
    }
    async function Qe(ye) {
      Xe.value = !0;
      try {
        const X = await r(ye);
        Ke.value = X.gpu_types;
        const je = Ke.value.find((ht) => ht.available);
        je ? E.value = je.id : E.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Xe.value = !1;
      }
    }
    Ct(A, async (ye) => {
      if (!ye || Re.value) return;
      const X = Ie.value.find((je) => je.id === I.value);
      X && X.data_center_id !== ye && (I.value = ""), await Qe(ye);
    }), Ct(I, async (ye) => {
      if (!ye) {
        Ke.value = [], E.value = "";
        return;
      }
      if (Re.value) return;
      const X = Ie.value.find((je) => je.id === ye);
      X && X.data_center_id !== A.value ? A.value = X.data_center_id : X && await Qe(X.data_center_id);
    });
    async function vt() {
      Ee.value = !0;
      try {
        ke.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Ee.value = !1;
      }
    }
    async function at() {
      if (!(!E.value || !I.value)) {
        V.value = !0, be.value = null;
        try {
          const ye = await h();
          se.value = ye, ye.can_export ? ye.warnings.models_without_sources.length > 0 ? ue.value = !0 : await Ut() : ne.value = !0;
        } catch (ye) {
          be.value = {
            status: "error",
            message: ye instanceof Error ? ye.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          V.value = !1;
        }
      }
    }
    async function dt() {
      ue.value = !1, await Ut();
    }
    async function Rt() {
      try {
        const ye = await h();
        se.value = ye;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ut() {
      Ge.value = !0;
      try {
        let ye;
        if (re.value === "SPOT") {
          const je = Ke.value.find((ht) => ht.id === E.value);
          je && (ye = L.value === "SECURE" ? je.secureSpotPrice : je.communitySpotPrice);
        }
        const X = await u({
          gpu_type_id: E.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: L.value,
          pricing_type: re.value,
          spot_bid: ye,
          import_source: ce.value
        });
        be.value = X, X.status === "success" && X.pod_id ? (Ve.value = X.pod_id, ae.value = !0, jt(X.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", X.message, "error");
      } catch (ye) {
        be.value = {
          status: "error",
          message: ye instanceof Error ? ye.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ge.value = !1;
      }
    }
    function jt(ye) {
      Ts(ye), D.value = window.setInterval(() => Ts(ye), 3e3);
    }
    function Bs() {
      D.value && (clearInterval(D.value), D.value = null);
    }
    async function Ts(ye) {
      try {
        const X = await d(ye);
        Te.value = X, (X.phase === "READY" || X.phase === "ERROR" || X.phase === "STOPPED") && (Bs(), X.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (X) {
        console.error("Failed to poll deployment status:", X);
      }
    }
    function to() {
      ae.value = !1, Bs(), Ve.value = null, Te.value = null;
    }
    function _o() {
      var ye;
      (ye = Te.value) != null && ye.comfyui_url && window.open(Te.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function ko(ye) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[ye || ""] || "Initializing...";
    }
    function $o(ye) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[ye || ""] ?? 10;
    }
    return et(async () => {
      try {
        const ye = await m(!0);
        ye.has_key && ye.key_preview && (O.value = `****${ye.key_preview}`, ye.valid ? (T.value = !0, B.value = ye.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await K()) : ye.error && (q.value = { type: "error", message: ye.error }));
      } catch {
      }
    }), wo(() => {
      Bs();
    }), (ye, X) => {
      var je, ht, Ht, ps, gs, ns;
      return a(), c(j, null, [
        t("div", I5, [
          C(lt, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", E5, [
                t("div", T5, [
                  t("div", P5, [
                    qe(t("input", {
                      "onUpdate:modelValue": X[0] || (X[0] = (Oe) => O.value = Oe),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, R5), [
                      [Gn, O.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: X[1] || (X[1] = (Oe) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, M5)
                  ]),
                  T.value ? y("", !0) : (a(), R(le, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: x.value,
                    disabled: !O.value || x.value,
                    onClick: z
                  }, {
                    default: g(() => [...X[16] || (X[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (a(), R(le, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: ie
                  }, {
                    default: g(() => [...X[17] || (X[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                q.value ? (a(), c("div", {
                  key: 0,
                  class: Se(["connection-status", q.value.type])
                }, [
                  t("span", D5, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", L5, f(q.value.message), 1),
                  B.value !== null ? (a(), c("span", O5, " $" + f(B.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                X[18] || (X[18] = t("div", { class: "api-key-help" }, [
                  t("span", { class: "help-icon" }, "i"),
                  t("span", { class: "help-text" }, [
                    b(" Get your API key at "),
                    t("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    b(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          T.value ? (a(), R(lt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              t("div", A5, [
                t("div", N5, [
                  X[19] || (X[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": X[2] || (X[2] = (Oe) => A.value = Oe),
                    class: "config-select",
                    disabled: ve.value
                  }, [
                    ve.value ? (a(), c("option", z5, "Loading...")) : A.value ? y("", !0) : (a(), c("option", F5, "Select a region")),
                    (a(!0), c(j, null, pe(we.value, (Oe) => (a(), c("option", {
                      key: Oe.id,
                      value: Oe.id,
                      disabled: !Oe.available
                    }, f(Oe.id) + " (" + f(Oe.name) + ")" + f(Oe.available ? "" : " [Unavailable]"), 9, B5))), 128))
                  ], 8, U5), [
                    [vs, A.value]
                  ])
                ]),
                t("div", V5, [
                  X[24] || (X[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Re.value ? (a(), c("div", W5, "Loading volumes...")) : $e.value.length === 0 ? (a(), c(j, { key: 1 }, [
                    t("div", G5, [
                      X[20] || (X[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", j5, "No volumes in " + f(A.value || "this region"), 1)
                    ]),
                    X[21] || (X[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    X[22] || (X[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), c(j, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": X[3] || (X[3] = (Oe) => I.value = Oe),
                      class: "config-select"
                    }, [
                      (a(!0), c(j, null, pe($e.value, (Oe) => (a(), c("option", {
                        key: Oe.id,
                        value: Oe.id
                      }, f(Oe.name) + " (" + f(Oe.size_gb) + "GB) ", 9, H5))), 128))
                    ], 512), [
                      [vs, I.value]
                    ]),
                    X[23] || (X[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", K5, [
                  X[25] || (X[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": X[4] || (X[4] = (Oe) => E.value = Oe),
                    class: "config-select",
                    disabled: Xe.value || !I.value
                  }, [
                    I.value ? Xe.value ? (a(), c("option", J5, "Loading GPUs...")) : Ce.value.length === 0 ? (a(), c("option", X5, "No GPUs available in this region")) : y("", !0) : (a(), c("option", Y5, "Select a volume first")),
                    (a(!0), c(j, null, pe(Ce.value, (Oe) => (a(), c("option", {
                      key: Oe.id,
                      value: Oe.id
                    }, f(Oe.displayName) + " (" + f(Oe.memoryInGb) + "GB) - $" + f(L.value === "SECURE" ? (Oe.securePrice ?? 0).toFixed(2) : (Oe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Oe.stockStatus ? `[${Oe.stockStatus}]` : ""), 9, Q5))), 128))
                  ], 8, q5), [
                    [vs, E.value]
                  ])
                ]),
                t("div", Z5, [
                  X[26] || (X[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", ex, [
                    t("label", tx, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[5] || (X[5] = (Oe) => L.value = Oe),
                        value: "SECURE"
                      }, null, 512), [
                        [Yt, L.value]
                      ]),
                      t("span", sx, "Secure ($" + f(xe("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", ox, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[6] || (X[6] = (Oe) => L.value = Oe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Yt, L.value]
                      ]),
                      t("span", nx, "Community ($" + f(xe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", ax, [
                  X[27] || (X[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", lx, [
                    t("label", ix, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[7] || (X[7] = (Oe) => re.value = Oe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Yt, re.value]
                      ]),
                      t("span", rx, "On-Demand ($" + f(xe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", cx, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[8] || (X[8] = (Oe) => re.value = Oe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Yt, re.value]
                      ]),
                      t("span", ux, "Spot ($" + f(xe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", dx, [
                  X[28] || (X[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": X[9] || (X[9] = (Oe) => Y.value = Oe),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Nt, Y.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (a(), R(lt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              Q.value ? (a(), c("div", fx, "Loading remotes...")) : H.value.length === 0 ? (a(), c("div", mx, [
                X[30] || (X[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(le, {
                  variant: "primary",
                  size: "xs",
                  onClick: X[10] || (X[10] = (Oe) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...X[29] || (X[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), c(j, { key: 2 }, [
                t("div", vx, [
                  (a(!0), c(j, null, pe(H.value, (Oe) => (a(), R(Pr, {
                    key: Oe.name,
                    remote: Oe,
                    "sync-status": te.value[Oe.name],
                    "is-selected": N.value === Oe.name,
                    "is-fetching": U.value === Oe.name,
                    "is-pushing": M.value === Oe.name,
                    onFetch: he,
                    onPush: ge,
                    onSelect: W
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                oe.value && oe.value.ahead > 0 ? (a(), c("div", px, [
                  X[31] || (X[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", gx, [
                    t("strong", null, f(oe.value.ahead) + " unpushed commit" + f(oe.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(N.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(le, {
                    variant: "primary",
                    size: "xs",
                    loading: M.value === N.value,
                    onClick: X[11] || (X[11] = (Oe) => N.value && ge(N.value))
                  }, {
                    default: g(() => [
                      b(" Push to " + f(N.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", hx, [
                  C(le, {
                    variant: "link",
                    size: "xs",
                    onClick: X[12] || (X[12] = (Oe) => o("navigate", "remotes"))
                  }, {
                    default: g(() => [...X[32] || (X[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (a(), R(lt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              t("div", yx, [
                Ee.value ? (a(), c("div", wx, "Loading environment summary...")) : ke.value ? (a(), c(j, { key: 1 }, [
                  t("div", bx, [
                    X[33] || (X[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", _x, f(ke.value.comfyui_version), 1)
                  ]),
                  t("div", kx, [
                    X[34] || (X[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", $x, f(ke.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", Cx, [
                    X[35] || (X[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", xx, f(ke.value.model_count) + " models", 1)
                  ]),
                  ke.value.models_with_sources > 0 ? (a(), c("div", Sx, [
                    t("span", Ix, "└─ " + f(ke.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  ke.value.models_without_sources > 0 ? (a(), c("div", Ex, [
                    t("span", Tx, "└─ " + f(ke.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", Px, [
                    X[36] || (X[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", Rx, f(ke.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", Mx, [
                    X[37] || (X[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", Dx, "~" + f(ke.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value && Z.value ? (a(), R(lt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: g(() => {
              var Oe, as;
              return [
                t("div", Lx, [
                  t("div", Ox, [
                    t("div", Ax, [
                      X[42] || (X[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", Nx, [
                        X[38] || (X[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", Ux, "$" + f(Z.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", zx, [
                        X[39] || (X[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", Fx, "$" + f(Z.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", Bx, [
                        X[40] || (X[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", Vx, "$" + f(Z.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      X[43] || (X[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", Wx, [
                        X[41] || (X[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", Gx, "~$" + f(Z.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", jx, [
                      X[45] || (X[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", Hx, [
                        t("span", null, f(((Oe = Ke.value.find((ee) => ee.id === E.value)) == null ? void 0 : Oe.displayName) || "GPU") + " (" + f(((as = Ke.value.find((ee) => ee.id === E.value)) == null ? void 0 : as.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", Kx, [
                        t("span", null, "Region: " + f(A.value), 1)
                      ]),
                      de.value ? (a(), c("div", qx, [
                        t("span", null, "Volume: " + f(de.value.name), 1)
                      ])) : y("", !0),
                      re.value === "SPOT" ? (a(), c("div", Yx, [...X[44] || (X[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          T.value ? (a(), c("div", Jx, [
            C(le, {
              variant: "primary",
              size: "md",
              loading: V.value || Ge.value,
              disabled: !De.value,
              onClick: at
            }, {
              default: g(() => [
                X[46] || (X[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + f(V.value ? "Validating..." : Ge.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          be.value ? (a(), R(lt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              C(Et, {
                status: be.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: g(() => [
                  b(f(be.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(f(be.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(f(be.value.message), 1)
                ]),
                actions: g(() => [
                  C(le, {
                    variant: "ghost",
                    size: "xs",
                    onClick: X[13] || (X[13] = (Oe) => be.value = null)
                  }, {
                    default: g(() => [...X[47] || (X[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                be.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    C(ft, {
                      label: "Pod ID:",
                      value: be.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ae.value ? (a(), R(gt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((je = Te.value) == null ? void 0 : je.phase) === "READY" || ((ht = Te.value) == null ? void 0 : ht.phase) === "ERROR" || ((Ht = Te.value) == null ? void 0 : Ht.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: to
        }, eo({
          body: g(() => {
            var Oe, as, ee, G, Me, We, ot, mt, Mt, ls, Vs, Ws;
            return [
              t("div", Xx, [
                t("div", Qx, [
                  t("div", {
                    class: Se(["phase-icon", (as = (Oe = Te.value) == null ? void 0 : Oe.phase) == null ? void 0 : as.toLowerCase()])
                  }, [
                    ((ee = Te.value) == null ? void 0 : ee.phase) === "READY" ? (a(), c("span", Zx, "✓")) : ((G = Te.value) == null ? void 0 : G.phase) === "ERROR" ? (a(), c("span", e8, "✕")) : ((Me = Te.value) == null ? void 0 : Me.phase) === "STOPPED" ? (a(), c("span", t8, "○")) : (a(), c("span", s8, "⟳"))
                  ], 2),
                  t("div", o8, [
                    t("div", n8, f(ko((We = Te.value) == null ? void 0 : We.phase)), 1),
                    t("div", a8, f(((ot = Te.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(jn, {
                  progress: $o((mt = Te.value) == null ? void 0 : mt.phase),
                  variant: ((Mt = Te.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((ls = Te.value) == null ? void 0 : ls.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Vs = Te.value) == null ? void 0 : Vs.phase) === "READY" ? (a(), c("div", l8, [
                  C(le, {
                    variant: "primary",
                    size: "md",
                    onClick: _o
                  }, {
                    default: g(() => [...X[48] || (X[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", i8, [
                  (Ws = Te.value) != null && Ws.console_url ? (a(), c("a", {
                    key: 0,
                    href: Te.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, r8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ps = Te.value) == null ? void 0 : ps.phase) === "READY" || ((gs = Te.value) == null ? void 0 : gs.phase) === "ERROR" || ((ns = Te.value) == null ? void 0 : ns.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              C(le, {
                variant: "ghost",
                size: "xs",
                onClick: to
              }, {
                default: g(() => [...X[49] || (X[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ne.value && se.value ? (a(), R(Sr, {
          key: 1,
          issues: se.value.blocking_issues,
          onClose: X[14] || (X[14] = (Oe) => ne.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ue.value && se.value ? (a(), R(Ir, {
          key: 2,
          models: se.value.warnings.models_without_sources,
          onConfirm: dt,
          onCancel: X[15] || (X[15] = (Oe) => ue.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), u8 = /* @__PURE__ */ me(c8, [["__scopeId", "data-v-522cd4d9"]]), d8 = { class: "worker-header" }, f8 = { class: "worker-status" }, m8 = { class: "worker-name" }, v8 = { class: "worker-actions" }, p8 = { class: "worker-details" }, g8 = { class: "detail-item" }, h8 = { class: "detail-value" }, y8 = {
  key: 0,
  class: "detail-item"
}, w8 = { class: "detail-value" }, b8 = {
  key: 1,
  class: "detail-item"
}, _8 = { class: "detail-value mode-badge" }, k8 = {
  key: 0,
  class: "worker-stats"
}, $8 = {
  key: 0,
  class: "stat-item"
}, C8 = { key: 0 }, x8 = {
  key: 1,
  class: "worker-stats offline"
}, S8 = /* @__PURE__ */ fe({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Se(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", d8, [
        t("div", f8, [
          t("span", {
            class: Se(["status-dot", e.worker.status])
          }, null, 2),
          t("span", m8, f(e.worker.name), 1)
        ]),
        t("div", v8, [
          e.worker.status === "online" ? (a(), R(le, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (n) => s.$emit("deploy", e.worker))
          }, {
            default: g(() => [...o[2] || (o[2] = [
              b(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          C(le, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (n) => s.$emit("remove", e.worker.name))
          }, {
            default: g(() => [...o[3] || (o[3] = [
              b(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", p8, [
        t("span", g8, [
          t("span", h8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), c("span", y8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", w8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), c("span", b8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", _8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), c("div", k8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), c("span", $8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), c("span", C8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), c("div", x8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), I8 = /* @__PURE__ */ me(S8, [["__scopeId", "data-v-b1be7134"]]), E8 = { class: "add-worker-content" }, T8 = { class: "manual-form" }, P8 = { class: "form-row" }, R8 = { class: "form-row-inline" }, M8 = { class: "form-field flex-2" }, D8 = { class: "form-field flex-1" }, L8 = { class: "form-row" }, O8 = { class: "api-key-wrapper" }, A8 = ["type"], N8 = { class: "result-icon" }, U8 = { class: "result-content" }, z8 = { class: "result-message" }, F8 = {
  key: 0,
  class: "result-detail"
}, B8 = { class: "modal-actions" }, V8 = /* @__PURE__ */ fe({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = rt(), l = Fs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), r = k(!1), u = k(!1), d = k(null), m = F(() => l.host && l.port && l.apiKey), v = F(() => l.name && l.host && l.port && l.apiKey);
    async function h() {
      if (m.value) {
        r.value = !0, d.value = null;
        try {
          const p = await n({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          p.status === "success" ? (d.value = {
            type: "success",
            message: p.message,
            gpu_info: p.gpu_info
          }, !l.name && p.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : d.value = {
            type: "error",
            message: p.message
          };
        } catch (p) {
          d.value = {
            type: "error",
            message: p instanceof Error ? p.message : "Connection test failed"
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
    return (p, _) => (a(), R(gt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (S) => p.$emit("close"))
    }, {
      body: g(() => [
        t("div", E8, [
          t("div", T8, [
            t("div", P8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (S) => l.name = S),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Nt, l.name]
              ])
            ]),
            t("div", R8, [
              t("div", M8, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (S) => l.host = S),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Nt, l.host]
                ])
              ]),
              t("div", D8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (S) => l.port = S),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Nt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", L8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", O8, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (S) => l.apiKey = S),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, A8), [
                  [Gn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (S) => i.value = !i.value),
                  type: "button"
                }, f(i.value ? "👁" : "👁‍🗨"), 1)
              ]),
              _[10] || (_[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), c("div", {
              key: 0,
              class: Se(["test-result", d.value.type])
            }, [
              t("span", N8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", U8, [
                t("span", z8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), c("span", F8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        t("div", B8, [
          C(le, {
            variant: "ghost",
            size: "sm",
            loading: r.value,
            disabled: !m.value || r.value,
            onClick: h
          }, {
            default: g(() => [..._[11] || (_[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(le, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: w
          }, {
            default: g(() => [..._[12] || (_[12] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), W8 = /* @__PURE__ */ me(V8, [["__scopeId", "data-v-07a00732"]]), G8 = { class: "discovered-content" }, j8 = {
  key: 0,
  class: "workers-list"
}, H8 = { class: "worker-info" }, K8 = { class: "worker-name" }, q8 = { class: "worker-address" }, Y8 = {
  key: 0,
  class: "worker-gpu"
}, J8 = {
  key: 1,
  class: "empty-state"
}, X8 = {
  key: 2,
  class: "api-key-section"
}, Q8 = { class: "selected-worker" }, Z8 = { class: "selected-name" }, eS = { class: "selected-address" }, tS = { class: "form-row" }, sS = { class: "api-key-wrapper" }, oS = ["type"], nS = { class: "result-icon" }, aS = { class: "result-message" }, lS = { class: "modal-actions" }, iS = /* @__PURE__ */ fe({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = rt(), l = k(null), i = k(""), r = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await Qo(), (p = d.value) == null || p.focus();
    }
    async function h() {
      if (!(!l.value || !i.value)) {
        u.value = !0, m.value = null;
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
          }) : m.value = {
            type: "error",
            message: w.message
          };
        } catch (w) {
          m.value = {
            type: "error",
            message: w instanceof Error ? w.message : "Connection failed"
          };
        } finally {
          u.value = !1;
        }
      }
    }
    return (w, p) => (a(), R(gt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: g(() => [
        t("div", G8, [
          e.workers.length > 0 ? (a(), c("div", j8, [
            (a(!0), c(j, null, pe(e.workers, (_) => (a(), c("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", H8, [
                t("span", K8, f(_.name), 1),
                t("span", q8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), c("span", Y8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              C(le, {
                variant: "primary",
                size: "xs",
                onClick: (S) => v(_)
              }, {
                default: g(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), c("div", J8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), c("div", X8, [
            t("div", Q8, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", Z8, f(l.value.name), 1),
              t("span", eS, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", tS, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", sS, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Xt(h, ["enter"])
                }, null, 40, oS), [
                  [Gn, i.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (_) => r.value = !r.value),
                  type: "button"
                }, f(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), c("div", {
              key: 0,
              class: Se(["test-result", m.value.type])
            }, [
              t("span", nS, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", aS, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", lS, [
          l.value ? (a(), R(le, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (_) => {
              l.value = null, i.value = "", m.value = null;
            })
          }, {
            default: g(() => [...p[9] || (p[9] = [
              b(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), R(le, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !i.value || u.value,
            onClick: h
          }, {
            default: g(() => [...p[10] || (p[10] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), rS = /* @__PURE__ */ me(iS, [["__scopeId", "data-v-5a3e40a4"]]), cS = { class: "deploy-content" }, uS = { class: "section" }, dS = {
  key: 0,
  class: "loading-text"
}, fS = {
  key: 1,
  class: "empty-remotes"
}, mS = {
  key: 2,
  class: "remotes-list"
}, vS = { class: "section" }, pS = { class: "mode-options" }, gS = { class: "mode-option" }, hS = ["disabled"], yS = { class: "mode-option" }, wS = { class: "section" }, bS = {
  key: 0,
  class: "section"
}, _S = { class: "summary-row" }, kS = {
  key: 1,
  class: "sync-warning"
}, $S = { class: "warning-content" }, CS = { class: "modal-actions" }, xS = /* @__PURE__ */ fe({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getRemotes: l,
      getRemoteSyncStatus: i,
      fetchRemote: r,
      pushToRemote: u,
      getDeploySummary: d,
      deployToWorker: m
    } = rt(), v = k([]), h = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), O = k(null), T = k(!1), x = F(() => p.value && h.value[p.value] || null), q = F(() => {
      if (!p.value) return null;
      const H = v.value.find((te) => te.name === p.value);
      return (H == null ? void 0 : H.fetch_url) || null;
    }), B = F(() => q.value && !T.value);
    async function A() {
      w.value = !0;
      try {
        const H = await l();
        v.value = H.remotes, await Promise.all(
          H.remotes.map(async (Q) => {
            const N = await i(Q.name);
            N && (h.value[Q.name] = N);
          })
        );
        const te = H.remotes.find((Q) => Q.is_default);
        te ? p.value = te.name : H.remotes.length > 0 && (p.value = H.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        O.value = await d();
      } catch {
      }
    }
    async function E(H) {
      _.value = H;
      try {
        await r(H);
        const te = await i(H);
        te && (h.value[H] = te), n("toast", `Fetched from ${H}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function L(H) {
      S.value = H;
      try {
        await u(H, { force: !1 });
        const te = await i(H);
        te && (h.value[H] = te), n("toast", `Pushed to ${H}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        S.value = null;
      }
    }
    function re(H) {
      p.value = H;
    }
    async function Y() {
      if (q.value) {
        T.value = !0;
        try {
          const H = await m(o.worker.name, {
            import_source: q.value,
            mode: $.value,
            name: P.value || void 0
          });
          H.id ? (n("toast", `Deployment started: ${H.name || H.id}`, "success"), n("deployed")) : H.status === "error" ? n("toast", H.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (H) {
          n("toast", H instanceof Error ? H.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return et(() => {
      A(), I();
    }), (H, te) => (a(), R(gt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: te[5] || (te[5] = (Q) => H.$emit("close"))
    }, {
      body: g(() => [
        t("div", cS, [
          t("div", uS, [
            te[7] || (te[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), c("div", dS, "Loading remotes...")) : v.value.length === 0 ? (a(), c("div", fS, [...te[6] || (te[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), c("div", mS, [
              (a(!0), c(j, null, pe(v.value, (Q) => (a(), R(Pr, {
                key: Q.name,
                remote: Q,
                "sync-status": h.value[Q.name],
                "is-selected": p.value === Q.name,
                "is-fetching": _.value === Q.name,
                "is-pushing": S.value === Q.name,
                onFetch: E,
                onPush: L,
                onSelect: re
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", vS, [
            te[10] || (te[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", pS, [
              t("label", gS, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[0] || (te[0] = (Q) => $.value = Q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, hS), [
                  [Yt, $.value]
                ]),
                te[8] || (te[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", yS, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[1] || (te[1] = (Q) => $.value = Q),
                  value: "native"
                }, null, 512), [
                  [Yt, $.value]
                ]),
                te[9] || (te[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", wS, [
            te[11] || (te[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": te[2] || (te[2] = (Q) => P.value = Q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Nt, P.value]
            ])
          ]),
          O.value ? (a(), c("div", bS, [
            te[12] || (te[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", _S, " ComfyUI: " + f(O.value.comfyui_version) + " • " + f(O.value.node_count) + " nodes • " + f(O.value.model_count) + " models • " + f(O.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          x.value && x.value.ahead > 0 ? (a(), c("div", kS, [
            te[14] || (te[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", $S, [
              t("strong", null, f(x.value.ahead) + " unpushed commit" + f(x.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(le, {
              variant: "primary",
              size: "xs",
              loading: S.value === p.value,
              onClick: te[3] || (te[3] = (Q) => p.value && L(p.value))
            }, {
              default: g(() => [...te[13] || (te[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", CS, [
          C(le, {
            variant: "ghost",
            size: "sm",
            onClick: te[4] || (te[4] = (Q) => H.$emit("close"))
          }, {
            default: g(() => [...te[15] || (te[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(le, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !B.value || T.value,
            onClick: Y
          }, {
            default: g(() => [...te[16] || (te[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), SS = /* @__PURE__ */ me(xS, [["__scopeId", "data-v-c12720d3"]]), IS = { class: "custom-tab" }, ES = { class: "section-header" }, TS = { class: "section-actions" }, PS = { class: "workers-content" }, RS = {
  key: 0,
  class: "loading-state"
}, MS = {
  key: 1,
  class: "empty-state"
}, DS = {
  key: 2,
  class: "workers-list"
}, LS = { class: "scan-icon" }, OS = { class: "scan-message" }, AS = /* @__PURE__ */ fe({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: r
    } = rt(), u = k([]), d = k([]), m = k(!1), v = k(!1), h = k(null), w = k(!1), p = k(!1), _ = k(null), S = k(null);
    async function $() {
      m.value = !0;
      try {
        const A = await n();
        u.value = A.workers;
      } catch (A) {
        o("toast", A instanceof Error ? A.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, S.value = null;
      try {
        const A = await r(), I = A.discovered.filter(
          (E) => !u.value.some((L) => L.host === E.host && L.port === E.port)
        );
        d.value = I, I.length > 0 ? p.value = !0 : A.discovered.length > 0 ? S.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : S.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (A) {
        o("toast", A instanceof Error ? A.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function O(A) {
      try {
        await l(A), o("toast", `Worker '${A.name}' added`, "success"), w.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function T(A) {
      try {
        await l(A), o("toast", `Worker '${A.name}' added`, "success"), p.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function x(A) {
      h.value = A;
      try {
        await i(A), o("toast", `Worker '${A}' removed`, "success"), await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        h.value = null;
      }
    }
    function q(A) {
      _.value = A;
    }
    function B() {
      _.value = null, o("deployed");
    }
    return et(() => {
      $();
    }), (A, I) => (a(), c("div", IS, [
      t("div", ES, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", TS, [
          C(le, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: g(() => [...I[6] || (I[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(le, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (E) => w.value = !0)
          }, {
            default: g(() => [...I[7] || (I[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", PS, [
        m.value && u.value.length === 0 ? (a(), c("div", RS, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), c("div", MS, [...I[10] || (I[10] = [
          t("div", { class: "empty-card" }, [
            t("span", { class: "empty-text" }, "No workers registered yet"),
            t("p", { class: "empty-help" }, " To add a custom worker: "),
            t("ol", { class: "setup-steps" }, [
              t("li", null, [
                b("On your GPU machine, run:"),
                t("br"),
                t("code", null, "cg-deploy worker setup"),
                t("br"),
                t("code", null, "cg-deploy worker up --broadcast")
              ]),
              t("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (a(), c("div", DS, [
          (a(!0), c(j, null, pe(u.value, (E) => (a(), R(I8, {
            key: E.name,
            worker: E,
            "is-action-loading": h.value === E.name,
            onDeploy: q,
            onRemove: x
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      S.value ? (a(), c("div", {
        key: 0,
        class: Se(["scan-result", S.value.type])
      }, [
        t("span", LS, f(S.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", OS, f(S.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (E) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), R(rS, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (E) => p.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), R(W8, {
        key: 2,
        onClose: I[3] || (I[3] = (E) => w.value = !1),
        onAdd: O
      })) : y("", !0),
      _.value ? (a(), R(SS, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (E) => _.value = null),
        onToast: I[5] || (I[5] = (E, L) => o("toast", E, L)),
        onDeployed: B
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), NS = /* @__PURE__ */ me(AS, [["__scopeId", "data-v-1637dead"]]), ca = "ComfyGit.Deploy.GitHubPAT";
function Rr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function US(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function zS() {
  function e() {
    try {
      return localStorage.getItem(ca);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ca, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ca);
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
    setToken: s,
    clearToken: o,
    hasToken: n,
    isRemoteSsh: Rr,
    isRemoteHttps: US
  };
}
const FS = { class: "settings-content" }, BS = { class: "settings-section" }, VS = {
  key: 0,
  class: "ssh-warning"
}, WS = { class: "form-row" }, GS = { class: "token-wrapper" }, jS = ["type"], HS = { class: "result-icon" }, KS = { class: "result-message" }, qS = { class: "token-actions" }, YS = /* @__PURE__ */ fe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: r } = zS(), { getRemotes: u, testGitAuth: d } = rt(), m = k(""), v = k(!1), h = k(!1), w = k(null), p = k(!1), _ = F(() => r());
    et(async () => {
      var T;
      const O = n();
      O && (m.value = O);
      try {
        const q = (T = (await u()).remotes) == null ? void 0 : T.find((B) => B.name === "origin");
        q && Rr(q.url) && (p.value = !0);
      } catch {
      }
    });
    async function S() {
      if (m.value) {
        h.value = !0, w.value = null;
        try {
          const O = await d(m.value);
          w.value = {
            type: O.status === "success" ? "success" : "error",
            message: O.message
          };
        } catch (O) {
          w.value = {
            type: "error",
            message: O instanceof Error ? O.message : "Connection test failed"
          };
        } finally {
          h.value = !1;
        }
      }
    }
    function $() {
      m.value && (l(m.value), o("saved"), o("close"));
    }
    function P() {
      i(), m.value = "", w.value = null;
    }
    return (O, T) => (a(), R(gt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (x) => O.$emit("close"))
    }, {
      body: g(() => [
        t("div", FS, [
          t("div", BS, [
            T[8] || (T[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), c("div", VS, [...T[3] || (T[3] = [
              t("span", { class: "warning-icon" }, "!", -1),
              t("div", { class: "warning-content" }, [
                t("strong", null, "SSH remote detected"),
                t("p", null, [
                  b("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  t("code", null, "git@github.com:..."),
                  b(" to "),
                  t("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : y("", !0),
            t("div", WS, [
              T[4] || (T[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", GS, [
                qe(t("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (x) => m.value = x),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, jS), [
                  [Gn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (x) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), c("div", {
              key: 1,
              class: Se(["test-result", w.value.type])
            }, [
              t("span", HS, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", KS, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", qS, [
              C(le, {
                variant: "ghost",
                size: "sm",
                loading: h.value,
                disabled: !m.value || h.value,
                onClick: S
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), R(le, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: g(() => [...T[7] || (T[7] = [
                  b(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        C(le, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: $
        }, {
          default: g(() => [...T[10] || (T[10] = [
            b(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), JS = /* @__PURE__ */ me(YS, [["__scopeId", "data-v-b21588ad"]]), XS = /* @__PURE__ */ fe({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: n,
      isLoading: l,
      liveInstanceCount: i,
      refreshInstances: r,
      stopInstance: u,
      startInstance: d,
      terminateInstance: m,
      startPolling: v,
      stopPolling: h
    } = Tr(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = F(() => [
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
    async function O(A) {
      S.value = A.id;
      try {
        await u(A), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function T(A) {
      S.value = A.id;
      try {
        await d(A), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        S.value = null;
      }
    }
    function x(A) {
      $.value = A;
    }
    async function q() {
      const A = $.value;
      if (A) {
        $.value = null, S.value = A.id;
        try {
          await m(A), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          S.value = null;
        }
      }
    }
    async function B() {
      await r(), _.value = "instances";
    }
    return et(() => {
      r(), v();
    }), wo(() => {
      h();
    }), (A, I) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (E) => w.value = !0)
          }, {
            actions: g(() => [
              C(le, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (E) => p.value = !0)
              }, {
                default: g(() => [...I[10] || (I[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(_r, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (E) => _.value = E),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          _.value === "instances" ? (a(), R(m5, {
            key: 0,
            instances: Fe(n),
            "is-loading": Fe(l),
            "action-loading-id": S.value,
            onRefresh: Fe(r),
            onStop: O,
            onStart: T,
            onTerminate: x
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), R(u8, {
            key: 1,
            onToast: I[3] || (I[3] = (E, L) => o("toast", E, L)),
            onNavigate: I[4] || (I[4] = (E) => o("navigate", E)),
            onDeployed: B
          })) : y("", !0),
          _.value === "custom" ? (a(), R(NS, {
            key: 2,
            onToast: I[5] || (I[5] = (E, L) => o("toast", E, L)),
            onDeployed: B
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), R(Ya, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: I[6] || (I[6] = (E) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(os, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (E) => w.value = !1)
      }, {
        content: g(() => [...I[11] || (I[11] = [
          t("div", { class: "deploy-info" }, [
            t("div", { class: "info-section" }, [
              t("strong", null, "What is Deploy?"),
              t("p", null, "Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).")
            ]),
            t("div", { class: "info-section" }, [
              t("strong", null, "What gets deployed:"),
              t("ul", null, [
                t("li", null, [
                  t("strong", null, "Workflows"),
                  b(" - All committed workflows")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  b(" - Installed automatically")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  b(" - Downloaded from sources (when available)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  b(" - Environment settings")
                ])
              ])
            ]),
            t("div", { class: "info-section" }, [
              t("strong", null, "Cost Information:"),
              t("p", null, "You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), R(JS, {
        key: 1,
        onClose: I[8] || (I[8] = (E) => p.value = !1),
        onSaved: I[9] || (I[9] = (E) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), QS = /* @__PURE__ */ me(XS, [["__scopeId", "data-v-d4e32a10"]]), ZS = { class: "header-info" }, e4 = { class: "commit-hash" }, t4 = {
  key: 0,
  class: "commit-refs"
}, s4 = { class: "commit-message" }, o4 = { class: "commit-date" }, n4 = {
  key: 0,
  class: "loading"
}, a4 = {
  key: 1,
  class: "changes-section"
}, l4 = { class: "stats-row" }, i4 = { class: "stat" }, r4 = { class: "stat insertions" }, c4 = { class: "stat deletions" }, u4 = {
  key: 0,
  class: "change-group"
}, d4 = {
  key: 1,
  class: "change-group"
}, f4 = {
  key: 0,
  class: "version"
}, m4 = {
  key: 2,
  class: "change-group"
}, v4 = { class: "change-item" }, p4 = /* @__PURE__ */ fe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = rt(), n = k(null), l = k(!0), i = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), r = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return et(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), R(gt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: g(() => {
        var m, v, h, w;
        return [
          t("div", ZS, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", e4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (h = n.value) == null ? void 0 : h.refs) != null && w.length ? (a(), c("span", t4, [
              (a(!0), c(j, null, pe(n.value.refs, (p) => (a(), c("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Le, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (p) => u.$emit("close"))
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
        var m, v;
        return [
          t("div", s4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", o4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), c("div", n4, "Loading details...")) : n.value ? (a(), c("div", a4, [
            t("div", l4, [
              t("span", i4, f(n.value.stats.files_changed) + " files", 1),
              t("span", r4, "+" + f(n.value.stats.insertions), 1),
              t("span", c4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), c("div", u4, [
              C(zo, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(j, null, pe(n.value.changes.workflows.added, (h) => (a(), c("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), c(j, null, pe(n.value.changes.workflows.modified, (h) => (a(), c("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), c(j, null, pe(n.value.changes.workflows.deleted, (h) => (a(), c("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(h), 1)
              ]))), 128))
            ])) : y("", !0),
            r.value ? (a(), c("div", d4, [
              C(zo, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(j, null, pe(n.value.changes.nodes.added, (h) => (a(), c("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(h.name), 1),
                h.version ? (a(), c("span", f4, "(" + f(h.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), c(j, null, pe(n.value.changes.nodes.removed, (h) => (a(), c("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(h.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), c("div", m4, [
              C(zo, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", v4, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: g(() => [
        C(Le, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Le, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => u.$emit("checkout", e.commit))
        }, {
          default: g(() => [...d[16] || (d[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), g4 = /* @__PURE__ */ me(p4, [["__scopeId", "data-v-d256ff6d"]]), h4 = { class: "base-textarea-wrapper" }, y4 = ["value", "rows", "placeholder", "disabled", "maxlength"], w4 = {
  key: 0,
  class: "base-textarea-count"
}, b4 = /* @__PURE__ */ fe({
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
    const o = e, n = s;
    function l(i) {
      i.shiftKey || i.ctrlKey || i.metaKey || o.submitOnEnter && (i.preventDefault(), n("submit"));
    }
    return (i, r) => (a(), c("div", h4, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: r[0] || (r[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          r[1] || (r[1] = Xt(it((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          r[2] || (r[2] = Xt(it((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Xt(l, ["enter"])
        ]
      }, null, 40, y4),
      e.showCharCount && e.maxLength ? (a(), c("div", w4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Hl = /* @__PURE__ */ me(b4, [["__scopeId", "data-v-c6d16c93"]]), _4 = ["checked", "disabled"], k4 = { class: "base-checkbox-box" }, $4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, C4 = {
  key: 0,
  class: "base-checkbox-label"
}, x4 = /* @__PURE__ */ fe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("label", {
      class: Se(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, _4),
      t("span", k4, [
        e.modelValue ? (a(), c("svg", $4, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), c("span", C4, [
        He(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kl = /* @__PURE__ */ me(x4, [["__scopeId", "data-v-bf17c831"]]), S4 = { class: "popover-header" }, I4 = { class: "popover-body" }, E4 = {
  key: 0,
  class: "changes-summary"
}, T4 = {
  key: 0,
  class: "change-item"
}, P4 = {
  key: 1,
  class: "change-item"
}, R4 = {
  key: 2,
  class: "change-item"
}, M4 = {
  key: 3,
  class: "change-item"
}, D4 = {
  key: 4,
  class: "change-item"
}, L4 = {
  key: 5,
  class: "change-item"
}, O4 = {
  key: 1,
  class: "no-changes"
}, A4 = {
  key: 2,
  class: "loading"
}, N4 = {
  key: 3,
  class: "issues-error"
}, U4 = { class: "error-header" }, z4 = { class: "error-title" }, F4 = { class: "issues-list" }, B4 = { class: "workflow-state" }, V4 = { class: "message-section" }, W4 = { class: "popover-footer" }, G4 = {
  key: 1,
  class: "commit-popover"
}, j4 = { class: "popover-header" }, H4 = { class: "popover-body" }, K4 = {
  key: 0,
  class: "changes-summary"
}, q4 = {
  key: 0,
  class: "change-item"
}, Y4 = {
  key: 1,
  class: "change-item"
}, J4 = {
  key: 2,
  class: "change-item"
}, X4 = {
  key: 3,
  class: "change-item"
}, Q4 = {
  key: 4,
  class: "change-item"
}, Z4 = {
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
}, o6 = { class: "error-header" }, n6 = { class: "error-title" }, a6 = { class: "issues-list" }, l6 = { class: "workflow-state" }, i6 = { class: "message-section" }, r6 = { class: "popover-footer" }, c6 = /* @__PURE__ */ fe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = rt(), i = k(""), r = k(!1), u = k(!1), d = F(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = F(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, S = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || S.nodes_added.length > 0 || S.nodes_removed.length > 0;
    }), v = F(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((S) => S.has_issues) : [];
    }), h = F(() => v.value.length > 0), w = F(() => h.value && !u.value);
    async function p() {
      var _, S, $, P;
      if (!(h.value && !u.value) && !(!d.value || !i.value.trim() || r.value)) {
        r.value = !0;
        try {
          const O = await l(i.value.trim(), u.value);
          if (O.status === "success") {
            const T = `Committed: ${((_ = O.summary) == null ? void 0 : _.new) || 0} new, ${((S = O.summary) == null ? void 0 : S.modified) || 0} modified, ${(($ = O.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: T });
          } else if (O.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (O.status === "blocked") {
            const T = ((P = O.issues) == null ? void 0 : P.map((x) => `${x.name}: ${x.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: O.message || "Commit failed" });
        } catch (O) {
          n("committed", { success: !1, message: O instanceof Error ? O.message : "Commit failed" });
        } finally {
          r.value = !1;
        }
      }
    }
    return (_, S) => e.asModal ? (a(), R(wt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = it(() => {
          }, ["stop"]))
        }, [
          t("div", S4, [
            S[11] || (S[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = ($) => n("close"))
            }, [...S[10] || (S[10] = [
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
          t("div", I4, [
            e.status && d.value ? (a(), c("div", E4, [
              e.status.workflows.new.length ? (a(), c("div", T4, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), c("div", P4, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), c("div", R4, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), c("div", M4, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), c("div", D4, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), c("div", L4, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), c("div", O4, " No changes to commit ")) : (a(), c("div", A4, " Loading... ")),
            h.value ? (a(), c("div", N4, [
              t("div", U4, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", z4, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", F4, [
                (a(!0), c(j, null, pe(v.value, ($) => (a(), c("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", B4, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Kl, {
                modelValue: u.value,
                "onUpdate:modelValue": S[1] || (S[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...S[19] || (S[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", V4, [
              C(Hl, {
                modelValue: i.value,
                "onUpdate:modelValue": S[2] || (S[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || r.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", W4, [
            C(Le, {
              variant: "secondary",
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: g(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || r.value || w.value,
              loading: r.value,
              onClick: p
            }, {
              default: g(() => [
                b(f(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), c("div", G4, [
      t("div", j4, [
        S[22] || (S[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = ($) => n("close"))
        }, [...S[21] || (S[21] = [
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
      t("div", H4, [
        e.status && d.value ? (a(), c("div", K4, [
          e.status.workflows.new.length ? (a(), c("div", q4, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), c("div", Y4, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), c("div", J4, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), c("div", X4, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), c("div", Q4, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), c("div", Z4, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), c("div", e6, " No changes to commit ")) : (a(), c("div", t6, " Loading... ")),
        h.value ? (a(), c("div", s6, [
          t("div", o6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", n6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", a6, [
            (a(!0), c(j, null, pe(v.value, ($) => (a(), c("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", l6, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Kl, {
            modelValue: u.value,
            "onUpdate:modelValue": S[7] || (S[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...S[30] || (S[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", i6, [
          C(Hl, {
            modelValue: i.value,
            "onUpdate:modelValue": S[8] || (S[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || r.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", r6, [
        C(Le, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: g(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Le, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || r.value || w.value,
          loading: r.value,
          onClick: p
        }, {
          default: g(() => [
            b(f(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Mr = /* @__PURE__ */ me(c6, [["__scopeId", "data-v-5f897631"]]), u6 = { class: "modal-header" }, d6 = { class: "modal-body" }, f6 = { class: "switch-message" }, m6 = { class: "switch-details" }, v6 = { class: "modal-actions" }, p6 = /* @__PURE__ */ fe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = it(() => {
          }, ["stop"]))
        }, [
          t("div", u6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", d6, [
            t("p", f6, [
              o[6] || (o[6] = b(" Switch from ", -1)),
              t("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = b(" to ", -1)),
              t("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = b("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", m6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", v6, [
            C(le, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(le, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                b(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), g6 = /* @__PURE__ */ me(p6, [["__scopeId", "data-v-e9c5253e"]]), h6 = {
  key: 0,
  class: "modal-overlay"
}, y6 = { class: "modal-content" }, w6 = { class: "modal-body" }, b6 = { class: "progress-info" }, _6 = { class: "progress-percentage" }, k6 = { class: "progress-state" }, $6 = { class: "switch-steps" }, C6 = { class: "step-icon" }, x6 = { class: "step-label" }, S6 = /* @__PURE__ */ fe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = F(() => {
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
      return s.message || i[s.state] || s.state;
    }), n = F(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = F(() => {
      const i = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], r = i.findIndex((u) => u.state === s.state);
      return i.map((u, d) => {
        let m = "pending", v = "○";
        return d < r ? (m = "completed", v = "✓") : d === r && (m = "active", v = "⟳"), {
          ...u,
          status: m,
          icon: v
        };
      });
    });
    return (i, r) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), c("div", h6, [
        t("div", y6, [
          r[1] || (r[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", w6, [
            C(jn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", b6, [
              t("div", _6, f(e.progress) + "%", 1),
              t("div", k6, f(o.value), 1)
            ]),
            t("div", $6, [
              (a(!0), c(j, null, pe(l.value, (u) => (a(), c("div", {
                key: u.state,
                class: Se(["switch-step", u.status])
              }, [
                t("span", C6, f(u.icon), 1),
                t("span", x6, f(u.label), 1)
              ], 2))), 128))
            ]),
            r[0] || (r[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), I6 = /* @__PURE__ */ me(S6, [["__scopeId", "data-v-768a5078"]]), E6 = { class: "modal-header" }, T6 = { class: "modal-body" }, P6 = {
  key: 0,
  class: "node-section"
}, R6 = { class: "node-list" }, M6 = {
  key: 1,
  class: "node-section"
}, D6 = { class: "node-list" }, L6 = { class: "modal-actions" }, O6 = /* @__PURE__ */ fe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = it(() => {
          }, ["stop"]))
        }, [
          t("div", E6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", T6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), c("div", P6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", R6, [
                (a(!0), c(j, null, pe(e.mismatchDetails.missing_nodes, (n) => (a(), c("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), c("div", M6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", D6, [
                (a(!0), c(j, null, pe(e.mismatchDetails.extra_nodes, (n) => (a(), c("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", L6, [
            C(le, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(le, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), A6 = /* @__PURE__ */ me(O6, [["__scopeId", "data-v-7cad7518"]]), N6 = [
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
    url: "https://docs.comfyhub.org/comfygit/",
    title: "Documentation",
    ariaLabel: "View ComfyGit Documentation",
    iconPath: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }
], U6 = "v0.0.15", z6 = "Akatz", F6 = { class: "social-buttons" }, B6 = ["title", "aria-label", "onClick"], V6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, W6 = ["d"], G6 = ["title", "aria-label", "onClick"], j6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, H6 = ["d"], K6 = /* @__PURE__ */ fe({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), c("div", F6, [
      (a(!0), c(j, null, pe(Fe(N6), (l) => (a(), c(j, {
        key: l.id
      }, [
        l.label ? (a(), c("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          b(f(l.label) + " ", 1),
          (a(), c("svg", V6, [
            t("path", {
              d: l.iconPath
            }, null, 8, W6)
          ]))
        ], 8, B6)) : (a(), c("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), c("svg", j6, [
            t("path", {
              d: l.iconPath
            }, null, 8, H6)
          ]))
        ], 8, G6))
      ], 64))), 128))
    ]));
  }
}), Dr = /* @__PURE__ */ me(K6, [["__scopeId", "data-v-4f846342"]]), q6 = { class: "footer-info" }, Y6 = { class: "version" }, J6 = { class: "made-by" }, X6 = /* @__PURE__ */ fe({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), c("div", q6, [
      t("span", Y6, f(Fe(U6)), 1),
      t("span", J6, [
        o[0] || (o[0] = b(" made with ", -1)),
        o[1] || (o[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        b(" by " + f(Fe(z6)), 1)
      ])
    ]));
  }
}), Lr = /* @__PURE__ */ me(X6, [["__scopeId", "data-v-8bc3db0a"]]), Q6 = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = k(null);
    async function n() {
      var i;
      await ((i = o.value) == null ? void 0 : i.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (i, r) => (a(), R(gt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: r[1] || (r[1] = (u) => i.$emit("close"))
    }, {
      body: g(() => [
        C(br, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          C(Le, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: g(() => [...r[2] || (r[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Le, {
            variant: "secondary",
            onClick: r[0] || (r[0] = (d) => i.$emit("close"))
          }, {
            default: g(() => [...r[3] || (r[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), Z6 = /* @__PURE__ */ me(Q6, [["__scopeId", "data-v-fac00ae7"]]), eI = { class: "header-actions" }, tI = {
  key: 0,
  class: "wizard-step"
}, sI = { class: "form-field" }, oI = ["placeholder"], nI = {
  key: 0,
  class: "form-error"
}, aI = { class: "form-field form-field--checkbox" }, lI = { class: "form-checkbox" }, iI = {
  key: 0,
  class: "form-field"
}, rI = ["placeholder"], cI = {
  key: 0,
  class: "form-info"
}, uI = {
  key: 1,
  class: "form-suggestion"
}, dI = {
  key: 2,
  class: "form-error"
}, fI = {
  key: 3,
  class: "form-info"
}, mI = {
  key: 1,
  class: "wizard-step"
}, vI = {
  key: 0,
  class: "progress-check-loading"
}, pI = {
  key: 0,
  class: "cli-warning"
}, gI = { class: "cli-warning-header" }, hI = {
  key: 1,
  class: "env-landing"
}, yI = { class: "env-list" }, wI = ["value"], bI = { class: "env-name" }, _I = {
  key: 2,
  class: "env-create"
}, kI = { class: "form-field" }, $I = { class: "form-field" }, CI = ["value"], xI = { class: "form-field" }, SI = ["disabled"], II = ["value"], EI = { class: "form-field" }, TI = ["value"], PI = { class: "form-field form-field--checkbox" }, RI = { class: "form-checkbox" }, MI = {
  key: 0,
  class: "form-error"
}, DI = {
  key: 1,
  class: "env-creating"
}, LI = { class: "creating-intro" }, OI = {
  key: 3,
  class: "env-import"
}, AI = { class: "wizard-footer" }, NI = { class: "wizard-footer-actions" }, no = 10, UI = 600 * 1e3, ql = 1800 * 1e3, zI = /* @__PURE__ */ fe({
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
    const o = e, n = s, {
      initializeWorkspace: l,
      getInitializeProgress: i,
      validatePath: r,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: v
    } = rt(), h = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), O = k(null), T = k(o.initialStep === 2), x = k(o.defaultPath), q = k(!!o.detectedModelsDir), B = k(o.detectedModelsDir || ""), A = k(null), I = k(null), E = k(null), L = k(null), re = k("my-new-env"), Y = k(Cr), H = k("latest"), te = k(xr), Q = k(!0), N = k(null), U = k(null), M = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), we = k(!1), ve = k(!1), Ie = k(!1), Re = k({ progress: 0, message: "" }), Ke = k({ progress: 0, message: "" }), Xe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ke = k(0), Ee = k(null), Ge = k(0), be = k(null), ae = F(() => {
      var he, ge;
      const Z = (he = x.value) == null ? void 0 : he.trim(), K = !A.value, Pe = !q.value || !I.value && ((ge = B.value) == null ? void 0 : ge.trim());
      return Z && K && Pe;
    }), Ve = F(() => {
      var Z;
      return (Z = re.value) == null ? void 0 : Z.trim();
    }), Te = F(() => !!(h.value === 2 || U.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), D = F(() => U.value || o.workspacePath || null);
    async function V() {
      var Z;
      if (A.value = null, !!((Z = x.value) != null && Z.trim()))
        try {
          const K = await r({ path: x.value, type: "workspace" });
          K.valid || (A.value = K.error || "Invalid path");
        } catch (K) {
          A.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function se() {
      var Z;
      if (I.value = null, E.value = null, L.value = null, !!((Z = B.value) != null && Z.trim()))
        try {
          const K = await r({ path: B.value, type: "models" });
          if (K.valid)
            L.value = K.model_count ?? null;
          else if (I.value = K.error || "Invalid path", K.suggestion) {
            E.value = K.suggestion, B.value = K.suggestion, I.value = null;
            const Pe = await r({ path: K.suggestion, type: "models" });
            Pe.valid && (L.value = Pe.model_count ?? null);
          }
        } catch (K) {
          I.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ne() {
      var Z, K, Pe, he, ge;
      if (A.value = null, I.value = null, await V(), (Z = A.value) != null && Z.includes("already exists")) {
        A.value = null, U.value = ((K = x.value) == null ? void 0 : K.trim()) || o.defaultPath, h.value = 2, de();
        return;
      }
      if (!A.value && !(q.value && ((Pe = B.value) != null && Pe.trim()) && (await se(), I.value))) {
        ve.value = !0;
        try {
          await l({
            workspace_path: ((he = x.value) == null ? void 0 : he.trim()) || o.defaultPath,
            models_directory: q.value && ((ge = B.value) == null ? void 0 : ge.trim()) || null
          }), ke.value = 0, Ee.value = Date.now();
          const W = setInterval(async () => {
            var z;
            if (Ee.value && Date.now() - Ee.value > UI) {
              clearInterval(W), ve.value = !1, A.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ie = await i();
              if (ke.value = 0, ie.state === "idle" && ve.value) {
                clearInterval(W), ve.value = !1, A.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Re.value = { progress: ie.progress, message: ie.message }, ie.state === "complete" ? (clearInterval(W), ve.value = !1, U.value = ((z = x.value) == null ? void 0 : z.trim()) || o.defaultPath, h.value = 2, de()) : ie.state === "error" && (clearInterval(W), ve.value = !1, A.value = ie.error || "Workspace creation failed");
            } catch (ie) {
              ke.value++, console.warn(`Polling failure ${ke.value}/${no}:`, ie), ke.value >= no && (clearInterval(W), ve.value = !1, A.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (W) {
          ve.value = !1, A.value = W instanceof Error ? W.message : "Failed to create workspace";
        }
      }
    }
    async function ue() {
      Ie.value = !0, N.value = null;
      try {
        const Z = {
          name: re.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: H.value,
          torch_backend: te.value,
          switch_after: Q.value,
          workspace_path: U.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(Z)).status === "started") {
          Ge.value = 0, be.value = Date.now();
          const Pe = setInterval(async () => {
            if (be.value && Date.now() - be.value > ql) {
              clearInterval(Pe), Ie.value = !1, N.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const he = await d();
              if (Ge.value = 0, he.state === "idle" && Ie.value) {
                clearInterval(Pe), Ie.value = !1, N.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ke.value = {
                progress: he.progress ?? 0,
                message: he.message,
                phase: he.phase
              }, he.state === "complete") {
                clearInterval(Pe), Ie.value = !1;
                const ge = he.environment_name || Z.name;
                Q.value ? n("complete", ge, U.value) : (p.value = "landing", n("environment-created-no-switch", ge));
              } else he.state === "error" && (clearInterval(Pe), Ie.value = !1, N.value = he.error || "Environment creation failed");
            } catch (he) {
              Ge.value++, console.warn(`Polling failure ${Ge.value}/${no}:`, he), Ge.value >= no && (clearInterval(Pe), Ie.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (Z) {
        Ie.value = !1, N.value = Z instanceof Error ? Z.message : "Unknown error";
      }
    }
    async function de() {
      we.value = !0;
      try {
        M.value = await v();
      } catch (Z) {
        console.error("Failed to load ComfyUI releases:", Z);
      } finally {
        we.value = !1;
      }
    }
    function $e() {
      w.value && n("switch-environment", w.value, U.value);
    }
    function Ce() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : h.value === 2 && o.setupState === "no_workspace" && (h.value = 1);
    }
    function oe(Z, K) {
      S.value = !1, K ? n("complete", Z, U.value) : (n("environment-created-no-switch", Z), p.value = "landing");
    }
    function ce() {
    }
    et(async () => {
      if (o.detectedModelsDir && (B.value = o.detectedModelsDir), o.workspacePath && (U.value = o.workspacePath), h.value === 2) {
        de();
        const Z = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await De(), clearTimeout(Z), T.value = !1;
      }
    });
    async function De() {
      try {
        const Z = await d();
        if (console.log("[ComfyGit] Create progress check:", Z.state, Z), Z.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", Z.environment_name), p.value = "create", Ie.value = !0, re.value = Z.environment_name || "my-new-env", Ke.value = {
            progress: Z.progress ?? 0,
            message: Z.message,
            phase: Z.phase
          }, xe();
          return;
        }
      } catch (Z) {
        console.log("[ComfyGit] Create progress check failed:", Z);
      }
      try {
        const Z = await m();
        console.log("[ComfyGit] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", Z.environment_name), O.value = {
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          progress: Z.progress ?? 0,
          environmentName: Z.environment_name || ""
        }, P.value = !0, p.value = "import", S.value = !0);
      } catch (Z) {
        console.log("[ComfyGit] Import progress check failed:", Z);
      }
    }
    async function xe() {
      Ge.value = 0, be.value = Date.now();
      let Z = null;
      const K = async () => {
        if (be.value && Date.now() - be.value > ql)
          return Z && clearInterval(Z), Ie.value = !1, N.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const he = await d();
          if (Ge.value = 0, he.state === "idle" && Ie.value)
            return Z && clearInterval(Z), Ie.value = !1, N.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ke.value = {
            progress: he.progress ?? 0,
            message: he.message,
            phase: he.phase
          }, he.state === "complete") {
            Z && clearInterval(Z), Ie.value = !1;
            const ge = he.environment_name || re.value;
            return n("complete", ge, U.value), !1;
          } else if (he.state === "error")
            return Z && clearInterval(Z), Ie.value = !1, N.value = he.error || "Environment creation failed", !1;
          return !0;
        } catch (he) {
          return Ge.value++, console.warn(`Polling failure ${Ge.value}/${no}:`, he), Ge.value >= no ? (Z && clearInterval(Z), Ie.value = !1, N.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (Z = setInterval(async () => {
        !await K() && Z && clearInterval(Z);
      }, 2e3));
    }
    return (Z, K) => (a(), c(j, null, [
      C(gt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Pe) => Z.$emit("close"))
      }, {
        header: g(() => [
          K[20] || (K[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", eI, [
            C(Dr),
            K[19] || (K[19] = t("span", { class: "header-divider" }, null, -1)),
            Te.value ? (a(), c("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (Pe) => _.value = !0)
            }, [...K[17] || (K[17] = [
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
            ])])) : y("", !0),
            t("button", {
              class: "icon-btn",
              onClick: K[1] || (K[1] = (Pe) => Z.$emit("close")),
              title: "Close"
            }, [...K[18] || (K[18] = [
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
          var Pe;
          return [
            h.value === 1 ? (a(), c("div", tI, [
              K[24] || (K[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", sI, [
                K[21] || (K[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (he) => x.value = he),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, oI), [
                  [Nt, x.value]
                ]),
                A.value ? (a(), c("p", nI, f(A.value), 1)) : y("", !0)
              ]),
              t("div", aI, [
                t("label", lI, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (he) => q.value = he)
                  }, null, 512), [
                    [Yo, q.value]
                  ]),
                  K[22] || (K[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), c("div", iI, [
                K[23] || (K[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (he) => B.value = he),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, rI), [
                  [Nt, B.value]
                ]),
                e.detectedModelsDir && !B.value ? (a(), c("p", cI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                E.value ? (a(), c("p", uI, " Did you mean: " + f(E.value), 1)) : y("", !0),
                I.value ? (a(), c("p", dI, f(I.value), 1)) : y("", !0),
                L.value !== null && !I.value ? (a(), c("p", fI, " Found " + f(L.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ve.value ? (a(), R(Pn, {
                key: 1,
                progress: Re.value.progress,
                message: Re.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            h.value === 2 ? (a(), c("div", mI, [
              T.value ? (a(), c("div", vI, [...K[25] || (K[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), c(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), c("div", pI, [
                  t("div", gI, [
                    K[27] || (K[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (he) => $.value = !0),
                      title: "Dismiss"
                    }, [...K[26] || (K[26] = [
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
                  K[29] || (K[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  K[30] || (K[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), c("div", hI, [
                  K[34] || (K[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (he) => p.value = "create")
                  }, [...K[31] || (K[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: K[7] || (K[7] = (he) => {
                      P.value = !1, p.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Pe = o.existingEnvironments) != null && Pe.length ? (a(), c(j, { key: 0 }, [
                    K[33] || (K[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", yI, [
                      (a(!0), c(j, null, pe(o.existingEnvironments, (he) => (a(), c("label", {
                        key: he,
                        class: Se(["env-option", { selected: w.value === he }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: he,
                          "onUpdate:modelValue": K[8] || (K[8] = (ge) => w.value = ge)
                        }, null, 8, wI), [
                          [Yt, w.value]
                        ]),
                        t("span", bI, f(he), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), c("div", _I, [
                  Ie.value ? (a(), c("div", DI, [
                    t("p", LI, [
                      K[41] || (K[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(re.value), 1),
                      K[42] || (K[42] = b("... ", -1))
                    ]),
                    C(Pn, {
                      progress: Ke.value.progress,
                      message: Ke.value.message,
                      "current-phase": Ke.value.phase,
                      "show-steps": !0,
                      steps: Xe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), c(j, { key: 0 }, [
                    K[40] || (K[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", kI, [
                      K[35] || (K[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (he) => re.value = he),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Nt, re.value]
                      ])
                    ]),
                    t("div", $I, [
                      K[36] || (K[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (he) => Y.value = he),
                        class: "form-select"
                      }, [
                        (a(!0), c(j, null, pe(Fe($r), (he) => (a(), c("option", {
                          key: he,
                          value: he
                        }, f(he), 9, CI))), 128))
                      ], 512), [
                        [vs, Y.value]
                      ])
                    ]),
                    t("div", xI, [
                      K[37] || (K[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (he) => H.value = he),
                        class: "form-select",
                        disabled: we.value
                      }, [
                        (a(!0), c(j, null, pe(M.value, (he) => (a(), c("option", {
                          key: he.tag_name,
                          value: he.tag_name
                        }, f(he.name), 9, II))), 128))
                      ], 8, SI), [
                        [vs, H.value]
                      ])
                    ]),
                    t("div", EI, [
                      K[38] || (K[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (he) => te.value = he),
                        class: "form-select"
                      }, [
                        (a(!0), c(j, null, pe(Fe(Ja), (he) => (a(), c("option", {
                          key: he,
                          value: he
                        }, f(he) + f(he === "auto" ? " (detect GPU)" : ""), 9, TI))), 128))
                      ], 512), [
                        [vs, te.value]
                      ])
                    ]),
                    t("div", PI, [
                      t("label", RI, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (he) => Q.value = he)
                        }, null, 512), [
                          [Yo, Q.value]
                        ]),
                        K[39] || (K[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    N.value ? (a(), c("div", MI, f(N.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), c("div", OI, [
                  C(Er, {
                    "workspace-path": U.value,
                    "resume-import": P.value,
                    "initial-progress": O.value ?? void 0,
                    onImportComplete: oe,
                    onImportStarted: K[14] || (K[14] = (he) => S.value = !0),
                    onSourceCleared: ce
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: g(() => [
          t("div", AI, [
            C(Lr),
            t("div", NI, [
              h.value === 1 ? (a(), R(Le, {
                key: 0,
                variant: "primary",
                disabled: !ae.value || ve.value,
                onClick: ne
              }, {
                default: g(() => [
                  b(f(ve.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : h.value === 2 ? (a(), c(j, { key: 1 }, [
                !Ie.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !U.value) ? (a(), R(Le, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ce
                }, {
                  default: g(() => [...K[44] || (K[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), R(Le, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ve.value || Ie.value,
                  onClick: ue
                }, {
                  default: g(() => [
                    b(f(Ie.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), R(Le, {
                  key: 2,
                  variant: "primary",
                  onClick: $e
                }, {
                  default: g(() => [
                    b(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (a(), R(Z6, {
        key: 0,
        "workspace-path": D.value,
        onClose: K[16] || (K[16] = (Pe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), FI = /* @__PURE__ */ me(zI, [["__scopeId", "data-v-9a9aadc0"]]), BI = { class: "comfygit-panel" }, VI = { class: "panel-header" }, WI = { class: "header-left" }, GI = {
  key: 0,
  class: "header-info"
}, jI = { class: "header-actions" }, HI = { class: "env-switcher" }, KI = {
  key: 0,
  class: "header-info"
}, qI = { class: "branch-name" }, YI = { class: "panel-main" }, JI = { class: "sidebar" }, XI = { class: "sidebar-content" }, QI = { class: "sidebar-section" }, ZI = { class: "sidebar-section" }, eE = { class: "sidebar-section" }, tE = {
  key: 0,
  class: "sidebar-badge"
}, sE = { class: "sidebar-footer" }, oE = { class: "content-area" }, nE = {
  key: 0,
  class: "error-message"
}, aE = {
  key: 1,
  class: "loading"
}, lE = { class: "dialog-content env-selector-dialog" }, iE = { class: "dialog-header" }, rE = { class: "dialog-body" }, cE = { class: "env-list" }, uE = { class: "env-info" }, dE = { class: "env-name-row" }, fE = { class: "env-indicator" }, mE = { class: "env-name" }, vE = {
  key: 0,
  class: "env-branch"
}, pE = {
  key: 1,
  class: "current-label"
}, gE = { class: "env-stats" }, hE = ["onClick"], yE = { class: "toast-container" }, wE = { class: "toast-message" }, bE = /* @__PURE__ */ fe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getStatus: l,
      getHistory: i,
      getBranches: r,
      checkout: u,
      createBranch: d,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: h,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: S,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = rt(), O = kv(), { liveInstanceCount: T } = Tr({ autoStart: !0 }), x = k(null), q = k([]), B = k([]), A = k([]), I = F(() => A.value.find((ee) => ee.is_current)), E = k(null), L = k(!1), re = k(1), Y = F(() => {
      var ee;
      return ((ee = E.value) == null ? void 0 : ee.state) || "managed";
    }), H = k(!1), te = k(null), Q = k(null), N = k(!1), U = k(null), M = k(null), we = k(null), ve = k(!1), Ie = k(!1), Re = k(""), Ke = k(null), Xe = k({ state: "idle", progress: 0, message: "" });
    let ke = null, Ee = null;
    const Ge = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, be = o.initialView ? Ge[o.initialView] : null, ae = k((be == null ? void 0 : be.view) ?? "status"), Ve = k((be == null ? void 0 : be.section) ?? "this-env");
    function Te(ee, G) {
      ae.value = ee, Ve.value = G;
    }
    function D(ee) {
      const Me = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ee];
      Me && Te(Me.view, Me.section);
    }
    function V() {
      Te("branches", "this-env");
    }
    function se() {
      n("close"), setTimeout(() => {
        var G;
        const ee = document.querySelectorAll("button.comfyui-button");
        for (const Me of ee)
          if (((G = Me.textContent) == null ? void 0 : G.trim()) === "Manager") {
            Me.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ne = k(null), ue = k(!1), de = k(!1), $e = k([]);
    let Ce = 0;
    function oe(ee, G = "info", Me = 3e3) {
      const We = ++Ce;
      return $e.value.push({ id: We, message: ee, type: G }), Me > 0 && setTimeout(() => {
        $e.value = $e.value.filter((ot) => ot.id !== We);
      }, Me), We;
    }
    function ce(ee) {
      $e.value = $e.value.filter((G) => G.id !== ee);
    }
    function De(ee, G) {
      oe(ee, G);
    }
    const xe = F(() => {
      if (!x.value) return "neutral";
      const ee = x.value.workflows, G = ee.new.length > 0 || ee.modified.length > 0 || ee.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? G ? "warning" : "success" : "error";
    });
    F(() => x.value ? xe.value === "success" ? "All synced" : xe.value === "warning" ? "Uncommitted changes" : xe.value === "error" ? "Not synced" : "" : "");
    async function Z() {
      H.value = !0, te.value = null;
      try {
        const [ee, G, Me, We] = await Promise.all([
          l(!0),
          i(),
          r(),
          h()
        ]);
        x.value = ee, q.value = G.commits, B.value = Me.branches, A.value = We, n("statusUpdate", ee), U.value && await U.value.loadWorkflows(!0);
      } catch (ee) {
        te.value = ee instanceof Error ? ee.message : "Failed to load status", x.value = null, q.value = [], B.value = [];
      } finally {
        H.value = !1;
      }
    }
    function K(ee) {
      Q.value = ee;
    }
    async function Pe(ee) {
      var Me;
      Q.value = null;
      const G = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      ne.value = {
        title: G ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: G ? "You have uncommitted changes that will be lost." : `Checkout commit ${ee.short_hash || ((Me = ee.hash) == null ? void 0 : Me.slice(0, 7))}?`,
        details: G ? as() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: G,
        onConfirm: async () => {
          var mt;
          ne.value = null, ie();
          const We = oe(`Checking out ${ee.short_hash || ((mt = ee.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await u(ee.hash, G);
          ce(We), ot.status === "success" ? oe("Restarting ComfyUI...", "success") : oe(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function he(ee) {
      const G = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      ne.value = {
        title: G ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: G ? "You have uncommitted changes." : `Switch to branch "${ee}"?`,
        details: G ? as() : void 0,
        warning: G ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ne.value = null, ie();
          const Me = oe(`Switching to ${ee}...`, "info", 0), We = await m(ee, G);
          ce(Me), We.status === "success" ? oe("Restarting ComfyUI...", "success") : oe(We.message || "Branch switch failed", "error");
        }
      };
    }
    async function ge(ee) {
      const G = oe(`Creating branch ${ee}...`, "info", 0), Me = await d(ee);
      ce(G), Me.status === "success" ? (oe(`Branch "${ee}" created`, "success"), await Z()) : oe(Me.message || "Failed to create branch", "error");
    }
    async function W(ee, G = !1) {
      const Me = async (We) => {
        var mt;
        const ot = oe(`Deleting branch ${ee}...`, "info", 0);
        try {
          const Mt = await v(ee, We);
          ce(ot), Mt.status === "success" ? (oe(`Branch "${ee}" deleted`, "success"), await Z()) : (mt = Mt.message) != null && mt.includes("not fully merged") ? ne.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ee}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ne.value = null, await Me(!0);
            }
          } : oe(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          ce(ot);
          const ls = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          ls.includes("not fully merged") ? ne.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ee}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ne.value = null, await Me(!0);
            }
          } : oe(ls, "error");
        }
      };
      ne.value = {
        title: "Delete Branch",
        message: `Delete branch "${ee}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ne.value = null, await Me(G);
        }
      };
    }
    async function z(ee) {
      Q.value = null;
      const G = prompt("Enter branch name:");
      if (G) {
        const Me = oe(`Creating branch ${G}...`, "info", 0), We = await d(G, ee.hash);
        ce(Me), We.status === "success" ? (oe(`Branch "${G}" created from ${ee.short_hash}`, "success"), await Z()) : oe(We.message || "Failed to create branch", "error");
      }
    }
    function ie() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ze() {
      ne.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ee;
          ne.value = null, ie(), oe("Restarting environment...", "info");
          try {
            (ee = window.app) != null && ee.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Qe() {
      ne.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ee;
          ne.value = null, oe("Stopping environment...", "info");
          try {
            (ee = window.app) != null && ee.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(ee, G) {
      N.value = !1, Re.value = ee, Ke.value = G || null, ve.value = !0;
    }
    async function at() {
      ve.value = !1, Ie.value = !0, ie(), Xe.value = {
        progress: 10,
        state: dt(10),
        message: Rt(10)
      };
      try {
        await w(Re.value, Ke.value || void 0), Ut(), Bs();
      } catch (ee) {
        jt(), Ie.value = !1, oe(`Failed to initiate switch: ${ee instanceof Error ? ee.message : "Unknown error"}`, "error"), Xe.value = { state: "idle", progress: 0, message: "" }, Ke.value = null;
      }
    }
    function dt(ee) {
      return ee >= 100 ? "complete" : ee >= 80 ? "validating" : ee >= 60 ? "starting" : ee >= 30 ? "syncing" : "preparing";
    }
    function Rt(ee) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[dt(ee)] || "";
    }
    function Ut() {
      if (Ee) return;
      let ee = 10;
      const G = 60, Me = 5e3, We = 100, ot = (G - ee) / (Me / We);
      Ee = window.setInterval(() => {
        if (ee += ot, ee >= G && (ee = G, jt()), Xe.value.progress < G) {
          const mt = Math.floor(ee);
          Xe.value = {
            progress: mt,
            state: dt(mt),
            message: Rt(mt)
          };
        }
      }, We);
    }
    function jt() {
      Ee && (clearInterval(Ee), Ee = null);
    }
    function Bs() {
      ke || (ke = window.setInterval(async () => {
        try {
          let ee = await O.getStatus();
          if ((!ee || ee.state === "idle") && (ee = await p()), !ee)
            return;
          const G = ee.progress || 0;
          G >= 60 && jt();
          const Me = Math.max(G, Xe.value.progress), We = ee.state && ee.state !== "idle" && ee.state !== "unknown", ot = We ? ee.state : dt(Me), mt = We && ee.message || Rt(Me);
          Xe.value = {
            state: ot,
            progress: Me,
            message: mt
          }, ee.state === "complete" ? (jt(), Ts(), Ie.value = !1, oe(`✓ Switched to ${Re.value}`, "success"), await Z(), Re.value = "") : ee.state === "rolled_back" ? (jt(), Ts(), Ie.value = !1, oe("Switch failed, restored previous environment", "warning"), Re.value = "") : ee.state === "critical_failure" && (jt(), Ts(), Ie.value = !1, oe(`Critical error during switch: ${ee.message}`, "error"), Re.value = "");
        } catch (ee) {
          console.error("Failed to poll switch progress:", ee);
        }
      }, 1e3));
    }
    function Ts() {
      jt(), ke && (clearInterval(ke), ke = null);
    }
    function to() {
      var ee;
      ve.value = !1, Re.value = "", (ee = E.value) != null && ee.state && E.value.state !== "managed" && (re.value = E.value.state === "no_workspace" ? 1 : 2, L.value = !0);
    }
    async function _o(ee) {
      ue.value = !1, await Z(), oe(ee.message, ee.success ? "success" : "error");
    }
    async function ko() {
      de.value = !1;
      const ee = oe("Syncing environment...", "info", 0);
      try {
        const G = await S("skip", !0);
        if (ce(ee), G.status === "success") {
          const Me = [];
          G.nodes_installed.length && Me.push(`${G.nodes_installed.length} installed`), G.nodes_removed.length && Me.push(`${G.nodes_removed.length} removed`);
          const We = Me.length ? `: ${Me.join(", ")}` : "";
          oe(`✓ Environment synced${We}`, "success"), await Z();
        } else {
          const Me = G.errors.length ? G.errors.join("; ") : G.message;
          oe(`Sync failed: ${Me}`, "error");
        }
      } catch (G) {
        ce(ee), oe(`Sync error: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
      }
    }
    async function $o(ee) {
      var G;
      try {
        const Me = await $(ee);
        Me.failed.length === 0 ? oe(`✓ Repaired ${Me.success} workflow${Me.success === 1 ? "" : "s"}`, "success") : oe(`Repaired ${Me.success}, failed: ${Me.failed.length}`, "warning"), await Z();
      } catch (Me) {
        oe(`Repair failed: ${Me instanceof Error ? Me.message : "Unknown error"}`, "error");
      } finally {
        (G = we.value) == null || G.resetRepairingState();
      }
    }
    async function ye() {
      var G, Me;
      const ee = oe("Repairing environment...", "info", 0);
      try {
        const We = await S("skip", !0);
        if (ce(ee), We.status === "success") {
          const ot = [];
          We.nodes_installed.length && ot.push(`${We.nodes_installed.length} installed`), We.nodes_removed.length && ot.push(`${We.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          oe(`✓ Environment repaired${mt}`, "success"), (G = we.value) == null || G.closeDetailModal(), await Z();
        } else {
          const ot = We.errors.length ? We.errors.join(", ") : We.message || "Unknown error";
          oe(`Repair failed: ${ot}`, "error");
        }
      } catch (We) {
        ce(ee), oe(`Repair error: ${We instanceof Error ? We.message : "Unknown error"}`, "error");
      } finally {
        (Me = we.value) == null || Me.resetRepairingEnvironmentState();
      }
    }
    async function X(ee, G) {
      oe(`Environment '${ee}' created`, "success"), await Z(), M.value && await M.value.loadEnvironments(), G && await vt(ee);
    }
    async function je(ee) {
      var G;
      if (((G = I.value) == null ? void 0 : G.name) === ee) {
        oe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ne.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ee}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ne.value = null;
          try {
            const Me = await _(ee);
            Me.status === "success" ? (oe(`Environment "${ee}" deleted`, "success"), await Z(), M.value && await M.value.loadEnvironments()) : oe(Me.message || "Failed to delete environment", "error");
          } catch (Me) {
            oe(`Error deleting environment: ${Me instanceof Error ? Me.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(ee, G) {
      L.value = !1;
      try {
        E.value = await P();
      } catch {
      }
      await vt(ee, G);
    }
    function Ht() {
      L.value = !1, n("close");
    }
    async function ps(ee, G) {
      await vt(ee, G);
    }
    async function gs(ee) {
      await Z(), await vt(ee);
    }
    async function ns(ee) {
      E.value = await P(), console.log(`Environment '${ee}' created. Available for switching.`);
    }
    function Oe() {
      Te("environments", "all-envs"), setTimeout(() => {
        var ee;
        (ee = M.value) == null || ee.openCreateModal();
      }, 100);
    }
    function as() {
      if (!x.value) return [];
      const ee = [], G = x.value.workflows;
      return G.new.length && ee.push(`${G.new.length} new workflow(s)`), G.modified.length && ee.push(`${G.modified.length} modified workflow(s)`), G.deleted.length && ee.push(`${G.deleted.length} deleted workflow(s)`), ee;
    }
    return et(async () => {
      try {
        if (E.value = await P(), E.value.state === "no_workspace") {
          L.value = !0, re.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          L.value = !0, re.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          L.value = !0, re.value = 2;
          return;
        }
      } catch (ee) {
        console.warn("Setup status check failed, proceeding normally:", ee);
      }
      await Z();
    }), (ee, G) => {
      var Me, We, ot, mt, Mt, ls, Vs, Ws, J, _e, Ae, ct;
      return a(), c("div", BI, [
        t("div", VI, [
          t("div", WI, [
            G[31] || (G[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (a(), c("div", GI)) : y("", !0)
          ]),
          t("div", jI, [
            C(Dr),
            G[34] || (G[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Se(["icon-btn", { spinning: H.value }]),
              onClick: Z,
              title: "Refresh"
            }, [...G[32] || (G[32] = [
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
              onClick: G[0] || (G[0] = (Ne) => n("close")),
              title: "Close"
            }, [...G[33] || (G[33] = [
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
        t("div", HI, [
          t("div", { class: "env-switcher-header" }, [
            G[35] || (G[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ze
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Qe
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: G[1] || (G[1] = (Ne) => Te("environments", "all-envs"))
          }, [
            x.value ? (a(), c("div", KI, [
              t("span", null, f(((Me = I.value) == null ? void 0 : Me.name) || ((We = x.value) == null ? void 0 : We.environment) || "Loading..."), 1),
              t("span", qI, "(" + f(x.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            G[36] || (G[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", YI, [
          t("div", JI, [
            t("div", XI, [
              t("div", QI, [
                G[37] || (G[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "status" && Ve.value === "this-env" }]),
                  onClick: G[2] || (G[2] = (Ne) => Te("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "workflows" }]),
                  onClick: G[3] || (G[3] = (Ne) => Te("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "models-env" }]),
                  onClick: G[4] || (G[4] = (Ne) => Te("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "branches" }]),
                  onClick: G[5] || (G[5] = (Ne) => Te("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "history" }]),
                  onClick: G[6] || (G[6] = (Ne) => Te("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "nodes" }]),
                  onClick: G[7] || (G[7] = (Ne) => Te("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "debug-env" }]),
                  onClick: G[8] || (G[8] = (Ne) => Te("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              G[41] || (G[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", ZI, [
                G[38] || (G[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "environments" }]),
                  onClick: G[9] || (G[9] = (Ne) => Te("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "model-index" }]),
                  onClick: G[10] || (G[10] = (Ne) => Te("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "settings" }]),
                  onClick: G[11] || (G[11] = (Ne) => Te("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "debug-workspace" }]),
                  onClick: G[12] || (G[12] = (Ne) => Te("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              G[42] || (G[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", eE, [
                G[40] || (G[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "deploy" }]),
                  onClick: G[13] || (G[13] = (Ne) => Te("deploy", "sharing"))
                }, [
                  G[39] || (G[39] = b(" DEPLOY ", -1)),
                  Fe(T) > 0 ? (a(), c("span", tE, f(Fe(T)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "export" }]),
                  onClick: G[14] || (G[14] = (Ne) => Te("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "import" }]),
                  onClick: G[15] || (G[15] = (Ne) => Te("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "remotes" }]),
                  onClick: G[16] || (G[16] = (Ne) => Te("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", sE, [
              C(Lr)
            ])
          ]),
          t("div", oE, [
            te.value ? (a(), c("div", nE, f(te.value), 1)) : !x.value && ae.value === "status" ? (a(), c("div", aE, " Loading status... ")) : (a(), c(j, { key: 2 }, [
              ae.value === "status" ? (a(), R(qm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: we,
                status: x.value,
                "setup-state": Y.value,
                onSwitchBranch: V,
                onCommitChanges: G[17] || (G[17] = (Ne) => ue.value = !0),
                onSyncEnvironment: G[18] || (G[18] = (Ne) => de.value = !0),
                onViewWorkflows: G[19] || (G[19] = (Ne) => Te("workflows", "this-env")),
                onViewHistory: G[20] || (G[20] = (Ne) => Te("history", "this-env")),
                onViewDebug: G[21] || (G[21] = (Ne) => Te("debug-env", "this-env")),
                onViewNodes: G[22] || (G[22] = (Ne) => Te("nodes", "this-env")),
                onRepairMissingModels: $o,
                onRepairEnvironment: ye,
                onStartSetup: G[23] || (G[23] = (Ne) => L.value = !0),
                onViewEnvironments: G[24] || (G[24] = (Ne) => Te("environments", "all-envs")),
                onCreateEnvironment: Oe
              }, null, 8, ["status", "setup-state"])) : ae.value === "workflows" ? (a(), R(x0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: U,
                onRefresh: Z
              }, null, 512)) : ae.value === "models-env" ? (a(), R(iw, {
                key: 2,
                onNavigate: D
              })) : ae.value === "branches" ? (a(), R(cv, {
                key: 3,
                branches: B.value,
                current: ((ot = x.value) == null ? void 0 : ot.branch) || null,
                onSwitch: he,
                onCreate: ge,
                onDelete: W
              }, null, 8, ["branches", "current"])) : ae.value === "history" ? (a(), R(bv, {
                key: 4,
                commits: q.value,
                onSelect: K,
                onCheckout: Pe
              }, null, 8, ["commits"])) : ae.value === "nodes" ? (a(), R(ob, {
                key: 5,
                "version-mismatches": ((Mt = (mt = x.value) == null ? void 0 : mt.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: se,
                onRepairEnvironment: ye,
                onToast: De
              }, null, 8, ["version-mismatches"])) : ae.value === "debug-env" ? (a(), R(y2, { key: 6 })) : ae.value === "environments" ? (a(), R(_$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: M,
                onSwitch: vt,
                onCreated: X,
                onDelete: je
              }, null, 512)) : ae.value === "model-index" ? (a(), R(Iw, {
                key: 8,
                onRefresh: Z
              })) : ae.value === "settings" ? (a(), R(c2, { key: 9 })) : ae.value === "debug-workspace" ? (a(), R(h2, { key: 10 })) : ae.value === "deploy" ? (a(), R(QS, {
                key: 11,
                onToast: De,
                onNavigate: D
              })) : ae.value === "export" ? (a(), R(X$, { key: 12 })) : ae.value === "import" ? (a(), R(G3, {
                key: 13,
                onImportCompleteSwitch: gs
              })) : ae.value === "remotes" ? (a(), R(Vk, {
                key: 14,
                onToast: De
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Q.value ? (a(), R(g4, {
          key: 0,
          commit: Q.value,
          onClose: G[25] || (G[25] = (Ne) => Q.value = null),
          onCheckout: Pe,
          onCreateBranch: z
        }, null, 8, ["commit"])) : y("", !0),
        ne.value ? (a(), R(Ya, {
          key: 1,
          title: ne.value.title,
          message: ne.value.message,
          details: ne.value.details,
          warning: ne.value.warning,
          confirmLabel: ne.value.confirmLabel,
          cancelLabel: ne.value.cancelLabel,
          secondaryLabel: ne.value.secondaryLabel,
          secondaryAction: ne.value.secondaryAction,
          destructive: ne.value.destructive,
          onConfirm: ne.value.onConfirm,
          onCancel: G[26] || (G[26] = (Ne) => ne.value = null),
          onSecondary: ne.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(g6, {
          show: ve.value,
          "from-environment": ((ls = I.value) == null ? void 0 : ls.name) || "unknown",
          "to-environment": Re.value,
          onConfirm: at,
          onClose: to
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ue.value && x.value ? (a(), R(Mr, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: G[27] || (G[27] = (Ne) => ue.value = !1),
          onCommitted: _o
        }, null, 8, ["status"])) : y("", !0),
        de.value && x.value ? (a(), R(A6, {
          key: 3,
          show: de.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: ko,
          onClose: G[28] || (G[28] = (Ne) => de.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(I6, {
          show: Ie.value,
          state: Xe.value.state,
          progress: Xe.value.progress,
          message: Xe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (a(), c("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: G[30] || (G[30] = it((Ne) => N.value = !1, ["self"]))
        }, [
          t("div", lE, [
            t("div", iE, [
              G[44] || (G[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: G[29] || (G[29] = (Ne) => N.value = !1)
              }, [...G[43] || (G[43] = [
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
            t("div", rE, [
              G[45] || (G[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", cE, [
                (a(!0), c(j, null, pe(A.value, (Ne) => (a(), c("div", {
                  key: Ne.name,
                  class: Se(["env-item", { current: Ne.is_current }])
                }, [
                  t("div", uE, [
                    t("div", dE, [
                      t("span", fE, f(Ne.is_current ? "●" : "○"), 1),
                      t("span", mE, f(Ne.name), 1),
                      Ne.current_branch ? (a(), c("span", vE, "(" + f(Ne.current_branch) + ")", 1)) : y("", !0),
                      Ne.is_current ? (a(), c("span", pE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", gE, f(Ne.workflow_count) + " workflows • " + f(Ne.node_count) + " nodes ", 1)
                  ]),
                  Ne.is_current ? y("", !0) : (a(), c("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Co) => vt(Ne.name)
                  }, " SWITCH ", 8, hE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        L.value ? (a(), R(FI, {
          key: 5,
          "default-path": ((Vs = E.value) == null ? void 0 : Vs.default_path) || "~/comfygit",
          "detected-models-dir": ((Ws = E.value) == null ? void 0 : Ws.detected_models_dir) || null,
          "initial-step": re.value,
          "existing-environments": ((J = E.value) == null ? void 0 : J.environments) || [],
          "cli-installed": ((_e = E.value) == null ? void 0 : _e.cli_installed) ?? !0,
          "setup-state": ((Ae = E.value) == null ? void 0 : Ae.state) || "no_workspace",
          "workspace-path": ((ct = E.value) == null ? void 0 : ct.workspace_path) || null,
          onComplete: ht,
          onClose: Ht,
          onSwitchEnvironment: ps,
          onEnvironmentCreatedNoSwitch: ns
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", yE, [
          C(nd, { name: "toast" }, {
            default: g(() => [
              (a(!0), c(j, null, pe($e.value, (Ne) => (a(), c("div", {
                key: Ne.id,
                class: Se(["toast", Ne.type])
              }, [
                t("span", wE, f(Ne.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), _E = /* @__PURE__ */ me(bE, [["__scopeId", "data-v-037b3ee3"]]), kE = { class: "item-header" }, $E = { class: "item-info" }, CE = { class: "filename" }, xE = { class: "metadata" }, SE = { class: "size" }, IE = {
  key: 0,
  class: "type"
}, EE = { class: "item-actions" }, TE = {
  key: 0,
  class: "progress-section"
}, PE = { class: "progress-bar" }, RE = { class: "progress-stats" }, ME = { class: "downloaded" }, DE = { class: "speed" }, LE = {
  key: 0,
  class: "eta"
}, OE = {
  key: 1,
  class: "status-msg paused"
}, AE = {
  key: 2,
  class: "status-msg queued"
}, NE = {
  key: 3,
  class: "status-msg completed"
}, UE = {
  key: 4,
  class: "status-msg failed"
}, zE = {
  key: 0,
  class: "retries"
}, FE = /* @__PURE__ */ fe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
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
      class: Se(["download-item", `status-${e.item.status}`])
    }, [
      t("div", kE, [
        t("div", $E, [
          t("div", CE, f(e.item.filename), 1),
          t("div", xE, [
            t("span", SE, f(n(e.item.size)), 1),
            e.item.type ? (a(), c("span", IE, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", EE, [
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
      e.item.status === "downloading" ? (a(), c("div", TE, [
        t("div", PE, [
          t("div", {
            class: "progress-fill",
            style: Gt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", RE, [
          t("span", ME, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", DE, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), c("span", LE, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), c("div", OE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), c("div", AE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), c("div", NE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), c("div", UE, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), c("span", zE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Eo = /* @__PURE__ */ me(FE, [["__scopeId", "data-v-2110df65"]]), BE = { class: "queue-title" }, VE = { class: "count" }, WE = { class: "queue-actions" }, GE = { class: "action-label" }, jE = {
  key: 0,
  class: "overall-progress"
}, HE = { class: "progress-bar" }, KE = {
  key: 0,
  class: "current-mini"
}, qE = { class: "filename" }, YE = { class: "speed" }, JE = {
  key: 1,
  class: "queue-content"
}, XE = {
  key: 0,
  class: "section"
}, QE = {
  key: 1,
  class: "section"
}, ZE = { class: "section-header" }, eT = { class: "section-label paused" }, tT = { class: "items-list" }, sT = {
  key: 2,
  class: "section"
}, oT = { class: "section-header" }, nT = { class: "section-label" }, aT = { class: "items-list" }, lT = {
  key: 3,
  class: "section"
}, iT = { class: "section-header" }, rT = { class: "section-label" }, cT = { class: "items-list" }, uT = {
  key: 4,
  class: "section"
}, dT = { class: "section-header" }, fT = { class: "section-label failed" }, mT = { class: "items-list" }, vT = /* @__PURE__ */ fe({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: i,
      pausedItems: r,
      hasItems: u,
      activeCount: d,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: h,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = en(), S = k(!1);
    let $ = null;
    Ct(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: r.value.length,
        completed: l.value.length
      }),
      (x, q) => {
        $ && (clearTimeout($), $ = null);
        const B = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, A = q && (q.active > 0 || q.paused > 0);
        B && A && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = F(() => {
      var B;
      if (s.items.length === 0) return 0;
      const x = l.value.length, q = ((B = o.value) == null ? void 0 : B.progress) || 0;
      return Math.round((x + q / 100) / s.items.length * 100);
    });
    function O(x) {
      m(x);
    }
    function T(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, q) => (a(), R(wt, { to: "body" }, [
      Fe(u) ? (a(), c("div", {
        key: 0,
        class: Se(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (B) => S.value = !S.value)
        }, [
          t("div", BE, [
            q[4] || (q[4] = t("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", VE, "(" + f(Fe(d)) + "/" + f(Fe(s).items.length) + ")", 1)
          ]),
          t("div", WE, [
            t("span", GE, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), c("div", JE, [
          Fe(o) ? (a(), c("div", XE, [
            q[6] || (q[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(Eo, {
              item: Fe(o),
              onCancel: q[1] || (q[1] = (B) => O(Fe(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Fe(r).length > 0 ? (a(), c("div", QE, [
            t("div", ZE, [
              t("span", eT, "Paused (" + f(Fe(r).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...B) => Fe(w) && Fe(w)(...B))
              }, "Resume All")
            ]),
            t("div", tT, [
              (a(!0), c(j, null, pe(Fe(r), (B) => (a(), R(Eo, {
                key: B.id,
                item: B,
                onResume: (A) => Fe(h)(B.id),
                onRemove: (A) => Fe(p)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Fe(n).length > 0 ? (a(), c("div", sT, [
            t("div", oT, [
              t("span", nT, "Queued (" + f(Fe(n).length) + ")", 1)
            ]),
            t("div", aT, [
              (a(!0), c(j, null, pe(Fe(n), (B) => (a(), R(Eo, {
                key: B.id,
                item: B,
                onCancel: (A) => O(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Fe(l).length > 0 ? (a(), c("div", lT, [
            t("div", iT, [
              t("span", rT, "Completed (" + f(Fe(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...B) => Fe(_) && Fe(_)(...B))
              }, "Clear")
            ]),
            t("div", cT, [
              (a(!0), c(j, null, pe(Fe(l).slice(0, 3), (B) => (a(), R(Eo, {
                key: B.id,
                item: B,
                onRemove: (A) => Fe(p)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Fe(i).length > 0 ? (a(), c("div", uT, [
            t("div", dT, [
              t("span", fT, "Failed (" + f(Fe(i).length) + ")", 1)
            ]),
            t("div", mT, [
              (a(!0), c(j, null, pe(Fe(i), (B) => (a(), R(Eo, {
                key: B.id,
                item: B,
                onRetry: (A) => Fe(v)(B.id),
                onRemove: (A) => Fe(p)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), c("div", jE, [
          t("div", HE, [
            t("div", {
              class: "progress-fill",
              style: Gt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Fe(o) ? (a(), c("div", KE, [
            t("span", qE, f(Fe(o).filename), 1),
            t("span", YE, f(T(Fe(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), pT = /* @__PURE__ */ me(vT, [["__scopeId", "data-v-60751cfa"]]), gT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', hT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', yT = {
  comfy: gT,
  phosphor: hT
}, Xa = "comfy", Or = "comfygit-theme";
let Ks = null, Ar = Xa;
function wT() {
  try {
    const e = localStorage.getItem(Or);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Xa;
}
function Nr(e = Xa) {
  Ks && Ks.remove(), Ks = document.createElement("style"), Ks.id = "comfygit-theme-styles", Ks.setAttribute("data-theme", e), Ks.textContent = yT[e], document.head.appendChild(Ks), document.body.setAttribute("data-comfygit-theme", e), Ar = e;
  try {
    localStorage.setItem(Or, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function bT() {
  return Ar;
}
function _T(e) {
  Nr(e);
}
function kT(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Qa = document.createElement("link");
Qa.rel = "stylesheet";
Qa.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Qa);
const $T = wT();
Nr($T);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), _T(e);
  },
  getTheme: () => {
    const e = bT();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let qt = null, Lt = null, Fo = null, To = null, Yl = null;
const vo = k(null);
let Za = "managed", Ur = !1;
async function yn() {
  var e;
  if (!((e = Os) != null && e.api)) return null;
  try {
    const s = await Os.api.fetchApi("/v2/comfygit/status");
    s.ok && (vo.value = await s.json());
  } catch {
  }
}
async function Ca() {
  var e;
  if ((e = Os) != null && e.api)
    try {
      const s = await Os.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        Za = o.state, Ur = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function xa() {
  var s;
  if (Za === "managed" || !Ur) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function CT() {
  if (!vo.value) return !1;
  const e = vo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || vo.value.has_changes;
}
function Jl(e) {
  qt && qt.remove(), qt = document.createElement("div"), qt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", qt.appendChild(s), qt.addEventListener("click", (l) => {
    l.target === qt && ua();
  });
  const o = (l) => {
    l.key === "Escape" && (ua(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Ka({
    render: () => Wn(_E, {
      initialView: e,
      onClose: ua,
      onStatusUpdate: async (l) => {
        vo.value = l, Bo(), await Ca(), Sa(), xa();
      }
    })
  }).mount(s), document.body.appendChild(qt);
}
function ua() {
  qt && (qt.remove(), qt = null);
}
function xT(e) {
  Po(), Lt = document.createElement("div"), Lt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Lt.style.position = "fixed", Lt.style.top = `${s.bottom + 8}px`, Lt.style.right = `${window.innerWidth - s.right}px`, Lt.style.zIndex = "10001";
  const o = (l) => {
    Lt && !Lt.contains(l.target) && l.target !== e && (Po(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Po(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Fo = Ka({
    render: () => Wn(Mr, {
      status: vo.value,
      onClose: Po,
      onCommitted: (l) => {
        Po(), ST(l.success, l.message), yn().then(Bo);
      }
    })
  }), Fo.mount(Lt), document.body.appendChild(Lt);
}
function Po() {
  Fo && (Fo.unmount(), Fo = null), Lt && (Lt.remove(), Lt = null);
}
function ST(e, s) {
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
  i.textContent = s, o.appendChild(i), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function IT() {
  To || (To = document.createElement("div"), To.className = "comfygit-download-queue-root", Yl = Ka({
    render: () => Wn(pT)
  }), Yl.mount(To), document.body.appendChild(To), console.log("[ComfyGit] Model download queue mounted"));
}
let Ft = null;
function Bo() {
  if (!Ft) return;
  const e = Ft.querySelector(".commit-indicator");
  e && (e.style.display = CT() ? "block" : "none");
}
function Sa() {
  if (!Ft) return;
  const e = Za !== "managed";
  Ft.disabled = e, Ft.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const zr = document.createElement("style");
zr.textContent = `
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
document.head.appendChild(zr);
Os.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var l, i;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Jl, Ft = document.createElement("button"), Ft.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ft.innerHTML = 'Commit <span class="commit-indicator"></span>', Ft.title = "Quick Commit", Ft.onclick = () => xT(Ft), e.appendChild(s), e.appendChild(Ft), (i = (l = Os.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Os.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), IT();
    const { loadPendingDownloads: o } = en();
    o(), await Promise.all([yn(), Ca()]), Bo(), Sa(), xa(), setTimeout(xa, 100), setInterval(async () => {
      await Promise.all([yn(), Ca()]), Bo(), Sa();
    }, 3e4);
    const n = Os.api;
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
        const h = document.createElement("span");
        h.textContent = "Workflows updated - refresh required", v.appendChild(h);
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
        const p = document.createElement("button");
        p.textContent = "×", p.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, p.onmouseover = () => p.style.opacity = "1", p.onmouseout = () => p.style.opacity = "0.6", p.onclick = () => v.remove(), v.appendChild(p), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(v) {
        const h = document.getElementById("comfygit-error-toast");
        h && h.remove();
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
        const p = document.createElement("span");
        p.textContent = "⚠️", p.style.fontSize = "20px", w.appendChild(p);
        const _ = document.createElement("div");
        _.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const S = document.createElement("div");
        S.textContent = "Node installation failed", S.style.cssText = "font-weight: 600; color: #e53935;", _.appendChild(S);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", _.appendChild($), w.appendChild(_);
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
          w.remove(), Jl("debug-env");
        }, w.appendChild(P);
        const O = document.createElement("button");
        O.textContent = "×", O.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, O.onmouseover = () => O.style.opacity = "1", O.onmouseout = () => O.style.opacity = "0.6", O.onclick = () => w.remove(), w.appendChild(O), document.body.appendChild(w), console.log("[ComfyGit] Manager error toast displayed:", v), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && w.remove();
        }, 1e4);
      };
      n.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: h, workflow_name: w } = v.detail;
        console.log(`[ComfyGit] Workflow ${h}: ${w}`), await yn(), Bo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      n.addEventListener("status", async (v) => {
        const h = v.detail != null;
        h && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), r()) : u()), m = h;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (v) => {
        const h = kT(v.detail);
        h && d(h);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
