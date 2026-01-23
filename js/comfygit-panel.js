import { app as fs } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const st = {}, co = [], vs = () => {
}, Zl = () => !1, Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ma = (e) => e.startsWith("onUpdate:"), gt = Object.assign, Da = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Vr = Object.prototype.hasOwnProperty, Ze = (e, s) => Vr.call(e, s), ze = Array.isArray, uo = (e) => Qo(e) === "[object Map]", wo = (e) => Qo(e) === "[object Set]", al = (e) => Qo(e) === "[object Date]", We = (e) => typeof e == "function", ut = (e) => typeof e == "string", Zt = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", ei = (e) => (tt(e) || We(e)) && We(e.then) && We(e.catch), ti = Object.prototype.toString, Qo = (e) => ti.call(e), Wr = (e) => Qo(e).slice(8, -1), si = (e) => Qo(e) === "[object Object]", La = (e) => ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lo = /* @__PURE__ */ Ra(
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
let ll;
const Nn = () => ll || (ll = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gt(e) {
  if (ze(e)) {
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
function Ie(e) {
  let s = "";
  if (ut(e))
    s = e;
  else if (ze(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ie(e[o]);
      n && (s += n + " ");
    }
  else if (tt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const Xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qr = /* @__PURE__ */ Ra(Xr);
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
  let o = al(e), n = al(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = Zt(e), n = Zt(s), o || n)
    return e === s;
  if (o = ze(e), n = ze(s), o || n)
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
function Oa(e, s) {
  return e.findIndex((o) => Qs(o, s));
}
const ai = (e) => !!(e && e.__v_isRef === !0), f = (e) => ut(e) ? e : e == null ? "" : ze(e) || tt(e) && (e.toString === ti || !We(e.toString)) ? ai(e) ? f(e.value) : JSON.stringify(e, li, 2) : String(e), li = (e, s) => ai(s) ? li(e, s.value) : uo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Yn(n, i) + " =>"] = l, o),
    {}
  )
} : wo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Yn(o))
} : Zt(s) ? Yn(s) : tt(s) && !ze(s) && !si(s) ? String(s) : s, Yn = (e, s = "") => {
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
    this.flags |= 2, il(this), ui(this);
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
        Ua(s);
      this.deps = this.depsTail = void 0, il(this), this.onStop && this.onStop(), this.flags &= -2;
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
let ri = 0, Oo, Ao;
function ci(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Ao, Ao = e;
    return;
  }
  e.next = Oo, Oo = e;
}
function Aa() {
  ri++;
}
function Na() {
  if (--ri > 0)
    return;
  if (Ao) {
    let s = Ao;
    for (Ao = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Oo; ) {
    let s = Oo;
    for (Oo = void 0; s; ) {
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
    n.version === -1 ? (n === o && (o = l), Ua(n), sc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Go) || (e.globalVersion = Go, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !va(e))))
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
function Ua(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      Ua(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function sc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Jt = !0;
const mi = [];
function Cs() {
  mi.push(Jt), Jt = !1;
}
function xs() {
  const e = mi.pop();
  Jt = e === void 0 ? !0 : e;
}
function il(e) {
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
let Go = 0;
class oc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class za {
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
    this.version++, Go++, this.notify(s);
  }
  notify(s) {
    Aa();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Na();
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
), jo = Symbol(
  ""
);
function _t(e, s, o) {
  if (Jt && nt) {
    let n = pa.get(e);
    n || pa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new za()), l.map = n, l.key = o), l.track();
  }
}
function bs(e, s, o, n, l, i) {
  const c = pa.get(e);
  if (!c) {
    Go++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Aa(), s === "clear")
    c.forEach(u);
  else {
    const d = ze(e), m = d && La(o);
    if (d && o === "length") {
      const v = Number(n);
      c.forEach((h, w) => {
        (w === "length" || w === jo || !Zt(w) && w >= v) && u(h);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(jo)), s) {
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
  Na();
}
function oo(e) {
  const s = Xe(e);
  return s === e ? s : (_t(s, "iterate", jo), Bt(e) ? s : s.map(es));
}
function Un(e) {
  return _t(e = Xe(e), "iterate", jo), e;
}
function Ds(e, s) {
  return Ss(e) ? Xs(e) ? go(es(s)) : go(s) : es(s);
}
const nc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xn(this, Symbol.iterator, (e) => Ds(this, e));
  },
  concat(...e) {
    return oo(this).concat(
      ...e.map((s) => ze(s) ? oo(s) : s)
    );
  },
  entries() {
    return Xn(this, "entries", (e) => (e[1] = Ds(this, e[1]), e));
  },
  every(e, s) {
    return ys(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return ys(
      this,
      "filter",
      e,
      s,
      (o) => o.map((n) => Ds(this, n)),
      arguments
    );
  },
  find(e, s) {
    return ys(
      this,
      "find",
      e,
      s,
      (o) => Ds(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return ys(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return ys(
      this,
      "findLast",
      e,
      s,
      (o) => Ds(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return ys(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return ys(this, "forEach", e, s, void 0, arguments);
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
    return ys(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return So(this, "pop");
  },
  push(...e) {
    return So(this, "push", e);
  },
  reduce(e, ...s) {
    return rl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return rl(this, "reduceRight", e, s);
  },
  shift() {
    return So(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return ys(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return So(this, "splice", e);
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
    return So(this, "unshift", e);
  },
  values() {
    return Xn(this, "values", (e) => Ds(this, e));
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
function ys(e, s, o, n, l, i) {
  const c = Un(e), u = c !== e && !Bt(e), d = c[s];
  if (d !== ac[s]) {
    const h = d.apply(e, i);
    return u ? es(h) : h;
  }
  let m = o;
  c !== e && (u ? m = function(h, w) {
    return o.call(this, Ds(e, h), w, e);
  } : o.length > 2 && (m = function(h, w) {
    return o.call(this, h, w, e);
  }));
  const v = d.call(c, m, n);
  return u && l ? l(v) : v;
}
function rl(e, s, o, n) {
  const l = Un(e);
  let i = o;
  return l !== e && (Bt(e) ? o.length > 3 && (i = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : i = function(c, u, d) {
    return o.call(this, c, Ds(e, u), d, e);
  }), l[s](i, ...n);
}
function Qn(e, s, o) {
  const n = Xe(e);
  _t(n, "iterate", jo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Va(o[0]) ? (o[0] = Xe(o[0]), n[s](...o)) : l;
}
function So(e, s, o = []) {
  Cs(), Aa();
  const n = Xe(e)[s].apply(e, o);
  return Na(), xs(), n;
}
const lc = /* @__PURE__ */ Ra("__proto__,__v_isRef,__isVue"), pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zt)
);
function ic(e) {
  Zt(e) || (e = String(e));
  const s = Xe(this);
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
    const c = ze(s);
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
      const d = c && La(o) ? u : u.value;
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
    const c = ze(s) && La(o);
    if (!this._isShallow) {
      const m = Ss(i);
      if (!Bt(n) && !Ss(n) && (i = Xe(i), n = Xe(n)), !c && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const u = c ? Number(o) < s.length : Ze(s, o), d = Reflect.set(
      s,
      o,
      n,
      $t(s) ? s : l
    );
    return s === Xe(l) && (u ? As(n, i) && bs(s, "set", o, n) : bs(s, "add", o, n)), d;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && bs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!Zt(o) || !pi.has(o)) && _t(s, "has", o), n;
  }
  ownKeys(s) {
    return _t(
      s,
      "iterate",
      ze(s) ? "length" : Js
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
    const l = this.__v_raw, i = Xe(l), c = uo(i), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...n), v = o ? ha : s ? go : es;
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
      const i = this.__v_raw, c = Xe(i), u = Xe(l);
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
      return !e && _t(Xe(l), "iterate", Js), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Xe(i), u = Xe(l);
      return e || (As(l, u) && _t(c, "has", l), _t(c, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const c = this, u = c.__v_raw, d = Xe(u), m = s ? ha : e ? go : es;
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
        !s && !Bt(l) && !Ss(l) && (l = Xe(l));
        const i = Xe(this);
        return nn(i).has.call(i, l) || (i.add(l), bs(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Bt(i) && !Ss(i) && (i = Xe(i));
        const c = Xe(this), { has: u, get: d } = nn(c);
        let m = u.call(c, l);
        m || (l = Xe(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, i), m ? As(i, v) && bs(c, "set", l, i) : bs(c, "add", l, i), this;
      },
      delete(l) {
        const i = Xe(this), { has: c, get: u } = nn(i);
        let d = c.call(i, l);
        d || (l = Xe(l), d = c.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && bs(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Xe(this), i = l.size !== 0, c = l.clear();
        return i && bs(
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
function Fa(e, s) {
  const o = mc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const vc = {
  get: /* @__PURE__ */ Fa(!1, !1)
}, pc = {
  get: /* @__PURE__ */ Fa(!1, !0)
}, gc = {
  get: /* @__PURE__ */ Fa(!0, !1)
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
  return Ss(e) ? e : Ba(
    e,
    !1,
    cc,
    vc,
    yi
  );
}
function _c(e) {
  return Ba(
    e,
    !1,
    dc,
    pc,
    wi
  );
}
function bn(e) {
  return Ba(
    e,
    !0,
    uc,
    gc,
    _i
  );
}
function Ba(e, s, o, n, l) {
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
  return Ss(e) ? Xs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ss(e) {
  return !!(e && e.__v_isReadonly);
}
function Bt(e) {
  return !!(e && e.__v_isShallow);
}
function Va(e) {
  return e ? !!e.__v_raw : !1;
}
function Xe(e) {
  const s = e && e.__v_raw;
  return s ? Xe(s) : e;
}
function bc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && oi(e, "__v_skip", !0), e;
}
const es = (e) => tt(e) ? Fs(e) : e, go = (e) => tt(e) ? bn(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return kc(e, !1);
}
function kc(e, s) {
  return $t(e) ? e : new $c(e, s);
}
class $c {
  constructor(s, o) {
    this.dep = new za(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Xe(s), this._value = o ? s : es(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Bt(s) || Ss(s);
    s = n ? s : Xe(s), As(s, o) && (this._rawValue = s, this._value = n ? s : es(s), this.dep.trigger());
  }
}
function Be(e) {
  return $t(e) ? e.value : e;
}
const Cc = {
  get: (e, s, o) => s === "__v_raw" ? e : Be(Reflect.get(e, s, o)),
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
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new za(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Go - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
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
  return We(e) ? n = e : (n = e.get, l = e.set), new xc(n, l, o);
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
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: u, call: d } = o, m = (S) => l ? S : Bt(S) || l === !1 || l === 0 ? ks(S, 1) : ks(S);
  let v, h, w, p, k = !1, x = !1;
  if ($t(e) ? (h = () => e.value, k = Bt(e)) : Xs(e) ? (h = () => m(e), k = !0) : ze(e) ? (x = !0, k = e.some((S) => Xs(S) || Bt(S)), h = () => e.map((S) => {
    if ($t(S))
      return S.value;
    if (Xs(S))
      return m(S);
    if (We(S))
      return d ? d(S, 2) : S();
  })) : We(e) ? s ? h = d ? () => d(e, 2) : e : h = () => {
    if (w) {
      Cs();
      try {
        w();
      } finally {
        xs();
      }
    }
    const S = qs;
    qs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      qs = S;
    }
  } : h = vs, s && l) {
    const S = h, q = l === !0 ? 1 / 0 : l;
    h = () => ks(S(), q);
  }
  const $ = tc(), R = () => {
    v.stop(), $ && $.active && Da($.effects, v);
  };
  if (i && s) {
    const S = s;
    s = (...q) => {
      S(...q), R();
    };
  }
  let L = x ? new Array(e.length).fill(ln) : ln;
  const P = (S) => {
    if (!(!(v.flags & 1) || !v.dirty && !S))
      if (s) {
        const q = v.run();
        if (l || k || (x ? q.some((B, A) => As(B, L[A])) : As(q, L))) {
          w && w();
          const B = qs;
          qs = v;
          try {
            const A = [
              q,
              // pass undefined as the old value when it's changed for the first time
              L === ln ? void 0 : x && L[0] === ln ? [] : L,
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
  return u && u(P), v = new ii(h), v.scheduler = c ? () => c(P, !1) : P, p = (S) => Ic(S, !1, v), w = v.onStop = () => {
    const S = kn.get(v);
    if (S) {
      if (d)
        d(S, 4);
      else
        for (const q of S) q();
      kn.delete(v);
    }
  }, s ? n ? P(!0) : L = v.run() : c ? c(P.bind(null, !0), !0) : v.run(), R.pause = v.pause.bind(v), R.resume = v.resume.bind(v), R.stop = R, R;
}
function ks(e, s = 1 / 0, o) {
  if (s <= 0 || !tt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    ks(e.value, s, o);
  else if (ze(e))
    for (let n = 0; n < e.length; n++)
      ks(e[n], s, o);
  else if (wo(e) || uo(e))
    e.forEach((n) => {
      ks(n, s, o);
    });
  else if (si(e)) {
    for (const n in e)
      ks(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ks(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Zo(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    zn(l, s, o);
  }
}
function ts(e, s, o, n) {
  if (We(e)) {
    const l = Zo(e, s, o, n);
    return l && ei(l) && l.catch((i) => {
      zn(i, s, o);
    }), l;
  }
  if (ze(e)) {
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
      Cs(), Zo(i, null, 10, [
        e,
        d,
        m
      ]), xs();
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
let Ls = null, lo = 0;
const ki = /* @__PURE__ */ Promise.resolve();
let $n = null;
function en(e) {
  const s = $n || ki;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Pc(e) {
  let s = us + 1, o = It.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = It[n], i = Ho(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Wa(e) {
  if (!(e.flags & 1)) {
    const s = Ho(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Ho(o) ? It.push(e) : It.splice(Pc(s), 0, e), e.flags |= 1, $i();
  }
}
function $i() {
  $n || ($n = ki.then(xi));
}
function Rc(e) {
  ze(e) ? fo.push(...e) : Ls && e.id === -1 ? Ls.splice(lo + 1, 0, e) : e.flags & 1 || (fo.push(e), e.flags |= 1), $i();
}
function cl(e, s, o = us + 1) {
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
      (o, n) => Ho(o) - Ho(n)
    );
    if (fo.length = 0, Ls) {
      Ls.push(...s);
      return;
    }
    for (Ls = s, lo = 0; lo < Ls.length; lo++) {
      const o = Ls[lo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Ls = null, lo = 0;
  }
}
const Ho = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xi(e) {
  try {
    for (us = 0; us < It.length; us++) {
      const s = It[us];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), Zo(
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
function Ye(e, s) {
  if (yt === null)
    return e;
  const o = Gn(yt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, u, d = st] = s[l];
    i && (We(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ks(c), n.push({
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
    d && (Cs(), ts(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), xs());
  }
}
const Ii = Symbol("_vte"), Ei = (e) => e.__isTeleport, No = (e) => e && (e.disabled || e.disabled === ""), ul = (e) => e && (e.defer || e.defer === ""), dl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ya = (e, s) => {
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
      o: { insert: p, querySelector: k, createText: x, createComment: $ }
    } = m, R = No(s.props);
    let { shapeFlag: L, children: P, dynamicChildren: S } = s;
    if (e == null) {
      const q = s.el = x(""), B = s.anchor = x("");
      p(q, o, n), p(B, o, n);
      const A = (T, O) => {
        L & 16 && v(
          P,
          T,
          O,
          l,
          i,
          c,
          u,
          d
        );
      }, I = () => {
        const T = s.target = ya(s.props, k), O = Pi(T, s, x, p);
        T && (c !== "svg" && dl(T) ? c = "svg" : c !== "mathml" && fl(T) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), R || (A(T, O), pn(s, !1)));
      };
      R && (A(o, B), pn(s, !0)), ul(s.props) ? (s.el.__isMounted = !1, St(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (ul(s.props) && e.el.__isMounted === !1) {
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
      const q = s.anchor = e.anchor, B = s.target = e.target, A = s.targetAnchor = e.targetAnchor, I = No(e.props), T = I ? o : B, O = I ? q : A;
      if (c === "svg" || dl(B) ? c = "svg" : (c === "mathml" || fl(B)) && (c = "mathml"), S ? (w(
        e.dynamicChildren,
        S,
        T,
        l,
        i,
        c,
        u
      ), qa(e, s, !0)) : d || h(
        e,
        s,
        T,
        O,
        l,
        i,
        c,
        u,
        !1
      ), R)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : rn(
          s,
          o,
          q,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ce = s.target = ya(
          s.props,
          k
        );
        ce && rn(
          s,
          ce,
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
      pn(s, R);
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
      const p = i || !No(w);
      for (let k = 0; k < u.length; k++) {
        const x = u[k];
        n(
          x,
          s,
          o,
          p,
          !!x.dynamicChildren
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
  if (h && n(c, s, o), (!h || No(v)) && d & 16)
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
  function w(x, $, R, L) {
    $.anchor = h(
      c(x),
      $,
      u(x),
      o,
      n,
      l,
      i
    ), $.targetStart = R, $.targetAnchor = L;
  }
  const p = s.target = ya(
    s.props,
    d
  ), k = No(s.props);
  if (p) {
    const x = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (k)
        w(
          e,
          s,
          x,
          x && c(x)
        );
      else {
        s.anchor = c(e);
        let $ = x;
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
          x && c(x),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    pn(s, k);
  } else k && s.shapeFlag & 16 && w(e, s, e, c(e));
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
const _s = Symbol("_leaveCb"), cn = Symbol("_enterCb");
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
    const o = Ja(), n = Ri();
    return () => {
      const l = s.default && Ga(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Li(l), c = Xe(e), { mode: u } = c;
      if (n.isLeaving)
        return Zn(i);
      const d = ml(i);
      if (!d)
        return Zn(i);
      let m = Ko(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (h) => m = h
      );
      d.type !== bt && Zs(d, m);
      let v = o.subTree && ml(o.subTree);
      if (v && v.type !== bt && !Ys(v, d) && Di(o).type !== bt) {
        let h = Ko(
          v,
          c,
          n,
          o
        );
        if (Zs(v, h), u === "out-in" && d.type !== bt)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete h.afterLeave, v = void 0;
          }, Zn(i);
        u === "in-out" && d.type !== bt ? h.delayLeave = (w, p, k) => {
          const x = Oi(
            n,
            v
          );
          x[String(v.key)] = v, w[_s] = () => {
            p(), w[_s] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            k(), delete m.delayedLeave, v = void 0;
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
function Ko(e, s, o, n, l) {
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
    onAfterLeave: k,
    onLeaveCancelled: x,
    onBeforeAppear: $,
    onAppear: R,
    onAfterAppear: L,
    onAppearCancelled: P
  } = s, S = String(e.key), q = Oi(o, e), B = (T, O) => {
    T && ts(
      T,
      n,
      9,
      O
    );
  }, A = (T, O) => {
    const ce = O[1];
    B(T, O), ze(T) ? T.every((Y) => Y.length <= 1) && ce() : T.length <= 1 && ce();
  }, I = {
    mode: c,
    persisted: u,
    beforeEnter(T) {
      let O = d;
      if (!o.isMounted)
        if (i)
          O = $ || d;
        else
          return;
      T[_s] && T[_s](
        !0
        /* cancelled */
      );
      const ce = q[S];
      ce && Ys(e, ce) && ce.el[_s] && ce.el[_s](), B(O, [T]);
    },
    enter(T) {
      let O = m, ce = v, Y = h;
      if (!o.isMounted)
        if (i)
          O = R || m, ce = L || v, Y = P || h;
        else
          return;
      let j = !1;
      const te = T[cn] = (Q) => {
        j || (j = !0, Q ? B(Y, [T]) : B(ce, [T]), I.delayedLeave && I.delayedLeave(), T[cn] = void 0);
      };
      O ? A(O, [T, te]) : te();
    },
    leave(T, O) {
      const ce = String(e.key);
      if (T[cn] && T[cn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return O();
      B(w, [T]);
      let Y = !1;
      const j = T[_s] = (te) => {
        Y || (Y = !0, O(), te ? B(x, [T]) : B(k, [T]), T[_s] = void 0, q[ce] === e && delete q[ce]);
      };
      q[ce] = e, p ? A(p, [T, j]) : j();
    },
    clone(T) {
      const O = Ko(
        T,
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
function ml(e) {
  if (!Fn(e))
    return Ei(e.type) && e.children ? Li(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && We(o.default))
      return o.default();
  }
}
function Zs(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, Zs(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Ga(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let c = e[i];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === G ? (c.patchFlag & 128 && l++, n = n.concat(
      Ga(c.children, s, u)
    )) : (s || c.type !== bt) && n.push(u != null ? Ns(c, { key: u }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(e, s) {
  return We(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    gt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xn = /* @__PURE__ */ new WeakMap();
function Uo(e, s, o, n, l = !1) {
  if (ze(e)) {
    e.forEach(
      (k, x) => Uo(
        k,
        s && (ze(s) ? s[x] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (mo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Uo(e, s, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Gn(n.component) : n.el, c = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === st ? u.refs = {} : u.refs, h = u.setupState, w = Xe(h), p = h === st ? Zl : (k) => Ze(w, k);
  if (m != null && m !== d) {
    if (vl(s), ut(m))
      v[m] = null, p(m) && (h[m] = null);
    else if ($t(m)) {
      m.value = null;
      const k = s;
      k.k && (v[k.k] = null);
    }
  }
  if (We(d))
    Zo(d, u, 12, [c, v]);
  else {
    const k = ut(d), x = $t(d);
    if (k || x) {
      const $ = () => {
        if (e.f) {
          const R = k ? p(d) ? h[d] : v[d] : d.value;
          if (l)
            ze(R) && Da(R, i);
          else if (ze(R))
            R.includes(i) || R.push(i);
          else if (k)
            v[d] = [i], p(d) && (h[d] = v[d]);
          else {
            const L = [i];
            d.value = L, e.k && (v[e.k] = L);
          }
        } else k ? (v[d] = c, p(d) && (h[d] = c)) : x && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const R = () => {
          $(), xn.delete(e);
        };
        R.id = -1, xn.set(e, R), St(R, o);
      } else
        vl(e), $();
    }
  }
}
function vl(e) {
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
    Da(n[s], l);
  }, o);
}
function Bn(e, s, o = kt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...c) => {
      Cs();
      const u = tn(o), d = ts(s, o, e, c);
      return u(), xs(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Is = (e) => (s, o = kt) => {
  (!Jo || e === "sp") && Bn(e, (...n) => s(...n), o);
}, Uc = Is("bm"), et = Is("m"), zc = Is(
  "bu"
), Ui = Is("u"), zi = Is(
  "bum"
), to = Is("um"), Fc = Is(
  "sp"
), Bc = Is("rtg"), Vc = Is("rtc");
function Wc(e, s = kt) {
  Bn("ec", e, s);
}
const Gc = "components", Fi = Symbol.for("v-ndc");
function ja(e) {
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
      pl(l[e] || i[e], s) || // global registration
      pl(l.appContext[e], s)
    );
    return !c && n ? i : c;
  }
}
function pl(e, s) {
  return e && (e[s] || e[Wt(s)] || e[On(Wt(s))]);
}
function ge(e, s, o, n) {
  let l;
  const i = o, c = ze(e);
  if (c || ut(e)) {
    const u = c && Xs(e);
    let d = !1, m = !1;
    u && (d = !Bt(e), m = Ss(e), e = Un(e)), l = new Array(e.length);
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
    if (ze(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function qe(e, s, o = {}, n, l) {
  if (yt.ce || yt.parent && mo(yt.parent) && yt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), M(
      G,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Bi(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = M(
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
  return e.some((s) => Yo(s) ? !(s.type === bt || s.type === G && !Bi(s.children)) : !0) ? e : null;
}
const wa = (e) => e ? lr(e) ? Gn(e) : wa(e.parent) : null, zo = (
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
      Wa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = en.bind(e.proxy)),
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
    const m = zo[s];
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
    return !!(o[u] || e !== st && u[0] !== "$" && Ze(e, u) || ea(s, u) || Ze(i, u) || Ze(n, u) || Ze(zo, u) || Ze(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Ze(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function gl(e) {
  return ze(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let _a = !0;
function Kc(e) {
  const s = Wi(e), o = e.proxy, n = e.ctx;
  _a = !1, s.beforeCreate && hl(s.beforeCreate, e, "bc");
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
    updated: k,
    activated: x,
    deactivated: $,
    beforeDestroy: R,
    beforeUnmount: L,
    destroyed: P,
    unmounted: S,
    render: q,
    renderTracked: B,
    renderTriggered: A,
    errorCaptured: I,
    serverPrefetch: T,
    // public API
    expose: O,
    inheritAttrs: ce,
    // assets
    components: Y,
    directives: j,
    filters: te
  } = s;
  if (m && qc(m, n, null), c)
    for (const U in c) {
      const E = c[U];
      We(E) && (n[U] = E.bind(o));
    }
  if (l) {
    const U = l.call(o, o);
    tt(U) && (e.data = Fs(U));
  }
  if (_a = !0, i)
    for (const U in i) {
      const E = i[U], Z = We(E) ? E.bind(o, o) : We(E.get) ? E.get.bind(o, o) : vs, se = !We(E) && We(E.set) ? E.set.bind(o) : vs, $e = z({
        get: Z,
        set: se
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => $e.value,
        set: (Ee) => $e.value = Ee
      });
    }
  if (u)
    for (const U in u)
      Vi(u[U], n, o, U);
  if (d) {
    const U = We(d) ? d.call(o) : d;
    Reflect.ownKeys(U).forEach((E) => {
      eu(E, U[E]);
    });
  }
  v && hl(v, e, "c");
  function N(U, E) {
    ze(E) ? E.forEach((Z) => U(Z.bind(o))) : E && U(E.bind(o));
  }
  if (N(Uc, h), N(et, w), N(zc, p), N(Ui, k), N(Oc, x), N(Ac, $), N(Wc, I), N(Vc, B), N(Bc, A), N(zi, L), N(to, S), N(Fc, T), ze(O))
    if (O.length) {
      const U = e.exposed || (e.exposed = {});
      O.forEach((E) => {
        Object.defineProperty(U, E, {
          get: () => o[E],
          set: (Z) => o[E] = Z,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === vs && (e.render = q), ce != null && (e.inheritAttrs = ce), Y && (e.components = Y), j && (e.directives = j), T && Ai(e);
}
function qc(e, s, o = vs) {
  ze(e) && (e = ba(e));
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
function hl(e, s, o) {
  ts(
    ze(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Vi(e, s, o, n) {
  let l = n.includes(".") ? Hi(o, n) : () => o[n];
  if (ut(e)) {
    const i = s[e];
    We(i) && Ct(l, i);
  } else if (We(e))
    Ct(l, e.bind(o));
  else if (tt(e))
    if (ze(e))
      e.forEach((i) => Vi(i, s, o, n));
    else {
      const i = We(e.handler) ? e.handler.bind(o) : s[e.handler];
      We(i) && Ct(l, i, e);
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
  data: yl,
  props: wl,
  emits: wl,
  // objects
  methods: Do,
  computed: Do,
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
  components: Do,
  directives: Do,
  // watch
  watch: Xc,
  // provide / inject
  provide: yl,
  inject: Jc
};
function yl(e, s) {
  return s ? e ? function() {
    return gt(
      We(e) ? e.call(this, this) : e,
      We(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Jc(e, s) {
  return Do(ba(e), ba(s));
}
function ba(e) {
  if (ze(e)) {
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
function Do(e, s) {
  return e ? gt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function wl(e, s) {
  return e ? ze(e) && ze(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : gt(
    /* @__PURE__ */ Object.create(null),
    gl(e),
    gl(s ?? {})
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
    We(n) || (n = gt({}, n)), l != null && !tt(l) && (l = null);
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
        return c.has(v) || (v && We(v.install) ? (c.add(v), v.install(m, ...h)) : We(v) && (c.add(v), v(m, ...h))), m;
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
  const n = Ja();
  if (n || vo) {
    let l = vo ? vo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && We(s) ? s.call(n && n.proxy) : s;
  }
}
const tu = Symbol.for("v-scx"), su = () => gn(tu);
function Ct(e, s, o) {
  return ji(e, s, o);
}
function ji(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, u = gt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (Jo) {
    if (i === "sync") {
      const p = su();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = vs, p.resume = vs, p.pause = vs, p;
    }
  }
  const v = kt;
  u.call = (p, k, x) => ts(p, v, k, x);
  let h = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (h = !0, u.scheduler = (p, k) => {
    k ? p() : Wa(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), h && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Ec(e, s, u);
  return Jo && (m ? m.push(w) : d && w()), w;
}
function ou(e, s, o) {
  const n = this.proxy, l = ut(e) ? e.includes(".") ? Hi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  We(s) ? i = s : (i = s.handler, o = s);
  const c = tn(this), u = ji(l, i.bind(n), o);
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
  if (!We(e)) {
    const d = (m) => {
      const v = Ki(m, s, !0);
      v && (u = !0, gt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (tt(e) && n.set(e, null), null) : (ze(i) ? i.forEach((d) => c[d] = null) : gt(c, i), tt(e) && n.set(e, c), c);
}
function Vn(e, s) {
  return !e || !Dn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, zs(s)) || Ze(e, s));
}
function _l(e) {
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
    ctx: k,
    inheritAttrs: x
  } = e, $ = Cn(e);
  let R, L;
  try {
    if (o.shapeFlag & 4) {
      const S = l || n, q = S;
      R = ms(
        m.call(
          q,
          S,
          v,
          h,
          p,
          w,
          k
        )
      ), L = u;
    } else {
      const S = s;
      R = ms(
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
    Fo.length = 0, zn(S, e, 1), R = C(bt);
  }
  let P = R;
  if (L && x !== !1) {
    const S = Object.keys(L), { shapeFlag: q } = P;
    S.length && q & 7 && (i && S.some(Ma) && (L = ru(
      L,
      i
    )), P = Ns(P, L, !1, !0));
  }
  return o.dirs && (P = Ns(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(o.dirs) : o.dirs), o.transition && Zs(P, o.transition), R = P, Cn($), R;
}
const iu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Dn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, ru = (e, s) => {
  const o = {};
  for (const n in e)
    (!Ma(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
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
      return n ? bl(n, c, m) : !!c;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        const w = v[h];
        if (c[w] !== n[w] && !Vn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? bl(n, c, m) : !0 : !!c;
  return !1;
}
function bl(e, s, o) {
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
  } = e, u = Xe(l), [d] = e.propsOptions;
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
            const k = Wt(w);
            l[k] = ka(
              d,
              u,
              k,
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
  m && bs(e.attrs, "set", "");
}
function Xi(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (Lo(d))
        continue;
      const m = s[d];
      let v;
      l && Ze(l, v = Wt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Vn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, c = !0);
    }
  if (i) {
    const d = Xe(o), m = u || st;
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
      if (c.type !== Function && !c.skipFactory && We(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = tn(l);
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
  if (!We(e)) {
    const v = (h) => {
      d = !0;
      const [w, p] = Qi(h, s, !0);
      gt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return tt(e) && n.set(e, co), co;
  if (ze(i))
    for (let v = 0; v < i.length; v++) {
      const h = Wt(i[v]);
      kl(h) && (c[h] = st);
    }
  else if (i)
    for (const v in i) {
      const h = Wt(v);
      if (kl(h)) {
        const w = i[v], p = c[h] = ze(w) || We(w) ? { type: w } : gt({}, w), k = p.type;
        let x = !1, $ = !0;
        if (ze(k))
          for (let R = 0; R < k.length; ++R) {
            const L = k[R], P = We(L) && L.name;
            if (P === "Boolean") {
              x = !0;
              break;
            } else P === "String" && ($ = !1);
          }
        else
          x = We(k) && k.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = x, p[
          1
          /* shouldCastTrue */
        ] = $, (x || Ze(p, "default")) && u.push(h);
      }
    }
  const m = [c, u];
  return tt(e) && n.set(e, m), m;
}
function kl(e) {
  return e[0] !== "$" && !Lo(e);
}
const Ha = (e) => e === "_" || e === "_ctx" || e === "$stable", Ka = (e) => ze(e) ? e.map(ms) : [ms(e)], vu = (e, s, o) => {
  if (s._n)
    return s;
  const n = g((...l) => Ka(s(...l)), o);
  return n._c = !1, n;
}, Zi = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Ha(l)) continue;
    const i = e[l];
    if (We(i))
      s[l] = vu(l, i, n);
    else if (i != null) {
      const c = Ka(i);
      s[l] = () => c;
    }
  }
}, er = (e, s) => {
  const o = Ka(s);
  e.slots.default = () => o;
}, tr = (e, s, o) => {
  for (const n in s)
    (o || !Ha(n)) && (e[n] = s[n]);
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
      !Ha(u) && c[u] == null && delete l[u];
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
    setScopeId: p = vs,
    insertStaticContent: k
  } = e, x = (D, V, ne, ie = null, fe = null, me = null, Ce = void 0, xe = null, le = !!V.dynamicChildren) => {
    if (D === V)
      return;
    D && !Ys(D, V) && (ie = Ve(D), Ee(D, fe, me, !0), D = null), V.patchFlag === -2 && (le = !1, V.dynamicChildren = null);
    const { type: de, ref: Le, shapeFlag: Se } = V;
    switch (de) {
      case Wn:
        $(D, V, ne, ie);
        break;
      case bt:
        R(D, V, ne, ie);
        break;
      case sa:
        D == null && L(V, ne, ie, Ce);
        break;
      case G:
        Y(
          D,
          V,
          ne,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        );
        break;
      default:
        Se & 1 ? q(
          D,
          V,
          ne,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        ) : Se & 6 ? j(
          D,
          V,
          ne,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        ) : (Se & 64 || Se & 128) && de.process(
          D,
          V,
          ne,
          ie,
          fe,
          me,
          Ce,
          xe,
          le,
          Ge
        );
    }
    Le != null && fe ? Uo(Le, D && D.ref, me, V || D, !V) : Le == null && D && D.ref != null && Uo(D.ref, null, me, D, !0);
  }, $ = (D, V, ne, ie) => {
    if (D == null)
      n(
        V.el = u(V.children),
        ne,
        ie
      );
    else {
      const fe = V.el = D.el;
      V.children !== D.children && m(fe, V.children);
    }
  }, R = (D, V, ne, ie) => {
    D == null ? n(
      V.el = d(V.children || ""),
      ne,
      ie
    ) : V.el = D.el;
  }, L = (D, V, ne, ie) => {
    [D.el, D.anchor] = k(
      D.children,
      V,
      ne,
      ie,
      D.el,
      D.anchor
    );
  }, P = ({ el: D, anchor: V }, ne, ie) => {
    let fe;
    for (; D && D !== V; )
      fe = w(D), n(D, ne, ie), D = fe;
    n(V, ne, ie);
  }, S = ({ el: D, anchor: V }) => {
    let ne;
    for (; D && D !== V; )
      ne = w(D), l(D), D = ne;
    l(V);
  }, q = (D, V, ne, ie, fe, me, Ce, xe, le) => {
    if (V.type === "svg" ? Ce = "svg" : V.type === "math" && (Ce = "mathml"), D == null)
      B(
        V,
        ne,
        ie,
        fe,
        me,
        Ce,
        xe,
        le
      );
    else {
      const de = D.el && D.el._isVueCE ? D.el : null;
      try {
        de && de._beginPatch(), T(
          D,
          V,
          fe,
          me,
          Ce,
          xe,
          le
        );
      } finally {
        de && de._endPatch();
      }
    }
  }, B = (D, V, ne, ie, fe, me, Ce, xe) => {
    let le, de;
    const { props: Le, shapeFlag: Se, transition: ee, dirs: K } = D;
    if (le = D.el = c(
      D.type,
      me,
      Le && Le.is,
      Le
    ), Se & 8 ? v(le, D.children) : Se & 16 && I(
      D.children,
      le,
      null,
      ie,
      fe,
      ta(D, me),
      Ce,
      xe
    ), K && Gs(D, null, ie, "created"), A(le, D, D.scopeId, Ce, ie), Le) {
      for (const ye in Le)
        ye !== "value" && !Lo(ye) && i(le, ye, null, Le[ye], me, ie);
      "value" in Le && i(le, "value", null, Le.value, me), (de = Le.onVnodeBeforeMount) && is(de, ie, D);
    }
    K && Gs(D, null, ie, "beforeMount");
    const Me = wu(fe, ee);
    Me && ee.beforeEnter(le), n(le, V, ne), ((de = Le && Le.onVnodeMounted) || Me || K) && St(() => {
      de && is(de, ie, D), Me && ee.enter(le), K && Gs(D, null, ie, "mounted");
    }, fe);
  }, A = (D, V, ne, ie, fe) => {
    if (ne && p(D, ne), ie)
      for (let me = 0; me < ie.length; me++)
        p(D, ie[me]);
    if (fe) {
      let me = fe.subTree;
      if (V === me || or(me.type) && (me.ssContent === V || me.ssFallback === V)) {
        const Ce = fe.vnode;
        A(
          D,
          Ce,
          Ce.scopeId,
          Ce.slotScopeIds,
          fe.parent
        );
      }
    }
  }, I = (D, V, ne, ie, fe, me, Ce, xe, le = 0) => {
    for (let de = le; de < D.length; de++) {
      const Le = D[de] = xe ? Os(D[de]) : ms(D[de]);
      x(
        null,
        Le,
        V,
        ne,
        ie,
        fe,
        me,
        Ce,
        xe
      );
    }
  }, T = (D, V, ne, ie, fe, me, Ce) => {
    const xe = V.el = D.el;
    let { patchFlag: le, dynamicChildren: de, dirs: Le } = V;
    le |= D.patchFlag & 16;
    const Se = D.props || st, ee = V.props || st;
    let K;
    if (ne && js(ne, !1), (K = ee.onVnodeBeforeUpdate) && is(K, ne, V, D), Le && Gs(V, D, ne, "beforeUpdate"), ne && js(ne, !0), (Se.innerHTML && ee.innerHTML == null || Se.textContent && ee.textContent == null) && v(xe, ""), de ? O(
      D.dynamicChildren,
      de,
      xe,
      ne,
      ie,
      ta(V, fe),
      me
    ) : Ce || E(
      D,
      V,
      xe,
      null,
      ne,
      ie,
      ta(V, fe),
      me,
      !1
    ), le > 0) {
      if (le & 16)
        ce(xe, Se, ee, ne, fe);
      else if (le & 2 && Se.class !== ee.class && i(xe, "class", null, ee.class, fe), le & 4 && i(xe, "style", Se.style, ee.style, fe), le & 8) {
        const Me = V.dynamicProps;
        for (let ye = 0; ye < Me.length; ye++) {
          const he = Me[ye], W = Se[he], F = ee[he];
          (F !== W || he === "value") && i(xe, he, W, F, fe, ne);
        }
      }
      le & 1 && D.children !== V.children && v(xe, V.children);
    } else !Ce && de == null && ce(xe, Se, ee, ne, fe);
    ((K = ee.onVnodeUpdated) || Le) && St(() => {
      K && is(K, ne, V, D), Le && Gs(V, D, ne, "updated");
    }, ie);
  }, O = (D, V, ne, ie, fe, me, Ce) => {
    for (let xe = 0; xe < V.length; xe++) {
      const le = D[xe], de = V[xe], Le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        le.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (le.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ys(le, de) || // - In the case of a component, it could contain anything.
        le.shapeFlag & 198) ? h(le.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ne
        )
      );
      x(
        le,
        de,
        Le,
        null,
        ie,
        fe,
        me,
        Ce,
        !0
      );
    }
  }, ce = (D, V, ne, ie, fe) => {
    if (V !== ne) {
      if (V !== st)
        for (const me in V)
          !Lo(me) && !(me in ne) && i(
            D,
            me,
            V[me],
            null,
            fe,
            ie
          );
      for (const me in ne) {
        if (Lo(me)) continue;
        const Ce = ne[me], xe = V[me];
        Ce !== xe && me !== "value" && i(D, me, xe, Ce, fe, ie);
      }
      "value" in ne && i(D, "value", V.value, ne.value, fe);
    }
  }, Y = (D, V, ne, ie, fe, me, Ce, xe, le) => {
    const de = V.el = D ? D.el : u(""), Le = V.anchor = D ? D.anchor : u("");
    let { patchFlag: Se, dynamicChildren: ee, slotScopeIds: K } = V;
    K && (xe = xe ? xe.concat(K) : K), D == null ? (n(de, ne, ie), n(Le, ne, ie), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      ne,
      Le,
      fe,
      me,
      Ce,
      xe,
      le
    )) : Se > 0 && Se & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren ? (O(
      D.dynamicChildren,
      ee,
      ne,
      fe,
      me,
      Ce,
      xe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || fe && V === fe.subTree) && qa(
      D,
      V,
      !0
      /* shallow */
    )) : E(
      D,
      V,
      ne,
      Le,
      fe,
      me,
      Ce,
      xe,
      le
    );
  }, j = (D, V, ne, ie, fe, me, Ce, xe, le) => {
    V.slotScopeIds = xe, D == null ? V.shapeFlag & 512 ? fe.ctx.activate(
      V,
      ne,
      ie,
      Ce,
      le
    ) : te(
      V,
      ne,
      ie,
      fe,
      me,
      Ce,
      le
    ) : Q(D, V, le);
  }, te = (D, V, ne, ie, fe, me, Ce) => {
    const xe = D.component = Eu(
      D,
      ie,
      fe
    );
    if (Fn(D) && (xe.ctx.renderer = Ge), Tu(xe, !1, Ce), xe.asyncDep) {
      if (fe && fe.registerDep(xe, N, Ce), !D.el) {
        const le = xe.subTree = C(bt);
        R(null, le, V, ne), D.placeholder = le.el;
      }
    } else
      N(
        xe,
        D,
        V,
        ne,
        fe,
        me,
        Ce
      );
  }, Q = (D, V, ne) => {
    const ie = V.component = D.component;
    if (cu(D, V, ne))
      if (ie.asyncDep && !ie.asyncResolved) {
        U(ie, V, ne);
        return;
      } else
        ie.next = V, ie.update();
    else
      V.el = D.el, ie.vnode = V;
  }, N = (D, V, ne, ie, fe, me, Ce) => {
    const xe = () => {
      if (D.isMounted) {
        let { next: Se, bu: ee, u: K, parent: Me, vnode: ye } = D;
        {
          const Fe = sr(D);
          if (Fe) {
            Se && (Se.el = ye.el, U(D, Se, Ce)), Fe.asyncDep.then(() => {
              D.isUnmounted || xe();
            });
            return;
          }
        }
        let he = Se, W;
        js(D, !1), Se ? (Se.el = ye.el, U(D, Se, Ce)) : Se = ye, ee && vn(ee), (W = Se.props && Se.props.onVnodeBeforeUpdate) && is(W, Me, Se, ye), js(D, !0);
        const F = _l(D), ue = D.subTree;
        D.subTree = F, x(
          ue,
          F,
          // parent may have changed if it's in a teleport
          h(ue.el),
          // anchor may have changed if it's in a fragment
          Ve(ue),
          D,
          fe,
          me
        ), Se.el = F.el, he === null && uu(D, F.el), K && St(K, fe), (W = Se.props && Se.props.onVnodeUpdated) && St(
          () => is(W, Me, Se, ye),
          fe
        );
      } else {
        let Se;
        const { el: ee, props: K } = V, { bm: Me, m: ye, parent: he, root: W, type: F } = D, ue = mo(V);
        js(D, !1), Me && vn(Me), !ue && (Se = K && K.onVnodeBeforeMount) && is(Se, he, V), js(D, !0);
        {
          W.ce && // @ts-expect-error _def is private
          W.ce._def.shadowRoot !== !1 && W.ce._injectChildStyle(F);
          const Fe = D.subTree = _l(D);
          x(
            null,
            Fe,
            ne,
            ie,
            D,
            fe,
            me
          ), V.el = Fe.el;
        }
        if (ye && St(ye, fe), !ue && (Se = K && K.onVnodeMounted)) {
          const Fe = V;
          St(
            () => is(Se, he, Fe),
            fe
          );
        }
        (V.shapeFlag & 256 || he && mo(he.vnode) && he.vnode.shapeFlag & 256) && D.a && St(D.a, fe), D.isMounted = !0, V = ne = ie = null;
      }
    };
    D.scope.on();
    const le = D.effect = new ii(xe);
    D.scope.off();
    const de = D.update = le.run.bind(le), Le = D.job = le.runIfDirty.bind(le);
    Le.i = D, Le.id = D.uid, le.scheduler = () => Wa(Le), js(D, !0), de();
  }, U = (D, V, ne) => {
    V.component = D;
    const ie = D.vnode.props;
    D.vnode = V, D.next = null, fu(D, V.props, ie, ne), gu(D, V.children, ne), Cs(), cl(D), xs();
  }, E = (D, V, ne, ie, fe, me, Ce, xe, le = !1) => {
    const de = D && D.children, Le = D ? D.shapeFlag : 0, Se = V.children, { patchFlag: ee, shapeFlag: K } = V;
    if (ee > 0) {
      if (ee & 128) {
        se(
          de,
          Se,
          ne,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        );
        return;
      } else if (ee & 256) {
        Z(
          de,
          Se,
          ne,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        );
        return;
      }
    }
    K & 8 ? (Le & 16 && Te(de, fe, me), Se !== de && v(ne, Se)) : Le & 16 ? K & 16 ? se(
      de,
      Se,
      ne,
      ie,
      fe,
      me,
      Ce,
      xe,
      le
    ) : Te(de, fe, me, !0) : (Le & 8 && v(ne, ""), K & 16 && I(
      Se,
      ne,
      ie,
      fe,
      me,
      Ce,
      xe,
      le
    ));
  }, Z = (D, V, ne, ie, fe, me, Ce, xe, le) => {
    D = D || co, V = V || co;
    const de = D.length, Le = V.length, Se = Math.min(de, Le);
    let ee;
    for (ee = 0; ee < Se; ee++) {
      const K = V[ee] = le ? Os(V[ee]) : ms(V[ee]);
      x(
        D[ee],
        K,
        ne,
        null,
        fe,
        me,
        Ce,
        xe,
        le
      );
    }
    de > Le ? Te(
      D,
      fe,
      me,
      !0,
      !1,
      Se
    ) : I(
      V,
      ne,
      ie,
      fe,
      me,
      Ce,
      xe,
      le,
      Se
    );
  }, se = (D, V, ne, ie, fe, me, Ce, xe, le) => {
    let de = 0;
    const Le = V.length;
    let Se = D.length - 1, ee = Le - 1;
    for (; de <= Se && de <= ee; ) {
      const K = D[de], Me = V[de] = le ? Os(V[de]) : ms(V[de]);
      if (Ys(K, Me))
        x(
          K,
          Me,
          ne,
          null,
          fe,
          me,
          Ce,
          xe,
          le
        );
      else
        break;
      de++;
    }
    for (; de <= Se && de <= ee; ) {
      const K = D[Se], Me = V[ee] = le ? Os(V[ee]) : ms(V[ee]);
      if (Ys(K, Me))
        x(
          K,
          Me,
          ne,
          null,
          fe,
          me,
          Ce,
          xe,
          le
        );
      else
        break;
      Se--, ee--;
    }
    if (de > Se) {
      if (de <= ee) {
        const K = ee + 1, Me = K < Le ? V[K].el : ie;
        for (; de <= ee; )
          x(
            null,
            V[de] = le ? Os(V[de]) : ms(V[de]),
            ne,
            Me,
            fe,
            me,
            Ce,
            xe,
            le
          ), de++;
      }
    } else if (de > ee)
      for (; de <= Se; )
        Ee(D[de], fe, me, !0), de++;
    else {
      const K = de, Me = de, ye = /* @__PURE__ */ new Map();
      for (de = Me; de <= ee; de++) {
        const lt = V[de] = le ? Os(V[de]) : ms(V[de]);
        lt.key != null && ye.set(lt.key, de);
      }
      let he, W = 0;
      const F = ee - Me + 1;
      let ue = !1, Fe = 0;
      const Qe = new Array(F);
      for (de = 0; de < F; de++) Qe[de] = 0;
      for (de = K; de <= Se; de++) {
        const lt = D[de];
        if (W >= F) {
          Ee(lt, fe, me, !0);
          continue;
        }
        let dt;
        if (lt.key != null)
          dt = ye.get(lt.key);
        else
          for (he = Me; he <= ee; he++)
            if (Qe[he - Me] === 0 && Ys(lt, V[he])) {
              dt = he;
              break;
            }
        dt === void 0 ? Ee(lt, fe, me, !0) : (Qe[dt - Me] = de + 1, dt >= Fe ? Fe = dt : ue = !0, x(
          lt,
          V[dt],
          ne,
          null,
          fe,
          me,
          Ce,
          xe,
          le
        ), W++);
      }
      const vt = ue ? _u(Qe) : co;
      for (he = vt.length - 1, de = F - 1; de >= 0; de--) {
        const lt = Me + de, dt = V[lt], Rt = V[lt + 1], Ut = lt + 1 < Le ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : ie;
        Qe[de] === 0 ? x(
          null,
          dt,
          ne,
          Ut,
          fe,
          me,
          Ce,
          xe,
          le
        ) : ue && (he < 0 || de !== vt[he] ? $e(dt, ne, Ut, 2) : he--);
      }
    }
  }, $e = (D, V, ne, ie, fe = null) => {
    const { el: me, type: Ce, transition: xe, children: le, shapeFlag: de } = D;
    if (de & 6) {
      $e(D.component.subTree, V, ne, ie);
      return;
    }
    if (de & 128) {
      D.suspense.move(V, ne, ie);
      return;
    }
    if (de & 64) {
      Ce.move(D, V, ne, Ge);
      return;
    }
    if (Ce === G) {
      n(me, V, ne);
      for (let Se = 0; Se < le.length; Se++)
        $e(le[Se], V, ne, ie);
      n(D.anchor, V, ne);
      return;
    }
    if (Ce === sa) {
      P(D, V, ne);
      return;
    }
    if (ie !== 2 && de & 1 && xe)
      if (ie === 0)
        xe.beforeEnter(me), n(me, V, ne), St(() => xe.enter(me), fe);
      else {
        const { leave: Se, delayLeave: ee, afterLeave: K } = xe, Me = () => {
          D.ctx.isUnmounted ? l(me) : n(me, V, ne);
        }, ye = () => {
          me._isLeaving && me[_s](
            !0
            /* cancelled */
          ), Se(me, () => {
            Me(), K && K();
          });
        };
        ee ? ee(me, Me, ye) : ye();
      }
    else
      n(me, V, ne);
  }, Ee = (D, V, ne, ie = !1, fe = !1) => {
    const {
      type: me,
      props: Ce,
      ref: xe,
      children: le,
      dynamicChildren: de,
      shapeFlag: Le,
      patchFlag: Se,
      dirs: ee,
      cacheIndex: K
    } = D;
    if (Se === -2 && (fe = !1), xe != null && (Cs(), Uo(xe, null, ne, D, !0), xs()), K != null && (V.renderCache[K] = void 0), Le & 256) {
      V.ctx.deactivate(D);
      return;
    }
    const Me = Le & 1 && ee, ye = !mo(D);
    let he;
    if (ye && (he = Ce && Ce.onVnodeBeforeUnmount) && is(he, V, D), Le & 6)
      ke(D.component, ne, ie);
    else {
      if (Le & 128) {
        D.suspense.unmount(ne, ie);
        return;
      }
      Me && Gs(D, null, V, "beforeUnmount"), Le & 64 ? D.type.remove(
        D,
        V,
        ne,
        Ge,
        ie
      ) : de && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !de.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (me !== G || Se > 0 && Se & 64) ? Te(
        de,
        V,
        ne,
        !1,
        !0
      ) : (me === G && Se & 384 || !fe && Le & 16) && Te(le, V, ne), ie && Ue(D);
    }
    (ye && (he = Ce && Ce.onVnodeUnmounted) || Me) && St(() => {
      he && is(he, V, D), Me && Gs(D, null, V, "unmounted");
    }, ne);
  }, Ue = (D) => {
    const { type: V, el: ne, anchor: ie, transition: fe } = D;
    if (V === G) {
      Ke(ne, ie);
      return;
    }
    if (V === sa) {
      S(D);
      return;
    }
    const me = () => {
      l(ne), fe && !fe.persisted && fe.afterLeave && fe.afterLeave();
    };
    if (D.shapeFlag & 1 && fe && !fe.persisted) {
      const { leave: Ce, delayLeave: xe } = fe, le = () => Ce(ne, me);
      xe ? xe(D.el, me, le) : le();
    } else
      me();
  }, Ke = (D, V) => {
    let ne;
    for (; D !== V; )
      ne = w(D), l(D), D = ne;
    l(V);
  }, ke = (D, V, ne) => {
    const { bum: ie, scope: fe, job: me, subTree: Ce, um: xe, m: le, a: de } = D;
    $l(le), $l(de), ie && vn(ie), fe.stop(), me && (me.flags |= 8, Ee(Ce, D, V, ne)), xe && St(xe, V), St(() => {
      D.isUnmounted = !0;
    }, V);
  }, Te = (D, V, ne, ie = !1, fe = !1, me = 0) => {
    for (let Ce = me; Ce < D.length; Ce++)
      Ee(D[Ce], V, ne, ie, fe);
  }, Ve = (D) => {
    if (D.shapeFlag & 6)
      return Ve(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const V = w(D.anchor || D.el), ne = V && V[Ii];
    return ne ? w(ne) : V;
  };
  let we = !1;
  const ae = (D, V, ne) => {
    D == null ? V._vnode && Ee(V._vnode, null, null, !0) : x(
      V._vnode || null,
      D,
      V,
      null,
      null,
      null,
      ne
    ), V._vnode = D, we || (we = !0, cl(), Ci(), we = !1);
  }, Ge = {
    p: x,
    um: Ee,
    m: $e,
    r: Ue,
    mt: te,
    mc: I,
    pc: E,
    pbc: O,
    n: Ve,
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
function qa(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (ze(n) && ze(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Os(l[i]), u.el = c.el), !o && u.patchFlag !== -2 && qa(c, u)), u.type === Wn && // avoid cached text nodes retaining detached dom nodes
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
function $l(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const or = (e) => e.__isSuspense;
function bu(e, s) {
  s && s.pendingBranch ? ze(e) ? s.effects.push(...e) : s.effects.push(e) : Rc(e);
}
const G = Symbol.for("v-fgt"), Wn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), sa = Symbol.for("v-stc"), Fo = [];
let At = null;
function a(e = !1) {
  Fo.push(At = e ? null : []);
}
function ku() {
  Fo.pop(), At = Fo[Fo.length - 1] || null;
}
let qo = 1;
function In(e, s = !1) {
  qo += e, e < 0 && At && s && (At.hasOnce = !0);
}
function nr(e) {
  return e.dynamicChildren = qo > 0 ? At || co : null, ku(), qo > 0 && At && At.push(e), e;
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
function M(e, s, o, n, l) {
  return nr(
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
function Yo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ys(e, s) {
  return e.type === s.type && e.key === s.key;
}
const ar = ({ key: e }) => e ?? null, hn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ut(e) || $t(e) || We(e) ? { i: yt, r: e, k: s, f: !!o } : e : null);
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
  return u ? (Ya(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ut(o) ? 8 : 16), qo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  At && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && At.push(d), d;
}
const C = $u;
function $u(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Fi) && (e = bt), Yo(e)) {
    const u = Ns(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Ya(u, o), qo > 0 && !i && At && (u.shapeFlag & 6 ? At[At.indexOf(e)] = u : At.push(u)), u.patchFlag = -2, u;
  }
  if (Lu(e) && (e = e.__vccOpts), s) {
    s = Cu(s);
    let { class: u, style: d } = s;
    u && !ut(u) && (s.class = Ie(u)), tt(d) && (Va(d) && !ze(d) && (d = gt({}, d)), s.style = Gt(d));
  }
  const c = ut(e) ? 1 : or(e) ? 128 : Ei(e) ? 64 : tt(e) ? 4 : We(e) ? 2 : 0;
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
  return e ? Va(e) || Ji(e) ? gt({}, e) : e : null;
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
      o && i ? ze(i) ? i.concat(hn(s)) : [i, hn(s)] : hn(s)
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
function _(e = " ", s = 0) {
  return C(Wn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), M(bt, null, e)) : C(bt, null, e);
}
function ms(e) {
  return e == null || typeof e == "boolean" ? C(bt) : ze(e) ? C(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yo(e) ? Os(e) : C(Wn, null, String(e));
}
function Os(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ns(e);
}
function Ya(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (ze(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Ya(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Ji(s) ? s._ctx = yt : l === 3 && yt && (yt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else We(s) ? (s = { default: s, _ctx: yt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [_(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function xu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Ie([s.class, n.class]));
      else if (l === "style")
        s.style = Gt([s.style, n.style]);
      else if (Dn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(ze(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
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
const Ja = () => kt || yt;
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
    (o) => Jo = o
  );
}
const tn = (e) => {
  const s = kt;
  return En(e), e.scope.on(), () => {
    e.scope.off(), En(s);
  };
}, Cl = () => {
  kt && kt.scope.off(), En(null);
};
function lr(e) {
  return e.vnode.shapeFlag & 4;
}
let Jo = !1;
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
    Cs();
    const l = e.setupContext = n.length > 1 ? Mu(e) : null, i = tn(e), c = Zo(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = ei(c);
    if (xs(), i(), (u || e.sp) && !mo(e) && Ai(e), u) {
      if (c.then(Cl, Cl), s)
        return c.then((d) => {
          xl(e, d);
        }).catch((d) => {
          zn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      xl(e, c);
  } else
    ir(e);
}
function xl(e, s, o) {
  We(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : tt(s) && (e.setupState = bi(s)), ir(e);
}
function ir(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || vs);
  {
    const l = tn(e);
    Cs();
    try {
      Kc(e);
    } finally {
      xs(), l();
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
      if (o in zo)
        return zo[o](e);
    },
    has(s, o) {
      return o in s || o in zo;
    }
  })) : e.proxy;
}
function Du(e, s = !0) {
  return We(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Lu(e) {
  return We(e) && "__vccOpts" in e;
}
const z = (e, s) => Sc(e, s, Jo);
function sn(e, s, o) {
  try {
    In(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !ze(s) ? Yo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Yo(o) && (o = [o]), C(e, s, o));
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
const Sl = typeof window < "u" && window.trustedTypes;
if (Sl)
  try {
    Ca = /* @__PURE__ */ Sl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rr = Ca ? (e) => Ca.createHTML(e) : (e) => e, Au = "http://www.w3.org/2000/svg", Nu = "http://www.w3.org/1998/Math/MathML", ws = typeof document < "u" ? document : null, Il = ws && /* @__PURE__ */ ws.createElement("template"), Uu = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ws.createElementNS(Au, e) : s === "mathml" ? ws.createElementNS(Nu, e) : o ? ws.createElement(e, { is: o }) : ws.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => ws.createTextNode(e),
  createComment: (e) => ws.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ws.querySelector(e),
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
      Il.innerHTML = rr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Il.content;
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
}, Rs = "transition", Io = "animation", ho = Symbol("_vtc"), cr = {
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
  (e, { slots: s }) => sn(Lc, dr(e), s)
), Hs = (e, s = []) => {
  ze(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, El = (e) => e ? ze(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
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
  } = e, k = Bu(l), x = k && k[0], $ = k && k[1], {
    onBeforeEnter: R,
    onEnter: L,
    onEnterCancelled: P,
    onLeave: S,
    onLeaveCancelled: q,
    onBeforeAppear: B = R,
    onAppear: A = L,
    onAppearCancelled: I = P
  } = s, T = (Y, j, te, Q) => {
    Y._enterCancelled = Q, Ms(Y, j ? v : u), Ms(Y, j ? m : c), te && te();
  }, O = (Y, j) => {
    Y._isLeaving = !1, Ms(Y, h), Ms(Y, p), Ms(Y, w), j && j();
  }, ce = (Y) => (j, te) => {
    const Q = Y ? A : L, N = () => T(j, Y, te);
    Hs(Q, [j, N]), Tl(() => {
      Ms(j, Y ? d : i), cs(j, Y ? v : u), El(Q) || Pl(j, n, x, N);
    });
  };
  return gt(s, {
    onBeforeEnter(Y) {
      Hs(R, [Y]), cs(Y, i), cs(Y, c);
    },
    onBeforeAppear(Y) {
      Hs(B, [Y]), cs(Y, d), cs(Y, m);
    },
    onEnter: ce(!1),
    onAppear: ce(!0),
    onLeave(Y, j) {
      Y._isLeaving = !0;
      const te = () => O(Y, j);
      cs(Y, h), Y._enterCancelled ? (cs(Y, w), xa(Y)) : (xa(Y), cs(Y, w)), Tl(() => {
        Y._isLeaving && (Ms(Y, h), cs(Y, p), El(S) || Pl(Y, n, $, te));
      }), Hs(S, [Y, te]);
    },
    onEnterCancelled(Y) {
      T(Y, !1, void 0, !0), Hs(P, [Y]);
    },
    onAppearCancelled(Y) {
      T(Y, !0, void 0, !0), Hs(I, [Y]);
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
function Ms(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[ho];
  o && (o.delete(s), o.size || (e[ho] = void 0));
}
function Tl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Vu = 0;
function Pl(e, s, o, n) {
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
  const o = window.getComputedStyle(e), n = (k) => (o[k] || "").split(", "), l = n(`${Rs}Delay`), i = n(`${Rs}Duration`), c = Rl(l, i), u = n(`${Io}Delay`), d = n(`${Io}Duration`), m = Rl(u, d);
  let v = null, h = 0, w = 0;
  s === Rs ? c > 0 && (v = Rs, h = c, w = i.length) : s === Io ? m > 0 && (v = Io, h = m, w = d.length) : (h = Math.max(c, m), v = h > 0 ? c > m ? Rs : Io : null, w = v ? v === Rs ? i.length : d.length : 0);
  const p = v === Rs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Rs}Property`).toString()
  );
  return {
    type: v,
    timeout: h,
    propCount: w,
    hasTransform: p
  };
}
function Rl(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Ml(o) + Ml(e[n])));
}
function Ml(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Wu(e, s, o) {
  const n = e[ho];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Dl = Symbol("_vod"), Gu = Symbol("_vsh"), ju = Symbol(""), Hu = /(?:^|;)\s*display\s*:/;
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
  Dl in e && (e[Dl] = i ? n.display : "", e[Gu] && (n.display = "none"));
}
const Ll = /\s*!important$/;
function yn(e, s, o) {
  if (ze(o))
    o.forEach((n) => yn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = qu(e, s);
    Ll.test(o) ? e.setProperty(
      zs(n),
      o.replace(Ll, ""),
      "important"
    ) : e[n] = o;
  }
}
const Ol = ["Webkit", "Moz", "ms"], na = {};
function qu(e, s) {
  const o = na[s];
  if (o)
    return o;
  let n = Wt(s);
  if (n !== "filter" && n in e)
    return na[s] = n;
  n = On(n);
  for (let l = 0; l < Ol.length; l++) {
    const i = Ol[l] + n;
    if (i in e)
      return na[s] = i;
  }
  return s;
}
const Al = "http://www.w3.org/1999/xlink";
function Nl(e, s, o, n, l, i = Qr(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Al, s.slice(6, s.length)) : e.setAttributeNS(Al, s, o) : o == null || i && !ni(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : Zt(o) ? String(o) : o
  );
}
function Ul(e, s, o, n, l) {
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
function $s(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function Yu(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const zl = Symbol("_vei");
function Ju(e, s, o, n, l = null) {
  const i = e[zl] || (e[zl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = Xu(s);
    if (n) {
      const m = i[s] = ed(
        n,
        l
      );
      $s(e, u, m, d);
    } else c && (Yu(e, u, c, d), i[s] = void 0);
  }
}
const Fl = /(?:Once|Passive|Capture)$/;
function Xu(e) {
  let s;
  if (Fl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(Fl); )
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
  if (ze(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return s;
}
const Bl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sd = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Wu(e, n, c) : s === "style" ? Ku(e, o, n) : Dn(s) ? Ma(s) || Ju(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : od(e, s, n, c)) ? (Ul(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Nl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ut(n)) ? Ul(e, Wt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Nl(e, s, n, c));
};
function od(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Bl(s) && We(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Bl(s) && ut(o) ? !1 : s in e;
}
const mr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Tn = Symbol("_moveCb"), Vl = Symbol("_enterCb"), nd = (e) => (delete e.props.mode, e), ad = /* @__PURE__ */ nd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ gt({}, ur, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Ja(), n = Ri();
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
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", h), m[Tn] = null, Ms(m, c));
        };
        m.addEventListener("transitionend", h);
      }), l = [];
    }), () => {
      const c = Xe(e), u = dr(c);
      let d = c.tag || G;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), Zs(
            v,
            Ko(
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
      i = s.default ? Ga(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && Zs(
          v,
          Ko(v, u, n, o)
        );
      }
      return C(d, null, i);
    };
  }
}), ld = ad;
function id(e) {
  const s = e.el;
  s[Tn] && s[Tn](), s[Vl] && s[Vl]();
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
  return ze(s) ? (o) => vn(s, o) : s;
};
function dd(e) {
  e.target.composing = !0;
}
function Wl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Vt = Symbol("_assign");
function Gl(e, s, o) {
  return s && (e = e.trim()), o && (e = An(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Vt] = Us(l);
    const i = n || l.props && l.props.type === "number";
    $s(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Vt](Gl(e.value, o, i));
    }), (o || i) && $s(e, "change", () => {
      e.value = Gl(e.value, o, i);
    }), s || ($s(e, "compositionstart", dd), $s(e, "compositionend", Wl), $s(e, "change", Wl));
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
}, Xo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Vt] = Us(o), $s(e, "change", () => {
      const n = e._modelValue, l = yo(e), i = e.checked, c = e[Vt];
      if (ze(n)) {
        const u = Oa(n, l), d = u !== -1;
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
  mounted: jl,
  beforeUpdate(e, s, o) {
    e[Vt] = Us(o), jl(e, s, o);
  }
};
function jl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (ze(s))
    l = Oa(s, n.props.value) > -1;
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
    e.checked = Qs(s, o.props.value), e[Vt] = Us(o), $s(e, "change", () => {
      e[Vt](yo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Vt] = Us(n), s !== o && (e.checked = Qs(s, n.props.value));
  }
}, ps = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = wo(s);
    $s(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? An(yo(c)) : yo(c)
      );
      e[Vt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, en(() => {
        e._assigning = !1;
      });
    }), e[Vt] = Us(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Hl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Vt] = Us(o);
  },
  updated(e, { value: s }) {
    e._assigning || Hl(e, s);
  }
};
function Hl(e, s) {
  const o = e.multiple, n = ze(s);
  if (!(o && !n && !wo(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const c = e.options[l], u = yo(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = Oa(s, u) > -1;
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
      return ps;
    case "TEXTAREA":
      return Nt;
    default:
      switch (s) {
        case "checkbox":
          return Xo;
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
}, rt = (e, s) => {
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
let Kl;
function hd() {
  return Kl || (Kl = hu(gd));
}
const Hn = ((...e) => {
  const s = hd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = wd(n);
    if (!l) return;
    const i = s._component;
    !We(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
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
}, xd = /* @__PURE__ */ ve({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", _d, [
      s.$slots.header ? (a(), r("div", bd, [
        qe(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", kd, [
        qe(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", $d, [
        qe(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Cd, [
        qe(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), pe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ pe(xd, [["__scopeId", "data-v-21565df9"]]), Sd = {
  key: 0,
  class: "panel-title-prefix"
}, Id = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ed = /* @__PURE__ */ ve({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), M(ja(`h${e.level}`), {
      class: Ie(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (a(), r("span", Sd, f(e.prefix), 1)) : (a(), r("span", Id)),
        qe(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Td = /* @__PURE__ */ pe(Ed, [["__scopeId", "data-v-c3875efc"]]), Pd = ["title"], Rd = ["width", "height"], Md = /* @__PURE__ */ ve({
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
}), gr = /* @__PURE__ */ pe(Md, [["__scopeId", "data-v-6fc7f16d"]]), Dd = { class: "header-left" }, Ld = {
  key: 0,
  class: "header-actions"
}, Od = /* @__PURE__ */ ve({
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
      class: Ie(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Dd, [
        C(Td, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            _(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), M(gr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Ld, [
        qe(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ pe(Od, [["__scopeId", "data-v-55a62cd6"]]), Ad = {
  key: 0,
  class: "section-title-count"
}, Nd = {
  key: 1,
  class: "section-title-icon"
}, Ud = /* @__PURE__ */ ve({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), M(ja(`h${e.level}`), {
      class: Ie(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Ad, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Nd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ot = /* @__PURE__ */ pe(Ud, [["__scopeId", "data-v-559361eb"]]), zd = { class: "status-grid" }, Fd = { class: "status-grid__columns" }, Bd = { class: "status-grid__column" }, Vd = { class: "status-grid__title" }, Wd = { class: "status-grid__column status-grid__column--right" }, Gd = { class: "status-grid__title" }, jd = {
  key: 0,
  class: "status-grid__footer"
}, Hd = /* @__PURE__ */ ve({
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
          qe(s.$slots, "left", {}, void 0)
        ]),
        t("div", Wd, [
          t("h4", Gd, f(e.rightTitle), 1),
          qe(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", jd, [
        qe(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Kd = /* @__PURE__ */ pe(Hd, [["__scopeId", "data-v-73b7ba3f"]]), qd = {
  key: 0,
  class: "status-item__icon"
}, Yd = {
  key: 1,
  class: "status-item__count"
}, Jd = { class: "status-item__label" }, Xd = /* @__PURE__ */ ve({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = z(() => `status-item--${s.variant}`);
    return (n, l) => (a(), r("div", {
      class: Ie(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", qd, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", Yd, f(e.count), 1)) : y("", !0),
      t("span", Jd, f(e.label), 1)
    ], 2));
  }
}), rs = /* @__PURE__ */ pe(Xd, [["__scopeId", "data-v-6f929183"]]), Qd = { class: "issue-card__header" }, Zd = { class: "issue-card__icon" }, ef = { class: "issue-card__title" }, tf = {
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
}, af = /* @__PURE__ */ ve({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = z(() => `issue-card--${s.severity}`);
    return (n, l) => (a(), r("div", {
      class: Ie(["issue-card", o.value])
    }, [
      t("div", Qd, [
        t("span", Zd, f(e.icon), 1),
        t("h4", ef, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", tf, [
        e.description ? (a(), r("p", sf, f(e.description), 1)) : y("", !0),
        qe(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", of, [
        (a(!0), r(G, null, ge(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", nf, [
        qe(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ pe(af, [["__scopeId", "data-v-df6aa348"]]), lf = ["type", "disabled"], rf = {
  key: 0,
  class: "spinner"
}, cf = /* @__PURE__ */ ve({
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
      class: Ie(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", rf)) : y("", !0),
      e.loading ? y("", !0) : qe(s.$slots, "default", { key: 1 }, void 0)
    ], 10, lf));
  }
}), re = /* @__PURE__ */ pe(cf, [["__scopeId", "data-v-772abe47"]]), uf = { class: "empty-state" }, df = {
  key: 0,
  class: "empty-icon"
}, ff = { class: "empty-message" }, mf = /* @__PURE__ */ ve({
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
      e.actionLabel ? (a(), M(re, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("action"))
      }, {
        default: g(() => [
          _(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ pe(mf, [["__scopeId", "data-v-4466284f"]]), vf = /* @__PURE__ */ ve({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ie(["detail-label"]),
      style: Gt({ minWidth: e.minWidth })
    }, [
      qe(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), wn = /* @__PURE__ */ pe(vf, [["__scopeId", "data-v-75e9eeb8"]]), pf = /* @__PURE__ */ ve({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ie(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      qe(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Sa = /* @__PURE__ */ pe(pf, [["__scopeId", "data-v-2f186e4c"]]), gf = { class: "detail-row" }, hf = /* @__PURE__ */ ve({
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
      C(wn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          _(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), M(Sa, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          _(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : qe(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), ft = /* @__PURE__ */ pe(hf, [["__scopeId", "data-v-ef15664a"]]), yf = { class: "modal-header" }, wf = { class: "modal-body" }, _f = { class: "status-section" }, bf = {
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
}, Bm = { class: "modal-actions" }, Vm = /* @__PURE__ */ ve({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = b(!1);
    et(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), Ct(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = z(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : k.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = z(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : k.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), i = z(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : k.filter((x) => {
        var R, L, P;
        const $ = (P = (L = (R = s.status) == null ? void 0 : R.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : P.find((S) => S.name === x);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = z(() => {
      var w, p, k, x, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((k = s.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = z(() => {
      var p, k, x;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = z(() => {
      var w, p, k, x, $, R;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((k = s.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((R = ($ = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : R.length) ?? 0) === 0;
    }), m = z(() => {
      var p, k;
      const w = (k = (p = s.status) == null ? void 0 : p.git_changes) == null ? void 0 : k.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function h(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, p) => {
      var k, x, $, R, L, P, S, q, B, A, I, T, O, ce, Y, j, te, Q, N, U, E, Z;
      return a(), M(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (se) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", yf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (se) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", wf, [
              t("div", _f, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[9] || (p[9] = [
                    _("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(ft, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", bf, [
                t("div", kf, [
                  C(Ot, { level: "4" }, {
                    default: g(() => [...p[10] || (p[10] = [
                      _("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (se) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", $f, [
                  t("div", Cf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", xf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (a(!0), r(G, null, ge(n.value, (se) => (a(), r("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      t("span", If, f(se.name), 1),
                      t("span", Ef, f(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Tf, [
                  t("div", Pf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Rf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Mf, [
                    (a(!0), r(G, null, ge(l.value, (se) => (a(), r("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      t("span", Df, f(se.name), 1),
                      t("span", Lf, f(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (k = e.status.workflows) == null ? void 0 : k.new) != null && x.length ? (a(), r("div", Of, [
                  t("div", Af, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Nf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Uf, [
                    (a(!0), r(G, null, ge(e.status.workflows.new, (se) => (a(), r("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      t("span", zf, f(se), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (R = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && R.length ? (a(), r("div", Ff, [
                  t("div", Bf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Vf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Wf, [
                    (a(!0), r(G, null, ge(e.status.workflows.modified, (se) => (a(), r("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      t("span", Gf, f(se), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = (L = e.status.workflows) == null ? void 0 : L.deleted) != null && P.length ? (a(), r("div", jf, [
                  t("div", Hf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Kf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", qf, [
                    (a(!0), r(G, null, ge(e.status.workflows.deleted, (se) => (a(), r("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      t("span", Yf, f(se), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", Jf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (se) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Xf, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", Qf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", Zf, [
                    (a(!0), r(G, null, ge(i.value, (se) => (a(), r("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      t("span", em, f(se), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), r("div", tm, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[17] || (p[17] = [
                    _("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (S = e.status.git_changes) == null ? void 0 : S.nodes_added) != null && q.length ? (a(), r("div", sm, [
                  t("div", om, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", nm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", am, [
                    (a(!0), r(G, null, ge(e.status.git_changes.nodes_added, (se) => (a(), r("div", {
                      key: v(se),
                      class: "change-item"
                    }, [
                      t("span", lm, f(v(se)), 1),
                      h(se) ? (a(), r("span", im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (A = (B = e.status.git_changes) == null ? void 0 : B.nodes_removed) != null && A.length ? (a(), r("div", rm, [
                  t("div", cm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", um, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", dm, [
                    (a(!0), r(G, null, ge(e.status.git_changes.nodes_removed, (se) => (a(), r("div", {
                      key: v(se),
                      class: "change-item"
                    }, [
                      t("span", fm, f(v(se)), 1),
                      h(se) ? (a(), r("span", mm, "dev")) : y("", !0)
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
                (T = e.status.git_changes) != null && T.has_other_changes ? (a(), r("div", ym, [...p[21] || (p[21] = [
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
                  C(Ot, { level: "4" }, {
                    default: g(() => [...p[22] || (p[22] = [
                      _("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (se) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Y = (ce = e.status.comparison) == null ? void 0 : ce.missing_nodes) != null && Y.length ? (a(), r("div", bm, [
                  C(ft, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", km, [
                    (a(!0), r(G, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (se) => (a(), r("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + f(se), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", $m, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (te = (j = e.status.comparison) == null ? void 0 : j.extra_nodes) != null && te.length ? (a(), r("div", Cm, [
                  C(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", xm, [
                    (a(!0), r(G, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (se) => (a(), r("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + f(se), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Sm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (N = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && N.length ? (a(), r("div", Im, [
                  C(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Em, [
                    (a(!0), r(G, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (se) => (a(), r("div", {
                      key: se.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      _(f(se.name) + ": ", 1),
                      t("span", Tm, f(se.actual), 1),
                      p[23] || (p[23] = _(" → ", -1)),
                      t("span", Pm, f(se.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Rm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((U = e.status.comparison) == null ? void 0 : U.packages_in_sync) === !1 ? (a(), r("div", Mm, [
                  C(ft, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Dm, [
                  C(re, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (se) => w.$emit("repair"))
                  }, {
                    default: g(() => [...p[24] || (p[24] = [
                      _(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (Z = (E = e.status.comparison) == null ? void 0 : E.disabled_nodes) != null && Z.length ? (a(), r("div", Lm, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[27] || (p[27] = [
                    _("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Om, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Am, [
                  (a(!0), r(G, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (se) => (a(), r("div", {
                    key: se,
                    class: "drift-list-item"
                  }, " • " + f(se), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Nm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Um, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[29] || (p[29] = [
                    _("MISSING MODELS", -1)
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
              C(re, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (se) => w.$emit("close"))
              }, {
                default: g(() => [...p[33] || (p[33] = [
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
}), Wm = /* @__PURE__ */ pe(Vm, [["__scopeId", "data-v-e2b37122"]]), Gm = { class: "health-section-header" }, jm = { class: "suggestions-content" }, Hm = { class: "suggestions-text" }, Km = { style: { "margin-top": "var(--cg-space-3)" } }, qm = {
  key: 1,
  class: "no-issues-text"
}, Ym = /* @__PURE__ */ ve({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = b(!1), i = b(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, m("view-workflows");
    }
    function d() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = b(!1), h = b(!1);
    function w() {
      h.value = !0, m("repair-environment");
    }
    function p() {
      h.value = !1;
    }
    function k() {
      l.value = !1;
    }
    const x = z(() => {
      const Q = n.status.workflows.analyzed || [], N = Q.filter(
        (U) => U.unresolved_models_count > 0 || U.ambiguous_models_count > 0
      );
      return N.length === 0 && n.status.missing_models_count > 0 ? Q.filter((U) => U.sync_state === "synced") : N;
    });
    function $() {
      const Q = x.value;
      Q.length !== 0 && (v.value = !0, m("repair-missing-models", Q.map((N) => N.name)));
    }
    function R() {
      v.value = !1;
    }
    s({ resetRepairingState: R, resetRepairingEnvironmentState: p, closeDetailModal: k });
    const L = z(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), P = z(() => n.status.has_changes), S = z(() => {
      const Q = n.status.git_changes;
      return Q.nodes_added.length > 0 || Q.nodes_removed.length > 0 || Q.workflow_changes;
    }), q = z(() => n.status.has_changes || L.value), B = z(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), A = z(() => n.status.git_changes.has_other_changes), I = z(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter((N) => N.status === "broken")) || [];
    }), T = z(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), O = z(() => I.value.length > 0), ce = z(() => O.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = z(() => {
      const Q = [];
      return n.status.workflows.new.length > 0 && Q.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Q.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Q.push(`${n.status.workflows.deleted.length} deleted`), Q.length > 0 ? `${Q.join(", ")} workflow${Q.length === 1 && !Q[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), j = z(() => {
      var U, E;
      const Q = [], N = n.status.comparison;
      return (U = N.missing_nodes) != null && U.length && Q.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (E = N.extra_nodes) != null && E.length && Q.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), Q.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Q.join(" and ")}.`;
    }), te = z(() => {
      var U, E;
      const Q = [], N = n.status.comparison;
      return (U = N.extra_nodes) != null && U.length && (N.extra_nodes.slice(0, 3).forEach((Z) => {
        Q.push(`Untracked: ${Z}`);
      }), N.extra_nodes.length > 3 && Q.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (E = N.missing_nodes) != null && E.length && (N.missing_nodes.slice(0, 3).forEach((Z) => {
        Q.push(`Missing: ${Z}`);
      }), N.missing_nodes.length > 3 && Q.push(`...and ${N.missing_nodes.length - 3} more missing`)), Q;
    });
    return (Q, N) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, { title: "STATUS" })
        ]),
        content: g(() => [
          n.setupState === "no_workspace" ? (a(), M(Kt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (U) => Q.$emit("start-setup"))
              }, {
                default: g(() => [...N[13] || (N[13] = [
                  _(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), M(Kt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (U) => Q.$emit("view-environments"))
              }, {
                default: g(() => [...N[14] || (N[14] = [
                  _(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), M(Kt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (U) => Q.$emit("create-environment"))
              }, {
                default: g(() => [...N[15] || (N[15] = [
                  _(" Create Environment ", -1)
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
              C(Ot, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...N[16] || (N[16] = [
                  _(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Fu, { name: "fade" }, {
                default: g(() => [
                  i.value ? (a(), M(re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: g(() => [...N[17] || (N[17] = [
                      _(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(Kd, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, eo({
              left: g(() => [
                e.status.workflows.new.length ? (a(), M(rs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), M(rs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), M(rs, {
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
                  separator: L.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (a(), M(rs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), M(rs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), M(rs, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                A.value ? (a(), M(rs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                P.value && !S.value && !A.value ? (a(), M(rs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                P.value ? y("", !0) : (a(), M(rs, {
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
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (U) => Q.$emit("commit-changes"))
                    }, {
                      default: g(() => [...N[18] || (N[18] = [
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
          e.status.is_detached_head ? (a(), M(Kt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (U) => Q.$emit("create-branch"))
              }, {
                default: g(() => [...N[20] || (N[20] = [
                  _(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", Km, [
            C(Ot, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...N[21] || (N[21] = [
                _(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ce.value ? (a(), r(G, { key: 0 }, [
              I.value.length > 0 ? (a(), M(Kt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((U) => `${U.name} — ${U.issue_summary}`)
              }, {
                actions: g(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (U) => Q.$emit("view-workflows"))
                  }, {
                    default: g(() => [...N[22] || (N[22] = [
                      _(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              T.value.length > 0 ? (a(), M(Kt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((U) => `${U.name} — ${U.models_needing_path_sync_count} model path${U.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (U) => Q.$emit("view-workflows"))
                  }, {
                    default: g(() => [...N[23] || (N[23] = [
                      _(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !O.value ? (a(), M(Kt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: $
                  }, {
                    default: g(() => [
                      _(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (U) => Q.$emit("view-workflows"))
                  }, {
                    default: g(() => [...N[24] || (N[24] = [
                      _(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), M(Kt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: j.value,
                items: te.value
              }, {
                actions: g(() => [
                  C(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...N[25] || (N[25] = [
                      _(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (U) => Q.$emit("view-nodes"))
                  }, {
                    default: g(() => [...N[26] || (N[26] = [
                      _(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), M(Kt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[11] || (N[11] = (U) => Q.$emit("view-nodes"))
                  }, {
                    default: g(() => [...N[27] || (N[27] = [
                      _(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : q.value ? (a(), r("span", qm, "No issues")) : (a(), M(ss, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Wm, {
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
}), Jm = /* @__PURE__ */ pe(Ym, [["__scopeId", "data-v-55fcd77f"]]), Xm = ["type", "value", "placeholder", "disabled"], Qm = /* @__PURE__ */ ve({
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
    const n = e, l = o, i = b(null);
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
      class: Ie(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Xt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Xt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, Xm));
  }
}), Pn = /* @__PURE__ */ pe(Qm, [["__scopeId", "data-v-0380d08f"]]), Zm = { class: "branch-create-form" }, ev = { class: "form-actions" }, tv = /* @__PURE__ */ ve({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = b(""), l = z(() => {
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
      C(Pn, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", ev, [
        C(re, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: g(() => [...d[1] || (d[1] = [
            _(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(re, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: g(() => [...d[2] || (d[2] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), sv = /* @__PURE__ */ pe(tv, [["__scopeId", "data-v-7c500394"]]), ov = { class: "branch-list-item__indicator" }, nv = { class: "branch-list-item__name" }, av = {
  key: 0,
  class: "branch-list-item__actions"
}, lv = {
  key: 0,
  class: "branch-list-item__current-label"
}, iv = /* @__PURE__ */ ve({
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
      class: Ie(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", ov, f(e.isCurrent ? "●" : "○"), 1),
      t("span", nv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", av, [
        qe(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", lv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), rv = /* @__PURE__ */ pe(iv, [["__scopeId", "data-v-c6581a24"]]), cv = {
  key: 2,
  class: "branch-list"
}, uv = /* @__PURE__ */ ve({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, n = b(!1);
    function l(c) {
      o("create", c), i();
    }
    function i() {
      n.value = !1;
    }
    return (c, u) => (a(), M(Tt, null, {
      header: g(() => [
        C(Pt, { title: "BRANCHES" }, {
          actions: g(() => [
            n.value ? y("", !0) : (a(), M(re, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (d) => n.value = !0)
            }, {
              default: g(() => [...u[1] || (u[1] = [
                _(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: g(() => [
        n.value ? (a(), M(sv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), M(ss, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", cv, [
          (a(!0), r(G, null, ge(e.branches, (d) => (a(), M(rv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: g(() => [
              d.is_current ? y("", !0) : (a(), M(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => c.$emit("delete", d.name)
              }, {
                default: g(() => [...u[2] || (u[2] = [
                  _(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? y("", !0) : (a(), M(re, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => c.$emit("switch", d.name)
              }, {
                default: g(() => [...u[3] || (u[3] = [
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
}), dv = /* @__PURE__ */ pe(uv, [["__scopeId", "data-v-86784ddd"]]), fv = { class: "commit-list" }, mv = /* @__PURE__ */ ve({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", fv, [
      qe(s.$slots, "default", {}, void 0)
    ]));
  }
}), vv = /* @__PURE__ */ pe(mv, [["__scopeId", "data-v-8c5ee761"]]), pv = { class: "commit-hash" }, gv = /* @__PURE__ */ ve({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = z(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", pv, f(o.value), 1));
  }
}), hr = /* @__PURE__ */ pe(gv, [["__scopeId", "data-v-7c333cc6"]]), hv = { class: "commit-message" }, yv = { class: "commit-date" }, wv = /* @__PURE__ */ ve({
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
      class: Ie(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(hr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", hv, f(e.message), 1),
      t("span", yv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), r("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = rt(() => {
        }, ["stop"]))
      }, [
        qe(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), _v = /* @__PURE__ */ pe(wv, [["__scopeId", "data-v-dd7c621b"]]), bv = /* @__PURE__ */ ve({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), M(Tt, null, {
      header: g(() => [
        C(Pt, { title: "HISTORY" })
      ]),
      content: g(() => [
        e.commits.length === 0 ? (a(), M(ss, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), M(vv, { key: 1 }, {
          default: g(() => [
            (a(!0), r(G, null, ge(e.commits, (n) => (a(), M(_v, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: g(() => [
                C(re, {
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
}), kv = /* @__PURE__ */ pe(bv, [["__scopeId", "data-v-981c3c64"]]), i7 = Fs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const r7 = [
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
], c7 = {
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
], u7 = [
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
function at() {
  const e = b(!1), s = b(null);
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
  async function k(J, be = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: be })
    });
  }
  async function x(J, be = !1) {
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
  async function R(J, be) {
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
  async function P(J) {
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
  async function T(J) {
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
  async function ce(J, be, Ae) {
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
  async function j() {
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
  async function E(J) {
    return o(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function Z(J) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function se() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function $e() {
    return o("/v2/workspace/models/directory");
  }
  async function Ee(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function Ue(J) {
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
  async function Ke(J, be) {
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
  async function Te(J, be) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), be && Ae.append("lines", be.toString()), o(`/v2/workspace/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Ve() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function we() {
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
  async function Ge() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Pe(J) {
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
  async function ne(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function ie(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function fe(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function me() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ce(J, be) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: be })
    });
  }
  async function xe(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function le(J, be, Ae) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: be, push_url: Ae })
    });
  }
  async function de(J, be) {
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
  async function Se(J = "skip", be = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: be
      })
    });
  }
  async function ee(J, be) {
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
  async function Me(J, be) {
    const Ae = be ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Ae);
  }
  async function ye(J, be = {}) {
    const Ae = { "Content-Type": "application/json" };
    return be.authToken && (Ae["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({ force: be.force || !1 })
    });
  }
  async function he(J, be) {
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
        await T(Ae), be.success++;
      } catch (ct) {
        be.failed.push({
          name: Ae,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return be;
  }
  async function F(J) {
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
  async function ue(J) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(J)}`
    );
  }
  async function Fe(J, be, Ae, ct) {
    var ol;
    const Ne = new FormData();
    if (Ne.append("file", J), Ne.append("name", be), Ne.append("model_strategy", Ae), Ne.append("torch_backend", ct), !((ol = window.app) != null && ol.api))
      throw new Error("ComfyUI API not available");
    const xo = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ne
    });
    if (!xo.ok) {
      const nl = await xo.json().catch(() => ({}));
      throw new Error(nl.message || nl.error || `Import failed: ${xo.status}`);
    }
    return xo.json();
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
  async function lt(J, be, Ae, ct) {
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
  async function Ps() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function so(J, be) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: be })
    });
  }
  async function ko() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function $o(J) {
    const be = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(be);
  }
  async function Co(J) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function _e() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function X(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function He(J) {
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
  async function gs(J) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function hs(J = !1) {
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
  async function oe(J) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function H(J) {
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
  async function je(J) {
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
    switchBranch: k,
    deleteBranch: x,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: R,
    getSwitchProgress: L,
    createEnvironment: P,
    getCreateProgress: S,
    getComfyUIReleases: q,
    deleteEnvironment: B,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: I,
    resolveWorkflow: T,
    installWorkflowDeps: O,
    setModelImportance: ce,
    // Model Management
    getEnvironmentModels: Y,
    getWorkspaceModels: j,
    getModelDetails: te,
    openFileLocation: Q,
    addModelSource: N,
    removeModelSource: U,
    deleteModel: E,
    downloadModel: Z,
    scanWorkspaceModels: se,
    getModelsDirectory: $e,
    setModelsDirectory: Ee,
    // Settings
    getConfig: Ue,
    updateConfig: Ke,
    // Debug/Logs
    getEnvironmentLogs: ke,
    getWorkspaceLogs: Te,
    getEnvironmentLogPath: Ve,
    getWorkspaceLogPath: we,
    getOrchestratorLogs: ae,
    getOrchestratorLogPath: Ge,
    openFile: Pe,
    // Node Management
    getNodes: D,
    trackNodeAsDev: V,
    installNode: ne,
    updateNode: ie,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: me,
    addRemote: Ce,
    removeRemote: xe,
    updateRemoteUrl: le,
    fetchRemote: de,
    getRemoteSyncStatus: Le,
    // Push/Pull
    getPullPreview: ee,
    pullFromRemote: K,
    getPushPreview: Me,
    pushToRemote: ye,
    validateMerge: he,
    // Environment Sync
    syncEnvironmentManually: Se,
    // Workflow Repair
    repairWorkflowModels: W,
    // Import Operations
    previewTarballImport: F,
    previewGitImport: vt,
    validateEnvironmentName: ue,
    executeImport: Fe,
    executeGitImport: lt,
    getImportProgress: Qe,
    // First-Time Setup
    getSetupStatus: dt,
    initializeWorkspace: Rt,
    getInitializeProgress: Ut,
    validatePath: jt,
    // Deploy Operations
    getDeploySummary: Bs,
    getDataCenters: Ps,
    testRunPodConnection: so,
    getNetworkVolumes: ko,
    getRunPodGpuTypes: $o,
    deployToRunPod: Co,
    getRunPodPods: _e,
    terminateRunPodPod: X,
    stopRunPodPod: He,
    startRunPodPod: ht,
    getDeploymentStatus: Ht,
    exportDeployPackage: gs,
    getStoredRunPodKey: hs,
    clearRunPodKey: ns,
    // Custom Worker Operations
    getCustomWorkers: Oe,
    addCustomWorker: as,
    removeCustomWorker: oe,
    testWorkerConnection: H,
    scanForWorkers: De,
    getWorkerSystemInfo: je,
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
}, Rv = /* @__PURE__ */ ve({
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
    }), (c, u) => (a(), M(wt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ie(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", xv, [
            qe(c.$slots, "header", {}, () => [
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
            e.loading ? (a(), r("div", Ev, "Loading...")) : e.error ? (a(), r("div", Tv, f(e.error), 1)) : qe(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Pv, [
            qe(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), pt = /* @__PURE__ */ pe(Rv, [["__scopeId", "data-v-8dab1081"]]), Mv = ["type", "disabled"], Dv = {
  key: 0,
  class: "spinner"
}, Lv = /* @__PURE__ */ ve({
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
      class: Ie(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", Dv)) : y("", !0),
      qe(s.$slots, "default", {}, void 0)
    ], 10, Mv));
  }
}), Re = /* @__PURE__ */ pe(Lv, [["__scopeId", "data-v-f3452606"]]), Ov = {
  key: 0,
  class: "base-title-count"
}, Av = /* @__PURE__ */ ve({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), M(ja(`h${e.level}`), {
      class: Ie(["base-title", e.variant])
    }, {
      default: g(() => [
        qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Ov, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bo = /* @__PURE__ */ pe(Av, [["__scopeId", "data-v-5a01561d"]]), Nv = ["value", "disabled"], Uv = {
  key: 0,
  value: "",
  disabled: ""
}, zv = ["value"], Fv = {
  key: 0,
  class: "base-select-error"
}, Bv = /* @__PURE__ */ ve({
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
      class: Ie(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ie(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), r("option", Uv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(G, null, ge(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, zv))), 128))
      ], 42, Nv),
      e.error ? (a(), r("span", Fv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Vv = /* @__PURE__ */ pe(Bv, [["__scopeId", "data-v-7436d745"]]), Wv = { class: "popover-header" }, Gv = { class: "popover-title" }, jv = { class: "popover-content" }, Hv = {
  key: 0,
  class: "popover-actions"
}, Kv = /* @__PURE__ */ ve({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Gt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = rt(() => {
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
            qe(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Hv, [
            qe(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), os = /* @__PURE__ */ pe(Kv, [["__scopeId", "data-v-42815ace"]]), qv = { class: "detail-section" }, Yv = {
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
}, vp = /* @__PURE__ */ ve({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = at(), u = b(null), d = b(!1), m = b(null), v = b(!1), h = b({}), w = b(!1), p = b(/* @__PURE__ */ new Set()), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(I) {
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
    function R(I) {
      if (!I.loaded_by || I.loaded_by.length === 0) return [];
      const T = I.hash || I.filename;
      return p.value.has(T) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function L(I) {
      return p.value.has(I);
    }
    function P(I) {
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
    function q(I, T) {
      h.value[I] = T, v.value = !0;
    }
    async function B(I) {
      try {
        await c(I);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function A() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [I, T] of Object.entries(h.value))
          await i(o.workflowName, I, T);
        n("refresh"), n("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return et(S), (I, T) => (a(), r(G, null, [
      C(pt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: T[4] || (T[4] = (O) => n("close"))
      }, {
        body: g(() => [
          u.value ? (a(), r(G, { key: 0 }, [
            t("section", qv, [
              C(Bo, { variant: "section" }, {
                default: g(() => [
                  _("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", Yv, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(G, null, ge(u.value.models, (O) => {
                var ce;
                return a(), r("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  t("div", Jv, [
                    T[6] || (T[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Xv, f(O.filename), 1)
                  ]),
                  t("div", Qv, [
                    t("div", Zv, [
                      T[7] || (T[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ie(["value", x(O.status)])
                      }, f($(O.status)), 3)
                    ]),
                    t("div", ep, [
                      t("span", tp, [
                        T[8] || (T[8] = _(" Importance: ", -1)),
                        C(gr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (Y) => w.value = !0)
                        })
                      ]),
                      C(Vv, {
                        "model-value": h.value[O.filename] || O.importance,
                        options: k,
                        "onUpdate:modelValue": (Y) => q(O.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (a(), r("div", sp, [
                      T[9] || (T[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", op, [
                        (a(!0), r(G, null, ge(R(O), (Y, j) => (a(), r("div", {
                          key: `${Y.node_id}-${j}`,
                          class: "node-reference"
                        }, f(Y.node_type) + " (Node #" + f(Y.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => P(O.hash || O.filename)
                        }, f(L(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, np)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    O.size_mb ? (a(), r("div", ap, [
                      T[10] || (T[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", lp, f(O.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    O.has_category_mismatch ? (a(), r("div", ip, [
                      T[13] || (T[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", rp, [
                        T[11] || (T[11] = _(" In ", -1)),
                        t("code", null, f(O.actual_category) + "/", 1),
                        T[12] || (T[12] = _(" but loader needs ", -1)),
                        t("code", null, f((ce = O.expected_categories) == null ? void 0 : ce[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  O.status !== "available" ? (a(), r("div", cp, [
                    O.status === "downloadable" ? (a(), M(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (Y) => n("resolve"))
                    }, {
                      default: g(() => [...T[14] || (T[14] = [
                        _(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (a(), M(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => B(O.file_path)
                    }, {
                      default: g(() => [...T[15] || (T[15] = [
                        _(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (a(), M(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (Y) => n("resolve"))
                    }, {
                      default: g(() => [...T[16] || (T[16] = [
                        _(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", up, [
              C(Bo, { variant: "section" }, {
                default: g(() => [
                  _("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), r("div", dp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(G, null, ge(u.value.nodes, (O) => (a(), r("div", {
                key: O.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ie(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, f(O.status === "installed" ? "✓" : "✕"), 3),
                t("span", fp, f(O.name), 1),
                O.version ? (a(), r("span", mp, "v" + f(O.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: g(() => [
          C(Re, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (O) => n("close"))
          }, {
            default: g(() => [...T[17] || (T[17] = [
              _(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), M(Re, {
            key: 0,
            variant: "primary",
            onClick: A
          }, {
            default: g(() => [...T[18] || (T[18] = [
              _(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(os, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: T[5] || (T[5] = (O) => w.value = !1)
      }, {
        content: g(() => [...T[19] || (T[19] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              _(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              _(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              _(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), pp = /* @__PURE__ */ pe(vp, [["__scopeId", "data-v-668728e6"]]), Je = Fs({
  items: [],
  status: "idle"
});
let ds = null;
function yr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function la(e) {
  return Je.items.find((s) => s.id === e);
}
async function ro() {
  if (Je.status === "downloading") return;
  const e = Je.items.find((s) => s.status === "queued");
  if (!e) {
    Je.status = "idle";
    return;
  }
  Je.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await gp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Je.status = "idle", ro();
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
      if (Je.items.some((l) => l.url === o.url && l.filename === o.filename))
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
      Je.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function _o() {
  function e($) {
    for (const R of $) {
      if (Je.items.some(
        (S) => S.url === R.url && S.targetPath === R.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${R.filename}`);
        continue;
      }
      const P = {
        id: yr(),
        workflow: R.workflow,
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath,
        size: R.size || 0,
        type: R.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Je.items.push(P);
    }
    Je.status === "idle" && ro();
  }
  async function s($) {
    const R = la($);
    if (R) {
      if (R.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(R.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ds && (ds.close(), ds = null), R.status = "failed", R.error = "Cancelled by user", Je.status = "idle", ro();
      } else if (R.status === "queued") {
        const L = Je.items.findIndex((P) => P.id === $);
        L >= 0 && Je.items.splice(L, 1);
      }
    }
  }
  function o($) {
    const R = la($);
    !R || R.status !== "failed" || (R.status = "queued", R.error = void 0, R.progress = 0, R.downloaded = 0, Je.status === "idle" && ro());
  }
  function n($) {
    const R = la($);
    !R || R.status !== "paused" || (R.status = "queued", Je.status === "idle" && ro());
  }
  function l() {
    const $ = Je.items.filter((R) => R.status === "paused");
    for (const R of $)
      R.status = "queued";
    Je.status === "idle" && ro();
  }
  function i($) {
    const R = Je.items.findIndex((L) => L.id === $);
    R >= 0 && ["completed", "failed", "paused"].includes(Je.items[R].status) && Je.items.splice(R, 1);
  }
  function c() {
    Je.items = Je.items.filter(($) => $.status !== "completed");
  }
  function u() {
    Je.items = Je.items.filter(($) => $.status !== "failed");
  }
  const d = z(
    () => Je.items.find(($) => $.status === "downloading")
  ), m = z(
    () => Je.items.filter(($) => $.status === "queued")
  ), v = z(
    () => Je.items.filter(($) => $.status === "completed")
  ), h = z(
    () => Je.items.filter(($) => $.status === "failed")
  ), w = z(
    () => Je.items.filter(($) => $.status === "paused")
  ), p = z(() => Je.items.length > 0), k = z(
    () => Je.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), x = z(
    () => Je.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: bn(Je),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: h,
    pausedItems: w,
    hasItems: p,
    activeCount: k,
    hasPaused: x,
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
  const e = b(null), s = b(null), o = b([]), n = b([]), l = b(!1), i = b(null);
  async function c(L, P) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(L, P);
    if (!S.ok) {
      const B = await S.json().catch(() => ({})), A = B.error || B.message || `Request failed: ${S.status}`;
      throw new Error(A);
    }
    return S.json();
  }
  async function u(L) {
    l.value = !0, i.value = null;
    try {
      let P;
      return io() || (P = await c(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = P, P;
    } catch (P) {
      const S = P instanceof Error ? P.message : "Unknown error occurred";
      throw i.value = S, P;
    } finally {
      l.value = !1;
    }
  }
  async function d(L, P, S, q) {
    l.value = !0, i.value = null;
    try {
      let B;
      if (!io()) {
        const A = Object.fromEntries(P), I = Object.fromEntries(S), T = q ? Array.from(q) : [];
        B = await c(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: A,
              model_choices: I,
              skipped_packages: T
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
  async function m(L, P = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return io() || (S = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: P })
        }
      )), o.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
    } finally {
      l.value = !1;
    }
  }
  async function v(L, P = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return io() || (S = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: P })
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
      return io(), await k(L);
    } catch (P) {
      const S = P instanceof Error ? P.message : "Failed to install nodes";
      throw h.installError = S, P;
    }
  }
  async function k(L) {
    var S;
    const P = await c(
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
      const q = new Map(((S = P.failed) == null ? void 0 : S.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < h.nodesToInstall.length; B++) {
        const A = h.nodesToInstall[B], I = q.get(A);
        h.nodeInstallProgress.completedNodes.push({
          node_id: A,
          success: !I,
          error: I
        });
      }
    }
    return h.nodesInstalled = P.nodes_installed, h.needsRestart = P.nodes_installed.length > 0, P.failed && P.failed.length > 0 && (h.installError = `${P.failed.length} package(s) failed to install`), P;
  }
  async function x(L, P, S) {
    w(), h.phase = "resolving", i.value = null;
    const q = Object.fromEntries(P), B = Object.fromEntries(S);
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
      const I = A.body.getReader(), T = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: ce, value: Y } = await I.read();
        if (ce) break;
        O += T.decode(Y, { stream: !0 });
        const j = O.split(`

`);
        O = j.pop() || "";
        for (const te of j) {
          if (!te.trim()) continue;
          const Q = te.split(`
`);
          let N = "", U = "";
          for (const E of Q)
            E.startsWith("event: ") ? N = E.slice(7) : E.startsWith("data: ") && (U = E.slice(6));
          if (U)
            try {
              const E = JSON.parse(U);
              $(N, E);
            } catch (E) {
              console.warn("Failed to parse SSE event:", E);
            }
        }
      }
    } catch (A) {
      const I = A instanceof Error ? A.message : "Unknown error occurred";
      throw i.value = I, h.error = I, h.phase = "error", A;
    }
  }
  function $(L, P) {
    switch (L) {
      case "batch_start":
        h.phase = "downloading", h.totalFiles = P.total;
        break;
      case "file_start":
        h.currentFile = P.filename, h.currentFileIndex = P.index, h.bytesDownloaded = 0, h.bytesTotal = void 0;
        break;
      case "file_progress":
        h.bytesDownloaded = P.downloaded, h.bytesTotal = P.total;
        break;
      case "file_complete":
        h.completedFiles.push({
          filename: P.filename,
          success: P.success,
          error: P.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        h.nodesToInstall = P.nodes_to_install || [], P.download_results && (h.completedFiles = P.download_results), h.phase = "complete";
        break;
      case "error":
        h.error = P.message, h.phase = "error", i.value = P.message;
        break;
    }
  }
  function R(L, P) {
    const { addToQueue: S } = _o(), q = P.filter((B) => B.url && B.target_path).map((B) => ({
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
    applyResolutionWithProgress: x,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: R
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
}, xp = { class: "stepper-content" }, Sp = /* @__PURE__ */ ve({
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
        (a(!0), r(G, null, ge(e.steps, (h, w) => (a(), r("div", {
          key: h.id,
          class: Ie(["step", {
            active: e.currentStep === h.id,
            completed: l(h.id),
            "in-progress": i(h.id),
            disabled: u(h.id)
          }]),
          onClick: (p) => d(h.id)
        }, [
          t("div", {
            class: Ie(["step-indicator", c(h.id)])
          }, [
            l(h.id) ? (a(), r("span", bp, "✓")) : (a(), r("span", kp, f(w + 1), 1))
          ], 2),
          t("div", $p, f(h.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Cp)) : y("", !0)
        ], 10, _p))), 128))
      ]),
      t("div", xp, [
        qe(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Ip = /* @__PURE__ */ pe(Sp, [["__scopeId", "data-v-2a7b3af8"]]), Ep = /* @__PURE__ */ ve({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = z(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = z(() => `confidence-${o.value}`), l = z(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Ie(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Rn = /* @__PURE__ */ pe(Ep, [["__scopeId", "data-v-17ec4b80"]]), Tp = { class: "node-info" }, Pp = { class: "node-info-text" }, Rp = { class: "item-body" }, Mp = {
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
}, sg = { class: "action-buttons" }, og = /* @__PURE__ */ ve({
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
    const i = z(() => !!o.choice);
    z(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), z(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
    });
    const c = z(() => {
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
      class: Ie(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Tp, [
        t("span", Pp, [
          m[7] || (m[7] = _("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ie(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Rp, [
        i.value ? (a(), r("div", Mp, [
          C(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              _(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Dp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Lp, [
            (a(!0), r(G, null, ge(e.options, (v, h) => (a(), r("label", {
              key: v.package_id,
              class: Ie(["option-card", { selected: e.selectedOptionIndex === h }]),
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
                  C(Rn, {
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
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                _(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                _(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[11] || (m[11] = [
                _(" Mark Optional ", -1)
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
              (a(!0), r(G, null, ge(e.searchResults.slice(0, 5), (v, h) => (a(), r("label", {
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
                    C(Rn, {
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
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: g(() => {
                var v;
                return [
                  _(f((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[16] || (m[16] = [
                _(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[17] || (m[17] = [
                _(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ng = /* @__PURE__ */ pe(og, [["__scopeId", "data-v-c2997d1d"]]), ag = { class: "item-navigator" }, lg = { class: "nav-item-info" }, ig = ["title"], rg = { class: "nav-controls" }, cg = { class: "nav-arrows" }, ug = ["disabled"], dg = ["disabled"], fg = { class: "nav-position" }, mg = /* @__PURE__ */ ve({
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
}), _r = /* @__PURE__ */ pe(mg, [["__scopeId", "data-v-74af7920"]]), vg = ["type", "value", "placeholder", "disabled"], pg = {
  key: 0,
  class: "base-input-error"
}, gg = /* @__PURE__ */ ve({
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
      class: Ie(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ie(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Xt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Xt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, vg),
      e.error ? (a(), r("span", pg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ pe(gg, [["__scopeId", "data-v-9ba02cdc"]]), hg = { class: "node-resolution-step" }, yg = {
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
}, Gg = { class: "node-manual-entry-modal" }, jg = { class: "node-modal-body" }, Hg = { class: "node-modal-actions" }, Kg = /* @__PURE__ */ ve({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = wr(), i = b(0), c = b(!1), u = b(!1), d = b(""), m = b(""), v = b([]), h = b(!1), w = b(/* @__PURE__ */ new Map()), p = b(/* @__PURE__ */ new Set()), k = b(!1);
    function x() {
      k.value && U(), k.value = !1;
    }
    const $ = z(() => o.nodes[i.value]), R = z(() => o.nodes.filter((ke) => o.nodeChoices.has(ke.node_type)).length), L = z(() => $.value ? w.value.get($.value.node_type) || [] : []), P = z(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (ke) => {
      var Te;
      ke && ((Te = ke.options) != null && Te.length || w.value.has(ke.node_type) || p.value.has(ke.node_type) || o.nodeChoices.has(ke.node_type) || await S(ke.node_type));
    }, { immediate: !0 });
    async function S(ke) {
      p.value.add(ke);
      try {
        const Te = await l(ke, 5);
        w.value.set(ke, Te);
      } catch {
        w.value.set(ke, []);
      } finally {
        p.value.delete(ke);
      }
    }
    const q = z(() => o.autoResolvedPackages.filter((ke) => !o.skippedPackages.has(ke.package_id)).length);
    function B(ke) {
      return o.skippedPackages.has(ke);
    }
    function A(ke) {
      n("package-skip", ke);
    }
    const I = z(() => {
      var Te;
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
      return (Te = $.value.options) != null && Te.length ? "ambiguous" : "not-found";
    }), T = z(() => {
      var Te;
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
      return (Te = $.value.options) != null && Te.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(ke) {
      ke >= 0 && ke < o.nodes.length && (i.value = ke);
    }
    function ce() {
      $.value && n("mark-optional", $.value.node_type);
    }
    function Y() {
      $.value && n("skip", $.value.node_type);
    }
    function j(ke) {
      $.value && n("option-selected", $.value.node_type, ke);
    }
    function te() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function Q() {
      $.value && (d.value = $.value.node_type, v.value = L.value, c.value = !0, $e(d.value));
    }
    function N() {
      m.value = "", u.value = !0;
    }
    function U() {
      c.value = !1, d.value = "", v.value = [];
    }
    function E() {
      u.value = !1, m.value = "";
    }
    let Z = null;
    function se() {
      Z && clearTimeout(Z), Z = setTimeout(() => {
        $e(d.value);
      }, 300);
    }
    async function $e(ke) {
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
    function Ee(ke) {
      $.value && (n("manual-entry", $.value.node_type, ke.package_id), U());
    }
    function Ue(ke) {
      $.value && n("manual-entry", $.value.node_type, ke.package_id);
    }
    function Ke() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), E());
    }
    return (ke, Te) => {
      var Ve, we;
      return a(), r("div", hg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", yg, [
          t("div", wg, [
            Te[6] || (Te[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", _g, f(q.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", bg, [
            (a(!0), r(G, null, ge(e.autoResolvedPackages, (ae) => (a(), r("div", {
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
                  onClick: (Ge) => A(ae.package_id)
                }, f(B(ae.package_id) ? "Include" : "Skip"), 9, Eg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Tg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(G, { key: 2 }, [
          t("div", Pg, [
            Te[7] || (Te[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Rg, f(R.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), M(_r, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Te[0] || (Te[0] = (ae) => O(i.value - 1)),
            onNext: Te[1] || (Te[1] = (ae) => O(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Mg, [
            C(ng, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Ve = $.value.options) != null && Ve.length),
              options: $.value.options,
              choice: (we = e.nodeChoices) == null ? void 0 : we.get($.value.node_type),
              status: I.value,
              "status-label": T.value,
              "search-results": L.value,
              "is-searching": P.value,
              onMarkOptional: ce,
              onSkip: Y,
              onManualEntry: N,
              onSearch: Q,
              onOptionSelected: j,
              onClearChoice: te,
              onSearchResultSelected: Ue
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Dg, [...Te[8] || (Te[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), M(wt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Te[4] || (Te[4] = rt((ae) => k.value = !0, ["self"])),
            onMouseup: rt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Te[3] || (Te[3] = (ae) => k.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Te[9] || (Te[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              t("div", Lg, [
                C(Qt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Te[2] || (Te[2] = (ae) => d.value = ae),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                t("div", Og, [
                  v.value.length > 0 ? (a(), r("div", Ag, [
                    (a(!0), r(G, null, ge(v.value, (ae) => (a(), r("div", {
                      key: ae.package_id,
                      class: "node-search-result-item",
                      onClick: (Ge) => Ee(ae)
                    }, [
                      t("div", Ug, [
                        t("code", zg, f(ae.package_id), 1),
                        ae.match_confidence ? (a(), M(Rn, {
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
        (a(), M(wt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: rt(E, ["self"])
          }, [
            t("div", Gg, [
              t("div", { class: "node-modal-header" }, [
                Te[10] || (Te[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              t("div", jg, [
                C(Qt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Te[5] || (Te[5] = (ae) => m.value = ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Hg, [
                  C(Re, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: g(() => [...Te[11] || (Te[11] = [
                      _("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Re, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Ke
                  }, {
                    default: g(() => [...Te[12] || (Te[12] = [
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
}), qg = /* @__PURE__ */ pe(Kg, [["__scopeId", "data-v-281581bc"]]), Yg = { class: "node-info" }, Jg = { class: "node-info-text" }, Xg = { class: "item-body" }, Qg = {
  key: 0,
  class: "resolved-state"
}, Zg = {
  key: 1,
  class: "multiple-options"
}, eh = { class: "options-list" }, th = ["onClick"], sh = ["name", "value", "checked", "onChange"], oh = { class: "option-content" }, nh = { class: "option-header" }, ah = { class: "option-filename" }, lh = { class: "option-meta" }, ih = { class: "option-size" }, rh = { class: "option-category" }, ch = { class: "option-path" }, uh = { class: "action-buttons" }, dh = {
  key: 2,
  class: "unresolved"
}, fh = { class: "action-buttons" }, mh = /* @__PURE__ */ ve({
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
    const o = e, n = s, l = z(() => !!o.choice);
    z(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), z(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const i = z(() => {
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
      class: Ie(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Yg, [
        t("span", Jg, [
          m[7] || (m[7] = _("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ie(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Xg, [
        l.value ? (a(), r("div", Qg, [
          C(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              _(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Zg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", eh, [
            (a(!0), r(G, null, ge(e.options, (v, h) => (a(), r("label", {
              key: v.model.hash,
              class: Ie(["option-card", { selected: e.selectedOptionIndex === h }]),
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
                  C(Rn, {
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
            C(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                _(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                _(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[11] || (m[11] = [
                _(" Mark Optional ", -1)
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
            C(Re, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: g(() => [...m[13] || (m[13] = [
                _(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[14] || (m[14] = [
                _(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[15] || (m[15] = [
                _(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), vh = /* @__PURE__ */ pe(mh, [["__scopeId", "data-v-8a82fefa"]]), ph = { class: "model-resolution-step" }, gh = { class: "step-header" }, hh = { class: "step-info" }, yh = { class: "step-title" }, wh = { class: "step-description" }, _h = { class: "stat-badge" }, bh = {
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
}, Oh = { class: "model-download-url-modal" }, Ah = { class: "model-modal-body" }, Nh = { class: "model-input-group" }, Uh = { class: "model-input-group" }, zh = { class: "model-modal-actions" }, Fh = /* @__PURE__ */ ve({
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
      var E;
      return U && ((E = o[U]) == null ? void 0 : E[0]) || null;
    }
    const l = e, i = s, c = b(0), u = b(!1), d = b(!1), m = b(""), v = b(""), h = b(""), w = b([]), p = b(!1), k = z(() => l.models[c.value]), x = z(() => l.models.some((U) => U.is_download_intent)), $ = z(() => l.models.filter(
      (U) => l.modelChoices.has(U.filename) || U.is_download_intent
    ).length), R = z(() => {
      var E;
      if (!k.value) return "";
      const U = n((E = k.value.reference) == null ? void 0 : E.node_type);
      return U ? `${U}/${k.value.filename}` : "";
    }), L = z(() => {
      var E;
      if (!k.value) return "not-found";
      const U = l.modelChoices.get(k.value.filename);
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
      return k.value.is_download_intent ? "download" : (E = k.value.options) != null && E.length ? "ambiguous" : "not-found";
    }), P = z(() => {
      var E, Z;
      if (!k.value) return;
      const U = l.modelChoices.get(k.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (E = U.selected_model) != null && E.filename ? `→ ${U.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (Z = k.value.options) != null && Z.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function S(U) {
      U >= 0 && U < l.models.length && (c.value = U);
    }
    function q() {
      k.value && i("mark-optional", k.value.filename);
    }
    function B() {
      k.value && i("skip", k.value.filename);
    }
    function A(U) {
      k.value && i("option-selected", k.value.filename, U);
    }
    function I() {
      k.value && i("clear-choice", k.value.filename);
    }
    function T() {
      k.value && (m.value = k.value.filename, u.value = !0);
    }
    function O() {
      k.value && (v.value = k.value.download_source || "", h.value = k.value.target_path || R.value, d.value = !0);
    }
    function ce() {
      u.value = !1, m.value = "", w.value = [];
    }
    function Y() {
      d.value = !1, v.value = "", h.value = "";
    }
    function j() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function te(U) {
      k.value && ce();
    }
    function Q() {
      !k.value || !v.value.trim() || (i("download-url", k.value.filename, v.value.trim(), h.value.trim() || void 0), Y());
    }
    function N(U) {
      if (!U) return "Unknown";
      const E = U / (1024 * 1024 * 1024);
      return E >= 1 ? `${E.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, E) => {
      var Z, se, $e;
      return a(), r("div", ph, [
        t("div", gh, [
          t("div", hh, [
            t("h3", yh, f(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", wh, f(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", _h, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        k.value ? (a(), M(_r, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: E[0] || (E[0] = (Ee) => S(c.value - 1)),
          onNext: E[1] || (E[1] = (Ee) => S(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (a(), r("div", bh, [
          C(vh, {
            filename: k.value.filename,
            "node-type": ((Z = k.value.reference) == null ? void 0 : Z.node_type) || "Unknown",
            "has-multiple-options": !!((se = k.value.options) != null && se.length),
            options: k.value.options,
            choice: ($e = e.modelChoices) == null ? void 0 : $e.get(k.value.filename),
            status: L.value,
            "status-label": P.value,
            onMarkOptional: q,
            onSkip: B,
            onDownloadUrl: O,
            onSearch: T,
            onOptionSelected: A,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", kh, [...E[5] || (E[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), M(wt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(ce, ["self"])
          }, [
            t("div", $h, [
              t("div", { class: "model-modal-header" }, [
                E[6] || (E[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              t("div", Ch, [
                C(Qt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": E[2] || (E[2] = (Ee) => m.value = Ee),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", xh, [
                  (a(!0), r(G, null, ge(w.value, (Ee) => (a(), r("div", {
                    key: Ee.hash,
                    class: "model-search-result-item",
                    onClick: (Ue) => te()
                  }, [
                    t("div", Ih, [
                      t("code", Eh, f(Ee.filename), 1)
                    ]),
                    t("div", Th, [
                      t("span", Ph, f(Ee.category), 1),
                      t("span", Rh, f(N(Ee.size)), 1)
                    ]),
                    Ee.relative_path ? (a(), r("div", Mh, f(Ee.relative_path), 1)) : y("", !0)
                  ], 8, Sh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Dh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Lh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), M(wt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(Y, ["self"])
          }, [
            t("div", Oh, [
              t("div", { class: "model-modal-header" }, [
                E[7] || (E[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", Ah, [
                t("div", Nh, [
                  E[8] || (E[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(Qt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": E[3] || (E[3] = (Ee) => v.value = Ee),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Uh, [
                  E[9] || (E[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(Qt, {
                    modelValue: h.value,
                    "onUpdate:modelValue": E[4] || (E[4] = (Ee) => h.value = Ee),
                    placeholder: R.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", zh, [
                  C(Re, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: g(() => [...E[10] || (E[10] = [
                      _("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Re, {
                    variant: "primary",
                    disabled: !v.value.trim() || !h.value.trim(),
                    onClick: Q
                  }, {
                    default: g(() => [...E[11] || (E[11] = [
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
}), Bh = /* @__PURE__ */ pe(Fh, [["__scopeId", "data-v-c6acbada"]]), Vh = { class: "applying-step" }, Wh = {
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
}, gy = { class: "error-message" }, hy = /* @__PURE__ */ ve({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = z(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = z(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = z(() => n.value.length > 0);
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
            (a(!0), r(G, null, ge(e.progress.nodesToInstall, (p, k) => (a(), r("div", {
              key: p,
              class: Ie(["install-item", i(p, k)])
            }, [
              t("span", Jh, [
                i(p, k) === "pending" ? (a(), r("span", Xh, "○")) : i(p, k) === "installing" ? (a(), r("span", Qh, "◌")) : i(p, k) === "complete" ? (a(), r("span", Zh, "✓")) : i(p, k) === "failed" ? (a(), r("span", ey, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", ty, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", sy, [
          t("div", oy, [
            t("span", {
              class: Ie(["phase-icon", l.value ? "warning" : "success"])
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
              (a(!0), r(G, null, ge(n.value, (p) => (a(), r("div", {
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
}), yy = /* @__PURE__ */ pe(hy, [["__scopeId", "data-v-5efaae58"]]), wy = {
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
}, t0 = /* @__PURE__ */ ve({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = wr(), { loadPendingDownloads: v } = _o(), { openFileLocation: h } = at(), w = b(null), p = b(!1), k = b(!1), x = b(null), $ = b("analysis"), R = b([]), L = b(/* @__PURE__ */ new Map()), P = b(/* @__PURE__ */ new Map()), S = b(/* @__PURE__ */ new Set()), q = z(() => {
      const W = [
        { id: "analysis", label: "Analysis" }
      ];
      return (A.value || O.value) && W.push({ id: "nodes", label: "Nodes" }), I.value && W.push({ id: "models", label: "Models" }), W.push({ id: "review", label: "Review" }), $.value === "applying" && W.push({ id: "applying", label: "Applying" }), W;
    }), B = z(() => w.value ? w.value.stats.needs_user_input : !1), A = z(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = z(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = z(() => w.value ? w.value.stats.download_intents > 0 : !1), O = z(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ce = z(() => w.value ? w.value.nodes.resolved.length : 0), Y = z(() => w.value ? w.value.models.resolved.filter((W) => W.has_category_mismatch) : []), j = z(() => Y.value.length > 0), te = z(() => A.value || O.value ? "nodes" : I.value ? "models" : "review"), Q = z(() => {
      if (!w.value) return [];
      const W = w.value.nodes.resolved.filter((ue) => !ue.is_installed), F = /* @__PURE__ */ new Set();
      return W.filter((ue) => F.has(ue.package.package_id) ? !1 : (F.add(ue.package.package_id), !0));
    }), N = z(() => {
      if (!w.value) return [];
      const W = w.value.nodes.resolved.filter((ue) => !ue.is_installed), F = /* @__PURE__ */ new Map();
      for (const ue of W) {
        const Fe = F.get(ue.package.package_id);
        Fe ? Fe.node_types_count++ : F.set(ue.package.package_id, {
          package_id: ue.package.package_id,
          title: ue.package.title,
          node_types_count: 1
        });
      }
      return Array.from(F.values());
    }), U = z(() => Q.value.filter((W) => !S.value.has(W.package.package_id))), E = z(() => w.value ? w.value.models.resolved.filter(
      (W) => W.match_type === "download_intent" || W.match_type === "property_download_intent"
    ).map((W) => ({
      filename: W.reference.widget_value,
      reference: W.reference,
      is_download_intent: !0,
      resolved_model: W.model,
      download_source: W.download_source,
      target_path: W.target_path
    })) : []), Z = z(() => {
      if (!w.value) return [];
      const W = w.value.nodes.unresolved.map((ue) => ({
        node_type: ue.reference.node_type,
        reason: ue.reason,
        is_unresolved: !0,
        options: void 0
      })), F = w.value.nodes.ambiguous.map((ue) => ({
        node_type: ue.reference.node_type,
        has_multiple_options: !0,
        options: ue.options.map((Fe) => ({
          package_id: Fe.package.package_id,
          title: Fe.package.title,
          match_confidence: Fe.match_confidence,
          match_type: Fe.match_type,
          is_installed: Fe.is_installed
        }))
      }));
      return [...W, ...F];
    }), se = z(() => {
      if (!w.value) return [];
      const W = w.value.models.unresolved.map((ue) => ({
        filename: ue.reference.widget_value,
        reference: ue.reference,
        reason: ue.reason,
        is_unresolved: !0,
        options: void 0
      })), F = w.value.models.ambiguous.map((ue) => ({
        filename: ue.reference.widget_value,
        reference: ue.reference,
        has_multiple_options: !0,
        options: ue.options.map((Fe) => ({
          model: Fe.model,
          match_confidence: Fe.match_confidence,
          match_type: Fe.match_type,
          has_download_source: Fe.has_download_source
        }))
      }));
      return [...W, ...F];
    }), $e = z(() => {
      const W = se.value, F = E.value.map((ue) => ({
        filename: ue.filename,
        reference: ue.reference,
        is_download_intent: !0,
        resolved_model: ue.resolved_model,
        download_source: ue.download_source,
        target_path: ue.target_path,
        options: void 0
      }));
      return [...W, ...F];
    }), Ee = z(() => E.value.filter((W) => {
      const F = P.value.get(W.filename);
      return F ? F.action === "download" : !0;
    }).map((W) => ({
      filename: W.filename,
      url: W.download_source,
      target_path: W.target_path
    })));
    function Ue(W, F = 50) {
      return W.length <= F ? W : W.slice(0, F - 3) + "...";
    }
    const Ke = z(() => {
      let W = U.value.length;
      for (const F of L.value.values())
        F.action === "install" && W++;
      for (const F of P.value.values())
        F.action === "select" && W++;
      return W;
    }), ke = z(() => {
      let W = 0;
      for (const F of P.value.values())
        F.action === "download" && W++;
      for (const F of E.value)
        P.value.get(F.filename) || W++;
      return W;
    }), Te = z(() => {
      let W = 0;
      for (const F of L.value.values())
        F.action === "optional" && W++;
      for (const F of P.value.values())
        F.action === "optional" && W++;
      return W;
    }), Ve = z(() => {
      let W = S.value.size;
      for (const F of L.value.values())
        F.action === "skip" && W++;
      for (const F of P.value.values())
        F.action === "skip" && W++;
      for (const F of Z.value)
        L.value.has(F.node_type) || W++;
      for (const F of se.value)
        P.value.has(F.filename) || W++;
      return W;
    }), we = z(() => {
      const W = {};
      if (W.analysis = { resolved: 1, total: 1 }, A.value) {
        const F = Z.value.length, ue = Z.value.filter(
          (Fe) => L.value.has(Fe.node_type)
        ).length;
        W.nodes = { resolved: ue, total: F };
      }
      if (I.value) {
        const F = $e.value.length, ue = $e.value.filter(
          (Fe) => P.value.has(Fe.filename) || Fe.is_download_intent
        ).length;
        W.models = { resolved: ue, total: F };
      }
      if (W.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const F = d.totalFiles || 1, ue = d.completedFiles.length;
        W.applying = { resolved: ue, total: F };
      }
      return W;
    });
    function ae(W) {
      $.value = W;
    }
    function Ge() {
      const W = q.value.findIndex((F) => F.id === $.value);
      W > 0 && ($.value = q.value[W - 1].id);
    }
    function Pe() {
      const W = q.value.findIndex((F) => F.id === $.value);
      W < q.value.length - 1 && ($.value = q.value[W + 1].id);
    }
    async function D() {
      p.value = !0, x.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (W) {
        x.value = W instanceof Error ? W.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function V() {
      R.value.includes("analysis") || R.value.push("analysis"), A.value || O.value ? $.value = "nodes" : I.value ? $.value = "models" : $.value = "review";
    }
    function ne(W) {
      L.value.set(W, { action: "optional" });
    }
    function ie(W) {
      L.value.set(W, { action: "skip" });
    }
    function fe(W, F) {
      var Fe;
      const ue = Z.value.find((Qe) => Qe.node_type === W);
      (Fe = ue == null ? void 0 : ue.options) != null && Fe[F] && L.value.set(W, {
        action: "install",
        package_id: ue.options[F].package_id
      });
    }
    function me(W, F) {
      L.value.set(W, {
        action: "install",
        package_id: F
      });
    }
    function Ce(W) {
      L.value.delete(W);
    }
    function xe(W) {
      S.value.has(W) ? S.value.delete(W) : S.value.add(W);
    }
    function le(W) {
      P.value.set(W, { action: "optional" });
    }
    function de(W) {
      P.value.set(W, { action: "skip" });
    }
    function Le(W, F) {
      var Fe;
      const ue = se.value.find((Qe) => Qe.filename === W);
      (Fe = ue == null ? void 0 : ue.options) != null && Fe[F] && P.value.set(W, {
        action: "select",
        selected_model: ue.options[F].model
      });
    }
    function Se(W, F, ue) {
      P.value.set(W, {
        action: "download",
        url: F,
        target_path: ue
      });
    }
    function ee(W) {
      P.value.delete(W);
    }
    async function K(W) {
      try {
        await h(W);
      } catch (F) {
        x.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function Me() {
      var W;
      k.value = !0, x.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const F = await i(o.workflowName, L.value, P.value, S.value);
        F.models_to_download && F.models_to_download.length > 0 && u(o.workflowName, F.models_to_download);
        const ue = [
          ...F.nodes_to_install || [],
          ...U.value.map((Qe) => Qe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ue)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Fe = d.installError || ((W = d.nodeInstallProgress) == null ? void 0 : W.completedNodes.some((Qe) => !Qe.success));
        !d.needsRestart && !Fe && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (F) {
        x.value = F instanceof Error ? F.message : "Failed to apply resolution", d.error = x.value, d.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function ye() {
      n("refresh"), n("restart"), n("close");
    }
    async function he() {
      var F;
      const W = ((F = d.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((ue) => !ue.success).map((ue) => ue.node_id)) || [];
      if (W.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: W.length
        }, d.nodesToInstall = W, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (ue) {
          d.error = ue instanceof Error ? ue.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return et(D), (W, F) => (a(), M(pt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: x.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (ue) => n("close"))
    }, {
      body: g(() => [
        p.value && !w.value ? (a(), r("div", wy, [...F[2] || (F[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", _y, [
          C(Ip, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": R.value,
            "step-stats": we.value,
            onStepChange: ae
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), r("div", by, [
            t("div", ky, [
              t("div", $y, [
                F[3] || (F[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Cy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", xy, [
                t("div", Sy, [
                  F[12] || (F[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Iy, [
                    ce.value > 0 ? (a(), r("div", Ey, [
                      F[4] || (F[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ty, f(ce.value), 1),
                      F[5] || (F[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Py, [
                      F[6] || (F[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ry, f(w.value.stats.packages_needing_installation), 1),
                      F[7] || (F[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", My, [
                      F[8] || (F[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Dy, f(w.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", Ly, [
                      F[10] || (F[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Oy, f(w.value.nodes.unresolved.length), 1),
                      F[11] || (F[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Ay, [
                  F[23] || (F[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Ny, [
                    t("div", Uy, [
                      F[13] || (F[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", zy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      F[14] || (F[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", Fy, [
                      F[15] || (F[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", By, f(w.value.stats.download_intents), 1),
                      F[16] || (F[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    j.value ? (a(), r("div", Vy, [
                      F[17] || (F[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Wy, f(Y.value.length), 1),
                      F[18] || (F[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Gy, [
                      F[19] || (F[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", jy, f(w.value.models.ambiguous.length), 1),
                      F[20] || (F[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Hy, [
                      F[21] || (F[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Ky, f(w.value.models.unresolved.length), 1),
                      F[22] || (F[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              B.value ? (a(), r("div", qy, [
                F[24] || (F[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Yy, f(Z.value.length + se.value.length) + " items need your input", 1)
              ])) : O.value ? (a(), r("div", Jy, [
                F[25] || (F[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Xy, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(T.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (a(), r("div", Qy, [
                F[26] || (F[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Zy, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : j.value ? (a(), r("div", e1, [
                F[27] || (F[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", t1, f(Y.value.length) + " model" + f(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", s1, [...F[28] || (F[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              j.value ? (a(), r("div", o1, [
                F[31] || (F[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", n1, [
                  (a(!0), r(G, null, ge(Y.value, (ue) => {
                    var Fe, Qe;
                    return a(), r("div", {
                      key: ue.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", a1, f(ue.actual_category) + "/" + f((Fe = ue.model) == null ? void 0 : Fe.filename), 1),
                      F[30] || (F[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", l1, f((Qe = ue.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      ue.file_path ? (a(), M(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => K(ue.file_path)
                      }, {
                        default: g(() => [...F[29] || (F[29] = [
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
          $.value === "nodes" ? (a(), M(qg, {
            key: 1,
            nodes: Z.value,
            "node-choices": L.value,
            "auto-resolved-packages": N.value,
            "skipped-packages": S.value,
            onMarkOptional: ne,
            onSkip: ie,
            onOptionSelected: fe,
            onManualEntry: me,
            onClearChoice: Ce,
            onPackageSkip: xe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), M(Bh, {
            key: 2,
            models: $e.value,
            "model-choices": P.value,
            onMarkOptional: le,
            onSkip: de,
            onOptionSelected: Le,
            onDownloadUrl: Se,
            onClearChoice: ee
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", i1, [
            t("div", r1, [
              F[37] || (F[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", c1, [
                t("div", u1, [
                  t("span", d1, f(Ke.value), 1),
                  F[32] || (F[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", f1, [
                  t("span", m1, f(ke.value), 1),
                  F[33] || (F[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", v1, [
                  t("span", p1, f(Te.value), 1),
                  F[34] || (F[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", g1, [
                  t("span", h1, f(Ve.value), 1),
                  F[35] || (F[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              N.value.length > 0 ? (a(), r("div", y1, [
                t("h4", w1, "Node Packages (" + f(N.value.length) + ")", 1),
                t("div", _1, [
                  (a(!0), r(G, null, ge(N.value, (ue) => (a(), r("div", {
                    key: ue.package_id,
                    class: "review-item"
                  }, [
                    t("code", b1, f(ue.package_id), 1),
                    t("div", k1, [
                      S.value.has(ue.package_id) ? (a(), r("span", C1, "Skipped")) : (a(), r("span", $1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Z.value.length > 0 ? (a(), r("div", x1, [
                t("h4", S1, "Node Choices (" + f(Z.value.length) + ")", 1),
                t("div", I1, [
                  (a(!0), r(G, null, ge(Z.value, (ue) => {
                    var Fe, Qe, vt, lt;
                    return a(), r("div", {
                      key: ue.node_type,
                      class: "review-item"
                    }, [
                      t("code", E1, f(ue.node_type), 1),
                      t("div", T1, [
                        L.value.has(ue.node_type) ? (a(), r(G, { key: 0 }, [
                          ((Fe = L.value.get(ue.node_type)) == null ? void 0 : Fe.action) === "install" ? (a(), r("span", P1, f((Qe = L.value.get(ue.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = L.value.get(ue.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", R1, " Optional ")) : ((lt = L.value.get(ue.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), r("span", M1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", D1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ee.value.length > 0 ? (a(), r("div", L1, [
                t("h4", O1, "Models to Download (" + f(Ee.value.length) + ")", 1),
                t("div", A1, [
                  (a(!0), r(G, null, ge(Ee.value, (ue) => (a(), r("div", {
                    key: ue.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", N1, [
                      t("code", U1, f(ue.filename), 1),
                      t("div", z1, [
                        t("span", F1, "→ " + f(ue.target_path), 1),
                        ue.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: ue.url
                        }, f(Ue(ue.url)), 9, B1)) : y("", !0)
                      ])
                    ]),
                    F[36] || (F[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              $e.value.length > 0 ? (a(), r("div", V1, [
                t("h4", W1, "Models (" + f($e.value.length) + ")", 1),
                t("div", G1, [
                  (a(!0), r(G, null, ge($e.value, (ue) => {
                    var Fe, Qe, vt, lt, dt, Rt, Ut;
                    return a(), r("div", {
                      key: ue.filename,
                      class: "review-item"
                    }, [
                      t("code", j1, f(ue.filename), 1),
                      t("div", H1, [
                        P.value.has(ue.filename) ? (a(), r(G, { key: 0 }, [
                          ((Fe = P.value.get(ue.filename)) == null ? void 0 : Fe.action) === "select" ? (a(), r("span", K1, f((vt = (Qe = P.value.get(ue.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((lt = P.value.get(ue.filename)) == null ? void 0 : lt.action) === "download" ? (a(), r("span", q1, " Download ")) : ((dt = P.value.get(ue.filename)) == null ? void 0 : dt.action) === "optional" ? (a(), r("span", Y1, " Optional ")) : ((Rt = P.value.get(ue.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), r("span", J1, " Skip ")) : ((Ut = P.value.get(ue.filename)) == null ? void 0 : Ut.action) === "cancel_download" ? (a(), r("span", X1, " Cancel Download ")) : y("", !0)
                        ], 64)) : ue.is_download_intent ? (a(), r("span", Q1, " Pending Download ")) : (a(), r("span", Z1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Q.value.length === 0 && Z.value.length === 0 && $e.value.length === 0 ? (a(), r("div", e0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), M(yy, {
            key: 4,
            progress: Be(d),
            onRestart: ye,
            onRetryFailed: he
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), M(Re, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: Ge
        }, {
          default: g(() => [...F[38] || (F[38] = [
            _(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        F[41] || (F[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Be(d).phase === "complete" || Be(d).phase === "error" ? (a(), M(Re, {
          key: 1,
          variant: "secondary",
          onClick: F[0] || (F[0] = (ue) => n("close"))
        }, {
          default: g(() => [
            _(f(Be(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), M(Re, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: V
        }, {
          default: g(() => [
            _(f(te.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), M(Re, {
          key: 3,
          variant: "primary",
          onClick: Pe
        }, {
          default: g(() => [
            _(f(I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), M(Re, {
          key: 4,
          variant: "primary",
          onClick: Pe
        }, {
          default: g(() => [...F[39] || (F[39] = [
            _(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), M(Re, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: Me
        }, {
          default: g(() => [...F[40] || (F[40] = [
            _(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), s0 = /* @__PURE__ */ pe(t0, [["__scopeId", "data-v-40d8d5a8"]]), o0 = { class: "search-input-wrapper" }, n0 = ["value", "placeholder"], a0 = /* @__PURE__ */ ve({
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
    const o = e, n = s, l = b(null);
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
}), l0 = /* @__PURE__ */ pe(a0, [["__scopeId", "data-v-266f857a"]]), i0 = { class: "search-bar" }, r0 = /* @__PURE__ */ ve({
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
      C(l0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), bo = /* @__PURE__ */ pe(r0, [["__scopeId", "data-v-3d51bbfd"]]), c0 = { class: "section-group" }, u0 = {
  key: 0,
  class: "section-content"
}, d0 = /* @__PURE__ */ ve({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = b(o.initiallyExpanded);
    function i() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, u) => (a(), r("section", c0, [
      C(Ot, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: i
      }, {
        default: g(() => [
          _(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), r("div", u0, [
        qe(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ pe(d0, [["__scopeId", "data-v-c48e33ed"]]), f0 = { class: "item-header" }, m0 = {
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
}, w0 = /* @__PURE__ */ ve({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = z(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), r("div", {
      class: Ie(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", f0, [
        l.$slots.icon ? (a(), r("span", m0, [
          qe(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", v0, [
          l.$slots.title ? (a(), r("div", p0, [
            qe(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", g0, [
            qe(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", h0, [
        qe(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", y0, [
        qe(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ pe(w0, [["__scopeId", "data-v-cc435e0e"]]), _0 = { class: "loading-state" }, b0 = { class: "loading-message" }, k0 = /* @__PURE__ */ ve({
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
}), Es = /* @__PURE__ */ pe(k0, [["__scopeId", "data-v-ad8436c9"]]), $0 = { class: "error-state" }, C0 = { class: "error-message" }, x0 = /* @__PURE__ */ ve({
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
      e.retry ? (a(), M(re, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          _(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Ts = /* @__PURE__ */ pe(x0, [["__scopeId", "data-v-5397be48"]]), S0 = /* @__PURE__ */ ve({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = at(), i = b([]), c = b(!1), u = b(null), d = b(""), m = b(!0), v = b(!1), h = b(!1), w = b(!1), p = b(null), k = z(
      () => i.value.filter((N) => N.status === "broken")
    ), x = z(
      () => i.value.filter((N) => N.status === "new")
    ), $ = z(
      () => i.value.filter((N) => N.status === "modified")
    ), R = z(
      () => i.value.filter((N) => N.status === "synced")
    ), L = z(() => {
      if (!d.value.trim()) return i.value;
      const N = d.value.toLowerCase();
      return i.value.filter((U) => U.name.toLowerCase().includes(N));
    }), P = z(
      () => k.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = z(
      () => x.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = z(
      () => $.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = z(
      () => R.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = z(
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
    function T(N) {
      p.value = N, h.value = !0;
    }
    function O(N) {
      p.value = N, w.value = !0;
    }
    function ce() {
      n("refresh");
    }
    async function Y() {
      w.value = !1, await I(!0);
    }
    async function j() {
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
      C(Tt, null, {
        header: g(() => [
          C(Pt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: d.value,
            "onUpdate:modelValue": U[0] || (U[0] = (E) => d.value = E),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (a(), M(Es, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), M(Ts, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            P.value.length ? (a(), M(it, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(P.value, (E) => (a(), M(Et, {
                  key: E.name,
                  status: "broken"
                }, {
                  icon: g(() => [...U[7] || (U[7] = [
                    _("⚠", -1)
                  ])]),
                  title: g(() => [
                    _(f(E.name), 1)
                  ]),
                  subtitle: g(() => [
                    _(f(te(E)), 1)
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => O(E.name)
                    }, {
                      default: g(() => [...U[8] || (U[8] = [
                        _(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => T(E.name)
                    }, {
                      default: g(() => [...U[9] || (U[9] = [
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
            S.value.length ? (a(), M(it, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(S.value, (E) => (a(), M(Et, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    _(f(E.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    _(f(E.name), 1)
                  ]),
                  subtitle: g(() => [
                    _(f(Q(E)), 1)
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => T(E.name)
                    }, {
                      default: g(() => [...U[10] || (U[10] = [
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
            q.value.length ? (a(), M(it, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(q.value, (E) => (a(), M(Et, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...U[11] || (U[11] = [
                    _("⚡", -1)
                  ])]),
                  title: g(() => [
                    _(f(E.name), 1)
                  ]),
                  subtitle: g(() => [
                    _(f(Q(E)), 1)
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => T(E.name)
                    }, {
                      default: g(() => [...U[12] || (U[12] = [
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
            B.value.length ? (a(), M(it, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: U[2] || (U[2] = (E) => m.value = E)
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(A.value, (E) => (a(), M(Et, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    _(f(E.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    _(f(E.name), 1)
                  ]),
                  subtitle: g(() => [
                    _(f(Q(E)), 1)
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => T(E.name)
                    }, {
                      default: g(() => [...U[13] || (U[13] = [
                        _(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && B.value.length > 5 ? (a(), M(re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (E) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    _(" View all " + f(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            L.value.length ? y("", !0) : (a(), M(ss, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && p.value ? (a(), M(pp, {
        key: 0,
        "workflow-name": p.value,
        onClose: U[3] || (U[3] = (E) => h.value = !1),
        onResolve: U[4] || (U[4] = (E) => O(p.value)),
        onRefresh: U[5] || (U[5] = (E) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), M(s0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Y,
        onInstall: ce,
        onRefresh: U[6] || (U[6] = (E) => n("refresh")),
        onRestart: j
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), I0 = /* @__PURE__ */ pe(S0, [["__scopeId", "data-v-fa3f076e"]]), E0 = /* @__PURE__ */ ve({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ie(["summary-bar", e.variant])
    }, [
      qe(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), on = /* @__PURE__ */ pe(E0, [["__scopeId", "data-v-ccb7816e"]]), T0 = {
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
}, iw = /* @__PURE__ */ ve({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = at(), u = b(null), d = b(!0), m = b(null), v = b(""), h = b(!1), w = b(null), p = b(null), k = b(null), x = b(null);
    let $ = null;
    function R(I, T = "success", O = 2e3) {
      $ && clearTimeout($), x.value = { message: I, type: T }, $ = setTimeout(() => {
        x.value = null;
      }, O);
    }
    function L(I) {
      if (!I) return "Unknown";
      const T = 1024 * 1024 * 1024, O = 1024 * 1024;
      return I >= T ? `${(I / T).toFixed(1)} GB` : I >= O ? `${(I / O).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function P(I) {
      navigator.clipboard.writeText(I), R("Copied to clipboard!");
    }
    async function S(I) {
      try {
        await c(I), R("Opening file location...");
      } catch {
        R("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!v.value.trim() || !u.value)) {
        h.value = !0, p.value = null, k.value = null;
        try {
          await l(u.value.hash, v.value.trim()), k.value = "Source added successfully!", v.value = "", await A();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function B(I) {
      if (u.value) {
        w.value = I, p.value = null, k.value = null;
        try {
          await i(u.value.hash, I), R("Source removed"), await A();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to remove source";
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
    return et(A), (I, T) => {
      var O;
      return a(), r(G, null, [
        C(pt, {
          title: `Model Details: ${((O = u.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: T[5] || (T[5] = (ce) => I.$emit("close"))
        }, {
          body: g(() => {
            var ce, Y, j, te;
            return [
              u.value ? (a(), r("div", T0, [
                t("section", P0, [
                  t("div", R0, [
                    T[6] || (T[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", M0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (Q) => P(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", D0, [
                    T[7] || (T[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", L0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (Q) => P(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", O0, [
                    T[8] || (T[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", A0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (Q) => P(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", N0, [
                    T[9] || (T[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", U0, f(L(u.value.size)), 1)
                  ]),
                  t("div", z0, [
                    T[10] || (T[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", F0, f(u.value.category), 1)
                  ]),
                  t("div", B0, [
                    T[11] || (T[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", V0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", W0, [
                  t("h4", G0, "Locations (" + f(((ce = u.value.locations) == null ? void 0 : ce.length) || 0) + ")", 1),
                  (Y = u.value.locations) != null && Y.length ? (a(), r("div", j0, [
                    (a(!0), r(G, null, ge(u.value.locations, (Q, N) => (a(), r("div", {
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
                  t("h4", X0, "Download Sources (" + f(((j = u.value.sources) == null ? void 0 : j.length) || 0) + ")", 1),
                  (te = u.value.sources) != null && te.length ? (a(), r("div", Q0, [
                    (a(!0), r(G, null, ge(u.value.sources, (Q, N) => (a(), r("div", {
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
                    Ye(t("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (Q) => v.value = Q),
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
                  k.value ? (a(), r("p", lw, f(k.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (ce) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), M(wt, { to: "body" }, [
          x.value ? (a(), r("div", {
            key: 0,
            class: Ie(["toast", x.value.type])
          }, f(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), Xa = /* @__PURE__ */ pe(iw, [["__scopeId", "data-v-f15cbb56"]]), rw = /* @__PURE__ */ ve({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = at(), i = b([]), c = b([]), u = b("production"), d = b(!1), m = b(null), v = b(""), h = b(!1), w = b(null);
    function p() {
      h.value = !1, o("navigate", "model-index");
    }
    const k = z(
      () => i.value.reduce((A, I) => A + (I.size || 0), 0)
    ), x = z(() => {
      if (!v.value.trim()) return i.value;
      const A = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), $ = z(() => {
      if (!v.value.trim()) return c.value;
      const A = v.value.toLowerCase();
      return c.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), R = z(() => {
      const A = {};
      for (const T of x.value) {
        const O = T.type || "other";
        A[O] || (A[O] = []), A[O].push(T);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([T], [O]) => {
        const ce = I.indexOf(T), Y = I.indexOf(O);
        return ce >= 0 && Y >= 0 ? ce - Y : ce >= 0 ? -1 : Y >= 0 ? 1 : T.localeCompare(O);
      }).map(([T, O]) => ({ type: T, models: O }));
    });
    function L(A) {
      if (!A) return "Unknown";
      const I = A / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function P(A) {
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
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (T) => h.value = !0)
          })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: v.value,
            "onUpdate:modelValue": I[1] || (I[1] = (T) => v.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), M(Es, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), M(Ts, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length ? (a(), M(on, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                _(" Total: " + f(i.value.length) + " models • " + f(L(k.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, ge(R.value, (T) => (a(), M(it, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(T.models, (O) => (a(), M(Et, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...I[4] || (I[4] = [
                    _("📦", -1)
                  ])]),
                  title: g(() => [
                    _(f(O.filename), 1)
                  ]),
                  subtitle: g(() => [
                    _(f(L(O.size)), 1)
                  ]),
                  details: g(() => [
                    C(ft, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(ft, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ce) => P(O)
                    }, {
                      default: g(() => [...I[5] || (I[5] = [
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
            $.value.length ? (a(), M(it, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge($.value, (T) => (a(), M(Et, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...I[6] || (I[6] = [
                    _("⚠", -1)
                  ])]),
                  title: g(() => [
                    _(f(T.filename), 1)
                  ]),
                  subtitle: g(() => [...I[7] || (I[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var O;
                    return [
                      C(ft, {
                        label: "Required by:",
                        value: ((O = T.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(T.filename)
                    }, {
                      default: g(() => [...I[8] || (I[8] = [
                        _(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => S(T.filename)
                    }, {
                      default: g(() => [...I[9] || (I[9] = [
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
            !x.value.length && !$.value.length ? (a(), M(ss, {
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
        onClose: I[2] || (I[2] = (T) => h.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            I[10] || (I[10] = _(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            I[11] || (I[11] = _(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          C(re, {
            variant: "primary",
            onClick: p
          }, {
            default: g(() => [...I[12] || (I[12] = [
              _(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), M(Xa, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), cw = /* @__PURE__ */ pe(rw, [["__scopeId", "data-v-cb4f12b3"]]), uw = {
  key: 0,
  class: "indexing-progress"
}, dw = { class: "progress-info" }, fw = { class: "progress-label" }, mw = { class: "progress-count" }, vw = { class: "progress-bar" }, pw = { class: "modal-content" }, gw = { class: "modal-header" }, hw = { class: "modal-body" }, yw = { class: "input-group" }, ww = { class: "current-path" }, _w = { class: "input-group" }, bw = { class: "modal-footer" }, kw = { class: "modal-content" }, $w = { class: "modal-header" }, Cw = { class: "modal-body" }, xw = { class: "input-group" }, Sw = { class: "input-group" }, Iw = { class: "modal-footer" }, Ew = /* @__PURE__ */ ve({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = at(), { addToQueue: c } = _o(), u = s, d = b([]), m = b(!1), v = b(!1), h = b(null), w = b(""), p = b(!1), k = b(null), x = b(!1), $ = b(null), R = b(""), L = b(!1), P = b(!1), S = b(""), q = b(""), B = b(null), A = z(
      () => d.value.reduce((U, E) => U + (E.size || 0), 0)
    ), I = z(() => {
      if (!w.value.trim()) return d.value;
      const U = w.value.toLowerCase();
      return d.value.filter((E) => {
        const Z = E, se = E.sha256 || Z.sha256_hash || "";
        return E.filename.toLowerCase().includes(U) || se.toLowerCase().includes(U);
      });
    }), T = z(() => {
      const U = {};
      for (const Z of I.value) {
        const se = Z.type || "other";
        U[se] || (U[se] = []), U[se].push(Z);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([Z], [se]) => {
        const $e = E.indexOf(Z), Ee = E.indexOf(se);
        return $e >= 0 && Ee >= 0 ? $e - Ee : $e >= 0 ? -1 : Ee >= 0 ? 1 : Z.localeCompare(se);
      }).map(([Z, se]) => ({ type: Z, models: se }));
    });
    function O(U) {
      if (!U) return "Unknown";
      const E = 1024 * 1024 * 1024, Z = 1024 * 1024;
      return U >= E ? `${(U / E).toFixed(1)} GB` : U >= Z ? `${(U / Z).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function ce(U) {
      k.value = U.hash || U.filename;
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
    async function j() {
      if (R.value.trim()) {
        L.value = !0, h.value = null;
        try {
          const U = await i(R.value.trim());
          $.value = U.path, x.value = !1, R.value = "", await Q(), console.log(`Directory changed: ${U.models_indexed} models indexed`), u("refresh");
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
      }]), S.value = "", q.value = "", P.value = !1;
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
    }), (U, E) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: E[2] || (E[2] = (Z) => p.value = !0)
          }, {
            actions: g(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: Y
              }, {
                default: g(() => [
                  _(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (Z) => x.value = !0)
              }, {
                default: g(() => [...E[15] || (E[15] = [
                  _(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: E[1] || (E[1] = (Z) => P.value = !0)
              }, {
                default: g(() => [...E[16] || (E[16] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  _(" DOWNLOAD + ", -1)
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
          C(bo, {
            modelValue: w.value,
            "onUpdate:modelValue": E[3] || (E[3] = (Z) => w.value = Z),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || B.value ? (a(), M(Es, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (a(), M(Ts, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            d.value.length ? (a(), M(on, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                _(" Total: " + f(d.value.length) + " models • " + f(O(A.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, ge(T.value, (Z) => (a(), M(it, {
              key: Z.type,
              title: Z.type.toUpperCase(),
              count: Z.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(Z.models, (se) => (a(), M(Et, {
                  key: se.sha256 || se.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...E[17] || (E[17] = [
                    _("📦", -1)
                  ])]),
                  title: g(() => [
                    _(f(se.filename), 1)
                  ]),
                  subtitle: g(() => [
                    _(f(O(se.size)), 1)
                  ]),
                  details: g(() => [
                    C(ft, {
                      label: "Hash:",
                      value: se.hash ? se.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => ce(se)
                    }, {
                      default: g(() => [...E[18] || (E[18] = [
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
            I.value.length ? y("", !0) : (a(), M(ss, {
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
        onClose: E[4] || (E[4] = (Z) => p.value = !1)
      }, {
        content: g(() => [...E[19] || (E[19] = [
          t("p", null, [
            _(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            _(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      k.value ? (a(), M(Xa, {
        key: 0,
        identifier: k.value,
        onClose: E[5] || (E[5] = (Z) => k.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), M(wt, { to: "body" }, [
        x.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[9] || (E[9] = rt((Z) => x.value = !1, ["self"]))
        }, [
          t("div", pw, [
            t("div", gw, [
              E[20] || (E[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: E[6] || (E[6] = (Z) => x.value = !1)
              }, "✕")
            ]),
            t("div", hw, [
              t("div", yw, [
                E[21] || (E[21] = t("label", null, "Current Directory", -1)),
                t("code", ww, f($.value || "Not set"), 1)
              ]),
              t("div", _w, [
                E[22] || (E[22] = t("label", null, "New Directory Path", -1)),
                C(Qt, {
                  modelValue: R.value,
                  "onUpdate:modelValue": E[7] || (E[7] = (Z) => R.value = Z),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              E[23] || (E[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", bw, [
              C(Re, {
                variant: "secondary",
                onClick: E[8] || (E[8] = (Z) => x.value = !1)
              }, {
                default: g(() => [...E[24] || (E[24] = [
                  _(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Re, {
                variant: "primary",
                disabled: !R.value.trim() || L.value,
                loading: L.value,
                onClick: j
              }, {
                default: g(() => [
                  _(f(L.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), M(wt, { to: "body" }, [
        P.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[14] || (E[14] = rt((Z) => P.value = !1, ["self"]))
        }, [
          t("div", kw, [
            t("div", $w, [
              E[25] || (E[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: E[10] || (E[10] = (Z) => P.value = !1)
              }, "✕")
            ]),
            t("div", Cw, [
              t("div", xw, [
                E[26] || (E[26] = t("label", null, "Download URL", -1)),
                C(Qt, {
                  modelValue: S.value,
                  "onUpdate:modelValue": E[11] || (E[11] = (Z) => S.value = Z),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Sw, [
                E[27] || (E[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(Qt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": E[12] || (E[12] = (Z) => q.value = Z),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              E[28] || (E[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", Iw, [
              C(Re, {
                variant: "secondary",
                onClick: E[13] || (E[13] = (Z) => P.value = !1)
              }, {
                default: g(() => [...E[29] || (E[29] = [
                  _(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Re, {
                variant: "primary",
                disabled: !S.value.trim() || !q.value.trim(),
                onClick: te
              }, {
                default: g(() => [...E[30] || (E[30] = [
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
}), Tw = /* @__PURE__ */ pe(Ew, [["__scopeId", "data-v-73b78d84"]]), Pw = { class: "node-details" }, Rw = { class: "status-row" }, Mw = {
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
}, jw = /* @__PURE__ */ ve({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = z(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = z(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = z(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), M(pt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: g(() => [
        t("div", Pw, [
          t("div", Rw, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", l.value])
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
              _(f(e.node.repository) + " ", 1),
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
              (a(!0), r(G, null, ge(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        C(Re, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => n("close"))
        }, {
          default: g(() => [...d[11] || (d[11] = [
            _(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hw = /* @__PURE__ */ pe(jw, [["__scopeId", "data-v-b342f626"]]), Kw = { class: "dialog-message" }, qw = {
  key: 0,
  class: "dialog-details"
}, Yw = {
  key: 1,
  class: "dialog-warning"
}, Jw = /* @__PURE__ */ ve({
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
    return (s, o) => (a(), M(pt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", Kw, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", qw, [
          (a(!0), r(G, null, ge(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Yw, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          _(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        C(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: g(() => [
            _(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), M(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: g(() => [
            _(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
        }, {
          default: g(() => [
            _(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Qa = /* @__PURE__ */ pe(Jw, [["__scopeId", "data-v-3670b9f5"]]), Xw = { class: "mismatch-warning" }, Qw = { class: "version-mismatch" }, Zw = { class: "version-actual" }, e_ = { class: "version-expected" }, t_ = { key: 0 }, s_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, o_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, n_ = /* @__PURE__ */ ve({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: u } = at(), d = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = b(!1), v = b(null), h = b(""), w = b(!1), p = b(null), k = b(null), x = z(() => {
      if (!h.value.trim()) return d.value.nodes;
      const Y = h.value.toLowerCase();
      return d.value.nodes.filter(
        (j) => {
          var te, Q;
          return j.name.toLowerCase().includes(Y) || ((te = j.description) == null ? void 0 : te.toLowerCase().includes(Y)) || ((Q = j.repository) == null ? void 0 : Q.toLowerCase().includes(Y));
        }
      );
    }), $ = z(
      () => x.value.filter((Y) => Y.installed && Y.tracked)
    ), R = z(
      () => x.value.filter((Y) => !Y.installed && Y.tracked)
    ), L = z(
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
    const S = z(() => o.versionMismatches.length > 0);
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
      k.value = {
        title: "Track as Development Node",
        message: `Track "${Y}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const j = await i(Y);
            j.status === "success" ? (n("toast", `✓ Node "${Y}" tracked as development`, "success"), await ce()) : n("toast", `Failed to track node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error tracking node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
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
            m.value = !0;
            const j = await u(Y);
            j.status === "success" ? (n("toast", `✓ Node "${Y}" removed`, "success"), await ce()) : n("toast", `Failed to remove node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error removing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function O(Y) {
      k.value = {
        title: "Install Missing Node",
        message: `Install "${Y}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const j = await c(Y);
            j.status === "success" ? (n("toast", `✓ Node "${Y}" installed`, "success"), await ce()) : n("toast", `Failed to install node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error installing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function ce() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return et(ce), (Y, j) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (te) => w.value = !0)
          }, {
            actions: g(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: g(() => [...j[7] || (j[7] = [
                  _(" Browse Nodes ", -1)
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
            "onUpdate:modelValue": j[1] || (j[1] = (te) => h.value = te),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (a(), M(Es, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), M(Ts, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ce
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            d.value.total_count ? (a(), M(on, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                _(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), r(G, { key: 0 }, [
                  _(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), r(G, { key: 1 }, [
                  _(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            S.value ? (a(), M(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", Xw, [
                  j[8] || (j[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(G, null, ge(e.versionMismatches, (te) => (a(), M(Et, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: g(() => [...j[9] || (j[9] = [
                    _("⚠", -1)
                  ])]),
                  title: g(() => [
                    _(f(te.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Qw, [
                      t("span", Zw, f(te.actual), 1),
                      j[10] || (j[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", e_, f(te.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "warning",
                      size: "sm",
                      onClick: j[2] || (j[2] = (Q) => n("repair-environment"))
                    }, {
                      default: g(() => [...j[11] || (j[11] = [
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
            L.value.length ? (a(), M(it, {
              key: 2,
              title: "UNTRACKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(L.value, (te) => (a(), M(Et, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: g(() => [...j[12] || (j[12] = [
                    _("?", -1)
                  ])]),
                  title: g(() => [
                    _(f(te.name), 1)
                  ]),
                  subtitle: g(() => [...j[13] || (j[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    C(ft, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...j[14] || (j[14] = [
                        _(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => I(te.name)
                    }, {
                      default: g(() => [...j[15] || (j[15] = [
                        _(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Q) => T(te.name)
                    }, {
                      default: g(() => [...j[16] || (j[16] = [
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
            $.value.length ? (a(), M(it, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge($.value, (te) => (a(), M(Et, {
                  key: te.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    _(f(te.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    _(f(te.name), 1)
                  ]),
                  subtitle: g(() => [
                    te.version ? (a(), r("span", t_, f(te.source === "development" ? "" : "v") + f(te.version), 1)) : (a(), r("span", s_, "version unknown")),
                    t("span", o_, " • " + f(P(te.source)), 1)
                  ]),
                  details: g(() => [
                    C(ft, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...j[17] || (j[17] = [
                        _(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: A
                    }, {
                      default: g(() => [...j[18] || (j[18] = [
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
            R.value.length ? (a(), M(it, {
              key: 4,
              title: "MISSING",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(R.value, (te) => (a(), M(Et, {
                  key: te.name,
                  status: "missing"
                }, {
                  icon: g(() => [...j[19] || (j[19] = [
                    _("!", -1)
                  ])]),
                  title: g(() => [
                    _(f(te.name), 1)
                  ]),
                  subtitle: g(() => [...j[20] || (j[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    C(ft, {
                      label: "Required by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => B(te)
                    }, {
                      default: g(() => [...j[21] || (j[21] = [
                        _(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => O(te.name)
                    }, {
                      default: g(() => [...j[22] || (j[22] = [
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
            !$.value.length && !R.value.length && !L.value.length ? (a(), M(ss, {
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
        onClose: j[4] || (j[4] = (te) => w.value = !1)
      }, {
        content: g(() => [...j[23] || (j[23] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            _(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            _(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Untracked:"),
            _(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          C(re, {
            variant: "primary",
            onClick: j[3] || (j[3] = (te) => w.value = !1)
          }, {
            default: g(() => [...j[24] || (j[24] = [
              _(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), M(Hw, {
        key: 0,
        node: p.value,
        onClose: j[5] || (j[5] = (te) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      k.value ? (a(), M(Qa, {
        key: 1,
        title: k.value.title,
        message: k.value.message,
        warning: k.value.warning,
        "confirm-label": k.value.confirmLabel,
        destructive: k.value.destructive,
        onConfirm: k.value.onConfirm,
        onCancel: j[6] || (j[6] = (te) => k.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), a_ = /* @__PURE__ */ pe(n_, [["__scopeId", "data-v-1555a802"]]);
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
}, d_ = /* @__PURE__ */ ve({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = b(!1), n = z(() => {
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
        class: Ie(["copy-btn", { copied: o.value }]),
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
}), f_ = /* @__PURE__ */ pe(d_, [["__scopeId", "data-v-7768a58d"]]), m_ = { class: "remote-title" }, v_ = {
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
}, b_ = /* @__PURE__ */ ve({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = z(() => s.fetchingRemote === s.remote.name), n = z(() => s.remote.is_default), l = z(() => s.syncStatus && s.syncStatus.behind > 0), i = z(() => s.syncStatus && s.syncStatus.ahead > 0), c = z(() => s.remote.push_url !== s.remote.fetch_url), u = z(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = z(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), M(Et, {
      status: n.value ? "synced" : void 0
    }, eo({
      icon: g(() => [
        _(f(n.value ? "🔗" : "🌐"), 1)
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
          onClick: v[0] || (v[0] = rt(() => {
          }, ["stop"]))
        }, f(d.value), 9, w_)) : (a(), r("span", __, f(d.value), 1))
      ]),
      actions: g(() => [
        C(re, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (h) => m.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...v[6] || (v[6] = [
            _(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        C(re, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (h) => m.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            _(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(re, {
          variant: i.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (h) => m.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            _(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(re, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (h) => m.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            _(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), M(re, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (h) => m.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...v[8] || (v[8] = [
            _(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), M(ft, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              C(f_, {
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
}), k_ = /* @__PURE__ */ pe(b_, [["__scopeId", "data-v-8310f3a8"]]), $_ = ["for"], C_ = {
  key: 0,
  class: "base-form-field-required"
}, x_ = { class: "base-form-field-input" }, S_ = {
  key: 1,
  class: "base-form-field-error"
}, I_ = {
  key: 2,
  class: "base-form-field-hint"
}, E_ = /* @__PURE__ */ ve({
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
    const s = e, o = z(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), r("div", {
      class: Ie(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        _(f(e.label) + " ", 1),
        e.required ? (a(), r("span", C_, "*")) : y("", !0)
      ], 8, $_)) : y("", !0),
      t("div", x_, [
        qe(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", S_, f(e.error), 1)) : e.hint ? (a(), r("span", I_, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ia = /* @__PURE__ */ pe(E_, [["__scopeId", "data-v-9a1cf296"]]), T_ = { class: "remote-form" }, P_ = { class: "form-header" }, R_ = { class: "form-body" }, M_ = {
  key: 0,
  class: "form-error"
}, D_ = { class: "form-actions" }, L_ = /* @__PURE__ */ ve({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = b({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), i = b(!1), c = b(null);
    Ct(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = z(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
        C(Ot, null, {
          default: g(() => [
            _(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", R_, [
        C(ia, {
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
        C(ia, {
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
        C(ia, { label: "Push URL (optional)" }, {
          default: g(() => [
            C(Qt, {
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
        C(re, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: i.value,
          onClick: d
        }, {
          default: g(() => [
            _(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(re, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (h) => m.$emit("cancel"))
        }, {
          default: g(() => [...v[4] || (v[4] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), O_ = /* @__PURE__ */ pe(L_, [["__scopeId", "data-v-56021b18"]]), A_ = { class: "conflict-summary-box" }, N_ = { class: "summary-header" }, U_ = { class: "summary-text" }, z_ = { key: 0 }, F_ = {
  key: 1,
  class: "all-resolved"
}, B_ = { class: "summary-progress" }, V_ = { class: "progress-bar" }, W_ = { class: "progress-text" }, G_ = /* @__PURE__ */ ve({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = z(
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
}), j_ = /* @__PURE__ */ pe(G_, [["__scopeId", "data-v-4e9e6cc9"]]), H_ = { class: "modal-header" }, K_ = { class: "modal-title" }, q_ = { class: "modal-body" }, Y_ = {
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
}, gb = { class: "modal-actions" }, ql = "comfygit.pullModelStrategy", hb = /* @__PURE__ */ ve({
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
    const o = e, n = s, l = b(localStorage.getItem(ql) || "skip");
    Ct(l, ($) => {
      localStorage.setItem(ql, $);
    });
    const i = z(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = z(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = z(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = z(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = z(() => o.preview && br(o.preview) ? o.preview : null), v = z(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), h = z(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = z(
      () => v.value > 0 && h.value === v.value
    ), p = z(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function k($) {
      if (!m.value) return !1;
      const R = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((L) => L.name === R);
    }
    function x($) {
      const R = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: R });
    }
    return ($, R) => {
      var L, P;
      return a(), M(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[11] || (R[11] = (S) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: R[10] || (R[10] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", H_, [
              t("h3", K_, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: R[0] || (R[0] = (S) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", q_, [
              e.error ? (a(), r("div", Y_, [
                R[13] || (R[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  R[12] || (R[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", J_, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", X_, [...R[14] || (R[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                _(" Loading preview... ", -1)
              ])])) : (L = e.preview) != null && L.has_uncommitted_changes ? (a(), r(G, { key: 2 }, [
                R[15] || (R[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                R[16] || (R[16] = t("div", { class: "options-section" }, [
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
                  R[17] || (R[17] = t("span", { class: "icon" }, "📥", -1)),
                  _(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", Z_, [
                  R[21] || (R[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", eb, [
                    t("summary", null, [
                      R[18] || (R[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", tb, f(c.value) + " changes", 1)
                    ]),
                    t("div", sb, [
                      (a(!0), r(G, null, ge(e.preview.changes.workflows.added, (S) => (a(), r("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128)),
                      (a(!0), r(G, null, ge(e.preview.changes.workflows.modified, (S) => (a(), r("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        _(" ~ " + f(S) + " ", 1),
                        k(S) ? (a(), r("span", ob, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(G, null, ge(e.preview.changes.workflows.deleted, (S) => (a(), r("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", nb, [
                    t("summary", null, [
                      R[19] || (R[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", ab, f(u.value) + " to install", 1)
                    ]),
                    t("div", lb, [
                      (a(!0), r(G, null, ge(e.preview.changes.nodes.to_install, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", ib, [
                    t("summary", null, [
                      R[20] || (R[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", rb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", cb, [
                      (a(!0), r(G, null, ge(e.preview.changes.models.referenced, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item"
                      }, f(S), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), M(j_, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": h.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", ub, [
                  R[26] || (R[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", db, [
                    t("label", fb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[1] || (R[1] = (S) => l.value = S),
                        value: "all"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      R[22] || (R[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", mb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[2] || (R[2] = (S) => l.value = S),
                        value: "required"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      R[23] || (R[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", vb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[3] || (R[3] = (S) => l.value = S),
                        value: "skip"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      R[24] || (R[24] = t("span", null, "Skip model downloads", -1)),
                      R[25] || (R[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  R[27] || (R[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", pb, [
                  R[28] || (R[28] = t("span", { class: "icon" }, "✓", -1)),
                  _(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", gb, [
              C(re, {
                variant: "secondary",
                onClick: R[4] || (R[4] = (S) => $.$emit("close"))
              }, {
                default: g(() => [...R[29] || (R[29] = [
                  _(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(G, { key: 0 }, [
                C(re, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: R[5] || (R[5] = (S) => x(!1))
                }, {
                  default: g(() => [...R[30] || (R[30] = [
                    _(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(re, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: R[6] || (R[6] = (S) => x(!0))
                }, {
                  default: g(() => [...R[31] || (R[31] = [
                    _(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (P = e.preview) != null && P.has_uncommitted_changes ? (a(), M(re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: R[7] || (R[7] = (S) => x(!0))
              }, {
                default: g(() => [...R[32] || (R[32] = [
                  _(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(G, { key: 2 }, [
                m.value && !w.value ? (a(), M(re, {
                  key: 0,
                  variant: "primary",
                  onClick: R[8] || (R[8] = (S) => n("openConflictResolution"))
                }, {
                  default: g(() => [
                    _(" Resolve Conflicts (" + f(h.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), M(re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: R[9] || (R[9] = (S) => x(!1))
                }, {
                  default: g(() => [...R[33] || (R[33] = [
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
}), yb = /* @__PURE__ */ pe(hb, [["__scopeId", "data-v-300c7b2f"]]), wb = { class: "modal-header" }, _b = { class: "modal-title" }, bb = { class: "modal-body" }, kb = {
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
}, Bb = { class: "modal-actions" }, Vb = /* @__PURE__ */ ve({
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
    const o = s, n = b(!1);
    function l(i) {
      o("push", { force: i });
    }
    return (i, c) => {
      var u, d, m;
      return a(), M(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = rt(() => {
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
                _(" Loading preview... ", -1)
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
                    (a(!0), r(G, null, ge(e.preview.commits, (v) => (a(), r("div", {
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
                    Ye(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => n.value = v)
                    }, null, 512), [
                      [Xo, n.value]
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
                    (a(!0), r(G, null, ge(e.preview.commits, (v) => (a(), r("div", {
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
                  _(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Bb, [
              C(re, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: g(() => [...c[18] || (c[18] = [
                  _(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(G, { key: 0 }, [
                C(re, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: g(() => [...c[19] || (c[19] = [
                    _(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(re, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: g(() => [...c[20] || (c[20] = [
                    _(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), M(re, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (v) => l(!1))
              }, {
                default: g(() => [...c[21] || (c[21] = [
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
}), Wb = /* @__PURE__ */ pe(Vb, [["__scopeId", "data-v-ae86b6a7"]]), Gb = { class: "resolution-choice-group" }, jb = ["disabled"], Hb = ["disabled"], Kb = /* @__PURE__ */ ve({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", Gb, [
      t("button", {
        class: Ie(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, jb),
      t("button", {
        class: Ie(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Hb)
    ]));
  }
}), qb = /* @__PURE__ */ pe(Kb, [["__scopeId", "data-v-985715ed"]]), Yb = { class: "conflict-header" }, Jb = { class: "conflict-info" }, Xb = { class: "workflow-name" }, Qb = { class: "conflict-description" }, Zb = {
  key: 0,
  class: "resolved-badge"
}, ek = { class: "resolved-text" }, tk = { class: "conflict-hashes" }, sk = { class: "hash-item" }, ok = { class: "hash-item" }, nk = { class: "conflict-actions" }, ak = /* @__PURE__ */ ve({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = b(o.resolution);
    Ct(() => o.resolution, (d) => {
      l.value = d;
    }), Ct(l, (d) => {
      d && n("resolve", d);
    });
    const i = z(() => l.value !== null), c = z(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = z(() => {
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
        class: Ie(["conflict-item", { resolved: i.value }])
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
            m[3] || (m[3] = _("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", ok, [
            m[4] || (m[4] = _("Theirs: ", -1)),
            t("code", null, f(((h = e.conflict.target_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", nk, [
          C(qb, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), lk = /* @__PURE__ */ pe(ak, [["__scopeId", "data-v-506d3bbf"]]), ik = { class: "resolution-content" }, rk = {
  key: 0,
  class: "error-box"
}, ck = { class: "resolution-header" }, uk = { class: "header-stats" }, dk = { class: "stat" }, fk = { class: "stat-value" }, mk = { class: "stat resolved" }, vk = { class: "stat-value" }, pk = {
  key: 0,
  class: "stat pending"
}, gk = { class: "stat-value" }, hk = { class: "conflicts-list" }, yk = {
  key: 1,
  class: "all-resolved-message"
}, wk = /* @__PURE__ */ ve({
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
    const o = e, n = s, l = z(() => o.resolutions.size), i = z(() => o.workflowConflicts.length - l.value), c = z(() => l.value === o.workflowConflicts.length), u = z(
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
    return (w, p) => (a(), M(pt, {
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
            (a(!0), r(G, null, ge(e.workflowConflicts, (k) => (a(), M(lk, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (x) => m(k.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", yk, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Re, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...p[7] || (p[7] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Re, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: h
        }, {
          default: g(() => [
            _(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _k = /* @__PURE__ */ pe(wk, [["__scopeId", "data-v-c58d150d"]]), bk = { class: "node-conflict-item" }, kk = { class: "node-header" }, $k = { class: "node-name" }, Ck = { class: "node-id" }, xk = { class: "version-comparison" }, Sk = { class: "version yours" }, Ik = { class: "version theirs" }, Ek = { class: "chosen-version" }, Tk = { class: "chosen" }, Pk = { class: "chosen-reason" }, Rk = { class: "affected-workflows" }, Mk = { class: "wf-source" }, Dk = { class: "wf-version" }, Lk = /* @__PURE__ */ ve({
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
          (a(!0), r(G, null, ge(e.conflict.affected_workflows, (n) => (a(), r("li", {
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
}), Ok = /* @__PURE__ */ pe(Lk, [["__scopeId", "data-v-8b626725"]]), Ak = { class: "validation-content" }, Nk = {
  key: 0,
  class: "compatible-message"
}, Uk = { class: "conflicts-list" }, zk = {
  key: 2,
  class: "warnings-section"
}, Fk = /* @__PURE__ */ ve({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = z(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), M(pt, {
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
              (a(!0), r(G, null, ge(e.validation.node_conflicts, (u) => (a(), M(Ok, {
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
              (a(!0), r(G, null, ge(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Re, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Re, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            _(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
        }, {
          default: g(() => [
            _(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Bk = /* @__PURE__ */ pe(Fk, [["__scopeId", "data-v-fefd26ed"]]), Vk = { key: 0 }, Wk = /* @__PURE__ */ ve({
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
    } = at(), k = b([]), x = b(null), $ = b({}), R = b(!1), L = b(null), P = b(""), S = b(!1), q = b(null), B = b(!1), A = b("add"), I = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = z(() => {
      if (!P.value.trim()) return k.value;
      const he = P.value.toLowerCase();
      return k.value.filter(
        (W) => W.name.toLowerCase().includes(he) || W.fetch_url.toLowerCase().includes(he) || W.push_url.toLowerCase().includes(he)
      );
    });
    async function O() {
      R.value = !0, L.value = null;
      try {
        const he = await n();
        k.value = he.remotes, x.value = he.current_branch_tracking || null, await Promise.all(
          he.remotes.map(async (W) => {
            const F = await d(W.name);
            F && ($.value[W.name] = F);
          })
        );
      } catch (he) {
        L.value = he instanceof Error ? he.message : "Failed to load remotes";
      } finally {
        R.value = !1;
      }
    }
    function ce() {
      A.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function Y(he) {
      const W = k.value.find((F) => F.name === he);
      W && (A.value = "edit", I.value = {
        name: W.name,
        fetchUrl: W.fetch_url,
        pushUrl: W.push_url
      }, B.value = !0);
    }
    async function j(he) {
      try {
        A.value === "add" ? await l(he.name, he.fetchUrl) : await c(he.name, he.fetchUrl, he.pushUrl || void 0), B.value = !1, await O();
      } catch (W) {
        L.value = W instanceof Error ? W.message : "Operation failed";
      }
    }
    function te() {
      B.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(he) {
      q.value = he;
      try {
        await u(he);
        const W = await d(he);
        W && ($.value[he] = W), o("toast", `✓ Fetched from ${he}`, "success");
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function N(he) {
      if (confirm(`Remove remote "${he}"?`))
        try {
          await i(he), await O();
        } catch (W) {
          L.value = W instanceof Error ? W.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const E = b("idle"), Z = z(() => E.value === "pull_preview"), se = z(
      () => E.value === "resolving" || E.value === "validating"
    ), $e = z(
      () => E.value === "validation_review" || E.value === "executing"
    ), Ee = b(!1), Ue = b(null), Ke = b(!1), ke = b(null), Te = b(!1), Ve = b(null), we = b(null), ae = b(/* @__PURE__ */ new Map()), Ge = b(null), Pe = b(null), D = z(() => Ve.value && br(Ve.value) ? Ve.value : null);
    async function V(he) {
      ke.value = he, E.value = "pull_preview", Te.value = !0, Ve.value = null, we.value = null;
      try {
        Ve.value = await m(he);
      } catch (W) {
        we.value = W instanceof Error ? W.message : "Failed to load pull preview";
      } finally {
        Te.value = !1;
      }
    }
    function ne() {
      E.value = "idle", Ve.value = null, we.value = null, ke.value = null;
    }
    async function ie(he) {
      if (!ke.value) return;
      E.value = "executing", we.value = null;
      const W = ke.value;
      try {
        const F = await v(W, he);
        if (F.rolled_back) {
          we.value = `Pull failed and was rolled back: ${F.error || "Unknown error"}`, E.value = "pull_preview";
          return;
        }
        Se(), E.value = "idle", o("toast", `✓ Pulled from ${W}`, "success"), await O();
      } catch (F) {
        we.value = F instanceof Error ? F.message : "Pull failed", E.value = "pull_preview";
      }
    }
    function fe() {
      D.value && (E.value = "resolving", Pe.value = null);
    }
    function me(he, W) {
      ae.value.set(he, { name: he, resolution: W });
    }
    function Ce() {
      E.value = "pull_preview";
    }
    async function xe() {
      E.value = "validating", Pe.value = null;
      try {
        const he = Array.from(ae.value.values());
        Ge.value = await p(ke.value, he), E.value = "validation_review";
      } catch (he) {
        Pe.value = he instanceof Error ? he.message : "Validation failed", E.value = "resolving";
      }
    }
    async function le() {
      E.value = "executing";
      const he = ke.value;
      try {
        const W = Array.from(ae.value.values()), F = await v(he, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: W
        });
        if (F.rolled_back) {
          we.value = `Pull failed and was rolled back: ${F.error || "Unknown error"}`, E.value = "pull_preview";
          return;
        }
        Se(), E.value = "idle", o("toast", `✓ Pulled from ${he}`, "success"), await O();
      } catch (W) {
        we.value = W instanceof Error ? W.message : "Pull failed", E.value = "validation_review";
      }
    }
    function de() {
      E.value = "resolving";
    }
    function Le() {
      Se(), E.value = "idle";
    }
    function Se() {
      ae.value.clear(), Ge.value = null, Pe.value = null, we.value = null, Ve.value = null, ke.value = null;
    }
    async function ee(he) {
      ke.value = he, Ee.value = !0, Te.value = !0, Ue.value = null;
      try {
        Ue.value = await h(he);
      } catch (W) {
        L.value = W instanceof Error ? W.message : "Failed to load push preview";
      } finally {
        Te.value = !1;
      }
    }
    function K() {
      Ee.value = !1, Ue.value = null, ke.value = null;
    }
    async function Me(he) {
      if (!ke.value) return;
      Ke.value = !0;
      const W = ke.value;
      try {
        await w(W, he), K(), o("toast", `✓ Pushed to ${W}`, "success"), await O();
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Push failed", "error");
      } finally {
        Ke.value = !1;
      }
    }
    function ye() {
      const he = ke.value;
      K(), he && V(he);
    }
    return et(O), (he, W) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (F) => S.value = !0)
          }, {
            actions: g(() => [
              B.value ? y("", !0) : (a(), M(re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ce
              }, {
                default: g(() => [...W[3] || (W[3] = [
                  _(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          B.value ? y("", !0) : (a(), M(bo, {
            key: 0,
            modelValue: P.value,
            "onUpdate:modelValue": W[1] || (W[1] = (F) => P.value = F),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          R.value ? (a(), M(Es, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (a(), M(Ts, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            B.value ? (a(), M(O_, {
              key: 0,
              mode: A.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: j,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            k.value.length && !B.value ? (a(), M(on, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                _(" Total: " + f(k.value.length) + " remote" + f(k.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), r("span", Vk, " • Tracking: " + f(x.value.remote) + "/" + f(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !B.value ? (a(), M(it, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(T.value, (F) => (a(), M(k_, {
                  key: F.name,
                  remote: F,
                  "sync-status": $.value[F.name],
                  "fetching-remote": q.value,
                  onFetch: Q,
                  onEdit: Y,
                  onRemove: N,
                  onPull: V,
                  onPush: ee
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !B.value ? (a(), M(ss, {
              key: 3,
              icon: "🌐",
              message: P.value ? `No remotes match '${P.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                C(re, {
                  variant: "primary",
                  onClick: ce
                }, {
                  default: g(() => [...W[4] || (W[4] = [
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
      C(os, {
        show: S.value,
        title: "About Git Remotes",
        onClose: W[2] || (W[2] = (F) => S.value = !1)
      }, {
        content: g(() => [...W[5] || (W[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            _(" The "),
            t("strong", null, '"origin"'),
            _(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          C(re, {
            variant: "link",
            onClick: U
          }, {
            default: g(() => [...W[6] || (W[6] = [
              _(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(yb, {
        show: Z.value,
        "remote-name": ke.value || "",
        preview: Ve.value,
        loading: Te.value,
        pulling: E.value === "executing",
        error: we.value,
        "conflict-resolutions": ae.value,
        onClose: ne,
        onPull: ie,
        onOpenConflictResolution: fe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(Wb, {
        show: Ee.value,
        "remote-name": ke.value || "",
        preview: Ue.value,
        loading: Te.value,
        pushing: Ke.value,
        onClose: K,
        onPush: Me,
        onPullFirst: ye
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      se.value && D.value ? (a(), M(_k, {
        key: 0,
        "workflow-conflicts": D.value.workflow_conflicts,
        resolutions: ae.value,
        "operation-type": "pull",
        validating: E.value === "validating",
        error: Pe.value,
        onClose: Ce,
        onResolve: me,
        onApply: xe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      $e.value && Ge.value ? (a(), M(Bk, {
        key: 1,
        validation: Ge.value,
        "operation-type": "pull",
        executing: E.value === "executing",
        onProceed: le,
        onGoBack: de,
        onCancel: Le
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Gk = /* @__PURE__ */ pe(Wk, [["__scopeId", "data-v-9ae3b76d"]]), jk = { class: "setting-info" }, Hk = { class: "setting-label" }, Kk = {
  key: 0,
  class: "required-marker"
}, qk = {
  key: 0,
  class: "setting-description"
}, Yk = { class: "setting-control" }, Jk = /* @__PURE__ */ ve({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ie(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", jk, [
        t("div", Hk, [
          _(f(e.label) + " ", 1),
          e.required ? (a(), r("span", Kk, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", qk, f(e.description), 1)) : y("", !0)
      ]),
      t("div", Yk, [
        qe(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), ra = /* @__PURE__ */ pe(Jk, [["__scopeId", "data-v-cb5d236c"]]), Xk = { class: "toggle" }, Qk = ["checked", "disabled"], Zk = /* @__PURE__ */ ve({
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
}), e2 = /* @__PURE__ */ pe(Zk, [["__scopeId", "data-v-71c0f550"]]), t2 = { class: "workspace-settings-content" }, s2 = { class: "settings-section" }, o2 = { class: "path-setting" }, n2 = { class: "path-value" }, a2 = { class: "path-setting" }, l2 = { class: "path-value" }, i2 = { class: "settings-section" }, r2 = { class: "settings-section" }, c2 = { class: "settings-section" }, u2 = /* @__PURE__ */ ve({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = at(), u = b(!1), d = b(null), m = b(null), v = b(null), h = b(null), w = b(""), p = b(""), k = b(!1);
    function x(B) {
      return B.join(" ");
    }
    function $(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const R = z(() => {
      if (!h.value) return !1;
      const B = w.value !== (h.value.civitai_api_key || ""), A = p.value !== x(h.value.comfyui_extra_args || []);
      return B || A;
    });
    async function L() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), h.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = x(v.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = B !== "false";
      } catch (B) {
        d.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function P() {
      var B, A;
      m.value = null;
      try {
        const I = {};
        w.value !== (((B = h.value) == null ? void 0 : B.civitai_api_key) || "") && (I.civitai_api_key = w.value || null), p.value !== x(((A = h.value) == null ? void 0 : A.comfyui_extra_args) || []) && (I.comfyui_extra_args = $(p.value)), await c(I, n.workspacePath || void 0), await L(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (I) {
        const T = I instanceof Error ? I.message : "Failed to save settings";
        m.value = { type: "error", message: T }, l("error", T);
      }
    }
    function S() {
      h.value && (w.value = h.value.civitai_api_key || "", p.value = x(h.value.comfyui_extra_args || []), m.value = null);
    }
    function q(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return s({
      saveSettings: P,
      resetSettings: S,
      hasChanges: R,
      loadSettings: L
    }), et(L), (B, A) => (a(), r("div", t2, [
      u.value ? (a(), M(Es, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), M(Ts, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: L
      }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
        C(it, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var I, T;
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
                  t("div", l2, f(((T = v.value) == null ? void 0 : T.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(it, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", i2, [
              C(ra, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  C(Pn, {
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
        C(it, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", r2, [
              C(ra, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  C(Pn, {
                    modelValue: p.value,
                    "onUpdate:modelValue": A[1] || (A[1] = (I) => p.value = I),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              A[7] || (A[7] = t("div", { class: "setting-hint" }, [
                _(" Common flags: "),
                t("code", null, "--lowvram"),
                _(", "),
                t("code", null, "--highvram"),
                _(", "),
                t("code", null, "--listen 0.0.0.0"),
                _(", "),
                t("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        C(it, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", c2, [
              C(ra, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  C(e2, {
                    modelValue: k.value,
                    "onUpdate:modelValue": [
                      A[2] || (A[2] = (I) => k.value = I),
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
        m.value ? (a(), M(on, {
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
}), kr = /* @__PURE__ */ pe(u2, [["__scopeId", "data-v-004ef04f"]]), d2 = /* @__PURE__ */ ve({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), M(Tt, null, {
      header: g(() => [
        C(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var i, c;
            return [
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !((i = s.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  _(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (a(), M(re, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  _(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        C(kr, {
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
}, p2 = /* @__PURE__ */ ve({
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
      (a(!0), r(G, null, ge(e.tabs, (u) => (a(), r("button", {
        key: u.id,
        class: Ie([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        _(f(u.label) + " ", 1),
        u.badge ? (a(), r("span", v2, f(u.badge), 1)) : y("", !0)
      ], 10, m2))), 128))
    ]));
  }
}), $r = /* @__PURE__ */ pe(p2, [["__scopeId", "data-v-ad5e6cad"]]), g2 = { class: "log-viewer-wrapper" }, h2 = ["disabled", "title"], y2 = /* @__PURE__ */ ve({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = b(null), n = b("idle"), l = z(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      var v;
      await en();
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
        (a(!0), r(G, null, ge(l.value, (h, w) => (a(), r("div", {
          key: w,
          class: Ie(`log-line log-level-${h.level.toLowerCase()}`)
        }, f(h.text), 3))), 128))
      ], 544)
    ]));
  }
}), Cr = /* @__PURE__ */ pe(y2, [["__scopeId", "data-v-c0cc6d21"]]), w2 = /* @__PURE__ */ ve({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = at(), c = b("workspace"), u = b([]), d = b(!1), m = b(null), v = b(!1), h = b(null), w = b(null), p = b(!1), k = z(() => c.value === "workspace" ? h.value : w.value);
    async function x() {
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
        const [L, P] = await Promise.all([
          o(),
          l()
        ]);
        L.exists && (h.value = L.path), P.exists && (w.value = P.path);
      } catch {
      }
    }
    async function R() {
      if (k.value) {
        p.value = !0;
        try {
          await i(k.value);
        } catch (L) {
          console.error("Failed to open log file:", L);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ct(c, () => {
      x();
    }), et(() => {
      x(), $();
    }), (L, P) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (S) => v.value = !0)
          }, {
            actions: g(() => [
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: R,
                disabled: !k.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  _(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: d.value
              }, {
                default: g(() => [
                  _(f(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C($r, {
            modelValue: c.value,
            "onUpdate:modelValue": P[1] || (P[1] = (S) => c.value = S),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), M(Es, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), M(Ts, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            u.value.length === 0 ? (a(), M(ss, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), M(Cr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(os, {
        show: v.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (S) => v.value = !1)
      }, {
        content: g(() => [...P[4] || (P[4] = [
          t("p", null, [
            t("strong", null, "Workspace Logs:"),
            _(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Orchestrator Logs:"),
            _(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            _(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            _(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            _(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            _(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: g(() => [
          C(re, {
            variant: "primary",
            onClick: P[2] || (P[2] = (S) => v.value = !1)
          }, {
            default: g(() => [...P[5] || (P[5] = [
              _(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _2 = /* @__PURE__ */ ve({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = at(), i = b([]), c = b(!1), u = b(null), d = b(!1), m = b("production"), v = b(null), h = b(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        i.value = await s(void 0, 500);
        try {
          const x = await o();
          m.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function p() {
      try {
        const x = await n();
        x.exists && (v.value = x.path);
      } catch {
      }
    }
    async function k() {
      if (v.value) {
        h.value = !0;
        try {
          await l(v.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          h.value = !1;
        }
      }
    }
    return et(() => {
      w(), p();
    }), (x, $) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (R) => d.value = !0)
          }, {
            actions: g(() => [
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: !v.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  _(f(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: c.value
              }, {
                default: g(() => [
                  _(f(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          c.value ? (a(), M(Es, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), M(Ts, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length === 0 ? (a(), M(ss, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), M(Cr, {
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
        onClose: $[2] || ($[2] = (R) => d.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            $[3] || ($[3] = _(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, f(m.value), 1),
            $[4] || ($[4] = _(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            _(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            _(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            _(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            _(" Detailed debugging information ")
          ], -1))
        ]),
        actions: g(() => [
          C(re, {
            variant: "primary",
            onClick: $[1] || ($[1] = (R) => d.value = !1)
          }, {
            default: g(() => [...$[6] || ($[6] = [
              _(" Got it ", -1)
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
}, C2 = /* @__PURE__ */ ve({
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
    return (s, o) => (a(), M(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, eo({
      icon: g(() => [
        _(f(e.isCurrent ? "🌍" : "○"), 1)
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
          _(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: g(() => [
        qe(s.$slots, "actions", {}, void 0, !0)
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
          e.lastUsed && e.showLastUsed ? (a(), M(ft, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), x2 = /* @__PURE__ */ pe(C2, [["__scopeId", "data-v-9231917a"]]), S2 = { class: "env-details" }, I2 = { class: "status-row" }, E2 = {
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
}, V2 = { class: "value" }, W2 = { class: "footer-actions" }, G2 = /* @__PURE__ */ ve({
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
    return (l, i) => (a(), M(pt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: g(() => [
        t("div", S2, [
          t("div", I2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", e.environment.is_current ? "current" : "inactive"])
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
          e.canDelete ? (a(), M(Re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (c) => o("delete", e.environment.name))
          }, {
            default: g(() => [...i[12] || (i[12] = [
              _(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          C(Re, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (c) => o("close"))
          }, {
            default: g(() => [...i[13] || (i[13] = [
              _(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), j2 = /* @__PURE__ */ pe(G2, [["__scopeId", "data-v-59855453"]]), xr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Sr = "3.12", Za = [
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
], Ir = "auto", H2 = { class: "progress-bar" }, K2 = /* @__PURE__ */ ve({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = z(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", H2, [
      t("div", {
        class: Ie(["progress-fill", e.variant]),
        style: Gt({ width: o.value })
      }, null, 6)
    ]));
  }
}), Kn = /* @__PURE__ */ pe(K2, [["__scopeId", "data-v-1beb0512"]]), q2 = { class: "task-progress" }, Y2 = { class: "progress-info" }, J2 = { class: "progress-percentage" }, X2 = { class: "progress-message" }, Q2 = {
  key: 0,
  class: "progress-steps"
}, Z2 = { class: "step-icon" }, e$ = { class: "step-label" }, t$ = /* @__PURE__ */ ve({
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
      C(Kn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Y2, [
        t("span", J2, f(e.progress) + "%", 1),
        t("span", X2, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", Q2, [
        (a(!0), r(G, null, ge(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Ie(["step", o(c.id)])
        }, [
          t("span", Z2, f(n(c.id)), 1),
          t("span", e$, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Mn = /* @__PURE__ */ pe(t$, [["__scopeId", "data-v-9d1de66c"]]), s$ = {
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
}, w$ = 10, _$ = /* @__PURE__ */ ve({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = at(), c = b(""), u = b(Sr), d = b("latest"), m = b(Ir), v = b(!1), h = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = b(!1), p = b(!1), k = b({
      progress: 0,
      message: ""
    });
    let x = null, $ = 0;
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
    ], L = b(null);
    function P() {
      p.value || o("close");
    }
    async function S() {
      const T = c.value.trim();
      if (T) {
        p.value = !0, k.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: T,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ce = await l(O);
          ce.status === "started" ? q() : ce.status === "error" && (k.value = {
            progress: 0,
            message: ce.message || "Failed to start creation",
            error: ce.message
          });
        } catch (O) {
          k.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function q() {
      x || ($ = 0, x = window.setInterval(async () => {
        try {
          const T = await i();
          $ = 0, k.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (B(), o("created", T.environment_name || c.value.trim(), v.value)) : T.state === "error" ? (B(), k.value.error = T.error || T.message) : T.state === "idle" && p.value && (B(), k.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= w$ && (B(), k.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      x && (clearInterval(x), x = null);
    }
    function A() {
      p.value = !1, k.value = { progress: 0, message: "" }, o("close");
    }
    async function I() {
      w.value = !0;
      try {
        h.value = await n();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        w.value = !1;
      }
    }
    return et(async () => {
      var T;
      await en(), (T = L.value) == null || T.focus(), I();
    }), to(() => {
      B();
    }), (T, O) => (a(), M(pt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: P
    }, {
      body: g(() => [
        p.value ? (a(), r("div", m$, [
          t("p", v$, [
            O[11] || (O[11] = _(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            O[12] || (O[12] = _("... ", -1))
          ]),
          C(Mn, {
            progress: k.value.progress,
            message: k.value.message,
            "current-phase": k.value.phase,
            variant: k.value.error ? "error" : "default",
            "show-steps": !0,
            steps: R
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          k.value.error ? y("", !0) : (a(), r("p", p$, " This may take several minutes. Please wait... ")),
          k.value.error ? (a(), r("div", g$, [
            t("p", h$, f(k.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", s$, [
          t("div", o$, [
            O[6] || (O[6] = t("label", { class: "form-label" }, "Name", -1)),
            Ye(t("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": O[0] || (O[0] = (ce) => c.value = ce),
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
            Ye(t("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (ce) => u.value = ce),
              class: "form-select"
            }, [
              (a(!0), r(G, null, ge(Be(xr), (ce) => (a(), r("option", {
                key: ce,
                value: ce
              }, f(ce), 9, a$))), 128))
            ], 512), [
              [ps, u.value]
            ])
          ]),
          t("div", l$, [
            O[8] || (O[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (ce) => d.value = ce),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(G, null, ge(h.value, (ce) => (a(), r("option", {
                key: ce.tag_name,
                value: ce.tag_name
              }, f(ce.name), 9, r$))), 128))
            ], 8, i$), [
              [ps, d.value]
            ])
          ]),
          t("div", c$, [
            O[9] || (O[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (ce) => m.value = ce),
              class: "form-select"
            }, [
              (a(!0), r(G, null, ge(Be(Za), (ce) => (a(), r("option", {
                key: ce,
                value: ce
              }, f(ce) + f(ce === "auto" ? " (detect GPU)" : ""), 9, u$))), 128))
            ], 512), [
              [ps, m.value]
            ])
          ]),
          t("div", d$, [
            t("label", f$, [
              Ye(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (ce) => v.value = ce)
              }, null, 512), [
                [Xo, v.value]
              ]),
              O[10] || (O[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        p.value ? (a(), r(G, { key: 1 }, [
          k.value.error ? (a(), M(Re, {
            key: 0,
            variant: "secondary",
            onClick: A
          }, {
            default: g(() => [...O[15] || (O[15] = [
              _(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", y$, " Creating environment... "))
        ], 64)) : (a(), r(G, { key: 0 }, [
          C(Re, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: S
          }, {
            default: g(() => [...O[13] || (O[13] = [
              _(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Re, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (ce) => o("close"))
          }, {
            default: g(() => [...O[14] || (O[14] = [
              _(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), b$ = /* @__PURE__ */ pe(_$, [["__scopeId", "data-v-f37eaa42"]]), k$ = /* @__PURE__ */ ve({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = at(), i = b([]), c = b(!1), u = b(null), d = b(""), m = b(!1), v = b(!1), h = b(null), w = z(() => {
      if (!d.value.trim()) return i.value;
      const L = d.value.toLowerCase();
      return i.value.filter(
        (P) => {
          var S;
          return P.name.toLowerCase().includes(L) || ((S = P.current_branch) == null ? void 0 : S.toLowerCase().includes(L));
        }
      );
    });
    function p(L, P) {
      v.value = !1, n("created", L, P);
    }
    function k() {
      v.value = !0;
    }
    function x(L) {
      h.value = L;
    }
    function $(L) {
      h.value = null, n("delete", L);
    }
    async function R() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (L) {
        u.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return et(R), s({
      loadEnvironments: R,
      openCreateModal: k
    }), (L, P) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (S) => m.value = !0)
          }, {
            actions: g(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: k
              }, {
                default: g(() => [...P[6] || (P[6] = [
                  _(" Create ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: R
              }, {
                default: g(() => [...P[7] || (P[7] = [
                  _(" Refresh ", -1)
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
            "onUpdate:modelValue": P[1] || (P[1] = (S) => d.value = S),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (a(), M(Es, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), M(Ts, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            w.value.length ? (a(), M(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (a(!0), r(G, null, ge(w.value, (S) => (a(), M(x2, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    S.is_current ? y("", !0) : (a(), M(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => L.$emit("switch", S.name)
                    }, {
                      default: g(() => [...P[8] || (P[8] = [
                        _(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => x(S)
                    }, {
                      default: g(() => [...P[9] || (P[9] = [
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
            w.value.length ? y("", !0) : (a(), M(ss, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, eo({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  C(re, {
                    variant: "primary",
                    onClick: k
                  }, {
                    default: g(() => [...P[10] || (P[10] = [
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
      C(os, {
        show: m.value,
        title: "About Environments",
        onClose: P[3] || (P[3] = (S) => m.value = !1)
      }, {
        content: g(() => [...P[11] || (P[11] = [
          t("p", null, [
            t("strong", null, "Environments"),
            _(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          C(re, {
            variant: "secondary",
            onClick: P[2] || (P[2] = (S) => m.value = !1)
          }, {
            default: g(() => [...P[12] || (P[12] = [
              _(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (a(), M(j2, {
        key: 0,
        environment: h.value,
        "can-delete": i.value.length > 1,
        onClose: P[4] || (P[4] = (S) => h.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), M(b$, {
        key: 1,
        onClose: P[5] || (P[5] = (S) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), $$ = /* @__PURE__ */ pe(k$, [["__scopeId", "data-v-f95999f4"]]), C$ = { class: "file-path" }, x$ = { class: "file-path-text" }, S$ = ["title"], I$ = /* @__PURE__ */ ve({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = b(!1);
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
}), E$ = /* @__PURE__ */ pe(I$, [["__scopeId", "data-v-f0982173"]]), T$ = { class: "export-blocked" }, P$ = { class: "issues-list" }, R$ = { class: "issue-message" }, M$ = {
  key: 0,
  class: "issue-details"
}, D$ = ["onClick"], L$ = { class: "issue-fix" }, O$ = /* @__PURE__ */ ve({
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
    return (l, i) => (a(), M(pt, {
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
            (a(!0), r(G, null, ge(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", R$, f(c.message), 1),
              c.details.length ? (a(), r("div", M$, [
                (a(!0), r(G, null, ge(n(u), (d, m) => (a(), r("div", {
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
                  _(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(G, { key: 1 }, [
                  _(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(G, { key: 2 }, [
                  _(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: g(() => [
        C(Re, {
          variant: "primary",
          onClick: i[0] || (i[0] = (c) => l.$emit("close"))
        }, {
          default: g(() => [...i[3] || (i[3] = [
            _(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Er = /* @__PURE__ */ pe(O$, [["__scopeId", "data-v-b52f5e32"]]), A$ = { class: "export-warnings" }, N$ = {
  key: 0,
  class: "success-header"
}, U$ = { class: "warning-header" }, z$ = { class: "warning-summary" }, F$ = { class: "warning-title" }, B$ = { class: "models-section" }, V$ = { class: "models-list" }, W$ = { class: "model-info" }, G$ = { class: "model-filename" }, j$ = { class: "model-workflows" }, H$ = ["onClick"], K$ = /* @__PURE__ */ ve({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = b(!1), i = b(null), c = z(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), r(G, null, [
      C(pt, {
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
                  (a(!0), r(G, null, ge(c.value, (v) => (a(), r("div", {
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
          C(Re, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: g(() => [...m[7] || (m[7] = [
              _(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Re, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => d.$emit("confirm"))
          }, {
            default: g(() => [
              _(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), M(Xa, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Tr = /* @__PURE__ */ pe(K$, [["__scopeId", "data-v-b698d882"]]), q$ = { class: "export-card" }, Y$ = { class: "export-path-row" }, J$ = { class: "export-actions" }, X$ = {
  key: 1,
  class: "export-warning"
}, Q$ = /* @__PURE__ */ ve({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = at(), n = b(""), l = b(!1), i = b(!1), c = b(!1), u = b(null), d = b(!1), m = b(null), v = b(!1), h = b(!1), w = z(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const P = await s();
        m.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? h.value = !0 : await $() : v.value = !0;
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
      h.value = !1, await $();
    }
    async function x() {
      try {
        const P = await s();
        m.value = P;
      } catch (P) {
        console.error("Re-validation failed:", P);
      }
    }
    async function $() {
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
    async function R() {
      var P;
      if ((P = u.value) != null && P.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (S) {
          console.error("Failed to copy path:", S);
        }
    }
    async function L() {
      var P;
      if ((P = u.value) != null && P.path) {
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
    return (P, S) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (q) => d.value = !0)
          })
        ]),
        content: g(() => [
          C(it, { title: "EXPORT OPTIONS" }, {
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
                  C(Pn, {
                    modelValue: n.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (q) => n.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", J$, [
                  C(re, {
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
                      _(" " + f(w.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (a(), M(it, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              C(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: g(() => [
                  _(f(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  _(f(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  _(f(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    C(ft, { label: "Saved to:" }, {
                      default: g(() => [
                        C(E$, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), M(ft, {
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
                    C(re, {
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
                        _(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: R
                    }, {
                      default: g(() => [...S[10] || (S[10] = [
                        _(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(re, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (q) => u.value = null)
                    }, {
                      default: g(() => [...S[11] || (S[11] = [
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
      C(os, {
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
                  _(" — All workflows in this environment")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  _(" — Node definitions and dependencies")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  _(" — References and source URLs (not the files)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  _(" — Environment settings and metadata")
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
              _(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      v.value && m.value ? (a(), M(Er, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: S[4] || (S[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      h.value && m.value ? (a(), M(Tr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: k,
        onCancel: S[5] || (S[5] = (q) => h.value = !1),
        onRevalidate: x
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), Z$ = /* @__PURE__ */ pe(Q$, [["__scopeId", "data-v-f4d120f2"]]), eC = { class: "file-input-wrapper" }, tC = ["accept", "multiple", "disabled"], sC = /* @__PURE__ */ ve({
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
    const n = o, l = b(null);
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
      C(re, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: g(() => [
          qe(u.$slots, "default", {}, () => [
            d[0] || (d[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            _(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), oC = /* @__PURE__ */ pe(sC, [["__scopeId", "data-v-cd192091"]]), nC = {
  key: 0,
  class: "drop-zone-empty"
}, aC = { class: "drop-zone-text" }, lC = { class: "drop-zone-primary" }, iC = { class: "drop-zone-secondary" }, rC = { class: "drop-zone-actions" }, cC = {
  key: 1,
  class: "drop-zone-file"
}, uC = { class: "file-info" }, dC = { class: "file-details" }, fC = { class: "file-name" }, mC = { class: "file-size" }, vC = /* @__PURE__ */ ve({
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
    const o = s, n = b(!1), l = b(null), i = b(0), c = z(() => l.value !== null), u = z(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = z(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m($) {
      var R;
      $.stopPropagation(), i.value++, (R = $.dataTransfer) != null && R.types.includes("Files") && (n.value = !0);
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
      const R = (L = $.dataTransfer) == null ? void 0 : L.files;
      R && R.length > 0 && k(R[0]);
    }
    function p($) {
      $.length > 0 && k($[0]);
    }
    function k($) {
      l.value = $, o("fileSelected", $);
    }
    function x() {
      l.value = null, o("clear");
    }
    return ($, R) => (a(), r("div", {
      class: Ie(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: rt(m, ["prevent"]),
      onDragover: rt(v, ["prevent"]),
      onDragleave: rt(h, ["prevent"]),
      onDrop: rt(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", cC, [
        t("div", uC, [
          R[1] || (R[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", dC, [
            t("div", fC, f(u.value), 1),
            t("div", mC, f(d.value), 1)
          ])
        ]),
        C(re, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: g(() => [...R[2] || (R[2] = [
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
        R[0] || (R[0] = t("div", { class: "drop-zone-icon" }, [
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
          C(oC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: p
          }, {
            default: g(() => [
              _(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), pC = /* @__PURE__ */ pe(vC, [["__scopeId", "data-v-0f79cb86"]]), gC = { class: "import-preview" }, hC = { class: "preview-header" }, yC = {
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
}, GC = { class: "git-info" }, jC = /* @__PURE__ */ ve({
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
    const s = e, o = z(() => s.workflows.length), n = z(() => s.models.length), l = z(() => s.nodes.length);
    function i(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), r("div", gC, [
      t("div", hC, [
        C(Ot, null, {
          default: g(() => [...u[0] || (u[0] = [
            _("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", yC, [
          u[1] || (u[1] = _(" From: ", -1)),
          C(Sa, null, {
            default: g(() => [
              _(f(e.sourceEnvironment), 1)
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
            (a(!0), r(G, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
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
            (a(!0), r(G, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
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
            (a(!0), r(G, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
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
            e.gitBranch ? (a(), M(ft, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                C(Sa, null, {
                  default: g(() => [
                    _(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), M(ft, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                C(hr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), HC = /* @__PURE__ */ pe(jC, [["__scopeId", "data-v-182fe113"]]), KC = { class: "import-config" }, qC = { class: "config-container" }, YC = { class: "config-field" }, JC = { class: "input-wrapper" }, XC = ["value"], QC = {
  key: 0,
  class: "validating-indicator"
}, ZC = {
  key: 1,
  class: "valid-indicator"
}, e3 = {
  key: 0,
  class: "field-error"
}, t3 = { class: "config-field" }, s3 = { class: "strategy-options" }, o3 = ["value", "checked", "onChange"], n3 = { class: "strategy-content" }, a3 = { class: "strategy-label" }, l3 = { class: "strategy-description" }, i3 = { class: "config-field switch-field" }, r3 = { class: "switch-label" }, c3 = ["checked"], u3 = { class: "advanced-section" }, d3 = { class: "advanced-content" }, f3 = { class: "config-field" }, m3 = ["value"], v3 = ["value"], p3 = /* @__PURE__ */ ve({
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
    const o = e, n = s, l = b(!1), i = b(!1);
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
      C(Ot, null, {
        default: g(() => [...h[2] || (h[2] = [
          _("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", qC, [
        t("div", YC, [
          C(wn, { required: "" }, {
            default: g(() => [...h[3] || (h[3] = [
              _("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", JC, [
            t("input", {
              type: "text",
              class: Ie(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
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
          C(wn, null, {
            default: g(() => [...h[5] || (h[5] = [
              _("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", s3, [
            (a(), r(G, null, ge(c, (w) => t("label", {
              key: w.value,
              class: Ie(["strategy-option", { active: e.modelStrategy === w.value }])
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
              C(wn, null, {
                default: g(() => [...h[7] || (h[7] = [
                  _("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: h[1] || (h[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), r(G, null, ge(Be(Za), (w) => (a(), r("option", {
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
}), g3 = /* @__PURE__ */ pe(p3, [["__scopeId", "data-v-89ea06a1"]]), h3 = { class: "import-flow" }, y3 = {
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
}, F3 = { class: "complete-message" }, B3 = { class: "complete-title" }, V3 = { class: "complete-details" }, W3 = { class: "complete-actions" }, G3 = /* @__PURE__ */ ve({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ke, ke, Te, Ve;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = at();
    let h = null;
    const w = b(null), p = b(n.resumeImport ?? !1), k = b(!1), x = b(!1), $ = b(""), R = b(!1), L = b(null), P = b(""), S = b(null), q = b(!1), B = b(null), A = b(null), I = b({
      name: ((Ke = n.initialProgress) == null ? void 0 : Ke.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = b(null), O = b({
      message: ((ke = n.initialProgress) == null ? void 0 : ke.message) ?? "Preparing import...",
      phase: ((Te = n.initialProgress) == null ? void 0 : Te.phase) ?? "",
      progress: ((Ve = n.initialProgress) == null ? void 0 : Ve.progress) ?? 0,
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
    ], Y = z(() => {
      if (!A.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const we = A.value;
      return {
        sourceEnvironment: we.comfyui_version ? `ComfyUI ${we.comfyui_version}` : "Unknown",
        workflows: we.workflows.map((ae) => ae.name),
        models: we.models.map((ae) => ({
          filename: ae.filename,
          size: 0,
          type: ae.relative_path.split("/")[0] || "model"
        })),
        nodes: we.nodes.map((ae) => ae.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), j = z(() => !R.value && !L.value && A.value && I.value.name.length > 0 && !T.value && (w.value || S.value));
    async function te(we) {
      w.value = we, R.value = !0, L.value = null, A.value = null;
      try {
        const ae = await i(we);
        A.value = ae;
      } catch (ae) {
        L.value = ae instanceof Error ? ae.message : "Failed to analyze file", console.error("Preview error:", ae);
      } finally {
        R.value = !1;
      }
    }
    function Q() {
      w.value = null, S.value = null, P.value = "", B.value = null, k.value = !1, x.value = !1, $.value = "", A.value = null, L.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function N() {
      Ee(), Q(), p.value = !1, R.value = !1, q.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function U() {
      if (P.value.trim()) {
        q.value = !0, B.value = null;
        try {
          const we = await c(P.value.trim());
          S.value = P.value.trim(), A.value = we;
        } catch (we) {
          B.value = we instanceof Error ? we.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function E(we) {
      try {
        const ae = new URL(we);
        return ae.host + ae.pathname.replace(/\.git$/, "");
      } catch {
        return we;
      }
    }
    async function Z(we) {
      if (!we) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const ae = await u(we);
        T.value = ae.valid ? null : ae.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function se() {
      if (I.value.name && !(!w.value && !S.value)) {
        p.value = !0, k.value = !1, O.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let we;
          if (w.value)
            we = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (S.value)
            we = await m(
              S.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          we.status === "started" ? $e() : (x.value = !1, $.value = we.message, p.value = !1, k.value = !0);
        } catch (we) {
          x.value = !1, $.value = we instanceof Error ? we.message : "Unknown error occurred during import", p.value = !1, k.value = !0;
        }
      }
    }
    async function $e() {
      if (h) return;
      const we = async () => {
        try {
          const Ge = await v();
          return O.value = {
            message: Ge.message,
            phase: Ge.phase || "",
            progress: Ge.progress ?? (Ge.state === "importing" ? 50 : 0),
            error: Ge.error || null
          }, Ge.state === "complete" ? (Ee(), x.value = !0, $.value = `Environment '${Ge.environment_name}' created successfully`, p.value = !1, k.value = !0, Ge.environment_name && l("import-complete", Ge.environment_name, I.value.switchAfterImport), !1) : Ge.state === "error" ? (Ee(), x.value = !1, $.value = Ge.error || Ge.message, p.value = !1, k.value = !0, !1) : !0;
        } catch (Ge) {
          return console.error("Failed to poll import progress:", Ge), !0;
        }
      };
      await we() && (h = setInterval(async () => {
        await we() || Ee();
      }, 2e3));
    }
    function Ee() {
      h && (clearInterval(h), h = null);
    }
    function Ue(we) {
      return we < 1024 ? `${we} B` : we < 1024 * 1024 ? `${(we / 1024).toFixed(1)} KB` : we < 1024 * 1024 * 1024 ? `${(we / (1024 * 1024)).toFixed(1)} MB` : `${(we / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const we = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", we.state, we), we.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", we.environment_name), p.value = !0, I.value.name = we.environment_name || I.value.name || "", O.value = {
          progress: we.progress ?? 0,
          message: we.message || "Importing...",
          phase: we.phase || "",
          error: null
        }, $e());
      } catch (we) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", we);
      }
    }), s({
      handleReset: N,
      isImporting: p,
      canImport: j
    }), (we, ae) => {
      var Ge;
      return a(), r("div", h3, [
        !w.value && !S.value && !p.value ? (a(), r("div", y3, [
          C(pC, {
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
              Ye(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ae[0] || (ae[0] = (Pe) => P.value = Pe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Xt(U, ["enter"]),
                disabled: q.value
              }, null, 40, b3), [
                [Nt, P.value]
              ]),
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !P.value.trim() || q.value,
                onClick: U
              }, {
                default: g(() => [
                  _(f(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (a(), r("div", k3, f(B.value), 1)) : y("", !0),
            ae[6] || (ae[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || S.value) && !p.value && !k.value ? (a(), r("div", $3, [
          t("div", C3, [
            w.value ? (a(), r("div", x3, [
              ae[8] || (ae[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", S3, [
                t("div", I3, f(w.value.name), 1),
                t("div", E3, f(Ue(w.value.size)), 1)
              ])
            ])) : S.value ? (a(), r("div", T3, [
              ae[10] || (ae[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", P3, [
                t("div", R3, f(E(S.value)), 1),
                ae[9] || (ae[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(re, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: g(() => [...ae[11] || (ae[11] = [
                _(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          R.value ? (a(), r("div", M3, [...ae[12] || (ae[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : L.value ? (a(), M(Kt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [L.value]
          }, null, 8, ["details"])) : A.value ? (a(), M(HC, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          A.value ? (a(), M(g3, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": ae[1] || (ae[1] = (Pe) => I.value.name = Pe),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": ae[2] || (ae[2] = (Pe) => I.value.modelStrategy = Pe),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": ae[3] || (ae[3] = (Pe) => I.value.torchBackend = Pe),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": ae[4] || (ae[4] = (Pe) => I.value.switchAfterImport = Pe),
            "name-error": T.value,
            onValidateName: Z
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Ge = A.value) != null && Ge.models_needing_download) ? (a(), M(Kt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${A.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", D3, [
            C(re, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: g(() => [...ae[13] || (ae[13] = [
                _(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              size: "md",
              disabled: !j.value,
              onClick: se
            }, {
              default: g(() => [...ae[14] || (ae[14] = [
                _(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", L3, [
          t("p", O3, [
            ae[15] || (ae[15] = _(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            ae[16] || (ae[16] = _("... ", -1))
          ]),
          C(Mn, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ce
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (a(), r("p", A3, " This may take several minutes. Please wait... ")),
          O.value.error ? (a(), r("div", N3, [
            t("p", U3, f(O.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (a(), r("div", z3, [
          t("div", {
            class: Ie(["complete-icon", x.value ? "success" : "error"])
          }, f(x.value ? "✓" : "✕"), 3),
          t("div", F3, [
            t("div", B3, f(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", V3, f($.value), 1)
          ]),
          t("div", W3, [
            C(re, {
              variant: "primary",
              size: "md",
              onClick: N
            }, {
              default: g(() => [...ae[17] || (ae[17] = [
                _(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Pr = /* @__PURE__ */ pe(G3, [["__scopeId", "data-v-72cbc04e"]]), j3 = /* @__PURE__ */ ve({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = b(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
          })
        ]),
        content: g(() => [
          C(Pr, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(os, {
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
}), H3 = /* @__PURE__ */ pe(j3, [["__scopeId", "data-v-e13bfe76"]]), fn = io(), K3 = 5e3, no = b([]), ca = b(!1), ua = b(null);
let Eo = null;
async function mn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Rr(e) {
  const s = z(
    () => no.value.filter((p) => p.status === "running")
  ), o = z(
    () => no.value.filter((p) => p.status === "deploying")
  ), n = z(
    () => no.value.filter((p) => p.status === "stopped")
  ), l = z(
    () => s.value.length + o.value.length
  ), i = z(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...no.value].sort(
      (k, x) => (p[k.status] ?? 5) - (p[x.status] ?? 5)
    );
  });
  async function c() {
    ca.value = !0, ua.value = null;
    try {
      let p;
      if (!fn) {
        const k = await mn("/v2/comfygit/deploy/instances");
        if (!k.ok)
          throw new Error(`Failed to fetch instances: ${k.status}`);
        p = await k.json();
      }
      no.value = p.instances;
    } catch (p) {
      ua.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ca.value = !1;
    }
  }
  function u(p, k) {
    if (p.provider === "custom" && p.worker_name) {
      const x = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return k === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${x}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${x}/${k}`;
    }
    return k === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${k}`;
  }
  async function d(p) {
    try {
      if (!fn) {
        const k = u(p, "stop"), x = await mn(k, { method: "POST" });
        if (!x.ok) {
          const $ = await x.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] stopInstance error:", k), k;
    }
  }
  async function m(p) {
    try {
      if (!fn) {
        const k = u(p, "start"), x = await mn(k, { method: "POST" });
        if (!x.ok) {
          const $ = await x.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] startInstance error:", k), k;
    }
  }
  async function v(p) {
    try {
      if (!fn) {
        const k = u(p, "terminate"), x = await mn(k, { method: "DELETE" });
        if (!x.ok) {
          const $ = await x.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] terminateInstance error:", k), k;
    }
  }
  function h() {
    Eo || (Eo = window.setInterval(c, K3));
  }
  function w() {
    Eo && (clearInterval(Eo), Eo = null);
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
}, a5 = { class: "progress-message" }, l5 = { class: "instance-actions" }, i5 = /* @__PURE__ */ ve({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = z(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), n = z(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = z(() => `status-${s.instance.status}`);
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
      class: Ie(["instance-card", l.value])
    }, [
      t("div", q3, [
        t("span", Y3, f(o.value), 1),
        t("span", J3, f(e.instance.name), 1),
        t("span", {
          class: Ie(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", X3)) : y("", !0),
          _(" " + f(n.value), 1)
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
        e.instance.deployment_progress ? (a(), M(Kn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", l5, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), M(re, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: i
        }, {
          default: g(() => [...m[3] || (m[3] = [
            _(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), M(re, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: c
        }, {
          default: g(() => [...m[4] || (m[4] = [
            _(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), M(re, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => d.$emit("stop", e.instance))
        }, {
          default: g(() => [...m[5] || (m[5] = [
            _(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), M(re, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => d.$emit("start", e.instance))
        }, {
          default: g(() => [...m[6] || (m[6] = [
            _(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        C(re, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => d.$emit("terminate", e.instance))
        }, {
          default: g(() => [...m[7] || (m[7] = [
            _(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), r5 = /* @__PURE__ */ pe(i5, [["__scopeId", "data-v-746c3894"]]), c5 = { class: "instances-tab" }, u5 = { class: "instances-header" }, d5 = {
  key: 0,
  class: "loading-state"
}, f5 = {
  key: 1,
  class: "empty-state"
}, m5 = {
  key: 2,
  class: "instances-list"
}, v5 = /* @__PURE__ */ ve({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = z(() => {
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
        C(Ot, null, {
          default: g(() => [...l[4] || (l[4] = [
            _("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(re, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (i) => n.$emit("refresh"))
        }, {
          default: g(() => [...l[5] || (l[5] = [
            _(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), r("div", d5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        _(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", f5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", m5, [
        (a(!0), r(G, null, ge(o.value, (i) => (a(), M(r5, {
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
}), p5 = /* @__PURE__ */ pe(v5, [["__scopeId", "data-v-ba614fc3"]]), g5 = { class: "remote-header" }, h5 = { class: "remote-info" }, y5 = { class: "remote-icon" }, w5 = { class: "remote-name" }, _5 = {
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
}, I5 = { class: "remote-actions" }, E5 = /* @__PURE__ */ ve({
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
    const s = e, o = z(() => s.remote.is_default), n = z(() => {
      const i = s.remote.fetch_url, c = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = z(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, c) => (a(), r("div", {
      class: Ie(["deploy-remote-card", { selected: e.isSelected }])
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
          onClick: c[0] || (c[0] = rt(() => {
          }, ["stop"]))
        }, f(l.value), 9, x5)) : (a(), r("span", S5, f(l.value), 1))
      ]),
      t("div", I5, [
        C(re, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...c[4] || (c[4] = [
            _(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), M(re, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            _(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        C(re, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: g(() => [
            _(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Mr = /* @__PURE__ */ pe(E5, [["__scopeId", "data-v-d687d161"]]), T5 = { class: "runpod-tab" }, P5 = { class: "api-key-card" }, R5 = { class: "api-key-row" }, M5 = { class: "api-key-input-wrapper" }, D5 = ["type", "disabled"], L5 = ["title"], O5 = { class: "status-icon" }, A5 = { class: "status-text" }, N5 = {
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
}, c8 = { class: "console-link" }, u8 = ["href"], d8 = /* @__PURE__ */ ve({
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
      fetchRemote: k,
      pushToRemote: x,
      getDataCenters: $
    } = at(), R = b(!1), L = b(""), P = b(!1), S = b(!1), q = b(null), B = b(null), A = b(""), I = b(""), T = b(""), O = b("SECURE"), ce = b("ON_DEMAND"), Y = b("my-comfyui-deploy"), j = b([]), te = b({}), Q = b(!1), N = b(null), U = b(null), E = b(null), Z = b([]), se = b(!1), $e = b([]), Ee = b(!1), Ue = b([]), Ke = b(!1), ke = b(null), Te = b(!1), Ve = b(!1), we = b(null), ae = b(!1), Ge = b(null), Pe = b(null), D = b(null), V = b(!1), ne = b(null), ie = b(!1), fe = b(!1), me = z(() => $e.value.find((_e) => _e.id === I.value) || null), Ce = z(() => A.value ? $e.value.filter((_e) => _e.data_center_id === A.value) : $e.value), xe = z(() => Ue.value.filter((_e) => _e.available)), le = z(() => N.value && te.value[N.value] || null), de = z(() => {
      if (!N.value) return null;
      const _e = j.value.find((X) => X.name === N.value);
      return (_e == null ? void 0 : _e.fetch_url) || null;
    }), Le = z(() => P.value && I.value && T.value && de.value && !Ve.value && !V.value), Se = (_e) => {
      const X = Ue.value.find((ht) => ht.id === T.value);
      if (!X) return "0.00";
      if (_e === "SECURE") return (X.securePrice ?? 0).toFixed(2);
      if (_e === "COMMUNITY") return (X.communityPrice ?? 0).toFixed(2);
      const He = O.value === "SECURE";
      return _e === "ON_DEMAND" ? He ? (X.securePrice ?? 0).toFixed(2) : (X.communityPrice ?? 0).toFixed(2) : He ? (X.secureSpotPrice ?? 0).toFixed(2) : (X.communitySpotPrice ?? 0).toFixed(2);
    }, ee = z(() => {
      const _e = Ue.value.find((ns) => ns.id === T.value), X = $e.value.find((ns) => ns.id === I.value);
      if (!_e) return null;
      const He = O.value === "SECURE", ht = ce.value === "SPOT";
      let Ht;
      ht ? Ht = He ? _e.secureSpotPrice ?? 0 : _e.communitySpotPrice ?? 0 : Ht = He ? _e.securePrice ?? 0 : _e.communityPrice ?? 0;
      const gs = X ? X.size_gb * 14e-5 : 0, hs = 4e-3;
      return {
        gpu: Ht,
        volume: gs,
        container: hs,
        total: Ht + gs + hs
      };
    });
    async function K() {
      await Fe(), await Promise.all([vt(), Me()]);
    }
    async function Me() {
      Q.value = !0;
      try {
        const _e = await w();
        j.value = _e.remotes, await Promise.all(
          _e.remotes.map(async (He) => {
            const ht = await p(He.name);
            ht && (te.value[He.name] = ht);
          })
        );
        const X = _e.remotes.find((He) => He.is_default);
        X ? N.value = X.name : _e.remotes.length > 0 && (N.value = _e.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Q.value = !1;
      }
    }
    async function ye(_e) {
      U.value = _e;
      try {
        await k(_e);
        const X = await p(_e);
        X && (te.value[_e] = X), o("toast", `Fetched from ${_e}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        U.value = null;
      }
    }
    async function he(_e) {
      E.value = _e;
      try {
        await x(_e, { force: !1 });
        const X = await p(_e);
        X && (te.value[_e] = X), o("toast", `Pushed to ${_e}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        E.value = null;
      }
    }
    function W(_e) {
      N.value = _e;
    }
    async function F() {
      if (L.value) {
        S.value = !0, q.value = null;
        try {
          const _e = await l(L.value, !0);
          _e.status === "success" ? (P.value = !0, B.value = _e.credit_balance ?? null, q.value = { type: "success", message: _e.message }, await K()) : q.value = { type: "error", message: _e.message };
        } catch (_e) {
          q.value = {
            type: "error",
            message: _e instanceof Error ? _e.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function ue() {
      try {
        await v(), L.value = "", P.value = !1, q.value = null, B.value = null, Z.value = [], A.value = "", $e.value = [], I.value = "", Ue.value = [], T.value = "", ke.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Fe() {
      Ee.value = !0, se.value = !0;
      try {
        const _e = await i();
        $e.value = _e.volumes;
        const X = /* @__PURE__ */ new Map();
        for (const He of _e.volumes)
          He.data_center_id && !X.has(He.data_center_id) && X.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (_e.volumes.length === 0) {
          const He = await $();
          Z.value = He.data_centers;
        } else
          Z.value = Array.from(X.values());
        if ($e.value.length > 0) {
          const He = $e.value[0];
          I.value = He.id, He.data_center_id && (A.value = He.data_center_id, await Qe(He.data_center_id));
        } else Z.value.length > 0 && (A.value = Z.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ee.value = !1, se.value = !1;
      }
    }
    async function Qe(_e) {
      Ke.value = !0;
      try {
        const X = await c(_e);
        Ue.value = X.gpu_types;
        const He = Ue.value.find((ht) => ht.available);
        He ? T.value = He.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ke.value = !1;
      }
    }
    Ct(A, async (_e) => {
      if (!_e || Ee.value) return;
      const X = $e.value.find((He) => He.id === I.value);
      X && X.data_center_id !== _e && (I.value = ""), await Qe(_e);
    }), Ct(I, async (_e) => {
      if (!_e) {
        Ue.value = [], T.value = "";
        return;
      }
      if (Ee.value) return;
      const X = $e.value.find((He) => He.id === _e);
      X && X.data_center_id !== A.value ? A.value = X.data_center_id : X && await Qe(X.data_center_id);
    });
    async function vt() {
      Te.value = !0;
      try {
        ke.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Te.value = !1;
      }
    }
    async function lt() {
      if (!(!T.value || !I.value)) {
        V.value = !0, we.value = null;
        try {
          const _e = await h();
          ne.value = _e, _e.can_export ? _e.warnings.models_without_sources.length > 0 ? fe.value = !0 : await Ut() : ie.value = !0;
        } catch (_e) {
          we.value = {
            status: "error",
            message: _e instanceof Error ? _e.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          V.value = !1;
        }
      }
    }
    async function dt() {
      fe.value = !1, await Ut();
    }
    async function Rt() {
      try {
        const _e = await h();
        ne.value = _e;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ut() {
      Ve.value = !0;
      try {
        let _e;
        if (ce.value === "SPOT") {
          const He = Ue.value.find((ht) => ht.id === T.value);
          He && (_e = O.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const X = await u({
          gpu_type_id: T.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: O.value,
          pricing_type: ce.value,
          spot_bid: _e,
          import_source: de.value
        });
        we.value = X, X.status === "success" && X.pod_id ? (Ge.value = X.pod_id, ae.value = !0, jt(X.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", X.message, "error");
      } catch (_e) {
        we.value = {
          status: "error",
          message: _e instanceof Error ? _e.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ve.value = !1;
      }
    }
    function jt(_e) {
      Ps(_e), D.value = window.setInterval(() => Ps(_e), 3e3);
    }
    function Bs() {
      D.value && (clearInterval(D.value), D.value = null);
    }
    async function Ps(_e) {
      try {
        const X = await d(_e);
        Pe.value = X, (X.phase === "READY" || X.phase === "ERROR" || X.phase === "STOPPED") && (Bs(), X.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (X) {
        console.error("Failed to poll deployment status:", X);
      }
    }
    function so() {
      ae.value = !1, Bs(), Ge.value = null, Pe.value = null;
    }
    function ko() {
      var _e;
      (_e = Pe.value) != null && _e.comfyui_url && window.open(Pe.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function $o(_e) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[_e || ""] || "Initializing...";
    }
    function Co(_e) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[_e || ""] ?? 10;
    }
    return et(async () => {
      try {
        const _e = await m(!0);
        _e.has_key && _e.key_preview && (L.value = `****${_e.key_preview}`, _e.valid ? (P.value = !0, B.value = _e.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await K()) : _e.error && (q.value = { type: "error", message: _e.error }));
      } catch {
      }
    }), to(() => {
      Bs();
    }), (_e, X) => {
      var He, ht, Ht, gs, hs, ns;
      return a(), r(G, null, [
        t("div", T5, [
          C(it, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", P5, [
                t("div", R5, [
                  t("div", M5, [
                    Ye(t("input", {
                      "onUpdate:modelValue": X[0] || (X[0] = (Oe) => L.value = Oe),
                      type: R.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: P.value
                    }, null, 8, D5), [
                      [jn, L.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: X[1] || (X[1] = (Oe) => R.value = !R.value),
                      title: R.value ? "Hide key" : "Show key"
                    }, f(R.value ? "👁" : "👁‍🗨"), 9, L5)
                  ]),
                  P.value ? y("", !0) : (a(), M(re, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !L.value || S.value,
                    onClick: F
                  }, {
                    default: g(() => [...X[16] || (X[16] = [
                      _(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  P.value ? (a(), M(re, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: ue
                  }, {
                    default: g(() => [...X[17] || (X[17] = [
                      _(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                q.value ? (a(), r("div", {
                  key: 0,
                  class: Ie(["connection-status", q.value.type])
                }, [
                  t("span", O5, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", A5, f(q.value.message), 1),
                  B.value !== null ? (a(), r("span", N5, " $" + f(B.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                X[18] || (X[18] = t("div", { class: "api-key-help" }, [
                  t("span", { class: "help-icon" }, "i"),
                  t("span", { class: "help-text" }, [
                    _(" Get your API key at "),
                    t("a", {
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
          P.value ? (a(), M(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              t("div", U5, [
                t("div", z5, [
                  X[19] || (X[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": X[2] || (X[2] = (Oe) => A.value = Oe),
                    class: "config-select",
                    disabled: se.value
                  }, [
                    se.value ? (a(), r("option", B5, "Loading...")) : A.value ? y("", !0) : (a(), r("option", V5, "Select a region")),
                    (a(!0), r(G, null, ge(Z.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id,
                      disabled: !Oe.available
                    }, f(Oe.id) + " (" + f(Oe.name) + ")" + f(Oe.available ? "" : " [Unavailable]"), 9, W5))), 128))
                  ], 8, F5), [
                    [ps, A.value]
                  ])
                ]),
                t("div", G5, [
                  X[24] || (X[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ee.value ? (a(), r("div", j5, "Loading volumes...")) : Ce.value.length === 0 ? (a(), r(G, { key: 1 }, [
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
                    Ye(t("select", {
                      "onUpdate:modelValue": X[3] || (X[3] = (Oe) => I.value = Oe),
                      class: "config-select"
                    }, [
                      (a(!0), r(G, null, ge(Ce.value, (Oe) => (a(), r("option", {
                        key: Oe.id,
                        value: Oe.id
                      }, f(Oe.name) + " (" + f(Oe.size_gb) + "GB) ", 9, q5))), 128))
                    ], 512), [
                      [ps, I.value]
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
                  Ye(t("select", {
                    "onUpdate:modelValue": X[4] || (X[4] = (Oe) => T.value = Oe),
                    class: "config-select",
                    disabled: Ke.value || !I.value
                  }, [
                    I.value ? Ke.value ? (a(), r("option", Q5, "Loading GPUs...")) : xe.value.length === 0 ? (a(), r("option", Z5, "No GPUs available in this region")) : y("", !0) : (a(), r("option", X5, "Select a volume first")),
                    (a(!0), r(G, null, ge(xe.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id
                    }, f(Oe.displayName) + " (" + f(Oe.memoryInGb) + "GB) - $" + f(O.value === "SECURE" ? (Oe.securePrice ?? 0).toFixed(2) : (Oe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Oe.stockStatus ? `[${Oe.stockStatus}]` : ""), 9, ex))), 128))
                  ], 8, J5), [
                    [ps, T.value]
                  ])
                ]),
                t("div", tx, [
                  X[26] || (X[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", sx, [
                    t("label", ox, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[5] || (X[5] = (Oe) => O.value = Oe),
                        value: "SECURE"
                      }, null, 512), [
                        [Yt, O.value]
                      ]),
                      t("span", nx, "Secure ($" + f(Se("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", ax, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[6] || (X[6] = (Oe) => O.value = Oe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Yt, O.value]
                      ]),
                      t("span", lx, "Community ($" + f(Se("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", ix, [
                  X[27] || (X[27] = t("label", { class: "config-label" }, [
                    _(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", rx, [
                    t("label", cx, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[7] || (X[7] = (Oe) => ce.value = Oe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Yt, ce.value]
                      ]),
                      t("span", ux, "On-Demand ($" + f(Se("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", dx, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[8] || (X[8] = (Oe) => ce.value = Oe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Yt, ce.value]
                      ]),
                      t("span", fx, "Spot ($" + f(Se("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", mx, [
                  X[28] || (X[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Ye(t("input", {
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
          P.value ? (a(), M(it, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              Q.value ? (a(), r("div", vx, "Loading remotes...")) : j.value.length === 0 ? (a(), r("div", px, [
                X[30] || (X[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(re, {
                  variant: "primary",
                  size: "xs",
                  onClick: X[10] || (X[10] = (Oe) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...X[29] || (X[29] = [
                    _(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(G, { key: 2 }, [
                t("div", gx, [
                  (a(!0), r(G, null, ge(j.value, (Oe) => (a(), M(Mr, {
                    key: Oe.name,
                    remote: Oe,
                    "sync-status": te.value[Oe.name],
                    "is-selected": N.value === Oe.name,
                    "is-fetching": U.value === Oe.name,
                    "is-pushing": E.value === Oe.name,
                    onFetch: ye,
                    onPush: he,
                    onSelect: W
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                le.value && le.value.ahead > 0 ? (a(), r("div", hx, [
                  X[31] || (X[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", yx, [
                    t("strong", null, f(le.value.ahead) + " unpushed commit" + f(le.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(N.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(re, {
                    variant: "primary",
                    size: "xs",
                    loading: E.value === N.value,
                    onClick: X[11] || (X[11] = (Oe) => N.value && he(N.value))
                  }, {
                    default: g(() => [
                      _(" Push to " + f(N.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", wx, [
                  C(re, {
                    variant: "link",
                    size: "xs",
                    onClick: X[12] || (X[12] = (Oe) => o("navigate", "remotes"))
                  }, {
                    default: g(() => [...X[32] || (X[32] = [
                      _(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          P.value ? (a(), M(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              t("div", _x, [
                Te.value ? (a(), r("div", bx, "Loading environment summary...")) : ke.value ? (a(), r(G, { key: 1 }, [
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
          P.value && ee.value ? (a(), M(it, {
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
                        t("span", Fx, "$" + f(ee.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", Bx, [
                        X[39] || (X[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", Vx, "$" + f(ee.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", Wx, [
                        X[40] || (X[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", Gx, "$" + f(ee.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      X[43] || (X[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", jx, [
                        X[41] || (X[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", Hx, "~$" + f(ee.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", Kx, [
                      X[45] || (X[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", qx, [
                        t("span", null, f(((Oe = Ue.value.find((oe) => oe.id === T.value)) == null ? void 0 : Oe.displayName) || "GPU") + " (" + f(((as = Ue.value.find((oe) => oe.id === T.value)) == null ? void 0 : as.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", Yx, [
                        t("span", null, "Region: " + f(A.value), 1)
                      ]),
                      me.value ? (a(), r("div", Jx, [
                        t("span", null, "Volume: " + f(me.value.name), 1)
                      ])) : y("", !0),
                      ce.value === "SPOT" ? (a(), r("div", Xx, [...X[44] || (X[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          P.value ? (a(), r("div", Qx, [
            C(re, {
              variant: "primary",
              size: "md",
              loading: V.value || Ve.value,
              disabled: !Le.value,
              onClick: lt
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
                _(" " + f(V.value ? "Validating..." : Ve.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          we.value ? (a(), M(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              C(Et, {
                status: we.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: g(() => [
                  _(f(we.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  _(f(we.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  _(f(we.value.message), 1)
                ]),
                actions: g(() => [
                  C(re, {
                    variant: "ghost",
                    size: "xs",
                    onClick: X[13] || (X[13] = (Oe) => we.value = null)
                  }, {
                    default: g(() => [...X[47] || (X[47] = [
                      _(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                we.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    C(ft, {
                      label: "Pod ID:",
                      value: we.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ae.value ? (a(), M(pt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Pe.value) == null ? void 0 : He.phase) === "READY" || ((ht = Pe.value) == null ? void 0 : ht.phase) === "ERROR" || ((Ht = Pe.value) == null ? void 0 : Ht.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: so
        }, eo({
          body: g(() => {
            var Oe, as, oe, H, De, je, ot, mt, Mt, ls, Vs, Ws;
            return [
              t("div", Zx, [
                t("div", e8, [
                  t("div", {
                    class: Ie(["phase-icon", (as = (Oe = Pe.value) == null ? void 0 : Oe.phase) == null ? void 0 : as.toLowerCase()])
                  }, [
                    ((oe = Pe.value) == null ? void 0 : oe.phase) === "READY" ? (a(), r("span", t8, "✓")) : ((H = Pe.value) == null ? void 0 : H.phase) === "ERROR" ? (a(), r("span", s8, "✕")) : ((De = Pe.value) == null ? void 0 : De.phase) === "STOPPED" ? (a(), r("span", o8, "○")) : (a(), r("span", n8, "⟳"))
                  ], 2),
                  t("div", a8, [
                    t("div", l8, f($o((je = Pe.value) == null ? void 0 : je.phase)), 1),
                    t("div", i8, f(((ot = Pe.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(Kn, {
                  progress: Co((mt = Pe.value) == null ? void 0 : mt.phase),
                  variant: ((Mt = Pe.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((ls = Pe.value) == null ? void 0 : ls.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Vs = Pe.value) == null ? void 0 : Vs.phase) === "READY" ? (a(), r("div", r8, [
                  C(re, {
                    variant: "primary",
                    size: "md",
                    onClick: ko
                  }, {
                    default: g(() => [...X[48] || (X[48] = [
                      _(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", c8, [
                  (Ws = Pe.value) != null && Ws.console_url ? (a(), r("a", {
                    key: 0,
                    href: Pe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, u8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((gs = Pe.value) == null ? void 0 : gs.phase) === "READY" || ((hs = Pe.value) == null ? void 0 : hs.phase) === "ERROR" || ((ns = Pe.value) == null ? void 0 : ns.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: so
              }, {
                default: g(() => [...X[49] || (X[49] = [
                  _(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ie.value && ne.value ? (a(), M(Er, {
          key: 1,
          issues: ne.value.blocking_issues,
          onClose: X[14] || (X[14] = (Oe) => ie.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        fe.value && ne.value ? (a(), M(Tr, {
          key: 2,
          models: ne.value.warnings.models_without_sources,
          onConfirm: dt,
          onCancel: X[15] || (X[15] = (Oe) => fe.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), f8 = /* @__PURE__ */ pe(d8, [["__scopeId", "data-v-522cd4d9"]]), m8 = { class: "worker-header" }, v8 = { class: "worker-status" }, p8 = { class: "worker-name" }, g8 = { class: "worker-actions" }, h8 = { class: "worker-details" }, y8 = { class: "detail-item" }, w8 = { class: "detail-value" }, _8 = {
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
}, E8 = /* @__PURE__ */ ve({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ie(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", m8, [
        t("div", v8, [
          t("span", {
            class: Ie(["status-dot", e.worker.status])
          }, null, 2),
          t("span", p8, f(e.worker.name), 1)
        ]),
        t("div", g8, [
          e.worker.status === "online" ? (a(), M(re, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (n) => s.$emit("deploy", e.worker))
          }, {
            default: g(() => [...o[2] || (o[2] = [
              _(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          C(re, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (n) => s.$emit("remove", e.worker.name))
          }, {
            default: g(() => [...o[3] || (o[3] = [
              _(" Remove ", -1)
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
          _(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", x8, [
          _(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", S8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", I8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          _(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), T8 = /* @__PURE__ */ pe(E8, [["__scopeId", "data-v-b1be7134"]]), P8 = { class: "add-worker-content" }, R8 = { class: "manual-form" }, M8 = { class: "form-row" }, D8 = { class: "form-row-inline" }, L8 = { class: "form-field flex-2" }, O8 = { class: "form-field flex-1" }, A8 = { class: "form-row" }, N8 = { class: "api-key-wrapper" }, U8 = ["type"], z8 = { class: "result-icon" }, F8 = { class: "result-content" }, B8 = { class: "result-message" }, V8 = {
  key: 0,
  class: "result-detail"
}, W8 = { class: "modal-actions" }, G8 = /* @__PURE__ */ ve({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = at(), l = Fs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = b(!1), c = b(!1), u = b(!1), d = b(null), m = z(() => l.host && l.port && l.apiKey), v = z(() => l.name && l.host && l.port && l.apiKey);
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
    return (p, k) => (a(), M(pt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: k[5] || (k[5] = (x) => p.$emit("close"))
    }, {
      body: g(() => [
        t("div", P8, [
          t("div", R8, [
            t("div", M8, [
              k[6] || (k[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              Ye(t("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Nt, l.name]
              ])
            ]),
            t("div", D8, [
              t("div", L8, [
                k[7] || (k[7] = t("label", { class: "form-label" }, "Host", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": k[1] || (k[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Nt, l.host]
                ])
              ]),
              t("div", O8, [
                k[8] || (k[8] = t("label", { class: "form-label" }, "Port", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": k[2] || (k[2] = (x) => l.port = x),
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
              k[9] || (k[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", N8, [
                Ye(t("input", {
                  "onUpdate:modelValue": k[3] || (k[3] = (x) => l.apiKey = x),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, U8), [
                  [jn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: k[4] || (k[4] = (x) => i.value = !i.value),
                  type: "button"
                }, f(i.value ? "👁" : "👁‍🗨"), 1)
              ]),
              k[10] || (k[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                _(" Run "),
                t("code", null, "cg-deploy worker setup"),
                _(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), r("div", {
              key: 0,
              class: Ie(["test-result", d.value.type])
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
          C(re, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !m.value || c.value,
            onClick: h
          }, {
            default: g(() => [...k[11] || (k[11] = [
              _(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(re, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: w
          }, {
            default: g(() => [...k[12] || (k[12] = [
              _(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), j8 = /* @__PURE__ */ pe(G8, [["__scopeId", "data-v-07a00732"]]), H8 = { class: "discovered-content" }, K8 = {
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
}, eS = { class: "selected-worker" }, tS = { class: "selected-name" }, sS = { class: "selected-address" }, oS = { class: "form-row" }, nS = { class: "api-key-wrapper" }, aS = ["type"], lS = { class: "result-icon" }, iS = { class: "result-message" }, rS = { class: "modal-actions" }, cS = /* @__PURE__ */ ve({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = at(), l = b(null), i = b(""), c = b(!1), u = b(!1), d = b(null), m = b(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await en(), (p = d.value) == null || p.focus();
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
    return (w, p) => (a(), M(pt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (k) => w.$emit("close"))
    }, {
      body: g(() => [
        t("div", H8, [
          e.workers.length > 0 ? (a(), r("div", K8, [
            (a(!0), r(G, null, ge(e.workers, (k) => (a(), r("div", {
              key: `${k.host}:${k.port}`,
              class: "worker-item"
            }, [
              t("div", q8, [
                t("span", Y8, f(k.name), 1),
                t("span", J8, f(k.host) + ":" + f(k.port), 1),
                k.gpu_info ? (a(), r("span", X8, f(k.gpu_info), 1)) : y("", !0)
              ]),
              C(re, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(k)
              }, {
                default: g(() => [...p[4] || (p[4] = [
                  _(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), r("div", Q8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              _("Make sure workers are running with "),
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
                Ye(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (k) => i.value = k),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Xt(h, ["enter"])
                }, null, 40, aS), [
                  [jn, i.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (k) => c.value = !c.value),
                  type: "button"
                }, f(c.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                _(" Run "),
                t("code", null, "cg-deploy worker setup"),
                _(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), r("div", {
              key: 0,
              class: Ie(["test-result", m.value.type])
            }, [
              t("span", lS, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", iS, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", rS, [
          l.value ? (a(), M(re, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (k) => {
              l.value = null, i.value = "", m.value = null;
            })
          }, {
            default: g(() => [...p[9] || (p[9] = [
              _(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), M(re, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !i.value || u.value,
            onClick: h
          }, {
            default: g(() => [...p[10] || (p[10] = [
              _(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), uS = /* @__PURE__ */ pe(cS, [["__scopeId", "data-v-5a3e40a4"]]), dS = { class: "deploy-content" }, fS = { class: "section" }, mS = {
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
}, xS = { class: "warning-content" }, SS = { class: "modal-actions" }, IS = /* @__PURE__ */ ve({
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
    } = at(), v = b([]), h = b({}), w = b(!1), p = b(null), k = b(null), x = b(null), $ = b(o.worker.mode || "native"), R = b(""), L = b(null), P = b(!1), S = z(() => p.value && h.value[p.value] || null), q = z(() => {
      if (!p.value) return null;
      const j = v.value.find((te) => te.name === p.value);
      return (j == null ? void 0 : j.fetch_url) || null;
    }), B = z(() => q.value && !P.value);
    async function A() {
      w.value = !0;
      try {
        const j = await l();
        v.value = j.remotes, await Promise.all(
          j.remotes.map(async (Q) => {
            const N = await i(Q.name);
            N && (h.value[Q.name] = N);
          })
        );
        const te = j.remotes.find((Q) => Q.is_default);
        te ? p.value = te.name : j.remotes.length > 0 && (p.value = j.remotes[0].name);
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
    async function T(j) {
      k.value = j;
      try {
        await c(j);
        const te = await i(j);
        te && (h.value[j] = te), n("toast", `Fetched from ${j}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        k.value = null;
      }
    }
    async function O(j) {
      x.value = j;
      try {
        await u(j, { force: !1 });
        const te = await i(j);
        te && (h.value[j] = te), n("toast", `Pushed to ${j}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function ce(j) {
      p.value = j;
    }
    async function Y() {
      if (q.value) {
        P.value = !0;
        try {
          const j = await m(o.worker.name, {
            import_source: q.value,
            mode: $.value,
            name: R.value || void 0
          });
          j.id ? (n("toast", `Deployment started: ${j.name || j.id}`, "success"), n("deployed")) : j.status === "error" ? n("toast", j.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (j) {
          n("toast", j instanceof Error ? j.message : "Deployment failed", "error");
        } finally {
          P.value = !1;
        }
      }
    }
    return et(() => {
      A(), I();
    }), (j, te) => (a(), M(pt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: te[5] || (te[5] = (Q) => j.$emit("close"))
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
              (a(!0), r(G, null, ge(v.value, (Q) => (a(), M(Mr, {
                key: Q.name,
                remote: Q,
                "sync-status": h.value[Q.name],
                "is-selected": p.value === Q.name,
                "is-fetching": k.value === Q.name,
                "is-pushing": x.value === Q.name,
                onFetch: T,
                onPush: O,
                onSelect: ce
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", gS, [
            te[10] || (te[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", hS, [
              t("label", yS, [
                Ye(t("input", {
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
                Ye(t("input", {
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
            Ye(t("input", {
              "onUpdate:modelValue": te[2] || (te[2] = (Q) => R.value = Q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Nt, R.value]
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
            C(re, {
              variant: "primary",
              size: "xs",
              loading: x.value === p.value,
              onClick: te[3] || (te[3] = (Q) => p.value && O(p.value))
            }, {
              default: g(() => [...te[13] || (te[13] = [
                _(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", SS, [
          C(re, {
            variant: "ghost",
            size: "sm",
            onClick: te[4] || (te[4] = (Q) => j.$emit("close"))
          }, {
            default: g(() => [...te[15] || (te[15] = [
              _(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(re, {
            variant: "primary",
            size: "sm",
            loading: P.value,
            disabled: !B.value || P.value,
            onClick: Y
          }, {
            default: g(() => [...te[16] || (te[16] = [
              _(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ES = /* @__PURE__ */ pe(IS, [["__scopeId", "data-v-c12720d3"]]), TS = { class: "custom-tab" }, PS = { class: "section-header" }, RS = { class: "section-actions" }, MS = { class: "workers-content" }, DS = {
  key: 0,
  class: "loading-state"
}, LS = {
  key: 1,
  class: "empty-state"
}, OS = {
  key: 2,
  class: "workers-list"
}, AS = { class: "scan-icon" }, NS = { class: "scan-message" }, US = /* @__PURE__ */ ve({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = at(), u = b([]), d = b([]), m = b(!1), v = b(!1), h = b(null), w = b(!1), p = b(!1), k = b(null), x = b(null);
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
    async function R() {
      v.value = !0, x.value = null;
      try {
        const A = await c(), I = A.discovered.filter(
          (T) => !u.value.some((O) => O.host === T.host && O.port === T.port)
        );
        d.value = I, I.length > 0 ? p.value = !0 : A.discovered.length > 0 ? x.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : x.value = {
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
    async function P(A) {
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
      k.value = A;
    }
    function B() {
      k.value = null, o("deployed");
    }
    return et(() => {
      $();
    }), (A, I) => (a(), r("div", TS, [
      t("div", PS, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", RS, [
          C(re, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: R
          }, {
            default: g(() => [...I[6] || (I[6] = [
              _(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(re, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (T) => w.value = !0)
          }, {
            default: g(() => [...I[7] || (I[7] = [
              _(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", MS, [
        m.value && u.value.length === 0 ? (a(), r("div", DS, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          _(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", LS, [...I[10] || (I[10] = [
          t("div", { class: "empty-card" }, [
            t("span", { class: "empty-text" }, "No workers registered yet"),
            t("p", { class: "empty-help" }, " To add a custom worker: "),
            t("ol", { class: "setup-steps" }, [
              t("li", null, [
                _("On your GPU machine, run:"),
                t("br"),
                t("code", null, "cg-deploy worker setup"),
                t("br"),
                t("code", null, "cg-deploy worker up --broadcast")
              ]),
              t("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (a(), r("div", OS, [
          (a(!0), r(G, null, ge(u.value, (T) => (a(), M(T8, {
            key: T.name,
            worker: T,
            "is-action-loading": h.value === T.name,
            onDeploy: q,
            onRemove: S
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      x.value ? (a(), r("div", {
        key: 0,
        class: Ie(["scan-result", x.value.type])
      }, [
        t("span", AS, f(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", NS, f(x.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (T) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), M(uS, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (T) => p.value = !1),
        onAdd: P
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), M(j8, {
        key: 2,
        onClose: I[3] || (I[3] = (T) => w.value = !1),
        onAdd: L
      })) : y("", !0),
      k.value ? (a(), M(ES, {
        key: 3,
        worker: k.value,
        onClose: I[4] || (I[4] = (T) => k.value = null),
        onToast: I[5] || (I[5] = (T, O) => o("toast", T, O)),
        onDeployed: B
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), zS = /* @__PURE__ */ pe(US, [["__scopeId", "data-v-1637dead"]]), da = "ComfyGit.Deploy.GitHubPAT";
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
}, jS = { class: "form-row" }, HS = { class: "token-wrapper" }, KS = ["type"], qS = { class: "result-icon" }, YS = { class: "result-message" }, JS = { class: "token-actions" }, XS = /* @__PURE__ */ ve({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = BS(), { getRemotes: u, testGitAuth: d } = at(), m = b(""), v = b(!1), h = b(!1), w = b(null), p = b(!1), k = z(() => c());
    et(async () => {
      var P;
      const L = n();
      L && (m.value = L);
      try {
        const q = (P = (await u()).remotes) == null ? void 0 : P.find((B) => B.name === "origin");
        q && Dr(q.url) && (p.value = !0);
      } catch {
      }
    });
    async function x() {
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
    function R() {
      i(), m.value = "", w.value = null;
    }
    return (L, P) => (a(), M(pt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: P[2] || (P[2] = (S) => L.$emit("close"))
    }, {
      body: g(() => [
        t("div", VS, [
          t("div", WS, [
            P[8] || (P[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            P[9] || (P[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", GS, [...P[3] || (P[3] = [
              t("span", { class: "warning-icon" }, "!", -1),
              t("div", { class: "warning-content" }, [
                t("strong", null, "SSH remote detected"),
                t("p", null, [
                  _("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  t("code", null, "git@github.com:..."),
                  _(" to "),
                  t("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : y("", !0),
            t("div", jS, [
              P[4] || (P[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", HS, [
                Ye(t("input", {
                  "onUpdate:modelValue": P[0] || (P[0] = (S) => m.value = S),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, KS), [
                  [jn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: P[1] || (P[1] = (S) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              P[5] || (P[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Ie(["test-result", w.value.type])
            }, [
              t("span", qS, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", YS, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", JS, [
              C(re, {
                variant: "ghost",
                size: "sm",
                loading: h.value,
                disabled: !m.value || h.value,
                onClick: x
              }, {
                default: g(() => [...P[6] || (P[6] = [
                  _(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              k.value ? (a(), M(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: R
              }, {
                default: g(() => [...P[7] || (P[7] = [
                  _(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        C(re, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: $
        }, {
          default: g(() => [...P[10] || (P[10] = [
            _(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), QS = /* @__PURE__ */ pe(XS, [["__scopeId", "data-v-b21588ad"]]), ZS = /* @__PURE__ */ ve({
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
    } = Rr(), w = b(!1), p = b(!1), k = b("instances"), x = b(null), $ = b(null), R = z(() => [
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
      x.value = A.id;
      try {
        await u(A), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function P(A) {
      x.value = A.id;
      try {
        await d(A), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        x.value = null;
      }
    }
    function S(A) {
      $.value = A;
    }
    async function q() {
      const A = $.value;
      if (A) {
        $.value = null, x.value = A.id;
        try {
          await m(A), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          x.value = null;
        }
      }
    }
    async function B() {
      await c(), k.value = "instances";
    }
    return et(() => {
      c(), v();
    }), to(() => {
      h();
    }), (A, I) => (a(), r(G, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (T) => w.value = !0)
          }, {
            actions: g(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (T) => p.value = !0)
              }, {
                default: g(() => [...I[10] || (I[10] = [
                  _(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C($r, {
            modelValue: k.value,
            "onUpdate:modelValue": I[2] || (I[2] = (T) => k.value = T),
            tabs: R.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          k.value === "instances" ? (a(), M(p5, {
            key: 0,
            instances: Be(n),
            "is-loading": Be(l),
            "action-loading-id": x.value,
            onRefresh: Be(c),
            onStop: L,
            onStart: P,
            onTerminate: S
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          k.value === "runpod" ? (a(), M(f8, {
            key: 1,
            onToast: I[3] || (I[3] = (T, O) => o("toast", T, O)),
            onNavigate: I[4] || (I[4] = (T) => o("navigate", T)),
            onDeployed: B
          })) : y("", !0),
          k.value === "custom" ? (a(), M(zS, {
            key: 2,
            onToast: I[5] || (I[5] = (T, O) => o("toast", T, O)),
            onDeployed: B
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), M(Qa, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: I[6] || (I[6] = (T) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(os, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (T) => w.value = !1)
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
                  _(" - All committed workflows")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  _(" - Installed automatically")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  _(" - Downloaded from sources (when available)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  _(" - Environment settings")
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
      p.value ? (a(), M(QS, {
        key: 1,
        onClose: I[8] || (I[8] = (T) => p.value = !1),
        onSaved: I[9] || (I[9] = (T) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), e4 = /* @__PURE__ */ pe(ZS, [["__scopeId", "data-v-d4e32a10"]]), t4 = { class: "header-info" }, s4 = { class: "commit-hash" }, o4 = {
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
}, g4 = { class: "change-item" }, h4 = /* @__PURE__ */ ve({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = at(), n = b(null), l = b(!0), i = z(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = z(() => {
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
    }), (u, d) => (a(), M(pt, {
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
              (a(!0), r(G, null, ge(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Re, {
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
              C(Bo, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  _("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(G, null, ge(n.value.changes.workflows.added, (h) => (a(), r("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), r(G, null, ge(n.value.changes.workflows.modified, (h) => (a(), r("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), r(G, null, ge(n.value.changes.workflows.deleted, (h) => (a(), r("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(h), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", m4, [
              C(Bo, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  _("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(G, null, ge(n.value.changes.nodes.added, (h) => (a(), r("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(h.name), 1),
                h.version ? (a(), r("span", v4, "(" + f(h.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(G, null, ge(n.value.changes.nodes.removed, (h) => (a(), r("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(h.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", p4, [
              C(Bo, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  _("MODELS", -1)
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
        C(Re, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            _(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => u.$emit("checkout", e.commit))
        }, {
          default: g(() => [...d[16] || (d[16] = [
            _(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), y4 = /* @__PURE__ */ pe(h4, [["__scopeId", "data-v-d256ff6d"]]), w4 = { class: "base-textarea-wrapper" }, _4 = ["value", "rows", "placeholder", "disabled", "maxlength"], b4 = {
  key: 0,
  class: "base-textarea-count"
}, k4 = /* @__PURE__ */ ve({
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
          c[1] || (c[1] = Xt(rt((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Xt(rt((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Xt(l, ["enter"])
        ]
      }, null, 40, _4),
      e.showCharCount && e.maxLength ? (a(), r("div", b4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Yl = /* @__PURE__ */ pe(k4, [["__scopeId", "data-v-c6d16c93"]]), $4 = ["checked", "disabled"], C4 = { class: "base-checkbox-box" }, x4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, S4 = {
  key: 0,
  class: "base-checkbox-label"
}, I4 = /* @__PURE__ */ ve({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", {
      class: Ie(["base-checkbox", { disabled: e.disabled }])
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
        qe(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ia = /* @__PURE__ */ pe(I4, [["__scopeId", "data-v-bf17c831"]]), E4 = { class: "popover-header" }, T4 = { class: "popover-body" }, P4 = {
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
}, a6 = { class: "error-header" }, l6 = { class: "error-title" }, i6 = { class: "issues-list" }, r6 = { class: "workflow-state" }, c6 = { class: "message-section" }, u6 = { class: "popover-footer" }, d6 = /* @__PURE__ */ ve({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = at(), i = b(""), c = b(!1), u = b(!1), d = z(() => {
      if (!o.status) return !1;
      const k = o.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || o.status.has_changes;
    }), m = z(() => {
      if (!o.status) return !1;
      const k = o.status.workflows, x = o.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = z(() => {
      var k;
      return (k = o.status) != null && k.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), h = z(() => v.value.length > 0), w = z(() => h.value && !u.value);
    async function p() {
      var k, x, $, R;
      if (!(h.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const L = await l(i.value.trim(), u.value);
          if (L.status === "success") {
            const P = `Committed: ${((k = L.summary) == null ? void 0 : k.new) || 0} new, ${((x = L.summary) == null ? void 0 : x.modified) || 0} modified, ${(($ = L.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: P });
          } else if (L.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (L.status === "blocked") {
            const P = ((R = L.issues) == null ? void 0 : R.map((S) => `${S.name}: ${S.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${P}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: L.message || "Commit failed" });
        } catch (L) {
          n("committed", { success: !1, message: L instanceof Error ? L.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (k, x) => e.asModal ? (a(), M(wt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", E4, [
            x[11] || (x[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = ($) => n("close"))
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
          t("div", T4, [
            e.status && d.value ? (a(), r("div", P4, [
              e.status.workflows.new.length ? (a(), r("div", R4, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", M4, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", D4, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", L4, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", O4, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", A4, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", N4, " No changes to commit ")) : (a(), r("div", U4, " Loading... ")),
            h.value ? (a(), r("div", z4, [
              t("div", F4, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", B4, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", V4, [
                (a(!0), r(G, null, ge(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", W4, "(" + f($.sync_state) + ")", 1),
                  _(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Ia, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  _(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", G4, [
              C(Yl, {
                modelValue: i.value,
                "onUpdate:modelValue": x[2] || (x[2] = ($) => i.value = $),
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
            C(Re, {
              variant: "secondary",
              onClick: x[3] || (x[3] = ($) => n("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                _(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: p
            }, {
              default: g(() => [
                _(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), r("div", H4, [
      t("div", K4, [
        x[22] || (x[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = ($) => n("close"))
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
      t("div", q4, [
        e.status && d.value ? (a(), r("div", Y4, [
          e.status.workflows.new.length ? (a(), r("div", J4, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", X4, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", Q4, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", Z4, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", e6, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", t6, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", s6, " No changes to commit ")) : (a(), r("div", o6, " Loading... ")),
        h.value ? (a(), r("div", n6, [
          t("div", a6, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", l6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", i6, [
            (a(!0), r(G, null, ge(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", r6, "(" + f($.sync_state) + ")", 1),
              _(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Ia, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              _(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", c6, [
          C(Yl, {
            modelValue: i.value,
            "onUpdate:modelValue": x[8] || (x[8] = ($) => i.value = $),
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
        C(Re, {
          variant: "secondary",
          onClick: x[9] || (x[9] = ($) => n("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: p
        }, {
          default: g(() => [
            _(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Lr = /* @__PURE__ */ pe(d6, [["__scopeId", "data-v-5f897631"]]), f6 = { class: "modal-header" }, m6 = { class: "modal-body" }, v6 = { class: "switch-message" }, p6 = { class: "switch-details" }, g6 = { class: "modal-actions" }, h6 = /* @__PURE__ */ ve({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = rt(() => {
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
              o[6] || (o[6] = _(" Switch from ", -1)),
              t("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = _(" to ", -1)),
              t("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = _("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", p6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", g6, [
            C(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                _(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                _(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), y6 = /* @__PURE__ */ pe(h6, [["__scopeId", "data-v-e9c5253e"]]), w6 = {
  key: 0,
  class: "modal-overlay"
}, _6 = { class: "modal-content" }, b6 = { class: "modal-body" }, k6 = { class: "progress-info" }, $6 = { class: "progress-percentage" }, C6 = { class: "progress-state" }, x6 = { class: "switch-steps" }, S6 = { class: "step-icon" }, I6 = { class: "step-label" }, E6 = /* @__PURE__ */ ve({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = z(() => {
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
    }), n = z(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = z(() => {
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
    return (i, c) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", w6, [
        t("div", _6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", b6, [
            C(Kn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", k6, [
              t("div", $6, f(e.progress) + "%", 1),
              t("div", C6, f(o.value), 1)
            ]),
            t("div", x6, [
              (a(!0), r(G, null, ge(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: Ie(["switch-step", u.status])
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
}), T6 = /* @__PURE__ */ pe(E6, [["__scopeId", "data-v-768a5078"]]), P6 = { class: "modal-header" }, R6 = { class: "modal-body" }, M6 = {
  key: 0,
  class: "node-section"
}, D6 = { class: "node-list" }, L6 = {
  key: 1,
  class: "node-section"
}, O6 = { class: "node-list" }, A6 = { class: "modal-actions" }, N6 = /* @__PURE__ */ ve({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = rt(() => {
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
                (a(!0), r(G, null, ge(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", L6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", O6, [
                (a(!0), r(G, null, ge(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
            C(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                _(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                _(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), U6 = /* @__PURE__ */ pe(N6, [["__scopeId", "data-v-7cad7518"]]), z6 = [
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
}, q6 = ["d"], Y6 = /* @__PURE__ */ ve({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", V6, [
      (a(!0), r(G, null, ge(Be(z6), (l) => (a(), r(G, {
        key: l.id
      }, [
        l.label ? (a(), r("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          _(f(l.label) + " ", 1),
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
}), Or = /* @__PURE__ */ pe(Y6, [["__scopeId", "data-v-4f846342"]]), J6 = { class: "footer-info" }, X6 = { class: "version" }, Q6 = { class: "made-by" }, Z6 = /* @__PURE__ */ ve({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", J6, [
      t("span", X6, f(Be(F6)), 1),
      t("span", Q6, [
        o[0] || (o[0] = _(" made with ", -1)),
        o[1] || (o[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        _(" by " + f(Be(B6)), 1)
      ])
    ]));
  }
}), Ar = /* @__PURE__ */ pe(Z6, [["__scopeId", "data-v-8bc3db0a"]]), eI = /* @__PURE__ */ ve({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = b(null);
    async function n() {
      var i;
      await ((i = o.value) == null ? void 0 : i.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (i, c) => (a(), M(pt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => i.$emit("close"))
    }, {
      body: g(() => [
        C(kr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          C(Re, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: g(() => [...c[2] || (c[2] = [
              _(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Re, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => i.$emit("close"))
          }, {
            default: g(() => [...c[3] || (c[3] = [
              _(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), tI = /* @__PURE__ */ pe(eI, [["__scopeId", "data-v-fac00ae7"]]), sI = { class: "header-actions" }, oI = {
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
}, UI = { class: "wizard-footer" }, zI = { class: "wizard-footer-actions" }, ao = 10, FI = 600 * 1e3, Jl = 1800 * 1e3, BI = /* @__PURE__ */ ve({
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
    } = at(), h = b(o.initialStep || 1), w = b(null), p = b("landing"), k = b(!1), x = b(!1), $ = b(!1), R = b(!1), L = b(null), P = b(o.initialStep === 2), S = b(o.defaultPath), q = b(!!o.detectedModelsDir), B = b(o.detectedModelsDir || ""), A = b(null), I = b(null), T = b(null), O = b(null), ce = b("my-new-env"), Y = b(Sr), j = b("latest"), te = b(Ir), Q = b(!0), N = b(null), U = b(null), E = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), Z = b(!1), se = b(!1), $e = b(!1), Ee = b({ progress: 0, message: "" }), Ue = b({ progress: 0, message: "" }), Ke = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ke = b(0), Te = b(null), Ve = b(0), we = b(null), ae = z(() => {
      var ye, he;
      const ee = (ye = S.value) == null ? void 0 : ye.trim(), K = !A.value, Me = !q.value || !I.value && ((he = B.value) == null ? void 0 : he.trim());
      return ee && K && Me;
    }), Ge = z(() => {
      var ee;
      return (ee = ce.value) == null ? void 0 : ee.trim();
    }), Pe = z(() => !!(h.value === 2 || U.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), D = z(() => U.value || o.workspacePath || null);
    async function V() {
      var ee;
      if (A.value = null, !!((ee = S.value) != null && ee.trim()))
        try {
          const K = await c({ path: S.value, type: "workspace" });
          K.valid || (A.value = K.error || "Invalid path");
        } catch (K) {
          A.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ne() {
      var ee;
      if (I.value = null, T.value = null, O.value = null, !!((ee = B.value) != null && ee.trim()))
        try {
          const K = await c({ path: B.value, type: "models" });
          if (K.valid)
            O.value = K.model_count ?? null;
          else if (I.value = K.error || "Invalid path", K.suggestion) {
            T.value = K.suggestion, B.value = K.suggestion, I.value = null;
            const Me = await c({ path: K.suggestion, type: "models" });
            Me.valid && (O.value = Me.model_count ?? null);
          }
        } catch (K) {
          I.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ie() {
      var ee, K, Me, ye, he;
      if (A.value = null, I.value = null, await V(), (ee = A.value) != null && ee.includes("already exists")) {
        A.value = null, U.value = ((K = S.value) == null ? void 0 : K.trim()) || o.defaultPath, h.value = 2, me();
        return;
      }
      if (!A.value && !(q.value && ((Me = B.value) != null && Me.trim()) && (await ne(), I.value))) {
        se.value = !0;
        try {
          await l({
            workspace_path: ((ye = S.value) == null ? void 0 : ye.trim()) || o.defaultPath,
            models_directory: q.value && ((he = B.value) == null ? void 0 : he.trim()) || null
          }), ke.value = 0, Te.value = Date.now();
          const W = setInterval(async () => {
            var F;
            if (Te.value && Date.now() - Te.value > FI) {
              clearInterval(W), se.value = !1, A.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ue = await i();
              if (ke.value = 0, ue.state === "idle" && se.value) {
                clearInterval(W), se.value = !1, A.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ee.value = { progress: ue.progress, message: ue.message }, ue.state === "complete" ? (clearInterval(W), se.value = !1, U.value = ((F = S.value) == null ? void 0 : F.trim()) || o.defaultPath, h.value = 2, me()) : ue.state === "error" && (clearInterval(W), se.value = !1, A.value = ue.error || "Workspace creation failed");
            } catch (ue) {
              ke.value++, console.warn(`Polling failure ${ke.value}/${ao}:`, ue), ke.value >= ao && (clearInterval(W), se.value = !1, A.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (W) {
          se.value = !1, A.value = W instanceof Error ? W.message : "Failed to create workspace";
        }
      }
    }
    async function fe() {
      $e.value = !0, N.value = null;
      try {
        const ee = {
          name: ce.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: j.value,
          torch_backend: te.value,
          switch_after: Q.value,
          workspace_path: U.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ee)).status === "started") {
          Ve.value = 0, we.value = Date.now();
          const Me = setInterval(async () => {
            if (we.value && Date.now() - we.value > Jl) {
              clearInterval(Me), $e.value = !1, N.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ye = await d();
              if (Ve.value = 0, ye.state === "idle" && $e.value) {
                clearInterval(Me), $e.value = !1, N.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ue.value = {
                progress: ye.progress ?? 0,
                message: ye.message,
                phase: ye.phase
              }, ye.state === "complete") {
                clearInterval(Me), $e.value = !1;
                const he = ye.environment_name || ee.name;
                Q.value ? n("complete", he, U.value) : (p.value = "landing", n("environment-created-no-switch", he));
              } else ye.state === "error" && (clearInterval(Me), $e.value = !1, N.value = ye.error || "Environment creation failed");
            } catch (ye) {
              Ve.value++, console.warn(`Polling failure ${Ve.value}/${ao}:`, ye), Ve.value >= ao && (clearInterval(Me), $e.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        $e.value = !1, N.value = ee instanceof Error ? ee.message : "Unknown error";
      }
    }
    async function me() {
      Z.value = !0;
      try {
        E.value = await v();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        Z.value = !1;
      }
    }
    function Ce() {
      w.value && n("switch-environment", w.value, U.value);
    }
    function xe() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : h.value === 2 && o.setupState === "no_workspace" && (h.value = 1);
    }
    function le(ee, K) {
      x.value = !1, K ? n("complete", ee, U.value) : (n("environment-created-no-switch", ee), p.value = "landing");
    }
    function de() {
    }
    et(async () => {
      if (o.detectedModelsDir && (B.value = o.detectedModelsDir), o.workspacePath && (U.value = o.workspacePath), h.value === 2) {
        me();
        const ee = setTimeout(() => {
          P.value = !1;
        }, 3e3);
        await Le(), clearTimeout(ee), P.value = !1;
      }
    });
    async function Le() {
      try {
        const ee = await d();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), p.value = "create", $e.value = !0, ce.value = ee.environment_name || "my-new-env", Ue.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, Se();
          return;
        }
      } catch (ee) {
        console.log("[ComfyGit] Create progress check failed:", ee);
      }
      try {
        const ee = await m();
        console.log("[ComfyGit] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ee.environment_name), L.value = {
          message: ee.message || "Importing...",
          phase: ee.phase || "",
          progress: ee.progress ?? 0,
          environmentName: ee.environment_name || ""
        }, R.value = !0, p.value = "import", x.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    async function Se() {
      Ve.value = 0, we.value = Date.now();
      let ee = null;
      const K = async () => {
        if (we.value && Date.now() - we.value > Jl)
          return ee && clearInterval(ee), $e.value = !1, N.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const ye = await d();
          if (Ve.value = 0, ye.state === "idle" && $e.value)
            return ee && clearInterval(ee), $e.value = !1, N.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ue.value = {
            progress: ye.progress ?? 0,
            message: ye.message,
            phase: ye.phase
          }, ye.state === "complete") {
            ee && clearInterval(ee), $e.value = !1;
            const he = ye.environment_name || ce.value;
            return n("complete", he, U.value), !1;
          } else if (ye.state === "error")
            return ee && clearInterval(ee), $e.value = !1, N.value = ye.error || "Environment creation failed", !1;
          return !0;
        } catch (ye) {
          return Ve.value++, console.warn(`Polling failure ${Ve.value}/${ao}:`, ye), Ve.value >= ao ? (ee && clearInterval(ee), $e.value = !1, N.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (ee = setInterval(async () => {
        !await K() && ee && clearInterval(ee);
      }, 2e3));
    }
    return (ee, K) => (a(), r(G, null, [
      C(pt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Me) => ee.$emit("close"))
      }, {
        header: g(() => [
          K[20] || (K[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", sI, [
            C(Or),
            K[19] || (K[19] = t("span", { class: "header-divider" }, null, -1)),
            Pe.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (Me) => k.value = !0)
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
              onClick: K[1] || (K[1] = (Me) => ee.$emit("close")),
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
          var Me;
          return [
            h.value === 1 ? (a(), r("div", oI, [
              K[24] || (K[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", nI, [
                K[21] || (K[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (ye) => S.value = ye),
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
                  Ye(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (ye) => q.value = ye)
                  }, null, 512), [
                    [Xo, q.value]
                  ]),
                  K[22] || (K[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), r("div", cI, [
                K[23] || (K[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (ye) => B.value = ye),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, uI), [
                  [Nt, B.value]
                ]),
                e.detectedModelsDir && !B.value ? (a(), r("p", dI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), r("p", fI, " Did you mean: " + f(T.value), 1)) : y("", !0),
                I.value ? (a(), r("p", mI, f(I.value), 1)) : y("", !0),
                O.value !== null && !I.value ? (a(), r("p", vI, " Found " + f(O.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              se.value ? (a(), M(Mn, {
                key: 1,
                progress: Ee.value.progress,
                message: Ee.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            h.value === 2 ? (a(), r("div", pI, [
              P.value ? (a(), r("div", gI, [...K[25] || (K[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(G, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", hI, [
                  t("div", yI, [
                    K[27] || (K[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (ye) => $.value = !0),
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
                    onClick: K[6] || (K[6] = (ye) => p.value = "create")
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
                    onClick: K[7] || (K[7] = (ye) => {
                      R.value = !1, p.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Me = o.existingEnvironments) != null && Me.length ? (a(), r(G, { key: 0 }, [
                    K[33] || (K[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", _I, [
                      (a(!0), r(G, null, ge(o.existingEnvironments, (ye) => (a(), r("label", {
                        key: ye,
                        class: Ie(["env-option", { selected: w.value === ye }])
                      }, [
                        Ye(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: ye,
                          "onUpdate:modelValue": K[8] || (K[8] = (he) => w.value = he)
                        }, null, 8, bI), [
                          [Yt, w.value]
                        ]),
                        t("span", kI, f(ye), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", $I, [
                  $e.value ? (a(), r("div", OI, [
                    t("p", AI, [
                      K[41] || (K[41] = _(" Creating environment ", -1)),
                      t("strong", null, f(ce.value), 1),
                      K[42] || (K[42] = _("... ", -1))
                    ]),
                    C(Mn, {
                      progress: Ue.value.progress,
                      message: Ue.value.message,
                      "current-phase": Ue.value.phase,
                      "show-steps": !0,
                      steps: Ke
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(G, { key: 0 }, [
                    K[40] || (K[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", CI, [
                      K[35] || (K[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Ye(t("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (ye) => ce.value = ye),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Nt, ce.value]
                      ])
                    ]),
                    t("div", xI, [
                      K[36] || (K[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (ye) => Y.value = ye),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, ge(Be(xr), (ye) => (a(), r("option", {
                          key: ye,
                          value: ye
                        }, f(ye), 9, SI))), 128))
                      ], 512), [
                        [ps, Y.value]
                      ])
                    ]),
                    t("div", II, [
                      K[37] || (K[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (ye) => j.value = ye),
                        class: "form-select",
                        disabled: Z.value
                      }, [
                        (a(!0), r(G, null, ge(E.value, (ye) => (a(), r("option", {
                          key: ye.tag_name,
                          value: ye.tag_name
                        }, f(ye.name), 9, TI))), 128))
                      ], 8, EI), [
                        [ps, j.value]
                      ])
                    ]),
                    t("div", PI, [
                      K[38] || (K[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (ye) => te.value = ye),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, ge(Be(Za), (ye) => (a(), r("option", {
                          key: ye,
                          value: ye
                        }, f(ye) + f(ye === "auto" ? " (detect GPU)" : ""), 9, RI))), 128))
                      ], 512), [
                        [ps, te.value]
                      ])
                    ]),
                    t("div", MI, [
                      t("label", DI, [
                        Ye(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (ye) => Q.value = ye)
                        }, null, 512), [
                          [Xo, Q.value]
                        ]),
                        K[39] || (K[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    N.value ? (a(), r("div", LI, f(N.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", NI, [
                  C(Pr, {
                    "workspace-path": U.value,
                    "resume-import": R.value,
                    "initial-progress": L.value ?? void 0,
                    onImportComplete: le,
                    onImportStarted: K[14] || (K[14] = (ye) => x.value = !0),
                    onSourceCleared: de
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: g(() => [
          t("div", UI, [
            C(Ar),
            t("div", zI, [
              h.value === 1 ? (a(), M(Re, {
                key: 0,
                variant: "primary",
                disabled: !ae.value || se.value,
                onClick: ie
              }, {
                default: g(() => [
                  _(f(se.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : h.value === 2 ? (a(), r(G, { key: 1 }, [
                !$e.value && !x.value && (p.value !== "landing" || o.setupState === "no_workspace" && !U.value) ? (a(), M(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: xe
                }, {
                  default: g(() => [...K[44] || (K[44] = [
                    _(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), M(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ge.value || $e.value,
                  onClick: fe
                }, {
                  default: g(() => [
                    _(f($e.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), M(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: Ce
                }, {
                  default: g(() => [
                    _(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      k.value ? (a(), M(tI, {
        key: 0,
        "workspace-path": D.value,
        onClose: K[16] || (K[16] = (Me) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), VI = /* @__PURE__ */ pe(BI, [["__scopeId", "data-v-9a9aadc0"]]), WI = { class: "comfygit-panel" }, GI = { class: "panel-header" }, jI = { class: "header-left" }, HI = {
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
}, yE = { class: "env-stats" }, wE = ["onClick"], _E = { class: "toast-container" }, bE = { class: "toast-message" }, kE = /* @__PURE__ */ ve({
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
      deleteEnvironment: k,
      syncEnvironmentManually: x,
      repairWorkflowModels: $,
      getSetupStatus: R
    } = at(), L = Cv(), { liveInstanceCount: P } = Rr({ autoStart: !0 }), S = b(null), q = b([]), B = b([]), A = b([]), I = z(() => A.value.find((oe) => oe.is_current)), T = b(null), O = b(!1), ce = b(1), Y = z(() => {
      var oe;
      return ((oe = T.value) == null ? void 0 : oe.state) || "managed";
    }), j = b(!1), te = b(null), Q = b(null), N = b(!1), U = b(null), E = b(null), Z = b(null), se = b(!1), $e = b(!1), Ee = b(""), Ue = b(null), Ke = b({ state: "idle", progress: 0, message: "" });
    let ke = null, Te = null;
    const Ve = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, we = o.initialView ? Ve[o.initialView] : null, ae = b((we == null ? void 0 : we.view) ?? "status"), Ge = b((we == null ? void 0 : we.section) ?? "this-env");
    function Pe(oe, H) {
      ae.value = oe, Ge.value = H;
    }
    function D(oe) {
      const De = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[oe];
      De && Pe(De.view, De.section);
    }
    function V() {
      Pe("branches", "this-env");
    }
    function ne() {
      n("close"), setTimeout(() => {
        var H;
        const oe = document.querySelectorAll("button.comfyui-button");
        for (const De of oe)
          if (((H = De.textContent) == null ? void 0 : H.trim()) === "Manager") {
            De.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ie = b(null), fe = b(!1), me = b(!1), Ce = b([]);
    let xe = 0;
    function le(oe, H = "info", De = 3e3) {
      const je = ++xe;
      return Ce.value.push({ id: je, message: oe, type: H }), De > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((ot) => ot.id !== je);
      }, De), je;
    }
    function de(oe) {
      Ce.value = Ce.value.filter((H) => H.id !== oe);
    }
    function Le(oe, H) {
      le(oe, H);
    }
    const Se = z(() => {
      if (!S.value) return "neutral";
      const oe = S.value.workflows, H = oe.new.length > 0 || oe.modified.length > 0 || oe.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? H ? "warning" : "success" : "error";
    });
    z(() => S.value ? Se.value === "success" ? "All synced" : Se.value === "warning" ? "Uncommitted changes" : Se.value === "error" ? "Not synced" : "" : "");
    async function ee() {
      j.value = !0, te.value = null;
      try {
        const [oe, H, De, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          h()
        ]);
        S.value = oe, q.value = H.commits, B.value = De.branches, A.value = je, n("statusUpdate", oe), U.value && await U.value.loadWorkflows(!0);
      } catch (oe) {
        te.value = oe instanceof Error ? oe.message : "Failed to load status", S.value = null, q.value = [], B.value = [];
      } finally {
        j.value = !1;
      }
    }
    function K(oe) {
      Q.value = oe;
    }
    async function Me(oe) {
      var De;
      Q.value = null;
      const H = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ie.value = {
        title: H ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: H ? "You have uncommitted changes that will be lost." : `Checkout commit ${oe.short_hash || ((De = oe.hash) == null ? void 0 : De.slice(0, 7))}?`,
        details: H ? as() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: H,
        onConfirm: async () => {
          var mt;
          ie.value = null, ue();
          const je = le(`Checking out ${oe.short_hash || ((mt = oe.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await u(oe.hash, H);
          de(je), ot.status === "success" ? le("Restarting ComfyUI...", "success") : le(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function ye(oe) {
      const H = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ie.value = {
        title: H ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: H ? "You have uncommitted changes." : `Switch to branch "${oe}"?`,
        details: H ? as() : void 0,
        warning: H ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, ue();
          const De = le(`Switching to ${oe}...`, "info", 0), je = await m(oe, H);
          de(De), je.status === "success" ? le("Restarting ComfyUI...", "success") : le(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function he(oe) {
      const H = le(`Creating branch ${oe}...`, "info", 0), De = await d(oe);
      de(H), De.status === "success" ? (le(`Branch "${oe}" created`, "success"), await ee()) : le(De.message || "Failed to create branch", "error");
    }
    async function W(oe, H = !1) {
      const De = async (je) => {
        var mt;
        const ot = le(`Deleting branch ${oe}...`, "info", 0);
        try {
          const Mt = await v(oe, je);
          de(ot), Mt.status === "success" ? (le(`Branch "${oe}" deleted`, "success"), await ee()) : (mt = Mt.message) != null && mt.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await De(!0);
            }
          } : le(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          de(ot);
          const ls = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          ls.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await De(!0);
            }
          } : le(ls, "error");
        }
      };
      ie.value = {
        title: "Delete Branch",
        message: `Delete branch "${oe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, await De(H);
        }
      };
    }
    async function F(oe) {
      Q.value = null;
      const H = prompt("Enter branch name:");
      if (H) {
        const De = le(`Creating branch ${H}...`, "info", 0), je = await d(H, oe.hash);
        de(De), je.status === "success" ? (le(`Branch "${H}" created from ${oe.short_hash}`, "success"), await ee()) : le(je.message || "Failed to create branch", "error");
      }
    }
    function ue() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Fe() {
      ie.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var oe;
          ie.value = null, ue(), le("Restarting environment...", "info");
          try {
            (oe = window.app) != null && oe.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Qe() {
      ie.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var oe;
          ie.value = null, le("Stopping environment...", "info");
          try {
            (oe = window.app) != null && oe.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(oe, H) {
      N.value = !1, Ee.value = oe, Ue.value = H || null, se.value = !0;
    }
    async function lt() {
      se.value = !1, $e.value = !0, ue(), Ke.value = {
        progress: 10,
        state: dt(10),
        message: Rt(10)
      };
      try {
        await w(Ee.value, Ue.value || void 0), Ut(), Bs();
      } catch (oe) {
        jt(), $e.value = !1, le(`Failed to initiate switch: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error"), Ke.value = { state: "idle", progress: 0, message: "" }, Ue.value = null;
      }
    }
    function dt(oe) {
      return oe >= 100 ? "complete" : oe >= 80 ? "validating" : oe >= 60 ? "starting" : oe >= 30 ? "syncing" : "preparing";
    }
    function Rt(oe) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[dt(oe)] || "";
    }
    function Ut() {
      if (Te) return;
      let oe = 10;
      const H = 60, De = 5e3, je = 100, ot = (H - oe) / (De / je);
      Te = window.setInterval(() => {
        if (oe += ot, oe >= H && (oe = H, jt()), Ke.value.progress < H) {
          const mt = Math.floor(oe);
          Ke.value = {
            progress: mt,
            state: dt(mt),
            message: Rt(mt)
          };
        }
      }, je);
    }
    function jt() {
      Te && (clearInterval(Te), Te = null);
    }
    function Bs() {
      ke || (ke = window.setInterval(async () => {
        try {
          let oe = await L.getStatus();
          if ((!oe || oe.state === "idle") && (oe = await p()), !oe)
            return;
          const H = oe.progress || 0;
          H >= 60 && jt();
          const De = Math.max(H, Ke.value.progress), je = oe.state && oe.state !== "idle" && oe.state !== "unknown", ot = je ? oe.state : dt(De), mt = je && oe.message || Rt(De);
          Ke.value = {
            state: ot,
            progress: De,
            message: mt
          }, oe.state === "complete" ? (jt(), Ps(), $e.value = !1, le(`✓ Switched to ${Ee.value}`, "success"), await ee(), Ee.value = "") : oe.state === "rolled_back" ? (jt(), Ps(), $e.value = !1, le("Switch failed, restored previous environment", "warning"), Ee.value = "") : oe.state === "critical_failure" && (jt(), Ps(), $e.value = !1, le(`Critical error during switch: ${oe.message}`, "error"), Ee.value = "");
        } catch (oe) {
          console.error("Failed to poll switch progress:", oe);
        }
      }, 1e3));
    }
    function Ps() {
      jt(), ke && (clearInterval(ke), ke = null);
    }
    function so() {
      var oe;
      se.value = !1, Ee.value = "", (oe = T.value) != null && oe.state && T.value.state !== "managed" && (ce.value = T.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function ko(oe) {
      fe.value = !1, await ee(), le(oe.message, oe.success ? "success" : "error");
    }
    async function $o() {
      me.value = !1;
      const oe = le("Syncing environment...", "info", 0);
      try {
        const H = await x("skip", !0);
        if (de(oe), H.status === "success") {
          const De = [];
          H.nodes_installed.length && De.push(`${H.nodes_installed.length} installed`), H.nodes_removed.length && De.push(`${H.nodes_removed.length} removed`);
          const je = De.length ? `: ${De.join(", ")}` : "";
          le(`✓ Environment synced${je}`, "success"), await ee();
        } else {
          const De = H.errors.length ? H.errors.join("; ") : H.message;
          le(`Sync failed: ${De}`, "error");
        }
      } catch (H) {
        de(oe), le(`Sync error: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
      }
    }
    async function Co(oe) {
      var H;
      try {
        const De = await $(oe);
        De.failed.length === 0 ? le(`✓ Repaired ${De.success} workflow${De.success === 1 ? "" : "s"}`, "success") : le(`Repaired ${De.success}, failed: ${De.failed.length}`, "warning"), await ee();
      } catch (De) {
        le(`Repair failed: ${De instanceof Error ? De.message : "Unknown error"}`, "error");
      } finally {
        (H = Z.value) == null || H.resetRepairingState();
      }
    }
    async function _e() {
      var H, De;
      const oe = le("Repairing environment...", "info", 0);
      try {
        const je = await x("skip", !0);
        if (de(oe), je.status === "success") {
          const ot = [];
          je.nodes_installed.length && ot.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && ot.push(`${je.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          le(`✓ Environment repaired${mt}`, "success"), (H = Z.value) == null || H.closeDetailModal(), await ee();
        } else {
          const ot = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          le(`Repair failed: ${ot}`, "error");
        }
      } catch (je) {
        de(oe), le(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (De = Z.value) == null || De.resetRepairingEnvironmentState();
      }
    }
    async function X(oe, H) {
      le(`Environment '${oe}' created`, "success"), await ee(), E.value && await E.value.loadEnvironments(), H && await vt(oe);
    }
    async function He(oe) {
      var H;
      if (((H = I.value) == null ? void 0 : H.name) === oe) {
        le("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ie.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${oe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ie.value = null;
          try {
            const De = await k(oe);
            De.status === "success" ? (le(`Environment "${oe}" deleted`, "success"), await ee(), E.value && await E.value.loadEnvironments()) : le(De.message || "Failed to delete environment", "error");
          } catch (De) {
            le(`Error deleting environment: ${De instanceof Error ? De.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(oe, H) {
      O.value = !1;
      try {
        T.value = await R();
      } catch {
      }
      await vt(oe, H);
    }
    function Ht() {
      O.value = !1, n("close");
    }
    async function gs(oe, H) {
      await vt(oe, H);
    }
    async function hs(oe) {
      await ee(), await vt(oe);
    }
    async function ns(oe) {
      T.value = await R(), console.log(`Environment '${oe}' created. Available for switching.`);
    }
    function Oe() {
      Pe("environments", "all-envs"), setTimeout(() => {
        var oe;
        (oe = E.value) == null || oe.openCreateModal();
      }, 100);
    }
    function as() {
      if (!S.value) return [];
      const oe = [], H = S.value.workflows;
      return H.new.length && oe.push(`${H.new.length} new workflow(s)`), H.modified.length && oe.push(`${H.modified.length} modified workflow(s)`), H.deleted.length && oe.push(`${H.deleted.length} deleted workflow(s)`), oe;
    }
    return et(async () => {
      try {
        if (T.value = await R(), T.value.state === "no_workspace") {
          O.value = !0, ce.value = 1;
          return;
        }
        if (T.value.state === "empty_workspace") {
          O.value = !0, ce.value = 2;
          return;
        }
        if (T.value.state === "unmanaged") {
          O.value = !0, ce.value = 2;
          return;
        }
      } catch (oe) {
        console.warn("Setup status check failed, proceeding normally:", oe);
      }
      await ee();
    }), (oe, H) => {
      var De, je, ot, mt, Mt, ls, Vs, Ws, J, be, Ae, ct;
      return a(), r("div", WI, [
        t("div", GI, [
          t("div", jI, [
            H[31] || (H[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (a(), r("div", HI)) : y("", !0)
          ]),
          t("div", KI, [
            C(Or),
            H[34] || (H[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ie(["icon-btn", { spinning: j.value }]),
              onClick: ee,
              title: "Refresh"
            }, [...H[32] || (H[32] = [
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
              onClick: H[0] || (H[0] = (Ne) => n("close")),
              title: "Close"
            }, [...H[33] || (H[33] = [
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
            H[35] || (H[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Fe
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
            onClick: H[1] || (H[1] = (Ne) => Pe("environments", "all-envs"))
          }, [
            S.value ? (a(), r("div", YI, [
              t("span", null, f(((De = I.value) == null ? void 0 : De.name) || ((je = S.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", JI, "(" + f(S.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            H[36] || (H[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", XI, [
          t("div", QI, [
            t("div", ZI, [
              t("div", eE, [
                H[37] || (H[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "status" && Ge.value === "this-env" }]),
                  onClick: H[2] || (H[2] = (Ne) => Pe("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "workflows" }]),
                  onClick: H[3] || (H[3] = (Ne) => Pe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "models-env" }]),
                  onClick: H[4] || (H[4] = (Ne) => Pe("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "branches" }]),
                  onClick: H[5] || (H[5] = (Ne) => Pe("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "history" }]),
                  onClick: H[6] || (H[6] = (Ne) => Pe("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "nodes" }]),
                  onClick: H[7] || (H[7] = (Ne) => Pe("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "debug-env" }]),
                  onClick: H[8] || (H[8] = (Ne) => Pe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              H[41] || (H[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", tE, [
                H[38] || (H[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "environments" }]),
                  onClick: H[9] || (H[9] = (Ne) => Pe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "model-index" }]),
                  onClick: H[10] || (H[10] = (Ne) => Pe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "settings" }]),
                  onClick: H[11] || (H[11] = (Ne) => Pe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "debug-workspace" }]),
                  onClick: H[12] || (H[12] = (Ne) => Pe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              H[42] || (H[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", sE, [
                H[40] || (H[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "deploy" }]),
                  onClick: H[13] || (H[13] = (Ne) => Pe("deploy", "sharing"))
                }, [
                  H[39] || (H[39] = _(" DEPLOY ", -1)),
                  Be(P) > 0 ? (a(), r("span", oE, f(Be(P)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "export" }]),
                  onClick: H[14] || (H[14] = (Ne) => Pe("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "import" }]),
                  onClick: H[15] || (H[15] = (Ne) => Pe("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ae.value === "remotes" }]),
                  onClick: H[16] || (H[16] = (Ne) => Pe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", nE, [
              C(Ar)
            ])
          ]),
          t("div", aE, [
            te.value ? (a(), r("div", lE, f(te.value), 1)) : !S.value && ae.value === "status" ? (a(), r("div", iE, " Loading status... ")) : (a(), r(G, { key: 2 }, [
              ae.value === "status" ? (a(), M(Jm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: Z,
                status: S.value,
                "setup-state": Y.value,
                onSwitchBranch: V,
                onCommitChanges: H[17] || (H[17] = (Ne) => fe.value = !0),
                onSyncEnvironment: H[18] || (H[18] = (Ne) => me.value = !0),
                onViewWorkflows: H[19] || (H[19] = (Ne) => Pe("workflows", "this-env")),
                onViewHistory: H[20] || (H[20] = (Ne) => Pe("history", "this-env")),
                onViewDebug: H[21] || (H[21] = (Ne) => Pe("debug-env", "this-env")),
                onViewNodes: H[22] || (H[22] = (Ne) => Pe("nodes", "this-env")),
                onRepairMissingModels: Co,
                onRepairEnvironment: _e,
                onStartSetup: H[23] || (H[23] = (Ne) => O.value = !0),
                onViewEnvironments: H[24] || (H[24] = (Ne) => Pe("environments", "all-envs")),
                onCreateEnvironment: Oe
              }, null, 8, ["status", "setup-state"])) : ae.value === "workflows" ? (a(), M(I0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: U,
                onRefresh: ee
              }, null, 512)) : ae.value === "models-env" ? (a(), M(cw, {
                key: 2,
                onNavigate: D
              })) : ae.value === "branches" ? (a(), M(dv, {
                key: 3,
                branches: B.value,
                current: ((ot = S.value) == null ? void 0 : ot.branch) || null,
                onSwitch: ye,
                onCreate: he,
                onDelete: W
              }, null, 8, ["branches", "current"])) : ae.value === "history" ? (a(), M(kv, {
                key: 4,
                commits: q.value,
                onSelect: K,
                onCheckout: Me
              }, null, 8, ["commits"])) : ae.value === "nodes" ? (a(), M(a_, {
                key: 5,
                "version-mismatches": ((Mt = (mt = S.value) == null ? void 0 : mt.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: ne,
                onRepairEnvironment: _e,
                onToast: Le
              }, null, 8, ["version-mismatches"])) : ae.value === "debug-env" ? (a(), M(_2, { key: 6 })) : ae.value === "environments" ? (a(), M($$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: E,
                onSwitch: vt,
                onCreated: X,
                onDelete: He
              }, null, 512)) : ae.value === "model-index" ? (a(), M(Tw, {
                key: 8,
                onRefresh: ee
              })) : ae.value === "settings" ? (a(), M(d2, { key: 9 })) : ae.value === "debug-workspace" ? (a(), M(w2, { key: 10 })) : ae.value === "deploy" ? (a(), M(e4, {
                key: 11,
                onToast: Le,
                onNavigate: D
              })) : ae.value === "export" ? (a(), M(Z$, { key: 12 })) : ae.value === "import" ? (a(), M(H3, {
                key: 13,
                onImportCompleteSwitch: hs
              })) : ae.value === "remotes" ? (a(), M(Gk, {
                key: 14,
                onToast: Le
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Q.value ? (a(), M(y4, {
          key: 0,
          commit: Q.value,
          onClose: H[25] || (H[25] = (Ne) => Q.value = null),
          onCheckout: Me,
          onCreateBranch: F
        }, null, 8, ["commit"])) : y("", !0),
        ie.value ? (a(), M(Qa, {
          key: 1,
          title: ie.value.title,
          message: ie.value.message,
          details: ie.value.details,
          warning: ie.value.warning,
          confirmLabel: ie.value.confirmLabel,
          cancelLabel: ie.value.cancelLabel,
          secondaryLabel: ie.value.secondaryLabel,
          secondaryAction: ie.value.secondaryAction,
          destructive: ie.value.destructive,
          onConfirm: ie.value.onConfirm,
          onCancel: H[26] || (H[26] = (Ne) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(y6, {
          show: se.value,
          "from-environment": ((ls = I.value) == null ? void 0 : ls.name) || "unknown",
          "to-environment": Ee.value,
          onConfirm: lt,
          onClose: so
        }, null, 8, ["show", "from-environment", "to-environment"]),
        fe.value && S.value ? (a(), M(Lr, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: H[27] || (H[27] = (Ne) => fe.value = !1),
          onCommitted: ko
        }, null, 8, ["status"])) : y("", !0),
        me.value && S.value ? (a(), M(U6, {
          key: 3,
          show: me.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: $o,
          onClose: H[28] || (H[28] = (Ne) => me.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(T6, {
          show: $e.value,
          state: Ke.value.state,
          progress: Ke.value.progress,
          message: Ke.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: H[30] || (H[30] = rt((Ne) => N.value = !1, ["self"]))
        }, [
          t("div", rE, [
            t("div", cE, [
              H[44] || (H[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: H[29] || (H[29] = (Ne) => N.value = !1)
              }, [...H[43] || (H[43] = [
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
              H[45] || (H[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", dE, [
                (a(!0), r(G, null, ge(A.value, (Ne) => (a(), r("div", {
                  key: Ne.name,
                  class: Ie(["env-item", { current: Ne.is_current }])
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
                    onClick: (xo) => vt(Ne.name)
                  }, " SWITCH ", 8, wE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        O.value ? (a(), M(VI, {
          key: 5,
          "default-path": ((Vs = T.value) == null ? void 0 : Vs.default_path) || "~/comfygit",
          "detected-models-dir": ((Ws = T.value) == null ? void 0 : Ws.detected_models_dir) || null,
          "initial-step": ce.value,
          "existing-environments": ((J = T.value) == null ? void 0 : J.environments) || [],
          "cli-installed": ((be = T.value) == null ? void 0 : be.cli_installed) ?? !0,
          "setup-state": ((Ae = T.value) == null ? void 0 : Ae.state) || "no_workspace",
          "workspace-path": ((ct = T.value) == null ? void 0 : ct.workspace_path) || null,
          onComplete: ht,
          onClose: Ht,
          onSwitchEnvironment: gs,
          onEnvironmentCreatedNoSwitch: ns
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", _E, [
          C(ld, { name: "toast" }, {
            default: g(() => [
              (a(!0), r(G, null, ge(Ce.value, (Ne) => (a(), r("div", {
                key: Ne.id,
                class: Ie(["toast", Ne.type])
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
}), $E = /* @__PURE__ */ pe(kE, [["__scopeId", "data-v-037b3ee3"]]), CE = { class: "item-header" }, xE = { class: "item-info" }, SE = { class: "filename" }, IE = { class: "metadata" }, EE = { class: "size" }, TE = {
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
}, VE = /* @__PURE__ */ ve({
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
      class: Ie(["download-item", `status-${e.item.status}`])
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
        _(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", BE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), To = /* @__PURE__ */ pe(VE, [["__scopeId", "data-v-2110df65"]]), WE = { class: "queue-title" }, GE = { class: "count" }, jE = { class: "queue-actions" }, HE = { class: "action-label" }, KE = {
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
}, mT = { class: "section-header" }, vT = { class: "section-label failed" }, pT = { class: "items-list" }, gT = /* @__PURE__ */ ve({
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
      clearCompleted: k
    } = _o(), x = b(!1);
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
          k(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const R = z(() => {
      var B;
      if (s.items.length === 0) return 0;
      const S = l.value.length, q = ((B = o.value) == null ? void 0 : B.progress) || 0;
      return Math.round((S + q / 100) / s.items.length * 100);
    });
    function L(S) {
      m(S);
    }
    function P(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, q) => (a(), M(wt, { to: "body" }, [
      Be(u) ? (a(), r("div", {
        key: 0,
        class: Ie(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (B) => x.value = !x.value)
        }, [
          t("div", WE, [
            q[4] || (q[4] = t("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", GE, "(" + f(Be(d)) + "/" + f(Be(s).items.length) + ")", 1)
          ]),
          t("div", jE, [
            t("span", HE, f(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), r("div", QE, [
          Be(o) ? (a(), r("div", ZE, [
            q[6] || (q[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(To, {
              item: Be(o),
              onCancel: q[1] || (q[1] = (B) => L(Be(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Be(c).length > 0 ? (a(), r("div", eT, [
            t("div", tT, [
              t("span", sT, "Paused (" + f(Be(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...B) => Be(w) && Be(w)(...B))
              }, "Resume All")
            ]),
            t("div", oT, [
              (a(!0), r(G, null, ge(Be(c), (B) => (a(), M(To, {
                key: B.id,
                item: B,
                onResume: (A) => Be(h)(B.id),
                onRemove: (A) => Be(p)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Be(n).length > 0 ? (a(), r("div", nT, [
            t("div", aT, [
              t("span", lT, "Queued (" + f(Be(n).length) + ")", 1)
            ]),
            t("div", iT, [
              (a(!0), r(G, null, ge(Be(n), (B) => (a(), M(To, {
                key: B.id,
                item: B,
                onCancel: (A) => L(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Be(l).length > 0 ? (a(), r("div", rT, [
            t("div", cT, [
              t("span", uT, "Completed (" + f(Be(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...B) => Be(k) && Be(k)(...B))
              }, "Clear")
            ]),
            t("div", dT, [
              (a(!0), r(G, null, ge(Be(l).slice(0, 3), (B) => (a(), M(To, {
                key: B.id,
                item: B,
                onRemove: (A) => Be(p)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Be(i).length > 0 ? (a(), r("div", fT, [
            t("div", mT, [
              t("span", vT, "Failed (" + f(Be(i).length) + ")", 1)
            ]),
            t("div", pT, [
              (a(!0), r(G, null, ge(Be(i), (B) => (a(), M(To, {
                key: B.id,
                item: B,
                onRetry: (A) => Be(v)(B.id),
                onRemove: (A) => Be(p)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", KE, [
          t("div", qE, [
            t("div", {
              class: "progress-fill",
              style: Gt({ width: `${R.value}%` })
            }, null, 4)
          ]),
          Be(o) ? (a(), r("div", YE, [
            t("span", JE, f(Be(o).filename), 1),
            t("span", XE, f(P(Be(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), hT = /* @__PURE__ */ pe(gT, [["__scopeId", "data-v-60751cfa"]]), yT = {
  key: 0,
  class: "loading-state"
}, wT = {
  key: 1,
  class: "analysis-results"
}, _T = {
  key: 0,
  class: "section"
}, bT = { class: "section-header" }, kT = { class: "section-title" }, $T = { class: "item-list" }, CT = { class: "package-info" }, xT = { class: "package-name" }, ST = { class: "node-count" }, IT = {
  key: 1,
  class: "queued-badge"
}, ET = {
  key: 0,
  class: "overflow-note"
}, TT = {
  key: 1,
  class: "section"
}, PT = { class: "section-header" }, RT = { class: "section-title" }, MT = { class: "item-list" }, DT = { class: "node-type" }, LT = {
  key: 0,
  class: "overflow-note"
}, OT = {
  key: 2,
  class: "section"
}, AT = { class: "section-header" }, NT = { class: "section-title" }, UT = { class: "item-list" }, zT = { class: "model-info" }, FT = { class: "model-name" }, BT = {
  key: 1,
  class: "queued-badge"
}, VT = {
  key: 1,
  class: "no-url"
}, WT = {
  key: 0,
  class: "overflow-note"
}, GT = { class: "dont-show-again" }, jT = /* @__PURE__ */ ve({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = b(!1), o = b(null), n = b(null), l = b(!1), i = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Set()), u = b(!1), d = b(null), m = b(null), { addToQueue: v } = _o(), { installNode: h } = at(), w = z(() => p.value.length > 0 || x.value.length > 0 || $.value.length > 0), p = z(() => {
      var se, $e;
      if (!((se = n.value) != null && se.nodes)) return [];
      const E = /* @__PURE__ */ new Map(), Z = (n.value.nodes.resolved || []).filter((Ee) => {
        var Ue;
        return !Ee.is_installed && ((Ue = Ee.package) == null ? void 0 : Ue.package_id);
      });
      for (const Ee of Z) {
        const Ue = Ee.package.package_id;
        E.has(Ue) || E.set(Ue, {
          package_id: Ue,
          title: Ee.package.title || Ue,
          node_count: 0,
          node_types: []
        });
        const Ke = E.get(Ue);
        Ke.node_count++, Ke.node_types.push((($e = Ee.reference) == null ? void 0 : $e.node_type) || Ee.node_type);
      }
      return Array.from(E.values());
    }), k = z(() => p.value.reduce((E, Z) => E + Z.node_count, 0)), x = z(() => {
      var E;
      return (E = n.value) != null && E.nodes ? (n.value.nodes.unresolved || []).map((Z) => {
        var se;
        return {
          node_type: ((se = Z.reference) == null ? void 0 : se.node_type) || Z.node_type
        };
      }) : [];
    }), $ = z(() => {
      var se;
      if (!((se = n.value) != null && se.models)) return [];
      const E = (n.value.models.resolved || []).filter(
        ($e) => $e.match_type === "download_intent" || $e.match_type === "property_download_intent" || $e.match_type === "not_found"
      ).map(($e) => {
        var Ee, Ue, Ke, ke, Te, Ve, we, ae;
        return {
          filename: ((Ue = (Ee = $e.reference) == null ? void 0 : Ee.widget_value) == null ? void 0 : Ue.split("/").pop()) || ((Ke = $e.reference) == null ? void 0 : Ke.widget_value) || $e.widget_value,
          widget_value: ((ke = $e.reference) == null ? void 0 : ke.widget_value) || $e.widget_value,
          url: ((Te = $e.download_source) == null ? void 0 : Te.url) || null,
          targetPath: ((Ve = $e.download_source) == null ? void 0 : Ve.target_path) || null,
          canDownload: !!((we = $e.download_source) != null && we.url && ((ae = $e.download_source) != null && ae.target_path))
        };
      }), Z = (n.value.models.unresolved || []).map(($e) => {
        var Ee, Ue, Ke, ke;
        return {
          filename: ((Ue = (Ee = $e.reference) == null ? void 0 : Ee.widget_value) == null ? void 0 : Ue.split("/").pop()) || ((Ke = $e.reference) == null ? void 0 : Ke.widget_value) || $e.widget_value,
          widget_value: ((ke = $e.reference) == null ? void 0 : ke.widget_value) || $e.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...E, ...Z];
    }), R = z(() => $.value.filter((E) => E.canDownload)), L = z(() => p.value.length > 0 && p.value.every((E) => i.value.has(E.package_id))), P = z(() => R.value.length > 0 && R.value.every((E) => c.value.has(E.url))), S = z(() => p.value.length > 0 || R.value.length > 0), q = z(() => {
      const E = p.value.length === 0 || L.value, Z = R.value.length === 0 || P.value;
      return E && Z;
    });
    async function B(E) {
      if (!i.value.has(E)) {
        d.value = E;
        try {
          await h(E), i.value.add(E);
        } catch (Z) {
          console.error("[ComfyGit] Failed to install package:", Z);
        } finally {
          d.value = null;
        }
      }
    }
    function A(E) {
      !E.url || !E.targetPath || c.value.has(E.url) || (v([{
        workflow: "unsaved",
        filename: E.filename,
        url: E.url,
        targetPath: E.targetPath
      }]), c.value.add(E.url));
    }
    function I() {
      for (const E of p.value)
        i.value.has(E.package_id) || B(E.package_id);
    }
    function T() {
      const E = R.value.filter(
        (Z) => !c.value.has(Z.url)
      );
      if (E.length !== 0) {
        v(E.map((Z) => ({
          workflow: "unsaved",
          filename: Z.filename,
          url: Z.url,
          targetPath: Z.targetPath
        })));
        for (const Z of E)
          c.value.add(Z.url);
      }
    }
    function O() {
      I(), T();
    }
    function ce(E) {
      const Z = ((E == null ? void 0 : E.nodes) || []).map((se) => se.type).sort().join(",");
      return btoa(Z).slice(0, 16);
    }
    function Y(E) {
      const Z = ce(E);
      return localStorage.getItem("comfygit:popup-dismissed:" + Z) !== "true";
    }
    function j() {
      u.value && m.value && localStorage.setItem("comfygit:popup-dismissed:" + m.value, "true");
    }
    async function te(E) {
      if (Y(E)) {
        s.value = !0, o.value = null, l.value = !0, m.value = ce(E), i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = !1;
        try {
          const Z = await fetch("/v2/comfygit/workflow/analyze-json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ workflow: E, name: "unsaved" })
          });
          if (!Z.ok) {
            const se = await Z.json();
            throw new Error(se.error || "Failed to analyze workflow");
          }
          n.value = await Z.json(), w.value || N();
        } catch (Z) {
          console.error("[ComfyGit] Failed to analyze workflow:", Z), o.value = Z instanceof Error ? Z.message : "Unknown error", N();
        } finally {
          s.value = !1;
        }
      }
    }
    function Q() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      })), N();
    }
    function N() {
      l.value = !1, n.value = null, m.value = null;
    }
    function U(E) {
      const { workflow: Z } = E.detail;
      Z && te(Z);
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", U);
    }), to(() => {
      window.removeEventListener("comfygit:workflow-loaded", U);
    }), (E, Z) => l.value ? (a(), M(pt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: N
    }, {
      body: g(() => [
        s.value ? (a(), r("div", yT, [...Z[1] || (Z[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && w.value ? (a(), r("div", wT, [
          p.value.length > 0 ? (a(), r("div", _T, [
            t("div", bT, [
              t("span", kT, "Missing Custom Nodes (" + f(k.value) + ")", 1),
              p.value.length > 1 ? (a(), M(Re, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: L.value,
                onClick: I
              }, {
                default: g(() => [
                  _(f(L.value ? "All Queued" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", $T, [
              (a(!0), r(G, null, ge(p.value.slice(0, 5), (se) => (a(), r("div", {
                key: se.package_id,
                class: "package-item"
              }, [
                t("div", CT, [
                  t("span", xT, f(se.title), 1),
                  t("span", ST, "(" + f(se.node_count) + " " + f(se.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                i.value.has(se.package_id) ? (a(), r("span", IT, "Queued")) : (a(), M(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: d.value === se.package_id,
                  onClick: ($e) => B(se.package_id)
                }, {
                  default: g(() => [
                    _(f(d.value === se.package_id ? "Installing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"]))
              ]))), 128)),
              p.value.length > 5 ? (a(), r("div", ET, " ...and " + f(p.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          x.value.length > 0 ? (a(), r("div", TT, [
            t("div", PT, [
              t("span", RT, "Unknown Nodes (" + f(x.value.length) + ")", 1)
            ]),
            t("div", MT, [
              (a(!0), r(G, null, ge(x.value.slice(0, 5), (se) => (a(), r("div", {
                key: se.node_type,
                class: "item"
              }, [
                t("code", DT, f(se.node_type), 1),
                Z[2] || (Z[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              x.value.length > 5 ? (a(), r("div", LT, " ...and " + f(x.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          $.value.length > 0 ? (a(), r("div", OT, [
            t("div", AT, [
              t("span", NT, "Missing Models (" + f($.value.length) + ")", 1),
              R.value.length > 1 ? (a(), M(Re, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: P.value,
                onClick: T
              }, {
                default: g(() => [
                  _(f(P.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", UT, [
              (a(!0), r(G, null, ge($.value.slice(0, 5), (se) => (a(), r("div", {
                key: se.widget_value,
                class: "model-item"
              }, [
                t("div", zT, [
                  t("span", FT, f(se.filename), 1)
                ]),
                se.canDownload ? (a(), r(G, { key: 0 }, [
                  c.value.has(se.url) ? (a(), r("span", BT, "Queued")) : (a(), M(Re, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: ($e) => A(se)
                  }, {
                    default: g(() => [...Z[3] || (Z[3] = [
                      _(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), r("span", VT, "Manual download required"))
              ]))), 128)),
              $.value.length > 5 ? (a(), r("div", WT, " ...and " + f($.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", GT, [
            C(Ia, {
              modelValue: u.value,
              "onUpdate:modelValue": [
                Z[0] || (Z[0] = (se) => u.value = se),
                j
              ]
            }, {
              default: g(() => [...Z[4] || (Z[4] = [
                _(" Don't show again for this workflow ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: g(() => [
        C(Re, {
          variant: "secondary",
          onClick: N
        }, {
          default: g(() => [...Z[5] || (Z[5] = [
            _("Dismiss", -1)
          ])]),
          _: 1
        }),
        S.value ? (a(), M(Re, {
          key: 0,
          variant: "primary",
          disabled: q.value,
          onClick: O
        }, {
          default: g(() => [
            _(f(q.value ? "All Queued" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : (a(), M(Re, {
          key: 1,
          variant: "primary",
          onClick: Q
        }, {
          default: g(() => [...Z[6] || (Z[6] = [
            _("Open ComfyGit Panel", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), HT = /* @__PURE__ */ pe(jT, [["__scopeId", "data-v-3408a56d"]]), KT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', qT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', YT = {
  comfy: KT,
  phosphor: qT
}, el = "comfy", Nr = "comfygit-theme";
let Ks = null, Ur = el;
function JT() {
  try {
    const e = localStorage.getItem(Nr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return el;
}
function zr(e = el) {
  Ks && Ks.remove(), Ks = document.createElement("style"), Ks.id = "comfygit-theme-styles", Ks.setAttribute("data-theme", e), Ks.textContent = YT[e], document.head.appendChild(Ks), document.body.setAttribute("data-comfygit-theme", e), Ur = e;
  try {
    localStorage.setItem(Nr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function XT() {
  return Ur;
}
function QT(e) {
  zr(e);
}
function ZT(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const tl = document.createElement("link");
tl.rel = "stylesheet";
tl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(tl);
const e7 = JT();
zr(e7);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), QT(e);
  },
  getTheme: () => {
    const e = XT();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let qt = null, Lt = null, Vo = null, Po = null, Xl = null, Ro = null, Ql = null;
const po = b(null);
let sl = "managed", Fr = !1;
async function _n() {
  var e;
  if (!((e = fs) != null && e.api)) return null;
  try {
    const s = await fs.api.fetchApi("/v2/comfygit/status");
    s.ok && (po.value = await s.json());
  } catch {
  }
}
async function Ea() {
  var e;
  if ((e = fs) != null && e.api)
    try {
      const s = await fs.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        sl = o.state, Fr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ta() {
  var s;
  if (sl === "managed" || !Fr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function t7() {
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
    render: () => sn($E, {
      initialView: e,
      onClose: ma,
      onStatusUpdate: async (l) => {
        po.value = l, Wo(), await Ea(), Pa(), Ta();
      }
    })
  }).mount(s), document.body.appendChild(qt);
}
function ma() {
  qt && (qt.remove(), qt = null);
}
function s7(e) {
  Mo(), Lt = document.createElement("div"), Lt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Lt.style.position = "fixed", Lt.style.top = `${s.bottom + 8}px`, Lt.style.right = `${window.innerWidth - s.right}px`, Lt.style.zIndex = "10001";
  const o = (l) => {
    Lt && !Lt.contains(l.target) && l.target !== e && (Mo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Mo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Vo = Hn({
    render: () => sn(Lr, {
      status: po.value,
      onClose: Mo,
      onCommitted: (l) => {
        Mo(), o7(l.success, l.message), _n().then(Wo);
      }
    })
  }), Vo.mount(Lt), document.body.appendChild(Lt);
}
function Mo() {
  Vo && (Vo.unmount(), Vo = null), Lt && (Lt.remove(), Lt = null);
}
function o7(e, s) {
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
function n7() {
  Po || (Po = document.createElement("div"), Po.className = "comfygit-download-queue-root", Xl = Hn({
    render: () => sn(hT)
  }), Xl.mount(Po), document.body.appendChild(Po), console.log("[ComfyGit] Model download queue mounted"));
}
function a7() {
  Ro || (Ro = document.createElement("div"), Ro.className = "comfygit-missing-resources-root", Ql = Hn({
    render: () => sn(HT)
  }), Ql.mount(Ro), document.body.appendChild(Ro), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Ft = null;
function Wo() {
  if (!Ft) return;
  const e = Ft.querySelector(".commit-indicator");
  e && (e.style.display = t7() ? "block" : "none");
}
function Pa() {
  if (!Ft) return;
  const e = sl !== "managed";
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
fs.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    try {
      await Promise.all([
        fs.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
        fs.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
      ]), console.log("[ComfyGit] Disabled built-in missing nodes/models warnings");
    } catch (n) {
      console.warn("[ComfyGit] Failed to disable built-in warnings:", n);
    }
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = fa, Ft = document.createElement("button"), Ft.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ft.innerHTML = 'Commit <span class="commit-indicator"></span>', Ft.title = "Quick Commit", Ft.onclick = () => s7(Ft), e.appendChild(s), e.appendChild(Ft), (i = (l = fs.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (fs.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), n7(), a7(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      fa(u);
    }));
    const { loadPendingDownloads: o } = _o();
    o(), await Promise.all([_n(), Ea()]), Wo(), Pa(), Ta(), setTimeout(Ta, 100), setInterval(async () => {
      await Promise.all([_n(), Ea()]), Wo(), Pa();
    }, 3e4);
    const n = fs.api;
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
        const k = document.createElement("div");
        k.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const x = document.createElement("div");
        x.textContent = "Node installation failed", x.style.cssText = "font-weight: 600; color: #e53935;", k.appendChild(x);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", k.appendChild($), w.appendChild(k);
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
          w.remove(), fa("debug-env");
        }, w.appendChild(R);
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
        console.log(`[ComfyGit] Workflow ${h}: ${w}`), await _n(), Wo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      n.addEventListener("status", async (v) => {
        const h = v.detail != null;
        h && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), m = h;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (v) => {
        const h = ZT(v.detail);
        h && d(h);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
