import { app as Os } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Pa(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const st = {}, co = [], ms = () => {
}, Zl = () => !1, Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ra = (e) => e.startsWith("onUpdate:"), gt = Object.assign, Ma = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Vr = Object.prototype.hasOwnProperty, Ze = (e, s) => Vr.call(e, s), Ue = Array.isArray, uo = (e) => Xo(e) === "[object Map]", wo = (e) => Xo(e) === "[object Set]", nl = (e) => Xo(e) === "[object Date]", Be = (e) => typeof e == "function", ut = (e) => typeof e == "string", Zt = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", ei = (e) => (tt(e) || Be(e)) && Be(e.then) && Be(e.catch), ti = Object.prototype.toString, Xo = (e) => ti.call(e), Wr = (e) => Xo(e).slice(8, -1), si = (e) => Xo(e) === "[object Object]", Da = (e) => ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Do = /* @__PURE__ */ Pa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ln = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Gr = /-\w/g, Wt = Ln(
  (e) => e.replace(Gr, (s) => s.slice(1).toUpperCase())
), jr = /\B([A-Z])/g, zs = Ln(
  (e) => e.replace(jr, "-$1").toLowerCase()
), On = Ln((e) => e.charAt(0).toUpperCase() + e.slice(1)), qn = Ln(
  (e) => e ? `on${On(e)}` : ""
), As = (e, s) => !Object.is(e, s), vn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, oi = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, An = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Hr = (e) => {
  const s = ut(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let al;
const Nn = () => al || (al = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gt(e) {
  if (Ue(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ut(n) ? Jr(n) : Gt(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ut(e) || tt(e))
    return e;
}
const Kr = /;(?![^(]*\))/g, qr = /:([^]+)/, Yr = /\/\*[^]*?\*\//g;
function Jr(e) {
  const s = {};
  return e.replace(Yr, "").split(Kr).forEach((o) => {
    if (o) {
      const n = o.split(qr);
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
const Xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qr = /* @__PURE__ */ Pa(Xr);
function ni(e) {
  return !!e || e === "";
}
function Zr(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = Qs(e[n], s[n]);
  return o;
}
function Qs(e, s) {
  if (e === s) return !0;
  let o = nl(e), n = nl(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = Zt(e), n = Zt(s), o || n)
    return e === s;
  if (o = Ue(e), n = Ue(s), o || n)
    return o && n ? Zr(e, s) : !1;
  if (o = tt(e), n = tt(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !Qs(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function La(e, s) {
  return e.findIndex((o) => Qs(o, s));
}
const ai = (e) => !!(e && e.__v_isRef === !0), f = (e) => ut(e) ? e : e == null ? "" : Ue(e) || tt(e) && (e.toString === ti || !Be(e.toString)) ? ai(e) ? f(e.value) : JSON.stringify(e, li, 2) : String(e), li = (e, s) => ai(s) ? li(e, s.value) : uo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Yn(n, i) + " =>"] = l, o),
    {}
  )
} : wo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Yn(o))
} : Zt(s) ? Yn(s) : tt(s) && !Ue(s) && !si(s) ? String(s) : s, Yn = (e, s = "") => {
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
class ec {
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
function tc() {
  return Dt;
}
let nt;
const Jn = /* @__PURE__ */ new WeakSet();
class ii {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && Dt.active && Dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jn.has(this) && (Jn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ci(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ll(this), ui(this);
    const s = nt, o = Jt;
    nt = this, Jt = !0;
    try {
      return this.fn();
    } finally {
      di(this), nt = s, Jt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Na(s);
      this.deps = this.depsTail = void 0, ll(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    va(this) && this.run();
  }
  get dirty() {
    return va(this);
  }
}
let ri = 0, Lo, Oo;
function ci(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Oo, Oo = e;
    return;
  }
  e.next = Lo, Lo = e;
}
function Oa() {
  ri++;
}
function Aa() {
  if (--ri > 0)
    return;
  if (Oo) {
    let s = Oo;
    for (Oo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Lo; ) {
    let s = Lo;
    for (Lo = void 0; s; ) {
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
function ui(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function di(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), Na(n), sc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function va(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (fi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function fi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wo) || (e.globalVersion = Wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !va(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = Jt;
  nt = e, Jt = !0;
  try {
    ui(e);
    const l = e.fn(e._value);
    (s.version === 0 || As(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, Jt = n, di(e), e.flags &= -3;
  }
}
function Na(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      Na(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function sc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Jt = !0;
const mi = [];
function $s() {
  mi.push(Jt), Jt = !1;
}
function Cs() {
  const e = mi.pop();
  Jt = e === void 0 ? !0 : e;
}
function ll(e) {
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
let Wo = 0;
class oc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ua {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!nt || !Jt || nt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== nt)
      o = this.activeLink = new oc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, vi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = nt.depsTail, o.nextDep = void 0, nt.depsTail.nextDep = o, nt.depsTail = o, nt.deps === o && (nt.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, Wo++, this.notify(s);
  }
  notify(s) {
    Oa();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Aa();
    }
  }
}
function vi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        vi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const pa = /* @__PURE__ */ new WeakMap(), Js = Symbol(
  ""
), ga = Symbol(
  ""
), Go = Symbol(
  ""
);
function _t(e, s, o) {
  if (Jt && nt) {
    let n = pa.get(e);
    n || pa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new Ua()), l.map = n, l.key = o), l.track();
  }
}
function _s(e, s, o, n, l, i) {
  const c = pa.get(e);
  if (!c) {
    Wo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Oa(), s === "clear")
    c.forEach(u);
  else {
    const d = Ue(e), m = d && Da(o);
    if (d && o === "length") {
      const v = Number(n);
      c.forEach((h, w) => {
        (w === "length" || w === Go || !Zt(w) && w >= v) && u(h);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(Go)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(Js)), uo(e) && u(c.get(ga)));
          break;
        case "delete":
          d || (u(c.get(Js)), uo(e) && u(c.get(ga)));
          break;
        case "set":
          uo(e) && u(c.get(Js));
          break;
      }
  }
  Aa();
}
function oo(e) {
  const s = Je(e);
  return s === e ? s : (_t(s, "iterate", Go), Bt(e) ? s : s.map(es));
}
function Un(e) {
  return _t(e = Je(e), "iterate", Go), e;
}
function Ms(e, s) {
  return xs(e) ? Xs(e) ? go(es(s)) : go(s) : es(s);
}
const nc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xn(this, Symbol.iterator, (e) => Ms(this, e));
  },
  concat(...e) {
    return oo(this).concat(
      ...e.map((s) => Ue(s) ? oo(s) : s)
    );
  },
  entries() {
    return Xn(this, "entries", (e) => (e[1] = Ms(this, e[1]), e));
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
    return Qn(this, "includes", e);
  },
  indexOf(...e) {
    return Qn(this, "indexOf", e);
  },
  join(e) {
    return oo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qn(this, "lastIndexOf", e);
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
    return il(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return il(this, "reduceRight", e, s);
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
    return oo(this).toReversed();
  },
  toSorted(e) {
    return oo(this).toSorted(e);
  },
  toSpliced(...e) {
    return oo(this).toSpliced(...e);
  },
  unshift(...e) {
    return xo(this, "unshift", e);
  },
  values() {
    return Xn(this, "values", (e) => Ms(this, e));
  }
};
function Xn(e, s, o) {
  const n = Un(e), l = n[s]();
  return n !== e && !Bt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const ac = Array.prototype;
function hs(e, s, o, n, l, i) {
  const c = Un(e), u = c !== e && !Bt(e), d = c[s];
  if (d !== ac[s]) {
    const h = d.apply(e, i);
    return u ? es(h) : h;
  }
  let m = o;
  c !== e && (u ? m = function(h, w) {
    return o.call(this, Ms(e, h), w, e);
  } : o.length > 2 && (m = function(h, w) {
    return o.call(this, h, w, e);
  }));
  const v = d.call(c, m, n);
  return u && l ? l(v) : v;
}
function il(e, s, o, n) {
  const l = Un(e);
  let i = o;
  return l !== e && (Bt(e) ? o.length > 3 && (i = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : i = function(c, u, d) {
    return o.call(this, c, Ms(e, u), d, e);
  }), l[s](i, ...n);
}
function Qn(e, s, o) {
  const n = Je(e);
  _t(n, "iterate", Go);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Ba(o[0]) ? (o[0] = Je(o[0]), n[s](...o)) : l;
}
function xo(e, s, o = []) {
  $s(), Oa();
  const n = Je(e)[s].apply(e, o);
  return Aa(), Cs(), n;
}
const lc = /* @__PURE__ */ Pa("__proto__,__v_isRef,__isVue"), pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zt)
);
function ic(e) {
  Zt(e) || (e = String(e));
  const s = Je(this);
  return _t(s, "has", e), s.hasOwnProperty(e);
}
class gi {
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
      return n === (l ? i ? hc : _i : i ? wi : yi).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = Ue(s);
    if (!l) {
      let d;
      if (c && (d = nc[o]))
        return d;
      if (o === "hasOwnProperty")
        return ic;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(s) ? s : n
    );
    if ((Zt(o) ? pi.has(o) : lc(o)) || (l || _t(s, "get", o), i))
      return u;
    if ($t(u)) {
      const d = c && Da(o) ? u : u.value;
      return l && tt(d) ? bn(d) : d;
    }
    return tt(u) ? l ? bn(u) : Fs(u) : u;
  }
}
class hi extends gi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Ue(s) && Da(o);
    if (!this._isShallow) {
      const m = xs(i);
      if (!Bt(n) && !xs(n) && (i = Je(i), n = Je(n)), !c && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const u = c ? Number(o) < s.length : Ze(s, o), d = Reflect.set(
      s,
      o,
      n,
      $t(s) ? s : l
    );
    return s === Je(l) && (u ? As(n, i) && _s(s, "set", o, n) : _s(s, "add", o, n)), d;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && _s(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!Zt(o) || !pi.has(o)) && _t(s, "has", o), n;
  }
  ownKeys(s) {
    return _t(
      s,
      "iterate",
      Ue(s) ? "length" : Js
    ), Reflect.ownKeys(s);
  }
}
class rc extends gi {
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
const cc = /* @__PURE__ */ new hi(), uc = /* @__PURE__ */ new rc(), dc = /* @__PURE__ */ new hi(!0);
const ha = (e) => e, nn = (e) => Reflect.getPrototypeOf(e);
function fc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Je(l), c = uo(i), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...n), v = o ? ha : s ? go : es;
    return !s && _t(
      i,
      "iterate",
      d ? ga : Js
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
function an(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mc(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, c = Je(i), u = Je(l);
      e || (As(l, u) && _t(c, "get", l), _t(c, "get", u));
      const { has: d } = nn(c), m = s ? ha : e ? go : es;
      if (d.call(c, l))
        return m(i.get(l));
      if (d.call(c, u))
        return m(i.get(u));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && _t(Je(l), "iterate", Js), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Je(i), u = Je(l);
      return e || (As(l, u) && _t(c, "has", l), _t(c, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const c = this, u = c.__v_raw, d = Je(u), m = s ? ha : e ? go : es;
      return !e && _t(d, "iterate", Js), u.forEach((v, h) => l.call(i, m(v), m(h), c));
    }
  };
  return gt(
    o,
    e ? {
      add: an("add"),
      set: an("set"),
      delete: an("delete"),
      clear: an("clear")
    } : {
      add(l) {
        !s && !Bt(l) && !xs(l) && (l = Je(l));
        const i = Je(this);
        return nn(i).has.call(i, l) || (i.add(l), _s(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Bt(i) && !xs(i) && (i = Je(i));
        const c = Je(this), { has: u, get: d } = nn(c);
        let m = u.call(c, l);
        m || (l = Je(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, i), m ? As(i, v) && _s(c, "set", l, i) : _s(c, "add", l, i), this;
      },
      delete(l) {
        const i = Je(this), { has: c, get: u } = nn(i);
        let d = c.call(i, l);
        d || (l = Je(l), d = c.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && _s(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Je(this), i = l.size !== 0, c = l.clear();
        return i && _s(
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
    o[l] = fc(l, e, s);
  }), o;
}
function za(e, s) {
  const o = mc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const vc = {
  get: /* @__PURE__ */ za(!1, !1)
}, pc = {
  get: /* @__PURE__ */ za(!1, !0)
}, gc = {
  get: /* @__PURE__ */ za(!0, !1)
};
const yi = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), hc = /* @__PURE__ */ new WeakMap();
function yc(e) {
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
function wc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yc(Wr(e));
}
function Fs(e) {
  return xs(e) ? e : Fa(
    e,
    !1,
    cc,
    vc,
    yi
  );
}
function _c(e) {
  return Fa(
    e,
    !1,
    dc,
    pc,
    wi
  );
}
function bn(e) {
  return Fa(
    e,
    !0,
    uc,
    gc,
    _i
  );
}
function Fa(e, s, o, n, l) {
  if (!tt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = wc(e);
  if (i === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
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
function Ba(e) {
  return e ? !!e.__v_raw : !1;
}
function Je(e) {
  const s = e && e.__v_raw;
  return s ? Je(s) : e;
}
function bc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && oi(e, "__v_skip", !0), e;
}
const es = (e) => tt(e) ? Fs(e) : e, go = (e) => tt(e) ? bn(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return kc(e, !1);
}
function kc(e, s) {
  return $t(e) ? e : new $c(e, s);
}
class $c {
  constructor(s, o) {
    this.dep = new Ua(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Je(s), this._value = o ? s : es(s), this.__v_isShallow = o;
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
const Cc = {
  get: (e, s, o) => s === "__v_raw" ? e : Fe(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function bi(e) {
  return Xs(e) ? e : new Proxy(e, Cc);
}
class xc {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Ua(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    nt !== this)
      return ci(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return fi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Sc(e, s, o = !1) {
  let n, l;
  return Be(e) ? n = e : (n = e.get, l = e.set), new xc(n, l, o);
}
const ln = {}, kn = /* @__PURE__ */ new WeakMap();
let qs;
function Ic(e, s = !1, o = qs) {
  if (o) {
    let n = kn.get(o);
    n || kn.set(o, n = []), n.push(e);
  }
}
function Ec(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: u, call: d } = o, m = (S) => l ? S : Bt(S) || l === !1 || l === 0 ? bs(S, 1) : bs(S);
  let v, h, w, p, _ = !1, C = !1;
  if ($t(e) ? (h = () => e.value, _ = Bt(e)) : Xs(e) ? (h = () => m(e), _ = !0) : Ue(e) ? (C = !0, _ = e.some((S) => Xs(S) || Bt(S)), h = () => e.map((S) => {
    if ($t(S))
      return S.value;
    if (Xs(S))
      return m(S);
    if (Be(S))
      return d ? d(S, 2) : S();
  })) : Be(e) ? s ? h = d ? () => d(e, 2) : e : h = () => {
    if (w) {
      $s();
      try {
        w();
      } finally {
        Cs();
      }
    }
    const S = qs;
    qs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      qs = S;
    }
  } : h = ms, s && l) {
    const S = h, q = l === !0 ? 1 / 0 : l;
    h = () => bs(S(), q);
  }
  const $ = tc(), P = () => {
    v.stop(), $ && $.active && Ma($.effects, v);
  };
  if (i && s) {
    const S = s;
    s = (...q) => {
      S(...q), P();
    };
  }
  let L = C ? new Array(e.length).fill(ln) : ln;
  const T = (S) => {
    if (!(!(v.flags & 1) || !v.dirty && !S))
      if (s) {
        const q = v.run();
        if (l || _ || (C ? q.some((B, A) => As(B, L[A])) : As(q, L))) {
          w && w();
          const B = qs;
          qs = v;
          try {
            const A = [
              q,
              // pass undefined as the old value when it's changed for the first time
              L === ln ? void 0 : C && L[0] === ln ? [] : L,
              p
            ];
            L = q, d ? d(s, 3, A) : (
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
  return u && u(T), v = new ii(h), v.scheduler = c ? () => c(T, !1) : T, p = (S) => Ic(S, !1, v), w = v.onStop = () => {
    const S = kn.get(v);
    if (S) {
      if (d)
        d(S, 4);
      else
        for (const q of S) q();
      kn.delete(v);
    }
  }, s ? n ? T(!0) : L = v.run() : c ? c(T.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function bs(e, s = 1 / 0, o) {
  if (s <= 0 || !tt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    bs(e.value, s, o);
  else if (Ue(e))
    for (let n = 0; n < e.length; n++)
      bs(e[n], s, o);
  else if (wo(e) || uo(e))
    e.forEach((n) => {
      bs(n, s, o);
    });
  else if (si(e)) {
    for (const n in e)
      bs(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && bs(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Qo(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    zn(l, s, o);
  }
}
function ts(e, s, o, n) {
  if (Be(e)) {
    const l = Qo(e, s, o, n);
    return l && ei(l) && l.catch((i) => {
      zn(i, s, o);
    }), l;
  }
  if (Ue(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(ts(e[i], s, o, n));
    return l;
  }
}
function zn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = s && s.appContext.config || st;
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
      $s(), Qo(i, null, 10, [
        e,
        d,
        m
      ]), Cs();
      return;
    }
  }
  Tc(e, o, l, n, c);
}
function Tc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let us = -1;
const fo = [];
let Ds = null, lo = 0;
const ki = /* @__PURE__ */ Promise.resolve();
let $n = null;
function Zo(e) {
  const s = $n || ki;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Pc(e) {
  let s = us + 1, o = It.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = It[n], i = jo(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Va(e) {
  if (!(e.flags & 1)) {
    const s = jo(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= jo(o) ? It.push(e) : It.splice(Pc(s), 0, e), e.flags |= 1, $i();
  }
}
function $i() {
  $n || ($n = ki.then(xi));
}
function Rc(e) {
  Ue(e) ? fo.push(...e) : Ds && e.id === -1 ? Ds.splice(lo + 1, 0, e) : e.flags & 1 || (fo.push(e), e.flags |= 1), $i();
}
function rl(e, s, o = us + 1) {
  for (; o < It.length; o++) {
    const n = It[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      It.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ci(e) {
  if (fo.length) {
    const s = [...new Set(fo)].sort(
      (o, n) => jo(o) - jo(n)
    );
    if (fo.length = 0, Ds) {
      Ds.push(...s);
      return;
    }
    for (Ds = s, lo = 0; lo < Ds.length; lo++) {
      const o = Ds[lo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Ds = null, lo = 0;
  }
}
const jo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xi(e) {
  try {
    for (us = 0; us < It.length; us++) {
      const s = It[us];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), Qo(
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
    us = -1, It.length = 0, Ci(), $n = null, (It.length || fo.length) && xi();
  }
}
let yt = null, Si = null;
function Cn(e) {
  const s = yt;
  return yt = e, Si = e && e.type.__scopeId || null, s;
}
function g(e, s = yt, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && In(-1);
    const i = Cn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Cn(i), n._d && In(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (yt === null)
    return e;
  const o = Gn(yt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, u, d = st] = s[l];
    i && (Be(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && bs(c), n.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function Gs(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    i && (u.oldValue = i[c].value);
    let d = u.dir[n];
    d && ($s(), ts(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Cs());
  }
}
const Ii = Symbol("_vte"), Ei = (e) => e.__isTeleport, Ao = (e) => e && (e.disabled || e.disabled === ""), cl = (e) => e && (e.defer || e.defer === ""), ul = (e) => typeof SVGElement < "u" && e instanceof SVGElement, dl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ya = (e, s) => {
  const o = e && e.to;
  return ut(o) ? s ? s(o) : null : o;
}, Ti = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, u, d, m) {
    const {
      mc: v,
      pc: h,
      pbc: w,
      o: { insert: p, querySelector: _, createText: C, createComment: $ }
    } = m, P = Ao(s.props);
    let { shapeFlag: L, children: T, dynamicChildren: S } = s;
    if (e == null) {
      const q = s.el = C(""), B = s.anchor = C("");
      p(q, o, n), p(B, o, n);
      const A = (E, O) => {
        L & 16 && v(
          T,
          E,
          O,
          l,
          i,
          c,
          u,
          d
        );
      }, I = () => {
        const E = s.target = ya(s.props, _), O = Pi(E, s, C, p);
        E && (c !== "svg" && ul(E) ? c = "svg" : c !== "mathml" && dl(E) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), P || (A(E, O), pn(s, !1)));
      };
      P && (A(o, B), pn(s, !0)), cl(s.props) ? (s.el.__isMounted = !1, St(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (cl(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Ti.process(
            e,
            s,
            o,
            n,
            l,
            i,
            c,
            u,
            d,
            m
          );
        }, i);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const q = s.anchor = e.anchor, B = s.target = e.target, A = s.targetAnchor = e.targetAnchor, I = Ao(e.props), E = I ? o : B, O = I ? q : A;
      if (c === "svg" || ul(B) ? c = "svg" : (c === "mathml" || dl(B)) && (c = "mathml"), S ? (w(
        e.dynamicChildren,
        S,
        E,
        l,
        i,
        c,
        u
      ), Ka(e, s, !0)) : d || h(
        e,
        s,
        E,
        O,
        l,
        i,
        c,
        u,
        !1
      ), P)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : rn(
          s,
          o,
          q,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const re = s.target = ya(
          s.props,
          _
        );
        re && rn(
          s,
          re,
          null,
          m,
          0
        );
      } else I && rn(
        s,
        B,
        A,
        m,
        1
      );
      pn(s, P);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: h,
      props: w
    } = e;
    if (h && (l(m), l(v)), i && l(d), c & 16) {
      const p = i || !Ao(w);
      for (let _ = 0; _ < u.length; _++) {
        const C = u[_];
        n(
          C,
          s,
          o,
          p,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: rn,
  hydrate: Mc
};
function rn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: m, props: v } = e, h = i === 2;
  if (h && n(c, s, o), (!h || Ao(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  h && n(u, s, o);
}
function Mc(e, s, o, n, l, i, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: m, createText: v }
}, h) {
  function w(C, $, P, L) {
    $.anchor = h(
      c(C),
      $,
      u(C),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = L;
  }
  const p = s.target = ya(
    s.props,
    d
  ), _ = Ao(s.props);
  if (p) {
    const C = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          C,
          C && c(C)
        );
      else {
        s.anchor = c(e);
        let $ = C;
        for (; $; ) {
          if ($ && $.nodeType === 8) {
            if ($.data === "teleport start anchor")
              s.targetStart = $;
            else if ($.data === "teleport anchor") {
              s.targetAnchor = $, p._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          $ = c($);
        }
        s.targetAnchor || Pi(p, s, v, m), h(
          C && c(C),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    pn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const wt = Ti;
function pn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Pi(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Ii] = i, e && (n(l, e), n(i, e)), i;
}
const ws = Symbol("_leaveCb"), cn = Symbol("_enterCb");
function Ri() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return et(() => {
    e.isMounted = !0;
  }), zi(() => {
    e.isUnmounting = !0;
  }), e;
}
const zt = [Function, Array], Mi = {
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
}, Di = (e) => {
  const s = e.subTree;
  return s.component ? Di(s.component) : s;
}, Dc = {
  name: "BaseTransition",
  props: Mi,
  setup(e, { slots: s }) {
    const o = Ya(), n = Ri();
    return () => {
      const l = s.default && Wa(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Li(l), c = Je(e), { mode: u } = c;
      if (n.isLeaving)
        return Zn(i);
      const d = fl(i);
      if (!d)
        return Zn(i);
      let m = Ho(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (h) => m = h
      );
      d.type !== bt && Zs(d, m);
      let v = o.subTree && fl(o.subTree);
      if (v && v.type !== bt && !Ys(v, d) && Di(o).type !== bt) {
        let h = Ho(
          v,
          c,
          n,
          o
        );
        if (Zs(v, h), u === "out-in" && d.type !== bt)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete h.afterLeave, v = void 0;
          }, Zn(i);
        u === "in-out" && d.type !== bt ? h.delayLeave = (w, p, _) => {
          const C = Oi(
            n,
            v
          );
          C[String(v.key)] = v, w[ws] = () => {
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
function Li(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== bt) {
        s = o;
        break;
      }
  }
  return s;
}
const Lc = Dc;
function Oi(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function Ho(e, s, o, n, l) {
  const {
    appear: i,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: h,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: C,
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: L,
    onAppearCancelled: T
  } = s, S = String(e.key), q = Oi(o, e), B = (E, O) => {
    E && ts(
      E,
      n,
      9,
      O
    );
  }, A = (E, O) => {
    const re = O[1];
    B(E, O), Ue(E) ? E.every((Y) => Y.length <= 1) && re() : E.length <= 1 && re();
  }, I = {
    mode: c,
    persisted: u,
    beforeEnter(E) {
      let O = d;
      if (!o.isMounted)
        if (i)
          O = $ || d;
        else
          return;
      E[ws] && E[ws](
        !0
        /* cancelled */
      );
      const re = q[S];
      re && Ys(e, re) && re.el[ws] && re.el[ws](), B(O, [E]);
    },
    enter(E) {
      let O = m, re = v, Y = h;
      if (!o.isMounted)
        if (i)
          O = P || m, re = L || v, Y = T || h;
        else
          return;
      let H = !1;
      const te = E[cn] = (Q) => {
        H || (H = !0, Q ? B(Y, [E]) : B(re, [E]), I.delayedLeave && I.delayedLeave(), E[cn] = void 0);
      };
      O ? A(O, [E, te]) : te();
    },
    leave(E, O) {
      const re = String(e.key);
      if (E[cn] && E[cn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return O();
      B(w, [E]);
      let Y = !1;
      const H = E[ws] = (te) => {
        Y || (Y = !0, O(), te ? B(C, [E]) : B(_, [E]), E[ws] = void 0, q[re] === e && delete q[re]);
      };
      q[re] = e, p ? A(p, [E, H]) : H();
    },
    clone(E) {
      const O = Ho(
        E,
        s,
        o,
        n,
        l
      );
      return l && l(O), O;
    }
  };
  return I;
}
function Zn(e) {
  if (Fn(e))
    return e = Ns(e), e.children = null, e;
}
function fl(e) {
  if (!Fn(e))
    return Ei(e.type) && e.children ? Li(e.children) : e;
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
function Wa(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let c = e[i];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === G ? (c.patchFlag & 128 && l++, n = n.concat(
      Wa(c.children, s, u)
    )) : (s || c.type !== bt) && n.push(u != null ? Ns(c, { key: u }) : c);
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
    gt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xn = /* @__PURE__ */ new WeakMap();
function No(e, s, o, n, l = !1) {
  if (Ue(e)) {
    e.forEach(
      (_, C) => No(
        _,
        s && (Ue(s) ? s[C] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (mo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && No(e, s, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Gn(n.component) : n.el, c = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === st ? u.refs = {} : u.refs, h = u.setupState, w = Je(h), p = h === st ? Zl : (_) => Ze(w, _);
  if (m != null && m !== d) {
    if (ml(s), ut(m))
      v[m] = null, p(m) && (h[m] = null);
    else if ($t(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (Be(d))
    Qo(d, u, 12, [c, v]);
  else {
    const _ = ut(d), C = $t(d);
    if (_ || C) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(d) ? h[d] : v[d] : d.value;
          if (l)
            Ue(P) && Ma(P, i);
          else if (Ue(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[d] = [i], p(d) && (h[d] = v[d]);
          else {
            const L = [i];
            d.value = L, e.k && (v[e.k] = L);
          }
        } else _ ? (v[d] = c, p(d) && (h[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          $(), xn.delete(e);
        };
        P.id = -1, xn.set(e, P), St(P, o);
      } else
        ml(e), $();
    }
  }
}
function ml(e) {
  const s = xn.get(e);
  s && (s.flags |= 8, xn.delete(e));
}
Nn().requestIdleCallback;
Nn().cancelIdleCallback;
const mo = (e) => !!e.type.__asyncLoader, Fn = (e) => e.type.__isKeepAlive;
function Oc(e, s) {
  Ni(e, "a", s);
}
function Ac(e, s) {
  Ni(e, "da", s);
}
function Ni(e, s, o = kt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Bn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Fn(l.parent.vnode) && Nc(n, s, o, l), l = l.parent;
  }
}
function Nc(e, s, o, n) {
  const l = Bn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  to(() => {
    Ma(n[s], l);
  }, o);
}
function Bn(e, s, o = kt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...c) => {
      $s();
      const u = en(o), d = ts(s, o, e, c);
      return u(), Cs(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ss = (e) => (s, o = kt) => {
  (!Yo || e === "sp") && Bn(e, (...n) => s(...n), o);
}, Uc = Ss("bm"), et = Ss("m"), zc = Ss(
  "bu"
), Ui = Ss("u"), zi = Ss(
  "bum"
), to = Ss("um"), Fc = Ss(
  "sp"
), Bc = Ss("rtg"), Vc = Ss("rtc");
function Wc(e, s = kt) {
  Bn("ec", e, s);
}
const Gc = "components", Fi = Symbol.for("v-ndc");
function Ga(e) {
  return ut(e) ? jc(Gc, e, !1) || e : e || Fi;
}
function jc(e, s, o = !0, n = !1) {
  const l = yt || kt;
  if (l) {
    const i = l.type;
    {
      const u = Du(
        i,
        !1
      );
      if (u && (u === s || u === Wt(s) || u === On(Wt(s))))
        return i;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      vl(l[e] || i[e], s) || // global registration
      vl(l.appContext[e], s)
    );
    return !c && n ? i : c;
  }
}
function vl(e, s) {
  return e && (e[s] || e[Wt(s)] || e[On(Wt(s))]);
}
function pe(e, s, o, n) {
  let l;
  const i = o, c = Ue(e);
  if (c || ut(e)) {
    const u = c && Xs(e);
    let d = !1, m = !1;
    u && (d = !Bt(e), m = xs(e), e = Un(e)), l = new Array(e.length);
    for (let v = 0, h = e.length; v < h; v++)
      l[v] = s(
        d ? m ? go(es(e[v])) : es(e[v]) : e[v],
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
  if (yt.ce || yt.parent && mo(yt.parent) && yt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), R(
      G,
      null,
      [x("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Bi(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    G,
    {
      key: (u && !Zt(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function Bi(e) {
  return e.some((s) => qo(s) ? !(s.type === bt || s.type === G && !Bi(s.children)) : !0) ? e : null;
}
const wa = (e) => e ? lr(e) ? Gn(e) : wa(e.parent) : null, Uo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ gt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => wa(e.parent),
    $root: (e) => wa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Va(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zo.bind(e.proxy)),
    $watch: (e) => ou.bind(e)
  })
), ea = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), Hc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: c, type: u, appContext: d } = e;
    if (s[0] !== "$") {
      const w = c[s];
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
        if (ea(n, s))
          return c[s] = 1, n[s];
        if (l !== st && Ze(l, s))
          return c[s] = 2, l[s];
        if (Ze(i, s))
          return c[s] = 3, i[s];
        if (o !== st && Ze(o, s))
          return c[s] = 4, o[s];
        _a && (c[s] = 0);
      }
    }
    const m = Uo[s];
    let v, h;
    if (m)
      return s === "$attrs" && _t(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== st && Ze(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      h = d.config.globalProperties, Ze(h, s)
    )
      return h[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return ea(l, s) ? (l[s] = o, !0) : n !== st && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== st && u[0] !== "$" && Ze(e, u) || ea(s, u) || Ze(i, u) || Ze(n, u) || Ze(Uo, u) || Ze(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Ze(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function pl(e) {
  return Ue(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let _a = !0;
function Kc(e) {
  const s = Wi(e), o = e.proxy, n = e.ctx;
  _a = !1, s.beforeCreate && gl(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: i,
    methods: c,
    watch: u,
    provide: d,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: h,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: C,
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: L,
    destroyed: T,
    unmounted: S,
    render: q,
    renderTracked: B,
    renderTriggered: A,
    errorCaptured: I,
    serverPrefetch: E,
    // public API
    expose: O,
    inheritAttrs: re,
    // assets
    components: Y,
    directives: H,
    filters: te
  } = s;
  if (m && qc(m, n, null), c)
    for (const U in c) {
      const M = c[U];
      Be(M) && (n[U] = M.bind(o));
    }
  if (l) {
    const U = l.call(o, o);
    tt(U) && (e.data = Fs(U));
  }
  if (_a = !0, i)
    for (const U in i) {
      const M = i[U], we = Be(M) ? M.bind(o, o) : Be(M.get) ? M.get.bind(o, o) : ms, ve = !Be(M) && Be(M.set) ? M.set.bind(o) : ms, Ie = F({
        get: we,
        set: ve
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (Me) => Ie.value = Me
      });
    }
  if (u)
    for (const U in u)
      Vi(u[U], n, o, U);
  if (d) {
    const U = Be(d) ? d.call(o) : d;
    Reflect.ownKeys(U).forEach((M) => {
      eu(M, U[M]);
    });
  }
  v && gl(v, e, "c");
  function N(U, M) {
    Ue(M) ? M.forEach((we) => U(we.bind(o))) : M && U(M.bind(o));
  }
  if (N(Uc, h), N(et, w), N(zc, p), N(Ui, _), N(Oc, C), N(Ac, $), N(Wc, I), N(Vc, B), N(Bc, A), N(zi, L), N(to, S), N(Fc, E), Ue(O))
    if (O.length) {
      const U = e.exposed || (e.exposed = {});
      O.forEach((M) => {
        Object.defineProperty(U, M, {
          get: () => o[M],
          set: (we) => o[M] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === ms && (e.render = q), re != null && (e.inheritAttrs = re), Y && (e.components = Y), H && (e.directives = H), E && Ai(e);
}
function qc(e, s, o = ms) {
  Ue(e) && (e = ba(e));
  for (const n in e) {
    const l = e[n];
    let i;
    tt(l) ? "default" in l ? i = gn(
      l.from || n,
      l.default,
      !0
    ) : i = gn(l.from || n) : i = gn(l), $t(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : s[n] = i;
  }
}
function gl(e, s, o) {
  ts(
    Ue(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Vi(e, s, o, n) {
  let l = n.includes(".") ? Hi(o, n) : () => o[n];
  if (ut(e)) {
    const i = s[e];
    Be(i) && Ct(l, i);
  } else if (Be(e))
    Ct(l, e.bind(o));
  else if (tt(e))
    if (Ue(e))
      e.forEach((i) => Vi(i, s, o, n));
    else {
      const i = Be(e.handler) ? e.handler.bind(o) : s[e.handler];
      Be(i) && Ct(l, i, e);
    }
}
function Wi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = i.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (m) => Sn(d, m, c, !0)
  ), Sn(d, s, c)), tt(s) && i.set(s, d), d;
}
function Sn(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Sn(e, i, o, !0), l && l.forEach(
    (c) => Sn(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const u = Yc[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const Yc = {
  data: hl,
  props: yl,
  emits: yl,
  // objects
  methods: Mo,
  computed: Mo,
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
  components: Mo,
  directives: Mo,
  // watch
  watch: Xc,
  // provide / inject
  provide: hl,
  inject: Jc
};
function hl(e, s) {
  return s ? e ? function() {
    return gt(
      Be(e) ? e.call(this, this) : e,
      Be(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Jc(e, s) {
  return Mo(ba(e), ba(s));
}
function ba(e) {
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
function Mo(e, s) {
  return e ? gt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function yl(e, s) {
  return e ? Ue(e) && Ue(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : gt(
    /* @__PURE__ */ Object.create(null),
    pl(e),
    pl(s ?? {})
  ) : s;
}
function Xc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = gt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = xt(e[n], s[n]);
  return o;
}
function Gi() {
  return {
    app: null,
    config: {
      isNativeTag: Zl,
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
let Qc = 0;
function Zc(e, s) {
  return function(n, l = null) {
    Be(n) || (n = gt({}, n)), l != null && !tt(l) && (l = null);
    const i = Gi(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: Qc++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Ou,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...h) {
        return c.has(v) || (v && Be(v.install) ? (c.add(v), v.install(m, ...h)) : Be(v) && (c.add(v), v(m, ...h))), m;
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
          const p = m._ceVNode || x(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Gn(p.component);
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
        const h = vo;
        vo = m;
        try {
          return v();
        } finally {
          vo = h;
        }
      }
    };
    return m;
  };
}
let vo = null;
function eu(e, s) {
  if (kt) {
    let o = kt.provides;
    const n = kt.parent && kt.parent.provides;
    n === o && (o = kt.provides = Object.create(n)), o[e] = s;
  }
}
function gn(e, s, o = !1) {
  const n = Ya();
  if (n || vo) {
    let l = vo ? vo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Be(s) ? s.call(n && n.proxy) : s;
  }
}
const tu = Symbol.for("v-scx"), su = () => gn(tu);
function Ct(e, s, o) {
  return ji(e, s, o);
}
function ji(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, u = gt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (Yo) {
    if (i === "sync") {
      const p = su();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = ms, p.resume = ms, p.pause = ms, p;
    }
  }
  const v = kt;
  u.call = (p, _, C) => ts(p, v, _, C);
  let h = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (h = !0, u.scheduler = (p, _) => {
    _ ? p() : Va(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), h && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Ec(e, s, u);
  return Yo && (m ? m.push(w) : d && w()), w;
}
function ou(e, s, o) {
  const n = this.proxy, l = ut(e) ? e.includes(".") ? Hi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Be(s) ? i = s : (i = s.handler, o = s);
  const c = en(this), u = ji(l, i.bind(n), o);
  return c(), u;
}
function Hi(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const nu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Wt(s)}Modifiers`] || e[`${zs(s)}Modifiers`];
function au(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && nu(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => ut(v) ? v.trim() : v)), c.number && (l = o.map(An)));
  let u, d = n[u = qn(s)] || // also try camelCase event handler (#2249)
  n[u = qn(Wt(s))];
  !d && i && (d = n[u = qn(zs(s))]), d && ts(
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
const lu = /* @__PURE__ */ new WeakMap();
function Ki(e, s, o = !1) {
  const n = o ? lu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, u = !1;
  if (!Be(e)) {
    const d = (m) => {
      const v = Ki(m, s, !0);
      v && (u = !0, gt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (tt(e) && n.set(e, null), null) : (Ue(i) ? i.forEach((d) => c[d] = null) : gt(c, i), tt(e) && n.set(e, c), c);
}
function Vn(e, s) {
  return !e || !Dn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, zs(s)) || Ze(e, s));
}
function wl(e) {
  const {
    type: s,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [i],
    slots: c,
    attrs: u,
    emit: d,
    render: m,
    renderCache: v,
    props: h,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: C
  } = e, $ = Cn(e);
  let P, L;
  try {
    if (o.shapeFlag & 4) {
      const S = l || n, q = S;
      P = fs(
        m.call(
          q,
          S,
          v,
          h,
          p,
          w,
          _
        )
      ), L = u;
    } else {
      const S = s;
      P = fs(
        S.length > 1 ? S(
          h,
          { attrs: u, slots: c, emit: d }
        ) : S(
          h,
          null
        )
      ), L = s.props ? u : iu(u);
    }
  } catch (S) {
    zo.length = 0, zn(S, e, 1), P = x(bt);
  }
  let T = P;
  if (L && C !== !1) {
    const S = Object.keys(L), { shapeFlag: q } = T;
    S.length && q & 7 && (i && S.some(Ra) && (L = ru(
      L,
      i
    )), T = Ns(T, L, !1, !0));
  }
  return o.dirs && (T = Ns(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && Zs(T, o.transition), P = T, Cn($), P;
}
const iu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Dn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, ru = (e, s) => {
  const o = {};
  for (const n in e)
    (!Ra(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function cu(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: c, children: u, patchFlag: d } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? _l(n, c, m) : !!c;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        const w = v[h];
        if (c[w] !== n[w] && !Vn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? _l(n, c, m) : !0 : !!c;
  return !1;
}
function _l(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !Vn(o, i))
      return !0;
  }
  return !1;
}
function uu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const qi = {}, Yi = () => Object.create(qi), Ji = (e) => Object.getPrototypeOf(e) === qi;
function du(e, s, o, n = !1) {
  const l = {}, i = Yi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xi(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : _c(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function fu(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: c }
  } = e, u = Je(l), [d] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        let w = v[h];
        if (Vn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = Wt(w);
            l[_] = ka(
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
    Xi(e, s, l, i) && (m = !0);
    let v;
    for (const h in u)
      (!s || // for camelCase
      !Ze(s, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = zs(h)) === h || !Ze(s, v))) && (d ? o && // for camelCase
      (o[h] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[h] = ka(
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
  m && _s(e.attrs, "set", "");
}
function Xi(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (Do(d))
        continue;
      const m = s[d];
      let v;
      l && Ze(l, v = Wt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Vn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, c = !0);
    }
  if (i) {
    const d = Je(o), m = u || st;
    for (let v = 0; v < i.length; v++) {
      const h = i[v];
      o[h] = ka(
        l,
        d,
        h,
        m[h],
        e,
        !Ze(m, h)
      );
    }
  }
  return c;
}
function ka(e, s, o, n, l, i) {
  const c = e[o];
  if (c != null) {
    const u = Ze(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Be(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = en(l);
          n = m[o] = d.call(
            null,
            s
          ), v();
        }
      } else
        n = d;
      l.ce && l.ce._setProp(o, n);
    }
    c[
      0
      /* shouldCast */
    ] && (i && !u ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === zs(o)) && (n = !0));
  }
  return n;
}
const mu = /* @__PURE__ */ new WeakMap();
function Qi(e, s, o = !1) {
  const n = o ? mu : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, u = [];
  let d = !1;
  if (!Be(e)) {
    const v = (h) => {
      d = !0;
      const [w, p] = Qi(h, s, !0);
      gt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return tt(e) && n.set(e, co), co;
  if (Ue(i))
    for (let v = 0; v < i.length; v++) {
      const h = Wt(i[v]);
      bl(h) && (c[h] = st);
    }
  else if (i)
    for (const v in i) {
      const h = Wt(v);
      if (bl(h)) {
        const w = i[v], p = c[h] = Ue(w) || Be(w) ? { type: w } : gt({}, w), _ = p.type;
        let C = !1, $ = !0;
        if (Ue(_))
          for (let P = 0; P < _.length; ++P) {
            const L = _[P], T = Be(L) && L.name;
            if (T === "Boolean") {
              C = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else
          C = Be(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = $, (C || Ze(p, "default")) && u.push(h);
      }
    }
  const m = [c, u];
  return tt(e) && n.set(e, m), m;
}
function bl(e) {
  return e[0] !== "$" && !Do(e);
}
const ja = (e) => e === "_" || e === "_ctx" || e === "$stable", Ha = (e) => Ue(e) ? e.map(fs) : [fs(e)], vu = (e, s, o) => {
  if (s._n)
    return s;
  const n = g((...l) => Ha(s(...l)), o);
  return n._c = !1, n;
}, Zi = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (ja(l)) continue;
    const i = e[l];
    if (Be(i))
      s[l] = vu(l, i, n);
    else if (i != null) {
      const c = Ha(i);
      s[l] = () => c;
    }
  }
}, er = (e, s) => {
  const o = Ha(s);
  e.slots.default = () => o;
}, tr = (e, s, o) => {
  for (const n in s)
    (o || !ja(n)) && (e[n] = s[n]);
}, pu = (e, s, o) => {
  const n = e.slots = Yi();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (tr(n, s, o), o && oi(n, "_", l, !0)) : Zi(s, n);
  } else s && er(e, s);
}, gu = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = st;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : tr(l, s, o) : (i = !s.$stable, Zi(s, l)), c = s;
  } else s && (er(e, s), c = { default: 1 });
  if (i)
    for (const u in l)
      !ja(u) && c[u] == null && delete l[u];
}, St = bu;
function hu(e) {
  return yu(e);
}
function yu(e, s) {
  const o = Nn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: i,
    createElement: c,
    createText: u,
    createComment: d,
    setText: m,
    setElementText: v,
    parentNode: h,
    nextSibling: w,
    setScopeId: p = ms,
    insertStaticContent: _
  } = e, C = (D, V, se, ne = null, ue = null, de = null, $e = void 0, Ce = null, oe = !!V.dynamicChildren) => {
    if (D === V)
      return;
    D && !Ys(D, V) && (ne = Ge(D), Me(D, ue, de, !0), D = null), V.patchFlag === -2 && (oe = !1, V.dynamicChildren = null);
    const { type: ce, ref: Le, shapeFlag: xe } = V;
    switch (ce) {
      case Wn:
        $(D, V, se, ne);
        break;
      case bt:
        P(D, V, se, ne);
        break;
      case sa:
        D == null && L(V, se, ne, $e);
        break;
      case G:
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
    Le != null && ue ? No(Le, D && D.ref, de, V || D, !V) : Le == null && D && D.ref != null && No(D.ref, null, de, D, !0);
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
  }, L = (D, V, se, ne) => {
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
  }, S = ({ el: D, anchor: V }) => {
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
    const { props: Le, shapeFlag: xe, transition: Z, dirs: K } = D;
    if (oe = D.el = c(
      D.type,
      de,
      Le && Le.is,
      Le
    ), xe & 8 ? v(oe, D.children) : xe & 16 && I(
      D.children,
      oe,
      null,
      ne,
      ue,
      ta(D, de),
      $e,
      Ce
    ), K && Gs(D, null, ne, "created"), A(oe, D, D.scopeId, $e, ne), Le) {
      for (const he in Le)
        he !== "value" && !Do(he) && i(oe, he, null, Le[he], de, ne);
      "value" in Le && i(oe, "value", null, Le.value, de), (ce = Le.onVnodeBeforeMount) && is(ce, ne, D);
    }
    K && Gs(D, null, ne, "beforeMount");
    const Pe = wu(ue, Z);
    Pe && Z.beforeEnter(oe), n(oe, V, se), ((ce = Le && Le.onVnodeMounted) || Pe || K) && St(() => {
      ce && is(ce, ne, D), Pe && Z.enter(oe), K && Gs(D, null, ne, "mounted");
    }, ue);
  }, A = (D, V, se, ne, ue) => {
    if (se && p(D, se), ne)
      for (let de = 0; de < ne.length; de++)
        p(D, ne[de]);
    if (ue) {
      let de = ue.subTree;
      if (V === de || or(de.type) && (de.ssContent === V || de.ssFallback === V)) {
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
      const Le = D[ce] = Ce ? Ls(D[ce]) : fs(D[ce]);
      C(
        null,
        Le,
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
    let { patchFlag: oe, dynamicChildren: ce, dirs: Le } = V;
    oe |= D.patchFlag & 16;
    const xe = D.props || st, Z = V.props || st;
    let K;
    if (se && js(se, !1), (K = Z.onVnodeBeforeUpdate) && is(K, se, V, D), Le && Gs(V, D, se, "beforeUpdate"), se && js(se, !0), (xe.innerHTML && Z.innerHTML == null || xe.textContent && Z.textContent == null) && v(Ce, ""), ce ? O(
      D.dynamicChildren,
      ce,
      Ce,
      se,
      ne,
      ta(V, ue),
      de
    ) : $e || M(
      D,
      V,
      Ce,
      null,
      se,
      ne,
      ta(V, ue),
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
    ((K = Z.onVnodeUpdated) || Le) && St(() => {
      K && is(K, se, V, D), Le && Gs(V, D, se, "updated");
    }, ne);
  }, O = (D, V, se, ne, ue, de, $e) => {
    for (let Ce = 0; Ce < V.length; Ce++) {
      const oe = D[Ce], ce = V[Ce], Le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oe.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ys(oe, ce) || // - In the case of a component, it could contain anything.
        oe.shapeFlag & 198) ? h(oe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          se
        )
      );
      C(
        oe,
        ce,
        Le,
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
          !Do(de) && !(de in se) && i(
            D,
            de,
            V[de],
            null,
            ue,
            ne
          );
      for (const de in se) {
        if (Do(de)) continue;
        const $e = se[de], Ce = V[de];
        $e !== Ce && de !== "value" && i(D, de, Ce, $e, ue, ne);
      }
      "value" in se && i(D, "value", V.value, se.value, ue);
    }
  }, Y = (D, V, se, ne, ue, de, $e, Ce, oe) => {
    const ce = V.el = D ? D.el : u(""), Le = V.anchor = D ? D.anchor : u("");
    let { patchFlag: xe, dynamicChildren: Z, slotScopeIds: K } = V;
    K && (Ce = Ce ? Ce.concat(K) : K), D == null ? (n(ce, se, ne), n(Le, se, ne), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      se,
      Le,
      ue,
      de,
      $e,
      Ce,
      oe
    )) : xe > 0 && xe & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren ? (O(
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
    (V.key != null || ue && V === ue.subTree) && Ka(
      D,
      V,
      !0
      /* shallow */
    )) : M(
      D,
      V,
      se,
      Le,
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
    const Ce = D.component = Eu(
      D,
      ne,
      ue
    );
    if (Fn(D) && (Ce.ctx.renderer = Ve), Tu(Ce, !1, $e), Ce.asyncDep) {
      if (ue && ue.registerDep(Ce, N, $e), !D.el) {
        const oe = Ce.subTree = x(bt);
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
    if (cu(D, V, se))
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
          const ze = sr(D);
          if (ze) {
            xe && (xe.el = he.el, U(D, xe, $e)), ze.asyncDep.then(() => {
              D.isUnmounted || Ce();
            });
            return;
          }
        }
        let ge = xe, W;
        js(D, !1), xe ? (xe.el = he.el, U(D, xe, $e)) : xe = he, Z && vn(Z), (W = xe.props && xe.props.onVnodeBeforeUpdate) && is(W, Pe, xe, he), js(D, !0);
        const z = wl(D), ie = D.subTree;
        D.subTree = z, C(
          ie,
          z,
          // parent may have changed if it's in a teleport
          h(ie.el),
          // anchor may have changed if it's in a fragment
          Ge(ie),
          D,
          ue,
          de
        ), xe.el = z.el, ge === null && uu(D, z.el), K && St(K, ue), (W = xe.props && xe.props.onVnodeUpdated) && St(
          () => is(W, Pe, xe, he),
          ue
        );
      } else {
        let xe;
        const { el: Z, props: K } = V, { bm: Pe, m: he, parent: ge, root: W, type: z } = D, ie = mo(V);
        js(D, !1), Pe && vn(Pe), !ie && (xe = K && K.onVnodeBeforeMount) && is(xe, ge, V), js(D, !0);
        {
          W.ce && // @ts-expect-error _def is private
          W.ce._def.shadowRoot !== !1 && W.ce._injectChildStyle(z);
          const ze = D.subTree = wl(D);
          C(
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
        (V.shapeFlag & 256 || ge && mo(ge.vnode) && ge.vnode.shapeFlag & 256) && D.a && St(D.a, ue), D.isMounted = !0, V = se = ne = null;
      }
    };
    D.scope.on();
    const oe = D.effect = new ii(Ce);
    D.scope.off();
    const ce = D.update = oe.run.bind(oe), Le = D.job = oe.runIfDirty.bind(oe);
    Le.i = D, Le.id = D.uid, oe.scheduler = () => Va(Le), js(D, !0), ce();
  }, U = (D, V, se) => {
    V.component = D;
    const ne = D.vnode.props;
    D.vnode = V, D.next = null, fu(D, V.props, ne, se), gu(D, V.children, se), $s(), rl(D), Cs();
  }, M = (D, V, se, ne, ue, de, $e, Ce, oe = !1) => {
    const ce = D && D.children, Le = D ? D.shapeFlag : 0, xe = V.children, { patchFlag: Z, shapeFlag: K } = V;
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
    K & 8 ? (Le & 16 && Ee(ce, ue, de), xe !== ce && v(se, xe)) : Le & 16 ? K & 16 ? ve(
      ce,
      xe,
      se,
      ne,
      ue,
      de,
      $e,
      Ce,
      oe
    ) : Ee(ce, ue, de, !0) : (Le & 8 && v(se, ""), K & 16 && I(
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
    D = D || co, V = V || co;
    const ce = D.length, Le = V.length, xe = Math.min(ce, Le);
    let Z;
    for (Z = 0; Z < xe; Z++) {
      const K = V[Z] = oe ? Ls(V[Z]) : fs(V[Z]);
      C(
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
    ce > Le ? Ee(
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
    const Le = V.length;
    let xe = D.length - 1, Z = Le - 1;
    for (; ce <= xe && ce <= Z; ) {
      const K = D[ce], Pe = V[ce] = oe ? Ls(V[ce]) : fs(V[ce]);
      if (Ys(K, Pe))
        C(
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
        C(
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
        const K = Z + 1, Pe = K < Le ? V[K].el : ne;
        for (; ce <= Z; )
          C(
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
        Me(D[ce], ue, de, !0), ce++;
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
          Me(at, ue, de, !0);
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
        dt === void 0 ? Me(at, ue, de, !0) : (Qe[dt - Pe] = ce + 1, dt >= ze ? ze = dt : ie = !0, C(
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
      const vt = ie ? _u(Qe) : co;
      for (ge = vt.length - 1, ce = z - 1; ce >= 0; ce--) {
        const at = Pe + ce, dt = V[at], Rt = V[at + 1], Ut = at + 1 < Le ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : ne;
        Qe[ce] === 0 ? C(
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
    if ($e === G) {
      n(de, V, se);
      for (let xe = 0; xe < oe.length; xe++)
        Ie(oe[xe], V, se, ne);
      n(D.anchor, V, se);
      return;
    }
    if ($e === sa) {
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
  }, Me = (D, V, se, ne = !1, ue = !1) => {
    const {
      type: de,
      props: $e,
      ref: Ce,
      children: oe,
      dynamicChildren: ce,
      shapeFlag: Le,
      patchFlag: xe,
      dirs: Z,
      cacheIndex: K
    } = D;
    if (xe === -2 && (ue = !1), Ce != null && ($s(), No(Ce, null, se, D, !0), Cs()), K != null && (V.renderCache[K] = void 0), Le & 256) {
      V.ctx.deactivate(D);
      return;
    }
    const Pe = Le & 1 && Z, he = !mo(D);
    let ge;
    if (he && (ge = $e && $e.onVnodeBeforeUnmount) && is(ge, V, D), Le & 6)
      ke(D.component, se, ne);
    else {
      if (Le & 128) {
        D.suspense.unmount(se, ne);
        return;
      }
      Pe && Gs(D, null, V, "beforeUnmount"), Le & 64 ? D.type.remove(
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
      (de !== G || xe > 0 && xe & 64) ? Ee(
        ce,
        V,
        se,
        !1,
        !0
      ) : (de === G && xe & 384 || !ue && Le & 16) && Ee(oe, V, se), ne && Ke(D);
    }
    (he && (ge = $e && $e.onVnodeUnmounted) || Pe) && St(() => {
      ge && is(ge, V, D), Pe && Gs(D, null, V, "unmounted");
    }, se);
  }, Ke = (D) => {
    const { type: V, el: se, anchor: ne, transition: ue } = D;
    if (V === G) {
      Xe(se, ne);
      return;
    }
    if (V === sa) {
      S(D);
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
    kl(oe), kl(ce), ne && vn(ne), ue.stop(), de && (de.flags |= 8, Me($e, D, V, se)), Ce && St(Ce, V), St(() => {
      D.isUnmounted = !0;
    }, V);
  }, Ee = (D, V, se, ne = !1, ue = !1, de = 0) => {
    for (let $e = de; $e < D.length; $e++)
      Me(D[$e], V, se, ne, ue);
  }, Ge = (D) => {
    if (D.shapeFlag & 6)
      return Ge(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const V = w(D.anchor || D.el), se = V && V[Ii];
    return se ? w(se) : V;
  };
  let _e = !1;
  const ae = (D, V, se) => {
    D == null ? V._vnode && Me(V._vnode, null, null, !0) : C(
      V._vnode || null,
      D,
      V,
      null,
      null,
      null,
      se
    ), V._vnode = D, _e || (_e = !0, rl(), Ci(), _e = !1);
  }, Ve = {
    p: C,
    um: Me,
    m: Ie,
    r: Ke,
    mt: te,
    mc: I,
    pc: M,
    pbc: O,
    n: Ge,
    o: e
  };
  return {
    render: ae,
    hydrate: void 0,
    createApp: Zc(ae)
  };
}
function ta({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function js({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function wu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function Ka(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Ue(n) && Ue(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Ls(l[i]), u.el = c.el), !o && u.patchFlag !== -2 && Ka(c, u)), u.type === Wn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === bt && !u.el && (u.el = c.el);
    }
}
function _u(e) {
  const s = e.slice(), o = [0];
  let n, l, i, c, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        s[n] = l, o.push(n);
        continue;
      }
      for (i = 0, c = o.length - 1; i < c; )
        u = i + c >> 1, e[o[u]] < m ? i = u + 1 : c = u;
      m < e[o[i]] && (i > 0 && (s[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, c = o[i - 1]; i-- > 0; )
    o[i] = c, c = s[c];
  return o;
}
function sr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : sr(s);
}
function kl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const or = (e) => e.__isSuspense;
function bu(e, s) {
  s && s.pendingBranch ? Ue(e) ? s.effects.push(...e) : s.effects.push(e) : Rc(e);
}
const G = Symbol.for("v-fgt"), Wn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), sa = Symbol.for("v-stc"), zo = [];
let At = null;
function a(e = !1) {
  zo.push(At = e ? null : []);
}
function ku() {
  zo.pop(), At = zo[zo.length - 1] || null;
}
let Ko = 1;
function In(e, s = !1) {
  Ko += e, e < 0 && At && s && (At.hasOnce = !0);
}
function nr(e) {
  return e.dynamicChildren = Ko > 0 ? At || co : null, ku(), Ko > 0 && At && At.push(e), e;
}
function r(e, s, o, n, l, i) {
  return nr(
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
  return nr(
    x(
      e,
      s,
      o,
      n,
      l,
      !0
    )
  );
}
function qo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ys(e, s) {
  return e.type === s.type && e.key === s.key;
}
const ar = ({ key: e }) => e ?? null, hn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ut(e) || $t(e) || Be(e) ? { i: yt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === G ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && ar(s),
    ref: s && hn(s),
    scopeId: Si,
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
  return u ? (qa(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ut(o) ? 8 : 16), Ko > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  At && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && At.push(d), d;
}
const x = $u;
function $u(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Fi) && (e = bt), qo(e)) {
    const u = Ns(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && qa(u, o), Ko > 0 && !i && At && (u.shapeFlag & 6 ? At[At.indexOf(e)] = u : At.push(u)), u.patchFlag = -2, u;
  }
  if (Lu(e) && (e = e.__vccOpts), s) {
    s = Cu(s);
    let { class: u, style: d } = s;
    u && !ut(u) && (s.class = Se(u)), tt(d) && (Ba(d) && !Ue(d) && (d = gt({}, d)), s.style = Gt(d));
  }
  const c = ut(e) ? 1 : or(e) ? 128 : Ei(e) ? 64 : tt(e) ? 4 : Be(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    n,
    l,
    c,
    i,
    !0
  );
}
function Cu(e) {
  return e ? Ba(e) || Ji(e) ? gt({}, e) : e : null;
}
function Ns(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: u, transition: d } = e, m = s ? xu(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && ar(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Ue(i) ? i.concat(hn(s)) : [i, hn(s)] : hn(s)
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
    patchFlag: s && e.type !== G ? c === -1 ? 16 : c | 16 : c,
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
  return x(Wn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), R(bt, null, e)) : x(bt, null, e);
}
function fs(e) {
  return e == null || typeof e == "boolean" ? x(bt) : Ue(e) ? x(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qo(e) ? Ls(e) : x(Wn, null, String(e));
}
function Ls(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ns(e);
}
function qa(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Ue(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), qa(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Ji(s) ? s._ctx = yt : l === 3 && yt && (yt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Be(s) ? (s = { default: s, _ctx: yt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function xu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Se([s.class, n.class]));
      else if (l === "style")
        s.style = Gt([s.style, n.style]);
      else if (Dn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Ue(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
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
const Su = Gi();
let Iu = 0;
function Eu(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Su, i = {
    uid: Iu++,
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
    scope: new ec(
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
    propsOptions: Qi(n, l),
    emitsOptions: Ki(n, l),
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = au.bind(null, i), e.ce && e.ce(i), i;
}
let kt = null;
const Ya = () => kt || yt;
let En, $a;
{
  const e = Nn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((c) => c(i)) : l[0](i);
    };
  };
  En = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => kt = o
  ), $a = s(
    "__VUE_SSR_SETTERS__",
    (o) => Yo = o
  );
}
const en = (e) => {
  const s = kt;
  return En(e), e.scope.on(), () => {
    e.scope.off(), En(s);
  };
}, $l = () => {
  kt && kt.scope.off(), En(null);
};
function lr(e) {
  return e.vnode.shapeFlag & 4;
}
let Yo = !1;
function Tu(e, s = !1, o = !1) {
  s && $a(s);
  const { props: n, children: l } = e.vnode, i = lr(e);
  du(e, n, i, s), pu(e, l, o || s);
  const c = i ? Pu(e, s) : void 0;
  return s && $a(!1), c;
}
function Pu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Hc);
  const { setup: n } = o;
  if (n) {
    $s();
    const l = e.setupContext = n.length > 1 ? Mu(e) : null, i = en(e), c = Qo(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = ei(c);
    if (Cs(), i(), (u || e.sp) && !mo(e) && Ai(e), u) {
      if (c.then($l, $l), s)
        return c.then((d) => {
          Cl(e, d);
        }).catch((d) => {
          zn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Cl(e, c);
  } else
    ir(e);
}
function Cl(e, s, o) {
  Be(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : tt(s) && (e.setupState = bi(s)), ir(e);
}
function ir(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || ms);
  {
    const l = en(e);
    $s();
    try {
      Kc(e);
    } finally {
      Cs(), l();
    }
  }
}
const Ru = {
  get(e, s) {
    return _t(e, "get", ""), e[s];
  }
};
function Mu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ru),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Gn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bi(bc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Uo)
        return Uo[o](e);
    },
    has(s, o) {
      return o in s || o in Uo;
    }
  })) : e.proxy;
}
function Du(e, s = !0) {
  return Be(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Lu(e) {
  return Be(e) && "__vccOpts" in e;
}
const F = (e, s) => Sc(e, s, Yo);
function tn(e, s, o) {
  try {
    In(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !Ue(s) ? qo(s) ? x(e, null, [s]) : x(e, s) : x(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && qo(o) && (o = [o]), x(e, s, o));
  } finally {
    In(1);
  }
}
const Ou = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ca;
const xl = typeof window < "u" && window.trustedTypes;
if (xl)
  try {
    Ca = /* @__PURE__ */ xl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rr = Ca ? (e) => Ca.createHTML(e) : (e) => e, Au = "http://www.w3.org/2000/svg", Nu = "http://www.w3.org/1998/Math/MathML", ys = typeof document < "u" ? document : null, Sl = ys && /* @__PURE__ */ ys.createElement("template"), Uu = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ys.createElementNS(Au, e) : s === "mathml" ? ys.createElementNS(Nu, e) : o ? ys.createElement(e, { is: o }) : ys.createElement(e);
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
    const c = o ? o.previousSibling : s.lastChild;
    if (l && (l === i || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === i || !(l = l.nextSibling)); )
        ;
    else {
      Sl.innerHTML = rr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Sl.content;
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
      c ? c.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, Ps = "transition", So = "animation", ho = Symbol("_vtc"), cr = {
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
}, ur = /* @__PURE__ */ gt(
  {},
  Mi,
  cr
), zu = (e) => (e.displayName = "Transition", e.props = ur, e), Fu = /* @__PURE__ */ zu(
  (e, { slots: s }) => tn(Lc, dr(e), s)
), Hs = (e, s = []) => {
  Ue(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Il = (e) => e ? Ue(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function dr(e) {
  const s = {};
  for (const Y in e)
    Y in cr || (s[Y] = e[Y]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = i,
    appearActiveClass: m = c,
    appearToClass: v = u,
    leaveFromClass: h = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = Bu(l), C = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: L,
    onEnterCancelled: T,
    onLeave: S,
    onLeaveCancelled: q,
    onBeforeAppear: B = P,
    onAppear: A = L,
    onAppearCancelled: I = T
  } = s, E = (Y, H, te, Q) => {
    Y._enterCancelled = Q, Rs(Y, H ? v : u), Rs(Y, H ? m : c), te && te();
  }, O = (Y, H) => {
    Y._isLeaving = !1, Rs(Y, h), Rs(Y, p), Rs(Y, w), H && H();
  }, re = (Y) => (H, te) => {
    const Q = Y ? A : L, N = () => E(H, Y, te);
    Hs(Q, [H, N]), El(() => {
      Rs(H, Y ? d : i), cs(H, Y ? v : u), Il(Q) || Tl(H, n, C, N);
    });
  };
  return gt(s, {
    onBeforeEnter(Y) {
      Hs(P, [Y]), cs(Y, i), cs(Y, c);
    },
    onBeforeAppear(Y) {
      Hs(B, [Y]), cs(Y, d), cs(Y, m);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(Y, H) {
      Y._isLeaving = !0;
      const te = () => O(Y, H);
      cs(Y, h), Y._enterCancelled ? (cs(Y, w), xa(Y)) : (xa(Y), cs(Y, w)), El(() => {
        Y._isLeaving && (Rs(Y, h), cs(Y, p), Il(S) || Tl(Y, n, $, te));
      }), Hs(S, [Y, te]);
    },
    onEnterCancelled(Y) {
      E(Y, !1, void 0, !0), Hs(T, [Y]);
    },
    onAppearCancelled(Y) {
      E(Y, !0, void 0, !0), Hs(I, [Y]);
    },
    onLeaveCancelled(Y) {
      O(Y), Hs(q, [Y]);
    }
  });
}
function Bu(e) {
  if (e == null)
    return null;
  if (tt(e))
    return [oa(e.enter), oa(e.leave)];
  {
    const s = oa(e);
    return [s, s];
  }
}
function oa(e) {
  return Hr(e);
}
function cs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[ho] || (e[ho] = /* @__PURE__ */ new Set())).add(s);
}
function Rs(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[ho];
  o && (o.delete(s), o.size || (e[ho] = void 0));
}
function El(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Vu = 0;
function Tl(e, s, o, n) {
  const l = e._endId = ++Vu, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: c, timeout: u, propCount: d } = fr(e, s);
  if (!c)
    return n();
  const m = c + "end";
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
function fr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ps}Delay`), i = n(`${Ps}Duration`), c = Pl(l, i), u = n(`${So}Delay`), d = n(`${So}Duration`), m = Pl(u, d);
  let v = null, h = 0, w = 0;
  s === Ps ? c > 0 && (v = Ps, h = c, w = i.length) : s === So ? m > 0 && (v = So, h = m, w = d.length) : (h = Math.max(c, m), v = h > 0 ? c > m ? Ps : So : null, w = v ? v === Ps ? i.length : d.length : 0);
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
function Pl(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Rl(o) + Rl(e[n])));
}
function Rl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Wu(e, s, o) {
  const n = e[ho];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Ml = Symbol("_vod"), Gu = Symbol("_vsh"), ju = Symbol(""), Hu = /(?:^|;)\s*display\s*:/;
function Ku(e, s, o) {
  const n = e.style, l = ut(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (ut(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && yn(n, u, "");
        }
      else
        for (const c in s)
          o[c] == null && yn(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), yn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[ju];
      c && (o += ";" + c), n.cssText = o, i = Hu.test(o);
    }
  } else s && e.removeAttribute("style");
  Ml in e && (e[Ml] = i ? n.display : "", e[Gu] && (n.display = "none"));
}
const Dl = /\s*!important$/;
function yn(e, s, o) {
  if (Ue(o))
    o.forEach((n) => yn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = qu(e, s);
    Dl.test(o) ? e.setProperty(
      zs(n),
      o.replace(Dl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Ll = ["Webkit", "Moz", "ms"], na = {};
function qu(e, s) {
  const o = na[s];
  if (o)
    return o;
  let n = Wt(s);
  if (n !== "filter" && n in e)
    return na[s] = n;
  n = On(n);
  for (let l = 0; l < Ll.length; l++) {
    const i = Ll[l] + n;
    if (i in e)
      return na[s] = i;
  }
  return s;
}
const Ol = "http://www.w3.org/1999/xlink";
function Al(e, s, o, n, l, i = Qr(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Ol, s.slice(6, s.length)) : e.setAttributeNS(Ol, s, o) : o == null || i && !ni(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : Zt(o) ? String(o) : o
  );
}
function Nl(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? rr(o) : o);
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
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = ni(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function ks(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function Yu(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Ul = Symbol("_vei");
function Ju(e, s, o, n, l = null) {
  const i = e[Ul] || (e[Ul] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = Xu(s);
    if (n) {
      const m = i[s] = ed(
        n,
        l
      );
      ks(e, u, m, d);
    } else c && (Yu(e, u, c, d), i[s] = void 0);
  }
}
const zl = /(?:Once|Passive|Capture)$/;
function Xu(e) {
  let s;
  if (zl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(zl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : zs(e.slice(2)), s];
}
let aa = 0;
const Qu = /* @__PURE__ */ Promise.resolve(), Zu = () => aa || (Qu.then(() => aa = 0), aa = Date.now());
function ed(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ts(
      td(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Zu(), o;
}
function td(e, s) {
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
const Fl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sd = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Wu(e, n, c) : s === "style" ? Ku(e, o, n) : Dn(s) ? Ra(s) || Ju(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : od(e, s, n, c)) ? (Nl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Al(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ut(n)) ? Nl(e, Wt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Al(e, s, n, c));
};
function od(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Fl(s) && Be(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Fl(s) && ut(o) ? !1 : s in e;
}
const mr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Tn = Symbol("_moveCb"), Bl = Symbol("_enterCb"), nd = (e) => (delete e.props.mode, e), ad = /* @__PURE__ */ nd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ gt({}, ur, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Ya(), n = Ri();
    let l, i;
    return Ui(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!ud(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(id), l.forEach(rd);
      const u = l.filter(cd);
      xa(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        cs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const h = m[Tn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", h), m[Tn] = null, Rs(m, c));
        };
        m.addEventListener("transitionend", h);
      }), l = [];
    }), () => {
      const c = Je(e), u = dr(c);
      let d = c.tag || G;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), Zs(
            v,
            Ho(
              v,
              u,
              n,
              o
            )
          ), mr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? Wa(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && Zs(
          v,
          Ho(v, u, n, o)
        );
      }
      return x(d, null, i);
    };
  }
}), ld = ad;
function id(e) {
  const s = e.el;
  s[Tn] && s[Tn](), s[Bl] && s[Bl]();
}
function rd(e) {
  vr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function cd(e) {
  const s = mr.get(e), o = vr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function ud(e, s, o) {
  const n = e.cloneNode(), l = e[ho];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: c } = fr(n);
  return i.removeChild(n), c;
}
const Us = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ue(s) ? (o) => vn(s, o) : s;
};
function dd(e) {
  e.target.composing = !0;
}
function Vl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Vt = Symbol("_assign");
function Wl(e, s, o) {
  return s && (e = e.trim()), o && (e = An(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Vt] = Us(l);
    const i = n || l.props && l.props.type === "number";
    ks(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Vt](Wl(e.value, o, i));
    }), (o || i) && ks(e, "change", () => {
      e.value = Wl(e.value, o, i);
    }), s || (ks(e, "compositionstart", dd), ks(e, "compositionend", Vl), ks(e, "change", Vl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[Vt] = Us(c), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? An(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Jo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Vt] = Us(o), ks(e, "change", () => {
      const n = e._modelValue, l = yo(e), i = e.checked, c = e[Vt];
      if (Ue(n)) {
        const u = La(n, l), d = u !== -1;
        if (i && !d)
          c(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), c(m);
        }
      } else if (wo(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), c(u);
      } else
        c(pr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Gl,
  beforeUpdate(e, s, o) {
    e[Vt] = Us(o), Gl(e, s, o);
  }
};
function Gl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Ue(s))
    l = La(s, n.props.value) > -1;
  else if (wo(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = Qs(s, pr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Yt = {
  created(e, { value: s }, o) {
    e.checked = Qs(s, o.props.value), e[Vt] = Us(o), ks(e, "change", () => {
      e[Vt](yo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Vt] = Us(n), s !== o && (e.checked = Qs(s, n.props.value));
  }
}, vs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = wo(s);
    ks(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? An(yo(c)) : yo(c)
      );
      e[Vt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, Zo(() => {
        e._assigning = !1;
      });
    }), e[Vt] = Us(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    jl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Vt] = Us(o);
  },
  updated(e, { value: s }) {
    e._assigning || jl(e, s);
  }
};
function jl(e, s) {
  const o = e.multiple, n = Ue(s);
  if (!(o && !n && !wo(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const c = e.options[l], u = yo(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = La(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (Qs(yo(c), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function yo(e) {
  return "_value" in e ? e._value : e.value;
}
function pr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const jn = {
  created(e, s, o) {
    un(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    un(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    un(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    un(e, s, o, n, "updated");
  }
};
function fd(e, s) {
  switch (e) {
    case "SELECT":
      return vs;
    case "TEXTAREA":
      return Nt;
    default:
      switch (s) {
        case "checkbox":
          return Jo;
        case "radio":
          return Yt;
        default:
          return Nt;
      }
  }
}
function un(e, s, o, n, l) {
  const c = fd(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const md = ["ctrl", "shift", "alt", "meta"], vd = {
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
  exact: (e, s) => md.some((o) => e[`${o}Key`] && !s.includes(o))
}, it = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const u = vd[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...i);
  }));
}, pd = {
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
      (c) => c === i || pd[c] === i
    ))
      return e(l);
  }));
}, gd = /* @__PURE__ */ gt({ patchProp: sd }, Uu);
let Hl;
function hd() {
  return Hl || (Hl = hu(gd));
}
const Hn = ((...e) => {
  const s = hd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = wd(n);
    if (!l) return;
    const i = s._component;
    !Be(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, yd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function yd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wd(e) {
  return ut(e) ? document.querySelector(e) : e;
}
const _d = { class: "panel-layout" }, bd = {
  key: 0,
  class: "panel-layout-header"
}, kd = {
  key: 1,
  class: "panel-layout-search"
}, $d = { class: "panel-layout-content" }, Cd = {
  key: 2,
  class: "panel-layout-footer"
}, xd = /* @__PURE__ */ fe({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", _d, [
      s.$slots.header ? (a(), r("div", bd, [
        He(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", kd, [
        He(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", $d, [
        He(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Cd, [
        He(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), me = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ me(xd, [["__scopeId", "data-v-21565df9"]]), Sd = {
  key: 0,
  class: "panel-title-prefix"
}, Id = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ed = /* @__PURE__ */ fe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), R(Ga(`h${e.level}`), {
      class: Se(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (a(), r("span", Sd, f(e.prefix), 1)) : (a(), r("span", Id)),
        He(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Td = /* @__PURE__ */ me(Ed, [["__scopeId", "data-v-c3875efc"]]), Pd = ["title"], Rd = ["width", "height"], Md = /* @__PURE__ */ fe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), r("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => s.$emit("click"))
    }, [
      (a(), r("svg", {
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
      ])], 8, Rd))
    ], 8, Pd));
  }
}), gr = /* @__PURE__ */ me(Md, [["__scopeId", "data-v-6fc7f16d"]]), Dd = { class: "header-left" }, Ld = {
  key: 0,
  class: "header-actions"
}, Od = /* @__PURE__ */ fe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Se(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Dd, [
        x(Td, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(gr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Ld, [
        He(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ me(Od, [["__scopeId", "data-v-55a62cd6"]]), Ad = {
  key: 0,
  class: "section-title-count"
}, Nd = {
  key: 1,
  class: "section-title-icon"
}, Ud = /* @__PURE__ */ fe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), R(Ga(`h${e.level}`), {
      class: Se(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Ad, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Nd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ot = /* @__PURE__ */ me(Ud, [["__scopeId", "data-v-559361eb"]]), zd = { class: "status-grid" }, Fd = { class: "status-grid__columns" }, Bd = { class: "status-grid__column" }, Vd = { class: "status-grid__title" }, Wd = { class: "status-grid__column status-grid__column--right" }, Gd = { class: "status-grid__title" }, jd = {
  key: 0,
  class: "status-grid__footer"
}, Hd = /* @__PURE__ */ fe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", zd, [
      t("div", Fd, [
        t("div", Bd, [
          t("h4", Vd, f(e.leftTitle), 1),
          He(s.$slots, "left", {}, void 0)
        ]),
        t("div", Wd, [
          t("h4", Gd, f(e.rightTitle), 1),
          He(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", jd, [
        He(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Kd = /* @__PURE__ */ me(Hd, [["__scopeId", "data-v-73b7ba3f"]]), qd = {
  key: 0,
  class: "status-item__icon"
}, Yd = {
  key: 1,
  class: "status-item__count"
}, Jd = { class: "status-item__label" }, Xd = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", {
      class: Se(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", qd, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", Yd, f(e.count), 1)) : y("", !0),
      t("span", Jd, f(e.label), 1)
    ], 2));
  }
}), rs = /* @__PURE__ */ me(Xd, [["__scopeId", "data-v-6f929183"]]), Qd = { class: "issue-card__header" }, Zd = { class: "issue-card__icon" }, ef = { class: "issue-card__title" }, tf = {
  key: 0,
  class: "issue-card__content"
}, sf = {
  key: 0,
  class: "issue-card__description"
}, of = {
  key: 1,
  class: "issue-card__items"
}, nf = {
  key: 2,
  class: "issue-card__actions"
}, af = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", {
      class: Se(["issue-card", o.value])
    }, [
      t("div", Qd, [
        t("span", Zd, f(e.icon), 1),
        t("h4", ef, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", tf, [
        e.description ? (a(), r("p", sf, f(e.description), 1)) : y("", !0),
        He(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", of, [
        (a(!0), r(G, null, pe(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", nf, [
        He(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ me(af, [["__scopeId", "data-v-df6aa348"]]), lf = ["type", "disabled"], rf = {
  key: 0,
  class: "spinner"
}, cf = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), r("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Se(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", rf)) : y("", !0),
      e.loading ? y("", !0) : He(s.$slots, "default", { key: 1 }, void 0)
    ], 10, lf));
  }
}), le = /* @__PURE__ */ me(cf, [["__scopeId", "data-v-772abe47"]]), uf = { class: "empty-state" }, df = {
  key: 0,
  class: "empty-icon"
}, ff = { class: "empty-message" }, mf = /* @__PURE__ */ fe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", uf, [
      e.icon ? (a(), r("div", df, f(e.icon), 1)) : y("", !0),
      t("p", ff, f(e.message), 1),
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
}), ss = /* @__PURE__ */ me(mf, [["__scopeId", "data-v-4466284f"]]), vf = /* @__PURE__ */ fe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Se(["detail-label"]),
      style: Gt({ minWidth: e.minWidth })
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), wn = /* @__PURE__ */ me(vf, [["__scopeId", "data-v-75e9eeb8"]]), pf = /* @__PURE__ */ fe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Se(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Sa = /* @__PURE__ */ me(pf, [["__scopeId", "data-v-2f186e4c"]]), gf = { class: "detail-row" }, hf = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), r("div", gf, [
      x(wn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(Sa, {
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
}), ft = /* @__PURE__ */ me(hf, [["__scopeId", "data-v-ef15664a"]]), yf = { class: "modal-header" }, wf = { class: "modal-body" }, _f = { class: "status-section" }, bf = {
  key: 0,
  class: "status-section"
}, kf = { class: "section-header-row" }, $f = {
  key: 0,
  class: "workflow-group"
}, Cf = { class: "workflow-group-header" }, xf = { class: "workflow-group-title" }, Sf = { class: "workflow-list" }, If = { class: "workflow-name" }, Ef = { class: "workflow-issue" }, Tf = {
  key: 1,
  class: "workflow-group"
}, Pf = { class: "workflow-group-header" }, Rf = { class: "workflow-group-title" }, Mf = { class: "workflow-list" }, Df = { class: "workflow-name" }, Lf = { class: "workflow-issue" }, Of = {
  key: 2,
  class: "workflow-group"
}, Af = { class: "workflow-group-header" }, Nf = { class: "workflow-group-title" }, Uf = { class: "workflow-list" }, zf = { class: "workflow-name" }, Ff = {
  key: 3,
  class: "workflow-group"
}, Bf = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Wf = { class: "workflow-list" }, Gf = { class: "workflow-name" }, jf = {
  key: 4,
  class: "workflow-group"
}, Hf = { class: "workflow-group-header" }, Kf = { class: "workflow-group-title" }, qf = { class: "workflow-list" }, Yf = { class: "workflow-name" }, Jf = {
  key: 5,
  class: "workflow-group"
}, Xf = { class: "workflow-group-title" }, Qf = { class: "expand-icon" }, Zf = {
  key: 0,
  class: "workflow-list"
}, em = { class: "workflow-name" }, tm = {
  key: 1,
  class: "status-section"
}, sm = {
  key: 0,
  class: "change-group"
}, om = { class: "change-group-header" }, nm = { class: "change-group-title" }, am = { class: "change-list" }, lm = { class: "node-name" }, im = {
  key: 0,
  class: "dev-badge"
}, rm = {
  key: 1,
  class: "change-group"
}, cm = { class: "change-group-header" }, um = { class: "change-group-title" }, dm = { class: "change-list" }, fm = { class: "node-name" }, mm = {
  key: 0,
  class: "dev-badge"
}, vm = {
  key: 2,
  class: "change-group"
}, pm = { class: "change-list" }, gm = { class: "change-item" }, hm = { class: "node-name" }, ym = {
  key: 3,
  class: "change-group"
}, wm = {
  key: 2,
  class: "status-section"
}, _m = { class: "section-header-row" }, bm = {
  key: 0,
  class: "drift-item"
}, km = { class: "drift-list" }, $m = {
  key: 0,
  class: "drift-list-more"
}, Cm = {
  key: 1,
  class: "drift-item"
}, xm = { class: "drift-list" }, Sm = {
  key: 0,
  class: "drift-list-more"
}, Im = {
  key: 2,
  class: "drift-item"
}, Em = { class: "drift-list" }, Tm = { class: "version-actual" }, Pm = { class: "version-expected" }, Rm = {
  key: 0,
  class: "drift-list-more"
}, Mm = {
  key: 3,
  class: "drift-item"
}, Dm = { class: "repair-action" }, Lm = {
  key: 3,
  class: "status-section"
}, Om = { class: "info-box" }, Am = { class: "drift-list" }, Nm = {
  key: 0,
  class: "drift-list-more"
}, Um = {
  key: 4,
  class: "status-section"
}, zm = { class: "warning-box" }, Fm = {
  key: 5,
  class: "empty-state-inline"
}, Bm = { class: "modal-actions" }, Vm = /* @__PURE__ */ fe({
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
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = F(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), i = F(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((C) => {
        var P, L, T;
        const $ = (T = (L = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : T.find((S) => S.name === C);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = F(() => {
      var w, p, _, C, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = F(() => {
      var p, _, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = F(() => {
      var w, p, _, C, $, P;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
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
      var _, C, $, P, L, T, S, q, B, A, I, E, O, re, Y, H, te, Q, N, U, M, we;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (ve) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", yf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (ve) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", wf, [
              t("div", _f, [
                x(Ot, { level: "4" }, {
                  default: g(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                x(ft, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", bf, [
                t("div", kf, [
                  x(Ot, { level: "4" }, {
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
                n.value.length ? (a(), r("div", $f, [
                  t("div", Cf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", xf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (a(!0), r(G, null, pe(n.value, (ve) => (a(), r("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      t("span", If, f(ve.name), 1),
                      t("span", Ef, f(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Tf, [
                  t("div", Pf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Rf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Mf, [
                    (a(!0), r(G, null, pe(l.value, (ve) => (a(), r("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      t("span", Df, f(ve.name), 1),
                      t("span", Lf, f(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (a(), r("div", Of, [
                  t("div", Af, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Nf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Uf, [
                    (a(!0), r(G, null, pe(e.status.workflows.new, (ve) => (a(), r("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", zf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), r("div", Ff, [
                  t("div", Bf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Vf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Wf, [
                    (a(!0), r(G, null, pe(e.status.workflows.modified, (ve) => (a(), r("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Gf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (L = e.status.workflows) == null ? void 0 : L.deleted) != null && T.length ? (a(), r("div", jf, [
                  t("div", Hf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Kf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", qf, [
                    (a(!0), r(G, null, pe(e.status.workflows.deleted, (ve) => (a(), r("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Yf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", Jf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (ve) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Xf, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", Qf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", Zf, [
                    (a(!0), r(G, null, pe(i.value, (ve) => (a(), r("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", em, f(ve), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), r("div", tm, [
                x(Ot, { level: "4" }, {
                  default: g(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (S = e.status.git_changes) == null ? void 0 : S.nodes_added) != null && q.length ? (a(), r("div", sm, [
                  t("div", om, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", nm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", am, [
                    (a(!0), r(G, null, pe(e.status.git_changes.nodes_added, (ve) => (a(), r("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      t("span", lm, f(v(ve)), 1),
                      h(ve) ? (a(), r("span", im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (A = (B = e.status.git_changes) == null ? void 0 : B.nodes_removed) != null && A.length ? (a(), r("div", rm, [
                  t("div", cm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", um, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", dm, [
                    (a(!0), r(G, null, pe(e.status.git_changes.nodes_removed, (ve) => (a(), r("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      t("span", fm, f(v(ve)), 1),
                      h(ve) ? (a(), r("span", mm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (a(), r("div", vm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", pm, [
                    t("div", gm, [
                      t("span", hm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.has_other_changes ? (a(), r("div", ym, [...p[21] || (p[21] = [
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
              (O = e.status.comparison) != null && O.is_synced ? y("", !0) : (a(), r("div", wm, [
                t("div", _m, [
                  x(Ot, { level: "4" }, {
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
                (Y = (re = e.status.comparison) == null ? void 0 : re.missing_nodes) != null && Y.length ? (a(), r("div", bm, [
                  x(ft, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", km, [
                    (a(!0), r(G, null, pe(e.status.comparison.missing_nodes.slice(0, 10), (ve) => (a(), r("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + f(ve), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", $m, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (te = (H = e.status.comparison) == null ? void 0 : H.extra_nodes) != null && te.length ? (a(), r("div", Cm, [
                  x(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", xm, [
                    (a(!0), r(G, null, pe(e.status.comparison.extra_nodes.slice(0, 10), (ve) => (a(), r("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + f(ve), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Sm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (N = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && N.length ? (a(), r("div", Im, [
                  x(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Em, [
                    (a(!0), r(G, null, pe(e.status.comparison.version_mismatches.slice(0, 10), (ve) => (a(), r("div", {
                      key: ve.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(ve.name) + ": ", 1),
                      t("span", Tm, f(ve.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Pm, f(ve.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Rm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((U = e.status.comparison) == null ? void 0 : U.packages_in_sync) === !1 ? (a(), r("div", Mm, [
                  x(ft, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Dm, [
                  x(le, {
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
              (we = (M = e.status.comparison) == null ? void 0 : M.disabled_nodes) != null && we.length ? (a(), r("div", Lm, [
                x(Ot, { level: "4" }, {
                  default: g(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Om, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Am, [
                  (a(!0), r(G, null, pe(e.status.comparison.disabled_nodes.slice(0, 10), (ve) => (a(), r("div", {
                    key: ve,
                    class: "drift-list-item"
                  }, " • " + f(ve), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Nm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Um, [
                x(Ot, { level: "4" }, {
                  default: g(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", zm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), r("div", Fm, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Bm, [
              x(le, {
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
}), Wm = /* @__PURE__ */ me(Vm, [["__scopeId", "data-v-e2b37122"]]), Gm = { class: "health-section-header" }, jm = { class: "suggestions-content" }, Hm = { class: "suggestions-text" }, Km = { style: { "margin-top": "var(--cg-space-3)" } }, qm = {
  key: 1,
  class: "no-issues-text"
}, Ym = /* @__PURE__ */ fe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = k(!1), i = k(!1);
    function c() {
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
    const C = F(() => {
      const Q = n.status.workflows.analyzed || [], N = Q.filter(
        (U) => U.unresolved_models_count > 0 || U.ambiguous_models_count > 0
      );
      return N.length === 0 && n.status.missing_models_count > 0 ? Q.filter((U) => U.sync_state === "synced") : N;
    });
    function $() {
      const Q = C.value;
      Q.length !== 0 && (v.value = !0, m("repair-missing-models", Q.map((N) => N.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const L = F(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), T = F(() => n.status.has_changes), S = F(() => {
      const Q = n.status.git_changes;
      return Q.nodes_added.length > 0 || Q.nodes_removed.length > 0 || Q.workflow_changes;
    }), q = F(() => n.status.has_changes || L.value), B = F(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), A = F(() => n.status.git_changes.has_other_changes), I = F(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter((N) => N.status === "broken")) || [];
    }), E = F(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), O = F(() => I.value.length > 0), re = F(() => O.value || E.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = F(() => {
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
    return (Q, N) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, { title: "STATUS" })
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
              x(le, {
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
              x(le, {
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
              x(le, {
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
            t("div", Gm, [
              x(Ot, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...N[16] || (N[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              x(Fu, { name: "fade" }, {
                default: g(() => [
                  i.value ? (a(), R(le, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
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
            x(Kd, {
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
                x(rs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: L.value
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
                T.value && !S.value && !A.value ? (a(), R(rs, {
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
                  t("div", jm, [
                    t("span", Hm, f(Y.value), 1),
                    x(le, {
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
              x(le, {
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
          t("div", Km, [
            x(Ot, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...N[21] || (N[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (a(), r(G, { key: 0 }, [
              I.value.length > 0 ? (a(), R(Kt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((U) => `${U.name} — ${U.issue_summary}`)
              }, {
                actions: g(() => [
                  x(le, {
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
                  x(le, {
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
              e.status.missing_models_count > 0 && !O.value ? (a(), R(Kt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  x(le, {
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
                  x(le, {
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
                  x(le, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...N[25] || (N[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  x(le, {
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
                  x(le, {
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
            ], 64)) : q.value ? (a(), r("span", qm, "No issues")) : (a(), R(ss, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      x(Wm, {
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
}), Jm = /* @__PURE__ */ me(Ym, [["__scopeId", "data-v-55fcd77f"]]), Xm = ["type", "value", "placeholder", "disabled"], Qm = /* @__PURE__ */ fe({
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
    function c(u) {
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
    }), (u, d) => (a(), r("input", {
      ref_key: "inputRef",
      ref: i,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Se(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Xt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Xt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, Xm));
  }
}), Pn = /* @__PURE__ */ me(Qm, [["__scopeId", "data-v-0380d08f"]]), Zm = { class: "branch-create-form" }, ev = { class: "form-actions" }, tv = /* @__PURE__ */ fe({
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
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), r("div", Zm, [
      x(Pn, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", ev, [
        x(le, {
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
        x(le, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: g(() => [...d[2] || (d[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), sv = /* @__PURE__ */ me(tv, [["__scopeId", "data-v-7c500394"]]), ov = { class: "branch-list-item__indicator" }, nv = { class: "branch-list-item__name" }, av = {
  key: 0,
  class: "branch-list-item__actions"
}, lv = {
  key: 0,
  class: "branch-list-item__current-label"
}, iv = /* @__PURE__ */ fe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Se(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", ov, f(e.isCurrent ? "●" : "○"), 1),
      t("span", nv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", av, [
        He(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", lv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), rv = /* @__PURE__ */ me(iv, [["__scopeId", "data-v-c6581a24"]]), cv = {
  key: 2,
  class: "branch-list"
}, uv = /* @__PURE__ */ fe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(c) {
      o("create", c), i();
    }
    function i() {
      n.value = !1;
    }
    return (c, u) => (a(), R(Tt, null, {
      header: g(() => [
        x(Pt, { title: "BRANCHES" }, {
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
        n.value ? (a(), R(sv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(ss, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", cv, [
          (a(!0), r(G, null, pe(e.branches, (d) => (a(), R(rv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: g(() => [
              d.is_current ? y("", !0) : (a(), R(le, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => c.$emit("delete", d.name)
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
                onClick: (m) => c.$emit("switch", d.name)
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
}), dv = /* @__PURE__ */ me(uv, [["__scopeId", "data-v-86784ddd"]]), fv = { class: "commit-list" }, mv = /* @__PURE__ */ fe({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", fv, [
      He(s.$slots, "default", {}, void 0)
    ]));
  }
}), vv = /* @__PURE__ */ me(mv, [["__scopeId", "data-v-8c5ee761"]]), pv = { class: "commit-hash" }, gv = /* @__PURE__ */ fe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = F(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", pv, f(o.value), 1));
  }
}), hr = /* @__PURE__ */ me(gv, [["__scopeId", "data-v-7c333cc6"]]), hv = { class: "commit-message" }, yv = { class: "commit-date" }, wv = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), r("div", {
      class: Se(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      x(hr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", hv, f(e.message), 1),
      t("span", yv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), r("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = it(() => {
        }, ["stop"]))
      }, [
        He(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), _v = /* @__PURE__ */ me(wv, [["__scopeId", "data-v-dd7c621b"]]), bv = /* @__PURE__ */ fe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), R(Tt, null, {
      header: g(() => [
        x(Pt, { title: "HISTORY" })
      ]),
      content: g(() => [
        e.commits.length === 0 ? (a(), R(ss, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(vv, { key: 1 }, {
          default: g(() => [
            (a(!0), r(G, null, pe(e.commits, (n) => (a(), R(_v, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: g(() => [
                x(le, {
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
}), kv = /* @__PURE__ */ me(bv, [["__scopeId", "data-v-981c3c64"]]), JT = Fs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const XT = [
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
], QT = {
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
}, $v = [
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
], ZT = [
  ...$v,
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
function io() {
  return !1;
}
function rt() {
  const e = k(!1), s = k(null);
  async function o(J, be) {
    var ct;
    if (!((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi(J, be);
    if (!Ae.ok) {
      const Ne = await Ae.json().catch(() => ({}));
      throw new Error(Ne.error || Ne.message || `Request failed: ${Ae.status}`);
    }
    return Ae.json();
  }
  async function n(J = !1) {
    return o(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(J, be = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: be })
    });
  }
  async function i(J = 10, be = 0) {
    return o(`/v2/comfygit/log?limit=${J}&offset=${be}`);
  }
  async function c(J) {
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
  async function w(J, be = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: be })
    });
  }
  async function p(J, be = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: be })
    });
  }
  async function _(J, be = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: be })
    });
  }
  async function C(J, be = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(J)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: be })
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
  async function P(J, be) {
    const Ae = { target_env: J };
    return be && (Ae.workspace_path = be), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ae)
    });
  }
  async function L() {
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
  async function S() {
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
      const be = await n(J), Ae = [];
      return be.workflows.new.forEach((ct) => {
        Ae.push({ name: ct, status: "new", missing_nodes: 0, missing_models: 0, path: ct });
      }), be.workflows.modified.forEach((ct) => {
        Ae.push({ name: ct, status: "modified", missing_nodes: 0, missing_models: 0, path: ct });
      }), be.workflows.synced.forEach((ct) => {
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
  async function O(J, be, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: be, install_models: Ae })
    });
  }
  async function re(J, be, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: be, importance: Ae })
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
  async function N(J, be) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function U(J, be) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
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
  async function Me(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function Ke(J) {
    try {
      const be = J ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(J)}` : "/v2/comfygit/config";
      return o(be);
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
  async function Xe(J, be) {
    const Ae = be ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(be)}` : "/v2/comfygit/config";
    return o(Ae, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ke(J, be) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), be && Ae.append("lines", be.toString()), o(`/v2/comfygit/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Ee(J, be) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), be && Ae.append("lines", be.toString()), o(`/v2/workspace/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Ge() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function _e() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ae(J, be) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), be && Ae.append("lines", be.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ae}`);
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
  async function $e(J, be) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: be })
    });
  }
  async function Ce(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function oe(J, be, Ae) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: be, push_url: Ae })
    });
  }
  async function ce(J, be) {
    const Ae = {};
    return be && (Ae["X-Git-Auth-Token"] = be), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST",
      headers: Ae
    });
  }
  async function Le(J) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function xe(J = "skip", be = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: be
      })
    });
  }
  async function Z(J, be) {
    const Ae = be ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview`;
    return o(Ae);
  }
  async function K(J, be = {}) {
    const Ae = { "Content-Type": "application/json" };
    return be.authToken && (Ae["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/pull`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({
        model_strategy: be.modelStrategy || "skip",
        force: be.force || !1,
        resolutions: be.resolutions
      })
    });
  }
  async function Pe(J, be) {
    const Ae = be ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Ae);
  }
  async function he(J, be = {}) {
    const Ae = { "Content-Type": "application/json" };
    return be.authToken && (Ae["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({ force: be.force || !1 })
    });
  }
  async function ge(J, be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: be })
    });
  }
  async function W(J) {
    const be = {
      success: 0,
      failed: []
    };
    for (const Ae of J)
      try {
        await E(Ae), be.success++;
      } catch (ct) {
        be.failed.push({
          name: Ae,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return be;
  }
  async function z(J) {
    var ct;
    const be = new FormData();
    if (be.append("file", J), !((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: be
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
  async function ze(J, be, Ae, ct) {
    var sl;
    const Ne = new FormData();
    if (Ne.append("file", J), Ne.append("name", be), Ne.append("model_strategy", Ae), Ne.append("torch_backend", ct), !((sl = window.app) != null && sl.api))
      throw new Error("ComfyUI API not available");
    const Co = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ne
    });
    if (!Co.ok) {
      const ol = await Co.json().catch(() => ({}));
      throw new Error(ol.message || ol.error || `Import failed: ${Co.status}`);
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
  async function at(J, be, Ae, ct) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: J,
        name: be,
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
  async function so(J, be) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: be })
    });
  }
  async function bo() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ko(J) {
    const be = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(be);
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
  async function j(J) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function De() {
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
  async function mt(J, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function Mt(J, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(be)}/start`, {
      method: "POST"
    });
  }
  async function ls(J, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(be)}/stop`, {
      method: "POST"
    });
  }
  async function Vs(J, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(be)}`, {
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
    exportEnv: c,
    validateExport: u,
    validateDeploy: d,
    exportEnvWithForce: m,
    // Git Operations
    getBranches: v,
    getCommitDetail: h,
    checkout: w,
    createBranch: p,
    switchBranch: _,
    deleteBranch: C,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: L,
    createEnvironment: T,
    getCreateProgress: S,
    getComfyUIReleases: q,
    deleteEnvironment: B,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: I,
    resolveWorkflow: E,
    installWorkflowDeps: O,
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
    setModelsDirectory: Me,
    // Settings
    getConfig: Ke,
    updateConfig: Xe,
    // Debug/Logs
    getEnvironmentLogs: ke,
    getWorkspaceLogs: Ee,
    getEnvironmentLogPath: Ge,
    getWorkspaceLogPath: _e,
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
    getRemoteSyncStatus: Le,
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
    testRunPodConnection: so,
    getNetworkVolumes: bo,
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
    testWorkerConnection: j,
    scanForWorkers: De,
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
async function dn(e, s) {
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
function Cv() {
  async function e() {
    try {
      return await dn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await dn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await dn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await dn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const xv = { class: "base-modal-header" }, Sv = {
  key: 0,
  class: "base-modal-title"
}, Iv = { class: "base-modal-body" }, Ev = {
  key: 0,
  class: "base-modal-loading"
}, Tv = {
  key: 1,
  class: "base-modal-error"
}, Pv = {
  key: 0,
  class: "base-modal-footer"
}, Rv = /* @__PURE__ */ fe({
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
    function i(c) {
      c.key === "Escape" && o.showCloseButton && n("close");
    }
    return et(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), to(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, u) => (a(), R(wt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Se(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", xv, [
            He(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", Sv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), r("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => c.$emit("close"))
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
          t("div", Iv, [
            e.loading ? (a(), r("div", Ev, "Loading...")) : e.error ? (a(), r("div", Tv, f(e.error), 1)) : He(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Pv, [
            He(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), pt = /* @__PURE__ */ me(Rv, [["__scopeId", "data-v-8dab1081"]]), Mv = ["type", "disabled"], Dv = {
  key: 0,
  class: "spinner"
}, Lv = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), r("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Se(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", Dv)) : y("", !0),
      He(s.$slots, "default", {}, void 0)
    ], 10, Mv));
  }
}), Re = /* @__PURE__ */ me(Lv, [["__scopeId", "data-v-f3452606"]]), Ov = {
  key: 0,
  class: "base-title-count"
}, Av = /* @__PURE__ */ fe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), R(Ga(`h${e.level}`), {
      class: Se(["base-title", e.variant])
    }, {
      default: g(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Ov, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Fo = /* @__PURE__ */ me(Av, [["__scopeId", "data-v-5a01561d"]]), Nv = ["value", "disabled"], Uv = {
  key: 0,
  value: "",
  disabled: ""
}, zv = ["value"], Fv = {
  key: 0,
  class: "base-select-error"
}, Bv = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", {
      class: Se(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Se(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), r("option", Uv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(G, null, pe(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, zv))), 128))
      ], 42, Nv),
      e.error ? (a(), r("span", Fv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Vv = /* @__PURE__ */ me(Bv, [["__scopeId", "data-v-7436d745"]]), Wv = { class: "popover-header" }, Gv = { class: "popover-title" }, jv = { class: "popover-content" }, Hv = {
  key: 0,
  class: "popover-actions"
}, Kv = /* @__PURE__ */ fe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
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
          t("div", Wv, [
            t("h4", Gv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", jv, [
            He(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Hv, [
            He(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), os = /* @__PURE__ */ me(Kv, [["__scopeId", "data-v-42815ace"]]), qv = { class: "detail-section" }, Yv = {
  key: 0,
  class: "empty-message"
}, Jv = { class: "model-header" }, Xv = { class: "model-name" }, Qv = { class: "model-details" }, Zv = { class: "model-row" }, ep = { class: "model-row" }, tp = { class: "label" }, sp = {
  key: 0,
  class: "model-row model-row-nodes"
}, op = { class: "node-list" }, np = ["onClick"], ap = {
  key: 1,
  class: "model-row"
}, lp = { class: "value" }, ip = {
  key: 2,
  class: "model-row"
}, rp = { class: "value error" }, cp = {
  key: 0,
  class: "model-actions"
}, up = { class: "detail-section" }, dp = {
  key: 0,
  class: "empty-message"
}, fp = { class: "node-name" }, mp = {
  key: 0,
  class: "node-version"
}, vp = /* @__PURE__ */ fe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = rt(), u = k(null), d = k(!1), m = k(null), v = k(!1), h = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(I) {
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
    function L(I) {
      return p.value.has(I);
    }
    function T(I) {
      p.value.has(I) ? p.value.delete(I) : p.value.add(I), p.value = new Set(p.value);
    }
    async function S() {
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
        await c(I);
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
    return et(S), (I, E) => (a(), r(G, null, [
      x(pt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (O) => n("close"))
      }, {
        body: g(() => [
          u.value ? (a(), r(G, { key: 0 }, [
            t("section", qv, [
              x(Fo, { variant: "section" }, {
                default: g(() => [
                  b("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", Yv, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(G, null, pe(u.value.models, (O) => {
                var re;
                return a(), r("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  t("div", Jv, [
                    E[6] || (E[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Xv, f(O.filename), 1)
                  ]),
                  t("div", Qv, [
                    t("div", Zv, [
                      E[7] || (E[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Se(["value", C(O.status)])
                      }, f($(O.status)), 3)
                    ]),
                    t("div", ep, [
                      t("span", tp, [
                        E[8] || (E[8] = b(" Importance: ", -1)),
                        x(gr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (Y) => w.value = !0)
                        })
                      ]),
                      x(Vv, {
                        "model-value": h.value[O.filename] || O.importance,
                        options: _,
                        "onUpdate:modelValue": (Y) => q(O.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (a(), r("div", sp, [
                      E[9] || (E[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", op, [
                        (a(!0), r(G, null, pe(P(O), (Y, H) => (a(), r("div", {
                          key: `${Y.node_id}-${H}`,
                          class: "node-reference"
                        }, f(Y.node_type) + " (Node #" + f(Y.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => T(O.hash || O.filename)
                        }, f(L(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, np)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    O.size_mb ? (a(), r("div", ap, [
                      E[10] || (E[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", lp, f(O.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    O.has_category_mismatch ? (a(), r("div", ip, [
                      E[13] || (E[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", rp, [
                        E[11] || (E[11] = b(" In ", -1)),
                        t("code", null, f(O.actual_category) + "/", 1),
                        E[12] || (E[12] = b(" but loader needs ", -1)),
                        t("code", null, f((re = O.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  O.status !== "available" ? (a(), r("div", cp, [
                    O.status === "downloadable" ? (a(), R(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (Y) => n("resolve"))
                    }, {
                      default: g(() => [...E[14] || (E[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (a(), R(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => B(O.file_path)
                    }, {
                      default: g(() => [...E[15] || (E[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (a(), R(Re, {
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
            t("section", up, [
              x(Fo, { variant: "section" }, {
                default: g(() => [
                  b("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), r("div", dp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(G, null, pe(u.value.nodes, (O) => (a(), r("div", {
                key: O.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Se(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, f(O.status === "installed" ? "✓" : "✕"), 3),
                t("span", fp, f(O.name), 1),
                O.version ? (a(), r("span", mp, "v" + f(O.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: g(() => [
          x(Re, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (O) => n("close"))
          }, {
            default: g(() => [...E[17] || (E[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), R(Re, {
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
      x(os, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: E[5] || (E[5] = (O) => w.value = !1)
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
}), pp = /* @__PURE__ */ me(vp, [["__scopeId", "data-v-668728e6"]]), Ye = Fs({
  items: [],
  status: "idle"
});
let ds = null;
function yr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function la(e) {
  return Ye.items.find((s) => s.id === e);
}
async function ro() {
  if (Ye.status === "downloading") return;
  const e = Ye.items.find((s) => s.status === "queued");
  if (!e) {
    Ye.status = "idle";
    return;
  }
  Ye.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await gp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", ro();
  }
}
async function gp(e) {
  return new Promise((s, o) => {
    ds && (ds.close(), ds = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    ds = l;
    let i = Date.now(), c = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
        switch (m.type) {
          case "progress":
            e.downloaded = m.downloaded || 0, e.size = m.total || e.size;
            const v = Date.now(), h = (v - i) / 1e3;
            if (h > 0.5) {
              const w = e.downloaded - c;
              if (e.speed = w / h, i = v, c = e.downloaded, e.speed > 0 && e.size > 0) {
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
async function hp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: yr(),
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
function sn() {
  function e($) {
    for (const P of $) {
      if (Ye.items.some(
        (S) => S.url === P.url && S.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const T = {
        id: yr(),
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
    Ye.status === "idle" && ro();
  }
  async function s($) {
    const P = la($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ds && (ds.close(), ds = null), P.status = "failed", P.error = "Cancelled by user", Ye.status = "idle", ro();
      } else if (P.status === "queued") {
        const L = Ye.items.findIndex((T) => T.id === $);
        L >= 0 && Ye.items.splice(L, 1);
      }
    }
  }
  function o($) {
    const P = la($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Ye.status === "idle" && ro());
  }
  function n($) {
    const P = la($);
    !P || P.status !== "paused" || (P.status = "queued", Ye.status === "idle" && ro());
  }
  function l() {
    const $ = Ye.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Ye.status === "idle" && ro();
  }
  function i($) {
    const P = Ye.items.findIndex((L) => L.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Ye.items[P].status) && Ye.items.splice(P, 1);
  }
  function c() {
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
  ), C = F(
    () => Ye.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: bn(Ye),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: h,
    pausedItems: w,
    hasItems: p,
    activeCount: _,
    hasPaused: C,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: hp
  };
}
function wr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(L, T) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(L, T);
    if (!S.ok) {
      const B = await S.json().catch(() => ({})), A = B.error || B.message || `Request failed: ${S.status}`;
      throw new Error(A);
    }
    return S.json();
  }
  async function u(L) {
    l.value = !0, i.value = null;
    try {
      let T;
      return io() || (T = await c(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = T, T;
    } catch (T) {
      const S = T instanceof Error ? T.message : "Unknown error occurred";
      throw i.value = S, T;
    } finally {
      l.value = !1;
    }
  }
  async function d(L, T, S, q) {
    l.value = !0, i.value = null;
    try {
      let B;
      if (!io()) {
        const A = Object.fromEntries(T), I = Object.fromEntries(S), E = q ? Array.from(q) : [];
        B = await c(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
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
  async function m(L, T = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return io() || (S = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: T })
        }
      )), o.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
    } finally {
      l.value = !1;
    }
  }
  async function v(L, T = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return io() || (S = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: T })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
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
  async function p(L) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return io(), await _(L);
    } catch (T) {
      const S = T instanceof Error ? T.message : "Failed to install nodes";
      throw h.installError = S, T;
    }
  }
  async function _(L) {
    var S;
    const T = await c(
      `/v2/comfygit/workflow/${L}/install`,
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
      const q = new Map(((S = T.failed) == null ? void 0 : S.map((B) => [B.node_id, B.error])) || []);
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
  async function C(L, T, S) {
    w(), h.phase = "resolving", i.value = null;
    const q = Object.fromEntries(T), B = Object.fromEntries(S);
    try {
      const A = await fetch(`/v2/comfygit/workflow/${L}/apply-resolution-stream`, {
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
      let O = "";
      for (; ; ) {
        const { done: re, value: Y } = await I.read();
        if (re) break;
        O += E.decode(Y, { stream: !0 });
        const H = O.split(`

`);
        O = H.pop() || "";
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
  function $(L, T) {
    switch (L) {
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
  function P(L, T) {
    const { addToQueue: S } = sn(), q = T.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: L,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return q.length > 0 && S(q), q.length;
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
    applyResolutionWithProgress: C,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: P
  };
}
const yp = { class: "resolution-stepper" }, wp = { class: "stepper-header" }, _p = ["onClick"], bp = {
  key: 0,
  class: "step-icon"
}, kp = {
  key: 1,
  class: "step-number"
}, $p = { class: "step-label" }, Cp = {
  key: 0,
  class: "step-connector"
}, xp = { class: "stepper-content" }, Sp = /* @__PURE__ */ fe({
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
    function c(m) {
      return l(m) ? "state-complete" : i(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function d(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), r("div", yp, [
      t("div", wp, [
        (a(!0), r(G, null, pe(e.steps, (h, w) => (a(), r("div", {
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
            class: Se(["step-indicator", c(h.id)])
          }, [
            l(h.id) ? (a(), r("span", bp, "✓")) : (a(), r("span", kp, f(w + 1), 1))
          ], 2),
          t("div", $p, f(h.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Cp)) : y("", !0)
        ], 10, _p))), 128))
      ]),
      t("div", xp, [
        He(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Ip = /* @__PURE__ */ me(Sp, [["__scopeId", "data-v-2a7b3af8"]]), Ep = /* @__PURE__ */ fe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = F(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = F(() => `confidence-${o.value}`), l = F(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Se(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Rn = /* @__PURE__ */ me(Ep, [["__scopeId", "data-v-17ec4b80"]]), Tp = { class: "node-info" }, Pp = { class: "node-info-text" }, Rp = { class: "item-body" }, Mp = {
  key: 0,
  class: "resolved-state"
}, Dp = {
  key: 1,
  class: "multiple-options"
}, Lp = { class: "options-list" }, Op = ["onClick"], Ap = ["name", "value", "checked", "onChange"], Np = { class: "option-content" }, Up = { class: "option-header" }, zp = { class: "option-package-id" }, Fp = {
  key: 0,
  class: "option-title"
}, Bp = { class: "option-meta" }, Vp = {
  key: 0,
  class: "installed-badge"
}, Wp = { class: "action-buttons" }, Gp = {
  key: 2,
  class: "unresolved"
}, jp = {
  key: 0,
  class: "searching-state"
}, Hp = { class: "options-list" }, Kp = ["onClick"], qp = ["name", "value"], Yp = { class: "option-content" }, Jp = { class: "option-header" }, Xp = { class: "option-package-id" }, Qp = {
  key: 0,
  class: "option-description"
}, Zp = { class: "option-meta" }, eg = {
  key: 0,
  class: "installed-badge"
}, tg = {
  key: 2,
  class: "unresolved-message"
}, sg = { class: "action-buttons" }, og = /* @__PURE__ */ fe({
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
    const c = F(() => {
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
    return (d, m) => (a(), r("div", {
      class: Se(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Tp, [
        t("span", Pp, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Se(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Rp, [
        i.value ? (a(), r("div", Mp, [
          x(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Dp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Lp, [
            (a(!0), r(G, null, pe(e.options, (v, h) => (a(), r("label", {
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
              }, null, 40, Ap),
              t("div", Np, [
                t("div", Up, [
                  t("span", zp, f(v.package_id), 1),
                  x(Rn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", Fp, f(v.title), 1)) : y("", !0),
                t("div", Bp, [
                  v.is_installed ? (a(), r("span", Vp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Op))), 128))
          ]),
          t("div", Wp, [
            x(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            x(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Re, {
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
        ])) : (a(), r("div", Gp, [
          e.isSearching ? (a(), r("div", jp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(G, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Hp, [
              (a(!0), r(G, null, pe(e.searchResults.slice(0, 5), (v, h) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: h
                }, null, 8, qp),
                t("div", Yp, [
                  t("div", Jp, [
                    t("span", Xp, f(v.package_id), 1),
                    x(Rn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", Qp, f(l(v.description)), 1)) : y("", !0),
                  t("div", Zp, [
                    v.is_installed ? (a(), r("span", eg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Kp))), 128))
            ])
          ], 64)) : (a(), r("div", tg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", sg, [
            x(Re, {
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
            x(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Re, {
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
}), ng = /* @__PURE__ */ me(og, [["__scopeId", "data-v-c2997d1d"]]), ag = { class: "item-navigator" }, lg = { class: "nav-item-info" }, ig = ["title"], rg = { class: "nav-controls" }, cg = { class: "nav-arrows" }, ug = ["disabled"], dg = ["disabled"], fg = { class: "nav-position" }, mg = /* @__PURE__ */ fe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", ag, [
      t("div", lg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, ig)
      ]),
      t("div", rg, [
        t("div", cg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, ug),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, dg)
        ]),
        t("span", fg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), _r = /* @__PURE__ */ me(mg, [["__scopeId", "data-v-74af7920"]]), vg = ["type", "value", "placeholder", "disabled"], pg = {
  key: 0,
  class: "base-input-error"
}, gg = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), r("div", {
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
      }, null, 42, vg),
      e.error ? (a(), r("span", pg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ me(gg, [["__scopeId", "data-v-9ba02cdc"]]), hg = { class: "node-resolution-step" }, yg = {
  key: 0,
  class: "auto-resolved-section"
}, wg = { class: "section-header" }, _g = { class: "stat-badge" }, bg = { class: "resolved-packages-list" }, kg = { class: "package-info" }, $g = { class: "package-id" }, Cg = { class: "node-count" }, xg = { class: "package-actions" }, Sg = {
  key: 0,
  class: "status-badge install"
}, Ig = {
  key: 1,
  class: "status-badge skip"
}, Eg = ["onClick"], Tg = {
  key: 1,
  class: "section-divider"
}, Pg = { class: "step-header" }, Rg = { class: "stat-badge" }, Mg = {
  key: 1,
  class: "step-body"
}, Dg = {
  key: 3,
  class: "empty-state"
}, Lg = { class: "node-modal-body" }, Og = { class: "node-search-results-container" }, Ag = {
  key: 0,
  class: "node-search-results"
}, Ng = ["onClick"], Ug = { class: "node-result-header" }, zg = { class: "node-result-package-id" }, Fg = {
  key: 0,
  class: "node-result-description"
}, Bg = {
  key: 1,
  class: "node-empty-state"
}, Vg = {
  key: 2,
  class: "node-empty-state"
}, Wg = {
  key: 3,
  class: "node-empty-state"
}, Gg = { class: "node-manual-entry-modal" }, jg = { class: "node-modal-body" }, Hg = { class: "node-modal-actions" }, Kg = /* @__PURE__ */ fe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = wr(), i = k(0), c = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), h = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && U(), _.value = !1;
    }
    const $ = F(() => o.nodes[i.value]), P = F(() => o.nodes.filter((ke) => o.nodeChoices.has(ke.node_type)).length), L = F(() => $.value ? w.value.get($.value.node_type) || [] : []), T = F(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (ke) => {
      var Ee;
      ke && ((Ee = ke.options) != null && Ee.length || w.value.has(ke.node_type) || p.value.has(ke.node_type) || o.nodeChoices.has(ke.node_type) || await S(ke.node_type));
    }, { immediate: !0 });
    async function S(ke) {
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
    function O(ke) {
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
      $.value && (d.value = $.value.node_type, v.value = L.value, c.value = !0, Ie(d.value));
    }
    function N() {
      m.value = "", u.value = !0;
    }
    function U() {
      c.value = !1, d.value = "", v.value = [];
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
    function Me(ke) {
      $.value && (n("manual-entry", $.value.node_type, ke.package_id), U());
    }
    function Ke(ke) {
      $.value && n("manual-entry", $.value.node_type, ke.package_id);
    }
    function Xe() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), M());
    }
    return (ke, Ee) => {
      var Ge, _e;
      return a(), r("div", hg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", yg, [
          t("div", wg, [
            Ee[6] || (Ee[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", _g, f(q.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", bg, [
            (a(!0), r(G, null, pe(e.autoResolvedPackages, (ae) => (a(), r("div", {
              key: ae.package_id,
              class: "resolved-package-item"
            }, [
              t("div", kg, [
                t("code", $g, f(ae.package_id), 1),
                t("span", Cg, f(ae.node_types_count) + " node type" + f(ae.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", xg, [
                B(ae.package_id) ? (a(), r("span", Ig, " SKIPPED ")) : (a(), r("span", Sg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ve) => A(ae.package_id)
                }, f(B(ae.package_id) ? "Include" : "Skip"), 9, Eg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Tg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(G, { key: 2 }, [
          t("div", Pg, [
            Ee[7] || (Ee[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Rg, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R(_r, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Ee[0] || (Ee[0] = (ae) => O(i.value - 1)),
            onNext: Ee[1] || (Ee[1] = (ae) => O(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Mg, [
            x(ng, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Ge = $.value.options) != null && Ge.length),
              options: $.value.options,
              choice: (_e = e.nodeChoices) == null ? void 0 : _e.get($.value.node_type),
              status: I.value,
              "status-label": E.value,
              "search-results": L.value,
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
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Dg, [...Ee[8] || (Ee[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(wt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Ee[4] || (Ee[4] = it((ae) => _.value = !0, ["self"])),
            onMouseup: it(C, ["self"])
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
              t("div", Lg, [
                x(Qt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Ee[2] || (Ee[2] = (ae) => d.value = ae),
                  placeholder: "Search by node type, package name...",
                  onInput: ve
                }, null, 8, ["modelValue"]),
                t("div", Og, [
                  v.value.length > 0 ? (a(), r("div", Ag, [
                    (a(!0), r(G, null, pe(v.value, (ae) => (a(), r("div", {
                      key: ae.package_id,
                      class: "node-search-result-item",
                      onClick: (Ve) => Me(ae)
                    }, [
                      t("div", Ug, [
                        t("code", zg, f(ae.package_id), 1),
                        ae.match_confidence ? (a(), R(Rn, {
                          key: 0,
                          confidence: ae.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ae.description ? (a(), r("div", Fg, f(ae.description), 1)) : y("", !0)
                    ], 8, Ng))), 128))
                  ])) : h.value ? (a(), r("div", Bg, "Searching...")) : d.value ? (a(), r("div", Vg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), r("div", Wg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: it(M, ["self"])
          }, [
            t("div", Gg, [
              t("div", { class: "node-modal-header" }, [
                Ee[10] || (Ee[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              t("div", jg, [
                x(Qt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Ee[5] || (Ee[5] = (ae) => m.value = ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Hg, [
                  x(Re, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: g(() => [...Ee[11] || (Ee[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Re, {
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
}), qg = /* @__PURE__ */ me(Kg, [["__scopeId", "data-v-281581bc"]]), Yg = { class: "node-info" }, Jg = { class: "node-info-text" }, Xg = { class: "item-body" }, Qg = {
  key: 0,
  class: "resolved-state"
}, Zg = {
  key: 1,
  class: "multiple-options"
}, eh = { class: "options-list" }, th = ["onClick"], sh = ["name", "value", "checked", "onChange"], oh = { class: "option-content" }, nh = { class: "option-header" }, ah = { class: "option-filename" }, lh = { class: "option-meta" }, ih = { class: "option-size" }, rh = { class: "option-category" }, ch = { class: "option-path" }, uh = { class: "action-buttons" }, dh = {
  key: 2,
  class: "unresolved"
}, fh = { class: "action-buttons" }, mh = /* @__PURE__ */ fe({
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
    function c(d) {
      n("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (a(), r("div", {
      class: Se(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Yg, [
        t("span", Jg, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Se(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Xg, [
        l.value ? (a(), r("div", Qg, [
          x(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Zg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", eh, [
            (a(!0), r(G, null, pe(e.options, (v, h) => (a(), r("label", {
              key: v.model.hash,
              class: Se(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => c(h)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => c(h)
              }, null, 40, sh),
              t("div", oh, [
                t("div", nh, [
                  t("span", ah, f(v.model.filename), 1),
                  x(Rn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", lh, [
                  t("span", ih, f(u(v.model.size)), 1),
                  t("span", rh, f(v.model.category), 1)
                ]),
                t("div", ch, f(v.model.relative_path), 1)
              ])
            ], 10, th))), 128))
          ]),
          t("div", uh, [
            x(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Re, {
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
        ])) : (a(), r("div", dh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", fh, [
            x(Re, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: g(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Re, {
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
}), vh = /* @__PURE__ */ me(mh, [["__scopeId", "data-v-8a82fefa"]]), ph = { class: "model-resolution-step" }, gh = { class: "step-header" }, hh = { class: "step-info" }, yh = { class: "step-title" }, wh = { class: "step-description" }, _h = { class: "stat-badge" }, bh = {
  key: 1,
  class: "step-body"
}, kh = {
  key: 2,
  class: "empty-state"
}, $h = { class: "model-search-modal" }, Ch = { class: "model-modal-body" }, xh = {
  key: 0,
  class: "model-search-results"
}, Sh = ["onClick"], Ih = { class: "model-result-header" }, Eh = { class: "model-result-filename" }, Th = { class: "model-result-meta" }, Ph = { class: "model-result-category" }, Rh = { class: "model-result-size" }, Mh = {
  key: 0,
  class: "model-result-path"
}, Dh = {
  key: 1,
  class: "model-no-results"
}, Lh = {
  key: 2,
  class: "model-searching"
}, Oh = { class: "model-download-url-modal" }, Ah = { class: "model-modal-body" }, Nh = { class: "model-input-group" }, Uh = { class: "model-input-group" }, zh = { class: "model-modal-actions" }, Fh = /* @__PURE__ */ fe({
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
    const l = e, i = s, c = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), h = k(""), w = k([]), p = k(!1), _ = F(() => l.models[c.value]), C = F(() => l.models.some((U) => U.is_download_intent)), $ = F(() => l.models.filter(
      (U) => l.modelChoices.has(U.filename) || U.is_download_intent
    ).length), P = F(() => {
      var M;
      if (!_.value) return "";
      const U = n((M = _.value.reference) == null ? void 0 : M.node_type);
      return U ? `${U}/${_.value.filename}` : "";
    }), L = F(() => {
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
    function S(U) {
      U >= 0 && U < l.models.length && (c.value = U);
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
    function O() {
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
      return a(), r("div", ph, [
        t("div", gh, [
          t("div", hh, [
            t("h3", yh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", wh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", _h, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(_r, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: M[0] || (M[0] = (Me) => S(c.value - 1)),
          onNext: M[1] || (M[1] = (Me) => S(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", bh, [
          x(vh, {
            filename: _.value.filename,
            "node-type": ((we = _.value.reference) == null ? void 0 : we.node_type) || "Unknown",
            "has-multiple-options": !!((ve = _.value.options) != null && ve.length),
            options: _.value.options,
            choice: (Ie = e.modelChoices) == null ? void 0 : Ie.get(_.value.filename),
            status: L.value,
            "status-label": T.value,
            onMarkOptional: q,
            onSkip: B,
            onDownloadUrl: O,
            onSearch: E,
            onOptionSelected: A,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", kh, [...M[5] || (M[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(re, ["self"])
          }, [
            t("div", $h, [
              t("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              t("div", Ch, [
                x(Qt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (Me) => m.value = Me),
                  placeholder: "Search by filename, category...",
                  onInput: H
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", xh, [
                  (a(!0), r(G, null, pe(w.value, (Me) => (a(), r("div", {
                    key: Me.hash,
                    class: "model-search-result-item",
                    onClick: (Ke) => te()
                  }, [
                    t("div", Ih, [
                      t("code", Eh, f(Me.filename), 1)
                    ]),
                    t("div", Th, [
                      t("span", Ph, f(Me.category), 1),
                      t("span", Rh, f(N(Me.size)), 1)
                    ]),
                    Me.relative_path ? (a(), r("div", Mh, f(Me.relative_path), 1)) : y("", !0)
                  ], 8, Sh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Dh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Lh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(Y, ["self"])
          }, [
            t("div", Oh, [
              t("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", Ah, [
                t("div", Nh, [
                  M[8] || (M[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  x(Qt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (Me) => v.value = Me),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Uh, [
                  M[9] || (M[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  x(Qt, {
                    modelValue: h.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (Me) => h.value = Me),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", zh, [
                  x(Re, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: g(() => [...M[10] || (M[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Re, {
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
}), Bh = /* @__PURE__ */ me(Fh, [["__scopeId", "data-v-c6acbada"]]), Vh = { class: "applying-step" }, Wh = {
  key: 0,
  class: "phase-content"
}, Gh = {
  key: 1,
  class: "phase-content"
}, jh = { class: "phase-description" }, Hh = { class: "overall-progress" }, Kh = { class: "progress-bar" }, qh = { class: "progress-label" }, Yh = { class: "install-list" }, Jh = { class: "install-icon" }, Xh = { key: 0 }, Qh = {
  key: 1,
  class: "spinner"
}, Zh = { key: 2 }, ey = { key: 3 }, ty = {
  key: 0,
  class: "install-error"
}, sy = {
  key: 2,
  class: "phase-content"
}, oy = { class: "phase-header" }, ny = { class: "phase-title" }, ay = { class: "completion-summary" }, ly = {
  key: 0,
  class: "summary-item success"
}, iy = { class: "summary-text" }, ry = {
  key: 1,
  class: "summary-item error"
}, cy = { class: "summary-text" }, uy = {
  key: 2,
  class: "failed-list"
}, dy = { class: "failed-node-id" }, fy = { class: "failed-error" }, my = {
  key: 4,
  class: "summary-item success"
}, vy = {
  key: 5,
  class: "restart-prompt"
}, py = {
  key: 3,
  class: "phase-content error"
}, gy = { class: "error-message" }, hy = /* @__PURE__ */ fe({
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
    function c(u) {
      var d, m;
      return (m = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, h, w;
      return a(), r("div", Vh, [
        e.progress.phase === "resolving" ? (a(), r("div", Wh, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", Gh, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", jh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Hh, [
            t("div", Kh, [
              t("div", {
                class: "progress-fill",
                style: Gt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", qh, f(((h = e.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Yh, [
            (a(!0), r(G, null, pe(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Se(["install-item", i(p, _)])
            }, [
              t("span", Jh, [
                i(p, _) === "pending" ? (a(), r("span", Xh, "○")) : i(p, _) === "installing" ? (a(), r("span", Qh, "◌")) : i(p, _) === "complete" ? (a(), r("span", Zh, "✓")) : i(p, _) === "failed" ? (a(), r("span", ey, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", ty, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", sy, [
          t("div", oy, [
            t("span", {
              class: Se(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", ny, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", ay, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", ly, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", iy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", ry, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", cy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", uy, [
              (a(!0), r(G, null, pe(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", dy, f(p.node_id), 1),
                t("span", fy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", my, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", vy, [
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
        ])) : e.progress.phase === "error" ? (a(), r("div", py, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", gy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), yy = /* @__PURE__ */ me(hy, [["__scopeId", "data-v-5efaae58"]]), wy = {
  key: 0,
  class: "loading-state"
}, _y = {
  key: 1,
  class: "wizard-content"
}, by = {
  key: 0,
  class: "step-content"
}, ky = { class: "analysis-summary" }, $y = { class: "analysis-header" }, Cy = { class: "summary-description" }, xy = { class: "stats-grid" }, Sy = { class: "stat-card" }, Iy = { class: "stat-items" }, Ey = {
  key: 0,
  class: "stat-item success"
}, Ty = { class: "stat-count" }, Py = {
  key: 1,
  class: "stat-item info"
}, Ry = { class: "stat-count" }, My = {
  key: 2,
  class: "stat-item warning"
}, Dy = { class: "stat-count" }, Ly = {
  key: 3,
  class: "stat-item error"
}, Oy = { class: "stat-count" }, Ay = { class: "stat-card" }, Ny = { class: "stat-items" }, Uy = { class: "stat-item success" }, zy = { class: "stat-count" }, Fy = {
  key: 0,
  class: "stat-item info"
}, By = { class: "stat-count" }, Vy = {
  key: 1,
  class: "stat-item warning"
}, Wy = { class: "stat-count" }, Gy = {
  key: 2,
  class: "stat-item warning"
}, jy = { class: "stat-count" }, Hy = {
  key: 3,
  class: "stat-item error"
}, Ky = { class: "stat-count" }, qy = {
  key: 0,
  class: "status-message warning"
}, Yy = { class: "status-text" }, Jy = {
  key: 1,
  class: "status-message info"
}, Xy = { class: "status-text" }, Qy = {
  key: 2,
  class: "status-message info"
}, Zy = { class: "status-text" }, e1 = {
  key: 3,
  class: "status-message warning"
}, t1 = { class: "status-text" }, s1 = {
  key: 4,
  class: "status-message success"
}, o1 = {
  key: 5,
  class: "category-mismatch-section"
}, n1 = { class: "mismatch-list" }, a1 = { class: "mismatch-path" }, l1 = { class: "mismatch-target" }, i1 = {
  key: 3,
  class: "step-content"
}, r1 = { class: "review-summary" }, c1 = { class: "review-stats" }, u1 = { class: "review-stat" }, d1 = { class: "stat-value" }, f1 = { class: "review-stat" }, m1 = { class: "stat-value" }, v1 = { class: "review-stat" }, p1 = { class: "stat-value" }, g1 = { class: "review-stat" }, h1 = { class: "stat-value" }, y1 = {
  key: 0,
  class: "review-section"
}, w1 = { class: "section-title" }, _1 = { class: "review-items" }, b1 = { class: "item-name" }, k1 = { class: "item-choice" }, $1 = {
  key: 0,
  class: "choice-badge install"
}, C1 = {
  key: 1,
  class: "choice-badge skip"
}, x1 = {
  key: 1,
  class: "review-section"
}, S1 = { class: "section-title" }, I1 = { class: "review-items" }, E1 = { class: "item-name" }, T1 = { class: "item-choice" }, P1 = {
  key: 0,
  class: "choice-badge install"
}, R1 = {
  key: 1,
  class: "choice-badge optional"
}, M1 = {
  key: 2,
  class: "choice-badge skip"
}, D1 = {
  key: 1,
  class: "choice-badge pending"
}, L1 = {
  key: 2,
  class: "review-section"
}, O1 = { class: "section-title" }, A1 = { class: "review-items download-details" }, N1 = { class: "download-info" }, U1 = { class: "item-name" }, z1 = { class: "download-meta" }, F1 = { class: "download-path" }, B1 = ["title"], V1 = {
  key: 3,
  class: "review-section"
}, W1 = { class: "section-title" }, G1 = { class: "review-items" }, j1 = { class: "item-name" }, H1 = { class: "item-choice" }, K1 = {
  key: 0,
  class: "choice-badge install"
}, q1 = {
  key: 1,
  class: "choice-badge download"
}, Y1 = {
  key: 2,
  class: "choice-badge optional"
}, J1 = {
  key: 3,
  class: "choice-badge skip"
}, X1 = {
  key: 4,
  class: "choice-badge skip"
}, Q1 = {
  key: 1,
  class: "choice-badge download"
}, Z1 = {
  key: 2,
  class: "choice-badge pending"
}, e0 = {
  key: 4,
  class: "no-choices"
}, t0 = /* @__PURE__ */ fe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = wr(), { loadPendingDownloads: v } = sn(), { openFileLocation: h } = rt(), w = k(null), p = k(!1), _ = k(!1), C = k(null), $ = k("analysis"), P = k([]), L = k(/* @__PURE__ */ new Map()), T = k(/* @__PURE__ */ new Map()), S = k(/* @__PURE__ */ new Set()), q = F(() => {
      const W = [
        { id: "analysis", label: "Analysis" }
      ];
      return (A.value || O.value) && W.push({ id: "nodes", label: "Nodes" }), I.value && W.push({ id: "models", label: "Models" }), W.push({ id: "review", label: "Review" }), $.value === "applying" && W.push({ id: "applying", label: "Applying" }), W;
    }), B = F(() => w.value ? w.value.stats.needs_user_input : !1), A = F(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = F(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), E = F(() => w.value ? w.value.stats.download_intents > 0 : !1), O = F(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), re = F(() => w.value ? w.value.nodes.resolved.length : 0), Y = F(() => w.value ? w.value.models.resolved.filter((W) => W.has_category_mismatch) : []), H = F(() => Y.value.length > 0), te = F(() => A.value || O.value ? "nodes" : I.value ? "models" : "review"), Q = F(() => {
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
    }), U = F(() => Q.value.filter((W) => !S.value.has(W.package.package_id))), M = F(() => w.value ? w.value.models.resolved.filter(
      (W) => W.match_type === "download_intent" || W.match_type === "property_download_intent"
    ).map((W) => ({
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
    }), Me = F(() => M.value.filter((W) => {
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
      for (const z of L.value.values())
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
      for (const z of L.value.values())
        z.action === "optional" && W++;
      for (const z of T.value.values())
        z.action === "optional" && W++;
      return W;
    }), Ge = F(() => {
      let W = S.value.size;
      for (const z of L.value.values())
        z.action === "skip" && W++;
      for (const z of T.value.values())
        z.action === "skip" && W++;
      for (const z of we.value)
        L.value.has(z.node_type) || W++;
      for (const z of ve.value)
        T.value.has(z.filename) || W++;
      return W;
    }), _e = F(() => {
      const W = {};
      if (W.analysis = { resolved: 1, total: 1 }, A.value) {
        const z = we.value.length, ie = we.value.filter(
          (ze) => L.value.has(ze.node_type)
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
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (W) {
        C.value = W instanceof Error ? W.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function V() {
      P.value.includes("analysis") || P.value.push("analysis"), A.value || O.value ? $.value = "nodes" : I.value ? $.value = "models" : $.value = "review";
    }
    function se(W) {
      L.value.set(W, { action: "optional" });
    }
    function ne(W) {
      L.value.set(W, { action: "skip" });
    }
    function ue(W, z) {
      var ze;
      const ie = we.value.find((Qe) => Qe.node_type === W);
      (ze = ie == null ? void 0 : ie.options) != null && ze[z] && L.value.set(W, {
        action: "install",
        package_id: ie.options[z].package_id
      });
    }
    function de(W, z) {
      L.value.set(W, {
        action: "install",
        package_id: z
      });
    }
    function $e(W) {
      L.value.delete(W);
    }
    function Ce(W) {
      S.value.has(W) ? S.value.delete(W) : S.value.add(W);
    }
    function oe(W) {
      T.value.set(W, { action: "optional" });
    }
    function ce(W) {
      T.value.set(W, { action: "skip" });
    }
    function Le(W, z) {
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
        C.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function Pe() {
      var W;
      _.value = !0, C.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const z = await i(o.workflowName, L.value, T.value, S.value);
        z.models_to_download && z.models_to_download.length > 0 && u(o.workflowName, z.models_to_download);
        const ie = [
          ...z.nodes_to_install || [],
          ...U.value.map((Qe) => Qe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ie)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const ze = d.installError || ((W = d.nodeInstallProgress) == null ? void 0 : W.completedNodes.some((Qe) => !Qe.success));
        !d.needsRestart && !ze && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (z) {
        C.value = z instanceof Error ? z.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
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
          await c(o.workflowName), d.phase = "complete";
        } catch (ie) {
          d.error = ie instanceof Error ? ie.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return et(D), (W, z) => (a(), R(pt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: z[1] || (z[1] = (ie) => n("close"))
    }, {
      body: g(() => [
        p.value && !w.value ? (a(), r("div", wy, [...z[2] || (z[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", _y, [
          x(Ip, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": _e.value,
            onStepChange: ae
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), r("div", by, [
            t("div", ky, [
              t("div", $y, [
                z[3] || (z[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Cy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", xy, [
                t("div", Sy, [
                  z[12] || (z[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Iy, [
                    re.value > 0 ? (a(), r("div", Ey, [
                      z[4] || (z[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ty, f(re.value), 1),
                      z[5] || (z[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Py, [
                      z[6] || (z[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ry, f(w.value.stats.packages_needing_installation), 1),
                      z[7] || (z[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", My, [
                      z[8] || (z[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Dy, f(w.value.nodes.ambiguous.length), 1),
                      z[9] || (z[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", Ly, [
                      z[10] || (z[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Oy, f(w.value.nodes.unresolved.length), 1),
                      z[11] || (z[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Ay, [
                  z[23] || (z[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Ny, [
                    t("div", Uy, [
                      z[13] || (z[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", zy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      z[14] || (z[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", Fy, [
                      z[15] || (z[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", By, f(w.value.stats.download_intents), 1),
                      z[16] || (z[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    H.value ? (a(), r("div", Vy, [
                      z[17] || (z[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Wy, f(Y.value.length), 1),
                      z[18] || (z[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Gy, [
                      z[19] || (z[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", jy, f(w.value.models.ambiguous.length), 1),
                      z[20] || (z[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Hy, [
                      z[21] || (z[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Ky, f(w.value.models.unresolved.length), 1),
                      z[22] || (z[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              B.value ? (a(), r("div", qy, [
                z[24] || (z[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Yy, f(we.value.length + ve.value.length) + " items need your input", 1)
              ])) : O.value ? (a(), r("div", Jy, [
                z[25] || (z[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Xy, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(E.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (a(), r("div", Qy, [
                z[26] || (z[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Zy, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : H.value ? (a(), r("div", e1, [
                z[27] || (z[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", t1, f(Y.value.length) + " model" + f(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", s1, [...z[28] || (z[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              H.value ? (a(), r("div", o1, [
                z[31] || (z[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", n1, [
                  (a(!0), r(G, null, pe(Y.value, (ie) => {
                    var ze, Qe;
                    return a(), r("div", {
                      key: ie.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", a1, f(ie.actual_category) + "/" + f((ze = ie.model) == null ? void 0 : ze.filename), 1),
                      z[30] || (z[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", l1, f((Qe = ie.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      ie.file_path ? (a(), R(Re, {
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
          $.value === "nodes" ? (a(), R(qg, {
            key: 1,
            nodes: we.value,
            "node-choices": L.value,
            "auto-resolved-packages": N.value,
            "skipped-packages": S.value,
            onMarkOptional: se,
            onSkip: ne,
            onOptionSelected: ue,
            onManualEntry: de,
            onClearChoice: $e,
            onPackageSkip: Ce
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), R(Bh, {
            key: 2,
            models: Ie.value,
            "model-choices": T.value,
            onMarkOptional: oe,
            onSkip: ce,
            onOptionSelected: Le,
            onDownloadUrl: xe,
            onClearChoice: Z
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", i1, [
            t("div", r1, [
              z[37] || (z[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", c1, [
                t("div", u1, [
                  t("span", d1, f(Xe.value), 1),
                  z[32] || (z[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", f1, [
                  t("span", m1, f(ke.value), 1),
                  z[33] || (z[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", v1, [
                  t("span", p1, f(Ee.value), 1),
                  z[34] || (z[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", g1, [
                  t("span", h1, f(Ge.value), 1),
                  z[35] || (z[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              N.value.length > 0 ? (a(), r("div", y1, [
                t("h4", w1, "Node Packages (" + f(N.value.length) + ")", 1),
                t("div", _1, [
                  (a(!0), r(G, null, pe(N.value, (ie) => (a(), r("div", {
                    key: ie.package_id,
                    class: "review-item"
                  }, [
                    t("code", b1, f(ie.package_id), 1),
                    t("div", k1, [
                      S.value.has(ie.package_id) ? (a(), r("span", C1, "Skipped")) : (a(), r("span", $1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              we.value.length > 0 ? (a(), r("div", x1, [
                t("h4", S1, "Node Choices (" + f(we.value.length) + ")", 1),
                t("div", I1, [
                  (a(!0), r(G, null, pe(we.value, (ie) => {
                    var ze, Qe, vt, at;
                    return a(), r("div", {
                      key: ie.node_type,
                      class: "review-item"
                    }, [
                      t("code", E1, f(ie.node_type), 1),
                      t("div", T1, [
                        L.value.has(ie.node_type) ? (a(), r(G, { key: 0 }, [
                          ((ze = L.value.get(ie.node_type)) == null ? void 0 : ze.action) === "install" ? (a(), r("span", P1, f((Qe = L.value.get(ie.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = L.value.get(ie.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", R1, " Optional ")) : ((at = L.value.get(ie.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), r("span", M1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", D1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Me.value.length > 0 ? (a(), r("div", L1, [
                t("h4", O1, "Models to Download (" + f(Me.value.length) + ")", 1),
                t("div", A1, [
                  (a(!0), r(G, null, pe(Me.value, (ie) => (a(), r("div", {
                    key: ie.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", N1, [
                      t("code", U1, f(ie.filename), 1),
                      t("div", z1, [
                        t("span", F1, "→ " + f(ie.target_path), 1),
                        ie.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: ie.url
                        }, f(Ke(ie.url)), 9, B1)) : y("", !0)
                      ])
                    ]),
                    z[36] || (z[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Ie.value.length > 0 ? (a(), r("div", V1, [
                t("h4", W1, "Models (" + f(Ie.value.length) + ")", 1),
                t("div", G1, [
                  (a(!0), r(G, null, pe(Ie.value, (ie) => {
                    var ze, Qe, vt, at, dt, Rt, Ut;
                    return a(), r("div", {
                      key: ie.filename,
                      class: "review-item"
                    }, [
                      t("code", j1, f(ie.filename), 1),
                      t("div", H1, [
                        T.value.has(ie.filename) ? (a(), r(G, { key: 0 }, [
                          ((ze = T.value.get(ie.filename)) == null ? void 0 : ze.action) === "select" ? (a(), r("span", K1, f((vt = (Qe = T.value.get(ie.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((at = T.value.get(ie.filename)) == null ? void 0 : at.action) === "download" ? (a(), r("span", q1, " Download ")) : ((dt = T.value.get(ie.filename)) == null ? void 0 : dt.action) === "optional" ? (a(), r("span", Y1, " Optional ")) : ((Rt = T.value.get(ie.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), r("span", J1, " Skip ")) : ((Ut = T.value.get(ie.filename)) == null ? void 0 : Ut.action) === "cancel_download" ? (a(), r("span", X1, " Cancel Download ")) : y("", !0)
                        ], 64)) : ie.is_download_intent ? (a(), r("span", Q1, " Pending Download ")) : (a(), r("span", Z1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Q.value.length === 0 && we.value.length === 0 && Ie.value.length === 0 ? (a(), r("div", e0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), R(yy, {
            key: 4,
            progress: Fe(d),
            onRestart: he,
            onRetryFailed: ge
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), R(Re, {
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
        $.value !== "applying" || Fe(d).phase === "complete" || Fe(d).phase === "error" ? (a(), R(Re, {
          key: 1,
          variant: "secondary",
          onClick: z[0] || (z[0] = (ie) => n("close"))
        }, {
          default: g(() => [
            b(f(Fe(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), R(Re, {
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
        $.value === "nodes" ? (a(), R(Re, {
          key: 3,
          variant: "primary",
          onClick: Te
        }, {
          default: g(() => [
            b(f(I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), R(Re, {
          key: 4,
          variant: "primary",
          onClick: Te
        }, {
          default: g(() => [...z[39] || (z[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), R(Re, {
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
}), s0 = /* @__PURE__ */ me(t0, [["__scopeId", "data-v-40d8d5a8"]]), o0 = { class: "search-input-wrapper" }, n0 = ["value", "placeholder"], a0 = /* @__PURE__ */ fe({
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
    function c(d) {
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
    }), (d, m) => (a(), r("div", o0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Xt(u, ["escape"])
      }, null, 40, n0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), l0 = /* @__PURE__ */ me(a0, [["__scopeId", "data-v-266f857a"]]), i0 = { class: "search-bar" }, r0 = /* @__PURE__ */ fe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", i0, [
      x(l0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), _o = /* @__PURE__ */ me(r0, [["__scopeId", "data-v-3d51bbfd"]]), c0 = { class: "section-group" }, u0 = {
  key: 0,
  class: "section-content"
}, d0 = /* @__PURE__ */ fe({
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
    return (c, u) => (a(), r("section", c0, [
      x(Ot, {
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
      !e.collapsible || l.value ? (a(), r("div", u0, [
        He(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ me(d0, [["__scopeId", "data-v-c48e33ed"]]), f0 = { class: "item-header" }, m0 = {
  key: 0,
  class: "item-icon"
}, v0 = { class: "item-info" }, p0 = {
  key: 0,
  class: "item-title"
}, g0 = {
  key: 1,
  class: "item-subtitle"
}, h0 = {
  key: 0,
  class: "item-details"
}, y0 = {
  key: 1,
  class: "item-actions"
}, w0 = /* @__PURE__ */ fe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = F(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), r("div", {
      class: Se(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", f0, [
        l.$slots.icon ? (a(), r("span", m0, [
          He(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", v0, [
          l.$slots.title ? (a(), r("div", p0, [
            He(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", g0, [
            He(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", h0, [
        He(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", y0, [
        He(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ me(w0, [["__scopeId", "data-v-cc435e0e"]]), _0 = { class: "loading-state" }, b0 = { class: "loading-message" }, k0 = /* @__PURE__ */ fe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", _0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", b0, f(e.message), 1)
    ]));
  }
}), Is = /* @__PURE__ */ me(k0, [["__scopeId", "data-v-ad8436c9"]]), $0 = { class: "error-state" }, C0 = { class: "error-message" }, x0 = /* @__PURE__ */ fe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", $0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", C0, f(e.message), 1),
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
}), Es = /* @__PURE__ */ me(x0, [["__scopeId", "data-v-5397be48"]]), S0 = /* @__PURE__ */ fe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = rt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), h = k(!1), w = k(!1), p = k(null), _ = F(
      () => i.value.filter((N) => N.status === "broken")
    ), C = F(
      () => i.value.filter((N) => N.status === "new")
    ), $ = F(
      () => i.value.filter((N) => N.status === "modified")
    ), P = F(
      () => i.value.filter((N) => N.status === "synced")
    ), L = F(() => {
      if (!d.value.trim()) return i.value;
      const N = d.value.toLowerCase();
      return i.value.filter((U) => U.name.toLowerCase().includes(N));
    }), T = F(
      () => _.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = F(
      () => C.value.filter(
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
      c.value = !0, u.value = null;
      try {
        i.value = await l(N);
      } catch (U) {
        u.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function E(N) {
      p.value = N, h.value = !0;
    }
    function O(N) {
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
    return et(I), (N, U) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          x(_o, {
            modelValue: d.value,
            "onUpdate:modelValue": U[0] || (U[0] = (M) => d.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (a(), R(Is, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), R(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            T.value.length ? (a(), R(lt, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, pe(T.value, (M) => (a(), R(Et, {
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
                    x(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (we) => O(M.name)
                    }, {
                      default: g(() => [...U[8] || (U[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(le, {
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
            S.value.length ? (a(), R(lt, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, pe(S.value, (M) => (a(), R(Et, {
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
                    x(le, {
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
                (a(!0), r(G, null, pe(q.value, (M) => (a(), R(Et, {
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
                    x(le, {
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
                (a(!0), r(G, null, pe(A.value, (M) => (a(), R(Et, {
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
                    x(le, {
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
            L.value.length ? y("", !0) : (a(), R(ss, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && p.value ? (a(), R(pp, {
        key: 0,
        "workflow-name": p.value,
        onClose: U[3] || (U[3] = (M) => h.value = !1),
        onResolve: U[4] || (U[4] = (M) => O(p.value)),
        onRefresh: U[5] || (U[5] = (M) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), R(s0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Y,
        onInstall: re,
        onRefresh: U[6] || (U[6] = (M) => n("refresh")),
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), I0 = /* @__PURE__ */ me(S0, [["__scopeId", "data-v-fa3f076e"]]), E0 = /* @__PURE__ */ fe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Se(["summary-bar", e.variant])
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), on = /* @__PURE__ */ me(E0, [["__scopeId", "data-v-ccb7816e"]]), T0 = {
  key: 0,
  class: "model-details"
}, P0 = { class: "detail-section" }, R0 = { class: "detail-row" }, M0 = { class: "detail-value mono" }, D0 = { class: "detail-row" }, L0 = { class: "detail-value mono" }, O0 = { class: "detail-row" }, A0 = { class: "detail-value mono" }, N0 = { class: "detail-row" }, U0 = { class: "detail-value" }, z0 = { class: "detail-row" }, F0 = { class: "detail-value" }, B0 = { class: "detail-row" }, V0 = { class: "detail-value" }, W0 = { class: "detail-section" }, G0 = { class: "section-header" }, j0 = {
  key: 0,
  class: "locations-list"
}, H0 = { class: "location-path mono" }, K0 = {
  key: 0,
  class: "location-modified"
}, q0 = ["onClick"], Y0 = {
  key: 1,
  class: "empty-state"
}, J0 = { class: "detail-section" }, X0 = { class: "section-header" }, Q0 = {
  key: 0,
  class: "sources-list"
}, Z0 = { class: "source-type" }, ew = ["href"], tw = ["disabled", "onClick"], sw = {
  key: 1,
  class: "empty-state"
}, ow = { class: "add-source-form" }, nw = ["disabled"], aw = {
  key: 2,
  class: "source-error"
}, lw = {
  key: 3,
  class: "source-success"
}, iw = /* @__PURE__ */ fe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = rt(), u = k(null), d = k(!0), m = k(null), v = k(""), h = k(!1), w = k(null), p = k(null), _ = k(null), C = k(null);
    let $ = null;
    function P(I, E = "success", O = 2e3) {
      $ && clearTimeout($), C.value = { message: I, type: E }, $ = setTimeout(() => {
        C.value = null;
      }, O);
    }
    function L(I) {
      if (!I) return "Unknown";
      const E = 1024 * 1024 * 1024, O = 1024 * 1024;
      return I >= E ? `${(I / E).toFixed(1)} GB` : I >= O ? `${(I / O).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function T(I) {
      navigator.clipboard.writeText(I), P("Copied to clipboard!");
    }
    async function S(I) {
      try {
        await c(I), P("Opening file location...");
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
      var O;
      return a(), r(G, null, [
        x(pt, {
          title: `Model Details: ${((O = u.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: E[5] || (E[5] = (re) => I.$emit("close"))
        }, {
          body: g(() => {
            var re, Y, H, te;
            return [
              u.value ? (a(), r("div", T0, [
                t("section", P0, [
                  t("div", R0, [
                    E[6] || (E[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", M0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (Q) => T(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", D0, [
                    E[7] || (E[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", L0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (Q) => T(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", O0, [
                    E[8] || (E[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", A0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (Q) => T(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", N0, [
                    E[9] || (E[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", U0, f(L(u.value.size)), 1)
                  ]),
                  t("div", z0, [
                    E[10] || (E[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", F0, f(u.value.category), 1)
                  ]),
                  t("div", B0, [
                    E[11] || (E[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", V0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", W0, [
                  t("h4", G0, "Locations (" + f(((re = u.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (Y = u.value.locations) != null && Y.length ? (a(), r("div", j0, [
                    (a(!0), r(G, null, pe(u.value.locations, (Q, N) => (a(), r("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      t("span", H0, f(Q.path), 1),
                      Q.modified ? (a(), r("span", K0, "Modified: " + f(Q.modified), 1)) : y("", !0),
                      Q.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => S(Q.path)
                      }, " Open File Location ", 8, q0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", Y0, "No locations found"))
                ]),
                t("section", J0, [
                  t("h4", X0, "Download Sources (" + f(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                  (te = u.value.sources) != null && te.length ? (a(), r("div", Q0, [
                    (a(!0), r(G, null, pe(u.value.sources, (Q, N) => (a(), r("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      t("span", Z0, f(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Q.url), 9, ew),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Q.url,
                        onClick: (U) => B(Q.url)
                      }, f(w.value === Q.url ? "..." : "×"), 9, tw)
                    ]))), 128))
                  ])) : (a(), r("div", sw, " No download sources configured ")),
                  t("div", ow, [
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
                    }, f(h.value ? "Adding..." : "Add Source"), 9, nw)
                  ]),
                  p.value ? (a(), r("p", aw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", lw, f(_.value), 1)) : y("", !0)
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
          C.value ? (a(), r("div", {
            key: 0,
            class: Se(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), Ja = /* @__PURE__ */ me(iw, [["__scopeId", "data-v-f15cbb56"]]), rw = /* @__PURE__ */ fe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = rt(), i = k([]), c = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), h = k(!1), w = k(null);
    function p() {
      h.value = !1, o("navigate", "model-index");
    }
    const _ = F(
      () => i.value.reduce((A, I) => A + (I.size || 0), 0)
    ), C = F(() => {
      if (!v.value.trim()) return i.value;
      const A = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), $ = F(() => {
      if (!v.value.trim()) return c.value;
      const A = v.value.toLowerCase();
      return c.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), P = F(() => {
      const A = {};
      for (const E of C.value) {
        const O = E.type || "other";
        A[O] || (A[O] = []), A[O].push(E);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([E], [O]) => {
        const re = I.indexOf(E), Y = I.indexOf(O);
        return re >= 0 && Y >= 0 ? re - Y : re >= 0 ? -1 : Y >= 0 ? 1 : E.localeCompare(O);
      }).map(([E, O]) => ({ type: E, models: O }));
    });
    function L(A) {
      if (!A) return "Unknown";
      const I = A / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function T(A) {
      w.value = A.hash || A.filename;
    }
    function S(A) {
      o("navigate", "model-index");
    }
    function q(A) {
      alert(`Download functionality not yet implemented for ${A}`);
    }
    async function B() {
      d.value = !0, m.value = null;
      try {
        const A = await n();
        i.value = A, c.value = [];
        const I = await l();
        u.value = I.environment || "production";
      } catch (A) {
        m.value = A instanceof Error ? A.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return et(B), (A, I) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (E) => h.value = !0)
          })
        ]),
        search: g(() => [
          x(_o, {
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
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length ? (a(), R(on, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(L(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, pe(P.value, (E) => (a(), R(lt, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), r(G, null, pe(E.models, (O) => (a(), R(Et, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...I[4] || (I[4] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(f(O.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(L(O.size)), 1)
                  ]),
                  details: g(() => [
                    x(ft, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    x(ft, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    x(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => T(O)
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
                (a(!0), r(G, null, pe($.value, (E) => (a(), R(Et, {
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
                    var O;
                    return [
                      x(ft, {
                        label: "Required by:",
                        value: ((O = E.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    x(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(E.filename)
                    }, {
                      default: g(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => S(E.filename)
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
            !C.value.length && !$.value.length ? (a(), R(ss, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      x(os, {
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
          x(le, {
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
      w.value ? (a(), R(Ja, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (E) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), cw = /* @__PURE__ */ me(rw, [["__scopeId", "data-v-cb4f12b3"]]), uw = {
  key: 0,
  class: "indexing-progress"
}, dw = { class: "progress-info" }, fw = { class: "progress-label" }, mw = { class: "progress-count" }, vw = { class: "progress-bar" }, pw = { class: "modal-content" }, gw = { class: "modal-header" }, hw = { class: "modal-body" }, yw = { class: "input-group" }, ww = { class: "current-path" }, _w = { class: "input-group" }, bw = { class: "modal-footer" }, kw = { class: "modal-content" }, $w = { class: "modal-header" }, Cw = { class: "modal-body" }, xw = { class: "input-group" }, Sw = { class: "input-group" }, Iw = { class: "modal-footer" }, Ew = /* @__PURE__ */ fe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = rt(), { addToQueue: c } = sn(), u = s, d = k([]), m = k(!1), v = k(!1), h = k(null), w = k(""), p = k(!1), _ = k(null), C = k(!1), $ = k(null), P = k(""), L = k(!1), T = k(!1), S = k(""), q = k(""), B = k(null), A = F(
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
        const Ie = M.indexOf(we), Me = M.indexOf(ve);
        return Ie >= 0 && Me >= 0 ? Ie - Me : Ie >= 0 ? -1 : Me >= 0 ? 1 : we.localeCompare(ve);
      }).map(([we, ve]) => ({ type: we, models: ve }));
    });
    function O(U) {
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
        L.value = !0, h.value = null;
        try {
          const U = await i(P.value.trim());
          $.value = U.path, C.value = !1, P.value = "", await Q(), console.log(`Directory changed: ${U.models_indexed} models indexed`), u("refresh");
        } catch (U) {
          h.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          L.value = !1;
        }
      }
    }
    function te() {
      if (!S.value.trim() || !q.value.trim()) return;
      const U = q.value.split("/").pop() || "model.safetensors";
      c([{
        workflow: "__manual__",
        filename: U,
        url: S.value.trim(),
        targetPath: q.value.trim()
      }]), S.value = "", q.value = "", T.value = !1;
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
    }), (U, M) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (we) => p.value = !0)
          }, {
            actions: g(() => [
              x(le, {
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
              x(le, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (we) => C.value = !0)
              }, {
                default: g(() => [...M[15] || (M[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              x(le, {
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
          B.value ? (a(), r("div", uw, [
            t("div", dw, [
              t("span", fw, f(B.value.message), 1),
              t("span", mw, f(B.value.current) + "/" + f(B.value.total), 1)
            ]),
            t("div", vw, [
              t("div", {
                class: "progress-fill",
                style: Gt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          x(_o, {
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
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            d.value.length ? (a(), R(on, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(d.value.length) + " models • " + f(O(A.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, pe(E.value, (we) => (a(), R(lt, {
              key: we.type,
              title: we.type.toUpperCase(),
              count: we.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (a(!0), r(G, null, pe(we.models, (ve) => (a(), R(Et, {
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
                    b(f(O(ve.size)), 1)
                  ]),
                  details: g(() => [
                    x(ft, {
                      label: "Hash:",
                      value: ve.hash ? ve.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    x(le, {
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
      x(os, {
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
      _.value ? (a(), R(Ja, {
        key: 0,
        identifier: _.value,
        onClose: M[5] || (M[5] = (we) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), R(wt, { to: "body" }, [
        C.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = it((we) => C.value = !1, ["self"]))
        }, [
          t("div", pw, [
            t("div", gw, [
              M[20] || (M[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (we) => C.value = !1)
              }, "✕")
            ]),
            t("div", hw, [
              t("div", yw, [
                M[21] || (M[21] = t("label", null, "Current Directory", -1)),
                t("code", ww, f($.value || "Not set"), 1)
              ]),
              t("div", _w, [
                M[22] || (M[22] = t("label", null, "New Directory Path", -1)),
                x(Qt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (we) => P.value = we),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", bw, [
              x(Re, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (we) => C.value = !1)
              }, {
                default: g(() => [...M[24] || (M[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              x(Re, {
                variant: "primary",
                disabled: !P.value.trim() || L.value,
                loading: L.value,
                onClick: H
              }, {
                default: g(() => [
                  b(f(L.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), R(wt, { to: "body" }, [
        T.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = it((we) => T.value = !1, ["self"]))
        }, [
          t("div", kw, [
            t("div", $w, [
              M[25] || (M[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (we) => T.value = !1)
              }, "✕")
            ]),
            t("div", Cw, [
              t("div", xw, [
                M[26] || (M[26] = t("label", null, "Download URL", -1)),
                x(Qt, {
                  modelValue: S.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (we) => S.value = we),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Sw, [
                M[27] || (M[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                x(Qt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (we) => q.value = we),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", Iw, [
              x(Re, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (we) => T.value = !1)
              }, {
                default: g(() => [...M[29] || (M[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              x(Re, {
                variant: "primary",
                disabled: !S.value.trim() || !q.value.trim(),
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
}), Tw = /* @__PURE__ */ me(Ew, [["__scopeId", "data-v-73b78d84"]]), Pw = { class: "node-details" }, Rw = { class: "status-row" }, Mw = {
  key: 0,
  class: "detail-row"
}, Dw = { class: "value" }, Lw = { class: "detail-row" }, Ow = { class: "value" }, Aw = {
  key: 1,
  class: "detail-row"
}, Nw = { class: "value mono" }, Uw = {
  key: 2,
  class: "detail-row"
}, zw = ["href"], Fw = {
  key: 3,
  class: "detail-row"
}, Bw = { class: "value mono small" }, Vw = { class: "detail-row" }, Ww = {
  key: 0,
  class: "value"
}, Gw = {
  key: 1,
  class: "workflow-list"
}, jw = /* @__PURE__ */ fe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = F(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = F(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = F(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), R(pt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: g(() => [
        t("div", Pw, [
          t("div", Rw, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Se(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", Mw, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Dw, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", Lw, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Ow, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", Aw, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Nw, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", Uw, [
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
            ], 8, zw)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", Fw, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Bw, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Vw, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Ww, " Not used in any workflows ")) : (a(), r("div", Gw, [
              (a(!0), r(G, null, pe(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        x(Re, {
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
}), Hw = /* @__PURE__ */ me(jw, [["__scopeId", "data-v-b342f626"]]), Kw = { class: "dialog-message" }, qw = {
  key: 0,
  class: "dialog-details"
}, Yw = {
  key: 1,
  class: "dialog-warning"
}, Jw = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), R(pt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", Kw, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", qw, [
          (a(!0), r(G, null, pe(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Yw, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        x(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: g(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: g(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        x(Re, {
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
}), Xa = /* @__PURE__ */ me(Jw, [["__scopeId", "data-v-3670b9f5"]]), Xw = { class: "mismatch-warning" }, Qw = { class: "version-mismatch" }, Zw = { class: "version-actual" }, e_ = { class: "version-expected" }, t_ = { key: 0 }, s_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, o_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, n_ = /* @__PURE__ */ fe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: u } = rt(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), h = k(""), w = k(!1), p = k(null), _ = k(null), C = F(() => {
      if (!h.value.trim()) return d.value.nodes;
      const Y = h.value.toLowerCase();
      return d.value.nodes.filter(
        (H) => {
          var te, Q;
          return H.name.toLowerCase().includes(Y) || ((te = H.description) == null ? void 0 : te.toLowerCase().includes(Y)) || ((Q = H.repository) == null ? void 0 : Q.toLowerCase().includes(Y));
        }
      );
    }), $ = F(
      () => C.value.filter((Y) => Y.installed && Y.tracked)
    ), P = F(
      () => C.value.filter((Y) => !Y.installed && Y.tracked)
    ), L = F(
      () => C.value.filter((Y) => Y.installed && !Y.tracked)
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
    const S = F(() => o.versionMismatches.length > 0);
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
    function O(Y) {
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
            const H = await c(Y);
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
    return et(re), (Y, H) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (te) => w.value = !0)
          }, {
            actions: g(() => [
              x(le, {
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
          x(_o, {
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
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            d.value.total_count ? (a(), R(on, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), r(G, { key: 0 }, [
                  b(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), r(G, { key: 1 }, [
                  b(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            S.value ? (a(), R(lt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", Xw, [
                  H[8] || (H[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(G, null, pe(e.versionMismatches, (te) => (a(), R(Et, {
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
                    t("span", Qw, [
                      t("span", Zw, f(te.actual), 1),
                      H[10] || (H[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", e_, f(te.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    x(le, {
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
            L.value.length ? (a(), R(lt, {
              key: 2,
              title: "UNTRACKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), r(G, null, pe(L.value, (te) => (a(), R(Et, {
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
                    x(ft, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    x(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...H[14] || (H[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => I(te.name)
                    }, {
                      default: g(() => [...H[15] || (H[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(le, {
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
                (a(!0), r(G, null, pe($.value, (te) => (a(), R(Et, {
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
                    te.version ? (a(), r("span", t_, f(te.source === "development" ? "" : "v") + f(te.version), 1)) : (a(), r("span", s_, "version unknown")),
                    t("span", o_, " • " + f(T(te.source)), 1)
                  ]),
                  details: g(() => [
                    x(ft, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    x(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...H[17] || (H[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(le, {
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
                (a(!0), r(G, null, pe(P.value, (te) => (a(), R(Et, {
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
                    x(ft, {
                      label: "Required by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    x(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...H[21] || (H[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => O(te.name)
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
            !$.value.length && !P.value.length && !L.value.length ? (a(), R(ss, {
              key: 5,
              icon: "📭",
              message: h.value ? `No nodes match '${h.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      x(os, {
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
          x(le, {
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
      p.value ? (a(), R(Hw, {
        key: 0,
        node: p.value,
        onClose: H[5] || (H[5] = (te) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), R(Xa, {
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
}), a_ = /* @__PURE__ */ me(n_, [["__scopeId", "data-v-1555a802"]]);
function br(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const l_ = { class: "remote-url-display" }, i_ = ["title"], r_ = ["title"], c_ = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, u_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, d_ = /* @__PURE__ */ fe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), n = F(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const i = s.url.slice(0, Math.floor(s.maxLength * 0.6)), c = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${i}...${c}`;
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
    return (i, c) => (a(), r("div", l_, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, i_),
      t("button", {
        class: Se(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", u_, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", c_, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, r_)
    ]));
  }
}), f_ = /* @__PURE__ */ me(d_, [["__scopeId", "data-v-7768a58d"]]), m_ = { class: "remote-title" }, v_ = {
  key: 0,
  class: "default-badge"
}, p_ = {
  key: 1,
  class: "sync-badge"
}, g_ = {
  key: 0,
  class: "ahead"
}, h_ = {
  key: 1,
  class: "behind"
}, y_ = {
  key: 1,
  class: "synced"
}, w_ = ["href"], __ = {
  key: 1,
  class: "remote-url-text"
}, b_ = /* @__PURE__ */ fe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = F(() => s.fetchingRemote === s.remote.name), n = F(() => s.remote.is_default), l = F(() => s.syncStatus && s.syncStatus.behind > 0), i = F(() => s.syncStatus && s.syncStatus.ahead > 0), c = F(() => s.remote.push_url !== s.remote.fetch_url), u = F(() => {
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
        t("div", m_, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", v_, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", p_, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", g_, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", h_, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", y_, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        u.value ? (a(), r("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = it(() => {
          }, ["stop"]))
        }, f(d.value), 9, w_)) : (a(), r("span", __, f(d.value), 1))
      ]),
      actions: g(() => [
        x(le, {
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
        x(le, {
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
        x(le, {
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
        x(le, {
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
      c.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(ft, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              x(f_, {
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
}), k_ = /* @__PURE__ */ me(b_, [["__scopeId", "data-v-8310f3a8"]]), $_ = ["for"], C_ = {
  key: 0,
  class: "base-form-field-required"
}, x_ = { class: "base-form-field-input" }, S_ = {
  key: 1,
  class: "base-form-field-error"
}, I_ = {
  key: 2,
  class: "base-form-field-hint"
}, E_ = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", {
      class: Se(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), r("span", C_, "*")) : y("", !0)
      ], 8, $_)) : y("", !0),
      t("div", x_, [
        He(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", S_, f(e.error), 1)) : e.hint ? (a(), r("span", I_, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ia = /* @__PURE__ */ me(E_, [["__scopeId", "data-v-9a1cf296"]]), T_ = { class: "remote-form" }, P_ = { class: "form-header" }, R_ = { class: "form-body" }, M_ = {
  key: 0,
  class: "form-error"
}, D_ = { class: "form-actions" }, L_ = /* @__PURE__ */ fe({
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
    }), i = k(!1), c = k(null);
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
        c.value = null, i.value = !0;
        try {
          n("submit", l.value);
        } catch (m) {
          c.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          i.value = !1;
        }
      }
    }
    return (m, v) => (a(), r("div", T_, [
      t("div", P_, [
        x(Ot, null, {
          default: g(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", R_, [
        x(ia, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            x(Qt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (h) => l.value.name = h),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        x(ia, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            x(Qt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (h) => l.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        x(ia, { label: "Push URL (optional)" }, {
          default: g(() => [
            x(Qt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (h) => l.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", M_, f(c.value), 1)) : y("", !0)
      ]),
      t("div", D_, [
        x(le, {
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
        x(le, {
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
}), O_ = /* @__PURE__ */ me(L_, [["__scopeId", "data-v-56021b18"]]), A_ = { class: "conflict-summary-box" }, N_ = { class: "summary-header" }, U_ = { class: "summary-text" }, z_ = { key: 0 }, F_ = {
  key: 1,
  class: "all-resolved"
}, B_ = { class: "summary-progress" }, V_ = { class: "progress-bar" }, W_ = { class: "progress-text" }, G_ = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", A_, [
      t("div", N_, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", U_, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", z_, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", F_, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", B_, [
        t("div", V_, [
          t("div", {
            class: "progress-fill",
            style: Gt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", W_, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), j_ = /* @__PURE__ */ me(G_, [["__scopeId", "data-v-4e9e6cc9"]]), H_ = { class: "modal-header" }, K_ = { class: "modal-title" }, q_ = { class: "modal-body" }, Y_ = {
  key: 0,
  class: "error-box"
}, J_ = {
  key: 0,
  class: "error-hint"
}, X_ = {
  key: 1,
  class: "loading-state"
}, Q_ = { class: "commit-summary" }, Z_ = {
  key: 0,
  class: "changes-section"
}, eb = {
  key: 0,
  class: "change-group",
  open: ""
}, tb = { class: "change-count" }, sb = { class: "change-list" }, ob = {
  key: 0,
  class: "conflict-badge"
}, nb = {
  key: 1,
  class: "change-group"
}, ab = { class: "change-count" }, lb = { class: "change-list" }, ib = {
  key: 2,
  class: "change-group"
}, rb = { class: "change-count" }, cb = { class: "change-list" }, ub = {
  key: 2,
  class: "strategy-section"
}, db = { class: "radio-group" }, fb = { class: "radio-option" }, mb = { class: "radio-option" }, vb = { class: "radio-option" }, pb = {
  key: 3,
  class: "up-to-date"
}, gb = { class: "modal-actions" }, Kl = "comfygit.pullModelStrategy", hb = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = k(localStorage.getItem(Kl) || "skip");
    Ct(l, ($) => {
      localStorage.setItem(Kl, $);
    });
    const i = F(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = F(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = F(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = F(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = F(() => o.preview && br(o.preview) ? o.preview : null), v = F(() => {
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
      return m.value.workflow_conflicts.some((L) => L.name === P);
    }
    function C($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var L, T;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (S) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = it(() => {
            }, ["stop"]))
          }, [
            t("div", H_, [
              t("h3", K_, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (S) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", q_, [
              e.error ? (a(), r("div", Y_, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", J_, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", X_, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (L = e.preview) != null && L.has_uncommitted_changes ? (a(), r(G, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), r(G, { key: 3 }, [
                t("div", Q_, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", Z_, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", eb, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", tb, f(c.value) + " changes", 1)
                    ]),
                    t("div", sb, [
                      (a(!0), r(G, null, pe(e.preview.changes.workflows.added, (S) => (a(), r("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128)),
                      (a(!0), r(G, null, pe(e.preview.changes.workflows.modified, (S) => (a(), r("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(S) + " ", 1),
                        _(S) ? (a(), r("span", ob, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(G, null, pe(e.preview.changes.workflows.deleted, (S) => (a(), r("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", nb, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", ab, f(u.value) + " to install", 1)
                    ]),
                    t("div", lb, [
                      (a(!0), r(G, null, pe(e.preview.changes.nodes.to_install, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", ib, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", rb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", cb, [
                      (a(!0), r(G, null, pe(e.preview.changes.models.referenced, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item"
                      }, f(S), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), R(j_, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": h.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", ub, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", db, [
                    t("label", fb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (S) => l.value = S),
                        value: "all"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", mb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (S) => l.value = S),
                        value: "required"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", vb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (S) => l.value = S),
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
                e.preview.commits_behind === 0 ? (a(), r("div", pb, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", gb, [
              x(le, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (S) => $.$emit("close"))
              }, {
                default: g(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(G, { key: 0 }, [
                x(le, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (S) => C(!1))
                }, {
                  default: g(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                x(le, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (S) => C(!0))
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
                onClick: P[7] || (P[7] = (S) => C(!0))
              }, {
                default: g(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(G, { key: 2 }, [
                m.value && !w.value ? (a(), R(le, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (S) => n("openConflictResolution"))
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
                  onClick: P[9] || (P[9] = (S) => C(!1))
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
}), yb = /* @__PURE__ */ me(hb, [["__scopeId", "data-v-300c7b2f"]]), wb = { class: "modal-header" }, _b = { class: "modal-title" }, bb = { class: "modal-body" }, kb = {
  key: 0,
  class: "loading-state"
}, $b = {
  key: 1,
  class: "warning-box"
}, Cb = {
  key: 0,
  class: "commits-section"
}, xb = { class: "commit-list" }, Sb = { class: "commit-hash" }, Ib = { class: "commit-message" }, Eb = { class: "commit-date" }, Tb = { class: "force-option" }, Pb = { class: "checkbox-option" }, Rb = { class: "commit-summary" }, Mb = { key: 0 }, Db = { key: 1 }, Lb = {
  key: 0,
  class: "info-box"
}, Ob = {
  key: 1,
  class: "commits-section"
}, Ab = { class: "commit-list" }, Nb = { class: "commit-hash" }, Ub = { class: "commit-message" }, zb = { class: "commit-date" }, Fb = {
  key: 2,
  class: "up-to-date"
}, Bb = { class: "modal-actions" }, Vb = /* @__PURE__ */ fe({
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
    return (i, c) => {
      var u, d, m;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", wb, [
              t("h3", _b, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", bb, [
              e.loading ? (a(), r("div", kb, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), r("div", $b, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), r(G, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), r("div", Cb, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", xb, [
                    (a(!0), r(G, null, pe(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Sb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Ib, f(v.message), 1),
                      t("span", Eb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", Tb, [
                  t("label", Pb, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => n.value = v)
                    }, null, 512), [
                      [Jo, n.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), r(G, { key: 3 }, [
                t("div", Rb, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", Mb, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", Db, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", Lb, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", Ob, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Ab, [
                    (a(!0), r(G, null, pe(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Nb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Ub, f(v.message), 1),
                      t("span", zb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", Fb, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Bb, [
              x(le, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: g(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(G, { key: 0 }, [
                x(le, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: g(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                x(le, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: g(() => [...c[20] || (c[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(le, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (v) => l(!1))
              }, {
                default: g(() => [...c[21] || (c[21] = [
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
}), Wb = /* @__PURE__ */ me(Vb, [["__scopeId", "data-v-ae86b6a7"]]), Gb = { class: "resolution-choice-group" }, jb = ["disabled"], Hb = ["disabled"], Kb = /* @__PURE__ */ fe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", Gb, [
      t("button", {
        class: Se(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, jb),
      t("button", {
        class: Se(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Hb)
    ]));
  }
}), qb = /* @__PURE__ */ me(Kb, [["__scopeId", "data-v-985715ed"]]), Yb = { class: "conflict-header" }, Jb = { class: "conflict-info" }, Xb = { class: "workflow-name" }, Qb = { class: "conflict-description" }, Zb = {
  key: 0,
  class: "resolved-badge"
}, ek = { class: "resolved-text" }, tk = { class: "conflict-hashes" }, sk = { class: "hash-item" }, ok = { class: "hash-item" }, nk = { class: "conflict-actions" }, ak = /* @__PURE__ */ fe({
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
    const i = F(() => l.value !== null), c = F(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = F(() => {
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
      return a(), r("div", {
        class: Se(["conflict-item", { resolved: i.value }])
      }, [
        t("div", Yb, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", Jb, [
            t("code", Xb, f(e.conflict.name) + ".json", 1),
            t("div", Qb, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", Zb, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", ek, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", tk, [
          t("span", sk, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", ok, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((h = e.conflict.target_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", nk, [
          x(qb, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), lk = /* @__PURE__ */ me(ak, [["__scopeId", "data-v-506d3bbf"]]), ik = { class: "resolution-content" }, rk = {
  key: 0,
  class: "error-box"
}, ck = { class: "resolution-header" }, uk = { class: "header-stats" }, dk = { class: "stat" }, fk = { class: "stat-value" }, mk = { class: "stat resolved" }, vk = { class: "stat-value" }, pk = {
  key: 0,
  class: "stat pending"
}, gk = { class: "stat-value" }, hk = { class: "conflicts-list" }, yk = {
  key: 1,
  class: "all-resolved-message"
}, wk = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = F(() => o.resolutions.size), i = F(() => o.workflowConflicts.length - l.value), c = F(() => l.value === o.workflowConflicts.length), u = F(
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
    return (w, p) => (a(), R(pt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        t("div", ik, [
          e.error ? (a(), r("div", rk, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", ck, [
            t("div", uk, [
              t("div", dk, [
                t("span", fk, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", mk, [
                t("span", vk, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", pk, [
                t("span", gk, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", hk, [
            (a(!0), r(G, null, pe(e.workflowConflicts, (_) => (a(), R(lk, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => m(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", yk, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        x(Re, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Re, {
          variant: "primary",
          disabled: !c.value || e.validating,
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
}), _k = /* @__PURE__ */ me(wk, [["__scopeId", "data-v-c58d150d"]]), bk = { class: "node-conflict-item" }, kk = { class: "node-header" }, $k = { class: "node-name" }, Ck = { class: "node-id" }, xk = { class: "version-comparison" }, Sk = { class: "version yours" }, Ik = { class: "version theirs" }, Ek = { class: "chosen-version" }, Tk = { class: "chosen" }, Pk = { class: "chosen-reason" }, Rk = { class: "affected-workflows" }, Mk = { class: "wf-source" }, Dk = { class: "wf-version" }, Lk = /* @__PURE__ */ fe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", bk, [
      t("div", kk, [
        t("code", $k, f(e.conflict.node_name), 1),
        t("span", Ck, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", xk, [
        t("div", Sk, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", Ik, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", Ek, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", Tk, f(e.conflict.chosen_version), 1),
        t("span", Pk, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", Rk, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(G, null, pe(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", Mk, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", Dk, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Ok = /* @__PURE__ */ me(Lk, [["__scopeId", "data-v-8b626725"]]), Ak = { class: "validation-content" }, Nk = {
  key: 0,
  class: "compatible-message"
}, Uk = { class: "conflicts-list" }, zk = {
  key: 2,
  class: "warnings-section"
}, Fk = /* @__PURE__ */ fe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = F(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), R(pt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: g(() => [
        t("div", Ak, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", Nk, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), r(G, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", Uk, [
              (a(!0), r(G, null, pe(e.validation.node_conflicts, (u) => (a(), R(Ok, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", zk, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(G, null, pe(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        x(Re, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Re, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        x(Re, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
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
}), Bk = /* @__PURE__ */ me(Fk, [["__scopeId", "data-v-fefd26ed"]]), Vk = { key: 0 }, Wk = /* @__PURE__ */ fe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: n,
      addRemote: l,
      removeRemote: i,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: h,
      pushToRemote: w,
      validateMerge: p
    } = rt(), _ = k([]), C = k(null), $ = k({}), P = k(!1), L = k(null), T = k(""), S = k(!1), q = k(null), B = k(!1), A = k("add"), I = k({
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
    async function O() {
      P.value = !0, L.value = null;
      try {
        const ge = await n();
        _.value = ge.remotes, C.value = ge.current_branch_tracking || null, await Promise.all(
          ge.remotes.map(async (W) => {
            const z = await d(W.name);
            z && ($.value[W.name] = z);
          })
        );
      } catch (ge) {
        L.value = ge instanceof Error ? ge.message : "Failed to load remotes";
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
        A.value === "add" ? await l(ge.name, ge.fetchUrl) : await c(ge.name, ge.fetchUrl, ge.pushUrl || void 0), B.value = !1, await O();
      } catch (W) {
        L.value = W instanceof Error ? W.message : "Operation failed";
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
          await i(ge), await O();
        } catch (W) {
          L.value = W instanceof Error ? W.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const M = k("idle"), we = F(() => M.value === "pull_preview"), ve = F(
      () => M.value === "resolving" || M.value === "validating"
    ), Ie = F(
      () => M.value === "validation_review" || M.value === "executing"
    ), Me = k(!1), Ke = k(null), Xe = k(!1), ke = k(null), Ee = k(!1), Ge = k(null), _e = k(null), ae = k(/* @__PURE__ */ new Map()), Ve = k(null), Te = k(null), D = F(() => Ge.value && br(Ge.value) ? Ge.value : null);
    async function V(ge) {
      ke.value = ge, M.value = "pull_preview", Ee.value = !0, Ge.value = null, _e.value = null;
      try {
        Ge.value = await m(ge);
      } catch (W) {
        _e.value = W instanceof Error ? W.message : "Failed to load pull preview";
      } finally {
        Ee.value = !1;
      }
    }
    function se() {
      M.value = "idle", Ge.value = null, _e.value = null, ke.value = null;
    }
    async function ne(ge) {
      if (!ke.value) return;
      M.value = "executing", _e.value = null;
      const W = ke.value;
      try {
        const z = await v(W, ge);
        if (z.rolled_back) {
          _e.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        xe(), M.value = "idle", o("toast", `✓ Pulled from ${W}`, "success"), await O();
      } catch (z) {
        _e.value = z instanceof Error ? z.message : "Pull failed", M.value = "pull_preview";
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
          _e.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        xe(), M.value = "idle", o("toast", `✓ Pulled from ${ge}`, "success"), await O();
      } catch (W) {
        _e.value = W instanceof Error ? W.message : "Pull failed", M.value = "validation_review";
      }
    }
    function ce() {
      M.value = "resolving";
    }
    function Le() {
      xe(), M.value = "idle";
    }
    function xe() {
      ae.value.clear(), Ve.value = null, Te.value = null, _e.value = null, Ge.value = null, ke.value = null;
    }
    async function Z(ge) {
      ke.value = ge, Me.value = !0, Ee.value = !0, Ke.value = null;
      try {
        Ke.value = await h(ge);
      } catch (W) {
        L.value = W instanceof Error ? W.message : "Failed to load push preview";
      } finally {
        Ee.value = !1;
      }
    }
    function K() {
      Me.value = !1, Ke.value = null, ke.value = null;
    }
    async function Pe(ge) {
      if (!ke.value) return;
      Xe.value = !0;
      const W = ke.value;
      try {
        await w(W, ge), K(), o("toast", `✓ Pushed to ${W}`, "success"), await O();
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
    return et(O), (ge, W) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (z) => S.value = !0)
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
          B.value ? y("", !0) : (a(), R(_o, {
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
          })) : L.value ? (a(), R(Es, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            B.value ? (a(), R(O_, {
              key: 0,
              mode: A.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: H,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !B.value ? (a(), R(on, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (a(), r("span", Vk, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value.length && !B.value ? (a(), R(lt, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, pe(E.value, (z) => (a(), R(k_, {
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
                x(le, {
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
      x(os, {
        show: S.value,
        title: "About Git Remotes",
        onClose: W[2] || (W[2] = (z) => S.value = !1)
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
          x(le, {
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
      x(yb, {
        show: we.value,
        "remote-name": ke.value || "",
        preview: Ge.value,
        loading: Ee.value,
        pulling: M.value === "executing",
        error: _e.value,
        "conflict-resolutions": ae.value,
        onClose: se,
        onPull: ne,
        onOpenConflictResolution: ue
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      x(Wb, {
        show: Me.value,
        "remote-name": ke.value || "",
        preview: Ke.value,
        loading: Ee.value,
        pushing: Xe.value,
        onClose: K,
        onPush: Pe,
        onPullFirst: he
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ve.value && D.value ? (a(), R(_k, {
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
      Ie.value && Ve.value ? (a(), R(Bk, {
        key: 1,
        validation: Ve.value,
        "operation-type": "pull",
        executing: M.value === "executing",
        onProceed: oe,
        onGoBack: ce,
        onCancel: Le
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Gk = /* @__PURE__ */ me(Wk, [["__scopeId", "data-v-9ae3b76d"]]), jk = { class: "setting-info" }, Hk = { class: "setting-label" }, Kk = {
  key: 0,
  class: "required-marker"
}, qk = {
  key: 0,
  class: "setting-description"
}, Yk = { class: "setting-control" }, Jk = /* @__PURE__ */ fe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Se(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", jk, [
        t("div", Hk, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), r("span", Kk, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", qk, f(e.description), 1)) : y("", !0)
      ]),
      t("div", Yk, [
        He(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), ra = /* @__PURE__ */ me(Jk, [["__scopeId", "data-v-cb5d236c"]]), Xk = { class: "toggle" }, Qk = ["checked", "disabled"], Zk = /* @__PURE__ */ fe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", Xk, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Qk),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), e2 = /* @__PURE__ */ me(Zk, [["__scopeId", "data-v-71c0f550"]]), t2 = { class: "workspace-settings-content" }, s2 = { class: "settings-section" }, o2 = { class: "path-setting" }, n2 = { class: "path-value" }, a2 = { class: "path-setting" }, l2 = { class: "path-value" }, i2 = { class: "settings-section" }, r2 = { class: "settings-section" }, c2 = { class: "settings-section" }, u2 = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = rt(), u = k(!1), d = k(null), m = k(null), v = k(null), h = k(null), w = k(""), p = k(""), _ = k(!1);
    function C(B) {
      return B.join(" ");
    }
    function $(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const P = F(() => {
      if (!h.value) return !1;
      const B = w.value !== (h.value.civitai_api_key || ""), A = p.value !== C(h.value.comfyui_extra_args || []);
      return B || A;
    });
    async function L() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), h.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = C(v.value.comfyui_extra_args || []);
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
        w.value !== (((B = h.value) == null ? void 0 : B.civitai_api_key) || "") && (I.civitai_api_key = w.value || null), p.value !== C(((A = h.value) == null ? void 0 : A.comfyui_extra_args) || []) && (I.comfyui_extra_args = $(p.value)), await c(I, n.workspacePath || void 0), await L(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (I) {
        const E = I instanceof Error ? I.message : "Failed to save settings";
        m.value = { type: "error", message: E }, l("error", E);
      }
    }
    function S() {
      h.value && (w.value = h.value.civitai_api_key || "", p.value = C(h.value.comfyui_extra_args || []), m.value = null);
    }
    function q(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return s({
      saveSettings: T,
      resetSettings: S,
      hasChanges: P,
      loadSettings: L
    }), et(L), (B, A) => (a(), r("div", t2, [
      u.value ? (a(), R(Is, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), R(Es, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: L
      }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
        x(lt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var I, E;
            return [
              t("div", s2, [
                t("div", o2, [
                  A[3] || (A[3] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  A[4] || (A[4] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", n2, f(((I = v.value) == null ? void 0 : I.workspace_path) || "Loading..."), 1)
                ]),
                t("div", a2, [
                  A[5] || (A[5] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  A[6] || (A[6] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", l2, f(((E = v.value) == null ? void 0 : E.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        x(lt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", i2, [
              x(ra, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  x(Pn, {
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
        x(lt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", r2, [
              x(ra, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  x(Pn, {
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
        x(lt, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", c2, [
              x(ra, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  x(e2, {
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
        m.value ? (a(), R(on, {
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
}), kr = /* @__PURE__ */ me(u2, [["__scopeId", "data-v-004ef04f"]]), d2 = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Tt, null, {
      header: g(() => [
        x(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var i, c;
            return [
              x(le, {
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
              (c = s.value) != null && c.hasChanges ? (a(), R(le, {
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
        x(kr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), f2 = { class: "base-tabs" }, m2 = ["disabled", "onClick"], v2 = {
  key: 0,
  class: "base-tabs__badge"
}, p2 = /* @__PURE__ */ fe({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l(i) {
      var c;
      (c = o.tabs.find((u) => u.id === i)) != null && c.disabled || n("update:modelValue", i);
    }
    return (i, c) => (a(), r("div", f2, [
      (a(!0), r(G, null, pe(e.tabs, (u) => (a(), r("button", {
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
        u.badge ? (a(), r("span", v2, f(u.badge), 1)) : y("", !0)
      ], 10, m2))), 128))
    ]));
  }
}), $r = /* @__PURE__ */ me(p2, [["__scopeId", "data-v-ad5e6cad"]]), g2 = { class: "log-viewer-wrapper" }, h2 = ["disabled", "title"], y2 = /* @__PURE__ */ fe({
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
      await Zo();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    et(i), Ct(() => s.logs, i);
    async function c() {
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
    return (m, v) => (a(), r("div", g2, [
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
          onClick: c,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, h2),
        (a(!0), r(G, null, pe(l.value, (h, w) => (a(), r("div", {
          key: w,
          class: Se(`log-line log-level-${h.level.toLowerCase()}`)
        }, f(h.text), 3))), 128))
      ], 544)
    ]));
  }
}), Cr = /* @__PURE__ */ me(y2, [["__scopeId", "data-v-c0cc6d21"]]), w2 = /* @__PURE__ */ fe({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = rt(), c = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), h = k(null), w = k(null), p = k(!1), _ = F(() => c.value === "workspace" ? h.value : w.value);
    async function C() {
      d.value = !0, m.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (L) {
        m.value = L instanceof Error ? L.message : `Failed to load ${c.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [L, T] = await Promise.all([
          o(),
          l()
        ]);
        L.exists && (h.value = L.path), T.exists && (w.value = T.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (L) {
          console.error("Failed to open log file:", L);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ct(c, () => {
      C();
    }), et(() => {
      C(), $();
    }), (L, T) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (S) => v.value = !0)
          }, {
            actions: g(() => [
              x(le, {
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
              x(le, {
                variant: "secondary",
                size: "sm",
                onClick: C,
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
          x($r, {
            modelValue: c.value,
            "onUpdate:modelValue": T[1] || (T[1] = (S) => c.value = S),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), R(Is, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), R(Es, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            u.value.length === 0 ? (a(), R(ss, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), R(Cr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      x(os, {
        show: v.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (S) => v.value = !1)
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
          x(le, {
            variant: "primary",
            onClick: T[2] || (T[2] = (S) => v.value = !1)
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
}), _2 = /* @__PURE__ */ fe({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = rt(), i = k([]), c = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), h = k(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        i.value = await s(void 0, 500);
        try {
          const C = await o();
          m.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        u.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function p() {
      try {
        const C = await n();
        C.exists && (v.value = C.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        h.value = !0;
        try {
          await l(v.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          h.value = !1;
        }
      }
    }
    return et(() => {
      w(), p();
    }), (C, $) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: g(() => [
              x(le, {
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
              x(le, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: c.value
              }, {
                default: g(() => [
                  b(f(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          c.value ? (a(), R(Is, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), R(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length === 0 ? (a(), R(ss, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(Cr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      x(os, {
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
          x(le, {
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
}), b2 = { class: "env-title" }, k2 = {
  key: 0,
  class: "current-badge"
}, $2 = {
  key: 0,
  class: "branch-info"
}, C2 = /* @__PURE__ */ fe({
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
        t("div", b2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", k2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (a(), r("span", $2, [
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
          x(ft, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          x(ft, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          x(ft, {
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
}), x2 = /* @__PURE__ */ me(C2, [["__scopeId", "data-v-9231917a"]]), S2 = { class: "env-details" }, I2 = { class: "status-row" }, E2 = {
  key: 0,
  class: "detail-row"
}, T2 = { class: "value mono" }, P2 = {
  key: 1,
  class: "detail-row"
}, R2 = { class: "value mono small" }, M2 = { class: "detail-row" }, D2 = { class: "value" }, L2 = { class: "detail-row" }, O2 = { class: "value" }, A2 = { class: "detail-row" }, N2 = { class: "value" }, U2 = {
  key: 2,
  class: "section-divider"
}, z2 = {
  key: 3,
  class: "detail-row"
}, F2 = { class: "value" }, B2 = {
  key: 4,
  class: "detail-row"
}, V2 = { class: "value" }, W2 = { class: "footer-actions" }, G2 = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), R(pt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: g(() => [
        t("div", S2, [
          t("div", I2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Se(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", E2, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", T2, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", P2, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", R2, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", M2, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", D2, f(e.environment.workflow_count), 1)
          ]),
          t("div", L2, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", O2, f(e.environment.node_count), 1)
          ]),
          t("div", A2, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", N2, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", U2)) : y("", !0),
          e.environment.created_at ? (a(), r("div", z2, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", F2, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", B2, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", V2, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", W2, [
          e.canDelete ? (a(), R(Re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (c) => o("delete", e.environment.name))
          }, {
            default: g(() => [...i[12] || (i[12] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          x(Re, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (c) => o("close"))
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
}), j2 = /* @__PURE__ */ me(G2, [["__scopeId", "data-v-59855453"]]), xr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Sr = "3.12", Qa = [
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
], Ir = "auto", H2 = { class: "progress-bar" }, K2 = /* @__PURE__ */ fe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = F(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", H2, [
      t("div", {
        class: Se(["progress-fill", e.variant]),
        style: Gt({ width: o.value })
      }, null, 6)
    ]));
  }
}), Kn = /* @__PURE__ */ me(K2, [["__scopeId", "data-v-1beb0512"]]), q2 = { class: "task-progress" }, Y2 = { class: "progress-info" }, J2 = { class: "progress-percentage" }, X2 = { class: "progress-message" }, Q2 = {
  key: 0,
  class: "progress-steps"
}, Z2 = { class: "step-icon" }, e$ = { class: "step-label" }, t$ = /* @__PURE__ */ fe({
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
      const i = s.steps.find((c) => c.id === l);
      return i ? s.progress >= i.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const i = o(l);
      return i === "completed" ? "✓" : i === "active" ? "⟳" : "○";
    }
    return (l, i) => (a(), r("div", q2, [
      x(Kn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Y2, [
        t("span", J2, f(e.progress) + "%", 1),
        t("span", X2, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", Q2, [
        (a(!0), r(G, null, pe(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Se(["step", o(c.id)])
        }, [
          t("span", Z2, f(n(c.id)), 1),
          t("span", e$, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Mn = /* @__PURE__ */ me(t$, [["__scopeId", "data-v-9d1de66c"]]), s$ = {
  key: 0,
  class: "create-env-form"
}, o$ = { class: "form-field" }, n$ = { class: "form-field" }, a$ = ["value"], l$ = { class: "form-field" }, i$ = ["disabled"], r$ = ["value"], c$ = { class: "form-field" }, u$ = ["value"], d$ = { class: "form-field form-field--checkbox" }, f$ = { class: "form-checkbox" }, m$ = {
  key: 1,
  class: "create-env-progress"
}, v$ = { class: "creating-intro" }, p$ = {
  key: 0,
  class: "progress-warning"
}, g$ = {
  key: 1,
  class: "create-error"
}, h$ = { class: "error-message" }, y$ = {
  key: 1,
  class: "footer-status"
}, w$ = 10, _$ = /* @__PURE__ */ fe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = rt(), c = k(""), u = k(Sr), d = k("latest"), m = k(Ir), v = k(!1), h = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let C = null, $ = 0;
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
    ], L = k(null);
    function T() {
      p.value || o("close");
    }
    async function S() {
      const E = c.value.trim();
      if (E) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: E,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, re = await l(O);
          re.status === "started" ? q() : re.status === "error" && (_.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
          });
        } catch (O) {
          _.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function q() {
      C || ($ = 0, C = window.setInterval(async () => {
        try {
          const E = await i();
          $ = 0, _.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase,
            error: E.error
          }, E.state === "complete" ? (B(), o("created", E.environment_name || c.value.trim(), v.value)) : E.state === "error" ? (B(), _.value.error = E.error || E.message) : E.state === "idle" && p.value && (B(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= w$ && (B(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      C && (clearInterval(C), C = null);
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
      await Zo(), (E = L.value) == null || E.focus(), I();
    }), to(() => {
      B();
    }), (E, O) => (a(), R(pt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: T
    }, {
      body: g(() => [
        p.value ? (a(), r("div", m$, [
          t("p", v$, [
            O[11] || (O[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            O[12] || (O[12] = b("... ", -1))
          ]),
          x(Mn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", p$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", g$, [
            t("p", h$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", s$, [
          t("div", o$, [
            O[6] || (O[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": O[0] || (O[0] = (re) => c.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Xt(S, ["enter"])
            }, null, 544), [
              [Nt, c.value]
            ])
          ]),
          t("div", n$, [
            O[7] || (O[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (re) => u.value = re),
              class: "form-select"
            }, [
              (a(!0), r(G, null, pe(Fe(xr), (re) => (a(), r("option", {
                key: re,
                value: re
              }, f(re), 9, a$))), 128))
            ], 512), [
              [vs, u.value]
            ])
          ]),
          t("div", l$, [
            O[8] || (O[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (re) => d.value = re),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(G, null, pe(h.value, (re) => (a(), r("option", {
                key: re.tag_name,
                value: re.tag_name
              }, f(re.name), 9, r$))), 128))
            ], 8, i$), [
              [vs, d.value]
            ])
          ]),
          t("div", c$, [
            O[9] || (O[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (re) => m.value = re),
              class: "form-select"
            }, [
              (a(!0), r(G, null, pe(Fe(Qa), (re) => (a(), r("option", {
                key: re,
                value: re
              }, f(re) + f(re === "auto" ? " (detect GPU)" : ""), 9, u$))), 128))
            ], 512), [
              [vs, m.value]
            ])
          ]),
          t("div", d$, [
            t("label", f$, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (re) => v.value = re)
              }, null, 512), [
                [Jo, v.value]
              ]),
              O[10] || (O[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        p.value ? (a(), r(G, { key: 1 }, [
          _.value.error ? (a(), R(Re, {
            key: 0,
            variant: "secondary",
            onClick: A
          }, {
            default: g(() => [...O[15] || (O[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", y$, " Creating environment... "))
        ], 64)) : (a(), r(G, { key: 0 }, [
          x(Re, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: S
          }, {
            default: g(() => [...O[13] || (O[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Re, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (re) => o("close"))
          }, {
            default: g(() => [...O[14] || (O[14] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), b$ = /* @__PURE__ */ me(_$, [["__scopeId", "data-v-f37eaa42"]]), k$ = /* @__PURE__ */ fe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = rt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), h = k(null), w = F(() => {
      if (!d.value.trim()) return i.value;
      const L = d.value.toLowerCase();
      return i.value.filter(
        (T) => {
          var S;
          return T.name.toLowerCase().includes(L) || ((S = T.current_branch) == null ? void 0 : S.toLowerCase().includes(L));
        }
      );
    });
    function p(L, T) {
      v.value = !1, n("created", L, T);
    }
    function _() {
      v.value = !0;
    }
    function C(L) {
      h.value = L;
    }
    function $(L) {
      h.value = null, n("delete", L);
    }
    async function P() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (L) {
        u.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return et(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (L, T) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (S) => m.value = !0)
          }, {
            actions: g(() => [
              x(le, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              x(le, {
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
          x(_o, {
            modelValue: d.value,
            "onUpdate:modelValue": T[1] || (T[1] = (S) => d.value = S),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (a(), R(Is, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), R(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            w.value.length ? (a(), R(lt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, pe(w.value, (S) => (a(), R(x2, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    S.is_current ? y("", !0) : (a(), R(le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => L.$emit("switch", S.name)
                    }, {
                      default: g(() => [...T[8] || (T[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    x(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => C(S)
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
                  x(le, {
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
      x(os, {
        show: m.value,
        title: "About Environments",
        onClose: T[3] || (T[3] = (S) => m.value = !1)
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
          x(le, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (S) => m.value = !1)
          }, {
            default: g(() => [...T[12] || (T[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (a(), R(j2, {
        key: 0,
        environment: h.value,
        "can-delete": i.value.length > 1,
        onClose: T[4] || (T[4] = (S) => h.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), R(b$, {
        key: 1,
        onClose: T[5] || (T[5] = (S) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), $$ = /* @__PURE__ */ me(k$, [["__scopeId", "data-v-f95999f4"]]), C$ = { class: "file-path" }, x$ = { class: "file-path-text" }, S$ = ["title"], I$ = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), r("div", C$, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", x$, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, S$)) : y("", !0)
    ]));
  }
}), E$ = /* @__PURE__ */ me(I$, [["__scopeId", "data-v-f0982173"]]), T$ = { class: "export-blocked" }, P$ = { class: "issues-list" }, R$ = { class: "issue-message" }, M$ = {
  key: 0,
  class: "issue-details"
}, D$ = ["onClick"], L$ = { class: "issue-fix" }, O$ = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), R(pt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: g(() => [
        t("div", T$, [
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
          t("div", P$, [
            (a(!0), r(G, null, pe(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", R$, f(c.message), 1),
              c.details.length ? (a(), r("div", M$, [
                (a(!0), r(G, null, pe(n(u), (d, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                c.details.length > 3 && !o[u] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, D$)) : y("", !0)
              ])) : y("", !0),
              t("div", L$, [
                c.type === "uncommitted_workflows" ? (a(), r(G, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(G, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(G, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: g(() => [
        x(Re, {
          variant: "primary",
          onClick: i[0] || (i[0] = (c) => l.$emit("close"))
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
}), Er = /* @__PURE__ */ me(O$, [["__scopeId", "data-v-b52f5e32"]]), A$ = { class: "export-warnings" }, N$ = {
  key: 0,
  class: "success-header"
}, U$ = { class: "warning-header" }, z$ = { class: "warning-summary" }, F$ = { class: "warning-title" }, B$ = { class: "models-section" }, V$ = { class: "models-list" }, W$ = { class: "model-info" }, G$ = { class: "model-filename" }, j$ = { class: "model-workflows" }, H$ = ["onClick"], K$ = /* @__PURE__ */ fe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), c = F(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), r(G, null, [
      x(pt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", A$, [
            e.models.length === 0 ? (a(), r("div", N$, [...m[4] || (m[4] = [
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
            ])])) : (a(), r(G, { key: 1 }, [
              t("div", U$, [
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
                t("div", z$, [
                  t("h3", F$, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", B$, [
                t("div", V$, [
                  (a(!0), r(G, null, pe(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", W$, [
                      t("div", G$, f(v.filename), 1),
                      t("div", j$, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (h) => i.value = v.hash
                    }, " Add Source ", 8, H$)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (a(), r("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (v) => l.value = !0)
                }, " Show " + f(e.models.length - 3) + " more model" + f(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : y("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: g(() => [
          x(Re, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: g(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          x(Re, {
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
      i.value ? (a(), R(Ja, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Tr = /* @__PURE__ */ me(K$, [["__scopeId", "data-v-b698d882"]]), q$ = { class: "export-card" }, Y$ = { class: "export-path-row" }, J$ = { class: "export-actions" }, X$ = {
  key: 1,
  class: "export-warning"
}, Q$ = /* @__PURE__ */ fe({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = rt(), n = k(""), l = k(!1), i = k(!1), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), h = k(!1), w = F(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
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
    async function C() {
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
        } catch (S) {
          console.error("Failed to copy path:", S);
        }
    }
    async function L() {
      var T;
      if ((T = u.value) != null && T.path) {
        c.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const q = await S.blob(), B = URL.createObjectURL(q), A = u.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = B, I.download = A, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(B);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (T, S) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (q) => d.value = !0)
          })
        ]),
        content: g(() => [
          x(lt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", q$, [
                S[7] || (S[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", Y$, [
                  x(Pn, {
                    modelValue: n.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (q) => n.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", J$, [
                  x(le, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: g(() => [
                      S[6] || (S[6] = t("svg", {
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
              x(Et, {
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
                    x(ft, { label: "Saved to:" }, {
                      default: g(() => [
                        x(E$, {
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
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), r("div", X$, [...S[8] || (S[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    x(le, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: L
                    }, {
                      default: g(() => [...S[9] || (S[9] = [
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
                    x(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: g(() => [...S[10] || (S[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    x(le, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (q) => u.value = null)
                    }, {
                      default: g(() => [...S[11] || (S[11] = [
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
      x(os, {
        show: d.value,
        title: "What Gets Exported",
        onClose: S[3] || (S[3] = (q) => d.value = !1)
      }, {
        content: g(() => [...S[12] || (S[12] = [
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
      v.value && m.value ? (a(), R(Er, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: S[4] || (S[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      h.value && m.value ? (a(), R(Tr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: S[5] || (S[5] = (q) => h.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), Z$ = /* @__PURE__ */ me(Q$, [["__scopeId", "data-v-f4d120f2"]]), eC = { class: "file-input-wrapper" }, tC = ["accept", "multiple", "disabled"], sC = /* @__PURE__ */ fe({
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
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return s({
      triggerInput: i
    }), (u, d) => (a(), r("div", eC, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, tC),
      x(le, {
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
}), oC = /* @__PURE__ */ me(sC, [["__scopeId", "data-v-cd192091"]]), nC = {
  key: 0,
  class: "drop-zone-empty"
}, aC = { class: "drop-zone-text" }, lC = { class: "drop-zone-primary" }, iC = { class: "drop-zone-secondary" }, rC = { class: "drop-zone-actions" }, cC = {
  key: 1,
  class: "drop-zone-file"
}, uC = { class: "file-info" }, dC = { class: "file-details" }, fC = { class: "file-name" }, mC = { class: "file-size" }, vC = /* @__PURE__ */ fe({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = F(() => l.value !== null), u = F(() => {
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
      var L;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (L = $.dataTransfer) == null ? void 0 : L.files;
      P && P.length > 0 && _(P[0]);
    }
    function p($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function C() {
      l.value = null, o("clear");
    }
    return ($, P) => (a(), r("div", {
      class: Se(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: it(m, ["prevent"]),
      onDragover: it(v, ["prevent"]),
      onDragleave: it(h, ["prevent"]),
      onDrop: it(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", cC, [
        t("div", uC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", dC, [
            t("div", fC, f(u.value), 1),
            t("div", mC, f(d.value), 1)
          ])
        ]),
        x(le, {
          variant: "ghost",
          size: "xs",
          onClick: C,
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
      ])) : (a(), r("div", nC, [
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
        t("div", aC, [
          t("p", lC, f(e.primaryText), 1),
          t("p", iC, f(e.secondaryText), 1)
        ]),
        t("div", rC, [
          x(oC, {
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
}), pC = /* @__PURE__ */ me(vC, [["__scopeId", "data-v-0f79cb86"]]), gC = { class: "import-preview" }, hC = { class: "preview-header" }, yC = {
  key: 0,
  class: "source-env"
}, wC = { class: "preview-content" }, _C = { class: "preview-section" }, bC = { class: "section-header" }, kC = { class: "section-info" }, $C = { class: "section-count" }, CC = {
  key: 0,
  class: "item-list"
}, xC = { class: "item-name" }, SC = {
  key: 0,
  class: "item-more"
}, IC = { class: "preview-section" }, EC = { class: "section-header" }, TC = { class: "section-info" }, PC = { class: "section-count" }, RC = {
  key: 0,
  class: "item-list"
}, MC = { class: "item-details" }, DC = { class: "item-name" }, LC = { class: "item-meta" }, OC = {
  key: 0,
  class: "item-more"
}, AC = { class: "preview-section" }, NC = { class: "section-header" }, UC = { class: "section-info" }, zC = { class: "section-count" }, FC = {
  key: 0,
  class: "item-list"
}, BC = { class: "item-name" }, VC = {
  key: 0,
  class: "item-more"
}, WC = {
  key: 0,
  class: "preview-section"
}, GC = { class: "git-info" }, jC = /* @__PURE__ */ fe({
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
    function i(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), r("div", gC, [
      t("div", hC, [
        x(Ot, null, {
          default: g(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", yC, [
          u[1] || (u[1] = b(" From: ", -1)),
          x(Sa, null, {
            default: g(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", wC, [
        t("div", _C, [
          t("div", bC, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", kC, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", $C, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", CC, [
            (a(!0), r(G, null, pe(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", xC, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", SC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", IC, [
          t("div", EC, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", TC, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", PC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", RC, [
            (a(!0), r(G, null, pe(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", MC, [
                t("span", DC, f(d.filename), 1),
                t("span", LC, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", OC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", AC, [
          t("div", NC, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", UC, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", zC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", FC, [
            (a(!0), r(G, null, pe(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", BC, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", VC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", WC, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", GC, [
            e.gitBranch ? (a(), R(ft, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                x(Sa, null, {
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
                x(hr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), HC = /* @__PURE__ */ me(jC, [["__scopeId", "data-v-182fe113"]]), KC = { class: "import-config" }, qC = { class: "config-container" }, YC = { class: "config-field" }, JC = { class: "input-wrapper" }, XC = ["value"], QC = {
  key: 0,
  class: "validating-indicator"
}, ZC = {
  key: 1,
  class: "valid-indicator"
}, e3 = {
  key: 0,
  class: "field-error"
}, t3 = { class: "config-field" }, s3 = { class: "strategy-options" }, o3 = ["value", "checked", "onChange"], n3 = { class: "strategy-content" }, a3 = { class: "strategy-label" }, l3 = { class: "strategy-description" }, i3 = { class: "config-field switch-field" }, r3 = { class: "switch-label" }, c3 = ["checked"], u3 = { class: "advanced-section" }, d3 = { class: "advanced-content" }, f3 = { class: "config-field" }, m3 = ["value"], v3 = ["value"], p3 = /* @__PURE__ */ fe({
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
      const h = v.target.value;
      n("update:name", h), i.value = !1, u && clearTimeout(u), h.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", h);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, h) => (a(), r("div", KC, [
      x(Ot, null, {
        default: g(() => [...h[2] || (h[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", qC, [
        t("div", YC, [
          x(wn, { required: "" }, {
            default: g(() => [...h[3] || (h[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", JC, [
            t("input", {
              type: "text",
              class: Se(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, XC),
            l.value ? (a(), r("span", QC, "...")) : i.value ? (a(), r("span", ZC, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", e3, f(e.nameError), 1)) : y("", !0),
          h[4] || (h[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", t3, [
          x(wn, null, {
            default: g(() => [...h[5] || (h[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", s3, [
            (a(), r(G, null, pe(c, (w) => t("label", {
              key: w.value,
              class: Se(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, o3),
              t("div", n3, [
                t("span", a3, f(w.label), 1),
                t("span", l3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", i3, [
          t("label", r3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: h[0] || (h[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, c3),
            h[6] || (h[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", u3, [
          h[8] || (h[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", d3, [
            t("div", f3, [
              x(wn, null, {
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
                (a(!0), r(G, null, pe(Fe(Qa), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, v3))), 128))
              ], 40, m3)
            ])
          ])
        ])
      ])
    ]));
  }
}), g3 = /* @__PURE__ */ me(p3, [["__scopeId", "data-v-89ea06a1"]]), h3 = { class: "import-flow" }, y3 = {
  key: 0,
  class: "import-empty"
}, w3 = { class: "git-import-section" }, _3 = { class: "git-url-input-row" }, b3 = ["disabled"], k3 = {
  key: 0,
  class: "git-error"
}, $3 = {
  key: 1,
  class: "import-configure"
}, C3 = { class: "selected-file-bar" }, x3 = {
  key: 0,
  class: "file-bar-content"
}, S3 = { class: "file-bar-info" }, I3 = { class: "file-bar-name" }, E3 = { class: "file-bar-size" }, T3 = {
  key: 1,
  class: "file-bar-content"
}, P3 = { class: "file-bar-info" }, R3 = { class: "file-bar-name" }, M3 = {
  key: 0,
  class: "preview-loading"
}, D3 = { class: "import-actions" }, L3 = {
  key: 2,
  class: "import-progress"
}, O3 = { class: "creating-intro" }, A3 = {
  key: 0,
  class: "progress-warning"
}, N3 = {
  key: 1,
  class: "import-error"
}, U3 = { class: "error-message" }, z3 = {
  key: 3,
  class: "import-complete"
}, F3 = { class: "complete-message" }, B3 = { class: "complete-title" }, V3 = { class: "complete-details" }, W3 = { class: "complete-actions" }, G3 = /* @__PURE__ */ fe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Xe, ke, Ee, Ge;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = rt();
    let h = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), $ = k(""), P = k(!1), L = k(null), T = k(""), S = k(null), q = k(!1), B = k(null), A = k(null), I = k({
      name: ((Xe = n.initialProgress) == null ? void 0 : Xe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = k(null), O = k({
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
      const _e = A.value;
      return {
        sourceEnvironment: _e.comfyui_version ? `ComfyUI ${_e.comfyui_version}` : "Unknown",
        workflows: _e.workflows.map((ae) => ae.name),
        models: _e.models.map((ae) => ({
          filename: ae.filename,
          size: 0,
          type: ae.relative_path.split("/")[0] || "model"
        })),
        nodes: _e.nodes.map((ae) => ae.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), H = F(() => !P.value && !L.value && A.value && I.value.name.length > 0 && !E.value && (w.value || S.value));
    async function te(_e) {
      w.value = _e, P.value = !0, L.value = null, A.value = null;
      try {
        const ae = await i(_e);
        A.value = ae;
      } catch (ae) {
        L.value = ae instanceof Error ? ae.message : "Failed to analyze file", console.error("Preview error:", ae);
      } finally {
        P.value = !1;
      }
    }
    function Q() {
      w.value = null, S.value = null, T.value = "", B.value = null, _.value = !1, C.value = !1, $.value = "", A.value = null, L.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, l("source-cleared");
    }
    function N() {
      Me(), Q(), p.value = !1, P.value = !1, q.value = !1, O.value = {
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
          const _e = await c(T.value.trim());
          S.value = T.value.trim(), A.value = _e;
        } catch (_e) {
          B.value = _e instanceof Error ? _e.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function M(_e) {
      try {
        const ae = new URL(_e);
        return ae.host + ae.pathname.replace(/\.git$/, "");
      } catch {
        return _e;
      }
    }
    async function we(_e) {
      if (!_e) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const ae = await u(_e);
        E.value = ae.valid ? null : ae.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function ve() {
      if (I.value.name && !(!w.value && !S.value)) {
        p.value = !0, _.value = !1, O.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let _e;
          if (w.value)
            _e = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (S.value)
            _e = await m(
              S.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          _e.status === "started" ? Ie() : (C.value = !1, $.value = _e.message, p.value = !1, _.value = !0);
        } catch (_e) {
          C.value = !1, $.value = _e instanceof Error ? _e.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Ie() {
      if (h) return;
      const _e = async () => {
        try {
          const Ve = await v();
          return O.value = {
            message: Ve.message,
            phase: Ve.phase || "",
            progress: Ve.progress ?? (Ve.state === "importing" ? 50 : 0),
            error: Ve.error || null
          }, Ve.state === "complete" ? (Me(), C.value = !0, $.value = `Environment '${Ve.environment_name}' created successfully`, p.value = !1, _.value = !0, Ve.environment_name && l("import-complete", Ve.environment_name, I.value.switchAfterImport), !1) : Ve.state === "error" ? (Me(), C.value = !1, $.value = Ve.error || Ve.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Ve) {
          return console.error("Failed to poll import progress:", Ve), !0;
        }
      };
      await _e() && (h = setInterval(async () => {
        await _e() || Me();
      }, 2e3));
    }
    function Me() {
      h && (clearInterval(h), h = null);
    }
    function Ke(_e) {
      return _e < 1024 ? `${_e} B` : _e < 1024 * 1024 ? `${(_e / 1024).toFixed(1)} KB` : _e < 1024 * 1024 * 1024 ? `${(_e / (1024 * 1024)).toFixed(1)} MB` : `${(_e / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const _e = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", _e.state, _e), _e.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", _e.environment_name), p.value = !0, I.value.name = _e.environment_name || I.value.name || "", O.value = {
          progress: _e.progress ?? 0,
          message: _e.message || "Importing...",
          phase: _e.phase || "",
          error: null
        }, Ie());
      } catch (_e) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", _e);
      }
    }), s({
      handleReset: N,
      isImporting: p,
      canImport: H
    }), (_e, ae) => {
      var Ve;
      return a(), r("div", h3, [
        !w.value && !S.value && !p.value ? (a(), r("div", y3, [
          x(pC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: te
          }),
          ae[7] || (ae[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", w3, [
            ae[5] || (ae[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", _3, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ae[0] || (ae[0] = (Te) => T.value = Te),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Xt(U, ["enter"]),
                disabled: q.value
              }, null, 40, b3), [
                [Nt, T.value]
              ]),
              x(le, {
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
            B.value ? (a(), r("div", k3, f(B.value), 1)) : y("", !0),
            ae[6] || (ae[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || S.value) && !p.value && !_.value ? (a(), r("div", $3, [
          t("div", C3, [
            w.value ? (a(), r("div", x3, [
              ae[8] || (ae[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", S3, [
                t("div", I3, f(w.value.name), 1),
                t("div", E3, f(Ke(w.value.size)), 1)
              ])
            ])) : S.value ? (a(), r("div", T3, [
              ae[10] || (ae[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", P3, [
                t("div", R3, f(M(S.value)), 1),
                ae[9] || (ae[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            x(le, {
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
          P.value ? (a(), r("div", M3, [...ae[12] || (ae[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : L.value ? (a(), R(Kt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [L.value]
          }, null, 8, ["details"])) : A.value ? (a(), R(HC, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          A.value ? (a(), R(g3, {
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
          t("div", D3, [
            x(le, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: g(() => [...ae[13] || (ae[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(le, {
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
        ])) : p.value ? (a(), r("div", L3, [
          t("p", O3, [
            ae[15] || (ae[15] = b(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            ae[16] || (ae[16] = b("... ", -1))
          ]),
          x(Mn, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (a(), r("p", A3, " This may take several minutes. Please wait... ")),
          O.value.error ? (a(), r("div", N3, [
            t("p", U3, f(O.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", z3, [
          t("div", {
            class: Se(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", F3, [
            t("div", B3, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", V3, f($.value), 1)
          ]),
          t("div", W3, [
            x(le, {
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
}), Pr = /* @__PURE__ */ me(G3, [["__scopeId", "data-v-72cbc04e"]]), j3 = /* @__PURE__ */ fe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
          })
        ]),
        content: g(() => [
          x(Pr, { onImportComplete: l })
        ]),
        _: 1
      }),
      x(os, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => n.value = !1)
      }, {
        content: g(() => [...c[2] || (c[2] = [
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
}), H3 = /* @__PURE__ */ me(j3, [["__scopeId", "data-v-e13bfe76"]]), fn = io(), K3 = 5e3, no = k([]), ca = k(!1), ua = k(null);
let Io = null;
async function mn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Rr(e) {
  const s = F(
    () => no.value.filter((p) => p.status === "running")
  ), o = F(
    () => no.value.filter((p) => p.status === "deploying")
  ), n = F(
    () => no.value.filter((p) => p.status === "stopped")
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
    return [...no.value].sort(
      (_, C) => (p[_.status] ?? 5) - (p[C.status] ?? 5)
    );
  });
  async function c() {
    ca.value = !0, ua.value = null;
    try {
      let p;
      if (!fn) {
        const _ = await mn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      no.value = p.instances;
    } catch (p) {
      ua.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ca.value = !1;
    }
  }
  function u(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const C = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${C}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${C}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function d(p) {
    try {
      if (!fn) {
        const _ = u(p, "stop"), C = await mn(_, { method: "POST" });
        if (!C.ok) {
          const $ = await C.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] stopInstance error:", _), _;
    }
  }
  async function m(p) {
    try {
      if (!fn) {
        const _ = u(p, "start"), C = await mn(_, { method: "POST" });
        if (!C.ok) {
          const $ = await C.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] startInstance error:", _), _;
    }
  }
  async function v(p) {
    try {
      if (!fn) {
        const _ = u(p, "terminate"), C = await mn(_, { method: "DELETE" });
        if (!C.ok) {
          const $ = await C.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function h() {
    Io || (Io = window.setInterval(c, K3));
  }
  function w() {
    Io && (clearInterval(Io), Io = null);
  }
  return Ct(o, (p) => {
    p.length > 0 && h();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), h()), {
    // State
    instances: no,
    isLoading: ca,
    error: ua,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: n,
    liveInstanceCount: l,
    sortedInstances: i,
    // Actions
    refreshInstances: c,
    stopInstance: d,
    startInstance: m,
    terminateInstance: v,
    // Polling
    startPolling: h,
    stopPolling: w
  };
}
const q3 = { class: "instance-header" }, Y3 = { class: "provider-badge" }, J3 = { class: "instance-name" }, X3 = {
  key: 0,
  class: "spinner"
}, Q3 = { class: "instance-details" }, Z3 = {
  key: 0,
  class: "detail"
}, e5 = {
  key: 1,
  class: "detail instance-url"
}, t5 = {
  key: 2,
  class: "detail"
}, s5 = {
  key: 3,
  class: "detail"
}, o5 = {
  key: 4,
  class: "detail total-cost"
}, n5 = {
  key: 0,
  class: "deployment-progress"
}, a5 = { class: "progress-message" }, l5 = { class: "instance-actions" }, i5 = /* @__PURE__ */ fe({
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
    function c() {
      s.instance.console_url && window.open(s.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function u(d) {
      const m = Math.floor(d / 3600), v = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (d, m) => (a(), r("div", {
      class: Se(["instance-card", l.value])
    }, [
      t("div", q3, [
        t("span", Y3, f(o.value), 1),
        t("span", J3, f(e.instance.name), 1),
        t("span", {
          class: Se(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", X3)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", Q3, [
        e.instance.gpu_type ? (a(), r("span", Z3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", e5, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", t5, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", s5, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", o5, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", n5, [
        t("div", a5, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), R(Kn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", l5, [
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
          onClick: c
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
        x(le, {
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
}), r5 = /* @__PURE__ */ me(i5, [["__scopeId", "data-v-746c3894"]]), c5 = { class: "instances-tab" }, u5 = { class: "instances-header" }, d5 = {
  key: 0,
  class: "loading-state"
}, f5 = {
  key: 1,
  class: "empty-state"
}, m5 = {
  key: 2,
  class: "instances-list"
}, v5 = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", c5, [
      t("div", u5, [
        x(Ot, null, {
          default: g(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        x(le, {
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", d5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", f5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", m5, [
        (a(!0), r(G, null, pe(o.value, (i) => (a(), R(r5, {
          key: i.id,
          instance: i,
          "is-loading": e.actionLoadingId === i.id,
          onStop: l[1] || (l[1] = (c) => n.$emit("stop", c)),
          onStart: l[2] || (l[2] = (c) => n.$emit("start", c)),
          onTerminate: l[3] || (l[3] = (c) => n.$emit("terminate", c))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), p5 = /* @__PURE__ */ me(v5, [["__scopeId", "data-v-ba614fc3"]]), g5 = { class: "remote-header" }, h5 = { class: "remote-info" }, y5 = { class: "remote-icon" }, w5 = { class: "remote-name" }, _5 = {
  key: 0,
  class: "default-badge"
}, b5 = {
  key: 1,
  class: "sync-badge"
}, k5 = {
  key: 0,
  class: "ahead"
}, $5 = {
  key: 1,
  class: "behind"
}, C5 = {
  key: 1,
  class: "synced"
}, x5 = ["href"], S5 = {
  key: 1,
  class: "remote-url-text"
}, I5 = { class: "remote-actions" }, E5 = /* @__PURE__ */ fe({
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
      const i = s.remote.fetch_url, c = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = F(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, c) => (a(), r("div", {
      class: Se(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", g5, [
        t("div", h5, [
          t("span", y5, f(o.value ? "🔗" : "🌐"), 1),
          t("span", w5, f(e.remote.name), 1),
          o.value ? (a(), r("span", _5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", b5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", k5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", $5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", C5, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), r("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = it(() => {
          }, ["stop"]))
        }, f(l.value), 9, x5)) : (a(), r("span", S5, f(l.value), 1))
      ]),
      t("div", I5, [
        x(le, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...c[4] || (c[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), R(le, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        x(le, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: g(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Mr = /* @__PURE__ */ me(E5, [["__scopeId", "data-v-d687d161"]]), T5 = { class: "runpod-tab" }, P5 = { class: "api-key-card" }, R5 = { class: "api-key-row" }, M5 = { class: "api-key-input-wrapper" }, D5 = ["type", "disabled"], L5 = ["title"], O5 = { class: "status-icon" }, A5 = { class: "status-text" }, N5 = {
  key: 0,
  class: "credit-balance"
}, U5 = { class: "config-card" }, z5 = { class: "config-row" }, F5 = ["disabled"], B5 = {
  key: 0,
  value: ""
}, V5 = {
  key: 1,
  value: "",
  disabled: ""
}, W5 = ["value", "disabled"], G5 = { class: "config-row" }, j5 = {
  key: 0,
  class: "loading-inline"
}, H5 = { class: "no-volumes-state" }, K5 = { class: "no-volumes-text" }, q5 = ["value"], Y5 = { class: "config-row" }, J5 = ["disabled"], X5 = {
  key: 0,
  value: ""
}, Q5 = {
  key: 1,
  value: ""
}, Z5 = {
  key: 2,
  value: ""
}, ex = ["value"], tx = { class: "config-row" }, sx = { class: "radio-group" }, ox = { class: "radio-option" }, nx = { class: "radio-label" }, ax = { class: "radio-option disabled" }, lx = { class: "radio-label" }, ix = { class: "config-row" }, rx = { class: "radio-group" }, cx = { class: "radio-option" }, ux = { class: "radio-label" }, dx = { class: "radio-option disabled" }, fx = { class: "radio-label" }, mx = { class: "config-row" }, vx = {
  key: 0,
  class: "loading-text"
}, px = {
  key: 1,
  class: "empty-remotes"
}, gx = { class: "remotes-list" }, hx = {
  key: 0,
  class: "sync-warning"
}, yx = { class: "warning-content" }, wx = { class: "remotes-footer" }, _x = { class: "summary-card" }, bx = {
  key: 0,
  class: "loading-text"
}, kx = { class: "summary-row" }, $x = { class: "summary-value" }, Cx = { class: "summary-row" }, xx = { class: "summary-value" }, Sx = { class: "summary-row" }, Ix = { class: "summary-value" }, Ex = {
  key: 0,
  class: "summary-sub-row"
}, Tx = { class: "summary-sub-label" }, Px = {
  key: 1,
  class: "summary-sub-row warning"
}, Rx = { class: "summary-sub-label" }, Mx = { class: "summary-row" }, Dx = { class: "summary-value" }, Lx = { class: "summary-row" }, Ox = { class: "summary-value" }, Ax = { class: "deployment-summary" }, Nx = { class: "summary-columns" }, Ux = { class: "summary-column" }, zx = { class: "pricing-row" }, Fx = { class: "pricing-value" }, Bx = { class: "pricing-row" }, Vx = { class: "pricing-value" }, Wx = { class: "pricing-row" }, Gx = { class: "pricing-value" }, jx = { class: "pricing-row total" }, Hx = { class: "pricing-value" }, Kx = { class: "summary-column" }, qx = { class: "spec-row" }, Yx = { class: "spec-row" }, Jx = {
  key: 0,
  class: "spec-row"
}, Xx = {
  key: 1,
  class: "spec-row spot-warning"
}, Qx = {
  key: 4,
  class: "deploy-actions"
}, Zx = { class: "progress-content" }, e8 = { class: "phase-indicator" }, t8 = { key: 0 }, s8 = { key: 1 }, o8 = { key: 2 }, n8 = {
  key: 3,
  class: "spinner"
}, a8 = { class: "phase-text" }, l8 = { class: "phase-name" }, i8 = { class: "phase-detail" }, r8 = {
  key: 0,
  class: "ready-actions"
}, c8 = { class: "console-link" }, u8 = ["href"], d8 = /* @__PURE__ */ fe({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
      getRunPodGpuTypes: c,
      deployToRunPod: u,
      getDeploymentStatus: d,
      getStoredRunPodKey: m,
      clearRunPodKey: v,
      validateDeploy: h,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: C,
      getDataCenters: $
    } = rt(), P = k(!1), L = k(""), T = k(!1), S = k(!1), q = k(null), B = k(null), A = k(""), I = k(""), E = k(""), O = k("SECURE"), re = k("ON_DEMAND"), Y = k("my-comfyui-deploy"), H = k([]), te = k({}), Q = k(!1), N = k(null), U = k(null), M = k(null), we = k([]), ve = k(!1), Ie = k([]), Me = k(!1), Ke = k([]), Xe = k(!1), ke = k(null), Ee = k(!1), Ge = k(!1), _e = k(null), ae = k(!1), Ve = k(null), Te = k(null), D = k(null), V = k(!1), se = k(null), ne = k(!1), ue = k(!1), de = F(() => Ie.value.find((ye) => ye.id === I.value) || null), $e = F(() => A.value ? Ie.value.filter((ye) => ye.data_center_id === A.value) : Ie.value), Ce = F(() => Ke.value.filter((ye) => ye.available)), oe = F(() => N.value && te.value[N.value] || null), ce = F(() => {
      if (!N.value) return null;
      const ye = H.value.find((X) => X.name === N.value);
      return (ye == null ? void 0 : ye.fetch_url) || null;
    }), Le = F(() => T.value && I.value && E.value && ce.value && !Ge.value && !V.value), xe = (ye) => {
      const X = Ke.value.find((ht) => ht.id === E.value);
      if (!X) return "0.00";
      if (ye === "SECURE") return (X.securePrice ?? 0).toFixed(2);
      if (ye === "COMMUNITY") return (X.communityPrice ?? 0).toFixed(2);
      const je = O.value === "SECURE";
      return ye === "ON_DEMAND" ? je ? (X.securePrice ?? 0).toFixed(2) : (X.communityPrice ?? 0).toFixed(2) : je ? (X.secureSpotPrice ?? 0).toFixed(2) : (X.communitySpotPrice ?? 0).toFixed(2);
    }, Z = F(() => {
      const ye = Ke.value.find((ns) => ns.id === E.value), X = Ie.value.find((ns) => ns.id === I.value);
      if (!ye) return null;
      const je = O.value === "SECURE", ht = re.value === "SPOT";
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
        await C(ye, { force: !1 });
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
      if (L.value) {
        S.value = !0, q.value = null;
        try {
          const ye = await l(L.value, !0);
          ye.status === "success" ? (T.value = !0, B.value = ye.credit_balance ?? null, q.value = { type: "success", message: ye.message }, await K()) : q.value = { type: "error", message: ye.message };
        } catch (ye) {
          q.value = {
            type: "error",
            message: ye instanceof Error ? ye.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function ie() {
      try {
        await v(), L.value = "", T.value = !1, q.value = null, B.value = null, we.value = [], A.value = "", Ie.value = [], I.value = "", Ke.value = [], E.value = "", ke.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function ze() {
      Me.value = !0, ve.value = !0;
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
        Me.value = !1, ve.value = !1;
      }
    }
    async function Qe(ye) {
      Xe.value = !0;
      try {
        const X = await c(ye);
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
      if (!ye || Me.value) return;
      const X = Ie.value.find((je) => je.id === I.value);
      X && X.data_center_id !== ye && (I.value = ""), await Qe(ye);
    }), Ct(I, async (ye) => {
      if (!ye) {
        Ke.value = [], E.value = "";
        return;
      }
      if (Me.value) return;
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
        V.value = !0, _e.value = null;
        try {
          const ye = await h();
          se.value = ye, ye.can_export ? ye.warnings.models_without_sources.length > 0 ? ue.value = !0 : await Ut() : ne.value = !0;
        } catch (ye) {
          _e.value = {
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
          je && (ye = O.value === "SECURE" ? je.secureSpotPrice : je.communitySpotPrice);
        }
        const X = await u({
          gpu_type_id: E.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: O.value,
          pricing_type: re.value,
          spot_bid: ye,
          import_source: ce.value
        });
        _e.value = X, X.status === "success" && X.pod_id ? (Ve.value = X.pod_id, ae.value = !0, jt(X.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", X.message, "error");
      } catch (ye) {
        _e.value = {
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
    function so() {
      ae.value = !1, Bs(), Ve.value = null, Te.value = null;
    }
    function bo() {
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
        ye.has_key && ye.key_preview && (L.value = `****${ye.key_preview}`, ye.valid ? (T.value = !0, B.value = ye.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await K()) : ye.error && (q.value = { type: "error", message: ye.error }));
      } catch {
      }
    }), to(() => {
      Bs();
    }), (ye, X) => {
      var je, ht, Ht, ps, gs, ns;
      return a(), r(G, null, [
        t("div", T5, [
          x(lt, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", P5, [
                t("div", R5, [
                  t("div", M5, [
                    qe(t("input", {
                      "onUpdate:modelValue": X[0] || (X[0] = (Oe) => L.value = Oe),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, D5), [
                      [jn, L.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: X[1] || (X[1] = (Oe) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, L5)
                  ]),
                  T.value ? y("", !0) : (a(), R(le, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !L.value || S.value,
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
                q.value ? (a(), r("div", {
                  key: 0,
                  class: Se(["connection-status", q.value.type])
                }, [
                  t("span", O5, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", A5, f(q.value.message), 1),
                  B.value !== null ? (a(), r("span", N5, " $" + f(B.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
              t("div", U5, [
                t("div", z5, [
                  X[19] || (X[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": X[2] || (X[2] = (Oe) => A.value = Oe),
                    class: "config-select",
                    disabled: ve.value
                  }, [
                    ve.value ? (a(), r("option", B5, "Loading...")) : A.value ? y("", !0) : (a(), r("option", V5, "Select a region")),
                    (a(!0), r(G, null, pe(we.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id,
                      disabled: !Oe.available
                    }, f(Oe.id) + " (" + f(Oe.name) + ")" + f(Oe.available ? "" : " [Unavailable]"), 9, W5))), 128))
                  ], 8, F5), [
                    [vs, A.value]
                  ])
                ]),
                t("div", G5, [
                  X[24] || (X[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Me.value ? (a(), r("div", j5, "Loading volumes...")) : $e.value.length === 0 ? (a(), r(G, { key: 1 }, [
                    t("div", H5, [
                      X[20] || (X[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", K5, "No volumes in " + f(A.value || "this region"), 1)
                    ]),
                    X[21] || (X[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    X[22] || (X[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(G, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": X[3] || (X[3] = (Oe) => I.value = Oe),
                      class: "config-select"
                    }, [
                      (a(!0), r(G, null, pe($e.value, (Oe) => (a(), r("option", {
                        key: Oe.id,
                        value: Oe.id
                      }, f(Oe.name) + " (" + f(Oe.size_gb) + "GB) ", 9, q5))), 128))
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
                t("div", Y5, [
                  X[25] || (X[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": X[4] || (X[4] = (Oe) => E.value = Oe),
                    class: "config-select",
                    disabled: Xe.value || !I.value
                  }, [
                    I.value ? Xe.value ? (a(), r("option", Q5, "Loading GPUs...")) : Ce.value.length === 0 ? (a(), r("option", Z5, "No GPUs available in this region")) : y("", !0) : (a(), r("option", X5, "Select a volume first")),
                    (a(!0), r(G, null, pe(Ce.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id
                    }, f(Oe.displayName) + " (" + f(Oe.memoryInGb) + "GB) - $" + f(O.value === "SECURE" ? (Oe.securePrice ?? 0).toFixed(2) : (Oe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Oe.stockStatus ? `[${Oe.stockStatus}]` : ""), 9, ex))), 128))
                  ], 8, J5), [
                    [vs, E.value]
                  ])
                ]),
                t("div", tx, [
                  X[26] || (X[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", sx, [
                    t("label", ox, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[5] || (X[5] = (Oe) => O.value = Oe),
                        value: "SECURE"
                      }, null, 512), [
                        [Yt, O.value]
                      ]),
                      t("span", nx, "Secure ($" + f(xe("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", ax, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[6] || (X[6] = (Oe) => O.value = Oe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Yt, O.value]
                      ]),
                      t("span", lx, "Community ($" + f(xe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", ix, [
                  X[27] || (X[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", rx, [
                    t("label", cx, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[7] || (X[7] = (Oe) => re.value = Oe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Yt, re.value]
                      ]),
                      t("span", ux, "On-Demand ($" + f(xe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", dx, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[8] || (X[8] = (Oe) => re.value = Oe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Yt, re.value]
                      ]),
                      t("span", fx, "Spot ($" + f(xe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", mx, [
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
              Q.value ? (a(), r("div", vx, "Loading remotes...")) : H.value.length === 0 ? (a(), r("div", px, [
                X[30] || (X[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                x(le, {
                  variant: "primary",
                  size: "xs",
                  onClick: X[10] || (X[10] = (Oe) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...X[29] || (X[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(G, { key: 2 }, [
                t("div", gx, [
                  (a(!0), r(G, null, pe(H.value, (Oe) => (a(), R(Mr, {
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
                oe.value && oe.value.ahead > 0 ? (a(), r("div", hx, [
                  X[31] || (X[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", yx, [
                    t("strong", null, f(oe.value.ahead) + " unpushed commit" + f(oe.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(N.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  x(le, {
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
                t("div", wx, [
                  x(le, {
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
              t("div", _x, [
                Ee.value ? (a(), r("div", bx, "Loading environment summary...")) : ke.value ? (a(), r(G, { key: 1 }, [
                  t("div", kx, [
                    X[33] || (X[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", $x, f(ke.value.comfyui_version), 1)
                  ]),
                  t("div", Cx, [
                    X[34] || (X[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", xx, f(ke.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", Sx, [
                    X[35] || (X[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", Ix, f(ke.value.model_count) + " models", 1)
                  ]),
                  ke.value.models_with_sources > 0 ? (a(), r("div", Ex, [
                    t("span", Tx, "└─ " + f(ke.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  ke.value.models_without_sources > 0 ? (a(), r("div", Px, [
                    t("span", Rx, "└─ " + f(ke.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", Mx, [
                    X[36] || (X[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", Dx, f(ke.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", Lx, [
                    X[37] || (X[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", Ox, "~" + f(ke.value.estimated_package_size_mb) + " MB", 1)
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
                t("div", Ax, [
                  t("div", Nx, [
                    t("div", Ux, [
                      X[42] || (X[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", zx, [
                        X[38] || (X[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", Fx, "$" + f(Z.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", Bx, [
                        X[39] || (X[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", Vx, "$" + f(Z.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", Wx, [
                        X[40] || (X[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", Gx, "$" + f(Z.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      X[43] || (X[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", jx, [
                        X[41] || (X[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", Hx, "~$" + f(Z.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", Kx, [
                      X[45] || (X[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", qx, [
                        t("span", null, f(((Oe = Ke.value.find((ee) => ee.id === E.value)) == null ? void 0 : Oe.displayName) || "GPU") + " (" + f(((as = Ke.value.find((ee) => ee.id === E.value)) == null ? void 0 : as.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", Yx, [
                        t("span", null, "Region: " + f(A.value), 1)
                      ]),
                      de.value ? (a(), r("div", Jx, [
                        t("span", null, "Volume: " + f(de.value.name), 1)
                      ])) : y("", !0),
                      re.value === "SPOT" ? (a(), r("div", Xx, [...X[44] || (X[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          T.value ? (a(), r("div", Qx, [
            x(le, {
              variant: "primary",
              size: "md",
              loading: V.value || Ge.value,
              disabled: !Le.value,
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
          _e.value ? (a(), R(lt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              x(Et, {
                status: _e.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: g(() => [
                  b(f(_e.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(f(_e.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(f(_e.value.message), 1)
                ]),
                actions: g(() => [
                  x(le, {
                    variant: "ghost",
                    size: "xs",
                    onClick: X[13] || (X[13] = (Oe) => _e.value = null)
                  }, {
                    default: g(() => [...X[47] || (X[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                _e.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    x(ft, {
                      label: "Pod ID:",
                      value: _e.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ae.value ? (a(), R(pt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((je = Te.value) == null ? void 0 : je.phase) === "READY" || ((ht = Te.value) == null ? void 0 : ht.phase) === "ERROR" || ((Ht = Te.value) == null ? void 0 : Ht.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: so
        }, eo({
          body: g(() => {
            var Oe, as, ee, j, De, We, ot, mt, Mt, ls, Vs, Ws;
            return [
              t("div", Zx, [
                t("div", e8, [
                  t("div", {
                    class: Se(["phase-icon", (as = (Oe = Te.value) == null ? void 0 : Oe.phase) == null ? void 0 : as.toLowerCase()])
                  }, [
                    ((ee = Te.value) == null ? void 0 : ee.phase) === "READY" ? (a(), r("span", t8, "✓")) : ((j = Te.value) == null ? void 0 : j.phase) === "ERROR" ? (a(), r("span", s8, "✕")) : ((De = Te.value) == null ? void 0 : De.phase) === "STOPPED" ? (a(), r("span", o8, "○")) : (a(), r("span", n8, "⟳"))
                  ], 2),
                  t("div", a8, [
                    t("div", l8, f(ko((We = Te.value) == null ? void 0 : We.phase)), 1),
                    t("div", i8, f(((ot = Te.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                x(Kn, {
                  progress: $o((mt = Te.value) == null ? void 0 : mt.phase),
                  variant: ((Mt = Te.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((ls = Te.value) == null ? void 0 : ls.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Vs = Te.value) == null ? void 0 : Vs.phase) === "READY" ? (a(), r("div", r8, [
                  x(le, {
                    variant: "primary",
                    size: "md",
                    onClick: bo
                  }, {
                    default: g(() => [...X[48] || (X[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", c8, [
                  (Ws = Te.value) != null && Ws.console_url ? (a(), r("a", {
                    key: 0,
                    href: Te.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, u8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ps = Te.value) == null ? void 0 : ps.phase) === "READY" || ((gs = Te.value) == null ? void 0 : gs.phase) === "ERROR" || ((ns = Te.value) == null ? void 0 : ns.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              x(le, {
                variant: "ghost",
                size: "xs",
                onClick: so
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
        ne.value && se.value ? (a(), R(Er, {
          key: 1,
          issues: se.value.blocking_issues,
          onClose: X[14] || (X[14] = (Oe) => ne.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ue.value && se.value ? (a(), R(Tr, {
          key: 2,
          models: se.value.warnings.models_without_sources,
          onConfirm: dt,
          onCancel: X[15] || (X[15] = (Oe) => ue.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), f8 = /* @__PURE__ */ me(d8, [["__scopeId", "data-v-522cd4d9"]]), m8 = { class: "worker-header" }, v8 = { class: "worker-status" }, p8 = { class: "worker-name" }, g8 = { class: "worker-actions" }, h8 = { class: "worker-details" }, y8 = { class: "detail-item" }, w8 = { class: "detail-value" }, _8 = {
  key: 0,
  class: "detail-item"
}, b8 = { class: "detail-value" }, k8 = {
  key: 1,
  class: "detail-item"
}, $8 = { class: "detail-value mode-badge" }, C8 = {
  key: 0,
  class: "worker-stats"
}, x8 = {
  key: 0,
  class: "stat-item"
}, S8 = { key: 0 }, I8 = {
  key: 1,
  class: "worker-stats offline"
}, E8 = /* @__PURE__ */ fe({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Se(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", m8, [
        t("div", v8, [
          t("span", {
            class: Se(["status-dot", e.worker.status])
          }, null, 2),
          t("span", p8, f(e.worker.name), 1)
        ]),
        t("div", g8, [
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
          x(le, {
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
      t("div", h8, [
        t("span", y8, [
          t("span", w8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", _8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", b8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", k8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", $8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", C8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", x8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", S8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", I8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), T8 = /* @__PURE__ */ me(E8, [["__scopeId", "data-v-b1be7134"]]), P8 = { class: "add-worker-content" }, R8 = { class: "manual-form" }, M8 = { class: "form-row" }, D8 = { class: "form-row-inline" }, L8 = { class: "form-field flex-2" }, O8 = { class: "form-field flex-1" }, A8 = { class: "form-row" }, N8 = { class: "api-key-wrapper" }, U8 = ["type"], z8 = { class: "result-icon" }, F8 = { class: "result-content" }, B8 = { class: "result-message" }, V8 = {
  key: 0,
  class: "result-detail"
}, W8 = { class: "modal-actions" }, G8 = /* @__PURE__ */ fe({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = rt(), l = Fs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), c = k(!1), u = k(!1), d = k(null), m = F(() => l.host && l.port && l.apiKey), v = F(() => l.name && l.host && l.port && l.apiKey);
    async function h() {
      if (m.value) {
        c.value = !0, d.value = null;
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
          c.value = !1;
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
    return (p, _) => (a(), R(pt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (C) => p.$emit("close"))
    }, {
      body: g(() => [
        t("div", P8, [
          t("div", R8, [
            t("div", M8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Nt, l.name]
              ])
            ]),
            t("div", D8, [
              t("div", L8, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Nt, l.host]
                ])
              ]),
              t("div", O8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (C) => l.port = C),
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
            t("div", A8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", N8, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (C) => l.apiKey = C),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, U8), [
                  [jn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (C) => i.value = !i.value),
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
            d.value ? (a(), r("div", {
              key: 0,
              class: Se(["test-result", d.value.type])
            }, [
              t("span", z8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", F8, [
                t("span", B8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), r("span", V8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        t("div", W8, [
          x(le, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !m.value || c.value,
            onClick: h
          }, {
            default: g(() => [..._[11] || (_[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          x(le, {
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
}), j8 = /* @__PURE__ */ me(G8, [["__scopeId", "data-v-07a00732"]]), H8 = { class: "discovered-content" }, K8 = {
  key: 0,
  class: "workers-list"
}, q8 = { class: "worker-info" }, Y8 = { class: "worker-name" }, J8 = { class: "worker-address" }, X8 = {
  key: 0,
  class: "worker-gpu"
}, Q8 = {
  key: 1,
  class: "empty-state"
}, Z8 = {
  key: 2,
  class: "api-key-section"
}, eS = { class: "selected-worker" }, tS = { class: "selected-name" }, sS = { class: "selected-address" }, oS = { class: "form-row" }, nS = { class: "api-key-wrapper" }, aS = ["type"], lS = { class: "result-icon" }, iS = { class: "result-message" }, rS = { class: "modal-actions" }, cS = /* @__PURE__ */ fe({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = rt(), l = k(null), i = k(""), c = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await Zo(), (p = d.value) == null || p.focus();
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
    return (w, p) => (a(), R(pt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: g(() => [
        t("div", H8, [
          e.workers.length > 0 ? (a(), r("div", K8, [
            (a(!0), r(G, null, pe(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", q8, [
                t("span", Y8, f(_.name), 1),
                t("span", J8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", X8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              x(le, {
                variant: "primary",
                size: "xs",
                onClick: (C) => v(_)
              }, {
                default: g(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), r("div", Q8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", Z8, [
            t("div", eS, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", tS, f(l.value.name), 1),
              t("span", sS, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", oS, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", nS, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Xt(h, ["enter"])
                }, null, 40, aS), [
                  [jn, i.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (_) => c.value = !c.value),
                  type: "button"
                }, f(c.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), r("div", {
              key: 0,
              class: Se(["test-result", m.value.type])
            }, [
              t("span", lS, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", iS, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", rS, [
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
}), uS = /* @__PURE__ */ me(cS, [["__scopeId", "data-v-5a3e40a4"]]), dS = { class: "deploy-content" }, fS = { class: "section" }, mS = {
  key: 0,
  class: "loading-text"
}, vS = {
  key: 1,
  class: "empty-remotes"
}, pS = {
  key: 2,
  class: "remotes-list"
}, gS = { class: "section" }, hS = { class: "mode-options" }, yS = { class: "mode-option" }, wS = ["disabled"], _S = { class: "mode-option" }, bS = { class: "section" }, kS = {
  key: 0,
  class: "section"
}, $S = { class: "summary-row" }, CS = {
  key: 1,
  class: "sync-warning"
}, xS = { class: "warning-content" }, SS = { class: "modal-actions" }, IS = /* @__PURE__ */ fe({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getRemotes: l,
      getRemoteSyncStatus: i,
      fetchRemote: c,
      pushToRemote: u,
      getDeploySummary: d,
      deployToWorker: m
    } = rt(), v = k([]), h = k({}), w = k(!1), p = k(null), _ = k(null), C = k(null), $ = k(o.worker.mode || "native"), P = k(""), L = k(null), T = k(!1), S = F(() => p.value && h.value[p.value] || null), q = F(() => {
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
        L.value = await d();
      } catch {
      }
    }
    async function E(H) {
      _.value = H;
      try {
        await c(H);
        const te = await i(H);
        te && (h.value[H] = te), n("toast", `Fetched from ${H}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function O(H) {
      C.value = H;
      try {
        await u(H, { force: !1 });
        const te = await i(H);
        te && (h.value[H] = te), n("toast", `Pushed to ${H}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        C.value = null;
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
    }), (H, te) => (a(), R(pt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: te[5] || (te[5] = (Q) => H.$emit("close"))
    }, {
      body: g(() => [
        t("div", dS, [
          t("div", fS, [
            te[7] || (te[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", mS, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", vS, [...te[6] || (te[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", pS, [
              (a(!0), r(G, null, pe(v.value, (Q) => (a(), R(Mr, {
                key: Q.name,
                remote: Q,
                "sync-status": h.value[Q.name],
                "is-selected": p.value === Q.name,
                "is-fetching": _.value === Q.name,
                "is-pushing": C.value === Q.name,
                onFetch: E,
                onPush: O,
                onSelect: re
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", gS, [
            te[10] || (te[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", hS, [
              t("label", yS, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[0] || (te[0] = (Q) => $.value = Q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, wS), [
                  [Yt, $.value]
                ]),
                te[8] || (te[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", _S, [
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
          t("div", bS, [
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
          L.value ? (a(), r("div", kS, [
            te[12] || (te[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", $S, " ComfyUI: " + f(L.value.comfyui_version) + " • " + f(L.value.node_count) + " nodes • " + f(L.value.model_count) + " models • " + f(L.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          S.value && S.value.ahead > 0 ? (a(), r("div", CS, [
            te[14] || (te[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", xS, [
              t("strong", null, f(S.value.ahead) + " unpushed commit" + f(S.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            x(le, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: te[3] || (te[3] = (Q) => p.value && O(p.value))
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
        t("div", SS, [
          x(le, {
            variant: "ghost",
            size: "sm",
            onClick: te[4] || (te[4] = (Q) => H.$emit("close"))
          }, {
            default: g(() => [...te[15] || (te[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          x(le, {
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
}), ES = /* @__PURE__ */ me(IS, [["__scopeId", "data-v-c12720d3"]]), TS = { class: "custom-tab" }, PS = { class: "section-header" }, RS = { class: "section-actions" }, MS = { class: "workers-content" }, DS = {
  key: 0,
  class: "loading-state"
}, LS = {
  key: 1,
  class: "empty-state"
}, OS = {
  key: 2,
  class: "workers-list"
}, AS = { class: "scan-icon" }, NS = { class: "scan-message" }, US = /* @__PURE__ */ fe({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = rt(), u = k([]), d = k([]), m = k(!1), v = k(!1), h = k(null), w = k(!1), p = k(!1), _ = k(null), C = k(null);
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
      v.value = !0, C.value = null;
      try {
        const A = await c(), I = A.discovered.filter(
          (E) => !u.value.some((O) => O.host === E.host && O.port === E.port)
        );
        d.value = I, I.length > 0 ? p.value = !0 : A.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (A) {
        o("toast", A instanceof Error ? A.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function L(A) {
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
    async function S(A) {
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
    }), (A, I) => (a(), r("div", TS, [
      t("div", PS, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", RS, [
          x(le, {
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
          x(le, {
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
      t("div", MS, [
        m.value && u.value.length === 0 ? (a(), r("div", DS, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", LS, [...I[10] || (I[10] = [
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
        ])])) : (a(), r("div", OS, [
          (a(!0), r(G, null, pe(u.value, (E) => (a(), R(T8, {
            key: E.name,
            worker: E,
            "is-action-loading": h.value === E.name,
            onDeploy: q,
            onRemove: S
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (a(), r("div", {
        key: 0,
        class: Se(["scan-result", C.value.type])
      }, [
        t("span", AS, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", NS, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (E) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), R(uS, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (E) => p.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), R(j8, {
        key: 2,
        onClose: I[3] || (I[3] = (E) => w.value = !1),
        onAdd: L
      })) : y("", !0),
      _.value ? (a(), R(ES, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (E) => _.value = null),
        onToast: I[5] || (I[5] = (E, O) => o("toast", E, O)),
        onDeployed: B
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), zS = /* @__PURE__ */ me(US, [["__scopeId", "data-v-1637dead"]]), da = "ComfyGit.Deploy.GitHubPAT";
function Dr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function FS(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function BS() {
  function e() {
    try {
      return localStorage.getItem(da);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(da, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(da);
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
    isRemoteSsh: Dr,
    isRemoteHttps: FS
  };
}
const VS = { class: "settings-content" }, WS = { class: "settings-section" }, GS = {
  key: 0,
  class: "ssh-warning"
}, jS = { class: "form-row" }, HS = { class: "token-wrapper" }, KS = ["type"], qS = { class: "result-icon" }, YS = { class: "result-message" }, JS = { class: "token-actions" }, XS = /* @__PURE__ */ fe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = BS(), { getRemotes: u, testGitAuth: d } = rt(), m = k(""), v = k(!1), h = k(!1), w = k(null), p = k(!1), _ = F(() => c());
    et(async () => {
      var T;
      const L = n();
      L && (m.value = L);
      try {
        const q = (T = (await u()).remotes) == null ? void 0 : T.find((B) => B.name === "origin");
        q && Dr(q.url) && (p.value = !0);
      } catch {
      }
    });
    async function C() {
      if (m.value) {
        h.value = !0, w.value = null;
        try {
          const L = await d(m.value);
          w.value = {
            type: L.status === "success" ? "success" : "error",
            message: L.message
          };
        } catch (L) {
          w.value = {
            type: "error",
            message: L instanceof Error ? L.message : "Connection test failed"
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
    return (L, T) => (a(), R(pt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (S) => L.$emit("close"))
    }, {
      body: g(() => [
        t("div", VS, [
          t("div", WS, [
            T[8] || (T[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", GS, [...T[3] || (T[3] = [
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
            t("div", jS, [
              T[4] || (T[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", HS, [
                qe(t("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (S) => m.value = S),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, KS), [
                  [jn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (S) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Se(["test-result", w.value.type])
            }, [
              t("span", qS, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", YS, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", JS, [
              x(le, {
                variant: "ghost",
                size: "sm",
                loading: h.value,
                disabled: !m.value || h.value,
                onClick: C
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
        x(le, {
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
}), QS = /* @__PURE__ */ me(XS, [["__scopeId", "data-v-b21588ad"]]), ZS = /* @__PURE__ */ fe({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: n,
      isLoading: l,
      liveInstanceCount: i,
      refreshInstances: c,
      stopInstance: u,
      startInstance: d,
      terminateInstance: m,
      startPolling: v,
      stopPolling: h
    } = Rr(), w = k(!1), p = k(!1), _ = k("instances"), C = k(null), $ = k(null), P = F(() => [
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
    async function L(A) {
      C.value = A.id;
      try {
        await u(A), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function T(A) {
      C.value = A.id;
      try {
        await d(A), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function S(A) {
      $.value = A;
    }
    async function q() {
      const A = $.value;
      if (A) {
        $.value = null, C.value = A.id;
        try {
          await m(A), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function B() {
      await c(), _.value = "instances";
    }
    return et(() => {
      c(), v();
    }), to(() => {
      h();
    }), (A, I) => (a(), r(G, null, [
      x(Tt, null, {
        header: g(() => [
          x(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (E) => w.value = !0)
          }, {
            actions: g(() => [
              x(le, {
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
          x($r, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (E) => _.value = E),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          _.value === "instances" ? (a(), R(p5, {
            key: 0,
            instances: Fe(n),
            "is-loading": Fe(l),
            "action-loading-id": C.value,
            onRefresh: Fe(c),
            onStop: L,
            onStart: T,
            onTerminate: S
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), R(f8, {
            key: 1,
            onToast: I[3] || (I[3] = (E, O) => o("toast", E, O)),
            onNavigate: I[4] || (I[4] = (E) => o("navigate", E)),
            onDeployed: B
          })) : y("", !0),
          _.value === "custom" ? (a(), R(zS, {
            key: 2,
            onToast: I[5] || (I[5] = (E, O) => o("toast", E, O)),
            onDeployed: B
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), R(Xa, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: I[6] || (I[6] = (E) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      x(os, {
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
      p.value ? (a(), R(QS, {
        key: 1,
        onClose: I[8] || (I[8] = (E) => p.value = !1),
        onSaved: I[9] || (I[9] = (E) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), e4 = /* @__PURE__ */ me(ZS, [["__scopeId", "data-v-d4e32a10"]]), t4 = { class: "header-info" }, s4 = { class: "commit-hash" }, o4 = {
  key: 0,
  class: "commit-refs"
}, n4 = { class: "commit-message" }, a4 = { class: "commit-date" }, l4 = {
  key: 0,
  class: "loading"
}, i4 = {
  key: 1,
  class: "changes-section"
}, r4 = { class: "stats-row" }, c4 = { class: "stat" }, u4 = { class: "stat insertions" }, d4 = { class: "stat deletions" }, f4 = {
  key: 0,
  class: "change-group"
}, m4 = {
  key: 1,
  class: "change-group"
}, v4 = {
  key: 0,
  class: "version"
}, p4 = {
  key: 2,
  class: "change-group"
}, g4 = { class: "change-item" }, h4 = /* @__PURE__ */ fe({
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
    }), c = F(() => {
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
    }), (u, d) => (a(), R(pt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: g(() => {
        var m, v, h, w;
        return [
          t("div", t4, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", s4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (h = n.value) == null ? void 0 : h.refs) != null && w.length ? (a(), r("span", o4, [
              (a(!0), r(G, null, pe(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          x(Re, {
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
          t("div", n4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", a4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", l4, "Loading details...")) : n.value ? (a(), r("div", i4, [
            t("div", r4, [
              t("span", c4, f(n.value.stats.files_changed) + " files", 1),
              t("span", u4, "+" + f(n.value.stats.insertions), 1),
              t("span", d4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", f4, [
              x(Fo, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(G, null, pe(n.value.changes.workflows.added, (h) => (a(), r("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), r(G, null, pe(n.value.changes.workflows.modified, (h) => (a(), r("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), r(G, null, pe(n.value.changes.workflows.deleted, (h) => (a(), r("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(h), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", m4, [
              x(Fo, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(G, null, pe(n.value.changes.nodes.added, (h) => (a(), r("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(h.name), 1),
                h.version ? (a(), r("span", v4, "(" + f(h.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(G, null, pe(n.value.changes.nodes.removed, (h) => (a(), r("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(h.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", p4, [
              x(Fo, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", g4, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: g(() => [
        x(Re, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        x(Re, {
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
}), y4 = /* @__PURE__ */ me(h4, [["__scopeId", "data-v-d256ff6d"]]), w4 = { class: "base-textarea-wrapper" }, _4 = ["value", "rows", "placeholder", "disabled", "maxlength"], b4 = {
  key: 0,
  class: "base-textarea-count"
}, k4 = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), r("div", w4, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Xt(it((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Xt(it((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Xt(l, ["enter"])
        ]
      }, null, 40, _4),
      e.showCharCount && e.maxLength ? (a(), r("div", b4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ql = /* @__PURE__ */ me(k4, [["__scopeId", "data-v-c6d16c93"]]), $4 = ["checked", "disabled"], C4 = { class: "base-checkbox-box" }, x4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, S4 = {
  key: 0,
  class: "base-checkbox-label"
}, I4 = /* @__PURE__ */ fe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", {
      class: Se(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, $4),
      t("span", C4, [
        e.modelValue ? (a(), r("svg", x4, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", S4, [
        He(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yl = /* @__PURE__ */ me(I4, [["__scopeId", "data-v-bf17c831"]]), E4 = { class: "popover-header" }, T4 = { class: "popover-body" }, P4 = {
  key: 0,
  class: "changes-summary"
}, R4 = {
  key: 0,
  class: "change-item"
}, M4 = {
  key: 1,
  class: "change-item"
}, D4 = {
  key: 2,
  class: "change-item"
}, L4 = {
  key: 3,
  class: "change-item"
}, O4 = {
  key: 4,
  class: "change-item"
}, A4 = {
  key: 5,
  class: "change-item"
}, N4 = {
  key: 1,
  class: "no-changes"
}, U4 = {
  key: 2,
  class: "loading"
}, z4 = {
  key: 3,
  class: "issues-error"
}, F4 = { class: "error-header" }, B4 = { class: "error-title" }, V4 = { class: "issues-list" }, W4 = { class: "workflow-state" }, G4 = { class: "message-section" }, j4 = { class: "popover-footer" }, H4 = {
  key: 1,
  class: "commit-popover"
}, K4 = { class: "popover-header" }, q4 = { class: "popover-body" }, Y4 = {
  key: 0,
  class: "changes-summary"
}, J4 = {
  key: 0,
  class: "change-item"
}, X4 = {
  key: 1,
  class: "change-item"
}, Q4 = {
  key: 2,
  class: "change-item"
}, Z4 = {
  key: 3,
  class: "change-item"
}, e6 = {
  key: 4,
  class: "change-item"
}, t6 = {
  key: 5,
  class: "change-item"
}, s6 = {
  key: 1,
  class: "no-changes"
}, o6 = {
  key: 2,
  class: "loading"
}, n6 = {
  key: 3,
  class: "issues-error"
}, a6 = { class: "error-header" }, l6 = { class: "error-title" }, i6 = { class: "issues-list" }, r6 = { class: "workflow-state" }, c6 = { class: "message-section" }, u6 = { class: "popover-footer" }, d6 = /* @__PURE__ */ fe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = rt(), i = k(""), c = k(!1), u = k(!1), d = F(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = F(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = F(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), h = F(() => v.value.length > 0), w = F(() => h.value && !u.value);
    async function p() {
      var _, C, $, P;
      if (!(h.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const L = await l(i.value.trim(), u.value);
          if (L.status === "success") {
            const T = `Committed: ${((_ = L.summary) == null ? void 0 : _.new) || 0} new, ${((C = L.summary) == null ? void 0 : C.modified) || 0} modified, ${(($ = L.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: T });
          } else if (L.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (L.status === "blocked") {
            const T = ((P = L.issues) == null ? void 0 : P.map((S) => `${S.name}: ${S.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: L.message || "Commit failed" });
        } catch (L) {
          n("committed", { success: !1, message: L instanceof Error ? L.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (a(), R(wt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = it(() => {
          }, ["stop"]))
        }, [
          t("div", E4, [
            C[11] || (C[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = ($) => n("close"))
            }, [...C[10] || (C[10] = [
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
          t("div", T4, [
            e.status && d.value ? (a(), r("div", P4, [
              e.status.workflows.new.length ? (a(), r("div", R4, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", M4, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", D4, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", L4, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", O4, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", A4, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", N4, " No changes to commit ")) : (a(), r("div", U4, " Loading... ")),
            h.value ? (a(), r("div", z4, [
              t("div", F4, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", B4, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", V4, [
                (a(!0), r(G, null, pe(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", W4, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              x(Yl, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...C[19] || (C[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", G4, [
              x(ql, {
                modelValue: i.value,
                "onUpdate:modelValue": C[2] || (C[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", j4, [
            x(Re, {
              variant: "secondary",
              onClick: C[3] || (C[3] = ($) => n("close"))
            }, {
              default: g(() => [...C[20] || (C[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(Re, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: p
            }, {
              default: g(() => [
                b(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), r("div", H4, [
      t("div", K4, [
        C[22] || (C[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = ($) => n("close"))
        }, [...C[21] || (C[21] = [
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
      t("div", q4, [
        e.status && d.value ? (a(), r("div", Y4, [
          e.status.workflows.new.length ? (a(), r("div", J4, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", X4, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", Q4, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", Z4, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", e6, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", t6, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", s6, " No changes to commit ")) : (a(), r("div", o6, " Loading... ")),
        h.value ? (a(), r("div", n6, [
          t("div", a6, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", l6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", i6, [
            (a(!0), r(G, null, pe(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", r6, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          x(Yl, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...C[30] || (C[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", c6, [
          x(ql, {
            modelValue: i.value,
            "onUpdate:modelValue": C[8] || (C[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", u6, [
        x(Re, {
          variant: "secondary",
          onClick: C[9] || (C[9] = ($) => n("close"))
        }, {
          default: g(() => [...C[31] || (C[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x(Re, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: p
        }, {
          default: g(() => [
            b(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Lr = /* @__PURE__ */ me(d6, [["__scopeId", "data-v-5f897631"]]), f6 = { class: "modal-header" }, m6 = { class: "modal-body" }, v6 = { class: "switch-message" }, p6 = { class: "switch-details" }, g6 = { class: "modal-actions" }, h6 = /* @__PURE__ */ fe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = it(() => {
          }, ["stop"]))
        }, [
          t("div", f6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", m6, [
            t("p", v6, [
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
            t("p", p6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", g6, [
            x(le, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(le, {
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
}), y6 = /* @__PURE__ */ me(h6, [["__scopeId", "data-v-e9c5253e"]]), w6 = {
  key: 0,
  class: "modal-overlay"
}, _6 = { class: "modal-content" }, b6 = { class: "modal-body" }, k6 = { class: "progress-info" }, $6 = { class: "progress-percentage" }, C6 = { class: "progress-state" }, x6 = { class: "switch-steps" }, S6 = { class: "step-icon" }, I6 = { class: "step-label" }, E6 = /* @__PURE__ */ fe({
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
      ], c = i.findIndex((u) => u.state === s.state);
      return i.map((u, d) => {
        let m = "pending", v = "○";
        return d < c ? (m = "completed", v = "✓") : d === c && (m = "active", v = "⟳"), {
          ...u,
          status: m,
          icon: v
        };
      });
    });
    return (i, c) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), r("div", w6, [
        t("div", _6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", b6, [
            x(Kn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", k6, [
              t("div", $6, f(e.progress) + "%", 1),
              t("div", C6, f(o.value), 1)
            ]),
            t("div", x6, [
              (a(!0), r(G, null, pe(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: Se(["switch-step", u.status])
              }, [
                t("span", S6, f(u.icon), 1),
                t("span", I6, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), T6 = /* @__PURE__ */ me(E6, [["__scopeId", "data-v-768a5078"]]), P6 = { class: "modal-header" }, R6 = { class: "modal-body" }, M6 = {
  key: 0,
  class: "node-section"
}, D6 = { class: "node-list" }, L6 = {
  key: 1,
  class: "node-section"
}, O6 = { class: "node-list" }, A6 = { class: "modal-actions" }, N6 = /* @__PURE__ */ fe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = it(() => {
          }, ["stop"]))
        }, [
          t("div", P6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", R6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", M6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", D6, [
                (a(!0), r(G, null, pe(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", L6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", O6, [
                (a(!0), r(G, null, pe(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", A6, [
            x(le, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(le, {
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
}), U6 = /* @__PURE__ */ me(N6, [["__scopeId", "data-v-7cad7518"]]), z6 = [
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
], F6 = "v0.0.16", B6 = "Akatz", V6 = { class: "social-buttons" }, W6 = ["title", "aria-label", "onClick"], G6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, j6 = ["d"], H6 = ["title", "aria-label", "onClick"], K6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, q6 = ["d"], Y6 = /* @__PURE__ */ fe({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", V6, [
      (a(!0), r(G, null, pe(Fe(z6), (l) => (a(), r(G, {
        key: l.id
      }, [
        l.label ? (a(), r("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          b(f(l.label) + " ", 1),
          (a(), r("svg", G6, [
            t("path", {
              d: l.iconPath
            }, null, 8, j6)
          ]))
        ], 8, W6)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", K6, [
            t("path", {
              d: l.iconPath
            }, null, 8, q6)
          ]))
        ], 8, H6))
      ], 64))), 128))
    ]));
  }
}), Or = /* @__PURE__ */ me(Y6, [["__scopeId", "data-v-4f846342"]]), J6 = { class: "footer-info" }, X6 = { class: "version" }, Q6 = { class: "made-by" }, Z6 = /* @__PURE__ */ fe({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", J6, [
      t("span", X6, f(Fe(F6)), 1),
      t("span", Q6, [
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
        b(" by " + f(Fe(B6)), 1)
      ])
    ]));
  }
}), Ar = /* @__PURE__ */ me(Z6, [["__scopeId", "data-v-8bc3db0a"]]), eI = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), R(pt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => i.$emit("close"))
    }, {
      body: g(() => [
        x(kr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          x(Re, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: g(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Re, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => i.$emit("close"))
          }, {
            default: g(() => [...c[3] || (c[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), tI = /* @__PURE__ */ me(eI, [["__scopeId", "data-v-fac00ae7"]]), sI = { class: "header-actions" }, oI = {
  key: 0,
  class: "wizard-step"
}, nI = { class: "form-field" }, aI = ["placeholder"], lI = {
  key: 0,
  class: "form-error"
}, iI = { class: "form-field form-field--checkbox" }, rI = { class: "form-checkbox" }, cI = {
  key: 0,
  class: "form-field"
}, uI = ["placeholder"], dI = {
  key: 0,
  class: "form-info"
}, fI = {
  key: 1,
  class: "form-suggestion"
}, mI = {
  key: 2,
  class: "form-error"
}, vI = {
  key: 3,
  class: "form-info"
}, pI = {
  key: 1,
  class: "wizard-step"
}, gI = {
  key: 0,
  class: "progress-check-loading"
}, hI = {
  key: 0,
  class: "cli-warning"
}, yI = { class: "cli-warning-header" }, wI = {
  key: 1,
  class: "env-landing"
}, _I = { class: "env-list" }, bI = ["value"], kI = { class: "env-name" }, $I = {
  key: 2,
  class: "env-create"
}, CI = { class: "form-field" }, xI = { class: "form-field" }, SI = ["value"], II = { class: "form-field" }, EI = ["disabled"], TI = ["value"], PI = { class: "form-field" }, RI = ["value"], MI = { class: "form-field form-field--checkbox" }, DI = { class: "form-checkbox" }, LI = {
  key: 0,
  class: "form-error"
}, OI = {
  key: 1,
  class: "env-creating"
}, AI = { class: "creating-intro" }, NI = {
  key: 3,
  class: "env-import"
}, UI = { class: "wizard-footer" }, zI = { class: "wizard-footer-actions" }, ao = 10, FI = 600 * 1e3, Jl = 1800 * 1e3, BI = /* @__PURE__ */ fe({
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
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: v
    } = rt(), h = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), C = k(!1), $ = k(!1), P = k(!1), L = k(null), T = k(o.initialStep === 2), S = k(o.defaultPath), q = k(!!o.detectedModelsDir), B = k(o.detectedModelsDir || ""), A = k(null), I = k(null), E = k(null), O = k(null), re = k("my-new-env"), Y = k(Sr), H = k("latest"), te = k(Ir), Q = k(!0), N = k(null), U = k(null), M = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), we = k(!1), ve = k(!1), Ie = k(!1), Me = k({ progress: 0, message: "" }), Ke = k({ progress: 0, message: "" }), Xe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ke = k(0), Ee = k(null), Ge = k(0), _e = k(null), ae = F(() => {
      var he, ge;
      const Z = (he = S.value) == null ? void 0 : he.trim(), K = !A.value, Pe = !q.value || !I.value && ((ge = B.value) == null ? void 0 : ge.trim());
      return Z && K && Pe;
    }), Ve = F(() => {
      var Z;
      return (Z = re.value) == null ? void 0 : Z.trim();
    }), Te = F(() => !!(h.value === 2 || U.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), D = F(() => U.value || o.workspacePath || null);
    async function V() {
      var Z;
      if (A.value = null, !!((Z = S.value) != null && Z.trim()))
        try {
          const K = await c({ path: S.value, type: "workspace" });
          K.valid || (A.value = K.error || "Invalid path");
        } catch (K) {
          A.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function se() {
      var Z;
      if (I.value = null, E.value = null, O.value = null, !!((Z = B.value) != null && Z.trim()))
        try {
          const K = await c({ path: B.value, type: "models" });
          if (K.valid)
            O.value = K.model_count ?? null;
          else if (I.value = K.error || "Invalid path", K.suggestion) {
            E.value = K.suggestion, B.value = K.suggestion, I.value = null;
            const Pe = await c({ path: K.suggestion, type: "models" });
            Pe.valid && (O.value = Pe.model_count ?? null);
          }
        } catch (K) {
          I.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ne() {
      var Z, K, Pe, he, ge;
      if (A.value = null, I.value = null, await V(), (Z = A.value) != null && Z.includes("already exists")) {
        A.value = null, U.value = ((K = S.value) == null ? void 0 : K.trim()) || o.defaultPath, h.value = 2, de();
        return;
      }
      if (!A.value && !(q.value && ((Pe = B.value) != null && Pe.trim()) && (await se(), I.value))) {
        ve.value = !0;
        try {
          await l({
            workspace_path: ((he = S.value) == null ? void 0 : he.trim()) || o.defaultPath,
            models_directory: q.value && ((ge = B.value) == null ? void 0 : ge.trim()) || null
          }), ke.value = 0, Ee.value = Date.now();
          const W = setInterval(async () => {
            var z;
            if (Ee.value && Date.now() - Ee.value > FI) {
              clearInterval(W), ve.value = !1, A.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ie = await i();
              if (ke.value = 0, ie.state === "idle" && ve.value) {
                clearInterval(W), ve.value = !1, A.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Me.value = { progress: ie.progress, message: ie.message }, ie.state === "complete" ? (clearInterval(W), ve.value = !1, U.value = ((z = S.value) == null ? void 0 : z.trim()) || o.defaultPath, h.value = 2, de()) : ie.state === "error" && (clearInterval(W), ve.value = !1, A.value = ie.error || "Workspace creation failed");
            } catch (ie) {
              ke.value++, console.warn(`Polling failure ${ke.value}/${ao}:`, ie), ke.value >= ao && (clearInterval(W), ve.value = !1, A.value = "Lost connection to server. Please refresh the page and try again.");
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
          Ge.value = 0, _e.value = Date.now();
          const Pe = setInterval(async () => {
            if (_e.value && Date.now() - _e.value > Jl) {
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
              Ge.value++, console.warn(`Polling failure ${Ge.value}/${ao}:`, he), Ge.value >= ao && (clearInterval(Pe), Ie.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
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
      C.value = !1, K ? n("complete", Z, U.value) : (n("environment-created-no-switch", Z), p.value = "landing");
    }
    function ce() {
    }
    et(async () => {
      if (o.detectedModelsDir && (B.value = o.detectedModelsDir), o.workspacePath && (U.value = o.workspacePath), h.value === 2) {
        de();
        const Z = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Le(), clearTimeout(Z), T.value = !1;
      }
    });
    async function Le() {
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
        console.log("[ComfyGit] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", Z.environment_name), L.value = {
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          progress: Z.progress ?? 0,
          environmentName: Z.environment_name || ""
        }, P.value = !0, p.value = "import", C.value = !0);
      } catch (Z) {
        console.log("[ComfyGit] Import progress check failed:", Z);
      }
    }
    async function xe() {
      Ge.value = 0, _e.value = Date.now();
      let Z = null;
      const K = async () => {
        if (_e.value && Date.now() - _e.value > Jl)
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
          return Ge.value++, console.warn(`Polling failure ${Ge.value}/${ao}:`, he), Ge.value >= ao ? (Z && clearInterval(Z), Ie.value = !1, N.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (Z = setInterval(async () => {
        !await K() && Z && clearInterval(Z);
      }, 2e3));
    }
    return (Z, K) => (a(), r(G, null, [
      x(pt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Pe) => Z.$emit("close"))
      }, {
        header: g(() => [
          K[20] || (K[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", sI, [
            x(Or),
            K[19] || (K[19] = t("span", { class: "header-divider" }, null, -1)),
            Te.value ? (a(), r("button", {
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
            h.value === 1 ? (a(), r("div", oI, [
              K[24] || (K[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", nI, [
                K[21] || (K[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (he) => S.value = he),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, aI), [
                  [Nt, S.value]
                ]),
                A.value ? (a(), r("p", lI, f(A.value), 1)) : y("", !0)
              ]),
              t("div", iI, [
                t("label", rI, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (he) => q.value = he)
                  }, null, 512), [
                    [Jo, q.value]
                  ]),
                  K[22] || (K[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), r("div", cI, [
                K[23] || (K[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (he) => B.value = he),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, uI), [
                  [Nt, B.value]
                ]),
                e.detectedModelsDir && !B.value ? (a(), r("p", dI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                E.value ? (a(), r("p", fI, " Did you mean: " + f(E.value), 1)) : y("", !0),
                I.value ? (a(), r("p", mI, f(I.value), 1)) : y("", !0),
                O.value !== null && !I.value ? (a(), r("p", vI, " Found " + f(O.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ve.value ? (a(), R(Mn, {
                key: 1,
                progress: Me.value.progress,
                message: Me.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            h.value === 2 ? (a(), r("div", pI, [
              T.value ? (a(), r("div", gI, [...K[25] || (K[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(G, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", hI, [
                  t("div", yI, [
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
                p.value === "landing" ? (a(), r("div", wI, [
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
                  (Pe = o.existingEnvironments) != null && Pe.length ? (a(), r(G, { key: 0 }, [
                    K[33] || (K[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", _I, [
                      (a(!0), r(G, null, pe(o.existingEnvironments, (he) => (a(), r("label", {
                        key: he,
                        class: Se(["env-option", { selected: w.value === he }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: he,
                          "onUpdate:modelValue": K[8] || (K[8] = (ge) => w.value = ge)
                        }, null, 8, bI), [
                          [Yt, w.value]
                        ]),
                        t("span", kI, f(he), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", $I, [
                  Ie.value ? (a(), r("div", OI, [
                    t("p", AI, [
                      K[41] || (K[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(re.value), 1),
                      K[42] || (K[42] = b("... ", -1))
                    ]),
                    x(Mn, {
                      progress: Ke.value.progress,
                      message: Ke.value.message,
                      "current-phase": Ke.value.phase,
                      "show-steps": !0,
                      steps: Xe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(G, { key: 0 }, [
                    K[40] || (K[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", CI, [
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
                    t("div", xI, [
                      K[36] || (K[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (he) => Y.value = he),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, pe(Fe(xr), (he) => (a(), r("option", {
                          key: he,
                          value: he
                        }, f(he), 9, SI))), 128))
                      ], 512), [
                        [vs, Y.value]
                      ])
                    ]),
                    t("div", II, [
                      K[37] || (K[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (he) => H.value = he),
                        class: "form-select",
                        disabled: we.value
                      }, [
                        (a(!0), r(G, null, pe(M.value, (he) => (a(), r("option", {
                          key: he.tag_name,
                          value: he.tag_name
                        }, f(he.name), 9, TI))), 128))
                      ], 8, EI), [
                        [vs, H.value]
                      ])
                    ]),
                    t("div", PI, [
                      K[38] || (K[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (he) => te.value = he),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, pe(Fe(Qa), (he) => (a(), r("option", {
                          key: he,
                          value: he
                        }, f(he) + f(he === "auto" ? " (detect GPU)" : ""), 9, RI))), 128))
                      ], 512), [
                        [vs, te.value]
                      ])
                    ]),
                    t("div", MI, [
                      t("label", DI, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (he) => Q.value = he)
                        }, null, 512), [
                          [Jo, Q.value]
                        ]),
                        K[39] || (K[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    N.value ? (a(), r("div", LI, f(N.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", NI, [
                  x(Pr, {
                    "workspace-path": U.value,
                    "resume-import": P.value,
                    "initial-progress": L.value ?? void 0,
                    onImportComplete: oe,
                    onImportStarted: K[14] || (K[14] = (he) => C.value = !0),
                    onSourceCleared: ce
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: g(() => [
          t("div", UI, [
            x(Ar),
            t("div", zI, [
              h.value === 1 ? (a(), R(Re, {
                key: 0,
                variant: "primary",
                disabled: !ae.value || ve.value,
                onClick: ne
              }, {
                default: g(() => [
                  b(f(ve.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : h.value === 2 ? (a(), r(G, { key: 1 }, [
                !Ie.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !U.value) ? (a(), R(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ce
                }, {
                  default: g(() => [...K[44] || (K[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), R(Re, {
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
                p.value === "landing" && w.value ? (a(), R(Re, {
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
      _.value ? (a(), R(tI, {
        key: 0,
        "workspace-path": D.value,
        onClose: K[16] || (K[16] = (Pe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), VI = /* @__PURE__ */ me(BI, [["__scopeId", "data-v-9a9aadc0"]]), WI = { class: "comfygit-panel" }, GI = { class: "panel-header" }, jI = { class: "header-left" }, HI = {
  key: 0,
  class: "header-info"
}, KI = { class: "header-actions" }, qI = { class: "env-switcher" }, YI = {
  key: 0,
  class: "header-info"
}, JI = { class: "branch-name" }, XI = { class: "panel-main" }, QI = { class: "sidebar" }, ZI = { class: "sidebar-content" }, eE = { class: "sidebar-section" }, tE = { class: "sidebar-section" }, sE = { class: "sidebar-section" }, oE = {
  key: 0,
  class: "sidebar-badge"
}, nE = { class: "sidebar-footer" }, aE = { class: "content-area" }, lE = {
  key: 0,
  class: "error-message"
}, iE = {
  key: 1,
  class: "loading"
}, rE = { class: "dialog-content env-selector-dialog" }, cE = { class: "dialog-header" }, uE = { class: "dialog-body" }, dE = { class: "env-list" }, fE = { class: "env-info" }, mE = { class: "env-name-row" }, vE = { class: "env-indicator" }, pE = { class: "env-name" }, gE = {
  key: 0,
  class: "env-branch"
}, hE = {
  key: 1,
  class: "current-label"
}, yE = { class: "env-stats" }, wE = ["onClick"], _E = { class: "toast-container" }, bE = { class: "toast-message" }, kE = /* @__PURE__ */ fe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getStatus: l,
      getHistory: i,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: h,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: C,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = rt(), L = Cv(), { liveInstanceCount: T } = Rr({ autoStart: !0 }), S = k(null), q = k([]), B = k([]), A = k([]), I = F(() => A.value.find((ee) => ee.is_current)), E = k(null), O = k(!1), re = k(1), Y = F(() => {
      var ee;
      return ((ee = E.value) == null ? void 0 : ee.state) || "managed";
    }), H = k(!1), te = k(null), Q = k(null), N = k(!1), U = k(null), M = k(null), we = k(null), ve = k(!1), Ie = k(!1), Me = k(""), Ke = k(null), Xe = k({ state: "idle", progress: 0, message: "" });
    let ke = null, Ee = null;
    const Ge = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, _e = o.initialView ? Ge[o.initialView] : null, ae = k((_e == null ? void 0 : _e.view) ?? "status"), Ve = k((_e == null ? void 0 : _e.section) ?? "this-env");
    function Te(ee, j) {
      ae.value = ee, Ve.value = j;
    }
    function D(ee) {
      const De = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ee];
      De && Te(De.view, De.section);
    }
    function V() {
      Te("branches", "this-env");
    }
    function se() {
      n("close"), setTimeout(() => {
        var j;
        const ee = document.querySelectorAll("button.comfyui-button");
        for (const De of ee)
          if (((j = De.textContent) == null ? void 0 : j.trim()) === "Manager") {
            De.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ne = k(null), ue = k(!1), de = k(!1), $e = k([]);
    let Ce = 0;
    function oe(ee, j = "info", De = 3e3) {
      const We = ++Ce;
      return $e.value.push({ id: We, message: ee, type: j }), De > 0 && setTimeout(() => {
        $e.value = $e.value.filter((ot) => ot.id !== We);
      }, De), We;
    }
    function ce(ee) {
      $e.value = $e.value.filter((j) => j.id !== ee);
    }
    function Le(ee, j) {
      oe(ee, j);
    }
    const xe = F(() => {
      if (!S.value) return "neutral";
      const ee = S.value.workflows, j = ee.new.length > 0 || ee.modified.length > 0 || ee.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? j ? "warning" : "success" : "error";
    });
    F(() => S.value ? xe.value === "success" ? "All synced" : xe.value === "warning" ? "Uncommitted changes" : xe.value === "error" ? "Not synced" : "" : "");
    async function Z() {
      H.value = !0, te.value = null;
      try {
        const [ee, j, De, We] = await Promise.all([
          l(!0),
          i(),
          c(),
          h()
        ]);
        S.value = ee, q.value = j.commits, B.value = De.branches, A.value = We, n("statusUpdate", ee), U.value && await U.value.loadWorkflows(!0);
      } catch (ee) {
        te.value = ee instanceof Error ? ee.message : "Failed to load status", S.value = null, q.value = [], B.value = [];
      } finally {
        H.value = !1;
      }
    }
    function K(ee) {
      Q.value = ee;
    }
    async function Pe(ee) {
      var De;
      Q.value = null;
      const j = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ne.value = {
        title: j ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: j ? "You have uncommitted changes that will be lost." : `Checkout commit ${ee.short_hash || ((De = ee.hash) == null ? void 0 : De.slice(0, 7))}?`,
        details: j ? as() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: j,
        onConfirm: async () => {
          var mt;
          ne.value = null, ie();
          const We = oe(`Checking out ${ee.short_hash || ((mt = ee.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await u(ee.hash, j);
          ce(We), ot.status === "success" ? oe("Restarting ComfyUI...", "success") : oe(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function he(ee) {
      const j = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ne.value = {
        title: j ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: j ? "You have uncommitted changes." : `Switch to branch "${ee}"?`,
        details: j ? as() : void 0,
        warning: j ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ne.value = null, ie();
          const De = oe(`Switching to ${ee}...`, "info", 0), We = await m(ee, j);
          ce(De), We.status === "success" ? oe("Restarting ComfyUI...", "success") : oe(We.message || "Branch switch failed", "error");
        }
      };
    }
    async function ge(ee) {
      const j = oe(`Creating branch ${ee}...`, "info", 0), De = await d(ee);
      ce(j), De.status === "success" ? (oe(`Branch "${ee}" created`, "success"), await Z()) : oe(De.message || "Failed to create branch", "error");
    }
    async function W(ee, j = !1) {
      const De = async (We) => {
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
              ne.value = null, await De(!0);
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
              ne.value = null, await De(!0);
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
          ne.value = null, await De(j);
        }
      };
    }
    async function z(ee) {
      Q.value = null;
      const j = prompt("Enter branch name:");
      if (j) {
        const De = oe(`Creating branch ${j}...`, "info", 0), We = await d(j, ee.hash);
        ce(De), We.status === "success" ? (oe(`Branch "${j}" created from ${ee.short_hash}`, "success"), await Z()) : oe(We.message || "Failed to create branch", "error");
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
    async function vt(ee, j) {
      N.value = !1, Me.value = ee, Ke.value = j || null, ve.value = !0;
    }
    async function at() {
      ve.value = !1, Ie.value = !0, ie(), Xe.value = {
        progress: 10,
        state: dt(10),
        message: Rt(10)
      };
      try {
        await w(Me.value, Ke.value || void 0), Ut(), Bs();
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
      const j = 60, De = 5e3, We = 100, ot = (j - ee) / (De / We);
      Ee = window.setInterval(() => {
        if (ee += ot, ee >= j && (ee = j, jt()), Xe.value.progress < j) {
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
          let ee = await L.getStatus();
          if ((!ee || ee.state === "idle") && (ee = await p()), !ee)
            return;
          const j = ee.progress || 0;
          j >= 60 && jt();
          const De = Math.max(j, Xe.value.progress), We = ee.state && ee.state !== "idle" && ee.state !== "unknown", ot = We ? ee.state : dt(De), mt = We && ee.message || Rt(De);
          Xe.value = {
            state: ot,
            progress: De,
            message: mt
          }, ee.state === "complete" ? (jt(), Ts(), Ie.value = !1, oe(`✓ Switched to ${Me.value}`, "success"), await Z(), Me.value = "") : ee.state === "rolled_back" ? (jt(), Ts(), Ie.value = !1, oe("Switch failed, restored previous environment", "warning"), Me.value = "") : ee.state === "critical_failure" && (jt(), Ts(), Ie.value = !1, oe(`Critical error during switch: ${ee.message}`, "error"), Me.value = "");
        } catch (ee) {
          console.error("Failed to poll switch progress:", ee);
        }
      }, 1e3));
    }
    function Ts() {
      jt(), ke && (clearInterval(ke), ke = null);
    }
    function so() {
      var ee;
      ve.value = !1, Me.value = "", (ee = E.value) != null && ee.state && E.value.state !== "managed" && (re.value = E.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function bo(ee) {
      ue.value = !1, await Z(), oe(ee.message, ee.success ? "success" : "error");
    }
    async function ko() {
      de.value = !1;
      const ee = oe("Syncing environment...", "info", 0);
      try {
        const j = await C("skip", !0);
        if (ce(ee), j.status === "success") {
          const De = [];
          j.nodes_installed.length && De.push(`${j.nodes_installed.length} installed`), j.nodes_removed.length && De.push(`${j.nodes_removed.length} removed`);
          const We = De.length ? `: ${De.join(", ")}` : "";
          oe(`✓ Environment synced${We}`, "success"), await Z();
        } else {
          const De = j.errors.length ? j.errors.join("; ") : j.message;
          oe(`Sync failed: ${De}`, "error");
        }
      } catch (j) {
        ce(ee), oe(`Sync error: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
      }
    }
    async function $o(ee) {
      var j;
      try {
        const De = await $(ee);
        De.failed.length === 0 ? oe(`✓ Repaired ${De.success} workflow${De.success === 1 ? "" : "s"}`, "success") : oe(`Repaired ${De.success}, failed: ${De.failed.length}`, "warning"), await Z();
      } catch (De) {
        oe(`Repair failed: ${De instanceof Error ? De.message : "Unknown error"}`, "error");
      } finally {
        (j = we.value) == null || j.resetRepairingState();
      }
    }
    async function ye() {
      var j, De;
      const ee = oe("Repairing environment...", "info", 0);
      try {
        const We = await C("skip", !0);
        if (ce(ee), We.status === "success") {
          const ot = [];
          We.nodes_installed.length && ot.push(`${We.nodes_installed.length} installed`), We.nodes_removed.length && ot.push(`${We.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          oe(`✓ Environment repaired${mt}`, "success"), (j = we.value) == null || j.closeDetailModal(), await Z();
        } else {
          const ot = We.errors.length ? We.errors.join(", ") : We.message || "Unknown error";
          oe(`Repair failed: ${ot}`, "error");
        }
      } catch (We) {
        ce(ee), oe(`Repair error: ${We instanceof Error ? We.message : "Unknown error"}`, "error");
      } finally {
        (De = we.value) == null || De.resetRepairingEnvironmentState();
      }
    }
    async function X(ee, j) {
      oe(`Environment '${ee}' created`, "success"), await Z(), M.value && await M.value.loadEnvironments(), j && await vt(ee);
    }
    async function je(ee) {
      var j;
      if (((j = I.value) == null ? void 0 : j.name) === ee) {
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
            const De = await _(ee);
            De.status === "success" ? (oe(`Environment "${ee}" deleted`, "success"), await Z(), M.value && await M.value.loadEnvironments()) : oe(De.message || "Failed to delete environment", "error");
          } catch (De) {
            oe(`Error deleting environment: ${De instanceof Error ? De.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(ee, j) {
      O.value = !1;
      try {
        E.value = await P();
      } catch {
      }
      await vt(ee, j);
    }
    function Ht() {
      O.value = !1, n("close");
    }
    async function ps(ee, j) {
      await vt(ee, j);
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
      if (!S.value) return [];
      const ee = [], j = S.value.workflows;
      return j.new.length && ee.push(`${j.new.length} new workflow(s)`), j.modified.length && ee.push(`${j.modified.length} modified workflow(s)`), j.deleted.length && ee.push(`${j.deleted.length} deleted workflow(s)`), ee;
    }
    return et(async () => {
      try {
        if (E.value = await P(), E.value.state === "no_workspace") {
          O.value = !0, re.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          O.value = !0, re.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          O.value = !0, re.value = 2;
          return;
        }
      } catch (ee) {
        console.warn("Setup status check failed, proceeding normally:", ee);
      }
      await Z();
    }), (ee, j) => {
      var De, We, ot, mt, Mt, ls, Vs, Ws, J, be, Ae, ct;
      return a(), r("div", WI, [
        t("div", GI, [
          t("div", jI, [
            j[31] || (j[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (a(), r("div", HI)) : y("", !0)
          ]),
          t("div", KI, [
            x(Or),
            j[34] || (j[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Se(["icon-btn", { spinning: H.value }]),
              onClick: Z,
              title: "Refresh"
            }, [...j[32] || (j[32] = [
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
              onClick: j[0] || (j[0] = (Ne) => n("close")),
              title: "Close"
            }, [...j[33] || (j[33] = [
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
        t("div", qI, [
          t("div", { class: "env-switcher-header" }, [
            j[35] || (j[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
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
            onClick: j[1] || (j[1] = (Ne) => Te("environments", "all-envs"))
          }, [
            S.value ? (a(), r("div", YI, [
              t("span", null, f(((De = I.value) == null ? void 0 : De.name) || ((We = S.value) == null ? void 0 : We.environment) || "Loading..."), 1),
              t("span", JI, "(" + f(S.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            j[36] || (j[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", XI, [
          t("div", QI, [
            t("div", ZI, [
              t("div", eE, [
                j[37] || (j[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "status" && Ve.value === "this-env" }]),
                  onClick: j[2] || (j[2] = (Ne) => Te("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "workflows" }]),
                  onClick: j[3] || (j[3] = (Ne) => Te("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "models-env" }]),
                  onClick: j[4] || (j[4] = (Ne) => Te("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "branches" }]),
                  onClick: j[5] || (j[5] = (Ne) => Te("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "history" }]),
                  onClick: j[6] || (j[6] = (Ne) => Te("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "nodes" }]),
                  onClick: j[7] || (j[7] = (Ne) => Te("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "debug-env" }]),
                  onClick: j[8] || (j[8] = (Ne) => Te("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              j[41] || (j[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", tE, [
                j[38] || (j[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "environments" }]),
                  onClick: j[9] || (j[9] = (Ne) => Te("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "model-index" }]),
                  onClick: j[10] || (j[10] = (Ne) => Te("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "settings" }]),
                  onClick: j[11] || (j[11] = (Ne) => Te("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "debug-workspace" }]),
                  onClick: j[12] || (j[12] = (Ne) => Te("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              j[42] || (j[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", sE, [
                j[40] || (j[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "deploy" }]),
                  onClick: j[13] || (j[13] = (Ne) => Te("deploy", "sharing"))
                }, [
                  j[39] || (j[39] = b(" DEPLOY ", -1)),
                  Fe(T) > 0 ? (a(), r("span", oE, f(Fe(T)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "export" }]),
                  onClick: j[14] || (j[14] = (Ne) => Te("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "import" }]),
                  onClick: j[15] || (j[15] = (Ne) => Te("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ae.value === "remotes" }]),
                  onClick: j[16] || (j[16] = (Ne) => Te("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", nE, [
              x(Ar)
            ])
          ]),
          t("div", aE, [
            te.value ? (a(), r("div", lE, f(te.value), 1)) : !S.value && ae.value === "status" ? (a(), r("div", iE, " Loading status... ")) : (a(), r(G, { key: 2 }, [
              ae.value === "status" ? (a(), R(Jm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: we,
                status: S.value,
                "setup-state": Y.value,
                onSwitchBranch: V,
                onCommitChanges: j[17] || (j[17] = (Ne) => ue.value = !0),
                onSyncEnvironment: j[18] || (j[18] = (Ne) => de.value = !0),
                onViewWorkflows: j[19] || (j[19] = (Ne) => Te("workflows", "this-env")),
                onViewHistory: j[20] || (j[20] = (Ne) => Te("history", "this-env")),
                onViewDebug: j[21] || (j[21] = (Ne) => Te("debug-env", "this-env")),
                onViewNodes: j[22] || (j[22] = (Ne) => Te("nodes", "this-env")),
                onRepairMissingModels: $o,
                onRepairEnvironment: ye,
                onStartSetup: j[23] || (j[23] = (Ne) => O.value = !0),
                onViewEnvironments: j[24] || (j[24] = (Ne) => Te("environments", "all-envs")),
                onCreateEnvironment: Oe
              }, null, 8, ["status", "setup-state"])) : ae.value === "workflows" ? (a(), R(I0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: U,
                onRefresh: Z
              }, null, 512)) : ae.value === "models-env" ? (a(), R(cw, {
                key: 2,
                onNavigate: D
              })) : ae.value === "branches" ? (a(), R(dv, {
                key: 3,
                branches: B.value,
                current: ((ot = S.value) == null ? void 0 : ot.branch) || null,
                onSwitch: he,
                onCreate: ge,
                onDelete: W
              }, null, 8, ["branches", "current"])) : ae.value === "history" ? (a(), R(kv, {
                key: 4,
                commits: q.value,
                onSelect: K,
                onCheckout: Pe
              }, null, 8, ["commits"])) : ae.value === "nodes" ? (a(), R(a_, {
                key: 5,
                "version-mismatches": ((Mt = (mt = S.value) == null ? void 0 : mt.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: se,
                onRepairEnvironment: ye,
                onToast: Le
              }, null, 8, ["version-mismatches"])) : ae.value === "debug-env" ? (a(), R(_2, { key: 6 })) : ae.value === "environments" ? (a(), R($$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: M,
                onSwitch: vt,
                onCreated: X,
                onDelete: je
              }, null, 512)) : ae.value === "model-index" ? (a(), R(Tw, {
                key: 8,
                onRefresh: Z
              })) : ae.value === "settings" ? (a(), R(d2, { key: 9 })) : ae.value === "debug-workspace" ? (a(), R(w2, { key: 10 })) : ae.value === "deploy" ? (a(), R(e4, {
                key: 11,
                onToast: Le,
                onNavigate: D
              })) : ae.value === "export" ? (a(), R(Z$, { key: 12 })) : ae.value === "import" ? (a(), R(H3, {
                key: 13,
                onImportCompleteSwitch: gs
              })) : ae.value === "remotes" ? (a(), R(Gk, {
                key: 14,
                onToast: Le
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Q.value ? (a(), R(y4, {
          key: 0,
          commit: Q.value,
          onClose: j[25] || (j[25] = (Ne) => Q.value = null),
          onCheckout: Pe,
          onCreateBranch: z
        }, null, 8, ["commit"])) : y("", !0),
        ne.value ? (a(), R(Xa, {
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
          onCancel: j[26] || (j[26] = (Ne) => ne.value = null),
          onSecondary: ne.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        x(y6, {
          show: ve.value,
          "from-environment": ((ls = I.value) == null ? void 0 : ls.name) || "unknown",
          "to-environment": Me.value,
          onConfirm: at,
          onClose: so
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ue.value && S.value ? (a(), R(Lr, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: j[27] || (j[27] = (Ne) => ue.value = !1),
          onCommitted: bo
        }, null, 8, ["status"])) : y("", !0),
        de.value && S.value ? (a(), R(U6, {
          key: 3,
          show: de.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: ko,
          onClose: j[28] || (j[28] = (Ne) => de.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        x(T6, {
          show: Ie.value,
          state: Xe.value.state,
          progress: Xe.value.progress,
          message: Xe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: j[30] || (j[30] = it((Ne) => N.value = !1, ["self"]))
        }, [
          t("div", rE, [
            t("div", cE, [
              j[44] || (j[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: j[29] || (j[29] = (Ne) => N.value = !1)
              }, [...j[43] || (j[43] = [
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
            t("div", uE, [
              j[45] || (j[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", dE, [
                (a(!0), r(G, null, pe(A.value, (Ne) => (a(), r("div", {
                  key: Ne.name,
                  class: Se(["env-item", { current: Ne.is_current }])
                }, [
                  t("div", fE, [
                    t("div", mE, [
                      t("span", vE, f(Ne.is_current ? "●" : "○"), 1),
                      t("span", pE, f(Ne.name), 1),
                      Ne.current_branch ? (a(), r("span", gE, "(" + f(Ne.current_branch) + ")", 1)) : y("", !0),
                      Ne.is_current ? (a(), r("span", hE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", yE, f(Ne.workflow_count) + " workflows • " + f(Ne.node_count) + " nodes ", 1)
                  ]),
                  Ne.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Co) => vt(Ne.name)
                  }, " SWITCH ", 8, wE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        O.value ? (a(), R(VI, {
          key: 5,
          "default-path": ((Vs = E.value) == null ? void 0 : Vs.default_path) || "~/comfygit",
          "detected-models-dir": ((Ws = E.value) == null ? void 0 : Ws.detected_models_dir) || null,
          "initial-step": re.value,
          "existing-environments": ((J = E.value) == null ? void 0 : J.environments) || [],
          "cli-installed": ((be = E.value) == null ? void 0 : be.cli_installed) ?? !0,
          "setup-state": ((Ae = E.value) == null ? void 0 : Ae.state) || "no_workspace",
          "workspace-path": ((ct = E.value) == null ? void 0 : ct.workspace_path) || null,
          onComplete: ht,
          onClose: Ht,
          onSwitchEnvironment: ps,
          onEnvironmentCreatedNoSwitch: ns
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", _E, [
          x(ld, { name: "toast" }, {
            default: g(() => [
              (a(!0), r(G, null, pe($e.value, (Ne) => (a(), r("div", {
                key: Ne.id,
                class: Se(["toast", Ne.type])
              }, [
                t("span", bE, f(Ne.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $E = /* @__PURE__ */ me(kE, [["__scopeId", "data-v-037b3ee3"]]), CE = { class: "item-header" }, xE = { class: "item-info" }, SE = { class: "filename" }, IE = { class: "metadata" }, EE = { class: "size" }, TE = {
  key: 0,
  class: "type"
}, PE = { class: "item-actions" }, RE = {
  key: 0,
  class: "progress-section"
}, ME = { class: "progress-bar" }, DE = { class: "progress-stats" }, LE = { class: "downloaded" }, OE = { class: "speed" }, AE = {
  key: 0,
  class: "eta"
}, NE = {
  key: 1,
  class: "status-msg paused"
}, UE = {
  key: 2,
  class: "status-msg queued"
}, zE = {
  key: 3,
  class: "status-msg completed"
}, FE = {
  key: 4,
  class: "status-msg failed"
}, BE = {
  key: 0,
  class: "retries"
}, VE = /* @__PURE__ */ fe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
    function n(c) {
      if (c === 0) return "?";
      const u = c / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(c / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(c) {
      return c === 0 ? "-" : `${(c / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function i(c) {
      if (c < 60) return `${Math.round(c)}s`;
      const u = Math.floor(c / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (c, u) => (a(), r("div", {
      class: Se(["download-item", `status-${e.item.status}`])
    }, [
      t("div", CE, [
        t("div", xE, [
          t("div", SE, f(e.item.filename), 1),
          t("div", IE, [
            t("span", EE, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", TE, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", PE, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), r("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), r("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), r("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), r("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), r("div", RE, [
        t("div", ME, [
          t("div", {
            class: "progress-fill",
            style: Gt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", DE, [
          t("span", LE, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", OE, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", AE, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", NE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", UE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", zE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", FE, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", BE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Eo = /* @__PURE__ */ me(VE, [["__scopeId", "data-v-2110df65"]]), WE = { class: "queue-title" }, GE = { class: "count" }, jE = { class: "queue-actions" }, HE = { class: "action-label" }, KE = {
  key: 0,
  class: "overall-progress"
}, qE = { class: "progress-bar" }, YE = {
  key: 0,
  class: "current-mini"
}, JE = { class: "filename" }, XE = { class: "speed" }, QE = {
  key: 1,
  class: "queue-content"
}, ZE = {
  key: 0,
  class: "section"
}, eT = {
  key: 1,
  class: "section"
}, tT = { class: "section-header" }, sT = { class: "section-label paused" }, oT = { class: "items-list" }, nT = {
  key: 2,
  class: "section"
}, aT = { class: "section-header" }, lT = { class: "section-label" }, iT = { class: "items-list" }, rT = {
  key: 3,
  class: "section"
}, cT = { class: "section-header" }, uT = { class: "section-label" }, dT = { class: "items-list" }, fT = {
  key: 4,
  class: "section"
}, mT = { class: "section-header" }, vT = { class: "section-label failed" }, pT = { class: "items-list" }, gT = /* @__PURE__ */ fe({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: i,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: h,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = sn(), C = k(!1);
    let $ = null;
    Ct(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (S, q) => {
        $ && (clearTimeout($), $ = null);
        const B = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, A = q && (q.active > 0 || q.paused > 0);
        B && A && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = F(() => {
      var B;
      if (s.items.length === 0) return 0;
      const S = l.value.length, q = ((B = o.value) == null ? void 0 : B.progress) || 0;
      return Math.round((S + q / 100) / s.items.length * 100);
    });
    function L(S) {
      m(S);
    }
    function T(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, q) => (a(), R(wt, { to: "body" }, [
      Fe(u) ? (a(), r("div", {
        key: 0,
        class: Se(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (B) => C.value = !C.value)
        }, [
          t("div", WE, [
            q[4] || (q[4] = t("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", GE, "(" + f(Fe(d)) + "/" + f(Fe(s).items.length) + ")", 1)
          ]),
          t("div", jE, [
            t("span", HE, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), r("div", QE, [
          Fe(o) ? (a(), r("div", ZE, [
            q[6] || (q[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            x(Eo, {
              item: Fe(o),
              onCancel: q[1] || (q[1] = (B) => L(Fe(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Fe(c).length > 0 ? (a(), r("div", eT, [
            t("div", tT, [
              t("span", sT, "Paused (" + f(Fe(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...B) => Fe(w) && Fe(w)(...B))
              }, "Resume All")
            ]),
            t("div", oT, [
              (a(!0), r(G, null, pe(Fe(c), (B) => (a(), R(Eo, {
                key: B.id,
                item: B,
                onResume: (A) => Fe(h)(B.id),
                onRemove: (A) => Fe(p)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Fe(n).length > 0 ? (a(), r("div", nT, [
            t("div", aT, [
              t("span", lT, "Queued (" + f(Fe(n).length) + ")", 1)
            ]),
            t("div", iT, [
              (a(!0), r(G, null, pe(Fe(n), (B) => (a(), R(Eo, {
                key: B.id,
                item: B,
                onCancel: (A) => L(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Fe(l).length > 0 ? (a(), r("div", rT, [
            t("div", cT, [
              t("span", uT, "Completed (" + f(Fe(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...B) => Fe(_) && Fe(_)(...B))
              }, "Clear")
            ]),
            t("div", dT, [
              (a(!0), r(G, null, pe(Fe(l).slice(0, 3), (B) => (a(), R(Eo, {
                key: B.id,
                item: B,
                onRemove: (A) => Fe(p)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Fe(i).length > 0 ? (a(), r("div", fT, [
            t("div", mT, [
              t("span", vT, "Failed (" + f(Fe(i).length) + ")", 1)
            ]),
            t("div", pT, [
              (a(!0), r(G, null, pe(Fe(i), (B) => (a(), R(Eo, {
                key: B.id,
                item: B,
                onRetry: (A) => Fe(v)(B.id),
                onRemove: (A) => Fe(p)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", KE, [
          t("div", qE, [
            t("div", {
              class: "progress-fill",
              style: Gt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Fe(o) ? (a(), r("div", YE, [
            t("span", JE, f(Fe(o).filename), 1),
            t("span", XE, f(T(Fe(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), hT = /* @__PURE__ */ me(gT, [["__scopeId", "data-v-60751cfa"]]), yT = {
  key: 0,
  class: "loading-state"
}, wT = {
  key: 1,
  class: "analysis-results"
}, _T = {
  key: 0,
  class: "section"
}, bT = { class: "section-header" }, kT = { class: "item-list" }, $T = { class: "node-type" }, CT = {
  key: 0,
  class: "package-info"
}, xT = {
  key: 1,
  class: "not-found"
}, ST = {
  key: 0,
  class: "overflow-note"
}, IT = {
  key: 1,
  class: "section"
}, ET = { class: "section-header" }, TT = { class: "item-list" }, PT = { class: "model-name" }, RT = {
  key: 0,
  class: "has-url"
}, MT = {
  key: 1,
  class: "no-url"
}, DT = {
  key: 0,
  class: "overflow-note"
}, LT = /* @__PURE__ */ fe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = F(() => c.value.length > 0 || u.value.length > 0), c = F(() => {
      var _;
      if (!((_ = n.value) != null && _.nodes)) return [];
      const w = (n.value.nodes.resolved || []).filter((C) => !C.is_installed).map((C) => {
        var $, P, L;
        return {
          node_type: (($ = C.reference) == null ? void 0 : $.node_type) || C.node_type,
          package_id: (P = C.package) == null ? void 0 : P.package_id,
          package_title: (L = C.package) == null ? void 0 : L.title
        };
      }), p = (n.value.nodes.unresolved || []).map((C) => {
        var $;
        return {
          node_type: (($ = C.reference) == null ? void 0 : $.node_type) || C.node_type,
          package_id: void 0,
          package_title: void 0
        };
      });
      return [...w, ...p];
    }), u = F(() => {
      var _;
      if (!((_ = n.value) != null && _.models)) return [];
      const w = (n.value.models.resolved || []).filter(
        (C) => C.match_type === "download_intent" || C.match_type === "property_download_intent" || C.match_type === "not_found"
      ).map((C) => {
        var $;
        return {
          widget_value: (($ = C.reference) == null ? void 0 : $.widget_value) || C.widget_value,
          has_download_url: !!C.download_source
        };
      }), p = (n.value.models.unresolved || []).map((C) => {
        var $;
        return {
          widget_value: (($ = C.reference) == null ? void 0 : $.widget_value) || C.widget_value,
          has_download_url: !1
        };
      });
      return [...w, ...p];
    });
    async function d(w) {
      s.value = !0, o.value = null, l.value = !0;
      try {
        const p = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: w, name: "unsaved" })
        });
        if (!p.ok) {
          const _ = await p.json();
          throw new Error(_.error || "Failed to analyze workflow");
        }
        n.value = await p.json(), i.value || v();
      } catch (p) {
        console.error("[ComfyGit] Failed to analyze workflow:", p), o.value = p instanceof Error ? p.message : "Unknown error", v();
      } finally {
        s.value = !1;
      }
    }
    function m() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      })), v();
    }
    function v() {
      l.value = !1, n.value = null;
    }
    function h(w) {
      const { workflow: p } = w.detail;
      p && d(p);
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", h);
    }), to(() => {
      window.removeEventListener("comfygit:workflow-loaded", h);
    }), (w, p) => l.value ? (a(), R(pt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: v
    }, {
      body: g(() => [
        s.value ? (a(), r("div", yT, [...p[0] || (p[0] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && i.value ? (a(), r("div", wT, [
          c.value.length > 0 ? (a(), r("div", _T, [
            t("div", bT, [
              p[1] || (p[1] = t("span", { class: "section-icon" }, "📦", -1)),
              t("span", null, "Missing Custom Nodes (" + f(c.value.length) + ")", 1)
            ]),
            t("div", kT, [
              (a(!0), r(G, null, pe(c.value.slice(0, 5), (_) => (a(), r("div", {
                key: _.node_type,
                class: "item"
              }, [
                t("code", $T, f(_.node_type), 1),
                _.package_id ? (a(), r("span", CT, " → " + f(_.package_title || _.package_id), 1)) : (a(), r("span", xT, "Not found in registry"))
              ]))), 128)),
              c.value.length > 5 ? (a(), r("div", ST, " ...and " + f(c.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          u.value.length > 0 ? (a(), r("div", IT, [
            t("div", ET, [
              p[2] || (p[2] = t("span", { class: "section-icon" }, "🎨", -1)),
              t("span", null, "Missing Models (" + f(u.value.length) + ")", 1)
            ]),
            t("div", TT, [
              (a(!0), r(G, null, pe(u.value.slice(0, 5), (_) => (a(), r("div", {
                key: _.widget_value,
                class: "item"
              }, [
                t("span", PT, f(_.widget_value), 1),
                _.has_download_url ? (a(), r("span", RT, " ⬇ Can auto-download ")) : (a(), r("span", MT, "Manual download required"))
              ]))), 128)),
              u.value.length > 5 ? (a(), r("div", DT, " ...and " + f(u.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          p[3] || (p[3] = t("div", { class: "tip" }, [
            t("span", { class: "tip-icon" }, "ℹ"),
            t("span", null, "Save this workflow to track it in ComfyGit and enable dependency resolution.")
          ], -1))
        ])) : y("", !0)
      ]),
      footer: g(() => [
        x(Re, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...p[4] || (p[4] = [
            b("Dismiss", -1)
          ])]),
          _: 1
        }),
        x(Re, {
          variant: "primary",
          onClick: m
        }, {
          default: g(() => [...p[5] || (p[5] = [
            b("Open ComfyGit Panel", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), OT = /* @__PURE__ */ me(LT, [["__scopeId", "data-v-c176566f"]]), AT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', NT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', UT = {
  comfy: AT,
  phosphor: NT
}, Za = "comfy", Nr = "comfygit-theme";
let Ks = null, Ur = Za;
function zT() {
  try {
    const e = localStorage.getItem(Nr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Za;
}
function zr(e = Za) {
  Ks && Ks.remove(), Ks = document.createElement("style"), Ks.id = "comfygit-theme-styles", Ks.setAttribute("data-theme", e), Ks.textContent = UT[e], document.head.appendChild(Ks), document.body.setAttribute("data-comfygit-theme", e), Ur = e;
  try {
    localStorage.setItem(Nr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function FT() {
  return Ur;
}
function BT(e) {
  zr(e);
}
function VT(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const el = document.createElement("link");
el.rel = "stylesheet";
el.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(el);
const WT = zT();
zr(WT);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), BT(e);
  },
  getTheme: () => {
    const e = FT();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let qt = null, Lt = null, Bo = null, To = null, Xl = null, Po = null, Ql = null;
const po = k(null);
let tl = "managed", Fr = !1;
async function _n() {
  var e;
  if (!((e = Os) != null && e.api)) return null;
  try {
    const s = await Os.api.fetchApi("/v2/comfygit/status");
    s.ok && (po.value = await s.json());
  } catch {
  }
}
async function Ia() {
  var e;
  if ((e = Os) != null && e.api)
    try {
      const s = await Os.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        tl = o.state, Fr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ea() {
  var s;
  if (tl === "managed" || !Fr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function GT() {
  if (!po.value) return !1;
  const e = po.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || po.value.has_changes;
}
function fa(e) {
  qt && qt.remove(), qt = document.createElement("div"), qt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", qt.appendChild(s), qt.addEventListener("click", (l) => {
    l.target === qt && ma();
  });
  const o = (l) => {
    l.key === "Escape" && (ma(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Hn({
    render: () => tn($E, {
      initialView: e,
      onClose: ma,
      onStatusUpdate: async (l) => {
        po.value = l, Vo(), await Ia(), Ta(), Ea();
      }
    })
  }).mount(s), document.body.appendChild(qt);
}
function ma() {
  qt && (qt.remove(), qt = null);
}
function jT(e) {
  Ro(), Lt = document.createElement("div"), Lt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Lt.style.position = "fixed", Lt.style.top = `${s.bottom + 8}px`, Lt.style.right = `${window.innerWidth - s.right}px`, Lt.style.zIndex = "10001";
  const o = (l) => {
    Lt && !Lt.contains(l.target) && l.target !== e && (Ro(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Ro(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Bo = Hn({
    render: () => tn(Lr, {
      status: po.value,
      onClose: Ro,
      onCommitted: (l) => {
        Ro(), HT(l.success, l.message), _n().then(Vo);
      }
    })
  }), Bo.mount(Lt), document.body.appendChild(Lt);
}
function Ro() {
  Bo && (Bo.unmount(), Bo = null), Lt && (Lt.remove(), Lt = null);
}
function HT(e, s) {
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
function KT() {
  To || (To = document.createElement("div"), To.className = "comfygit-download-queue-root", Xl = Hn({
    render: () => tn(hT)
  }), Xl.mount(To), document.body.appendChild(To), console.log("[ComfyGit] Model download queue mounted"));
}
function qT() {
  Po || (Po = document.createElement("div"), Po.className = "comfygit-missing-resources-root", Ql = Hn({
    render: () => tn(OT)
  }), Ql.mount(Po), document.body.appendChild(Po), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Ft = null;
function Vo() {
  if (!Ft) return;
  const e = Ft.querySelector(".commit-indicator");
  e && (e.style.display = GT() ? "block" : "none");
}
function Ta() {
  if (!Ft) return;
  const e = tl !== "managed";
  Ft.disabled = e, Ft.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Br = document.createElement("style");
Br.textContent = `
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
document.head.appendChild(Br);
Os.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    window.__comfygit_pending_workflow = {
      graphData: e,
      missingNodeTypes: s,
      timestamp: Date.now()
    }, console.log("[ComfyGit] beforeConfigureGraph: captured workflow data", {
      nodeCount: ((o = e == null ? void 0 : e.nodes) == null ? void 0 : o.length) ?? 0,
      missingNodeTypes: (s == null ? void 0 : s.length) ?? 0
    });
  },
  async afterConfigureGraph(e) {
    const s = window.__comfygit_pending_workflow;
    s && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: {
        workflow: s.graphData,
        missingNodeTypes: e,
        timestamp: s.timestamp
      }
    })), console.log("[ComfyGit] afterConfigureGraph: dispatched workflow-loaded event", {
      missingNodeTypes: (e == null ? void 0 : e.length) ?? 0
    }));
  },
  async setup() {
    var l, i;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = fa, Ft = document.createElement("button"), Ft.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ft.innerHTML = 'Commit <span class="commit-indicator"></span>', Ft.title = "Quick Commit", Ft.onclick = () => jT(Ft), e.appendChild(s), e.appendChild(Ft), (i = (l = Os.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Os.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), KT(), qT(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      fa(u);
    }));
    const { loadPendingDownloads: o } = sn();
    o(), await Promise.all([_n(), Ia()]), Vo(), Ta(), Ea(), setTimeout(Ea, 100), setInterval(async () => {
      await Promise.all([_n(), Ia()]), Vo(), Ta();
    }, 3e4);
    const n = Os.api;
    if (n) {
      let c = function() {
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
        `, w.onmouseover = () => w.style.background = "var(--comfy-input-bg)", w.onmouseout = () => w.style.background = "var(--comfy-menu-bg)", w.onclick = () => c(), v.appendChild(w);
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
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", _.appendChild(C);
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
          w.remove(), fa("debug-env");
        }, w.appendChild(P);
        const L = document.createElement("button");
        L.textContent = "×", L.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, L.onmouseover = () => L.style.opacity = "1", L.onmouseout = () => L.style.opacity = "0.6", L.onclick = () => w.remove(), w.appendChild(L), document.body.appendChild(w), console.log("[ComfyGit] Manager error toast displayed:", v), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && w.remove();
        }, 1e4);
      };
      n.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: h, workflow_name: w } = v.detail;
        console.log(`[ComfyGit] Workflow ${h}: ${w}`), await _n(), Vo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      n.addEventListener("status", async (v) => {
        const h = v.detail != null;
        h && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), m = h;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (v) => {
        const h = VT(v.detail);
        h && d(h);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
